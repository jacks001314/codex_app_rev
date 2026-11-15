export const __rspack_esm_ids = [750141]
export const __webpack_modules__ = {
  Lx2J(e, t, i) {
    var s = i("ABep"),
      n = i("QosV"),
      r = i("on57"),
      a = i("Lhpx"),
      l = i("i7oB")
    i.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            i,
            o,
            c,
            d,
            u,
            f,
            h,
            p = (0, n.c)(16)
          p[0] !== e
            ? (({ className: t, density: o, padded: c, variant: d, width: u, ...i } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = i),
              (p[3] = o),
              (p[4] = c),
              (p[5] = d),
              (p[6] = u))
            : ((t = p[1]), (i = p[2]), (o = p[3]), (c = p[4]), (d = p[5]), (u = p[6]))
          let m = void 0 === o ? "default" : o,
            b = void 0 === c || c,
            g = void 0 === d ? "default" : d
          return (
            p[7] !== t || p[8] !== m || p[9] !== b || p[10] !== g || p[11] !== u
              ? ((f = (0, r.A)(
                  "flex flex-col overflow-hidden",
                  "search" === g &&
                    "select-none rounded-2xl border border-default bg-surface-elevated-secondary p-3 shadow-lg",
                  "floating" === g
                    ? ["select-none", (0, a.MX)("menu")]
                    : "default" === g && [
                        "border-default bg-surface-elevated-secondary relative w-full rounded-[var(--radius-suggestion-menu,var(--radius-2xl))] border-(length:--suggestion-menu-border-width,1px) shadow-(--suggestion-menu-shadow,none) text-sm",
                        b && l.A.suggestionMenu,
                      ],
                  (0, a.xk)(u),
                  "compact" === m && l.A.compactSuggestionMenu,
                  t,
                )),
                (p[7] = t),
                (p[8] = m),
                (p[9] = b),
                (p[10] = g),
                (p[11] = u),
                (p[12] = f))
              : (f = p[12]),
            p[13] !== i || p[14] !== f
              ? ((h = (0, s.jsx)("div", { className: f, ...i })), (p[13] = i), (p[14] = f), (p[15] = h))
              : (h = p[15]),
            h
          )
        },
        t: function (e) {
          let t,
            i,
            a,
            l,
            o,
            c,
            d = (0, n.c)(12)
          d[0] !== e
            ? (({ className: t, highlighted: i, variant: l, ...a } = e),
              (d[0] = e),
              (d[1] = t),
              (d[2] = i),
              (d[3] = a),
              (d[4] = l))
            : ((t = d[1]), (i = d[2]), (a = d[3]), (l = d[4]))
          let u =
              "search" === (void 0 === l ? "default" : l)
                ? "min-h-9 gap-1.5 rounded-[10px] px-2.5 py-1.5 text-[13px] leading-[18px] font-[510] tracking-[-0.08px] hover:bg-secondary-ghost-hover"
                : "min-h-[var(--app-menu-item-height,0px)] rounded-[var(--suggestion-menu-item-radius,var(--radius-xl))] p-[var(--suggestion-menu-item-padding,var(--app-menu-item-padding,var(--padding-row-y)_var(--padding-row-x)))] text-sm",
            f = i ? "bg-secondary-ghost-hover opacity-100" : "menu-row-opacity"
          return (
            d[5] !== t || d[6] !== u || d[7] !== f
              ? ((o = (0, r.A)(
                  "text-default outline-hidden focus:bg-secondary-ghost-hover cursor-interaction flex w-full shrink-0 items-center overflow-hidden text-start",
                  u,
                  "[content-visibility:auto] [contain-intrinsic-block-size:auto_1lh]",
                  f,
                  t,
                )),
                (d[5] = t),
                (d[6] = u),
                (d[7] = f),
                (d[8] = o))
              : (o = d[8]),
            d[9] !== a || d[10] !== o
              ? ((c = (0, s.jsx)("button", { className: o, type: "button", ...a })),
                (d[9] = a),
                (d[10] = o),
                (d[11] = c))
              : (c = d[11]),
            c
          )
        },
      },
    )
  },
  Zc6E(e, t, i) {
    i.d(t, { BusinessProfilesSearchView: () => tX })
    var s = i("ABep"),
      n = i("QosV"),
      r = i("zTeN"),
      a = i("DBCl"),
      l = i("zd8w"),
      o = i("v7qY"),
      c = i("Wf1j"),
      d = i("oyxz"),
      u = i("HZfM"),
      f = i("SPnB"),
      h = i("EOo5"),
      p = i("Ghh3"),
      m = i("g2p6"),
      b = i("Sm6l"),
      g = i("bVeK"),
      v = i("okCa"),
      y = i("PkPj"),
      x = i("Lx2J"),
      w = i("OWtl"),
      _ = i("OMIV"),
      j = i("WFY2"),
      C = i("iC84"),
      S = i("oR5x"),
      A = i("ASxG")
    let I = A.object({ shopGid: A.string().min(1).max(128), shopDomain: A.string().min(1).max(76) }),
      k = A.object({
        website: A.url()
          .min(10)
          .max(2048)
          .refine((e) => {
            try {
              let t = new URL(e)
              return ("https:" === t.protocol || "http:" === t.protocol) && !t.username && !t.password
            } catch {
              return !1
            }
          }),
        shopify_shop_gid: A.string().min(1).max(128),
        myshopify_domain: A.string().min(1).max(76),
        shop_name: A.string().max(512).nullish(),
      }),
      P = A.object({
        shopifyCreationPrefill: A.object({ actorUserId: A.string(), actorAccountId: A.string(), prefill: k }),
      })
    function N(e, t, i) {
      let s = P.safeParse(e).data?.shopifyCreationPrefill
      return null != s && null != t && null != i && s.actorAccountId === t && s.actorUserId === i ? s.prefill : void 0
    }
    var D = i("ISnH"),
      R = i("yGRq"),
      E = i("xywu"),
      M = i("JNtf"),
      T = i("mUDD"),
      W = i("HOLv"),
      O = i("zJJi"),
      F = i("AVh7")
    function L(e) {
      let t,
        i,
        r,
        a,
        l,
        o,
        c,
        u,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        x,
        w,
        _,
        j = (0, n.c)(31),
        { creationEnabled: C, open: S, onClose: A, onContinue: I, onReturnFocus: k } = e,
        P = void 0 !== C && C
      ;(j[0] !== k
        ? ((t = {
            "aria-describedby": void 0,
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), k())
            },
          }),
          (j[0] = k),
          (j[1] = t))
        : (t = j[1]),
        j[2] !== A
          ? ((i = (e) => {
              e || A()
            }),
            (j[2] = A),
            (j[3] = i))
          : (i = j[3]),
        j[4] !== P || j[5] !== I
          ? ((r = (e) => {
              ;(e.preventDefault(), P && I())
            }),
            (j[4] = P),
            (j[5] = I),
            (j[6] = r))
          : (r = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsxs)("picture", {
              children: [
                (0, s.jsx)("source", { media: "(max-width: 639px)", srcSet: F }),
                (0, s.jsx)("img", { alt: "", className: "aspect-2/1 w-full object-cover", src: O }),
              ],
            })),
            (j[7] = a))
          : (a = j[7]),
        j[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(M.L3, {
              className: "text-center text-heading-md leading-7 font-semibold sm:text-heading-lg",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.creationOnboarding.addBusiness.title",
                defaultMessage: "Add your business to ChatGPT",
                description:
                  "Heading of the introduction shown when a business owner selects Create from business search in ChatGPT. Invites them to add their business to ChatGPT. This centered heading may wrap; no profile has been created yet.",
              }),
            })),
            (j[8] = l))
          : (l = j[8]),
        j[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(W.I, { asset: D.w, className: "shrink-0" })), (j[9] = o))
          : (o = j[9]),
        j[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.creationOnboarding.mentions.title",
                defaultMessage: "See how your business shows up",
                description:
                  "First benefit heading in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Refers to how their business is mentioned in ChatGPT conversations. Short heading with no placeholders.",
              }),
            })),
            (j[10] = c))
          : (c = j[10]),
        j[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, s.jsxs)("li", {
              className: "flex items-start gap-3",
              children: [
                o,
                (0, s.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                  children: [
                    c,
                    (0, s.jsx)("p", {
                      className: "text-secondary",
                      children: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creationOnboarding.mentions.description",
                        defaultMessage: "Track how often your business is mentioned in ChatGPT conversations.",
                        description:
                          "Supporting text for the first benefit in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Describes tracking mentions of their business in conversations, rather than profile views or clicks. Multiline body text with no placeholders.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (j[11] = u))
          : (u = j[11]),
        j[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(W.I, { asset: R.T, className: "shrink-0" })), (j[12] = f))
          : (f = j[12]),
        j[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, s.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.creationOnboarding.offerings.title",
                defaultMessage: "Show customers what you offer",
                description:
                  "Second benefit heading in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Invites owners to show customers their products and business information. Short heading with no placeholders.",
              }),
            })),
            (j[13] = h))
          : (h = j[13]),
        j[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsxs)("li", {
              className: "flex items-start gap-3",
              children: [
                f,
                (0, s.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                  children: [
                    h,
                    (0, s.jsx)("p", {
                      className: "text-secondary",
                      children: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creationOnboarding.offerings.description",
                        defaultMessage: "Share your latest products and keep your business info up to date.",
                        description:
                          "Supporting text for the second benefit in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Encourages owners to share current products and maintain accurate business information. Multiline body text with no placeholders.",
                      }),
                    }),
                  ],
                }),
              ],
            })),
            (j[14] = p))
          : (p = j[14]),
        j[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(W.I, { asset: E.G, className: "shrink-0" })), (j[15] = m))
          : (m = j[15]),
        j[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)("h3", {
              className: "font-medium sm:text-onboarding-label sm:font-semibold",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.creationOnboarding.agent.title",
                defaultMessage: "Help customers choose with confidence",
                description:
                  "Third benefit heading in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. Describes helping customers make informed choices about the business offerings. Short heading with no placeholders.",
              }),
            })),
            (j[16] = g))
          : (g = j[16]),
        j[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, s.jsxs)("div", {
              className: "flex flex-col gap-6 sm:gap-4",
              children: [
                l,
                (0, s.jsxs)("ul", {
                  className: "flex flex-col gap-4",
                  children: [
                    u,
                    p,
                    (0, s.jsxs)("li", {
                      className: "flex items-start gap-3",
                      children: [
                        m,
                        (0, s.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-0.5 text-base leading-5.25",
                          children: [
                            g,
                            (0, s.jsx)("p", {
                              className: "text-secondary",
                              children: (0, s.jsx)(d.A, {
                                id: "businessProfiles.creationOnboarding.agent.description",
                                defaultMessage: "Build your business agent to answer questions about what you offer.",
                                description:
                                  "Supporting text for the third benefit in the business profile creation introduction, shown after an owner selects Create in ChatGPT business search. A business agent is an AI assistant that answers customer questions about the business offerings. Multiline body text with no placeholders.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (j[17] = v))
          : (v = j[17]))
      let N = !P
      return (
        j[18] !== P
          ? ((y = P
              ? (0, s.jsx)(d.A, {
                  id: "businessProfiles.creationOnboarding.continue.label",
                  defaultMessage: "Get started",
                  description:
                    "Primary button in ChatGPT's business profile creation introduction. Starts a draft so the owner can enter business details. Does not create or verify a business. Short action label with no placeholders.",
                })
              : (0, s.jsx)(d.A, {
                  id: "businessProfiles.creationOnboarding.comingSoon.label",
                  defaultMessage: "Coming soon",
                  description:
                    "Disabled action in the business profile creation introduction when the creation pilot is not available to this owner.",
                })),
            (j[18] = P),
            (j[19] = y))
          : (y = j[19]),
        j[20] !== N || j[21] !== y
          ? ((x = (0, s.jsxs)("div", {
              className: "flex flex-col text-default select-none",
              children: [
                a,
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-6 p-6 sm:px-8 sm:pt-4 sm:pb-10",
                  children: [
                    v,
                    (0, s.jsx)(b.$, {
                      className: "w-full",
                      disabled: N,
                      type: "submit",
                      size: "formAction",
                      color: "primary",
                      children: y,
                    }),
                  ],
                }),
              ],
            })),
            (j[20] = N),
            (j[21] = y),
            (j[22] = x))
          : (x = j[22]),
        j[23] !== x || j[24] !== r
          ? ((w = (0, s.jsx)(T.R4, { as: "form", size: "viewport", variant: "chatgpt", onSubmit: r, children: x })),
            (j[23] = x),
            (j[24] = r),
            (j[25] = w))
          : (w = j[25]),
        j[26] !== S || j[27] !== w || j[28] !== t || j[29] !== i
          ? ((_ = (0, s.jsx)(M.lG, {
              open: S,
              size: "responsiveSheet",
              variant: "promotional",
              closeButtonSize: "large",
              contentProps: t,
              onOpenChange: i,
              children: w,
            })),
            (j[26] = S),
            (j[27] = w),
            (j[28] = t),
            (j[29] = i),
            (j[30] = _))
          : (_ = j[30]),
        _
      )
    }
    var U = i("OAFn"),
      q = i("Fo5J"),
      $ = i("v7Fs"),
      B = i("cteK")
    function G(e, t) {
      if (e?.shopify_available !== !0 || !e.myshopify_domain) return null
      try {
        return new URL(e.website).href === new URL(t).href ? e : null
      } catch {
        return null
      }
    }
    var z = i("iJY0")
    let V = (0, z.a)({
        name: "multicolor-shopping-bag-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
          visualBounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#DEC5FF",
              bounds: { x: 2.882813, y: 6, width: 18.234375, height: 16 },
              wideGamut: "color(display-p3 0.8706 0.7725 1.0000)",
            },
            {
              role: "fixed",
              color: "#A25BFF",
              bounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
              wideGamut: "color(display-p3 0.6353 0.3569 1.0000)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.882813, y: 2, width: 18.234375, height: 20 },
          center: { x: 12.000001, y: 12 },
          insets: { top: 2, right: 2.882812, bottom: 2, left: 2.882813 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12.000001, y: 12 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2754 6C16.7048 6.00008 17.0805 6.00176 17.3965 6.02637C17.7612 6.05479 18.1233 6.11829 18.4785 6.28516C19.0123 6.53598 19.4604 6.93833 19.7666 7.44238C19.9704 7.77783 20.0716 8.13151 20.1387 8.49121C20.2035 8.83867 20.2483 9.2632 20.3008 9.75293L20.9248 15.582C21.0215 16.4841 21.102 17.2232 21.1152 17.8242C21.1287 18.4357 21.0771 19.0041 20.8506 19.5449C20.5018 20.3778 19.8818 21.0684 19.0908 21.5039C18.5772 21.7867 18.0177 21.8984 17.4082 21.9502C16.8091 22.0011 16.0656 22 15.1582 22H8.84181C7.9344 22 7.19088 22.0011 6.59181 21.9502C5.98237 21.8984 5.42283 21.7867 4.90919 21.5039C4.11821 21.0683 3.49822 20.3778 3.14943 19.5449C2.92298 19.0041 2.87137 18.4357 2.88478 17.8242C2.89798 17.2232 2.97856 16.4841 3.07521 15.582L3.69923 9.75293C3.7517 9.2632 3.79653 8.83866 3.86134 8.49121C3.92846 8.13152 4.02961 7.77783 4.23341 7.44238C4.53965 6.93833 4.98771 6.53598 5.5215 6.28516C5.87668 6.11828 6.23881 6.05479 6.60353 6.02637C6.87038 6.00558 7.1799 6.0019 7.52833 6.00098L16.2754 6.00195V6Z" fill="#DEC5FF"/> <path d="M12 2C14.2091 2 16 3.79086 16 6V8C16 8.55228 15.5523 9 15 9C14.4477 8.99999 14 8.55228 14 8H13.9961V6H14C14 5.97512 13.997 5.95044 13.9961 5.92578V5.90625C13.9471 4.84526 13.0731 4 12 4C10.9269 4.00001 10.0539 4.84527 10.0049 5.90625H10.0029V5.94434C10.0024 5.96285 10 5.98136 10 6H10.0029V8H10C10 8.55228 9.55228 9 9 9C8.44773 8.99999 8 8.55228 8 8V6C8 3.79087 9.79087 2.00001 12 2Z" fill="#A25BFF"/> <path d="M21.0664 17C21.0916 17.2999 21.1098 17.574 21.1152 17.8242C21.1287 18.4357 21.0771 19.0041 20.8506 19.5449C20.5018 20.3778 19.8818 21.0684 19.0908 21.5039C18.5772 21.7867 18.0177 21.8984 17.4082 21.9502C16.8091 22.0011 16.0656 22 15.1582 22H8.84181C7.93441 22 7.19088 22.0011 6.59181 21.9502C5.98238 21.8984 5.42283 21.7867 4.90919 21.5039C4.11822 21.0683 3.49822 20.3778 3.14943 19.5449C2.92298 19.0041 2.87137 18.4357 2.88478 17.8242C2.89028 17.574 2.90845 17.2999 2.93361 17H21.0664Z" fill="#A25BFF"/>',
      }),
      K = (0, z.a)({
        name: "multicolor-store-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.039307, y: 2, width: 19.847412, height: 19 },
          visualBounds: { x: 2.039307, y: 2, width: 19.847412, height: 19 },
        },
        paint: {
          kind: "multicolor",
          layers: [
            {
              role: "fixed",
              color: "#DFDFDF",
              bounds: { x: 3.001953, y: 7.557617, width: 18, height: 13.442383 },
              wideGamut: "color(display-p3 0.8733 0.8733 0.8733)",
            },
            {
              role: "fixed",
              color: "#E8465A",
              bounds: { x: 2.039307, y: 2, width: 19.847412, height: 9.46582 },
              wideGamut: "color(display-p3 0.9098 0.2745 0.3529)",
            },
            {
              role: "fixed",
              color: "#FF94A6",
              bounds: { x: 7.939453, y: 2, width: 8.125977, height: 9.46582 },
              wideGamut: "color(display-p3 1.0000 0.5804 0.6510)",
            },
            {
              role: "fixed",
              color: "#04BB9F",
              bounds: { x: 9.001953, y: 13.5, width: 6, height: 6 },
              wideGamut: "color(display-p3 0.0157 0.7333 0.6235)",
            },
          ],
        },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.039307, y: 2, width: 19.847412, height: 19 },
          center: { x: 11.963013, y: 11.5 },
          insets: { top: 2, right: 2.113281, bottom: 3, left: 2.039307 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 11.963013, y: 11.5 } },
        },
        capabilities: ["icon"],
        body: '<path d="M20.002 7.55762C20.5542 7.55762 21.002 8.00533 21.002 8.55762V17.2002C21.0018 19.2986 19.3006 20.9999 17.2021 21H6.80176C4.70329 20.9999 3.00215 19.2986 3.00195 17.2002V8.55762C3.00195 8.00533 3.44967 7.55762 4.00195 7.55762H20.002Z" fill="#DFDFDF"/> <path d="M18.0623 2C19.3521 2 20.4975 2.82482 20.907 4.04785L21.6834 6.36621C22.523 8.87343 20.6575 11.4658 18.0135 11.4658C16.0745 11.4658 14.435 10.0312 14.1776 8.10938L13.5106 3.13281C13.4723 2.84717 13.5592 2.55877 13.7488 2.3418C13.9387 2.1248 14.2134 2.00002 14.5018 2H18.0623Z" fill="#E8465A"/> <path d="M9.50205 2C9.79028 2.00011 10.0652 2.12487 10.255 2.3418C10.4446 2.55875 10.5315 2.8472 10.4933 3.13281L9.81064 8.22949C9.55603 10.1305 7.85307 11.4654 5.94443 11.4658C3.40692 11.4658 1.3989 9.11929 2.22958 6.6377L3.11533 3.99219C3.52435 2.77088 4.70562 2 5.97275 2H9.50205Z" fill="#E8465A"/> <path d="M16.0288 6.86426C16.3551 9.30024 14.4601 11.4656 12.0025 11.4658C9.54455 11.4658 7.64979 9.30041 7.97609 6.86426L8.62746 2H15.3775L16.0288 6.86426Z" fill="#FF94A6"/> <path d="M9.00195 16.5C9.00195 14.8431 10.3451 13.5 12.002 13.5C13.6588 13.5 15.002 14.8431 15.002 16.5V19.5H9.00195V16.5Z" fill="#04BB9F"/>',
      })
    var J = i("irkb"),
      H = i("D7Ms"),
      Q = i("fxCc"),
      Z = i("T0Rc"),
      X = i("pmIL"),
      Y = i("ZEx5"),
      ee = i("OHD8"),
      et = i("eShZ"),
      ei = i("NeEy"),
      es = i("kIbj"),
      en = i("T70E"),
      er = i("py8O"),
      ea = i("nBtg"),
      el = i("B1u2"),
      eo = i("oFFd"),
      ec = i("ZtSy")
    function ed(e) {
      let t,
        i,
        r,
        a,
        l,
        o,
        c = (0, n.c)(10),
        { inDialog: u } = e,
        f = void 0 !== u && u,
        h = f ? "external-browser" : void 0
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.jsx)(d.A, {
            id: "businessProfiles.legal.termsOfUse",
            defaultMessage: "Terms of use",
            description:
              "Footer link to OpenAI's terms of use on the business profile search page and business-type selection screen",
          })),
          (c[0] = t))
        : (t = c[0]),
        c[1] !== h
          ? ((i = (0, s.jsx)(ec.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/terms-of-use/",
              initiator: "open_in_browser_bridge",
              openTarget: h,
              underline: "always",
              children: t,
            })),
            (c[1] = h),
            (c[2] = i))
          : (i = c[2]),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)("span", { "aria-hidden": "true", className: "text-tertiary before:content-['·']" })),
            (c[3] = r))
          : (r = c[3]))
      let p = f ? "external-browser" : void 0
      return (
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(d.A, {
              id: "businessProfiles.legal.privacyPolicy",
              defaultMessage: "Privacy policy",
              description:
                "Footer link to OpenAI's privacy policy on the business profile search page and business-type selection screen",
            })),
            (c[4] = a))
          : (a = c[4]),
        c[5] !== p
          ? ((l = (0, s.jsx)(ec.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/privacy-policy/",
              initiator: "open_in_browser_bridge",
              openTarget: p,
              underline: "always",
              children: a,
            })),
            (c[5] = p),
            (c[6] = l))
          : (l = c[6]),
        c[7] !== i || c[8] !== l
          ? ((o = (0, s.jsxs)("footer", {
              className:
                "flex shrink-0 flex-wrap items-center justify-center gap-2 text-sm leading-5.5 text-secondary select-none",
              children: [i, r, l],
            })),
            (c[7] = i),
            (c[8] = l),
            (c[9] = o))
          : (o = c[9]),
        o
      )
    }
    var eu = i("cvkI"),
      ef = i("RER9"),
      eh = i("Md9P"),
      ep = i("mQkG"),
      em = i("AW7I"),
      eb = i("fi0l"),
      eg = i("nhlW"),
      ev = i("Cr32"),
      ey = i("Nx5n"),
      ex = i("QS9J"),
      ew = i("CU6j"),
      e_ = i("xNuN"),
      ej = i("XcNx"),
      eC = i("T1PX"),
      eS = i("UF7O"),
      eA = i("UvKE"),
      eI = i("Ls9F"),
      ek = i("uAf3"),
      eP = i("l4He")
    function eN(e) {
      if (null != e) return (0, ex.E)(e, e_.i)
    }
    function eD(e) {
      let t,
        i,
        r,
        o,
        u,
        f,
        m,
        b,
        g,
        v,
        y,
        x,
        w,
        _,
        j,
        C,
        S,
        A,
        I,
        k,
        P = (0, n.c)(68),
        {
          accountId: N,
          profiles: D,
          preparedProfile: R,
          places: E,
          matchedAddress: T,
          selectionQueryKey: W,
          onClose: O,
          onCloseAfterApproval: F,
          onContinueCreation: L,
          onClaimApproved: U,
        } = e,
        q = (0, c.A)(),
        $ = (0, eC.I)(),
        B = (0, h.As)(),
        G = [...D.map(eE), ...E.map(eR)].slice(0, 5),
        z = 1 === G.length ? G[0] : void 0,
        [V, K] = (0, l.useState)(G[0]?.id ?? ""),
        [J, X] = (0, l.useState)()
      P[0] !== N || P[1] !== B.userId || P[2] !== J || P[3] !== q.locale || P[4] !== V
        ? ((t = ["creation-chooser-claim", N, B.userId, q.locale, V, J]),
          (P[0] = N),
          (P[1] = B.userId),
          (P[2] = J),
          (P[3] = q.locale),
          (P[4] = V),
          (P[5] = t))
        : (t = P[5])
      let Y = t,
        { isPending: ee } = (0, Q.E)({ queries: J ? [{ queryKey: Y, queryFn: H.hT, gcTime: 0 }] : [] })[0] ?? {},
        ei = G.find((e) => e.id === V),
        es = ei?.profile,
        en = ei?.place,
        {
          data: er,
          error: ea,
          isLoading: el,
        } = (0, Z.I)({
          queryKey: ["business-profile-creation-match-details", N, B.userId, ei?.id, q.locale],
          enabled:
            (null != en ||
              (es?.business_type === "local" && (null == W || "dispute" === es.ownership.available_action))) &&
            B.accountId === N &&
            null != B.userId,
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
          queryFn: async (e) => {
            let { signal: t } = e
            if (null != en)
              return (0, eI.KQ)(en.entity_lookup_id, {
                accountId: N,
                locale: q.locale,
                signal: AbortSignal.any([t, AbortSignal.timeout(3e3)]),
              })
            if (null == es) return null
            let i = await p.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
              additionalHeaders: { "ChatGPT-Account-ID": N, [a.zBc]: N, "x-openai-use-sheep": "1" },
              signal: t,
              requestBody: { business_profile_id: es.business_profile_id },
              expectedErrorStatuses: [400, 403, 404, 409, 422],
            })
            return (t.throwIfAborted(),
            i.business_profile_id === es.business_profile_id &&
              i.entity_lookup_id?.startsWith("lbe1_") &&
              i.ownership_state_enabled &&
              i.ownership?.available_action === es.ownership.available_action &&
              i.ownership?.current_request == null)
              ? (0, eI.KQ)(i.entity_lookup_id, { accountId: N, locale: q.locale, signal: t })
              : null
          },
        }),
        eo = null
      if ((null != W || null != J) && null != ei) {
        let e
        ;(P[6] !== J || P[7] !== X
          ? ((e = null == J ? void 0 : () => X(void 0)), (P[6] = J), (P[7] = X), (P[8] = e))
          : (e = P[8]),
          (eo = (0, s.jsx)(ep.CanonicalProfileClaim, {
            accountId: N,
            telemetryEntryPoint: "creation_duplicate",
            ...(ei.place ? { place: ei.place } : { profileId: ei.profile.business_profile_id, preparedProfile: R }),
            onCreationClaimUnavailable: null != ei.place ? (e) => L("unavailable", e) : void 0,
            onCreationClaimApproved: U,
            onCloseAfterApproval: F,
            onBackToMatchPicker: e,
            allowCreationDispute: !0,
            selectionQueryKey: W ?? Y,
            showLoadingDialog: !1,
            waitingForPlaceDetails: null != en && el,
            publicDetails: er ?? void 0,
            readRegisteredPlace:
              null != en && ea instanceof et.fk && 404 === ea.status
                ? (e) => (0, eI.KQ)(en.entity_lookup_id, { accountId: N, locale: q.locale, signal: e })
                : void 0,
            onClose: O,
          })))
      }
      let ec = es ? (0, eS.s)(es, er ?? void 0) : en && (0, eS.q)(en, er ?? void 0)
      ;(P[9] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, ej.x)({ browser: !0 })), (P[9] = i)) : (i = P[9]),
        P[10] !== O ? ((r = () => O()), (P[10] = O), (P[11] = r)) : (r = P[11]),
        P[12] !== q ? ((o = q.formatMessage(eP.W.chatNavigation)), (P[12] = q), (P[13] = o)) : (o = P[13]),
        P[14] !== O ? ((u = () => O()), (P[14] = O), (P[15] = u)) : (u = P[15]),
        P[16] !== ec || P[17] !== er || P[18] !== T || P[19] !== es?.is_verified
          ? ((f =
              ec &&
              (0, s.jsx)(eA.P, {
                business: ec,
                children: (0, s.jsx)(ep.g, {
                  business: { ...ec, address: ec.address || er?.address || T },
                  details: er ?? void 0,
                  claimLayout: !0,
                  verified: es?.is_verified ?? !1,
                }),
              })),
            (P[16] = ec),
            (P[17] = er),
            (P[18] = T),
            (P[19] = es?.is_verified),
            (P[20] = f))
          : (f = P[20]))
      let ed = $ ? void 0 : eN
      ;(P[21] !== J || P[22] !== ei || P[23] !== V || P[24] !== L || P[25] !== X
        ? ((m = (e) => {
            ;(e.preventDefault(), null == J && ("no" === V ? L("declined") : null != ei && X(crypto.randomUUID())))
          }),
          (P[21] = J),
          (P[22] = ei),
          (P[23] = V),
          (P[24] = L),
          (P[25] = X),
          (P[26] = m))
        : (m = P[26]),
        P[27] !== z
          ? ((b = (0, s.jsx)(M.L3, {
              className: "text-heading-app leading-tight font-normal",
              children: z
                ? (0, s.jsx)(d.A, {
                    id: "businessProfiles.creation.match.choiceTitle",
                    defaultMessage: "Is this your business?",
                    description:
                      "Optional existing-profile suggestion during business creation. The creator can claim this profile or continue creating a different business.",
                  })
                : (0, s.jsx)(d.A, {
                    id: "businessProfiles.creation.match.addressChoices",
                    defaultMessage: "Is one of these businesses yours?",
                    description: "Asks the creator to choose from businesses found at the same address.",
                  }),
            })),
            (P[27] = z),
            (P[28] = b))
          : (b = P[28]))
      let eu = null != J
      ;(P[29] !== q
        ? ((g = q.formatMessage({
            id: "businessProfiles.creation.match.choiceLabel",
            defaultMessage: "Existing business",
            description: "Accessible label for the optional Yes or No existing-business choice during creation.",
          })),
          (P[29] = q),
          (P[30] = g))
        : (g = P[30]),
        P[31] !== T || P[32] !== G || P[33] !== z
          ? ((v = z
              ? (0, s.jsx)(ew.z.Item, {
                  value: z.id,
                  block: !0,
                  children: (0, s.jsxs)("span", {
                    className: "flex min-w-0 flex-col text-base",
                    children: [
                      (0, s.jsx)(d.A, {
                        id: "businessProfiles.creation.match.yes",
                        defaultMessage: "Yes, this is my business",
                        description:
                          "Selects the suggested existing business for its ordinary claim verification flow. Does not grant ownership.",
                      }),
                      (0, s.jsx)("span", {
                        className: "text-sm text-secondary",
                        children:
                          z.profile?.ownership.available_action === "dispute"
                            ? (0, s.jsx)(d.A, {
                                id: "businessProfiles.creation.match.disputeDescription",
                                defaultMessage: "Request access to this claimed business",
                                description: "Explains how to proceed when the matched business has an owner.",
                              })
                            : (0, s.jsx)(d.A, {
                                id: "businessProfiles.creation.match.yesDescription",
                                defaultMessage: "Switch to claiming this existing business",
                                description:
                                  "Explains the Yes option in the optional existing-business suggestion. Claim verification is still required.",
                              }),
                      }),
                    ],
                  }),
                })
              : G.map((e) =>
                  (0, s.jsx)(
                    ew.z.Item,
                    {
                      value: e.id,
                      block: !0,
                      children: (0, s.jsxs)("span", {
                        className: "flex min-w-0 flex-col text-base",
                        children: [
                          (0, s.jsx)("bdi", { children: e.name }),
                          (0, s.jsx)("bdi", { className: "text-sm text-secondary", children: e.address || T }),
                        ],
                      }),
                    },
                    e.id,
                  ),
                )),
            (P[31] = T),
            (P[32] = G),
            (P[33] = z),
            (P[34] = v))
          : (v = P[34]),
        P[35] !== z
          ? ((y = z
              ? (0, s.jsx)(d.A, {
                  id: "businessProfiles.creation.match.no",
                  defaultMessage: "No, this isn’t my business",
                  description:
                    "Declines the optional existing-business suggestion and keeps the entered creation details.",
                })
              : (0, s.jsx)(d.A, {
                  id: "businessProfiles.creation.match.none",
                  defaultMessage: "None of these are mine",
                  description: "Continues creation without choosing any listed business.",
                })),
            (P[35] = z),
            (P[36] = y))
          : (y = P[36]),
        P[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, s.jsx)("span", {
              className: "text-sm text-secondary",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.creation.match.noDescription",
                defaultMessage: "Continue manually creating a new business",
                description:
                  "Explains that choosing No continues the ordinary business creation flow with the saved details.",
              }),
            })),
            (P[37] = x))
          : (x = P[37]),
        P[38] !== y
          ? ((w = (0, s.jsx)(ew.z.Item, {
              value: "no",
              block: !0,
              children: (0, s.jsxs)("span", { className: "flex min-w-0 flex-col text-base", children: [y, x] }),
            })),
            (P[38] = y),
            (P[39] = w))
          : (w = P[39]),
        P[40] !== V || P[41] !== K || P[42] !== eu || P[43] !== g || P[44] !== v || P[45] !== w
          ? ((_ = (0, s.jsxs)(ew.z, {
              value: V,
              onChange: K,
              disabled: eu,
              variant: "list",
              className: "rounded-2xl border border-default",
              "aria-label": g,
              children: [v, w],
            })),
            (P[40] = V),
            (P[41] = K),
            (P[42] = eu),
            (P[43] = g),
            (P[44] = v),
            (P[45] = w),
            (P[46] = _))
          : (_ = P[46]))
      let ef = !V,
        eh = null != J
      ;(P[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, s.jsx)(d.A, {
            id: "businessProfiles.creation.match.continue",
            defaultMessage: "Continue",
            description:
              "Continues with the selected optional existing-business choice. Yes opens Claim verification; No continues creation.",
          })),
          (P[47] = j))
        : (j = P[47]),
        P[48] !== ef || P[49] !== eh
          ? ((C = (0, s.jsx)(eg.C, {
              type: "submit",
              disabled: ef,
              pending: eh,
              disabledAppearance: "unchanged",
              size: "formAction",
              radius: "full",
              className: "self-start",
              children: j,
            })),
            (P[48] = ef),
            (P[49] = eh),
            (P[50] = C))
          : (C = P[50]),
        P[51] !== b || P[52] !== _ || P[53] !== C || P[54] !== ed || P[55] !== m
          ? ((S = (0, s.jsxs)("form", {
              ref: ed,
              className: "flex w-full max-w-125 flex-col gap-6",
              onSubmit: m,
              children: [b, _, C],
            })),
            (P[51] = b),
            (P[52] = _),
            (P[53] = C),
            (P[54] = ed),
            (P[55] = m),
            (P[56] = S))
          : (S = P[56]),
        P[57] !== S || P[58] !== o || P[59] !== u || P[60] !== f
          ? ((A = (0, s.jsx)("div", {
              className: "relative h-full overflow-y-auto bg-surface text-base text-default",
              children: (0, s.jsx)(ek.Y, {
                backLabel: o,
                onBack: u,
                busy: !1,
                contentFirstOnMobile: !0,
                preview: f,
                content: S,
              }),
            })),
            (P[57] = S),
            (P[58] = o),
            (P[59] = u),
            (P[60] = f),
            (P[61] = A))
          : (A = P[61]),
        P[62] !== A || P[63] !== r
          ? ((I = (0, s.jsx)(ek.d, { modal: !i, personaActive: !1, closeDisabled: !1, onClose: r, children: A })),
            (P[62] = A),
            (P[63] = r),
            (P[64] = I))
          : (I = P[64]))
      let em = I,
        eb = null == eo || ee ? em : null
      return (
        P[65] !== eo || P[66] !== eb
          ? ((k = (0, s.jsxs)(s.Fragment, { children: [eb, eo] })), (P[65] = eo), (P[66] = eb), (P[67] = k))
          : (k = P[67]),
        k
      )
    }
    function eR(e) {
      return { id: e.entity_lookup_id, name: e.display_name, place: e }
    }
    function eE(e) {
      return { id: e.business_profile_id, name: e.display_name, address: e.display_address, profile: e }
    }
    var eM = i("Ga5b"),
      eT = i("on57"),
      eW = i("JB4k"),
      eO = i("Qsgo"),
      eF = i("UeZw"),
      eL = i("pvU7")
    function eU(e) {
      let t,
        i,
        r,
        a,
        o,
        u,
        f,
        h,
        p,
        m,
        v,
        y,
        x,
        w = (0, n.c)(64),
        {
          manager: _,
          stepKey: j,
          title: C,
          description: A,
          leading: I,
          header: k,
          children: P,
          footer: N,
          onCancel: D,
          cancelButtonRef: R,
          showPreview: E,
          busy: T,
          isDraft: W,
          personaActive: O,
          pendingVerification: F,
          showHeading: L,
          outcome: U,
          contentLayout: q,
        } = e,
        $ = void 0 !== T && T,
        B = void 0 === W || W,
        G = void 0 !== O && O,
        z = void 0 !== F && F,
        V = void 0 === L || L,
        K = void 0 !== U && U,
        J = void 0 === q ? "form" : q,
        H = "complete" === j,
        Q = (0, c.A)(),
        Z = "loading" === j,
        X = "phone" === j && _?.profile.profile_type === "local_business"
      w[0] !== Q || w[1] !== Z
        ? ((t = Q.formatMessage(Z ? eP.W.backToChat : eP.W.close)), (w[0] = Q), (w[1] = Z), (w[2] = t))
        : (t = w[2])
      let Y = t,
        ee = (void 0 === E || E) && null != _,
        [et, ei] = (0, l.useState)(!1),
        [es, en] = (0, l.useState)(null),
        er = (0, l.useRef)(null),
        ea = (0, eC.I)()
      ;(w[3] !== es || w[4] !== ea || w[5] !== j
        ? ((i = () => {
            if (null != es && "loading" !== j && !ea && null != er.current) return (0, ex.E)(er.current, e_.i)
          }),
          (w[3] = es),
          (w[4] = ea),
          (w[5] = j),
          (w[6] = i))
        : (i = w[6]),
        w[7] !== es || w[8] !== K || w[9] !== z || w[10] !== ea || w[11] !== j
          ? ((r = [es, K, z, ea, j]), (w[7] = es), (w[8] = K), (w[9] = z), (w[10] = ea), (w[11] = j), (w[12] = r))
          : (r = w[12]),
        (0, l.useLayoutEffect)(i, r))
      let el = (0, l.useRef)(null),
        eo = (0, l.useRef)(null)
      ;(w[13] !== j
        ? ((a = () => {
            ;("code" !== j && (el.current ?? eo.current?.querySelector("h1, h2"))?.focus({ preventScroll: !0 }),
              null != eo.current && (eo.current.scrollTop = 0))
          }),
          (w[13] = j),
          (w[14] = a))
        : (a = w[14]),
        w[15] !== es || w[16] !== K || w[17] !== z || w[18] !== j
          ? ((o = [es, z, K, j]), (w[15] = es), (w[16] = K), (w[17] = z), (w[18] = j), (w[19] = o))
          : (o = w[19]),
        (0, l.useLayoutEffect)(a, o),
        w[20] !== es
          ? ((u = () => {
              let e = es?.closest('[role="dialog"]')
              if (e instanceof HTMLElement) return (0, eO.$)(e)
            }),
            (f = [es]),
            (w[20] = es),
            (w[21] = u),
            (w[22] = f))
          : ((u = w[21]), (f = w[22])),
        (0, l.useLayoutEffect)(u, f),
        w[23] !== B || w[24] !== _
          ? ((h = function (e) {
              return null == _
                ? null
                : (0, s.jsx)(eF.G, { manager: _, isDraft: B, inDialog: void 0 !== e && e, isCreationPreview: !0 })
            }),
            (w[23] = B),
            (w[24] = _),
            (w[25] = h))
          : (h = w[25]))
      let ec = h
      w[26] !== $
        ? ((p = {
            onEscapeKeyDown: (e) => {
              $ && e.preventDefault()
            },
            onOpenAutoFocus: e$,
            onCloseAutoFocus: eq,
          }),
          (w[26] = $),
          (w[27] = p))
        : (p = w[27])
      let ed = K ? "bg-surface" : "bg-surface-card",
        eu = H && eL.A.confirmationSky
      return (
        w[28] !== ed || w[29] !== eu
          ? ((m = (0, eT.A)(
              "@container/business-creation flex h-full min-h-0 min-w-0 flex-1 overflow-hidden text-default",
              ed,
              eu,
            )),
            (w[28] = ed),
            (w[29] = eu),
            (w[30] = m))
          : (m = w[30]),
        w[31] !== $ ||
        w[32] !== R ||
        w[33] !== P ||
        w[34] !== H ||
        w[35] !== J ||
        w[36] !== A ||
        w[37] !== N ||
        w[38] !== k ||
        w[39] !== Q ||
        w[40] !== B ||
        w[41] !== Z ||
        w[42] !== I ||
        w[43] !== X ||
        w[44] !== Y ||
        w[45] !== D ||
        w[46] !== K ||
        w[47] !== z ||
        w[48] !== et ||
        w[49] !== ec ||
        w[50] !== V ||
        w[51] !== ee ||
        w[52] !== j ||
        w[53] !== C
          ? ((v =
              z || K
                ? (0, s.jsx)("div", {
                    ref: eo,
                    className: "relative h-full w-full overflow-y-auto text-base",
                    children: (0, s.jsx)(ek.Y, {
                      mobileConfirmation: H,
                      backButtonRef: R,
                      backLabel: Q.formatMessage(eP.W.close),
                      onBack: D,
                      busy: $,
                      previewLabel: Q.formatMessage(eP.W.preview),
                      preview: (0, s.jsx)("div", {
                        className: (0, eT.A)(
                          "w-full max-w-sm overflow-hidden rounded-3xl",
                          K ? "bg-surface" : "bg-surface-card",
                        ),
                        children: ec(),
                      }),
                      content: (0, s.jsxs)("div", {
                        className: (0, eT.A)(
                          "flex w-full flex-col gap-6",
                          K && null == k ? "max-w-125" : "max-w-lg",
                          H && "max-md:min-h-[calc(100dvh-7rem)] max-md:pt-[clamp(1rem,12vh,8rem)]",
                        ),
                        children: [
                          k ??
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                null != I ? (0, s.jsx)(eW.k, { order: 0, children: I }) : null,
                                V &&
                                  (0, s.jsxs)(eW.k, {
                                    className: "flex flex-col gap-1.5",
                                    order: 0,
                                    children: [
                                      (0, s.jsx)(M.L3, {
                                        asChild: !0,
                                        children: (0, s.jsx)("h1", {
                                          ref: el,
                                          tabIndex: -1,
                                          className: "text-heading-app leading-tight font-normal outline-none",
                                          children: C,
                                        }),
                                      }),
                                      A,
                                    ],
                                  }),
                              ],
                            }),
                          P,
                        ],
                      }),
                    }),
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        ref: eo,
                        className: "relative flex min-w-0 flex-1 flex-col overflow-y-auto",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex items-center justify-between p-3 sm:absolute sm:inset-x-0 sm:top-0",
                            children: [
                              (0, s.jsx)(b.$, {
                                ref: R,
                                type: "button",
                                disabled: $,
                                color: "ghostActive",
                                size: "dialogGhost",
                                className: "gap-x-1 font-normal",
                                "aria-label": X ? void 0 : Y,
                                "aria-description": X ? Y : void 0,
                                onClick: D,
                                children: (0, s.jsx)(S.M, { variant: "createOrClaim" }),
                              }),
                              ee
                                ? (0, s.jsx)(M.lG, {
                                    open: et,
                                    onOpenChange: ei,
                                    triggerContent: (0, s.jsx)(b.$, {
                                      type: "button",
                                      color: "ghostActive",
                                      size: "dialogGhost",
                                      className: "@5xl/business-creation:hidden",
                                      "aria-label": Q.formatMessage(eP.W.preview),
                                      children: (0, s.jsx)(g.Q1h, {}),
                                    }),
                                    showDialogClose: !1,
                                    unstyledContent: !0,
                                    viewportSized: !0,
                                    contentProps: { "aria-describedby": void 0 },
                                    children: (0, s.jsxs)("div", {
                                      className: "flex h-full min-h-0 flex-col bg-surface-card text-default",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className: "flex items-center gap-3 p-3 select-none",
                                          children: [
                                            (0, s.jsx)(b.$, {
                                              type: "button",
                                              color: "ghostActive",
                                              size: "dialogGhost",
                                              className: "gap-x-1 font-normal",
                                              onClick: () => ei(!1),
                                              children: (0, s.jsx)(S.M, { variant: "createOrClaim" }),
                                            }),
                                            (0, s.jsx)(M.L3, {
                                              className: "text-base font-medium",
                                              children: (0, s.jsx)(d.A, { ...eP.W.preview }),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "min-h-0 flex-1 overflow-y-auto",
                                          children: ec(!0),
                                        }),
                                      ],
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            ref: er,
                            className: Z
                              ? "mx-auto w-full max-w-3xl px-5 py-8 sm:pt-16"
                              : (0, eT.A)(
                                  "mx-auto flex w-full max-w-lg flex-1 flex-col px-6 pt-20 pb-8 sm:my-auto sm:max-w-xl sm:flex-none sm:px-8 sm:py-16",
                                  "summary" === J ? "gap-8" : "gap-6",
                                  !B && "text-center",
                                ),
                            children: [
                              I,
                              V &&
                                (0, s.jsxs)("div", {
                                  className: (0, eT.A)(
                                    Z ? "sr-only" : "flex flex-col",
                                    "summary" === J ? "gap-3" : "gap-1.5",
                                  ),
                                  children: [
                                    (0, s.jsx)(M.L3, {
                                      asChild: !0,
                                      children: (0, s.jsx)("h1", {
                                        ref: el,
                                        tabIndex: -1,
                                        className: (0, eT.A)(
                                          "text-heading-lg leading-7 font-normal outline-none sm:text-heading-app sm:leading-8.5",
                                          "category" === j ? "wrap-anywhere" : "text-balance",
                                        ),
                                        children: C,
                                      }),
                                    }),
                                    A,
                                  ],
                                }),
                              P,
                            ],
                          }),
                          null != N ? (0, s.jsx)("div", { className: "shrink-0 px-6 pb-6", children: N }) : null,
                        ],
                      }),
                      ee
                        ? (0, s.jsx)("aside", {
                            className: (0, eT.A)(
                              "hidden min-h-0 overflow-y-auto @5xl/business-creation:flex",
                              B
                                ? "my-4 me-4 w-105 shrink-0 flex-col rounded-2xl border border-default bg-surface-card shadow-card"
                                : "w-1/2 shrink-0 items-center justify-center bg-surface-tertiary p-12",
                            ),
                            "aria-label": Q.formatMessage(eP.W.preview),
                            children: (0, s.jsx)("div", {
                              className: B ? void 0 : "w-full max-w-sm overflow-hidden rounded-2xl bg-surface-card",
                              children: ec(),
                            }),
                          })
                        : null,
                    ],
                  })),
            (w[31] = $),
            (w[32] = R),
            (w[33] = P),
            (w[34] = H),
            (w[35] = J),
            (w[36] = A),
            (w[37] = N),
            (w[38] = k),
            (w[39] = Q),
            (w[40] = B),
            (w[41] = Z),
            (w[42] = I),
            (w[43] = X),
            (w[44] = Y),
            (w[45] = D),
            (w[46] = K),
            (w[47] = z),
            (w[48] = et),
            (w[49] = ec),
            (w[50] = V),
            (w[51] = ee),
            (w[52] = j),
            (w[53] = C),
            (w[54] = v))
          : (v = w[54]),
        w[55] !== m || w[56] !== v
          ? ((y = (0, s.jsx)("main", { ref: en, className: m, children: v })), (w[55] = m), (w[56] = v), (w[57] = y))
          : (y = w[57]),
        w[58] !== $ || w[59] !== D || w[60] !== G || w[61] !== p || w[62] !== y
          ? ((x = (0, s.jsx)(ek.d, {
              modal: !1,
              personaActive: G,
              closeDisabled: $,
              onClose: D,
              contentProps: p,
              children: y,
            })),
            (w[58] = $),
            (w[59] = D),
            (w[60] = G),
            (w[61] = p),
            (w[62] = y),
            (w[63] = x))
          : (x = w[63]),
        x
      )
    }
    function eq(e) {
      return e.preventDefault()
    }
    function e$(e) {
      return e.preventDefault()
    }
    var eB = i("qHOU"),
      eG = i("IVLR"),
      ez = i("hXDn"),
      eV = i("SZCv"),
      eK = i.n(eV)
    function eJ(e) {
      return e?.session ?? e?.name_first_session ?? void 0
    }
    function eH(e, t) {
      if (null == e || ("pending" !== e.status && "expired" !== e.status)) return !1
      try {
        return new URL(e.website).href === new URL(t).href
      } catch {
        return !1
      }
    }
    function eQ(e, t) {
      let i = e?.shopify_verification,
        s = URL.parse(t)
      return i?.status === "pending" && null != s && URL.parse(i.website)?.href === s.href ? i : null
    }
    let eZ = A.object({
      stepOrderVersion: A.number().optional(),
      attemptKey: A.string().optional(),
      draft: A.object({
        name: A.string(),
        businessType: A.enum(["local_business", "ecommerce"]).nullable(),
        values: A.record(A.string(), A.string().nullable()),
        verifiedPhone: A.object({ phone: A.string(), verificationId: A.string() }).nullable().optional(),
        profileId: A.string().optional(),
        contactVerificationRequired: A.boolean().optional(),
        shopifyRouting: I.optional(),
      }),
      step: A.enum([
        "type",
        "website",
        "import",
        "category",
        "hours",
        "address",
        "phone",
        "delivery_method",
        "code",
        "delivery",
        "returns",
        "description",
        "review",
      ]).transform((e) => ("description" === e ? "category" : "delivery_method" === e || "code" === e ? "phone" : e)),
    }).transform(
      ({ stepOrderVersion: e, ...t }) => (
        null == e &&
          ("hours" === t.step ||
            (!1 !== t.draft.contactVerificationRequired && ("delivery" === t.step || "returns" === t.step))) &&
          (t.step = "phone"),
        t
      ),
    )
    function eX(e, t, i) {
      let s
      if (null == e) return !1
      if (
        ((s = "name" === t ? e.details.name : "business_type" === t ? e.details.business_type : e.details.values[t]),
        !e.accepted_fields.includes(t))
      )
        return (
          (["description", "website", "email"].includes(t) ||
            ("phone" === t && "ecommerce" === e.details.business_type)) &&
          !s?.trim() &&
          !i?.trim()
        )
      if ("phone" === t || "email" === t) return (0, q.Re)(t, s ?? "") === (0, q.Re)(t, i ?? "")
      if ("website" === t) {
        if (!s || !i) return !s && !i
        try {
          return new URL((0, q.DX)(s)).href === new URL((0, q.DX)(i)).href
        } catch {
          return !1
        }
      }
      if ("address" === t) {
        let e = ea.Tq.strict(),
          [t, n] = [s, i].map((t) => (0, ea.oR)(t ?? null, e))
        if (null != t && null != n)
          return (
            t.country_code === n.country_code &&
            ["line1", "line2", "city", "region", "postal_code"].every((e) => t[e].trim() === n[e].trim())
          )
      }
      if ("hours" === t) {
        let e = (0, ea.Cd)(s ?? null),
          t = (0, ea.Cd)(i)
        if (null != e && null != t) return eK()(e, t)
      }
      if (["address", "hours", "delivery_policy", "returns_policy"].includes(t))
        try {
          return eK()(JSON.parse(s ?? "null"), JSON.parse(i ?? "null"))
        } catch {}
      return (s ?? "").trim() === (i ?? "").trim()
    }
    function eY(e) {
      return [e.name.trim(), e.values.address, e.values.website, (0, q.Re)("phone", e.values.phone ?? "")]
    }
    let e1 = A.object({
      key: A.string(),
      businessType: A.enum(["local_business", "ecommerce"]).nullable(),
      sessionId: A.string().optional(),
      declinedDuplicates: A.object({
        address: A.string().length(64).optional(),
        phone: A.string().length(64).optional(),
        website: A.string().length(64).optional(),
      }).optional(),
      submitting: A.boolean().optional(),
      expectedAcceptedRevision: A.string().optional(),
      profileId: A.string().optional(),
      attempts: A.record(
        A.string(),
        A.preprocess(
          (e) => ("string" == typeof e ? { key: e } : e),
          A.object({
            key: A.string(),
            challengeId: A.string().optional(),
            testDomain: A.object({
              hostname: A.string(),
              record_name: A.string().nullish(),
              record_value: A.string().nullish(),
            }).nullish(),
          }),
        ),
      ).optional(),
    })
    function e0(e) {
      return e instanceof et.fk && 409 === e.status && "business_profile_creation_revision_mismatch" === e.errorCode
    }
    function e2(e, t) {
      let i,
        s = `business-profile-creation-session:${JSON.stringify([e, t])}`,
        n = new AbortController(),
        r = !1,
        a = 0,
        l = new Map(),
        o = (0, eG.Kf)({ accountId: e, subjectId: s, flowId: "creation", revision: "contact-send" })
      function c() {
        return e1.safeParse(JSON.parse(sessionStorage.getItem(s) ?? "null")).data
      }
      function d() {
        if (!r) {
          r = !0
          try {
            i = c()
          } catch {}
        }
      }
      function u() {
        try {
          null == i ? sessionStorage.removeItem(s) : sessionStorage.setItem(s, JSON.stringify(i))
        } catch {}
      }
      function f(s, r) {
        let a = i?.key,
          l = "start_session" === s.action ? void 0 : i?.sessionId,
          o = null == r ? n.signal : AbortSignal.any([n.signal, r]),
          c = "send_session_contact_otp" === s.action && "email" === s.field && !!s.idempotency_key
        function d() {
          if ((o.throwIfAborted(), i?.key !== a || (null != l && i?.sessionId !== l)))
            throw new DOMException("Creation session changed", "AbortError")
        }
        d()
        let u = (i) => (
          d(),
          p.Request.safePost("/chat/frontend/v1/business-profiles/creation", {
            additionalHeaders: {
              "ChatGPT-Account-ID": e,
              "X-OpenAI-Expected-Account-Id": e,
              "x-openai-use-sheep": "1",
            },
            requestBody: s,
            signal: i,
            expectedIdentity: { accountId: e, userId: t },
            assertRequestCurrent: () => {
              ;(i.throwIfAborted(), d())
            },
            retry: !c && void 0,
            expectedErrorStatuses: [400, 401, 403, 404, 409, 410, 422, 429, 503],
          })
        )
        return (
          "send_session_contact_otp" === s.action || "verify_session_contact_otp" === s.action
            ? (0, B.cA)({
                signal: o,
                run: c
                  ? (e) => (0, B.bT)(e, u, (e) => (e instanceof et.fk && (0, ee.$)(e) ? (e.retryAtMs ?? 0) : void 0))
                  : u,
              })
            : u(o)
        ).finally(d)
      }
      function h(e) {
        let t = 0
        for (let [i, s] of l) i.key === e.key && (t += s)
        return t
      }
      function m(e = !1) {
        return Object.entries(i?.attempts ?? {}).filter(
          ([t, i]) => t.startsWith('["website",') && (e || !!i.challengeId) && 0 === h(i),
        )
      }
      function b(e, t, s, n) {
        let r = e.session,
          a = r?.shopify_verification
        if (
          null == s ||
          i?.key !== t ||
          i?.sessionId !== s ||
          r?.session_id !== s ||
          null != r.website_verification ||
          null == a ||
          !["pending", "expired", "cancelled"].includes(a.status) ||
          !a.id.trim() ||
          !Number.isFinite(Date.parse(a.expires_at)) ||
          ("expired" === a.status && Date.parse(a.expires_at) > Date.now())
        )
          return !1
        let l = !1
        for (let [e, t] of n) i.attempts?.[e] === t && 0 === h(t) && (delete i.attempts[e], (l = !0))
        return l
      }
      async function g(e, t, s, r = !1, o) {
        if (null == i) throw Error("Start a creation session first")
        let c = i.key,
          d = i.attempts?.[e],
          p = r || ("start_session_website_dns" === t.action && d?.challengeId != null && null != d.testDomain),
          v = "start_session_website_shopify" === t.action ? m(!0) : [],
          y = t.field ?? "website"
        "discover_session_website" === t.action
          ? (y = "website-discovery")
          : "start_session_website_shopify" === t.action && (y = "website-shopify")
        let x = `[${JSON.stringify(y)},`,
          w = Object.fromEntries(Object.entries(i.attempts ?? {}).filter(([e]) => e.startsWith(x)))
        i.attempts = Object.fromEntries(Object.entries(i.attempts ?? {}).filter(([t]) => t === e || !t.startsWith(x)))
        let _ = { ...(!p && i.attempts?.[e] ? i.attempts[e] : { key: crypto.randomUUID(), testDomain: void t.action }) }
        ;((i.attempts = { ...i.attempts, [e]: _ }), u(), "send_session_contact_otp" === t.action && a++)
        let j = n.signal,
          C = { ...t, idempotency_key: _.key, ...(t.action, {}) },
          S = !1,
          A = () => ((S = !0), f(C, s)),
          I = (o ? o(C, A) : A()).catch((n) => {
            let r =
                n instanceof et.fk &&
                409 === n.status &&
                409 === n.explicitResponseStatus &&
                "http_response" === n.failureOrigin &&
                "network" !== n.errorKind &&
                !j.aborted &&
                s?.aborted !== !0,
              a =
                S &&
                "start_session_website_dns" === t.action &&
                n instanceof et.fk &&
                ((403 === n.status && (null == _.challengeId || null != _.testDomain)) || (r && !e0(n) && 1 === h(_))),
              l = r && "discover_session_website" === t.action,
              o = a || l
            if (
              n instanceof et.fk &&
              ((S && [400, 422].includes(n.status)) || o) &&
              i?.key === c &&
              i.sessionId === t.session_id &&
              i.attempts?.[e] === _
            ) {
              for (let [t, s] of (delete i.attempts[e], Object.entries(w))) (o && t === e) || (i.attempts[t] = s)
              u()
            }
            throw n
          })
        "start_session_website_dns" === t.action && l.set(_, (l.get(_) ?? 0) + 1)
        let k = await I.finally(() => {
          let e = l.get(_) ?? 0
          e > 1 ? l.set(_, e - 1) : l.delete(_)
        })
        if (i?.key !== c || i.sessionId !== t.session_id)
          throw new DOMException("Creation session changed", "AbortError")
        if (i.attempts?.[e] === _) {
          let s = k.session?.website_verification,
            n = k.session?.shopify_verification,
            r =
              "start_session_website_dns" === t.action &&
              null != s &&
              new URL((0, q.DX)(s.website)).href === new URL((0, q.DX)(t.session_value ?? "")).href
                ? s
                : k.session?.contact_verifications.find(
                    (e) =>
                      e.field === t.field && (0, q.Re)(e.field, e.target) === (0, q.Re)(e.field, t.session_value ?? ""),
                  )
          ;("start_session_website_shopify" === t.action && n?.status === "pending"
            ? ((i.attempts[e] = { ..._, challengeId: n.id }), b(k, c, t.session_id, v))
            : r?.status === "pending"
              ? (i.attempts[e] = { ..._, challengeId: r.challenge_id ?? void 0 })
              : delete i.attempts[e],
            u())
        }
        return k
      }
      function v(e, t, i) {
        return (0, B.cA)({
          signal: AbortSignal.any([n.signal, t]),
          timeoutMs: 12e3,
          run: (t) =>
            g(
              JSON.stringify(["website-discovery", (0, q.DX)(e)]),
              {
                action: "discover_session_website",
                session_id: x(),
                session_value: (0, q.DX)(e),
                ...(i ? { dns_fallback_idempotency_key: i } : {}),
              },
              t,
            ),
        })
      }
      async function y(e, t) {
        let s = x(),
          r = i?.key,
          l = Object.entries(i?.attempts ?? {}),
          o = m(),
          c = a,
          d = await (0, B.ck)({
            signal: e ?? n.signal,
            maxAttempts: t,
            timeoutMs: 3e4,
            read: (e) => {
              if (i?.key !== r || i?.sessionId !== s || c !== a)
                throw new DOMException("Creation session changed", "AbortError")
              return f({ action: "get_session", session_id: s }, e)
            },
            isTransient: e3,
          })
        if (i?.key !== r || i?.sessionId !== s || c !== a)
          throw new DOMException("Creation session changed", "AbortError")
        if (d.session?.session_id === s) {
          for (let [e, t] of (b(d, r, s, o), l))
            i.attempts?.[e] === t &&
              null != t.challengeId &&
              ([...d.session.contact_verifications, d.session.website_verification].some(
                (e) => null != e && e.challenge_id === t.challengeId && "pending" !== e.status,
              ) ||
                (d.session.shopify_verification?.id === t.challengeId &&
                  "pending" !== d.session.shopify_verification.status)) &&
              delete i.attempts[e]
          u()
        }
        return d
      }
      function x() {
        if (i?.sessionId == null) throw Error("Start a creation session first")
        return i.sessionId
      }
      function w() {
        d()
        try {
          let e = eZ.safeParse(JSON.parse(sessionStorage.getItem(`${s}:pending`) ?? "null")).data
          return null != e && e.attemptKey === i?.key ? e : null
        } catch {
          return null
        }
      }
      async function _(e, { name: t, replacedSessionId: s } = {}) {
        if (
          (d(),
          null != s && i?.sessionId === s && ((i = { key: crypto.randomUUID(), businessType: e }), u()),
          null != i && null == i.businessType && null != i.sessionId)
        )
          return null == e
            ? y()
            : f({
                action: "accept_session_field",
                session_id: i.sessionId,
                session_field: "business_type",
                session_value: e,
              })
        ;(null == i || i.businessType !== e) && ((i = { key: crypto.randomUUID(), businessType: e }), u())
        let n = i.key,
          r = null == e ? (t ?? w()?.draft.name) : void 0,
          a = await f({
            action: "start_session",
            ...(null != r && { session_field: "name", session_value: r }),
            business_type: e ?? void 0,
            idempotency_key: n,
          })
        if (i?.key !== n) throw new DOMException("Creation session changed", "AbortError")
        let l = eJ(a)
        if (null == l) throw Error("Creation session is unavailable")
        return ((i = { ...i, sessionId: l.session_id }), u(), a)
      }
      async function j(e) {
        let t = x()
        if (null == i) throw Error("Creation session is unavailable")
        let s = i.key
        ;((i = {
          ...i,
          expectedAcceptedRevision: i.submitting ? i.expectedAcceptedRevision : (e ?? void 0),
          submitting: !0,
        }),
          u())
        let n = await f({
          action: "submit",
          session_id: t,
          expected_accepted_revision: i.expectedAcceptedRevision,
        }).catch(async (e) => {
          if (i?.key !== s || i.sessionId !== t) throw new DOMException("Creation session changed", "AbortError")
          if (e0(e)) {
            let e = await f({ action: "get", business_profile_id: t }).catch((e) => {
              if (!(e instanceof et.fk) || 404 !== e.status) throw e
            })
            if (e?.creation?.business_profile_id === t && !1 === e.creation.is_draft) return e
          }
          throw (
            ((e instanceof et.fk && [400, 422].includes(e.status)) || e0(e)) && ((i = { ...i, submitting: !1 }), u()),
            e
          )
        })
        if (i?.key !== s || i.sessionId !== t) throw new DOMException("Creation session changed", "AbortError")
        if (null == n.creation) throw Error("Submission is unavailable")
        return ((i = { ...i, submitting: !1, profileId: n.creation.business_profile_id }), u(), n)
      }
      return {
        attach: () => {
          n.signal.aborted && (n = new AbortController())
          let e = n
          return () => e.abort()
        },
        throwIfAborted: () => n.signal.throwIfAborted(),
        hasPendingSession: () => (d(), null != i),
        hasPendingStart: () => null != i && null == i.sessionId,
        hasPendingSubmission: () => i?.submitting === !0,
        hasRecoverableSubmission: () => (d(), i?.profileId != null || (i?.submitting === !0 && null != i.sessionId)),
        pendingPhoneDelivery: (e) => {
          let t = (0, q.Re)("phone", e),
            s = ["sms", "phone_voice_call"].filter((e) => i?.attempts?.[JSON.stringify(["phone", t, e])] != null)
          return 1 === s.length ? s[0] : void 0
        },
        isNameFirst: () => null != i && null == i.businessType,
        start: _,
        restore: async () => {
          if ((d(), null != i))
            return null != i.profileId
              ? f({ action: "get", business_profile_id: i.profileId })
              : i.submitting && null != i.sessionId
                ? j()
                : null == i.sessionId
                  ? _(i.businessType)
                  : y()
        },
        read: y,
        checkDuplicate: async (e, t, s, n) => {
          let r = x(),
            a = "website" === e || null == n ? [] : eY(n),
            l = (0, ez.sha256)(JSON.stringify([r, e, t.trim(), ...a]))
          if ("website" !== e && i?.declinedDuplicates?.[e] === l) return null
          let o = (
            await f(
              {
                action: "check_session_duplicate",
                ...("phone" === e && { include_local_contact_matches: !0 }),
                session_id: r,
                session_field: e,
                session_value: t,
              },
              s,
            )
          ).duplicate_lookup
          if (o?.status !== "match") return null
          let c = "website" !== e ? (o.place_candidates ?? []) : [],
            d = o.target_id ? [o.target_id] : [],
            h = "website" !== e && null != o.target_ids ? [...new Set(o.target_ids)] : d
          return 0 === h.length && 0 === c.length
            ? null
            : {
                targetIds: h,
                places: c,
                decline: () => {
                  i?.sessionId === r && ((i.declinedDuplicates = { ...i.declinedDuplicates, [e]: l }), u())
                },
              }
        },
        accept: (e, t) => f({ action: "accept_session_field", session_id: x(), session_field: e, session_value: t }),
        send: (e, t, s) => {
          let r = JSON.stringify([i?.key, x(), (0, q.Re)(e, t)])
          return o.execute({
            selection: {
              checkKey: e,
              target: r,
              channel: "phone" === e ? s : "email",
              challengeId: null,
              challengeStatus: null,
            },
            operation: "send_session_contact_otp",
            signal: n.signal,
            coalesce: !0,
            run: ({ signal: n }) =>
              (async function (e, t, s, n) {
                let r = x(),
                  a = i?.key,
                  l = (0, q.Re)(e, t),
                  o = JSON.stringify([e, l, "phone" === e ? s : void 0]),
                  c = i?.attempts?.[o] != null,
                  d = {
                    action: "send_session_contact_otp",
                    session_id: r,
                    field: e,
                    session_value: t,
                    channel: "phone" === e ? s : void 0,
                  },
                  u = await (0, eG.sA)({
                    recovering: c,
                    send: (e) => g(o, d, n, e),
                    throwIfStale: () => {
                      if ((n.throwIfAborted(), i?.key !== a || i?.sessionId !== r))
                        throw new DOMException("Creation session changed", "AbortError")
                    },
                    getRetryDeadline: (t) => {
                      let i = t.session?.contact_verifications.find(
                        (t) => t.field === e && (0, q.Re)(e, t.target) === l,
                      )
                      return t.session?.session_id === r && i?.status === "pending" && null != i.challenge_id
                        ? i.resend_available_at
                        : void 0
                    },
                  }),
                  f = u.session?.contact_verifications.find((t) => t.field === e && (0, q.Re)(e, t.target) === l)
                if (f?.status !== "pending") return u
                let h = f.challenge_id,
                  p = u,
                  m = "email" === e ? (0, eM.K)((e) => y(e, 1)) : (e) => y(e)
                try {
                  let t = await (0, B.re)({
                    signal: n,
                    initial: u,
                    maxReads: 30,
                    timeoutMs: 3e4,
                    intervalMs: 1e3,
                    isPending: (t) =>
                      t.session?.contact_verifications.some(
                        (t) =>
                          t.field === e &&
                          (0, q.Re)(e, t.target) === l &&
                          t.challenge_id === h &&
                          "pending" === t.status,
                      ) ?? !1,
                    read: async (e) => {
                      if (i?.key !== a || i?.sessionId !== r)
                        throw new DOMException("Creation session changed", "AbortError")
                      return (p = await m(e, p))
                    },
                  })
                  if ((n.throwIfAborted(), i?.key !== a || i?.sessionId !== r))
                    throw new DOMException("Creation session changed", "AbortError")
                  return t.value
                } catch (t) {
                  if ((n.throwIfAborted(), i?.key !== a || i?.sessionId !== r))
                    throw new DOMException("Creation session changed", "AbortError")
                  if ("email" === e || !e3(t)) throw t
                  return p
                }
              })(e, t, s, n),
            onSettled: () => {
              a++
            },
          })
        },
        verify: (e, t, i) =>
          f({ action: "verify_session_contact_otp", session_id: x(), field: e, challenge_id: t, code: i }),
        discoverWebsite: v,
        prepareWebsite: function (e, t, i) {
          let s = x()
          return g(
            JSON.stringify(["website", e]),
            { action: "start_session_website_dns", session_id: s, session_value: e },
            t,
            !1,
            async (n, r) => {
              let a = null == n.test_domain ? (n.idempotency_key ?? void 0) : void 0,
                l = () =>
                  v(e, t).catch((e) => {
                    if ((t.throwIfAborted(), e3(e) || (e instanceof et.fk && [400, 422].includes(e.status))))
                      return y(t)
                    throw e
                  }),
                o =
                  null == a
                    ? await l()
                    : await v(e, t, a).catch((e) => {
                        if ((t.throwIfAborted(), e instanceof et.fk && [400, 422, 503].includes(e.status))) return l()
                        if (e3(e)) return y(t)
                        throw e
                      })
              t.throwIfAborted()
              let c = eJ(o)
              if (null != c && c.session_id !== s) throw Error("Website verification session changed")
              if (
                G(o.website_discovery, e) ||
                eQ(c, e) ||
                (a &&
                  !c?.website_verification?.test_override &&
                  (eH(c?.website_verification, e) || eX(c, "website", e)))
              )
                return o
              if (
                null == c ||
                c.accepted_revision !== i.accepted_revision ||
                c.website_verification?.challenge_id !== i.website_verification?.challenge_id ||
                c.shopify_verification?.id !== i.shopify_verification?.id
              )
                throw Error("Website verification session changed")
              return r()
            },
          )
        },
        startShopify: (e, t) =>
          g(
            JSON.stringify(["website-shopify", e]),
            { action: "start_session_website_shopify", session_id: x(), challenge_id: e },
            t,
          ),
        cancelShopify: (e, t) => {
          let s = x(),
            n = i?.key,
            r = m(),
            a = `[${JSON.stringify("website-shopify")},`,
            l = Object.entries(i?.attempts ?? {}).filter(
              ([t, i]) => t.startsWith(a) && (null == i.challengeId || i.challengeId === e),
            )
          return f({ action: "cancel_session_website_shopify", session_id: s, challenge_id: e }, t).then((t) => {
            if (i?.key !== n || i?.sessionId !== s) throw new DOMException("Creation session changed", "AbortError")
            if (
              t.session?.session_id === s &&
              t.session.shopify_verification?.id === e &&
              "cancelled" === t.session.shopify_verification.status
            ) {
              let e = b(t, n, s, r)
              for (let [t, s] of l) i.attempts?.[t] === s && (delete i.attempts[t], (e = !0))
              e && u()
            }
            return t
          })
        },
        startWebsite: (e) =>
          g(JSON.stringify(["website", e]), { action: "start_session_website_dns", session_id: x(), session_value: e }),
        checkWebsite: async (e) => {
          let t = await f({ action: "check_session_website_dns", session_id: x(), challenge_id: e }),
            s = t.session?.website_verification
          if (s?.challenge_id === e && "pending" !== s.status) {
            for (let [t, s] of Object.entries(i?.attempts ?? {})) s.challengeId === e && delete i?.attempts?.[t]
            u()
          }
          return t
        },
        submit: j,
        preserveWebsiteHandoff: (e) => {
          if (i?.sessionId == null) throw Error("Start a creation session first")
          let t = JSON.stringify(i),
            n = JSON.stringify({ draft: e, step: "website", attemptKey: i.key })
          if (
            (sessionStorage.setItem(s, t),
            sessionStorage.setItem(`${s}:pending`, n),
            sessionStorage.getItem(s) !== t || sessionStorage.getItem(`${s}:pending`) !== n)
          )
            throw Error("Creation session could not be saved")
        },
        savePending: (e, t) => {
          try {
            sessionStorage.setItem(
              `${s}:pending`,
              JSON.stringify({ draft: e, step: t, attemptKey: i?.key, stepOrderVersion: 2 }),
            )
          } catch {}
        },
        pending: w,
        clear: (e) => {
          if (null != e && i?.sessionId !== e) return
          let t = i?.key
          i = void 0
          try {
            if (null != e && c()?.key !== t) return
            ;(sessionStorage.removeItem(s), sessionStorage.removeItem(`${s}:pending`))
          } catch {}
        },
      }
    }
    function e3(e) {
      return (
        ((e instanceof Error || e instanceof DOMException) && "TimeoutError" === e.name) ||
        (e instanceof et.fk && ("network" === e.errorKind || 408 === e.status || (e.status >= 500 && e.status < 600)))
      )
    }
    function e4(e) {
      if (e instanceof et.fk) {
        if (503 === e.status && "business_profile_persona_configuration_error" === e.errorCode)
          return "personaConfiguration"
        if (410 === e.status && "business_profile_creation_session_expired" === e.errorCode) return "expired"
        if (400 === e.status || 422 === e.status) return "invalid"
      }
      return "error"
    }
    var e5 = i("ReGc")
    function e6(e) {
      let t,
        i = (0, n.c)(3),
        { environmentRules: r, children: a } = e
      return null == r
        ? a
        : (i[0] !== a || i[1] !== r
            ? ((t = (0, s.jsx)(e8, { environmentRules: r, children: a })), (i[0] = a), (i[1] = r), (i[2] = t))
            : (t = i[2]),
          t)
    }
    function e8(e) {
      let { environmentRules: t, children: i } = e,
        { data: s } = (0, r.Ul)(e5.a)
      return !(function (e) {
        if (null == e) return !1
        try {
          let { hostname: t } = new URL(e, void 0)
          return "chatgpt.com" === t || t.endsWith(".chatgpt.com")
        } catch {
          return !1
        }
      })(s?.chatGptApiBaseUrl)
        ? t
        : i
    }
    var e7 = i("z2PK")
    function e9(e) {
      let t,
        i,
        r,
        a,
        o,
        u,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        x,
        w,
        _,
        j,
        C,
        S,
        A,
        I,
        k,
        P,
        N,
        D,
        R,
        E,
        M,
        T,
        W,
        O,
        F,
        L,
        U,
        q,
        $,
        B = (0, n.c)(101)
      B[0] !== e
        ? (({
            queryKey: o,
            acceptedSession: t,
            preparing: f,
            onDiscover: r,
            onStartShopify: a,
            onCancelShopify: i,
            renderStep: u,
            ...h
          } = e),
          (B[0] = e),
          (B[1] = t),
          (B[2] = i),
          (B[3] = r),
          (B[4] = a),
          (B[5] = o),
          (B[6] = u),
          (B[7] = f),
          (B[8] = h))
        : ((t = B[1]), (i = B[2]), (r = B[3]), (a = B[4]), (o = B[5]), (u = B[6]), (f = B[7]), (h = B[8]))
      let z = void 0 !== f && f,
        V = (0, c.A)(),
        { website: K, busy: J, onBack: H } = h,
        [Q, X] = (0, l.useState)("shopify")
      B[9] !== K || B[10] !== h.verification
        ? ((p = () => eH(h.verification, K)), (B[9] = K), (B[10] = h.verification), (B[11] = p))
        : (p = B[11])
      let [Y, ee] = (0, l.useState)(p),
        [et, ei] = (0, l.useState)(!1),
        [es, en] = (0, l.useState)(!1),
        er = (0, l.useRef)(null)
      ;(B[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = () => () => er.current?.abort()), (g = []), (B[12] = m), (B[13] = g))
        : ((m = B[12]), (g = B[13])),
        (0, l.useEffect)(m, g),
        B[14] !== t || B[15] !== K ? ((v = eQ(t, K)), (B[14] = t), (B[15] = K), (B[16] = v)) : (v = B[16]))
      let ea = v
      B[17] !== r
        ? ((y = (e) => {
            let { signal: t } = e
            return r(t)
          }),
          (B[17] = r),
          (B[18] = y))
        : (y = B[18])
      let el = !z && null == ea && !et
      B[19] !== o || B[20] !== y || B[21] !== el
        ? ((x = {
            queryKey: o,
            queryFn: y,
            enabled: el,
            retry: !1,
            staleTime: 1 / 0,
            gcTime: 3e5,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          }),
          (B[19] = o),
          (B[20] = y),
          (B[21] = el),
          (B[22] = x))
        : (x = B[22])
      let { data: eo, isFetching: ec, refetch: ed } = (0, Z.I)(x),
        eu = eo?.website_discovery
      B[23] !== eu || B[24] !== K ? ((w = G(eu, K)), (B[23] = eu), (B[24] = K), (B[25] = w)) : (w = B[25])
      let ef = w,
        eh = null != ea || null != ef,
        ep = J || et
      B[26] !== J ||
      B[27] !== ef?.id ||
      B[28] !== Q ||
      B[29] !== H ||
      B[30] !== i ||
      B[31] !== a ||
      B[32] !== ea ||
      B[33] !== ed ||
      B[34] !== K ||
      B[35] !== h
        ? ((_ = async function (e) {
            let t = void 0 !== e && e
            if (null != er.current || J) return
            let s = new AbortController()
            return (
              (er.current = s),
              ei(!0),
              en(!1),
              (async function () {
                if (t || "website" === Q)
                  (null != ea && (await i(ea.id, s.signal)),
                    s.signal.throwIfAborted(),
                    t ? H() : (eH(h.verification, K) || (await h.onStart()), s.signal.throwIfAborted(), ee(!0)))
                else {
                  let e = ea?.id ?? ef?.id
                  if (null == e) throw Error("Shopify verification is unavailable")
                  await a(e, s.signal)
                }
              })()
                .catch(() => {
                  s.signal.aborted || (en(!0), ed())
                })
                .finally(() => {
                  ;(er.current === s && (er.current = null), s.signal.aborted || ei(!1))
                })
            )
          }),
          (B[26] = J),
          (B[27] = ef?.id),
          (B[28] = Q),
          (B[29] = H),
          (B[30] = i),
          (B[31] = a),
          (B[32] = ea),
          (B[33] = ed),
          (B[34] = K),
          (B[35] = h),
          (B[36] = _))
        : (_ = B[36])
      let em = _
      if (z || (ec && null == ea && !Y)) {
        let e, t, i, n
        return (
          B[37] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("p", {
                role: "status",
                children: (0, s.jsx)(d.A, {
                  id: "businessProfiles.creation.website.methods.loading",
                  defaultMessage: "Checking verification methods",
                  description:
                    "Status while checking which ownership verification methods are available for the website entered during business profile creation.",
                }),
              })),
              (B[37] = e))
            : (e = B[37]),
          B[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(d.A, { ...eP.W.back })), (B[38] = t))
            : (t = B[38]),
          B[39] !== H
            ? ((i = (0, s.jsxs)("div", {
                className: "flex flex-col gap-4 select-none",
                children: [
                  e,
                  (0, s.jsx)(b.$, {
                    type: "button",
                    color: "outlineGhost",
                    size: "formAction",
                    onClick: H,
                    children: t,
                  }),
                ],
              })),
              (B[39] = H),
              (B[40] = i))
            : (i = B[40]),
          B[41] !== u || B[42] !== i ? ((n = u(i)), (B[41] = u), (B[42] = i), (B[43] = n)) : (n = B[43]),
          n
        )
      }
      if (!eh || Y) {
        let e, t, i
        return (
          B[44] !== eh || B[45] !== H || B[46] !== ed
            ? ((e = eh
                ? () => {
                    ;(ee(!1), ed())
                  }
                : H),
              (B[44] = eh),
              (B[45] = H),
              (B[46] = ed),
              (B[47] = e))
            : (e = B[47]),
          B[48] !== e || B[49] !== h
            ? ((t = (0, s.jsx)(te, { ...h, onBack: e })), (B[48] = e), (B[49] = h), (B[50] = t))
            : (t = B[50]),
          B[51] !== u || B[52] !== t ? ((i = u(t, { dns: !0 })), (B[51] = u), (B[52] = t), (B[53] = i)) : (i = B[53]),
          i
        )
      }
      ;(B[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (e) => {
            ;(X(e), en(!1))
          }),
          (B[54] = j))
        : (j = B[54]),
        B[55] !== V
          ? ((C = V.formatMessage({
              id: "businessProfiles.creation.website.methods.label",
              defaultMessage: "Verification method",
              description:
                "Accessible group label for website ownership verification choices during business profile creation.",
            })),
            (B[55] = V),
            (B[56] = C))
          : (C = B[56]),
        B[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, s.jsx)(d.A, {
              id: "businessProfiles.creation.website.methods.shopify",
              defaultMessage: "Shopify",
              description: "Ownership verification option that signs the owner in to Shopify. Keep Shopify unchanged.",
            })),
            (B[57] = S))
          : (S = B[57]))
      let eb = ea?.myshopify_domain ?? ef?.myshopify_domain
      return (
        B[58] !== eb
          ? ((A = (0, s.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                S,
                (0, s.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(d.A, {
                    id: "businessProfiles.creation.website.methods.shopify.description",
                    defaultMessage: "Sign in to Shopify to verify {shop}",
                    description:
                      "Description of Shopify ownership verification during business profile creation. Shop is the authoritative myshopify.com store domain returned by the server.",
                    values: { shop: eb },
                  }),
                }),
              ],
            })),
            (B[58] = eb),
            (B[59] = A))
          : (A = B[59]),
        B[60] !== ep || B[61] !== A
          ? ((I = (0, s.jsx)(ew.z.Item, { value: "shopify", disabled: ep, block: !0, children: A })),
            (B[60] = ep),
            (B[61] = A),
            (B[62] = I))
          : (I = B[62]),
        B[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, s.jsx)(d.A, {
              id: "businessProfiles.creation.website.methods.website",
              defaultMessage: "Website domain",
              description: "Ownership verification option that uses the existing website DNS verification process.",
            })),
            (B[63] = k))
          : (k = B[63]),
        B[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, s.jsxs)("span", {
              className: "flex min-w-0 flex-col text-base",
              children: [
                k,
                (0, s.jsx)("span", {
                  className: "text-sm text-secondary",
                  children: (0, s.jsx)(d.A, {
                    id: "businessProfiles.creation.website.methods.website.description",
                    defaultMessage: "Add a DNS TXT record for your website",
                    description:
                      "Description of the website ownership verification choice during business profile creation. DNS TXT is the verification record type.",
                  }),
                }),
              ],
            })),
            (B[64] = P))
          : (P = B[64]),
        B[65] !== ep
          ? ((N = (0, s.jsx)(ew.z.Item, { value: "website", disabled: ep, block: !0, children: P })),
            (B[65] = ep),
            (B[66] = N))
          : (N = B[66]),
        B[67] !== Q || B[68] !== C || B[69] !== I || B[70] !== N
          ? ((D = (0, s.jsxs)(ew.z, {
              value: Q,
              onChange: j,
              variant: "list",
              className: "rounded-2xl border border-default",
              "aria-label": C,
              children: [I, N],
            })),
            (B[67] = Q),
            (B[68] = C),
            (B[69] = I),
            (B[70] = N),
            (B[71] = D))
          : (D = B[71]),
        B[72] !== es
          ? ((R =
              es &&
              (0, s.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, s.jsx)(d.A, { ...eP.W.error }),
              })),
            (B[72] = es),
            (B[73] = R))
          : (R = B[73]),
        B[74] !== em ? ((E = () => void em(!0)), (B[74] = em), (B[75] = E)) : (E = B[75]),
        B[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, s.jsx)(d.A, { ...eP.W.back })), (B[76] = M))
          : (M = B[76]),
        B[77] !== ep || B[78] !== E
          ? ((T = (0, s.jsx)(b.$, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              disabled: ep,
              onClick: E,
              children: M,
            })),
            (B[77] = ep),
            (B[78] = E),
            (B[79] = T))
          : (T = B[79]),
        B[80] !== em ? ((W = () => void em()), (B[80] = em), (B[81] = W)) : (W = B[81]),
        B[82] !== Q
          ? ((O =
              "shopify" === Q
                ? (0, s.jsx)(d.A, {
                    id: "businessProfiles.creation.website.shopify.start",
                    defaultMessage: "Verify with Shopify",
                    description:
                      "Starts or resumes Shopify ownership verification for the entered website during business profile creation.",
                  })
                : (0, s.jsx)(d.A, { ...eP.W.continue })),
            (B[82] = Q),
            (B[83] = O))
          : (O = B[83]),
        B[84] !== ep || B[85] !== W || B[86] !== O
          ? ((F = (0, s.jsx)(b.$, { type: "button", size: "formAction", disabled: ep, onClick: W, children: O })),
            (B[84] = ep),
            (B[85] = W),
            (B[86] = O),
            (B[87] = F))
          : (F = B[87]),
        B[88] !== T || B[89] !== F
          ? ((L = (0, s.jsxs)("div", { className: "flex flex-wrap gap-2", children: [T, F] })),
            (B[88] = T),
            (B[89] = F),
            (B[90] = L))
          : (L = B[90]),
        B[91] !== D || B[92] !== R || B[93] !== L
          ? ((U = (0, s.jsxs)("div", {
              className: "flex flex-col gap-6 wrap-anywhere select-none",
              children: [D, R, L],
            })),
            (B[91] = D),
            (B[92] = R),
            (B[93] = L),
            (B[94] = U))
          : (U = B[94]),
        B[95] !== K
          ? ((q = (0, s.jsx)("p", {
              className: "wrap-anywhere text-secondary",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.creation.website.methods",
                defaultMessage: "Choose how to verify ownership of {website}",
                description:
                  "Instructions above ownership verification choices for a website authoritatively recognized as a Shopify store during business profile creation. Website is the address entered by the owner.",
                values: { website: (0, s.jsx)("bdi", { children: K }, "website") },
              }),
            })),
            (B[95] = K),
            (B[96] = q))
          : (q = B[96]),
        B[97] !== u || B[98] !== U || B[99] !== q
          ? (($ = u(U, { description: q })), (B[97] = u), (B[98] = U), (B[99] = q), (B[100] = $))
          : ($ = B[100]),
        $
      )
    }
    function te(e) {
      let t,
        i,
        r,
        a,
        o,
        c = (0, n.c)(18),
        { website: u, verification: f, busy: h, onStart: p, onCheck: m, onBack: b } = e,
        [g, v] = (0, l.useState)(),
        y =
          null != f &&
          (function (e, t) {
            try {
              return new URL(e).href === new URL(t).href
            } catch {
              return !1
            }
          })(f.website, u)
            ? f
            : null,
        x = y?.test_override && 1 ? null : y,
        w = y?.hostname
      return (
        c[0] !== y?.test_override
          ? ((t =
              y?.test_override &&
              (0, s.jsx)("p", {
                role: "status",
                className: "text-sm text-secondary",
                children: (0, s.jsx)(e6, {
                  environmentRules: null,
                  children: (0, s.jsx)(d.A, {
                    id: "businessProfiles.creation.website.testOverride.realWebsiteRequired",
                    defaultMessage:
                      "This DNS test checks a real record. Clear the DNS override and verify the business’s actual website before submitting a profile.",
                    description:
                      "Instructions for an employee using a DNS test override during profile creation when submission requires verification of the business website.",
                  }),
                }),
              })),
            (c[0] = y?.test_override),
            (c[1] = t))
          : (t = c[1]),
        c[2] !== y || c[3] !== m
          ? ((i = y ? async () => (await m(y.challenge_id), { pendingChallengeId: y.challenge_id }) : void 0),
            (c[2] = y),
            (c[3] = m),
            (c[4] = i))
          : (i = c[4]),
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(d.A, { ...eP.W.back })), (c[5] = r))
          : (r = c[5]),
        c[6] !== h || c[7] !== b
          ? ((a = (0, s.jsx)(e7.U, { type: "button", color: "outlineGhost", disabled: h, onClick: b, children: r })),
            (c[6] = h),
            (c[7] = b),
            (c[8] = a))
          : (a = c[8]),
        c[9] !== h ||
        c[10] !== g ||
        c[11] !== p ||
        c[12] !== x ||
        c[13] !== w ||
        c[14] !== t ||
        c[15] !== i ||
        c[16] !== a
          ? ((o = (0, s.jsx)(e7.B, {
              lastCheck: g,
              onChecked: v,
              challenge: x,
              domain: w,
              busy: h,
              headingRef: tt,
              beforeRecord: t,
              onStart: p,
              onCheck: i,
              secondaryAction: a,
            })),
            (c[9] = h),
            (c[10] = g),
            (c[11] = p),
            (c[12] = x),
            (c[13] = w),
            (c[14] = t),
            (c[15] = i),
            (c[16] = a),
            (c[17] = o))
          : (o = c[17]),
        o
      )
    }
    function tt(e) {
      e?.focus({ preventScroll: !0 })
    }
    let ti = {
        website: ["website"],
        category: ["category", "description"],
        hours: ["hours"],
        address: ["address"],
        delivery: ["delivery_policy"],
        returns: ["returns_policy"],
      },
      ts = {
        onMouseDown(e) {
          document.activeElement?.id === "business-description" && e.preventDefault()
        },
        onClickCapture(e) {
          document.activeElement?.id === "business-description" && e.currentTarget.focus()
        },
      }
    function tn(e) {
      return e
        .normalize("NFKC")
        .toLowerCase()
        .replace(/[\p{P}\s]/gu, "")
    }
    function tr(e) {
      let t,
        i,
        a,
        u,
        f,
        p,
        m,
        v,
        y,
        x,
        w,
        _,
        j,
        C,
        S,
        A,
        I,
        k,
        P,
        N,
        D,
        R,
        E,
        M,
        T,
        O,
        F,
        L,
        z,
        ee,
        ec,
        ex,
        ew,
        e_,
        ej,
        eC,
        eS,
        eA,
        eI,
        ek,
        eN,
        eR = (0, n.c)(194),
        {
          accountId: eE,
          contactVerificationEnabled: eT,
          name: eW,
          onCancel: eO,
          onReview: eF,
          initialDraft: eL,
          initialStep: eq,
          submitting: e$,
          waitForNameScreening: eG,
          allowNavigation: ez,
          services: eV,
          temporarySession: eK,
          initialSession: eZ,
          onExpired: e1,
          onSessionDeadline: e2,
        } = e,
        e3 = void 0 !== eT && eT,
        e5 = void 0 === eq ? "type" : eq,
        e6 = void 0 !== e$ && e$,
        e8 = (0, c.A)(),
        { userId: e7 } = (0, h.As)(),
        te = (0, J.jE)()
      eR[0] !== eE ? ((t = () => (null == eE ? null : (0, eB.Y)(eE))), (eR[0] = eE), (eR[1] = t)) : (t = eR[1])
      let [tt] = (0, l.useState)(t)
      ;(eR[2] !== tt
        ? ((i = () => tt?.attach()), (a = [tt]), (eR[2] = tt), (eR[3] = i), (eR[4] = a))
        : ((i = eR[3]), (a = eR[4])),
        (0, l.useEffect)(i, a))
      let [tr, tu] = (0, l.useState)(),
        [tf, th] = (0, l.useState)(),
        [tp, tm] = (0, l.useState)(),
        tb = tp ?? eZ,
        [tg, tv] = (0, l.useState)()
      eR[5] !== e3 || eR[6] !== eL || eR[7] !== eW
        ? ((u = () =>
            null == eL
              ? (0, q.vm)(eW, e3)
              : { ...eL, contactVerificationRequired: (null == eL.profileId && e3) || eL.contactVerificationRequired }),
          (eR[5] = e3),
          (eR[6] = eL),
          (eR[7] = eW),
          (eR[8] = u))
        : (u = eR[8])
      let [ty, tx] = (0, l.useState)(u)
      eR[9] !== ty || eR[10] !== e5
        ? ((f = () => (0, q.B)(ty, e5)), (eR[9] = ty), (eR[10] = e5), (eR[11] = f))
        : (f = eR[11])
      let [tw, t_] = (0, l.useState)(f),
        tj = (0, l.useId)(),
        [tC, tS] = (0, l.useState)(null),
        [tA, tI] = (0, l.useState)(!0),
        [tk, tP] = (0, l.useState)(!1),
        [tN, tD] = (0, l.useState)(!1),
        tR = (0, r.Ul)(ey.n),
        [tE, tM] = (0, l.useState)(),
        tT = tR ? tE : void 0,
        [tW, tO] = (0, l.useState)(),
        tF = tT?.claimAttempt != null,
        tL = tN || tF,
        tU =
          ("website" === tw && "ecommerce" === ty.businessType) ||
          ("phone" === tw && "local_business" === ty.businessType)
            ? tw
            : void 0,
        tq = tR && null != tU && null != eK && null != eE,
        t$ = e6 || tk || tF,
        tB = tT?.claimAttempt
      eR[12] !== eE || eR[13] !== e8.locale || eR[14] !== tB || eR[15] !== e7
        ? ((p = ["creation-duplicate-claim", eE, e7, e8.locale, tB]),
          (eR[12] = eE),
          (eR[13] = e8.locale),
          (eR[14] = tB),
          (eR[15] = e7),
          (eR[16] = p))
        : (p = eR[16])
      let tG = p
      eR[17] !== tG || eR[18] !== tF
        ? ((m = { queries: tF ? [{ queryKey: tG, queryFn: H.hT, gcTime: 0 }] : [] }),
          (eR[17] = tG),
          (eR[18] = tF),
          (eR[19] = m))
        : (m = eR[19])
      let [tz] = (0, Q.E)(m),
        tV = (0, l.useRef)(null)
      ;(eR[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = () => () => tV.current?.abort()), (y = []), (eR[20] = v), (eR[21] = y))
        : ((v = eR[20]), (y = eR[21])),
        (0, l.useEffect)(v, y))
      let [tK, tJ] = (0, l.useState)(null),
        [tH, tQ] = (0, l.useState)(),
        [tZ, tX] = (0, l.useState)(null),
        tY = (0, l.useRef)(!1)
      eR[22] !== tK
        ? ((x =
            "error" === tK
              ? (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, s.jsx)(d.A, { ...eP.W.error }),
                })
              : null),
          (eR[22] = tK),
          (eR[23] = x))
        : (x = eR[23])
      let t1 = x
      eR[24] !== ty.values || eR[25] !== tb
        ? ((w = ["phone", "email"].find((e) => ty.values[e]?.trim() && !eX(tb, e, ty.values[e] ?? null))),
          (eR[24] = ty.values),
          (eR[25] = tb),
          (eR[26] = w))
        : (w = eR[26])
      let t0 = w
      eR[27] !== ty.values.website || eR[28] !== eZ || eR[29] !== tw || eR[30] !== eK
        ? ((_ = () => {
            let e = eZ?.shopify_verification ?? eZ?.website_verification,
              t = ty.values.website
            if (null == eK || "website" !== tw || null == e || !t?.trim() || eX(eZ, "website", t)) return !1
            try {
              return new URL(e.website).href === new URL((0, q.DX)(t)).href
            } catch {
              return !1
            }
          }),
          (eR[27] = ty.values.website),
          (eR[28] = eZ),
          (eR[29] = tw),
          (eR[30] = eK),
          (eR[31] = _))
        : (_ = eR[31])
      let [t2, t3] = (0, l.useState)(_)
      eR[32] !== ty.values || eR[33] !== eZ || eR[34] !== t0 || eR[35] !== tw || eR[36] !== eK
        ? ((j = () =>
            null != eK &&
            "phone" === tw &&
            (eZ?.contact_verifications.some(
              (e) =>
                e.field === t0 && "verified" !== e.status && e.target === (0, q.Re)(e.field, ty.values[e.field] ?? ""),
            ) ??
              !1)),
          (eR[32] = ty.values),
          (eR[33] = eZ),
          (eR[34] = t0),
          (eR[35] = tw),
          (eR[36] = eK),
          (eR[37] = j))
        : (j = eR[37])
      let [t4, t5] = (0, l.useState)(j),
        [t6, t8] = (0, l.useState)()
      eR[38] !== ty.values || eR[39] !== tb || eR[40] !== t0 || eR[41] !== tw || eR[42] !== eK || eR[43] !== t4
        ? ((C =
            null != eK && "phone" === tw && t4
              ? tb?.contact_verifications.find(
                  (e) =>
                    e.field === t0 &&
                    e.target === (0, q.Re)(e.field, ty.values[e.field] ?? "") &&
                    "pending" === e.status,
                )
              : void 0),
          (eR[38] = ty.values),
          (eR[39] = tb),
          (eR[40] = t0),
          (eR[41] = tw),
          (eR[42] = eK),
          (eR[43] = t4),
          (eR[44] = C))
        : (C = eR[44])
      let t7 = C,
        t9 = t7?.field === "email" && null != t6 && t7.target === t6.target && t7.challenge_id === t6.challenge_id,
        ie = tb?.session_id,
        it = t7?.field,
        ii = t7?.target,
        is = t7?.challenge_id,
        ir = tb?.accepted_revision
      ;(eR[45] !== eE || eR[46] !== ie || eR[47] !== it || eR[48] !== ii || eR[49] !== is || eR[50] !== ir
        ? ((S = ["business-profiles", eE, "creation-contact-delivery", ie, it, ii, is, ir]),
          (eR[45] = eE),
          (eR[46] = ie),
          (eR[47] = it),
          (eR[48] = ii),
          (eR[49] = is),
          (eR[50] = ir),
          (eR[51] = S))
        : (S = eR[51]),
        eR[52] !== t7 || eR[53] !== eK
          ? ((A =
              null == eK || null == t7
                ? H.hT
                : (e) => {
                    let { signal: t } = e
                    return eK.read(t)
                  }),
            (eR[52] = t7),
            (eR[53] = eK),
            (eR[54] = A))
          : (A = eR[54]))
      let ia = null != t7 && !t9 && !t$ && null == tZ
      ;(eR[55] !== t7
        ? ((I = (e) =>
            !!(
              null != t7 &&
              "error" !== e.state.status &&
              e.state.dataUpdateCount < 30 &&
              eJ(e.state.data)?.contact_verifications.some(
                (e) =>
                  e.field === t7.field &&
                  e.target === t7.target &&
                  e.challenge_id === t7.challenge_id &&
                  "pending" === e.status,
              )
            ) && 1e3),
          (eR[55] = t7),
          (eR[56] = I))
        : (I = eR[56]),
        eR[57] !== S || eR[58] !== A || eR[59] !== ia || eR[60] !== I
          ? ((k = {
              queryKey: S,
              queryFn: A,
              enabled: ia,
              retry: !1,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              staleTime: 0,
              gcTime: 0,
              refetchInterval: I,
            }),
            (eR[57] = S),
            (eR[58] = A),
            (eR[59] = ia),
            (eR[60] = I),
            (eR[61] = k))
          : (k = eR[61]))
      let il = (0, Z.I)(k)
      if (eR[62] !== il.data || eR[63] !== tb || eR[64] !== t7) {
        let e = eJ(il.data)
        ;((P =
          null != t7 &&
          e?.session_id === tb?.session_id &&
          e?.contact_verifications.some(
            (e) => e.field === t7.field && e.target === t7.target && e.challenge_id === t7.challenge_id,
          )
            ? e
            : tb),
          (eR[62] = il.data),
          (eR[63] = tb),
          (eR[64] = t7),
          (eR[65] = P))
      } else P = eR[65]
      let io = P
      eR[66] !== io || eR[67] !== ty
        ? ((N =
            "local_business" === ty.businessType && null != io ? JSON.stringify([io.session_id, ...eY(ty)]) : void 0),
          (eR[66] = io),
          (eR[67] = ty),
          (eR[68] = N))
        : (N = eR[68])
      let ic = N,
        id = tR && null != tW && tW.key === ic ? tW.match : void 0,
        iu = (0, q.Cu)(ty),
        ih = iu[iu.indexOf("import" === tw ? "website" : tw) + 1] ?? "type",
        ip = tw === iu.at(-1)
      eR[69] !== ty || eR[70] !== tC || eR[71] !== tw || eR[72] !== tA
        ? ((D = "import" === tw && null != tC && tA ? (0, q.Uh)(ty, tC) : ty),
          (eR[69] = ty),
          (eR[70] = tC),
          (eR[71] = tw),
          (eR[72] = tA),
          (eR[73] = D))
        : (D = eR[73])
      let im = D,
        ib = (0, q.Gk)(im),
        ig = ty.values.category,
        iv = !!ig && (null != eK ? eX(io, "category", ig) : eL?.profileId != null && ig === eL.values.category),
        iy = function (e) {
          return (0, q.J5)(e, ty, iv)
        },
        ix = iy(tw),
        iw = null != eK ? io?.contact_verifications : tr?.contact_verifications,
        [i_, ij] = (0, l.useState)()
      eR[74] !== i_ || eR[75] !== iw
        ? ((R = null == i_ ? iw : [i_]), (eR[74] = i_), (eR[75] = iw), (eR[76] = R))
        : (R = eR[76])
      let iC = R
      eR[77] !== io ||
      eR[78] !== tr?.contact_verifications ||
      eR[79] !== ty.values ||
      eR[80] !== i_?.field ||
      eR[81] !== eK
        ? ((E =
            i_?.field ??
            ["phone", "email"].find((e) => {
              let t = ty.values[e]?.trim()
              return (
                t &&
                !(null != eK
                  ? eX(io, e, t)
                  : tr?.contact_verifications?.some(
                      (i) => i.field === e && "verified" === i.status && i.target === (0, q.Re)(e, t),
                    ))
              )
            })),
          (eR[77] = io),
          (eR[78] = tr?.contact_verifications),
          (eR[79] = ty.values),
          (eR[80] = i_?.field),
          (eR[81] = eK),
          (eR[82] = E))
        : (E = eR[82])
      let iS = E
      eR[83] !== e2 || eR[84] !== eK
        ? ((M = function (e) {
            eK?.throwIfAborted()
            let t = eJ(e)
            if (null == t) throw Error("Creation session is unavailable")
            return (tm(t), e2?.(t.expires_at), t)
          }),
          (eR[83] = e2),
          (eR[84] = eK),
          (eR[85] = M))
        : (M = eR[85])
      let iA = M
      eR[86] !== e1
        ? ((T = function (e) {
            let t = e4(e)
            "expired" === t ? e1?.() : tJ(t)
          }),
          (eR[86] = e1),
          (eR[87] = T))
        : (T = eR[87])
      let iI = T,
        ik = function (e) {
          ;(tV.current?.abort(), tx(e), eK?.savePending(e, tw))
        }
      eR[88] !== iA || eR[89] !== tt || eR[90] !== eK
        ? ((O = function (e) {
            if (null != eK) return void iA(e)
            if ((tt?.throwIfAborted(), null == e.creation)) throw Error("The draft was not saved")
            let t = e.creation,
              i = t.contact_verifications?.find(td)?.resend_available_at
            ;(th((e) =>
              null != i
                ? { profileId: t.business_profile_id, resendAvailableAt: i }
                : e?.profileId === t.business_profile_id
                  ? e
                  : void 0,
            ),
              tu(t),
              tx((t) => ({ ...t, profileId: e.creation?.business_profile_id })))
          }),
          (eR[88] = iA),
          (eR[89] = tt),
          (eR[90] = eK),
          (eR[91] = O))
        : (O = eR[91])
      let iP = O
      eR[92] !== iP || eR[93] !== ty || eR[94] !== iI || eR[95] !== tt || eR[96] !== eK
        ? ((F = function (e, t) {
            return ("email" === e && tQ(void 0),
            "phone" === e && tv({ target: (0, q.Re)("phone", ty.values.phone ?? ""), channel: t }),
            null != eK)
              ? (tP(!0),
                eK
                  .send(e, ty.values[e] ?? "", t)
                  .then((t) => {
                    ;(iP(t),
                      "email" === e &&
                        t8(
                          eJ(t)?.contact_verifications.find(
                            (e) =>
                              "email" === e.field &&
                              "pending" === e.status &&
                              e.target === (0, q.Re)("email", ty.values.email ?? ""),
                          ),
                        ))
                  })
                  .catch((e) => {
                    throw (iI(e), e)
                  })
                  .finally(() => tP(!1)))
              : null == tt
                ? Promise.reject(Error("Contact verification is unavailable"))
                : (tP(!0),
                  tt
                    .save(ty)
                    .then((i) => {
                      if ((iP(i), null == i.creation)) throw Error("The draft was not saved")
                      return tt.send(i.creation.business_profile_id, e, t)
                    })
                    .then(iP)
                    .catch(async (e) => {
                      throw (null != ty.profileId && iP(await tt.read(ty.profileId)), e)
                    })
                    .finally(() => tP(!1)))
          }),
          (eR[92] = iP),
          (eR[93] = ty),
          (eR[94] = iI),
          (eR[95] = tt),
          (eR[96] = eK),
          (eR[97] = F))
        : (F = eR[97])
      let iN = F
      eR[98] !== ty || eR[99] !== eK
        ? ((L = function (e, t) {
            let i = void 0 === t ? ty : t
            ;(tJ(null), t_(e), eK?.savePending(i, e))
          }),
          (eR[98] = ty),
          (eR[99] = eK),
          (eR[100] = L))
        : (L = eR[100])
      let iD = L
      eR[101] !== ty.values.email || eR[102] !== iI || eR[103] !== iN
        ? ((z = async function (e, t) {
            let i = ty.values.email ?? ""
            ;(0, $.g)(e, (0, q.Re)("email", i), t) &&
              (await iN("email", "sms").catch((e) => {
                ;(tQ({ target: i, error: e }), iI(e))
              }))
          }),
          (eR[101] = ty.values.email),
          (eR[102] = iI),
          (eR[103] = iN),
          (eR[104] = z))
        : (z = eR[104])
      let iR = z,
        iE = async function (e, t) {
          iP(e)
          let i = (t) =>
              null != eK
                ? eX(eJ(e), t, ty.values[t] ?? null)
                : (e.creation?.contact_verifications?.some(
                    (e) => e.field === t && "verified" === e.status && e.target === (0, q.Re)(t, ty.values[t] ?? ""),
                  ) ?? !1),
            s = i(t)
          return (
            s &&
              (tJ(null),
              "phone" === tw &&
                ["phone", "email"].every((e) => !ty.values[e]?.trim() || i(e)) &&
                (t5(!1), iD(iu[iu.indexOf(tw) + 1] ?? tw))),
            s &&
              "phone" === t &&
              ty.values.email?.trim() &&
              !i("email") &&
              (ij(iC?.find((e) => "phone" === e.field && e.target === (0, q.Re)("phone", ty.values.phone ?? ""))),
              await iR("email", eJ(e)?.contact_verifications ?? e.creation?.contact_verifications).finally(() =>
                ij(void 0),
              )),
            s
          )
        },
        iM = function (e, t) {
          let i = iC?.find((t) => t.field === e && t.target === (0, q.Re)(e, ty.values[e] ?? ""))
          if (null != eK)
            return i?.challenge_id == null
              ? Promise.resolve(!1)
              : (tP(!0),
                eK
                  .verify(e, i.challenge_id, t)
                  .then((t) => iE(t, e))
                  .catch(async (t) => {
                    if ((iI(t), "expired" !== e4(t) && (await iE(await eK.read(), e)))) return !0
                    throw t
                  })
                  .finally(() => tP(!1)))
          let s = ty.profileId
          return null == tt || null == s || i?.challenge_id == null
            ? Promise.resolve(!1)
            : (tP(!0),
              tt
                .verify(s, e, i.challenge_id, t)
                .then((t) => iE(t, e))
                .catch(async (t) => {
                  if (await iE(await tt.read(s), e)) return !0
                  throw t
                })
                .finally(() => tP(!1)))
        },
        iT = function (e, t) {
          ;(ik("name" === e ? { ...ty, name: t } : { ...ty, values: { ...ty.values, [e]: t } }),
            tJ(null),
            t5(!1),
            t3(!1))
        },
        iW = function (e, t) {
          null == t || iT(e, "clear" === t.operation ? "" : (t.value ?? ""))
        },
        iO = function () {
          if ((tV.current?.abort(), t2)) return void t3(!1)
          if (t4) {
            ;(tm(io), t5(!1))
            return
          }
          "import" === tw ? iD("website") : iD(iu[Math.max(0, iu.indexOf(tw) - 1)] ?? "type")
        },
        iF = async function (e) {
          if (t$) return !1
          ;(tP(!0), tJ(null))
          try {
            if (null != eK) {
              let e = io?.shopify_verification
              ;(e?.status === "pending" && iA(await eK.cancelShopify(e.id)), eK.clear())
            } else if (null != ty.profileId) {
              let e = await tt?.cancel(ty.profileId)
              if (e?.creation?.status !== "cancelled") return (tJ("error"), tP(!1), !1)
              te.invalidateQueries({ queryKey: ["business-profiles", eE, "creations"] })
            }
          } catch {
            return (tJ("error"), tP(!1), !1)
          }
          return (tP(!1), (tY.current = !0), (void 0 === e || e) && eO(), !0)
        }
      eR[105] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = function (e, t) {
            let i = e?.website_verification
            return eX(e, "website", t) && !(i?.test_override && eX(e, "website", i.website) && 1)
          }),
          (eR[105] = ee))
        : (ee = eR[105])
      let iL = ee,
        iU = async function (e) {
          let t = (0, q.DX)(ty.values.website ?? ""),
            i = { ...ty, values: { ...ty.values, website: t } }
          ;(t3(!1), tx(i))
          let s = t && eV?.importWebsite != null ? await eV.importWebsite(t) : null
          ;(e?.throwIfAborted(), eK?.throwIfAborted(), tS(s), tI(!0), iD(null == s ? ih : "import", i))
        },
        iq = async function (e) {
          if (null == eK) throw Error("Website verification is unavailable")
          let t = (0, q.DX)(ty.values.website ?? ""),
            i = await eK.startWebsite(t)
          e?.throwIfAborted()
          let s = eJ(i),
            n = iL(s, t)
          if (!n && !eH(s?.website_verification, t)) throw Error("Website verification is unavailable")
          return (iP(i), n && (await iU(e)), n)
        }
      eR[106] !== eE || eR[107] !== e7
        ? ((ec = function (e, t) {
            return ["business-profiles", eE, e7, "creation-website-discovery", e?.session_id, e?.accepted_revision, t]
          }),
          (eR[106] = eE),
          (eR[107] = e7),
          (eR[108] = ec))
        : (ec = eR[108])
      let i$ = ec,
        iB = async function (e) {
          let t = void 0 !== e && e
          if (e6 || tk || (!t && tF) || null != tV.current) return
          if (!ix) return void tJ("invalid")
          if ((tJ(null), "phone" === tw && null != id)) return void tM({ ...id, claimAttempt: crypto.randomUUID() })
          ;(null == id && tO(void 0), tP(!0), tD(tq && "website" === tU && !t && !!ty.values.website?.trim()))
          let i = new AbortController()
          ;((tV.current = i),
            await (async function (e, t) {
              let i = io,
                s = !1,
                n = ty
              if (null != eK) {
                if ((tm(i), null == ty.businessType)) throw Error("A business type is required")
                if (
                  ((null == i || i.details.business_type !== ty.businessType) &&
                    (i = iA(await eK.start(ty.businessType))),
                  !eX(i, "name", ty.name))
                )
                  try {
                    i = iA(await eK.accept("name", ty.name))
                  } catch (e) {
                    throw (iD("type"), e)
                  }
                if (!e && tq) {
                  let e = ty.values[tU]
                  if (e?.trim()) {
                    tD(!0)
                    let s = "website" === tU ? t : AbortSignal.any([t, AbortSignal.timeout(8e3)]),
                      n = (t) => eK.checkDuplicate(tU, e, t, ty)
                    try {
                      let e =
                        "website" === tU
                          ? await (0, B.A6)({
                              signal: t,
                              isTransient: to,
                              lookup: async (e) => {
                                let t = (await e(n))?.targetIds[0]
                                return null == t
                                  ? null
                                  : {
                                      preparedProfile: await e((e) =>
                                        (0, em.readProfileClaimPreparation)(t, {
                                          accountId: eE,
                                          getAbortSignal: () => e,
                                        }),
                                      ),
                                    }
                              },
                            })
                          : await n(s)
                      if ((s.throwIfAborted(), null != e)) {
                        if ("preparedProfile" in e)
                          return void tM({
                            profileId: e.preparedProfile.business_profile_id,
                            preparedProfile: e.preparedProfile,
                            sessionId: i.session_id,
                            claimAttempt: crypto.randomUUID(),
                          })
                        let t = "website" !== tw,
                          n = await Promise.allSettled(
                            e.targetIds.map((e) =>
                              (0, em.readProfileClaimPreparation)(e, { accountId: eE, getAbortSignal: () => s }),
                            ),
                          )
                        s.throwIfAborted()
                        let r = n.flatMap((e) =>
                          "fulfilled" === e.status &&
                          ((0, em.canSuggestProfileClaim)(e.value, t) ||
                            ("local" === e.value.business_type &&
                              (e.value.can_manage || null != e.value.ownership.current_request)))
                            ? [e.value]
                            : [],
                        )
                        if (r.length > 0 || e.places.length > 0) {
                          let t = tn(ty.name),
                            s = (e) => "" !== t && tn(e.display_name) === t,
                            a = r.filter(s),
                            l = e.places.filter(s),
                            o = a.length + l.length,
                            c = n.every(tl) && o > 0,
                            d = c && 1 === o && !a[0]?.can_manage
                          tM({
                            claimAttempt: d ? crypto.randomUUID() : void 0,
                            profiles: c ? a : r,
                            places: c ? l : e.places,
                            sessionId: i.session_id,
                            decline: e.decline,
                          })
                          return
                        }
                      }
                    } catch (e) {
                      if (
                        (t.throwIfAborted(),
                        eK.throwIfAborted(),
                        "website" === tU &&
                          ((e instanceof Error && "AbortError" === e.name) ||
                            (e instanceof et.fk && [401, 403].includes(e.status))))
                      )
                        throw e
                    }
                    tD(!1)
                  }
                }
                if ("website" === tw && ty.values.website?.trim() && !iL(i, ty.values.website)) {
                  let e = (0, q.DX)(ty.values.website)
                  if (!eH(i.website_verification, e) && !eQ(i, e)) {
                    var r
                    let s = te.getQueryState(i$(i, e)),
                      n = eJ(s?.data),
                      a = G(s?.data?.website_discovery, e)
                    if (
                      eE &&
                      e7 &&
                      i.accepted_revision &&
                      s?.status === "success" &&
                      !s.isInvalidated &&
                      n?.session_id === i.session_id &&
                      n.accepted_revision === i.accepted_revision &&
                      null != (r = a?.expires_at) &&
                      Date.parse(r) > Date.now()
                    )
                      return void t3(!0)
                    t3("preparing")
                    let l = await eK.prepareWebsite(e, t, i)
                    ;(t.throwIfAborted(), eK.throwIfAborted())
                    let o = eJ(l)
                    if ((null != o && iA(l), iL(o, e))) return iU(t)
                    if (!G(l.website_discovery, e) && !eH(o?.website_verification, e) && !eQ(o, e))
                      throw Error("Website verification is unavailable")
                    te.setQueryData(i$(o ?? i, e), l)
                  }
                  t3(!0)
                  return
                }
                if ("phone" === tw) {
                  for (let e of ["phone", "email"])
                    ty.values[e]?.trim() || eX(i, e, null) || (i = iA(await eK.accept(e, null)))
                  let e = ["phone", "email"].find((e) => ty.values[e]?.trim() && !eX(i, e, ty.values[e] ?? null))
                  if (null != e) {
                    ;(await iR(e, i?.contact_verifications), t5(!0))
                    return
                  }
                  t5(!1)
                }
                if ("address" === tw && i.accepted_revision) {
                  let e = ty.values.address ?? null,
                    s = (0, ea.oR)(e, ea.Tq.strict()),
                    n = eX(i, "address", e) ? i.details.coordinates : null,
                    r = null == s ? null : await (0, ef.WZ)(te, s, null != n)
                  if (
                    (t.throwIfAborted(),
                    eK.throwIfAborted(),
                    null != s &&
                      r?.featureId &&
                      r.featureId.length <= 512 &&
                      (r.latitude !== n?.latitude || r.longitude !== n?.longitude) &&
                      ((i = iA(
                        await eK
                          .accept(
                            "address",
                            JSON.stringify({
                              ...s,
                              proposed_location: {
                                source: "mapbox",
                                feature_id: r.featureId,
                                latitude: r.latitude,
                                longitude: r.longitude,
                                address: s,
                                expected_revision: i.accepted_revision,
                              },
                            }),
                          )
                          .catch(async (e) => {
                            throw (e0(e) && iA(await eK.read(t)), e)
                          }),
                      )),
                      t.throwIfAborted(),
                      !eX(i, "address", e)))
                  )
                    throw Error("The creation address was not accepted")
                }
                if ("type" !== tw && "import" !== tw && "phone" !== tw)
                  for (let e of ti[tw]) {
                    let t = ty.values[e] || null
                    eX(i, e, t) || ((i = iA(await ("website" === e ? eK.accept(e, null) : eK.accept(e, t)))), (s = !0))
                  }
              }
              if (null == eK && "phone" === tw && ty.contactVerificationRequired) {
                if (null == tt) throw Error("Contact verification is unavailable")
                let e = await tt.save(ty)
                ;(iP(e), (n = { ...ty, profileId: e.creation?.business_profile_id }))
                let t = ["phone", "email"].find(
                  (t) =>
                    ty.values[t]?.trim() &&
                    !e.creation?.contact_verifications?.some((e) => e.field === t && "verified" === e.status),
                )
                if (t) {
                  ;(await iR(t, e.creation?.contact_verifications), t5(!0))
                  return
                }
                t5(!1)
              }
              if (ip) {
                if (null != eK) {
                  s || (i = iA(await eK.read(t)))
                  let e = iu.find((e) =>
                    "type" === e
                      ? !eX(i, "name", ty.name) || i?.details.business_type !== ty.businessType
                      : "import" !== e &&
                        ("phone" === e
                          ? !eX(i, "phone", ty.values.phone ?? null) || !eX(i, "email", ty.values.email ?? null)
                          : ti[e].some((e) => !eX(i, e, ty.values[e] ?? null))),
                  )
                  if (null != e) {
                    ;(iD(e), tJ("invalid"))
                    return
                  }
                }
                let e = iu.find((e) => !iy(e))
                if (null != e) {
                  ;(iD(e), tJ("invalid"))
                  return
                }
                ;(null != eK ||
                  null == tt ||
                  ("phone" === tw && ty.contactVerificationRequired) ||
                  null == ty.profileId ||
                  iP(await tt.save(ty)),
                  eF(
                    null == i
                      ? n
                      : {
                          name: i.details.name,
                          businessType: i.details.business_type,
                          values: i.details.values,
                          contactVerificationRequired: !0,
                        },
                    i?.accepted_revision,
                  ))
                return
              }
              if ("website" === tw) return void (await iU(t))
              if ("import" === tw) {
                let e = tA && null != tC ? (0, q.Uh)(ty, tC) : ty
                ;(ik(e), iD(ih, e))
                return
              }
              iD(ih)
            })(t, i.signal)
              .catch((e) => {
                i.signal.aborted || (t3(tc), iI(e))
              })
              .finally(() => {
                tV.current === i && ((tV.current = null), tD(!1), tP(!1))
              }))
        }
      eR[109] === Symbol.for("react.memo_cache_sentinel")
        ? ((ex = { address: "address", hours: "hours", delivery: "delivery_policy", returns: "returns_policy" }),
          (eR[109] = ex))
        : (ex = eR[109])
      let iG = ex
      eR[110] !== tw ? ((ew = (e) => e.field_key === iG[tw]), (eR[110] = tw), (eR[111] = ew)) : (ew = eR[111])
      let iz = ib.fields.find(ew)
      eR[112] !== tw
        ? ((e_ = ["category", "phone"].includes(tw) ? tw : "website"), (eR[112] = tw), (eR[113] = e_))
        : (e_ = eR[113])
      let iV = e_
      if (eR[114] !== iC || eR[115] !== ty.values.email) {
        let e = iC?.find((e) => "email" === e.field && e.target === (0, q.Re)("email", ty.values.email ?? ""))?.status
        ;((ej = (0, eM.a)(e)), (eR[114] = iC), (eR[115] = ty.values.email), (eR[116] = ej))
      } else ej = eR[116]
      let iK = ej,
        iJ = t4 && "email" === iS,
        iH = iC?.find((e) => "phone" === e.field && e.target === (0, q.Re)("phone", ty.values.phone ?? ""))?.status,
        iQ = eP.W.delivery_method
      if (
        ("sent" === iH ? (iQ = eP.W.code) : "pending" === iH && (iQ = eP.W.verifyContactTarget),
        eR[117] !== iS || eR[118] !== iQ || eR[119] !== iJ || eR[120] !== tw || eR[121] !== t4
          ? ((eC = eP.W[tw]),
            iJ ? (eC = eP.W.verifyContactTarget) : t4 && "phone" === iS && (eC = iQ),
            (eR[117] = iS),
            (eR[118] = iQ),
            (eR[119] = iJ),
            (eR[120] = tw),
            (eR[121] = t4),
            (eR[122] = eC))
          : (eC = eR[122]),
        eR[123] !== ty.values.phone)
      ) {
        let e = (0, X.l)(ty.values.phone ?? "", "US")
        ;((eS = e?.countryCallingCode === "1" ? e.formatNational() : (e?.formatInternational() ?? ty.values.phone)),
          (eR[123] = ty.values.phone),
          (eR[124] = eS))
      } else eS = eR[124]
      let iZ = eS,
        iX = t4 && "phone" === iS && iQ === eP.W.verifyContactTarget
      eR[125] !== ty.values.phone || eR[126] !== tg || eR[127] !== eK
        ? ((eA =
            tg?.target === (0, q.Re)("phone", ty.values.phone ?? "")
              ? tg.channel
              : eK?.pendingPhoneDelivery(ty.values.phone ?? "")),
          (eR[125] = ty.values.phone),
          (eR[126] = tg),
          (eR[127] = eK),
          (eR[128] = eA))
        : (eA = eR[128])
      let iY = eA,
        i1 = ip ? eP.W.submit : eP.W.continue
      eR[129] !== iV || eR[130] !== tw
        ? ((eI = (e) =>
            e.field_key === iV ||
            ("category" === tw && "description" === e.field_key) ||
            ("phone" === tw && "email" === e.field_key)),
          (eR[129] = iV),
          (eR[130] = tw),
          (eR[131] = eI))
        : (eI = eR[131])
      let i0 = { ...ib, fields: ib.fields.filter(eI) },
        i2 = null
      if (null != tT && null != eE) {
        let e
        eR[132] !== tT || eR[133] !== tF || eR[134] !== ic || eR[135] !== tw
          ? ((e = (e) => {
              ;("phone" === tw &&
                tF &&
                null != ic &&
                tO({ key: ic, match: e ? { sessionId: tT.sessionId, profileId: e } : tT }),
                tM(void 0))
            }),
            (eR[132] = tT),
            (eR[133] = tF),
            (eR[134] = ic),
            (eR[135] = tw),
            (eR[136] = e))
          : (e = eR[136])
        let t = e
        if ("profileId" in tT) {
          let e, i
          ;(eR[137] !== tT.sessionId || eR[138] !== eK
            ? ((e = () => eK?.clear(tT.sessionId)), (eR[137] = tT.sessionId), (eR[138] = eK), (eR[139] = e))
            : (e = eR[139]),
            eR[140] !== eE ||
            eR[141] !== tG ||
            eR[142] !== t ||
            eR[143] !== tT.claimAttempt ||
            eR[144] !== tT.preparedProfile ||
            eR[145] !== tT.profileId ||
            eR[146] !== eO ||
            eR[147] !== e
              ? ((i = (0, s.jsx)(
                  ep.CanonicalProfileClaim,
                  {
                    accountId: eE,
                    profileId: tT.profileId,
                    preparedProfile: tT.preparedProfile,
                    selectionQueryKey: tG,
                    showLoadingDialog: !1,
                    telemetryEntryPoint: "creation_duplicate",
                    onCreationClaimApproved: e,
                    onCloseAfterApproval: eO,
                    onClose: t,
                  },
                  tT.claimAttempt,
                )),
                (eR[140] = eE),
                (eR[141] = tG),
                (eR[142] = t),
                (eR[143] = tT.claimAttempt),
                (eR[144] = tT.preparedProfile),
                (eR[145] = tT.profileId),
                (eR[146] = eO),
                (eR[147] = e),
                (eR[148] = i))
              : (i = eR[148]),
            (i2 = i))
        } else {
          let e, i, n, r, a, l
          if (
            eR[149] !== ty.values.address ||
            eR[150] !== tT.claimAttempt ||
            eR[151] !== tT.places ||
            eR[152] !== tT.profiles
          ) {
            let t = (0, ea.oR)(ty.values.address ?? null, ea.Tq)
            ;((e = eD),
              (i = tT.claimAttempt),
              (n = tT.profiles),
              (r = tT.places),
              (a = t ? (0, ea.dT)(t) : void 0),
              (eR[149] = ty.values.address),
              (eR[150] = tT.claimAttempt),
              (eR[151] = tT.places),
              (eR[152] = tT.profiles),
              (eR[153] = e),
              (eR[154] = i),
              (eR[155] = n),
              (eR[156] = r),
              (eR[157] = a))
          } else ((e = eR[153]), (i = eR[154]), (n = eR[155]), (r = eR[156]), (a = eR[157]))
          ;(eR[158] !== tT.sessionId || eR[159] !== eK
            ? ((l = () => eK?.clear(tT.sessionId)), (eR[158] = tT.sessionId), (eR[159] = eK), (eR[160] = l))
            : (l = eR[160]),
            (i2 = (0, s.jsx)(
              e,
              {
                profiles: n,
                places: r,
                matchedAddress: a,
                preparedProfile: tF && null == id ? tT.profiles[0] : void 0,
                selectionQueryKey: tF ? tG : void 0,
                accountId: eE,
                onClaimApproved: l,
                onClose: t,
                onCloseAfterApproval: eO,
                onContinueCreation: (e, t) => {
                  null != id && null != t
                    ? tM({ sessionId: tT.sessionId, profileId: t, claimAttempt: crypto.randomUUID() })
                    : (tM(void 0), "unavailable" === e && null != id)
                      ? tJ("error")
                      : ("declined" === e && tT.decline(), iB(!0))
                },
              },
              i,
            )))
        }
      }
      eR[161] !== iS ||
      eR[162] !== iK ||
      eR[163] !== iQ ||
      eR[164] !== iJ ||
      eR[165] !== tw ||
      eR[166] !== t4 ||
      eR[167] !== t2
        ? ((ek = tw),
          t2
            ? (ek = "website-verification")
            : iJ
              ? (ek = "code" === iK ? "code" : `email-${iK}`)
              : t4 && "phone" === iS && (ek = iQ === eP.W.code ? "code" : iQ.id),
          (eR[161] = iS),
          (eR[162] = iK),
          (eR[163] = iQ),
          (eR[164] = iJ),
          (eR[165] = tw),
          (eR[166] = t4),
          (eR[167] = t2),
          (eR[168] = ek))
        : (ek = eR[168])
      let i3 = (e, t) => {
        let { dns: i, description: n } = void 0 === t ? {} : t,
          r = void 0 !== i && i
        return (0, s.jsxs)(eU, {
          manager: ib,
          stepKey: r ? "website-dns" : ek,
          showHeading: !r,
          description: n,
          busy: t$ && null == eG,
          pendingVerification: iX,
          title:
            iJ && "code" === iK
              ? (0, s.jsx)(eb.k, { step: iK, destination: ty.values.email ?? void 0 })
              : (0, s.jsx)(d.A, {
                  ...eC,
                  values: {
                    name: (0, s.jsx)("bdi", { children: ty.name }, "name"),
                    target: (0, s.jsx)(
                      "bdi",
                      { className: "wrap-anywhere", children: iJ ? ty.values.email : iZ },
                      "target",
                    ),
                    phone: (0, s.jsx)(
                      "bdi",
                      { className: eC === eP.W.code ? "block whitespace-nowrap" : "whitespace-nowrap", children: iZ },
                      "phone",
                    ),
                  },
                }),
          onCancel: () => {
            null != eG ? (eK?.clear(), eO()) : t$ || tX("draft")
          },
          showPreview: "type" !== tw,
          footer: "type" === tw ? (0, s.jsx)(ed, { inDialog: !0 }) : null,
          children: [
            (0, s.jsx)(eo.L, {
              discardCreation: !0,
              busy: t$ && null == eG,
              dirty: null == eG,
              onDiscard: () => iF(!1),
              errorMessage: t1,
              allowNavigation: () => tY.current || !!ez?.(),
              blockSearchChanges: !0,
            }),
            "type" !== tw || null == eK || null != eG || eK.isNameFirst()
              ? null
              : (0, s.jsx)(ei.c, {
                  draftOnly: !0,
                  manager: { ...ib, fields: ib.fields.filter(ta) },
                  drafts: {},
                  onDraftChange: iW,
                }),
            "type" === tw && eK?.isNameFirst() && null != tK
              ? (0, s.jsx)(b.$, {
                  color: "secondary",
                  disabled: t$,
                  onClick: () => {
                    iF()
                  },
                  children: (0, s.jsx)(d.A, { ...eP.W.changeName }),
                })
              : null,
            "type" === tw
              ? (0, s.jsx)(Y.t, {
                  variant: "outlined",
                  dividers: !1,
                  children: ["local_business", "ecommerce"].map((e) =>
                    (0, s.jsxs)(
                      "button",
                      {
                        type: "button",
                        "aria-busy": tk && ty.businessType === e,
                        disabled: t$ || (null != eK && !ty.name.trim()),
                        className:
                          "relative flex w-full items-center gap-4 px-4 py-4 text-start after:pointer-events-none after:absolute after:start-14 after:end-4 after:bottom-0 after:h-px after:bg-border-subtle last:after:hidden hover:bg-secondary-ghost-hover disabled:cursor-default disabled:opacity-50",
                        onClick: () => {
                          let t = { ...ty, businessType: e }
                          if ((tx(t), null != eK)) {
                            ;(tP(!0), tJ(null))
                            let i = eG?.() ?? eK.start(eK.isNameFirst() ? null : e)
                            ;(null == eG && eK.savePending(t, "type"),
                              i
                                .then(async (i) => {
                                  let s = iA(i)
                                  if (
                                    eK.isNameFirst() &&
                                    null != s.details.business_type &&
                                    s.details.business_type !== e
                                  ) {
                                    let e = eK.start(null, { replacedSessionId: s.session_id, name: t.name })
                                    ;(eK.savePending(t, "type"), (s = iA(await e)))
                                  }
                                  ;(eX(s, "name", t.name) || iA(await eK.accept("name", t.name)),
                                    null == s.details.business_type && iA(await eK.start(e)),
                                    t_("website"),
                                    eK.savePending(t, "website"))
                                })
                                .catch(iI)
                                .finally(() => tP(!1)))
                          } else iD("website")
                        },
                        children: [
                          "local_business" === e && (0, s.jsx)(W.I, { asset: K }),
                          "ecommerce" === e && (0, s.jsx)(W.I, { asset: V }),
                          (0, s.jsxs)("span", {
                            className: "flex min-w-0 flex-1 flex-col",
                            children: [
                              (0, s.jsx)("span", {
                                className: "text-base",
                                children: (0, s.jsx)(d.A, {
                                  id: "businessProfiles.creation.type.option.label",
                                  defaultMessage:
                                    "{type, select, local_business {At a physical location} ecommerce {Through an online store} other {Through a service}}",
                                  description:
                                    "Business profile creation type options. Physical location is for customers visiting the business; online store is for online retail; service is for visiting customers or remote work.",
                                  values: { type: e },
                                }),
                              }),
                              (0, s.jsx)("span", {
                                className: "text-sm text-secondary",
                                children: (0, s.jsx)(d.A, {
                                  id: "businessProfiles.creation.type.option.description",
                                  defaultMessage:
                                    "{type, select, local_business {Customers visit a store, restaurant, office, or other location.} ecommerce {Customers buy from your website or marketplace.} other {You visit customers or provide services remotely.}}",
                                  description:
                                    "Supporting descriptions under the three business profile creation type choices. Type selects the relevant explanation.",
                                  values: { type: e },
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)(g.uM3, {}),
                        ],
                      },
                      e,
                    ),
                  ),
                })
              : null,
            "type" === tw && null != tK
              ? (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, s.jsx)(d.A, { ...eP.W[tK] }),
                })
              : null,
            e,
            "type" !== tw && t4 && null != iS
              ? (0, s.jsx)(
                  ev.a,
                  {
                    field: iS,
                    showInstructions: !1,
                    target: ty.values[iS] ?? "",
                    resendAvailableAt:
                      iC?.find((e) => e.field === iS)?.resend_available_at ??
                      ("phone" === iS && tf?.profileId === tr?.business_profile_id ? tf?.resendAvailableAt : void 0),
                    verification: iC?.find((e) => e.field === iS && e.target === (0, q.Re)(iS, ty.values[iS] ?? "")),
                    busy: t$,
                    initialSendError: "email" === iS && tH?.target === ty.values.email ? tH?.error : void 0,
                    onSend: (e) => iN(iS, e),
                    onBack: iO,
                    retryChannel: iY,
                    onVerify: (e) => iM(iS, e),
                    onCheck: () =>
                      null != eK
                        ? (tP(!0),
                          eK
                            .read()
                            .then(iP)
                            .catch((e) => {
                              throw (iI(e), e)
                            })
                            .finally(() => tP(!1)))
                        : null == tt || null == ty.profileId
                          ? Promise.resolve()
                          : (tP(!0),
                            tt
                              .read(ty.profileId)
                              .then(iP)
                              .finally(() => tP(!1))),
                  },
                  `${iS}:${ty.values[iS]}:${iC?.find((e) => e.field === iS)?.challenge_id ?? "new"}:${iC?.find((e) => e.field === iS)?.resend_available_at ?? ""}`,
                )
              : null,
            "type" === tw || t2 || (t4 && null != iS)
              ? null
              : (0, s.jsxs)("form", {
                  noValidate: !0,
                  className: "flex flex-1 flex-col gap-6 sm:flex-none",
                  onSubmit: (e) => {
                    ;(e.preventDefault(), iB())
                  },
                  children: [
                    (0, s.jsxs)("fieldset", {
                      disabled: t$ && !("website" === tw && tL),
                      className: "m-0 flex min-w-0 flex-col gap-6 border-0 p-0",
                      children: [
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            "website" === tw || "phone" === tw
                              ? (0, s.jsx)(en.Z, {
                                  draftOnly: !0,
                                  manager: i0,
                                  drafts: {},
                                  onDraftChange: iW,
                                  websiteReadOnly: tL,
                                  websiteError:
                                    "website" === tw && ty.values.website?.trim() && !ix
                                      ? (0, s.jsx)(d.A, { ...er.f.invalidWebsite })
                                      : void 0,
                                })
                              : null,
                            "category" === tw
                              ? (0, s.jsx)(ei.c, {
                                  draftOnly: !0,
                                  manager: i0,
                                  drafts: {},
                                  onDraftChange: iW,
                                  creationSuggestions: { accountId: eE, scope: tj, draft: ty },
                                })
                              : null,
                            "hours" === tw && null != iz
                              ? (0, s.jsx)(el.O, {
                                  draftOnly: !0,
                                  profileId: "",
                                  field: iz,
                                  timezone: ib.timezone,
                                  draft: void 0,
                                  onDraftChange: (e) => iW("hours", e),
                                })
                              : null,
                            "address" === tw && null != iz
                              ? (0, s.jsx)(eu.g, {
                                  draftOnly: !0,
                                  profileId: "",
                                  field: iz,
                                  draft: void 0,
                                  onDraftChange: (e) => iW("address", e),
                                })
                              : null,
                            ("delivery" === tw || "returns" === tw) && null != iz
                              ? (0, s.jsx)(eh.B, {
                                  draftOnly: !0,
                                  profileId: "",
                                  field: iz,
                                  currency: ib.policy_currency,
                                  draft: void 0,
                                  onDraftChange: (e) => iW(iz.field_key, e),
                                })
                              : null,
                          ],
                        }),
                        "import" === tw
                          ? (0, s.jsxs)(Y.t, {
                              variant: "outlined",
                              children: [
                                (0, s.jsx)(es.t, {
                                  value: "yes",
                                  id: "creation-import-yes",
                                  name: "creation-import",
                                  checked: tA,
                                  onChange: () => tI(!0),
                                  ariaLabel: e8.formatMessage(eP.W.importYes),
                                  label: (0, s.jsx)(d.A, { ...eP.W.importYes }),
                                  description: (0, s.jsx)(d.A, {
                                    id: "businessProfiles.creation.import.help",
                                    defaultMessage: "We’ll use these details to help set up your business profile.",
                                    description:
                                      "Explanation beneath the option to accept website-imported business details during creation.",
                                  }),
                                }),
                                (0, s.jsx)(es.t, {
                                  value: "no",
                                  id: "creation-import-no",
                                  name: "creation-import",
                                  checked: !tA,
                                  onChange: () => tI(!1),
                                  ariaLabel: e8.formatMessage(eP.W.importNo),
                                  label: (0, s.jsx)(d.A, { ...eP.W.importNo }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    null != tK
                      ? (0, s.jsx)("p", {
                          role: "alert",
                          className: "text-sm text-danger",
                          children: (0, s.jsx)(d.A, { ...eP.W[tK] }),
                        })
                      : null,
                    null == eK && "error" === tK && "website" === tw
                      ? (0, s.jsx)(b.$, {
                          type: "button",
                          color: "secondary",
                          disabled: t$,
                          onClick: () => iD(ih),
                          children: (0, s.jsx)(d.A, {
                            id: "businessProfiles.creation.import.manual.label",
                            defaultMessage: "Set up manually",
                            description:
                              "Recovery action after an optional website import fails during business profile creation. Keeps the entered website and continues to manual business details.",
                          }),
                        })
                      : null,
                    (0, s.jsxs)("div", {
                      className:
                        "sticky bottom-0 mt-auto flex flex-wrap items-start gap-2 bg-surface-card pt-6 sm:static sm:mt-0 sm:pt-0",
                      children: [
                        (0, s.jsx)(b.$, {
                          ...ts,
                          type: "button",
                          color: "outlineGhost",
                          size: "formAction",
                          disabled: e6 || (tk && !tN),
                          onClick: (e) => {
                            tL
                              ? (tV.current?.abort(),
                                (tV.current = null),
                                (0, o.flushSync)(() => {
                                  ;(tD(!1), tP(!1), tM(void 0))
                                }),
                                e.currentTarget.form?.querySelector(`#business-${tw}`)?.focus())
                              : iO()
                          },
                          children: (0, s.jsx)(d.A, { ...eP.W.back }),
                        }),
                        (0, s.jsx)(eg.C, {
                          ...ts,
                          type: "submit",
                          size: "formAction",
                          disabled: t$ || !ix,
                          disabledAppearance: tL ? "unchanged" : "dimmed",
                          pending: t$,
                          sizingLabels: tq ? e8.formatMessage(i1) : void 0,
                          "aria-busy": t$,
                          "aria-label": e8.formatMessage(i1),
                          children: (0, s.jsx)(d.A, { ...i1 }),
                        }),
                      ],
                    }),
                  ],
                }),
            null != tZ
              ? (0, s.jsx)(U.C, {
                  kind: "discard",
                  busy: t$,
                  onClose: () => tX(null),
                  onConfirm: () => void iF(),
                  errorMessage: t1,
                })
              : null,
          ],
        })
      }
      if ("website" === tw && t2 && null != eK) {
        let e,
          t,
          i,
          n,
          r,
          a,
          l = ty.values.website ?? ""
        ;(eR[169] !== l ? ((e = (0, q.DX)(l)), (eR[169] = l), (eR[170] = e)) : (e = eR[170]),
          eR[171] !== io || eR[172] !== ty.values.website || eR[173] !== i$
            ? ((t = i$(io, (0, q.DX)(ty.values.website ?? ""))),
              (eR[171] = io),
              (eR[172] = ty.values.website),
              (eR[173] = i$),
              (eR[174] = t))
            : (t = eR[174]))
        let o = ty.values.website ?? ""
        return (
          eR[175] !== o ? ((i = (0, q.DX)(o)), (eR[175] = o), (eR[176] = i)) : (i = eR[176]),
          eR[177] !== ty.values.website || eR[178] !== iI || eR[179] !== eK
            ? ((n = (e) =>
                eK.discoverWebsite((0, q.DX)(ty.values.website ?? ""), e).catch((e) => {
                  throw ("expired" === e4(e) && iI(e), e)
                })),
              (eR[177] = ty.values.website),
              (eR[178] = iI),
              (eR[179] = eK),
              (eR[180] = n))
            : (n = eR[180]),
          eR[181] !== iA || eR[182] !== io || eR[183] !== ty || eR[184] !== iI || eR[185] !== eK
            ? ((r = async (e, t) => {
                if (null == io) throw Error("Creation session is unavailable")
                return (
                  tP(!0),
                  (async () => {
                    eK.preserveWebsiteHandoff(ty)
                    let i = await eK.startShopify(e, t),
                      s = (function (e, t, i) {
                        let s = e.session ?? e.name_first_session,
                          n = s?.shopify_verification
                        if (
                          s?.session_id !== t ||
                          n?.status !== "pending" ||
                          new URL(n.website).href !== new URL(i).href ||
                          !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.myshopify\.com$/.test(n.myshopify_domain) ||
                          !Number.isFinite(Date.parse(n.expires_at)) ||
                          Date.parse(n.expires_at) <= Date.now() ||
                          null == e.oauth_url ||
                          e.oauth_url.length > 8192
                        )
                          throw Error("Shopify verification changed")
                        let r = new URL(e.oauth_url)
                        if (
                          ![
                            "https://connect.ads.openai.com",
                            "https://ads-manager-shopify.gateway.unified-0s.internal.api.openai.org",
                          ].includes(r.origin) ||
                          "/auth/business-profile/start" !== r.pathname ||
                          r.username ||
                          r.password ||
                          r.hash ||
                          1 !== r.searchParams.getAll("flow_id").length ||
                          r.searchParams.get("flow_id") !== n.id ||
                          1 !== r.searchParams.getAll("shop").length ||
                          r.searchParams.get("shop") !== n.myshopify_domain
                        )
                          throw Error("Shopify verification cannot start")
                        return r.href
                      })(i, io.session_id, (0, q.DX)(ty.values.website ?? ""))
                    ;(iA(i),
                      eK.preserveWebsiteHandoff(ty),
                      t.throwIfAborted(),
                      eK.throwIfAborted(),
                      window.location.assign(s))
                  })()
                    .catch(async (e) => {
                      if (!t.aborted) {
                        try {
                          iA(await eK.read(t))
                        } catch {}
                        iI(e)
                      }
                      throw e
                    })
                    .finally(() => tP(!1))
                )
              }),
              (eR[181] = iA),
              (eR[182] = io),
              (eR[183] = ty),
              (eR[184] = iI),
              (eR[185] = eK),
              (eR[186] = r))
            : (r = eR[186]),
          eR[187] !== iA || eR[188] !== iI || eR[189] !== eK
            ? ((a = (e, t) => (
                tP(!0),
                eK
                  .cancelShopify(e, t)
                  .then((e) => {
                    iA(e)
                  })
                  .catch((e) => {
                    throw (iI(e), e)
                  })
                  .finally(() => tP(!1))
              )),
              (eR[187] = iA),
              (eR[188] = iI),
              (eR[189] = eK),
              (eR[190] = a))
            : (a = eR[190]),
          (0, s.jsx)(
            e9,
            {
              queryKey: t,
              acceptedSession: io,
              renderStep: i3,
              preparing: "preparing" === t2,
              website: i,
              verification: io?.website_verification,
              busy: t$,
              onDiscover: n,
              onStartShopify: r,
              onCancelShopify: a,
              onStart: async () => {
                ;(tP(!0),
                  await iq()
                    .catch((e) => {
                      throw (iI(e), e)
                    })
                    .finally(() => tP(!1)))
              },
              onCheck: (e) => {
                tP(!0)
                let t = (t) => {
                  let i = eJ(t)?.website_verification
                  if (i?.challenge_id !== e) throw Error("DNS challenge changed")
                  let s = iA(t)
                  return "verified" === i.status && eX(s, "website", i.website) && iL(s, ty.values.website ?? "")
                }
                return eK
                  .checkWebsite(e)
                  .then(t)
                  .catch(async (e) => {
                    try {
                      if (t(await eK.read())) return !0
                    } catch {}
                    throw e
                  })
                  .then(async (e) => {
                    e && (await iU())
                  })
                  .catch((e) => {
                    throw (iI(e), e)
                  })
                  .finally(() => tP(!1))
              },
              onBack: iO,
            },
            `${io?.session_id}:${e}`,
          )
        )
      }
      let i4 = null == i2 || tz?.isPending ? i3() : null
      return (
        eR[191] !== i2 || eR[192] !== i4
          ? ((eN = (0, s.jsxs)(s.Fragment, { children: [i4, i2] })), (eR[191] = i2), (eR[192] = i4), (eR[193] = eN))
          : (eN = eR[193]),
        eN
      )
    }
    function ta(e) {
      return "name" === e.field_key
    }
    function tl(e) {
      return "fulfilled" === e.status
    }
    function to(e) {
      return e instanceof Error && "AbortError" !== e.name && (0, ee.$)(e)
    }
    function tc(e) {
      return "preparing" !== e && e
    }
    function td(e) {
      return "phone" === e.field
    }
    var tu = i("RNul"),
      tf = i("f0dk"),
      th = i("u9lE"),
      tp = i("mRB3"),
      tm = i("EnWC")
    function tb(e) {
      let t,
        i,
        r,
        a = (0, n.c)(15),
        { draft: l, status: o, onComplete: c, onCancelSubmission: u, onCheckStatus: f, onExit: h, busy: p } = e
      return (
        a[0] !== p || a[1] !== l || a[2] !== u || a[3] !== o
          ? ((t =
              "under_review" === o
                ? (0, s.jsx)(eW.k, {
                    order: 1,
                    children: (0, s.jsx)(th.hp, {
                      receivedTitle: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creation.pending.received.title",
                        defaultMessage: "Submission received",
                        description: "First completed status in a confirmed pending business profile creation review.",
                      }),
                      receivedDescription:
                        null == u
                          ? (0, s.jsx)(d.A, {
                              id: "businessProfiles.creation.pending.received.description",
                              defaultMessage: "We received your submission for {name}.",
                              description:
                                "Acknowledgement shown only after the creation service confirms receipt. Name is the submitted business name.",
                              values: { name: l.name },
                            })
                          : (0, s.jsx)(th.Vj, { kind: "submission", name: l.name, onWithdraw: u, disabled: p }),
                      reviewTitle: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creation.pending.review.title",
                        defaultMessage: "Review in progress",
                        description: "Current status while a submitted business profile is awaiting a decision.",
                      }),
                      reviewDescription: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creation.pending.review.description",
                        defaultMessage: "We’re checking the business information you provided.",
                        description:
                          "Explanation of pending review for a submitted business profile; the profile is not approved yet.",
                      }),
                      decisionTitle: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creation.pending.decision.title",
                        defaultMessage: "Decision reached",
                        description: "Future, incomplete status in the business profile creation review checklist.",
                      }),
                      decisionDescription: (0, s.jsx)(d.A, {
                        id: "businessProfiles.creation.pending.decision.privateDescription",
                        defaultMessage: "We’ll update your verification status here. Your profile stays private.",
                        description:
                          "Explains where to find the server-owned review result and that the creation pilot does not publish the business profile.",
                      }),
                    }),
                  })
                : null),
            (a[0] = p),
            (a[1] = l),
            (a[2] = u),
            (a[3] = o),
            (a[4] = t))
          : (t = a[4]),
        a[5] !== p || a[6] !== l || a[7] !== f || a[8] !== c || a[9] !== h || a[10] !== o
          ? ((i =
              "approved" === o && null != c
                ? (0, s.jsxs)(th.Um, {
                    manageLabel: (0, s.jsx)(d.A, { ...eP.W.manage }),
                    onManage: () => c(),
                    children: [
                      (0, s.jsx)(th.xK, {
                        onClick: () => c("ecommerce" === l.businessType ? "products" : "edit/hours"),
                        label: (0, s.jsx)(d.A, {
                          id: "businessProfiles.creation.approved.next.label",
                          defaultMessage: "{online, select, yes {Add products} other {Confirm business hours}}",
                          description:
                            "First recommendation after confirmed business creation approval. Online retailers can open product feeds when enabled; local businesses can check opening hours.",
                          values: { online: "ecommerce" === l.businessType ? "yes" : "no" },
                        }),
                        description: (0, s.jsx)(d.A, {
                          id: "businessProfiles.creation.approved.next.description",
                          defaultMessage:
                            "{online, select, yes {Show customers what you sell} other {Show customers what to expect}}",
                          description:
                            "Supporting copy for the first recommended action after business creation approval, selected by whether the business is an online retailer.",
                          values: { online: "ecommerce" === l.businessType ? "yes" : "no" },
                        }),
                      }),
                      (0, s.jsx)(th.xK, {
                        onClick: () => c("edit/about"),
                        label: (0, s.jsx)(d.A, {
                          id: "businessProfiles.creation.approved.about.label",
                          defaultMessage: "Edit your business description",
                          description:
                            "Recommendation after confirmed business creation approval that opens the existing About editor.",
                        }),
                        description: (0, s.jsx)(d.A, {
                          id: "businessProfiles.creation.approved.about.description",
                          defaultMessage: "Tell customers what makes {name} unique",
                          description:
                            "Supporting copy for the description-editing recommendation after confirmed approval. Name is the business name.",
                          values: { name: l.name },
                        }),
                      }),
                    ],
                  })
                : (0, s.jsxs)(eW.k, {
                    className: "flex flex-wrap gap-2",
                    order: 3,
                    children: [
                      "approved" === o
                        ? (0, s.jsx)(b.$, {
                            type: "button",
                            size: "formAction",
                            radius: "full",
                            onClick: h,
                            children: (0, s.jsx)(d.A, { ...eP.W.backToChat }),
                          })
                        : null,
                      "under_review" === o && null != f
                        ? (0, s.jsx)(b.$, {
                            type: "button",
                            color: "secondary",
                            size: "formAction",
                            radius: "full",
                            disabled: p,
                            onClick: f,
                            children: (0, s.jsx)(d.A, { ...eP.W.checkStatus }),
                          })
                        : null,
                    ],
                  })),
            (a[5] = p),
            (a[6] = l),
            (a[7] = f),
            (a[8] = c),
            (a[9] = h),
            (a[10] = o),
            (a[11] = i))
          : (i = a[11]),
        a[12] !== t || a[13] !== i
          ? ((r = (0, s.jsxs)(s.Fragment, { children: [t, i] })), (a[12] = t), (a[13] = i), (a[14] = r))
          : (r = a[14]),
        r
      )
    }
    var tg = i("K5Tp")
    function tv(e) {
      let t,
        i,
        r,
        a,
        o,
        c,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        x,
        w,
        _,
        j,
        C,
        S,
        A,
        I,
        k,
        P,
        N,
        D,
        R,
        E,
        M,
        T,
        W,
        O,
        F,
        L,
        $,
        B,
        G,
        z,
        V,
        K,
        Q,
        X,
        Y,
        ee,
        ei,
        es,
        en,
        er,
        ea = (0, n.c)(307),
        {
          accountId: el,
          contactVerificationEnabled: ec,
          userId: ed,
          profileId: eu,
          draft: ef,
          onPersist: eh,
          onCancel: ep,
          onEdit: em,
          onComplete: eb,
          completedCreation: eg,
          shopifyRouting: ey,
          onPublishedCreation: ex,
        } = e,
        ew = (0, J.jE)(),
        [e_, ej] = (0, l.useState)(eg),
        [eC, eS] = (0, l.useState)(null),
        [eA, eI] = (0, u.ok)()
      ea[0] !== el ? ((t = () => (0, eB.Y)(el)), (ea[0] = el), (ea[1] = t)) : (t = ea[1])
      let [ek] = (0, l.useState)(t)
      ;(ea[2] !== ek
        ? ((i = () => ek.attach()), (r = [ek]), (ea[2] = ek), (ea[3] = i), (ea[4] = r))
        : ((i = ea[3]), (r = ea[4])),
        (0, l.useEffect)(i, r))
      let [eN, eD] = (0, l.useState)(),
        eR = (0, l.useRef)(eu ?? ef?.profileId),
        eE = (0, l.useRef)(!1),
        eM = eu ?? eN?.creation?.business_profile_id ?? ef?.profileId,
        [eT, eW] = (0, l.useState)(!1),
        [eO, eF] = (0, l.useState)(!1),
        [eL, eq] = (0, l.useState)(!1),
        [e$, eG] = (0, l.useState)(null),
        [ez, eV] = (0, l.useState)(null),
        eK = null != ey && null != ex,
        eJ = (0, l.useRef)(null),
        [eH, eQ] = (0, l.useState)(!1),
        [eZ, eX] = (0, l.useState)(!1),
        eY = null != ef && null == (0, q.Rw)(ef, void 0, ec),
        e1 = eM ?? ek.submissionKey
      ;(ea[5] !== el || ea[6] !== e1 || ea[7] !== ed
        ? ((a = ["business-profiles", el, "creation", ed, e1]), (ea[5] = el), (ea[6] = e1), (ea[7] = ed), (ea[8] = a))
        : (a = ea[8]),
        ea[9] !== eT || ea[10] !== ez || ea[11] !== eK || ea[12] !== eA
          ? ((o = (e) =>
              !!(
                ("1" !== eA.get("created") || eK) &&
                (!eK ||
                  (e.state.data?.creation?.published !== !0 &&
                    e.state.data?.creation?.canonical_target?.disposition !== "existing_profile")) &&
                !eT &&
                null == ez &&
                "error" !== e.state.status &&
                e.state.data?.creation?.is_draft !== !0 &&
                (e.state.data?.creation?.status !== "under_review" ||
                  e.state.data?.creation?.canonical_target?.disposition !== "existing_profile") &&
                (["pending", "under_review"].includes(e.state.data?.creation?.status ?? "") ||
                  (eK && e.state.data?.creation?.status === "approved"))
              ) && 5e3),
            (ea[9] = eT),
            (ea[10] = ez),
            (ea[11] = eK),
            (ea[12] = eA),
            (ea[13] = o))
          : (o = ea[13]))
      let {
          data: e0,
          isError: e2,
          isFetchedAfterMount: e3,
          refetch: e4,
        } = (0, Z.I)({
          queryKey: a,
          queryFn:
            null != eM || eY
              ? async (e) => {
                  let { signal: t } = e
                  if (null != ef && null == eN) {
                    if (null != eM) {
                      let e = await ek.read(eM, t)
                      if (null != e.creation && (!0 !== e.creation.is_draft || "pending" !== e.creation.status))
                        return (tA(e, !0), e)
                      if (null != (0, q.Rw)(ef, e.creation, ec)) return e
                    }
                    return tI(ef)
                  }
                  if (null == eM) throw Error("A business profile is required")
                  return await ek.read(eM, t)
                }
              : H.hT,
          initialData: eN?.creation?.business_profile_id === eM ? eN : void 0,
          enabled: null == e_ || eK,
          retry: !1,
          staleTime: 0,
          refetchInterval: o,
        }),
        e5 = e0?.creation ?? eN?.creation,
        e6 = (0, tg.D)(el)
      ;(ea[14] !== e0?.creation?.business_profile_id ||
      ea[15] !== eM ||
      ea[16] !== e2 ||
      ea[17] !== e3 ||
      !1 !== ea[18] ||
      ea[19] !== e6
        ? ((c = () => {}),
          (ea[14] = e0?.creation?.business_profile_id),
          (ea[15] = eM),
          (ea[16] = e2),
          (ea[17] = e3),
          (ea[18] = !1),
          (ea[19] = e6),
          (ea[20] = c))
        : (c = ea[20]),
        ea[21] !== e0 || ea[22] !== eM || ea[23] !== e2 || ea[24] !== e3 || !1 !== ea[25] || ea[26] !== e6
          ? ((f = [!1, eM, e0, e3, e2, e6]),
            (ea[21] = e0),
            (ea[22] = eM),
            (ea[23] = e2),
            (ea[24] = e3),
            (ea[25] = !1),
            (ea[26] = e6),
            (ea[27] = f))
          : (f = ea[27]),
        (0, l.useEffect)(c, f))
      let e8 = "1" === eA.get("created")
      ea[28] !== e5 || ea[29] !== eM || ea[30] !== e2 || ea[31] !== e3 || ea[32] !== e8 || ea[33] !== e_
        ? ((h =
            e_ ??
            (e8 && e3 && !e2 && null != e5 && e5.business_profile_id === eM && null != (0, tp.jp)(e5) ? e5 : void 0)),
          (ea[28] = e5),
          (ea[29] = eM),
          (ea[30] = e2),
          (ea[31] = e3),
          (ea[32] = e8),
          (ea[33] = e_),
          (ea[34] = h))
        : (h = ea[34])
      let e7 = h,
        e9 = null != e_ && null == eg && (!e8 || eA.get("creation") !== e_.business_profile_id),
        te = e0?.creation ?? eN?.creation ?? e7
      ;(ea[35] !== eT ||
      ea[36] !== ez ||
      ea[37] !== eM ||
      ea[38] !== ex ||
      ea[39] !== eZ ||
      ea[40] !== te ||
      ea[41] !== ek ||
      ea[42] !== ey
        ? ((p = () => {
            if (
              null == ex ||
              null == ey ||
              eZ ||
              eT ||
              null != ez ||
              te?.published !== !0 ||
              !0 === te.is_draft ||
              te.business_profile_id !== eM ||
              "cancelled" === te.status ||
              "rejected" === te.status ||
              te.canonical_target?.disposition === "existing_profile" ||
              eJ.current === eM
            )
              return
            let e = !0
            return (
              Promise.resolve().then(() => {
                if (!e) return
                ;((eJ.current = eM), eQ(!0))
                let t = () => {
                  if ((ek.throwIfAborted(), eR.current !== eM)) throw new DOMException("Creation changed", "AbortError")
                }
                Promise.resolve()
                  .then(() => (t(), ex(te, ey, t)))
                  .catch(() => {
                    try {
                      t()
                    } catch {
                      return
                    }
                    ;((eJ.current = null), eX(!0))
                  })
                  .finally(() => {
                    try {
                      ek.throwIfAborted()
                    } catch {
                      return
                    }
                    eQ(!1)
                  })
              }),
              () => {
                e = !1
              }
            )
          }),
          (m = [eT, ez, eM, ex, eZ, te, ek, ey]),
          (ea[35] = eT),
          (ea[36] = ez),
          (ea[37] = eM),
          (ea[38] = ex),
          (ea[39] = eZ),
          (ea[40] = te),
          (ea[41] = ek),
          (ea[42] = ey),
          (ea[43] = p),
          (ea[44] = m))
        : ((p = ea[43]), (m = ea[44])),
        (0, l.useEffect)(p, m),
        ea[45] !== eH
          ? ((g = eH ? (0, s.jsx)("div", { role: "status", children: (0, s.jsx)(tu.y, {}) }) : null),
            (ea[45] = eH),
            (ea[46] = g))
          : (g = ea[46]))
      let tt = g
      if (eZ) {
        let e, t
        ;(ea[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", { children: (0, s.jsx)(d.A, { ...eP.W.error }) })), (ea[47] = e))
          : (e = ea[47]),
          ea[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsxs)("div", {
                role: "alert",
                className: "flex flex-col items-start gap-3",
                children: [e, (0, s.jsx)(b.$, { onClick: () => eX(!1), children: (0, s.jsx)(d.A, { ...eP.W.retry }) })],
              })),
              (ea[48] = t))
            : (t = ea[48]),
          (tt = t))
      }
      let ti = e5?.status === "rejected" ? e5.rejection_reason : null,
        ts =
          "persona_declined" === ti || "persona_failed" === ti || "persona_expired" === ti || "content_rejected" === ti,
        tn = e5?.status === "approved" ? e5.business_profile_id : null
      ;(ea[49] !== el || ea[50] !== tn || ea[51] !== ew
        ? ((v = () => {
            null != tn && ew.invalidateQueries({ queryKey: ["business-profiles", el] })
          }),
          (y = [el, tn, ew]),
          (ea[49] = el),
          (ea[50] = tn),
          (ea[51] = ew),
          (ea[52] = v),
          (ea[53] = y))
        : ((v = ea[52]), (y = ea[53])),
        (0, l.useEffect)(v, y),
        ea[54] !== e5 || ea[55] !== ef || ea[56] !== eC || ea[57] !== ey
          ? ((x =
              eC ??
              ef ??
              (null == e5
                ? null
                : {
                    name: e5.details.name,
                    profileId: e5.business_profile_id,
                    contactVerificationRequired: e5.contact_verification_required,
                    businessType: e5.details.business_type,
                    values: e5.details.values,
                    shopifyRouting: ey,
                  })),
            (ea[54] = e5),
            (ea[55] = ef),
            (ea[56] = eC),
            (ea[57] = ey),
            (ea[58] = x))
          : (x = ea[58]))
      let ta = x,
        tl = null == e5 || !0 === e5.is_draft,
        to = tl || e5?.status === "pending",
        tc =
          null != e5
            ? !0 === e5.contact_verification_required
            : ta?.contactVerificationRequired === !0 || (ta?.profileId == null && ec)
      ea[59] !== ec || ea[60] !== e5 || ea[61] !== ta
        ? ((w = null == ta ? void 0 : (0, q.Rw)(ta, e5, ec)), (ea[59] = ec), (ea[60] = e5), (ea[61] = ta), (ea[62] = w))
        : (w = ea[62])
      let td = w
      ea[63] !== td || ea[64] !== e5?.contact_verifications || ea[65] !== ta
        ? ((_ = e5?.contact_verifications?.find(
            (e) => e.field === td && e.target === (0, q.Re)(e.field, ta?.values[e.field] ?? ""),
          )),
          (ea[63] = td),
          (ea[64] = e5?.contact_verifications),
          (ea[65] = ta),
          (ea[66] = _))
        : (_ = ea[66])
      let tv = _,
        tC = eT || (to && eO),
        tS = (null != ef || null != eC) && (null == e5 || (!0 === e5.is_draft && "pending" === e5.status)) && null == td
      function tA(e, t) {
        if ((ek.throwIfAborted(), eR.current, eD(e), null == e.creation)) return
        let i = e.creation.business_profile_id
        ;((eR.current = i),
          ew.setQueryData(["business-profiles", el, "creation", ed, i], e),
          ew.invalidateQueries({ queryKey: ["business-profiles", el, "creations", ed] }),
          void 0 !== t && t && null != (0, tp.jp)(e.creation) ? ((eE.current = !0), ej(e.creation), eh(i, !0)) : eh(i))
      }
      function tI(e) {
        return (
          eq(!0),
          eW(!0),
          eG(null),
          ek
            .launchLegacy(e, eR.current ?? e.profileId, "defer_persona")
            .then((e) => {
              if (null == e.creation) throw Error("The business profile was not created")
              return (tA(e, !0), e)
            })
            .catch((e) => {
              throw (e instanceof et.fk && [400, 422].includes(e.status) && eq(!1), eG(tj(e)), e)
            })
            .finally(() => eW(!1))
        )
      }
      ea[67] !== tl || ea[68] !== eM || ea[69] !== e4 || ea[70] !== e6 || ea[71] !== ek
        ? ((j = async function (e) {
            let { afterPersona: t } = void 0 === e ? {} : e,
              i = eR.current ?? eM
            null != i &&
              (((void 0 !== t && t) || !tl) && (await ek.resume(i), ek.throwIfAborted()),
              await e4({ throwOnError: !0 }))
          }),
          (ea[67] = tl),
          (ea[68] = eM),
          (ea[69] = e4),
          (ea[70] = e6),
          (ea[71] = ek),
          (ea[72] = j))
        : (j = ea[72])
      let tk = j
      ea[73] !== tk
        ? ((C = function () {
            ;(eW(!0),
              eG(null),
              tk()
                .catch((e) => eG(tj(e)))
                .finally(() => eW(!1)))
          }),
          (ea[73] = tk),
          (ea[74] = C))
        : (C = ea[74])
      let tP = C
      ea[75] !== tA || ea[76] !== ta || ea[77] !== eM || ea[78] !== ek
        ? ((S = async function () {
            if (null == ta) throw Error("A business draft is required")
            let e = await ek.save(ta, eR.current ?? eM)
            if ((tA(e), null == e.creation)) throw Error("The draft was not saved")
            return e.creation.business_profile_id
          }),
          (ea[75] = tA),
          (ea[76] = ta),
          (ea[77] = eM),
          (ea[78] = ek),
          (ea[79] = S))
        : (S = ea[79])
      let tN = S
      ea[80] !== tA || ea[81] !== tl || ea[82] !== eM || ea[83] !== tN || ea[84] !== ek
        ? ((A = function (e, t) {
            return (
              eW(!0),
              eG(null),
              (tl ? tN() : Promise.resolve(eR.current ?? eM))
                .then((i) => {
                  if (null == i) throw Error("A business draft is required")
                  return ek.send(i, e, t)
                })
                .then(tA)
                .catch(async (e) => {
                  throw (null != eR.current && tA(await ek.read(eR.current)), e)
                })
                .finally(() => eW(!1))
            )
          }),
          (ea[80] = tA),
          (ea[81] = tl),
          (ea[82] = eM),
          (ea[83] = tN),
          (ea[84] = ek),
          (ea[85] = A))
        : (A = ea[85])
      let tD = A
      ea[86] !== tA ||
      ea[87] !== ec ||
      ea[88] !== e5?.contact_verifications ||
      ea[89] !== ta ||
      ea[90] !== eM ||
      ea[91] !== ek ||
      ea[92] !== tI
        ? ((I = function (e, t) {
            let i = e5?.contact_verifications?.find((t) => t.field === e),
              s = eR.current ?? eM
            return null == s || i?.challenge_id == null
              ? Promise.resolve(!1)
              : (eW(!0),
                ek
                  .verify(s, e, i.challenge_id, t)
                  .then(async (t) => {
                    tA(t)
                    let i =
                      t.creation?.contact_verifications?.some((t) => t.field === e && "verified" === t.status) ?? !1
                    return (
                      i &&
                        null != ta &&
                        null == (0, q.Rw)(ta, t.creation, ec) &&
                        (await tI({ ...ta, profileId: s }).catch(t_)),
                      i
                    )
                  })
                  .catch(async (e) => {
                    throw (tA(await ek.read(s)), e)
                  })
                  .finally(() => eW(!1)))
          }),
          (ea[86] = tA),
          (ea[87] = ec),
          (ea[88] = e5?.contact_verifications),
          (ea[89] = ta),
          (ea[90] = eM),
          (ea[91] = ek),
          (ea[92] = tI),
          (ea[93] = I))
        : (I = ea[93])
      let tR = I
      ea[94] !== tA ||
      ea[95] !== tC ||
      ea[96] !== td ||
      ea[97] !== tc ||
      ea[98] !== ta ||
      ea[99] !== tl ||
      ea[100] !== eM ||
      ea[101] !== tN ||
      ea[102] !== ek ||
      ea[103] !== to
        ? ((k = function (e) {
            return null == ta || tC || (to && null != td)
              ? Promise.resolve(!1)
              : (eq(!0),
                eW(!0),
                eG(null),
                (tl && tc ? tN().then((e) => ek.launch(e, !0)) : ek.launchLegacy(ta, eR.current ?? eM))
                  .then(async (t) =>
                    (tA(t), null == t.launch_url)
                      ? (t.creation?.status === "pending" && eG("error"), !1)
                      : (await e(t.launch_url), !0),
                  )
                  .catch(async (e) => {
                    e instanceof et.fk && [400, 422].includes(e.status) && eq(!1)
                    let t = tj(e)
                    if ((eG(t), "error" !== t)) return !1
                    throw (null != eR.current && tA(await ek.read(eR.current)), e)
                  })
                  .finally(() => eW(!1)))
          }),
          (ea[94] = tA),
          (ea[95] = tC),
          (ea[96] = td),
          (ea[97] = tc),
          (ea[98] = ta),
          (ea[99] = tl),
          (ea[100] = eM),
          (ea[101] = tN),
          (ea[102] = ek),
          (ea[103] = to),
          (ea[104] = k))
        : (k = ea[104])
      let tE = k
      ea[105] !== el || ea[106] !== tC || ea[107] !== ew || ea[108] !== ek
        ? ((P = function () {
            return tC
              ? Promise.resolve(!1)
              : (eW(!0),
                eG(null),
                ek
                  .recoverPendingSubmission()
                  .then(async (e) => {
                    let t = e?.creation?.business_profile_id
                    if (null != e && null == t) throw Error("The pending submission could not be recovered")
                    if (null != t) {
                      let e = await ek.cancel(t)
                      if (e.creation?.status !== "cancelled") throw Error("The pending submission was not cancelled")
                      ew.invalidateQueries({ queryKey: ["business-profiles", el], refetchType: "none" })
                    }
                    return (ek.throwIfAborted(), (eE.current = !0), !0)
                  })
                  .catch((e) => (eG(tj(e)), !1))
                  .finally(() => eW(!1)))
          }),
          (ea[105] = el),
          (ea[106] = tC),
          (ea[107] = ew),
          (ea[108] = ek),
          (ea[109] = P))
        : (P = ea[109])
      let tM = P
      ea[110] !== tA ||
      ea[111] !== el ||
      ea[112] !== tC ||
      ea[113] !== ez ||
      ea[114] !== ta ||
      ea[115] !== tM ||
      ea[116] !== eM ||
      ea[117] !== ep ||
      ea[118] !== ew ||
      ea[119] !== ek ||
      ea[120] !== ed
        ? ((N = function () {
            if (tC || null == ta) return
            if ("discard" === ez)
              return void tM().then((e) => {
                e && ep()
              })
            let e = eR.current ?? eM
            null != e &&
              (eW(!0),
              eG(null),
              ew
                .cancelQueries({ queryKey: ["business-profiles", el, "creation", ed, e] })
                .then(() => ek.cancel(e))
                .then((e) => {
                  ;(tA(e), e.creation?.status === "cancelled" && ep())
                })
                .catch(() => eG("error"))
                .finally(() => {
                  ;(eW(!1), eV(null))
                }))
          }),
          (ea[110] = tA),
          (ea[111] = el),
          (ea[112] = tC),
          (ea[113] = ez),
          (ea[114] = ta),
          (ea[115] = tM),
          (ea[116] = eM),
          (ea[117] = ep),
          (ea[118] = ew),
          (ea[119] = ek),
          (ea[120] = ed),
          (ea[121] = N))
        : (N = ea[121])
      let tT = N
      if (null != e7 && !e9) {
        let e,
          t,
          i,
          n,
          r,
          a,
          l,
          o = "approved" !== e7.status
        ea[122] !== e7.details.business_type || ea[123] !== e7.details.name || ea[124] !== e7.details.values
          ? ((e = (0, q.Gk)({
              name: e7.details.name,
              businessType: e7.details.business_type,
              values: e7.details.values,
            })),
            (ea[122] = e7.details.business_type),
            (ea[123] = e7.details.name),
            (ea[124] = e7.details.values),
            (ea[125] = e))
          : (e = ea[125])
        let c = e
        return (
          ea[126] !== e7.details.name
            ? ((t = (0, s.jsx)(d.A, {
                id: "businessProfiles.creation.completed.title",
                defaultMessage: "You’ve created {name}",
                description: "Heading confirming that the business profile was created. The name is the business name.",
                values: { name: e7.details.name },
              })),
              (ea[126] = e7.details.name),
              (ea[127] = t))
            : (t = ea[127]),
          ea[128] !== o
            ? ((i =
                o &&
                (0, s.jsx)(d.A, {
                  id: "businessProfiles.creation.completed.draftVerificationDescription",
                  defaultMessage:
                    "It’s saved as a draft for now. Go to your business overview to continue verification or check its status.",
                  description:
                    "Tells the creator their profile is a draft and where to continue verification or check its status.",
                })),
              (ea[128] = o),
              (ea[129] = i))
            : (i = ea[129]),
          ea[130] !== t || ea[131] !== i
            ? ((n = (0, s.jsx)(tf.UM, { title: t, description: i })), (ea[130] = t), (ea[131] = i), (ea[132] = n))
            : (n = ea[132]),
          ea[133] !== e7.business_profile_id || ea[134] !== eb
            ? ((r = (e) => eb(e7.business_profile_id, e)),
              (ea[133] = e7.business_profile_id),
              (ea[134] = eb),
              (ea[135] = r))
            : (r = ea[135]),
          ea[136] !== o || ea[137] !== r
            ? ((a = (0, s.jsx)(tf.Um, { pendingCreation: o, onManageProfile: r })),
              (ea[136] = o),
              (ea[137] = r),
              (ea[138] = a))
            : (a = ea[138]),
          ea[139] !== c || ea[140] !== ep || ea[141] !== o || ea[142] !== tt || ea[143] !== n || ea[144] !== a
            ? ((l = (0, s.jsxs)(eU, {
                manager: c,
                stepKey: "complete",
                title: null,
                outcome: !0,
                isDraft: o,
                onCancel: ep,
                header: n,
                children: [tt, a],
              })),
              (ea[139] = c),
              (ea[140] = ep),
              (ea[141] = o),
              (ea[142] = tt),
              (ea[143] = n),
              (ea[144] = a),
              (ea[145] = l))
            : (l = ea[145]),
          l
        )
      }
      if (null == ta || (e8 && !e3)) {
        let e, t, i, n
        return (
          ea[146] !== e2 || ea[147] !== e4
            ? ((e = e2
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("p", { role: "alert", children: (0, s.jsx)(d.A, { ...eP.W.error }) }),
                      (0, s.jsx)(b.$, {
                        size: "formAction",
                        onClick: () => void e4(),
                        children: (0, s.jsx)(d.A, { ...eP.W.retry }),
                      }),
                    ],
                  })
                : (0, s.jsx)(tu.y, {})),
              (ea[146] = e2),
              (ea[147] = e4),
              (ea[148] = e))
            : (e = ea[148]),
          ea[149] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(d.A, { ...eP.W.backToChat })), (ea[149] = t))
            : (t = ea[149]),
          ea[150] !== ep
            ? ((i = (0, s.jsx)(b.$, { size: "formAction", color: "outlineGhost", onClick: ep, children: t })),
              (ea[150] = ep),
              (ea[151] = i))
            : (i = ea[151]),
          ea[152] !== e || ea[153] !== i
            ? ((n = (0, s.jsxs)("div", { className: "m-auto flex flex-col items-center gap-4", children: [e, i] })),
              (ea[152] = e),
              (ea[153] = i),
              (ea[154] = n))
            : (n = ea[154]),
          n
        )
      }
      if (e5?.is_draft === !0 && null == ef && null == eC) {
        let e, t
        return (
          ea[155] !== tI
            ? ((e = (e) => {
                ;(eS(e), tI(e).catch(tw))
              }),
              (ea[155] = tI),
              (ea[156] = e))
            : (e = ea[156]),
          ea[157] !== el || ea[158] !== tc || ea[159] !== ta || ea[160] !== ep || ea[161] !== e
            ? ((t = (0, s.jsx)(tr, {
                accountId: el,
                contactVerificationEnabled: tc,
                name: ta.name,
                initialDraft: ta,
                initialStep: "phone",
                onCancel: ep,
                onReview: e,
              })),
              (ea[157] = el),
              (ea[158] = tc),
              (ea[159] = ta),
              (ea[160] = ep),
              (ea[161] = e),
              (ea[162] = t))
            : (t = ea[162]),
          t
        )
      }
      if ((tS || e9) && null == e$ && !e2) {
        let e,
          t,
          i,
          n,
          r = ta.name
        return (
          ea[163] !== ta ? ((e = (0, q.Cu)(ta).at(-1)), (ea[163] = ta), (ea[164] = e)) : (e = ea[164]),
          ea[165] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => eE.current), (ea[165] = t)) : (t = ea[165]),
          ea[166] !== tI
            ? ((i = (e) => {
                tI(e).catch(tx)
              }),
              (ea[166] = tI),
              (ea[167] = i))
            : (i = ea[167]),
          ea[168] !== el || ea[169] !== tc || ea[170] !== ta || ea[171] !== ep || ea[172] !== e || ea[173] !== i
            ? ((n = (0, s.jsx)(tr, {
                accountId: el,
                contactVerificationEnabled: tc,
                name: r,
                initialDraft: ta,
                initialStep: e,
                submitting: !0,
                allowNavigation: t,
                onCancel: ep,
                onReview: i,
              })),
              (ea[168] = el),
              (ea[169] = tc),
              (ea[170] = ta),
              (ea[171] = ep),
              (ea[172] = e),
              (ea[173] = i),
              (ea[174] = n))
            : (n = ea[174]),
          n
        )
      }
      if (
        ea[175] !== tC ||
        ea[176] !== eL ||
        ea[177] !== td ||
        ea[178] !== e5 ||
        ea[179] !== ta ||
        ea[180] !== eM ||
        ea[181] !== em ||
        ea[182] !== to
      ) {
        let e
        ;((M = (0, q.Gk)(ta)),
          (D = e5?.status === "approved"),
          (T =
            null !=
            (W =
              e5?.status === "under_review" && e5.canonical_target?.disposition === "existing_profile"
                ? e5.canonical_target.target_business_profile_id
                : null)),
          (E = tC || (eL && e5?.is_draft !== !0)),
          ea[191] !== ta || ea[192] !== eM || ea[193] !== em
            ? ((e = () => em({ ...ta, profileId: eR.current ?? eM }, (0, q.Cu)(ta).at(-1) ?? "category")),
              (ea[191] = ta),
              (ea[192] = eM),
              (ea[193] = em),
              (ea[194] = e))
            : (e = ea[194]),
          (R = e),
          (O = to && !T && null == td),
          (F = T ? "matched_existing" : (e5?.status ?? "verify")),
          D &&
            (M.profile = {
              ...M.profile,
              business_profile_id: e5.business_profile_id,
              relationship: "owner",
              can_manage: !0,
            }),
          (ea[175] = tC),
          (ea[176] = eL),
          (ea[177] = td),
          (ea[178] = e5),
          (ea[179] = ta),
          (ea[180] = eM),
          (ea[181] = em),
          (ea[182] = to),
          (ea[183] = D),
          (ea[184] = R),
          (ea[185] = E),
          (ea[186] = M),
          (ea[187] = T),
          (ea[188] = W),
          (ea[189] = O),
          (ea[190] = F))
      } else
        ((D = ea[183]),
          (R = ea[184]),
          (E = ea[185]),
          (M = ea[186]),
          (T = ea[187]),
          (W = ea[188]),
          (O = ea[189]),
          (F = ea[190]))
      let tW = tS ? eP.W.submitFailureTitle : eP.W.verifyTitle
      if (
        (T && (tW = eP.W.matchedTitle),
        T || e5?.status !== "under_review" || (tW = eP.W.pendingTitle),
        e5?.status === "approved" && (tW = eP.W.approvedTitle),
        e5?.status === "cancelled" && (tW = eP.W.cancelledTitle),
        T)
      ) {
        let e
        ;(ea[195] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", { children: (0, s.jsx)(d.A, { ...eP.W.matchedDescription }) })), (ea[195] = e))
          : (e = ea[195]),
          (L = e))
      } else if (D) {
        let e
        ;(ea[196] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", {
              className: "text-secondary",
              children: (0, s.jsx)(d.A, { ...eP.W.approvedDescription }),
            })),
            (ea[196] = e))
          : (e = ea[196]),
          (L = e))
      } else if (e5?.status === "rejected" || e5?.status === "cancelled") {
        let e
        ;(ea[197] !== ts || ea[198] !== ti
          ? ((e = (0, s.jsx)("p", {
              className: "text-secondary",
              children: ts
                ? (0, s.jsx)(d.A, { ...eP.W.outcomeDescription, values: { reason: ti } })
                : (0, s.jsx)(d.A, { ...eP.W.rejectedDescription }),
            })),
            (ea[197] = ts),
            (ea[198] = ti),
            (ea[199] = e))
          : (e = ea[199]),
          (L = e))
      } else if (to && !tS) {
        let e, t, i
        ;(ea[200] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("p", {
              className: "text-secondary",
              children: (0, s.jsx)(d.A, { ...eP.W.verifyDescription }),
            })),
            (ea[200] = e))
          : (e = ea[200]),
          ea[201] !== O
            ? ((t = O
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(d.A, { ...eP.W.privateDescription }),
                  })
                : null),
              (ea[201] = O),
              (ea[202] = t))
            : (t = ea[202]),
          ea[203] !== t
            ? ((i = (0, s.jsxs)("div", { className: "flex flex-col gap-3", children: [e, t] })),
              (ea[203] = t),
              (ea[204] = i))
            : (i = ea[204]),
          (L = i))
      }
      let tO = e5?.is_draft === !0 ? "draft" : F,
        tF = !D,
        tL = (e5?.status === "under_review" && !T) || D,
        tU = to && eO,
        tq = O ? "summary" : "form"
      ;(ea[205] !== e5?.status || ea[206] !== ta || ea[207] !== ti || ea[208] !== tW
        ? (($ =
            e5?.status === "rejected"
              ? (0, s.jsx)(d.A, { ...eP.W.outcomeTitle, values: { reason: ti ?? "unknown" } })
              : (0, s.jsx)(d.A, { ...tW, values: { name: (0, s.jsx)("bdi", { children: ta.name }) } })),
          (ea[205] = e5?.status),
          (ea[206] = ta),
          (ea[207] = ti),
          (ea[208] = tW),
          (ea[209] = $))
        : ($ = ea[209]),
        ea[210] !== D ? ((B = D ? (0, s.jsx)(th.EQ, {}) : void 0), (ea[210] = D), (ea[211] = B)) : (B = ea[211]),
        ea[212] !== tC || ea[213] !== e5 || ea[214] !== ep
          ? ((G = () => {
              tC || (null == e5 ? eV("discard") : ep())
            }),
            (ea[212] = tC),
            (ea[213] = e5),
            (ea[214] = ep),
            (ea[215] = G))
          : (G = ea[215]))
      let t$ = null == e5
      return (
        ea[216] === Symbol.for("react.memo_cache_sentinel") ? ((z = () => eE.current), (ea[216] = z)) : (z = ea[216]),
        ea[217] !== e$
          ? ((V = null != e$ ? (0, s.jsx)(d.A, { ...eP.W[e$] }) : void 0), (ea[217] = e$), (ea[218] = V))
          : (V = ea[218]),
        ea[219] !== tC || ea[220] !== tM || ea[221] !== t$ || ea[222] !== V
          ? ((K = (0, s.jsx)(eo.L, {
              discardCreation: !0,
              dirty: t$,
              busy: tC,
              onDiscard: tM,
              allowNavigation: z,
              errorMessage: V,
            })),
            (ea[219] = tC),
            (ea[220] = tM),
            (ea[221] = t$),
            (ea[222] = V),
            (ea[223] = K))
          : (K = ea[223]),
        ea[224] !== tA ||
        ea[225] !== el ||
        ea[226] !== tC ||
        ea[227] !== eT ||
        ea[228] !== td ||
        ea[229] !== tv ||
        ea[230] !== e5 ||
        ea[231] !== ta ||
        ea[232] !== R ||
        ea[233] !== E ||
        ea[234] !== tl ||
        ea[235] !== e$ ||
        ea[236] !== eM ||
        ea[237] !== tE ||
        ea[238] !== tS ||
        ea[239] !== tk ||
        ea[240] !== tD ||
        ea[241] !== ek ||
        ea[242] !== O ||
        ea[243] !== tI ||
        ea[244] !== tR ||
        ea[245] !== to
          ? ((Q = to
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    O
                      ? null
                      : (0, s.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, s.jsx)(d.A, { ...eP.W.privateDescription }),
                        }),
                    to && null != td
                      ? (0, s.jsx)(
                          ev.a,
                          {
                            field: td,
                            target: ta.values[td] ?? "",
                            verification: tv,
                            onBack: tl ? R : void 0,
                            backDisabled: E,
                            busy: eT,
                            onSend: (e) => tD(td, e),
                            onVerify: (e) => tR(td, e),
                            onCheck: () =>
                              null == eM
                                ? Promise.resolve()
                                : (eW(!0),
                                  ek
                                    .read(eM)
                                    .then(tA)
                                    .finally(() => eW(!1))),
                          },
                          `${td}:${ta.values[td]}:${tv?.challenge_id ?? "new"}:${tv?.resend_available_at ?? ""}`,
                        )
                      : null,
                    (0, s.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        tl
                          ? null
                          : (0, s.jsx)(b.$, {
                              size: "formAction",
                              color: "secondary",
                              disabled: tC,
                              onClick: () => eV("cancel"),
                              children: (0, s.jsx)(d.A, { ...eP.W.cancelSubmission }),
                            }),
                        tl && null == td
                          ? (0, s.jsx)(b.$, {
                              size: "formAction",
                              color: "outlineGhost",
                              disabled: E,
                              onClick: R,
                              children: (0, s.jsx)(d.A, { ...eP.W.back }),
                            })
                          : null,
                        tS && eT ? (0, s.jsx)(tu.y, {}) : null,
                        tS && !eT
                          ? (0, s.jsx)(b.$, {
                              size: "formAction",
                              onClick: () => void tI(ta).catch(ty),
                              children: (0, s.jsx)(d.A, { ...eP.W.retry }),
                            })
                          : null,
                        tS || null != td
                          ? null
                          : (0, s.jsx)(
                              tm.W,
                              {
                                findMatch:
                                  null != eM && e5?.status === "pending" && !0 !== e5.is_draft && null == e5.inquiry_id
                                    ? (e) => ek.findVerificationMatch(eM, e)
                                    : void 0,
                                variant: "onboarding",
                                size: "formAction",
                                verificationUrl: "",
                                disabled: eT || "personaConfiguration" === e$,
                                onLaunch: tE,
                                onActiveChange: eF,
                                onComplete: () => tk({ afterPersona: !0 }),
                              },
                              `${el}:${eM}`,
                            ),
                      ],
                    }),
                  ],
                })
              : null),
            (ea[224] = tA),
            (ea[225] = el),
            (ea[226] = tC),
            (ea[227] = eT),
            (ea[228] = td),
            (ea[229] = tv),
            (ea[230] = e5),
            (ea[231] = ta),
            (ea[232] = R),
            (ea[233] = E),
            (ea[234] = tl),
            (ea[235] = e$),
            (ea[236] = eM),
            (ea[237] = tE),
            (ea[238] = tS),
            (ea[239] = tk),
            (ea[240] = tD),
            (ea[241] = ek),
            (ea[242] = O),
            (ea[243] = tI),
            (ea[244] = tR),
            (ea[245] = to),
            (ea[246] = Q))
          : (Q = ea[246]),
        ea[247] !== T || ea[248] !== W || ea[249] !== eI
          ? ((X = T
              ? (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsx)(b.$, {
                    size: "formAction",
                    disabled: null == W,
                    onClick: () => {
                      null != W &&
                        eI((e) => {
                          let t = new URLSearchParams(e)
                          return (t.set("claim", W), t)
                        })
                    },
                    children: (0, s.jsx)(d.A, { ...eP.W.matchedContinue }),
                  }),
                })
              : null),
            (ea[247] = T),
            (ea[248] = W),
            (ea[249] = eI),
            (ea[250] = X))
          : (X = ea[250]),
        ea[251] !== tC ||
        ea[252] !== D ||
        ea[253] !== tP ||
        ea[254] !== e5 ||
        ea[255] !== ta ||
        ea[256] !== T ||
        ea[257] !== ep ||
        ea[258] !== eb
          ? ((Y =
              null != e5 && (("under_review" === e5.status && !T) || D)
                ? (0, s.jsx)(tb, {
                    draft: ta,
                    status: D ? "approved" : "under_review",
                    busy: tC,
                    onExit: ep,
                    onComplete: D ? (e) => eb(e5.business_profile_id, e) : void 0,
                    onCancelSubmission: D ? void 0 : () => eV("cancel"),
                    onCheckStatus: D ? void 0 : tP,
                  })
                : null),
            (ea[251] = tC),
            (ea[252] = D),
            (ea[253] = tP),
            (ea[254] = e5),
            (ea[255] = ta),
            (ea[256] = T),
            (ea[257] = ep),
            (ea[258] = eb),
            (ea[259] = Y))
          : (Y = ea[259]),
        ea[260] !== ec || ea[261] !== e5 || ea[262] !== ta || ea[263] !== ts || ea[264] !== ep || ea[265] !== em
          ? ((ee =
              null != e5 && ("rejected" === e5.status || "cancelled" === e5.status)
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      ts
                        ? (0, s.jsx)("p", {
                            className: "text-secondary",
                            children: (0, s.jsx)(d.A, { ...eP.W.rejectedDescription }),
                          })
                        : null,
                      (0, s.jsx)(b.$, {
                        size: "formAction",
                        onClick: () => em({ ...ta, profileId: void 0, contactVerificationRequired: ec }, "category"),
                        children: (0, s.jsx)(d.A, { ...eP.W.reviewAgain }),
                      }),
                      (0, s.jsx)(b.$, {
                        size: "formAction",
                        color: "secondary",
                        onClick: ep,
                        children: (0, s.jsx)(d.A, { ...eP.W.backToChat }),
                      }),
                    ],
                  })
                : null),
            (ea[260] = ec),
            (ea[261] = e5),
            (ea[262] = ta),
            (ea[263] = ts),
            (ea[264] = ep),
            (ea[265] = em),
            (ea[266] = ee))
          : (ee = ea[266]),
        ea[267] !== D ||
        ea[268] !== eT ||
        ea[269] !== tP ||
        ea[270] !== e5 ||
        ea[271] !== e$ ||
        ea[272] !== e2 ||
        ea[273] !== T ||
        ea[274] !== tS ||
        ea[275] !== eO ||
        ea[276] !== to
          ? ((ei =
              null == e5 || tS || D || T || "under_review" === e5.status || (null == e$ && !e2) || (to && eO)
                ? null
                : (0, s.jsx)(b.$, {
                    size: "formAction",
                    color: "ghostActive",
                    className: to ? "self-start" : void 0,
                    disabled: eT,
                    onClick: tP,
                    children: (0, s.jsx)(d.A, { ...eP.W.retry }),
                  })),
            (ea[267] = D),
            (ea[268] = eT),
            (ea[269] = tP),
            (ea[270] = e5),
            (ea[271] = e$),
            (ea[272] = e2),
            (ea[273] = T),
            (ea[274] = tS),
            (ea[275] = eO),
            (ea[276] = to),
            (ea[277] = ei))
          : (ei = ea[277]),
        ea[278] !== e$ || ea[279] !== e2
          ? ((es =
              null != e$ || e2
                ? (0, s.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, s.jsx)(d.A, { ...eP.W[e$ ?? "error"] }),
                  })
                : null),
            (ea[278] = e$),
            (ea[279] = e2),
            (ea[280] = es))
          : (es = ea[280]),
        ea[281] !== tC || ea[282] !== tT || ea[283] !== ez || ea[284] !== e$
          ? ((en =
              null != ez
                ? (0, s.jsx)(U.C, {
                    kind: ez,
                    busy: tC,
                    onConfirm: tT,
                    onClose: () => eV(null),
                    errorMessage: null != e$ ? (0, s.jsx)(d.A, { ...eP.W[e$] }) : void 0,
                  })
                : null),
            (ea[281] = tC),
            (ea[282] = tT),
            (ea[283] = ez),
            (ea[284] = e$),
            (ea[285] = en))
          : (en = ea[285]),
        ea[286] !== tC ||
        ea[287] !== L ||
        ea[288] !== M ||
        ea[289] !== tt ||
        ea[290] !== tO ||
        ea[291] !== tF ||
        ea[292] !== tL ||
        ea[293] !== tU ||
        ea[294] !== tq ||
        ea[295] !== $ ||
        ea[296] !== B ||
        ea[297] !== G ||
        ea[298] !== K ||
        ea[299] !== Q ||
        ea[300] !== X ||
        ea[301] !== Y ||
        ea[302] !== ee ||
        ea[303] !== ei ||
        ea[304] !== es ||
        ea[305] !== en
          ? ((er = (0, s.jsxs)(eU, {
              manager: M,
              stepKey: tO,
              isDraft: tF,
              outcome: tL,
              busy: tC,
              personaActive: tU,
              contentLayout: tq,
              title: $,
              description: L,
              leading: B,
              onCancel: G,
              children: [K, Q, X, tt, Y, ee, ei, es, en],
            })),
            (ea[286] = tC),
            (ea[287] = L),
            (ea[288] = M),
            (ea[289] = tt),
            (ea[290] = tO),
            (ea[291] = tF),
            (ea[292] = tL),
            (ea[293] = tU),
            (ea[294] = tq),
            (ea[295] = $),
            (ea[296] = B),
            (ea[297] = G),
            (ea[298] = K),
            (ea[299] = Q),
            (ea[300] = X),
            (ea[301] = Y),
            (ea[302] = ee),
            (ea[303] = ei),
            (ea[304] = es),
            (ea[305] = en),
            (ea[306] = er))
          : (er = ea[306]),
        er
      )
    }
    function ty() {}
    function tx() {}
    function tw() {}
    function t_() {}
    function tj(e) {
      if (!(e instanceof et.fk)) return "error"
      if (422 === e.status && "business_profile_persona_account_identity_required" === e.errorCode)
        return "accountIdentityRequired"
      if (503 === e.status) {
        if ("business_profile_persona_temporarily_unavailable" === e.errorCode) return "personaUnavailable"
        if ("business_profile_persona_configuration_error" === e.errorCode) return "personaConfiguration"
      }
      return "error"
    }
    var tC = i("Oklx"),
      tS = i("m6S6")
    function tA(e) {
      let t,
        i,
        a,
        o,
        c,
        u,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        x,
        w,
        j,
        C,
        S = (0, n.c)(172),
        {
          accountId: A,
          userId: I,
          name: k,
          initialDraft: P,
          fallbackDraft: N,
          initialStep: D,
          onPublishedCreation: R,
          onCancel: E,
          onPersist: W,
          onComplete: O,
        } = e,
        F = void 0 === D ? "type" : D,
        L = (0, r._U)(_.JW, "4046009702"),
        $ = (0, J.jE)()
      S[0] !== A || S[1] !== I ? ((t = () => e2(A, I)), (S[0] = A), (S[1] = I), (S[2] = t)) : (t = S[2])
      let [B] = (0, l.useState)(t)
      ;(S[3] !== B ? ((i = () => B.attach()), (a = [B]), (S[3] = B), (S[4] = i), (S[5] = a)) : ((i = S[4]), (a = S[5])),
        (0, l.useEffect)(i, a))
      let [G, z] = (0, l.useState)(0),
        [V, K] = (0, l.useState)(null),
        [H, Q] = (0, l.useState)(null),
        [X, Y] = (0, l.useState)(),
        [ee, et] = (0, l.useState)(!1),
        ei = (0, l.useRef)(!1),
        [es, en] = (0, l.useState)(!1),
        er = (0, l.useRef)(null),
        [ea, el] = (0, l.useState)(null)
      S[6] !== N || S[7] !== k || S[8] !== L || S[9] !== P || S[10] !== B
        ? ((o = () =>
            L && k.trim() && null == P && !B.hasPendingSession() && null == B.pending()
              ? (N ?? (0, q.vm)(k, !0))
              : void 0),
          (S[6] = N),
          (S[7] = k),
          (S[8] = L),
          (S[9] = P),
          (S[10] = B),
          (S[11] = o))
        : (o = S[11])
      let [ec] = (0, l.useState)(o)
      S[12] !== A || S[13] !== G || S[14] !== I
        ? ((c = ["business-profiles", A, "temporary-creation", I, G]),
          (S[12] = A),
          (S[13] = G),
          (S[14] = I),
          (S[15] = c))
        : (c = S[15])
      let ed = {
          queryKey: c,
          queryFn: async (e) => {
            let { signal: t } = e
            if (0 === G && null != P) {
              B.clear()
              let e = { ...P, profileId: void 0, contactVerificationRequired: !0 }
              return (B.savePending(e, F), { response: void 0, draft: e, step: F })
            }
            let i = !1,
              s = await B.restore().catch((e) => {
                if (!e0(e)) throw e
                return ((i = !0), B.read())
              })
            if ((t.throwIfAborted(), null == s && L)) {
              let e = B.pending()?.draft ?? N ?? (0, q.vm)(k, !0),
                t = B.start(null, { name: e.name })
              ;(B.savePending(e, "type"), (s = await t))
            }
            if (s?.name_first_session != null) {
              let e = B.pending()?.draft.name ?? (s.name_first_session.details.name || k)
              eX(s.name_first_session, "name", e) || (s = await B.accept("name", e))
            }
            B.throwIfAborted()
            let n = B.pending(),
              r = n?.step === "review" ? void 0 : n?.draft,
              a = eJ(s),
              l =
                null == a
                  ? (n?.draft ?? N ?? (0, q.vm)(k, !0))
                  : {
                      name: r?.name ?? a.details.name,
                      businessType: a.details.business_type,
                      values: { ...a.details.values, ...r?.values },
                      contactVerificationRequired: !0,
                      shopifyRouting: n?.draft.shopifyRouting,
                    },
              o = n?.step !== "review" || (0, q.J5)("website", l) ? (0, q.B)(l, n?.step) : "website"
            if ((B.savePending(l, o), s?.creation != null)) eS(s)
            else if ("review" === o && !i) {
              let e = a?.accepted_revision
              ;(K({ draft: l, acceptedRevision: e }), await eA(e))
            }
            return { response: s, draft: l, step: o, revisionChanged: i }
          },
          retry: !1,
          staleTime: 1 / 0,
          gcTime: 0,
          refetchOnWindowFocus: !1,
          refetchOnReconnect: !1,
        },
        eu = (0, Z.I)(ed),
        ef = X?.creation ?? eu.data?.response?.creation
      S[16] !== eu.error || S[17] !== eu.isError
        ? ((u = eu.isError ? e4(eu.error) : null), (S[16] = eu.error), (S[17] = eu.isError), (S[18] = u))
        : (u = S[18])
      let eh = u,
        ep = "expired" === ea || "expired" === eh,
        [em, eb] = (0, l.useState)()
      S[19] !== ef || S[20] !== em || S[21] !== eu.data?.response
        ? ((f = null == ef ? (em ?? eJ(eu.data?.response)?.expires_at) : void 0),
          (S[19] = ef),
          (S[20] = em),
          (S[21] = eu.data?.response),
          (S[22] = f))
        : (f = S[22])
      let ev = f,
        [ey, ex] = (0, l.useState)()
      ;(S[23] !== ev || S[24] !== B
        ? ((h = () => {
            if (null == ev) return
            let e = window.setTimeout(
              () => {
                B.hasPendingStart() || ex(ev)
              },
              Math.max(0, Date.parse(ev) - Date.now()),
            )
            return () => window.clearTimeout(e)
          }),
          (p = [ev, B]),
          (S[23] = ev),
          (S[24] = B),
          (S[25] = h),
          (S[26] = p))
        : ((h = S[25]), (p = S[26])),
        (0, l.useEffect)(h, p))
      let ew = H?.draft ?? eu.data?.draft
      S[27] !== H || S[28] !== ew || S[29] !== eu.data || S[30] !== V
        ? ((m =
            V ??
            (null == H && eu.data?.step === "review" && null != ew
              ? { draft: ew, acceptedRevision: eu.data.response?.session?.accepted_revision }
              : null)),
          (S[27] = H),
          (S[28] = ew),
          (S[29] = eu.data),
          (S[30] = V),
          (S[31] = m))
        : (m = S[31])
      let e_ = m,
        ej = e_?.draft,
        eC = null != ea || (null == V && eu.data?.revisionChanged)
      function eS(e) {
        B.throwIfAborted()
        let t = e.creation
        if (null != t) {
          let i = t.business_profile_id
          if (
            ($.setQueryData(["business-profiles", A, "creation", I, i], e),
            $.invalidateQueries({ queryKey: ["business-profiles", A, "creations", I] }),
            (ei.current = !0),
            null == (0, tp.jp)(t))
          ) {
            let e = B.pending()
            ;(B.clear(), e?.draft.shopifyRouting != null && B.savePending({ ...e.draft, profileId: i }, "review"), W(i))
          }
        }
      }
      function eA(e) {
        return ee
          ? Promise.resolve()
          : (et(!0),
            B.submit(e)
              .then((e) => {
                ;(eS(e), Y(e))
              })
              .catch(async (e) => {
                if (e0(e))
                  try {
                    let e = await B.read()
                    if ((B.throwIfAborted(), null == e.session)) return void el("error")
                    let t = e.session,
                      i = {
                        name: t.details.name,
                        businessType: t.details.business_type,
                        values: t.details.values,
                        contactVerificationRequired: !0,
                        shopifyRouting: B.pending()?.draft.shopifyRouting,
                      }
                    ;(B.savePending(i, "review"),
                      K({ draft: i, acceptedRevision: t.accepted_revision }),
                      el("reviewChanged"))
                  } catch (e) {
                    el(e4(e))
                  }
                else el(e4(e))
              })
              .finally(() => et(!1)))
      }
      S[32] !== ee || S[33] !== E || S[34] !== B
        ? ((g = function (e) {
            return !ee && (B.hasPendingSubmission() || B.clear(), (ei.current = !0), (void 0 === e || e) && E(), !0)
          }),
          (S[32] = ee),
          (S[33] = E),
          (S[34] = B),
          (S[35] = g))
        : (g = S[35])
      let eI = g
      if (null != ef) {
        let e, t, i, n, r, a
        return (
          S[36] !== ef ? ((e = null != (0, tp.jp)(ef) ? ef : void 0), (S[36] = ef), (S[37] = e)) : (e = S[37]),
          S[38] !== B ? ((t = B.pending()?.draft.shopifyRouting), (S[38] = B), (S[39] = t)) : (t = S[39]),
          S[40] !== E || S[41] !== B
            ? ((i = () => {
                ;(B.clear(), E())
              }),
              (S[40] = E),
              (S[41] = B),
              (S[42] = i))
            : (i = S[42]),
          S[43] !== O || S[44] !== B
            ? ((n = (e, t) => {
                ;(B.pending()?.draft.shopifyRouting == null && B.clear(), O(e, t))
              }),
              (S[43] = O),
              (S[44] = B),
              (S[45] = n))
            : (n = S[45]),
          S[46] !== B || S[47] !== eb
            ? ((r = (e, t) => {
                ;(B.clear(),
                  B.savePending({ ...e, profileId: void 0 }, t),
                  Y(void 0),
                  eb(void 0),
                  Q({ draft: { ...e, profileId: void 0 }, step: t }),
                  z(tI))
              }),
              (S[46] = B),
              (S[47] = eb),
              (S[48] = r))
            : (r = S[48]),
          S[49] !== A ||
          S[50] !== ef.business_profile_id ||
          S[51] !== W ||
          S[52] !== R ||
          S[53] !== e ||
          S[54] !== t ||
          S[55] !== i ||
          S[56] !== n ||
          S[57] !== r ||
          S[58] !== I
            ? ((a = (0, s.jsx)(tv, {
                accountId: A,
                userId: I,
                profileId: ef.business_profile_id,
                completedCreation: e,
                draft: null,
                shopifyRouting: t,
                onPublishedCreation: R,
                contactVerificationEnabled: !0,
                onPersist: W,
                onCancel: i,
                onComplete: n,
                onEdit: r,
              })),
              (S[49] = A),
              (S[50] = ef.business_profile_id),
              (S[51] = W),
              (S[52] = R),
              (S[53] = e),
              (S[54] = t),
              (S[55] = i),
              (S[56] = n),
              (S[57] = r),
              (S[58] = I),
              (S[59] = a))
            : (a = S[59]),
          a
        )
      }
      if (ep || (null != ev && ey === ev)) {
        let e, t, i, n, r
        return (
          S[60] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(T.c7, {
                title: (0, s.jsx)(M.L3, { children: (0, s.jsx)(d.A, { ...eP.W.sessionExpired }) }),
              })),
              (S[60] = e))
            : (e = S[60]),
          S[61] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsxs)(T.OO, {
                children: [e, (0, s.jsx)(M.rr, { children: (0, s.jsx)(d.A, { ...eP.W.reloadHelp }) })],
              })),
              (S[61] = t))
            : (t = S[61]),
          S[62] !== ep || S[63] !== k || S[64] !== B
            ? ((i = () => {
                if (ep || !B.hasRecoverableSubmission()) {
                  let e = B.pending()?.draft.name || k
                  ;(B.clear(), B.savePending((0, q.vm)(e, !0), "type"))
                }
                window.location.reload()
              }),
              (S[62] = ep),
              (S[63] = k),
              (S[64] = B),
              (S[65] = i))
            : (i = S[65]),
          S[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, s.jsx)(d.A, { ...eP.W.reloadPage })), (S[66] = n))
            : (n = S[66]),
          S[67] !== i
            ? ((r = (0, s.jsx)(M.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                children: (0, s.jsxs)(T.R4, {
                  children: [t, (0, s.jsx)(T.Es, { children: (0, s.jsx)(b.$, { onClick: i, children: n }) })],
                }),
              })),
              (S[67] = i),
              (S[68] = r))
            : (r = S[68]),
          r
        )
      }
      if (null != ej && eC) {
        let e, t, i, n, r, a, l, o, c, u, f, h, p, m, g, v, y, x
        ;(S[69] !== ej ? ((e = (0, q.Gk)(ej)), (S[69] = ej), (S[70] = e)) : (e = S[70]),
          S[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(d.A, { ...eP.W.submitFailureTitle })), (S[71] = t))
            : (t = S[71]),
          S[72] !== ee || S[73] !== eI || S[74] !== B
            ? ((i = () => {
                ee || (B.hasPendingSubmission() ? eI() : en(!0))
              }),
              (S[72] = ee),
              (S[73] = eI),
              (S[74] = B),
              (S[75] = i))
            : (i = S[75]),
          S[76] !== ee || S[77] !== B
            ? ((n = ee || !B.hasPendingSubmission()), (S[76] = ee), (S[77] = B), (S[78] = n))
            : (n = S[78]),
          S[79] === Symbol.for("react.memo_cache_sentinel") ? ((r = () => ei.current), (S[79] = r)) : (r = S[79]),
          S[80] !== eI ? ((a = () => eI(!1)), (S[80] = eI), (S[81] = a)) : (a = S[81]),
          S[82] !== ee || S[83] !== n || S[84] !== a
            ? ((l = (0, s.jsx)(eo.L, {
                discardCreation: !0,
                dirty: n,
                busy: ee,
                blockSearchChanges: !0,
                allowNavigation: r,
                onDiscard: a,
              })),
              (S[82] = ee),
              (S[83] = n),
              (S[84] = a),
              (S[85] = l))
            : (l = S[85]))
        let w = eP.W[ea ?? "reviewChanged"]
        ;(S[86] !== w
          ? ((o = (0, s.jsx)("p", {
              role: "alert",
              className: "text-sm text-danger",
              children: (0, s.jsx)(d.A, { ...w }),
            })),
            (S[86] = w),
            (S[87] = o))
          : (o = S[87]),
          S[88] !== ee || S[89] !== B
            ? ((c = ee || B.hasPendingSubmission()), (S[88] = ee), (S[89] = B), (S[90] = c))
            : (c = S[90]),
          S[91] !== ej || S[92] !== B
            ? ((u = () => {
                let e = (0, q.Cu)(ej).at(-1) ?? "category"
                ;(B.savePending(ej, e), Q({ draft: ej, step: e }), K(null), el(null))
              }),
              (S[91] = ej),
              (S[92] = B),
              (S[93] = u))
            : (u = S[93]),
          S[94] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (0, s.jsx)(d.A, { ...eP.W.back })), (S[94] = f))
            : (f = S[94]),
          S[95] !== c || S[96] !== u
            ? ((h = (0, s.jsx)(b.$, {
                color: "outlineGhost",
                size: "formAction",
                disabled: c,
                onClick: u,
                children: f,
              })),
              (S[95] = c),
              (S[96] = u),
              (S[97] = h))
            : (h = S[97]))
        let _ = ee || "personaConfiguration" === ea
        return (
          S[98] !== e_?.acceptedRevision || S[99] !== eA
            ? ((p = () => void eA(e_?.acceptedRevision)), (S[98] = e_?.acceptedRevision), (S[99] = eA), (S[100] = p))
            : (p = S[100]),
          S[101] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (0, s.jsx)(d.A, { ...eP.W.retry })), (S[101] = m))
            : (m = S[101]),
          S[102] !== ee || S[103] !== _ || S[104] !== p
            ? ((g = (0, s.jsx)(eg.C, { size: "formAction", pending: ee, disabled: _, onClick: p, children: m })),
              (S[102] = ee),
              (S[103] = _),
              (S[104] = p),
              (S[105] = g))
            : (g = S[105]),
          S[106] !== h || S[107] !== g
            ? ((v = (0, s.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [h, g] })),
              (S[106] = h),
              (S[107] = g),
              (S[108] = v))
            : (v = S[108]),
          S[109] !== ee || S[110] !== es || S[111] !== eI
            ? ((y = es
                ? (0, s.jsx)(U.C, {
                    kind: "discard",
                    busy: ee,
                    onClose: () => en(!1),
                    onConfirm: () => eI(),
                    contentProps: {
                      onCloseAutoFocus: (e) => {
                        null != er.current && (e.preventDefault(), er.current.focus({ preventScroll: !0 }))
                      },
                    },
                  })
                : null),
              (S[109] = ee),
              (S[110] = es),
              (S[111] = eI),
              (S[112] = y))
            : (y = S[112]),
          S[113] !== ee || S[114] !== e || S[115] !== i || S[116] !== l || S[117] !== o || S[118] !== v || S[119] !== y
            ? ((x = (0, s.jsxs)(eU, {
                manager: e,
                stepKey: "verify",
                contentLayout: "summary",
                cancelButtonRef: er,
                busy: ee,
                title: t,
                onCancel: i,
                children: [l, o, v, y],
              })),
              (S[113] = ee),
              (S[114] = e),
              (S[115] = i),
              (S[116] = l),
              (S[117] = o),
              (S[118] = v),
              (S[119] = y),
              (S[120] = x))
            : (x = S[120]),
          x
        )
      }
      let ek = 0 === G && eu.isPending ? ec : void 0,
        eN = ej ?? ew ?? ek
      if (null == eN) {
        let e, t, i, n, r, a, l, o, c
        if (!eu.isError) {
          let e, t, i
          return (
            S[121] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(d.A, { ...tS.v.business })), (S[121] = e))
              : (e = S[121]),
            S[122] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(tC.Bz, { variant: "form" })), (S[122] = t))
              : (t = S[122]),
            S[123] !== E
              ? ((i = (0, s.jsx)(eU, { manager: null, stepKey: "loading", title: e, onCancel: E, children: t })),
                (S[123] = E),
                (S[124] = i))
              : (i = S[124]),
            i
          )
        }
        let u = "personaConfiguration" === eh ? eP.W.personaConfiguration : eP.W.error
        S[125] !== B ? ((e = B.isNameFirst() && !B.hasPendingSubmission()), (S[125] = B), (S[126] = e)) : (e = S[126])
        let f = e
        S[127] !== u
          ? ((t = (0, s.jsx)("p", { role: "alert", children: (0, s.jsx)(d.A, { ...u }) })), (S[127] = u), (S[128] = t))
          : (t = S[128])
        let h = "personaConfiguration" === eh
        ;(S[129] !== eu ? ((i = () => void eu.refetch()), (S[129] = eu), (S[130] = i)) : (i = S[130]),
          S[131] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, s.jsx)(d.A, { ...eP.W.retry })), (S[131] = n))
            : (n = S[131]),
          S[132] !== h || S[133] !== i
            ? ((r = (0, s.jsx)(b.$, { disabled: h, onClick: i, children: n })),
              (S[132] = h),
              (S[133] = i),
              (S[134] = r))
            : (r = S[134]),
          S[135] !== f || S[136] !== E || S[137] !== B
            ? ((a = () => {
                ;(f && B.clear(), E())
              }),
              (S[135] = f),
              (S[136] = E),
              (S[137] = B),
              (S[138] = a))
            : (a = S[138]))
        let p = f ? eP.W.changeName : eP.W.backToChat
        return (
          S[139] !== p ? ((l = (0, s.jsx)(d.A, { ...p })), (S[139] = p), (S[140] = l)) : (l = S[140]),
          S[141] !== a || S[142] !== l
            ? ((o = (0, s.jsx)(b.$, { color: "secondary", onClick: a, children: l })),
              (S[141] = a),
              (S[142] = l),
              (S[143] = o))
            : (o = S[143]),
          S[144] !== t || S[145] !== r || S[146] !== o
            ? ((c = (0, s.jsxs)("div", {
                className: "mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-5 py-8",
                children: [t, r, o],
              })),
              (S[144] = t),
              (S[145] = r),
              (S[146] = o),
              (S[147] = c))
            : (c = S[147]),
          c
        )
      }
      let eD = eN.name,
        eR = null == ek ? void 0 : async () => (await $.ensureQueryData(ed)).response
      ;(S[148] === Symbol.for("react.memo_cache_sentinel") ? ((v = () => ei.current), (S[148] = v)) : (v = S[148]),
        S[149] !== H?.step || S[150] !== eN || S[151] !== eu.data?.step || S[152] !== ej
          ? ((y = H?.step ?? (null != ej || eu.data?.step === "review" ? (0, q.Cu)(eN).at(-1) : eu.data?.step)),
            (S[149] = H?.step),
            (S[150] = eN),
            (S[151] = eu.data?.step),
            (S[152] = ej),
            (S[153] = y))
          : (y = S[153]))
      let eE = eu.data?.response
      return (
        S[154] !== eE ? ((x = eJ(eE)), (S[154] = eE), (S[155] = x)) : (x = S[155]),
        S[156] === Symbol.for("react.memo_cache_sentinel") ? ((w = () => el("expired")), (S[156] = w)) : (w = S[156]),
        S[157] !== B || S[158] !== eA
          ? ((j = (e, t) => {
              ;(B.savePending(e, "review"), K({ draft: e, acceptedRevision: t }), Q(null), eA(t))
            }),
            (S[157] = B),
            (S[158] = eA),
            (S[159] = j))
          : (j = S[159]),
        S[160] !== A ||
        S[161] !== ee ||
        S[162] !== eN ||
        S[163] !== G ||
        S[164] !== E ||
        S[165] !== B ||
        S[166] !== eb ||
        S[167] !== eR ||
        S[168] !== y ||
        S[169] !== x ||
        S[170] !== j
          ? ((C = (0, s.jsx)(
              tr,
              {
                accountId: A,
                contactVerificationEnabled: !0,
                name: eD,
                submitting: ee,
                waitForNameScreening: eR,
                allowNavigation: v,
                initialDraft: eN,
                initialStep: y,
                temporarySession: B,
                initialSession: x,
                onSessionDeadline: eb,
                onExpired: w,
                onCancel: E,
                onReview: j,
              },
              G,
            )),
            (S[160] = A),
            (S[161] = ee),
            (S[162] = eN),
            (S[163] = G),
            (S[164] = E),
            (S[165] = B),
            (S[166] = eb),
            (S[167] = eR),
            (S[168] = y),
            (S[169] = x),
            (S[170] = j),
            (S[171] = C))
          : (C = S[171]),
        C
      )
    }
    function tI(e) {
      return e + 1
    }
    function tk(e) {
      let t,
        i,
        a,
        o,
        c,
        d,
        u,
        f = (0, n.c)(85),
        {
          accountId: h,
          userId: p,
          name: m,
          profileId: b,
          creationPrefill: g,
          onPublishedCreation: v,
          onCancel: y,
          onPersist: x,
          onRestart: w,
          onComplete: j,
        } = e,
        C = (0, r._U)(_.JW, "4046009702"),
        S = e2(h, p),
        A = S.pending(),
        I = S.hasPendingSession()
      f[0] !== h || f[1] !== p
        ? ((t = function () {
            let e = e2(h, p),
              t = e.pending()
            return e.hasRecoverableSubmission() || (t?.step === "review" && null == t.draft.profileId)
          }),
          (f[0] = h),
          (f[1] = p),
          (f[2] = t))
        : (t = f[2])
      let k = t,
        [P, N] = (0, l.useState)(() => {
          if (null == g) return "incoming"
          let e = A?.draft.shopifyRouting
          return e?.shopGid === g.shopify_shop_gid &&
            e.shopDomain === g.myshopify_domain &&
            (null == b || A?.draft.profileId === b)
            ? "matching"
            : k()
              ? "existing"
              : null != b || I || null != A
                ? "confirm"
                : "incoming"
        }),
        D = "matching" === P || "existing" === P,
        R = null != g && "existing" === P,
        E = D ? A?.draft : void 0,
        M = D && A?.step !== "review" ? A?.step : void 0,
        T = D && A?.step === "review" && !I,
        [W, O] = (0, l.useState)(null),
        [F, L] = (0, l.useState)(T ? (A?.draft ?? null) : null),
        [$, B] = (0, l.useState)(T ? (A?.draft.profileId ?? null) : null),
        G =
          E ??
          (null == g || "incoming" !== P
            ? void 0
            : {
                ...(0, q.vm)(m, C),
                values: { website: g.website },
                shopifyRouting: { shopGid: g.shopify_shop_gid, shopDomain: g.myshopify_domain },
              })
      f[3] !== h || f[4] !== g?.shop_name || f[5] !== w || f[6] !== O || f[7] !== B || f[8] !== L || f[9] !== p
        ? ((i = function () {
            ;(e2(h, p).clear(), O(null), L(null), B(null), N("incoming"), w(g?.shop_name ?? ""))
          }),
          (f[3] = h),
          (f[4] = g?.shop_name),
          (f[5] = w),
          (f[6] = O),
          (f[7] = B),
          (f[8] = L),
          (f[9] = p),
          (f[10] = i))
        : (i = f[10])
      let z = i
      f[11] !== h || f[12] !== B || f[13] !== L || f[14] !== p
        ? ((a = function () {
            let e = e2(h, p),
              t = e.pending()
            ;(t?.step !== "review" || e.hasPendingSession() || (L(t.draft), B(t.draft.profileId ?? null)),
              N("existing"))
          }),
          (f[11] = h),
          (f[12] = B),
          (f[13] = L),
          (f[14] = p),
          (f[15] = a))
        : (a = f[15])
      let V = a
      f[16] !== h || f[17] !== R || f[18] !== k || f[19] !== y || f[20] !== z || f[21] !== p
        ? ((o = function () {
            let e = e2(h, p),
              t = e.pending()
            !R || e.hasRecoverableSubmission() || e.hasPendingSession() || (null != t && null == t.draft.profileId)
              ? y(R || k())
              : z()
          }),
          (f[16] = h),
          (f[17] = R),
          (f[18] = k),
          (f[19] = y),
          (f[20] = z),
          (f[21] = p),
          (f[22] = o))
        : (o = f[22])
      let K = o
      f[23] !== h || f[24] !== R || f[25] !== y || f[26] !== z || f[27] !== p
        ? ((c = function () {
            R && !e2(h, p).hasRecoverableSubmission() ? z() : y(R)
          }),
          (f[23] = h),
          (f[24] = R),
          (f[25] = y),
          (f[26] = z),
          (f[27] = p),
          (f[28] = c))
        : (c = f[28])
      let J = c
      if ("confirm" === P) {
        let e, t
        return (
          f[29] !== V || f[30] !== k || f[31] !== z
            ? ((e = () => {
                k() ? V() : z()
              }),
              (f[29] = V),
              (f[30] = k),
              (f[31] = z),
              (f[32] = e))
            : (e = f[32]),
          f[33] !== V || f[34] !== e
            ? ((t = (0, s.jsx)(U.C, { kind: "discard", busy: !1, onClose: V, onConfirm: e })),
              (f[33] = V),
              (f[34] = e),
              (f[35] = t))
            : (t = f[35]),
          t
        )
      }
      let H = null != b && A?.draft.profileId === b ? A.draft.shopifyRouting : void 0
      if ((C || S.hasRecoverableSubmission() || (D && I)) && !T && null == b && W?.draft.profileId == null) {
        let e,
          t = `${h}:${p}:${P}`,
          i = E?.name ?? (R ? "" : m),
          n = W?.draft,
          r = W?.step
        return (
          f[36] !== h ||
          f[37] !== K ||
          f[38] !== G ||
          f[39] !== j ||
          f[40] !== x ||
          f[41] !== v ||
          f[42] !== t ||
          f[43] !== i ||
          f[44] !== n ||
          f[45] !== r ||
          f[46] !== p
            ? ((e = (0, s.jsx)(
                tA,
                {
                  accountId: h,
                  userId: p,
                  name: i,
                  initialDraft: n,
                  fallbackDraft: G,
                  initialStep: r,
                  onPublishedCreation: v,
                  onCancel: K,
                  onPersist: x,
                  onComplete: j,
                },
                t,
              )),
              (f[36] = h),
              (f[37] = K),
              (f[38] = G),
              (f[39] = j),
              (f[40] = x),
              (f[41] = v),
              (f[42] = t),
              (f[43] = i),
              (f[44] = n),
              (f[45] = r),
              (f[46] = p),
              (f[47] = e))
            : (e = f[47]),
          e
        )
      }
      let Q = null != F && (null == b || b === $)
      if (null != b || null != F) {
        let e,
          t,
          i,
          n = Q ? "local" : b,
          r = Q ? F : null,
          a = (Q ? F?.shopifyRouting : void 0) ?? H
        return (
          f[48] !== h || f[49] !== Q || f[50] !== x || f[51] !== F || f[52] !== B || f[53] !== p
            ? ((e = (e, t) => {
                if (Q && F?.shopifyRouting != null) {
                  let t = e2(h, p)
                  ;(t.pending(), t.savePending({ ...F, profileId: e }, "review"))
                }
                ;(Q && B(e), x(e, t))
              }),
              (f[48] = h),
              (f[49] = Q),
              (f[50] = x),
              (f[51] = F),
              (f[52] = B),
              (f[53] = p),
              (f[54] = e))
            : (e = f[54]),
          f[55] !== w || f[56] !== O || f[57] !== L
            ? ((t = (e, t) => {
                ;(O({ draft: e, step: t }), L(null), w(e.name))
              }),
              (f[55] = w),
              (f[56] = O),
              (f[57] = L),
              (f[58] = t))
            : (t = f[58]),
          f[59] !== h ||
          f[60] !== K ||
          f[61] !== C ||
          f[62] !== j ||
          f[63] !== v ||
          f[64] !== b ||
          f[65] !== t ||
          f[66] !== n ||
          f[67] !== r ||
          f[68] !== a ||
          f[69] !== e ||
          f[70] !== p
            ? ((i = (0, s.jsx)(
                tv,
                {
                  accountId: h,
                  contactVerificationEnabled: C,
                  userId: p,
                  profileId: b,
                  draft: r,
                  shopifyRouting: a,
                  onPublishedCreation: v,
                  onPersist: e,
                  onCancel: K,
                  onComplete: j,
                  onEdit: t,
                },
                n,
              )),
              (f[59] = h),
              (f[60] = K),
              (f[61] = C),
              (f[62] = j),
              (f[63] = v),
              (f[64] = b),
              (f[65] = t),
              (f[66] = n),
              (f[67] = r),
              (f[68] = a),
              (f[69] = e),
              (f[70] = p),
              (f[71] = i))
            : (i = f[71]),
          i
        )
      }
      let Z = E?.name ?? m,
        X = W?.draft ?? G,
        Y = W?.step ?? M
      return (
        f[72] !== h || f[73] !== L || f[74] !== p
          ? ((d = (e) => {
              if (null != e.shopifyRouting) {
                let t = e2(h, p)
                ;(t.pending(), t.savePending(e, "review"))
              }
              L(e)
            }),
            (f[72] = h),
            (f[73] = L),
            (f[74] = p),
            (f[75] = d))
          : (d = f[75]),
        f[76] !== h ||
        f[77] !== C ||
        f[78] !== J ||
        f[79] !== P ||
        f[80] !== Z ||
        f[81] !== X ||
        f[82] !== Y ||
        f[83] !== d
          ? ((u = (0, s.jsx)(
              tr,
              {
                accountId: h,
                contactVerificationEnabled: C,
                name: Z,
                initialDraft: X,
                initialStep: Y,
                onCancel: J,
                onReview: d,
              },
              P,
            )),
            (f[76] = h),
            (f[77] = C),
            (f[78] = J),
            (f[79] = P),
            (f[80] = Z),
            (f[81] = X),
            (f[82] = Y),
            (f[83] = d),
            (f[84] = u))
          : (u = f[84]),
        u
      )
    }
    var tP = i("Gnfq"),
      tN = i("SFAW"),
      tD = i("NAwl")
    let tR = tD.H - tD.so,
      { desktop: tE, mobile: tM } = tD.fK,
      tT = {
        "--desktop-icon-width": `${((tE.iconSize * tN.fp) / tE.width) * 100}%`,
        "--mobile-icon-width": `${((tM.iconSize * tN.fp) / tM.width) * 100}%`,
      },
      tW = ["store", "toys", "wrench", "basket", "books", "cart"].map((e, t) => {
        let i = (0, tD.cr)(t, tR, tE),
          s = (0, tD.cr)(t, tR, tM),
          n = tN.kK.indexOf(e),
          r = Math.floor(n / 7)
        return {
          key: e,
          style: {
            "--desktop-x": `${(i.x / tE.width) * 100}%`,
            "--desktop-y": `${(i.y / tE.height) * 100}%`,
            "--mobile-x": `${(s.x / tM.width) * 100}%`,
            "--mobile-y": `${(s.y / tM.height) * 100}%`,
            backgroundImage: `url(${tN.jJ})`,
            backgroundSize: `700% ${100 * tN.fV}%`,
            backgroundPosition: `${((n % 7) / 6) * 100}% ${(r / (tN.fV - 1)) * 100}%`,
            transform: `translate(-50%, -50%) rotate(${-i.rotation}rad)`,
          },
        }
      })
    function tO() {
      let e,
        t,
        r,
        a,
        o,
        c = (0, n.c)(8),
        d = (0, l.useRef)(null),
        u = (0, l.useRef)(null),
        [f, h] = (0, l.useState)("loading"),
        [p, m] = (0, l.useState)(!1)
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => {
            let e,
              t = d.current,
              s = u.current
            if (!t || !s) return
            let n = window.matchMedia("(prefers-reduced-motion: reduce)"),
              r = !1,
              a = !1,
              l = !1,
              o = !1,
              c = function () {
                return o && !document.hidden && !n.matches && !a
              },
              f = function () {
                ;((a = !0), e?.dispose(), (e = void 0), r || (h("fallback"), m(!1)))
              },
              p = function () {
                ;((l = !0),
                  Promise.all([i.e(910996), i.e(406151)])
                    .then(i.bind(i, "ItwM"))
                    .then(({ createArtworkRenderer: e }) => e)
                    .then((t) => {
                      s &&
                        !r &&
                        c() &&
                        (e = t(
                          s,
                          () => {
                            r || h("ready")
                          },
                          f,
                        )).setPlaying(c())
                    })
                    .catch(f)
                    .finally(() => {
                      l = !1
                    }))
              },
              b = function () {
                let t = c()
                ;(m(t), e?.setPlaying(t), !t || e || l || p())
              },
              g = new IntersectionObserver((e) => {
                let [t] = e
                ;((o = t?.isIntersecting ?? !1), b())
              })
            return (
              g.observe(t),
              document.addEventListener("visibilitychange", b),
              n.addEventListener("change", b),
              () => {
                ;((r = !0),
                  g.disconnect(),
                  document.removeEventListener("visibilitychange", b),
                  n.removeEventListener("change", b),
                  e?.dispose())
              }
            )
          }),
          (t = []),
          (c[0] = e),
          (c[1] = t))
        : ((e = c[0]), (t = c[1])),
        (0, l.useEffect)(e, t))
      let b = "ready" === f,
        g = "fallback" === f
      return (
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)("div", { className: "staticArc-a9ikAv", style: tT, children: tW.map(tF) })),
            (a = (0, s.jsx)("canvas", { ref: u, className: "animatedArc-frWWcS" })),
            (c[2] = r),
            (c[3] = a))
          : ((r = c[2]), (a = c[3])),
        c[4] !== p || c[5] !== b || c[6] !== g
          ? ((o = (0, s.jsxs)("div", {
              ref: d,
              className: "artwork-JC7Ncc",
              "aria-hidden": !0,
              "data-ready": b,
              "data-fallback": g,
              "data-playing": p,
              children: [r, a],
            })),
            (c[4] = p),
            (c[5] = b),
            (c[6] = g),
            (c[7] = o))
          : (o = c[7]),
        o
      )
    }
    function tF(e) {
      let { key: t, style: i } = e
      return (0, s.jsx)("span", { style: i }, t)
    }
    function tL(e) {
      return null != e.businessProfileId ? "profile:" + e.businessProfileId : "local:" + e.place.entity_lookup_id
    }
    var tU = i("Z0qe")
    let tq = (0, z.a)({
      name: "multicolor-verified-checkmark-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
        visualBounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#00B1FF",
            bounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
            wideGamut: "color(display-p3 0.0000 0.6941 1.0000)",
          },
          { role: "fixed", color: "#FFFFFF", bounds: { x: 5.279785, y: 5.384766, width: 5.358887, height: 5.230957 } },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.789063, y: 1.332031, width: 12.421387, height: 13.335938 },
        center: { x: 7.999757, y: 8 },
        insets: { top: 1.332031, right: 1.78955, bottom: 1.332031, left: 1.789063 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999757, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99997 1.33203C9.23724 1.33206 10.3126 2.02323 10.8625 3.04027C12.0186 3.00749 13.1556 3.594 13.7745 4.66593C14.3932 5.73765 14.3324 7.0151 13.7262 7.99984C14.3324 8.98464 14.3932 10.262 13.7745 11.3338C13.1556 12.4057 12.0186 12.9916 10.8624 12.9588C10.3127 13.9762 9.23737 14.6677 7.9999 14.6678C6.7623 14.6678 5.68652 13.9763 5.1368 12.9589C3.98084 12.9915 2.84417 12.4056 2.2254 11.3338C1.6067 10.2622 1.66702 8.9847 2.27306 7.9999C1.66704 7.01517 1.60672 5.73766 2.22544 4.666C2.84422 3.59421 3.9809 3.00771 5.13686 3.0403C5.68667 2.02313 6.76264 1.33204 7.99997 1.33203Z" fill="#00B1FF"/> <path d="M9.4087 5.69472C9.6057 5.38372 10.0176 5.29132 10.3286 5.48834C10.6396 5.68538 10.732 6.09724 10.535 6.40826L8.1847 10.1186C8.15963 10.1582 8.11783 10.2256 8.0747 10.282C8.0285 10.3423 7.93456 10.454 7.7785 10.5306C7.59363 10.6213 7.3815 10.6403 7.18343 10.584C7.01603 10.5364 6.9037 10.4431 6.8475 10.392C6.79483 10.344 6.74117 10.2852 6.7095 10.2507L5.45556 8.8881C5.20633 8.61716 5.22443 8.1953 5.49527 7.94603C5.76624 7.69676 6.18806 7.7141 6.43733 7.9851L7.3377 8.96356L9.4087 5.69472Z" fill="white"/>',
    })
    var t$ = i("suje"),
      tB = "suggestions-nrhhAz",
      tG = "menu-F6kN1t"
    function tz(e) {
      let t,
        i,
        r,
        a,
        o,
        u,
        f,
        h,
        p,
        m,
        g,
        v = (0, n.c)(44),
        { query: y, configuration: w, onSelect: _, createAction: j, open: C } = e,
        S = (0, c.A)(),
        { adapter: A, accountId: I } = w,
        [k] = (0, l.useState)(tV),
        P = w.revision ?? 0
      ;(v[0] !== I || v[1] !== y || v[2] !== P
        ? ((t = ["business-profile-name-search", I, y, P]), (v[0] = I), (v[1] = y), (v[2] = P), (v[3] = t))
        : (t = v[3]),
        v[4] !== I || v[5] !== A || v[6] !== y
          ? ((i = async (e) => {
              let { signal: t } = e,
                i = await A.search({ query: y, accountId: I, signal: t }),
                s = new Set()
              return i.filter((e) => {
                let t = tL(e)
                return !s.has(t) && (s.add(t), !0)
              })
            }),
            (v[4] = I),
            (v[5] = A),
            (v[6] = y),
            (v[7] = i))
          : (i = v[7]),
        v[8] !== y ? ((r = y.trim()), (v[8] = y), (v[9] = r)) : (r = v[9]))
      let N = !!r
      v[10] !== t || v[11] !== i || v[12] !== N
        ? ((a = { queryKey: t, queryFn: i, enabled: N, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
          (v[10] = t),
          (v[11] = i),
          (v[12] = N),
          (v[13] = a))
        : (a = v[13])
      let { data: D, isFetching: R, isError: E, refetch: M } = (0, Z.I)(a, k)
      if (!y.trim()) return null
      let T = !C,
        O = E ? null : j,
        F =
          !R && (E || (null != D && D.length > 0))
            ? "sr-only"
            : "px-2.5 py-1.5 text-[13px] leading-[18px] text-secondary"
      return (
        v[14] !== R
          ? ((o = R
              ? (0, s.jsx)(d.A, {
                  id: "businessProfiles.search.results.loading",
                  defaultMessage: "Searching businesses…",
                  description:
                    "Status below the Business Profile name search field while matching existing business profiles are being loaded. This searches business names only.",
                })
              : null),
            (v[14] = R),
            (v[15] = o))
          : (o = v[15]),
        v[16] !== E || v[17] !== R || v[18] !== D
          ? ((u =
              R || E || null == D
                ? null
                : (0, s.jsx)(d.A, {
                    id: "businessProfiles.search.results.count",
                    defaultMessage:
                      "{count, plural, =0 {No matching business} one {# matching business} other {# matching businesses}}",
                    description:
                      "Status below the Business Profile name search field after a successful search. {count} is the number of matching existing profiles. Zero means the search succeeded without matches, not that it failed.",
                    values: { count: D.length },
                  })),
            (v[16] = E),
            (v[17] = R),
            (v[18] = D),
            (v[19] = u))
          : (u = v[19]),
        v[20] !== o || v[21] !== u || v[22] !== F
          ? ((f = (0, s.jsxs)("p", { role: "status", className: F, children: [o, u] })),
            (v[20] = o),
            (v[21] = u),
            (v[22] = F),
            (v[23] = f))
          : (f = v[23]),
        v[24] !== E || v[25] !== R || v[26] !== M
          ? ((h =
              !R && E
                ? (0, s.jsxs)("div", {
                    className: "flex min-h-30 flex-col items-center justify-center gap-3 px-2.5 py-3 text-center",
                    children: [
                      (0, s.jsx)("p", {
                        role: "alert",
                        className: "text-sm",
                        children: (0, s.jsx)(d.A, {
                          id: "businessProfiles.search.results.loadError",
                          defaultMessage: "Something went wrong",
                          description:
                            "Error below the Business Profile name search field when matching profiles could not be loaded. Retrying repeats the search; this does not mean no businesses matched.",
                        }),
                      }),
                      (0, s.jsxs)(b.$, {
                        type: "button",
                        color: "outlineGhost",
                        size: "dialog",
                        onClick: () => void M(),
                        children: [
                          (0, s.jsx)(W.I, { asset: tU.E, "aria-hidden": "true" }),
                          (0, s.jsx)(d.A, {
                            id: "businessProfiles.search.results.retry",
                            defaultMessage: "Try again",
                            description:
                              "Button in the business suggestions dropdown after a search fails. Repeats the search with the same business name.",
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (v[24] = E),
            (v[25] = R),
            (v[26] = M),
            (v[27] = h))
          : (h = v[27]),
        v[28] !== S || v[29] !== E || v[30] !== R || v[31] !== _ || v[32] !== D || v[33] !== M
          ? ((p =
              R || E || null == D || !(D.length > 0)
                ? null
                : (0, s.jsx)("ul", {
                    className: "results-Yrnd1r",
                    "aria-label": S.formatMessage({
                      id: "businessProfiles.search.results.label",
                      defaultMessage: "Matching businesses",
                      description:
                        "Accessible label for the list of existing Business Profiles matching a business-name search. Selecting a result opens its business details, where available actions depend on the profile’s ownership status.",
                    }),
                    children: D.map((e) =>
                      (0, s.jsxs)(
                        "li",
                        {
                          children: [
                            "unavailable" === e.ownership
                              ? (0, s.jsx)("div", {
                                  className:
                                    "flex min-h-9 items-center gap-1.5 px-2.5 py-1.5 text-[13px] leading-[18px]",
                                  children: (0, s.jsx)(tK, { profile: e }),
                                })
                              : (0, s.jsx)(x.t, {
                                  highlighted: !1,
                                  variant: "search",
                                  type: "button",
                                  "data-business-profile-result": e.canonicalId ?? tL(e),
                                  "data-business-profile-option": !0,
                                  onClick: (t) => _?.(e, t.currentTarget),
                                  children: (0, s.jsx)(tK, { profile: e }),
                                }),
                            "unavailable" === e.ownership
                              ? (0, s.jsxs)("div", {
                                  className: "flex flex-col items-start gap-2 px-2.5 pb-1.5",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "text-sm text-secondary",
                                      children: (0, s.jsx)(d.A, {
                                        id: "businessProfiles.search.results.unavailable",
                                        defaultMessage:
                                          "This profile is no longer available. Refresh the results to try again.",
                                        description:
                                          "Explanation for an unavailable or stale Business Profile search result. The owner cannot claim or manage this result and can refresh the current name search.",
                                      }),
                                    }),
                                    (0, s.jsx)(b.$, {
                                      type: "button",
                                      color: "secondary",
                                      onClick: () => void M(),
                                      children: (0, s.jsx)(d.A, {
                                        id: "businessProfiles.search.results.refresh",
                                        defaultMessage: "Refresh results",
                                        description:
                                          "Button on an unavailable Business Profile search result. Repeats the same name search to retrieve current profiles.",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        },
                        tL(e),
                      ),
                    ),
                  })),
            (v[28] = S),
            (v[29] = E),
            (v[30] = R),
            (v[31] = _),
            (v[32] = D),
            (v[33] = M),
            (v[34] = p))
          : (p = v[34]),
        v[35] !== f || v[36] !== h || v[37] !== p || v[38] !== O
          ? ((m = (0, s.jsxs)(x.W, { className: tG, variant: "search", children: [O, f, h, p] })),
            (v[35] = f),
            (v[36] = h),
            (v[37] = p),
            (v[38] = O),
            (v[39] = m))
          : (m = v[39]),
        v[40] !== R || v[41] !== m || v[42] !== T
          ? ((g = (0, s.jsx)("section", { className: tB, hidden: T, "aria-busy": R, children: m })),
            (v[40] = R),
            (v[41] = m),
            (v[42] = T),
            (v[43] = g))
          : (g = v[43]),
        g
      )
    }
    function tV() {
      return new t$.E()
    }
    function tK(e) {
      let t,
        i,
        r,
        a,
        l,
        o,
        d,
        u,
        f = (0, n.c)(22),
        { profile: h } = e,
        p = (0, c.A)()
      f[0] !== h.address || f[1] !== h.website
        ? ((t = h.address?.trim() || h.website?.trim()), (f[0] = h.address), (f[1] = h.website), (f[2] = t))
        : (t = f[2])
      let m = t
      return (
        f[3] !== h.name
          ? ((i = (0, s.jsx)("bdi", { className: "min-w-0 break-words", children: h.name })),
            (f[3] = h.name),
            (f[4] = i))
          : (i = f[4]),
        f[5] !== p || f[6] !== h.ownership
          ? ((r =
              "manageable" === h.ownership || "claimed" === h.ownership
                ? (0, s.jsx)(W.I, {
                    asset: tq,
                    className: "shrink-0",
                    label: p.formatMessage({
                      id: "businessProfiles.search.results.claimedBadge",
                      defaultMessage: "Claimed",
                      description:
                        "Accessible label for the blue verification check beside an existing business name in the Business Profile search dropdown. Indicates that an owner or authorized representative has claimed this profile; it may belong to the current account or another account. Short status label, not an action.",
                    }),
                  })
                : null),
            (f[5] = p),
            (f[6] = h.ownership),
            (f[7] = r))
          : (r = f[7]),
        f[8] !== i || f[9] !== r
          ? ((a = (0, s.jsxs)("span", { className: "flex min-w-0 items-center gap-1 font-normal", children: [i, r] })),
            (f[8] = i),
            (f[9] = r),
            (f[10] = a))
          : (a = f[10]),
        f[11] !== m || f[12] !== h.address
          ? ((l = m
              ? (0, s.jsx)("span", {
                  className: h.address?.trim() ? "break-words text-tertiary" : "truncate text-tertiary",
                  title: m,
                  children: (0, s.jsx)("bdi", { children: m }),
                })
              : null),
            (f[11] = m),
            (f[12] = h.address),
            (f[13] = l))
          : (l = f[13]),
        f[14] !== a || f[15] !== l
          ? ((o = (0, s.jsxs)("span", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [a, l] })),
            (f[14] = a),
            (f[15] = l),
            (f[16] = o))
          : (o = f[16]),
        f[17] !== h.logoUrl
          ? ((d = (0, s.jsx)(tJ, { src: h.logoUrl }, h.logoUrl)), (f[17] = h.logoUrl), (f[18] = d))
          : (d = f[18]),
        f[19] !== o || f[20] !== d
          ? ((u = (0, s.jsxs)(s.Fragment, { children: [o, d] })), (f[19] = o), (f[20] = d), (f[21] = u))
          : (u = f[21]),
        u
      )
    }
    function tJ(e) {
      let t,
        i,
        r = (0, n.c)(5),
        { src: a } = e,
        [o, c] = (0, l.useState)(!1)
      return (
        r[0] !== o || r[1] !== a
          ? ((t =
              a && !o
                ? (0, s.jsx)("img", {
                    alt: "",
                    className: "size-full rounded-full object-contain",
                    src: a,
                    onError: () => c(!0),
                  })
                : null),
            (r[0] = o),
            (r[1] = a),
            (r[2] = t))
          : (t = r[2]),
        r[3] !== t
          ? ((i = (0, s.jsx)("span", { className: "size-6 shrink-0", children: t })), (r[3] = t), (r[4] = i))
          : (i = r[4]),
        i
      )
    }
    var tH = i("VUft")
    let tQ = "oai/apps/hasSeenBusinessProfileCreationOnboarding",
      tZ = {
        async search({ query: e, accountId: t, signal: i }) {
          i.throwIfAborted()
          let s = await p.Request.safeGet("/chat/frontend/v1/business-profiles/search", {
            additionalHeaders: { "x-openai-use-sheep": "1", "ChatGPT-Account-ID": t, [a.zBc]: t },
            signal: i,
            parameters: { query: { query: e, limit: 16, include_local: !0 } },
          })
          return (
            i.throwIfAborted(),
            (function (e, t, i) {
              let s = (e) => e.trim().replace(/\s+/g, " ").toLowerCase(),
                n = s(e),
                r = t.filter((e) => s(e.name) === n),
                a = t.filter((e) => s(e.name) !== n),
                l = new Set(t.map((e) => e.businessProfileId)),
                o = i.filter((e) => null == e.businessProfileId || !l.has(e.businessProfileId)),
                c = [...r]
              for (let e = 0; e < Math.max(a.length, o.length); e++) {
                let t = a[e],
                  i = o[e]
                ;(null != t && c.push(t), null != i && c.push(i))
              }
              let d = new Set()
              return c
                .filter((e) => {
                  let t = tL(e)
                  return !d.has(t) && (d.add(t), !0)
                })
                .slice(0, 16)
            })(
              e,
              s.results.map((e) => ({
                canonicalId: e.canonical_id,
                businessProfileId: e.business_profile_id,
                name: e.display_name,
                kind: e.kind,
                address: e.display_address ?? void 0,
                website: e.website_url ?? void 0,
                logoUrl: e.logo_url ?? void 0,
              })),
              (s.local_results ?? []).map((e) => {
                let t = {
                  name: e.display_name,
                  businessType: "local",
                  address: e.display_address ?? void 0,
                  website: e.website_url ?? void 0,
                  logoUrl: e.logo_url ?? void 0,
                }
                return null != e.business_profile_id
                  ? { ...t, businessProfileId: e.business_profile_id }
                  : { ...t, place: e }
              }),
            )
          )
        },
      }
    function tX(e) {
      let t,
        i,
        a,
        l = (0, n.c)(16),
        { accountId: o, userId: c } = (0, h.As)(),
        d = (0, r._U)(_.JW, C.lX),
        u = (0, r._U)(_.JW, C.eA)
      l[0] !== o || l[1] !== e.search || l[2] !== e.useCanonicalSearch || l[3] !== c
        ? ((t = e.search ?? (e.useCanonicalSearch && null != o && null != c ? { adapter: tZ, accountId: o } : void 0)),
          (l[0] = o),
          (l[1] = e.search),
          (l[2] = e.useCanonicalSearch),
          (l[3] = c),
          (l[4] = t))
        : (t = l[4])
      let f = t,
        p = `${o}:${c}:${e.search?.accountId}`
      return (
        l[5] !== o || l[6] !== u || l[7] !== e || l[8] !== d || l[9] !== c
          ? ((i = (t, i) =>
              (0, s.jsx)(
                tY,
                { ...e, search: t, onSelect: i, accountId: o, userId: c, searchEnabled: d, creationEnabled: u },
                `${u}`,
              )),
            (l[5] = o),
            (l[6] = u),
            (l[7] = e),
            (l[8] = d),
            (l[9] = c),
            (l[10] = i))
          : (i = l[10]),
        l[11] !== o || l[12] !== f || l[13] !== p || l[14] !== i
          ? ((a = (0, s.jsx)(ep.F, { accountId: o, search: f, children: i }, p)),
            (l[11] = o),
            (l[12] = f),
            (l[13] = p),
            (l[14] = i),
            (l[15] = a))
          : (a = l[15]),
        a
      )
    }
    function tY(e) {
      let t,
        i,
        a,
        p,
        C,
        A,
        I,
        k,
        P,
        D,
        R,
        E,
        M,
        T,
        W,
        O,
        F,
        U,
        q,
        $,
        B,
        G,
        z,
        V,
        K,
        J,
        H,
        Q,
        Z,
        X = (0, n.c)(110),
        {
          canGoBack: Y,
          search: ee,
          onSelect: et,
          useCanonicalSearch: ei,
          accountId: es,
          userId: en,
          searchEnabled: er,
          creationEnabled: ea,
        } = e,
        el = void 0 !== ei && ei,
        eo = (0, r.gh)(w.u),
        ec = (0, c.A)()
      X[0] !== ea ? ((t = { enabled: ea }), (X[0] = ea), (X[1] = t)) : (t = X[1])
      let eu = (0, r.Ul)(m.Sk, t)
      X[2] !== ea ? ((i = { enabled: ea }), (X[2] = ea), (X[3] = i)) : (i = X[3])
      let ef = (0, r.Ul)(f.o8, i),
        eh = null != es && eu === es && null != ef,
        ep = ea && eh
      X[4] !== ep ? ((a = { enabled: ep }), (X[4] = ep), (X[5] = a)) : (a = X[5])
      let { data: em, isError: eb } = (0, r.Ul)(m.s6, a),
        [eg, ev] = (0, l.useState)(!1),
        ey = ea && (!eh || null == em) && !eb && !eg
      ;(X[6] !== ey
        ? ((p = () => {
            if (!ey) return
            let e = setTimeout(() => ev(!0), 3e3)
            return () => clearTimeout(e)
          }),
          (C = [ey]),
          (X[6] = ey),
          (X[7] = p),
          (X[8] = C))
        : ((p = X[7]), (C = X[8])),
        (0, l.useEffect)(p, C))
      let ex = (0, u.Zp)(),
        ew = (0, u.zy)(),
        e_ = (0, h.As)(),
        ej = (0, l.useRef)(e_)
      ;(X[9] !== e_
        ? ((A = () => {
            ej.current = e_
          }),
          (I = [e_]),
          (X[9] = e_),
          (X[10] = A),
          (X[11] = I))
        : ((A = X[10]), (I = X[11])),
        (0, l.useLayoutEffect)(A, I))
      let eC = (0, l.useRef)(null)
      ;(X[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = () => () => eC.current?.abort()), (P = []), (X[12] = k), (X[13] = P))
        : ((k = X[12]), (P = X[13])),
        (0, l.useEffect)(k, P),
        X[14] !== es || X[15] !== ew.state || X[16] !== en
          ? ((D = () => {
              if (null != es && null != en) return N(ew.state, es, en)
            }),
            (X[14] = es),
            (X[15] = ew.state),
            (X[16] = en),
            (X[17] = D))
          : (D = X[17]))
      let [eS, eA] = (0, l.useState)(D)
      X[18] !== ew.state ? ((R = () => ew.state), (X[18] = ew.state), (X[19] = R)) : (R = X[19])
      let [eI] = (0, l.useState)(R),
        ek = null == eS ? void 0 : eI
      X[20] !== es || X[21] !== en
        ? ((E = async (e, t, i) => {
            if (null == es || null == en || !0 !== e.published) throw Error("The business profile is not published")
            eC.current?.abort()
            let s = new AbortController()
            eC.current = s
            let n = AbortSignal.any([s.signal, AbortSignal.timeout(3e4)]),
              r = () => {
                ;(n.throwIfAborted(), i())
                let e = ej.current
                if (e.isLoading || "chatgpt" !== e.authMethod || e.accountId !== es || e.userId !== en)
                  throw new DOMException("Creation account changed", "AbortError")
              }
            await (0, tH.Ip)({
              actor: { accountId: es, userId: en, getAbortSignal: () => n, assertCurrentActor: r },
              businessProfileId: e.business_profile_id,
              routing: { ...t, testOverride: !1 },
              idempotencyKey: crypto.randomUUID(),
            })
              .then((i) => {
                ;(r(), window.location.assign(i))
                let s = e2(es, en),
                  n = s.pending()
                n?.draft.shopifyRouting?.shopGid === t.shopGid &&
                  n.draft.shopifyRouting.shopDomain === t.shopDomain &&
                  (null == n.draft.profileId || n.draft.profileId === e.business_profile_id) &&
                  s.clear()
              })
              .finally(() => {
                eC.current === s && (eC.current = null)
              })
          }),
          (X[20] = es),
          (X[21] = en),
          (X[22] = E))
        : (E = X[22])
      let eP = E
      X[23] !== ec
        ? ((M = ec.formatMessage({
            id: "businessProfiles.search.input.label",
            defaultMessage: "Search business",
            description:
              "Label and placeholder for the business search field on the page for finding or creating a business profile in ChatGPT.",
          })),
          (X[23] = ec),
          (X[24] = M))
        : (M = X[24])
      let eN = M,
        [eD, eR] = (0, u.ok)(),
        eE = "1" === eD.get("create") && null != N(ew.state, es, en),
        [eM, eT] = (0, l.useState)(eS?.shop_name ?? ""),
        [eW, eO] = (0, l.useState)(null),
        [eF, eL] = (0, l.useState)(!1),
        [eU, eq] = (0, l.useState)(!1),
        e$ = (0, l.useRef)(null),
        eB = (0, l.useRef)(null)
      ;(X[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = () => () => eB.current?.abort()), (W = []), (X[25] = T), (X[26] = W))
        : ((T = X[25]), (W = X[26])),
        (0, l.useEffect)(T, W))
      let eG = (0, r._U)(_.JW, "4046009702")
      X[27] !== eD ? ((O = eD.get("creation")), (X[27] = eD), (X[28] = O)) : (O = X[28])
      let ez = O
      X[29] !== ek || X[30] !== eD || X[31] !== eR || X[32] !== eG
        ? ((F = function (e) {
            eO(e)
            let t = new URLSearchParams(eD)
            ;(t.delete("claim"),
              t.set("create", "1"),
              eG && t.set("creation_session", "1"),
              eR(t, { replace: !0, state: ek }))
          }),
          (X[29] = ek),
          (X[30] = eD),
          (X[31] = eR),
          (X[32] = eG),
          (X[33] = F))
        : (F = X[33])
      let eV = F
      if (
        ea &&
        null != es &&
        null != en &&
        (null != eW ||
          null != ez ||
          eE ||
          ("1" === eD.get("creation_session") && (eG || e2(es, en).hasRecoverableSubmission())))
      ) {
        let e,
          t,
          i,
          n,
          r,
          a = eW ?? eS?.shop_name ?? ""
        return (
          X[34] !== es || X[35] !== ez || X[36] !== ew.state || X[37] !== eD || X[38] !== eR || X[39] !== en
            ? ((e = (e) => {
                let t = void 0 !== e && e
                ;(eC.current?.abort(), t || eA(void 0))
                let i = e2(es, en),
                  s = i.pending()
                ;(t ||
                  s?.draft.shopifyRouting == null ||
                  (null != s.draft.profileId && s.draft.profileId !== ez) ||
                  i.clear(),
                  (0, o.flushSync)(() => eO(null)))
                let n = new URLSearchParams(eD)
                ;(n.delete("creation"),
                  n.delete("created"),
                  n.delete("claim"),
                  n.set("create", "1"),
                  n.delete("creation_session"))
                let r = ew.state
                ;(eR(n, {
                  replace: !0,
                  state:
                    null != r && "object" == typeof r && !Array.isArray(r) && "shopifyCreationPrefill" in r
                      ? { ...r, shopifyCreationPrefill: void 0 }
                      : r,
                }),
                  e$.current?.focus({ preventScroll: !0 }))
              }),
              (X[34] = es),
              (X[35] = ez),
              (X[36] = ew.state),
              (X[37] = eD),
              (X[38] = eR),
              (X[39] = en),
              (X[40] = e))
            : (e = X[40]),
          X[41] !== ek || X[42] !== eD || X[43] !== eR
            ? ((t = (e, t) => {
                let i = new URLSearchParams(eD)
                ;(i.set("create", "1"),
                  i.set("creation", e),
                  t && i.set("created", "1"),
                  i.delete("creation_session"),
                  eR(i, { replace: !0, state: ek }))
              }),
              (i = (e) => {
                eO(e)
                let t = new URLSearchParams(eD)
                ;(t.delete("creation"), t.delete("created"), eR(t, { replace: !0, state: ek }))
              }),
              (X[41] = ek),
              (X[42] = eD),
              (X[43] = eR),
              (X[44] = t),
              (X[45] = i))
            : ((t = X[44]), (i = X[45])),
          X[46] !== ex
            ? ((n = (e, t) => {
                ex((0, tP.Ds)(e, t))
              }),
              (X[46] = ex),
              (X[47] = n))
            : (n = X[47]),
          X[48] !== es ||
          X[49] !== ez ||
          X[50] !== eS ||
          X[51] !== eP ||
          X[52] !== a ||
          X[53] !== e ||
          X[54] !== t ||
          X[55] !== i ||
          X[56] !== n ||
          X[57] !== en
            ? ((r = (0, s.jsx)(tk, {
                accountId: es,
                userId: en,
                name: a,
                profileId: ez,
                creationPrefill: eS,
                onPublishedCreation: eP,
                onCancel: e,
                onPersist: t,
                onRestart: i,
                onComplete: n,
              })),
              (X[48] = es),
              (X[49] = ez),
              (X[50] = eS),
              (X[51] = eP),
              (X[52] = a),
              (X[53] = e),
              (X[54] = t),
              (X[55] = i),
              (X[56] = n),
              (X[57] = en),
              (X[58] = r))
            : (r = X[58]),
          r
        )
      }
      X[59] !== eV ||
      X[60] !== ea ||
      X[61] !== ek ||
      X[62] !== eh ||
      X[63] !== eD ||
      X[64] !== eM ||
      X[65] !== eR ||
      X[66] !== em ||
      X[67] !== eb ||
      X[68] !== ey
        ? ((U = ea
            ? (0, s.jsxs)(x.t, {
                highlighted: !1,
                "data-business-profile-option": !0,
                type: "button",
                disabled: ey,
                "aria-busy": ey,
                onClick: () => {
                  if ((eq(!1), !eh || null == em || eb || em.seenAnnouncements?.[tQ] != null)) eV(eM.trim())
                  else {
                    let e = new URLSearchParams(eD)
                    ;(e.delete("claim"), e.set("create", "1"), eR(e, { replace: !0, state: ek }), eL(!0))
                  }
                },
                variant: "search",
                onPointerDown: t1,
                children: [
                  (0, s.jsx)("span", {
                    className: "min-w-0 flex-1 truncate",
                    children: (0, s.jsx)(d.A, {
                      id: "businessProfiles.search.createOption",
                      defaultMessage: "Create ‘{name}’",
                      description:
                        "Action below the Business Profile search field for an owner to create a business with the name they typed. {name} is the business name entered by the user and must not be translated. The short label may be truncated on narrow screens. Selecting it opens an introduction to creating a business profile.",
                      values: { name: (0, s.jsx)("bdi", { children: eM.trim() }) },
                    }),
                  }),
                  (0, s.jsx)(g.sqn, {}),
                ],
              })
            : null),
          (X[59] = eV),
          (X[60] = ea),
          (X[61] = ek),
          (X[62] = eh),
          (X[63] = eD),
          (X[64] = eM),
          (X[65] = eR),
          (X[66] = em),
          (X[67] = eb),
          (X[68] = ey),
          (X[69] = U))
        : (U = X[69])
      let eK = U
      return (
        X[70] !== Y || X[71] !== ec || X[72] !== eD || X[73] !== eR
          ? ((q = Y
              ? (0, s.jsx)("div", {
                  className: "flex p-3",
                  children: (0, s.jsx)(b.$, {
                    color: "ghostActive",
                    size: "pageAction",
                    "aria-label": ec.formatMessage({
                      id: "businessProfiles.search.backToBusinesses.accessibleLabel",
                      defaultMessage: "ChatGPT, back to businesses",
                      description:
                        "Accessible name of the button labeled ChatGPT at the top of the business search and creation entry page. It returns the owner to their business list. Include the visible name ChatGPT.",
                    }),
                    onClick: () => {
                      let e = new URLSearchParams(eD)
                      ;(e.delete("create"), e.delete("claim"), e.delete("creation_session"), eR(e))
                    },
                    children: (0, s.jsx)(S.M, { variant: "createEntry" }),
                  }),
                })
              : void 0),
            (X[70] = Y),
            (X[71] = ec),
            (X[72] = eD),
            (X[73] = eR),
            (X[74] = q))
          : (q = X[74]),
        X[75] !== eD ? (($ = !eD.has("claim") && (0, s.jsx)(tO, {})), (X[75] = eD), (X[76] = $)) : ($ = X[76]),
        X[77] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, s.jsx)("h1", {
              className:
                "text-center text-[22px] leading-7 font-normal tracking-[-0.26px] text-balance text-default md:text-heading-app md:leading-8.5 md:tracking-[0.38px]",
              children: (0, s.jsx)(d.A, {
                id: "businessProfiles.search.title",
                defaultMessage: "Reach new customers and grow your business with ChatGPT",
                description:
                  "Headline on the business search and creation page, inviting owners to add a profile so customers can discover their business in ChatGPT.",
              }),
            })),
            (X[77] = B))
          : (B = X[77]),
        X[78] !== eK ||
        X[79] !== ea ||
        X[80] !== et ||
        X[81] !== eM ||
        X[82] !== ee ||
        X[83] !== er ||
        X[84] !== eN ||
        X[85] !== eU ||
        X[86] !== el
          ? ((G =
              er || ea
                ? (0, s.jsx)("form", {
                    role: "search",
                    onFocusCapture: () => eq(!0),
                    onBlurCapture: (e) => {
                      e.currentTarget.contains(e.relatedTarget) || eq(!1)
                    },
                    onKeyDown: (e) => {
                      if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                        let t = e.target === e$.current
                        t && !eU && (0, o.flushSync)(() => eq(!0))
                        let i = Array.from(
                            e.currentTarget.querySelectorAll("[data-business-profile-option]:not(:disabled)"),
                          ),
                          s = i.findIndex((t) => t === e.target),
                          n = i[s + ("ArrowDown" === e.key ? 1 : -1)]
                        ;(t && (n = "ArrowDown" === e.key ? i[0] : i.at(-1)),
                          n
                            ? (e.preventDefault(), n.focus())
                            : 0 === s && "ArrowUp" === e.key && (e.preventDefault(), e$.current?.focus()))
                      }
                      "Escape" === e.key && eU && (e.preventDefault(), e$.current?.focus(), eq(!1))
                    },
                    onSubmit: (e) => {
                      ;(e.preventDefault(), eM.trim() && (e$.current?.focus(), eq(!0)))
                    },
                    children: (0, s.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, s.jsx)(v.s, {
                          id: "business-profile-search",
                          inputRef: e$,
                          inputRole: "searchbox",
                          label: eN,
                          placeholder: eN,
                          searchQuery: eM,
                          variant: "discovery",
                          isClearable: !1,
                          className: "shadow-[0_4px_16px_rgba(0,0,0,0.05)]",
                          onSearchQueryChange: (e) => {
                            ;(eT(e), eq(!0))
                          },
                        }),
                        er && ee
                          ? (0, s.jsx)(
                              tz,
                              { query: eM, configuration: ee, onSelect: et, open: eU, createAction: eK },
                              ee.accountId,
                            )
                          : null,
                        ea && (!er || (!ee && !el)) && eM.trim() && eU
                          ? (0, s.jsx)("div", {
                              className: tB,
                              children: (0, s.jsx)(x.W, { className: tG, variant: "search", children: eK }),
                            })
                          : null,
                      ],
                    }),
                  })
                : (0, s.jsx)("p", {
                    className: "text-center text-sm text-secondary",
                    children: (0, s.jsx)(d.A, {
                      id: "businessProfiles.search.comingSoon",
                      defaultMessage: "Business search and profile creation are coming soon",
                      description:
                        "Informational message on the Business Profile discovery page for business owners whose account does not yet have access to finding or creating a profile. Replaces the search field and Create action while that feature is unavailable.",
                    }),
                  })),
            (X[78] = eK),
            (X[79] = ea),
            (X[80] = et),
            (X[81] = eM),
            (X[82] = ee),
            (X[83] = er),
            (X[84] = eN),
            (X[85] = eU),
            (X[86] = el),
            (X[87] = G))
          : (G = X[87]),
        X[88] !== $ || X[89] !== G
          ? ((z = (0, s.jsx)("div", {
              className: "stage-UZymPJ",
              children: (0, s.jsxs)("div", {
                className: "mx-auto flex w-full max-w-lg flex-col gap-6",
                children: [$, B, G],
              }),
            })),
            (X[88] = $),
            (X[89] = G),
            (X[90] = z))
          : (z = X[90]),
        X[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, s.jsx)("div", { className: "shrink-0 pb-5", children: (0, s.jsx)(ed, {}) })), (X[91] = V))
          : (V = X[91]),
        X[92] === Symbol.for("react.memo_cache_sentinel") ? ((K = () => eL(!1)), (X[92] = K)) : (K = X[92]),
        X[93] !== es || X[94] !== eV || X[95] !== ea || X[96] !== eh || X[97] !== eM || X[98] !== ef || X[99] !== eo
          ? ((J = () => {
              if (ea) {
                if (eh) {
                  eB.current?.abort()
                  let e = new AbortController()
                  ;((eB.current = e),
                    (0, m.hs)(eo, es, tQ, { userId: ef, signal: e.signal }).catch(() => {
                      e.signal.aborted || j.v.warning("Business profile creation onboarding acknowledgement failed")
                    }))
                }
                ;(eL(!1), eV(eM.trim()))
              }
            }),
            (X[93] = es),
            (X[94] = eV),
            (X[95] = ea),
            (X[96] = eh),
            (X[97] = eM),
            (X[98] = ef),
            (X[99] = eo),
            (X[100] = J))
          : (J = X[100]),
        X[101] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = () => e$.current?.focus({ preventScroll: !0 })), (X[101] = H))
          : (H = X[101]),
        X[102] !== ea || X[103] !== eF || X[104] !== J
          ? ((Q = (0, s.jsx)(L, { creationEnabled: ea, open: eF, onClose: K, onContinue: J, onReturnFocus: H })),
            (X[102] = ea),
            (X[103] = eF),
            (X[104] = J),
            (X[105] = Q))
          : (Q = X[105]),
        X[106] !== q || X[107] !== z || X[108] !== Q
          ? ((Z = (0, s.jsxs)(y.Ql, {
              contentWidth: "profile",
              contentInset: !1,
              contentClassName: "pb-0!",
              balanceScrollbarGutter: !0,
              headerPlacement: "none",
              bannerPlacement: "edge",
              banner: q,
              title: null,
              children: [z, V, Q],
            })),
            (X[106] = q),
            (X[107] = z),
            (X[108] = Q),
            (X[109] = Z))
          : (Z = X[109]),
        Z
      )
    }
    function t1(e) {
      return e.preventDefault()
    }
  },
  SFAW(e, t, i) {
    i.d(t, { fp: () => n, jJ: () => s, kK: () => r, fV: () => a })
    let s = i.p + "assets/creation-icons.ac779f7f85.webp",
      n = 192 / 184,
      r = [
        "shopping",
        "drill",
        "coffee",
        "florist",
        "store",
        "books",
        "gym",
        "pizza",
        "basket",
        "hair-salon",
        "pet-treats",
        "cart",
        "croissant",
        "wrench",
        "toys",
        "groceries",
        "sewing-machine",
        "ramen",
        "plastic-bag",
        "nail-salon",
        "shopping-cart",
      ],
      a = Math.ceil(r.length / 7)
  },
  NAwl(e, t, i) {
    let s = Math.PI / 180,
      n = 2 * Math.PI,
      r = [3, 3, 1, 2, 1, 2],
      a = [1, -1, -1, 1]
    function l(e, t) {
      return ((e % t) + t) % t
    }
    i.d(
      t,
      {},
      {
        H: -120.3515874585339 * s,
        _g: l,
        cr: function (e, t, i) {
          let o = t + (e * n) / 18,
            c = Math.sin(o),
            d = l(o + Math.PI / 2, n),
            u = r[e % r.length],
            f = a[(Math.floor(e / 6) + e) % a.length],
            h = (1 + ((e + 2) % 3)) * d
          return {
            x: i.width / 2 + 508.7755778831807 * Math.cos(o) * i.pathScale,
            y: (99.22442211681931 + (1 + c) * 356.1429045182265) * i.pathScale,
            rotation: u * f * d + (8 + ((2 * e + 7) % 9)) * s * (Math.sin(h) + 0.5 * (1 - Math.cos(h))),
            visible: c < 0,
            sequence: e - 18 * Math.floor(o / n),
          }
        },
        fK: {
          desktop: { width: 512, height: 220, iconSize: 64, pathScale: 512 / 788.923 },
          mobile: { width: 393, height: 180, iconSize: 52, pathScale: 393 / 714.545 },
        },
        kS: 508.7755778831807,
        so: 15 * s,
      },
    )
  },
  Z0qe(e, t, i) {
    let s = (0, i("iJY0").a)({
      name: "arrow-rotate-clockwise-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        visualBounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641846, y: 1.641113, width: 12.716797, height: 12.716797 },
        center: { x: 8.000244, y: 7.999512 },
        insets: { top: 1.641113, right: 1.641357, bottom: 1.64209, left: 1.641846 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000244, y: 7.999512 }, foreground: { x: 8.000244, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00024 1.64111C10.2192 1.64122 12.1707 2.77917 13.3079 4.50049V3.13916C13.3079 2.84921 13.5433 2.61377 13.8333 2.61377C14.1232 2.61379 14.3586 2.84922 14.3586 3.13916V6.05615C14.3585 6.34594 14.1231 6.58055 13.8333 6.58057H11.2405C10.9507 6.58047 10.7162 6.34589 10.7161 6.05615C10.7161 5.76626 10.9506 5.53086 11.2405 5.53076H12.6975C11.808 3.84247 10.039 2.69201 8.00024 2.69189C5.06864 2.69189 2.69183 5.06795 2.69165 7.99951C2.69165 10.9312 5.06853 13.3081 8.00024 13.3081C10.5257 13.308 12.6406 11.5439 13.177 9.18018C13.2412 8.89744 13.5222 8.71957 13.8049 8.78369C14.0877 8.84785 14.2646 9.12984 14.2004 9.4126C13.5578 12.244 11.0266 14.3578 8.00024 14.3579C4.48863 14.3579 1.64185 11.5111 1.64185 7.99951C1.64202 4.48805 4.48874 1.64111 8.00024 1.64111Z" fill="currentColor"/>',
    })
    i.d(t, {}, { E: s })
  },
}
//# sourceMappingURL=750141.da98637363.js.map
