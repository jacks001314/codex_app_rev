export const __rspack_esm_ids = [219125]
export const __webpack_modules__ = {
  IG5V(e, t, a) {
    var n = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, n.jsxs)("svg", {
          width: 357,
          height: 62,
          viewBox: "0 0 357 62",
          fill: "none",
          role: "img",
          focusable: "false",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("title", { children: "ChatGPT" }),
            (0, n.jsx)("path", {
              d: "M30.8694 50.7428C19.9894 50.7428 12.4244 42.4978 12.4244 31.1078C12.4244 19.7178 19.9894 11.4728 30.6994 11.4728C38.5194 11.4728 44.5544 16.0628 46.3394 21.6728H58.4944C56.3694 9.43281 44.8944 0.507812 30.5294 0.507812C13.2744 0.507812 0.609375 14.1928 0.609375 31.1078C0.609375 48.0228 12.9344 61.7078 30.6144 61.7078C45.2344 61.7078 56.4544 52.9528 58.7494 40.5428H46.6794C44.6394 46.2378 38.6894 50.7428 30.8694 50.7428Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M88.586 17.5094C82.976 17.5094 78.556 19.9744 76.091 23.3744V1.35938H65.041V60.8594H76.091V37.9944C76.091 31.3644 79.661 27.0294 85.441 27.0294C90.711 27.0294 93.686 31.1094 93.686 36.8044V60.8594H104.736V35.0194C104.736 24.4794 98.276 17.5094 88.586 17.5094Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M150.04 33.1478C150.04 23.4578 143.41 17.5078 131.17 17.5078C121.14 17.5078 113.15 23.1178 111.79 31.2778H122.925C123.775 28.4728 126.835 26.2628 131.085 26.2628C136.61 26.2628 139.245 29.1528 139.245 34.1678V34.4228L128.45 35.3578C117.145 36.2928 110.855 40.8828 110.855 49.5528C110.855 56.8628 117.145 61.7078 125.9 61.7078C131.765 61.7078 137.46 59.4128 139.84 55.5878C139.84 57.4578 140.01 59.1578 140.35 60.8578H150.635C150.21 58.1378 150.04 54.9928 150.04 51.3378V33.1478ZM139.245 43.2628C139.245 48.2778 135.505 53.3778 127.94 53.3778C123.86 53.3778 121.65 51.4228 121.65 48.5328C121.65 45.3878 123.775 43.4328 128.535 43.0078L139.245 42.0728V43.2628Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M173.245 4.58984H162.195V18.3598H153.355V27.2848H162.195V48.1948C162.195 56.2698 166.36 60.8598 175.285 60.8598H184.125V51.6798H178.515C174.775 51.6798 173.245 50.4048 173.245 46.9198V27.2848H184.125V18.3598H173.245V4.58984Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M239.033 29.0678H219.993V38.5878H236.228C235.123 46.4928 227.728 51.2528 219.483 51.2528C207.583 51.2528 200.613 42.4978 200.613 31.1078C200.613 19.7178 208.433 11.3878 219.143 11.3878C226.453 11.3878 232.403 15.6378 233.933 20.3978H246.088C243.793 8.58281 232.913 0.507812 218.973 0.507812C201.803 0.507812 189.053 14.3628 189.053 31.1928C189.053 48.0228 200.783 61.7078 218.293 61.7078C226.283 61.7078 233.508 58.1378 236.738 53.2928V60.8578H246.598V36.6328C246.598 31.7878 243.878 29.0678 239.033 29.0678Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M281.703 1.35938H255.354V60.8594H266.573V38.5044H281.789C293.519 38.5044 301.849 31.6194 301.849 20.0594C301.849 8.49937 293.518 1.35938 281.703 1.35938ZM280.939 28.6444H266.573V11.5594H280.939C286.719 11.5594 290.458 14.8744 290.458 20.0594C290.458 25.2444 286.719 28.6444 280.939 28.6444Z",
              fill: "currentColor",
            }),
            (0, n.jsx)("path", {
              d: "M304.652 1.35938V11.5594H324.967V60.8594H336.187V11.5594H356.587V1.35938H304.652Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  c2F9(e, t, a) {
    let n = { STANDARD: "default", PREMIUM: "prolite" },
      r = { [n.STANDARD]: 40221, [n.PREMIUM]: 340370 },
      s = { standardSeats: 5, premiumSeats: 0 },
      o = (e, t) => {
        let a = e.filter((e) => e.recurring?.interval != null),
          r = a.flatMap((e) => {
            if (null == e.id) return []
            let a = t?.[e.id]?.seat_type
            return a !== n.STANDARD && a !== n.PREMIUM ? [] : [{ lineItem: e, seatType: a }]
          }),
          s = r.length > 0,
          o = s || 1 !== a.length ? void 0 : a[0],
          l = r[0]?.lineItem ?? o
        if (!l?.recurring?.interval) return
        let i = r.filter(({ seatType: e }) => e === n.STANDARD),
          c = r.filter(({ seatType: e }) => e === n.PREMIUM),
          u = (e) => e.reduce((e, { lineItem: t }) => e + (t.quantity ?? 0), 0),
          d = (e) => e.reduce((e, { lineItem: t }) => e + t.subtotal.minorUnitsAmount, 0),
          h = s ? u(i) : (o?.quantity ?? 0),
          p = u(c),
          m = s ? d(i) : (o?.subtotal.minorUnitsAmount ?? 0),
          f = d(c)
        return {
          interval: "month" === l.recurring.interval ? "month" : "year",
          quantity: h + p,
          standardQuantity: h,
          premiumQuantity: p,
          standardAmountMinorUnits: m,
          premiumAmountMinorUnits: f,
          isMapped: s,
        }
      }
    function l({ configuredDefaultSeats: e, fallbackDefaultSeats: t, maxSeats: a, minimumSeats: n }) {
      return Math.max(n, Math.min(a, c(e) ?? t))
    }
    function i({ configuredSeatQuantities: e, maxSeats: t, minimumSeats: a }) {
      let n = c(null != e && "object" == typeof e && "default" in e ? e.default : void 0) ?? s.standardSeats,
        r = c(null != e && "object" == typeof e && "prolite" in e ? e.prolite : void 0) ?? s.premiumSeats,
        o = n + r
      return n < 0 || r < 0 || o < a || o > t ? { ...s } : { standardSeats: n, premiumSeats: r }
    }
    function c(e) {
      let t = "string" == typeof e && "" !== e.trim() ? Number(e) : e
      return "number" == typeof t && Number.isSafeInteger(t) ? t : null
    }
    a.d(
      t,
      {},
      {
        A9: () => 2,
        E2: function (e) {
          let t = "string" == typeof e ? new URLSearchParams(e) : e,
            a = t.get("promoCode")?.trim() || null,
            n = (null == a && t.get("promo_campaign")?.trim()) || null,
            r = t.get("price_interval") ?? t.get("selectedPlan") ?? (null != n ? "month" : "year")
          return {
            ...(function (e) {
              let t = e.get("seat_offer"),
                a = e.get("numSeats") ?? ""
              if (null == t) {
                let e = Number.parseInt(a, 10)
                return { requestedSeatQuantity: Number.isSafeInteger(e) && e > 0 ? e : null }
              }
              let n = /^[a-z0-9][a-z0-9_-]{0,63}$/.test(t) ? t : void 0,
                r = Number(a)
              return { seatOffer: n, requestedSeatQuantity: /^\d+$/.test(a) && r >= (n ? 1 : 2) && r <= 200 ? r : null }
            })(t),
            promoCode: a,
            promoCampaign: n,
            priceInterval: "month" === r ? "month" : "year",
          }
        },
        J4: "business_seat_offer_unavailable",
        NO: () => 5,
        SE: "https://openai.com/contact-sales/?utm_medium=product&utm_source=website&utm_campaign=PLG-Business-201-seats",
        Tw: function (e, t) {
          if (null == t) return null
          let a = 0
          for (let s of e) {
            if ("initial_invoice" === s.lineRole || !s.recurring?.interval) continue
            let e = s.id ? t[s.id]?.seat_type : void 0,
              o = s.quantity
            if ((e !== n.STANDARD && e !== n.PREMIUM) || null == o || !Number.isSafeInteger(o) || o < 0) return null
            a += o * r[e]
          }
          return Number.isSafeInteger(a) && a > 0 ? a / 100 : null
        },
        YL: l,
        YO: n,
        Yj: function (e, t) {
          let a = new URLSearchParams(e)
          return (
            a.delete("seat_offer"),
            1 === t && a.delete("numSeats"),
            a.size > 0 ? `/buy-business?${a.toString()}` : "/buy-business"
          )
        },
        bY: "https://openai.com/contact-sales/?utm_medium=product&utm_source=website&utm_campaign=PLG-Business-999-seats",
        bz: function ({ minimumSeats: e, maxSeats: t, getConfiguredSeatQuantities: a }) {
          if (e > 2 || t < 5) return !1
          let { standardSeats: n, premiumSeats: r } = i({ configuredSeatQuantities: a(), minimumSeats: e, maxSeats: t })
          return 5 === n && 0 === r
        },
        c8: function (e) {
          if (null != e.info_by_stripe_line_item_id) return e.info_by_stripe_line_item_id
          if (
            "open_ai" !== e.checkout_provider ||
            ("chatgptteamplan" !== e.plan_name && "self_serve_business_prolite" !== e.plan_name)
          )
            return null
          let t = e.checkout_state
          if (null == t || !Array.isArray(t.lineItems)) return null
          let a = {}
          for (let e of t.lineItems)
            "object" == typeof e &&
              null != e &&
              "id" in e &&
              "string" == typeof e.id &&
              "seatType" in e &&
              (e.seatType === n.STANDARD || e.seatType === n.PREMIUM) &&
              "initial_invoice" !== e.lineRole &&
              null != e.recurring &&
              (a[e.id] = { seat_type: e.seatType })
          return Object.keys(a).length > 0 ? a : null
        },
        eB: function ({ isFreeTrial: e, isStandardBusinessCheckout: t, serverEnabled: a, isEnabledForCheckout: n }) {
          return !e && t && ("true" === a || (null == a && n()))
        },
        et: function ({ input: e, metadata: t, eligibleCampaign: a }) {
          return null != e.promoCode && t?.plan_name === "chatgptteamplan"
            ? { promo_code: e.promoCode }
            : null == e.promoCode && null != a && "month" === e.priceInterval
              ? { promo_campaign: { promo_campaign_id: a, is_coupon_from_query_param: !0 } }
              : {}
        },
        hD: function (
          e,
          { checkoutUiMode: t, isPremiumSeatsEnabled: a, getConfiguredDefaultSeats: r, getConfiguredSeatQuantities: s },
        ) {
          let o = e.team_plan_data,
            c = "string" == typeof e.promo_campaign ? e.promo_campaign : e.promo_campaign?.promo_campaign_id
          if (
            "custom" !== t ||
            "chatgptteamplan" !== e.plan_name ||
            o?.price_interval !== "month" ||
            null != o.existing_workspace_id ||
            null != o.seat_quantities ||
            null == o.seat_quantity ||
            "team-1-month-free" === c ||
            !a() ||
            (5 !== o.seat_quantity &&
              o.seat_quantity !==
                l({ configuredDefaultSeats: r(), fallbackDefaultSeats: 5, maxSeats: 200, minimumSeats: 2 }))
          )
            return o
          let { standardSeats: u, premiumSeats: d } = i({
              configuredSeatQuantities: s(),
              maxSeats: 200,
              minimumSeats: 2,
            }),
            h = 5 === u && 0 === d ? o.seat_quantity : u
          return {
            ...o,
            seat_quantity: h + d,
            seat_quantities: [
              { seat_type: n.STANDARD, quantity: h },
              { seat_type: n.PREMIUM, quantity: d },
            ],
          }
        },
        hc: function ({ currentPlan: e, nextPlan: t, hasFreeTrialPromo: a, hideSeatPickerLayerEnabled: n }) {
          return n && a && "year" === e && "month" === t
        },
        n8: o,
        uW: function ({
          standardQuantity: e,
          premiumQuantity: t,
          minimumSeats: a,
          maximumSeats: n,
          assignedStandardMinimum: r = 0,
          assignedPremiumMinimum: s = 0,
        }) {
          let o = Math.max(r, a - t, 0),
            l = Math.max(s, a - e, 0)
          return {
            standardMinimum: o,
            premiumMinimum: l,
            standardMaximum: Math.max(o, n - t),
            premiumMaximum: Math.max(l, n - e),
          }
        },
        uZ: function ({ isFreeWorkspace: e, workspaceMemberCount: t, minimumSeats: a = 0 }) {
          let n = e && null != t && t > 0 ? t : void 0
          return { minimumSeats: Math.max(n ?? 2, a), defaultSeats: Math.max(n ?? 5, a) }
        },
        y: function ({ businessSeatLineItems: e, lineItems: t, subtotalMinorUnits: a }) {
          if (null == e || 0 === t.length) return null
          let n = o(t, e)
          if (
            null == n ||
            !n.isMapped ||
            n.quantity <= 0 ||
            n.standardAmountMinorUnits + n.premiumAmountMinorUnits !== a
          )
            return null
          let r = []
          return (
            n.standardQuantity > 0 &&
              r.push({ amountMinorUnits: n.standardAmountMinorUnits, quantity: n.standardQuantity, type: "standard" }),
            n.premiumQuantity > 0 &&
              r.push({ amountMinorUnits: n.premiumAmountMinorUnits, quantity: n.premiumQuantity, type: "premium" }),
            r.length > 0 ? r : null
          )
        },
        z7: ["us", "eu", "jp", "ca", "kr", "au", "sg", "in", "ae", "gb"],
      },
    )
  },
  TfeC(e, t, a) {
    a.d(t, { WorkspaceRecoveryGate: () => eG })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("qmMi"),
      o = a("DBCl"),
      l = a("Ywss"),
      i = a("GLfw"),
      c = a("YitN"),
      u = a("Ot7V"),
      d = a("vV6o"),
      h = a("GaA7"),
      p = a("OWtl"),
      m = a("kfGJ"),
      f = a("hZax"),
      x = a("a6Zv"),
      g = a("c2F9"),
      y = a("Kwur"),
      w = a("dMvT"),
      v = a("UR81")
    function _(e) {
      let t = e?.account
      return t?.structure === "workspace" &&
        !0 === t.is_deactivated &&
        "account-owner" === t.account_user_role &&
        (0, v.Hw)(t.plan_type) &&
        !0 === t.eligible_for_reactivation &&
        e?.can_access_with_session !== !1
        ? e?.entitlement.has_active_subscription === !0
          ? "customer_portal"
          : "checkout"
        : null
    }
    let k = { $type: "protobuf_analytics_events.v1.ChatgptBusinessBillingActiveWorkspaceRecovered" }
    var b = a("T0Rc"),
      C = a("wYVE"),
      j = a("LjYy"),
      M = a("zd8w"),
      A = a("oyxz"),
      I = a("UOa8"),
      S = a("YJm0"),
      R = a("n19u"),
      L = a("zOE4"),
      N = a("yGJW"),
      E = a("kK7d"),
      T = a("GDNt"),
      P = a("KLCH"),
      V = a("LhhH"),
      q = a("Sm6l"),
      W = a("JNtf"),
      H = a("mUDD"),
      D = a("bqtn"),
      B = a("HOLv"),
      U = a("bVeK"),
      z = a("zkPp"),
      G = a("RNul"),
      O = a("IO5C"),
      Z = a("LKHd"),
      Y = a("ESTr")
    let F = (0, Y.a)({
        name: "dot-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.325195, y: 1.327148, width: 17.345703, height: 17.345703 },
          visualBounds: { x: 1.325195, y: 1.327148, width: 17.345703, height: 17.345703 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 1.325195, y: 1.327148, width: 17.345703, height: 17.345703 },
          center: { x: 9.998047, y: 10 },
          insets: { top: 1.327148, right: 1.329102, bottom: 1.327149, left: 1.325195 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.998047, y: 10 }, foreground: { x: 9.998047, y: 10 } },
        },
        capabilities: ["icon"],
        body: '<path d="M10 5.73145C12.3574 5.73145 14.2686 7.64256 14.2686 10C14.2686 12.3574 12.3574 14.2686 10 14.2686C7.64256 14.2686 5.73145 12.3574 5.73145 10C5.73145 7.64256 7.64256 5.73145 10 5.73145ZM10 7.06152C8.3771 7.06152 7.06152 8.3771 7.06152 10C7.06152 11.6229 8.3771 12.9385 10 12.9385C11.6229 12.9385 12.9385 11.6229 12.9385 10C12.9385 8.3771 11.6229 7.06152 10 7.06152Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.99805 1.32715C14.7879 1.32715 18.6709 5.21014 18.6709 10C18.6709 14.7899 14.7879 18.6729 9.99805 18.6729C5.20819 18.6729 1.3252 14.7899 1.3252 10C1.3252 5.21014 5.20819 1.32715 9.99805 1.32715ZM9.99805 2.65723C5.94272 2.65723 2.65527 5.94468 2.65527 10C2.65527 14.0553 5.94272 17.3428 9.99805 17.3428C14.0534 17.3428 17.3408 14.0553 17.3408 10C17.3408 5.94468 14.0534 2.65723 9.99805 2.65723Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      K = (0, Y.a)({
        name: "shield-lock-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 2.674072, y: 1.214844, width: 14.651367, height: 17.570313 },
          visualBounds: { x: 2.674072, y: 1.214844, width: 14.651367, height: 17.570313 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.674072, y: 1.214844, width: 14.651367, height: 17.570313 },
          center: { x: 9.999756, y: 10 },
          insets: { top: 1.214844, right: 2.674561, bottom: 1.214843, left: 2.674072 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.999756, y: 10 }, foreground: { x: 9.999756, y: 10 } },
        },
        capabilities: ["icon"],
        body: '<path d="M10.0002 5.33981C11.4676 5.33998 12.6575 6.52965 12.6575 7.99703V8.18356C13.3575 8.46319 13.8528 9.14652 13.8528 9.94625V12.2607C13.8527 13.3089 13.0026 14.1589 11.9543 14.1591H8.04614C6.99775 14.1591 6.14776 13.3091 6.14771 12.2607V9.94625C6.14771 9.14632 6.64277 8.46306 7.34302 8.18356V7.99703C7.34302 6.52955 8.53276 5.33981 10.0002 5.33981ZM8.04614 9.37789C7.73226 9.37789 7.47778 9.63237 7.47778 9.94625V12.2607C7.47784 12.5745 7.73229 12.8291 8.04614 12.8291H11.9543C12.268 12.8289 12.5227 12.5744 12.5227 12.2607V9.94625C12.5227 9.6325 12.268 9.37811 11.9543 9.37789H8.04614ZM10.0002 6.66989C9.2673 6.66989 8.6731 7.26409 8.6731 7.99703V8.04782H11.3274V7.99703C11.3274 7.26419 10.733 6.67005 10.0002 6.66989Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.06763 1.41012C9.66316 1.14981 10.3403 1.14969 10.9358 1.41012L15.929 3.59469C16.7774 3.96598 17.3253 4.80429 17.3254 5.73043V10.4775C17.3254 12.7322 16.5319 14.4925 15.2581 15.8418C13.9991 17.1751 12.2983 18.08 10.5081 18.7041L10.5022 18.706C10.1759 18.8165 9.82115 18.8116 9.49829 18.6914C7.70932 18.0718 6.0089 17.1709 4.74927 15.8427C3.47102 14.4949 2.67411 12.7345 2.67407 10.4775V5.73141C2.67407 4.80491 3.22266 3.96592 4.07153 3.59469L9.06763 1.41012ZM10.4026 2.62887C10.1468 2.51704 9.85567 2.517 9.59985 2.62887L4.60474 4.81344C4.24006 4.97291 4.00415 5.33339 4.00415 5.73141V10.4775C4.00418 12.387 4.66539 13.8219 5.71411 14.9277C6.77781 16.0492 8.26737 16.8592 9.94751 17.4394L9.96313 17.4453C9.99927 17.4586 10.0389 17.4586 10.0754 17.4463C11.7494 16.8622 13.2322 16.0504 14.2913 14.9287C15.3366 13.8214 15.9953 12.386 15.9954 10.4775V5.73043C15.9952 5.3327 15.7601 4.97294 15.3958 4.81344L10.4026 2.62887Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var $ = a("on57"),
      Q = a("Qgfj"),
      X = a("Wf1j"),
      J = a("MM0V"),
      ee = a("IG5V"),
      et = a("ibLK")
    function ea(e, t) {
      return e + Math.random() * (t - e)
    }
    function en(e, t, a) {
      return Math.min(Math.max(e, t), a)
    }
    var er = "handle-f67LtL",
      es = "label-XuVSU2"
    let eo = -(3 * Math.PI) / 4,
      el = -Math.PI / 4
    function ei(e) {
      let t = en((e.labelAngle - eo) / (el - eo), 0, 1),
        a = t * t * (3 - 2 * t),
        n = 22.5 + (6.6 - e.labelWidth - 22.5) * a,
        r = 19.5 + a + 10 * Math.sin(Math.PI * t) ** 2
      ;((e.label.style.transform = `translate(${n}px, ${r}px)`),
        e.pointer.style.setProperty("--angle", `${e.angle + Math.PI / 2}rad`))
    }
    function ec({ handle: e, home: t, position: a }) {
      e.style.transform = `translate3d(${a.x - t.x}px, ${a.y - t.y}px, 0)`
    }
    var eu = (e) =>
      (0, n.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 30.1669 30.6539",
        fill: "currentColor",
        ...e,
        children: (0, n.jsx)("path", {
          stroke: "white",
          strokeWidth: 2.8,
          strokeLinejoin: "round",
          paintOrder: "stroke",
          d: "M12.9062 4.85638C13.2746 4.092 13.4588 3.70981 13.6402 3.5084C14.4072 2.65663 15.7597 2.65663 16.5267 3.5084C16.7081 3.70981 16.8923 4.092 17.2607 4.85637L23.5985 18.0063C24.1142 19.0762 24.3721 19.6112 24.4109 19.9096C24.5778 21.1902 23.4208 22.256 22.1313 22.0096C21.8308 21.9521 21.3043 21.6647 20.2513 21.0897L16.2534 18.9069C16.0261 18.7828 15.9125 18.7207 15.7989 18.6761C15.3396 18.4956 14.8273 18.4956 14.368 18.6761C14.2544 18.7207 14.1407 18.7828 13.9134 18.9069L9.91558 21.0897C8.86258 21.6647 8.33607 21.9521 8.03558 22.0096C6.74612 22.256 5.58913 21.1902 5.75595 19.9096C5.79483 19.6112 6.05267 19.0762 6.56834 18.0063L12.9062 4.85638Z",
        }),
      })
    function ed(e) {
      return (
        document.addEventListener("visibilitychange", e),
        () => document.removeEventListener("visibilitychange", e)
      )
    }
    function eh() {
      return !document.hidden
    }
    function ep(e) {
      let t,
        a,
        s,
        l,
        i,
        c,
        u,
        d,
        h = (0, r.c)(29),
        { accountId: p, userId: m } = e,
        f = (0, X.A)(),
        x = (0, et.U)("(min-width: 48rem)"),
        g = (0, M.useSyncExternalStore)(ed, eh, ef)
      h[0] !== p || h[1] !== m
        ? ((t = ["workspace-recovery", "member-names", m, p]), (h[0] = p), (h[1] = m), (h[2] = t))
        : (t = h[2])
      let w = x && g && null != m && null != p
      ;(h[3] !== p
        ? ((a = (e) => {
            let { signal: t } = e
            if (null == p) throw Error("Missing recovery workspace")
            return y.Request.safeGet("/accounts/{account_id}/reactivation/member_names", {
              parameters: { path: { account_id: p } },
              additionalHeaders: { "ChatGPT-Account-ID": p, [o.zBc]: p },
              signal: t,
            })
          }),
          (h[3] = p),
          (h[4] = a))
        : (a = h[4]),
        h[5] !== t || h[6] !== w || h[7] !== a
          ? ((s = { queryKey: t, enabled: w, queryFn: a, staleTime: 1 / 0, gcTime: 6e4, retry: !1 }),
            (h[5] = t),
            (h[6] = w),
            (h[7] = a),
            (h[8] = s))
          : (s = h[8]))
      let { data: v } = (0, b.I)(s),
        _ = (0, M.useRef)(null),
        k = (0, et.U)("(prefers-reduced-motion: reduce)")
      if (
        (h[9] !== v?.length || h[10] !== k || h[11] !== g || h[12] !== x
          ? ((l = () => {
              if (_.current && v?.length && x && g && !k)
                return (function (e) {
                  let t = []
                  for (let [a, n] of e.querySelectorAll(`.${er}`).entries()) {
                    let e = n.querySelector(`.${es}`),
                      r = n.querySelector("svg")
                    if (!e || !r) continue
                    let s = 0 === a ? el : eo
                    t.push({
                      handle: n,
                      label: e,
                      pointer: r,
                      angle: s,
                      targetAngle: s,
                      labelAngle: s,
                      heading: s,
                      angularVelocity: 0,
                      labelVelocity: 0,
                      home: { x: 0, y: 0 },
                      position: { x: 0, y: 0 },
                      bounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 },
                      labelWidth: 0,
                      segments: [],
                      paceScale: ea(0.9, 1.1),
                      restScale: ea(0.85, 1.25),
                      waitUntil: 0,
                    })
                  }
                  let a = window.matchMedia("(hover: hover) and (pointer: fine)"),
                    n = { width: 0, height: 0 },
                    r = e.matches(":hover"),
                    s = !1,
                    o = 0,
                    l = 0,
                    i = 0
                  function c() {
                    ;(window.cancelAnimationFrame(o), window.clearTimeout(l), (o = l = i = 0))
                  }
                  function u(e) {
                    if (((o = 0), document.hidden)) return
                    let a = i ? en((e - i) / 1e3, 0.001, 0.05) : 1 / 60
                    i = e
                    let r = !1
                    for (let o of t)
                      (s &&
                        (function (e, t, a) {
                          if (!e.segments.length) {
                            if (a < e.waitUntil) return
                            e.segments = (function (e, t, a) {
                              let n = 2 + Math.floor(ea(0, 4)),
                                r = [e.position],
                                s = [],
                                o = e.heading,
                                l = ea(90, 180) * e.paceScale
                              for (let a = 0; a < n; a++) {
                                let i = r[a],
                                  c = a > 0 && a >= n - 2 && 0.42 > Math.random(),
                                  u = (function (e, { width: t, height: a }, n, r, s) {
                                    let { bounds: o, home: l } = e,
                                      i = Math.max(24, Math.min(0.3 * t, 0.24 * a, 190)),
                                      c = Math.min(12, (o.maxX - o.minX) / 4),
                                      u = Math.min(12, (o.maxY - o.minY) / 4),
                                      d = Math.hypot(n.x - l.x, n.y - l.y) > 0.32 * Math.min(t, a),
                                      h = n
                                    for (let e = 0; e < 10; e++) {
                                      let t,
                                        a = Math.random()
                                      t = s
                                        ? ea(6, 20)
                                        : a < 0.2
                                          ? ea(14, 34)
                                          : a < 0.72
                                            ? ea(35, Math.min(90, i))
                                            : ea(Math.min(85, i), i)
                                      let l = r + ea(-0.85, 0.85)
                                      if (
                                        ((e > 4 || (d && 0.55 > Math.random())) &&
                                          (l =
                                            Math.atan2((o.minY + o.maxY) / 2 - n.y, (o.minX + o.maxX) / 2 - n.x) +
                                            ea(-0.9, 0.9)),
                                        Math.hypot(
                                          (h = {
                                            x: en(n.x + Math.cos(l) * t, o.minX + c, o.maxX - c),
                                            y: en(n.y + Math.sin(l) * t, o.minY + u, o.maxY - u),
                                          }).x - n.x,
                                          h.y - n.y,
                                        ) > (s ? 4 : 10))
                                      )
                                        break
                                    }
                                    return h
                                  })(e, t, i, o, c),
                                  d = Math.hypot(u.x - i.x, u.y - i.y)
                                ;((o = Math.atan2(u.y - i.y, u.x - i.x)),
                                  (l = en(l * ea(0.82, 1.18), 75, 205)),
                                  s.push(en((d / (l * (c ? 0.55 : 1))) * 1e3, 170, 1280)),
                                  r.push(u))
                              }
                              let i = r.map((t, a) =>
                                  0 === a || a === n
                                    ? { x: 0, y: 0 }
                                    : (function (e, t, a, n, r, s) {
                                        let o = Math.max(0.001, Math.hypot(t.x - e.x, t.y - e.y)),
                                          l = Math.max(0.001, Math.hypot(a.x - t.x, a.y - t.y)),
                                          i = (t.x - e.x) / o,
                                          c = (t.y - e.y) / o,
                                          u = (a.x - t.x) / l,
                                          d = (a.y - t.y) / l,
                                          h = i + u,
                                          p = c + d,
                                          m = Math.hypot(h, p)
                                        m < 0.01 && ((h = -c), (p = i), (m = 1))
                                        let f = Math.sqrt(Math.max(0, (1 + i * u + c * d) / 2)),
                                          x = Math.min(o / n, l / r) * ea(0.85, 1.15) * Math.max(0.3, f),
                                          g = { x: (h / m) * x, y: (p / m) * x },
                                          y = 1
                                        for (let e of [-n / 3, r / 3])
                                          for (let [a, n, r] of [
                                            [g.x * e, s.minX - t.x, s.maxX - t.x],
                                            [g.y * e, s.minY - t.y, s.maxY - t.y],
                                          ])
                                            (a > 0 && (y = Math.min(y, r / a)), a < 0 && (y = Math.min(y, n / a)))
                                        return { x: g.x * y, y: g.y * y }
                                      })(r[a - 1], t, r[a + 1], s[a - 1], s[a], e.bounds),
                                ),
                                c = a
                              return s.map((e, t) => {
                                let a = r[t],
                                  n = r[t + 1],
                                  s = {
                                    from: a,
                                    to: n,
                                    start: c,
                                    duration: e,
                                    control1: { x: a.x + (i[t].x * e) / 3, y: a.y + (i[t].y * e) / 3 },
                                    control2: { x: n.x - (i[t + 1].x * e) / 3, y: n.y - (i[t + 1].y * e) / 3 },
                                  }
                                return ((c += e), s)
                              })
                            })(e, t, a)
                          }
                          for (; e.segments.length > 1 && a >= e.segments[1].start;) e.segments.shift()
                          let {
                            position: n,
                            tangent: r,
                            done: s,
                          } = (function (e, t) {
                            let { from: a, to: n, control1: r, control2: s } = e,
                              o = en((t - e.start) / e.duration, 0, 1),
                              l = 1 - o
                            return {
                              position: {
                                x: l ** 3 * a.x + 3 * l * l * o * r.x + 3 * l * o * o * s.x + o ** 3 * n.x,
                                y: l ** 3 * a.y + 3 * l * l * o * r.y + 3 * l * o * o * s.y + o ** 3 * n.y,
                              },
                              tangent: {
                                x: 3 * l * l * (r.x - a.x) + 6 * l * o * (s.x - r.x) + 3 * o * o * (n.x - s.x),
                                y: 3 * l * l * (r.y - a.y) + 6 * l * o * (s.y - r.y) + 3 * o * o * (n.y - s.y),
                              },
                              done: 1 === o,
                            }
                          })(e.segments[0], a)
                          e.position = n
                          let o = Math.hypot(r.x, r.y)
                          if (
                            (o > 0.01 &&
                              ((e.heading = Math.atan2(r.y, r.x)),
                              Math.abs(r.x / o) > 0.18 && (e.targetAngle = r.x > 0 ? el : eo)),
                            ec(e),
                            s)
                          ) {
                            e.segments = []
                            let t = Math.random()
                            e.waitUntil =
                              a + (t < 0.3 ? ea(180, 450) : t < 0.75 ? ea(650, 1800) : ea(3e3, 6500)) * e.restScale
                          }
                        })(o, n, e),
                        ((function (e, t) {
                          if (
                            e.angle === e.targetAngle &&
                            e.labelAngle === e.angle &&
                            0 === e.angularVelocity &&
                            0 === e.labelVelocity
                          )
                            return !1
                          let a = Math.ceil(t / 0.008),
                            n = t / a
                          for (let t = 0; t < a; t++) {
                            ;((e.angularVelocity += ((e.targetAngle - e.angle) * 440 - 42 * e.angularVelocity) * n),
                              (e.angularVelocity = en(e.angularVelocity, -9, 9)))
                            let t = e.angle + e.angularVelocity * n
                            ;((e.angle = en(t, eo, el)),
                              e.angle !== t && (e.angularVelocity = 0),
                              (e.labelVelocity += ((e.angle - e.labelAngle) * 550 - 46 * e.labelVelocity) * n),
                              (e.labelAngle += e.labelVelocity * n))
                          }
                          let r = Math.abs(e.targetAngle - e.angle) > 5e-4 || Math.abs(e.angularVelocity) > 0.002,
                            s = Math.abs(e.angle - e.labelAngle) > 5e-4 || Math.abs(e.labelVelocity) > 0.002
                          return (
                            !r &&
                              ((e.angle = e.targetAngle),
                              (e.angularVelocity = 0),
                              s || ((e.labelAngle = e.angle), (e.labelVelocity = 0))),
                            ei(e),
                            r || s
                          )
                        })(o, a) ||
                          o.segments.length) &&
                          (r = !0))
                    if (r) o = window.requestAnimationFrame(u)
                    else if (s) {
                      i = 0
                      let a = Math.min(...t.map((e) => e.waitUntil))
                      l = window.setTimeout(
                        () => {
                          o = window.requestAnimationFrame(u)
                        },
                        Math.max(1, a - e),
                      )
                    }
                  }
                  function d() {
                    let l =
                      n.width > 0 &&
                      n.height > 0 &&
                      t.length > 0 &&
                      !document.hidden &&
                      (e.matches(":focus-visible") || (a.matches && r))
                    if (l === s) return
                    ;(c(), (s = l))
                    let i = l ? Math.floor(Math.random() * t.length) : -1,
                      d = performance.now()
                    for (let [e, a] of t.entries())
                      if (((a.segments = []), l)) {
                        let t = e === i ? ea(120, 350) : ea(1200, 3800)
                        a.waitUntil = Math.max(a.waitUntil, d + t * a.restScale)
                      }
                    document.hidden || (o = window.requestAnimationFrame(u))
                  }
                  function h() {
                    let a = e.clientWidth,
                      r = e.clientHeight,
                      o = a !== n.width || r !== n.height
                    if (!a || !r) {
                      ;((n = { width: a, height: r }), d())
                      return
                    }
                    for (let e of (o && (c(), (s = !1)), t)) {
                      let t = getComputedStyle(e.handle),
                        s = { x: parseFloat(t.left), y: parseFloat(t.top) },
                        { width: l, height: i } = e.label.getBoundingClientRect(),
                        c = 8 - Math.min(-2, 6.6 - l - 8),
                        u = Math.max(c, a - 8 - Math.max(29, 22.5 + l + 8)),
                        d = Math.max(10, r - 8 - Math.max(29, 20.5 + i + 10)),
                        h = n.width ? (e.position.x * a) / n.width : s.x,
                        p = n.height ? (e.position.y * r) / n.height : s.y
                      ;((e.position = { x: en(h, c, u), y: en(p, 10, d) }),
                        (o || l > e.labelWidth) && (e.segments = []),
                        (e.bounds = { minX: c, maxX: u, minY: 10, maxY: d }),
                        (e.labelWidth = l),
                        (e.home = s),
                        ec(e),
                        ei(e))
                    }
                    ;((n = { width: a, height: r }), d())
                  }
                  let p = new ResizeObserver(h)
                  for (let a of (p.observe(e), t)) p.observe(a.label)
                  function m(e) {
                    ;((r = "touch" !== e.pointerType), d())
                  }
                  function f() {
                    ;((r = !1), d())
                  }
                  ;(e.addEventListener("pointerenter", m), e.addEventListener("pointerleave", f))
                  let x = ["focus", "blur", "pointerdown", "keydown"]
                  for (let t of x) e.addEventListener(t, d)
                  return (
                    a.addEventListener("change", d),
                    h(),
                    () => {
                      for (let t of (c(),
                      p.disconnect(),
                      e.removeEventListener("pointerenter", m),
                      e.removeEventListener("pointerleave", f),
                      a.removeEventListener("change", d),
                      x))
                        e.removeEventListener(t, d)
                      for (let { handle: e, pointer: a, label: n } of t)
                        (e.style.removeProperty("transform"),
                          a.style.removeProperty("--angle"),
                          n.style.removeProperty("transform"))
                    }
                  )
                })(_.current)
            }),
            (h[9] = v?.length),
            (h[10] = k),
            (h[11] = g),
            (h[12] = x),
            (h[13] = l))
          : (l = h[13]),
        h[14] !== v || h[15] !== k || h[16] !== g || h[17] !== x
          ? ((i = [x, g, v, k]), (h[14] = v), (h[15] = k), (h[16] = g), (h[17] = x), (h[18] = i))
          : (i = h[18]),
        (0, M.useEffect)(l, i),
        !x)
      )
        return null
      let C = v?.length ? 0 : void 0
      return (
        h[19] !== v || h[20] !== f
          ? ((c = v?.length
              ? f.formatMessage(
                  {
                    id: "workspaceRecovery.deactivated.teamPhotoWithNames",
                    defaultMessage: "A team working together around a table, with cursors for {names}",
                  },
                  { names: f.formatList(v) },
                )
              : f.formatMessage({
                  id: "workspaceRecovery.deactivated.teamPhoto",
                  defaultMessage: "A team working together around a table",
                })),
            (h[19] = v),
            (h[20] = f),
            (h[21] = c))
          : (c = h[21]),
        h[22] !== v || h[23] !== g
          ? ((u = g && v?.slice(0, 3).map(em)), (h[22] = v), (h[23] = g), (h[24] = u))
          : (u = h[24]),
        h[25] !== C || h[26] !== c || h[27] !== u
          ? ((d = (0, n.jsx)("div", {
              ref: _,
              className: "canvas-ZNr9nq",
              role: "img",
              tabIndex: C,
              "aria-label": c,
              children: u,
            })),
            (h[25] = C),
            (h[26] = c),
            (h[27] = u),
            (h[28] = d))
          : (d = h[28]),
        d
      )
    }
    function em(e, t) {
      return (0, n.jsxs)(
        "div",
        {
          "aria-hidden": "true",
          className: er,
          children: [
            (0, n.jsx)(eu, { className: "pointer-NuxuE9" }),
            (0, n.jsx)("bdi", { className: es, children: e }),
          ],
        },
        t,
      )
    }
    function ef() {
      return !1
    }
    var ex = a("vvrk"),
      eg = a("ZEx5"),
      ey = a("s9Qj")
    function ew(e) {
      let t,
        a,
        s,
        o,
        l,
        i,
        c,
        u,
        d,
        h,
        p = (0, r.c)(71),
        {
          selectableWorkspaces: m,
          workspaces: f,
          authenticationWorkspace: x,
          userLabel: g,
          pending: y,
          error: w,
          onBack: v,
          onAuthenticate: _,
          onChooseWorkspace: k,
          onSelectWorkspace: b,
        } = e,
        C = (0, X.A)(),
        j = null != v || m.length > 0,
        M = "authenticate" === w
      p[0] !== k || p[1] !== y || p[2] !== j
        ? ((t =
            null == k
              ? null
              : (0, n.jsx)(q.$, {
                  color: j ? "outlineGhost" : "primary",
                  disabled: null != y,
                  loading: "choose-workspace" === y,
                  radius: "full",
                  size: "dialog",
                  type: "button",
                  onClick: k,
                  children: (0, n.jsx)(A.A, { id: "workspaceRecovery.logOut", defaultMessage: "Log out" }),
                })),
          (p[0] = k),
          (p[1] = y),
          (p[2] = j),
          (p[3] = t))
        : (t = p[3])
      let I = t
      p[4] !== w || p[5] !== M
        ? ((a =
            null == w || M
              ? null
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    "switch-workspace" === w &&
                      (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.switchError",
                        defaultMessage: "We couldn\u2019t switch workspaces. Please try again.",
                      }),
                    "other" === w &&
                      (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.error",
                        defaultMessage: "We couldn\u2019t complete that request",
                      }),
                  ],
                })),
          (p[4] = w),
          (p[5] = M),
          (p[6] = a))
        : (a = p[6])
      let S = a
      if (j) {
        let e, t, a, r, s, o, l, i, c, u, d
        p[7] === Symbol.for("react.memo_cache_sentinel") ? ((e = { onEscapeKeyDown: ev }), (p[7] = e)) : (e = p[7])
        let h = null != y
        if (
          (p[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(W.L3, {
                children: (0, n.jsx)(A.A, {
                  id: "workspaceRecovery.launchWorkspace",
                  defaultMessage: "Launch a workspace",
                }),
              })),
              (p[8] = t))
            : (t = p[8]),
          p[9] !== g || p[10] !== f.length
            ? ((a = (0, n.jsx)(W.rr, {
                children:
                  null != g
                    ? (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.workspaceCount",
                        defaultMessage: "{email} has access to {count, plural, one {# workspace} other {# workspaces}}",
                        values: { email: g, count: f.length },
                      })
                    : (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.selectWorkspace",
                        defaultMessage: "Select a workspace to continue",
                      }),
              })),
              (p[9] = g),
              (p[10] = f.length),
              (p[11] = a))
            : (a = p[11]),
          p[12] !== S
            ? ((r =
                null != S &&
                (0, n.jsx)("div", {
                  className: "w-full",
                  children: (0, n.jsx)(J.l, { variant: "errorNotice", content: S }),
                })),
              (p[12] = S),
              (p[13] = r))
            : (r = p[13]),
          p[14] !== C || p[15] !== b || p[16] !== y || p[17] !== m || p[18] !== f)
        ) {
          let e
          ;(p[20] !== C || p[21] !== b || p[22] !== y || p[23] !== m
            ? ((e = (e) => {
                let t = m.some((t) => t.account.account_id === e.account.account_id)
                return (0, n.jsx)(
                  ey._,
                  {
                    name:
                      e.account.name ||
                      C.formatMessage({
                        id: "workspaceRecovery.unnamedWorkspace",
                        defaultMessage: "Unnamed workspace",
                      }),
                    imageUrl: e.account.profile_picture_url ?? null,
                    personal: "personal" === e.account.structure,
                    description: t
                      ? null
                      : (0, n.jsx)(A.A, {
                          id: "workspaceRecovery.pickerUnavailable",
                          defaultMessage: "Unavailable with this sign-in",
                        }),
                    action: (0, n.jsx)(q.$, {
                      color: "outlineGhost",
                      disabled: !t || null != y,
                      loading: y === e.account.account_id,
                      radius: "full",
                      size: "dialog",
                      type: "button",
                      onClick: () => b(e),
                      children: (0, n.jsx)(A.A, { id: "workspaceRecovery.openWorkspace", defaultMessage: "Open" }),
                    }),
                  },
                  e.account.account_id,
                )
              }),
              (p[20] = C),
              (p[21] = b),
              (p[22] = y),
              (p[23] = m),
              (p[24] = e))
            : (e = p[24]),
            (s = f.map(e)),
            (p[14] = C),
            (p[15] = b),
            (p[16] = y),
            (p[17] = m),
            (p[18] = f),
            (p[19] = s))
        } else s = p[19]
        return (
          p[25] !== s
            ? ((o = (0, n.jsx)("div", {
                className: "w-full",
                role: "list",
                children: (0, n.jsx)(eg.t, { children: s }),
              })),
              (p[25] = s),
              (p[26] = o))
            : (o = p[26]),
          p[27] !== a || p[28] !== r || p[29] !== o
            ? ((l = (0, n.jsxs)(ex.ST, { title: t, subtitle: a, children: [r, o] })),
              (p[27] = a),
              (p[28] = r),
              (p[29] = o),
              (p[30] = l))
            : (l = p[30]),
          p[31] !== v || p[32] !== y
            ? ((i =
                null != v &&
                (0, n.jsx)(q.$, {
                  color: "outlineGhost",
                  disabled: null != y,
                  radius: "full",
                  size: "dialog",
                  onClick: v,
                  children: (0, n.jsx)(A.A, { id: "workspaceRecovery.deactivated.pickerBack", defaultMessage: "Back" }),
                })),
              (p[31] = v),
              (p[32] = y),
              (p[33] = i))
            : (i = p[33]),
          p[34] !== I || p[35] !== i
            ? ((c = (0, n.jsxs)("div", { className: "flex justify-center gap-2", children: [i, I] })),
              (p[34] = I),
              (p[35] = i),
              (p[36] = c))
            : (c = p[36]),
          p[37] !== l || p[38] !== c
            ? ((u = (0, n.jsx)("div", {
                className: "flex w-full flex-col items-center gap-6 px-6 py-10 md:px-12 md:py-20",
                children: (0, n.jsxs)("div", { className: "flex w-full max-w-md flex-col gap-6", children: [l, c] }),
              })),
              (p[37] = l),
              (p[38] = c),
              (p[39] = u))
            : (u = p[39]),
          p[40] !== u || p[41] !== h
            ? ((d = (0, n.jsx)(W.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: "h-full w-full bg-surface text-default",
                contentProps: e,
                children: (0, n.jsx)("div", {
                  className: "flex h-full flex-col overflow-y-auto select-none",
                  ref: O.sW,
                  "aria-busy": h,
                  children: u,
                }),
              })),
              (p[40] = u),
              (p[41] = h),
              (p[42] = d))
            : (d = p[42]),
          d
        )
      }
      let R = M ? "compact" : "xxwide",
        L = null != y
      return (
        p[43] !== _ || p[44] !== y
          ? ((s = (e) => {
              ;(e.preventDefault(), null == y && _?.())
            }),
            (p[43] = _),
            (p[44] = y),
            (p[45] = s))
          : (s = p[45]),
        p[46] !== x?.sso_connection_name || p[47] !== _ || p[48] !== M
          ? ((o = M
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(W.L3, {
                      className: "text-lg font-normal",
                      children: (0, n.jsx)(A.A, { id: "workspaceRecovery.signInErrorTitle", defaultMessage: "Oops!" }),
                    }),
                    (0, n.jsx)(W.rr, {
                      role: "alert",
                      children: (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.signInError",
                        defaultMessage: "We couldn\u2019t sign you in. Please try again.",
                      }),
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(W.L3, {
                      className: "flex items-center gap-2 text-lg font-normal",
                      children: [
                        (0, n.jsx)(U.esp, {}),
                        (0, n.jsx)(A.A, {
                          id: "workspaceRecovery.authenticationTitle",
                          defaultMessage: "No Accessible Workspaces",
                        }),
                      ],
                    }),
                    (0, n.jsx)(W.rr, {
                      children: (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.authenticationRequired",
                        defaultMessage:
                          "It looks like you're currently unable to access any of your accounts. Try waiting a minute and logging in again.",
                      }),
                    }),
                    null != _
                      ? (0, n.jsx)("p", {
                          children: x?.sso_connection_name
                            ? (0, n.jsx)(A.A, {
                                id: "workspaceRecovery.ssoSuggestion",
                                defaultMessage: "Logging in with SSO may fix these issues",
                              })
                            : (0, n.jsx)(A.A, {
                                id: "workspaceRecovery.noSsoSuggestion",
                                defaultMessage: "Logging in without SSO may fix these issues",
                              }),
                        })
                      : null,
                  ],
                })),
            (p[46] = x?.sso_connection_name),
            (p[47] = _),
            (p[48] = M),
            (p[49] = o))
          : (o = p[49]),
        p[50] !== S
          ? ((l = null != S && (0, n.jsx)("p", { className: "text-sm text-secondary", role: "alert", children: S })),
            (p[50] = S),
            (p[51] = l))
          : (l = p[51]),
        p[52] !== o || p[53] !== l
          ? ((i = (0, n.jsxs)("div", { className: "flex flex-col gap-6", children: [o, l] })),
            (p[52] = o),
            (p[53] = l),
            (p[54] = i))
          : (i = p[54]),
        p[55] !== x?.sso_connection_name || p[56] !== _ || p[57] !== y || p[58] !== M
          ? ((c =
              null != _
                ? (0, n.jsx)(q.$, {
                    color: "primary",
                    disabled: null != y,
                    loading: "authenticate" === y,
                    radius: "full",
                    size: "dialog",
                    type: "submit",
                    children: M
                      ? (0, n.jsx)(A.A, { id: "workspaceRecovery.retrySignIn", defaultMessage: "Try again" })
                      : (0, n.jsx)(n.Fragment, {
                          children: x?.sso_connection_name
                            ? (0, n.jsx)(A.A, {
                                id: "workspaceRecovery.logInWithSso",
                                defaultMessage: "Log in with SSO",
                              })
                            : (0, n.jsx)(A.A, { id: "workspaceRecovery.logIn", defaultMessage: "Log in" }),
                        }),
                  })
                : null),
            (p[55] = x?.sso_connection_name),
            (p[56] = _),
            (p[57] = y),
            (p[58] = M),
            (p[59] = c))
          : (c = p[59]),
        p[60] !== I || p[61] !== c
          ? ((u = (0, n.jsxs)(H.Es, { expandSingleButton: !1, children: [c, I] })),
            (p[60] = I),
            (p[61] = c),
            (p[62] = u))
          : (u = p[62]),
        p[63] !== u || p[64] !== L || p[65] !== s || p[66] !== i
          ? ((d = (0, n.jsxs)(H.R4, {
              as: "form",
              className: "select-none",
              size: "viewport",
              ref: O.sW,
              "aria-busy": L,
              onSubmit: s,
              children: [i, u],
            })),
            (p[63] = u),
            (p[64] = L),
            (p[65] = s),
            (p[66] = i),
            (p[67] = d))
          : (d = p[67]),
        p[68] !== d || p[69] !== R
          ? ((h = (0, n.jsx)(W.lG, {
              open: !0,
              showDialogClose: !1,
              shouldIgnoreClickOutside: !0,
              size: R,
              variant: "chatgpt",
              children: d,
            })),
            (p[68] = d),
            (p[69] = R),
            (p[70] = h))
          : (h = p[70]),
        h
      )
    }
    function ev(e) {
      return e.preventDefault()
    }
    let e_ = (0, Q.YK)({
      member: {
        id: "workspaceRecovery.deactivated.memberHeading",
        defaultMessage: "Ask your workspace owner to bring your team back to ChatGPT",
      },
      owner: { id: "workspaceRecovery.deactivated.bringTeamBack", defaultMessage: "Bring your team back to ChatGPT" },
      deactivated: { id: "workspaceRecovery.title", defaultMessage: "Your workspace has been deactivated" },
    })
    function ek(e) {
      let t,
        a,
        s,
        o,
        l,
        i,
        c,
        u,
        d,
        h,
        p,
        m,
        f,
        x,
        g,
        y,
        w,
        k,
        b,
        C,
        j,
        I,
        S,
        R,
        L,
        N,
        E,
        T,
        P,
        V,
        H,
        D,
        B,
        U,
        z,
        G,
        O,
        Z,
        Y,
        F,
        K,
        Q,
        et,
        ea,
        en = (0, r.c)(133),
        {
          activeWorkspaces: er,
          error: es,
          onChooseWorkspace: eo,
          recoveryWorkspaces: el,
          onPersonal: ei,
          onRecover: ec,
          onSelectWorkspace: eu,
          pending: ed,
          workspace: eh,
        } = e,
        em = (0, X.A)(),
        ef = (0, M.useRef)(null),
        [ex, eg] = (0, M.useState)(!1)
      en[0] !== eh ? ((t = _(eh)), (en[0] = eh), (en[1] = t)) : (t = en[1])
      let ey = null != t
      en[2] !== er ? ((a = er.find(eC)), (en[2] = er), (en[3] = a)) : (a = en[3])
      let ev = a,
        ek = eh?.account.account_user_role
      if (
        en[4] !== er ||
        en[5] !== ey ||
        en[6] !== em ||
        en[7] !== eo ||
        en[8] !== e ||
        en[9] !== el ||
        en[10] !== ek ||
        en[11] !== ex ||
        en[12] !== eh
      ) {
        j = Symbol.for("react.early_return_sentinel")
        e: {
          let t, a, r, _, M
          ;((i =
            eh?.account.eligible_for_reactivation === !0 &&
            (0, v.Hw)(eh.account.plan_type) &&
            null != ek &&
            "account-owner" !== ek),
            (u = ey ? e_.owner : e_.deactivated),
            (l = (d = ey || i) ? "dialog" : "formAction"),
            en[39] !== er || en[40] !== el
              ? ((t = [...er, ...el]), (en[39] = er), (en[40] = el), (en[41] = t))
              : (t = en[41]),
            en[42] !== t || en[43] !== eh
              ? ((a = t.filter((e) => e.account.account_id !== eh?.account.account_id)),
                (en[42] = t),
                (en[43] = eh),
                (en[44] = a))
              : (a = en[44]))
          let P = a
          if (
            (en[45] !== eo || en[46] !== P.length
              ? ((r = P.length > 0 ? () => eg(!0) : eo), (en[45] = eo), (en[46] = P.length), (en[47] = r))
              : (r = en[47]),
            (c = r),
            ex && P.length > 0)
          ) {
            let t, a
            ;(en[48] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => eg(!1)), (en[48] = t)) : (t = en[48]),
              en[49] !== e || en[50] !== P
                ? ((a = (0, n.jsx)(ew, { ...e, selectableWorkspaces: P, onBack: t })),
                  (en[49] = e),
                  (en[50] = P),
                  (en[51] = a))
                : (a = en[51]),
              (j = a))
            break e
          }
          ;((o = W.lG),
            (f = !0),
            (x = !1),
            (g = !0),
            (y = !0),
            (w = !0),
            (k = "recoverySurface-KEtIJ3"),
            en[52] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = {
                  onEscapeKeyDown: eb,
                  onOpenAutoFocus: (e) => {
                    ;(e.preventDefault(), ef.current?.focus())
                  },
                }),
                (en[52] = b))
              : (b = en[52]),
            (p = (0, $.A)("grid h-full overflow-y-auto", d && "md:grid-cols-2")),
            (m = "modal-deactivated-workspace"),
            (T =
              "relative flex min-w-0 flex-col px-6 py-[max(64px,calc(56px+env(safe-area-inset-top)),calc(24px+env(safe-area-inset-bottom)))] max-[374px]:px-5 md:px-8 md:py-24"),
            en[53] !== em
              ? ((_ = em.formatMessage({ id: "workspaceRecovery.deactivated.wordmark", defaultMessage: "ChatGPT" })),
                (en[53] = em),
                (en[54] = _))
              : (_ = en[54]),
            en[55] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = (0, $.A)("wordmark-gdGmJk", "absolute start-6 h-[14px] w-20 max-[374px]:start-5")), (en[55] = M))
              : (M = en[55]),
            en[56] !== _
              ? ((h = (0, n.jsx)(ee.A, { "aria-label": _, className: M })), (en[56] = _), (en[57] = h))
              : (h = en[57]))
          let V = i ? "mt-8 mb-auto md:my-auto" : "my-auto"
          ;(en[58] !== V
            ? ((E = (0, $.A)("mx-auto flex w-full max-w-[402px] flex-col gap-6 md:max-w-[450px]", V)),
              (en[58] = V),
              (en[59] = E))
            : (E = en[59]),
            (L = "flex flex-col gap-2"),
            (N = d
              ? (0, n.jsx)(W.rr, {
                  className: "text-[16px] leading-[26px] tracking-[-0.32px] wrap-break-word text-tertiary",
                  children: eh?.account.name
                    ? (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.deactivated.namedStatus",
                        defaultMessage: "Your {workspaceName} workspace is deactivated",
                        values: { workspaceName: eh.account.name },
                      })
                    : (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.deactivated.status",
                        defaultMessage: "Your workspace is deactivated",
                      }),
                })
              : (0, n.jsx)(W.rr, {
                  className: "sr-only",
                  children: (0, n.jsx)(A.A, {
                    id: "workspaceRecovery.description",
                    defaultMessage: "Choose how to continue after this workspace was deactivated",
                  }),
                })),
            (s = W.L3),
            (R = !0),
            (C = ef),
            (I = -1),
            (S = (0, $.A)(
              "text-[28px] leading-[34px] font-normal tracking-[0.39px] wrap-break-word outline-none",
              i && "memberHeading-SaOrrB",
              !d && "text-center",
            )))
        }
        ;((en[4] = er),
          (en[5] = ey),
          (en[6] = em),
          (en[7] = eo),
          (en[8] = e),
          (en[9] = el),
          (en[10] = ek),
          (en[11] = ex),
          (en[12] = eh),
          (en[13] = s),
          (en[14] = o),
          (en[15] = l),
          (en[16] = i),
          (en[17] = c),
          (en[18] = u),
          (en[19] = d),
          (en[20] = h),
          (en[21] = p),
          (en[22] = m),
          (en[23] = f),
          (en[24] = x),
          (en[25] = g),
          (en[26] = y),
          (en[27] = w),
          (en[28] = k),
          (en[29] = b),
          (en[30] = C),
          (en[31] = j),
          (en[32] = I),
          (en[33] = S),
          (en[34] = R),
          (en[35] = L),
          (en[36] = N),
          (en[37] = E),
          (en[38] = T))
      } else
        ((s = en[13]),
          (o = en[14]),
          (l = en[15]),
          (i = en[16]),
          (c = en[17]),
          (u = en[18]),
          (d = en[19]),
          (h = en[20]),
          (p = en[21]),
          (m = en[22]),
          (f = en[23]),
          (x = en[24]),
          (g = en[25]),
          (y = en[26]),
          (w = en[27]),
          (k = en[28]),
          (b = en[29]),
          (C = en[30]),
          (j = en[31]),
          (I = en[32]),
          (S = en[33]),
          (R = en[34]),
          (L = en[35]),
          (N = en[36]),
          (E = en[37]),
          (T = en[38]))
      if (j !== Symbol.for("react.early_return_sentinel")) return j
      ;(en[60] !== i || en[61] !== u || en[62] !== d || en[63] !== eh
        ? ((P =
            !d && eh?.account.name
              ? (0, n.jsx)(A.A, {
                  id: "workspaceRecovery.deactivated.namedHeading",
                  defaultMessage: "Your {workspaceName} workspace has been deactivated",
                  values: { workspaceName: eh.account.name },
                })
              : (0, n.jsx)(A.A, { ...(i ? e_.member : u) })),
          (en[60] = i),
          (en[61] = u),
          (en[62] = d),
          (en[63] = eh),
          (en[64] = P))
        : (P = en[64]),
        en[65] !== C || en[66] !== P || en[67] !== I || en[68] !== S
          ? ((V = (0, n.jsx)("h1", { ref: C, tabIndex: I, className: S, children: P })),
            (en[65] = C),
            (en[66] = P),
            (en[67] = I),
            (en[68] = S),
            (en[69] = V))
          : (V = en[69]),
        en[70] !== s || en[71] !== V || en[72] !== R
          ? ((H = (0, n.jsx)(s, { asChild: R, children: V })), (en[70] = s), (en[71] = V), (en[72] = R), (en[73] = H))
          : (H = en[73]),
        en[74] !== H || en[75] !== L || en[76] !== N
          ? ((D = (0, n.jsxs)("div", { className: L, children: [N, H] })),
            (en[74] = H),
            (en[75] = L),
            (en[76] = N),
            (en[77] = D))
          : (D = en[77]),
        en[78] !== d ? ((B = d && (0, n.jsx)(eM, {})), (en[78] = d), (en[79] = B)) : (B = en[79]))
      let ej = !d && "items-center"
      en[80] !== ej ? ((U = (0, $.A)("flex w-full flex-col gap-3", ej)), (en[80] = ej), (en[81] = U)) : (U = en[81])
      let eA = e.loading || null != ed
      return (
        en[82] !== es
          ? ((z =
              null != es &&
              (0, n.jsx)(J.l, {
                variant: "errorNotice",
                content: (0, n.jsx)(A.A, {
                  id: "workspaceRecovery.error",
                  defaultMessage: "We couldn\u2019t complete that request",
                }),
              })),
            (en[82] = es),
            (en[83] = z))
          : (z = en[83]),
        en[84] !== ey || en[85] !== ec || en[86] !== ed
          ? ((G =
              ey &&
              (0, n.jsx)(q.$, {
                color: "primary",
                disabled: null != ed,
                loading: "recover" === ed,
                className: "min-h-[42px] max-w-full justify-center text-[14px] leading-5 tracking-[-0.15px]",
                radius: "full",
                size: "dialog",
                onClick: ec,
                children: (0, n.jsx)(A.A, {
                  id: "workspaceRecovery.deactivated.reactivate",
                  defaultMessage: "Reactivate your workspace",
                }),
              })),
            (en[84] = ey),
            (en[85] = ec),
            (en[86] = ed),
            (en[87] = G))
          : (G = en[87]),
        en[88] !== l || en[89] !== ei || en[90] !== eu || en[91] !== ed || en[92] !== ev
          ? ((O =
              (null != ev || null != ei) &&
              (0, n.jsx)(q.$, {
                color: "outlineGhost",
                disabled: null != ed,
                loading: "personal" === ed || (null != ev && ed === ev.account.account_id),
                className: "min-h-[42px] max-w-full justify-center text-[14px] leading-5 tracking-[-0.15px]",
                radius: "full",
                size: l,
                onClick: () => (ev ? eu(ev) : ei?.()),
                children:
                  null == ev
                    ? (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.createPersonal",
                        defaultMessage: "Create a personal workspace",
                      })
                    : (0, n.jsx)(A.A, {
                        id: "workspaceRecovery.deactivated.switchPersonal",
                        defaultMessage: "Switch to personal account",
                      }),
              })),
            (en[88] = l),
            (en[89] = ei),
            (en[90] = eu),
            (en[91] = ed),
            (en[92] = ev),
            (en[93] = O))
          : (O = en[93]),
        en[94] !== l || en[95] !== c || en[96] !== ed
          ? ((Z =
              null != c &&
              (0, n.jsx)(q.$, {
                color: "outlineGhost",
                disabled: null != ed,
                loading: "choose-workspace" === ed,
                className: "min-h-[42px] max-w-full justify-center text-[14px] leading-5 tracking-[-0.15px]",
                radius: "full",
                size: l,
                onClick: c,
                children: (0, n.jsx)(A.A, {
                  id: "workspaceRecovery.deactivated.anotherAccount",
                  defaultMessage: "Log in to another account",
                }),
              })),
            (en[94] = l),
            (en[95] = c),
            (en[96] = ed),
            (en[97] = Z))
          : (Z = en[97]),
        en[98] !== U || en[99] !== eA || en[100] !== z || en[101] !== G || en[102] !== O || en[103] !== Z
          ? ((Y = (0, n.jsxs)("div", { className: U, "aria-busy": eA, children: [z, G, O, Z] })),
            (en[98] = U),
            (en[99] = eA),
            (en[100] = z),
            (en[101] = G),
            (en[102] = O),
            (en[103] = Z),
            (en[104] = Y))
          : (Y = en[104]),
        en[105] !== D || en[106] !== B || en[107] !== Y || en[108] !== E
          ? ((F = (0, n.jsxs)("div", { className: E, children: [D, B, Y] })),
            (en[105] = D),
            (en[106] = B),
            (en[107] = Y),
            (en[108] = E),
            (en[109] = F))
          : (F = en[109]),
        en[110] !== h || en[111] !== F || en[112] !== T
          ? ((K = (0, n.jsxs)("div", { className: T, children: [h, F] })),
            (en[110] = h),
            (en[111] = F),
            (en[112] = T),
            (en[113] = K))
          : (K = en[113]),
        en[114] !== e.userId || en[115] !== d || en[116] !== eh
          ? ((Q =
              d &&
              (0, n.jsx)(ep, {
                userId: e.userId,
                accountId:
                  eh?.account.is_deactivated && !1 !== eh.can_access_with_session ? eh.account.account_id : null,
              })),
            (en[114] = e.userId),
            (en[115] = d),
            (en[116] = eh),
            (en[117] = Q))
          : (Q = en[117]),
        en[118] !== p || en[119] !== m || en[120] !== K || en[121] !== Q
          ? ((et = (0, n.jsxs)("div", { className: p, "data-testid": m, children: [K, Q] })),
            (en[118] = p),
            (en[119] = m),
            (en[120] = K),
            (en[121] = Q),
            (en[122] = et))
          : (et = en[122]),
        en[123] !== o ||
        en[124] !== f ||
        en[125] !== x ||
        en[126] !== g ||
        en[127] !== y ||
        en[128] !== w ||
        en[129] !== k ||
        en[130] !== b ||
        en[131] !== et
          ? ((ea = (0, n.jsx)(o, {
              open: f,
              showDialogClose: x,
              shouldIgnoreClickOutside: g,
              unstyledContent: y,
              viewportSized: w,
              contentClassName: k,
              contentProps: b,
              children: et,
            })),
            (en[123] = o),
            (en[124] = f),
            (en[125] = x),
            (en[126] = g),
            (en[127] = y),
            (en[128] = w),
            (en[129] = k),
            (en[130] = b),
            (en[131] = et),
            (en[132] = ea))
          : (ea = en[132]),
        ea
      )
    }
    function eb(e) {
      return e.preventDefault()
    }
    function eC(e) {
      return "personal" === e.account.structure
    }
    let ej = [
      {
        icon: (0, n.jsx)(B.I, { asset: Z.D }),
        message: (0, Q.zR)({
          id: "workspaceRecovery.deactivated.restoreWork",
          defaultMessage: "Restore past chats and continue building with Codex",
        }),
      },
      {
        icon: (0, n.jsx)(B.I, { asset: F }),
        message: (0, Q.zR)({
          id: "workspaceRecovery.deactivated.handOffToAgents",
          defaultMessage: "Hand off work to always-on agents for Premium seats",
        }),
      },
      {
        icon: (0, n.jsx)(
          (e) =>
            (0, n.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              ...e,
              children: (0, n.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M10.0173 1.41848C10.2718 1.41848 10.5305 1.45142 10.788 1.52039L16.3769 3.01844C17.705 3.37449 18.5805 4.57602 18.5805 5.88869C18.5805 6.14341 18.5475 6.40232 18.4785 6.66004L16.6552 13.4677C16.3138 14.7418 15.1951 15.596 13.9472 15.6649C13.7579 16.9022 12.7476 17.8975 11.4453 18.0116L5.12593 18.5643C5.04364 18.5715 4.96187 18.5751 4.88078 18.5751C3.4553 18.5751 2.24177 17.4848 2.11519 16.038L1.43941 8.31434C1.43223 8.23212 1.42871 8.15044 1.42871 8.06943C1.42871 6.64401 2.51913 5.43032 3.96578 5.30359L6.7607 5.05848L7.14644 3.62293C7.50263 2.2948 8.70444 1.41848 10.0173 1.41848ZM2.75902 8.07127C2.75902 8.11355 2.76086 8.15619 2.76461 8.1991L3.44039 15.9218C3.50639 16.6762 4.13896 17.2447 4.88229 17.2447C4.92444 17.2447 4.96694 17.2429 5.00972 17.2391L11.33 16.6864C12.0842 16.6201 12.653 15.9877 12.653 15.2446C12.653 15.2024 12.6512 15.1599 12.6474 15.1171L12.2265 10.3114L10.2666 10.4833C10.1974 10.4893 10.1287 10.4923 10.0605 10.4923C8.86489 10.4923 7.84667 9.57849 7.74019 8.36512L7.5605 6.3241L4.08199 6.62879C3.32759 6.69487 2.75902 7.32792 2.75902 8.07127ZM10.0175 2.74928C9.29189 2.74928 8.62748 3.23362 8.43062 3.96766L8.17086 4.93543L8.71089 4.88856C8.79169 4.8815 8.87244 4.878 8.95292 4.878C9.60386 4.878 10.2377 5.1066 10.7402 5.5282L12.4521 6.96473C13.0167 7.43855 13.3703 8.11814 13.4345 8.85242L13.914 14.3358C14.5881 14.2819 15.1854 13.8122 15.3701 13.1229L17.1943 6.31531C17.2324 6.17305 17.2505 6.03013 17.2505 5.88951C17.2505 5.16381 16.7663 4.49934 16.0322 4.30262L10.4433 2.80555C10.3011 2.76747 10.1582 2.74928 10.0175 2.74928ZM8.88668 6.21082L9.06539 8.24891C9.11117 8.77014 9.5483 9.16294 10.0619 9.16294L12.1103 8.98719L12.1093 8.96863C12.0758 8.58576 11.891 8.23135 11.5966 7.98426L9.88472 6.54774C9.62276 6.32792 9.29248 6.2093 8.95313 6.2093C8.93101 6.2093 8.90885 6.20981 8.88668 6.21082Z",
              }),
            }),
          {},
        ),
        message: (0, Q.zR)({
          id: "workspaceRecovery.deactivated.collaborateInChatGPTSpace",
          defaultMessage: "Collaborate with your team and agents in ChatGPT Space",
        }),
      },
      {
        icon: (0, n.jsx)(B.I, { asset: K }),
        message: (0, Q.zR)({
          id: "workspaceRecovery.deactivated.businessData",
          defaultMessage: "Business data isn't used for training by default",
        }),
      },
    ]
    function eM() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("ul", {
              className: "flex flex-col gap-3 text-[16px] leading-[26px] tracking-[-0.32px] text-secondary md:gap-4",
              children: ej.map(eA),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function eA(e) {
      let { icon: t, message: a } = e
      return (0, n.jsxs)(
        "li",
        {
          className: "flex items-start gap-3 py-0.5",
          children: [
            (0, n.jsx)("span", {
              "aria-hidden": "true",
              className: "flex h-[26px] w-5 shrink-0 items-center justify-center",
              children: t,
            }),
            (0, n.jsx)(A.A, { ...a }),
          ],
        },
        a.id,
      )
    }
    function eI(e) {
      let t,
        a,
        s,
        o,
        l = (0, r.c)(15),
        i = (0, f.Ou)("891114417")
      if (e.requiresAuthentication) {
        let t
        return (
          l[0] !== e
            ? ((t = (0, n.jsx)(ew, { ...e, selectableWorkspaces: e.activeWorkspaces })), (l[0] = e), (l[1] = t))
            : (t = l[1]),
          t
        )
      }
      if (e.isDeactivated && i.get("recovery_screen_enabled", !1)) {
        let t,
          a = e.workspace?.account.account_id
        return (
          l[2] !== e || l[3] !== a
            ? ((t = (0, n.jsx)(ek, { ...e }, a)), (l[2] = e), (l[3] = a), (l[4] = t))
            : (t = l[4]),
          t
        )
      }
      return (
        l[5] !== e.isDeactivated
          ? ((t = (0, n.jsx)(W.L3, {
              className: "text-lg font-normal",
              children: (0, n.jsx)(eR, { isDeactivated: e.isDeactivated }),
            })),
            (l[5] = e.isDeactivated),
            (l[6] = t))
          : (t = l[6]),
        l[7] !== e.isDeactivated
          ? ((a = (0, n.jsx)(W.rr, {
              className: "sr-only",
              children: e.isDeactivated
                ? (0, n.jsx)(A.A, {
                    id: "workspaceRecovery.description",
                    defaultMessage: "Choose how to continue after this workspace was deactivated",
                  })
                : (0, n.jsx)(A.A, {
                    id: "workspaceRecovery.checkingDescription",
                    defaultMessage: "Your workspace must be checked before you can continue",
                  }),
            })),
            (l[7] = e.isDeactivated),
            (l[8] = a))
          : (a = l[8]),
        l[9] !== e ? ((s = (0, n.jsx)(eS, { ...e })), (l[9] = e), (l[10] = s)) : (s = l[10]),
        l[11] !== t || l[12] !== a || l[13] !== s
          ? ((o = (0, n.jsx)(W.lG, {
              open: !0,
              showDialogClose: !1,
              shouldIgnoreClickOutside: !0,
              size: "compact",
              variant: "chatgpt",
              children: (0, n.jsxs)(H.R4, {
                ref: O.sW,
                className: "gap-4 p-4 select-none",
                "data-testid": "modal-deactivated-workspace",
                size: "viewport",
                variant: "chatgpt",
                children: [t, a, s],
              }),
            })),
            (l[11] = t),
            (l[12] = a),
            (l[13] = s),
            (l[14] = o))
          : (o = l[14]),
        o
      )
    }
    function eS(e) {
      let t,
        a,
        s,
        o,
        l,
        i,
        c,
        u,
        d,
        h = (0, r.c)(43),
        {
          activeWorkspaces: p,
          recoveryWorkspaces: m,
          accountId: f,
          error: x,
          isDeactivated: g,
          loading: y,
          onChooseWorkspace: w,
          onPersonal: v,
          onRecover: k,
          onSelectWorkspace: b,
          pending: C,
          userId: j,
          userLabel: M,
          workspace: I,
        } = e
      h[0] !== I ? ((t = _(I)), (h[0] = I), (h[1] = t)) : (t = h[1])
      let S = t,
        R = y || null != C
      return (
        h[2] !== p.length || h[3] !== g || h[4] !== v || h[5] !== C
          ? ((a = (e) => {
              ;(e.preventDefault(), g && 0 === p.length && null == C && v?.())
            }),
            (h[2] = p.length),
            (h[3] = g),
            (h[4] = v),
            (h[5] = C),
            (h[6] = a))
          : (a = h[6]),
        h[7] !== f ||
        h[8] !== S ||
        h[9] !== g ||
        h[10] !== k ||
        h[11] !== b ||
        h[12] !== C ||
        h[13] !== m ||
        h[14] !== j ||
        h[15] !== I
          ? ((s = g
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    null != I &&
                      (m.some((e) => e.account.account_id !== I.account.account_id)
                        ? (0, n.jsx)(D.Ab, {
                            disabled: null != C,
                            surface: "chatgpt",
                            triggerButton: (0, n.jsxs)(q.$, {
                              color: "ghost",
                              size: "dialog",
                              disabled: null != C,
                              children: [
                                (0, n.jsx)(eT, { workspace: I }),
                                (0, n.jsx)("span", {
                                  className: "truncate",
                                  children: (0, n.jsx)(eE, { workspace: I }),
                                }),
                                (0, n.jsx)(U.Aq_, {}),
                              ],
                            }),
                            children: m.map((e) =>
                              (0, n.jsx)(
                                D.ms.Item,
                                {
                                  disabled: null != C || e.account.account_id === I.account.account_id,
                                  onSelect: () => b(e),
                                  children: (0, n.jsx)(eE, { workspace: e }),
                                },
                                e.account.account_id,
                              ),
                            ),
                          })
                        : (0, n.jsxs)("div", {
                            className: "flex items-center gap-2 text-base",
                            children: [
                              (0, n.jsx)(eT, { workspace: I }),
                              (0, n.jsx)("span", { className: "truncate", children: (0, n.jsx)(eE, { workspace: I }) }),
                            ],
                          })),
                    (0, n.jsxs)("ul", {
                      className: "flex list-disc flex-col gap-1 ps-5 text-sm",
                      children: [
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(A.A, {
                            id: "workspaceRecovery.historyUnavailable",
                            defaultMessage: "Your chat history and settings will not be available",
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(A.A, {
                            id: "workspaceRecovery.otherWorkspaces",
                            defaultMessage:
                              "You will still be able to use ChatGPT with the other workspaces associated with this email address",
                          }),
                        }),
                      ],
                    }),
                    null != S
                      ? (0, n.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, n.jsx)("p", {
                              className: "text-sm",
                              children: (0, n.jsx)(eL, { accountId: f, action: S, userId: j }),
                            }),
                            (0, n.jsx)(q.$, {
                              className: "w-full justify-center",
                              color: "outlineGhost",
                              disabled: null != C,
                              loading: "recover" === C,
                              radius: "full",
                              size: "dialog",
                              onClick: k,
                              children:
                                "customer_portal" === S
                                  ? (0, n.jsx)(A.A, {
                                      id: "workspaceRecovery.manageSubscription",
                                      defaultMessage: "Manage subscription",
                                    })
                                  : (0, n.jsx)(A.A, {
                                      id: "workspaceRecovery.purchaseSubscriptionButton",
                                      defaultMessage: "Purchase subscription",
                                    }),
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : null),
            (h[7] = f),
            (h[8] = S),
            (h[9] = g),
            (h[10] = k),
            (h[11] = b),
            (h[12] = C),
            (h[13] = m),
            (h[14] = j),
            (h[15] = I),
            (h[16] = s))
          : (s = h[16]),
        h[17] !== x
          ? ((o = x
              ? (0, n.jsx)("p", {
                  className: "text-sm text-secondary",
                  role: "alert",
                  children: (0, n.jsx)(A.A, {
                    id: "workspaceRecovery.error",
                    defaultMessage: "We couldn\u2019t complete that request",
                  }),
                })
              : null),
            (h[17] = x),
            (h[18] = o))
          : (o = h[18]),
        h[19] !== g
          ? ((l = g ? (0, n.jsx)("hr", { className: "border-default" }) : null), (h[19] = g), (h[20] = l))
          : (l = h[20]),
        h[21] !== p || h[22] !== b || h[23] !== C
          ? ((i =
              p.length > 0
                ? (0, n.jsxs)("section", {
                    "aria-labelledby": "workspace-recovery-select-workspace",
                    className: "flex flex-col gap-2",
                    children: [
                      (0, n.jsx)("h3", {
                        className: "text-base font-normal",
                        id: "workspace-recovery-select-workspace",
                        children: (0, n.jsx)(A.A, {
                          id: "workspaceRecovery.selectWorkspace",
                          defaultMessage: "Select a workspace to continue",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "flex w-full flex-col gap-2",
                        children: p.map((e) => {
                          let t = e.account.account_id
                          return (0, n.jsx)(
                            z.fy,
                            {
                              density: "compact",
                              icon:
                                "personal" === e.account.structure
                                  ? (0, n.jsx)(U.CHX, {})
                                  : (0, n.jsx)(eT, { workspace: e }),
                              isDisabled: null != C,
                              isSelected: !1,
                              rightText: C === t ? (0, n.jsx)(G.y, {}) : (0, n.jsx)(U.uM3, {}),
                              title:
                                "personal" === e.account.structure
                                  ? (0, n.jsx)(A.A, {
                                      id: "workspaceRecovery.personalAccount",
                                      defaultMessage: "Personal account",
                                    })
                                  : (0, n.jsx)(eE, { workspace: e }),
                              onSelect: () => b(e),
                            },
                            t,
                          )
                        }),
                      }),
                    ],
                  })
                : null),
            (h[21] = p),
            (h[22] = b),
            (h[23] = C),
            (h[24] = i))
          : (i = h[24]),
        h[25] !== p.length || h[26] !== g || h[27] !== v || h[28] !== C || h[29] !== M
          ? ((c =
              g && 0 === p.length && null != v
                ? (0, n.jsxs)("section", {
                    className: "flex flex-col gap-6 text-sm",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, n.jsx)("h3", {
                            className: "text-base font-normal",
                            children: (0, n.jsx)(A.A, {
                              id: "workspaceRecovery.createPersonalTitle",
                              defaultMessage: "Create a personal workspace to continue",
                            }),
                          }),
                          (0, n.jsx)(A.A, {
                            id: "workspaceRecovery.createPersonalExplanation",
                            defaultMessage:
                              "Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                          (0, n.jsx)("span", {
                            className: "min-w-0 truncate",
                            children:
                              M ??
                              (0, n.jsx)(A.A, {
                                id: "workspaceRecovery.personalAccountFallback",
                                defaultMessage: "Personal account",
                              }),
                          }),
                          (0, n.jsx)(q.$, {
                            color: "primary",
                            disabled: null != C,
                            loading: "personal" === C,
                            radius: "full",
                            size: "dialog",
                            type: "submit",
                            children: (0, n.jsx)(A.A, {
                              id: "workspaceRecovery.createPersonal",
                              defaultMessage: "Create a personal workspace",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (h[25] = p.length),
            (h[26] = g),
            (h[27] = v),
            (h[28] = C),
            (h[29] = M),
            (h[30] = c))
          : (c = h[30]),
        h[31] !== w || h[32] !== C
          ? ((u =
              null != w
                ? (0, n.jsx)(z.fy, {
                    density: "compact",
                    icon: (0, n.jsx)(B.I, { className: "rtl:-scale-x-100", asset: P.o }),
                    isDisabled: null != C,
                    isSelected: !1,
                    rightText: "choose-workspace" === C ? (0, n.jsx)(G.y, {}) : (0, n.jsx)(U.uM3, {}),
                    title: (0, n.jsx)(A.A, {
                      id: "workspaceRecovery.signInToAnotherWorkspace",
                      defaultMessage: "Sign in to another workspace",
                    }),
                    onSelect: w,
                  })
                : null),
            (h[31] = w),
            (h[32] = C),
            (h[33] = u))
          : (u = h[33]),
        h[34] !== R ||
        h[35] !== a ||
        h[36] !== s ||
        h[37] !== o ||
        h[38] !== l ||
        h[39] !== i ||
        h[40] !== c ||
        h[41] !== u
          ? ((d = (0, n.jsxs)("form", {
              "aria-busy": R,
              className: "flex w-full flex-col gap-4 text-start select-none",
              onSubmit: a,
              children: [s, o, l, i, c, u],
            })),
            (h[34] = R),
            (h[35] = a),
            (h[36] = s),
            (h[37] = o),
            (h[38] = l),
            (h[39] = i),
            (h[40] = c),
            (h[41] = u),
            (h[42] = d))
          : (d = h[42]),
        d
      )
    }
    function eR(e) {
      let t,
        a = (0, r.c)(2),
        { isDeactivated: s } = e
      return (
        a[0] !== s
          ? ((t = s
              ? (0, n.jsx)(A.A, {
                  id: "workspaceRecovery.title",
                  defaultMessage: "Your workspace has been deactivated",
                })
              : (0, n.jsx)(A.A, { id: "workspaceRecovery.unavailableTitle", defaultMessage: "Workspace unavailable" })),
            (a[0] = s),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function eL(e) {
      let t,
        a,
        s,
        o,
        l = (0, r.c)(14),
        { action: i, accountId: c, userId: u } = e,
        d = "customer_portal" === i && null != c
      ;(l[0] !== c
        ? ((t = (e) => {
            let { signal: t } = e
            return E.CodexRequest.safeGet("/subscriptions/deactivated_workspace_invoice_context", {
              parameters: { query: { account_id: c ?? "" } },
              signal: t,
            })
          }),
          (l[0] = c),
          (l[1] = t))
        : (t = l[1]),
        l[2] !== c || l[3] !== u
          ? ((a = ["workspace-recovery", "invoice-context", u, c]), (l[2] = c), (l[3] = u), (l[4] = a))
          : (a = l[4]),
        l[5] !== d || l[6] !== t || l[7] !== a
          ? ((s = { enabled: d, queryFn: t, queryKey: a, refetchOnWindowFocus: !1, retry: !1, staleTime: 0 }),
            (l[5] = d),
            (l[6] = t),
            (l[7] = a),
            (l[8] = s))
          : (s = l[8]))
      let { data: h } = (0, b.I)(s)
      if ("checkout" === i) {
        let e
        return (
          l[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(A.A, {
                id: "workspaceRecovery.purchaseSubscription",
                defaultMessage: "Purchase a new subscription to reactivate your workspace",
              })),
              (l[9] = e))
            : (e = l[9]),
          e
        )
      }
      if (h?.available && "renewal" === h.invoice_kind) {
        let e
        return (
          l[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(A.A, {
                id: "workspaceRecovery.renewalPayment",
                defaultMessage:
                  "Payment failed when we tried to renew your subscription. Resolve the outstanding payment to reactivate your workspace.",
              })),
              (l[10] = e))
            : (e = l[10]),
          e
        )
      }
      if (h?.available && "true_up" === h.invoice_kind) {
        let e
        return (
          l[11] !== h.additional_paid_seats
            ? ((e = (0, n.jsx)(A.A, {
                id: "workspaceRecovery.seatIncreasePayment",
                defaultMessage:
                  "{additionalPaidSeats, plural, one {<b># seat</b> was} other {<b># seats</b> were}} recently added to your organization, and payment failed when we tried to charge you. Resolve the outstanding payment to reactivate your workspace.",
                values: { additionalPaidSeats: h.additional_paid_seats, b: eN },
              })),
              (l[11] = h.additional_paid_seats),
              (l[12] = e))
            : (e = l[12]),
          e
        )
      }
      return (
        l[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(A.A, {
              id: "workspaceRecovery.outstandingPayment",
              defaultMessage: "Resolve the outstanding payment to reactivate your workspace",
            })),
            (l[13] = o))
          : (o = l[13]),
        o
      )
    }
    function eN(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function eE(e) {
      let t,
        a = (0, r.c)(2),
        { workspace: s } = e
      return (
        a[0] !== s.account.name
          ? ((t =
              s.account.name ||
              (0, n.jsx)(A.A, { id: "workspaceRecovery.unnamedWorkspace", defaultMessage: "Unnamed workspace" })),
            (a[0] = s.account.name),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    function eT(e) {
      let t,
        a = (0, r.c)(3),
        { workspace: s } = e,
        o = s.account.name ?? null,
        l = s.account.profile_picture_url ?? null
      return (
        a[0] !== o || a[1] !== l
          ? ((t = (0, n.jsx)(V.e, { alt: "", name: o, src: l })), (a[0] = o), (a[1] = l), (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    var eP = a("vTAO"),
      eV = a("NWpa"),
      eq = a("o6kC")
    function eW(e) {
      let t,
        a,
        o,
        i,
        c,
        u,
        d,
        h,
        m,
        f,
        x,
        g,
        y,
        w,
        j,
        P,
        V,
        q,
        W,
        H,
        D,
        B,
        U,
        z,
        G,
        O,
        Z,
        Y,
        F = (0, r.c)(133),
        { actions: K, automaticRecovery: $, children: Q } = e,
        X = (0, s.gh)(p.u),
        J = (0, I.As)(),
        ee = (0, l.zy)()
      F[0] !== ee.pathname
        ? ((t =
            ee.pathname.startsWith("/checkout/") ||
            "/payments/success" === ee.pathname ||
            "/payments/success-team" === ee.pathname ||
            "/onboarding/owner" === ee.pathname),
          (F[0] = ee.pathname),
          (F[1] = t))
        : (t = F[1])
      let et = t,
        ea = (0, s.Ul)(eV._),
        en = ea?.userId === J.userId ? ea : null,
        er = en?.accountId ?? J.accountId
      F[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { enabled: !1 }), (F[2] = a)) : (a = F[2])
      let { error: es } = (0, s._U)(R.t, J.accountId, a)
      F[3] !== J.accountId || F[4] !== es
        ? ((o = (0, R.W)(es, J.accountId)), (F[3] = J.accountId), (F[4] = es), (F[5] = o))
        : (o = F[5])
      let eo = o,
        el = ("chatgpt" === J.authMethod || "chatgptAuthTokens" === J.authMethod) && null != J.userId && null != er,
        ei = el && !et
      ;(F[6] !== K || F[7] !== J.accountId || F[8] !== J.userId || F[9] !== X || F[10] !== er
        ? ((i = async (e) => {
            let t,
              a,
              { signal: n } = e
            try {
              t = K.beginAccountCheck?.(J.accountId, J.userId, n)
            } catch {}
            try {
              ;((a = await E.CodexRequest.safeGet("/accounts/check/{version}", {
                parameters: { path: { version: "v4-2023-04-27" } },
                signal: n,
              })),
                n.throwIfAborted())
            } catch (e) {
              try {
                t?.(e)
              } catch {}
              throw e
            }
            try {
              t?.()
            } catch {}
            if (null != er && null != J.userId) {
              let e = await K.isCurrentAccount(er, J.userId)
              ;(n.throwIfAborted(), e && X.query.setData(S.f, er, a))
              let t = a.accounts[er],
                r = X.get(eV._)
              t?.account.is_deactivated === !0 && er === J.accountId
                ? X.set(eV._, { accountId: er, userId: J.userId })
                : t?.account.is_deactivated === !1 &&
                  r?.accountId === er &&
                  r.userId === J.userId &&
                  (e &&
                    "workspace" === t.account.structure &&
                    (0, v.Hw)(t.account.plan_type) &&
                    !1 !== t.can_access_with_session &&
                    (0, eq.L)(X, er),
                  X.set(eV._, null),
                  X.queryClient.invalidateQueries({ queryKey: ["accounts", "check"] }))
            }
            return a
          }),
          (F[6] = K),
          (F[7] = J.accountId),
          (F[8] = J.userId),
          (F[9] = X),
          (F[10] = er),
          (F[11] = i))
        : (i = F[11]),
        F[12] !== J.userId || F[13] !== er
          ? ((c = ["workspace-recovery", "accounts-check", J.userId, er]),
            (F[12] = J.userId),
            (F[13] = er),
            (F[14] = c))
          : (c = F[14]),
        F[15] !== ei || F[16] !== i || F[17] !== c
          ? ((u = {
              enabled: ei,
              queryFn: i,
              queryKey: c,
              refetchOnMount: "always",
              refetchOnWindowFocus: !1,
              retry: !1,
              staleTime: 0,
            }),
            (F[15] = ei),
            (F[16] = i),
            (F[17] = c),
            (F[18] = u))
          : (u = F[18]))
      let { data: ec, error: eu, isFetching: ed, isFetchedAfterMount: eh, refetch: ep } = (0, b.I)(u),
        em = null == er ? void 0 : ec?.accounts[er],
        ef = J.accountId === er && em?.account.is_deactivated === !0,
        ex = null != K.authenticateWorkspace && em?.can_access_with_session === !1,
        eg = eh && null == eu && null != em,
        ey = null != $ || null != en || (eo && er === J.accountId) || (null != er && (!eg || ef || ex))
      F[19] !== em ? ((d = _(em)), (F[19] = em), (F[20] = d)) : (d = F[20])
      let ew = d,
        [ev, e_] = (0, M.useState)(null),
        [ek, eb] = (0, M.useState)(null),
        eC = (0, M.useRef)(null),
        ej = (0, M.useRef)(null),
        [eM, eA] = (0, M.useState)(null)
      F[21] !== $ || F[22] !== ey || F[23] !== et || F[24] !== ev || F[25] !== ep
        ? ((h = () => {
            ey && null == ev && null == $ && !et && ep()
          }),
          (F[21] = $),
          (F[22] = ey),
          (F[23] = et),
          (F[24] = ev),
          (F[25] = ep),
          (F[26] = h))
        : (h = F[26])
      let eS = (0, M.useEffectEvent)(h)
      F[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = async (e, t, a) => {
            let n = void 0 === a ? "other" : a
            if (null != eC.current) return
            let r = new AbortController()
            ;((eC.current = r),
              e_({ controller: r, id: e }),
              eb((e) => ("authenticate" === e && "authenticate" === n ? e : null)))
            try {
              ;(await t(r.signal), r.signal.aborted || eb(null))
            } catch {
              r.signal.aborted || eb(n)
            }
            eC.current === r && ((eC.current = null), e_(null))
          }),
          (F[27] = m))
        : (m = F[27])
      let eR = m
      F[28] !== ew || F[29] !== K || F[30] !== J.userId || F[31] !== ep || F[32] !== X || F[33] !== er || F[34] !== em
        ? ((f = () => {
            eR("recover", async (e) => {
              let t = J.userId
              if (null == er || null == em || null == ew) return
              if (null == t || !(await K.isCurrentAccount(er, t)))
                throw Error("Authenticated workspace changed during recovery")
              if ((e.throwIfAborted(), "customer_portal" === ew)) {
                let t = await E.CodexRequest.safeGet("/payments/customer_portal", {
                  parameters: { query: { account_id: er } },
                  signal: e,
                })
                ;(e.throwIfAborted(), K.openCustomerPortal(t.url))
                return
              }
              let a = async () => {
                  let a = await ep()
                  if ((e.throwIfAborted(), !(await K.isCurrentAccount(er, t))))
                    throw Error("Authenticated workspace changed during recovery")
                  if ((e.throwIfAborted(), a.isError)) return em
                  let n = a.data?.accounts[er]
                  if (
                    n?.account.structure !== "workspace" ||
                    "account-owner" !== n.account.account_user_role ||
                    !(0, v.Hw)(n.account.plan_type) ||
                    !1 === n.can_access_with_session
                  )
                    throw Error("Unable to verify the reactivation workspace")
                  return (e.throwIfAborted(), n)
                },
                n = await a()
              if (!1 === n.account.is_deactivated)
                return void (0, N.yy)(X, k, {
                  stage: "CHATGPT_BUSINESS_BILLING_ACTIVE_WORKSPACE_RECOVERY_STAGE_PREFLIGHT",
                })
              try {
                await K.openCheckout(n, e, { userId: t, isCurrent: () => K.isCurrentAccount(er, t) })
              } catch (e) {
                if (
                  e instanceof T.fk &&
                  400 === e.status &&
                  "workspace_reactivation_not_allowed" === e.errorCode &&
                  !1 === (await a()).account.is_deactivated
                )
                  return void (0, N.yy)(X, k, {
                    stage: "CHATGPT_BUSINESS_BILLING_ACTIVE_WORKSPACE_RECOVERY_STAGE_CHECKOUT_REJECTION",
                  })
                throw e
              }
            })
          }),
          (F[28] = ew),
          (F[29] = K),
          (F[30] = J.userId),
          (F[31] = ep),
          (F[32] = X),
          (F[33] = er),
          (F[34] = em),
          (F[35] = f))
        : (f = F[35])
      let eL = f,
        eN = null == $ ? null : ee.key
      F[36] !== ew ||
      F[37] !== K ||
      F[38] !== J.accountId ||
      F[39] !== J.userId ||
      F[40] !== $ ||
      F[41] !== eN ||
      F[42] !== ec ||
      F[43] !== eu ||
      F[44] !== eL ||
      F[45] !== el ||
      F[46] !== er ||
      F[47] !== em
        ? ((x = (e) => {
            null == $ ||
              null == eN ||
              ej.current === eN ||
              (async () => {
                let t = $.accountId
                if (null != t && t !== J.accountId && null != $.switchToTarget) {
                  let a = ec?.accounts[t]
                  return (
                    !!(
                      el &&
                      null == eu &&
                      a?.account.account_id === t &&
                      null != _(a) &&
                      (await $.switchToTarget(a, e))
                    ) && "switching"
                  )
                }
                return (
                  null != $.accountId &&
                  $.accountId === J.accountId &&
                  null != er &&
                  er === J.accountId &&
                  em?.account.account_id === er &&
                  null != J.userId &&
                  K.isCurrentAccount(er, J.userId)
                )
              })()
                .catch(ez)
                .then((t) => {
                  !e.aborted &&
                    "switching" !== t &&
                    ((ej.current = eN), $.consume(t), t && null == eu && null != ew && eL())
                })
          }),
          (F[36] = ew),
          (F[37] = K),
          (F[38] = J.accountId),
          (F[39] = J.userId),
          (F[40] = $),
          (F[41] = eN),
          (F[42] = ec),
          (F[43] = eu),
          (F[44] = eL),
          (F[45] = el),
          (F[46] = er),
          (F[47] = em),
          (F[48] = x))
        : (x = F[48])
      let eE = (0, M.useEffectEvent)(x)
      if (
        (F[49] !== eE || F[50] !== eN || F[51] !== eh || F[52] !== ed || F[53] !== el
          ? ((g = () => {
              if (null != eN && (!el || (eh && !ed))) {
                let e = new AbortController()
                return (eE(e.signal), () => e.abort())
              }
            }),
            (F[49] = eE),
            (F[50] = eN),
            (F[51] = eh),
            (F[52] = ed),
            (F[53] = el),
            (F[54] = g))
          : (g = F[54]),
        F[55] !== eN || F[56] !== eh || F[57] !== ed || F[58] !== el
          ? ((y = [eN, eh, ed, el]), (F[55] = eN), (F[56] = eh), (F[57] = ed), (F[58] = el), (F[59] = y))
          : (y = F[59]),
        (0, M.useEffect)(g, y),
        F[60] !== ey || F[61] !== eS
          ? ((w = () => {
              if (!ey) return
              let e = C.m.subscribe((e) => {
                  e && eS()
                }),
                t = (e) => {
                  e.persisted && eS()
                }
              return (
                window.addEventListener("pageshow", t),
                () => {
                  ;(e(), window.removeEventListener("pageshow", t))
                }
              )
            }),
            (F[60] = ey),
            (F[61] = eS),
            (F[62] = w))
          : (w = F[62]),
        F[63] !== ey ? ((j = [ey]), (F[63] = ey), (F[64] = j)) : (j = F[64]),
        (0, M.useEffect)(w, j),
        F[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = () => () => eC.current?.abort()), (V = []), (F[65] = P), (F[66] = V))
          : ((P = F[65]), (V = F[66])),
        (0, M.useEffect)(P, V),
        !ey)
      ) {
        let e
        return (
          F[67] !== Q || F[68] !== ee.pathname
            ? ((e =
                ee.pathname === eP.oM
                  ? (0, n.jsx)(l.C5, { replace: !0, to: "/" })
                  : (0, n.jsx)(n.Fragment, { children: Q })),
              (F[67] = Q),
              (F[68] = ee.pathname),
              (F[69] = e))
            : (e = F[69]),
          e
        )
      }
      if (ee.pathname !== eP.oM && !et) {
        let e
        return (
          F[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(l.C5, { replace: !0, to: eP.oM })), (F[70] = e))
            : (e = F[70]),
          e
        )
      }
      if (et) {
        let e
        return (
          F[71] !== Q ? ((e = (0, n.jsx)(n.Fragment, { children: Q })), (F[71] = Q), (F[72] = e)) : (e = F[72]),
          e
        )
      }
      if (!eh || null != $) {
        let e, t
        return (
          F[73] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(L.LoadingPage, { debugName: "workspace-recovery" })), (F[73] = e))
            : (e = F[73]),
          F[74] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsxs)(n.Fragment, {
                children: [
                  e,
                  (0, n.jsx)("span", {
                    className: "sr-only select-none",
                    role: "status",
                    children: (0, n.jsx)(A.A, {
                      id: "workspaceRecovery.checkingTitle",
                      defaultMessage: "Checking workspace\u2026",
                    }),
                  }),
                ],
              })),
              (F[74] = t))
            : (t = F[74]),
          t
        )
      }
      if (
        F[75] !== K.switchWorkspace ||
        F[76] !== J.accountId ||
        F[77] !== ec ||
        F[78] !== eu ||
        F[79] !== eo ||
        F[80] !== em
      ) {
        let e
        ;((B =
          null == K.switchWorkspace || null != eu
            ? []
            : ec?.account_ordering.flatMap((e) => {
                let t = ec.accounts[e]
                return null == t ? [] : [t]
              })),
          F[86] !== J.accountId || F[87] !== eo
            ? ((e = (e) =>
                null != e.account.account_id &&
                (!eo || e.account.account_id !== J.accountId) &&
                !0 !== e.account.is_deactivated &&
                !1 !== e.can_access_with_session),
              (F[86] = J.accountId),
              (F[87] = eo),
              (F[88] = e))
            : (e = F[88]),
          (q = (B ?? []).filter(e)),
          (H = (B ?? []).filter(eU)),
          (W = 0 === q.length && !(B ?? []).some(eB)),
          (D = B?.find(eD) ?? em),
          (F[75] = K.switchWorkspace),
          (F[76] = J.accountId),
          (F[77] = ec),
          (F[78] = eu),
          (F[79] = eo),
          (F[80] = em),
          (F[81] = q),
          (F[82] = W),
          (F[83] = H),
          (F[84] = D),
          (F[85] = B))
      } else ((q = F[81]), (W = F[82]), (H = F[83]), (D = F[84]), (B = F[85]))
      let eT = D
      F[89] !== B ? ((U = B ?? []), (F[89] = B), (F[90] = U)) : (U = F[90])
      let eW = null != en || em?.account.is_deactivated === !0
      F[91] !== K || F[92] !== J.userId || F[93] !== eT || F[94] !== ex || F[95] !== er
        ? ((z =
            ex && null != eT && null != K.authenticateWorkspace
              ? () => {
                  eR(
                    "authenticate",
                    async (e) => {
                      if (null == er || null == J.userId || !(await K.isCurrentAccount(er, J.userId)))
                        throw Error("Authenticated workspace changed during recovery")
                      ;(e.throwIfAborted(), await K.authenticateWorkspace?.(eT, e))
                    },
                    "authenticate",
                  )
                }
              : void 0),
          (F[91] = K),
          (F[92] = J.userId),
          (F[93] = eT),
          (F[94] = ex),
          (F[95] = er),
          (F[96] = z))
        : (z = F[96])
      let eG = ev?.id ?? null
      return (
        F[97] !== K || F[98] !== ex || F[99] !== en || F[100] !== em
          ? ((G =
              null == K.chooseWorkspace
                ? void 0
                : () => {
                    eR("choose-workspace", async () => {
                      ex
                        ? await K.chooseWorkspace?.("session-access")
                        : await K.chooseWorkspace?.(
                            null != en || em?.account.is_deactivated === !0 ? "deactivated" : "unavailable",
                          )
                    })
                  }),
            (F[97] = K),
            (F[98] = ex),
            (F[99] = en),
            (F[100] = em),
            (F[101] = G))
          : (G = F[101]),
        F[102] !== K || F[103] !== W || F[104] !== eM || F[105] !== ec || F[106] !== eu || F[107] !== ep || F[108] !== X
          ? ((O =
              null != K.switchWorkspace && null != ec && null == eu && W
                ? () => {
                    eR("personal", async (e) => {
                      let t = await ep()
                      if ((e.throwIfAborted(), t.isError)) throw t.error
                      let a = t.data?.account_ordering.map((e) => t.data.accounts[e]).find(eH),
                        n =
                          eM ??
                          a?.account.account_id ??
                          (await E.CodexRequest.safePost("/accounts/personal", { signal: e })).id
                      ;(eA(n), e.throwIfAborted())
                      let r = await ep()
                      if ((e.throwIfAborted(), r.isError)) throw r.error
                      let s = r.data?.accounts[n]
                      if (null == s || !(await K.switchWorkspace?.(s, e)))
                        throw Error("Personal workspace switch did not complete")
                      ;(e.throwIfAborted(), X.set(eV._, null))
                    })
                  }
                : void 0),
            (F[102] = K),
            (F[103] = W),
            (F[104] = eM),
            (F[105] = ec),
            (F[106] = eu),
            (F[107] = ep),
            (F[108] = X),
            (F[109] = O))
          : (O = F[109]),
        F[110] !== K || F[111] !== J.userId || F[112] !== X
          ? ((Z = (e) => {
              let t = e.account.account_id
              null != t &&
                eR(
                  t,
                  async (a) => {
                    if (!(await K.switchWorkspace?.(e, a))) throw Error("Workspace switch did not complete")
                    ;(a.throwIfAborted(),
                      X.set(
                        eV._,
                        !0 === e.account.is_deactivated && null != J.userId ? { accountId: t, userId: J.userId } : null,
                      ))
                  },
                  "switch-workspace",
                )
            }),
            (F[110] = K),
            (F[111] = J.userId),
            (F[112] = X),
            (F[113] = Z))
          : (Z = F[113]),
        F[114] !== ek ||
        F[115] !== q ||
        F[116] !== J.email ||
        F[117] !== J.userId ||
        F[118] !== eT ||
        F[119] !== eL ||
        F[120] !== ed ||
        F[121] !== H ||
        F[122] !== ex ||
        F[123] !== U ||
        F[124] !== eW ||
        F[125] !== z ||
        F[126] !== eG ||
        F[127] !== G ||
        F[128] !== O ||
        F[129] !== Z ||
        F[130] !== er ||
        F[131] !== em
          ? ((Y = (0, n.jsx)(eI, {
              accountId: er,
              activeWorkspaces: q,
              workspaces: U,
              recoveryWorkspaces: H,
              error: ek,
              isDeactivated: eW,
              requiresAuthentication: ex,
              onAuthenticate: z,
              loading: ed,
              pending: eG,
              userId: J.userId,
              userLabel: J.email,
              workspace: em,
              authenticationWorkspace: eT,
              onChooseWorkspace: G,
              onPersonal: O,
              onRecover: eL,
              onSelectWorkspace: Z,
            })),
            (F[114] = ek),
            (F[115] = q),
            (F[116] = J.email),
            (F[117] = J.userId),
            (F[118] = eT),
            (F[119] = eL),
            (F[120] = ed),
            (F[121] = H),
            (F[122] = ex),
            (F[123] = U),
            (F[124] = eW),
            (F[125] = z),
            (F[126] = eG),
            (F[127] = G),
            (F[128] = O),
            (F[129] = Z),
            (F[130] = er),
            (F[131] = em),
            (F[132] = Y))
          : (Y = F[132]),
        Y
      )
    }
    function eH(e) {
      return e?.account.structure === "personal"
    }
    function eD(e) {
      return (
        null != e.account.account_id &&
        !0 !== e.account.is_deactivated &&
        !1 === e.can_access_with_session &&
        e.sso_connection_name
      )
    }
    function eB(e) {
      let { account: t } = e
      return (
        "personal" === t.structure ||
        ("workspace" === t.structure && t.plan_type === j.x.DEPRECATED_ENTERPRISE && !0 !== t.is_deactivated)
      )
    }
    function eU(e) {
      return null != e.account.account_id && null != _(e)
    }
    function ez() {
      return !1
    }
    function eG(e) {
      let t,
        a,
        v,
        k,
        b,
        C = (0, r.c)(15),
        { children: j } = e,
        M = (0, s.gh)(p.u),
        { refetch: A } = (0, c.Us)(),
        I = (0, l.Zp)(),
        S = (0, x.Y)(),
        R = (0, f.AS)()
      return (
        C[0] !== I || C[1] !== M
          ? ((t = async () => {
              ;(await (0, i.ls)(M, m.fI).logout(), await I("/login?workspaceRecovery=true", { replace: !0 }))
            }),
            (C[0] = I),
            (C[1] = M),
            (C[2] = t))
          : (t = C[2]),
        C[3] !== A
          ? ((a = async (e, t) => {
              let a = await A()
              return !a.isError && a.data?.accountId === e && a.data.userId === t
            }),
            (C[3] = A),
            (C[4] = a))
          : (a = C[4]),
        C[5] !== S || C[6] !== R
          ? ((v = async (e, t, a) => {
              let n = await h.appServices.appInfo.get()
              t.throwIfAborted()
              let r = n.chatGptDesktopAuthOrigin ?? o.WaA,
                s = await (async function ({
                  workspace: e,
                  statsig: t,
                  cancelUrl: a,
                  appearance: n,
                  signal: r,
                  owner: s,
                  emailParams: l,
                }) {
                  let i = e.account.account_id
                  if (null == i || "checkout" !== _(e))
                    throw Error("Workspace is not eligible for reactivation checkout")
                  let c = await (0, w.M)({
                    accountId: i,
                    appearance: n,
                    cancelUrl: a,
                    expectedIdentity: { accountId: i, userId: s.userId },
                    purchaseAttemptId: crypto.randomUUID(),
                    signal: r,
                    requestBody: y.Request.safeGet("/accounts/{account_id}/users/seat_type_counts", {
                      parameters: { path: { account_id: i }, query: { for_reactivation_checkout: !0 } },
                      additionalHeaders: { "ChatGPT-Account-ID": i, [o.zBc]: i },
                      signal: r,
                    }).then((a) => {
                      let n = a.seat_type_counts?.default ?? 0,
                        r = a.seat_type_counts?.prolite ?? 0,
                        s = n + r,
                        o = Number(l?.get("numSeats")),
                        c =
                          Number.isSafeInteger(o) && o > 0
                            ? Math.min(o, a.maximum_seats ?? 200)
                            : s || (a.reactivation_minimum_seats ?? (0, g.NO)()),
                        u = Math.max(a.reactivation_minimum_seats ?? (0, g.A9)(), s, c)
                      return (
                        t.getLayer("3744667010").get("refresh_enabled", !1),
                        {
                          entry_point: "team_workspace_purchase_modal",
                          supports_saved_payment_link: !0,
                          plan_name: "chatgptteamplan",
                          checkout_ui_mode: "custom",
                          team_plan_data: {
                            workspace_name: e.account.name ?? "",
                            existing_workspace_id: i,
                            checkout_action: "reactivate",
                            price_interval: l?.get("selectedPlan") === "year" ? "year" : "month",
                            seat_quantity: u,
                            seat_quantities:
                              r > 0
                                ? [
                                    { seat_type: "default", quantity: u - r },
                                    { seat_type: "prolite", quantity: r },
                                  ]
                                : void 0,
                          },
                          billing_details: { currency: e.entitlement.billing_currency ?? "USD" },
                        }
                      )
                    }),
                  })
                  if ((r.throwIfAborted(), !(await s.isCurrent())))
                    throw Error("Authenticated workspace changed during recovery")
                  return (r.throwIfAborted(), c)
                })({
                  workspace: e,
                  owner: a,
                  statsig: R,
                  signal: t,
                  cancelUrl: new URL("/", r).href,
                  appearance: S ? "dark" : "light",
                })
              if ((t.throwIfAborted(), "tag" in s && "custom_checkout_session" === s.tag))
                (0, u.E0)({
                  href: new URL((0, d.L7)(s), r).href,
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                })
              else if (null != s.url)
                (0, u.E0)({ href: s.url, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
              else throw Error("Workspace checkout did not return a destination")
            }),
            (C[5] = S),
            (C[6] = R),
            (C[7] = v))
          : (v = C[7]),
        C[8] !== t || C[9] !== a || C[10] !== v
          ? ((k = { chooseWorkspace: t, isCurrentAccount: a, openCheckout: v, openCustomerPortal: eO }),
            (C[8] = t),
            (C[9] = a),
            (C[10] = v),
            (C[11] = k))
          : (k = C[11]),
        C[12] !== j || C[13] !== k
          ? ((b = (0, n.jsx)(eW, { actions: k, children: j })), (C[12] = j), (C[13] = k), (C[14] = b))
          : (b = C[14]),
        b
      )
    }
    function eO(e) {
      ;(0, u.E0)({ href: e, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
    }
  },
  o6kC(e, t, a) {
    var n = a("eFn4")
    a.d(
      t,
      {},
      {
        L: function (e, t) {
          return e.queryClient.resetQueries({ queryKey: e.query.getOptions(n.Jk, t).queryKey, exact: !0 })
        },
      },
    )
  },
  dMvT(e, t, a) {
    var n = a("NwSQ"),
      r = a("DBCl"),
      s = a("T5JX"),
      o = a("Kwur"),
      l = a("ilGw")
    a.d(
      t,
      {},
      {
        M: async function ({
          accountId: e,
          requestBody: t,
          appearance: a,
          cancelUrl: i,
          purchaseAttemptId: c,
          signal: u,
          expectedIdentity: d,
          assertCurrent: h,
          isExpectedError: p,
        }) {
          ;(u.throwIfAborted(), h?.())
          let m = new URLSearchParams(window.location.search),
            f = (0, l.f)(m),
            [x, g] = await Promise.all([t, (0, s.Xn)("chatgpt_checkout")])
          ;(u.throwIfAborted(), h?.())
          let y = x.checkout_source ?? ("unknown" === f ? null : f),
            w = await o.Request.safePost("/payments/checkout", {
              additionalHeaders: { ...g, "ChatGPT-Account-ID": e, [r.zBc]: e },
              signal: u,
              expectedIdentity: d,
              assertRequestCurrent: h,
              isExpectedError: p,
              requestBody: { ...x, checkout_source: y, checkout_appearance: a, cancel_url: i, purchase_attempt_id: c },
            })
          return (
            u.throwIfAborted(),
            h?.(),
            "checkout_session_id" in w && (0, n.FU)(w.checkout_session_id, y, m.get("checkout_from")),
            w
          )
        },
      },
    )
  },
  vvrk(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("on57"),
      o = a("Sezd"),
      l = a("wwME"),
      i = a("wq58"),
      c = a("IO5C")
    let u = "h-[18px] w-[18px] rounded-[3px] border-[1px]"
    a.d(
      t,
      {},
      {
        ST: function (e) {
          let t,
            a,
            o,
            l,
            i,
            c,
            u,
            d = (0, r.c)(21),
            {
              children: h,
              icon: p,
              title: m,
              subtitle: f,
              className: x,
              textClassName: g,
              titleClassName: y,
              subtitleClassName: w,
            } = e
          d[0] !== x
            ? ((t = (0, s.A)("flex w-full flex-col items-center gap-6", x)), (d[0] = x), (d[1] = t))
            : (t = d[1])
          let v = p ?? null
          return (
            d[2] !== g
              ? ((a = (0, s.A)("flex w-full flex-col items-center text-center", g)), (d[2] = g), (d[3] = a))
              : (a = d[3]),
            d[4] !== y
              ? ((o = (0, s.A)("text-heading-lg font-semibold text-default", y)), (d[4] = y), (d[5] = o))
              : (o = d[5]),
            d[6] !== o || d[7] !== m
              ? ((l = (0, n.jsx)("span", { className: o, children: m })), (d[6] = o), (d[7] = m), (d[8] = l))
              : (l = d[8]),
            d[9] !== f || d[10] !== w
              ? ((i =
                  null != f
                    ? (0, n.jsx)("span", {
                        className: (0, s.A)("text-lg leading-6 text-codex-description", w),
                        children: f,
                      })
                    : null),
                (d[9] = f),
                (d[10] = w),
                (d[11] = i))
              : (i = d[11]),
            d[12] !== a || d[13] !== l || d[14] !== i
              ? ((c = (0, n.jsxs)("div", { className: a, children: [l, i] })),
                (d[12] = a),
                (d[13] = l),
                (d[14] = i),
                (d[15] = c))
              : (c = d[15]),
            d[16] !== h || d[17] !== t || d[18] !== v || d[19] !== c
              ? ((u = (0, n.jsxs)("div", { className: t, children: [v, c, h] })),
                (d[16] = h),
                (d[17] = t),
                (d[18] = v),
                (d[19] = c),
                (d[20] = u))
              : (u = d[20]),
            u
          )
        },
        V7: function (e) {
          let t,
            a,
            l,
            i,
            c,
            d,
            h,
            p,
            m,
            f,
            x,
            g,
            y,
            w = (0, r.c)(47),
            {
              checkboxId: v,
              checked: _,
              disabled: k,
              onCheckedChange: b,
              control: C,
              label: j,
              description: M,
              leadingContent: A,
              trailingContent: I,
              trailingControl: S,
              controlPlacement: R,
              className: L,
              alignment: N,
              checkboxClassName: E,
              checkboxVariant: T,
              labelClassName: P,
              descriptionClassName: V,
              trailingClassName: q,
            } = e,
            W = void 0 !== k && k,
            H = void 0 === R ? "left" : R,
            D = void 0 === E ? u : E,
            B = null == C && null != v && null != _ && null != b
          w[0] !== D || w[1] !== v || w[2] !== T || w[3] !== _ || w[4] !== C || w[5] !== W || w[6] !== b || w[7] !== B
            ? ((t = B
                ? (0, n.jsx)(o.S, {
                    id: v,
                    className: D,
                    variant: T,
                    checked: _,
                    disabled: W,
                    onCheckedChange: (e) => {
                      b(e)
                    },
                  })
                : C),
              (w[0] = D),
              (w[1] = v),
              (w[2] = T),
              (w[3] = _),
              (w[4] = C),
              (w[5] = W),
              (w[6] = b),
              (w[7] = B),
              (w[8] = t))
            : (t = w[8])
          let U = t,
            z = "center" === (void 0 === N ? "start" : N) ? "items-center" : "items-start"
          ;(w[9] !== L || w[10] !== z
            ? ((a = (0, s.A)("relative flex gap-2 last:border-b-0", z, L)), (w[9] = L), (w[10] = z), (w[11] = a))
            : (a = w[11]),
            w[12] !== U || w[13] !== H
              ? ((l = "left" === H ? (0, n.jsx)("div", { children: U }) : null), (w[12] = U), (w[13] = H), (w[14] = l))
              : (l = w[14]),
            w[15] !== A
              ? ((i = null != A ? (0, n.jsx)("div", { children: A }) : null), (w[15] = A), (w[16] = i))
              : (i = w[16]))
          let G = B ? v : void 0
          return (
            w[17] !== P
              ? ((c = (0, s.A)("truncate text-base leading-5 text-default", P)), (w[17] = P), (w[18] = c))
              : (c = w[18]),
            w[19] !== j || w[20] !== c
              ? ((d = (0, n.jsx)("div", { className: c, children: j })), (w[19] = j), (w[20] = c), (w[21] = d))
              : (d = w[21]),
            w[22] !== M || w[23] !== V
              ? ((h =
                  null != M
                    ? (0, n.jsx)("div", {
                        className: (0, s.A)("truncate text-xs leading-4 text-secondary", V),
                        children: M,
                      })
                    : null),
                (w[22] = M),
                (w[23] = V),
                (w[24] = h))
              : (h = w[24]),
            w[25] !== d || w[26] !== h
              ? ((p = (0, n.jsxs)("div", { className: "min-w-0 flex-1", children: [d, h] })),
                (w[25] = d),
                (w[26] = h),
                (w[27] = p))
              : (p = w[27]),
            w[28] !== q || w[29] !== I
              ? ((m =
                  null != I
                    ? (0, n.jsx)("span", {
                        className: (0, s.A)(
                          "max-w-[45%] shrink truncate text-end text-sm leading-5 text-codex-description",
                          q,
                        ),
                        children: I,
                      })
                    : null),
                (w[28] = q),
                (w[29] = I),
                (w[30] = m))
              : (m = w[30]),
            w[31] !== G || w[32] !== p || w[33] !== m
              ? ((f = (0, n.jsxs)("label", {
                  className: "flex min-w-0 flex-1 items-start gap-2 text-start",
                  htmlFor: G,
                  children: [p, m],
                })),
                (w[31] = G),
                (w[32] = p),
                (w[33] = m),
                (w[34] = f))
              : (f = w[34]),
            w[35] !== S
              ? ((x = null != S ? (0, n.jsx)("div", { children: S }) : null), (w[35] = S), (w[36] = x))
              : (x = w[36]),
            w[37] !== U || w[38] !== H
              ? ((g = "right" === H ? (0, n.jsx)("div", { children: U }) : null), (w[37] = U), (w[38] = H), (w[39] = g))
              : (g = w[39]),
            w[40] !== f || w[41] !== x || w[42] !== g || w[43] !== a || w[44] !== l || w[45] !== i
              ? ((y = (0, n.jsxs)("div", { className: a, role: "listitem", children: [l, i, f, x, g] })),
                (w[40] = f),
                (w[41] = x),
                (w[42] = g),
                (w[43] = a),
                (w[44] = l),
                (w[45] = i),
                (w[46] = y))
              : (y = w[46]),
            y
          )
        },
        cI: function (e) {
          let t,
            a,
            o,
            u,
            d,
            h,
            p,
            m = (0, r.c)(19),
            { children: f, contentReady: x, fullBleed: g, hideHeader: y, showBrandIcon: w } = e,
            v = void 0 !== g && g,
            _ = void 0 !== w && w,
            { platform: k } = (0, l.V)(),
            b = !(void 0 !== y && y) && ("windows" !== k || v),
            C = void 0 === x || x ? c.sW : void 0
          return (
            m[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("div", {
                  className: "absolute inset-0 bg-surface-secondary electron:bg-transparent",
                })),
                (m[0] = t))
              : (t = m[0]),
            m[1] !== b || m[2] !== _
              ? ((a =
                  b && !_
                    ? (0, n.jsx)("div", { className: "fixed inset-x-0 top-0 z-10 h-toolbar-sm draggable select-none" })
                    : null),
                (m[1] = b),
                (m[2] = _),
                (m[3] = a))
              : (a = m[3]),
            m[4] !== _
              ? ((o = _
                  ? (0, n.jsx)("div", {
                      className:
                        "fixed inset-x-0 top-0 z-10 flex h-toolbar items-center justify-center bg-surface draggable select-none",
                      children: (0, n.jsx)(i.A, {
                        "aria-hidden": "true",
                        className: "pointer-events-none size-6 text-default",
                      }),
                    })
                  : null),
                (m[4] = _),
                (m[5] = o))
              : (o = m[5]),
            m[6] !== v || m[7] !== b
              ? ((u = v
                  ? "fixed inset-0"
                  : (0, s.A)(
                      "fixed inset-x-0 bottom-0 flex items-center justify-center px-6 pb-8",
                      b ? "top-toolbar-sm pt-2" : "top-0 pt-8",
                    )),
                (m[6] = v),
                (m[7] = b),
                (m[8] = u))
              : (u = m[8]),
            m[9] !== f || m[10] !== u
              ? ((d = (0, n.jsx)("div", { className: u, children: f })), (m[9] = f), (m[10] = u), (m[11] = d))
              : (d = m[11]),
            m[12] !== d || m[13] !== a || m[14] !== o
              ? ((h = (0, n.jsxs)(n.Fragment, { children: [a, o, d] })),
                (m[12] = d),
                (m[13] = a),
                (m[14] = o),
                (m[15] = h))
              : (h = m[15]),
            m[16] !== h || m[17] !== C
              ? ((p = (0, n.jsxs)("div", {
                  ref: C,
                  className: "fixed inset-0 zoom-adjusted-viewport overflow-hidden contain-layout select-none",
                  children: [t, h],
                })),
                (m[16] = h),
                (m[17] = C),
                (m[18] = p))
              : (p = m[18]),
            p
          )
        },
        ob: u,
        vp: function (e) {
          let t,
            a,
            o = (0, r.c)(6),
            { children: l, ariaLabel: i, className: c } = e
          return (
            o[0] !== c
              ? ((t = (0, s.A)(
                  "flex h-[240px] w-full flex-col overflow-y-auto rounded-2xl border border-default px-5 py-4",
                  c,
                )),
                (o[0] = c),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== i || o[3] !== l || o[4] !== t
              ? ((a = (0, n.jsx)("div", { className: t, role: "list", "aria-label": i, children: l })),
                (o[2] = i),
                (o[3] = l),
                (o[4] = t),
                (o[5] = a))
              : (a = o[5]),
            a
          )
        },
      },
    )
  },
  BdJk(e, t, a) {
    a.d(t, { l: () => u })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("ESTr")
    let o = (0, s.a)({
        name: "diamond-sparkle-fill-regular-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 0.507324, y: 1.916992, width: 14.984863, height: 12.557617 },
          visualBounds: { x: 0.507324, y: 1.916992, width: 14.984863, height: 12.557617 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 0.507324, y: 1.916992, width: 14.984863, height: 12.557617 },
          center: { x: 7.999756, y: 8.195801 },
          insets: { top: 1.916992, right: 0.507813, bottom: 1.525391, left: 0.507324 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 7.999756, y: 8.195801 },
            foreground: { x: 7.999756, y: 8.195801 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M10.479 1.91699C11.0025 1.91714 11.5074 2.11462 11.8921 2.46973L14.8217 5.1748C15.6911 5.97737 15.7189 7.34203 14.8823 8.17871L9.00143 14.0596C8.44831 14.6125 7.55171 14.6123 6.9985 14.0596L1.11764 8.17871C0.281029 7.3421 0.307981 5.97741 1.17721 5.1748L4.10788 2.46973C4.49267 2.11456 4.99731 1.91703 5.52096 1.91699H10.479ZM6.32956 4.41309C6.16988 4.41303 6.03536 4.53276 6.01706 4.69141C5.90276 5.68219 5.34369 6.24108 4.35299 6.35547C4.19444 6.37376 4.07475 6.50841 4.07467 6.66797C4.07484 6.82763 4.1944 6.96235 4.35299 6.98047C5.32988 7.09112 5.92799 7.64502 6.01608 8.63672C6.03049 8.79894 6.16673 8.92291 6.32956 8.92285C6.49249 8.92267 6.62898 8.79807 6.64303 8.63574C6.72775 7.65824 7.31975 7.06607 8.29733 6.98145C8.4595 6.9674 8.58402 6.83167 8.58444 6.66895C8.58462 6.50612 8.46044 6.37004 8.29831 6.35547C7.30675 6.26739 6.75282 5.66903 6.64206 4.69238C6.62407 4.53363 6.48933 4.41325 6.32956 4.41309Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      l = (0, s.a)({
        name: "diamond-sparkle-fill-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 1.265137, y: 4.083984, width: 29.46991, height: 24.614258 },
          visualBounds: { x: 1.265137, y: 4.083984, width: 29.46991, height: 24.614258 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.265137, y: 4.083984, width: 29.46991, height: 24.614258 },
          center: { x: 16.000092, y: 16.391113 },
          insets: { top: 4.083984, right: 1.264953, bottom: 3.301758, left: 1.265137 },
          anchors: {
            frame: { x: 16, y: 16 },
            ink: { x: 16.000092, y: 16.391113 },
            foreground: { x: 16.000092, y: 16.391113 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M20.9574 4.08398C21.9419 4.08407 22.8902 4.45529 23.6137 5.12305L29.475 10.5332C31.1093 12.042 31.161 14.6077 29.5883 16.1807L17.8266 27.9414C16.8178 28.9502 15.1821 28.9501 14.1732 27.9414L2.41249 16.1807C0.839585 14.6078 0.890426 12.0421 2.52479 10.5332L8.38612 5.12305C9.10952 4.45538 10.058 4.08406 11.0424 4.08398H20.9574ZM12.6596 8.82715C12.3402 8.82689 12.0713 9.06562 12.0346 9.38281C11.806 11.3647 10.6873 12.4833 8.70546 12.7119C8.38819 12.7485 8.14873 13.0176 8.14882 13.3369C8.14914 13.6563 8.38912 13.9248 8.70643 13.9609C10.6601 14.1822 11.8563 15.2903 12.0326 17.2734C12.0614 17.598 12.3338 17.8469 12.6596 17.8467C12.9854 17.8463 13.2574 17.5971 13.2855 17.2725C13.4548 15.3171 14.6398 14.1322 16.5951 13.9629C16.9194 13.9346 17.1687 13.6635 17.1693 13.3379C17.1697 13.012 16.9207 12.7398 16.5961 12.7109C14.6128 12.5347 13.505 11.3384 13.2836 9.38477C13.2476 9.06726 12.9791 8.82748 12.6596 8.82715Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var i = a("on57"),
      c = a("HOLv")
    function u(e) {
      let t,
        a,
        s,
        u = (0, r.c)(9),
        { size: d } = e,
        h = "response" === d && "size-5",
        p = "sm" === d && "size-6",
        m = "picker" === d && "size-12"
      u[0] !== h || u[1] !== p || u[2] !== m
        ? ((t = (0, i.A)(
            "flex shrink-0 items-center justify-center rounded-full bg-purple text-avatar-foreground",
            h,
            p,
            m,
          )),
          (u[0] = h),
          (u[1] = p),
          (u[2] = m),
          (u[3] = t))
        : (t = u[3])
      let f = "picker" === d ? l : o
      return (
        u[4] !== f ? ((a = (0, n.jsx)(c.I, { asset: f })), (u[4] = f), (u[5] = a)) : (a = u[5]),
        u[6] !== t || u[7] !== a
          ? ((s = (0, n.jsx)("span", { className: t, children: a })), (u[6] = t), (u[7] = a), (u[8] = s))
          : (s = u[8]),
        s
      )
    }
  },
  s9Qj(e, t, a) {
    var n = a("ABep"),
      r = a("QosV"),
      s = a("LhhH"),
      o = a("AWNZ"),
      l = a("BdJk")
    a.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            a,
            i,
            c,
            u = (0, r.c)(18),
            { name: d, identifier: h, imageUrl: p, description: m, personal: f, openRow: x, action: g } = e,
            y = void 0 !== x && x,
            w = !y,
            v = y ? "content" : "minimum",
            _ = y ? "row" : "sm"
          return (
            u[0] !== y || u[1] !== f
              ? ((t = f || y ? void 0 : (0, n.jsx)(l.l, { size: "sm" })), (u[0] = y), (u[1] = f), (u[2] = t))
              : (t = u[2]),
            u[3] !== p || u[4] !== d || u[5] !== _ || u[6] !== t
              ? ((a = (0, n.jsx)(s.e, { alt: "", size: _, fallback: t, name: d, src: p })),
                (u[3] = p),
                (u[4] = d),
                (u[5] = _),
                (u[6] = t),
                (u[7] = a))
              : (a = u[7]),
            u[8] !== m || u[9] !== h
              ? ((i =
                  null == h
                    ? m
                    : (0, n.jsxs)(n.Fragment, {
                        children: [h, null != m && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("br", {}), m] })],
                      })),
                (u[8] = m),
                (u[9] = h),
                (u[10] = i))
              : (i = u[10]),
            u[11] !== g || u[12] !== d || u[13] !== w || u[14] !== v || u[15] !== a || u[16] !== i
              ? ((c = (0, n.jsx)("div", {
                  role: "listitem",
                  children: (0, n.jsx)(o.ic, {
                    variant: "featured",
                    inset: w,
                    controlSizing: v,
                    icon: a,
                    label: d,
                    description: i,
                    control: g,
                  }),
                })),
                (u[11] = g),
                (u[12] = d),
                (u[13] = w),
                (u[14] = v),
                (u[15] = a),
                (u[16] = i),
                (u[17] = c))
              : (c = u[17]),
            c
          )
        },
      },
    )
  },
  LKHd(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "chat-bubbles-on-bubble-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.700439, y: 1.497803, width: 18.599609, height: 17.004883 },
        visualBounds: { x: 0.700439, y: 1.497803, width: 18.599609, height: 17.004883 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.700439, y: 1.497803, width: 18.599609, height: 17.004883 },
        center: { x: 10.000244, y: 10.000245 },
        insets: { top: 1.497803, right: 0.699952, bottom: 1.497314, left: 0.700439 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000244, y: 10.000245 },
          foreground: { x: 10.000244, y: 10.000245 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M13.0247 1.4978C16.4539 1.49806 19.3 4.13288 19.3 7.46167C19.3 8.63973 18.9387 9.73624 18.3215 10.658L18.8118 12.2283L18.8206 12.2566L18.8274 12.2859C18.9549 12.8769 18.4205 13.3978 17.8333 13.2576L17.8069 13.2517L17.7815 13.2429L16.0598 12.6785C15.2017 13.1302 14.2224 13.3949 13.1819 13.4197C12.732 16.3206 10.0963 18.5027 6.97583 18.5027C5.87647 18.5027 4.84201 18.2301 3.94067 17.7556L2.21899 18.3201L2.1936 18.3289L2.16724 18.3347C1.57985 18.4753 1.04562 17.9542 1.1731 17.363L1.17993 17.3337L1.18872 17.3054L1.67896 15.7351C1.06176 14.8134 0.700496 13.7169 0.700439 12.5388C0.700439 9.26089 3.45984 6.65696 6.8186 6.57788C7.27096 3.67671 9.90409 1.4978 13.0247 1.4978ZM6.97583 7.90503C4.20826 7.90503 2.03052 10.015 2.03052 12.5388C2.03058 13.4866 2.33519 14.3688 2.8606 15.1062C3.01579 15.3243 3.08306 15.6062 3.02271 15.8865L3.01685 15.9158L3.00708 15.9451L2.75708 16.7439L3.6897 16.4392L3.71606 16.4304L3.74243 16.4246C3.95926 16.3727 4.1795 16.3979 4.37134 16.4832L4.45239 16.5232L4.73462 16.6687C5.40612 16.9896 6.16689 17.1726 6.97583 17.1726C9.7433 17.1726 11.921 15.0625 11.9211 12.5388C11.9211 10.015 9.7434 7.90503 6.97583 7.90503ZM13.0247 2.82788C10.5496 2.82788 8.54236 4.51793 8.14868 6.67944C10.882 7.17239 13.0185 9.35595 13.2317 12.0886C13.9632 12.0602 14.6521 11.8849 15.2659 11.5916L15.5481 11.446L15.6292 11.406C15.8209 11.3209 16.0414 11.2956 16.2581 11.3474L16.2844 11.3533L16.3108 11.3621L17.2434 11.6667L16.9934 10.8679L16.9836 10.8386L16.9778 10.8093C16.9174 10.529 16.9847 10.2471 17.1399 10.0291C17.6652 9.29164 17.9699 8.4094 17.97 7.46167C17.97 4.93801 15.792 2.82813 13.0247 2.82788Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { D: n })
  },
}
//# sourceMappingURL=219125.8b7ce3311a.js.map
