export const __rspack_esm_ids = [677003]
export const __webpack_modules__ = {
  iSlj(e, t, a) {
    a.d(t, { ExtensionInstalledPage: () => eh })
    var s = a("ABep"),
      l = a("QosV"),
      n = a("Ywss"),
      r = a("UOa8"),
      o = a("edPQ"),
      i = a("on57"),
      d = a("qmMi"),
      c = a("zd8w"),
      m = a("Wf1j"),
      p = a("oyxz"),
      h = a("Sm6l"),
      u = a("bVeK"),
      x = a("SGsN"),
      f = a("GKsW"),
      g = a("OWtl"),
      b = a("a6v3"),
      w = a("mBJV"),
      _ = a("yGJW")
    let k = {
        step_viewed: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_STEP_VIEWED",
        sidebar_clicked: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SIDEBAR_CLICKED",
        checklist_step_selected: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_CHECKLIST_STEP_SELECTED",
        sample_selected: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SAMPLE_SELECTED",
      },
      y = {
        page: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_PAGE",
        open_sidebar: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_OPEN_SIDEBAR",
        pin_extension: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_PIN_EXTENSION",
        sample_gallery: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_GALLERY",
        sample_email: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_EMAIL",
        sample_report: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_REPORT",
        sample_inventory: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_INVENTORY",
      }
    function j(e, { action: t, step: a }) {
      ;(0, _.yy)(e, w.sAY, { action: k[t], step: y[a] })
    }
    a("mRsi")
    let v = (0, d.SZ)(g.u, { isSidePanelOpen: !1, isExtensionPinned: !1 }, ({ scope: e, set: t }) => {}, {
      isEqual: (e, t) => e.isSidePanelOpen === t.isSidePanelOpen && e.isExtensionPinned === t.isExtensionPinned,
    })
    var N = a.p + "assets/onboarding-sample-email-dark.9207ade27b.png",
      A = a.p + "assets/onboarding-sample-email-light.8afd65bc22.png",
      S = a.p + "assets/onboarding-sample-inventory-dark.8cfd29ddb2.png",
      M = a.p + "assets/onboarding-sample-inventory-light.8b37825b43.png",
      E = a.p + "assets/onboarding-sample-report-dark.a20bc49d06.png",
      T = a.p + "assets/onboarding-sample-report-light.2206422938.png",
      C = a("SPnB"),
      P = a("a6Zv")
    function O(e) {
      let t,
        a,
        n,
        r,
        o,
        i,
        c,
        h,
        u,
        x,
        f,
        g,
        b,
        w = (0, l.c)(31),
        { onTry: _ } = e,
        k = (0, m.A)(),
        y = (0, P.Y)(),
        j = "free" === (0, d.Ul)(C.e0)
      w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.jsx)(p.A, {
            id: "chatgpt.work.chrome.installed.sample_work.report.description",
            defaultMessage: "Pull out the key findings, supporting evidence, and recommendations",
          })),
          (w[0] = t))
        : (t = w[0])
      let v = y ? E : T
      ;(w[1] !== k
        ? ((a = k.formatMessage({
            id: "chatgpt.work.extension.installed.sample_work.report.prompt",
            defaultMessage: "Summarize this report",
          })),
          (w[1] = k),
          (w[2] = a))
        : (a = w[2]),
        w[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.report.title",
              defaultMessage: "Summarize a report",
            })),
            (w[3] = n))
          : (n = w[3]),
        w[4] !== _ || w[5] !== v || w[6] !== a
          ? ((r = (0, s.jsx)(R, { description: t, image: v, kind: "report", onTry: _, prompt: a, title: n })),
            (w[4] = _),
            (w[5] = v),
            (w[6] = a),
            (w[7] = r))
          : (r = w[7]))
      let O = r,
        G = j && O
      w[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, s.jsx)(p.A, {
            id: "chatgpt.work.chrome.installed.sample_work.email.description",
            defaultMessage: "Write a reply, follow-up, or new message in the tone you choose",
          })),
          (w[8] = o))
        : (o = w[8])
      let D = y ? N : A
      ;(w[9] !== k
        ? ((i = k.formatMessage(
            {
              id: "chatgpt.work.chrome.installed.sample_work.email.prompt.sender_name",
              defaultMessage: "Reply to {senderName}'s message on this page",
            },
            { senderName: "Samuel" },
          )),
          (w[9] = k),
          (w[10] = i))
        : (i = w[10]),
        w[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.email.title",
              defaultMessage: "Draft an email",
            })),
            (w[11] = c))
          : (c = w[11]),
        w[12] !== j || w[13] !== _ || w[14] !== D || w[15] !== i
          ? ((h = (0, s.jsx)(R, {
              description: o,
              disabled: j,
              image: D,
              kind: "email",
              onTry: _,
              prompt: i,
              title: c,
            })),
            (w[12] = j),
            (w[13] = _),
            (w[14] = D),
            (w[15] = i),
            (w[16] = h))
          : (h = w[16]))
      let I = !j && O
      w[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, s.jsx)(p.A, {
            id: "chatgpt.work.chrome.installed.sample_work.inventory.description",
            defaultMessage: "Mark sold-out products and add a new item to the inventory",
          })),
          (w[17] = u))
        : (u = w[17])
      let B = y ? S : M
      return (
        w[18] !== k
          ? ((x = k.formatMessage({
              id: "chatgpt.work.extension.installed.sample_work.inventory.prompt",
              defaultMessage:
                "I sold out of these 3 products today but ordered 5 new desk mousepads. Update the stock and save the inventory.",
            })),
            (w[18] = k),
            (w[19] = x))
          : (x = w[19]),
        w[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.inventory.title",
              defaultMessage: "Update an inventory system",
            })),
            (w[20] = f))
          : (f = w[20]),
        w[21] !== j || w[22] !== _ || w[23] !== B || w[24] !== x
          ? ((g = (0, s.jsx)(R, {
              description: u,
              disabled: j,
              image: B,
              kind: "inventory",
              onTry: _,
              prompt: x,
              title: f,
            })),
            (w[21] = j),
            (w[22] = _),
            (w[23] = B),
            (w[24] = x),
            (w[25] = g))
          : (g = w[25]),
        w[26] !== h || w[27] !== I || w[28] !== g || w[29] !== G
          ? ((b = (0, s.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col gap-3 overflow-y-auto select-none",
              children: [G, h, I, g],
            })),
            (w[26] = h),
            (w[27] = I),
            (w[28] = g),
            (w[29] = G),
            (w[30] = b))
          : (b = w[30]),
        b
      )
    }
    function R(e) {
      let t,
        a,
        n,
        r,
        d,
        c,
        m,
        x,
        f,
        g,
        b,
        w,
        _,
        k,
        y,
        j,
        v,
        N,
        A,
        S,
        M = (0, l.c)(51),
        { description: E, disabled: T, image: C, kind: P, onTry: O, prompt: R, title: G } = e,
        D = void 0 !== T && T
      M[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { email: u.VDi, report: u.o_G, inventory: u.NSE }), (M[0] = t))
        : (t = M[0])
      let I = t
      if (M[1] !== D || M[2] !== C || M[3] !== P) {
        a = I[P]
        let e = D && "opacity-50 grayscale"
        ;(M[12] !== e
          ? ((m = (0, i.A)(
              "flex flex-1 flex-col gap-3 rounded-2xl border border-default bg-gray-50 p-3 sm:flex-row sm:items-center lg:gap-6 dark:bg-gray-100",
              e,
            )),
            (M[12] = e),
            (M[13] = m))
          : (m = M[13]),
          (x = `extension-onboarding-sample-${P}`),
          M[14] !== C
            ? ((f = (0, s.jsx)("div", {
                className: "relative h-52 min-h-0 w-full shrink-0 sm:h-full sm:max-h-52 sm:w-1/4 xl:w-72",
                "aria-hidden": "true",
                children: (0, s.jsx)("img", {
                  className: "absolute inset-0 h-full w-full object-contain",
                  alt: "",
                  src: C,
                }),
              })),
              (M[14] = C),
              (M[15] = f))
            : (f = M[15]),
          (c = "flex min-w-0 flex-1 flex-col gap-3"),
          (d = "flex flex-col gap-2"),
          (r = "flex items-center gap-3"),
          (n = (0, i.A)(
            "flex size-7 shrink-0 items-center justify-center rounded-md",
            { email: "bg-yellow/10 text-yellow", report: "bg-blue/10 text-blue", inventory: "bg-green/10 text-green" }[
              P
            ],
          )),
          (M[1] = D),
          (M[2] = C),
          (M[3] = P),
          (M[4] = a),
          (M[5] = n),
          (M[6] = r),
          (M[7] = d),
          (M[8] = c),
          (M[9] = m),
          (M[10] = x),
          (M[11] = f))
      } else ((a = M[4]), (n = M[5]), (r = M[6]), (d = M[7]), (c = M[8]), (m = M[9]), (x = M[10]), (f = M[11]))
      ;(M[16] !== a ? ((g = (0, s.jsx)(a, {})), (M[16] = a), (M[17] = g)) : (g = M[17]),
        M[18] !== g || M[19] !== n
          ? ((b = (0, s.jsx)("span", { className: n, children: g })), (M[18] = g), (M[19] = n), (M[20] = b))
          : (b = M[20]))
      let B = `extension-onboarding-sample-${P}`
      return (
        M[21] !== B || M[22] !== G
          ? ((w = (0, s.jsx)("h3", { id: B, className: "text-heading-lg leading-7 font-medium", children: G })),
            (M[21] = B),
            (M[22] = G),
            (M[23] = w))
          : (w = M[23]),
        M[24] !== b || M[25] !== w || M[26] !== r
          ? ((_ = (0, s.jsxs)("div", { className: r, children: [b, w] })),
            (M[24] = b),
            (M[25] = w),
            (M[26] = r),
            (M[27] = _))
          : (_ = M[27]),
        M[28] !== E
          ? ((k = (0, s.jsx)("p", {
              className: "body-md leading-6 text-secondary sm:ps-10 dark:text-default",
              children: E,
            })),
            (M[28] = E),
            (M[29] = k))
          : (k = M[29]),
        M[30] !== _ || M[31] !== k || M[32] !== d
          ? ((y = (0, s.jsxs)("div", { className: d, children: [_, k] })),
            (M[30] = _),
            (M[31] = k),
            (M[32] = d),
            (M[33] = y))
          : (y = M[33]),
        M[34] !== P || M[35] !== O || M[36] !== R
          ? ((j = () => {
              ;(window.dispatchEvent(
                new CustomEvent(o.UZ, {
                  cancelable: !0,
                  detail: {
                    type: o.Nq,
                    source: "chatgpt_website_onboarding",
                    prompt: R,
                    mode: "email" === P || "inventory" === P ? "work" : void 0,
                  },
                }),
              ),
                O(P))
            }),
            (M[34] = P),
            (M[35] = O),
            (M[36] = R),
            (M[37] = j))
          : (j = M[37]),
        M[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.button.try",
              defaultMessage: "Try this demo",
            })),
            (M[38] = v))
          : (v = M[38]),
        M[39] !== D || M[40] !== j
          ? ((N = (0, s.jsx)(h.$, {
              className: "w-full justify-center",
              color: "outlineGhost",
              disabled: D,
              disabledAppearance: "unchanged",
              onClick: j,
              radius: "full",
              size: "beaconAction",
              type: "button",
              children: v,
            })),
            (M[39] = D),
            (M[40] = j),
            (M[41] = N))
          : (N = M[41]),
        M[42] !== y || M[43] !== N || M[44] !== c
          ? ((A = (0, s.jsxs)("div", { className: c, children: [y, N] })),
            (M[42] = y),
            (M[43] = N),
            (M[44] = c),
            (M[45] = A))
          : (A = M[45]),
        M[46] !== A || M[47] !== m || M[48] !== x || M[49] !== f
          ? ((S = (0, s.jsxs)("article", { className: m, "aria-labelledby": x, children: [f, A] })),
            (M[46] = A),
            (M[47] = m),
            (M[48] = x),
            (M[49] = f),
            (M[50] = S))
          : (S = M[50]),
        S
      )
    }
    var G = a("TjgH"),
      D = a("zLIa"),
      I = a("JNtf"),
      B = a("mUDD")
    function H(e) {
      let t,
        a,
        n,
        r,
        o,
        i,
        d,
        c = (0, l.c)(16),
        { children: m, onClose: p, onSubmit: h, title: u } = e
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = {
              "aria-describedby": void 0,
              className: "font-openai-sans",
              onOpenAutoFocus: K,
              onPointerDownOutside: W,
            }),
            (c[0] = t))
          : (t = c[0]),
        c[1] !== p
          ? ((a = (e) => {
              e || p()
            }),
            (c[1] = p),
            (c[2] = a))
          : (a = c[2]),
        c[3] !== h
          ? ((n = (e) => {
              ;(e.preventDefault(), h?.())
            }),
            (c[3] = h),
            (c[4] = n))
          : (n = c[4]),
        c[5] !== u
          ? ((r = (0, s.jsx)(B.c7, { title: (0, s.jsx)(I.L3, { className: "pe-8 select-none", children: u }) })),
            (c[5] = u),
            (c[6] = r))
          : (r = c[6]),
        c[7] !== m || c[8] !== r
          ? ((o = (0, s.jsxs)("div", { className: "flex flex-col gap-5", children: [r, m] })),
            (c[7] = m),
            (c[8] = r),
            (c[9] = o))
          : (o = c[9]),
        c[10] !== n || c[11] !== o
          ? ((i = (0, s.jsx)(B.R4, { as: "form", onSubmit: n, size: "viewport", children: o })),
            (c[10] = n),
            (c[11] = o),
            (c[12] = i))
          : (i = c[12]),
        c[13] !== a || c[14] !== i
          ? ((d = (0, s.jsx)(I.lG, {
              open: !0,
              contentProps: t,
              onOpenChange: a,
              size: "xwide",
              variant: "chatgpt",
              children: i,
            })),
            (c[13] = a),
            (c[14] = i),
            (c[15] = d))
          : (d = c[15]),
        d
      )
    }
    function W(e) {
      let t = e.detail.originalEvent.target
      t instanceof Element && null != t.closest("[data-sonner-toast]") && e.preventDefault()
    }
    function K(e) {
      ;(e.preventDefault(), e.target instanceof HTMLElement && e.target.focus())
    }
    function $(e) {
      let t,
        a,
        n,
        r,
        o,
        i,
        d,
        x,
        f,
        g,
        b,
        w,
        _,
        k,
        y = (0, l.c)(21),
        { onClose: j } = e,
        v = (0, m.A)(),
        [N, A] = (0, c.useState)(!1)
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => A(!0)), (y[0] = t)) : (t = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.email.modal.title.sender_name",
              defaultMessage: "Reply to {senderName}'s message",
              values: { senderName: "Samuel" },
            })),
            (y[1] = a))
          : (a = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("header", {
              className:
                "border-b border-default bg-surface-secondary px-5 py-4 text-base font-medium text-secondary select-none",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.inbox.label",
                defaultMessage: "Inbox",
              }),
            })),
            (y[2] = n))
          : (n = y[2]),
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)("h3", {
              id: "work-chrome-sample-email-subject",
              className: "text-xl font-semibold text-default",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.subject",
                defaultMessage: "What should I pack for San Francisco?",
              }),
            })),
            (y[3] = r))
          : (r = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                r,
                (0, s.jsx)("p", {
                  className: "text-sm leading-6 text-secondary",
                  children: (0, s.jsx)(p.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.email.modal.recipient",
                    defaultMessage: "To: {recipientName} \xb7 {recipientEmail}",
                    values: { recipientEmail: "samuel@northstar.co", recipientName: "Samuel" },
                  }),
                }),
              ],
            })),
            (i = (0, s.jsx)("hr", { className: "border-default" })),
            (y[4] = o),
            (y[5] = i))
          : ((o = y[4]), (i = y[5])),
        y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)("p", {
              className: "text-sm leading-6 whitespace-pre-line text-secondary",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.body",
                defaultMessage:
                  "Hi {recipientName},{lineBreak}{lineBreak}I\u2019m visiting San Francisco next month and trying to pack light. Is it usually warm during the day, or should I bring a jacket?{lineBreak}{lineBreak}Thanks,{lineBreak}{lineBreak}{senderName}",
                values: { lineBreak: "\n", recipientName: "Rissa", senderName: "Samuel" },
              }),
            })),
            (y[6] = d))
          : (d = y[6]),
        y[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, s.jsx)("label", {
              className: "sr-only",
              htmlFor: "work-chrome-sample-email-draft",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.draft.label",
                defaultMessage: "Draft reply",
              }),
            })),
            (y[7] = x))
          : (x = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel") ? ((f = () => A(!1)), (y[8] = f)) : (f = y[8]),
        y[9] !== v
          ? ((g = v.formatMessage({
              id: "chatgpt.work.chrome.installed.sample_work.email.modal.reply.placeholder",
              defaultMessage: "Reply",
            })),
            (y[9] = v),
            (y[10] = g))
          : (g = y[10]),
        y[11] !== g
          ? ((b = (0, s.jsx)(D.TM, {
              id: "work-chrome-sample-email-draft",
              autoResize: !0,
              name: "work-chrome-sample-email-draft",
              onChange: f,
              placeholder: g,
              rows: 10,
              variant: "feedback",
            })),
            (y[11] = g),
            (y[12] = b))
          : (b = y[12]),
        y[13] !== N
          ? ((w = (0, s.jsx)("div", {
              className: "flex justify-end select-none",
              children: N
                ? (0, s.jsx)("span", {
                    role: "status",
                    children: (0, s.jsxs)(G.E, {
                      className: "gap-1",
                      variant: "success",
                      children: [
                        (0, s.jsx)(u.TlE, {}),
                        (0, s.jsx)(p.A, {
                          id: "chatgpt.work.chrome.installed.sample_work.email.modal.status.done",
                          defaultMessage: "Done",
                        }),
                      ],
                    }),
                  })
                : (0, s.jsx)(h.$, {
                    color: "primary",
                    size: "medium",
                    type: "submit",
                    children: (0, s.jsx)(p.A, {
                      id: "chatgpt.work.chrome.installed.sample_work.email.modal.button.done",
                      defaultMessage: "Done",
                    }),
                  }),
            })),
            (y[13] = N),
            (y[14] = w))
          : (w = y[14]),
        y[15] !== b || y[16] !== w
          ? ((_ = (0, s.jsxs)("section", {
              "aria-labelledby": "work-chrome-sample-email-subject",
              className: "flex flex-col overflow-hidden rounded-xl border border-default",
              children: [
                n,
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-5 p-5 select-text",
                  children: [o, i, d, (0, s.jsxs)("div", { className: "flex flex-col gap-3", children: [x, b, w] })],
                }),
              ],
            })),
            (y[15] = b),
            (y[16] = w),
            (y[17] = _))
          : (_ = y[17]),
        y[18] !== j || y[19] !== _
          ? ((k = (0, s.jsx)(H, { onClose: j, onSubmit: t, title: a, children: _ })),
            (y[18] = j),
            (y[19] = _),
            (y[20] = k))
          : (k = y[20]),
        k
      )
    }
    let z = [
      {
        kind: "wireless_keyboard",
        name: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.inventory.product.wireless_keyboard.label",
          defaultMessage: "Wireless keyboard",
        }),
        sku: "KEY-2048",
        stock: 12,
      },
      {
        kind: "usb_c_hub",
        name: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.inventory.product.usb_c_hub.label",
          defaultMessage: "USB-C hub",
        }),
        sku: "HUB-1180",
        stock: 21,
      },
      {
        kind: "laptop_stand",
        name: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.inventory.product.laptop_stand.label",
          defaultMessage: "Laptop stand",
        }),
        sku: "STD-4412",
        stock: 5,
      },
    ]
    function L(e) {
      let t,
        a,
        n,
        r,
        o,
        i,
        d,
        x,
        f,
        g,
        b,
        w,
        _,
        k,
        y,
        j,
        v,
        N,
        A,
        S,
        M,
        E,
        T = (0, l.c)(43),
        { onClose: C } = e,
        P = (0, m.A)(),
        [O, R] = (0, c.useState)(z),
        [I, B] = (0, c.useState)(!1)
      if (T[0] !== O) {
        let e = O.find(Q)
        ;((t = void 0 !== e), (a = null != e && e.name.trim().length > 0), (T[0] = O), (T[1] = t), (T[2] = a))
      } else ((t = T[1]), (a = T[2]))
      let W = a
      if (
        (T[3] !== W
          ? ((n = () => {
              W && (R(V), B(!0))
            }),
            (T[3] = W),
            (T[4] = n))
          : (n = T[4]),
        T[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.inventory.modal.title",
              defaultMessage: "Update an inventory system",
            })),
            (T[5] = r))
          : (r = T[5]),
        T[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)("h3", {
              id: "work-chrome-sample-inventory-heading",
              className: "text-xl leading-7 font-semibold text-default",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.form.heading",
                defaultMessage: "Inventory",
              }),
            })),
            (T[6] = o))
          : (o = T[6]),
        T[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsxs)("div", {
              className: "min-w-0",
              children: [
                o,
                (0, s.jsx)("p", {
                  className: "text-sm leading-6 text-secondary",
                  children: (0, s.jsx)(p.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.inventory.form.metadata",
                    defaultMessage: "Ecommerce store \xb7 Today",
                  }),
                }),
              ],
            })),
            (T[7] = i))
          : (i = T[7]),
        T[8] !== I
          ? ((d = I
              ? (0, s.jsx)("span", {
                  role: "status",
                  children: (0, s.jsxs)(G.E, {
                    className: "gap-1",
                    variant: "success",
                    children: [
                      (0, s.jsx)(u.TlE, {}),
                      (0, s.jsx)(p.A, {
                        id: "chatgpt.work.chrome.installed.sample_work.inventory.status.saved",
                        defaultMessage: "Saved",
                      }),
                    ],
                  }),
                })
              : null),
            (T[8] = I),
            (T[9] = d))
          : (d = T[9]),
        T[10] !== d
          ? ((x = (0, s.jsxs)("header", {
              className: "flex min-w-0 items-start justify-between gap-3",
              children: [i, d],
            })),
            (T[10] = d),
            (T[11] = x))
          : (x = T[11]),
        T[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)("hr", { className: "border-default" })), (T[12] = f))
          : (f = T[12]),
        T[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)("h3", {
              className: "text-sm leading-6 font-semibold text-default",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.products.heading",
                defaultMessage: "Products",
              }),
            })),
            (T[13] = g))
          : (g = T[13]),
        T[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, s.jsx)("caption", {
              className: "sr-only",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.table.caption",
                defaultMessage: "Sample ecommerce products, stock quantities, and statuses",
              }),
            })),
            (T[14] = b))
          : (b = T[14]),
        T[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, s.jsx)("th", {
              className: "px-3 py-2.5 text-start font-medium",
              scope: "col",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.table.column.product",
                defaultMessage: "Product",
              }),
            })),
            (T[15] = w))
          : (w = T[15]),
        T[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, s.jsx)("th", {
              id: "work-chrome-sample-inventory-stock-heading",
              className: "w-20 px-2 py-2.5 text-start font-medium sm:w-24",
              scope: "col",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.table.column.stock",
                defaultMessage: "Stock",
              }),
            })),
            (T[16] = _))
          : (_ = T[16]),
        T[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, s.jsx)("thead", {
              className: "bg-surface-secondary text-xs leading-5 font-medium text-secondary select-none",
              children: (0, s.jsxs)("tr", {
                children: [
                  w,
                  _,
                  (0, s.jsx)("th", {
                    className: "w-24 px-2 py-2.5 text-start font-medium sm:w-28",
                    scope: "col",
                    children: (0, s.jsx)(p.A, {
                      id: "chatgpt.work.chrome.installed.sample_work.inventory.table.column.status",
                      defaultMessage: "Status",
                    }),
                  }),
                ],
              }),
            })),
            (T[17] = k))
          : (k = T[17]),
        T[18] !== P || T[19] !== O)
      ) {
        let e
        ;(T[21] !== P
          ? ((e = (e) => {
              let t = `work-chrome-sample-inventory-product-${e.kind}`
              return (0, s.jsxs)(
                "tr",
                {
                  className: `border-t border-default ${e.isDraft ? "bg-info-soft" : "bg-surface"}`,
                  children: [
                    (0, s.jsxs)("th", {
                      className: "min-w-0 px-3 py-2 text-start font-normal",
                      scope: "row",
                      children: [
                        e.isDraft
                          ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("label", {
                                  className: "sr-only",
                                  htmlFor: t,
                                  children: (0, s.jsx)(p.A, {
                                    id: "chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.label",
                                    defaultMessage: "Product name",
                                  }),
                                }),
                                (0, s.jsx)(D.pd, {
                                  id: t,
                                  name: "new-product-name",
                                  onChange: (e) => {
                                    let t = e.currentTarget.value
                                    ;(R((e) => e.map((e) => ("new_product" === e.kind ? { ...e, name: t } : e))), B(!1))
                                  },
                                  onFocus: F,
                                  placeholder: P.formatMessage({
                                    id: "chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.placeholder",
                                    defaultMessage: "Product name",
                                  }),
                                  autoFocus: !0,
                                  type: "text",
                                  value: e.name,
                                }),
                              ],
                            })
                          : (0, s.jsx)("span", {
                              id: t,
                              className: "block text-sm leading-5 font-semibold text-default",
                              children: e.name,
                            }),
                        (0, s.jsx)("span", {
                          className: "block text-xs leading-5 text-secondary",
                          children:
                            null == e.sku
                              ? (0, s.jsx)(p.A, {
                                  id: "chatgpt.work.chrome.installed.sample_work.inventory.product.new.description",
                                  defaultMessage: "New product",
                                })
                              : (0, s.jsx)(p.A, {
                                  id: "chatgpt.work.chrome.installed.sample_work.inventory.product.sku",
                                  defaultMessage: "SKU {sku}",
                                  values: { sku: e.sku },
                                }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("td", {
                      className: "px-2 py-2",
                      children: (0, s.jsx)(D.pd, {
                        "aria-labelledby": `${t} work-chrome-sample-inventory-stock-heading`,
                        inputMode: "numeric",
                        min: 0,
                        name: `stock-${e.kind}`,
                        onChange: (t) => {
                          let a = Math.max(0, Math.trunc(t.currentTarget.valueAsNumber || 0))
                          ;(R((t) => t.map((t) => (t.kind === e.kind ? { ...t, stock: a } : t))), B(!1))
                        },
                        step: 1,
                        type: "number",
                        value: e.stock,
                      }),
                    }),
                    (0, s.jsx)("td", { className: "px-2 py-2", children: (0, s.jsx)(Y, { product: e }) }),
                  ],
                },
                e.kind,
              )
            }),
            (T[21] = P),
            (T[22] = e))
          : (e = T[22]),
          (y = O.map(e)),
          (T[18] = P),
          (T[19] = O),
          (T[20] = y))
      } else y = T[20]
      return (
        T[23] !== y
          ? ((j = (0, s.jsx)("div", {
              className: "overflow-x-auto rounded-xl border border-default",
              children: (0, s.jsxs)("table", {
                className: "w-full border-collapse text-start",
                children: [b, k, (0, s.jsx)("tbody", { children: y })],
              }),
            })),
            (T[23] = y),
            (T[24] = j))
          : (j = T[24]),
        T[25] !== t
          ? ((v = t
              ? null
              : (0, s.jsxs)(h.$, {
                  className: "self-start",
                  color: "secondary",
                  onClick: () => {
                    ;(R(U), B(!1))
                  },
                  size: "compact",
                  type: "button",
                  children: [
                    (0, s.jsx)(u.xFs, {}),
                    (0, s.jsx)(p.A, {
                      id: "chatgpt.work.chrome.installed.sample_work.inventory.button.add",
                      defaultMessage: "Add",
                    }),
                  ],
                })),
            (T[25] = t),
            (T[26] = v))
          : (v = T[26]),
        T[27] !== j || T[28] !== v
          ? ((N = (0, s.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [g, j, v] })),
            (T[27] = j),
            (T[28] = v),
            (T[29] = N))
          : (N = T[29]),
        T[30] !== N || T[31] !== x
          ? ((A = (0, s.jsxs)("div", { className: "flex min-w-0 flex-col gap-4", children: [x, f, N] })),
            (T[30] = N),
            (T[31] = x),
            (T[32] = A))
          : (A = T[32]),
        T[33] !== W || T[34] !== I
          ? ((S = I
              ? null
              : (0, s.jsxs)("footer", {
                  className: "flex shrink-0 items-center justify-end gap-2 select-none",
                  children: [
                    (0, s.jsx)(h.$, {
                      color: "ghost",
                      onClick: () => {
                        ;(R(z), B(!1))
                      },
                      size: "medium",
                      type: "button",
                      children: (0, s.jsx)(p.A, {
                        id: "chatgpt.work.chrome.installed.sample_work.inventory.button.undo",
                        defaultMessage: "Undo",
                      }),
                    }),
                    (0, s.jsx)(h.$, {
                      disabled: !W,
                      color: "primary",
                      size: "medium",
                      type: "submit",
                      children: (0, s.jsx)(p.A, {
                        id: "chatgpt.work.chrome.installed.sample_work.inventory.button.done",
                        defaultMessage: "Done",
                      }),
                    }),
                  ],
                })),
            (T[33] = W),
            (T[34] = I),
            (T[35] = S))
          : (S = T[35]),
        T[36] !== A || T[37] !== S
          ? ((M = (0, s.jsxs)("section", {
              "aria-labelledby": "work-chrome-sample-inventory-heading",
              className: "flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-default p-5 select-text",
              children: [A, S],
            })),
            (T[36] = A),
            (T[37] = S),
            (T[38] = M))
          : (M = T[38]),
        T[39] !== C || T[40] !== n || T[41] !== M
          ? ((E = (0, s.jsx)(H, { onClose: C, onSubmit: n, title: r, children: M })),
            (T[39] = C),
            (T[40] = n),
            (T[41] = M),
            (T[42] = E))
          : (E = T[42]),
        E
      )
    }
    function U(e) {
      return [...e, { isDraft: !0, kind: "new_product", name: "", stock: 0 }]
    }
    function F(e) {
      e.currentTarget.select()
    }
    function V(e) {
      return e.map(q)
    }
    function q(e) {
      return "new_product" === e.kind ? { ...e, isDraft: !1 } : e
    }
    function Q(e) {
      return "new_product" === e.kind
    }
    function Y(e) {
      let t,
        a = (0, l.c)(3),
        { product: n } = e
      if ("new_product" === n.kind) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsxs)(G.E, {
                className: "gap-1",
                variant: "tip",
                children: [
                  (0, s.jsx)(u.xFs, {}),
                  (0, s.jsx)(p.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.inventory.status.new",
                    defaultMessage: "New",
                  }),
                ],
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if (0 === n.stock) {
        let e
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsxs)(G.E, {
                className: "gap-1",
                variant: "success",
                children: [
                  (0, s.jsx)(u.TlE, {}),
                  (0, s.jsx)(p.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.inventory.status.sold_out",
                    defaultMessage: "Sold out",
                  }),
                ],
              })),
              (a[1] = e))
            : (e = a[1]),
          e
        )
      }
      return (
        a[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(G.E, {
              variant: "outline",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.status.in_stock",
                defaultMessage: "In stock",
              }),
            })),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    let Z = [
      {
        number: "01",
        title: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.title",
          defaultMessage: "Activation",
        }),
        detail: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.description",
          defaultMessage: "Faster setup lifted first-week completion by 18%",
        }),
        isRecommendation: !1,
      },
      {
        number: "02",
        title: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.title",
          defaultMessage: "Retention",
        }),
        detail: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.description",
          defaultMessage: "Connected workflows correlate with higher return use",
        }),
        isRecommendation: !1,
      },
      {
        number: "03",
        title: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.title",
          defaultMessage: "Decision",
        }),
        detail: (0, s.jsx)(p.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.description",
          defaultMessage: "Prioritize guided imports in the next release",
        }),
        isRecommendation: !0,
      },
    ]
    function J(e) {
      let t,
        a,
        n,
        r,
        o,
        i,
        d,
        c,
        m,
        h = (0, l.c)(10),
        { onClose: u } = e
      return (
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sample_work.report.modal.title",
              defaultMessage: "Summarize a report",
            })),
            (h[0] = t))
          : (t = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, s.jsx)("h3", {
              id: "work-chrome-sample-report-title",
              className: "text-xl leading-7 font-semibold text-default",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.document.title",
                defaultMessage: "Q2 customer research synthesis",
              }),
            })),
            (h[1] = a))
          : (a = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsxs)("header", {
              className: "flex flex-col gap-1 border-b border-default pb-5",
              children: [
                a,
                (0, s.jsx)("p", {
                  className: "text-sm leading-5 text-secondary",
                  children: (0, s.jsx)(p.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.report.modal.document.metadata",
                    defaultMessage: "Updated today \xb7 {pageCount, plural, one {# page} other {# pages}}",
                    values: { pageCount: 12 },
                  }),
                }),
              ],
            })),
            (h[2] = n))
          : (n = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, s.jsx)("h4", {
              id: "work-chrome-sample-report-summary",
              className: "text-base leading-6 font-semibold text-default",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.summary.title",
                defaultMessage: "Executive Summary",
              }),
            })),
            (h[3] = r))
          : (r = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)("p", {
              className: "text-sm leading-6 text-secondary",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.summary.activation",
                defaultMessage:
                  "Across interviews, teams reached value faster when setup focused on a few guided actions instead of a broad list of features. Participants who connected an existing workflow could start with familiar context and complete a meaningful task sooner.",
              }),
            })),
            (h[4] = o))
          : (o = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsxs)("section", {
              "aria-labelledby": "work-chrome-sample-report-summary",
              className: "flex flex-col gap-3",
              children: [
                r,
                o,
                (0, s.jsx)("p", {
                  className: "text-sm leading-6 text-secondary",
                  children: (0, s.jsx)(p.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.report.modal.summary.import_friction",
                    defaultMessage:
                      "The main point of friction was uncertainty around imports. People wanted to know what would be brought over, what would remain unchanged, and whether they could review the result before continuing.",
                  }),
                }),
              ],
            })),
            (h[5] = i))
          : (i = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)("h4", {
              id: "work-chrome-sample-report-key-points",
              className: "text-base leading-6 font-semibold text-default",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_points.title",
                defaultMessage: "Key points",
              }),
            })),
            (h[6] = d))
          : (d = h[6]),
        h[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)("article", {
              "aria-labelledby": "work-chrome-sample-report-title",
              className: "flex w-full overflow-hidden rounded-xl border border-default select-text",
              children: (0, s.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-6 p-5",
                children: [
                  n,
                  i,
                  (0, s.jsxs)("section", {
                    "aria-labelledby": "work-chrome-sample-report-key-points",
                    className: "flex flex-col gap-3",
                    children: [d, (0, s.jsx)("ol", { className: "flex flex-col gap-3", children: Z.map(X) })],
                  }),
                ],
              }),
            })),
            (h[7] = c))
          : (c = h[7]),
        h[8] !== u ? ((m = (0, s.jsx)(H, { onClose: u, title: t, children: c })), (h[8] = u), (h[9] = m)) : (m = h[9]),
        m
      )
    }
    function X(e) {
      return (0, s.jsxs)(
        "li",
        {
          className: `flex flex-wrap items-start gap-3 rounded-xl border p-3 ${e.isRecommendation ? "border-default bg-success-soft" : "border-default bg-surface-secondary"}`,
          children: [
            (0, s.jsx)("span", {
              className: `shrink-0 text-sm leading-5 font-medium ${e.isRecommendation ? "text-success" : "text-tertiary"}`,
              children: e.number,
            }),
            (0, s.jsx)("span", { className: "text-sm leading-5 font-semibold text-default", children: e.title }),
            (0, s.jsx)("span", {
              className: "min-w-0 basis-full text-sm leading-5 text-secondary sm:flex-1",
              children: e.detail,
            }),
          ],
        },
        e.number,
      )
    }
    var ee = a.p + "assets/onboarding-open-sidebar-dark.a0ce65f9c4.png",
      et = a.p + "assets/onboarding-open-sidebar-light.3c3a780cf0.png",
      ea = a.p + "assets/onboarding-pin-menu-dark.8ff89ec80e.png",
      es = a.p + "assets/onboarding-pin-menu-light.104352f1ab.png",
      el = a.p + "assets/onboarding-pin-sidebar-dark.d10fac466e.png"
    let en = {
      "open-sidebar": { light: et, dark: ee },
      "pin-menu": { light: es, dark: ea },
      "pin-sidebar": { light: a.p + "assets/onboarding-pin-sidebar-light.e0ce9fa9ed.png", dark: el },
    }
    function er(e) {
      let t,
        a,
        n,
        r,
        o,
        i,
        d = (0, l.c)(18),
        { children: m, description: p, image: h, imageAlt: u, title: x } = e,
        f = (0, c.useId)(),
        g = (0, P.Y)() ? en[h].dark : en[h].light
      return (
        d[0] !== u || d[1] !== g
          ? ((t = (0, s.jsx)("div", {
              className: "flex min-h-0 w-full items-end justify-center lg:min-h-40",
              dir: "ltr",
              children: (0, s.jsx)("img", {
                className: "max-h-full max-w-full mask-b-from-85% mask-b-to-100% object-contain",
                alt: u,
                src: g,
              }),
            })),
            (d[0] = u),
            (d[1] = g),
            (d[2] = t))
          : (t = d[2]),
        d[3] !== f || d[4] !== x
          ? ((a = (0, s.jsx)("h2", {
              id: f,
              className: "text-(length:--font-heading-2xl-size) leading-none font-medium tracking-tight text-balance",
              "aria-live": "polite",
              children: x,
            })),
            (d[3] = f),
            (d[4] = x),
            (d[5] = a))
          : (a = d[5]),
        d[6] !== p
          ? ((n = (0, s.jsx)("p", {
              className: "text-heading-md leading-normal text-balance text-secondary",
              children: p,
            })),
            (d[6] = p),
            (d[7] = n))
          : (n = d[7]),
        d[8] !== m
          ? ((r =
              null == m
                ? null
                : (0, s.jsx)("div", { className: "mt-6 flex max-w-full flex-col items-center gap-3", children: m })),
            (d[8] = m),
            (d[9] = r))
          : (r = d[9]),
        d[10] !== a || d[11] !== n || d[12] !== r
          ? ((o = (0, s.jsxs)("div", {
              className: "flex w-full max-w-2xl shrink-0 flex-col items-center gap-2",
              children: [a, n, r],
            })),
            (d[10] = a),
            (d[11] = n),
            (d[12] = r),
            (d[13] = o))
          : (o = d[13]),
        d[14] !== f || d[15] !== t || d[16] !== o
          ? ((i = (0, s.jsxs)("section", {
              className:
                "flex h-full min-h-0 flex-col items-center overflow-y-auto rounded-2xl border border-default bg-gray-50 p-6 text-center font-openai-sans select-none lg:justify-center-safe dark:bg-gray-100",
              "aria-labelledby": f,
              children: [t, o],
            })),
            (d[14] = f),
            (d[15] = t),
            (d[16] = o),
            (d[17] = i))
          : (i = d[17]),
        i
      )
    }
    let eo = { sidebar: "open_sidebar", pin: "pin_extension", try: "sample_gallery" },
      ei = { email: "sample_email", report: "sample_report", inventory: "sample_inventory" }
    function ed() {
      var e
      let t,
        a,
        n,
        r,
        o,
        h,
        u,
        w,
        _,
        k,
        y,
        N,
        A,
        S,
        M,
        E,
        T,
        C,
        P,
        R,
        G,
        D,
        I = (0, l.c)(75),
        B = (0, d.gh)(g.u),
        H = (0, m.A)(),
        { isExtensionPinned: W, isSidePanelOpen: K } = (0, d.Ul)(v),
        z =
          ((e = (0, b.$)()),
          ("u" > typeof navigator && "brave" in navigator) || e.includes("Brave/")
            ? "Brave"
            : e.includes("Edg/")
              ? "Edge"
              : e.includes("OPR/") || e.includes("Opera/")
                ? "Opera"
                : e.includes("Vivaldi/")
                  ? "Vivaldi"
                  : "Chrome"),
        U = "Chrome" !== z
      I[0] !== W || I[1] !== K || I[2] !== U
        ? ((t = "sidebar"),
          K && W ? (t = "try") : K && !U && (t = "pin"),
          (I[0] = W),
          (I[1] = K),
          (I[2] = U),
          (I[3] = t))
        : (t = I[3])
      let [F, V] = (0, c.useState)(null),
        [q, Q] = (0, c.useState)(!1),
        [Y, Z] = (0, c.useState)(null),
        X = (0, c.useRef)(null),
        ee = (0, c.useRef)(null),
        et = F?.automaticStep === t ? F.selectedStep : t,
        ea = K && W && "try" === et,
        es = null == Y ? eo[et] : ei[Y]
      I[4] !== B
        ? ((a = (e) => {
            j(B, { action: "step_viewed", step: e })
          }),
          (I[4] = B),
          (I[5] = a))
        : (a = I[5])
      let el = (0, c.useEffectEvent)(a)
      ;(I[6] !== el || I[7] !== es
        ? ((n = () => {
            ;(null == ee.current && (el("page"), (ee.current = "page")),
              ee.current !== es && (el(es), (ee.current = es)))
          }),
          (I[6] = el),
          (I[7] = es),
          (I[8] = n))
        : (n = I[8]),
        I[9] !== es ? ((r = [es]), (I[9] = es), (I[10] = r)) : (r = I[10]),
        (0, c.useEffect)(n, r),
        I[11] !== Z
          ? ((o = () => {
              ;(X.current?.close(), (X.current = null), Z(null))
            }),
            (I[11] = Z),
            (I[12] = o))
          : (o = I[12]))
      let en = o,
        er = f.Q,
        ed = H.formatMessage(
          { id: "chatgpt.work.chrome.installed.page.title.browser", defaultMessage: "ChatGPT for {browser}" },
          { browser: z },
        )
      ;(I[13] !== er || I[14] !== ed
        ? ((h = (0, s.jsx)(er, { title: ed })), (I[13] = er), (I[14] = ed), (I[15] = h))
        : (h = I[15]),
        I[16] !== z
          ? ((u = (0, s.jsx)("h1", {
              className: "text-[clamp(32px,5.6vw,64px)] leading-none font-medium tracking-[-0.02em] select-none",
              "aria-live": "polite",
              children: (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.page.heading.browser",
                defaultMessage: "Welcome to ChatGPT for {browser}",
                values: { browser: z },
              }),
            })),
            (I[16] = z),
            (I[17] = u))
          : (u = I[17]),
        I[18] !== ea
          ? ((w = ea
              ? (0, s.jsx)(p.A, {
                  id: "chatgpt.work.chrome.installed.sample_work.ready_announcement",
                  defaultMessage: "Try ChatGPT on sample work",
                })
              : null),
            (I[18] = ea),
            (I[19] = w))
          : (w = I[19]),
        I[20] !== w
          ? ((_ = (0, s.jsx)("span", { "aria-live": "polite", className: "sr-only", children: w })),
            (I[20] = w),
            (I[21] = _))
          : (_ = I[21]))
      let em = ea && "md:flex-row"
      ;(I[22] !== em
        ? ((k = (0, i.A)("flex min-h-0 min-w-0 flex-1 flex-col items-start gap-6 lg:flex-row", em)),
          (I[22] = em),
          (I[23] = k))
        : (k = I[23]),
        I[24] !== t || I[25] !== B || I[26] !== V
          ? ((y = (e) => {
              ;(j(B, { action: "checklist_step_selected", step: eo[e] }), V({ automaticStep: t, selectedStep: e }))
            }),
            (I[24] = t),
            (I[25] = B),
            (I[26] = V),
            (I[27] = y))
          : (y = I[27]),
        I[28] !== z || I[29] !== W || I[30] !== q || I[31] !== K || I[32] !== et || I[33] !== y || I[34] !== U
          ? ((N = (0, s.jsx)(ec, {
              browserName: z,
              isExtensionPinned: W,
              isSampleWorkCompleted: q,
              isSidePanelOpen: K,
              onSelectStep: y,
              selectedStep: et,
              usesMenuPinning: U,
            })),
            (I[28] = z),
            (I[29] = W),
            (I[30] = q),
            (I[31] = K),
            (I[32] = et),
            (I[33] = y),
            (I[34] = U),
            (I[35] = N))
          : (N = I[35]))
      let eh = ea && "md:min-h-0"
      return (
        I[36] !== eh
          ? ((A = (0, i.A)("min-h-40 min-w-0 flex-1 self-stretch lg:min-h-0", eh)), (I[36] = eh), (I[37] = A))
          : (A = I[37]),
        I[38] !== ea || I[39] !== B || I[40] !== Z || I[41] !== Q
          ? ((S = ea
              ? (0, s.jsx)(O, {
                  onTry: (e) => {
                    ;(j(B, { action: "sample_selected", step: ei[e] }),
                      Q(!0),
                      Z(e),
                      (X.current = B.get(x.Id).success(
                        (0, s.jsx)(p.A, {
                          id: "chatgpt.work.chrome.installed.sample_work.prompt.confirmation",
                          defaultMessage: "Added prompt to side chat",
                        }),
                        {
                          duration: 10,
                          hasCloseButton: !0,
                          id: "extension-onboarding-sample-prompt",
                          position: "top-center",
                          variant: "chatgptSuccess",
                        },
                      )))
                  },
                })
              : null),
            (I[38] = ea),
            (I[39] = B),
            (I[40] = Z),
            (I[41] = Q),
            (I[42] = S))
          : (S = I[42]),
        I[43] !== z || I[44] !== B || I[45] !== et || I[46] !== U
          ? ((M =
              "try" !== et
                ? (0, s.jsx)(ep, {
                    browserName: z,
                    isPinStep: "pin" === et || U,
                    onOpenSidebar: () => j(B, { action: "sidebar_clicked", step: "open_sidebar" }),
                  })
                : null),
            (I[43] = z),
            (I[44] = B),
            (I[45] = et),
            (I[46] = U),
            (I[47] = M))
          : (M = I[47]),
        I[48] !== A || I[49] !== S || I[50] !== M
          ? ((E = (0, s.jsxs)("div", { className: A, children: [S, M] })),
            (I[48] = A),
            (I[49] = S),
            (I[50] = M),
            (I[51] = E))
          : (E = I[51]),
        I[52] !== k || I[53] !== N || I[54] !== E
          ? ((T = (0, s.jsxs)("div", { className: k, children: [N, E] })),
            (I[52] = k),
            (I[53] = N),
            (I[54] = E),
            (I[55] = T))
          : (T = I[55]),
        I[56] !== T || I[57] !== u || I[58] !== _
          ? ((C = (0, s.jsxs)("div", { className: "flex min-h-0 w-full flex-1 flex-col gap-6", children: [u, _, T] })),
            (I[56] = T),
            (I[57] = u),
            (I[58] = _),
            (I[59] = C))
          : (C = I[59]),
        I[60] !== Y || I[61] !== en
          ? ((P = "email" === Y ? (0, s.jsx)($, { onClose: en }) : null), (I[60] = Y), (I[61] = en), (I[62] = P))
          : (P = I[62]),
        I[63] !== Y || I[64] !== en
          ? ((R = "report" === Y ? (0, s.jsx)(J, { onClose: en }) : null), (I[63] = Y), (I[64] = en), (I[65] = R))
          : (R = I[65]),
        I[66] !== Y || I[67] !== en
          ? ((G = "inventory" === Y ? (0, s.jsx)(L, { onClose: en }) : null), (I[66] = Y), (I[67] = en), (I[68] = G))
          : (G = I[68]),
        I[69] !== C || I[70] !== P || I[71] !== R || I[72] !== G || I[73] !== h
          ? ((D = (0, s.jsxs)("main", {
              className:
                "flex h-dvh min-h-dvh w-full flex-col overflow-y-auto bg-surface p-5 font-openai-sans text-default sm:p-6",
              children: [h, C, P, R, G],
            })),
            (I[69] = C),
            (I[70] = P),
            (I[71] = R),
            (I[72] = G),
            (I[73] = h),
            (I[74] = D))
          : (D = I[74]),
        D
      )
    }
    function ec(e) {
      let t,
        a,
        n,
        r,
        o,
        d,
        c,
        m,
        x,
        f,
        g,
        b,
        w,
        _,
        k,
        y,
        j,
        v,
        N,
        A,
        S,
        M = (0, l.c)(56),
        {
          browserName: E,
          isExtensionPinned: T,
          isSampleWorkCompleted: C,
          isSidePanelOpen: P,
          onSelectStep: O,
          selectedStep: R,
          usesMenuPinning: G,
        } = e,
        D = P && (!G || T)
      ;(M[0] !== G
        ? ((t = G
            ? (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.checklist.step.sidebar.open_and_pin",
                defaultMessage: "Open and pin the extension",
              })
            : (0, s.jsx)(p.A, {
                id: "chatgpt.work.chrome.installed.checklist.step.sidebar.open_extension",
                defaultMessage: "Open the extension in the sidebar",
              })),
          (M[0] = G),
          (M[1] = t))
        : (t = M[1]),
        M[2] !== D || M[3] !== t
          ? ((a = { step: "sidebar", isCompleted: D, isEnabled: !0, label: t }), (M[2] = D), (M[3] = t), (M[4] = a))
          : (a = M[4]),
        M[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.checklist.step.pin",
              defaultMessage: "Pin the extension",
            })),
            (M[5] = n))
          : (n = M[5]),
        M[6] !== T || M[7] !== P
          ? ((r = { step: "pin", isCompleted: T, isEnabled: P, label: n }), (M[6] = T), (M[7] = P), (M[8] = r))
          : (r = M[8]))
      let I = P && T
      ;(M[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, s.jsx)(p.A, {
            id: "chatgpt.work.chrome.installed.checklist.step.sample_work",
            defaultMessage: "Try ChatGPT on sample work",
          })),
          (M[9] = o))
        : (o = M[9]),
        M[10] !== C || M[11] !== I
          ? ((d = { step: "try", isCompleted: C, isEnabled: I, label: o }), (M[10] = C), (M[11] = I), (M[12] = d))
          : (d = M[12]),
        M[13] !== a || M[14] !== r || M[15] !== d
          ? ((c = [a, r, d]), (M[13] = a), (M[14] = r), (M[15] = d), (M[16] = c))
          : (c = M[16]))
      let B = c
      M[17] !== B || M[18] !== G
        ? ((m = B.filter((e) => {
            let { step: t } = e
            return !G || "pin" !== t
          })),
          (M[17] = B),
          (M[18] = G),
          (M[19] = m))
        : (m = M[19])
      let H = m
      M[20] !== H ? ((x = H.filter(em)), (M[20] = H), (M[21] = x)) : (x = M[21])
      let W = x.length
      if (M[22] !== E || M[23] !== W || M[24] !== R || M[25] !== G) {
        let e = G ? ["w-0", "w-1/2", "w-full"] : ["w-0", "w-1/3", "w-2/3", "w-full"],
          t = "try" === R && "md:w-72"
        ;(M[33] !== t
          ? ((k = (0, i.A)("w-full shrink-0 rounded-2xl border border-default p-2.5 select-none lg:w-72 xl:w-96", t)),
            (M[33] = t),
            (M[34] = k))
          : (k = M[34]),
          (y = "extension-onboarding-checklist-heading"),
          (w = "flex flex-col gap-4 px-1.5 py-3"),
          M[35] !== E
            ? ((_ = (0, s.jsx)("h2", {
                id: "extension-onboarding-checklist-heading",
                className: "body-md leading-5 font-normal text-balance",
                children: (0, s.jsx)(p.A, {
                  id: "chatgpt.work.chrome.installed.checklist.heading.browser_name",
                  defaultMessage: "Set up your ChatGPT {browser} Extension",
                  values: { browser: E },
                }),
              })),
              (M[35] = E),
              (M[36] = _))
            : (_ = M[36]),
          (g = "h-1.5 overflow-hidden rounded-full bg-text/10"),
          (b = "true"),
          (f = (0, i.A)("h-full rounded-full bg-text", e[W])),
          (M[22] = E),
          (M[23] = W),
          (M[24] = R),
          (M[25] = G),
          (M[26] = f),
          (M[27] = g),
          (M[28] = b),
          (M[29] = w),
          (M[30] = _),
          (M[31] = k),
          (M[32] = y))
      } else ((f = M[26]), (g = M[27]), (b = M[28]), (w = M[29]), (_ = M[30]), (k = M[31]), (y = M[32]))
      return (
        M[37] !== f ? ((j = (0, s.jsx)("div", { className: f })), (M[37] = f), (M[38] = j)) : (j = M[38]),
        M[39] !== g || M[40] !== b || M[41] !== j
          ? ((v = (0, s.jsx)("div", { className: g, "aria-hidden": b, children: j })),
            (M[39] = g),
            (M[40] = b),
            (M[41] = j),
            (M[42] = v))
          : (v = M[42]),
        M[43] !== w || M[44] !== _ || M[45] !== v
          ? ((N = (0, s.jsxs)("div", { className: w, children: [_, v] })),
            (M[43] = w),
            (M[44] = _),
            (M[45] = v),
            (M[46] = N))
          : (N = M[46]),
        M[47] !== O || M[48] !== R || M[49] !== H
          ? ((A = (0, s.jsx)("ol", {
              className: "flex list-none flex-col gap-2 py-2",
              children: H.map((e) => {
                let { step: t, isCompleted: a, isEnabled: l, label: n } = e
                return (0, s.jsxs)(
                  "li",
                  {
                    children: [
                      (0, s.jsxs)(h.$, {
                        className:
                          "min-h-8 w-full gap-1.5 rounded-button-action border border-transparent px-2 py-1.5 text-start body-md leading-5 font-normal text-default not-disabled:not-aria-disabled:hover:bg-secondary-ghost-hover data-[state=open]:bg-secondary-ghost-hover pointer-coarse:min-h-10",
                        "aria-current": R === t ? "step" : void 0,
                        "aria-disabled": !l || void 0,
                        disabledAppearance: "unchanged",
                        onClick: (e) => {
                          l ? O(t) : e.preventDefault()
                        },
                        type: "button",
                        unstyled: !0,
                        children: [
                          a
                            ? (0, s.jsx)(u.hEG, { className: "text-success" })
                            : (0, s.jsx)(u.GuK, { className: "text-tertiary" }),
                          (0, s.jsx)("span", { className: "min-w-0 text-pretty whitespace-normal", children: n }),
                          a
                            ? (0, s.jsx)("span", {
                                className: "sr-only",
                                children: (0, s.jsx)(p.A, {
                                  id: "chatgpt.work.chrome.installed.checklist.step.completed",
                                  defaultMessage: "Completed",
                                }),
                              })
                            : null,
                        ],
                      }),
                      "try" === t && l && "try" === R
                        ? (0, s.jsx)("p", {
                            className: "ms-9 me-2 mt-1 body-sm leading-5 text-secondary",
                            children: (0, s.jsx)(p.A, {
                              id: "chatgpt.work.chrome.installed.checklist.step.sample_work.description",
                              defaultMessage: "Choose a demo to see ChatGPT work on this page",
                            }),
                          })
                        : null,
                    ],
                  },
                  t,
                )
              }),
            })),
            (M[47] = O),
            (M[48] = R),
            (M[49] = H),
            (M[50] = A))
          : (A = M[50]),
        M[51] !== k || M[52] !== y || M[53] !== N || M[54] !== A
          ? ((S = (0, s.jsxs)("aside", { className: k, "aria-labelledby": y, children: [N, A] })),
            (M[51] = k),
            (M[52] = y),
            (M[53] = N),
            (M[54] = A),
            (M[55] = S))
          : (S = M[55]),
        S
      )
    }
    function em(e) {
      return e.isCompleted
    }
    function ep(e) {
      let t,
        a,
        n,
        r,
        i,
        d,
        c = (0, l.c)(25),
        { browserName: x, isPinStep: f, onOpenSidebar: g } = e,
        b = (0, m.A)(),
        w = "Chrome" !== x
      if (f)
        if (w) {
          let e
          ;((t = "pin-menu"),
            c[3] !== x || c[4] !== b
              ? ((e = b.formatMessage(
                  {
                    id: "chatgpt.work.chrome.installed.pin.image.alt.browser_name",
                    defaultMessage: "The {browser} Extensions menu showing how to pin ChatGPT to the toolbar",
                  },
                  { browser: x },
                )),
                (c[3] = x),
                (c[4] = b),
                (c[5] = e))
              : (e = c[5]),
            (a = e))
        } else {
          let e
          ;((t = "pin-sidebar"),
            c[6] !== b
              ? ((e = b.formatMessage({
                  id: "chatgpt.work.chrome.installed.pin.image.alt.sidebar",
                  defaultMessage:
                    "The pin button at the top of the ChatGPT sidebar adds the extension to the Chrome toolbar",
                })),
                (c[6] = b),
                (c[7] = e))
              : (e = c[7]),
            (a = e))
        }
      else {
        let e
        ;((t = "open-sidebar"),
          c[0] !== x || c[1] !== b
            ? ((e = b.formatMessage(
                {
                  id: "chatgpt.work.chrome.installed.sidebar.image.alt.browser_name",
                  defaultMessage: "The {browser} Extensions menu with ChatGPT selected",
                },
                { browser: x },
              )),
              (c[0] = x),
              (c[1] = b),
              (c[2] = e))
            : (e = c[2]),
          (a = e))
      }
      if (w) {
        let e
        ;(c[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.pin.description.open_and_pin",
              defaultMessage:
                "Pin ChatGPT in the Extensions menu, then click ChatGPT in your toolbar to open the sidebar",
            })),
            (c[8] = e))
          : (e = c[8]),
          (n = e))
      } else if (f) {
        let e
        ;(c[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.pin.description",
              defaultMessage: "Pin the extension so you can open ChatGPT quickly from any tab",
            })),
            (c[9] = e))
          : (e = c[9]),
          (n = e))
      } else {
        let e
        ;(c[10] !== x
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgpt.work.chrome.installed.sidebar.description.browser_name",
              defaultMessage:
                "Click the Extensions icon in your {browser} toolbar, then select ChatGPT. Or click the sidebar button below.",
              values: { browser: x },
            })),
            (c[10] = x),
            (c[11] = e))
          : (e = c[11]),
          (n = e))
      }
      return (
        c[12] !== x || c[13] !== f
          ? ((r = f
              ? (0, s.jsx)(p.A, {
                  id: "chatgpt.work.chrome.installed.pin.heading.browser_name",
                  defaultMessage: "Add ChatGPT to your {browser} toolbar",
                  values: { browser: x },
                })
              : (0, s.jsx)(p.A, {
                  id: "chatgpt.work.chrome.installed.sidebar.heading",
                  defaultMessage: "Open the ChatGPT extension",
                })),
            (c[12] = x),
            (c[13] = f),
            (c[14] = r))
          : (r = c[14]),
        c[15] !== f || c[16] !== g || c[17] !== w
          ? ((i =
              f || w
                ? null
                : (0, s.jsxs)(h.$, {
                    className:
                      "min-h-16 justify-center gap-2 rounded-full border border-transparent bg-text/5 px-6 py-4 text-heading-md leading-7 font-medium text-default not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10",
                    onClick: () => {
                      ;(window.dispatchEvent(
                        new CustomEvent(o.UZ, {
                          cancelable: !0,
                          detail: { type: o.Nq, source: "chatgpt_website_onboarding" },
                        }),
                      ),
                        g())
                    },
                    type: "button",
                    unstyled: !0,
                    children: [
                      (0, s.jsx)(u.d24, {}),
                      (0, s.jsx)("span", {
                        className: "min-w-0 whitespace-normal",
                        children: (0, s.jsx)(p.A, {
                          id: "chatgpt.work.chrome.installed.sidebar.button.open",
                          defaultMessage: "Open sidebar",
                        }),
                      }),
                    ],
                  })),
            (c[15] = f),
            (c[16] = g),
            (c[17] = w),
            (c[18] = i))
          : (i = c[18]),
        c[19] !== n || c[20] !== t || c[21] !== a || c[22] !== r || c[23] !== i
          ? ((d = (0, s.jsx)(er, { image: t, imageAlt: a, title: r, description: n, children: i })),
            (c[19] = n),
            (c[20] = t),
            (c[21] = a),
            (c[22] = r),
            (c[23] = i),
            (c[24] = d))
          : (d = c[24]),
        d
      )
    }
    function eh(e) {
      let t,
        a = (0, l.c)(5),
        { authMethod: o } = (0, r.As)(),
        i = (0, n.zy)(),
        d = (0, n.$P)(i)
      if (null == o) {
        let e, t
        a[0] !== d ? ((e = new URLSearchParams({ next: d })), (a[0] = d), (a[1] = e)) : (e = a[1])
        let l = `/auth/login?${e}`
        return (a[2] !== l ? ((t = (0, s.jsx)(n.C5, { to: l, replace: !0 })), (a[2] = l), (a[3] = t)) : (t = a[3]), t)
      }
      return (a[4] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, s.jsx)(ed, {})), (a[4] = t)) : (t = a[4]), t)
    }
  },
  GKsW(e, t, a) {
    var s = a("SRbQ"),
      l = a("ABep"),
      n = a("QosV"),
      r = a("qmMi"),
      o = a("zd8w"),
      i = a("GaA7"),
      d = a("OWtl"),
      c = a("tSEg"),
      m = a("n5oN")
    let p = (0, r.vP)(d.u, () => [])
    function h(e) {
      let t,
        a,
        s,
        l,
        c,
        m,
        h = (0, n.c)(13),
        { title: g, nativeTitle: b } = e,
        w = void 0 === b ? g : b,
        _ = (0, r.gh)(d.u),
        [k] = (0, o.useState)(u)
      return (
        h[0] !== w || h[1] !== k || h[2] !== _ || h[3] !== g
          ? ((t = () => {
              if (i.appServices?.windowTitle == null) return
              let e = { owner: k, title: null == g ? void 0 : (w ?? null) }
              ;(_.set(p, (t) => (t.some((e) => e.owner === k) ? t.map((t) => (t.owner === k ? e : t)) : [...t, e])),
                f(_))
            }),
            (a = [_, k, g, w]),
            (h[0] = w),
            (h[1] = k),
            (h[2] = _),
            (h[3] = g),
            (h[4] = t),
            (h[5] = a))
          : ((t = h[4]), (a = h[5])),
        (0, o.useEffect)(t, a),
        h[6] !== k || h[7] !== _
          ? ((s = () => () => {
              i.appServices?.windowTitle != null && (_.set(p, (e) => e.filter((e) => e.owner !== k)), f(_))
            }),
            (l = [_, k]),
            (h[6] = k),
            (h[7] = _),
            (h[8] = s),
            (h[9] = l))
          : ((s = h[8]), (l = h[9])),
        (0, o.useEffect)(s, l),
        h[10] !== g
          ? ((c = () => {
              if (null == g) return
              let e = document.title
              x(g)
              let t = document.title
              return () => {
                document.title === t && x(e)
              }
            }),
            (m = [g]),
            (h[10] = g),
            (h[11] = c),
            (h[12] = m))
          : ((c = h[11]), (m = h[12])),
        (0, o.useEffect)(c, m),
        null
      )
    }
    function u() {
      return Symbol()
    }
    function x(e) {
      let t = document.head.querySelector("title")?.firstChild
      t instanceof Text && null == t.nextSibling ? (t.data = e) : (document.title = e)
    }
    function f(e) {
      let t = { stack: [], error: void 0, hasError: !1 }
      try {
        let a = e.get(p).findLast((e) => void 0 !== e.title)
        ;(0, s.mS)(t, i.appServices.windowTitle?.setTitle(a?.title ?? null), !1)
      } catch (e) {
        ;((t.error = e), (t.hasError = !0))
      } finally {
        ;(0, s.hk)(t)
      }
    }
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            a = (0, n.c)(2),
            { title: s } = e,
            o = (0, r.gh)(c.GD),
            i = (0, r._U)(m.m, `${o.value.pathname}${o.value.search ?? ""}`),
            d = s ?? i
          return (a[0] !== d ? ((t = (0, l.jsx)(h, { title: d })), (a[0] = d), (a[1] = t)) : (t = a[1]), t)
        },
        Q: h,
      },
    )
  },
}
//# sourceMappingURL=677003.e96c722267.js.map
