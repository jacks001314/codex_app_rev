export const __rspack_esm_ids = [893175]
export const __webpack_modules__ = {
  FTY8(e, i, s) {
    var t = s("ABep"),
      a = s("QosV"),
      n = s("mBJV"),
      l = s("EOWL"),
      r = s("CWP0"),
      o = s("qmMi"),
      c = s("zd8w"),
      d = s("oyxz"),
      u = s("SPnB"),
      f = s("Kwur"),
      h = s("MM0V"),
      m = s("Sm6l"),
      p = s("ZtSy"),
      g = s("HOLv"),
      x = s("AKNp"),
      v = s("yGJW"),
      y = s("OWtl"),
      b = s("hZax"),
      w = s("rvFo"),
      j = s("a6Zv"),
      A = s("f0dk")
    let _ = {
        invite_sent: "business_hub_invite_admins",
        claim_pending: "business_hub_claim_pending",
        claim_verified: "business_hub_claim_verified",
      },
      S = "https://chatgpt.com/team-sign-up",
      C = (0, o.vU)(y.u, (e) => ({
        queryKey: ["offer-configuration", e],
        queryFn: ({ signal: i }) => f.Request.safeGet("/v1/offer-configuration", { expectedIdentity: e, signal: i }),
        staleTime: w.D.FIVE_MINUTES,
        retry: !1,
      }))
    function M(e) {
      let i,
        s,
        u,
        f,
        w,
        M,
        P,
        k,
        N,
        B,
        D,
        I,
        T,
        E,
        V = (0, a.c)(34),
        { identity: R, placement: F } = e,
        U = (0, o.gh)(y.u),
        G = (0, b.cn)(),
        O = (0, j.Y)(),
        z = _[F],
        L = !G.isLoading && (0, x.ku)(G, z),
        W = (0, o._U)(L ? C : null, R),
        q = W?.isSuccess === !0 && W.data.offer?.id === "chatgptteamplan"
      V[0] !== U || V[1] !== z
        ? ((i = (e) => {
            ;(0, v.yy)(U, n.Yvh, {
              action: e,
              sourceLocation: z,
              ctaVariant: "CHATGPT_SUBSCRIPTION_UPSELL_CTA_VARIANT_TRY_BUSINESS",
              ctaTargetPlan: "CHATGPT_SUBSCRIPTION_UPSELL_CTA_TARGET_PLAN_TEAM",
            })
          }),
          (V[0] = U),
          (V[1] = z),
          (V[2] = i))
        : (i = V[2])
      let H = i
      V[3] !== H ? ((s = () => H("CHATGPT_SUBSCRIPTION_UPSELL_ACTION_PRESENTED")), (V[3] = H), (V[4] = s)) : (s = V[4])
      let $ = (0, c.useEffectEvent)(s)
      V[5] !== R || V[6] !== F || V[7] !== q
        ? ((u = q ? JSON.stringify([R.accountId, R.userId, F]) : null), (V[5] = R), (V[6] = F), (V[7] = q), (V[8] = u))
        : (u = V[8])
      let Y = u,
        K = (0, c.useRef)(null)
      if (
        (V[9] !== $ || V[10] !== Y
          ? ((f = () => {
              ;(null != Y && K.current !== Y && $(), (K.current = Y))
            }),
            (V[9] = $),
            (V[10] = Y),
            (V[11] = f))
          : (f = V[11]),
        V[12] !== Y ? ((w = [Y]), (V[12] = Y), (V[13] = w)) : (w = V[13]),
        (0, c.useEffect)(f, w),
        !q)
      )
        return null
      V[14] !== H
        ? ((M = () => H("CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED")), (V[14] = H), (V[15] = M))
        : (M = V[15])
      let Q = M
      if ("claim_verified" === F) {
        let e, i, s
        return (
          V[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(d.A, {
                id: "businessProfiles.claimSuccess.businessPlan",
                defaultMessage: "Upgrade to a ChatGPT Business plan",
              })),
              (i = (0, t.jsx)(d.A, {
                id: "businessProfiles.claimSuccess.businessPlanSubtitle",
                defaultMessage: "Work with your team and manage billing in a secure workspace.",
              })),
              (V[16] = e),
              (V[17] = i))
            : ((e = V[16]), (i = V[17])),
          V[18] !== Q
            ? ((s = (0, t.jsx)(A.Oj, { href: S, onActivate: Q, title: e, subtitle: i })), (V[18] = Q), (V[19] = s))
            : (s = V[19]),
          s
        )
      }
      let Z = O ? l.C : r.K
      return (
        V[20] !== Z
          ? ((P = (0, t.jsx)(g.I, { asset: Z, className: "size-8 shrink-0" })), (V[20] = Z), (V[21] = P))
          : (P = V[21]),
        V[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, t.jsx)("h3", {
              className: "font-medium text-default",
              children: (0, t.jsx)(d.A, {
                id: "businessProfiles.members.businessUpsell.title",
                defaultMessage: "Doing work as a team?",
              }),
            })),
            (V[22] = k))
          : (k = V[22]),
        V[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, t.jsxs)("div", {
              className: "min-w-0",
              children: [
                k,
                (0, t.jsx)("p", {
                  className: "mt-1 text-secondary",
                  children: (0, t.jsx)(d.A, {
                    id: "businessProfiles.members.businessUpsell.description",
                    defaultMessage: "Switch to ChatGPT Business to share company context and tools.",
                  }),
                }),
              ],
            })),
            (V[23] = N))
          : (N = V[23]),
        V[24] !== P
          ? ((B = (0, t.jsxs)("div", {
              className: "flex min-w-0 flex-1 basis-52 items-center gap-4",
              children: [P, N],
            })),
            (V[24] = P),
            (V[25] = B))
          : (B = V[25]),
        V[26] !== Q
          ? ((D = (e) =>
              (0, t.jsx)(p.G, {
                ...e,
                appearance: "button",
                href: S,
                initiator: "external_link",
                openTarget: "external-browser",
                onActivate: Q,
              })),
            (V[26] = Q),
            (V[27] = D))
          : (D = V[27]),
        V[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, t.jsx)(d.A, {
              id: "businessProfiles.members.businessUpsell.cta",
              defaultMessage: "Try Business",
            })),
            (V[28] = I))
          : (I = V[28]),
        V[29] !== D
          ? ((T = (0, t.jsx)(m.z, {
              color: "primary",
              size: "dialogAction",
              radius: "full",
              href: S,
              renderLink: D,
              children: I,
            })),
            (V[29] = D),
            (V[30] = T))
          : (T = V[30]),
        V[31] !== B || V[32] !== T
          ? ((E = (0, t.jsx)(h.l, {
              variant: "insetNotice",
              content: (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [B, T] }),
            })),
            (V[31] = B),
            (V[32] = T),
            (V[33] = E))
          : (E = V[33]),
        E
      )
    }
    s.d(
      i,
      {},
      {
        D: function (e) {
          let i,
            s = (0, a.c)(5),
            { placement: n } = e,
            l = (0, o.Ul)(u.MS),
            r = (0, o.Ul)(u.chatGptAuthenticatedAccountId$),
            c = (0, o.Ul)(u.chatGptAuthenticatedUserId$)
          return (
            s[0] !== r || s[1] !== l || s[2] !== n || s[3] !== c
              ? ((i =
                  l && null != r && null != c
                    ? (0, t.jsx)(M, { identity: { accountId: r, userId: c }, placement: n })
                    : null),
                (s[0] = r),
                (s[1] = l),
                (s[2] = n),
                (s[3] = c),
                (s[4] = i))
              : (i = s[4]),
            i
          )
        },
      },
    )
  },
  Ctl0(e, i, s) {
    s.d(i, { pi: () => em, BusinessClaimFlowWithRecovery: () => eh, PV: () => er.PV })
    var t = s("ABep"),
      a = s("QosV"),
      n = s("IVLR"),
      l = s("v7Fs"),
      r = s("XmbV"),
      o = s("DzNl"),
      c = s("DDFX"),
      d = s("OHqq"),
      u = s("irkb"),
      f = s("T0Rc"),
      h = s("wYVE"),
      m = s("on57"),
      p = s("qmMi"),
      g = s("zd8w"),
      x = s("oyxz"),
      v = s("Wf1j"),
      y = s("Ywss"),
      b = s("ASxG"),
      w = s("BaOq"),
      j = s("Sm6l"),
      A = s("JNtf"),
      _ = s("mUDD"),
      S = s("HOLv"),
      C = s("bVeK"),
      M = s("RNul"),
      P = s("XcNx"),
      k = s("OWtl"),
      N = s("eShZ"),
      B = s("iC84"),
      D = s("TjJt"),
      I = s("viaZ"),
      T = s("HTR2"),
      E = s("zCGz"),
      V = s("FTY8"),
      R = s("Qsgo")
    function F(e) {
      let i,
        s = (0, a.c)(11),
        { step: n, name: l } = e
      if ("method" === n) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(x.A, {
                id: "businessProfiles.dispute.connection.title",
                defaultMessage: "Verify your connection to this business",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("persona" === n) {
        let e
        return (
          s[1] !== l
            ? ((e = (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.dispute.persona.title",
                defaultMessage: "Verify that you\u2019re authorized to manage {name}",
                values: { name: l },
              })),
              (s[1] = l),
              (s[2] = e))
            : (e = s[2]),
          e
        )
      }
      if ("review" === n) {
        let e
        return (
          s[3] !== l
            ? ((e = (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.dispute.review.title",
                defaultMessage: "We\u2019re reviewing your dispute for {name}",
                values: { name: l },
              })),
              (s[3] = l),
              (s[4] = e))
            : (e = s[4]),
          e
        )
      }
      if ("cancelled" === n) {
        let e
        return (
          s[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(x.A, {
                id: "businessProfiles.dispute.withdrawn.title",
                defaultMessage: "Your dispute has been withdrawn",
              })),
              (s[5] = e))
            : (e = s[5]),
          e
        )
      }
      if ("failed" === n) {
        let e
        return (
          s[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.dispute.failed.title",
                defaultMessage: "This dispute could not be approved",
              })),
              (s[6] = e))
            : (e = s[6]),
          e
        )
      }
      if ("success" === n) {
        let e
        return (
          s[7] !== l
            ? ((e = (0, t.jsx)(x.A, {
                id: "businessProfiles.dispute.approved.title",
                defaultMessage: "Your dispute for {name} has been approved",
                values: { name: l },
              })),
              (s[7] = l),
              (s[8] = e))
            : (e = s[8]),
          e
        )
      }
      return (
        s[9] !== l
          ? ((i = (0, t.jsx)(x.A, {
              id: "chatgpt.localBusiness.dispute.account.title",
              defaultMessage: "Dispute ownership of {name}",
              values: { name: l },
            })),
            (s[9] = l),
            (s[10] = i))
          : (i = s[10]),
        i
      )
    }
    function U(e) {
      let i,
        s,
        n,
        l,
        r = (0, a.c)(5),
        { name: o } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, t.jsx)("p", {
              children: (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.dispute.persona.requirements",
                defaultMessage: "You may need:",
              }),
            })),
            (r[0] = i))
          : (i = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)("li", {
              children: (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.dispute.persona.id",
                defaultMessage: "Government-issued ID",
              }),
            })),
            (n = (0, t.jsx)("li", {
              children: (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.dispute.persona.registration",
                defaultMessage: "Business registration information",
              }),
            })),
            (r[1] = s),
            (r[2] = n))
          : ((s = r[1]), (n = r[2])),
        r[3] !== o
          ? ((l = (0, t.jsxs)(t.Fragment, {
              children: [
                i,
                (0, t.jsxs)("ul", {
                  className: "list-disc ps-6",
                  children: [
                    s,
                    n,
                    (0, t.jsx)("li", {
                      children: (0, t.jsx)(x.A, {
                        id: "chatgpt.localBusiness.dispute.persona.authorization",
                        defaultMessage: "Proof that you\u2019re authorized to represent {name}",
                        values: { name: o },
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (r[3] = o),
            (r[4] = l))
          : (l = r[4]),
        l
      )
    }
    var G = s("py8O"),
      O = s("v7Di"),
      z = s("LhV4"),
      L = s("Sr1T"),
      W = s("kArL"),
      q = s("bKwc"),
      H = s("AW7I"),
      $ = s("A1JU"),
      Y = s("kSYk"),
      K = s("M05Q"),
      Q = s("z2PK"),
      Z = s("fi0l"),
      J = s("u9lE"),
      X = s("uAf3"),
      ee = s("nhlW"),
      ei = s("R8Ag")
    function es(e) {
      let i,
        s,
        n,
        l = (0, a.c)(9),
        { verification: r, dispute: o } = e
      return (
        l[0] !== o || l[1] !== r?.test_override
          ? ((i =
              r?.test_override &&
              (0, t.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: o
                  ? (0, t.jsx)(x.A, {
                      id: "chatgpt.localBusiness.dispute.dns.testOverride",
                      defaultMessage:
                        "Internal DNS test: this uses a real DNS lookup with test inputs. It does not prove ownership of this business.",
                    })
                  : (0, t.jsx)(x.A, {
                      id: "chatgpt.localBusiness.claim.dns.test_override",
                      defaultMessage:
                        "Internal DNS test: this uses a real DNS lookup with test inputs. It does not prove ownership of this business. Production claims require review; staging can complete the test claim.",
                    }),
              })),
            (l[0] = o),
            (l[1] = r?.test_override),
            (l[2] = i))
          : (i = l[2]),
        l[3] !== o || l[4] !== r?.status
          ? ((s =
              r?.status === "passed" &&
              (0, t.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: o
                  ? (0, t.jsx)(x.A, {
                      id: "chatgpt.localBusiness.dispute.dns.ready",
                      defaultMessage: "Your DNS record is verified. Finish this step to continue your dispute.",
                    })
                  : (0, t.jsx)(x.A, {
                      id: "chatgpt.localBusiness.claim.dns.ready",
                      defaultMessage: "Your DNS record is verified. Finish verification to complete your claim.",
                    }),
              })),
            (l[3] = o),
            (l[4] = r?.status),
            (l[5] = s))
          : (s = l[5]),
        l[6] !== i || l[7] !== s
          ? ((n = (0, t.jsxs)(t.Fragment, { children: [i, s] })), (l[6] = i), (l[7] = s), (l[8] = n))
          : (n = l[8]),
        n
      )
    }
    function et(e) {
      let i,
        s,
        n,
        l = (0, a.c)(6),
        { telemetry: r } = e,
        o = (0, p.gh)(k.u),
        c = r?.lastError ?? "unknown"
      return (
        l[0] !== c || l[1] !== o || l[2] !== r
          ? ((i = () => {
              let e = (0, ei.dA)(o, r, "domain", c)
              return () => {
                ;(e(), (0, ei.dA)(o, r, "domain", void 0)())
              }
            }),
            (s = [o, r, c]),
            (l[0] = c),
            (l[1] = o),
            (l[2] = r),
            (l[3] = i),
            (l[4] = s))
          : ((i = l[3]), (s = l[4])),
        (0, g.useEffect)(i, s),
        l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)(x.A, {
              id: "chatgpt.localBusiness.claim.error.request",
              defaultMessage: "Something went wrong. Please try again.",
            })),
            (l[5] = n))
          : (n = l[5]),
        n
      )
    }
    var ea = s("Qgfj")
    let en = (0, ea.YK)({
        shopifyDesktop: {
          id: "chatgpt.localBusiness.claim.shopify.webOnly.body",
          defaultMessage: "Finish this Shopify verification in the ChatGPT browser tab where you started",
        },
        shopifyOriginalTab: {
          id: "businessProfiles.claim.shopify.browser.originalTab",
          defaultMessage:
            "Finish verification in the browser tab where you started Shopify verification, using the same ChatGPT account",
        },
        shopifyTitle: {
          id: "businessProfiles.claim.shopify.browser.title",
          defaultMessage: "Verify your claim with Shopify",
        },
        phoneAttemptEnded: {
          id: "chatgpt.localBusiness.claim.phoneAttemptUnavailable",
          defaultMessage: "This phone verification attempt has ended without completing your claim",
        },
        saveProgressDescription: {
          id: "businessProfiles.claim.saveProgress.description",
          defaultMessage:
            "You can finish claiming {name} later. If you discard your progress, you\u2019ll need to start over.",
        },
        withdrawTitle: { id: "chatgpt.localBusiness.claim.cancel.title", defaultMessage: "Cancel your claim?" },
        withdrawDescription: {
          id: "businessProfiles.claim.cancel.businessDescription",
          defaultMessage: "If you decide to claim {name} again, you\u2019ll need to start over.",
        },
        withdrawError: {
          id: "chatgpt.localBusiness.claim.error.cancel",
          defaultMessage: "We couldn\u2019t withdraw your claim. Please try again",
        },
        withdrawConfirm: { id: "chatgpt.localBusiness.claim.cancel.confirm", defaultMessage: "Yes, cancel claim" },
        shopifyRecovery: {
          id: "businessProfiles.claim.shopify.error.changed",
          defaultMessage: "Shopify verification has changed or may have expired",
        },
      }),
      el = (0, ea.YK)({
        shopifyDesktop: {
          id: "businessProfiles.dispute.shopify.desktopInstructions",
          defaultMessage: "Finish this Shopify verification in the ChatGPT browser tab where you started",
        },
        shopifyOriginalTab: {
          id: "businessProfiles.dispute.shopify.originalTab",
          defaultMessage:
            "Finish verification in the browser tab where you started Shopify verification, using the same ChatGPT account",
        },
        shopifyTitle: {
          id: "businessProfiles.dispute.shopify.title",
          defaultMessage: "Verify your connection to this business with Shopify",
        },
        phoneAttemptEnded: {
          id: "businessProfiles.dispute.phoneAttemptEnded",
          defaultMessage: "This phone verification attempt has ended",
        },
        saveProgressDescription: {
          id: "businessProfiles.dispute.saveProgress.description",
          defaultMessage:
            "You can finish disputing {name} later. If you discard your progress, you\u2019ll need to start over.",
        },
        withdrawTitle: { id: "businessProfiles.dispute.withdraw.title", defaultMessage: "Cancel your dispute?" },
        withdrawDescription: {
          id: "businessProfiles.dispute.cancel.businessDescription",
          defaultMessage: "If you decide to dispute {name} again, you\u2019ll need to start over.",
        },
        withdrawError: {
          id: "businessProfiles.dispute.withdraw.error",
          defaultMessage: "We couldn\u2019t withdraw your dispute. Please try again",
        },
        withdrawConfirm: { id: "businessProfiles.dispute.withdraw.confirm", defaultMessage: "Yes, cancel dispute" },
        shopifyRecovery: {
          id: "businessProfiles.dispute.shopify.restart",
          defaultMessage: "Shopify verification has changed or may have expired",
        },
      })
    var er = s("IYwh"),
      eo = s("V8St"),
      ec = s("JB4k"),
      ed = s("f0dk")
    let eu = "Phone verification is not available."
    function ef(e) {
      let i,
        s,
        n,
        l = (0, a.c)(9),
        { profileId: r, onClose: o } = e,
        c = (0, p.gh)(k.u),
        d = (0, y.Zp)(),
        [u] = (0, y.ok)()
      return (
        l[0] !== d || l[1] !== o || l[2] !== u || l[3] !== r || l[4] !== c
          ? ((i = () => {
              let e = new URLSearchParams({ claim: r }),
                i = (0, D.dk)(u)
              ;(null != i && e.set("flow_id", i), o(), (0, L.$)(c, d, `${B.CM}?${e}`))
            }),
            (l[0] = d),
            (l[1] = o),
            (l[2] = u),
            (l[3] = r),
            (l[4] = c),
            (l[5] = i))
          : (i = l[5]),
        l[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)(x.A, { id: "businessProfiles.claim.failed.retry", defaultMessage: "Try again" })),
            (l[6] = s))
          : (s = l[6]),
        l[7] !== i
          ? ((n = (0, t.jsx)(j.$, { type: "button", color: "primary", size: "formAction", onClick: i, children: s })),
            (l[7] = i),
            (l[8] = n))
          : (n = l[8]),
        n
      )
    }
    function eh(e) {
      let i,
        s = (0, a.c)(2)
      return (
        s[0] !== e
          ? ((i = (0, t.jsx)(T.b, { claim: !0, children: (0, t.jsx)(em, { ...e }) })), (s[0] = e), (s[1] = i))
          : (i = s[1]),
        i
      )
    }
    function em(e) {
      let i,
        s,
        y,
        B,
        D,
        T,
        L,
        ea,
        eh,
        em,
        eA,
        e_,
        eS,
        eC,
        eM,
        eP,
        ek,
        eN,
        eB,
        eD,
        eI,
        eT,
        eE,
        eV,
        eR,
        eF,
        eU,
        eG,
        eO,
        ez,
        eL,
        eW,
        eq,
        eH,
        e$,
        eY,
        eK,
        eQ,
        eZ,
        eJ,
        eX,
        e0,
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e8,
        e7,
        e9,
        ie,
        ii,
        is,
        it,
        ia,
        il,
        ir,
        io,
        ic,
        id,
        iu,
        ih,
        im,
        ip,
        ig,
        ix,
        iv,
        iy,
        ib,
        iw,
        ij,
        iA,
        i_,
        iS,
        iC,
        iM,
        iP,
        ik,
        iN,
        iB,
        iD,
        iI,
        iT,
        iE,
        iV,
        iR,
        iF = (0, a.c)(588),
        {
          flowType: iU,
          creationMatchDispute: iG,
          business: iO,
          verificationPhoneHint: iz,
          businessPreview: iL,
          previewStatus: iW,
          actions: iq,
          initialStep: iH,
          initialPreparation: i$,
          openingSavedRequest: iY,
          telemetryJourney: iK,
          onClose: iQ,
          onRedeemClaim: iZ,
          onBackToMatchPicker: iJ,
        } = e,
        iX = void 0 !== iG && iG,
        i0 = void 0 !== iY && iY,
        i1 = (0, p.gh)(k.u),
        i2 = null != (0, p.Ul)(I.Zv)
      iF[0] !== i1
        ? ((i = function () {
            if (null != i1.get(I.Zv)) throw new DOMException("Business profile authentication required", "AbortError")
          }),
          (iF[0] = i1),
          (iF[1] = i))
        : (i = iF[1])
      let i3 = i,
        i4 = "dispute" === (void 0 === iU ? "claim" : iU),
        i5 = i4 ? el : en,
        i6 = iz ?? iO.phone,
        i8 = i4 ? void 0 : iK
      iF[2] !== iQ || iF[3] !== i1 || iF[4] !== i8
        ? ((s = () => {
            ;((0, ei.wj)(i1, i8), iQ())
          }),
          (iF[2] = iQ),
          (iF[3] = i1),
          (iF[4] = i8),
          (iF[5] = s))
        : (s = iF[5])
      let i7 = s,
        { email: i9 } = iq,
        se = "preparing" in iq ? void 0 : iq
      iF[6] !== se ? ((y = se ?? {}), (iF[6] = se), (iF[7] = y)) : (y = iF[7])
      let {
          onStartVerification: si,
          onChangeVerificationMethod: ss,
          onPrepareMethodPicker: st,
          onStartEmailVerification: sa,
          onSendEmailCode: sn,
          onPrepareVerification: sl,
          onCheckDomain: sr,
          onResumeClaim: so,
          onCheckClaim: sc,
          onCancelClaim: sd,
          onManageProfile: su,
        } = y,
        sf = (0, v.A)(),
        [sh, sm] = (0, g.useState)(null),
        sp = (0, P.x)({ browser: !0 }),
        [sg, sx] = (0, g.useState)(null),
        sv = (0, g.useId)(),
        sy = i$?.step ?? (void 0 === iH ? "account" : iH),
        [sb, sw] = (0, g.useState)(sy)
      iF[8] !== i$ || iF[9] !== sb ? ((B = i$ ?? { step: sb }), (iF[8] = i$), (iF[9] = sb), (iF[10] = B)) : (B = iF[10])
      let sj = i4 && (null != i$ || !so)
      iF[11] !== B || iF[12] !== sj ? ((D = ey(B, sj)), (iF[11] = B), (iF[12] = sj), (iF[13] = D)) : (D = iF[13])
      let [sA, s_] = (0, g.useState)(D),
        [sS, sC] = (0, g.useState)(i$?.disputeAccessVerification),
        [sM, sP] = (0, g.useState)(i$?.claimDomain !== void 0 ? i$.claimDomain : i$?.domainVerification?.domain),
        [sk, sN] = (0, g.useState)(i$?.shopifyShopDomain),
        [sB, sD] = (0, g.useState)(
          i$?.method ?? ("domain" === sy ? "domain" : (i$?.eligibleMethods?.[0] ?? (i6 ? "phone" : "domain"))),
        ),
        [sI, sT] = (0, g.useState)(i$?.eligibleMethods),
        [sE, sV] = (0, g.useState)(i$?.emailDestination),
        sR = sI?.includes("phone") ?? !!i6
      iF[14] !== sI || iF[15] !== sE || iF[16] !== sn || iF[17] !== sa
        ? ((T = sI?.includes("email") === !0 && !!sE && !!sa && !!sn),
          (iF[14] = sI),
          (iF[15] = sE),
          (iF[16] = sn),
          (iF[17] = sa),
          (iF[18] = T))
        : (T = iF[18])
      let sF = T,
        sU = (sI?.includes("domain") ?? !0) && !!sM,
        [sG, sO] = (0, g.useState)(),
        [sz, sL] = (0, g.useState)(i$?.domainVerification),
        [sW, sq] = (0, g.useState)(i$?.personaVerification),
        [sH] = (0, g.useState)(w.Pr),
        [s$, sY] = (0, g.useState)(i$?.delivery)
      iF[19] !== i$?.availableDeliveries
        ? ((L = i$?.availableDeliveries ?? ["sms", "call"]), (iF[19] = i$?.availableDeliveries), (iF[20] = L))
        : (L = iF[20])
      let [sK, sQ] = (0, g.useState)(L),
        [sZ, sJ] = (0, g.useState)(i$?.destination),
        [sX, s0] = (0, g.useState)("")
      iF[21] === Symbol.for("react.memo_cache_sentinel") ? ((ea = []), (iF[21] = ea)) : (ea = iF[21])
      let [s1, s2] = (0, g.useState)(ea),
        [s3, s4] = (0, g.useState)(),
        [s5, s6] = (0, g.useState)(null),
        [s8, s7] = (0, g.useState)(),
        [s9, te] = (0, g.useState)(),
        [ti, ts] = (0, g.useState)(!1),
        [tt, ta] = (0, g.useState)(!1)
      ;(iF[22] !== ta
        ? ((eh = () => {
            let e = (e) => {
              e.persisted && ta(!1)
            }
            return (window.addEventListener("pageshow", e), () => window.removeEventListener("pageshow", e))
          }),
          (iF[22] = ta),
          (iF[23] = eh))
        : (eh = iF[23]),
        iF[24] === Symbol.for("react.memo_cache_sentinel") ? ((em = []), (iF[24] = em)) : (em = iF[24]),
        (0, g.useEffect)(eh, em),
        iF[25] !== ta || iF[26] !== tt
          ? ((eA = () => {
              if (!tt) return
              let e = window.setTimeout(() => ta(!1), 3e4),
                i = () => window.clearTimeout(e)
              return (
                window.addEventListener("pagehide", i, { once: !0 }),
                () => {
                  ;(i(), window.removeEventListener("pagehide", i))
                }
              )
            }),
            (iF[25] = ta),
            (iF[26] = tt),
            (iF[27] = eA))
          : (eA = iF[27]),
        iF[28] !== tt ? ((e_ = [tt]), (iF[28] = tt), (iF[29] = e_)) : (e_ = iF[29]),
        (0, g.useEffect)(eA, e_))
      let tn = (0, g.useRef)(!1),
        tl = (0, g.useRef)(0),
        tr = (0, g.useRef)(void 0)
      ;(iF[30] !== te
        ? ((eS = () => () => {
            ;((tl.current = tl.current + 1), te(void 0))
          }),
          (iF[30] = te),
          (iF[31] = eS))
        : (eS = iF[31]),
        iF[32] !== sd || iF[33] !== sc || iF[34] !== sl || iF[35] !== sn || iF[36] !== sa || iF[37] !== si
          ? ((eC = [sc, sl, si, sa, sn, sd]),
            (iF[32] = sd),
            (iF[33] = sc),
            (iF[34] = sl),
            (iF[35] = sn),
            (iF[36] = sa),
            (iF[37] = si),
            (iF[38] = eC))
          : (eC = iF[38]),
        (0, g.useLayoutEffect)(eS, eC))
      let [to, tc] = (0, g.useState)(ev)
      iF[39] !== i$?.resendAvailableAt
        ? ((eM = Date.parse(i$?.resendAvailableAt ?? "") || 0), (iF[39] = i$?.resendAvailableAt), (iF[40] = eM))
        : (eM = iF[40])
      let [td, tu] = (0, g.useState)(eM),
        [tf, th] = (0, g.useState)(ex),
        [tm, tp] = (0, g.useState)(null),
        tg = "withdraw" === tm,
        tx = "leave" === tm,
        [tv, ty] = (0, g.useState)(!1),
        tb = (0, g.useRef)(null),
        tw = (0, g.useRef)(null),
        [tj, tA] = (0, g.useState)(i$?.phoneAttemptUnavailable === !0)
      iF[41] !== tj || iF[42] !== i4 || iF[43] !== sb || iF[44] !== sA
        ? ((eP = (!i4 || sA) && (ew(sb) || ("delivery" === sb && tj))),
          (iF[41] = tj),
          (iF[42] = i4),
          (iF[43] = sb),
          (iF[44] = sA),
          (iF[45] = eP))
        : (eP = iF[45])
      let t_ = eP,
        [tS, tC] = (0, g.useState)(i$?.verificationIssue),
        tM = (0, u.jE)()
      iF[46] !== i4 || iF[47] !== sy || iF[48] !== i$?.strongVerification || iF[49] !== so
        ? ((ek =
            null != so &&
            (i$?.strongVerification === !0 ||
              ["pending", "in_progress", "needs_information", "persona"].includes(sy) ||
              (i4 && "review" === sy))),
          (iF[46] = i4),
          (iF[47] = sy),
          (iF[48] = i$?.strongVerification),
          (iF[49] = so),
          (iF[50] = ek))
        : (ek = iF[50])
      let tP = (0, g.useRef)(ek),
        tk = (0, g.useRef)(null),
        tN = (0, g.useRef)(i$)
      iF[51] !== sv ? ((eN = ["business-claim-preview", sv]), (iF[51] = sv), (iF[52] = eN)) : (eN = iF[52])
      let tB = eN
      iF[53] !== i3 || iF[54] !== sn
        ? ((eB = async function (e) {
            i3()
            let i = e.destination ?? e.emailDestination
            return "email" === e.method &&
              "delivery" === e.step &&
              null == e.verificationIssue &&
              (0, n.P$)(e.resendAvailableAt, Date.now()).available &&
              i &&
              sn &&
              tr.current !== i
              ? ((tr.current = i), (await sn(e.verificationId)) ?? e)
              : e
          }),
          (iF[53] = i3),
          (iF[54] = sn),
          (iF[55] = eB))
        : (eB = iF[55])
      let tD = eB
      ;(iF[56] !== i3 || iF[57] !== tD || iF[58] !== sc || iF[59] !== so || iF[60] !== tM || iF[61] !== tB
        ? ((eD = async (e) => {
            let { signal: i } = e
            if ((i.throwIfAborted(), i3(), tN.current?.method === "email" && "delivery" === tN.current.step)) {
              let e = tN.current
              return (await Promise.resolve(), i.throwIfAborted(), i3(), (tN.current = void 0), tD(e))
            }
            let s = (e) => {
              ;(i.throwIfAborted(), i3(), (tP.current = !1), tM.setQueryData(tB, e))
            }
            if (tP.current && so) {
              let e = await so(void 0, s)
              return (i.throwIfAborted(), (tP.current = !1), tD(e))
            }
            let t = await (sc?.(s) ?? { step: "review" })
            return (i.throwIfAborted(),
            tk.current && "persona" === t.step && eb(t.personaVerification?.verification_url) === tk.current.id)
              ? tk.current.receipt
              : ((tk.current = null), t)
          }),
          (iF[56] = i3),
          (iF[57] = tD),
          (iF[58] = sc),
          (iF[59] = so),
          (iF[60] = tM),
          (iF[61] = tB),
          (iF[62] = eD))
        : (eD = iF[62]),
        iF[63] !== s1 ||
        iF[64] !== tm ||
        iF[65] !== i$ ||
        iF[66] !== sc ||
        iF[67] !== ti ||
        iF[68] !== t_ ||
        iF[69] !== i2 ||
        iF[70] !== tt ||
        iF[71] !== sb
          ? ((eI = (e) =>
              !i2 &&
              !(e.state.data?.strongVerification && e.state.data.pauseStatusPolling) &&
              ((t_ && null != sc) || ("delivery" === sb && i$?.method === "email" && "delivery" === i$.step)) &&
              (0 === s1.length || e.state.data?.step === "review") &&
              null == tm &&
              !ti &&
              !tt),
            (iF[63] = s1),
            (iF[64] = tm),
            (iF[65] = i$),
            (iF[66] = sc),
            (iF[67] = ti),
            (iF[68] = t_),
            (iF[69] = i2),
            (iF[70] = tt),
            (iF[71] = sb),
            (iF[72] = eI))
          : (eI = iF[72]),
        iF[73] !== i0
          ? ((eT = (e) =>
              !(i0 && null == e.state.data && "error" === e.state.status) && !e.state.data?.pauseStatusPolling),
            (iF[73] = i0),
            (iF[74] = eT))
          : (eT = iF[74]),
        iF[75] !== to || iF[76] !== i2
          ? ((eE = (e) => {
              let { state: i } = e,
                { data: s, status: t } = i
              return (
                !(
                  i2 ||
                  "error" === t ||
                  s?.pauseStatusPolling ||
                  s?.verificationIssue != null ||
                  (s?.step === "delivery_pending" && Date.now() >= to)
                ) &&
                (null == s || !!ew(s.step) || !!s.phoneAttemptUnavailable) &&
                3e3
              )
            }),
            (iF[75] = to),
            (iF[76] = i2),
            (iF[77] = eE))
          : (eE = iF[77]),
        iF[78] !== tM || iF[79] !== i1 || iF[80] !== tB
          ? ((eV = (e, i) =>
              null == i1.get(I.Zv) &&
              e < 2 &&
              !tM.getQueryData(tB)?.strongVerification &&
              ((0, H.isTransientRequestError)(i) || (tP.current && i instanceof N.FetchError && 409 === i.status))),
            (iF[78] = tM),
            (iF[79] = i1),
            (iF[80] = tB),
            (iF[81] = eV))
          : (eV = iF[81]),
        iF[82] !== tB || iF[83] !== eD || iF[84] !== eI || iF[85] !== eT || iF[86] !== eE || iF[87] !== eV
          ? ((eR = {
              queryKey: tB,
              queryFn: eD,
              enabled: eI,
              staleTime: 0,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: eT,
              refetchInterval: eE,
              retry: eV,
            }),
            (iF[82] = tB),
            (iF[83] = eD),
            (iF[84] = eI),
            (iF[85] = eT),
            (iF[86] = eE),
            (iF[87] = eV),
            (iF[88] = eR))
          : (eR = iF[88]))
      let { data: tI, isError: tT, isFetching: tE, refetch: tV } = (0, f.I)(eR),
        tR = (t_ || ("delivery" === sb && "email" === sB)) && null == tm ? tI : void 0,
        tF = tR?.step ?? sb
      iF[89] !== i4 || iF[90] !== tR || iF[91] !== sA
        ? ((eF = tR ? ey(tR, i4) : sA), (iF[89] = i4), (iF[90] = tR), (iF[91] = sA), (iF[92] = eF))
        : (eF = iF[92])
      let tU = eF
      iF[93] !== s1 || iF[94] !== tU || iF[95] !== tF
        ? ((eU = tU && "review" !== tF ? s1.at(-1) : void 0),
          (iF[93] = s1),
          (iF[94] = tU),
          (iF[95] = tF),
          (iF[96] = eU))
        : (eU = iF[96])
      let tG = eU,
        tO = tI ?? i$,
        tz = tG ?? tF,
        tL = "method" === tG && null != s3,
        tW = tU && !tL,
        tq = tR?.disputeAccessVerification ?? sS,
        tH = i4 && null != tq,
        t$ = tR?.shopifyShopDomain ?? sk,
        tY = (sI?.includes("shopify") ?? !0) && sp && null != t$ && null != si
      iF[97] !== sI || iF[98] !== si || iF[99] !== tH
        ? ((eG = !tH && sI?.includes("persona") === !0 && null != si),
          (iF[97] = sI),
          (iF[98] = si),
          (iF[99] = tH),
          (iF[100] = eG))
        : (eG = iF[100])
      let tK = { phone: sR, email: sF, domain: sU, persona: eG, shopify: tY },
        tQ =
          "method" !== tz || tU || tK[sB]
            ? sB
            : (["shopify", "phone", "email", "persona", "domain"].find((e) => tK[e]) ?? sB)
      iF[101] !== i4 || iF[102] !== sA || iF[103] !== tz
        ? ((eO = (!i4 || sA) && ew(tz)), (iF[101] = i4), (iF[102] = sA), (iF[103] = tz), (iF[104] = eO))
        : (eO = iF[104])
      let tZ = eO,
        tJ = tR?.domainVerification ?? sz,
        tX = tR ? tR.personaVerification : sW,
        t0 = i4 || null != so,
        t1 = t0 ? sv : tX?.verification_url,
        t2 = tR?.destination ?? sZ
      iF[105] !== tm || iF[106] !== tO?.strongVerification || iF[107] !== tG || iF[108] !== tz
        ? ((ez = tO?.strongVerification === !0 && ew(tz) && null == tG && !tm),
          (iF[105] = tm),
          (iF[106] = tO?.strongVerification),
          (iF[107] = tG),
          (iF[108] = tz),
          (iF[109] = ez))
        : (ez = iF[109])
      let t3 = ez,
        t4 = tO?.retryClaimProfileId,
        t5 = !i4 && "failed" === tz && tO?.industryIneligible,
        t6 = tJ?.domain ?? sM,
        t8 = tO?.method === "email" ? void 0 : tO?.destination,
        t7 = tR?.method ?? tQ,
        t9 = "email" === t7,
        ae = "code" === tz || "delivery_pending" === tz
      t9 && ae ? (eL = "code") : t9 && "delivery" === tz && (eL = "delivery_pending")
      let ai = (null == sI ? sH?.phoneNumber : void 0) ?? t2 ?? i6,
        as = tR?.availableDeliveries ?? sK,
        at = "delivery" === tG ? (tR?.delivery ?? s$ ?? "sms") : (s$ ?? tR?.delivery ?? "sms"),
        aa = tR ? !0 === tR.phoneAttemptUnavailable : tj,
        an = "delivery" !== tz || aa || null != tG ? void 0 : as
      iF[110] !== at || iF[111] !== an
        ? ((eW = an && !an.includes(at) ? (an[0] ?? at) : at), (iF[110] = at), (iF[111] = an), (iF[112] = eW))
        : (eW = iF[112])
      let al = eW
      iF[113] !== tO?.failedPhoneVerification || iF[114] !== tG
        ? ((eq = null == tG ? (0, $.z)(tO?.failedPhoneVerification) : void 0),
          (iF[113] = tO?.failedPhoneVerification),
          (iF[114] = tG),
          (iF[115] = eq))
        : (eq = iF[115])
      let ar = eq,
        ao = tR ? tR.verificationIssue : tS,
        ac = tI?.telemetryJourneyId ?? i$?.telemetryJourneyId
      ;(iF[116] !== i1 || iF[117] !== ac || iF[118] !== i8 || iF[119] !== t7 || iF[120] !== tz
        ? ((eH = () => (null != ac && (0, ei.yX)(i1, i8, ac), (0, ei.fY)(i1, i8, tz, t7))),
          (e$ = [i1, i8, tz, t7, ac]),
          (iF[116] = i1),
          (iF[117] = ac),
          (iF[118] = i8),
          (iF[119] = t7),
          (iF[120] = tz),
          (iF[121] = eH),
          (iF[122] = e$))
        : ((eH = iF[121]), (e$ = iF[122])),
        (0, g.useEffect)(eH, e$))
      let ad = null == tG && !ae && (tZ || aa || (t9 && "delivery" === tz)) && tT && !t3 && !tg,
        au =
          !tT &&
          "web_verification" === tz &&
          tR?.shopifyStartConflict === !0 &&
          s9?.onCheckClaim === sc &&
          s9?.onStartVerification === si &&
          s9?.onCancelClaim === sd,
        af = (null == tG || tL) && null != s5 && (null != eL || ae || (("shopify" !== s5 || au) && !tg))
      ;(iF[123] !== tv ||
      iF[124] !== tm ||
      iF[125] !== s5 ||
      iF[126] !== af ||
      iF[127] !== ad ||
      iF[128] !== i8?.lastError ||
      iF[129] !== ao ||
      iF[130] !== tz
        ? ("failed" === tz
            ? (eY = "unknown")
            : "incorrectCode" === s5
              ? (eY = "validation")
              : "send_limit_reached" === ao
                ? (eY = "rate_limited")
                : (null != ao || af || (null != tm && tv) || ad) && (eY = i8?.lastError ?? "unknown"),
          (iF[123] = tv),
          (iF[124] = tm),
          (iF[125] = s5),
          (iF[126] = af),
          (iF[127] = ad),
          (iF[128] = i8?.lastError),
          (iF[129] = ao),
          (iF[130] = tz),
          (iF[131] = eY))
        : (eY = iF[131]),
        iF[132] !== i1 || iF[133] !== i8 || iF[134] !== eY || iF[135] !== tz
          ? ((eK = () => (0, ei.dA)(i1, i8, tz, eY)),
            (iF[132] = i1),
            (iF[133] = i8),
            (iF[134] = eY),
            (iF[135] = tz),
            (iF[136] = eK))
          : (eK = iF[136]),
        iF[137] !== i1 || iF[138] !== i8 || iF[139] !== eY || iF[140] !== tz
          ? ((eQ = [i1, i8, tz, eY]), (iF[137] = i1), (iF[138] = i8), (iF[139] = eY), (iF[140] = tz), (iF[141] = eQ))
          : (eQ = iF[141]),
        (0, g.useEffect)(eK, eQ),
        iF[142] !== tR?.resendAvailableAt
          ? ((eZ = Date.parse(tR?.resendAvailableAt ?? "") || 0), (iF[142] = tR?.resendAvailableAt), (iF[143] = eZ))
          : (eZ = iF[143]))
      let ah = Math.max(td, eZ)
      iF[144] !== tf || iF[145] !== ah
        ? ((eJ = ah > 0 ? new Date(ah).toISOString() : void 0),
          (eX = (0, n.P$)(eJ, tf)),
          (iF[144] = tf),
          (iF[145] = ah),
          (iF[146] = eJ),
          (iF[147] = eX))
        : ((eJ = iF[146]), (eX = iF[147]))
      let am = eX,
        ap = am.seconds,
        ag = tK[tQ],
        ax = null != iJ && null == sI && !i6 && !sM && !sk
      iF[148] !== sp || iF[149] !== iO || iF[150] !== tY || iF[151] !== i5
        ? ((e0 = () =>
            sp
              ? tY
                ? (0, t.jsx)(x.A, {
                    id: "businessProfiles.claim.shopify.browser.continue",
                    defaultMessage:
                      "Connect {name}\u2019s Shopify store to verify you\u2019re authorized to represent {name}.",
                    values: { name: iO.name },
                  })
                : (0, t.jsx)(x.A, { ...i5.shopifyOriginalTab })
              : (0, t.jsx)(x.A, { ...i5.shopifyDesktop })),
          (iF[148] = sp),
          (iF[149] = iO),
          (iF[150] = tY),
          (iF[151] = i5),
          (iF[152] = e0))
        : (e0 = iF[152])
      let av = e0
      ;(iF[153] !== eJ || iF[154] !== th
        ? ((e1 = () => {
            if (null != eJ) return (0, l.x)(eJ, () => th(Date.now()))
          }),
          (iF[153] = eJ),
          (iF[154] = th),
          (iF[155] = e1))
        : (e1 = iF[155]),
        iF[156] !== eJ ? ((e2 = [eJ]), (iF[156] = eJ), (iF[157] = e2)) : (e2 = iF[157]),
        (0, g.useEffect)(e1, e2),
        iF[158] !== sp ||
        iF[159] !== i4 ||
        iF[160] !== sv ||
        iF[161] !== tQ ||
        iF[162] !== tM ||
        iF[163] !== ah ||
        iF[164] !== tA ||
        iF[165] !== sQ ||
        iF[166] !== sP ||
        iF[167] !== tp ||
        iF[168] !== th ||
        iF[169] !== sY ||
        iF[170] !== tc ||
        iF[171] !== sC ||
        iF[172] !== sL ||
        iF[173] !== sT ||
        iF[174] !== sV ||
        iF[175] !== tu ||
        iF[176] !== sD ||
        iF[177] !== sq ||
        iF[178] !== ta ||
        iF[179] !== sN ||
        iF[180] !== sw ||
        iF[181] !== sJ ||
        iF[182] !== tC ||
        iF[183] !== s_
          ? ((e3 = (e) => {
              let { shopifyRedirecting: i, ...s } = e
              ;(ta(!0 === i),
                (null != e.disputeAccessVerification || "persona" === e.step) && sC(e.disputeAccessVerification),
                s_(ey(e, i4)),
                ("method" === e.step || null != e.eligibleMethods) &&
                  (sT(e.eligibleMethods),
                  null != e.eligibleMethods &&
                    !e.eligibleMethods.includes(tQ) &&
                    e.eligibleMethods[0] &&
                    sD(e.eligibleMethods[0])),
                (null != e.eligibleMethods || null != e.emailDestination) && sV(e.emailDestination),
                null != e.method
                  ? sD(e.method)
                  : "domain" === e.step
                    ? sD("domain")
                    : ["delivery", "code", "delivery_pending"].includes(e.step) && sD("phone"),
                void 0 !== e.shopifyShopDomain && sN(e.shopifyShopDomain),
                "web_verification" === e.step && sp && sD("shopify"),
                void 0 !== e.claimDomain
                  ? sP(e.claimDomain)
                  : e.domainVerification?.domain && sP(e.domainVerification.domain),
                sL(e.domainVerification),
                sq(e.personaVerification),
                tp(null),
                tA(!0 === e.phoneAttemptUnavailable),
                tC(e.verificationIssue),
                sJ(e.destination),
                e.availableDeliveries && sQ(e.availableDeliveries),
                e.delivery && sY(e.delivery),
                tu(Math.max(ah, Date.parse(e.resendAvailableAt ?? "") || 0)),
                th(Date.now()),
                tc(Date.now() + 6e4),
                tM.setQueryData(["business-claim-preview", sv], s),
                sw(e.step))
            }),
            (iF[158] = sp),
            (iF[159] = i4),
            (iF[160] = sv),
            (iF[161] = tQ),
            (iF[162] = tM),
            (iF[163] = ah),
            (iF[164] = tA),
            (iF[165] = sQ),
            (iF[166] = sP),
            (iF[167] = tp),
            (iF[168] = th),
            (iF[169] = sY),
            (iF[170] = tc),
            (iF[171] = sC),
            (iF[172] = sL),
            (iF[173] = sT),
            (iF[174] = sV),
            (iF[175] = tu),
            (iF[176] = sD),
            (iF[177] = sq),
            (iF[178] = ta),
            (iF[179] = sN),
            (iF[180] = sw),
            (iF[181] = sJ),
            (iF[182] = tC),
            (iF[183] = s_),
            (iF[184] = e3))
          : (e3 = iF[184]))
      let ay = e3
      iF[185] !== ay || iF[186] !== sc
        ? ((e4 = async function (e) {
            let i = await sc?.().catch(eg)
            i && e === tl.current && ay(i)
          }),
          (iF[185] = ay),
          (iF[186] = sc),
          (iF[187] = e4))
        : (e4 = iF[187])
      let ab = e4
      iF[188] !== ay ||
      iF[189] !== s1 ||
      iF[190] !== sX ||
      iF[191] !== tm ||
      iF[192] !== sH?.phoneNumber ||
      iF[193] !== tD ||
      iF[194] !== al ||
      iF[195] !== t2 ||
      iF[196] !== i4 ||
      iF[197] !== sI ||
      iF[198] !== sE ||
      iF[199] !== t9 ||
      iF[200] !== sv ||
      iF[201] !== tQ ||
      iF[202] !== s3 ||
      iF[203] !== ss ||
      iF[204] !== sc ||
      iF[205] !== sr ||
      iF[206] !== sl ||
      iF[207] !== iZ ||
      iF[208] !== sn ||
      iF[209] !== sa ||
      iF[210] !== si ||
      iF[211] !== tO?.verificationId ||
      iF[212] !== tM ||
      iF[213] !== se ||
      iF[214] !== ab ||
      iF[215] !== tH ||
      iF[216] !== eJ ||
      iF[217] !== i1 ||
      iF[218] !== s2 ||
      iF[219] !== ty ||
      iF[220] !== s0 ||
      iF[221] !== tp ||
      iF[222] !== sY ||
      iF[223] !== s6 ||
      iF[224] !== sO ||
      iF[225] !== sD ||
      iF[226] !== s4 ||
      iF[227] !== ts ||
      iF[228] !== s7 ||
      iF[229] !== te ||
      iF[230] !== sw ||
      iF[231] !== s_ ||
      iF[232] !== sb ||
      iF[233] !== i8 ||
      iF[234] !== t7 ||
      iF[235] !== i6 ||
      iF[236] !== tz
        ? ((e5 = async function (e, i, s) {
            let t = void 0 === i ? sX : i,
              a = void 0 === s ? tQ : s
            if (
              tn.current ||
              (null != tm && "cancel" !== e) ||
              (("send" === e || "resend" === e) && !(0, n.P$)(eJ, Date.now()).available)
            )
              return
            tn.current = !0
            let l = (tl.current = tl.current + 1),
              o = ("start" === e || ("change" === e && a !== s3?.method)) && "email" === a,
              c = "prepare" === e || o || ("send" === e && t9)
            o && (tr.current = void 0)
            let d = tM.getQueryData(["business-claim-preview", sv])
            ts(!0)
            let u = (0, ei.x$)(
                i1,
                i8,
                tz,
                {
                  send: "send",
                  resend: "resend",
                  verify: "verify_code",
                  cancel: "cancel",
                  start: "submit",
                  change: "submit",
                  shopify: "connect_shopify",
                  prepare: "prepare",
                  redeem: "submit",
                  domain: "verify_domain",
                }[e],
                "start" === e || "change" === e ? a : t7,
              ),
              f = "start" === e,
              h = !1
            return (
              "cancel" === e ? ty(!1) : (s6(null), s7(void 0)),
              (async function () {
                let i
                if (
                  null != se &&
                  (ew(sb) && (await tM.cancelQueries({ queryKey: ["business-claim-preview", sv] })),
                  !c || l === tl.current)
                ) {
                  if ("redeem" === e) await iZ?.()
                  else if ("prepare" === e || "start" === e || "change" === e || "shopify" === e || "domain" === e) {
                    let s
                    if ("prepare" === e) {
                      if (((s = await sl?.()), l !== tl.current)) return
                      i4 ||
                        s?.step !== "method" ||
                        ((s.eligibleMethods?.length !== 1 || "persona" !== s.eligibleMethods[0]) &&
                          (null != s.eligibleMethods || i6 || s.claimDomain || s.shopifyShopDomain)) ||
                        !si ||
                        ((f = !0), (s = await si(s.eligibleMethods?.[0] === "persona" ? "persona" : "phone")))
                    } else if ("change" === e) {
                      if (!s3 || !ss) return
                      let e = a === s3.method
                      if (((s = e ? await sc?.() : await ss(a, s3.updatedAt)), l !== tl.current)) return
                      if ((s4(void 0), e && !s)) return void s2(s1.slice(0, -1))
                      ;(s2([]),
                        (e && s?.method === s3.method) || (s0(""), sO(void 0), sY(void 0), (tr.current = void 0)))
                    } else
                      s =
                        "domain" === e
                          ? await sr?.()
                          : "shopify" === e
                            ? await si?.("shopify")
                            : "email" === a
                              ? await sa?.()
                              : await si?.(a)
                    if (s) {
                      if (c && l !== tl.current) return
                      if (
                        ((f = !1),
                        ay(s),
                        "prepare" === e && s.shopifyMethodChangeAvailable && s.method && s.methodUpdatedAt && ss)
                      )
                        (s4({ method: s.method, updatedAt: s.methodUpdatedAt }), s2(["method"]), sD("shopify"))
                      else if ("prepare" === e || o) {
                        let e = await tD(s)
                        if (l !== tl.current) return
                        e !== s && ay(e)
                      }
                      "domain" === e &&
                        s.domainVerification?.status === "pending" &&
                        (i = {
                          pendingChallengeId: s.domainVerification.challenge_id ?? null,
                          skipped: s.domainCheckSkipped,
                        })
                    } else {
                      if ("domain" === e) throw Error("Domain verification is unavailable")
                      ;((h = !0), s6("send"))
                    }
                  } else if ("send" === e || "resend" === e) {
                    let i
                    if ("resend" === e) i = await se.onResendCode(tO?.verificationId)
                    else if (t9) {
                      if (((tr.current = t2 ?? sE), (i = await sn?.(tO?.verificationId)), l !== tl.current)) return
                    } else i = await se.onSendCode(al, null == sI ? sH?.phoneNumber : void 0)
                    i
                      ? (s0(""),
                        ay(
                          "code" === i.step || "delivery_pending" === i.step
                            ? {
                                ...i,
                                resendAvailableAt: i.resendAvailableAt ?? new Date(Date.now() + 3e4).toISOString(),
                              }
                            : i,
                        ))
                      : ((h = !0), s6("send"))
                  } else if ("verify" === e) {
                    let e = await se.onVerifyCode(t, tO?.verificationId)
                    ;(ay(e), "delivery_pending" === e.step ? s6("verify") : s0(""))
                  } else (await se.onCancelClaim(), s6(null), s7(void 0), tp(null), s_(!1), s2([]), sw("cancelled"))
                  return ((0, ei.BR)(i1, i8, u, h ? "failed" : "succeeded", h ? "unavailable" : void 0), i)
                }
              })()
                .catch(async function (i) {
                  let s = (0, ei._3)(i)
                  if (((0, ei.BR)(i1, i8, u, s.outcome, s.errorCategory), "domain" === e)) throw i
                  if (c && l !== tl.current) return
                  if ((0, W.$)(i)) return void (0, q.H)(i1)
                  let t =
                      (!i4 || tH) &&
                      ("shopify" === e || ("start" === e && "shopify" === a)) &&
                      i instanceof N.FetchError &&
                      409 === i.status,
                    n = t && (l !== tl.current || tM.getQueryData(["business-claim-preview", sv]) !== d)
                  if (t && !n) {
                    let e = tM.getQueryData(["business-claim-preview", sv]),
                      i = await sc?.().catch(ep)
                    l !== tl.current || tM.getQueryData(["business-claim-preview", sv]) !== e
                      ? (n = !0)
                      : i &&
                        (ay(i),
                        !0 === i.shopifyStartConflict && te(se),
                        !1 === i.shopifyStartConflict ||
                        ["review", "success", "cancelled", "failed", "account", "method"].includes(i.step)
                          ? s6(null)
                          : !0 === i.shopifyStartConflict
                            ? s6("shopify")
                            : s6("request"),
                        (n = !0))
                  }
                  if (!n)
                    if (
                      (!t &&
                        ((f && (0, H.isTransientRequestError)(i)) ||
                          ("start" === e && ("domain" === a || "shopify" === a))) &&
                        (await ab(l)),
                      ("send" === e ||
                        "resend" === e ||
                        "start" === e ||
                        "shopify" === e ||
                        "prepare" === e ||
                        "redeem" === e) &&
                        s7(
                          (function (e) {
                            if (e instanceof N.FetchError && 409 === e.status)
                              try {
                                return b
                                  .Ikc({
                                    error: b.Ikc({
                                      message: b.k5n([
                                        eu,
                                        "[Internal Only] Set a test phone number in Debug (Ctrl+D) \u2192 Local search \u2192 Business verification override.",
                                      ]),
                                    }),
                                  })
                                  .safeParse(JSON.parse(e.message)).data?.error.message
                              } catch {
                                return
                              }
                          })(i),
                        ),
                      "change" === e ||
                        "prepare" === e ||
                        "redeem" === e ||
                        "shopify" === e ||
                        ("start" === e && ("domain" === a || "shopify" === a || i4)))
                    )
                      s6("request")
                    else if ("cancel" === e) ty(!0)
                    else if ("verify" === e) {
                      let e = (0, r.h)(
                        i instanceof N.FetchError ? i.status : void 0,
                        i instanceof N.FetchError ? i.diagnosticError?.message : void 0,
                        "verify",
                      )
                      "incorrectCode" === e
                        ? s6(e)
                        : i instanceof Error && "OTP not accepted" === i.message
                          ? s6("incorrectCode")
                          : s6("verify")
                    } else s6("start" === e ? "send" : e)
                })
                .finally(() => {
                  ;((tn.current = !1), ts(!1))
                })
            )
          }),
          (iF[188] = ay),
          (iF[189] = s1),
          (iF[190] = sX),
          (iF[191] = tm),
          (iF[192] = sH?.phoneNumber),
          (iF[193] = tD),
          (iF[194] = al),
          (iF[195] = t2),
          (iF[196] = i4),
          (iF[197] = sI),
          (iF[198] = sE),
          (iF[199] = t9),
          (iF[200] = sv),
          (iF[201] = tQ),
          (iF[202] = s3),
          (iF[203] = ss),
          (iF[204] = sc),
          (iF[205] = sr),
          (iF[206] = sl),
          (iF[207] = iZ),
          (iF[208] = sn),
          (iF[209] = sa),
          (iF[210] = si),
          (iF[211] = tO?.verificationId),
          (iF[212] = tM),
          (iF[213] = se),
          (iF[214] = ab),
          (iF[215] = tH),
          (iF[216] = eJ),
          (iF[217] = i1),
          (iF[218] = s2),
          (iF[219] = ty),
          (iF[220] = s0),
          (iF[221] = tp),
          (iF[222] = sY),
          (iF[223] = s6),
          (iF[224] = sO),
          (iF[225] = sD),
          (iF[226] = s4),
          (iF[227] = ts),
          (iF[228] = s7),
          (iF[229] = te),
          (iF[230] = sw),
          (iF[231] = s_),
          (iF[232] = sb),
          (iF[233] = i8),
          (iF[234] = t7),
          (iF[235] = i6),
          (iF[236] = tz),
          (iF[237] = e5))
        : (e5 = iF[237])
      let aw = e5
      iF[238] !== s1 ||
      iF[239] !== sX ||
      iF[240] !== ae ||
      iF[241] !== tm ||
      iF[242] !== as ||
      iF[243] !== al ||
      iF[244] !== i4 ||
      iF[245] !== tL ||
      iF[246] !== t9 ||
      iF[247] !== s5 ||
      iF[248] !== tQ ||
      iF[249] !== ag ||
      iF[250] !== s3 ||
      iF[251] !== sl ||
      iF[252] !== iZ ||
      iF[253] !== si ||
      iF[254] !== ti ||
      iF[255] !== aw ||
      iF[256] !== aa ||
      iF[257] !== tG ||
      iF[258] !== se ||
      iF[259] !== ax ||
      iF[260] !== s2 ||
      iF[261] !== sD ||
      iF[262] !== sw ||
      iF[263] !== tz
        ? ((e6 = function () {
            if (null != se && !ti && null == tm)
              if (tL) (tQ === s3.method || ag) && aw("change")
              else if (null != tG) s2(s1.slice(0, -1))
              else if ("account" === tz) iZ ? aw("redeem") : sl ? aw("prepare") : sw(i4 ? "persona" : "method")
              else if ("method" === tz) {
                if (ax) return void aw("prepare")
                if (!ag) return
                ;(sD(tQ), "email" === tQ || si ? aw("start") : sw("delivery"))
              } else
                "delivery" === tz && !aa && (t9 || as.includes(al))
                  ? aw("send")
                  : ae && 6 === sX.length && (t9 || "incorrectCode" !== s5) && aw("verify")
          }),
          (iF[238] = s1),
          (iF[239] = sX),
          (iF[240] = ae),
          (iF[241] = tm),
          (iF[242] = as),
          (iF[243] = al),
          (iF[244] = i4),
          (iF[245] = tL),
          (iF[246] = t9),
          (iF[247] = s5),
          (iF[248] = tQ),
          (iF[249] = ag),
          (iF[250] = s3),
          (iF[251] = sl),
          (iF[252] = iZ),
          (iF[253] = si),
          (iF[254] = ti),
          (iF[255] = aw),
          (iF[256] = aa),
          (iF[257] = tG),
          (iF[258] = se),
          (iF[259] = ax),
          (iF[260] = s2),
          (iF[261] = sD),
          (iF[262] = sw),
          (iF[263] = tz),
          (iF[264] = e6))
        : (e6 = iF[264])
      let aj = e6
      iF[265] !== i1 || iF[266] !== i8
        ? ((e8 = function () {
            let e = (0, ei.x$)(i1, i8, "persona", "open_persona", "persona")
            if (!e) return
            let i = !1,
              s = !1
            return {
              onReady() {
                e.finished || ((i = !0), (0, ei.BR)(i1, i8, e, "succeeded"))
              },
              onSdkCompleted() {
                ;(0, ei.IP)(i1, i8, e)
              },
              onCancelled() {
                if (i) {
                  if (!s) {
                    s = !0
                    let e = (0, ei.x$)(i1, i8, "persona", "close", "persona")
                    ;(0, ei.BR)(i1, i8, e, "succeeded")
                  }
                } else (0, ei.BR)(i1, i8, e, "cancelled")
              },
              onFailed(s) {
                i || (0, ei.BR)(i1, i8, e, "failed", s)
              },
              onErrorPresented: (e) => (0, ei.dA)(i1, i8, "persona", e),
              onUnconfirmed() {
                i || (0, ei.BR)(i1, i8, e, "unknown")
              },
            }
          }),
          (iF[265] = i1),
          (iF[266] = i8),
          (iF[267] = e8))
        : (e8 = iF[267])
      let aA = e8
      iF[268] !== ay ||
      iF[269] !== i3 ||
      iF[270] !== tm ||
      iF[271] !== i4 ||
      iF[272] !== tq ||
      iF[273] !== sv ||
      iF[274] !== so ||
      iF[275] !== si ||
      iF[276] !== tM ||
      iF[277] !== ab ||
      iF[278] !== tV ||
      iF[279] !== tH ||
      iF[280] !== i1 ||
      iF[281] !== ts ||
      iF[282] !== i8 ||
      iF[283] !== sA ||
      iF[284] !== tz
        ? ((e7 = async function (e, i) {
            if (null != i1.get(I.Zv) || tn.current || null != tm || (tH && "verified" !== tq)) return !1
            ;((tn.current = !0), ts(!0))
            let s = (0, ei.x$)(i1, i8, tz, "continue", "persona")
            return (async () => {
              let i
              if ((await tM.cancelQueries({ queryKey: ["business-claim-preview", sv] }), i3(), sA && so))
                i = await so("launch_persona")
              else if (i4 && !tH) {
                let e = tl.current
                try {
                  i = await si?.(void 0, "launch_persona")
                } catch (i) {
                  throw ((0, H.isTransientRequestError)(i) && (await ab(e)), i)
                }
              }
              if (!i) throw Error("Verification is not ready")
              ;(i3(), (tP.current = !1))
              let s = i.personaVerification?.verification_url
              return sA && i.strongVerification && i.personaVerification?.status === "pending" && !s
                ? (await tV({ cancelRefetch: !1 }), !1)
                : (ay(i),
                  "persona" === i.step &&
                    !!s &&
                    (!tH || "verified" === i.disputeAccessVerification) &&
                    (await e(s), !0))
            })()
              .then(
                (e) => ((0, ei.BR)(i1, i8, s, e ? "succeeded" : "unknown"), e),
                (e) => {
                  i?.()
                  let t = (0, ei._3)(e)
                  if (((0, ei.BR)(i1, i8, s, t.outcome, t.errorCategory), (0, W.$)(e))) return ((0, q.H)(i1), !1)
                  throw e
                },
              )
              .finally(() => {
                ;((tn.current = !1), ts(!1))
              })
          }),
          (iF[268] = ay),
          (iF[269] = i3),
          (iF[270] = tm),
          (iF[271] = i4),
          (iF[272] = tq),
          (iF[273] = sv),
          (iF[274] = so),
          (iF[275] = si),
          (iF[276] = tM),
          (iF[277] = ab),
          (iF[278] = tV),
          (iF[279] = tH),
          (iF[280] = i1),
          (iF[281] = ts),
          (iF[282] = i8),
          (iF[283] = sA),
          (iF[284] = tz),
          (iF[285] = e7))
        : (e7 = iF[285])
      let a_ = e7
      null != sg && ("persona" !== tz || null != tm || sg !== t1) && sx(null)
      let aS = "persona" === tz && null == tm && null != sg && sg === t1
      iF[286] !== tI ||
      iF[287] !== tm ||
      iF[288] !== i0 ||
      iF[289] !== ti ||
      iF[290] !== aS ||
      iF[291] !== t_ ||
      iF[292] !== tO?.pauseStatusPolling ||
      iF[293] !== tG ||
      iF[294] !== tV ||
      iF[295] !== i1 ||
      iF[296] !== tT ||
      iF[297] !== tz
        ? ((e9 = () => {
            null == i1.get(I.Zv) &&
              t_ &&
              (!i0 || null != tI || !tT) &&
              null == tG &&
              null == tm &&
              !ti &&
              !aS &&
              ew(tz) &&
              ("persona" === tz || tO?.pauseStatusPolling || tV({ cancelRefetch: !1 }))
          }),
          (iF[286] = tI),
          (iF[287] = tm),
          (iF[288] = i0),
          (iF[289] = ti),
          (iF[290] = aS),
          (iF[291] = t_),
          (iF[292] = tO?.pauseStatusPolling),
          (iF[293] = tG),
          (iF[294] = tV),
          (iF[295] = i1),
          (iF[296] = tT),
          (iF[297] = tz),
          (iF[298] = e9))
        : (e9 = iF[298])
      let aC = (0, g.useEffectEvent)(e9)
      ;(iF[299] !== sv || iF[300] !== tM || iF[301] !== i2 || iF[302] !== aC
        ? ((ie = () => {
            if (i2) {
              ;((tP.current = !1),
                (tN.current = void 0),
                tM.cancelQueries({ queryKey: ["business-claim-preview", sv] }))
              return
            }
            return h.m.subscribe((e) => e && aC())
          }),
          (iF[299] = sv),
          (iF[300] = tM),
          (iF[301] = i2),
          (iF[302] = aC),
          (iF[303] = ie))
        : (ie = iF[303]),
        iF[304] !== sv || iF[305] !== tM || iF[306] !== i2
          ? ((ii = [i2, tM, sv]), (iF[304] = sv), (iF[305] = tM), (iF[306] = i2), (iF[307] = ii))
          : (ii = iF[307]),
        (0, g.useEffect)(ie, ii),
        iF[308] !== sp || iF[309] !== sh
          ? ((is = () => {
              let e = sh?.closest('[role="dialog"]')
              if (sp && e instanceof HTMLElement) return (0, R.$)(e)
            }),
            (it = [sp, sh]),
            (iF[308] = sp),
            (iF[309] = sh),
            (iF[310] = is),
            (iF[311] = it))
          : ((is = iF[310]), (it = iF[311])),
        (0, g.useLayoutEffect)(is, it),
        iF[312] !== ay || iF[313] !== tR || iF[314] !== ty || iF[315] !== tp
          ? ((ia = function () {
              ;(tR && ay(tR), ty(!1), tp("withdraw"))
            }),
            (iF[312] = ay),
            (iF[313] = tR),
            (iF[314] = ty),
            (iF[315] = tp),
            (iF[316] = ia))
          : (ia = iF[316]))
      let aM = ia
      iF[317] !== ay ||
      iF[318] !== tU ||
      iF[319] !== tm ||
      iF[320] !== i7 ||
      iF[321] !== aS ||
      iF[322] !== tR ||
      iF[323] !== tp ||
      iF[324] !== tt ||
      iF[325] !== tF
        ? ((il = function () {
            if (!tn.current && !tt && !aS && null == tm) {
              if (tU && "review" !== tF) {
                ;(tR && ay(tR), tp("leave"))
                return
              }
              i7()
            }
          }),
          (iF[317] = ay),
          (iF[318] = tU),
          (iF[319] = tm),
          (iF[320] = i7),
          (iF[321] = aS),
          (iF[322] = tR),
          (iF[323] = tp),
          (iF[324] = tt),
          (iF[325] = tF),
          (iF[326] = il))
        : (il = iF[326])
      let aP = il,
        ak = null != iJ && "method" === sy ? "method" : "account",
        aN = "account" === ak ? "account" : void 0,
        aB = t9 || aa ? "method" : "delivery",
        aD = t9 || aa ? "method" : "delivery",
        aI = tY ? "method" : ak,
        aT = !i4 && tK.persona && (sI?.length ?? 0) > 1 ? "method" : ak
      iF[327] !== ak || iF[328] !== aN || iF[329] !== aB || iF[330] !== aD || iF[331] !== aI || iF[332] !== aT
        ? ((ir = {
            method: aN,
            delivery: "method",
            code: aB,
            delivery_pending: aD,
            domain: "method",
            web_verification: aI,
            persona: aT,
            pending: ak,
            in_progress: ak,
            needs_information: ak,
          }),
          (iF[327] = ak),
          (iF[328] = aN),
          (iF[329] = aB),
          (iF[330] = aD),
          (iF[331] = aI),
          (iF[332] = aT),
          (iF[333] = ir))
        : (ir = iF[333])
      let aE = ir,
        aV = i4 && tU && !tH && (tI ?? i$)?.step === "persona"
      iF[334] !== aV ||
      iF[335] !== sp ||
      iF[336] !== i4 ||
      iF[337] !== ss ||
      iF[338] !== tO?.methodUpdatedAt ||
      iF[339] !== aE ||
      iF[340] !== tz
        ? ((io = aE[tz]),
          "persona" === tz && aV
            ? (io = void 0)
            : sp &&
              !i4 &&
              ss &&
              tO?.methodUpdatedAt &&
              ["web_verification", "persona", "needs_information", "pending", "in_progress"].includes(tz) &&
              (io = "method"),
          (iF[334] = aV),
          (iF[335] = sp),
          (iF[336] = i4),
          (iF[337] = ss),
          (iF[338] = tO?.methodUpdatedAt),
          (iF[339] = aE),
          (iF[340] = tz),
          (iF[341] = io))
        : (io = iF[341])
      let aR = tz !== ak || tU ? void 0 : iJ
      iF[342] !== ay ||
      iF[343] !== s1 ||
      iF[344] !== aR ||
      iF[345] !== sp ||
      iF[346] !== tU ||
      iF[347] !== ae ||
      iF[348] !== tm ||
      iF[349] !== i4 ||
      iF[350] !== tL ||
      iF[351] !== t9 ||
      iF[352] !== s3 ||
      iF[353] !== ss ||
      iF[354] !== st ||
      iF[355] !== aS ||
      iF[356] !== tO ||
      iF[357] !== io ||
      iF[358] !== i1 ||
      iF[359] !== s2 ||
      iF[360] !== s6 ||
      iF[361] !== sD ||
      iF[362] !== s4 ||
      iF[363] !== ts ||
      iF[364] !== s7 ||
      iF[365] !== sw ||
      iF[366] !== i8 ||
      iF[367] !== tz
        ? ((ic = async function () {
            if (!tn.current && null == tm && !aS) {
              if (null != aR) {
                ;((0, ei.wj)(i1, i8), aR())
                return
              }
              if (null != io)
                if (
                  ("domain" === tz
                    ? sD("domain")
                    : "persona" === tz
                      ? sD("persona")
                      : "web_verification" === tz
                        ? sD("shopify")
                        : (ae || "delivery" === tz) && sD(t9 ? "email" : "phone"),
                  tU)
                ) {
                  if ("method" === io && sp && !i4 && ss && tO?.method && tO.methodUpdatedAt) {
                    let e = tO
                    if (st) {
                      let i
                      ;((tn.current = !0), ts(!0))
                      try {
                        i = await st()
                      } catch {
                        s6("request")
                      }
                      if (((tn.current = !1), ts(!1), !i)) return
                      ay((e = i))
                    }
                    if (!e.method || !e.methodUpdatedAt) return
                    ;(s4({ method: e.method, updatedAt: e.methodUpdatedAt }), sD(e.method), s6(null))
                  } else tL && sD(s3.method)
                  s2([...s1, io])
                } else (s6(null), s7(void 0), sw(io))
            }
          }),
          (iF[342] = ay),
          (iF[343] = s1),
          (iF[344] = aR),
          (iF[345] = sp),
          (iF[346] = tU),
          (iF[347] = ae),
          (iF[348] = tm),
          (iF[349] = i4),
          (iF[350] = tL),
          (iF[351] = t9),
          (iF[352] = s3),
          (iF[353] = ss),
          (iF[354] = st),
          (iF[355] = aS),
          (iF[356] = tO),
          (iF[357] = io),
          (iF[358] = i1),
          (iF[359] = s2),
          (iF[360] = s6),
          (iF[361] = sD),
          (iF[362] = s4),
          (iF[363] = ts),
          (iF[364] = s7),
          (iF[365] = sw),
          (iF[366] = i8),
          (iF[367] = tz),
          (iF[368] = ic))
        : (ic = iF[368])
      let aF = ic
      iF[369] !== aF || iF[370] !== aR || iF[371] !== tm || iF[372] !== ti || iF[373] !== aS || iF[374] !== io
        ? ((id =
            null != io || null != aR
              ? (0, t.jsx)(j.$, {
                  type: "button",
                  size: "formAction",
                  radius: "full",
                  color: "outlineGhost",
                  disabled: ti || null != tm || aS,
                  onClick: () => void aF(),
                  children: (0, t.jsx)(x.A, { id: "chatgpt.localBusiness.claim.back", defaultMessage: "Back" }),
                })
              : null),
          (iF[369] = aF),
          (iF[370] = aR),
          (iF[371] = tm),
          (iF[372] = ti),
          (iF[373] = aS),
          (iF[374] = io),
          (iF[375] = id))
        : (id = iF[375])
      let aU = id
      iF[376] !== aj || iF[377] !== tm || iF[378] !== ti || iF[379] !== tG
        ? ((iu =
            "delivery" === tG
              ? (0, t.jsx)(ee.C, {
                  type: "button",
                  size: "formAction",
                  radius: "full",
                  color: "primary",
                  pending: ti && null == tm,
                  disabled: ti || null != tm,
                  onClick: aj,
                  children: (0, t.jsx)(x.A, { id: "chatgpt.localBusiness.claim.continue", defaultMessage: "Continue" }),
                })
              : void 0),
          (iF[376] = aj),
          (iF[377] = tm),
          (iF[378] = ti),
          (iF[379] = tG),
          (iF[380] = iu))
        : (iu = iF[380])
      let aG = iu
      iF[381] !== s8
        ? ((ih =
            s8 === eu
              ? (0, t.jsx)(x.A, {
                  id: "chatgpt.localBusiness.claim.error.phoneVerificationUnavailable",
                  defaultMessage: "Phone verification is not available",
                })
              : s8),
          (iF[381] = s8),
          (iF[382] = ih))
        : (ih = iF[382])
      let aO = ih
      ;(iF[383] !== s5 || iF[384] !== aO
        ? ((im =
            "send" === s5 &&
            (aO ??
              (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.claim.error.send",
                defaultMessage: "We couldn\u2019t send your code. Please try again.",
              }))),
          (iF[383] = s5),
          (iF[384] = aO),
          (iF[385] = im))
        : (im = iF[385]),
        iF[386] !== s5
          ? ((ip =
              "request" === s5 &&
              (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.claim.error.request",
                defaultMessage: "Something went wrong. Please try again.",
              })),
            (iF[386] = s5),
            (iF[387] = ip))
          : (ip = iF[387]),
        iF[388] !== s5 || iF[389] !== aO
          ? ((ig =
              "resend" === s5 &&
              (aO ??
                (0, t.jsx)(x.A, {
                  id: "chatgpt.localBusiness.claim.error.resend",
                  defaultMessage: "We couldn\u2019t request another code. Please try again later.",
                }))),
            (iF[388] = s5),
            (iF[389] = aO),
            (iF[390] = ig))
          : (ig = iF[390]),
        iF[391] !== s5
          ? ((ix =
              "verify" === s5 &&
              (0, t.jsx)(x.A, {
                id: "chatgpt.localBusiness.claim.error.verifyRetry",
                defaultMessage: "We couldn\u2019t verify that code. Check the code and try again",
              })),
            (iF[391] = s5),
            (iF[392] = ix))
          : (ix = iF[392]),
        iF[393] !== s5
          ? ((iv = "incorrectCode" === s5 && (0, t.jsx)(x.A, { ...G.f.rejected })), (iF[393] = s5), (iF[394] = iv))
          : (iv = iF[394]),
        iF[395] !== im || iF[396] !== ip || iF[397] !== ig || iF[398] !== ix || iF[399] !== iv
          ? ((iy = (0, t.jsxs)(t.Fragment, { children: [im, ip, ig, ix, iv] })),
            (iF[395] = im),
            (iF[396] = ip),
            (iF[397] = ig),
            (iF[398] = ix),
            (iF[399] = iv),
            (iF[400] = iy))
          : (iy = iF[400]))
      let az = iy
      iF[401] === Symbol.for("react.memo_cache_sentinel")
        ? ((ib = (0, t.jsx)(x.A, { id: "chatgpt.localBusiness.claim.continue", defaultMessage: "Continue" })),
          (iF[401] = ib))
        : (ib = iF[401])
      let aL = ib
      if ("method" !== tz || tU || "shopify" !== tQ) {
        if ("account" === tz && iX) {
          let e
          ;(iF[403] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(x.A, {
                id: "businessProfiles.creation.dispute.start",
                defaultMessage: "Dispute ownership",
              })),
              (iF[403] = e))
            : (e = iF[403]),
            (aL = e))
        }
      } else {
        let e
        ;(iF[402] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(x.A, {
              id: "businessProfiles.claim.shopify.continue",
              defaultMessage: "Connect Shopify",
            })),
            (iF[402] = e))
          : (e = iF[402]),
          (aL = e))
      }
      let aW = "account" === tz || "method" === tz,
        aq = "delivery" === tz && !t9
      aq ? (iw = "delivery") : !t9 && ae && (iw = "code")
      let aH = ti && null == tm,
        a$ = aH && (aW || aq || (sp && "code" === iw) || "domain" === tz || ("web_verification" === tz && tY) || aS)
      iF[404] !== tq || iF[405] !== tH || iF[406] !== tz
        ? ((ij =
            tH &&
            "account" !== tz &&
            !["review", "success", "failed", "cancelled"].includes(tz) &&
            (0, t.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, t.jsx)(x.A, {
                id: "businessProfiles.dispute.verification.step",
                defaultMessage: "Step {step} of 2",
                values: { step: "verified" === tq ? 2 : 1 },
              }),
            })),
          (iF[404] = tq),
          (iF[405] = tH),
          (iF[406] = tz),
          (iF[407] = ij))
        : (ij = iF[407])
      let aY = ij
      if (tt) {
        let e,
          i,
          s,
          a = !sp
        return (
          iF[408] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(A.L3, {
                className: "sr-only",
                children: (0, t.jsx)(x.A, {
                  id: "chatgpt.localBusiness.claim.pending",
                  defaultMessage: "Working\u2026",
                }),
              })),
              (iF[408] = e))
            : (e = iF[408]),
          iF[409] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsxs)("div", {
                ref: sm,
                className: "relative h-full overflow-y-auto bg-surface-card text-base text-default",
                children: [e, (0, t.jsx)(_.R4, { children: (0, t.jsx)(K.gv, {}) })],
              })),
              (iF[409] = i))
            : (i = iF[409]),
          iF[410] !== aS || iF[411] !== aP || iF[412] !== a
            ? ((s = (0, t.jsx)(X.d, { modal: a, personaActive: aS, closeDisabled: !0, onClose: aP, children: i })),
              (iF[410] = aS),
              (iF[411] = aP),
              (iF[412] = a),
              (iF[413] = s))
            : (s = iF[413]),
          s
        )
      }
      iF[414] !== iO || iF[415] !== iL || iF[416] !== i4 || iF[417] !== iW || iF[418] !== tz
        ? ((iA = iW ?? (0, t.jsx)(er.PV, { business: iO, children: iL(i4 || "success" === tz) })),
          (iF[414] = iO),
          (iF[415] = iL),
          (iF[416] = i4),
          (iF[417] = iW),
          (iF[418] = tz),
          (iF[419] = iA))
        : (iA = iF[419])
      let aK = iA,
        aQ = i0 && t_ && null == i$ && null == tI
      iF[420] !== aj
        ? ((i_ = function (e) {
            ;(e.preventDefault(), aj())
          }),
          (iF[420] = aj),
          (iF[421] = i_))
        : (i_ = iF[421])
      let aZ = i_
      iF[422] !== i4 || iF[423] !== aQ || iF[424] !== tV || iF[425] !== ad || iF[426] !== tT
        ? ((iS =
            (ad || (aQ && tT)) &&
            (0, t.jsxs)("div", {
              className: (0, m.A)(
                "flex flex-col gap-3 text-sm leading-5",
                aQ ? "items-center text-center" : "items-start",
              ),
              children: [
                (0, t.jsx)("p", {
                  role: "alert",
                  children: i4
                    ? (0, t.jsx)(x.A, {
                        id: "chatgpt.localBusiness.dispute.review.error",
                        defaultMessage: "We couldn\u2019t refresh your dispute status",
                      })
                    : (0, t.jsx)(x.A, {
                        id: "chatgpt.localBusiness.claim.review.error",
                        defaultMessage: "We couldn\u2019t refresh your claim status",
                      }),
                }),
                (0, t.jsxs)(j.$, {
                  color: "outlineGhost",
                  size: "recoveryAction",
                  className: "gap-1.5",
                  onClick: () => void tV(),
                  children: [
                    (0, t.jsx)(S.I, { asset: c.$ }),
                    (0, t.jsx)(x.A, { id: "chatgpt.localBusiness.claim.review.retry", defaultMessage: "Try again" }),
                  ],
                }),
              ],
            })),
          (iF[422] = i4),
          (iF[423] = aQ),
          (iF[424] = tV),
          (iF[425] = ad),
          (iF[426] = tT),
          (iF[427] = iS))
        : (iS = iF[427])
      let aJ = iS
      iF[428] !== aQ || iF[429] !== aJ
        ? ((iC = aQ ? aJ || (0, t.jsx)(eo.p, {}) : void 0), (iF[428] = aQ), (iF[429] = aJ), (iF[430] = iC))
        : (iC = iF[430])
      let aX = iC
      ;(iF[431] !== i4 ||
      iF[432] !== eL ||
      iF[433] !== s5 ||
      iF[434] !== az ||
      iF[435] !== sv ||
      iF[436] !== iw ||
      iF[437] !== af
        ? ((iM =
            af &&
            null == eL &&
            null == iw &&
            ("shopify" === s5
              ? (0, t.jsx)(ej, { id: `${sv}-error`, dispute: i4 })
              : (0, t.jsx)("p", { id: `${sv}-error`, role: "alert", className: "text-danger", children: az }))),
          (iF[431] = i4),
          (iF[432] = eL),
          (iF[433] = s5),
          (iF[434] = az),
          (iF[435] = sv),
          (iF[436] = iw),
          (iF[437] = af),
          (iF[438] = iM))
        : (iM = iF[438]),
        iF[439] !== eL || iF[440] !== a$ || iF[441] !== aH
          ? ((iP = aH && null == eL && (0, t.jsx)(K.gv, { visuallyHidden: a$ })),
            (iF[439] = eL),
            (iF[440] = a$),
            (iF[441] = aH),
            (iF[442] = iP))
          : (iP = iF[442]),
        iF[443] !== iM || iF[444] !== iP
          ? ((ik = (0, t.jsxs)(t.Fragment, { children: [iM, iP] })), (iF[443] = iM), (iF[444] = iP), (iF[445] = ik))
          : (ik = iF[445]))
      let a0 = ik
      iF[446] !== aU ||
      iF[447] !== tg ||
      iF[448] !== tx ||
      iF[449] !== i4 ||
      iF[450] !== aY ||
      iF[451] !== tJ ||
      iF[452] !== sG ||
      iF[453] !== sr ||
      iF[454] !== a0 ||
      iF[455] !== ti ||
      iF[456] !== aw ||
      iF[457] !== sO ||
      iF[458] !== aJ ||
      iF[459] !== i8 ||
      iF[460] !== tz
        ? ((iN =
            "domain" === tz
              ? (0, t.jsx)(
                  "div",
                  {
                    "aria-busy": ti,
                    className: "w-full",
                    children: (0, t.jsx)(Q.B, {
                      challenge: tJ,
                      lastCheck: sG,
                      onChecked: sO,
                      domain: tJ?.domain,
                      busy: ti,
                      fallbackCooldownMs: 3e4,
                      disabled: !sr || tg || tx,
                      onStart: () => aw("domain"),
                      onCheck: () => aw("domain"),
                      onFinish: () => aw("domain"),
                      errorMessage: (0, t.jsx)(et, { telemetry: i8 }),
                      beforeRecord: (0, t.jsxs)(t.Fragment, {
                        children: [aY, (0, t.jsx)(es, { verification: tJ, dispute: i4 })],
                      }),
                      afterRecord: (0, t.jsxs)(t.Fragment, { children: [aJ, a0] }),
                      secondaryAction: aU,
                    }),
                  },
                  "domain",
                )
              : null),
          (iF[446] = aU),
          (iF[447] = tg),
          (iF[448] = tx),
          (iF[449] = i4),
          (iF[450] = aY),
          (iF[451] = tJ),
          (iF[452] = sG),
          (iF[453] = sr),
          (iF[454] = a0),
          (iF[455] = ti),
          (iF[456] = aw),
          (iF[457] = sO),
          (iF[458] = aJ),
          (iF[459] = i8),
          (iF[460] = tz),
          (iF[461] = iN))
        : (iN = iF[461])
      let a1 = iN,
        a2 = !!aS || void 0
      iF[462] !== sf
        ? ((iB = sf.formatMessage({ id: "chatgpt.localBusiness.claim.backToChat", defaultMessage: "Back to ChatGPT" })),
          (iF[462] = sf),
          (iF[463] = iB))
        : (iB = iF[463])
      let a3 = aQ ? i7 : aP,
        a4 = null == iW
      ;(iF[464] !== iq ||
      iF[465] !== tZ ||
      iF[466] !== ay ||
      iF[467] !== aU ||
      iF[468] !== sp ||
      iF[469] !== iO ||
      iF[470] !== tU ||
      iF[471] !== tY ||
      iF[472] !== tE ||
      iF[473] !== sX ||
      iF[474] !== ae ||
      iF[475] !== tg ||
      iF[476] !== tm ||
      iF[477] !== aL ||
      iF[478] !== ap ||
      iF[479] !== iX ||
      iF[480] !== as ||
      iF[481] !== al ||
      iF[482] !== aG ||
      iF[483] !== ai ||
      iF[484] !== t2 ||
      iF[485] !== i4 ||
      iF[486] !== tq ||
      iF[487] !== aY ||
      iF[488] !== a1 ||
      iF[489] !== sU ||
      iF[490] !== tL ||
      iF[491] !== sI ||
      iF[492] !== i9 ||
      iF[493] !== sE ||
      iF[494] !== sF ||
      iF[495] !== eL ||
      iF[496] !== t9 ||
      iF[497] !== s5 ||
      iF[498] !== az ||
      iF[499] !== t5 ||
      iF[500] !== sv ||
      iF[501] !== sf ||
      iF[502] !== a_ ||
      iF[503] !== tQ ||
      iF[504] !== t6 ||
      iF[505] !== ag ||
      iF[506] !== tW ||
      iF[507] !== s3 ||
      iF[508] !== aA ||
      iF[509] !== sc ||
      iF[510] !== i7 ||
      iF[511] !== su ||
      iF[512] !== si ||
      iF[513] !== aX ||
      iF[514] !== a0 ||
      iF[515] !== i5 ||
      iF[516] !== ti ||
      iF[517] !== aw ||
      iF[518] !== tX ||
      iF[519] !== t1 ||
      iF[520] !== aa ||
      iF[521] !== ar ||
      iF[522] !== t8 ||
      iF[523] !== sR ||
      iF[524] !== iw ||
      iF[525] !== an ||
      iF[526] !== t0 ||
      iF[527] !== tG ||
      iF[528] !== tM ||
      iF[529] !== se ||
      iF[530] !== tV ||
      iF[531] !== av ||
      iF[532] !== aM ||
      iF[533] !== tH ||
      iF[534] !== am.available ||
      iF[535] !== t4 ||
      iF[536] !== ax ||
      iF[537] !== s0 ||
      iF[538] !== sY ||
      iF[539] !== s6 ||
      iF[540] !== sD ||
      iF[541] !== sx ||
      iF[542] !== t$ ||
      iF[543] !== a$ ||
      iF[544] !== aW ||
      iF[545] !== af ||
      iF[546] !== aq ||
      iF[547] !== aJ ||
      iF[548] !== aZ ||
      iF[549] !== ao ||
      iF[550] !== aH ||
      iF[551] !== i6 ||
      iF[552] !== sA ||
      iF[553] !== tz
        ? ((iD =
            aX ??
            a1 ??
            (0, t.jsxs)(
              "form",
              {
                className: (0, m.A)("flex w-full flex-col gap-6", "success" === tz ? "max-w-lg" : "max-w-125"),
                onSubmit: aZ,
                "aria-busy": ti,
                children: [
                  "success" === tz &&
                    (0, t.jsx)(ec.k, {
                      order: 0,
                      children: (0, t.jsx)("div", {
                        className: "flex justify-center",
                        "aria-hidden": "true",
                        children: (0, t.jsx)(S.I, { asset: d.E, className: "size-20" }),
                      }),
                    }),
                  (0, t.jsxs)(ec.k, {
                    className: (0, m.A)(
                      "flex flex-col gap-1.5",
                      "method" === tz && "max-md:mt-12 max-md:mb-1 max-md:gap-3",
                    ),
                    order: 0,
                    children: [
                      aY,
                      (0, t.jsxs)(A.L3, {
                        className: (0, m.A)(
                          "text-heading-app leading-tight font-normal wrap-anywhere",
                          "method" === tz && "max-md:text-heading-lg max-md:text-balance",
                          "success" === tz && "text-center",
                        ),
                        children: [
                          i4 &&
                            !["delivery", "code", "delivery_pending", "domain", "web_verification"].includes(tz) &&
                            ("account" === tz && iX
                              ? (0, t.jsx)(x.A, {
                                  id: "businessProfiles.creation.dispute.claimed",
                                  defaultMessage: "{name} is already claimed",
                                  values: { name: iO.name },
                                })
                              : (0, t.jsx)(F, { step: tz, name: iO.name })),
                          !i4 &&
                            null == eL &&
                            ("account" === tz || (tZ && !ae && "review" !== tz && "web_verification" !== tz)) &&
                            ("preparing" in iq && iq.unknownOwnership
                              ? (0, t.jsx)(x.A, {
                                  id: "businessProfiles.claim.account.confirmUnknown",
                                  defaultMessage: "Continue with this account for {business}?",
                                  values: { business: iO.name },
                                })
                              : (0, t.jsx)(x.A, {
                                  id: "chatgpt.localBusiness.claim.account.title",
                                  defaultMessage: "Claim {name} in ChatGPT",
                                  values: { name: iO.name },
                                })),
                          "method" === tz &&
                            ax &&
                            (0, t.jsx)(x.A, {
                              id: "businessProfiles.claim.verifyOwnership",
                              defaultMessage: "Verify ownership of {name}",
                              values: { name: iO.name },
                            }),
                          "method" === tz &&
                            !i4 &&
                            !ax &&
                            (tL
                              ? (0, t.jsx)(x.A, {
                                  id: "businessProfiles.claim.method.changeTitle",
                                  defaultMessage: "Choose another way to verify your claim for {name}",
                                  values: { name: iO.name },
                                })
                              : (0, t.jsx)(x.A, {
                                  id: "chatgpt.localBusiness.claim.method.title",
                                  defaultMessage: "Choose how to verify your claim",
                                })),
                          "web_verification" === tz &&
                            (sp
                              ? (0, t.jsx)(x.A, { ...i5.shopifyTitle })
                              : (0, t.jsx)(x.A, {
                                  id: "chatgpt.localBusiness.claim.shopify.webOnly.title",
                                  defaultMessage: "Continue verification in ChatGPT",
                                })),
                          null != eL && (0, t.jsx)(Z.k, { step: eL, destination: t2 ?? sE }),
                          "delivery" === tz &&
                            !t9 &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.delivery.title",
                              defaultMessage: "How would you like to receive a verification code at {phone}?",
                              values: { phone: ai },
                            }),
                          ae &&
                            !t9 &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.code.title",
                              defaultMessage: "Enter the verification code sent to {phone}",
                              values: { phone: t2 ?? i6 },
                            }),
                          !i4 &&
                            "review" === tz &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.review.title",
                              defaultMessage: "We\u2019re reviewing your claim for {name}",
                              values: { name: iO.name },
                            }),
                          !i4 && "success" === tz && (0, t.jsx)(ed.Cm, { completion: "claim", name: iO.name }),
                          !i4 &&
                            "failed" === tz &&
                            (t5
                              ? (0, t.jsx)(x.A, {
                                  id: "chatgpt.localBusiness.claim.industryIneligible.title",
                                  defaultMessage: "You can\u2019t claim this business",
                                })
                              : (0, t.jsx)(x.A, {
                                  id: "chatgpt.localBusiness.claim.failed.title",
                                  defaultMessage: "This claim could not be approved",
                                })),
                          !i4 &&
                            "cancelled" === tz &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.cancelled.title",
                              defaultMessage: "Your claim has been withdrawn",
                            }),
                        ],
                      }),
                      t5 &&
                        (0, t.jsx)("p", {
                          className: "text-sm leading-5 text-secondary",
                          children: (0, t.jsx)(x.A, {
                            id: "chatgpt.localBusiness.claim.industryIneligible.description",
                            defaultMessage:
                              "Businesses in this category aren\u2019t eligible to be claimed in ChatGPT.",
                          }),
                        }),
                      !i4 &&
                        "cancelled" === tz &&
                        (0, t.jsx)("p", {
                          className: "text-sm leading-5 text-secondary",
                          children: (0, t.jsx)(x.A, {
                            id: "businessProfiles.claim.cancelled.description",
                            defaultMessage:
                              "Withdrawing your claim will stop the verification process. You can claim this business again at any time.",
                          }),
                        }),
                      "account" === tz &&
                        (0, t.jsxs)("p", {
                          className: "text-sm text-secondary",
                          children: [
                            i4 &&
                              (iX
                                ? (0, t.jsx)(x.A, {
                                    id: "businessProfiles.creation.dispute.explanation",
                                    defaultMessage:
                                      "Someone else manages this business in ChatGPT. You can dispute ownership if you believe you should have access instead. If your dispute is approved, you\u2019ll use the account below to manage {name}.",
                                    values: { name: iO.name },
                                  })
                                : (0, t.jsx)(x.A, {
                                    id: "chatgpt.localBusiness.dispute.account.description",
                                    defaultMessage:
                                      "If your dispute is approved, the account you use to submit this dispute will also be used to manage {name} in ChatGPT.",
                                    values: { name: iO.name },
                                  })),
                            !i4 &&
                              (0, t.jsx)(x.A, {
                                id: "chatgpt.localBusiness.claim.account.currentAccountDescription",
                                defaultMessage: "You can manage this profile with your current account",
                              }),
                          ],
                        }),
                    ],
                  }),
                  ("account" === tz || (tZ && !i4 && !ae && "review" !== tz)) &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        null != i9 &&
                          (0, t.jsxs)(ec.k, {
                            className:
                              "flex w-fit max-w-full items-center gap-3 rounded-xl border border-default p-4 font-medium",
                            order: 1,
                            children: [
                              (0, t.jsx)("span", {
                                className:
                                  "flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-secondary",
                                children: (0, t.jsx)(C.CVn, {}),
                              }),
                              (0, t.jsx)("span", { className: "break-all", children: i9 }),
                            ],
                          }),
                        "account" === tz &&
                          (0, t.jsx)(ec.k, {
                            order: 2,
                            children: (0, t.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: (0, t.jsx)(O.Rt, {
                                initiator: "markdown_link_click",
                                openTarget: "external-browser",
                              }),
                            }),
                          }),
                      ],
                    }),
                  i4 &&
                    tZ &&
                    "persona" !== tz &&
                    "review" !== tz &&
                    "web_verification" !== tz &&
                    "delivery_pending" !== tz &&
                    !ao &&
                    (0, t.jsx)("p", {
                      role: "status",
                      className: "text-secondary",
                      children: (0, t.jsx)(x.A, {
                        id: "chatgpt.localBusiness.dispute.preparing",
                        defaultMessage: "We\u2019re preparing your ownership verification",
                      }),
                    }),
                  !i4 &&
                    null == eL &&
                    tZ &&
                    !ae &&
                    "review" !== tz &&
                    "persona" !== tz &&
                    !ao &&
                    (0, t.jsx)(ec.k, {
                      order: 2,
                      children: (0, t.jsxs)("p", {
                        role: "status",
                        className: "text-secondary",
                        children: [
                          "pending" === tz &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.status.pending",
                              defaultMessage: "Your claim is pending verification",
                            }),
                          "in_progress" === tz &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.status.inProgress",
                              defaultMessage: "Your claim verification is in progress",
                            }),
                          "needs_information" === tz &&
                            (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.status.needsInformation",
                              defaultMessage: "Your claim needs more information",
                            }),
                        ],
                      }),
                    }),
                  "persona" === tz &&
                    (0, t.jsxs)(ec.k, {
                      order: 2,
                      children: [
                        (0, t.jsxs)("div", {
                          role: "status",
                          className: "text-secondary",
                          children: [
                            i4
                              ? (0, t.jsx)(U, { name: iO.name })
                              : (0, t.jsx)(t.Fragment, {
                                  children: tX?.verification_url
                                    ? (0, t.jsx)(x.A, {
                                        id: "chatgpt.localBusiness.claim.persona.verificationReady",
                                        defaultMessage:
                                          "Verify your identity with a government-issued ID to continue claiming this business. Your claim status will update here.",
                                      })
                                    : (0, t.jsx)(x.A, {
                                        id: "chatgpt.localBusiness.claim.persona.verificationPreparing",
                                        defaultMessage: "We\u2019re getting verification ready.",
                                      }),
                                }),
                            !tX?.verification_url &&
                              !(tH && "verified" === tq) &&
                              (!i4 || sA) &&
                              (0, t.jsx)(M.y, { as: "span", containerClassName: "ms-2 align-middle" }),
                          ],
                        }),
                        !tg &&
                          (0, t.jsxs)("div", {
                            className: "mt-6 flex flex-wrap items-start gap-2",
                            children: [
                              aU,
                              (!tH || "verified" === tq) &&
                                (tX?.verification_url || (i4 && (!sA || "verified" === tq))) &&
                                (0, t.jsx)(
                                  E.t,
                                  {
                                    size: "formAction",
                                    radius: "full",
                                    endIcon: i4 ? (0, t.jsx)(C.gXS, {}) : void 0,
                                    label: (0, t.jsx)(x.A, {
                                      id: "businessProfiles.claim.openPersona",
                                      defaultMessage: "Continue to ID verification",
                                    }),
                                    verificationUrl: tX?.verification_url ?? void 0,
                                    onLaunch: t0 ? a_ : void 0,
                                    onLaunchStart: aA,
                                    onComplete: (e) => {
                                      let i = tM.getQueryData(["business-claim-preview", sv]),
                                        s = (i?.personaVerification ?? tX)?.verification_url
                                      if ((null == i || "persona" === i.step) && s && eb(s) === e) {
                                        let s = {
                                          ...i,
                                          step: "review",
                                          pauseStatusPolling: !0,
                                          personaVerification: null,
                                        }
                                        ;((tk.current = { id: e, receipt: s }), ay(s))
                                      }
                                    },
                                    onActiveChange: (e) => sx(e ? (t1 ?? null) : null),
                                  },
                                  t1,
                                ),
                            ],
                          }),
                      ],
                    }),
                  "method" === tz &&
                    !ax &&
                    (0, t.jsxs)(ec.k, {
                      className: "rounded-2xl border border-default pb-1",
                      order: 1,
                      children: [
                        (0, t.jsxs)(o.z, {
                          value: tQ,
                          onChange: (e) => {
                            ;(sD(e), tL || "email" !== e || aw("start", sX, e))
                          },
                          onClickCapture: (e) => {
                            !tL &&
                              "email" === tQ &&
                              e.target instanceof Element &&
                              e.target.closest('button[role="radio"][value="email"]:enabled') &&
                              aw("start", sX, "email")
                          },
                          variant: "list",
                          "aria-label": sf.formatMessage({
                            id: "chatgpt.localBusiness.claim.method.label",
                            defaultMessage: "Verification method",
                          }),
                          children: [
                            sp &&
                              null != t$ &&
                              (0, t.jsx)(o.z.Item, {
                                value: "shopify",
                                disabled: ti || tW || !tY,
                                block: !0,
                                children: (0, t.jsxs)("span", {
                                  className: "flex min-w-0 flex-col text-base",
                                  children: [
                                    (0, t.jsx)(x.A, {
                                      id: "businessProfiles.claim.method.shopify",
                                      defaultMessage: "Shopify store",
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "text-sm text-secondary",
                                      children: (0, t.jsx)(x.A, {
                                        id: "businessProfiles.claim.method.shopifyDescription",
                                        defaultMessage: "Connect your Shopify store to verify your claim",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            (sR || (tU && "phone" === tQ)) &&
                              (0, t.jsx)(o.z.Item, {
                                value: "phone",
                                disabled: ti || tW || !sR,
                                block: !0,
                                children: (0, t.jsxs)("span", {
                                  className: "flex min-w-0 flex-col text-base",
                                  children: [
                                    (0, t.jsx)(x.A, {
                                      id: "chatgpt.localBusiness.claim.method.phone",
                                      defaultMessage: "Business phone",
                                    }),
                                    null != t8 &&
                                      (0, t.jsx)("span", { className: "text-sm text-secondary", children: t8 }),
                                    (0, t.jsx)("span", {
                                      className: "text-sm text-secondary",
                                      children: (0, t.jsx)(x.A, {
                                        id: "chatgpt.localBusiness.claim.method.phone.description",
                                        defaultMessage: "Get a code by text or phone call",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            (sF || (tU && "email" === tQ)) &&
                              (0, t.jsx)(o.z.Item, {
                                value: "email",
                                block: !0,
                                disabled: ti || tW,
                                children: (0, t.jsxs)("span", {
                                  className: "flex min-w-0 flex-col text-base",
                                  children: [
                                    (0, t.jsx)(x.A, {
                                      id: "chatgpt.localBusiness.claim.method.email",
                                      defaultMessage: "Business email",
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "text-sm text-secondary",
                                      children: (0, t.jsx)(x.A, {
                                        id: "chatgpt.localBusiness.claim.email.method.description",
                                        defaultMessage: "Get a code at {email}",
                                        values: { email: sE ?? t2 },
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            (sU || (tU && "domain" === tQ)) &&
                              (0, t.jsx)(o.z.Item, {
                                value: "domain",
                                block: !0,
                                disabled: ti || tW || !sU,
                                children: (0, t.jsxs)("span", {
                                  className: "flex min-w-0 flex-col text-base",
                                  children: [
                                    (0, t.jsx)(x.A, {
                                      id: "chatgpt.localBusiness.claim.method.domain",
                                      defaultMessage: "Website domain",
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "text-sm text-secondary",
                                      children: t6
                                        ? (0, t.jsx)(x.A, {
                                            id: "chatgpt.localBusiness.claim.domain.ownership_help",
                                            defaultMessage:
                                              "Use DNS or your website to verify that you control {domain}",
                                            values: { domain: t6 },
                                          })
                                        : (0, t.jsx)(x.A, {
                                            id: "chatgpt.localBusiness.claim.dns.unavailable",
                                            defaultMessage: "Unavailable for this business",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                            !tH &&
                              sI?.includes("persona") &&
                              (0, t.jsx)(o.z.Item, {
                                value: "persona",
                                disabled: ti || tW || !si,
                                block: !0,
                                children: (0, t.jsxs)("span", {
                                  className: "flex min-w-0 flex-col text-base",
                                  children: [
                                    (0, t.jsx)(x.A, {
                                      id: "businessProfiles.claim.method.persona",
                                      defaultMessage: "Verify with a government-issued ID",
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "text-sm text-secondary",
                                      children: (0, t.jsx)(x.A, {
                                        id: "businessProfiles.claim.method.persona.description",
                                        defaultMessage: "Verify your identity and connection to the business",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                        !tU &&
                          sI?.length === 0 &&
                          (0, t.jsx)("p", {
                            role: "status",
                            className: "px-4 pb-4 text-sm text-secondary",
                            children: (0, t.jsx)(x.A, {
                              id: "chatgpt.localBusiness.claim.method.unavailable",
                              defaultMessage:
                                "Verification is unavailable for this business because no eligible verification methods are available",
                            }),
                          }),
                      ],
                    }),
                  "web_verification" === tz &&
                    (0, t.jsx)(ec.k, {
                      order: 1,
                      children: (0, t.jsx)("p", { className: "text-secondary select-none", children: av() }),
                    }),
                  null != eL &&
                    (0, t.jsx)(ec.k, {
                      order: 1,
                      children: (0, t.jsx)(Z.S, {
                        step: eL,
                        backAction: aU,
                        code: sX,
                        disabled: ti || tg || ("delivery" === tz && (aa || !(t2 ?? sE))),
                        pending: aH,
                        invalid: "verify" === s5 || "incorrectCode" === s5,
                        error: null == s5 || tg ? void 0 : az,
                        resendDisabled: ti || tg || tE || !am.available || "send_limit_reached" === ao,
                        cooldownSeconds: ap,
                        checkDisabled: ti || tg || tE || !sc,
                        onChange: (e) => {
                          ;(s0(e), s6(null))
                        },
                        onVerify: (e) => void aw("verify", e),
                        onSend: () => aw("delivery" === tz ? "send" : "resend"),
                        onCheck: () => (s6(null), tV({ cancelRefetch: !1 })),
                      }),
                    }),
                  null != iw &&
                    (0, t.jsx)(ec.k, {
                      order: 1,
                      children: (0, t.jsx)(Y.A, {
                        phase: iw,
                        busy: ti,
                        disabled: null != tm,
                        delivery: al,
                        availableDeliveries: as,
                        unavailableDeliveryMessages: (0, $.J)(an),
                        deliveryDisabled: aa || "delivery" === tG,
                        deliveryContinueAction: aG,
                        sendDisabled: aq && (!ai || "delivery" === tG),
                        canResend: am.available && ("code" !== iw || "send_limit_reached" !== ao),
                        cooldownSeconds: ap,
                        code: sX,
                        invalid: "verify" === s5 || "incorrectCode" === s5,
                        retryable: "verify" === s5,
                        error: af && !tg ? az : void 0,
                        onCodeChange: (e) => {
                          ;(s0(e), s6(null))
                        },
                        onDeliveryChange: sY,
                        onSend: async () => {
                          await aw("send")
                        },
                        onResend: async () => {
                          await aw("resend")
                        },
                        onVerify: (e) => aw("verify", e),
                        onCheck: () => void tV(),
                        checkDisabled: tE || !sc,
                        hidePendingActions: tg,
                        hidePendingStatus: null != ao || (i4 && !tH),
                        hideProgress: !0,
                        inForm: !0,
                        backAction: aU,
                      }),
                    }),
                  "cancelled" !== tz &&
                    (aa || null != ar) &&
                    (0, t.jsx)("p", {
                      role: "status",
                      className: "text-secondary",
                      children: (0, t.jsx)(x.A, { ...(ar ?? i5.phoneAttemptEnded) }),
                    }),
                  ao &&
                    null == ar &&
                    (0, t.jsxs)("p", {
                      role: "status",
                      className: "text-secondary select-none",
                      children: [
                        "send_limit_reached" === ao && (0, t.jsx)(x.A, { ...G.f.limitReached }),
                        "send_limit_reached" !== ao &&
                          i4 &&
                          (0, t.jsx)(x.A, {
                            id: "businessProfiles.dispute.verificationIssue.withdraw",
                            defaultMessage: "We couldn\u2019t complete your verification",
                          }),
                        "send_limit_reached" !== ao &&
                          !i4 &&
                          (0, t.jsx)(x.A, {
                            id: "chatgpt.localBusiness.claim.verificationRecovery",
                            defaultMessage:
                              "{issue, select, setup_failed {We couldn\u2019t prepare verification} other {We couldn\u2019t complete verification for your claim}}",
                            values: { issue: ao },
                          }),
                      ],
                    }),
                  "review" === tz &&
                    (0, t.jsxs)(ec.k, {
                      className: "flex flex-col gap-6",
                      order: 1,
                      children: [
                        (0, t.jsx)(J.hp, {
                          showReviewSpinner: !(tg && ti),
                          receivedTitle: i4
                            ? (0, t.jsx)(x.A, {
                                id: "chatgpt.localBusiness.dispute.review.received",
                                defaultMessage: "Dispute received",
                              })
                            : (0, t.jsx)(x.A, {
                                id: "chatgpt.localBusiness.claim.review.received",
                                defaultMessage: "Claim received",
                              }),
                          receivedDescription: (0, t.jsx)(J.Vj, {
                            actionRef: tb,
                            disabled: ti || tg,
                            kind: i4 ? "dispute" : "claim",
                            name: iO.name,
                            onWithdraw: aM,
                          }),
                          reviewTitle: (0, t.jsx)(x.A, {
                            id: "chatgpt.localBusiness.claim.review.progress",
                            defaultMessage: "Review in progress",
                          }),
                          reviewDescription: (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("span", {
                                className: "hidden md:inline",
                                children: (0, t.jsx)(x.A, {
                                  id: "chatgpt.localBusiness.claim.review.progress.description",
                                  defaultMessage: "We\u2019re reviewing your business information.",
                                }),
                              }),
                              (0, t.jsx)("span", {
                                className: "md:hidden",
                                children: (0, t.jsx)(x.A, {
                                  id: "businessProfiles.review.withdrawWindow",
                                  defaultMessage:
                                    "We\u2019re reviewing your business information. You can withdraw your {kind, select, dispute {dispute} other {claim}} at any time during the review.",
                                  values: { kind: i4 ? "dispute" : "claim" },
                                }),
                              }),
                            ],
                          }),
                          decisionTitle: (0, t.jsx)(x.A, {
                            id: "chatgpt.localBusiness.claim.review.decision",
                            defaultMessage: "Decision reached",
                          }),
                          decisionDescription: i9?.trim()
                            ? (0, t.jsx)(x.A, {
                                id: "businessProfiles.review.emailNotification.recipient",
                                defaultMessage:
                                  "We\u2019ll email {email} with our decision or if we need more information.",
                                values: { email: i9 },
                              })
                            : void 0,
                        }),
                        !i4 && (0, t.jsx)(V.D, { placement: "claim_pending" }),
                      ],
                    }),
                  aJ,
                  "success" === tz &&
                    (0, t.jsx)(ed.Um, {
                      profileId: se?.getApprovedProfileId?.(),
                      agentCompletion: i4 || "ecommerce" !== iO.businessType ? void 0 : "claim",
                      marketingEmailChoice:
                        !i4 &&
                        (se?.marketingEmailChoice
                          ? (0, t.jsx)(z.m, { ...se.marketingEmailChoice })
                          : (0, t.jsx)(z.O, {})),
                      onManageProfile: su,
                      children: !i4 && (0, t.jsx)(V.D, { placement: "claim_verified" }),
                    }),
                  a0,
                  (0, t.jsxs)(ec.k, {
                    className: "flex flex-wrap gap-2",
                    order: "account" === tz || "code" === tz || tZ ? 3 : 2,
                    children: [
                      null == iw && null == eL && "persona" !== tz && aU,
                      !i4 &&
                        "failed" === tz &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(j.$, {
                              type: "button",
                              color: "outlineGhost",
                              size: "formAction",
                              onClick: i7,
                              children: (0, t.jsx)(x.A, {
                                id: "businessProfiles.claim.failed.back",
                                defaultMessage: "Back to business",
                              }),
                            }),
                            t4 && (0, t.jsx)(ef, { profileId: t4, onClose: i7 }),
                          ],
                        }),
                      "review" === tz &&
                        (0, t.jsx)(j.$, {
                          type: "button",
                          color: "primary",
                          size: "formAction",
                          radius: "full",
                          onClick: i7,
                          children: (0, t.jsx)(x.A, { id: "businessProfiles.review.done", defaultMessage: "Done" }),
                        }),
                      !i4 &&
                        "cancelled" === tz &&
                        (0, t.jsx)(j.$, {
                          type: "button",
                          size: "formAction",
                          color: "primary",
                          onClick: i7,
                          children: (0, t.jsx)(x.A, {
                            id: "businessProfiles.claim.cancelled.backToChatGPT",
                            defaultMessage: "Back to ChatGPT",
                          }),
                        }),
                      aW &&
                        (0, t.jsx)(ee.C, {
                          size: "formAction",
                          radius: "full",
                          color: "primary",
                          type: "submit",
                          pending: null == se || a$,
                          disabled: ti || ("method" === tz && (!tU || (tL && tQ !== s3.method)) && !ag && !ax),
                          children: aL,
                        }),
                      "web_verification" === tz &&
                        tY &&
                        (0, t.jsx)(ee.C, {
                          type: "button",
                          size: "formAction",
                          radius: "full",
                          color: "primary",
                          pending: a$,
                          disabled: ti || tg,
                          onClick: () => void aw("shopify"),
                          children: (0, t.jsx)(x.A, {
                            id: "businessProfiles.claim.shopify.continue",
                            defaultMessage: "Connect Shopify",
                          }),
                        }),
                    ],
                  }),
                ],
              },
              tz,
            )),
          (iF[464] = iq),
          (iF[465] = tZ),
          (iF[466] = ay),
          (iF[467] = aU),
          (iF[468] = sp),
          (iF[469] = iO),
          (iF[470] = tU),
          (iF[471] = tY),
          (iF[472] = tE),
          (iF[473] = sX),
          (iF[474] = ae),
          (iF[475] = tg),
          (iF[476] = tm),
          (iF[477] = aL),
          (iF[478] = ap),
          (iF[479] = iX),
          (iF[480] = as),
          (iF[481] = al),
          (iF[482] = aG),
          (iF[483] = ai),
          (iF[484] = t2),
          (iF[485] = i4),
          (iF[486] = tq),
          (iF[487] = aY),
          (iF[488] = a1),
          (iF[489] = sU),
          (iF[490] = tL),
          (iF[491] = sI),
          (iF[492] = i9),
          (iF[493] = sE),
          (iF[494] = sF),
          (iF[495] = eL),
          (iF[496] = t9),
          (iF[497] = s5),
          (iF[498] = az),
          (iF[499] = t5),
          (iF[500] = sv),
          (iF[501] = sf),
          (iF[502] = a_),
          (iF[503] = tQ),
          (iF[504] = t6),
          (iF[505] = ag),
          (iF[506] = tW),
          (iF[507] = s3),
          (iF[508] = aA),
          (iF[509] = sc),
          (iF[510] = i7),
          (iF[511] = su),
          (iF[512] = si),
          (iF[513] = aX),
          (iF[514] = a0),
          (iF[515] = i5),
          (iF[516] = ti),
          (iF[517] = aw),
          (iF[518] = tX),
          (iF[519] = t1),
          (iF[520] = aa),
          (iF[521] = ar),
          (iF[522] = t8),
          (iF[523] = sR),
          (iF[524] = iw),
          (iF[525] = an),
          (iF[526] = t0),
          (iF[527] = tG),
          (iF[528] = tM),
          (iF[529] = se),
          (iF[530] = tV),
          (iF[531] = av),
          (iF[532] = aM),
          (iF[533] = tH),
          (iF[534] = am.available),
          (iF[535] = t4),
          (iF[536] = ax),
          (iF[537] = s0),
          (iF[538] = sY),
          (iF[539] = s6),
          (iF[540] = sD),
          (iF[541] = sx),
          (iF[542] = t$),
          (iF[543] = a$),
          (iF[544] = aW),
          (iF[545] = af),
          (iF[546] = aq),
          (iF[547] = aJ),
          (iF[548] = aZ),
          (iF[549] = ao),
          (iF[550] = aH),
          (iF[551] = i6),
          (iF[552] = sA),
          (iF[553] = tz),
          (iF[554] = iD))
        : (iD = iF[554]),
        iF[555] !== ti || iF[556] !== aK || iF[557] !== iB || iF[558] !== a3 || iF[559] !== a4 || iF[560] !== iD
          ? ((iI = (0, t.jsx)(X.Y, {
              backButtonRef: tw,
              backLabel: iB,
              onBack: a3,
              busy: ti,
              contentFirstOnMobile: !0,
              hidePreviewOnMobile: a4,
              preview: aK,
              content: iD,
            })),
            (iF[555] = ti),
            (iF[556] = aK),
            (iF[557] = iB),
            (iF[558] = a3),
            (iF[559] = a4),
            (iF[560] = iD),
            (iF[561] = iI))
          : (iI = iF[561]),
        iF[562] !== a2 || iF[563] !== iI
          ? ((iT = (0, t.jsx)("div", {
              ref: sm,
              className: "relative h-full overflow-y-auto bg-surface text-base text-default",
              inert: a2,
              children: iI,
            })),
            (iF[562] = a2),
            (iF[563] = iI),
            (iF[564] = iT))
          : (iT = iF[564]))
      let a5 = iT,
        a6 = !sp,
        a8 = ti || aS,
        a7 = aQ ? i7 : aP
      return (
        iF[565] !== aS
          ? ((iE = {
              onEscapeKeyDown: (e) => {
                aS && e.preventDefault()
              },
            }),
            (iF[565] = aS),
            (iF[566] = iE))
          : (iE = iF[566]),
        iF[567] !== iO ||
        iF[568] !== tU ||
        iF[569] !== tv ||
        iF[570] !== tg ||
        iF[571] !== tx ||
        iF[572] !== i7 ||
        iF[573] !== i5 ||
        iF[574] !== ti ||
        iF[575] !== aw ||
        iF[576] !== aM ||
        iF[577] !== ty ||
        iF[578] !== tp
          ? ((iV =
              ((tg && tU) || tx) &&
              (0, t.jsx)(A.lG, {
                open: !0,
                variant: "centeredText",
                size: "feature",
                showDialogClose: !ti,
                shouldIgnoreClickOutside: ti,
                onOpenChange: (e) => {
                  e || tn.current || (tp(null), ty(!1))
                },
                contentProps: {
                  onCloseAutoFocus: (e) => {
                    ;(e.preventDefault(), (tb.current ?? tw.current)?.focus())
                  },
                },
                children: (0, t.jsx)(_.R4, {
                  as: "form",
                  variant: "chatgpt",
                  onSubmit: (e) => {
                    ;(e.preventDefault(), e.stopPropagation(), tn.current || (tx ? i7() : aw("cancel")))
                  },
                  children: (0, t.jsxs)("div", {
                    className: (0, m.A)(
                      "flex flex-col px-6 text-center sm:px-10",
                      tx ? "gap-6 pt-12 pb-8" : "gap-8 pt-14 pb-6 sm:py-10",
                    ),
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("div", {
                            "aria-live": "polite",
                            className: (0, m.A)("flex flex-col", tx ? "gap-1" : "gap-4"),
                            children: [
                              (0, t.jsx)(A.L3, {
                                className: "text-heading-lg leading-7 font-semibold wrap-anywhere select-none",
                                variant: "promotional",
                                children: tx
                                  ? (0, t.jsx)(x.A, {
                                      id: "businessProfiles.claim.saveProgress.title",
                                      defaultMessage: "Save your progress?",
                                    })
                                  : (0, t.jsx)(x.A, { ...i5.withdrawTitle }),
                              }),
                              (0, t.jsx)(A.rr, {
                                className: "text-onboarding-body text-secondary select-none",
                                children: tx
                                  ? (0, t.jsx)(x.A, { ...i5.saveProgressDescription, values: { name: iO.name } })
                                  : (0, t.jsx)(x.A, { ...i5.withdrawDescription, values: { name: iO.name } }),
                              }),
                            ],
                          }),
                          tv &&
                            (0, t.jsx)("p", {
                              role: "alert",
                              className: "mt-4 text-danger",
                              children: (0, t.jsx)(x.A, { ...i5.withdrawError }),
                            }),
                        ],
                      }),
                      (0, t.jsxs)(_.Es, {
                        className: "flex-col",
                        children: [
                          (0, t.jsx)(ee.C, {
                            className: "w-full",
                            color: tx ? "primary" : "dangerSolid",
                            size: "promotionalAction",
                            type: "submit",
                            pending: ti && tg,
                            disabled: ti,
                            children: tx
                              ? (0, t.jsx)(x.A, {
                                  id: "businessProfiles.claim.saveProgress.saveAndExit",
                                  defaultMessage: "Save and exit",
                                })
                              : (0, t.jsx)(x.A, { ...i5.withdrawConfirm }),
                          }),
                          (0, t.jsx)(j.$, {
                            className: "w-full",
                            color: "ghostSecondary",
                            size: "promotionalLink",
                            type: "button",
                            disabled: ti,
                            onClick: (e) => {
                              tx ? (e.currentTarget.focus(), aM()) : (tp(null), ty(!1))
                            },
                            children: tx
                              ? (0, t.jsx)(x.A, {
                                  id: "businessProfiles.claim.saveProgress.discard",
                                  defaultMessage: "Discard progress",
                                })
                              : (0, t.jsx)(x.A, {
                                  id: "businessProfiles.claim.cancel.notNow",
                                  defaultMessage: "Not now",
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })),
            (iF[567] = iO),
            (iF[568] = tU),
            (iF[569] = tv),
            (iF[570] = tg),
            (iF[571] = tx),
            (iF[572] = i7),
            (iF[573] = i5),
            (iF[574] = ti),
            (iF[575] = aw),
            (iF[576] = aM),
            (iF[577] = ty),
            (iF[578] = tp),
            (iF[579] = iV))
          : (iV = iF[579]),
        iF[580] !== a5 ||
        iF[581] !== aS ||
        iF[582] !== a6 ||
        iF[583] !== a8 ||
        iF[584] !== a7 ||
        iF[585] !== iE ||
        iF[586] !== iV
          ? ((iR = (0, t.jsxs)(X.d, {
              modal: a6,
              personaActive: aS,
              closeDisabled: a8,
              onClose: a7,
              contentProps: iE,
              children: [a5, iV],
            })),
            (iF[580] = a5),
            (iF[581] = aS),
            (iF[582] = a6),
            (iF[583] = a8),
            (iF[584] = a7),
            (iF[585] = iE),
            (iF[586] = iV),
            (iF[587] = iR))
          : (iR = iF[587]),
        iR
      )
    }
    function ep() {}
    function eg() {}
    function ex() {
      return Date.now()
    }
    function ev() {
      return Date.now() + 6e4
    }
    function ey(e, i) {
      switch (e.step) {
        case "account":
        case "method":
        case "cancelled":
        case "success":
        case "failed":
          return !1
        case "persona":
          return !i || null != e.disputeAccessVerification || "personaVerification" in e
        case "delivery":
        case "delivery_pending":
        case "code":
        case "domain":
        case "web_verification":
        case "pending":
        case "in_progress":
        case "needs_information":
        case "review":
          return !0
      }
    }
    function eb(e) {
      return e ? new URL(e).searchParams.get("inquiry-id") : null
    }
    function ew(e) {
      return (
        "web_verification" === e ||
        "delivery_pending" === e ||
        "persona" === e ||
        "pending" === e ||
        "in_progress" === e ||
        "needs_information" === e ||
        "review" === e
      )
    }
    function ej(e) {
      let i,
        s,
        n = (0, a.c)(5),
        { id: l, dispute: r } = e,
        o = void 0 !== r && r ? el : en
      return (
        n[0] !== o.shopifyRecovery
          ? ((i = (0, t.jsx)(x.A, { ...o.shopifyRecovery })), (n[0] = o.shopifyRecovery), (n[1] = i))
          : (i = n[1]),
        n[2] !== l || n[3] !== i
          ? ((s = (0, t.jsx)("p", { id: l, role: "alert", className: "text-danger", children: i })),
            (n[2] = l),
            (n[3] = i),
            (n[4] = s))
          : (s = n[4]),
        s
      )
    }
  },
  JB4k(e, i, s) {
    var t = s("uv86")
    s.d(i, { k: () => t.kB })
  },
  f0dk(e, i, s) {
    var t = s("ABep"),
      a = s("QosV"),
      n = s("OHqq"),
      l = s("qmMi"),
      r = s("zd8w"),
      o = s("oyxz"),
      c = s("CWeU"),
      d = s("Sm6l"),
      u = s("JNtf"),
      f = s("ZtSy"),
      h = s("HOLv"),
      m = s("bVeK"),
      p = s("Qg7S"),
      g = s("OMIV"),
      x = s("iC84"),
      v = s("Gnfq"),
      y = s("JB4k")
    function b(e) {
      let i,
        s,
        n = (0, a.c)(10),
        { href: l, onActivate: o, title: c, subtitle: d } = e,
        u = (0, r.useId)(),
        h = `${u}-subtitle`
      return (
        n[0] !== u || n[1] !== d || n[2] !== c
          ? ((i = (0, t.jsx)(w, { id: u, title: c, subtitle: d })), (n[0] = u), (n[1] = d), (n[2] = c), (n[3] = i))
          : (i = n[3]),
        n[4] !== l || n[5] !== u || n[6] !== o || n[7] !== h || n[8] !== i
          ? ((s = (0, t.jsx)(f.G, {
              "aria-labelledby": u,
              "aria-describedby": h,
              href: l,
              initiator: "external_link",
              openTarget: "external-browser",
              appearance: "inherit",
              underline: "none",
              className:
                "flex w-full cursor-interaction items-center justify-between gap-4 py-4 text-start focus-visible:outline-ring",
              onActivate: o,
              children: i,
            })),
            (n[4] = l),
            (n[5] = u),
            (n[6] = o),
            (n[7] = h),
            (n[8] = i),
            (n[9] = s))
          : (s = n[9]),
        s
      )
    }
    function w(e) {
      let i,
        s,
        n,
        l,
        r,
        o = (0, a.c)(12),
        { id: c, title: d, subtitle: u } = e
      o[0] !== c || o[1] !== d
        ? ((i = (0, t.jsx)("span", { id: c, children: d })), (o[0] = c), (o[1] = d), (o[2] = i))
        : (i = o[2])
      let f = `${c}-subtitle`
      return (
        o[3] !== u || o[4] !== f
          ? ((s = (0, t.jsx)("span", { id: f, className: "text-sm leading-5 text-secondary", children: u })),
            (o[3] = u),
            (o[4] = f),
            (o[5] = s))
          : (s = o[5]),
        o[6] !== i || o[7] !== s
          ? ((n = (0, t.jsxs)("span", { className: "flex min-w-0 flex-col", children: [i, s] })),
            (o[6] = i),
            (o[7] = s),
            (o[8] = n))
          : (n = o[8]),
        o[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, t.jsx)(m.j1b, { className: "shrink-0" })), (o[9] = l))
          : (l = o[9]),
        o[10] !== n ? ((r = (0, t.jsxs)(t.Fragment, { children: [n, l] })), (o[10] = n), (o[11] = r)) : (r = o[11]),
        r
      )
    }
    s.d(
      i,
      {},
      {
        Cm: function (e) {
          let i,
            s = (0, a.c)(3),
            { completion: n, name: l } = e
          return (
            s[0] !== n || s[1] !== l
              ? ((i =
                  "claim" === n
                    ? (0, t.jsx)(o.A, {
                        id: "businessProfiles.claimSuccess.title",
                        defaultMessage: "You\u2019ve claimed {name}",
                        values: { name: l },
                      })
                    : (0, t.jsx)(o.A, {
                        id: "businessProfiles.creation.completed.title",
                        defaultMessage: "You\u2019ve created {name}",
                        values: { name: l },
                      })),
                (s[0] = n),
                (s[1] = l),
                (s[2] = i))
              : (i = s[2]),
            i
          )
        },
        Oj: b,
        UM: function (e) {
          let i,
            s,
            l,
            r,
            o = (0, a.c)(8),
            { title: c, description: d } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, t.jsx)(y.k, {
                  order: 0,
                  children: (0, t.jsx)("div", {
                    className: "flex justify-center",
                    "aria-hidden": "true",
                    children: (0, t.jsx)(h.I, { asset: n.E, className: "size-20" }),
                  }),
                })),
                (o[0] = i))
              : (i = o[0]),
            o[1] !== c
              ? ((s = (0, t.jsx)(u.L3, {
                  tabIndex: -1,
                  className: "text-center text-heading-app leading-tight font-normal",
                  children: c,
                })),
                (o[1] = c),
                (o[2] = s))
              : (s = o[2]),
            o[3] !== d
              ? ((l = d && (0, t.jsx)(u.rr, { className: "text-center text-base text-secondary", children: d })),
                (o[3] = d),
                (o[4] = l))
              : (l = o[4]),
            o[5] !== s || o[6] !== l
              ? ((r = (0, t.jsxs)(t.Fragment, {
                  children: [i, (0, t.jsxs)(y.k, { className: "flex flex-col gap-1.5", order: 0, children: [s, l] })],
                })),
                (o[5] = s),
                (o[6] = l),
                (o[7] = r))
              : (r = o[7]),
            r
          )
        },
        Um: function (e) {
          let i,
            s,
            n,
            u,
            f,
            h,
            m,
            j,
            A,
            _,
            S,
            C,
            M,
            P,
            k,
            N,
            B,
            D,
            I,
            T,
            E,
            V = (0, a.c)(58),
            {
              children: R,
              marketingEmailChoice: F,
              onManageProfile: U,
              profileId: G,
              pendingCreation: O,
              agentCompletion: z,
            } = e,
            L = void 0 !== O && O,
            W = (0, l._U)(g.JW, x.iL) && !L,
            q = (0, l.Ul)(g.M9),
            H = (0, l.Ul)(g.RS),
            $ = (0, l.Ul)(c.PO),
            Y = (0, r.useRef)(!1),
            [K, Q] = (0, r.useState)(!1)
          ;(V[0] !== W || V[1] !== z || V[2] !== $ || V[3] !== q || V[4] !== H || V[5] !== U
            ? ((i = () => {
                if (
                  !W ||
                  !z ||
                  !U ||
                  !q ||
                  H ||
                  $.authLoading ||
                  "chatgpt" !== $.authMethod ||
                  !0 !== $.hasChatGptToken ||
                  !$.authenticatedUserId ||
                  !$.authenticatedAccountId
                )
                  return
                let e = () => {
                  let { user: e } = q.getContext()
                  !Y.current &&
                    "Ready" === q.loadingStatus &&
                    e.userID === $.authenticatedUserId &&
                    e.custom?.account_id === $.authenticatedAccountId &&
                    (0, p.z)(q) &&
                    ((Y.current = !0),
                    !0 === q.getLayer("907495264").get("skip_confirmation", !1) && (Q(!0), U("agent", z)))
                }
                return (
                  e(),
                  q.on("values_updated", e),
                  () => {
                    q.off("values_updated", e)
                  }
                )
              }),
              (s = [W, z, $, q, H, U]),
              (V[0] = W),
              (V[1] = z),
              (V[2] = $),
              (V[3] = q),
              (V[4] = H),
              (V[5] = U),
              (V[6] = i),
              (V[7] = s))
            : ((i = V[6]), (s = V[7])),
            (0, r.useLayoutEffect)(i, s))
          let Z = (0, r.useId)(),
            J = (0, r.useId)()
          if (K) return null
          V[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, t.jsx)(o.A, {
                id: "businessProfiles.claimSuccess.manage",
                defaultMessage: "Manage your business",
              })),
              (V[8] = n))
            : (n = V[8])
          let X = n
          V[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, t.jsx)(o.A, {
                id: "businessProfiles.claimSuccess.agent",
                defaultMessage: "Start chatting with customers",
              })),
              (V[9] = u))
            : (u = V[9])
          let ee = u
          V[10] !== W
            ? ((f = W
                ? (0, t.jsx)(o.A, {
                    id: "businessProfiles.claimSuccess.reviewAgent",
                    defaultMessage: "Review your business agent",
                  })
                : (0, t.jsx)(o.A, {
                    id: "businessProfiles.claimSuccess.goToProfile",
                    defaultMessage: "Go to business overview",
                  })),
              (V[10] = W),
              (V[11] = f))
            : (f = V[11])
          let ei = f
          V[12] !== W || V[13] !== Z || V[14] !== U
            ? ((h =
                W &&
                (0, t.jsx)("button", {
                  "aria-labelledby": Z,
                  "aria-describedby": `${Z}-subtitle`,
                  type: "button",
                  className:
                    "flex w-full cursor-interaction items-center justify-between gap-4 py-4 text-start focus-visible:outline-ring",
                  disabled: !U,
                  onClick: () => U?.("agent"),
                  children: (0, t.jsx)(w, {
                    id: Z,
                    title: ee,
                    subtitle: (0, t.jsx)(o.A, {
                      id: "businessProfiles.claimSuccess.agentSubtitle",
                      defaultMessage: "Review agent details before you launch.",
                    }),
                  }),
                })),
              (V[12] = W),
              (V[13] = Z),
              (V[14] = U),
              (V[15] = h))
            : (h = V[15])
          let es = `${J}-subtitle`,
            et = !U
          ;(V[16] !== U ? ((m = () => U?.("insights")), (V[16] = U), (V[17] = m)) : (m = V[17]),
            V[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, t.jsx)(o.A, {
                  id: "businessProfiles.claimSuccess.manageSubtitle",
                  defaultMessage: "View insights, add products, and keep your info up to date.",
                })),
                (V[18] = j))
              : (j = V[18]),
            V[19] !== J
              ? ((A = (0, t.jsx)(w, { id: J, title: X, subtitle: j })), (V[19] = J), (V[20] = A))
              : (A = V[20]),
            V[21] !== J || V[22] !== m || V[23] !== A || V[24] !== es || V[25] !== et
              ? ((_ = (0, t.jsx)("button", {
                  "aria-labelledby": J,
                  "aria-describedby": es,
                  type: "button",
                  className:
                    "flex w-full cursor-interaction items-center justify-between gap-4 py-4 text-start focus-visible:outline-ring",
                  disabled: et,
                  onClick: m,
                  children: A,
                })),
                (V[21] = J),
                (V[22] = m),
                (V[23] = A),
                (V[24] = es),
                (V[25] = et),
                (V[26] = _))
              : (_ = V[26]),
            V[27] !== G
              ? ((S = G ? (0, v.ND)(G, !0) : "https://ads.openai.com/#ad-credit"), (V[27] = G), (V[28] = S))
              : (S = V[28]),
            V[29] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, t.jsx)(o.A, {
                  id: "businessProfiles.claimSuccess.advertisingCredit",
                  defaultMessage: "Get $500 in advertising credit",
                })),
                (M = (0, t.jsx)(o.A, {
                  id: "businessProfiles.claimSuccess.adsSubtitle",
                  defaultMessage: "Start advertising with ChatGPT Ads.",
                })),
                (V[29] = C),
                (V[30] = M))
              : ((C = V[29]), (M = V[30])),
            V[31] !== S
              ? ((P = (0, t.jsx)(b, { href: S, title: C, subtitle: M })), (V[31] = S), (V[32] = P))
              : (P = V[32]),
            V[33] !== L
              ? ((k =
                  L &&
                  (0, t.jsx)(b, {
                    href: "https://chatgpt.com/team-sign-up",
                    title: (0, t.jsx)(o.A, {
                      id: "businessProfiles.creation.businessPlan",
                      defaultMessage: "Upgrade to a ChatGPT Business plan",
                    }),
                    subtitle: (0, t.jsx)(o.A, {
                      id: "businessProfiles.creation.businessPlanSubtitle",
                      defaultMessage: "Work with your team and manage billing in a secure workspace.",
                    }),
                  })),
                (V[33] = L),
                (V[34] = k))
              : (k = V[34]),
            V[35] !== R || V[36] !== _ || V[37] !== P || V[38] !== k || V[39] !== h
              ? ((N = (0, t.jsxs)(y.k, {
                  className: "flex flex-col divide-y divide-border rounded-2xl border border-default px-4",
                  order: 1,
                  children: [h, _, P, k, R],
                })),
                (V[35] = R),
                (V[36] = _),
                (V[37] = P),
                (V[38] = k),
                (V[39] = h),
                (V[40] = N))
              : (N = V[40]))
          let ea = L ? "mt-auto md:mt-0" : void 0,
            en = !U
          return (
            V[41] !== W || V[42] !== U
              ? ((B = () => U?.(W ? "agent" : "insights")), (V[41] = W), (V[42] = U), (V[43] = B))
              : (B = V[43]),
            V[44] !== ei || V[45] !== L
              ? ((D = L
                  ? (0, t.jsx)(o.A, {
                      id: "businessProfiles.creation.completed.goToOverview",
                      defaultMessage: "Go to business overview",
                    })
                  : ei),
                (V[44] = ei),
                (V[45] = L),
                (V[46] = D))
              : (D = V[46]),
            V[47] !== en || V[48] !== B || V[49] !== D
              ? ((I = (0, t.jsx)(d.$, {
                  className: "w-full",
                  color: "primary",
                  size: "formAction",
                  radius: "full",
                  disabled: en,
                  onClick: B,
                  children: D,
                })),
                (V[47] = en),
                (V[48] = B),
                (V[49] = D),
                (V[50] = I))
              : (I = V[50]),
            V[51] !== F || V[52] !== ea || V[53] !== I
              ? ((T = (0, t.jsxs)(y.k, { order: 2, className: ea, children: [F, I] })),
                (V[51] = F),
                (V[52] = ea),
                (V[53] = I),
                (V[54] = T))
              : (T = V[54]),
            V[55] !== N || V[56] !== T
              ? ((E = (0, t.jsxs)(t.Fragment, { children: [N, T] })), (V[55] = N), (V[56] = T), (V[57] = E))
              : (E = V[57]),
            E
          )
        },
      },
    )
  },
  LhV4(e, i, s) {
    var t = s("ABep"),
      a = s("QosV"),
      n = s("xSOA"),
      l = s("qmMi"),
      r = s("zd8w"),
      o = s("Wf1j"),
      c = s("oyxz"),
      d = s("g2p6"),
      u = s("Sezd"),
      f = s("SGsN"),
      h = s("OWtl"),
      m = s("U7TT")
    function p(e) {
      let i,
        s,
        n,
        l,
        o = (0, a.c)(11),
        { checked: d, disabled: f, onCheckedChange: h } = e,
        m = (0, r.useId)()
      return (
        o[0] !== d || o[1] !== f || o[2] !== m || o[3] !== h
          ? ((i = (0, t.jsx)(u.S, {
              id: m,
              variant: "choice",
              size: "sm",
              checked: d,
              disabled: f,
              onCheckedChange: h,
            })),
            (o[0] = d),
            (o[1] = f),
            (o[2] = m),
            (o[3] = h),
            (o[4] = i))
          : (i = o[4]),
        o[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)(c.A, {
              id: "businessProfiles.claimSuccess.marketingEmailChoice",
              defaultMessage: "Email me updates and offers about OpenAI\u2019s business tools and advertising.",
            })),
            (o[5] = s))
          : (s = o[5]),
        o[6] !== m ? ((n = (0, t.jsx)("label", { htmlFor: m, children: s })), (o[6] = m), (o[7] = n)) : (n = o[7]),
        o[8] !== i || o[9] !== n
          ? ((l = (0, t.jsxs)("div", {
              className: "mb-6 flex items-center gap-3 text-sm text-secondary",
              children: [i, n],
            })),
            (o[8] = i),
            (o[9] = n),
            (o[10] = l))
          : (l = o[10]),
        l
      )
    }
    s.d(
      i,
      {},
      {
        O: function () {
          let e,
            i,
            s,
            r,
            c,
            u = (0, a.c)(15),
            g = (0, l.gh)(h.u),
            x = (0, l.Ul)(d.Sk),
            { data: v } = (0, l.Ul)(d.s6),
            y = (0, o.A)()
          ;(u[0] !== g
            ? ((e = (e) => {
                let { accountId: i, checked: s } = e
                return (0, m.H)(g, i, "business_profile_marketing_email_opt_in", s)
              }),
              (u[0] = g),
              (u[1] = e))
            : (e = u[1]),
            u[2] !== y || u[3] !== g
              ? ((i = () =>
                  g
                    .get(f.Id)
                    .danger(
                      y.formatMessage({
                        id: "businessProfiles.marketingEmail.saveError",
                        defaultMessage: "Couldn\u2019t save your email preference. Please try again.",
                      }),
                      { errorAnalytics: { toastId: "businessProfiles.marketingEmail.saveError" } },
                    )),
                (u[2] = y),
                (u[3] = g),
                (u[4] = i))
              : (i = u[4]),
            u[5] !== e || u[6] !== i
              ? ((s = { mutationFn: e, onError: i }), (u[5] = e), (u[6] = i), (u[7] = s))
              : (s = u[7]))
          let b = (0, n.n)(s)
          if (null == x || !v) return null
          let w = !0 === v.businessProfileMarketingEmailOptIn
          return (
            u[8] !== x || u[9] !== b
              ? ((r = (e) => b.mutate({ accountId: x, checked: e })), (u[8] = x), (u[9] = b), (u[10] = r))
              : (r = u[10]),
            u[11] !== b.isPending || u[12] !== w || u[13] !== r
              ? ((c = (0, t.jsx)(p, { checked: w, disabled: b.isPending, onCheckedChange: r })),
                (u[11] = b.isPending),
                (u[12] = w),
                (u[13] = r),
                (u[14] = c))
              : (c = u[14]),
            c
          )
        },
        m: p,
      },
    )
  },
  Sr1T(e, i, s) {
    var t = s("DBCl"),
      a = s("Ot7V"),
      n = s("XcNx"),
      l = s("ReGc")
    s.d(
      i,
      {},
      {
        $: async function (e, i, s) {
          if ((0, n.x)({ browser: !0 })) return void (await i(s))
          let r = (0, n.x)({ electron: !0 })
            ? await e.query.fetch(l.a).then(
                (e) => e.chatGptDesktopAuthOrigin ?? t.WaA,
                () => t.WaA,
              )
            : t.WaA
          ;(0, a.E0)({ href: new URL(s, r).href, initiator: "open_in_browser_bridge", openAsWebsite: !0 })
        },
      },
    )
  },
  z2PK(e, i, s) {
    var t = s("ABep"),
      a = s("QosV"),
      n = s("IVLR"),
      l = s("v7Fs"),
      r = s("zd8w"),
      o = s("oyxz"),
      c = s("JNtf"),
      d = s("B5UP"),
      u = s("nhlW")
    function f(e) {
      let i,
        s,
        n,
        l,
        r = (0, a.c)(15),
        { recordType: c, recordName: u, recordValue: f, pending: h, expired: m, checked: p } = e,
        g = void 0 === c ? "TXT" : c
      return (
        r[0] !== h || r[1] !== u || r[2] !== g || r[3] !== f
          ? ((i = h && u && f && (0, t.jsx)(d.m, { recordType: g, recordName: u, recordValue: f })),
            (r[0] = h),
            (r[1] = u),
            (r[2] = g),
            (r[3] = f),
            (r[4] = i))
          : (i = r[4]),
        r[5] !== m
          ? ((s =
              m &&
              (0, t.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, t.jsx)(o.A, {
                  id: "businessProfiles.verification.dns.expired",
                  defaultMessage:
                    "This record has expired. Get a new record and replace the previous value in your DNS settings.",
                }),
              })),
            (r[5] = m),
            (r[6] = s))
          : (s = r[6]),
        r[7] !== p || r[8] !== m || r[9] !== h
          ? ((n =
              !m &&
              p &&
              h &&
              (0, t.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, t.jsx)(o.A, {
                  id: "businessProfiles.verification.dns.notFound",
                  defaultMessage:
                    "We haven\u2019t verified the record yet. Check the name and value, then try again after your DNS changes appear.",
                }),
              })),
            (r[7] = p),
            (r[8] = m),
            (r[9] = h),
            (r[10] = n))
          : (n = r[10]),
        r[11] !== i || r[12] !== s || r[13] !== n
          ? ((l = (0, t.jsxs)(t.Fragment, { children: [i, s, n] })), (r[11] = i), (r[12] = s), (r[13] = n), (r[14] = l))
          : (l = r[14]),
        l
      )
    }
    function h(e) {
      let i,
        s = (0, a.c)(2)
      return (
        s[0] !== e
          ? ((i = (0, t.jsx)(u.C, { ...e, size: "formAction", radius: "full" })), (s[0] = e), (s[1] = i))
          : (i = s[1]),
        i
      )
    }
    function m(e) {
      let i,
        s,
        c,
        d,
        u,
        f,
        m,
        p,
        g,
        x,
        v,
        y,
        b = (0, a.c)(26)
      b[0] !== e
        ? (({ checkAvailableAt: s, disabled: d, children: c, onClick: u, ...i } = e),
          (b[0] = e),
          (b[1] = i),
          (b[2] = s),
          (b[3] = c),
          (b[4] = d),
          (b[5] = u))
        : ((i = b[1]), (s = b[2]), (c = b[3]), (d = b[4]), (u = b[5]))
      let [w, j] = (0, r.useState)(null)
      b[6] !== s || b[7] !== w
        ? ((f = null != s && w?.deadline === s ? w.cooldown : (0, n.P$)(s, 0 / 0)), (b[6] = s), (b[7] = w), (b[8] = f))
        : (f = b[8])
      let A = f
      ;(b[9] !== s
        ? ((m = () => {
            if (null != s) return (0, l.x)(s, (e) => j({ deadline: s, cooldown: e }))
          }),
          (p = [s]),
          (b[9] = s),
          (b[10] = m),
          (b[11] = p))
        : ((m = b[10]), (p = b[11])),
        (0, r.useEffect)(m, p),
        b[12] !== c
          ? ((g =
              r.Children.toArray(c).length > 0
                ? c
                : (0, t.jsx)(o.A, { id: "businessProfiles.verification.dns.check", defaultMessage: "Verify domain" })),
            (b[12] = c),
            (b[13] = g))
          : (g = b[13]))
      let _ = g,
        S = d || !A.available
      return (
        b[14] !== s || b[15] !== d || b[16] !== u
          ? ((x = (e) => {
              d || !(0, n.P$)(s, Date.now()).available ? e.preventDefault() : u?.(e)
            }),
            (b[14] = s),
            (b[15] = d),
            (b[16] = u),
            (b[17] = x))
          : (x = b[17]),
        b[18] !== A.seconds || b[19] !== _
          ? ((v =
              A.seconds > 0
                ? (0, t.jsx)(o.A, {
                    id: "businessProfiles.verification.dns.checkCooldown",
                    defaultMessage: "Check again in {seconds, plural, one {# second} other {# seconds}}",
                    values: { seconds: A.seconds },
                  })
                : _),
            (b[18] = A.seconds),
            (b[19] = _),
            (b[20] = v))
          : (v = b[20]),
        b[21] !== i || b[22] !== S || b[23] !== x || b[24] !== v
          ? ((y = (0, t.jsx)(h, { ...i, disabled: S, onClick: x, children: v })),
            (b[21] = i),
            (b[22] = S),
            (b[23] = x),
            (b[24] = v),
            (b[25] = y))
          : (y = b[25]),
        y
      )
    }
    s.d(
      i,
      {},
      {
        B: function (e) {
          let i,
            s,
            n,
            l,
            d,
            u,
            h,
            p,
            g,
            x,
            v,
            y,
            b = (0, a.c)(65),
            {
              challenge: w,
              domain: j,
              headingRef: A,
              beforeRecord: _,
              afterRecord: S,
              secondaryAction: C,
              busy: M,
              disabled: P,
              fallbackCooldownMs: k,
              lastCheck: N,
              onChecked: B,
              onCheck: D,
              onStart: I,
              onFinish: T,
              errorMessage: E,
            } = e,
            V = w?.challenge_id ?? null,
            R = w?.status,
            F = "pending" === R && null != w && "checks_exhausted" in w && !0 === w.checks_exhausted,
            U = "pending" === R && !F,
            G = Date.parse(w?.expires_at ?? ""),
            O = "expired" === R,
            z = "passed" === R,
            L = null == R || "not_started" === R || O || F,
            W = z ? T : D,
            q = L ? I : W,
            [H, $] = (0, r.useState)(),
            [Y, K] = (0, r.useState)(!1),
            Q = (0, r.useRef)(!1),
            Z = N?.id === V ? N : void 0,
            J = U ? (w?.check_available_at ?? Z?.fallbackDeadline) : void 0,
            X = H === V
          b[0] !== q || b[1] !== M || b[2] !== P || b[3] !== k || b[4] !== V || b[5] !== N || b[6] !== B || b[7] !== U
            ? ((i = async function () {
                if (!M && !P && !Q.current && q) {
                  ;((Q.current = !0), K(!0), $(void 0))
                  try {
                    let e = await q()
                    if (e && (e.skipped || (U && e.pendingChallengeId === V))) {
                      let i = null == k ? void 0 : new Date(Date.now() + k).toISOString()
                      B({
                        id: e.pendingChallengeId,
                        checked: !e.skipped || (N?.id === e.pendingChallengeId && N.checked),
                        fallbackDeadline: i,
                      })
                    }
                  } catch {
                    $(V)
                  }
                  ;((Q.current = !1), K(!1))
                }
              }),
              (b[0] = q),
              (b[1] = M),
              (b[2] = P),
              (b[3] = k),
              (b[4] = V),
              (b[5] = N),
              (b[6] = B),
              (b[7] = U),
              (b[8] = i))
            : (i = b[8])
          let ee = i
          ;(b[9] !== w?.test_override || b[10] !== j || b[11] !== U
            ? ((s =
                U && j && !w?.test_override
                  ? (0, t.jsx)(o.A, {
                      id: "businessProfiles.verification.dns.controlTitle",
                      defaultMessage: "Verify that you control {domain}",
                      values: { domain: (0, t.jsx)("bdi", { className: "wrap-anywhere", children: j }, "domain") },
                    })
                  : (0, t.jsx)(o.A, {
                      id: "chatgpt.localBusiness.claim.dns.title",
                      defaultMessage: "Verify your website domain",
                    })),
              (b[9] = w?.test_override),
              (b[10] = j),
              (b[11] = U),
              (b[12] = s))
            : (s = b[12]),
            b[13] !== A || b[14] !== s
              ? ((n = (0, t.jsx)(c.L3, {
                  asChild: !0,
                  children: (0, t.jsx)("h1", {
                    ref: A,
                    tabIndex: -1,
                    className: "text-heading-lg leading-7 font-normal outline-none lg:text-heading-app lg:leading-8.5",
                    children: s,
                  }),
                })),
                (b[13] = A),
                (b[14] = s),
                (b[15] = n))
              : (n = b[15]),
            b[16] !== w?.test_override || b[17] !== j || b[18] !== U
              ? ((l =
                  U &&
                  j &&
                  !w?.test_override &&
                  (0, t.jsx)("p", {
                    className: "text-sm leading-5 text-secondary",
                    children: (0, t.jsx)(o.A, {
                      id: "businessProfiles.verification.dns.recordInstructions",
                      defaultMessage:
                        "Add this TXT record to the DNS settings for {domain} through your domain provider. Changes may take time to appear.",
                      values: { domain: (0, t.jsx)("bdi", { className: "wrap-anywhere", children: j }) },
                    }),
                  })),
                (b[16] = w?.test_override),
                (b[17] = j),
                (b[18] = U),
                (b[19] = l))
              : (l = b[19]),
            b[20] !== n || b[21] !== l
              ? ((d = (0, t.jsxs)("div", { className: "flex flex-col gap-1.5", children: [n, l] })),
                (b[20] = n),
                (b[21] = l),
                (b[22] = d))
              : (d = b[22]),
            b[23] !== F
              ? ((u =
                  F &&
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(o.A, {
                      id: "businessProfiles.verification.dns.checksExhausted",
                      defaultMessage:
                        "This record reached the verification limit. Get a new record and replace the previous value in your DNS settings.",
                    }),
                  })),
                (b[23] = F),
                (b[24] = u))
              : (u = b[24]),
            b[25] !== w?.test_override || b[26] !== j || b[27] !== O || b[28] !== U
              ? ((h =
                  w?.test_override &&
                  (U || O) &&
                  (0, t.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, t.jsx)(o.A, {
                      id: "chatgpt.localBusiness.claim.dns.test_instructions",
                      defaultMessage:
                        "Check the TXT record shown below for {domain}. If you chose your own domain, publish the new record first. Existing-record tests need no DNS changes.",
                      values: { domain: j },
                    }),
                  })),
                (b[25] = w?.test_override),
                (b[26] = j),
                (b[27] = O),
                (b[28] = U),
                (b[29] = h))
              : (h = b[29]),
            b[30] !== w || b[31] !== Z?.checked || b[32] !== O || b[33] !== X || b[34] !== U || b[35] !== Y
              ? ((p =
                  w &&
                  (U || O) &&
                  (0, t.jsx)(f, {
                    recordType: "record_type" in w ? w.record_type : void 0,
                    recordName: w.record_name,
                    recordValue: w.record_value,
                    pending: U,
                    expired: O,
                    checked: !X && !Y && Z?.checked === !0,
                  })),
                (b[30] = w),
                (b[31] = Z?.checked),
                (b[32] = O),
                (b[33] = X),
                (b[34] = U),
                (b[35] = Y),
                (b[36] = p))
              : (p = b[36]))
          let ei =
            U &&
            Number.isFinite(G) &&
            (0, t.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, t.jsx)(o.A, {
                id: "businessProfiles.verification.dns.recordExpiration",
                defaultMessage: "Record expires {expiration, date, medium} at {expiration, time, short}",
                values: { expiration: G },
              }),
            })
          return (
            b[37] !== E || b[38] !== X || b[39] !== U
              ? ((g =
                  X &&
                  (0, t.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children:
                      E ??
                      (U
                        ? (0, t.jsx)(o.A, {
                            id: "businessProfiles.creation.website.checkUnavailable",
                            defaultMessage:
                              "We couldn\u2019t check your DNS record. Keep the record shown above and try again.",
                          })
                        : (0, t.jsx)(o.A, {
                            id: "chatgpt.localBusiness.claim.error.request",
                            defaultMessage: "Something went wrong. Please try again.",
                          })),
                  })),
                (b[37] = E),
                (b[38] = X),
                (b[39] = U),
                (b[40] = g))
              : (g = b[40]),
            b[41] !== q ||
            b[42] !== M ||
            b[43] !== J ||
            b[44] !== P ||
            b[45] !== z ||
            b[46] !== L ||
            b[47] !== T ||
            b[48] !== U ||
            b[49] !== ee ||
            b[50] !== Y
              ? ((x =
                  (U || L || (z && T)) &&
                  (0, t.jsxs)(m, {
                    type: "button",
                    color: "primary",
                    disabled: M || P || !q,
                    pending: Y,
                    checkAvailableAt: J,
                    onClick: () => void ee(),
                    children: [
                      z &&
                        (0, t.jsx)(o.A, {
                          id: "chatgpt.localBusiness.claim.dns.finish",
                          defaultMessage: "Finish verification",
                        }),
                      !U &&
                        !z &&
                        (0, t.jsx)(o.A, {
                          id: "chatgpt.localBusiness.claim.dns.new_record",
                          defaultMessage: "Get a new record",
                        }),
                    ],
                  })),
                (b[41] = q),
                (b[42] = M),
                (b[43] = J),
                (b[44] = P),
                (b[45] = z),
                (b[46] = L),
                (b[47] = T),
                (b[48] = U),
                (b[49] = ee),
                (b[50] = Y),
                (b[51] = x))
              : (x = b[51]),
            b[52] !== C || b[53] !== x
              ? ((v = (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [C, x] })),
                (b[52] = C),
                (b[53] = x),
                (b[54] = v))
              : (v = b[54]),
            b[55] !== S ||
            b[56] !== _ ||
            b[57] !== ei ||
            b[58] !== g ||
            b[59] !== v ||
            b[60] !== d ||
            b[61] !== u ||
            b[62] !== h ||
            b[63] !== p
              ? ((y = (0, t.jsxs)("div", {
                  className: "mx-auto flex w-full max-w-lg flex-col gap-6",
                  children: [d, u, _, h, p, ei, g, S, v],
                })),
                (b[55] = S),
                (b[56] = _),
                (b[57] = ei),
                (b[58] = g),
                (b[59] = v),
                (b[60] = d),
                (b[61] = u),
                (b[62] = h),
                (b[63] = p),
                (b[64] = y))
              : (y = b[64]),
            y
          )
        },
        U: h,
      },
    )
  },
  u9lE(e, i, s) {
    var t = s("ABep"),
      a = s("QosV"),
      n = s("OHqq"),
      l = s("oyxz"),
      r = s("Sm6l"),
      o = s("HOLv"),
      c = s("bVeK"),
      d = s("RNul"),
      u = s("JB4k"),
      f = s("LhV4")
    s.d(
      i,
      {},
      {
        EQ: function () {
          let e,
            i = (0, a.c)(1)
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("div", {
                  className: "flex justify-center",
                  "aria-hidden": "true",
                  children: (0, t.jsx)(o.I, { asset: n.E }),
                })),
                (i[0] = e))
              : (e = i[0]),
            e
          )
        },
        Um: function (e) {
          let i,
            s,
            n,
            l,
            o,
            c = (0, a.c)(12),
            { children: d, manageLabel: h, onManage: m } = e
          ;(c[0] !== d
            ? ((i = (0, t.jsx)(u.k, {
                className: "flex flex-col divide-y divide-border rounded-2xl border border-default px-4",
                order: 1,
                children: d,
              })),
              (c[0] = d),
              (c[1] = i))
            : (i = c[1]),
            c[2] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, t.jsx)(f.O, {})), (c[2] = s)) : (s = c[2]))
          let p = null == m
          return (
            c[3] !== m ? ((n = () => m?.()), (c[3] = m), (c[4] = n)) : (n = c[4]),
            c[5] !== h || c[6] !== p || c[7] !== n
              ? ((l = (0, t.jsxs)(u.k, {
                  className: "flex flex-col",
                  order: 2,
                  children: [
                    s,
                    (0, t.jsx)(r.$, {
                      color: "primary",
                      size: "formAction",
                      radius: "full",
                      disabled: p,
                      onClick: n,
                      children: h,
                    }),
                  ],
                })),
                (c[5] = h),
                (c[6] = p),
                (c[7] = n),
                (c[8] = l))
              : (l = c[8]),
            c[9] !== i || c[10] !== l
              ? ((o = (0, t.jsxs)(t.Fragment, { children: [i, l] })), (c[9] = i), (c[10] = l), (c[11] = o))
              : (o = c[11]),
            o
          )
        },
        Vj: function (e) {
          let i,
            s,
            n = (0, a.c)(7),
            { kind: o, name: c, onWithdraw: d, disabled: u, actionRef: f } = e
          if (n[0] !== f || n[1] !== u || n[2] !== o || n[3] !== c || n[4] !== d) {
            s = Symbol.for("react.early_return_sentinel")
            e: {
              let e = (e) =>
                (0, t.jsx)(
                  r.$,
                  {
                    ref: f,
                    className: "inline-flex underline decoration-dotted",
                    color: "ghostSecondary",
                    size: "inline",
                    type: "button",
                    disabled: u,
                    onClick: d,
                    children: e,
                  },
                  "withdraw",
                )
              if ("dispute" === o) {
                s = (0, t.jsx)(l.A, {
                  id: "businessProfiles.dispute.review.received.withWithdrawal",
                  defaultMessage:
                    "We received your dispute for {name}. You can <withdraw>withdraw your dispute</withdraw> at any time during the review.",
                  values: { name: c, withdraw: e },
                })
                break e
              }
              i =
                "claim" === o
                  ? (0, t.jsx)(l.A, {
                      id: "businessProfiles.claim.review.received.withWithdrawal",
                      defaultMessage:
                        "We received your claim for {name}. You can <withdraw>withdraw your claim</withdraw> at any time during the review.",
                      values: { name: c, withdraw: e },
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(l.A, {
                          id: "businessProfiles.creation.pending.received",
                          defaultMessage: "We received your submission for {name}.",
                          values: { name: c },
                        }),
                        " ",
                        e(
                          (0, t.jsx)(l.A, {
                            id: "businessProfiles.creation.pending.cancelAction",
                            defaultMessage: "Cancel submission",
                          }),
                        ),
                      ],
                    })
            }
            ;((n[0] = f), (n[1] = u), (n[2] = o), (n[3] = c), (n[4] = d), (n[5] = i), (n[6] = s))
          } else ((i = n[5]), (s = n[6]))
          return s !== Symbol.for("react.early_return_sentinel") ? s : i
        },
        hp: function (e) {
          let i,
            s,
            n,
            l,
            r,
            o,
            u,
            f,
            h,
            m,
            p,
            g,
            x,
            v,
            y = (0, a.c)(32),
            {
              receivedTitle: b,
              receivedDescription: w,
              reviewTitle: j,
              reviewDescription: A,
              showReviewSpinner: _,
              decisionTitle: S,
              decisionDescription: C,
            } = e,
            M = void 0 === _ || _
          return (
            y[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, t.jsx)(c.hEG, { className: "text-info" })), (y[0] = i))
              : (i = y[0]),
            y[1] !== b
              ? ((s = (0, t.jsx)("h2", { className: "font-normal", children: b })), (y[1] = b), (y[2] = s))
              : (s = y[2]),
            y[3] !== w
              ? ((n = (0, t.jsx)("p", { className: "text-sm text-secondary", children: w })), (y[3] = w), (y[4] = n))
              : (n = y[4]),
            y[5] !== s || y[6] !== n
              ? ((l = (0, t.jsxs)("div", {
                  className: "flex items-center gap-4 py-5",
                  children: [i, (0, t.jsxs)("div", { className: "flex flex-col gap-1.5", children: [s, n] })],
                })),
                (y[5] = s),
                (y[6] = n),
                (y[7] = l))
              : (l = y[7]),
            y[8] !== M
              ? ((r = M
                  ? (0, t.jsx)(d.y, {})
                  : (0, t.jsx)("span", { "aria-hidden": "true", className: "size-5 shrink-0" })),
                (y[8] = M),
                (y[9] = r))
              : (r = y[9]),
            y[10] !== j
              ? ((o = (0, t.jsx)("h2", { className: "font-normal", children: j })), (y[10] = j), (y[11] = o))
              : (o = y[11]),
            y[12] !== A
              ? ((u = (0, t.jsx)("p", { className: "text-sm text-secondary", children: A })), (y[12] = A), (y[13] = u))
              : (u = y[13]),
            y[14] !== o || y[15] !== u
              ? ((f = (0, t.jsxs)("div", { className: "flex flex-col gap-1.5", children: [o, u] })),
                (y[14] = o),
                (y[15] = u),
                (y[16] = f))
              : (f = y[16]),
            y[17] !== r || y[18] !== f
              ? ((h = (0, t.jsxs)("div", { className: "flex items-center gap-4 py-5", children: [r, f] })),
                (y[17] = r),
                (y[18] = f),
                (y[19] = h))
              : (h = y[19]),
            y[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (0, t.jsx)("span", {
                  "aria-hidden": "true",
                  className: "size-5 shrink-0 rounded-full border-2 border-default",
                })),
                (y[20] = m))
              : (m = y[20]),
            y[21] !== S
              ? ((p = (0, t.jsx)("h2", { className: "font-normal", children: S })), (y[21] = S), (y[22] = p))
              : (p = y[22]),
            y[23] !== C
              ? ((g = null != C ? (0, t.jsx)("p", { className: "text-sm", children: C }) : null),
                (y[23] = C),
                (y[24] = g))
              : (g = y[24]),
            y[25] !== p || y[26] !== g
              ? ((x = (0, t.jsxs)("div", {
                  className: "flex items-center gap-4 py-5 text-tertiary",
                  children: [m, (0, t.jsxs)("div", { className: "flex flex-col gap-1.5", children: [p, g] })],
                })),
                (y[25] = p),
                (y[26] = g),
                (y[27] = x))
              : (x = y[27]),
            y[28] !== h || y[29] !== x || y[30] !== l
              ? ((v = (0, t.jsxs)("div", {
                  className: "flex flex-col divide-y divide-border rounded-2xl border border-default px-4",
                  role: "status",
                  children: [l, h, x],
                })),
                (y[28] = h),
                (y[29] = x),
                (y[30] = l),
                (y[31] = v))
              : (v = y[31]),
            v
          )
        },
        xK: function (e) {
          let i,
            s,
            n,
            l,
            r = (0, a.c)(10),
            { label: o, description: d, onClick: u } = e,
            f = null == u
          return (
            r[0] !== d
              ? ((i = null != d ? (0, t.jsx)("span", { className: "text-sm text-secondary", children: d }) : null),
                (r[0] = d),
                (r[1] = i))
              : (i = r[1]),
            r[2] !== o || r[3] !== i
              ? ((s = (0, t.jsxs)("span", { className: "flex flex-col", children: [o, i] })),
                (r[2] = o),
                (r[3] = i),
                (r[4] = s))
              : (s = r[4]),
            r[5] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, t.jsx)(c.j1b, {})), (r[5] = n)) : (n = r[5]),
            r[6] !== u || r[7] !== f || r[8] !== s
              ? ((l = (0, t.jsxs)("button", {
                  type: "button",
                  className:
                    "flex w-full cursor-interaction items-center justify-between gap-4 py-5 text-start focus-visible:outline-ring",
                  disabled: f,
                  onClick: u,
                  children: [s, n],
                })),
                (r[6] = u),
                (r[7] = f),
                (r[8] = s),
                (r[9] = l))
              : (l = r[9]),
            l
          )
        },
      },
    )
  },
  U7TT(e, i, s) {
    var t = s("SPnB"),
      a = s("Kwur"),
      n = s("g2p6")
    let l = {
      business_profile_marketing_email_opt_in: "businessProfileMarketingEmailOptIn",
      image_gen_enabled: "imageGenEnabled",
      instant_answers_enabled: "instantAnswersEnabled",
      task_suggestions_enabled: "taskSuggestionsEnabled",
      m3m: "m3mEnabled",
      m3m_opted_out: "m3mOptedOut",
      memory_in_search: "memoryInSearchEnabled",
      moonshine: "moonshineEnabled",
      sunshine: "sunshineEnabled",
      hive_referenced_in_internal_knowledge: "hiveReferencedInInternalKnowledge",
      voice_enabled: "voiceEnabled",
      file_library_auto_reference: "fileLibraryAutoReferenceEnabled",
      connector_search_enabled: "connectorSearchEnabled",
    }
    async function r(e, i, s, r, o) {
      if (e.get(n.Sk) !== i) return
      let c = e.get(t.chatGptAuthenticatedUserId$),
        d = e.query.snapshot(n.s6)
      if ((await d.cancel(), e.get(n.Sk) !== i || e.get(t.chatGptAuthenticatedUserId$) !== c)) return
      let u = l[s],
        f = d.getData()?.[u]
      ;(d.setData((e) => (null == e ? e : { ...e, [u]: r })),
        o?.refetchType === "none" && (await d.invalidate({ refetchType: "none" })))
      try {
        await a.Request.safePatch("/settings/account_user_setting", {
          additionalHeaders: { "ChatGPT-Account-ID": i },
          parameters: { query: { feature: s, value: r } },
        })
      } catch (e) {
        throw (
          d.setData((e) => (e?.[u] === r ? { ...e, [u]: f } : e)),
          o?.refetchType === "none" && (await d.invalidate({ refetchType: "none" })),
          e
        )
      }
      ;(e.get(n.Sk) === i && e.get(t.chatGptAuthenticatedUserId$) === c && o?.onSuccess?.(),
        await d.invalidate({ refetchType: o?.refetchType ?? "active" }))
    }
    s.d(
      i,
      {},
      {
        H: r,
        Y: async function (e, i, s) {
          ;(await r(e, i, "m3m", !1),
            s && (await r(e, i, "memory_in_search", !1)),
            await a.Request.safePost("/memories/about_you/summary/cache/delete", {
              additionalHeaders: { "ChatGPT-Account-ID": i },
              requestBody: { disableMemory: !0 },
            }))
        },
      },
    )
  },
  EOWL(e, i, s) {
    let t = (0, s("ESTr").a)({
      name: "multicolor-briefcase-dark-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
        visualBounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#04BB9F",
            bounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
            wideGamut: "color(display-p3 0.0157 0.7333 0.6235)",
          },
          {
            role: "fixed",
            color: "#FFE18A",
            bounds: { x: 13.333496, y: 18.713501, width: 5.333496, height: 3.291626 },
            wideGamut: "color(display-p3 1.0000 0.8824 0.5412)",
          },
          {
            role: "fixed",
            color: "#62D9C5",
            bounds: { x: 2.666504, y: 8.019531, width: 26.666504, height: 10.693848 },
            wideGamut: "color(display-p3 0.3843 0.8510 0.7725)",
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
        center: { x: 15.999756, y: 15.345032 },
        insets: { top: 2.678345, right: 2.666992, bottom: 3.988281, left: 2.666504 },
        anchors: { frame: { x: 16, y: 16 }, ink: { x: 15.999756, y: 15.345032 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.3335 8.01168C9.3335 5.01909 11.6742 2.67834 14.6668 2.67834H17.3335C20.326 2.67834 22.6668 5.01909 22.6668 8.01168V9.34501H20.0002V8.01168C20.0002 6.51538 18.8298 5.34501 17.3335 5.34501H14.6668C13.1705 5.34501 12.0002 6.51538 12.0002 8.01168V9.34501H9.3335V8.01168Z" fill="#04BB9F"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3332 14.3998V22.6784C29.3332 25.6266 26.948 28.0118 23.9998 28.0118H7.99984C5.0517 28.0118 2.66652 25.6266 2.6665 22.6784V14.3998H29.3332Z" fill="#04BB9F"/> <path d="M18.6668 20.6718V18.7135H13.3335V20.6718C13.3335 21.4866 13.852 22.0051 14.6668 22.0051H17.3335C18.1483 22.0051 18.6668 21.4866 18.6668 20.6718Z" fill="#FFE18A"/> <path d="M5.91094 18.7134C4.08873 18.7134 2.6665 17.4097 2.6665 15.7653V13.3529C2.6665 10.3603 5.00725 8.01953 7.99984 8.01953H23.9998C26.9924 8.01953 29.3332 10.3603 29.3332 13.3529V15.7653C29.3332 17.4097 27.9109 18.7134 26.0888 18.7134H5.91094Z" fill="#62D9C5"/>',
    })
    s.d(i, {}, { C: t })
  },
  CWP0(e, i, s) {
    let t = (0, s("ESTr").a)({
      name: "multicolor-briefcase-light-32",
      canvas: {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        frame: { x: 0, y: 0, width: 32, height: 32 },
        inkBounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
        visualBounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#04BB9F",
            bounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
            wideGamut: "color(display-p3 0.0157 0.7333 0.6235)",
          },
          {
            role: "fixed",
            color: "#FFEAA0",
            bounds: { x: 13.333496, y: 18.713501, width: 5.333496, height: 3.291626 },
            wideGamut: "color(display-p3 1.0000 0.9176 0.6275)",
          },
          {
            role: "fixed",
            color: "#77DAC8",
            bounds: { x: 2.666504, y: 8.019531, width: 26.666504, height: 10.693848 },
            wideGamut: "color(display-p3 0.4667 0.8549 0.7843)",
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.666504, y: 2.678345, width: 26.666504, height: 25.333374 },
        center: { x: 15.999756, y: 15.345032 },
        insets: { top: 2.678345, right: 2.666992, bottom: 3.988281, left: 2.666504 },
        anchors: { frame: { x: 16, y: 16 }, ink: { x: 15.999756, y: 15.345032 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.3335 8.01168C9.3335 5.01909 11.6742 2.67834 14.6668 2.67834H17.3335C20.326 2.67834 22.6668 5.01909 22.6668 8.01168V9.34501H20.0002V8.01168C20.0002 6.51538 18.8298 5.34501 17.3335 5.34501H14.6668C13.1705 5.34501 12.0002 6.51538 12.0002 8.01168V9.34501H9.3335V8.01168Z" fill="#04BB9F"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3332 14.3998V22.6784C29.3332 25.6266 26.948 28.0118 23.9998 28.0118H7.99984C5.0517 28.0118 2.66652 25.6266 2.6665 22.6784V14.3998H29.3332Z" fill="#04BB9F"/> <path d="M18.6668 20.6718V18.7135H13.3335V20.6718C13.3335 21.4866 13.852 22.0051 14.6668 22.0051H17.3335C18.1483 22.0051 18.6668 21.4866 18.6668 20.6718Z" fill="#FFEAA0"/> <path d="M5.91094 18.7134C4.08873 18.7134 2.6665 17.4097 2.6665 15.7653V13.3529C2.6665 10.3603 5.00725 8.01953 7.99984 8.01953H23.9998C26.9924 8.01953 29.3332 10.3603 29.3332 13.3529V15.7653C29.3332 17.4097 27.9109 18.7134 26.0888 18.7134H5.91094Z" fill="#77DAC8"/>',
    })
    s.d(i, {}, { K: t })
  },
  OHqq(e, i, s) {
    let t = (0, s("ESTr").a)({
      name: "multicolor-verified-checkmark-light-48",
      canvas: {
        width: 48,
        height: 48,
        viewBox: "0 0 48 48",
        frame: { x: 0, y: 0, width: 48, height: 48 },
        inkBounds: { x: 5.367676, y: 3.996582, width: 37.264648, height: 40.007324 },
        visualBounds: { x: 5.367676, y: 3.996582, width: 37.264648, height: 40.007324 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#00B1FF",
            bounds: { x: 5.367676, y: 3.996582, width: 37.264648, height: 40.007324 },
            wideGamut: "color(display-p3 0.0000 0.6941 1.0000)",
          },
          {
            role: "fixed",
            color: "#FFFFFF",
            bounds: { x: 15.838867, y: 16.153809, width: 16.076172, height: 15.692871 },
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.367676, y: 3.996582, width: 37.264648, height: 40.007324 },
        center: { x: 24, y: 24.000244 },
        insets: { top: 3.996582, right: 5.367676, bottom: 3.996094, left: 5.367676 },
        anchors: { frame: { x: 24, y: 24 }, ink: { x: 24, y: 24.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M24.0004 3.99658C27.7122 3.99668 30.9384 6.07018 32.588 9.1213C36.0562 9.02296 39.4674 10.7825 41.324 13.9983C43.1802 17.2134 42.9976 21.0458 41.1792 24C42.9976 26.9544 43.18 30.7866 41.324 34.0018C39.4674 37.2176 36.0562 38.9754 32.5878 38.877C30.9386 41.929 27.7126 44.0036 24.0002 44.0038C20.2874 44.0038 17.0601 41.9294 15.4109 38.8772C11.943 38.975 8.533 37.2174 6.67668 34.002C4.8206 30.787 5.00156 26.9546 6.81966 24.0002C5.0016 21.046 4.82066 17.2135 6.6768 13.9985C8.53314 10.7831 11.9432 9.02362 15.4111 9.1214C17.0605 6.06988 20.2884 3.9966 24.0004 3.99658Z" fill="#00B1FF"/> <path d="M28.2256 17.0837C28.8166 16.1507 30.0522 15.8735 30.9854 16.4645C31.9182 17.0556 32.1954 18.2912 31.6044 19.2243L24.5536 30.3552C24.4784 30.474 24.353 30.6762 24.2236 30.8454C24.085 31.0264 23.8032 31.3616 23.335 31.5914C22.7804 31.8634 22.144 31.9204 21.5498 31.7516C21.0476 31.6088 20.7106 31.3288 20.542 31.1754C20.384 31.0316 20.223 30.855 20.128 30.7516L16.3662 26.6638C15.6185 25.851 15.6728 24.5854 16.4853 23.8376C17.2982 23.0898 18.5637 23.1418 19.3115 23.9548L22.0126 26.8902L28.2256 17.0837Z" fill="white"/>',
    })
    s.d(i, {}, { E: t })
  },
}
//# sourceMappingURL=893175.e7fdc87359.js.map
