export const __rspack_esm_ids = [664717]
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
            T = b ? null : g
          m[0] !== T ? ((t = (0, a.jsx)(r.F, { signal: l.Wg, value: T })), (m[0] = T), (m[1] = t)) : (t = m[1])
          let A = b ? null : void 0 === y ? "page" : y
          m[2] !== A ? ((n = (0, a.jsx)(r.F, { signal: l.R0, value: A })), (m[2] = A), (m[3] = n)) : (n = m[3])
          let w = b ? null : void 0 === f || f
          m[4] !== w ? ((o = (0, a.jsx)(r.F, { signal: l.nB, value: w })), (m[4] = w), (m[5] = o)) : (o = m[5])
          let j = b ? null : void 0 === _ || _
          m[6] !== j ? ((c = (0, a.jsx)(r.F, { signal: l.zE, value: j })), (m[6] = j), (m[7] = c)) : (c = m[7])
          let N = b ? null : v
          return (
            m[8] !== N ? ((d = (0, a.jsx)(r.F, { signal: l.dC, value: N })), (m[8] = N), (m[9] = d)) : (d = m[9]),
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
        r,
        l = (0, i.c)(9),
        { brandColor: o, children: c, inset: d, size: u } = e,
        p = void 0 === d || d,
        m = void 0 === u ? "header" : u
      return (
        l[0] !== o || l[1] !== p || l[2] !== m
          ? ((t = o && /^#[0-9a-f]{6}$/iu.test(o) ? { "--app-shell-header-brand-color": o } : void 0),
            (n = (0, s.A)(
              "Toolbar-w4tLPD",
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
            (l[1] = p),
            (l[2] = m),
            (l[3] = t),
            (l[4] = n))
          : ((t = l[3]), (n = l[4])),
        l[5] !== t || l[6] !== c || l[7] !== n
          ? ((r = (0, a.jsx)("div", { className: n, "data-app-shell-header-toolbar": !0, style: t, children: c })),
            (l[5] = t),
            (l[6] = c),
            (l[7] = n),
            (l[8] = r))
          : (r = l[8]),
        r
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
  T5JX(e, t, n) {
    let a
    var i = n("lXEa")
    n("Cq5Q")
    let s = "[1,null]",
      r = Promise.resolve(),
      l = new Map(),
      o = new Map()
    async function c(e, t, n) {
      let r,
        l = performance.now(),
        o = t && (n?.includeSessionObserver ?? "checkout_session_approval" === e),
        c = {},
        h = !1,
        f = "error",
        _ = d(async () => {
          if (h) return c
          let n = await g(t).catch(() => null)
          if (h) return c
          if (o && null != n) {
            await u(n, "chatgpt_checkout", () => h)
            let e = a
            if ((!h && e?.needsInit && null != e.signal && !e.signal.aborted && (await p(n, e).catch(() => void 0)), h))
              return c
            null != e && (e.needsInit = !0)
            let t = await n?.sessionObserverToken?.("chatgpt_checkout").catch(() => null)
            ;((a = void 0), t && (c["OpenAI-Sentinel-SO-Token"] = t))
          }
          if (h) return c
          if (null != n)
            try {
              if (
                (await u(n, e, () => h),
                h ||
                  ((c[i.UP.sentinelToken] = await n.token(e)),
                  (f = c[i.UP.sentinelToken] ? "ready" : "error"),
                  a?.flow === e && (a.needsInit = !1),
                  h))
              )
                return c
              c[i.UP.timing] = (await n.timing?.()) ?? s
            } catch {
              c[i.UP.sentinelToken] || Object.assign(c, m(e))
            }
          return (t, c)
        })
      try {
        let a = await Promise.race([
          _,
          new Promise((t) => {
            r = setTimeout(() => {
              ;((h = !0),
                t({
                  ...m(e),
                  ...c,
                  ...(o && !c["OpenAI-Sentinel-SO-Token"]
                    ? { "OpenAI-Sentinel-SO-Token": JSON.stringify({ e: "client_timeout" }) }
                    : {}),
                }))
            }, n?.timeoutMs ?? 5e3)
          }),
        ])
        return (
          n?.onComplete != null && n.onComplete({ outcome: h ? "timeout" : f, durationMs: performance.now() - l }),
          t ? { [i.UP.sentinelToken]: JSON.stringify({ e: "k9d4s6v3b2" }), [i.UP.timing]: s, ...a } : a
        )
      } finally {
        clearTimeout(r)
      }
    }
    function d(e) {
      let t = r.then(e)
      return (
        (r = t.then(
          () => void 0,
          () => void 0,
        )),
        t
      )
    }
    async function u(e, t, n) {
      if (n()) return
      let i = l.get(t)
      if (a?.flow === t && (null == i || a === i)) return
      let s = a
      ;((a = void 0),
        s?.signal != null && (await e.sessionObserverToken?.(s.flow).catch(() => null)),
        n() || (a = l.get(t) ?? { flow: t, needsInit: !0 }))
    }
    async function p(e, t) {
      t.needsInit = !0
      let n = await e.init?.(t.flow)
      t.needsInit = "string" == typeof n
    }
    function m(e) {
      try {
        let t = window.SentinelSDK?.requirementsToken?.(e)
        if ("string" != typeof t || !t) return {}
        return { [i.UP.sentinelToken]: JSON.stringify({ e: "k9d4s6v3b2", c: t }), [i.UP.timing]: s }
      } catch {
        return {}
      }
    }
    function g(e) {
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
                  d(async () => {
                    if (t.aborted) return
                    let a = await g(n)
                    !t.aborted && (await u(a, e, () => t.aborted), t.aborted || (await p(a, i)))
                  }).catch(() => void 0),
                  t.addEventListener(
                    "abort",
                    () => {
                      ;(l.get(e) === i && l.delete(e),
                        d(async () => {
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
  Cq5Q(e, t, n) {
    let a = new Map()
    n.d(
      t,
      {},
      {
        V: function (e) {
          if (null != window.SentinelSDK) return Promise.resolve(window.SentinelSDK)
          let t = new URL(e, document.baseURI).href,
            n = a.get(t)
          return (
            null == n &&
              ((n = new Promise((e, n) => {
                let a = document.createElement("script")
                ;((a.async = !0),
                  (a.defer = !0),
                  (a.src = t),
                  a.addEventListener("load", () => {
                    null == window.SentinelSDK ? n(Error("Sentinel SDK did not initialize")) : e(window.SentinelSDK)
                  }),
                  a.addEventListener("error", () => n(Error("Sentinel SDK failed to load"))),
                  document.head.append(a))
              }).finally(() => {
                a.delete(t)
              })),
              a.set(t, n)),
            n
          )
        },
        e: "https://chatgpt.com/backend-api/sentinel/sdk.js",
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
        "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-accent px-0.5 text-unread-badge text-on-accent tabular-nums select-none",
      count:
        "h-5 min-w-6 justify-center rounded-full bg-text/8 px-1.25 text-xs leading-4.5 font-semibold tracking-[0.3px] text-(--gray-750) tabular-nums",
      default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
      info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
      infoPill: "rounded-full bg-info-soft px-3 py-1.5 text-xs font-medium text-info",
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
      success:
        "min-h-5 rounded-full bg-success-soft-alpha px-2 text-xs font-medium text-success-soft-alpha tabular-nums",
      warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-soft-alpha",
      caution: "min-h-5 rounded-full bg-caution-soft-alpha px-2 text-xs font-medium text-caution-soft-alpha",
      danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-soft-alpha",
      tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      tipInset:
        "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      internal:
        "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
      reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
      recording: "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info/15",
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
            T = void 0 !== f && f,
            A = void 0 !== _ && _,
            w = void 0 === x ? l.lG : x,
            j = (0, s.useRef)(p)
          ;(u[0] !== p
            ? ((t = () => {
                j.current = p
              }),
              (n = [p]),
              (u[0] = p),
              (u[1] = t),
              (u[2] = n))
            : ((t = u[1]), (n = u[2])),
            (0, s.useLayoutEffect)(t, n))
          let N = A ? "h2" : l.L3
          u[3] !== N || u[4] !== b || u[5] !== T || u[6] !== h
            ? ((c =
                b ??
                (0, a.jsx)(o.R4, {
                  children: (0, a.jsx)(o.OO, {
                    className: "select-none",
                    children: (0, a.jsx)(o.c7, {
                      title: (0, a.jsx)(N, { children: h }),
                      subtitle: T
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
              (u[3] = N),
              (u[4] = b),
              (u[5] = T),
              (u[6] = h),
              (u[7] = c))
            : (c = u[7])
          let I = c
          return (
            u[8] !== w ||
            u[9] !== I ||
            u[10] !== A ||
            u[11] !== g ||
            u[12] !== m ||
            u[13] !== p ||
            u[14] !== v ||
            u[15] !== y
              ? ((d = A
                  ? I
                  : (0, a.jsx)(w, {
                      open: p,
                      size: y,
                      onOpenChange: (e) => {
                        ;((j.current = e), m(e))
                      },
                      contentProps: {
                        "aria-describedby": void 0,
                        onCloseAutoFocus: (e) => {
                          j.current && !v?.() ? e.preventDefault() : g?.(e)
                        },
                      },
                      children: I,
                    })),
                (u[8] = w),
                (u[9] = I),
                (u[10] = A),
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
          let T = "page" === v ? "flex-nowrap" : "flex-wrap"
          g[2] !== T
            ? ((n = (0, s.A)("flex min-w-0 items-start justify-between gap-4", T)), (g[2] = T), (g[3] = n))
            : (n = g[3])
          let A = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          g[4] !== A ? ((r = (0, s.A)("flex min-w-0 flex-1 basis-64 flex-col", A)), (g[4] = A), (g[5] = r)) : (r = g[5])
          let w = "settings" === v && "heading-lg font-normal",
            j = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            N = "page" === v && "heading-lg electron:heading-xl",
            I = "default" === v && "heading-base electron:heading-lg"
          return (
            g[6] !== I || g[7] !== w || g[8] !== j || g[9] !== N
              ? ((l = (0, s.A)("min-w-0 break-words text-default", w, j, N, I)),
                (g[6] = I),
                (g[7] = w),
                (g[8] = j),
                (g[9] = N),
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
  dT9t(e, t, n) {
    var a = n("ufra")
    n.d(t, { fetchBillingPricingConfig: () => a.e, x: () => a.x })
  },
  nUYz(e, t, n) {
    n.d(t, { ConsumerBillingSettings: () => tu })
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
      T = n("xSOA"),
      A = n("Wf1j"),
      w = n("Sm6l"),
      j = n("JNtf"),
      N = n("mUDD"),
      I = n("zLIa"),
      S = n("BSnr"),
      E = n("AWNZ"),
      C = n("ZEx5"),
      P = n("EWIu"),
      B = n("LH8k"),
      k = n("HFSu"),
      L = n("MVHH"),
      M = n("bNMl")
    function G(e, t, n) {
      e.get(M.YV).logProductEvent(L.MU, {
        actionType: t,
        mobileStore: n,
        location: "CHATGPT_WEB_BILLING_SETTINGS_LOCATION_CONSUMER_BILLING_PAGE",
      })
    }
    var O = n("I7Ou")
    function D(e) {
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
          ? ((n = (0, a.jsx)(C.t, { children: (0, a.jsx)(O.u, { children: t }) })), (s[2] = t), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    var R = n("wbWw"),
      H = n("Mu1y"),
      U = n("RDnT"),
      z = n("iLQO"),
      W = n("m39z"),
      F = n("zKCW"),
      q = n("bVeK")
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
                      (0, a.jsx)(q.TlE, {}),
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
                      (0, a.jsx)(q.Ko7, {}),
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
                ? (0, a.jsx)(F.l, {
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
    function K(e) {
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
        T = (0, l.gh)(g.u),
        j = (0, A.A)()
      b[0] !== v ? ((t = (0, R.wm)(v)), (b[0] = v), (b[1] = t)) : (t = b[1])
      let { data: N, isPending: I, isError: P, refetch: B } = (0, r.I)(t),
        [k, L] = (0, o.useState)(!1),
        M = (0, o.useRef)(null)
      b[2] !== T
        ? ((n = function () {
            ;(G(T, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_BILLING_INFORMATION_CLICKED"), L(!0))
          }),
          (b[2] = T),
          (b[3] = n))
        : (n = b[3])
      let O = n,
        U = N?.address,
        z = U?.country,
        W = (0, _.Fj)("2144562623")
      if (
        b[4] !== U?.city ||
        b[5] !== U?.line1 ||
        b[6] !== U?.line2 ||
        b[7] !== U?.postal_code ||
        b[8] !== U?.state ||
        b[9] !== N ||
        b[10] !== z ||
        b[11] !== j ||
        b[12] !== P ||
        b[13] !== I ||
        b[14] !== O ||
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
            o = (0, x.H6)(N?.tax_ids ?? [], null == z ? null : r, l),
            u = U?.line1,
            p = U?.line2
          b[19] !== u || b[20] !== p
            ? ((e = [u, p].filter(Boolean)), (b[19] = u), (b[20] = p), (b[21] = e))
            : (e = b[21])
          let m = e.join(", "),
            g = U?.city,
            h = U?.state,
            f = U?.postal_code
          b[22] !== f || b[23] !== g || b[24] !== h
            ? ((t = [g, h, f].filter(Boolean)), (b[22] = f), (b[23] = g), (b[24] = h), (b[25] = t))
            : (t = b[25])
          let _ = t.join(", ")
          ;(b[26] !== z || b[27] !== j
            ? ((n = z && /^[A-Z]{2}$/i.test(z) ? j.formatDisplayName(z.toUpperCase(), { type: "region" }) : z),
              (b[26] = z),
              (b[27] = j),
              (b[28] = n))
            : (n = b[28]),
            b[29] !== _ || b[30] !== n || b[31] !== m
              ? ((i = [m, _, n].filter(Boolean)), (b[29] = _), (b[30] = n), (b[31] = m), (b[32] = i))
              : (i = b[32]))
          let y = i.join("\n")
          if (!I && !P && !N?.email && !N?.name && !y && !o?.some(Z)) {
            d = null
            break e
          }
          if (I) {
            let e
            ;(b[33] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(D, {
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
              ? ((e = (0, a.jsx)(H.E, { onRetry: () => void B() })), (b[34] = B), (b[35] = e))
              : (e = b[35]),
              (s = e))
          } else {
            let e, t, n, i
            ;(b[36] !== N
              ? ((e = N?.email
                  ? (0, a.jsx)(E.ic, {
                      label: (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.billingEmail",
                        defaultMessage: "Billing email",
                        description:
                          "Label for the address receiving billing communications, shown in the consumer billing summary and editor",
                      }),
                      description: (0, a.jsx)("span", { className: "select-text", children: N.email }),
                      control: null,
                    })
                  : null),
                (b[36] = N),
                (b[37] = e))
              : (e = b[37]),
              b[38] !== N
                ? ((t = N?.name
                    ? (0, a.jsx)(E.ic, {
                        label: (0, a.jsx)(c.A, {
                          id: "settings.consumerBilling.billingName",
                          defaultMessage: "Name",
                          description: "Label for the name on billing invoices",
                        }),
                        description: (0, a.jsx)("span", { className: "select-text", children: N.name }),
                        control: null,
                      })
                    : null),
                  (b[38] = N),
                  (b[39] = t))
                : (t = b[39]),
              b[40] !== y
                ? ((n = y
                    ? (0, a.jsx)(E.ic, {
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
                ? (0, a.jsx)(E.ic, {
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
                            onEdit: O,
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
        ;((b[4] = U?.city),
          (b[5] = U?.line1),
          (b[6] = U?.line2),
          (b[7] = U?.postal_code),
          (b[8] = U?.state),
          (b[9] = N),
          (b[10] = z),
          (b[11] = j),
          (b[12] = P),
          (b[13] = I),
          (b[14] = O),
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
      let F = null == N
      return (
        b[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.editInformation",
              defaultMessage: "Edit",
              description: "Button opening the consumer billing-information editor",
            })),
            (b[48] = p))
          : (p = b[48]),
        b[49] !== O || b[50] !== F
          ? ((m = (0, a.jsx)(S.X.Header, {
              title: u,
              actions: (0, a.jsx)(w.$, {
                ref: M,
                color: "secondary",
                size: "toolbar",
                disabled: F,
                onClick: O,
                children: p,
              }),
            })),
            (b[49] = O),
            (b[50] = F),
            (b[51] = m))
          : (m = b[51]),
        b[52] !== s ? ((h = (0, a.jsx)(S.X.Content, { children: s })), (b[52] = s), (b[53] = h)) : (h = b[53]),
        b[54] !== v || b[55] !== N || b[56] !== k
          ? ((f =
              k && null != N
                ? (0, a.jsx)(
                    $,
                    { accountId: v, billingInfo: N, onCloseAutoFocus: () => M.current?.focus(), onClose: () => L(!1) },
                    v,
                  )
                : null),
            (b[54] = v),
            (b[55] = N),
            (b[56] = k),
            (b[57] = f))
          : (f = b[57]),
        b[58] !== m || b[59] !== h || b[60] !== f
          ? ((y = (0, a.jsxs)(S.X, { children: [m, h, f] })), (b[58] = m), (b[59] = h), (b[60] = f), (b[61] = y))
          : (y = b[61]),
        y
      )
    }
    function Z(e) {
      return !!e.value
    }
    function $(e) {
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
        { accountId: f, billingInfo: y, onCloseAutoFocus: x, onClose: T } = e,
        w = (0, A.A)(),
        I = (0, _.AS)(),
        S = (0, b.EG)(I.getLayer(b.Sd.personal)),
        { data: E, isPending: C, isError: B, refetch: k } = (0, r.I)((0, z.P)(f, w.locale, S))
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
      let M = n,
        G = (0, _.cB)()
      h[4] !== M || h[5] !== G ? ((s = () => (M ? en(G) : void 0)), (h[4] = M), (h[5] = G), (h[6] = s)) : (s = h[6])
      let [O] = (0, o.useState)(s)
      ;(h[7] !== G ? ((l = JSON.stringify(G)), (h[7] = G), (h[8] = l)) : (l = h[8]),
        h[9] !== f || h[10] !== l
          ? ((c = ["consumer-billing-setup", f, "tax-types", l]), (h[9] = f), (h[10] = l), (h[11] = c))
          : (c = h[11]),
        h[12] !== f || h[13] !== I || h[14] !== G
          ? ((d = async (e) => {
              let { signal: t } = e
              if (G.customIDs?.account_id !== f) throw Error("Billing tax config identity changed")
              let n = await (0, P.d1)(I, "2144562623")
              return (t.throwIfAborted(), V.zF.parse(n.value.tax_types ?? {}))
            }),
            (h[12] = f),
            (h[13] = I),
            (h[14] = G),
            (h[15] = d))
          : (d = h[15]),
        h[16] !== M || h[17] !== c || h[18] !== d
          ? ((u = { queryKey: c, enabled: M, queryFn: d, staleTime: 1 / 0, retry: !1 }),
            (h[16] = M),
            (h[17] = c),
            (h[18] = d),
            (h[19] = u))
          : (u = h[19]))
      let { data: D, isPending: R, isError: H, error: W, refetch: F } = (0, r.I)(u),
        q = M && (null == D || H),
        Y = (0, z.y)(),
        [K, Z] = (0, o.useState)(!1),
        $ = j.lG
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
      let J = !K
      h[22] !== T || h[23] !== K
        ? ((m = (e) => {
            e || K || T()
          }),
          (h[22] = T),
          (h[23] = K),
          (h[24] = m))
        : (m = h[24])
      let ee =
        null == E || B || q || null == Y
          ? (0, a.jsxs)(N.R4, {
              children: [
                (0, a.jsx)(N.c7, { title: (0, a.jsx)(j.L3, { children: (0, a.jsx)(Q, {}) }) }),
                (0, a.jsx)(N.OO, {
                  children: (0, a.jsx)(U.Y, {
                    kind: "billing",
                    loading: C || (M && R) || null == Y,
                    error: M ? W : void 0,
                    onRetry: () => {
                      ;((null == E || B) && k(), q && ((0, P.Ex)(I, "2144562623"), F()))
                    },
                  }),
                }),
              ],
            })
          : (0, a.jsx)(
              v.S8,
              {
                stripe: E.stripe,
                options: { appearance: Y },
                children: (0, a.jsx)(X, {
                  accountId: f,
                  billingInfo: y,
                  deferredIdentity: O,
                  deferredTaxTypes: M ? D : void 0,
                  onSubmittingChange: Z,
                  onClose: T,
                }),
              },
              (0, b.eI)(w.locale, "elements", S),
            )
      return (
        h[25] !== $ || h[26] !== p || h[27] !== J || h[28] !== m || h[29] !== ee
          ? ((g = (0, a.jsx)($, {
              open: !0,
              contentOverflow: "visible",
              contentPosition: "scrollable",
              contentProps: p,
              showDialogClose: J,
              onOpenChange: m,
              children: ee,
            })),
            (h[25] = $),
            (h[26] = p),
            (h[27] = J),
            (h[28] = m),
            (h[29] = ee),
            (h[30] = g))
          : (g = h[30]),
        g
      )
    }
    function Q() {
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
    function X(e) {
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
        A,
        S,
        E,
        C,
        P,
        L,
        M,
        G,
        O,
        D,
        H,
        U,
        z,
        F = (0, i.c)(75),
        {
          accountId: q,
          billingInfo: Y,
          deferredIdentity: K,
          deferredTaxTypes: Z,
          onSubmittingChange: $,
          onClose: X,
        } = e,
        ea = (0, l.gh)(g.u),
        ei = (0, _.AS)(),
        es = (0, o.useId)(),
        [er, el] = (0, o.useState)(Y.email ?? ""),
        eo = Y.name ?? "",
        ec = Y.address?.line1 ?? "",
        ed = Y.address?.line2 ?? "",
        eu = Y.address?.city ?? "",
        ep = Y.address?.state ?? "",
        em = Y.address?.postal_code ?? "",
        eg = Y.address?.country ?? ""
      ;(F[0] !== ec || F[1] !== ed || F[2] !== eu || F[3] !== ep || F[4] !== em || F[5] !== eg
        ? ((t = { line1: ec, line2: ed, city: eu, state: ep, postal_code: em, country: eg }),
          (F[0] = ec),
          (F[1] = ed),
          (F[2] = eu),
          (F[3] = ep),
          (F[4] = em),
          (F[5] = eg),
          (F[6] = t))
        : (t = F[6]),
        F[7] !== eo || F[8] !== t ? ((n = { name: eo, address: t }), (F[7] = eo), (F[8] = t), (F[9] = n)) : (n = F[9]))
      let eh = n,
        [ef, e_] = (0, o.useState)(eh),
        [ey, eb] = (0, o.useState)(Object.values(eh.address).some(et)),
        [ex, ev] = (0, o.useState)(!1),
        [eT, eA] = (0, o.useState)(!1),
        ew = (0, _.Fj)("2144562623"),
        ej = Z ?? ew.value.tax_types,
        eN = ef.address.country
      F[10] !== ej ? ((s = ej ?? {}), (F[10] = ej), (F[11] = s)) : (s = F[11])
      let eI = (0, V.oj)(eN, s)
      F[12] !== Y.tax_ids ? ((r = () => Y.tax_ids.map(ee)), (F[12] = Y.tax_ids), (F[13] = r)) : (r = F[13])
      let [eS, eE] = (0, o.useState)(r),
        eC = (0, o.useRef)(Y.tax_ids.length)
      if (F[14] !== Y.tax_ids || F[15] !== ej) {
        let e
        F[17] !== ej ? ((e = ej ?? {}), (F[17] = ej), (F[18] = e)) : (e = F[18])
        let t = (0, V.Ts)(e)
        ;((d = null != t && Y.tax_ids.every((e) => null != (0, V.wW)(t, e))),
          (F[14] = Y.tax_ids),
          (F[15] = ej),
          (F[16] = d))
      } else d = F[16]
      let eP = d,
        eB = eS.filter((e) => {
          let { taxId: t } = e
          return null != (0, V.wW)(eI, t)
        }),
        ek = new Set(
          eB.map((e) => {
            let { taxId: t } = e
            return (0, V.wW)(eI, t)?.type
          }),
        ),
        eL = eI.filter((e) => {
          let { type: t } = e
          return !ek.has(t)
        }),
        eM = eB.every((e) => {
          let { taxId: t } = e,
            n = (0, V.wW)(eI, t)
          return null != n && (0, x.Gm)(n.type, t.value)
        })
      ;(F[19] !== q || F[20] !== X || F[21] !== ea
        ? ((u = async () => {
            ;(await (0, R.fI)(ea, q), X())
          }),
          (F[19] = q),
          (F[20] = X),
          (F[21] = ea),
          (F[22] = u))
        : (u = F[22]),
        F[23] !== $ ? ((p = () => $(!1)), (F[23] = $), (F[24] = p)) : (p = F[24]))
      let {
          mutate: eG,
          isPending: eO,
          isError: eD,
          error: eR,
          reset: eH,
        } = (0, T.n)({
          mutationFn: async () => {
            if (null != K && en(ei.getContext().user) !== K) throw Error("Billing tax config identity changed")
            if (!ex || !ey || !eM || !eP) throw Error("Incomplete billing details")
            if (
              ($(!0),
              !(
                await k.CodexRequest.safePost("/payments/billing_info", {
                  requestBody: {
                    account_id: q,
                    email: er.trim(),
                    name: ef.name.trim() || null,
                    address: ef.address,
                    tax_ids: eB.map(J),
                  },
                })
              ).success)
            )
              throw Error("Billing information could not be saved")
          },
          onSuccess: u,
          onSettled: p,
        }),
        eU = N.R4,
        ez = (e) => {
          ;(e.preventDefault(), eA(!0), ex && ey && eM && eP && !eO && eG())
        }
      F[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, a.jsx)(N.c7, { title: (0, a.jsx)(j.L3, { children: (0, a.jsx)(Q, {}) }) })), (F[25] = m))
        : (m = F[25])
      let eW = N.OO
      ;(F[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, a.jsx)(c.A, {
            id: "settings.consumerBilling.billingEmail",
            defaultMessage: "Billing email",
            description:
              "Label for the address receiving billing communications, shown in the consumer billing summary and editor",
          })),
          (F[26] = h))
        : (h = F[26]),
        F[27] !== es
          ? ((f = (0, a.jsx)("label", {
              className: "text-sm font-medium text-default select-none",
              htmlFor: es,
              children: h,
            })),
            (F[27] = es),
            (F[28] = f))
          : (f = F[28]),
        F[29] !== eD || F[30] !== eH
          ? ((b = (e) => {
              ;(el(e.target.value), eD && eH())
            }),
            (F[29] = eD),
            (F[30] = eH),
            (F[31] = b))
          : (b = F[31]),
        F[32] !== er || F[33] !== es || F[34] !== eO || F[35] !== b
          ? ((A = (0, a.jsx)(I.pd, {
              id: es,
              autoComplete: "email",
              autoFocus: !0,
              disabled: eO,
              name: "billing-email",
              type: "email",
              required: !0,
              value: er,
              onChange: b,
            })),
            (F[32] = er),
            (F[33] = es),
            (F[34] = eO),
            (F[35] = b),
            (F[36] = A))
          : (A = F[36]),
        F[37] !== f || F[38] !== A
          ? ((S = (0, a.jsxs)(N.RW, { children: [f, A] })), (F[37] = f), (F[38] = A), (F[39] = S))
          : (S = F[39]),
        F[40] === Symbol.for("react.memo_cache_sentinel") ? ((E = [...y.qo]), (F[40] = E)) : (E = F[40]),
        F[41] !== eh
          ? ((C = { mode: "billing", allowedCountries: E, defaultValues: eh }), (F[41] = eh), (F[42] = C))
          : (C = F[42]),
        F[43] === Symbol.for("react.memo_cache_sentinel") ? ((P = () => ev(!0)), (F[43] = P)) : (P = F[43]),
        F[44] !== eN || F[45] !== eD || F[46] !== eH || F[47] !== eP || F[48] !== ej
          ? ((L = (e) => {
              if ((e_(e.value), eb(e.complete), eP && e.value.address.country !== eN)) {
                let t = e.value.address.country,
                  n = (0, V.oj)(t, ej ?? {})
                eE((e) =>
                  e.filter((e) => {
                    let { taxId: t } = e
                    return null != (0, V.wW)(n, t)
                  }),
                )
              }
              ;(eA(!1), eD && eH())
            }),
            (F[44] = eN),
            (F[45] = eD),
            (F[46] = eH),
            (F[47] = eP),
            (F[48] = ej),
            (F[49] = L))
          : (L = F[49]),
        F[50] !== C || F[51] !== L
          ? ((M = (0, a.jsx)(v.H1, { options: C, onReady: P, onChange: L })), (F[50] = C), (F[51] = L), (F[52] = M))
          : (M = F[52]))
      let eF =
        eI.length > 0
          ? (0, a.jsxs)(N.RW, {
              children: [
                eB.map((e) => {
                  let { key: t, taxId: n } = e
                  return (0, a.jsx)(
                    W.Y,
                    {
                      available: eI.filter((e) => {
                        let { type: t } = e
                        return t === (0, V.wW)(eI, n)?.type || !ek.has(t)
                      }),
                      selected: (0, V.wW)(eI, n),
                      taxId: n,
                      enabled: !0,
                      compact: !0,
                      disabled: eO,
                      showErrors: eT,
                      onRemove: () => {
                        ;(eE((e) => e.filter((e) => e.key !== t)), eD && eH())
                      },
                      onChange: (e) => {
                        ;(eE((n) => n.map((n) => (n.key === t ? { key: t, taxId: e } : n))), eA(!1), eD && eH())
                      },
                    },
                    t,
                  )
                }),
                eL.length > 0
                  ? (0, a.jsx)(w.$, {
                      className: "self-start",
                      color: "ghost",
                      type: "button",
                      size: "dialog",
                      disabled: eO,
                      onClick: () => {
                        let e = (0, V.H2)(eL, null, eN)
                        if (null == e) return
                        eC.current = eC.current + 1
                        let t = eC.current
                        ;(eE((n) => [...n, { key: t, taxId: { type: e.stripe_type, country: e.country, value: "" } }]),
                          eA(!1),
                          eD && eH())
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
      ;(F[53] !== eP
        ? ((G = eP
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
          (F[53] = eP),
          (F[54] = G))
        : (G = F[54]),
        F[55] !== eR || F[56] !== eD
          ? ((O = eD
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    (null != eR && (0, B.d)(eR)?.message) ||
                    (0, a.jsx)(c.A, {
                      id: "settings.consumerBilling.saveInformationError",
                      defaultMessage: "Unable to save billing information. Please try again.",
                      description:
                        "Error when saving consumer billing details fails; the editor retains the entered values for a retry",
                    }),
                })
              : null),
            (F[55] = eR),
            (F[56] = eD),
            (F[57] = O))
          : (O = F[57]),
        F[58] !== eW || F[59] !== S || F[60] !== M || F[61] !== eF || F[62] !== G || F[63] !== O
          ? ((D = (0, a.jsxs)(eW, { className: "gap-4", children: [S, M, eF, G, O] })),
            (F[58] = eW),
            (F[59] = S),
            (F[60] = M),
            (F[61] = eF),
            (F[62] = G),
            (F[63] = O),
            (F[64] = D))
          : (D = F[64]))
      let eq = !ex || !ey || !eP || eO
      return (
        F[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.save",
              defaultMessage: "Save",
              description: "Button saving edits to consumer billing information or a saved card",
            })),
            (F[65] = H))
          : (H = F[65]),
        F[66] !== eO || F[67] !== eq
          ? ((U = (0, a.jsx)(N.OO, {
              children: (0, a.jsx)(N.Es, {
                children: (0, a.jsx)(w.$, { color: "primary", type: "submit", disabled: eq, loading: eO, children: H }),
              }),
            })),
            (F[66] = eO),
            (F[67] = eq),
            (F[68] = U))
          : (U = F[68]),
        F[69] !== eU || F[70] !== ez || F[71] !== m || F[72] !== D || F[73] !== U
          ? ((z = (0, a.jsxs)(eU, { as: "form", onSubmit: ez, children: [m, D, U] })),
            (F[69] = eU),
            (F[70] = ez),
            (F[71] = m),
            (F[72] = D),
            (F[73] = U),
            (F[74] = z))
          : (z = F[74]),
        z
      )
    }
    function J(e) {
      let { taxId: t } = e
      return (0, x.aI)(t)
    }
    function ee(e, t) {
      return { key: t, taxId: e }
    }
    function et(e) {
      return !!e
    }
    function en(e) {
      return JSON.stringify([e.userID, e.customIDs?.account_id, e.customIDs?.stableID])
    }
    var ea = n("i3p7"),
      ei = n("irkb"),
      es = n("Ghh3"),
      er = n("djbx"),
      el = n("SGsN"),
      eo = n("F0xz"),
      ec = n("AKNp"),
      ed = n("ae6t"),
      eu = n("eShZ"),
      ep = n("S2r0")
    async function em(e, t, n, a) {
      let { queryKey: i } = eg(t),
        s = e.getQueryState(i)?.dataUpdateCount,
        r = await es.Request.safePatch("/payments/invoice-expensing", {
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
    function eg(e, t = !0) {
      return (0, ep.j)({
        queryKey: ["consumer-billing", e, "invoice-expensing"],
        queryFn: ({ signal: e }) => es.Request.safeGet("/payments/invoice-expensing", { signal: e }),
        enabled: t,
        staleTime: 0,
        gcTime: 0,
        retry: !1,
      })
    }
    class eh extends Error {}
    function ef(e) {
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
        j,
        N,
        I,
        P,
        B = (0, i.c)(67),
        { accountId: k } = e,
        L = (0, l.gh)(g.u),
        M = (0, A.A)()
      B[0] !== k ? ((t = eg(k)), (B[0] = k), (B[1] = t)) : (t = B[1])
      let { data: O, isLoadingError: D, refetch: R } = (0, r.I)(t),
        U = null != O && (O.eligible || null != O.destination),
        z = (0, o.useRef)(!1)
      ;(B[2] !== L || B[3] !== U
        ? ((n = () => {
            U &&
              !z.current &&
              ((z.current = !0), G(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SHOWN"))
          }),
          (s = [L, U]),
          (B[2] = L),
          (B[3] = U),
          (B[4] = n),
          (B[5] = s))
        : ((n = B[4]), (s = B[5])),
        (0, o.useEffect)(n, s))
      let [W, q] = (0, o.useState)(!1),
        Y = (0, o.useRef)(null),
        V = (0, ed.j)(),
        K = (0, _.AS)(),
        Z = (0, ei.jE)(),
        $ = (0, o.useRef)(null)
      ;(B[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => $.current?.abort()), (u = []), (B[6] = d), (B[7] = u))
        : ((d = B[6]), (u = B[7])),
        (0, o.useEffect)(d, u),
        B[8] !== k || B[9] !== W || B[10] !== M || B[11] !== O?.enabled || B[12] !== Z || B[13] !== L
          ? ((p = {
              networkMode: "always",
              mutationFn: async (e) => {
                let t = new AbortController()
                $.current = t
                let n = await em(Z, k, e, t.signal)
                !t.signal.aborted &&
                  (G(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_PREFERENCES_SAVED"),
                  O?.enabled &&
                    !n.enabled &&
                    G(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_RECURRING_DISABLED"),
                  W &&
                    (L.get(el.Id).success(
                      M.formatMessage({
                        id: "settings.invoiceExpensing.saved",
                        defaultMessage: "Receipt email preferences saved",
                        description: "Confirmation after saving a work email for future receipts in Billing settings",
                      }),
                    ),
                    q(!1)))
              },
              retry: !1,
            }),
            (B[8] = k),
            (B[9] = W),
            (B[10] = M),
            (B[11] = O?.enabled),
            (B[12] = Z),
            (B[13] = L),
            (B[14] = p))
          : (p = B[14]))
      let { mutate: Q, isPending: X, isError: J, reset: ee } = (0, T.n)(p)
      if (D) {
        let e
        return (
          B[15] !== R ? ((e = (0, a.jsx)(H.E, { onRetry: () => void R() })), (B[15] = R), (B[16] = e)) : (e = B[16]),
          e
        )
      }
      return U
        ? (B[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, a.jsx)(S.X.Header, {
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
          B[22] !== O.destination ||
          B[23] !== O.eligible ||
          B[24] !== O.enabled ||
          B[25] !== ee ||
          B[26] !== L
            ? ((f = (0, a.jsx)(E.ic, {
                label: h,
                controlSizing: "content",
                control: (e) =>
                  (0, a.jsx)(eo.l, {
                    ...e,
                    checked: !0 === O.enabled,
                    disabled: X || W || (!O.eligible && !O.enabled),
                    onClick: (e) => {
                      Y.current = e.currentTarget
                    },
                    onChange: (e) => {
                      e && null == O.destination
                        ? (ee(), G(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"), q(!0))
                        : Q({ destination: O.destination ?? null, enabled: e })
                    },
                  }),
              })),
              (B[19] = W),
              (B[20] = X),
              (B[21] = Q),
              (B[22] = O.destination),
              (B[23] = O.eligible),
              (B[24] = O.enabled),
              (B[25] = ee),
              (B[26] = L),
              (B[27] = f))
            : (f = B[27]),
          B[28] !== X ||
          B[29] !== O.destination ||
          B[30] !== O.eligible ||
          B[31] !== O.enabled ||
          B[32] !== ee ||
          B[33] !== L
            ? ((y = O.enabled
                ? (0, a.jsx)(E.ic, {
                    label: (0, a.jsx)(c.A, {
                      id: "settings.invoiceExpensing.workEmail",
                      defaultMessage: "Work email",
                      description: "Label for the work email destination of personal subscription invoice PDFs",
                    }),
                    description: (0, a.jsx)("span", {
                      className: "block truncate select-text",
                      title: O.destination ?? void 0,
                      children: O.destination,
                    }),
                    controlSizing: "content",
                    control: (0, a.jsx)(w.$, {
                      color: "secondary",
                      size: "toolbar",
                      disabled: X || !O.eligible,
                      onClick: (e) => {
                        ;((Y.current = e.currentTarget),
                          ee(),
                          G(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                          q(!0))
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
              (B[29] = O.destination),
              (B[30] = O.eligible),
              (B[31] = O.enabled),
              (B[32] = ee),
              (B[33] = L),
              (B[34] = y))
            : (y = B[34]),
          B[35] !== y || B[36] !== f
            ? ((b = (0, a.jsxs)(C.t, { children: [f, y] })), (B[35] = y), (B[36] = f), (B[37] = b))
            : (b = B[37]),
          B[38] !== O.eligible || B[39] !== O.enabled
            ? ((x =
                O.enabled && !O.eligible
                  ? (0, a.jsx)(S.X.Footer, {
                      children: (0, a.jsx)(c.A, {
                        id: "settings.invoiceExpensing.paused",
                        defaultMessage: "Automatic emails are paused for your current plan",
                        description:
                          "Status when automatic invoice emails remain selected but the current account is not eligible to receive them",
                      }),
                    })
                  : null),
              (B[38] = O.eligible),
              (B[39] = O.enabled),
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
          B[44] !== V ||
          B[45] !== O.destination ||
          B[46] !== O.eligible ||
          B[47] !== O.enabled ||
          B[48] !== L ||
          B[49] !== K
            ? ((j =
                O.enabled && null != O.destination && O.eligible && (0, ec.ku)(K, "invoice_expensing")
                  ? (0, a.jsx)(F.l, {
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
                        ;(G(L, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_EXPLORE_BUSINESS_CLICKED"),
                          V({
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
              (B[44] = V),
              (B[45] = O.destination),
              (B[46] = O.eligible),
              (B[47] = O.enabled),
              (B[48] = L),
              (B[49] = K),
              (B[50] = j))
            : (j = B[50]),
          B[51] !== b || B[52] !== x || B[53] !== v || B[54] !== j
            ? ((N = (0, a.jsxs)(S.X.Content, { children: [b, x, v, j] })),
              (B[51] = b),
              (B[52] = x),
              (B[53] = v),
              (B[54] = j),
              (B[55] = N))
            : (N = B[55]),
          B[56] !== W ||
          B[57] !== J ||
          B[58] !== X ||
          B[59] !== Q ||
          B[60] !== O.destination ||
          B[61] !== O.eligible ||
          B[62] !== ee
            ? ((I = W
                ? (0, a.jsx)(e_, {
                    initialDestination: O.destination ?? "",
                    isPending: X,
                    isError: J,
                    onSave: (e) => Q({ destination: e, enabled: !0 }),
                    eligible: O.eligible,
                    onEdit: ee,
                    onClose: () => q(!1),
                    onCloseAutoFocus: (e) => {
                      Y.current?.isConnected && (e.preventDefault(), Y.current.focus())
                    },
                  })
                : null),
              (B[56] = W),
              (B[57] = J),
              (B[58] = X),
              (B[59] = Q),
              (B[60] = O.destination),
              (B[61] = O.eligible),
              (B[62] = ee),
              (B[63] = I))
            : (I = B[63]),
          B[64] !== N || B[65] !== I
            ? ((P = (0, a.jsxs)(S.X, { children: [m, N, I] })), (B[64] = N), (B[65] = I), (B[66] = P))
            : (P = B[66]),
          P)
        : null
    }
    function e_(e) {
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
          onEdit: T,
          onSave: A,
          onClose: I,
          onCloseAutoFocus: S,
        } = e,
        [E, C] = (0, o.useState)(y),
        P = !b
      ;(_[0] !== S ? ((t = { "aria-describedby": void 0, onCloseAutoFocus: S }), (_[0] = S), (_[1] = t)) : (t = _[1]),
        _[2] !== b || _[3] !== I
          ? ((n = (e) => {
              e || b || I()
            }),
            (_[2] = b),
            (_[3] = I),
            (_[4] = n))
          : (n = _[4]),
        _[5] !== E || _[6] !== v || _[7] !== b || _[8] !== A
          ? ((s = (e) => {
              ;(e.preventDefault(), !b && v && A(E.trim()))
            }),
            (_[5] = E),
            (_[6] = v),
            (_[7] = b),
            (_[8] = A),
            (_[9] = s))
          : (s = _[9]),
        _[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(N.c7, {
              title: (0, a.jsx)(j.L3, {
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
        _[11] !== T
          ? ((l = (e) => {
              ;(C(e), T())
            }),
            (_[11] = T),
            (_[12] = l))
          : (l = _[12]),
        _[13] !== E || _[14] !== B || _[15] !== l
          ? ((d = (0, a.jsx)(eb, { destination: E, disabled: B, onChange: l })),
            (_[13] = E),
            (_[14] = B),
            (_[15] = l),
            (_[16] = d))
          : (d = _[16]),
        _[17] !== x
          ? ((u = x
              ? (0, a.jsx)(N.OO, {
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
        _[19] !== E || _[20] !== v || _[21] !== b
          ? ((p = b || !v || !E.trim()), (_[19] = E), (_[20] = v), (_[21] = b), (_[22] = p))
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
          ? ((g = (0, a.jsx)(N.Es, {
              children: (0, a.jsx)(w.$, { color: "primary", type: "submit", disabled: p, loading: b, children: m }),
            })),
            (_[24] = b),
            (_[25] = p),
            (_[26] = g))
          : (g = _[26]),
        _[27] !== g || _[28] !== s || _[29] !== d || _[30] !== u
          ? ((h = (0, a.jsxs)(N.R4, { as: "form", onSubmit: s, children: [r, d, u, g] })),
            (_[27] = g),
            (_[28] = s),
            (_[29] = d),
            (_[30] = u),
            (_[31] = h))
          : (h = _[31]),
        _[32] !== P || _[33] !== h || _[34] !== t || _[35] !== n
          ? ((f = (0, a.jsx)(j.lG, {
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
    function ey(e) {
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
        S,
        E,
        C,
        P,
        B,
        k,
        L = (0, i.c)(74),
        { accountId: M, invoiceId: O, preferences: D, onClose: R, onCloseAutoFocus: H } = e,
        U = (0, l.gh)(g.u),
        z = (0, A.A)(),
        W = (0, ei.jE)(),
        [F] = (0, o.useState)(D),
        [q, Y] = (0, o.useState)(!1),
        V = (0, o.useId)(),
        [K, Z] = (0, o.useState)(D.destination ?? ""),
        [$, Q] = (0, o.useState)(null == F.destination),
        X = !F.enabled && !q,
        J = (0, o.useRef)(null)
      ;(L[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => J.current?.abort()), (n = []), (L[0] = t), (L[1] = n))
        : ((t = L[0]), (n = L[1])),
        (0, o.useEffect)(t, n),
        L[2] !== M || L[3] !== X || L[4] !== K || L[5] !== $ || L[6] !== O || L[7] !== W || L[8] !== U
          ? ((s = async () => {
              let e = new AbortController()
              J.current = e
              let t = e.signal,
                n = K.trim()
              if (X && $)
                try {
                  let e = await em(W, M, { destination: n, enabled: !0 }, t)
                  ;(t.throwIfAborted(),
                    Z(e.destination ?? n),
                    Y(!0),
                    G(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_PREFERENCES_SAVED"))
                } catch (e) {
                  throw new eh("Could not save forwarding settings", { cause: e })
                }
              return (
                await es.Request.safePost("/payments/invoice-expensing/{invoice_id}/send", {
                  parameters: { path: { invoice_id: O } },
                  requestBody: { destination: n },
                  signal: t,
                  retry: "never",
                }),
                n
              )
            }),
            (L[2] = M),
            (L[3] = X),
            (L[4] = K),
            (L[5] = $),
            (L[6] = O),
            (L[7] = W),
            (L[8] = U),
            (L[9] = s))
          : (s = L[9]),
        L[10] !== U
          ? ((r = (e) => {
              J.current?.signal.aborted ||
                e instanceof eh ||
                G(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SEND_FAILED")
            }),
            (L[10] = U),
            (L[11] = r))
          : (r = L[11]),
        L[12] !== z || L[13] !== R || L[14] !== U
          ? ((d = (e) => {
              J.current?.signal.aborted ||
                (G(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SEND_SUCCEEDED"),
                U.get(el.Id).success(
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
            (L[12] = z),
            (L[13] = R),
            (L[14] = U),
            (L[15] = d))
          : (d = L[15]),
        L[16] !== s || L[17] !== r || L[18] !== d
          ? ((u = { networkMode: "always", mutationFn: s, onError: r, onSuccess: d, retry: !1 }),
            (L[16] = s),
            (L[17] = r),
            (L[18] = d),
            (L[19] = u))
          : (u = L[19]))
      let { mutate: ee, isPending: et, error: en, reset: ea } = (0, T.n)(u)
      if (L[20] !== en)
        ((p = en
          ? en instanceof eh
            ? "save_failed"
            : en instanceof eu.fk &&
                ("invoice_expensing_not_submitted" === en.errorCode ||
                  (en.status >= 400 && en.status < 500 && 408 !== en.status))
              ? "send_rejected"
              : "send_unconfirmed"
          : null),
          (L[20] = en),
          (L[21] = p))
      else p = L[21]
      let eo = p,
        ec = !et
      ;(L[22] !== H ? ((m = { onCloseAutoFocus: H }), (L[22] = H), (L[23] = m)) : (m = L[23]),
        L[24] !== et || L[25] !== R
          ? ((h = (e) => {
              e || et || R()
            }),
            (L[24] = et),
            (L[25] = R),
            (L[26] = h))
          : (h = L[26]),
        L[27] !== et || L[28] !== ee
          ? ((f = (e) => {
              ;(e.preventDefault(), et || ee())
            }),
            (L[27] = et),
            (L[28] = ee),
            (L[29] = f))
          : (f = L[29]),
        L[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(j.L3, {
              children: (0, a.jsx)(c.A, {
                id: "settings.invoiceExpensing.dialogTitle",
                defaultMessage: "Expense ChatGPT to your company",
                description: "Title of the dialog for emailing a personal ChatGPT invoice to a work address",
              }),
            })),
            (L[30] = _))
          : (_ = L[30]),
        L[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(N.c7, {
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: _,
              subtitle: (0, a.jsx)(j.rr, {
                children: (0, a.jsx)(c.A, {
                  id: "settings.invoiceExpensing.dialog.subtitle",
                  defaultMessage: "Send this receipt to your work email for easy expensing.",
                  description:
                    "Subtitle in the personal Billing receipt-email dialog. Explains that the user receives a receipt at their work email to use in their employer's expense process; the product does not submit an expense.",
                }),
              }),
            })),
            (L[31] = y))
          : (y = L[31]))
      let ed = et || !D.eligible
      ;(L[32] !== ea || L[33] !== eo
        ? ((b = (e) => {
            ;(Z(e), "send_unconfirmed" !== eo && ea())
          }),
          (L[32] = ea),
          (L[33] = eo),
          (L[34] = b))
        : (b = L[34]),
        L[35] !== K || L[36] !== ed || L[37] !== b
          ? ((x = (0, a.jsx)(eb, { destination: K, disabled: ed, onChange: b })),
            (L[35] = K),
            (L[36] = ed),
            (L[37] = b),
            (L[38] = x))
          : (x = L[38]),
        L[39] !== X ||
        L[40] !== V ||
        L[41] !== $ ||
        L[42] !== et ||
        L[43] !== D.eligible ||
        L[44] !== ea ||
        L[45] !== eo
          ? ((v = X
              ? (0, a.jsx)(N.OO, {
                  spacing: "large",
                  children: (0, a.jsx)(N.RW, {
                    children: (0, a.jsxs)(N.fh, {
                      children: [
                        (0, a.jsx)(er.S, {
                          id: V,
                          checked: $,
                          disabled: et || !D.eligible,
                          onCheckedChange: (e) => {
                            ;(Q(e), "send_unconfirmed" !== eo && ea())
                          },
                        }),
                        (0, a.jsx)("label", {
                          className: "text-sm font-medium text-default select-none",
                          htmlFor: V,
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
            (L[39] = X),
            (L[40] = V),
            (L[41] = $),
            (L[42] = et),
            (L[43] = D.eligible),
            (L[44] = ea),
            (L[45] = eo),
            (L[46] = v))
          : (v = L[46]),
        L[47] !== eo
          ? ((I =
              "save_failed" === eo
                ? (0, a.jsx)(N.OO, {
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
            (L[47] = eo),
            (L[48] = I))
          : (I = L[48]),
        L[49] !== q || L[50] !== eo
          ? ((S =
              "send_rejected" === eo || "send_unconfirmed" === eo
                ? (0, a.jsx)(N.OO, {
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
                        "send_unconfirmed" === eo
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
            (L[49] = q),
            (L[50] = eo),
            (L[51] = S))
          : (S = L[51]),
        L[52] !== K || L[53] !== et || L[54] !== D.eligible
          ? ((E = et || !D.eligible || !K.trim()), (L[52] = K), (L[53] = et), (L[54] = D.eligible), (L[55] = E))
          : (E = L[55]))
      let ep = eo ?? "initial"
      return (
        L[56] !== ep
          ? ((C = (0, a.jsx)(c.A, {
              id: "settings.invoiceExpensing.sendReceiptAction",
              defaultMessage:
                "{outcome, select, send_unconfirmed {Send another copy} send_rejected {Try again} other {Send receipt}}",
              description:
                "Button to send an invoice PDF. After an unconfirmed send, the user can deliberately send another copy.",
              values: { outcome: ep },
            })),
            (L[56] = ep),
            (L[57] = C))
          : (C = L[57]),
        L[58] !== et || L[59] !== E || L[60] !== C
          ? ((P = (0, a.jsx)(N.Es, {
              children: (0, a.jsx)(w.$, { color: "primary", type: "submit", disabled: E, loading: et, children: C }),
            })),
            (L[58] = et),
            (L[59] = E),
            (L[60] = C),
            (L[61] = P))
          : (P = L[61]),
        L[62] !== f || L[63] !== x || L[64] !== v || L[65] !== I || L[66] !== S || L[67] !== P
          ? ((B = (0, a.jsxs)(N.R4, { as: "form", onSubmit: f, children: [y, x, v, I, S, P] })),
            (L[62] = f),
            (L[63] = x),
            (L[64] = v),
            (L[65] = I),
            (L[66] = S),
            (L[67] = P),
            (L[68] = B))
          : (B = L[68]),
        L[69] !== h || L[70] !== B || L[71] !== ec || L[72] !== m
          ? ((k = (0, a.jsx)(j.lG, {
              open: !0,
              size: "compact",
              showDialogClose: ec,
              contentProps: m,
              onOpenChange: h,
              children: B,
            })),
            (L[69] = h),
            (L[70] = B),
            (L[71] = ec),
            (L[72] = m),
            (L[73] = k))
          : (k = L[73]),
        k
      )
    }
    function eb(e) {
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
          ? ((l = (0, a.jsx)(N.OO, { spacing: "large", children: (0, a.jsxs)(N.RW, { children: [n, r] }) })),
            (d[10] = n),
            (d[11] = r),
            (d[12] = l))
          : (l = d[12]),
        l
      )
    }
    var ex = n("BDME"),
      ev = n("HZfM"),
      eT = n("soaw"),
      eA = n("mXrZ")
    function ew(e) {
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
        { authorization: y, busy: b, failed: x, termsChanged: v, onConfirm: T, onClose: I } = e,
        S = (0, A.A)(),
        E = y?.mandate_terms,
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
      let k = t
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
          (k = e))
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
          (k = e))
      }
      let L = null
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
          (L = e))
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
          (L = e))
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
          (L = e))
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
          (L = e))
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
          (L = e))
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
          (L = e))
      }
      let M = !b
      return (
        _[9] !== b || _[10] !== I
          ? ((n = (e) => {
              e || b || I()
            }),
            (_[9] = b),
            (_[10] = I),
            (_[11] = n))
          : (n = _[11]),
        _[12] !== b || _[13] !== T
          ? ((s = (e) => {
              ;(e.preventDefault(), b || T())
            }),
            (_[12] = b),
            (_[13] = T),
            (_[14] = s))
          : (s = _[14]),
        _[15] !== k
          ? ((r = (0, a.jsx)(N.c7, { title: (0, a.jsx)(j.L3, { children: k }) })), (_[15] = k), (_[16] = r))
          : (r = _[16]),
        _[17] !== C || _[18] !== S || _[19] !== E
          ? ((l =
              C && null != E
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
                            amount: (0, eA.J)(S, E.amount, E.currency),
                            amountType: E.amount_type,
                            interval: E.interval,
                            intervalCount: E.interval_count,
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
            (_[18] = S),
            (_[19] = E),
            (_[20] = l))
          : (l = _[20]),
        _[21] !== L
          ? ((o = (0, a.jsx)("div", { role: "status", "aria-live": "polite", children: L })), (_[21] = L), (_[22] = o))
          : (o = _[22]),
        _[23] !== l || _[24] !== o
          ? ((d = (0, a.jsx)(N.OO, {
              children: (0, a.jsx)(j.rr, { asChild: !0, children: (0, a.jsxs)("div", { children: [l, o] }) }),
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
        _[30] !== C || _[31] !== B || _[32] !== b || _[33] !== E || _[34] !== P
          ? ((m =
              P || B
                ? null
                : (0, a.jsx)(w.$, {
                    color: "primary",
                    type: "submit",
                    disabled: b,
                    children:
                      C && null != E
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
            (_[33] = E),
            (_[34] = P),
            (_[35] = m))
          : (m = _[35]),
        _[36] !== p || _[37] !== m
          ? ((g = (0, a.jsxs)(N.Es, { children: [p, m] })), (_[36] = p), (_[37] = m), (_[38] = g))
          : (g = _[38]),
        _[39] !== b || _[40] !== g || _[41] !== s || _[42] !== r || _[43] !== d
          ? ((h = (0, a.jsxs)(N.R4, {
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
        _[45] !== h || _[46] !== M || _[47] !== n
          ? ((f = (0, a.jsx)(j.lG, { open: !0, showDialogClose: M, onOpenChange: n, children: h })),
            (_[45] = h),
            (_[46] = M),
            (_[47] = n),
            (_[48] = f))
          : (f = _[48]),
        f
      )
    }
    var ej = n("yGJW")
    let eN = {
      not_required: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_NOT_REQUIRED",
      unavailable: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_UNAVAILABLE",
      requires_confirmation: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_REQUIRES_CONFIRMATION",
      requires_action: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_REQUIRES_ACTION",
      processing: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_PROCESSING",
      verified: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_VERIFIED",
      awaiting_stripe_migration: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_STATUS_AWAITING_STRIPE_MIGRATION",
    }
    function eI(e, { actionType: t, status: n, operation: a, providerResult: i }) {
      try {
        ;(0, ej.yy)(e, L.qD, {
          actionType: t,
          location: "CHATGPT_WEB_BILLING_SETTINGS_LOCATION_CONSUMER_BILLING_PAGE",
          status: null == n ? void 0 : eN[n],
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
        T,
        w,
        j,
        N,
        I,
        S,
        E = (0, i.c)(80),
        { accountId: C } = e,
        P = (0, l.gh)(g.u),
        B = (0, ev.zy)(),
        k = (0, ev.Zp)()
      E[0] !== B.search
        ? ((t = new URLSearchParams(B.search).has("billing_mandate_authorization")), (E[0] = B.search), (E[1] = t))
        : (t = E[1])
      let L = t,
        [M, G] = (0, o.useState)(!1),
        [O, D] = (0, o.useState)(),
        [R, H] = (0, o.useState)(!1),
        [U, z] = (0, o.useState)(!1),
        [W, Y] = (0, o.useState)(!1),
        V = (0, o.useRef)(!1)
      E[2] !== C ? ((n = { accountId: C, bannerShown: !1, dialogOpen: !1 }), (E[2] = C), (E[3] = n)) : (n = E[3])
      let K = (0, o.useRef)(n),
        Z = (0, o.useRef)("CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_INITIAL_LOAD"),
        $ = (0, eT.a)()
      ;(E[4] !== C ? ((s = ["consumer-billing", C, "mandate-authorization"]), (E[4] = C), (E[5] = s)) : (s = E[5]),
        E[6] !== C || E[7] !== P
          ? ((d = async (e) => {
              let { signal: t } = e,
                n = Z.current
              Z.current = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_INITIAL_LOAD"
              try {
                let e = await es.Request.safePost("/payments/billing/mandate-authorization", {
                  requestBody: { account_id: C, supports_saved_card_retry: !0 },
                  signal: t,
                })
                return (
                  t.aborted ||
                    eI(P, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_STATUS_RECEIVED",
                      operation: n,
                      status: e.status,
                    }),
                  e
                )
              } catch (e) {
                throw (
                  t.aborted ||
                    eI(P, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                      operation: n,
                    }),
                  e
                )
              }
            }),
            (E[6] = C),
            (E[7] = P),
            (E[8] = d))
          : (d = E[8]),
        E[9] !== s || E[10] !== d
          ? ((u = { queryKey: s, queryFn: d, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
            (E[9] = s),
            (E[10] = d),
            (E[11] = u))
          : (u = E[11]))
      let { data: Q, isError: X, isFetching: J, refetch: ee } = (0, r.I)(u),
        et = O ?? Q,
        en = !J && !X && et?.status === "not_required",
        ea = (M || L) && !en,
        ei = et?.status === "requires_confirmation" || et?.status === "requires_action",
        er = et?.status === "awaiting_stripe_migration",
        el = ei || et?.status === "processing" || er,
        eo = el && (ea || !X)
      E[12] !== C || E[13] !== et?.status || E[14] !== eo || E[15] !== ea || E[16] !== P
        ? ((p = () => {
            ;(K.current.accountId !== C && (K.current = { accountId: C, bannerShown: !1, dialogOpen: !1 }),
              eo &&
                !K.current.bannerShown &&
                ((K.current.bannerShown = !0),
                eI(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BANNER_SHOWN",
                  status: et?.status,
                })),
              ea &&
                !K.current.dialogOpen &&
                eI(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_DIALOG_OPENED",
                  status: et?.status,
                }),
              (K.current.dialogOpen = ea))
          }),
          (E[12] = C),
          (E[13] = et?.status),
          (E[14] = eo),
          (E[15] = ea),
          (E[16] = P),
          (E[17] = p))
        : (p = E[17])
      let ec = (0, o.useEffectEvent)(p)
      ;(E[18] !== ec
        ? ((m = () => {
            ec()
          }),
          (E[18] = ec),
          (E[19] = m))
        : (m = E[19]),
        E[20] !== C || E[21] !== eo || E[22] !== ea
          ? ((h = [C, eo, ea]), (E[20] = C), (E[21] = eo), (E[22] = ea), (E[23] = h))
          : (h = E[23]),
        (0, o.useEffect)(m, h),
        E[24] !== B.hash || E[25] !== B.pathname || E[26] !== B.search || E[27] !== k || E[28] !== en
          ? ((y = () => {
              let e = new URLSearchParams(B.search)
              !e.has("billing_mandate_authorization") ||
                ((["setup_intent", "setup_intent_client_secret", "redirect_status"].some((t) => e.has(t)) || en) &&
                  (e.delete("setup_intent"),
                  e.delete("setup_intent_client_secret"),
                  e.delete("redirect_status"),
                  en && e.delete("billing_mandate_authorization"),
                  k({ pathname: B.pathname, search: e.toString(), hash: B.hash }, { replace: !0 })))
            }),
            (f = [B.hash, B.pathname, B.search, k, en]),
            (E[24] = B.hash),
            (E[25] = B.pathname),
            (E[26] = B.search),
            (E[27] = k),
            (E[28] = en),
            (E[29] = f),
            (E[30] = y))
          : ((f = E[29]), (y = E[30])),
        (0, o.useEffect)(y, f),
        E[31] !== B.hash || E[32] !== B.pathname || E[33] !== B.search || E[34] !== k
          ? ((x = function () {
              G(!1)
              let e = new URLSearchParams(B.search)
              ;(e.delete("billing_mandate_authorization"),
                k({ pathname: B.pathname, search: e.toString(), hash: B.hash }, { replace: !0 }))
            }),
            (E[31] = B.hash),
            (E[32] = B.pathname),
            (E[33] = B.search),
            (E[34] = k),
            (E[35] = x))
          : (x = E[35]))
      let ed = x,
        eu = (0, A.A)(),
        ep = (0, _.AS)()
      E[36] !== et?.mandate_terms ||
      E[37] !== ed ||
      E[38] !== Q ||
      E[39] !== eu ||
      E[40] !== $ ||
      E[41] !== ep ||
      E[42] !== ee ||
      E[43] !== O ||
      E[44] !== P
        ? ((v = async function (e) {
            ;(z(!1), Y(!1))
            let t =
              e && et?.mandate_terms != null
                ? "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_CONFIRMATION_PREFLIGHT"
                : "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_DIALOG_REFRESH"
            try {
              var n, a
              let i, s
              Z.current = t
              let r = await ee()
              if (!$()) return
              if (r.isError || null == r.data) return void z(!0)
              let l = r.data,
                o = O ?? Q
              if ((D(l), "not_required" === l.status)) return void ed()
              if (!e || ("requires_confirmation" !== l.status && "requires_action" !== l.status)) return
              if (null == l.client_secret || null == l.publishable_key || null == l.mandate_terms) {
                ;(eI(P, {
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
                return void Y(!0)
              let c = await (0, ex.c)(l.publishable_key, {
                locale: (0, b.eI)(eu.locale, "elements", (0, b.EG)(ep.getLayer(b.Sd.personal))),
              })
              if (!$()) return
              if (null == c) {
                ;(eI(P, {
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
                eI(P, {
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
              if (!$()) return
              ;(eI(P, {
                actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_PROVIDER_RETURNED",
                operation: t,
                providerResult: s,
              }),
                (Z.current = t = "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_OPERATION_POST_CONFIRMATION_REFRESH"))
              let u = await ee()
              if (!$()) return
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
              $() &&
                (eI(P, {
                  actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_OPERATION_FAILED",
                  operation: t,
                }),
                z(!0))
            }
          }),
          (E[36] = et?.mandate_terms),
          (E[37] = ed),
          (E[38] = Q),
          (E[39] = eu),
          (E[40] = $),
          (E[41] = ep),
          (E[42] = ee),
          (E[43] = O),
          (E[44] = P),
          (E[45] = v))
        : (v = E[45])
      let em = v
      E[46] !== em || E[47] !== $
        ? ((T = function (e) {
            V.current ||
              ((V.current = !0),
              H(!0),
              em(e).finally(() => {
                ;((V.current = !1), $() && H(!1))
              }))
          }),
          (E[46] = em),
          (E[47] = $),
          (E[48] = T))
        : (T = E[48])
      let eg = T
      if (!ea && (X || !el)) return null
      if (er) {
        let e
        ;(E[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerAuthorized",
              defaultMessage: "Bank authorization received",
              description:
                "Billing notice title after the bank approved the mandate while subscription setup is still pending",
            })),
            (E[49] = e))
          : (e = E[49]),
          (w = e))
      } else if (et?.status === "processing") {
        let e
        ;(E[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerProcessing",
              defaultMessage: "Authorization processing",
              description: "Billing notice title while the bank's recurring payment authorization is still processing",
            })),
            (E[50] = e))
          : (e = E[50]),
          (w = e))
      } else {
        let e
        ;(E[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerTitle",
              defaultMessage: "Authorization required",
              description:
                "Billing banner indicating that the bank must authorize future recurring subscription card payments",
            })),
            (E[51] = e))
          : (e = E[51]),
          (w = e))
      }
      if (er) {
        let e
        ;(E[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerPending",
              defaultMessage: "Bank authorization received. We’re finishing setup for future subscription payments.",
              description:
                "Bank approval is complete but Stripe has not yet associated the new recurring mandate with the subscription",
            })),
            (E[52] = e))
          : (e = E[52]),
          (j = e))
      } else if (et?.status === "processing") {
        let e
        ;(E[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerProcessingBody",
              defaultMessage: "Your bank authorization is still processing. Check its status before trying again.",
              description:
                "Billing notice asks the customer to check pending recurring card authorization without starting another bank approval",
            })),
            (E[53] = e))
          : (e = E[53]),
          (j = e))
      } else {
        let e
        ;(E[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.mandate.bannerBody",
              defaultMessage: "Authorize your card to enable future subscription payments",
              description:
                "Billing banner inviting customers with a missing recurring mandate to authorize their saved card",
            })),
            (E[54] = e))
          : (e = E[54]),
          (j = e))
      }
      return (
        E[55] !== ei ||
        E[56] !== et?.status ||
        E[57] !== eg ||
        E[58] !== j ||
        E[59] !== Q ||
        E[60] !== P ||
        E[61] !== el ||
        E[62] !== w
          ? ((N = el
              ? (0, a.jsx)(F.l, {
                  variant: "settings",
                  type: "normal",
                  layout: "horizontal",
                  icon: (0, a.jsx)(q.Ko7, { className: "text-warning" }),
                  title: w,
                  content: j,
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
                    ;(eI(P, {
                      actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BANNER_CTA_CLICKED",
                      status: et?.status,
                    }),
                      D(Q),
                      G(!0),
                      ei || eg(!1))
                  },
                })
              : null),
            (E[55] = ei),
            (E[56] = et?.status),
            (E[57] = eg),
            (E[58] = j),
            (E[59] = Q),
            (E[60] = P),
            (E[61] = el),
            (E[62] = w),
            (E[63] = N))
          : (N = E[63]),
        E[64] !== ei ||
        E[65] !== et ||
        E[66] !== R ||
        E[67] !== eg ||
        E[68] !== ed ||
        E[69] !== ea ||
        E[70] !== U ||
        E[71] !== X ||
        E[72] !== J ||
        E[73] !== L ||
        E[74] !== P ||
        E[75] !== W
          ? ((I = ea
              ? (0, a.jsx)(ew, {
                  authorization: et,
                  busy: R || (L && J),
                  failed: U || X,
                  termsChanged: W,
                  onConfirm: () => {
                    ;(ei &&
                      et?.mandate_terms != null &&
                      eI(P, {
                        actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_CONFIRM_CLICKED",
                        status: et.status,
                      }),
                      eg(ei))
                  },
                  onClose: () => {
                    ;(K.current.dialogOpen &&
                      ((K.current.dialogOpen = !1),
                      eI(P, {
                        actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_DIALOG_CLOSED",
                        status: et?.status,
                      })),
                      ed())
                  },
                })
              : null),
            (E[64] = ei),
            (E[65] = et),
            (E[66] = R),
            (E[67] = eg),
            (E[68] = ed),
            (E[69] = ea),
            (E[70] = U),
            (E[71] = X),
            (E[72] = J),
            (E[73] = L),
            (E[74] = P),
            (E[75] = W),
            (E[76] = I))
          : (I = E[76]),
        E[77] !== N || E[78] !== I
          ? ((S = (0, a.jsxs)(a.Fragment, { children: [N, I] })), (E[77] = N), (E[78] = I), (E[79] = S))
          : (S = E[79]),
        S
      )
    }
    var eE = n("Qgfj"),
      eC = n("TjgH"),
      eP = n("bqtn"),
      eB = n("RNul"),
      ek = n("smwl"),
      eL = n("ebvx"),
      eM = n("db0t"),
      eG = n("jQyB")
    function eO(e) {
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
        j,
        N,
        I,
        P,
        B,
        L,
        M,
        O = (0, i.c)(82),
        { accountId: H } = e,
        U = (0, l.gh)(g.u),
        z = (0, A.A)(),
        W = (0, ev.Zp)(),
        F = (0, o.useId)()
      O[0] !== H ? ((t = (0, R.r_)(H)), (O[0] = H), (O[1] = t)) : (t = O[1])
      let { data: Y, isPending: V, isError: K, refetch: Z } = (0, r.I)(t)
      O[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { enabled: !0, includePaymentMethod: !0, refetchOnWindowFocus: "always" }), (O[2] = n))
        : (n = O[2])
      let { data: $, isSuccess: Q, isFetching: X, refetch: J } = (0, ek.q7)(n),
        [ee, et] = (0, o.useState)(null),
        [en, ei] = (0, o.useState)(!1),
        es = (0, o.useRef)(null),
        er = (0, o.useRef)(null)
      O[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => {
            es.current?.isConnected ? es.current.focus() : er.current?.focus()
          }),
          (O[3] = s))
        : (s = O[3])
      let el = s,
        ec = $?.isEnabled ? $.paymentMethod?.payment_method_id : null
      ;(O[4] !== H || O[5] !== Z || O[6] !== J
        ? ((d = async (e) => {
            switch (e.type) {
              case "default":
                await k.CodexRequest.safePost("/payments/payment_method/default", {
                  requestBody: { account_id: H, payment_method_id: e.id },
                })
                break
              case "backup":
                await k.CodexRequest.safePost("/payments/payment_method/backup", {
                  requestBody: { account_id: H, enabled: e.enabled },
                })
                break
              case "remove": {
                let [t, n] = await Promise.all([Z(), J()]),
                  a = t.data?.payment_methods.find((t) => t.id === e.id)
                if (
                  t.isError ||
                  null == a ||
                  !(0, ea.Kq)({
                    paymentMethod: a,
                    defaultPaymentMethodId: t.data?.default_payment_method_id,
                    defaultPaymentMethods: t.data?.default_payment_methods,
                    autoReloadPaymentMethodId: n.data?.isEnabled ? n.data.paymentMethod?.payment_method_id : null,
                    autoReloadResolved: n.isSuccess,
                  })
                )
                  throw Error("Payment method is required by billing")
                await k.CodexRequest.safeDelete("/payments/payment_method/{payment_method_id}", {
                  parameters: { path: { payment_method_id: e.id }, query: { account_id: H } },
                })
              }
            }
          }),
          (O[4] = H),
          (O[5] = Z),
          (O[6] = J),
          (O[7] = d))
        : (d = O[7]),
        O[8] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => ei(!1)), (O[8] = u)) : (u = O[8]),
        O[9] !== H || O[10] !== U
          ? ((p = async (e, t) => {
              ;(await (0, R.fI)(U, H), "remove" === t.type && er.current?.focus())
            }),
            (O[9] = H),
            (O[10] = U),
            (O[11] = p))
          : (p = O[11]),
        O[12] !== d || O[13] !== p
          ? ((m = { mutationFn: d, onMutate: u, onSuccess: p }), (O[12] = d), (O[13] = p), (O[14] = m))
          : (m = O[14]))
      let { mutate: ed, isPending: eu, isError: ep, variables: em, reset: eg } = (0, T.n)(m)
      O[15] !== Y?.payment_methods || O[16] !== Y?.payment_methods.filter
        ? ((h = Y?.payment_methods.filter(eD)),
          (O[15] = Y?.payment_methods),
          (O[16] = Y?.payment_methods.filter),
          (O[17] = h))
        : (h = O[17])
      let eh = h,
        ef = (eh?.length ?? 0) > 1
      if (V) {
        let e
        ;(O[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(D, {
              children: (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.loadingPaymentMethods",
                defaultMessage: "Loading payment methods",
                description: "Status while the consumer's saved payment methods are loading",
              }),
            })),
            (O[18] = e))
          : (e = O[18]),
          (f = e))
      } else if (K) {
        let e
        ;(O[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("p", {
              role: "alert",
              className: "text-sm text-warning",
              children: (0, a.jsx)(c.A, {
                id: "settings.consumerBilling.loadPaymentMethodsError",
                defaultMessage: "Unable to load payment methods. Please try again.",
                description: "Error when the consumer's saved payment methods cannot be loaded",
              }),
            })),
            (O[19] = e))
          : (e = O[19]),
          (f = e))
      } else {
        let e, t, n, i
        ;(O[20] !== eu ||
        O[21] !== em ||
        O[22] !== X ||
        O[23] !== ec ||
        O[24] !== Q ||
        O[25] !== Y.default_payment_method_id ||
        O[26] !== Y.default_payment_methods ||
        O[27] !== Y.payment_methods ||
        O[28] !== z ||
        O[29] !== ed ||
        O[30] !== W ||
        O[31] !== J ||
        O[32] !== F ||
        O[33] !== eg ||
        O[34] !== U
          ? ((e = Y.payment_methods.map((e, t) => {
              let n = e.id === Y.default_payment_method_id,
                i = eu && em?.type === "remove" && em.id === e.id,
                s = (0, ea.JY)(e),
                r = e.id === ec,
                l = !(0, ea.Kq)({
                  paymentMethod: e,
                  defaultPaymentMethodId: Y.default_payment_method_id,
                  defaultPaymentMethods: Y.default_payment_methods,
                  autoReloadPaymentMethodId: ec,
                  autoReloadResolved: Q,
                }),
                o = "card" === e.type || !n
              return (0, a.jsx)(
                E.ic,
                {
                  size: "compact",
                  icon: (0, a.jsx)(q.Y5G, {}),
                  ...(0, eM.G)(e),
                  control: (0, a.jsxs)(a.Fragment, {
                    children: [
                      s ? (0, a.jsx)(eC.E, { variant: "warning", children: (0, a.jsx)(c.A, { ...eR.expired }) }) : null,
                      n ? (0, a.jsx)(eC.E, { children: (0, a.jsx)(c.A, { ...eR.default }) }) : null,
                      o
                        ? (0, a.jsxs)(eP.Ab, {
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
                              children: i ? (0, a.jsx)(eB.y, { className: "icon-xs" }) : (0, a.jsx)(q.e4G, {}),
                            }),
                            children: [
                              n || "custom" === e.type
                                ? null
                                : (0, a.jsx)(eP.ms.Item, {
                                    disabled: eu,
                                    onSelect: () => {
                                      ;(G(
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
                                ? (0, a.jsx)(eP.ms.Item, {
                                    disabled: eu,
                                    onSelect: () => {
                                      ;(eg(),
                                        ei(!1),
                                        G(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_EDIT_PAYMENT_METHOD_CLICKED"),
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
                                : (0, a.jsx)(eP.ms.Item, {
                                    tone: "danger",
                                    disabled: eu || X || l,
                                    focusableWhenDisabled: r && !eu,
                                    "aria-describedby": r ? `${F}-${t}` : void 0,
                                    onSelect: () => {
                                      ;(G(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_REMOVE_PAYMENT_METHOD_CLICKED"),
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
                                      (0, a.jsx)(eP.ms.Message, {
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
                                      (0, a.jsx)(eP.ms.Item, {
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
                                : (0, a.jsx)(eP.ms.Item, {
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
            (O[20] = eu),
            (O[21] = em),
            (O[22] = X),
            (O[23] = ec),
            (O[24] = Q),
            (O[25] = Y.default_payment_method_id),
            (O[26] = Y.default_payment_methods),
            (O[27] = Y.payment_methods),
            (O[28] = z),
            (O[29] = ed),
            (O[30] = W),
            (O[31] = J),
            (O[32] = F),
            (O[33] = eg),
            (O[34] = U),
            (O[35] = e))
          : (e = O[35]),
          O[36] !== Y.payment_methods.length
            ? ((t =
                0 === Y.payment_methods.length
                  ? (0, a.jsx)(E.ic, {
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
              (O[36] = Y.payment_methods.length),
              (O[37] = t))
            : (t = O[37]),
          O[38] !== eu || O[39] !== ef || O[40] !== Y.backup_payment_method_enabled || O[41] !== z || O[42] !== ed
            ? ((n =
                null != Y.backup_payment_method_enabled && ef
                  ? (0, a.jsx)(E.ic, {
                      label: (0, a.jsx)(c.A, { ...eR.backup }),
                      description: (0, a.jsx)(c.A, {
                        id: "settings.consumerBilling.backupDescription",
                        defaultMessage: "Use another payment method if your default payment method fails",
                        description:
                          "Explains the effect of enabling backup payment methods for a consumer subscription",
                      }),
                      control: (0, a.jsx)(eo.l, {
                        checked: Y.backup_payment_method_enabled,
                        disabled: eu,
                        ariaLabel: z.formatMessage(eR.backup),
                        onChange: (e) => ed({ type: "backup", enabled: e }),
                      }),
                    })
                  : null),
              (O[38] = eu),
              (O[39] = ef),
              (O[40] = Y.backup_payment_method_enabled),
              (O[41] = z),
              (O[42] = ed),
              (O[43] = n))
            : (n = O[43]),
          O[44] !== t || O[45] !== n || O[46] !== e
            ? ((i = (0, a.jsxs)(C.t, { children: [e, t, n] })), (O[44] = t), (O[45] = n), (O[46] = e), (O[47] = i))
            : (i = O[47]),
          (f = i))
      }
      return (
        O[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.paymentMethods",
              defaultMessage: "Payment methods",
              description: "Saved payment methods for a consumer subscription",
            })),
            (O[48] = _))
          : (_ = O[48]),
        O[49] !== eg || O[50] !== U
          ? ((y = (e) => {
              ;((es.current = e.currentTarget),
                eg(),
                ei(!1),
                G(U, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_ADD_PAYMENT_METHOD_CLICKED"),
                et({ type: "add" }))
            }),
            (O[49] = eg),
            (O[50] = U),
            (O[51] = y))
          : (y = O[51]),
        O[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)(c.A, {
              id: "settings.consumerBilling.addPaymentMethod",
              defaultMessage: "Add new",
              description: "Open the form to add a personal payment method",
            })),
            (O[52] = b))
          : (b = O[52]),
        O[53] !== eu || O[54] !== y
          ? ((x = (0, a.jsx)(S.X.Header, {
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
            (O[53] = eu),
            (O[54] = y),
            (O[55] = x))
          : (x = O[55]),
        O[56] !== eu || O[57] !== em?.type
          ? ((v =
              eu && em?.type === "remove"
                ? (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.updatingPaymentMethods",
                    defaultMessage: "Updating payment methods…",
                    description:
                      "Status while processing a saved-payment-method removal request, including checking whether removal is permitted and refreshing the list. Does not imply removal has happened or will succeed.",
                  })
                : null),
            (O[56] = eu),
            (O[57] = em?.type),
            (O[58] = v))
          : (v = O[58]),
        O[59] !== v
          ? ((j = (0, a.jsx)("p", { role: "status", className: "sr-only", children: v })), (O[59] = v), (O[60] = j))
          : (j = O[60]),
        O[61] !== en
          ? ((N = en
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
            (O[61] = en),
            (O[62] = N))
          : (N = O[62]),
        O[63] !== ep || O[64] !== em
          ? ((I =
              ep && null != em
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-warning",
                    children: (0, a.jsx)(c.A, { ...eR[`${em.type}Error`] }),
                  })
                : null),
            (O[63] = ep),
            (O[64] = em),
            (O[65] = I))
          : (I = O[65]),
        O[66] !== f || O[67] !== j || O[68] !== N || O[69] !== I
          ? ((P = (0, a.jsxs)(S.X.Content, { children: [j, N, I, f] })),
            (O[66] = f),
            (O[67] = j),
            (O[68] = N),
            (O[69] = I),
            (O[70] = P))
          : (P = O[70]),
        O[71] !== H || O[72] !== ee?.type
          ? ((B =
              ee?.type === "add"
                ? (0, a.jsx)(eL.AddPaymentMethodDialog, {
                    accountId: H,
                    onCloseAutoFocus: el,
                    onClose: () => et(null),
                    onSuccess: (e) => {
                      let { status: t } = e
                      return ei("already_saved" === t)
                    },
                  })
                : null),
            (O[71] = H),
            (O[72] = ee?.type),
            (O[73] = B))
          : (B = O[73]),
        O[74] !== H || O[75] !== ee
          ? ((L =
              ee?.type === "edit"
                ? (0, a.jsx)(eG.I, {
                    accountId: H,
                    methodId: ee.method.id,
                    onCloseAutoFocus: el,
                    onClose: () => et(null),
                  })
                : null),
            (O[74] = H),
            (O[75] = ee),
            (O[76] = L))
          : (L = O[76]),
        O[77] !== x || O[78] !== P || O[79] !== B || O[80] !== L
          ? ((M = (0, a.jsxs)(S.X, { children: [x, P, B, L] })),
            (O[77] = x),
            (O[78] = P),
            (O[79] = B),
            (O[80] = L),
            (O[81] = M))
          : (M = O[81]),
        M
      )
    }
    function eD(e) {
      return "card" === e.type && !(0, ea.JY)(e)
    }
    let eR = (0, eE.YK)({
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
    var eH = n("mBJV"),
      eU = n("laUo"),
      ez = n("QpGz"),
      eW = n("IzuK"),
      eF = n("XP4n"),
      eq = n("tRqc"),
      eY = n("ra39"),
      eV = n("XQoA"),
      eK = n("QG3v")
    let eZ = (0, o.lazy)(async () => ({
        default: (await n.e(461991).then(n.bind(n, "jCCd"))).SubscriptionPlatformDialog,
      })),
      e$ = (0, o.lazy)(async () => ({
        default: (await n.e(376348).then(n.bind(n, "dqlO"))).SubscriptionRenewalDialog,
      })),
      eQ = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(482985), n.e(649333)]).then(n.bind(n, "xaC3"))).PlanDowngradeDialog,
      })),
      eX = (0, o.lazy)(async () => ({ default: (await n.e(531265).then(n.bind(n, "ychY"))).BillingCadenceDialog }))
    function eJ(e) {
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
        T,
        j,
        N,
        I,
        S,
        P,
        B,
        k,
        L,
        M,
        O,
        D,
        R,
        H,
        U,
        z,
        W,
        F,
        Y,
        V,
        K,
        Z,
        $,
        Q,
        X,
        J,
        ee,
        et,
        en = (0, i.c)(134),
        { account: ei, accountId: es } = e,
        er = (0, l.gh)(g.u),
        el = (0, A.A)(),
        eo = (0, ed.j)()
      en[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { logExposure: !0 }), (en[0] = t)) : (t = en[0])
      let ec = (0, ez.q)(t),
        eu = (0, _.AS)()
      en[1] !== ei.account.plan_type
        ? ((n = (0, eU.m6)(ei.account.plan_type)), (en[1] = ei.account.plan_type), (en[2] = n))
        : (n = en[2])
      let ep = n
      en[3] !== ei ? ((s = (0, eV.d)(ei)), (en[3] = ei), (en[4] = s)) : (s = en[4])
      let em = s,
        eg = (0, ev.zy)(),
        eh = (0, ev.Zp)()
      en[5] !== ei ||
      en[6] !== es ||
      en[7] !== em ||
      en[8] !== eg.state?.subscriptionDowngradeAccountId ||
      en[9] !== eg.state?.subscriptionRenewalAccountId ||
      en[10] !== eu
        ? ((d = () => {
            if ("renew" !== em) return null
            if (
              eg.state?.subscriptionDowngradeAccountId === es &&
              !0 === ei.entitlement.has_active_subscription &&
              !ei.entitlement.is_delinquent &&
              null == ei.entitlement.scheduled_plan_change
            ) {
              let e = (0, eU.y_)((0, eW.wN)(ei), {
                checkGate: (e) => eu.checkGate(e),
                isPro200PurchaseAvailable: ei.is_pro_200_purchase_available,
              })
              if (null != e) return { targetPlan: e }
            }
            return eg.state?.subscriptionRenewalAccountId === es ? "renewal" : null
          }),
          (en[5] = ei),
          (en[6] = es),
          (en[7] = em),
          (en[8] = eg.state?.subscriptionDowngradeAccountId),
          (en[9] = eg.state?.subscriptionRenewalAccountId),
          (en[10] = eu),
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
        en[16] !== ei ? ((m = (0, ea.Ah)(ei)), (en[16] = ei), (en[17] = m)) : (m = en[17]))
      let ey = m
      en[18] !== em || en[19] !== eu
        ? ((h =
            "external_manage" !== em &&
            "renew" !== em &&
            "compare_plans" === (0, _.XM)(eu, "1450647191").get("manage_plan_cta_copy_variant", "control")),
          (en[18] = em),
          (en[19] = eu),
          (en[20] = h))
        : (h = en[20])
      let eb = h
      ;(en[21] !== es ? ((f = (0, eY.Ie)(es)), (en[21] = es), (en[22] = f)) : (f = en[22]),
        en[23] !== ei
          ? ((y = (0, eF.F9)(ei) || ("free" !== ei.account.plan_type && null != ei.entitlement.discount)),
            (en[23] = ei),
            (en[24] = y))
          : (y = en[24]),
        en[25] !== y || en[26] !== f
          ? ((b = { ...f, staleTime: 0, enabled: y }), (en[25] = y), (en[26] = f), (en[27] = b))
          : (b = en[27]))
      let { data: ex } = (0, r.I)(b)
      ;(en[28] !== eu
        ? ((x = (e) => (0, _.XM)(eu, "3768341700").get(e, !1)), (en[28] = eu), (en[29] = x))
        : (x = en[29]),
        en[30] !== es || en[31] !== ex || en[32] !== x
          ? ((v = (0, eY.gN)(es, ex, x)), (en[30] = es), (en[31] = ex), (en[32] = x), (en[33] = v))
          : (v = en[33]))
      let { data: eT } = (0, r.I)(v)
      if (
        en[34] !== ei ||
        en[35] !== es ||
        en[36] !== ef ||
        en[37] !== ey ||
        en[38] !== eT ||
        en[39] !== er ||
        en[40] !== eu ||
        en[41] !== ex ||
        en[42] !== ep
      ) {
        H = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t =
              null != (L = (0, eF._N)(ei, ex, eT)) &&
              (L.isAcquisitionCandidate || L.isRetentionCandidate) &&
              (0, _.XM)(eu, "2160290604").get("is_yearly_plus_existing_user_subscription_enabled", !1)
          ;((S = L?.isAcquisitionCandidate === !0 && t), (P = L?.isRetentionCandidate === !0 && t))
          let n = null != L && ("yearly" === L.currentCadence || "yearly" === L.scheduledCadence || S)
          if (
            ((k =
              null != L &&
              n &&
              (("monthly" === L.currentCadence && "yearly" === L.scheduledCadence) ||
                ("yearly" === L.currentCadence && null == L.scheduledCadence) ||
                S ||
                P)),
            null == ep)
          ) {
            H = null
            break e
          }
          if (
            ((B = (e) => {
              null != L && ((0, eq.x)(er, { accountId: es, state: L, entryPoint: e }), e_({ state: L, entryPoint: e }))
            }),
            (I = null),
            "platform" === ef && null != ey)
          ) {
            let e, t
            ;(en[57] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => e_(null)), (en[57] = e)) : (e = en[57]),
              en[58] !== ei || en[59] !== ey
                ? ((t = (0, a.jsx)(eZ, { account: ei, managementSource: ey, onClose: e })),
                  (en[58] = ei),
                  (en[59] = ey),
                  (en[60] = t))
                : (t = en[60]),
              (I = t))
          } else if ("renewal" === ef) {
            let e, t
            ;(en[61] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => e_(null)), (en[61] = e)) : (e = en[61]),
              en[62] !== ei || en[63] !== es
                ? ((t = (0, a.jsx)(e$, { account: ei, accountId: es, onClose: e })),
                  (en[62] = ei),
                  (en[63] = es),
                  (en[64] = t))
                : (t = en[64]),
              (I = t))
          } else if ("object" == typeof ef && null != ef) {
            let e
            ;(en[65] !== ei || en[66] !== es || en[67] !== ef
              ? ((e =
                  "targetPlan" in ef
                    ? (0, a.jsx)(eQ, { account: ei, accountId: es, targetPlan: ef.targetPlan, onClose: () => e_(null) })
                    : (0, a.jsx)(eX, {
                        accountId: es,
                        state: ef.state,
                        entryPoint: ef.entryPoint,
                        onClose: () => e_(null),
                      })),
                (en[65] = ei),
                (en[66] = es),
                (en[67] = ef),
                (en[68] = e))
              : (e = en[68]),
              (I = e))
          }
          ;((N = C.t),
            (j = E.ic),
            en[69] !== ep.pricePlan
              ? ((e = (0, a.jsx)(eK.u, { plan: ep.pricePlan })), (en[69] = ep.pricePlan), (en[70] = e))
              : (e = en[70]))
          let i =
            n && null != L
              ? (0, a.jsx)(eC.E, {
                  variant: "outline",
                  children: (0, a.jsx)(c.A, {
                    id: "settings.consumerBilling.cadenceBadge",
                    defaultMessage: "{period, select, yearly {Annual} other {Monthly}}",
                    description:
                      "Current payment frequency beside the Plus plan title, shown only when annual billing presentation is eligible. period is the current subscription cadence.",
                    values: { period: L.currentCadence },
                  }),
                })
              : null
          ;(en[71] !== e || en[72] !== i
            ? ((R = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [e, i] })),
              (en[71] = e),
              (en[72] = i),
              (en[73] = R))
            : (R = en[73]),
            (T = eK.R),
            (M = ei),
            en[74] !== ei || en[75] !== eT || en[76] !== ex
              ? ((O = (0, eY.T)(ei, ex, eT)), (en[74] = ei), (en[75] = eT), (en[76] = ex), (en[77] = O))
              : (O = en[77]),
            (D =
              n && L?.scheduledCadence != null
                ? { period: L.scheduledCadence, date: L.renewalDate.toISOString() }
                : void 0))
        }
        ;((en[34] = ei),
          (en[35] = es),
          (en[36] = ef),
          (en[37] = ey),
          (en[38] = eT),
          (en[39] = er),
          (en[40] = eu),
          (en[41] = ex),
          (en[42] = ep),
          (en[43] = T),
          (en[44] = j),
          (en[45] = N),
          (en[46] = I),
          (en[47] = S),
          (en[48] = P),
          (en[49] = B),
          (en[50] = k),
          (en[51] = L),
          (en[52] = M),
          (en[53] = O),
          (en[54] = D),
          (en[55] = R),
          (en[56] = H))
      } else
        ((T = en[43]),
          (j = en[44]),
          (N = en[45]),
          (I = en[46]),
          (S = en[47]),
          (P = en[48]),
          (B = en[49]),
          (k = en[50]),
          (L = en[51]),
          (M = en[52]),
          (O = en[53]),
          (D = en[54]),
          (R = en[55]),
          (H = en[56]))
      if (H !== Symbol.for("react.early_return_sentinel")) return H
      en[78] !== T || en[79] !== M || en[80] !== O || en[81] !== D
        ? ((U = (0, a.jsx)(T, { account: M, renewalPrice: O, scheduledCadence: D })),
          (en[78] = T),
          (en[79] = M),
          (en[80] = O),
          (en[81] = D),
          (en[82] = U))
        : (U = en[82])
      let eA = "upgrade" === em ? "upgrade" : "secondary"
      ;(en[83] !== ei.account.plan_type ||
      en[84] !== em ||
      en[85] !== ec ||
      en[86] !== ey ||
      en[87] !== eo ||
      en[88] !== er ||
      en[89] !== ep.pricePlan
        ? ((z = (e) => {
            "external_manage" === em && null != ey
              ? ("partner_managed" !== ey &&
                  G(
                    er,
                    "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_MOBILE_MANAGE_CLICKED",
                    "app_store" === ey
                      ? "CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_APP_STORE"
                      : "CHATGPT_WEB_BILLING_SETTINGS_MOBILE_STORE_GOOGLE_PLAY_STORE",
                  ),
                e_("platform"))
              : "renew" === em
                ? (G(er, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_RENEW_PLAN_CLICKED"), e_("renewal"))
                : ("free" === ei.account.plan_type &&
                    (0, ej.yy)(er, eH.Yvh, {
                      action: "CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED",
                      entryPoint: "CHATGPT_SUBSCRIPTION_UPSELL_ENTRY_POINT_SUBSCRIPTION_SETTINGS",
                      productExperience: "CHATGPT_RATE_LIMIT_BANNER_PRODUCT_EXPERIENCE_CHAT",
                    }),
                  G(er, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CHANGE_PLAN_CLICKED"),
                  eo({
                    currentPlan: ep.pricePlan,
                    event: e,
                    getPricingUrl: ec,
                    nativeSurfaceTabOverride: "personal",
                    source: "consumer_billing_settings_plan_row",
                  }))
          }),
          (en[83] = ei.account.plan_type),
          (en[84] = em),
          (en[85] = ec),
          (en[86] = ey),
          (en[87] = eo),
          (en[88] = er),
          (en[89] = ep.pricePlan),
          (en[90] = z))
        : (z = en[90]),
        en[91] !== em
          ? ((W = "upgrade" === em ? (0, a.jsx)(q.JRA, {}) : null), (en[91] = em), (en[92] = W))
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
        en[96] !== eA || en[97] !== z || en[98] !== W || en[99] !== F
          ? ((Y = (0, a.jsxs)(w.$, { color: eA, size: "toolbar", type: "button", onClick: z, children: [W, F] })),
            (en[96] = eA),
            (en[97] = z),
            (en[98] = W),
            (en[99] = F),
            (en[100] = Y))
          : (Y = en[100]),
        en[101] !== el || en[102] !== B || en[103] !== k
          ? ((V = k
              ? (0, a.jsx)(eP.Ab, {
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
                    children: (0, a.jsx)(q.l0Y, {}),
                  }),
                  children: (0, a.jsx)(eP.ms.Item, {
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
            (en[103] = k),
            (en[104] = V))
          : (V = en[104]),
        en[105] !== Y || en[106] !== V
          ? ((K = (0, a.jsxs)(a.Fragment, { children: [Y, V] })), (en[105] = Y), (en[106] = V), (en[107] = K))
          : (K = en[107]),
        en[108] !== j || en[109] !== R || en[110] !== U || en[111] !== K
          ? ((Z = (0, a.jsx)(j, { label: R, description: U, control: K })),
            (en[108] = j),
            (en[109] = R),
            (en[110] = U),
            (en[111] = K),
            (en[112] = Z))
          : (Z = en[112]),
        en[113] !== L
          ? (($ =
              L?.currentCadence === "yearly" && null == L.scheduledCadence && L.annualSavingsAmount > 0
                ? (0, a.jsx)(e1, { state: L })
                : null),
            (en[113] = L),
            (en[114] = $))
          : ($ = en[114]),
        en[115] !== S || en[116] !== B || en[117] !== L
          ? ((Q =
              null != L && S
                ? (0, a.jsx)(e1, { state: L, offer: "annual_offer", onOpen: () => B("annual_offer") })
                : null),
            (en[115] = S),
            (en[116] = B),
            (en[117] = L),
            (en[118] = Q))
          : (Q = en[118]),
        en[119] !== P || en[120] !== B || en[121] !== L
          ? ((X =
              null != L && P
                ? (0, a.jsx)(e1, { state: L, offer: "keep_saving", onOpen: () => B("keep_saving") })
                : null),
            (en[119] = P),
            (en[120] = B),
            (en[121] = L),
            (en[122] = X))
          : (X = en[122]),
        en[123] !== N || en[124] !== Z || en[125] !== $ || en[126] !== Q || en[127] !== X
          ? ((J = (0, a.jsxs)(N, { children: [Z, $, Q, X] })),
            (en[123] = N),
            (en[124] = Z),
            (en[125] = $),
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
    function e0(e) {
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
        [T, A] = (0, o.useState)(!1)
      f[0] !== y ? ((t = (0, ea.Ah)(y)), (f[0] = y), (f[1] = t)) : (t = f[1])
      let j = t
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
      let N = n
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
        f[5] !== j || f[6] !== b || f[7] !== x
          ? ((r = () => {
              ;(G(x, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_CANCEL_SUBSCRIPTION_CLICKED"), null != j ? A(!0) : b())
            }),
            (f[5] = j),
            (f[6] = b),
            (f[7] = x),
            (f[8] = r))
          : (r = f[8]),
        f[9] !== v
          ? ((d =
              "explicit" === (0, _.hW)(v, "1779238992").get("cancel_plan_cta_copy_variant", "control")
                ? N
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
          ? ((p = (0, a.jsx)(C.t, { children: (0, a.jsx)(E.ic, { label: N, description: s, control: u }) })),
            (f[14] = s),
            (f[15] = u),
            (f[16] = p))
          : (p = f[16]),
        f[17] !== y || f[18] !== T || f[19] !== j
          ? ((m =
              T && null != j
                ? (0, a.jsx)(o.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(eZ, { account: y, managementSource: j, onClose: () => A(!1) }),
                  })
                : null),
            (f[17] = y),
            (f[18] = T),
            (f[19] = j),
            (f[20] = m))
          : (m = f[20]),
        f[21] !== p || f[22] !== m
          ? ((h = (0, a.jsxs)(a.Fragment, { children: [p, m] })), (f[21] = p), (f[22] = m), (f[23] = h))
          : (h = f[23]),
        h
      )
    }
    function e1(e) {
      let t,
        n,
        s,
        r,
        l = (0, i.c)(13),
        { state: o, offer: d, onOpen: u } = e,
        p = (0, A.A)(),
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
          ? ((r = (0, a.jsx)(E.ic, { label: n, control: s })), (l[10] = n), (l[11] = s), (l[12] = r))
          : (r = l[12]),
        r
      )
    }
    var e2 = n("slpy"),
      e3 = n("on57"),
      e4 = n("ZtSy")
    function e5(e) {
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
        T = (0, i.c)(29),
        { accountId: j, transactions: N, onViewInvoice: I } = e,
        S = (0, l.gh)(g.u),
        E = (0, A.A)()
      T[0] !== j || T[1] !== N
        ? ((n = eg(j, (t = N.some(e6)))), (T[0] = j), (T[1] = N), (T[2] = t), (T[3] = n))
        : ((t = T[2]), (n = T[3]))
      let C = n,
        { data: P } = (0, r.I)(C),
        [B, k] = (0, o.useState)(null),
        L = (0, o.useRef)(null),
        M = (0, o.useRef)(!1),
        O = t && P?.eligible === !0
      ;(T[4] !== O || T[5] !== S
        ? ((s = () => {
            O &&
              !M.current &&
              ((M.current = !0), G(S, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_SHOWN"))
          }),
          (d = [O, S]),
          (T[4] = O),
          (T[5] = S),
          (T[6] = s),
          (T[7] = d))
        : ((s = T[6]), (d = T[7])),
        (0, o.useEffect)(s, d),
        T[8] !== E ? ((u = E.formatMessage(te.transactionHistoryTitle)), (T[8] = E), (T[9] = u)) : (u = T[9]),
        T[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...te.transactionTypeHeader }) })),
            (T[10] = p))
          : (p = T[10]),
        T[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...te.transactionDateHeader }) })),
            (T[11] = m))
          : (m = T[11]),
        T[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...te.transactionStatusHeader }) })),
            (T[12] = h))
          : (h = T[12]),
        T[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)("th", { scope: "col", children: (0, a.jsx)(c.A, { ...te.transactionAmountHeader }) })),
            (T[13] = f))
          : (f = T[13]),
        T[14] === Symbol.for("react.memo_cache_sentinel")
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
            (T[14] = _))
          : (_ = T[14]))
      let D = N.map((e) =>
        (0, a.jsx)(
          e7,
          {
            transaction: e,
            expenseAction:
              O && "invoice" === e.type && e.invoice_expensing_eligible
                ? (0, a.jsx)(w.$, {
                    className: "relative z-10",
                    color: "secondary",
                    size: "toolbar",
                    onClick: (t) => {
                      ;((L.current = t.currentTarget),
                        G(S, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_INVOICE_EXPENSING_OPENED"),
                        k(e.id))
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
        T[15] !== D ? ((y = (0, a.jsx)("tbody", { children: D })), (T[15] = D), (T[16] = y)) : (y = T[16]),
        T[17] !== _ || T[18] !== y || T[19] !== u
          ? ((b = (0, a.jsxs)("table", {
              "aria-label": u,
              className: "w-full border-collapse text-start text-sm",
              children: [_, y],
            })),
            (T[17] = _),
            (T[18] = y),
            (T[19] = u),
            (T[20] = b))
          : (b = T[20]),
        T[21] !== j || T[22] !== B || T[23] !== P || T[24] !== L
          ? ((x =
              null != B && P?.eligible
                ? (0, a.jsx)(ey, {
                    accountId: j,
                    invoiceId: B,
                    preferences: P,
                    onClose: () => k(null),
                    onCloseAutoFocus: (e) => {
                      L.current?.isConnected && (e.preventDefault(), L.current.focus())
                    },
                  })
                : null),
            (T[21] = j),
            (T[22] = B),
            (T[23] = P),
            (T[24] = L),
            (T[25] = x))
          : (x = T[25]),
        T[26] !== b || T[27] !== x
          ? ((v = (0, a.jsxs)("div", { className: "overflow-x-auto", children: [b, x] })),
            (T[26] = b),
            (T[27] = x),
            (T[28] = v))
          : (v = T[28]),
        v
      )
    }
    function e6(e) {
      return "invoice" === e.type && e.invoice_expensing_eligible
    }
    function e7(e) {
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
        { transaction: T, expenseAction: j, onViewInvoice: N } = e,
        I = (0, A.A)()
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            added: te.transactionStatusCredit,
            removed: te.transactionStatusDebit,
            paid: te.invoiceStatusPaid,
            due: te.invoiceStatusDue,
            void: te.invoiceStatusVoid,
            uncollectible: te.invoiceStatusUncollectible,
            draft: te.invoiceStatusDraft,
          }),
          (v[0] = t))
        : (t = v[0])
      let S = t,
        E = "default"
      "added" === T.status
        ? (E = "success")
        : "due" === T.status
          ? (E = "warning")
          : "uncollectible" === T.status && (E = "danger")
      let C = "invoice" === T.type && T.product?.type === "subscription" ? T.product.seat_quantities : null,
        P = "invoice" === T.type ? T.invoice_url : null,
        B =
          P &&
          "relative isolate transform-[translate(0)] hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover"
      ;(v[1] !== B
        ? ((n = (0, e3.A)("border-b border-default last:border-b-0", B)), (v[1] = B), (v[2] = n))
        : (n = v[2]),
        v[3] !== T
          ? ((s = (0, a.jsx)("span", {
              className: "min-w-0 break-words",
              children: (0, a.jsx)(e9, { transaction: T }),
            })),
            (v[3] = T),
            (v[4] = s))
          : (s = v[4]),
        v[5] !== I || v[6] !== T.type
          ? ((r =
              "wallet" === T.type
                ? (0, a.jsx)(e2.m, {
                    content: (0, a.jsx)(c.A, { ...te.walletAdjustmentTooltip }),
                    children: (0, a.jsx)(w.$, {
                      "aria-label": I.formatMessage(te.walletAdjustmentTooltipTrigger),
                      color: "ghost",
                      size: "iconCircleSm",
                      children: (0, a.jsx)(q.zOs, {}),
                    }),
                  })
                : null),
            (v[5] = I),
            (v[6] = T.type),
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
                    children: (0, a.jsx)(eE.dT, { type: "unit", style: "short", value: C.map(e8) }),
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
        v[16] !== T.created_at
          ? ((u = (0, a.jsx)("td", {
              className: "px-3 py-2 whitespace-nowrap text-secondary",
              children: (0, a.jsx)(eE.XU, { value: T.created_at, month: "numeric", day: "numeric", year: "numeric" }),
            })),
            (v[16] = T.created_at),
            (v[17] = u))
          : (u = v[17]))
      let k = S[T.status]
      ;(v[18] !== k ? ((p = (0, a.jsx)(c.A, { ...k })), (v[18] = k), (v[19] = p)) : (p = v[19]),
        v[20] !== E || v[21] !== p
          ? ((m = (0, a.jsx)("td", {
              className: "px-3 py-2 text-center",
              children: (0, a.jsx)(eC.E, { variant: E, children: p }),
            })),
            (v[20] = E),
            (v[21] = p),
            (v[22] = m))
          : (m = v[22]))
      let L =
          "added" === T.status
            ? "px-3 py-2 text-end whitespace-nowrap text-chart-green tabular-nums select-text"
            : "px-3 py-2 text-end whitespace-nowrap text-secondary tabular-nums select-text",
        M = P && "relative z-10"
      return (
        v[23] !== M ? ((g = (0, e3.A)(M)), (v[23] = M), (v[24] = g)) : (g = v[24]),
        v[25] !== I || v[26] !== T.amount || v[27] !== T.currency
          ? ((h = (0, eA.J)(I, T.amount, T.currency)),
            (v[25] = I),
            (v[26] = T.amount),
            (v[27] = T.currency),
            (v[28] = h))
          : (h = v[28]),
        v[29] !== g || v[30] !== h
          ? ((f = (0, a.jsx)("span", { className: g, children: h })), (v[29] = g), (v[30] = h), (v[31] = f))
          : (f = v[31]),
        v[32] !== L || v[33] !== f
          ? ((_ = (0, a.jsx)("td", { className: L, children: f })), (v[32] = L), (v[33] = f), (v[34] = _))
          : (_ = v[34]),
        v[35] !== I || v[36] !== P || v[37] !== N || v[38] !== T.created_at
          ? ((y = P
              ? (0, a.jsx)(e4.G, {
                  appearance: "secondary",
                  "aria-label": I.formatMessage(te.openInvoiceLinkAriaLabel, { createdDate: new Date(T.created_at) }),
                  className:
                    "after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-ring",
                  href: P,
                  initiator: "open_in_browser_bridge",
                  isBrowserEnabled: !1,
                  onClick: N,
                  children: (0, a.jsx)(q.uM3, {}),
                })
              : null),
            (v[35] = I),
            (v[36] = P),
            (v[37] = N),
            (v[38] = T.created_at),
            (v[39] = y))
          : (y = v[39]),
        v[40] !== j || v[41] !== y
          ? ((b = (0, a.jsx)("td", {
              className: "px-3 py-2 text-end",
              children: (0, a.jsxs)("div", { className: "flex items-center justify-end gap-2", children: [j, y] }),
            })),
            (v[40] = j),
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
    function e8(e) {
      return (0, a.jsx)(
        c.A,
        {
          ...("default" === e.seat_type ? te.standardSeatQuantityDelta : te.premiumSeatQuantityDelta),
          values: { quantityDelta: (0, a.jsx)(eE.Gr, { value: e.quantity_delta, signDisplay: "always" }) },
        },
        e.seat_type,
      )
    }
    function e9(e) {
      let t,
        n = (0, i.c)(13),
        { transaction: s } = e
      if ("gift_card" === s.type) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.A, { ...te.giftCardTransactionType })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if ("wallet" === s.type) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.A, { ...te.walletAdjustmentTransactionType })), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      switch (s.product?.type) {
        case "credits": {
          let e,
            t = s.product.is_gifted ? te.giftedCreditsTransactionType : te.creditsTransactionType
          return (n[2] !== t ? ((e = (0, a.jsx)(c.A, { ...t })), (n[2] = t), (n[3] = e)) : (e = n[3]), e)
        }
        case "credits_top_up": {
          let e
          return (
            n[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, { ...te.creditsAutoReloadTransactionType })), (n[4] = e))
              : (e = n[4]),
            e
          )
        }
        case "subscription":
          if (s.product.is_seat_purchase) {
            let e
            return (
              n[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...te.businessSeatsTransactionType })), (n[5] = e))
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
                ? ((e = (0, a.jsx)(c.A, { ...te.businessPlanTransactionType })), (n[6] = e))
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
                ? ((e = (0, a.jsx)(c.A, { ...te.chatGptGoTransactionType })), (n[7] = e))
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
                ? ((e = (0, a.jsx)(c.A, { ...te.chatGptPlusTransactionType })), (n[8] = e))
                : (e = n[8]),
              e
            )
          }
          if ("chatgptpromax" === s.product.plan || "chatgptpromaxfreeplan_with_expiration" === s.product.plan) {
            let e
            return (
              n[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, { ...te.chatGptProTierTransactionType, values: { plan: "promax" } })),
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
                ? ((e = (0, a.jsx)(c.A, { ...te.chatGptProTierTransactionType, values: { plan: "pro" } })), (n[10] = e))
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
                ? ((e = (0, a.jsx)(c.A, { ...te.chatGptProTierTransactionType, values: { plan: "prolite" } })),
                  (n[11] = e))
                : (e = n[11]),
              e
            )
          }
      }
      return (
        n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(c.A, { ...te.invoiceTransactionType })), (n[12] = t))
          : (t = n[12]),
        t
      )
    }
    let te = (0, eE.YK)({
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
    function tt(e) {
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
      m[0] !== h ? ((t = ts(h, 4, null)), (m[0] = h), (m[1] = t)) : (t = m[1])
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
                        ;(G(_, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_ALL_INVOICES_CLICKED"), f())
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
          m[7] !== s ? ((o = (0, a.jsx)(S.X.Header, { title: n, actions: s })), (m[7] = s), (m[8] = o)) : (o = m[8]),
          m[9] !== _
            ? ((d = () => G(_, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_VIEW_INVOICE_CLICKED")),
              (m[9] = _),
              (m[10] = d))
            : (d = m[10]),
          m[11] !== h || m[12] !== y || m[13] !== x || m[14] !== b || m[15] !== d
            ? ((u = (0, a.jsx)(S.X.Content, {
                children: (0, a.jsx)(ti, { accountId: h, data: y, isPending: b, isError: x, onViewInvoice: d }),
              })),
              (m[11] = h),
              (m[12] = y),
              (m[13] = x),
              (m[14] = b),
              (m[15] = d),
              (m[16] = u))
            : (u = m[16]),
          m[17] !== o || m[18] !== u
            ? ((p = (0, a.jsxs)(S.X, { children: [o, u] })), (m[17] = o), (m[18] = u), (m[19] = p))
            : (p = m[19]),
          p)
        : null
    }
    function tn(e) {
      let t,
        n = (0, i.c)(3),
        { accountId: s, onBack: r } = e
      return (
        n[0] !== s || n[1] !== r
          ? ((t = (0, a.jsx)(ta, { accountId: s, onBack: r }, s)), (n[0] = s), (n[1] = r), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function ta(e) {
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
      g[1] !== h || g[2] !== b ? ((n = ts(h, 10, b)), (g[1] = h), (g[2] = b), (g[3] = n)) : (n = g[3])
      let { data: x, isPending: v, isError: T, isFetching: A } = (0, r.I)(n),
        j = _.length > 1,
        N = x?.next_cursor
      return (
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(q.z_d, {})),
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
        g[8] !== h || g[9] !== x || g[10] !== T || g[11] !== v
          ? ((u = (0, a.jsx)(ti, { accountId: h, data: x, isPending: v, isError: T })),
            (g[8] = h),
            (g[9] = x),
            (g[10] = T),
            (g[11] = v),
            (g[12] = u))
          : (u = g[12]),
        g[13] !== _ || g[14] !== x || g[15] !== j || g[16] !== T || g[17] !== A || g[18] !== v || g[19] !== N
          ? ((p =
              !v && !T && null != x && x.transactions.length > 0 && (j || null != N)
                ? (0, a.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, a.jsxs)(w.$, {
                        color: "secondary",
                        size: "toolbar",
                        disabled: !j || A,
                        onClick: () => y(_.slice(0, -1)),
                        children: [
                          (0, a.jsx)(q.z_d, {}),
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
                        disabled: null == N || A,
                        onClick: () => {
                          null != N && y([..._, N])
                        },
                        children: [
                          (0, a.jsx)(c.A, {
                            id: "settingsModal.transactionHistory.pagination.next",
                            defaultMessage: "Next",
                            description: "Loads the next page of the personal account's complete transaction history",
                          }),
                          (0, a.jsx)(q.uM3, {}),
                        ],
                      }),
                    ],
                  })
                : null),
            (g[13] = _),
            (g[14] = x),
            (g[15] = j),
            (g[16] = T),
            (g[17] = A),
            (g[18] = v),
            (g[19] = N),
            (g[20] = p))
          : (p = g[20]),
        g[21] !== d || g[22] !== u || g[23] !== p
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [d, u, p] })), (g[21] = d), (g[22] = u), (g[23] = p), (g[24] = m))
          : (m = g[24]),
        m
      )
    }
    function ti(e) {
      let t,
        n = (0, i.c)(6),
        { accountId: s, data: r, isPending: l, isError: o, onViewInvoice: d } = e
      if (l) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(D, {
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
                    children: (0, a.jsx)(e5, { accountId: s, transactions: r.transactions, onViewInvoice: d }),
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
    function ts(e, t, n) {
      return (0, ep.j)({
        queryKey: ["consumer-billing", e, "transactions", t, n],
        queryFn: ({ signal: a }) =>
          k.CodexRequest.safeGet("/payments/transaction-history", {
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
    var tr = n("Ssp7"),
      tl = n("dT9t")
    function to(e) {
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
        T,
        j,
        N,
        I,
        P = (0, i.c)(65),
        { account: B, accountId: k } = e,
        O = (0, l.gh)(g.u)
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (P[0] = t)) : (t = P[0])
      let D = (0, o.useRef)(t),
        R = (0, A.A)(),
        H = (0, ev.Zp)(),
        { data: U, isPending: z, isFetching: W, isError: F, refetch: q } = (0, l._U)(p.kL, k),
        { client: Y } = (0, _.cn)()
      P[1] !== Y ? ((n = Y.getContext().user?.country?.trim().toUpperCase()), (P[1] = Y), (P[2] = n)) : (n = P[2])
      let V = n
      P[3] !== B || P[4] !== U || P[5] !== Y
        ? ((s = (0, tr.k)(B, U, (0, tr.x)(Y))), (P[3] = B), (P[4] = U), (P[5] = Y), (P[6] = s))
        : (s = P[6])
      let { canRedeem: K, showWallet: Z, usdBalance: $ } = s,
        Q = 0 !== $ ? $ : U?.balance,
        X = !W && !F && U?.balance === 0 && null == U.currency && K
      ;(P[7] !== k || P[8] !== V
        ? ((d = ["consumer-billing", k, "wallet-currency", V]), (P[7] = k), (P[8] = V), (P[9] = d))
        : (d = P[9]),
        P[10] !== Y || P[11] !== V
          ? ((u = (e) => {
              let { signal: t } = e
              return (0, tl.fetchBillingPricingConfig)({
                country: V ?? "US",
                signal: t,
                isPricingEnabled: (e) => Y.getLayer("3768341700").get(e, !1),
              })
            }),
            (P[10] = Y),
            (P[11] = V),
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
        ea = 0 !== $ ? "usd" : (U?.currency ?? (X ? J?.currency_config.symbol_code : null)),
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
        P[22] !== k || P[23] !== F || P[24] !== ei || P[25] !== h || P[26] !== O || P[27] !== Z
          ? ((f = () => {
              ei ||
                (!F && !Z) ||
                D.current.has(k) ||
                (O.get(M.YV).logProductEvent(L.h3, {
                  result:
                    null == h
                      ? "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_READY"
                      : "CHATGPT_WEB_CONSUMER_WALLET_BALANCE_RESULT_UNAVAILABLE",
                  reason: h,
                }),
                D.current.add(k))
            }),
            (P[22] = k),
            (P[23] = F),
            (P[24] = ei),
            (P[25] = h),
            (P[26] = O),
            (P[27] = Z),
            (P[28] = f))
          : (f = P[28]),
        P[29] !== k || P[30] !== F || P[31] !== ei || P[32] !== h || P[33] !== O || P[34] !== Z
          ? ((y = [k, F, ei, h, O, Z]),
            (P[29] = k),
            (P[30] = F),
            (P[31] = ei),
            (P[32] = h),
            (P[33] = O),
            (P[34] = Z),
            (P[35] = y))
          : (y = P[35]),
        (0, o.useEffect)(f, y),
        z || (!F && !Z))
      )
        return null
      if (ei) {
        let e
        ;(P[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsxs)("div", {
              role: "status",
              className: "flex items-center gap-2 text-sm text-secondary",
              children: [
                (0, a.jsx)(eB.y, { className: "icon-xs shrink-0 text-secondary" }),
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
          ? ((e = (0, eA.J)(R, n, ea)), (P[45] = ea), (P[46] = R), (P[47] = n), (P[48] = e))
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
        P[52] !== K || P[53] !== H
          ? ((v = K
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
            (P[52] = K),
            (P[53] = H),
            (P[54] = v))
          : (v = P[54]),
        P[55] !== v ? ((T = (0, a.jsx)(S.X.Header, { title: x, actions: v })), (P[55] = v), (P[56] = T)) : (T = P[56]),
        P[57] !== O
          ? ((j = (0, a.jsx)("p", {
              children: (0, a.jsx)(c.A, {
                id: "settingsModal.walletBalance.fundingHelp.v2",
                defaultMessage:
                  "Your balance includes redeemed OpenAI gift cards and other account credits, like billing adjustments. It's automatically applied to eligible payments, including ChatGPT subscriptions and credit purchases. <helpCenterLink>Learn more</helpCenterLink>",
                description:
                  "Explanation below the monetary account balance in personal Settings > Billing, including loading and unavailable states. Redeemed gift cards and billing adjustments fund this balance, which is automatically applied to eligible ChatGPT subscriptions and credit purchases. This is separate from Agent Wallet. The helpCenterLink opens a Help Center article about this balance and can move naturally in translation.",
                values: {
                  helpCenterLink: (e) =>
                    (0, a.jsx)(e4.G, {
                      appearance: "secondary",
                      href: "https://help.openai.com/articles/20001508",
                      initiator: "open_in_browser_bridge",
                      onActivate: () => G(O, "CHATGPT_WEB_BILLING_SETTINGS_ACTION_TYPE_BALANCE_HELP_OPENED"),
                      children: e,
                    }),
                },
              }),
            })),
            (P[57] = O),
            (P[58] = j))
          : (j = P[58]),
        P[59] !== b || P[60] !== j
          ? ((N = (0, a.jsx)(S.X.Content, {
              children: (0, a.jsx)(C.t, { children: (0, a.jsx)(E.ic, { label: b, description: j, control: null }) }),
            })),
            (P[59] = b),
            (P[60] = j),
            (P[61] = N))
          : (N = P[61]),
        P[62] !== T || P[63] !== N
          ? ((I = (0, a.jsxs)(S.X, { children: [T, N] })), (P[62] = T), (P[63] = N), (P[64] = I))
          : (I = P[64]),
        I
      )
    }
    let tc = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(393623), n.e(39324), n.e(822336)]).then(n.bind(n, "gI58"))).CancellationDialog,
      })),
      td = (0, o.lazy)(async () => ({
        default: (await Promise.all([n.e(393623), n.e(39324), n.e(516248)]).then(n.bind(n, "pIng")))
          .GoPromotionSetupReturnReview,
      }))
    function tu() {
      let e,
        t,
        n,
        s,
        r = (0, i.c)(10),
        [l] = (0, o.useState)(tm)
      ;(r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (r[0] = e)) : (e = r[0]), (0, o.useEffect)(tp, e))
      let { accountId: c, userId: p } = (0, d.As)(),
        { data: m, isLoading: g } = (0, u.YL)()
      if (!g && m?.structure === "personal" && m.id === c && null != p) {
        let e,
          t = c + p
        return (
          r[1] !== c || r[2] !== l || r[3] !== t
            ? ((e = (0, a.jsx)(tg, { accountId: c, setupIntentId: l }, t)),
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
        r[6] !== g ? ((n = g ? (0, a.jsx)(D, {}) : null), (r[6] = g), (r[7] = n)) : (n = r[7]),
        r[8] !== n ? ((s = (0, a.jsx)(h.P, { title: t, children: n })), (r[8] = n), (r[9] = s)) : (s = r[9]),
        s
      )
    }
    function tp() {
      if ("u" < typeof window) return
      let e = new URL(window.location.href)
      if ("1" === e.searchParams.get(s.Cm)) {
        for (let t of s.zD) e.searchParams.delete(t)
        window.history.replaceState(window.history.state, "", e)
      }
    }
    function tm() {
      return "u" > typeof window && "1" === new URL(window.location.href).searchParams.get(s.Cm) ? (0, s.rN)() : null
    }
    function tg(e) {
      let t,
        n,
        u,
        y,
        b,
        x,
        v,
        T,
        A,
        w = (0, i.c)(28),
        { accountId: j, setupIntentId: N } = e,
        I = (0, l.gh)(g.u),
        { userId: S } = (0, d.As)()
      w[0] !== j || w[1] !== N || w[2] !== S
        ? ((t = () => (null == S ? null : (0, s.fn)({ accountId: j, userId: S }, N))),
          (w[0] = j),
          (w[1] = N),
          (w[2] = S),
          (w[3] = t))
        : (t = w[3])
      let [E, C] = (0, o.useState)(t),
        P = (0, o.useRef)(!1)
      w[4] !== I
        ? ((n = () => {
            P.current ||
              ((P.current = !0),
              eI(I, { actionType: "CHATGPT_WEB_BILLING_MANDATE_AUTHORIZATION_ACTION_TYPE_BILLING_VIEWED" }))
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
      let { data: k, isPending: L, isError: M, refetch: G } = (0, l._U)(p.Bd, j),
        O = (0, _.Zj)("200883286"),
        R = k?.entitlement.subscription_plan === "chatgptplus_no_payment_trial"
      ;(w[9] !== j ? ((b = (0, eY.Ie)(j)), (w[9] = j), (w[10] = b)) : (b = w[10]),
        w[11] !== R || w[12] !== b
          ? ((x = { ...b, staleTime: 0, enabled: R, refetchOnMount: "always" }), (w[11] = R), (w[12] = b), (w[13] = x))
          : (x = w[13]))
      let { data: U, isFetching: z, isError: W, isFetchedAfterMount: F, refetch: q } = (0, r.I)(x),
        Y = null == k ? null : (0, m.U)(k, U),
        [V, Z] = (0, o.useState)(!1),
        [$, Q] = (0, o.useState)(!1),
        X = !1
      if (L) {
        let e
        ;(w[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(D, {})), (w[14] = e)) : (e = w[14]),
          (v = e))
      } else if (M || null == k || !1 === k.can_access_with_session) {
        let e
        ;(w[15] !== G ? ((e = (0, a.jsx)(H.E, { onRetry: () => void G() })), (w[15] = G), (w[16] = e)) : (e = w[16]),
          (v = e))
      } else {
        let e,
          t = R && !F && z,
          n = t || null == Y || (R && (W || !F)) ? null : Y,
          i = null == n ? null : (0, ea.Ah)(n),
          s =
            k.account.processor?.a001?.has_customer_object === !0 ||
            (null != n && null == i && (k.account.plan_type ?? "free") !== "free")
        if (t) {
          let t
          ;(w[17] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(D, {})), (w[17] = t)) : (t = w[17]),
            (e = t))
        } else if (null == n) {
          let t
          ;(w[18] !== q ? ((t = (0, a.jsx)(H.E, { onRetry: () => void q() })), (w[18] = q), (w[19] = t)) : (t = w[19]),
            (e = t))
        } else {
          let t
          ;(w[20] !== j || w[21] !== n
            ? ((t = (0, a.jsx)(eJ, { account: n, accountId: j }, n.entitlement.subscription_id)),
              (w[20] = j),
              (w[21] = n),
              (w[22] = t))
            : (t = w[22]),
            (e = t))
        }
        v = (X = V)
          ? (0, a.jsx)(tn, { accountId: j, onBack: () => Z(!1) })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                null != N && null != n
                  ? (0, a.jsx)(o.Suspense, {
                      fallback: (0, a.jsx)(D, {}),
                      children: (0, a.jsx)(td, {
                        accountId: j,
                        account: n,
                        returnedOwner: E,
                        onDismiss: () => C(null),
                      }),
                    })
                  : null,
                s ? (0, a.jsx)(eS, { accountId: j }) : null,
                e,
                null,
                O ? (0, a.jsx)(to, { account: k, accountId: j }) : null,
                (0, a.jsx)(tt, { accountId: j, onViewAll: () => Z(!0) }),
                (0, a.jsx)(ef, { accountId: j }),
                s
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [(0, a.jsx)(K, { accountId: j }), (0, a.jsx)(eO, { accountId: j })],
                    })
                  : null,
                null != n
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        null,
                        (0, a.jsx)(e0, { account: n, onCancelSubscriptionClick: () => Q(!0) }),
                        $
                          ? (0, a.jsx)(o.Suspense, {
                              fallback: (0, a.jsx)(D, {}),
                              children: (0, a.jsx)(
                                tc,
                                { account: n, accountId: j, onClose: () => Q(!1) },
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
          ? ((T = X
              ? (0, a.jsx)(c.A, {
                  id: "settingsModal.transactionHistory.title",
                  defaultMessage: "Transaction history",
                  description:
                    "Heading for a personal account's recent billing transactions and the title of its complete transaction-history subpage",
                })
              : (0, a.jsx)(f.s, { slug: "billing" })),
            (w[23] = X),
            (w[24] = T))
          : (T = w[24]),
        w[25] !== v || w[26] !== T
          ? ((A = (0, a.jsx)(h.P, { title: T, children: v })), (w[25] = v), (w[26] = T), (w[27] = A))
          : (A = w[27]),
        A
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
    var a = n("ncoo")
    n.d(t, { J: () => a.I })
  },
  db0t(e, t, n) {
    n.d(t, { F: () => o, G: () => l })
    var a = n("ABep"),
      i = n("oyxz"),
      s = n("Qgfj"),
      r = n.p + "assets/22408dc0b9aa.svg"
    function l(e) {
      let t = e.type,
        n = null
      "card" === t && null != e.card
        ? ((t = e.card.brand), (n = (0, a.jsx)(i.A, { ...d.maskedNumber, values: { last4: e.card.last4 } })))
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
                    ? (n = (0, a.jsx)(i.A, { ...d.maskedNumber, values: { last4: e.sepa_debit.last4 } }))
                    : "kr_card" === t && e.kr_card?.last4
                      ? (n = (0, a.jsx)(i.A, { ...d.maskedNumber, values: { last4: e.kr_card.last4 } }))
                      : "naver_pay" === t
                        ? (n = e.naver_pay?.buyer_id)
                        : "ideal" === t && (n = e.ideal?.bank)
      let { name: s, imageUrl: r } = o(t),
        l = "kr_card" === e.type ? e.kr_card?.brand?.trim() : null
      return {
        imageUrl: r,
        label: l ? (c[l.toLowerCase()] ?? l) : (0, a.jsx)(i.A, { ...(s ?? d.unsupported) }),
        description: (0, a.jsx)("span", {
          className: "select-text",
          children: null == s ? (0, a.jsx)(i.A, { ...d.detailsUnavailable }) : n,
        }),
      }
    }
    function o(e) {
      return { name: null == e ? void 0 : u.get(e), imageUrl: null == e ? void 0 : m.get(e) }
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
      d = (0, s.YK)({
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
      u = new Map(Object.entries(d)),
      p =
        "https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/paymen_method_icons_svg",
      m = new Map([
        ["amex", `${p}/Logo=Amex.svg`],
        ["discover", r],
        ["visa", `${p}/Logo=Visa.svg`],
        ["mastercard", `${p}/Logo=Mastercard.svg`],
        ["unionpay", `${p}/Logo=Union Pay.svg`],
        ["cashapp", `${p}/Logo=Cash App.svg`],
        ["gcash", `${p}/Logo=GCash.svg`],
        ["go_pay", `${p}/Logo=GoPay.svg`],
        ["blik", `${p}/Logo=Blik.svg`],
        ["kakao_pay", `${p}/Logo=Kakao Pay.svg`],
        ["klarna", `${p}/Logo=Klarna.svg`],
        ["momo_wallet", `${p}/Logo=MoMo.svg`],
        ["naver_pay", `${p}/Logo=Naver Pay.svg`],
        ["paypal", `${p}/PayPal.svg`],
        ["pix", `${p}/Logo=Pix.svg`],
        ["sepa_debit", `${p}/Logo=SEPA.svg`],
        ["upi", `${p}/Logo=UPI.svg`],
        [
          "link",
          "https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/payment_method_assets/link/link-by-stripe-seeklogo.svg",
        ],
      ])
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
        T,
        A,
        w,
        j,
        N,
        I = (0, i.c)(73),
        {
          metrics: S,
          appearance: E,
          expirationTitle: C,
          monthLabel: P,
          monthInput: B,
          yearLabel: k,
          yearInput: L,
          expirationError: M,
          billingAddressTitle: G,
          addressElementOptions: O,
          onAddressReady: D,
          onAddressChange: R,
          error: H,
          action: U,
        } = e,
        z = (0, r.useId)(),
        W = (0, r.useId)(),
        F = E.rules,
        q = E.variables,
        Y = F?.[".Input"],
        V = F?.[".Label"],
        K = F?.[".Input:focus"],
        Z = F?.[".Input--invalid, .Input--invalid:focus"] ?? F?.[".Input--invalid"],
        $ = q?.colorBackground,
        Q = q?.colorText,
        X = q?.colorTextPlaceholder,
        J = q?.colorPrimary,
        ee = q?.colorDanger,
        et = q?.fontFamily,
        en = q?.fontSizeBase ?? "16px",
        ea = q?.gridColumnSpacing,
        ei = Y?.backgroundColor,
        es = Y?.border,
        er = Y?.borderRadius,
        el = Y?.padding,
        eo = Y?.boxShadow,
        ec = Y?.transition,
        ed = V?.color,
        eu = V?.fontWeight,
        ep = K?.borderColor,
        em = K?.boxShadow,
        eg = Z?.borderColor,
        eh = Z?.boxShadow
      I[0] !== $ ||
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
            "--colorBackground": $,
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
          (I[0] = $),
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
        ey = M ? W : void 0
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
      let eb = L.placeholder ?? " ",
        ex = M ? W : void 0
      return (
        I[33] !== eb || I[34] !== ex || I[35] !== L
          ? ((h = (0, a.jsx)("input", {
              ...L,
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
            (I[35] = L),
            (I[36] = h))
          : (h = I[36]),
        I[37] !== k ? ((f = (0, a.jsx)("span", { className: d, children: k })), (I[37] = k), (I[38] = f)) : (f = I[38]),
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
        I[47] !== M || I[48] !== W
          ? ((b = M ? (0, a.jsx)("p", { id: W, role: "alert", className: c, children: M }) : null),
            (I[47] = M),
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
        I[56] !== O || I[57] !== S || I[58] !== R || I[59] !== D
          ? ((T = (0, a.jsx)(p.n, { metrics: S, options: O, onReady: D, onChange: R })),
            (I[56] = O),
            (I[57] = S),
            (I[58] = R),
            (I[59] = D),
            (I[60] = T))
          : (T = I[60]),
        I[61] !== v || I[62] !== T
          ? ((A = (0, a.jsxs)("div", { className: l, children: [v, T] })), (I[61] = v), (I[62] = T), (I[63] = A))
          : (A = I[63]),
        I[64] !== H
          ? ((w = H ? (0, a.jsx)("p", { role: "alert", className: c, children: H }) : null), (I[64] = H), (I[65] = w))
          : (w = I[65]),
        I[66] !== U
          ? ((j = (0, a.jsx)("div", { className: "action-sfBSXV", children: U })), (I[66] = U), (I[67] = j))
          : (j = I[67]),
        I[68] !== x || I[69] !== A || I[70] !== w || I[71] !== j
          ? ((N = (0, a.jsxs)("div", { className: "form-safiX3", children: [x, A, w, j] })),
            (I[68] = x),
            (I[69] = A),
            (I[70] = w),
            (I[71] = j),
            (I[72] = N))
          : (N = I[72]),
        N
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
      T = n("oyxz"),
      A = n("PFjh"),
      w = n("Sm6l"),
      j = n("JNtf"),
      N = n("mUDD"),
      I = n("OWtl"),
      S = n("hZax"),
      E = n("LH8k"),
      C = n("HFSu"),
      P = n("wbWw"),
      B = n("RDnT"),
      k = n("iLQO")
    function L(e) {
      let t,
        n,
        s,
        l,
        o,
        c = (0, i.c)(20),
        { accountId: d, methodId: u, onCloseAutoFocus: p, onClose: m, onSuccess: b, onBillingInfoChange: x } = e,
        T = (0, v.A)(),
        A = (0, S.AS)(),
        w = (0, f.EG)(A.getLayer(f.Sd.personal)),
        { data: I, isPending: E, isError: P, refetch: L } = (0, y.I)((0, k.P)(d, T.locale, w))
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
      let { data: O, isPending: D, isError: R, refetch: H } = (0, y.I)(t),
        U = (0, k.y)(),
        [z, W] = (0, r.useState)(!1)
      c[3] !== I || c[4] !== P || c[5] !== O || c[6] !== R || c[7] !== U
        ? ((n = null == I || null == O || R || P || null == U ? void 0 : (0, h.UF)("night" === U.theme, U.variables)),
          (c[3] = I),
          (c[4] = P),
          (c[5] = O),
          (c[6] = R),
          (c[7] = U),
          (c[8] = n))
        : (n = c[8])
      let F = n,
        q = j.lG
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
      let Y = !z
      c[11] !== m || c[12] !== z
        ? ((l = (e) => {
            e || z || m()
          }),
          (c[11] = m),
          (c[12] = z),
          (c[13] = l))
        : (l = c[13])
      let V =
        null != I && null != O && null != F
          ? (0, a.jsx)(
              _.S8,
              {
                stripe: I.stripe,
                options: { appearance: F },
                children: (0, a.jsx)(G, {
                  accountId: d,
                  method: O.payment_method,
                  appearance: F,
                  onSubmittingChange: W,
                  onClose: m,
                  onSuccess: b,
                  onBillingInfoChange: x,
                }),
              },
              (0, f.eI)(T.locale, "elements", w),
            )
          : (0, a.jsx)(N.R4, {
              variant: "chatgpt",
              children: (0, a.jsx)(g.W, {
                title: (0, a.jsx)(j.L3, { children: (0, a.jsx)(g.E, { children: (0, a.jsx)(M, {}) }) }),
                children: (0, a.jsx)(B.Y, {
                  kind: "payment",
                  loading: D || E || null == U,
                  onRetry: () => {
                    Promise.all([H(), L()])
                  },
                }),
              }),
            })
      return (
        c[14] !== q || c[15] !== l || c[16] !== V || c[17] !== s || c[18] !== Y
          ? ((o = (0, a.jsx)(q, {
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
            (c[14] = q),
            (c[15] = l),
            (c[16] = V),
            (c[17] = s),
            (c[18] = Y),
            (c[19] = o))
          : (o = c[19]),
        o
      )
    }
    function M() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(T.A, {
              id: "settings.consumerBilling.editPaymentMethod",
              defaultMessage: "Edit payment method",
              description: "Title for editing a saved card's expiration date and billing address",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function G(e) {
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
        S,
        B,
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
        Y,
        V,
        K,
        Z,
        $,
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
              ;(await (0, P.fI)(el, ee), (es ?? ei)())
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
      let { mutate: ex, isPending: ev, isError: eT, error: eA, reset: ew } = (0, b.n)(p)
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
          ? ((f = (0, a.jsx)(j.L3, { children: (0, a.jsx)(g.E, { children: (0, a.jsx)(M, {}) }) })), (J[39] = f))
          : (f = J[39]),
        J[40] !== el ? ((_ = (0, A.dj)(el)), (J[40] = el), (J[41] = _)) : (_ = J[41]),
        J[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(T.A, {
              id: "settings.consumerBilling.expirationDate",
              defaultMessage: "Expiration date",
              description: "Heading for the month and year fields in the saved payment-method editor",
            })),
            (S = (0, a.jsx)(T.A, {
              id: "settings.consumerBilling.expirationMonth",
              defaultMessage: "Month",
              description: "Label for the saved card's two-digit expiration month",
            })),
            (J[42] = y),
            (J[43] = S))
          : ((y = J[42]), (S = J[43])))
      let ej = !l
      ;(J[44] !== eo
        ? ((B = eo.formatMessage({
            id: "settings.consumerBilling.expirationMonthPlaceholder",
            defaultMessage: "MM",
            description: "Placeholder indicating the two-digit card expiration month in the payment-method editor",
          })),
          (J[44] = eo),
          (J[45] = B))
        : (B = J[45]),
        J[46] !== ec
          ? ((k = () => {
              1 === ec.length && ed(ec.padStart(2, "0"))
            }),
            (J[46] = ec),
            (J[47] = k))
          : (k = J[47]),
        J[48] !== eT || J[49] !== ew
          ? ((L = (e) => {
              ;(ed(e.target.value.replace(/\D/g, "").slice(0, 2)), eT && ew())
            }),
            (J[48] = eT),
            (J[49] = ew),
            (J[50] = L))
          : (L = J[50]),
        J[51] !== ev || J[52] !== ec || J[53] !== ej || J[54] !== B || J[55] !== k || J[56] !== L
          ? ((G = {
              autoFocus: !0,
              required: !0,
              "aria-invalid": ej,
              disabled: ev,
              placeholder: B,
              value: ec,
              onBlur: k,
              onChange: L,
            }),
            (J[51] = ev),
            (J[52] = ec),
            (J[53] = ej),
            (J[54] = B),
            (J[55] = k),
            (J[56] = L),
            (J[57] = G))
          : (G = J[57]),
        J[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, a.jsx)(T.A, {
              id: "settings.consumerBilling.expirationYear",
              defaultMessage: "Year",
              description: "Label for the saved card's four-digit expiration year",
            })),
            (J[58] = O))
          : (O = J[58]))
      let eN = !o
      ;(J[59] !== eo
        ? ((D = eo.formatMessage({
            id: "settings.consumerBilling.expirationYearPlaceholder",
            defaultMessage: "YYYY",
            description: "Placeholder indicating the four-digit card expiration year in the payment-method editor",
          })),
          (J[59] = eo),
          (J[60] = D))
        : (D = J[60]),
        J[61] !== eT || J[62] !== ew
          ? ((R = (e) => {
              ;(ep(e.target.value.replace(/\D/g, "").slice(0, 4)), eT && ew())
            }),
            (J[61] = eT),
            (J[62] = ew),
            (J[63] = R))
          : (R = J[63]),
        J[64] !== ev || J[65] !== eN || J[66] !== D || J[67] !== R || J[68] !== eu
          ? ((H = { required: !0, "aria-invalid": eN, disabled: ev, placeholder: D, value: eu, onChange: R }),
            (J[64] = ev),
            (J[65] = eN),
            (J[66] = D),
            (J[67] = R),
            (J[68] = eu),
            (J[69] = H))
          : (H = J[69]),
        J[70] !== eb
          ? ((U = eb
              ? null
              : (0, a.jsx)(T.A, {
                  id: "settings.consumerBilling.invalidExpirationDate",
                  defaultMessage: "Enter a valid expiration date",
                  description:
                    "Validation under the saved card's expiration fields when the month or year is invalid or the card has expired",
                })),
            (J[70] = eb),
            (J[71] = U))
          : (U = J[71]),
        J[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, a.jsx)(T.A, {
              id: "settings.consumerBilling.billingAddress",
              defaultMessage: "Billing address",
              description: "Label for the postal address on billing invoices",
            })),
            (J[72] = z))
          : (z = J[72]),
        J[73] === Symbol.for("react.memo_cache_sentinel") ? ((W = [...s.qo]), (J[73] = W)) : (W = J[73]))
      let eI = et.billing_details?.name ?? void 0,
        eS = et.billing_details?.address?.line1 ?? void 0,
        eE = et.billing_details?.address?.line2 ?? void 0,
        eC = et.billing_details?.address?.city ?? void 0,
        eP = et.billing_details?.address?.state ?? void 0,
        eB = et.billing_details?.address?.postal_code ?? void 0,
        ek = et.billing_details?.address?.country ?? ""
      ;(J[74] !== eS || J[75] !== eE || J[76] !== eC || J[77] !== eP || J[78] !== eB || J[79] !== ek
        ? ((F = { line1: eS, line2: eE, city: eC, state: eP, postal_code: eB, country: ek }),
          (J[74] = eS),
          (J[75] = eE),
          (J[76] = eC),
          (J[77] = eP),
          (J[78] = eB),
          (J[79] = ek),
          (J[80] = F))
        : (F = J[80]),
        J[81] !== eI || J[82] !== F
          ? ((q = { mode: "billing", allowedCountries: W, defaultValues: { name: eI, address: F } }),
            (J[81] = eI),
            (J[82] = F),
            (J[83] = q))
          : (q = J[83]),
        J[84] === Symbol.for("react.memo_cache_sentinel") ? ((Y = () => ey(!0)), (J[84] = Y)) : (Y = J[84]),
        J[85] !== eT || J[86] !== er || J[87] !== ew
          ? ((V = (e) => {
              ;(eg(e.value), ef(e.complete), eT && ew())
              try {
                er?.(e)
              } catch {}
            }),
            (J[85] = eT),
            (J[86] = er),
            (J[87] = ew),
            (J[88] = V))
          : (V = J[88]),
        J[89] !== eA || J[90] !== eT
          ? ((K = eT
              ? (null != eA && (0, E.d)(eA)?.message) ||
                (0, a.jsx)(T.A, {
                  id: "settings.consumerBilling.editCardError",
                  defaultMessage: "Unable to update payment method. Please try again.",
                  description: "Error when updating a card's expiration date or billing address fails",
                })
              : null),
            (J[89] = eA),
            (J[90] = eT),
            (J[91] = K))
          : (K = J[91]))
      let eL = ev || !e_ || !eh || !eb
      return (
        J[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)(T.A, {
              id: "settings.consumerBilling.save",
              defaultMessage: "Save",
              description: "Button saving edits to consumer billing information or a saved card",
            })),
            (J[92] = Z))
          : (Z = J[92]),
        J[93] !== ev || J[94] !== eL
          ? (($ = (0, a.jsx)(N.Es, {
              children: (0, a.jsx)(w.$, {
                type: "submit",
                color: "primary",
                radius: "full",
                size: "beaconAction",
                loading: ev,
                disabled: eL,
                children: Z,
              }),
            })),
            (J[93] = ev),
            (J[94] = eL),
            (J[95] = $))
          : ($ = J[95]),
        J[96] !== en ||
        J[97] !== G ||
        J[98] !== H ||
        J[99] !== U ||
        J[100] !== q ||
        J[101] !== V ||
        J[102] !== K ||
        J[103] !== $ ||
        J[104] !== _
          ? ((Q = (0, a.jsx)(g.W, {
              title: f,
              children: (0, a.jsx)(m, {
                metrics: _,
                appearance: en,
                expirationTitle: y,
                monthLabel: S,
                monthInput: G,
                yearLabel: O,
                yearInput: H,
                expirationError: U,
                billingAddressTitle: z,
                addressElementOptions: q,
                onAddressReady: Y,
                onAddressChange: V,
                error: K,
                action: $,
              }),
            })),
            (J[96] = en),
            (J[97] = G),
            (J[98] = H),
            (J[99] = U),
            (J[100] = q),
            (J[101] = V),
            (J[102] = K),
            (J[103] = $),
            (J[104] = _),
            (J[105] = Q))
          : (Q = J[105]),
        J[106] !== Q || J[107] !== h
          ? ((X = (0, a.jsx)(N.R4, { as: "form", variant: "chatgpt", onSubmit: h, children: Q })),
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
            T = null
          if (y && null != _.discount) {
            let e
            ;(u[14] !== p || u[15] !== m
              ? ((e = (0, a.jsx)(l, { account: p, renewalPrice: m })), (u[14] = p), (u[15] = m), (u[16] = e))
              : (e = u[16]),
              (T = e))
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
              (T = t))
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
                (T = t))
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
              (T = t))
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
            u[42] !== T || u[43] !== o || u[44] !== c
              ? ((d = (0, a.jsxs)(a.Fragment, { children: [o, T, c] })),
                (u[42] = T),
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
      r = n("Sm6l")
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
      c = n("Sm6l"),
      d = n("djbx"),
      u = n("ZZgR"),
      p = n("mUDD"),
      m = n("bVeK"),
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
            T = (0, i.c)(50),
            {
              available: A,
              selected: w,
              taxId: j,
              enabled: N,
              disabled: I,
              showErrors: S,
              businessName: E,
              compact: C,
              onRemove: P,
              onEnabledChange: B,
              onChange: k,
            } = e,
            L = void 0 !== C && C,
            M = (0, l.A)(),
            G = (0, r.useId)(),
            O = (0, r.useId)(),
            D = (0, r.useId)(),
            R = (0, r.useId)(),
            H = (0, r.useId)(),
            U = (0, r.useId)(),
            z = (0, r.useId)(),
            W = (0, r.useId)(),
            [F, q] = (0, r.useState)(!1),
            [Y, V] = (0, r.useState)(""),
            [K, Z] = (0, r.useState)(null),
            $ = A[0]
          if (null == $) return null
          T[0] !== M
            ? ((t = M.formatMessage({
                id: "settings.consumerBilling.taxTypeLabel",
                defaultMessage: "Tax type",
                description:
                  "Label for the tax identification scheme selector in the consumer billing-information editor",
              })),
              (T[0] = M),
              (T[1] = t))
            : (t = T[1])
          let Q = t
          T[2] !== M
            ? ((n = M.formatMessage({
                id: "settings.consumerBilling.searchTaxTypes",
                defaultMessage: "Search tax types",
                description:
                  "Accessible label and placeholder for filtering supported tax identification schemes in the billing-information editor",
              })),
              (T[2] = M),
              (T[3] = n))
            : (n = T[3])
          let X = n
          if (
            T[4] !== A ||
            T[5] !== E ||
            T[6] !== U ||
            T[7] !== H ||
            T[8] !== G ||
            T[9] !== L ||
            T[10] !== I ||
            T[11] !== N ||
            T[12] !== $ ||
            T[13] !== R ||
            T[14] !== M ||
            T[15] !== D ||
            T[16] !== k ||
            T[17] !== B ||
            T[18] !== P ||
            T[19] !== F ||
            T[20] !== K ||
            T[21] !== Y ||
            T[22] !== X ||
            T[23] !== w ||
            T[24] !== S ||
            T[25] !== j ||
            T[26] !== z ||
            T[27] !== O ||
            T[28] !== Q ||
            T[29] !== W
          ) {
            let e,
              t,
              n = Y.trim().toLocaleLowerCase(),
              i = A.filter((e) => `${_(e.type)} ${e.description}`.toLocaleLowerCase().includes(n)).sort(h),
              r = S && null == w
            T[33] !== w?.type || T[34] !== S || T[35] !== j?.value
              ? ((e = S && !(0, s.Gm)(w?.type, j?.value ?? "")),
                (T[33] = w?.type),
                (T[34] = S),
                (T[35] = j?.value),
                (T[36] = e))
              : (e = T[36])
            let l = e
            T[37] !== E || T[38] !== S
              ? ((t = S && !E?.value.trim()), (T[37] = E), (T[38] = S), (T[39] = t))
              : (t = T[39])
            let v = t
            ;((y = L ? "flex items-start gap-2" : "flex flex-col gap-3"),
              T[40] !== G || T[41] !== L || T[42] !== I || T[43] !== N || T[44] !== B
                ? ((b = L
                    ? null
                    : (0, a.jsxs)(p.fh, {
                        children: [
                          (0, a.jsx)(d.S, { id: G, checked: N, disabled: I, onCheckedChange: (e) => B?.(!0 === e) }),
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
                  (T[40] = G),
                  (T[41] = L),
                  (T[42] = I),
                  (T[43] = N),
                  (T[44] = B),
                  (T[45] = b))
                : (b = T[45]),
              (x = N
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      null != E
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
                                value: E.value,
                                onChange: (e) => E.onChange(e.target.value),
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
                        className: L ? "min-w-0 flex-1" : void 0,
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
                            portalContainer: K,
                            disabled: I,
                            open: F,
                            onOpenChange: (e) => {
                              ;(q(e), e && V(""))
                            },
                            contentClassName: "w-[var(--radix-popover-trigger-width)]",
                            contentMaxHeight: "tall",
                            triggerButton: (0, a.jsxs)(c.$, {
                              id: O,
                              ref: (e) => Z(e?.closest("[data-stripe-checkout-dialog]") ?? null),
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
                                  className: L ? "flex min-w-0 items-center gap-2" : "truncate",
                                  children: [
                                    L && null != w ? (0, a.jsx)(f, { country: w.country }) : null,
                                    (0, a.jsx)("span", { className: "truncate", children: null == w ? Q : _(w.type) }),
                                  ],
                                }),
                                (0, a.jsx)(m.Aq_, {}),
                              ],
                            }),
                            children: (0, a.jsxs)(u.G.Root, {
                              label: Q,
                              children: [
                                (0, a.jsx)(u.G.Input, { "aria-label": X, placeholder: X, value: Y, onValueChange: V }),
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
                                            ;(k({
                                              type: e.stripe_type,
                                              country: e.country,
                                              country_specific_type: e.type,
                                              value: L && w?.type !== e.type ? "" : (j?.value ?? ""),
                                            }),
                                              q(!1))
                                          },
                                          children: (0, a.jsxs)("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, a.jsxs)("span", {
                                                className: L ? "flex items-center gap-2 font-medium" : "font-medium",
                                                children: [L ? (0, a.jsx)(f, { country: e.country }) : null, _(e.type)],
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
                        className: L ? "min-w-0 flex-1" : void 0,
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
                            value: j?.value ?? "",
                            placeholder:
                              w?.placeholder ??
                              M.formatMessage({
                                id: "settings.consumerBilling.taxId",
                                defaultMessage: "Tax ID",
                                description:
                                  "Label for the business tax identification number on consumer billing invoices",
                              }),
                            onChange: (e) => {
                              let t = w ?? $
                              k({
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
                                children: j?.value.trim()
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
                                "aria-label": M.formatMessage({
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
              (T[4] = A),
              (T[5] = E),
              (T[6] = U),
              (T[7] = H),
              (T[8] = G),
              (T[9] = L),
              (T[10] = I),
              (T[11] = N),
              (T[12] = $),
              (T[13] = R),
              (T[14] = M),
              (T[15] = D),
              (T[16] = k),
              (T[17] = B),
              (T[18] = P),
              (T[19] = F),
              (T[20] = K),
              (T[21] = Y),
              (T[22] = X),
              (T[23] = w),
              (T[24] = S),
              (T[25] = j),
              (T[26] = z),
              (T[27] = O),
              (T[28] = Q),
              (T[29] = W),
              (T[30] = y),
              (T[31] = b),
              (T[32] = x))
          } else ((y = T[30]), (b = T[31]), (x = T[32]))
          return (
            T[46] !== y || T[47] !== b || T[48] !== x
              ? ((v = (0, a.jsxs)("div", { className: y, children: [b, x] })),
                (T[46] = y),
                (T[47] = b),
                (T[48] = x),
                (T[49] = v))
              : (v = T[49]),
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
  rkZ2(e, t, n) {
    var a = n("zTeN"),
      i = n("tl5a"),
      s = n("Oj9r"),
      r = n("GaCK"),
      l = n("Dofq"),
      o = n("TYK1"),
      c = n("liTb"),
      d = n("AXK1"),
      u = n("mRSS")
    let p = (0, a.vP)(s.GD, null),
      m = (0, a.vP)(s.GD, null),
      g = (0, a.un)(s.GD, ({ get: e }) => (e(r.d, !0) ? "open" : "closed")),
      h = (0, a.vP)(s.GD, null),
      f = (0, a.bD)(s.GD, (e) => null),
      _ = (0, a.i1)(s.GD, (e, { get: t }) => {
        if (null == e || !t(u.T)) return !1
        let n = t(m)
        if (null != n) return "chat" === n
        let { data: a } = t(o.cloudAeonByThreadId$, e)
        return void 0 === a || a?.messaging_room_id != null
      }),
      y = (0, a.un)(s.GD, ({ get: e, scope: t }) => {
        let n = (0, s.Qm)(t.value),
          a = null == n ? null : { hostId: e(i.qX, n), threadId: n }
        return !e(s.Rj) && ((0, c.hi)(t.value) || e(d.K, a))
      })
    n.d(
      t,
      {},
      {
        CH: function (e, t) {
          ;(0, l.t)(e, t)
        },
        E9: p,
        SU: y,
        TQ: g,
        Vf: m,
        cF: f,
        l: h,
        pp: _,
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
        T,
        A,
        w,
        j,
        N,
        I,
        S,
        E,
        C,
        P,
        B,
        k,
        L,
        M,
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
        Y,
        V,
        K,
        Z,
        $,
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
            subtitle: j,
            children: f,
            fullWidth: I,
            contentClassName: y,
            subtitleClassName: N,
            action: t,
            toolbarActions: P,
            stickyControls: w,
            footer: x,
            embedded: S,
            density: b,
            scrollResetKey: A,
            containTouchOverscroll: E,
            ref: v,
            className: _,
            ...T
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
          (ea[10] = T),
          (ea[11] = A),
          (ea[12] = w),
          (ea[13] = j),
          (ea[14] = N),
          (ea[15] = I),
          (ea[16] = S),
          (ea[17] = E),
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
          (T = ea[10]),
          (A = ea[11]),
          (w = ea[12]),
          (j = ea[13]),
          (N = ea[14]),
          (I = ea[15]),
          (S = ea[16]),
          (E = ea[17]),
          (C = ea[18]),
          (P = ea[19]))
      let ei = void 0 !== I && I,
        es = void 0 !== S && S,
        er = void 0 !== E && E,
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
      ;(ea[20] !== A
        ? ((B = () => {
            null != A && null != ec.current && (ec.current.scrollTop = 0)
          }),
          (k = [A]),
          (ea[20] = A),
          (ea[21] = B),
          (ea[22] = k))
        : ((B = ea[21]), (k = ea[22])),
        (0, r.useLayoutEffect)(B, k),
        ea[23] !== ef || ea[24] !== e_
          ? ((L = () => {
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
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)", offset: 0.35 },
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
            (ea[25] = L))
          : (L = ea[25]),
        ea[26] !== ey || ea[27] !== ef || ea[28] !== e_
          ? ((M = [ey, ef, e_]), (ea[26] = ey), (ea[27] = ef), (ea[28] = e_), (ea[29] = M))
          : (M = ea[29]),
        (0, r.useLayoutEffect)(L, M),
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
        eT =
          "default" === b &&
          (es && !ei ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eA = ei ? null : es ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(ea[35] !== y || ea[36] !== w || ea[37] !== ev || ea[38] !== eT || ea[39] !== eA || ea[40] !== eg
        ? ((D = (0, s.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            eT,
            eA,
            eg && ["px-panel pb-panel", null == w && "pt-panel"],
            y,
          )),
          (ea[35] = y),
          (ea[36] = w),
          (ea[37] = ev),
          (ea[38] = eT),
          (ea[39] = eA),
          (ea[40] = eg),
          (ea[41] = D))
        : (D = ea[41]),
        ea[42] !== t ||
        ea[43] !== n ||
        ea[44] !== el ||
        ea[45] !== es ||
        ea[46] !== ex ||
        ea[47] !== j ||
        ea[48] !== N ||
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
                      subtitle: j,
                      subtitleClassName: (0, s.A)("text-balance", N),
                      title: C,
                      variant: ex,
                    }),
                  })),
            (ea[42] = t),
            (ea[43] = n),
            (ea[44] = el),
            (ea[45] = es),
            (ea[46] = ex),
            (ea[47] = j),
            (ea[48] = N),
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
        ej = null != w && "pt-5"
      ;(ea[54] !== ew || ea[55] !== ej
        ? ((U = (0, s.A)("flex flex-col", ew, ej)), (ea[54] = ew), (ea[55] = ej), (ea[56] = U))
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
      let eN = W
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
          ea[72] !== eN || ea[73] !== v || ea[74] !== T || ea[75] !== e || ea[76] !== t
            ? ((n = (0, a.jsxs)("div", { ref: v, className: e, ...T, children: [t, eN] })),
              (ea[72] = eN),
              (ea[73] = v),
              (ea[74] = T),
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
          ? ((Y =
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
            (ea[87] = Y))
          : (Y = ea[87]))
      let eI = ed || void 0,
        eS = eh ? eu : void 0,
        eE = eh || void 0
      ea[88] !== eh
        ? ((V = eh ? (e) => ep(e.currentTarget.scrollTop > 0) : void 0), (ea[88] = eh), (ea[89] = V))
        : (V = ea[89])
      let eC = !eg && "p-panel"
      return (
        ea[90] !== eC
          ? ((K = (0, s.A)("flex-1 scrollbar-stable overflow-y-auto", eC)), (ea[90] = eC), (ea[91] = K))
          : (K = ea[91]),
        ea[92] !== t ||
        ea[93] !== n ||
        ea[94] !== el ||
        ea[95] !== ei ||
        ea[96] !== j ||
        ea[97] !== N ||
        ea[98] !== C ||
        ea[99] !== eh ||
        ea[100] !== eg
          ? ((Z =
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
                        null == j
                          ? null
                          : (0, a.jsx)("div", {
                              className: (0, s.A)("text-base leading-6 text-balance text-secondary", N),
                              children: j,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, a.jsx)(u.T, { search: null, actions: t }),
                  })),
            (ea[92] = t),
            (ea[93] = n),
            (ea[94] = el),
            (ea[95] = ei),
            (ea[96] = j),
            (ea[97] = N),
            (ea[98] = C),
            (ea[99] = eh),
            (ea[100] = eg),
            (ea[101] = Z))
          : (Z = ea[101]),
        ea[102] !== eN ||
        ea[103] !== eI ||
        ea[104] !== eS ||
        ea[105] !== eE ||
        ea[106] !== V ||
        ea[107] !== K ||
        ea[108] !== Z
          ? (($ = (0, a.jsxs)("div", {
              ref: ec,
              "data-contain-touch-overscroll": eI,
              "data-app-shell-page-scrolled": eS,
              "data-settings-mobile-header": eE,
              onScroll: V,
              className: K,
              children: [Z, eN],
            })),
            (ea[102] = eN),
            (ea[103] = eI),
            (ea[104] = eS),
            (ea[105] = eE),
            (ea[106] = V),
            (ea[107] = K),
            (ea[108] = Z),
            (ea[109] = $))
          : ($ = ea[109]),
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
        ea[113] !== T ||
        ea[114] !== F ||
        ea[115] !== q ||
        ea[116] !== Y ||
        ea[117] !== $ ||
        ea[118] !== Q
          ? ((X = (0, a.jsxs)("div", { ref: v, className: F, ...T, children: [q, Y, $, Q] })),
            (ea[112] = v),
            (ea[113] = T),
            (ea[114] = F),
            (ea[115] = q),
            (ea[116] = Y),
            (ea[117] = $),
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
            T = void 0 === _ ? "default" : _,
            A = void 0 === b ? "default" : b,
            w = void 0 === x ? "below-title" : x,
            j = void 0 === v ? "balance" : v,
            N = null != p,
            I = null != m,
            S = null != g,
            E = "compact" === T
          u[0] !== E || u[1] !== m || u[2] !== w || u[3] !== j
            ? ((t = m
                ? (0, a.jsx)("div", {
                    className: (0, s.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === j ? "text-balance" : "text-wrap",
                      E ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === w && "w-full",
                    ),
                    children: m,
                  })
                : null),
              (u[0] = E),
              (u[1] = m),
              (u[2] = w),
              (u[3] = j),
              (u[4] = t))
            : (t = u[4])
          let C = t
          if (!N && !I && !S) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === w ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            B = I && "compact" === A && "pb-2",
            k = I && "compact" !== A && "pb-3"
          u[6] !== f || u[7] !== I || u[8] !== E || u[9] !== A || u[10] !== P || u[11] !== B || u[12] !== k
            ? ((n = (0, s.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                B,
                k,
                !I && (0, s.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                I && E && "items-center",
                I && !E && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = I),
              (u[8] = E),
              (u[9] = A),
              (u[10] = P),
              (u[11] = B),
              (u[12] = k),
              (u[13] = n))
            : (n = u[13])
          let L =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== L ? ((r = (0, s.A)("flex min-w-0 flex-1 flex-col", L)), (u[14] = L), (u[15] = r)) : (r = u[15]),
            u[16] !== I || u[17] !== T || u[18] !== p
              ? ((l = p
                  ? (0, a.jsx)("div", {
                      className: (0, s.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === T && "text-sm leading-[18px]",
                        ("large" === T || ("default" === T && I)) && "text-lg",
                        ("base" === T || ("default" === T && !I)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = I),
                (u[17] = T),
                (u[18] = p),
                (u[19] = l))
              : (l = u[19]))
          let M = "below-title" === w ? C : null
          ;(u[20] !== r || u[21] !== l || u[22] !== M
            ? ((o = (0, a.jsxs)("div", { className: r, children: [l, M] })),
              (u[20] = r),
              (u[21] = l),
              (u[22] = M),
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
      o = n("bVeK")
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
        T = "grow" === (void 0 === g ? "grow" : g) && "flex-1"
      ;(u[0] !== v || u[1] !== T
        ? ((t = (0, s.A)("flex min-w-0 gap-3", v, T)), (u[0] = v), (u[1] = T), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((n = null != y ? (0, a.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = n))
          : (n = u[4]))
      let A = "featured" === b && "text-base",
        w = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        j = "featured" !== b && "recommendation" !== b && "text-sm",
        N = "nested" !== b && "medium" === (void 0 === h ? "medium" : h) && "font-medium"
      return (
        u[5] !== N || u[6] !== A || u[7] !== w || u[8] !== j
          ? ((r = (0, s.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              A,
              w,
              j,
              N,
            )),
            (u[5] = N),
            (u[6] = A),
            (u[7] = w),
            (u[8] = j),
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
              size: T,
              variant: A,
              verticalAlignment: w,
            } = e,
            j = void 0 === p ? "grow" : p,
            N = void 0 === m ? "medium" : m,
            I = void 0 === g ? "default" : g,
            S = void 0 === _ ? "minimum" : _,
            E = void 0 === v || v,
            C = void 0 === T ? "default" : T,
            P = void 0 === A ? "default" : A,
            B = void 0 === w ? "center" : w,
            k = (0, r.useId)(),
            L = null != u || null != h || null != y,
            M = "function" == typeof f,
            G = M && null != u ? `${k}-label` : void 0,
            O = M && h ? `${k}-description` : void 0,
            D = E && ("split" !== I || "default" !== P) && "px-4",
            R = E && "nested" === P && "group-data-[density=form]/settings:px-5",
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
                  "recommendation" === P && "dark:bg-secondary-ghost-hover",
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
            c[13] !== L ||
            c[14] !== y ||
            c[15] !== u ||
            c[16] !== G ||
            c[17] !== j ||
            c[18] !== N ||
            c[19] !== P ||
            c[20] !== B
              ? ((n = L
                  ? (0, a.jsx)(d, {
                      label: u,
                      labelId: G,
                      labelSizing: j,
                      labelWeight: N,
                      description: h,
                      descriptionId: O,
                      icon: y,
                      variant: P,
                      verticalAlignment: B,
                    })
                  : null),
                (c[11] = h),
                (c[12] = O),
                (c[13] = L),
                (c[14] = y),
                (c[15] = u),
                (c[16] = G),
                (c[17] = j),
                (c[18] = N),
                (c[19] = P),
                (c[20] = B),
                (c[21] = n))
              : (n = c[21]),
            c[22] !== f || c[23] !== S || c[24] !== O || c[25] !== M || c[26] !== G || c[27] !== I || c[28] !== P
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
                              "grow" === S && "w-full",
                            ),
                          "default" === I &&
                            ("default" === P || "featured" === P || "recommendation" === P) &&
                            (0, s.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === S ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === S && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: M ? f({ "aria-labelledby": G, "aria-describedby": O }) : f,
                      })
                    : null),
                (c[22] = f),
                (c[23] = S),
                (c[24] = O),
                (c[25] = M),
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
            T,
            A,
            w,
            j,
            N,
            I,
            S,
            E,
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
            k = void 0 === x ? "default" : x,
            L = "before-trailing" === (void 0 === _ ? "end" : _) && !m && null != t && null != v,
            M = L ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          C[16] !== u || C[17] !== L || C[18] !== B || C[19] !== M || C[20] !== k
            ? ((T = (0, s.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                M,
                "empty" === k
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, s.A)(
                      "px-4 text-start",
                      "nested" === k && "min-h-10 py-0.5",
                      "nested" !== k && ("large" === B ? "py-4" : "py-3"),
                      L && "gap-2",
                      !L && ("nested" === k ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (C[16] = u),
              (C[17] = L),
              (C[18] = B),
              (C[19] = M),
              (C[20] = k),
              (C[21] = T))
            : (T = C[21])
          let G = T
          ;(C[22] !== p || C[23] !== g || C[24] !== f || C[25] !== k
            ? ((A =
                "empty" === k
                  ? (0, a.jsxs)(a.Fragment, { children: [g, f] })
                  : (0, a.jsx)(d, { label: f, description: p, icon: g, variant: k, verticalAlignment: "center" })),
              (C[22] = p),
              (C[23] = g),
              (C[24] = f),
              (C[25] = k),
              (C[26] = A))
            : (A = C[26]),
            C[27] !== v
              ? ((w =
                  null != v
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: v })
                    : null),
                (C[27] = v),
                (C[28] = w))
              : (w = C[28]),
            C[29] !== A || C[30] !== w
              ? ((j = (0, a.jsxs)(a.Fragment, { children: [A, w] })), (C[29] = A), (C[30] = w), (C[31] = j))
              : (j = C[31]))
          let O = j,
            D = L ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            R = "row" === P && "first:rounded-t-2xl last:rounded-b-2xl",
            H = "recommendation" === k && "dark:bg-secondary-ghost-hover",
            U = !m && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            z =
              !m &&
              "recommendation" === k &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            C[32] !== D || C[33] !== R || C[34] !== H || C[35] !== U || C[36] !== z
              ? ((N = (0, s.A)("group w-full items-center", D, R, H, U, z)),
                (C[32] = D),
                (C[33] = R),
                (C[34] = H),
                (C[35] = U),
                (C[36] = z),
                (C[37] = N))
              : (N = C[37]),
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
            C[46] !== t || C[47] !== m || C[48] !== L
              ? ((S =
                  m || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, s.A)(
                          "flex shrink-0 items-center gap-1",
                          L ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (C[46] = t),
                (C[47] = m),
                (C[48] = L),
                (C[49] = S))
              : (S = C[49]),
            C[50] !== N || C[51] !== I || C[52] !== S
              ? ((E = (0, a.jsxs)("div", { className: N, children: [I, S] })),
                (C[50] = N),
                (C[51] = I),
                (C[52] = S),
                (C[53] = E))
              : (E = C[53]),
            E
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
              indicator: T,
              label: A,
              name: w,
              onChange: j,
              onClick: N,
              value: I,
              variant: S,
            } = e,
            E = void 0 === v || v,
            C = void 0 === T ? "radio" : T,
            P = void 0 === S ? "default" : S
          ;(h[0] !== b || h[1] !== x || h[2] !== E || h[3] !== C || h[4] !== P
            ? ((t = (0, s.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === P &&
                  (0, s.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != x ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === P && b && E && "radio" === C && "bg-background-neutral-soft-alpha",
                "form" === P && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === P && "items-center gap-2",
                "checkmark" === C && "after:ms-7",
              )),
              (h[0] = b),
              (h[1] = x),
              (h[2] = E),
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
          h[17] !== j ||
          h[18] !== N ||
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
                onChange: j,
                onClick: N,
              })),
              (h[12] = _),
              (h[13] = y),
              (h[14] = b),
              (h[15] = f),
              (h[16] = w),
              (h[17] = j),
              (h[18] = N),
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
          let k = "default" === P ? "text-sm font-medium" : "text-base"
          return (
            h[26] !== k ? ((d = (0, s.A)("text-default", k)), (h[26] = k), (h[27] = d)) : (d = h[27]),
            h[28] !== A || h[29] !== d
              ? ((u = (0, a.jsx)("span", { className: d, children: A })), (h[28] = A), (h[29] = d), (h[30] = u))
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
        T = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        A =
          "default" === h &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        w = "metered" === h && "ring-1 ring-inset ring-border-subtle",
        j = "secondary" === h && "bg-surface-secondary/92",
        N = "muted" === h && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
        I =
          "form" === h &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        S = "outlined" === h && "border border-subtle bg-transparent",
        E =
          "flat" === h &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        C = "input" === h && "border border-primary-outline bg-primary-soft",
        P = "recommendation" === h && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== d ||
        o[1] !== A ||
        o[2] !== w ||
        o[3] !== j ||
        o[4] !== N ||
        o[5] !== I ||
        o[6] !== S ||
        o[7] !== E ||
        o[8] !== C ||
        o[9] !== P ||
        o[10] !== _ ||
        o[11] !== y ||
        o[12] !== b ||
        o[13] !== x ||
        o[14] !== v ||
        o[15] !== T
          ? ((t = (0, s.A)(_, y, b, x, v, T, A, w, j, N, I, S, E, C, P, d)),
            (o[0] = d),
            (o[1] = A),
            (o[2] = w),
            (o[3] = j),
            (o[4] = N),
            (o[5] = I),
            (o[6] = S),
            (o[7] = E),
            (o[8] = C),
            (o[9] = P),
            (o[10] = _),
            (o[11] = y),
            (o[12] = b),
            (o[13] = x),
            (o[14] = v),
            (o[15] = T),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== h
          ? ((n =
              "default" === h || "metered" === h
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
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
  w2yL(e, t, n) {
    n.d(
      t,
      {},
      {
        D6: function ({ displayMode: e, isPinned: t, isPopoverOpen: n }) {
          let a = t && "overlay" !== e,
            i = null
          return (
            a ? (i = "inline") : "overlay" === e && n && (i = "popover"),
            { displayMode: e, shouldHideInlineImmediately: "overlay" === e && n, shouldShow: a, visibleSurface: i }
          )
        },
        Sj: function ({ displayMode: e, isPinned: t, panelWidth: n = 300 }) {
          return t && "shift" === e ? -(308 + n - 300) / 2 : 0
        },
        UQ: function (e, t = 300) {
          let n = (e - 736) / 2,
            a = t - 300
          return n < 180 + a / 2 ? "overlay" : n < 400 + a ? "shift" : "gutter"
        },
      },
    )
  },
  GaCK(e, t, n) {
    var a = n("zTeN"),
      i = n("gbrq"),
      s = n("OWtl"),
      r = n("Oj9r"),
      l = n("Exwq"),
      o = n("w2yL")
    let c = (0, a.vP)(s.u, { displayMode: "overlay", isPopoverOpen: !1 }),
      d = (0, a.i1)(r.GD, (e, { get: t }) => {
        let n = (0, i.RJ)(!0 === e ? t(i.jy) : t(i.Fu, e), e),
          a = t(c),
          s = (0, o.D6)({
            displayMode: a.displayMode,
            isPinned: n,
            isPopoverOpen: a.isPopoverOpen || ("boolean" != typeof e && n),
          })
        return t(l.VC) ? { ...s, shouldShow: !1, shouldHideInlineImmediately: !0, visibleSurface: null } : s
      }),
      u = (0, a.i1)(r.GD, (e, { get: t }) => null != t(d, e).visibleSurface)
    n.d(t, {}, { N: c, d: u })
  },
  Dofq(e, t, n) {
    var a = n("gbrq"),
      i = n("GaCK")
    function s(e, t, { pinStateKey: n = !0, returnFocusId: r, transition: l } = {}) {
      if (null != l) return void l(t, () => s(e, t, { pinStateKey: n, returnFocusId: r }))
      let o = e.get(i.N),
        c = !0 === n ? null : n
      if (
        (null != c && (!1 !== c || "overlay" !== o.displayMode) && e.set(a.Fu, c, (0, a.x5)(c, t)),
        "overlay" !== o.displayMode)
      ) {
        !0 === n && e.set(a.jy, t)
        return
      }
      e.set(i.N, { ...o, isPopoverOpen: t, returnFocusId: t ? r : o.returnFocusId })
    }
    n.d(
      t,
      {},
      {
        t: s,
        z: function (e, t = !0, n) {
          let r = e.get(i.N),
            l = (0, a.RJ)(!0 === t ? e.get(a.jy) : e.get(a.Fu, t), t)
          s(e, "overlay" === r.displayMode ? !(r.isPopoverOpen || ("boolean" != typeof t && l)) : !l, {
            pinStateKey: t,
            transition: n,
          })
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
  ncoo(e, t, n) {
    var a = n("B2b6"),
      i = n("rL0c")
    n.d(
      t,
      {},
      {
        I: function (e, t, n) {
          let s = n.toUpperCase(),
            r = (0, a.OG)(s),
            l = Number.isFinite(r) ? r : (0, i.E)({ intl: e, currencyCode: s })
          return (0, i.N)({ intl: e, amount: t / 10 ** l, currencyCode: s, currencyFractionDigits: l })
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
//# sourceMappingURL=664717.69f48aff9a.js.map
