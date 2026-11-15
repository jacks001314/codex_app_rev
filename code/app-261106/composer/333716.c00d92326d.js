export const __rspack_esm_ids = [333716]
export const __webpack_modules__ = {
  ULZ9(e, t, n) {
    ;(n.d(t, { z: () => r }), n("iYCA"), n("yCBR"))
    var i = n("ABep"),
      l = n("QosV"),
      a = n("ylLY")
    function r(e) {
      let t,
        n,
        r = (0, l.c)(8),
        { children: o, linkComponent: s, allowedWidgetTypes: c, radixPortalContainer: d, hydrationSafe: u } = e,
        m = void 0 === s ? "a" : s,
        p = void 0 === c ? "GA" : c,
        f = void 0 !== u && u
      return (
        r[0] !== p || r[1] !== f || r[2] !== m || r[3] !== d
          ? ((t = { linkComponent: m, allowedWidgetTypes: p, radixPortalContainer: d, hydrationSafe: f }),
            (r[0] = p),
            (r[1] = f),
            (r[2] = m),
            (r[3] = d),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== o || r[6] !== t
          ? ((n = (0, i.jsx)(a.t.Provider, { value: t, children: o })), (r[5] = o), (r[6] = t), (r[7] = n))
          : (n = r[7]),
        n
      )
    }
  },
  QRIH(e, t, n) {
    n.d(t, { C: () => x, m: () => g })
    var i = n("ABep"),
      l = n("QosV"),
      a = n("on57"),
      r = n("zd8w"),
      o = n("Wf1j"),
      s = n("oyxz"),
      c = n("sAQ3"),
      d = n("Sm6l"),
      u = n("JNtf"),
      m = n("mUDD"),
      p = n("bVeK"),
      f = (e) =>
        (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 32,
          height: 32,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, i.jsx)("path", {
              fill: "#4D6FE6",
              d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z",
            }),
            (0, i.jsx)("path", { fill: "#86A0F2", d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z" }),
          ],
        }),
      h = (e) =>
        (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          ...e,
          children: [
            (0, i.jsx)("path", {
              fill: "#4D6FE6",
              d: "M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z",
            }),
            (0, i.jsx)("path", { fill: "#86A0F2", d: "M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z" }),
          ],
        })
    function x(e) {
      let t,
        n,
        x,
        v,
        b,
        y,
        w,
        j,
        A,
        C,
        k,
        S,
        N,
        F,
        M,
        E,
        I,
        P,
        L,
        O,
        T,
        z,
        D = (0, l.c)(67),
        {
          presentation: _,
          message: q,
          disabled: R,
          isSubmitting: U,
          completed: V,
          standalone: B,
          onOpen: H,
          onOpenInThread: Q,
          onConfirm: K,
          onCancel: G,
        } = e,
        Z = void 0 !== V && V,
        W = void 0 !== B && B,
        J = (0, o.A)(),
        [Y, $] = (0, r.useState)(W)
      D[0] !== W
        ? ((t = (0, a.A)("flex flex-wrap items-center gap-2", { "justify-center": W })), (D[0] = W), (D[1] = t))
        : (t = D[1])
      let X = "shield" === _.icon ? "actionChipWithIcon" : "actionChip",
        ee = R && !Z
      ;(D[2] !== Z || D[3] !== H || D[4] !== Q
        ? ((n = () => {
            null == Q || Z ? (H?.(), $(!0)) : Q()
          }),
          (D[2] = Z),
          (D[3] = H),
          (D[4] = Q),
          (D[5] = n))
        : (n = D[5]),
        D[6] !== _.icon
          ? ((x =
              "shield" === _.icon &&
              (0, i.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-full bg-white p-0.5",
                children: (0, i.jsx)(h, { "aria-hidden": "true" }),
              })),
            (D[6] = _.icon),
            (D[7] = x))
          : (x = D[7]),
        D[8] !== _.triggerLabel
          ? ((v = (0, i.jsx)("span", { className: "min-w-0 break-words whitespace-normal", children: _.triggerLabel })),
            (D[8] = _.triggerLabel),
            (D[9] = v))
          : (v = D[9]),
        D[10] !== Z || D[11] !== J
          ? ((b =
              Z &&
              (0, i.jsx)(p.ALZ, {
                "aria-label": J.formatMessage({
                  id: "mcpConfirmation.completed",
                  defaultMessage: "Completed",
                  description:
                    "Accessible label for a custom-rule request that was acted upon, without asserting that the rule change succeeded",
                }),
              })),
            (D[10] = Z),
            (D[11] = J),
            (D[12] = b))
          : (b = D[12]),
        D[13] !== U || D[14] !== X || D[15] !== ee || D[16] !== n || D[17] !== x || D[18] !== v || D[19] !== b
          ? ((y = (0, i.jsxs)(c.g, {
              color: "conversationAccentSubtle",
              size: X,
              radius: "messageBubble",
              type: "button",
              className: "max-w-full",
              disabled: ee,
              loading: U,
              "aria-haspopup": "dialog",
              onClick: n,
              children: [x, v, b],
            })),
            (D[13] = U),
            (D[14] = X),
            (D[15] = ee),
            (D[16] = n),
            (D[17] = x),
            (D[18] = v),
            (D[19] = b),
            (D[20] = y))
          : (y = D[20]),
        D[21] !== y || D[22] !== t
          ? ((w = (0, i.jsx)("div", { "data-mcp-confirmation-chip": !0, className: t, children: y })),
            (D[21] = y),
            (D[22] = t),
            (D[23] = w))
          : (w = D[23]),
        D[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = { "aria-describedby": void 0 }), (D[24] = j))
          : (j = D[24]),
        D[25] !== Z || D[26] !== R || D[27] !== K
          ? ((A = (e) => {
              ;(e.preventDefault(), R || Z || (K(), $(!1)))
            }),
            (D[25] = Z),
            (D[26] = R),
            (D[27] = K),
            (D[28] = A))
          : (A = D[28]),
        D[29] !== _.icon
          ? ((C =
              "shield" === _.icon &&
              (0, i.jsx)("span", {
                className: "flex shrink-0 items-center justify-center rounded-xl border border-default bg-white p-3",
                children: (0, i.jsx)(f, { "aria-hidden": "true" }),
              })),
            (D[29] = _.icon),
            (D[30] = C))
          : (C = D[30]),
        D[31] !== _.title
          ? ((k = (0, i.jsx)(u.L3, { variant: "confirmation", className: "text-center", children: _.title })),
            (D[31] = _.title),
            (D[32] = k))
          : (k = D[32]),
        D[33] !== C || D[34] !== k
          ? ((S = (0, i.jsxs)("div", { className: "flex flex-col items-center gap-3", children: [C, k] })),
            (D[33] = C),
            (D[34] = k),
            (D[35] = S))
          : (S = D[35]),
        D[36] !== q || D[37] !== _
          ? ((N = (0, i.jsx)(g, { presentation: _, message: q })), (D[36] = q), (D[37] = _), (D[38] = N))
          : (N = D[38]))
      let et = _.destructive ? "dangerSolid" : "primary",
        en = R || Z
      return (
        D[39] !== _.confirmLabel
          ? ((F = (0, i.jsx)("span", { className: "min-w-0 break-words whitespace-normal", children: _.confirmLabel })),
            (D[39] = _.confirmLabel),
            (D[40] = F))
          : (F = D[40]),
        D[41] !== U || D[42] !== et || D[43] !== en || D[44] !== F
          ? ((M = (0, i.jsx)(m.Es, {
              children: (0, i.jsx)(d.$, {
                color: et,
                size: "modalPrimary",
                radius: "full",
                type: "submit",
                disabled: en,
                loading: U,
                children: F,
              }),
            })),
            (D[41] = U),
            (D[42] = et),
            (D[43] = en),
            (D[44] = F),
            (D[45] = M))
          : (M = D[45]),
        D[46] !== Z || D[47] !== R || D[48] !== G
          ? ((E = () => {
              ;(R || Z || G?.(), $(!1))
            }),
            (D[46] = Z),
            (D[47] = R),
            (D[48] = G),
            (D[49] = E))
          : (E = D[49]),
        D[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(s.A, {
              id: "mcpConfirmation.cancel",
              defaultMessage: "Cancel",
              description: "Cancel a proposed change or close its completed preview",
            })),
            (D[50] = I))
          : (I = D[50]),
        D[51] !== E
          ? ((P = (0, i.jsx)(m.Es, {
              children: (0, i.jsx)(d.$, {
                color: "secondary",
                size: "modalPrimary",
                radius: "full",
                type: "button",
                onClick: E,
                children: I,
              }),
            })),
            (D[51] = E),
            (D[52] = P))
          : (P = D[52]),
        D[53] !== M || D[54] !== P
          ? ((L = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [M, P] })),
            (D[53] = M),
            (D[54] = P),
            (D[55] = L))
          : (L = D[55]),
        D[56] !== A || D[57] !== S || D[58] !== N || D[59] !== L
          ? ((O = (0, i.jsxs)(m.R4, {
              as: "form",
              size: "viewport",
              variant: "confirmation",
              onSubmit: A,
              children: [S, N, L],
            })),
            (D[56] = A),
            (D[57] = S),
            (D[58] = N),
            (D[59] = L),
            (D[60] = O))
          : (O = D[60]),
        D[61] !== Y || D[62] !== O
          ? ((T = (0, i.jsx)(u.lG, {
              open: Y,
              onOpenChange: $,
              widthHint: 480,
              variant: "confirmation",
              closeButtonSize: "large",
              contentProps: j,
              children: O,
            })),
            (D[61] = Y),
            (D[62] = O),
            (D[63] = T))
          : (T = D[63]),
        D[64] !== w || D[65] !== T
          ? ((z = (0, i.jsxs)(i.Fragment, { children: [w, T] })), (D[64] = w), (D[65] = T), (D[66] = z))
          : (z = D[66]),
        z
      )
    }
    function g(e) {
      let t,
        n = (0, l.c)(10),
        { message: a, presentation: r } = e
      if (r?.sections != null) {
        let e, t
        return (
          n[0] !== r.sections ? ((e = r.sections.map(b)), (n[0] = r.sections), (n[1] = e)) : (e = n[1]),
          n[2] !== e
            ? ((t = (0, i.jsx)("div", { className: "flex flex-col gap-5 select-text", children: e })),
              (n[2] = e),
              (n[3] = t))
            : (t = n[3]),
          t
        )
      }
      if (r?.fields != null) {
        let e, t
        return (
          n[4] !== r.fields ? ((e = r.fields.map(v)), (n[4] = r.fields), (n[5] = e)) : (e = n[5]),
          n[6] !== e
            ? ((t = (0, i.jsx)("dl", {
                className:
                  "flex flex-col gap-4 rounded-2xl border border-default p-5 text-document leading-5 font-normal break-words text-default select-text",
                children: e,
              })),
              (n[6] = e),
              (n[7] = t))
            : (t = n[7]),
          t
        )
      }
      return (
        n[8] !== a
          ? ((t = (0, i.jsx)("div", {
              className: "text-sm break-words whitespace-pre-wrap text-default select-text",
              children: a,
            })),
            (n[8] = a),
            (n[9] = t))
          : (t = n[9]),
        t
      )
    }
    function v(e, t) {
      let { label: n, value: l } = e
      return (0, i.jsxs)(
        "div",
        {
          className: "flex flex-col gap-1",
          children: [
            (0, i.jsx)("dt", { className: "text-secondary", children: n }),
            (0, i.jsx)("dd", { className: "whitespace-pre-wrap", children: l }),
          ],
        },
        t,
      )
    }
    function b(e, t) {
      let { title: n, body: l, caption: a } = e
      return (0, i.jsxs)(
        "section",
        {
          className: "flex flex-col gap-2",
          children: [
            n && (0, i.jsx)("h3", { className: "text-base font-medium text-secondary", children: n }),
            (0, i.jsxs)("dl", {
              className: "flex flex-col gap-4 rounded-2xl border border-default p-5 break-words",
              children: [
                (0, i.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    (0, i.jsx)("dt", { className: "text-sm text-secondary", children: l.label }),
                    (0, i.jsx)("dd", {
                      className: "text-document whitespace-pre-wrap text-default",
                      children: l.value,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-col gap-1 border-t border-default pt-4",
                  children: [
                    (0, i.jsx)("dt", { className: "text-sm text-secondary", children: a.label }),
                    (0, i.jsx)("dd", {
                      className: "text-document whitespace-pre-wrap text-default",
                      children: a.value,
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
        t,
      )
    }
  },
  nxd2(e, t, n) {
    var i = n("ASxG")
    let l = i.object({
      version: i.literal(1),
      field: i.string().min(1),
      presentation: i
        .object({
          title: i.string().trim().min(1).max(120),
          triggerLabel: i.string().trim().min(1).max(80),
          confirmLabel: i.string().trim().min(1).max(80),
          icon: i
            .literal("shield")
            .optional()
            .catch(void 0),
          destructive: i
            .boolean()
            .optional()
            .catch(void 0),
          fields: i
            .array(
              i.object({
                label: i.string().trim().min(1).max(120),
                value: i
                  .string()
                  .min(1)
                  .max(1e4)
                  .refine((e) => e.trim().length > 0),
              }),
            )
            .min(1)
            .max(20)
            .optional()
            .catch(void 0),
          sections: i
            .array(
              i.object({
                title: i.string().trim().min(1).max(120).optional(),
                bodyField: i.number().int().min(0).max(19),
                captionField: i.number().int().min(0).max(19),
              }),
            )
            .min(1)
            .max(10)
            .optional()
            .catch(void 0),
        })
        .transform(({ sections: e, ...t }) => {
          let { fields: n } = t,
            i = e?.flatMap(({ bodyField: e, captionField: t }) => [e, t]),
            l = null != n && i?.length === n.length && new Set(i).size === n.length && i.every((e) => e < n.length)
          return {
            ...t,
            sections: l
              ? e?.map(({ title: e, bodyField: t, captionField: i }) => ({ title: e, body: n[t], caption: n[i] }))
              : void 0,
          }
        })
        .optional()
        .catch(void 0),
    })
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t = l.safeParse(e.confirmation)
          if (!t.success || !e.message.trim()) return null
          let { field: n } = t.data
          return 1 !== Object.keys(e.schema.properties).length ||
            e.schema.properties[n]?.type !== "boolean" ||
            e.schema.required?.length !== 1 ||
            e.schema.required[0] !== n
            ? null
            : t.data
        },
      },
    )
  },
  vPGU(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      a = n("zTeN"),
      r = n("I3F6"),
      o = n("zd8w"),
      s = n("oyxz"),
      c = n("Dgwo"),
      d = n("WNfT"),
      u = n("KRWX"),
      m = n("Sm6l"),
      p = n("OWtl")
    function f() {}
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t,
            n,
            h,
            x,
            g,
            v,
            b,
            y,
            w,
            j,
            A,
            C,
            k = (0, l.c)(33),
            {
              conversationId: S,
              hostId: N,
              requestId: F,
              serverName: M,
              onReply: E,
              onStandaloneResponseChange: I,
              isSubmitting: P,
            } = e,
            L = void 0 !== P && P,
            O = (0, a.gh)(p.u),
            T = (0, u.f)(),
            [z, D] = (0, o.useState)(!1),
            _ = (0, o.useRef)(!1)
          k[0] !== S || k[1] !== N || k[2] !== L || k[3] !== E || k[4] !== I || k[5] !== F || k[6] !== O
            ? ((t = (e) => {
                if (L || _.current) return
                let t = () =>
                  null != E ? E(e) : (0, c.V)(O, N).replyWithMcpServerElicitationResponse(S, F, (0, r.Se)(e))
                null == I
                  ? t().catch(f)
                  : ((_.current = !0),
                    D(!0),
                    I("submitting"),
                    Promise.resolve()
                      .then(t)
                      .then(
                        () => I("decline" === e ? "declined" : "canceled"),
                        () => I("failed"),
                      )
                      .finally(() => {
                        ;((_.current = !1), D(!1))
                      }))
              }),
              (k[0] = S),
              (k[1] = N),
              (k[2] = L),
              (k[3] = E),
              (k[4] = I),
              (k[5] = F),
              (k[6] = O),
              (k[7] = t))
            : (t = k[7])
          let q = t
          ;(k[8] !== q
            ? ((n = (e) => {
                "Escape" === e.key && (e.preventDefault(), q("cancel"))
              }),
              (k[8] = q),
              (k[9] = n))
            : (n = k[9]),
            k[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, i.jsxs)("div", {
                  className: "text-sm font-medium",
                  children: [
                    null,
                    (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)(s.A, {
                        id: "composer.openAIForm.unsupported.title",
                        defaultMessage: "This form isn’t supported in this version",
                        description: "Title for an OpenAI form that uses fields this client cannot display",
                      }),
                    }),
                  ],
                })),
                (k[10] = h))
              : (h = k[10]),
            k[11] !== M
              ? ((x = (0, i.jsxs)("div", {
                  className: "flex flex-col gap-1 p-4",
                  children: [
                    h,
                    (0, i.jsxs)("div", {
                      className: "text-size-chat-sm text-codex-description",
                      children: [
                        null,
                        (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsx)(s.A, {
                            id: "composer.openAIForm.unsupported.description",
                            defaultMessage:
                              "{serverName} requested this form. You can skip it and keep going, or dismiss the request",
                            description: "Explanation of the available actions for an unsupported OpenAI form",
                            values: { serverName: M },
                          }),
                        }),
                      ],
                    }),
                  ],
                })),
                (k[11] = M),
                (k[12] = x))
              : (x = k[12]))
          let R = L || z
          ;(k[13] !== q ? ((g = () => q("cancel")), (k[13] = q), (k[14] = g)) : (g = k[14]),
            k[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(s.A, {
                  id: "composer.openAIForm.unsupported.dismiss",
                  defaultMessage: "Dismiss",
                  description: "Action for dismissing an unsupported OpenAI form request",
                })),
                (k[15] = v))
              : (v = k[15]),
            k[16] !== R || k[17] !== g
              ? ((b = (0, i.jsx)(m.$, { color: "danger", size: "composer", disabled: R, onClick: g, children: v })),
                (k[16] = R),
                (k[17] = g),
                (k[18] = b))
              : (b = k[18]))
          let U = L || z
          return (
            k[19] !== q ? ((y = () => q("decline")), (k[19] = q), (k[20] = y)) : (y = k[20]),
            k[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, i.jsx)(s.A, {
                  id: "composer.openAIForm.unsupported.skip",
                  defaultMessage: "Skip",
                  description: "Action for declining an unsupported OpenAI form and continuing",
                })),
                (k[21] = w))
              : (w = k[21]),
            k[22] !== T || k[23] !== U || k[24] !== y
              ? ((j = (0, i.jsx)(m.$, {
                  autoFocus: T,
                  color: "primary",
                  size: "composer",
                  disabled: U,
                  onClick: y,
                  children: w,
                })),
                (k[22] = T),
                (k[23] = U),
                (k[24] = y),
                (k[25] = j))
              : (j = k[25]),
            k[26] !== j || k[27] !== b
              ? ((A = (0, i.jsxs)("div", {
                  className: "flex justify-end gap-2 px-4 py-3",
                  children: [null, (0, i.jsxs)(i.Fragment, { children: [b, j] })],
                })),
                (k[26] = j),
                (k[27] = b),
                (k[28] = A))
              : (A = k[28]),
            k[29] !== A || k[30] !== n || k[31] !== x
              ? ((C = (0, i.jsx)(d.A, {
                  children: (0, i.jsxs)("div", {
                    className: "flex flex-col",
                    role: "presentation",
                    onKeyDown: n,
                    children: [x, A],
                  }),
                })),
                (k[29] = A),
                (k[30] = n),
                (k[31] = x),
                (k[32] = C))
              : (C = k[32]),
            C
          )
        },
      },
    )
  },
  JEWd(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      a = n("tb30"),
      r = n("YZ1O"),
      o = n("on57"),
      s = n("zd8w"),
      c = n("Sm6l"),
      d = n("IxWh"),
      u = n("HOLv"),
      m = n("jDom")
    let p = {
      form: { color: "secondarySurface", size: "actionSm" },
      gallery: { color: "outlineSurface", size: "dialog" },
      compact: { color: "ghost", size: "compact" },
    }
    n.d(
      t,
      {},
      {
        i: function (e) {
          let t,
            n,
            f,
            h,
            x,
            g,
            v,
            b,
            y,
            w,
            j,
            A = (0, l.c)(38),
            {
              ariaInvalid: C,
              ariaLabel: k,
              backLabel: S,
              children: N,
              forwardLabel: F,
              header: M,
              layout: E,
              role: I,
              shouldUseReducedMotion: P,
            } = e,
            L = void 0 === E ? "form" : E,
            O = void 0 === I ? "group" : I
          A[0] !== N ? ((t = s.Children.count(N)), (A[0] = N), (A[1] = t)) : (t = A[1])
          let T = t,
            z = (0, s.useRef)(null),
            [D, _] = (0, s.useState)("ltr"),
            [q, R] = (0, s.useState)(!1),
            [U, V] = (0, s.useState)(!1)
          A[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                let t = "rtl" === getComputedStyle(e).direction ? "rtl" : "ltr"
                _(t)
                let { maximum: n, minimum: i } = (0, d.b)(e, t)
                "rtl" === t
                  ? (R(e.scrollLeft < n - 1), V(e.scrollLeft > i + 1))
                  : (R(e.scrollLeft > i + 1), V(e.scrollLeft < n - 1))
              }),
              (A[2] = n))
            : (n = A[2])
          let B = (0, m.K)(n),
            H = (e) => {
              if (((z.current = e), null == e || 0 === T || (B(e), "u" < typeof ResizeObserver))) return
              let t = () => B(e),
                n = new ResizeObserver(t),
                i = new MutationObserver(t)
              return (
                i.observe(e, { childList: !0 }),
                n.observe(e),
                null != e.firstElementChild && n.observe(e.firstElementChild),
                null != e.lastElementChild && n.observe(e.lastElementChild),
                () => {
                  ;(n.disconnect(), i.disconnect(), (z.current = null))
                }
              )
            },
            Q = "form" === L && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
            K = "gallery" === L && "gap-2"
          A[3] !== Q || A[4] !== K
            ? ((f = (0, o.A)("flex items-center", Q, K)), (A[3] = Q), (A[4] = K), (A[5] = f))
            : (f = A[5])
          let G = [-1, 1].map((e) => {
            let t = -1 === e ? q : U,
              n = -1 === e ? S : F
            return (0, i.jsx)(
              c.$,
              {
                className: (0, o.A)("pointer-events-auto", "form" === L && !t && "invisible"),
                "aria-label": n,
                ...p[L],
                disabled: !t,
                onClick: () => {
                  let t
                  null != (t = z.current) &&
                    t.scrollTo({
                      left: (0, d.z)(t, e, "rtl" === getComputedStyle(t).direction ? "rtl" : "ltr"),
                      behavior: P ? "instant" : "smooth",
                    })
                },
                radius: "compact" === L ? void 0 : "full",
                title: n,
                uniform: !0,
                children: (0, i.jsx)(u.I, {
                  className: e === ("rtl" === D ? 1 : -1) ? "rotate-180" : void 0,
                  asset: "gallery" === L ? a.q : r.u,
                }),
              },
              e,
            )
          })
          A[6] !== f || A[7] !== G
            ? ((h = (0, i.jsx)("div", { className: f, children: G })), (A[6] = f), (A[7] = G), (A[8] = h))
            : (h = A[8])
          let Z = h,
            W = "gallery" === L && "gap-4",
            J = "compact" === L && "gap-2",
            Y = "form" === L && "gap-1.5"
          ;(A[9] !== W || A[10] !== J || A[11] !== Y
            ? ((x = (0, o.A)("flex min-w-0 flex-col", W, J, Y)), (A[9] = W), (A[10] = J), (A[11] = Y), (A[12] = x))
            : (x = A[12]),
            A[13] !== M || A[14] !== L || A[15] !== Z
              ? ((g =
                  null != M || "form" !== L
                    ? (0, i.jsxs)("div", {
                        className: (0, o.A)(
                          "flex min-w-0 items-center",
                          "form" === L && "gap-1 px-4 py-1.5",
                          "compact" === L && "gap-3",
                          "gallery" === L && "min-h-9 gap-3",
                        ),
                        children: [
                          (0, i.jsx)("div", { className: "min-w-0 flex-1", children: M }),
                          "form" !== L ? Z : null,
                        ],
                      })
                    : null),
                (A[13] = M),
                (A[14] = L),
                (A[15] = Z),
                (A[16] = g))
              : (g = A[16]))
          let $ = "form" === L ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
            X = "gallery" === L && "gap-3",
            ee = "compact" === L && "gap-2"
          A[17] !== $ || A[18] !== X || A[19] !== ee
            ? ((v = (0, o.A)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", $, X, ee)),
              (A[17] = $),
              (A[18] = X),
              (A[19] = ee),
              (A[20] = v))
            : (v = A[20])
          let et = C || void 0
          ;(A[21] !== B ? ((b = (e) => B(e.currentTarget)), (A[21] = B), (A[22] = b)) : (b = A[22]),
            A[23] !== k || A[24] !== N || A[25] !== O || A[26] !== H || A[27] !== v || A[28] !== et || A[29] !== b
              ? ((y = (0, i.jsx)("div", {
                  ref: H,
                  className: v,
                  "data-horizontal-scroll": !0,
                  role: O,
                  "aria-invalid": et,
                  "aria-label": k,
                  onScroll: b,
                  children: N,
                })),
                (A[23] = k),
                (A[24] = N),
                (A[25] = O),
                (A[26] = H),
                (A[27] = v),
                (A[28] = et),
                (A[29] = b),
                (A[30] = y))
              : (y = A[30]))
          let en = "form" === L ? Z : null
          return (
            A[31] !== y || A[32] !== en
              ? ((w = (0, i.jsxs)("div", { className: "relative min-w-0", children: [y, en] })),
                (A[31] = y),
                (A[32] = en),
                (A[33] = w))
              : (w = A[33]),
            A[34] !== x || A[35] !== g || A[36] !== w
              ? ((j = (0, i.jsxs)("div", { className: x, children: [g, w] })),
                (A[34] = x),
                (A[35] = g),
                (A[36] = w),
                (A[37] = j))
              : (j = A[37]),
            j
          )
        },
      },
    )
  },
  s11J(e, t, n) {
    n.d(t, { O: () => e0 })
    var i = n("ABep"),
      l = n("QosV"),
      a = n("MnTr"),
      r = n("on57"),
      o = n("zTeN")
    n("DBCl")
    var s = n("I3F6"),
      c = n("zd8w"),
      d = n("Wf1j"),
      u = n("Telb"),
      m = n("Dgwo"),
      p = n("WNfT"),
      f = n("KRWX"),
      h = n("NySd"),
      x = n("M7Ra"),
      g = n("SGsN")
    n("rP0s")
    var v = n("oyxz"),
      b = n("Sm6l"),
      y = n("jDEJ")
    function w(e) {
      let t,
        n,
        a,
        r,
        o,
        s,
        c = (0, l.c)(14),
        { disabled: d, isSubmitting: u, hotkeysEnabled: m, onDecline: f } = e
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(v.A, {
              id: "composer.mcpConfirmation.button.decline",
              defaultMessage: "Decline",
              description:
                "Short secondary button in an app's confirmation request. Rejects the described action without submitting form values. The other button is Accept.",
            })),
            (c[0] = t))
          : (t = c[0]),
        c[1] !== u || c[2] !== f
          ? ((n = (0, i.jsx)(b.$, {
              color: "ghost",
              size: "composer",
              disabled: u,
              type: "button",
              onClick: f,
              children: t,
            })),
            (c[1] = u),
            (c[2] = f),
            (c[3] = n))
          : (n = c[3]),
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(v.A, {
              id: "composer.mcpConfirmation.button.accept",
              defaultMessage: "Accept",
              description:
                "Short primary button in an app's confirmation request. Explicitly confirms the action described in the request. The other button is Decline.",
            })),
            (c[4] = a))
          : (a = c[4]),
        c[5] !== m
          ? ((r = m && (0, i.jsx)(p.$, { variant: "primary", children: (0, y.X)("Enter") })), (c[5] = m), (c[6] = r))
          : (r = c[6]),
        c[7] !== d || c[8] !== u || c[9] !== r
          ? ((o = (0, i.jsxs)(b.$, {
              color: "primary",
              size: "composer",
              type: "submit",
              disabled: d,
              loading: u,
              children: [a, r],
            })),
            (c[7] = d),
            (c[8] = u),
            (c[9] = r),
            (c[10] = o))
          : (o = c[10]),
        c[11] !== n || c[12] !== o
          ? ((s = (0, i.jsxs)("div", {
              className: "flex shrink-0 items-center justify-end gap-2 px-4 py-3",
              children: [n, o],
            })),
            (c[11] = n),
            (c[12] = o),
            (c[13] = s))
          : (s = c[13]),
        s
      )
    }
    var j = n("QRIH"),
      A = n("nxd2"),
      C = n("OWtl"),
      k = n("Oj9r"),
      S = n("Gz25"),
      N = n("pHQ8"),
      F = n("AqHC"),
      M = n("q475"),
      E = n("K0rn"),
      I = n("IRP0")
    function P(e) {
      let t = (0, N.Wh)(e.schema)
      return {
        kind: e.kind,
        customDrafts: {},
        values: (0, N.Br)(
          t.flatMap(({ schema: e, ...t }) => ((0, M.Hl)(e) || (0, E.Pi)(e) ? [] : [{ ...t, schema: e }])),
        ),
        fileOptions: Object.fromEntries(
          t.flatMap(({ name: e, schema: t }) => ((0, M.Hl)(t) ? [[e, (0, M.bm)(t)]] : [])),
        ),
      }
    }
    function L(e, t) {
      return t?.selected && t.text.length > 0 && Array.isArray(e) ? [...e, t.text] : e
    }
    var O = n("hGgS")
    function T(e, t) {
      return (
        !e.defaultPrevented &&
        !e.nativeEvent.isComposing &&
        229 !== e.nativeEvent.keyCode &&
        !!(0, O.eg)(e.nativeEvent, "Enter") &&
        (e.preventDefault(), e.repeat || t(), !0)
      )
    }
    var z = n("vPGU"),
      D = n("slpy"),
      _ = n("g2Gi"),
      q = n("bVeK"),
      R = n("fw18"),
      U = n("bqtn"),
      V = n("HOLv")
    function B(e) {
      let t,
        n = (0, l.c)(4),
        { options: a, disabled: r, onAccept: o } = e
      return (
        n[0] !== r || n[1] !== o || n[2] !== a
          ? ((t = (0, i.jsx)("div", {
              className: "me-auto max-w-full min-w-0",
              children:
                1 === a.length
                  ? (0, i.jsx)(D.m, {
                      content: (0, i.jsxs)(i.Fragment, {
                        children: [a[0].title, a[0].description && (0, i.jsx)("p", { children: a[0].description })],
                      }),
                      children: (0, i.jsx)(b.$, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        className: "max-w-full",
                        disabled: r,
                        "aria-description": a[0].description,
                        onClick: () => o(a[0].const),
                        children: (0, i.jsx)("span", { className: "min-w-0 truncate", children: a[0].title }),
                      }),
                    })
                  : (0, i.jsx)(U.Ab, {
                      align: "start",
                      disabled: r,
                      triggerButton: (0, i.jsxs)(b.$, {
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        type: "button",
                        disabled: r,
                        children: [
                          (0, i.jsx)(v.A, {
                            id: "composer.mcpFormElicitation.moreAcceptActions",
                            defaultMessage: "More actions",
                            description: "Opens additional actions that accept and submit the form",
                          }),
                          (0, i.jsx)(V.I, { "aria-hidden": !1, asset: R.Q }),
                        ],
                      }),
                      children: a.map((e) =>
                        (0, i.jsx)(
                          U.ms.Item,
                          {
                            disabled: r,
                            allowWrap: !0,
                            subTextAllowWrap: !0,
                            SubText: null == e.description ? null : (0, i.jsx)(i.Fragment, { children: e.description }),
                            onSelect: () => o(e.const),
                            children: e.title,
                          },
                          e.const,
                        ),
                      ),
                    }),
            })),
            (n[0] = r),
            (n[1] = o),
            (n[2] = a),
            (n[3] = t))
          : (t = n[3]),
        t
      )
    }
    function H(e) {
      let t,
        n,
        a,
        o,
        s,
        c,
        d,
        u,
        m = (0, l.c)(49),
        {
          autoResolution: f,
          disabled: h,
          isSubmitting: x,
          submitDisabled: g,
          acceptOptions: w,
          primaryActionRef: j,
          fieldCount: A,
          isLastGroup: C,
          onBack: k,
          hotkeysEnabled: S,
          isStandardForm: N,
          showSubmit: F,
          showHeader: M,
          onCancel: E,
          onDecline: I,
          onDismissLegacyImagePicker: P,
          onViewAll: L,
        } = e,
        O = void 0 !== x && x,
        T = w?.required === !0 && w.options.length > 1,
        z = w?.required ? w.options[0] : void 0
      m[0] !== w?.options || m[1] !== w?.options.slice || m[2] !== z
        ? ((t = w?.options.slice(+(null != z)) ?? []),
          (m[0] = w?.options),
          (m[1] = w?.options.slice),
          (m[2] = z),
          (m[3] = t))
        : (t = m[3])
      let R = t
      if (null != P) {
        let e,
          t = f?.deadlineMs ?? "no-deadline",
          l = f?.deadlineMs,
          a = f?.nowMs
        ;(m[4] !== O || m[5] !== P || m[6] !== t || m[7] !== l || m[8] !== a
          ? ((e = (0, i.jsx)(_.c, { disabled: O, deadlineMs: l, nowMs: a, variant: "button", onDismiss: P }, t)),
            (m[4] = O),
            (m[5] = P),
            (m[6] = t),
            (m[7] = l),
            (m[8] = a),
            (m[9] = e))
          : (e = m[9]),
          (n = e))
      } else {
        let e, t
        ;(m[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(v.A, {
              id: "composer.mcpFormElicitation.deny",
              defaultMessage: "Deny",
              description: "Declines the form without submitting its values",
            })),
            (m[10] = e))
          : (e = m[10]),
          m[11] !== h || m[12] !== I
            ? ((t = (0, i.jsx)(b.$, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: h,
                onClick: I,
                children: e,
              })),
              (m[11] = h),
              (m[12] = I),
              (m[13] = t))
            : (t = m[13]),
          (n = t))
      }
      return (
        m[14] !== h || m[15] !== k
          ? ((a =
              null != k &&
              (0, i.jsx)(b.$, {
                color: "outlineSurface",
                radius: "full",
                size: "composer",
                disabled: h,
                onClick: k,
                children: (0, i.jsx)(v.A, {
                  id: "composer.mcpFormElicitation.back",
                  defaultMessage: "Back",
                  description: "Return to the previous form step",
                }),
              })),
            (m[14] = h),
            (m[15] = k),
            (m[16] = a))
          : (a = m[16]),
        m[17] !== w || m[18] !== h || m[19] !== L
          ? ((o =
              null != L
                ? (0, i.jsx)("div", {
                    className: null == w ? "me-auto" : void 0,
                    children: (0, i.jsxs)(b.$, {
                      color: "outlineSurface",
                      radius: "full",
                      size: "composer",
                      disabled: h,
                      onClick: L,
                      children: [
                        (0, i.jsx)(q.TVU, {}),
                        (0, i.jsx)(v.A, {
                          id: "composer.openAIForm.viewAll",
                          defaultMessage: "View all",
                          description: "Open a searchable grid of all files for the current form field",
                        }),
                      ],
                    }),
                  })
                : null),
            (m[17] = w),
            (m[18] = h),
            (m[19] = L),
            (m[20] = o))
          : (o = m[20]),
        m[21] !== O || m[22] !== E || m[23] !== P || m[24] !== M
          ? ((s =
              !M &&
              null == P &&
              (0, i.jsx)(b.$, {
                color: "ghost",
                size: "composer",
                disabled: O,
                onClick: E,
                children: (0, i.jsx)(v.A, {
                  id: "composer.mcpFormElicitation.cancel",
                  defaultMessage: "Cancel",
                  description: "Cancel an MCP form when it has no header dismiss button",
                }),
              })),
            (m[21] = O),
            (m[22] = E),
            (m[23] = P),
            (m[24] = M),
            (m[25] = s))
          : (s = m[25]),
        m[26] !== w || m[27] !== R || m[28] !== g
          ? ((c = null != w && R.length > 0 && (0, i.jsx)(B, { options: R, disabled: g, onAccept: w.onSelect })),
            (m[26] = w),
            (m[27] = R),
            (m[28] = g),
            (m[29] = c))
          : (c = m[29]),
        m[30] !== w ||
        m[31] !== A ||
        m[32] !== S ||
        m[33] !== C ||
        m[34] !== N ||
        m[35] !== O ||
        m[36] !== j ||
        m[37] !== z ||
        m[38] !== T ||
        m[39] !== F ||
        m[40] !== g
          ? ((d =
              (null != w || F) &&
              (0, i.jsx)(D.m, {
                content:
                  z &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [z.title, z.description && (0, i.jsx)("p", { children: z.description })],
                  }),
                children: (0, i.jsxs)(b.$, {
                  autoFocus: S && 0 === A,
                  className: "max-w-full",
                  color: "primary",
                  size: "composer",
                  type: T ? "button" : "submit",
                  ref: j,
                  onClick: null != z && null != w && T ? () => w.onSelect(z.const) : void 0,
                  "aria-description": z?.description,
                  disabled: g,
                  loading: O,
                  children: [
                    (0, i.jsx)("span", {
                      className: (0, r.A)("min-w-0 truncate", N && "text-sm font-medium"),
                      children: C
                        ? (z?.title ??
                          (0, i.jsx)(v.A, {
                            id: "composer.mcpFormElicitation.accept",
                            defaultMessage: "Accept",
                            description: "Accepts the form and submits its answers",
                          }))
                        : (0, i.jsx)(v.A, {
                            id: "composer.mcpFormElicitation.next",
                            defaultMessage: "Next",
                            description: "Continue to the next form step",
                          }),
                    }),
                    S && !T && (0, i.jsx)(p.$, { variant: "primary", children: (0, y.X)("Enter") }),
                  ],
                }),
              })),
            (m[30] = w),
            (m[31] = A),
            (m[32] = S),
            (m[33] = C),
            (m[34] = N),
            (m[35] = O),
            (m[36] = j),
            (m[37] = z),
            (m[38] = T),
            (m[39] = F),
            (m[40] = g),
            (m[41] = d))
          : (d = m[41]),
        m[42] !== n || m[43] !== a || m[44] !== o || m[45] !== s || m[46] !== c || m[47] !== d
          ? ((u = (0, i.jsxs)("div", {
              className: "flex shrink-0 flex-wrap items-center justify-end gap-2 px-4 py-3",
              children: [a, o, s, c, n, d],
            })),
            (m[42] = n),
            (m[43] = a),
            (m[44] = o),
            (m[45] = s),
            (m[46] = c),
            (m[47] = d),
            (m[48] = u))
          : (u = m[48]),
        u
      )
    }
    var Q = n("Wyro"),
      K = n.n(Q),
      G = n("Qr2V"),
      Z = n("zLIa"),
      W = n("ZQu1"),
      J = n("yS0J"),
      Y = n("ue8o"),
      $ = n("zSQm"),
      X = n.p + "assets/icon.6b02567b2b.png",
      ee = n.p + "assets/icon.4e392f38ad.png",
      et = n.p + "assets/icon.9b2a0253b8.png"
    let en = {
      "application/msword": X,
      "application/vnd.google-apps.document": X,
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": X,
      "text/markdown": X,
      "text/plain": X,
      "application/vnd.google-apps.presentation": ee,
      "application/vnd.ms-powerpoint": ee,
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": ee,
      "application/vnd.google-apps.spreadsheet": et,
      "application/vnd.ms-excel": et,
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": et,
      "text/csv": et,
      "text/tab-separated-values": et,
    }
    function ei(e) {
      let t,
        n,
        a,
        o,
        s,
        d = (0, l.c)(22),
        { layout: u, src: m, mimeType: p } = e,
        f = void 0 === u ? "thumbnail" : u,
        [h, x] = (0, c.useState)(),
        g = null != m && URL.canParse(m) && "https:" === new URL(m).protocol ? m : void 0,
        { safeUrl: v } = (0, Y.lo)(g, null != g)
      d[0] !== v || d[1] !== m
        ? ((t = null != m && (0, $.N5)(m) ? m : v), (d[0] = v), (d[1] = m), (d[2] = t))
        : (t = d[2])
      let b = t,
        y = p?.split(";")[0]?.trim().toLowerCase(),
        w = en[y ?? ""],
        j = "icon" === f ? "size-5" : "size-10"
      d[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, i.jsx)(q.o_G, {})), (d[3] = n)) : (n = d[3])
      let A = n
      if (null != w) {
        let e, t
        ;(d[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(q.o_G, {})), (d[4] = e)) : (e = d[4]),
          d[5] !== j || d[6] !== w
            ? ((t = (0, i.jsx)(W.R, { className: j, alt: "", fallback: e, src: w })),
              (d[5] = j),
              (d[6] = w),
              (d[7] = t))
            : (t = d[7]),
          (A = t))
      } else if ("text/html" === y || "application/xhtml+xml" === y) {
        let e
        ;(d[8] !== j ? ((e = (0, i.jsx)(J.A, { className: j })), (d[8] = j), (d[9] = e)) : (e = d[9]), (A = e))
      }
      let C = "card" === f || "card-icon" === f,
        k = "icon" === f,
        S = "thumbnail" === f
      return (
        d[10] !== C || d[11] !== k || d[12] !== S
          ? ((a = (0, r.A)("flex items-center justify-center overflow-hidden", {
              "h-full w-full": C,
              "size-5 shrink-0 rounded-xs": k,
              "size-10 shrink-0 rounded-md bg-surface": S,
            })),
            (d[10] = C),
            (d[11] = k),
            (d[12] = S),
            (d[13] = a))
          : (a = d[13]),
        d[14] !== h || d[15] !== A || d[16] !== b || d[17] !== f
          ? ((o =
              null == b || h === b
                ? A
                : (0, i.jsx)("img", {
                    alt: "",
                    className: (0, r.A)(
                      "card-icon" === f ? "size-10" : "h-full w-full",
                      "icon" === f || "card-icon" === f ? "object-contain" : "object-scale-down",
                      "card" === f && "block",
                    ),
                    decoding: "async",
                    draggable: !1,
                    loading: "lazy",
                    referrerPolicy: "no-referrer",
                    src: b,
                    onError: () => x(b),
                  })),
            (d[14] = h),
            (d[15] = A),
            (d[16] = b),
            (d[17] = f),
            (d[18] = o))
          : (o = d[18]),
        d[19] !== a || d[20] !== o
          ? ((s = (0, i.jsx)("span", { className: a, children: o })), (d[19] = a), (d[20] = o), (d[21] = s))
          : (s = d[21]),
        s
      )
    }
    function el(e) {
      let t,
        n,
        a,
        r,
        o,
        s,
        d,
        u,
        m = (0, l.c)(61),
        {
          autoFocus: p,
          submitOnEnter: f,
          showOptionNumbers: h,
          customOption: x,
          invalid: g,
          multiple: v,
          options: b,
          value: y,
          onChange: w,
        } = e,
        j = void 0 === f || f,
        A = (0, c.useId)(),
        C = (void 0 === h || h) && b.length > 1,
        k = v ? G.b0 : G.xu,
        S = "string" == typeof y ? y : void 0
      m[0] !== y ? ((t = Array.isArray(y) ? y : []), (m[0] = y), (m[1] = t)) : (t = m[1])
      let N = t
      m[2] !== b ? ((n = b.some(ea)), (m[2] = b), (m[3] = n)) : (n = m[3])
      let F = n
      m[4] !== v || m[5] !== b || m[6] !== S
        ? ((a = v
            ? 0
            : Math.max(
                0,
                b.findIndex((e) => e.const === S),
              )),
          (m[4] = v),
          (m[5] = b),
          (m[6] = S),
          (m[7] = a))
        : (a = m[7])
      let M = a
      m[8] !== x || m[9] !== v || m[10] !== w || m[11] !== b || m[12] !== j
        ? ((r = (e) => {
            let t = e.target
            if (
              !(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) ||
              !t.matches('input[type="radio"], button[role="checkbox"]') ||
              T(e, () => {
                v || !j || (t instanceof HTMLInputElement && !t.checked) ? t.click() : t.form?.requestSubmit()
              }) ||
              e.defaultPrevented ||
              e.nativeEvent.isComposing ||
              e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              e.shiftKey ||
              ("ArrowDown" !== e.key && "ArrowUp" !== e.key)
            )
              return
            let n = Array.from(e.currentTarget.querySelectorAll('input[type="radio"], button[role="checkbox"]')),
              i = (n.indexOf(t) + ("ArrowDown" === e.key ? 1 : -1) + n.length) % n.length,
              l = n[i]
            if (null != l && (e.preventDefault(), l.focus(), !v)) {
              let e = b[i]
              null != e ? w(e.const) : x?.onSelect(!0)
            }
          }),
          (m[8] = x),
          (m[9] = v),
          (m[10] = w),
          (m[11] = b),
          (m[12] = j),
          (m[13] = r))
        : (r = m[13])
      let E = r
      if (
        m[14] !== k ||
        m[15] !== p ||
        m[16] !== x?.selected ||
        m[17] !== M ||
        m[18] !== F ||
        m[19] !== A ||
        m[20] !== g ||
        m[21] !== v ||
        m[22] !== w ||
        m[23] !== b ||
        m[24] !== S ||
        m[25] !== N ||
        m[26] !== C
      ) {
        let e
        ;(m[28] !== k ||
        m[29] !== p ||
        m[30] !== x?.selected ||
        m[31] !== M ||
        m[32] !== F ||
        m[33] !== A ||
        m[34] !== g ||
        m[35] !== v ||
        m[36] !== w ||
        m[37] !== S ||
        m[38] !== N ||
        m[39] !== C
          ? ((e = (e, t) => {
              let n = N.indexOf(e.const),
                l = v ? -1 !== n : !x?.selected && S === e.const
              return (0, i.jsxs)(
                k,
                {
                  autoFocus: p && !x?.selected && t === M,
                  checked: l,
                  invalid: g,
                  name: A,
                  type: v ? "checkbox" : "radio",
                  value: e.const,
                  onChange: () => {
                    v ? w(l ? N.filter((e, t) => t !== n) : [...N, e.const]) : w(e.const)
                  },
                  children: [
                    !v &&
                      (0, i.jsx)(G.PP, {
                        selected: l,
                        showNumber: C,
                        variant: "number",
                        index: t + 1,
                        verticalAlignment: "start",
                      }),
                    F ? (0, i.jsx)(ei, { src: e["x-openai-thumbnail"]?.src }) : null,
                    (0, i.jsxs)("span", {
                      className:
                        "flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2 gap-y-0.5 @max-5xl/request-card:flex-col @max-5xl/request-card:items-stretch",
                      children: [
                        (0, i.jsx)("span", {
                          className: "min-w-0 text-sm font-medium wrap-anywhere",
                          children: e.title,
                        }),
                        null == e.description
                          ? null
                          : (0, i.jsx)("span", {
                              className: "min-w-0 text-sm wrap-anywhere text-codex-description",
                              children: e.description,
                            }),
                      ],
                    }),
                  ],
                },
                e.const,
              )
            }),
            (m[28] = k),
            (m[29] = p),
            (m[30] = x?.selected),
            (m[31] = M),
            (m[32] = F),
            (m[33] = A),
            (m[34] = g),
            (m[35] = v),
            (m[36] = w),
            (m[37] = S),
            (m[38] = N),
            (m[39] = C),
            (m[40] = e))
          : (e = m[40]),
          (o = b.map(e)),
          (m[14] = k),
          (m[15] = p),
          (m[16] = x?.selected),
          (m[17] = M),
          (m[18] = F),
          (m[19] = A),
          (m[20] = g),
          (m[21] = v),
          (m[22] = w),
          (m[23] = b),
          (m[24] = S),
          (m[25] = N),
          (m[26] = C),
          (m[27] = o))
      } else o = m[27]
      return (
        m[41] !== x || m[42] !== g || m[43] !== v || m[44] !== w || m[45] !== b || m[46] !== N
          ? ((s =
              null != x && v
                ? N.map((e, t) =>
                    b.some((t) => t.const === e) && N.indexOf(e) === t
                      ? null
                      : (0, i.jsx)(
                          G.b0,
                          {
                            autoFocus: !1,
                            checked: !0,
                            invalid: g,
                            onChange: () => w(N.filter((e, n) => n !== t)),
                            children: (0, i.jsx)("span", {
                              className: "min-w-0 text-sm font-medium wrap-anywhere",
                              children: b.find((t) => t.const === e)?.title ?? e,
                            }),
                          },
                          t,
                        ),
                  )
                : null),
            (m[41] = x),
            (m[42] = g),
            (m[43] = v),
            (m[44] = w),
            (m[45] = b),
            (m[46] = N),
            (m[47] = s))
          : (s = m[47]),
        m[48] !== k || m[49] !== p || m[50] !== x || m[51] !== A || m[52] !== g || m[53] !== v || m[54] !== b.length
          ? ((d =
              null != x
                ? (0, i.jsx)("div", {
                    "data-mcp-form-custom-choice": !0,
                    children: (0, i.jsx)(k, {
                      accessibilityLabel: x.label,
                      autoFocus: p && (0 === b.length || x.selected),
                      checked: x.selected,
                      invalid: g,
                      name: A,
                      type: v ? "checkbox" : "radio",
                      onChange: () => x.onSelect(!v || !x.selected),
                      editor: x.editor,
                      children: !v && (0, i.jsx)(G.PP, { selected: x.selected, variant: "custom" }),
                    }),
                  })
                : null),
            (m[48] = k),
            (m[49] = p),
            (m[50] = x),
            (m[51] = A),
            (m[52] = g),
            (m[53] = v),
            (m[54] = b.length),
            (m[55] = d))
          : (d = m[55]),
        m[56] !== E || m[57] !== o || m[58] !== s || m[59] !== d
          ? ((u = (0, i.jsxs)("div", {
              className: "flex flex-col gap-1",
              "data-mcp-form-choices": !0,
              role: "group",
              onKeyDownCapture: E,
              children: [o, s, d],
            })),
            (m[56] = E),
            (m[57] = o),
            (m[58] = s),
            (m[59] = d),
            (m[60] = u))
          : (u = m[60]),
        u
      )
    }
    function ea(e) {
      return null != e["x-openai-thumbnail"]
    }
    function er(e) {
      let t,
        n,
        a,
        r,
        o,
        s,
        c = (0, l.c)(29),
        { schema: d, value: u } = e
      if (
        "array" === d.type &&
        Array.isArray(u) &&
        u.length >= Number(d.minItems ?? 0) &&
        (null == d.maxItems || u.length <= Number(d.maxItems)) &&
        "type" in d.items &&
        "string" === d.items.type &&
        !("x-openai-input" in d.items)
      ) {
        let e
        return (
          c[0] !== d.items ? ((e = (0, i.jsx)(er, { schema: d.items })), (c[0] = d.items), (c[1] = e)) : (e = c[1]),
          e
        )
      }
      let m = "string" !== d.type || "x-openai-input" in d ? null : d,
        p = "number" === d.type || "integer" === d.type ? d : null,
        f = p?.minimum,
        h = p?.maximum
      "array" === d.type
        ? ((f = null == d.minItems || 0 === Number(d.minItems) ? void 0 : Number(d.minItems)),
          (h = null == d.maxItems ? void 0 : Number(d.maxItems)))
        : null != m && ("minLength" in m && (f = m.minLength || void 0), "maxLength" in m && (h = m.maxLength))
      let x = "none"
      null != f && null != h
        ? (x = f === h ? "exact" : "both")
        : null != f
          ? (x = "minimum")
          : null != h && (x = "maximum")
      let g = null != m && "format" in m ? m.format : void 0
      return (
        c[2] !== x || c[3] !== h || c[4] !== f || c[5] !== d.type
          ? ((t =
              "array" === d.type && "none" !== x
                ? (0, i.jsx)(v.A, {
                    id: "composer.mcpFormElicitation.selectionCount",
                    defaultMessage:
                      "{bounds, select, exact {Choose exactly {minimum, plural, one {# item} other {# items}}} both {Choose {minimum}–{maximum} items} minimum {Choose at least {minimum, plural, one {# item} other {# items}}} other {Choose up to {maximum, plural, one {# item} other {# items}}}}",
                    description:
                      "Number of choices or files allowed in an MCP form; bounds specifies an exact count, a range, a minimum, or a maximum",
                    values: { bounds: x, minimum: f, maximum: h },
                  })
                : null),
            (c[2] = x),
            (c[3] = h),
            (c[4] = f),
            (c[5] = d.type),
            (c[6] = t))
          : (t = c[6]),
        c[7] !== x || c[8] !== h || c[9] !== f || c[10] !== m
          ? ((n =
              null != m && "none" !== x
                ? (0, i.jsx)("div", {
                    children: (0, i.jsx)(v.A, {
                      id: "composer.mcpFormElicitation.textLength",
                      defaultMessage:
                        "{bounds, select, exact {Use exactly {minimum, plural, one {# character} other {# characters}}} both {Use {minimum}–{maximum} characters} minimum {Use at least {minimum, plural, one {# character} other {# characters}}} other {Use up to {maximum, plural, one {# character} other {# characters}}}}",
                      description:
                        "Text length allowed in an MCP form; bounds specifies an exact length, a range, a minimum, or a maximum",
                      values: { bounds: x, minimum: f, maximum: h },
                    }),
                  })
                : null),
            (c[7] = x),
            (c[8] = h),
            (c[9] = f),
            (c[10] = m),
            (c[11] = n))
          : (n = c[11]),
        c[12] !== x || c[13] !== h || c[14] !== f || c[15] !== p
          ? ((a =
              null != p
                ? (0, i.jsx)(v.A, {
                    id: "composer.mcpFormElicitation.numberRange",
                    defaultMessage:
                      "{kind, select, integer {Enter a whole number} other {Enter a number}}{bounds, select, exact { equal to {minimum}} both { from {minimum} to {maximum}} minimum { of at least {minimum}} maximum { of at most {maximum}} other {}}",
                    description:
                      "Numeric value allowed in an MCP form; kind distinguishes whole numbers from decimals, and bounds specifies an exact value, a range, a minimum, a maximum, or no limit",
                    values: { kind: p.type, bounds: x, minimum: f, maximum: h },
                  })
                : null),
            (c[12] = x),
            (c[13] = h),
            (c[14] = f),
            (c[15] = p),
            (c[16] = a))
          : (a = c[16]),
        c[17] !== g
          ? ((r =
              null != g
                ? (0, i.jsx)("div", {
                    children: (0, i.jsx)(v.A, {
                      id: "composer.mcpFormElicitation.requiredFormat",
                      defaultMessage:
                        "Use a valid {format, select, email {email address} uri {URL} date {date} datetime {date and time, such as 2026-01-30T14:30:00Z} other {value}}",
                      description:
                        "Expected format for an MCP form answer; format is email, uri, date, or datetime. The datetime example shows the accepted ISO timestamp syntax",
                      values: { format: "date-time" === g ? "datetime" : g },
                    }),
                  })
                : null),
            (c[17] = g),
            (c[18] = r))
          : (r = c[18]),
        c[19] !== x || c[20] !== g || c[21] !== p
          ? ((o =
              "none" === x && null == p && null == g
                ? (0, i.jsx)(v.A, {
                    id: "composer.mcpFormElicitation.invalidField",
                    defaultMessage: "Check this answer and try again",
                    description:
                      "Validation message shown when an MCP form answer is missing or does not meet its requirements",
                  })
                : null),
            (c[19] = x),
            (c[20] = g),
            (c[21] = p),
            (c[22] = o))
          : (o = c[22]),
        c[23] !== t || c[24] !== n || c[25] !== a || c[26] !== r || c[27] !== o
          ? ((s = (0, i.jsxs)("div", { role: "alert", children: [t, n, a, r, o] })),
            (c[23] = t),
            (c[24] = n),
            (c[25] = a),
            (c[26] = r),
            (c[27] = o),
            (c[28] = s))
          : (s = c[28]),
        s
      )
    }
    function eo(e) {
      let t,
        n = (0, l.c)(15),
        {
          id: a,
          autoFocus: o,
          disabled: s,
          invalid: c,
          label: d,
          placeholder: u,
          variant: m,
          format: p,
          maxLength: f,
          value: h,
          onChange: x,
          onKeyDown: g,
          onFocus: v,
        } = e,
        b = void 0 !== s && s,
        y = void 0 === m ? "default" : m,
        w = (f ?? 0) >= 160,
        j =
          "choice" === y
            ? "block w-full resize-none bg-transparent text-default outline-none placeholder:text-tertiary"
            : "w-full rounded-xl border border-default px-3 outline-none focus:border-text/30 aria-invalid:border-text-danger"
      return (
        n[0] !== o ||
        n[1] !== b ||
        n[2] !== j ||
        n[3] !== p ||
        n[4] !== a ||
        n[5] !== c ||
        n[6] !== w ||
        n[7] !== d ||
        n[8] !== x ||
        n[9] !== v ||
        n[10] !== g ||
        n[11] !== u ||
        n[12] !== h ||
        n[13] !== y
          ? ((t =
              null == p
                ? (0, i.jsx)("textarea", {
                    id: a,
                    ref: o ? es : void 0,
                    autoFocus: o,
                    disabled: b,
                    "aria-invalid": c || void 0,
                    "aria-label": d,
                    placeholder: u,
                    className: (0, r.A)(
                      j,
                      "[field-sizing:content] max-h-48 resize-none overflow-y-auto",
                      "default" === y && "py-2",
                      w ? "min-h-20" : "default" === y && "min-h-8",
                    ),
                    rows: w ? 3 : 1,
                    value: h,
                    onChange: (e) => x(e.currentTarget.value),
                    onKeyDown: g,
                    onFocus: v,
                  })
                : (0, i.jsx)("input", {
                    id: a,
                    autoFocus: o,
                    disabled: b,
                    "aria-invalid": c || void 0,
                    "aria-label": d,
                    placeholder: u,
                    className: (0, r.A)(j, "default" === y && "h-8"),
                    type: (function (e) {
                      switch (e) {
                        case "date":
                          return "date"
                        case "date-time":
                        case void 0:
                          return "text"
                        case "email":
                          return "email"
                        case "uri":
                          return "url"
                      }
                    })(p),
                    value: h,
                    onChange: (e) => x(e.currentTarget.value),
                    onKeyDown: g,
                    onFocus: v,
                  })),
            (n[0] = o),
            (n[1] = b),
            (n[2] = j),
            (n[3] = p),
            (n[4] = a),
            (n[5] = c),
            (n[6] = w),
            (n[7] = d),
            (n[8] = x),
            (n[9] = v),
            (n[10] = g),
            (n[11] = u),
            (n[12] = h),
            (n[13] = y),
            (n[14] = t))
          : (t = n[14]),
        t
      )
    }
    function es(e) {
      null != e && e.setSelectionRange(e.value.length, e.value.length)
    }
    function ec(e) {
      let t,
        n,
        a,
        r,
        o,
        s,
        c,
        u,
        m,
        p,
        f,
        h,
        x,
        g = (0, l.c)(62),
        {
          autoFocus: v,
          showOptionNumbers: b,
          disabled: y,
          label: w,
          format: j,
          maxLength: A,
          invalid: C,
          multiple: k,
          options: S,
          value: N,
          draft: F,
          onDraftChange: M,
          onChange: E,
        } = e,
        I = void 0 === b || b,
        P = (0, d.A)(),
        L = k || "string" != typeof N || S.some((e) => e.const === N) ? "" : N
      g[0] !== F || g[1] !== L
        ? ((t = F ?? { text: L, selected: "" !== L }), (g[0] = F), (g[1] = L), (g[2] = t))
        : (t = g[2])
      let O = t
      g[3] !== P
        ? ((n = P.formatMessage({
            id: "composer.mcpFormElicitation.customChoice",
            defaultMessage: "Something else",
            description: "The final choice in a form field, where the user can type their own answer",
          })),
          (g[3] = P),
          (g[4] = n))
        : (n = g[4])
      let z = n
      g[5] !== O || g[6] !== k || g[7] !== E || g[8] !== M
        ? ((a = (e) => {
            e !== O.selected && (M({ ...O, selected: e }), k || E(e ? O.text : ""))
          }),
          (g[5] = O),
          (g[6] = k),
          (g[7] = E),
          (g[8] = M),
          (g[9] = a))
        : (a = g[9])
      let D = a
      g[10] !== O.selected || g[11] !== O.text || g[12] !== E || g[13] !== M || g[14] !== N
        ? ((r = () => {
            O.selected && "" !== O.text && (E([...(Array.isArray(N) ? N : []), O.text]), M({ text: "", selected: !1 }))
          }),
          (g[10] = O.selected),
          (g[11] = O.text),
          (g[12] = E),
          (g[13] = M),
          (g[14] = N),
          (g[15] = r))
        : (r = g[15])
      let _ = r
      g[16] !== O || g[17] !== k || g[18] !== E || g[19] !== M
        ? ((o = (e) => {
            ;(k || M({ ...O, selected: !1 }), E(e))
          }),
          (g[16] = O),
          (g[17] = k),
          (g[18] = E),
          (g[19] = M),
          (g[20] = o))
        : (o = g[20])
      let q = O.selected
      return (
        g[21] !== P
          ? ((s = P.formatMessage({
              id: "composer.mcpFormElicitation.customPlaceholder",
              defaultMessage: "Or write your own response",
              description: "Placeholder for a custom form response",
            })),
            (g[21] = P),
            (g[22] = s))
          : (s = g[22]),
        g[23] !== D ? ((c = () => D(!0)), (g[23] = D), (g[24] = c)) : (c = g[24]),
        g[25] !== k || g[26] !== E || g[27] !== M
          ? ((u = (e) => {
              ;(M({ text: e, selected: !0 }), k || E(e))
            }),
            (g[25] = k),
            (g[26] = E),
            (g[27] = M),
            (g[28] = u))
          : (u = g[28]),
        g[29] !== _ || g[30] !== O.selected || g[31] !== O.text || g[32] !== k
          ? ((m = (e) => {
              if (!k) {
                "date" !== e.currentTarget.type && T(e, () => e.currentTarget.form?.requestSubmit())
                return
              }
              O.selected && "" !== O.text && T(e, _) && e.stopPropagation()
            }),
            (g[29] = _),
            (g[30] = O.selected),
            (g[31] = O.text),
            (g[32] = k),
            (g[33] = m))
          : (m = g[33]),
        g[34] !== O.text ||
        g[35] !== y ||
        g[36] !== j ||
        g[37] !== C ||
        g[38] !== w ||
        g[39] !== A ||
        g[40] !== u ||
        g[41] !== m ||
        g[42] !== s ||
        g[43] !== c
          ? ((p = (0, i.jsx)(eo, {
              autoFocus: !1,
              disabled: y,
              label: w,
              placeholder: s,
              variant: "choice",
              invalid: C,
              format: j,
              maxLength: A,
              value: O.text,
              onFocus: c,
              onChange: u,
              onKeyDown: m,
            })),
            (g[34] = O.text),
            (g[35] = y),
            (g[36] = j),
            (g[37] = C),
            (g[38] = w),
            (g[39] = A),
            (g[40] = u),
            (g[41] = m),
            (g[42] = s),
            (g[43] = c),
            (g[44] = p))
          : (p = g[44]),
        g[45] !== O.selected || g[46] !== z || g[47] !== D || g[48] !== p
          ? ((f = { label: z, selected: q, onSelect: D, editor: p }),
            (g[45] = O.selected),
            (g[46] = z),
            (g[47] = D),
            (g[48] = p),
            (g[49] = f))
          : (f = g[49]),
        g[50] !== v ||
        g[51] !== C ||
        g[52] !== k ||
        g[53] !== S ||
        g[54] !== I ||
        g[55] !== f ||
        g[56] !== o ||
        g[57] !== N
          ? ((h = (0, i.jsx)(el, {
              autoFocus: v,
              submitOnEnter: !1,
              showOptionNumbers: I,
              invalid: C,
              multiple: k,
              options: S,
              value: N,
              onChange: o,
              customOption: f,
            })),
            (g[50] = v),
            (g[51] = C),
            (g[52] = k),
            (g[53] = S),
            (g[54] = I),
            (g[55] = f),
            (g[56] = o),
            (g[57] = N),
            (g[58] = h))
          : (h = g[58]),
        g[59] !== y || g[60] !== h
          ? ((x = (0, i.jsx)("fieldset", { disabled: y, className: "min-w-0", children: h })),
            (g[59] = y),
            (g[60] = h),
            (g[61] = x))
          : (x = g[61]),
        x
      )
    }
    function ed(e) {
      let t,
        n,
        a,
        o = (0, l.c)(101),
        {
          autoFocus: s,
          showOptionNumbers: u,
          disabled: m,
          field: p,
          hideLabel: f,
          hideDescription: h,
          invalid: x,
          value: g,
          customDraft: v,
          onCustomDraftChange: b,
          onChange: y,
        } = e,
        w = void 0 === u || u,
        j = void 0 !== m && m,
        A = (0, c.useId)(),
        C = (0, d.A)()
      o[0] !== p.name || o[1] !== p.schema.title
        ? ((t = p.schema.title ?? K()(p.name)), (o[0] = p.name), (o[1] = p.schema.title), (o[2] = t))
        : (t = o[2])
      let k = t,
        S = !f && null != p.schema.title,
        F = void 0 !== h && h ? null : (p.schema.description ?? null),
        M = "boolean" === p.schema.type && p.required && null == p.schema.default
      o[3] !== p.schema || o[4] !== M
        ? ((n = "array" === p.schema.type || (0, N.QQ)(p.schema) || M), (o[3] = p.schema), (o[4] = M), (o[5] = n))
        : (n = o[5])
      let E = n,
        I = "array" === p.schema.type ? p.schema.items : p.schema,
        P = E && (0, N.OS)(p.schema) ? I : null
      o[6] !== v || o[7] !== p.schema || o[8] !== x || o[9] !== E || o[10] !== g
        ? ((a = x
            ? (0, i.jsx)("div", {
                className: (0, r.A)("pt-1 text-size-chat-sm text-danger", (E || "boolean" === p.schema.type) && "px-2"),
                children: (0, i.jsx)(er, { schema: p.schema, value: L(g, v) }),
              })
            : null),
          (o[6] = v),
          (o[7] = p.schema),
          (o[8] = x),
          (o[9] = E),
          (o[10] = g),
          (o[11] = a))
        : (a = o[11])
      let O = a
      if ("array" === p.schema.type || (0, N.QQ)(p.schema) || M) {
        let e, t, n, l
        return (
          o[12] !== k || o[13] !== S
            ? ((e =
                S &&
                (0, i.jsx)("legend", {
                  className: "px-2 text-size-chat-sm font-medium wrap-anywhere text-default",
                  children: k,
                })),
              (o[12] = k),
              (o[13] = S),
              (o[14] = e))
            : (e = o[14]),
          o[15] !== F ? ((t = (0, i.jsx)(ef, { description: F })), (o[15] = F), (o[16] = t)) : (t = o[16]),
          o[17] !== s ||
          o[18] !== v ||
          o[19] !== j ||
          o[20] !== p.schema ||
          o[21] !== C ||
          o[22] !== x ||
          o[23] !== k ||
          o[24] !== y ||
          o[25] !== b ||
          o[26] !== M ||
          o[27] !== w ||
          o[28] !== P ||
          o[29] !== g
            ? ((n =
                null != P
                  ? (0, i.jsx)(ec, {
                      showOptionNumbers: w,
                      autoFocus: s,
                      disabled: j,
                      label: k,
                      format: "format" in P ? P.format : void 0,
                      maxLength: "maxLength" in P ? P.maxLength : void 0,
                      invalid: x,
                      multiple: "array" === p.schema.type,
                      options: (0, N.xZ)(p.schema),
                      value: g,
                      draft: v,
                      onDraftChange: b,
                      onChange: y,
                    })
                  : (0, i.jsx)(el, {
                      showOptionNumbers: w && !M,
                      autoFocus: s,
                      invalid: x,
                      multiple: "array" === p.schema.type,
                      options: M
                        ? [
                            {
                              const: "true",
                              title: C.formatMessage({
                                id: "composer.mcpFormElicitation.booleanYes",
                                defaultMessage: "Yes",
                                description: "An explicit true answer to a required boolean form property",
                              }),
                            },
                            {
                              const: "false",
                              title: C.formatMessage({
                                id: "composer.mcpFormElicitation.booleanNo",
                                defaultMessage: "No",
                                description: "An explicit false answer to a required boolean form property",
                              }),
                            },
                          ]
                        : (0, N.xZ)(p.schema),
                      value: M && "boolean" == typeof g ? String(g) : g,
                      onChange: M ? (e) => y("true" === e) : y,
                    })),
              (o[17] = s),
              (o[18] = v),
              (o[19] = j),
              (o[20] = p.schema),
              (o[21] = C),
              (o[22] = x),
              (o[23] = k),
              (o[24] = y),
              (o[25] = b),
              (o[26] = M),
              (o[27] = w),
              (o[28] = P),
              (o[29] = g),
              (o[30] = n))
            : (n = o[30]),
          o[31] !== O || o[32] !== k || o[33] !== e || o[34] !== t || o[35] !== n
            ? ((l = (0, i.jsxs)("fieldset", {
                "aria-label": k,
                className: "flex flex-col gap-1",
                children: [e, t, n, O],
              })),
              (o[31] = O),
              (o[32] = k),
              (o[33] = e),
              (o[34] = t),
              (o[35] = n),
              (o[36] = l))
            : (l = o[36]),
          l
        )
      }
      switch (p.schema.type) {
        case "string": {
          let e, t, n, l
          ;(o[37] !== A || o[38] !== k || o[39] !== S
            ? ((e =
                S &&
                (0, i.jsx)("label", {
                  htmlFor: A,
                  className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                  children: k,
                })),
              (o[37] = A),
              (o[38] = k),
              (o[39] = S),
              (o[40] = e))
            : (e = o[40]),
            o[41] !== F ? ((t = (0, i.jsx)(ef, { description: F, inset: !1 })), (o[41] = F), (o[42] = t)) : (t = o[42]))
          let a = "format" in p.schema ? p.schema.format : void 0,
            r = "maxLength" in p.schema ? p.schema.maxLength : void 0,
            c = "string" == typeof g ? g : ""
          return (
            o[43] !== s ||
            o[44] !== j ||
            o[45] !== A ||
            o[46] !== x ||
            o[47] !== k ||
            o[48] !== y ||
            o[49] !== r ||
            o[50] !== c ||
            o[51] !== a
              ? ((n = (0, i.jsx)(eo, {
                  id: A,
                  disabled: j,
                  autoFocus: s,
                  invalid: x,
                  label: k,
                  format: a,
                  maxLength: r,
                  value: c,
                  onChange: y,
                  onKeyDown: ep,
                })),
                (o[43] = s),
                (o[44] = j),
                (o[45] = A),
                (o[46] = x),
                (o[47] = k),
                (o[48] = y),
                (o[49] = r),
                (o[50] = c),
                (o[51] = a),
                (o[52] = n))
              : (n = o[52]),
            o[53] !== O || o[54] !== n || o[55] !== e || o[56] !== t
              ? ((l = (0, i.jsxs)("div", { className: "flex flex-col gap-1 px-2 text-sm", children: [e, t, n, O] })),
                (o[53] = O),
                (o[54] = n),
                (o[55] = e),
                (o[56] = t),
                (o[57] = l))
              : (l = o[57]),
            l
          )
        }
        case "boolean": {
          let e,
            t,
            n,
            l,
            a,
            r,
            c = !0 === g
          o[58] !== y || o[59] !== g ? ((e = () => y(!0 !== g)), (o[58] = y), (o[59] = g), (o[60] = e)) : (e = o[60])
          let d = !0 === g
          return (
            o[61] !== d
              ? ((t = (0, i.jsx)("span", {
                  className: "flex h-5 items-center",
                  children: (0, i.jsx)(G.PP, { selected: d, variant: "checkbox" }),
                })),
                (o[61] = d),
                (o[62] = t))
              : (t = o[62]),
            o[63] !== p.schema.title
              ? ((n =
                  null != p.schema.title &&
                  (0, i.jsx)("span", {
                    className: "min-w-0 text-sm font-medium wrap-anywhere",
                    children: p.schema.title,
                  })),
                (o[63] = p.schema.title),
                (o[64] = n))
              : (n = o[64]),
            o[65] !== s ||
            o[66] !== A ||
            o[67] !== x ||
            o[68] !== k ||
            o[69] !== t ||
            o[70] !== n ||
            o[71] !== c ||
            o[72] !== e
              ? ((l = (0, i.jsxs)(G.xu, {
                  accessibilityLabel: k,
                  autoFocus: s,
                  checked: c,
                  invalid: x,
                  name: A,
                  type: "checkbox",
                  onChange: e,
                  onKeyDown: em,
                  children: [t, n],
                })),
                (o[65] = s),
                (o[66] = A),
                (o[67] = x),
                (o[68] = k),
                (o[69] = t),
                (o[70] = n),
                (o[71] = c),
                (o[72] = e),
                (o[73] = l))
              : (l = o[73]),
            o[74] !== F ? ((a = (0, i.jsx)(ef, { description: F })), (o[74] = F), (o[75] = a)) : (a = o[75]),
            o[76] !== O || o[77] !== l || o[78] !== a
              ? ((r = (0, i.jsxs)("div", { className: "flex flex-col gap-1", children: [l, a, O] })),
                (o[76] = O),
                (o[77] = l),
                (o[78] = a),
                (o[79] = r))
              : (r = o[79]),
            r
          )
        }
        case "integer":
        case "number": {
          let e, t, n, l, a
          ;(o[80] !== k || o[81] !== S
            ? ((e =
                S &&
                (0, i.jsx)("div", {
                  className: "text-size-chat-sm font-medium wrap-anywhere text-default",
                  children: k,
                })),
              (o[80] = k),
              (o[81] = S),
              (o[82] = e))
            : (e = o[82]),
            o[83] !== F ? ((t = (0, i.jsx)(ef, { description: F, inset: !1 })), (o[83] = F), (o[84] = t)) : (t = o[84]))
          let r = x || void 0,
            c =
              "integer" === p.schema.type && null != p.schema.minimum ? Math.ceil(p.schema.minimum) : p.schema.minimum,
            d = "integer" === p.schema.type ? 1 : "any",
            u = "number" == typeof g || "string" == typeof g ? g : ""
          return (
            o[85] !== y ? ((n = (e) => y(e.currentTarget.value)), (o[85] = y), (o[86] = n)) : (n = o[86]),
            o[87] !== s ||
            o[88] !== p.schema.maximum ||
            o[89] !== k ||
            o[90] !== c ||
            o[91] !== d ||
            o[92] !== u ||
            o[93] !== n ||
            o[94] !== r
              ? ((l = (0, i.jsx)(Z.pd, {
                  autoFocus: s,
                  "aria-label": k,
                  "aria-invalid": r,
                  max: p.schema.maximum,
                  min: c,
                  step: d,
                  type: "number",
                  value: u,
                  onChange: n,
                  onKeyDown: eu,
                })),
                (o[87] = s),
                (o[88] = p.schema.maximum),
                (o[89] = k),
                (o[90] = c),
                (o[91] = d),
                (o[92] = u),
                (o[93] = n),
                (o[94] = r),
                (o[95] = l))
              : (l = o[95]),
            o[96] !== O || o[97] !== l || o[98] !== e || o[99] !== t
              ? ((a = (0, i.jsxs)("label", { className: "flex flex-col gap-1 px-2 text-sm", children: [e, t, l, O] })),
                (o[96] = O),
                (o[97] = l),
                (o[98] = e),
                (o[99] = t),
                (o[100] = a))
              : (a = o[100]),
            a
          )
        }
      }
    }
    function eu(e) {
      T(e, () => e.currentTarget.form?.requestSubmit())
    }
    function em(e) {
      T(e, () => e.currentTarget.click())
    }
    function ep(e) {
      "date" !== e.currentTarget.type && T(e, () => e.currentTarget.form?.requestSubmit())
    }
    function ef(e) {
      let t,
        n,
        a = (0, l.c)(5),
        { description: o, inset: s } = e
      if (null == o) return null
      let c = (void 0 === s || s) && "px-2"
      return (
        a[0] !== c
          ? ((t = (0, r.A)("text-size-chat-sm wrap-anywhere text-codex-description", c)), (a[0] = c), (a[1] = t))
          : (t = a[1]),
        a[2] !== o || a[3] !== t
          ? ((n = (0, i.jsx)("div", { className: t, children: o })), (a[2] = o), (a[3] = t), (a[4] = n))
          : (n = a[4]),
        n
      )
    }
    var eh = n("i5ac"),
      ex = n.n(eh),
      eg = n("Ug8F"),
      ev = n("dxKw"),
      eb = n("Bbed"),
      ey = n("GaA7"),
      ew = n("eGPX"),
      ej = n("YgCO"),
      eA = n("bnxy")
    function eC(e) {
      let t,
        n,
        a,
        o,
        s,
        c,
        d,
        u,
        m,
        p,
        f,
        h,
        x,
        g,
        v = (0, l.c)(63),
        {
          action: b,
          previewAction: y,
          metadata: w,
          layout: j,
          autoFocus: A,
          children: C,
          disabled: k,
          invalid: S,
          isPortrait: N,
          selected: F,
          highlighted: M,
          separatorBefore: E,
          title: I,
        } = e,
        P = void 0 === j ? "carousel" : j,
        L = void 0 !== N && N,
        O = void 0 !== M && M,
        z = "button" === e.type || "preview" === e.type
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { button: "button", preview: "button", static: "div", checkbox: "label", radio: "label" }), (v[0] = t))
        : (t = v[0])
      let D = t[e.type],
        _ = E && "ps-4"
      ;(v[1] !== _
        ? ((n = (0, r.A)("group/composer-attachment relative min-w-0 shrink-0 snap-start", _)), (v[1] = _), (v[2] = n))
        : (n = v[2]),
        v[3] !== E
          ? ((a =
              E &&
              (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "absolute start-0 top-0 h-34 border-s border-subtle",
              })),
            (v[3] = E),
            (v[4] = a))
          : (a = v[4]))
      let R = z && A,
        U = "carousel" === P ? "w-fit" : "w-full",
        V = "carousel" === P && "-m-1 p-1",
        B = k ? "cursor-default opacity-50" : "static" !== e.type && "cursor-interaction"
      v[5] !== B || v[6] !== U || v[7] !== V
        ? ((o = (0, r.A)(
            "group relative flex flex-col gap-1.5 rounded-2xl text-start select-none focus:outline-none",
            U,
            V,
            B,
          )),
          (v[5] = B),
          (v[6] = U),
          (v[7] = V),
          (v[8] = o))
        : (o = v[8])
      let H = z ? k : void 0,
        Q = z ? "button" : void 0,
        K = z ? e.onClick : void 0
      return (
        v[9] !== A ||
        v[10] !== k ||
        v[11] !== e.name ||
        v[12] !== e.onChange ||
        v[13] !== e.type ||
        v[14] !== e.value ||
        v[15] !== F
          ? ((s =
              "checkbox" === e.type || "radio" === e.type
                ? (0, i.jsx)("input", {
                    autoFocus: A,
                    checked: F,
                    className: "sr-only",
                    disabled: k,
                    name: e.name,
                    type: e.type,
                    value: e.value,
                    onChange: e.onChange,
                    onKeyDown: (t) => {
                      "checkbox" === e.type && T(t, () => t.currentTarget.click())
                    },
                  })
                : null),
            (v[9] = A),
            (v[10] = k),
            (v[11] = e.name),
            (v[12] = e.onChange),
            (v[13] = e.type),
            (v[14] = e.value),
            (v[15] = F),
            (v[16] = s))
          : (s = v[16]),
        v[17] !== k || v[18] !== O || v[19] !== S || v[20] !== L || v[21] !== P || v[22] !== e.type || v[23] !== F
          ? ((c = (0, r.A)(
              "relative overflow-hidden rounded-xl border ring-4 group-focus-visible:ring-ring group-has-[:focus-visible]:ring-ring",
              "button" === e.type ? "bg-surface-secondary" : "bg-surface shadow-sm",
              "standalone" === P && "h-40 w-full",
              "grid" === P && "w-full",
              "carousel" === P && "h-34",
              "button" === e.type && "flex flex-col items-center justify-center gap-2 text-secondary",
              "standalone" !== P && {
                "aspect-square": "button" === e.type,
                "aspect-[4/5]": "button" !== e.type && L,
                "aspect-video": "button" !== e.type && !L,
              },
              { "border-strong": F, "border-text-danger": !F && S, "border-default": !F && !S },
              {
                "ring-ring": O,
                "ring-border-strong": !O && F,
                "ring-text-danger/20": !O && !F && S,
                "ring-transparent": !O && !F && !S,
              },
              "static" !== e.type && "preview" !== e.type && !k && !F && !O && "group-hover:ring-border-subtle",
            )),
            (v[17] = k),
            (v[18] = O),
            (v[19] = S),
            (v[20] = L),
            (v[21] = P),
            (v[22] = e.type),
            (v[23] = F),
            (v[24] = c))
          : (c = v[24]),
        v[25] !== P || v[26] !== e.type || v[27] !== I
          ? ((d =
              "button" === e.type && "standalone" === P
                ? (0, i.jsx)("span", { className: "text-sm", children: I })
                : null),
            (v[25] = P),
            (v[26] = e.type),
            (v[27] = I),
            (v[28] = d))
          : (d = v[28]),
        v[29] !== w
          ? ((u =
              null == w
                ? null
                : (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-surface px-2 py-1.5 text-sm opacity-0 group-focus-within/composer-attachment:opacity-100 group-hover/composer-attachment:opacity-100",
                    children: w,
                  })),
            (v[29] = w),
            (v[30] = u))
          : (u = v[30]),
        v[31] !== b || v[32] !== F
          ? ((m = F
              ? (0, i.jsx)("span", {
                  className: (0, r.A)(
                    "absolute top-2 right-2 flex size-4 items-center justify-center rounded-full bg-primary-solid text-primary-solid shadow-sm",
                    null != b &&
                      "group-hover/composer-attachment:opacity-0 group-has-focus-visible/composer-attachment:opacity-0",
                  ),
                  children: (0, i.jsx)(q.ALZ, {}),
                })
              : null),
            (v[31] = b),
            (v[32] = F),
            (v[33] = m))
          : (m = v[33]),
        v[34] !== C || v[35] !== c || v[36] !== d || v[37] !== u || v[38] !== m
          ? ((p = (0, i.jsxs)("div", { className: c, children: [C, d, u, m] })),
            (v[34] = C),
            (v[35] = c),
            (v[36] = d),
            (v[37] = u),
            (v[38] = m),
            (v[39] = p))
          : (p = v[39]),
        v[40] !== P || v[41] !== e.type || v[42] !== I
          ? ((f =
              "button" === e.type && "standalone" === P
                ? null
                : (0, i.jsx)("div", {
                    className:
                      "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                    children: I,
                  })),
            (v[40] = P),
            (v[41] = e.type),
            (v[42] = I),
            (v[43] = f))
          : (f = v[43]),
        v[44] !== D ||
        v[45] !== o ||
        v[46] !== H ||
        v[47] !== Q ||
        v[48] !== K ||
        v[49] !== s ||
        v[50] !== p ||
        v[51] !== f ||
        v[52] !== R
          ? ((h = (0, i.jsxs)(D, {
              autoFocus: R,
              className: o,
              disabled: H,
              type: Q,
              onClick: K,
              children: [s, p, f],
            })),
            (v[44] = D),
            (v[45] = o),
            (v[46] = H),
            (v[47] = Q),
            (v[48] = K),
            (v[49] = s),
            (v[50] = p),
            (v[51] = f),
            (v[52] = R),
            (v[53] = h))
          : (h = v[53]),
        v[54] !== y || v[55] !== E
          ? ((x =
              null == y
                ? null
                : (0, i.jsx)("div", {
                    className: (0, r.A)(
                      "pointer-events-none absolute top-2 opacity-0 group-hover/composer-attachment:pointer-events-auto group-hover/composer-attachment:opacity-100 group-focus-within/composer-attachment:pointer-events-auto group-focus-within/composer-attachment:opacity-100",
                      E ? "start-6" : "start-2",
                    ),
                    children: y,
                  })),
            (v[54] = y),
            (v[55] = E),
            (v[56] = x))
          : (x = v[56]),
        v[57] !== b || v[58] !== h || v[59] !== x || v[60] !== n || v[61] !== a
          ? ((g = (0, i.jsxs)("div", { className: n, children: [a, h, x, b] })),
            (v[57] = b),
            (v[58] = h),
            (v[59] = x),
            (v[60] = n),
            (v[61] = a),
            (v[62] = g))
          : (g = v[62]),
        g
      )
    }
    var ek = n("JEWd"),
      eS = n("kSHG"),
      eN = n("BDAQ"),
      eF = n("ASxG"),
      eM = n("RmZI")
    let eE = eF.strictObject({
        arguments: eF.record(eF.string(), eF.json()).optional(),
        name: eM.Y,
        type: eF.literal("mcp_app_tool"),
      }),
      eI = eF.discriminatedUnion("type", [eE, eN.u$i])
    var eP = n("w7Qu"),
      eL = n("YvRg"),
      eO = n("t3y3"),
      eT = n("zUz7"),
      ez = n("a6Zv")
    let eD = eF.object({ target: eI })
    function e_(e) {
      let t,
        n,
        a,
        r,
        o,
        s,
        c,
        u,
        m,
        p,
        f,
        h,
        x,
        g,
        y = (0, l.c)(60),
        {
          option: w,
          hostId: j,
          layout: A,
          name: C,
          multiple: k,
          implicit: S,
          disabled: N,
          invalid: F,
          separatorBefore: M,
          onChange: E,
          onRemove: I,
          onPreview: P,
        } = e,
        L = (0, d.A)(),
        O = (0, ez.Y)()
      y[0] !== w ? ((t = (0, eT.p)(w)), (y[0] = w), (y[1] = t)) : (t = y[1])
      let T = t,
        z = w.title ?? w.name
      y[2] !== w._meta
        ? ((n = eS.RH.safeParse(w._meta?.["openai/thumbnail"] ?? w._meta?.["openai/preview"])),
          (y[2] = w._meta),
          (y[3] = n))
        : (n = y[3])
      let { data: D } = n
      y[4] !== w._meta ? ((a = eD.safeParse(w._meta?.["openai/preview"])), (y[4] = w._meta), (y[5] = a)) : (a = y[5])
      let { data: _ } = a
      y[6] !== w._meta || y[7] !== _?.target
        ? ((r =
            _?.target ??
            eI.safeParse(w._meta?.["openai/preview"]).data ??
            eI.safeParse(w._meta?.["openai/target"]).data),
          (y[6] = w._meta),
          (y[7] = _?.target),
          (y[8] = r))
        : (r = y[8])
      let q = r
      y[9] !== P || y[10] !== q || y[11] !== z
        ? ((o = null == q || null == P ? void 0 : () => P(q, z)), (y[9] = P), (y[10] = q), (y[11] = z), (y[12] = o))
        : (o = y[12])
      let R = o
      y[13] !== R
        ? ((s = null == R ? { type: "static" } : { type: "preview", onClick: R }), (y[13] = R), (y[14] = s))
        : (s = y[14])
      let U = s
      y[15] !== N || y[16] !== S || y[17] !== R
        ? ((c =
            S || null == R
              ? null
              : (0, i.jsx)(b.$, {
                  color: "outlineSurface",
                  radius: "full",
                  size: "composer",
                  disabled: N,
                  onClick: R,
                  children: (0, i.jsx)(v.A, {
                    id: "composer.mcpFormElicitation.preview",
                    defaultMessage: "Preview",
                    description: "Open expanded details for a form option",
                  }),
                })),
          (y[15] = N),
          (y[16] = S),
          (y[17] = R),
          (y[18] = c))
        : (c = y[18])
      let V = O ? T?.logoDarkUrl : T?.logoUrl
      y[19] !== w.mimeType || y[20] !== V
        ? ((u = (0, i.jsx)(ei, { layout: "icon", mimeType: w.mimeType, src: V })),
          (y[19] = w.mimeType),
          (y[20] = V),
          (y[21] = u))
        : (u = y[21])
      let B = w.mimeType ?? z
      ;(y[22] !== B
        ? ((m = (0, i.jsx)("span", { className: "truncate", children: B })), (y[22] = B), (y[23] = m))
        : (m = y[23]),
        y[24] !== m || y[25] !== u
          ? ((p = (0, i.jsxs)(i.Fragment, { children: [u, m] })), (y[24] = m), (y[25] = u), (y[26] = p))
          : (p = y[26]),
        y[27] !== N || y[28] !== L || y[29] !== I || y[30] !== z
          ? ((f =
              N || null == I
                ? void 0
                : (0, i.jsx)(eL.a, {
                    className: "top-2 right-2",
                    size: "composer",
                    ariaLabel: L.formatMessage(
                      {
                        id: "composer.openAIForm.removeFile",
                        defaultMessage: "Remove {filename}",
                        description: "Accessible label for removing a resource from an elicitation form",
                      },
                      { filename: z },
                    ),
                    onRemove: I,
                  })),
            (y[27] = N),
            (y[28] = L),
            (y[29] = I),
            (y[30] = z),
            (y[31] = f))
          : (f = y[31]))
      let H = !S && w.selected
      return (
        y[32] !== S || y[33] !== k || y[34] !== C || y[35] !== E || y[36] !== w.uri || y[37] !== U
          ? ((h = S ? U : { type: k ? "checkbox" : "radio", name: C, value: w.uri, onChange: E }),
            (y[32] = S),
            (y[33] = k),
            (y[34] = C),
            (y[35] = E),
            (y[36] = w.uri),
            (y[37] = U),
            (y[38] = h))
          : (h = y[38]),
        y[39] !== j ||
        y[40] !== T?.logoDarkUrl ||
        y[41] !== T?.logoUrl ||
        y[42] !== O ||
        y[43] !== w.localPath ||
        y[44] !== w.mimeType ||
        y[45] !== w.name ||
        y[46] !== D?.src
          ? ((x =
              null == w.localPath
                ? (0, i.jsx)(ei, {
                    layout: D?.src == null ? "card-icon" : "card",
                    mimeType: w.mimeType,
                    src: D?.src ?? (O ? T?.logoDarkUrl : T?.logoUrl),
                  })
                : (0, i.jsx)(eO.S, {
                    hostId: j,
                    imageFit: "scale-down",
                    path: w.localPath,
                    importKind: (0, eP.Yg)(w.name),
                    fallback: (0, i.jsx)(ei, { layout: "card", mimeType: w.mimeType, src: void 0 }),
                  })),
            (y[39] = j),
            (y[40] = T?.logoDarkUrl),
            (y[41] = T?.logoUrl),
            (y[42] = O),
            (y[43] = w.localPath),
            (y[44] = w.mimeType),
            (y[45] = w.name),
            (y[46] = D?.src),
            (y[47] = x))
          : (x = y[47]),
        y[48] !== N ||
        y[49] !== F ||
        y[50] !== A ||
        y[51] !== M ||
        y[52] !== p ||
        y[53] !== f ||
        y[54] !== H ||
        y[55] !== h ||
        y[56] !== x ||
        y[57] !== c ||
        y[58] !== z
          ? ((g = (0, i.jsx)(eC, {
              layout: A,
              previewAction: c,
              metadata: p,
              action: f,
              autoFocus: !1,
              disabled: N,
              invalid: F,
              selected: H,
              separatorBefore: M,
              title: z,
              ...h,
              children: x,
            })),
            (y[48] = N),
            (y[49] = F),
            (y[50] = A),
            (y[51] = M),
            (y[52] = p),
            (y[53] = f),
            (y[54] = H),
            (y[55] = h),
            (y[56] = x),
            (y[57] = c),
            (y[58] = z),
            (y[59] = g))
          : (g = y[59]),
        g
      )
    }
    let eq = (0, eb._)(async () => (await n.e(525677).then(n.bind(n, "OMbd"))).FileOptionsDialog)
    function eR(e) {
      let t,
        n,
        a,
        r,
        s,
        u,
        m,
        p,
        f,
        x,
        g,
        y,
        w,
        j,
        A,
        k,
        S,
        N = (0, l.c)(57),
        {
          field: F,
          disabled: M,
          expanded: E,
          hideDescription: I,
          showTitle: P,
          hostId: L,
          invalid: O,
          name: T,
          options: z,
          required: D,
          onChange: _,
          onPickingChange: R,
          onPickFiles: U,
          onCloseExpanded: V,
          onPreview: B,
          onViewAll: H,
        } = e,
        Q = void 0 !== M && M,
        G = void 0 !== I && I,
        Z = void 0 !== P && P
      ;(0, o.gh)(C.u)
      let W = (0, d.A)(),
        J = (0, ev._)(),
        Y = (0, o.Ul)(ew.x),
        $ = (0, c.useRef)(null),
        X = (0, c.useRef)(null)
      ;(N[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => X.current?.abort()), (n = []), (N[0] = t), (N[1] = n))
        : ((t = N[0]), (n = N[1])),
        (0, c.useEffect)(t, n))
      let [ee, et] = (0, c.useState)(!1),
        [en, ei] = (0, c.useState)(!1),
        [el, ea] = (0, c.useState)(!1),
        [eo, es] = (0, c.useState)(null),
        ec = F["x-openai-input"],
        ed = ec.userOptions?.kind ?? "file",
        eu = (0, ej.U)("file" === ed ? ec.userOptions?.accept : void 0)
      N[2] !== F.title || N[3] !== T ? ((a = F.title ?? K()(T)), (N[2] = F.title), (N[3] = T), (N[4] = a)) : (a = N[4])
      let em = a,
        ep = "array" === F.type,
        ef = ep && "implicit" === ec.selection,
        eh =
          null == U &&
          !Q &&
          !en &&
          null != ec.userOptions &&
          "local" === L &&
          window.electronBridge?.getPathForFile != null
      ;(N[5] !== F.minItems || N[6] !== F.type || N[7] !== D
        ? ((r = 0),
          D && (r = "array" === F.type ? (F.minItems ?? 0) : 1),
          (N[5] = F.minItems),
          (N[6] = F.type),
          (N[7] = D),
          (N[8] = r))
        : (r = N[8]),
        N[9] !== ec.options ? ((s = new Set(ec.options.map(eH))), (N[9] = ec.options), (N[10] = s)) : (s = N[10]))
      let eb = s
      N[11] !== eb ? ((u = (e) => !eb.has(e.uri)), (N[11] = eb), (N[12] = u)) : (u = N[12])
      let eS = z.filter(u)
      N[13] !== eb ? ((m = (e) => eb.has(e.uri)), (N[13] = eb), (N[14] = m)) : (m = N[14])
      let eN = [...eS, ...z.filter(m)],
        eF = (e) => {
          Array.from($.current?.querySelectorAll("input") ?? [])
            .find((t) => t.value === e)
            ?.parentElement?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: Y ? "instant" : "smooth" })
        },
        eM = () => {
          document.activeElement === document.body && $.current?.closest("form")?.focus()
        }
      N[15] !== ep || N[16] !== _ || N[17] !== z
        ? ((p = (e, t) => {
            if (t.aborted || 0 === e.length) return
            let n = new Set(e.map(eB))
            _(
              ex()([...z, ...e.map(eV)], "uri").map((t) => ({
                ...t,
                selected: ep ? t.selected || n.has(t.uri) : t.uri === e[0].uri,
              })),
            )
          }),
          (N[15] = ep),
          (N[16] = _),
          (N[17] = z),
          (N[18] = p))
        : (p = N[18])
      let eE = p,
        eI = (e) => {
          let t = !1,
            n = () => {
              !t && ((t = !0), e.signal.removeEventListener("abort", n), R?.(!1), e.signal.aborted || (ei(!1), eM()))
            }
          return (e.signal.addEventListener("abort", n, { once: !0 }), ei(!0), es(null), R?.(!0), n)
        },
        eP = async (e, t) => {
          if (Q || en || null == ec.userOptions || 0 === e.length) return
          let n = eI(t),
            i = Error("File type is not accepted")
          await Promise.all(
            e.map(async (e) => {
              let { appServerPath: t, fsPath: n, label: l } = e,
                a = await ey.appServices.workspaceFiles.getMetadata?.({ hostId: L, path: n })
              if (a?.kind !== ed) throw Error("Selection does not match the requested kind")
              if ("file" === a.kind && !(0, ej.B)(n, eu)) throw i
              return { uri: (0, eA.w8)(t ?? n), localPath: n, name: (0, eA.Q0)(n), title: l, selected: !0 }
            }),
          )
            .then((e) => eE(e, t.signal))
            .catch((e) => {
              t.signal.aborted || es(e === i ? "type" : "selection")
            })
            .finally(n)
        }
      N[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsx)(v.A, {
            id: "composer.openAIForm.uploadTile",
            defaultMessage: "Upload",
            description: "Label below the upload tile in a file picker carousel",
          })),
          (N[19] = f))
        : (f = N[19])
      let eL = f
      if ("directory" === ed) {
        let e
        ;(N[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(v.A, {
              id: "composer.openAIForm.addFolder",
              defaultMessage: "Choose folder",
              description: "Button to add a user-selected directory to an elicitation form",
            })),
            (N[20] = e))
          : (e = N[20]),
          (eL = e))
      } else if (0 === z.length) {
        let e
        ;(N[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(v.A, {
              id: "composer.openAIForm.addFiles",
              defaultMessage: "Upload files",
              description: "Button to add user-selected files to an elicitation form",
            })),
            (N[21] = e))
          : (e = N[21]),
          (eL = e))
      }
      let eO =
          null == ec.userOptions
            ? null
            : (0, i.jsx)(eC, {
                autoFocus: !1,
                highlighted: ee,
                layout: 0 === z.length ? "standalone" : "carousel",
                disabled: Q || en,
                invalid: !1,
                selected: !1,
                title: eL,
                type: "button",
                onClick: () => {
                  X.current?.abort()
                  let e = new AbortController()
                  if (((X.current = e), null != U)) {
                    let t = eI(e)
                    U(e.signal)
                      .then((t) => eE(t, e.signal))
                      .catch(() => {
                        e.signal.aborted || es("selection")
                      })
                      .finally(t)
                    return
                  }
                  "local" !== L
                    ? ea(!0)
                    : J({ accept: "file" === ed ? ec.userOptions?.accept : void 0, kind: ed, allowMultiple: ep })
                        .then((t) => {
                          if (!e.signal.aborted) return eP(t, e)
                        })
                        .catch(() => {
                          e.signal.aborted || es("selection")
                        })
                        .finally(() => {
                          e.signal.aborted || eM()
                        })
                },
                children:
                  "directory" === ed
                    ? (0, i.jsx)(q.nex, { className: "text-tertiary" })
                    : (0, i.jsx)(q._Ui, { className: "text-tertiary" }),
              }),
        eT = (e, t, n) =>
          (0, i.jsx)(
            e_,
            {
              option: e,
              hostId: L,
              layout: n,
              name: "grid" === n ? `${T}-expanded` : T,
              multiple: ep,
              implicit: ef,
              disabled: Q || en,
              invalid: O || null != eo,
              separatorBefore: "carousel" === n && 0 === t && null != eO,
              onChange: () => {
                ;(_(z.map((t) => ({ ...t, selected: t.uri === e.uri ? !ep || !t.selected : ep && t.selected }))),
                  "carousel" === n && eF(e.uri))
              },
              onRemove:
                !ef || (null == ec.userOptions && z.length <= 1) || (eb.has(e.uri) && z.length <= r)
                  ? void 0
                  : () => _(z.filter((t) => t.uri !== e.uri)),
              onPreview:
                null == B
                  ? void 0
                  : (e, t) => {
                      ;(V?.(), B(e, t))
                    },
            },
            e.uri,
          )
      N[22] !== eh
        ? ((x = (e) => {
            ;(0, h.aA)(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              "dragenter" === e.type ? et(eh) : (e.dataTransfer.dropEffect = eh ? "copy" : "none"))
          }),
          (N[22] = eh),
          (N[23] = x))
        : (x = N[23])
      let ez = x
      N[24] !== F.description || N[25] !== F.title || N[26] !== G || N[27] !== Z
        ? ((g =
            (Z && F.title) || (!G && F.description)
              ? (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col gap-1 wrap-anywhere",
                  children: [
                    Z &&
                      F.title &&
                      (0, i.jsx)("div", { className: "text-size-chat-sm font-medium text-default", children: F.title }),
                    !G &&
                      F.description &&
                      (0, i.jsx)("div", {
                        className: "text-size-chat-sm text-codex-description",
                        children: F.description,
                      }),
                  ],
                })
              : null),
          (N[24] = F.description),
          (N[25] = F.title),
          (N[26] = G),
          (N[27] = Z),
          (N[28] = g))
        : (g = N[28])
      let eD = g
      N[29] !== eD || N[30] !== H
        ? ((y =
            null != eD || null != H
              ? (0, i.jsxs)("div", {
                  className: "flex items-start gap-3",
                  children: [
                    eD,
                    null != H &&
                      (0, i.jsxs)(b.$, {
                        className: "ms-auto shrink-0",
                        color: "outlineSurface",
                        radius: "full",
                        size: "composer",
                        onClick: H,
                        children: [
                          (0, i.jsx)(q.TVU, {}),
                          (0, i.jsx)(v.A, {
                            id: "composer.openAIForm.viewAll",
                            defaultMessage: "View all",
                            description: "Open a searchable grid of all files for the current form field",
                          }),
                        ],
                      }),
                  ],
                })
              : null),
          (N[29] = eD),
          (N[30] = H),
          (N[31] = y))
        : (y = N[31])
      let eR = y
      N[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (e) => {
            ;(e.stopPropagation(),
              (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || et(!1))
          }),
          (N[32] = w))
        : (w = N[32])
      let eQ = (e) => {
          if (!(0, h.aA)(e.dataTransfer) || (e.preventDefault(), e.stopPropagation(), et(!1), !eh)) return
          let t = (0, h.FA)(Array.from(e.dataTransfer.files), window.electronBridge?.getPathForFile, e.dataTransfer)
          if (0 === t.length || (!ep && t.length > 1)) return void es("selection")
          X.current?.abort()
          let n = new AbortController()
          ;((X.current = n), eP(t, n))
        },
        eK =
          0 === z.length && null != eO
            ? (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 px-4",
                role: "group",
                "aria-label": em,
                children: [eR, eO],
              })
            : (0, i.jsxs)(ek.i, {
                ariaInvalid: O || null != eo,
                ariaLabel: em,
                backLabel: W.formatMessage({
                  id: "composer.openAIForm.previousFiles",
                  defaultMessage: "Show previous files",
                  description: "Accessible label for scrolling a form file picker backward",
                }),
                forwardLabel: W.formatMessage({
                  id: "composer.openAIForm.moreFiles",
                  defaultMessage: "Show more files",
                  description: "Accessible label for scrolling a form file picker forward",
                }),
                header: eR,
                role: ep ? "group" : "radiogroup",
                shouldUseReducedMotion: Y,
                children: [eO, eN.map((e, t) => eT(e, t, "carousel"))],
              }),
        eG =
          void 0 !== E && E && null != V
            ? (0, i.jsx)(eq, {
                title: F.title,
                accessibilityLabel: em,
                multiple: ep,
                options: eN,
                renderOption: (e, t) => eT(e, t, "grid"),
                onClose: V,
                onOptionActivate: eF,
                onRestoreFocus: () => {
                  let e =
                    $.current?.querySelector("input:not(:disabled), button:not(:disabled)") ??
                    $.current?.closest("form")?.querySelector('button[type="submit"]')
                  e?.focus()
                },
              })
            : null
      return (
        N[33] !== eu ||
        N[34] !== eP ||
        N[35] !== L ||
        N[36] !== ed ||
        N[37] !== ep ||
        N[38] !== el ||
        N[39] !== eM ||
        N[40] !== ea
          ? ((j = el
              ? (0, i.jsx)(eg.RemoteFilePickerDialog, {
                  acceptedFileExtensions: eu,
                  hostId: L,
                  kind: ed,
                  multiple: ep,
                  onClose: () => ea(!1),
                  onRestoreFocus: eM,
                  onSelect: (e) => {
                    let t = X.current
                    null == t || t.signal.aborted || eP(e.map(eU), t)
                  },
                })
              : null),
            (N[33] = eu),
            (N[34] = eP),
            (N[35] = L),
            (N[36] = ed),
            (N[37] = ep),
            (N[38] = el),
            (N[39] = eM),
            (N[40] = ea),
            (N[41] = j))
          : (j = N[41]),
        N[42] !== eo
          ? ((A = eo
              ? (0, i.jsx)("div", {
                  className: "px-4 text-size-chat-sm text-danger",
                  role: "alert",
                  children:
                    "selection" === eo
                      ? (0, i.jsx)(v.A, {
                          id: "composer.openAIForm.fileSelectionFailed",
                          defaultMessage: "These files or folders could not be added",
                          description:
                            "Error when selected files or folders cannot be accessed or do not match the form's requested kind or number of items",
                        })
                      : (0, i.jsx)(v.A, {
                          id: "composer.openAIForm.fileTypeRejected",
                          defaultMessage: "Choose a file of an allowed type",
                          description:
                            "Error for a file whose type does not match the file types accepted by the picker",
                        }),
                })
              : null),
            (N[42] = eo),
            (N[43] = A))
          : (A = N[43]),
        N[44] !== F || N[45] !== O
          ? ((k = O
              ? (0, i.jsx)("div", {
                  className: "px-4 text-size-chat-sm text-danger",
                  children: (0, i.jsx)(er, { schema: F }),
                })
              : null),
            (N[44] = F),
            (N[45] = O),
            (N[46] = k))
          : (k = N[46]),
        N[47] !== $ ||
        N[48] !== ez ||
        N[49] !== w ||
        N[50] !== eQ ||
        N[51] !== eK ||
        N[52] !== eG ||
        N[53] !== j ||
        N[54] !== A ||
        N[55] !== k
          ? ((S = (0, i.jsxs)("div", {
              ref: $,
              className: "flex w-full min-w-0 flex-col gap-2",
              "data-mcp-form-file-drop": !0,
              onDragEnter: ez,
              onDragOver: ez,
              onDragLeave: w,
              onDrop: eQ,
              children: [eK, eG, j, A, k],
            })),
            (N[47] = $),
            (N[48] = ez),
            (N[49] = w),
            (N[50] = eQ),
            (N[51] = eK),
            (N[52] = eG),
            (N[53] = j),
            (N[54] = A),
            (N[55] = k),
            (N[56] = S))
          : (S = N[56]),
        S
      )
    }
    function eU(e) {
      return { path: e, fsPath: e, label: (0, eA.Q0)(e) }
    }
    function eV(e) {
      return { ...e, selected: !0 }
    }
    function eB(e) {
      return e.uri
    }
    function eH(e) {
      return e.uri
    }
    var eQ = n("iJY0")
    let eK = (0, eQ.a)({
        name: "document-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 4.419922, y: 3.253174, width: 19.160156, height: 21.493164 },
          visualBounds: { x: 4.419922, y: 3.253174, width: 19.160156, height: 21.493164 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.419922, y: 3.253174, width: 19.160156, height: 21.493164 },
          center: { x: 14, y: 13.999756 },
          insets: { top: 3.253174, right: 4.419922, bottom: 3.253662, left: 4.419922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 13.999756 }, foreground: { x: 14, y: 13.999756 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6338 3.25317C17.7821 3.25323 18.8833 3.70974 19.6953 4.52173L22.3115 7.13794C23.1235 7.94992 23.58 9.05115 23.5801 10.1995V20.4163C23.5801 22.8077 21.6414 24.7463 19.25 24.7463H8.75C6.35861 24.7463 4.41992 22.8077 4.41992 20.4163V7.58325C4.41992 5.19186 6.35861 3.25317 8.75 3.25317H16.6338ZM8.75 4.91333C7.2754 4.91333 6.08008 6.10865 6.08008 7.58325V20.4163C6.08008 21.8909 7.2754 23.0862 8.75 23.0862H19.25C20.7246 23.0862 21.9199 21.8909 21.9199 20.4163V11.9133H18.333C16.7702 11.9132 15.5029 10.6461 15.5029 9.08325V4.91333H8.75ZM17.1631 9.08325C17.1631 9.72934 17.6869 10.253 18.333 10.2532H21.9199V10.1995C21.9199 9.49141 21.6384 8.81244 21.1377 8.31177L18.5215 5.69556C18.1474 5.32151 17.6739 5.06949 17.1631 4.96606V9.08325Z" fill="currentColor"/>',
      }),
      eG = (0, eQ.a)({
        name: "plus-md-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 4.669922, y: 4.669922, width: 18.660156, height: 18.660156 },
          visualBounds: { x: 4.669922, y: 4.669922, width: 18.660156, height: 18.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.669922, y: 4.669922, width: 18.660156, height: 18.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 4.669922, right: 4.669922, bottom: 4.669922, left: 4.669922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path d="M14 4.66992C14.4584 4.66992 14.8301 5.0416 14.8301 5.5V13.1699H22.5C22.9584 13.1699 23.3301 13.5416 23.3301 14C23.3301 14.4584 22.9584 14.8301 22.5 14.8301H14.8301V22.5C14.8301 22.9584 14.4584 23.3301 14 23.3301C13.5416 23.3301 13.1699 22.9584 13.1699 22.5V14.8301H5.5C5.0416 14.8301 4.66992 14.4584 4.66992 14C4.66992 13.5416 5.0416 13.1699 5.5 13.1699H13.1699V5.5C13.1699 5.0416 13.5416 4.66992 14 4.66992Z" fill="currentColor"/>',
      })
    function eZ(e) {
      let t,
        n,
        a,
        s,
        u,
        m,
        p,
        f,
        h,
        x,
        g = (0, l.c)(56),
        {
          autoFocus: b,
          field: y,
          hideLabel: w,
          hostId: j,
          invalid: A,
          name: C,
          value: k,
          onChange: S,
          onPickFile: N,
        } = e,
        F = void 0 !== w && w,
        M = (0, d.A)(),
        I = (0, ev._)(),
        P = (0, o.Ul)(ew.x),
        [L, O] = (0, c.useState)(!1),
        [T, z] = (0, c.useState)(!1),
        D = T ? "aspect-[4/5]" : "aspect-video"
      g[0] !== y.title || g[1] !== C ? ((t = y.title ?? K()(C)), (g[0] = y.title), (g[1] = C), (g[2] = t)) : (t = g[2])
      let _ = t,
        q = null != y.file && (0, E.TO)(y, k) && !y.items.some((e) => e.id === k) ? k : null
      if (
        (g[3] !== M
          ? ((n = M.formatMessage({
              id: "composer.imagePicker.previous",
              defaultMessage: "Show previous templates",
              description: "Accessible label for scrolling an image picker backward",
            })),
            (g[3] = M),
            (g[4] = n))
          : (n = g[4]),
        g[5] !== M
          ? ((a = M.formatMessage({
              id: "composer.imagePicker.next",
              defaultMessage: "Show more templates",
              description: "Accessible label for scrolling an image picker forward",
            })),
            (g[5] = M),
            (g[6] = a))
          : (a = g[6]),
        g[7] !== y.description || g[8] !== y.title || g[9] !== F
          ? ((s = F
              ? null
              : (0, i.jsxs)("div", {
                  className: "flex flex-col gap-1 wrap-anywhere",
                  children: [
                    y.title && (0, i.jsx)("div", { className: "text-sm font-medium", children: y.title }),
                    y.description && (0, i.jsx)("div", { className: "text-xs text-tertiary", children: y.description }),
                  ],
                })),
            (g[7] = y.description),
            (g[8] = y.title),
            (g[9] = F),
            (g[10] = s))
          : (s = g[10]),
        g[11] !== y.file ||
        g[12] !== y.title ||
        g[13] !== j ||
        g[14] !== A ||
        g[15] !== S ||
        g[16] !== N ||
        g[17] !== I ||
        g[18] !== D ||
        g[19] !== q
          ? ((u =
              null == y.file
                ? null
                : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("button", {
                      className:
                        "group -m-1 flex w-fit shrink-0 cursor-interaction snap-start flex-col gap-1.5 rounded-2xl p-1 text-start select-none",
                      type: "button",
                      onClick: () => {
                        null != N
                          ? N().then((e) => {
                              null != e && S(e)
                            })
                          : "local" !== j
                            ? O(!0)
                            : I({
                                accept: y.file?.accept,
                                allowMultiple: !1,
                                pickerTitle: y.file?.title ?? y.title,
                              }).then((e) => {
                                let [t] = e
                                null != t && S((0, eA.w8)(t.fsPath))
                              })
                      },
                      children: [
                        (0, i.jsx)("div", {
                          className: (0, r.A)(
                            "flex h-34 items-center justify-center overflow-hidden rounded-xl border bg-surface shadow-sm ring-4 group-focus-within:ring-border-strong",
                            D,
                            null == q
                              ? "border-default ring-transparent group-hover:ring-border-subtle"
                              : "border-strong ring-border-strong",
                            A && null == q && "border-text-danger ring-text-danger/20",
                          ),
                          children:
                            null == q
                              ? (0, i.jsx)(V.I, { className: "text-secondary", asset: eG, "aria-hidden": !0 })
                              : (0, i.jsxs)("div", {
                                  className: "flex max-w-full flex-col items-center gap-2 px-4 text-secondary",
                                  children: [
                                    (0, i.jsx)(V.I, { asset: eK, "aria-hidden": !0 }),
                                    (0, i.jsx)("span", {
                                      className: "max-w-full truncate text-sm",
                                      children: (0, eA.Q0)(decodeURIComponent(new URL(q).pathname)),
                                    }),
                                  ],
                                }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "w-0 min-w-full truncate ps-0.5 pe-2 pb-1 text-sm leading-5 font-normal tracking-normal text-secondary",
                          children:
                            y.file.title ??
                            (0, i.jsx)(v.A, {
                              id: "composer.imagePicker.chooseFile",
                              defaultMessage: "Choose a file",
                              description:
                                "Label for choosing a local file instead of a predefined image-picker option",
                            }),
                        }),
                      ],
                    }),
                  })),
            (g[11] = y.file),
            (g[12] = y.title),
            (g[13] = j),
            (g[14] = A),
            (g[15] = S),
            (g[16] = N),
            (g[17] = I),
            (g[18] = D),
            (g[19] = q),
            (g[20] = u))
          : (u = g[20]),
        g[21] !== b || g[22] !== y.items || g[23] !== A || g[24] !== T || g[25] !== C || g[26] !== S || g[27] !== k)
      ) {
        let e
        ;(g[29] !== b || g[30] !== A || g[31] !== T || g[32] !== C || g[33] !== S || g[34] !== k
          ? ((e = (e, t) =>
              (0, i.jsx)(
                eC,
                {
                  autoFocus: b && 0 === t,
                  invalid: A,
                  isPortrait: T,
                  name: C,
                  selected: k === e.id,
                  title: e.title,
                  type: "radio",
                  value: e.id,
                  onChange: () => S(e.id),
                  children: (0, i.jsx)("img", {
                    alt: "",
                    className: "block h-full w-full object-scale-down",
                    decoding: "async",
                    draggable: !1,
                    loading: "lazy",
                    onLoad:
                      0 === t
                        ? (e) => {
                            z(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)
                          }
                        : void 0,
                    src: e.image,
                  }),
                },
                e.id,
              )),
            (g[29] = b),
            (g[30] = A),
            (g[31] = T),
            (g[32] = C),
            (g[33] = S),
            (g[34] = k),
            (g[35] = e))
          : (e = g[35]),
          (m = y.items.map(e)),
          (g[21] = b),
          (g[22] = y.items),
          (g[23] = A),
          (g[24] = T),
          (g[25] = C),
          (g[26] = S),
          (g[27] = k),
          (g[28] = m))
      } else m = g[28]
      return (
        g[36] !== A ||
        g[37] !== P ||
        g[38] !== n ||
        g[39] !== a ||
        g[40] !== s ||
        g[41] !== u ||
        g[42] !== m ||
        g[43] !== _
          ? ((p = (0, i.jsxs)(ek.i, {
              ariaInvalid: A,
              ariaLabel: _,
              backLabel: n,
              forwardLabel: a,
              header: s,
              role: "radiogroup",
              shouldUseReducedMotion: P,
              children: [u, m],
            })),
            (g[36] = A),
            (g[37] = P),
            (g[38] = n),
            (g[39] = a),
            (g[40] = s),
            (g[41] = u),
            (g[42] = m),
            (g[43] = _),
            (g[44] = p))
          : (p = g[44]),
        g[45] !== j || g[46] !== L || g[47] !== S
          ? ((f = L
              ? (0, i.jsx)(eg.RemoteFilePickerDialog, {
                  hostId: j,
                  multiple: !1,
                  onClose: () => O(!1),
                  onSelect: (e) => {
                    let t = e[0]
                    null != t && S((0, eA.w8)(t))
                  },
                })
              : null),
            (g[45] = j),
            (g[46] = L),
            (g[47] = S),
            (g[48] = f))
          : (f = g[48]),
        g[49] !== y || g[50] !== A
          ? ((h = A
              ? (0, i.jsx)("div", {
                  className: "px-4 text-size-chat-sm text-danger",
                  children: (0, i.jsx)(er, { schema: y }),
                })
              : null),
            (g[49] = y),
            (g[50] = A),
            (g[51] = h))
          : (h = g[51]),
        g[52] !== h || g[53] !== p || g[54] !== f
          ? ((x = (0, i.jsxs)("div", { className: "flex w-full min-w-0 flex-col gap-2", children: [p, f, h] })),
            (g[52] = h),
            (g[53] = p),
            (g[54] = f),
            (g[55] = x))
          : (x = g[55]),
        x
      )
    }
    function eW(e) {
      let t,
        n,
        a,
        o,
        s = (0, l.c)(72),
        {
          autoFocus: c,
          isOnlyField: d,
          disabled: u,
          interactionDisabled: m,
          field: p,
          draft: f,
          expanded: h,
          hostId: x,
          invalid: g,
          metadataInHeader: v,
          onCloseExpanded: b,
          onDraftChange: y,
          onValueChange: w,
          onPickLegacyFile: j,
          onPickingChange: A,
          onPickFiles: C,
          onPreview: k,
          onViewAll: S,
        } = e
      s[0] !== p.schema ? ((t = (0, M.Hl)(p.schema) || (0, E.Pi)(p.schema)), (s[0] = p.schema), (s[1] = t)) : (t = s[1])
      let N = t,
        { name: F, schema: I, required: P } = p
      if ((0, M.Hl)(I)) {
        let e,
          t,
          l,
          a = !v,
          r = f.fileOptions[F]
        ;(s[2] !== F || s[3] !== y
          ? ((e = (e) => y((t) => ({ ...t, fileOptions: { ...t.fileOptions, [F]: e } }), F)),
            (s[2] = F),
            (s[3] = y),
            (s[4] = e))
          : (e = s[4]),
          s[5] !== F || s[6] !== C
            ? ((t = null == C ? void 0 : (e) => C(F, e)), (s[5] = F), (s[6] = C), (s[7] = t))
            : (t = s[7]),
          s[8] !== u ||
          s[9] !== h ||
          s[10] !== F ||
          s[11] !== x ||
          s[12] !== g ||
          s[13] !== v ||
          s[14] !== b ||
          s[15] !== A ||
          s[16] !== k ||
          s[17] !== S ||
          s[18] !== P ||
          s[19] !== I ||
          s[20] !== a ||
          s[21] !== r ||
          s[22] !== e ||
          s[23] !== t
            ? ((l = (0, i.jsx)(eR, {
                field: I,
                disabled: u,
                expanded: h,
                hideDescription: v,
                showTitle: a,
                onCloseExpanded: b,
                onViewAll: S,
                hostId: x,
                invalid: g,
                name: F,
                options: r,
                required: P,
                onPreview: k,
                onChange: e,
                onPickingChange: A,
                onPickFiles: t,
              })),
              (s[8] = u),
              (s[9] = h),
              (s[10] = F),
              (s[11] = x),
              (s[12] = g),
              (s[13] = v),
              (s[14] = b),
              (s[15] = A),
              (s[16] = k),
              (s[17] = S),
              (s[18] = P),
              (s[19] = I),
              (s[20] = a),
              (s[21] = r),
              (s[22] = e),
              (s[23] = t),
              (s[24] = l))
            : (l = s[24]),
          (n = l))
      } else if ((0, E.Pi)(I)) {
        let e,
          t,
          l,
          a = f.values[F]
        ;(s[25] !== F || s[26] !== w ? ((e = (e) => w(F, e)), (s[25] = F), (s[26] = w), (s[27] = e)) : (e = s[27]),
          s[28] !== F || s[29] !== j
            ? ((t = null == j ? void 0 : () => j(F)), (s[28] = F), (s[29] = j), (s[30] = t))
            : (t = s[30]),
          s[31] !== c ||
          s[32] !== F ||
          s[33] !== x ||
          s[34] !== g ||
          s[35] !== v ||
          s[36] !== I ||
          s[37] !== a ||
          s[38] !== e ||
          s[39] !== t
            ? ((l = (0, i.jsx)(eZ, {
                autoFocus: c,
                field: I,
                hideLabel: v,
                hostId: x,
                invalid: g,
                name: F,
                value: a,
                onChange: e,
                onPickFile: t,
              })),
              (s[31] = c),
              (s[32] = F),
              (s[33] = x),
              (s[34] = g),
              (s[35] = v),
              (s[36] = I),
              (s[37] = a),
              (s[38] = e),
              (s[39] = t),
              (s[40] = l))
            : (l = s[40]),
          (n = l))
      } else {
        let e, t, l, a
        s[41] !== F || s[42] !== P || s[43] !== I
          ? ((e = { name: F, required: P, schema: I }), (s[41] = F), (s[42] = P), (s[43] = I), (s[44] = e))
          : (e = s[44])
        let r = f.customDrafts[F]
        s[45] !== F || s[46] !== y
          ? ((t = (e) => y((t) => ({ ...t, customDrafts: { ...t.customDrafts, [F]: e } }), F)),
            (s[45] = F),
            (s[46] = y),
            (s[47] = t))
          : (t = s[47])
        let o = v && "boolean" !== I.type,
          u = f.values[F]
        ;(s[48] !== F || s[49] !== w ? ((l = (e) => w(F, e)), (s[48] = F), (s[49] = w), (s[50] = l)) : (l = s[50]),
          s[51] !== c ||
          s[52] !== m ||
          s[53] !== g ||
          s[54] !== d ||
          s[55] !== v ||
          s[56] !== e ||
          s[57] !== r ||
          s[58] !== t ||
          s[59] !== o ||
          s[60] !== u ||
          s[61] !== l
            ? ((a = (0, i.jsx)(ed, {
                disabled: m,
                autoFocus: c,
                showOptionNumbers: d,
                field: e,
                customDraft: r,
                onCustomDraftChange: t,
                hideLabel: o,
                hideDescription: v,
                invalid: g,
                value: u,
                onChange: l,
              })),
              (s[51] = c),
              (s[52] = m),
              (s[53] = g),
              (s[54] = d),
              (s[55] = v),
              (s[56] = e),
              (s[57] = r),
              (s[58] = t),
              (s[59] = o),
              (s[60] = u),
              (s[61] = l),
              (s[62] = a))
            : (a = s[62]),
          (n = a))
      }
      let L = c && N ? eJ : void 0,
        O = p.name,
        T = !N && "px-2",
        z = v && N && "pt-1"
      return (
        s[63] !== T || s[64] !== z
          ? ((a = (0, r.A)("flex min-w-0 flex-col gap-2 outline-none", T, z)), (s[63] = T), (s[64] = z), (s[65] = a))
          : (a = s[65]),
        s[66] !== p.name || s[67] !== n || s[68] !== m || s[69] !== L || s[70] !== a
          ? ((o = (0, i.jsx)("fieldset", {
              ref: L,
              "data-mcp-form-field": O,
              tabIndex: -1,
              className: a,
              disabled: m,
              children: n,
            })),
            (s[66] = p.name),
            (s[67] = n),
            (s[68] = m),
            (s[69] = L),
            (s[70] = a),
            (s[71] = o))
          : (o = s[71]),
        o
      )
    }
    function eJ(e) {
      null == e || e.contains(document.activeElement) || e.focus()
    }
    var eY = n("AWFh")
    function e$(e) {
      let t,
        n,
        a,
        r,
        o,
        s,
        c,
        u,
        m,
        p,
        f = (0, l.c)(25),
        {
          isSubmitting: h,
          elicitation: x,
          fieldTitle: g,
          fieldDescription: y,
          showHeader: w,
          progress: j,
          onCancel: A,
        } = e,
        C = void 0 !== h && h,
        k = (0, d.A)()
      return w
        ? (f[0] !== x.message
            ? ((t = (0, i.jsx)("span", {
                className: "min-w-0 text-base leading-5 font-medium break-words whitespace-pre-wrap text-default",
                children: x.message,
              })),
              (f[0] = x.message),
              (f[1] = t))
            : (t = f[1]),
          f[2] !== j
            ? ((n =
                null != j &&
                (0, i.jsx)(v.A, {
                  id: "composer.mcpFormElicitation.progress",
                  defaultMessage: "{current} of {total}",
                  description: "Current form step and total number of steps",
                  values: { current: j.current, total: j.total },
                })),
              (f[2] = j),
              (f[3] = n))
            : (n = f[3]),
          f[4] !== k
            ? ((a = k.formatMessage({
                id: "composer.mcpFormElicitation.cancel.ariaLabel",
                defaultMessage: "Cancel",
                description: "Accessible label for canceling an MCP form elicitation",
              })),
              (f[4] = k),
              (f[5] = a))
            : (a = f[5]),
          f[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, i.jsx)(V.I, { "aria-hidden": !1, asset: eY.J })), (f[6] = r))
            : (r = f[6]),
          f[7] !== C || f[8] !== A || f[9] !== a
            ? ((o = (0, i.jsx)(b.$, {
                "aria-label": a,
                color: "ghostSecondary",
                size: "compact",
                uniform: !0,
                disabled: C,
                onClick: A,
                children: r,
              })),
              (f[7] = C),
              (f[8] = A),
              (f[9] = a),
              (f[10] = o))
            : (o = f[10]),
          f[11] !== n || f[12] !== o
            ? ((s = (0, i.jsxs)("div", {
                className:
                  "ms-auto flex h-5 shrink-0 items-center gap-1 text-xs leading-5 text-codex-description select-none",
                children: [n, o],
              })),
              (f[11] = n),
              (f[12] = o),
              (f[13] = s))
            : (s = f[13]),
          f[14] !== t || f[15] !== s
            ? ((c = (0, i.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [t, s] })),
              (f[14] = t),
              (f[15] = s),
              (f[16] = c))
            : (c = f[16]),
          f[17] !== g
            ? ((u =
                g &&
                (0, i.jsx)("div", {
                  className: "text-base leading-5 font-medium break-words whitespace-pre-wrap text-secondary",
                  children: g,
                })),
              (f[17] = g),
              (f[18] = u))
            : (u = f[18]),
          f[19] !== y
            ? ((m =
                y &&
                (0, i.jsx)("div", {
                  className: "text-xs leading-4 font-normal break-words whitespace-pre-wrap text-tertiary",
                  children: y,
                })),
              (f[19] = y),
              (f[20] = m))
            : (m = f[20]),
          f[21] !== m || f[22] !== c || f[23] !== u
            ? ((p = (0, i.jsxs)("div", { className: "flex shrink-0 flex-col gap-1 px-4 py-3", children: [c, u, m] })),
              (f[21] = m),
              (f[22] = c),
              (f[23] = u),
              (f[24] = p))
            : (p = f[24]),
          p)
        : null
    }
    let eX = (0, o.i1)(C.u, (e, { get: t }) => !0)
    function e0(e) {
      let t,
        n = (0, l.c)(2)
      return (
        n[0] !== e
          ? ((t = null != e.onReply ? (0, i.jsx)(e1, { ...e }) : (0, i.jsx)(e9, { ...e })), (n[0] = e), (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    function e1(e) {
      let t,
        n,
        d,
        g,
        v,
        b,
        y,
        k,
        O = (0, l.c)(24),
        {
          attribution: D,
          formType: _,
          autoResolution: q,
          confirmationPresentation: R,
          confirmationCompleted: U,
          conversationId: V,
          elicitation: B,
          hostId: Q,
          requestId: K,
          turnId: G,
          onUserInteraction: Z,
          onOpenInThread: W,
          onStandaloneResponseChange: J,
          onReply: Y,
          retainDraft: $,
          onPickLegacyFile: X,
          onPickFiles: ee,
          validateContent: et,
          disabled: en,
          isSubmitting: ei,
          onPreview: el,
        } = e,
        ea = void 0 !== $ && $,
        er = void 0 !== en && en,
        eo = void 0 !== ei && ei,
        es = (0, o.gh)(C.u),
        ec = (0, c.useRef)(null),
        ed = (0, c.useRef)(null),
        eu = (0, f.f)(),
        em = "formElicitation" === B.kind
      O[0] !== B ? ((t = (0, A._)(B)), (O[0] = B), (O[1] = t)) : (t = O[1])
      let ep = t,
        ef = ep?.field ?? null,
        eh = (0, N.Wh)(B.schema),
        ex = (function (e) {
          if ("openaiForm" !== e.kind) return
          let t = e.schema[S.QI],
            n = null == t ? void 0 : e.schema.properties[t]
          if (
            null != t &&
            n?.type === "string" &&
            (("oneOf" in n && null != n.oneOf && n.oneOf.length > 0) ||
              ("enum" in n && null != n.enum && n.enum.length > 0))
          )
            return { name: t, options: (0, N.xZ)(n), required: e.schema.required?.includes(t) === !0 }
        })(B),
        eg = eh[0],
        ev = 1 === eh.length && null != eg && (0, E.Pi)(eg.schema) ? eg.schema : null,
        eb = null != ev,
        ey = (0, x.e1)(Q, V, K),
        ew = (0, o.Ul)(x.el).get(ey)
      O[2] !== B ? ((n = () => P(B)), (O[2] = B), (O[3] = n)) : (n = O[3])
      let [ej, eA] = (0, c.useState)(n),
        eC = ew?.requestId === K && "kind" in ew.draft && ew.draft.kind === B.kind ? ew.draft : P(B),
        ek = null == Y || ea ? eC : ej,
        { values: eS } = ek,
        eN = eh.filter((e) => e.name !== ex?.name),
        eF = Object.fromEntries(eN.map(e6)),
        eM = "openaiForm" === B.kind ? B.schema["x-openai-groups"] : void 0
      O[4] !== eM ? ((d = new Set(eM?.flatMap(e5))), (O[4] = eM), (O[5] = d)) : (d = O[5])
      let eE = d
      O[6] !== eE ? ((g = (e) => !eE.has(e.name)), (O[6] = eE), (O[7] = g)) : (g = O[7])
      let eI = eN.filter(g),
        eP = eM?.map((e) => e.properties.map((e) => eF[e])) ?? []
      ;(eI.length > 0 || 0 === eP.length) && eP.push(eI)
      let eL = !eb && (B.message.trim().length > 0 || eP.length > 1),
        eO = Math.min(ek.groupIndex ?? 0, eP.length - 1),
        eT = eO === eP.length - 1,
        ez = eP[eO],
        eD = 1 === ez.length ? ez[0] : void 0,
        e_ = eD?.schema.type === "string" && (0, N.QQ)(eD.schema) ? (0, N.xZ)(eD.schema) : null,
        eq = null == eD ? void 0 : eS[eD.name],
        [eR, eU] = (0, c.useState)(null),
        [eV, eB] = (0, c.useState)(0),
        [eH, eQ] = (0, c.useState)(!1),
        eK = (0, c.useRef)(!1),
        eG = eo || eH,
        eZ = er || eG || eV > 0
      O[8] === Symbol.for("react.memo_cache_sentinel") ? ((v = []), (O[8] = v)) : (v = O[8])
      let [eJ, eY] = (0, c.useState)(v)
      ;(0, c.useEffect)(() => {
        null != ev &&
          null == Y &&
          (0, u.ss)(es, { hostId: Q, requestId: K }, ev.items.length, { threadId: V, turnId: G })
      }, [V, Q, Y, K, es, ev, G])
      let e0 = (e, t) => {
          if (null == Y || ea) {
            let t = es.get(x.el).get(ey),
              n = null != t && "kind" in t.draft && t.draft.kind === B.kind ? t.draft : P(B)
            ;(0, x.NR)(es, ey, { conversationId: V, draft: e(n), requestId: K, cleanupOwner: ea ? "hosted" : void 0 })
          } else eA(e)
          null != t && eY((e) => e.filter((e) => e !== t))
        },
        e1 = (e, t) => {
          eZ || e0((n) => ({ ...n, values: { ...n.values, [e]: t } }), e)
        },
        e9 = (e, t) => {
          if (eo || eK.current) return Promise.resolve(!1)
          if (null != W) return (eZ || W(), Promise.resolve(!1))
          if (((0, F.v)(es, { action: e, formType: _ ?? (em ? "mcp" : "openai"), identity: D }), null != Y))
            return Y(e, t)
          let n = () => (0, m.V)(es, Q).replyWithMcpServerElicitationResponse(V, K, (0, s.Se)(e, null, t ?? {}))
          return null == J
            ? n().then(e4, e3)
            : ((eK.current = !0),
              eQ(!0),
              J("submitting"),
              Promise.resolve()
                .then(n)
                .then(
                  () => (J({ accept: "accepted", decline: "declined", cancel: "canceled" }[e]), !0),
                  () => (J("failed"), !1),
                )
                .finally(() => {
                  ;((eK.current = !1), eQ(!1))
                }))
        },
        e8 = (e) => {
          if (!eZ) {
            if (null != W) return void W()
            ;(eU(null), e0((t) => ({ ...t, groupIndex: e })))
          }
        },
        e7 = (e) => {
          if (eZ) return
          if (null != W) return void W()
          let t = e
          if (eT && ex?.required && null == t) {
            let e = ex.options
            if (1 !== e.length) return void ed.current?.focus()
            t = e[0].const
          }
          let n = { ...ek.values }
          null != ex && (null == t ? delete n[ex.name] : (0, N.I5)(n, ex.name, t))
          let i = (function (e, t, n) {
              let i = { ...t.values }
              for (let [e, n] of Object.entries(t.customDrafts)) i[e] = L(i[e], n)
              switch (e.kind) {
                case "formElicitation":
                  return (0, I.R)(e.schema, i)
                case "openaiForm":
                  return (0, M.Vj)(e.schema, i, t.fileOptions, n)
                case "legacyOpenAIForm":
                  return (0, E.Kw)(e.schema, i)
              }
            })(B, { ...ek, values: null == ef ? n : { [ef]: !0 } }, et),
            l = eT ? i.invalidFieldNames : i.invalidFieldNames.filter((e) => ez.some((t) => t.name === e))
          if ((eY(l), l.length > 0)) {
            let e = l[0],
              t = eP.findIndex((t) => t.some((t) => t.name === e))
            if (t >= 0 && t !== eO) return void e8(t)
            let n = Array.from(ec.current?.querySelectorAll("[data-mcp-form-field]") ?? []).find(
                (t) => t.dataset.mcpFormField === e,
              ),
              i = n?.querySelector(
                'input:not([type="hidden"]):not(:disabled), textarea:not(:disabled), select:not(:disabled), [contenteditable="true"], button:not(:disabled)',
              )
            return void (i ?? n)?.focus()
          }
          if (!eT) return void e8(eO + 1)
          if (null == i.content) return
          let a = e9("accept", i.content)
          if (null != Y || null == ev || null == eg) return
          let r = i.content[eg.name]
          if ("string" != typeof r) return
          let o = ev.items.findIndex((e) => e.id === r)
          o < 0 ||
            a.then((e) => {
              !1 !== e && (0, u.Qx)(es, { hostId: Q, requestId: K }, r, o)
            })
        },
        te = null == ee && eh.some(e2),
        tt = (0, o._U)(null == Y && te ? eX : null, Q)
      if (ep?.presentation != null) {
        let e
        return (
          O[9] !== B || O[10] !== K
            ? ((e = JSON.stringify([K, B])), (O[9] = B), (O[10] = K), (O[11] = e))
            : (e = O[11]),
          (0, i.jsx)(a.C, {
            className: "contents",
            children: (0, i.jsx)(
              j.C,
              {
                presentation: ep.presentation,
                message: B.message,
                disabled: eZ,
                isSubmitting: eG,
                completed: U,
                standalone: "standalone" === R,
                onOpen: Z,
                onOpenInThread: W,
                onConfirm: e7,
                onCancel: () => void e9("cancel"),
              },
              e,
            ),
          })
        )
      }
      if (te && !tt) {
        let e
        return (
          O[12] !== V ||
          O[13] !== B.serverName ||
          O[14] !== Q ||
          O[15] !== Y ||
          O[16] !== J ||
          O[17] !== K ||
          O[18] !== eG
            ? ((e = (0, i.jsx)(z.v, {
                conversationId: V,
                hostId: Q,
                isSubmitting: eG,
                requestId: K,
                serverName: B.serverName,
                onReply: Y,
                onStandaloneResponseChange: J,
              })),
              (O[12] = V),
              (O[13] = B.serverName),
              (O[14] = Q),
              (O[15] = Y),
              (O[16] = J),
              (O[17] = K),
              (O[18] = eG),
              (O[19] = e))
            : (e = O[19]),
          e
        )
      }
      return (
        O[20] !== Z
          ? ((k = (e) => {
              "Escape" === e.key ||
                (e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]")) ||
                Z?.()
            }),
            (b = (e) => {
              ;(e.target instanceof Element && null != e.target.closest("[data-request-input-dismiss]")) || Z?.()
            }),
            (y = (e) => {
              ;(0, h.aA)(e.dataTransfer) && Z?.()
            }),
            (O[20] = Z),
            (O[21] = b),
            (O[22] = y),
            (O[23] = k))
          : ((b = O[21]), (y = O[22]), (k = O[23])),
        (0, i.jsx)(a.C, {
          className: "contents",
          children: (0, i.jsx)(p.A, {
            className: "@container/request-card",
            children: (0, i.jsxs)("form", {
              ref: ec,
              className:
                "flex max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] min-h-0 flex-col outline-none",
              noValidate: !0,
              tabIndex: -1,
              "data-codex-character-input-boundary": !0,
              "data-codex-escape-boundary": !0,
              "data-user-input-auto-resolution": null != Z || void 0,
              onKeyDownCapture: k,
              onPointerDownCapture: b,
              onDropCapture: y,
              onKeyDown: (e) => {
                if (
                  !e.defaultPrevented &&
                  !e.nativeEvent.isComposing &&
                  e.target instanceof HTMLElement &&
                  e.currentTarget.contains(e.target)
                ) {
                  if ("Escape" === e.key) {
                    ;(e.preventDefault(), e9("cancel"))
                    return
                  }
                  if (
                    !(
                      eZ ||
                      (null ==
                        e.target.closest(
                          'button, a[href], input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="button"], [role="checkbox"], [role="radiogroup"]',
                        ) &&
                        T(e, () => e.currentTarget.requestSubmit()))
                    ) &&
                    !e.altKey &&
                    !e.ctrlKey &&
                    !e.metaKey &&
                    !e.shiftKey &&
                    null ==
                      e.target.closest(
                        'textarea, select, input:not([type="radio"]):not([type="checkbox"]), [contenteditable]:not([contenteditable="false"]), [data-mcp-form-file-drop], [role="radiogroup"]',
                      ) &&
                    1 === ez.length &&
                    /^[1-9]$/.test(e.key)
                  ) {
                    let t = e.currentTarget.querySelectorAll(
                      '[data-mcp-form-choices] :is(input[type="radio"], button[role="checkbox"]):not(:disabled):not([data-mcp-form-custom-choice] *)',
                    )[Number(e.key) - 1]
                    null != t && (e.preventDefault(), e.repeat || t.click())
                  }
                }
              },
              onSubmit: (e) => {
                ;(e.preventDefault(), e7())
              },
              children: [
                (0, i.jsx)(e$, {
                  isSubmitting: eG,
                  elicitation: B,
                  fieldTitle: eD?.schema.type === "boolean" ? void 0 : eD?.schema.title,
                  fieldDescription: eD?.schema.description,
                  showHeader: eL,
                  progress: eP.length > 1 ? { current: eO + 1, total: eP.length } : void 0,
                  onCancel: () => void e9("cancel"),
                }),
                null == ef &&
                  ez.length > 0 &&
                  (0, i.jsx)(
                    "div",
                    {
                      className: (0, r.A)(
                        "flex max-h-96 min-h-0 scrollbar-stable flex-col gap-4 overflow-y-auto overscroll-contain pb-3",
                        !eL && "pt-3",
                      ),
                      children: ez.map((e, t) =>
                        (0, i.jsx)(
                          eW,
                          {
                            autoFocus: eu && 0 === t,
                            disabled: er,
                            interactionDisabled: eZ,
                            field: e,
                            isOnlyField: 1 === ez.length,
                            draft: ek,
                            expanded: eR === e.name,
                            hostId: Q,
                            invalid: eJ.includes(e.name),
                            metadataInHeader: eL && 1 === ez.length,
                            onCloseExpanded: () => eU(null),
                            onDraftChange: W ?? e0,
                            onValueChange: W ?? e1,
                            onPickLegacyFile: X,
                            onPickingChange: (e) => eB((t) => t + (e ? 1 : -1)),
                            onPickFiles: ee,
                            onPreview: el,
                            onViewAll:
                              ez.length > 1 && (0, M.Hl)(e.schema) && ek.fileOptions[e.name].length > 1
                                ? (W ?? (() => eU(e.name)))
                                : void 0,
                          },
                          e.name,
                        ),
                      ),
                    },
                    eO,
                  ),
                null != ef
                  ? (0, i.jsx)(w, {
                      disabled: eZ,
                      isSubmitting: eG,
                      hotkeysEnabled: eu,
                      onDecline: () => void e9("decline"),
                    })
                  : (0, i.jsx)(H, {
                      primaryActionRef: ed,
                      isSubmitting: eG,
                      autoResolution: q,
                      disabled: eZ,
                      submitDisabled:
                        eZ || (null != eD && eD.required && (0, E.Pi)(eD.schema) && !(0, E.TO)(eD.schema, eS[eD.name])),
                      fieldCount: ez.length,
                      isLastGroup: eT,
                      onBack: eO > 0 ? () => e8(eO - 1) : void 0,
                      hotkeysEnabled: eu,
                      acceptOptions:
                        eT && null != ex ? { options: ex.options, required: ex.required, onSelect: e7 } : void 0,
                      isStandardForm: em,
                      showSubmit:
                        eD?.required !== !0 ||
                        null == e_ ||
                        ("string" == typeof eq && ("" !== eq || e_.some((e) => e.const === eq))),
                      showHeader: eL,
                      onCancel: () => void e9("cancel"),
                      onDecline: () => void e9("decline"),
                      onDismissLegacyImagePicker: eb
                        ? () => {
                            ;(null == Y && (0, u.Ck)(es, { hostId: Q, requestId: K }), e9("decline"))
                          }
                        : void 0,
                      onViewAll:
                        null != eD && (0, M.Hl)(eD.schema) && ek.fileOptions[eD.name].length > 1
                          ? (W ?? (() => eU(eD.name)))
                          : void 0,
                    }),
              ],
            }),
          }),
        })
      )
    }
    function e2(e) {
      let { schema: t } = e
      return (0, M.Hl)(t) && null != t["x-openai-input"].userOptions
    }
    function e3() {
      return !1
    }
    function e4() {
      return !0
    }
    function e5(e) {
      return e.properties
    }
    function e6(e) {
      return [e.name, e]
    }
    function e9(e) {
      let t,
        a,
        r = (0, l.c)(9),
        s = (0, o.gh)(k.GD),
        c = (0, d.A)()
      r[0] !== c || r[1] !== e.conversationId || r[2] !== e.elicitation || r[3] !== e.hostId || r[4] !== s
        ? ((t = (t, i) => {
            n.e(858617)
              .then(n.bind(n, "sJLg"))
              .then((n) => {
                let { openFormPreview: l } = n
                return l(s, {
                  hostId: e.hostId,
                  threadId: e.conversationId,
                  server: e.elicitation.serverName,
                  target: t,
                  title: i,
                })
              })
              .catch(e8)
              .then((e) => {
                e ||
                  s
                    .get(g.Id)
                    .danger(
                      c.formatMessage({
                        id: "composer.mcpFormElicitation.previewUnavailable",
                        defaultMessage: "Couldn't open preview",
                        description: "Error when a form option's expanded details cannot be opened",
                      }),
                      { errorAnalytics: { toastId: "composer.mcpFormElicitation.previewUnavailable" } },
                    )
              })
          }),
          (r[0] = c),
          (r[1] = e.conversationId),
          (r[2] = e.elicitation),
          (r[3] = e.hostId),
          (r[4] = s),
          (r[5] = t))
        : (t = r[5])
      let u = t
      return (
        r[6] !== u || r[7] !== e
          ? ((a = (0, i.jsx)(e1, { ...e, onPreview: u })), (r[6] = u), (r[7] = e), (r[8] = a))
          : (a = r[8]),
        a
      )
    }
    function e8() {
      return !1
    }
  },
  MnTr(e, t, n) {
    n.d(t, { C: () => u, s: () => m })
    var i = n("ABep"),
      l = n("QosV"),
      a = n("ULZ9"),
      r = n("on57"),
      o = n("zd8w"),
      s = n("v7qY"),
      c = "PortalBoundary-TFj9W2"
    let d = (0, o.createContext)({ container: null })
    function u(e) {
      let t,
        n,
        s,
        u,
        m,
        p,
        f,
        h,
        x = (0, l.c)(20),
        { children: g, className: v, theme: b, themeClassName: y } = e,
        [w, j] = (0, o.useState)(null)
      ;(x[0] !== w
        ? ((t = () => {
            if (null == w) return
            let e = () => {
              let e = String(w.currentCSSZoom ?? 1)
              w.style.getPropertyValue("--puik-portal-zoom") !== e && w.style.setProperty("--puik-portal-zoom", e)
            }
            e()
            let t = new MutationObserver(e)
            for (let e = w; null != e; e = e.parentElement)
              t.observe(e, { attributes: !0, attributeFilter: ["class", "style"] })
            return () => t.disconnect()
          }),
          (n = [w]),
          (x[0] = w),
          (x[1] = t),
          (x[2] = n))
        : ((t = x[1]), (n = x[2])),
        (0, o.useLayoutEffect)(t, n),
        x[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (e) => {
              null != e && j(e)
            }),
            (x[3] = s))
          : (s = x[3]),
        x[4] !== v || x[5] !== y
          ? ((u = (0, r.A)("relative", c, y, v)), (x[4] = v), (x[5] = y), (x[6] = u))
          : (u = x[6]))
      let A = w ?? void 0
      return (
        x[7] !== w || x[8] !== y
          ? ((m = { container: w, themeClassName: y }), (x[7] = w), (x[8] = y), (x[9] = m))
          : (m = x[9]),
        x[10] !== g || x[11] !== m
          ? ((p = (0, i.jsx)(d.Provider, { value: m, children: g })), (x[10] = g), (x[11] = m), (x[12] = p))
          : (p = x[12]),
        x[13] !== A || x[14] !== p
          ? ((f = (0, i.jsx)(a.z, { radixPortalContainer: A, children: p })), (x[13] = A), (x[14] = p), (x[15] = f))
          : (f = x[15]),
        x[16] !== u || x[17] !== f || x[18] !== b
          ? ((h = (0, i.jsx)("div", { ref: s, className: u, "data-theme": b, children: f })),
            (x[16] = u),
            (x[17] = f),
            (x[18] = b),
            (x[19] = h))
          : (h = x[19]),
        h
      )
    }
    function m(e) {
      let t,
        n,
        u,
        m,
        p,
        f,
        h,
        x = (0, l.c)(24),
        { children: g, theme: v } = e,
        { container: b, themeClassName: y } = (0, o.useContext)(d)
      x[0] !== b ? ((t = b?.closest("dialog:modal")), (x[0] = b), (x[1] = t)) : (t = x[1])
      let w = t,
        [j, A] = (0, o.useState)(null)
      ;(x[2] !== b || x[3] !== w?.currentCSSZoom || x[4] !== j
        ? ((n = () => {
            if (null == b || null == j) return
            let e = b.ownerDocument.defaultView
            if (null == e) return
            let t = []
            for (let e = b; null != e; e = e.parentElement) t.push(e)
            let n = () => {
                let n = b.currentCSSZoom ?? 1,
                  i = w?.currentCSSZoom ?? 1,
                  l = t.map((t) => e.getComputedStyle(t)),
                  a = t.some((e, t) => {
                    let n = l[t]
                    return (
                      e.hasAttribute("inert") ||
                      e.hidden ||
                      "true" === e.getAttribute("aria-hidden") ||
                      "none" === n.display ||
                      "hidden" === n.visibility ||
                      "collapse" === n.visibility ||
                      "hidden" === n.contentVisibility
                    )
                  })
                ;(j.style.setProperty("zoom", String(n / i)),
                  j.style.setProperty("--puik-portal-zoom", String(n)),
                  j.toggleAttribute("inert", a),
                  j.toggleAttribute("hidden", a))
              },
              i = new MutationObserver(n),
              l = !1,
              a = () => {
                let a = null != j.querySelector('[data-radix-popper-content-wrapper], [role="tooltip"]')
                if (a !== l)
                  if (((l = a), a)) {
                    for (let e of (n(), t))
                      i.observe(e, {
                        attributes: !0,
                        attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "data-theme"],
                      })
                    e.addEventListener("resize", n)
                  } else (i.disconnect(), e.removeEventListener("resize", n))
              },
              r = new MutationObserver(a)
            return (
              r.observe(j, { childList: !0, subtree: !0 }),
              a(),
              () => {
                ;(r.disconnect(),
                  i.disconnect(),
                  e.removeEventListener("resize", n),
                  j.setAttribute("hidden", ""),
                  j.setAttribute("inert", ""))
              }
            )
          }),
          (x[2] = b),
          (x[3] = w?.currentCSSZoom),
          (x[4] = j),
          (x[5] = n))
        : (n = x[5]),
        x[6] !== b || x[7] !== w || x[8] !== j
          ? ((u = [b, w, j]), (x[6] = b), (x[7] = w), (x[8] = j), (x[9] = u))
          : (u = x[9]),
        (0, o.useLayoutEffect)(n, u))
      let C = j ?? void 0
      return (
        x[10] !== g || x[11] !== j
          ? ((m = "function" == typeof g ? g(j) : g), (x[10] = g), (x[11] = j), (x[12] = m))
          : (m = x[12]),
        x[13] !== C || x[14] !== m
          ? ((p = (0, i.jsx)(a.z, { radixPortalContainer: C, children: m })), (x[13] = C), (x[14] = m), (x[15] = p))
          : (p = x[15]),
        x[16] !== b || x[17] !== w || x[18] !== v || x[19] !== y
          ? ((f =
              null != b &&
              (0, s.createPortal)(
                (0, i.jsx)("div", {
                  ref: (e) => {
                    null != e && A(e)
                  },
                  className: (0, r.A)("relative", c, "PortalSurface-LW3Uz2", y),
                  "data-theme": v,
                }),
                w ?? b.ownerDocument.body,
              )),
            (x[16] = b),
            (x[17] = w),
            (x[18] = v),
            (x[19] = y),
            (x[20] = f))
          : (f = x[20]),
        x[21] !== p || x[22] !== f
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [p, f] })), (x[21] = p), (x[22] = f), (x[23] = h))
          : (h = x[23]),
        h
      )
    }
  },
  iYCA(e, t, n) {
    ;(n("QLGt"), (e.exports = n("TQhG")))
  },
  yCBR(e, t, n) {
    var i = n("W0XS")
    ;(n("xZl2"), (e.exports = i))
  },
  UlFl(e, t, n) {
    ;(n("o1bS"), (e.exports = n("ogbS")("Array", "findLast")))
  },
  gXPe(e, t, n) {
    ;(n("Y4C5"), n("Fuyw"), (e.exports = n("ogbS")("Array", "toSorted")))
  },
  XnQF(e, t, n) {
    var i = n("eUVA"),
      l = n("beJj"),
      a = n("oP4q").f,
      r = i("unscopables"),
      o = Array.prototype
    ;(void 0 === o[r] && a(o, r, { configurable: !0, value: l(null) }),
      (e.exports = function (e) {
        o[r][e] = !0
      }))
  },
  uHOi(e, t, n) {
    var i = n("f6Go")
    e.exports = function (e, t, n) {
      for (var l = 0, a = arguments.length > 2 ? n : i(t), r = new e(a); a > l;) r[l] = t[l++]
      return r
    }
  },
  wAJj(e, t, n) {
    var i = n("OwA9"),
      l = n("EzAB"),
      a = n("fuV1"),
      r = n("f6Go"),
      o = function (e) {
        var t = 1 === e
        return function (n, o, s) {
          for (var c, d = a(n), u = l(d), m = r(u), p = i(o, s); m-- > 0;)
            if (p((c = u[m]), m, d))
              switch (e) {
                case 0:
                  return c
                case 1:
                  return m
              }
          return t ? -1 : void 0
        }
      }
    e.exports = { findLast: o(0), findLastIndex: o(1) }
  },
  jXET(e, t, n) {
    var i = n("MGoG")
    e.exports = function (e, t) {
      var n = [][e]
      return (
        !!n &&
        i(function () {
          n.call(
            null,
            t ||
              function () {
                return 1
              },
            1,
          )
        })
      )
    }
  },
  U1ht(e, t, n) {
    e.exports = n("lbJk")([].slice)
  },
  FtMJ(e, t, n) {
    var i = n("U1ht"),
      l = Math.floor,
      a = function (e, t) {
        var n = e.length
        if (n < 8)
          for (var r, o, s = 1; s < n;) {
            for (o = s, r = e[s]; o && t(e[o - 1], r) > 0;) e[o] = e[--o]
            o !== s++ && (e[o] = r)
          }
        else
          for (
            var c = l(n / 2), d = a(i(e, 0, c), t), u = a(i(e, c), t), m = d.length, p = u.length, f = 0, h = 0;
            f < m || h < p;
          )
            e[f + h] = f < m && h < p ? (0 >= t(d[f], u[h]) ? d[f++] : u[h++]) : f < m ? d[f++] : u[h++]
        return e
      }
    e.exports = a
  },
  JBAm(e, t, n) {
    var i = n("v5Cs"),
      l = TypeError
    e.exports = function (e, t) {
      if (!delete e[t]) throw new l("Cannot delete property " + i(t) + " of " + i(e))
    }
  },
  ogbS(e, t, n) {
    var i = n("vlAc"),
      l = n("lbJk")
    e.exports = function (e, t) {
      return l(i[e].prototype[t])
    }
  },
  BN3d(e, t, n) {
    var i = n("RpEq").match(/firefox\/(\d+)/i)
    e.exports = !!i && +i[1]
  },
  mFA1(e, t, n) {
    var i = n("RpEq")
    e.exports = /MSIE|Trident/.test(i)
  },
  YX7I(e, t, n) {
    var i = n("RpEq").match(/AppleWebKit\/(\d+)\./)
    e.exports = !!i && +i[1]
  },
  yUY1(e, t, n) {
    var i = n("vlAc")
    e.exports = function (e, t) {
      var n = i[e],
        l = n && n.prototype
      return l && l[t]
    }
  },
  o1bS(e, t, n) {
    var i = n("Ywrr"),
      l = n("wAJj").findLast,
      a = n("XnQF")
    ;(i(
      { target: "Array", proto: !0 },
      {
        findLast: function (e) {
          return l(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
      },
    ),
      a("findLast"))
  },
  Y4C5(e, t, n) {
    var i = n("Ywrr"),
      l = n("lbJk"),
      a = n("dS6X"),
      r = n("fuV1"),
      o = n("f6Go"),
      s = n("JBAm"),
      c = n("qCMJ"),
      d = n("MGoG"),
      u = n("FtMJ"),
      m = n("jXET"),
      p = n("BN3d"),
      f = n("mFA1"),
      h = n("cOJA"),
      x = n("YX7I"),
      g = [],
      v = l(g.sort),
      b = l(g.push),
      y = d(function () {
        g.sort(void 0)
      }),
      w = d(function () {
        g.sort(null)
      }),
      j = m("sort"),
      A = !d(function () {
        if (h) return h < 70
        if (!p || !(p > 3)) {
          if (f) return !0
          if (x) return x < 603
          var e,
            t,
            n,
            i,
            l = ""
          for (e = 65; e < 76; e++) {
            switch (((t = String.fromCharCode(e)), e)) {
              case 66:
              case 69:
              case 70:
              case 72:
                n = 3
                break
              case 68:
              case 71:
                n = 4
                break
              default:
                n = 2
            }
            for (i = 0; i < 47; i++) g.push({ k: t + i, v: n })
          }
          for (
            g.sort(function (e, t) {
              return t.v - e.v
            }),
              i = 0;
            i < g.length;
            i++
          )
            ((t = g[i].k.charAt(0)), l.charAt(l.length - 1) !== t && (l += t))
          return "DGBEFHACIJK" !== l
        }
      })
    i(
      { target: "Array", proto: !0, forced: y || !w || !j || !A },
      {
        sort: function (e) {
          void 0 !== e && a(e)
          var t,
            n,
            i = r(this)
          if (A) return void 0 === e ? v(i) : v(i, e)
          var l = [],
            d = o(i)
          for (n = 0; n < d; n++) n in i && b(l, i[n])
          for (
            u(l, function (t, n) {
              return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1
            }),
              t = o(l),
              n = 0;
            n < t;
          )
            i[n] = l[n++]
          for (; n < d;) s(i, n++)
          return i
        },
      },
    )
  },
  Fuyw(e, t, n) {
    var i = n("Ywrr"),
      l = n("lbJk"),
      a = n("dS6X"),
      r = n("MV5a"),
      o = n("uHOi"),
      s = n("yUY1"),
      c = n("XnQF"),
      d = Array,
      u = l(s("Array", "sort"))
    ;(i(
      { target: "Array", proto: !0 },
      {
        toSorted: function (e) {
          return (void 0 !== e && a(e), u(o(d, r(this)), e))
        },
      },
    ),
      c("toSorted"))
  },
  QLGt(e, t, n) {
    n("o1bS")
  },
  xZl2(e, t, n) {
    n("Fuyw")
  },
  TQhG(e, t, n) {
    e.exports = n("UlFl")
  },
  W0XS(e, t, n) {
    e.exports = n("gXPe")
  },
}
//# sourceMappingURL=333716.c00d92326d.js.map
