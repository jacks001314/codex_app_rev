export const __rspack_esm_ids = [101248]
export const __webpack_modules__ = {
  IG5V(e, t, a) {
    var r = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, r.jsxs)("svg", {
          width: 357,
          height: 62,
          viewBox: "0 0 357 62",
          fill: "none",
          role: "img",
          focusable: "false",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, r.jsx)("title", { children: "ChatGPT" }),
            (0, r.jsx)("path", {
              d: "M30.8694 50.7428C19.9894 50.7428 12.4244 42.4978 12.4244 31.1078C12.4244 19.7178 19.9894 11.4728 30.6994 11.4728C38.5194 11.4728 44.5544 16.0628 46.3394 21.6728H58.4944C56.3694 9.43281 44.8944 0.507812 30.5294 0.507812C13.2744 0.507812 0.609375 14.1928 0.609375 31.1078C0.609375 48.0228 12.9344 61.7078 30.6144 61.7078C45.2344 61.7078 56.4544 52.9528 58.7494 40.5428H46.6794C44.6394 46.2378 38.6894 50.7428 30.8694 50.7428Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M88.586 17.5094C82.976 17.5094 78.556 19.9744 76.091 23.3744V1.35938H65.041V60.8594H76.091V37.9944C76.091 31.3644 79.661 27.0294 85.441 27.0294C90.711 27.0294 93.686 31.1094 93.686 36.8044V60.8594H104.736V35.0194C104.736 24.4794 98.276 17.5094 88.586 17.5094Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M150.04 33.1478C150.04 23.4578 143.41 17.5078 131.17 17.5078C121.14 17.5078 113.15 23.1178 111.79 31.2778H122.925C123.775 28.4728 126.835 26.2628 131.085 26.2628C136.61 26.2628 139.245 29.1528 139.245 34.1678V34.4228L128.45 35.3578C117.145 36.2928 110.855 40.8828 110.855 49.5528C110.855 56.8628 117.145 61.7078 125.9 61.7078C131.765 61.7078 137.46 59.4128 139.84 55.5878C139.84 57.4578 140.01 59.1578 140.35 60.8578H150.635C150.21 58.1378 150.04 54.9928 150.04 51.3378V33.1478ZM139.245 43.2628C139.245 48.2778 135.505 53.3778 127.94 53.3778C123.86 53.3778 121.65 51.4228 121.65 48.5328C121.65 45.3878 123.775 43.4328 128.535 43.0078L139.245 42.0728V43.2628Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M173.245 4.58984H162.195V18.3598H153.355V27.2848H162.195V48.1948C162.195 56.2698 166.36 60.8598 175.285 60.8598H184.125V51.6798H178.515C174.775 51.6798 173.245 50.4048 173.245 46.9198V27.2848H184.125V18.3598H173.245V4.58984Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M239.033 29.0678H219.993V38.5878H236.228C235.123 46.4928 227.728 51.2528 219.483 51.2528C207.583 51.2528 200.613 42.4978 200.613 31.1078C200.613 19.7178 208.433 11.3878 219.143 11.3878C226.453 11.3878 232.403 15.6378 233.933 20.3978H246.088C243.793 8.58281 232.913 0.507812 218.973 0.507812C201.803 0.507812 189.053 14.3628 189.053 31.1928C189.053 48.0228 200.783 61.7078 218.293 61.7078C226.283 61.7078 233.508 58.1378 236.738 53.2928V60.8578H246.598V36.6328C246.598 31.7878 243.878 29.0678 239.033 29.0678Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M281.703 1.35938H255.354V60.8594H266.573V38.5044H281.789C293.519 38.5044 301.849 31.6194 301.849 20.0594C301.849 8.49937 293.518 1.35938 281.703 1.35938ZM280.939 28.6444H266.573V11.5594H280.939C286.719 11.5594 290.458 14.8744 290.458 20.0594C290.458 25.2444 286.719 28.6444 280.939 28.6444Z",
              fill: "currentColor",
            }),
            (0, r.jsx)("path", {
              d: "M304.652 1.35938V11.5594H324.967V60.8594H336.187V11.5594H356.587V1.35938H304.652Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  dMvT(e, t, a) {
    var r = a("NwSQ"),
      s = a("DBCl"),
      i = a("T5JX"),
      n = a("Kwur"),
      o = a("ilGw")
    a.d(
      t,
      {},
      {
        M: async function ({
          accountId: e,
          requestBody: t,
          appearance: a,
          cancelUrl: c,
          purchaseAttemptId: l,
          signal: d,
          expectedIdentity: u,
          assertCurrent: m,
          isExpectedError: f,
        }) {
          ;(d.throwIfAborted(), m?.())
          let h = new URLSearchParams(window.location.search),
            p = (0, o.f)(h),
            [v, _] = await Promise.all([t, (0, i.Xn)("chatgpt_checkout")])
          ;(d.throwIfAborted(), m?.())
          let b = v.checkout_source ?? ("unknown" === p ? null : p),
            y = await n.Request.safePost("/payments/checkout", {
              additionalHeaders: { ..._, "ChatGPT-Account-ID": e, [s.zBc]: e },
              signal: d,
              expectedIdentity: u,
              assertRequestCurrent: m,
              isExpectedError: f,
              requestBody: { ...v, checkout_source: b, checkout_appearance: a, cancel_url: c, purchase_attempt_id: l },
            })
          return (
            d.throwIfAborted(),
            m?.(),
            "checkout_session_id" in y && (0, r.FU)(y.checkout_session_id, b, h.get("checkout_from")),
            y
          )
        },
      },
    )
  },
  fnSa(e, t, a) {
    a.d(t, { VeteransPromotionPage: () => R })
    var r = a("ABep"),
      s = a("QosV"),
      i = a("qmMi")
    a("zd8w")
    var n = a("oyxz"),
      o = a("SPnB")
    ;(a("UOa8"), a("OAko"))
    var c = a("Sm6l"),
      l = a("ZtSy")
    a("smwl")
    var d = a("OWtl")
    a("iPqE")
    var u = a("hZax")
    a("a6Zv")
    var m = a("DBCl"),
      f = a("ASxG"),
      h = a("Kwur"),
      p = a("laUo"),
      v = a("eShZ"),
      _ = a("B2b6"),
      b = a("heGF"),
      y = a("mBJV"),
      x = a("xL4V"),
      g = a("CLax"),
      w = a("dMvT"),
      j = a("yGJW")
    let C = (0, i.un)(
      d.u,
      ({ get: e }) => {
        let t = e(o.PO),
          a = e(o.chatGptAuthenticatedAccountId$),
          r = e(o.o8),
          s = e(o.Kw)
        return !t.authLoading &&
          "chatgpt" === t.authMethod &&
          !0 === t.hasChatGptToken &&
          e(o.MS) &&
          null != a &&
          null != r &&
          null != s
          ? { accountId: a, userId: r, accountUserId: s }
          : null
      },
      {
        isEqual: (e, t) =>
          e?.accountId === t?.accountId && e?.userId === t?.userId && e?.accountUserId === t?.accountUserId,
      },
    )
    function A(e, t) {
      let a = e.get(C)
      return a?.accountId === t.accountId && a.userId === t.userId && a.accountUserId === t.accountUserId
    }
    var I = a("uDXB")
    let q = {
      logDisabledAccess(e) {
        I.Q.count("students", "veterans.web.disabled", { reason: e })
      },
      logLandingPageImpression() {
        I.Q.count("students", "veterans.web.landingPageImpression", {})
      },
      logClickLoginButton(e) {
        I.Q.count("students", "veterans.web.clickLoginButton", { key: "source", value: e })
      },
      logClickVerifyButton(e) {
        I.Q.count("students", "veterans.web.clickVerifyButton", { key: "source", value: e })
      },
      logClickCheckoutButton(e) {
        I.Q.count("students", "veterans.web.clickCheckoutButton", { key: "source", value: e })
      },
      logError(e) {
        I.Q.count("students", "veterans.web.error", { key: "errorType", value: e })
      },
    }
    function N(e, t) {
      return e?.account.account_id !== t.accountId ||
        e.account.account_user_id !== t.accountUserId ||
        "personal" !== e.account.structure ||
        e.account.is_deactivated
        ? "account"
        : e.entitlement.has_active_subscription &&
            null != (0, p.q8)(e.last_active_subscription.purchase_origin_platform)
          ? "mobile-subscription"
          : e.entitlement.is_delinquent || e.sso_connection_name || !1 === e.can_access_with_session
            ? "disqualified"
            : null
    }
    async function M(e, t, a) {
      ;(a(), await e.query.cancel(g.sE, t.accountId), a())
      let r = await e.queryClient.fetchQuery({ ...e.query.getOptions(g.sE, t.accountId), staleTime: 0, retry: !1 })
      return (a(), r.accounts[t.accountId])
    }
    function P(e) {
      if (
        !0 === e.verificationBlockedByAccount ||
        e.metadata?.can_retry === !1 ||
        e.metadata?.attempts_remaining === 0 ||
        e.metadata?.block_reason === "provider_user_uuid_conflict"
      )
        return !1
      switch (e.name) {
        case "ineligible":
          return e.metadata?.can_retry === !0
        case "needs-verification":
        case "error":
        case "needs-service-end-date":
          return !0
        case "disqualified":
        case "enrolled":
        case "loading":
        case "mobile-subscription":
        case "verified":
          return !1
      }
    }
    let S = new Set([
        "service_end_date_out_of_window",
        "provider_user_uuid_conflict",
        "military_subgroup_not_eligible",
      ]),
      k = f.Ikc({
        metadata: f
          .Ikc({
            verification_id: f.YjP().refine((e) => "" !== e.trim()),
            verification_status: f.k5n(["none", "pending", "verified", "enrolled", "ineligible", "error"]),
            program_id: f.YjP(),
            military_subgroup: f.YjP().nullable().optional(),
            service_end_date: f.YjP().nullable().optional(),
            promo_expires_at: f.YjP().nullable().optional(),
            block_reason: f.YjP().nullable().optional(),
            requires_service_end_date_input: f.zMY().optional(),
            can_retry: f.zMY().optional(),
            attempts_remaining: f.aig().int().nonnegative().optional(),
          })
          .nullable()
          .optional(),
      })
    ;(0, i.A4)(
      d.u,
      (e) => null,
      (e, { get: t, scope: a, set: r }) => {
        let s = t(C)
        if (
          s?.accountId !== e.identity.accountId ||
          s.userId !== e.identity.userId ||
          s.accountUserId !== e.identity.accountUserId
        )
          return void r(null)
        let i = !1,
          n = null,
          o = { name: "loading" },
          c = null,
          l = null,
          d = () => !i && A(a, e.identity),
          f = {
            additionalHeaders: { "ChatGPT-Account-ID": e.identity.accountId, [m.zBc]: e.identity.accountId },
            expectedIdentity: e.identity,
          },
          g = () => {
            d() &&
              r({
                state: o,
                error: c,
                isMutating: "mutation" === l,
                isRefreshing: "refresh" === l,
                refresh: E,
                createVerification: T,
                resetVerification: H,
                submitServiceEndDate: R,
                claim: G,
              })
          }
        async function I(e, t, a, r, s) {
          let i
          if (!d() || null != l) return a
          let u = new AbortController()
          ;((n = u), (l = e), (c = null), g())
          let m = () => {
              if ((u.signal.throwIfAborted(), !d()))
                throw new DOMException("Veterans enrollment account changed", "AbortError")
            },
            f = setTimeout(() => u.abort(), 3e4),
            h = new Promise((e, t) => {
              ;((i = () => t(new DOMException("Veterans request canceled", "AbortError"))),
                u.signal.addEventListener("abort", i, { once: !0 }))
            })
          try {
            let e = await Promise.race([s(u.signal, m), h])
            return (m(), e)
          } catch (s) {
            if (!d()) return a
            if (
              ((c = s instanceof v.FetchError && 429 === s.status ? "rate-limit" : t),
              ("verification" === t || "service-end-date" === t) &&
                q.logError("verification" === t ? "verification" : "submitServiceEndDate"),
              "verification" === t && s instanceof v.FetchError && 409 === s.status)
            )
              try {
                ;(await Promise.race([V(u.signal, m), h]), m(), (c = "verification-unavailable"))
              } catch {
                if (!d()) return a
                ;((c = "refresh"), (o = { name: "error" }))
              }
            else "refresh" === e && (o = { name: "error" })
            return r
          } finally {
            ;(clearTimeout(f),
              null != i && u.signal.removeEventListener("abort", i),
              n === u && ((n = null), (l = null), g()))
          }
        }
        async function V(t, r) {
          r()
          let [s, i] = await Promise.all([
            h.Request.safePost("/veterans/refresh_enrollment_status", {
              ...f,
              signal: t,
              assertRequestCurrent: r,
              retry: "never",
            }),
            M(a, e.identity, r),
          ])
          return (
            r(),
            k.parse(s),
            (o = (function (e, t, a) {
              let r = N(t, a)
              if ("account" === r) return { name: "disqualified" }
              if (
                e?.verification_status === "ineligible" ||
                (e?.verification_status === "error" && S.has(e.block_reason ?? ""))
              )
                return { name: "ineligible", metadata: e, verificationBlockedByAccount: null != r }
              if ("mobile-subscription" === r)
                return {
                  name: "mobile-subscription",
                  store: (0, p.q8)(t?.last_active_subscription.purchase_origin_platform) ?? void 0,
                  metadata: e,
                  disabledReason: "mobile_subscription",
                }
              if ("disqualified" === r)
                return t?.entitlement.is_delinquent
                  ? { name: "disqualified", metadata: e, disabledReason: "delinquent" }
                  : t?.sso_connection_name
                    ? { name: "disqualified", metadata: e, disabledReason: "sso" }
                    : { name: "disqualified", metadata: e }
              if (e?.requires_service_end_date_input) return { name: "needs-service-end-date", metadata: e }
              switch (e?.verification_status) {
                case "verified":
                case "enrolled":
                case "error":
                  return { name: e.verification_status, metadata: e }
                case void 0:
                case "none":
                case "pending":
                  return { name: "needs-verification", metadata: e }
              }
            })(s.metadata ?? null, i, e.identity)),
            g(),
            o
          )
        }
        async function E() {
          await I("refresh", "refresh", void 0, void 0, async (e, t) => {
            await V(e, t)
          })
        }
        async function T(e) {
          return I("mutation", "verification", { status: "canceled" }, { status: "error" }, async (t, a) => {
            var r
            if (!("needs-service-end-date" !== (r = await V(t, a)).name && P(r))) return { status: "blocked" }
            let s = { ...f, signal: t, assertRequestCurrent: a, retry: "never" }
            e?.restart && (await h.Request.safePost("/veterans/reset_verification", s), a())
            let i = await h.Request.safePost("/veterans/create_verification", {
              ...s,
              requestBody: { program_id: "690415d58971e73ca187d8c9" },
            })
            if ((a(), !i.redirect_url?.trim())) throw Error("Missing ID.me redirect URL")
            let n = new URL(i.redirect_url)
            if ("https:" !== n.protocol || "" !== n.username || "" !== n.password)
              throw Error("Invalid ID.me redirect URL")
            return { status: "created", redirectUrl: n.href }
          })
        }
        async function H() {
          await I("mutation", "verification", void 0, void 0, async (e, t) => {
            P(await V(e, t)) &&
              (await h.Request.safePost("/veterans/reset_verification", {
                ...f,
                signal: e,
                assertRequestCurrent: t,
                retry: "never",
              }),
              t(),
              await V(e, t))
          })
        }
        async function R(e) {
          await I("mutation", "service-end-date", void 0, void 0, async (t, a) => {
            "needs-service-end-date" === (await V(t, a)).name &&
              (await h.Request.safePost("/veterans/submit_service_end_date", {
                ...f,
                signal: t,
                assertRequestCurrent: a,
                retry: "never",
                requestBody: { service_end_date: e },
              }),
              a(),
              await V(t, a))
          })
        }
        async function G(t) {
          return I("mutation", "claim", { status: "canceled" }, { status: "error" }, async (r, s) => {
            let i = await V(r, s)
            if ("verified" !== i.name || null == i.metadata) return { status: "blocked" }
            let n = await (async function (
              e,
              {
                identity: t,
                metadata: a,
                signal: r,
                appearance: s,
                statsig: i,
                purchaseAttemptId: n,
                getBillingDetails: o,
              },
            ) {
              let c = () => {
                if ((r.throwIfAborted(), !A(e, t)))
                  throw new DOMException("Veterans claim account changed", "AbortError")
              }
              if (
                (c(),
                "verified" !== a.verification_status || !a.verification_id.trim() || a.requires_service_end_date_input)
              )
                return { status: "blocked" }
              let l = await M(e, t, c)
              if (null == l || null != N(l, t)) return { status: "blocked" }
              if ("plus" === l.account.plan_type && l.entitlement.has_active_subscription) {
                try {
                  await h.Request.safePost("/veterans/apply_discount", {
                    additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [m.zBc]: t.accountId },
                    expectedIdentity: t,
                    assertRequestCurrent: c,
                    signal: r,
                    retry: "never",
                    requestBody: { account_id: t.accountId },
                  })
                } catch (e) {
                  throw (c(), q.logError("applyDiscount"), e)
                }
                return (c(), { status: "applied" })
              }
              let d = await o()
              if ((c(), null == d)) return (q.logError("checkout"), { status: "error" })
              ;(0, j.yy)(e, y.gPu, {
                metricValue: "plus",
                entryPoint: "CHATGPT_PAYMENT_UPGRADE_ENTRY_POINT_VETERANS_CHECKOUT",
              })
              let f = {
                entry_point: b.Ki.REFERRAL_REDIRECT,
                plan_name: "chatgptplusplan",
                billing_details: d,
                veterans_verification_id: a.verification_id,
              }
              f.checkout_ui_mode = (0, _.kc)(f, {
                isServerOwnedModeEnabled: () => i.checkGate("2065253865"),
                isCustomModeEnabled: (e) => (0, u.XM)(i, "3950229590").get(e, !0),
              })
              let p = await (0, w.M)({
                accountId: t.accountId,
                requestBody: f,
                appearance: s,
                cancelUrl: new URL("/veterans-claim", window.location.origin).href,
                purchaseAttemptId: n,
                signal: r,
                expectedIdentity: t,
                assertCurrent: c,
              }).catch((e) => {
                throw (c(), q.logError("checkout"), e)
              })
              return (
                c(),
                (0, j.yy)(e, x.I1, {
                  actionType: "CHATGPT_PRICING_CHECKOUT_ACTION_TYPE_PREPARED",
                  selectedPlan: "plus",
                  checkoutId:
                    "checkout_session_id" in p ? p.checkout_session_id : p.url?.match(/cs_[A-Za-z0-9_]+/)?.[0],
                }),
                { status: "checkout", session: p, request: f }
              )
            })(a, { ...t, identity: e.identity, metadata: i.metadata, signal: r })
            return (
              s(),
              "applied" === n.status
                ? (o = { name: "enrolled", metadata: { ...i.metadata, verification_status: "enrolled" } })
                : "error" === n.status
                  ? (c = "claim")
                  : "blocked" === n.status && (await V(r, s)),
              n
            )
          })
        }
        return (
          g(),
          E(),
          () => {
            ;((i = !0), n?.abort(), r(null))
          }
        )
      },
      { autoDispose: !0 },
    )
    var V = a("IG5V")
    function E(e) {
      let t,
        a,
        i,
        o,
        l,
        d,
        u,
        m,
        f,
        h,
        p,
        v,
        _,
        b,
        y,
        x,
        g,
        w,
        j,
        C,
        A,
        I,
        q,
        N,
        M,
        P,
        S,
        k,
        E,
        T,
        R,
        G,
        B,
        D,
        U = (0, s.c)(40),
        { children: L, reset: z, busy: O } = e,
        Z = void 0 !== O && O
      return (
        U[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(V.A, { className: "h-5 w-auto", "aria-hidden": "true" })), (U[0] = t))
          : (t = U[0]),
        U[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)("header", {
              className: "border-b border-default px-6 py-4",
              children: (0, r.jsx)("div", {
                className: "mx-auto max-w-5xl",
                children: (0, r.jsxs)(c.z, {
                  color: "ghostSubtle",
                  size: "dialogGhost",
                  to: "/",
                  children: [
                    t,
                    (0, r.jsx)("span", {
                      className: "sr-only",
                      children: (0, r.jsx)(n.A, { id: "veterans.promotion.home", defaultMessage: "ChatGPT" }),
                    }),
                  ],
                }),
              }),
            })),
            (U[1] = a))
          : (a = U[1]),
        U[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)("h1", {
              className: "text-2xl font-semibold",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.title",
                defaultMessage: "Get one year of ChatGPT Plus free for transitioning military members",
              }),
            })),
            (U[2] = i))
          : (i = U[2]),
        U[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, r.jsx)("p", {
              className: "text-base text-secondary",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.description",
                defaultMessage:
                  "Offer valid for veterans, service members, or retirees who transitioned within the past year or will transition within the next year",
              }),
            })),
            (U[3] = o))
          : (o = U[3]),
        U[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.terms",
                defaultMessage: "See the <terms>offer terms</terms> for eligibility and details",
                values: { terms: H },
              }),
            })),
            (U[4] = l))
          : (l = U[4]),
        U[5] !== L
          ? ((d = (0, r.jsxs)("section", { className: "flex flex-col gap-4", children: [i, o, L, l] })),
            (U[5] = L),
            (U[6] = d))
          : (d = U[6]),
        U[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)("h2", {
              className: "text-xl font-semibold",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefits.title",
                defaultMessage: "ChatGPT Plus for your next mission",
              }),
            })),
            (U[7] = u))
          : (u = U[7]),
        U[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)("p", {
              className: "text-secondary",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefits.description",
                defaultMessage:
                  "Get increased file uploads, expanded messaging limits, advanced voice mode, deep research, and more with Plus",
              }),
            })),
            (U[8] = m))
          : (m = U[8]),
        U[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)("dt", {
              className: "font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefit.docs.title",
                defaultMessage: "Summarize docs",
              }),
            })),
            (U[9] = f))
          : (f = U[9]),
        U[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                f,
                (0, r.jsx)("dd", {
                  className: "text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.benefit.docs.body",
                    defaultMessage:
                      "Upload dozens of docs, PDFs, and images and ask ChatGPT for a content summary or a quiz",
                  }),
                }),
              ],
            })),
            (U[10] = h))
          : (h = U[10]),
        U[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)("dt", {
              className: "font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefit.research.title",
                defaultMessage: "Research assistance",
              }),
            })),
            (U[11] = p))
          : (p = U[11]),
        U[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                p,
                (0, r.jsx)("dd", {
                  className: "text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.benefit.research.body",
                    defaultMessage:
                      "Ask ChatGPT to do detailed online research that helps you deliver a well-cited report",
                  }),
                }),
              ],
            })),
            (U[12] = v))
          : (v = U[12]),
        U[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, r.jsx)("dt", {
              className: "font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefit.writing.title",
                defaultMessage: "Writing help",
              }),
            })),
            (U[13] = _))
          : (_ = U[13]),
        U[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                _,
                (0, r.jsx)("dd", {
                  className: "text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.benefit.writing.body",
                    defaultMessage: "Brainstorm ideas with ChatGPT and get edits and writing tips",
                  }),
                }),
              ],
            })),
            (U[14] = b))
          : (b = U[14]),
        U[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)("dt", {
              className: "font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefit.images.title",
                defaultMessage: "Image creation",
              }),
            })),
            (U[15] = y))
          : (y = U[15]),
        U[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                y,
                (0, r.jsx)("dd", {
                  className: "text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.benefit.images.body",
                    defaultMessage:
                      "Create images and videos for your presentations and reports, or for your own creative projects",
                  }),
                }),
              ],
            })),
            (U[16] = x))
          : (x = U[16]),
        U[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)("dt", {
              className: "font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.benefit.conversation.title",
                defaultMessage: "Real-time conversations",
              }),
            })),
            (U[17] = g))
          : (g = U[17]),
        U[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsxs)("section", {
              className: "flex flex-col gap-4 border-t border-default pt-8",
              children: [
                u,
                m,
                (0, r.jsxs)("dl", {
                  className: "grid gap-4 sm:grid-cols-2",
                  children: [
                    h,
                    v,
                    b,
                    x,
                    (0, r.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        g,
                        (0, r.jsx)("dd", {
                          className: "text-secondary",
                          children: (0, r.jsx)(n.A, {
                            id: "veterans.promotion.benefit.conversation.body",
                            defaultMessage:
                              "Practice speaking foreign languages or prepare for interviews with longer real-time conversations in ChatGPT",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (U[18] = w))
          : (w = U[18]),
        U[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, r.jsx)("h2", {
              className: "text-xl font-semibold",
              children: (0, r.jsx)(n.A, { id: "veterans.promotion.faq.title", defaultMessage: "FAQs" }),
            })),
            (U[19] = j))
          : (j = U[19]),
        U[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, r.jsx)("summary", {
              className: "cursor-interaction font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.faq.veteran.question",
                defaultMessage: "Am I eligible as a veteran?",
              }),
            })),
            (U[20] = C))
          : (C = U[20]),
        U[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, r.jsxs)("details", {
              className: "border-b border-default pb-4",
              children: [
                C,
                (0, r.jsx)("p", {
                  className: "pt-3 text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.faq.veteran.answer",
                    defaultMessage:
                      "Veterans who have discharged from active duty service within the last 12 months are eligible for this offer. Specific requirements vary by program. See the <terms>offer terms</terms> for more information.",
                    values: { terms: H },
                  }),
                }),
              ],
            })),
            (U[21] = A))
          : (A = U[21]),
        U[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, r.jsx)("summary", {
              className: "cursor-interaction font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.faq.retiree.question",
                defaultMessage: "Am I eligible as a retiree?",
              }),
            })),
            (U[22] = I))
          : (I = U[22]),
        U[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, r.jsxs)("details", {
              className: "border-b border-default pb-4",
              children: [
                I,
                (0, r.jsx)("p", {
                  className: "pt-3 text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.faq.retiree.answer",
                    defaultMessage:
                      "Retirees who have discharged from active duty service within the last 12 months are eligible for this offer. Specific requirements vary by program. See the <terms>offer terms</terms> for more information.",
                    values: { terms: H },
                  }),
                }),
              ],
            })),
            (U[23] = q))
          : (q = U[23]),
        U[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, r.jsx)("summary", {
              className: "cursor-interaction font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.faq.active.question",
                defaultMessage: "Am I eligible on active duty?",
              }),
            })),
            (U[24] = N))
          : (N = U[24]),
        U[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, r.jsxs)("details", {
              className: "border-b border-default pb-4",
              children: [
                N,
                (0, r.jsx)("p", {
                  className: "pt-3 text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.faq.active.answer",
                    defaultMessage:
                      "Active duty service members who are within 12 months of their discharge date are eligible for this offer. Specific requirements vary by program. See the <terms>offer terms</terms> for more information.",
                    values: { terms: H },
                  }),
                }),
              ],
            })),
            (U[25] = M))
          : (M = U[25]),
        U[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, r.jsx)("summary", {
              className: "cursor-interaction font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.faq.verification.question",
                defaultMessage: "How do you know I\u2019m eligible?",
              }),
            })),
            (U[26] = P))
          : (P = U[26]),
        U[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsxs)("details", {
              className: "border-b border-default pb-4",
              children: [
                P,
                (0, r.jsx)("p", {
                  className: "pt-3 text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.faq.verification.answer",
                    defaultMessage:
                      "We verify eligibility using ID.me\u2019s secure verification system, which verifies your military status through multiple methods",
                  }),
                }),
              ],
            })),
            (U[27] = S))
          : (S = U[27]),
        U[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, r.jsx)("summary", {
              className: "cursor-interaction font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.faq.plus.question",
                defaultMessage: "I already have ChatGPT Plus. How do I get this offer?",
              }),
            })),
            (U[28] = k))
          : (k = U[28]),
        U[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, r.jsxs)("details", {
              className: "border-b border-default pb-4",
              children: [
                k,
                (0, r.jsx)("p", {
                  className: "pt-3 text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.faq.plus.answer",
                    defaultMessage:
                      "Existing ChatGPT Plus users can access this offer by verifying eligibility through ID.me. Once verified, select Claim offer to apply the free year to your account.",
                  }),
                }),
              ],
            })),
            (U[29] = E))
          : (E = U[29]),
        U[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, r.jsx)("summary", {
              className: "cursor-interaction font-medium",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.faq.mobile.question",
                defaultMessage: "What if I have a subscription through Apple or Google Play?",
              }),
            })),
            (U[30] = T))
          : (T = U[30]),
        U[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, r.jsxs)("details", {
              className: "border-b border-default pb-4",
              children: [
                T,
                (0, r.jsx)("p", {
                  className: "pt-3 text-secondary",
                  children: (0, r.jsx)(n.A, {
                    id: "veterans.promotion.faq.mobile.answer",
                    defaultMessage:
                      "This offer cannot be claimed while you have an active subscription with the Apple App Store or Google Play. To claim the offer, cancel your mobile subscription and wait until it expires, then return to this page. You can then redeem through verification with ID.me.",
                  }),
                }),
              ],
            })),
            (U[31] = R))
          : (R = U[31]),
        U[32] !== Z || U[33] !== z
          ? ((G =
              null != z
                ? (0, r.jsxs)("details", {
                    className: "border-b border-default pb-4",
                    children: [
                      (0, r.jsx)("summary", {
                        className: "cursor-interaction font-medium",
                        children: (0, r.jsx)(n.A, {
                          id: "veterans.promotion.faq.restart.question",
                          defaultMessage: "How do I restart verification?",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-col items-start gap-3 pt-3",
                        children: [
                          (0, r.jsx)("p", {
                            className: "text-secondary",
                            children: (0, r.jsx)(n.A, {
                              id: "veterans.promotion.faq.restart.answer",
                              defaultMessage:
                                "If you need to update your information or have trouble with ID.me, you can restart the verification process",
                            }),
                          }),
                          (0, r.jsx)(c.$, {
                            size: "onboardingAction",
                            color: "outlineSurface",
                            disabled: Z,
                            onClick: z,
                            children: (0, r.jsx)(n.A, {
                              id: "veterans.promotion.restart",
                              defaultMessage: "Restart verification",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (U[32] = Z),
            (U[33] = z),
            (U[34] = G))
          : (G = U[34]),
        U[35] !== G
          ? ((B = (0, r.jsxs)("section", {
              className: "flex flex-col gap-4 border-t border-default pt-8",
              children: [j, A, q, M, S, E, R, G],
            })),
            (U[35] = G),
            (U[36] = B))
          : (B = U[36]),
        U[37] !== B || U[38] !== d
          ? ((D = (0, r.jsxs)("div", {
              className: "min-h-svh overflow-y-auto bg-surface text-default",
              children: [
                a,
                (0, r.jsxs)("main", {
                  className: "mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-8",
                  children: [d, w, B],
                }),
              ],
            })),
            (U[37] = B),
            (U[38] = d),
            (U[39] = D))
          : (D = U[39]),
        D
      )
    }
    function T(e) {
      let t,
        a,
        i = (0, s.c)(5),
        { title: n, children: o } = e
      return (
        i[0] !== n
          ? ((t = (0, r.jsx)("h2", { className: "text-xl font-semibold", "aria-live": "polite", children: n })),
            (i[0] = n),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== o || i[3] !== t
          ? ((a = (0, r.jsxs)("section", {
              className: "flex flex-col items-start gap-4 rounded-xl border border-default p-6",
              children: [t, o],
            })),
            (i[2] = o),
            (i[3] = t),
            (i[4] = a))
          : (a = i[4]),
        a
      )
    }
    function H(e) {
      return (0, r.jsx)(
        l.G,
        {
          appearance: "primary",
          underline: "always",
          href: "https://help.openai.com/en/articles/12803158-chatgpt-plus-for-servicemembers-veterans-terms-of-service",
          initiator: "external_link",
          openAsWebsite: !0,
          children: e,
        },
        "terms",
      )
    }
    function R() {
      let e,
        t,
        a,
        i = (0, s.c)(3)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(n.A, {
              id: "veterans.promotion.browser.title",
              defaultMessage: "Continue in your browser",
            })),
            (i[0] = e))
          : (e = i[0]),
        i[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)("p", {
              className: "text-secondary",
              children: (0, r.jsx)(n.A, {
                id: "veterans.promotion.browser.body",
                defaultMessage: "Verify your military status and claim your offer on the ChatGPT website",
              }),
            })),
            (i[1] = t))
          : (t = i[1]),
        i[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsxs)(r.Fragment, {
              children: [
                null,
                (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(E, {
                    children: (0, r.jsxs)(T, {
                      title: e,
                      children: [
                        t,
                        (0, r.jsx)(l.G, {
                          appearance: "primary",
                          underline: "always",
                          href: "https://chatgpt.com/veterans-claim",
                          initiator: "external_link",
                          openAsWebsite: !0,
                          children: (0, r.jsx)(n.A, {
                            id: "veterans.promotion.browser.link",
                            defaultMessage: "Open veterans offer",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })),
            (i[2] = a))
          : (a = i[2]),
        a
      )
    }
    ;(a("zLIa"), a.p)
  },
}
//# sourceMappingURL=101248.28fff59425.js.map
