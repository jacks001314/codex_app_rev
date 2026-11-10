export const __rspack_esm_ids = [971042]
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
            s = "exception" === e.resultType ? e.errorMetadata : null
          return {
            billing_country: e.billingCountry?.trim().toUpperCase() || "unknown",
            billing_currency: e.billingCurrency?.trim().toUpperCase() || "unknown",
            stage: e.stage,
            failure_reason: e.failureReason,
            is_express_checkout: String(e.isExpressCheckout),
            selected_payment_method_type: e.selectedPaymentMethodType ?? "unknown",
            error_source: "error" === e.resultType ? (e.confirmError.source ?? "unknown") : e.source,
            result_type: e.resultType,
            sdk_error_family: a(i(t, "message"), s?.error_name),
            error_category: s?.error_category ?? "confirm_error",
            error_name: null == s ? "ConfirmError" : (s.error_name ?? "unknown"),
            error_type:
              i(t, "type") ??
              (s?.error_is_client_error === !0 ? "client" : s?.error_is_server_error === !0 ? "server" : "unknown"),
            error_code:
              "error" === e.resultType
                ? null != n
                  ? `payment_failed_${n}`
                  : (e.confirmError.code ?? "none")
                : (e.errorMetadata.error_code ?? i(t, "code") ?? "unknown"),
            error_status: s?.error_status != null ? String(s.error_status) : "unknown",
            decline_code: n ?? "unknown",
          }
        },
        PZ: function ({
          hasBillingAddressErrors: e,
          hasEmailErrors: t,
          hasInvalidConfirmError: n,
          hasPaymentElementErrors: a,
          hasTaxInfoErrors: i,
          isExpressCheckout: s,
          submitErrorSource: r,
        }) {
          return {
            failure_reason: "field_validation_failed",
            submit_error_source: r,
            has_billing_address_errors: String(e),
            has_email_errors: String(t),
            has_invalid_confirm_error: String(n),
            has_payment_element_errors: String(a),
            has_tax_info_errors: String(i),
            is_express_checkout: String(s),
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
          isCheckoutModalEnabled: s,
          source: r,
          reportedWebTrack: l,
        }) {
          return {
            plan_type: e ?? "unknown",
            processor_entity: t,
            checkout_kind: n ?? "unknown",
            promotion_campaign: a ?? "none",
            requires_manual_approval: String(i),
            source: r ?? "unknown",
            ...(null == s ? {} : { is_checkout_modal_enabled: String(s) }),
            reported_web_track: l,
          }
        },
      },
    )
  },
  Zy8A(e, t, n) {
    let a = { name: "never" }
    function i(e) {
      return "string" == typeof e && e.startsWith("oaics_")
    }
    n.d(
      t,
      {},
      {
        b2: function (e, t, n) {
          return null == e ? void 0 : e || t?.readOnly === !0 || n?.readOnly === !0
        },
        gD: i,
        j5: function (
          e = {},
          {
            checkoutSessionId: t,
            isNewStripeCustomer: n,
            nativeSaveDefault: s,
            useMinimalBillingAddress: r = !1,
            minimalBillingAddress: l,
            paymentMethodOrder: o,
            paymentElementLayoutMode: c = "tabs",
            shouldHidePaymentElementName: d = !1,
            isGooglePayEnabled: u = !1,
          } = {},
        ) {
          var p, m, g, h
          let f,
            { defaultValues: _, fields: y, wallets: b, ...x } = e,
            v =
              ((p = y),
              (m = d),
              (g = t),
              (h = r),
              (f = "object" == typeof p ? p.billingDetails : void 0),
              i(g)
                ? { ...(m ? a : {}), address: h ? "auto" : "never" }
                : "object" == typeof f
                  ? m
                    ? { ...a, ...f }
                    : f
                  : m
                    ? a
                    : f),
            A = (function (e, t) {
              if (void 0 === e) return e
              let n = e.billingDetails
              if ("object" != typeof n) return e
              let { email: a, ...s } = n
              if ((i(t) && null != a && a.length > 0) || void 0 === a) return e
              if (Object.keys(s).length > 0) return { ...e, billingDetails: s }
              let { billingDetails: r, ...l } = e
              return Object.keys(l).length > 0 ? l : void 0
            })(_, t)
          if (r && i(t)) {
            let { address: e, ...t } = A?.billingDetails ?? {}
            A = { ...A, billingDetails: { ...t, ...(l ? { address: l } : {}) } }
          }
          let T = b
          !0 === n && (T = { ...b, googlePay: u ? "auto" : "never" })
          let w = { ...A, savePaymentMethod: { saveForFuturePurchases: s } }
          return {
            layout:
              "accordion" === c
                ? { type: "accordion", defaultCollapsed: !1 }
                : { type: "auto" === c ? "auto" : "tabs" },
            terms: { card: "never" },
            fields: { ...y, ...(void 0 !== v ? { billingDetails: v } : {}) },
            ...(void 0 !== A ? { defaultValues: A } : {}),
            ...(void 0 !== s ? { defaultValues: w } : {}),
            ...(o ? { paymentMethodOrder: o } : {}),
            ...x,
            ...(void 0 !== T ? { wallets: T } : {}),
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
    function s(e) {
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
          let t = s(e)
          if (null != t) return t
          let n = i(e, "api_organization_id")
          return null == n ? void 0 : { product: "api", id: n }
        },
        Fn: function (e) {
          return "string" == typeof e && Object.hasOwn(a, e)
        },
        YE: function (e, t = s(e)) {
          let n = new URLSearchParams(),
            a = e.get("entry_point")
          null != a &&
            ["billing", "business_billing", "profile_menu", "api_billing"].includes(a) &&
            n.set("entry_point", a)
          let r = i(e, "api_organization_id")
          return (
            null != r && n.set("api_organization_id", r),
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
            s = i && "usd" === a,
            r = null != e && !i && !e.hasPaidSubscription,
            l = i && null != t && 0 === t.balance && null == a,
            o = t?.balances?.usd ?? (t?.currency?.toLowerCase() === "usd" ? t.balance : 0),
            c = o < 0,
            d = !n.countryRestrictionsEnabled || (n.isCountryEligible && (s || r || l)),
            u = d || (t?.has_redeemed_gift_card !== !1 && (c || (t?.has_redeemed_gift_card === !0 && s)))
          return {
            isUsdCustomer: s,
            isUnprovisioned: r,
            usdBalance: o,
            hasUsdWalletCredit: c,
            canRedeemGiftCard: d,
            shouldShowWallet: u,
          }
        },
        y4: function ({
          destinations: e,
          selection: t,
          activeAccountId: n,
          policy: a,
          apiAccountIneligible: i,
          defaultChatgptDestination: s,
        }) {
          let r = e.filter(
              (e) =>
                a.apiEnabled ||
                ("chatgpt" === e.product &&
                  ((a.countryEligible && e.id === n) || (t?.target.product === "chatgpt" && e.id === t.target.id))),
            ),
            l = t?.destination
          l?.product !== "api" || i || r.some((e) => "api" === e.product && e.id === l.id) || r.push(l)
          let o =
            null != t
              ? l
              : a.apiEnabled || null == s
                ? 1 === r.length
                  ? r[0]
                  : r.find((e) => "chatgpt" === e.product && e.id === n)
                : s
          return { options: r, destination: o }
        },
      },
    )
  },
  OQ1m(e, t, n) {
    let a = (e) =>
        `https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/paymen_method_icons_svg/${e}`,
      i = {
        amex: a("Logo=Amex.svg"),
        apple_pay: a("Logo=Apple Pay.svg"),
        blik: a("Logo=Blik.svg"),
        bizum: "",
        cash_app: a("Logo=Cash App.svg"),
        cartes_bancaires: "",
        diners: "",
        discover: "",
        eftpos_au: "",
        gcash: a("Logo=GCash.svg"),
        gopay: a("Logo=GoPay.svg"),
        google_pay: a("Logo=Google Pay.svg"),
        ideal: "",
        jcb: "",
        kakao_pay: a("Logo=Kakao Pay.svg"),
        klarna: a("Logo=Klarna.svg"),
        kr_card: "",
        link: "https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/payment_method_assets/link/link-by-stripe-seeklogo.svg",
        mastercard: a("Logo=Mastercard.svg"),
        momo_wallet: a("Logo=MoMo.svg"),
        naver_pay: a("Logo=Naver Pay.svg"),
        paypal: a("PayPal.svg"),
        pix: a("Logo=Pix.svg"),
        satispay: "",
        sepa: a("Logo=SEPA.svg"),
        twint: "",
        upi: a("Logo=UPI.svg"),
        unknown: "",
        unionpay: a("Logo=Union Pay.svg"),
        visa: a("Logo=Visa.svg"),
      }
    n.d(t, {}, { K: i })
  },
  dv45(e, t, n) {
    n.d(t, { Fv: () => c, Pd: () => o })
    var a = n("OQ1m"),
      i = n("Qgfj")
    let s = (0, i.YK)({
        amex: {
          id: "cardBrandNames.amex",
          defaultMessage: "American Express",
          description: "Name of the American Express card brand",
        },
        cartes_bancaires: {
          id: "cardBrandNames.cartes_bancaires",
          defaultMessage: "Cartes Bancaires",
          description: "Name of the Cartes Bancaires card brand",
        },
        diners: {
          id: "cardBrandNames.diners",
          defaultMessage: "Diners Club",
          description: "Name of the Diners Club card brand",
        },
        discover: {
          id: "cardBrandNames.discover",
          defaultMessage: "Discover",
          description: "Name of the Discover card brand",
        },
        eftpos_au: {
          id: "cardBrandNames.eftpos_au",
          defaultMessage: "EFTPOS Australia",
          description: "Name of the EFTPOS Australia card brand",
        },
        link: { id: "cardBrandNames.link", defaultMessage: "Link", description: "Name of the Link card brand" },
        jcb: { id: "cardBrandNames.jcb", defaultMessage: "JCB", description: "Name of the JCB card brand" },
        mastercard: {
          id: "cardBrandNames.mastercard",
          defaultMessage: "Mastercard",
          description: "Name of the Mastercard card brand",
        },
        unionpay: {
          id: "cardBrandNames.unionpay",
          defaultMessage: "UnionPay",
          description: "Name of the UnionPay card brand",
        },
        visa: { id: "cardBrandNames.visa", defaultMessage: "Visa", description: "Name of the Visa card brand" },
        unknown: {
          id: "cardBrandNames.unknown",
          defaultMessage: "Other",
          description: "Name of an unknown card brand",
        },
      }),
      r = (0, i.YK)({
        paypal: {
          id: "paymentMethodNames.paypal",
          defaultMessage: "PayPal",
          description: "Name of the PayPal payment method",
        },
        klarna: {
          id: "paymentMethodNames.klarna",
          defaultMessage: "Klarna",
          description: "Name of the Klarna payment method",
        },
        cashapp: {
          id: "paymentMethodNames.cashapp",
          defaultMessage: "Cash App",
          description: "Name of the Cash App payment method",
        },
        pix: { id: "paymentMethodNames.pix", defaultMessage: "Pix", description: "Name of the Pix payment method" },
        upi: { id: "paymentMethodNames.upi", defaultMessage: "UPI", description: "Name of the UPI payment method" },
        gcash: {
          id: "paymentMethodNames.gcash",
          defaultMessage: "GCash",
          description: "Name of the GCash payment method",
        },
        momo_wallet: {
          id: "paymentMethodNames.momoWallet",
          defaultMessage: "MoMo",
          description: "Name of the MoMo payment method",
        },
        sepa_debit: {
          id: "paymentMethodNames.sepaDebit",
          defaultMessage: "SEPA Direct Debit",
          description: "Name of the SEPA Direct Debit payment method",
        },
        go_pay: {
          id: "paymentMethodNames.goPay",
          defaultMessage: "GoPay",
          description: "Name of the GoPay payment method",
        },
        blik: { id: "paymentMethodNames.blik", defaultMessage: "BLIK", description: "Name of the BLIK payment method" },
        bizum: {
          id: "paymentMethodNames.bizum",
          defaultMessage: "Bizum",
          description: "Name of the Bizum payment method",
        },
        kr_card: {
          id: "paymentMethodNames.krCard",
          defaultMessage: "Korean Card",
          description: "Name of the Korean card payment method",
        },
        kakao_pay: {
          id: "paymentMethodNames.kakaoPay",
          defaultMessage: "Kakao Pay",
          description: "Name of the Kakao Pay payment method",
        },
        naver_pay: {
          id: "paymentMethodNames.naverPay",
          defaultMessage: "Naver Pay",
          description: "Name of the Naver Pay payment method",
        },
        ideal: {
          id: "paymentMethodNames.ideal",
          defaultMessage: "iDEAL",
          description: "Name of the iDEAL payment method",
        },
        satispay: {
          id: "paymentMethodNames.satispay",
          defaultMessage: "Satispay",
          description: "Name of the Satispay payment method",
        },
        twint: {
          id: "paymentMethodNames.twint",
          defaultMessage: "TWINT",
          description: "Name of the TWINT payment method",
        },
        link: {
          id: "paymentMethodNames.link",
          defaultMessage: "Link",
          description: "Name of the Stripe link payment method",
        },
      })
    function l(e, t) {
      switch (e.trim().toLowerCase()) {
        case "american express":
        case "american_express":
        case "amex":
          return { name: t.formatMessage(s.amex), img_url: a.K.amex }
        case "cartes_bancaires":
          return { name: t.formatMessage(s.cartes_bancaires), img_url: a.K.cartes_bancaires }
        case "diners":
          return { name: t.formatMessage(s.diners), img_url: a.K.diners }
        case "discover":
          return { name: t.formatMessage(s.discover), img_url: a.K.discover }
        case "eftpos_au":
          return { name: t.formatMessage(s.eftpos_au), img_url: a.K.eftpos_au }
        case "link":
          return { name: t.formatMessage(s.link), img_url: a.K.link }
        case "jcb":
          return { name: t.formatMessage(s.jcb), img_url: a.K.jcb }
        case "mastercard":
          return { name: t.formatMessage(s.mastercard), img_url: a.K.mastercard }
        case "unionpay":
          return { name: t.formatMessage(s.unionpay), img_url: a.K.unionpay }
        case "visa":
          return { name: t.formatMessage(s.visa), img_url: a.K.visa }
        default:
          return { name: t.formatMessage(s.unknown), img_url: a.K.unknown }
      }
    }
    function o(e, t = new Date()) {
      if ("card" !== e.type || null == e.card) return !1
      let n = t.getFullYear(),
        a = t.getMonth() + 1
      return e.card.exp_year < n || (e.card.exp_year === n && e.card.exp_month < a)
    }
    function c(e, t) {
      if ("card" === e.type && e.card) return l(e.card.brand, t)
      if ("custom" === e.type && e.custom?.provider === "adyen") {
        if ("gcash" === e.custom.payment_method_type) return { name: t.formatMessage(r.gcash), img_url: a.K.gcash }
        if ("momo_wallet" === e.custom.payment_method_type)
          return { name: t.formatMessage(r.momo_wallet), img_url: a.K.momo_wallet }
      }
      switch (e.type) {
        case "link":
          return { name: t.formatMessage(r.link), img_url: a.K.link }
        case "paypal":
          return { name: t.formatMessage(r.paypal), img_url: a.K.paypal }
        case "klarna":
          return { name: t.formatMessage(r.klarna), img_url: a.K.klarna }
        case "cashapp":
          return { name: t.formatMessage(r.cashapp), img_url: a.K.cash_app }
        case "pix":
          return { name: t.formatMessage(r.pix), img_url: a.K.pix }
        case "upi":
          return { name: t.formatMessage(r.upi), img_url: a.K.upi }
        case "sepa_debit":
          return { name: t.formatMessage(r.sepa_debit), img_url: a.K.sepa }
        case "go_pay":
          return { name: t.formatMessage(r.go_pay), img_url: a.K.gopay }
        case "blik":
          return { name: t.formatMessage(r.blik), img_url: a.K.blik }
        case "bizum":
          return { name: t.formatMessage(r.bizum), img_url: a.K.bizum }
        case "kr_card":
          return { name: t.formatMessage(r.kr_card), img_url: a.K.kr_card }
        case "kakao_pay":
          return { name: t.formatMessage(r.kakao_pay), img_url: a.K.kakao_pay }
        case "naver_pay":
          return { name: t.formatMessage(r.naver_pay), img_url: a.K.naver_pay }
        case "ideal":
          return { name: t.formatMessage(r.ideal), img_url: a.K.ideal }
        case "satispay":
          return { name: t.formatMessage(r.satispay), img_url: a.K.satispay }
        case "twint":
          return { name: t.formatMessage(r.twint), img_url: a.K.twint }
        default:
          return l("unknown", t)
      }
    }
  },
  Ga8Y(e, t, n) {
    var a = n("Qgfj")
    let i = "HU[0-9]{8}",
      s = RegExp(`^${i}$`),
      r = new Set([
        "AE",
        "AM",
        "AT",
        "AU",
        "AZ",
        "BD",
        "BE",
        "BG",
        "BH",
        "CA",
        "CH",
        "CL",
        "CY",
        "CZ",
        "DE",
        "DK",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GE",
        "GR",
        "HR",
        "HU",
        "ID",
        "IE",
        "IN",
        "IS",
        "IT",
        "KE",
        "KG",
        "KH",
        "KR",
        "KZ",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MD",
        "MT",
        "NG",
        "NL",
        "NO",
        "NZ",
        "PE",
        "PH",
        "PL",
        "PT",
        "RO",
        "SA",
        "SE",
        "SG",
        "SI",
        "SK",
        "TH",
        "TR",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UZ",
        "VN",
        "ZA",
      ])
    function l(e, t) {
      if (null != e.country_specific_type)
        return t.find((t) => t.type === e.country_specific_type && t.stripe_type === e.type) ?? null
      if (null != e.country) return t.find((t) => t.country === e.country && t.stripe_type === e.type) ?? null
      let n = t.filter((t) => t.stripe_type === e.type)
      return 1 === n.length ? n[0] : null
    }
    let o = (0, a.zR)({
      id: "chatgpt.payments.tax_id.error.hungarian_vat_format",
      defaultMessage: "Hungarian VAT IDs must start with HU followed by exactly 8 digits, for example HU12345678.",
      description:
        "Validation error in ChatGPT checkout and billing settings when a Hungarian EU VAT ID has the wrong format. HU is a literal country prefix and HU12345678 is an example, not a registration to use. Keep both unchanged. Plain text.",
    })
    n.d(
      t,
      {},
      {
        Gm: function (e, t) {
          let n = t.trim()
          return n.length > 0 && ("hu_vat" !== e || s.test(n))
        },
        H6: function (e, t, n) {
          return null == t
            ? [...e]
            : e.filter((e) => {
                let a = l(e, t)
                return null == a || n.some((e) => e.type === a.type)
              })
        },
        LO: l,
        aI: function (e) {
          return { type: e.type, value: e.value.trim(), country: e.country }
        },
        im: function (e, t) {
          let n
          return r.has(e)
            ? ((n = new Set(t.filter((t) => t.country === e && t.supported).map((e) => e.region))),
              t
                .filter((e) => n.has(e.region) && e.supported)
                .map((e) => ("hu_vat" === e.type ? { ...e, format: i, placeholder: "HU12345678" } : e)))
            : []
        },
        zf: o,
      },
    )
  },
  MCtJ(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      r = n("dNkn"),
      l = n("QcW8")
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n,
            o,
            c,
            d,
            u,
            p,
            m = (0, i.c)(22),
            { children: g, className: h, contentFade: f, divider: _, desktopPlacement: y, inline: b, separator: x } = e,
            v = void 0 !== x && x,
            A = b ? null : g
          m[0] !== A ? ((t = (0, a.jsx)(r.F, { signal: l.Wg, value: A })), (m[0] = A), (m[1] = t)) : (t = m[1])
          let T = b ? null : void 0 === y ? "page" : y
          m[2] !== T ? ((n = (0, a.jsx)(r.F, { signal: l.R0, value: T })), (m[2] = T), (m[3] = n)) : (n = m[3])
          let w = b ? null : void 0 === f || f
          m[4] !== w ? ((o = (0, a.jsx)(r.F, { signal: l.nB, value: w })), (m[4] = w), (m[5] = o)) : (o = m[5])
          let N = b ? null : void 0 === _ || _
          m[6] !== N ? ((c = (0, a.jsx)(r.F, { signal: l.zE, value: N })), (m[6] = N), (m[7] = c)) : (c = m[7])
          let j = b ? null : v
          return (
            m[8] !== j ? ((d = (0, a.jsx)(r.F, { signal: l.dC, value: j })), (m[8] = j), (m[9] = d)) : (d = m[9]),
            m[10] !== g || m[11] !== h || m[12] !== b || m[13] !== v
              ? ((u = b
                  ? (0, a.jsx)("div", { className: (0, s.A)(h, v && "border-b-hairline border-strong"), children: g })
                  : null),
                (m[10] = g),
                (m[11] = h),
                (m[12] = b),
                (m[13] = v),
                (m[14] = u))
              : (u = m[14]),
            m[15] !== o || m[16] !== c || m[17] !== d || m[18] !== u || m[19] !== t || m[20] !== n
              ? ((p = (0, a.jsxs)(a.Fragment, { children: [t, n, o, c, d, u] })),
                (m[15] = o),
                (m[16] = c),
                (m[17] = d),
                (m[18] = u),
                (m[19] = t),
                (m[20] = n),
                (m[21] = p))
              : (p = m[21]),
            p
          )
        },
        f: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: s } = e
          return (
            n[0] !== s ? ((t = (0, a.jsx)(r.F, { signal: l.So, value: s })), (n[0] = s), (n[1] = t)) : (t = n[1]),
            t
          )
        },
      },
    )
  },
  dNkn(e, t, n) {
    var a = n("zTeN"),
      i = n("Oj9r"),
      s = n("tVrA")
    n.d(
      t,
      {},
      {
        F: function (e) {
          let { signal: t, value: n } = e,
            r = (0, a.gh)(i.GD)
          return ((0, s.I)(r, t, n), null)
        },
      },
    )
  },
  IDNd(e, t, n) {
    let a = (0, n("zd8w").createContext)(!0)
    n.d(t, {}, { G: a })
  },
  MeAu(e, t, n) {
    n.d(t, { oE: () => r, hq: () => l, Ow: () => o })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    function r(e) {
      let t,
        n,
        r = (0, i.c)(9),
        { children: l, inset: o, size: c } = e,
        d = void 0 === o || o,
        u =
          "pane" === (void 0 === c ? "header" : c)
            ? "h-toolbar-pane"
            : "electron:h-[var(--app-shell-header-height,var(--height-toolbar))] extension:py-row-y",
        p = !0 === d && "DefaultInset-_kR2Iv",
        m = "page" === d && "PageInset-YLtCuh",
        g = ("tab-strip" === d || "tab-strip-flush-start" === d) && "TabStripInset-s7NayL",
        h = "tab-strip-flush-start" === d && "TabStripFlushStart-C9qRZk"
      return (
        r[0] !== u || r[1] !== p || r[2] !== m || r[3] !== g || r[4] !== h
          ? ((t = (0, s.A)(
              "Toolbar-w4tLPD",
              "@container/app-shell-header-toolbar flex w-full min-w-0 items-center justify-between gap-2",
              u,
              p,
              m,
              g,
              h,
            )),
            (r[0] = u),
            (r[1] = p),
            (r[2] = m),
            (r[3] = g),
            (r[4] = h),
            (r[5] = t))
          : (t = r[5]),
        r[6] !== l || r[7] !== t
          ? ((n = (0, a.jsx)("div", { className: t, "data-app-shell-header-toolbar": !0, children: l })),
            (r[6] = l),
            (r[7] = t),
            (r[8] = n))
          : (n = r[8]),
        n
      )
    }
    function l(e) {
      let t,
        n,
        r,
        l = (0, i.c)(9),
        { children: o, compact: c, allowShrink: d, secondary: u } = e,
        p = void 0 !== d && d ? "min-w-0" : "shrink-0",
        m = void 0 !== c && c ? "gap-px" : "gap-toolbar-action"
      return (
        l[0] !== p || l[1] !== m
          ? ((t = (0, s.A)("ms-auto flex items-center justify-end", p, m)), (l[0] = p), (l[1] = m), (l[2] = t))
          : (t = l[2]),
        l[3] !== u
          ? ((n =
              null != u
                ? (0, a.jsx)("div", { className: "hidden @2xl/app-shell-header-toolbar:contents", children: u })
                : null),
            (l[3] = u),
            (l[4] = n))
          : (n = l[4]),
        l[5] !== o || l[6] !== t || l[7] !== n
          ? ((r = (0, a.jsxs)("div", { className: t, children: [n, o] })),
            (l[5] = o),
            (l[6] = t),
            (l[7] = n),
            (l[8] = r))
          : (r = l[8]),
        r
      )
    }
    function o(e) {
      let t,
        n,
        r,
        l = (0, i.c)(5),
        { visible: o } = e,
        c = !(void 0 === o || o) && "invisible"
      return (
        l[0] !== c
          ? ((t = (0, s.A)("pointer-events-none flex shrink-0 py-1.5", c)), (l[0] = c), (l[1] = t))
          : (t = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("div", { className: "h-4 w-px bg-border" })), (l[2] = n))
          : (n = l[2]),
        l[3] !== t
          ? ((r = (0, a.jsx)("div", { "aria-hidden": !0, className: t, children: n })), (l[3] = t), (l[4] = r))
          : (r = l[4]),
        r
      )
    }
  },
  tVrA(e, t, n) {
    var a = n("QosV"),
      i = n("zd8w")
    n.d(
      t,
      {},
      {
        I: function (e, t, n) {
          let s,
            r,
            l,
            o,
            c = (0, a.c)(9)
          ;(c[0] !== e || c[1] !== t || c[2] !== n
            ? ((s = () => {
                e.set(t, n)
              }),
              (r = [e, t, n]),
              (c[0] = e),
              (c[1] = t),
              (c[2] = n),
              (c[3] = s),
              (c[4] = r))
            : ((s = c[3]), (r = c[4])),
            (0, i.useLayoutEffect)(s, r),
            c[5] !== e || c[6] !== t
              ? ((l = () => () => {
                  e.set(t, null)
                }),
                (o = [e, t]),
                (c[5] = e),
                (c[6] = t),
                (c[7] = l),
                (c[8] = o))
              : ((l = c[7]), (o = c[8])),
            (0, i.useLayoutEffect)(l, o))
        },
      },
    )
  },
  TjgH(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    let r = {
      catalog:
        "gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm leading-5 font-normal text-default",
      catalogDisabled:
        "gap-2 rounded-full border border-subtle bg-surface-tertiary px-3 py-1.5 text-sm leading-5 font-normal text-tertiary opacity-70",
      unread:
        "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-info-solid px-0.5 text-unread-badge text-(--color-text-unread-badge) tabular-nums select-none",
      count:
        "h-5 min-w-6 justify-center rounded-full bg-text/8 px-1.25 text-xs leading-4.5 font-semibold tracking-[0.3px] text-(--gray-750) tabular-nums",
      default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
      info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
      outline:
        "rounded-sm border border-default bg-transparent px-2 py-1 text-xs leading-none font-medium text-secondary",
      outlinePill: "h-6 rounded-full border border-subtle px-2.5 text-xs leading-4 font-semibold text-secondary",
      identity:
        "max-w-full min-w-0 rounded-xl border border-default px-3 py-2 text-heading-lg leading-7 font-medium wrap-anywhere text-default select-text",
      neutral:
        "h-7 gap-1.5 rounded-full border border-default bg-surface-secondary px-2.5 text-sm leading-none font-medium whitespace-nowrap text-secondary",
      neutralCompact:
        "h-6 gap-1 rounded-md border border-default bg-surface-secondary px-2 text-xs leading-none font-medium whitespace-nowrap text-secondary",
      recipient:
        "h-7 gap-1.5 rounded-md bg-secondary-soft px-2 text-sm leading-none font-normal whitespace-nowrap text-default",
      offer:
        "min-h-5 gap-1 rounded-[6px] bg-chart-green/15 px-2.5 py-1 text-xs font-medium text-chart-green tabular-nums light:text-(color:--green-700)",
      promotion:
        "min-h-6 rounded-full bg-chart-purple/10 px-2.5 text-sm leading-none font-medium whitespace-nowrap text-chart-purple",
      success: "min-h-5 rounded-full bg-chart-green/15 px-2 text-xs font-medium text-chart-green tabular-nums",
      warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-surface",
      caution: "min-h-5 rounded-full bg-yellow/15 px-2 text-xs font-medium text-yellow light:text-default",
      danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-surface",
      tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      tipInset:
        "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      internal:
        "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
      reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
      recording:
        "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info-soft/15 dark:text-info-soft",
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            l,
            o = (0, i.c)(10),
            { ref: c, children: d, className: u, variant: p } = e,
            m = void 0 === p ? "default" : p,
            g = r[m]
          return (
            o[0] !== u || o[1] !== g
              ? ((t = (0, s.A)("inline-flex items-center", g, u)), (o[0] = u), (o[1] = g), (o[2] = t))
              : (t = o[2]),
            o[3] !== d || o[4] !== m
              ? ((n = "unread" === m ? (0, a.jsx)("span", { className: "text-cap-trim", children: d }) : d),
                (o[3] = d),
                (o[4] = m),
                (o[5] = n))
              : (n = o[5]),
            o[6] !== c || o[7] !== t || o[8] !== n
              ? ((l = (0, a.jsx)("span", { ref: c, className: t, children: n })),
                (o[6] = c),
                (o[7] = t),
                (o[8] = n),
                (o[9] = l))
              : (l = o[9]),
            l
          )
        },
      },
    )
  },
  cZk2(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("zd8w"),
      r = n("oyxz"),
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
            d,
            u = (0, i.c)(17),
            {
              open: p,
              onOpenChange: m,
              onCloseAutoFocus: g,
              title: h,
              failed: f,
              embedded: _,
              size: y,
              children: b,
              dialogComponent: x,
              restoreFocusOnUnmount: v,
            } = e,
            A = void 0 !== f && f,
            T = void 0 !== _ && _,
            w = void 0 === x ? l.lG : x,
            N = (0, s.useRef)(p)
          ;(u[0] !== p
            ? ((t = () => {
                N.current = p
              }),
              (n = [p]),
              (u[0] = p),
              (u[1] = t),
              (u[2] = n))
            : ((t = u[1]), (n = u[2])),
            (0, s.useLayoutEffect)(t, n))
          let j = T ? "h2" : l.L3
          u[3] !== j || u[4] !== b || u[5] !== A || u[6] !== h
            ? ((c =
                b ??
                (0, a.jsx)(o.R4, {
                  children: (0, a.jsx)(o.OO, {
                    className: "select-none",
                    children: (0, a.jsx)(o.c7, {
                      title: (0, a.jsx)(j, { children: h }),
                      subtitle: A
                        ? (0, a.jsx)(r.A, {
                            id: "codex.dialogLoadState.reload",
                            defaultMessage: "Reload the app and try again",
                            description:
                              "Recovery instructions after both attempts to download a dialog fail; closing and reopening does not retry the download",
                          })
                        : void 0,
                    }),
                  }),
                })),
              (u[3] = j),
              (u[4] = b),
              (u[5] = A),
              (u[6] = h),
              (u[7] = c))
            : (c = u[7])
          let I = c
          return (
            u[8] !== w ||
            u[9] !== I ||
            u[10] !== T ||
            u[11] !== g ||
            u[12] !== m ||
            u[13] !== p ||
            u[14] !== v ||
            u[15] !== y
              ? ((d = T
                  ? I
                  : (0, a.jsx)(w, {
                      open: p,
                      size: y,
                      onOpenChange: (e) => {
                        ;((N.current = e), m(e))
                      },
                      contentProps: {
                        "aria-describedby": void 0,
                        onCloseAutoFocus: (e) => {
                          N.current && !v?.() ? e.preventDefault() : g?.(e)
                        },
                      },
                      children: I,
                    })),
                (u[8] = w),
                (u[9] = I),
                (u[10] = T),
                (u[11] = g),
                (u[12] = m),
                (u[13] = p),
                (u[14] = v),
                (u[15] = y),
                (u[16] = d))
              : (d = u[16]),
            d
          )
        },
      },
    )
  },
  GK7D(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            r,
            l,
            o,
            c,
            d,
            u,
            p,
            m,
            g = (0, i.c)(30),
            { actions: h, asset: f, subtitle: _, subtitleClassName: y, title: b, variant: x } = e,
            v = void 0 === x ? "default" : x
          g[0] !== f
            ? ((t = null == f ? null : (0, a.jsx)("div", { className: "flex", children: f })), (g[0] = f), (g[1] = t))
            : (t = g[1])
          let A = "page" === v ? "flex-nowrap" : "flex-wrap"
          g[2] !== A
            ? ((n = (0, s.A)("flex min-w-0 items-start justify-between gap-4", A)), (g[2] = A), (g[3] = n))
            : (n = g[3])
          let T = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          g[4] !== T ? ((r = (0, s.A)("flex min-w-0 flex-1 basis-64 flex-col", T)), (g[4] = T), (g[5] = r)) : (r = g[5])
          let w = "settings" === v && "heading-lg font-normal",
            N = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            j = "page" === v && "heading-lg electron:heading-xl",
            I = "default" === v && "heading-base electron:heading-lg"
          return (
            g[6] !== I || g[7] !== w || g[8] !== N || g[9] !== j
              ? ((l = (0, s.A)("min-w-0 break-words text-default", w, N, j, I)),
                (g[6] = I),
                (g[7] = w),
                (g[8] = N),
                (g[9] = j),
                (g[10] = l))
              : (l = g[10]),
            g[11] !== l || g[12] !== b
              ? ((o = (0, a.jsx)("h1", { className: l, children: b })), (g[11] = l), (g[12] = b), (g[13] = o))
              : (o = g[13]),
            g[14] !== _ || g[15] !== y
              ? ((c =
                  null == _
                    ? null
                    : (0, a.jsx)("div", { className: (0, s.A)("text-base text-secondary", y), children: _ })),
                (g[14] = _),
                (g[15] = y),
                (g[16] = c))
              : (c = g[16]),
            g[17] !== o || g[18] !== c || g[19] !== r
              ? ((d = (0, a.jsxs)("div", { className: r, children: [o, c] })),
                (g[17] = o),
                (g[18] = c),
                (g[19] = r),
                (g[20] = d))
              : (d = g[20]),
            g[21] !== h
              ? ((u =
                  null == h
                    ? null
                    : (0, a.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: h })),
                (g[21] = h),
                (g[22] = u))
              : (u = g[22]),
            g[23] !== d || g[24] !== u || g[25] !== n
              ? ((p = (0, a.jsxs)("div", { className: n, children: [d, u] })),
                (g[23] = d),
                (g[24] = u),
                (g[25] = n),
                (g[26] = p))
              : (p = g[26]),
            g[27] !== p || g[28] !== t
              ? ((m = (0, a.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, p],
                })),
                (g[27] = p),
                (g[28] = t),
                (g[29] = m))
              : (m = g[29]),
            m
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
            shouldShowWallet: s,
            usdBalance: r,
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
          return { canRedeem: i, showWallet: s, usdBalance: r }
        },
        x: function (e) {
          let t = e.getLayer("225453312"),
            n = t.get("redemption_country_restrictions_enabled", !1),
            a = e.getContext().user?.country?.trim().toUpperCase(),
            s = i
              .array(i.string().catch(""))
              .catch([])
              .parse(t.get("redemption_eligible_countries", ["US"]))
              .map((e) => e.trim().toUpperCase())
          return {
            restrictionsEnabled: n,
            countryEligible: !n || (null != a && s.includes(a)),
            usOnly: s.length > 0 && s.every((e) => "US" === e),
          }
        },
      },
    )
  },
  JGV6(e, t, n) {
    var a = n("S2r0"),
      i = n("zTeN"),
      s = n("CLax"),
      r = n("Ghh3"),
      l = n("OWtl")
    let o = (0, i.vU)(l.u, (e, { scope: t }) => d(t, e)),
      c = (0, i.vU)(l.u, function (e) {
        let t = ["consumer-billing", e, "wallet"]
        return (0, a.j)({
          queryKey: t,
          queryFn: async ({ signal: n, client: a }) => {
            let i = await r.Request.safeGet("/accounts/{account_id}/customer-balance", {
                parameters: { path: { account_id: e }, query: { include_redemption_status: !0 } },
                signal: n,
              }),
              s = a.getQueryData(t)
            return s?.has_redeemed_gift_card === !0 && null == i.has_redeemed_gift_card
              ? { ...i, has_redeemed_gift_card: !0 }
              : i
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
    function d(e, t) {
      return (0, a.j)({
        ...e.query.getOptions(s.sE, t),
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        retry: !1,
        retryOnMount: !1,
        select: (e) => e.accounts[t],
      })
    }
    n.d(t, {}, { Bd: o, T9: d, kL: c })
  },
  p3vI(e, t, n) {
    var a = n("S2r0"),
      i = n("D7Ms"),
      s = n("HFSu")
    n.d(
      t,
      {},
      {
        r: function (e) {
          return (0, a.j)({
            queryKey: ["consumer-billing", e, "payment-methods"],
            queryFn:
              null == e
                ? i.hT
                : ({ signal: t }) =>
                    s.CodexRequest.safeGet("/payments/payment_methods", {
                      parameters: { query: { account_id: e } },
                      signal: t,
                    }),
            staleTime: 0,
            retry: !1,
          })
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
  ufra(e, t, n) {
    n.d(t, { e: () => d, x: () => u })
    var a = n("HqZu")
    let i = new Set(["AD", "AX", "CH", "GB", "MC", "ME", "PF", "RS", "SM", "VA", "XK"])
    var s = n("ASxG"),
      r = n("HFSu"),
      l = n("eShZ")
    let o = s.looseObject({
        country_code: s.string(),
        currency_config: s.looseObject({
          symbol_code: s.string().nullish(),
          pricing_rollout_gate: s.string().nullish(),
        }),
      }),
      c = s.object({ detail: s.literal("Country config not found") })
    async function d({ country: e, currency: t, isPricingEnabled: n, prefetchedCountryConfig: s, signal: r }) {
      return (async function ({
        country: e,
        currency: t,
        fetchConfig: n,
        isCountryConfigNotFound: s,
        isPricingEnabled: r,
        prefetchedCountryConfig: l,
      }) {
        let o = e?.trim().toUpperCase(),
          c = t?.trim().toUpperCase(),
          d = o && ((0, a.IC)(o) || i.has(o)) ? "EU" : "US",
          u = null
        if (o)
          try {
            u = await (l ?? n(o))
          } catch (e) {
            if (!s(e)) throw e
          }
        if ((c && u?.currency_config?.symbol_code !== c && (u = await n(c)), null == u)) return n(d)
        let p = u.currency_config?.pricing_rollout_gate
        return p && !(await r(p)) ? n(d) : u
      })({
        country: e,
        currency: t,
        fetchConfig: (e) => p(e, r),
        isPricingEnabled: n,
        prefetchedCountryConfig: s,
        isCountryConfigNotFound: (e) => {
          if (e instanceof l.fk && 404 === e.status)
            try {
              return c.safeParse(JSON.parse(e.message)).success
            } catch {}
          return !1
        },
      })
    }
    function u({ country: e, signal: t }) {
      return p(e.trim().toUpperCase(), t)
    }
    async function p(e, t) {
      return o.parse(
        await r.CodexRequest.safeGet("/checkout_pricing_config/configs/{country_code}", {
          parameters: { path: { country_code: e } },
          signal: t,
        }),
      )
    }
  },
  On09(e, t, n) {
    var a = n("laUo"),
      i = n("FuzG")
    n.d(
      t,
      {},
      {
        U: function (e, t) {
          if ("chatgptplus_no_payment_trial" !== e.entitlement.subscription_plan) return e
          if (null == t) return void 0 === t ? null : e
          let n = t.entitlement,
            s = t.last_active_subscription
          return n?.subscription_plan === "chatgptplus_no_payment_trial"
            ? e
            : null == n || null == s || n.subscription_id !== t.id || s.subscription_id !== t.id
              ? null
              : !0 === n.has_active_subscription &&
                  !0 !== n.is_active_subscription_gratis &&
                  (0, a.gx)(t.plan_type) &&
                  n.subscription_plan === (0, i.K)(t.plan_type) &&
                  ("chatgpt_web" === s.purchase_origin_platform ||
                    "chatgpt_mobile_ios_web_view" === s.purchase_origin_platform)
                ? {
                    ...e,
                    account: { ...e.account, plan_type: t.plan_type },
                    entitlement: { ...n, is_eligible_for_cp: e.entitlement.is_eligible_for_cp },
                    last_active_subscription: s,
                  }
                : e
        },
      },
    )
  },
  xjn7(e, t, n) {
    var a = n("SZCv"),
      i = n.n(a),
      s = n("zTeN"),
      r = n("ASxG"),
      l = n("SPnB"),
      o = n("OWtl"),
      c = n("kpIY"),
      d = n("Nwp9")
    let u = r.object({
        viewMode: r
          .enum(["grid", "list"])
          .optional()
          .catch(void 0),
        hiddenProviders: r
          .array(
            r.enum(["native", "native_shared", "google_drive", "box", "dropbox", "sharepoint", "onedrive", "imanage"]),
          )
          .catch([]),
        accountVisibility: r.record(r.string(), r.boolean()).catch({}),
        lastTab: r.enum(["suggested", "folders", "images", "all", "favorites"]).catch("suggested"),
      }),
      p = u.parse({}),
      m = (0, d.Kn)(f, void 0),
      g = (0, s.i1)(o.u, (e, { get: t }) => u.safeParse(t(m, e)).data ?? p, { isEqual: i() })
    function h({ accountId: e, userId: t }) {
      return null == t ? null : JSON.stringify([e, t])
    }
    function f(e) {
      return `library-display-preferences:${e}`
    }
    n.d(
      t,
      {},
      {
        Nf: function (e) {
          let t = e.get(l.chatGptAuthenticatedAccountId$)
          if (null == t || "allowed" !== e.get(l.qz)) return "/library"
          let n = h({ accountId: t, userId: e.get(l.chatGptAuthenticatedUserId$) }),
            a = null == n ? void 0 : e.get(g, n).lastTab
          return null == a || "suggested" === a ? "/library" : `/library?tab=${a}`
        },
        XS: h,
        by: g,
        j$: p,
        pV: function (e, t, n) {
          let a = f(t)
          ;((0, c.EG)(a, { entries: Object.fromEntries(Object.entries(n).map(([e, t]) => [e, { value: t }])) }),
            e.set(m, t, (0, c.TB)(a, void 0)))
        },
      },
    )
  },
  dT9t(e, t, n) {
    var a = n("ufra")
    n.d(t, { fetchBillingPricingConfig: () => a.e, x: () => a.x })
  },
  nUYz(e, t, n) {
    n.d(t, { ConsumerBillingSettings: () => tp })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("GaEn"),
      r = n("T0Rc"),
      l = n("zTeN"),
      o = n("zd8w"),
      c = n("oyxz"),
      d = n("EOo5"),
      u = n("OAko"),
      p = n("JGV6"),
      m = n("On09"),
      g = n("OWtl"),
      h = n("jxU8"),
      f = n("QyE3"),
      _ = n("hZax"),
      y = n("HqZu"),
      b = n("v89U"),
      x = n("Ga8Y"),
      v = n("C5k8"),
      A = n("xSOA"),
      T = n("Wf1j"),
      w = n("ygO2"),
      N = n("JNtf"),
      j = n("mUDD"),
      I = n("zLIa"),
      E = n("BSnr"),
      S = n("AWNZ"),
      C = n("ZEx5"),
      P = n("EWIu"),
      B = n("LH8k"),
      M = n("HFSu"),
      k = n("a6Zv"),
      L = n("MVHH"),
      G = n("bNMl")
    function O(e, t, n) {
      e.get(G.YV).logProductEvent(L.MU, {
        actionType: t,
        mobileStore: n,
        location: "CHATGPT_WEB_BILLING_SETTINGS_LOCATION_CONSUMER_BILLING_PAGE",
      })
    }
    var D = n("I7Ou")
    function R(e) {
      let t,
        n,
        s = (0, i.c)(4),
        { children: r } = e
      return (
        s[0] !== r
          ? ((t =
              void 0 === r
                ? (0, a.jsx)(c.A, {
                    id: "settings.panel.loading",
                    defaultMessage: "Loading settings…",
                    description: "Loading state shown while settings load",
                  })
                : r),
            (s[0] = r),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== t
          ? ((n = (0, a.jsx)(C.t, { children: (0, a.jsx)(D.u, { children: t }) })), (s[2] = t), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    var H = n("wbWw"),
      U = n("Mu1y"),
      z = n("RDnT"),
      W = n("iLQO"),
      F = n("m39z"),
      q = n("zKCW"),
      K = n("GO7r")
    function Y(e) {
      let t,
        n,
        s,
        r,
        l,
        o,
        d = (0, i.c)(16),
        { children: u, verificationStatus: p, onEdit: m } = e
      return (
        d[0] !== u
          ? ((t = (0, a.jsx)("span", { className: "select-text", children: u })), (d[0] = u), (d[1] = t))
          : (t = d[1]),
        d[2] !== p
          ? ((n =
              "verified" === p
                ? (0, a.jsxs)("span", {
                    className: "inline-flex items-center gap-1 text-success select-none",
                    children: [
                      (0, a.jsx)(K.TlE, {}),
                      (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.taxIdVerification.verified",
                        defaultMessage: "Verified",
                        description:
                          "Label beside a saved tax ID in personal billing settings. The payment provider verified the ID; this does not describe whether tax will be charged",
                      }),
                    ],
                  })
                : null),
            (d[2] = p),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== p
          ? ((s =
              "unverified" === p
                ? (0, a.jsxs)("span", {
                    className: "inline-flex items-center gap-1 text-warning select-none",
                    children: [
                      (0, a.jsx)(K.Ko7, {}),
                      (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.taxIdVerification.unverified",
                        defaultMessage: "Not verified",
                        description:
                          "Label beside a saved tax ID when the payment provider could not verify it. This is a completed result, not a pending check",
                      }),
                    ],
                  })
                : null),
            (d[4] = p),
            (d[5] = s))
          : (s = d[5]),
        d[6] !== t || d[7] !== n || d[8] !== s
          ? ((r = (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-3 gap-y-1",
              children: [t, n, s],
            })),
            (d[6] = t),
            (d[7] = n),
            (d[8] = s),
            (d[9] = r))
          : (r = d[9]),
        d[10] !== m || d[11] !== p
          ? ((l =
              "unverified" === p
                ? (0, a.jsx)(q.l, {
                    type: "warning",
                    variant: "settings",
                    stackOnNarrow: !0,
                    primaryCtaColor: "primary",
                    title: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.taxIdVerification.warningTitle",
                      defaultMessage: "We couldn’t verify your tax ID",
                      description:
                        "Warning heading in personal billing settings when the payment provider could not verify the saved tax ID",
                    }),
                    content: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.taxIdVerification.warningDescription",
                      defaultMessage: "Check the tax ID and update it if needed",
                      description:
                        "Guidance after tax ID verification failed. Ask the account owner to check and correct the saved number; saving an unchanged number does not retry verification",
                    }),
                    primaryCtaText: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.taxIdVerification.edit",
                      defaultMessage: "Edit tax ID",
                      description:
                        "Button in the tax ID verification warning that opens the existing billing information editor",
                    }),
                    onPrimaryCtaClick: m,
                  })
                : null),
            (d[10] = m),
            (d[11] = p),
            (d[12] = l))
          : (l = d[12]),
        d[13] !== r || d[14] !== l
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [r, l] })),
            (d[13] = r),
            (d[14] = l),
            (d[15] = o))
          : (o = d[15]),
        o
      )
    }
    var V = n("rP7y")
    function $(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        m,
        h,
        f,
        y,
        b = (0, i.c)(62),
        { accountId: v } = e,
        A = (0, l.gh)(g.u),
        N = (0, T.A)()
      b[0] !== v ? ((t = (0, H.wm)(v)), (b[0] = v), (b[1] = t)) : (t = b[1])
      let { data: j, isPending: I, isError: P, refetch: B } = (0, r.I)(t),
        [M, k] = (0, o.useState)(!1),
        L = (0, o.useRef)(null)
      b[2] !== A
        ? ((n = function () {
            ;(O(A, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_BILLING_INFORMATION_CLICKED"), k(!0))
          }),
          (b[2] = A),
          (b[3] = n))
        : (n = b[3])
      let G = n,
        D = j?.address,
        z = D?.country,
        W = (0, _.Fj)("2144562623")
      if (
        b[4] !== D?.city ||
        b[5] !== D?.line1 ||
        b[6] !== D?.line2 ||
        b[7] !== D?.postal_code ||
        b[8] !== D?.state ||
        b[9] !== j ||
        b[10] !== z ||
        b[11] !== N ||
        b[12] !== P ||
        b[13] !== I ||
        b[14] !== G ||
        b[15] !== B ||
        b[16] !== W.value.tax_types
      ) {
        d = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            i,
            r = (0, V.Ts)(W.value.tax_types),
            l = (0, V.oj)(z ?? "", W.value.tax_types),
            o = (0, x.H6)(j?.tax_ids ?? [], null == z ? null : r, l),
            u = D?.line1,
            p = D?.line2
          b[19] !== u || b[20] !== p
            ? ((e = [u, p].filter(Boolean)), (b[19] = u), (b[20] = p), (b[21] = e))
            : (e = b[21])
          let m = e.join(", "),
            g = D?.city,
            h = D?.state,
            f = D?.postal_code
          b[22] !== f || b[23] !== g || b[24] !== h
            ? ((t = [g, h, f].filter(Boolean)), (b[22] = f), (b[23] = g), (b[24] = h), (b[25] = t))
            : (t = b[25])
          let _ = t.join(", ")
          ;(b[26] !== z || b[27] !== N
            ? ((n = z && /^[A-Z]{2}$/i.test(z) ? N.formatDisplayName(z.toUpperCase(), { type: "region" }) : z),
              (b[26] = z),
              (b[27] = N),
              (b[28] = n))
            : (n = b[28]),
            b[29] !== _ || b[30] !== n || b[31] !== m
              ? ((i = [m, _, n].filter(Boolean)), (b[29] = _), (b[30] = n), (b[31] = m), (b[32] = i))
              : (i = b[32]))
          let y = i.join("\n")
          if (!I && !P && !j?.email && !j?.name && !y && !o?.some(Z)) {
            d = null
            break e
          }
          if (I) {
            let e
            ;(b[33] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(R, {
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.loadingBillingInformation",
                    defaultMessage: "Loading billing information",
                    description: "Status while the personal billing email, name, address and tax information load",
                  }),
                })),
                (b[33] = e))
              : (e = b[33]),
              (s = e))
          } else if (P) {
            let e
            ;(b[34] !== B
              ? ((e = (0, a.jsx)(U.E, { onRetry: () => void B() })), (b[34] = B), (b[35] = e))
              : (e = b[35]),
              (s = e))
          } else {
            let e, t, n, i
            ;(b[36] !== j
              ? ((e = j?.email
                  ? (0, a.jsx)(S.ic, {
                      label: (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.billingEmail",
                        defaultMessage: "Billing email",
                        description:
                          "Label for the address receiving billing communications, shown in the consumer billing summary and editor",
                      }),
                      description: (0, a.jsx)("span", { className: "select-text", children: j.email }),
                      control: null,
                    })
                  : null),
                (b[36] = j),
                (b[37] = e))
              : (e = b[37]),
              b[38] !== j
                ? ((t = j?.name
                    ? (0, a.jsx)(S.ic, {
                        label: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.billingName",
                          defaultMessage: "Name",
                          description: "Label for the name on billing invoices",
                        }),
                        description: (0, a.jsx)("span", { className: "select-text", children: j.name }),
                        control: null,
                      })
                    : null),
                  (b[38] = j),
                  (b[39] = t))
                : (t = b[39]),
              b[40] !== y
                ? ((n = y
                    ? (0, a.jsx)(S.ic, {
                        label: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.billingAddress",
                          defaultMessage: "Billing address",
                          description: "Label for the postal address on billing invoices",
                        }),
                        description: (0, a.jsx)("span", { className: "whitespace-pre-line select-text", children: y }),
                        control: null,
                      })
                    : null),
                  (b[40] = y),
                  (b[41] = n))
                : (n = b[41]))
            let r =
              null != o && o.length > 0
                ? (0, a.jsx)(S.ic, {
                    label: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.taxIds",
                      defaultMessage: "Tax IDs",
                      description:
                        "Label for all saved business tax identification numbers on consumer billing invoices",
                    }),
                    description: (0, a.jsx)("div", {
                      className: "flex flex-col gap-3",
                      children: o.map((e, t) =>
                        (0, a.jsx)(
                          Y,
                          {
                            verificationStatus: e.verification_status,
                            onEdit: G,
                            children: (0, a.jsx)(c.A, {
                              id: "settings.consumerBilling.taxIdValue",
                              defaultMessage: "{type} · {value}",
                              description:
                                "Saved tax ID in the consumer billing summary; type is the tax scheme name and value is the customer's tax identification number",
                              values: {
                                type: (e.country_specific_type ?? e.type).replaceAll("_", " ").toUpperCase(),
                                value: e.value,
                              },
                            }),
                          },
                          JSON.stringify([e.type, e.value, t]),
                        ),
                      ),
                    }),
                    control: null,
                  })
                : null
            ;(b[42] !== e || b[43] !== t || b[44] !== n || b[45] !== r
              ? ((i = (0, a.jsxs)(C.t, { children: [e, t, n, r] })),
                (b[42] = e),
                (b[43] = t),
                (b[44] = n),
                (b[45] = r),
                (b[46] = i))
              : (i = b[46]),
              (s = i))
          }
        }
        ;((b[4] = D?.city),
          (b[5] = D?.line1),
          (b[6] = D?.line2),
          (b[7] = D?.postal_code),
          (b[8] = D?.state),
          (b[9] = j),
          (b[10] = z),
          (b[11] = N),
          (b[12] = P),
          (b[13] = I),
          (b[14] = G),
          (b[15] = B),
          (b[16] = W.value.tax_types),
          (b[17] = s),
          (b[18] = d))
      } else ((s = b[17]), (d = b[18]))
      if (d !== Symbol.for("react.early_return_sentinel")) return d
      b[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, a.jsx)(c.A, {
            id: "settings.consumerBilling.information",
            defaultMessage: "Billing information",
            description: "Heading for the personal billing name, email, address, and tax ID",
          })),
          (b[47] = u))
        : (u = b[47])
      let F = null == j
      return (
        b[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.editInformation",
              defaultMessage: "Edit",
              description: "Button opening the consumer billing-information editor",
            })),
            (b[48] = p))
          : (p = b[48]),
        b[49] !== G || b[50] !== F
          ? ((m = (0, a.jsx)(E.X.Header, {
              title: u,
              actions: (0, a.jsx)(w.$, {
                ref: L,
                color: "secondary",
                size: "toolbar",
                disabled: F,
                onClick: G,
                children: p,
              }),
            })),
            (b[49] = G),
            (b[50] = F),
            (b[51] = m))
          : (m = b[51]),
        b[52] !== s ? ((h = (0, a.jsx)(E.X.Content, { children: s })), (b[52] = s), (b[53] = h)) : (h = b[53]),
        b[54] !== v || b[55] !== j || b[56] !== M
          ? ((f =
              M && null != j
                ? (0, a.jsx)(
                    Q,
                    { accountId: v, billingInfo: j, onCloseAutoFocus: () => L.current?.focus(), onClose: () => k(!1) },
                    v,
                  )
                : null),
            (b[54] = v),
            (b[55] = j),
            (b[56] = M),
            (b[57] = f))
          : (f = b[57]),
        b[58] !== m || b[59] !== h || b[60] !== f
          ? ((y = (0, a.jsxs)(E.X, { children: [m, h, f] })), (b[58] = m), (b[59] = h), (b[60] = f), (b[61] = y))
          : (y = b[61]),
        y
      )
    }
    function Z(e) {
      return !!e.value
    }
    function Q(e) {
      let t,
        n,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        g,
        h = (0, i.c)(31),
        { accountId: f, billingInfo: y, onCloseAutoFocus: x, onClose: A } = e,
        w = (0, T.A)(),
        I = (0, _.AS)(),
        E = (0, b.EG)(I.getLayer(b.Sd.personal)),
        { data: S, isPending: C, isError: B, refetch: M } = (0, r.I)((0, W.P)(f, w.locale, E))
      h[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { disableExposureLog: !0 }), (h[0] = t)) : (t = h[0])
      let L = (0, _.Fj)("2144562623", t)
      h[1] !== L.__evaluation || h[2] !== L.details
        ? ((n =
            null != L.__evaluation &&
            "codex_deferred" in L.__evaluation &&
            !0 === L.__evaluation.codex_deferred &&
            !L.details.reason.startsWith("LocalOverride")),
          (h[1] = L.__evaluation),
          (h[2] = L.details),
          (h[3] = n))
        : (n = h[3])
      let G = n,
        O = (0, _.cB)()
      h[4] !== G || h[5] !== O ? ((s = () => (G ? ea(O) : void 0)), (h[4] = G), (h[5] = O), (h[6] = s)) : (s = h[6])
      let [D] = (0, o.useState)(s)
      ;(h[7] !== O ? ((l = JSON.stringify(O)), (h[7] = O), (h[8] = l)) : (l = h[8]),
        h[9] !== f || h[10] !== l
          ? ((c = ["consumer-billing-setup", f, "tax-types", l]), (h[9] = f), (h[10] = l), (h[11] = c))
          : (c = h[11]),
        h[12] !== f || h[13] !== I || h[14] !== O
          ? ((d = async (e) => {
              let { signal: t } = e
              if (O.customIDs?.account_id !== f) throw Error("Billing tax config identity changed")
              let n = await (0, P.d1)(I, "2144562623")
              return (t.throwIfAborted(), V.zF.parse(n.value.tax_types ?? {}))
            }),
            (h[12] = f),
            (h[13] = I),
            (h[14] = O),
            (h[15] = d))
          : (d = h[15]),
        h[16] !== G || h[17] !== c || h[18] !== d
          ? ((u = { queryKey: c, enabled: G, queryFn: d, staleTime: 1 / 0, retry: !1 }),
            (h[16] = G),
            (h[17] = c),
            (h[18] = d),
            (h[19] = u))
          : (u = h[19]))
      let { data: R, isPending: H, isError: U, error: F, refetch: q } = (0, r.I)(u),
        K = G && (null == R || U),
        Y = (0, k.Y)(),
        [$, Z] = (0, o.useState)(!1),
        Q = N.lG
      h[20] !== x
        ? ((p = {
            "aria-describedby": void 0,
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), x())
            },
          }),
          (h[20] = x),
          (h[21] = p))
        : (p = h[21])
      let ee = !$
      h[22] !== A || h[23] !== $
        ? ((m = (e) => {
            e || $ || A()
          }),
          (h[22] = A),
          (h[23] = $),
          (h[24] = m))
        : (m = h[24])
      let et =
        null == S || B || K
          ? (0, a.jsxs)(j.R4, {
              children: [
                (0, a.jsx)(j.c7, { title: (0, a.jsx)(N.L3, { children: (0, a.jsx)(X, {}) }) }),
                (0, a.jsx)(j.OO, {
                  children: (0, a.jsx)(z.Y, {
                    kind: "billing",
                    loading: C || (G && H),
                    error: G ? F : void 0,
                    onRetry: () => {
                      ;((null == S || B) && M(), K && ((0, P.Ex)(I, "2144562623"), q()))
                    },
                  }),
                }),
              ],
            })
          : (0, a.jsx)(
              v.S8,
              {
                stripe: S.stripe,
                options: { appearance: (0, W.R)(!0 === Y) },
                children: (0, a.jsx)(J, {
                  accountId: f,
                  billingInfo: y,
                  deferredIdentity: D,
                  deferredTaxTypes: G ? R : void 0,
                  onSubmittingChange: Z,
                  onClose: A,
                }),
              },
              (0, b.eI)(w.locale, "elements", E),
            )
      return (
        h[25] !== Q || h[26] !== p || h[27] !== ee || h[28] !== m || h[29] !== et
          ? ((g = (0, a.jsx)(Q, {
              open: !0,
              contentOverflow: "visible",
              contentPosition: "scrollable",
              contentProps: p,
              showDialogClose: ee,
              onOpenChange: m,
              children: et,
            })),
            (h[25] = Q),
            (h[26] = p),
            (h[27] = ee),
            (h[28] = m),
            (h[29] = et),
            (h[30] = g))
          : (g = h[30]),
        g
      )
    }
    function X() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.editBillingInformation",
              defaultMessage: "Edit billing information",
              description: "Title of the personal billing-information editor",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function J(e) {
      let t,
        n,
        s,
        r,
        d,
        u,
        p,
        m,
        h,
        f,
        b,
        T,
        E,
        S,
        C,
        P,
        k,
        L,
        G,
        O,
        D,
        R,
        U,
        z = (0, i.c)(71),
        {
          accountId: W,
          billingInfo: q,
          deferredIdentity: K,
          deferredTaxTypes: Y,
          onSubmittingChange: $,
          onClose: Z,
        } = e,
        Q = (0, l.gh)(g.u),
        J = (0, _.AS)(),
        ei = (0, o.useId)(),
        [es, er] = (0, o.useState)(q.email ?? ""),
        el = q.name ?? "",
        eo = q.address?.line1 ?? "",
        ec = q.address?.line2 ?? "",
        ed = q.address?.city ?? "",
        eu = q.address?.state ?? "",
        ep = q.address?.postal_code ?? "",
        em = q.address?.country ?? ""
      ;(z[0] !== eo || z[1] !== ec || z[2] !== ed || z[3] !== eu || z[4] !== ep || z[5] !== em
        ? ((t = { line1: eo, line2: ec, city: ed, state: eu, postal_code: ep, country: em }),
          (z[0] = eo),
          (z[1] = ec),
          (z[2] = ed),
          (z[3] = eu),
          (z[4] = ep),
          (z[5] = em),
          (z[6] = t))
        : (t = z[6]),
        z[7] !== el || z[8] !== t ? ((n = { name: el, address: t }), (z[7] = el), (z[8] = t), (z[9] = n)) : (n = z[9]))
      let eg = n,
        [eh, ef] = (0, o.useState)(eg),
        [e_, ey] = (0, o.useState)(Object.values(eg.address).some(en)),
        [eb, ex] = (0, o.useState)(!1),
        [ev, eA] = (0, o.useState)(!1),
        eT = (0, _.Fj)("2144562623"),
        ew = Y ?? eT.value.tax_types,
        eN = eh.address.country,
        ej = (0, V.oj)(eN, ew ?? {})
      z[10] !== q.tax_ids ? ((s = () => q.tax_ids.map(et)), (z[10] = q.tax_ids), (z[11] = s)) : (s = z[11])
      let [eI, eE] = (0, o.useState)(s),
        eS = (0, o.useRef)(q.tax_ids.length)
      if (z[12] !== q.tax_ids || z[13] !== ew) {
        let e = (0, V.Ts)(ew ?? {})
        ;((r = null != e && q.tax_ids.every((t) => null != (0, V.wW)(e, t))),
          (z[12] = q.tax_ids),
          (z[13] = ew),
          (z[14] = r))
      } else r = z[14]
      let eC = r,
        eP = eI.filter((e) => {
          let { taxId: t } = e
          return null != (0, V.wW)(ej, t)
        }),
        eB = new Set(
          eP.map((e) => {
            let { taxId: t } = e
            return (0, V.wW)(ej, t)?.type
          }),
        ),
        eM = ej.filter((e) => {
          let { type: t } = e
          return !eB.has(t)
        }),
        ek = eP.every((e) => {
          let { taxId: t } = e,
            n = (0, V.wW)(ej, t)
          return null != n && (0, x.Gm)(n.type, t.value)
        })
      ;(z[15] !== W || z[16] !== Z || z[17] !== Q
        ? ((d = async () => {
            ;(await (0, H.fI)(Q, W), Z())
          }),
          (z[15] = W),
          (z[16] = Z),
          (z[17] = Q),
          (z[18] = d))
        : (d = z[18]),
        z[19] !== $ ? ((u = () => $(!1)), (z[19] = $), (z[20] = u)) : (u = z[20]))
      let {
          mutate: eL,
          isPending: eG,
          isError: eO,
          error: eD,
          reset: eR,
        } = (0, A.n)({
          mutationFn: async () => {
            if (null != K && ea(J.getContext().user) !== K) throw Error("Billing tax config identity changed")
            if (!eb || !e_ || !ek || !eC) throw Error("Incomplete billing details")
            if (
              ($(!0),
              !(
                await M.CodexRequest.safePost("/payments/billing_info", {
                  requestBody: {
                    account_id: W,
                    email: es.trim(),
                    name: eh.name.trim() || null,
                    address: eh.address,
                    tax_ids: eP.map(ee),
                  },
                })
              ).success)
            )
              throw Error("Billing information could not be saved")
          },
          onSuccess: d,
          onSettled: u,
        }),
        eH = j.R4,
        eU = (e) => {
          ;(e.preventDefault(), eA(!0), eb && e_ && ek && eC && !eG && eL())
        }
      z[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, a.jsx)(j.c7, { title: (0, a.jsx)(N.L3, { children: (0, a.jsx)(X, {}) }) })), (z[21] = p))
        : (p = z[21])
      let ez = j.OO
      ;(z[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, a.jsx)(c.A, {
            id: "settings.consumerBilling.billingEmail",
            defaultMessage: "Billing email",
            description:
              "Label for the address receiving billing communications, shown in the consumer billing summary and editor",
          })),
          (z[22] = m))
        : (m = z[22]),
        z[23] !== ei
          ? ((h = (0, a.jsx)("label", {
              className: "text-sm font-medium text-default select-none",
              htmlFor: ei,
              children: m,
            })),
            (z[23] = ei),
            (z[24] = h))
          : (h = z[24]),
        z[25] !== eO || z[26] !== eR
          ? ((f = (e) => {
              ;(er(e.target.value), eO && eR())
            }),
            (z[25] = eO),
            (z[26] = eR),
            (z[27] = f))
          : (f = z[27]),
        z[28] !== es || z[29] !== ei || z[30] !== eG || z[31] !== f
          ? ((b = (0, a.jsx)(I.pd, {
              id: ei,
              autoComplete: "email",
              autoFocus: !0,
              disabled: eG,
              name: "billing-email",
              type: "email",
              required: !0,
              value: es,
              onChange: f,
            })),
            (z[28] = es),
            (z[29] = ei),
            (z[30] = eG),
            (z[31] = f),
            (z[32] = b))
          : (b = z[32]),
        z[33] !== h || z[34] !== b
          ? ((T = (0, a.jsxs)(j.RW, { children: [h, b] })), (z[33] = h), (z[34] = b), (z[35] = T))
          : (T = z[35]),
        z[36] === Symbol.for("react.memo_cache_sentinel") ? ((E = [...y.qo]), (z[36] = E)) : (E = z[36]),
        z[37] !== eg
          ? ((S = { mode: "billing", allowedCountries: E, defaultValues: eg }), (z[37] = eg), (z[38] = S))
          : (S = z[38]),
        z[39] === Symbol.for("react.memo_cache_sentinel") ? ((C = () => ex(!0)), (z[39] = C)) : (C = z[39]),
        z[40] !== eN || z[41] !== eO || z[42] !== eR || z[43] !== eC || z[44] !== ew
          ? ((P = (e) => {
              if ((ef(e.value), ey(e.complete), eC && e.value.address.country !== eN)) {
                let t = e.value.address.country,
                  n = (0, V.oj)(t, ew ?? {})
                eE((e) =>
                  e.filter((e) => {
                    let { taxId: t } = e
                    return null != (0, V.wW)(n, t)
                  }),
                )
              }
              ;(eA(!1), eO && eR())
            }),
            (z[40] = eN),
            (z[41] = eO),
            (z[42] = eR),
            (z[43] = eC),
            (z[44] = ew),
            (z[45] = P))
          : (P = z[45]),
        z[46] !== S || z[47] !== P
          ? ((k = (0, a.jsx)(v.H1, { options: S, onReady: C, onChange: P })), (z[46] = S), (z[47] = P), (z[48] = k))
          : (k = z[48]))
      let eW =
        ej.length > 0
          ? (0, a.jsxs)(j.RW, {
              children: [
                eP.map((e) => {
                  let { key: t, taxId: n } = e
                  return (0, a.jsx)(
                    F.Y,
                    {
                      available: ej.filter((e) => {
                        let { type: t } = e
                        return t === (0, V.wW)(ej, n)?.type || !eB.has(t)
                      }),
                      selected: (0, V.wW)(ej, n),
                      taxId: n,
                      enabled: !0,
                      compact: !0,
                      disabled: eG,
                      showErrors: ev,
                      onRemove: () => {
                        ;(eE((e) => e.filter((e) => e.key !== t)), eO && eR())
                      },
                      onChange: (e) => {
                        ;(eE((n) => n.map((n) => (n.key === t ? { key: t, taxId: e } : n))), eA(!1), eO && eR())
                      },
                    },
                    t,
                  )
                }),
                eM.length > 0
                  ? (0, a.jsx)(w.$, {
                      className: "self-start",
                      color: "ghost",
                      type: "button",
                      size: "dialog",
                      disabled: eG,
                      onClick: () => {
                        let e = (0, V.H2)(eM, null, eN)
                        if (null == e) return
                        eS.current = eS.current + 1
                        let t = eS.current
                        ;(eE((n) => [...n, { key: t, taxId: { type: e.stripe_type, country: e.country, value: "" } }]),
                          eA(!1),
                          eO && eR())
                      },
                      children: (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.addTaxIdRow",
                        defaultMessage: "Add tax ID",
                        description: "Button adding another tax identification row to the billing information draft",
                      }),
                    })
                  : null,
              ],
            })
          : null
      ;(z[49] !== eC
        ? ((L = eC
            ? null
            : (0, a.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, a.jsx)(c.A, {
                  id: "settings.consumerBilling.taxCatalogUnavailable",
                  defaultMessage: "Tax ID options could not be loaded. Close this editor and try again",
                  description:
                    "Billing information cannot be saved when tax identification options are unavailable or a saved registration cannot be identified, to avoid removing registrations unintentionally",
                }),
              })),
          (z[49] = eC),
          (z[50] = L))
        : (L = z[50]),
        z[51] !== eD || z[52] !== eO
          ? ((G = eO
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    (null != eD && (0, B.d)(eD)?.message) ||
                    (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.saveInformationError",
                      defaultMessage: "Unable to save billing information. Please try again.",
                      description:
                        "Error when saving consumer billing details fails; the editor retains the entered values for a retry",
                    }),
                })
              : null),
            (z[51] = eD),
            (z[52] = eO),
            (z[53] = G))
          : (G = z[53]),
        z[54] !== ez || z[55] !== T || z[56] !== k || z[57] !== eW || z[58] !== L || z[59] !== G
          ? ((O = (0, a.jsxs)(ez, { className: "gap-4", children: [T, k, eW, L, G] })),
            (z[54] = ez),
            (z[55] = T),
            (z[56] = k),
            (z[57] = eW),
            (z[58] = L),
            (z[59] = G),
            (z[60] = O))
          : (O = z[60]))
      let eF = !eb || !e_ || !eC || eG
      return (
        z[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.save",
              defaultMessage: "Save",
              description: "Button saving edits to consumer billing information or a saved card",
            })),
            (z[61] = D))
          : (D = z[61]),
        z[62] !== eG || z[63] !== eF
          ? ((R = (0, a.jsx)(j.OO, {
              children: (0, a.jsx)(j.Es, {
                children: (0, a.jsx)(w.$, { color: "primary", type: "submit", disabled: eF, loading: eG, children: D }),
              }),
            })),
            (z[62] = eG),
            (z[63] = eF),
            (z[64] = R))
          : (R = z[64]),
        z[65] !== eH || z[66] !== eU || z[67] !== p || z[68] !== O || z[69] !== R
          ? ((U = (0, a.jsxs)(eH, { as: "form", onSubmit: eU, children: [p, O, R] })),
            (z[65] = eH),
            (z[66] = eU),
            (z[67] = p),
            (z[68] = O),
            (z[69] = R),
            (z[70] = U))
          : (U = z[70]),
        U
      )
    }
    function ee(e) {
      let { taxId: t } = e
      return (0, x.aI)(t)
    }
    function et(e, t) {
      return { key: t, taxId: e }
    }
    function en(e) {
      return !!e
    }
    function ea(e) {
      return JSON.stringify([e.userID, e.customIDs?.account_id, e.customIDs?.stableID])
    }
    var ei = n("i3p7"),
      es = n("irkb"),
      er = n("Ghh3"),
      el = n("Xpvt"),
      eo = n("SGsN"),
      ec = n("F0xz"),
      ed = n("AKNp"),
      eu = n("ae6t"),
      ep = n("eShZ"),
      em = n("S2r0")
    async function eg(e, t, n, a) {
      let { queryKey: i } = eh(t),
        s = e.getQueryState(i)?.dataUpdateCount,
        r = await er.Request.safePatch("/payments/invoice-expensing", {
          requestBody: n,
          signal: a,
          retry: "never",
          expectedErrorStatuses: [400, 403, 409, 412, 422],
        })
      return (
        a.throwIfAborted(),
        await e.cancelQueries({ queryKey: i, exact: !0 }),
        a.throwIfAborted(),
        e.getQueryState(i)?.dataUpdateCount !== s
          ? e.invalidateQueries({ queryKey: i, exact: !0 })
          : e.setQueryData(i, r),
        r
      )
    }
    function eh(e, t = !0) {
      return (0, em.j)({
        queryKey: ["consumer-billing", e, "invoice-expensing"],
        queryFn: ({ signal: e }) => er.Request.safeGet("/payments/invoice-expensing", { signal: e }),
        enabled: t,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
      })
    }
    class ef extends Error {}
    function e_(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        m,
        h,
        f,
        y,
        b,
        x,
        v,
        N,
        j,
        I,
        P,
        B = (0, i.c)(67),
        { accountId: M } = e,
        k = (0, l.gh)(g.u),
        L = (0, T.A)()
      B[0] !== M ? ((t = eh(M)), (B[0] = M), (B[1] = t)) : (t = B[1])
      let { data: G, isLoadingError: D, refetch: R } = (0, r.I)(t),
        H = null != G && (G.eligible || null != G.destination),
        z = (0, o.useRef)(!1)
      ;(B[2] !== k || B[3] !== H
        ? ((n = () => {
            H &&
              !z.current &&
              ((z.current = !0), O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SHOWN"))
          }),
          (s = [k, H]),
          (B[2] = k),
          (B[3] = H),
          (B[4] = n),
          (B[5] = s))
        : ((n = B[4]), (s = B[5])),
        (0, o.useEffect)(n, s))
      let [W, F] = (0, o.useState)(!1),
        K = (0, o.useRef)(null),
        Y = (0, eu.j)(),
        V = (0, _.AS)(),
        $ = (0, es.jE)(),
        Z = (0, o.useRef)(null)
      ;(B[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => Z.current?.abort()), (u = []), (B[6] = d), (B[7] = u))
        : ((d = B[6]), (u = B[7])),
        (0, o.useEffect)(d, u),
        B[8] !== M || B[9] !== W || B[10] !== L || B[11] !== G?.enabled || B[12] !== $ || B[13] !== k
          ? ((p = {
              networkMode: "always",
              mutationFn: async (e) => {
                let t = new AbortController()
                Z.current = t
                let n = await eg($, M, e, t.signal)
                !t.signal.aborted &&
                  (O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_PREFERENCES_SAVED"),
                  G?.enabled &&
                    !n.enabled &&
                    O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_RECURRING_DISABLED"),
                  W &&
                    (k
                      .get(eo.Id)
                      .success(
                        L.formatMessage({
                          id: "settings.invoiceExpensing.saved",
                          defaultMessage: "Receipt email preferences saved",
                          description: "Confirmation after saving a work email for future receipts in Billing settings",
                        }),
                      ),
                    F(!1)))
              },
              retry: !1,
            }),
            (B[8] = M),
            (B[9] = W),
            (B[10] = L),
            (B[11] = G?.enabled),
            (B[12] = $),
            (B[13] = k),
            (B[14] = p))
          : (p = B[14]))
      let { mutate: Q, isPending: X, isError: J, reset: ee } = (0, A.n)(p)
      if (D) {
        let e
        return (
          B[15] !== R ? ((e = (0, a.jsx)(U.E, { onRetry: () => void R() })), (B[15] = R), (B[16] = e)) : (e = B[16]),
          e
        )
      }
      return H
        ? (B[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, a.jsx)(E.X.Header, {
                title: (0, a.jsx)(c.A, {
                  id: "settings.invoiceExpensing.sectionTitle",
                  defaultMessage: "Expense",
                  description:
                    "Heading for personal Billing settings that email subscription receipts to a work address for expensing",
                }),
              })),
              (B[17] = m))
            : (m = B[17]),
          B[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsx)(c.A, {
                id: "settings.invoiceExpensing.sendFutureReceipts",
                defaultMessage: "Email future receipts",
                description:
                  "Label for the Billing settings switch that automatically emails future subscription receipts to the saved work email",
              })),
              (B[18] = h))
            : (h = B[18]),
          B[19] !== W ||
          B[20] !== X ||
          B[21] !== Q ||
          B[22] !== G.destination ||
          B[23] !== G.eligible ||
          B[24] !== G.enabled ||
          B[25] !== ee ||
          B[26] !== k
            ? ((f = (0, a.jsx)(S.ic, {
                label: h,
                controlSizing: "content",
                control: (e) =>
                  (0, a.jsx)(ec.l, {
                    ...e,
                    checked: !0 === G.enabled,
                    disabled: X || W || (!G.eligible && !G.enabled),
                    onClick: (e) => {
                      K.current = e.currentTarget
                    },
                    onChange: (e) => {
                      e && null == G.destination
                        ? (ee(), O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"), F(!0))
                        : Q({ destination: G.destination ?? null, enabled: e })
                    },
                  }),
              })),
              (B[19] = W),
              (B[20] = X),
              (B[21] = Q),
              (B[22] = G.destination),
              (B[23] = G.eligible),
              (B[24] = G.enabled),
              (B[25] = ee),
              (B[26] = k),
              (B[27] = f))
            : (f = B[27]),
          B[28] !== X ||
          B[29] !== G.destination ||
          B[30] !== G.eligible ||
          B[31] !== G.enabled ||
          B[32] !== ee ||
          B[33] !== k
            ? ((y = G.enabled
                ? (0, a.jsx)(S.ic, {
                    label: (0, a.jsx)(c.A, {
                      id: "settings.invoiceExpensing.workEmail",
                      defaultMessage: "Work email",
                      description: "Label for the work email destination of personal subscription invoice PDFs",
                    }),
                    description: (0, a.jsx)("span", {
                      className: "block truncate select-text",
                      title: G.destination ?? void 0,
                      children: G.destination,
                    }),
                    controlSizing: "content",
                    control: (0, a.jsx)(w.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: X || !G.eligible,
                      onClick: (e) => {
                        ;((K.current = e.currentTarget),
                          ee(),
                          O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                          F(!0))
                      },
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.edit",
                        defaultMessage: "Edit",
                        description: "Opens the editor for the work email destination",
                      }),
                    }),
                  })
                : null),
              (B[28] = X),
              (B[29] = G.destination),
              (B[30] = G.eligible),
              (B[31] = G.enabled),
              (B[32] = ee),
              (B[33] = k),
              (B[34] = y))
            : (y = B[34]),
          B[35] !== y || B[36] !== f
            ? ((b = (0, a.jsxs)(C.t, { children: [f, y] })), (B[35] = y), (B[36] = f), (B[37] = b))
            : (b = B[37]),
          B[38] !== G.eligible || B[39] !== G.enabled
            ? ((x =
                G.enabled && !G.eligible
                  ? (0, a.jsx)(E.X.Footer, {
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.paused",
                        defaultMessage: "Automatic emails are paused for your current plan",
                        description:
                          "Status when automatic invoice emails remain selected but the current account is not eligible to receive them",
                      }),
                    })
                  : null),
              (B[38] = G.eligible),
              (B[39] = G.enabled),
              (B[40] = x))
            : (x = B[40]),
          B[41] !== W || B[42] !== J
            ? ((v =
                J && !W
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-warning",
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.toggleFailed",
                        defaultMessage: "We couldn’t confirm your preference was saved. Please try again.",
                        description:
                          "Error when a change to automatic receipt emails could not be confirmed; the switch keeps its last confirmed value",
                      }),
                    })
                  : null),
              (B[41] = W),
              (B[42] = J),
              (B[43] = v))
            : (v = B[43]),
          B[44] !== Y ||
          B[45] !== G.destination ||
          B[46] !== G.eligible ||
          B[47] !== G.enabled ||
          B[48] !== k ||
          B[49] !== V
            ? ((N =
                G.enabled && null != G.destination && G.eligible && (0, ed.ku)(V, "invoice_expensing")
                  ? (0, a.jsx)(q.l, {
                      variant: "settings",
                      content: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.businessPrompt",
                        defaultMessage: "Using ChatGPT with your team?",
                        description:
                          "Prompt in Billing settings inviting users with a saved work email for receipts to explore ChatGPT Business",
                      }),
                      primaryCtaText: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.exploreBusiness",
                        defaultMessage: "Explore Business",
                        description:
                          "Button in Billing settings that opens the ChatGPT Business upgrade flow; Business is the branded plan name",
                      }),
                      onPrimaryCtaClick: (e) => {
                        ;(O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_EXPLORE_BUSINESS_CLICKED"),
                          Y({
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
              (B[44] = Y),
              (B[45] = G.destination),
              (B[46] = G.eligible),
              (B[47] = G.enabled),
              (B[48] = k),
              (B[49] = V),
              (B[50] = N))
            : (N = B[50]),
          B[51] !== b || B[52] !== x || B[53] !== v || B[54] !== N
            ? ((j = (0, a.jsxs)(E.X.Content, { children: [b, x, v, N] })),
              (B[51] = b),
              (B[52] = x),
              (B[53] = v),
              (B[54] = N),
              (B[55] = j))
            : (j = B[55]),
          B[56] !== W ||
          B[57] !== J ||
          B[58] !== X ||
          B[59] !== Q ||
          B[60] !== G.destination ||
          B[61] !== G.eligible ||
          B[62] !== ee
            ? ((I = W
                ? (0, a.jsx)(ey, {
                    initialDestination: G.destination ?? "",
                    isPending: X,
                    isError: J,
                    onSave: (e) => Q({ destination: e, enabled: !0 }),
                    eligible: G.eligible,
                    onEdit: ee,
                    onClose: () => F(!1),
                    onCloseAutoFocus: (e) => {
                      K.current?.isConnected && (e.preventDefault(), K.current.focus())
                    },
                  })
                : null),
              (B[56] = W),
              (B[57] = J),
              (B[58] = X),
              (B[59] = Q),
              (B[60] = G.destination),
              (B[61] = G.eligible),
              (B[62] = ee),
              (B[63] = I))
            : (I = B[63]),
          B[64] !== j || B[65] !== I
            ? ((P = (0, a.jsxs)(E.X, { children: [m, j, I] })), (B[64] = j), (B[65] = I), (B[66] = P))
            : (P = B[66]),
          P)
        : null
    }
    function ey(e) {
      let t,
        n,
        s,
        r,
        l,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _ = (0, i.c)(37),
        {
          initialDestination: y,
          isPending: b,
          isError: x,
          eligible: v,
          onEdit: A,
          onSave: T,
          onClose: I,
          onCloseAutoFocus: E,
        } = e,
        [S, C] = (0, o.useState)(y),
        P = !b
      ;(_[0] !== E ? ((t = { "aria-describedby": void 0, onCloseAutoFocus: E }), (_[0] = E), (_[1] = t)) : (t = _[1]),
        _[2] !== b || _[3] !== I
          ? ((n = (e) => {
              e || b || I()
            }),
            (_[2] = b),
            (_[3] = I),
            (_[4] = n))
          : (n = _[4]),
        _[5] !== S || _[6] !== v || _[7] !== b || _[8] !== T
          ? ((s = (e) => {
              ;(e.preventDefault(), !b && v && T(S.trim()))
            }),
            (_[5] = S),
            (_[6] = v),
            (_[7] = b),
            (_[8] = T),
            (_[9] = s))
          : (s = _[9]),
        _[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(j.c7, {
              title: (0, a.jsx)(N.L3, {
                children: (0, a.jsx)(c.A, {
                  id: "settings.invoiceExpensing.workEmailDialogTitle",
                  defaultMessage: "Work email",
                  description:
                    "Title of the dialog for adding or editing the work email address that receives future subscription receipts",
                }),
              }),
            })),
            (_[10] = r))
          : (r = _[10]))
      let B = b || !v
      return (
        _[11] !== A
          ? ((l = (e) => {
              ;(C(e), A())
            }),
            (_[11] = A),
            (_[12] = l))
          : (l = _[12]),
        _[13] !== S || _[14] !== B || _[15] !== l
          ? ((d = (0, a.jsx)(ex, { destination: S, disabled: B, onChange: l })),
            (_[13] = S),
            (_[14] = B),
            (_[15] = l),
            (_[16] = d))
          : (d = _[16]),
        _[17] !== x
          ? ((u = x
              ? (0, a.jsx)(j.OO, {
                  children: (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-warning",
                    children: (0, a.jsx)(c.A, {
                      id: "settings.invoiceExpensing.toggleFailed",
                      defaultMessage: "We couldn’t confirm your preference was saved. Please try again.",
                      description:
                        "Error when a change to automatic receipt emails could not be confirmed; the switch keeps its last confirmed value",
                    }),
                  }),
                })
              : null),
            (_[17] = x),
            (_[18] = u))
          : (u = _[18]),
        _[19] !== S || _[20] !== v || _[21] !== b
          ? ((p = b || !v || !S.trim()), (_[19] = S), (_[20] = v), (_[21] = b), (_[22] = p))
          : (p = _[22]),
        _[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(c.A, {
              id: "settings.invoiceExpensing.save",
              defaultMessage: "Save",
              description:
                "Saves the destination and automatic invoice email preference without sending a past invoice",
            })),
            (_[23] = m))
          : (m = _[23]),
        _[24] !== b || _[25] !== p
          ? ((g = (0, a.jsx)(j.Es, {
              children: (0, a.jsx)(w.$, { color: "primary", type: "submit", disabled: p, loading: b, children: m }),
            })),
            (_[24] = b),
            (_[25] = p),
            (_[26] = g))
          : (g = _[26]),
        _[27] !== g || _[28] !== s || _[29] !== d || _[30] !== u
          ? ((h = (0, a.jsxs)(j.R4, { as: "form", onSubmit: s, children: [r, d, u, g] })),
            (_[27] = g),
            (_[28] = s),
            (_[29] = d),
            (_[30] = u),
            (_[31] = h))
          : (h = _[31]),
        _[32] !== P || _[33] !== h || _[34] !== t || _[35] !== n
          ? ((f = (0, a.jsx)(N.lG, {
              open: !0,
              size: "compact",
              showDialogClose: P,
              contentProps: t,
              onOpenChange: n,
              children: h,
            })),
            (_[32] = P),
            (_[33] = h),
            (_[34] = t),
            (_[35] = n),
            (_[36] = f))
          : (f = _[36]),
        f
      )
    }
    function eb(e) {
      let t,
        n,
        s,
        r,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        y,
        b,
        x,
        v,
        I,
        E,
        S,
        C,
        P,
        B,
        M,
        k = (0, i.c)(74),
        { accountId: L, invoiceId: G, preferences: D, onClose: R, onCloseAutoFocus: H } = e,
        U = (0, l.gh)(g.u),
        z = (0, T.A)(),
        W = (0, es.jE)(),
        [F] = (0, o.useState)(D),
        [q, K] = (0, o.useState)(!1),
        Y = (0, o.useId)(),
        [V, $] = (0, o.useState)(D.destination ?? ""),
        [Z, Q] = (0, o.useState)(null == F.destination),
        X = !F.enabled && !q,
        J = (0, o.useRef)(null)
      ;(k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => J.current?.abort()), (n = []), (k[0] = t), (k[1] = n))
        : ((t = k[0]), (n = k[1])),
        (0, o.useEffect)(t, n),
        k[2] !== L || k[3] !== X || k[4] !== V || k[5] !== Z || k[6] !== G || k[7] !== W || k[8] !== U
          ? ((s = async () => {
              let e = new AbortController()
              J.current = e
              let t = e.signal,
                n = V.trim()
              if (X && Z)
                try {
                  let e = await eg(W, L, { destination: n, enabled: !0 }, t)
                  ;(t.throwIfAborted(),
                    $(e.destination ?? n),
                    K(!0),
                    O(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_PREFERENCES_SAVED"))
                } catch (e) {
                  throw new ef("Could not save forwarding settings", { cause: e })
                }
              return (
                await er.Request.safePost("/payments/invoice-expensing/{invoice_id}/send", {
                  parameters: { path: { invoice_id: G } },
                  requestBody: { destination: n },
                  signal: t,
                  retry: "never",
                }),
                n
              )
            }),
            (k[2] = L),
            (k[3] = X),
            (k[4] = V),
            (k[5] = Z),
            (k[6] = G),
            (k[7] = W),
            (k[8] = U),
            (k[9] = s))
          : (s = k[9]),
        k[10] !== U
          ? ((r = (e) => {
              J.current?.signal.aborted ||
                e instanceof ef ||
                O(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SEND_FAILED")
            }),
            (k[10] = U),
            (k[11] = r))
          : (r = k[11]),
        k[12] !== z || k[13] !== R || k[14] !== U
          ? ((d = (e) => {
              J.current?.signal.aborted ||
                (O(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SEND_SUCCEEDED"),
                U.get(eo.Id).success(
                  z.formatMessage(
                    {
                      id: "settings.invoiceExpensing.sent",
                      defaultMessage: "Receipt sent to {email}",
                      description:
                        "Success notification after an invoice email is accepted for delivery; email is the work email recipient selected by the user",
                    },
                    { email: e },
                  ),
                ),
                R())
            }),
            (k[12] = z),
            (k[13] = R),
            (k[14] = U),
            (k[15] = d))
          : (d = k[15]),
        k[16] !== s || k[17] !== r || k[18] !== d
          ? ((u = { networkMode: "always", mutationFn: s, onError: r, onSuccess: d, retry: !1 }),
            (k[16] = s),
            (k[17] = r),
            (k[18] = d),
            (k[19] = u))
          : (u = k[19]))
      let { mutate: ee, isPending: et, error: en, reset: ea } = (0, A.n)(u)
      if (k[20] !== en)
        ((p = en
          ? en instanceof ef
            ? "save_failed"
            : en instanceof ep.fk &&
                ("invoice_expensing_not_submitted" === en.errorCode ||
                  (en.status >= 400 && en.status < 500 && 408 !== en.status))
              ? "send_rejected"
              : "send_unconfirmed"
          : null),
          (k[20] = en),
          (k[21] = p))
      else p = k[21]
      let ei = p,
        ec = !et
      ;(k[22] !== H ? ((m = { onCloseAutoFocus: H }), (k[22] = H), (k[23] = m)) : (m = k[23]),
        k[24] !== et || k[25] !== R
          ? ((h = (e) => {
              e || et || R()
            }),
            (k[24] = et),
            (k[25] = R),
            (k[26] = h))
          : (h = k[26]),
        k[27] !== et || k[28] !== ee
          ? ((f = (e) => {
              ;(e.preventDefault(), et || ee())
            }),
            (k[27] = et),
            (k[28] = ee),
            (k[29] = f))
          : (f = k[29]),
        k[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(N.L3, {
              children: (0, a.jsx)(c.A, {
                id: "settings.invoiceExpensing.dialogTitle",
                defaultMessage: "Expense ChatGPT to your company",
                description: "Title of the dialog for emailing a personal ChatGPT invoice to a work address",
              }),
            })),
            (k[30] = _))
          : (_ = k[30]),
        k[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(j.c7, {
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: _,
              subtitle: (0, a.jsx)(N.rr, {
                children: (0, a.jsx)(c.A, {
                  id: "settings.invoiceExpensing.dialog.subtitle",
                  defaultMessage: "Send this receipt to your work email for easy expensing.",
                  description:
                    "Subtitle in the personal Billing receipt-email dialog. Explains that the user receives a receipt at their work email to use in their employer's expense process; the product does not submit an expense.",
                }),
              }),
            })),
            (k[31] = y))
          : (y = k[31]))
      let ed = et || !D.eligible
      ;(k[32] !== ea || k[33] !== ei
        ? ((b = (e) => {
            ;($(e), "send_unconfirmed" !== ei && ea())
          }),
          (k[32] = ea),
          (k[33] = ei),
          (k[34] = b))
        : (b = k[34]),
        k[35] !== V || k[36] !== ed || k[37] !== b
          ? ((x = (0, a.jsx)(ex, { destination: V, disabled: ed, onChange: b })),
            (k[35] = V),
            (k[36] = ed),
            (k[37] = b),
            (k[38] = x))
          : (x = k[38]),
        k[39] !== X ||
        k[40] !== Y ||
        k[41] !== Z ||
        k[42] !== et ||
        k[43] !== D.eligible ||
        k[44] !== ea ||
        k[45] !== ei
          ? ((v = X
              ? (0, a.jsx)(j.OO, {
                  spacing: "large",
                  children: (0, a.jsx)(j.RW, {
                    children: (0, a.jsxs)(j.fh, {
                      children: [
                        (0, a.jsx)(el.S, {
                          id: Y,
                          checked: Z,
                          disabled: et || !D.eligible,
                          onCheckedChange: (e) => {
                            ;(Q(e), "send_unconfirmed" !== ei && ea())
                          },
                        }),
                        (0, a.jsx)("label", {
                          className: "text-sm font-medium text-default select-none",
                          htmlFor: Y,
                          children: (0, a.jsx)(c.A, {
                            id: "settings.invoiceExpensing.recurring",
                            defaultMessage: "Send future receipts here too",
                            description:
                              "Checkbox consenting to automatic delivery of future subscription invoice PDFs to the selected work email",
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : null),
            (k[39] = X),
            (k[40] = Y),
            (k[41] = Z),
            (k[42] = et),
            (k[43] = D.eligible),
            (k[44] = ea),
            (k[45] = ei),
            (k[46] = v))
          : (v = k[46]),
        k[47] !== ei
          ? ((I =
              "save_failed" === ei
                ? (0, a.jsx)(j.OO, {
                    children: (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-warning",
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.saveFailed",
                        defaultMessage:
                          "We couldn’t confirm your preferences were saved. No receipt was sent. Please try again.",
                        description:
                          "Error when saving invoice email preferences could not be confirmed, before any selected invoice was sent",
                      }),
                    }),
                  })
                : null),
            (k[47] = ei),
            (k[48] = I))
          : (I = k[48]),
        k[49] !== q || k[50] !== ei
          ? ((E =
              "send_rejected" === ei || "send_unconfirmed" === ei
                ? (0, a.jsx)(j.OO, {
                    children: (0, a.jsxs)("p", {
                      role: "alert",
                      className: "text-sm text-warning",
                      children: [
                        q
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(c.A, {
                                  id: "settings.invoiceExpensing.confirmSaved",
                                  defaultMessage: "Your forwarding preferences were saved.",
                                  description:
                                    "Confirms the forwarding preference was saved before a separate invoice email request failed or became uncertain.",
                                }),
                                " ",
                              ],
                            })
                          : null,
                        "send_unconfirmed" === ei
                          ? (0, a.jsx)(c.A, {
                              id: "settings.invoiceExpensing.sendUnconfirmed",
                              defaultMessage: "This receipt may already have been sent.",
                              description:
                                "Shown when the outcome of an invoice email request is unknown. Sending again may deliver another copy.",
                            })
                          : (0, a.jsx)(c.A, {
                              id: "settings.invoiceExpensing.sendRejected",
                              defaultMessage: "The receipt could not be sent. Please try again.",
                              description: "Shown when Billing rejects the invoice email request.",
                            }),
                      ],
                    }),
                  })
                : null),
            (k[49] = q),
            (k[50] = ei),
            (k[51] = E))
          : (E = k[51]),
        k[52] !== V || k[53] !== et || k[54] !== D.eligible
          ? ((S = et || !D.eligible || !V.trim()), (k[52] = V), (k[53] = et), (k[54] = D.eligible), (k[55] = S))
          : (S = k[55]))
      let eu = ei ?? "initial"
      return (
        k[56] !== eu
          ? ((C = (0, a.jsx)(c.A, {
              id: "settings.invoiceExpensing.sendReceiptAction",
              defaultMessage:
                "{outcome, select, send_unconfirmed {Send another copy} send_rejected {Try again} other {Send receipt}}",
              description:
                "Button to send an invoice PDF. After an unconfirmed send, the user can deliberately send another copy.",
              values: { outcome: eu },
            })),
            (k[56] = eu),
            (k[57] = C))
          : (C = k[57]),
        k[58] !== et || k[59] !== S || k[60] !== C
          ? ((P = (0, a.jsx)(j.Es, {
              children: (0, a.jsx)(w.$, { color: "primary", type: "submit", disabled: S, loading: et, children: C }),
            })),
            (k[58] = et),
            (k[59] = S),
            (k[60] = C),
            (k[61] = P))
          : (P = k[61]),
        k[62] !== f || k[63] !== x || k[64] !== v || k[65] !== I || k[66] !== E || k[67] !== P
          ? ((B = (0, a.jsxs)(j.R4, { as: "form", onSubmit: f, children: [y, x, v, I, E, P] })),
            (k[62] = f),
            (k[63] = x),
            (k[64] = v),
            (k[65] = I),
            (k[66] = E),
            (k[67] = P),
            (k[68] = B))
          : (B = k[68]),
        k[69] !== h || k[70] !== B || k[71] !== ec || k[72] !== m
          ? ((M = (0, a.jsx)(N.lG, {
              open: !0,
              size: "compact",
              showDialogClose: ec,
              contentProps: m,
              onOpenChange: h,
              children: B,
            })),
            (k[69] = h),
            (k[70] = B),
            (k[71] = ec),
            (k[72] = m),
            (k[73] = M))
          : (M = k[73]),
        M
      )
    }
    function ex(e) {
      let t,
        n,
        s,
        r,
        l,
        d = (0, i.c)(13),
        { destination: u, disabled: p, onChange: m } = e,
        g = (0, o.useId)()
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.A, {
              id: "settings.invoiceExpensing.workEmail",
              defaultMessage: "Work email",
              description: "Label for the work email destination of personal subscription invoice PDFs",
            })),
            (d[0] = t))
          : (t = d[0]),
        d[1] !== g
          ? ((n = (0, a.jsx)("label", {
              className: "text-sm font-medium text-default select-none",
              htmlFor: g,
              children: t,
            })),
            (d[1] = g),
            (d[2] = n))
          : (n = d[2]),
        d[3] !== m ? ((s = (e) => m(e.target.value)), (d[3] = m), (d[4] = s)) : (s = d[4]),
        d[5] !== u || d[6] !== p || d[7] !== g || d[8] !== s
          ? ((r = (0, a.jsx)(I.pd, {
              id: g,
              autoFocus: !0,
              autoComplete: "email",
              type: "email",
              maxLength: 254,
              required: !0,
              disabled: p,
              value: u,
              onChange: s,
            })),
            (d[5] = u),
            (d[6] = p),
            (d[7] = g),
            (d[8] = s),
            (d[9] = r))
          : (r = d[9]),
        d[10] !== n || d[11] !== r
          ? ((l = (0, a.jsx)(j.OO, { spacing: "large", children: (0, a.jsxs)(j.RW, { children: [n, r] }) })),
            (d[10] = n),
            (d[11] = r),
            (d[12] = l))
          : (l = d[12]),
        l
      )
    }
    var ev = n("BDME"),
      eA = n("HZfM"),
      eT = n("soaw"),
      ew = n("mXrZ")
    function eN(e) {
      let t,
        n,
        s,
        r,
        l,
        o,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _ = (0, i.c)(49),
        { authorization: y, busy: b, failed: x, termsChanged: v, onConfirm: A, onClose: I } = e,
        E = (0, T.A)(),
        S = y?.mandate_terms,
        C = y?.status === "requires_confirmation" || y?.status === "requires_action",
        P = y?.status === "verified",
        B = y?.status === "awaiting_stripe_migration"
      _[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(c.A, {
            id: "settings.consumerBilling.mandate.title",
            defaultMessage: "Authorize recurring payments",
            description:
              "Title of the dialog for authorizing an existing subscription's recurring card payments with the bank",
          })),
          (_[0] = t))
        : (t = _[0])
      let M = t
      if (P) {
        let e
        ;(_[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.authorizedTitle",
              defaultMessage: "Card authorized",
              description: "Success dialog title after the server verifies the subscription's recurring card mandate",
            })),
            (_[1] = e))
          : (e = _[1]),
          (M = e))
      } else if (B) {
        let e
        ;(_[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.receivedTitle",
              defaultMessage: "Bank authorization received",
              description:
                "Dialog title after bank approval while association with the existing subscription is still pending",
            })),
            (_[2] = e))
          : (e = _[2]),
          (M = e))
      }
      let k = null
      if (x) {
        let e
        ;(_[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.failed",
              defaultMessage:
                "Authorization is not confirmed. Try again to check its status or complete bank approval.",
              description:
                "An authentication or verification error occurred; do not imply that the customer's recurring payments are authorized",
            })),
            (_[3] = e))
          : (e = _[3]),
          (k = e))
      } else if (v) {
        let e
        ;(_[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.changed",
              defaultMessage: "Your authorization details changed. Review the updated terms and authorize again.",
              description:
                "The server returned a different authorization target or recurring payment terms, requiring fresh customer consent before contacting Stripe",
            })),
            (_[4] = e))
          : (e = _[4]),
          (k = e))
      } else if (b) {
        let e
        ;(_[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.checking",
              defaultMessage: "Checking authorization…",
              description: "Status while verifying recurring card authorization with the payment provider",
            })),
            (_[5] = e))
          : (e = _[5]),
          (k = e))
      } else if (P) {
        let e
        ;(_[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.verified",
              defaultMessage: "Your saved card is authorized for recurring subscription payments",
              description:
                "Success shown only after the server verifies the existing subscription's active recurring bank mandate",
            })),
            (_[6] = e))
          : (e = _[6]),
          (k = e))
      } else if (B) {
        let e
        ;(_[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.awaitingStripe",
              defaultMessage:
                "Your bank authorization was received. We’re finishing setup for future subscription payments.",
              description:
                "The bank authorized the replacement mandate but Stripe still needs to associate it with the existing subscription; this is not renewal-ready success",
            })),
            (_[7] = e))
          : (e = _[7]),
          (k = e))
      } else if (!C) {
        let e
        ;(_[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.unconfirmed",
              defaultMessage: "Recurring payments are not confirmed yet. Check again, or return to Billing later.",
              description:
                "The recurring authorization is processing or unavailable; the user can refresh its state without being told payment setup succeeded",
            })),
            (_[8] = e))
          : (e = _[8]),
          (k = e))
      }
      let L = !b
      return (
        _[9] !== b || _[10] !== I
          ? ((n = (e) => {
              e || b || I()
            }),
            (_[9] = b),
            (_[10] = I),
            (_[11] = n))
          : (n = _[11]),
        _[12] !== b || _[13] !== A
          ? ((s = (e) => {
              ;(e.preventDefault(), b || A())
            }),
            (_[12] = b),
            (_[13] = A),
            (_[14] = s))
          : (s = _[14]),
        _[15] !== M
          ? ((r = (0, a.jsx)(j.c7, { title: (0, a.jsx)(N.L3, { children: M }) })), (_[15] = M), (_[16] = r))
          : (r = _[16]),
        _[17] !== C || _[18] !== E || _[19] !== S
          ? ((l =
              C && null != S
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("p", {
                        children: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.mandate.terms",
                          defaultMessage:
                            "Authorize {amountType, select, maximum {up to {amount}} other {{amount}}} every {interval, select, day {{intervalCount, plural, one {day} other {# days}}} week {{intervalCount, plural, one {week} other {# weeks}}} month {{intervalCount, plural, one {month} other {# months}}} other {{intervalCount, plural, one {year} other {# years}}}} for your subscription",
                          description:
                            "Recurring card mandate terms that the customer must approve. amount is localized currency, amountType is fixed or maximum, interval is day/week/month/year, and intervalCount is the number of those units between payments. Maximum is a payment limit, not a charge today.",
                          values: {
                            amount: (0, ew.J)(E, S.amount, S.currency),
                            amountType: S.amount_type,
                            interval: S.interval,
                            intervalCount: S.interval_count,
                          },
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-secondary",
                        children: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.mandate.bankPrompt",
                          defaultMessage: "Your bank may ask you to approve these recurring payments",
                          description:
                            "Explains that approving recurring card payments may open the bank's authentication challenge",
                        }),
                      }),
                    ],
                  })
                : null),
            (_[17] = C),
            (_[18] = E),
            (_[19] = S),
            (_[20] = l))
          : (l = _[20]),
        _[21] !== k
          ? ((o = (0, a.jsx)("div", { role: "status", "aria-live": "polite", children: k })), (_[21] = k), (_[22] = o))
          : (o = _[22]),
        _[23] !== l || _[24] !== o
          ? ((d = (0, a.jsx)(j.OO, {
              children: (0, a.jsx)(N.rr, { asChild: !0, children: (0, a.jsxs)("div", { children: [l, o] }) }),
            })),
            (_[23] = l),
            (_[24] = o),
            (_[25] = d))
          : (d = _[25]),
        _[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.close",
              defaultMessage: "Back to Billing",
              description:
                "Closes the recurring card authorization dialog without canceling or changing the existing subscription",
            })),
            (_[26] = u))
          : (u = _[26]),
        _[27] !== b || _[28] !== I
          ? ((p = (0, a.jsx)(w.$, { color: "secondary", disabled: b, onClick: I, children: u })),
            (_[27] = b),
            (_[28] = I),
            (_[29] = p))
          : (p = _[29]),
        _[30] !== C || _[31] !== B || _[32] !== b || _[33] !== S || _[34] !== P
          ? ((m =
              P || B
                ? null
                : (0, a.jsx)(w.$, {
                    color: "primary",
                    type: "submit",
                    disabled: b,
                    children:
                      C && null != S
                        ? (0, a.jsx)(c.A, {
                            id: "settings.consumerBilling.mandate.confirm",
                            defaultMessage: "Authorize card",
                            description:
                              "Explicitly approves the displayed recurring terms and starts bank authorization for the saved card",
                          })
                        : (0, a.jsx)(c.A, {
                            id: "settings.consumerBilling.mandate.checkAgain",
                            defaultMessage: "Check again",
                            description:
                              "Refreshes the server's recurring authorization status without claiming success or creating a new intent",
                          }),
                  })),
            (_[30] = C),
            (_[31] = B),
            (_[32] = b),
            (_[33] = S),
            (_[34] = P),
            (_[35] = m))
          : (m = _[35]),
        _[36] !== p || _[37] !== m
          ? ((g = (0, a.jsxs)(j.Es, { children: [p, m] })), (_[36] = p), (_[37] = m), (_[38] = g))
          : (g = _[38]),
        _[39] !== b || _[40] !== g || _[41] !== s || _[42] !== r || _[43] !== d
          ? ((h = (0, a.jsxs)(j.R4, {
              as: "form",
              className: "select-none",
              "aria-busy": b,
              onSubmit: s,
              children: [r, d, g],
            })),
            (_[39] = b),
            (_[40] = g),
            (_[41] = s),
            (_[42] = r),
            (_[43] = d),
            (_[44] = h))
          : (h = _[44]),
        _[45] !== h || _[46] !== L || _[47] !== n
          ? ((f = (0, a.jsx)(N.lG, { open: !0, showDialogClose: L, onOpenChange: n, children: h })),
            (_[45] = h),
            (_[46] = L),
            (_[47] = n),
            (_[48] = f))
          : (f = _[48]),
        f
      )
    }
    var ej = n("yGJW")
    let eI = {
      not_required: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_NOT_REQUIRED",
      unavailable: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_UNAVAILABLE",
      requires_confirmation: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_REQUIRES_CONFIRMATION",
      requires_action: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_REQUIRES_ACTION",
      processing: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_PROCESSING",
      verified: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_VERIFIED",
      awaiting_stripe_migration: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_AWAITING_STRIPE_MIGRATION",
    }
    function eE(e, { actionType: t, status: n, operation: a, providerResult: i }) {
      try {
        ;(0, ej.yy)(e, L.qD, {
          actionType: t,
          location: "CHATGPT_WEB_BILLING_SETTINGS_LOCATION_CONSUMER_BILLING_PAGE",
          status: null == n ? void 0 : eI[n],
          operation: a,
          providerResult: i,
        })
      } catch {}
    }
    function eS(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        m,
        h,
        f,
        y,
        x,
        v,
        A,
        w,
        N,
        j,
        I,
        E,
        S = (0, i.c)(80),
        { accountId: C } = e,
        P = (0, l.gh)(g.u),
        B = (0, eA.zy)(),
        M = (0, eA.Zp)()
      S[0] !== B.search
        ? ((t = new URLSearchParams(B.search).has("billing_mandate_authorization")), (S[0] = B.search), (S[1] = t))
        : (t = S[1])
      let k = t,
        [L, G] = (0, o.useState)(!1),
        [O, D] = (0, o.useState)(),
        [R, H] = (0, o.useState)(!1),
        [U, z] = (0, o.useState)(!1),
        [W, F] = (0, o.useState)(!1),
        Y = (0, o.useRef)(!1)
      S[2] !== C ? ((n = { accountId: C, bannerShown: !1, dialogOpen: !1 }), (S[2] = C), (S[3] = n)) : (n = S[3])
      let V = (0, o.useRef)(n),
        $ = (0, o.useRef)("CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_INITIAL_LOAD"),
        Z = (0, eT.a)()
      ;(S[4] !== C ? ((s = ["consumer-billing", C, "mandate-authorization"]), (S[4] = C), (S[5] = s)) : (s = S[5]),
        S[6] !== C || S[7] !== P
          ? ((d = async (e) => {
              let { signal: t } = e,
                n = $.current
              $.current = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_INITIAL_LOAD"
              try {
                let e = await er.Request.safePost("/payments/billing/mandate-authorization", {
                  requestBody: { account_id: C, supports_saved_card_retry: !0 },
                  signal: t,
                })
                return (
                  t.aborted ||
                    eE(P, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_STATUS_RECEIVED",
                      operation: n,
                      status: e.status,
                    }),
                  e
                )
              } catch (e) {
                throw (
                  t.aborted ||
                    eE(P, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                      operation: n,
                    }),
                  e
                )
              }
            }),
            (S[6] = C),
            (S[7] = P),
            (S[8] = d))
          : (d = S[8]),
        S[9] !== s || S[10] !== d
          ? ((u = { queryKey: s, queryFn: d, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
            (S[9] = s),
            (S[10] = d),
            (S[11] = u))
          : (u = S[11]))
      let { data: Q, isError: X, isFetching: J, refetch: ee } = (0, r.I)(u),
        et = O ?? Q,
        en = !J && !X && et?.status === "not_required",
        ea = (L || k) && !en,
        ei = et?.status === "requires_confirmation" || et?.status === "requires_action",
        es = et?.status === "awaiting_stripe_migration",
        el = ei || et?.status === "processing" || es,
        eo = el && (ea || !X)
      S[12] !== C || S[13] !== et?.status || S[14] !== eo || S[15] !== ea || S[16] !== P
        ? ((p = () => {
            ;(V.current.accountId !== C && (V.current = { accountId: C, bannerShown: !1, dialogOpen: !1 }),
              eo &&
                !V.current.bannerShown &&
                ((V.current.bannerShown = !0),
                eE(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BANNER_SHOWN",
                  status: et?.status,
                })),
              ea &&
                !V.current.dialogOpen &&
                eE(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_DIALOG_OPENED",
                  status: et?.status,
                }),
              (V.current.dialogOpen = ea))
          }),
          (S[12] = C),
          (S[13] = et?.status),
          (S[14] = eo),
          (S[15] = ea),
          (S[16] = P),
          (S[17] = p))
        : (p = S[17])
      let ec = (0, o.useEffectEvent)(p)
      ;(S[18] !== ec
        ? ((m = () => {
            ec()
          }),
          (S[18] = ec),
          (S[19] = m))
        : (m = S[19]),
        S[20] !== C || S[21] !== eo || S[22] !== ea
          ? ((h = [C, eo, ea]), (S[20] = C), (S[21] = eo), (S[22] = ea), (S[23] = h))
          : (h = S[23]),
        (0, o.useEffect)(m, h),
        S[24] !== B.hash || S[25] !== B.pathname || S[26] !== B.search || S[27] !== M || S[28] !== en
          ? ((y = () => {
              let e = new URLSearchParams(B.search)
              !e.has("billing_mandate_authorization") ||
                ((["setup_intent", "setup_intent_client_secret", "redirect_status"].some((t) => e.has(t)) || en) &&
                  (e.delete("setup_intent"),
                  e.delete("setup_intent_client_secret"),
                  e.delete("redirect_status"),
                  en && e.delete("billing_mandate_authorization"),
                  M({ pathname: B.pathname, search: e.toString(), hash: B.hash }, { replace: !0 })))
            }),
            (f = [B.hash, B.pathname, B.search, M, en]),
            (S[24] = B.hash),
            (S[25] = B.pathname),
            (S[26] = B.search),
            (S[27] = M),
            (S[28] = en),
            (S[29] = f),
            (S[30] = y))
          : ((f = S[29]), (y = S[30])),
        (0, o.useEffect)(y, f),
        S[31] !== B.hash || S[32] !== B.pathname || S[33] !== B.search || S[34] !== M
          ? ((x = function () {
              G(!1)
              let e = new URLSearchParams(B.search)
              ;(e.delete("billing_mandate_authorization"),
                M({ pathname: B.pathname, search: e.toString(), hash: B.hash }, { replace: !0 }))
            }),
            (S[31] = B.hash),
            (S[32] = B.pathname),
            (S[33] = B.search),
            (S[34] = M),
            (S[35] = x))
          : (x = S[35]))
      let ed = x,
        eu = (0, T.A)(),
        ep = (0, _.AS)()
      S[36] !== et?.mandate_terms ||
      S[37] !== ed ||
      S[38] !== Q ||
      S[39] !== eu ||
      S[40] !== Z ||
      S[41] !== ep ||
      S[42] !== ee ||
      S[43] !== O ||
      S[44] !== P
        ? ((v = async function (e) {
            ;(z(!1), F(!1))
            let t =
              e && et?.mandate_terms != null
                ? "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_CONFIRMATION_PREFLIGHT"
                : "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_DIALOG_REFRESH"
            try {
              var n, a
              let i, s
              $.current = t
              let r = await ee()
              if (!Z()) return
              if (r.isError || null == r.data) return void z(!0)
              let l = r.data,
                o = O ?? Q
              if ((D(l), "not_required" === l.status)) return void ed()
              if (!e || ("requires_confirmation" !== l.status && "requires_action" !== l.status)) return
              if (null == l.client_secret || null == l.publishable_key || null == l.mandate_terms) {
                ;(eE(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                  z(!0))
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
                return void F(!0)
              let c = await (0, ev.c)(l.publishable_key, {
                locale: (0, b.eI)(eu.locale, "elements", (0, b.EG)(ep.getLayer(b.Sd.personal))),
              })
              if (!Z()) return
              if (null == c) {
                ;(eE(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                  z(!0))
                return
              }
              let d = new URL(window.location.href)
              ;(d.searchParams.delete("setup_intent"),
                d.searchParams.delete("setup_intent_client_secret"),
                d.searchParams.delete("redirect_status"),
                d.searchParams.set("billing_mandate_authorization", "1"),
                (t = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_PROVIDER_CONFIRMATION"),
                eE(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_CONFIRMATION_STARTED",
                  operation: t,
                  status: l.status,
                }))
              try {
                let e = await c.confirmCardSetup(l.client_secret, {
                  return_url: d.toString(),
                  ...(l.original_payment_method_id ? { payment_method: l.original_payment_method_id } : {}),
                })
                s = (i = null != e.error)
                  ? "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_PROVIDER_RESULT_ERROR"
                  : "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_PROVIDER_RESULT_NO_ERROR"
              } catch {
                ;((i = !0), (s = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_PROVIDER_RESULT_THREW"))
              }
              if (!Z()) return
              ;(eE(P, {
                actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_PROVIDER_RETURNED",
                operation: t,
                providerResult: s,
              }),
                ($.current = t = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_POST_CONFIRMATION_REFRESH"))
              let u = await ee()
              if (!Z()) return
              u.isError || null == u.data
                ? z(!0)
                : (D(u.data),
                  z(
                    i &&
                      "verified" !== u.data.status &&
                      "awaiting_stripe_migration" !== u.data.status &&
                      "not_required" !== u.data.status,
                  ),
                  "not_required" === u.data.status && ed())
            } catch {
              Z() &&
                (eE(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                z(!0))
            }
          }),
          (S[36] = et?.mandate_terms),
          (S[37] = ed),
          (S[38] = Q),
          (S[39] = eu),
          (S[40] = Z),
          (S[41] = ep),
          (S[42] = ee),
          (S[43] = O),
          (S[44] = P),
          (S[45] = v))
        : (v = S[45])
      let em = v
      S[46] !== em || S[47] !== Z
        ? ((A = function (e) {
            Y.current ||
              ((Y.current = !0),
              H(!0),
              em(e).finally(() => {
                ;((Y.current = !1), Z() && H(!1))
              }))
          }),
          (S[46] = em),
          (S[47] = Z),
          (S[48] = A))
        : (A = S[48])
      let eg = A
      if (!ea && (X || !el)) return null
      if (es) {
        let e
        ;(S[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerAuthorized",
              defaultMessage: "Bank authorization received",
              description:
                "Billing notice title after the bank approved the mandate while subscription setup is still pending",
            })),
            (S[49] = e))
          : (e = S[49]),
          (w = e))
      } else if (et?.status === "processing") {
        let e
        ;(S[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerProcessing",
              defaultMessage: "Authorization processing",
              description: "Billing notice title while the bank's recurring payment authorization is still processing",
            })),
            (S[50] = e))
          : (e = S[50]),
          (w = e))
      } else {
        let e
        ;(S[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerTitle",
              defaultMessage: "Authorization required",
              description:
                "Billing banner indicating that the bank must authorize future recurring subscription card payments",
            })),
            (S[51] = e))
          : (e = S[51]),
          (w = e))
      }
      if (es) {
        let e
        ;(S[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerPending",
              defaultMessage: "Bank authorization received. We’re finishing setup for future subscription payments.",
              description:
                "Bank approval is complete but Stripe has not yet associated the new recurring mandate with the subscription",
            })),
            (S[52] = e))
          : (e = S[52]),
          (N = e))
      } else if (et?.status === "processing") {
        let e
        ;(S[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerProcessingBody",
              defaultMessage: "Your bank authorization is still processing. Check its status before trying again.",
              description:
                "Billing notice asks the customer to check pending recurring card authorization without starting another bank approval",
            })),
            (S[53] = e))
          : (e = S[53]),
          (N = e))
      } else {
        let e
        ;(S[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerBody",
              defaultMessage: "Authorize your card to enable future subscription payments",
              description:
                "Billing banner inviting customers with a missing recurring mandate to authorize their saved card",
            })),
            (S[54] = e))
          : (e = S[54]),
          (N = e))
      }
      return (
        S[55] !== ei ||
        S[56] !== et?.status ||
        S[57] !== eg ||
        S[58] !== N ||
        S[59] !== Q ||
        S[60] !== P ||
        S[61] !== el ||
        S[62] !== w
          ? ((j = el
              ? (0, a.jsx)(q.l, {
                  variant: "settings",
                  type: "normal",
                  layout: "horizontal",
                  icon: (0, a.jsx)(K.Ko7, { className: "text-warning" }),
                  title: w,
                  content: N,
                  primaryCtaColor: "primary",
                  primaryCtaText: ei
                    ? (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.mandate.confirm",
                        defaultMessage: "Authorize card",
                        description:
                          "Explicitly approves the displayed recurring terms and starts bank authorization for the saved card",
                      })
                    : (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.mandate.viewStatus",
                        defaultMessage: "Check status",
                        description:
                          "Opens the recurring card authorization dialog to inspect or refresh an incomplete setup",
                      }),
                  onPrimaryCtaClick: () => {
                    ;(eE(P, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BANNER_CTA_CLICKED",
                      status: et?.status,
                    }),
                      D(Q),
                      G(!0),
                      ei || eg(!1))
                  },
                })
              : null),
            (S[55] = ei),
            (S[56] = et?.status),
            (S[57] = eg),
            (S[58] = N),
            (S[59] = Q),
            (S[60] = P),
            (S[61] = el),
            (S[62] = w),
            (S[63] = j))
          : (j = S[63]),
        S[64] !== ei ||
        S[65] !== et ||
        S[66] !== R ||
        S[67] !== eg ||
        S[68] !== ed ||
        S[69] !== ea ||
        S[70] !== U ||
        S[71] !== X ||
        S[72] !== J ||
        S[73] !== k ||
        S[74] !== P ||
        S[75] !== W
          ? ((I = ea
              ? (0, a.jsx)(eN, {
                  authorization: et,
                  busy: R || (k && J),
                  failed: U || X,
                  termsChanged: W,
                  onConfirm: () => {
                    ;(ei &&
                      et?.mandate_terms != null &&
                      eE(P, {
                        actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_CONFIRM_CLICKED",
                        status: et.status,
                      }),
                      eg(ei))
                  },
                  onClose: () => {
                    ;(V.current.dialogOpen &&
                      ((V.current.dialogOpen = !1),
                      eE(P, {
                        actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_DIALOG_CLOSED",
                        status: et?.status,
                      })),
                      ed())
                  },
                })
              : null),
            (S[64] = ei),
            (S[65] = et),
            (S[66] = R),
            (S[67] = eg),
            (S[68] = ed),
            (S[69] = ea),
            (S[70] = U),
            (S[71] = X),
            (S[72] = J),
            (S[73] = k),
            (S[74] = P),
            (S[75] = W),
            (S[76] = I))
          : (I = S[76]),
        S[77] !== j || S[78] !== I
          ? ((E = (0, a.jsxs)(a.Fragment, { children: [j, I] })), (S[77] = j), (S[78] = I), (S[79] = E))
          : (E = S[79]),
        E
      )
    }
    var eC = n("Qgfj"),
      eP = n("TjgH"),
      eB = n("bqtn"),
      eM = n("RNul"),
      ek = n("smwl"),
      eL = n("FKe1"),
      eG = n("p0XN"),
      eO = n("jQyB")
    function eD(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        y,
        b,
        x,
        v,
        N,
        j,
        I,
        P,
        B,
        k,
        L,
        G = (0, i.c)(81),
        { accountId: D } = e,
        U = (0, l.gh)(g.u),
        z = (0, T.A)(),
        W = (0, eA.Zp)(),
        F = (0, o.useId)()
      G[0] !== D ? ((t = (0, H.r_)(D)), (G[0] = D), (G[1] = t)) : (t = G[1])
      let { data: q, isPending: Y, isError: V, refetch: $ } = (0, r.I)(t)
      G[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { enabled: !0, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (G[2] = n))
        : (n = G[2])
      let { data: Z, isSuccess: Q, isFetching: X, refetch: J } = (0, ek.q7)(n),
        [ee, et] = (0, o.useState)(null),
        [en, ea] = (0, o.useState)(!1),
        es = (0, o.useRef)(null),
        er = (0, o.useRef)(null)
      G[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => {
            es.current?.isConnected ? es.current.focus() : er.current?.focus()
          }),
          (G[3] = s))
        : (s = G[3])
      let el = s,
        eo = Z?.isEnabled ? Z.paymentMethod?.payment_method_id : null
      ;(G[4] !== D || G[5] !== $ || G[6] !== J
        ? ((d = async (e) => {
            switch (e.type) {
              case "default":
                await M.CodexRequest.safePost("/payments/payment_method/default", {
                  requestBody: { account_id: D, payment_method_id: e.id },
                })
                break
              case "backup":
                await M.CodexRequest.safePost("/payments/payment_method/backup", {
                  requestBody: { account_id: D, enabled: e.enabled },
                })
                break
              case "remove": {
                let [t, n] = await Promise.all([$(), J()]),
                  a = t.data?.payment_methods.find((t) => t.id === e.id)
                if (
                  t.isError ||
                  null == a ||
                  !(0, ei.Kq)({
                    paymentMethod: a,
                    defaultPaymentMethodId: t.data?.default_payment_method_id,
                    defaultPaymentMethods: t.data?.default_payment_methods,
                    autoReloadPaymentMethodId: n.data?.isEnabled ? n.data.paymentMethod?.payment_method_id : null,
                    autoReloadResolved: n.isSuccess,
                  })
                )
                  throw Error("Payment method is required by billing")
                await M.CodexRequest.safeDelete("/payments/payment_method/{payment_method_id}", {
                  parameters: { path: { payment_method_id: e.id }, query: { account_id: D } },
                })
              }
            }
          }),
          (G[4] = D),
          (G[5] = $),
          (G[6] = J),
          (G[7] = d))
        : (d = G[7]),
        G[8] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => ea(!1)), (G[8] = u)) : (u = G[8]),
        G[9] !== D || G[10] !== U
          ? ((p = async (e, t) => {
              ;(await (0, H.fI)(U, D), "remove" === t.type && er.current?.focus())
            }),
            (G[9] = D),
            (G[10] = U),
            (G[11] = p))
          : (p = G[11]),
        G[12] !== d || G[13] !== p
          ? ((m = { mutationFn: d, onMutate: u, onSuccess: p }), (G[12] = d), (G[13] = p), (G[14] = m))
          : (m = G[14]))
      let { mutate: ed, isPending: eu, isError: ep, variables: em, reset: eg } = (0, A.n)(m)
      G[15] !== q?.payment_methods
        ? ((h = q?.payment_methods.filter(eR)), (G[15] = q?.payment_methods), (G[16] = h))
        : (h = G[16])
      let eh = h,
        ef = (eh?.length ?? 0) > 1
      if (Y) {
        let e
        ;(G[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(R, {
              children: (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.loadingPaymentMethods",
                defaultMessage: "Loading payment methods",
                description: "Status while the consumer's saved payment methods are loading",
              }),
            })),
            (G[17] = e))
          : (e = G[17]),
          (f = e))
      } else if (V) {
        let e
        ;(G[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              role: "alert",
              className: "text-sm text-warning",
              children: (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.loadPaymentMethodsError",
                defaultMessage: "Unable to load payment methods. Please try again.",
                description: "Error when the consumer's saved payment methods cannot be loaded",
              }),
            })),
            (G[18] = e))
          : (e = G[18]),
          (f = e))
      } else {
        let e, t, n, i
        ;(G[19] !== eu ||
        G[20] !== em ||
        G[21] !== X ||
        G[22] !== eo ||
        G[23] !== Q ||
        G[24] !== q.default_payment_method_id ||
        G[25] !== q.default_payment_methods ||
        G[26] !== q.payment_methods ||
        G[27] !== z ||
        G[28] !== ed ||
        G[29] !== W ||
        G[30] !== J ||
        G[31] !== F ||
        G[32] !== eg ||
        G[33] !== U
          ? ((e = q.payment_methods.map((e, t) => {
              let n = e.id === q.default_payment_method_id,
                i = eu && em?.type === "remove" && em.id === e.id,
                s = (0, ei.JY)(e),
                r = e.id === eo,
                l = !(0, ei.Kq)({
                  paymentMethod: e,
                  defaultPaymentMethodId: q.default_payment_method_id,
                  defaultPaymentMethods: q.default_payment_methods,
                  autoReloadPaymentMethodId: eo,
                  autoReloadResolved: Q,
                }),
                o = "card" === e.type || !n
              return (0, a.jsx)(
                S.ic,
                {
                  size: "compact",
                  icon: (0, a.jsx)(K.Y5G, {}),
                  ...(0, eG.G)(e),
                  control: (0, a.jsxs)(a.Fragment, {
                    children: [
                      s ? (0, a.jsx)(eP.E, { variant: "warning", children: (0, a.jsx)(c.A, { ...eH.expired }) }) : null,
                      n ? (0, a.jsx)(eP.E, { children: (0, a.jsx)(c.A, { ...eH.default }) }) : null,
                      o
                        ? (0, a.jsxs)(eB.Ab, {
                            triggerButton: (0, a.jsx)(w.$, {
                              color: "ghost",
                              radius: "large",
                              size: "inputIcon",
                              "aria-busy": i,
                              "aria-label": z.formatMessage({
                                id: "settings.consumerBilling.paymentActions",
                                defaultMessage: "Open payment method actions",
                                description: "Accessible label for a saved payment method's actions menu",
                              }),
                              disabled: eu,
                              onFocus: (e) => {
                                es.current = e.currentTarget
                              },
                              onPointerDown: (e) => {
                                es.current = e.currentTarget
                              },
                              children: i ? (0, a.jsx)(eM.y, { className: "icon-xs" }) : (0, a.jsx)(K.e4G, {}),
                            }),
                            children: [
                              n || "custom" === e.type
                                ? null
                                : (0, a.jsx)(eB.ms.Item, {
                                    disabled: eu,
                                    onSelect: () => {
                                      ;(O(
                                        U,
                                        "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_SET_DEFAULT_PAYMENT_METHOD_CLICKED",
                                      ),
                                        ed({ type: "default", id: e.id }))
                                    },
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.setDefault",
                                      defaultMessage: "Set as default",
                                      description:
                                        "Make this saved payment method the default for subscription payments",
                                    }),
                                  }),
                              "card" === e.type
                                ? (0, a.jsx)(eB.ms.Item, {
                                    disabled: eu,
                                    onSelect: () => {
                                      ;(eg(),
                                        ea(!1),
                                        O(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_PAYMENT_METHOD_CLICKED"),
                                        et({ type: "edit", method: e }))
                                    },
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.editCard",
                                      defaultMessage: "Edit",
                                      description: "Edit a saved card's expiration and billing address",
                                    }),
                                  })
                                : null,
                              n
                                ? null
                                : (0, a.jsx)(eB.ms.Item, {
                                    tone: "danger",
                                    disabled: eu || X || l,
                                    focusableWhenDisabled: r && !eu,
                                    "aria-describedby": r ? `${F}-${t}` : void 0,
                                    onSelect: () => {
                                      ;(O(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_REMOVE_PAYMENT_METHOD_CLICKED"),
                                        ed({ type: "remove", id: e.id }))
                                    },
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.removeCard",
                                      defaultMessage: "Remove",
                                      description: "Remove this saved payment method from the consumer billing account",
                                    }),
                                  }),
                              !n && r
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(eB.ms.Message, {
                                        compact: !0,
                                        children: (0, a.jsx)("span", {
                                          id: `${F}-${t}`,
                                          children: (0, a.jsx)(c.A, {
                                            id: "settings.consumerBilling.autoReloadRemovalHelp",
                                            defaultMessage:
                                              "This card can’t be removed because it’s selected for auto-reload",
                                            description:
                                              "Explains why the saved card selected for auto-reload cannot be removed",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)(eB.ms.Item, {
                                        onSelect: () => {
                                          W("/settings/usage")
                                        },
                                        children: (0, a.jsx)(c.A, {
                                          id: "settings.consumerBilling.manageAutoReload",
                                          defaultMessage: "Manage auto-reload",
                                          description:
                                            "Open Usage settings to choose another auto-reload card or disable auto-reload",
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                              n || Q || X
                                ? null
                                : (0, a.jsx)(eB.ms.Item, {
                                    onSelect: () => void J(),
                                    children: (0, a.jsx)(c.A, {
                                      id: "settings.consumerBilling.retryRemovalProtection",
                                      defaultMessage: "Retry",
                                      description:
                                        "Retry loading auto-reload settings before allowing a payment method to be removed",
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
            (G[19] = eu),
            (G[20] = em),
            (G[21] = X),
            (G[22] = eo),
            (G[23] = Q),
            (G[24] = q.default_payment_method_id),
            (G[25] = q.default_payment_methods),
            (G[26] = q.payment_methods),
            (G[27] = z),
            (G[28] = ed),
            (G[29] = W),
            (G[30] = J),
            (G[31] = F),
            (G[32] = eg),
            (G[33] = U),
            (G[34] = e))
          : (e = G[34]),
          G[35] !== q.payment_methods.length
            ? ((t =
                0 === q.payment_methods.length
                  ? (0, a.jsx)(S.ic, {
                      size: "compact",
                      label: (0, a.jsx)("span", {
                        className: "font-normal text-secondary",
                        children: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.noPaymentMethods",
                          defaultMessage: "No payment methods available",
                          description: "Empty state when a consumer has no saved payment methods",
                        }),
                      }),
                      control: null,
                    })
                  : null),
              (G[35] = q.payment_methods.length),
              (G[36] = t))
            : (t = G[36]),
          G[37] !== eu || G[38] !== ef || G[39] !== q.backup_payment_method_enabled || G[40] !== z || G[41] !== ed
            ? ((n =
                null != q.backup_payment_method_enabled && ef
                  ? (0, a.jsx)(S.ic, {
                      label: (0, a.jsx)(c.A, { ...eH.backup }),
                      description: (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.backupDescription",
                        defaultMessage: "Use another payment method if your default payment method fails",
                        description:
                          "Explains the effect of enabling backup payment methods for a consumer subscription",
                      }),
                      control: (0, a.jsx)(ec.l, {
                        checked: q.backup_payment_method_enabled,
                        disabled: eu,
                        ariaLabel: z.formatMessage(eH.backup),
                        onChange: (e) => ed({ type: "backup", enabled: e }),
                      }),
                    })
                  : null),
              (G[37] = eu),
              (G[38] = ef),
              (G[39] = q.backup_payment_method_enabled),
              (G[40] = z),
              (G[41] = ed),
              (G[42] = n))
            : (n = G[42]),
          G[43] !== t || G[44] !== n || G[45] !== e
            ? ((i = (0, a.jsxs)(C.t, { children: [e, t, n] })), (G[43] = t), (G[44] = n), (G[45] = e), (G[46] = i))
            : (i = G[46]),
          (f = i))
      }
      return (
        G[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.paymentMethods",
              defaultMessage: "Payment methods",
              description: "Saved payment methods for a consumer subscription",
            })),
            (G[47] = _))
          : (_ = G[47]),
        G[48] !== eg || G[49] !== U
          ? ((y = (e) => {
              ;((es.current = e.currentTarget),
                eg(),
                ea(!1),
                O(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_ADD_PAYMENT_METHOD_CLICKED"),
                et({ type: "add" }))
            }),
            (G[48] = eg),
            (G[49] = U),
            (G[50] = y))
          : (y = G[50]),
        G[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.addPaymentMethod",
              defaultMessage: "Add new",
              description: "Open the form to add a personal payment method",
            })),
            (G[51] = b))
          : (b = G[51]),
        G[52] !== eu || G[53] !== y
          ? ((x = (0, a.jsx)(E.X.Header, {
              title: _,
              actions: (0, a.jsx)(w.$, {
                ref: er,
                color: "secondary",
                size: "toolbar",
                disabled: eu,
                onClick: y,
                children: b,
              }),
            })),
            (G[52] = eu),
            (G[53] = y),
            (G[54] = x))
          : (x = G[54]),
        G[55] !== eu || G[56] !== em?.type
          ? ((v =
              eu && em?.type === "remove"
                ? (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.updatingPaymentMethods",
                    defaultMessage: "Updating payment methods…",
                    description:
                      "Status while processing a saved-payment-method removal request, including checking whether removal is permitted and refreshing the list. Does not imply removal has happened or will succeed.",
                  })
                : null),
            (G[55] = eu),
            (G[56] = em?.type),
            (G[57] = v))
          : (v = G[57]),
        G[58] !== v
          ? ((N = (0, a.jsx)("p", { role: "status", className: "sr-only", children: v })), (G[58] = v), (G[59] = N))
          : (N = G[59]),
        G[60] !== en
          ? ((j = en
              ? (0, a.jsx)("p", {
                  role: "status",
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.paymentMethodAlreadySaved",
                    defaultMessage: "This card is already saved",
                    description:
                      "Status after the backend recognizes a duplicate card and keeps the existing saved payment method",
                  }),
                })
              : null),
            (G[60] = en),
            (G[61] = j))
          : (j = G[61]),
        G[62] !== ep || G[63] !== em
          ? ((I =
              ep && null != em
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-warning",
                    children: (0, a.jsx)(c.A, { ...eH[`${em.type}Error`] }),
                  })
                : null),
            (G[62] = ep),
            (G[63] = em),
            (G[64] = I))
          : (I = G[64]),
        G[65] !== f || G[66] !== N || G[67] !== j || G[68] !== I
          ? ((P = (0, a.jsxs)(E.X.Content, { children: [N, j, I, f] })),
            (G[65] = f),
            (G[66] = N),
            (G[67] = j),
            (G[68] = I),
            (G[69] = P))
          : (P = G[69]),
        G[70] !== D || G[71] !== ee?.type
          ? ((B =
              ee?.type === "add"
                ? (0, a.jsx)(eL.AddPaymentMethodDialog, {
                    accountId: D,
                    onCloseAutoFocus: el,
                    onClose: () => et(null),
                    onSuccess: (e) => {
                      let { status: t } = e
                      return ea("already_saved" === t)
                    },
                  })
                : null),
            (G[70] = D),
            (G[71] = ee?.type),
            (G[72] = B))
          : (B = G[72]),
        G[73] !== D || G[74] !== ee
          ? ((k =
              ee?.type === "edit"
                ? (0, a.jsx)(eO.I, {
                    accountId: D,
                    methodId: ee.method.id,
                    onCloseAutoFocus: el,
                    onClose: () => et(null),
                  })
                : null),
            (G[73] = D),
            (G[74] = ee),
            (G[75] = k))
          : (k = G[75]),
        G[76] !== x || G[77] !== P || G[78] !== B || G[79] !== k
          ? ((L = (0, a.jsxs)(E.X, { children: [x, P, B, k] })),
            (G[76] = x),
            (G[77] = P),
            (G[78] = B),
            (G[79] = k),
            (G[80] = L))
          : (L = G[80]),
        L
      )
    }
    function eR(e) {
      return "card" === e.type && !(0, ei.JY)(e)
    }
    let eH = (0, eC.YK)({
      default: {
        id: "settings.consumerBilling.defaultCard",
        defaultMessage: "Default",
        description: "Badge for the default subscription payment method",
      },
      expired: {
        id: "settings.consumerBilling.expiredCard",
        defaultMessage: "Expired",
        description: "Badge for a saved card whose expiration date has passed",
      },
      backup: {
        id: "settings.consumerBilling.backupMethods",
        defaultMessage: "Backup payment methods",
        description: "Toggle allowing another saved payment method when the default fails",
      },
      defaultError: {
        id: "settings.consumerBilling.setDefaultPaymentMethodError",
        defaultMessage: "Unable to set default payment method. Please try again.",
        description: "Error after setting the default saved payment method fails",
      },
      backupError: {
        id: "settings.consumerBilling.backupPaymentMethodsError",
        defaultMessage: "Unable to update backup payment methods setting. Please try again.",
        description: "Error after changing the backup payment-method setting fails",
      },
      removeError: {
        id: "settings.consumerBilling.removePaymentMethodError",
        defaultMessage: "Unable to remove payment method. Please try again.",
        description: "Error after removing a saved payment method fails",
      },
    })
    var eU = n("mBJV"),
      ez = n("laUo"),
      eW = n("QpGz"),
      eF = n("IzuK"),
      eq = n("XP4n"),
      eK = n("tRqc"),
      eY = n("ra39"),
      eV = n("XQoA"),
      e$ = n("QG3v")
    let eZ = (0, o.lazy)(async () => ({
        default: (await n.e(461991).then(n.bind(n, "jCCd"))).SubscriptionPlatformDialog,
      })),
      eQ = (0, o.lazy)(async () => ({
        default: (await n.e(376348).then(n.bind(n, "dqlO"))).SubscriptionRenewalDialog,
      })),
      eX = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(482985), n.e(288753)]).then(n.bind(n, "xaC3"))).PlanDowngradeDialog,
      })),
      eJ = (0, o.lazy)(async () => ({ default: (await n.e(531265).then(n.bind(n, "ychY"))).BillingCadenceDialog }))
    function e0(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        m,
        h,
        f,
        y,
        b,
        x,
        v,
        A,
        N,
        j,
        I,
        E,
        P,
        B,
        M,
        k,
        L,
        G,
        D,
        R,
        H,
        U,
        z,
        W,
        F,
        q,
        Y,
        V,
        $,
        Z,
        Q,
        X,
        J,
        ee,
        et,
        en = (0, i.c)(134),
        { account: ea, accountId: es } = e,
        er = (0, l.gh)(g.u),
        el = (0, T.A)(),
        eo = (0, eu.j)()
      en[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (en[0] = t)) : (t = en[0])
      let ec = (0, eW.q)(t),
        ed = (0, _.AS)()
      en[1] !== ea.account.plan_type
        ? ((n = (0, ez.m6)(ea.account.plan_type)), (en[1] = ea.account.plan_type), (en[2] = n))
        : (n = en[2])
      let ep = n
      en[3] !== ea ? ((s = (0, eV.d)(ea)), (en[3] = ea), (en[4] = s)) : (s = en[4])
      let em = s,
        eg = (0, eA.zy)(),
        eh = (0, eA.Zp)()
      en[5] !== ea ||
      en[6] !== es ||
      en[7] !== em ||
      en[8] !== eg.state?.subscriptionDowngradeAccountId ||
      en[9] !== eg.state?.subscriptionRenewalAccountId ||
      en[10] !== ed
        ? ((d = () => {
            if ("renew" !== em) return null
            if (
              eg.state?.subscriptionDowngradeAccountId === es &&
              !0 === ea.entitlement.has_active_subscription &&
              !ea.entitlement.is_delinquent &&
              null == ea.entitlement.scheduled_plan_change
            ) {
              let e = (0, ez.y_)((0, eF.wN)(ea), {
                checkGate: (e) => ed.checkGate(e),
                isPro200PurchaseAvailable: ea.is_pro_200_purchase_available,
              })
              if (null != e) return { targetPlan: e }
            }
            return eg.state?.subscriptionRenewalAccountId === es ? "renewal" : null
          }),
          (en[5] = ea),
          (en[6] = es),
          (en[7] = em),
          (en[8] = eg.state?.subscriptionDowngradeAccountId),
          (en[9] = eg.state?.subscriptionRenewalAccountId),
          (en[10] = ed),
          (en[11] = d))
        : (d = en[11])
      let [ef, e_] = (0, o.useState)(d)
      ;(en[12] !== eg || en[13] !== eh
        ? ((u = () => {
            if (eg.state?.subscriptionRenewalAccountId == null && eg.state?.subscriptionDowngradeAccountId == null)
              return
            let e = { ...eg.state }
            ;(delete e.subscriptionRenewalAccountId,
              delete e.subscriptionDowngradeAccountId,
              eh(eg, { replace: !0, state: e }))
          }),
          (p = [eg, eh]),
          (en[12] = eg),
          (en[13] = eh),
          (en[14] = u),
          (en[15] = p))
        : ((u = en[14]), (p = en[15])),
        (0, o.useEffect)(u, p),
        en[16] !== ea ? ((m = (0, ei.Ah)(ea)), (en[16] = ea), (en[17] = m)) : (m = en[17]))
      let ey = m
      en[18] !== em || en[19] !== ed
        ? ((h =
            "external_manage" !== em &&
            "renew" !== em &&
            "compare_plans" === (0, _.XM)(ed, "1450647191").get("manage_plan_cta_copy_variant", "control")),
          (en[18] = em),
          (en[19] = ed),
          (en[20] = h))
        : (h = en[20])
      let eb = h
      ;(en[21] !== es ? ((f = (0, eY.Ie)(es)), (en[21] = es), (en[22] = f)) : (f = en[22]),
        en[23] !== ea
          ? ((y = (0, eq.F9)(ea) || ("free" !== ea.account.plan_type && null != ea.entitlement.discount)),
            (en[23] = ea),
            (en[24] = y))
          : (y = en[24]),
        en[25] !== y || en[26] !== f
          ? ((b = { ...f, staleTime: 0, enabled: y }), (en[25] = y), (en[26] = f), (en[27] = b))
          : (b = en[27]))
      let { data: ex } = (0, r.I)(b)
      ;(en[28] !== ed
        ? ((x = (e) => (0, _.XM)(ed, "3768341700").get(e, !1)), (en[28] = ed), (en[29] = x))
        : (x = en[29]),
        en[30] !== es || en[31] !== ex || en[32] !== x
          ? ((v = (0, eY.gN)(es, ex, x)), (en[30] = es), (en[31] = ex), (en[32] = x), (en[33] = v))
          : (v = en[33]))
      let { data: ev } = (0, r.I)(v)
      if (
        en[34] !== ea ||
        en[35] !== es ||
        en[36] !== ef ||
        en[37] !== ey ||
        en[38] !== ev ||
        en[39] !== er ||
        en[40] !== ed ||
        en[41] !== ex ||
        en[42] !== ep
      ) {
        H = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t =
              null != (k = (0, eq._N)(ea, ex, ev)) &&
              (k.isAcquisitionCandidate || k.isRetentionCandidate) &&
              (0, _.XM)(ed, "2160290604").get("is_yearly_plus_existing_user_subscription_enabled", !1)
          ;((E = k?.isAcquisitionCandidate === !0 && t), (P = k?.isRetentionCandidate === !0 && t))
          let n = null != k && ("yearly" === k.currentCadence || "yearly" === k.scheduledCadence || E)
          if (
            ((M =
              null != k &&
              n &&
              (("monthly" === k.currentCadence && "yearly" === k.scheduledCadence) ||
                ("yearly" === k.currentCadence && null == k.scheduledCadence) ||
                E ||
                P)),
            null == ep)
          ) {
            H = null
            break e
          }
          if (
            ((B = (e) => {
              null != k && ((0, eK.x)(er, { accountId: es, state: k, entryPoint: e }), e_({ state: k, entryPoint: e }))
            }),
            (I = null),
            "platform" === ef && null != ey)
          ) {
            let e, t
            ;(en[57] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => e_(null)), (en[57] = e)) : (e = en[57]),
              en[58] !== ea || en[59] !== ey
                ? ((t = (0, a.jsx)(eZ, { account: ea, managementSource: ey, onClose: e })),
                  (en[58] = ea),
                  (en[59] = ey),
                  (en[60] = t))
                : (t = en[60]),
              (I = t))
          } else if ("renewal" === ef) {
            let e, t
            ;(en[61] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => e_(null)), (en[61] = e)) : (e = en[61]),
              en[62] !== ea || en[63] !== es
                ? ((t = (0, a.jsx)(eQ, { account: ea, accountId: es, onClose: e })),
                  (en[62] = ea),
                  (en[63] = es),
                  (en[64] = t))
                : (t = en[64]),
              (I = t))
          } else if ("object" == typeof ef && null != ef) {
            let e
            ;(en[65] !== ea || en[66] !== es || en[67] !== ef
              ? ((e =
                  "targetPlan" in ef
                    ? (0, a.jsx)(eX, { account: ea, accountId: es, targetPlan: ef.targetPlan, onClose: () => e_(null) })
                    : (0, a.jsx)(eJ, {
                        accountId: es,
                        state: ef.state,
                        entryPoint: ef.entryPoint,
                        onClose: () => e_(null),
                      })),
                (en[65] = ea),
                (en[66] = es),
                (en[67] = ef),
                (en[68] = e))
              : (e = en[68]),
              (I = e))
          }
          ;((j = C.t),
            (N = S.ic),
            en[69] !== ep.pricePlan
              ? ((e = (0, a.jsx)(e$.u, { plan: ep.pricePlan })), (en[69] = ep.pricePlan), (en[70] = e))
              : (e = en[70]))
          let i =
            n && null != k
              ? (0, a.jsx)(eP.E, {
                  variant: "outline",
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.cadenceBadge",
                    defaultMessage: "{period, select, yearly {Annual} other {Monthly}}",
                    description:
                      "Current payment frequency beside the Plus plan title, shown only when annual billing presentation is eligible. period is the current subscription cadence.",
                    values: { period: k.currentCadence },
                  }),
                })
              : null
          ;(en[71] !== e || en[72] !== i
            ? ((R = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [e, i] })),
              (en[71] = e),
              (en[72] = i),
              (en[73] = R))
            : (R = en[73]),
            (A = e$.R),
            (L = ea),
            en[74] !== ea || en[75] !== ev || en[76] !== ex
              ? ((G = (0, eY.T)(ea, ex, ev)), (en[74] = ea), (en[75] = ev), (en[76] = ex), (en[77] = G))
              : (G = en[77]),
            (D =
              n && k?.scheduledCadence != null
                ? { period: k.scheduledCadence, date: k.renewalDate.toISOString() }
                : void 0))
        }
        ;((en[34] = ea),
          (en[35] = es),
          (en[36] = ef),
          (en[37] = ey),
          (en[38] = ev),
          (en[39] = er),
          (en[40] = ed),
          (en[41] = ex),
          (en[42] = ep),
          (en[43] = A),
          (en[44] = N),
          (en[45] = j),
          (en[46] = I),
          (en[47] = E),
          (en[48] = P),
          (en[49] = B),
          (en[50] = M),
          (en[51] = k),
          (en[52] = L),
          (en[53] = G),
          (en[54] = D),
          (en[55] = R),
          (en[56] = H))
      } else
        ((A = en[43]),
          (N = en[44]),
          (j = en[45]),
          (I = en[46]),
          (E = en[47]),
          (P = en[48]),
          (B = en[49]),
          (M = en[50]),
          (k = en[51]),
          (L = en[52]),
          (G = en[53]),
          (D = en[54]),
          (R = en[55]),
          (H = en[56]))
      if (H !== Symbol.for("react.early_return_sentinel")) return H
      en[78] !== A || en[79] !== L || en[80] !== G || en[81] !== D
        ? ((U = (0, a.jsx)(A, { account: L, renewalPrice: G, scheduledCadence: D })),
          (en[78] = A),
          (en[79] = L),
          (en[80] = G),
          (en[81] = D),
          (en[82] = U))
        : (U = en[82])
      let eT = "upgrade" === em ? "upgrade" : "secondary"
      ;(en[83] !== ea.account.plan_type ||
      en[84] !== em ||
      en[85] !== ec ||
      en[86] !== ey ||
      en[87] !== eo ||
      en[88] !== er ||
      en[89] !== ep.pricePlan
        ? ((z = (e) => {
            "external_manage" === em && null != ey
              ? ("partner_managed" !== ey &&
                  O(
                    er,
                    "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_MOBILE_MANAGE_CLICKED",
                    "app_store" === ey
                      ? "CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_APP_STORE"
                      : "CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_GOOGLE_PLAY_STORE",
                  ),
                e_("platform"))
              : "renew" === em
                ? (O(er, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_RENEW_PLAN_CLICKED"), e_("renewal"))
                : ("free" === ea.account.plan_type &&
                    (0, ej.yy)(er, eU.Yvh, {
                      action: "CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED",
                      entryPoint: "CHATGPT_SUBSCRIPTION_UPSELL_ENTRY_POINT_SUBSCRIPTION_SETTINGS",
                      productExperience: "CHATGPT_RATE_LIMIT_BANNER_PRODUCT_EXPERIENCE_CHAT",
                    }),
                  O(er, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CHANGE_PLAN_CLICKED"),
                  eo({
                    currentPlan: ep.pricePlan,
                    event: e,
                    getPricingUrl: ec,
                    nativeSurfaceTabOverride: "personal",
                    source: "consumer_billing_settings_plan_row",
                  }))
          }),
          (en[83] = ea.account.plan_type),
          (en[84] = em),
          (en[85] = ec),
          (en[86] = ey),
          (en[87] = eo),
          (en[88] = er),
          (en[89] = ep.pricePlan),
          (en[90] = z))
        : (z = en[90]),
        en[91] !== em
          ? ((W = "upgrade" === em ? (0, a.jsx)(K.JRA, {}) : null), (en[91] = em), (en[92] = W))
          : (W = en[92]))
      let ew = String(eb)
      return (
        en[93] !== em || en[94] !== ew
          ? ((F = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.planAction.genericRenewal",
              defaultMessage:
                "{action, select, external_manage {Manage} renew {Renew plan} upgrade {{compare, select, true {Compare plans} other {Upgrade}}} change {{compare, select, true {Compare plans} other {Change plan}}} other {{compare, select, true {Compare plans} other {View plans}}}}",
              description:
                "Primary action beside the current personal Billing plan. action chooses external management, renewal, upgrade, change, or view. compare selects the original comparison-copy experiment, only for upgrade/change/view actions. The renewal action opens a confirmation for the currently displayed plan.",
              values: { action: em, compare: ew },
            })),
            (en[93] = em),
            (en[94] = ew),
            (en[95] = F))
          : (F = en[95]),
        en[96] !== eT || en[97] !== z || en[98] !== W || en[99] !== F
          ? ((q = (0, a.jsxs)(w.$, { color: eT, size: "toolbar", type: "button", onClick: z, children: [W, F] })),
            (en[96] = eT),
            (en[97] = z),
            (en[98] = W),
            (en[99] = F),
            (en[100] = q))
          : (q = en[100]),
        en[101] !== el || en[102] !== B || en[103] !== M
          ? ((Y = M
              ? (0, a.jsx)(eB.Ab, {
                  align: "end",
                  triggerButton: (0, a.jsx)(w.$, {
                    color: "secondary",
                    size: "inputIcon",
                    type: "button",
                    "aria-label": el.formatMessage({
                      id: "settings.consumerBilling.cadenceActionsLabel",
                      defaultMessage: "Billing schedule options",
                      description:
                        "Accessible label for the plan actions menu that contains the Plus Monthly/Annual billing schedule option.",
                    }),
                    children: (0, a.jsx)(K.l0Y, {}),
                  }),
                  children: (0, a.jsx)(eB.ms.Item, {
                    onClick: () => B("manage_billing_schedule"),
                    children: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.manageCadence",
                      defaultMessage: "Manage billing schedule",
                      description:
                        "Opens the Plus billing-frequency selector for changing Monthly or Annual billing at the next renewal.",
                    }),
                  }),
                })
              : null),
            (en[101] = el),
            (en[102] = B),
            (en[103] = M),
            (en[104] = Y))
          : (Y = en[104]),
        en[105] !== q || en[106] !== Y
          ? ((V = (0, a.jsxs)(a.Fragment, { children: [q, Y] })), (en[105] = q), (en[106] = Y), (en[107] = V))
          : (V = en[107]),
        en[108] !== N || en[109] !== R || en[110] !== U || en[111] !== V
          ? (($ = (0, a.jsx)(N, { label: R, description: U, control: V })),
            (en[108] = N),
            (en[109] = R),
            (en[110] = U),
            (en[111] = V),
            (en[112] = $))
          : ($ = en[112]),
        en[113] !== k
          ? ((Z =
              k?.currentCadence === "yearly" && null == k.scheduledCadence && k.annualSavingsAmount > 0
                ? (0, a.jsx)(e2, { state: k })
                : null),
            (en[113] = k),
            (en[114] = Z))
          : (Z = en[114]),
        en[115] !== E || en[116] !== B || en[117] !== k
          ? ((Q =
              null != k && E
                ? (0, a.jsx)(e2, { state: k, offer: "annual_offer", onOpen: () => B("annual_offer") })
                : null),
            (en[115] = E),
            (en[116] = B),
            (en[117] = k),
            (en[118] = Q))
          : (Q = en[118]),
        en[119] !== P || en[120] !== B || en[121] !== k
          ? ((X =
              null != k && P
                ? (0, a.jsx)(e2, { state: k, offer: "keep_saving", onOpen: () => B("keep_saving") })
                : null),
            (en[119] = P),
            (en[120] = B),
            (en[121] = k),
            (en[122] = X))
          : (X = en[122]),
        en[123] !== j || en[124] !== $ || en[125] !== Z || en[126] !== Q || en[127] !== X
          ? ((J = (0, a.jsxs)(j, { children: [$, Z, Q, X] })),
            (en[123] = j),
            (en[124] = $),
            (en[125] = Z),
            (en[126] = Q),
            (en[127] = X),
            (en[128] = J))
          : (J = en[128]),
        en[129] !== I
          ? ((ee = (0, a.jsx)(o.Suspense, { fallback: null, children: I })), (en[129] = I), (en[130] = ee))
          : (ee = en[130]),
        en[131] !== J || en[132] !== ee
          ? ((et = (0, a.jsxs)(a.Fragment, { children: [J, ee] })), (en[131] = J), (en[132] = ee), (en[133] = et))
          : (et = en[133]),
        et
      )
    }
    function e1(e) {
      let t,
        n,
        s,
        r,
        d,
        u,
        p,
        m,
        h,
        f = (0, i.c)(24),
        { account: y, onCancelSubscriptionClick: b } = e,
        x = (0, l.gh)(g.u),
        v = (0, _.AS)(),
        [A, T] = (0, o.useState)(!1)
      f[0] !== y ? ((t = (0, ei.Ah)(y)), (f[0] = y), (f[1] = t)) : (t = f[1])
      let N = t
      if (!(0, eV.n)(y)) return null
      f[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, a.jsx)(c.A, {
            id: "settings.consumerBilling.cancelPlanTitle",
            defaultMessage: "Cancel plan",
            description:
              "Labels the final section of personal Billing settings and its button that starts cancellation review or opens instructions for the subscription's store.",
          })),
          (f[2] = n))
        : (n = f[2])
      let j = n
      return (
        f[3] !== y.entitlement.is_active_subscription_gratis
          ? ((s = y.entitlement.is_active_subscription_gratis
              ? (0, a.jsx)(c.A, {
                  id: "settings.consumerBilling.cancelGratisPlanDescription",
                  defaultMessage: "If you cancel, access to your plan features will end immediately",
                  description:
                    "Description beneath Cancel plan in personal Billing settings for a complimentary subscription. Warns the subscriber that confirming cancellation ends access immediately, rather than at the end of a billing period.",
                })
              : (0, a.jsx)(c.A, {
                  id: "settings.consumerBilling.cancelPlanDescription",
                  defaultMessage:
                    "If you cancel, you'll keep full access to your plan features until the end of your billing period",
                  description:
                    "Description beneath Cancel plan in personal Billing settings. The cancellation workflow separately presents any applicable immediate-cancellation or promotional terms.",
                })),
            (f[3] = y.entitlement.is_active_subscription_gratis),
            (f[4] = s))
          : (s = f[4]),
        f[5] !== N || f[6] !== b || f[7] !== x
          ? ((r = () => {
              ;(O(x, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CANCEL_SUBSCRIPTION_CLICKED"), null != N ? T(!0) : b())
            }),
            (f[5] = N),
            (f[6] = b),
            (f[7] = x),
            (f[8] = r))
          : (r = f[8]),
        f[9] !== v
          ? ((d =
              "explicit" === (0, _.hW)(v, "1779238992").get("cancel_plan_cta_copy_variant", "control")
                ? j
                : (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.cancelPlanButton",
                    defaultMessage: "Cancel",
                    description:
                      "Starts the current plan's cancellation workflow from Billing settings; it does not cancel without confirmation.",
                  })),
            (f[9] = v),
            (f[10] = d))
          : (d = f[10]),
        f[11] !== r || f[12] !== d
          ? ((u = (0, a.jsx)(w.$, { color: "danger", size: "toolbar", type: "button", onClick: r, children: d })),
            (f[11] = r),
            (f[12] = d),
            (f[13] = u))
          : (u = f[13]),
        f[14] !== s || f[15] !== u
          ? ((p = (0, a.jsx)(C.t, { children: (0, a.jsx)(S.ic, { label: j, description: s, control: u }) })),
            (f[14] = s),
            (f[15] = u),
            (f[16] = p))
          : (p = f[16]),
        f[17] !== y || f[18] !== A || f[19] !== N
          ? ((m =
              A && null != N
                ? (0, a.jsx)(o.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(eZ, { account: y, managementSource: N, onClose: () => T(!1) }),
                  })
                : null),
            (f[17] = y),
            (f[18] = A),
            (f[19] = N),
            (f[20] = m))
          : (m = f[20]),
        f[21] !== p || f[22] !== m
          ? ((h = (0, a.jsxs)(a.Fragment, { children: [p, m] })), (f[21] = p), (f[22] = m), (f[23] = h))
          : (h = f[23]),
        h
      )
    }
    function e2(e) {
      let t,
        n,
        s,
        r,
        l = (0, i.c)(13),
        { state: o, offer: d, onOpen: u } = e,
        p = (0, T.A)(),
        m = d ?? "current"
      return (
        l[0] !== p || l[1] !== o.annualSavingsAmount || l[2] !== o.billingCurrency
          ? ((t = p.formatNumber(Math.round(o.annualSavingsAmount), {
              style: "currency",
              currency: o.billingCurrency,
              currencyDisplay: "narrowSymbol",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })),
            (l[0] = p),
            (l[1] = o.annualSavingsAmount),
            (l[2] = o.billingCurrency),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== m || l[5] !== t
          ? ((n = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.annualSavings",
              defaultMessage:
                "{offer, select, annual_offer {Save {amount}/year with annual billing} other {Annual billing saves you {amount}/year}}",
              description:
                "Annual Plus savings in Billing settings. offer distinguishes an invitation to switch from the savings for existing annual subscribers. amount is the verified localized whole-currency annual savings compared with twelve monthly payments.",
              values: { offer: m, amount: t },
            })),
            (l[4] = m),
            (l[5] = t),
            (l[6] = n))
          : (n = l[6]),
        l[7] !== d || l[8] !== u
          ? ((s =
              null == d
                ? null
                : (0, a.jsx)(w.$, {
                    color: "secondary",
                    size: "toolbar",
                    type: "button",
                    onClick: u,
                    children: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.annualOfferAction",
                      defaultMessage: "{offer, select, keep_saving {Keep saving} other {View offer}}",
                      description:
                        "Opens annual Plus billing confirmation. Keep saving removes a pending switch to Monthly; View offer reviews a new switch to Annual.",
                      values: { offer: d },
                    }),
                  })),
            (l[7] = d),
            (l[8] = u),
            (l[9] = s))
          : (s = l[9]),
        l[10] !== n || l[11] !== s
          ? ((r = (0, a.jsx)(S.ic, { label: n, control: s })), (l[10] = n), (l[11] = s), (l[12] = r))
          : (r = l[12]),
        r
      )
    }
    var e3 = n("slpy"),
      e4 = n("on57"),
      e5 = n("ZtSy")
    function e6(e) {
      let t,
        n,
        s,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        y,
        b,
        x,
        v,
        A = (0, i.c)(29),
        { accountId: N, transactions: j, onViewInvoice: I } = e,
        E = (0, l.gh)(g.u),
        S = (0, T.A)()
      A[0] !== N || A[1] !== j
        ? ((n = eh(N, (t = j.some(e7)))), (A[0] = N), (A[1] = j), (A[2] = t), (A[3] = n))
        : ((t = A[2]), (n = A[3]))
      let C = n,
        { data: P } = (0, r.I)(C),
        [B, M] = (0, o.useState)(null),
        k = (0, o.useRef)(null),
        L = (0, o.useRef)(!1),
        G = t && P?.eligible === !0
      ;(A[4] !== G || A[5] !== E
        ? ((s = () => {
            G &&
              !L.current &&
              ((L.current = !0), O(E, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SHOWN"))
          }),
          (d = [G, E]),
          (A[4] = G),
          (A[5] = E),
          (A[6] = s),
          (A[7] = d))
        : ((s = A[6]), (d = A[7])),
        (0, o.useEffect)(s, d),
        A[8] !== S ? ((u = S.formatMessage(tt.transactionHistoryTitle)), (A[8] = S), (A[9] = u)) : (u = A[9]),
        A[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...tt.transactionTypeHeader }) })),
            (A[10] = p))
          : (p = A[10]),
        A[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...tt.transactionDateHeader }) })),
            (A[11] = m))
          : (m = A[11]),
        A[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...tt.transactionStatusHeader }) })),
            (A[12] = h))
          : (h = A[12]),
        A[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...tt.transactionAmountHeader }) })),
            (A[13] = f))
          : (f = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)("thead", {
              className: "sr-only",
              children: (0, a.jsxs)("tr", {
                children: [
                  p,
                  m,
                  h,
                  f,
                  (0, a.jsx)("th", {
                    scope: "col",
                    children: (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.transactionActions",
                      defaultMessage: "Actions",
                      description:
                        "Accessible column heading for invoice links in the personal account's transaction-history table",
                    }),
                  }),
                ],
              }),
            })),
            (A[14] = _))
          : (_ = A[14]))
      let D = j.map((e) =>
        (0, a.jsx)(
          e8,
          {
            transaction: e,
            expenseAction:
              G && "invoice" === e.type && e.invoice_expensing_eligible
                ? (0, a.jsx)(w.$, {
                    className: "relative z-10",
                    color: "secondary",
                    size: "toolbar",
                    onClick: (t) => {
                      ;((k.current = t.currentTarget),
                        O(E, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                        M(e.id))
                    },
                    children: (0, a.jsx)(c.A, {
                      id: "settings.invoiceExpensing.button.sendForExpensing",
                      defaultMessage: "Expense this",
                      description:
                        "Compact action beside a personal subscription invoice in Billing history. Opens a dialog to email its PDF to a work address so the user can expense the subscription through their employer.",
                    }),
                  })
                : null,
            onViewInvoice: I,
          },
          e.type + e.id,
        ),
      )
      return (
        A[15] !== D ? ((y = (0, a.jsx)("tbody", { children: D })), (A[15] = D), (A[16] = y)) : (y = A[16]),
        A[17] !== _ || A[18] !== y || A[19] !== u
          ? ((b = (0, a.jsxs)("table", {
              "aria-label": u,
              className: "w-full border-collapse text-start text-sm",
              children: [_, y],
            })),
            (A[17] = _),
            (A[18] = y),
            (A[19] = u),
            (A[20] = b))
          : (b = A[20]),
        A[21] !== N || A[22] !== B || A[23] !== P || A[24] !== k
          ? ((x =
              null != B && P?.eligible
                ? (0, a.jsx)(eb, {
                    accountId: N,
                    invoiceId: B,
                    preferences: P,
                    onClose: () => M(null),
                    onCloseAutoFocus: (e) => {
                      k.current?.isConnected && (e.preventDefault(), k.current.focus())
                    },
                  })
                : null),
            (A[21] = N),
            (A[22] = B),
            (A[23] = P),
            (A[24] = k),
            (A[25] = x))
          : (x = A[25]),
        A[26] !== b || A[27] !== x
          ? ((v = (0, a.jsxs)("div", { className: "overflow-x-auto", children: [b, x] })),
            (A[26] = b),
            (A[27] = x),
            (A[28] = v))
          : (v = A[28]),
        v
      )
    }
    function e7(e) {
      return "invoice" === e.type && e.invoice_expensing_eligible
    }
    function e8(e) {
      let t,
        n,
        s,
        r,
        l,
        o,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _,
        y,
        b,
        x,
        v = (0, i.c)(50),
        { transaction: A, expenseAction: N, onViewInvoice: j } = e,
        I = (0, T.A)()
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            added: tt.transactionStatusCredit,
            removed: tt.transactionStatusDebit,
            paid: tt.invoiceStatusPaid,
            due: tt.invoiceStatusDue,
            void: tt.invoiceStatusVoid,
            uncollectible: tt.invoiceStatusUncollectible,
            draft: tt.invoiceStatusDraft,
          }),
          (v[0] = t))
        : (t = v[0])
      let E = t,
        S = "default"
      "added" === A.status
        ? (S = "success")
        : "due" === A.status
          ? (S = "warning")
          : "uncollectible" === A.status && (S = "danger")
      let C = "invoice" === A.type && A.product?.type === "subscription" ? A.product.seat_quantities : null,
        P = "invoice" === A.type ? A.invoice_url : null,
        B =
          P &&
          "relative isolate transform-[translate(0)] hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover"
      ;(v[1] !== B
        ? ((n = (0, e4.A)("border-b border-default last:border-b-0", B)), (v[1] = B), (v[2] = n))
        : (n = v[2]),
        v[3] !== A
          ? ((s = (0, a.jsx)("span", {
              className: "min-w-0 break-words",
              children: (0, a.jsx)(te, { transaction: A }),
            })),
            (v[3] = A),
            (v[4] = s))
          : (s = v[4]),
        v[5] !== I || v[6] !== A.type
          ? ((r =
              "wallet" === A.type
                ? (0, a.jsx)(e3.m, {
                    content: (0, a.jsx)(c.A, { ...tt.walletAdjustmentTooltip }),
                    children: (0, a.jsx)(w.$, {
                      "aria-label": I.formatMessage(tt.walletAdjustmentTooltipTrigger),
                      color: "ghost",
                      size: "iconCircleSm",
                      children: (0, a.jsx)(K.zOs, {}),
                    }),
                  })
                : null),
            (v[5] = I),
            (v[6] = A.type),
            (v[7] = r))
          : (r = v[7]),
        v[8] !== s || v[9] !== r
          ? ((l = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-1", children: [s, r] })),
            (v[8] = s),
            (v[9] = r),
            (v[10] = l))
          : (l = v[10]),
        v[11] !== C
          ? ((o =
              null != C
                ? (0, a.jsx)("span", {
                    className: "block truncate text-xs text-secondary",
                    children: (0, a.jsx)(eC.dT, { type: "unit", style: "short", value: C.map(e9) }),
                  })
                : null),
            (v[11] = C),
            (v[12] = o))
          : (o = v[12]),
        v[13] !== l || v[14] !== o
          ? ((d = (0, a.jsxs)("td", { className: "w-1/3 max-w-0 px-3 py-2 text-secondary", children: [l, o] })),
            (v[13] = l),
            (v[14] = o),
            (v[15] = d))
          : (d = v[15]),
        v[16] !== A.created_at
          ? ((u = (0, a.jsx)("td", {
              className: "px-3 py-2 whitespace-nowrap text-secondary",
              children: (0, a.jsx)(eC.XU, { value: A.created_at, month: "numeric", day: "numeric", year: "numeric" }),
            })),
            (v[16] = A.created_at),
            (v[17] = u))
          : (u = v[17]))
      let M = E[A.status]
      ;(v[18] !== M ? ((p = (0, a.jsx)(c.A, { ...M })), (v[18] = M), (v[19] = p)) : (p = v[19]),
        v[20] !== S || v[21] !== p
          ? ((m = (0, a.jsx)("td", {
              className: "px-3 py-2 text-center",
              children: (0, a.jsx)(eP.E, { variant: S, children: p }),
            })),
            (v[20] = S),
            (v[21] = p),
            (v[22] = m))
          : (m = v[22]))
      let k =
          "added" === A.status
            ? "px-3 py-2 text-end whitespace-nowrap text-chart-green tabular-nums select-text"
            : "px-3 py-2 text-end whitespace-nowrap text-secondary tabular-nums select-text",
        L = P && "relative z-10"
      return (
        v[23] !== L ? ((g = (0, e4.A)(L)), (v[23] = L), (v[24] = g)) : (g = v[24]),
        v[25] !== I || v[26] !== A.amount || v[27] !== A.currency
          ? ((h = (0, ew.J)(I, A.amount, A.currency)),
            (v[25] = I),
            (v[26] = A.amount),
            (v[27] = A.currency),
            (v[28] = h))
          : (h = v[28]),
        v[29] !== g || v[30] !== h
          ? ((f = (0, a.jsx)("span", { className: g, children: h })), (v[29] = g), (v[30] = h), (v[31] = f))
          : (f = v[31]),
        v[32] !== k || v[33] !== f
          ? ((_ = (0, a.jsx)("td", { className: k, children: f })), (v[32] = k), (v[33] = f), (v[34] = _))
          : (_ = v[34]),
        v[35] !== I || v[36] !== P || v[37] !== j || v[38] !== A.created_at
          ? ((y = P
              ? (0, a.jsx)(e5.G, {
                  appearance: "secondary",
                  "aria-label": I.formatMessage(tt.openInvoiceLinkAriaLabel, { createdDate: new Date(A.created_at) }),
                  className:
                    "after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-ring",
                  href: P,
                  initiator: "open_in_browser_bridge",
                  isBrowserEnabled: !1,
                  onClick: j,
                  children: (0, a.jsx)(K.uM3, {}),
                })
              : null),
            (v[35] = I),
            (v[36] = P),
            (v[37] = j),
            (v[38] = A.created_at),
            (v[39] = y))
          : (y = v[39]),
        v[40] !== N || v[41] !== y
          ? ((b = (0, a.jsx)("td", {
              className: "px-3 py-2 text-end",
              children: (0, a.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [N, y] }),
            })),
            (v[40] = N),
            (v[41] = y),
            (v[42] = b))
          : (b = v[42]),
        v[43] !== m || v[44] !== _ || v[45] !== b || v[46] !== n || v[47] !== d || v[48] !== u
          ? ((x = (0, a.jsxs)("tr", { className: n, children: [d, u, m, _, b] })),
            (v[43] = m),
            (v[44] = _),
            (v[45] = b),
            (v[46] = n),
            (v[47] = d),
            (v[48] = u),
            (v[49] = x))
          : (x = v[49]),
        x
      )
    }
    function e9(e) {
      return (0, a.jsx)(
        c.A,
        {
          ...("default" === e.seat_type ? tt.standardSeatQuantityDelta : tt.premiumSeatQuantityDelta),
          values: { quantityDelta: (0, a.jsx)(eC.Gr, { value: e.quantity_delta, signDisplay: "always" }) },
        },
        e.seat_type,
      )
    }
    function te(e) {
      let t,
        n = (0, i.c)(13),
        { transaction: s } = e
      if ("gift_card" === s.type) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.A, { ...tt.giftCardTransactionType })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("wallet" === s.type) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.A, { ...tt.walletAdjustmentTransactionType })), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      switch (s.product?.type) {
        case "credits": {
          let e,
            t = s.product.is_gifted ? tt.giftedCreditsTransactionType : tt.creditsTransactionType
          return (n[2] !== t ? ((e = (0, a.jsx)(c.A, { ...t })), (n[2] = t), (n[3] = e)) : (e = n[3]), e)
        }
        case "credits_top_up": {
          let e
          return (
            n[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, { ...tt.creditsAutoReloadTransactionType })), (n[4] = e))
              : (e = n[4]),
            e
          )
        }
        case "subscription":
          if (s.product.is_seat_purchase) {
            let e
            return (
              n[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.businessSeatsTransactionType })), (n[5] = e))
                : (e = n[5]),
              e
            )
          }
          if (
            ["chatgptteamplan", "self_serve_business_prolite", "chatgptbusiness_usage_based"].includes(s.product.plan)
          ) {
            let e
            return (
              n[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.businessPlanTransactionType })), (n[6] = e))
                : (e = n[6]),
              e
            )
          }
          if (
            ["chatgptgoplan", "chatgptgo_partner_managed", "chatgptgofreeplan_with_expiration"].includes(s.product.plan)
          ) {
            let e
            return (
              n[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.chatGptGoTransactionType })), (n[7] = e))
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
            ].includes(s.product.plan)
          ) {
            let e
            return (
              n[8] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.chatGptPlusTransactionType })), (n[8] = e))
                : (e = n[8]),
              e
            )
          }
          if ("chatgptpromax" === s.product.plan || "chatgptpromaxfreeplan_with_expiration" === s.product.plan) {
            let e
            return (
              n[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.chatGptProTierTransactionType, values: { plan: "promax" } })),
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
            ].includes(s.product.plan)
          ) {
            let e
            return (
              n[10] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.chatGptProTierTransactionType, values: { plan: "pro" } })), (n[10] = e))
                : (e = n[10]),
              e
            )
          }
          if (
            ["chatgptprolite", "chatgptprolite_partner_managed", "chatgptprolitefreeplan_with_expiration"].includes(
              s.product.plan,
            )
          ) {
            let e
            return (
              n[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...tt.chatGptProTierTransactionType, values: { plan: "prolite" } })),
                  (n[11] = e))
                : (e = n[11]),
              e
            )
          }
      }
      return (
        n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.A, { ...tt.invoiceTransactionType })), (n[12] = t))
          : (t = n[12]),
        t
      )
    }
    let tt = (0, eC.YK)({
      transactionHistoryTitle: {
        id: "settingsModal.transactionHistory.title",
        defaultMessage: "Transaction history",
        description:
          "Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage",
      },
      transactionTypeHeader: {
        id: "settingsModal.transactionHistory.typeHeader",
        defaultMessage: "Type",
        description:
          "Short optional column heading for the product, gift-card redemption, or Wallet adjustment type in a personal ChatGPT account's transaction-history table in Settings > Billing.",
      },
      transactionDateHeader: {
        id: "settingsModal.transactionHistory.dateHeader",
        defaultMessage: "Date",
        description:
          "Short optional column heading for the localized transaction creation date in a personal ChatGPT account's transaction-history table in Settings > Billing.",
      },
      transactionStatusHeader: {
        id: "settingsModal.transactionHistory.statusHeader",
        defaultMessage: "Status",
        description:
          "Short optional column heading for invoice-payment, gift-card-redemption, and Wallet-adjustment status badges in a personal ChatGPT account's transaction-history table in Settings > Billing.",
      },
      transactionAmountHeader: {
        id: "settingsModal.transactionHistory.amountHeader",
        defaultMessage: "Amount",
        description:
          "Short optional column heading for a localized currency amount in a personal ChatGPT account's transaction-history table in Settings > Billing.",
      },
      giftCardTransactionType: {
        id: "settingsModal.transactionHistory.product.giftCard",
        defaultMessage: "Gift card",
        description:
          "Short product-type label for a successfully redeemed gift card in a personal ChatGPT account's transaction-history table in Settings > Billing.",
      },
      walletAdjustmentTransactionType: {
        id: "settingsModal.transactionHistory.product.walletAdjustment",
        defaultMessage: "Adjustment",
        description:
          "Short transaction-type label for funds added to or removed from a personal ChatGPT account's Wallet. Appears in the transaction-history table in Settings > Billing; Wallet adjustments have no linked invoice.",
      },
      walletAdjustmentTooltip: {
        id: "settingsModal.transactionHistory.product.walletAdjustment.tooltip",
        defaultMessage: "A change to your account balance, such as a refund, credit, or billing correction",
        description:
          "Explanatory tooltip shown when a personal ChatGPT account holder or Business workspace owner hovers over or focuses the information button beside an Adjustment row in Settings > Billing transaction history. It explains that the Wallet balance changed because of a refund, credit, billing correction, or similar adjustment. Use one concise plain-text sentence without placeholders.",
      },
      walletAdjustmentTooltipTrigger: {
        id: "settingsModal.transactionHistory.product.walletAdjustment.tooltipTrigger",
        defaultMessage: "More information about this adjustment",
        description:
          "Accessible label for the keyboard-focusable information button beside an Adjustment row in personal or Business workspace Settings > Billing transaction history. Focusing or hovering over the button reveals an explanation of Wallet balance adjustments. Use a concise descriptive phrase without placeholders.",
      },
      creditsTransactionType: {
        id: "settingsModal.transactionHistory.product.credits",
        defaultMessage: "Credits",
        description:
          "Short product-type label for a one-time, manually initiated ChatGPT credit purchase in a personal account's transaction-history table in Settings > Billing. It must remain distinguishable from an automatic credits top-up.",
      },
      giftedCreditsTransactionType: {
        id: "settingsModal.transactionHistory.product.giftedCredits",
        defaultMessage: "Gifted credits",
        description:
          "Short product-type label in a personal account's or Business workspace's Settings > Billing transaction-history table for an invoice purchasing ChatGPT usage credits as a gift for another person. It must remain distinguishable from ordinary credit purchases, automatic credit top-ups, and gift-card redemptions. Use a concise plain-text label with no placeholders.",
      },
      creditsAutoReloadTransactionType: {
        id: "settingsModal.transactionHistory.product.creditsAutoReload",
        defaultMessage: "Credits auto-reload",
        description:
          "Short product-type label in a personal account's or Business workspace's Settings > Billing transaction-history table for a completed automatic purchase that replenished ChatGPT usage credits. It must remain distinguishable from manually purchased credits, credits purchased as a gift for another person, and gift-card redemptions. Use a concise plain-text label with no placeholders.",
      },
      businessPlanTransactionType: {
        id: "settingsModal.transactionHistory.product.businessPlan",
        defaultMessage: "Business plan",
        description:
          "Transaction name for a ChatGPT Business workspace subscription invoice in the workspace Billing transaction-history table. This label excludes invoices for additional workspace seats.",
      },
      businessSeatsTransactionType: {
        id: "settingsModal.transactionHistory.product.additionalBusinessSeats",
        defaultMessage: "Seat change",
        description:
          "Short transaction name in a ChatGPT Business workspace's Billing transaction-history table for an invoice that changes paid-seat quantities. The row can show positive or negative Standard and Premium seat deltas, but is distinct from the recurring Business plan invoice. No placeholders.",
      },
      chatGptGoTransactionType: {
        id: "settingsModal.transactionHistory.product.chatGptGo",
        defaultMessage: "ChatGPT Go",
        description:
          "Product-type label for an invoice issued for the ChatGPT Go subscription in a personal account's transaction-history table in Settings > Billing. ChatGPT Go is the branded subscription name.",
      },
      chatGptPlusTransactionType: {
        id: "settingsModal.transactionHistory.product.chatGptPlus",
        defaultMessage: "ChatGPT Plus",
        description:
          "Product-type label for an invoice issued for the ChatGPT Plus subscription in a personal account's transaction-history table in Settings > Billing. ChatGPT Plus is the branded subscription name.",
      },
      chatGptProTierTransactionType: {
        id: "settingsModal.transactionHistory.product.chatGptProNumberedTier",
        defaultMessage: "ChatGPT {plan, select, prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
        description:
          "Product label for a Pro subscription invoice in Settings > Billing. plan is the canonical tier from the invoiced product, not the current account or amount paid. The Pro tier names are Pro 100, Pro 200, and Pro 500. The numbers in Pro plan names are fixed SKU names, not localized prices.",
      },
      invoiceTransactionType: {
        id: "settingsModal.transactionHistory.product.invoice",
        defaultMessage: "Invoice",
        description:
          "Short fallback product-type label in a personal ChatGPT account's transaction-history table in Settings > Billing when the backend cannot authoritatively identify the invoiced product.",
      },
      transactionStatusCredit: {
        id: "settingsModal.transactionHistory.status.credit",
        defaultMessage: "Credit",
        description:
          "Short green status badge for a funded gift-card redemption or Wallet adjustment that increases the available balance of a personal ChatGPT account or Business workspace. It appears in the Settings > Billing transaction-history table and must remain concise enough for a single-line badge.",
      },
      transactionStatusDebit: {
        id: "settingsModal.transactionHistory.status.debit",
        defaultMessage: "Debit",
        description:
          "Short status badge for a Wallet adjustment that decreases the available balance of a personal ChatGPT account or Business workspace. It appears in the Settings > Billing transaction-history table and must remain concise enough for a single-line badge.",
      },
      invoiceStatusPaid: {
        id: "settingsModal.invoiceStatusPaid",
        defaultMessage: "Paid",
        description: "Invoice status label shown in the Billing and payments invoices list when the invoice is paid.",
      },
      invoiceStatusDue: {
        id: "settingsModal.invoiceStatusDue",
        defaultMessage: "Due",
        description: "Invoice status label shown in the Billing and payments invoices list when the invoice is due.",
      },
      invoiceStatusVoid: {
        id: "settingsModal.invoiceStatusVoid",
        defaultMessage: "Void",
        description: "Invoice status label shown in the Billing and payments invoices list when the invoice is void.",
      },
      invoiceStatusUncollectible: {
        id: "settingsModal.invoiceStatusUncollectible",
        defaultMessage: "Failed",
        description: "Invoice status label shown in the Billing and payments invoices list when the invoice is failed.",
      },
      invoiceStatusDraft: {
        id: "settingsModal.invoiceStatusDraft",
        defaultMessage: "Draft",
        description: "Invoice status label shown in the Billing and payments invoices list when the invoice is draft.",
      },
      openInvoiceLinkAriaLabel: {
        id: "settingsModal.openInvoiceLinkAriaLabel",
        defaultMessage: "Open invoice from {createdDate, date, long}",
        description:
          "Aria label for the external-link icon button that opens a hosted invoice URL in a new tab. Placeholder {createdDate} is the invoice creation date in localized long-date format.",
      },
      standardSeatQuantityDelta: {
        id: "settingsModal.transactionHistory.product.standardSeatQuantityDelta",
        defaultMessage: "Standard {quantityDelta}",
        description:
          "Compact signed change in Standard seats below a Seat change invoice in Billing history; quantityDelta includes its plus or minus sign",
      },
      premiumSeatQuantityDelta: {
        id: "settingsModal.transactionHistory.product.premiumSeatQuantityDelta",
        defaultMessage: "Premium {quantityDelta}",
        description:
          "Compact signed change in Premium seats below a Seat change invoice in Billing history; quantityDelta includes its plus or minus sign",
      },
    })
    function tn(e) {
      let t,
        n,
        s,
        o,
        d,
        u,
        p,
        m = (0, i.c)(20),
        { accountId: h, onViewAll: f } = e,
        _ = (0, l.gh)(g.u)
      m[0] !== h ? ((t = tr(h, 4, null)), (m[0] = h), (m[1] = t)) : (t = m[1])
      let { data: y, isPending: b, isError: x } = (0, r.I)(t)
      return b || x || y?.transactions.length !== 0
        ? (m[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(c.A, {
                id: "settingsModal.transactionHistory.title",
                defaultMessage: "Transaction history",
                description:
                  "Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage",
              })),
              (m[2] = n))
            : (n = m[2]),
          m[3] !== y?.next_cursor || m[4] !== f || m[5] !== _
            ? ((s =
                y?.next_cursor != null
                  ? (0, a.jsx)(w.$, {
                      color: "secondary",
                      size: "toolbar",
                      onClick: () => {
                        ;(O(_, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_ALL_INVOICES_CLICKED"), f())
                      },
                      children: (0, a.jsx)(c.A, {
                        id: "settingsModal.transactionHistory.viewAll",
                        defaultMessage: "View all",
                        description:
                          "Opens the complete, paginated transaction-history subpage from the recent transactions in Billing settings",
                      }),
                    })
                  : null),
              (m[3] = y?.next_cursor),
              (m[4] = f),
              (m[5] = _),
              (m[6] = s))
            : (s = m[6]),
          m[7] !== s ? ((o = (0, a.jsx)(E.X.Header, { title: n, actions: s })), (m[7] = s), (m[8] = o)) : (o = m[8]),
          m[9] !== _
            ? ((d = () => O(_, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_INVOICE_CLICKED")),
              (m[9] = _),
              (m[10] = d))
            : (d = m[10]),
          m[11] !== h || m[12] !== y || m[13] !== x || m[14] !== b || m[15] !== d
            ? ((u = (0, a.jsx)(E.X.Content, {
                children: (0, a.jsx)(ts, { accountId: h, data: y, isPending: b, isError: x, onViewInvoice: d }),
              })),
              (m[11] = h),
              (m[12] = y),
              (m[13] = x),
              (m[14] = b),
              (m[15] = d),
              (m[16] = u))
            : (u = m[16]),
          m[17] !== o || m[18] !== u
            ? ((p = (0, a.jsxs)(E.X, { children: [o, u] })), (m[17] = o), (m[18] = u), (m[19] = p))
            : (p = m[19]),
          p)
        : null
    }
    function ta(e) {
      let t,
        n = (0, i.c)(3),
        { accountId: s, onBack: r } = e
      return (
        n[0] !== s || n[1] !== r
          ? ((t = (0, a.jsx)(ti, { accountId: s, onBack: r }, s)), (n[0] = s), (n[1] = r), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function ti(e) {
      let t,
        n,
        s,
        l,
        d,
        u,
        p,
        m,
        g = (0, i.c)(25),
        { accountId: h, onBack: f } = e
      g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = [null]), (g[0] = t)) : (t = g[0])
      let [_, y] = (0, o.useState)(t),
        b = _[_.length - 1] ?? null
      g[1] !== h || g[2] !== b ? ((n = tr(h, 10, b)), (g[1] = h), (g[2] = b), (g[3] = n)) : (n = g[3])
      let { data: x, isPending: v, isError: A, isFetching: T } = (0, r.I)(n),
        N = _.length > 1,
        j = x?.next_cursor
      return (
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(K.z_d, {})),
            (l = (0, a.jsx)(c.A, {
              id: "settingsModal.back",
              defaultMessage: "Back",
              description: "Returns from transaction history to the personal account's Billing settings",
            })),
            (g[4] = s),
            (g[5] = l))
          : ((s = g[4]), (l = g[5])),
        g[6] !== f
          ? ((d = (0, a.jsx)("div", {
              children: (0, a.jsxs)(w.$, { color: "ghost", size: "toolbar", onClick: f, children: [s, l] }),
            })),
            (g[6] = f),
            (g[7] = d))
          : (d = g[7]),
        g[8] !== h || g[9] !== x || g[10] !== A || g[11] !== v
          ? ((u = (0, a.jsx)(ts, { accountId: h, data: x, isPending: v, isError: A })),
            (g[8] = h),
            (g[9] = x),
            (g[10] = A),
            (g[11] = v),
            (g[12] = u))
          : (u = g[12]),
        g[13] !== _ || g[14] !== x || g[15] !== N || g[16] !== A || g[17] !== T || g[18] !== v || g[19] !== j
          ? ((p =
              !v && !A && null != x && x.transactions.length > 0 && (N || null != j)
                ? (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsxs)(w.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: !N || T,
                        onClick: () => y(_.slice(0, -1)),
                        children: [
                          (0, a.jsx)(K.z_d, {}),
                          (0, a.jsx)(c.A, {
                            id: "settingsModal.transactionHistory.pagination.previous",
                            defaultMessage: "Previous",
                            description:
                              "Loads the previous page of the personal account's complete transaction history",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(w.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: null == j || T,
                        onClick: () => {
                          null != j && y([..._, j])
                        },
                        children: [
                          (0, a.jsx)(c.A, {
                            id: "settingsModal.transactionHistory.pagination.next",
                            defaultMessage: "Next",
                            description: "Loads the next page of the personal account's complete transaction history",
                          }),
                          (0, a.jsx)(K.uM3, {}),
                        ],
                      }),
                    ],
                  })
                : null),
            (g[13] = _),
            (g[14] = x),
            (g[15] = N),
            (g[16] = A),
            (g[17] = T),
            (g[18] = v),
            (g[19] = j),
            (g[20] = p))
          : (p = g[20]),
        g[21] !== d || g[22] !== u || g[23] !== p
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [d, u, p] })), (g[21] = d), (g[22] = u), (g[23] = p), (g[24] = m))
          : (m = g[24]),
        m
      )
    }
    function ts(e) {
      let t,
        n = (0, i.c)(6),
        { accountId: s, data: r, isPending: l, isError: o, onViewInvoice: d } = e
      if (l) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(R, {
                children: (0, a.jsx)(c.A, {
                  id: "settingsModal.transactionHistory.loading",
                  defaultMessage: "Loading transactions",
                  description: "Loading status while the personal account's billing transactions are fetched",
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
                  description:
                    "Error when billing transactions could not be fetched; the account holder can return and reopen history or refresh to try again",
                }),
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      return (
        n[2] !== s || n[3] !== r || n[4] !== d
          ? ((t =
              null != r && r.transactions.length > 0
                ? (0, a.jsx)(C.t, {
                    children: (0, a.jsx)(e6, { accountId: s, transactions: r.transactions, onViewInvoice: d }),
                  })
                : (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(c.A, {
                      id: "settingsModal.transactionHistory.empty",
                      defaultMessage: "No transactions available",
                      description: "Empty state on the personal account's complete transaction-history subpage",
                    }),
                  })),
            (n[2] = s),
            (n[3] = r),
            (n[4] = d),
            (n[5] = t))
          : (t = n[5]),
        t
      )
    }
    function tr(e, t, n) {
      return (0, em.j)({
        queryKey: ["consumer-billing", e, "transactions", t, n],
        queryFn: ({ signal: a }) =>
          M.CodexRequest.safeGet("/payments/transaction-history", {
            parameters: { query: { account_id: e, limit: t, cursor: n ?? void 0 } },
            signal: a,
          }),
        staleTime: 0,
        gcTime: 0,
        retry: !1,
        refetchOnMount: "always",
        refetchOnWindowFocus: "always",
        refetchOnReconnect: "always",
      })
    }
    var tl = n("Ssp7"),
      to = n("dT9t")
    function tc(e) {
      let t,
        n,
        s,
        d,
        u,
        m,
        h,
        f,
        y,
        b,
        x,
        v,
        A,
        N,
        j,
        I,
        P = (0, i.c)(65),
        { account: B, accountId: M } = e,
        k = (0, l.gh)(g.u)
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (P[0] = t)) : (t = P[0])
      let D = (0, o.useRef)(t),
        R = (0, T.A)(),
        H = (0, eA.Zp)(),
        { data: U, isPending: z, isFetching: W, isError: F, refetch: q } = (0, l._U)(p.kL, M),
        { client: K } = (0, _.cn)()
      P[1] !== K ? ((n = K.getContext().user?.country?.trim().toUpperCase()), (P[1] = K), (P[2] = n)) : (n = P[2])
      let Y = n
      P[3] !== B || P[4] !== U || P[5] !== K
        ? ((s = (0, tl.k)(B, U, (0, tl.x)(K))), (P[3] = B), (P[4] = U), (P[5] = K), (P[6] = s))
        : (s = P[6])
      let { canRedeem: V, showWallet: $, usdBalance: Z } = s,
        Q = 0 !== Z ? Z : U?.balance,
        X = !W && !F && U?.balance === 0 && null == U.currency && V
      ;(P[7] !== M || P[8] !== Y
        ? ((d = ["consumer-billing", M, "wallet-currency", Y]), (P[7] = M), (P[8] = Y), (P[9] = d))
        : (d = P[9]),
        P[10] !== K || P[11] !== Y
          ? ((u = (e) => {
              let { signal: t } = e
              return (0, to.fetchBillingPricingConfig)({
                country: Y ?? "US",
                signal: t,
                isPricingEnabled: (e) => K.getLayer("3768341700").get(e, !1),
              })
            }),
            (P[10] = K),
            (P[11] = Y),
            (P[12] = u))
          : (u = P[12]),
        P[13] !== X || P[14] !== d || P[15] !== u
          ? ((m = { queryKey: d, queryFn: u, enabled: X, staleTime: 0, retry: !1 }),
            (P[13] = X),
            (P[14] = d),
            (P[15] = u),
            (P[16] = m))
          : (m = P[16]))
      let { data: J, isLoading: ee, isError: et, refetch: en } = (0, r.I)(m),
        ea = 0 !== Z ? "usd" : (U?.currency ?? (X ? J?.currency_config.symbol_code : null)),
        ei = z || W || (X && ee)
      if (
        (P[17] !== ea || P[18] !== F || P[19] !== X || P[20] !== et
          ? (F
              ? (h = "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_BALANCE_FETCH_FAILED")
              : X && et
                ? (h = "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_PRICING_FAILED")
                : null == ea && (h = "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_UNAVAILABLE_REASON_MISSING_CURRENCY"),
            (P[17] = ea),
            (P[18] = F),
            (P[19] = X),
            (P[20] = et),
            (P[21] = h))
          : (h = P[21]),
        P[22] !== M || P[23] !== F || P[24] !== ei || P[25] !== h || P[26] !== k || P[27] !== $
          ? ((f = () => {
              ei ||
                (!F && !$) ||
                D.current.has(M) ||
                (k
                  .get(G.YV)
                  .logProductEvent(L.h3, {
                    result:
                      null == h
                        ? "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_READY"
                        : "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_UNAVAILABLE",
                    reason: h,
                  }),
                D.current.add(M))
            }),
            (P[22] = M),
            (P[23] = F),
            (P[24] = ei),
            (P[25] = h),
            (P[26] = k),
            (P[27] = $),
            (P[28] = f))
          : (f = P[28]),
        P[29] !== M || P[30] !== F || P[31] !== ei || P[32] !== h || P[33] !== k || P[34] !== $
          ? ((y = [M, F, ei, h, k, $]),
            (P[29] = M),
            (P[30] = F),
            (P[31] = ei),
            (P[32] = h),
            (P[33] = k),
            (P[34] = $),
            (P[35] = y))
          : (y = P[35]),
        (0, o.useEffect)(f, y),
        z || (!F && !$))
      )
        return null
      if (ei) {
        let e
        ;(P[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsxs)("div", {
              role: "status",
              className: "flex items-center gap-2 text-sm text-secondary",
              children: [
                (0, a.jsx)(eM.y, { className: "icon-xs shrink-0 text-secondary" }),
                (0, a.jsx)(c.A, {
                  id: "settingsModal.walletBalance.loading",
                  defaultMessage: "Loading balance…",
                  description:
                    "Loading status while the personal account's wallet balance or display currency is refreshed",
                }),
              ],
            })),
            (P[36] = e))
          : (e = P[36]),
          (b = e))
      } else if (null != h || null == ea || null == Q) {
        let e, t, n, i
        ;(P[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settingsModal.walletBalance.unavailable",
              defaultMessage: "Not available",
              description: "Replaces the wallet amount when the balance or display currency cannot be loaded",
            })),
            (P[37] = e))
          : (e = P[37]),
          P[38] !== X || P[39] !== q || P[40] !== en
            ? ((t = () => {
                ;(q(), X && en())
              }),
              (P[38] = X),
              (P[39] = q),
              (P[40] = en),
              (P[41] = t))
            : (t = P[41]),
          P[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.retry",
                defaultMessage: "Retry",
                description: "Button that retries a failed request in consumer Billing settings",
              })),
              (P[42] = n))
            : (n = P[42]),
          P[43] !== t
            ? ((i = (0, a.jsxs)("div", {
                role: "alert",
                className: "flex items-center gap-2 text-sm text-warning",
                children: [e, (0, a.jsx)(w.$, { color: "secondary", size: "toolbar", onClick: t, children: n })],
              })),
              (P[43] = t),
              (P[44] = i))
            : (i = P[44]),
          (b = i))
      } else {
        let e,
          t,
          n = U?.has_redeemed_gift_card === !0 ? -Q : Math.max(0, -Q)
        ;(P[45] !== ea || P[46] !== R || P[47] !== n
          ? ((e = (0, ew.J)(R, n, ea)), (P[45] = ea), (P[46] = R), (P[47] = n), (P[48] = e))
          : (e = P[48]),
          P[49] !== e
            ? ((t = (0, a.jsx)("p", { className: "text-sm text-default select-text", children: e })),
              (P[49] = e),
              (P[50] = t))
            : (t = P[50]),
          (b = t))
      }
      return (
        P[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(c.A, {
              id: "settingsModal.walletBalance.title.v2",
              defaultMessage: "Balance",
              description:
                "Short section heading in Settings > Billing for a consumer ChatGPT user. It labels the available monetary account balance, including redeemed gift card funds and billing adjustments. Do not call it a wallet: this is separate from Agent Wallet. Keep it concise beside the Redeem gift card button.",
            })),
            (P[51] = x))
          : (x = P[51]),
        P[52] !== V || P[53] !== H
          ? ((v = V
              ? (0, a.jsx)(w.$, {
                  color: "secondary",
                  size: "toolbar",
                  onClick: () => void H("/redeem?entry_point=billing"),
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.redeem",
                    defaultMessage: "Redeem gift card",
                    description: "Button opening the existing gift-card redemption page from consumer Billing",
                  }),
                })
              : null),
            (P[52] = V),
            (P[53] = H),
            (P[54] = v))
          : (v = P[54]),
        P[55] !== v ? ((A = (0, a.jsx)(E.X.Header, { title: x, actions: v })), (P[55] = v), (P[56] = A)) : (A = P[56]),
        P[57] !== k
          ? ((N = (0, a.jsx)("p", {
              children: (0, a.jsx)(c.A, {
                id: "settingsModal.walletBalance.fundingHelp.v2",
                defaultMessage:
                  "Your balance includes redeemed OpenAI gift cards and other account credits, like billing adjustments. It's automatically applied to eligible payments, including ChatGPT subscriptions and credit purchases. <helpCenterLink>Learn more</helpCenterLink>",
                description:
                  "Explanation below the monetary account balance in personal Settings > Billing, including loading and unavailable states. Redeemed gift cards and billing adjustments fund this balance, which is automatically applied to eligible ChatGPT subscriptions and credit purchases. This is separate from Agent Wallet. The helpCenterLink opens a Help Center article about this balance and can move naturally in translation.",
                values: {
                  helpCenterLink: (e) =>
                    (0, a.jsx)(e5.G, {
                      appearance: "secondary",
                      href: "https://help.openai.com/articles/20001508",
                      initiator: "open_in_browser_bridge",
                      onActivate: () => O(k, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_BALANCE_HELP_OPENED"),
                      children: e,
                    }),
                },
              }),
            })),
            (P[57] = k),
            (P[58] = N))
          : (N = P[58]),
        P[59] !== b || P[60] !== N
          ? ((j = (0, a.jsx)(E.X.Content, {
              children: (0, a.jsx)(C.t, { children: (0, a.jsx)(S.ic, { label: b, description: N, control: null }) }),
            })),
            (P[59] = b),
            (P[60] = N),
            (P[61] = j))
          : (j = P[61]),
        P[62] !== A || P[63] !== j
          ? ((I = (0, a.jsxs)(E.X, { children: [A, j] })), (P[62] = A), (P[63] = j), (P[64] = I))
          : (I = P[64]),
        I
      )
    }
    let td = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(393623), n.e(17849), n.e(975926)]).then(n.bind(n, "dnkK"))).CancellationDialog,
      })),
      tu = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(393623), n.e(17849), n.e(328725)]).then(n.bind(n, "wPQ3")))
          .GoPromotionSetupReturnReview,
      }))
    function tp() {
      let e,
        t,
        n,
        s,
        r = (0, i.c)(10),
        [l] = (0, o.useState)(tg)
      ;(r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (r[0] = e)) : (e = r[0]), (0, o.useEffect)(tm, e))
      let { accountId: c, userId: p } = (0, d.As)(),
        { data: m, isLoading: g } = (0, u.YL)()
      if (!g && m?.structure === "personal" && m.id === c && null != p) {
        let e,
          t = c + p
        return (
          r[1] !== c || r[2] !== l || r[3] !== t
            ? ((e = (0, a.jsx)(th, { accountId: c, setupIntentId: l }, t)),
              (r[1] = c),
              (r[2] = l),
              (r[3] = t),
              (r[4] = e))
            : (e = r[4]),
          e
        )
      }
      return (
        r[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(f.s, { slug: "billing" })), (r[5] = t))
          : (t = r[5]),
        r[6] !== g ? ((n = g ? (0, a.jsx)(R, {}) : null), (r[6] = g), (r[7] = n)) : (n = r[7]),
        r[8] !== n ? ((s = (0, a.jsx)(h.P, { title: t, children: n })), (r[8] = n), (r[9] = s)) : (s = r[9]),
        s
      )
    }
    function tm() {
      if ("u" < typeof window) return
      let e = new URL(window.location.href)
      if ("1" === e.searchParams.get(s.Cm)) {
        for (let t of s.zD) e.searchParams.delete(t)
        window.history.replaceState(window.history.state, "", e)
      }
    }
    function tg() {
      return "u" > typeof window && "1" === new URL(window.location.href).searchParams.get(s.Cm) ? (0, s.rN)() : null
    }
    function th(e) {
      let t,
        n,
        u,
        y,
        b,
        x,
        v,
        A,
        T,
        w = (0, i.c)(28),
        { accountId: N, setupIntentId: j } = e,
        I = (0, l.gh)(g.u),
        { userId: E } = (0, d.As)()
      w[0] !== N || w[1] !== j || w[2] !== E
        ? ((t = () => (null == E ? null : (0, s.fn)({ accountId: N, userId: E }, j))),
          (w[0] = N),
          (w[1] = j),
          (w[2] = E),
          (w[3] = t))
        : (t = w[3])
      let [S, C] = (0, o.useState)(t),
        P = (0, o.useRef)(!1)
      w[4] !== I
        ? ((n = () => {
            P.current ||
              ((P.current = !0),
              eE(I, { actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BILLING_VIEWED" }))
          }),
          (w[4] = I),
          (w[5] = n))
        : (n = w[5])
      let B = (0, o.useEffectEvent)(n)
      ;(w[6] !== B
        ? ((u = () => {
            B()
          }),
          (w[6] = B),
          (w[7] = u))
        : (u = w[7]),
        w[8] === Symbol.for("react.memo_cache_sentinel") ? ((y = []), (w[8] = y)) : (y = w[8]),
        (0, o.useEffect)(u, y))
      let { data: M, isPending: k, isError: L, refetch: G } = (0, l._U)(p.Bd, N),
        O = (0, _.Zj)("200883286"),
        D = M?.entitlement.subscription_plan === "chatgptplus_no_payment_trial"
      ;(w[9] !== N ? ((b = (0, eY.Ie)(N)), (w[9] = N), (w[10] = b)) : (b = w[10]),
        w[11] !== D || w[12] !== b
          ? ((x = { ...b, staleTime: 0, enabled: D, refetchOnMount: "always" }), (w[11] = D), (w[12] = b), (w[13] = x))
          : (x = w[13]))
      let { data: H, isFetching: z, isError: W, isFetchedAfterMount: F, refetch: q } = (0, r.I)(x),
        K = null == M ? null : (0, m.U)(M, H),
        [Y, V] = (0, o.useState)(!1),
        [Z, Q] = (0, o.useState)(!1),
        X = !1
      if (k) {
        let e
        ;(w[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(R, {})), (w[14] = e)) : (e = w[14]),
          (v = e))
      } else if (L || null == M || !1 === M.can_access_with_session) {
        let e
        ;(w[15] !== G ? ((e = (0, a.jsx)(U.E, { onRetry: () => void G() })), (w[15] = G), (w[16] = e)) : (e = w[16]),
          (v = e))
      } else {
        let e,
          t = D && !F && z,
          n = t || null == K || (D && (W || !F)) ? null : K,
          i = null == n ? null : (0, ei.Ah)(n),
          s =
            M.account.processor?.a001?.has_customer_object === !0 ||
            (null != n && null == i && (M.account.plan_type ?? "free") !== "free")
        if (t) {
          let t
          ;(w[17] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(R, {})), (w[17] = t)) : (t = w[17]),
            (e = t))
        } else if (null == n) {
          let t
          ;(w[18] !== q ? ((t = (0, a.jsx)(U.E, { onRetry: () => void q() })), (w[18] = q), (w[19] = t)) : (t = w[19]),
            (e = t))
        } else {
          let t
          ;(w[20] !== N || w[21] !== n
            ? ((t = (0, a.jsx)(e0, { account: n, accountId: N }, n.entitlement.subscription_id)),
              (w[20] = N),
              (w[21] = n),
              (w[22] = t))
            : (t = w[22]),
            (e = t))
        }
        v = (X = Y)
          ? (0, a.jsx)(ta, { accountId: N, onBack: () => V(!1) })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                null != j && null != n
                  ? (0, a.jsx)(o.Suspense, {
                      fallback: (0, a.jsx)(R, {}),
                      children: (0, a.jsx)(tu, {
                        accountId: N,
                        account: n,
                        returnedOwner: S,
                        onDismiss: () => C(null),
                      }),
                    })
                  : null,
                s ? (0, a.jsx)(eS, { accountId: N }) : null,
                e,
                null,
                O ? (0, a.jsx)(tc, { account: M, accountId: N }) : null,
                (0, a.jsx)(tn, { accountId: N, onViewAll: () => V(!0) }),
                (0, a.jsx)(e_, { accountId: N }),
                s
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)($, { accountId: N }), (0, a.jsx)(eD, { accountId: N })],
                    })
                  : null,
                null != n
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        null,
                        (0, a.jsx)(e1, { account: n, onCancelSubscriptionClick: () => Q(!0) }),
                        Z
                          ? (0, a.jsx)(o.Suspense, {
                              fallback: (0, a.jsx)(R, {}),
                              children: (0, a.jsx)(
                                td,
                                { account: n, accountId: N, onClose: () => Q(!1) },
                                n.entitlement.subscription_id,
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
        w[23] !== X
          ? ((A = X
              ? (0, a.jsx)(c.A, {
                  id: "settingsModal.transactionHistory.title",
                  defaultMessage: "Transaction history",
                  description:
                    "Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage",
                })
              : (0, a.jsx)(f.s, { slug: "billing" })),
            (w[23] = X),
            (w[24] = A))
          : (A = w[24]),
        w[25] !== v || w[26] !== A
          ? ((T = (0, a.jsx)(h.P, { title: A, children: v })), (w[25] = v), (w[26] = A), (w[27] = T))
          : (T = w[27]),
        T
      )
    }
  },
  i3p7(e, t, n) {
    var a = n("dv45")
    n.d(
      t,
      { JY: () => a.Pd },
      {
        Ah: function (e) {
          if (!e.entitlement.has_active_subscription) return null
          switch (e.last_active_subscription.purchase_origin_platform) {
            case "chatgpt_mobile_ios":
            case "sora_mobile_ios":
              return "app_store"
            case "chatgpt_mobile_android":
              return "google_play_store"
            case "partner_managed":
              return "partner_managed"
            default:
              return null
          }
        },
        Kq: function ({
          paymentMethod: e,
          defaultPaymentMethodId: t,
          defaultPaymentMethods: n,
          autoReloadPaymentMethodId: a,
          autoReloadResolved: i,
        }) {
          return i && e.id !== t && e.id !== n?.subscription && e.id !== n?.credit_purchase && e.id !== a
        },
      },
    )
  },
  IzuK(e, t, n) {
    let a = n("ASxG").enum(["control", "refresh", "refresh_with_loss", "refresh_with_personalized_loss"]),
      i = "go-origin-plus-trial-return-request:"
    function s(e, t, n) {
      var a
      return "plus" === l(e) && n.getLayer("2090377145").get("show_plus_offer_else_go", !1)
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
    function r(e, t = Date.now()) {
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
    function l(e) {
      let t = o(e.entitlement.subscription_plan),
        n = e.eligible_offers?.offers?.some((t) => o(t.id) === e.account.plan_type)
      return null != t && !0 === n ? t : e.account.plan_type
    }
    function o(e) {
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
        B0: s,
        MT: function (e) {
          let t = l(e)
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
        OC: function (e, t, n) {
          let i = l(e)
          if (
            e.entitlement.is_active_subscription_gratis ||
            e.entitlement.discount?.promo_campaign_id === "students-2026-four-month-free"
          )
            return { page: "confirm", skipPromotion: !0 }
          if (r(e)) return { page: "go_trial" }
          if ("pro" === i && n.checkGate("2238071649")) return { page: "pro_offer" }
          if ("plus" === i && n.checkGate("3600660324")) {
            let i = a.safeParse(n.getLayer("3550013596").get("variant", "disabled"))
            if (i.success) {
              let a = s(e, t, n),
                r = { variant: i.data, offer: "plus_offer" === a.page || "go_offer" === a.page ? a.page : null }
              return null == r.offer
                ? { page: "confirm", skipPromotion: !1, flow: r }
                : "refresh_with_loss" === r.variant || "refresh_with_personalized_loss" === r.variant
                  ? { page: "retention_loss", flow: r }
                  : { page: r.offer, flow: r }
            }
          }
          return s(e, t, n)
        },
        Wg: function (e, t, n = Date.now()) {
          try {
            let a = Number(t.getItem(i + e))
            if (!Number.isFinite(a) || a <= 0) return (t.removeItem(i + e), "none")
            return n - a >= 3e5 ? "expired" : "active"
          } catch {
            return "unavailable"
          }
        },
        _f: function (e) {
          let t = e.entitlement.discount
          return e.entitlement.is_active_subscription_gratis ||
            (t?.cancellation_policy === "immediate" && !t.discount_start_in_num_periods) ||
            r(e)
            ? "immediate"
            : !0 === e.entitlement.is_delinquent
              ? "unconfirmed"
              : "term_end"
        },
        f0: function (e, t, n = Date.now()) {
          try {
            return (t.setItem(i + e, String(n)), !0)
          } catch {
            return !1
          }
        },
        jq: r,
        vD: function (e, t) {
          t.removeItem(i + e)
        },
        wN: l,
      },
    )
  },
  mXrZ(e, t, n) {
    var a = n("rL0c")
    n.d(
      t,
      {},
      {
        J: function (e, t, n) {
          let i = n.toUpperCase(),
            s = (0, a.E)({ intl: e, currencyCode: i })
          return e.formatNumber(t / 10 ** s, { style: "currency", currency: i })
        },
      },
    )
  },
  p0XN(e, t, n) {
    var a = n("ABep"),
      i = n("oyxz"),
      s = n("Qgfj")
    function r(e) {
      return { name: null == e ? void 0 : c.get(e), imageUrl: null == e ? void 0 : u.get(e) }
    }
    let l = {
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
      o = (0, s.YK)({
        maskedNumber: {
          id: "settings.consumerBilling.maskedPaymentNumber",
          defaultMessage: "•••• {last4}",
          description:
            "Masked saved card or bank-account number; last4 is only the final four digits, never a complete account number",
        },
        unsupported: {
          id: "settings.consumerBilling.unsupportedPaymentMethod",
          defaultMessage: "Payment method",
          description: "Fallback name for an unsupported saved payment method in consumer Billing",
        },
        detailsUnavailable: {
          id: "settings.consumerBilling.paymentDetailsUnavailable",
          defaultMessage: "Details unavailable",
          description: "Fallback details for an unsupported saved payment method in consumer Billing",
        },
        amex: {
          id: "settings.consumerBilling.paymentName.amex",
          defaultMessage: "American Express",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        cartes_bancaires: {
          id: "settings.consumerBilling.paymentName.cartes_bancaires",
          defaultMessage: "Cartes Bancaires",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        diners: {
          id: "settings.consumerBilling.paymentName.diners",
          defaultMessage: "Diners Club",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        discover: {
          id: "settings.consumerBilling.paymentName.discover",
          defaultMessage: "Discover",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        eftpos_au: {
          id: "settings.consumerBilling.paymentName.eftpos_au",
          defaultMessage: "EFTPOS Australia",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        jcb: {
          id: "settings.consumerBilling.paymentName.jcb",
          defaultMessage: "JCB",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        link: {
          id: "settings.consumerBilling.paymentName.link",
          defaultMessage: "Link",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        mastercard: {
          id: "settings.consumerBilling.paymentName.mastercard",
          defaultMessage: "Mastercard",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        unionpay: {
          id: "settings.consumerBilling.paymentName.unionpay",
          defaultMessage: "UnionPay",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        visa: {
          id: "settings.consumerBilling.paymentName.visa",
          defaultMessage: "Visa",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        unknown: {
          id: "settings.consumerBilling.paymentName.unknown",
          defaultMessage: "Other",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        paypal: {
          id: "settings.consumerBilling.paymentName.paypal",
          defaultMessage: "PayPal",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        klarna: {
          id: "settings.consumerBilling.paymentName.klarna",
          defaultMessage: "Klarna",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        cashapp: {
          id: "settings.consumerBilling.paymentName.cashapp",
          defaultMessage: "Cash App",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        pix: {
          id: "settings.consumerBilling.paymentName.pix",
          defaultMessage: "Pix",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        upi: {
          id: "settings.consumerBilling.paymentName.upi",
          defaultMessage: "UPI",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        gcash: {
          id: "settings.consumerBilling.paymentName.gcash",
          defaultMessage: "GCash",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        momo_wallet: {
          id: "settings.consumerBilling.paymentName.momo_wallet",
          defaultMessage: "MoMo",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        sepa_debit: {
          id: "settings.consumerBilling.paymentName.sepa_debit",
          defaultMessage: "SEPA Direct Debit",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        go_pay: {
          id: "settings.consumerBilling.paymentName.go_pay",
          defaultMessage: "GoPay",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        blik: {
          id: "settings.consumerBilling.paymentName.blik",
          defaultMessage: "BLIK",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        bizum: {
          id: "settings.consumerBilling.paymentName.bizum",
          defaultMessage: "Bizum",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        kr_card: {
          id: "settings.consumerBilling.paymentName.kr_card",
          defaultMessage: "Korean Card",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        kakao_pay: {
          id: "settings.consumerBilling.paymentName.kakao_pay",
          defaultMessage: "Kakao Pay",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        naver_pay: {
          id: "settings.consumerBilling.paymentName.naver_pay",
          defaultMessage: "Naver Pay",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        ideal: {
          id: "settings.consumerBilling.paymentName.ideal",
          defaultMessage: "iDEAL",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        satispay: {
          id: "settings.consumerBilling.paymentName.satispay",
          defaultMessage: "Satispay",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
        twint: {
          id: "settings.consumerBilling.paymentName.twint",
          defaultMessage: "TWINT",
          description: "Name of a saved payment network or provider shown in consumer Billing",
        },
      }),
      c = new Map(Object.entries(o)),
      d =
        "https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/paymen_method_icons_svg",
      u = new Map([
        ["amex", `${d}/Logo=Amex.svg`],
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
    n.d(
      t,
      {},
      {
        F: r,
        G: function (e) {
          let t = e.type,
            n = null
          "card" === t && null != e.card
            ? ((t = e.card.brand), (n = (0, a.jsx)(i.A, { ...o.maskedNumber, values: { last4: e.card.last4 } })))
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
                        ? (n = (0, a.jsx)(i.A, { ...o.maskedNumber, values: { last4: e.sepa_debit.last4 } }))
                        : "kr_card" === t && e.kr_card?.last4
                          ? (n = (0, a.jsx)(i.A, { ...o.maskedNumber, values: { last4: e.kr_card.last4 } }))
                          : "naver_pay" === t
                            ? (n = e.naver_pay?.buyer_id)
                            : "ideal" === t && (n = e.ideal?.bank)
          let { name: s, imageUrl: c } = r(t),
            d = "kr_card" === e.type ? e.kr_card?.brand?.trim() : null
          return {
            imageUrl: c,
            label: d ? (l[d.toLowerCase()] ?? d) : (0, a.jsx)(i.A, { ...(s ?? o.unsupported) }),
            description: (0, a.jsx)("span", {
              className: "select-text",
              children: null == s ? (0, a.jsx)(i.A, { ...o.detailsUnavailable }) : n,
            }),
          }
        },
      },
    )
  },
  jQyB(e, t, n) {
    n.d(t, { I: () => L })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("HqZu"),
      r = n("zd8w"),
      l = "field-fg_a4p",
      o = "title-s_mUNw",
      c = "error-zUhWHj",
      d = "label-AofZET",
      u = "input-OTrb6K",
      p = n("L9TA")
    function m(e) {
      let t,
        n,
        s,
        m,
        g,
        h,
        f,
        _,
        y,
        b,
        x,
        v,
        A,
        T,
        w,
        N,
        j,
        I = (0, i.c)(73),
        {
          metrics: E,
          appearance: S,
          expirationTitle: C,
          monthLabel: P,
          monthInput: B,
          yearLabel: M,
          yearInput: k,
          expirationError: L,
          billingAddressTitle: G,
          addressElementOptions: O,
          onAddressReady: D,
          onAddressChange: R,
          error: H,
          action: U,
        } = e,
        z = (0, r.useId)(),
        W = (0, r.useId)(),
        F = S.rules,
        q = S.variables,
        K = F?.[".Input"],
        Y = F?.[".Label"],
        V = F?.[".Input:focus"],
        $ = F?.[".Input--invalid, .Input--invalid:focus"] ?? F?.[".Input--invalid"],
        Z = q?.colorBackground,
        Q = q?.colorText,
        X = q?.colorTextPlaceholder,
        J = q?.colorPrimary,
        ee = q?.colorDanger,
        et = q?.fontFamily,
        en = q?.fontSizeBase ?? "16px",
        ea = q?.gridColumnSpacing,
        ei = K?.backgroundColor,
        es = K?.border,
        er = K?.borderRadius,
        el = K?.padding,
        eo = K?.boxShadow,
        ec = K?.transition,
        ed = Y?.color,
        eu = Y?.fontWeight,
        ep = V?.borderColor,
        em = V?.boxShadow,
        eg = $?.borderColor,
        eh = $?.boxShadow
      I[0] !== Z ||
      I[1] !== es ||
      I[2] !== er ||
      I[3] !== el ||
      I[4] !== eo ||
      I[5] !== ec ||
      I[6] !== ed ||
      I[7] !== eu ||
      I[8] !== ep ||
      I[9] !== em ||
      I[10] !== eg ||
      I[11] !== Q ||
      I[12] !== eh ||
      I[13] !== X ||
      I[14] !== J ||
      I[15] !== ee ||
      I[16] !== et ||
      I[17] !== en ||
      I[18] !== ea ||
      I[19] !== ei
        ? ((t = {
            "--colorBackground": Z,
            "--colorText": Q,
            "--colorTextPlaceholder": X,
            "--colorPrimary": J,
            "--colorDanger": ee,
            "--payment-font": et,
            "--payment-font-size": en,
            "--payment-column-gap": ea,
            "--payment-input-background": ei,
            "--payment-input-border": es,
            "--payment-input-radius": er,
            "--payment-input-padding": el,
            "--payment-input-shadow": eo,
            "--payment-input-transition": ec,
            "--payment-label-color": ed,
            "--payment-label-weight": eu,
            "--payment-focus-border": ep,
            "--payment-focus-shadow": em,
            "--payment-invalid-border": eg,
            "--payment-invalid-shadow": eh,
          }),
          (I[0] = Z),
          (I[1] = es),
          (I[2] = er),
          (I[3] = el),
          (I[4] = eo),
          (I[5] = ec),
          (I[6] = ed),
          (I[7] = eu),
          (I[8] = ep),
          (I[9] = em),
          (I[10] = eg),
          (I[11] = Q),
          (I[12] = eh),
          (I[13] = X),
          (I[14] = J),
          (I[15] = ee),
          (I[16] = et),
          (I[17] = en),
          (I[18] = ea),
          (I[19] = ei),
          (I[20] = t))
        : (t = I[20])
      let ef = t
      I[21] !== z || I[22] !== C
        ? ((n = (0, a.jsx)("p", { id: z, className: o, children: C })), (I[21] = z), (I[22] = C), (I[23] = n))
        : (n = I[23])
      let e_ = B.placeholder ?? " ",
        ey = L ? W : void 0
      ;(I[24] !== B || I[25] !== e_ || I[26] !== ey
        ? ((s = (0, a.jsx)("input", {
            ...B,
            placeholder: e_,
            className: u,
            name: "expiration-month",
            type: "text",
            inputMode: "numeric",
            autoComplete: "cc-exp-month",
            maxLength: 2,
            "aria-describedby": ey,
          })),
          (I[24] = B),
          (I[25] = e_),
          (I[26] = ey),
          (I[27] = s))
        : (s = I[27]),
        I[28] !== P ? ((m = (0, a.jsx)("span", { className: d, children: P })), (I[28] = P), (I[29] = m)) : (m = I[29]),
        I[30] !== s || I[31] !== m
          ? ((g = (0, a.jsxs)("label", { className: l, children: [s, m] })), (I[30] = s), (I[31] = m), (I[32] = g))
          : (g = I[32]))
      let eb = k.placeholder ?? " ",
        ex = L ? W : void 0
      return (
        I[33] !== eb || I[34] !== ex || I[35] !== k
          ? ((h = (0, a.jsx)("input", {
              ...k,
              placeholder: eb,
              className: u,
              name: "expiration-year",
              type: "text",
              inputMode: "numeric",
              autoComplete: "cc-exp-year",
              maxLength: 4,
              "aria-describedby": ex,
            })),
            (I[33] = eb),
            (I[34] = ex),
            (I[35] = k),
            (I[36] = h))
          : (h = I[36]),
        I[37] !== M ? ((f = (0, a.jsx)("span", { className: d, children: M })), (I[37] = M), (I[38] = f)) : (f = I[38]),
        I[39] !== h || I[40] !== f
          ? ((_ = (0, a.jsxs)("label", { className: l, children: [h, f] })), (I[39] = h), (I[40] = f), (I[41] = _))
          : (_ = I[41]),
        I[42] !== z || I[43] !== ef || I[44] !== g || I[45] !== _
          ? ((y = (0, a.jsxs)("div", {
              role: "group",
              "aria-labelledby": z,
              className: "expiration-h2MKs9",
              style: ef,
              children: [g, _],
            })),
            (I[42] = z),
            (I[43] = ef),
            (I[44] = g),
            (I[45] = _),
            (I[46] = y))
          : (y = I[46]),
        I[47] !== L || I[48] !== W
          ? ((b = L ? (0, a.jsx)("p", { id: W, role: "alert", className: c, children: L }) : null),
            (I[47] = L),
            (I[48] = W),
            (I[49] = b))
          : (b = I[49]),
        I[50] !== n || I[51] !== y || I[52] !== b
          ? ((x = (0, a.jsxs)("div", { className: l, children: [n, y, b] })),
            (I[50] = n),
            (I[51] = y),
            (I[52] = b),
            (I[53] = x))
          : (x = I[53]),
        I[54] !== G ? ((v = (0, a.jsx)("p", { className: o, children: G })), (I[54] = G), (I[55] = v)) : (v = I[55]),
        I[56] !== O || I[57] !== E || I[58] !== R || I[59] !== D
          ? ((A = (0, a.jsx)(p.n, { metrics: E, options: O, onReady: D, onChange: R })),
            (I[56] = O),
            (I[57] = E),
            (I[58] = R),
            (I[59] = D),
            (I[60] = A))
          : (A = I[60]),
        I[61] !== v || I[62] !== A
          ? ((T = (0, a.jsxs)("div", { className: l, children: [v, A] })), (I[61] = v), (I[62] = A), (I[63] = T))
          : (T = I[63]),
        I[64] !== H
          ? ((w = H ? (0, a.jsx)("p", { role: "alert", className: c, children: H }) : null), (I[64] = H), (I[65] = w))
          : (w = I[65]),
        I[66] !== U
          ? ((N = (0, a.jsx)("div", { className: "action-sfBSXV", children: U })), (I[66] = U), (I[67] = N))
          : (N = I[67]),
        I[68] !== x || I[69] !== T || I[70] !== w || I[71] !== N
          ? ((j = (0, a.jsxs)("div", { className: "form-safiX3", children: [x, T, w, N] })),
            (I[68] = x),
            (I[69] = T),
            (I[70] = w),
            (I[71] = N),
            (I[72] = j))
          : (j = I[72]),
        j
      )
    }
    var g = n("dltu"),
      h = n("GtYL"),
      f = n("v89U"),
      _ = n("C5k8"),
      y = n("T0Rc"),
      b = n("xSOA"),
      x = n("zTeN"),
      v = n("Wf1j"),
      A = n("oyxz"),
      T = n("PFjh"),
      w = n("ygO2"),
      N = n("JNtf"),
      j = n("mUDD"),
      I = n("OWtl"),
      E = n("hZax"),
      S = n("LH8k"),
      C = n("HFSu"),
      P = n("a6Zv"),
      B = n("wbWw"),
      M = n("RDnT"),
      k = n("iLQO")
    function L(e) {
      let t,
        n,
        s,
        l,
        o,
        c = (0, i.c)(20),
        { accountId: d, methodId: u, onCloseAutoFocus: p, onClose: m, onSuccess: b, onBillingInfoChange: x } = e,
        A = (0, v.A)(),
        T = (0, E.AS)(),
        w = (0, f.EG)(T.getLayer(f.Sd.personal)),
        { data: I, isPending: S, isError: B, refetch: L } = (0, y.I)((0, k.P)(d, A.locale, w))
      c[0] !== d || c[1] !== u
        ? ((t = {
            queryKey: ["consumer-billing", d, "payment-method", u],
            queryFn: (e) => {
              let { signal: t } = e
              return C.CodexRequest.safeGet("/payments/payment_method/{payment_method_id}", {
                parameters: { path: { payment_method_id: u }, query: { account_id: d } },
                signal: t,
              })
            },
            staleTime: 0,
            retry: !1,
          }),
          (c[0] = d),
          (c[1] = u),
          (c[2] = t))
        : (t = c[2])
      let { data: D, isPending: R, isError: H, refetch: U } = (0, y.I)(t),
        z = (0, P.Y)(),
        [W, F] = (0, r.useState)(!1)
      c[3] !== I || c[4] !== B || c[5] !== D || c[6] !== z || c[7] !== H
        ? ((n = null == I || null == D || H || B ? void 0 : (0, h.UF)(!0 === z, (0, k.R)(z).variables)),
          (c[3] = I),
          (c[4] = B),
          (c[5] = D),
          (c[6] = z),
          (c[7] = H),
          (c[8] = n))
        : (n = c[8])
      let q = n,
        K = N.lG
      c[9] !== p
        ? ((s = {
            "aria-describedby": void 0,
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), p())
            },
          }),
          (c[9] = p),
          (c[10] = s))
        : (s = c[10])
      let Y = !W
      c[11] !== m || c[12] !== W
        ? ((l = (e) => {
            e || W || m()
          }),
          (c[11] = m),
          (c[12] = W),
          (c[13] = l))
        : (l = c[13])
      let V =
        null != I && null != D && null != q
          ? (0, a.jsx)(
              _.S8,
              {
                stripe: I.stripe,
                options: { appearance: q },
                children: (0, a.jsx)(O, {
                  accountId: d,
                  method: D.payment_method,
                  appearance: q,
                  onSubmittingChange: F,
                  onClose: m,
                  onSuccess: b,
                  onBillingInfoChange: x,
                }),
              },
              (0, f.eI)(A.locale, "elements", w),
            )
          : (0, a.jsx)(j.R4, {
              variant: "chatgpt",
              children: (0, a.jsx)(g.W, {
                title: (0, a.jsx)(N.L3, { children: (0, a.jsx)(g.E, { children: (0, a.jsx)(G, {}) }) }),
                children: (0, a.jsx)(M.Y, {
                  kind: "payment",
                  loading: R || S,
                  onRetry: () => {
                    Promise.all([U(), L()])
                  },
                }),
              }),
            })
      return (
        c[14] !== K || c[15] !== l || c[16] !== V || c[17] !== s || c[18] !== Y
          ? ((o = (0, a.jsx)(K, {
              open: !0,
              variant: "form",
              widthHint: 540,
              contentOverflow: "visible",
              contentPosition: "scrollable",
              contentProps: s,
              showDialogClose: Y,
              onOpenChange: l,
              children: V,
            })),
            (c[14] = K),
            (c[15] = l),
            (c[16] = V),
            (c[17] = s),
            (c[18] = Y),
            (c[19] = o))
          : (o = c[19]),
        o
      )
    }
    function G() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.editPaymentMethod",
              defaultMessage: "Edit payment method",
              description: "Title for editing a saved card's expiration date and billing address",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function O(e) {
      let t,
        n,
        l,
        o,
        c,
        d,
        u,
        p,
        h,
        f,
        _,
        y,
        E,
        P,
        M,
        k,
        L,
        O,
        D,
        R,
        H,
        U,
        z,
        W,
        F,
        q,
        K,
        Y,
        V,
        $,
        Z,
        Q,
        X,
        J = (0, i.c)(109),
        {
          accountId: ee,
          method: et,
          appearance: en,
          onSubmittingChange: ea,
          onClose: ei,
          onSuccess: es,
          onBillingInfoChange: er,
        } = e,
        el = (0, x.gh)(I.u),
        eo = (0, v.A)()
      J[0] !== et.card
        ? ((t = null == et.card ? "" : String(et.card.exp_month).padStart(2, "0")), (J[0] = et.card), (J[1] = t))
        : (t = J[1])
      let [ec, ed] = (0, r.useState)(t),
        [eu, ep] = (0, r.useState)(String(et.card?.exp_year ?? "")),
        [em, eg] = (0, r.useState)(null),
        [eh, ef] = (0, r.useState)(!0),
        [e_, ey] = (0, r.useState)(!1)
      if (J[2] !== ec || J[3] !== eu) {
        let e,
          t,
          a = new Date()
        ;(J[7] !== ec
          ? ((e = /^\d{1,2}$/.test(ec) && Number(ec) >= 1 && 12 >= Number(ec)), (J[7] = ec), (J[8] = e))
          : (e = J[8]),
          (l = e),
          J[9] !== eu ? ((t = /^\d{4}$/.test(eu) && Number(eu) >= 2e3), (J[9] = eu), (J[10] = t)) : (t = J[10]),
          (o = t),
          (n =
            l &&
            o &&
            (Number(eu) > a.getFullYear() || (Number(eu) === a.getFullYear() && Number(ec) >= a.getMonth() + 1))),
          (J[2] = ec),
          (J[3] = eu),
          (J[4] = n),
          (J[5] = l),
          (J[6] = o))
      } else ((n = J[4]), (l = J[5]), (o = J[6]))
      let eb = n
      ;(J[11] !== ee ||
      J[12] !== em ||
      J[13] !== e_ ||
      J[14] !== eh ||
      J[15] !== et.billing_details ||
      J[16] !== et.id ||
      J[17] !== ec ||
      J[18] !== ea ||
      J[19] !== eb ||
      J[20] !== eu
        ? ((c = async () => {
            if (!e_ || !eh || !eb) throw Error("Incomplete card details")
            ;(ea(!0),
              await C.CodexRequest.safePatch("/payments/payment_method/{payment_method_id}", {
                parameters: { path: { payment_method_id: et.id } },
                requestBody: {
                  account_id: ee,
                  card: { exp_month: Number(ec), exp_year: Number(eu) },
                  billing_details: null == em ? void 0 : { ...et.billing_details, name: em.name, address: em.address },
                },
              }))
          }),
          (J[11] = ee),
          (J[12] = em),
          (J[13] = e_),
          (J[14] = eh),
          (J[15] = et.billing_details),
          (J[16] = et.id),
          (J[17] = ec),
          (J[18] = ea),
          (J[19] = eb),
          (J[20] = eu),
          (J[21] = c))
        : (c = J[21]),
        J[22] !== ee || J[23] !== ei || J[24] !== es || J[25] !== el
          ? ((d = async () => {
              ;(await (0, B.fI)(el, ee), (es ?? ei)())
            }),
            (J[22] = ee),
            (J[23] = ei),
            (J[24] = es),
            (J[25] = el),
            (J[26] = d))
          : (d = J[26]),
        J[27] !== ea ? ((u = () => ea(!1)), (J[27] = ea), (J[28] = u)) : (u = J[28]),
        J[29] !== c || J[30] !== d || J[31] !== u
          ? ((p = { mutationFn: c, onSuccess: d, onSettled: u }), (J[29] = c), (J[30] = d), (J[31] = u), (J[32] = p))
          : (p = J[32]))
      let { mutate: ex, isPending: ev, isError: eA, error: eT, reset: ew } = (0, b.n)(p)
      ;(J[33] !== e_ || J[34] !== eh || J[35] !== ev || J[36] !== ex || J[37] !== eb
        ? ((h = (e) => {
            ;(e.preventDefault(), e_ && eh && eb && !ev && ex())
          }),
          (J[33] = e_),
          (J[34] = eh),
          (J[35] = ev),
          (J[36] = ex),
          (J[37] = eb),
          (J[38] = h))
        : (h = J[38]),
        J[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(N.L3, { children: (0, a.jsx)(g.E, { children: (0, a.jsx)(G, {}) }) })), (J[39] = f))
          : (f = J[39]),
        J[40] !== el ? ((_ = (0, T.dj)(el)), (J[40] = el), (J[41] = _)) : (_ = J[41]),
        J[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.expirationDate",
              defaultMessage: "Expiration date",
              description: "Heading for the month and year fields in the saved payment-method editor",
            })),
            (E = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.expirationMonth",
              defaultMessage: "Month",
              description: "Label for the saved card's two-digit expiration month",
            })),
            (J[42] = y),
            (J[43] = E))
          : ((y = J[42]), (E = J[43])))
      let eN = !l
      ;(J[44] !== eo
        ? ((P = eo.formatMessage({
            id: "settings.consumerBilling.expirationMonthPlaceholder",
            defaultMessage: "MM",
            description: "Placeholder indicating the two-digit card expiration month in the payment-method editor",
          })),
          (J[44] = eo),
          (J[45] = P))
        : (P = J[45]),
        J[46] !== ec
          ? ((M = () => {
              1 === ec.length && ed(ec.padStart(2, "0"))
            }),
            (J[46] = ec),
            (J[47] = M))
          : (M = J[47]),
        J[48] !== eA || J[49] !== ew
          ? ((k = (e) => {
              ;(ed(e.target.value.replace(/\D/g, "").slice(0, 2)), eA && ew())
            }),
            (J[48] = eA),
            (J[49] = ew),
            (J[50] = k))
          : (k = J[50]),
        J[51] !== ev || J[52] !== ec || J[53] !== eN || J[54] !== P || J[55] !== M || J[56] !== k
          ? ((L = {
              autoFocus: !0,
              required: !0,
              "aria-invalid": eN,
              disabled: ev,
              placeholder: P,
              value: ec,
              onBlur: M,
              onChange: k,
            }),
            (J[51] = ev),
            (J[52] = ec),
            (J[53] = eN),
            (J[54] = P),
            (J[55] = M),
            (J[56] = k),
            (J[57] = L))
          : (L = J[57]),
        J[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.expirationYear",
              defaultMessage: "Year",
              description: "Label for the saved card's four-digit expiration year",
            })),
            (J[58] = O))
          : (O = J[58]))
      let ej = !o
      ;(J[59] !== eo
        ? ((D = eo.formatMessage({
            id: "settings.consumerBilling.expirationYearPlaceholder",
            defaultMessage: "YYYY",
            description: "Placeholder indicating the four-digit card expiration year in the payment-method editor",
          })),
          (J[59] = eo),
          (J[60] = D))
        : (D = J[60]),
        J[61] !== eA || J[62] !== ew
          ? ((R = (e) => {
              ;(ep(e.target.value.replace(/\D/g, "").slice(0, 4)), eA && ew())
            }),
            (J[61] = eA),
            (J[62] = ew),
            (J[63] = R))
          : (R = J[63]),
        J[64] !== ev || J[65] !== ej || J[66] !== D || J[67] !== R || J[68] !== eu
          ? ((H = { required: !0, "aria-invalid": ej, disabled: ev, placeholder: D, value: eu, onChange: R }),
            (J[64] = ev),
            (J[65] = ej),
            (J[66] = D),
            (J[67] = R),
            (J[68] = eu),
            (J[69] = H))
          : (H = J[69]),
        J[70] !== eb
          ? ((U = eb
              ? null
              : (0, a.jsx)(A.A, {
                  id: "settings.consumerBilling.invalidExpirationDate",
                  defaultMessage: "Enter a valid expiration date",
                  description:
                    "Validation under the saved card's expiration fields when the month or year is invalid or the card has expired",
                })),
            (J[70] = eb),
            (J[71] = U))
          : (U = J[71]),
        J[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.billingAddress",
              defaultMessage: "Billing address",
              description: "Label for the postal address on billing invoices",
            })),
            (J[72] = z))
          : (z = J[72]),
        J[73] === Symbol.for("react.memo_cache_sentinel") ? ((W = [...s.qo]), (J[73] = W)) : (W = J[73]))
      let eI = et.billing_details?.name ?? void 0,
        eE = et.billing_details?.address?.line1 ?? void 0,
        eS = et.billing_details?.address?.line2 ?? void 0,
        eC = et.billing_details?.address?.city ?? void 0,
        eP = et.billing_details?.address?.state ?? void 0,
        eB = et.billing_details?.address?.postal_code ?? void 0,
        eM = et.billing_details?.address?.country ?? ""
      ;(J[74] !== eE || J[75] !== eS || J[76] !== eC || J[77] !== eP || J[78] !== eB || J[79] !== eM
        ? ((F = { line1: eE, line2: eS, city: eC, state: eP, postal_code: eB, country: eM }),
          (J[74] = eE),
          (J[75] = eS),
          (J[76] = eC),
          (J[77] = eP),
          (J[78] = eB),
          (J[79] = eM),
          (J[80] = F))
        : (F = J[80]),
        J[81] !== eI || J[82] !== F
          ? ((q = { mode: "billing", allowedCountries: W, defaultValues: { name: eI, address: F } }),
            (J[81] = eI),
            (J[82] = F),
            (J[83] = q))
          : (q = J[83]),
        J[84] === Symbol.for("react.memo_cache_sentinel") ? ((K = () => ey(!0)), (J[84] = K)) : (K = J[84]),
        J[85] !== eA || J[86] !== er || J[87] !== ew
          ? ((Y = (e) => {
              ;(eg(e.value), ef(e.complete), eA && ew())
              try {
                er?.(e)
              } catch {}
            }),
            (J[85] = eA),
            (J[86] = er),
            (J[87] = ew),
            (J[88] = Y))
          : (Y = J[88]),
        J[89] !== eT || J[90] !== eA
          ? ((V = eA
              ? (null != eT && (0, S.d)(eT)?.message) ||
                (0, a.jsx)(A.A, {
                  id: "settings.consumerBilling.editCardError",
                  defaultMessage: "Unable to update payment method. Please try again.",
                  description: "Error when updating a card's expiration date or billing address fails",
                })
              : null),
            (J[89] = eT),
            (J[90] = eA),
            (J[91] = V))
          : (V = J[91]))
      let ek = ev || !e_ || !eh || !eb
      return (
        J[92] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, a.jsx)(A.A, {
              id: "settings.consumerBilling.save",
              defaultMessage: "Save",
              description: "Button saving edits to consumer billing information or a saved card",
            })),
            (J[92] = $))
          : ($ = J[92]),
        J[93] !== ev || J[94] !== ek
          ? ((Z = (0, a.jsx)(j.Es, {
              children: (0, a.jsx)(w.$, {
                type: "submit",
                color: "primary",
                radius: "full",
                size: "beaconAction",
                loading: ev,
                disabled: ek,
                children: $,
              }),
            })),
            (J[93] = ev),
            (J[94] = ek),
            (J[95] = Z))
          : (Z = J[95]),
        J[96] !== en ||
        J[97] !== L ||
        J[98] !== H ||
        J[99] !== U ||
        J[100] !== q ||
        J[101] !== Y ||
        J[102] !== V ||
        J[103] !== Z ||
        J[104] !== _
          ? ((Q = (0, a.jsx)(g.W, {
              title: f,
              children: (0, a.jsx)(m, {
                metrics: _,
                appearance: en,
                expirationTitle: y,
                monthLabel: E,
                monthInput: L,
                yearLabel: O,
                yearInput: H,
                expirationError: U,
                billingAddressTitle: z,
                addressElementOptions: q,
                onAddressReady: K,
                onAddressChange: Y,
                error: V,
                action: Z,
              }),
            })),
            (J[96] = en),
            (J[97] = L),
            (J[98] = H),
            (J[99] = U),
            (J[100] = q),
            (J[101] = Y),
            (J[102] = V),
            (J[103] = Z),
            (J[104] = _),
            (J[105] = Q))
          : (Q = J[105]),
        J[106] !== Q || J[107] !== h
          ? ((X = (0, a.jsx)(j.R4, { as: "form", variant: "chatgpt", onSubmit: h, children: Q })),
            (J[106] = Q),
            (J[107] = h),
            (J[108] = X))
          : (X = J[108]),
        X
      )
    }
  },
  tRqc(e, t, n) {
    var a = n("MVHH"),
      i = n("bNMl"),
      s = n("XP4n")
    let r = {
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
        x: function (e, { accountId: t, state: n, entryPoint: d, action: u = d, fromCadence: p, toCadence: m }) {
          e.get(i.YV).logProductEvent(a.Lk, {
            accountId: t,
            actionType: l[u],
            entryPoint: r[d],
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
            fromCadence: null == p ? void 0 : o[p],
            toCadence: null == m ? void 0 : o[m],
            updateKind: null == m ? void 0 : c[(0, s.ck)(n, m)],
          })
        },
      },
    )
  },
  XP4n(e, t, n) {
    var a = n("ASxG"),
      i = n("i3p7"),
      s = n("ra39")
    function r(e) {
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
    let l = a.object({
      status: a.number().optional(),
      message: a.string().optional(),
      detail: a
        .union([
          a.string(),
          a.object({
            error_type: a.string().optional(),
            message: a.string().optional(),
            description: a.string().optional(),
          }),
        ])
        .optional(),
    })
    n.d(
      t,
      {},
      {
        F9: r,
        Rj: function (e, t) {
          let n = l.safeParse(e)
          if (!n.success) return "unknown"
          let { detail: a, status: i, message: s } = n.data
          if ("object" == typeof a && "subscription_update_pending" === a.error_type) return "update_processing"
          let r = ("string" == typeof a ? a : (a?.message ?? a?.description ?? s ?? "")).toLowerCase()
          return r.includes("matches the current subscription") || r.includes("matches the scheduled subscription")
            ? "stale_state"
            : r.includes("non-cadence future update") ||
                r.includes("another plan change") ||
                r.includes("future update scheduled")
              ? "conflicting_plan_change"
              : r.includes("not configured for this subscription") ||
                  r.includes("target price") ||
                  r.includes("target sku") ||
                  r.includes("unable to resolve")
                ? "missing_price_configuration"
                : "yearly" === t &&
                    (403 === i ||
                      r.includes("annual plus subscriptions are not enabled") ||
                      r.includes("trialing subscription") ||
                      r.includes("policy does not allow"))
                  ? "eligibility_changed"
                  : "unknown"
        },
        _N: function (e, t, n, a = Date.now()) {
          if (
            !r(e) ||
            null == t ||
            null == n ||
            "plus" !== t.plan_type ||
            t.is_delinquent ||
            !t.is_processor_stripe ||
            null == (0, s.hh)(t) ||
            t.billing_currency !== n.currency_config.symbol_code
          )
            return null
          let i = t.billing_period,
            l = t.scheduled_billing_period ?? null,
            o = new Date(t.active_until ?? ""),
            c = !t.will_renew
          if (null == i || l === i || !Number.isFinite(o.getTime()) || (c && o.getTime() <= a)) return null
          let d = n.currency_config.plus?.month,
            u = n.currency_config.plus?.year
          if (null == d || null == u || null == d.tax || null == u.tax || d.amount <= 0 || u.amount <= 0) return null
          let p = (d.amount - u.amount) * 12,
            m = p > 0 ? Math.floor(((d.amount - u.amount) / d.amount) * 100 + 1e-9) : 0
          return {
            currentCadence: i,
            scheduledCadence: l,
            effectiveNextCadence: l ?? i,
            renewalDate: o,
            requiresReactivation: c,
            billingCurrency: t.billing_currency,
            displayPricingSource: "checkout-pricing:" + n.country_code + ":" + t.billing_currency,
            monthlyPrice: { amount: d.amount, tax: d.tax },
            annualPrice: { amount: u.amount, tax: u.tax },
            annualSavingsAmount: p,
            annualSavingsPercentage: m,
            isAcquisitionCandidate:
              !0 === e.is_eligible_for_yearly_plus_existing_user_subscription && "monthly" === i && null == l && p > 0,
            isRetentionCandidate: "yearly" === i && "monthly" === l && p > 0,
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
    n.d(t, { Js: () => c, T: () => g, hh: () => u, BJ: () => p, gN: () => d, Ie: () => m.Ie })
    var a = n("laUo"),
      i = n("S2r0"),
      s = n("ASxG"),
      r = n("ufra")
    let l = s.object({ amount: s.number().nonnegative(), tax: s.enum(["inclusive", "exclusive"]).optional() }),
      o = s.object({ month: l.optional(), year: l.optional() }),
      c = s.object({
        country_code: s.string(),
        currency_config: s.object({
          symbol_code: s.string().min(1),
          minor_unit_exponent: s.number().int().nonnegative().nullish(),
          pricing_rollout_gate: s.string().nullish(),
          go: o.optional(),
          plus: o.optional(),
          prolite: o.optional(),
          pro: o.optional(),
          promax: o.optional(),
          business: o.optional(),
          business_prolite: o.optional(),
          business_non_profit: o.optional(),
        }),
      })
    function d(e, t, n) {
      let a = u(t)
      return (0, i.j)({
        queryKey: ["consumer-billing", e, "subscription-pricing", a, t?.billing_currency],
        queryFn: async ({ signal: e }) => {
          if (null == a) return null
          let i = await (0, r.e)({
              country: t?.pricing_scope === "country" ? (t.price_country ?? void 0) : void 0,
              currency: t?.billing_currency,
              isPricingEnabled: n,
              signal: e,
            }),
            s = c.safeParse(i)
          if (!s.success) return null
          let l = s.data
          return l.currency_config.symbol_code === t?.billing_currency ? l : null
        },
        enabled: null != a,
        staleTime: 0,
        retry: !1,
      })
    }
    function u(e) {
      return e?.pricing_scope === "country" && null != e.price_country
        ? e.price_country
        : e?.pricing_scope === "default" && null === e.price_country
          ? e.billing_currency
          : null
    }
    function p(e, t) {
      return (
        null != e &&
        null != u(e) &&
        t.currency_config.symbol_code === e.billing_currency &&
        ("country" !== e.pricing_scope || t.country_code === e.price_country)
      )
    }
    var m = n("smwl")
    function g(e, t, n, i = Date.now()) {
      let s = e.entitlement.discount?.discount_expires_at,
        r = e.entitlement.renews_at
      if (null == s || null == r || null == t || null == n) return
      let l = Math.ceil((Date.parse(s) - i) / 864e5),
        o = Math.ceil((Date.parse(r) - i) / 864e5)
      if (!Number.isFinite(l) || !Number.isFinite(o) || Math.abs(l - o) > 1) return
      let c = e.account.plan_type
      if (!(0, a.gx)(c)) return
      let d = t.scheduled_billing_period ?? t.billing_period ?? e.entitlement.billing_period
      if (null == d || !p(t, n)) return
      let u = "yearly" === d ? n.currency_config[c]?.year : n.currency_config[c]?.month
      if (null != u)
        return {
          amount: "yearly" === d ? Math.round(12 * u.amount) : u.amount,
          currency: t.billing_currency,
          period: d,
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
            s = (0, a.m6)(e.entitlement.scheduled_plan_change?.plan_type),
            r =
              null != n && null != s && "downgrade" === (0, a.aL)({ currentPlan: n.pricePlan, targetPlan: s.pricePlan })
          return e.entitlement.is_active_subscription_gratis ||
            "free" === t ||
            (e.last_active_subscription.will_renew && null == e.entitlement.cancels_at && !r)
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
      s = n("oyxz"),
      r = n("Wf1j")
    function l(e) {
      let t,
        n,
        l,
        o,
        c = (0, i.c)(28),
        { account: d, renewalPrice: u } = e,
        p = (0, r.A)(),
        m = d.entitlement.discount
      if (null == m) return null
      let g = d.account.plan_type,
        h = m.discount_start_in_num_periods ?? 0,
        f = d.entitlement.billing_currency ?? "USD"
      c[0] !== f || c[1] !== m.amount || c[2] !== m.discount_type || c[3] !== p
        ? ((t =
            "percentage" === m.discount_type ? m.amount : p.formatNumber(m.amount, { style: "currency", currency: f })),
          (c[0] = f),
          (c[1] = m.amount),
          (c[2] = m.discount_type),
          (c[3] = p),
          (c[4] = t))
        : (t = c[4])
      let _ = t
      c[5] !== m.discount_type || c[6] !== _ || c[7] !== h || c[8] !== g
        ? ((n = { plan: g, discountType: m.discount_type, discount: _, numPeriods: h }),
          (c[5] = m.discount_type),
          (c[6] = _),
          (c[7] = h),
          (c[8] = g),
          (c[9] = n))
        : (n = c[9])
      let y = n
      if (h > 0) {
        let e
        return (
          c[10] !== m.discount_type || c[11] !== _ || c[12] !== h || c[13] !== g
            ? ((e = (0, a.jsx)("p", {
                children: (0, a.jsx)(s.A, {
                  id: "settings.consumerBilling.futureDiscount.numberedTiers",
                  defaultMessage:
                    "Your {discount}{discountType, select, percentage {%} other {}} off {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}} discount will apply in {numPeriods, plural, one {the next billing period} other {# billing periods}}",
                  description:
                    "Billing status for a discount that starts in a future billing period. discount is a percentage number or localized currency amount, discountType selects percentage or fixed, plan is the personal plan type, and numPeriods is the number of periods until the discount starts. The Pro tier names are Pro 100, Pro 200, and Pro 500. The numbers in Pro plan names are fixed SKU names, not localized prices.",
                  values: { plan: g, discountType: m.discount_type, discount: _, numPeriods: h },
                }),
              })),
              (c[10] = m.discount_type),
              (c[11] = _),
              (c[12] = h),
              (c[13] = g),
              (c[14] = e))
            : (e = c[14]),
          e
        )
      }
      if (
        "plus" === g &&
        "students-2026-four-month-free" === m.promo_campaign_id &&
        "percentage" === m.discount_type &&
        100 === m.amount &&
        null != m.discount_expires_at &&
        Number.isFinite(Date.parse(m.discount_expires_at))
      ) {
        let e, t
        return (
          c[15] !== m.discount_expires_at || c[16] !== p
            ? ((e = p.formatDate(m.discount_expires_at, { year: "numeric", month: "short", day: "numeric" })),
              (c[15] = m.discount_expires_at),
              (c[16] = p),
              (c[17] = e))
            : (e = c[17]),
          c[18] !== e
            ? ((t = (0, a.jsx)("p", {
                children: (0, a.jsx)(s.A, {
                  id: "settings.consumerBilling.studentPlanEnd",
                  defaultMessage: "Your free student plan continues until {date}",
                  description:
                    "Billing status during the 2026 four-month free ChatGPT Plus student promotion. date is the actual localized promotion end date, not the next monthly renewal.",
                  values: { date: e },
                }),
              })),
              (c[18] = e),
              (c[19] = t))
            : (t = c[19]),
          t
        )
      }
      c[20] !== d.entitlement.renews_at || c[21] !== p
        ? ((l =
            null == d.entitlement.renews_at
              ? null
              : p.formatDate(d.entitlement.renews_at, { year: "numeric", month: "short", day: "numeric" })),
          (c[20] = d.entitlement.renews_at),
          (c[21] = p),
          (c[22] = l))
        : (l = c[22])
      let b = l
      return (
        c[23] !== b || c[24] !== p || c[25] !== u || c[26] !== y
          ? ((o = (0, a.jsx)("p", {
              children:
                null == u
                  ? (0, a.jsx)(s.A, {
                      id: "settings.consumerBilling.activeDiscount.numberedTiers",
                      defaultMessage:
                        "You've got {discount}{discountType, select, percentage {%} other {}} off {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}. Your discounted plan renews on {hasDate, select, true {{date}} other {Not available}}.",
                      description:
                        "Billing status while a discount remains applicable. discount is a percentage number or localized currency amount, discountType selects percentage or fixed, plan is the personal plan type, and date is the localized renewal date. The Pro tier names are Pro 100, Pro 200, and Pro 500. When hasDate is false, Not available is shown. The numbers in Pro plan names are fixed SKU names, not localized prices.",
                      values: { ...y, date: b ?? "", hasDate: String(null != b) },
                    })
                  : (0, a.jsx)(s.A, {
                      id: "settings.consumerBilling.discountEndingAtRenewal.numberedTiers",
                      defaultMessage:
                        "You've got {discount}{discountType, select, percentage {%} other {}} off {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}. Your plan renews (at {price}/{period, select, yearly {year} other {month}}) on {hasDate, select, true {{date}} other {Not available}}.",
                      description:
                        "Billing status when the current discount ends at renewal. discount is a percentage number or localized currency amount, discountType selects its kind, plan is the personal plan type, price is the verified localized full renewal price, period is annual or monthly, and date is the localized renewal date. The Pro tier names are Pro 100, Pro 200, and Pro 500. hasDate is false for the Not available fallback. The numbers in Pro plan names are fixed SKU names, not localized prices.",
                      values: {
                        ...y,
                        date: b ?? "",
                        hasDate: String(null != b),
                        period: u.period,
                        price: p.formatNumber(u.amount, { style: "currency", currency: u.currency }),
                      },
                    }),
            })),
            (c[23] = b),
            (c[24] = p),
            (c[25] = u),
            (c[26] = y),
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
            d,
            u = (0, i.c)(46),
            { account: p, renewalPrice: m, scheduledCadence: g } = e,
            h = (0, r.A)(),
            f = p.account.plan_type,
            _ = p.entitlement,
            y = p.last_active_subscription.will_renew
          u[0] !== h
            ? ((t = (e) => (null == e ? null : h.formatDate(e, { year: "numeric", month: "short", day: "numeric" }))),
              (u[0] = h),
              (u[1] = t))
            : (t = u[1])
          let b = t
          if ("free" === f) {
            let e
            return (
              u[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(s.A, {
                    id: "settings.consumerBilling.freePlanSubtitle",
                    defaultMessage: "Intelligence for everyday tasks",
                    description:
                      "Subtitle beneath ChatGPT Free in personal Billing settings, describing the no-cost plan.",
                  })),
                  (u[2] = e))
                : (e = u[2]),
              e
            )
          }
          if (_.is_delinquent) {
            let e
            return (
              u[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(s.A, {
                    id: "settings.consumerBilling.paymentStatusUnconfirmed",
                    defaultMessage: "There may be an issue with your payment. Check your billing details.",
                    description:
                      "Status beneath the personal plan title when a payment is marked overdue; this status may be outdated and does not establish whether paid access is paused",
                  })),
                  (u[3] = e))
                : (e = u[3]),
              e
            )
          }
          if (null != _.scheduled_plan_change) {
            let e,
              t,
              n = _.scheduled_plan_change.plan_type
            return (
              u[4] !== _.scheduled_plan_change.changes_at || u[5] !== b
                ? ((e = b(_.scheduled_plan_change.changes_at)),
                  (u[4] = _.scheduled_plan_change.changes_at),
                  (u[5] = b),
                  (u[6] = e))
                : (e = u[6]),
              u[7] !== _.scheduled_plan_change.plan_type || u[8] !== e
                ? ((t = (0, a.jsx)(s.A, {
                    id: "settings.consumerBilling.scheduledPlanChange.numberedTiers",
                    defaultMessage:
                      "Your plan changes to {plan, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {{plan}}} on {date}",
                    description:
                      "Status beneath the current personal plan in Billing settings when a different plan is scheduled. plan is the target canonical plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500. date is the localized effective date. The numbers in Pro plan names are fixed SKU names, not localized prices.",
                    values: { plan: n, date: e },
                  })),
                  (u[7] = _.scheduled_plan_change.plan_type),
                  (u[8] = e),
                  (u[9] = t))
                : (t = u[9]),
              t
            )
          }
          let x = _.renews_at ?? _.cancels_at
          u[10] !== _.cancels_at || u[11] !== _.renews_at || u[12] !== y
            ? ((n =
                y &&
                null != _.renews_at &&
                null != _.cancels_at &&
                Date.parse(_.renews_at) !== Date.parse(_.cancels_at)),
              (u[10] = _.cancels_at),
              (u[11] = _.renews_at),
              (u[12] = y),
              (u[13] = n))
            : (n = u[13])
          let v = n,
            A = null
          if (y && null != _.discount) {
            let e
            ;(u[14] !== p || u[15] !== m
              ? ((e = (0, a.jsx)(l, { account: p, renewalPrice: m })), (u[14] = p), (u[15] = m), (u[16] = e))
              : (e = u[16]),
              (A = e))
          } else if (y && null == g) {
            let e, t
            u[17] !== _.renews_at || u[18] !== b
              ? ((e = b(_.renews_at) ?? ""), (u[17] = _.renews_at), (u[18] = b), (u[19] = e))
              : (e = u[19])
            let n = String(null != _.renews_at)
            ;(u[20] !== e || u[21] !== n
              ? ((t = (0, a.jsx)("p", {
                  children: (0, a.jsx)(s.A, {
                    id: "settings.consumerBilling.planAutoRenewal",
                    defaultMessage: "Your plan auto-renews on {hasDate, select, true {{date}} other {Not available}}",
                    description:
                      "Status beneath a paid personal plan in Billing settings. date is the localized next automatic renewal date; hasDate is false when the server has not supplied it, preserving the original Not available fallback.",
                    values: { date: e, hasDate: n },
                  }),
                })),
                (u[20] = e),
                (u[21] = n),
                (u[22] = t))
              : (t = u[22]),
              (A = t))
          } else if (y || (null == _.renews_at && (null != _.expires_at || null == x))) {
            if (!y && null != _.expires_at) {
              let e, t
              ;(u[29] !== _.expires_at || u[30] !== b
                ? ((e = b(_.expires_at)), (u[29] = _.expires_at), (u[30] = b), (u[31] = e))
                : (e = u[31]),
                u[32] !== e
                  ? ((t = (0, a.jsx)("p", {
                      children: (0, a.jsx)(s.A, {
                        id: "settings.consumerBilling.planExpires",
                        defaultMessage: "Your plan will expire on {date}",
                        description:
                          "Status beneath a personal paid or granted plan in Billing settings when its entitlement expires without renewal. date is the localized expiration date.",
                        values: { date: e },
                      }),
                    })),
                    (u[32] = e),
                    (u[33] = t))
                  : (t = u[33]),
                (A = t))
            }
          } else {
            let e, t
            ;(u[23] !== x || u[24] !== b ? ((e = b(x)), (u[23] = x), (u[24] = b), (u[25] = e)) : (e = u[25]),
              u[26] !== f || u[27] !== e
                ? ((t = (0, a.jsx)("p", {
                    children: (0, a.jsx)(s.A, {
                      id: "settings.consumerBilling.planCanceledWithAccess.numberedTiers",
                      defaultMessage:
                        "Your plan is canceled and won't renew. You'll continue to have access to ChatGPT {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {{plan}}} until {date}",
                      description:
                        "Cancellation confirmation beneath a personal paid plan in Billing settings. Renewal is off while access continues until date, the localized final-access date. plan is the persisted paid plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500. The numbers in Pro plan names are fixed SKU names, not localized prices.",
                      values: { plan: f, date: e },
                    }),
                  })),
                  (u[26] = f),
                  (u[27] = e),
                  (u[28] = t))
                : (t = u[28]),
              (A = t))
          }
          return (
            u[34] !== h || u[35] !== g || u[36] !== y
              ? ((o =
                  null != g && y
                    ? (0, a.jsx)("p", {
                        children: (0, a.jsx)(s.A, {
                          id: "settings.consumerBilling.scheduledBillingCadence",
                          defaultMessage:
                            "Changes to {period, select, yearly {annual} other {monthly}} billing on {date}",
                          description:
                            "Status beneath ChatGPT Plus in Billing settings after a future billing-frequency change is scheduled. period selects annual or monthly; date is the localized next renewal date.",
                          values: {
                            period: g.period,
                            date: h.formatDate(g.date, { year: "numeric", month: "long", day: "numeric" }),
                          },
                        }),
                      })
                    : null),
                (u[34] = h),
                (u[35] = g),
                (u[36] = y),
                (u[37] = o))
              : (o = u[37]),
            u[38] !== _.cancels_at || u[39] !== b || u[40] !== v
              ? ((c = v
                  ? (0, a.jsx)("p", {
                      children: (0, a.jsx)(s.A, {
                        id: "settings.consumerBilling.paidPlanScheduledCancellation",
                        defaultMessage: "Your paid plan will downgrade to ChatGPT free on {date}",
                        description:
                          "Additional Billing status when a paid plan will renew at least once before a later scheduled cancellation. date is the localized final downgrade date.",
                        values: { date: b(_.cancels_at) },
                      }),
                    })
                  : null),
                (u[38] = _.cancels_at),
                (u[39] = b),
                (u[40] = v),
                (u[41] = c))
              : (c = u[41]),
            u[42] !== A || u[43] !== o || u[44] !== c
              ? ((d = (0, a.jsxs)(a.Fragment, { children: [o, A, c] })),
                (u[42] = A),
                (u[43] = o),
                (u[44] = c),
                (u[45] = d))
              : (d = u[45]),
            d
          )
        },
        u: function (e) {
          let t,
            n = (0, i.c)(2),
            { plan: r } = e
          return (
            n[0] !== r
              ? ((t = (0, a.jsx)(s.A, {
                  id: "settings.consumerBilling.planName.numberedTiers",
                  defaultMessage:
                    "ChatGPT {plan, select, free {Free} go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}}",
                  description:
                    "Current personal plan title in Billing settings. plan is the persisted account plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500 regardless of which plans are currently available to buy. ChatGPT, Go, Plus, and Pro are product names. The numbers in Pro plan names are fixed SKU names, not localized prices.",
                  values: { plan: r },
                })),
                (n[0] = r),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  wbWw(e, t, n) {
    var a = n("S2r0"),
      i = n("WFY2"),
      s = n("HFSu"),
      r = n("p3vI")
    n.d(
      t,
      { r_: () => r.r },
      {
        fI: async function (e, t) {
          await Promise.all([
            e.queryClient.invalidateQueries({ queryKey: ["consumer-billing", t] }),
            e.queryClient.invalidateQueries({ queryKey: ["accounts"] }),
            e.queryClient.invalidateQueries({ queryKey: ["usage-settings"] }),
          ])
        },
        wm: function (e) {
          return (0, a.j)({
            queryKey: ["consumer-billing", e, "billing-info"],
            queryFn: async ({ signal: t }) => {
              let n = await s.CodexRequest.safeGet("/payments/billing_info", {
                parameters: { query: { account_id: e } },
                signal: t,
              })
              if (void 0 === n.tax_ids)
                throw (
                  i.v.warning("billing_information.load_failed", { safe: { reason: "tax_ids_unavailable" } }),
                  Error("Billing information is missing tax IDs")
                )
              return { ...n, tax_ids: n.tax_ids }
            },
            staleTime: 0,
            retry: !1,
          })
        },
      },
    )
  },
  Mu1y(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("oyxz"),
      r = n("ygO2")
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            l,
            o = (0, i.c)(4),
            { onRetry: c } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(s.A, {
                  id: "settings.consumerBilling.loadError",
                  defaultMessage: "Unable to load billing information. Please try again.",
                  description:
                    "Error shown in a consumer Billing settings section when its data request fails. The adjacent Retry button retries that section.",
                })),
                (o[0] = t))
              : (t = o[0]),
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)(s.A, {
                  id: "settings.consumerBilling.retry",
                  defaultMessage: "Retry",
                  description: "Button that retries a failed request in consumer Billing settings",
                })),
                (o[1] = n))
              : (n = o[1]),
            o[2] !== c
              ? ((l = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 text-sm text-warning",
                  role: "alert",
                  children: [t, (0, a.jsx)(r.$, { color: "secondary", size: "toolbar", onClick: c, children: n })],
                })),
                (o[2] = c),
                (o[3] = l))
              : (l = o[3]),
            l
          )
        },
      },
    )
  },
  m39z(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("Ga8Y"),
      r = n("zd8w"),
      l = n("Wf1j"),
      o = n("oyxz"),
      c = n("ygO2"),
      d = n("Xpvt"),
      u = n("ZZgR"),
      p = n("mUDD"),
      m = n("GO7r"),
      g = n("zLIa")
    function h(e, t) {
      return _(e.type).localeCompare(_(t.type))
    }
    function f(e) {
      let t,
        n,
        s = (0, i.c)(4),
        { country: r } = e
      s[0] !== r ? ((t = r.toLowerCase()), (s[0] = r), (s[1] = t)) : (t = s[1])
      let l = `https://persistent.oaistatic.com/sonic/flags/${t}.png`
      return (
        s[2] !== l
          ? ((n = (0, a.jsx)("img", { src: l, alt: "", className: "size-4 shrink-0" })), (s[2] = l), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    function _(e) {
      switch (e) {
        case "ca_gst_hst":
          return "CA GST/HST"
        case "ca_pst_bc":
          return "CA PST-BC"
        case "ca_pst_mb":
          return "CA PST-MB"
        case "ca_pst_sk":
          return "CA PST-SK"
        default:
          return e.replace("_", " ").toUpperCase()
      }
    }
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            y,
            b,
            x,
            v,
            A = (0, i.c)(50),
            {
              available: T,
              selected: w,
              taxId: N,
              enabled: j,
              disabled: I,
              showErrors: E,
              businessName: S,
              compact: C,
              onRemove: P,
              onEnabledChange: B,
              onChange: M,
            } = e,
            k = void 0 !== C && C,
            L = (0, l.A)(),
            G = (0, r.useId)(),
            O = (0, r.useId)(),
            D = (0, r.useId)(),
            R = (0, r.useId)(),
            H = (0, r.useId)(),
            U = (0, r.useId)(),
            z = (0, r.useId)(),
            W = (0, r.useId)(),
            [F, q] = (0, r.useState)(!1),
            [K, Y] = (0, r.useState)(""),
            [V, $] = (0, r.useState)(null),
            Z = T[0]
          if (null == Z) return null
          A[0] !== L
            ? ((t = L.formatMessage({
                id: "settings.consumerBilling.taxTypeLabel",
                defaultMessage: "Tax type",
                description:
                  "Label for the tax identification scheme selector in the consumer billing-information editor",
              })),
              (A[0] = L),
              (A[1] = t))
            : (t = A[1])
          let Q = t
          A[2] !== L
            ? ((n = L.formatMessage({
                id: "settings.consumerBilling.searchTaxTypes",
                defaultMessage: "Search tax types",
                description:
                  "Accessible label and placeholder for filtering supported tax identification schemes in the billing-information editor",
              })),
              (A[2] = L),
              (A[3] = n))
            : (n = A[3])
          let X = n
          if (
            A[4] !== T ||
            A[5] !== S ||
            A[6] !== U ||
            A[7] !== H ||
            A[8] !== G ||
            A[9] !== k ||
            A[10] !== I ||
            A[11] !== j ||
            A[12] !== Z ||
            A[13] !== R ||
            A[14] !== L ||
            A[15] !== D ||
            A[16] !== M ||
            A[17] !== B ||
            A[18] !== P ||
            A[19] !== F ||
            A[20] !== V ||
            A[21] !== K ||
            A[22] !== X ||
            A[23] !== w ||
            A[24] !== E ||
            A[25] !== N?.value ||
            A[26] !== z ||
            A[27] !== O ||
            A[28] !== Q ||
            A[29] !== W
          ) {
            let e,
              t,
              n = K.trim().toLocaleLowerCase(),
              i = T.filter((e) => `${_(e.type)} ${e.description}`.toLocaleLowerCase().includes(n)).sort(h),
              r = E && null == w
            A[33] !== w?.type || A[34] !== E || A[35] !== N?.value
              ? ((e = E && !(0, s.Gm)(w?.type, N?.value ?? "")),
                (A[33] = w?.type),
                (A[34] = E),
                (A[35] = N?.value),
                (A[36] = e))
              : (e = A[36])
            let l = e
            A[37] !== S?.value || A[38] !== E
              ? ((t = E && !S?.value.trim()), (A[37] = S?.value), (A[38] = E), (A[39] = t))
              : (t = A[39])
            let v = t
            ;((y = k ? "flex items-start gap-2" : "flex flex-col gap-3"),
              A[40] !== G || A[41] !== k || A[42] !== I || A[43] !== j || A[44] !== B
                ? ((b = k
                    ? null
                    : (0, a.jsxs)(p.fh, {
                        children: [
                          (0, a.jsx)(d.S, { id: G, checked: j, disabled: I, onCheckedChange: (e) => B?.(!0 === e) }),
                          (0, a.jsx)("label", {
                            className: "text-sm font-medium text-default select-none",
                            htmlFor: G,
                            children: (0, a.jsx)(o.A, {
                              id: "settings.consumerBilling.taxIdEnabled",
                              defaultMessage: "Add tax ID",
                              description: "Checkbox enabling business tax identification on personal billing invoices",
                            }),
                          }),
                        ],
                      })),
                  (A[40] = G),
                  (A[41] = k),
                  (A[42] = I),
                  (A[43] = j),
                  (A[44] = B),
                  (A[45] = b))
                : (b = A[45]),
              (x = j
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      null != S
                        ? (0, a.jsxs)(p.RW, {
                            children: [
                              (0, a.jsx)("label", {
                                className: "text-sm font-medium text-default select-none",
                                htmlFor: H,
                                children: (0, a.jsx)(o.A, {
                                  id: "settings.consumerBilling.businessName",
                                  defaultMessage: "Business name",
                                  description:
                                    "Label for the legal business name associated with a tax identification number on billing invoices",
                                }),
                              }),
                              (0, a.jsx)(g.pd, {
                                id: H,
                                name: "business-name",
                                autoComplete: "organization",
                                "aria-required": !0,
                                "aria-invalid": v,
                                "aria-describedby": v ? U : void 0,
                                disabled: I,
                                value: S.value,
                                onChange: (e) => S.onChange(e.target.value),
                              }),
                              v
                                ? (0, a.jsx)("p", {
                                    id: U,
                                    role: "alert",
                                    className: "text-sm text-danger",
                                    children: (0, a.jsx)(o.A, {
                                      id: "settings.consumerBilling.businessNameRequired",
                                      defaultMessage: "Business name is required",
                                      description:
                                        "Validation when tax identification is enabled but the legal business name for billing invoices is empty",
                                    }),
                                  })
                                : null,
                            ],
                          })
                        : null,
                      (0, a.jsxs)(p.RW, {
                        className: k ? "min-w-0 flex-1" : void 0,
                        children: [
                          (0, a.jsx)("label", {
                            className: "text-sm font-medium text-default select-none",
                            htmlFor: O,
                            children: (0, a.jsx)(o.A, {
                              id: "settings.consumerBilling.taxTypeLabel",
                              defaultMessage: "Tax type",
                              description:
                                "Label for the tax identification scheme selector in the consumer billing-information editor",
                            }),
                          }),
                          (0, a.jsx)(u.A, {
                            portalContainer: V,
                            disabled: I,
                            open: F,
                            onOpenChange: (e) => {
                              ;(q(e), e && Y(""))
                            },
                            contentClassName: "w-[var(--radix-popover-trigger-width)]",
                            contentMaxHeight: "tall",
                            triggerButton: (0, a.jsxs)(c.$, {
                              id: O,
                              ref: (e) => $(e?.closest("[data-stripe-checkout-dialog]") ?? null),
                              type: "button",
                              color: "outline",
                              size: "dialog",
                              radius: "small",
                              className: "w-full justify-between",
                              role: "combobox",
                              "aria-label": Q,
                              "aria-expanded": F,
                              "aria-haspopup": "listbox",
                              "aria-controls": F ? D : void 0,
                              "aria-invalid": r,
                              "aria-describedby": r ? z : void 0,
                              disabled: I,
                              children: [
                                (0, a.jsxs)("span", {
                                  className: k ? "flex min-w-0 items-center gap-2" : "truncate",
                                  children: [
                                    k && null != w ? (0, a.jsx)(f, { country: w.country }) : null,
                                    (0, a.jsx)("span", { className: "truncate", children: null == w ? Q : _(w.type) }),
                                  ],
                                }),
                                (0, a.jsx)(m.Aq_, {}),
                              ],
                            }),
                            children: (0, a.jsxs)(u.G.Root, {
                              label: Q,
                              children: [
                                (0, a.jsx)(u.G.Input, { "aria-label": X, placeholder: X, value: K, onValueChange: Y }),
                                (0, a.jsxs)(u.G.List, {
                                  id: D,
                                  children: [
                                    i.map((e) =>
                                      (0, a.jsx)(
                                        u.G.Item,
                                        {
                                          value: e.type,
                                          rightIcon: e.type === w?.type ? (0, a.jsx)(m.ALZ, {}) : void 0,
                                          onSelect: () => {
                                            ;(M({
                                              type: e.stripe_type,
                                              country: e.country,
                                              country_specific_type: e.type,
                                              value: k && w?.type !== e.type ? "" : (N?.value ?? ""),
                                            }),
                                              q(!1))
                                          },
                                          children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, a.jsxs)("span", {
                                                className: k ? "flex items-center gap-2 font-medium" : "font-medium",
                                                children: [k ? (0, a.jsx)(f, { country: e.country }) : null, _(e.type)],
                                              }),
                                              (0, a.jsx)("span", {
                                                className: "text-secondary",
                                                children: e.description,
                                              }),
                                            ],
                                          }),
                                        },
                                        e.type,
                                      ),
                                    ),
                                    0 === i.length
                                      ? (0, a.jsx)("p", {
                                          role: "status",
                                          className: "p-3 text-sm text-secondary",
                                          children: (0, a.jsx)(o.A, {
                                            id: "settings.consumerBilling.noMatchingTaxTypes",
                                            defaultMessage: "No matching tax types",
                                            description:
                                              "Empty search result in the consumer billing editor's tax identification scheme selector",
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }),
                          }),
                          r
                            ? (0, a.jsx)("p", {
                                id: z,
                                role: "alert",
                                className: "text-sm text-danger",
                                children: (0, a.jsx)(o.A, {
                                  id: "settings.consumerBilling.taxIdTypeRequired",
                                  defaultMessage: "Please select a tax ID type",
                                  description:
                                    "Validation in the consumer billing editor when tax identification is enabled but its scheme is missing",
                                }),
                              })
                            : null,
                        ],
                      }),
                      (0, a.jsxs)(p.RW, {
                        className: k ? "min-w-0 flex-1" : void 0,
                        children: [
                          (0, a.jsx)("label", {
                            className: "text-sm font-medium text-default select-none",
                            htmlFor: R,
                            children: (0, a.jsx)(o.A, {
                              id: "settings.consumerBilling.taxId",
                              defaultMessage: "Tax ID",
                              description:
                                "Label for the business tax identification number on consumer billing invoices",
                            }),
                          }),
                          (0, a.jsx)(g.pd, {
                            id: R,
                            name: "tax-id",
                            autoComplete: "off",
                            "aria-required": !0,
                            "aria-invalid": l,
                            "aria-describedby": l ? W : void 0,
                            disabled: I,
                            value: N?.value ?? "",
                            placeholder:
                              w?.placeholder ??
                              L.formatMessage({
                                id: "settings.consumerBilling.taxId",
                                defaultMessage: "Tax ID",
                                description:
                                  "Label for the business tax identification number on consumer billing invoices",
                              }),
                            onChange: (e) => {
                              let t = w ?? Z
                              M({
                                type: t.stripe_type,
                                country: t.country,
                                country_specific_type: t.type,
                                value: e.target.value,
                              })
                            },
                          }),
                          l
                            ? (0, a.jsx)("p", {
                                id: W,
                                role: "alert",
                                className: "text-sm text-danger",
                                children: N?.value.trim()
                                  ? (0, a.jsx)(o.A, { ...s.zf })
                                  : (0, a.jsx)(o.A, {
                                      id: "settings.consumerBilling.taxIdRequired",
                                      defaultMessage: "Tax ID is required",
                                      description:
                                        "Validation in the consumer billing editor when tax identification is enabled but its number is empty",
                                    }),
                              })
                            : null,
                        ],
                      }),
                      null != P
                        ? (0, a.jsxs)(p.RW, {
                            children: [
                              (0, a.jsx)("span", { className: "h-5", "aria-hidden": "true" }),
                              (0, a.jsx)(c.$, {
                                color: "ghostDanger",
                                size: "iconCircle",
                                type: "button",
                                disabled: I,
                                "aria-label": L.formatMessage({
                                  id: "settings.consumerBilling.removeTaxId",
                                  defaultMessage: "Remove tax ID",
                                  description:
                                    "Button removing one tax identification row from the billing information draft",
                                }),
                                onClick: P,
                                children: (0, a.jsx)(m.cSG, {}),
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : null),
              (A[4] = T),
              (A[5] = S),
              (A[6] = U),
              (A[7] = H),
              (A[8] = G),
              (A[9] = k),
              (A[10] = I),
              (A[11] = j),
              (A[12] = Z),
              (A[13] = R),
              (A[14] = L),
              (A[15] = D),
              (A[16] = M),
              (A[17] = B),
              (A[18] = P),
              (A[19] = F),
              (A[20] = V),
              (A[21] = K),
              (A[22] = X),
              (A[23] = w),
              (A[24] = E),
              (A[25] = N?.value),
              (A[26] = z),
              (A[27] = O),
              (A[28] = Q),
              (A[29] = W),
              (A[30] = y),
              (A[31] = b),
              (A[32] = x))
          } else ((y = A[30]), (b = A[31]), (x = A[32]))
          return (
            A[46] !== y || A[47] !== b || A[48] !== x
              ? ((v = (0, a.jsxs)("div", { className: y, children: [b, x] })),
                (A[46] = y),
                (A[47] = b),
                (A[48] = x),
                (A[49] = v))
              : (v = A[49]),
            v
          )
        },
      },
    )
  },
  rP7y(e, t, n) {
    var a = n("Ga8Y"),
      i = n("ASxG")
    let s = i.object({
        type: i.string(),
        stripe_type: i.string(),
        country: i.string(),
        region: i.string(),
        supported: i.boolean(),
        description: i.string(),
        placeholder: i
          .string()
          .nullish()
          .transform((e) => e ?? void 0),
      }),
      r = i.record(i.string(), s)
    function l(e) {
      let t = r.safeParse(e)
      return t.success ? Object.values(t.data) : null
    }
    function o(e, t) {
      return (0, a.LO)(t, e) ?? void 0
    }
    n.d(
      t,
      {},
      {
        H2: function (e, t, n) {
          return (null == t ? void 0 : o(e, t)) ?? e.find((e) => e.country === n) ?? e[0]
        },
        Ts: l,
        fR: function (e) {
          return null == e || r.safeParse(e).success
            ? null
            : "object" != typeof e || Array.isArray(e)
              ? "malformed_tax_types"
              : "malformed_tax_type_entry"
        },
        oj: function (e, t) {
          let n = l(t)
          return null == n ? [] : (0, a.im)(e, n)
        },
        wW: o,
        zF: r,
      },
    )
  },
  DV75(e, t, n) {
    var a = n("WFY2"),
      i = n("Kw4a")
    n.d(
      t,
      {},
      {
        r: async function (e) {
          if (e.get(i.vy))
            try {
              let [{ provisionSpaceWelcomePage: t }, { spaceIntroductionIdentity$: a, syncSpaceIntroductionSeen: s }] =
                await Promise.all([
                  Promise.all([
                    n.e(702243),
                    n.e(310423),
                    n.e(380245),
                    n.e(398689),
                    n.e(730496),
                    n.e(340985),
                    n.e(656792),
                    n.e(316494),
                    n.e(785384),
                  ]).then(n.bind(n, "pyo2")),
                  Promise.all([
                    n.e(702243),
                    n.e(310423),
                    n.e(380245),
                    n.e(398689),
                    n.e(730496),
                    n.e(340985),
                    n.e(656792),
                    n.e(316494),
                    n.e(913986),
                  ]).then(n.bind(n, "I8SU")),
                ])
              await Promise.all([t(e), e.when(({ get: e }) => null != e(a) || !e(i.vy)).then(() => s(e))])
            } catch {
              a.v.warning("Failed to prepare Space onboarding")
            }
        },
      },
    )
  },
  jxU8(e, t, n) {
    n.d(t, { P: () => h, Y: () => f })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      r = n("zd8w"),
      l = n("bJfu"),
      o = n("qbQ6"),
      c = n("GK7D"),
      d = n("PkPj"),
      u = n("DiyT"),
      p = n("ibLK"),
      m = n("V8uZ"),
      g = n("oFmV")
    function h(e) {
      let t,
        n,
        h,
        f,
        _,
        y,
        b,
        x,
        v,
        A,
        T,
        w,
        N,
        j,
        I,
        E,
        S,
        C,
        P,
        B,
        M,
        k,
        L,
        G,
        O,
        D,
        R,
        H,
        U,
        z,
        W,
        F,
        q,
        K,
        Y,
        V,
        $,
        Z,
        Q,
        X,
        J,
        ee,
        et,
        en,
        ea = (0, i.c)(120)
      ea[0] !== e
        ? (({
            title: C,
            asset: n,
            backSlot: h,
            subtitle: N,
            children: f,
            fullWidth: I,
            contentClassName: y,
            subtitleClassName: j,
            action: t,
            toolbarActions: P,
            stickyControls: w,
            footer: x,
            embedded: E,
            density: b,
            scrollResetKey: T,
            containTouchOverscroll: S,
            ref: v,
            className: _,
            ...A
          } = e),
          (ea[0] = e),
          (ea[1] = t),
          (ea[2] = n),
          (ea[3] = h),
          (ea[4] = f),
          (ea[5] = _),
          (ea[6] = y),
          (ea[7] = b),
          (ea[8] = x),
          (ea[9] = v),
          (ea[10] = A),
          (ea[11] = T),
          (ea[12] = w),
          (ea[13] = N),
          (ea[14] = j),
          (ea[15] = I),
          (ea[16] = E),
          (ea[17] = S),
          (ea[18] = C),
          (ea[19] = P))
        : ((t = ea[1]),
          (n = ea[2]),
          (h = ea[3]),
          (f = ea[4]),
          (_ = ea[5]),
          (y = ea[6]),
          (b = ea[7]),
          (x = ea[8]),
          (v = ea[9]),
          (A = ea[10]),
          (T = ea[11]),
          (w = ea[12]),
          (N = ea[13]),
          (j = ea[14]),
          (I = ea[15]),
          (E = ea[16]),
          (S = ea[17]),
          (C = ea[18]),
          (P = ea[19]))
      let ei = void 0 !== I && I,
        es = void 0 !== E && E,
        er = void 0 !== S && S,
        el = b ?? "default",
        eo = (0, r.useRef)(null),
        ec = (0, r.useRef)(null),
        ed = er && !es && !1
      ;((et = (0, i.c)(4)),
        (en = (0, p.U)(ed ? "(pointer: coarse)" : null)),
        et[0] !== en || et[1] !== ec
          ? ((J = () => {
              let e = ec.current
              if (!en || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let n = e.closest("[data-app-shell-frame]") ?? e,
                a = e.closest("[data-app-shell-main-surface]"),
                i = null,
                s = 0,
                r = () => {
                  i = null
                },
                l = (t) => {
                  let n = t.touches[0]
                  if (1 !== t.touches.length || null == n) return void r()
                  let l = t.composedPath().includes(e),
                    o = t.target,
                    c =
                      o instanceof Element &&
                      ((o.contains(e) && a?.contains(o)) || null != o.closest("[data-app-shell-main-titlebar]"))
                  l || c ? ((i = { x: n.clientX, y: n.clientY, inPanel: l }), (s = n.clientY)) : r()
                },
                o = (t) => {
                  let a = t.touches[0]
                  if (1 !== t.touches.length || null == a || null == i) return void r()
                  let l = a.clientY > s
                  if (
                    ((s = a.clientY),
                    !(!t.cancelable || !l || a.clientY - i.y <= Math.abs(a.clientX - i.x)) &&
                      (!i.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let a of t.composedPath()) {
                      if (a === e || a === n) break
                      if (
                        a instanceof HTMLElement &&
                        a.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(a).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                c = { capture: !0, passive: !0 }
              return (
                n.addEventListener("touchstart", l, c),
                n.addEventListener("touchmove", o, { capture: !0, passive: !1 }),
                n.addEventListener("touchend", r, c),
                n.addEventListener("touchcancel", r, c),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    n.removeEventListener("touchstart", l, !0),
                    n.removeEventListener("touchmove", o, !0),
                    n.removeEventListener("touchend", r, !0),
                    n.removeEventListener("touchcancel", r, !0))
                }
              )
            }),
            (ee = [en, ec]),
            (et[0] = en),
            (et[1] = ec),
            (et[2] = J),
            (et[3] = ee))
          : ((J = et[2]), (ee = et[3])),
        (0, r.useEffect)(J, ee))
      let [eu, ep] = (0, r.useState)(!1),
        em = (0, r.useContext)(g.S),
        eg = !!em?.slateLayout && !es
      ;(0, p.U)(o.mk)
      let eh = eg && !1,
        ef = em?.targetId ?? null,
        e_ = em?.targetText ?? null,
        ey = em?.navigationKey ?? null
      ;(ea[20] !== T
        ? ((B = () => {
            null != T && null != ec.current && (ec.current.scrollTop = 0)
          }),
          (M = [T]),
          (ea[20] = T),
          (ea[21] = B),
          (ea[22] = M))
        : ((B = ea[21]), (M = ea[22])),
        (0, r.useLayoutEffect)(B, M),
        ea[23] !== ef || ea[24] !== e_
          ? ((k = () => {
              let e, t
              if (null == ef && null == e_) return
              let n = eo.current
              if (null == n) return
              let a = () => {
                  if (null == e_) return null == ef ? null : document.getElementById(ef)
                  let e = e_.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    a = null
                  for (let i of n.querySelectorAll("*")) {
                    let n = (i.getAttribute("placeholder") ?? i.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == n ||
                      !t.every((e) => n.includes(e)) ||
                      null != i.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let s = n.includes(e)
                    ;(null == a || (s && !a.isContiguous) || (s === a.isContiguous && n.length <= a.text.length)) &&
                      (a = { element: i, isContiguous: s, text: n })
                  }
                  return a?.element ?? null
                },
                i = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == e_)) return
                  let a = "true" === document.documentElement.dataset.reducedMotion,
                    i = t.closest("button"),
                    s = i?.parentElement ?? t
                  if (null == i) {
                    let e = t.closest("section")
                    for (let a = t.parentElement; null != a && a !== e && a !== n; a = a.parentElement)
                      if (
                        Array.from(a.children).some(
                          (e) =>
                            !e.contains(t) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        s = a
                        break
                      }
                  }
                  e = s.animate?.(
                    a
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${m.Wu.join(", ")})` },
                  )
                },
                s =
                  null == e_
                    ? new ResizeObserver(() => {
                        let e = a()
                        null != e && i(e)
                      })
                    : null,
                r = () => {
                  for (let e of (t?.disconnect(), s?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    n.ownerDocument.removeEventListener(e, r)
                }
              if (null != s)
                for (let e of (s.observe(n), ["wheel", "pointerdown", "keydown"]))
                  n.ownerDocument.addEventListener(e, r, { passive: !0 })
              let l = a()
              return (
                null != l
                  ? i(l)
                  : (t = new MutationObserver(() => {
                      let e = a()
                      null != e && (i(e), t?.disconnect())
                    })).observe(null == e_ ? document.body : n, { childList: !0, subtree: !0 }),
                () => {
                  ;(r(), e?.cancel())
                }
              )
            }),
            (ea[23] = ef),
            (ea[24] = e_),
            (ea[25] = k))
          : (k = ea[25]),
        ea[26] !== ey || ea[27] !== ef || ea[28] !== e_
          ? ((L = [ey, ef, e_]), (ea[26] = ey), (ea[27] = ef), (ea[28] = e_), (ea[29] = L))
          : (L = ea[29]),
        (0, r.useLayoutEffect)(k, L),
        ea[30] !== P
          ? ((G =
              null == P
                ? null
                : (0, a.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: P,
                  })),
            (ea[30] = P),
            (ea[31] = G))
          : (G = ea[31]),
        ea[32] !== h || ea[33] !== G
          ? ((O = (0, a.jsxs)(a.Fragment, { children: [h, G] })), (ea[32] = h), (ea[33] = G), (ea[34] = O))
          : (O = ea[34]))
      let eb = O,
        ex = es ? "default" : "settings"
      "compact" === el && (ex = "settingsCompact")
      let ev = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        eA =
          "default" === b &&
          (es && !ei ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eT = ei ? null : es ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(ea[35] !== y || ea[36] !== w || ea[37] !== ev || ea[38] !== eA || ea[39] !== eT || ea[40] !== eg
        ? ((D = (0, s.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            eA,
            eT,
            eg && ["px-panel pb-panel", null == w && "pt-panel"],
            y,
          )),
          (ea[35] = y),
          (ea[36] = w),
          (ea[37] = ev),
          (ea[38] = eA),
          (ea[39] = eT),
          (ea[40] = eg),
          (ea[41] = D))
        : (D = ea[41]),
        ea[42] !== t ||
        ea[43] !== n ||
        ea[44] !== el ||
        ea[45] !== es ||
        ea[46] !== ex ||
        ea[47] !== N ||
        ea[48] !== j ||
        ea[49] !== C ||
        ea[50] !== eg
          ? ((R =
              null == C || eg
                ? null
                : (0, a.jsx)("div", {
                    className: (0, s.A)("compact" === el && "pb-5.5", "default" === el && (es ? "pb-panel" : "pb-8")),
                    children: (0, a.jsx)(c.z, {
                      actions: t,
                      asset: n,
                      subtitle: N,
                      subtitleClassName: (0, s.A)("text-balance", j),
                      title: C,
                      variant: ex,
                    }),
                  })),
            (ea[42] = t),
            (ea[43] = n),
            (ea[44] = el),
            (ea[45] = es),
            (ea[46] = ex),
            (ea[47] = N),
            (ea[48] = j),
            (ea[49] = C),
            (ea[50] = eg),
            (ea[51] = R))
          : (R = ea[51]),
        ea[52] !== w
          ? ((H = null == w ? null : (0, a.jsx)(d.J1, { className: "top-0 pt-panel pb-2", children: w })),
            (ea[52] = w),
            (ea[53] = H))
          : (H = ea[53]))
      let ew =
          es && !ei
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eN = null != w && "pt-5"
      ;(ea[54] !== ew || ea[55] !== eN
        ? ((U = (0, s.A)("flex flex-col", ew, eN)), (ea[54] = ew), (ea[55] = eN), (ea[56] = U))
        : (U = ea[56]),
        ea[57] !== f || ea[58] !== U
          ? ((z = (0, a.jsx)("div", { className: U, children: f })), (ea[57] = f), (ea[58] = U), (ea[59] = z))
          : (z = ea[59]),
        ea[60] !== el || ea[61] !== D || ea[62] !== R || ea[63] !== H || ea[64] !== z
          ? ((W = (0, a.jsxs)("div", { ref: eo, className: D, "data-density": el, children: [R, H, z] })),
            (ea[60] = el),
            (ea[61] = D),
            (ea[62] = R),
            (ea[63] = H),
            (ea[64] = z),
            (ea[65] = W))
          : (W = ea[65]))
      let ej = W
      if (es) {
        let e, t, n
        return (
          ea[66] !== _ ? ((e = (0, s.A)("flex min-h-0 flex-col", _)), (ea[66] = _), (ea[67] = e)) : (e = ea[67]),
          ea[68] !== h || ea[69] !== eb || ea[70] !== P
            ? ((t =
                null != h || null != P
                  ? (0, a.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (ea[68] = h),
              (ea[69] = eb),
              (ea[70] = P),
              (ea[71] = t))
            : (t = ea[71]),
          ea[72] !== ej || ea[73] !== v || ea[74] !== A || ea[75] !== e || ea[76] !== t
            ? ((n = (0, a.jsxs)("div", { ref: v, className: e, ...A, children: [t, ej] })),
              (ea[72] = ej),
              (ea[73] = v),
              (ea[74] = A),
              (ea[75] = e),
              (ea[76] = t),
              (ea[77] = n))
            : (n = ea[77]),
          n
        )
      }
      ;(ea[78] !== _
        ? ((F = (0, s.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            _,
          )),
          (ea[78] = _),
          (ea[79] = F))
        : (F = ea[79]),
        ea[80] !== C || ea[81] !== eh
          ? ((q = eh
              ? (0, a.jsx)(l.G.Header, {
                  divider: !1,
                  children: (0, a.jsx)(l.G.HeaderToolbar, {
                    children: (0, a.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: C,
                    }),
                  }),
                })
              : null),
            (ea[80] = C),
            (ea[81] = eh),
            (ea[82] = q))
          : (q = ea[82]),
        ea[83] !== h || ea[84] !== eb || ea[85] !== P || ea[86] !== eg
          ? ((K =
              eg && null == h && null == P
                ? null
                : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (ea[83] = h),
            (ea[84] = eb),
            (ea[85] = P),
            (ea[86] = eg),
            (ea[87] = K))
          : (K = ea[87]))
      let eI = ed || void 0,
        eE = eh ? eu : void 0,
        eS = eh || void 0
      ea[88] !== eh
        ? ((Y = eh ? (e) => ep(e.currentTarget.scrollTop > 0) : void 0), (ea[88] = eh), (ea[89] = Y))
        : (Y = ea[89])
      let eC = !eg && "p-panel"
      return (
        ea[90] !== eC
          ? ((V = (0, s.A)("flex-1 scrollbar-stable overflow-y-auto", eC)), (ea[90] = eC), (ea[91] = V))
          : (V = ea[91]),
        ea[92] !== t ||
        ea[93] !== n ||
        ea[94] !== el ||
        ea[95] !== ei ||
        ea[96] !== N ||
        ea[97] !== j ||
        ea[98] !== C ||
        ea[99] !== eh ||
        ea[100] !== eg
          ? (($ =
              null == C || !eg || eh
                ? null
                : (0, a.jsx)(u.g, {
                    className: ei ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, a.jsxs)(a.Fragment, {
                      children: [
                        null == n ? null : (0, a.jsx)("div", { className: "flex", children: n }),
                        (0, a.jsx)("h1", {
                          className: (0, s.A)("text-default", "compact" === el ? "heading-lg" : "heading-xl"),
                          children: C,
                        }),
                        null == N
                          ? null
                          : (0, a.jsx)("div", {
                              className: (0, s.A)("text-base leading-6 text-balance text-secondary", j),
                              children: N,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, a.jsx)(u.T, { search: null, actions: t }),
                  })),
            (ea[92] = t),
            (ea[93] = n),
            (ea[94] = el),
            (ea[95] = ei),
            (ea[96] = N),
            (ea[97] = j),
            (ea[98] = C),
            (ea[99] = eh),
            (ea[100] = eg),
            (ea[101] = $))
          : ($ = ea[101]),
        ea[102] !== ej ||
        ea[103] !== eI ||
        ea[104] !== eE ||
        ea[105] !== eS ||
        ea[106] !== Y ||
        ea[107] !== V ||
        ea[108] !== $
          ? ((Z = (0, a.jsxs)("div", {
              ref: ec,
              "data-contain-touch-overscroll": eI,
              "data-app-shell-page-scrolled": eE,
              "data-settings-mobile-header": eS,
              onScroll: Y,
              className: V,
              children: [$, ej],
            })),
            (ea[102] = ej),
            (ea[103] = eI),
            (ea[104] = eE),
            (ea[105] = eS),
            (ea[106] = Y),
            (ea[107] = V),
            (ea[108] = $),
            (ea[109] = Z))
          : (Z = ea[109]),
        ea[110] !== x
          ? ((Q =
              null != x &&
              (0, a.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: x,
              })),
            (ea[110] = x),
            (ea[111] = Q))
          : (Q = ea[111]),
        ea[112] !== v ||
        ea[113] !== A ||
        ea[114] !== F ||
        ea[115] !== q ||
        ea[116] !== K ||
        ea[117] !== Z ||
        ea[118] !== Q
          ? ((X = (0, a.jsxs)("div", { ref: v, className: F, ...A, children: [q, K, Z, Q] })),
            (ea[112] = v),
            (ea[113] = A),
            (ea[114] = F),
            (ea[115] = q),
            (ea[116] = K),
            (ea[117] = Z),
            (ea[118] = Q),
            (ea[119] = X))
          : (X = ea[119]),
        X
      )
    }
    function f(e) {
      let t,
        n,
        s = (0, i.c)(8),
        { children: r, navigationKey: l, slateLayout: o, targetId: c, targetText: d } = e,
        u = void 0 !== o && o,
        p = void 0 === d ? null : d
      return (
        s[0] !== l || s[1] !== u || s[2] !== c || s[3] !== p
          ? ((t =
              null != c || null != p || u ? { navigationKey: l, slateLayout: u, targetId: c, targetText: p } : null),
            (s[0] = l),
            (s[1] = u),
            (s[2] = c),
            (s[3] = p),
            (s[4] = t))
          : (t = s[4]),
        s[5] !== r || s[6] !== t
          ? ((n = (0, a.jsx)(g.S.Provider, { value: t, children: r })), (s[5] = r), (s[6] = t), (s[7] = n))
          : (n = s[7]),
        n
      )
    }
  },
  oFmV(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { S: a })
  },
  BSnr(e, t, n) {
    n.d(t, { X: () => r })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    let r = Object.assign(
      function (e) {
        let t,
          n,
          r = (0, i.c)(6),
          { children: l, id: o, className: c } = e
        return (
          r[0] !== c ? ((t = (0, s.A)("flex flex-col", c)), (r[0] = c), (r[1] = t)) : (t = r[1]),
          r[2] !== l || r[3] !== o || r[4] !== t
            ? ((n = (0, a.jsx)("section", { id: o, className: t, children: l })),
              (r[2] = l),
              (r[3] = o),
              (r[4] = t),
              (r[5] = n))
            : (n = r[5]),
          n
        )
      },
      {
        Header: function (e) {
          let t,
            n,
            r,
            l,
            o,
            c,
            d,
            u = (0, i.c)(32),
            {
              title: p,
              subtitle: m,
              actions: g,
              actionsAlignment: h,
              className: f,
              size: _,
              titleGap: y,
              spacing: b,
              subtitlePlacement: x,
              subtitleWrap: v,
            } = e,
            A = void 0 === _ ? "default" : _,
            T = void 0 === b ? "default" : b,
            w = void 0 === x ? "below-title" : x,
            N = void 0 === v ? "balance" : v,
            j = null != p,
            I = null != m,
            E = null != g,
            S = "compact" === A
          u[0] !== S || u[1] !== m || u[2] !== w || u[3] !== N
            ? ((t = m
                ? (0, a.jsx)("div", {
                    className: (0, s.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === N ? "text-balance" : "text-wrap",
                      S ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === w && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = S),
              (u[1] = m),
              (u[2] = w),
              (u[3] = N),
              (u[4] = t))
            : (t = u[4])
          let C = t
          if (!j && !I && !E) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === w ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            B = I && "compact" === T && "pb-2",
            M = I && "compact" !== T && "pb-3"
          u[6] !== f || u[7] !== I || u[8] !== S || u[9] !== T || u[10] !== P || u[11] !== B || u[12] !== M
            ? ((n = (0, s.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                B,
                M,
                !I && (0, s.A)("items-center pb-1.5", "compact" === T ? "min-h-8" : "min-h-toolbar"),
                I && S && "items-center",
                I && !S && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = I),
              (u[8] = S),
              (u[9] = T),
              (u[10] = P),
              (u[11] = B),
              (u[12] = M),
              (u[13] = n))
            : (n = u[13])
          let k =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== k ? ((r = (0, s.A)("flex min-w-0 flex-1 flex-col", k)), (u[14] = k), (u[15] = r)) : (r = u[15]),
            u[16] !== I || u[17] !== A || u[18] !== p
              ? ((l = p
                  ? (0, a.jsx)("div", {
                      className: (0, s.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === A && "text-sm leading-[18px]",
                        ("large" === A || ("default" === A && I)) && "text-lg",
                        ("base" === A || ("default" === A && !I)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = I),
                (u[17] = A),
                (u[18] = p),
                (u[19] = l))
              : (l = u[19]))
          let L = "below-title" === w ? C : null
          ;(u[20] !== r || u[21] !== l || u[22] !== L
            ? ((o = (0, a.jsxs)("div", { className: r, children: [l, L] })),
              (u[20] = r),
              (u[21] = l),
              (u[22] = L),
              (u[23] = o))
            : (o = u[23]),
            u[24] !== g || u[25] !== h
              ? ((c = g
                  ? (0, a.jsx)("div", {
                      className: (0, s.A)("flex items-center gap-2", "end" === h && "self-end"),
                      children: g,
                    })
                  : null),
                (u[24] = g),
                (u[25] = h),
                (u[26] = c))
              : (c = u[26]))
          let G = "below-header" === w ? C : null
          return (
            u[27] !== n || u[28] !== o || u[29] !== c || u[30] !== G
              ? ((d = (0, a.jsxs)("div", { className: n, children: [o, c, G] })),
                (u[27] = n),
                (u[28] = o),
                (u[29] = c),
                (u[30] = G),
                (u[31] = d))
              : (d = u[31]),
            d
          )
        },
        Content: function (e) {
          let t,
            n,
            r = (0, i.c)(5),
            { children: l, className: o } = e
          return (
            r[0] !== o ? ((t = (0, s.A)("flex flex-col gap-1.5", o)), (r[0] = o), (r[1] = t)) : (t = r[1]),
            r[2] !== l || r[3] !== t
              ? ((n = (0, a.jsx)("div", { className: t, children: l })), (r[2] = l), (r[3] = t), (r[4] = n))
              : (n = r[4]),
            n
          )
        },
        Footer: function (e) {
          let t,
            n,
            r = (0, i.c)(6),
            { children: l, className: o, variant: c } = e,
            d =
              "action" === (void 0 === c ? "description" : c)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            r[0] !== o || r[1] !== d
              ? ((t = (0, s.A)("text-balance text-secondary", d, o)), (r[0] = o), (r[1] = d), (r[2] = t))
              : (t = r[2]),
            r[3] !== l || r[4] !== t
              ? ((n = (0, a.jsx)("div", { className: t, children: l })), (r[3] = l), (r[4] = t), (r[5] = n))
              : (n = r[5]),
            n
          )
        },
      },
    )
  },
  I7Ou(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("RNul"),
      r = n("AWNZ")
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            l = (0, i.c)(3),
            { children: o } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(s.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== o
              ? ((n = (0, a.jsx)("div", {
                  role: "status",
                  children: (0, a.jsx)(r.ic, {
                    label: (0, a.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, a.jsx)("span", { className: "text-balance", children: o })],
                    }),
                    control: null,
                  }),
                })),
                (l[1] = o),
                (l[2] = n))
              : (n = l[2]),
            n
          )
        },
      },
    )
  },
  bZug(e, t, n) {
    n.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      r = n("zd8w"),
      l = n("HZfM"),
      o = n("GO7r")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        n,
        r,
        l,
        o,
        c,
        d,
        u = (0, i.c)(24),
        {
          label: p,
          labelId: m,
          labelSizing: g,
          labelWeight: h,
          description: f,
          descriptionId: _,
          icon: y,
          variant: b,
          verticalAlignment: x,
        } = e,
        v = "start" === x ? "items-start" : "items-center",
        A = "grow" === (void 0 === g ? "grow" : g) && "flex-1"
      ;(u[0] !== v || u[1] !== A
        ? ((t = (0, s.A)("flex min-w-0 gap-3", v, A)), (u[0] = v), (u[1] = A), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((n = null != y ? (0, a.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = n))
          : (n = u[4]))
      let T = "featured" === b && "text-base",
        w = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        N = "featured" !== b && "recommendation" !== b && "text-sm",
        j = "nested" !== b && "medium" === (void 0 === h ? "medium" : h) && "font-medium"
      return (
        u[5] !== j || u[6] !== T || u[7] !== w || u[8] !== N
          ? ((r = (0, s.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              T,
              w,
              N,
              j,
            )),
            (u[5] = j),
            (u[6] = T),
            (u[7] = w),
            (u[8] = N),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== p || u[11] !== m || u[12] !== r
          ? ((l = (0, a.jsx)("div", { id: m, className: r, children: p })),
            (u[10] = p),
            (u[11] = m),
            (u[12] = r),
            (u[13] = l))
          : (l = u[13]),
        u[14] !== f || u[15] !== _
          ? ((o = f
              ? (0, a.jsx)("div", {
                  id: _,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: f,
                })
              : null),
            (u[14] = f),
            (u[15] = _),
            (u[16] = o))
          : (o = u[16]),
        u[17] !== l || u[18] !== o
          ? ((c = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [l, o] })),
            (u[17] = l),
            (u[18] = o),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== c || u[21] !== t || u[22] !== n
          ? ((d = (0, a.jsxs)("div", { className: t, children: [n, c] })),
            (u[20] = c),
            (u[21] = t),
            (u[22] = n),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    n.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            n,
            r,
            l,
            o,
            c,
            d = (0, i.c)(18),
            { children: u, compactLabelInset: p, label: m, valueAlignment: g, variant: h } = e,
            f = void 0 === p || p,
            _ = void 0 === g ? "start" : g,
            y = void 0 === h ? "default" : h,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== b ? ((t = (0, s.A)("grid items-center", b)), (d[0] = b), (d[1] = t)) : (t = d[1]),
            d[2] !== f || d[3] !== y
              ? ((n = (0, s.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, s.A)("flex items-center pe-2 text-start", f && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = f),
                (d[3] = y),
                (d[4] = n))
              : (n = d[4]),
            d[5] !== m || d[6] !== n
              ? ((r = (0, a.jsx)("div", { className: n, children: m })), (d[5] = m), (d[6] = n), (d[7] = r))
              : (r = d[7]),
            d[8] !== _ || d[9] !== y
              ? ((l = (0, s.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, s.A)("break-words whitespace-normal text-sm text-default", "end" === _ && "text-end"),
                )),
                (d[8] = _),
                (d[9] = y),
                (d[10] = l))
              : (l = d[10]),
            d[11] !== u || d[12] !== l
              ? ((o = (0, a.jsx)("div", { className: l, children: u })), (d[11] = u), (d[12] = l), (d[13] = o))
              : (o = d[13]),
            d[14] !== t || d[15] !== r || d[16] !== o
              ? ((c = (0, a.jsxs)("div", { className: t, children: [r, o] })),
                (d[14] = t),
                (d[15] = r),
                (d[16] = o),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            n,
            l,
            o,
            c = (0, i.c)(35),
            {
              label: u,
              labelSizing: p,
              labelWeight: m,
              layout: g,
              description: h,
              control: f,
              controlSizing: _,
              icon: y,
              className: b,
              id: x,
              inset: v,
              size: A,
              variant: T,
              verticalAlignment: w,
            } = e,
            N = void 0 === p ? "grow" : p,
            j = void 0 === m ? "medium" : m,
            I = void 0 === g ? "default" : g,
            E = void 0 === _ ? "minimum" : _,
            S = void 0 === v || v,
            C = void 0 === A ? "default" : A,
            P = void 0 === T ? "default" : T,
            B = void 0 === w ? "center" : w,
            M = (0, r.useId)(),
            k = null != u || null != h || null != y,
            L = "function" == typeof f,
            G = L && null != u ? `${M}-label` : void 0,
            O = L && h ? `${M}-description` : void 0,
            D = S && ("split" !== I || "default" !== P) && "px-4",
            R = S && "nested" === P && "group-data-[density=form]/settings:px-5",
            H =
              "stacked" === P &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            U =
              "nested" === P &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            z = "stacked" !== P && ("start" === B ? "items-start" : "items-center"),
            W = "split" === I && "default" === P && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== b ||
            c[1] !== I ||
            c[2] !== C ||
            c[3] !== R ||
            c[4] !== H ||
            c[5] !== U ||
            c[6] !== z ||
            c[7] !== W ||
            c[8] !== D ||
            c[9] !== P
              ? ((t = (0, s.A)(
                  "@container/settings-row",
                  D,
                  R,
                  H,
                  U,
                  z,
                  W,
                  "default" === I &&
                    ("default" === P || "featured" === P || "recommendation" === P) &&
                    (0, s.A)(
                      "flex justify-between",
                      "featured" === P && (0, s.A)("gap-6", "compact" === C ? "min-h-11 py-2" : "py-4"),
                      "featured" !== P && ("compact" === C ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === P && "dark:bg-primary-ghost-hover",
                  b,
                )),
                (c[0] = b),
                (c[1] = I),
                (c[2] = C),
                (c[3] = R),
                (c[4] = H),
                (c[5] = U),
                (c[6] = z),
                (c[7] = W),
                (c[8] = D),
                (c[9] = P),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== h ||
            c[12] !== O ||
            c[13] !== k ||
            c[14] !== y ||
            c[15] !== u ||
            c[16] !== G ||
            c[17] !== N ||
            c[18] !== j ||
            c[19] !== P ||
            c[20] !== B
              ? ((n = k
                  ? (0, a.jsx)(d, {
                      label: u,
                      labelId: G,
                      labelSizing: N,
                      labelWeight: j,
                      description: h,
                      descriptionId: O,
                      icon: y,
                      variant: P,
                      verticalAlignment: B,
                    })
                  : null),
                (c[11] = h),
                (c[12] = O),
                (c[13] = k),
                (c[14] = y),
                (c[15] = u),
                (c[16] = G),
                (c[17] = N),
                (c[18] = j),
                (c[19] = P),
                (c[20] = B),
                (c[21] = n))
              : (n = c[21]),
            c[22] !== f || c[23] !== E || c[24] !== O || c[25] !== L || c[26] !== G || c[27] !== I || c[28] !== P
              ? ((l =
                  null != f && !1 !== f
                    ? (0, a.jsx)("div", {
                        className: (0, s.A)(
                          "stacked" === P && "w-full",
                          "nested" === P && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === I &&
                            "default" === P &&
                            (0, s.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === E && "w-full",
                            ),
                          "default" === I &&
                            ("default" === P || "featured" === P || "recommendation" === P) &&
                            (0, s.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === E ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === E && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: L ? f({ "aria-labelledby": G, "aria-describedby": O }) : f,
                      })
                    : null),
                (c[22] = f),
                (c[23] = E),
                (c[24] = O),
                (c[25] = L),
                (c[26] = G),
                (c[27] = I),
                (c[28] = P),
                (c[29] = l))
              : (l = c[29]),
            c[30] !== x || c[31] !== t || c[32] !== n || c[33] !== l
              ? ((o = (0, a.jsxs)("div", { id: x, className: t, children: [n, l] })),
                (c[30] = x),
                (c[31] = t),
                (c[32] = n),
                (c[33] = l),
                (c[34] = o))
              : (o = c[34]),
            o
          )
        },
        jj: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: s } = e
          return (
            n[0] !== s
              ? ((t = (0, a.jsx)("span", { className: "text-xs text-secondary", children: s })), (n[0] = s), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            n,
            r,
            o,
            u,
            p,
            m,
            g,
            h,
            f,
            _,
            y,
            b,
            x,
            v,
            A,
            T,
            w,
            N,
            j,
            I,
            E,
            S,
            C = (0, i.c)(54)
          C[0] !== e
            ? (({
                actions: t,
                actionsPlacement: _,
                ariaControls: n,
                ariaExpanded: r,
                ariaLabel: o,
                className: u,
                description: p,
                disabled: m,
                edgeRounding: y,
                icon: g,
                label: f,
                size: b,
                trailing: v,
                variant: x,
                ...h
              } = e),
              (C[0] = e),
              (C[1] = t),
              (C[2] = n),
              (C[3] = r),
              (C[4] = o),
              (C[5] = u),
              (C[6] = p),
              (C[7] = m),
              (C[8] = g),
              (C[9] = h),
              (C[10] = f),
              (C[11] = _),
              (C[12] = y),
              (C[13] = b),
              (C[14] = x),
              (C[15] = v))
            : ((t = C[1]),
              (n = C[2]),
              (r = C[3]),
              (o = C[4]),
              (u = C[5]),
              (p = C[6]),
              (m = C[7]),
              (g = C[8]),
              (h = C[9]),
              (f = C[10]),
              (_ = C[11]),
              (y = C[12]),
              (b = C[13]),
              (x = C[14]),
              (v = C[15]))
          let P = void 0 === y ? "row" : y,
            B = void 0 === b ? "default" : b,
            M = void 0 === x ? "default" : x,
            k = "before-trailing" === (void 0 === _ ? "end" : _) && !m && null != t && null != v,
            L = k ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          C[16] !== u || C[17] !== k || C[18] !== B || C[19] !== L || C[20] !== M
            ? ((A = (0, s.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                L,
                "empty" === M
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, s.A)(
                      "px-4 text-start",
                      "nested" === M && "min-h-10 py-0.5",
                      "nested" !== M && ("large" === B ? "py-4" : "py-3"),
                      k && "gap-2",
                      !k && ("nested" === M ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (C[16] = u),
              (C[17] = k),
              (C[18] = B),
              (C[19] = L),
              (C[20] = M),
              (C[21] = A))
            : (A = C[21])
          let G = A
          ;(C[22] !== p || C[23] !== g || C[24] !== f || C[25] !== M
            ? ((T =
                "empty" === M
                  ? (0, a.jsxs)(a.Fragment, { children: [g, f] })
                  : (0, a.jsx)(d, { label: f, description: p, icon: g, variant: M, verticalAlignment: "center" })),
              (C[22] = p),
              (C[23] = g),
              (C[24] = f),
              (C[25] = M),
              (C[26] = T))
            : (T = C[26]),
            C[27] !== v
              ? ((w =
                  null != v
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: v })
                    : null),
                (C[27] = v),
                (C[28] = w))
              : (w = C[28]),
            C[29] !== T || C[30] !== w
              ? ((N = (0, a.jsxs)(a.Fragment, { children: [T, w] })), (C[29] = T), (C[30] = w), (C[31] = N))
              : (N = C[31]))
          let O = N,
            D = k ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            R = "row" === P && "first:rounded-t-2xl last:rounded-b-2xl",
            H = "recommendation" === M && "dark:bg-primary-ghost-hover",
            U = !m && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            z =
              !m &&
              "recommendation" === M &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            C[32] !== D || C[33] !== R || C[34] !== H || C[35] !== U || C[36] !== z
              ? ((j = (0, s.A)("group w-full items-center", D, R, H, U, z)),
                (C[32] = D),
                (C[33] = R),
                (C[34] = H),
                (C[35] = U),
                (C[36] = z),
                (C[37] = j))
              : (j = C[37]),
            C[38] !== n || C[39] !== r || C[40] !== o || C[41] !== O || C[42] !== m || C[43] !== h || C[44] !== G
              ? ((I =
                  null != h.to
                    ? (0, a.jsx)(l.N_, {
                        ...h,
                        className: G,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": o,
                        "aria-disabled": m || void 0,
                        tabIndex: m ? -1 : void 0,
                        onClick: m ? c : h.onClick,
                        children: O,
                      })
                    : (0, a.jsx)("button", {
                        ...h,
                        className: G,
                        "aria-controls": n,
                        "aria-expanded": r,
                        "aria-label": o,
                        disabled: m,
                        type: "button",
                        children: O,
                      })),
                (C[38] = n),
                (C[39] = r),
                (C[40] = o),
                (C[41] = O),
                (C[42] = m),
                (C[43] = h),
                (C[44] = G),
                (C[45] = I))
              : (I = C[45]),
            C[46] !== t || C[47] !== m || C[48] !== k
              ? ((E =
                  m || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, s.A)(
                          "flex shrink-0 items-center gap-1",
                          k ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (C[46] = t),
                (C[47] = m),
                (C[48] = k),
                (C[49] = E))
              : (E = C[49]),
            C[50] !== j || C[51] !== I || C[52] !== E
              ? ((S = (0, a.jsxs)("div", { className: j, children: [I, E] })),
                (C[50] = j),
                (C[51] = I),
                (C[52] = E),
                (C[53] = S))
              : (S = C[53]),
            S
          )
        },
        kf: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: s } = e
          return (
            n[0] !== s
              ? ((t = (0, a.jsx)("span", { className: "text-tertiary", children: s })), (n[0] = s), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            n,
            r,
            l,
            c,
            d,
            u,
            p,
            m,
            g,
            h = (0, i.c)(43),
            {
              id: f,
              ariaLabel: _,
              autoFocus: y,
              checked: b,
              description: x,
              highlightSelected: v,
              indicator: A,
              label: T,
              name: w,
              onChange: N,
              onClick: j,
              value: I,
              variant: E,
            } = e,
            S = void 0 === v || v,
            C = void 0 === A ? "radio" : A,
            P = void 0 === E ? "default" : E
          ;(h[0] !== b || h[1] !== x || h[2] !== S || h[3] !== C || h[4] !== P
            ? ((t = (0, s.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === P &&
                  (0, s.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != x ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === P && b && S && "radio" === C && "bg-primary-soft-alpha",
                "form" === P && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === P && "items-center gap-2",
                "checkmark" === C && "after:ms-7",
              )),
              (h[0] = b),
              (h[1] = x),
              (h[2] = S),
              (h[3] = C),
              (h[4] = P),
              (h[5] = t))
            : (t = h[5]),
            h[6] !== _ || h[7] !== f
              ? ((n = (0, a.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": _,
                  htmlFor: f,
                })),
                (h[6] = _),
                (h[7] = f),
                (h[8] = n))
              : (n = h[8]),
            h[9] !== C || h[10] !== P
              ? ((r = (0, s.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === C
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, s.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === P ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (h[9] = C),
                (h[10] = P),
                (h[11] = r))
              : (r = h[11]))
          let B = null != x ? `${f}-description` : void 0
          ;(h[12] !== _ ||
          h[13] !== y ||
          h[14] !== b ||
          h[15] !== f ||
          h[16] !== w ||
          h[17] !== N ||
          h[18] !== j ||
          h[19] !== r ||
          h[20] !== B ||
          h[21] !== I
            ? ((l = (0, a.jsx)("input", {
                id: f,
                className: r,
                "aria-label": _,
                "aria-describedby": B,
                autoFocus: y,
                type: "radio",
                name: w,
                value: I,
                checked: b,
                onChange: N,
                onClick: j,
              })),
              (h[12] = _),
              (h[13] = y),
              (h[14] = b),
              (h[15] = f),
              (h[16] = w),
              (h[17] = N),
              (h[18] = j),
              (h[19] = r),
              (h[20] = B),
              (h[21] = I),
              (h[22] = l))
            : (l = h[22]),
            h[23] !== b || h[24] !== C
              ? ((c = "checkmark" === C ? (0, a.jsx)(o.ALZ, { className: (0, s.A)(!b && "invisible") }) : null),
                (h[23] = b),
                (h[24] = C),
                (h[25] = c))
              : (c = h[25]))
          let M = "default" === P ? "text-sm font-medium" : "text-base"
          return (
            h[26] !== M ? ((d = (0, s.A)("text-default", M)), (h[26] = M), (h[27] = d)) : (d = h[27]),
            h[28] !== T || h[29] !== d
              ? ((u = (0, a.jsx)("span", { className: d, children: T })), (h[28] = T), (h[29] = d), (h[30] = u))
              : (u = h[30]),
            h[31] !== x || h[32] !== f
              ? ((p =
                  null != x
                    ? (0, a.jsx)("span", {
                        id: `${f}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: x,
                      })
                    : null),
                (h[31] = x),
                (h[32] = f),
                (h[33] = p))
              : (p = h[33]),
            h[34] !== u || h[35] !== p
              ? ((m = (0, a.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, p],
                })),
                (h[34] = u),
                (h[35] = p),
                (h[36] = m))
              : (m = h[36]),
            h[37] !== m || h[38] !== t || h[39] !== n || h[40] !== l || h[41] !== c
              ? ((g = (0, a.jsxs)("div", { className: t, children: [n, l, c, m] })),
                (h[37] = m),
                (h[38] = t),
                (h[39] = n),
                (h[40] = l),
                (h[41] = c),
                (h[42] = g))
              : (g = h[42]),
            g
          )
        },
      },
    )
  },
  ZEx5(e, t, n) {
    n.d(t, { t: () => l })
    var a = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      r = n("bZug")
    function l(e) {
      let t,
        n,
        l,
        o = (0, i.c)(23),
        { children: c, className: d, contentOverflow: u, dividers: p, variant: m, decoration: g } = e,
        h = void 0 === m ? "default" : m,
        f = "flat" === h || "rows" === h ? r.s : r.r,
        _ = void 0 === p || p ? f : "flex flex-col",
        y = "recommendation" === h && "rounded-[20px]",
        b = "recommendation" !== h && "flat" !== h && "rows" !== h && "outlinedLarge" !== h && "rounded-2xl",
        x = "outlinedLarge" === h && "rounded-[30px] border border-default bg-transparent",
        v = "daybreak" === g && "daybreak-VsXdEH",
        A = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        T =
          "default" === h &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        w = "metered" === h && "ring-1 ring-inset ring-border-subtle",
        N = "secondary" === h && "bg-surface-secondary/92",
        j = "muted" === h && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        I =
          "form" === h &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        E = "outlined" === h && "border border-subtle bg-transparent",
        S =
          "flat" === h &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        C = "input" === h && "border border-primary-outline bg-primary-soft",
        P = "recommendation" === h && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== d ||
        o[1] !== T ||
        o[2] !== w ||
        o[3] !== N ||
        o[4] !== j ||
        o[5] !== I ||
        o[6] !== E ||
        o[7] !== S ||
        o[8] !== C ||
        o[9] !== P ||
        o[10] !== _ ||
        o[11] !== y ||
        o[12] !== b ||
        o[13] !== x ||
        o[14] !== v ||
        o[15] !== A
          ? ((t = (0, s.A)(_, y, b, x, v, A, T, w, N, j, I, E, S, C, P, d)),
            (o[0] = d),
            (o[1] = T),
            (o[2] = w),
            (o[3] = N),
            (o[4] = j),
            (o[5] = I),
            (o[6] = E),
            (o[7] = S),
            (o[8] = C),
            (o[9] = P),
            (o[10] = _),
            (o[11] = y),
            (o[12] = b),
            (o[13] = x),
            (o[14] = v),
            (o[15] = A),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== h
          ? ((n =
              "default" === h || "metered" === h
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (o[17] = h),
            (o[18] = n))
          : (n = o[18]),
        o[19] !== c || o[20] !== t || o[21] !== n
          ? ((l = (0, a.jsx)("div", { className: t, style: n, children: c })),
            (o[19] = c),
            (o[20] = t),
            (o[21] = n),
            (o[22] = l))
          : (l = o[22]),
        l
      )
    }
  },
  EWIu(e, t, n) {
    n.d(
      t,
      {},
      {
        Ex: function (e, t) {},
        d1: async function (e, t) {
          return e.getDynamicConfig(t)
        },
        tA: function (e, t) {
          return !1
        },
      },
    )
  },
  m5G2(e, t, n) {
    var a = n("f4Vb")
    n.d(
      t,
      {},
      {
        J: function ({ axis: e, debounce: t, initialSize: n = !0, onChange: i, target: s }) {
          if (!s || "u" < typeof ResizeObserver) return
          let r = new AbortController(),
            l = null,
            o = null,
            c = n,
            d = new ResizeObserver((n) => {
              n.forEach((n) => {
                let { width: s, height: d } = (0, a.q)(n),
                  u = !1
                if ("width" === e) {
                  let e = (c || null != l) && l !== s
                  ;((l = s), e && (u = !0))
                } else if ("height" === e) {
                  let e = (c || null != o) && o !== d
                  ;((o = d), e && (u = !0))
                } else if ("both" === e) {
                  let e = (c || null != l) && l !== s,
                    t = (c || null != o) && o !== d
                  ;((l = s), (o = d), (e || t) && (u = !0))
                }
                if (((c = !1), u))
                  if (t) {
                    r.abort()
                    let e = (r = new AbortController()).signal
                    requestAnimationFrame(() => {
                      e.aborted || i({ width: s, height: d, previousWidth: l, previousHeight: o }, n)
                    })
                  } else i({ width: s, height: d, previousWidth: l, previousHeight: o }, n)
              })
            })
          return (
            d.observe(s),
            function () {
              try {
                d.disconnect()
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
          let s = i ?? a({ intl: e, currencyCode: n })
          return e.formatNumber(t, {
            style: "currency",
            currency: n,
            minimumFractionDigits: s,
            maximumFractionDigits: s,
          })
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
            s = (0, a.c)(3),
            r = (0, i.useRef)(!1)
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => (
                  (r.current = !0),
                  () => {
                    r.current = !1
                  }
                )),
                (t = []),
                (s[0] = e),
                (s[1] = t))
              : ((e = s[0]), (t = s[1])),
            (0, i.useEffect)(e, t),
            s[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = () => r.current), (s[2] = n)) : (n = s[2]),
            n
          )
        },
      },
    )
  },
}
//# sourceMappingURL=971042.728e536639.js.map
