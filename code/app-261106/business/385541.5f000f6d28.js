export const __rspack_esm_ids = [385541]
export const __webpack_modules__ = {
  QS9J(e, s, i) {
    function t(e, s = 2) {
      let i = [0, 0.04 + 0.05 * e, 0.25 + 0.05 * e, 1]
      return {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: [0, 0, 1, 1], y: [16, 16, 0, 0] },
        transition: {
          opacity: { duration: s, times: i, ease: ["linear", "easeOut", "linear"] },
          y: { duration: s, times: i, ease: ["linear", n, "linear"] },
        },
      }
    }
    function n(e) {
      return 1 - Math.exp(-(7.956 * e)) * (Math.cos(4.2942 * e) + 1.8527 * Math.sin(4.2942 * e))
    }
    i.d(
      s,
      {},
      {
        E: function (e, s) {
          let i = Array.from(e.querySelectorAll(":scope > :not(form), :scope > form > *"), (e, i) => {
            let n = t(Math.min(i, 3), 0.4)
            return s(e, n.animate, n.transition)
          })
          return () => i.forEach((e) => e.complete())
        },
        Y: t,
      },
    )
  },
  FTY8(e, s, i) {
    var t = i("ABep"),
      n = i("QosV"),
      a = i("mBJV"),
      r = i("V2Wp"),
      l = i("X0Lu"),
      o = i("zTeN"),
      c = i("zd8w"),
      d = i("oyxz"),
      m = i("SPnB"),
      u = i("Ghh3"),
      h = i("zKCW"),
      b = i("Sm6l"),
      f = i("ZtSy"),
      p = i("HOLv"),
      x = i("AKNp"),
      g = i("yGJW"),
      v = i("OWtl"),
      y = i("hZax"),
      j = i("rvFo"),
      _ = i("a6Zv"),
      w = i("f0dk")
    let P = {
        invite_sent: "business_hub_invite_admins",
        claim_pending: "business_hub_claim_pending",
        claim_verified: "business_hub_claim_verified",
      },
      A = "https://chatgpt.com/team-sign-up",
      C = (0, o.vU)(v.u, (e) => ({
        queryKey: ["offer-configuration", e],
        queryFn: ({ signal: s }) => u.Request.safeGet("/v1/offer-configuration", { expectedIdentity: e, signal: s }),
        staleTime: j.D.FIVE_MINUTES,
        retry: !1,
      }))
    function S(e) {
      let s,
        i,
        m,
        u,
        j,
        S,
        B,
        M,
        N,
        k,
        T,
        E,
        I,
        G,
        F = (0, n.c)(34),
        { identity: R, placement: V } = e,
        O = (0, o.gh)(v.u),
        H = (0, y.cn)(),
        L = (0, _.Y)(),
        U = P[V],
        z = !H.isLoading && (0, x.ku)(H, U),
        D = (0, o._U)(z ? C : null, R),
        q = D?.isSuccess === !0 && D.data.offer?.id === "chatgptteamplan"
      F[0] !== O || F[1] !== U
        ? ((s = (e) => {
            ;(0, g.yy)(O, a.Yvh, {
              action: e,
              sourceLocation: U,
              ctaVariant: "CHATGPT_SUBSCRIPTION_UPSELL_CTA_VARIANT_TRY_BUSINESS",
              ctaTargetPlan: "CHATGPT_SUBSCRIPTION_UPSELL_CTA_TARGET_PLAN_TEAM",
            })
          }),
          (F[0] = O),
          (F[1] = U),
          (F[2] = s))
        : (s = F[2])
      let $ = s
      F[3] !== $ ? ((i = () => $("CHATGPT_SUBSCRIPTION_UPSELL_ACTION_PRESENTED")), (F[3] = $), (F[4] = i)) : (i = F[4])
      let K = (0, c.useEffectEvent)(i)
      F[5] !== R || F[6] !== V || F[7] !== q
        ? ((m = q ? JSON.stringify([R.accountId, R.userId, V]) : null), (F[5] = R), (F[6] = V), (F[7] = q), (F[8] = m))
        : (m = F[8])
      let Z = m,
        J = (0, c.useRef)(null)
      if (
        (F[9] !== K || F[10] !== Z
          ? ((u = () => {
              ;(null != Z && J.current !== Z && K(), (J.current = Z))
            }),
            (F[9] = K),
            (F[10] = Z),
            (F[11] = u))
          : (u = F[11]),
        F[12] !== Z ? ((j = [Z]), (F[12] = Z), (F[13] = j)) : (j = F[13]),
        (0, c.useEffect)(u, j),
        !q)
      )
        return null
      F[14] !== $
        ? ((S = () => $("CHATGPT_SUBSCRIPTION_UPSELL_ACTION_ACTIVATED")), (F[14] = $), (F[15] = S))
        : (S = F[15])
      let W = S
      if ("claim_verified" === V) {
        let e, s, i
        return (
          F[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(d.A, {
                id: "businessProfiles.claimSuccess.businessPlan",
                defaultMessage: "Work with your team on ChatGPT Business",
                description:
                  "Link to ChatGPT Business signup in the list of next steps after a successful business claim.",
              })),
              (s = (0, t.jsx)(d.A, {
                id: "businessProfiles.claimSuccess.businessPlanSubtitle",
                defaultMessage:
                  "Bring your people, company knowledge, and tools together to get work done with ChatGPT",
                description:
                  "Subtitle explaining the benefit of upgrading to ChatGPT Business after claiming a business.",
              })),
              (F[16] = e),
              (F[17] = s))
            : ((e = F[16]), (s = F[17])),
          F[18] !== W
            ? ((i = (0, t.jsx)(w.Oj, { href: A, onActivate: W, title: e, subtitle: s })), (F[18] = W), (F[19] = i))
            : (i = F[19]),
          i
        )
      }
      let Y = L ? r.C : l.K
      return (
        F[20] !== Y
          ? ((B = (0, t.jsx)(p.I, { asset: Y, className: "size-8 shrink-0" })), (F[20] = Y), (F[21] = B))
          : (B = F[21]),
        F[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, t.jsx)("h3", {
              className: "font-medium text-default",
              children: (0, t.jsx)(d.A, {
                id: "businessProfiles.members.businessUpsell.title",
                defaultMessage: "Doing work as a team?",
                description:
                  "Heading for the ChatGPT Business offer after sending an admin invite or submitting a business claim.",
              }),
            })),
            (F[22] = M))
          : (M = F[22]),
        F[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, t.jsxs)("div", {
              className: "min-w-0",
              children: [
                M,
                (0, t.jsx)("p", {
                  className: "mt-1 text-secondary",
                  children: (0, t.jsx)(d.A, {
                    id: "businessProfiles.members.businessUpsell.description",
                    defaultMessage: "Switch to ChatGPT Business to share company context and tools.",
                    description:
                      "Explains the benefit of the ChatGPT Business plan to someone inviting business admins or claiming a business.",
                  }),
                }),
              ],
            })),
            (F[23] = N))
          : (N = F[23]),
        F[24] !== B
          ? ((k = (0, t.jsxs)("div", {
              className: "flex min-w-0 flex-1 basis-52 items-center gap-4",
              children: [B, N],
            })),
            (F[24] = B),
            (F[25] = k))
          : (k = F[25]),
        F[26] !== W
          ? ((T = (e) =>
              (0, t.jsx)(f.G, {
                ...e,
                appearance: "button",
                href: A,
                initiator: "external_link",
                openTarget: "external-browser",
                onActivate: W,
              })),
            (F[26] = W),
            (F[27] = T))
          : (T = F[27]),
        F[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, t.jsx)(d.A, {
              id: "businessProfiles.members.businessUpsell.cta",
              defaultMessage: "Try Business",
              description: "Link to sign up for the ChatGPT Business plan.",
            })),
            (F[28] = E))
          : (E = F[28]),
        F[29] !== T
          ? ((I = (0, t.jsx)(b.z, {
              color: "primary",
              size: "dialogAction",
              radius: "full",
              href: A,
              renderLink: T,
              children: E,
            })),
            (F[29] = T),
            (F[30] = I))
          : (I = F[30]),
        F[31] !== k || F[32] !== I
          ? ((G = (0, t.jsx)(h.l, {
              variant: "insetNotice",
              content: (0, t.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [k, I] }),
            })),
            (F[31] = k),
            (F[32] = I),
            (F[33] = G))
          : (G = F[33]),
        G
      )
    }
    i.d(
      s,
      {},
      {
        D: function (e) {
          let s,
            i = (0, n.c)(5),
            { placement: a } = e,
            r = (0, o.Ul)(m.MS),
            l = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
            c = (0, o.Ul)(m.chatGptAuthenticatedUserId$)
          return (
            i[0] !== l || i[1] !== r || i[2] !== a || i[3] !== c
              ? ((s =
                  r && null != l && null != c
                    ? (0, t.jsx)(S, { identity: { accountId: l, userId: c }, placement: a })
                    : null),
                (i[0] = l),
                (i[1] = r),
                (i[2] = a),
                (i[3] = c),
                (i[4] = s))
              : (s = i[4]),
            s
          )
        },
      },
    )
  },
  JB4k(e, s, i) {
    var t = i("ABep"),
      n = i("QosV"),
      a = i("QS9J"),
      r = i("LIss"),
      l = i("T1PX")
    i.d(
      s,
      {},
      {
        k: function (e) {
          let s,
            i,
            o = (0, n.c)(9),
            { className: c, order: d, children: m } = e
          if ((0, l.I)()) {
            let e
            return (
              o[0] !== m || o[1] !== c
                ? ((e = (0, t.jsx)("div", { className: c, children: m })), (o[0] = m), (o[1] = c), (o[2] = e))
                : (e = o[2]),
              e
            )
          }
          return (
            o[3] !== d ? ((s = (0, a.Y)(d)), (o[3] = d), (o[4] = s)) : (s = o[4]),
            o[5] !== m || o[6] !== c || o[7] !== s
              ? ((i = (0, t.jsx)(r.P.div, { className: c, ...s, children: m })),
                (o[5] = m),
                (o[6] = c),
                (o[7] = s),
                (o[8] = i))
              : (i = o[8]),
            i
          )
        },
      },
    )
  },
  f0dk(e, s, i) {
    var t = i("ABep"),
      n = i("QosV"),
      a = i("Nyot"),
      r = i("zTeN"),
      l = i("zd8w"),
      o = i("oyxz"),
      c = i("Sm6l"),
      d = i("JNtf"),
      m = i("ZtSy"),
      u = i("HOLv"),
      h = i("bVeK"),
      b = i("OMIV"),
      f = i("iC84"),
      p = i("JB4k")
    function x(e) {
      let s,
        i,
        a = (0, n.c)(10),
        { href: r, onActivate: o, title: c, subtitle: d } = e,
        u = (0, l.useId)(),
        h = `${u}-subtitle`
      return (
        a[0] !== u || a[1] !== d || a[2] !== c
          ? ((s = (0, t.jsx)(g, { id: u, title: c, subtitle: d })), (a[0] = u), (a[1] = d), (a[2] = c), (a[3] = s))
          : (s = a[3]),
        a[4] !== r || a[5] !== u || a[6] !== o || a[7] !== h || a[8] !== s
          ? ((i = (0, t.jsx)(m.G, {
              "aria-labelledby": u,
              "aria-describedby": h,
              href: r,
              initiator: "external_link",
              openTarget: "external-browser",
              appearance: "inherit",
              underline: "none",
              className:
                "flex w-full cursor-interaction items-center justify-between gap-4 py-4 text-start focus-visible:outline-ring",
              onActivate: o,
              children: s,
            })),
            (a[4] = r),
            (a[5] = u),
            (a[6] = o),
            (a[7] = h),
            (a[8] = s),
            (a[9] = i))
          : (i = a[9]),
        i
      )
    }
    function g(e) {
      let s,
        i,
        a,
        r,
        l,
        o = (0, n.c)(12),
        { id: c, title: d, subtitle: m } = e
      o[0] !== c || o[1] !== d
        ? ((s = (0, t.jsx)("span", { id: c, children: d })), (o[0] = c), (o[1] = d), (o[2] = s))
        : (s = o[2])
      let u = `${c}-subtitle`
      return (
        o[3] !== m || o[4] !== u
          ? ((i = (0, t.jsx)("span", { id: u, className: "text-sm leading-5 text-secondary", children: m })),
            (o[3] = m),
            (o[4] = u),
            (o[5] = i))
          : (i = o[5]),
        o[6] !== s || o[7] !== i
          ? ((a = (0, t.jsxs)("span", { className: "flex min-w-0 flex-col", children: [s, i] })),
            (o[6] = s),
            (o[7] = i),
            (o[8] = a))
          : (a = o[8]),
        o[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, t.jsx)(h.j1b, { className: "shrink-0" })), (o[9] = r))
          : (r = o[9]),
        o[10] !== a ? ((l = (0, t.jsxs)(t.Fragment, { children: [a, r] })), (o[10] = a), (o[11] = l)) : (l = o[11]),
        l
      )
    }
    i.d(
      s,
      {},
      {
        Oj: x,
        UM: function (e) {
          let s,
            i,
            r,
            l,
            o = (0, n.c)(8),
            { title: c, description: m } = e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, t.jsx)(p.k, {
                  order: 0,
                  children: (0, t.jsx)("div", {
                    className: "flex justify-center",
                    "aria-hidden": "true",
                    children: (0, t.jsx)(u.I, { asset: a.E, className: "size-20" }),
                  }),
                })),
                (o[0] = s))
              : (s = o[0]),
            o[1] !== c
              ? ((i = (0, t.jsx)(d.L3, {
                  tabIndex: -1,
                  className: "text-center text-heading-app leading-tight font-normal",
                  children: c,
                })),
                (o[1] = c),
                (o[2] = i))
              : (i = o[2]),
            o[3] !== m
              ? ((r = m && (0, t.jsx)(d.rr, { className: "text-center text-base text-secondary", children: m })),
                (o[3] = m),
                (o[4] = r))
              : (r = o[4]),
            o[5] !== i || o[6] !== r
              ? ((l = (0, t.jsxs)(t.Fragment, {
                  children: [s, (0, t.jsxs)(p.k, { className: "flex flex-col gap-1.5", order: 0, children: [i, r] })],
                })),
                (o[5] = i),
                (o[6] = r),
                (o[7] = l))
              : (l = o[7]),
            l
          )
        },
        Um: function (e) {
          let s,
            i,
            a,
            d,
            m,
            u,
            h,
            v,
            y,
            j,
            _,
            w,
            P,
            A,
            C,
            S,
            B = (0, n.c)(43),
            { children: M, onManageProfile: N, pendingCreation: k } = e,
            T = void 0 !== k && k,
            E = (0, r._U)(b.JW, f.iL) && !T,
            I = (0, l.useId)(),
            G = (0, l.useId)()
          B[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, t.jsx)(o.A, {
                id: "businessProfiles.claimSuccess.manage",
                defaultMessage: "Manage your business",
                description: "Action after a successful business claim that opens the Business Hub to view insights.",
              })),
              (B[0] = s))
            : (s = B[0])
          let F = s
          B[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsx)(o.A, {
                id: "businessProfiles.claimSuccess.agent",
                defaultMessage: "Start chatting with customers",
                description:
                  "Primary action after a business claim. Opens Agent Builder so the owner can set up customer conversations.",
              })),
              (B[1] = i))
            : (i = B[1])
          let R = i
          B[2] !== E
            ? ((a = E
                ? R
                : (0, t.jsx)(o.A, {
                    id: "businessProfiles.claimSuccess.goToProfile",
                    defaultMessage: "Go to your business profile",
                    description:
                      "Primary action after an ownership claim when Agent Builder is unavailable. Opens the claimed business in Business Hub.",
                  })),
              (B[2] = E),
              (B[3] = a))
            : (a = B[3])
          let V = a
          B[4] !== E || B[5] !== I || B[6] !== N
            ? ((d =
                E &&
                (0, t.jsx)("button", {
                  "aria-labelledby": I,
                  "aria-describedby": `${I}-subtitle`,
                  type: "button",
                  className:
                    "flex w-full cursor-interaction items-center justify-between gap-4 py-4 text-start focus-visible:outline-ring",
                  disabled: !N,
                  onClick: () => N?.("agent"),
                  children: (0, t.jsx)(g, {
                    id: I,
                    title: R,
                    subtitle: (0, t.jsx)(o.A, {
                      id: "businessProfiles.claimSuccess.agentSubtitle",
                      defaultMessage: "Review agent details before you launch.",
                      description: "Subtitle for the Agent Builder action after a successful business claim.",
                    }),
                  }),
                })),
              (B[4] = E),
              (B[5] = I),
              (B[6] = N),
              (B[7] = d))
            : (d = B[7])
          let O = `${G}-subtitle`,
            H = !N
          ;(B[8] !== N ? ((m = () => N?.("insights")), (B[8] = N), (B[9] = m)) : (m = B[9]),
            B[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, t.jsx)(o.A, {
                  id: "businessProfiles.claimSuccess.manageSubtitle",
                  defaultMessage: "View insights, add products, and keep your info up to date.",
                  description: "Subtitle for the Business Hub action after a successful business claim.",
                })),
                (B[10] = u))
              : (u = B[10]),
            B[11] !== G
              ? ((h = (0, t.jsx)(g, { id: G, title: F, subtitle: u })), (B[11] = G), (B[12] = h))
              : (h = B[12]),
            B[13] !== G || B[14] !== h || B[15] !== O || B[16] !== H || B[17] !== m
              ? ((v = (0, t.jsx)("button", {
                  "aria-labelledby": G,
                  "aria-describedby": O,
                  type: "button",
                  className:
                    "flex w-full cursor-interaction items-center justify-between gap-4 py-4 text-start focus-visible:outline-ring",
                  disabled: H,
                  onClick: m,
                  children: h,
                })),
                (B[13] = G),
                (B[14] = h),
                (B[15] = O),
                (B[16] = H),
                (B[17] = m),
                (B[18] = v))
              : (v = B[18]),
            B[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, t.jsx)(x, {
                  href: "https://ads.openai.com/#ad-credit",
                  title: (0, t.jsx)(o.A, {
                    id: "businessProfiles.claimSuccess.advertisingCredit",
                    defaultMessage: "Get $500 in advertising credit",
                    description:
                      "Link to the ChatGPT Ads offer after a business claim. Ads determines eligibility for the US dollar credit.",
                  }),
                  subtitle: (0, t.jsx)(o.A, {
                    id: "businessProfiles.claimSuccess.adsSubtitle",
                    defaultMessage: "Start advertising with ChatGPT Ads.",
                    description: "Subtitle for the advertising credit offer after a successful business claim.",
                  }),
                })),
                (B[19] = y))
              : (y = B[19]),
            B[20] !== T
              ? ((j =
                  T &&
                  (0, t.jsx)(x, {
                    href: "https://chatgpt.com/team-sign-up",
                    title: (0, t.jsx)(o.A, {
                      id: "businessProfiles.creation.businessPlan",
                      defaultMessage: "Upgrade to a ChatGPT Business plan",
                      description: "Opens ChatGPT Business plan signup.",
                    }),
                    subtitle: (0, t.jsx)(o.A, {
                      id: "businessProfiles.creation.businessPlanSubtitle",
                      defaultMessage: "Work with your team and manage billing in a secure workspace.",
                      description: "Description of the ChatGPT Business plan.",
                    }),
                  })),
                (B[20] = T),
                (B[21] = j))
              : (j = B[21]),
            B[22] !== M || B[23] !== v || B[24] !== j || B[25] !== d
              ? ((_ = (0, t.jsxs)(p.k, {
                  className: "flex flex-col divide-y divide-border rounded-2xl border border-default px-4",
                  order: 1,
                  children: [d, v, y, j, M],
                })),
                (B[22] = M),
                (B[23] = v),
                (B[24] = j),
                (B[25] = d),
                (B[26] = _))
              : (_ = B[26]))
          let L = T ? "mt-auto md:mt-0" : void 0,
            U = !N
          return (
            B[27] !== E || B[28] !== N
              ? ((w = () => N?.(E ? "agent" : "insights")), (B[27] = E), (B[28] = N), (B[29] = w))
              : (w = B[29]),
            B[30] !== V || B[31] !== T
              ? ((P = T
                  ? (0, t.jsx)(o.A, {
                      id: "businessProfiles.creation.completed.goToOverview",
                      defaultMessage: "Go to business overview",
                      description: "Primary action after creating a draft. Opens its business overview.",
                    })
                  : V),
                (B[30] = V),
                (B[31] = T),
                (B[32] = P))
              : (P = B[32]),
            B[33] !== U || B[34] !== w || B[35] !== P
              ? ((A = (0, t.jsx)(c.$, {
                  className: "w-full",
                  color: "primary",
                  size: "formAction",
                  radius: "full",
                  disabled: U,
                  onClick: w,
                  children: P,
                })),
                (B[33] = U),
                (B[34] = w),
                (B[35] = P),
                (B[36] = A))
              : (A = B[36]),
            B[37] !== L || B[38] !== A
              ? ((C = (0, t.jsx)(p.k, { order: 2, className: L, children: A })), (B[37] = L), (B[38] = A), (B[39] = C))
              : (C = B[39]),
            B[40] !== _ || B[41] !== C
              ? ((S = (0, t.jsxs)(t.Fragment, { children: [_, C] })), (B[40] = _), (B[41] = C), (B[42] = S))
              : (S = B[42]),
            S
          )
        },
      },
    )
  },
  yai7(e, s, i) {
    var t = i("S2r0"),
      n = i("DBCl"),
      a = i("ASxG"),
      r = i("Ghh3"),
      l = i("eShZ"),
      o = i("C1dV"),
      c = i("W7Gu")
    let d = a.object({
      error: a.object({ code: a.literal("unknown_parameter"), param: a.literal("tenant_management_capability") }),
    })
    i.d(
      s,
      {},
      {
        G: function (e, s, i, a, m) {
          return (0, t.j)({
            queryKey:
              null == a
                ? ["business-profiles", e, s, "members", i ? "v2" : "v1"]
                : [...(0, o.L)(a, s), "members", i ? "v2" : "v1"],
            queryFn: async ({ signal: t }) => {
              let c = async (l) => {
                let c = await r.Request.safeGet(
                  i
                    ? "/chat/frontend/v2/business-profiles/{business_profile_id}/members"
                    : "/chat/frontend/v1/business-profiles/{business_profile_id}/members",
                  {
                    additionalHeaders: {
                      "ChatGPT-Account-ID": e,
                      "x-openai-use-sheep": "1",
                      ...(null == a ? {} : { [n.zBc]: e }),
                    },
                    parameters: {
                      path: { business_profile_id: s },
                      ...(null != a && { query: (0, o.C0)(a) }),
                      ...(null == a && l && { query: { tenant_management_capability: "v1" } }),
                    },
                    expectedIdentity: a,
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
                    signal: t,
                  },
                )
                return { ...c, members: c.members.map((e) => ({ ...e, status: e.status ?? "active" })) }
              }
              try {
                try {
                  return await c(null == a)
                } catch (e) {
                  if (
                    null == a &&
                    (function (e) {
                      if (!(e instanceof l.fk) || 400 !== e.status) return !1
                      try {
                        return d.safeParse(JSON.parse(e.message)).success
                      } catch {
                        return !1
                      }
                    })(e)
                  )
                    return await c(!1)
                  throw e
                }
              } catch (e) {
                throw (e instanceof l.fk && [401, 403, 404].includes(e.status) && (await m?.()), e)
              }
            },
            retry: !1,
            ...c.I,
            staleTime: 3e5,
            gcTime: 9e5,
          })
        },
        I: "335596214",
      },
    )
  },
  dwvY(e, s, i) {
    var t = i("ABep"),
      n = i("QosV"),
      a = i("T0Rc"),
      r = i("irkb"),
      l = i("xSOA"),
      o = i("zTeN"),
      c = i("zd8w"),
      d = i("Wf1j"),
      m = i("oyxz"),
      u = i("Qgfj"),
      h = i("HZfM"),
      b = i("ASxG"),
      f = i("EOo5"),
      p = i("Ghh3"),
      x = i("LhhH"),
      g = i("zKCW"),
      v = i("Sm6l"),
      y = i("JNtf"),
      j = i("mUDD"),
      _ = i("bqtn"),
      w = i("bVeK"),
      P = i("F0xz"),
      A = i("OMIV"),
      C = i("soaw"),
      S = i("eShZ"),
      B = i("iC84"),
      M = i("FTY8"),
      N = i("Oklx"),
      k = i("yai7"),
      T = i("i3ry")
    let E = b.object({ access_remains: b.boolean().nullable().optional() }),
      I = b.object({
        error: b.object({ code: b.literal("unknown_parameter"), param: b.literal("expected_roster_revision") }),
      })
    function G(e) {
      return e instanceof S.fk && 409 === e.status && "business_profile_members_last_effective_admin" === e.errorCode
    }
    function F(e) {
      let s,
        i,
        r,
        l,
        o,
        c = (0, n.c)(19),
        { adminView: m, profileId: u, membersV2Ready: h } = e,
        b = (0, d.A)()
      c[0] !== m || c[1] !== h || c[2] !== u
        ? ((s = (0, k.G)(m.accountId, u, h, m)), (c[0] = m), (c[1] = h), (c[2] = u), (c[3] = s))
        : (s = c[3])
      let { data: f, error: p, isError: x, refetch: g } = (0, a.I)(s)
      if (x) {
        let e, s
        return (
          c[4] !== g ? ((e = () => void g()), (c[4] = g), (c[5] = e)) : (e = c[5]),
          c[6] !== p || c[7] !== e
            ? ((s = (0, t.jsx)(T.iM, { readOnly: !0, error: p, onRetry: e })), (c[6] = p), (c[7] = e), (c[8] = s))
            : (s = c[8]),
          s
        )
      }
      if (null == f) {
        let e
        return (
          c[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(N.Bz, { variant: "members", readOnly: !0 })), (c[9] = e))
            : (e = c[9]),
          e
        )
      }
      return (
        c[10] !== b ? ((i = b.formatMessage(z.members)), (c[10] = b), (c[11] = i)) : (i = c[11]),
        c[12] !== f.members ? ((r = f.members.map(R)), (c[12] = f.members), (c[13] = r)) : (r = c[13]),
        c[14] !== r ? ((l = (0, t.jsx)("ul", { children: r })), (c[14] = r), (c[15] = l)) : (l = c[15]),
        c[16] !== i || c[17] !== l
          ? ((o = (0, t.jsx)("section", { "aria-label": i, children: l })), (c[16] = i), (c[17] = l), (c[18] = o))
          : (o = c[18]),
        o
      )
    }
    function R(e) {
      return (0, t.jsx)(H, { member: e }, e.id)
    }
    function V(e) {
      let s,
        i,
        u,
        b,
        f,
        _,
        T,
        F,
        R,
        V,
        D,
        q,
        $,
        K,
        Z,
        J,
        W,
        Y,
        Q,
        X,
        ee,
        es,
        ei,
        et,
        en = (0, n.c)(119),
        { accountId: ea, profileId: er, membersV2Ready: el, headerInvite: eo, dialogOnly: ec } = e,
        ed = (0, d.A)(),
        em = (0, o._U)(A.JW, "2104211191"),
        eu = (0, h.Zp)(),
        eh = (0, C.a)(),
        eb = (0, r.jE)(),
        ef = (0, c.useId)(),
        [ep, ex] = (0, c.useState)(!1),
        eg = ep || null != eo,
        [ev, ey] = (0, c.useState)(null),
        [ej, e_] = (0, c.useState)(""),
        [ew, eP] = (0, c.useState)(null)
      en[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (en[0] = s)) : (s = en[0])
      let [eA, eC] = (0, c.useState)(s),
        [eS, eB] = (0, c.useState)(!1),
        [eM, eN] = (0, c.useState)(!1),
        ek = el ? "v2" : "v1"
      en[1] !== ea || en[2] !== er || en[3] !== ek
        ? ((i = ["business-profiles", ea, er, "members", ek]), (en[1] = ea), (en[2] = er), (en[3] = ek), (en[4] = i))
        : (i = en[4])
      let eT = i
      en[5] !== ea
        ? ((u = { "ChatGPT-Account-ID": ea, "x-openai-use-sheep": "1" }), (en[5] = ea), (en[6] = u))
        : (u = en[6])
      let eE = u
      en[7] !== ea || en[8] !== eh || en[9] !== eu || en[10] !== er || en[11] !== eb
        ? ((b = async () => {
            let e = { queryKey: ["business-profiles", ea, er] }
            ;(await eb.cancelQueries(e),
              eb.removeQueries(e),
              eh() && eu(B.CM, { replace: !0 }),
              await eb.invalidateQueries({ queryKey: ["business-profiles", ea, "list"] }))
          }),
          (en[7] = ea),
          (en[8] = eh),
          (en[9] = eu),
          (en[10] = er),
          (en[11] = eb),
          (en[12] = b))
        : (b = en[12])
      let eI = b
      en[13] !== ea || en[14] !== eI || en[15] !== el || en[16] !== er
        ? ((f = (0, k.G)(ea, er, el, void 0, eI)),
          (en[13] = ea),
          (en[14] = eI),
          (en[15] = el),
          (en[16] = er),
          (en[17] = f))
        : (f = en[17])
      let { data: eG, error: eF, refetch: eR } = (0, a.I)(f),
        eV = null == eF ? eG : void 0
      ;(en[18] !== eE || en[19] !== er
        ? ((_ = async (e) => {
            let s = async (s) => {
              let i = { expected_profile_revision: e.revision, ...(null != s && { expected_roster_revision: s }) }
              if ("add" === e.type)
                return {
                  inviteSent:
                    "pending" ===
                    (
                      await p.Request.safePost("/chat/frontend/v1/business-profiles/{business_profile_id}/members", {
                        additionalHeaders: eE,
                        parameters: { path: { business_profile_id: er } },
                        requestBody: { email: e.email, ...i },
                        expectedErrorStatuses: [401, 403, 404, 409, 422],
                      })
                    ).status,
                }
              {
                let s = await p.Request.safePost(
                    "/chat/frontend/v1/business-profiles/{business_profile_id}/members/{member_id}/remove",
                    {
                      additionalHeaders: eE,
                      parameters: { path: { business_profile_id: er, member_id: e.member.id } },
                      requestBody: {
                        ...i,
                        expected_membership_revision: e.member.membership_revision,
                        ...("pending" === e.member.status ? { status: "pending" } : {}),
                      },
                      expectedErrorStatuses: [401, 403, 404, 409, 422],
                    },
                  ),
                  t = E.safeParse(s)
                return { accessRemains: t.success && !0 === t.data.access_remains }
              }
            }
            try {
              return await s(e.rosterRevision)
            } catch (i) {
              if (
                null == e.rosterRevision ||
                !(function (e) {
                  if (!(e instanceof S.fk) || 400 !== e.status) return !1
                  try {
                    return I.safeParse(JSON.parse(e.message)).success
                  } catch {
                    return !1
                  }
                })(i)
              )
                throw i
              return s()
            }
          }),
          (en[18] = eE),
          (en[19] = er),
          (en[20] = _))
        : (_ = en[20]),
        en[21] !== ea || en[22] !== ew || en[23] !== eI || en[24] !== eb || en[25] !== eT
          ? ((T = async (e, s) => {
              let { accessRemains: i } = e
              ;(eN(!0 === i),
              "add" === s.type ? (null == ew ? e_("") : eB(!0)) : ey(null),
              "remove" === s.type && s.member.is_current_user && !0 !== i && null != s.member.membership_revision)
                ? await eI()
                : (await eb.invalidateQueries({ queryKey: eT }),
                  await eb.invalidateQueries({ queryKey: ["business-profiles", ea, "list"] }))
            }),
            (en[21] = ea),
            (en[22] = ew),
            (en[23] = eI),
            (en[24] = eb),
            (en[25] = eT),
            (en[26] = T))
          : (T = en[26]))
      let eO = (0, l.n)({
        mutationFn: _,
        onSuccess: T,
        onError: async (e, s) => {
          if (e instanceof S.fk && !("remove" === s.type && G(e))) {
            if ([401, 403].includes(e.status)) await eI()
            else if ([404, 409].includes(e.status)) {
              "remove" === s.type && ey(null)
              let e = await eR()
              "remove" === s.type && e.isSuccess && eO.reset()
            }
          }
        },
        retry: !1,
      })
      ;(en[27] !== eE || en[28] !== er
        ? ((F = (e) =>
            p.Request.safePost("/chat/frontend/v1/business-profiles/{business_profile_id}/member-ad-accounts/preview", {
              additionalHeaders: eE,
              parameters: { path: { business_profile_id: er } },
              requestBody: { email: e },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
            })),
          (en[27] = eE),
          (en[28] = er),
          (en[29] = F))
        : (F = en[29]),
        en[30] !== eh || en[31] !== eO || en[32] !== eV
          ? ((R = (e, s) => {
              eh() &&
                null != eV &&
                (0 === e.accounts.length
                  ? eO.mutate({
                      type: "add",
                      email: s,
                      revision: eV.profile_revision,
                      rosterRevision: eV.roster_revision,
                    })
                  : eP(e.accounts))
            }),
            (en[30] = eh),
            (en[31] = eO),
            (en[32] = eV),
            (en[33] = R))
          : (R = en[33]),
        en[34] !== R || en[35] !== F
          ? ((V = { mutationFn: F, onSuccess: R, retry: !1 }), (en[34] = R), (en[35] = F), (en[36] = V))
          : (V = en[36]))
      let eH = (0, l.n)(V)
      ;(en[37] !== eE ||
      en[38] !== ej ||
      en[39] !== eh ||
      en[40] !== eO ||
      en[41] !== er ||
      en[42] !== eS ||
      en[43] !== eV ||
      en[44] !== eA
        ? ((D = async () => {
            if (null == eV) return
            eS ||
              (await eO.mutateAsync({
                type: "add",
                email: ej.trim(),
                revision: eV.profile_revision,
                rosterRevision: eV.roster_revision,
              }))
            let e = []
            for (let s of eA) {
              if (!eh()) return
              try {
                await p.Request.safePost(
                  "/chat/frontend/v1/business-profiles/{business_profile_id}/ad-account-invitations",
                  {
                    additionalHeaders: eE,
                    parameters: { path: { business_profile_id: er } },
                    requestBody: { email: ej.trim(), ad_account_id: s },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 503],
                  },
                )
              } catch (s) {
                e.push(s)
                continue
              }
              ;(eC((e) => e.filter((e) => e !== s)), eP((e) => e?.filter((e) => e.id !== s) ?? null))
            }
            if (e.length > 0) throw e[0]
          }),
          (en[37] = eE),
          (en[38] = ej),
          (en[39] = eh),
          (en[40] = eO),
          (en[41] = er),
          (en[42] = eS),
          (en[43] = eV),
          (en[44] = eA),
          (en[45] = D))
        : (D = en[45]),
        en[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = () => {
              ;(e_(""), eP(null), eB(!1))
            }),
            (en[46] = q))
          : (q = en[46]),
        en[47] !== D ? (($ = { mutationFn: D, onSuccess: q, retry: !1 }), (en[47] = D), (en[48] = $)) : ($ = en[48]))
      let eL = (0, l.n)($),
        eU = eO.isPending || eH.isPending || eL.isPending,
        ez =
          null == ew && eO.isSuccess && !0 === eO.data.inviteSent && "add" === eO.variables.type
            ? eO.variables.email
            : null
      en[49] !== eL || en[50] !== eo || en[51] !== eO || en[52] !== eH
        ? ((K = () => {
            ;(eO.reset(), eH.reset(), eL.reset(), eP(null), eC([]), eB(!1), ex(!1), e_(""), eo?.onClose())
          }),
          (en[49] = eL),
          (en[50] = eo),
          (en[51] = eO),
          (en[52] = eH),
          (en[53] = K))
        : (K = en[53])
      let eD = K
      en[54] !== eo
        ? ((Z =
            null == eo
              ? void 0
              : (e) => {
                  eo.trigger.isConnected && (e.preventDefault(), eo.trigger.focus())
                }),
          (en[54] = eo),
          (en[55] = Z))
        : (Z = en[55])
      let eq = Z
      en[56] !== eF || en[57] !== eR || en[58] !== eV
        ? ((J =
            null == eV &&
            (null == eF
              ? (0, t.jsx)(N.Bz, { variant: "members" })
              : (0, t.jsxs)("div", {
                  role: "alert",
                  className: "flex items-center justify-between gap-4",
                  children: [
                    (0, t.jsx)(m.A, {
                      id: "businessProfiles.members.loadError",
                      defaultMessage: "Couldn’t load members. Your access may have changed",
                      description:
                        "Members tab error when the roster cannot be loaded or the user no longer has permission to see it",
                    }),
                    (0, t.jsx)(v.$, {
                      color: "secondary",
                      type: "button",
                      onClick: () => void eR(),
                      children: (0, t.jsx)(m.A, {
                        id: "businessProfiles.retry",
                        defaultMessage: "Try again",
                        description: "Button to retry loading business profiles",
                      }),
                    }),
                  ],
                }))),
          (en[56] = eF),
          (en[57] = eR),
          (en[58] = eV),
          (en[59] = J))
        : (J = en[59])
      let e$ = J
      if (null == eV && null == eo && null == ez) {
        let e
        return (
          en[60] !== e$ ? ((e = (0, t.jsx)(t.Fragment, { children: e$ })), (en[60] = e$), (en[61] = e)) : (e = en[61]),
          e
        )
      }
      let eK = eV?.tenant_managed === !0 && !el,
        eZ = em && eV?.tenant_managed == null,
        eJ = eV?.can_add === !0 && !eK && !eZ
      en[62] !== ev ? ((W = L(ev)), (en[62] = ev), (en[63] = W)) : (W = en[63])
      let eW = W
      en[64] !== ev?.email || en[65] !== ev?.name
        ? ((Y = ev?.name?.trim() || ev?.email?.trim() || ""), (en[64] = ev?.email), (en[65] = ev?.name), (en[66] = Y))
        : (Y = en[66])
      let eY = Y,
        eQ = eO.variables?.type === "add" ? eO.error : null,
        eX = eQ instanceof S.fk ? eQ.errorCode : void 0,
        e0 = "business_profile_members_invalid_email" === eX
      en[67] !== eO
        ? ((Q = (e) => {
            ;(eN(!1), eO.reset(), ey(e))
          }),
          (en[67] = eO),
          (en[68] = Q))
        : (Q = en[68])
      let e1 = Q
      en[69] !== eM
        ? ((X =
            eM &&
            (0, t.jsx)("p", {
              role: "status",
              className: "px-4 py-2 text-sm text-secondary",
              children: (0, t.jsx)(m.A, {
                id: "businessProfiles.members.accessRemains",
                defaultMessage: "Direct access removed. Access from other roles remains.",
                description:
                  "Notice after a Business Profile administrator's direct access is removed but they still have access from other roles.",
              }),
            })),
          (en[69] = eM),
          (en[70] = X))
        : (X = en[70])
      let e2 = X
      return (
        en[71] !== e2 ||
        en[72] !== eU ||
        en[73] !== eJ ||
        en[74] !== eZ ||
        en[75] !== ec ||
        en[76] !== ed ||
        en[77] !== eg ||
        en[78] !== eO ||
        en[79] !== e1 ||
        en[80] !== eV ||
        en[81] !== eK
          ? ((ee =
              !ec &&
              null != eV &&
              (0, t.jsxs)("section", {
                "aria-label": ed.formatMessage(z.members),
                children: [
                  !eg && e2,
                  (0, t.jsxs)("button", {
                    type: "button",
                    disabled: !eJ || eU,
                    className:
                      "hover:bg-surface-hover focus-visible:outline-primary-outline flex w-full cursor-interaction items-center gap-4 border-b border-default p-4 text-start disabled:opacity-50",
                    onClick: () => {
                      ;(eO.reset(), e_(""), ex(!0))
                    },
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-secondary",
                        children: (0, t.jsx)(w.sqn, {}),
                      }),
                      (0, t.jsx)(m.A, { ...z.add }),
                    ],
                  }),
                  !eJ &&
                    (0, t.jsx)("p", {
                      className: "px-4 py-2 text-sm text-secondary",
                      children: (0, t.jsx)(O, { capabilityUnconfirmed: eZ, tenantManaged: eK }),
                    }),
                  (0, t.jsx)("ul", {
                    children: eV.members.map((e) => (0, t.jsx)(H, { member: e, disabled: eU, onRemove: e1 }, e.id)),
                  }),
                ],
              })),
            (en[71] = e2),
            (en[72] = eU),
            (en[73] = eJ),
            (en[74] = eZ),
            (en[75] = ec),
            (en[76] = ed),
            (en[77] = eg),
            (en[78] = eO),
            (en[79] = e1),
            (en[80] = eV),
            (en[81] = eK),
            (en[82] = ee))
          : (ee = en[82]),
        en[83] !== e2 ||
        en[84] !== eL ||
        en[85] !== eQ ||
        en[86] !== eX ||
        en[87] !== eU ||
        en[88] !== eJ ||
        en[89] !== eZ ||
        en[90] !== eD ||
        en[91] !== ez ||
        en[92] !== ej ||
        en[93] !== ef ||
        en[94] !== ed ||
        en[95] !== e0 ||
        en[96] !== ew ||
        en[97] !== eg ||
        en[98] !== ev ||
        en[99] !== eO ||
        en[100] !== eH ||
        en[101] !== eS ||
        en[102] !== e1 ||
        en[103] !== eq ||
        en[104] !== eV ||
        en[105] !== e$ ||
        en[106] !== eA ||
        en[107] !== eK
          ? ((es =
              eg &&
              null == ev &&
              (0, t.jsxs)(y.lG, {
                open: !0,
                size: "large",
                variant: "chatgpt",
                showDialogClose: !eU,
                contentProps: { onCloseAutoFocus: eq },
                onOpenChange: (e) => {
                  e || eU || eD()
                },
                children: [
                  null != ez &&
                    (0, t.jsxs)(j.R4, {
                      size: "viewport",
                      variant: "chatgpt",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex flex-col gap-4 px-6 pt-4 pb-6",
                          children: [
                            (0, t.jsx)(j.c7, {
                              className: "pe-10",
                              title: (0, t.jsx)(y.L3, {
                                children: (0, t.jsx)(m.A, {
                                  id: "businessProfiles.members.inviteSent.title",
                                  defaultMessage: "Invite sent!",
                                  description:
                                    "Title confirming a Business Profile admin invitation was sent to the recipient.",
                                }),
                              }),
                              subtitle: (0, t.jsx)(y.rr, {
                                className: "wrap-anywhere",
                                children: (0, t.jsx)(m.A, {
                                  id: "businessProfiles.members.inviteSent.description",
                                  defaultMessage: "Your invite to {email} has been sent",
                                  description:
                                    "Confirms the recipient of a Business Profile admin invitation. The email placeholder is the invited person's email address.",
                                  values: { email: ez },
                                }),
                              }),
                              subtitleTone: "secondary",
                            }),
                            (0, t.jsx)(M.D, { placement: "invite_sent" }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "border-t border-default p-4",
                          children: (0, t.jsx)(j.Es, {
                            expandSingleButton: !1,
                            children: (0, t.jsx)(v.$, {
                              autoFocus: !0,
                              color: "primary",
                              size: "secondaryAction",
                              type: "button",
                              onClick: eD,
                              children: (0, t.jsx)(m.A, { ...z.done }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  null == ez &&
                    null == eV &&
                    (0, t.jsxs)(j.R4, {
                      size: "viewport",
                      variant: "chatgpt",
                      children: [
                        (0, t.jsx)("div", {
                          className: "px-6 pe-16 pt-4",
                          children: (0, t.jsx)(j.c7, {
                            title: (0, t.jsx)(y.L3, { children: (0, t.jsx)(m.A, { ...z.inviteBusinessAdmins }) }),
                          }),
                        }),
                        (0, t.jsx)("div", { className: "px-6 pt-4 pb-6", children: e$ }),
                      ],
                    }),
                  null == ez &&
                    null != eV &&
                    (0, t.jsxs)(j.R4, {
                      as: "form",
                      size: "viewport",
                      variant: "chatgpt",
                      onSubmit: (e) => {
                        if ((e.preventDefault(), !eU && e.currentTarget.checkValidity())) {
                          if (null != ew) (eJ || eS) && eL.mutate()
                          else if (eJ && "" !== ej.trim()) {
                            if (!0 === eV.member_ad_account_access_available) return void eH.mutate(ej.trim())
                            eO.mutate({
                              type: "add",
                              email: ej.trim(),
                              revision: eV.profile_revision,
                              rosterRevision: eV.roster_revision,
                            })
                          }
                        }
                      },
                      children: [
                        (0, t.jsx)("div", {
                          className: "px-6 pe-16 pt-4",
                          children: (0, t.jsx)(j.c7, {
                            title: (0, t.jsx)(y.L3, {
                              children:
                                null == ew
                                  ? (0, t.jsx)(m.A, { ...z.inviteBusinessAdmins })
                                  : (0, t.jsx)(m.A, {
                                      id: "businessProfiles.members.adAccounts.title",
                                      defaultMessage: "Give access to connected ad accounts?",
                                      description:
                                        "Title of the optional ad account access step when a Business Profile administrator invites someone. The listed accounts can be granted member access. Short question; no placeholders.",
                                    }),
                            }),
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "px-6 pt-4 pb-6",
                          children: [
                            e2,
                            null != ew
                              ? (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, t.jsx)("ul", {
                                      className: "flex flex-col gap-2",
                                      children: ew.map((e) => {
                                        let s = e.name ?? ed.formatMessage(z.adAccount)
                                        return (0, t.jsxs)(
                                          "li",
                                          {
                                            className: "flex min-h-11 items-center gap-3",
                                            children: [
                                              (0, t.jsx)(x.e, {
                                                alt: "",
                                                src: e.icon_url,
                                                name: s,
                                                size: "action",
                                                colorKey: e.id,
                                              }),
                                              (0, t.jsx)("label", {
                                                htmlFor: `${ef}-${e.id}`,
                                                className: "min-w-0 flex-1 truncate text-sm",
                                                children: s,
                                              }),
                                              (0, t.jsx)(P.l, {
                                                id: `${ef}-${e.id}`,
                                                ariaLabel: s,
                                                checked: eA.includes(e.id),
                                                disabled: eU || eS,
                                                onChange: (s) =>
                                                  eC((i) => (s ? [...i, e.id] : i.filter((s) => s !== e.id))),
                                              }),
                                            ],
                                          },
                                          e.id,
                                        )
                                      }),
                                    }),
                                    eS &&
                                      eL.isError &&
                                      (0, t.jsx)("p", {
                                        role: "alert",
                                        className: "text-sm text-danger",
                                        children: (0, t.jsx)(m.A, {
                                          id: "businessProfiles.members.adAccounts.partialFailure",
                                          defaultMessage:
                                            "The business invitation succeeded, but some ad account access could not be added. Retry to finish adding account access.",
                                          description:
                                            "Error after a Business Profile invitation succeeds but an optional ad account grant fails. The administrator can retry only unfinished account grants; the business invitation will not be resent. Plain text; no placeholders.",
                                        }),
                                      }),
                                    !eS &&
                                      null != eQ &&
                                      (0, t.jsx)("p", {
                                        role: "alert",
                                        className: "text-sm text-danger",
                                        children: (0, t.jsx)(U, { code: eX }),
                                      }),
                                  ],
                                })
                              : (0, t.jsxs)("div", {
                                  className: "flex flex-col gap-4",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-2",
                                      children: [
                                        (0, t.jsx)("label", {
                                          className: "sr-only",
                                          htmlFor: ef,
                                          children: (0, t.jsx)(m.A, {
                                            id: "businessProfiles.members.email",
                                            defaultMessage: "Email",
                                            description:
                                              "Label for the exact existing-user email in the Business Members add dialog",
                                          }),
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "flex flex-col gap-2",
                                          children: [
                                            (0, t.jsx)("input", {
                                              className:
                                                "h-9 min-w-0 rounded-xl border border-default bg-transparent px-3 text-sm text-default outline-none placeholder:text-tertiary focus:border-ring disabled:cursor-not-allowed disabled:text-secondary aria-invalid:border-text-danger",
                                              id: ef,
                                              name: "memberEmail",
                                              type: "email",
                                              autoComplete: "email",
                                              autoFocus: !0,
                                              required: !0,
                                              maxLength: 254,
                                              onKeyDown: (e) => {
                                                "Enter" !== e.key ||
                                                  e.nativeEvent.isComposing ||
                                                  (e.preventDefault(),
                                                  "" !== ej.trim() && e.currentTarget.form?.requestSubmit())
                                              },
                                              placeholder: ed.formatMessage({
                                                id: "businessProfiles.members.emailPlaceholder",
                                                defaultMessage: "Add email address",
                                                description:
                                                  "Placeholder in the business membership dialog for an existing ChatGPT user's email address",
                                              }),
                                              value: ej,
                                              disabled: eU || !eJ,
                                              "aria-invalid": e0 || void 0,
                                              "aria-describedby": e0 ? ef + "-error" : void 0,
                                              onChange: (e) => {
                                                ;(e_(e.target.value), eO.reset(), eH.reset())
                                              },
                                            }),
                                            "" !== ej.trim() &&
                                              (0, t.jsxs)("button", {
                                                className:
                                                  "hover:bg-surface-hover flex min-h-11 cursor-interaction items-center gap-3 rounded-xl p-2 text-start focus-visible:outline-ring disabled:opacity-50",
                                                type: "submit",
                                                "aria-busy": eU,
                                                disabled: eU || !eJ,
                                                children: [
                                                  (0, t.jsx)(x.e, {
                                                    alt: "",
                                                    src: null,
                                                    name: ej.trim(),
                                                    size: "action",
                                                    colorKey: ej.trim(),
                                                  }),
                                                  (0, t.jsx)("span", {
                                                    className: "min-w-0 truncate text-sm",
                                                    children: ej.trim(),
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        e0 &&
                                          (0, t.jsx)("p", {
                                            id: ef + "-error",
                                            role: "alert",
                                            className: "text-sm text-danger",
                                            children: (0, t.jsx)(U, { code: eX }),
                                          }),
                                      ],
                                    }),
                                    eH.isError &&
                                      (0, t.jsxs)("div", {
                                        className: "flex flex-col items-start gap-2",
                                        children: [
                                          (0, t.jsx)("p", {
                                            role: "alert",
                                            className: "text-sm text-danger",
                                            children: (0, t.jsx)(m.A, {
                                              id: "businessProfiles.members.adAccounts.previewFailure",
                                              defaultMessage:
                                                "Couldn’t check connected ad account access. Select the email to try again.",
                                              description:
                                                "Error in the Business Profile invitation dialog when checking optional account access fails before any invitation is sent. Ask the administrator to select the entered email again to retry. Plain text; no placeholders.",
                                            }),
                                          }),
                                          (0, t.jsx)(v.$, {
                                            type: "button",
                                            color: "secondary",
                                            size: "secondaryAction",
                                            disabled: eU || !eJ,
                                            onClick: (e) => {
                                              e.currentTarget.form?.reportValidity() &&
                                                (eH.reset(),
                                                eO.mutate({
                                                  type: "add",
                                                  email: ej.trim(),
                                                  revision: eV.profile_revision,
                                                  rosterRevision: eV.roster_revision,
                                                }))
                                            },
                                            children: (0, t.jsx)(m.A, {
                                              id: "businessProfiles.members.adAccounts.skip",
                                              defaultMessage: "Invite without ad account access",
                                              description:
                                                "Button letting a Business Profile administrator proceed with only the business invitation after the optional ad account access check fails. No ad account access will be granted. Short action; no placeholders.",
                                            }),
                                          }),
                                        ],
                                      }),
                                    null != eQ &&
                                      !e0 &&
                                      (0, t.jsx)(g.l, {
                                        type: "error",
                                        variant: "callout",
                                        layout: "verticalIcon",
                                        icon: (0, t.jsx)(w.zOs, {}),
                                        role: "alert",
                                        title: (0, t.jsx)(m.A, {
                                          id: "businessProfiles.members.addError.title",
                                          defaultMessage: "Couldn’t add member",
                                          description:
                                            "Heading of an error banner when granting business admin access fails",
                                        }),
                                        content: (0, t.jsx)(U, { code: eX }),
                                      }),
                                    !eJ &&
                                      null == eQ &&
                                      (0, t.jsx)("p", {
                                        className: "text-sm text-secondary",
                                        children: (0, t.jsx)(O, { capabilityUnconfirmed: eZ, tenantManaged: eK }),
                                      }),
                                    (0, t.jsxs)("div", {
                                      className: "flex flex-col gap-3",
                                      children: [
                                        (0, t.jsx)("h3", {
                                          className: "text-sm font-medium text-tertiary",
                                          children: (0, t.jsx)(m.A, {
                                            id: "businessProfiles.members.people",
                                            defaultMessage: "People",
                                            description:
                                              "Heading above people with immediate admin access to this business",
                                          }),
                                        }),
                                        (0, t.jsx)("ul", {
                                          className: "flex flex-col gap-2",
                                          children: eV.members.map((e) =>
                                            (0, t.jsx)(H, { member: e, compact: !0, disabled: eU, onRemove: e1 }, e.id),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: "border-t border-default p-4",
                          children: (0, t.jsx)(j.Es, {
                            expandSingleButton: !1,
                            children: (0, t.jsx)(v.$, {
                              color: "primary",
                              size: "secondaryAction",
                              type: null == ew ? "button" : "submit",
                              disabled: eU || (null != ew && !eJ && !eS),
                              loading: eU,
                              onClick: () => {
                                null == ew && eD()
                              },
                              children:
                                null == ew
                                  ? (0, t.jsx)(m.A, { ...z.done })
                                  : (0, t.jsx)(m.A, { ...(eS ? z.retryAccountAccess : z.invite) }),
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              })),
            (en[83] = e2),
            (en[84] = eL),
            (en[85] = eQ),
            (en[86] = eX),
            (en[87] = eU),
            (en[88] = eJ),
            (en[89] = eZ),
            (en[90] = eD),
            (en[91] = ez),
            (en[92] = ej),
            (en[93] = ef),
            (en[94] = ed),
            (en[95] = e0),
            (en[96] = ew),
            (en[97] = eg),
            (en[98] = ev),
            (en[99] = eO),
            (en[100] = eH),
            (en[101] = eS),
            (en[102] = e1),
            (en[103] = eq),
            (en[104] = eV),
            (en[105] = e$),
            (en[106] = eA),
            (en[107] = eK),
            (en[108] = es))
          : (es = en[108]),
        en[109] !== ev || en[110] !== eO || en[111] !== eW || en[112] !== eY || en[113] !== eV
          ? ((ei =
              null != ev &&
              null != eV &&
              (0, t.jsx)(y.lG, {
                open: !0,
                onOpenChange: (e) => {
                  e || eO.isPending || (eO.reset(), ey(null))
                },
                children: (0, t.jsxs)(j.R4, {
                  as: "form",
                  onSubmit: (e) => {
                    ;(e.preventDefault(),
                      eO.isPending ||
                        eO.mutate({
                          type: "remove",
                          member: ev,
                          revision: eV.profile_revision,
                          rosterRevision: eV.roster_revision,
                        }))
                  },
                  children: [
                    (0, t.jsx)(j.OO, {
                      children: (0, t.jsx)(j.c7, { title: (0, t.jsx)(y.L3, { children: (0, t.jsx)(m.A, { ...eW }) }) }),
                    }),
                    (0, t.jsx)(j.OO, {
                      children: (0, t.jsxs)("div", {
                        className: "flex flex-col gap-5",
                        children: [
                          (0, t.jsxs)("p", {
                            className: "text-sm text-secondary",
                            children: [
                              "pending" === ev.status && (0, t.jsx)(m.A, { ...z.cancelInvitationExplanation }),
                              "pending" !== ev.status &&
                                null == ev.membership_revision &&
                                (0, t.jsx)(m.A, { ...z.removeDirectExplanation }),
                              "pending" !== ev.status &&
                                null != ev.membership_revision &&
                                (0, t.jsx)(m.A, {
                                  id: "businessProfiles.members.removeExplanation",
                                  defaultMessage:
                                    "{hasName, select, true {{name}} other {This member}} will lose access to this business immediately. Saved business details will remain",
                                  description:
                                    "Body of the Business Profile Members confirmation dialog shown to an owner or admin removing an admin, including themselves when leaving. Explain immediate loss of access calmly. name is a string containing the affected member’s display name or email, or an empty string when both are blank or unavailable. hasName is a boolean: true displays name; false uses the generic This member branch without name. Do not assume name is a personal name. Plain text with no markup.",
                                  values: { name: eY, hasName: !!eY },
                                }),
                            ],
                          }),
                          null != eO.error &&
                            (0, t.jsx)("p", {
                              role: "alert",
                              className: "text-sm text-danger",
                              children:
                                eO.variables?.type === "remove" && G(eO.error)
                                  ? (0, t.jsx)(m.A, {
                                      id: "businessProfiles.members.lastEffectiveAdmin",
                                      defaultMessage: "Add another admin before removing this direct role.",
                                      description:
                                        "Explain why the last effective Business Profile admin cannot be removed.",
                                    })
                                  : (0, t.jsx)(m.A, {
                                      id: "businessProfiles.members.changeFailed",
                                      defaultMessage: "Members may have changed. Reload the list and try again",
                                      description:
                                        "Inline error in the Business Profiles Remove member dialog after an owner or admin submits a failed or stale request, including an admin leaving the business. Ask them to reload before retrying; this does not confirm that the roster changed. Requests are not retried automatically. Plain text without member details or placeholders.",
                                    }),
                            }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(j.OO, {
                      spacing: "large",
                      children: (0, t.jsxs)(j.Es, {
                        children: [
                          (0, t.jsx)(v.$, {
                            color: "secondary",
                            type: "button",
                            disabled: eO.isPending,
                            onClick: () => {
                              ;(eO.reset(), ey(null))
                            },
                            children: (0, t.jsx)(m.A, { ...z.cancel }),
                          }),
                          (0, t.jsx)(v.$, {
                            color: "danger",
                            type: "submit",
                            loading: eO.isPending,
                            "aria-busy": eO.isPending,
                            disabled: eO.isPending,
                            children: (0, t.jsx)(m.A, { ...eW }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              })),
            (en[109] = ev),
            (en[110] = eO),
            (en[111] = eW),
            (en[112] = eY),
            (en[113] = eV),
            (en[114] = ei))
          : (ei = en[114]),
        en[115] !== ee || en[116] !== es || en[117] !== ei
          ? ((et = (0, t.jsxs)(t.Fragment, { children: [ee, es, ei] })),
            (en[115] = ee),
            (en[116] = es),
            (en[117] = ei),
            (en[118] = et))
          : (et = en[118]),
        et
      )
    }
    function O(e) {
      let s,
        i = (0, n.c)(3),
        { capabilityUnconfirmed: a, tenantManaged: r } = e
      if (a) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(m.A, { ...z.capabilityUnavailable })), (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (r) {
        let e
        return (
          i[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(m.A, { ...z.tenantManaged })), (i[1] = e))
            : (e = i[1]),
          e
        )
      }
      return (
        i[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)(m.A, { ...z.limitReached })), (i[2] = s))
          : (s = i[2]),
        s
      )
    }
    function H(e) {
      let s,
        i,
        a,
        r,
        l,
        o,
        c,
        u,
        h,
        b = (0, n.c)(33),
        { member: f, compact: p, disabled: g, onRemove: y } = e,
        j = void 0 !== p && p,
        P = void 0 !== g && g,
        A = (0, d.A)(),
        C = j
          ? "flex min-h-11 items-center gap-3"
          : "flex items-center gap-4 border-b border-default p-4 last:border-b-0"
      b[0] !== f.email || b[1] !== f.name
        ? ((s = f.name?.trim() || f.email?.trim() || null), (b[0] = f.email), (b[1] = f.name), (b[2] = s))
        : (s = b[2])
      let S = j ? "action" : "row"
      b[3] !== f.id || b[4] !== s || b[5] !== S
        ? ((i = (0, t.jsx)(x.e, { alt: "", src: null, name: s, size: S, colorKey: f.id })),
          (b[3] = f.id),
          (b[4] = s),
          (b[5] = S),
          (b[6] = i))
        : (i = b[6])
      let B = j ? "truncate text-sm" : "truncate text-base"
      return (
        b[7] !== f.email || b[8] !== f.name
          ? ((a = f.name?.trim() || f.email?.trim() || (0, t.jsx)(m.A, { ...z.member })),
            (b[7] = f.email),
            (b[8] = f.name),
            (b[9] = a))
          : (a = b[9]),
        b[10] !== B || b[11] !== a
          ? ((r = (0, t.jsx)("p", { className: B, children: a })), (b[10] = B), (b[11] = a), (b[12] = r))
          : (r = b[12]),
        b[13] !== j || b[14] !== f.email || b[15] !== f.name
          ? ((l =
              !!f.name?.trim() &&
              !!f.email?.trim() &&
              (0, t.jsx)("p", {
                className: j ? "truncate text-xs text-tertiary" : "truncate text-sm text-tertiary",
                children: f.email.trim(),
              })),
            (b[13] = j),
            (b[14] = f.email),
            (b[15] = f.name),
            (b[16] = l))
          : (l = b[16]),
        b[17] !== f.status
          ? ((o =
              "pending" === f.status &&
              (0, t.jsx)("p", { className: "text-sm opacity-70", children: (0, t.jsx)(m.A, { ...z.pending }) })),
            (b[17] = f.status),
            (b[18] = o))
          : (o = b[18]),
        b[19] !== l || b[20] !== o || b[21] !== r
          ? ((c = (0, t.jsxs)("div", { className: "min-w-0 flex-1 select-text", children: [r, l, o] })),
            (b[19] = l),
            (b[20] = o),
            (b[21] = r),
            (b[22] = c))
          : (c = b[22]),
        b[23] !== P || b[24] !== A || b[25] !== f || b[26] !== y
          ? ((u =
              null != y &&
              f.can_remove &&
              (0, t.jsx)(_.Ab, {
                triggerButton: (0, t.jsx)(v.$, {
                  type: "button",
                  color: "ghost",
                  disabled: P,
                  "aria-label": A.formatMessage(
                    {
                      id: "businessProfiles.members.actionsForMember",
                      defaultMessage:
                        "{hasName, select, true {Member actions for {name}} other {Member actions for unknown member}}",
                      description:
                        "Screen-reader label for a Business Profile Members row's overflow button. Opens actions to remove that admin or leave if this is the current user. Keep it concise. name is a string containing the member's email, or their display name when email is unavailable, or an empty string when both are blank or unavailable. Email is preferred to distinguish members with identical display names. hasName is a boolean: true uses name; false uses the unknown-member fallback without name.",
                    },
                    { name: f.email?.trim() || f.name?.trim() || "", hasName: !!(f.email?.trim() || f.name?.trim()) },
                  ),
                  children: (0, t.jsx)(w.e4G, {}),
                }),
                children: (0, t.jsx)(_.ms.Item, { onSelect: () => y(f), children: (0, t.jsx)(m.A, { ...L(f) }) }),
              })),
            (b[23] = P),
            (b[24] = A),
            (b[25] = f),
            (b[26] = y),
            (b[27] = u))
          : (u = b[27]),
        b[28] !== c || b[29] !== u || b[30] !== C || b[31] !== i
          ? ((h = (0, t.jsxs)("li", { className: C, children: [i, c, u] })),
            (b[28] = c),
            (b[29] = u),
            (b[30] = C),
            (b[31] = i),
            (b[32] = h))
          : (h = b[32]),
        h
      )
    }
    function L(e) {
      return e?.status === "pending"
        ? z.cancelInvitation
        : e?.membership_revision == null
          ? z.removeDirect
          : e.is_current_user
            ? z.leave
            : z.remove
    }
    function U(e) {
      let s = (0, n.c)(6),
        { code: i } = e
      switch (i) {
        case "business_profile_members_invalid_email": {
          let e
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, {
                  id: "businessProfiles.members.addError.invalidEmail",
                  defaultMessage: "Enter a valid email address",
                  description:
                    "Inline error in the Business Profiles Add member dialog when an owner or admin submits a malformed email address. Ask them to correct the address before retrying. Short, calm plain text; no placeholders.",
                })),
                (s[0] = e))
              : (e = s[0]),
            e
          )
        }
        case "business_profile_members_ineligible_workspace": {
          let e
          return (
            s[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, {
                  id: "businessProfiles.members.addError.ineligibleWorkspace",
                  defaultMessage: "Use the ChatGPT email of an active member of the business owner’s workspace",
                  description:
                    "Inline error in the Business Profiles Add member dialog when the submitted email does not resolve to an eligible recipient in the current business owner's work workspace. The caller can be an owner or admin. Explain the required account context without revealing whether the email belongs to an existing user. Plain text; no placeholders.",
                })),
                (s[1] = e))
              : (e = s[1]),
            e
          )
        }
        case "business_profile_members_ineligible_personal": {
          let e
          return (
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, {
                  id: "businessProfiles.members.addError.ineligiblePersonal",
                  defaultMessage: "Use the email of an existing ChatGPT personal account",
                  description:
                    "Inline error in the Business Profiles Add member dialog when the business is owned from a personal account and the submitted email does not resolve to an eligible active personal account. The recipient uses their own personal account. Explain the requirement without revealing whether the email belongs to an existing user. Plain text; no placeholders.",
                })),
                (s[2] = e))
              : (e = s[2]),
            e
          )
        }
        case "business_profile_members_member_limit": {
          let e
          return (
            s[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, { ...z.limitReached })), (s[3] = e))
              : (e = s[3]),
            e
          )
        }
        case "business_profile_members_original_account_unavailable": {
          let e
          return (
            s[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, {
                  id: "businessProfiles.members.addError.originalAccountUnavailable",
                  defaultMessage: "This member’s original account is no longer available",
                  description:
                    "Inline error in the Business Profiles Add member dialog when restoring a removed member is blocked because their original account is no longer active or eligible. The business cannot silently move their membership to another account. Calm plain text; no account details or placeholders.",
                })),
                (s[4] = e))
              : (e = s[4]),
            e
          )
        }
        default: {
          let e
          return (
            s[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(m.A, {
                  id: "businessProfiles.members.addError.failed",
                  defaultMessage: "We couldn’t add this member. Please try again",
                  description:
                    "Fallback inline error in the Business Profiles Add member dialog when a request fails without a recognized reason, including a temporary connection or server failure. Invite the owner or admin to retry. Calm plain text; no server details or placeholders.",
                })),
                (s[5] = e))
              : (e = s[5]),
            e
          )
        }
      }
    }
    let z = (0, u.YK)({
      done: {
        id: "businessProfiles.members.done",
        defaultMessage: "Done",
        description: "Close the business membership dialog after managing access",
      },
      inviteBusinessAdmins: {
        id: "businessProfiles.members.inviteBusinessAdmins",
        defaultMessage: "Invite business admins",
        description:
          "Title of the Business Profile invitation dialog, shown to a business administrator adding another administrator. Some recipients must accept an invitation. Short heading; no placeholders.",
      },
      adAccount: {
        id: "businessProfiles.members.adAccounts.account",
        defaultMessage: "Ad account",
        description:
          "Fallback label for a connected ad account without a display name in the Business Profile invitation dialog. Short noun; no placeholders.",
      },
      invite: {
        id: "businessProfiles.members.adAccounts.invite",
        defaultMessage: "Invite",
        description:
          "Button confirming a Business Profile admin invitation and any selected optional member access to connected ad accounts. Short action; no placeholders.",
      },
      retryAccountAccess: {
        id: "businessProfiles.members.adAccounts.retry",
        defaultMessage: "Retry account access",
        description:
          "Button retrying only unfinished ad account grants after a Business Profile invitation has already succeeded. It does not resend the business invitation. Short action; no placeholders.",
      },
      cancelInvitationExplanation: {
        id: "businessProfiles.members.cancelInvitationExplanation",
        defaultMessage: "This invitation will be cancelled. Existing access from other roles will remain.",
        description: "Explain that cancelling a pending profile invitation does not remove other access",
      },
      removeDirectExplanation: {
        id: "businessProfiles.members.removeDirectExplanation",
        defaultMessage:
          "Direct admin access will be removed. Access through groups or other roles may remain. Saved business details will remain.",
        description: "Explain that removing a direct profile role preserves independent group or other role access",
      },
      pending: {
        id: "businessProfiles.members.pending",
        defaultMessage: "Invitation pending",
        description: "Status for a Business Profile invitation that has not been accepted",
      },
      cancelInvitation: {
        id: "businessProfiles.members.cancelInvitation",
        defaultMessage: "Cancel invitation",
        description: "Cancel only this Business Profile's pending invitation",
      },
      removeDirect: {
        id: "businessProfiles.members.removeDirect",
        defaultMessage: "Remove direct access",
        description: "Remove a direct Business Profile admin role; access through other roles may remain",
      },
      capabilityUnavailable: {
        id: "businessProfiles.members.capabilityUnavailable",
        defaultMessage: "Adding members is temporarily unavailable",
        description: "Notice shown when the server cannot confirm whether the business allows adding members",
      },
      tenantManaged: {
        id: "businessProfiles.members.tenantManaged",
        defaultMessage: "Adding members here is unavailable because this business is managed by an account",
        description:
          "Notice explaining that adding members here is unavailable because the Business Profile is managed by a business account",
      },
      limitReached: {
        id: "businessProfiles.members.limitReached",
        defaultMessage: "This business has reached its member limit",
        description:
          "Notice in Business Profiles when the configured member limit prevents adding another person. The limit may vary, so no fixed number is shown",
      },
      members: {
        id: "businessProfiles.members.title",
        defaultMessage: "Members",
        description: "Business manager Members tab and member list accessible name",
      },
      member: {
        id: "businessProfiles.members.unknown",
        defaultMessage: "Member",
        description: "Business Members row fallback when a person's name and email are unavailable",
      },
      add: {
        id: "businessProfiles.members.add",
        defaultMessage: "Add member",
        description: "Business Members action to grant an eligible ChatGPT user immediate admin access",
      },
      remove: {
        id: "businessProfiles.members.remove",
        defaultMessage: "Remove member",
        description: "Business Members action to revoke another admin's access",
      },
      leave: {
        id: "businessProfiles.members.leave",
        defaultMessage: "Leave business",
        description: "Business Members action for an admin to remove their own access",
      },
      cancel: {
        id: "businessProfiles.members.cancel",
        defaultMessage: "Cancel",
        description: "Dismiss the Business Members add or remove dialog without changing access",
      },
    })
    i.d(
      s,
      {},
      {
        BusinessProfileMembers: function (e) {
          let s,
            i = (0, n.c)(12),
            { profileId: a, adminView: r, headerInvite: l, dialogOnly: c } = e,
            d = void 0 !== c && c,
            { accountId: m } = (0, f.As)(),
            u = (0, o._U)(A.JW, k.I)
          if (null != r) {
            let e,
              s = `${r.accountId}:${r.userId}:${a}`
            return (
              i[0] !== r || i[1] !== u || i[2] !== a || i[3] !== s
                ? ((e = (0, t.jsx)(F, { adminView: r, profileId: a, membersV2Ready: u }, s)),
                  (i[0] = r),
                  (i[1] = u),
                  (i[2] = a),
                  (i[3] = s),
                  (i[4] = e))
                : (e = i[4]),
              e
            )
          }
          if (null == m) return null
          let h = `${m}:${a}`
          return (
            i[5] !== m || i[6] !== d || i[7] !== l || i[8] !== u || i[9] !== a || i[10] !== h
              ? ((s = (0, t.jsx)(
                  V,
                  { accountId: m, profileId: a, membersV2Ready: u, headerInvite: l, dialogOnly: d },
                  h,
                )),
                (i[5] = m),
                (i[6] = d),
                (i[7] = l),
                (i[8] = u),
                (i[9] = a),
                (i[10] = h),
                (i[11] = s))
              : (s = i[11]),
            s
          )
        },
      },
    )
  },
  V2Wp(e, s, i) {
    let t = (0, i("iJY0").a)({
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
    i.d(s, {}, { C: t })
  },
  X0Lu(e, s, i) {
    let t = (0, i("iJY0").a)({
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
    i.d(s, {}, { K: t })
  },
  Nyot(e, s, i) {
    let t = (0, i("iJY0").a)({
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
    i.d(s, {}, { E: t })
  },
}
//# sourceMappingURL=385541.5f000f6d28.js.map
