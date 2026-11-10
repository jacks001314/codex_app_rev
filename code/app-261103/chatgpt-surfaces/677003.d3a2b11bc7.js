export const __rspack_esm_ids = [677003]
export const __webpack_modules__ = {
  iSlj(e, t, a) {
    a.d(t, { ExtensionInstalledPage: () => eh })
    var n = a("ABep"),
      s = a("QosV"),
      o = a("HZfM"),
      r = a("EOo5"),
      i = a("edPQ"),
      l = a("on57"),
      d = a("zTeN"),
      c = a("zd8w"),
      m = a("Wf1j"),
      h = a("oyxz"),
      p = a("ygO2"),
      u = a("GO7r"),
      g = a("SGsN"),
      f = a("GKsW"),
      b = a("OWtl"),
      x = a("a6v3"),
      w = a("mBJV"),
      k = a("yGJW")
    let y = {
        step_viewed: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_STEP_VIEWED",
        sidebar_clicked: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SIDEBAR_CLICKED",
        checklist_step_selected: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_CHECKLIST_STEP_SELECTED",
        sample_selected: "CHATGPT_WORK_CHROME_ONBOARDING_ACTION_SAMPLE_SELECTED",
      },
      _ = {
        page: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_PAGE",
        open_sidebar: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_OPEN_SIDEBAR",
        pin_extension: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_PIN_EXTENSION",
        sample_gallery: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_GALLERY",
        sample_email: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_EMAIL",
        sample_report: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_REPORT",
        sample_inventory: "CHATGPT_WORK_CHROME_ONBOARDING_STEP_SAMPLE_INVENTORY",
      }
    function v(e, { action: t, step: a }) {
      ;(0, k.yy)(e, w.sAY, { action: y[t], step: _[a] })
    }
    a("mRsi")
    let j = (0, d.SZ)(b.u, { isSidePanelOpen: !1, isExtensionPinned: !1 }, ({ scope: e, set: t }) => {}, {
      isEqual: (e, t) => e.isSidePanelOpen === t.isSidePanelOpen && e.isExtensionPinned === t.isExtensionPinned,
    })
    var C = a.p + "assets/onboarding-sample-email-dark.9207ade27b.png",
      T = a.p + "assets/onboarding-sample-email-light.8afd65bc22.png",
      S = a.p + "assets/onboarding-sample-inventory-dark.8cfd29ddb2.png",
      N = a.p + "assets/onboarding-sample-inventory-light.8b37825b43.png",
      P = a.p + "assets/onboarding-sample-report-dark.a20bc49d06.png",
      A = a.p + "assets/onboarding-sample-report-light.2206422938.png",
      G = a("SPnB")
    function M(e) {
      let t,
        a,
        o,
        r,
        i,
        l,
        c,
        p,
        u,
        g,
        f,
        b,
        x,
        w = (0, s.c)(28),
        { onTry: k } = e,
        y = (0, m.A)(),
        _ = "free" === (0, d.Ul)(G.e0)
      ;(w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(h.A, {
            id: "chatgpt.work.chrome.installed.sample_work.report.description",
            defaultMessage: "Pull out the key findings, supporting evidence, and recommendations",
            description:
              "Description of the fictional report-summary task on the ChatGPT browser extension setup page.",
          })),
          (w[0] = t))
        : (t = w[0]),
        w[1] !== y
          ? ((a = y.formatMessage({
              id: "chatgpt.work.extension.installed.sample_work.report.prompt",
              defaultMessage: "Summarize this report",
              description:
                "Prompt prefilled in Side Chat after choosing the report sample on the ChatGPT browser extension setup page. This report refers to the fictional customer research report displayed in the current browser tab. The user must send the prompt to start the demo.",
            })),
            (w[1] = y),
            (w[2] = a))
          : (a = w[2]),
        w[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.report.title",
              defaultMessage: "Summarize a report",
              description:
                "Short heading of the fictional report-summary task on the ChatGPT browser extension setup page.",
            })),
            (w[3] = o))
          : (o = w[3]),
        w[4] !== k || w[5] !== a
          ? ((r = (0, n.jsx)(E, { description: t, kind: "report", onTry: k, prompt: a, title: o })),
            (w[4] = k),
            (w[5] = a),
            (w[6] = r))
          : (r = w[6]))
      let v = r,
        j = _ && v
      ;(w[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, n.jsx)(h.A, {
            id: "chatgpt.work.chrome.installed.sample_work.email.description",
            defaultMessage: "Write a reply, follow-up, or new message in the tone you choose",
            description:
              "Description of the fictional email task on the ChatGPT browser extension setup page. Explains what the user can try with the sample message.",
          })),
          (w[7] = i))
        : (i = w[7]),
        w[8] !== y
          ? ((l = y.formatMessage(
              {
                id: "chatgpt.work.chrome.installed.sample_work.email.prompt.sender_name",
                defaultMessage: "Reply to {senderName}'s message on this page",
                description:
                  "Prompt prefilled in Side Chat after selecting the email sample in browser extension setup. The senderName placeholder is the sample sender's display name, Samuel, and must not be translated. This page means the sample email shown in the current tab. The user must send the prompt to start the demo.",
              },
              { senderName: "Samuel" },
            )),
            (w[8] = y),
            (w[9] = l))
          : (l = w[9]),
        w[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.email.title",
              defaultMessage: "Draft an email",
              description: "Short heading of the fictional email task on the ChatGPT browser extension setup page.",
            })),
            (w[10] = c))
          : (c = w[10]),
        w[11] !== _ || w[12] !== k || w[13] !== l
          ? ((p = (0, n.jsx)(E, { description: i, disabled: _, kind: "email", onTry: k, prompt: l, title: c })),
            (w[11] = _),
            (w[12] = k),
            (w[13] = l),
            (w[14] = p))
          : (p = w[14]))
      let C = !_ && v
      return (
        w[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.inventory.description",
              defaultMessage: "Mark sold-out products and add a new item to the inventory",
              description:
                "Description of the fictional inventory-editing task on the ChatGPT browser extension setup page.",
            })),
            (w[15] = u))
          : (u = w[15]),
        w[16] !== y
          ? ((g = y.formatMessage({
              id: "chatgpt.work.extension.installed.sample_work.inventory.prompt",
              defaultMessage:
                "I sold out of these 3 products today but ordered 5 new desk mousepads. Update the stock and save the inventory.",
              description:
                "Prompt prefilled in Side Chat after choosing the inventory sample on the ChatGPT browser extension setup page. Asks ChatGPT to mark the three existing fictional products as sold out, add five desk mousepads, and save the sample inventory. Preserve the quantities. The user must send the prompt to start the demo.",
            })),
            (w[16] = y),
            (w[17] = g))
          : (g = w[17]),
        w[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.inventory.title",
              defaultMessage: "Update an inventory system",
              description:
                "Short heading of the fictional inventory-editing task on the ChatGPT browser extension setup page.",
            })),
            (w[18] = f))
          : (f = w[18]),
        w[19] !== _ || w[20] !== k || w[21] !== g
          ? ((b = (0, n.jsx)(E, { description: u, disabled: _, kind: "inventory", onTry: k, prompt: g, title: f })),
            (w[19] = _),
            (w[20] = k),
            (w[21] = g),
            (w[22] = b))
          : (b = w[22]),
        w[23] !== C || w[24] !== b || w[25] !== j || w[26] !== p
          ? ((x = (0, n.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col gap-3 overflow-y-auto select-none",
              children: [j, p, C, b],
            })),
            (w[23] = C),
            (w[24] = b),
            (w[25] = j),
            (w[26] = p),
            (w[27] = x))
          : (x = w[27]),
        x
      )
    }
    function E(e) {
      let t,
        a,
        o,
        r,
        d,
        c,
        m,
        g,
        f,
        b,
        x,
        w,
        k,
        y,
        _,
        v,
        j,
        G,
        M,
        E,
        O = (0, s.c)(56),
        { description: R, disabled: I, kind: D, onTry: H, prompt: K, title: B } = e,
        z = void 0 !== I && I
      O[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { email: u.VDi, report: u.o_G, inventory: u.NSE }), (O[0] = t))
        : (t = O[0])
      let W = t
      if (O[1] !== z || O[2] !== D) {
        let e, t, s
        O[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = { email: { light: T, dark: C }, report: { light: A, dark: P }, inventory: { light: N, dark: S } }),
            (O[11] = e))
          : (e = O[11])
        let i = e
        a = W[D]
        let h = z && "opacity-50 grayscale"
        ;(O[12] !== h
          ? ((m = (0, l.A)(
              "flex flex-1 flex-col gap-3 rounded-2xl border border-default bg-gray-50 p-3 sm:flex-row sm:items-center lg:gap-6 dark:bg-gray-100",
              h,
            )),
            (O[12] = h),
            (O[13] = m))
          : (m = O[13]),
          (g = `extension-onboarding-sample-${D}`))
        let p = i[D]
        O[14] !== p.light
          ? ((t = (0, n.jsx)("img", {
              className: "absolute inset-0 h-full w-full object-contain dark:hidden",
              alt: "",
              src: p.light,
            })),
            (O[14] = p.light),
            (O[15] = t))
          : (t = O[15])
        let u = i[D]
        ;(O[16] !== u.dark
          ? ((s = (0, n.jsx)("img", {
              className: "absolute inset-0 hidden h-full w-full object-contain dark:block",
              alt: "",
              src: u.dark,
            })),
            (O[16] = u.dark),
            (O[17] = s))
          : (s = O[17]),
          O[18] !== t || O[19] !== s
            ? ((f = (0, n.jsxs)("div", {
                className: "relative h-52 min-h-0 w-full shrink-0 sm:h-full sm:max-h-52 sm:w-1/4 xl:w-72",
                "aria-hidden": "true",
                children: [t, s],
              })),
              (O[18] = t),
              (O[19] = s),
              (O[20] = f))
            : (f = O[20]),
          (c = "flex min-w-0 flex-1 flex-col gap-3"),
          (d = "flex flex-col gap-2"),
          (r = "flex items-center gap-3"),
          (o = (0, l.A)(
            "flex size-7 shrink-0 items-center justify-center rounded-md",
            { email: "bg-yellow/10 text-yellow", report: "bg-blue/10 text-blue", inventory: "bg-green/10 text-green" }[
              D
            ],
          )),
          (O[1] = z),
          (O[2] = D),
          (O[3] = a),
          (O[4] = o),
          (O[5] = r),
          (O[6] = d),
          (O[7] = c),
          (O[8] = m),
          (O[9] = g),
          (O[10] = f))
      } else ((a = O[3]), (o = O[4]), (r = O[5]), (d = O[6]), (c = O[7]), (m = O[8]), (g = O[9]), (f = O[10]))
      ;(O[21] !== a ? ((b = (0, n.jsx)(a, {})), (O[21] = a), (O[22] = b)) : (b = O[22]),
        O[23] !== b || O[24] !== o
          ? ((x = (0, n.jsx)("span", { className: o, children: b })), (O[23] = b), (O[24] = o), (O[25] = x))
          : (x = O[25]))
      let $ = `extension-onboarding-sample-${D}`
      return (
        O[26] !== $ || O[27] !== B
          ? ((w = (0, n.jsx)("h3", { id: $, className: "text-heading-lg leading-7 font-medium", children: B })),
            (O[26] = $),
            (O[27] = B),
            (O[28] = w))
          : (w = O[28]),
        O[29] !== x || O[30] !== w || O[31] !== r
          ? ((k = (0, n.jsxs)("div", { className: r, children: [x, w] })),
            (O[29] = x),
            (O[30] = w),
            (O[31] = r),
            (O[32] = k))
          : (k = O[32]),
        O[33] !== R
          ? ((y = (0, n.jsx)("p", {
              className: "body-md leading-6 text-secondary sm:ps-10 dark:text-default",
              children: R,
            })),
            (O[33] = R),
            (O[34] = y))
          : (y = O[34]),
        O[35] !== k || O[36] !== y || O[37] !== d
          ? ((_ = (0, n.jsxs)("div", { className: d, children: [k, y] })),
            (O[35] = k),
            (O[36] = y),
            (O[37] = d),
            (O[38] = _))
          : (_ = O[38]),
        O[39] !== D || O[40] !== H || O[41] !== K
          ? ((v = () => {
              ;(window.dispatchEvent(
                new CustomEvent(i.UZ, {
                  cancelable: !0,
                  detail: {
                    type: i.Nq,
                    source: "chatgpt_website_onboarding",
                    prompt: K,
                    mode: "email" === D || "inventory" === D ? "work" : void 0,
                  },
                }),
              ),
                H(D))
            }),
            (O[39] = D),
            (O[40] = H),
            (O[41] = K),
            (O[42] = v))
          : (v = O[42]),
        O[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.button.try",
              defaultMessage: "Try this demo",
              description:
                "Button on each fictional sample task card on the ChatGPT browser extension setup page. Opens the sample in this tab and prefills its prompt in Side Chat without submitting it.",
            })),
            (O[43] = j))
          : (j = O[43]),
        O[44] !== z || O[45] !== v
          ? ((G = (0, n.jsx)(p.$, {
              className: "w-full justify-center",
              color: "outlineGhost",
              disabled: z,
              disabledAppearance: "unchanged",
              onClick: v,
              radius: "full",
              size: "beaconAction",
              type: "button",
              children: j,
            })),
            (O[44] = z),
            (O[45] = v),
            (O[46] = G))
          : (G = O[46]),
        O[47] !== _ || O[48] !== G || O[49] !== c
          ? ((M = (0, n.jsxs)("div", { className: c, children: [_, G] })),
            (O[47] = _),
            (O[48] = G),
            (O[49] = c),
            (O[50] = M))
          : (M = O[50]),
        O[51] !== M || O[52] !== m || O[53] !== g || O[54] !== f
          ? ((E = (0, n.jsxs)("article", { className: m, "aria-labelledby": g, children: [f, M] })),
            (O[51] = M),
            (O[52] = m),
            (O[53] = g),
            (O[54] = f),
            (O[55] = E))
          : (E = O[55]),
        E
      )
    }
    var O = a("TjgH"),
      R = a("zLIa"),
      I = a("JNtf"),
      D = a("mUDD")
    function H(e) {
      let t,
        a,
        o,
        r,
        i,
        l,
        d,
        c = (0, s.c)(16),
        { children: m, onClose: h, onSubmit: p, title: u } = e
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = {
              "aria-describedby": void 0,
              className: "font-openai-sans",
              onOpenAutoFocus: B,
              onPointerDownOutside: K,
            }),
            (c[0] = t))
          : (t = c[0]),
        c[1] !== h
          ? ((a = (e) => {
              e || h()
            }),
            (c[1] = h),
            (c[2] = a))
          : (a = c[2]),
        c[3] !== p
          ? ((o = (e) => {
              ;(e.preventDefault(), p?.())
            }),
            (c[3] = p),
            (c[4] = o))
          : (o = c[4]),
        c[5] !== u
          ? ((r = (0, n.jsx)(D.c7, { title: (0, n.jsx)(I.L3, { className: "pe-8 select-none", children: u }) })),
            (c[5] = u),
            (c[6] = r))
          : (r = c[6]),
        c[7] !== m || c[8] !== r
          ? ((i = (0, n.jsxs)("div", { className: "flex flex-col gap-5", children: [r, m] })),
            (c[7] = m),
            (c[8] = r),
            (c[9] = i))
          : (i = c[9]),
        c[10] !== o || c[11] !== i
          ? ((l = (0, n.jsx)(D.R4, { as: "form", onSubmit: o, size: "viewport", children: i })),
            (c[10] = o),
            (c[11] = i),
            (c[12] = l))
          : (l = c[12]),
        c[13] !== a || c[14] !== l
          ? ((d = (0, n.jsx)(I.lG, {
              open: !0,
              contentProps: t,
              onOpenChange: a,
              size: "xwide",
              variant: "chatgpt",
              children: l,
            })),
            (c[13] = a),
            (c[14] = l),
            (c[15] = d))
          : (d = c[15]),
        d
      )
    }
    function K(e) {
      let t = e.detail.originalEvent.target
      t instanceof Element && null != t.closest("[data-sonner-toast]") && e.preventDefault()
    }
    function B(e) {
      ;(e.preventDefault(), e.target instanceof HTMLElement && e.target.focus())
    }
    function z(e) {
      let t,
        a,
        o,
        r,
        i,
        l,
        d,
        g,
        f,
        b,
        x,
        w,
        k,
        y,
        _ = (0, s.c)(21),
        { onClose: v } = e,
        j = (0, m.A)(),
        [C, T] = (0, c.useState)(!1)
      return (
        _[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => T(!0)), (_[0] = t)) : (t = _[0]),
        _[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.email.modal.title.sender_name",
              defaultMessage: "Reply to {senderName}'s message",
              values: { senderName: "Samuel" },
              description:
                "Title of the editable fictional email task in browser extension onboarding. The senderName placeholder is the sender’s display name, Samuel, and must not be translated.",
            })),
            (_[1] = a))
          : (a = _[1]),
        _[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)("header", {
              className:
                "border-b border-default bg-surface-secondary px-5 py-4 text-base font-medium text-secondary select-none",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.inbox.label",
                defaultMessage: "Inbox",
                description:
                  "Decorative header of the fictional email application in extension onboarding; does not open a real inbox",
              }),
            })),
            (_[2] = o))
          : (o = _[2]),
        _[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("h3", {
              id: "work-chrome-sample-email-subject",
              className: "text-xl font-semibold text-default",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.subject",
                defaultMessage: "What should I pack for San Francisco?",
                description: "Subject of Samuel's fictional email asking what to pack for a San Francisco visit",
              }),
            })),
            (_[3] = r))
          : (r = _[3]),
        _[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                r,
                (0, n.jsx)("p", {
                  className: "text-sm leading-6 text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.email.modal.recipient",
                    defaultMessage: "To: {recipientName} · {recipientEmail}",
                    description:
                      "Fictional email recipient metadata; recipientName is Samuel and recipientEmail is samuel@northstar.co",
                    values: { recipientEmail: "samuel@northstar.co", recipientName: "Samuel" },
                  }),
                }),
              ],
            })),
            (l = (0, n.jsx)("hr", { className: "border-default" })),
            (_[4] = i),
            (_[5] = l))
          : ((i = _[4]), (l = _[5])),
        _[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)("p", {
              className: "text-sm leading-6 whitespace-pre-line text-secondary",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.body",
                defaultMessage:
                  "Hi {recipientName},{lineBreak}{lineBreak}I’m visiting San Francisco next month and trying to pack light. Is it usually warm during the day, or should I bring a jacket?{lineBreak}{lineBreak}Thanks,{lineBreak}{lineBreak}{senderName}",
                description:
                  "Complete fictional incoming email from Samuel to Rissa asking what to pack; lineBreak is a newline separating email paragraphs",
                values: { lineBreak: "\n", recipientName: "Rissa", senderName: "Samuel" },
              }),
            })),
            (_[6] = d))
          : (d = _[6]),
        _[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)("label", {
              className: "sr-only",
              htmlFor: "work-chrome-sample-email-draft",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.email.modal.draft.label",
                defaultMessage: "Draft reply",
                description: "Accessible label for the editable fictional email reply; this field never sends an email",
              }),
            })),
            (_[7] = g))
          : (g = _[7]),
        _[8] === Symbol.for("react.memo_cache_sentinel") ? ((f = () => T(!1)), (_[8] = f)) : (f = _[8]),
        _[9] !== j
          ? ((b = j.formatMessage({
              id: "chatgpt.work.chrome.installed.sample_work.email.modal.reply.placeholder",
              defaultMessage: "Reply",
              description: "Placeholder for the fictional email reply composer",
            })),
            (_[9] = j),
            (_[10] = b))
          : (b = _[10]),
        _[11] !== b
          ? ((x = (0, n.jsx)(R.TM, {
              id: "work-chrome-sample-email-draft",
              autoResize: !0,
              name: "work-chrome-sample-email-draft",
              onChange: f,
              placeholder: b,
              rows: 10,
              variant: "feedback",
            })),
            (_[11] = b),
            (_[12] = x))
          : (x = _[12]),
        _[13] !== C
          ? ((w = (0, n.jsx)("div", {
              className: "flex justify-end select-none",
              children: C
                ? (0, n.jsx)("span", {
                    role: "status",
                    children: (0, n.jsxs)(O.E, {
                      className: "gap-1",
                      variant: "success",
                      children: [
                        (0, n.jsx)(u.TlE, {}),
                        (0, n.jsx)(h.A, {
                          id: "chatgpt.work.chrome.installed.sample_work.email.modal.status.done",
                          defaultMessage: "Done",
                          description: "Confirmation that the fictional reply is complete; no email was sent",
                        }),
                      ],
                    }),
                  })
                : (0, n.jsx)(p.$, {
                    color: "primary",
                    size: "medium",
                    type: "submit",
                    children: (0, n.jsx)(h.A, {
                      id: "chatgpt.work.chrome.installed.sample_work.email.modal.button.done",
                      defaultMessage: "Done",
                      description: "Marks the sample reply complete without sending an email or closing the dialog",
                    }),
                  }),
            })),
            (_[13] = C),
            (_[14] = w))
          : (w = _[14]),
        _[15] !== x || _[16] !== w
          ? ((k = (0, n.jsxs)("section", {
              "aria-labelledby": "work-chrome-sample-email-subject",
              className: "flex flex-col overflow-hidden rounded-xl border border-default",
              children: [
                o,
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-5 p-5 select-text",
                  children: [i, l, d, (0, n.jsxs)("div", { className: "flex flex-col gap-3", children: [g, x, w] })],
                }),
              ],
            })),
            (_[15] = x),
            (_[16] = w),
            (_[17] = k))
          : (k = _[17]),
        _[18] !== v || _[19] !== k
          ? ((y = (0, n.jsx)(H, { onClose: v, onSubmit: t, title: a, children: k })),
            (_[18] = v),
            (_[19] = k),
            (_[20] = y))
          : (y = _[20]),
        y
      )
    }
    let W = [
      {
        kind: "wireless_keyboard",
        name: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.inventory.product.wireless_keyboard.label",
          defaultMessage: "Wireless keyboard",
          description:
            "Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Keep the label concise so it fits in a table row.",
        }),
        sku: "KEY-2048",
        stock: 12,
      },
      {
        kind: "usb_c_hub",
        name: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.inventory.product.usb_c_hub.label",
          defaultMessage: "USB-C hub",
          description:
            "Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Preserve the standard USB-C product terminology and keep the label concise.",
        }),
        sku: "HUB-1180",
        stock: 21,
      },
      {
        kind: "laptop_stand",
        name: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.inventory.product.laptop_stand.label",
          defaultMessage: "Laptop stand",
          description:
            "Product name in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. This is one of the three existing products that the sample task marks as sold out. Keep the label concise so it fits in a table row.",
        }),
        sku: "STD-4412",
        stock: 5,
      },
    ]
    function $(e) {
      let t,
        a,
        o,
        r,
        i,
        l,
        d,
        g,
        f,
        b,
        x,
        w,
        k,
        y,
        _,
        v,
        j,
        C,
        T,
        S,
        N,
        P,
        A = (0, s.c)(43),
        { onClose: G } = e,
        M = (0, m.A)(),
        [E, I] = (0, c.useState)(W),
        [D, K] = (0, c.useState)(!1)
      if (A[0] !== E) {
        let e = E.find(V)
        ;((t = void 0 !== e), (a = null != e && e.name.trim().length > 0), (A[0] = E), (A[1] = t), (A[2] = a))
      } else ((t = A[1]), (a = A[2]))
      let B = a
      if (
        (A[3] !== B
          ? ((o = () => {
              B && (I(L), K(!0))
            }),
            (A[3] = B),
            (A[4] = o))
          : (o = A[4]),
        A[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.inventory.modal.title",
              defaultMessage: "Update an inventory system",
              description:
                "Title of the interactive sample ecommerce inventory modal opened from the Update an inventory system sample-work card on the ChatGPT Chrome extension onboarding screen. It introduces a task where three sold-out products are updated and one desk mousepad is added.",
            })),
            (A[5] = r))
          : (r = A[5]),
        A[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)("h3", {
              id: "work-chrome-sample-inventory-heading",
              className: "text-xl leading-7 font-semibold text-default",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.form.heading",
                defaultMessage: "Inventory",
                description:
                  "Heading above the sample ecommerce inventory form inside the ChatGPT Chrome extension onboarding inventory modal. It identifies the editable product and stock information shown below.",
              }),
            })),
            (A[6] = i))
          : (i = A[6]),
        A[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsxs)("div", {
              className: "min-w-0",
              children: [
                i,
                (0, n.jsx)("p", {
                  className: "text-sm leading-6 text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.inventory.form.metadata",
                    defaultMessage: "Ecommerce store · Today",
                    description:
                      "Short metadata line below the Inventory heading in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It identifies the fictional ecommerce store and indicates that the displayed inventory is for today. Preserve an appropriate localized separator.",
                  }),
                }),
              ],
            })),
            (A[7] = l))
          : (l = A[7]),
        A[8] !== D
          ? ((d = D
              ? (0, n.jsx)("span", {
                  role: "status",
                  children: (0, n.jsxs)(O.E, {
                    className: "gap-1",
                    variant: "success",
                    children: [
                      (0, n.jsx)(u.TlE, {}),
                      (0, n.jsx)(h.A, {
                        id: "chatgpt.work.chrome.installed.sample_work.inventory.status.saved",
                        defaultMessage: "Saved",
                        description:
                          "Short green confirmation badge in the header of the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It appears only after the sold-out product updates and newly added desk mousepad have been saved. Keep the label short.",
                      }),
                    ],
                  }),
                })
              : null),
            (A[8] = D),
            (A[9] = d))
          : (d = A[9]),
        A[10] !== d
          ? ((g = (0, n.jsxs)("header", {
              className: "flex min-w-0 items-start justify-between gap-3",
              children: [l, d],
            })),
            (A[10] = d),
            (A[11] = g))
          : (g = A[11]),
        A[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, n.jsx)("hr", { className: "border-default" })), (A[12] = f))
          : (f = A[12]),
        A[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)("h3", {
              className: "text-sm leading-6 font-semibold text-default",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.products.heading",
                defaultMessage: "Products",
                description:
                  "Heading directly above the editable sample product inventory table inside the ChatGPT Chrome extension onboarding inventory modal. It introduces the list of products, stock quantities, and product statuses.",
              }),
            })),
            (A[13] = b))
          : (b = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)("caption", {
              className: "sr-only",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.table.caption",
                defaultMessage: "Sample ecommerce products, stock quantities, and statuses",
                description:
                  "Screen-reader-only caption for the editable sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. It explains that the table contains product names, numeric stock quantities, and product statuses.",
              }),
            })),
            (A[14] = x))
          : (x = A[14]),
        A[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)("th", {
              className: "px-3 py-2.5 text-start font-medium",
              scope: "col",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.table.column.product",
                defaultMessage: "Product",
                description:
                  "Short column header for product names and stock-keeping unit identifiers in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.",
              }),
            })),
            (A[15] = w))
          : (w = A[15]),
        A[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, n.jsx)("th", {
              id: "work-chrome-sample-inventory-stock-heading",
              className: "w-20 px-2 py-2.5 text-start font-medium sm:w-24",
              scope: "col",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.table.column.stock",
                defaultMessage: "Stock",
                description:
                  "Short column header for editable numeric product quantities in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.",
              }),
            })),
            (A[16] = k))
          : (k = A[16]),
        A[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, n.jsx)("thead", {
              className: "bg-surface-secondary text-xs leading-5 font-medium text-secondary select-none",
              children: (0, n.jsxs)("tr", {
                children: [
                  w,
                  k,
                  (0, n.jsx)("th", {
                    className: "w-24 px-2 py-2.5 text-start font-medium sm:w-28",
                    scope: "col",
                    children: (0, n.jsx)(h.A, {
                      id: "chatgpt.work.chrome.installed.sample_work.inventory.table.column.status",
                      defaultMessage: "Status",
                      description:
                        "Short column header for the Sold out, New, and In stock product-status badges in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal.",
                    }),
                  }),
                ],
              }),
            })),
            (A[17] = y))
          : (y = A[17]),
        A[18] !== M || A[19] !== E)
      ) {
        let e
        ;(A[21] !== M
          ? ((e = (e) => {
              let t = `work-chrome-sample-inventory-product-${e.kind}`
              return (0, n.jsxs)(
                "tr",
                {
                  className: `border-t border-default ${e.isDraft ? "bg-info-soft" : "bg-surface"}`,
                  children: [
                    (0, n.jsxs)("th", {
                      className: "min-w-0 px-3 py-2 text-start font-normal",
                      scope: "row",
                      children: [
                        e.isDraft
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("label", {
                                  className: "sr-only",
                                  htmlFor: t,
                                  children: (0, n.jsx)(h.A, {
                                    id: "chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.label",
                                    defaultMessage: "Product name",
                                    description:
                                      "Screen-reader label for the editable name of a newly added product in the sample ecommerce inventory table inside the ChatGPT Chrome extension onboarding inventory modal. The user or ChatGPT enters the name before saving the inventory.",
                                  }),
                                }),
                                (0, n.jsx)(R.pd, {
                                  id: t,
                                  name: "new-product-name",
                                  onChange: (e) => {
                                    let t = e.currentTarget.value
                                    ;(I((e) => e.map((e) => ("new_product" === e.kind ? { ...e, name: t } : e))), K(!1))
                                  },
                                  onFocus: q,
                                  placeholder: M.formatMessage({
                                    id: "chatgpt.work.chrome.installed.sample_work.inventory.product.new.name.placeholder",
                                    defaultMessage: "Product name",
                                    description:
                                      "Short placeholder inside the empty editable product-name field that appears after selecting Add in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. It prompts the user or ChatGPT to enter the name of the new product before saving.",
                                  }),
                                  autoFocus: !0,
                                  type: "text",
                                  value: e.name,
                                }),
                              ],
                            })
                          : (0, n.jsx)("span", {
                              id: t,
                              className: "block text-sm leading-5 font-semibold text-default",
                              children: e.name,
                            }),
                        (0, n.jsx)("span", {
                          className: "block text-xs leading-5 text-secondary",
                          children:
                            null == e.sku
                              ? (0, n.jsx)(h.A, {
                                  id: "chatgpt.work.chrome.installed.sample_work.inventory.product.new.description",
                                  defaultMessage: "New product",
                                  description:
                                    "Short secondary text beneath a newly added product in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that the product has just been created and does not yet have a stock-keeping unit.",
                                })
                              : (0, n.jsx)(h.A, {
                                  id: "chatgpt.work.chrome.installed.sample_work.inventory.product.sku",
                                  defaultMessage: "SKU {sku}",
                                  description:
                                    "Secondary product identifier shown beneath an existing product name in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. The placeholder {sku} is the product's alphanumeric stock-keeping unit, such as KEY-2048, and must remain unchanged.",
                                  values: { sku: e.sku },
                                }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("td", {
                      className: "px-2 py-2",
                      children: (0, n.jsx)(R.pd, {
                        "aria-labelledby": `${t} work-chrome-sample-inventory-stock-heading`,
                        inputMode: "numeric",
                        min: 0,
                        name: `stock-${e.kind}`,
                        onChange: (t) => {
                          let a = Math.max(0, Math.trunc(t.currentTarget.valueAsNumber || 0))
                          ;(I((t) => t.map((t) => (t.kind === e.kind ? { ...t, stock: a } : t))), K(!1))
                        },
                        step: 1,
                        type: "number",
                        value: e.stock,
                      }),
                    }),
                    (0, n.jsx)("td", { className: "px-2 py-2", children: (0, n.jsx)(Q, { product: e }) }),
                  ],
                },
                e.kind,
              )
            }),
            (A[21] = M),
            (A[22] = e))
          : (e = A[22]),
          (_ = E.map(e)),
          (A[18] = M),
          (A[19] = E),
          (A[20] = _))
      } else _ = A[20]
      return (
        A[23] !== _
          ? ((v = (0, n.jsx)("div", {
              className: "overflow-x-auto rounded-xl border border-default",
              children: (0, n.jsxs)("table", {
                className: "w-full border-collapse text-start",
                children: [x, y, (0, n.jsx)("tbody", { children: _ })],
              }),
            })),
            (A[23] = _),
            (A[24] = v))
          : (v = A[24]),
        A[25] !== t
          ? ((j = t
              ? null
              : (0, n.jsxs)(p.$, {
                  className: "self-start",
                  color: "secondary",
                  onClick: () => {
                    ;(I(U), K(!1))
                  },
                  size: "compact",
                  type: "button",
                  children: [
                    (0, n.jsx)(u.xFs, {}),
                    (0, n.jsx)(h.A, {
                      id: "chatgpt.work.chrome.installed.sample_work.inventory.button.add",
                      defaultMessage: "Add",
                      description:
                        "Short button label below the sample ecommerce inventory table in the ChatGPT Chrome extension onboarding inventory modal. Clicking the button adds one empty, editable product with a starting stock quantity of zero and focuses its product-name field. Keep the label concise.",
                    }),
                  ],
                })),
            (A[25] = t),
            (A[26] = j))
          : (j = A[26]),
        A[27] !== v || A[28] !== j
          ? ((C = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [b, v, j] })),
            (A[27] = v),
            (A[28] = j),
            (A[29] = C))
          : (C = A[29]),
        A[30] !== C || A[31] !== g
          ? ((T = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-4", children: [g, f, C] })),
            (A[30] = C),
            (A[31] = g),
            (A[32] = T))
          : (T = A[32]),
        A[33] !== B || A[34] !== D
          ? ((S = D
              ? null
              : (0, n.jsxs)("footer", {
                  className: "flex shrink-0 items-center justify-end gap-2 select-none",
                  children: [
                    (0, n.jsx)(p.$, {
                      color: "ghost",
                      onClick: () => {
                        ;(I(W), K(!1))
                      },
                      size: "medium",
                      type: "button",
                      children: (0, n.jsx)(h.A, {
                        id: "chatgpt.work.chrome.installed.sample_work.inventory.button.undo",
                        defaultMessage: "Undo",
                        description:
                          "Short secondary button label in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. Clicking the button removes the newly added product, restores the original positive stock quantities for the three existing products, and clears the saved confirmation.",
                      }),
                    }),
                    (0, n.jsx)(p.$, {
                      disabled: !B,
                      color: "primary",
                      size: "medium",
                      type: "submit",
                      children: (0, n.jsx)(h.A, {
                        id: "chatgpt.work.chrome.installed.sample_work.inventory.button.done",
                        defaultMessage: "Done",
                        description:
                          "Short primary button label in the sample ecommerce inventory modal on the ChatGPT Chrome extension onboarding screen. After a new product has been named, clicking the button saves the updated product quantities and new product. Keep the label short.",
                      }),
                    }),
                  ],
                })),
            (A[33] = B),
            (A[34] = D),
            (A[35] = S))
          : (S = A[35]),
        A[36] !== T || A[37] !== S
          ? ((N = (0, n.jsxs)("section", {
              "aria-labelledby": "work-chrome-sample-inventory-heading",
              className: "flex min-w-0 flex-1 flex-col gap-5 rounded-xl border border-default p-5 select-text",
              children: [T, S],
            })),
            (A[36] = T),
            (A[37] = S),
            (A[38] = N))
          : (N = A[38]),
        A[39] !== G || A[40] !== o || A[41] !== N
          ? ((P = (0, n.jsx)(H, { onClose: G, onSubmit: o, title: r, children: N })),
            (A[39] = G),
            (A[40] = o),
            (A[41] = N),
            (A[42] = P))
          : (P = A[42]),
        P
      )
    }
    function U(e) {
      return [...e, { isDraft: !0, kind: "new_product", name: "", stock: 0 }]
    }
    function q(e) {
      e.currentTarget.select()
    }
    function L(e) {
      return e.map(F)
    }
    function F(e) {
      return "new_product" === e.kind ? { ...e, isDraft: !1 } : e
    }
    function V(e) {
      return "new_product" === e.kind
    }
    function Q(e) {
      let t,
        a = (0, s.c)(3),
        { product: o } = e
      if ("new_product" === o.kind) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsxs)(O.E, {
                className: "gap-1",
                variant: "tip",
                children: [
                  (0, n.jsx)(u.xFs, {}),
                  (0, n.jsx)(h.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.inventory.status.new",
                    defaultMessage: "New",
                    description:
                      "Short status badge for a newly added product in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that the product has just been created, not that its stock is replenished. Keep the label short.",
                  }),
                ],
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      if (0 === o.stock) {
        let e
        return (
          a[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsxs)(O.E, {
                className: "gap-1",
                variant: "success",
                children: [
                  (0, n.jsx)(u.TlE, {}),
                  (0, n.jsx)(h.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.inventory.status.sold_out",
                    defaultMessage: "Sold out",
                    description:
                      "Short green success badge in the sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It confirms that an existing product has been marked as having zero remaining stock. Keep the label short so it fits in the status column.",
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
          ? ((t = (0, n.jsx)(O.E, {
              variant: "outline",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.inventory.status.in_stock",
                defaultMessage: "In stock",
                description:
                  "Short status badge in the editable sample ecommerce inventory table on the ChatGPT Chrome extension onboarding inventory modal. It indicates that an existing product has a stock quantity greater than zero. Keep the label short so it fits in the status column.",
              }),
            })),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    let Y = [
      {
        number: "01",
        title: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.title",
          defaultMessage: "Activation",
          description:
            "Short heading for the first finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Activation means new users completing their first meaningful task. Keep the heading short enough for a compact report finding.",
        }),
        detail: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.activation.description",
          defaultMessage: "Faster setup lifted first-week completion by 18%",
          description:
            "Evidence supporting the activation finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It states that a faster setup increased the percentage of people who completed a meaningful task in their first week by 18 percent. Preserve the 18 percent figure.",
        }),
        isRecommendation: !1,
      },
      {
        number: "02",
        title: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.title",
          defaultMessage: "Retention",
          description:
            "Short heading for the second finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Retention means users returning to use the product. Keep the heading short enough for a compact report finding.",
        }),
        detail: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.retention.description",
          defaultMessage: "Connected workflows correlate with higher return use",
          description:
            "Evidence supporting the retention finding in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It explains that users who connect an existing workflow tend to return to the product more frequently.",
        }),
        isRecommendation: !1,
      },
      {
        number: "03",
        title: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.title",
          defaultMessage: "Decision",
          description:
            "Short heading for the final, visually highlighted recommendation in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Decision means the action recommended by the research. Keep the heading short enough for a compact report finding.",
        }),
        detail: (0, n.jsx)(h.A, {
          id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_point.decision.description",
          defaultMessage: "Prioritize guided imports in the next release",
          description:
            "Final recommended action in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. It recommends prioritizing an import experience that guides users through reviewing existing data before the next product release.",
        }),
        isRecommendation: !0,
      },
    ]
    function Z(e) {
      let t,
        a,
        o,
        r,
        i,
        l,
        d,
        c,
        m,
        p = (0, s.c)(10),
        { onClose: u } = e
      return (
        p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sample_work.report.modal.title",
              defaultMessage: "Summarize a report",
              description:
                "Title of the sample report modal on the ChatGPT Chrome extension onboarding page. Appears when an end user selects the Summarize a report sample task and introduces a fictional customer research report for ChatGPT to summarize. Keep this short enough for a modal header.",
            })),
            (p[0] = t))
          : (t = p[0]),
        p[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)("h3", {
              id: "work-chrome-sample-report-title",
              className: "text-xl leading-7 font-semibold text-default",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.document.title",
                defaultMessage: "Q2 customer research synthesis",
                description:
                  "Document title of the fictional second-quarter customer research report displayed inside the ChatGPT Chrome extension onboarding sample report modal. Q2 means the second quarter of the year. Preserve its concise report-title style.",
              }),
            })),
            (p[1] = a))
          : (a = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsxs)("header", {
              className: "flex flex-col gap-1 border-b border-default pb-5",
              children: [
                a,
                (0, n.jsx)("p", {
                  className: "text-sm leading-5 text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.report.modal.document.metadata",
                    defaultMessage: "Updated today · {pageCount, plural, one {# page} other {# pages}}",
                    description:
                      "Document metadata shown under the fictional customer research report title in the ChatGPT Chrome extension onboarding sample report modal. Indicates that the document was updated today and contains {pageCount} pages; {pageCount} is the numeric page count. Keep the concise separator between the date and page count.",
                    values: { pageCount: 12 },
                  }),
                }),
              ],
            })),
            (p[2] = o))
          : (o = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)("h4", {
              id: "work-chrome-sample-report-summary",
              className: "text-base leading-6 font-semibold text-default",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.summary.title",
                defaultMessage: "Executive Summary",
                description:
                  "Heading introducing the two-paragraph executive summary in the fictional customer research report displayed in the ChatGPT Chrome extension onboarding sample report modal. Keep it concise and recognizable as a report section heading.",
              }),
            })),
            (p[3] = r))
          : (r = p[3]),
        p[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)("p", {
              className: "text-sm leading-6 text-secondary",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.summary.activation",
                defaultMessage:
                  "Across interviews, teams reached value faster when setup focused on a few guided actions instead of a broad list of features. Participants who connected an existing workflow could start with familiar context and complete a meaningful task sooner.",
                description:
                  "First complete paragraph of the executive summary in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Explains that focused onboarding and connecting familiar workflows helped research participants complete a useful first task more quickly. Translate as one cohesive report paragraph.",
              }),
            })),
            (p[4] = i))
          : (i = p[4]),
        p[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, n.jsxs)("section", {
              "aria-labelledby": "work-chrome-sample-report-summary",
              className: "flex flex-col gap-3",
              children: [
                r,
                i,
                (0, n.jsx)("p", {
                  className: "text-sm leading-6 text-secondary",
                  children: (0, n.jsx)(h.A, {
                    id: "chatgpt.work.chrome.installed.sample_work.report.modal.summary.import_friction",
                    defaultMessage:
                      "The main point of friction was uncertainty around imports. People wanted to know what would be brought over, what would remain unchanged, and whether they could review the result before continuing.",
                    description:
                      "Second complete paragraph of the executive summary in the fictional customer research report shown in the ChatGPT Chrome extension onboarding report sample. Explains that research participants wanted clarity and a chance to review data imports before continuing setup. Translate as one cohesive report paragraph.",
                  }),
                }),
              ],
            })),
            (p[5] = l))
          : (l = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)("h4", {
              id: "work-chrome-sample-report-key-points",
              className: "text-base leading-6 font-semibold text-default",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.sample_work.report.modal.key_points.title",
                defaultMessage: "Key points",
                description:
                  "Heading introducing the three numbered Activation, Retention, and Decision findings in the fictional customer research report displayed in the ChatGPT Chrome extension onboarding sample report modal. Keep it short and recognizable as a report section heading.",
              }),
            })),
            (p[6] = d))
          : (d = p[6]),
        p[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)("article", {
              "aria-labelledby": "work-chrome-sample-report-title",
              className: "flex w-full overflow-hidden rounded-xl border border-default select-text",
              children: (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-6 p-5",
                children: [
                  o,
                  l,
                  (0, n.jsxs)("section", {
                    "aria-labelledby": "work-chrome-sample-report-key-points",
                    className: "flex flex-col gap-3",
                    children: [d, (0, n.jsx)("ol", { className: "flex flex-col gap-3", children: Y.map(J) })],
                  }),
                ],
              }),
            })),
            (p[7] = c))
          : (c = p[7]),
        p[8] !== u ? ((m = (0, n.jsx)(H, { onClose: u, title: t, children: c })), (p[8] = u), (p[9] = m)) : (m = p[9]),
        m
      )
    }
    function J(e) {
      return (0, n.jsxs)(
        "li",
        {
          className: `flex flex-wrap items-start gap-3 rounded-xl border p-3 ${e.isRecommendation ? "border-default bg-success-soft" : "border-default bg-surface-secondary"}`,
          children: [
            (0, n.jsx)("span", {
              className: `shrink-0 text-sm leading-5 font-medium ${e.isRecommendation ? "text-success" : "text-tertiary"}`,
              children: e.number,
            }),
            (0, n.jsx)("span", { className: "text-sm leading-5 font-semibold text-default", children: e.title }),
            (0, n.jsx)("span", {
              className: "min-w-0 basis-full text-sm leading-5 text-secondary sm:flex-1",
              children: e.detail,
            }),
          ],
        },
        e.number,
      )
    }
    var X = a.p + "assets/onboarding-open-sidebar-dark.a0ce65f9c4.png",
      ee = a.p + "assets/onboarding-open-sidebar-light.3c3a780cf0.png",
      et = a.p + "assets/onboarding-pin-menu-dark.8ff89ec80e.png",
      ea = a.p + "assets/onboarding-pin-menu-light.104352f1ab.png",
      en = a.p + "assets/onboarding-pin-sidebar-dark.d10fac466e.png"
    let es = {
      "open-sidebar": { light: ee, dark: X },
      "pin-menu": { light: ea, dark: et },
      "pin-sidebar": { light: a.p + "assets/onboarding-pin-sidebar-light.e0ce9fa9ed.png", dark: en },
    }
    function eo(e) {
      let t,
        a,
        o,
        r,
        i,
        l,
        d,
        m,
        h = (0, s.c)(24),
        { children: p, description: u, image: g, imageAlt: f, title: b } = e,
        x = (0, c.useId)(),
        w = es[g]
      h[0] !== f || h[1] !== w.light
        ? ((t = (0, n.jsx)("img", {
            className: "max-h-full max-w-full mask-b-from-85% mask-b-to-100% object-contain dark:hidden",
            alt: f,
            src: w.light,
          })),
          (h[0] = f),
          (h[1] = w.light),
          (h[2] = t))
        : (t = h[2])
      let k = es[g]
      return (
        h[3] !== f || h[4] !== k.dark
          ? ((a = (0, n.jsx)("img", {
              className: "hidden max-h-full max-w-full mask-b-from-85% mask-b-to-100% object-contain dark:block",
              alt: f,
              src: k.dark,
            })),
            (h[3] = f),
            (h[4] = k.dark),
            (h[5] = a))
          : (a = h[5]),
        h[6] !== t || h[7] !== a
          ? ((o = (0, n.jsxs)("div", {
              className: "flex min-h-0 w-full items-end justify-center lg:min-h-40",
              dir: "ltr",
              children: [t, a],
            })),
            (h[6] = t),
            (h[7] = a),
            (h[8] = o))
          : (o = h[8]),
        h[9] !== x || h[10] !== b
          ? ((r = (0, n.jsx)("h2", {
              id: x,
              className: "text-(length:--font-heading-2xl-size) leading-none font-medium tracking-tight text-balance",
              "aria-live": "polite",
              children: b,
            })),
            (h[9] = x),
            (h[10] = b),
            (h[11] = r))
          : (r = h[11]),
        h[12] !== u
          ? ((i = (0, n.jsx)("p", {
              className: "text-heading-md leading-normal text-balance text-secondary",
              children: u,
            })),
            (h[12] = u),
            (h[13] = i))
          : (i = h[13]),
        h[14] !== p
          ? ((l =
              null == p
                ? null
                : (0, n.jsx)("div", { className: "mt-6 flex max-w-full flex-col items-center gap-3", children: p })),
            (h[14] = p),
            (h[15] = l))
          : (l = h[15]),
        h[16] !== r || h[17] !== i || h[18] !== l
          ? ((d = (0, n.jsxs)("div", {
              className: "flex w-full max-w-2xl shrink-0 flex-col items-center gap-2",
              children: [r, i, l],
            })),
            (h[16] = r),
            (h[17] = i),
            (h[18] = l),
            (h[19] = d))
          : (d = h[19]),
        h[20] !== x || h[21] !== o || h[22] !== d
          ? ((m = (0, n.jsxs)("section", {
              className:
                "flex h-full min-h-0 flex-col items-center overflow-y-auto rounded-2xl border border-default bg-gray-50 p-6 text-center font-openai-sans select-none lg:justify-center-safe dark:bg-gray-100",
              "aria-labelledby": x,
              children: [o, d],
            })),
            (h[20] = x),
            (h[21] = o),
            (h[22] = d),
            (h[23] = m))
          : (m = h[23]),
        m
      )
    }
    let er = { sidebar: "open_sidebar", pin: "pin_extension", try: "sample_gallery" },
      ei = { email: "sample_email", report: "sample_report", inventory: "sample_inventory" }
    function el() {
      var e
      let t,
        a,
        o,
        r,
        i,
        p,
        u,
        w,
        k,
        y,
        _,
        C,
        T,
        S,
        N,
        P,
        A,
        G,
        E,
        O,
        R,
        I,
        D = (0, s.c)(75),
        H = (0, d.gh)(b.u),
        K = (0, m.A)(),
        { isExtensionPinned: B, isSidePanelOpen: W } = (0, d.Ul)(j),
        U =
          ((e = (0, x.$)()),
          ("u" > typeof navigator && "brave" in navigator) || e.includes("Brave/")
            ? "Brave"
            : e.includes("Edg/")
              ? "Edge"
              : e.includes("OPR/") || e.includes("Opera/")
                ? "Opera"
                : e.includes("Vivaldi/")
                  ? "Vivaldi"
                  : "Chrome"),
        q = "Chrome" !== U
      D[0] !== B || D[1] !== W || D[2] !== q
        ? ((t = "sidebar"),
          W && B ? (t = "try") : W && !q && (t = "pin"),
          (D[0] = B),
          (D[1] = W),
          (D[2] = q),
          (D[3] = t))
        : (t = D[3])
      let [L, F] = (0, c.useState)(null),
        [V, Q] = (0, c.useState)(!1),
        [Y, J] = (0, c.useState)(null),
        X = (0, c.useRef)(null),
        ee = (0, c.useRef)(null),
        et = L?.automaticStep === t ? L.selectedStep : t,
        ea = W && B && "try" === et,
        en = null == Y ? er[et] : ei[Y]
      D[4] !== H
        ? ((a = (e) => {
            v(H, { action: "step_viewed", step: e })
          }),
          (D[4] = H),
          (D[5] = a))
        : (a = D[5])
      let es = (0, c.useEffectEvent)(a)
      ;(D[6] !== es || D[7] !== en
        ? ((o = () => {
            ;(null == ee.current && (es("page"), (ee.current = "page")),
              ee.current !== en && (es(en), (ee.current = en)))
          }),
          (D[6] = es),
          (D[7] = en),
          (D[8] = o))
        : (o = D[8]),
        D[9] !== en ? ((r = [en]), (D[9] = en), (D[10] = r)) : (r = D[10]),
        (0, c.useEffect)(o, r),
        D[11] !== J
          ? ((i = () => {
              ;(X.current?.close(), (X.current = null), J(null))
            }),
            (D[11] = J),
            (D[12] = i))
          : (i = D[12]))
      let eo = i,
        el = f.Q,
        ec = K.formatMessage(
          {
            id: "chatgpt.work.chrome.installed.page.title.browser",
            defaultMessage: "ChatGPT for {browser}",
            description:
              "Browser-tab title for the extension setup page shown immediately after installation. The browser placeholder is a brand such as Chrome, Edge, Opera, or Vivaldi and should not be translated.",
          },
          { browser: U },
        )
      ;(D[13] !== el || D[14] !== ec
        ? ((p = (0, n.jsx)(el, { title: ec })), (D[13] = el), (D[14] = ec), (D[15] = p))
        : (p = D[15]),
        D[16] !== U
          ? ((u = (0, n.jsx)("h1", {
              className: "text-[clamp(32px,5.6vw,64px)] leading-none font-medium tracking-[-0.02em] select-none",
              "aria-live": "polite",
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.page.heading.browser",
                defaultMessage: "Welcome to ChatGPT for {browser}",
                description:
                  "Welcome heading on the ChatGPT browser extension setup page immediately after installation. The browser placeholder is the current browser's brand name, such as Chrome or Edge, and must not be translated.",
                values: { browser: U },
              }),
            })),
            (D[16] = U),
            (D[17] = u))
          : (u = D[17]),
        D[18] !== ea
          ? ((w = ea
              ? (0, n.jsx)(h.A, {
                  id: "chatgpt.work.chrome.installed.sample_work.ready_announcement",
                  defaultMessage: "Try ChatGPT on sample work",
                  description:
                    "Screen-reader announcement when browser extension setup completes or the user revisits the sample email, report, and inventory tasks. The visible welcome heading remains unchanged.",
                })
              : null),
            (D[18] = ea),
            (D[19] = w))
          : (w = D[19]),
        D[20] !== w
          ? ((k = (0, n.jsx)("span", { "aria-live": "polite", className: "sr-only", children: w })),
            (D[20] = w),
            (D[21] = k))
          : (k = D[21]))
      let eh = ea && "md:flex-row"
      ;(D[22] !== eh
        ? ((y = (0, l.A)("flex min-h-0 min-w-0 flex-1 flex-col items-start gap-6 lg:flex-row", eh)),
          (D[22] = eh),
          (D[23] = y))
        : (y = D[23]),
        D[24] !== t || D[25] !== H || D[26] !== F
          ? ((_ = (e) => {
              ;(v(H, { action: "checklist_step_selected", step: er[e] }), F({ automaticStep: t, selectedStep: e }))
            }),
            (D[24] = t),
            (D[25] = H),
            (D[26] = F),
            (D[27] = _))
          : (_ = D[27]),
        D[28] !== U || D[29] !== B || D[30] !== V || D[31] !== W || D[32] !== et || D[33] !== _ || D[34] !== q
          ? ((C = (0, n.jsx)(ed, {
              browserName: U,
              isExtensionPinned: B,
              isSampleWorkCompleted: V,
              isSidePanelOpen: W,
              onSelectStep: _,
              selectedStep: et,
              usesMenuPinning: q,
            })),
            (D[28] = U),
            (D[29] = B),
            (D[30] = V),
            (D[31] = W),
            (D[32] = et),
            (D[33] = _),
            (D[34] = q),
            (D[35] = C))
          : (C = D[35]))
      let ep = ea && "md:min-h-0"
      return (
        D[36] !== ep
          ? ((T = (0, l.A)("min-h-40 min-w-0 flex-1 self-stretch lg:min-h-0", ep)), (D[36] = ep), (D[37] = T))
          : (T = D[37]),
        D[38] !== ea || D[39] !== H || D[40] !== J || D[41] !== Q
          ? ((S = ea
              ? (0, n.jsx)(M, {
                  onTry: (e) => {
                    ;(v(H, { action: "sample_selected", step: ei[e] }),
                      Q(!0),
                      J(e),
                      (X.current = H.get(g.Id).success(
                        (0, n.jsx)(h.A, {
                          id: "chatgpt.work.chrome.installed.sample_work.prompt.confirmation",
                          defaultMessage: "Added prompt to side chat",
                          description:
                            "Toast after choosing a demo on the browser extension setup page. Its prompt was prefilled in the extension's side chat composer. The user must press send there to start the demo; choosing a demo does not submit it.",
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
            (D[38] = ea),
            (D[39] = H),
            (D[40] = J),
            (D[41] = Q),
            (D[42] = S))
          : (S = D[42]),
        D[43] !== U || D[44] !== H || D[45] !== et || D[46] !== q
          ? ((N =
              "try" !== et
                ? (0, n.jsx)(em, {
                    browserName: U,
                    isPinStep: "pin" === et || q,
                    onOpenSidebar: () => v(H, { action: "sidebar_clicked", step: "open_sidebar" }),
                  })
                : null),
            (D[43] = U),
            (D[44] = H),
            (D[45] = et),
            (D[46] = q),
            (D[47] = N))
          : (N = D[47]),
        D[48] !== T || D[49] !== S || D[50] !== N
          ? ((P = (0, n.jsxs)("div", { className: T, children: [S, N] })),
            (D[48] = T),
            (D[49] = S),
            (D[50] = N),
            (D[51] = P))
          : (P = D[51]),
        D[52] !== y || D[53] !== C || D[54] !== P
          ? ((A = (0, n.jsxs)("div", { className: y, children: [C, P] })),
            (D[52] = y),
            (D[53] = C),
            (D[54] = P),
            (D[55] = A))
          : (A = D[55]),
        D[56] !== A || D[57] !== u || D[58] !== k
          ? ((G = (0, n.jsxs)("div", { className: "flex min-h-0 w-full flex-1 flex-col gap-6", children: [u, k, A] })),
            (D[56] = A),
            (D[57] = u),
            (D[58] = k),
            (D[59] = G))
          : (G = D[59]),
        D[60] !== Y || D[61] !== eo
          ? ((E = "email" === Y ? (0, n.jsx)(z, { onClose: eo }) : null), (D[60] = Y), (D[61] = eo), (D[62] = E))
          : (E = D[62]),
        D[63] !== Y || D[64] !== eo
          ? ((O = "report" === Y ? (0, n.jsx)(Z, { onClose: eo }) : null), (D[63] = Y), (D[64] = eo), (D[65] = O))
          : (O = D[65]),
        D[66] !== Y || D[67] !== eo
          ? ((R = "inventory" === Y ? (0, n.jsx)($, { onClose: eo }) : null), (D[66] = Y), (D[67] = eo), (D[68] = R))
          : (R = D[68]),
        D[69] !== G || D[70] !== E || D[71] !== O || D[72] !== R || D[73] !== p
          ? ((I = (0, n.jsxs)("main", {
              className:
                "flex h-dvh min-h-dvh w-full flex-col overflow-y-auto bg-surface p-5 font-openai-sans text-default sm:p-6",
              children: [p, G, E, O, R],
            })),
            (D[69] = G),
            (D[70] = E),
            (D[71] = O),
            (D[72] = R),
            (D[73] = p),
            (D[74] = I))
          : (I = D[74]),
        I
      )
    }
    function ed(e) {
      let t,
        a,
        o,
        r,
        i,
        d,
        c,
        m,
        g,
        f,
        b,
        x,
        w,
        k,
        y,
        _,
        v,
        j,
        C,
        T,
        S,
        N = (0, s.c)(56),
        {
          browserName: P,
          isExtensionPinned: A,
          isSampleWorkCompleted: G,
          isSidePanelOpen: M,
          onSelectStep: E,
          selectedStep: O,
          usesMenuPinning: R,
        } = e,
        I = M && (!R || A)
      ;(N[0] !== R
        ? ((t = R
            ? (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.checklist.step.sidebar.open_and_pin",
                defaultMessage: "Open and pin the extension",
                description:
                  "Selectable checklist step in ChatGPT browser extension setup for browsers such as Edge that pin from the Extensions menu. Opens the combined opening and pinning instructions.",
              })
            : (0, n.jsx)(h.A, {
                id: "chatgpt.work.chrome.installed.checklist.step.sidebar.open_extension",
                defaultMessage: "Open the extension in the sidebar",
                description:
                  "First selectable step in the ChatGPT browser extension setup checklist. Clicking it shows instructions for opening the installed extension in the browser sidebar. Keep this as a short action label.",
              })),
          (N[0] = R),
          (N[1] = t))
        : (t = N[1]),
        N[2] !== I || N[3] !== t
          ? ((a = { step: "sidebar", isCompleted: I, isEnabled: !0, label: t }), (N[2] = I), (N[3] = t), (N[4] = a))
          : (a = N[4]),
        N[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.checklist.step.pin",
              defaultMessage: "Pin the extension",
              description:
                "Second selectable step in the ChatGPT browser extension setup checklist. Opens toolbar-pinning instructions after the sidebar has opened. The user can revisit this step after completing it.",
            })),
            (N[5] = o))
          : (o = N[5]),
        N[6] !== A || N[7] !== M
          ? ((r = { step: "pin", isCompleted: A, isEnabled: M, label: o }), (N[6] = A), (N[7] = M), (N[8] = r))
          : (r = N[8]))
      let D = M && A
      ;(N[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, n.jsx)(h.A, {
            id: "chatgpt.work.chrome.installed.checklist.step.sample_work",
            defaultMessage: "Try ChatGPT on sample work",
            description:
              "Final selectable step in the ChatGPT browser extension setup checklist. Opens fictional email, report, and inventory tasks after the sidebar has opened and the extension is pinned.",
          })),
          (N[9] = i))
        : (i = N[9]),
        N[10] !== G || N[11] !== D
          ? ((d = { step: "try", isCompleted: G, isEnabled: D, label: i }), (N[10] = G), (N[11] = D), (N[12] = d))
          : (d = N[12]),
        N[13] !== a || N[14] !== r || N[15] !== d
          ? ((c = [a, r, d]), (N[13] = a), (N[14] = r), (N[15] = d), (N[16] = c))
          : (c = N[16]))
      let H = c
      N[17] !== H || N[18] !== R
        ? ((m = H.filter((e) => {
            let { step: t } = e
            return !R || "pin" !== t
          })),
          (N[17] = H),
          (N[18] = R),
          (N[19] = m))
        : (m = N[19])
      let K = m
      N[20] !== K ? ((g = K.filter(ec)), (N[20] = K), (N[21] = g)) : (g = N[21])
      let B = g.length
      if (N[22] !== P || N[23] !== B || N[24] !== O || N[25] !== R) {
        let e = R ? ["w-0", "w-1/2", "w-full"] : ["w-0", "w-1/3", "w-2/3", "w-full"],
          t = "try" === O && "md:w-72"
        ;(N[33] !== t
          ? ((y = (0, l.A)("w-full shrink-0 rounded-2xl border border-default p-2.5 select-none lg:w-72 xl:w-96", t)),
            (N[33] = t),
            (N[34] = y))
          : (y = N[34]),
          (_ = "extension-onboarding-checklist-heading"),
          (w = "flex flex-col gap-4 px-1.5 py-3"),
          N[35] !== P
            ? ((k = (0, n.jsx)("h2", {
                id: "extension-onboarding-checklist-heading",
                className: "body-md leading-5 font-normal text-balance",
                children: (0, n.jsx)(h.A, {
                  id: "chatgpt.work.chrome.installed.checklist.heading.browser_name",
                  defaultMessage: "Set up your ChatGPT {browser} Extension",
                  description:
                    "Heading above the ChatGPT browser extension setup checklist. Users open the sidebar, pin the extension, and try sample work. The browser placeholder is a brand name such as Chrome or Edge and must not be translated.",
                  values: { browser: P },
                }),
              })),
              (N[35] = P),
              (N[36] = k))
            : (k = N[36]),
          (b = "h-1.5 overflow-hidden rounded-full bg-text/10"),
          (x = "true"),
          (f = (0, l.A)("h-full rounded-full bg-text", e[B])),
          (N[22] = P),
          (N[23] = B),
          (N[24] = O),
          (N[25] = R),
          (N[26] = f),
          (N[27] = b),
          (N[28] = x),
          (N[29] = w),
          (N[30] = k),
          (N[31] = y),
          (N[32] = _))
      } else ((f = N[26]), (b = N[27]), (x = N[28]), (w = N[29]), (k = N[30]), (y = N[31]), (_ = N[32]))
      return (
        N[37] !== f ? ((v = (0, n.jsx)("div", { className: f })), (N[37] = f), (N[38] = v)) : (v = N[38]),
        N[39] !== b || N[40] !== x || N[41] !== v
          ? ((j = (0, n.jsx)("div", { className: b, "aria-hidden": x, children: v })),
            (N[39] = b),
            (N[40] = x),
            (N[41] = v),
            (N[42] = j))
          : (j = N[42]),
        N[43] !== w || N[44] !== k || N[45] !== j
          ? ((C = (0, n.jsxs)("div", { className: w, children: [k, j] })),
            (N[43] = w),
            (N[44] = k),
            (N[45] = j),
            (N[46] = C))
          : (C = N[46]),
        N[47] !== E || N[48] !== O || N[49] !== K
          ? ((T = (0, n.jsx)("ol", {
              className: "flex list-none flex-col gap-2 py-2",
              children: K.map((e) => {
                let { step: t, isCompleted: a, isEnabled: s, label: o } = e
                return (0, n.jsxs)(
                  "li",
                  {
                    children: [
                      (0, n.jsxs)(p.$, {
                        className:
                          "min-h-8 w-full gap-1.5 rounded-button-action border border-transparent px-2 py-1.5 text-start body-md leading-5 font-normal text-default not-disabled:not-aria-disabled:hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover pointer-coarse:min-h-10",
                        "aria-current": O === t ? "step" : void 0,
                        "aria-disabled": !s || void 0,
                        disabledAppearance: "unchanged",
                        onClick: (e) => {
                          s ? E(t) : e.preventDefault()
                        },
                        type: "button",
                        unstyled: !0,
                        children: [
                          a
                            ? (0, n.jsx)(u.hEG, { className: "text-success" })
                            : (0, n.jsx)(u.GuK, { className: "text-tertiary" }),
                          (0, n.jsx)("span", { className: "min-w-0 text-pretty whitespace-normal", children: o }),
                          a
                            ? (0, n.jsx)("span", {
                                className: "sr-only",
                                children: (0, n.jsx)(h.A, {
                                  id: "chatgpt.work.chrome.installed.checklist.step.completed",
                                  defaultMessage: "Completed",
                                  description:
                                    "Screen-reader completion status after a completed step's label in the ChatGPT browser extension setup checklist. The completed step remains selectable.",
                                }),
                              })
                            : null,
                        ],
                      }),
                      "try" === t && s && "try" === O
                        ? (0, n.jsx)("p", {
                            className: "ms-9 me-2 mt-1 body-sm leading-5 text-secondary",
                            children: (0, n.jsx)(h.A, {
                              id: "chatgpt.work.chrome.installed.checklist.step.sample_work.description",
                              defaultMessage: "Choose a demo to see ChatGPT work on this page",
                              description:
                                "Small subtitle under the selected Try ChatGPT on sample work checklist step on the browser extension setup page. Appears only while the sample gallery is active and explains that users can choose a fictional demo to see ChatGPT perform website actions on their behalf.",
                            }),
                          })
                        : null,
                    ],
                  },
                  t,
                )
              }),
            })),
            (N[47] = E),
            (N[48] = O),
            (N[49] = K),
            (N[50] = T))
          : (T = N[50]),
        N[51] !== y || N[52] !== _ || N[53] !== C || N[54] !== T
          ? ((S = (0, n.jsxs)("aside", { className: y, "aria-labelledby": _, children: [C, T] })),
            (N[51] = y),
            (N[52] = _),
            (N[53] = C),
            (N[54] = T),
            (N[55] = S))
          : (S = N[55]),
        S
      )
    }
    function ec(e) {
      return e.isCompleted
    }
    function em(e) {
      let t,
        a,
        o,
        r,
        l,
        d,
        c = (0, s.c)(25),
        { browserName: g, isPinStep: f, onOpenSidebar: b } = e,
        x = (0, m.A)(),
        w = "Chrome" !== g
      if (f)
        if (w) {
          let e
          ;((t = "pin-menu"),
            c[3] !== g || c[4] !== x
              ? ((e = x.formatMessage(
                  {
                    id: "chatgpt.work.chrome.installed.pin.image.alt.browser_name",
                    defaultMessage: "The {browser} Extensions menu showing how to pin ChatGPT to the toolbar",
                    description:
                      "Accessible description of the toolbar-pinning illustration on the ChatGPT browser extension setup page. The browser placeholder is a brand name and must not be translated.",
                  },
                  { browser: g },
                )),
                (c[3] = g),
                (c[4] = x),
                (c[5] = e))
              : (e = c[5]),
            (a = e))
        } else {
          let e
          ;((t = "pin-sidebar"),
            c[6] !== x
              ? ((e = x.formatMessage({
                  id: "chatgpt.work.chrome.installed.pin.image.alt.sidebar",
                  defaultMessage:
                    "The pin button at the top of the ChatGPT sidebar adds the extension to the Chrome toolbar",
                  description:
                    "Accessible description of the pinning illustration shown after the ChatGPT sidebar opens in Chrome. Helps the user locate the pin button in the sidebar header.",
                })),
                (c[6] = x),
                (c[7] = e))
              : (e = c[7]),
            (a = e))
        }
      else {
        let e
        ;((t = "open-sidebar"),
          c[0] !== g || c[1] !== x
            ? ((e = x.formatMessage(
                {
                  id: "chatgpt.work.chrome.installed.sidebar.image.alt.browser_name",
                  defaultMessage: "The {browser} Extensions menu with ChatGPT selected",
                  description:
                    "Accessible description of the opening illustration on the ChatGPT browser extension setup page. The browser placeholder is a brand name and must not be translated.",
                },
                { browser: g },
              )),
              (c[0] = g),
              (c[1] = x),
              (c[2] = e))
            : (e = c[2]),
          (a = e))
      }
      if (w) {
        let e
        ;(c[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.pin.description.open_and_pin",
              defaultMessage:
                "Pin ChatGPT in the Extensions menu, then click ChatGPT in your toolbar to open the sidebar",
              description:
                "Instructions for the combined opening and pinning step in browsers such as Edge. Users pin ChatGPT from Extensions and then open the sidebar from the newly pinned toolbar icon.",
            })),
            (c[8] = e))
          : (e = c[8]),
          (o = e))
      } else if (f) {
        let e
        ;(c[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.pin.description",
              defaultMessage: "Pin the extension so you can open ChatGPT quickly from any tab",
              description:
                "Body beneath the toolbar-pinning illustration on the ChatGPT browser extension setup page. Explains that pinning makes the extension easy to access from any browser tab.",
            })),
            (c[9] = e))
          : (e = c[9]),
          (o = e))
      } else {
        let e
        ;(c[10] !== g
          ? ((e = (0, n.jsx)(h.A, {
              id: "chatgpt.work.chrome.installed.sidebar.description.browser_name",
              defaultMessage:
                "Click the Extensions icon in your {browser} toolbar, then select ChatGPT. Or click the sidebar button below.",
              description:
                "Instructions for opening ChatGPT through the Extensions menu or the button below on the browser extension setup page. The browser placeholder is a brand name and must not be translated.",
              values: { browser: g },
            })),
            (c[10] = g),
            (c[11] = e))
          : (e = c[11]),
          (o = e))
      }
      return (
        c[12] !== g || c[13] !== f
          ? ((r = f
              ? (0, n.jsx)(h.A, {
                  id: "chatgpt.work.chrome.installed.pin.heading.browser_name",
                  defaultMessage: "Add ChatGPT to your {browser} toolbar",
                  description:
                    "Heading on the pinning step of the ChatGPT browser extension setup page. The browser placeholder is the browser brand name, such as Chrome or Edge, and must not be translated.",
                  values: { browser: g },
                })
              : (0, n.jsx)(h.A, {
                  id: "chatgpt.work.chrome.installed.sidebar.heading",
                  defaultMessage: "Open the ChatGPT extension",
                  description:
                    "Heading on the first step of the ChatGPT browser extension setup page. Invites the user to open the extension in their browser sidebar.",
                })),
            (c[12] = g),
            (c[13] = f),
            (c[14] = r))
          : (r = c[14]),
        c[15] !== f || c[16] !== b || c[17] !== w
          ? ((l =
              f || w
                ? null
                : (0, n.jsxs)(p.$, {
                    className:
                      "min-h-16 justify-center gap-2 rounded-full border border-transparent bg-text/5 px-6 py-4 text-heading-md leading-7 font-medium text-default not-disabled:not-aria-disabled:hover:bg-text/10 data-[state=open]:bg-text/10",
                    onClick: () => {
                      ;(window.dispatchEvent(
                        new CustomEvent(i.UZ, {
                          cancelable: !0,
                          detail: { type: i.Nq, source: "chatgpt_website_onboarding" },
                        }),
                      ),
                        b())
                    },
                    type: "button",
                    unstyled: !0,
                    children: [
                      (0, n.jsx)(u.d24, {}),
                      (0, n.jsx)("span", {
                        className: "min-w-0 whitespace-normal",
                        children: (0, n.jsx)(h.A, {
                          id: "chatgpt.work.chrome.installed.sidebar.button.open",
                          defaultMessage: "Open sidebar",
                          description:
                            "Button on the first ChatGPT browser extension setup step that opens Side Chat in the current browser window.",
                        }),
                      }),
                    ],
                  })),
            (c[15] = f),
            (c[16] = b),
            (c[17] = w),
            (c[18] = l))
          : (l = c[18]),
        c[19] !== o || c[20] !== t || c[21] !== a || c[22] !== r || c[23] !== l
          ? ((d = (0, n.jsx)(eo, { image: t, imageAlt: a, title: r, description: o, children: l })),
            (c[19] = o),
            (c[20] = t),
            (c[21] = a),
            (c[22] = r),
            (c[23] = l),
            (c[24] = d))
          : (d = c[24]),
        d
      )
    }
    function eh(e) {
      let t,
        a = (0, s.c)(5),
        { authMethod: i } = (0, r.As)(),
        l = (0, o.zy)(),
        d = (0, o.$P)(l)
      if (null == i) {
        let e, t
        a[0] !== d ? ((e = new URLSearchParams({ next: d })), (a[0] = d), (a[1] = e)) : (e = a[1])
        let s = `/auth/login?${e}`
        return (a[2] !== s ? ((t = (0, n.jsx)(o.C5, { to: s, replace: !0 })), (a[2] = s), (a[3] = t)) : (t = a[3]), t)
      }
      return (a[4] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, n.jsx)(el, {})), (a[4] = t)) : (t = a[4]), t)
    }
  },
  GKsW(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      o = a("zTeN"),
      r = a("zd8w"),
      i = a("GaA7"),
      l = a("OWtl"),
      d = a("Oj9r"),
      c = a("n5oN")
    let m = (0, o.vP)(l.u, () => [])
    function h(e) {
      let t,
        a,
        n,
        d,
        c,
        h,
        f = (0, s.c)(13),
        { title: b, nativeTitle: x } = e,
        w = void 0 === x ? b : x,
        k = (0, o.gh)(l.u),
        [y] = (0, r.useState)(p)
      return (
        f[0] !== w || f[1] !== y || f[2] !== k || f[3] !== b
          ? ((t = () => {
              if (i.appServices?.windowTitle == null) return
              let e = { owner: y, title: null == b ? void 0 : (w ?? null) }
              ;(k.set(m, (t) => (t.some((e) => e.owner === y) ? t.map((t) => (t.owner === y ? e : t)) : [...t, e])),
                g(k))
            }),
            (a = [k, y, b, w]),
            (f[0] = w),
            (f[1] = y),
            (f[2] = k),
            (f[3] = b),
            (f[4] = t),
            (f[5] = a))
          : ((t = f[4]), (a = f[5])),
        (0, r.useEffect)(t, a),
        f[6] !== y || f[7] !== k
          ? ((n = () => () => {
              i.appServices?.windowTitle != null && (k.set(m, (e) => e.filter((e) => e.owner !== y)), g(k))
            }),
            (d = [k, y]),
            (f[6] = y),
            (f[7] = k),
            (f[8] = n),
            (f[9] = d))
          : ((n = f[8]), (d = f[9])),
        (0, r.useEffect)(n, d),
        f[10] !== b
          ? ((c = () => {
              if (null == b) return
              let e = document.title
              u(b)
              let t = document.title
              return () => {
                document.title === t && u(e)
              }
            }),
            (h = [b]),
            (f[10] = b),
            (f[11] = c),
            (f[12] = h))
          : ((c = f[11]), (h = f[12])),
        (0, r.useEffect)(c, h),
        null
      )
    }
    function p() {
      return Symbol()
    }
    function u(e) {
      let t = document.head.querySelector("title")?.firstChild
      t instanceof Text && null == t.nextSibling ? (t.data = e) : (document.title = e)
    }
    function g(e) {
      i.appServices.windowTitle?.setTitle(e.get(m).findLast((e) => void 0 !== e.title)?.title ?? null)
    }
    a.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            a = (0, s.c)(2),
            { title: r } = e,
            i = (0, o.gh)(d.GD),
            l = (0, o._U)(c.m, `${i.value.pathname}${i.value.search ?? ""}`),
            m = r ?? l
          return (a[0] !== m ? ((t = (0, n.jsx)(h, { title: m })), (a[0] = m), (a[1] = t)) : (t = a[1]), t)
        },
        Q: h,
      },
    )
  },
}
//# sourceMappingURL=677003.d3a2b11bc7.js.map
