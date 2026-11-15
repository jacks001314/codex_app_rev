export const __rspack_esm_ids = [918359]
export const __webpack_modules__ = {
  OXR4(e, t, s) {
    var a = s("ABep"),
      i = s("QosV"),
      n = s("on57"),
      r = s("Yakm"),
      o = s("aBXq")
    s.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            s,
            l,
            d,
            c,
            u,
            h,
            m,
            p = (0, i.c)(29),
            {
              actions: f,
              children: g,
              collapsible: x,
              defaultOpen: y,
              disableContentInlineInset: b,
              count: S,
              id: v,
              onOpenChange: _,
              showDivider: j,
              title: w,
            } = e,
            A = void 0 === y || y,
            M = void 0 === j || j
          p[0] !== f || p[1] !== x
            ? ((t =
                null == f
                  ? null
                  : (0, a.jsx)("span", {
                      className: "flex items-center gap-2",
                      role: "presentation",
                      onClick: (e) => {
                        x && (e.preventDefault(), e.stopPropagation())
                      },
                      onKeyDown: (e) => {
                        x && e.stopPropagation()
                      },
                      children: f,
                    })),
              (p[0] = f),
              (p[1] = x),
              (p[2] = t))
            : (t = p[2])
          let N = t
          ;(p[3] !== x
            ? ((s = x
                ? (0, a.jsx)(r.A, {
                    className:
                      "icon-2xs -rotate-90 transition-transform group-open/section:rotate-0 motion-reduce:transition-none",
                  })
                : null),
              (p[3] = x),
              (p[4] = s))
            : (s = p[4]),
            p[5] !== s || p[6] !== w
              ? ((l = (0, a.jsxs)(a.Fragment, { children: [w, s] })), (p[5] = s), (p[6] = w), (p[7] = l))
              : (l = p[7]))
          let T = l,
            k = x ? "details" : "section"
          p[8] !== x || p[9] !== A || p[10] !== _
            ? ((d = x
                ? {
                    open: A,
                    onToggle: (e) => {
                      _?.(e.currentTarget.open)
                    },
                  }
                : {}),
              (p[8] = x),
              (p[9] = A),
              (p[10] = _),
              (p[11] = d))
            : (d = p[11])
          let R = d,
            P = x ? "summary" : "div"
          p[12] !== N || p[13] !== S || p[14] !== T || p[15] !== M || p[16] !== P
            ? ((c = (0, a.jsx)(o.u, { action: N, as: P, count: S, showDivider: M, title: T })),
              (p[12] = N),
              (p[13] = S),
              (p[14] = T),
              (p[15] = M),
              (p[16] = P),
              (p[17] = c))
            : (c = p[17])
          let C = !(void 0 !== b && b) && "px-[var(--detail-page-inline-inset,0px)]"
          return (
            p[18] !== C ? ((u = (0, n.A)("flex flex-col gap-1", C)), (p[18] = C), (p[19] = u)) : (u = p[19]),
            p[20] !== g || p[21] !== u
              ? ((h = (0, a.jsx)("div", { className: u, children: g })), (p[20] = g), (p[21] = u), (p[22] = h))
              : (h = p[22]),
            p[23] !== k || p[24] !== v || p[25] !== R || p[26] !== h || p[27] !== c
              ? ((m = (0, a.jsxs)(k, {
                  ...R,
                  id: v,
                  className:
                    "group/section flex flex-col gap-4 [--sectioned-page-leading-inset:var(--detail-page-inline-inset,0px)]",
                  children: [c, h],
                })),
                (p[23] = k),
                (p[24] = v),
                (p[25] = R),
                (p[26] = h),
                (p[27] = c),
                (p[28] = m))
              : (m = p[28]),
            m
          )
        },
      },
    )
  },
  aBXq(e, t, s) {
    var a = s("ABep"),
      i = s("QosV"),
      n = s("on57")
    s.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            s,
            r,
            o,
            l,
            d,
            c,
            u = (0, i.c)(24),
            { action: h, as: m, count: p, size: f, showDivider: g, sticky: x, title: y } = e,
            b = void 0 === m ? "div" : m,
            S = void 0 === f ? "default" : f,
            v = "summary" === b && "cursor-interaction list-none marker:hidden",
            _ =
              x &&
              "relative sticky top-0 z-10 bg-surface after:pointer-events-none after:absolute after:-inset-x-3 after:top-full after:h-2 after:bg-surface after:content-['']",
            j = (void 0 === g || g) && "border-b border-subtle"
          u[0] !== v || u[1] !== _ || u[2] !== j
            ? ((t = (0, n.A)(
                "flex items-center justify-between gap-3 pe-0.5 pb-2 text-default [padding-inline-start:var(--sectioned-page-leading-inset,0.5rem)]",
                v,
                _,
                j,
              )),
              (u[0] = v),
              (u[1] = _),
              (u[2] = j),
              (u[3] = t))
            : (t = u[3])
          let w = t
          ;(u[4] !== p || u[5] !== S
            ? ((s =
                null == p
                  ? null
                  : (0, a.jsx)("span", {
                      className: (0, n.A)("text-tertiary", "compact" === S && "text-sm"),
                      children: p,
                    })),
              (u[4] = p),
              (u[5] = S),
              (u[6] = s))
            : (s = u[6]),
            u[7] !== s || u[8] !== y
              ? ((r = (0, a.jsxs)(a.Fragment, { children: [y, s] })), (u[7] = s), (u[8] = y), (u[9] = r))
              : (r = u[9]))
          let A = r,
            M = "summary" === b ? "span" : "h2",
            N = "summary" === b ? "span" : "div",
            T = "compact" === S ? "text-base" : "text-lg"
          return (
            u[10] !== T
              ? ((o = (0, n.A)("flex min-h-7 items-center gap-1.5 leading-6 font-medium", T)), (u[10] = T), (u[11] = o))
              : (o = u[11]),
            u[12] !== M || u[13] !== A || u[14] !== o
              ? ((l = (0, a.jsx)(M, { className: o, children: A })), (u[12] = M), (u[13] = A), (u[14] = o), (u[15] = l))
              : (l = u[15]),
            u[16] !== N || u[17] !== h
              ? ((d = null == h ? null : (0, a.jsx)(N, { className: "shrink-0", children: h })),
                (u[16] = N),
                (u[17] = h),
                (u[18] = d))
              : (d = u[18]),
            u[19] !== b || u[20] !== w || u[21] !== l || u[22] !== d
              ? ((c = (0, a.jsxs)(b, { className: w, "data-slot": "section-header", children: [l, d] })),
                (u[19] = b),
                (u[20] = w),
                (u[21] = l),
                (u[22] = d),
                (u[23] = c))
              : (c = u[23]),
            c
          )
        },
      },
    )
  },
  GlQn(e, t, s) {
    var a = s("ABep"),
      i = s("QosV"),
      n = s("oyxz")
    function r(e) {
      return (0, a.jsx)("strong", { children: e }, "strong")
    }
    function o(e) {
      return (0, a.jsx)("strong", { children: e }, "strong")
    }
    s.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            s,
            l,
            d = (0, i.c)(9),
            { reason: c, field: u } = e,
            h = c ?? "unknown"
          return (
            "invalid_url" === c &&
              ["image_url", "image_link", "additional_image_urls", "additional_image_link"].includes(u.split(".")[0]) &&
              (h = "unsupported_image_url"),
            "currency_mismatch" === c && "price" === u && (h = "processing_currency_mismatch"),
            "type" === c &&
              (["title", "name", "brand", "description", "seller_name"].includes(u)
                ? (h = "text_type")
                : ["price", "sale_price", "shipping_price"].includes(u)
                  ? (h = "price_type")
                  : "item_id" === u && (h = "identifier_type")),
            "unsupported_value" === c && "availability" === u && (h = "gmc_availability"),
            "too_long" === c &&
              ["title", "description"].includes(u) &&
              (h = "title" === u ? "title_too_long" : "description_too_long"),
            d[0] !== u || d[1] !== h
              ? ((t = (0, a.jsx)("li", {
                  children: (0, a.jsx)(n.A, {
                    id: "businessProfiles.activity.examples.reasonCause",
                    defaultMessage:
                      "<strong>Why:</strong> {reason, select, unverified_product_domain {The domain in {field} was not verified for this profile when the upload was processed} product_domain_outside_profile {The domain in {field} was outside this profile's allowed domains when the upload was processed} invalid_landing_page_url {{field} is not a valid product page URL} invalid_url {{field} is not a valid URL} unsupported_image_url {{field} contains an invalid or unsupported image URL} missing {A required value for {field} is missing} none {{field} has no value} text_type {{field} must contain text} price_type {{field} has the wrong data type for a price} identifier_type {{field} has the wrong data type for a product identifier} type {{field} has the wrong data type} gmc_availability {{field} is not a supported Google Merchant Center availability value} unsupported_value {{field} contains a value that is not supported} invalid_condition {{field} is not a supported product condition} invalid_price {{field} is not a valid price} invalid_availability {{field} is not a supported availability value} invalid_bool {{field} is not a valid true/false value} expected_price_with_currency {{field} is missing a valid amount or currency} expected_google_iso_8601 {{field} is not a supported date and time} expected_iso_8601 {{field} contains an invalid date or time} expected_start_end_range {{field} must contain both a start and an end date} start_must_precede_end {The start date in {field} is not earlier than the end date} requires_sale_price {{field} was supplied without a sale_price} required_for_preorder_or_backorder {{field} is required for products on preorder or backorder} requires_gtin_or_mpn {A product identifier is required because identifier_exists is not false} invalid_dimensions {{field} does not match the required dimensions structure} title_too_long {{field} exceeds the 150-character limit} description_too_long {{field} exceeds the 5,000-character limit} too_long {{field} exceeds its character limit} invalid_amount {{field} contains an invalid price amount} non_positive_amount {{field} contains a price amount that is zero or negative} currency_mismatch {{field} uses a different currency from the regular price} must_be_less_than_price {{field} is equal to or higher than the regular price} conflicting_alias {Multiple fields provide conflicting values for {field}} userinfo_not_allowed {{field} contains a URL with a username or password} invalid_country {{field} contains an invalid country code} invalid_country_list {{field} does not contain a supported list of country codes} unsupported_country {Product targeting does not match the countries allowed for this feed} processing_currency_mismatch {The price currency is not allowed for this feed} no_eligible_products {No eligible products could be read from this row} skip_file {This product sample could not be processed} invalid {{field} failed validation, but no more specific reason was saved} other {No specific validation reason was saved for {field}}}",
                    description:
                      "Cause of one saved product-field rejection. field is the literal feed field name. reason is an allowlisted machine code, never raw error text. Preserve all select keys. Domain statements describe the saved upload-time result, not current verification. Missing means a required value is absent or empty; none means no supplied value. The strong tag marks the Why label. Unknown reasons must not imply a cause.",
                    values: { reason: h, field: u, strong: o },
                  }),
                })),
                (d[0] = u),
                (d[1] = h),
                (d[2] = t))
              : (t = d[2]),
            d[3] !== u || d[4] !== h
              ? ((s = (0, a.jsx)("li", {
                  children: (0, a.jsx)(n.A, {
                    id: "businessProfiles.activity.examples.reasonAction",
                    defaultMessage:
                      '<strong>How to fix:</strong> {reason, select, unverified_product_domain {Review the selected profile and its website. If they match your product URLs, contact support to resolve domain verification before uploading again} product_domain_outside_profile {Use product URLs belonging to the selected profile, or upload to the matching profile} invalid_landing_page_url {Use a complete HTTP or HTTPS product page URL without credentials, spaces or invalid characters} invalid_url {Use a complete URL such as https://example.com/products/item. Replace spaces with %20} unsupported_image_url {Use a direct HTTP or HTTPS image URL, such as https://example.com/images/item%201.jpg. Replace spaces with %20} missing {Supply a value for {field}} none {Supply a non-empty value for {field}} text_type {Use text for {field}. In JSONL, put the text in a quoted string instead of an object or array} price_type {Use an amount with a currency, such as 12.99 USD. In JSONL, write it as a quoted string} identifier_type {Use a product identifier such as SKU-123. In JSONL, put a text identifier in a quoted string} type {Use the data type specified for {field} in the file requirements} gmc_availability {Use in_stock, out_of_stock, preorder or backorder for Google Merchant Center feeds} unsupported_value {Choose one of the allowed values for {field} in the file requirements} invalid_condition {Use new, refurbished or used} invalid_price {Enter an amount and currency, such as 12.99 USD} invalid_availability {Use in_stock, out_of_stock, pre_order, backorder or unknown} invalid_bool {Use true or false} expected_price_with_currency {Enter an amount and currency, such as 12.99 USD} expected_google_iso_8601 {Use an ISO 8601 date and time with a timezone, such as 2026-10-06T12:00:00Z} expected_iso_8601 {Use a valid ISO 8601 date and time, such as 2026-10-06T12:00:00Z} expected_start_end_range {Separate the start and end with a slash, such as 2026-10-06T12:00:00Z/2026-10-07T12:00:00Z} start_must_precede_end {Set the end date later than the start date} requires_sale_price {Add a valid sale_price, or remove sale_price_effective_date} required_for_preorder_or_backorder {Add availability_date with the expected availability date, such as 2026-10-06T12:00:00Z} requires_gtin_or_mpn {Supply a valid gtin or mpn. Set identifier_exists to false only if the product has neither identifier} invalid_dimensions {Supply at least two positive numeric dimensions: length, width or height. Set unit to in, cm, ft, m or mm, and remove extra keys} title_too_long {Shorten title to 150 characters or fewer} description_too_long {Shorten description to 5,000 characters or fewer} too_long {Shorten {field} to the character limit in the field requirements} invalid_amount {Enter a finite numeric amount, such as 12.99} non_positive_amount {Enter a price amount greater than zero} currency_mismatch {Use the same currency for the sale price and regular price} must_be_less_than_price {Set the sale price below the regular price} conflicting_alias {Keep one field name, or give the alias fields the same value} userinfo_not_allowed {Remove the username and password from the URL} invalid_country {Use an uppercase two-letter country code supported by this feed, such as CA or GB. Use GB, not UK, for the United Kingdom} invalid_country_list {Use an array such as ["CA", "GB"] in JSONL, or CA,GB in a quoted CSV cell. Use only country codes supported by this feed} unsupported_country {Check target_countries and any overriding target_country against this feed’s allowed countries. Use the intended market, for example CA for Canada. If they already match, ask OpenAI to check the feed configuration} processing_currency_mismatch {Compare the reported currency and feed configuration. Correct the source only if its currency is wrong; otherwise ask OpenAI to verify the configuration} no_eligible_products {Check the required fields and format. If they are correct, contact OpenAI to check the feed configuration} skip_file {Check the file format and required fields, then validate again} other {Check {field} against the linked file requirements. If its value is already valid, share the available feed details with OpenAI support}}',
                    description:
                      "Action for one saved product-field rejection, displayed as a separate bullet below its cause. field is a literal feed field name. Preserve select keys, HTTP, HTTPS, JSONL, ISO 8601, true/false, currency examples and allowed enum values. Price and identifier type guidance gives supported text examples without excluding other supported types. The strong tag marks the How to fix label. Never infer a domain problem when no specific reason was saved.",
                    values: { reason: h, field: u, strong: r },
                  }),
                })),
                (d[3] = u),
                (d[4] = h),
                (d[5] = s))
              : (s = d[5]),
            d[6] !== t || d[7] !== s
              ? ((l = (0, a.jsxs)("ul", {
                  className: "flex list-disc flex-col gap-2 ps-5 text-sm text-secondary select-text",
                  children: [t, s],
                })),
                (d[6] = t),
                (d[7] = s),
                (d[8] = l))
              : (l = d[8]),
            l
          )
        },
      },
    )
  },
  jqO9(e, t, s) {
    var a = s("ABep"),
      i = s("QosV"),
      n = s("oyxz"),
      r = s("G8V1"),
      o = s("Sm6l"),
      l = s("ZtSy")
    s.d(
      t,
      {},
      {
        MerchantAgreementForm: function (e) {
          let t,
            s,
            d,
            c,
            u,
            h,
            m,
            p,
            f,
            g = (0, i.c)(21),
            { openTarget: x, submitting: y, onSubmit: b, onBack: S } = e
          return (
            g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (g[0] = t)) : (t = g[0]),
            g[1] !== x
              ? ((s = (0, a.jsx)("p", {
                  id: "merchant-acceptance-notice",
                  children: (0, a.jsx)(n.A, {
                    id: "merchantSettings.agreement.nextAcceptanceWithCommercePoliciesStatement",
                    defaultMessage:
                      "By clicking Next, you electronically accept the <terms>OpenAI Merchant Feed Terms of Service</terms> and <policies>OpenAI Commerce Policies</policies> on behalf of your organization, represent that you have the authority to bind your organization to those terms, and agree that this acceptance is legally binding.",
                    description:
                      "First paragraph on the merchant agreement form, shared by merchant settings and Business Profile product setup. There is no checkbox. The accepting representative asserts authority to bind their organization. The terms and policies tags link to the Merchant Feed Terms and Commerce Policies, respectively. Next is the button label.",
                    values: {
                      terms: (e) =>
                        (0, a.jsx)(l.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/merchant-feed-terms-of-service/",
                          initiator: "open_in_browser_bridge",
                          openTarget: x,
                          underline: "always",
                          children: e,
                        }),
                      policies: (e) =>
                        (0, a.jsx)(l.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/commerce-policies/",
                          initiator: "open_in_browser_bridge",
                          openTarget: x,
                          underline: "always",
                          children: e,
                        }),
                    },
                  }),
                })),
                (g[1] = x),
                (g[2] = s))
              : (s = g[2]),
            g[3] !== x
              ? ((d = (0, a.jsx)("p", {
                  children: (0, a.jsx)(n.A, {
                    id: "merchantSettings.agreement.privacyStatement",
                    defaultMessage:
                      "You further acknowledge OpenAI’s <privacy>Privacy Policy</privacy> and consent to receive OpenAI Merchant Program updates. You may unsubscribe at any time.",
                    description:
                      "Privacy and program-update notice on the merchant settings agreement form before Next. The privacy tag links to OpenAI's Privacy Policy. OpenAI Merchant Program is the program name.",
                    values: {
                      privacy: (e) =>
                        (0, a.jsx)(l.G, {
                          className: "font-semibold",
                          href: "https://openai.com/policies/privacy-policy/",
                          initiator: "open_in_browser_bridge",
                          openTarget: x,
                          underline: "always",
                          children: e,
                        }),
                    },
                  }),
                })),
                (g[3] = x),
                (g[4] = d))
              : (d = g[4]),
            g[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, a.jsx)(n.A, {
                  id: "merchantSettings.agreement.back",
                  defaultMessage: "Back",
                  description:
                    "Secondary button below the merchant agreement form. Returns the merchant representative to ChatGPT without submitting an agreement acceptance. Short button label.",
                })),
                (g[5] = c))
              : (c = g[5]),
            g[6] !== S
              ? ((u = (0, a.jsx)(o.$, {
                  type: "button",
                  color: "secondary",
                  size: "large",
                  radius: "full",
                  onClick: S,
                  children: c,
                })),
                (g[6] = S),
                (g[7] = u))
              : (u = g[7]),
            g[8] !== y
              ? ((h = y
                  ? (0, a.jsx)(n.A, {
                      id: "merchantSettings.agreement.submitting",
                      defaultMessage: "Submitting…",
                      description:
                        "Pending button label while merchant settings saves the representative's acceptance of the terms. The button cannot be clicked again while this request is in progress.",
                    })
                  : (0, a.jsx)(n.A, {
                      id: "merchantSettings.agreement.next",
                      defaultMessage: "Next",
                      description:
                        "Primary button on the merchant agreement form. Clicking it accepts the Merchant Feed Terms and Commerce Policies on behalf of the representative's organization and opens feed setup after the backend confirms the acceptance. Short label referenced by the legal notice immediately above.",
                    })),
                (g[8] = y),
                (g[9] = h))
              : (h = g[9]),
            g[10] !== y || g[11] !== h
              ? ((m = (0, a.jsx)(o.$, {
                  type: "submit",
                  color: "primary",
                  size: "large",
                  radius: "full",
                  disabled: y,
                  "aria-describedby": "merchant-acceptance-notice",
                  children: h,
                })),
                (g[10] = y),
                (g[11] = h),
                (g[12] = m))
              : (m = g[12]),
            g[13] !== u || g[14] !== m
              ? ((p = (0, a.jsxs)("div", { className: "flex gap-4", children: [u, m] })),
                (g[13] = u),
                (g[14] = m),
                (g[15] = p))
              : (p = g[15]),
            g[16] !== b || g[17] !== s || g[18] !== d || g[19] !== p
              ? ((f = (0, a.jsx)(r.A, {
                  locale: "en-US",
                  defaultLocale: "en-US",
                  messages: t,
                  children: (0, a.jsxs)("form", {
                    onSubmit: b,
                    className: "flex flex-col gap-8 text-base leading-relaxed text-default",
                    lang: "en-US",
                    children: [s, d, p],
                  }),
                })),
                (g[16] = b),
                (g[17] = s),
                (g[18] = d),
                (g[19] = p),
                (g[20] = f))
              : (f = g[20]),
            f
          )
        },
      },
    )
  },
  Tuak(e, t, s) {
    s.d(t, { MerchantSettingsPage: () => e4 })
    var a = s("ABep"),
      i = s("QosV"),
      n = s("irkb"),
      r = s("T0Rc"),
      o = s("xSOA"),
      l = s("zTeN"),
      d = s("zd8w"),
      c = s("Wf1j"),
      u = s("oyxz"),
      h = s("HZfM"),
      m = s("EOo5"),
      p = s("Ghh3"),
      f = s("w5lF"),
      g = s("zKCW"),
      x = s("Sm6l"),
      y = s("ZtSy"),
      b = s("bVeK"),
      S = s("BrP7"),
      v = s("zLIa"),
      _ = s("OMIV"),
      j = s("eShZ"),
      w = s("XHnB"),
      A = s("RNul"),
      M = s("jqO9")
    let N = new Map()
    function T(e, t, s) {
      if (null == e.accountId || null == e.userId) return
      let { accountId: a, userId: i, feedId: n } = e,
        r = JSON.stringify([a, i, n, t]),
        o = async () => {
          await p.Request.safePost("/shopping/onboarding/observations", {
            expectedIdentity: { accountId: a, userId: i },
            requestBody: {
              operation: t,
              outcome: null == s ? "succeeded" : "failed",
              ...(null == s ? {} : { reason: s }),
              ...(n ? { feed_id: n } : {}),
            },
            retry: "never",
            isExpectedError: () => !0,
            signal: AbortSignal.timeout(5e3),
          }).catch(() => {})
        },
        l = N.get(r),
        d = null == l ? o() : l.then(o)
      ;(N.set(r, d),
        d.finally(() => {
          N.get(r) === d && N.delete(r)
        }))
    }
    function k(e, t, s) {
      s instanceof j.fk && "network" === s.errorKind && null == s.responseStatus && T(e, t, "network")
    }
    function R(e, t, s) {
      return (a) => {
        throw (s.aborted || k(e, t, a), a)
      }
    }
    function P(e) {
      let t,
        s,
        n,
        l,
        c,
        m,
        f,
        g,
        y,
        b,
        S,
        v,
        _,
        j,
        w = (0, i.c)(50),
        { accountId: N, userId: k, children: P } = e,
        F = (0, h.Zp)(),
        I = (0, d.useRef)(null)
      ;(w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => I.current?.abort()), (s = []), (w[0] = t), (w[1] = s))
        : ((t = w[0]), (s = w[1])),
        (0, d.useEffect)(t, s),
        w[2] !== N || w[3] !== k
          ? ((n = ["merchant-agreement", k, N]), (w[2] = N), (w[3] = k), (w[4] = n))
          : (n = w[4]))
      let U = null != k && null != N
      ;(w[5] !== N || w[6] !== k
        ? ((l = async (e) => {
            let { signal: t } = e
            if (null == N || null == k) throw Error("Merchant identity unavailable")
            let s = await p.Request.safeGet("/shopping/merchant-agreement/status", {
              expectedIdentity: { accountId: N, userId: k },
              signal: t,
              retry: !1,
              expectedErrorStatuses: [403, 503],
            }).catch(R({ accountId: N, userId: k }, "agreement_status", t))
            if (
              s.user_id !== k ||
              (s.account_id ?? s.workspace_id) !== N ||
              (null != s.workspace_id && s.workspace_id !== N)
            )
              throw Error("Merchant access identity changed")
            return (
              t.aborted ||
                "agreement_required" !== s.access ||
                T({ accountId: N, userId: k }, "agreement_version", C(s) ? null : "agreement_version"),
              s
            )
          }),
          (w[5] = N),
          (w[6] = k),
          (w[7] = l))
        : (l = w[7]),
        w[8] !== n || w[9] !== U || w[10] !== l
          ? ((c = {
              queryKey: n,
              enabled: U,
              queryFn: l,
              staleTime: 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: "always",
            }),
            (w[8] = n),
            (w[9] = U),
            (w[10] = l),
            (w[11] = c))
          : (c = w[11]))
      let { data: D, isPending: L, isError: E, refetch: q } = (0, r.I)(c)
      w[12] !== N || w[13] !== D
        ? ((m = D?.access === "agreement_required" && (D.account_id ?? D.workspace_id) === N && C(D)),
          (w[12] = N),
          (w[13] = D),
          (w[14] = m))
        : (m = w[14])
      let O = m
      w[15] !== N || w[16] !== O || w[17] !== q || w[18] !== k
        ? ((f = {
            mutationFn: async () => {
              if (null == N || null == k || !O || I.current) return
              let e = new AbortController()
              return (
                (I.current = e),
                p.Request.safePost("/shopping/merchant-agreement/domain/accept", {
                  expectedIdentity: { accountId: N, userId: k },
                  signal: e.signal,
                  retry: "never",
                  expectedErrorStatuses: [403, 409, 422, 503],
                  requestBody: {
                    agreement_version: "2026-06-15",
                    consent_version: "2026-10-14-commerce-policies",
                    accepted_terms: !0,
                  },
                })
                  .catch(R({ accountId: N, userId: k }, "agreement_accept", e.signal))
                  .then(async (t) => {
                    if (
                      (e.signal.throwIfAborted(),
                      (t.account_id ?? t.workspace_id) !== N ||
                        (null != t.workspace_id && t.workspace_id !== N) ||
                        t.user_id !== k)
                    )
                      throw Error("Merchant acceptance identity changed")
                    await q()
                  })
                  .finally(() => {
                    I.current === e && (I.current = null)
                  })
              )
            },
            retry: !1,
            gcTime: 0,
          }),
          (w[15] = N),
          (w[16] = O),
          (w[17] = q),
          (w[18] = k),
          (w[19] = f))
        : (f = w[19])
      let { mutate: H, isPending: z, isError: B } = (0, o.n)(f)
      if (L) {
        let e
        return (
          w[20] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(A.y, {})), (w[20] = e)) : (e = w[20]),
          e
        )
      }
      if (!E && D?.access === "allowed") {
        let e
        return (
          w[21] !== P ? ((e = (0, a.jsx)(a.Fragment, { children: P })), (w[21] = P), (w[22] = e)) : (e = w[22]),
          e
        )
      }
      return (
        w[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("h1", {
              className: "text-2xl font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.agreement.title",
                defaultMessage: "Set up merchant access",
                description:
                  "Title on merchant settings before a representative accepts the terms for the selected workspace",
              }),
            })),
            (w[23] = g))
          : (g = w[23]),
        w[24] !== E || w[25] !== B
          ? ((y =
              (E || B) &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.error",
                  defaultMessage: "We couldn’t complete that request. Please try again.",
                  description:
                    "Error on merchant settings when checking workspace access or recording agreement acceptance fails. The user can retry without creating a duplicate acceptance.",
                }),
              })),
            (w[24] = E),
            (w[25] = B),
            (w[26] = y))
          : (y = w[26]),
        w[27] !== D?.access || w[28] !== E
          ? ((b =
              !E &&
              D?.access === "denied" &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.accountDenied",
                  defaultMessage: "Merchant settings aren’t available for this account",
                  description:
                    "Message on merchant settings when the current user or workspace does not qualify for merchant self-serve access. No agreement can be submitted.",
                }),
              })),
            (w[27] = D?.access),
            (w[28] = E),
            (w[29] = b))
          : (b = w[29]),
        w[30] !== O || w[31] !== D?.access || w[32] !== E
          ? ((S =
              !E &&
              D?.access === "agreement_required" &&
              !O &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.unavailable",
                  defaultMessage: "Agreement acceptance isn’t available right now. Please refresh or contact support.",
                  description:
                    "Message on merchant settings when acceptance is disabled or newer consent wording is required before the representative can accept",
                }),
              })),
            (w[30] = O),
            (w[31] = D?.access),
            (w[32] = E),
            (w[33] = S))
          : (S = w[33]),
        w[34] !== O || w[35] !== E || w[36] !== H || w[37] !== F || w[38] !== z
          ? ((v =
              !E &&
              O &&
              (0, a.jsx)(M.MerchantAgreementForm, {
                submitting: z,
                onSubmit: (e) => {
                  ;(e.preventDefault(), z || I.current || H())
                },
                onBack: () => void F("/"),
              })),
            (w[34] = O),
            (w[35] = E),
            (w[36] = H),
            (w[37] = F),
            (w[38] = z),
            (w[39] = v))
          : (v = w[39]),
        w[40] !== O || w[41] !== E || w[42] !== q
          ? ((_ =
              (E || !O) &&
              (0, a.jsx)(x.$, {
                className: "self-start",
                color: "secondary",
                onClick: () => void q(),
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.agreement.refresh",
                  defaultMessage: "Refresh status",
                  description:
                    "Button on merchant settings to retry loading access or check whether another workspace member has accepted the merchant agreement",
                }),
              })),
            (w[40] = O),
            (w[41] = E),
            (w[42] = q),
            (w[43] = _))
          : (_ = w[43]),
        w[44] !== y || w[45] !== b || w[46] !== S || w[47] !== v || w[48] !== _
          ? ((j = (0, a.jsx)("main", {
              className: "h-full overflow-y-auto bg-surface px-6 py-8 text-default",
              children: (0, a.jsxs)("div", {
                className: "mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center gap-8",
                children: [g, y, b, S, v, _],
              }),
            })),
            (w[44] = y),
            (w[45] = b),
            (w[46] = S),
            (w[47] = v),
            (w[48] = _),
            (w[49] = j))
          : (j = w[49]),
        j
      )
    }
    function C(e) {
      return "2026-06-15" === e.agreement_version && "2026-10-14-commerce-policies" === e.consent_version
    }
    var F = s("on57")
    function I(e) {
      let t,
        s,
        n,
        r,
        o = (0, i.c)(8)
      return (
        o[0] !== e ? (({ className: t, ...s } = e), (o[0] = e), (o[1] = t), (o[2] = s)) : ((t = o[1]), (s = o[2])),
        o[3] !== t
          ? ((n = (0, F.A)("bg-black! text-white! disabled:opacity-100! aria-disabled:opacity-100!", t)),
            (o[3] = t),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== s || o[6] !== n
          ? ((r = (0, a.jsx)(x.$, { ...s, className: n, color: "primary" })), (o[5] = s), (o[6] = n), (o[7] = r))
          : (r = o[7]),
        r
      )
    }
    var U = s("D7Ms"),
      D = s("BSnr"),
      L = s("Qgfj"),
      E = s("JNtf"),
      q = s("mUDD")
    function O(e) {
      let t,
        s = (0, i.c)(3),
        { field: n, reason: r } = e,
        o = r ?? "unknown"
      return (
        s[0] !== n || s[1] !== o
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.reason",
              defaultMessage:
                "{field}: {reason, select, unverified_product_domain {The product domain was not verified for this profile. Verify the domain and upload again} product_domain_outside_profile {The product domain is outside this profile's allowed domains. Use a product URL belonging to this profile} invalid_landing_page_url {The landing page URL is invalid. Use an HTTP or HTTPS URL without credentials or invalid characters} invalid_url {The URL is invalid. Enter a complete HTTP or HTTPS URL} unsupported_image_url {The image URL is invalid or unsupported. Enter a complete supported image URL} missing {A required value is missing. Fill in this field} none {This field cannot be empty. Supply a value} type {The value has the wrong data type. Match this field's type in the feed specification} unsupported_value {This value is not supported. Use one of the allowed values in the feed specification} invalid_country {Use a supported two-letter country code, such as CA or GB} invalid_country_list {Use a JSON array or comma-separated list of supported two-letter country codes} invalid_condition {The product condition is invalid. Use new, refurbished, or used} invalid_price {The price must include an amount and currency, such as 12.99 USD} invalid_availability {Use a supported availability, such as in_stock or out_of_stock} invalid_bool {Use true or false for this field} expected_price_with_currency {The price must include an amount and currency, such as 12.99 USD} expected_google_iso_8601 {Use an ISO 8601 date and time with a timezone, such as 2026-10-06T12:00:00Z} invalid_amount {The price amount is invalid. Enter a finite number} non_positive_amount {The price amount must be positive} currency_mismatch {The sale price currency must match the regular price currency} must_be_less_than_price {The sale price must be lower than the regular price} conflicting_alias {Multiple columns provide conflicting values for this field. Keep one consistent value} userinfo_not_allowed {The URL contains credentials. Remove the username and password} unknown {A specific cause was not recorded. Share the available feed details with OpenAI support so they can investigate} other {Review the field requirements. If the value is already valid, share the available feed details with OpenAI support so they can investigate}}",
              description:
                "Plain-text explanation and next step for a saved feed field validation reason, used in merchant validation results and issue details. Calmly explain the saved validation failure and the corrective action. Text may wrap; do not add HTML or Markdown. {field} is an untranslated canonical feed column name, such as url or price. {reason} is a non-displayed machine code selecting the explanation; preserve placeholder names and select keys. Missing reasons select unknown; unrecognized codes select other. These fallbacks do not identify a specific cause, and saved examples may not cover every rejected row. Keep protocol names and literal feed values unchanged.",
              values: { field: n, reason: o },
            })),
            (s[0] = n),
            (s[1] = o),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function H(e) {
      let t,
        s,
        n,
        o,
        l,
        d,
        c,
        h,
        f,
        y,
        b = (0, i.c)(43),
        { feedId: S, uploadId: v, code: _, onAccessDenied: w } = e,
        A = void 0 === _ ? "invalid_value" : _,
        { userId: M, accountId: N } = (0, m.As)()
      ;(b[0] !== N || b[1] !== A || b[2] !== S || b[3] !== v || b[4] !== M
        ? ((t = ["merchant-issue-reasons", M, N, S, v, A]),
          (b[0] = N),
          (b[1] = A),
          (b[2] = S),
          (b[3] = v),
          (b[4] = M),
          (b[5] = t))
        : (t = b[5]),
        b[6] !== A || b[7] !== S || b[8] !== w || b[9] !== v
          ? ((s = async (e) => {
              let { signal: t } = e
              try {
                return await p.Request.safeGet("/shopping/feeds/{feed_id}/uploads/{upload_id}/diagnostics", {
                  parameters: { path: { feed_id: S, upload_id: v }, query: { code: A } },
                  signal: t,
                  expectedErrorStatuses: [400, 401, 403, 404, 409, 410, 429, 503],
                })
              } catch (e) {
                throw (e instanceof j.fk && [401, 403].includes(e.status) && w?.(), e)
              }
            }),
            (b[6] = A),
            (b[7] = S),
            (b[8] = w),
            (b[9] = v),
            (b[10] = s))
          : (s = b[10]),
        b[11] !== t || b[12] !== s
          ? ((n = { queryKey: t, queryFn: s, staleTime: 0, gcTime: 0, retry: !1 }),
            (b[11] = t),
            (b[12] = s),
            (b[13] = n))
          : (n = b[13]))
      let { data: T, isFetching: k, isError: R, error: P, refetch: C } = (0, r.I)(n)
      if (k) {
        let e
        return (
          b[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.loading",
                  defaultMessage: "Loading specific error reasons…",
                  description: "Loading saved validation reasons for an expanded feed issue",
                }),
              })),
              (b[14] = e))
            : (e = b[14]),
          e
        )
      }
      if (R) {
        let e,
          t,
          s,
          i,
          n,
          r,
          o = P instanceof j.fk && [404, 409, 410].includes(P.status)
        if (P instanceof j.fk && [401, 403].includes(P.status)) {
          let t
          ;(b[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.accessDenied",
                defaultMessage:
                  "You no longer have access to these saved reasons. Check the selected account or ask an administrator for access",
                description:
                  "Saved feed diagnostic request was denied; do not show previously cached examples or expose backend error text.",
              })),
              (b[15] = t))
            : (t = b[15]),
            (e = t))
        } else if (o) {
          let t
          ;(b[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.evidenceUnavailable",
                defaultMessage:
                  "Saved reasons are unavailable for this upload. Share the Feed ID and Upload ID with OpenAI support so they can investigate",
                description:
                  "Exact upload evidence was missing or could not be resolved. This does not mean there were no rejected rows or that a different upload should be shown.",
              })),
              (b[16] = t))
            : (t = b[16]),
            (e = t))
        } else {
          let t
          ;(b[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.error",
                defaultMessage: "Specific error reasons could not be loaded",
                description:
                  "Request failure while loading feed validation reasons; this is distinct from an upload validation failure",
              })),
              (b[17] = t))
            : (t = b[17]),
            (e = t))
        }
        return (
          b[18] !== e
            ? ((t = (0, a.jsx)(g.l, { variant: "callout", type: "caution", role: "alert", content: e })),
              (b[18] = e),
              (b[19] = t))
            : (t = b[19]),
          b[20] !== C ? ((s = () => void C()), (b[20] = C), (b[21] = s)) : (s = b[21]),
          b[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.retry",
                defaultMessage: "Retry",
                description: "Retry loading the saved reasons for a feed issue",
              })),
              (b[22] = i))
            : (i = b[22]),
          b[23] !== s
            ? ((n = (0, a.jsx)(x.$, { color: "ghost", size: "compact", onClick: s, children: i })),
              (b[23] = s),
              (b[24] = n))
            : (n = b[24]),
          b[25] !== t || b[26] !== n
            ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [t, n] })),
              (b[25] = t),
              (b[26] = n),
              (b[27] = r))
            : (r = b[27]),
          r
        )
      }
      if (null == T) return null
      b[28] !== T.examples ? ((o = T.examples ?? []), (b[28] = T.examples), (b[29] = o)) : (o = b[29])
      let F = o
      return (
        b[30] !== A
          ? ((l = (0, a.jsx)("h3", {
              className: "font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.examplesByCode",
                defaultMessage:
                  "{code, select, missing_required_column {Missing column examples} other {Rejected value examples}}",
                description:
                  "Heading above saved examples for one diagnostic category in the merchant feed error drawer. Code is an untranslated diagnostic identifier; examples are a bounded sample, not every rejected row.",
                values: { code: A },
              }),
            })),
            (b[30] = A),
            (b[31] = l))
          : (l = b[31]),
        b[32] !== F
          ? ((d =
              0 === F.length
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueReasons.unavailable",
                      defaultMessage: "Specific reasons were not saved or are no longer available for this upload",
                      description:
                        "No saved rejected-row examples are available; this does not mean the upload had no errors",
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      F.map(z),
                      (0, a.jsx)("p", {
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.issueReasons.sampleLimit",
                          defaultMessage:
                            "Reasons come from up to 5 saved examples per field and may not cover every rejected row",
                          description:
                            "Discloses that the displayed feed validation reasons are sampled, not exhaustive",
                        }),
                      }),
                    ],
                  })),
            (b[32] = F),
            (b[33] = d))
          : (d = b[33]),
        b[34] !== C ? ((c = () => void C()), (b[34] = C), (b[35] = c)) : (c = b[35]),
        b[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.refresh",
              defaultMessage: "Refresh examples",
              description:
                "Reload the saved examples for this exact upload and diagnostic category without submitting the feed again.",
            })),
            (b[36] = h))
          : (h = b[36]),
        b[37] !== c
          ? ((f = (0, a.jsx)(x.$, { color: "ghost", size: "compact", onClick: c, children: h })),
            (b[37] = c),
            (b[38] = f))
          : (f = b[38]),
        b[39] !== f || b[40] !== l || b[41] !== d
          ? ((y = (0, a.jsxs)("div", { className: "flex flex-col gap-3 text-sm select-text", children: [l, d, f] })),
            (b[39] = f),
            (b[40] = l),
            (b[41] = d),
            (b[42] = y))
          : (y = b[42]),
        y
      )
    }
    function z(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-3",
          children: [
            (0, a.jsx)("p", {
              className: "text-xs",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.position",
                defaultMessage: "{file} · Record {row, number}",
                description:
                  "Saved example's location in the merchant feed error drawer. File is the processing filename; row is its one-based logical record position, not necessarily a physical text line.",
                values: { file: e.source_file, row: e.row_number },
              }),
            }),
            null != e.product_id &&
              (0, a.jsx)("p", {
                className: "text-sm break-all select-text",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.productId",
                  defaultMessage: "Product ID: {id}",
                  description:
                    "Saved product identifier for a rejected record in merchant feed error details. Id is merchant-provided plain text, not a link.",
                  values: { id: e.product_id },
                }),
              }),
            (0, a.jsx)("div", {
              className: "text-sm break-all whitespace-pre-wrap select-text",
              children: (0, a.jsx)(B, { example: e }),
            }),
            e.value_truncated &&
              (0, a.jsx)("p", {
                className: "text-xs",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueReasons.truncatedValue",
                  defaultMessage: "This long value has been shortened",
                  description:
                    "Notice below a saved rejected product value in merchant error details when the backend marked it as truncated.",
                }),
              }),
            (0, a.jsx)("p", { children: (0, a.jsx)(O, { field: e.field, reason: e.reason }) }),
          ],
        },
        t,
      )
    }
    function B(e) {
      let t,
        s,
        n = (0, i.c)(6),
        { example: r } = e
      if (r.value_redacted) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.redactedValue",
                defaultMessage: "Value hidden because the URL contains credentials",
                description:
                  "Explains why a rejected product value is hidden in merchant feed error details. The server marked it as containing credentials; do not reveal the value.",
              })),
              (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      if (null == r.failed_value) {
        let e
        return (
          n[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.issueReasons.valueUnavailable",
                defaultMessage: "Value not available",
                description:
                  "A rejected value was not recorded as a displayable scalar. This does not establish that the source contained a literal null or an empty field.",
              })),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      return (
        n[2] !== r.failed_value
          ? ((t = JSON.stringify(r.failed_value)), (n[2] = r.failed_value), (n[3] = t))
          : (t = n[3]),
        n[4] !== t
          ? ((s = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueReasons.rejectedValue",
              defaultMessage: "Rejected value: {value}",
              description:
                "Saved rejected product value in merchant feed error details. Value is JSON-quoted plain text so empty strings and whitespace remain visible; never render it as HTML or a link.",
              values: { value: t },
            })),
            (n[4] = t),
            (n[5] = s))
          : (s = n[5]),
        s
      )
    }
    function G(e) {
      let t,
        s = (0, i.c)(2),
        { code: n } = e,
        r = n ?? "unclassified"
      return (
        s[0] !== r
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.issueTitle",
              defaultMessage:
                "{code, select, missing_required_column {Missing required column} invalid_value {Invalid value} invalid_gzip {Invalid gzip file} unsupported_file_type {Unsupported file type} invalid_sftp_directory_layout {SFTP directory layout} other {Unclassified issue}}",
              description:
                "Short issue type shown in merchant Feed activity's Issues list and error details. Code is an untranslated diagnostic identifier that selects the human-readable label; other means the run has no recognized structured diagnostic.",
              values: { code: r },
            })),
            (s[0] = r),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function K(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        d,
        c,
        h,
        m,
        p,
        f,
        x,
        b,
        S,
        v,
        _,
        j,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        C,
        F,
        I,
        U,
        D,
        O,
        z,
        B,
        G,
        K = (0, i.c)(74),
        { feedId: Y, upload: Q, onClose: X, onRestoreFocus: ee, onAccessDenied: et } = e
      ;(K[0] !== X
        ? ((t = (e) => {
            e || X()
          }),
          (K[0] = X),
          (K[1] = t))
        : (t = K[1]),
        K[2] !== ee
          ? ((s = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), ee())
              },
            }),
            (K[2] = ee),
            (K[3] = s))
          : (s = K[3]),
        K[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(E.L3, {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.title",
                defaultMessage: "Error details",
                description:
                  "Title of the right-side drawer opened from a merchant feed's Issues list. It shows diagnostics for the selected upload only.",
              }),
            })),
            (K[4] = n))
          : (n = K[4]),
        K[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(q.c7, {
              titleSize: "base",
              title: n,
              subtitle: (0, a.jsx)(E.rr, {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueDetails.description",
                  defaultMessage:
                    "Review what was recorded for this upload and the next steps supported by that evidence",
                  description:
                    "Introductory guidance for the selected upload; do not assume every failure requires a merchant source-file change.",
                }),
              }),
            })),
            (K[5] = r))
          : (r = K[5]))
      let es = "failed" === Q.status ? "error" : "caution"
      return (
        K[6] !== Q.status ? ((o = (0, a.jsx)($, { status: Q.status })), (K[6] = Q.status), (K[7] = o)) : (o = K[7]),
        K[8] !== Q.status
          ? ((l = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.statusSummary",
              defaultMessage:
                "{status, select, failed {This upload did not complete successfully. Review the recorded issues below to identify the next step} completed_with_errors {Processing finished with errors. Use the recorded counts and saved examples to identify affected products} other {Use the recorded issues and examples below to identify the next step}}",
              description:
                "Explains whole-upload failure versus processing that completed with errors. Counts and saved examples, rather than status alone, establish the affected products. Status is an untranslated machine identifier.",
              values: { status: Q.status },
            })),
            (K[8] = Q.status),
            (K[9] = l))
          : (l = K[9]),
        K[10] !== es || K[11] !== o || K[12] !== l
          ? ((d = (0, a.jsx)(g.l, { variant: "callout", type: es, title: o, content: l })),
            (K[10] = es),
            (K[11] = o),
            (K[12] = l),
            (K[13] = d))
          : (d = K[13]),
        K[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.accepted",
                defaultMessage: "Accepted rows",
                description:
                  "Label for the selected upload's recorded accepted-row count; unavailable is distinct from zero.",
              }),
            })),
            (K[14] = c))
          : (c = K[14]),
        K[15] !== Q.rows_accepted
          ? ((h = (0, a.jsx)("dd", { children: (0, a.jsx)(W, { value: Q.rows_accepted }) })),
            (K[15] = Q.rows_accepted),
            (K[16] = h))
          : (h = K[16]),
        K[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.rejectedCount",
                defaultMessage: "Rejected rows",
                description:
                  "Label for the selected upload's recorded rejected-row total. Field counts can overlap and must not be added together.",
              }),
            })),
            (K[17] = m))
          : (m = K[17]),
        K[18] !== Q.rows_rejected
          ? ((p = (0, a.jsx)("dd", { children: (0, a.jsx)(W, { value: Q.rows_rejected }) })),
            (K[18] = Q.rows_rejected),
            (K[19] = p))
          : (p = K[19]),
        K[20] !== h || K[21] !== p
          ? ((f = (0, a.jsxs)("dl", { className: "grid grid-cols-2 gap-3 text-sm", children: [c, h, m, p] })),
            (K[20] = h),
            (K[21] = p),
            (K[22] = f))
          : (f = K[22]),
        K[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.fields",
                defaultMessage: "Recorded issues",
                description:
                  "Heading above saved field-level and upload-level diagnostics in the merchant feed error drawer.",
              }),
            })),
            (K[23] = x))
          : (x = K[23]),
        K[24] !== Q.diagnostics
          ? ((b = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3",
              children: [
                x,
                Q.diagnostics?.length
                  ? (0, a.jsx)("dl", { className: "text-sm", children: Q.diagnostics.map(Z) })
                  : (0, a.jsx)("p", {
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.issueDetails.noDiagnostics",
                        defaultMessage: "No structured issue details were recorded for this run",
                        description:
                          "Fallback in the merchant feed error drawer when an upload failed without saved structured diagnostics. This does not mean there were no errors.",
                      }),
                    }),
              ],
            })),
            (S =
              null != Q.diagnostics &&
              Q.diagnostics.length > 1 &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.issueDetails.overlappingCounts",
                  defaultMessage: "A row can have more than one issue, so these counts may overlap",
                  description:
                    "Per-diagnostic counts are not additive; the rejected-row total is reported separately when available.",
                }),
              })),
            (K[24] = Q.diagnostics),
            (K[25] = b),
            (K[26] = S))
          : ((b = K[25]), (S = K[26])),
        K[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.fix",
                defaultMessage: "Next steps",
                description:
                  "Heading above evidence-based corrective steps or OpenAI investigation guidance; the cause may be unknown.",
              }),
            })),
            (K[27] = v))
          : (v = K[27]),
        K[28] !== Q.diagnostics
          ? ((_ = new Set(Q.diagnostics?.length ? Q.diagnostics.map(J) : ["unclassified"])),
            (K[28] = Q.diagnostics),
            (K[29] = _))
          : (_ = K[29]),
        K[30] !== _ ? ((j = [..._].map(V)), (K[30] = _), (K[31] = j)) : (j = K[31]),
        K[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, a.jsx)(y.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              openTarget: "external-browser",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
                description:
                  "Link in the Product feed settings help panel to the product feed schema, required fields and examples. Keep this label concise.",
              }),
            })),
            (K[32] = w))
          : (w = K[32]),
        K[33] !== j
          ? ((A = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3 border-t border-subtle pt-6",
              children: [v, j, w],
            })),
            (K[33] = j),
            (K[34] = A))
          : (A = K[34]),
        K[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = ["missing_required_column", "invalid_value"]), (K[35] = M))
          : (M = K[35]),
        K[36] !== Y || K[37] !== et || K[38] !== Q.diagnostics || K[39] !== Q.upload_id
          ? ((N = M.map((e) =>
              Q.diagnostics?.some((t) => t.code === e)
                ? (0, a.jsx)(H, { feedId: Y, uploadId: Q.upload_id, code: e, onAccessDenied: et }, e)
                : null,
            )),
            (K[36] = Y),
            (K[37] = et),
            (K[38] = Q.diagnostics),
            (K[39] = Q.upload_id),
            (K[40] = N))
          : (N = K[40]),
        K[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.upload",
                defaultMessage: "Upload details",
                description:
                  "Heading above the selected upload's identifiers, source, and timestamps in merchant error details.",
              }),
            })),
            (K[41] = T))
          : (T = K[41]),
        K[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.feed",
                defaultMessage: "Feed ID",
                description:
                  "Label for the selected merchant's product feed identifier in the error drawer; its value is copyable.",
              }),
            })),
            (K[42] = k))
          : (k = K[42]),
        K[43] !== Y
          ? ((R = (0, a.jsx)("dd", { className: "break-all select-text", children: Y })), (K[43] = Y), (K[44] = R))
          : (R = K[44]),
        K[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.run",
                defaultMessage: "Upload ID",
                description:
                  "Label for the exact upload identifier being inspected in the merchant error drawer; it can be shared with support.",
              }),
            })),
            (K[45] = P))
          : (P = K[45]),
        K[46] !== Q.upload_id
          ? ((C = (0, a.jsx)("dd", { className: "break-all select-text", children: Q.upload_id })),
            (K[46] = Q.upload_id),
            (K[47] = C))
          : (C = K[47]),
        K[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueList.source",
                defaultMessage: "Source",
                description: "Label for how the merchant's product feed upload arrived.",
              }),
            })),
            (K[48] = F))
          : (F = K[48]),
        K[49] !== Q.source
          ? ((I = (0, a.jsx)("dd", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueList.sourceName",
                defaultMessage:
                  "{source, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} other {Unknown source}}",
                description:
                  "Recorded upload method. Source is an untranslated identifier; other means unavailable. Preserve SFTP.",
                values: { source: Q.source },
              }),
            })),
            (K[49] = Q.source),
            (K[50] = I))
          : (I = K[50]),
        K[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, a.jsx)("dt", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.issueDetails.uploaded",
                defaultMessage: "Uploaded",
                description: "Label for when the selected product feed upload began, in the merchant error drawer.",
              }),
            })),
            (K[51] = U))
          : (U = K[51]),
        K[52] !== Q.uploaded_at
          ? ((D = (0, a.jsx)("dd", {
              children: (0, a.jsx)(L.XU, { value: Q.uploaded_at, dateStyle: "medium", timeStyle: "short" }),
            })),
            (K[52] = Q.uploaded_at),
            (K[53] = D))
          : (D = K[53]),
        K[54] !== Q.completed_at
          ? ((O =
              null != Q.completed_at &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("dt", {
                    className: "text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueDetails.completed",
                      defaultMessage: "Processing ended",
                      description:
                        "Label for when processing of the selected upload ended, including failed uploads, in merchant error details.",
                    }),
                  }),
                  (0, a.jsx)("dd", {
                    children: (0, a.jsx)(L.XU, { value: Q.completed_at, dateStyle: "medium", timeStyle: "short" }),
                  }),
                ],
              })),
            (K[54] = Q.completed_at),
            (K[55] = O))
          : (O = K[55]),
        K[56] !== R || K[57] !== C || K[58] !== I || K[59] !== D || K[60] !== O
          ? ((z = (0, a.jsxs)("section", {
              className: "flex flex-col gap-3 border-t border-subtle pt-6",
              children: [
                T,
                (0, a.jsxs)("dl", {
                  className: "grid grid-cols-2 gap-3 text-sm",
                  children: [k, R, P, C, F, I, U, D, O],
                }),
              ],
            })),
            (K[56] = R),
            (K[57] = C),
            (K[58] = I),
            (K[59] = D),
            (K[60] = O),
            (K[61] = z))
          : (z = K[61]),
        K[62] !== f || K[63] !== b || K[64] !== S || K[65] !== A || K[66] !== N || K[67] !== z || K[68] !== d
          ? ((B = (0, a.jsx)(q.R4, {
              size: "viewport",
              children: (0, a.jsxs)("div", { className: "flex flex-col gap-6", children: [r, d, f, b, S, A, N, z] }),
            })),
            (K[62] = f),
            (K[63] = b),
            (K[64] = S),
            (K[65] = A),
            (K[66] = N),
            (K[67] = z),
            (K[68] = d),
            (K[69] = B))
          : (B = K[69]),
        K[70] !== t || K[71] !== s || K[72] !== B
          ? ((G = (0, a.jsx)(E.lG, {
              open: !0,
              onOpenChange: t,
              contentProps: s,
              variant: "chatgpt",
              size: "feature",
              contentPosition: "anchored",
              contentClassName: "inset-y-4 right-4 flex flex-col",
              children: B,
            })),
            (K[70] = t),
            (K[71] = s),
            (K[72] = B),
            (K[73] = G))
          : (G = K[73]),
        G
      )
    }
    function V(e) {
      return (0, a.jsx)(
        "p",
        {
          className: "text-sm text-secondary",
          children: (0, a.jsx)(u.A, {
            id: "merchantSettings.issueDetails.fixDescription",
            defaultMessage:
              "{code, select, missing_required_column {Check the recorded field names and add the missing required columns before uploading again. If the columns are already present, share the Feed ID and Upload ID with OpenAI support} invalid_value {Review the saved reason for each rejected value before changing the feed. If the reason is unavailable or the value already meets the requirements, share the Feed ID and Upload ID with OpenAI support} invalid_gzip {Recreate the gzip file and verify that it decompresses, then upload it again} unsupported_file_type {Convert the feed to a supported file format, then upload it again} invalid_sftp_directory_layout {Upload the feed files directly to the SFTP root instead of a subfolder} other {These diagnostics do not identify a specific cause, so a source-file change cannot be recommended yet. Share the Feed ID and Upload ID below with OpenAI support so they can investigate}}",
            description:
              "Evidence-based next step for a saved feed diagnostic. Code selects an instruction. Unknown causes require investigation, not an assumed source-file fix; OpenAI support can investigate with the displayed identifiers. Preserve gzip, SFTP, Feed ID, and Upload ID.",
            values: { code: e },
          }),
        },
        e,
      )
    }
    function J(e) {
      return e.code
    }
    function Z(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-start justify-between gap-4 border-b border-subtle py-3",
          children: [
            (0, a.jsxs)("dt", {
              className: "break-all select-text",
              children: [
                (0, a.jsx)(G, { code: e.code }),
                e.field
                  ? (0, a.jsx)("p", { className: "text-xs text-secondary", children: e.field })
                  : (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.issueDetails.noField",
                        defaultMessage: "No field recorded",
                        description:
                          "No specific field was recorded with this diagnostic; this does not mean all fields are affected.",
                      }),
                    }),
              ],
            }),
            (0, a.jsx)("dd", {
              className: "shrink-0 text-secondary",
              children:
                null == e.rows_affected
                  ? (0, a.jsx)(W, { value: e.rows_affected })
                  : (0, a.jsx)(u.A, {
                      id: "merchantSettings.issueDetails.affectedRows",
                      defaultMessage: "{count, plural, one {# row} other {# rows}}",
                      description:
                        "Recorded number of rows affected by one field diagnostic in merchant error details. Count is a nonnegative integer; field counts can overlap.",
                      values: { count: e.rows_affected },
                    }),
            }),
          ],
        },
        t,
      )
    }
    function $(e) {
      let t,
        s = (0, i.c)(2),
        { status: n } = e
      return (
        s[0] !== n
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.issueDetails.status",
              defaultMessage:
                "{status, select, failed {Upload failed} completed_with_errors {Completed with errors} other {Status unavailable}}",
              description:
                "Recorded status for an upload in the Issues list or drawer. Distinguish an upload that failed from processing that completed with errors; other is an unexpected or unavailable status.",
              values: { status: n },
            })),
            (s[0] = n),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function W(e) {
      let t,
        s = (0, i.c)(2),
        { value: n } = e
      return (
        s[0] !== n
          ? ((t =
              null == n
                ? (0, a.jsx)(u.A, {
                    id: "merchantSettings.issueDetails.countNotRecorded",
                    defaultMessage: "Not recorded",
                    description: "A row count was not recorded; do not interpret it as zero.",
                  })
                : (0, a.jsx)(L.Gr, { value: n })),
            (s[0] = n),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function Y(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        d,
        h,
        m,
        p,
        f,
        g = (0, i.c)(31),
        { page: y, total: b, onPageChange: S } = e,
        v = (0, c.A)(),
        _ = Math.ceil(b / 10)
      if (_ <= 1) return null
      g[0] !== v
        ? ((t = v.formatMessage({
            id: "merchantSettings.activity.pagination.label",
            defaultMessage: "Feed activity pagination",
            description:
              "Accessible name for the pagination controls below Recent runs or Issues in merchant feed settings. Merchants use these controls to browse ten records at a time.",
          })),
          (g[0] = v),
          (g[1] = t))
        : (t = g[1])
      let j = 10 * y + 1,
        w = Math.min((y + 1) * 10, b)
      g[2] !== j || g[3] !== w || g[4] !== b
        ? ((s = (0, a.jsx)("span", {
            "aria-live": "polite",
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.range",
              defaultMessage: "Showing {start, number}–{end, number} of {total, number}",
              description:
                "Result range below Recent runs or Issues in merchant feed settings. The start and end placeholders are the first and last visible one-based record positions; total is the number of loaded records matching the filters, not all retained history.",
              values: { start: j, end: w, total: b },
            }),
          })),
          (g[2] = j),
          (g[3] = w),
          (g[4] = b),
          (g[5] = s))
        : (s = g[5])
      let A = 0 === y
      ;(g[6] !== S || g[7] !== y ? ((n = () => S(y - 1)), (g[6] = S), (g[7] = y), (g[8] = n)) : (n = g[8]),
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.previous",
              defaultMessage: "Previous",
              description:
                "Button below Recent runs or Issues in merchant feed settings that shows the previous page of up to ten records. Disabled on the first page.",
            })),
            (g[9] = r))
          : (r = g[9]),
        g[10] !== A || g[11] !== n
          ? ((o = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineCard",
              size: "actionSm",
              disabled: A,
              onClick: n,
              children: r,
            })),
            (g[10] = A),
            (g[11] = n),
            (g[12] = o))
          : (o = g[12]))
      let M = y + 1
      g[13] !== _ || g[14] !== M
        ? ((l = (0, a.jsx)(u.A, {
            id: "merchantSettings.activity.pagination.page",
            defaultMessage: "Page {page, number} of {count, number}",
            description:
              "Current page indicator between Previous and Next in merchant Feed activity. Page is the current one-based page number; count is the total number of pages for the loaded, filtered records.",
            values: { page: M, count: _ },
          })),
          (g[13] = _),
          (g[14] = M),
          (g[15] = l))
        : (l = g[15])
      let N = y + 1 >= _
      return (
        g[16] !== S || g[17] !== y ? ((d = () => S(y + 1)), (g[16] = S), (g[17] = y), (g[18] = d)) : (d = g[18]),
        g[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(u.A, {
              id: "merchantSettings.activity.pagination.next",
              defaultMessage: "Next",
              description:
                "Button below Recent runs or Issues in merchant feed settings that shows the next page of up to ten records. Disabled on the last page.",
            })),
            (g[19] = h))
          : (h = g[19]),
        g[20] !== N || g[21] !== d
          ? ((m = (0, a.jsx)(x.$, {
              type: "button",
              color: "outlineCard",
              size: "actionSm",
              disabled: N,
              onClick: d,
              children: h,
            })),
            (g[20] = N),
            (g[21] = d),
            (g[22] = m))
          : (m = g[22]),
        g[23] !== l || g[24] !== m || g[25] !== o
          ? ((p = (0, a.jsxs)("div", { className: "flex items-center gap-3", children: [o, l, m] })),
            (g[23] = l),
            (g[24] = m),
            (g[25] = o),
            (g[26] = p))
          : (p = g[26]),
        g[27] !== t || g[28] !== p || g[29] !== s
          ? ((f = (0, a.jsxs)("nav", {
              className: "flex flex-wrap items-center justify-between gap-3 text-xs",
              "aria-label": t,
              children: [s, p],
            })),
            (g[27] = t),
            (g[28] = p),
            (g[29] = s),
            (g[30] = f))
          : (f = g[30]),
        f
      )
    }
    var Q = s("bqtn")
    function X(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        d,
        c,
        u,
        h,
        m = (0, i.c)(32),
        { label: p, value: f, options: g, onChange: y, disabled: S, showLabel: v, size: _ } = e,
        j = void 0 !== v && v,
        w = void 0 === _ ? "compact" : _,
        A = "field" === w ? "gap-1.5" : "gap-1"
      ;(m[0] !== A ? ((t = (0, F.A)("flex min-w-0 flex-col", A)), (m[0] = A), (m[1] = t)) : (t = m[1]),
        m[2] !== p || m[3] !== j || m[4] !== w
          ? ((s =
              j &&
              (0, a.jsx)("span", {
                className: (0, F.A)("font-medium", "field" === w ? "text-sm text-secondary" : "text-xs"),
                children: p,
              })),
            (m[2] = p),
            (m[3] = j),
            (m[4] = w),
            (m[5] = s))
          : (s = m[5]))
      let M = "field" === w ? "inputControl" : "settingsSelect"
      ;(m[6] !== g || m[7] !== f
        ? ((n = g.find((e) => e.value === f)?.label), (m[6] = g), (m[7] = f), (m[8] = n))
        : (n = m[8]),
        m[9] !== n
          ? ((r = (0, a.jsx)("span", { className: "truncate", children: n })), (m[9] = n), (m[10] = r))
          : (r = m[10]),
        m[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(b.Aq_, { className: "text-tertiary" })), (m[11] = o))
          : (o = m[11]),
        m[12] !== S || m[13] !== p || m[14] !== M || m[15] !== r
          ? ((l = (0, a.jsxs)(x.$, {
              className: "w-full min-w-0 justify-between",
              "aria-label": p,
              color: "outlineCard",
              size: M,
              radius: "small",
              disabled: S,
              children: [r, o],
            })),
            (m[12] = S),
            (m[13] = p),
            (m[14] = M),
            (m[15] = r),
            (m[16] = l))
          : (l = m[16]))
      let N = String(f)
      if (m[17] !== y || m[18] !== g) {
        let e
        ;(m[20] !== y
          ? ((e = (e) =>
              (0, a.jsx)(
                Q.ms.RadioItem,
                { value: String(e.value), onSelect: () => y(e.value), children: e.label },
                String(e.value),
              )),
            (m[20] = y),
            (m[21] = e))
          : (e = m[21]),
          (d = g.map(e)),
          (m[17] = y),
          (m[18] = g),
          (m[19] = d))
      } else d = m[19]
      return (
        m[22] !== N || m[23] !== d
          ? ((c = (0, a.jsx)(Q.ms.RadioGroup, { value: N, children: d })), (m[22] = N), (m[23] = d), (m[24] = c))
          : (c = m[24]),
        m[25] !== l || m[26] !== c
          ? ((u = (0, a.jsx)(Q.Ab, { contentWidth: "menuWide", triggerButton: l, children: c })),
            (m[25] = l),
            (m[26] = c),
            (m[27] = u))
          : (u = m[27]),
        m[28] !== u || m[29] !== t || m[30] !== s
          ? ((h = (0, a.jsxs)("div", { className: t, children: [s, u] })),
            (m[28] = u),
            (m[29] = t),
            (m[30] = s),
            (m[31] = h))
          : (h = m[31]),
        h
      )
    }
    function ee(e) {
      let t,
        s,
        o,
        l,
        h,
        f,
        y,
        S,
        v,
        _,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        C,
        F,
        L,
        E,
        q = (0, i.c)(127),
        { feedId: O } = e,
        H = (0, c.A)(),
        z = (0, n.jE)(),
        B = (0, d.useRef)(null),
        [V, J] = (0, d.useState)(0),
        { userId: Z, accountId: W } = (0, m.As)()
      q[0] !== W || q[1] !== O || q[2] !== Z
        ? ((t = JSON.stringify([Z, W, O])), (q[0] = W), (q[1] = O), (q[2] = Z), (q[3] = t))
        : (t = q[3])
      let Q = t,
        [ee, ei] = (0, d.useState)(null),
        [en, er] = (0, d.useState)(null),
        [eo, el] = (0, d.useState)(7),
        [ed, ec] = (0, d.useState)("all"),
        [eu, eh] = (0, d.useState)("newest")
      q[4] !== W || q[5] !== Q || q[6] !== O || q[7] !== z || q[8] !== Z
        ? ((s = function () {
            ;(ei(Q),
              er(null),
              z.removeQueries({ queryKey: ["merchant-issues", Z, W, O] }),
              z.removeQueries({ queryKey: ["merchant-issue-reasons", Z, W, O] }))
          }),
          (q[4] = W),
          (q[5] = Q),
          (q[6] = O),
          (q[7] = z),
          (q[8] = Z),
          (q[9] = s))
        : (s = q[9])
      let em = s
      ;(q[10] !== W || q[11] !== eo || q[12] !== O || q[13] !== Z
        ? ((o = ["merchant-issues", Z, W, O, eo]), (q[10] = W), (q[11] = eo), (q[12] = O), (q[13] = Z), (q[14] = o))
        : (o = q[14]),
        q[15] !== Q || q[16] !== eo || q[17] !== O || q[18] !== em
          ? ((l =
              null == O
                ? U.hT
                : async (e) => {
                    let { signal: t } = e
                    try {
                      let e = await p.Request.safeGet("/shopping/feeds/{feed_id}/uploads", {
                        parameters: { path: { feed_id: O }, query: { lookback_days: eo ?? void 0, errors_only: !0 } },
                        signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                        expectedErrorStatuses: [400, 401, 403, 404, 429, 503],
                      })
                      return (t.throwIfAborted(), ei((e) => (e === Q ? null : e)), e)
                    } catch (e) {
                      throw (e instanceof j.fk && [401, 403].includes(e.status) && em(), e)
                    }
                  }),
            (q[15] = Q),
            (q[16] = eo),
            (q[17] = O),
            (q[18] = em),
            (q[19] = l))
          : (l = q[19]))
      let ep = null != O && ee !== Q
      q[20] !== o || q[21] !== l || q[22] !== ep
        ? ((h = { queryKey: o, queryFn: l, enabled: ep, retry: !1, staleTime: 3e4 }),
          (q[20] = o),
          (q[21] = l),
          (q[22] = ep),
          (q[23] = h))
        : (h = q[23])
      let { data: ef, isPending: eg, isFetching: ex, isError: ey, error: eb, refetch: eS } = (0, r.I)(h)
      q[24] !== Q || q[25] !== ee || q[26] !== eb
        ? ((f = ee === Q || (eb instanceof j.fk && [401, 403].includes(eb.status))),
          (q[24] = Q),
          (q[25] = ee),
          (q[26] = eb),
          (q[27] = f))
        : (f = q[27])
      let ev = f
      ;(ev && null != en && er(null),
        q[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(u.A, {
              id: "merchantSettings.refreshIssues",
              defaultMessage: "Refresh",
              description: "Reloads upload errors",
            })),
            (q[28] = y))
          : (y = q[28]))
      let e_ = y
      if (
        q[29] !== ev ||
        q[30] !== ef ||
        q[31] !== eo ||
        q[32] !== en ||
        q[33] !== O ||
        q[34] !== H ||
        q[35] !== ey ||
        q[36] !== ex ||
        q[37] !== eg ||
        q[38] !== ed ||
        q[39] !== eu ||
        q[40] !== V ||
        q[41] !== eS
      ) {
        let e,
          t,
          s,
          i,
          n,
          r,
          o,
          l,
          d,
          c,
          h,
          m,
          p,
          f,
          y,
          j,
          F,
          U,
          L,
          E,
          z,
          K,
          Z,
          W = ev
            ? void 0
            : ef?.uploads
                .filter(
                  (e) =>
                    ("failed" === e.status || "completed_with_errors" === e.status) &&
                    ("all" === ed ||
                      ("unclassified" === ed ? !e.diagnostics?.length : e.diagnostics?.some((e) => e.code === ed))),
                )
                .sort((e, t) => (Date.parse(e.uploaded_at) - Date.parse(t.uploaded_at)) * ("oldest" === eu ? 1 : -1)),
          Q = Math.min(V, Math.max(1, Math.ceil((W?.length ?? 0) / 10)) - 1)
        null == W || ey || V === Q || J(Q)
        let ee = W?.slice(10 * Q, (Q + 1) * 10)
        ;((_ = ee?.find((e) => e.upload_id === en)),
          (v = D.X),
          (S = D.X.Content),
          (C = "gap-4"),
          q[54] !== H
            ? ((e = H.formatMessage({
                id: "merchantSettings.issueRange",
                defaultMessage: "Time range",
                description: "Lookback period for feed errors",
              })),
              (q[54] = H),
              (q[55] = e))
            : (e = q[55]),
          q[56] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                ;(el(e), J(0), er(null))
              }),
              (s = [1, 3, 7, 30, 90]),
              (q[56] = t),
              (q[57] = s))
            : ((t = q[56]), (s = q[57])),
          q[58] === Symbol.for("react.memo_cache_sentinel") ? ((i = s.map(ea)), (q[58] = i)) : (i = q[58]),
          q[59] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = [
                ...i,
                {
                  value: null,
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.recordedHistoryAllTime",
                    defaultMessage: "All time (recorded uploads)",
                    description:
                      "Time-range option in merchant Feed activity's Issues view. Includes recorded uploads without a date cutoff; available history can still be incomplete. Short option label.",
                  }),
                },
              ]),
              (q[59] = n))
            : (n = q[59]),
          q[60] !== eo || q[61] !== e
            ? ((r = (0, a.jsx)(X, { size: "field", showLabel: !0, label: e, value: eo, onChange: t, options: n })),
              (q[60] = eo),
              (q[61] = e),
              (q[62] = r))
            : (r = q[62]),
          q[63] !== H
            ? ((o = H.formatMessage({
                id: "merchantSettings.issueType",
                defaultMessage: "Issue type",
                description: "Filters upload history by diagnostic type",
              })),
              (q[63] = H),
              (q[64] = o))
            : (o = q[64]),
          q[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (e) => {
                ;(ec(e), J(0), er(null))
              }),
              (q[65] = l))
            : (l = q[65]),
          q[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = {
                value: "all",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.allIssues",
                  defaultMessage: "All issue types",
                  description: "Do not filter upload diagnostic types",
                }),
              }),
              (q[66] = d))
            : (d = q[66]),
          q[67] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = {
                value: "missing_required_column",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.missingColumn",
                  defaultMessage: "Missing required column",
                  description: "Feed is missing a required column",
                }),
              }),
              (q[67] = c))
            : (c = q[67]),
          q[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = {
                value: "invalid_value",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidValue",
                  defaultMessage: "Invalid value",
                  description: "Feed contains invalid field values",
                }),
              }),
              (q[68] = h))
            : (h = q[68]),
          q[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = {
                value: "invalid_gzip",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidGzip",
                  defaultMessage: "Invalid gzip file",
                  description: "Upload could not be decompressed as gzip",
                }),
              }),
              (q[69] = m))
            : (m = q[69]),
          q[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = {
                value: "unsupported_file_type",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.unsupportedType",
                  defaultMessage: "Unsupported file type",
                  description: "Upload uses an unsupported file format",
                }),
              }),
              (q[70] = p))
            : (p = q[70]),
          q[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = {
                value: "invalid_sftp_directory_layout",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.invalidLayout",
                  defaultMessage: "SFTP directory layout",
                  description: "Uploaded files are in unsupported SFTP subdirectories",
                }),
              }),
              (q[71] = f))
            : (f = q[71]),
          q[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = [
                d,
                c,
                h,
                m,
                p,
                f,
                {
                  value: "unclassified",
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.unclassified",
                    defaultMessage: "Unclassified",
                    description: "Failed upload with no structured diagnostics",
                  }),
                },
              ]),
              (q[72] = y))
            : (y = q[72]),
          q[73] !== ed || q[74] !== o
            ? ((j = (0, a.jsx)(X, { size: "field", showLabel: !0, label: o, value: ed, onChange: l, options: y })),
              (q[73] = ed),
              (q[74] = o),
              (q[75] = j))
            : (j = q[75]),
          q[76] !== H
            ? ((F = H.formatMessage({
                id: "merchantSettings.issueOrder",
                defaultMessage: "Sort by",
                description: "Sort order of feed upload errors",
              })),
              (q[76] = H),
              (q[77] = F))
            : (F = q[77]),
          q[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = (e) => {
                ;(eh(e), J(0), er(null))
              }),
              (q[78] = U))
            : (U = q[78]),
          q[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = {
                value: "newest",
                label: (0, a.jsx)(u.A, {
                  id: "merchantSettings.latestFirst",
                  defaultMessage: "Most recent",
                  description: "Sort uploads newest first",
                }),
              }),
              (q[79] = L))
            : (L = q[79]),
          q[80] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = [
                L,
                {
                  value: "oldest",
                  label: (0, a.jsx)(u.A, {
                    id: "merchantSettings.earliestFirst",
                    defaultMessage: "Oldest",
                    description: "Sort uploads oldest first",
                  }),
                },
              ]),
              (q[80] = E))
            : (E = q[80]),
          q[81] !== eu || q[82] !== F
            ? ((z = (0, a.jsx)(X, { size: "field", showLabel: !0, label: F, value: eu, onChange: U, options: E })),
              (q[81] = eu),
              (q[82] = F),
              (q[83] = z))
            : (z = q[83]))
        let ei = null == O || ex
        ;(q[84] !== eS ? ((K = () => void eS()), (q[84] = eS), (q[85] = K)) : (K = q[85]),
          q[86] !== ex || q[87] !== ei || q[88] !== K
            ? ((Z = (0, a.jsx)(I, {
                className: "self-end justify-self-end",
                size: "dialog",
                disabled: ei,
                loading: ex,
                sizingLabels: e_,
                onClick: K,
                children: e_,
              })),
              (q[86] = ex),
              (q[87] = ei),
              (q[88] = K),
              (q[89] = Z))
            : (Z = q[89]),
          q[90] !== r || q[91] !== j || q[92] !== z || q[93] !== Z
            ? ((w = (0, a.jsxs)("div", {
                className: "grid grid-cols-1 items-end gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1.3fr_1fr_auto]",
                children: [r, j, z, Z],
              })),
              (q[90] = r),
              (q[91] = j),
              (q[92] = z),
              (q[93] = Z),
              (q[94] = w))
            : (w = q[94]),
          q[95] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.recordedIssueScope",
                  defaultMessage:
                    "Showing issues from recorded uploads in the selected time range. Earlier uploads may not be included.",
                  description:
                    "Scope notice below the filters in merchant Feed activity's Issues view. Only available recorded uploads are checked; the results do not establish that every upload was checked. No placeholders.",
                }),
              })),
              (q[95] = A))
            : (A = q[95]),
          q[96] !== O
            ? ((M =
                null == O &&
                (0, a.jsx)("p", {
                  className:
                    "rounded-lg bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.selectForIssues",
                    defaultMessage: "Select a merchant above to check for issues.",
                    description: "No merchant selected for issue history",
                  }),
                })),
              (q[96] = O),
              (q[97] = M))
            : (M = q[97]),
          q[98] !== ev || q[99] !== O || q[100] !== eg
            ? ((N =
                null != O &&
                !ev &&
                eg &&
                (0, a.jsx)("p", {
                  role: "status",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.issuesLoading",
                    defaultMessage: "Loading feed issues…",
                    description: "Upload history loading",
                  }),
                })),
              (q[98] = ev),
              (q[99] = O),
              (q[100] = eg),
              (q[101] = N))
            : (N = q[101]),
          q[102] !== ev || q[103] !== ey
            ? ((T = ev
                ? (0, a.jsx)(g.l, {
                    variant: "callout",
                    type: "caution",
                    role: "alert",
                    content: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issuesAccessDenied",
                      defaultMessage:
                        "You no longer have access to this merchant's issues. Check the selected account or ask an administrator for access",
                      description:
                        "Upload history or diagnostic access was denied. Hide previously loaded issue rows and details until a successful fresh read.",
                    }),
                  })
                : ey &&
                  (0, a.jsx)(g.l, {
                    variant: "callout",
                    type: "caution",
                    role: "alert",
                    content: (0, a.jsx)(u.A, {
                      id: "merchantSettings.issuesStatusUnavailable",
                      defaultMessage: "Status unavailable. Feed issues could not be loaded. Try refreshing.",
                      description: "Upload error history request failed",
                    }),
                  })),
              (q[102] = ev),
              (q[103] = ey),
              (q[104] = T))
            : (T = q[104]),
          q[105] !== ev || q[106] !== ef?.truncated
            ? ((k =
                !ev &&
                ef?.truncated &&
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.partialIssueHistory",
                    defaultMessage: "Some upload history could not be checked. Results may be incomplete.",
                    description:
                      "Warning in merchant Feed activity's Issues view when history reads were limited or some history was unavailable. Returned issues remain visible; missing history may contain additional issues. No placeholders.",
                  }),
                })),
              (q[105] = ev),
              (q[106] = ef?.truncated),
              (q[107] = k))
            : (k = q[107]),
          (R =
            !ey &&
            W?.length === 0 &&
            (0, a.jsx)("p", {
              children: ef?.truncated
                ? (0, a.jsx)(u.A, {
                    id: "merchantSettings.noIssuesInPartialHistory",
                    defaultMessage: "No issues found in the loaded upload history. Additional issues may exist.",
                    description:
                      "Empty state in merchant Feed activity's Issues view when a partial history read found no issues matching the filters. Missing history may contain issues; this does not establish that the merchant has no feed issues. No placeholders.",
                  })
                : (0, a.jsx)(u.A, {
                    id: "merchantSettings.noRecordedIssues",
                    defaultMessage: "No matching issues in the loaded upload history",
                    description:
                      "Empty state after a successful read in merchant Feed activity's Issues view. No failed uploads in the loaded history match the filters; this makes no claim about uploads outside that history. No placeholders.",
                  }),
            })),
          (P =
            null != ee &&
            ee.length > 0 &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("table", {
                  className: "w-full text-start text-sm",
                  children: [
                    (0, a.jsx)("thead", {
                      children: (0, a.jsxs)("tr", {
                        className: "text-xs text-secondary",
                        children: [
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.issue",
                              defaultMessage: "Issue",
                              description:
                                "Column heading for the diagnostic type in the merchant Feed activity Issues list.",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.source",
                              defaultMessage: "Source",
                              description:
                                "Column heading for how a merchant's product feed upload arrived, such as File upload, Hosted URL, or SFTP.",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            className: "py-3 font-normal",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.issueList.time",
                              defaultMessage: "Time",
                              description:
                                "Column heading for when the upload with an issue began in the merchant Feed activity Issues list.",
                            }),
                          }),
                          (0, a.jsx)("th", {
                            children: (0, a.jsx)("span", {
                              className: "sr-only",
                              children: (0, a.jsx)(u.A, {
                                id: "merchantSettings.issueList.details",
                                defaultMessage: "Details",
                                description:
                                  "Accessible column heading for buttons that open merchant feed error details.",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("tbody", {
                      children: ee.map((e) =>
                        (0, a.jsxs)(
                          "tr",
                          {
                            className: "border-t border-subtle",
                            children: [
                              (0, a.jsxs)("td", {
                                className: "py-4 pe-4",
                                children: [
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: "cursor-interaction text-start text-default hover:underline",
                                    onClick: (t) => {
                                      ;((B.current = t.currentTarget), er(e.upload_id))
                                    },
                                    children: (0, a.jsx)("span", {
                                      className: "flex flex-col gap-1",
                                      children: e.diagnostics?.length
                                        ? [...new Set(e.diagnostics.map(es))].map(et)
                                        : (0, a.jsx)(G, { code: void 0 }),
                                    }),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-secondary",
                                    children: (0, a.jsx)($, { status: e.status }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 pe-4 text-secondary",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.issueList.sourceName",
                                  defaultMessage:
                                    "{source, select, file_upload {File upload} hosted_url {Hosted URL} sftp {SFTP} other {Unknown source}}",
                                  description:
                                    "Upload method in the merchant Issues list. Source is an untranslated method identifier; preserve SFTP. Other is used when the source is unavailable.",
                                  values: { source: e.source },
                                }),
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 text-xs text-secondary",
                                children: H.formatDate(e.uploaded_at, { dateStyle: "medium", timeStyle: "short" }),
                              }),
                              (0, a.jsx)("td", {
                                className: "py-4 text-end",
                                children: (0, a.jsx)(x.$, {
                                  type: "button",
                                  color: "ghost",
                                  size: "compact",
                                  uniform: !0,
                                  "aria-label": H.formatMessage({
                                    id: "merchantSettings.issueList.viewDetails",
                                    defaultMessage: "View error details",
                                    description:
                                      "Accessible label for the button on each row of the merchant Issues list. Opens a right-side drawer containing that exact upload's diagnostics.",
                                  }),
                                  onClick: (t) => {
                                    ;((B.current = t.currentTarget), er(e.upload_id))
                                  },
                                  children: (0, a.jsx)(b.j1b, {}),
                                }),
                              }),
                            ],
                          },
                          e.upload_id,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, a.jsx)(Y, {
                  page: Q,
                  total: W?.length ?? 0,
                  onPageChange: (e) => {
                    ;(J(e), er(null))
                  },
                }),
              ],
            })),
          (q[29] = ev),
          (q[30] = ef),
          (q[31] = eo),
          (q[32] = en),
          (q[33] = O),
          (q[34] = H),
          (q[35] = ey),
          (q[36] = ex),
          (q[37] = eg),
          (q[38] = ed),
          (q[39] = eu),
          (q[40] = V),
          (q[41] = eS),
          (q[42] = S),
          (q[43] = v),
          (q[44] = _),
          (q[45] = w),
          (q[46] = A),
          (q[47] = M),
          (q[48] = N),
          (q[49] = T),
          (q[50] = k),
          (q[51] = R),
          (q[52] = P),
          (q[53] = C))
      } else
        ((S = q[42]),
          (v = q[43]),
          (_ = q[44]),
          (w = q[45]),
          (A = q[46]),
          (M = q[47]),
          (N = q[48]),
          (T = q[49]),
          (k = q[50]),
          (R = q[51]),
          (P = q[52]),
          (C = q[53]))
      return (
        q[108] !== O || q[109] !== em || q[110] !== _
          ? ((F =
              null != _ &&
              null != O &&
              (0, a.jsx)(
                K,
                {
                  feedId: O,
                  upload: _,
                  onClose: () => er(null),
                  onRestoreFocus: () => B.current?.focus(),
                  onAccessDenied: em,
                },
                _.upload_id,
              )),
            (q[108] = O),
            (q[109] = em),
            (q[110] = _),
            (q[111] = F))
          : (F = q[111]),
        q[112] !== S ||
        q[113] !== w ||
        q[114] !== A ||
        q[115] !== M ||
        q[116] !== N ||
        q[117] !== T ||
        q[118] !== k ||
        q[119] !== R ||
        q[120] !== P ||
        q[121] !== F ||
        q[122] !== C
          ? ((L = (0, a.jsxs)(S, { className: C, children: [w, A, M, N, T, k, R, P, F] })),
            (q[112] = S),
            (q[113] = w),
            (q[114] = A),
            (q[115] = M),
            (q[116] = N),
            (q[117] = T),
            (q[118] = k),
            (q[119] = R),
            (q[120] = P),
            (q[121] = F),
            (q[122] = C),
            (q[123] = L))
          : (L = q[123]),
        q[124] !== v || q[125] !== L
          ? ((E = (0, a.jsx)(v, { children: L })), (q[124] = v), (q[125] = L), (q[126] = E))
          : (E = q[126]),
        E
      )
    }
    function et(e) {
      return (0, a.jsx)(G, { code: e }, e)
    }
    function es(e) {
      return e.code
    }
    function ea(e) {
      return {
        value: e,
        label:
          90 === e
            ? (0, a.jsx)(u.A, {
                id: "merchantSettings.threeMonths",
                defaultMessage: "3 months",
                description: "Merchant feed issue history lookback option for the past 90 days",
              })
            : (0, a.jsx)(u.A, {
                id: "merchantSettings.lastDays",
                defaultMessage: "{days, plural, one {# day} other {# days}}",
                description: "Upload history lookback period",
                values: { days: e },
              }),
      }
    }
    let ei = [
        "AF",
        "AL",
        "DZ",
        "AS",
        "AD",
        "AO",
        "AI",
        "AQ",
        "AG",
        "AR",
        "AM",
        "AW",
        "AU",
        "AT",
        "AZ",
        "BS",
        "BH",
        "BD",
        "BB",
        "BY",
        "BE",
        "BZ",
        "BJ",
        "BM",
        "BT",
        "BO",
        "BQ",
        "BA",
        "BW",
        "BV",
        "BR",
        "IO",
        "BN",
        "BG",
        "BF",
        "BI",
        "CV",
        "KH",
        "CM",
        "CA",
        "KY",
        "CF",
        "TD",
        "CL",
        "CN",
        "CX",
        "CC",
        "CO",
        "KM",
        "CG",
        "CD",
        "CK",
        "CR",
        "HR",
        "CU",
        "CW",
        "CY",
        "CZ",
        "CI",
        "DK",
        "DJ",
        "DM",
        "DO",
        "EC",
        "EG",
        "SV",
        "GQ",
        "ER",
        "EE",
        "SZ",
        "ET",
        "FK",
        "FO",
        "FJ",
        "FI",
        "FR",
        "GF",
        "PF",
        "TF",
        "GA",
        "GM",
        "GE",
        "DE",
        "GH",
        "GI",
        "GR",
        "GL",
        "GD",
        "GP",
        "GU",
        "GT",
        "GG",
        "GN",
        "GW",
        "GY",
        "HT",
        "HM",
        "VA",
        "HN",
        "HK",
        "HU",
        "IS",
        "IN",
        "ID",
        "IR",
        "IQ",
        "IE",
        "IM",
        "IL",
        "IT",
        "JM",
        "JP",
        "JE",
        "JO",
        "KZ",
        "KE",
        "KI",
        "KP",
        "KR",
        "KW",
        "KG",
        "LA",
        "LV",
        "LB",
        "LS",
        "LR",
        "LY",
        "LI",
        "LT",
        "LU",
        "MO",
        "MG",
        "MW",
        "MY",
        "MV",
        "ML",
        "MT",
        "MH",
        "MQ",
        "MR",
        "MU",
        "YT",
        "MX",
        "FM",
        "MD",
        "MC",
        "MN",
        "ME",
        "MS",
        "MA",
        "MZ",
        "MM",
        "NA",
        "NR",
        "NP",
        "NL",
        "NC",
        "NZ",
        "NI",
        "NE",
        "NG",
        "NU",
        "NF",
        "MK",
        "MP",
        "NO",
        "OM",
        "PK",
        "PW",
        "PS",
        "PA",
        "PG",
        "PY",
        "PE",
        "PH",
        "PN",
        "PL",
        "PT",
        "PR",
        "QA",
        "RO",
        "RU",
        "RW",
        "RE",
        "BL",
        "SH",
        "KN",
        "LC",
        "MF",
        "PM",
        "VC",
        "WS",
        "SM",
        "ST",
        "SA",
        "SN",
        "RS",
        "SC",
        "SL",
        "SG",
        "SX",
        "SK",
        "SI",
        "SB",
        "SO",
        "ZA",
        "GS",
        "SS",
        "ES",
        "LK",
        "SD",
        "SR",
        "SJ",
        "SE",
        "CH",
        "SY",
        "TW",
        "TJ",
        "TZ",
        "TH",
        "TL",
        "TG",
        "TK",
        "TO",
        "TT",
        "TN",
        "TM",
        "TC",
        "TV",
        "TR",
        "UG",
        "UA",
        "AE",
        "GB",
        "US",
        "UM",
        "UY",
        "UZ",
        "VU",
        "VE",
        "VN",
        "VG",
        "VI",
        "WF",
        "EH",
        "YE",
        "ZM",
        "ZW",
        "AX",
      ],
      en = [
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLE",
        "SOS",
        "SRD",
        "SSP",
        "STN",
        "SVC",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "UYU",
        "UZS",
        "VED",
        "VES",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XCG",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW",
        "ZWG",
      ]
    var er = s("ZZgR")
    function eo(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        h,
        m,
        p,
        f,
        g,
        y,
        S,
        v,
        _,
        j,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        C,
        F,
        I = (0, i.c)(90),
        { label: U, codes: D, type: L, value: E, onChange: q, disabled: O, invalid: H, describedBy: z, onBlur: B } = e,
        G = (0, c.A)(),
        K = (0, d.useId)()
      I[0] !== G
        ? ((t = G.formatMessage({
            id: "merchantSettings.marketSelect.search",
            defaultMessage: "Search by name or code",
            description:
              "Accessible label and placeholder for searching the country or currency options in Add merchant",
          })),
          (I[0] = G),
          (I[1] = t))
        : (t = I[1])
      let V = t,
        [J, Z] = (0, d.useState)(!1),
        [$, W] = (0, d.useState)("")
      if (
        I[2] !== D ||
        I[3] !== z ||
        I[4] !== O ||
        I[5] !== K ||
        I[6] !== G.locale ||
        I[7] !== H ||
        I[8] !== U ||
        I[9] !== B ||
        I[10] !== q ||
        I[11] !== J ||
        I[12] !== $ ||
        I[13] !== V ||
        I[14] !== L ||
        I[15] !== E
      ) {
        let e,
          t,
          i,
          d = new Intl.DisplayNames([G.locale], { type: L }),
          c = D.map((e) => ({ code: e, name: d.of(e) ?? e })),
          N = $.trim().toLocaleLowerCase(G.locale)
        ;((o = c.filter((e) => {
          let { code: t, name: s } = e
          return t.toLocaleLowerCase(G.locale).includes(N) || s.toLocaleLowerCase(G.locale).includes(N)
        })),
          (f = "flex min-w-0 flex-col gap-1 text-sm"),
          I[34] !== K || I[35] !== U
            ? ((g = (0, a.jsx)("label", { htmlFor: K, className: "font-medium select-none", children: U })),
              (I[34] = K),
              (I[35] = U),
              (I[36] = g))
            : (g = I[36]),
          (r = er.A),
          (w = J),
          (A = O),
          I[37] !== B
            ? ((M = (e) => {
                ;(Z(e), e || (W(""), B?.()))
              }),
              (I[37] = B),
              (I[38] = M))
            : (M = I[38]),
          (l = "form"),
          (h = "anchor"),
          (m = "list"),
          I[39] !== E.length
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.marketSelect.choose",
                defaultMessage: "Select codes ({count} selected)",
                description:
                  "Button opening a country or currency multi-select. Count is the number of selected codes.",
                values: { count: E.length },
              })),
              (I[39] = E.length),
              (I[40] = e))
            : (e = I[40]),
          I[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(b.Aq_, { className: "text-tertiary" })), (I[41] = t))
            : (t = I[41]),
          I[42] !== z || I[43] !== O || I[44] !== K || I[45] !== H || I[46] !== e
            ? ((p = (0, a.jsxs)(x.$, {
                id: K,
                type: "button",
                className: "w-full min-w-0 justify-between",
                color: "outlineCard",
                size: "inputControl",
                radius: "small",
                disabled: O,
                "aria-invalid": H,
                "aria-describedby": z,
                children: [e, t],
              })),
              (I[42] = z),
              (I[43] = O),
              (I[44] = K),
              (I[45] = H),
              (I[46] = e),
              (I[47] = p))
            : (p = I[47]),
          (n = er.G.Root),
          (v = U),
          (_ = !0),
          I[48] !== $ || I[49] !== V
            ? ((j = (0, a.jsx)(er.G.Input, {
                presentation: "form",
                value: $,
                onValueChange: W,
                "aria-label": V,
                placeholder: V,
              })),
              (I[48] = $),
              (I[49] = V),
              (I[50] = j))
            : (j = I[50]),
          (s = er.G.List),
          (y = !0),
          I[51] !== q || I[52] !== E
            ? ((i = (e) => {
                let { code: t, name: s } = e,
                  i = (0, a.jsx)(u.A, {
                    id: "merchantSettings.marketSelect.option",
                    defaultMessage: "{name} ({code})",
                    description:
                      "Country or currency option with its localized name and untranslated code in parentheses",
                    values: { name: s, code: t },
                  })
                return (0, a.jsx)(
                  er.G.Item,
                  {
                    value: t,
                    checked: E.includes(t),
                    onSelect: () => q(E.includes(t) ? E.filter((e) => e !== t) : [...E, t]),
                    tooltipText: i,
                    tooltipOpenWhen: "trigger-overflows",
                    children: i,
                  },
                  t,
                )
              }),
              (I[51] = q),
              (I[52] = E),
              (I[53] = i))
            : (i = I[53]),
          (S = o.map(i)),
          (I[2] = D),
          (I[3] = z),
          (I[4] = O),
          (I[5] = K),
          (I[6] = G.locale),
          (I[7] = H),
          (I[8] = U),
          (I[9] = B),
          (I[10] = q),
          (I[11] = J),
          (I[12] = $),
          (I[13] = V),
          (I[14] = L),
          (I[15] = E),
          (I[16] = s),
          (I[17] = n),
          (I[18] = r),
          (I[19] = o),
          (I[20] = l),
          (I[21] = h),
          (I[22] = m),
          (I[23] = p),
          (I[24] = f),
          (I[25] = g),
          (I[26] = y),
          (I[27] = S),
          (I[28] = v),
          (I[29] = _),
          (I[30] = j),
          (I[31] = w),
          (I[32] = A),
          (I[33] = M))
      } else
        ((s = I[16]),
          (n = I[17]),
          (r = I[18]),
          (o = I[19]),
          (l = I[20]),
          (h = I[21]),
          (m = I[22]),
          (p = I[23]),
          (f = I[24]),
          (g = I[25]),
          (y = I[26]),
          (S = I[27]),
          (v = I[28]),
          (_ = I[29]),
          (j = I[30]),
          (w = I[31]),
          (A = I[32]),
          (M = I[33]))
      return (
        I[54] !== s || I[55] !== y || I[56] !== S
          ? ((N = (0, a.jsx)(s, { scrollable: y, children: S })), (I[54] = s), (I[55] = y), (I[56] = S), (I[57] = N))
          : (N = I[57]),
        I[58] !== o.length
          ? ((T =
              0 === o.length &&
              (0, a.jsx)("p", {
                role: "status",
                className: "px-row-x py-row-y text-sm text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.marketSelect.noMatches",
                  defaultMessage: "No matching code in the reference. Choose a listed option",
                  description:
                    "Empty search state when a country or currency search has no matching option. Typed text is never submitted as a code.",
                }),
              })),
            (I[58] = o.length),
            (I[59] = T))
          : (T = I[59]),
        I[60] !== n || I[61] !== N || I[62] !== T || I[63] !== v || I[64] !== _ || I[65] !== j
          ? ((k = (0, a.jsxs)(n, { label: v, scrollable: _, children: [j, N, T] })),
            (I[60] = n),
            (I[61] = N),
            (I[62] = T),
            (I[63] = v),
            (I[64] = _),
            (I[65] = j),
            (I[66] = k))
          : (k = I[66]),
        I[67] !== r ||
        I[68] !== l ||
        I[69] !== h ||
        I[70] !== m ||
        I[71] !== p ||
        I[72] !== k ||
        I[73] !== w ||
        I[74] !== A ||
        I[75] !== M
          ? ((R = (0, a.jsx)(r, {
              open: w,
              disabled: A,
              onOpenChange: M,
              presentation: l,
              contentWidth: h,
              contentMaxHeight: m,
              triggerButton: p,
              children: k,
            })),
            (I[67] = r),
            (I[68] = l),
            (I[69] = h),
            (I[70] = m),
            (I[71] = p),
            (I[72] = k),
            (I[73] = w),
            (I[74] = A),
            (I[75] = M),
            (I[76] = R))
          : (R = I[76]),
        I[77] !== O || I[78] !== G || I[79] !== B || I[80] !== q || I[81] !== E
          ? ((P = E.map((e) =>
              (0, a.jsxs)(
                x.$,
                {
                  type: "button",
                  color: "secondary",
                  size: "compact",
                  disabled: O,
                  "aria-label": G.formatMessage(
                    {
                      id: "merchantSettings.marketSelect.remove",
                      defaultMessage: "Remove {code}",
                      description:
                        "Removes one selected country or currency from the merchant form. Code is an untranslated country or currency identifier.",
                    },
                    { code: e },
                  ),
                  onClick: () => q(E.filter((t) => t !== e)),
                  onBlur: B,
                  children: [e, (0, a.jsx)(b.Gmf, {})],
                },
                e,
              ),
            )),
            (I[77] = O),
            (I[78] = G),
            (I[79] = B),
            (I[80] = q),
            (I[81] = E),
            (I[82] = P))
          : (P = I[82]),
        I[83] !== P
          ? ((C = (0, a.jsx)("div", { className: "flex flex-wrap gap-1", children: P })), (I[83] = P), (I[84] = C))
          : (C = I[84]),
        I[85] !== f || I[86] !== g || I[87] !== R || I[88] !== C
          ? ((F = (0, a.jsxs)("div", { className: f, children: [g, R, C] })),
            (I[85] = f),
            (I[86] = g),
            (I[87] = R),
            (I[88] = C),
            (I[89] = F))
          : (F = I[89]),
        F
      )
    }
    var el = s("KIKs")
    function ed(e) {
      let t = e.trim()
      if (!/^\d{4}-\d{2}-\d{2}T/.test(t)) return t
      let s = Date.parse(t)
      return Number.isNaN(s) ? t : new Date(s).toISOString().replace(/[-:.]/g, "")
    }
    function ec(e) {
      if (!e) return null
      let t = Date.parse(
        e.replace(
          /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(\d{3,6})Z$/,
          (e, t, s, a, i, n, r, o) => `${t}-${s}-${a}T${i}:${n}:${r}.${o.slice(0, 3)}Z`,
        ),
      )
      return Number.isFinite(t) ? t : null
    }
    function eu(e) {
      let t,
        s,
        n,
        o,
        l,
        h,
        f,
        g,
        y,
        b,
        S,
        v,
        _,
        j,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        C,
        F,
        L = (0, i.c)(78),
        { feedId: E } = e,
        q = (0, c.A)(),
        { userId: O, accountId: H } = (0, m.As)(),
        [z, B] = (0, d.useState)(null),
        [G, K] = (0, d.useState)("all"),
        [V, J] = (0, d.useState)(0)
      ;(L[0] !== H || L[1] !== E || L[2] !== O
        ? ((t = ["merchant-runs", O, H, E]), (L[0] = H), (L[1] = E), (L[2] = O), (L[3] = t))
        : (t = L[3]),
        L[4] !== E
          ? ((s =
              null == E
                ? U.hT
                : (e) => {
                    let { signal: t } = e
                    return p.Request.safeGet("/shopping/feeds/{feed_id}/runs", {
                      parameters: { path: { feed_id: E } },
                      signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                    })
                  }),
            (L[4] = E),
            (L[5] = s))
          : (s = L[5]),
        L[6] !== t || L[7] !== s
          ? ((n = { queryKey: t, queryFn: s, retry: !1, staleTime: 1e4, refetchInterval: 15e3 }),
            (L[6] = t),
            (L[7] = s),
            (L[8] = n))
          : (n = L[8]))
      let { data: Z, isPending: $, isFetching: W, isError: Q, refetch: ee } = (0, r.I)(n)
      ;(L[9] !== H || L[10] !== E || L[11] !== O
        ? ((o = ["merchant-run-history", O, H, E]), (L[9] = H), (L[10] = E), (L[11] = O), (L[12] = o))
        : (o = L[12]),
        L[13] !== E
          ? ((l =
              null == E
                ? U.hT
                : (e) => {
                    let { signal: t } = e
                    return p.Request.safeGet("/shopping/feeds/{feed_id}/uploads", {
                      parameters: { path: { feed_id: E }, query: { lookback_days: 90, errors_only: !1 } },
                      signal: AbortSignal.any([t, AbortSignal.timeout(45e3)]),
                    })
                  }),
            (L[13] = E),
            (L[14] = l))
          : (l = L[14]),
        L[15] !== o || L[16] !== l
          ? ((h = { queryKey: o, queryFn: l, retry: !1, staleTime: 3e4 }), (L[15] = o), (L[16] = l), (L[17] = h))
          : (h = L[17]))
      let { data: et, isPending: es, isFetching: ea, isError: ei, refetch: en } = (0, r.I)(h)
      if (
        L[18] !== Z ||
        L[19] !== E ||
        L[20] !== q ||
        L[21] !== Q ||
        L[22] !== V ||
        L[23] !== et ||
        L[24] !== z ||
        L[25] !== G
      ) {
        ;((g =
          null == Z
            ? void 0
            : [
                ...new Map(
                  [
                    ...(et?.uploads.map((e) => {
                      var t, s, a
                      let i, n, r
                      return (
                        (t = e),
                        (s = E ?? ""),
                        (a = Z.merchant_name),
                        (n = -1 === (i = t.upload_id.indexOf("_")) ? "unknown" : t.upload_id.slice(0, i)),
                        (r = t.upload_id.slice(i + 1)),
                        {
                          merchant_name: a,
                          feed_id: s,
                          feed_type: n,
                          feed_key: `${s}/${n}/${r}`,
                          run_id: r,
                          timestamp: t.uploaded_at,
                          source: t.source,
                          status: "scanning" === t.status ? "received" : t.status,
                          started_at: t.uploaded_at,
                          completed_at: t.completed_at,
                          updated_at: t.completed_at ?? t.uploaded_at,
                          dimensions: { file_count: null, failed_file_count: null },
                          metrics: {
                            records_succeeded: t.rows_accepted ?? null,
                            records_failed: t.rows_rejected ?? null,
                          },
                        }
                      )
                    }) ?? []),
                    ...Z.runs,
                  ].map(ef),
                ).values(),
              ]
                .toSorted(ep)
                .slice(0, 100)),
          (f = !!(Z?.truncated || et?.truncated)))
        let e = g?.filter((e) => "all" === G || (e.source ?? "unknown") === G),
          t = Math.min(V, Math.max(1, Math.ceil((e?.length ?? 0) / 10)) - 1)
        null == e || Q || V === t || J(t)
        let s = e?.slice(10 * t, (t + 1) * 10),
          i = s?.find((e) => e.feed_key === z),
          n = g?.find(em),
          r = i?.feed_type === "snapshot" || i?.feed_type === "incremental" ? i.feed_type : null
        ;((y =
          null != g &&
          g.length > 0 &&
          (0, a.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, a.jsx)("h3", {
                className: "sr-only",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsHeading",
                  defaultMessage: "Runs",
                  description: "Recent feed ingestion history heading",
                }),
              }),
              (0, a.jsx)(X, {
                label: q.formatMessage({
                  id: "merchantSettings.sourceFilter",
                  defaultMessage: "Filter by source",
                  description: "Accessible label for filtering a merchant's ingestion history by upload source",
                }),
                value: G,
                onChange: (e) => {
                  ;(K(e), J(0), B(null))
                },
                options: ["all", "file_upload", "hosted_url", "sftp", "unknown"].map(eh),
              }),
              e?.length === 0 &&
                (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.noLoadedSourceRuns",
                    defaultMessage: "No loaded runs for this source",
                    description:
                      "Empty state in merchant Recent runs when none of the loaded records match the selected upload source. Other history may contain runs. No placeholders.",
                  }),
                }),
              (0, a.jsx)("ol", {
                className: "flex flex-col gap-3",
                children: s?.map((e) => {
                  let t = ec(e.timestamp)
                  return (0, a.jsxs)(
                    "li",
                    {
                      className:
                        "flex flex-wrap items-center justify-between gap-3 border-t border-subtle pt-3 text-sm",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-1",
                          children: [
                            (0, a.jsx)("p", {
                              className: "font-medium",
                              children: (0, a.jsx)(u.A, { ...ex[e.status] }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-xs text-secondary",
                              children: (0, a.jsx)(u.A, { ...ex[e.source ?? "unknown"] }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-xs text-secondary",
                              children:
                                null == t
                                  ? (0, a.jsx)(u.A, { ...ex.unavailable })
                                  : q.formatDate(t, { dateStyle: "medium", timeStyle: "short" }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(x.$, {
                          color: "ghostActive",
                          size: "actionSm",
                          "aria-expanded": e.feed_key === z,
                          onClick: () => B(e.feed_key === z ? null : e.feed_key),
                          children:
                            e.feed_key === z
                              ? (0, a.jsx)(u.A, {
                                  id: "merchantSettings.hideRunDetails",
                                  defaultMessage: "Hide details",
                                  description:
                                    "Button on the expanded run in merchant Recent runs. Collapses that run's processing details and returns to the list.",
                                })
                              : (0, a.jsx)(u.A, {
                                  id: "merchantSettings.viewRunDetails",
                                  defaultMessage: "View details",
                                  description:
                                    "Button on a run in merchant Recent runs. Expands this run's status, timing, and processing metrics immediately below its row.",
                                }),
                        }),
                        e.feed_key === z &&
                          (0, a.jsx)("div", {
                            className: "w-full rounded-lg bg-surface-secondary",
                            children:
                              i && (0, a.jsx)(eg, { run: i, feedType: r, lastSuccessAt: n?.completed_at }, i.feed_key),
                          }),
                      ],
                    },
                    e.feed_key,
                  )
                }),
              }),
              (0, a.jsx)(Y, {
                page: t,
                total: e?.length ?? 0,
                onPageChange: (e) => {
                  ;(J(e), B(null))
                },
              }),
            ],
          })),
          (L[18] = Z),
          (L[19] = E),
          (L[20] = q),
          (L[21] = Q),
          (L[22] = V),
          (L[23] = et),
          (L[24] = z),
          (L[25] = G),
          (L[26] = f),
          (L[27] = g),
          (L[28] = y))
      } else ((f = L[26]), (g = L[27]), (y = L[28]))
      L[29] !== y ? ((b = (0, a.jsx)(a.Fragment, { children: y })), (L[29] = y), (L[30] = b)) : (b = L[30])
      let er = b
      L[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, a.jsx)("h3", {
            className: "sr-only",
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.runs",
              defaultMessage: "Ingestion metrics",
              description: "Merchant feed processing runs and their outcomes",
            }),
          })),
          (L[31] = S))
        : (S = L[31])
      let eo = null == E || W || ea,
        el = W || ea
      return (
        L[32] !== ee || L[33] !== en
          ? ((v = () => {
              ;(ee(), en())
            }),
            (L[32] = ee),
            (L[33] = en),
            (L[34] = v))
          : (v = L[34]),
        L[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(u.A, {
              id: "merchantSettings.refresh",
              defaultMessage: "Refresh runs",
              description: "Refreshes merchant feed run history",
            })),
            (L[35] = _))
          : (_ = L[35]),
        L[36] !== eo || L[37] !== el || L[38] !== v
          ? ((j = (0, a.jsxs)("div", {
              className: "mb-4 flex justify-end",
              children: [S, (0, a.jsx)(I, { size: "dialog", disabled: eo, loading: el, onClick: v, children: _ })],
            })),
            (L[36] = eo),
            (L[37] = el),
            (L[38] = v),
            (L[39] = j))
          : (j = L[39]),
        L[40] !== E
          ? ((w =
              null == E &&
              (0, a.jsx)("p", {
                className:
                  "rounded-lg border border-subtle bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.selectMerchantForRuns",
                  defaultMessage: "Select a merchant above to view runs",
                  description: "No merchant selected for run history",
                }),
              })),
            (L[40] = E),
            (L[41] = w))
          : (w = L[41]),
        L[42] !== E || L[43] !== $
          ? ((A =
              null != E &&
              $ &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsLoading",
                  defaultMessage: "Loading ingestion runs…",
                  description: "Feed run history loading status",
                }),
              })),
            (L[42] = E),
            (L[43] = $),
            (L[44] = A))
          : (A = L[44]),
        L[45] !== Q
          ? ((M =
              Q &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.runsStatusUnavailable",
                  defaultMessage: "Status unavailable. Runs could not be loaded. Try refreshing.",
                  description: "Failure loading feed run history; refresh retries the request",
                }),
              })),
            (L[45] = Q),
            (L[46] = M))
          : (M = L[46]),
        L[47] !== ei || L[48] !== es || L[49] !== Q || L[50] !== f || L[51] !== g?.length
          ? ((N =
              !Q &&
              !es &&
              !ei &&
              g?.length === 0 &&
              (0, a.jsx)("p", {
                className:
                  "rounded-lg border border-subtle bg-(--color-background-secondary-soft)/60 p-4 text-sm text-secondary dark:bg-(--color-background-secondary-soft)/30",
                children: f
                  ? (0, a.jsx)(u.A, {
                      id: "merchantSettings.noRunsInPartialHistory",
                      defaultMessage: "No runs found in the loaded history. Additional runs may exist.",
                      description:
                        "Empty state in merchant Recent runs after a partial history read. Unavailable history may contain runs, so this does not establish that the merchant has never submitted a feed. No placeholders.",
                    })
                  : (0, a.jsx)(u.A, {
                      id: "merchantSettings.noRecordedRuns",
                      defaultMessage: "No runs found in the loaded history",
                      description:
                        "Empty state in merchant Recent runs after a successful history read. This describes only the loaded records and makes no claim about earlier or unavailable uploads. No placeholders.",
                    }),
              })),
            (L[47] = ei),
            (L[48] = es),
            (L[49] = Q),
            (L[50] = f),
            (L[51] = g?.length),
            (L[52] = N))
          : (N = L[52]),
        L[53] !== E || L[54] !== es || L[55] !== $
          ? ((T =
              null != E &&
              es &&
              !$ &&
              (0, a.jsx)("p", {
                role: "status",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.loading",
                  defaultMessage: "Loading more run history…",
                  description:
                    "Status below Recent runs in merchant settings while the bounded upload history loads. The latest live runs may already be visible.",
                }),
              })),
            (L[53] = E),
            (L[54] = es),
            (L[55] = $),
            (L[56] = T))
          : (T = L[56]),
        L[57] !== E || L[58] !== ei
          ? ((k =
              null != E &&
              ei &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.error",
                  defaultMessage: "Older run history could not be loaded. Refresh to try again.",
                  description:
                    "Request failure below Recent runs in merchant settings. The latest live runs remain visible, but pagination cannot include unavailable older history.",
                }),
              })),
            (L[57] = E),
            (L[58] = ei),
            (L[59] = k))
          : (k = L[59]),
        L[60] !== ei || L[61] !== es
          ? ((R =
              !es &&
              !ei &&
              (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.recordedScope",
                  defaultMessage: "Up to 100 recorded runs, including uploads from the past 90 days",
                  description:
                    "Scope notice in merchant Recent runs. The list combines available recent runs and recorded uploads from the past 90 days, capped at 100 records. It does not establish that every upload was checked. No placeholders.",
                }),
              })),
            (L[60] = ei),
            (L[61] = es),
            (L[62] = R))
          : (R = L[62]),
        L[63] !== f
          ? ((P =
              f &&
              (0, a.jsx)("p", {
                role: "status",
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.history.partial",
                  defaultMessage: "Some run history could not be checked. Results may be incomplete.",
                  description:
                    "Warning in merchant Recent runs when recent-run or upload-history reads were limited or some history was unavailable. Returned records remain visible; missing history may contain additional runs. No placeholders.",
                }),
              })),
            (L[63] = f),
            (L[64] = P))
          : (P = L[64]),
        L[65] !== er ||
        L[66] !== w ||
        L[67] !== A ||
        L[68] !== M ||
        L[69] !== N ||
        L[70] !== T ||
        L[71] !== k ||
        L[72] !== R ||
        L[73] !== P
          ? ((C = (0, a.jsxs)(D.X.Content, { children: [w, A, M, N, T, k, R, P, er] })),
            (L[65] = er),
            (L[66] = w),
            (L[67] = A),
            (L[68] = M),
            (L[69] = N),
            (L[70] = T),
            (L[71] = k),
            (L[72] = R),
            (L[73] = P),
            (L[74] = C))
          : (C = L[74]),
        L[75] !== j || L[76] !== C
          ? ((F = (0, a.jsxs)(D.X, { children: [j, C] })), (L[75] = j), (L[76] = C), (L[77] = F))
          : (F = L[77]),
        F
      )
    }
    function eh(e) {
      return { value: e, label: (0, a.jsx)(u.A, { ...ex[e] }) }
    }
    function em(e) {
      return ("completed" === e.status || "completed_with_errors" === e.status) && e.completed_at
    }
    function ep(e, t) {
      return (ec(t.timestamp) ?? 0) - (ec(e.timestamp) ?? 0)
    }
    function ef(e) {
      return [e.feed_key, e]
    }
    function eg(e) {
      let t,
        s,
        n,
        o,
        l,
        d,
        h,
        f,
        g,
        x,
        y,
        b,
        S,
        v,
        _,
        j,
        w,
        A,
        M,
        N,
        T,
        k,
        R,
        P,
        C,
        F,
        D,
        L,
        E,
        q,
        O,
        H,
        z,
        B = (0, i.c)(115),
        { run: G, feedType: K, lastSuccessAt: V } = e,
        J = (0, c.A)(),
        Z = (0, el.wv)(),
        { userId: $, accountId: W } = (0, m.As)()
      if (B[0] !== W || B[1] !== K || B[2] !== G.feed_id || B[3] !== G.feed_type || B[4] !== G.run_id || B[5] !== $) {
        let e = ed(G.run_id)
        ;((n = r.I),
          B[9] !== W || B[10] !== G.feed_id || B[11] !== G.feed_type || B[12] !== G.run_id || B[13] !== $
            ? ((t = ["merchant-run-status", $, W, G.feed_id, G.run_id, G.feed_type]),
              (B[9] = W),
              (B[10] = G.feed_id),
              (B[11] = G.feed_type),
              (B[12] = G.run_id),
              (B[13] = $),
              (B[14] = t))
            : (t = B[14]),
          (s =
            null != K && /^\d{8}T\d{9}Z$/.test(e)
              ? (t) => {
                  let { signal: s } = t
                  return p.Request.safeGet("/shopping/feeds/{feed_id}/runs/{run_id}", {
                    parameters: { path: { feed_id: G.feed_id, run_id: e }, query: { feed_type: K } },
                    signal: s,
                  })
                }
              : U.hT),
          (B[0] = W),
          (B[1] = K),
          (B[2] = G.feed_id),
          (B[3] = G.feed_type),
          (B[4] = G.run_id),
          (B[5] = $),
          (B[6] = t),
          (B[7] = s),
          (B[8] = n))
      } else ((t = B[6]), (s = B[7]), (n = B[8]))
      ;(B[15] !== G.status
        ? ((o = (e) => {
            let t = e.state.data?.status ?? G.status
            return ("received" === t || "processing" === t) && 15e3
          }),
          (B[15] = G.status),
          (B[16] = o))
        : (o = B[16]),
        B[17] !== t || B[18] !== s || B[19] !== o
          ? ((l = { queryKey: t, queryFn: s, staleTime: 1e4, refetchInterval: o }),
            (B[17] = t),
            (B[18] = s),
            (B[19] = o),
            (B[20] = l))
          : (l = B[20]))
      let { data: Y, isError: Q, refetch: X } = n(l),
        ee = Y?.metrics ?? G.metrics,
        et = Y?.status_phase ?? G.status_phase ?? "unknown"
      if (
        B[21] !== J ||
        B[22] !== V ||
        B[23] !== Z ||
        B[24] !== et ||
        B[25] !== X ||
        B[26] !== G.completed_at ||
        B[27] !== G.source ||
        B[28] !== G.started_at ||
        B[29] !== G.status ||
        B[30] !== G.timestamp ||
        B[31] !== Y?.completed_at ||
        B[32] !== Y?.status ||
        B[33] !== Q
      ) {
        S = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            s,
            i,
            n = ec(G.started_at ?? G.timestamp),
            r = ec(Y?.completed_at ?? G.completed_at),
            o = ec(V)
          if (
            ((h = null != n && null != r && r >= n ? r - n : null),
            (d = null != o && Z.getTime() >= o ? Z.getTime() - o : null),
            Q)
          ) {
            let e, t, s, i
            ;(B[46] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "merchantSettings.runStatusUnavailable",
                  defaultMessage: "Status unavailable",
                  description: "Latest run status request failed",
                })),
                (B[46] = e))
              : (e = B[46]),
              B[47] !== X ? ((t = () => void X()), (B[47] = X), (B[48] = t)) : (t = B[48]),
              B[49] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, a.jsx)(u.A, {
                    id: "merchantSettings.retryRunStatus",
                    defaultMessage: "Try again",
                    description: "Retries the failed status refresh",
                  })),
                  (B[49] = s))
                : (s = B[49]),
              B[50] !== t
                ? ((i = (0, a.jsxs)("div", {
                    role: "alert",
                    children: [e, (0, a.jsx)(I, { onClick: t, children: s })],
                  })),
                  (B[50] = t),
                  (B[51] = i))
                : (i = B[51]),
              (S = i))
            break e
          }
          ;((b = "flex flex-col gap-3"),
            (x = "rounded-lg border border-subtle p-4"),
            B[52] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, a.jsx)("h3", {
                  className: "text-sm font-semibold",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.identityTiming",
                    defaultMessage: "Run identity & timing",
                    description: "Feed run identity and timing metrics heading",
                  }),
                })),
                (B[52] = y))
              : (y = B[52]),
            (v = "mt-3 grid gap-3 text-sm sm:grid-cols-2"),
            B[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.status",
                    defaultMessage: "Status",
                    description: "Current ingestion run status",
                  }),
                })),
                (B[53] = e))
              : (e = B[53]))
          let l = ex[Y?.status ?? G.status]
          ;(B[54] !== l
            ? ((_ = (0, a.jsxs)("div", { children: [e, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...l }) })] })),
              (B[54] = l),
              (B[55] = _))
            : (_ = B[55]),
            B[56] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.phase",
                    defaultMessage: "Phase",
                    description: "Current ingestion processing phase",
                  }),
                })),
                (B[56] = t))
              : (t = B[56]))
          let c = ex["unknown" === et ? "unavailable" : et]
          ;(B[57] !== c
            ? ((j = (0, a.jsxs)("div", { children: [t, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...c }) })] })),
              (B[57] = c),
              (B[58] = j))
            : (j = B[58]),
            B[59] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.source",
                    defaultMessage: "Source",
                    description: "How the feed was submitted",
                  }),
                })),
                (B[59] = s))
              : (s = B[59]))
          let m = ex[G.source ?? "unknown"]
          ;(B[60] !== m
            ? ((w = (0, a.jsxs)("div", { children: [s, (0, a.jsx)("dd", { children: (0, a.jsx)(u.A, { ...m }) })] })),
              (B[60] = m),
              (B[61] = w))
            : (w = B[61]),
            B[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsx)("dt", {
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.started",
                    defaultMessage: "Started",
                    description: "When the ingestion run began",
                  }),
                })),
                (B[62] = i))
              : (i = B[62]))
          let p =
            null == n
              ? (0, a.jsx)(u.A, { ...ex.unavailable })
              : J.formatDate(n, { dateStyle: "medium", timeStyle: "short" })
          ;(B[63] !== p
            ? ((f = (0, a.jsxs)("div", { children: [i, (0, a.jsx)("dd", { children: p })] })), (B[63] = p), (B[64] = f))
            : (f = B[64]),
            (g =
              null != r &&
              (0, a.jsxs)("div", {
                children: [
                  (0, a.jsx)("dt", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.completed",
                      defaultMessage: "Completed",
                      description: "When the ingestion run completed",
                    }),
                  }),
                  (0, a.jsx)("dd", { children: J.formatDate(r, { dateStyle: "medium", timeStyle: "short" }) }),
                ],
              })))
        }
        ;((B[21] = J),
          (B[22] = V),
          (B[23] = Z),
          (B[24] = et),
          (B[25] = X),
          (B[26] = G.completed_at),
          (B[27] = G.source),
          (B[28] = G.started_at),
          (B[29] = G.status),
          (B[30] = G.timestamp),
          (B[31] = Y?.completed_at),
          (B[32] = Y?.status),
          (B[33] = Q),
          (B[34] = d),
          (B[35] = h),
          (B[36] = f),
          (B[37] = g),
          (B[38] = x),
          (B[39] = y),
          (B[40] = b),
          (B[41] = S),
          (B[42] = v),
          (B[43] = _),
          (B[44] = j),
          (B[45] = w))
      } else
        ((d = B[34]),
          (h = B[35]),
          (f = B[36]),
          (g = B[37]),
          (x = B[38]),
          (y = B[39]),
          (b = B[40]),
          (S = B[41]),
          (v = B[42]),
          (_ = B[43]),
          (j = B[44]),
          (w = B[45]))
      if (S !== Symbol.for("react.early_return_sentinel")) return S
      ;(B[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, a.jsx)("dt", {
            children: (0, a.jsx)(u.A, {
              id: "merchantSettings.latency",
              defaultMessage: "End-to-end latency",
              description: "Elapsed time between the selected merchant ingestion run starting and completing",
            }),
          })),
          (B[65] = A))
        : (A = B[65]),
        B[66] !== J || B[67] !== h
          ? ((M =
              null == h
                ? (0, a.jsx)(u.A, { ...ex.unavailable })
                : J.formatNumber(h / 1e3, { style: "unit", unit: "second", maximumFractionDigits: 1 })),
            (B[66] = J),
            (B[67] = h),
            (B[68] = M))
          : (M = B[68]),
        B[69] !== M
          ? ((N = (0, a.jsxs)("div", { children: [A, (0, a.jsx)("dd", { children: M })] })), (B[69] = M), (B[70] = N))
          : (N = B[70]),
        B[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)("dt", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.freshness",
                defaultMessage: "Freshness since last success",
                description:
                  "Time since the most recent completed or completed-with-errors ingestion for this merchant, across all sources",
              }),
            })),
            (B[71] = T))
          : (T = B[71]),
        B[72] !== d || B[73] !== J
          ? ((k =
              null == d
                ? (0, a.jsx)(u.A, { ...ex.unavailable })
                : J.formatNumber(d / 1e3, { style: "unit", unit: "second", maximumFractionDigits: 0 })),
            (B[72] = d),
            (B[73] = J),
            (B[74] = k))
          : (k = B[74]),
        B[75] !== k
          ? ((R = (0, a.jsxs)("div", { children: [T, (0, a.jsx)("dd", { children: k })] })), (B[75] = k), (B[76] = R))
          : (R = B[76]),
        B[77] !== f ||
        B[78] !== g ||
        B[79] !== N ||
        B[80] !== R ||
        B[81] !== v ||
        B[82] !== _ ||
        B[83] !== j ||
        B[84] !== w
          ? ((P = (0, a.jsxs)("dl", { className: v, children: [_, j, w, f, g, N, R] })),
            (B[77] = f),
            (B[78] = g),
            (B[79] = N),
            (B[80] = R),
            (B[81] = v),
            (B[82] = _),
            (B[83] = j),
            (B[84] = w),
            (B[85] = P))
          : (P = B[85]),
        B[86] !== x || B[87] !== y || B[88] !== P
          ? ((C = (0, a.jsxs)("div", { className: x, children: [y, P] })),
            (B[86] = x),
            (B[87] = y),
            (B[88] = P),
            (B[89] = C))
          : (C = B[89]))
      let es = Y?.status_message ?? G.status_message ?? G.message ?? G.detail
      return (
        B[90] !== es
          ? ((F = (0, a.jsx)("p", { className: "text-sm text-secondary", children: es })), (B[90] = es), (B[91] = F))
          : (F = B[91]),
        B[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, a.jsx)("summary", {
              className: "cursor-interaction text-sm font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.runIdentifiers",
                defaultMessage: "Identifiers",
                description: "Expands feed identifiers and processing details",
              }),
            })),
            (B[92] = D))
          : (D = B[92]),
        B[93] !== G.detail ||
        B[94] !== G.dimensions ||
        B[95] !== G.feed_id ||
        B[96] !== G.feed_key ||
        B[97] !== G.run_id ||
        B[98] !== G.temporal ||
        B[99] !== Y?.detail ||
        B[100] !== Y?.temporal
          ? ((L = JSON.stringify(
              {
                feed_id: G.feed_id,
                run_id: G.run_id,
                feed_key: G.feed_key,
                dimensions: G.dimensions,
                temporal: Y?.temporal ?? G.temporal,
                detail: Y?.detail ?? G.detail,
              },
              null,
              2,
            )),
            (B[93] = G.detail),
            (B[94] = G.dimensions),
            (B[95] = G.feed_id),
            (B[96] = G.feed_key),
            (B[97] = G.run_id),
            (B[98] = G.temporal),
            (B[99] = Y?.detail),
            (B[100] = Y?.temporal),
            (B[101] = L))
          : (L = B[101]),
        B[102] !== L
          ? ((E = (0, a.jsxs)("details", {
              className: "rounded-lg border border-subtle p-4",
              children: [D, (0, a.jsx)("pre", { className: "overflow-x-auto text-sm", children: L })],
            })),
            (B[102] = L),
            (B[103] = E))
          : (E = B[103]),
        B[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, a.jsx)("h3", {
              className: "text-sm font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.volumeOutcome",
                defaultMessage: "Volume & outcome",
                description: "Feed record processing metrics heading",
              }),
            })),
            (B[104] = q))
          : (q = B[104]),
        B[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = [
              "records_received",
              "records_processed",
              "records_succeeded",
              "records_failed",
              "error_rate",
              "retry_count",
            ]),
            (B[105] = O))
          : (O = B[105]),
        B[106] !== J || B[107] !== ee
          ? ((H = (0, a.jsxs)("div", {
              className: "rounded-lg border border-subtle p-4",
              children: [
                q,
                (0, a.jsx)("dl", {
                  className: "mt-3 grid gap-3 text-sm sm:grid-cols-2",
                  children: O.map((e) => {
                    let t = ex[e],
                      s = ee?.[e]
                    if ("error_rate" === e && null == s) {
                      let e = ee?.records_processed ?? ee?.records_received
                      s = e && e > 0 && ee?.records_failed != null ? ee.records_failed / e : null
                    }
                    return (0, a.jsxs)(
                      "div",
                      {
                        children: [
                          (0, a.jsx)("dt", { children: (0, a.jsx)(u.A, { ...t }) }),
                          (0, a.jsx)("dd", {
                            children:
                              null != s && Number.isFinite(s)
                                ? J.formatNumber(
                                    s,
                                    "error_rate" === e ? { style: "percent", maximumFractionDigits: 1 } : void 0,
                                  )
                                : (0, a.jsx)(u.A, {
                                    id: "merchantSettings.unavailable",
                                    defaultMessage: "Unavailable",
                                    description: "An ingestion metric is not available",
                                  }),
                          }),
                        ],
                      },
                      e,
                    )
                  }),
                }),
              ],
            })),
            (B[106] = J),
            (B[107] = ee),
            (B[108] = H))
          : (H = B[108]),
        B[109] !== b || B[110] !== C || B[111] !== F || B[112] !== E || B[113] !== H
          ? ((z = (0, a.jsxs)("div", { className: b, children: [C, F, E, H] })),
            (B[109] = b),
            (B[110] = C),
            (B[111] = F),
            (B[112] = E),
            (B[113] = H),
            (B[114] = z))
          : (z = B[114]),
        z
      )
    }
    let ex = (0, L.YK)({
      received: {
        id: "merchantSettings.runReceived",
        defaultMessage: "Received",
        description: "Feed run status when a submission has been received but processing has not started",
      },
      processing: {
        id: "merchantSettings.runProcessing",
        defaultMessage: "Processing",
        description: "Feed run status or phase while products are being processed",
      },
      completed: {
        id: "merchantSettings.runCompleted",
        defaultMessage: "Completed",
        description: "Feed run status after processing completed successfully",
      },
      completed_with_errors: {
        id: "merchantSettings.runCompletedWithErrors",
        defaultMessage: "Completed with errors",
        description: "Feed run status when processing finished but some records failed",
      },
      skipped: {
        id: "merchantSettings.runSkipped",
        defaultMessage: "Skipped",
        description: "Feed run status when the submission was skipped",
      },
      failed: {
        id: "merchantSettings.runFailed",
        defaultMessage: "Failed",
        description: "Feed run status when ingestion or processing failed",
      },
      ingesting: {
        id: "merchantSettings.runIngesting",
        defaultMessage: "Ingesting",
        description: "Feed run phase while the submitted feed is being ingested",
      },
      ingestion_error: {
        id: "merchantSettings.runIngestionError",
        defaultMessage: "Ingestion error",
        description: "Feed run phase indicating an error ingesting the submitted feed",
      },
      processing_error: {
        id: "merchantSettings.runProcessingError",
        defaultMessage: "Processing error",
        description: "Feed run phase indicating an error processing the ingested products",
      },
      success: {
        id: "merchantSettings.runSuccess",
        defaultMessage: "Success",
        description: "Feed run phase after ingestion and processing finish successfully",
      },
      records_received: {
        id: "merchantSettings.receivedRows",
        defaultMessage: "Records received",
        description: "Number of feed records received",
      },
      records_processed: {
        id: "merchantSettings.processedRows",
        defaultMessage: "Records processed",
        description: "Number of feed records processed",
      },
      records_succeeded: {
        id: "merchantSettings.succeededRows",
        defaultMessage: "Records succeeded",
        description: "Number of successfully processed feed records",
      },
      records_failed: {
        id: "merchantSettings.failedRows",
        defaultMessage: "Records failed",
        description: "Number of feed records that failed processing",
      },
      error_rate: {
        id: "merchantSettings.errorRate",
        defaultMessage: "Error rate",
        description: "Fraction of feed records that failed processing",
      },
      retry_count: {
        id: "merchantSettings.retryCount",
        defaultMessage: "Retry count",
        description: "Number of ingestion retries",
      },
      all: {
        id: "merchantSettings.allSources",
        defaultMessage: "All sources",
        description: "Ingestion history filter showing every submission source",
      },
      file_upload: {
        id: "merchantSettings.fileSource",
        defaultMessage: "Uploaded file",
        description: "Ingestion history source for files uploaded through merchant settings",
      },
      hosted_url: {
        id: "merchantSettings.urlSource",
        defaultMessage: "Hosted URL",
        description: "Ingestion history source for feeds fetched from a hosted URL",
      },
      sftp: {
        id: "merchantSettings.sftpSource",
        defaultMessage: "SFTP",
        description: "Ingestion history source for feeds uploaded over SFTP",
      },
      unknown: {
        id: "merchantSettings.unknownSource",
        defaultMessage: "Unknown source",
        description: "Ingestion history source when the server does not provide one",
      },
      unavailable: {
        id: "merchantSettings.unavailable",
        defaultMessage: "Unavailable",
        description: "An ingestion metric is not available",
      },
    })
    var ey = s("uuN8"),
      eb = s("EShr"),
      eS = s("aepO")
    function ev(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        d = (0, i.c)(18),
        { title: c, description: u, children: h, compact: m, activity: p } = e,
        f = void 0 !== m && m,
        g = void 0 !== p && p,
        x = null == u && "mb-6",
        y = null != u && (f ? "mb-3" : "mb-4")
      ;(d[0] !== x || d[1] !== y ? ((t = (0, F.A)(x, y)), (d[0] = x), (d[1] = y), (d[2] = t)) : (t = d[2]),
        d[3] !== c
          ? ((s = (0, a.jsx)("h2", { className: "text-lg font-semibold", children: c })), (d[3] = c), (d[4] = s))
          : (s = d[4]),
        d[5] !== g || d[6] !== u
          ? ((n =
              null != u &&
              (0, a.jsx)("p", {
                className: g ? "mt-1 text-sm text-secondary" : "mt-2 text-sm text-secondary",
                children: u,
              })),
            (d[5] = g),
            (d[6] = u),
            (d[7] = n))
          : (n = d[7]),
        d[8] !== t || d[9] !== s || d[10] !== n
          ? ((r = (0, a.jsxs)("div", { className: t, children: [s, n] })),
            (d[8] = t),
            (d[9] = s),
            (d[10] = n),
            (d[11] = r))
          : (r = d[11]))
      let b = f ? "flex flex-col gap-3" : "flex flex-col gap-4"
      return (
        d[12] !== h || d[13] !== b
          ? ((o = (0, a.jsx)("div", { className: b, children: h })), (d[12] = h), (d[13] = b), (d[14] = o))
          : (o = d[14]),
        d[15] !== o || d[16] !== r
          ? ((l = (0, a.jsxs)("section", {
              className: "min-w-0 rounded-lg border border-subtle bg-surface-card p-5 shadow-sm",
              children: [r, o],
            })),
            (d[15] = o),
            (d[16] = r),
            (d[17] = l))
          : (l = d[17]),
        l
      )
    }
    function e_(e) {
      let t,
        s,
        n,
        r = (0, i.c)(5),
        { feedId: o, configured: l } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(u.A, {
              id: "merchantSettings.sftp",
              defaultMessage: "SFTP",
              description: "Merchant SFTP section heading",
            })),
            (s = (0, a.jsx)(u.A, {
              id: "merchantSettings.sftpDescription",
              defaultMessage:
                "Use SFTP for large feeds or multiple files. Connection details appear once access is enabled.",
              description:
                "Description below the SFTP heading in Product feed settings for merchants uploading large feeds or splitting a feed across multiple files. Connection details become available after SFTP access is enabled. Keep SFTP literal.",
            })),
            (r[0] = t),
            (r[1] = s))
          : ((t = r[0]), (s = r[1])),
        r[2] !== l || r[3] !== o
          ? ((n = (0, a.jsx)(ev, {
              compact: !0,
              title: t,
              description: s,
              children: (0, a.jsx)(ej, { feedId: o, configured: l }),
            })),
            (r[2] = l),
            (r[3] = o),
            (r[4] = n))
          : (n = r[4]),
        n
      )
    }
    function ej(e) {
      let t,
        s,
        n,
        l,
        h,
        f,
        g,
        x,
        y,
        S,
        _,
        w,
        A,
        M,
        N,
        T,
        P,
        C,
        F,
        D,
        L,
        E,
        q,
        O,
        H,
        z = (0, i.c)(88),
        { feedId: B, configured: G } = e,
        K = (0, c.A)(),
        { accountId: V, userId: J } = (0, m.As)()
      z[0] !== V || z[1] !== B || z[2] !== J
        ? ((t = { accountId: V, userId: J, feedId: B }), (z[0] = V), (z[1] = B), (z[2] = J), (z[3] = t))
        : (t = z[3])
      let Z = t,
        [$, W] = (0, d.useState)(!1),
        [Y, Q] = (0, d.useState)(""),
        [X, ee] = (0, d.useState)(null),
        [et, es] = (0, d.useState)("idle")
      ;(z[4] !== V || z[5] !== B || z[6] !== J
        ? ((s = ["merchant-sftp", J, V, B]), (z[4] = V), (z[5] = B), (z[6] = J), (z[7] = s))
        : (s = z[7]),
        z[8] !== B || z[9] !== Z
          ? ((n =
              null == B
                ? U.hT
                : (e) => {
                    let { signal: t } = e
                    return p.Request.safeGet("/shopping/feeds/{feed_id}/sftp-access", {
                      parameters: { path: { feed_id: B } },
                      signal: t,
                      expectedErrorStatuses: [403],
                    }).catch(R(Z, "sftp_details", t))
                  }),
            (z[8] = B),
            (z[9] = Z),
            (z[10] = n))
          : (n = z[10]),
        z[11] !== G || z[12] !== s || z[13] !== n
          ? ((l = { queryKey: s, queryFn: n, enabled: G, staleTime: 3e4, gcTime: 0, retry: !1 }),
            (z[11] = G),
            (z[12] = s),
            (z[13] = n),
            (z[14] = l))
          : (l = z[14]))
      let { data: ea, isFetching: ei, error: en, refetch: er } = (0, r.I)(l)
      z[15] !== B
        ? ((h = {
            mutationFn: () => {
              if (null == B) throw Error("No merchant selected")
              return p.Request.safePost("/shopping/feeds/{feed_id}/sftp-access/password-reset", {
                parameters: { path: { feed_id: B } },
              })
            },
            gcTime: 0,
          }),
          (z[15] = B),
          (z[16] = h))
        : (h = z[16])
      let eo = (0, o.n)(h)
      z[17] !== B || z[18] !== Y
        ? ((f = {
            mutationFn: () => {
              if (null == B) throw Error("No merchant selected")
              return p.Request.safePost("/shopping/feeds/{feed_id}/sftp-access/ssh-key", {
                parameters: { path: { feed_id: B } },
                requestBody: { ssh_public_key: Y.trim() },
              })
            },
          }),
          (z[17] = B),
          (z[18] = Y),
          (z[19] = f))
        : (f = z[19])
      let el = (0, o.n)(f),
        ed = eo.error ?? el.error ?? en,
        ec = ed instanceof j.fk && 403 === ed.status
      z[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = async function (e) {
            let t = await (0, eS.E)(e)
            return (es(t ? "copied" : "failed"), t)
          }),
          (z[20] = g))
        : (g = z[20])
      let eu = g
      ;(z[21] !== ea ||
      z[22] !== ec ||
      z[23] !== en ||
      z[24] !== B ||
      z[25] !== K ||
      z[26] !== ei ||
      z[27] !== er ||
      z[28] !== ed
        ? ((x =
            (ei || null != ed || null != ea || null == B) &&
            (0, a.jsxs)("div", {
              className: "rounded-lg border border-subtle px-4 py-2 text-sm",
              children: [
                null == B &&
                  (0, a.jsx)("p", {
                    className: "py-3 text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpSelection",
                      defaultMessage: "Select a merchant above to load SFTP details.",
                      description: "No merchant selected for SFTP",
                    }),
                  }),
                null != B &&
                  ei &&
                  (0, a.jsx)("p", {
                    className: "py-3 text-secondary",
                    role: "status",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpLoading",
                      defaultMessage: "Loading SFTP details…",
                      description: "SFTP details loading status",
                    }),
                  }),
                null != ed &&
                  (0, a.jsxs)("div", {
                    role: "alert",
                    children: [
                      ec
                        ? (0, a.jsx)(u.A, {
                            id: "merchantSettings.sftpDenied",
                            defaultMessage: "A workspace owner or admin must manage SFTP access",
                            description: "Explains why a non-admin cannot see or change SFTP credentials",
                          })
                        : (0, a.jsx)(u.A, {
                            id: "merchantSettings.sftpUnavailable",
                            defaultMessage:
                              "SFTP is currently unavailable. Your merchant is saved, and you can still upload files or use a hosted URL. Try again later.",
                            description:
                              "Error in the SFTP section of Merchant Settings when setup or loading connection details fails. Reassures merchants that their saved merchant and other upload methods are unaffected, and suggests retrying SFTP later. Plain text with no placeholders.",
                          }),
                      !ec &&
                        null != en &&
                        (0, a.jsx)(I, {
                          onClick: () => void er(),
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.retrySftpDetails",
                            defaultMessage: "Try again",
                            description: "Retries loading SFTP details",
                          }),
                        }),
                    ],
                  }),
                null != ea &&
                  null == en &&
                  (0, a.jsx)("dl", {
                    className: "divide-y divide-border-subtle",
                    children: ["host", "username", "root_path", "port"].map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "flex items-center justify-between gap-4 py-3",
                          children: [
                            (0, a.jsx)("dt", { className: "text-secondary", children: (0, a.jsx)(u.A, { ...eA[e] }) }),
                            (0, a.jsxs)("dd", {
                              className: "flex min-w-0 items-center gap-3",
                              children: [
                                (0, a.jsx)("span", { className: "font-medium break-all select-text", children: ea[e] }),
                                "port" !== e &&
                                  (0, a.jsx)(ey.i, {
                                    iconOnly: !0,
                                    showTooltip: !1,
                                    ariaLabel: K.formatMessage({
                                      id: "merchantSettings.copy",
                                      defaultMessage: "Copy",
                                      description: "Copies the adjacent SFTP connection value",
                                    }),
                                    onCopy: () => eu(ea[e]),
                                    icons: { copy: (0, a.jsx)(b.yDG, {}), copied: (0, a.jsx)(b.ALZ, {}) },
                                    renderButton: ew,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
              ],
            })),
          (z[21] = ea),
          (z[22] = ec),
          (z[23] = en),
          (z[24] = B),
          (z[25] = K),
          (z[26] = ei),
          (z[27] = er),
          (z[28] = ed),
          (z[29] = x))
        : (x = z[29]),
        z[30] !== ea || z[31] !== en
          ? ((y =
              null != ea &&
              null == en &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpIsolation",
                      defaultMessage:
                        "Access is scoped to your dedicated SFTP container. You can only read or write files within it.",
                      description: "SFTP directory isolation guidance",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpGuidance",
                      defaultMessage: "Upload files to your SFTP root folder, without subfolders",
                      description:
                        "Short instruction in the SFTP section of Product feed settings. Merchants must place files directly in the root of their assigned SFTP storage, not in nested folders. Keep SFTP literal.",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-2 rounded-lg border border-subtle bg-(--color-background-secondary-soft)/40 px-3 py-2 text-xs",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "font-semibold",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sftpSteps",
                          defaultMessage: "Connect in three steps",
                          description: "SFTP connection instructions heading",
                        }),
                      }),
                      (0, a.jsxs)("ol", {
                        className: "flex list-decimal flex-col gap-1 ps-4 text-secondary",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep1",
                              defaultMessage: "Copy the host, username, and root path shown here",
                              description: "First SFTP setup step",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep2",
                              defaultMessage: "Generate a password here, then save it in your SFTP client",
                              description: "Second SFTP setup step",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.sftpStep3",
                              defaultMessage: "Connect and upload to the root path using a flat folder structure",
                              description: "Third SFTP setup step",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })),
            (z[30] = ea),
            (z[31] = en),
            (z[32] = y))
          : (y = z[32]),
        z[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)("h4", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.authentication",
                defaultMessage: "SFTP login method",
                description: "SFTP login method selection in Merchant Settings",
              }),
            })),
            (z[33] = S))
          : (S = z[33]),
        z[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.authenticationHelp",
                defaultMessage: "Choose how this merchant will authenticate when uploading feed files",
                description: "Explains the authentication choice in the SFTP setup section",
              }),
            })),
            (z[34] = _))
          : (_ = z[34]))
      let eh = $ ? "ssh" : "password"
      ;(z[35] === Symbol.for("react.memo_cache_sentinel") ? ((w = (e) => W("ssh" === e)), (z[35] = w)) : (w = z[35]),
        z[36] !== K
          ? ((A = K.formatMessage({
              id: "merchantSettings.authenticationChoice",
              defaultMessage: "SFTP login method",
              description: "SFTP authentication method choice",
            })),
            (z[36] = K),
            (z[37] = A))
          : (A = z[37]))
      let em = eo.isPending || el.isPending
      ;(z[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (0, a.jsx)(u.A, {
            id: "merchantSettings.passwordMethod",
            defaultMessage: "Username/password",
            description: "Password authentication choice",
          })),
          (z[38] = M))
        : (M = z[38]),
        z[39] !== em ? ((N = { id: "password", disabled: em, label: M }), (z[39] = em), (z[40] = N)) : (N = z[40]))
      let ep = eo.isPending || el.isPending
      return (
        z[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, a.jsx)(u.A, {
              id: "merchantSettings.sshMethod",
              defaultMessage: "SSH key",
              description: "SSH authentication choice",
            })),
            (z[41] = T))
          : (T = z[41]),
        z[42] !== ep ? ((P = { id: "ssh", disabled: ep, label: T }), (z[42] = ep), (z[43] = P)) : (P = z[43]),
        z[44] !== N || z[45] !== P ? ((C = [N, P]), (z[44] = N), (z[45] = P), (z[46] = C)) : (C = z[46]),
        z[47] !== eh || z[48] !== A || z[49] !== C
          ? ((F = (0, a.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                S,
                _,
                (0, a.jsx)(eb.T, {
                  size: "dialog",
                  selectedColor: "primary",
                  unselectedColor: "ghostActive",
                  selectedId: eh,
                  onSelect: w,
                  ariaLabel: A,
                  options: C,
                }),
              ],
            })),
            (z[47] = eh),
            (z[48] = A),
            (z[49] = C),
            (z[50] = F))
          : (F = z[50]),
        z[51] !== ec ||
        z[52] !== B ||
        z[53] !== K ||
        z[54] !== ei ||
        z[55] !== X ||
        z[56] !== er ||
        z[57] !== eo ||
        z[58] !== Z ||
        z[59] !== $ ||
        z[60] !== el
          ? ((D =
              !$ &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.sftpPasswordNote",
                      defaultMessage: "Passwords are shown once when generated. Copy them immediately.",
                      description: "SFTP password visibility guidance",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-1 flex flex-col items-start gap-4 border-t border-subtle pt-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-sm font-semibold",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.passwordTitle",
                              defaultMessage: "Generate password",
                              description: "Password generation heading",
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "text-xs text-secondary",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.passwordDescription",
                              defaultMessage: "Generate a password for SFTP access. You will only see it once.",
                              description: "Effect of switching SFTP to password authentication",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(I, {
                        size: "dialog",
                        loading: eo.isPending,
                        disabled: null == B || ei || ec || el.isPending,
                        onClick: () => {
                          ;(ee(null),
                            es("idle"),
                            el.reset(),
                            eo.mutate(void 0, {
                              onError: (e) => k(Z, "sftp_password", e),
                              onSuccess: (e) => {
                                ;(ee(e.password), er())
                              },
                            }))
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.resetPassword",
                          defaultMessage: "Generate password",
                          description: "Replaces the current SFTP password and displays the new one once",
                        }),
                      }),
                      null != X &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, a.jsx)("code", { className: "break-all select-text", children: X }),
                            (0, a.jsx)(ey.i, {
                              variant: "secondaryAction",
                              ariaLabel: K.formatMessage(eA.copyPassword),
                              buttonText: K.formatMessage(eA.copyPassword),
                              onCopy: () => eu(X),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              })),
            (z[51] = ec),
            (z[52] = B),
            (z[53] = K),
            (z[54] = ei),
            (z[55] = X),
            (z[56] = er),
            (z[57] = eo),
            (z[58] = Z),
            (z[59] = $),
            (z[60] = el),
            (z[61] = D))
          : (D = z[61]),
        z[62] !== ec ||
        z[63] !== B ||
        z[64] !== K ||
        z[65] !== ei ||
        z[66] !== Y ||
        z[67] !== er ||
        z[68] !== eo ||
        z[69] !== Z ||
        z[70] !== $ ||
        z[71] !== el
          ? ((L =
              $ &&
              (0, a.jsxs)("form", {
                className: "mt-1 flex flex-col items-start gap-3 border-t border-subtle pt-4",
                onSubmit: (e) => {
                  ;(e.preventDefault(),
                    eo.reset(),
                    el.mutate(void 0, {
                      onError: (e) => k(Z, "sftp_ssh_key", e),
                      onSuccess: () => {
                        ;(ee(null), Q(""), er())
                      },
                    }))
                },
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-sm font-semibold",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysTitle",
                          defaultMessage: "Set SSH public keys",
                          description:
                            "Heading in merchant SFTP settings for replacing the public keys allowed to authenticate",
                        }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysReplacementDescription",
                          defaultMessage:
                            "Paste up to 10 OpenSSH public keys, one per line. Saving replaces all existing keys and disables password authentication. Include every key that should retain access.",
                          description:
                            "Merchant SFTP settings warning that saving up to ten newline-separated public keys replaces every existing key and disables password authentication",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("label", {
                    className: "flex w-full flex-col gap-1 text-sm font-medium",
                    children: [
                      (0, a.jsx)(u.A, {
                        id: "merchantSettings.sshKeys",
                        defaultMessage: "SSH public keys",
                        description:
                          "Label for the merchant SFTP authentication textarea accepting up to ten OpenSSH public keys, one per line",
                      }),
                      (0, a.jsx)(v.TM, {
                        variant: "code",
                        name: "sftp-public-key",
                        disabled: null == B || ei || ec || el.isPending || eo.isPending,
                        placeholder: K.formatMessage({
                          id: "merchantSettings.sshKeyPlaceholder",
                          defaultMessage: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQ...",
                          description:
                            "Example OpenSSH public key in the empty SSH key input; preserve the ssh-rsa key type and the example base64 prefix",
                        }),
                        value: Y,
                        required: !0,
                        onChange: (e) => {
                          ;(Q(e.target.value), el.reset())
                        },
                      }),
                      (0, a.jsx)("p", {
                        className: "mt-1.5 text-xs font-normal text-secondary",
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.sshKeysHelp",
                          defaultMessage:
                            "Paste up to 10 public keys, one per line. Keep the matching private keys in your SFTP clients.",
                          description:
                            "Instructions below the merchant SFTP public keys textarea; only public keys are submitted, and private keys remain in the merchant's SFTP clients",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(I, {
                    type: "submit",
                    size: "dialog",
                    loading: el.isPending,
                    disabled: null == B || ei || ec || !Y.trim() || eo.isPending,
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.replaceKeys",
                      defaultMessage: "Replace SSH keys",
                      description:
                        "Button in merchant SFTP settings that replaces all authorized public keys with the submitted keys and disables password authentication",
                    }),
                  }),
                ],
              })),
            (z[62] = ec),
            (z[63] = B),
            (z[64] = K),
            (z[65] = ei),
            (z[66] = Y),
            (z[67] = er),
            (z[68] = eo),
            (z[69] = Z),
            (z[70] = $),
            (z[71] = el),
            (z[72] = L))
          : (L = z[72]),
        z[73] !== el.isSuccess
          ? ((E =
              el.isSuccess &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.keysSaved",
                  defaultMessage: "SSH public keys saved",
                  description:
                    "Confirmation in merchant SFTP settings after the submitted public keys have replaced the previously authorized keys",
                }),
              })),
            (z[73] = el.isSuccess),
            (z[74] = E))
          : (E = z[74]),
        z[75] !== et
          ? ((q =
              "copied" === et &&
              (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.copied",
                  defaultMessage: "Copied",
                  description: "Clipboard copy succeeded",
                }),
              })),
            (z[75] = et),
            (z[76] = q))
          : (q = z[76]),
        z[77] !== et
          ? ((O =
              "failed" === et &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.copyError",
                  defaultMessage: "Couldn’t copy. Select and copy the value manually.",
                  description: "Clipboard access failed",
                }),
              })),
            (z[77] = et),
            (z[78] = O))
          : (O = z[78]),
        z[79] !== F ||
        z[80] !== D ||
        z[81] !== L ||
        z[82] !== E ||
        z[83] !== q ||
        z[84] !== O ||
        z[85] !== x ||
        z[86] !== y
          ? ((H = (0, a.jsxs)(a.Fragment, { children: [x, y, F, D, L, E, q, O] })),
            (z[79] = F),
            (z[80] = D),
            (z[81] = L),
            (z[82] = E),
            (z[83] = q),
            (z[84] = O),
            (z[85] = x),
            (z[86] = y),
            (z[87] = H))
          : (H = z[87]),
        H
      )
    }
    function ew(e) {
      return (0, a.jsx)(x.$, { ...e, color: "ghostActive", size: "iconCircleSm" })
    }
    let eA = (0, L.YK)({
      copyPassword: {
        id: "merchantSettings.copyPassword",
        defaultMessage: "Copy password",
        description: "Copies the newly generated SFTP password",
      },
      host: { id: "merchantSettings.host", defaultMessage: "Host", description: "SFTP server hostname" },
      username: { id: "merchantSettings.username", defaultMessage: "Username", description: "SFTP login username" },
      root_path: { id: "merchantSettings.root", defaultMessage: "Upload path", description: "SFTP upload directory" },
      port: { id: "merchantSettings.port", defaultMessage: "Port", description: "SFTP connection port" },
    })
    var eM = s("vn1h"),
      eN = s("djbx"),
      eT = s("OXR4"),
      ek = s("ASxG"),
      eR = s("GlQn")
    let eP = ek.object({
      field: ek.string().optional(),
      issue: ek.string().optional(),
      item_countries: ek.array(ek.string()).optional(),
      supported_countries: ek.array(ek.string()).optional(),
      actual_currency: ek.string().nullable().optional(),
      expected_currency: ek.string().optional(),
      expected_currencies: ek.array(ek.string()).optional(),
    })
    function eC(e) {
      let t,
        s = (0, i.c)(4),
        { detail: n } = e
      if (s[0] !== n) {
        t = Symbol.for("react.early_return_sentinel")
        e: {
          let e = eP.safeParse(n)
          if (!e.success) {
            t = null
            break e
          }
          let i = e.data
          if (null != i.item_countries && null != i.supported_countries) {
            t = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validation.countryComparison",
                defaultMessage: "Product countries: {actual}. Countries allowed for this feed: {expected}",
                description:
                  "Country filter evidence for a sampled product. Actual and expected are comma-separated ISO country codes. These are parsed values, not a claim that the source file is wrong.",
                values: { actual: i.item_countries.join(", "), expected: i.supported_countries.join(", ") },
              }),
            })
            break e
          }
          let r = i.expected_currencies ?? (null == i.expected_currency ? [] : [i.expected_currency])
          if (null != i.actual_currency && r.length > 0) {
            let e,
              n = { actual: i.actual_currency, expected: r.join(", ") }
            ;(s[2] !== n
              ? ((e = (0, a.jsx)("p", {
                  className: "text-secondary",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.validation.currencyComparison",
                    defaultMessage: "Product currency: {actual}. Currencies allowed for this feed: {expected}",
                    description:
                      "Currency filter evidence for a sampled product. Actual and expected are ISO currency codes. Compare the source value with the feed configuration before assigning a fix.",
                    values: n,
                  }),
                })),
                (s[2] = n),
                (s[3] = e))
              : (e = s[3]),
              (t = e))
            break e
          }
        }
        ;((s[0] = n), (s[1] = t))
      } else t = s[1]
      return t !== Symbol.for("react.early_return_sentinel") ? t : null
    }
    function eF(e) {
      let t,
        s,
        n,
        r,
        o,
        l = (0, i.c)(15),
        { report: d } = e,
        c = d.eligible_sampled_rows ?? 0,
        h = d.filtered_sampled_rows ?? 0
      return (
        l[0] !== d.supported_countries
          ? ((t = d.supported_countries.join(", ")), (l[0] = d.supported_countries), (l[1] = t))
          : (t = l[1]),
        l[2] !== t
          ? ((s = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validation.configuredMarkets",
                defaultMessage: "Countries allowed for this feed: {countries}",
                description:
                  "The effective country allowlist used by validation, shown to help merchants compare it with their product targeting",
                values: { countries: t },
              }),
            })),
            (l[2] = t),
            (l[3] = s))
          : (s = l[3]),
        l[4] !== d.filter_counts?.unsupported_country || l[5] !== d.legacy_country_parsing
          ? ((n =
              d.legacy_country_parsing &&
              (d.filter_counts?.unsupported_country ?? 0) > 0 &&
              (0, a.jsx)(g.l, {
                variant: "callout",
                layout: "vertical",
                type: "caution",
                content: (0, a.jsx)(u.A, {
                  id: "merchantSettings.validation.legacyCountryAction",
                  defaultMessage:
                    "OpenAI needs to check this feed’s country configuration. If your product countries are correct, contact support before changing your file.",
                  description:
                    "Action owner for country exclusions when legacy country parsing is active. Source country fields may already be valid.",
                }),
              })),
            (l[4] = d.filter_counts?.unsupported_country),
            (l[5] = d.legacy_country_parsing),
            (l[6] = n))
          : (n = l[6]),
        l[7] !== c || l[8] !== h || l[9] !== d.filter_samples
          ? ((r =
              c > 0 &&
              h > 0 &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.validation.partialFilterAction",
                      defaultMessage:
                        "Some sampled products are outside this feed’s allowed countries or currencies. Check these examples if the exclusions are unexpected",
                      description:
                        "Partial market exclusions are a warning, but other validation errors may still block submission. Normal multi-market feeds can contain rows outside the selected market.",
                    }),
                  }),
                  (0, a.jsx)("ul", { className: "flex flex-col gap-3", children: d.filter_samples?.map(eI) }),
                ],
              })),
            (l[7] = c),
            (l[8] = h),
            (l[9] = d.filter_samples),
            (l[10] = r))
          : (r = l[10]),
        l[11] !== s || l[12] !== n || l[13] !== r
          ? ((o = (0, a.jsxs)("section", { className: "flex flex-col gap-3", children: [s, n, r] })),
            (l[11] = s),
            (l[12] = n),
            (l[13] = r),
            (l[14] = o))
          : (o = l[14]),
        o
      )
    }
    function eI(e, t) {
      return (0, a.jsxs)(
        "li",
        {
          children: [
            (0, a.jsx)("p", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validation.filteredSample",
                defaultMessage: "Excluded sample {number}",
                description: "One-based index within the sample, not the physical source line number",
                values: { number: e.row_index + 1 },
              }),
            }),
            e.details?.map((t, s) => {
              let i = eP.safeParse(t)
              return (0, a.jsxs)(
                "div",
                {
                  children: [
                    (0, a.jsx)(eR.s, {
                      field: i.success ? (i.data.field ?? "product") : "product",
                      reason: e.error_type,
                    }),
                    (0, a.jsx)(eC, { detail: t }),
                  ],
                },
                s,
              )
            }),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    var eU = s("TUql")
    let eD = ek.record(ek.string(), ek.unknown())
    class eL extends Error {
      lineNumber
      constructor(e) {
        ;(super("Invalid JSONL record"), (this.lineNumber = e))
      }
    }
    class eE extends Error {
      constructor() {
        super("The CSV has mismatched columns or quotes")
      }
    }
    class eq extends Error {
      constructor() {
        super("The file is not valid UTF-8 text")
      }
    }
    class eO extends Error {
      constructor() {
        super("The file does not have a gzip header.")
      }
    }
    function eH(e, t) {
      try {
        return eD.parse(JSON.parse(e))
      } catch {
        throw new eL(t)
      }
    }
    function ez(e) {
      return e.length >= 2 && 31 === e[0] && 139 === e[1]
    }
    function eB(e) {
      try {
        return new TextDecoder("utf-8", { fatal: !0 }).decode(e)
      } catch {
        throw new eq()
      }
    }
    function eG(e) {
      let t = [],
        s = new Set()
      return (
        e.forEach((e, a) => {
          let i = e.trim() || `column_${a}`,
            n = i,
            r = 1
          for (; s.has(n);) ((n = `${i}_${r}`), (r += 1))
          ;(s.add(n), t.push(n))
        }),
        t
      )
    }
    function eK(e, t, s, a, i) {
      if (a <= t) return void e.push(s)
      let n = Math.floor(i() * a)
      n < t && (e[n] = s)
    }
    async function eV(e) {
      if ("function" == typeof e.arrayBuffer) return new Uint8Array(await e.arrayBuffer())
      if ("u" > typeof FileReader)
        return new Promise((t, s) => {
          let a = new FileReader()
          ;((a.onerror = () => {
            s(Error("Unable to read the selected file."))
          }),
            (a.onload = () => {
              let { result: e } = a
              e instanceof ArrayBuffer
                ? t(new Uint8Array(e))
                : "string" == typeof e
                  ? t(new TextEncoder().encode(e))
                  : s(Error("Unable to read the selected file."))
            }),
            a.readAsArrayBuffer(e))
        })
      if ("function" == typeof e.text) {
        let t = await e.text()
        return new TextEncoder().encode(t)
      }
      throw Error("Unable to read the selected file in this browser.")
    }
    let eJ = ek.object({
      field: ek.string().optional(),
      issue: ek.string().optional(),
      loc: ek.union([ek.string(), ek.array(ek.union([ek.string(), ek.number()]))]).optional(),
      type: ek.string().optional(),
    })
    function eZ(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        d,
        c,
        h,
        m,
        p,
        f,
        x,
        b = (0, i.c)(33),
        { report: S } = e,
        v = 0 === S.sampled_count,
        _ = S.invalid_count > 0,
        j = "valid"
      ;(_
        ? (j = "invalid")
        : v
          ? (j = "empty")
          : null == S.processing
            ? (j = "incomplete")
            : (S.processing.eligible_sampled_rows ?? 0) === 0
              ? (j = "ineligible")
              : (S.processing?.filtered_sampled_rows ?? 0) > 0 && (j = "filtered"),
        b[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = {
              invalid: "error",
              empty: "caution",
              incomplete: "error",
              ineligible: "error",
              filtered: "caution",
              valid: "success",
            }),
            (b[0] = t))
          : (t = b[0]))
      let w = t[j],
        A = "valid" === j || "filtered" === j ? "status" : "alert"
      return (
        b[1] !== j
          ? ((s = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.status",
              defaultMessage:
                "{state, select, invalid {Validation errors} empty {No products could be checked} incomplete {Validation is incomplete} ineligible {No sampled products can be accepted} filtered {Some products will be excluded} other {No errors found in the sample}}",
              description:
                "Result of merchant feed sample validation. Invalid, empty, incomplete eligibility and no eligible products all block submission. A clean sample does not mean ingestion succeeded.",
              values: { state: j },
            })),
            (b[1] = j),
            (b[2] = s))
          : (s = b[2]),
        b[3] !== S.invalid_count || b[4] !== S.sampled_count
          ? ((n = (0, a.jsx)("p", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationReport.checkedRows",
                defaultMessage: "Checked {sampled} sample rows; {invalid} rows have errors",
                description:
                  "Sample rows checked and rows with reported errors, not full-feed totals. No reported field errors does not establish that the eligibility check completed.",
                values: { sampled: S.sampled_count, invalid: S.invalid_count },
              }),
            })),
            (b[3] = S.invalid_count),
            (b[4] = S.sampled_count),
            (b[5] = n))
          : (n = b[5]),
        b[6] !== v || b[7] !== _
          ? ((r =
              (_ || v) &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.validationReport.nextStep",
                  defaultMessage:
                    "{empty, select, yes {Check that the feed contains product records, then validate again before submitting} other {Resolve the reported issues, then validate again before submitting}}",
                  description:
                    "Next action after merchant feed sample validation blocks submission. Empty means no product rows were checked; otherwise the sample contains invalid rows.",
                  values: { empty: v ? "yes" : "no" },
                }),
              })),
            (b[6] = v),
            (b[7] = _),
            (b[8] = r))
          : (r = b[8]),
        b[9] !== j
          ? ((o =
              "incomplete" === j &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.validationReport.incompleteEligibility",
                  defaultMessage:
                    "The country and eligibility check did not complete. Validate again before submitting. If this continues, contact OpenAI support",
                  description:
                    "Field checks alone do not establish that products can be accepted. A missing eligibility result is a service issue, not evidence of an invalid merchant file.",
                }),
              })),
            (b[9] = j),
            (b[10] = o))
          : (o = b[10]),
        b[11] !== j
          ? ((l =
              "ineligible" === j &&
              (0, a.jsx)("p", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.validationReport.noEligibleProducts",
                  defaultMessage:
                    "Check the sample errors and this feed’s country and currency settings, then validate again. If your product values already match, contact OpenAI support",
                  description:
                    "Next action when the sample contains no eligible products, even if field checks passed. This blocks submission without blaming a correct source for a configuration issue.",
                }),
              })),
            (b[11] = j),
            (b[12] = l))
          : (l = b[12]),
        b[13] !== n || b[14] !== r || b[15] !== o || b[16] !== l
          ? ((d = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [n, r, o, l] })),
            (b[13] = n),
            (b[14] = r),
            (b[15] = o),
            (b[16] = l),
            (b[17] = d))
          : (d = b[17]),
        b[18] !== w || b[19] !== A || b[20] !== s || b[21] !== d
          ? ((c = (0, a.jsx)(g.l, { variant: "callout", layout: "vertical", type: w, role: A, title: s, content: d })),
            (b[18] = w),
            (b[19] = A),
            (b[20] = s),
            (b[21] = d),
            (b[22] = c))
          : (c = b[22]),
        b[23] !== S.processing
          ? ((h = null != S.processing && (0, a.jsx)(eF, { report: S.processing })),
            (b[23] = S.processing),
            (b[24] = h))
          : (h = b[24]),
        b[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("p", {
              className: "text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationReport.sampleScope",
                defaultMessage:
                  "Only a sample was checked. Processing the full feed and downloading images can reveal additional issues.",
                description:
                  "Validation checks sampled records, not every product or image download. A passing sample does not establish full ingestion success.",
              }),
            })),
            (b[25] = m))
          : (m = b[25]),
        b[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(y.G, {
              href: "https://developers.openai.com/commerce/specs/file-upload/products",
              initiator: "open_in_browser_bridge",
              underline: "always",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.specifications",
                defaultMessage: "Feed specifications",
                description:
                  "Link in the Product feed settings help panel to the product feed schema, required fields and examples. Keep this label concise.",
              }),
            })),
            (b[26] = p))
          : (p = b[26]),
        b[27] !== S.error_samples
          ? ((f =
              S.error_samples.length > 0 &&
              (0, a.jsxs)("section", {
                className: "flex flex-col gap-3",
                children: [
                  (0, a.jsx)("h3", {
                    className: "font-semibold",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.validationReport.examples",
                      defaultMessage: "What to fix",
                      description: "List of saved errors from sampled merchant feed records",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.validationReport.sampleNumbers",
                      defaultMessage:
                        "Sample numbers are not source line numbers. Examples may not cover every error in the feed.",
                      description:
                        "Sample validation uses randomly selected records, so sample indexes cannot identify physical source lines and examples are not exhaustive",
                    }),
                  }),
                  (0, a.jsx)("ul", { className: "flex flex-col gap-3", children: S.error_samples.map(e$) }),
                ],
              })),
            (b[27] = S.error_samples),
            (b[28] = f))
          : (f = b[28]),
        b[29] !== c || b[30] !== h || b[31] !== f
          ? ((x = (0, a.jsxs)("section", {
              className: "flex min-w-0 flex-col gap-4 text-sm select-text",
              children: [c, h, m, p, f],
            })),
            (b[29] = c),
            (b[30] = h),
            (b[31] = f),
            (b[32] = x))
          : (x = b[32]),
        x
      )
    }
    function e$(e, t) {
      return (0, a.jsxs)(
        "li",
        {
          className: "flex flex-col gap-2 border-b border-subtle py-3",
          children: [
            (0, a.jsx)("p", {
              className: "font-medium break-words",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationReport.samplePosition",
                defaultMessage: "Sample {number}",
                description: "One-based sampled product position, not a physical source line number",
                values: { number: e.row_index + 1 },
              }),
            }),
            !e.details?.some(eY) && (0, a.jsx)("p", { children: e.message }),
            e.details?.map(eW),
          ],
        },
        `${e.row_index}:${t}`,
      )
    }
    function eW(e, t) {
      let s = eJ.safeParse(e)
      if (!s.success) return null
      let { field: i, loc: n, issue: r, type: o } = s.data,
        l = i ?? (Array.isArray(n) ? n.join(".") : n)
      return l
        ? (0, a.jsxs)(
            "div",
            { children: [(0, a.jsx)(eR.s, { field: l, reason: r ?? o ?? null }), (0, a.jsx)(eC, { detail: e })] },
            t,
          )
        : null
    }
    function eY(e) {
      let t = eJ.safeParse(e)
      if (!t.success) return !1
      let { field: s, loc: a } = t.data
      return !!(s ?? (Array.isArray(a) ? a.join(".") : a))
    }
    function eQ(e) {
      let t,
        s,
        n,
        r,
        o,
        l,
        d,
        c = (0, i.c)(21),
        { error: h, source: m } = e,
        p = h instanceof j.fk ? h.status : null
      c[0] !== h
        ? ((t = (function (e) {
            if (!(e instanceof j.fk) || 400 !== e.status) return null
            try {
              return ek.object({ detail: ek.string() }).safeParse(JSON.parse(e.message)).data?.detail ?? null
            } catch {
              return null
            }
          })(h)),
          (c[0] = h),
          (c[1] = t))
        : (t = c[1])
      let f = t
      if (h instanceof eE) {
        let e
        ;(c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.invalidCsv",
              defaultMessage:
                "The CSV has mismatched columns or quotes. Give every record the same number of columns as the header. Quote cells containing commas or newlines, and double any quotes inside a quoted cell.",
              description: "Manual CSV validation failed before submission because columns or quoting are malformed",
            })),
            (c[2] = e))
          : (e = c[2]),
          (s = e))
      } else if (h instanceof eq) {
        let e
        ;(c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.invalidEncoding",
              defaultMessage:
                "The file is not valid UTF-8 text. Export it with UTF-8 encoding, gzip it, then validate again.",
              description: "The sampled feed text contains invalid UTF-8 bytes; do not silently replace them",
            })),
            (c[3] = e))
          : (e = c[3]),
          (s = e))
      } else if (h instanceof eO) {
        let e
        ;(c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.invalidGzip",
              defaultMessage:
                "This file is not gzip-compressed. Compress the CSV or JSONL file with gzip, then select it and validate again. Renaming a file to .gz does not compress it.",
              description:
                "The selected merchant feed file has a gzip filename but no gzip header. The merchant must actually compress the file; the check does not establish full archive integrity. Preserve CSV, JSONL, gzip, and .gz.",
            })),
            (c[4] = e))
          : (e = c[4]),
          (s = e))
      } else if (h instanceof eL) {
        let e
        ;(c[5] !== h.lineNumber
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationInvalidJsonlRecord",
              defaultMessage: "Invalid JSONL record on line {line}. Use one JSON object per line.",
              description:
                "Error in the merchant feed validation report. The line placeholder is the one-based source line containing malformed JSON or a value that is not a JSON object.",
              values: { line: h.lineNumber },
            })),
            (c[5] = h.lineNumber),
            (c[6] = e))
          : (e = c[6]),
          (s = e))
      } else if (null != f) s = f
      else if (null == p && "file" === m) {
        let e
        ;(c[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.fileUnavailable",
              defaultMessage:
                "The file could not be read or validated. Check that it decompresses and contains product records, then retry.",
              description:
                "Local file sampling or validation did not complete. Do not claim the feed passed or diagnose a service outage; the merchant can check the file and retry.",
            })),
            (c[7] = e))
          : (e = c[7]),
          (s = e))
      } else if ("file" === m && (413 === p || 502 === p || 504 === p)) {
        let e
        ;(c[8] !== p
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.fileRequestAction",
              defaultMessage:
                "{status, select, 413 {The validation sample exceeds the request size limit. Check record sizes against the feed specifications, then try again.} 504 {Validation timed out. Retry; if it keeps failing, contact OpenAI support with your feed ID.} other {The validation service could not complete the request. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
              description:
                "Next step after a failed API request to validate a sample from a local file. Status is the HTTP response code. Do not describe these as hosted URL failures or tell the merchant to switch to manual upload, which they are already using. Service failures do not prove the file is invalid.",
              values: { status: p },
            })),
            (c[8] = p),
            (c[9] = e))
          : (e = c[9]),
          (s = e))
      } else {
        let e,
          t = p ?? "unknown"
        ;(c[10] !== t
          ? ((e = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.requestAction",
              defaultMessage:
                "{status, select, 400 {Check the source format and request settings, then retry validation} 401 {Sign in again, then retry validation} 403 {This account does not have access to validate this merchant feed. Ask a workspace administrator to check your access.} 413 {This feed exceeds the hosted validation size limit. Download the feed and validate it using Manual upload.} 429 {Too many validation requests. Wait a moment, then try again.} 502 {The hosted feed could not be fetched or validated. Check that the URL and HTTP headers allow access, then retry.} 504 {Validation timed out. Retry, or download the feed and validate it using Manual upload.} other {Validation is unavailable or was interrupted. Retry; if it keeps failing, contact OpenAI support with your feed ID.}}",
              description:
                "Next step after a failed merchant feed validation request. Status is the HTTP response code, not a feed issue code. A 502 can reflect hosted-source access or a service error; do not claim which. Unknown failures do not prove the merchant data is wrong.",
              values: { status: t },
            })),
            (c[10] = t),
            (c[11] = e))
          : (e = c[11]),
          (s = e))
      }
      let x = h instanceof eO || h instanceof eL || 400 === p ? "error" : "caution"
      return (
        c[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(u.A, {
              id: "merchantSettings.validationReport.incomplete",
              defaultMessage: "Validation could not complete",
              description:
                "Merchant feed preflight did not produce a complete sample report; do not interpret this as a valid feed or a confirmed product data failure",
            })),
            (c[12] = n))
          : (n = c[12]),
        c[13] !== s ? ((r = (0, a.jsx)("p", { children: s })), (c[13] = s), (c[14] = r)) : (r = c[14]),
        c[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("p", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.validationReport.retryBeforeSubmit",
                defaultMessage: "Validate again before submitting; no passing result is available",
                description:
                  "Submission is disabled after an unsuccessful validation attempt; the merchant can correct the source or retry validation",
              }),
            })),
            (c[15] = o))
          : (o = c[15]),
        c[16] !== r
          ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-2 select-text", children: [r, o] })),
            (c[16] = r),
            (c[17] = l))
          : (l = c[17]),
        c[18] !== x || c[19] !== l
          ? ((d = (0, a.jsx)(g.l, {
              variant: "callout",
              type: x,
              layout: "vertical",
              role: "alert",
              title: n,
              content: l,
            })),
            (c[18] = x),
            (c[19] = l),
            (c[20] = d))
          : (d = c[20]),
        d
      )
    }
    function eX(e) {
      let t,
        r,
        l,
        h,
        f,
        g,
        y,
        b,
        S,
        _,
        j,
        w,
        A,
        M,
        N,
        k,
        P,
        C = (0, i.c)(163),
        { feedId: F } = e,
        I = (0, c.A)(),
        { accountId: U, userId: D } = (0, m.As)(),
        L = (0, n.jE)()
      C[0] !== U || C[1] !== F || C[2] !== D
        ? ((t = { accountId: U, userId: D, feedId: F }), (C[0] = U), (C[1] = F), (C[2] = D), (C[3] = t))
        : (t = C[3])
      let E = t,
        q = (0, d.useRef)(!1),
        [O, H] = (0, d.useState)(null),
        [z, B] = (0, d.useState)(""),
        [G, K] = (0, d.useState)("once")
      C[4] === Symbol.for("react.memo_cache_sentinel") ? ((r = []), (C[4] = r)) : (r = C[4])
      let [V, J] = (0, d.useState)(r),
        [Z, $] = (0, d.useState)(!1),
        [W, Y] = (0, d.useState)("csv.gz"),
        [Q, ee] = (0, d.useState)(!1),
        et = (0, d.useRef)(null),
        es = (0, d.useRef)(null)
      ;(C[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => () => es.current?.abort()), (h = []), (C[5] = l), (C[6] = h))
        : ((l = C[5]), (h = C[6])),
        (0, d.useEffect)(l, h),
        C[7] !== z
          ? ((g = z.trim()),
            (f = URL.canParse(g) && "https:" === new URL(g).protocol),
            (C[7] = z),
            (C[8] = f),
            (C[9] = g))
          : ((f = C[8]), (g = C[9])))
      let ea = f
      C[10] !== V ? ((y = Object.fromEntries(V.filter(e2).map(e1))), (C[10] = V), (C[11] = y)) : (y = C[11])
      let ei = y
      C[12] !== Z || C[13] !== F || C[14] !== O || C[15] !== W || C[16] !== ei || C[17] !== E || C[18] !== g
        ? ((b = {
            mutationFn: async () => {
              if (null == F) throw Error("No merchant selected")
              es.current = new AbortController()
              let e = es.current.signal,
                t =
                  null == O
                    ? null
                    : await (async function (e, t = 100, a = Math.random, i) {
                        let n
                        i?.throwIfAborted()
                        let r = await eV(e.slice(0, 2))
                        if ((i?.throwIfAborted(), !ez(r))) throw new eO()
                        let o = e.name.toLowerCase().endsWith(".jsonl.gz") ? "jsonl" : "csv"
                        try {
                          i?.throwIfAborted()
                          let s = await (async function (e, t) {
                            if ("function" != typeof e.stream)
                              throw Error("Streaming is not supported in this browser.")
                            let s = e.stream()
                            return (
                              (await (async function (e) {
                                let t = e.slice(0, 2)
                                return ez(new Uint8Array(await t.arrayBuffer()))
                              })(e)) && (s = s.pipeThrough(new DecompressionStream("gzip"), { signal: t })),
                              s.pipeThrough(new TextDecoderStream("utf-8", { fatal: !0 }), { signal: t })
                            )
                          })(e, i)
                          n =
                            "jsonl" === o
                              ? await (async function (e, t, s) {
                                  let a = e.getReader(),
                                    i = [],
                                    n = "",
                                    r = 0,
                                    o = 0
                                  try {
                                    for (; r < 1e3;) {
                                      let { value: e, done: l } = await a.read()
                                      if (l) break
                                      let d = (n += e).split(/\r?\n/)
                                      for (let e of ((n = d.pop() ?? ""), d)) {
                                        if (((o += 1), !e.trim())) continue
                                        let a = eH(e, o)
                                        if (((r += 1), eK(i, t, a, r, s), r >= 1e3)) break
                                      }
                                    }
                                    if (n.trim() && r < 1e3) {
                                      let e = eH(n, o + 1)
                                      ;((r += 1), eK(i, t, e, r, s))
                                    }
                                  } finally {
                                    await a.cancel()
                                  }
                                  if (0 === i.length)
                                    throw Error("Unable to parse any JSONL records from the selected file.")
                                  return i
                                })(s, t, a)
                              : await (async function (e, t, s) {
                                  let a = e.getReader(),
                                    i = [],
                                    n = 0,
                                    r = 0,
                                    o = null,
                                    l = [],
                                    d = "",
                                    c = !1,
                                    u = !1,
                                    h = !1,
                                    m = !1,
                                    p = () => {
                                      let e = [...l, d]
                                      if (((l = []), (d = ""), e.every((e) => "" === e))) return
                                      if (!o) {
                                        o = eG(e)
                                        return
                                      }
                                      if (e.length !== o.length) throw new eE()
                                      let a = {}
                                      ;(o.forEach((t, s) => {
                                        a[t] = e[s] ?? ""
                                      }),
                                        (n += 1),
                                        (r += 1),
                                        eK(i, t, a, n, s))
                                    },
                                    f = (e) => {
                                      for (let t = 0; t < e.length; t += 1) {
                                        let s = e[t]
                                        if (u) {
                                          if (((u = !1), '"' === s)) {
                                            d += '"'
                                            continue
                                          }
                                          ;((c = !1), (h = !0))
                                        }
                                        if (h) {
                                          if (" " === s || "	" === s) continue
                                          if ("," !== s && "\r" !== s && "\n" !== s) throw new eE()
                                          h = !1
                                        }
                                        if (!m || ((m = !1), "\n" !== s)) {
                                          if (c) {
                                            if ('"' === s) {
                                              u = !0
                                              continue
                                            }
                                            d += s
                                            continue
                                          }
                                          if ('"' === s) {
                                            if ("" !== d.trim()) throw new eE()
                                            ;((d = ""), (c = !0))
                                            continue
                                          }
                                          if ("," === s) {
                                            ;(l.push(d), (d = ""))
                                            continue
                                          }
                                          if ("\n" === s || "\r" === s) {
                                            if (
                                              ("\r" === s && "\n" === e[t + 1]
                                                ? (t += 1)
                                                : "\r" === s && t === e.length - 1 && (m = !0),
                                              p(),
                                              r >= 1e3)
                                            )
                                              return
                                            continue
                                          }
                                          d += s
                                        }
                                      }
                                    }
                                  try {
                                    for (;;) {
                                      let { value: e, done: t } = await a.read()
                                      if (t || (f(e), r >= 1e3)) break
                                    }
                                    if (r < 1e3 && c && !u) throw new eE()
                                  } finally {
                                    await a.cancel()
                                  }
                                  if ((r < 1e3 && (d || l.length > 0) && p(), !o || 0 === i.length))
                                    throw Error("Unable to parse any CSV records from the selected file.")
                                  return i
                                })(s, t, a)
                        } catch (l) {
                          if (l instanceof eL || l instanceof eE) throw l
                          i?.throwIfAborted()
                          let r = await (async function (e) {
                            let t = await eV(e)
                            return ez(t) ? eB((0, eU.Aq)(t)) : eB(t)
                          })(e)
                          ;(i?.throwIfAborted(),
                            (n = (function (e, t, s) {
                              if (e.length <= t) return e.slice()
                              let a = e.slice(0, t)
                              for (let i = t; i < e.length; i += 1) {
                                let n = Math.floor(s() * (i + 1))
                                n < t && (a[n] = e[i])
                              }
                              return a
                            })(
                              "jsonl" === o
                                ? (function (e) {
                                    let t = []
                                    for (let [s, a] of e.split(/\r?\n/).entries())
                                      if (a.trim() && (t.push(eH(a, s + 1)), t.length >= 1e3)) break
                                    if (0 === t.length)
                                      throw Error("Unable to parse any JSONL records from the selected file.")
                                    return t
                                  })(r)
                                : await (async function (e) {
                                    let t,
                                      { parse: a } = await s.e(749940).then(s.bind(s, "otI6"))
                                    try {
                                      t = a(e, { columns: eG, skip_empty_lines: !0, bom: !0, trim: !0, to: 1e3 })
                                    } catch {
                                      throw new eE()
                                    }
                                    if (!Array.isArray(t) || 0 === t.length)
                                      throw Error("Unable to parse any CSV records from the selected file.")
                                    return ek.array(eD).parse(t)
                                  })(r),
                              t,
                              a,
                            )))
                        }
                        return { sampleRows: n, fileFormatHint: o }
                      })(O, void 0, void 0, e).catch((t) => {
                        throw (
                          e.aborted || T(E, "file_validate", t instanceof eL ? "invalid_jsonl" : "invalid_input"),
                          t
                        )
                      })
              return (
                e.throwIfAborted(),
                p.Request.safePost("/shopping/feeds/{feed_id}/validate", {
                  parameters: { path: { feed_id: F } },
                  signal: e,
                  requestBody: {
                    source: null == O ? "hosted_url" : "file_upload",
                    source_url: null == O ? g : void 0,
                    file_name: O?.name,
                    sample_rows: t?.sampleRows,
                    file_format_hint: t?.fileFormatHint ?? (Z ? W : void 0),
                    sample_limit: 100,
                    headers: null == O ? ei : void 0,
                    require_supported_filename: null != O || !Z,
                  },
                }).catch(R(E, null == O ? "hosted_validate" : "file_validate", e))
              )
            },
            gcTime: 0,
          }),
          (C[12] = Z),
          (C[13] = F),
          (C[14] = O),
          (C[15] = W),
          (C[16] = ei),
          (C[17] = E),
          (C[18] = g),
          (C[19] = b))
        : (b = C[19])
      let en = (0, o.n)(b),
        er =
          en.isSuccess &&
          en.data.sampled_count > 0 &&
          0 === en.data.invalid_count &&
          (en.data.processing?.eligible_sampled_rows ?? 0) > 0
      C[20] !== U ||
      C[21] !== Z ||
      C[22] !== F ||
      C[23] !== O ||
      C[24] !== G ||
      C[25] !== L ||
      C[26] !== ei ||
      C[27] !== E ||
      C[28] !== g ||
      C[29] !== D ||
      C[30] !== er
        ? ((S = {
            mutationFn: async () => {
              if (null == F) throw Error("No merchant selected")
              if (!er) throw Error("Validate the selected source before submitting")
              es.current = new AbortController()
              let e = es.current.signal
              if (null == O && "once" !== G)
                return (
                  await p.Request.safePost("/shopping/feeds/{feed_id}/schedule", {
                    parameters: { path: { feed_id: F } },
                    requestBody: { frequency: G, feed_type: "snapshot", source_url: g, headers: ei, enabled: !0 },
                    signal: e,
                  }).catch(R(E, "hosted_schedule", e)),
                  "scheduled"
                )
              let t = await p.Request.safePost("/shopping/feeds/{feed_id}/runs", {
                parameters: { path: { feed_id: F } },
                requestBody: {
                  source: null == O ? "hosted_url" : "file_upload",
                  feed_type: "snapshot",
                  file_name: O?.name,
                  source_url: null == O ? g : void 0,
                  headers: null == O ? ei : void 0,
                  require_supported_filename: null != O || !Z,
                },
                signal: e,
              }).catch(R(E, null == O ? "hosted_run_create" : "file_run_create", e))
              if ((e.throwIfAborted(), null != O)) {
                if (!t.upload_url)
                  throw (T(E, "file_transfer", "service_unavailable"), Error("Missing feed upload URL"))
                let s = O.size >= 0x40000000 ? 0x2000000 : 8388608
                try {
                  await new eM.wG(t.upload_url).uploadData(O, {
                    blockSize: s,
                    maxSingleShotSize: s,
                    concurrency: 4,
                    abortSignal: e,
                    blobHTTPHeaders: O.type ? { blobContentType: O.type } : void 0,
                  })
                } catch (t) {
                  throw (
                    e.aborted ||
                      (t instanceof Error && "AbortError" === t.name) ||
                      T(
                        E,
                        "file_transfer",
                        (function (e) {
                          if ("object" != typeof e || null == e) return "request_failed"
                          if ("statusCode" in e && "number" == typeof e.statusCode && e.statusCode >= 100) {
                            let t = e.statusCode
                            return 401 === t || 403 === t
                              ? "access_denied"
                              : 429 === t
                                ? "rate_limited"
                                : t >= 500 && t < 600
                                  ? "service_unavailable"
                                  : "request_failed"
                          }
                          return "code" in e &&
                            "string" == typeof e.code &&
                            [
                              "REQUEST_SEND_ERROR",
                              "ECONNRESET",
                              "ECONNREFUSED",
                              "ENETUNREACH",
                              "ENOTFOUND",
                              "ETIMEDOUT",
                              "EAI_AGAIN",
                              "EHOSTUNREACH",
                            ].includes(e.code)
                            ? "network"
                            : "request_failed"
                        })(t),
                      ),
                    t
                  )
                }
                ;(e.throwIfAborted(), T(E, "file_transfer", null))
              }
              return (
                e.throwIfAborted(),
                await p.Request.safePost("/shopping/feeds/{feed_id}/runs/{run_id}/submit", {
                  parameters: { path: { feed_id: F, run_id: ed(t.run_id) }, query: { feed_type: "snapshot" } },
                  signal: e,
                }).catch(R(E, "feed_submit", e)),
                await L.invalidateQueries({ queryKey: ["merchant-runs", D, U, F] }),
                "submitted"
              )
            },
            gcTime: 0,
          }),
          (C[20] = U),
          (C[21] = Z),
          (C[22] = F),
          (C[23] = O),
          (C[24] = G),
          (C[25] = L),
          (C[26] = ei),
          (C[27] = E),
          (C[28] = g),
          (C[29] = D),
          (C[30] = er),
          (C[31] = S))
        : (S = C[31])
      let eo = (0, o.n)(S),
        el = eo.isPending || en.isPending
      if (
        C[32] !== Z ||
        C[33] !== el ||
        C[34] !== F ||
        C[35] !== O ||
        C[36] !== Q ||
        C[37] !== G ||
        C[38] !== V ||
        C[39] !== W ||
        C[40] !== I ||
        C[41] !== E ||
        C[42] !== eo ||
        C[43] !== g ||
        C[44] !== z ||
        C[45] !== ea ||
        C[46] !== en ||
        C[47] !== er
      ) {
        let e,
          t,
          s,
          i,
          n,
          r,
          o,
          l,
          d,
          c,
          h,
          m,
          p,
          f,
          y,
          b,
          S,
          k,
          R,
          P,
          U,
          D,
          L,
          ei,
          ed,
          ec,
          eu,
          eh,
          em,
          ep,
          ef,
          eg,
          ex,
          ey,
          eS,
          e_,
          ej,
          ew,
          eA,
          eM = function (e) {
            let t = "file" === e ? null != O : null == O,
              s = "file" === e ? null != O : ea
            return (0, a.jsxs)("div", {
              className: "flex flex-col gap-4",
              role: "group",
              "aria-label":
                "file" === e
                  ? I.formatMessage({
                      id: "merchantSettings.submitTitle",
                      defaultMessage: "Manual upload",
                      description: "Section for manually submitting a feed",
                    })
                  : I.formatMessage({
                      id: "merchantSettings.hostedUrlTitle",
                      defaultMessage: "Hosted URL",
                      description:
                        "Heading above the hosted product feed URL input and scheduling options on the merchant settings page",
                    }),
              children: [
                null == F &&
                  (0, a.jsx)("p", {
                    className: "text-sm text-caution select-none",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.selectBeforeSubmit",
                      defaultMessage: "Select a merchant above before validating or submitting a feed",
                      description:
                        "Explains why the feed validation and submission buttons are disabled when no merchant is selected",
                    }),
                  }),
                t &&
                  s &&
                  en.isIdle &&
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.validationRequired",
                      defaultMessage:
                        "Validate this source before submitting or scheduling it. Fix any reported errors, then validate again.",
                      description:
                        "Explains why Submit feed is disabled before a successful sample validation on the merchant settings page. Changing the file, URL, or access headers requires validation again.",
                    }),
                  }),
                (0, a.jsxs)("div", {
                  className: "flex flex-wrap gap-3",
                  children: [
                    (0, a.jsx)(x.$, {
                      color: "primary",
                      size: "dialog",
                      loading: t && eo.isPending,
                      disabled: null == F || !t || !s || el || !er,
                      onClick: () => eo.mutate(),
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.submit",
                        defaultMessage: "Submit feed",
                        description: "Uploads and submits a feed or creates its hosted URL schedule",
                      }),
                    }),
                    (0, a.jsx)(x.$, {
                      color: "outlineCard",
                      size: "dialog",
                      loading: t && en.isPending,
                      disabled: null == F || !t || !s || el,
                      onClick: () => en.mutate(),
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.validate",
                        defaultMessage: "Validate",
                        description: "Samples and validates the selected feed without submitting it",
                      }),
                    }),
                    t &&
                      el &&
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        onClick: () => es.current?.abort(),
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.cancel",
                          defaultMessage: "Cancel",
                          description: "Cancels the in-flight feed submission request",
                        }),
                      }),
                  ],
                }),
                t &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      eo.isSuccess &&
                        (0, a.jsx)("p", {
                          role: "status",
                          children:
                            "scheduled" === eo.data
                              ? (0, a.jsx)(u.A, {
                                  id: "merchantSettings.scheduled",
                                  defaultMessage: "Feed schedule saved",
                                  description: "Hosted feed schedule was saved successfully",
                                })
                              : (0, a.jsx)(u.A, {
                                  id: "merchantSettings.submitted",
                                  defaultMessage: "Submission received. Processing will begin shortly.",
                                  description: "Feed was submitted successfully; ingestion is asynchronous",
                                }),
                        }),
                      eo.isError &&
                        (0, a.jsx)("p", {
                          className: "text-danger",
                          role: "alert",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.submissionError",
                            defaultMessage: "The feed request did not complete. Check your input and try again.",
                            description: "Validation, upload, submission or schedule request failed or was canceled",
                          }),
                        }),
                      en.isError && (0, a.jsx)(eQ, { error: en.error, source: e }),
                      en.data && (0, a.jsx)(eZ, { report: en.data }),
                    ],
                  }),
              ],
            })
          }
        ;((A = "flex min-w-0 flex-col gap-5"),
          C[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(u.A, {
                id: "merchantSettings.submitTitle",
                defaultMessage: "Manual upload",
                description: "Section for manually submitting a feed",
              })),
              (C[54] = e))
            : (e = C[54]),
          C[55] !== eo || C[56] !== en
            ? ((t = () => {
                ;(en.reset(), eo.reset())
              }),
              (C[55] = eo),
              (C[56] = en),
              (C[57] = t))
            : (t = C[57]),
          C[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(u.A, {
                id: "merchantSettings.file",
                defaultMessage: "Upload a file",
                description: "Compressed CSV or JSONL product feed file input",
              })),
              (C[58] = s))
            : (s = C[58]),
          C[59] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsxs)("span", {
                className: "flex flex-col gap-1",
                children: [
                  s,
                  (0, a.jsx)("span", {
                    className: "text-xs font-normal text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.fileHelp",
                      defaultMessage: "Upload a compressed feed file from your device.",
                      description: "File upload instructions",
                    }),
                  }),
                ],
              })),
              (C[59] = i))
            : (i = C[59]),
          C[60] !== I
            ? ((n = I.formatMessage({
                id: "merchantSettings.file",
                defaultMessage: "Upload a file",
                description: "Compressed CSV or JSONL product feed file input",
              })),
              (C[60] = I),
              (C[61] = n))
            : (n = C[61]),
          C[62] !== E
            ? ((r = (e) => {
                let t = e.target.files?.[0] ?? null,
                  s = null != t && t.size > 0x200000000 ? "file_too_large" : null,
                  a = null == t || /\.(csv|jsonl)\.gz$/i.test(t.name) ? s : "unsupported_file_type",
                  i = null != a
                ;(null != t && T(E, "file_select", a),
                  ee(i),
                  H(i ? null : t),
                  i ? (e.target.value = "") : null != t && B(""))
              }),
              (C[62] = E),
              (C[63] = r))
            : (r = C[63]),
          C[64] !== n || C[65] !== r
            ? ((o = (0, a.jsxs)("label", {
                className: "flex flex-col gap-6 text-sm font-semibold",
                children: [
                  i,
                  (0, a.jsx)("input", {
                    ref: et,
                    className:
                      "w-full rounded-md border border-subtle bg-surface-card px-3 py-2 text-sm font-normal file:me-4 file:rounded-md file:border-0 file:bg-secondary-soft file:px-3 file:py-2 file:text-sm file:font-medium file:text-default",
                    name: "feed-file",
                    "aria-label": n,
                    type: "file",
                    accept: ".csv.gz,.jsonl.gz",
                    onChange: r,
                  }),
                ],
              })),
              (C[64] = n),
              (C[65] = r),
              (C[66] = o))
            : (o = C[66]),
          C[67] !== Q
            ? ((l =
                Q &&
                (0, a.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.fileError",
                    defaultMessage: "Choose a supported compressed feed file no larger than 8 GB",
                    description: "Invalid file format or size",
                  }),
                })),
              (C[67] = Q),
              (C[68] = l))
            : (l = C[68]),
          C[69] !== el || C[70] !== t || C[71] !== o || C[72] !== l
            ? ((d = (0, a.jsxs)("fieldset", {
                disabled: el,
                className: "flex flex-col gap-4",
                onChange: t,
                children: [o, l],
              })),
              (C[69] = el),
              (C[70] = t),
              (C[71] = o),
              (C[72] = l),
              (C[73] = d))
            : (d = C[73]),
          (M = (0, a.jsxs)(ev, { title: e, children: [d, eM("file")] })),
          (_ = ev),
          C[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = (0, a.jsx)(u.A, {
                id: "merchantSettings.hostedUrlTitle",
                defaultMessage: "Hosted URL",
                description:
                  "Heading above the hosted product feed URL input and scheduling options on the merchant settings page",
              })),
              (C[74] = N))
            : (N = C[74]),
          C[75] !== eo || C[76] !== en
            ? ((c = () => {
                ;(en.reset(), eo.reset())
              }),
              (C[75] = eo),
              (C[76] = en),
              (C[77] = c))
            : (c = C[77]),
          C[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsx)(u.A, {
                id: "merchantSettings.url",
                defaultMessage: "Provide a hosted URL",
                description: "HTTPS URL from which to fetch the merchant feed",
              })),
              (C[78] = h))
            : (h = C[78]),
          C[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, a.jsxs)("span", {
                className: "flex flex-col gap-1",
                children: [
                  h,
                  (0, a.jsx)("span", {
                    className: "text-xs font-normal text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.urlHelp",
                      defaultMessage: "Use this if your feed is already hosted online.",
                      description: "Hosted URL instructions",
                    }),
                  }),
                ],
              })),
              (C[79] = m))
            : (m = C[79]),
          C[80] !== I
            ? ((p = I.formatMessage({
                id: "merchantSettings.hostedUrlLabel",
                defaultMessage: "Hosted URL",
                description: "Hosted feed URL input label",
              })),
              (C[80] = I),
              (C[81] = p))
            : (p = C[81]),
          C[82] !== I
            ? ((f = I.formatMessage({
                id: "merchantSettings.urlPlaceholder",
                defaultMessage: "https://example.com/catalog.jsonl.gz",
                description:
                  "Example HTTPS product feed URL shown in the empty hosted URL input; preserve the HTTPS scheme and .jsonl.gz file extension",
              })),
              (C[82] = I),
              (C[83] = f))
            : (f = C[83]),
          C[84] !== E || C[85] !== g || C[86] !== ea
            ? ((y = () => {
                ;(q.current && g && T(E, "hosted_url", ea ? null : "invalid_url"), (q.current = !1))
              }),
              (C[84] = E),
              (C[85] = g),
              (C[86] = ea),
              (C[87] = y))
            : (y = C[87]),
          C[88] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = (e) => {
                ;((q.current = !0), B(e.target.value), H(null), et.current && (et.current.value = ""), ee(!1))
              }),
              (C[88] = b))
            : (b = C[88]),
          C[89] !== p || C[90] !== f || C[91] !== y || C[92] !== z
            ? ((S = (0, a.jsxs)("label", {
                className: "flex flex-col gap-6 text-sm font-semibold",
                children: [
                  m,
                  (0, a.jsx)(v.pd, {
                    variant: "default",
                    name: "feed-url",
                    "aria-label": p,
                    placeholder: f,
                    type: "url",
                    value: z,
                    onBlur: y,
                    onChange: b,
                  }),
                ],
              })),
              (C[89] = p),
              (C[90] = f),
              (C[91] = y),
              (C[92] = z),
              (C[93] = S))
            : (S = C[93]),
          C[94] !== g || C[95] !== ea
            ? ((k =
                g &&
                !ea &&
                (0, a.jsx)("p", {
                  className: "text-danger",
                  role: "alert",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.https",
                    defaultMessage: "Hosted URL must use HTTPS",
                    description: "Rejects an invalid or non-HTTPS hosted feed URL",
                  }),
                })),
              (C[94] = g),
              (C[95] = ea),
              (C[96] = k))
            : (k = C[96]),
          C[97] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = (0, a.jsx)("h4", {
                className: "text-xs font-semibold uppercase",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.frequency",
                  defaultMessage: "Run frequency",
                  description: "Frequency for fetching a hosted product feed",
                }),
              })),
              (C[97] = R))
            : (R = C[97]),
          C[98] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.frequencyHelp",
                  defaultMessage: "Choose whether this hosted URL should run once or on a recurring schedule.",
                  description: "Hosted URL scheduling instructions",
                }),
              })),
              (C[98] = P))
            : (P = C[98]),
          C[99] !== I
            ? ((U = I.formatMessage({
                id: "merchantSettings.frequency",
                defaultMessage: "Run frequency",
                description: "Frequency for fetching a hosted product feed",
              })),
              (C[99] = I),
              (C[100] = U))
            : (U = C[100]),
          C[101] !== eo || C[102] !== en
            ? ((D = (e) => {
                ;(K(e), "once" !== e && $(!1), en.reset(), eo.reset())
              }),
              (C[101] = eo),
              (C[102] = en),
              (C[103] = D))
            : (D = C[103]))
        let ek = el || null != O
        ;(C[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, a.jsx)(u.A, {
              id: "merchantSettings.once",
              defaultMessage: "Once",
              description: "Submit the hosted feed immediately once",
            })),
            (C[104] = L))
          : (L = C[104]),
          C[105] !== ek ? ((ei = { id: "once", disabled: ek, label: L }), (C[105] = ek), (C[106] = ei)) : (ei = C[106]))
        let eR = el || null != O
        ;(C[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, a.jsx)(u.A, {
              id: "merchantSettings.hourly",
              defaultMessage: "Hourly",
              description: "Schedule an hourly hosted feed fetch",
            })),
            (C[107] = ed))
          : (ed = C[107]),
          C[108] !== eR
            ? ((ec = { id: "hourly", disabled: eR, label: ed }), (C[108] = eR), (C[109] = ec))
            : (ec = C[109]))
        let eP = el || null != O
        ;(C[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = (0, a.jsx)(u.A, {
              id: "merchantSettings.daily",
              defaultMessage: "Daily",
              description: "Schedule a daily hosted feed fetch",
            })),
            (C[110] = eu))
          : (eu = C[110]),
          C[111] !== eP
            ? ((eh = { id: "daily", disabled: eP, label: eu }), (C[111] = eP), (C[112] = eh))
            : (eh = C[112]),
          C[113] !== ei || C[114] !== ec || C[115] !== eh
            ? ((em = [ei, ec, eh]), (C[113] = ei), (C[114] = ec), (C[115] = eh), (C[116] = em))
            : (em = C[116]),
          C[117] !== G || C[118] !== U || C[119] !== D || C[120] !== em
            ? ((ep = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  R,
                  P,
                  (0, a.jsx)(eb.T, {
                    className: "gap-2",
                    size: "actionSm",
                    selectedColor: "segmentedSelected",
                    unselectedColor: "outlineCard",
                    ariaLabel: U,
                    selectedId: G,
                    onSelect: D,
                    options: em,
                  }),
                ],
              })),
              (C[117] = G),
              (C[118] = U),
              (C[119] = D),
              (C[120] = em),
              (C[121] = ep))
            : (ep = C[121]),
          C[122] === Symbol.for("react.memo_cache_sentinel")
            ? ((ef = (0, a.jsx)(u.A, {
                id: "merchantSettings.httpHeadersTitle",
                defaultMessage: "Advanced: HTTP headers (optional)",
                description:
                  "Expandable section in merchant feed settings for optional HTTP headers required by the server hosting the feed",
              })),
              (C[122] = ef))
            : (ef = C[122]),
          C[123] === Symbol.for("react.memo_cache_sentinel")
            ? ((eg = (0, a.jsx)("p", {
                className: "text-xs text-secondary",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.httpHeadersHelp",
                  defaultMessage:
                    "Leave this blank for a public feed URL. If your feed provider requires headers for access, enter them here, for example Authorization: Bearer YOUR_TOKEN. These are HTTP request headers, not column names in your feed.",
                  description:
                    "Merchant feed settings help for optional authentication headers. Authorization: Bearer YOUR_TOKEN is an example, not a real credential; preserve that example literally.",
                }),
              })),
              (C[123] = eg))
            : (eg = C[123]),
          C[124] !== V
            ? ((ex = () => J([...V, { id: crypto.randomUUID(), name: "", value: "" }])), (C[124] = V), (C[125] = ex))
            : (ex = C[125]),
          C[126] === Symbol.for("react.memo_cache_sentinel")
            ? ((ey = (0, a.jsx)(u.A, {
                id: "merchantSettings.addHeader",
                defaultMessage: "Add header",
                description: "Adds an optional HTTP header for fetching a hosted feed",
              })),
              (C[126] = ey))
            : (ey = C[126]),
          C[127] !== ex
            ? ((eS = (0, a.jsx)("div", {
                children: (0, a.jsx)(x.$, { color: "outlineCard", size: "actionSm", onClick: ex, children: ey }),
              })),
              (C[127] = ex),
              (C[128] = eS))
            : (eS = C[128]),
          C[129] !== V || C[130] !== eo || C[131] !== en
            ? ((e_ = V.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "flex items-end gap-2",
                    children: [
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)(u.A, {
                            id: "merchantSettings.header",
                            defaultMessage: "Header",
                            description: "HTTP header name for fetching a hosted feed",
                          }),
                          (0, a.jsx)(v.pd, {
                            variant: "default",
                            name: `header-${e.id}`,
                            value: e.name,
                            onChange: (t) => J(V.map((s) => (s.id === e.id ? { ...s, name: t.target.value } : s))),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("label", {
                        children: [
                          (0, a.jsx)(u.A, {
                            id: "merchantSettings.headerValue",
                            defaultMessage: "Value",
                            description: "HTTP header value, potentially a secret, for fetching a hosted feed",
                          }),
                          (0, a.jsx)(v.pd, {
                            variant: "default",
                            name: `value-${e.id}`,
                            type: "password",
                            autoComplete: "off",
                            value: e.value,
                            onChange: (t) => J(V.map((s) => (s.id === e.id ? { ...s, value: t.target.value } : s))),
                          }),
                        ],
                      }),
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        onClick: () => {
                          ;(J(V.filter((t) => t.id !== e.id)), en.reset(), eo.reset())
                        },
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.remove",
                          defaultMessage: "Remove",
                          description: "Removes a hosted feed HTTP header",
                        }),
                      }),
                    ],
                  },
                  e.id,
                ),
              )),
              (C[129] = V),
              (C[130] = eo),
              (C[131] = en),
              (C[132] = e_))
            : (e_ = C[132]),
          C[133] !== eS || C[134] !== e_
            ? ((ej = (0, a.jsxs)(eT.J, {
                collapsible: !0,
                defaultOpen: !1,
                showDivider: !1,
                title: ef,
                children: [eg, eS, e_],
              })),
              (C[133] = eS),
              (C[134] = e_),
              (C[135] = ej))
            : (ej = C[135]),
          C[136] !== Z ||
          C[137] !== el ||
          C[138] !== G ||
          C[139] !== W ||
          C[140] !== I ||
          C[141] !== eo ||
          C[142] !== en
            ? ((ew =
                "once" === G &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative flex items-center gap-2 text-sm",
                      children: [
                        (0, a.jsx)(eN.S, {
                          id: "allow-without-filename",
                          checked: Z,
                          onCheckedChange: (e) => {
                            ;($(e), en.reset(), eo.reset())
                          },
                          disabled: el,
                        }),
                        (0, a.jsx)("label", {
                          htmlFor: "allow-without-filename",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.allowFilename",
                            defaultMessage: "Allow URL without supported filename",
                            description:
                              "Allows hosted URLs whose path does not end in a supported compressed feed extension",
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.allowFilenameHelp",
                        defaultMessage:
                          "Only applies to one-time runs and allows URLs without a supported file extension.",
                        description: "Explains when to allow a URL without a supported filename",
                      }),
                    }),
                    Z &&
                      (0, a.jsx)(X, {
                        size: "field",
                        showLabel: !0,
                        label: I.formatMessage({
                          id: "merchantSettings.validationFormat",
                          defaultMessage: "Feed file format",
                          description:
                            "Format selector used to validate a hosted product feed whose URL does not identify its file format",
                        }),
                        value: W,
                        disabled: el,
                        onChange: (e) => {
                          ;(Y(e), en.reset(), eo.reset())
                        },
                        options: ["csv.gz", "jsonl.gz", "tsv.gz", "csv", "parquet.gz", "tsv", "parquet"].map(e0),
                      }),
                  ],
                })),
              (C[136] = Z),
              (C[137] = el),
              (C[138] = G),
              (C[139] = W),
              (C[140] = I),
              (C[141] = eo),
              (C[142] = en),
              (C[143] = ew))
            : (ew = C[143]),
          C[144] !== ep || C[145] !== ej || C[146] !== ew
            ? ((eA = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [ep, ej, ew] })),
              (C[144] = ep),
              (C[145] = ej),
              (C[146] = ew),
              (C[147] = eA))
            : (eA = C[147]),
          C[148] !== el || C[149] !== c || C[150] !== S || C[151] !== k || C[152] !== eA
            ? ((j = (0, a.jsxs)("fieldset", {
                disabled: el,
                className: "flex flex-col gap-4",
                onChange: c,
                children: [S, k, eA],
              })),
              (C[148] = el),
              (C[149] = c),
              (C[150] = S),
              (C[151] = k),
              (C[152] = eA),
              (C[153] = j))
            : (j = C[153]),
          (w = eM("hosted_url")),
          (C[32] = Z),
          (C[33] = el),
          (C[34] = F),
          (C[35] = O),
          (C[36] = Q),
          (C[37] = G),
          (C[38] = V),
          (C[39] = W),
          (C[40] = I),
          (C[41] = E),
          (C[42] = eo),
          (C[43] = g),
          (C[44] = z),
          (C[45] = ea),
          (C[46] = en),
          (C[47] = er),
          (C[48] = _),
          (C[49] = j),
          (C[50] = w),
          (C[51] = A),
          (C[52] = M),
          (C[53] = N))
      } else ((_ = C[48]), (j = C[49]), (w = C[50]), (A = C[51]), (M = C[52]), (N = C[53]))
      return (
        C[154] !== _ || C[155] !== j || C[156] !== w || C[157] !== N
          ? ((k = (0, a.jsxs)(_, { title: N, children: [j, w] })),
            (C[154] = _),
            (C[155] = j),
            (C[156] = w),
            (C[157] = N),
            (C[158] = k))
          : (k = C[158]),
        C[159] !== A || C[160] !== M || C[161] !== k
          ? ((P = (0, a.jsxs)("div", { className: A, children: [M, k] })),
            (C[159] = A),
            (C[160] = M),
            (C[161] = k),
            (C[162] = P))
          : (P = C[162]),
        P
      )
    }
    function e0(e) {
      return { value: e, label: e }
    }
    function e1(e) {
      return [e.name.trim(), e.value]
    }
    function e2(e) {
      return e.name.trim()
    }
    let e3 = "https://cdn.openai.com/pdf/e5631ed2-f18b-4712-a73f-1410ae280f77/Merchant-Country-Currency-Reference.pdf"
    function e4() {
      let e,
        t,
        s = (0, i.c)(12),
        { accountId: n, userId: r } = (0, m.As)()
      if ((0, l._U)(_.JW, w.p)) {
        let e,
          t = `${r}:${n}`
        return (
          s[0] !== n || s[1] !== t || s[2] !== r
            ? ((e = (0, a.jsx)(e5, { accountId: n, userId: r }, t)), (s[0] = n), (s[1] = t), (s[2] = r), (s[3] = e))
            : (e = s[3]),
          e
        )
      }
      let o = `${r}:${n}`
      return (
        s[4] !== n || s[5] !== r
          ? ((e = (0, a.jsx)(e5, { accountId: n, userId: r })), (s[4] = n), (s[5] = r), (s[6] = e))
          : (e = s[6]),
        s[7] !== n || s[8] !== o || s[9] !== e || s[10] !== r
          ? ((t = (0, a.jsx)(P, { accountId: n, userId: r, children: e }, o)),
            (s[7] = n),
            (s[8] = o),
            (s[9] = e),
            (s[10] = r),
            (s[11] = t))
          : (t = s[11]),
        t
      )
    }
    function e5(e) {
      let t,
        s,
        o,
        l,
        m,
        p,
        f,
        _,
        w,
        A,
        M,
        N,
        T,
        R,
        P,
        C,
        F,
        U,
        D,
        L,
        E,
        q,
        O,
        H,
        z,
        B,
        G,
        K,
        V,
        J,
        Z,
        $,
        W,
        Y,
        Q,
        et,
        es,
        ea = (0, i.c)(128),
        { accountId: ei, userId: en } = e,
        er = (0, c.A)(),
        [eo, el] = (0, d.useState)("runs")
      ea[0] !== er
        ? ((t = er.formatMessage({
            id: "merchantSettings.recentRunsTab",
            defaultMessage: "Recent runs",
            description:
              "Tab and associated panel label in merchant Feed activity showing recent ingestion runs. Each row can expand to show its own processing details.",
          })),
          (ea[0] = er),
          (ea[1] = t))
        : (t = ea[1])
      let ed = t
      ea[2] !== er
        ? ((s = er.formatMessage({
            id: "merchantSettings.issuesTab",
            defaultMessage: "Issues",
            description: "Tab for feed issues",
          })),
          (ea[2] = er),
          (ea[3] = s))
        : (s = ea[3])
      let ec = s,
        [eh, em] = (0, h.ok)(),
        [ep, ef] = (0, d.useState)(""),
        [eg, ex] = (0, d.useState)("newest"),
        [ey, eb] = (0, d.useState)(0),
        [eS, ej] = (0, d.useState)(!1),
        ew = (0, n.jE)()
      ea[4] !== ei || ea[5] !== en
        ? ((o = ["merchant-feeds", en, ei]), (ea[4] = ei), (ea[5] = en), (ea[6] = o))
        : (o = ea[6])
      let eA = o
      ea[7] !== eA ? ((l = { queryKey: eA, queryFn: e9, staleTime: 3e4 }), (ea[7] = eA), (ea[8] = l)) : (l = ea[8])
      let {
          data: eM,
          isPending: eN,
          isError: eT,
          error: ek,
          errorUpdatedAt: eR,
          isFetchedAfterMount: eP,
          refetch: eC,
        } = (0, r.I)(l),
        eF = (0, d.useRef)(0)
      ;(ea[9] !== ei || ea[10] !== ek || ea[11] !== eR || ea[12] !== eT || ea[13] !== eP || ea[14] !== en
        ? ((m = () => {
            eT && eP && eR !== eF.current && ((eF.current = eR), k({ accountId: ei, userId: en }, "merchant_list", ek))
          }),
          (p = [ei, en, ek, eR, eT, eP]),
          (ea[9] = ei),
          (ea[10] = ek),
          (ea[11] = eR),
          (ea[12] = eT),
          (ea[13] = eP),
          (ea[14] = en),
          (ea[15] = m),
          (ea[16] = p))
        : ((m = ea[15]), (p = ea[16])),
        (0, d.useEffect)(m, p),
        ea[17] !== eM?.feeds || ea[18] !== eM?.feeds.find || ea[19] !== eh
          ? ((f = eM?.feeds.find((e) => e.feed_id === eh.get("feed_id"))),
            (ea[17] = eM?.feeds),
            (ea[18] = eM?.feeds.find),
            (ea[19] = eh),
            (ea[20] = f))
          : (f = ea[20]))
      let eI = f
      if (
        ea[21] !== eM ||
        ea[22] !== ek ||
        ea[23] !== er ||
        ea[24] !== eT ||
        ea[25] !== eN ||
        ea[26] !== ey ||
        ea[27] !== eC ||
        ea[28] !== ep ||
        ea[29] !== eI?.feed_id ||
        ea[30] !== em ||
        ea[31] !== eg
      ) {
        let e,
          t,
          s,
          i,
          n,
          r,
          o,
          l,
          d = eM?.feeds
            .filter((e) =>
              [e.merchant_name, e.merchant_slug, e.feed_id].some((e) =>
                e.toLowerCase().includes(ep.trim().toLowerCase()),
              ),
            )
            .sort((e, t) =>
              "name" === eg || "name-desc" === eg
                ? e.merchant_name.localeCompare(t.merchant_name) * ("name" === eg ? 1 : -1)
                : "id" === eg || "id-desc" === eg
                  ? e.feed_id.localeCompare(t.feed_id) * ("id" === eg ? 1 : -1)
                  : (Date.parse(e.created_at) - Date.parse(t.created_at)) * ("oldest" === eg ? 1 : -1),
            ),
          c = Math.max(1, Math.ceil((d?.length ?? 0) / 10)),
          h = Math.min(ey, c - 1)
        ;(ea[43] !== em
          ? ((e = function (e) {
              em((t) => {
                let s = new URLSearchParams(t)
                return (null == e ? s.delete("feed_id") : s.set("feed_id", e), s)
              })
            }),
            (ea[43] = em),
            (ea[44] = e))
          : (e = ea[44]),
          (w = e),
          (C = "h-full overflow-y-auto bg-surface px-6 py-8 text-default"),
          (T = "mx-auto flex w-full max-w-5xl flex-col gap-5"),
          ea[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)("h1", {
                className: "text-2xl font-semibold select-none",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.title",
                  defaultMessage: "Product feed",
                  description: "Page title for merchant product feed settings",
                }),
              })),
              (ea[45] = t))
            : (t = ea[45]),
          ea[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = (0, a.jsxs)("header", {
                className: "flex flex-col gap-2",
                children: [
                  t,
                  (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedSubmissionSubtitle",
                      defaultMessage: "Submit a product feed to keep your catalog up to date",
                      description:
                        "Short subtitle at the top of Merchant settings, inviting merchants to submit product feeds to update their catalogs. Compression requirements depend on the upload method and file format.",
                    }),
                  }),
                ],
              })),
              (ea[46] = R))
            : (R = ea[46]),
          ea[47] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(u.A, {
                id: "merchantSettings.feedFormats.title",
                defaultMessage: "Supported formats",
                description:
                  "Heading above the upload-method format guidance in Product feed settings. Helps merchants choose a supported feed file format. Short heading.",
              })),
              (ea[47] = s))
            : (s = ea[47]),
          ea[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)("li", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.manual",
                  defaultMessage: "<method>Manual upload</method>: .jsonl.gz or .csv.gz",
                  description:
                    "Format row in the Product feed settings help panel for merchants uploading a file manually. The method tag emphasizes the upload method. Keep the two supported file extensions literal.",
                  values: { method: e8 },
                }),
              })),
              (ea[48] = i))
            : (i = ea[48]),
          ea[49] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, a.jsx)("li", {
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.hosted",
                  defaultMessage: "<method>Hosted URL</method>: gzipped JSONL; CSV, TSV or Parquet (gzip optional)",
                  description:
                    "Format row in the Product feed settings help panel for merchants providing a hosted URL. JSONL requires gzip; CSV, TSV and Parquet can be uncompressed or gzip-compressed. The method tag emphasizes the upload method. Keep JSONL, CSV, TSV, Parquet and gzip literal.",
                  values: { method: e7 },
                }),
              })),
              (ea[49] = n))
            : (n = ea[49]),
          ea[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsxs)("ul", {
                className: "flex flex-col gap-1",
                children: [
                  i,
                  n,
                  (0, a.jsx)("li", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.sftp",
                      defaultMessage: "<method>SFTP</method>: gzipped JSONL; CSV or TSV (gzip optional); Parquet",
                      description:
                        "Format row in the Product feed settings help panel for merchants sending files over SFTP. JSONL requires gzip; CSV and TSV can be uncompressed or gzip-compressed; externally gzip-compressed Parquet is not supported. The method tag emphasizes the upload method. Keep SFTP, JSONL, CSV, TSV, Parquet and gzip literal.",
                      values: { method: e6 },
                    }),
                  }),
                ],
              })),
              (ea[50] = r))
            : (r = ea[50]),
          ea[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.parquet",
                      defaultMessage: "Parquet with internal ZSTD compression keeps the .parquet extension",
                      description:
                        "File naming note in the Product feed settings help panel for merchants preparing Parquet feeds. ZSTD compression inside a Parquet file does not change its filename extension. Keep Parquet, ZSTD and .parquet literal.",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)(u.A, {
                      id: "merchantSettings.feedFormats.sftpSize",
                      defaultMessage:
                        "For SFTP, we recommend splitting large feeds into files of up to 500,000 records and under 500 MB each",
                      description:
                        "Size recommendation in the Product feed settings help panel for merchants splitting large SFTP feeds. These are approximate per-file recommendations, not enforced limits. Keep SFTP and MB literal.",
                    }),
                  }),
                ],
              })),
              (ea[51] = o))
            : (o = ea[51]),
          ea[52] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsx)(y.G, {
                href: "https://developers.openai.com/commerce/specs/file-upload/products",
                initiator: "open_in_browser_bridge",
                underline: "always",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.feedFormats.specifications",
                  defaultMessage: "Feed specifications",
                  description:
                    "Link in the Product feed settings help panel to the product feed schema, required fields and examples. Keep this label concise.",
                }),
              })),
              (ea[52] = l))
            : (l = ea[52]),
          ea[53] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, a.jsx)(g.l, {
                variant: "callout",
                layout: "vertical",
                title: s,
                content: (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    r,
                    o,
                    (0, a.jsxs)("div", {
                      className: "flex flex-wrap gap-3",
                      children: [
                        l,
                        (0, a.jsx)(y.G, {
                          href: "https://developers.openai.com/commerce/specs/file-upload/overview",
                          initiator: "open_in_browser_bridge",
                          underline: "always",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.feedFormats.uploadGuide",
                            defaultMessage: "Upload guide",
                            description:
                              "Link in the Product feed settings help panel to the file delivery, naming and update instructions. Keep this label concise.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              })),
              (ea[53] = P))
            : (P = ea[53]),
          (_ = ev),
          ea[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = (0, a.jsx)(u.A, {
                id: "merchantSettings.merchants",
                defaultMessage: "Merchants",
                description: "Merchant list section heading",
              })),
              (U = (0, a.jsx)(u.A, {
                id: "merchantSettings.merchantsDescription",
                defaultMessage: "Add a merchant, then select it to configure SFTP access and feed uploads below.",
                description: "Instructions for choosing a merchant",
              })),
              (ea[54] = F),
              (ea[55] = U))
            : ((F = ea[54]), (U = ea[55])),
          ea[56] !== eN
            ? ((A =
                eN &&
                (0, a.jsx)("p", {
                  role: "status",
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.loading",
                    defaultMessage: "Loading merchants…",
                    description: "Merchant list loading status",
                  }),
                })),
              (ea[56] = eN),
              (ea[57] = A))
            : (A = ea[57]),
          ea[58] !== ek || ea[59] !== eT || ea[60] !== eC
            ? ((M =
                eT &&
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-start gap-3 text-sm text-danger",
                  role: "alert",
                  children: [
                    ek instanceof j.fk && 403 === ek.status
                      ? (0, a.jsx)(u.A, {
                          id: "merchantSettings.workspaceAccessError",
                          defaultMessage:
                            "Merchant settings are unavailable in this workspace. Switch to an eligible workspace using your profile menu, then try again.",
                          description:
                            "Shown when the merchant list API denies workspace access; directs the user to the existing workspace switcher without changing eligibility",
                        })
                      : (0, a.jsx)(u.A, {
                          id: "merchantSettings.loadError",
                          defaultMessage: "Couldn’t load merchants",
                          description: "Error loading the merchant list",
                        }),
                    (0, a.jsx)(x.$, {
                      color: "outlineCard",
                      size: "actionSm",
                      onClick: () => void eC(),
                      children: (0, a.jsx)(u.A, {
                        id: "merchantSettings.retry",
                        defaultMessage: "Try again",
                        description: "Retries a failed merchant request",
                      }),
                    }),
                  ],
                })),
              (ea[58] = ek),
              (ea[59] = eT),
              (ea[60] = eC),
              (ea[61] = M))
            : (M = ea[61]),
          (N =
            !eN &&
            !eT &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        (0, a.jsx)("h3", {
                          className: "text-sm font-medium",
                          children: (0, a.jsx)(u.A, {
                            id: "merchantSettings.saved",
                            defaultMessage: "Saved merchants",
                            description: "Saved merchant list heading",
                          }),
                        }),
                        null != d &&
                          d.length > 0 &&
                          (0, a.jsx)("p", {
                            className: "mt-1 text-xs text-secondary",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.resultRange",
                              defaultMessage:
                                "Showing {first}-{last} of {count, plural, one {# merchant} other {# merchants}}",
                              description: "Visible range of filtered merchants",
                              values: { first: 10 * h + 1, last: Math.min((h + 1) * 10, d.length), count: d.length },
                            }),
                          }),
                      ],
                    }),
                    null != eM &&
                      eM.feeds.length > 0 &&
                      (0, a.jsxs)("div", {
                        className: "grid min-w-0 gap-2 sm:w-2/3 sm:grid-cols-[minmax(0,1fr)_12rem]",
                        children: [
                          (0, a.jsxs)("label", {
                            className: "flex min-w-0 flex-col gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs font-medium",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.searchLabel",
                                  defaultMessage: "Search merchants",
                                  description: "Merchant search label",
                                }),
                              }),
                              (0, a.jsx)(v.pd, {
                                variant: "default",
                                leadingControl: (0, a.jsx)(b.QmT, { className: "text-tertiary" }),
                                type: "search",
                                name: "merchant-search",
                                value: ep,
                                onChange: (e) => {
                                  ;(ef(e.target.value), eb(0))
                                },
                                placeholder: er.formatMessage({
                                  id: "merchantSettings.search",
                                  defaultMessage: "Search by merchant or feed ID",
                                  description: "Search field for saved merchants",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-xs font-medium",
                                children: (0, a.jsx)(u.A, {
                                  id: "merchantSettings.sort",
                                  defaultMessage: "Sort",
                                  description: "Sort order for saved merchants",
                                }),
                              }),
                              (0, a.jsx)(X, {
                                label: er.formatMessage({
                                  id: "merchantSettings.sort",
                                  defaultMessage: "Sort",
                                  description: "Sort order for saved merchants",
                                }),
                                value: eg,
                                onChange: (e) => {
                                  ;(ex(e), eb(0))
                                },
                                options: [
                                  {
                                    value: "newest",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.newest",
                                      defaultMessage: "Newest created",
                                      description: "Sort newest merchants first",
                                    }),
                                  },
                                  {
                                    value: "oldest",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.oldest",
                                      defaultMessage: "Oldest created",
                                      description: "Sort oldest merchants first",
                                    }),
                                  },
                                  {
                                    value: "name",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.nameAsc",
                                      defaultMessage: "Merchant A–Z",
                                      description: "Sort merchants by name ascending",
                                    }),
                                  },
                                  {
                                    value: "name-desc",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.nameDesc",
                                      defaultMessage: "Merchant Z–A",
                                      description: "Sort merchants by name descending",
                                    }),
                                  },
                                  {
                                    value: "id",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.idAsc",
                                      defaultMessage: "Feed ID A–Z",
                                      description: "Sort feed IDs ascending",
                                    }),
                                  },
                                  {
                                    value: "id-desc",
                                    label: (0, a.jsx)(u.A, {
                                      id: "merchantSettings.idDesc",
                                      defaultMessage: "Feed ID Z–A",
                                      description: "Sort feed IDs descending",
                                    }),
                                  },
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                d?.length === 0 &&
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col gap-1 rounded-md border border-subtle bg-(--color-background-secondary-soft)/40 px-3 py-3 text-sm",
                    children: [
                      (0, a.jsx)("p", {
                        className: "font-medium",
                        children:
                          eM?.feeds.length === 0
                            ? (0, a.jsx)(u.A, {
                                id: "merchantSettings.noMerchants",
                                defaultMessage: "No merchants yet",
                                description: "Empty merchant list heading",
                              })
                            : (0, a.jsx)(u.A, {
                                id: "merchantSettings.noSearchResults",
                                defaultMessage: "No merchants match your search",
                                description: "No saved merchants match the search",
                              }),
                      }),
                      (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children:
                          eM?.feeds.length === 0
                            ? (0, a.jsx)(u.A, {
                                id: "merchantSettings.noMerchantsHelpWithoutSftp",
                                defaultMessage:
                                  "Add your first merchant to start uploading feeds. You can set up SFTP separately if needed.",
                                description: "Explains how to create the first merchant",
                              })
                            : (0, a.jsx)(u.A, {
                                id: "merchantSettings.noSearchResultsHelp",
                                defaultMessage: "Try a merchant name or feed ID",
                                description: "Suggestion when merchant search returns no results",
                              }),
                      }),
                    ],
                  }),
                null != d &&
                  d.length > 0 &&
                  (0, a.jsxs)("div", {
                    className: "overflow-hidden rounded-lg border border-subtle",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_10rem_auto] gap-3 bg-(--color-background-secondary-soft)/40 px-3 py-2 text-xs font-medium text-secondary sm:grid",
                        children: [
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.merchantColumn",
                              defaultMessage: "Merchant",
                              description: "Merchant table name column",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.feedColumn",
                              defaultMessage: "Feed ID",
                              description: "Merchant table feed identifier column",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.createdColumn",
                              defaultMessage: "Created",
                              description: "Merchant table creation date column",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className: "text-end",
                            children: (0, a.jsx)(u.A, {
                              id: "merchantSettings.actionColumn",
                              defaultMessage: "Action",
                              description: "Merchant table action column",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("ul", {
                        className: "divide-y divide-border-subtle",
                        children: d
                          ?.slice(10 * h, (h + 1) * 10)
                          .map((e) =>
                            (0, a.jsxs)(
                              "li",
                              {
                                className:
                                  "grid gap-3 px-3 py-3 text-sm sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_10rem_auto] sm:items-center",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "min-w-0",
                                    children: (0, a.jsx)("p", {
                                      className: "truncate font-medium",
                                      children: e.merchant_name,
                                    }),
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "font-mono text-xs break-all text-secondary",
                                    children: e.feed_id,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-secondary",
                                    children: er.formatDate(e.created_at, { dateStyle: "medium", timeStyle: "short" }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex sm:justify-end",
                                    children: (0, a.jsx)(x.$, {
                                      size: "actionSm",
                                      color: "ghostActive",
                                      "aria-pressed": eI?.feed_id === e.feed_id,
                                      onClick: () => w(eI?.feed_id === e.feed_id ? null : e.feed_id),
                                      children:
                                        eI?.feed_id === e.feed_id
                                          ? (0, a.jsx)(u.A, {
                                              id: "merchantSettings.selected",
                                              defaultMessage: "Selected",
                                              description: "Selected merchant; click to clear selection",
                                            })
                                          : (0, a.jsx)(u.A, {
                                              id: "merchantSettings.select",
                                              defaultMessage: "Select",
                                              description: "Selects a merchant to manage its feed",
                                            }),
                                    }),
                                  }),
                                ],
                              },
                              e.feed_id,
                            ),
                          ),
                      }),
                    ],
                  }),
                c > 1 &&
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center justify-end gap-3 text-xs",
                    children: [
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        disabled: 0 === h,
                        onClick: () => eb(h - 1),
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.previous",
                          defaultMessage: "Previous",
                          description: "Previous merchant results page",
                        }),
                      }),
                      (0, a.jsx)(u.A, {
                        id: "merchantSettings.page",
                        defaultMessage: "Page {page} of {count}",
                        description: "Merchant pagination status",
                        values: { page: h + 1, count: c },
                      }),
                      (0, a.jsx)(x.$, {
                        color: "outlineCard",
                        size: "actionSm",
                        disabled: h + 1 >= c,
                        onClick: () => eb(h + 1),
                        children: (0, a.jsx)(u.A, {
                          id: "merchantSettings.next",
                          defaultMessage: "Next",
                          description: "Next merchant results page",
                        }),
                      }),
                    ],
                  }),
              ],
            })),
          (ea[21] = eM),
          (ea[22] = ek),
          (ea[23] = er),
          (ea[24] = eT),
          (ea[25] = eN),
          (ea[26] = ey),
          (ea[27] = eC),
          (ea[28] = ep),
          (ea[29] = eI?.feed_id),
          (ea[30] = em),
          (ea[31] = eg),
          (ea[32] = _),
          (ea[33] = w),
          (ea[34] = A),
          (ea[35] = M),
          (ea[36] = N),
          (ea[37] = T),
          (ea[38] = R),
          (ea[39] = P),
          (ea[40] = C),
          (ea[41] = F),
          (ea[42] = U))
      } else
        ((_ = ea[32]),
          (w = ea[33]),
          (A = ea[34]),
          (M = ea[35]),
          (N = ea[36]),
          (T = ea[37]),
          (R = ea[38]),
          (P = ea[39]),
          (C = ea[40]),
          (F = ea[41]),
          (U = ea[42]))
      ;(ea[62] !== eS || ea[63] !== eA || ea[64] !== ew || ea[65] !== w
        ? ((D =
            eS &&
            (0, a.jsx)(te, {
              onClose: () => ej(!1),
              onCreated: async (e) => {
                ;(ew.setQueryData(eA, (t) => ({ feeds: [...(t?.feeds ?? []), e] })),
                  w(e.feed_id),
                  ej(!1),
                  await ew.invalidateQueries({ queryKey: eA }))
              },
            })),
          (ea[62] = eS),
          (ea[63] = eA),
          (ea[64] = ew),
          (ea[65] = w),
          (ea[66] = D))
        : (D = ea[66]),
        ea[67] !== eS
          ? ((L =
              !eS &&
              (0, a.jsx)("div", {
                children: (0, a.jsx)(I, {
                  size: "dialog",
                  onClick: () => ej(!0),
                  children: (0, a.jsx)(u.A, {
                    id: "merchantSettings.add",
                    defaultMessage: "Add merchant",
                    description: "Opens the merchant creation form",
                  }),
                }),
              })),
            (ea[67] = eS),
            (ea[68] = L))
          : (L = ea[68]),
        ea[69] !== _ ||
        ea[70] !== A ||
        ea[71] !== M ||
        ea[72] !== N ||
        ea[73] !== D ||
        ea[74] !== L ||
        ea[75] !== F ||
        ea[76] !== U
          ? ((E = (0, a.jsxs)(_, { title: F, description: U, children: [A, M, N, D, L] })),
            (ea[69] = _),
            (ea[70] = A),
            (ea[71] = M),
            (ea[72] = N),
            (ea[73] = D),
            (ea[74] = L),
            (ea[75] = F),
            (ea[76] = U),
            (ea[77] = E))
          : (E = ea[77]),
        ea[78] !== eT || ea[79] !== eN || ea[80] !== eh || ea[81] !== eI
          ? ((q =
              !eN &&
              !eT &&
              eh.has("feed_id") &&
              !eI &&
              (0, a.jsx)("p", {
                role: "alert",
                children: (0, a.jsx)(u.A, {
                  id: "merchantSettings.unavailableMerchant",
                  defaultMessage:
                    "This merchant is unavailable in the current workspace. Select a merchant from the list.",
                  description: "A bookmarked feed is not in the current workspace's merchant list",
                }),
              })),
            (ea[78] = eT),
            (ea[79] = eN),
            (ea[80] = eh),
            (ea[81] = eI),
            (ea[82] = q))
          : (q = ea[82]))
      let eU = eI?.feed_id ?? "unselected",
        eD = eI?.feed_id ?? null,
        eL = eI?.sftp_created_at != null
      ea[83] !== eD || ea[84] !== eL
        ? ((O = (0, a.jsx)(e_, { feedId: eD, configured: eL })), (ea[83] = eD), (ea[84] = eL), (ea[85] = O))
        : (O = ea[85])
      let eE = eI?.feed_id ?? null
      ;(ea[86] !== eE ? ((H = (0, a.jsx)(eX, { feedId: eE })), (ea[86] = eE), (ea[87] = H)) : (H = ea[87]),
        ea[88] !== eU || ea[89] !== O || ea[90] !== H
          ? ((z = (0, a.jsxs)(
              "div",
              {
                className: "grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start",
                children: [O, H],
              },
              eU,
            )),
            (ea[88] = eU),
            (ea[89] = O),
            (ea[90] = H),
            (ea[91] = z))
          : (z = ea[91]),
        ea[92] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, a.jsx)(u.A, {
              id: "merchantSettings.activity",
              defaultMessage: "Feed activity",
              description: "Feed processing and issues section heading",
            })),
            (G = (0, a.jsx)(u.A, {
              id: "merchantSettings.activityDescription",
              defaultMessage: "Track processing progress, review results, and resolve feed issues.",
              description: "Description of feed activity",
            })),
            (ea[92] = B),
            (ea[93] = G))
          : ((B = ea[92]), (G = ea[93])),
        ea[94] !== er
          ? ((K = er.formatMessage({
              id: "merchantSettings.activityNavigation",
              defaultMessage: "Feed activity",
              description: "Feed activity navigation",
            })),
            (ea[94] = er),
            (ea[95] = K))
          : (K = ea[95]),
        ea[96] !== ed
          ? ((V = { key: "runs", name: ed, panelId: "merchant-feed-runs-panel" }), (ea[96] = ed), (ea[97] = V))
          : (V = ea[97]),
        ea[98] !== ec
          ? ((J = { key: "issues", name: ec, panelId: "merchant-feed-issues-panel" }), (ea[98] = ec), (ea[99] = J))
          : (J = ea[99]),
        ea[100] !== V || ea[101] !== J ? ((Z = [V, J]), (ea[100] = V), (ea[101] = J), (ea[102] = Z)) : (Z = ea[102]),
        ea[103] !== eo || ea[104] !== K || ea[105] !== Z
          ? (($ = (0, a.jsx)(S.t, { variant: "browse", ariaLabel: K, tabs: Z, selectedKey: eo, onSelect: el })),
            (ea[103] = eo),
            (ea[104] = K),
            (ea[105] = Z),
            (ea[106] = $))
          : ($ = ea[106]))
      let eq = "runs" === eo ? "merchant-feed-runs-panel" : "merchant-feed-issues-panel",
        eO = "runs" === eo ? "merchant-feed-runs-panel-tab" : "merchant-feed-issues-panel-tab"
      return (
        ea[107] !== eo || ea[108] !== eI?.feed_id
          ? ((W =
              "runs" === eo
                ? (0, a.jsx)(eu, { feedId: eI?.feed_id ?? null }, eI?.feed_id ?? "unselected")
                : (0, a.jsx)(ee, { feedId: eI?.feed_id ?? null }, eI?.feed_id ?? "unselected")),
            (ea[107] = eo),
            (ea[108] = eI?.feed_id),
            (ea[109] = W))
          : (W = ea[109]),
        ea[110] !== eq || ea[111] !== eO || ea[112] !== W
          ? ((Y = (0, a.jsx)("div", {
              id: eq,
              role: "tabpanel",
              "aria-labelledby": eO,
              className: "pt-4",
              children: W,
            })),
            (ea[110] = eq),
            (ea[111] = eO),
            (ea[112] = W),
            (ea[113] = Y))
          : (Y = ea[113]),
        ea[114] !== $ || ea[115] !== Y
          ? ((Q = (0, a.jsxs)(ev, { activity: !0, title: B, description: G, children: [$, Y] })),
            (ea[114] = $),
            (ea[115] = Y),
            (ea[116] = Q))
          : (Q = ea[116]),
        ea[117] !== T ||
        ea[118] !== R ||
        ea[119] !== P ||
        ea[120] !== E ||
        ea[121] !== q ||
        ea[122] !== z ||
        ea[123] !== Q
          ? ((et = (0, a.jsxs)("div", { className: T, children: [R, P, E, q, z, Q] })),
            (ea[117] = T),
            (ea[118] = R),
            (ea[119] = P),
            (ea[120] = E),
            (ea[121] = q),
            (ea[122] = z),
            (ea[123] = Q),
            (ea[124] = et))
          : (et = ea[124]),
        ea[125] !== C || ea[126] !== et
          ? ((es = (0, a.jsx)("div", { className: C, children: et })), (ea[125] = C), (ea[126] = et), (ea[127] = es))
          : (es = ea[127]),
        es
      )
    }
    function e6(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function e7(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function e8(e) {
      return (0, a.jsx)("strong", { className: "font-medium", children: e }, "method")
    }
    function e9(e) {
      let { signal: t } = e
      return p.Request.safeGet("/shopping/feeds", { signal: t, expectedErrorStatuses: [403] })
    }
    function te(e) {
      let t,
        s,
        n,
        r,
        l,
        h,
        g,
        y,
        b,
        S,
        _,
        w,
        A,
        M,
        N,
        R,
        P,
        C,
        F,
        U,
        D,
        L,
        E,
        q,
        O,
        H,
        z,
        B,
        G,
        K,
        V,
        J,
        Z,
        $,
        W,
        Y = (0, i.c)(95),
        { onCreated: Q, onClose: X } = e,
        ee = (0, c.A)(),
        { accountId: et, userId: es } = (0, m.As)(),
        ea = (0, d.useRef)(!1),
        [er, el] = (0, d.useState)("")
      Y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["US"]), (Y[0] = t)) : (t = Y[0])
      let [ed, ec] = (0, d.useState)(t)
      Y[1] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (Y[1] = s)) : (s = Y[1])
      let [eu, eh] = (0, d.useState)(s),
        em = ed.filter(ti),
        ep = eu.filter(ta),
        ef = em.length > 0 ? "country_invalid" : null,
        eg = 0 === ed.length ? "country_required" : ef,
        ex = null != eg,
        ey = ep.length > 0
      Y[2] !== ex || Y[3] !== ey || Y[4] !== er
        ? ((n = "" !== er.trim() && !ex && !ey), (Y[2] = ex), (Y[3] = ey), (Y[4] = er), (Y[5] = n))
        : (n = Y[5])
      let eb = n
      Y[6] !== ed || Y[7] !== eu || Y[8] !== er
        ? ((r = {
            mutationFn: () =>
              p.Request.safePost("/shopping/feeds", {
                requestBody: { merchant_name: er.trim(), supported_countries: ed, supported_currencies: eu },
              }),
          }),
          (Y[6] = ed),
          (Y[7] = eu),
          (Y[8] = er),
          (Y[9] = r))
        : (r = Y[9])
      let { mutate: eS, isPending: ev, isError: e_, error: ej, reset: ew } = (0, o.n)(r)
      ;(Y[10] !== ew ? ((l = () => ew()), (Y[10] = ew), (Y[11] = l)) : (l = Y[11]),
        Y[12] !== et || Y[13] !== eb || Y[14] !== eS || Y[15] !== Q || Y[16] !== es
          ? ((h = (e) => {
              ;(e.preventDefault(),
                eb &&
                  eS(void 0, {
                    onSuccess: (e) => void Q(e),
                    onError: (e) => k({ accountId: et, userId: es }, "merchant_create", e),
                  }))
            }),
            (Y[12] = et),
            (Y[13] = eb),
            (Y[14] = eS),
            (Y[15] = Q),
            (Y[16] = es),
            (Y[17] = h))
          : (h = Y[17]),
        Y[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)("h3", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.newMerchant",
                defaultMessage: "Add merchant",
                description: "New merchant form heading",
              }),
            })),
            (Y[18] = g))
          : (g = Y[18]),
        Y[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(u.A, {
              id: "merchantSettings.hideAdd",
              defaultMessage: "Hide",
              description: "Closes the merchant creation form",
            })),
            (Y[19] = y))
          : (y = Y[19]),
        Y[20] !== ev || Y[21] !== X
          ? ((b = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                g,
                (0, a.jsx)(x.$, { color: "ghostActive", size: "actionSm", disabled: ev, onClick: X, children: y }),
              ],
            })),
            (Y[20] = ev),
            (Y[21] = X),
            (Y[22] = b))
          : (b = Y[22]),
        Y[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(u.A, {
              id: "merchantSettings.requiredName",
              defaultMessage: "Merchant name *",
              description: "Name input for a new merchant; the asterisk indicates a required field",
            })),
            (Y[23] = S))
          : (S = Y[23]),
        Y[24] !== ee
          ? ((_ = ee.formatMessage({
              id: "merchantSettings.namePlaceholder",
              defaultMessage: "Acme Hardware",
              description: "Example merchant name",
            })),
            (Y[24] = ee),
            (Y[25] = _))
          : (_ = Y[25]),
        Y[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => el(e.target.value)), (Y[26] = w))
          : (w = Y[26]),
        Y[27] !== er || Y[28] !== _
          ? ((A = (0, a.jsxs)("label", {
              className: "flex flex-col gap-3 text-sm font-medium",
              children: [
                S,
                (0, a.jsx)(v.pd, {
                  variant: "default",
                  name: "merchant-name",
                  placeholder: _,
                  required: !0,
                  value: er,
                  onChange: w,
                }),
              ],
            })),
            (Y[27] = er),
            (Y[28] = _),
            (Y[29] = A))
          : (A = Y[29]),
        Y[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, a.jsx)("h4", {
              className: "text-sm font-semibold",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedTargets",
                defaultMessage: "Feed targets",
                description: "Supported markets section heading for a merchant product feed",
              }),
            })),
            (Y[30] = M))
          : (M = Y[30]),
        Y[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)("p", {
              className: "text-xs text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.feedMarketsReferenceHelp",
                defaultMessage:
                  "Choose target countries and price currencies for this feed. Listed codes do not establish market availability",
                description:
                  "Helper text in the merchant creation form explaining the target countries and supported currencies for a merchant product feed",
              }),
            })),
            (Y[31] = N))
          : (N = Y[31]),
        Y[32] !== ee
          ? ((R = ee.formatMessage({
              id: "merchantSettings.countries",
              defaultMessage: "Target countries",
              description: "Country multi-select label in Add merchant",
            })),
            (Y[32] = ee),
            (Y[33] = R))
          : (R = Y[33]),
        Y[34] !== ew
          ? ((P = (e) => {
              ;((ea.current = !0), ec(e), ew())
            }),
            (Y[34] = ew),
            (Y[35] = P))
          : (P = Y[35]),
        Y[36] !== et || Y[37] !== eg || Y[38] !== es
          ? ((C = () => {
              ea.current && (T({ accountId: et, userId: es }, "merchant_country", eg), (ea.current = !1))
            }),
            (Y[36] = et),
            (Y[37] = eg),
            (Y[38] = es),
            (Y[39] = C))
          : (C = Y[39]),
        Y[40] !== ed || Y[41] !== ex || Y[42] !== ev || Y[43] !== R || Y[44] !== P || Y[45] !== C
          ? ((F = (0, a.jsx)(eo, {
              label: R,
              codes: ei,
              type: "region",
              value: ed,
              disabled: ev,
              invalid: ex,
              describedBy: "merchant-country-help",
              onChange: P,
              onBlur: C,
            })),
            (Y[40] = ed),
            (Y[41] = ex),
            (Y[42] = ev),
            (Y[43] = R),
            (Y[44] = P),
            (Y[45] = C),
            (Y[46] = F))
          : (F = Y[46]),
        Y[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, a.jsx)("strong", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.countriesReference",
                defaultMessage: "Select one or more country codes from the <reference>reference list</reference>",
                description:
                  "Help below the required country multi-select. The reference tag links to the public merchant code reference PDF.",
                values: { reference: ts },
              }),
            })),
            (Y[47] = U))
          : (U = Y[47]))
      let eA =
        ex &&
        (0, a.jsx)("p", {
          role: "alert",
          className: "text-danger",
          children:
            0 === ed.length
              ? (0, a.jsx)(u.A, {
                  id: "merchantSettings.countriesSelectionRequired",
                  defaultMessage: "Select at least one target country",
                  description: "Validation error when all target countries have been removed from Add merchant",
                })
              : (0, a.jsx)(u.A, {
                  id: "merchantSettings.countriesOutsideReference",
                  defaultMessage: "Countries outside the reference: {codes}",
                  description:
                    "Error listing country codes that cannot be submitted because they are absent from the merchant reference",
                  values: { codes: em.join(", ") },
                }),
        })
      ;(Y[48] !== eA
        ? ((D = (0, a.jsxs)("div", {
            id: "merchant-country-help",
            className: "text-xs text-secondary",
            children: [U, eA],
          })),
          (Y[48] = eA),
          (Y[49] = D))
        : (D = Y[49]),
        Y[50] !== F || Y[51] !== D
          ? ((L = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [F, D] })),
            (Y[50] = F),
            (Y[51] = D),
            (Y[52] = L))
          : (L = Y[52]),
        Y[53] !== ee
          ? ((E = ee.formatMessage({
              id: "merchantSettings.currencies",
              defaultMessage: "Supported currencies",
              description: "Optional currency multi-select label in Add merchant",
            })),
            (Y[53] = ee),
            (Y[54] = E))
          : (E = Y[54]),
        Y[55] !== ew
          ? ((q = (e) => {
              ;(eh(e), ew())
            }),
            (Y[55] = ew),
            (Y[56] = q))
          : (q = Y[56]),
        Y[57] !== eu || Y[58] !== ey || Y[59] !== ev || Y[60] !== E || Y[61] !== q
          ? ((O = (0, a.jsx)(eo, {
              label: E,
              codes: en,
              type: "currency",
              value: eu,
              disabled: ev,
              invalid: ey,
              describedBy: "merchant-currency-help",
              onChange: q,
            })),
            (Y[57] = eu),
            (Y[58] = ey),
            (Y[59] = ev),
            (Y[60] = E),
            (Y[61] = q),
            (Y[62] = O))
          : (O = Y[62]),
        Y[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, a.jsx)("strong", {
              children: (0, a.jsx)(u.A, {
                id: "merchantSettings.currenciesReference",
                defaultMessage:
                  "Optional. Select currencies from the <reference>reference list</reference>, independently of countries",
                description:
                  "Help below the optional currency multi-select. The reference tag links to the public merchant code reference PDF. Currency choices do not depend on selected countries.",
                values: { reference: tt },
              }),
            })),
            (Y[63] = H))
          : (H = Y[63]))
      let eM =
        ey &&
        (0, a.jsx)("p", {
          role: "alert",
          className: "text-danger",
          children: (0, a.jsx)(u.A, {
            id: "merchantSettings.currenciesOutsideReference",
            defaultMessage: "Currencies outside the reference: {codes}",
            description:
              "Error listing currency codes that cannot be submitted because they are absent from the merchant reference",
            values: { codes: ep.join(", ") },
          }),
        })
      ;(Y[64] !== H || Y[65] !== eM
        ? ((z = (0, a.jsxs)("div", {
            id: "merchant-currency-help",
            className: "text-xs text-secondary",
            children: [H, eM],
          })),
          (Y[64] = H),
          (Y[65] = eM),
          (Y[66] = z))
        : (z = Y[66]),
        Y[67] !== O || Y[68] !== z
          ? ((B = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [O, z] })),
            (Y[67] = O),
            (Y[68] = z),
            (Y[69] = B))
          : (B = Y[69]),
        Y[70] !== L || Y[71] !== B
          ? ((G = (0, a.jsxs)("div", { className: "grid gap-3 sm:grid-cols-2", children: [L, B] })),
            (Y[70] = L),
            (Y[71] = B),
            (Y[72] = G))
          : (G = Y[72]),
        Y[73] !== M || Y[74] !== N || Y[75] !== G
          ? ((K = (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 border-t border-subtle pt-4",
              children: [M, N, G],
            })),
            (Y[73] = M),
            (Y[74] = N),
            (Y[75] = G),
            (Y[76] = K))
          : (K = Y[76]),
        Y[77] !== ej || Y[78] !== e_
          ? ((V =
              e_ &&
              (0, a.jsx)("p", {
                role: "alert",
                children:
                  ej instanceof j.fk &&
                  ej.diagnosticError instanceof f.rX &&
                  "merchant_workspace_analytics_viewer" === ej.diagnosticError.code
                    ? (0, a.jsx)(u.A, {
                        id: "merchantSettings.workspaceAnalyticsViewer",
                        defaultMessage:
                          "To add a merchant, your role in the selected workspace must be standard-user, account-admin, or account-owner. The analytics-viewer role cannot add merchants. Ask a workspace owner or admin to check your role.",
                        description:
                          "Error in the Add merchant form when the selected workspace has a verified analytics-viewer membership. Explain the roles required to add a merchant and ask an owner or admin for help. Keep the role identifiers untranslated.",
                      })
                    : (0, a.jsx)(u.A, {
                        id: "merchantSettings.createError",
                        defaultMessage: "Couldn’t add the merchant. Check the details and try again.",
                        description: "Merchant creation failed; the form remains editable for retry",
                      }),
              })),
            (Y[77] = ej),
            (Y[78] = e_),
            (Y[79] = V))
          : (V = Y[79]))
      let eN = !eb
      return (
        Y[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, a.jsx)(u.A, {
              id: "merchantSettings.createMerchant",
              defaultMessage: "Add merchant",
              description: "Saves a merchant; SFTP can be set up separately after saving",
            })),
            (Y[80] = J))
          : (J = Y[80]),
        Y[81] !== ev || Y[82] !== eN
          ? ((Z = (0, a.jsx)(I, {
              className: "self-start",
              type: "submit",
              size: "dialog",
              loading: ev,
              disabled: eN,
              children: J,
            })),
            (Y[81] = ev),
            (Y[82] = eN),
            (Y[83] = Z))
          : (Z = Y[83]),
        Y[84] !== ev || Y[85] !== A || Y[86] !== K || Y[87] !== V || Y[88] !== Z
          ? (($ = (0, a.jsxs)("fieldset", {
              className: "flex min-w-0 flex-col gap-3",
              disabled: ev,
              children: [A, K, V, Z],
            })),
            (Y[84] = ev),
            (Y[85] = A),
            (Y[86] = K),
            (Y[87] = V),
            (Y[88] = Z),
            (Y[89] = $))
          : ($ = Y[89]),
        Y[90] !== b || Y[91] !== $ || Y[92] !== l || Y[93] !== h
          ? ((W = (0, a.jsxs)("form", {
              className: "flex flex-col gap-3 rounded-md border border-subtle p-3",
              onChange: l,
              onSubmit: h,
              children: [b, $],
            })),
            (Y[90] = b),
            (Y[91] = $),
            (Y[92] = l),
            (Y[93] = h),
            (Y[94] = W))
          : (W = Y[94]),
        W
      )
    }
    function tt(e) {
      return (0, a.jsx)(
        y.G,
        { href: e3, initiator: "open_in_browser_bridge", underline: "always", children: e },
        "reference",
      )
    }
    function ts(e) {
      return (0, a.jsx)(
        y.G,
        { href: e3, initiator: "open_in_browser_bridge", underline: "always", children: e },
        "reference",
      )
    }
    function ta(e) {
      return !en.includes(e)
    }
    function ti(e) {
      return !ei.includes(e)
    }
  },
}
//# sourceMappingURL=918359.76465246d1.js.map
