export const __rspack_esm_ids = [351719]
export const __webpack_modules__ = {
  ieEC(e, t, a) {
    var r = a("ABep")
    ;(a("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          width: 10,
          height: 10,
          viewBox: "0 0 10 10",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M8.46713 1.74129C8.65596 1.8728 8.70244 2.13249 8.57092 2.32133L4.50842 8.15466C4.43793 8.25588 4.32621 8.32067 4.20335 8.33157C4.08048 8.34248 3.9591 8.29839 3.87188 8.21117L1.47604 5.81533C1.31332 5.65262 1.31332 5.3888 1.47604 5.22608C1.63876 5.06336 1.90258 5.06336 2.0653 5.22608L4.1091 7.26988L7.88708 1.84508C8.0186 1.65625 8.27829 1.60978 8.46713 1.74129Z",
            fill: "currentColor",
          }),
        })))
  },
  ZMoP(e, t, a) {
    a.d(
      t,
      {},
      {
        M: function ({ grants: e, remainingRewardCapacity: t, remainingSendCapacity: a }) {
          return Math.min(5, a ?? 0, ...(e.length > 0 ? [t ?? 0] : []))
        },
        Y: function (e) {
          switch (e?.toLowerCase()) {
            case "personal":
              return { programId: "codex_referral_consumer", entrypoint: "persistent" }
            case "workspace":
              return { programId: "codex_referral_workspace", entrypoint: "persistent" }
            default:
              return null
          }
        },
      },
    )
  },
  Me3h(e, t, a) {
    a.d(t, { ReferralInviteModal: () => eh })
    var r = a("ABep"),
      n = a("QosV"),
      i = a("iRMi"),
      s = a("qmMi"),
      l = a("zd8w"),
      o = a("Wf1j"),
      d = a("oyxz"),
      c = a("ASxG"),
      u = a("UOa8"),
      m = a("yGJW"),
      f = a("GDNt"),
      p = a("irkb"),
      g = a("xSOA"),
      _ = a("sLlu"),
      x = a("OWtl"),
      h = a("kK7d"),
      v = a("vO5o")
    let b = (0, s.bD)(x.u, (e) => "idle"),
      E = (0, s.bD)(x.u, (e) => null)
    function y({ resendAvailableAt: e, trackedCooldownUntil: t }) {
      let a = null == e ? 0 / 0 : Date.parse(e)
      return Number.isNaN(a) ? t : null == t ? a : Math.max(a, t)
    }
    function I(e) {
      e.queryClient.invalidateQueries({ queryKey: ["referral-invite-tracking"] }).catch(() => void 0)
    }
    var C = a("ZMoP"),
      M = a("on57"),
      R = a.p + "assets/referral-modal-chatgpt-blossom.59d4711184.png",
      k = a.p + "assets/referral-modal-flower-background.5c8d3d0d6a.webp",
      w = a("JNtf"),
      A = a("slpy"),
      N = a("MM0V"),
      D = a("Sm6l"),
      j = a("Sezd"),
      L = a("ZtSy"),
      T = a("bVeK"),
      O = (e) =>
        (0, r.jsx)("svg", {
          width: 14,
          height: 14,
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.51972 0C7.79181 0.000318552 8.86619 0.844616 9.21504 2.00317C9.73847 1.7175 10.3384 1.57462 10.8828 1.55347C11.1383 1.54364 11.3636 1.67703 11.487 1.87793L11.5339 1.96802L11.6804 2.32324C11.9968 3.12322 12.2206 4.00041 11.7705 4.98853L12.2802 5.88867L13.0895 6.25269C13.3358 6.36342 13.4945 6.60819 13.4946 6.87817V9.35596C13.4944 9.66021 13.2936 9.92854 13.0017 10.0144L12.1293 10.27C11.763 11.002 11.0789 11.6698 10.3532 11.9824L10.1284 13.0745C10.0625 13.3932 9.78142 13.6215 9.456 13.6216H8.17426C7.89383 13.6216 7.64138 13.4512 7.53706 13.1909L7.20527 12.3611H6.30659L6.00923 13.1719C5.91016 13.4421 5.65253 13.6215 5.36469 13.6216H3.97602C3.64498 13.6216 3.36073 13.3854 3.30073 13.0598L3.01142 11.4895C1.55543 10.6361 0.877246 8.89876 0.975291 7.25757C1.01256 6.63423 1.1629 6.00824 1.43232 5.43091C0.954781 5.25993 0.537671 4.87481 0.288279 4.42236C-0.1122 3.69563 -0.151129 2.71216 0.530711 1.77832C0.693193 1.55629 1.00494 1.50774 1.22724 1.66992C1.4495 1.83235 1.49862 2.14479 1.33637 2.36719C0.889859 2.97882 0.94248 3.54397 1.16133 3.94116C1.39614 4.36714 1.76933 4.53893 1.99043 4.5249C2.42538 3.97853 3.00338 3.52197 3.73286 3.21973C3.71392 3.08791 3.70358 2.95325 3.70356 2.81616C3.70356 1.26105 4.96461 0 6.51972 0ZM10.7011 2.56714C10.1844 2.62731 9.66579 2.82769 9.31318 3.14575C9.24914 3.69408 9.02894 4.19346 8.69648 4.59888C8.84334 4.68569 8.94256 4.84446 8.94258 5.02734C8.94258 5.30272 8.71914 5.526 8.4438 5.52612H4.70259C4.42713 5.52612 4.20381 5.3028 4.20381 5.02734C4.20382 4.87448 4.27348 4.73871 4.38178 4.64722C4.25549 4.5 4.1448 4.33949 4.05073 4.16821C2.7286 4.74754 2.04942 6.00044 1.97065 7.31689C1.88632 8.72857 2.49804 10.0889 3.61054 10.6824C3.76604 10.7655 3.89182 10.9092 3.94746 11.0889L3.96723 11.168L4.2353 12.6248H5.14717L5.44453 11.8132L5.48847 11.7166C5.60801 11.5009 5.83703 11.3635 6.08906 11.3635H7.41621C7.66149 11.3637 7.88538 11.4942 8.00727 11.7012L8.05342 11.7949L8.3852 12.6248H9.20259L9.40986 11.6199L9.4355 11.5276C9.50886 11.3214 9.67333 11.1718 9.86103 11.105C10.4066 10.9108 11.0097 10.3443 11.2797 9.73682L11.3127 9.67236C11.3978 9.52439 11.5385 9.40422 11.7177 9.35156L12.497 9.12231V7.07959L11.7785 6.75732C11.6454 6.6975 11.5348 6.5964 11.4628 6.46948L10.8249 5.34229C10.7041 5.12891 10.7111 4.87913 10.8146 4.68018C11.177 3.98422 11.0366 3.38878 10.7011 2.56714ZM6.51972 0.997559C5.51552 0.997559 4.70112 1.81195 4.70112 2.81616C4.70127 3.60446 5.20332 4.2769 5.90669 4.52856H7.13203C7.83523 4.2768 8.33745 3.60434 8.33759 2.81616C8.33759 1.81219 7.5236 0.997948 6.51972 0.997559Z",
            fill: "currentColor",
          }),
        })
    function S(e) {
      let t,
        a,
        i,
        s,
        l,
        c,
        u,
        m,
        f,
        p,
        g,
        _,
        x,
        h,
        v,
        b,
        E,
        y,
        I,
        C,
        R = (0, n.c)(93),
        { copy: k, form: O, offerDescription: S, offerTitle: K, rules: F, showRewardOffer: V } = e,
        Y = (0, o.A)()
      R[0] !== O.input.failedEmails
        ? ((t = new Set(O.input.failedEmails)), (R[0] = O.input.failedEmails), (R[1] = t))
        : (t = R[1])
      let X = t,
        z = (O.sentInviteCount ?? 0) > 0,
        U = V && (null != S || F.length > 0)
      R[2] !== F
        ? ((a =
            F.length > 0
              ? (0, r.jsx)("ul", { className: "m-0 flex list-disc flex-col gap-1 ps-4", children: F.map(B) })
              : null),
          (R[2] = F),
          (R[3] = a))
        : (a = R[3])
      let G = a
      ;(R[4] !== S || R[5] !== V
        ? ((i = V && null != S ? (0, r.jsx)("span", { children: S }) : null), (R[4] = S), (R[5] = V), (R[6] = i))
        : (i = R[6]),
        R[7] !== G || R[8] !== i
          ? ((s = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [i, G] })),
            (R[7] = G),
            (R[8] = i),
            (R[9] = s))
          : (s = R[9]))
      let q = s
      if (
        (R[10] !== O.actions
          ? ((l = (e) => {
              ;(e.preventDefault(), O.actions.submit())
            }),
            (R[10] = O.actions),
            (R[11] = l))
          : (l = R[11]),
        R[12] !== k.eligibility_link_label || R[13] !== G || R[14] !== S || R[15] !== K || R[16] !== U || R[17] !== V
          ? ((c = V
              ? (0, r.jsx)("div", {
                  className: "mb-6 select-none",
                  children: (0, r.jsx)(N.l, {
                    content: (0, r.jsxs)("div", {
                      className: "flex flex-wrap items-center justify-between gap-2",
                      children: [
                        (0, r.jsx)("span", { className: "min-w-0 wrap-break-word", children: K }),
                        (0, r.jsx)(A.m, {
                          disabled: !U,
                          content: G ?? S,
                          contentClassName: "text-start",
                          children: (0, r.jsx)(L.G, {
                            className:
                              "cursor-interaction rounded-sm text-xs font-medium break-words underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            appearance: "secondary",
                            href: "https://help.openai.com/articles/20001271",
                            initiator: "open_in_browser_bridge",
                            openTarget: "external-browser",
                            children: k.eligibility_link_label,
                          }),
                        }),
                      ],
                    }),
                    Icon: P,
                    type: "success",
                    variant: "callout",
                  }),
                })
              : null),
            (R[12] = k.eligibility_link_label),
            (R[13] = G),
            (R[14] = S),
            (R[15] = K),
            (R[16] = U),
            (R[17] = V),
            (R[18] = c))
          : (c = R[18]),
        R[19] !== k.title
          ? ((u = (0, r.jsx)(w.L3, {
              asChild: !0,
              children: (0, r.jsx)("h2", { className: "heading-dialog m-0 font-semibold", children: k.title }),
            })),
            (R[19] = k.title),
            (R[20] = u))
          : (u = R[20]),
        R[21] !== k.description
          ? ((m = (0, r.jsx)("p", {
              className: "mt-2 mb-0 text-base leading-normal tracking-normal text-codex-description",
              children: k.description,
            })),
            (R[21] = k.description),
            (R[22] = m))
          : (m = R[22]),
        R[23] !== u || R[24] !== m
          ? ((f = (0, r.jsxs)("div", { className: "text-center", children: [u, m] })),
            (R[23] = u),
            (R[24] = m),
            (R[25] = f))
          : (f = R[25]),
        R[26] !== q || R[27] !== U
          ? ((p = U
              ? (0, r.jsx)("div", {
                  className: "hidden text-sm text-secondary any-pointer-coarse:mt-4 any-pointer-coarse:block",
                  children: q,
                })
              : null),
            (R[26] = q),
            (R[27] = U),
            (R[28] = p))
          : (p = R[28]),
        R[29] !== k.remove_email_label_template ||
          R[30] !== X ||
          R[31] !== O.actions ||
          R[32] !== O.input.emails ||
          R[33] !== O.submission.inactive)
      ) {
        let e
        ;(R[35] !== k.remove_email_label_template ||
        R[36] !== X ||
        R[37] !== O.actions ||
        R[38] !== O.submission.inactive
          ? ((e = (e) =>
              (0, r.jsxs)(
                "span",
                {
                  className: (0, M.A)(
                    "inline-flex min-h-7 max-w-full items-center gap-1.5 rounded-lg bg-text/10 py-0 ps-2.5 pe-1.5 text-sm",
                    X.has(e) && "bg-text-danger/10 text-danger",
                  ),
                  children: [
                    (0, r.jsx)("span", { className: "truncate", children: e }),
                    (0, r.jsx)(D.$, {
                      uniform: !0,
                      "aria-label": k.remove_email_label_template.replace("{email}", () => e),
                      color: "ghost",
                      disabled: O.submission.inactive,
                      onClick: () => {
                        O.actions.removeEmail(e)
                      },
                      radius: "small",
                      size: "inline",
                      type: "button",
                      children: (0, r.jsx)(T.Gmf, {}),
                    }),
                  ],
                },
                e,
              )),
            (R[35] = k.remove_email_label_template),
            (R[36] = X),
            (R[37] = O.actions),
            (R[38] = O.submission.inactive),
            (R[39] = e))
          : (e = R[39]),
          (g = O.input.emails.map(e)),
          (R[29] = k.remove_email_label_template),
          (R[30] = X),
          (R[31] = O.actions),
          (R[32] = O.input.emails),
          (R[33] = O.submission.inactive),
          (R[34] = g))
      } else g = R[34]
      R[40] !== O.actions
        ? ((_ = (e) => {
            O.actions.changeInput(e.target.value)
          }),
          (R[40] = O.actions),
          (R[41] = _))
        : (_ = R[41])
      let $ = 0 === O.input.emails.length ? k.email_placeholder : ""
      return (
        R[42] !== k.email_input_label ||
        R[43] !== O.actions.commitInput ||
        R[44] !== O.actions.handleInputKeyDown ||
        R[45] !== O.actions.handleInputPaste ||
        R[46] !== O.input.describedBy ||
        R[47] !== O.input.hasError ||
        R[48] !== O.input.id ||
        R[49] !== O.input.value ||
        R[50] !== O.submission.inactive ||
        R[51] !== _ ||
        R[52] !== $
          ? ((x = (0, r.jsx)("input", {
              autoFocus: !0,
              "aria-describedby": O.input.describedBy,
              "aria-invalid": O.input.hasError,
              "aria-label": k.email_input_label,
              className:
                "h-8 min-w-[120px] flex-[1_1_140px] border-0 bg-transparent px-1 text-sm !outline-none placeholder:text-tertiary",
              disabled: O.submission.inactive,
              id: O.input.id,
              inputMode: "email",
              onBlur: O.actions.commitInput,
              onChange: _,
              onKeyDown: O.actions.handleInputKeyDown,
              onPaste: O.actions.handleInputPaste,
              placeholder: $,
              type: "text",
              value: O.input.value,
            })),
            (R[42] = k.email_input_label),
            (R[43] = O.actions.commitInput),
            (R[44] = O.actions.handleInputKeyDown),
            (R[45] = O.actions.handleInputPaste),
            (R[46] = O.input.describedBy),
            (R[47] = O.input.hasError),
            (R[48] = O.input.id),
            (R[49] = O.input.value),
            (R[50] = O.submission.inactive),
            (R[51] = _),
            (R[52] = $),
            (R[53] = x))
          : (x = R[53]),
        R[54] !== g || R[55] !== x
          ? ((h = (0, r.jsxs)("div", {
              className:
                "mt-6 flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-lg bg-[var(--referral-rate-limit-input-background)] px-3 py-1 focus-within:ring-1 focus-within:ring-ring",
              children: [g, x],
            })),
            (R[54] = g),
            (R[55] = x),
            (R[56] = h))
          : (h = R[56]),
        R[57] !== O.input.describedBy || R[58] !== O.input.hasError || R[59] !== O.input.statusMessage
          ? ((v =
              null != O.input.statusMessage
                ? (0, r.jsx)("p", {
                    "aria-live": "polite",
                    className: (0, M.A)("mb-0 mt-2 text-xs", O.input.hasError ? "text-danger" : "text-secondary"),
                    id: O.input.describedBy,
                    children: O.input.statusMessage,
                  })
                : null),
            (R[57] = O.input.describedBy),
            (R[58] = O.input.hasError),
            (R[59] = O.input.statusMessage),
            (R[60] = v))
          : (v = R[60]),
        R[61] !== k.consent_multiple_label ||
        R[62] !== k.consent_single_label ||
        R[63] !== O.actions.setConsent ||
        R[64] !== O.consent.checked ||
        R[65] !== O.consent.id ||
        R[66] !== O.consent.recipientCount ||
        R[67] !== O.consent.visible ||
        R[68] !== O.submission.inactive
          ? ((b = O.consent.visible
              ? (0, r.jsxs)("div", {
                  className: "relative mt-4 flex items-start gap-3",
                  children: [
                    (0, r.jsx)(j.S, {
                      checked: O.consent.checked,
                      className: "mt-0.5 cursor-interaction",
                      disabled: O.submission.inactive,
                      id: O.consent.id,
                      onCheckedChange: O.actions.setConsent,
                    }),
                    (0, r.jsx)("label", {
                      className: "cursor-interaction text-sm leading-5",
                      htmlFor: O.consent.id,
                      children: O.consent.recipientCount <= 1 ? k.consent_single_label : k.consent_multiple_label,
                    }),
                  ],
                })
              : null),
            (R[61] = k.consent_multiple_label),
            (R[62] = k.consent_single_label),
            (R[63] = O.actions.setConsent),
            (R[64] = O.consent.checked),
            (R[65] = O.consent.id),
            (R[66] = O.consent.recipientCount),
            (R[67] = O.consent.visible),
            (R[68] = O.submission.inactive),
            (R[69] = b))
          : (b = R[69]),
        R[70] !== O.actions.openTracking ||
        R[71] !== O.sentInviteCount ||
        R[72] !== O.submission.inactive ||
        R[73] !== O.trackingLoading ||
        R[74] !== z ||
        R[75] !== Y
          ? ((E =
              O.trackingLoading || null != O.actions.openTracking
                ? (0, r.jsx)(D.$, {
                    "aria-label": z
                      ? Y.formatMessage(
                          {
                            id: "codex.referralInviteModal.trackInvitesWithSentCount",
                            defaultMessage: "Track your invites, {count} sent",
                          },
                          { count: O.sentInviteCount },
                        )
                      : void 0,
                    color: "secondary",
                    disabled: O.submission.inactive,
                    loading: O.trackingLoading,
                    onClick: O.actions.openTracking,
                    size: "large",
                    type: "button",
                    children: (0, r.jsx)(d.A, {
                      id: "codex.referralInviteModal.trackInvites",
                      defaultMessage: "Track your invites",
                    }),
                  })
                : null),
            (R[70] = O.actions.openTracking),
            (R[71] = O.sentInviteCount),
            (R[72] = O.submission.inactive),
            (R[73] = O.trackingLoading),
            (R[74] = z),
            (R[75] = Y),
            (R[76] = E))
          : (E = R[76]),
        R[77] !== k.send_button_label || R[78] !== O.submission.disabled || R[79] !== O.submission.loading
          ? ((y = (0, r.jsx)(D.$, {
              disabled: O.submission.disabled,
              loading: O.submission.loading,
              size: "large",
              type: "submit",
              children: k.send_button_label,
            })),
            (R[77] = k.send_button_label),
            (R[78] = O.submission.disabled),
            (R[79] = O.submission.loading),
            (R[80] = y))
          : (y = R[80]),
        R[81] !== E || R[82] !== y
          ? ((I = (0, r.jsxs)("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [E, y] })),
            (R[81] = E),
            (R[82] = y),
            (R[83] = I))
          : (I = R[83]),
        R[84] !== p ||
        R[85] !== h ||
        R[86] !== v ||
        R[87] !== b ||
        R[88] !== I ||
        R[89] !== l ||
        R[90] !== c ||
        R[91] !== f
          ? ((C = (0, r.jsxs)("form", {
              className: "flex flex-col px-8 pt-6 pb-10",
              noValidate: !0,
              onSubmit: l,
              children: [c, f, p, h, v, b, I],
            })),
            (R[84] = p),
            (R[85] = h),
            (R[86] = v),
            (R[87] = b),
            (R[88] = I),
            (R[89] = l),
            (R[90] = c),
            (R[91] = f),
            (R[92] = C))
          : (C = R[92]),
        C
      )
    }
    function B(e) {
      return (0, r.jsx)("li", { children: e }, e)
    }
    function P(e) {
      let t,
        a = (0, n.c)(2),
        { className: i } = e
      return (
        a[0] !== i ? ((t = (0, r.jsx)(O, { "aria-hidden": !0, className: i })), (a[0] = i), (a[1] = t)) : (t = a[1]),
        t
      )
    }
    var K = a("wK45"),
      F = a("yX0s"),
      V = a("HOLv")
    function Y(e) {
      let t,
        a,
        i,
        s,
        l,
        c,
        u,
        m = (0, n.c)(19),
        { copy: f, invites: p, onDone: g, onOpenTracking: _, sentInviteCount: x } = e,
        h = (0, o.A)()
      m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)("div", {
            className: "flex size-14 items-center justify-center",
            children: (0, r.jsx)("div", {
              className:
                "flex size-12 items-center justify-center rounded-full bg-[var(--referral-rate-limit-check-background)] text-white",
              children: (0, r.jsx)(V.I, { asset: K.P }),
            }),
          })),
          (m[0] = t))
        : (t = m[0])
      let v = f.invite_sent_labels[p.length - 1]
      m[1] !== v
        ? ((a = (0, r.jsx)(w.L3, {
            asChild: !0,
            children: (0, r.jsx)("h2", { className: "m-0 text-base leading-6 font-medium", children: v }),
          })),
          (m[1] = v),
          (m[2] = a))
        : (a = m[2])
      let b = f.success_descriptions[p.length - 1]
      return (
        m[3] !== b
          ? ((i = (0, r.jsx)("p", {
              className: "m-0 text-sm leading-5 text-balance text-[var(--referral-rate-limit-secondary)]",
              children: b,
            })),
            (m[3] = b),
            (m[4] = i))
          : (i = m[4]),
        m[5] !== a || m[6] !== i
          ? ((s = (0, r.jsxs)("div", {
              className: "mt-8 flex min-h-[75px] w-full flex-col items-center gap-2",
              children: [a, i],
            })),
            (m[5] = a),
            (m[6] = i),
            (m[7] = s))
          : (s = m[7]),
        m[8] !== f.done_button_label || m[9] !== g
          ? ((l = (0, r.jsx)(D.$, {
              className: "mt-auto h-[34px] w-full justify-center rounded-full border-0 text-[13px]",
              onClick: g,
              type: "button",
              children: f.done_button_label,
            })),
            (m[8] = f.done_button_label),
            (m[9] = g),
            (m[10] = l))
          : (l = m[10]),
        m[11] !== h || m[12] !== _ || m[13] !== x
          ? ((c =
              null != _
                ? (0, r.jsxs)(D.$, {
                    "aria-label":
                      null != x
                        ? h.formatMessage(
                            {
                              id: "codex.referralInviteModal.trackInvitesWithSentCount",
                              defaultMessage: "Track your invites, {count} sent",
                            },
                            { count: x },
                          )
                        : void 0,
                    className:
                      "referral-track-invites-button mt-6 h-[52px] w-full justify-between !rounded-[16px] !border-[var(--referral-rate-limit-border)] px-4 text-[13px] !text-default shadow-[0_6px_14px_rgba(0,0,0,0.03),inset_0_-1px_4px_rgba(0,0,0,0.03)] dark:bg-text/5 dark:not-disabled:not-aria-disabled:hover:bg-text/10",
                    color: "outlineGhost",
                    onClick: _,
                    type: "button",
                    children: [
                      (0, r.jsx)(d.A, {
                        id: "codex.referralInviteModal.trackInvites",
                        defaultMessage: "Track your invites",
                      }),
                      (0, r.jsxs)("span", {
                        className: "flex items-center gap-2",
                        children: [
                          null != x
                            ? (0, r.jsx)("span", {
                                "aria-hidden": !0,
                                className:
                                  "rounded-full bg-[var(--referral-rate-limit-success-background)] px-1.5 py-0.5 text-xs leading-4 font-semibold text-[var(--referral-rate-limit-success-foreground)]",
                                children: (0, r.jsx)(d.A, {
                                  id: "codex.referralInviteModal.sentInviteCount",
                                  defaultMessage: "{count} sent",
                                  values: { count: x },
                                }),
                              })
                            : null,
                          (0, r.jsx)(V.I, { "aria-hidden": !1, asset: F.q }),
                        ],
                      }),
                    ],
                  })
                : null),
            (m[11] = h),
            (m[12] = _),
            (m[13] = x),
            (m[14] = c))
          : (c = m[14]),
        m[15] !== s || m[16] !== l || m[17] !== c
          ? ((u = (0, r.jsxs)("div", {
              "aria-live": "polite",
              className: "flex min-h-[553px] flex-col items-center px-8 pt-[84px] pb-10 text-center",
              children: [t, s, l, c],
            })),
            (m[15] = s),
            (m[16] = l),
            (m[17] = c),
            (m[18] = u))
          : (u = m[18]),
        u
      )
    }
    function X(e) {
      let t,
        a,
        i,
        s,
        l,
        o,
        d,
        c,
        u,
        m,
        f = (0, n.c)(45),
        {
          copy: p,
          form: g,
          hasRewardOffer: _,
          onClose: x,
          onDone: h,
          offerDescription: v,
          offerTitle: b,
          outcome: E,
          rules: y,
          trackingContent: I,
        } = e,
        C = null != I,
        A = _ && null != b,
        N = E.type
      ;(f[0] !== E.type
        ? ((t = (e) => {
            "sent" === E.type && (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus())
          }),
          (f[0] = E.type),
          (f[1] = t))
        : (t = f[1]),
        f[2] !== g.submission.busy
          ? ((a = (e) => {
              g.submission.busy && e.preventDefault()
            }),
            (f[2] = g.submission.busy),
            (f[3] = a))
          : (a = f[3]))
      let D = "sent" === E.type ? -1 : void 0
      f[4] !== t || f[5] !== a || f[6] !== D
        ? ((i = { onOpenAutoFocus: t, onEscapeKeyDown: a, tabIndex: D }),
          (f[4] = t),
          (f[5] = a),
          (f[6] = D),
          (f[7] = i))
        : (i = f[7])
      let j = "editing" !== E.type || C ? "!text-secondary hover:!text-default" : "!text-black/60 hover:!text-black/80"
      ;(f[8] !== j ? ((s = (0, M.A)("!top-[22px] !right-[22px] !z-10", j)), (f[8] = j), (f[9] = s)) : (s = f[9]),
        f[10] !== x
          ? ((l = (e) => {
              e || x()
            }),
            (f[10] = x),
            (f[11] = l))
          : (l = f[11]))
      let L = g.submission.busy,
        T = !g.submission.busy,
        O = p.close_button_label
      f[12] !== p.invite_dialog_description || f[13] !== p.success_dialog_description || f[14] !== C || f[15] !== E.type
        ? ((o = C
            ? null
            : (0, r.jsx)(w.rr, {
                className: "sr-only",
                children: "sent" === E.type ? p.success_dialog_description : p.invite_dialog_description,
              })),
          (f[12] = p.invite_dialog_description),
          (f[13] = p.success_dialog_description),
          (f[14] = C),
          (f[15] = E.type),
          (f[16] = o))
        : (o = f[16])
      let B = "sent" === E.type && !C && "overflow-x-hidden overflow-y-auto"
      return (
        f[17] !== B
          ? ((d = (0, M.A)(
              "modal-V9Xxz9",
              "relative flex max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] flex-col rounded-[inherit] bg-[var(--referral-rate-limit-surface)] text-default",
              B,
            )),
            (f[17] = B),
            (f[18] = d))
          : (d = f[18]),
        f[19] !== p ||
        f[20] !== g ||
        f[21] !== C ||
        f[22] !== v ||
        f[23] !== b ||
        f[24] !== h ||
        f[25] !== E.invites ||
        f[26] !== E.sentInviteCount ||
        f[27] !== E.type ||
        f[28] !== y ||
        f[29] !== A ||
        f[30] !== I
          ? ((c = C
              ? I
              : "sent" === E.type
                ? (0, r.jsx)(Y, {
                    copy: p,
                    invites: E.invites,
                    onDone: h,
                    onOpenTracking: g.actions.openTracking,
                    sentInviteCount: E.sentInviteCount,
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "relative h-[clamp(56px,calc(100dvh/var(--codex-window-zoom)-192px),214px)] shrink-0 overflow-hidden",
                        "aria-hidden": !0,
                        children: [
                          (0, r.jsx)("div", {
                            className: (0, M.A)("artwork-CWtKM8", "absolute -inset-4 bg-no-repeat blur-[7px]"),
                            style: { backgroundImage: `url(${k})` },
                          }),
                          (0, r.jsx)("img", {
                            className:
                              "absolute top-1/2 left-1/2 size-[clamp(24px,calc(100dvh/var(--codex-window-zoom)-224px),120px)] max-w-none -translate-x-1/2 -translate-y-1/2",
                            alt: "",
                            src: R,
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "min-h-0 overflow-x-hidden overflow-y-auto",
                        children: (0, r.jsx)(S, {
                          copy: p,
                          form: g,
                          offerDescription: v,
                          offerTitle: b,
                          rules: y,
                          showRewardOffer: A,
                        }),
                      }),
                    ],
                  })),
            (f[19] = p),
            (f[20] = g),
            (f[21] = C),
            (f[22] = v),
            (f[23] = b),
            (f[24] = h),
            (f[25] = E.invites),
            (f[26] = E.sentInviteCount),
            (f[27] = E.type),
            (f[28] = y),
            (f[29] = A),
            (f[30] = I),
            (f[31] = c))
          : (c = f[31]),
        f[32] !== d || f[33] !== c
          ? ((u = (0, r.jsx)("section", { className: d, children: c })), (f[32] = d), (f[33] = c), (f[34] = u))
          : (u = f[34]),
        f[35] !== p.close_button_label ||
        f[36] !== g.submission.busy ||
        f[37] !== E.type ||
        f[38] !== T ||
        f[39] !== o ||
        f[40] !== u ||
        f[41] !== i ||
        f[42] !== s ||
        f[43] !== l
          ? ((m = (0, r.jsxs)(
              w.lG,
              {
                open: !0,
                contentClassName:
                  "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] !w-[500px] !max-w-[calc(100vw/var(--codex-window-zoom)-2rem)] !rounded-[16px] !bg-transparent !p-0 !shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] !ring-0 !backdrop-blur-none",
                contentProps: i,
                dialogCloseClassName: s,
                onOpenChange: l,
                overlayClassName: "!bg-surface-secondary/60",
                shouldIgnoreClickOutside: L,
                showDialogClose: T,
                dialogCloseLabel: O,
                size: "default",
                children: [o, u],
              },
              N,
            )),
            (f[35] = p.close_button_label),
            (f[36] = g.submission.busy),
            (f[37] = E.type),
            (f[38] = T),
            (f[39] = o),
            (f[40] = u),
            (f[41] = i),
            (f[42] = s),
            (f[43] = l),
            (f[44] = m))
          : (m = f[44]),
        m
      )
    }
    var z = a("ClXH"),
      U = a("qTvt"),
      G = a("D3Fp"),
      q = a("uris"),
      $ = a("Qgfj"),
      H = a("bqtn"),
      Z = a("UxN3"),
      W = a("SGsN"),
      Q = a("KIKs"),
      J = a("ieEC"),
      ee = a("GCsp"),
      et = a("MmET"),
      ea = a("k1yo"),
      er = a("hhXU"),
      en = a("aepO"),
      ei = a("soaw")
    function es(e) {
      let t,
        a,
        i,
        s,
        d,
        c,
        u,
        m,
        f = (0, n.c)(24),
        { inviteUrl: p } = e,
        g = (0, o.A)(),
        _ = (0, ei.a)(),
        [x, h] = (0, l.useState)(null),
        v = null != x
      f[0] !== v || f[1] !== g
        ? ((t = v
            ? g.formatMessage({ id: "codex.referralInviteModal.tracking.copiedInviteLink", defaultMessage: "Copied" })
            : g.formatMessage({
                id: "codex.referralInviteModal.tracking.copyInviteLink",
                defaultMessage: "Copy invite link",
              })),
          (f[0] = v),
          (f[1] = g),
          (f[2] = t))
        : (t = f[2])
      let b = t,
        E = v && "!text-chart-green enabled:hover:!bg-primary-soft-alpha"
      return (
        f[3] !== E
          ? ((a = (0, M.A)(
              "relative max-w-30 text-xs transition-transform duration-basic ease-out focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 [@container_referral-tracking_(max-width:400px)]:w-token-button-composer [@container_referral-tracking_(max-width:400px)]:justify-center [@container_referral-tracking_(max-width:400px)]:px-0",
              E,
            )),
            (f[3] = E),
            (f[4] = a))
          : (a = f[4]),
        f[5] !== p || f[6] !== _
          ? ((i = (e) => {
              ;(0, en.lW)(p, e).then((e) => {
                if (!e) return
                let t = Date.now()
                ;(h(t),
                  setTimeout(() => {
                    _() && h((e) => (e === t ? null : e))
                  }, 2e3))
              })
            }),
            (f[5] = p),
            (f[6] = _),
            (f[7] = i))
          : (i = f[7]),
        f[8] !== v
          ? ((s = v
              ? null
              : (0, r.jsx)(er.A, {
                  className: "icon-xs hidden [@container_referral-tracking_(max-width:400px)]:block",
                })),
            (f[8] = v),
            (f[9] = s))
          : (s = f[9]),
        f[10] !== b
          ? ((d = (0, r.jsx)("span", {
              className: "min-w-0 truncate [@container_referral-tracking_(max-width:400px)]:hidden",
              "data-tooltip-enablement-target": !0,
              children: b,
            })),
            (f[10] = b),
            (f[11] = d))
          : (d = f[11]),
        f[12] !== v
          ? ((c = v ? (0, r.jsx)(V.I, { className: "shrink-0", "aria-hidden": !1, asset: ea.$ }) : null),
            (f[12] = v),
            (f[13] = c))
          : (c = f[13]),
        f[14] !== b || f[15] !== a || f[16] !== i || f[17] !== s || f[18] !== d || f[19] !== c
          ? ((u = (0, r.jsxs)(D.$, {
              className: a,
              allowShrink: !0,
              "aria-label": b,
              color: "outline",
              onClick: i,
              size: "toolbar",
              type: "button",
              children: [s, d, c],
            })),
            (f[14] = b),
            (f[15] = a),
            (f[16] = i),
            (f[17] = s),
            (f[18] = d),
            (f[19] = c),
            (f[20] = u))
          : (u = f[20]),
        f[21] !== b || f[22] !== u
          ? ((m = (0, r.jsx)(A.m, { content: b, enabledWhen: "target-hidden", children: u })),
            (f[21] = b),
            (f[22] = u),
            (f[23] = m))
          : (m = f[23]),
        m
      )
    }
    let el = ["this_month", "past_90_days"]
    function eo(e) {
      let t,
        a,
        i,
        s,
        c,
        m,
        f,
        p,
        g,
        _,
        x,
        h,
        b,
        E,
        y = (0, n.c)(62),
        { embedded: I, onBack: C, onClose: M, programId: R } = e,
        k = (0, o.A)(),
        { accountId: A, isLoading: N, userId: j } = (0, u.As)(),
        [L, T] = (0, l.useState)("past_90_days")
      y[0] !== A || y[1] !== L || y[2] !== R || y[3] !== j
        ? ((t = (0, v._Z)(L, j, A, R)), (y[0] = A), (y[1] = L), (y[2] = R), (y[3] = j), (y[4] = t))
        : (t = y[4])
      let {
        data: O,
        fetchNextPage: S,
        hasNextPage: B,
        isError: P,
        isFetching: K,
        isFetchNextPageError: Y,
        isFetchingNextPage: X,
        isPending: G,
      } = (0, q.q)(t)
      if (
        y[5] !== A ||
        y[6] !== O ||
        y[7] !== B ||
        y[8] !== N ||
        y[9] !== P ||
        y[10] !== G ||
        y[11] !== C ||
        y[12] !== L ||
        y[13] !== j
      ) {
        let e,
          t,
          n,
          l,
          o,
          u,
          p,
          g = O?.pages.flatMap(eu),
          _ = null != j && null != A,
          x = !N && !_
        ;(y[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(w.rr, {
              className: "sr-only",
              children: (0, r.jsx)(d.A, {
                id: "codex.referralInviteModal.tracking.description",
                defaultMessage: "Review referral invite history and status",
              }),
            })),
            (y[20] = f))
          : (f = y[20]),
          (s =
            "@container/referral-tracking flex h-[min(406px,calc(100dvh/var(--codex-window-zoom)-2rem))] flex-col px-6 pb-6 text-default"),
          y[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(V.I, { className: "ltr:rotate-180", "aria-hidden": !1, asset: F.q })),
              (t = (0, r.jsx)(d.A, { id: "codex.referralInviteModal.tracking.goBack", defaultMessage: "Go back" })),
              (y[21] = e),
              (y[22] = t))
            : ((e = y[21]), (t = y[22])),
          y[23] !== C
            ? ((c = (0, r.jsxs)(D.$, {
                autoFocus: !0,
                className:
                  "mt-4 h-[34px] min-w-[86px] gap-1 self-start !rounded-md !px-[7px] text-[13px] leading-[18px] rtl:self-end",
                color: "ghost",
                onClick: C,
                type: "button",
                children: [e, t],
              })),
              (y[23] = C),
              (y[24] = c))
            : (c = y[24]),
          y[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, r.jsx)(w.L3, {
                asChild: !0,
                children: (0, r.jsx)("h2", {
                  className: "m-0 text-base leading-6 font-medium",
                  children: (0, r.jsx)(d.A, {
                    id: "codex.referralInviteModal.tracking.title",
                    defaultMessage: "Track your invites",
                  }),
                }),
              })),
              (y[25] = n))
            : (n = y[25]))
        let h = ep[L]
        ;(y[26] !== h ? ((l = (0, r.jsx)(d.A, { ...h })), (y[26] = h), (y[27] = l)) : (l = y[27]),
          y[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, r.jsx)(Z.bF, {
                "aria-hidden": !1,
                legacyIcon: ee.A,
                asset16: U.K,
                legacyClassName: "icon-2xs",
              })),
              (y[28] = o))
            : (o = y[28]),
          y[29] !== l
            ? ((u = (0, r.jsxs)(D.$, {
                className: "h-7 gap-1.5 rounded-lg bg-secondary-ghost-hover px-2 text-[13px] text-secondary",
                color: "ghost",
                children: [l, o],
              })),
              (y[29] = l),
              (y[30] = u))
            : (u = y[30]),
          y[31] !== L
            ? ((p = el.map((e) =>
                (0, r.jsx)(
                  H.ms.Item,
                  {
                    rightIconAsset: e === L ? z.G : void 0,
                    onSelect: () => T(e),
                    children: (0, r.jsx)(d.A, { ...ep[e] }),
                  },
                  e,
                ),
              )),
              (y[31] = L),
              (y[32] = p))
            : (p = y[32]),
          y[33] !== u || y[34] !== p
            ? ((m = (0, r.jsxs)("div", {
                className: "mt-5 mb-6 flex h-7 items-center justify-between gap-4",
                children: [
                  n,
                  (0, r.jsx)(H.Ab, { align: "end", contentClassName: "min-w-32", triggerButton: u, children: p }),
                ],
              })),
              (y[33] = u),
              (y[34] = p),
              (y[35] = m))
            : (m = y[35]),
          (a = "flex scrollbar-on-hover min-h-0 flex-1 flex-col gap-4 overflow-y-auto"),
          (i =
            x || (P && null == O)
              ? (0, r.jsx)("p", {
                  className: "m-0 py-8 text-center text-sm text-secondary",
                  role: "alert",
                  children: (0, r.jsx)(d.A, {
                    id: "codex.referralInviteModal.tracking.loadError",
                    defaultMessage: "Couldn\u2019t load your invites",
                  }),
                })
              : N || (_ && G)
                ? Array.from({ length: 3 }, ec)
                : g?.length !== 0 || B
                  ? g?.map(ed)
                  : (0, r.jsx)("p", {
                      className: "m-0 py-8 text-center text-sm text-secondary",
                      children: (0, r.jsx)(d.A, {
                        id: "codex.referralInviteModal.tracking.empty",
                        defaultMessage: "No invites in this period",
                      }),
                    })),
          (y[5] = A),
          (y[6] = O),
          (y[7] = B),
          (y[8] = N),
          (y[9] = P),
          (y[10] = G),
          (y[11] = C),
          (y[12] = L),
          (y[13] = j),
          (y[14] = a),
          (y[15] = i),
          (y[16] = s),
          (y[17] = c),
          (y[18] = m),
          (y[19] = f))
      } else ((a = y[14]), (i = y[15]), (s = y[16]), (c = y[17]), (m = y[18]), (f = y[19]))
      ;(y[36] !== S || y[37] !== B || y[38] !== Y || y[39] !== K || y[40] !== X
        ? ((p = B
            ? (0, r.jsxs)("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                  Y
                    ? (0, r.jsx)("p", {
                        className: "m-0 text-center text-sm text-danger",
                        role: "alert",
                        children: (0, r.jsx)(d.A, {
                          id: "codex.referralInviteModal.tracking.loadMoreError",
                          defaultMessage: "Couldn\u2019t load more invites",
                        }),
                      })
                    : null,
                  (0, r.jsx)(D.$, {
                    className: "h-7",
                    color: "outline",
                    disabled: K,
                    loading: X,
                    onClick: () => {
                      K || S()
                    },
                    type: "button",
                    children: Y
                      ? (0, r.jsx)(d.A, {
                          id: "codex.referralInviteModal.tracking.retryLoadMore",
                          defaultMessage: "Try again",
                        })
                      : (0, r.jsx)(d.A, {
                          id: "codex.referralInviteModal.tracking.loadMore",
                          defaultMessage: "Load more",
                        }),
                  }),
                ],
              })
            : null),
          (y[36] = S),
          (y[37] = B),
          (y[38] = Y),
          (y[39] = K),
          (y[40] = X),
          (y[41] = p))
        : (p = y[41]),
        y[42] !== a || y[43] !== i || y[44] !== p
          ? ((g = (0, r.jsxs)("div", { className: a, children: [i, p] })),
            (y[42] = a),
            (y[43] = i),
            (y[44] = p),
            (y[45] = g))
          : (g = y[45]),
        y[46] !== s || y[47] !== c || y[48] !== m || y[49] !== g
          ? ((_ = (0, r.jsxs)("section", { className: s, children: [c, m, g] })),
            (y[46] = s),
            (y[47] = c),
            (y[48] = m),
            (y[49] = g),
            (y[50] = _))
          : (_ = y[50]),
        y[51] !== _ || y[52] !== f
          ? ((x = (0, r.jsxs)(r.Fragment, { children: [f, _] })), (y[51] = _), (y[52] = f), (y[53] = x))
          : (x = y[53]))
      let $ = x
      return I
        ? $
        : (y[54] !== M
            ? ((h = (e) => {
                e || M()
              }),
              (y[54] = M),
              (y[55] = h))
            : (h = y[55]),
          y[56] !== k
            ? ((b = k.formatMessage({ id: "codex.referralInviteModal.close", defaultMessage: "Close" })),
              (y[56] = k),
              (y[57] = b))
            : (b = y[57]),
          y[58] !== $ || y[59] !== h || y[60] !== b
            ? ((E = (0, r.jsx)(w.lG, {
                open: !0,
                contentClassName:
                  "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] !w-[480px] !max-w-[calc(100vw/var(--codex-window-zoom)-2rem)] !rounded-[24px] !p-0 !shadow-xl",
                onOpenChange: h,
                dialogCloseClassName: "top-[21px]",
                dialogCloseLabel: b,
                size: "default",
                children: $,
              })),
              (y[58] = $),
              (y[59] = h),
              (y[60] = b),
              (y[61] = E))
            : (E = y[61]),
          E)
    }
    function ed(e) {
      return (0, r.jsx)(em, { referral: e }, e.referral_id)
    }
    function ec(e, t) {
      return (0, r.jsxs)(
        "div",
        {
          className: "flex h-10 animate-pulse items-center gap-3",
          children: [
            (0, r.jsx)("span", { className: "size-10 rounded-full bg-secondary-ghost-hover" }),
            (0, r.jsx)("span", { className: "h-4 w-36 rounded bg-secondary-ghost-hover" }),
          ],
        },
        t,
      )
    }
    function eu(e) {
      return e.items
    }
    function em(e) {
      let t,
        a,
        i,
        l,
        c,
        u,
        m,
        p,
        g,
        _,
        v,
        C,
        R,
        k = (0, n.c)(47),
        { referral: w } = e,
        N = (0, s.gh)(x.u),
        j = (0, o.A)(),
        L = (0, s._U)(b, w.referral_id),
        T = (0, s._U)(E, w.referral_id),
        O = (0, Q.wv)(),
        S = "pending" === w.status ? w.invite_url : void 0
      k[0] !== w.resend_available_at || k[1] !== T
        ? ((t = y({ resendAvailableAt: w.resend_available_at, trackedCooldownUntil: T })),
          (k[0] = w.resend_available_at),
          (k[1] = T),
          (k[2] = t))
        : (t = k[2])
      let B = t,
        P = null != B && B > O.getTime(),
        K = "pending" === L
      k[3] !== j
        ? ((a = j.formatMessage({
            id: "codex.referralInviteModal.tracking.resendEmail",
            defaultMessage: "Resend email",
          })),
          (k[3] = j),
          (k[4] = a))
        : (a = k[4])
      let F = a
      if (P) {
        let e
        ;(k[5] !== j
          ? ((e = j.formatMessage({
              id: "codex.referralInviteModal.tracking.resendCooldown",
              defaultMessage: "Invite sent",
            })),
            (k[5] = j),
            (k[6] = e))
          : (e = k[6]),
          (F = e))
      } else if ("error" === L) {
        let e
        ;(k[7] !== j
          ? ((e = j.formatMessage({
              id: "codex.referralInviteModal.tracking.retryResendEmail",
              defaultMessage: "Try again",
            })),
            (k[7] = j),
            (k[8] = e))
          : (e = k[8]),
          (F = e))
      }
      let Y = `referral-invite-row-${w.referral_id}`
      ;(k[9] !== w.email
        ? ((i = w.email?.slice(0, 1) ?? (0, r.jsx)(V.I, { asset: G.l })), (k[9] = w.email), (k[10] = i))
        : (i = k[10]),
        k[11] !== i
          ? ((l = (0, r.jsx)("span", {
              className:
                "flex size-10 items-center justify-center rounded-full bg-secondary-ghost-hover text-sm font-medium uppercase",
              children: i,
            })),
            (k[11] = i),
            (k[12] = l))
          : (l = k[12]),
        k[13] !== w.email
          ? ((c =
              w.email ??
              (0, r.jsx)(d.A, {
                id: "codex.referralInviteModal.tracking.emailUnavailable",
                defaultMessage: "Email unavailable",
              })),
            (k[13] = w.email),
            (k[14] = c))
          : (c = k[14]),
        k[15] !== c
          ? ((u = (0, r.jsx)("span", { className: "min-w-0 truncate text-[13px] leading-5", children: c })),
            (k[15] = c),
            (k[16] = u))
          : (u = k[16]),
        k[17] !== w.email || k[18] !== u
          ? ((m = (0, r.jsx)(A.m, { content: w.email, enabledWhen: "target-overflows", children: u })),
            (k[17] = w.email),
            (k[18] = u),
            (k[19] = m))
          : (m = k[19]))
      let X = "redeemed" === w.status && "!text-chart-green",
        z =
          null != S &&
          "opacity-0 group-focus-within/referral:!opacity-0 group-hover/referral:!opacity-0 [@container_referral-tracking_(min-width:401px)]:[@media(hover:hover)]:opacity-100"
      k[20] !== z || k[21] !== X
        ? ((p = (0, M.A)(
            "flex h-8 w-full min-w-0 items-center justify-end truncate text-end text-[13px] leading-5 text-secondary",
            X,
            z,
          )),
          (k[20] = z),
          (k[21] = X),
          (k[22] = p))
        : (p = k[22])
      let U = `referral-invite-status-${w.referral_id}`
      return (
        k[23] !== w.status
          ? ((g = (0, r.jsx)(ef, { status: w.status })), (k[23] = w.status), (k[24] = g))
          : (g = k[24]),
        k[25] !== p || k[26] !== U || k[27] !== g
          ? ((_ = (0, r.jsx)("span", { className: p, "data-testid": U, children: g })),
            (k[25] = p),
            (k[26] = U),
            (k[27] = g),
            (k[28] = _))
          : (_ = k[28]),
        k[29] !== P ||
        k[30] !== j ||
        k[31] !== S ||
        k[32] !== K ||
        k[33] !== w.can_resend ||
        k[34] !== w.referral_id ||
        k[35] !== w.resend_available_at ||
        k[36] !== F ||
        k[37] !== N
          ? ((v =
              null != S
                ? (0, r.jsxs)("div", {
                    className:
                      "pointer-events-auto absolute inset-y-0 right-0 flex w-max items-center justify-end gap-2 bg-surface-elevated-secondary opacity-100 group-focus-within/referral:!pointer-events-auto group-focus-within/referral:!opacity-100 group-hover/referral:!pointer-events-auto group-hover/referral:!opacity-100 before:pointer-events-none before:absolute before:inset-y-0 before:-left-4 before:w-4 before:bg-linear-to-r before:from-transparent before:to-surface-elevated-secondary before:content-[''] [@container_referral-tracking_(min-width:401px)]:[@media(hover:hover)]:pointer-events-none [@container_referral-tracking_(min-width:401px)]:[@media(hover:hover)]:opacity-0",
                    "data-testid": `referral-invite-actions-${w.referral_id}`,
                    children: [
                      (0, r.jsx)(es, { inviteUrl: S }),
                      !0 === w.can_resend
                        ? (0, r.jsx)(A.m, {
                            content: F,
                            enabledWhen: "target-hidden",
                            children: (0, r.jsx)(D.$, {
                              className:
                                "relative max-w-30 text-xs transition-transform duration-basic ease-out focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 [@container_referral-tracking_(max-width:400px)]:w-token-button-composer [@container_referral-tracking_(max-width:400px)]:justify-center [@container_referral-tracking_(max-width:400px)]:px-0",
                              allowShrink: !0,
                              "aria-label": F,
                              color: "outline",
                              disabled: P,
                              loading: K,
                              onClick: () => {
                                ;(async function (e, { referralId: t, resendAvailableAt: a }) {
                                  let r = Date.now(),
                                    n = y({ resendAvailableAt: a, trackedCooldownUntil: e.get(E, t) })
                                  if (null != n && n > r) return "cooldown"
                                  e.set(b, t, "pending")
                                  try {
                                    await h.CodexRequest.safePost("/referrals/invite/{referral_id}/send-email", {
                                      parameters: { path: { referral_id: t } },
                                    })
                                  } catch (a) {
                                    if (a instanceof f.fk && 429 === a.status)
                                      return (e.set(E, t, r + 6e4), e.set(b, t, "idle"), I(e), "cooldown")
                                    return (e.set(b, t, "error"), I(e), "error")
                                  }
                                  return (e.set(E, t, r + 864e5), e.set(b, t, "idle"), I(e), "resent")
                                })(N, { referralId: w.referral_id, resendAvailableAt: w.resend_available_at }).then(
                                  (e) => {
                                    switch (e) {
                                      case "cooldown":
                                        break
                                      case "error":
                                        N.get(W.Id).danger(
                                          j.formatMessage({
                                            id: "codex.referralInviteModal.tracking.resendError",
                                            defaultMessage: "Couldn\u2019t resend invite",
                                          }),
                                          {
                                            errorAnalytics: {
                                              toastId: "codex.referralInviteModal.tracking.resendError",
                                            },
                                          },
                                        )
                                        break
                                      case "resent":
                                        N.get(W.Id).success(
                                          j.formatMessage({
                                            id: "codex.referralInviteModal.tracking.resendSuccess",
                                            defaultMessage: "Invite email resent",
                                          }),
                                        )
                                    }
                                  },
                                )
                              },
                              size: "toolbar",
                              type: "button",
                              children: K
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      P
                                        ? (0, r.jsx)(J.A, {
                                            className:
                                              "icon-xs hidden [@container_referral-tracking_(max-width:400px)]:block",
                                          })
                                        : (0, r.jsx)(et.A, {
                                            className:
                                              "icon-xs hidden [@container_referral-tracking_(max-width:400px)]:block",
                                          }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "min-w-0 truncate [@container_referral-tracking_(max-width:400px)]:hidden",
                                        "data-tooltip-enablement-target": !0,
                                        children: F,
                                      }),
                                    ],
                                  }),
                            }),
                          })
                        : null,
                    ],
                  })
                : null),
            (k[29] = P),
            (k[30] = j),
            (k[31] = S),
            (k[32] = K),
            (k[33] = w.can_resend),
            (k[34] = w.referral_id),
            (k[35] = w.resend_available_at),
            (k[36] = F),
            (k[37] = N),
            (k[38] = v))
          : (v = k[38]),
        k[39] !== _ || k[40] !== v
          ? ((C = (0, r.jsxs)("div", {
              className: "relative flex h-8 w-full items-center justify-end",
              children: [_, v],
            })),
            (k[39] = _),
            (k[40] = v),
            (k[41] = C))
          : (C = k[41]),
        k[42] !== C || k[43] !== Y || k[44] !== l || k[45] !== m
          ? ((R = (0, r.jsxs)("div", {
              className:
                "group/referral grid h-10 shrink-0 grid-cols-[2.5rem_minmax(0,1fr)_4.25rem] items-center gap-3 rounded-lg",
              "data-testid": Y,
              children: [l, m, C],
            })),
            (k[42] = C),
            (k[43] = Y),
            (k[44] = l),
            (k[45] = m),
            (k[46] = R))
          : (R = k[46]),
        R
      )
    }
    function ef(e) {
      let t = (0, n.c)(3),
        { status: a } = e
      switch (a) {
        case "pending": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.A, { id: "codex.referralInviteModal.tracking.pending", defaultMessage: "Pending" })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "redeemed": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.A, {
                  id: "codex.referralInviteModal.tracking.redeemed",
                  defaultMessage: "Accepted",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "expired": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.A, { id: "codex.referralInviteModal.tracking.expired", defaultMessage: "Expired" })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
      }
    }
    let ep = (0, $.YK)({
        this_month: { id: "codex.referralInviteModal.tracking.thisMonth", defaultMessage: "This month" },
        past_90_days: { id: "codex.referralInviteModal.tracking.past90Days", defaultMessage: "Past 90 days" },
      }),
      eg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      e_ = new Map([
        ["credits_250", 250],
        ["credits_500", 500],
        ["credits_1000", 1e3],
      ]),
      ex = c.Ikc({
        detail: c
          .KCZ([c.YjP(), c.Ikc({ message: c.YjP().optional(), failed_emails: c.YOg(c.YjP()).optional() })])
          .optional(),
      })
    function eh(e) {
      var t, a
      let c,
        x,
        b,
        E,
        y,
        I,
        M,
        R,
        k,
        w,
        A,
        N,
        D,
        j,
        L,
        T,
        O,
        S,
        B,
        P,
        K,
        F,
        V,
        Y,
        z,
        U,
        G,
        q,
        $,
        H,
        Z,
        W,
        Q,
        J,
        ee,
        et,
        ea,
        er,
        en,
        ei = (0, n.c)(170),
        { context: es, eligibility: el, onClose: ed } = e,
        ec = (0, o.A)(),
        eu = (0, s.Ul)(m.YV),
        { accountId: em, userId: ef } = (0, u.As)()
      ei[0] !== em || ei[1] !== es || ei[2] !== ec.locale || ei[3] !== ef
        ? ((c = { accountId: em, context: es, locale: ec.locale, userId: ef }),
          (ei[0] = em),
          (ei[1] = es),
          (ei[2] = ec.locale),
          (ei[3] = ef),
          (ei[4] = c))
        : (c = ei[4])
      let { data: ep, isError: eg, isFetching: eh } = (0, s._U)(v.YK, c),
        ek = (0, l.useRef)(!1),
        eD = ep ?? el,
        ej = (0, l.useId)(),
        eL = (0, l.useId)(),
        [eT, eO] = (0, l.useState)("")
      ei[5] === Symbol.for("react.memo_cache_sentinel") ? ((x = []), (ei[5] = x)) : (x = ei[5])
      let [eS, eB] = (0, l.useState)(x)
      ei[6] === Symbol.for("react.memo_cache_sentinel") ? ((b = []), (ei[6] = b)) : (b = ei[6])
      let [eP, eK] = (0, l.useState)(b),
        [eF, eV] = (0, l.useState)(!1),
        [eY, eX] = (0, l.useState)(null),
        [ez, eU] = (0, l.useState)(),
        [eG, eq] = (0, l.useState)(null),
        [e$, eH] = (0, l.useState)(null)
      ei[7] !== em || ei[8] !== es || ei[9] !== ec.locale || ei[10] !== ef
        ? ((E = { accountId: em, context: es, locale: ec.locale, userId: ef }),
          (ei[7] = em),
          (ei[8] = es),
          (ei[9] = ec.locale),
          (ei[10] = ef),
          (ei[11] = E))
        : (E = ei[11])
      let eZ = (function (e) {
        let t,
          a,
          r,
          i = (0, n.c)(12),
          { accountId: s, context: l, locale: o, userId: d } = e,
          c = (0, p.jE)(),
          u = (0, _.B)()
        return (
          i[0] !== l
            ? ((t = (e) =>
                h.CodexRequest.safePost("/referrals/invite", {
                  requestBody: { program_id: l.programId, entrypoint: l.entrypoint, emails: e },
                })),
              (i[0] = l),
              (i[1] = t))
            : (t = i[1]),
          i[2] !== s || i[3] !== l || i[4] !== u || i[5] !== o || i[6] !== c || i[7] !== d
            ? ((a = () => {
                ;(c.invalidateQueries({ queryKey: (0, v.Dt)({ accountId: s, context: l, locale: o, userId: d }) }),
                  c.invalidateQueries({ queryKey: ["referral-invite-tracking"] }),
                  u(["rate-limit-status"]))
              }),
              (i[2] = s),
              (i[3] = l),
              (i[4] = u),
              (i[5] = o),
              (i[6] = c),
              (i[7] = d),
              (i[8] = a))
            : (a = i[8]),
          i[9] !== t || i[10] !== a
            ? ((r = { mutationFn: t, onSuccess: a }), (i[9] = t), (i[10] = a), (i[11] = r))
            : (r = i[11]),
          (0, g.n)(r)
        )
      })(E)
      ei[12] !== em || ei[13] !== es.programId || ei[14] !== ef
        ? ((y = { accountId: em, programId: es.programId, userId: ef }),
          (ei[12] = em),
          (ei[13] = es.programId),
          (ei[14] = ef),
          (ei[15] = y))
        : (y = ei[15])
      let { data: eW, isError: eQ, isPending: eJ } = (0, s._U)(v.$c, y)
      ei[16] !== eD.grants ? ((I = eD.grants ?? []), (ei[16] = eD.grants), (ei[17] = I)) : (I = ei[17])
      let e1 = I
      ei[18] !== e1 ? ((M = e1.some(eM)), (ei[18] = e1), (ei[19] = M)) : (M = ei[19])
      let e0 = M
      ei[20] !== e1 ? ((R = e1.find(eC)), (ei[20] = e1), (ei[21] = R)) : (R = ei[21])
      let e2 = R
      ei[22] !== e2?.amount || ei[23] !== eD.offer_id || ei[24] !== e1.length
        ? ((k = e2?.amount ?? (0 === e1.length ? e_.get(eD.offer_id ?? "") : void 0)),
          (ei[22] = e2?.amount),
          (ei[23] = eD.offer_id),
          (ei[24] = e1.length),
          (ei[25] = k))
        : (k = ei[25])
      let e4 = k,
        e3 = 0 === e1.length && null != eD.offer_id && "none" !== eD.offer_id
      ei[26] !== eD.remaining_reward_capacity || ei[27] !== eD.remaining_send_capacity || ei[28] !== e1
        ? ((w = (0, C.M)({
            grants: e1,
            remainingRewardCapacity: eD.remaining_reward_capacity,
            remainingSendCapacity: eD.remaining_send_capacity,
          })),
          (ei[26] = eD.remaining_reward_capacity),
          (ei[27] = eD.remaining_send_capacity),
          (ei[28] = e1),
          (ei[29] = w))
        : (w = ei[29])
      let e5 = Math.min(w, e3 ? (eD.remaining_reward_capacity ?? 0) : 1 / 0),
        e8 = "codex_referral_consumer" === es.programId,
        e6 = !1 !== eD.requires_explicit_confirmation
      ei[30] !== eT ? ((A = eT.trim()), (ei[30] = eT), (ei[31] = A)) : (A = ei[31])
      let e7 = A.length > 0
      ei[32] !== eS || ei[33] !== e5
        ? ((N = eS.length > 0 && eS.length <= e5 && eS.every(eI)), (ei[32] = eS), (ei[33] = e5), (ei[34] = N))
        : (N = ei[34])
      let e9 = N,
        te = !(eS.length < e5),
        tt = eg || eG?.type === "error",
        ta = eG?.type === "error" && "maxEmails" === eG.reason,
        tr = eZ.isPending,
        tn = null != eY,
        ti = tr || tn,
        ts = null != ef && null != em,
        tl = ts && eJ,
        to = ts && (eQ || (eW ?? 0) > 0),
        td = ej + "-status"
      ei[35] !== eS.length ||
      ei[36] !== e7 ||
      ei[37] !== te ||
      ei[38] !== ec ||
      ei[39] !== eG ||
      ei[40] !== eg ||
      ei[41] !== e8 ||
      ei[42] !== e5
        ? ((D = eg
            ? ew(ec, e8, 0)
            : eG?.type === "error"
              ? eG.message
              : te && (e7 || eS.length > e5 || e5 <= 0)
                ? ew(ec, e8, e5)
                : null),
          (ei[35] = eS.length),
          (ei[36] = e7),
          (ei[37] = te),
          (ei[38] = ec),
          (ei[39] = eG),
          (ei[40] = eg),
          (ei[41] = e8),
          (ei[42] = e5),
          (ei[43] = D))
        : (D = ei[43])
      let tc = D,
        tu = null != tc ? td : void 0
      ei[44] !== ec || ei[45] !== e8
        ? ((t = ec),
          (a = e8),
          (j = {
            close_button_label: t.formatMessage({ id: "codex.referralInviteModal.close", defaultMessage: "Close" }),
            consent_multiple_label: t.formatMessage({
              id: "codex.referralInviteModal.consent.multiple",
              defaultMessage: "I have the consent of these people to send them this invite",
            }),
            consent_single_label: t.formatMessage({
              id: "codex.referralInviteModal.consent.single",
              defaultMessage: "I have the consent of this person to send them this invite",
            }),
            description: a
              ? t.formatMessage({
                  id: "codex.referralInviteModal.summaryDescription.desktopApp",
                  defaultMessage:
                    "Invite a friend to ChatGPT Desktop: one place to ask questions, get work done, and build with Codex",
                })
              : t.formatMessage({
                  id: "codex.referralInviteModal.summaryDescription.desktopApp.workspace",
                  defaultMessage:
                    "Invite a coworker to ChatGPT Desktop: one place to ask questions, get work done, and build with Codex",
                }),
            done_button_label: t.formatMessage({ id: "codex.referralInviteModal.done", defaultMessage: "Done" }),
            eligibility_link_label: t.formatMessage({
              id: "codex.referralInviteModal.eligibilityLink",
              defaultMessage: "View eligibility criteria",
            }),
            email_input_label: t.formatMessage({ id: "codex.referralInviteModal.emailLabel", defaultMessage: "Email" }),
            email_placeholder: t.formatMessage({
              id: "codex.referralInviteModal.emailPlaceholder",
              defaultMessage: "Add emails",
            }),
            invite_dialog_description: t.formatMessage({
              id: "codex.referralInviteModal.dialogDescription",
              defaultMessage: "Send referral invites",
            }),
            invite_sent_labels: Array.from({ length: 5 }, (e, a) =>
              t.formatMessage(
                {
                  id: "codex.referralInviteModal.timeline.inviteSent",
                  defaultMessage: "{count, plural, one {Invite sent} other {Invites sent}}",
                },
                { count: a + 1 },
              ),
            ),
            remove_email_label_template: t.formatMessage(
              { id: "codex.referralInviteModal.removeEmail", defaultMessage: "Remove {email}" },
              { email: "{email}" },
            ),
            send_button_label: t.formatMessage({ id: "codex.referralInviteModal.sendInvite", defaultMessage: "Send" }),
            success_descriptions: Array.from({ length: 5 }, (e, r) =>
              a
                ? t.formatMessage(
                    {
                      id: "codex.referralInviteModal.successDescription.desktopApp",
                      defaultMessage:
                        "{count, plural, one {Your friend will receive an invite to use ChatGPT Desktop for questions, work, and code.} other {Your friends will receive invites to use ChatGPT Desktop for questions, work, and code.}}",
                    },
                    { count: r + 1 },
                  )
                : t.formatMessage(
                    {
                      id: "codex.referralInviteModal.successDescription.desktopApp.workspace",
                      defaultMessage:
                        "{count, plural, one {Your coworker will receive an invite to use ChatGPT for questions, work, and code} other {Your coworkers will receive invites to use ChatGPT for questions, work, and code}}",
                    },
                    { count: r + 1 },
                  ),
            ),
            success_dialog_description: t.formatMessage({
              id: "codex.referralInviteModal.successDialogDescription",
              defaultMessage: "Referral invites sent",
            }),
            title: a
              ? t.formatMessage({
                  id: "codex.referralInviteModal.title.desktopApp",
                  defaultMessage: "Invite a friend to ChatGPT Desktop",
                })
              : t.formatMessage({
                  id: "codex.referralInviteModal.title.desktopApp.workspace",
                  defaultMessage: "Invite a coworker to ChatGPT Desktop",
                }),
          }),
          (ei[44] = ec),
          (ei[45] = e8),
          (ei[46] = j))
        : (j = ei[46])
      let tm = j
      ei[47] !== es.entrypoint || ei[48] !== es.programId || ei[49] !== eD.offer_id || ei[50] !== e1 || ei[51] !== eY
        ? ((L =
            null == eY
              ? { entrypoint: es.entrypoint, grants: e1, offerId: eD.offer_id, programId: es.programId }
              : { entrypoint: es.entrypoint, grants: eY.grants, offerId: eY.offer_id, programId: es.programId }),
          (ei[47] = es.entrypoint),
          (ei[48] = es.programId),
          (ei[49] = eD.offer_id),
          (ei[50] = e1),
          (ei[51] = eY),
          (ei[52] = L))
        : (L = ei[52])
      let tf = L
      ei[53] !== tf || ei[54] !== eu
        ? ((T = (e, t) => {
            var a, r
            let n = void 0 === t ? tf : t
            eu.logProductEvent(i.CodexReferralInviteModalEvent, {
              ...e,
              entrypoint: n.entrypoint ?? void 0,
              grants:
                null == n.grants
                  ? void 0
                  : n.grants.map((e) => ({ amount: e.amount, grantType: e.grant_type, recipient: e.recipient })),
              offerId: n.offerId ?? void 0,
              programId: n.programId ?? void 0,
              referralRewardType:
                null == n.grants
                  ? void 0
                  : ((a = n.grants),
                    (r = n.offerId),
                    a.some((e) => "rate_limit_reset_credit" === e.grant_type)
                      ? "rateLimitReset"
                      : a.some((e) => "workspace_credits" === e.grant_type || "personal_credits" === e.grant_type) ||
                          (0 === a.length && e_.has(r ?? ""))
                        ? "credits"
                        : "none"),
            })
          }),
          (ei[53] = tf),
          (ei[54] = eu),
          (ei[55] = T))
        : (T = ei[55])
      let tp = T
      ei[56] !== tp
        ? ((O = () => {
            tp({ action: i.CodexReferralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_SHOWN })
          }),
          (ei[56] = tp),
          (ei[57] = O))
        : (O = ei[57])
      let tg = (0, l.useEffectEvent)(O)
      ;(ei[58] !== ep || ei[59] !== eg || ei[60] !== eh || ei[61] !== tg
        ? ((S = () => {
            null == ep || eg || eh || ek.current || ((ek.current = !0), tg())
          }),
          (ei[58] = ep),
          (ei[59] = eg),
          (ei[60] = eh),
          (ei[61] = tg),
          (ei[62] = S))
        : (S = ei[62]),
        ei[63] !== ep || ei[64] !== eg || ei[65] !== eh
          ? ((B = [ep, eg, eh]), (ei[63] = ep), (ei[64] = eg), (ei[65] = eh), (ei[66] = B))
          : (B = ei[66]),
        (0, l.useEffect)(S, B),
        ei[67] !== tr || ei[68] !== tp || ei[69] !== ed
          ? ((P = () => {
              tr ||
                (ek.current &&
                  tp({ action: i.CodexReferralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_CLOSE_CLICKED }),
                ed())
            }),
            (ei[67] = tr),
            (ei[68] = tp),
            (ei[69] = ed),
            (ei[70] = P))
          : (P = ei[70]))
      let t_ = P
      ei[71] !== tp || ei[72] !== ed
        ? ((K = () => {
            ;(tp({ action: i.CodexReferralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_DONE_CLICKED }), ed())
          }),
          (ei[71] = tp),
          (ei[72] = ed),
          (ei[73] = K))
        : (K = ei[73])
      let tx = K
      ei[74] !== eS || ei[75] !== ec || ei[76] !== e8 || ei[77] !== e5
        ? ((F = (e) => {
            let t = eR(e)
            if (0 === t.length) return { blockedByLimit: !1, emails: eS }
            let a = new Set(eS.map(ey)),
              r = t.filter((e) => {
                let t = e.toLowerCase()
                return !a.has(t) && (a.add(t), !0)
              }),
              n = Math.max(e5 - eS.length, 0),
              i = r.slice(0, n),
              s = r.slice(n),
              l = [...eS, ...i],
              o = l.filter(eE)
            return (
              eB(l),
              eO(s.join(", ")),
              eV(!1),
              eK(o),
              o.length > 0
                ? eq({ type: "error", message: eA(o, ec), reason: "invalidEmails" })
                : s.length > 0
                  ? eq({ type: "error", message: ew(ec, e8, e5), reason: "maxEmails" })
                  : eq(null),
              { blockedByLimit: s.length > 0, emails: l }
            )
          }),
          (ei[74] = eS),
          (ei[75] = ec),
          (ei[76] = e8),
          (ei[77] = e5),
          (ei[78] = F))
        : (F = ei[78])
      let th = F
      ei[79] !== eS || ei[80] !== ec
        ? ((V = (e) => {
            let t = eS.filter((t) => t !== e),
              a = t.filter(eb)
            ;(eB(t),
              eV(!1),
              eK(a),
              eq(a.length > 0 ? { type: "error", message: eA(a, ec), reason: "invalidEmails" } : null))
          }),
          (ei[79] = eS),
          (ei[80] = ec),
          (ei[81] = V))
        : (V = ei[81])
      let tv = V
      ei[82] !== th ||
      ei[83] !== es.entrypoint ||
      ei[84] !== es.programId ||
      ei[85] !== eZ ||
      ei[86] !== eD.should_show ||
      ei[87] !== eT ||
      ei[88] !== eS ||
      ei[89] !== eF ||
      ei[90] !== e7 ||
      ei[91] !== ec ||
      ei[92] !== eg ||
      ei[93] !== eh ||
      ei[94] !== tp ||
      ei[95] !== e5 ||
      ei[96] !== e6 ||
      ei[97] !== eW
        ? ((Y = async () => {
            if (eg || eh || !0 !== eD.should_show || (e6 && !eF)) return
            ;(eq(null), eK([]))
            let e = e7 ? th(eT) : { blockedByLimit: !1, emails: eS }
            if (e.blockedByLimit) return
            let t = e.emails
            if (0 === t.length || t.length > e5) return
            let a = t.filter(ev)
            if (a.length > 0) {
              ;(eK(a), eq({ type: "error", message: eA(a, ec), reason: "invalidEmails" }))
              return
            }
            tp({
              action: i.CodexReferralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_SEND_CLICKED,
              emailCount: t.length,
            })
            try {
              let e = await eZ.mutateAsync(t)
              ;(tp(
                {
                  action: i.CodexReferralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_SEND_SUCCEEDED,
                  emailCount: e.invites.length,
                },
                { entrypoint: es.entrypoint, grants: e.grants, offerId: e.offer_id, programId: es.programId },
              ),
                eU(null == eW ? void 0 : eW + e.invites.length),
                eX(e))
            } catch (l) {
              var r, n, s
              let e = (function (e) {
                  if (!(e instanceof f.fk)) return null
                  try {
                    let t = ex.safeParse(JSON.parse(e.message))
                    if (!t.success)
                      return {
                        backendErrorAnalytics: eN({ hasBackendDetail: !1, status: e.status }),
                        failedEmails: void 0,
                        message: void 0,
                      }
                    let a = null != t.data.detail
                    if ("string" == typeof t.data.detail)
                      return {
                        backendErrorAnalytics: eN({ hasBackendDetail: a, message: t.data.detail, status: e.status }),
                        failedEmails: void 0,
                        message: t.data.detail,
                      }
                    return {
                      backendErrorAnalytics: eN({
                        hasBackendDetail: a,
                        message: t.data.detail?.message,
                        status: e.status,
                      }),
                      failedEmails: t.data.detail?.failed_emails,
                      message: t.data.detail?.message,
                    }
                  } catch {
                    return {
                      backendErrorAnalytics: eN({ hasBackendDetail: !1, status: e.status }),
                      failedEmails: void 0,
                      message: void 0,
                    }
                  }
                })(l),
                a = e?.failedEmails != null && e.failedEmails.length > 0 ? e.failedEmails : t
              ;(eK(a),
                null != e &&
                  tp({
                    action: i.CodexReferralInviteModalAction.CODEX_REFERRAL_INVITE_MODAL_ACTION_BACKEND_ERROR,
                    emailCount: t.length,
                    failedEmailCount: a.length,
                    errorType: e.backendErrorAnalytics.errorType,
                    errorResponsibility: e.backendErrorAnalytics.errorResponsibility,
                    httpStatus: e.backendErrorAnalytics.httpStatus,
                    hasBackendDetail: e.backendErrorAnalytics.hasBackendDetail,
                  }),
                eq({
                  type: "error",
                  message:
                    ((r = a),
                    (n = ec),
                    null != (s = e?.message)
                      ? n.formatMessage(
                          {
                            id: "codex.referralInviteModal.failedEmailsDetailedError",
                            defaultMessage: "{message}: {emails}",
                          },
                          { message: s, emails: r.join(", ") },
                        )
                      : n.formatMessage(
                          {
                            id: "codex.referralInviteModal.failedEmailsError",
                            defaultMessage: "Couldn\u2019t send invites to: {emails}",
                          },
                          { emails: r.join(", ") },
                        )),
                  reason: "failedInvite",
                }))
            }
          }),
          (ei[82] = th),
          (ei[83] = es.entrypoint),
          (ei[84] = es.programId),
          (ei[85] = eZ),
          (ei[86] = eD.should_show),
          (ei[87] = eT),
          (ei[88] = eS),
          (ei[89] = eF),
          (ei[90] = e7),
          (ei[91] = ec),
          (ei[92] = eg),
          (ei[93] = eh),
          (ei[94] = tp),
          (ei[95] = e5),
          (ei[96] = e6),
          (ei[97] = eW),
          (ei[98] = Y))
        : (Y = ei[98])
      let tb = Y
      ei[99] !== th || ei[100] !== eT || ei[101] !== eS || ei[102] !== tb || ei[103] !== tv
        ? ((z = (e) => {
            if ("Enter" === e.key) return (e.preventDefault(), 0 === eR(eT).length) ? void tb() : void th(eT)
            if ("," === e.key) {
              ;(e.preventDefault(), th(eT))
              return
            }
            if ("Backspace" === e.key && 0 === eT.length) {
              let e = eS[eS.length - 1]
              null != e && tv(e)
            }
          }),
          (ei[99] = th),
          (ei[100] = eT),
          (ei[101] = eS),
          (ei[102] = tb),
          (ei[103] = tv),
          (ei[104] = z))
        : (z = ei[104])
      let tE = z
      ei[105] !== th
        ? ((U = (e) => {
            let t = e.clipboardData.getData("text")
            eR(t).length <= 1 || (e.preventDefault(), th(t))
          }),
          (ei[105] = th),
          (ei[106] = U))
        : (U = ei[106])
      let ty = U,
        tI = to || null != eY
      ei[107] !== tu ||
      ei[108] !== eT ||
      ei[109] !== ej ||
      ei[110] !== tc ||
      ei[111] !== eS ||
      ei[112] !== eP ||
      ei[113] !== tt
        ? ((G = { describedBy: tu, emails: eS, failedEmails: eP, hasError: tt, id: ej, statusMessage: tc, value: eT }),
          (ei[107] = tu),
          (ei[108] = eT),
          (ei[109] = ej),
          (ei[110] = tc),
          (ei[111] = eS),
          (ei[112] = eP),
          (ei[113] = tt),
          (ei[114] = G))
        : (G = ei[114])
      let tC = e6 && e9
      ei[115] !== eL || ei[116] !== eS.length || ei[117] !== eF || ei[118] !== tC
        ? ((q = { checked: eF, id: eL, recipientCount: eS.length, visible: tC }),
          (ei[115] = eL),
          (ei[116] = eS.length),
          (ei[117] = eF),
          (ei[118] = tC),
          (ei[119] = q))
        : (q = ei[119])
      let tM = eg || eh || !0 !== eD.should_show || e5 <= 0 || !e9 || e7 || (e6 && !eF) || ti
      ;(ei[120] !== ti || ei[121] !== tr || ei[122] !== tM
        ? (($ = { busy: tr, disabled: tM, inactive: ti, loading: tr }),
          (ei[120] = ti),
          (ei[121] = tr),
          (ei[122] = tM),
          (ei[123] = $))
        : ($ = ei[123]),
        ei[124] !== ta
          ? ((H = (e) => {
              ;(eO(e), eV(!1), ta && eq(null))
            }),
            (ei[124] = ta),
            (ei[125] = H))
          : (H = ei[125]),
        ei[126] !== th || ei[127] !== eT
          ? ((Z = () => {
              th(eT)
            }),
            (ei[126] = th),
            (ei[127] = eT),
            (ei[128] = Z))
          : (Z = ei[128]),
        ei[129] !== tI ? ((W = tI ? () => eH("embedded") : void 0), (ei[129] = tI), (ei[130] = W)) : (W = ei[130]),
        ei[131] !== tE ||
        ei[132] !== ty ||
        ei[133] !== tb ||
        ei[134] !== tv ||
        ei[135] !== H ||
        ei[136] !== Z ||
        ei[137] !== W
          ? ((Q = {
              changeInput: H,
              commitInput: Z,
              handleInputKeyDown: tE,
              handleInputPaste: ty,
              openTracking: W,
              removeEmail: tv,
              setConsent: eV,
              submit: tb,
            }),
            (ei[131] = tE),
            (ei[132] = ty),
            (ei[133] = tb),
            (ei[134] = tv),
            (ei[135] = H),
            (ei[136] = Z),
            (ei[137] = W),
            (ei[138] = Q))
          : (Q = ei[138]),
        ei[139] !== tl || ei[140] !== G || ei[141] !== q || ei[142] !== $ || ei[143] !== Q || ei[144] !== eW
          ? ((J = { input: G, consent: q, submission: $, sentInviteCount: eW, trackingLoading: tl, actions: Q }),
            (ei[139] = tl),
            (ei[140] = G),
            (ei[141] = q),
            (ei[142] = $),
            (ei[143] = Q),
            (ei[144] = eW),
            (ei[145] = J))
          : (J = ei[145]))
      let tR =
          !0 === eD.should_show &&
          "none" !== eD.offer_id &&
          (null != eD.offer_id || e0) &&
          (!e3 || (eD.remaining_reward_capacity ?? 0) > 0),
        tk = eD.description ?? null
      return (
        ei[146] !== e4 || ei[147] !== eD.title
          ? ((ee =
              null != e4
                ? (0, r.jsx)(d.A, {
                    id: "codex.referralInviteModal.creditOfferTitle",
                    defaultMessage: "Get {amount, plural, one {# credit} other {# credits}} per invite",
                    values: { amount: e4 },
                  })
                : (eD.title ?? null)),
            (ei[146] = e4),
            (ei[147] = eD.title),
            (ei[148] = ee))
          : (ee = ei[148]),
        ei[149] !== eY || ei[150] !== ez || ei[151] !== eW
          ? ((et = null == eY ? { type: "editing" } : { type: "sent", invites: eY.invites, sentInviteCount: ez ?? eW }),
            (ei[149] = eY),
            (ei[150] = ez),
            (ei[151] = eW),
            (ei[152] = et))
          : (et = ei[152]),
        ei[153] !== eD.rules ? ((ea = eD.rules ?? []), (ei[153] = eD.rules), (ei[154] = ea)) : (ea = ei[154]),
        ei[155] !== es.programId || ei[156] !== t_ || ei[157] !== e$
          ? ((er =
              "embedded" === e$
                ? (0, r.jsx)(eo, { embedded: !0, onBack: () => eH(null), onClose: t_, programId: es.programId })
                : void 0),
            (ei[155] = es.programId),
            (ei[156] = t_),
            (ei[157] = e$),
            (ei[158] = er))
          : (er = ei[158]),
        ei[159] !== tm ||
        ei[160] !== t_ ||
        ei[161] !== tx ||
        ei[162] !== J ||
        ei[163] !== tR ||
        ei[164] !== tk ||
        ei[165] !== ee ||
        ei[166] !== et ||
        ei[167] !== ea ||
        ei[168] !== er
          ? ((en = (0, r.jsx)(X, {
              copy: tm,
              form: J,
              hasRewardOffer: tR,
              onClose: t_,
              onDone: tx,
              offerDescription: tk,
              offerTitle: ee,
              outcome: et,
              rules: ea,
              trackingContent: er,
            })),
            (ei[159] = tm),
            (ei[160] = t_),
            (ei[161] = tx),
            (ei[162] = J),
            (ei[163] = tR),
            (ei[164] = tk),
            (ei[165] = ee),
            (ei[166] = et),
            (ei[167] = ea),
            (ei[168] = er),
            (ei[169] = en))
          : (en = ei[169]),
        en
      )
    }
    function ev(e) {
      return !ek(e)
    }
    function eb(e) {
      return !ek(e)
    }
    function eE(e) {
      return !ek(e)
    }
    function ey(e) {
      return e.toLowerCase()
    }
    function eI(e) {
      return ek(e)
    }
    function eC(e) {
      return (
        "referrer" === e.recipient &&
        ("personal_credits" === e.grant_type || "workspace_credits" === e.grant_type) &&
        e.amount > 0
      )
    }
    function eM(e) {
      return e.amount > 0
    }
    function eR(e) {
      return e
        .split(/[\s,;]+/)
        .map((e) => e.trim())
        .filter((e) => e.length > 0)
    }
    function ek(e) {
      return eg.test(e)
    }
    function ew(e, t, a) {
      return a <= 0
        ? e.formatMessage({
            id: "codex.referralInviteModal.invitesUnavailable",
            defaultMessage: "Invites are unavailable right now",
          })
        : t
          ? e.formatMessage(
              {
                id: "codex.referralInviteModal.maxEmailsError.personal",
                defaultMessage:
                  "You can invite up to {maxEmails, plural, one {# friend} other {# friends}} at a time. Remove one to add another",
              },
              { maxEmails: a },
            )
          : e.formatMessage(
              {
                id: "codex.referralInviteModal.maxEmailsError.workspace",
                defaultMessage:
                  "You can invite up to {maxEmails, plural, one {# coworker} other {# coworkers}} at a time. Remove one to add another",
              },
              { maxEmails: a },
            )
    }
    function eA(e, t) {
      return t.formatMessage(
        { id: "codex.referralInviteModal.invalidEmailsError", defaultMessage: "Fix these emails: {emails}" },
        { emails: e.join(", ") },
      )
    }
    function eN({ hasBackendDetail: e, message: t, status: a }) {
      let r = (function ({ message: e, status: t }) {
        var a
        return null != (a = e) && /already/i.test(a) && /(referral|invite)/i.test(a)
          ? i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS
          : 400 === t
            ? i.CodexReferralInviteModalBackendErrorType
                .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_VALIDATION_FAILED
            : 401 === t
              ? i.CodexReferralInviteModalBackendErrorType
                  .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_AUTHENTICATION_REQUIRED
              : 403 === t
                ? i.CodexReferralInviteModalBackendErrorType
                    .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_PERMISSION_DENIED
                : 409 === t
                  ? i.CodexReferralInviteModalBackendErrorType
                      .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS
                  : 429 === t
                    ? i.CodexReferralInviteModalBackendErrorType
                        .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_RATE_LIMITED
                    : t >= 500 && t < 600
                      ? i.CodexReferralInviteModalBackendErrorType
                          .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_BACKEND_ISSUE
                      : i.CodexReferralInviteModalBackendErrorType
                          .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNKNOWN_BACKEND_ERROR
      })({ message: t, status: a })
      return {
        errorResponsibility: (function (e) {
          switch (e) {
            case i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_AUTHENTICATION_REQUIRED:
            case i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_PERMISSION_DENIED:
            case i.CodexReferralInviteModalBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_RATE_LIMITED:
            case i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS:
            case i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_VALIDATION_FAILED:
              return i.CodexReferralInviteModalErrorResponsibility.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_USER
            case i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_BACKEND_ISSUE:
            case i.CodexReferralInviteModalBackendErrorType
              .CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNKNOWN_BACKEND_ERROR:
              return i.CodexReferralInviteModalErrorResponsibility
                .CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_SYSTEM
            case i.CodexReferralInviteModalBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNSPECIFIED:
            case i.CodexReferralInviteModalBackendErrorType.UNRECOGNIZED:
              return i.CodexReferralInviteModalErrorResponsibility
                .CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_UNSPECIFIED
          }
        })(r),
        errorType: r,
        hasBackendDetail: e,
        httpStatus: a,
      }
    }
  },
  soaw(e, t, a) {
    var r = a("QosV"),
      n = a("zd8w")
    a.d(
      t,
      {},
      {
        a: function () {
          let e,
            t,
            a,
            i = (0, r.c)(3),
            s = (0, n.useRef)(!1)
          return (
            i[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => (
                  (s.current = !0),
                  () => {
                    s.current = !1
                  }
                )),
                (t = []),
                (i[0] = e),
                (i[1] = t))
              : ((e = i[0]), (t = i[1])),
            (0, n.useEffect)(e, t),
            i[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = () => s.current), (i[2] = a)) : (a = i[2]),
            a
          )
        },
      },
    )
  },
  wK45(e, t, a) {
    let r = (0, a("ESTr").a)({
      name: "checkmark-lg-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.494995, y: 4.234375, width: 16.984985, height: 15.447021 },
        visualBounds: { x: 3.494995, y: 4.234375, width: 16.984985, height: 15.447021 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.494995, y: 4.234375, width: 16.984985, height: 15.447021 },
        center: { x: 11.987488, y: 11.957886 },
        insets: { top: 4.234375, right: 3.52002, bottom: 4.318604, left: 3.494995 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 11.987488, y: 11.957886 },
          foreground: { x: 11.987488, y: 11.957886 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M19.1131 4.55849C19.3483 4.21765 19.8151 4.13186 20.156 4.36709C20.4966 4.60235 20.5824 5.06924 20.3474 5.41006L10.7703 19.287L10.7713 19.288C10.454 19.7542 9.79157 19.8165 9.39236 19.4188L3.71658 13.788C3.42263 13.4962 3.42096 13.0214 3.71267 12.7274C4.00443 12.4335 4.47921 12.4318 4.77322 12.7235L9.94021 17.8505L19.1131 4.55849Z" fill="currentColor"/>',
    })
    a.d(t, {}, { P: r })
  },
  D3Fp(e, t, a) {
    let r = (0, a("ESTr").a)({
      name: "circle-questionmark-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.402588, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.402588, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.402588, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 7.927979, y: 8 },
        insets: { top: 1.474609, right: 1.546631, bottom: 1.47461, left: 1.402588 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.927979, y: 8 }, foreground: { x: 7.927979, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.60526 10.6093C8.60526 11.023 8.2699 11.3583 7.85622 11.3583C7.44253 11.3583 7.10718 11.023 7.10718 10.6093C7.10718 10.1956 7.44253 9.86023 7.85622 9.86023C8.2699 9.86023 8.60526 10.1956 8.60526 10.6093Z" fill="currentColor"/> <path d="M13.4026 8C13.4026 4.97624 10.9517 2.52539 7.92798 2.52539C4.90422 2.52539 2.45337 4.97624 2.45337 8C2.45337 11.0238 4.90422 13.4746 7.92798 13.4746C10.9517 13.4746 13.4026 11.0238 13.4026 8ZM14.4534 8C14.4534 11.6037 11.5316 14.5254 7.92798 14.5254C4.32432 14.5254 1.40259 11.6037 1.40259 8C1.40259 4.39634 4.32432 1.47461 7.92798 1.47461C11.5316 1.47461 14.4534 4.39634 14.4534 8Z" fill="currentColor"/> <path d="M7.26569 8.70557V8.32959C7.26574 8.11852 7.36301 7.91877 7.52838 7.7876L7.65436 7.68701L7.66022 7.68311C8.00462 7.41695 8.27691 7.22919 8.48932 7.0044C8.68241 6.79997 8.76758 6.62146 8.76764 6.4126C8.76764 6.1358 8.65879 5.96107 8.50885 5.84326C8.344 5.71382 8.10407 5.63721 7.8526 5.63721H7.84284C7.48073 5.63049 7.10749 5.83824 6.87311 6.23779C6.72645 6.48784 6.40444 6.57186 6.15436 6.42529C5.90432 6.27863 5.82031 5.95662 5.96686 5.70654C6.36411 5.02927 7.0636 4.57753 7.8526 4.58838H7.85553C7.858 4.58842 7.86088 4.58736 7.86335 4.5874L7.86237 4.58838C8.30358 4.5902 8.7799 4.71982 9.15827 5.01709C9.55421 5.32818 9.81745 5.80437 9.81745 6.4126C9.81738 6.97756 9.55928 7.40083 9.25299 7.7251C8.97106 8.02359 8.59575 8.28751 8.31647 8.50244V8.70557C8.31642 8.99546 8.08099 9.22997 7.79108 9.22998C7.50116 9.22998 7.26574 8.99547 7.26569 8.70557Z" fill="currentColor"/>',
    })
    a.d(t, {}, { l: r })
  },
}
//# sourceMappingURL=351719.df098f4545.js.map
