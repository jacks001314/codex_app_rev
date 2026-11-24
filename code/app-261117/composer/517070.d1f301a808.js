export const __rspack_esm_ids = [517070]
export const __webpack_modules__ = {
  OQ1m(e, t, s) {
    let a = (e) =>
        `https://openaiassets.blob.core.windows.net/$web/chatgpt/clients/fineng/ConsumerBillingPage/paymen_method_icons_svg/${e}`,
      l = {
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
    s.d(t, {}, { K: l })
  },
  MBXf(e, t, s) {
    s.d(t, { WalletUserVerificationRequestCard: () => eo })
    var a = s("ABep"),
      l = s("QosV"),
      i = s("qmMi"),
      n = s("zd8w"),
      r = s("Wf1j"),
      o = s("oyxz"),
      c = s("SPnB"),
      m = s("WNfT"),
      d = s("OWtl"),
      u = s("Qgfj"),
      p = s("pk2R")
    let f = p.Ik({
        label: C(200),
        url: C(2048).refine((e) => /^https?:\/\/[^\s/@\\?#]+(?::[0-9]+)?(?:[/?#][^\s\\]*)?$/.test(e)),
      }),
      x = p.Ik({
        rows: p
          .YO(p.Ik({ title: C(200), subtitle: C(2e3).optional() }))
          .max(30)
          .optional(),
        text: C(6e3).optional(),
        links: p.YO(f).max(10).optional(),
      }),
      g = p.Ik({ title: C(200), subtitle: C(512).optional() }),
      h = p
        .Yj()
        .regex(/^-?[0-9]+(?:\.[0-9]{1,2})?$/)
        .refine((e) => Number.isFinite(Number(e))),
      y = p
        .Ik({
          merchant: C(120),
          amount: h.refine((e) => !e.startsWith("-")),
          currency: p
            .Yj()
            .regex(/^[A-Za-z]{3}$/)
            .transform((e) => e.toUpperCase()),
          cartLineItems: p
            .YO(p.Ik({ name: C(200), displayName: C(120).optional(), quantity: p.ai().finite().positive().optional() }))
            .min(1)
            .max(50)
            .optional(),
          sellerName: C(120).optional(),
          isRecurring: p.zM().optional(),
          shippingAddress: C(512).optional(),
          shippingAddressSummary: C(200).optional(),
          shipping: g.optional(),
          condition: g.optional(),
          returns: g.optional(),
          paymentMethod: p
            .Ik({
              last4: p
                .Yj()
                .regex(/^[0-9]{4}$/)
                .optional(),
              displayName: C(120).optional(),
              brand: C(32)
                .transform((e) => e.toLowerCase())
                .optional(),
            })
            .optional(),
          termsAndConditionsUrl: f.shape.url.optional(),
          additionalDisclosures: p.YO(p.Ik({ title: C(200), subtitle: C(2e3).optional() })).optional(),
          review: p
            .Ik({
              version: p.eu(1),
              priceBreakdown: p
                .YO(p.Ik({ label: C(200), amount: h, isEstimatedTax: p.zM().optional() }))
                .min(1)
                .max(30),
              commitment: p.Ik({
                kind: p.k5(["one_time", "subscription", "free_trial", "deposit", "pay_later", "installment"]),
                summary: C(4e3),
                details: x.optional(),
              }),
              sellerDetails: x.optional(),
              deliveryDetails: x.optional(),
              destinationDetails: x.optional(),
              agreement: p.Ik({ title: C(200), subtitle: C(4e3).optional(), details: x.optional() }).optional(),
              productDetails: x.optional(),
              returnDetails: x.optional(),
              blockingReasons: p.YO(C(1e3)).max(20).optional(),
            })
            .optional(),
        })
        .refine((e) => {
          let { review: t, amount: s } = e
          if (!t) return Number(s) > 0
          if (
            !e.cartLineItems?.every((e) => null != e.quantity) ||
            !e.paymentMethod?.last4 ||
            (0 === Number(s) && "free_trial" !== t.commitment.kind && "pay_later" !== t.commitment.kind) ||
            (e.isRecurring && "one_time" === t.commitment.kind)
          )
            return !1
          let a = 0
          for (let e of t.priceBreakdown) {
            let t = M(e.amount)
            if (((a += t), !Number.isSafeInteger(t) || !Number.isSafeInteger(a))) return !1
          }
          return Number.isSafeInteger(M(s)) && a === M(s)
        }),
      b = p.Ik({ challenge: p.Yj().trim().min(1), metadata: p.Ik({ "openai/transaction": y }) })
    function v(e, t) {
      let { amount: s, currencyCode: a } = j(e, t)
      return a ? t.formatMessage(w, { amount: s, currencyCode: a }) : s
    }
    let w = (0, u.zR)({
      id: "composer.walletRequest.amountWithCurrencyCode",
      defaultMessage: "{amount}\xa0{currencyCode}",
    })
    function j(e, t) {
      let { amount: s, currency: a } = e,
        [l, i = ""] = s.split("."),
        n = Number(s)
      if (n.toFixed(2) !== `${l.replace(/^0+(?=[0-9])/, "")}.${i.padEnd(2, "0")}`) return { amount: `${a} ${s}` }
      let r = { style: "currency", currency: a, minimumFractionDigits: 2, maximumFractionDigits: 2 },
        o = t.formatNumberToParts(n, r),
        c = o.map((e) => e.value).join(""),
        m = o.find((e) => "currency" === e.type)?.value
      if ("$" !== m && m?.includes("$")) {
        let e = t.formatNumber(n, { ...r, currencyDisplay: "narrowSymbol" })
        if (e !== c) return { amount: e, currencyCode: a }
      }
      return { amount: c }
    }
    function C(e) {
      return p
        .Yj()
        .trim()
        .min(1)
        .refine((t) => {
          let s = Array.from(t)
          return (
            s.length <= e &&
            !s.some((e) => {
              let t = e.charCodeAt(0)
              return (
                (t < 32 && 9 !== t && 10 !== t) || 127 === t || (t >= 8234 && t <= 8238) || (t >= 8294 && t <= 8297)
              )
            })
          )
        })
    }
    function M(e) {
      let [t, s = ""] = e.split(".")
      return Number(`${t}${s.padEnd(2, "0")}`)
    }
    var k = s("VlIS"),
      N = s("TnUT"),
      A = s("ESTr")
    let R = (0, A.a)({
      name: "truck-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.142578, y: 2.549805, width: 13.714844, height: 10.900391 },
        visualBounds: { x: 1.142578, y: 2.549805, width: 13.714844, height: 10.900391 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.142578, y: 2.549805, width: 13.714844, height: 10.900391 },
        center: { x: 8, y: 8.000001 },
        insets: { top: 2.549805, right: 1.142578, bottom: 2.549804, left: 1.142578 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.000001 }, foreground: { x: 8, y: 8.000001 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.86816 2.5498C8.23264 2.5498 8.53756 2.55002 8.78613 2.57031C9.04094 2.59113 9.28277 2.63627 9.51172 2.75293C9.86128 2.93108 10.1461 3.2149 10.3242 3.56445C10.4292 3.77045 10.4755 3.98695 10.499 4.21387H11.3965C11.67 4.21673 11.9041 4.23182 12.124 4.30176C12.3669 4.37912 12.5923 4.50606 12.7842 4.67383C13.0153 4.87625 13.1748 5.15101 13.3838 5.49609L14.4727 7.29492C14.5787 7.47003 14.6644 7.60665 14.7246 7.75684C14.7747 7.88203 14.8111 8.01343 14.833 8.14648C14.8592 8.30601 14.8574 8.46723 14.8574 8.67188V9.38574C14.8574 9.69834 14.8578 9.96068 14.8428 10.1748C14.8273 10.3937 14.7936 10.6026 14.707 10.8047C14.5191 11.2431 14.1698 11.5933 13.7314 11.7812C13.5293 11.8679 13.3196 11.9006 13.1006 11.916C12.947 11.9268 12.7683 11.928 12.5645 11.9287C12.3339 12.8035 11.5406 13.45 10.5938 13.4502C9.65136 13.45 8.85969 12.8099 8.625 11.9414H6.81738C6.5825 12.81 5.79119 13.4502 4.84863 13.4502C3.88686 13.45 3.0821 12.7835 2.86621 11.8877C1.88098 11.6721 1.14278 10.7969 1.14258 9.74707V5.20898C1.14258 4.84428 1.14277 4.53871 1.16309 4.29004C1.18391 4.03525 1.22905 3.7934 1.3457 3.56445C1.52381 3.2151 1.80788 2.93104 2.15723 2.75293C2.38617 2.63628 2.62802 2.59113 2.88281 2.57031C3.13149 2.55 3.43705 2.5498 3.80176 2.5498H7.86816ZM4.84863 10.418C4.30882 10.4182 3.87105 10.8497 3.85938 11.3867C3.85991 11.3965 3.8623 11.4061 3.8623 11.416C3.8623 11.4239 3.85972 11.4316 3.85938 11.4395C3.87587 11.9722 4.31194 12.3992 4.84863 12.3994C5.396 12.3994 5.83984 11.9556 5.83984 11.4082C5.83959 10.8611 5.39584 10.418 4.84863 10.418ZM10.5938 10.418C10.0468 10.4182 9.60377 10.8612 9.60352 11.4082C9.60352 11.9554 10.0466 12.3992 10.5938 12.3994C11.1409 12.3991 11.585 11.9554 11.585 11.4082C11.5847 10.8612 11.1407 10.4182 10.5938 10.418ZM3.80176 3.60059C3.42002 3.60059 3.16469 3.60023 2.96875 3.61621C2.77919 3.6317 2.69104 3.65986 2.63477 3.68848C2.48267 3.76597 2.35875 3.88989 2.28125 4.04199C2.25263 4.09827 2.22447 4.18642 2.20898 4.37598C2.19301 4.57191 2.19336 4.82725 2.19336 5.20898V9.74707C2.19354 10.2233 2.48464 10.6307 2.89844 10.8027C3.15653 9.97127 3.93248 9.36739 4.84863 9.36719C5.79665 9.36719 6.59157 10.0145 6.82129 10.8906H8.62109C8.7508 10.3956 9.05958 9.97346 9.47656 9.7002V5.20898C9.47656 4.82723 9.47594 4.57192 9.45996 4.37598C9.4445 4.18671 9.41724 4.09828 9.38867 4.04199C9.31121 3.88997 9.18714 3.76598 9.03516 3.68848C8.97891 3.65982 8.89091 3.63173 8.70117 3.61621C8.50521 3.6002 8.25009 3.60059 7.86816 3.60059H3.80176ZM10.5264 9.37012C10.5486 9.3694 10.5713 9.36719 10.5938 9.36719C11.5373 9.36741 12.3288 10.0089 12.5625 10.8789C12.7578 10.8783 12.9058 10.8777 13.0273 10.8691C13.1909 10.8576 13.2682 10.8365 13.3174 10.8154C13.5079 10.7337 13.6604 10.5821 13.7422 10.3916C13.7633 10.3424 13.7834 10.2643 13.7949 10.1006C13.8068 9.93182 13.8076 9.71296 13.8076 9.38574V8.67188C13.8076 8.4343 13.806 8.37183 13.7969 8.31641C13.7873 8.25879 13.7717 8.20168 13.75 8.14746C13.7291 8.09527 13.6982 8.04198 13.5752 7.83887L12.4854 6.03906C12.2411 5.63566 12.1724 5.53368 12.0928 5.46387C12.0094 5.391 11.9111 5.3364 11.8057 5.30273C11.7046 5.27058 11.582 5.26465 11.1094 5.26465H10.5264V9.37012Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    var D = s("HOLv"),
      T = s("bVeK"),
      q = s("on57"),
      S = s("OQ1m")
    function _(e, t) {
      let { review: s, condition: a, returns: l, shipping: i, shippingAddress: n } = e,
        r = (function (e, t) {
          switch (e.review?.commitment.kind) {
            case "one_time":
              return
            case "subscription":
              return t.formatMessage(L.subscription)
            case "free_trial":
              return t.formatMessage(L.freeTrial)
            case "deposit":
              return t.formatMessage(L.deposit)
            case "pay_later":
              return t.formatMessage(L.payLater)
            case "installment":
              return t.formatMessage(L.installment)
            case void 0:
              if (null == e.isRecurring) return
              return e.isRecurring ? t.formatMessage(L.recurringPayment) : t.formatMessage(L.oneTimePayment)
          }
        })(e, t),
        o = []
      ;(r &&
        o.push({
          title: t.formatMessage(L.paymentDetails),
          content: {
            ...s?.commitment.details,
            rows: [{ title: t.formatMessage(L.paymentType), subtitle: r }, ...(s?.commitment.details?.rows ?? [])],
            text: [s?.commitment.summary, s?.commitment.details?.text].filter(Boolean).join("\n\n"),
          },
        }),
        e.cartLineItems &&
          o.push({
            title: t.formatMessage(L.items),
            content: {
              rows: e.cartLineItems.map((e) => ({
                title:
                  null == e.quantity
                    ? e.name
                    : t.formatMessage(
                        { id: "composer.walletRequest.itemQuantity", defaultMessage: "{name} \xd7 {quantity}" },
                        { name: e.name, quantity: e.quantity },
                      ),
              })),
            },
          }),
        o.push({
          title: t.formatMessage(L.priceBreakdown),
          content: {
            rows: [
              ...(s?.priceBreakdown.map((s) => ({
                title: s.label,
                isEstimatedTax: s.isEstimatedTax,
                subtitle: v({ ...e, amount: s.amount }, t),
              })) ?? []),
            ],
          },
          total: { title: t.formatMessage(L.total), subtitle: v(e, t) },
        }))
      let c = s?.commitment.kind === "one_time" ? s.commitment : void 0
      if (c || s?.agreement || e.termsAndConditionsUrl) {
        let a = new Map([...(c?.details?.links ?? []), ...(s?.agreement?.details?.links ?? [])].map((e) => [e.url, e]))
        ;(e.termsAndConditionsUrl &&
          a.set(e.termsAndConditionsUrl, {
            label: t.formatMessage(L.viewOnSellersWebsite),
            url: e.termsAndConditionsUrl,
          }),
          o.push({
            title: t.formatMessage(L.termsAndConditions),
            content: {
              rows: [
                ...(c?.details?.rows ?? []),
                ...(s?.agreement ? [{ title: s.agreement.title, subtitle: s.agreement.subtitle }] : []),
                ...(s?.agreement?.details?.rows ?? []),
              ],
              text: [c?.summary, c?.details?.text, s?.agreement?.details?.text].filter(Boolean).join("\n\n"),
              links: Array.from(a.values()),
            },
          }))
      }
      for (let i of ((a || s?.productDetails) &&
        o.push({
          title: t.formatMessage(L.productDetails),
          content: {
            ...s?.productDetails,
            rows: [
              ...(a ? [{ title: t.formatMessage(L.condition), subtitle: a.title }] : []),
              ...(s?.productDetails?.rows ?? []),
            ],
            text: [a?.subtitle, s?.productDetails?.text].filter(Boolean).join("\n\n"),
          },
        }),
      (l || s?.returnDetails) &&
        o.push({
          title: t.formatMessage(L.returnDetails),
          content: {
            ...s?.returnDetails,
            rows: [...(l ? [{ title: l.title }] : []), ...(s?.returnDetails?.rows ?? [])],
            text: [l?.subtitle, s?.returnDetails?.text].filter(Boolean).join("\n\n"),
          },
        }),
      e.additionalDisclosures ?? []))
        o.push(I(i.title, i.subtitle))
      let m = e.sellerName !== e.merchant ? e.sellerName : void 0
      ;(m || s?.sellerDetails) &&
        o.push({
          title: t.formatMessage(L.sellerDetails),
          content: {
            ...s?.sellerDetails,
            rows: [
              ...(m ? [{ title: t.formatMessage(L.seller, { seller: m }) }] : []),
              ...(s?.sellerDetails?.rows ?? []),
            ],
          },
        })
      let d = {
          title: t.formatMessage(L.deliveryDetails),
          sections: [
            ...(i || s?.deliveryDetails
              ? [
                  {
                    title: t.formatMessage(L.shipping),
                    content: { ...s?.deliveryDetails, rows: [...(i ? [i] : []), ...(s?.deliveryDetails?.rows ?? [])] },
                  },
                ]
              : []),
            ...(n ? [{ title: t.formatMessage(L.destinationDetails), content: { text: n } }] : []),
          ],
        },
        u = s?.destinationDetails
      for (let e of u?.rows ?? []) d.sections.push(I(e.title, e.subtitle))
      ;(u?.text || u?.links?.length) &&
        d.sections.push({
          title: n || u.rows?.length || !u.text ? void 0 : t.formatMessage(L.destinationDetails),
          content: { text: u.text, links: u.links },
        })
      let p = s?.commitment.kind === "subscription" || s?.commitment.kind === "free_trial" || !0 === e.isRecurring,
        f = e.cartLineItems?.[0],
        x = t.formatMessage(L.purchaseDetails),
        g = f?.displayName ?? f?.name ?? x
      return {
        purchaseSummaryTitle:
          f?.quantity != null && 1 !== f.quantity
            ? t.formatMessage(
                { id: "composer.walletRequest.summaryItemQuantity", defaultMessage: "{quantity} \xd7 {name}" },
                { quantity: String(f.quantity), name: g },
              )
            : g,
        deliverySummaryTitle: i?.title ?? (n ? t.formatMessage(L.shipping) : d.title),
        deliverySummaryAddress: n ? (e.shippingAddressSummary ?? n) : void 0,
        purchase: { title: x, sections: p ? [...o, ...d.sections] : o },
        delivery: d,
        billingStatus: r,
        isSubscription: p,
      }
    }
    function I(e, t) {
      return { title: null == t ? void 0 : e, content: { text: t ?? e } }
    }
    let L = (0, u.YK)({
      paymentDetails: { id: "composer.walletRequest.paymentDetails", defaultMessage: "Payment details" },
      items: { id: "composer.walletRequest.items", defaultMessage: "Items" },
      priceBreakdown: { id: "composer.walletRequest.priceBreakdown", defaultMessage: "Price breakdown" },
      paymentType: { id: "composer.walletRequest.paymentType", defaultMessage: "Type" },
      subscription: { id: "composer.walletRequest.subscription", defaultMessage: "Subscription" },
      freeTrial: { id: "composer.walletRequest.freeTrial", defaultMessage: "Free trial" },
      deposit: { id: "composer.walletRequest.deposit", defaultMessage: "Deposit" },
      payLater: { id: "composer.walletRequest.payLater", defaultMessage: "Pay later" },
      installment: { id: "composer.walletRequest.installment", defaultMessage: "1st installment" },
      recurringPayment: { id: "composer.walletRequest.recurringPayment", defaultMessage: "Recurring payment" },
      oneTimePayment: { id: "composer.walletRequest.oneTimePayment", defaultMessage: "One-time payment" },
      purchaseDetails: { id: "composer.walletRequest.purchaseDetails", defaultMessage: "Purchase details" },
      deliveryDetails: { id: "composer.walletRequest.deliveryDetails", defaultMessage: "Delivery" },
      productDetails: { id: "composer.walletRequest.productDetails", defaultMessage: "Item details" },
      returnDetails: { id: "composer.walletRequest.returnDetails", defaultMessage: "Returns" },
      sellerDetails: { id: "composer.walletRequest.sellerDetails", defaultMessage: "Seller details" },
      destinationDetails: { id: "composer.walletRequest.destinationDetails", defaultMessage: "Shipping address" },
      shipping: { id: "composer.walletRequest.shipping", defaultMessage: "Shipping" },
      condition: { id: "composer.walletRequest.condition", defaultMessage: "Condition" },
      seller: { id: "composer.walletRequest.seller", defaultMessage: "Sold by {seller}" },
      merchant: { id: "composer.walletRequest.merchant", defaultMessage: "Paying {merchant}" },
      total: { id: "composer.walletRequest.total", defaultMessage: "Total" },
      wallet: { id: "composer.walletRequest.wallet", defaultMessage: "Wallet" },
      cancel: { id: "composer.walletRequest.cancel", defaultMessage: "Cancel" },
      verifying: { id: "composer.walletRequest.verifying", defaultMessage: "Verifying\u2026" },
      termsAndConditions: { id: "composer.walletRequest.termsAndConditions", defaultMessage: "Terms and conditions" },
      viewOnSellersWebsite: {
        id: "composer.walletRequest.viewOnSellersWebsite",
        defaultMessage: "View on seller\u2019s website",
      },
      invalidRequest: {
        id: "composer.walletRequest.invalidRequest",
        defaultMessage: "This approval request couldn\u2019t be displayed",
      },
      unavailable: {
        id: "composer.walletRequest.unavailable",
        defaultMessage: "This purchase can\u2019t be approved right now",
      },
      estimatedTaxTitle: { id: "composer.walletRequest.estimatedTaxTitle", defaultMessage: "Tax is estimated" },
      closeTaxTooltip: { id: "composer.walletRequest.closeTaxTooltip", defaultMessage: "Close tax information" },
      estimatedTaxDescription: {
        id: "composer.walletRequest.estimatedTaxDescription",
        defaultMessage: "Final tax will be calculated at the moment of sale. May vary slightly.",
      },
      estimatedTaxInfo: { id: "composer.walletRequest.estimatedTaxInfo", defaultMessage: "About estimated tax" },
    })
    var P = "secondary-pGElSI",
      H = "border-aNJrkL"
    function B(e) {
      let t,
        s,
        i,
        n,
        c = (0, l.c)(9),
        { transaction: m } = e,
        d = (0, r.A)()
      c[0] !== d || c[1] !== m ? ((t = j(m, d)), (c[0] = d), (c[1] = m), (c[2] = t)) : (t = c[2])
      let { amount: u, currencyCode: p } = t
      return p
        ? (c[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, q.A)("text-xs font-normal", P)), (c[3] = s))
            : (s = c[3]),
          c[4] !== p
            ? ((i = (0, a.jsx)("small", { className: s, children: p }, "currencyCode")), (c[4] = p), (c[5] = i))
            : (i = c[5]),
          c[6] !== u || c[7] !== i
            ? ((n = (0, a.jsx)(o.A, { ...w, values: { amount: u, currencyCode: i } })),
              (c[6] = u),
              (c[7] = i),
              (c[8] = n))
            : (n = c[8]),
          n)
        : u
    }
    function $(e) {
      let t,
        s,
        i,
        r,
        c,
        m,
        d,
        u,
        p = (0, l.c)(22),
        { payment: f, fallbackIcon: x } = e,
        [g, h] = (0, n.useState)()
      p[0] !== f?.brand
        ? ((t = f?.brand?.toLowerCase().replace(/[^a-z]/g, "")), (p[0] = f?.brand), (p[1] = t))
        : (t = p[1])
      let y = t,
        b = "amex" === y || "americanexpress" === y
      return (
        p[2] !== b || p[3] !== f
          ? (b
              ? (s =
                  "https://persistent.oaistatic.com/wallet/card-art/amex-f2f09bf918095a7dc6f118226891871f9626cf8ce5b98c5bc9613163cba5a63f.svg")
              : (f?.brand === "visa" || f?.brand === "mastercard") && (s = S.K[f.brand]),
            (p[2] = b),
            (p[3] = f),
            (p[4] = s))
          : (s = p[4]),
        p[5] !== s || p[6] !== g || p[7] !== x || p[8] !== b
          ? ((i =
              s && s !== g
                ? (0, a.jsx)("img", {
                    className: (0, q.A)("h-4.5 w-7 shrink-0 rounded-[4px]", b ? "object-contain" : "object-fill"),
                    src: s,
                    alt: "",
                    onError: () => h(s),
                  })
                : x),
            (p[5] = s),
            (p[6] = g),
            (p[7] = x),
            (p[8] = b),
            (p[9] = i))
          : (i = p[9]),
        p[10] !== f?.displayName
          ? ((r = f?.displayName || (0, a.jsx)(o.A, { ...L.wallet })), (p[10] = f?.displayName), (p[11] = r))
          : (r = p[11]),
        p[12] !== r ? ((c = (0, a.jsx)("p", { children: r })), (p[12] = r), (p[13] = c)) : (c = p[13]),
        p[14] !== f
          ? ((m = f?.last4
              ? (0, a.jsx)("p", {
                  className: (0, q.A)("text-xs tabular-nums", P),
                  children: (0, a.jsx)(o.A, {
                    id: "composer.walletRequest.maskedCard",
                    defaultMessage: "\u2022\u2022\u2022\u2022 {lastFour}",
                    values: { lastFour: f.last4 },
                  }),
                })
              : null),
            (p[14] = f),
            (p[15] = m))
          : (m = p[15]),
        p[16] !== c || p[17] !== m
          ? ((d = (0, a.jsxs)("div", { className: "min-w-0 text-sm wrap-anywhere", children: [c, m] })),
            (p[16] = c),
            (p[17] = m),
            (p[18] = d))
          : (d = p[18]),
        p[19] !== i || p[20] !== d
          ? ((u = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [i, d] })),
            (p[19] = i),
            (p[20] = d),
            (p[21] = u))
          : (u = p[21]),
        u
      )
    }
    function O(e) {
      let t,
        s,
        i = (0, l.c)(9),
        { page: n, Link: r, EstimatedTaxTooltip: o } = e
      if (i[0] !== o || i[1] !== r || i[2] !== n.sections) {
        let e
        ;(i[4] !== o || i[5] !== r
          ? ((e = (e, t) =>
              (0, a.jsxs)(
                "section",
                {
                  className: "flex min-w-0 flex-col gap-2 text-sm wrap-anywhere",
                  children: [
                    e.title ? (0, a.jsx)("h3", { className: "font-semibold", children: e.title }) : null,
                    (0, a.jsxs)("div", {
                      className: "flex min-w-0 flex-col gap-3",
                      children: [
                        e.content.rows?.map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "flex min-w-0 flex-wrap justify-between gap-x-3 gap-y-1",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "inline-flex min-w-0 items-start gap-1",
                                  children: [e.title, e.isEstimatedTax ? (0, a.jsx)(o, {}) : null],
                                }),
                                e.subtitle
                                  ? (0, a.jsx)("span", {
                                      className: (0, q.A)("min-w-0 whitespace-pre-wrap", P),
                                      children: e.subtitle,
                                    })
                                  : null,
                              ],
                            },
                            t,
                          ),
                        ),
                        e.total
                          ? (0, a.jsxs)("div", {
                              className: (0, q.A)("flex justify-between gap-3 border-t pt-3 font-semibold", H),
                              children: [
                                (0, a.jsx)("span", { children: e.total.title }),
                                (0, a.jsx)("span", { children: e.total.subtitle }),
                              ],
                            })
                          : null,
                        e.content.text
                          ? (0, a.jsx)("p", { className: "whitespace-pre-wrap", children: e.content.text })
                          : null,
                        e.content.links?.map((e, t) => (0, a.jsx)(r, { href: e.url, children: e.label }, t)),
                      ],
                    }),
                  ],
                },
                t,
              )),
            (i[4] = o),
            (i[5] = r),
            (i[6] = e))
          : (e = i[6]),
          (t = n.sections.map(e)),
          (i[0] = o),
          (i[1] = r),
          (i[2] = n.sections),
          (i[3] = t))
      } else t = i[3]
      return (
        i[7] !== t
          ? ((s = (0, a.jsx)("div", { className: "flex min-w-0 flex-col gap-4", children: t })), (i[7] = t), (i[8] = s))
          : (s = i[8]),
        s
      )
    }
    function U(e) {
      let t,
        s,
        i,
        n,
        c,
        m,
        d,
        u,
        p,
        f,
        x,
        g,
        h,
        y,
        b = (0, l.c)(53),
        {
          transaction: v,
          canApprove: w,
          unavailableMessage: j,
          busy: C,
          onApprove: M,
          onCancel: k,
          handoff: N,
          primitives: A,
        } = e,
        R = (0, r.A)(),
        { Card: D, ActionButton: T } = A
      b[0] !== R || b[1] !== v ? ((t = v ? _(v, R) : void 0), (b[0] = R), (b[1] = v), (b[2] = t)) : (t = b[2])
      let S = t,
        I = v?.paymentMethod,
        O = v?.cartLineItems,
        U = !!v?.review?.blockingReasons?.length,
        Y = null != M && w && !C && !U && null != v,
        V = null == v || U ? void 0 : N
      return (
        b[3] !== Y || b[4] !== M
          ? ((s = (e) => {
              ;(e.preventDefault(), Y && M())
            }),
            (b[3] = Y),
            (b[4] = M),
            (b[5] = s))
          : (s = b[5]),
        b[6] !== U || b[7] !== C || b[8] !== O || b[9] !== S || b[10] !== A || b[11] !== v
          ? ((i =
              v && S
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(F, {
                        title: S.purchaseSummaryTitle,
                        subtitle: (0, a.jsxs)(a.Fragment, {
                          children: [
                            O && O.length > 1
                              ? (0, a.jsx)(o.A, {
                                  id: "composer.walletRequest.itemsAndMerchant",
                                  defaultMessage:
                                    "<items>+ {count, plural, one {# other item} other {# other items}}</items> \xb7 Paying {merchant}",
                                  values: { count: O.length - 1, merchant: v.merchant, items: E },
                                })
                              : (0, a.jsx)(o.A, { ...L.merchant, values: { merchant: v.merchant } }),
                            S.billingStatus
                              ? (0, a.jsx)("span", { className: "block", children: S.billingStatus })
                              : null,
                          ],
                        }),
                        price: (0, a.jsx)(B, { transaction: v }),
                        page: S.purchase,
                        disabled: C,
                        primitives: A,
                      }),
                      !S.isSubscription && S.delivery.sections.length > 0
                        ? (0, a.jsx)(F, {
                            icon: A.deliveryIcon,
                            title: S.deliverySummaryTitle,
                            subtitle: S.deliverySummaryAddress,
                            trailing: v.shipping?.subtitle,
                            page: S.delivery,
                            disabled: C,
                            primitives: A,
                          })
                        : null,
                      U
                        ? (0, a.jsx)("div", {
                            role: "alert",
                            className: (0, q.A)("px-4 text-sm", "error-tHCvlX"),
                            children: v.review?.blockingReasons?.map(z),
                          })
                        : null,
                    ],
                  })
                : (0, a.jsx)("p", {
                    role: "alert",
                    className: "px-4 text-sm",
                    children: (0, a.jsx)(o.A, { ...L.invalidRequest }),
                  })),
            (b[6] = U),
            (b[7] = C),
            (b[8] = O),
            (b[9] = S),
            (b[10] = A),
            (b[11] = v),
            (b[12] = i))
          : (i = b[12]),
        b[13] !== V || b[14] !== C || b[15] !== w || b[16] !== v || b[17] !== j
          ? ((n =
              w || C || !v || V
                ? null
                : (0, a.jsx)("p", {
                    role: "status",
                    className: (0, q.A)("px-4 text-sm", P),
                    children: j ?? (0, a.jsx)(o.A, { ...L.unavailable }),
                  })),
            (b[13] = V),
            (b[14] = C),
            (b[15] = w),
            (b[16] = v),
            (b[17] = j),
            (b[18] = n))
          : (n = b[18]),
        b[19] !== V || b[20] !== i || b[21] !== n
          ? ((c = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-2 py-2", children: [i, V, n] })),
            (b[19] = V),
            (b[20] = i),
            (b[21] = n),
            (b[22] = c))
          : (c = b[22]),
        b[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, q.A)("flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3", H)), (b[23] = m))
          : (m = b[23]),
        b[24] !== I || b[25] !== A.cardIcon || b[26] !== v
          ? ((d = v ? (0, a.jsx)($, { payment: I, fallbackIcon: A.cardIcon }) : null),
            (b[24] = I),
            (b[25] = A.cardIcon),
            (b[26] = v),
            (b[27] = d))
          : (d = b[27]),
        b[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(o.A, { ...L.cancel })), (b[28] = u))
          : (u = b[28]),
        b[29] !== T || b[30] !== C || b[31] !== k
          ? ((p = (0, a.jsx)(T, { variant: "secondary", type: "button", disabled: C, onClick: k, children: u })),
            (b[29] = T),
            (b[30] = C),
            (b[31] = k),
            (b[32] = p))
          : (p = b[32]),
        b[33] !== T || b[34] !== V || b[35] !== C || b[36] !== w || b[37] !== Y || b[38] !== M
          ? ((f =
              null != M && (w || !V)
                ? (0, a.jsx)(T, {
                    variant: "primary",
                    type: "submit",
                    disabled: !Y,
                    loading: C,
                    children: C
                      ? (0, a.jsx)(o.A, { ...L.verifying })
                      : (0, a.jsx)(o.A, { id: "composer.walletRequest.approvePurchase", defaultMessage: "Approve" }),
                  })
                : null),
            (b[33] = T),
            (b[34] = V),
            (b[35] = C),
            (b[36] = w),
            (b[37] = Y),
            (b[38] = M),
            (b[39] = f))
          : (f = b[39]),
        b[40] !== f || b[41] !== p
          ? ((x = (0, a.jsxs)("div", { className: "ms-auto flex items-center gap-1", children: [p, f] })),
            (b[40] = f),
            (b[41] = p),
            (b[42] = x))
          : (x = b[42]),
        b[43] !== x || b[44] !== d
          ? ((g = (0, a.jsxs)("div", { className: m, children: [d, x] })), (b[43] = x), (b[44] = d), (b[45] = g))
          : (g = b[45]),
        b[46] !== g || b[47] !== s || b[48] !== c
          ? ((h = (0, a.jsxs)("form", { onSubmit: s, children: [c, g] })),
            (b[46] = g),
            (b[47] = s),
            (b[48] = c),
            (b[49] = h))
          : (h = b[49]),
        b[50] !== D || b[51] !== h
          ? ((y = (0, a.jsx)(D, { className: "w-full max-w-lg", children: h })), (b[50] = D), (b[51] = h), (b[52] = y))
          : (y = b[52]),
        y
      )
    }
    function z(e, t) {
      return (0, a.jsx)("p", { children: e }, t)
    }
    function E(e) {
      return (0, a.jsx)("span", { className: "accent-NYqeDb", children: e })
    }
    function F(e) {
      let t,
        s,
        i,
        n,
        r,
        o,
        c,
        m,
        d,
        u,
        p = (0, l.c)(31),
        { icon: f, title: x, subtitle: g, trailing: h, price: y, page: b, disabled: v, primitives: w } = e,
        { DetailDialog: j, Link: C, EstimatedTaxTooltip: M } = w,
        k = b.title
      p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, q.A)("flex w-full items-center gap-3 px-4 py-2 text-start", "detailTrigger-wzEO3S")), (p[0] = t))
        : (t = p[0])
      let N = y && "font-semibold"
      return (
        p[1] !== N ? ((s = (0, q.A)("block truncate", N)), (p[1] = N), (p[2] = s)) : (s = p[2]),
        p[3] !== s || p[4] !== x
          ? ((i = (0, a.jsx)("span", { className: s, children: x })), (p[3] = s), (p[4] = x), (p[5] = i))
          : (i = p[5]),
        p[6] !== g
          ? ((n = g ? (0, a.jsx)("span", { className: (0, q.A)("block truncate text-xs", P), children: g }) : null),
            (p[6] = g),
            (p[7] = n))
          : (n = p[7]),
        p[8] !== i || p[9] !== n
          ? ((r = (0, a.jsxs)("span", { className: "min-w-0 flex-1 text-sm", children: [i, n] })),
            (p[8] = i),
            (p[9] = n),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== y
          ? ((o = y ? (0, a.jsx)("span", { className: "shrink-0 text-xl font-bold tabular-nums", children: y }) : null),
            (p[11] = y),
            (p[12] = o))
          : (o = p[12]),
        p[13] !== h
          ? ((c = h
              ? (0, a.jsx)("span", {
                  className: (0, q.A)("max-w-1/3 text-end text-xs whitespace-normal", P),
                  children: h,
                })
              : null),
            (p[13] = h),
            (p[14] = c))
          : (c = p[14]),
        p[15] !== f || p[16] !== w.chevronIcon || p[17] !== r || p[18] !== o || p[19] !== c
          ? ((m = (0, a.jsxs)(a.Fragment, { children: [f, r, o, c, w.chevronIcon] })),
            (p[15] = f),
            (p[16] = w.chevronIcon),
            (p[17] = r),
            (p[18] = o),
            (p[19] = c),
            (p[20] = m))
          : (m = p[20]),
        p[21] !== M || p[22] !== C || p[23] !== b
          ? ((d = (0, a.jsx)(O, { page: b, Link: C, EstimatedTaxTooltip: M })),
            (p[21] = M),
            (p[22] = C),
            (p[23] = b),
            (p[24] = d))
          : (d = p[24]),
        p[25] !== j || p[26] !== v || p[27] !== b.title || p[28] !== m || p[29] !== d
          ? ((u = (0, a.jsx)(j, { title: k, disabled: v, triggerClassName: t, trigger: m, children: d })),
            (p[25] = j),
            (p[26] = v),
            (p[27] = b.title),
            (p[28] = m),
            (p[29] = d),
            (p[30] = u))
          : (u = p[30]),
        u
      )
    }
    var Y = s("slpy"),
      V = s("Sm6l"),
      Z = s("JNtf"),
      G = s("mUDD"),
      W = s("ZtSy")
    function K(e) {
      let t,
        s,
        i = (0, l.c)(3),
        { payment: n } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(T.Y5G, {})), (i[0] = t)) : (t = i[0]),
        i[1] !== n ? ((s = (0, a.jsx)($, { payment: n, fallbackIcon: t })), (i[1] = n), (i[2] = s)) : (s = i[2]),
        s
      )
    }
    function Q(e) {
      let t,
        s = (0, l.c)(2),
        { page: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsx)(O, { page: i, Link: J, EstimatedTaxTooltip: X })), (s[0] = i), (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function J(e) {
      let t,
        s = (0, l.c)(2)
      return (
        s[0] !== e
          ? ((t = (0, a.jsx)(W.G, {
              ...e,
              initiator: "external_link",
              openTarget: "external-browser",
              underline: "always",
            })),
            (s[0] = e),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function X() {
      let e,
        t,
        s,
        i,
        c,
        m,
        d,
        u,
        p,
        f,
        x,
        g,
        h = (0, l.c)(20),
        y = (0, r.A)(),
        [b, v] = (0, n.useState)(!1),
        w = (0, n.useRef)(null)
      return (
        h[0] !== y ? ((e = y.formatMessage(L.estimatedTaxInfo)), (h[0] = y), (h[1] = e)) : (e = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => v(!0)), (s = (0, a.jsx)(T.ehD, {})), (h[2] = t), (h[3] = s))
          : ((t = h[2]), (s = h[3])),
        h[4] !== e
          ? ((i = (0, a.jsx)(Y.m.Trigger, {
              ref: w,
              onClick: ee,
              children: (0, a.jsx)(V.$, { color: "ghost", size: "inline", "aria-label": e, onClick: t, children: s }),
            })),
            (h[4] = e),
            (h[5] = i))
          : (i = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("span", {
              className: "font-semibold",
              children: (0, a.jsx)(o.A, { ...L.estimatedTaxTitle }),
            })),
            (h[6] = c))
          : (c = h[6]),
        h[7] !== y ? ((m = y.formatMessage(L.closeTaxTooltip)), (h[7] = y), (h[8] = m)) : (m = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = () => {
              ;(w.current?.focus(), v(!1))
            }),
            (u = (0, a.jsx)(T.Gmf, {})),
            (h[9] = d),
            (h[10] = u))
          : ((d = h[9]), (u = h[10])),
        h[11] !== m
          ? ((p = (0, a.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                c,
                (0, a.jsx)(V.$, { color: "ghost", size: "inline", "aria-label": m, onClick: d, children: u }),
              ],
            })),
            (h[11] = m),
            (h[12] = p))
          : (p = h[12]),
        h[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(o.A, { ...L.estimatedTaxDescription })), (h[13] = f))
          : (f = h[13]),
        h[14] !== p
          ? ((x = (0, a.jsx)(Y.m.Content, {
              children: (0, a.jsxs)("div", { className: "flex max-w-3xs flex-col gap-1 text-start", children: [p, f] }),
            })),
            (h[14] = p),
            (h[15] = x))
          : (x = h[15]),
        h[16] !== b || h[17] !== x || h[18] !== i
          ? ((g = (0, a.jsxs)(Y.m.Root, { open: b, onOpenChange: v, interactive: !0, children: [i, x] })),
            (h[16] = b),
            (h[17] = x),
            (h[18] = i),
            (h[19] = g))
          : (g = h[19]),
        g
      )
    }
    function ee(e) {
      return e.preventDefault()
    }
    let et = {
      Card: m.A,
      ActionButton: function (e) {
        let t,
          s,
          i,
          n = (0, l.c)(6)
        return (
          n[0] !== e ? (({ variant: s, ...t } = e), (n[0] = e), (n[1] = t), (n[2] = s)) : ((t = n[1]), (s = n[2])),
          n[3] !== t || n[4] !== s
            ? ((i = (0, a.jsx)(V.$, { ...t, color: s, size: "cardAction" })), (n[3] = t), (n[4] = s), (n[5] = i))
            : (i = n[5]),
          i
        )
      },
      DetailDialog: function (e) {
        let t,
          s,
          i,
          n,
          r,
          o = (0, l.c)(13),
          { title: c, disabled: m, trigger: d, triggerClassName: u, children: p } = e
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { "aria-describedby": void 0 }), (o[0] = t))
            : (t = o[0]),
          o[1] !== m || o[2] !== d || o[3] !== u
            ? ((s = (0, a.jsx)(V.$, { className: u, unstyled: !0, disabled: m, children: d })),
              (o[1] = m),
              (o[2] = d),
              (o[3] = u),
              (o[4] = s))
            : (s = o[4]),
          o[5] !== c
            ? ((i = (0, a.jsx)(G.c7, { title: (0, a.jsx)(Z.L3, { children: c }) })), (o[5] = c), (o[6] = i))
            : (i = o[6]),
          o[7] !== p || o[8] !== i
            ? ((n = (0, a.jsxs)(G.R4, { variant: "confirmation", size: "viewport", children: [i, p] })),
              (o[7] = p),
              (o[8] = i),
              (o[9] = n))
            : (n = o[9]),
          o[10] !== s || o[11] !== n
            ? ((r = (0, a.jsx)(Z.lG, {
                size: "beacon",
                variant: "form",
                closeButtonSize: "compact",
                contentProps: t,
                triggerContent: s,
                children: n,
              })),
              (o[10] = s),
              (o[11] = n),
              (o[12] = r))
            : (r = o[12]),
          r
        )
      },
      Link: J,
      EstimatedTaxTooltip: X,
      cardIcon: (0, a.jsx)(T.Y5G, {}),
      deliveryIcon: (0, a.jsx)(D.I, { asset: R, className: "shrink-0" }),
      chevronIcon: (0, a.jsx)(T.uM3, { className: "text-secondary" }),
    }
    function es(e) {
      let t,
        s = (0, l.c)(2)
      return (s[0] !== e ? ((t = (0, a.jsx)(U, { ...e, primitives: et })), (s[0] = e), (s[1] = t)) : (t = s[1]), t)
    }
    var ea = s("MS6s")
    let el = (0, A.a)({
      name: "shopping-cart-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.807983, y: 1.474609, width: 14.400711, height: 13.55957 },
        visualBounds: { x: 0.807983, y: 1.474609, width: 14.400711, height: 13.55957 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.807983, y: 1.474609, width: 14.400711, height: 13.55957 },
        center: { x: 8.008338, y: 8.254394 },
        insets: { top: 1.474609, right: 0.791306, bottom: 0.965821, left: 0.807983 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.008338, y: 8.254394 }, foreground: { x: 8.008338, y: 8.254394 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.53357 11.0508C7.63342 11.0509 8.52478 11.9431 8.52478 13.043C8.52445 14.1426 7.63321 15.034 6.53357 15.0342C5.43381 15.0342 4.54172 14.1427 4.54138 13.043C4.54138 11.943 5.4336 11.0508 6.53357 11.0508ZM6.53357 12.1016C6.0135 12.1016 5.59216 12.5229 5.59216 13.043C5.5925 13.5628 6.01371 13.9844 6.53357 13.9844C7.05332 13.9842 7.47464 13.5627 7.47498 13.043C7.47498 12.523 7.05352 12.1017 6.53357 12.1016Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M12.1361 11.0508C13.236 11.0509 14.1273 11.9431 14.1273 13.043C14.127 14.1426 13.2358 15.0341 12.1361 15.0342C11.0363 15.0342 10.1443 14.1427 10.1439 13.043C10.1439 11.943 11.0361 11.0508 12.1361 11.0508ZM12.1361 12.1016C11.616 12.1016 11.1947 12.5229 11.1947 13.043C11.195 13.5628 11.6162 13.9844 12.1361 13.9844C12.6559 13.9843 13.0772 13.5627 13.0775 13.043C13.0775 12.523 12.6561 12.1017 12.1361 12.1016Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M3.24548 1.47461C3.58404 1.47463 3.88628 1.67308 4.02478 1.97266L4.07361 2.10742L4.44666 3.47461H14.35C14.9157 3.47461 15.3266 4.01272 15.1781 4.55859L13.9066 9.22559C13.8048 9.59911 13.4656 9.8584 13.0785 9.8584H5.75427C5.36736 9.85824 5.02796 9.5989 4.92615 9.22559L3.09998 2.52539H1.33337C1.04342 2.52539 0.807983 2.28995 0.807983 2C0.807983 1.71005 1.04342 1.47461 1.33337 1.47461H3.24548ZM5.90173 8.80859H12.932L14.099 4.52539H4.73279L5.90173 8.80859Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    function ei(e) {
      let t,
        s,
        i,
        c,
        m,
        d,
        u,
        p,
        f,
        x,
        g = (0, l.c)(60),
        {
          transaction: h,
          canApprove: y,
          unavailableMessage: b,
          busy: v,
          handoff: w,
          touchIdRetryHint: j,
          onApprove: C,
          onCancel: M,
        } = e,
        k = (0, r.A)(),
        [N, A] = (0, n.useState)(null),
        [q, S] = (0, n.useState)(null)
      g[0] !== k || g[1] !== h ? ((t = h ? _(h, k) : void 0), (g[0] = k), (g[1] = h), (g[2] = t)) : (t = g[2])
      let I = t,
        P = !!h?.review?.blockingReasons?.length,
        H = null != C && y && !v && !P && null != h,
        $ = null != j
      if (N && I) {
        let e, t, s, l, i, n, r
        ;(g[3] !== k
          ? ((e = k.formatMessage({
              id: "composer.walletRequest.backToReview",
              defaultMessage: "Back to purchase review",
            })),
            (g[3] = k),
            (g[4] = e))
          : (e = g[4]),
          g[5] !== N
            ? ((t = () => {
                ;(S(N), A(null))
              }),
              (g[5] = N),
              (g[6] = t))
            : (t = g[6]),
          g[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(T.tOb, { className: "rtl:rotate-180" })), (g[7] = s))
            : (s = g[7]),
          g[8] !== e || g[9] !== t
            ? ((l = (0, a.jsx)(V.$, {
                className: "absolute start-4 top-4",
                color: "outlineSurfaceRaised",
                size: "iconCircleLg",
                autoFocus: !0,
                "aria-label": e,
                onClick: t,
                children: s,
              })),
              (g[8] = e),
              (g[9] = t),
              (g[10] = l))
            : (l = g[10]))
        let o = I[N]
        g[11] !== o.title
          ? ((i = (0, a.jsx)(G.c7, { title: (0, a.jsx)("h2", { children: o.title }), titleClassName: "text-center" })),
            (g[11] = o.title),
            (g[12] = i))
          : (i = g[12])
        let c = I[N]
        return (
          g[13] !== c ? ((n = (0, a.jsx)(Q, { page: c })), (g[13] = c), (g[14] = n)) : (n = g[14]),
          g[15] !== l || g[16] !== i || g[17] !== n
            ? ((r = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col gap-4 pt-9", children: [l, i, n] })),
              (g[15] = l),
              (g[16] = i),
              (g[17] = n),
              (g[18] = r))
            : (r = g[18]),
          r
        )
      }
      g[19] !== $
        ? ((s = $
            ? (0, a.jsx)(o.A, { id: "composer.walletRequest.retryTouchId", defaultMessage: "Try Touch ID again" })
            : (0, a.jsx)(o.A, { id: "composer.walletRequest.approvePurchase", defaultMessage: "Approve" })),
          (g[19] = $),
          (g[20] = s))
        : (s = g[20])
      let O = s
      ;(g[21] !== H || g[22] !== C || g[23] !== $
        ? ((i = (e) => {
            ;(e.preventDefault(), H && !$ && C())
          }),
          (g[21] = H),
          (g[22] = C),
          (g[23] = $),
          (g[24] = i))
        : (i = g[24]),
        g[25] !== P || g[26] !== v || g[27] !== w || g[28] !== I || g[29] !== $ || g[30] !== q || g[31] !== h
          ? ((c =
              h && I
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col gap-1 text-center",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-2xl font-bold tabular-nums",
                            children: (0, a.jsx)(B, { transaction: h }),
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, a.jsx)(o.A, { ...L.merchant, values: { merchant: h.merchant } }),
                          }),
                          I.billingStatus
                            ? (0, a.jsx)("p", { className: "text-sm text-secondary", children: I.billingStatus })
                            : null,
                        ],
                      }),
                      $ && w,
                      (0, a.jsxs)("div", {
                        className: "divide-y divide-border overflow-hidden rounded-xl border border-default",
                        children: [
                          (0, a.jsx)("div", {
                            className: "px-3 py-3",
                            children: (0, a.jsx)(K, { payment: h.paymentMethod }),
                          }),
                          (0, a.jsx)(er, {
                            icon: (0, a.jsx)(D.I, { asset: el, className: "shrink-0" }),
                            autoFocus: "purchase" === q,
                            title: I.purchaseSummaryTitle,
                            subtitle:
                              h.cartLineItems && h.cartLineItems.length > 1
                                ? (0, a.jsx)(o.A, {
                                    id: "composer.walletRequest.otherItems",
                                    defaultMessage: "+ {count, plural, one {# other item} other {# other items}}",
                                    values: { count: h.cartLineItems.length - 1 },
                                  })
                                : h.condition?.title,
                            disabled: v,
                            onClick: () => A("purchase"),
                          }),
                          !I.isSubscription && I.delivery.sections.length > 0
                            ? (0, a.jsx)(er, {
                                autoFocus: "delivery" === q,
                                icon: (0, a.jsx)(D.I, { asset: R, className: "shrink-0" }),
                                title: I.deliverySummaryTitle,
                                subtitle: I.deliverySummaryAddress,
                                trailing: h.shipping?.subtitle,
                                disabled: v,
                                onClick: () => A("delivery"),
                              })
                            : null,
                        ],
                      }),
                      P
                        ? (0, a.jsx)("div", {
                            role: "alert",
                            className: "text-status-error text-sm",
                            children: h.review?.blockingReasons?.map(en),
                          })
                        : null,
                    ],
                  })
                : (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm",
                    children: (0, a.jsx)(o.A, { ...L.invalidRequest }),
                  })),
            (g[25] = P),
            (g[26] = v),
            (g[27] = w),
            (g[28] = I),
            (g[29] = $),
            (g[30] = q),
            (g[31] = h),
            (g[32] = c))
          : (c = g[32]))
      let U = $ ? j : w
      return (
        g[33] !== v || g[34] !== y || g[35] !== w || g[36] !== h || g[37] !== b
          ? ((m =
              y || v || !h || w
                ? null
                : (0, a.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary",
                    children: b ?? (0, a.jsx)(o.A, { ...L.unavailable }),
                  })),
            (g[33] = v),
            (g[34] = y),
            (g[35] = w),
            (g[36] = h),
            (g[37] = b),
            (g[38] = m))
          : (m = g[38]),
        g[39] !== O || g[40] !== v || g[41] !== y || g[42] !== H || g[43] !== w || g[44] !== C || g[45] !== $
          ? ((d =
              null != C && (y || v || !w)
                ? (0, a.jsx)(V.$, {
                    color: $ ? "secondary" : "primary",
                    size: "beaconAction",
                    radius: "full",
                    type: $ ? "button" : "submit",
                    onClick: $ ? C : void 0,
                    disabled: !H,
                    loading: v,
                    children: v ? (0, a.jsx)(o.A, { ...L.verifying }) : O,
                  })
                : null),
            (g[39] = O),
            (g[40] = v),
            (g[41] = y),
            (g[42] = H),
            (g[43] = w),
            (g[44] = C),
            (g[45] = $),
            (g[46] = d))
          : (d = g[46]),
        g[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(o.A, { ...L.cancel })), (g[47] = u))
          : (u = g[47]),
        g[48] !== v || g[49] !== M
          ? ((p = (0, a.jsx)(V.$, {
              color: "secondary",
              size: "beaconAction",
              radius: "full",
              disabled: v,
              onClick: M,
              children: u,
            })),
            (g[48] = v),
            (g[49] = M),
            (g[50] = p))
          : (p = g[50]),
        g[51] !== d || g[52] !== p
          ? ((f = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [d, p] })),
            (g[51] = d),
            (g[52] = p),
            (g[53] = f))
          : (f = g[53]),
        g[54] !== f || g[55] !== i || g[56] !== c || g[57] !== U || g[58] !== m
          ? ((x = (0, a.jsxs)("form", {
              className: "flex min-w-0 flex-col gap-6",
              onSubmit: i,
              children: [c, U, m, f],
            })),
            (g[54] = f),
            (g[55] = i),
            (g[56] = c),
            (g[57] = U),
            (g[58] = m),
            (g[59] = x))
          : (x = g[59]),
        x
      )
    }
    function en(e, t) {
      return (0, a.jsx)("p", { children: e }, t)
    }
    function er(e) {
      let t,
        s,
        i,
        n,
        r,
        o,
        c = (0, l.c)(17),
        { icon: m, title: d, subtitle: u, trailing: p, disabled: f, autoFocus: x, onClick: g } = e
      return (
        c[0] !== d
          ? ((t = (0, a.jsx)("span", { className: "block truncate", children: d })), (c[0] = d), (c[1] = t))
          : (t = c[1]),
        c[2] !== u
          ? ((s = u ? (0, a.jsx)("span", { className: "block truncate text-xs text-secondary", children: u }) : null),
            (c[2] = u),
            (c[3] = s))
          : (s = c[3]),
        c[4] !== t || c[5] !== s
          ? ((i = (0, a.jsxs)("span", { className: "min-w-0 flex-1 text-sm", children: [t, s] })),
            (c[4] = t),
            (c[5] = s),
            (c[6] = i))
          : (i = c[6]),
        c[7] !== p
          ? ((n = p
              ? (0, a.jsx)("span", {
                  className: "max-w-1/3 text-end text-xs whitespace-normal text-secondary",
                  children: p,
                })
              : null),
            (c[7] = p),
            (c[8] = n))
          : (n = c[8]),
        c[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(T.uM3, { className: "text-secondary" })), (c[9] = r))
          : (r = c[9]),
        c[10] !== x || c[11] !== f || c[12] !== m || c[13] !== g || c[14] !== i || c[15] !== n
          ? ((o = (0, a.jsxs)(V.$, {
              unstyled: !0,
              className: "flex w-full items-center gap-3 px-3 py-3 text-start hover:bg-secondary-ghost-hover",
              autoFocus: x,
              disabled: f,
              onClick: g,
              children: [m, i, n, r],
            })),
            (c[10] = x),
            (c[11] = f),
            (c[12] = m),
            (c[13] = g),
            (c[14] = i),
            (c[15] = n),
            (c[16] = o))
          : (o = c[16]),
        o
      )
    }
    function eo(e) {
      var t
      let s,
        u,
        p,
        f,
        x,
        g,
        h,
        y,
        v,
        w,
        j = (0, l.c)(42),
        { inDialog: C, phoneReviewAvailable: M, verificationError: A, isMacOS: R, onShown: D, ...T } = e,
        q = void 0 !== C && C,
        S = void 0 !== M && M,
        _ = (0, i.gh)(d.u),
        I = (0, r.A)(),
        L = ((t = T.elicitation), (w = b.safeParse(t)).success ? w.data.metadata["openai/transaction"] : void 0),
        P = (0, n.useRef)(!1),
        H = (0, n.useRef)(null)
      j[0] !== D
        ? ((s = () => {
            !P.current && D?.() && (P.current = !0)
          }),
          (j[0] = D),
          (j[1] = s))
        : (s = j[1])
      let B = (0, n.useEffectEvent)(s),
        $ = null != D && null != L
      ;(j[2] !== B || j[3] !== _ || j[4] !== $
        ? ((u = () => {
            if (!$ || null == H.current) return
            let e = H.current
            return _.watch((t) => {
              let { get: s } = t,
                a = s(c.chatGptAuthenticatedAccountId$),
                l = s(c.o8)
              if (!P.current && null != a && null != l) return (0, ea.b)(e, B)
            })
          }),
          (j[2] = B),
          (j[3] = _),
          (j[4] = $),
          (j[5] = u))
        : (u = j[5]),
        j[6] !== _ || j[7] !== $ ? ((p = [$, _]), (j[6] = _), (j[7] = $), (j[8] = p)) : (p = j[8]),
        (0, n.useEffect)(u, p))
      let O = A?.type === "cancelled" && "interrupted" === A.reason,
        U = void 0 !== R && R && (A?.reason === "biometricsUnavailable" || O)
      j[9] !== U || j[10] !== A || j[11] !== O
        ? ((f =
            null != A && ("unavailable" === A.type || O)
              ? (0, a.jsx)("p", {
                  className: "text-sm text-secondary",
                  role: "status",
                  children: U
                    ? (0, a.jsx)(o.A, {
                        id: "composer.walletRequest.openLaptop",
                        defaultMessage: "If your laptop is closed, open it to use Touch ID, then try again",
                      })
                    : (0, a.jsx)(k.W, { error: A, requestRemainsPending: !0 }),
                })
              : void 0),
          (j[9] = U),
          (j[10] = A),
          (j[11] = O),
          (j[12] = f))
        : (f = j[12])
      let z = f,
        E = !!T.checking || T.waiting,
        F = T.available && !E && null != L,
        Y = q && U && S && null != T.mobileHandoffUrl && null != L && !L.review?.blockingReasons?.length
      j[13] !== I || j[14] !== S || j[15] !== T.available || j[16] !== T.mobileHandoffUrl || j[17] !== L
        ? ((x =
            !T.available && L && S && T.mobileHandoffUrl
              ? I.formatMessage({
                  id: "composer.walletRequest.approveOnPhone",
                  defaultMessage: "Approve in ChatGPT on your phone",
                })
              : void 0),
          (j[13] = I),
          (j[14] = S),
          (j[15] = T.available),
          (j[16] = T.mobileHandoffUrl),
          (j[17] = L),
          (j[18] = x))
        : (x = j[18])
      let V = x
      j[19] !== S || j[20] !== T.mobileHandoffOpenTarget || j[21] !== T.mobileHandoffUrl
        ? ((g =
            null != T.mobileHandoffUrl
              ? (0, a.jsx)(m.A, {
                  children: (0, a.jsx)("div", {
                    className: "p-4",
                    children: (0, a.jsx)(N.b, {
                      url: T.mobileHandoffUrl,
                      openTarget: T.mobileHandoffOpenTarget,
                      purchase: S,
                    }),
                  }),
                })
              : null),
          (j[19] = S),
          (j[20] = T.mobileHandoffOpenTarget),
          (j[21] = T.mobileHandoffUrl),
          (j[22] = g))
        : (g = j[22])
      let Z = g,
        G = q ? ei : es
      j[23] !== q || j[24] !== T.onCancel || j[25] !== T.onDismiss
        ? ((h = (e) => {
            q ||
              "Escape" !== e.key ||
              e.defaultPrevented ||
              (e.preventDefault(), e.stopPropagation(), (T.onDismiss ?? T.onCancel)())
          }),
          (j[23] = q),
          (j[24] = T.onCancel),
          (j[25] = T.onDismiss),
          (j[26] = h))
        : (h = j[26])
      let W = !q && Z,
        K = !Y && z,
        Q = q ? Z : void 0,
        J = Y ? z : void 0,
        X = q ? (T.onDismiss ?? T.onCancel) : T.onCancel
      return (
        j[27] !== G ||
        j[28] !== E ||
        j[29] !== F ||
        j[30] !== T.onApprove ||
        j[31] !== Q ||
        j[32] !== J ||
        j[33] !== X ||
        j[34] !== L ||
        j[35] !== V
          ? ((y = (0, a.jsx)(G, {
              handoff: Q,
              touchIdRetryHint: J,
              transaction: L,
              canApprove: F,
              unavailableMessage: V,
              busy: E,
              onApprove: T.onApprove,
              onCancel: X,
            })),
            (j[27] = G),
            (j[28] = E),
            (j[29] = F),
            (j[30] = T.onApprove),
            (j[31] = Q),
            (j[32] = J),
            (j[33] = X),
            (j[34] = L),
            (j[35] = V),
            (j[36] = y))
          : (y = j[36]),
        j[37] !== h || j[38] !== W || j[39] !== K || j[40] !== y
          ? ((v = (0, a.jsxs)("div", {
              ref: H,
              className: "flex min-w-0 flex-col gap-4",
              "data-codex-approval-surface": !0,
              role: "group",
              onKeyDown: h,
              children: [W, K, y],
            })),
            (j[37] = h),
            (j[38] = W),
            (j[39] = K),
            (j[40] = y),
            (j[41] = v))
          : (v = j[41]),
        v
      )
    }
  },
}
//# sourceMappingURL=517070.d1f301a808.js.map
