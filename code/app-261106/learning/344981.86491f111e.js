export const __rspack_esm_ids = [344981]
export const __webpack_modules__ = {
  NIGh(e, s, t) {
    var a = t("ABep"),
      i = t("on57"),
      r = t("zd8w"),
      l = t("oyxz"),
      n = t("Wf1j"),
      o = t("KwmQ"),
      c = t("pXKw"),
      d = t("pNxJ"),
      m = t("LWFr"),
      g = t("L08Q")
    let y = "var(--learning-block-accent)",
      f = "var(--learning-block-color-primary)",
      x = "var(--learning-block-color-secondary)",
      h = (e, s) =>
        "confidentiality" === s
          ? e.formatMessage({
              id: "learningBlock.asymmetricKeyRoles.goal.confidentiality",
              defaultMessage: "Confidentiality",
            })
          : e.formatMessage({
              id: "learningBlock.asymmetricKeyRoles.goal.authenticity",
              defaultMessage: "Authenticity",
            }),
      p = (e, s) =>
        "confidentiality" === s
          ? e.formatMessage({
              id: "learningBlock.asymmetricKeyRoles.goalControl.confidential",
              defaultMessage: "Confidential",
            })
          : e.formatMessage({
              id: "learningBlock.asymmetricKeyRoles.goalControl.authentic",
              defaultMessage: "Authentic",
            }),
      u = (e, s, t) => {
        let a = "confidentiality" === s
        switch (t) {
          case 0:
            return e.formatMessage({
              id: "learningBlock.asymmetricKeyRoles.step.original",
              defaultMessage: "Original message",
            })
          case 1:
            return a
              ? e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.encrypt",
                  defaultMessage: "Encrypt with recipient's public key",
                })
              : e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.sign",
                  defaultMessage: "Sign with sender's private key",
                })
          case 2:
            return a
              ? e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.ciphertext",
                  defaultMessage: "Ciphertext crosses the channel",
                })
              : e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.signedMessage",
                  defaultMessage: "Message and signature cross the channel",
                })
          case 3:
            return a
              ? e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.decrypt",
                  defaultMessage: "Decrypt with recipient's private key",
                })
              : e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.verify",
                  defaultMessage: "Verify with sender's public key",
                })
          default:
            return a
              ? e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.secretResult",
                  defaultMessage: "Only the recipient reads the message",
                })
              : e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.step.verifiedResult",
                  defaultMessage: "Origin and integrity are verified",
                })
        }
      },
      k = (e, s) => {
        switch (s) {
          case "encrypt":
            return e.formatMessage({ id: "learningBlock.asymmetricKeyRoles.encrypt", defaultMessage: "Encrypt" })
          case "sign":
            return e.formatMessage({ id: "learningBlock.asymmetricKeyRoles.sign", defaultMessage: "Sign" })
          case "decrypt":
            return e.formatMessage({ id: "learningBlock.asymmetricKeyRoles.decrypt", defaultMessage: "Decrypt" })
          case "verify":
            return e.formatMessage({ id: "learningBlock.asymmetricKeyRoles.verify", defaultMessage: "Verify" })
        }
      },
      M = (e, s, t) =>
        "recipient" === s && "public" === t
          ? e.formatMessage({
              id: "learningBlock.asymmetricKeyRoles.key.recipientPublic",
              defaultMessage: "Recipient public · shareable",
            })
          : "recipient" === s
            ? e.formatMessage({
                id: "learningBlock.asymmetricKeyRoles.key.recipientPrivate",
                defaultMessage: "Recipient private · secret",
              })
            : "private" === t
              ? e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.key.senderPrivate",
                  defaultMessage: "Sender private · secret",
                })
              : e.formatMessage({
                  id: "learningBlock.asymmetricKeyRoles.key.senderPublic",
                  defaultMessage: "Sender public · shareable",
                }),
      v = ({ color: e }) =>
        (0, a.jsxs)("svg", {
          "aria-hidden": !0,
          className: "h-5 w-5 shrink-0",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("circle", { cx: 8, cy: 10, r: 4, stroke: e, strokeWidth: 2 }),
            (0, a.jsx)("path", {
              d: "M12 10h9m-3 0v3m-3-3v2",
              stroke: e,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }),
          ],
        }),
      j = ({ color: e }) =>
        (0, a.jsxs)("svg", {
          "aria-hidden": !0,
          className: "h-5 w-5 shrink-0",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, a.jsx)("rect", { x: 5, y: 10, width: 14, height: 11, rx: 2, stroke: e, strokeWidth: 2 }),
            (0, a.jsx)("path", { d: "M8 10V7a4 4 0 0 1 8 0v3", stroke: e, strokeLinecap: "round", strokeWidth: 2 }),
          ],
        }),
      b = ({ label: e, keyLabel: s, active: t, complete: r }) => {
        let l = t ? y : r ? f : x
        return (0, a.jsxs)("div", {
          className: "flex min-h-12 min-w-0 items-center justify-center gap-2 text-center",
          children: [
            (0, a.jsx)(v, { color: l }),
            (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-col items-center",
              children: [
                (0, a.jsx)("span", {
                  className: (0, i.A)(
                    "text-xs font-semibold",
                    t ? "text-token-text-primary" : "text-token-text-secondary",
                  ),
                  children: e,
                }),
                (0, a.jsx)("span", { className: "text-token-text-secondary text-xs", children: s }),
              ],
            }),
          ],
        })
      },
      R = ({ active: e, complete: s }) =>
        (0, a.jsx)("svg", {
          "aria-hidden": !0,
          className: "h-6 w-full",
          preserveAspectRatio: "none",
          viewBox: "0 0 100 24",
          children: (0, a.jsx)(m.M, {
            anchor: { x: 3, y: 12 },
            toward: { x: 98, y: 12 },
            size: 1,
            strokeWidth: e ? 3 : 2.2,
            color: e ? y : s ? f : "var(--text-secondary)",
          }),
        }),
      K = ({ variant: e, title: s, active: t, complete: r, revealed: n }) =>
        (0, a.jsxs)("div", {
          className: "flex min-w-0 flex-col items-center gap-1 text-center",
          children: [
            (0, a.jsx)("div", {
              className: (0, i.A)(
                "flex min-h-[72px] w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl border px-1.5",
                !n && "border-dashed",
              ),
              style: {
                borderColor: t ? y : n || r ? "var(--border-heavy)" : "var(--border-light)",
                backgroundColor: t ? "var(--learning-block-accent-surface)" : "var(--bg-primary)",
              },
              children: n
                ? "cipher" === e
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(j, { color: f }),
                        (0, a.jsx)("span", {
                          className: "text-token-text-primary text-xs font-semibold",
                          children: "7F A9 3C",
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-token-text-primary text-xs font-semibold",
                          children: (0, a.jsx)(l.A, {
                            id: "learningBlock.asymmetricKeyRoles.message",
                            defaultMessage: "Meet at 4",
                          }),
                        }),
                        "signed" === e
                          ? (0, a.jsx)("span", {
                              "aria-hidden": !0,
                              className:
                                "flex h-5 w-5 items-center justify-center rounded-full border text-xs font-semibold",
                              style: { borderColor: x, color: x },
                              children: "✓",
                            })
                          : null,
                        "verified" === e
                          ? (0, a.jsx)("span", {
                              className: "text-xs font-semibold",
                              style: { color: f },
                              children: (0, a.jsx)(l.A, {
                                id: "learningBlock.asymmetricKeyRoles.signatureValid",
                                defaultMessage: "✓ Valid",
                              }),
                            })
                          : null,
                      ],
                    })
                : (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: "h-1.5 w-7 rounded-full",
                    style: { backgroundColor: "var(--border-heavy)" },
                  }),
            }),
            (0, a.jsx)("span", {
              className: (0, i.A)(
                "min-h-4 text-xs",
                t ? "text-token-text-primary font-semibold" : n ? "text-token-text-secondary" : "invisible",
              ),
              children: s,
            }),
          ],
        }),
      B = ({ ariaLabel: e, goal: s, stepIndex: t }) => {
        let i = "confidentiality" === s,
          r = [28, 36, 48, 60, 68][t] ?? 28,
          l = t >= 2 && t < 4,
          n = i ? 76 : 20
        return (0, a.jsx)("div", {
          "aria-label": e,
          className: "h-full w-full p-1",
          role: "img",
          children: (0, a.jsxs)("svg", {
            "aria-hidden": !0,
            className: "h-full w-full",
            viewBox: "0 0 96 72",
            children: [
              (0, a.jsx)("circle", { cx: 14, cy: 42, r: 8, fill: "var(--bg-primary)", stroke: f, strokeWidth: 3 }),
              (0, a.jsx)("circle", { cx: 82, cy: 42, r: 8, fill: "var(--bg-primary)", stroke: x, strokeWidth: 3 }),
              (0, a.jsx)(m.M, {
                anchor: { x: 24, y: 42 },
                toward: { x: 71, y: 42 },
                size: 1.2,
                strokeWidth: 2.5,
                color: y,
              }),
              (0, a.jsx)("circle", { cx: n - 5, cy: 16, r: 4, fill: "none", stroke: f, strokeWidth: 2.5 }),
              (0, a.jsx)("path", {
                d: `M${n - 1} 16h9m-3 0v3m-3-3v2`,
                fill: "none",
                stroke: f,
                strokeLinecap: "round",
                strokeWidth: 2.5,
              }),
              (0, a.jsx)("rect", {
                x: r - 7,
                y: 33,
                width: 14,
                height: 18,
                rx: 3,
                fill: "var(--bg-primary)",
                stroke: l && i ? f : y,
                strokeWidth: 2.5,
              }),
              l && i
                ? (0, a.jsx)("path", {
                    d: `M${r - 3} 33v-2a3 3 0 0 1 6 0v2`,
                    fill: "none",
                    stroke: f,
                    strokeLinecap: "round",
                    strokeWidth: 2,
                  })
                : null,
              l && !i ? (0, a.jsx)("circle", { cx: r + 4, cy: 48, r: 4, fill: x }) : null,
              4 !== t || i
                ? null
                : (0, a.jsx)("path", {
                    d: `m${r - 3} 43 2 2 5-6`,
                    fill: "none",
                    stroke: f,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                  }),
            ],
          }),
        })
      }
    t.d(
      s,
      {},
      {
        AsymmetricKeyRolesCaption: ({ values: e }) => {
          let s = (0, n.A)(),
            { initial_goal: t, stepIndex: i } = (0, g.mv)(e),
            r = "confidentiality" === t,
            l = ((e, s, t) => {
              let a = "confidentiality" === s
              switch (t) {
                case 0:
                  return e.formatMessage({
                    id: "learningBlock.asymmetricKeyRoles.descriptor.original",
                    defaultMessage: "Original message",
                  })
                case 1:
                  return a
                    ? e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.encrypt",
                        defaultMessage: "Encrypt",
                      })
                    : e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.sign",
                        defaultMessage: "Sign",
                      })
                case 2:
                  return a
                    ? e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.ciphertext",
                        defaultMessage: "Ciphertext",
                      })
                    : e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.signed",
                        defaultMessage: "Signed message",
                      })
                case 3:
                  return a
                    ? e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.decrypt",
                        defaultMessage: "Decrypt",
                      })
                    : e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.verify",
                        defaultMessage: "Verify",
                      })
                default:
                  return a
                    ? e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.confidential",
                        defaultMessage: "Confidential",
                      })
                    : e.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.descriptor.verified",
                        defaultMessage: "Verified",
                      })
              }
            })(s, t, i),
            c = (() => {
              switch (i) {
                case 0:
                  return s.formatMessage({
                    id: "learningBlock.asymmetricKeyRoles.caption.original",
                    defaultMessage: "The sender starts with a readable message.",
                  })
                case 1:
                  return r
                    ? s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.encrypt",
                        defaultMessage: "The recipient's shareable public key makes ciphertext.",
                      })
                    : s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.sign",
                        defaultMessage: "The sender's private key signs; the message stays readable.",
                      })
                case 2:
                  return r
                    ? s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.ciphertext",
                        defaultMessage: "Unreadable ciphertext crosses the channel.",
                      })
                    : s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.signedMessage",
                        defaultMessage: "The readable message and signature cross together.",
                      })
                case 3:
                  return r
                    ? s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.decrypt",
                        defaultMessage: "The recipient's private key recovers the original message.",
                      })
                    : s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.verify",
                        defaultMessage: "The sender's genuine public key checks message and signature.",
                      })
                default:
                  return r
                    ? s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.secretResult",
                        defaultMessage: "Only the recipient's matching private key recovers plaintext.",
                      })
                    : s.formatMessage({
                        id: "learningBlock.asymmetricKeyRoles.caption.verifiedResult",
                        defaultMessage: "A valid signature confirms origin and integrity, not secrecy.",
                      })
              }
            })()
          return (0, a.jsxs)(o.Vq, {
            reserveLines: 3,
            children: [(0, a.jsx)(o.OZ, { variant: "title", children: l }), (0, a.jsx)(o.OZ, { children: c })],
          })
        },
        AsymmetricKeyRolesControls: ({ values: e, setValues: s }) => {
          let t = (0, n.A)(),
            i = (0, g.mv)(e),
            l = (0, c.xT)([
              { value: 0, label: p(t, "confidentiality"), ariaLabel: h(t, "confidentiality") },
              { value: 1, label: p(t, "authenticity"), ariaLabel: h(t, "authenticity") },
            ]),
            m = u(t, i.initial_goal, i.stepIndex)
          return (0, a.jsx)(o.Ur, {
            children: (0, a.jsx)(d.J, {
              inputs: [
                {
                  ariaLabel: t.formatMessage({
                    id: "learningBlock.asymmetricKeyRoles.goalAria",
                    defaultMessage: "Choose the security goal",
                  }),
                  min: 0,
                  max: 1,
                  step: 1,
                  value: +("confidentiality" !== i.initial_goal),
                  options: l,
                  onChange: (e) => {
                    ;(0, r.startTransition)(() => {
                      s(
                        { ...i, initial_goal: 1 === e ? "authenticity" : "confidentiality" },
                        "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE",
                      )
                    })
                  },
                },
                {
                  ariaLabel: t.formatMessage({
                    id: "learningBlock.asymmetricKeyRoles.stepAria",
                    defaultMessage: "Exchange step",
                  }),
                  ariaValueText: t.formatMessage(
                    {
                      id: "learningBlock.asymmetricKeyRoles.stepValue",
                      defaultMessage: "Step {step} of {total}: {label}",
                    },
                    {
                      step: t.formatNumber(i.stepIndex + 1, { useGrouping: !1 }),
                      total: t.formatNumber(g.Xm.max + 1, { useGrouping: !1 }),
                      label: m,
                    },
                  ),
                  min: g.Xm.min,
                  max: g.Xm.max,
                  step: g.Xm.step,
                  value: i.stepIndex,
                  sliderStyle: "stepped",
                  showValueInput: !1,
                  onChange: (e) => {
                    ;(0, r.startTransition)(() => {
                      s((0, g.mv)({ ...i, stepIndex: e }), "CHATGPT_MATH_BLOCK_EDIT_TYPE_SLIDER_CHANGE")
                    })
                  },
                },
              ],
            }),
          })
        },
        AsymmetricKeyRolesVisualization: ({ values: e, presentationMode: s }) => {
          let t = (0, n.A)(),
            { initial_goal: i, stepIndex: r } = (0, g.mv)(e),
            o = (0, g.UH)(i),
            c = t.formatMessage(
              {
                id: "learningBlock.asymmetricKeyRoles.visualAria",
                defaultMessage: "{goal} exchange from sender to recipient. {step}.",
              },
              { goal: h(t, i), step: u(t, i, r) },
            )
          if ("thumbnail" === s) return (0, a.jsx)(B, { ariaLabel: c, goal: i, stepIndex: r })
          let d = k(t, o.senderOperation),
            m = k(t, o.recipientOperation)
          return (0, a.jsxs)("div", {
            "aria-label": c,
            className: "text-token-text-primary flex w-full flex-col gap-2 px-6 pb-6",
            role: "img",
            children: [
              (0, a.jsxs)("div", {
                className: "grid grid-cols-2 items-center gap-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                        style: { borderColor: f, color: f },
                        children: "S",
                      }),
                      (0, a.jsx)("span", {
                        className: "min-w-0 text-xs font-semibold",
                        children: (0, a.jsx)(l.A, {
                          id: "learningBlock.asymmetricKeyRoles.sender",
                          defaultMessage: "Sender",
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center justify-end gap-2 text-end",
                    children: [
                      (0, a.jsx)("span", {
                        className: "min-w-0 text-xs font-semibold",
                        children: (0, a.jsx)(l.A, {
                          id: "learningBlock.asymmetricKeyRoles.recipient",
                          defaultMessage: "Recipient",
                        }),
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                        style: { borderColor: x, color: x },
                        children: "R",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("span", {
                className: "text-token-text-secondary text-center text-xs",
                children: (0, a.jsx)(l.A, {
                  id: "learningBlock.asymmetricKeyRoles.channel",
                  defaultMessage: "Public channel →",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "grid grid-cols-2 items-start gap-3",
                children: [
                  (0, a.jsx)(b, {
                    label: d,
                    keyLabel: M(t, o.senderKeyOwner, o.senderKeyType),
                    active: 1 === r,
                    complete: r > 1,
                  }),
                  (0, a.jsx)(b, {
                    label: m,
                    keyLabel: M(t, o.recipientKeyOwner, o.recipientKeyType),
                    active: 3 === r,
                    complete: r > 3,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "grid min-w-0 items-center gap-1.5 sm:gap-3",
                style: {
                  gridTemplateColumns:
                    "minmax(0, 1fr) minmax(22px, 0.42fr) minmax(0, 1.2fr) minmax(22px, 0.42fr) minmax(0, 1fr)",
                },
                children: [
                  (0, a.jsx)(K, {
                    variant: "plain",
                    title: t.formatMessage({
                      id: "learningBlock.asymmetricKeyRoles.originalTile",
                      defaultMessage: "Original",
                    }),
                    active: 0 === r,
                    complete: r > 0,
                    revealed: !0,
                  }),
                  (0, a.jsx)(R, { active: 1 === r, complete: r > 1 }),
                  (0, a.jsx)(K, {
                    variant: "ciphertext" === o.artifact ? "cipher" : "signed",
                    title:
                      "ciphertext" === o.artifact
                        ? t.formatMessage({
                            id: "learningBlock.asymmetricKeyRoles.cipherTile",
                            defaultMessage: "Ciphertext",
                          })
                        : t.formatMessage({
                            id: "learningBlock.asymmetricKeyRoles.signedTile",
                            defaultMessage: "Signed",
                          }),
                    active: 2 === r,
                    complete: r > 2,
                    revealed: r >= 2,
                  }),
                  (0, a.jsx)(R, { active: 3 === r, complete: r > 3 }),
                  (0, a.jsx)(K, {
                    variant: "confidentiality" === o.outcome ? "plain" : "verified",
                    title:
                      "confidentiality" === o.outcome
                        ? t.formatMessage({
                            id: "learningBlock.asymmetricKeyRoles.secretTile",
                            defaultMessage: "Plaintext",
                          })
                        : t.formatMessage({
                            id: "learningBlock.asymmetricKeyRoles.verifiedTile",
                            defaultMessage: "Verified",
                          }),
                    active: 4 === r,
                    complete: !1,
                    revealed: 4 === r,
                  }),
                ],
              }),
            ],
          })
        },
      },
    )
  },
  LWFr(e, s, t) {
    var a = t("ABep"),
      i = t("l7Go"),
      r = t("pTkA")
    let l = (e, s, t) => Math.min(Math.max(e, s), t)
    t.d(
      s,
      {},
      {
        M: ({
          anchor: e,
          toward: s,
          size: t,
          anchorPointStyle: n,
          anchorPointRadius: o,
          label: c,
          labelFormat: d = "text",
          labelWidth: m = 64,
          labelHeight: g = 16,
          labelOffsetPx: y = 14,
          labelPlacement: f,
          labelOrientation: x = "horizontal",
          maxLength: h,
          minLength: p,
          strokeWidth: u = 2,
          color: k = "var(--icon-accent)",
          labelColor: M = "var(--text-primary)",
          labelClassName: v,
          labelFontSize: j = 10,
          className: b,
        }) => {
          let R = (({
            anchor: e,
            anchorPointRadius: s,
            anchorPointStyle: t,
            label: a,
            labelFontSize: i = 10,
            labelOffsetPx: n = 14,
            labelOrientation: o = "horizontal",
            labelPlacement: c,
            maxLength: d,
            minLength: m,
            size: g,
            strokeWidth: y = 2,
            toward: f,
          }) => {
            let x = f.x - e.x,
              h = f.y - e.y,
              p = Math.hypot(x, h),
              u = l(g, 0, 1)
            if (p <= Number.EPSILON || u <= Number.EPSILON) return null
            let k = x / p,
              M = h / p,
              v = -M,
              j = k > 0 || (Math.abs(k) <= Number.EPSILON && v > 0),
              b = "hole" === t ? (s ?? Math.max(4.5, 1.7 * y)) : (s ?? 4),
              R = l(0.16 * p, 12, 24),
              K = Math.max(0, d ?? p - R),
              B = Math.min(K, m ?? l(0.18 * p, 14, 24)),
              w = B + (K - B) * u,
              N = l(0.28 * w, 6, 14),
              A = Math.max(0, w - N)
            if (w <= Number.EPSILON) return null
            let L = { x: e.x + k * w, y: e.y + M * w },
              T = { x: e.x + k * A, y: e.y + M * A },
              C = { x: L.x - k * N, y: L.y - M * N },
              _ = l(0.52 * N, 4, 10),
              O = { x: C.x + v * _, y: C.y + k * _ },
              W = { x: C.x - v * _, y: C.y - k * _ },
              S = a
                ? (0, r.Es)({
                    from: e,
                    label: a,
                    labelFontSize: i,
                    to: L,
                    labelPlacement: c ?? "auto",
                    labelOffsetPx: void 0 === c && j ? -n : n,
                    labelOrientation: o,
                  })
                : null
            return { anchorPointRadius: b, head: { left: O, right: W, tip: L }, label: S, shaft: { from: e, to: T } }
          })({
            anchor: e,
            anchorPointRadius: o,
            anchorPointStyle: n,
            label: c,
            labelFontSize: j,
            labelOffsetPx: y,
            labelOrientation: x,
            labelPlacement: f,
            maxLength: h,
            minLength: p,
            size: t,
            strokeWidth: u,
            toward: s,
          })
          return R
            ? (0, a.jsxs)("g", {
                className: b,
                children: [
                  (0, a.jsx)("line", {
                    x1: R.shaft.from.x,
                    y1: R.shaft.from.y,
                    x2: R.shaft.to.x,
                    y2: R.shaft.to.y,
                    stroke: k,
                    strokeWidth: u,
                    strokeLinecap: "butt",
                    strokeLinejoin: "round",
                  }),
                  (0, a.jsx)("polygon", {
                    points: `${R.head.tip.x},${R.head.tip.y} ${R.head.left.x},${R.head.left.y} ${R.head.right.x},${R.head.right.y}`,
                    fill: k,
                    stroke: k,
                    strokeLinejoin: "round",
                  }),
                  "hole" === n
                    ? (0, a.jsx)("circle", {
                        cx: R.shaft.from.x,
                        cy: R.shaft.from.y,
                        r: R.anchorPointRadius,
                        fill: "white",
                        stroke: k,
                        strokeWidth: Math.max(1.25, 0.65 * u),
                      })
                    : null,
                  (() => {
                    if (!c || !R.label) return null
                    let e = `translate(${R.label.x} ${R.label.y}) rotate(${R.label.rotation})`
                    return "katex" === d
                      ? (0, a.jsx)("g", {
                          transform: e,
                          children: (0, a.jsx)("foreignObject", {
                            x: -m / 2,
                            y: -g / 2,
                            width: m,
                            height: g,
                            style: { overflow: "visible" },
                            children: (0, a.jsx)(i.r, {
                              className: `flex h-full w-full items-center justify-center font-normal${v ? ` ${v}` : ""}`,
                              latex: c,
                              style: { color: M, fontSize: j },
                            }),
                          }),
                        })
                      : (0, a.jsx)("g", {
                          transform: e,
                          children: (0, a.jsx)("text", {
                            x: 0,
                            y: 0,
                            textAnchor: "middle",
                            dominantBaseline: "middle",
                            fill: M,
                            fontSize: j ?? 12,
                            fontWeight: 600,
                            paintOrder: "stroke",
                            stroke: r.in,
                            strokeLinejoin: "round",
                            strokeWidth: 3,
                            className: v,
                            children: c,
                          }),
                        })
                  })(),
                ],
              })
            : null
        },
      },
    )
  },
}
//# sourceMappingURL=344981.86491f111e.js.map
