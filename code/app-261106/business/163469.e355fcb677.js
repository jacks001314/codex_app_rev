export const __rspack_esm_ids = [163469]
export const __webpack_modules__ = {
  vJSB(e, a) {
    a.A = { scope: "scope-QdG_CW" }
  },
  pCau(e, a, s) {
    s.d(a, {
      Ob: () => P,
      EI: () => Y,
      AR: () => j,
      Mi: () => A,
      Mq: () => k,
      KG: () => C,
      cK: () => I,
      BK: () => W,
      x9: () => L,
      Ue: () => c,
      HV: () => m,
      LP: () => b,
      Rn: () => V,
      dy: () => g,
      eN: () => N,
      _b: () => D,
    })
    var t,
      i = s("ABep"),
      n = s("QosV"),
      l = s("oyxz")
    let r = "https://help.openai.com/articles/20001047-ads-in-chatgpt"
    var d = "_6fdnkEs087",
      o = "_7avDSbjoGb"
    let c = (e) => {
        let a,
          s,
          t,
          c,
          m,
          b,
          x = (0, n.c)(18),
          { aboutAdContent: f, adsContent: j, personalizationUnavailable: g, onLearnMoreClick: p, primitives: _ } = e,
          v = void 0 !== g && g,
          { Favicon: A, FormattedText: y, Link: M } = _
        x[0] !== f?.advertiser_brands || x[1] !== j
          ? ((a =
              f?.advertiser_brands ??
              (function (e) {
                switch (e.type) {
                  case "single_advertiser_ad_unit":
                    return [e.advertiser_brand]
                  case "multi_advertiser_ad_unit":
                    return e.ads.map((e) => e.advertiser_brand)
                }
              })(j)),
            (x[0] = f?.advertiser_brands),
            (x[1] = j),
            (x[2] = a))
          : (a = x[2])
        let N = a
        return (
          x[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, i.jsx)(l.A, { id: "bazaar.about.advertiserHeader", defaultMessage: "Sponsored by" })),
              (x[3] = s))
            : (s = x[3]),
          x[4] !== A || x[5] !== N
            ? ((t = N?.map((e) =>
                (0, i.jsx)(
                  "div",
                  {
                    className: "_c-OtZoFyok",
                    children: (0, i.jsxs)("div", {
                      className: "_ebafsjCns3",
                      children: [
                        (0, i.jsx)(A, { brand: e, className: "_vh88Couc7W" }, e.favicon_url ?? e.url),
                        (0, i.jsxs)("div", {
                          className: "_gzsOfI3Z69",
                          children: [
                            (0, i.jsx)("span", { className: "_yQ6PN0tQei", children: e.name }),
                            (0, i.jsx)("span", {
                              children: (function (e) {
                                try {
                                  return new URL(e).host
                                } catch {
                                  return null
                                }
                              })(e.url),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.name,
                ),
              )),
              (x[4] = A),
              (x[5] = N),
              (x[6] = t))
            : (t = x[6]),
          x[7] !== t
            ? ((c = (0, i.jsx)(u, {
                title: s,
                children: (0, i.jsx)("div", { className: "_9mucGDs-jk", children: t }),
              })),
              (x[7] = t),
              (x[8] = c))
            : (c = x[8]),
          x[9] !== y || x[10] !== M || x[11] !== f?.sections || x[12] !== p || x[13] !== v
            ? ((m = v
                ? (0, i.jsx)(h, { onLearnMoreClick: p, Link: M })
                : (f?.sections?.map((e, a) =>
                    (0, i.jsx)(
                      u,
                      {
                        title: e.title,
                        children: (0, i.jsx)(y, { className: d, useSafeUrls: !1, children: e.body_markdown }),
                      },
                      a,
                    ),
                  ) ??
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(u, {
                        title: (0, i.jsx)(l.A, { id: "IlBCX1", defaultMessage: "Why you’re seeing this ad" }),
                        children: (0, i.jsx)(l.A, {
                          id: "chatgpt.ads.transparency_modal.why_section.body",
                          defaultMessage:
                            "This ad may be matched to broad topics from this chat or your past chats. <link>Learn more</link>",
                          values: { link: (e) => (0, i.jsx)(M, { to: r, className: o, onClick: p, children: e }) },
                        }),
                      }),
                      (0, i.jsx)(u, {
                        title: (0, i.jsx)(l.A, { id: "nHpm20", defaultMessage: "What’s shared with advertisers" }),
                        children: (0, i.jsx)(l.A, {
                          id: "DGYIUo",
                          defaultMessage:
                            "Advertisers only receive broad, non-identifying stats about how their ad performed — like total views or clicks.",
                        }),
                      }),
                      (0, i.jsx)(u, {
                        title: (0, i.jsx)(l.A, { id: "6NU2yL", defaultMessage: "Your data is kept private" }),
                        children: (0, i.jsx)(l.A, {
                          id: "PNdAH6",
                          defaultMessage: "Your chats and personal information aren’t shared with advertisers.",
                        }),
                      }),
                    ],
                  }))),
              (x[9] = y),
              (x[10] = M),
              (x[11] = f?.sections),
              (x[12] = p),
              (x[13] = v),
              (x[14] = m))
            : (m = x[14]),
          x[15] !== c || x[16] !== m
            ? ((b = (0, i.jsxs)("div", { className: "_j6Q0LZg0Sh", children: [c, m] })),
              (x[15] = c),
              (x[16] = m),
              (x[17] = b))
            : (b = x[17]),
          b
        )
      },
      h = (e) => {
        let a,
          s,
          t,
          d,
          c,
          h = (0, n.c)(8),
          { onLearnMoreClick: m, Link: b } = e
        return (
          h[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, i.jsx)(l.A, {
                id: "bazaar.aboutAd.personalizationUnavailable.why.title",
                defaultMessage: "Why you’re seeing this ad",
              })),
              (h[0] = a))
            : (a = h[0]),
          h[1] !== b || h[2] !== m
            ? ((s = (0, i.jsx)(u, {
                title: a,
                children: (0, i.jsx)(l.A, {
                  id: "bazaar.aboutAd.personalizationUnavailable.why.body",
                  defaultMessage:
                    "This ad matched the limited data that’s used to deliver you ads, like general location, context, and device type. <link>Learn more</link>",
                  values: { link: (e) => (0, i.jsx)(b, { to: r, className: o, onClick: m, children: e }) },
                }),
              })),
              (h[1] = b),
              (h[2] = m),
              (h[3] = s))
            : (s = h[3]),
          h[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(u, {
                title: (0, i.jsx)(l.A, {
                  id: "bazaar.aboutAd.personalizationUnavailable.shared.title",
                  defaultMessage: "What’s shared with advertisers",
                }),
                children: (0, i.jsx)(l.A, {
                  id: "bazaar.aboutAd.personalizationUnavailable.shared.body",
                  defaultMessage:
                    "Advertisers only receive broad, non-identifying stats about how their ad performed — like total views or clicks.",
                }),
              })),
              (h[4] = t))
            : (t = h[4]),
          h[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, i.jsx)(u, {
                title: (0, i.jsx)(l.A, {
                  id: "bazaar.aboutAd.personalizationUnavailable.private.title",
                  defaultMessage: "Your data is kept private",
                }),
                children: (0, i.jsx)(l.A, {
                  id: "bazaar.aboutAd.personalizationUnavailable.private.body",
                  defaultMessage: "Your chats and personal information aren’t shared with advertisers.",
                }),
              })),
              (h[5] = d))
            : (d = h[5]),
          h[6] !== s ? ((c = (0, i.jsxs)(i.Fragment, { children: [s, t, d] })), (h[6] = s), (h[7] = c)) : (c = h[7]),
          c
        )
      },
      u = (e) => {
        let a,
          s,
          t,
          l = (0, n.c)(7),
          { title: r, children: o } = e
        return (
          l[0] !== r
            ? ((a = (0, i.jsx)("h3", { className: "_sqWG6KpzbQ", children: r })), (l[0] = r), (l[1] = a))
            : (a = l[1]),
          l[2] !== o ? ((s = (0, i.jsx)("div", { className: d, children: o })), (l[2] = o), (l[3] = s)) : (s = l[3]),
          l[4] !== a || l[5] !== s
            ? ((t = (0, i.jsxs)("div", { className: "_Xj1CyhkqIS", children: [a, s] })),
              (l[4] = a),
              (l[5] = s),
              (l[6] = t))
            : (t = l[6]),
          t
        )
      },
      m = (e) => {
        let a,
          s,
          t = (0, n.c)(5),
          { personalizationUnavailable: r, title: d } = e
        return (
          t[0] !== r || t[1] !== d
            ? ((a = r
                ? (0, i.jsx)(l.A, {
                    id: "bazaar.aboutAd.personalizationUnavailable.title",
                    defaultMessage: "About this ad",
                  })
                : (d ?? (0, i.jsx)(l.A, { id: "I9R7dd", defaultMessage: "About this ad" }))),
              (t[0] = r),
              (t[1] = d),
              (t[2] = a))
            : (a = t[2]),
          t[3] !== a
            ? ((s = (0, i.jsx)("span", { className: "_to7Q2dJPdM", children: a })), (t[3] = a), (t[4] = s))
            : (s = t[4]),
          s
        )
      },
      b = () => {
        let e,
          a = (0, n.c)(1)
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, { id: "zPgVnK", defaultMessage: "Go ad-free" })), (a[0] = e))
            : (e = a[0]),
          e
        )
      }
    var x = s("on57"),
      f = s("zd8w")
    let j = (e) => {
      let a,
        s,
        t,
        l,
        r,
        d,
        o = (0, n.c)(18),
        { formId: c, feedbackText: h, onFeedbackTextChange: u, onSubmit: m, label: b } = e,
        j = (0, f.useId)()
      o[0] !== h ? ((a = h.trim()), (o[0] = h), (o[1] = a)) : (a = o[1])
      let g = a,
        p = 0 === g.length
      return (
        o[2] !== p || o[3] !== m || o[4] !== g
          ? ((s = (e) => {
              ;(e.preventDefault(), p || m(g))
            }),
            (o[2] = p),
            (o[3] = m),
            (o[4] = g),
            (o[5] = s))
          : (s = o[5]),
        o[6] !== u ? ((t = (e) => u(e.target.value)), (o[6] = u), (o[7] = t)) : (t = o[7]),
        o[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, x.A)("_YMWdZVhgk6", "_voVeuR95-t")), (o[8] = l))
          : (l = o[8]),
        o[9] !== h || o[10] !== b || o[11] !== t || o[12] !== j
          ? ((r = (0, i.jsx)("textarea", {
              id: j,
              "aria-label": b,
              name: j,
              rows: 5,
              value: h,
              onChange: t,
              className: l,
            })),
            (o[9] = h),
            (o[10] = b),
            (o[11] = t),
            (o[12] = j),
            (o[13] = r))
          : (r = o[13]),
        o[14] !== c || o[15] !== s || o[16] !== r
          ? ((d = (0, i.jsx)("form", { id: c, className: "_a6DW6FMXWR", onSubmit: s, children: r })),
            (o[14] = c),
            (o[15] = s),
            (o[16] = r),
            (o[17] = d))
          : (d = o[17]),
        d
      )
    }
    function g(e) {
      return {
        title: e.formatMessage({ id: "bazaar.customFeedbackModal.title", defaultMessage: "Share feedback on this ad" }),
        sendLabel: e.formatMessage({ id: "bazaar.customFeedbackModal.send", defaultMessage: "Send" }),
      }
    }
    var p = s("Wf1j"),
      _ = "_n4w37Rtxw6",
      v = "_S0KDt5jNFb"
    let A = (e) => {
      let a,
        s,
        t,
        r,
        d,
        o,
        c,
        h,
        u,
        m = (0, n.c)(43),
        {
          feedbackType: b,
          data: x,
          isPending: f,
          viewState: j,
          selectedOptionId: g,
          complete: A,
          onUndo: M,
          onClickOption: N,
          onSomethingElseClick: k,
          onReportClick: z,
          submitImmediately: S,
          undoEnabled: w,
          shouldShowGoAdFreeUpsell: C,
          onUpsellClick: T,
          disableGoAdFreeButton: R,
          goAdFreeDisabledTooltip: I,
          primitives: P,
        } = e,
        L = (0, p.A)(),
        { Button: O, CloseButton: U, Tooltip: E, Box: W } = P
      ;(m[0] !== T ? ((a = () => T?.()), (m[0] = T), (m[1] = a)) : (a = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(l.A, { id: "bazaar.feedback.upgrade", defaultMessage: "Go ad-free" })), (m[2] = s))
          : (s = m[2]),
        m[3] !== O || m[4] !== R || m[5] !== a
          ? ((t = (0, i.jsx)(O, { disabled: R, onClick: a, children: s })),
            (m[3] = O),
            (m[4] = R),
            (m[5] = a),
            (m[6] = t))
          : (t = m[6]))
      let F = t
      if ("completed" === j) return null
      if ("confirm-submit" === j) {
        let e, a
        return (
          m[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, { id: "Ojct+h", defaultMessage: "Thanks for your feedback" })), (m[7] = e))
            : (e = m[7]),
          m[8] !== U || m[9] !== A
            ? ((a = (0, i.jsxs)("div", {
                className: "_FOzgRdrevq",
                role: "status",
                "aria-live": "polite",
                children: [e, (0, i.jsx)(U, { onClick: A, className: "_yV_kCcqB8H" })],
              })),
              (m[8] = U),
              (m[9] = A),
              (m[10] = a))
            : (a = m[10]),
          a
        )
      }
      m[11] !== b || m[12] !== L
        ? ((r =
            "ads-hidden" === b
              ? L.formatMessage({ id: "bazaar.feedback.inline.title.hidden", defaultMessage: "Ad hidden" })
              : "ads-not-interested" === b
                ? L.formatMessage({
                    id: "bazaar.feedback.inline.title.not_interested",
                    defaultMessage: "Not interested",
                  })
                : L.formatMessage({ id: "bazaar.feedback.inline.title.reported", defaultMessage: "Ad reported" })),
          (m[11] = b),
          (m[12] = L),
          (m[13] = r))
        : (r = m[13])
      let Y = r
      return (
        m[14] !== Y
          ? ((d = (0, i.jsx)("h3", { className: "_l-Yfe9g2Cx", children: Y })), (m[14] = Y), (m[15] = d))
          : (d = m[15]),
        m[16] !== U || m[17] !== A || m[18] !== L || m[19] !== M || m[20] !== w
          ? ((o = w
              ? (0, i.jsx)("button", {
                  type: "button",
                  className: "_3FRNWXbUpu",
                  onClick: () => {
                    ;(A(), M?.())
                  },
                  children: (0, i.jsx)(l.A, { id: "bazaar.feedback.undo", defaultMessage: "Undo" }),
                })
              : (0, i.jsx)(U, {
                  onClick: A,
                  "aria-label": L.formatMessage({ id: "Ai4CeH", defaultMessage: "Close without feedback" }),
                  className: "_8IRrLXDwV8",
                })),
            (m[16] = U),
            (m[17] = A),
            (m[18] = L),
            (m[19] = M),
            (m[20] = w),
            (m[21] = o))
          : (o = m[21]),
        m[22] !== d || m[23] !== o
          ? ((c = (0, i.jsxs)("div", { className: "_iZ5WebII15", children: [d, o] })),
            (m[22] = d),
            (m[23] = o),
            (m[24] = c))
          : (c = m[24]),
        m[25] !== E ||
        m[26] !== x ||
        m[27] !== b ||
        m[28] !== I ||
        m[29] !== L ||
        m[30] !== f ||
        m[31] !== N ||
        m[32] !== z ||
        m[33] !== k ||
        m[34] !== g ||
        m[35] !== C ||
        m[36] !== S ||
        m[37] !== F
          ? ((h = f
              ? (0, i.jsxs)("div", {
                  className: "_UknqAllnpN group skeleton",
                  children: [
                    (0, i.jsx)("p", {
                      className: _,
                      children: (0, i.jsx)("div", { className: "_5TeL2M4GlH skeleton-child", "aria-hidden": !0 }),
                    }),
                    (0, i.jsx)("div", { className: "_iA9vsTe91_", children: Array.from({ length: 3 }).map(y) }),
                  ],
                })
              : x
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      x.preamble && (0, i.jsx)("p", { className: _, children: x.preamble }),
                      (0, i.jsxs)("div", {
                        className: "_WqZwn3eqCA",
                        role: S ? "group" : "radiogroup",
                        "aria-label": L.formatMessage({ id: "1r6MDU", defaultMessage: "Options" }),
                        children: [
                          x.options.map((e) =>
                            (0, i.jsx)(
                              "button",
                              {
                                type: "button",
                                role: S ? void 0 : "radio",
                                "aria-checked": S ? void 0 : e.id === g,
                                className: "_-J_ixp_3BN",
                                onClick: () => N(e.id),
                                children: e.text,
                              },
                              e.id,
                            ),
                          ),
                          S || "ads-hidden" !== b
                            ? null
                            : (0, i.jsx)("button", {
                                type: "button",
                                className: v,
                                onClick: z,
                                children: (0, i.jsx)(l.A, {
                                  id: "bazaar.ad.action.report",
                                  defaultMessage: "Report this ad",
                                }),
                              }),
                          (0, i.jsx)("button", {
                            type: "button",
                            className: v,
                            onClick: k,
                            children: (0, i.jsx)(l.A, { id: "bazaar.ad.action.other", defaultMessage: "Other" }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("p", {
                        className: "_VGIUR2AMU9",
                        children: (0, i.jsx)(l.A, {
                          id: "kLUR1M",
                          defaultMessage:
                            "Feedback will be used to improve the ads experience and help make ads more relevant to you.",
                        }),
                      }),
                      !S && C
                        ? (0, i.jsx)("div", {
                            children: I
                              ? (0, i.jsx)(E, { label: I, wide: !0, labelTextAlign: "left", children: F })
                              : F,
                          })
                        : null,
                    ],
                  })
                : (0, i.jsx)("p", {
                    className: "_u7MR59jUkr",
                    children: (0, i.jsx)(l.A, {
                      id: "bazaar.feedback.inline.unavailable",
                      defaultMessage: "Feedback options aren't available right now.",
                    }),
                  })),
            (m[25] = E),
            (m[26] = x),
            (m[27] = b),
            (m[28] = I),
            (m[29] = L),
            (m[30] = f),
            (m[31] = N),
            (m[32] = z),
            (m[33] = k),
            (m[34] = g),
            (m[35] = C),
            (m[36] = S),
            (m[37] = F),
            (m[38] = h))
          : (h = m[38]),
        m[39] !== W || m[40] !== c || m[41] !== h
          ? ((u = (0, i.jsxs)(W, {
              role: "status",
              "aria-live": "polite",
              className: "_fTv84aHuwW",
              children: [c, h],
            })),
            (m[39] = W),
            (m[40] = c),
            (m[41] = h),
            (m[42] = u))
          : (u = m[42]),
        u
      )
    }
    function y(e, a) {
      return (0, i.jsx)("div", { className: "_Whwjb1Mwrx skeleton-child", "aria-hidden": !0 }, a)
    }
    var M = "_WXZNRGufuw"
    function N(e, a, s) {
      let t = "ads-hidden" === a,
        i = "ads-not-interested" === a,
        n = t
          ? e.formatMessage({ id: "bazaar.hideFeedbackModal.title", defaultMessage: "Ad hidden" })
          : i
            ? e.formatMessage({ id: "bazaar.notInterestedFeedbackModal.title", defaultMessage: "Not interested" })
            : e.formatMessage({ id: "bazaar.reportFeedbackModal.title", defaultMessage: "Ad reported" }),
        l = t
          ? e.formatMessage({
              id: "bazaar.hideFeedbackModal.description",
              defaultMessage: "You'll see fewer ads like this. Please tell us why you hid this ad.",
            })
          : i
            ? e.formatMessage({
                id: "bazaar.notInterestedFeedbackModal.description",
                defaultMessage: "We’ll show you fewer ads like this.",
              })
            : e.formatMessage({
                id: "bazaar.reportFeedbackModal.description",
                defaultMessage: "Thanks. Your report helps us improve ads.",
              })
      return {
        title: n,
        description: l,
        prompt:
          t || i
            ? e.formatMessage({
                id: "bazaar.ad.feedback.question.fewer_ads",
                defaultMessage: "Why do you want to see fewer ads like this?",
              })
            : e.formatMessage({
                id: "bazaar.ad.feedback.question.report",
                defaultMessage: "What’s wrong with this ad?",
              }),
        primaryButtonTitle: s
          ? e.formatMessage({ id: "bazaar.feedbackModal.button.undo", defaultMessage: "Undo" })
          : e.formatMessage({ id: "bazaar.hideFeedbackModal.button.done", defaultMessage: "Done" }),
      }
    }
    function k(e) {
      let a,
        s,
        t,
        r,
        d,
        o,
        c = (0, n.c)(23),
        {
          data: h,
          isPending: u,
          feedbackType: m,
          undoEnabled: b,
          onClickOption: x,
          onSomethingElseClick: f,
          onReport: j,
        } = e,
        g = (0, p.A)()
      c[0] !== m || c[1] !== g || c[2] !== b
        ? ((a = N(g, m, b)), (c[0] = m), (c[1] = g), (c[2] = b), (c[3] = a))
        : (a = c[3])
      let { description: _, prompt: v } = a,
        A = "ads-hidden" === m
      return (
        c[4] !== _
          ? ((s = (0, i.jsx)("p", { className: "_yKULLoRbNp", children: _ })), (c[4] = _), (c[5] = s))
          : (s = c[5]),
        c[6] !== v
          ? ((t = (0, i.jsx)("h3", { className: "_BuvIs4O7Y2", children: v })), (c[6] = v), (c[7] = t))
          : (t = c[7]),
        c[8] !== h ||
        c[9] !== g ||
        c[10] !== A ||
        c[11] !== u ||
        c[12] !== x ||
        c[13] !== j ||
        c[14] !== f ||
        c[15] !== b
          ? ((r = u
              ? (0, i.jsxs)("div", {
                  className: "_KuhNPuG4TY group skeleton",
                  children: [
                    (0, i.jsx)("div", { className: "_D7eAcvoUC3 skeleton-child", "aria-hidden": !0 }),
                    (0, i.jsx)("div", { className: "_aE4dprKllO", children: Array.from({ length: 3 }).map(z) }),
                  ],
                })
              : h
                ? (0, i.jsxs)("div", {
                    className: "_uh7N3z122_",
                    role: "group",
                    "aria-label": g.formatMessage({
                      id: "bazaar.hideFeedbackModal.feedback.options.label",
                      defaultMessage: "Ad feedback options",
                    }),
                    children: [
                      h.options.map((e) =>
                        (0, i.jsx)(
                          "button",
                          { type: "button", className: M, onClick: () => x(e.id), children: e.text },
                          e.id,
                        ),
                      ),
                      (0, i.jsx)("button", {
                        type: "button",
                        className: M,
                        onClick: f,
                        children: (0, i.jsx)(l.A, { id: "bazaar.ad.action.other", defaultMessage: "Other" }),
                      }),
                      !b && A
                        ? (0, i.jsx)("button", {
                            type: "button",
                            className: M,
                            onClick: j,
                            children: (0, i.jsx)(l.A, {
                              id: "bazaar.ad.action.report",
                              defaultMessage: "Report this ad",
                            }),
                          })
                        : null,
                    ],
                  })
                : (0, i.jsx)("p", {
                    className: "_ySIJSwnz_l",
                    children: (0, i.jsx)(l.A, {
                      id: "bazaar.hideFeedbackModal.feedback.unavailable",
                      defaultMessage: "Feedback options aren't available right now.",
                    }),
                  })),
            (c[8] = h),
            (c[9] = g),
            (c[10] = A),
            (c[11] = u),
            (c[12] = x),
            (c[13] = j),
            (c[14] = f),
            (c[15] = b),
            (c[16] = r))
          : (r = c[16]),
        c[17] !== t || c[18] !== r
          ? ((d = (0, i.jsxs)("div", { className: "_LsSvGAShCk", children: [t, r] })),
            (c[17] = t),
            (c[18] = r),
            (c[19] = d))
          : (d = c[19]),
        c[20] !== s || c[21] !== d
          ? ((o = (0, i.jsxs)("div", { className: "_lItyvSmjOT", children: [s, d] })),
            (c[20] = s),
            (c[21] = d),
            (c[22] = o))
          : (o = c[22]),
        o
      )
    }
    function z(e, a) {
      return (0, i.jsx)("div", { className: "_AU7lENBQUc skeleton-child", "aria-hidden": !0 }, a)
    }
    var S = "_p2CuFsrBms",
      w = "_l6bJ9-xi8C"
    let C = (e) => {
      let a,
        s,
        t,
        r,
        d = (0, n.c)(13),
        {
          personalizationUnavailable: o,
          impressionRef: c,
          onIntent: h,
          onClick: u,
          IntentTrigger: m,
          ChevronRightSmIcon: b,
        } = e,
        x = void 0 !== o && o
      return (
        d[0] !== b || d[1] !== x
          ? ((a = x
              ? (0, i.jsx)(l.A, {
                  id: "bazaar.ad.onboarding.label.personalizationUnavailable",
                  defaultMessage:
                    "Ads do not influence the answers you get from ChatGPT. Your chats stay private. <link>Learn about ads</link>",
                  values: {
                    link: (e) => (0, i.jsxs)("span", { className: S, children: [e, (0, i.jsx)(b, { className: w })] }),
                  },
                })
              : (0, i.jsx)(l.A, {
                  id: "bazaar.ad.onboarding.label",
                  defaultMessage:
                    "Ads do not influence the answers you get from ChatGPT. Your chats stay private. <link>Learn about ads and personalization</link>",
                  values: {
                    link: (e) => (0, i.jsxs)("span", { className: S, children: [e, (0, i.jsx)(b, { className: w })] }),
                  },
                })),
            (d[0] = b),
            (d[1] = x),
            (d[2] = a))
          : (a = d[2]),
        d[3] !== u || d[4] !== a
          ? ((s = (0, i.jsx)("button", { className: "_pnfksQf152 group", onClick: u, children: a })),
            (d[3] = u),
            (d[4] = a),
            (d[5] = s))
          : (s = d[5]),
        d[6] !== m || d[7] !== h || d[8] !== s
          ? ((t = (0, i.jsx)(m, { onIntent: h, children: s })), (d[6] = m), (d[7] = h), (d[8] = s), (d[9] = t))
          : (t = d[9]),
        d[10] !== c || d[11] !== t
          ? ((r = (0, i.jsx)("div", { ref: c, className: "_YzdeWuu3z-", children: t })),
            (d[10] = c),
            (d[11] = t),
            (d[12] = r))
          : (r = d[12]),
        r
      )
    }
    var T = "_BqpwycBojO",
      R = "_TztpWF_1dH"
    let I =
        (((t = {})[(t.ANSWERS_TRUST = 0)] = "ANSWERS_TRUST"),
        (t[(t.DATA_PRIVATE = 1)] = "DATA_PRIVATE"),
        (t[(t.PRIVATELY_PERSONALIZED = 2)] = "PRIVATELY_PERSONALIZED"),
        (t[(t.TRANSPARENCY_CONTROL = 3)] = "TRANSPARENCY_CONTROL"),
        t),
      P = [I.ANSWERS_TRUST, I.DATA_PRIVATE, I.PRIVATELY_PERSONALIZED, I.TRANSPARENCY_CONTROL],
      L = (e) => {
        let a,
          s,
          t,
          d,
          o,
          c,
          h,
          u,
          m,
          b,
          x,
          f,
          j,
          g,
          p,
          _,
          v,
          A,
          y,
          M,
          N,
          k,
          z,
          S,
          w,
          C,
          P,
          L,
          W,
          F,
          Y,
          D,
          G,
          V,
          Z = (0, n.c)(89),
          {
            activeIndex: B,
            onboardingImages: K,
            isPersonalizationUnavailable: q,
            shouldShowGoAdFreeUpsell: X,
            goAdFreeUrl: H,
            onSettingsClick: Q,
            onUpsellClick: J,
            onLearnMoreClick: $,
            onClose: ee,
            onSelect: ea,
            icons: es,
            CloseButton: et,
            Link: ei,
          } = e,
          {
            arrowUpCircle: en,
            chat: el,
            clock: er,
            cross: ed,
            eyeOff: eo,
            info: ec,
            laptop: eh,
            mapPin: eu,
            thumbMixed: em,
            trash: eb,
          } = es
        ;(Z[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(l.A, { id: "u7QO7k", defaultMessage: "Answers you can trust" })),
            (s = (0, i.jsx)(l.A, {
              id: "GeyWOx",
              defaultMessage:
                "We don’t let advertisers influence what ChatGPT says. When we do show ads, they’re always separate and labeled.",
            })),
            (Z[0] = a),
            (Z[1] = s))
          : ((a = Z[0]), (s = Z[1])),
          Z[2] !== K.trust
            ? ((t = (0, i.jsx)(O, { headerImage: K.trust, title: a, description: s }, I.ANSWERS_TRUST)),
              (Z[2] = K.trust),
              (Z[3] = t))
            : (t = Z[3]),
          Z[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = (0, i.jsx)(l.A, { id: "jX41Yh", defaultMessage: "Your data stays private" })),
              (o = (0, i.jsx)(l.A, {
                id: "AhTZRz",
                defaultMessage: "Advertisers never see your chats, history, memories, or personal details.",
              })),
              (Z[4] = d),
              (Z[5] = o))
            : ((d = Z[4]), (o = Z[5])),
          Z[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, i.jsx)(l.A, { id: "MKbfJd", defaultMessage: "Chats and history" })), (Z[6] = c))
            : (c = Z[6]),
          Z[7] !== ed
            ? ((h = (0, i.jsx)(U, { className: T, icon: ed, children: c })), (Z[7] = ed), (Z[8] = h))
            : (h = Z[8]),
          Z[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, i.jsx)(l.A, { id: "C4XnJ3", defaultMessage: "Memories" })), (Z[9] = u))
            : (u = Z[9]),
          Z[10] !== ed
            ? ((m = (0, i.jsx)(U, { className: T, icon: ed, children: u })), (Z[10] = ed), (Z[11] = m))
            : (m = Z[11]),
          Z[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = (0, i.jsx)(l.A, {
                id: "bazaar.ad.onboarding.privacy.nameEmail",
                defaultMessage: "Name and email",
              })),
              (Z[12] = b))
            : (b = Z[12]),
          Z[13] !== ed
            ? ((x = (0, i.jsx)(U, { className: T, icon: ed, children: b })), (Z[13] = ed), (Z[14] = x))
            : (x = Z[14]),
          Z[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (0, i.jsx)(l.A, {
                id: "bazaar.ad.onboarding.privacy.locationIpAddress",
                defaultMessage: "Location and IP address",
              })),
              (Z[15] = f))
            : (f = Z[15]),
          Z[16] !== ed
            ? ((j = (0, i.jsx)(U, { className: T, icon: ed, children: f })), (Z[16] = ed), (Z[17] = j))
            : (j = Z[17]),
          Z[18] !== K.privacy || Z[19] !== x || Z[20] !== j || Z[21] !== h || Z[22] !== m
            ? ((g = (0, i.jsxs)(
                O,
                { headerImage: K.privacy, title: d, description: o, children: [h, m, x, j] },
                I.DATA_PRIVATE,
              )),
              (Z[18] = K.privacy),
              (Z[19] = x),
              (Z[20] = j),
              (Z[21] = h),
              (Z[22] = m),
              (Z[23] = g))
            : (g = Z[23]),
          Z[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, i.jsx)(l.A, { id: "wJexvp", defaultMessage: "What shapes the ads you see" })), (Z[24] = p))
            : (p = Z[24]),
          Z[25] !== ei || Z[26] !== q || Z[27] !== $ || Z[28] !== Q
            ? ((_ = q
                ? (0, i.jsx)(l.A, {
                    id: "bazaar.ad.onboarding.personalizationUnavailable.description",
                    defaultMessage:
                      "You’ll get ads based on limited data that stays only on ChatGPT. Personalized ads aren’t available in your region yet. <link>Learn more</link>",
                    values: {
                      link: (e) =>
                        (0, i.jsx)(ei, {
                          to: r,
                          target: "_blank",
                          onClick: () => $?.(I.PRIVATELY_PERSONALIZED),
                          className: R,
                          children: e,
                        }),
                    },
                  })
                : (0, i.jsx)(l.A, {
                    id: "cvScNt",
                    defaultMessage:
                      "You’ll get relevant ads using information that stays only on ChatGPT. Manage personalization anytime in <link>settings</link>.",
                    values: {
                      link: (e) =>
                        (0, i.jsx)("span", {
                          onClick: Q,
                          onKeyDown: (e) => {
                            ;("Enter" === e.key || " " === e.key) && Q?.()
                          },
                          className: R,
                          role: "link",
                          tabIndex: 0,
                          children: e,
                        }),
                    },
                  })),
              (Z[25] = ei),
              (Z[26] = q),
              (Z[27] = $),
              (Z[28] = Q),
              (Z[29] = _))
            : (_ = Z[29]),
          Z[30] !== el || Z[31] !== er || Z[32] !== eh || Z[33] !== eu || Z[34] !== em || Z[35] !== q
            ? ((v = q
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(U, {
                        icon: el,
                        children: (0, i.jsx)(l.A, {
                          id: "bazaar.ad.onboarding.personalizationUnavailable.currentChat",
                          defaultMessage: "The topic of your current chat",
                        }),
                      }),
                      (0, i.jsx)(U, {
                        icon: eh,
                        children: (0, i.jsx)(l.A, {
                          id: "bazaar.ad.onboarding.personalizationUnavailable.device",
                          defaultMessage: "Basic info about your device",
                        }),
                      }),
                      (0, i.jsx)(U, {
                        icon: eu,
                        children: (0, i.jsx)(l.A, {
                          id: "bazaar.ad.onboarding.personalizationUnavailable.location",
                          defaultMessage: "Your general location, if applicable",
                        }),
                      }),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(U, {
                        icon: el,
                        children: (0, i.jsx)(l.A, { id: "vyUeZ8", defaultMessage: "What you’re discussing now" }),
                      }),
                      (0, i.jsx)(U, {
                        icon: em,
                        children: (0, i.jsx)(l.A, { id: "9X+Kmt", defaultMessage: "Ads you hide or engage with" }),
                      }),
                      (0, i.jsx)(U, {
                        icon: er,
                        children: (0, i.jsx)(l.A, { id: "S9D6CI", defaultMessage: "Your past chats and memory" }),
                      }),
                    ],
                  })),
              (Z[30] = el),
              (Z[31] = er),
              (Z[32] = eh),
              (Z[33] = eu),
              (Z[34] = em),
              (Z[35] = q),
              (Z[36] = v))
            : (v = Z[36]),
          Z[37] !== K.personalization || Z[38] !== _ || Z[39] !== v
            ? ((A = (0, i.jsx)(
                O,
                { headerImage: K.personalization, title: p, description: _, children: v },
                I.PRIVATELY_PERSONALIZED,
              )),
              (Z[37] = K.personalization),
              (Z[38] = _),
              (Z[39] = v),
              (Z[40] = A))
            : (A = Z[40]),
          Z[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = (0, i.jsx)(l.A, { id: "TZ5hXX", defaultMessage: "Transparency and control" })), (Z[41] = y))
            : (y = Z[41]),
          Z[42] !== ei || Z[43] !== $
            ? ((M = (0, i.jsx)(l.A, {
                id: "QFJ7RI",
                defaultMessage:
                  "You’re in control of the ads you see and how your data is used. <link>Learn more</link>",
                values: {
                  link: (e) =>
                    (0, i.jsx)(ei, {
                      to: r,
                      target: "_blank",
                      onClick: () => $?.(I.TRANSPARENCY_CONTROL),
                      className: R,
                      children: e,
                    }),
                },
              })),
              (Z[42] = ei),
              (Z[43] = $),
              (Z[44] = M))
            : (M = Z[44]),
          Z[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = (0, i.jsx)(l.A, { id: "YDoeRV", defaultMessage: "Hide ads you’re not interested in" })),
              (Z[45] = N))
            : (N = Z[45]),
          Z[46] !== eo ? ((k = (0, i.jsx)(U, { icon: eo, children: N })), (Z[46] = eo), (Z[47] = k)) : (k = Z[47]),
          Z[48] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = (0, i.jsx)(l.A, { id: "PLNAzK", defaultMessage: "See why an ad was shown to you" })), (Z[48] = z))
            : (z = Z[48]),
          Z[49] !== ec ? ((S = (0, i.jsx)(U, { icon: ec, children: z })), (Z[49] = ec), (Z[50] = S)) : (S = Z[50]),
          Z[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, i.jsx)(l.A, { id: "lOimhT", defaultMessage: "Delete your ad data anytime" })), (Z[51] = w))
            : (w = Z[51]),
          Z[52] !== eb ? ((C = (0, i.jsx)(U, { icon: eb, children: w })), (Z[52] = eb), (Z[53] = C)) : (C = Z[53]),
          Z[54] !== ei || Z[55] !== H || Z[56] !== q || Z[57] !== J || Z[58] !== X
            ? ((P = q
                ? (0, i.jsx)(l.A, {
                    id: "bazaar.ad.onboarding.personalizationUnavailable.transparency.goAdFree",
                    defaultMessage: "Go <link>ad-free</link>",
                    values: { link: (e) => (0, i.jsx)(ei, { to: H, target: "_blank", className: R, children: e }) },
                  })
                : (0, i.jsx)(l.A, {
                    id: "zaMBO4",
                    defaultMessage: "Go ad-free with <link>ChatGPT Plus</link>",
                    values: {
                      link: (e) =>
                        X
                          ? (0, i.jsx)("span", {
                              onClick: J,
                              onKeyDown: (e) => {
                                ;("Enter" === e.key || " " === e.key) && J?.()
                              },
                              className: R,
                              role: "link",
                              tabIndex: 0,
                              children: e,
                            })
                          : (0, i.jsx)(i.Fragment, { children: e }),
                    },
                  })),
              (Z[54] = ei),
              (Z[55] = H),
              (Z[56] = q),
              (Z[57] = J),
              (Z[58] = X),
              (Z[59] = P))
            : (P = Z[59]),
          Z[60] !== en || Z[61] !== P
            ? ((L = (0, i.jsx)(U, { icon: en, children: P })), (Z[60] = en), (Z[61] = P), (Z[62] = L))
            : (L = Z[62]),
          Z[63] !== K.transparency || Z[64] !== M || Z[65] !== k || Z[66] !== S || Z[67] !== C || Z[68] !== L
            ? ((W = (0, i.jsxs)(
                O,
                { headerImage: K.transparency, title: y, description: M, children: [k, S, C, L] },
                I.TRANSPARENCY_CONTROL,
              )),
              (Z[63] = K.transparency),
              (Z[64] = M),
              (Z[65] = k),
              (Z[66] = S),
              (Z[67] = C),
              (Z[68] = L),
              (Z[69] = W))
            : (W = Z[69]),
          Z[70] !== g || Z[71] !== A || Z[72] !== W || Z[73] !== t
            ? ((F = [t, g, A, W]), (Z[70] = g), (Z[71] = A), (Z[72] = W), (Z[73] = t), (Z[74] = F))
            : (F = Z[74]))
        let ex = F
        return (
          Z[75] !== et || Z[76] !== ee
            ? ((Y = (0, i.jsx)(et, { className: "_FSYmqPearv", onClick: ee })), (Z[75] = et), (Z[76] = ee), (Z[77] = Y))
            : (Y = Z[77]),
          Z[78] !== B || Z[79] !== ex
            ? ((D = ex.map((e, a) => (0, i.jsx)("div", { hidden: B !== a, children: e }, a))),
              (Z[78] = B),
              (Z[79] = ex),
              (Z[80] = D))
            : (D = Z[80]),
          Z[81] !== B || Z[82] !== ea || Z[83] !== ex.length
            ? ((G = (0, i.jsx)(E, { count: ex.length, activeIndex: B, onSelect: ea })),
              (Z[81] = B),
              (Z[82] = ea),
              (Z[83] = ex.length),
              (Z[84] = G))
            : (G = Z[84]),
          Z[85] !== Y || Z[86] !== D || Z[87] !== G
            ? ((V = (0, i.jsxs)(i.Fragment, { children: [Y, D, G] })),
              (Z[85] = Y),
              (Z[86] = D),
              (Z[87] = G),
              (Z[88] = V))
            : (V = Z[88]),
          V
        )
      }
    function O(e) {
      let a,
        s,
        t,
        l,
        r,
        d,
        o,
        c = (0, n.c)(17),
        { headerImage: h, title: u, description: m, children: b } = e
      return (
        c[0] !== h
          ? ((a = (0, i.jsx)("div", {
              className: "_yrLMZexxlg",
              children: (0, i.jsx)("img", { src: h, className: "_a2E_vhqzU_", alt: "" }),
            })),
            (c[0] = h),
            (c[1] = a))
          : (a = c[1]),
        c[2] !== u
          ? ((s = (0, i.jsx)("h3", { className: "_WSb3NNuGDI", children: u })), (c[2] = u), (c[3] = s))
          : (s = c[3]),
        c[4] !== m
          ? ((t = m && (0, i.jsx)("p", { className: "_-OmSzN2vcP", children: m })), (c[4] = m), (c[5] = t))
          : (t = c[5]),
        c[6] !== s || c[7] !== t
          ? ((l = (0, i.jsxs)("div", { className: "_eTEl3FT23p", children: [s, t] })),
            (c[6] = s),
            (c[7] = t),
            (c[8] = l))
          : (l = c[8]),
        c[9] !== b
          ? ((r = b && (0, i.jsx)("ul", { className: "_eRCys-_-FO", children: b })), (c[9] = b), (c[10] = r))
          : (r = c[10]),
        c[11] !== l || c[12] !== r
          ? ((d = (0, i.jsxs)("div", { className: "_ra1LZ47Gs5", children: [l, r] })),
            (c[11] = l),
            (c[12] = r),
            (c[13] = d))
          : (d = c[13]),
        c[14] !== a || c[15] !== d
          ? ((o = (0, i.jsxs)("div", { className: "_amrT1rwSc6", children: [a, d] })),
            (c[14] = a),
            (c[15] = d),
            (c[16] = o))
          : (o = c[16]),
        o
      )
    }
    function U(e) {
      let a,
        s,
        t,
        l = (0, n.c)(8),
        { icon: r, className: d, children: o } = e
      return (
        l[0] !== d ? ((a = (0, x.A)("_47pjQ36DWK", d)), (l[0] = d), (l[1] = a)) : (a = l[1]),
        l[2] !== r ? ((s = (0, i.jsx)(r, { className: "_OAv6P97uFH" })), (l[2] = r), (l[3] = s)) : (s = l[3]),
        l[4] !== o || l[5] !== a || l[6] !== s
          ? ((t = (0, i.jsxs)("li", { className: a, children: [s, o] })),
            (l[4] = o),
            (l[5] = a),
            (l[6] = s),
            (l[7] = t))
          : (t = l[7]),
        t
      )
    }
    let E = (e) => {
        let a,
          s,
          t = (0, n.c)(7),
          { count: l, activeIndex: r, onSelect: d } = e,
          o = (0, p.A)()
        return (
          t[0] !== l ? ((a = Array.from({ length: l })), (t[0] = l), (t[1] = a)) : (a = t[1]),
          t[2] !== r || t[3] !== o || t[4] !== d || t[5] !== a
            ? ((s = (0, i.jsx)("div", {
                className: "_DT5_WutPF-",
                children: a.map((e, a) =>
                  (0, i.jsx)(
                    "button",
                    {
                      type: "button",
                      className: (0, x.A)("_1X8xBE2d59", r === a ? "_ZNamZLZSUg" : "_XreS-K4qCE"),
                      "aria-label": o.formatMessage(
                        { id: "/WtnCk", defaultMessage: "Go to section {sectionIndex}" },
                        { sectionIndex: a + 1 },
                      ),
                      onClick: () => d(a),
                    },
                    a,
                  ),
                ),
              })),
              (t[2] = r),
              (t[3] = o),
              (t[4] = d),
              (t[5] = a),
              (t[6] = s))
            : (s = t[6]),
          s
        )
      },
      W = (e) => {
        let a,
          s = (0, n.c)(2),
          { isLastPage: t } = e
        return (
          s[0] !== t
            ? ((a = t
                ? (0, i.jsx)(l.A, { id: "XWZUuk", defaultMessage: "Done" })
                : (0, i.jsx)(l.A, { id: "K5S/6O", defaultMessage: "Next" })),
              (s[0] = t),
              (s[1] = a))
            : (a = s[1]),
          a
        )
      }
    var F = "_dbCtgXomMx"
    function Y(e) {
      let a,
        s,
        t,
        r,
        d,
        o,
        c,
        h,
        u,
        m,
        b,
        x,
        f,
        j,
        g,
        _,
        v,
        A = (0, n.c)(39),
        { reminderImage: y, CloseIcon: M, onDismiss: N, isSaving: k, onSave: z, Button: S } = e,
        w = (0, p.A)()
      return (
        A[0] !== y
          ? ((a = (0, i.jsx)("img", { src: y, alt: "", draggable: !1, className: "_LKLHMJe1gW" })),
            (A[0] = y),
            (A[1] = a))
          : (a = A[1]),
        A[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)("div", { className: "_Pta9jNRVsu" })),
            (t = (0, i.jsx)("div", { className: "_8R9s-WYoh5" })),
            (A[2] = s),
            (A[3] = t))
          : ((s = A[2]), (t = A[3])),
        A[4] !== M || A[5] !== w || A[6] !== k || A[7] !== N
          ? ((r =
              null != N
                ? (0, i.jsx)("button", {
                    type: "button",
                    "aria-label": w.formatMessage({
                      id: "bazaar.consentModal.reminder.close",
                      defaultMessage: "Close",
                    }),
                    disabled: k,
                    onClick: N,
                    className: "_M9FkG_nDvq",
                    children: (0, i.jsx)(M, { "aria-hidden": "true", className: "icon" }),
                  })
                : null),
            (A[4] = M),
            (A[5] = w),
            (A[6] = k),
            (A[7] = N),
            (A[8] = r))
          : (r = A[8]),
        A[9] !== a || A[10] !== r
          ? ((d = (0, i.jsxs)("div", { className: "_dMN0sh5XQy", children: [a, s, t, r] })),
            (A[9] = a),
            (A[10] = r),
            (A[11] = d))
          : (d = A[11]),
        A[12] !== w ? ((o = D(w)), (A[12] = w), (A[13] = o)) : (o = A[13]),
        A[14] !== o
          ? ((c = (0, i.jsx)("div", {
              className: "_F2Gv-zVVMG",
              children: (0, i.jsx)("h2", { className: "_I4Z2TewHHw", children: o }),
            })),
            (A[14] = o),
            (A[15] = c))
          : (c = A[15]),
        A[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)("p", {
              className: "_90McdwBuRV",
              children: (0, i.jsx)(l.A, {
                id: "bazaar.consentModal.reminder.description",
                defaultMessage:
                  "Want more relevant ads and suggestions? Enable personalization for more tailored recommendations in ChatGPT.",
              }),
            })),
            (A[16] = h))
          : (h = A[16]),
        A[17] !== z ? ((u = () => z("generic")), (A[17] = z), (A[18] = u)) : (u = A[18]),
        A[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(l.A, {
              id: "bazaar.consentModal.reminder.generic",
              defaultMessage: "No, keep generic ads",
            })),
            (A[19] = m))
          : (m = A[19]),
        A[20] !== S || A[21] !== k || A[22] !== u
          ? ((b = (0, i.jsx)(S, {
              color: "secondary",
              type: "button",
              disabled: k,
              loading: k,
              onClick: u,
              className: F,
              children: m,
            })),
            (A[20] = S),
            (A[21] = k),
            (A[22] = u),
            (A[23] = b))
          : (b = A[23]),
        A[24] !== z ? ((x = () => z("personalized")), (A[24] = z), (A[25] = x)) : (x = A[25]),
        A[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(l.A, {
              id: "bazaar.consentModal.reminder.personalized",
              defaultMessage: "Yes, personalize my ads",
            })),
            (A[26] = f))
          : (f = A[26]),
        A[27] !== S || A[28] !== k || A[29] !== x
          ? ((j = (0, i.jsx)(S, {
              color: "secondary",
              type: "button",
              disabled: k,
              loading: k,
              onClick: x,
              className: `${F} __iMiK1e-xo`,
              children: f,
            })),
            (A[27] = S),
            (A[28] = k),
            (A[29] = x),
            (A[30] = j))
          : (j = A[30]),
        A[31] !== b || A[32] !== j
          ? ((g = (0, i.jsxs)("div", { className: "_mvIPVQNLPf", children: [b, j] })),
            (A[31] = b),
            (A[32] = j),
            (A[33] = g))
          : (g = A[33]),
        A[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)("p", {
              className: "_-yZGv2AlW-",
              children: (0, i.jsx)(l.A, {
                id: "bazaar.consentModal.oneStep.allow.description",
                defaultMessage:
                  "To show more relevant ads, allow OpenAI to use information about your conversations, interactions, and preferences across ChatGPT and our services to personalize the ads you see. <link>Learn more</link>.",
                values: { link: G },
              }),
            })),
            (A[34] = _))
          : (_ = A[34]),
        A[35] !== g || A[36] !== d || A[37] !== c
          ? ((v = (0, i.jsxs)("div", { className: "_mz_6BYqzOU", children: [d, c, h, g, _] })),
            (A[35] = g),
            (A[36] = d),
            (A[37] = c),
            (A[38] = v))
          : (v = A[38]),
        v
      )
    }
    function D(e) {
      return e.formatMessage({
        id: "bazaar.consentModal.reminder.title",
        defaultMessage: "You’re still seeing generic ads",
      })
    }
    function G(e) {
      let a,
        s = (0, n.c)(2)
      return (
        s[0] !== e
          ? ((a = (0, i.jsx)("a", {
              href: r,
              target: "_blank",
              rel: "noreferrer noopener",
              className: "_nru7f4gsDK",
              children: e,
            })),
            (s[0] = e),
            (s[1] = a))
          : (a = s[1]),
        a
      )
    }
    function V({
      ads: e,
      onAdvance: a,
      onClose: s,
      selectedAdToken: t,
      setSelectedAdToken: n,
      title: r,
      primitives: d,
    }) {
      let { Button: o, Header: c, RadioRoot: h, RadioItem: u, RadioIndicator: m } = d
      return {
        body: (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(c, {
              header: (0, i.jsx)(l.A, {
                id: "bazaar.reportAdModal.selectAd.header",
                defaultMessage: "Please tell us which ad you want to report",
              }),
            }),
            (0, i.jsx)(h, {
              value: t,
              onValueChange: n,
              className: "_Nh4pjzO1rm",
              children: e.map((e, a) =>
                (0, i.jsx)(
                  u,
                  {
                    value: e.adDataToken,
                    checked: t === e.adDataToken,
                    onSelect: () => n(e.adDataToken),
                    label:
                      e.displayName ||
                      (0, i.jsx)(l.A, {
                        id: "bazaar.reportAdModal.selectAd.fallbackLabel",
                        defaultMessage: "Ad {position}",
                        values: { position: a + 1 },
                      }),
                    children: (0, i.jsx)(m, {}),
                  },
                  e.adDataToken,
                ),
              ),
            }),
          ],
        }),
        primaryButton: (0, i.jsx)(o, {
          color: "primary",
          onClick: a,
          disabled: !t,
          children: (0, i.jsx)(l.A, { id: "vS+mDE", defaultMessage: "Next" }),
        }),
        secondaryButton: (0, i.jsx)(o, {
          color: "secondary",
          onClick: s,
          children: (0, i.jsx)(l.A, { id: "03LewM", defaultMessage: "Cancel" }),
        }),
        title: r,
      }
    }
  },
  ClgW(e, a, s) {
    var t = s("ABep"),
      i = s("QosV"),
      n = s("on57"),
      l = s("oyxz"),
      r = s("JNtf"),
      d = s("mUDD"),
      o = s("a6Zv"),
      c = s("vJSB")
    s.d(
      a,
      {},
      {
        MT: function () {
          let e,
            a = (0, i.c)(1)
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-codex-description",
                  children: (0, t.jsx)(l.A, {
                    id: "chatgpt.ads.controls.actionUnavailable",
                    defaultMessage: "We couldn’t complete this action. Please try again later",
                    description:
                      "Error shown in an advertisement control dialog when a server action fails or cannot be safely attributed to the displayed ad. It does not indicate that feedback or a report was submitted.",
                  }),
                })),
                (a[0] = e))
              : (e = a[0]),
            e
          )
        },
        Y8: function () {
          let e,
            a = (0, i.c)(1)
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("p", {
                  role: "status",
                  className: "text-sm text-codex-description",
                  children: (0, t.jsx)(l.A, {
                    id: "chatgpt.ads.controls.loading",
                    defaultMessage: "Loading…",
                    description:
                      "Status in an advertisement control dialog while its server-owned settings or disclosure are loading.",
                  }),
                })),
                (a[0] = e))
              : (e = a[0]),
            e
          )
        },
        kg: function (e) {
          let a,
            s,
            l,
            h,
            u,
            m,
            b,
            x,
            f = (0, i.c)(20),
            { title: j, children: g, footer: p, onClose: _, pending: v } = e,
            A = void 0 !== v && v,
            y = (0, o.Y)() && "dark"
          return (
            f[0] !== y ? ((a = (0, n.A)(c.A.scope, y)), (f[0] = y), (f[1] = a)) : (a = f[1]),
            f[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = { "aria-describedby": void 0 }), (f[2] = s))
              : (s = f[2]),
            f[3] !== _ || f[4] !== A
              ? ((l = (e) => {
                  e || A || _()
                }),
                (f[3] = _),
                (f[4] = A),
                (f[5] = l))
              : (l = f[5]),
            f[6] !== j
              ? ((h = (0, t.jsx)(d.OO, {
                  children: (0, t.jsx)(d.c7, { title: (0, t.jsx)(r.L3, { children: j }), titleSize: "dialog" }),
                })),
                (f[6] = j),
                (f[7] = h))
              : (h = f[7]),
            f[8] !== g ? ((u = (0, t.jsx)(d.OO, { children: g })), (f[8] = g), (f[9] = u)) : (u = f[9]),
            f[10] !== p
              ? ((m = (0, t.jsx)(d.OO, { children: (0, t.jsx)(d.Es, { children: p }) })), (f[10] = p), (f[11] = m))
              : (m = f[11]),
            f[12] !== h || f[13] !== u || f[14] !== m
              ? ((b = (0, t.jsxs)(d.R4, { className: "gap-4", children: [h, u, m] })),
                (f[12] = h),
                (f[13] = u),
                (f[14] = m),
                (f[15] = b))
              : (b = f[15]),
            f[16] !== a || f[17] !== l || f[18] !== b
              ? ((x = (0, t.jsx)(r.lG, {
                  open: !0,
                  variant: "chatgpt",
                  size: "wide",
                  contentClassName: a,
                  contentProps: s,
                  onOpenChange: l,
                  children: b,
                })),
                (f[16] = a),
                (f[17] = l),
                (f[18] = b),
                (f[19] = x))
              : (x = f[19]),
            x
          )
        },
      },
    )
  },
}
//# sourceMappingURL=163469.e355fcb677.js.map
