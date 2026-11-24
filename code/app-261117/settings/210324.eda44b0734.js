export const __rspack_esm_ids = [210324]
export const __webpack_modules__ = {
  VSiS(e, t, i) {
    let r = {
      volume_discount_v1: {
        presentation: "base",
        additionalDiscountPercent: null,
        tiers: [
          { minimum_quantity: 2500, percent_off: 10 },
          { minimum_quantity: 5e3, percent_off: 20 },
          { minimum_quantity: 25e3, percent_off: 30 },
        ],
      },
      volume_discount_with_auto_reload_incentive_v1: {
        presentation: "boost",
        additionalDiscountPercent: 10,
        tiers: [
          { minimum_quantity: 1, percent_off: 10 },
          { minimum_quantity: 2500, percent_off: 20 },
          { minimum_quantity: 5e3, percent_off: 30 },
          { minimum_quantity: 25e3, percent_off: 40 },
        ],
      },
    }
    function s(e) {
      return "volume_discount_v1" === e || "volume_discount_with_auto_reload_incentive_v1" === e
    }
    function n(e, t) {
      return e.reduce((e, i) => (t >= i.minimum_quantity ? Math.max(e, i.percent_off) : e), 0)
    }
    i.d(
      t,
      {},
      {
        ZT: function ({ tiers: e, reloadAmount: t }) {
          let i = Number.parseInt(t.trim(), 10)
          if (!Number.isFinite(i) || i <= 0) return null
          let r = n(e, i)
          return r > 0 ? r : null
        },
        Zu: s,
        _3: function ({ isEnabled: e, offer: t, policy: i }) {
          var a
          if (e) {
            let e = s(i) ? r[i] : void 0
            return null == e ? { kind: "legacy" } : { kind: "active", ...e }
          }
          if (t?.auto_reload == null) return { kind: "legacy" }
          let o = [
            ...new Set([
              1,
              ...(a = t).one_time.tiers.map((e) => e.minimum_quantity),
              ...(a.auto_reload?.tiers.map((e) => e.minimum_quantity) ?? []),
            ]),
          ].reduce((e, t) => {
            let i = n(a.auto_reload?.tiers ?? [], t) - n(a.one_time.tiers, t)
            return i > 0 ? Math.max(e ?? 0, i) : e
          }, null)
          return {
            kind: "available",
            presentation: null == o ? "base" : "boost",
            additionalDiscountPercent: o,
            tiers: t.auto_reload.tiers,
            offer: t,
          }
        },
      },
    )
  },
  am1R(e, t, i) {
    function r(e, t, i) {
      let r = Math.min(...(t?.one_time.tiers.map((e) => e.minimum_quantity) ?? []))
      return Number.isFinite(r) ? Math.min(r > i ? e : Math.max(e, r), i) : e
    }
    i.d(
      t,
      {},
      {
        CH: function ({
          usageRequestId: e,
          accountId: t,
          quantity: i,
          discountOfferId: r,
          entryPoint: s,
          checkoutUiMode: n,
          billingDetails: a,
          cancelUrl: o,
        }) {
          return {
            checkout_ui_mode: null != r ? "custom" : n,
            entry_point: s,
            credit_purchase_data: {
              account_id: t,
              usage_request_id: e,
              quantity: i,
              unit: "credit",
              discount_offer_id: r,
            },
            billing_details: a,
            cancel_url: o,
          }
        },
        DT: function ({
          defaultQuantity: e,
          presetQuantities: t,
          minimumCreditQuantity: i,
          maximumCreditQuantity: r,
          creditQuantityStep: s,
        }) {
          let n = (e) => "number" == typeof e && Number.isSafeInteger(e) && e >= i && e <= r && e % s == 0,
            a = t.length > 0 && t.every(n) && new Set(t).size === t.length ? t : null
          return {
            defaultCreditQuantity: n(e) && (0 === t.length || a?.includes(e)) ? e : null,
            presetCreditQuantities: a,
          }
        },
        Uv: function ({
          quantity: e,
          offer: t,
          maximumCreditQuantity: i,
          experimentDefaultQuantity: s,
          clampToDiscountTier: n = !0,
        }) {
          return s ?? (n ? r(e, t, i) : Math.min(e, i))
        },
        ah: function ({
          audience: e,
          defaultQuantity: t = "personal" === e ? 1e3 : 2500,
          minimumCreditQuantity: i,
          maximumCreditQuantity: s,
          creditQuantityStep: n,
          presetCreditQuantities: a,
          offer: o = null,
          experimentDefaultQuantity: l = null,
        }) {
          let c = (e) => Number.isSafeInteger(e) && e >= i && e <= s && e % n == 0
          if (null != l && c(l)) return l
          let u = c(t) ? t : (a.find(c) ?? null)
          return null == u ? null : r(u, o, s)
        },
        bh: "show_discounted_auto_reload_preset_price",
        qK: function (e, t = 1) {
          let i = "string" == typeof e && /^\d+$/.test(e) ? Number(e) : e
          return Math.floor(("number" == typeof i && Number.isSafeInteger(i) && i > 0 ? i : 25e4) / t) * t
        },
        tW: "show_discounted_credit_preset_price",
        uh: function (e, t) {
          if ("workspace" === e) return "1243009938"
          switch (t) {
            case "plus":
              return "2997627062"
            case "prolite":
              return "1513915455"
            case "pro":
              return "1759265809"
            case "promax":
              return "3096878003"
            default:
              return null
          }
        },
        vx: {
          creditQuantityStep: 250,
          minimumChargeMinorUnits: 1e3,
          presetCreditQuantities: [500, 1e3, 1500, 2500, 5e3, 1e4],
        },
      },
    )
  },
  nhAI(e, t, i) {
    function r(e, t) {
      if (!Number.isSafeInteger(t) || t < 0) return null
      let i = /^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/.exec(e.toString())
      if (null == i) return null
      let r = (i[2]?.length ?? 0) - Number(i[3] ?? 0),
        s = BigInt(i[1] + (i[2] ?? ""))
      return s <= 0n
        ? null
        : { numerator: s * 10n ** BigInt(Math.max(t - r, 0)), denominator: 10n ** BigInt(Math.max(r - t, 0)) }
    }
    i.d(
      t,
      {},
      {
        Ff: function ({ amountPerCredit: e, creditQuantity: t, minorUnitExponent: i }) {
          return Math.round(t * e * Math.pow(10, i))
        },
        Tt: function ({ minimumCreditPurchaseQuantity: e, presetCreditQuantities: t }) {
          let i = t[0]
          if (null == i || e <= i) return t
          let r = t.filter((t) => t >= e)
          return r[0] === e ? r : [e, ...r]
        },
        Yw: function (e, t, i) {
          let r = String(e ?? "").trim()
          if (!r || r.length > 80) return null
          let s = /^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/.exec(r)
          if (!s || (!s[2] && !s[3])) return null
          let [, n, a = "", o = "", l = "0"] = s,
            c = a + o
          if ("-" === n && /[1-9]/.test(c)) return i
          let u = a.length + Number(l)
          if (u > 80) return null
          let d = u <= 0 ? 0n : BigInt(c.slice(0, u).padEnd(u, "0"))
          return d < t ? i - d : 0n
        },
        di: function (e, t) {
          return e - Math.round((e * t) / 100)
        },
        mZ: function ({
          amountPerCredit: e,
          creditQuantityStep: t,
          minimumChargeMinorUnits: i,
          minimumCreditPurchaseQuantityFloor: r,
          minorUnitExponent: s,
        }) {
          var n
          return null == e || null == s || e <= 0
            ? Math.max(t, r ?? 0)
            : Math.max(t, Math.ceil(Math.ceil(i / (e * Math.pow(10, s))) / (n = t)) * n, r ?? 0)
        },
        o8: function (e, t) {
          let i = Number.parseInt(t, 10)
          return Number.isSafeInteger(i) && i > 0
            ? Math.max(
                0,
                (function (...[e, t]) {
                  return "number" == typeof e && "number" == typeof t ? e - t : BigInt(e) - BigInt(t)
                })(e, i),
              )
            : e
        },
        tG: function ({ maximumCreditQuantity: e, amountPerCredit: t, minorUnitExponent: i, roundsCredits: s }) {
          if (!Number.isSafeInteger(e) || e < 0) return null
          let n = r(t, i)
          if (null == n) return null
          if (s) {
            let r = 2n * n.denominator,
              s = Number(((2n * BigInt(e) + 1n) * n.numerator - 1n) / r)
            if (!Number.isSafeInteger(s)) return null
            let a = 10 ** i,
              o = (e) => Math.round(e / a / t)
            return (
              o(s) > e ? (s -= 1) : Number.isSafeInteger(s + 1) && o(s + 1) <= e && (s += 1),
              { amountMinorUnits: s, creditQuantity: o(s) }
            )
          }
          let a = n.numerator,
            o = n.denominator
          for (; 0n !== o;) [a, o] = [o, a % o]
          let l = n.denominator / a,
            c = (BigInt(e) / l) * l,
            u = Number((c * n.numerator) / n.denominator)
          return Number.isSafeInteger(u) ? { amountMinorUnits: u, creditQuantity: Number(c) } : null
        },
        v7: function ({ amountPerCredit: e, amountMinorUnits: t, minorUnitExponent: i }) {
          var s
          let n
          if (t < 0n) return null
          let a = r(e, i)
          return null == a ||
            (n = (t * (s = a).denominator + s.numerator - 1n) / s.numerator) > BigInt(Number.MAX_SAFE_INTEGER)
            ? null
            : Number(n)
        },
      },
    )
  },
  xI3j(e, t, i) {
    i.d(t, { ReviewUpsellSetup: () => eh })
    var r = i("ABep"),
      s = i("QosV"),
      n = i("ESTr")
    let a = (0, n.a)({
      name: "chevron-right-md-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 9.25, y: 5.25, width: 7.292725, height: 13.5 },
        visualBounds: { x: 9.25, y: 5.25, width: 7.292725, height: 13.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 9.25, y: 5.25, width: 7.292725, height: 13.5 },
        center: { x: 12.896363, y: 12 },
        insets: { top: 5.25, right: 7.457275, bottom: 5.25, left: 9.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12.896363, y: 12 }, foreground: { x: 12.896363, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.46967 17.4697C9.17678 17.7626 9.17678 18.2373 9.46967 18.5302C9.76256 18.8231 10.2373 18.8231 10.5302 18.5302L16.1767 12.8837C16.6648 12.3956 16.6648 11.6043 16.1767 11.1162L10.5302 5.46967C10.2373 5.17678 9.76256 5.17678 9.46967 5.46967C9.17678 5.76256 9.17678 6.23732 9.46967 6.53022L14.9394 11.9999L9.46967 17.4697Z" fill="currentColor"/>',
    })
    var o = i("qmMi"),
      l = i("tUUe"),
      c = i("zd8w"),
      u = i("oyxz"),
      d = i("Ywss"),
      g = i("Rvvc"),
      p = i("SPnB"),
      f = i("eFn4"),
      m = i("HOLv"),
      v = i("uMwG"),
      h = i("Vujf"),
      y = i("ElQ7"),
      _ = i("Sm6l"),
      w = i("JNtf"),
      b = i("mUDD"),
      x = i("SGsN"),
      M = i("F0xz"),
      C = i("OWtl"),
      j = i("u5Xi"),
      S = i("AWNZ"),
      A = i("ZEx5"),
      k = i("SAl8"),
      R = i("Nwp9")
    let N = (0, o.T1)(C.u, (e) => (0, R.m3)(`review-upsell-dismissed:${e}`, { code: !1, security: !1 })),
      I = (0, n.a)({
        name: "agent-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 0.785686, y: 2.044922, width: 30.428631, height: 27.910156 },
          visualBounds: { x: 0.785686, y: 2.044922, width: 30.428631, height: 27.910156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 0.785686, y: 2.044922, width: 30.428631, height: 27.910156 },
          center: { x: 16.000002, y: 16 },
          insets: { top: 2.044922, right: 0.785683, bottom: 2.044922, left: 0.785686 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16.000002, y: 16 }, foreground: { x: 16.000002, y: 16 } },
        },
        capabilities: ["icon"],
        body: '<path d="M17.1445 21.0837V18.917C17.1445 18.0334 17.8611 17.3168 18.7448 17.3168C19.6284 17.3168 20.3451 18.0334 20.3451 18.917V21.0837C20.3449 21.9672 19.6284 22.684 18.7448 22.684C17.8612 22.684 17.1447 21.9672 17.1445 21.0837Z" fill="currentColor"/> <path d="M11.512 21.0837V18.917C11.512 18.0334 12.2286 17.3168 13.1122 17.3168C13.9959 17.3168 14.7125 18.0334 14.7125 18.917V21.0837C14.7124 21.9672 13.9958 22.684 13.1122 22.684C12.2287 22.684 11.5121 21.9672 11.512 21.0837Z" fill="currentColor"/> <path d="M25.6719 18.9897C25.6458 17.8563 25.5675 16.7272 25.3623 15.517C25.1776 14.4277 24.273 13.5593 23.0859 13.3705C20.604 12.976 18.5237 12.7993 16 12.7993C13.4762 12.7993 11.3952 12.9759 8.91309 13.3705C7.7261 13.5593 6.82137 14.4278 6.63672 15.517C6.3632 17.1305 6.31652 18.6 6.31641 20.1274L6.32813 21.2651C6.35418 22.3984 6.43157 23.5276 6.63672 24.7377C6.82137 25.827 7.7261 26.6954 8.91309 26.8842C11.3952 27.2788 13.4762 27.4555 16 27.4555C18.5237 27.4555 20.604 27.2788 23.0859 26.8842C24.273 26.6955 25.1776 25.827 25.3623 24.7377C25.6358 23.1242 25.6825 21.6548 25.6826 20.1274L25.6719 18.9897ZM28.1709 21.3227C28.1431 22.5325 28.0584 23.7918 27.8272 25.1557C27.4472 27.3966 25.6273 29.0113 23.4785 29.353C20.8757 29.7668 18.6639 29.9555 16 29.9555C13.336 29.9555 11.1235 29.7668 8.52051 29.353C6.37186 29.0112 4.55177 27.3966 4.17188 25.1557C3.94065 23.7918 3.85691 22.5325 3.8291 21.3227L3.81641 20.1274C3.81653 18.55 3.86359 16.9175 4.17188 15.0991C4.55177 12.8582 6.37186 11.2435 8.52051 10.9018C11.1235 10.488 13.336 10.2993 16 10.2993C18.6639 10.2993 20.8757 10.488 23.4785 10.9018C25.6273 11.2434 27.4472 12.8581 27.8272 15.0991C28.1354 16.9175 28.1825 18.55 28.1826 20.1274L28.1709 21.3227Z" fill="currentColor"/> <path d="M14.75 10.8773V8.60284C14.75 7.91249 15.3096 7.35284 16 7.35284C16.6904 7.35284 17.25 7.91249 17.25 8.60284V10.8773C17.25 11.5676 16.6904 12.1273 16 12.1273C15.3096 12.1273 14.75 11.5676 14.75 10.8773Z" fill="currentColor"/> <path d="M17.2459 5.79004C17.2457 5.10236 16.6875 4.54492 15.9998 4.54492C15.3122 4.54506 14.7548 5.10244 14.7546 5.79004C14.7546 6.47775 15.3121 7.036 15.9998 7.03613C16.6876 7.03613 17.2459 6.47784 17.2459 5.79004ZM19.7459 5.79004C19.7459 7.85855 18.0683 9.53613 15.9998 9.53613C13.9314 9.536 12.2546 7.85847 12.2546 5.79004C12.2548 3.72173 13.9314 2.04506 15.9998 2.04492C18.0682 2.04492 19.7457 3.72164 19.7459 5.79004Z" fill="currentColor"/> <path d="M29.709 16.3178C30.3961 16.251 31.0075 16.7537 31.0743 17.4408C31.261 19.3625 31.2612 20.4601 31.0736 22.3216C31.0042 23.0083 30.3914 23.5085 29.7047 23.4392C29.018 23.3699 28.5178 22.7571 28.5871 22.0703C28.7576 20.3785 28.7573 19.446 28.5859 17.682C28.5193 16.9952 29.0222 16.3848 29.709 16.3178Z" fill="currentColor"/> <path d="M2.291 16.3178C1.60388 16.251 0.992515 16.7537 0.925748 17.4408C0.739035 19.3625 0.738757 20.4601 0.926367 22.3216C0.995809 23.0083 1.60859 23.5085 2.29532 23.4392C2.98201 23.3699 3.48216 22.7571 3.41294 22.0703C3.24245 20.3785 3.24269 19.446 3.41409 17.682C3.48066 16.9952 2.97777 16.3848 2.291 16.3178Z" fill="currentColor"/>',
      })
    var P = i("FT3i"),
      q = "surface-XpHgLD",
      E = "title-O_xZAr",
      T = "description-MPxg3x"
    function G(e) {
      let t,
        i,
        n,
        a,
        o = (0, s.c)(11),
        { kind: l } = e
      return (
        o[0] !== l
          ? ((t = (0, r.jsx)("div", {
              className: "icon-MHF9tU",
              children: "security" === l ? (0, r.jsx)(m.I, { asset: P.q }) : (0, r.jsx)(m.I, { asset: I }),
            })),
            (o[0] = l),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== l
          ? ((i = (0, r.jsx)("div", {
              className: E,
              children: (0, r.jsx)(w.L3, {
                className: "text-heading-lg leading-7 font-semibold",
                children: (0, r.jsx)(u.A, {
                  id: "codeReview.setup.dialog.title",
                  defaultMessage: "{kind, select, code {Review agent} other {Security review}}",
                  values: { kind: l },
                }),
              }),
            })),
            (o[2] = l),
            (o[3] = i))
          : (i = o[3]),
        o[4] !== l
          ? ((n = (0, r.jsx)("div", {
              className: T,
              children: (0, r.jsx)(w.rr, {
                children: (0, r.jsx)(u.A, {
                  id: "codeReview.setup.dialog.description",
                  defaultMessage:
                    "{kind, select, code {Scan PRs for bugs and vulnerabilities} other {Scan PRs for security vulnerabilities}}",
                  values: { kind: l },
                }),
              }),
            })),
            (o[4] = l),
            (o[5] = n))
          : (n = o[5]),
        o[6] !== l || o[7] !== t || o[8] !== i || o[9] !== n
          ? ((a = (0, r.jsxs)("div", {
              className: q,
              "data-variant": "header",
              "data-artwork": l,
              children: [t, i, n],
            })),
            (o[6] = l),
            (o[7] = t),
            (o[8] = i),
            (o[9] = n),
            (o[10] = a))
          : (a = o[10]),
        a
      )
    }
    var U = i("ClXH"),
      L = i("on57"),
      D = i("Wf1j"),
      O = i("Sezd"),
      F = i("wZQ4"),
      B = i("evwP"),
      z = i("okCa"),
      W = i("RNul"),
      $ = i("GEsy")
    function Z(e, t) {
      return (
        "never_review" !== e.global_review_preference &&
        ("review_everyone" === e.global_review_preference ||
          "team" === e.review_preference ||
          (null == t ? null : "always" === t))
      )
    }
    function Q(e, t, i, r) {
      if ("repository_admin_required" === e.edit_blocked_reason) return "admin"
      if ("repository_write_access_required" === e.edit_blocked_reason) return "write"
      if (null !== e.edit_blocked_reason || e.repository.archived) return "unavailable"
      if (e.funding_authorization_required) return "funding"
      let s = Z(e, t?.code_review_preference)
      if ("code" === i && !r) return null == s ? "preferences" : s ? "enabled" : null
      if (null == e.security_review) return "unavailable"
      let n = Z(e.security_review, null == t ? void 0 : (t.security_review?.preference ?? "repo_default"))
      return null == n || ("code" === i && null == s)
        ? "preferences"
        : "code" === i
          ? s && n
            ? "enabled"
            : null
          : n
            ? "enabled"
            : null == s
              ? "preferences"
              : s
                ? null
                : "code_required"
    }
    function V(e, t) {
      return "all" === t
        ? "review_everyone" === e.global_review_preference
        : "review_if_enabled" === e.global_review_preference && "team" === e.review_preference
    }
    function K(e) {
      let t,
        i = (0, s.c)(3),
        { completed: n, total: a } = e
      return (
        i[0] !== n || i[1] !== a
          ? ((t = (0, r.jsx)(u.A, {
              id: "codeReview.setup.repositoryProgress",
              defaultMessage:
                "{completed, number} of {total, plural, one {# repository processed} other {# repositories processed}}",
              values: { completed: n, total: a },
            })),
            (i[0] = n),
            (i[1] = a),
            (i[2] = t))
          : (t = i[2]),
        t
      )
    }
    function H(e) {
      let t,
        i,
        n,
        a,
        l,
        d,
        g,
        p,
        f,
        y,
        w,
        x,
        M,
        C,
        j,
        S,
        k,
        R,
        N,
        I,
        P,
        q,
        E = (0, s.c)(110),
        {
          provider: T,
          connectorId: G,
          kind: Z,
          selected: V,
          disabled: H,
          progress: ee,
          onChange: et,
          requireSecurity: ei,
        } = e,
        er = void 0 !== ei && ei,
        es = (0, D.A)(),
        { data: en, isPending: ea } = (0, v.wJ)(),
        eo = (0, c.useId)(),
        [el, ec] = (0, c.useState)(""),
        eu = (0, $.o)(el, 200),
        ed = (0, c.useRef)(null)
      E[0] !== G || E[1] !== eu || E[2] !== T
        ? ((t = { provider: T, connectorId: G, search: eu }), (E[0] = G), (E[1] = eu), (E[2] = T), (E[3] = t))
        : (t = E[3])
      let {
        data: eg,
        isLoading: ep,
        isFetching: ef,
        isError: em,
        isFetchNextPageError: ev,
        isFetchingNextPage: eh,
        hasNextPage: ey,
        fetchNextPage: e_,
        refetch: ew,
      } = (0, o._U)(h.jm, t)
      if (
        E[4] !== eg?.pages ||
        E[5] !== eg?.pages.flatMap ||
        E[6] !== eu ||
        E[7] !== H ||
        E[8] !== eo ||
        E[9] !== es ||
        E[10] !== Z ||
        E[11] !== et ||
        E[12] !== en ||
        E[13] !== ea ||
        E[14] !== ee ||
        E[15] !== er ||
        E[16] !== el ||
        E[17] !== V
      ) {
        let e,
          t,
          s,
          o,
          c,
          v,
          h,
          _,
          C,
          j = eg?.pages.flatMap(J) ?? []
        if (((l = j), 0 === eu.trim().length)) {
          let e = new Set(j.map(Y))
          l = [...V.filter((t) => !e.has(t.repository.id)), ...j]
        }
        E[30] !== V.length
          ? ((e = (0, r.jsx)(u.A, {
              id: "codeReview.setup.selectedRepositoryCount",
              defaultMessage: "{count, plural, one {# repository selected} other {# repositories selected}}",
              values: { count: V.length },
            })),
            (E[30] = V.length),
            (E[31] = e))
          : (e = E[31])
        let S = e
        ;((a = b.RW),
          E[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)("span", {
                className: "text-base",
                children: (0, r.jsx)(u.A, {
                  id: "codeReview.setup.repositories",
                  defaultMessage: "Review repositories",
                }),
              })),
              (E[32] = t))
            : (t = E[32]),
          E[33] !== S
            ? ((s = (0, r.jsx)("span", {
                className: "invisible col-start-1 row-start-1",
                "aria-hidden": !0,
                children: S,
              })),
              (E[33] = S),
              (E[34] = s))
            : (s = E[34]),
          E[35] !== V.length
            ? ((o = (0, r.jsx)("span", {
                className: "invisible col-start-1 row-start-1",
                "aria-hidden": !0,
                children: (0, r.jsx)(K, { completed: V.length, total: V.length }),
              })),
              (E[35] = V.length),
              (E[36] = o))
            : (o = E[36]),
          E[37] !== ee || E[38] !== S
            ? ((c = (0, r.jsx)("span", {
                className: "col-start-1 row-start-1",
                role: "status",
                children: null != ee ? (0, r.jsx)(K, { ...ee }) : S,
              })),
              (E[37] = ee),
              (E[38] = S),
              (E[39] = c))
            : (c = E[39]),
          E[40] !== s || E[41] !== o || E[42] !== c
            ? ((d = (0, r.jsxs)("div", {
                className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 select-none",
                children: [
                  t,
                  (0, r.jsxs)("div", {
                    className: "grid max-w-full text-end text-sm text-secondary tabular-nums",
                    children: [s, o, c],
                  }),
                ],
              })),
              (E[40] = s),
              (E[41] = o),
              (E[42] = c),
              (E[43] = d))
            : (d = E[43]),
          (n = A.t),
          (x = "outlined"),
          (M = !1),
          (i = b.RW),
          (y = "p-3"),
          E[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (e) => {
                ;(ec(e), ed.current?.scrollTo({ top: 0 }))
              }),
              (E[44] = v))
            : (v = E[44]),
          E[45] !== es
            ? ((h = es.formatMessage({ id: "codeReview.setup.search.label", defaultMessage: "Search repositories" })),
              (E[45] = es),
              (E[46] = h))
            : (h = E[46]),
          E[47] !== es
            ? ((_ = es.formatMessage({ id: "codeReview.setup.search.placeholder", defaultMessage: "Search" })),
              (E[47] = es),
              (E[48] = _))
            : (_ = E[48]),
          E[49] !== H || E[50] !== eo || E[51] !== el || E[52] !== h || E[53] !== _
            ? ((w = (0, r.jsx)(z.s, {
                id: eo,
                variant: "catalog-compact",
                autoFocus: !0,
                disabled: H,
                searchQuery: el,
                onKeyDown: X,
                onSearchQueryChange: v,
                label: h,
                placeholder: _,
              })),
              (E[49] = H),
              (E[50] = eo),
              (E[51] = el),
              (E[52] = h),
              (E[53] = _),
              (E[54] = w))
            : (w = E[54]),
          (g = ed),
          (p = "flex h-60 shrink-0 flex-col overflow-y-auto"),
          E[55] !== eu ||
          E[56] !== H ||
          E[57] !== eo ||
          E[58] !== Z ||
          E[59] !== et ||
          E[60] !== en ||
          E[61] !== ea ||
          E[62] !== er ||
          E[63] !== el ||
          E[64] !== V
            ? ((C = (e) => {
                let t = Q(e, en, Z, er),
                  i = V.some((t) => t.repository.id === e.repository.id)
                return (0, r.jsxs)(
                  "label",
                  {
                    className: (0, L.A)(
                      "flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-base select-none",
                      null == t ? "cursor-interaction hover:bg-secondary-ghost-hover" : "text-secondary",
                    ),
                    htmlFor: `${eo}-${e.repository.id}`,
                    children: [
                      (0, r.jsx)("span", {
                        className: "relative flex",
                        children: (0, r.jsx)(O.S, {
                          id: `${eo}-${e.repository.id}`,
                          variant: "secondary",
                          checked: i,
                          "aria-describedby": null == t ? void 0 : `${eo}-${e.repository.id}-status`,
                          disabled: H || el !== eu || (null != t && !i),
                          onCheckedChange: (t) => {
                            et(t ? [...V, e] : V.filter((t) => t.repository.id !== e.repository.id))
                          },
                        }),
                      }),
                      (0, r.jsxs)("span", {
                        className: "min-w-0 flex-1 truncate",
                        children: [
                          (0, r.jsx)("span", {
                            className: "text-secondary",
                            children: e.repository.repository_full_name.slice(
                              0,
                              e.repository.repository_full_name.lastIndexOf("/") + 1,
                            ),
                          }),
                          e.repository.repository_full_name.slice(
                            e.repository.repository_full_name.lastIndexOf("/") + 1,
                          ),
                        ],
                      }),
                      null != t &&
                        (0, r.jsxs)("span", {
                          id: `${eo}-${e.repository.id}-status`,
                          className: "flex shrink-0 items-center gap-1 text-sm text-secondary",
                          children: [
                            "enabled" === t && (0, r.jsx)(m.I, { asset: U.G }),
                            (0, r.jsx)(u.A, {
                              id: "codeReview.setup.repository.status",
                              defaultMessage:
                                "{status, select, enabled {Enabled} admin {Admin access required} write {Write access required} funding {Funding approval required} loading {Loading settings\u2026} code_required {Enable code review first} other {Unavailable}}",
                              values: { status: "preferences" === t && ea ? "loading" : t },
                            }),
                          ],
                        }),
                    ],
                  },
                  e.repository.id,
                )
              }),
              (E[55] = eu),
              (E[56] = H),
              (E[57] = eo),
              (E[58] = Z),
              (E[59] = et),
              (E[60] = en),
              (E[61] = ea),
              (E[62] = er),
              (E[63] = el),
              (E[64] = V),
              (E[65] = C))
            : (C = E[65]),
          (f = l.map(C)),
          (E[4] = eg?.pages),
          (E[5] = eg?.pages.flatMap),
          (E[6] = eu),
          (E[7] = H),
          (E[8] = eo),
          (E[9] = es),
          (E[10] = Z),
          (E[11] = et),
          (E[12] = en),
          (E[13] = ea),
          (E[14] = ee),
          (E[15] = er),
          (E[16] = el),
          (E[17] = V),
          (E[18] = i),
          (E[19] = n),
          (E[20] = a),
          (E[21] = l),
          (E[22] = d),
          (E[23] = g),
          (E[24] = p),
          (E[25] = f),
          (E[26] = y),
          (E[27] = w),
          (E[28] = x),
          (E[29] = M))
      } else
        ((i = E[18]),
          (n = E[19]),
          (a = E[20]),
          (l = E[21]),
          (d = E[22]),
          (g = E[23]),
          (p = E[24]),
          (f = E[25]),
          (y = E[26]),
          (w = E[27]),
          (x = E[28]),
          (M = E[29]))
      ;(E[66] !== eu ||
      E[67] !== H ||
      E[68] !== e_ ||
      E[69] !== em ||
      E[70] !== ev ||
      E[71] !== ef ||
      E[72] !== ew ||
      E[73] !== el
        ? ((C =
            em &&
            (0, r.jsx)(_.$, {
              color: "secondary",
              disabled: H || ef || el !== eu,
              onClick: () => {
                ev ? e_() : ew()
              },
              children: (0, r.jsx)(u.A, {
                id: "codeReview.setup.search.retry",
                defaultMessage: "Couldn\u2019t load repositories \u2014 retry",
              }),
            })),
          (E[66] = eu),
          (E[67] = H),
          (E[68] = e_),
          (E[69] = em),
          (E[70] = ev),
          (E[71] = ef),
          (E[72] = ew),
          (E[73] = el),
          (E[74] = C))
        : (C = E[74]),
        E[75] !== ep
          ? ((j =
              ep &&
              (0, r.jsx)(B.W, {
                className: "min-h-9 flex-1",
                children: (0, r.jsxs)("span", {
                  role: "status",
                  children: [
                    (0, r.jsx)(W.y, { className: "icon-xs" }),
                    (0, r.jsx)("span", {
                      className: "sr-only",
                      children: (0, r.jsx)(u.A, {
                        id: "codeReview.setup.search.loading",
                        defaultMessage: "Loading repositories\u2026",
                      }),
                    }),
                  ],
                }),
              })),
            (E[75] = ep),
            (E[76] = j))
          : (j = E[76]),
        E[77] !== ey || E[78] !== em || E[79] !== ef || E[80] !== l
          ? ((S =
              !em &&
              !ef &&
              !ey &&
              0 === l.length &&
              (0, r.jsx)(B.W, {
                className: "flex-1",
                children: (0, r.jsx)(u.A, {
                  id: "codeReview.setup.search.empty",
                  defaultMessage: "No repositories found",
                }),
              })),
            (E[77] = ey),
            (E[78] = em),
            (E[79] = ef),
            (E[80] = l),
            (E[81] = S))
          : (S = E[81]))
      let eb = ey && !em && !ef && !H && el === eu
      return (
        E[82] !== e_ ? ((k = () => void e_()), (E[82] = e_), (E[83] = k)) : (k = E[83]),
        E[84] !== eh || E[85] !== eb || E[86] !== k
          ? ((R = (0, r.jsx)(F.D, { rootRef: ed, hasNextPage: eb, isFetchingNextPage: eh, onLoadNextPage: k })),
            (E[84] = eh),
            (E[85] = eb),
            (E[86] = k),
            (E[87] = R))
          : (R = E[87]),
        E[88] !== C || E[89] !== j || E[90] !== S || E[91] !== R || E[92] !== g || E[93] !== p || E[94] !== f
          ? ((N = (0, r.jsxs)("div", { ref: g, className: p, children: [f, C, j, S, R] })),
            (E[88] = C),
            (E[89] = j),
            (E[90] = S),
            (E[91] = R),
            (E[92] = g),
            (E[93] = p),
            (E[94] = f),
            (E[95] = N))
          : (N = E[95]),
        E[96] !== i || E[97] !== N || E[98] !== y || E[99] !== w
          ? ((I = (0, r.jsxs)(i, { className: y, children: [w, N] })),
            (E[96] = i),
            (E[97] = N),
            (E[98] = y),
            (E[99] = w),
            (E[100] = I))
          : (I = E[100]),
        E[101] !== n || E[102] !== I || E[103] !== x || E[104] !== M
          ? ((P = (0, r.jsx)(n, { variant: x, dividers: M, children: I })),
            (E[101] = n),
            (E[102] = I),
            (E[103] = x),
            (E[104] = M),
            (E[105] = P))
          : (P = E[105]),
        E[106] !== a || E[107] !== d || E[108] !== P
          ? ((q = (0, r.jsxs)(a, { children: [d, P] })), (E[106] = a), (E[107] = d), (E[108] = P), (E[109] = q))
          : (q = E[109]),
        q
      )
    }
    function X(e) {
      "Enter" === e.key && e.preventDefault()
    }
    function Y(e) {
      return e.repository.id
    }
    function J(e) {
      return e.repo_review_settings
    }
    function ee(e) {
      let t,
        i,
        n,
        a,
        o,
        l,
        c,
        d,
        g,
        p,
        f,
        m,
        v,
        h,
        y = (0, s.c)(40),
        { results: w, options: x, saving: M, completed: C, onRetry: j, onSettings: S } = e,
        k = void 0 === C ? 0 : C
      y[0] !== w
        ? ((i = w.filter(er)),
          (t = w.length - i.length),
          (n = i.some(ei)),
          (y[0] = w),
          (y[1] = t),
          (y[2] = i),
          (y[3] = n))
        : ((t = y[1]), (i = y[2]), (n = y[3]))
      let R = n,
        N = "code" === x.kind && x.security ? "both" : x.kind
      return (
        y[4] !== k || y[5] !== i || y[6] !== M
          ? ((a = M && (0, r.jsx)(K, { completed: k, total: i.length })),
            (y[4] = k),
            (y[5] = i),
            (y[6] = M),
            (y[7] = a))
          : (a = y[7]),
        y[8] !== t || y[9] !== N || y[10] !== M
          ? ((o =
              !M &&
              0 === t &&
              (0, r.jsx)(u.A, {
                id: "codeReview.setup.result.failed.title",
                defaultMessage:
                  "{review, select, security {Couldn\u2019t enable security review} code {Couldn\u2019t enable code review} other {Couldn\u2019t enable code and security review}}",
                values: { review: N },
              })),
            (y[8] = t),
            (y[9] = N),
            (y[10] = M),
            (y[11] = o))
          : (o = y[11]),
        y[12] !== t || y[13] !== w.length || y[14] !== M
          ? ((l =
              !M &&
              t > 0 &&
              (0, r.jsx)(u.A, {
                id: "codeReview.setup.result.count",
                defaultMessage: "Enabled for {enabled, number} of {total, number} repositories",
                values: { enabled: t, total: w.length },
              })),
            (y[12] = t),
            (y[13] = w.length),
            (y[14] = M),
            (y[15] = l))
          : (l = y[15]),
        y[16] !== a || y[17] !== o || y[18] !== l
          ? ((c = (0, r.jsxs)("span", { role: "status", children: [a, o, l] })),
            (y[16] = a),
            (y[17] = o),
            (y[18] = l),
            (y[19] = c))
          : (c = y[19]),
        y[20] !== R
          ? ((d = R
              ? (0, r.jsx)(u.A, {
                  id: "codeReview.setup.result.accountChanged",
                  defaultMessage: "Your account changed; reopen setup to continue",
                })
              : void 0),
            (y[20] = R),
            (y[21] = d))
          : (d = y[21]),
        y[22] !== c || y[23] !== d
          ? ((g = (0, r.jsx)(b.c7, {
              titleSize: "base",
              subtitleSize: "sm",
              subtitleTone: "secondary",
              title: c,
              subtitle: d,
            })),
            (y[22] = c),
            (y[23] = d),
            (y[24] = g))
          : (g = y[24]),
        y[25] !== w ? ((p = w.map(et)), (y[25] = w), (y[26] = p)) : (p = y[26]),
        y[27] !== p
          ? ((f = (0, r.jsx)("div", {
              className: "max-h-60 overflow-y-auto",
              children: (0, r.jsx)(A.t, { variant: "outlined", children: p }),
            })),
            (y[27] = p),
            (y[28] = f))
          : (f = y[28]),
        y[29] !== f || y[30] !== g
          ? ((m = (0, r.jsx)(b.OO, { children: (0, r.jsxs)(b.RW, { children: [g, f] }) })),
            (y[29] = f),
            (y[30] = g),
            (y[31] = m))
          : (m = y[31]),
        y[32] !== t || y[33] !== j || y[34] !== S || y[35] !== M
          ? ((v = (0, r.jsx)(b.Es, {
              children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    t > 0
                      ? (0, r.jsx)(_.$, {
                          size: e,
                          color: "tinted",
                          radius: "full",
                          disabled: M,
                          onClick: S,
                          children: (0, r.jsx)(u.A, {
                            id: "codeReview.setup.settings",
                            defaultMessage: "Review settings",
                          }),
                        })
                      : null,
                    (0, r.jsx)(_.$, {
                      size: e,
                      color: "primary",
                      radius: "full",
                      disabled: M,
                      loading: M,
                      onClick: j,
                      children: (0, r.jsx)(u.A, {
                        id: "codeReview.setup.result.retry",
                        defaultMessage: "{all, select, yes {Retry all} other {Retry failed}}",
                        values: { all: 0 === t ? "yes" : "no" },
                      }),
                    }),
                  ],
                }),
            })),
            (y[32] = t),
            (y[33] = j),
            (y[34] = S),
            (y[35] = M),
            (y[36] = v))
          : (v = y[36]),
        y[37] !== m || y[38] !== v
          ? ((h = (0, r.jsxs)(r.Fragment, { children: [m, v] })), (y[37] = m), (y[38] = v), (y[39] = h))
          : (h = y[39]),
        h
      )
    }
    function et(e) {
      return (0, r.jsx)(
        S.ic,
        {
          size: "compact",
          label: e.repository.repository.repository_full_name,
          description:
            "failed" === e.status && "account" !== e.reason
              ? (e.errorMessage ??
                (0, r.jsx)(u.A, {
                  id: "codeReview.setup.result.repositoryError",
                  defaultMessage:
                    "{reason, select, permission {You don\u2019t have permission to configure reviews} funding {Authorize review funding in settings} conflict {Review settings changed. Try again} other {Couldn\u2019t save review settings. Try again}}",
                  values: { reason: e.reason ?? "save" },
                }))
              : void 0,
          controlSizing: "content",
          control:
            "enabled" === e.status
              ? (0, r.jsxs)("span", {
                  className: "flex items-center gap-2 text-success select-none",
                  children: [
                    (0, r.jsx)(m.I, { asset: U.G }),
                    (0, r.jsx)(u.A, { id: "codeReview.setup.result.enabled", defaultMessage: "Enabled" }),
                  ],
                })
              : (0, r.jsx)("span", {
                  className: "text-danger select-none",
                  children: (0, r.jsx)(u.A, { id: "codeReview.setup.result.failed", defaultMessage: "Failed" }),
                }),
        },
        e.repository.repository.id,
      )
    }
    function ei(e) {
      return "account" === e.reason
    }
    function er(e) {
      return "failed" === e.status
    }
    var es = i("LH8k"),
      en = i("kK7d"),
      ea = i("eShZ")
    function eo(e) {
      let t,
        i,
        n,
        a,
        l,
        d,
        g,
        f,
        m,
        v,
        h,
        R,
        I,
        P,
        q,
        E = (0, s.c)(63),
        { initialRepository: T, kind: U, provider: L, connectorId: D, identity: O, onClose: F, onSettings: B } = e,
        z = (0, o.gh)(C.u),
        { trackCodeReviewInteraction: W } = (0, y.uM)()
      E[0] !== T ? ((t = [T]), (E[0] = T), (E[1] = t)) : (t = E[1])
      let [$, Q] = (0, c.useState)(t),
        K = "security" === U
      E[2] !== U || E[3] !== K
        ? ((i = { kind: U, scope: "all", security: K, codeTrigger: "pr_open", securityTrigger: "code_review" }),
          (E[2] = U),
          (E[3] = K),
          (E[4] = i))
        : (i = E[4])
      let [X, Y] = (0, c.useState)(i),
        [J, et] = (0, c.useState)(null),
        [ei, er] = (0, c.useState)(null),
        eo = null != ei
      E[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, r.jsx)(u.A, { id: "codeReview.setup.enable", defaultMessage: "Enable" })), (E[5] = n))
        : (n = E[5])
      let eh = n
      E[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, r.jsx)(u.A, { id: "codeReview.setup.enabling", defaultMessage: "Enabling" })), (E[6] = a))
        : (a = E[6])
      let ey = a
      E[7] !== $ ? ((l = $.length > 0 && $.every(ev)), (E[7] = $), (E[8] = l)) : (l = E[8])
      let e_ = l,
        ew = X.security && e_
      E[9] !== X || E[10] !== ew ? ((d = { ...X, security: ew }), (E[9] = X), (E[10] = ew), (E[11] = d)) : (d = E[11])
      let eb = d
      E[12] !== eb ||
      E[13] !== O ||
      E[14] !== F ||
      E[15] !== B ||
      E[16] !== L ||
      E[17] !== $ ||
      E[18] !== J ||
      E[19] !== eo ||
      E[20] !== z ||
      E[21] !== W
        ? ((g = async function () {
            if (eo || 0 === $.length) return
            let e = performance.now()
            W(null == J ? "review_upsell_setup_enable_clicked" : "review_upsell_setup_retry_clicked")
            let t = null == J ? $ : J.filter(em).map(ef)
            er({ completed: 0, total: t.length })
            let i = await (async function (e, t, i, r, s, n) {
                let a,
                  o = () =>
                    e.get(p.chatGptAuthenticatedUserId$) === r.userId &&
                    e.get(p.chatGptAuthenticatedAccountId$) === r.accountId,
                  l = [],
                  c = 0
                for (let e = 0; e < t.length; e += 4) {
                  let r = await Promise.all(
                    t.slice(e, e + 4).map(async (e) => {
                      let t = await (async function (e) {
                        if (!o()) return { repository: e, status: "failed", reason: "account" }
                        try {
                          let t,
                            r,
                            n,
                            l = await en.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", {
                              parameters: { path: { repo_id: e.repository.id } },
                            })
                          if (!o()) return { repository: e, status: "failed", reason: "account" }
                          if (null !== l.edit_blocked_reason)
                            return { repository: e, status: "failed", reason: "permission" }
                          if (l.funding_authorization_required)
                            return { repository: e, status: "failed", reason: "funding" }
                          if (
                            ((r = V(l, i.scope)),
                            (n = null != l.security_review && V(l.security_review, i.scope)),
                            ("code" !== i.kind || r) && (!("security" === i.kind || i.security) || n))
                          )
                            return { repository: l, status: "enabled" }
                          if (
                            "code" === i.kind &&
                            !i.security &&
                            null != l.security_review &&
                            null == Z(l.security_review) &&
                            ((a = a ?? en.CodexRequest.safeGet("/wham/settings/user")), (t = await a), !o())
                          )
                            return { repository: e, status: "failed", reason: "account" }
                          let c = (function (e, t) {
                              let i = "all" === t.scope ? "review_everyone" : "review_if_enabled",
                                r = {
                                  repository: e.repository.id,
                                  review_preference: e.review_preference,
                                  funding_generation: e.funding_generation,
                                }
                              if (
                                ("code" !== t.kind ||
                                  V(e, t.scope) ||
                                  ((r.global_review_preference = i),
                                  (r.review_preference = "team"),
                                  t.codeTrigger !== e.code_review_trigger_policy &&
                                    (r.code_review_trigger_policy = t.codeTrigger)),
                                ("security" === t.kind || t.security) &&
                                  (null == e.security_review || !V(e.security_review, t.scope)))
                              ) {
                                ;((r.security_review = { global_review_preference: i }),
                                  e.security_review?.review_preference !== "team" &&
                                    (r.security_review.review_preference = "team"))
                                let s = "code" === t.kind ? "code_review" : t.securityTrigger
                                ;(s !== e.security_review?.trigger_policy && (r.security_review.trigger_policy = s),
                                  e.security_review?.severity_threshold == null &&
                                    (r.security_review.severity_threshold = "high"))
                              }
                              return r
                            })(l, i),
                            u = await en.CodexRequest.safePatch("/wham/settings/code_review", {
                              expectedErrorStatuses: [400, 403, 409],
                              requestBody: { repo_review_settings: [c] },
                            })
                          if (!o()) return { repository: e, status: "failed", reason: "account" }
                          let d = u.repo_review_settings.find((e) => e.repository === c.repository)
                          if (
                            null == d ||
                            d.review_preference !== c.review_preference ||
                            (null != c.global_review_preference &&
                              d.global_review_preference !== c.global_review_preference) ||
                            (null != c.security_review &&
                              d.security_review?.global_review_preference !==
                                c.security_review.global_review_preference) ||
                            (c.security_review?.review_preference != null &&
                              d.security_review?.review_preference !== c.security_review.review_preference)
                          )
                            return { repository: e, status: "failed", reason: "save" }
                          if (null != c.global_review_preference) {
                            let e = Z({ ...l.security_review, ...d.security_review }, t?.security_review?.preference)
                            s(
                              !0 === e
                                ? "review_upsell_setup_code_with_security_repository_enabled"
                                : "review_upsell_setup_code_without_security_repository_enabled",
                            )
                          }
                          return (
                            null != c.security_review && s("review_upsell_setup_security_repository_enabled"),
                            { repository: l, status: "enabled" }
                          )
                        } catch (r) {
                          let t = "save"
                          o()
                            ? r instanceof ea.FetchError && 403 === r.status
                              ? (t = "permission")
                              : r instanceof ea.FetchError && 409 === r.status && (t = "conflict")
                            : (t = "account")
                          let i = { repository: e, status: "failed", reason: t }
                          if ("account" !== t && r instanceof ea.FetchError && r.status >= 400 && r.status < 500) {
                            let e = (0, es.d)(r)?.message.trim()
                            e && (i.errorMessage = e)
                          }
                          return i
                        }
                      })(e)
                      return ((c += 1), n?.(c), t)
                    }),
                  )
                  l.push(...r)
                }
                return (e.queryClient.invalidateQueries({ queryKey: ["repository-review-settings"] }), l)
              })(z, t, eb, O, W, (e) => er({ completed: e, total: t.length })).finally(() => er(null)),
              s = new Map(i.map(ep)),
              n = (J ?? i).map((e) => s.get(e.repository.repository.id) ?? e),
              a = i.filter(eg).length,
              o = "partial_failure"
            if (
              (a === i.length ? (o = "success") : 0 === a && (o = "failure"),
              z.get(p.chatGptAuthenticatedUserId$) === O.userId &&
                z.get(p.chatGptAuthenticatedAccountId$) === O.accountId &&
                (0, k.X)(z, {
                  type: "upsell_setup_completed",
                  provider: L,
                  durationMs: performance.now() - e,
                  repositoryCount: t.length,
                  reviewType: "code" === eb.kind && eb.security ? "code_and_security" : eb.kind,
                  outcome: o,
                  attempt: null == J ? "enable" : "retry",
                }),
              n.every(ed))
            ) {
              let e = "code" === eb.kind && eb.security ? "both" : eb.kind
              ;(z
                .get(x.Id)
                .success(
                  (0, r.jsx)(u.A, {
                    id: "codeReview.setup.success.toastWithCount",
                    defaultMessage:
                      "{review, select, security {Security review enabled} code {Code review enabled} other {Code and security review enabled}} for {count, plural, one {# repository} other {# repositories}}",
                    values: { review: e, count: n.length },
                  }),
                  {
                    variant: "successNeutral",
                    actionPlacement: "inline",
                    primaryAction: {
                      label: (0, r.jsx)(u.A, { id: "codeReview.setup.settings", defaultMessage: "Review settings" }),
                      onClick: B,
                    },
                  },
                ),
                F())
              return
            }
            et(n)
          }),
          (E[12] = eb),
          (E[13] = O),
          (E[14] = F),
          (E[15] = B),
          (E[16] = L),
          (E[17] = $),
          (E[18] = J),
          (E[19] = eo),
          (E[20] = z),
          (E[21] = W),
          (E[22] = g))
        : (g = E[22])
      let ex = g,
        eM = !eo
      return (
        E[23] !== F || E[24] !== eo
          ? ((f = (e) => {
              e || eo || F()
            }),
            (E[23] = F),
            (E[24] = eo),
            (E[25] = f))
          : (f = E[25]),
        E[26] !== ex
          ? ((m = (e) => {
              ;(e.preventDefault(), ex())
            }),
            (E[26] = ex),
            (E[27] = m))
          : (m = E[27]),
        E[28] !== U ? ((v = (0, r.jsx)(G, { kind: U })), (E[28] = U), (E[29] = v)) : (v = E[29]),
        E[30] !== D ||
        E[31] !== O ||
        E[32] !== U ||
        E[33] !== F ||
        E[34] !== X ||
        E[35] !== ei ||
        E[36] !== L ||
        E[37] !== $ ||
        E[38] !== J ||
        E[39] !== eo ||
        E[40] !== z ||
        E[41] !== e_ ||
        E[42] !== W
          ? ((h =
              null == J &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(b.OO, {
                    children: (0, r.jsx)(H, {
                      provider: L,
                      connectorId: D,
                      kind: U,
                      requireSecurity: X.security,
                      selected: $,
                      disabled: eo,
                      progress: ei,
                      onChange: Q,
                    }),
                  }),
                  (0, r.jsx)(b.OO, {
                    children: (0, r.jsxs)(A.t, {
                      variant: "outlined",
                      dividers: !1,
                      children: [
                        (0, r.jsx)(S.ic, {
                          size: "compact",
                          label: (0, r.jsx)(u.A, {
                            id: "settings.codeReview.repository.scope",
                            defaultMessage: "Review",
                          }),
                          control: (e) =>
                            (0, r.jsx)(j.wW, {
                              ...e,
                              value: X.scope,
                              options: ["all", "team"],
                              disabled: eo,
                              onChange: (e) => Y({ ...X, scope: e }),
                              renderLabel: eu,
                            }),
                        }),
                        (0, r.jsx)(S.ic, {
                          size: "compact",
                          label: (0, r.jsx)(u.A, { id: "codeReview.setup.when", defaultMessage: "When to run" }),
                          control: (e) =>
                            "code" === U
                              ? (0, r.jsx)(j.wW, {
                                  ...e,
                                  value: X.codeTrigger,
                                  options: ["pr_open", "every_push"],
                                  disabled: eo,
                                  onChange: (e) => Y({ ...X, codeTrigger: e }),
                                  renderLabel: ec,
                                })
                              : (0, r.jsx)(j.wW, {
                                  ...e,
                                  value: X.securityTrigger,
                                  options: ["code_review", "pr_open", "every_push"],
                                  disabled: eo,
                                  onChange: (e) => Y({ ...X, securityTrigger: e }),
                                  renderLabel: el,
                                }),
                        }),
                        "code" === U && e_
                          ? (0, r.jsx)(S.ic, {
                              size: "compact",
                              label: (0, r.jsx)(u.A, {
                                id: "codeReview.setup.security",
                                defaultMessage: "Security review",
                              }),
                              description: (0, r.jsx)(u.A, {
                                id: "codeReview.setup.security.description",
                                defaultMessage: "Run additional review to detect security vulnerabilities",
                              }),
                              control: (e) =>
                                (0, r.jsx)(M.l, {
                                  ...e,
                                  checked: X.security,
                                  disabled: eo,
                                  onChange: (e) => Y({ ...X, security: e }),
                                }),
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, r.jsxs)(b.Es, {
                    expandSingleButton: !1,
                    children: [
                      (0, r.jsx)(_.$, {
                        className: "flex-1",
                        size: "formAction",
                        color: "outlineSurface",
                        radius: "full",
                        type: "button",
                        disabled: eo,
                        onClick: () => {
                          ;(z.set(z.get(N, O.userId), (e) => ({ ...e, [U]: !0 })),
                            W(
                              "code" === U
                                ? "review_upsell_setup_code_dismissed"
                                : "review_upsell_setup_security_dismissed",
                            ),
                            F())
                        },
                        children: (0, r.jsx)(u.A, {
                          id: "codeReview.setup.dismissUpsell",
                          defaultMessage: "Don\u2019t show again",
                        }),
                      }),
                      (0, r.jsx)(_.$, {
                        className: "flex-1",
                        size: "formAction",
                        color: "primary",
                        radius: "full",
                        type: "submit",
                        loading: eo,
                        disabled: eo || 0 === $.length,
                        disabledAppearance: eo ? "unchanged" : "dimmed",
                        sizingLabels: [eh, ey],
                        children: eo ? ey : eh,
                      }),
                    ],
                  }),
                ],
              })),
            (E[30] = D),
            (E[31] = O),
            (E[32] = U),
            (E[33] = F),
            (E[34] = X),
            (E[35] = ei),
            (E[36] = L),
            (E[37] = $),
            (E[38] = J),
            (E[39] = eo),
            (E[40] = z),
            (E[41] = e_),
            (E[42] = W),
            (E[43] = h))
          : (h = E[43]),
        E[44] !== eb || E[45] !== B || E[46] !== ei?.completed || E[47] !== J || E[48] !== eo || E[49] !== ex
          ? ((R =
              null != J &&
              (0, r.jsx)(ee, {
                results: J,
                options: eb,
                saving: eo,
                completed: ei?.completed ?? 0,
                onRetry: () => void ex(),
                onSettings: B,
              })),
            (E[44] = eb),
            (E[45] = B),
            (E[46] = ei?.completed),
            (E[47] = J),
            (E[48] = eo),
            (E[49] = ex),
            (E[50] = R))
          : (R = E[50]),
        E[51] !== h || E[52] !== R
          ? ((I = (0, r.jsxs)(b.R4, { children: [h, R] })), (E[51] = h), (E[52] = R), (E[53] = I))
          : (I = E[53]),
        E[54] !== m || E[55] !== v || E[56] !== I
          ? ((P = (0, r.jsxs)(b.R4, {
              variant: "chatgpt",
              size: "viewport",
              as: "form",
              onSubmit: m,
              children: [v, I],
            })),
            (E[54] = m),
            (E[55] = v),
            (E[56] = I),
            (E[57] = P))
          : (P = E[57]),
        E[58] !== eo || E[59] !== eM || E[60] !== f || E[61] !== P
          ? ((q = (0, r.jsx)(w.lG, {
              open: !0,
              size: "beacon",
              variant: "promotional",
              showDialogClose: eM,
              shouldIgnoreClickOutside: eo,
              onOpenChange: f,
              children: P,
            })),
            (E[58] = eo),
            (E[59] = eM),
            (E[60] = f),
            (E[61] = P),
            (E[62] = q))
          : (q = E[62]),
        q
      )
    }
    function el(e) {
      return "code_review" === e
        ? (0, r.jsx)(u.A, { id: "codeReview.setup.whenCodeReviewRuns", defaultMessage: "When code review runs" })
        : (0, r.jsx)(j.dN, { value: e })
    }
    function ec(e) {
      return (0, r.jsx)(j.dN, { value: e })
    }
    function eu(e) {
      return (0, r.jsx)(u.A, {
        id: "codeReview.setup.scope.option",
        defaultMessage: "{scope, select, all {All PRs} other {Team PRs}}",
        values: { scope: e },
      })
    }
    function ed(e) {
      return "enabled" === e.status
    }
    function eg(e) {
      return "enabled" === e.status
    }
    function ep(e) {
      return [e.repository.repository.id, e]
    }
    function ef(e) {
      return e.repository
    }
    function em(e) {
      return "failed" === e.status
    }
    function ev(e) {
      return null != e.security_review
    }
    function eh(e) {
      let t,
        i,
        n = (0, s.c)(7),
        { request: a } = e,
        l = (0, o.Ul)(f.xm),
        c = (0, o.Ul)(p.chatGptAuthenticatedUserId$),
        u = (0, o.Ul)(p.chatGptAuthenticatedAccountId$)
      if ("allowed" !== l.status || null == c || null == u) return null
      let d = `${c}:${u}`
      return (
        n[0] !== u || n[1] !== c ? ((t = { userId: c, accountId: u }), (n[0] = u), (n[1] = c), (n[2] = t)) : (t = n[2]),
        n[3] !== a || n[4] !== d || n[5] !== t
          ? ((i = (0, r.jsx)(ey, { request: a, identity: t }, d)), (n[3] = a), (n[4] = d), (n[5] = t), (n[6] = i))
          : (i = n[6]),
        i
      )
    }
    function ey(e) {
      let t,
        i,
        n,
        p,
        f,
        _,
        w,
        b,
        x = (0, s.c)(24),
        { request: M, identity: C } = e,
        j = (0, d.Zp)(),
        { data: S } = (0, v.wJ)(),
        A = (0, o._U)(N, C.userId),
        { trackCodeReviewInteraction: k } = (0, y.uM)()
      x[0] !== M.account ? ((t = (0, l.u)(M.account)), (x[0] = M.account), (x[1] = t)) : (t = x[1])
      let R = t,
        I = `${M.pullRequest.owner}/${M.pullRequest.repository}`
      "connectorId" in M.account
        ? (i = M.account.connectorId)
        : null == (i = M.account.connection?.connectorId ?? null) && "github.com" === M.account.hostname && (i = g.qD)
      let P = i ?? ""
      x[2] !== R || x[3] !== I || x[4] !== P
        ? ((n = { provider: R, connectorId: P, search: I }), (x[2] = R), (x[3] = I), (x[4] = P), (x[5] = n))
        : (n = x[5])
      let G = null != i
      x[6] !== G ? ((p = { enabled: G }), (x[6] = G), (x[7] = p)) : (p = x[7])
      let { data: U, isError: L, isFetching: D } = (0, o._U)(h.BX, n, p),
        O = U?.repo_review_settings.find((e) => e.repository.repository_full_name.toLowerCase() === I.toLowerCase()),
        [F, B] = (0, c.useState)(null),
        z =
          null == i || null == O || L || D
            ? null
            : null == (b = Q(O, S, "code", !1))
              ? "code"
              : "enabled" !== b
                ? null
                : null == Q(O, S, "security", !0)
                  ? "security"
                  : null
      return (
        x[8] !== O || x[9] !== A || x[10] !== z || x[11] !== B || x[12] !== k
          ? ((f =
              null == z || null == O || A[z]
                ? null
                : (0, r.jsxs)("button", {
                    className: q,
                    "data-variant": "banner",
                    "data-artwork": z,
                    type: "button",
                    onClick: () => {
                      ;(k("review_setup_upsell_opened"), B({ repository: O, kind: z }))
                    },
                    children: [
                      (0, r.jsxs)("span", {
                        className: "copy-mtj0R8",
                        children: [
                          (0, r.jsx)("span", {
                            className: E,
                            children: (0, r.jsx)(u.A, {
                              id: "codeReview.setup.banner.title",
                              defaultMessage:
                                "{kind, select, code {Set up Code Review Agent} other {Set up Security Review}}",
                              values: { kind: z },
                            }),
                          }),
                          (0, r.jsx)("span", {
                            className: T,
                            children: (0, r.jsx)(u.A, {
                              id: "codeReview.setup.banner.description",
                              defaultMessage:
                                "{kind, select, code {Scan PRs for bugs and vulnerabilities} other {Scan PRs for security vulnerabilities}}",
                              values: { kind: z },
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(m.I, { asset: a, className: "shrink-0" }),
                    ],
                  })),
            (x[8] = O),
            (x[9] = A),
            (x[10] = z),
            (x[11] = B),
            (x[12] = k),
            (x[13] = f))
          : (f = x[13]),
        x[14] !== i || x[15] !== C || x[16] !== j || x[17] !== R || x[18] !== B || x[19] !== F
          ? ((_ =
              null != F
                ? (0, r.jsx)(eo, {
                    initialRepository: F.repository,
                    kind: F.kind,
                    provider: R,
                    connectorId: i ?? "",
                    identity: C,
                    onClose: () => B(null),
                    onSettings: () => {
                      ;(B(null), j("/settings/code-review?tab=cloud"))
                    },
                  })
                : null),
            (x[14] = i),
            (x[15] = C),
            (x[16] = j),
            (x[17] = R),
            (x[18] = B),
            (x[19] = F),
            (x[20] = _))
          : (_ = x[20]),
        x[21] !== f || x[22] !== _
          ? ((w = (0, r.jsxs)(r.Fragment, { children: [f, _] })), (x[21] = f), (x[22] = _), (x[23] = w))
          : (w = x[23]),
        w
      )
    }
  },
  WrZv(e, t, i) {
    var r = i("Qgfj")
    let s = { tab: "code-navigation" },
      n = (0, r.YK)({
        tab: { id: "settings.codeNavigation.title", defaultMessage: "Code Navigation" },
        enable: { id: "settings.codeNavigation.enable", defaultMessage: "Enable code navigation" },
        description: {
          id: "settings.codeNavigation.description",
          defaultMessage: "Use language servers to find definitions and references in your projects",
        },
      }),
      a = (0, r.YK)({
        java: { id: "settings.codeNavigation.language.java", defaultMessage: "Java" },
        javascript: { id: "settings.codeNavigation.language.javascript", defaultMessage: "JavaScript" },
        kotlin: { id: "settings.codeNavigation.language.kotlin", defaultMessage: "Kotlin" },
        latex: { id: "settings.codeNavigation.language.latex", defaultMessage: "LaTeX" },
        python: { id: "settings.codeNavigation.language.python", defaultMessage: "Python" },
        rust: { id: "settings.codeNavigation.language.rust", defaultMessage: "Rust" },
        swift: { id: "settings.codeNavigation.language.swift", defaultMessage: "Swift" },
        typescript: { id: "settings.codeNavigation.language.typescript", defaultMessage: "TypeScript" },
      }),
      o = { section: "code-review", id: "code-navigation", searchParams: s, title: n.tab },
      l = {
        section: "code-review",
        id: "code-navigation-enabled",
        searchParams: s,
        title: n.enable,
        description: n.description,
      },
      c = Object.entries(a).map(([e, t]) => ({
        languageId: e,
        entry: { section: "code-review", id: `code-navigation-language-${e}`, searchParams: s, title: t },
      }))
    i.d(t, {}, { Qh: c, dP: o, f_: l })
  },
  RRpo(e, t, i) {
    let r = (0, i("Qgfj").YK)({
      creatorMicro: { id: "codexMicro.deviceName.creatorMicro", defaultMessage: "Creator Micro" },
    })
    i.d(t, {}, { b: r })
  },
  wZQ4(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      n = i("zd8w"),
      a = i("RNul")
    function o(e) {
      return e.isIntersecting
    }
    i.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            i,
            l,
            c,
            u,
            d = (0, s.c)(20),
            {
              loadingPlaceholder: g,
              hasNextPage: p,
              isFetchingNextPage: f,
              onLoadNextPage: m,
              rootMargin: v,
              rootRef: h,
            } = e,
            y = (0, n.useRef)(null)
          d[0] !== p || d[1] !== f || d[2] !== m
            ? ((t = () => {
                p && !f && m()
              }),
              (d[0] = p),
              (d[1] = f),
              (d[2] = m),
              (d[3] = t))
            : (t = d[3])
          let _ = (0, n.useEffectEvent)(t)
          if (
            (d[4] !== p || d[5] !== f || d[6] !== _ || d[7] !== v || d[8] !== h
              ? ((i = () => {
                  let e = y.current
                  if (null == e || !p || f) return
                  if ("u" < typeof IntersectionObserver) return void _()
                  let t = new IntersectionObserver(
                    (e) => {
                      e.some(o) && (t.disconnect(), _())
                    },
                    { root: h?.current, rootMargin: v },
                  )
                  return (
                    t.observe(e),
                    () => {
                      t.disconnect()
                    }
                  )
                }),
                (d[4] = p),
                (d[5] = f),
                (d[6] = _),
                (d[7] = v),
                (d[8] = h),
                (d[9] = i))
              : (i = d[9]),
            d[10] !== p || d[11] !== f || d[12] !== v || d[13] !== h
              ? ((l = [p, f, v, h]), (d[10] = p), (d[11] = f), (d[12] = v), (d[13] = h), (d[14] = l))
              : (l = d[14]),
            (0, n.useEffect)(i, l),
            !p && !f)
          )
            return null
          if (!f) {
            let e
            return (
              d[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)("div", { ref: y, className: "min-h-px w-full" })), (d[15] = e))
                : (e = d[15]),
              e
            )
          }
          if (void 0 !== g) {
            let e
            return (
              d[16] !== g
                ? ((e = (0, r.jsx)("div", { ref: y, className: "min-h-px w-full", children: g })),
                  (d[16] = g),
                  (d[17] = e))
                : (e = d[17]),
              e
            )
          }
          d[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, r.jsx)("div", {
                ref: y,
                className: "flex w-full justify-center py-3",
                children: (0, r.jsx)(a.y, { className: "icon-xs text-secondary" }),
              })),
              (d[18] = c))
            : (c = d[18])
          let w = c
          return (
            d[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(r.Fragment, { children: w })] })),
                (d[19] = u))
              : (u = d[19]),
            u
          )
        },
      },
    )
  },
  uSFS(e, t, i) {
    var r = i("qmMi"),
      s = i("Qgfj"),
      n = i("SPnB"),
      a = i("OAko"),
      o = i("smwl"),
      l = i("WXto"),
      c = i("NLdj"),
      u = i("OWtl"),
      d = i("OMIV"),
      g = i("O666"),
      p = i("UR81")
    let f = (0, s.YK)({
        manageHelp: {
          id: "settings.usage.credit.balance.autoReloadLabel.help",
          defaultMessage: "Automatically buy more credits when your balance drops below the minimum you set",
        },
        manage: { id: "settings.usage.credit.balance.autoReloadLabel", defaultMessage: "Automatic reload" },
        disable: { id: "settings.usage.credit.balance.automaticReload", defaultMessage: "Automatic reload" },
      }),
      m = { section: "usage", id: "usage-automatic-reload" },
      v = { ...m, title: f.manage, description: f.manageHelp },
      h = { ...m, title: f.disable },
      y = "702739930",
      _ = (0, r.vU)(u.u, (e) => (0, o.Vc)(e)),
      w = (0, r.vU)(u.u, (e) => (0, o.bB)({ ...e, authMethod: "chatgpt" })),
      b = (0, r.un)(u.u, ({ get: e }) => {
        let { authMethod: t, authLoading: i, userId: r, authenticatedAccountId: s } = e(n.PO)
        if ("chatgpt" !== t || i || null == r || null == s) return null
        let o = (0, a.F7)(e(a.LI).data)
        if (o?.id !== s) return null
        let c = o.plan_type
        if ((0, p.Hw)(c)) return null
        let u = "personal" === o.structure,
          g = e(d.RS),
          { hasPlanCreditAccess: f } = (0, l.MQ)({ authMethod: t, plan: c, statsigClient: g ? null : e(d.M9) }),
          m = (0, l.E2)({ identityReady: !0, isStatsigLoading: g, isCurrentPersonalAccount: u, hasPlanCreditAccess: f })
            ? e(l.fQ, { accountId: s, userId: r }, { enabled: !1 }).data
            : null
        return {
          accountId: s,
          userId: r,
          canManageCreditSettings: f || m?.metadata?.enrollment_step === "enrolled",
          isCurrentPersonalAccount: u,
        }
      }),
      x = (0, r.un)(u.u, ({ get: e }) => {
        let t = e(b)
        if (null == t) return null
        let { accountId: i, userId: r, canManageCreditSettings: s, isCurrentPersonalAccount: n } = t
        if (!s) {
          if (!n) return null
          let { data: t } = e(w, { accountId: i, userId: r, includePaymentMethod: !1 }, { enabled: !1 })
          return t?.isEnabled ? h : null
        }
        let { data: a } = e(_, i, { enabled: !1 }),
          o = (a?.payment_methods.length ?? 0) > 0,
          l =
            M({ canManageCreditSettings: s, hasPaymentMethodsInventory: null != a, hasSavedPaymentMethod: o }) &&
            e(g.H$, { layer: y, parameter: "enabled", disableExposureLog: !0 }),
          c = { canManageCreditSettings: s, canAddFirstPaymentMethod: l, hasSavedPaymentMethod: o },
          u = C(c) ? e(w, { accountId: i, userId: r, includePaymentMethod: !0 }, { enabled: !1 }).data : void 0
        return null != u && j(c, u) ? v : null
      })
    function M({ canManageCreditSettings: e, hasPaymentMethodsInventory: t, hasSavedPaymentMethod: i }) {
      return !1
    }
    function C({ canManageCreditSettings: e, canAddFirstPaymentMethod: t, hasSavedPaymentMethod: i }) {
      return e && !0
    }
    function j({ canManageCreditSettings: e, canAddFirstPaymentMethod: t, hasSavedPaymentMethod: i }, r) {
      return e && (i || t || (r?.isEnabled === !0 && (0, c.Zu)(r.autoReloadCreditDiscountPolicy)))
    }
    i.d(t, {}, { Cn: b, Ql: v, _K: j, bF: C, lb: x, pZ: h, pl: y, wO: M })
  },
  WXto(e, t, i) {
    var r = i("QosV"),
      s = i("qmMi"),
      n = i("zd8w"),
      a = i("UOa8"),
      o = i("YitN"),
      l = i("Kwur"),
      c = i("OAko"),
      u = i("laUo"),
      d = i("smwl"),
      g = i("jdiu"),
      p = i("eFxf"),
      f = i("OWtl"),
      m = i("hZax"),
      v = i("UR81"),
      h = i("LjYy")
    let y = "3909937021",
      _ = "1014047933",
      w = (0, s.vU)(f.u, (e) => ({
        queryKey: ["usage-limits-page-configs", e],
        queryFn: ({ signal: e }) => l.Request.safeGet("/pageConfigs/usage_limits", { signal: e }),
        staleTime: 3e4,
      })),
      b = (0, s.vU)(f.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["student-codex-credit-enrollment", e, t],
        queryFn: ({ signal: e }) =>
          l.Request.safePost("/students/refresh_enrollment_status", {
            requestBody: { campaign_id: "student_codex_credits" },
            signal: e,
          }),
        staleTime: 6e4,
        retry: !1,
      }))
    function x({ authMethod: e, plan: t, statsigClient: i }) {
      let r = "chatgpt" === e && j(t) && null != i && (0, p.fV)(i, t)
      return { hasPlanCreditAccess: "chatgpt" === e && ((0, u.IH)(t) || r), isFreeOrGoCreditPurchaseEnabled: r }
    }
    function M({ identityReady: e, isStatsigLoading: t, isCurrentPersonalAccount: i, hasPlanCreditAccess: r }) {
      return !1
    }
    function C({
      authMethod: e,
      hasCreditBalance: t = !1,
      hasEnabledAutoReload: i = !1,
      isPersonalAccount: r = !1,
      plan: s,
      isFreeOrGoCreditPurchaseEnabled: n = !1,
      hasStudentCreditAccess: a = !1,
      isEnterpriseUsageSettingsEnabled: o = !1,
      isConsumerUsageAnalyticsEnabled: l = !1,
      isBusinessUsageDashboardEnabled: c = !1,
      canPurchaseBusinessCredits: d = !1,
      isBusinessWorkspaceOwner: g = !1,
    }) {
      let p = "chatgpt" === e,
        f = p && j(s) && n,
        m = p && ((0, u.IH)(s) || f || (r && a)),
        h = j(s),
        y = (0, v.uz)(s),
        _ = m || (p && (0, v.Hw)(s) && (d || g)) || (p && ((h && t) || (r && i)))
      return {
        canManageCreditSettings: m,
        canViewCreditSettings: _,
        isUsageSettingsVisible:
          _ || (p && h) || (p && (h || (0, v.Hw)(s)) && l) || (p && (0, v.Hw)(s) && c) || (p && y && o),
      }
    }
    function j(e) {
      return e === h.x.FREE || e === h.x.GO
    }
    i.d(
      t,
      {},
      {
        AH: function (e, t) {
          let i,
            l,
            u,
            p,
            f,
            h,
            S,
            A,
            k = (0, r.c)(27),
            { accountId: R, userId: N, authMethod: I, isLoading: P } = (0, a.As)(),
            q = (0, s.Ul)(null),
            E = "chatgpt" === I,
            T = (0, m.AS)(),
            G = (0, m.Zj)(y),
            U = (0, m.DR)(y),
            L = (0, m.XR)(),
            { data: D, isLoading: O, hasEverErrored: F } = (0, c.YL)(),
            { data: B, isLoading: z } = (0, o.Us)(),
            W =
              E &&
              D?.id === R &&
              D?.structure === "workspace" &&
              "account-owner" === D.account_user_role &&
              (0, v.Hw)(D.plan_type),
            $ = E && !L && (0, g.b0)({ accountId: R, currentAccount: D, statsigClient: T }),
            Z = D?.plan_type ?? (!O || F ? B?.plan : void 0)
          k[0] !== E || k[1] !== Z ? ((i = E && (0, v.Hw)(Z)), (k[0] = E), (k[1] = Z), (k[2] = i)) : (i = k[2])
          let Q = i,
            V = (0, m.Zj)(!!Q && _),
            K = (0, m.DR)(Q ? _ : y)
          k[3] !== Z ? ((l = j(Z)), (k[3] = Z), (k[4] = l)) : (l = k[4])
          let H = l
          k[5] !== Z ? ((u = (0, v.uz)(Z)), (k[5] = Z), (k[6] = u)) : (u = k[6])
          let X = u,
            { hasPlanCreditAccess: Y, isFreeOrGoCreditPurchaseEnabled: J } = x({
              authMethod: I,
              plan: Z,
              statsigClient: L ? null : T,
            }),
            ee = D?.structure === "personal" && D.id === R
          !1 !== k[7] ? ((p = { enabled: !1 }), (k[7] = !1), (k[8] = p)) : (p = k[8])
          let { data: et, isLoading: ei } = (0, s._U)(w, R ?? null, p),
            er = M({
              identityReady: E && !P && null != N,
              isStatsigLoading: L,
              isCurrentPersonalAccount: ee,
              hasPlanCreditAccess: Y,
            }),
            es = er && "usage" === t,
            en = R ?? null,
            ea = N ?? null
          k[9] !== en || k[10] !== ea
            ? ((f = { accountId: en, userId: ea }), (k[9] = en), (k[10] = ea), (k[11] = f))
            : (f = k[11])
          let { data: eo, isPending: el } = (0, s._U)(b, f, { enabled: es }),
            ec = er && eo?.metadata?.enrollment_step === "enrolled",
            eu = Y || ec,
            ed = E && ee && !eu
          k[12] !== ed ? ((h = { enabled: ed }), (k[12] = ed), (k[13] = h)) : (h = k[13])
          let { data: eg, isLoading: ep } = (0, d.q7)(h),
            [ef, em] = (0, n.useState)(null),
            ev = ed && eg?.isEnabled === !0,
            eh = "usage" === t && ed && (ev || ef === R) ? R : null
          ef !== eh && em(eh)
          let ey = ev || null != eh,
            e_ = E && X && G,
            ew = E && !L && !("isNoop" in T),
            eb = Q && !L && V,
            ex = E && O && !F,
            eM = E && H && L,
            eC = E && X && (L || U)
          k[14] !== E || k[15] !== H || k[16] !== L || k[17] !== Z
            ? ((S = E && (H || (0, v.Hw)(Z)) && L), (k[14] = E), (k[15] = H), (k[16] = L), (k[17] = Z), (k[18] = S))
            : (S = k[18])
          let ej = S,
            eS = Q && (L || K),
            eA = C({
              authMethod: I,
              hasCreditBalance: void 0 !== e && e,
              hasEnabledAutoReload: ey,
              isPersonalAccount: ee,
              plan: Z,
              isFreeOrGoCreditPurchaseEnabled: J,
              hasStudentCreditAccess: ec,
              isEnterpriseUsageSettingsEnabled: e_,
              isConsumerUsageAnalyticsEnabled: ew,
              isBusinessUsageDashboardEnabled: eb,
              canPurchaseBusinessCredits: $,
              isBusinessWorkspaceOwner: W,
            }),
            ek = !0 === q || eA.isUsageSettingsVisible || !1,
            eR = ey ? eg : void 0,
            eN = P || (E && z) || ex || eM || eC || ej || eS || (es && el) || (ed && ep && !ek)
          return (
            k[19] !== $ || k[20] !== W || k[21] !== ek || k[22] !== Z || k[23] !== eR || k[24] !== eN || k[25] !== eA
              ? ((A = {
                  autoReloadSettings: eR,
                  ...eA,
                  canPurchaseBusinessCredits: $,
                  isBusinessWorkspaceOwner: W,
                  isUsageSettingsVisible: ek,
                  isUsageSettingsAccessLoading: eN,
                  plan: Z,
                }),
                (k[19] = $),
                (k[20] = W),
                (k[21] = ek),
                (k[22] = Z),
                (k[23] = eR),
                (k[24] = eN),
                (k[25] = eA),
                (k[26] = A))
              : (A = k[26]),
            A
          )
        },
        E2: M,
        M7: j,
        MQ: x,
        fQ: b,
        jJ: C,
        t$: w,
      },
    )
  },
  NLdj(e, t, i) {
    var r = i("VSiS"),
      s = i("z1BV")
    function n({ serverState: e, discountExperience: t, maximumQuantity: i = s.X6 }) {
      if ("legacy" === t.kind) return (0, s.OD)(e)
      let r = (0, s.sA)(e.rechargeThreshold ?? "") || String(125),
        a = (0, s.sA)(e.rechargeTarget ?? "")
      if (a.length > 0) return a
      if ("active" === t.kind) return (0, s.OD)(e)
      let o = Number.parseInt(r, 10),
        l = t.tiers
          .filter((e) => e.minimum_quantity > 1 && (!Number.isFinite(o) || o + e.minimum_quantity <= i))
          .reduce((e, t) => (null == e ? t.minimum_quantity : Math.min(e, t.minimum_quantity)), null)
      return null != l && Number.isFinite(o) ? String(o + l) : (0, s.OD)(e)
    }
    function a({ discountOffer: e, isEnablingAutoReload: t, payload: i }) {
      return t && e?.auto_reload != null ? { ...i, enroll_in_auto_reload_discount: !0 } : i
    }
    i.d(
      t,
      { Ij: () => n, KM: () => a, ZT: () => r.ZT, Zu: () => r.Zu, _3: () => r._3 },
      {
        vI: function ({ autoTopUpSettings: e, hasPaymentMethod: t, isManageAutoReload: i }) {
          return !t && (!i || null != e) && !(e?.isEnabled === !0 && (0, r.Zu)(e.autoReloadCreditDiscountPolicy))
        },
      },
    )
  },
  jdiu(e, t, i) {
    var r = i("am1R"),
      s = i("qmMi"),
      n = i("DBCl"),
      a = i("CSxw"),
      o = i("aTcy"),
      l = i("Ot7V"),
      c = i("SGsN"),
      u = i("Cm1Y"),
      d = i("DAA7"),
      g = i("svjy"),
      p = i("OWtl"),
      f = i("hZax"),
      m = i("kK7d"),
      v = i("UR81"),
      h = i("z1BV"),
      y = i("eFxf")
    let _ = (0, s.aP)(p.u, ({ scope: e }) => ({
        mutationKey: ["business-credit-checkout"],
        mutationFn: async (e) => {
          if (!b(e)) return null
          let { offer: t } = await m.CodexRequest.safeGet("/subscriptions/credits/discount-offer", {
              signal: AbortSignal.timeout(2e3),
            }),
            i = Math.floor((0, h.cu)(e.statsigClient.getDynamicConfig(h.WU).value) / h.TR) * h.TR
          if (i < h.TR) throw Error("Credit purchase quantity is unavailable")
          let s = (0, r.ah)({
            audience: "workspace",
            minimumCreditQuantity: h.TR,
            maximumCreditQuantity: i,
            creditQuantityStep: h.TR,
            presetCreditQuantities: [i],
            offer: t,
          })
          if (null == s) throw Error("Credit purchase quantity is unavailable")
          return m.CodexRequest.safePost("/payments/checkout", {
            additionalHeaders: { "x-credit-checkout-request-intent": "foreground" },
            requestBody: {
              checkout_source: "codex_app_embedded",
              ...(0, r.CH)({
                accountId: e.accountId,
                quantity: s,
                discountOfferId: t?.offer_id,
                checkoutUiMode: null != t || (0, y.c3)(e.statsigClient, "workspace") ? "custom" : "redirect",
                entryPoint: "credit_purchase_modal",
                billingDetails: void 0,
                cancelUrl: `${n.WaA}?source=codex_app_embedded`,
              }),
            },
          })
        },
        onSuccess: (e, t) => {
          null != e &&
            b(t) &&
            ("tag" in e && "custom_checkout_session" === e.tag
              ? (0, u.Bl)({
                  accountId: t.accountId,
                  getUrl: () => new URL(`/checkout/${e.processor_entity}/${e.checkout_session_id}`, n.WaA).toString(),
                  layerParameter: "use_embedded_credit_checkout",
                  skipExperimentGate: !0,
                  statsigClient: t.statsigClient,
                })
              : null != e.url && (0, l.E0)({ href: e.url, initiator: "open_in_browser_bridge" }))
        },
        onError: () => {
          e.get(c.Id).danger(
            e
              .get(g.g)
              .formatMessage({
                id: "codex.businessCreditCheckout.failed",
                defaultMessage: "Could not open checkout. Try again",
                description:
                  "Error toast when a Business workspace owner's Buy credits action cannot prepare checkout in Codex. No purchase has been made and the owner can retry.",
              }),
            { errorAnalytics: { toastId: "codex.businessCreditCheckout.failed" } },
          )
        },
      })),
      w = (0, s.un)(p.u, ({ get: e }) => e(_).isPending)
    function b({ accountId: e, currentAccount: t, statsigClient: i }) {
      return (
        null != e &&
        t?.id === e &&
        "workspace" === t.structure &&
        "account-owner" === t.account_user_role &&
        (0, v.Hw)(t.plan_type) &&
        !(0, a.$t)() &&
        i.getContext().user.customIDs?.workspace_id === e &&
        (0, f.XM)(i, "4062279831").get("enable_embedded_credit_checkout", !1)
      )
    }
    i.d(
      t,
      {},
      {
        b0: b,
        jc: w,
        nZ: function ({ scope: e, event: t, navigateToPurchase: i, ...r }) {
          if (!(null != r.accountId && i("https://chatgpt.com/pricing/credits?audience=workspace", t))) {
            if (null != r.accountId && b(r)) {
              t?.preventDefault()
              let i = e.get(_)
              i.isPending || i.mutateAsync({ ...r, accountId: r.accountId }).catch(() => void 0)
              return
            }
            ;(0, y.Zq)(t)
          }
        },
        qe: async function ({ scope: e, event: t, userEmail: i, ...r }) {
          let s = o.DH
          if (null != r.accountId && r.currentAccount?.id === r.accountId && (0, v.Hw)(r.currentAccount.plan_type)) {
            let e = new URL(o.SL)
            ;(e.searchParams.set("workspace_id", r.accountId), i && e.searchParams.set("search", i), (s = e.toString()))
          }
          let n = (0, d.lU)(e, s, r.accountId)
          null != n && t.preventDefault()
          let a = null == n ? null : await n
          null != a
            ? (0, l.PQ)({ event: t, href: a, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
            : b(r) &&
                (0, u.Bl)({
                  accountId: r.currentAccount?.id,
                  getUrl: () => s,
                  skipExperimentGate: !0,
                  statsigClient: r.statsigClient,
                })
              ? t.preventDefault()
              : (0, l.PQ)({ event: t, href: s, initiator: "open_in_browser_bridge" })
        },
      },
    )
  },
  z1BV(e, t, i) {
    var r = i("am1R"),
      s = i("nhAI")
    let n = [500, 1e3, 2e3],
      a = r.vx.creditQuantityStep,
      o = "credit_purchase_quantity_max"
    function l(e) {
      let t = p(e)
      switch (t.kind) {
        case "missing":
          return "missing"
        case "invalid":
          return "not-whole-number"
        case "valid":
          return t.value < 125 ? "below-minimum" : null
      }
    }
    function c({ minimumBalance: e, targetBalance: t, maximumQuantity: i = 25e4, persistedTargetBalance: r = null }) {
      let s = l(t)
      if (null != s) return s
      let n = p(e),
        a = p(t),
        o = p(r ?? "")
      return "valid" === a.kind && a.value > i && ("valid" !== o.kind || a.value !== o.value)
        ? "above-maximum"
        : "valid" === n.kind && "valid" === a.kind && a.value - n.value < 125
          ? "target-balance-below-minimum"
          : null
    }
    function u(e) {
      return (0, s.mZ)({
        amountPerCredit: e?.amountPerCredit ?? null,
        minorUnitExponent: e?.minorUnitExponent ?? null,
        ...r.vx,
      })
    }
    function d({ monthlyLimit: e, targetBalance: t }) {
      let i = p(e),
        r = p(t)
      switch (i.kind) {
        case "missing":
          return null
        case "invalid":
          return "not-whole-number"
        case "valid":
          if ("valid" === r.kind && i.value < r.value) return "monthly-limit-below-target"
          return null
      }
    }
    function g(e) {
      return e?.trim() ?? ""
    }
    function p(e) {
      let t = g(e)
      return 0 === t.length
        ? { kind: "missing" }
        : /^\d+$/.test(t)
          ? { kind: "valid", value: Number.parseInt(t, 10) }
          : { kind: "invalid" }
    }
    i.d(
      t,
      {},
      {
        DH: l,
        E: function ({
          minimumBalance: e,
          targetBalance: t,
          monthlyLimit: i,
          maximumQuantity: r = 25e4,
          persistedTargetBalance: s = null,
        }) {
          if (
            null != l(e) ||
            null != c({ minimumBalance: e, targetBalance: t, maximumQuantity: r, persistedTargetBalance: s }) ||
            null != d({ monthlyLimit: i, targetBalance: t })
          )
            return null
          let n = Number.parseInt(g(e), 10),
            a = Number.parseInt(g(t), 10),
            o = g(i)
          return {
            recharge_threshold: String(n),
            recharge_target: String(a),
            recharge_monthly_limit: o.length > 0 ? o : null,
          }
        },
        Eb: function (e, t) {
          let i = e.formatToParts(123456789.1),
            r = i.filter((e) => "integer" === e.type)
          return {
            currencySymbol: i.find((e) => "currency" === e.type)?.value,
            decimalSeparator:
              i.find((e) => "decimal" === e.type)?.value ??
              t.formatToParts(1.1).find((e) => "decimal" === e.type)?.value ??
              ".",
            groupSeparator: i.find((e) => "group" === e.type)?.value,
            primaryGroupSize: Array.from(r.at(-1)?.value ?? "").length,
            secondaryGroupSize: Array.from(r.at(-2)?.value ?? "").length,
            digitMap: new Map(Array.from({ length: 10 }, (e, i) => [t.format(i), String(i)])),
          }
        },
        OD: function (e) {
          if (!e.isEnabled) return String(n[0])
          let t = p(e.rechargeTarget ?? "")
          return "valid" !== t.kind ? String(n[0]) : String(t.value)
        },
        TR: a,
        VN: function (e) {
          return e.isEnabled && null != e.rechargeMonthlyLimit ? g(e.rechargeMonthlyLimit) : ""
        },
        WU: "2414703414",
        X6: 25e4,
        XD: d,
        Yc: u,
        cu: function (e) {
          let t = null != e && o in e ? e[o] : void 0
          return (0, r.qK)(t)
        },
        e1: function ({ value: e, pricingInfo: t }) {
          let i = p(e)
          switch (i.kind) {
            case "missing":
              return "missing"
            case "invalid":
              return "not-whole-number"
            case "valid":
              if (i.value < u(t)) return "below-minimum"
              return i.value % a == 0 ? null : "invalid-increment"
          }
        },
        e9: function ({ payload: e, serverState: t }) {
          let i = {}
          return (
            e.recharge_threshold !== t.rechargeThreshold && (i.recharge_threshold = e.recharge_threshold),
            e.recharge_target !== t.rechargeTarget && (i.recharge_target = e.recharge_target),
            void 0 !== e.recharge_monthly_limit &&
              e.recharge_monthly_limit !== t.rechargeMonthlyLimit &&
              (i.recharge_monthly_limit = e.recharge_monthly_limit),
            void 0 !== e.payment_method_id && (i.payment_method_id = e.payment_method_id),
            i
          )
        },
        eV: function ({ isEnabled: e, serverState: t, savePayload: i }) {
          return e
            ? null == i
              ? null
              : t.isEnabled
                ? i.recharge_threshold !== t.rechargeThreshold ||
                  i.recharge_target !== t.rechargeTarget ||
                  i.recharge_monthly_limit !== t.rechargeMonthlyLimit
                  ? "update"
                  : null
                : "enable"
            : t.isEnabled
              ? "disable"
              : null
        },
        ep: c,
        et: n,
        gp: function ({ value: e, pricingInfo: t, format: i }) {
          let { currencySymbol: r, decimalSeparator: s, digitMap: n, groupSeparator: a } = i,
            [o = "", l = "", ...c] = Array.from(
              (null == r ? e : e.replace(r, "")).replace(/\p{Bidi_Control}/gu, "").trim(),
              (e) => n.get(e) ?? e,
            )
              .join("")
              .split(s)
          if (c.length > 0 || !/^\d*$/.test(l)) return null
          let u = null == a ? [o] : o.split("" === a.trim() ? /[ \u00a0\u202f]/u : a)
          if (u.length > 1) {
            let { primaryGroupSize: e, secondaryGroupSize: t } = i,
              [r = ""] = u
            if (0 === r.length || r.length > t || u.at(-1)?.length !== e || u.slice(1, -1).some((e) => e.length !== t))
              return null
          }
          let d = u.join("")
          if (!/^\d*$/.test(d)) return null
          let g = Number.parseFloat(d + "." + l)
          return null == t || t.amountPerCredit <= 0 || !Number.isFinite(g) || g <= 0 ? null : g / t.amountPerCredit
        },
        k0: function (e) {
          if (null == e) return null
          let t = Math.round(e)
          return 1e-6 >= Math.abs(e - t) ? String(t) : null
        },
        ph: function (e) {
          if (!e.isEnabled) return String(125)
          let t = p(e.rechargeThreshold ?? "")
          return "valid" !== t.kind ? String(125) : String(t.value)
        },
        sA: g,
      },
    )
  },
  eFxf(e, t, i) {
    i.d(t, {
      ZK: () => m,
      CM: () => p,
      ZL: () => f,
      Ih: () => v,
      Gl: () => g,
      c3: () => h,
      fV: () => y,
      uS: () => _,
      FF: () => w,
      Zq: () => x,
      tU: () => b,
    })
    var r = i("mBJV"),
      s = i("iRMi"),
      n = i("aTcy"),
      a = i("Ot7V"),
      o = i("yGJW"),
      l = i("hZax"),
      c = i("ilGw"),
      u = i("LjYy"),
      d = i("DBCl")
    function g(e, { autoTopUpEnabled: t, source: i } = {}) {
      let r = new URL((0, c.E)(`${d.WaA}/purchase/credits`))
      return (
        r.searchParams.set("quantity", e),
        "unknown" === r.searchParams.get("source") && r.searchParams.set("source", "codex"),
        null != i && r.searchParams.set("source", i),
        !1 === t && r.searchParams.set("auto_top_up_enabled", "false"),
        r.toString()
      )
    }
    let p = {
        personal: { checkout: "2336405413", paypal: "2336405413" },
        workspace: { checkout: "3431030460", paypal: "2924753366" },
      },
      f = "3291298264",
      m = "allow_free_users_to_use_credits"
    function v(e) {
      h(e, "workspace")
    }
    function h(e, t) {
      return (0, l.XM)(e, p[t].checkout, { disableExposureLog: !1 }).get("is_custom_checkout_enabled", !1)
    }
    function y(e, t) {
      return (t === u.x.FREE || t === u.x.GO) && !0 === (0, l.XM)(e, f, { disableExposureLog: !0 }).get(m, !1)
    }
    function _(e, { audience: t, checkoutKind: i, entryPoint: r }) {
      ;(0, o.yy)(e, s.CodexCreditPurchaseButtonClicked, { audience: t, checkoutKind: i, entryPoint: r })
    }
    function w(e) {
      _(e, { audience: "personal", checkoutKind: "standalone_credit", entryPoint: "credit_reload_dialog" })
      try {
        ;(0, o.yy)(e, r.tzi, {
          checkoutKind: "standalone_credit",
          entryPoint: "credit_reload_dialog",
          checkoutOriginProductExperience: "codex",
          checkoutOriginDeliverySurface: void 0,
        })
      } catch {}
    }
    function b(e, t) {
      M(e, t)
    }
    function x(e) {
      M(n.pL, e)
    }
    function M(e, t) {
      null != t
        ? (0, a.PQ)({ event: t, href: (0, c.E)(e), initiator: "open_in_browser_bridge" })
        : (0, a.E0)({ href: (0, c.E)(e), initiator: "open_in_browser_bridge" })
    }
  },
  S5NB(e, t, i) {
    let r = (0, i("Qgfj").YK)({
      title: { id: "restricted.cloudComputer.title", defaultMessage: "Cloud computer" },
      cookies: { id: "restricted.cloudComputer.cookies", defaultMessage: "ChatGPT Work cookies" },
      cookiesDescription: {
        id: "restricted.cloudComputer.cookies.description",
        defaultMessage: "Remove cookies saved by ChatGPT Work",
      },
      approvalsDescription: {
        id: "restricted.cloudComputer.approvals.description",
        defaultMessage: "Choose whether ChatGPT Work asks before opening websites. Applies only to ChatGPT Work.",
      },
      approvals: { id: "restricted.cloudComputer.approvals", defaultMessage: "ChatGPT Work website approvals" },
    })
    i.d(t, {}, { P: r })
  },
  Sptq(e, t, i) {
    var r = i("qmMi"),
      s = i("eFn4"),
      n = i("S7UE"),
      a = i("KH2l"),
      o = i("aeqi"),
      l = i("GaA7"),
      c = i("OWtl")
    let u = (0, r.i1)(c.u, (e, { get: t }) => {
        let i = t(s.xm),
          r = t(a.Ot) ? t(n.u) : null,
          c = l.appServices?.lsp != null && t(o.P)
        return {
          navigation: { visible: !0 === c, pending: "panel" === e && null == c },
          cloud: { visible: "allowed" === i.status, pending: "loading" === i.status, error: "error" === i.status },
          app: { visible: r?.status === "allowed", pending: r?.status === "loading", error: r?.status === "error" },
        }
      }),
      d = (0, r.un)(c.u, ({ get: e }) => e(u, "panel")),
      g = (0, r.un)(c.u, ({ get: e }) => e(u, "search"))
    i.d(t, {}, { T: d, z: g })
  },
  uxIz(e, t, i) {
    let r = (0, i("Qgfj").YK)({
      title: { id: "restricted.passwords.title", defaultMessage: "Passwords" },
      search: { id: "restricted.passwords.search", defaultMessage: "Search passwords" },
    })
    i.d(t, {}, { $: "1675852838", N: r })
  },
  uMwG(e, t, i) {
    var r = i("QosV"),
      s = i("irkb"),
      n = i("xSOA"),
      a = i("qmMi"),
      o = i("SPnB"),
      l = i("CWeU"),
      c = i("eFn4"),
      u = i("UOa8"),
      d = i("GaA7"),
      g = i("OWtl"),
      p = i("OMIV"),
      f = i("rvFo"),
      m = i("kK7d")
    let v = (0, a.un)(g.u, ({ get: e }) => {
      let { authMethod: t, authLoading: i } = e(l.PO),
        r = e(p.JW, "2826489636"),
        s = (i || "chatgpt" === t || "chatgptAuthTokens" === t) && e(p.JW, "1168186395") && e(p.JW, "3816307151"),
        n = s ? e(c.L5) : null,
        a = s && (void 0 === n ? void 0 : (n?.cloudAccess ?? !0))
      return { cloudInstructionsEnabled: a, unifiedInstructions: r || a }
    })
    function h(e) {
      return ["cloud-user-preferences", e]
    }
    function y(e) {
      return (0, a.Ul)(o.o8)
    }
    let _ = (0, a.vU)(g.u, (e) => ({
        queryKey: h(e),
        queryFn: ({ signal: e }) => m.CodexRequest.safeGet("/wham/settings/user", { signal: e }),
        enabled: null != e,
        retry: !1,
        staleTime: f.D.FIVE_MINUTES,
      })),
      w = (0, a.vU)(g.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["cloud-preferences-config", e, t],
        queryFn: () => m.CodexRequest.safeGet("/wham/settings/configs/user-preferences"),
        enabled: null != e && null != t,
        retry: !1,
        staleTime: f.D.FIVE_MINUTES,
      }))
    function b(e, t, i) {
      let r = e
      for (let e of t) r = r.replaceAll(e.value, i(e))
      return r
    }
    i.d(
      t,
      {},
      {
        $g: w,
        Gn: v,
        If: y,
        Zl: function () {
          let e,
            t = (0, r.c)(3),
            { accountId: i, userId: s } = (0, u.As)()
          return (
            t[0] !== i || t[1] !== s
              ? ((e = { accountId: i, userId: s }), (t[0] = i), (t[1] = s), (t[2] = e))
              : (e = t[2]),
            (0, a._U)(w, e)
          )
        },
        d9: function (e, t, i) {
          let r = (e.match(/{/g) ?? []).length
          if (r !== (e.match(/}/g) ?? []).length) return "bracket-mismatch"
          if (0 === r) return "missing-pattern"
          let s = i.map((e) => e.value)
          if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !s.includes(e))) return "invalid-pattern"
          let n = b(e, i, (e) => "x".repeat(e.char_count))
          return n.length > t
            ? "too-long"
            : n.startsWith("/")
              ? "leading-slash"
              : /^[a-zA-Z0-9./\-_]+$/.test(n)
                ? null
                : "invalid-characters"
        },
        ig: function (e, t) {
          return b(e, t, (e) => e.example)
        },
        ky: _,
        sN: function () {
          let e,
            t,
            i,
            a,
            o,
            l = (0, r.c)(13),
            { accountId: c, userId: g } = (0, u.As)(),
            p = y(g),
            f = (0, s.jE)()
          return (
            l[0] !== c || l[1] !== p
              ? ((e = ["update-cloud-user-preferences", c, p]),
                (t = (e) => {
                  if (null == c || null == p) throw Error("Sign in to update preferences")
                  return m.CodexRequest.safePatch("/wham/settings/user", {
                    expectedIdentity: { accountId: c, userId: p },
                    requestBody: e,
                  })
                }),
                (l[0] = c),
                (l[1] = p),
                (l[2] = e),
                (l[3] = t))
              : ((e = l[2]), (t = l[3])),
            l[4] !== p ? ((i = () => ({ queryKey: h(p) })), (l[4] = p), (l[5] = i)) : (i = l[5]),
            l[6] !== f
              ? ((a = async (e, t, i) => {
                  null != i &&
                    ((void 0 !== t.custom_instructions ||
                      void 0 !== t.communication_guide ||
                      void 0 !== t.communication_guide_enabled) &&
                      (await (d.appServices?.queryCache ?? d.appServices?.clientCoordination)?.invalidateQueryCache({
                        queryKey: [...i.queryKey],
                      })),
                    f.setQueryData(i.queryKey, e))
                }),
                (l[6] = f),
                (l[7] = a))
              : (a = l[7]),
            l[8] !== e || l[9] !== t || l[10] !== i || l[11] !== a
              ? ((o = { mutationKey: e, mutationFn: t, onMutate: i, onSuccess: a }),
                (l[8] = e),
                (l[9] = t),
                (l[10] = i),
                (l[11] = a),
                (l[12] = o))
              : (o = l[12]),
            (0, n.n)(o)
          )
        },
        wJ: function () {
          let { userId: e } = (0, u.As)(),
            t = y(e)
          return (0, a._U)(_, t)
        },
      },
    )
  },
  VbfX(e, t, i) {
    var r = i("qmMi"),
      s = i("Qgfj"),
      n = i("SPnB"),
      a = i("hXam"),
      o = i("WrZv"),
      l = i("uSFS"),
      c = i("OWtl"),
      u = i("Sptq"),
      d = i("jBHQ"),
      g = i("O666"),
      p = i("uMwG")
    let f = "579168209",
      m = ["pr_open", "every_push", "smart_detect"],
      v = ["critical", "high", "medium", "low"],
      h = { section: "code-review", searchParams: { tab: "cloud" } },
      y = { section: "code-review", searchParams: { tab: "app" } },
      _ = (0, s.YK)({
        automatic: { id: "settings.codeReview.personal.autoReview.label", defaultMessage: "Automatic review" },
        automaticDescription: {
          id: "settings.codeReview.personal.autoReview.description",
          defaultMessage:
            "If a repository\u2019s review setting differs from your personal preference, the repository setting takes priority",
        },
        trigger: { id: "settings.codeReview.personal.trigger.label", defaultMessage: "Review trigger" },
        triggerDescription: {
          id: "settings.codeReview.personal.trigger.description",
          defaultMessage: "Choose when ChatGPT should review your pull requests",
        },
        exhaustive: { id: "settings.codeReview.personal.exhaustive.label", defaultMessage: "Exhaustive code review" },
        exhaustiveDescription: {
          id: "settings.codeReview.personal.exhaustive.description",
          defaultMessage: "Keep looking for findings until ChatGPT stops finding new issues",
        },
        credits: { id: "settings.codeReview.personal.credits.label", defaultMessage: "Use credits for reviews" },
        creditsDescription: {
          id: "settings.codeReview.personal.credits.description",
          defaultMessage: "Allow credits to be consumed for reviews after rate limits",
        },
        automaticSecurity: {
          id: "settings.codeReview.security.autoReview.label",
          defaultMessage: "Automatic security review",
        },
        automaticSecurityDescription: {
          id: "settings.codeReview.security.autoReview.description",
          defaultMessage:
            "If a repository\u2019s review setting differs from your personal preference, the repository setting takes priority",
        },
        securityTrigger: {
          id: "settings.codeReview.security.trigger.label",
          defaultMessage: "Security review trigger",
        },
        securityTriggerDescription: {
          id: "settings.codeReview.security.trigger.description",
          defaultMessage: "Choose when Codex should review your pull requests for security",
        },
        automaticSeverity: {
          id: "settings.codeReview.security.autoSeverity.label",
          defaultMessage: "Minimum automatic review reporting severity",
        },
        automaticSeverityDescription: {
          id: "settings.codeReview.security.autoSeverity.description",
          defaultMessage: "Choose the lowest severity reported for automated reviews",
        },
        manualSeverity: {
          id: "settings.codeReview.security.manualSeverity.label",
          defaultMessage: "Minimum manual review reporting severity",
        },
        manualSeverityDescription: {
          id: "settings.codeReview.security.manualSeverity.description",
          defaultMessage: "Choose the lowest severity reported for reviews requested with @codex",
        },
        securityCredits: {
          id: "settings.codeReview.security.credits.label",
          defaultMessage: "Use credits for security reviews",
        },
        triggerOption: {
          id: "settings.codeReview.repository.trigger.option",
          defaultMessage:
            "{value, select, personal {Follow personal preferences} pr_open {On PR open} every_push {On every push} smart_detect {Smart detect (Experimental)} code_review {Whenever code review runs} other {Unknown}}",
        },
        severityOption: {
          id: "settings.codeReview.repository.severity.option.v2",
          defaultMessage:
            "{value, select, critical {Critical} high {High} medium {Medium} low {Low} inherit {Use repository setting} other {Unknown}}",
        },
        linkTarget: { id: "settings.codeReview.githubLinks.label", defaultMessage: "Open review links in" },
        provider: { id: "settings.codeReview.provider.label", defaultMessage: "Review provider" },
        github: { id: "settings.codeReview.provider.github", defaultMessage: "GitHub" },
        gitlab: { id: "settings.codeReview.provider.gitlab", defaultMessage: "GitLab" },
        codeReviewTab: { id: "settings.codeReview.githubLinks.codeReviewTab", defaultMessage: "Code Review Tab" },
        browserSettings: {
          id: "settings.codeReview.reviewLinks.followBrowserSettings",
          defaultMessage: "Follow Browser Settings",
        },
      }),
      w = { "code-review-tab": _.codeReviewTab, github: _.browserSettings },
      b = {
        automatic: { ...h, id: "automatic-code-review", title: _.automatic, description: _.automaticDescription },
        trigger: {
          ...h,
          id: "code-review-trigger",
          title: _.trigger,
          description: _.triggerDescription,
          options: m.map((e) => ({ ..._.triggerOption, values: { value: e } })),
        },
        exhaustive: { ...h, id: "exhaustive-code-review", title: _.exhaustive, description: _.exhaustiveDescription },
        credits: { ...h, id: "code-review-credits", title: _.credits, description: _.creditsDescription },
        automaticSecurity: {
          ...h,
          id: "automatic-security-review",
          title: _.automaticSecurity,
          description: _.automaticSecurityDescription,
        },
        securityTrigger: {
          ...h,
          id: "security-review-trigger",
          title: _.securityTrigger,
          description: _.securityTriggerDescription,
        },
        automaticSeverity: {
          ...h,
          id: "automatic-security-severity",
          title: _.automaticSeverity,
          description: _.automaticSeverityDescription,
          options: v.map((e) => ({ ..._.severityOption, values: { value: e } })),
        },
        manualSeverity: {
          ...h,
          id: "manual-security-severity",
          title: _.manualSeverity,
          description: _.manualSeverityDescription,
          options: v.map((e) => ({ ..._.severityOption, values: { value: e } })),
        },
        securityCredits: { ...h, id: "security-review-credits", title: _.securityCredits },
        linkTarget: { ...y, id: "code-review-link-target", title: _.linkTarget, options: Object.values(w) },
        provider: { ...y, id: "code-review-provider", title: _.provider },
        instructions: { ...y, id: "personal-code-review-instructions", title: a._.title },
      },
      x = (0, r.un)(c.u, ({ get: e }) => {
        let t = e(u.z),
          i = []
        if ((t.navigation.visible && i.push(o.dP, o.f_, ...o.Qh.map(({ entry: e }) => e)), t.app.visible)) {
          let t = e(g.H$, { layer: "2115119119", parameter: "enabled", disableExposureLog: !0 })
          i.push(b.linkTarget, { ...b.provider, options: M(t).map((e) => _[e]) }, b.instructions)
        }
        if (!t.cloud.visible) return i
        let { userId: r, authenticatedAccountId: s, authLoading: a } = e(n.PO),
          c = e(n.o8)
        if (a || null == c) return i
        let m = e(p.ky, c, { enabled: !1 }).data
        if (null == m) return i
        i.push(b.automatic, b.trigger, b.exhaustive)
        let v = e(l.Cn)?.canManageCreditSettings === !0
        if ((v && i.push(b.credits), null == m.security_review)) return i
        let h = m.security_review.trigger_policy ?? "code_review"
        i.push(
          b.automaticSecurity,
          { ...b.securityTrigger, options: C(e(d.P, f), h).map((e) => ({ ..._.triggerOption, values: { value: e } })) },
          b.automaticSeverity,
          b.manualSeverity,
        )
        let y = e(p.$g, { accountId: s, userId: r }, { enabled: !1 }).data
        return (
          j(v, y?.security_review_credits_available, m.allow_credits_for_security_reviews) && i.push(b.securityCredits),
          i
        )
      })
    function M(e) {
      return e ? ["github", "gitlab"] : ["github"]
    }
    function C(e, t) {
      return e || "smart_detect" === t
        ? ["pr_open", "every_push", "smart_detect", "code_review"]
        : ["pr_open", "every_push", "code_review"]
    }
    function j(e, t, i) {
      return e && null != i && (!0 === t || !0 === i)
    }
    i.d(t, {}, { Cx: f, Eh: C, Jd: m, Mv: b, cH: x, e8: j, fG: M, fz: v, gt: _, q$: w })
  },
  u5Xi(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      n = i("zd8w"),
      a = i("oyxz"),
      o = i("bqtn"),
      l = i("F0xz"),
      c = i("pO0d"),
      u = i("BSnr"),
      d = i("AWNZ"),
      g = i("QyE3"),
      p = i("ZEx5"),
      f = i("VbfX")
    function m(e) {
      let t,
        i,
        n,
        a,
        o,
        l = (0, s.c)(10)
      return (
        l[0] !== e
          ? (({ label: i, description: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = i), (l[3] = n))
          : ((t = l[1]), (i = l[2]), (n = l[3])),
        l[4] !== n ? ((a = (e) => (0, r.jsx)(v, { ...n, ...e })), (l[4] = n), (l[5] = a)) : (a = l[5]),
        l[6] !== t || l[7] !== i || l[8] !== a
          ? ((o = (0, r.jsx)(d.ic, { label: i, description: t, control: a })),
            (l[6] = t),
            (l[7] = i),
            (l[8] = a),
            (l[9] = o))
          : (o = l[9]),
        o
      )
    }
    function v(e) {
      let t,
        i,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        v,
        y,
        _,
        w,
        b = (0, s.c)(40)
      b[0] !== e
        ? (({ value: d, options: l, disabled: i, onChange: a, renderLabel: u, renderDescription: c, ...t } = e),
          (b[0] = e),
          (b[1] = t),
          (b[2] = i),
          (b[3] = a),
          (b[4] = l),
          (b[5] = c),
          (b[6] = u),
          (b[7] = d))
        : ((t = b[1]), (i = b[2]), (a = b[3]), (l = b[4]), (c = b[5]), (u = b[6]), (d = b[7]))
      let x = (0, n.useId)(),
        M = null == c ? void 0 : "panelWide",
        C = null == t["aria-labelledby"] ? void 0 : `${t["aria-labelledby"]} ${x}`
      if (
        (b[8] !== t || b[9] !== x
          ? ((p = null == t["aria-label"] ? t["aria-describedby"] : [t["aria-describedby"], x].filter(h).join(" ")),
            (b[8] = t),
            (b[9] = x),
            (b[10] = p))
          : (p = b[10]),
        b[11] !== u || b[12] !== d ? ((f = u(d)), (b[11] = u), (b[12] = d), (b[13] = f)) : (f = b[13]),
        b[14] !== f || b[15] !== x
          ? ((m = (0, r.jsx)("span", { id: x, children: f })), (b[14] = f), (b[15] = x), (b[16] = m))
          : (m = b[16]),
        b[17] !== t || b[18] !== i || b[19] !== C || b[20] !== p || b[21] !== m
          ? ((v = (0, r.jsx)(g.vg, { ...t, "aria-labelledby": C, "aria-describedby": p, disabled: i, children: m })),
            (b[17] = t),
            (b[18] = i),
            (b[19] = C),
            (b[20] = p),
            (b[21] = m),
            (b[22] = v))
          : (v = b[22]),
        b[23] !== a || b[24] !== l || b[25] !== c || b[26] !== u)
      ) {
        let e
        ;(b[28] !== a || b[29] !== c || b[30] !== u
          ? ((e = (e) =>
              (0, r.jsx)(o.ms.RadioItem, { value: e, onSelect: () => a(e), SubText: c?.(e), children: u(e) }, e)),
            (b[28] = a),
            (b[29] = c),
            (b[30] = u),
            (b[31] = e))
          : (e = b[31]),
          (y = l.map(e)),
          (b[23] = a),
          (b[24] = l),
          (b[25] = c),
          (b[26] = u),
          (b[27] = y))
      } else y = b[27]
      return (
        b[32] !== y || b[33] !== d
          ? ((_ = (0, r.jsx)(o.ms.RadioGroup, { value: d, children: y })), (b[32] = y), (b[33] = d), (b[34] = _))
          : (_ = b[34]),
        b[35] !== i || b[36] !== M || b[37] !== v || b[38] !== _
          ? ((w = (0, r.jsx)(o.Ab, { contentWidth: M, disabled: i, triggerButton: v, children: _ })),
            (b[35] = i),
            (b[36] = M),
            (b[37] = v),
            (b[38] = _),
            (b[39] = w))
          : (w = b[39]),
        w
      )
    }
    function h(e) {
      return null != e
    }
    function y(e) {
      return (0, r.jsx)(a.A, {
        id: "settings.codeReview.repository.scope.option",
        defaultMessage: "{scope, select, everyone {All PRs} team {Team PRs} other {Follow personal preferences}}",
        values: { scope: e },
      })
    }
    i.d(
      t,
      {},
      {
        CA: function (e) {
          let t,
            i,
            n,
            a,
            o,
            l = (0, s.c)(10)
          return (
            l[0] !== e
              ? (({ entry: i, anchored: t, ...n } = e), (l[0] = e), (l[1] = t), (l[2] = i), (l[3] = n))
              : ((t = l[1]), (i = l[2]), (n = l[3])),
            l[4] !== n ? ((a = (e) => (0, r.jsx)(v, { ...n, ...e })), (l[4] = n), (l[5] = a)) : (a = l[5]),
            l[6] !== t || l[7] !== i || l[8] !== a
              ? ((o = (0, r.jsx)(c.GC, { entry: i, anchored: t, control: a })),
                (l[6] = t),
                (l[7] = i),
                (l[8] = a),
                (l[9] = o))
              : (o = l[9]),
            o
          )
        },
        Qt: function (e) {
          let t,
            i = (0, s.c)(2),
            { value: n } = e
          return (
            i[0] !== n
              ? ((t = (0, r.jsx)(a.A, { ...f.gt.severityOption, values: { value: n } })), (i[0] = n), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        SA: function (e) {
          let t,
            i,
            n,
            o,
            c,
            g,
            f,
            v,
            h = (0, s.c)(26),
            { title: _, children: w, security: b, preferences: x, disabled: M, onUpdate: C } = e,
            j = "never_review" !== x.global_review_preference,
            S = "team" === x.review_preference ? "team" : "personal"
          ;("review_everyone" === x.global_review_preference && (S = "everyone"),
            h[0] !== _ ? ((t = (0, r.jsx)(u.X.Header, { title: _ })), (h[0] = _), (h[1] = t)) : (t = h[1]))
          let A = String(void 0 !== b && b)
          ;(h[2] !== A
            ? ((i = (0, r.jsx)(a.A, {
                id: "settings.codeReview.repository.automatic",
                defaultMessage: "{security, select, true {Auto security review} other {Automatic review}}",
                values: { security: A },
              })),
              (h[2] = A),
              (h[3] = i))
            : (i = h[3]),
            h[4] !== j
              ? ((n = j
                  ? void 0
                  : (0, r.jsx)(a.A, {
                      id: "settings.codeReview.repository.manualReviewNotice",
                      defaultMessage: "You can still request a review with @codex",
                    })),
                (h[4] = j),
                (h[5] = n))
              : (n = h[5]),
            h[6] !== M || h[7] !== j || h[8] !== C
              ? ((o = (e) =>
                  (0, r.jsx)(l.l, {
                    ...e,
                    checked: j,
                    disabled: M,
                    onChange: (e) => C({ global_review_preference: e ? "review_if_enabled" : "never_review" }),
                  })),
                (h[6] = M),
                (h[7] = j),
                (h[8] = C),
                (h[9] = o))
              : (o = h[9]),
            h[10] !== i || h[11] !== n || h[12] !== o
              ? ((c = (0, r.jsx)(d.ic, { label: i, description: n, control: o })),
                (h[10] = i),
                (h[11] = n),
                (h[12] = o),
                (h[13] = c))
              : (c = h[13]),
            h[14] !== M || h[15] !== j || h[16] !== C || h[17] !== S
              ? ((g = j
                  ? (0, r.jsx)(m, {
                      label: (0, r.jsx)(a.A, { id: "settings.codeReview.repository.scope", defaultMessage: "Review" }),
                      value: S,
                      options: ["everyone", "team", "personal"],
                      disabled: M,
                      onChange: (e) =>
                        C({
                          global_review_preference: "everyone" === e ? "review_everyone" : "review_if_enabled",
                          review_preference: "personal" === e ? "never" : "team",
                        }),
                      renderLabel: y,
                    })
                  : null),
                (h[14] = M),
                (h[15] = j),
                (h[16] = C),
                (h[17] = S),
                (h[18] = g))
              : (g = h[18]))
          let k = j ? w : null
          return (
            h[19] !== c || h[20] !== g || h[21] !== k
              ? ((f = (0, r.jsx)(u.X.Content, { children: (0, r.jsxs)(p.t, { children: [c, g, k] }) })),
                (h[19] = c),
                (h[20] = g),
                (h[21] = k),
                (h[22] = f))
              : (f = h[22]),
            h[23] !== f || h[24] !== t
              ? ((v = (0, r.jsxs)(u.X, { children: [t, f] })), (h[23] = f), (h[24] = t), (h[25] = v))
              : (v = h[25]),
            v
          )
        },
        _P: m,
        dN: function (e) {
          let t,
            i = (0, s.c)(2),
            { value: n } = e
          return (
            i[0] !== n
              ? ((t = (0, r.jsx)(a.A, { ...f.gt.triggerOption, values: { value: n } })), (i[0] = n), (i[1] = t))
              : (t = i[1]),
            t
          )
        },
        wW: v,
      },
    )
  },
  Vujf(e, t, i) {
    var r = i("qmMi"),
      s = i("SUID"),
      n = i("uc7r"),
      a = i("SPnB"),
      o = i("OWtl"),
      l = i("rvFo"),
      c = i("kK7d"),
      u = i("GDNt")
    let d = (0, r.vU)(o.u, (e, { get: t, scope: i }) => {
        let r = t(a.chatGptAuthenticatedAccountId$),
          o = t(a.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["repository-review-connectors", r, o, e],
          enabled: !!r && !!o,
          queryFn: async ({ client: t, signal: l }) => {
            let c = (await (0, s.g)({ provider: e, applyEligibilityFilter: !0 })).filter(
              (e) => "DISABLED_BY_ADMIN" !== e.status && e.labels?.admin_only_connector !== "true",
            )
            if (0 === c.length) return []
            l.throwIfAborted()
            let u = await t.fetchQuery({ ...(0, n.dZ)({ accountId: r, userId: o, productSku: "CODEX" }), staleTime: 0 })
            if (
              (l.throwIfAborted(),
              i.get(a.chatGptAuthenticatedAccountId$) !== r || i.get(a.chatGptAuthenticatedUserId$) !== o)
            )
              throw Error("Account changed while loading repository connections")
            let d = new Set(u.map((e) => e.connector_id))
            return c.filter((e) => d.has(e.id))
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          staleTime: l.D.FIVE_MINUTES,
        }
      }),
      g = (0, r.vU)(o.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(a.chatGptAuthenticatedAccountId$), "list", e],
        queryFn: () => v(e),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      p = (0, r.N3)(o.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(a.chatGptAuthenticatedAccountId$), "infinite-list", e],
        initialPageParam: null,
        queryFn: ({ pageParam: t }) => v({ ...e, nextToken: t }),
        getNextPageParam: (e) => e.next_token ?? null,
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      f = (0, r.vU)(o.u, (e, { get: t }) => ({
        queryKey: ["repository-review-settings", t(a.chatGptAuthenticatedAccountId$), "detail", e],
        queryFn: () =>
          c.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", { parameters: { path: { repo_id: e } } }),
        retry: !1,
        refetchOnMount: !0,
        staleTime: l.D.FIVE_MINUTES,
      })),
      m = (0, r.c4)(o.u, (e, { scope: t }) => ({
        mutationFn: (e) =>
          c.CodexRequest.safePatch("/wham/settings/code_review", {
            expectedErrorStatuses: [400, 403, 409],
            requestBody: { repo_review_settings: [e] },
          }),
        onSuccess: async () => {
          await t.queryClient.invalidateQueries({ queryKey: ["repository-review-settings"] })
        },
        onError: async (i) => {
          i instanceof u.fk && 409 === i.status && (await t.query.invalidate(f, e))
        },
      }))
    async function v(e) {
      let t = e.search.trim()
      if (0 === t.length && "gitlab" === e.provider)
        return c.CodexRequest.safeGet("/wham/settings/code_review", {
          parameters: {
            query: { provider: e.provider, next_token: e.nextToken, connector_id: e.connectorId, per_page: 8 },
          },
        })
      let i = Number(e.nextToken ?? 1),
        r = (function (e, t) {
          let i = e,
            r = /^https?:\/\//i.test(i),
            s = i.replace(/^www\./i, "")
          if (r || s.toLowerCase().startsWith("gitlab" === t ? "gitlab.com/" : "github.com/")) {
            let e = URL.parse(r ? i : `https://${s}`)
            if (null == e) return null
            i = e.pathname
          }
          "github" === t && (i = i.toLowerCase())
          let n = (i = i.replace(/\.git$/, "")).split("/").filter(Boolean)
          if ("gitlab" === t) {
            let e = n.findIndex((e, t) => t >= 2 && "-" === e)
            ;-1 !== e && (n = n.slice(0, e))
          }
          return n.length < 2 ? null : "gitlab" === t ? n.join("/") : n.slice(0, 2).join("/")
        })(t, e.provider)
      if (1 === i && null != r)
        try {
          let t = await c.CodexRequest.safeGet("/wham/settings/code_review/{repo_id}", {
            expectedErrorStatuses: [400, 403, 404],
            parameters: { path: { repo_id: `${e.provider}-${r}` }, query: { connector_id: e.connectorId } },
          })
          return { repo_review_settings: t.repository.archived ? [] : [t], next_token: null }
        } catch (e) {
          if (!(e instanceof u.fk) || ![400, 403, 404].includes(e.status)) throw e
        }
      let s = await c.CodexRequest.safeGet("/wham/settings/code_review_search", {
        parameters: {
          query: {
            query: "github" === e.provider ? `${t} archived:false`.trim() : t,
            limit: 8,
            page: i,
            provider: e.provider,
            connector_id: e.connectorId,
          },
        },
      })
      return {
        ...s,
        next_token: s.repo_review_settings.length < 8 || ("github" === e.provider && i >= 125) ? null : String(i + 1),
      }
    }
    i.d(t, {}, { BX: g, Hm: d, _E: f, jm: p, uH: m })
  },
  pO0d(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      n = i("oyxz"),
      a = i("Wf1j"),
      o = i("AWNZ"),
      l = i("DDOY")
    function c(e) {
      let t,
        i = (0, s.c)(2),
        { title: a } = e
      return (
        i[0] !== a
          ? ((t =
              "localizedText" in a ? (0, r.jsx)(r.Fragment, { children: a.localizedText }) : (0, r.jsx)(n.A, { ...a })),
            (i[0] = a),
            (i[1] = t))
          : (t = i[1]),
        t
      )
    }
    i.d(
      t,
      {},
      {
        Ct: c,
        GC: function (e) {
          let t,
            i,
            a,
            l,
            u,
            d,
            g,
            p,
            f,
            m = (0, s.c)(19)
          m[0] !== e
            ? (({ entry: i, anchored: u, description: t, renderLabel: l, ...a } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = i),
              (m[3] = a),
              (m[4] = l),
              (m[5] = u))
            : ((t = m[1]), (i = m[2]), (a = m[3]), (l = m[4]), (u = m[5]))
          let v = void 0 === u || u
          m[6] !== i.title ? ((d = (0, r.jsx)(c, { title: i.title })), (m[6] = i.title), (m[7] = d)) : (d = m[7])
          let h = d,
            y = v ? i.id : void 0
          return (
            m[8] !== h || m[9] !== l ? ((g = null == l ? h : l(h)), (m[8] = h), (m[9] = l), (m[10] = g)) : (g = m[10]),
            m[11] !== t || m[12] !== i.description
              ? ((p = null == i.description ? t : (0, r.jsx)(n.A, { ...i.description })),
                (m[11] = t),
                (m[12] = i.description),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== a || m[15] !== y || m[16] !== g || m[17] !== p
              ? ((f = (0, r.jsx)(o.ic, { ...a, searchAnchor: y, label: g, description: p })),
                (m[14] = a),
                (m[15] = y),
                (m[16] = g),
                (m[17] = p),
                (m[18] = f))
              : (f = m[18]),
            f
          )
        },
        ek: function (e) {
          let t,
            i,
            n = (0, s.c)(12),
            { entry: o, anchored: c, className: u, children: d } = e,
            g = void 0 === c || c,
            p = (0, a.A)(),
            f = g ? o.id : void 0,
            m = g ? o.id : void 0,
            v = g ? -1 : void 0,
            h = g ? "group" : void 0
          return (
            n[0] !== g || n[1] !== o || n[2] !== p
              ? ((t = g ? (0, l.hz)(p, o.title) : void 0), (n[0] = g), (n[1] = o), (n[2] = p), (n[3] = t))
              : (t = n[3]),
            n[4] !== d || n[5] !== u || n[6] !== f || n[7] !== m || n[8] !== v || n[9] !== h || n[10] !== t
              ? ((i = (0, r.jsx)("div", {
                  id: f,
                  "data-settings-search-entry": m,
                  tabIndex: v,
                  role: h,
                  "aria-label": t,
                  className: u,
                  children: d,
                })),
                (n[4] = d),
                (n[5] = u),
                (n[6] = f),
                (n[7] = m),
                (n[8] = v),
                (n[9] = h),
                (n[10] = t),
                (n[11] = i))
              : (i = n[11]),
            i
          )
        },
        iu: function (e) {
          let t,
            i,
            n,
            a = (0, s.c)(6)
          return (
            a[0] !== e ? (({ action: t, ...i } = e), (a[0] = e), (a[1] = t), (a[2] = i)) : ((t = a[1]), (i = a[2])),
            a[3] !== t || a[4] !== i
              ? ((n = (0, r.jsx)(o.ic, { ...i, control: t })), (a[3] = t), (a[4] = i), (a[5] = n))
              : (n = a[5]),
            n
          )
        },
        kk: function (e) {
          let t,
            i,
            a,
            l,
            u,
            d,
            g,
            p = (0, s.c)(15)
          p[0] !== e
            ? (({ entry: i, anchored: l, description: t, ...a } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = i),
              (p[3] = a),
              (p[4] = l))
            : ((t = p[1]), (i = p[2]), (a = p[3]), (l = p[4]))
          let f = void 0 === l || l ? i.id : void 0
          return (
            p[5] !== i.title ? ((u = (0, r.jsx)(c, { title: i.title })), (p[5] = i.title), (p[6] = u)) : (u = p[6]),
            p[7] !== t || p[8] !== i.description
              ? ((d = null == i.description ? t : (0, r.jsx)(n.A, { ...i.description })),
                (p[7] = t),
                (p[8] = i.description),
                (p[9] = d))
              : (d = p[9]),
            p[10] !== a || p[11] !== f || p[12] !== u || p[13] !== d
              ? ((g = (0, r.jsx)(o.kG, { ...a, searchAnchor: f, label: u, description: d })),
                (p[10] = a),
                (p[11] = f),
                (p[12] = u),
                (p[13] = d),
                (p[14] = g))
              : (g = p[14]),
            g
          )
        },
      },
    )
  },
  BSnr(e, t, i) {
    i.d(t, { X: () => a })
    var r = i("ABep"),
      s = i("QosV"),
      n = i("on57")
    let a = Object.assign(
      function (e) {
        let t,
          i,
          a = (0, s.c)(6),
          { children: o, id: l, className: c } = e
        return (
          a[0] !== c ? ((t = (0, n.A)("flex flex-col", c)), (a[0] = c), (a[1] = t)) : (t = a[1]),
          a[2] !== o || a[3] !== l || a[4] !== t
            ? ((i = (0, r.jsx)("section", { id: l, className: t, children: o })),
              (a[2] = o),
              (a[3] = l),
              (a[4] = t),
              (a[5] = i))
            : (i = a[5]),
          i
        )
      },
      {
        Header: function (e) {
          let t,
            i,
            a,
            o,
            l,
            c,
            u,
            d = (0, s.c)(33),
            {
              title: g,
              subtitle: p,
              actions: f,
              actionsAlignment: m,
              className: v,
              size: h,
              showDivider: y,
              titleGap: _,
              spacing: w,
              subtitlePlacement: b,
              subtitleWrap: x,
            } = e,
            M = void 0 === h ? "default" : h,
            C = void 0 === w ? "default" : w,
            j = void 0 === b ? "below-title" : b,
            S = void 0 === x ? "balance" : x,
            A = null != g,
            k = null != p,
            R = null != f,
            N = "compact" === M
          d[0] !== N || d[1] !== p || d[2] !== j || d[3] !== S
            ? ((t = p
                ? (0, r.jsx)("div", {
                    className: (0, n.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === S ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === j && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (d[0] = N),
              (d[1] = p),
              (d[2] = j),
              (d[3] = S),
              (d[4] = t))
            : (t = d[4])
          let I = t
          if (!A && !k && !R) {
            let e
            return (
              d[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(r.Fragment, {})), (d[5] = e))
                : (e = d[5]),
              e
            )
          }
          let P =
              A && (void 0 === y || y) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            q = "below-header" === j ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            E = k && "compact" === C && "pb-2",
            T = k && "compact" !== C && "pb-3"
          d[6] !== v ||
          d[7] !== k ||
          d[8] !== N ||
          d[9] !== C ||
          d[10] !== E ||
          d[11] !== T ||
          d[12] !== P ||
          d[13] !== q
            ? ((i = (0, n.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                q,
                E,
                T,
                !k && (0, n.A)("items-center pb-1.5", "compact" === C ? "min-h-8" : "min-h-toolbar"),
                k && N && "items-center",
                k && !N && "items-start",
                v,
              )),
              (d[6] = v),
              (d[7] = k),
              (d[8] = N),
              (d[9] = C),
              (d[10] = E),
              (d[11] = T),
              (d[12] = P),
              (d[13] = q),
              (d[14] = i))
            : (i = d[14])
          let G =
            "none" === (void 0 === _ ? "default" : _)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(d[15] !== G ? ((a = (0, n.A)("flex min-w-0 flex-1 flex-col", G)), (d[15] = G), (d[16] = a)) : (a = d[16]),
            d[17] !== k || d[18] !== M || d[19] !== g
              ? ((o = g
                  ? (0, r.jsx)("div", {
                      className: (0, n.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === M && "text-sm leading-[18px]",
                        ("large" === M || ("default" === M && k)) && "text-lg",
                        ("base" === M || ("default" === M && !k)) && "text-base",
                      ),
                      children: g,
                    })
                  : null),
                (d[17] = k),
                (d[18] = M),
                (d[19] = g),
                (d[20] = o))
              : (o = d[20]))
          let U = "below-title" === j ? I : null
          ;(d[21] !== a || d[22] !== o || d[23] !== U
            ? ((l = (0, r.jsxs)("div", { className: a, children: [o, U] })),
              (d[21] = a),
              (d[22] = o),
              (d[23] = U),
              (d[24] = l))
            : (l = d[24]),
            d[25] !== f || d[26] !== m
              ? ((c = f
                  ? (0, r.jsx)("div", {
                      className: (0, n.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: f,
                    })
                  : null),
                (d[25] = f),
                (d[26] = m),
                (d[27] = c))
              : (c = d[27]))
          let L = "below-header" === j ? I : null
          return (
            d[28] !== i || d[29] !== l || d[30] !== c || d[31] !== L
              ? ((u = (0, r.jsxs)("div", { className: i, children: [l, c, L] })),
                (d[28] = i),
                (d[29] = l),
                (d[30] = c),
                (d[31] = L),
                (d[32] = u))
              : (u = d[32]),
            u
          )
        },
        Content: function (e) {
          let t,
            i,
            a = (0, s.c)(5),
            { children: o, className: l } = e
          return (
            a[0] !== l ? ((t = (0, n.A)("flex flex-col gap-1.5", l)), (a[0] = l), (a[1] = t)) : (t = a[1]),
            a[2] !== o || a[3] !== t
              ? ((i = (0, r.jsx)("div", { className: t, children: o })), (a[2] = o), (a[3] = t), (a[4] = i))
              : (i = a[4]),
            i
          )
        },
        Footer: function (e) {
          let t,
            i,
            a = (0, s.c)(6),
            { children: o, className: l, variant: c } = e,
            u =
              "action" === (void 0 === c ? "description" : c)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            a[0] !== l || a[1] !== u
              ? ((t = (0, n.A)("text-balance text-secondary", u, l)), (a[0] = l), (a[1] = u), (a[2] = t))
              : (t = a[2]),
            a[3] !== o || a[4] !== t
              ? ((i = (0, r.jsx)("div", { className: t, children: o })), (a[3] = o), (a[4] = t), (a[5] = i))
              : (i = a[5]),
            i
          )
        },
      },
    )
  },
  Y6nA(e, t, i) {
    i.d(t, { G: () => g })
    var r = i("WLmQ"),
      s = i("Qgfj"),
      n = i("EZRW")
    let a = (0, s.YK)({ title: { id: "settings.nav.rosalind", defaultMessage: "GPT-Rosalind" } })
    var o = i("S5NB"),
      l = i("uxIz"),
      c = i("qaaZ")
    let u = (0, s.zR)({ id: "settings.nav.general-settings", defaultMessage: "General" }),
      d = (0, s.YK)({
        family: u,
        billing: { id: "settings.nav.billing", defaultMessage: "Billing" },
        agreements: { id: "workspaceAgreements.title", defaultMessage: "Agreements" },
        age: { id: "settings.chatGpt.age.title", defaultMessage: "Age" },
        account: { id: "settings.nav.account", defaultMessage: "Account" },
        "parental-controls": { id: "settings.nav.parental-controls", defaultMessage: "Parental controls" },
        "trusted-contact": { id: "settingsModal.trustedContacts.sectionTitle", defaultMessage: "Trusted contact" },
        safety: { id: "settings.nav.safetyAndWellbeing", defaultMessage: "Safety & wellbeing" },
        "time-management": { id: "settings.nav.time-management", defaultMessage: "Time management" },
        appearance: { id: "settings.nav.appearance", defaultMessage: "Appearance" },
        voice: { id: "settings.nav.voice", defaultMessage: "Voice" },
        storage: { id: "settings.nav.storage", defaultMessage: "ChatGPT storage" },
        deviceStorage: { id: "settings.nav.deviceStorage", defaultMessage: "Device storage" },
        pets: { id: "settings.nav.miniAndPets", defaultMessage: "Mini & Pets" },
        chatGptPets: { id: "settings.nav.pets.v2", defaultMessage: "Pets" },
        "general-settings": u,
        notifications: { id: "settings.nav.notifications", defaultMessage: "Notifications" },
        import: { id: "settings.nav.import.v2", defaultMessage: "Import" },
        profile: { id: "settings.nav.profile", defaultMessage: "Profile" },
        security: { id: "settings.nav.security", defaultMessage: "Security" },
        "keyboard-shortcuts": { id: "settings.nav.keyboard-shortcuts", defaultMessage: "Keyboard shortcuts" },
        "codex-micro": { id: "settings.nav.codex-micro", defaultMessage: "Codex Micro" },
        appshots: { id: "settings.nav.appshots", defaultMessage: "Appshots" },
        agent: { id: "settings.nav.agent", defaultMessage: "Configuration" },
        "work-settings": { id: "settings.nav.workPreferences", defaultMessage: "Work preferences" },
        "git-settings": { id: "settings.nav.git-settings", defaultMessage: "Git" },
        "ads-controls": { id: "settings.nav.ads-controls", defaultMessage: "Ads controls" },
        "archived-chats": { id: "settings.nav.archived-chats", defaultMessage: "Archived chats" },
        "data-controls": { id: "settings.nav.chatGptDataControls", defaultMessage: "Data controls" },
        chatGptSecurity: { id: "settings.nav.chatGptSecurity", defaultMessage: "Security and login" },
        chatGptKeyboard: { id: "settings.nav.chatGptKeyboard", defaultMessage: "Keyboard" },
        chatGptRemotes: { id: "settings.nav.chatGptRemotes", defaultMessage: "Remotes" },
        chatGptInternalSettings: { id: "settings.nav.chatGptInternalSettings", defaultMessage: "Employee Only" },
        "code-review": { id: "settings.nav.codeReview", defaultMessage: "Code Review" },
        "usage-code-review": { id: "settings.nav.codeReviewAnalytics", defaultMessage: "Code review analytics" },
        "cloud-settings": { id: "settings.nav.cloudSettings", defaultMessage: "Cloud preferences" },
        "codex-cloud": { id: "settings.nav.codexCloud", defaultMessage: "Codex Cloud" },
        legacyCodexCloud: { id: "settings.nav.legacyCodexCloud", defaultMessage: "Legacy Codex Cloud" },
        "cloud-environments": { id: "settings.nav.cloudEnvironments", defaultMessage: "Cloud environments" },
        personalization: { id: "settings.nav.personalization", defaultMessage: "Personalization" },
        chronicle: { id: "settings.nav.chronicle", defaultMessage: "Computer history" },
        usage: { id: "settings.nav.usage", defaultMessage: "Usage & billing" },
        enterpriseUsage: { id: "settings.nav.enterpriseUsage", defaultMessage: "Usage" },
        analytics: { id: "settings.nav.analytics", defaultMessage: "Analytics" },
        "consumer-view": { id: "settings.nav.consumerView", defaultMessage: "Consumer analytics (internal)" },
        debug: { id: "settings.nav.debug", defaultMessage: "Debug" },
        "computer-use": { id: "settings.nav.computer-use", defaultMessage: "Computer use" },
        "browser-use": { id: "settings.nav.browser-use", defaultMessage: "Browser" },
        extension: { id: "settings.nav.namedBrowserExtension", defaultMessage: "{browserName} extension" },
        browserExtension: { id: "settings.nav.browser-extension", defaultMessage: "Browser extension" },
        "local-environments": { id: "settings.nav.local-environments", defaultMessage: "Environments" },
        worktrees: { id: "settings.nav.worktrees.v2", defaultMessage: "Worktrees" },
        environments: { id: "settings.nav.environments", defaultMessage: "Cloud Environments" },
        "mcp-settings": { id: "settings.nav.mcp-settings", defaultMessage: "MCP servers" },
        gateways: { id: "settings.nav.gateways", defaultMessage: "Model Providers" },
        "hooks-settings": { id: "settings.nav.hooks-settings", defaultMessage: "Hooks" },
        connections: { id: "settings.nav.connections", defaultMessage: "Connections" },
        "plugins-settings": { id: "settings.nav.plugins-settings", defaultMessage: "Plugins" },
        "file-type-handlers": { id: "settings.nav.viewers", defaultMessage: "Viewers" },
        "skills-settings": { id: "settings.nav.skills-settings", defaultMessage: "Skills" },
      })
    function g(e, t = !1, i = !1) {
      if ("storage" === e) return d.deviceStorage
      if ("rosalind" === e) return a.title
      if ("extension" === e) {
        let e = (0, n.e)()
        return null != e ? { ...d.extension, values: { browserName: r.Yp[e].shortDisplayName } } : d.browserExtension
      }
      if ("usage" === e && t) return d.enterpriseUsage
      if ("passwords" === e) return l.N.title
      if ("cloud-computer" === e) return o.P.title
      if ("teams" === e) return c.T.title
      if (i) {
        if ("usage" === e) return d.enterpriseUsage
        if ("connections" === e) return d.chatGptRemotes
        if ("debug" === e) return d.chatGptInternalSettings
        if ("keyboard-shortcuts" === e) return d.chatGptKeyboard
        if ("security" === e) return d.chatGptSecurity
      }
      return "cloud-environments" === e ? d.legacyCodexCloud : d[e]
    }
  },
  DDOY(e, t, i) {
    var r = i("Ywss"),
      s = i("iiZm")
    function n(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    i.d(
      t,
      {},
      {
        Xl: function (e, t, i) {
          let s = (0, r.Rr)(e),
            n = new URLSearchParams(s.search)
          for (let [e, t] of Object.entries(i ?? {})) n.set(e, t)
          return (0, r.AO)({ ...s, search: n.toString(), hash: t })
        },
        hz: n,
        s9: function (e, t, i) {
          let r = i.trim()
          return 0 === r.length
            ? []
            : e
                .flatMap((e) => {
                  let i = n(t, e.title),
                    a = (0, s.gr)(i, r),
                    o = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(r.toLocaleLowerCase(t.locale)),
                    l = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, s.gr)(n(t, e), r) > 0)
                  return 0 !== a || o || l
                    ? [
                        {
                          id: e.id,
                          label: i,
                          score: a,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: i, path: r, searchParams: s }) => ({
                  id: e,
                  label: t,
                  sectionSlug: i,
                  ...(null == r ? {} : { path: r }),
                  searchParams: s,
                }))
        },
      },
    )
  },
  QyE3(e, t, i) {
    var r = i("ABep"),
      s = i("QosV"),
      n = i("on57"),
      a = i("oyxz"),
      o = i("RRpo"),
      l = i("Sm6l"),
      c = i("GCsp"),
      u = i("Y6nA")
    function d(e) {
      let t,
        i,
        n = (0, s.c)(7),
        { codexMicroDeviceModel: l, showChatGptDataControlsLabel: c, showUsageOnlyLabel: d, slug: g } = e,
        p = void 0 !== c && c,
        f = void 0 !== d && d
      if ("codex-micro" === g && "creator-micro-v2" === (void 0 === l ? null : l)) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(a.A, { ...o.b.creatorMicro })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      return (
        n[1] !== p || n[2] !== f || n[3] !== g
          ? ((t = (0, u.G)(g, f, p)), (n[1] = p), (n[2] = f), (n[3] = g), (n[4] = t))
          : (t = n[4]),
        n[5] !== t ? ((i = (0, r.jsx)(a.A, { ...t })), (n[5] = t), (n[6] = i)) : (i = n[6]),
        i
      )
    }
    i.d(
      t,
      {},
      {
        gl: d,
        s: function (e) {
          let t = (0, s.c)(61),
            { showChatGptDataControlsLabel: i, slug: n } = e
          if (
            void 0 !== i &&
            i &&
            [
              "browser-use",
              "connections",
              "data-controls",
              "debug",
              "keyboard-shortcuts",
              "security",
              "usage",
            ].includes(n)
          ) {
            let e, i
            return (
              t[0] !== n ? ((e = (0, u.G)(n, !1, !0)), (t[0] = n), (t[1] = e)) : (e = t[1]),
              t[2] !== e ? ((i = (0, r.jsx)(a.A, { ...e })), (t[2] = e), (t[3] = i)) : (i = t[3]),
              i
            )
          }
          switch (n) {
            case "rosalind":
            case "passwords":
            case "cloud-computer":
            case "age":
            case "agreements":
            case "billing":
            case "extension": {
              let e, i
              return (
                t[4] !== n ? ((e = (0, u.G)(n)), (t[4] = n), (t[5] = e)) : (e = t[5]),
                t[6] !== e ? ((i = (0, r.jsx)(a.A, { ...e })), (t[6] = e), (t[7] = i)) : (i = t[7]),
                i
              )
            }
            case "account": {
              let e
              return (
                t[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.account", defaultMessage: "Account" })), (t[8] = e))
                  : (e = t[8]),
                e
              )
            }
            case "appshots": {
              let e
              return (
                t[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.appshots", defaultMessage: "Appshots" })), (t[9] = e))
                  : (e = t[9]),
                e
              )
            }
            case "appearance": {
              let e
              return (
                t[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.appearance", defaultMessage: "Appearance" })),
                    (t[10] = e))
                  : (e = t[10]),
                e
              )
            }
            case "voice": {
              let e
              return (
                t[11] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.voice", defaultMessage: "Voice" })), (t[11] = e))
                  : (e = t[11]),
                e
              )
            }
            case "storage":
            case "family":
            case "parental-controls":
            case "trusted-contact":
            case "safety":
            case "time-management":
            case "pets": {
              let e, i
              return (
                t[12] !== n ? ((e = (0, u.G)(n)), (t[12] = n), (t[13] = e)) : (e = t[13]),
                t[14] !== e ? ((i = (0, r.jsx)(a.A, { ...e })), (t[14] = e), (t[15] = i)) : (i = t[15]),
                i
              )
            }
            case "general-settings": {
              let e
              return (
                t[16] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.general-settings", defaultMessage: "General" })),
                    (t[16] = e))
                  : (e = t[16]),
                e
              )
            }
            case "notifications": {
              let e
              return (
                t[17] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.notifications", defaultMessage: "Notifications" })),
                    (t[17] = e))
                  : (e = t[17]),
                e
              )
            }
            case "import": {
              let e
              return (
                t[18] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.import.v2", defaultMessage: "Import" })), (t[18] = e))
                  : (e = t[18]),
                e
              )
            }
            case "profile": {
              let e
              return (
                t[19] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.profile", defaultMessage: "Profile" })), (t[19] = e))
                  : (e = t[19]),
                e
              )
            }
            case "security": {
              let e
              return (
                t[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.security", defaultMessage: "Security and login" })),
                    (t[20] = e))
                  : (e = t[20]),
                e
              )
            }
            case "keyboard-shortcuts": {
              let e
              return (
                t[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.section.keyboard-shortcuts",
                      defaultMessage: "Keyboard shortcuts",
                    })),
                    (t[21] = e))
                  : (e = t[21]),
                e
              )
            }
            case "codex-micro": {
              let e
              return (
                t[22] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.codex-micro", defaultMessage: "Codex Micro" })),
                    (t[22] = e))
                  : (e = t[22]),
                e
              )
            }
            case "agent": {
              let e
              return (
                t[23] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.agent", defaultMessage: "Configuration" })),
                    (t[23] = e))
                  : (e = t[23]),
                e
              )
            }
            case "work-settings": {
              let e
              return (
                t[24] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(d, { slug: "work-settings" })), (t[24] = e))
                  : (e = t[24]),
                e
              )
            }
            case "git-settings": {
              let e
              return (
                t[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.git-settings", defaultMessage: "Git" })), (t[25] = e))
                  : (e = t[25]),
                e
              )
            }
            case "ads-controls": {
              let e
              return (
                t[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(d, { slug: "ads-controls" })), (t[26] = e))
                  : (e = t[26]),
                e
              )
            }
            case "data-controls":
            case "archived-chats": {
              let e
              return (t[27] !== n ? ((e = (0, r.jsx)(d, { slug: n })), (t[27] = n), (t[28] = e)) : (e = t[28]), e)
            }
            case "usage-code-review": {
              let e
              return (
                t[29] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.codeReview", defaultMessage: "Code review" })),
                    (t[29] = e))
                  : (e = t[29]),
                e
              )
            }
            case "code-review": {
              let e
              return (
                t[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(d, { slug: "code-review" })), (t[30] = e))
                  : (e = t[30]),
                e
              )
            }
            case "cloud-settings": {
              let e
              return (
                t[31] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.section.cloudSettings",
                      defaultMessage: "Cloud preferences",
                    })),
                    (t[31] = e))
                  : (e = t[31]),
                e
              )
            }
            case "codex-cloud":
            case "cloud-environments": {
              let e, i
              return (
                t[32] !== n ? ((e = (0, u.G)(n)), (t[32] = n), (t[33] = e)) : (e = t[33]),
                t[34] !== e ? ((i = (0, r.jsx)(a.A, { ...e })), (t[34] = e), (t[35] = i)) : (i = t[35]),
                i
              )
            }
            case "personalization": {
              let e
              return (
                t[36] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.section.personalization",
                      defaultMessage: "Personalization",
                    })),
                    (t[36] = e))
                  : (e = t[36]),
                e
              )
            }
            case "chronicle": {
              let e
              return (
                t[37] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.chronicle", defaultMessage: "Computer history" })),
                    (t[37] = e))
                  : (e = t[37]),
                e
              )
            }
            case "usage": {
              let e
              return (
                t[38] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.usage", defaultMessage: "Usage & billing" })),
                    (t[38] = e))
                  : (e = t[38]),
                e
              )
            }
            case "analytics": {
              let e
              return (
                t[39] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.analytics", defaultMessage: "Analytics" })),
                    (t[39] = e))
                  : (e = t[39]),
                e
              )
            }
            case "consumer-view": {
              let e
              return (
                t[40] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.section.consumerView",
                      defaultMessage: "Consumer analytics (internal)",
                    })),
                    (t[40] = e))
                  : (e = t[40]),
                e
              )
            }
            case "debug": {
              let e
              return (
                t[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.debug", defaultMessage: "Debug" })), (t[41] = e))
                  : (e = t[41]),
                e
              )
            }
            case "computer-use": {
              let e
              return (
                t[42] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "computerUse.label", defaultMessage: "Computer use" })), (t[42] = e))
                  : (e = t[42]),
                e
              )
            }
            case "browser-use": {
              let e
              return (
                t[43] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.browser-use", defaultMessage: "Browser" })),
                    (t[43] = e))
                  : (e = t[43]),
                e
              )
            }
            case "local-environments": {
              let e
              return (
                t[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.section.local-environments",
                      defaultMessage: "Environments",
                    })),
                    (t[44] = e))
                  : (e = t[44]),
                e
              )
            }
            case "worktrees": {
              let e
              return (
                t[45] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.worktrees.v2", defaultMessage: "Worktrees" })),
                    (t[45] = e))
                  : (e = t[45]),
                e
              )
            }
            case "environments": {
              let e
              return (
                t[46] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.section.environments",
                      defaultMessage: "Cloud Environments",
                    })),
                    (t[46] = e))
                  : (e = t[46]),
                e
              )
            }
            case "gateways": {
              let e
              return (
                t[47] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "settings.gateways.title",
                      defaultMessage: "Model Providers & Gateways",
                    })),
                    (t[47] = e))
                  : (e = t[47]),
                e
              )
            }
            case "mcp-settings": {
              let e
              return (
                t[48] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.mcp-settings", defaultMessage: "MCP servers" })),
                    (t[48] = e))
                  : (e = t[48]),
                e
              )
            }
            case "hooks-settings": {
              let e
              return (
                t[49] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.hooks-settings", defaultMessage: "Hooks" })),
                    (t[49] = e))
                  : (e = t[49]),
                e
              )
            }
            case "connections": {
              let e
              return (
                t[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.connections", defaultMessage: "Connections" })),
                    (t[50] = e))
                  : (e = t[50]),
                e
              )
            }
            case "plugins-settings": {
              let e
              return (
                t[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.plugins-settings", defaultMessage: "Plugins" })),
                    (t[51] = e))
                  : (e = t[51]),
                e
              )
            }
            case "file-type-handlers": {
              let e, i
              return (
                t[52] !== n ? ((e = (0, u.G)(n)), (t[52] = n), (t[53] = e)) : (e = t[53]),
                t[54] !== e ? ((i = (0, r.jsx)(a.A, { ...e })), (t[54] = e), (t[55] = i)) : (i = t[55]),
                i
              )
            }
            case "skills-settings": {
              let e
              return (
                t[56] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, { id: "settings.section.skills-settings", defaultMessage: "Skills" })),
                    (t[56] = e))
                  : (e = t[56]),
                e
              )
            }
            case "teams": {
              let e, i
              return (
                t[57] !== n ? ((e = (0, u.G)(n)), (t[57] = n), (t[58] = e)) : (e = t[58]),
                t[59] !== e ? ((i = (0, r.jsx)(a.A, { ...e })), (t[59] = e), (t[60] = i)) : (i = t[60]),
                i
              )
            }
          }
        },
        vg: function (e) {
          let t,
            i,
            a,
            o,
            u,
            d,
            g,
            p,
            f,
            m,
            v,
            h,
            y,
            _,
            w = (0, s.c)(29)
          w[0] !== e
            ? (({
                children: i,
                className: a,
                contentClassName: o,
                chevronClassName: t,
                leadingVisual: u,
                color: g,
                size: p,
                ...d
              } = e),
              (w[0] = e),
              (w[1] = t),
              (w[2] = i),
              (w[3] = a),
              (w[4] = o),
              (w[5] = u),
              (w[6] = d),
              (w[7] = g),
              (w[8] = p))
            : ((t = w[1]), (i = w[2]), (a = w[3]), (o = w[4]), (u = w[5]), (d = w[6]), (g = w[7]), (p = w[8]))
          let b = void 0 === g ? "outline" : g,
            x = void 0 === p ? "toolbar" : p,
            M =
              "toolbar" === x &&
              (null != u ? "pe-3 ps-[calc((var(--spacing-token-button-composer)-var(--spacing)*5)/2-1px)]" : "px-3")
          return (
            w[9] !== a || w[10] !== M
              ? ((f = (0, n.A)("max-w-full justify-between", M, a)), (w[9] = a), (w[10] = M), (w[11] = f))
              : (f = w[11]),
            w[12] !== o
              ? ((m = (0, n.A)("flex min-w-0 flex-1 items-center gap-1.5", o)), (w[12] = o), (w[13] = m))
              : (m = w[13]),
            w[14] !== i || w[15] !== u || w[16] !== m
              ? ((v = (0, r.jsxs)("span", { className: m, children: [u, i] })),
                (w[14] = i),
                (w[15] = u),
                (w[16] = m),
                (w[17] = v))
              : (v = w[17]),
            w[18] !== t
              ? ((h = (0, n.A)("icon-2xs shrink-0 text-tertiary", t)), (w[18] = t), (w[19] = h))
              : (h = w[19]),
            w[20] !== h ? ((y = (0, r.jsx)(c.A, { className: h })), (w[20] = h), (w[21] = y)) : (y = w[21]),
            w[22] !== b || w[23] !== d || w[24] !== x || w[25] !== f || w[26] !== v || w[27] !== y
              ? ((_ = (0, r.jsxs)(l.$, { color: b, size: x, className: f, ...d, children: [v, y] })),
                (w[22] = b),
                (w[23] = d),
                (w[24] = x),
                (w[25] = f),
                (w[26] = v),
                (w[27] = y),
                (w[28] = _))
              : (_ = w[28]),
            _
          )
        },
      },
    )
  },
  FT3i(e, t, i) {
    let r = (0, i("ESTr").a)({
      name: "shield-checkmark-regular-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 4.087402, y: 2.083984, width: 23.814453, height: 28.453125 },
        visualBounds: { x: 4.087402, y: 2.083984, width: 23.814453, height: 28.453125 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.087402, y: 2.083984, width: 23.814453, height: 28.453125 },
        center: { x: 15.994629, y: 16.310547 },
        insets: { top: 2.083984, right: 4.098145, bottom: 1.462891, left: 4.087402 },
        anchors: {
          frame: { x: 16, y: 16 },
          ink: { x: 15.994629, y: 16.310547 },
          foreground: { x: 15.994629, y: 16.310547 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19.7368 11.2468C20.1212 10.6737 20.8979 10.5209 21.4712 10.905C22.0444 11.2895 22.1974 12.0661 21.813 12.6394L16.2134 20.9919C15.6752 21.7941 14.5297 21.8858 13.8706 21.1794L10.8101 17.8991C10.3394 17.3944 10.3671 16.6034 10.8716 16.1325C11.3763 15.6617 12.1672 15.6895 12.6382 16.1941L14.8384 18.5525L19.7368 11.2468Z" fill="currentColor"/> <path d="M14.2944 2.44016C15.3802 1.96536 16.615 1.96516 17.7007 2.44016L25.356 5.78879C26.9026 6.46557 27.9017 7.99409 27.9019 9.68235V17.0593C27.9018 20.7152 26.6134 23.5767 24.5435 25.7693C22.5013 27.9323 19.7493 29.3941 16.8687 30.3982L16.8589 30.4011C16.3055 30.5886 15.7051 30.582 15.1558 30.3845C15.1464 30.3812 15.1368 30.379 15.1274 30.3757C12.2505 29.3789 9.50084 27.9256 7.4585 25.7722C5.38117 23.5819 4.08747 20.7191 4.0874 17.0593V9.68333C4.0874 7.99462 5.08709 6.46547 6.63428 5.78879L14.2944 2.44016ZM16.6987 4.7302C16.2518 4.53467 15.7434 4.53487 15.2964 4.7302L7.63623 8.07981C6.99917 8.35845 6.5874 8.98799 6.5874 9.68333V17.0593C6.58747 20.0659 7.62706 22.3161 9.27295 24.0515C10.8425 25.7063 13.0085 26.9376 15.4751 27.8454L15.9858 28.0281L16.0005 28.0329C16.0175 28.0392 16.0359 28.0391 16.0532 28.0339C18.716 27.1049 21.0591 25.8191 22.7261 24.0534C24.3666 22.3157 25.4018 20.0645 25.4019 17.0593V9.68235C25.4017 8.98745 24.9905 8.35854 24.354 8.07981L16.6987 4.7302Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    i.d(t, {}, { q: r })
  },
}
//# sourceMappingURL=210324.eda44b0734.js.map
