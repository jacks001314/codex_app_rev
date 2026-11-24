export const __rspack_esm_ids = [892323]
export const __webpack_modules__ = {
  xhqJ(e, t, n) {
    var i = n("Qgfj"),
      o = n("ABl9"),
      a = n("xUVi")
    let s = (0, i.YK)({
        tipBadge: { id: "composerTips.badge", defaultMessage: "TIP" },
        documentsContent: {
          id: "composerTips.documents.content",
          defaultMessage: "Turn your work into a document you can download and share.",
        },
        createDocument: { id: "composerTips.documents.action", defaultMessage: "Create document" },
        documentsPrompt: {
          id: "composerTips.documents.prompt",
          defaultMessage: "Turn this work into a document I can download and share.",
        },
        spreadsheetsContent: {
          id: "composerTips.spreadsheets.content",
          defaultMessage: "Create a spreadsheet to organize data, formulas, and next steps.",
        },
        createSpreadsheet: { id: "composerTips.spreadsheets.action", defaultMessage: "Create spreadsheet" },
        spreadsheetsPrompt: {
          id: "composerTips.spreadsheets.prompt",
          defaultMessage: "Turn this work into a spreadsheet with organized data, formulas, and next steps.",
        },
        presentationsContent: {
          id: "composerTips.presentations.content",
          defaultMessage: "Turn your notes or research into a presentation.",
        },
        createPresentation: { id: "composerTips.presentations.action", defaultMessage: "Create presentation" },
        presentationsPrompt: {
          id: "composerTips.presentations.prompt",
          defaultMessage: "Turn these notes and research into a presentation.",
        },
        webSearchContent: {
          id: "composerTips.webSearch.content",
          defaultMessage: "Search the web to bring current information into your work.",
        },
        searchWeb: { id: "composerTips.webSearch.action", defaultMessage: "Search the web" },
        webSearchPrompt: {
          id: "composerTips.webSearch.prompt",
          defaultMessage: "Search the web for current information relevant to this work.",
        },
        skillsContent: {
          id: "composerTips.skills.content",
          defaultMessage: "Try a specialized skill for writing, research, or spreadsheets.",
        },
        exploreSkills: { id: "composerTips.skills.action", defaultMessage: "Explore skills" },
        steeringContent: {
          id: "composerTips.steering.content",
          defaultMessage: "Tell ChatGPT what to change while it\u2019s working.",
        },
        addToMessage: { id: "composerTips.addToMessage.action", defaultMessage: "Add to message" },
        steeringPrompt: { id: "composerTips.steering.prompt", defaultMessage: "Change the current approach by " },
        planModeContent: {
          id: "composerTips.planMode.content",
          defaultMessage: "Ask ChatGPT to make a plan before starting a complex task.",
        },
        createPlan: { id: "composerTips.planMode.action", defaultMessage: "Create plan" },
        planModePrompt: {
          id: "composerTips.planMode.prompt",
          defaultMessage: "Create a plan for this task before making changes.",
        },
        scheduledTasksContent: {
          id: "composerTips.scheduledTasks.content",
          defaultMessage: "Create a scheduled task to handle recurring work automatically.",
        },
        scheduleTask: { id: "composerTips.scheduleTask.action", defaultMessage: "Schedule task" },
        morningBriefingContent: {
          id: "composerTips.morningBriefing.content",
          defaultMessage: "Get a morning briefing from your connected apps.",
        },
        pluginsContent: {
          id: "composerTips.plugins.content",
          defaultMessage: "Explore plugins to connect more of the tools you use.",
        },
        explorePlugins: { id: "composerTips.plugins.action", defaultMessage: "Explore plugins" },
        workModeContent: {
          id: "composerTips.workMode.content",
          defaultMessage: "Switch to Work for tasks that involve multiple steps or files.",
        },
        tryWork: { id: "composerTips.workMode.action", defaultMessage: "Try Work" },
        sitesContent: {
          id: "composerTips.sites.content",
          defaultMessage: "Ask ChatGPT to create a website from your idea.",
        },
        sitesPrompt: { id: "composerTips.sites.prompt", defaultMessage: "Create a website from this idea: " },
        googleDriveContent: {
          id: "composerTips.googleDrive.content",
          defaultMessage: "Connect Google Drive to find and work with your files.",
        },
        connectDrive: { id: "composerTips.googleDrive.action", defaultMessage: "Connect Drive" },
        gmailContent: {
          id: "composerTips.gmail.content",
          defaultMessage: "Connect Gmail to summarize emails and draft replies.",
        },
        connectGmail: { id: "composerTips.gmail.action", defaultMessage: "Connect Gmail" },
        calendarContent: {
          id: "composerTips.calendar.content",
          defaultMessage: "Connect your calendar to prepare for upcoming meetings.",
        },
        connectCalendar: { id: "composerTips.calendar.action", defaultMessage: "Connect Calendar" },
        voiceChatContent: {
          id: "composerTips.voiceChat.content",
          defaultMessage: "Start a voice chat when it\u2019s easier to talk things through.",
        },
        startVoice: { id: "composerTips.voiceChat.action", defaultMessage: "Start voice" },
        recurringWorkContent: {
          id: "composerTips.recurringWork.content",
          defaultMessage: "Save time by turning a repeated request into a scheduled task.",
        },
        multipleThreadsContent: {
          id: "composerTips.multipleThreads.content",
          defaultMessage: "ChatGPT can work on multiple tasks at once",
        },
        startNewChat: { id: "composerTips.multipleThreads.action", defaultMessage: "Start new chat" },
        notificationsContent: {
          id: "composerTips.notifications.content",
          defaultMessage: "Get notified when a task finishes or needs you.",
        },
        enableNotifications: { id: "composerTips.notifications.action", defaultMessage: "Enable notifications" },
        computerUseContent: {
          id: "composerTips.computerUse.content",
          defaultMessage: "Control apps on your computer using Computer Use.",
        },
        setUp: { id: "composerTips.computerUse.action", defaultMessage: "Set up" },
        browserUseContent: {
          id: "composerTips.browserUse.content",
          defaultMessage: "Let ChatGPT navigate websites and take action in your browser.",
        },
        installExtension: { id: "composerTips.browserUse.action", defaultMessage: "Install extension" },
      }),
      l = () => !0,
      r = (e, t) => e.availableSkillNames?.has(t) === !0,
      c = [
        {
          id: "documents",
          action: { type: "prefill-with-skill", prompt: s.documentsPrompt, skillName: "documents" },
          badgeLabel: s.tipBadge,
          content: s.documentsContent,
          actionLabel: s.createDocument,
          isEligible: (e) => r(e, "documents"),
        },
        {
          id: "spreadsheets",
          action: { type: "prefill-with-skill", prompt: s.spreadsheetsPrompt, skillName: "spreadsheets" },
          badgeLabel: s.tipBadge,
          content: s.spreadsheetsContent,
          actionLabel: s.createSpreadsheet,
          isEligible: (e) => r(e, "spreadsheets"),
        },
        {
          id: "presentations",
          action: { type: "prefill-with-skill", prompt: s.presentationsPrompt, skillName: "presentations" },
          badgeLabel: s.tipBadge,
          content: s.presentationsContent,
          actionLabel: s.createPresentation,
          isEligible: (e) => r(e, "presentations"),
        },
        {
          id: "web-search",
          action: { type: "prefill", prompt: s.webSearchPrompt },
          badgeLabel: s.tipBadge,
          content: s.webSearchContent,
          actionLabel: s.searchWeb,
          isEligible: l,
        },
        {
          id: "skills",
          action: { type: "navigate", path: "/skills", state: { initialTab: "skills" } },
          badgeLabel: s.tipBadge,
          content: s.skillsContent,
          actionLabel: s.exploreSkills,
          isEligible: l,
        },
        {
          id: "steering",
          action: { type: "prefill", prompt: s.steeringPrompt },
          badgeLabel: s.tipBadge,
          content: s.steeringContent,
          actionLabel: s.addToMessage,
          isEligible: l,
        },
        {
          id: "plan-mode",
          action: { type: "prefill", prompt: s.planModePrompt },
          badgeLabel: s.tipBadge,
          content: s.planModeContent,
          actionLabel: s.createPlan,
          isEligible: l,
        },
        {
          id: "scheduled-tasks",
          action: { type: "navigate", path: "/automations?automationMode=create" },
          badgeLabel: s.tipBadge,
          content: s.scheduledTasksContent,
          actionLabel: s.scheduleTask,
          isEligible: (e) => e.automationsAvailable && !1 === e.hasAutomations,
        },
        {
          id: "morning-briefing",
          action: { type: "navigate", path: "/automations?automationMode=create" },
          badgeLabel: s.tipBadge,
          content: s.morningBriefingContent,
          actionLabel: s.scheduleTask,
          isEligible: (e) => e.automationsAvailable,
        },
        {
          id: "plugins",
          action: { type: "navigate", path: "/skills", state: { initialTab: "plugins" } },
          badgeLabel: s.tipBadge,
          content: s.pluginsContent,
          actionLabel: s.explorePlugins,
          isEligible: l,
        },
        {
          id: "work-mode",
          action: { type: "switch-to-work" },
          badgeLabel: s.tipBadge,
          content: s.workModeContent,
          actionLabel: s.tryWork,
          isEligible: (e) => !e.isWorkMode,
        },
        {
          id: "sites",
          action: { type: "prefill-with-plugin", pluginId: o.$n, prompt: s.sitesPrompt },
          badgeLabel: s.tipBadge,
          content: s.sitesContent,
          actionLabel: s.addToMessage,
          isEligible: (e) => e.enabledPluginIds?.has(o.$n) === !0,
        },
        {
          id: "google-drive",
          action: { type: "navigate", path: "/plugins?search=Google%20Drive" },
          badgeLabel: s.tipBadge,
          content: s.googleDriveContent,
          actionLabel: s.connectDrive,
          isEligible: l,
        },
        {
          id: "gmail",
          action: { type: "navigate", path: "/plugins?search=Gmail" },
          badgeLabel: s.tipBadge,
          content: s.gmailContent,
          actionLabel: s.connectGmail,
          isEligible: l,
        },
        {
          id: "calendar",
          action: { type: "navigate", path: "/plugins?search=Calendar" },
          badgeLabel: s.tipBadge,
          content: s.calendarContent,
          actionLabel: s.connectCalendar,
          isEligible: l,
        },
        {
          id: "voice-chat",
          action: { type: "start-voice" },
          badgeLabel: s.tipBadge,
          content: s.voiceChatContent,
          actionLabel: s.startVoice,
          isEligible: (e) => e.voiceAvailable,
        },
        {
          id: "recurring-work",
          action: { type: "navigate", path: "/automations?automationMode=create" },
          badgeLabel: s.tipBadge,
          content: s.recurringWorkContent,
          actionLabel: s.scheduleTask,
          isEligible: (e) => e.automationsAvailable,
        },
        {
          id: "multiple-active-threads",
          action: { type: "new-chat" },
          badgeLabel: s.tipBadge,
          content: s.multipleThreadsContent,
          actionLabel: s.startNewChat,
          isEligible: l,
        },
        {
          id: "notifications",
          action: { type: "open-notification-settings" },
          badgeLabel: s.tipBadge,
          content: s.notificationsContent,
          actionLabel: s.enableNotifications,
          isEligible: (e) => e.notificationOnboardingResolved && "disabled" === e.notificationPermissionStatus,
        },
        {
          id: "computer-use",
          action: { type: "navigate", path: "/settings/computer-use" },
          badgeLabel: s.tipBadge,
          content: s.computerUseContent,
          actionLabel: s.setUp,
          isEligible: (e) =>
            ((e, ...t) => null != e.connectedPluginNames && t.every((t) => !e.connectedPluginNames?.has(t)))(
              e,
              "computer-use",
            ),
        },
        {
          id: "browser-use",
          action: { type: "navigate", path: "/settings/computer-use" },
          badgeLabel: s.tipBadge,
          content: s.browserUseContent,
          actionLabel: s.installExtension,
          isEligible: (e) => !1 === e.browserExtensionInstalled,
        },
      ]
    n.d(
      t,
      {},
      {
        C: function (e) {
          if (!e.startsWith(a.D)) return null
          let t = e.slice(a.D.length).replaceAll("_", "-")
          return c.find(({ id: e }) => e === t) ?? null
        },
        l: c,
      },
    )
  },
  YS2C(e, t, n) {
    n.d(t, { ComposerTipController: () => V })
    var i = n("ABep"),
      o = n("QosV"),
      a = n("pLGj"),
      s = n("qmMi"),
      l = n("zd8w"),
      r = n("Wf1j"),
      c = n("Ywss"),
      d = n("ChYf"),
      u = n("tl5a"),
      p = n("UOa8"),
      m = n("qKlE"),
      g = n("Ro2M"),
      f = n("hlVK"),
      b = n("SPzj"),
      h = n("oHzU"),
      C = n("dvYj"),
      _ = n("MrGp"),
      T = n("KXZK"),
      E = n("T8X0"),
      v = n("YWcr"),
      M = n("jVko"),
      k = n("NyRq"),
      O = n("TpxB"),
      I = n("WXrt"),
      S = n("cLdu"),
      w = n("GaA7"),
      A = n("OWtl"),
      y = n("Sd8U"),
      x = n("ndjw"),
      N = n("kfGJ"),
      L = n("bPa2"),
      D = n("xhqJ"),
      R = n("oyxz"),
      P = n("Qgfj"),
      B = n("TjgH"),
      G = n("Sm6l"),
      j = n("bVeK")
    function F(e) {
      let t,
        n,
        a,
        s,
        l,
        c,
        d,
        u,
        p,
        m = (0, o.c)(22),
        { onDismiss: g, onPrimaryAction: f, tip: b } = e,
        h = (0, r.A)()
      return (
        m[0] !== b.badgeLabel
          ? ((t = (0, i.jsx)(B.E, {
              className: "shrink-0",
              variant: "tip",
              children: (0, i.jsx)(R.A, { ...b.badgeLabel }),
            })),
            (m[0] = b.badgeLabel),
            (m[1] = t))
          : (t = m[1]),
        m[2] !== b.content
          ? ((n = (0, i.jsx)("span", {
              className: "min-w-0 text-center",
              children: (0, i.jsx)(R.A, { ...b.content }),
            })),
            (m[2] = b.content),
            (m[3] = n))
          : (n = m[3]),
        m[4] !== b.actionLabel
          ? ((a = (0, i.jsx)(R.A, { ...b.actionLabel })), (m[4] = b.actionLabel), (m[5] = a))
          : (a = m[5]),
        m[6] !== f || m[7] !== a
          ? ((s = (0, i.jsx)(G.$, {
              className: "underline decoration-dotted underline-offset-4",
              color: "ghostMuted",
              onClick: f,
              size: "inline",
              children: a,
            })),
            (m[6] = f),
            (m[7] = a),
            (m[8] = s))
          : (s = m[8]),
        m[9] !== n || m[10] !== s
          ? ((l = (0, i.jsxs)("span", {
              className: "flex min-w-0 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-secondary",
              children: [n, s],
            })),
            (m[9] = n),
            (m[10] = s),
            (m[11] = l))
          : (l = m[11]),
        m[12] !== h ? ((c = h.formatMessage(U.dismiss)), (m[12] = h), (m[13] = c)) : (c = m[13]),
        m[14] === Symbol.for("react.memo_cache_sentinel") ? ((d = (0, i.jsx)(j.Gmf, {})), (m[14] = d)) : (d = m[14]),
        m[15] !== g || m[16] !== c
          ? ((u = (0, i.jsx)(G.$, {
              "aria-label": c,
              className:
                "pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100",
              color: "secondary",
              onClick: g,
              radius: "large",
              size: "iconCircleSm",
              children: d,
            })),
            (m[15] = g),
            (m[16] = c),
            (m[17] = u))
          : (u = m[17]),
        m[18] !== t || m[19] !== l || m[20] !== u
          ? ((p = (0, i.jsx)("aside", {
              "aria-live": "polite",
              className: "flex w-full justify-center",
              role: "status",
              children: (0, i.jsxs)("div", {
                className:
                  "group relative flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-7 py-1 select-none",
                children: [t, l, u],
              }),
            })),
            (m[18] = t),
            (m[19] = l),
            (m[20] = u),
            (m[21] = p))
          : (p = m[21]),
        p
      )
    }
    let U = (0, P.YK)({ dismiss: { id: "composerTips.dismiss", defaultMessage: "Dismiss tip" } }),
      W = Object.keys(a.Ypn)
        .filter(a.rUV)
        .map((e) => ({ browserFamily: e })),
      K = (0, s.RD)(A.u, () => ({
        enabled: null != w.appServices.systemPermissions,
        queryKey: ["composer-tips", "notification-permission-status"],
        queryFn: async () => (await w.appServices.systemPermissions?.getNotificationPermissionStatus()) ?? null,
        refetchOnWindowFocus: "always",
        staleTime: 0,
      })),
      H = (0, s.un)(y.PR, ({ get: e, scope: t }) => ("local" === t.value.kind ? e(u.qX, t.value.conversationId) : N.fI))
    function V(e) {
      let t,
        n,
        a,
        u,
        k,
        y,
        N,
        R,
        P,
        B,
        G,
        j,
        U,
        V,
        et,
        en,
        ei = (0, o.c)(58),
        { conversationId: eo, isWorkMode: ea, onStartVoice: es } = e,
        el = (0, s.gh)(A.u),
        er = (0, l.useContext)(M.U),
        ec = (0, r.A)(),
        ed = (0, c.Zp)(),
        eu = (0, s._U)(_.jS, eo),
        ep = (0, s._U)(C.pA, eu ?? eo)
      ei[0] !== ep
        ? ((t = null != ep && (0, h.tf)(ep.beacon) ? ep.beacon : null), (ei[0] = ep), (ei[1] = t))
        : (t = ei[1])
      let em = t
      ei[2] !== ep
        ? ((n =
            null == ep
              ? null
              : { placement: "in_conversation", productExperience: ep.productExperience, treatment: "banner" }),
          (ei[2] = ep),
          (ei[3] = n))
        : (n = ei[3])
      let eg = n,
        ef = (0, s._U)(_.Od, eo),
        eb = (0, s.Ul)(H)
      ei[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { name: "automations.local" }), (ei[4] = a))
        : (a = ei[4])
      let eh = (0, s._U)(d.G, a)
      ei[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = { name: "automations.cloud" }), (ei[5] = u))
        : (u = ei[5])
      let eC = (0, s._U)(d.G, u),
        e_ = eh.isCapable || eC.isCapable,
        { accountId: eT, isLoading: eE } = (0, p.As)(),
        ev = (0, s.Ul)(O.wT),
        eM = null == eT ? void 0 : (0, O.WA)(ev, eT),
        ek =
          !eE &&
          void 0 !== ev &&
          (null == eM ||
            !0 === eM.dismissed ||
            !0 === eM.expired ||
            !eM.items.some(ee) ||
            (0, O.E6)(eM, "enable_notifications")),
        { data: eO, isLoading: eI } = (0, s.Ul)(K)
      ei[6] !== eh.isCapable ? ((k = { enabled: eh.isCapable }), (ei[6] = eh.isCapable), (ei[7] = k)) : (k = ei[7])
      let { data: eS, error: ew, isLoading: eA } = (0, s.Ul)(m.Pu, k)
      ei[8] !== eC.isCapable ? ((y = { enabled: eC.isCapable }), (ei[8] = eC.isCapable), (ei[9] = y)) : (y = ei[9])
      let { data: ey, error: ex, isLoading: eN } = (0, s.Ul)(g._x, y)
      ei[10] !== eb ? ((N = { hostId: eb }), (ei[10] = eb), (ei[11] = N)) : (N = ei[11])
      let { data: eL, isLoading: eD } = (0, s._U)(x.FM, N),
        eR = eL?.roots
      ei[12] !== eb || ei[13] !== eR
        ? ((R = { hostId: eb, roots: eR }), (ei[12] = eb), (ei[13] = eR), (ei[14] = R))
        : (R = ei[14])
      let { data: eP, isLoading: eB } = (0, S.Kj)(R),
        eG = null != eL
      ei[15] !== eG ? ((P = { enabled: eG }), (ei[15] = eG), (ei[16] = P)) : (P = ei[16])
      let { skills: ej, isLoading: eF } = (0, L.a)(eL?.roots, eb, P),
        eU = null == eP ? null : eP.filter(Z),
        eW = null == eU ? null : new Set(eU.map(Q)),
        eK = null == eU ? null : new Set(eU.map(J)),
        eH = (0, I.D6)(W),
        eV = Array.from(eH.values()).some(Y),
        eX = Array.from(eH.values()).some(z),
        e$ = !eE && void 0 !== ev && !eI && !eA && !eN && !eD && !eB && !eF && !eX,
        eq = {
          automationsAvailable: e_,
          availableSkillNames: new Set(ej.filter(q).map($)),
          browserExtensionInstalled: eX ? null : eV,
          connectedPluginNames: eW,
          enabledPluginIds: eK,
          hasAutomations:
            eA || eN || null != ew || null != ex ? null : (eS?.items.length ?? 0) > 0 || (ey?.items.length ?? 0) > 0,
          isWorkMode: ea,
          notificationOnboardingResolved: ek,
          notificationPermissionStatus: eO ?? null,
          voiceAvailable: null != es,
        },
        ez = null == em ? null : (0, D.C)(em.beacon_id),
        eY =
          e$ &&
          null != em &&
          ez?.isEligible(eq) === !0 &&
          ("persistent" === em.ui_info.dismiss_variant ||
            ep?.eventMetadata.messageId == null ||
            ep.eventMetadata.messageId === ef)
            ? ez
            : null,
        eJ = eY?.id ?? null,
        eQ = null == eJ || null == ep ? null : `${eJ}:${ep.eventMetadata.conversationId}:${ep.eventMetadata.messageId}`,
        eZ = (0, l.useRef)(null)
      ei[17] !== eT || ei[18] !== el || ei[19] !== em || ei[20] !== eg || ei[21] !== ep || ei[22] !== eo
        ? ((B = () => {
            null != ep &&
              null != em &&
              null != eg &&
              ((0, T.oq)(el, eT ?? eo, em, ep.eventMetadata) &&
                (0, b.Pk)(el, { action: "impression", beacon: em, ...eg }),
              (0, b.Pk)(el, { action: "composer_tip_presented", beacon: em, ...eg }))
          }),
          (ei[17] = eT),
          (ei[18] = el),
          (ei[19] = em),
          (ei[20] = eg),
          (ei[21] = ep),
          (ei[22] = eo),
          (ei[23] = B))
        : (B = ei[23])
      let e0 = (0, l.useEffectEvent)(B)
      ;(ei[24] !== eQ || ei[25] !== e0 || ei[26] !== eJ
        ? ((G = () => {
            if (null == eQ || null == eJ) {
              eZ.current = null
              return
            }
            eZ.current !== eQ && ((eZ.current = eQ), e0())
          }),
          (ei[24] = eQ),
          (ei[25] = e0),
          (ei[26] = eJ),
          (ei[27] = G))
        : (G = ei[27]),
        ei[28] !== eQ || ei[29] !== eJ ? ((j = [eQ, eJ]), (ei[28] = eQ), (ei[29] = eJ), (ei[30] = j)) : (j = ei[30]),
        (0, l.useEffect)(G, j),
        ei[31] !== el ||
        ei[32] !== er ||
        ei[33] !== eU ||
        ei[34] !== ec ||
        ei[35] !== ed ||
        ei[36] !== es ||
        ei[37] !== ej
          ? ((U = function (e) {
              switch (e.type) {
                case "prefill":
                  ;(er?.appendText(ec.formatMessage(e.prompt)), er?.focus())
                  return
                case "prefill-with-skill": {
                  let t = ej.find((t) => {
                    let { enabled: n, name: i } = t
                    return n && i.toLowerCase() === e.skillName
                  })
                  if (null == er || null == t) return
                  ;(er.appendText(ec.formatMessage(e.prompt)),
                    er.insertTextAtSelection(" "),
                    er.insertSkillMentionAtSelection(t),
                    er.focus())
                  return
                }
                case "prefill-with-plugin": {
                  let t = eU?.find((t) => {
                    let { plugin: n } = t,
                      { id: i } = n
                    return i === e.pluginId
                  })
                  if (null == er || null == t) return
                  ;(er.appendText(ec.formatMessage(e.prompt)),
                    er.insertTextAtSelection(" "),
                    er.insertMentionAtSelection((0, v.GL)(t)),
                    er.focus())
                  return
                }
                case "navigate":
                  return void ed(e.path, { state: e.state })
                case "new-chat":
                  return void ed("/")
                case "open-notification-settings":
                  return void w.appServices.systemPermissions?.openNotificationSettings().catch(X)
                case "start-voice":
                  return void es?.()
                case "switch-to-work":
                  ;((0, E.Rm)(el, "work"), ed("/"))
                  return
              }
            }),
            (ei[31] = el),
            (ei[32] = er),
            (ei[33] = eU),
            (ei[34] = ec),
            (ei[35] = ed),
            (ei[36] = es),
            (ei[37] = ej),
            (ei[38] = U))
          : (U = ei[38]))
      let e1 = U
      return null == eY || null == ep || null == em || null == eg
        ? null
        : (ei[39] !== el || ei[40] !== em || ei[41] !== eg || ei[42] !== ep || ei[43] !== eo
            ? ((V = () => {
                ;((0, b.Pk)(el, { action: "dismiss", beacon: em, ...eg }), (0, C.qV)(el, eo, ep))
              }),
              (ei[39] = el),
              (ei[40] = em),
              (ei[41] = eg),
              (ei[42] = ep),
              (ei[43] = eo),
              (ei[44] = V))
            : (V = ei[44]),
          ei[45] !== el ||
          ei[46] !== em ||
          ei[47] !== eg ||
          ei[48] !== ep ||
          ei[49] !== eo ||
          ei[50] !== e1 ||
          ei[51] !== eY.action ||
          ei[52] !== eY.id
            ? ((et = () => {
                let e =
                  em.action_items.find((e) => {
                    let { id: t } = e
                    return t === eY.id
                  }) ?? em.action_items[0]
                ;((0, b.Pk)(el, {
                  action: "click",
                  actionId: eY.id,
                  actionType: e?.type ?? "primary",
                  beacon: em,
                  destinationAction: e?.action_v2.action_enum,
                  ...eg,
                }),
                  (0, f.Zy)({ beacon: em, eventType: "click", eventCtaId: eY.id, metadata: ep.eventMetadata }),
                  (0, C.gM)(el, eo, ep),
                  e1(eY.action))
              }),
              (ei[45] = el),
              (ei[46] = em),
              (ei[47] = eg),
              (ei[48] = ep),
              (ei[49] = eo),
              (ei[50] = e1),
              (ei[51] = eY.action),
              (ei[52] = eY.id),
              (ei[53] = et))
            : (et = ei[53]),
          ei[54] !== V || ei[55] !== et || ei[56] !== eY
            ? ((en = (0, i.jsx)(F, { tip: eY, onDismiss: V, onPrimaryAction: et })),
              (ei[54] = V),
              (ei[55] = et),
              (ei[56] = eY),
              (ei[57] = en))
            : (en = ei[57]),
          en)
    }
    function X() {}
    function $(e) {
      let { name: t } = e
      return t.toLowerCase()
    }
    function q(e) {
      let { enabled: t } = e
      return t
    }
    function z(e) {
      let { isLoading: t } = e
      return t
    }
    function Y(e) {
      let { isInstalled: t } = e
      return t
    }
    function J(e) {
      let { plugin: t } = e
      return t.id
    }
    function Q(e) {
      let { plugin: t } = e
      return t.name
    }
    function Z(e) {
      let { plugin: t } = e
      return t.installed && t.enabled
    }
    function ee(e) {
      return "enable_notifications" === e.id && (0, k.$)(e)
    }
  },
  w4t6(e, t, n) {
    var i = n("iRMi"),
      o = n("yGJW")
    let a = {
      shown: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_SHOWN,
      collapsed: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_COLLAPSED,
      hide_clicked: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_HIDE_CLICKED,
      item_shown: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_ITEM_SHOWN,
      item_clicked: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_ITEM_CLICKED,
      item_completed: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_ITEM_COMPLETED,
      task_submitted: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_TASK_SUBMITTED,
      task_conversation_linked: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_TASK_CONVERSATION_LINKED,
      completed: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_COMPLETED,
      engaged: i.CodexFinservOnboardingAction.CODEX_FINSERV_ONBOARDING_ACTION_ENGAGED,
    }
    n.d(
      t,
      {},
      {
        E: function (e, t, n) {
          ;(0, o.yy)(e, i.CodexFinservOnboardingEvent, { ...n, action: a[t] })
        },
      },
    )
  },
  FW69(e, t, n) {
    var i = n("xprp")
    n.d(t, { j: () => i.jt })
  },
  NyRq(e, t, n) {
    let i = new Set([
      "create_project",
      "enable_notifications",
      "create_automation",
      "summarize_inbox",
      "triage_github_prs",
      "catch_up_updates_and_blockers",
      "catch_up_linear",
      "review_latest_plans",
      "summarize_current_priorities",
    ])
    function o(e) {
      return null != e.source
        ? e.source
        : "claude_import" === e.id
          ? "claude_import"
          : i.has(e.id)
            ? "sidebar"
            : "conversational_onboarding"
    }
    n.d(
      t,
      {},
      {
        $: function (e) {
          return "sidebar" === o(e)
        },
        L: o,
      },
    )
  },
  P3j9(e, t, n) {
    n.d(t, { _p: () => r, y5: () => c, e1: () => d, rO: () => l, mH: () => u, MS: () => p, S_: () => m })
    var i = n("iRMi"),
      o = n("w4t6"),
      a = n("yGJW"),
      s = n("w5yV")
    function l(e, t, n) {
      "finance" === n
        ? (0, o.E)(e, null == t ? "shown" : "item_shown", { surface: "sidebar_checklist", itemId: t })
        : null == t
          ? (0, a.yy)(e, i.CodexSidebarOnboardingChecklistEvent, {
              action: i.CodexSidebarOnboardingChecklistAction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_IMPRESSION,
            })
          : (0, a.yy)(e, i.CodexSidebarOnboardingChecklistItemEvent, {
              action:
                i.CodexSidebarOnboardingChecklistItemAction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_IMPRESSION,
              itemId: t,
            })
    }
    function r(e, t) {
      "finance" === t
        ? (0, o.E)(e, "collapsed", { surface: "sidebar_checklist" })
        : (0, a.yy)(e, i.CodexSidebarOnboardingChecklistEvent, {
            action: i.CodexSidebarOnboardingChecklistAction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_COLLAPSE_CLICKED,
          })
    }
    function c(e, t) {
      ;(0, a.yy)(e, i.CodexSidebarOnboardingChecklistItemEvent, {
        action:
          i.CodexSidebarOnboardingChecklistItemAction
            .CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_EXPERIMENT_ENTRY_IMPRESSION,
        itemId: t,
      })
    }
    function d(e, t) {
      "finance" === t
        ? (0, o.E)(e, "hide_clicked", { surface: "sidebar_checklist" })
        : (0, a.yy)(e, i.CodexSidebarOnboardingChecklistEvent, {
            action: i.CodexSidebarOnboardingChecklistAction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ACTION_HIDE_CLICKED,
          })
    }
    function u(e, t, n, l) {
      "finance" === l
        ? (0, o.E)(e, "item_clicked", { surface: "sidebar_checklist", itemId: t })
        : (0, a.yy)(e, i.CodexSidebarOnboardingChecklistItemEvent, {
            action: i.CodexSidebarOnboardingChecklistItemAction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_CLICKED,
            itemId: t,
            ...(function (e) {
              let t = e.closest("[data-sidebar-checklist-rows]")
              if (!t?.isConnected) return {}
              let n = Array.from(t.querySelectorAll("button[data-checklist-item-id]")),
                i = n.indexOf(e)
              if (i < 0) return {}
              let o = i + 1,
                a = (0, s.k6)(t, void 0)
              if (null == a) return { absolutePosition: o, displayedItems: [] }
              let l = n.flatMap((e, t) => {
                let n = e.getBoundingClientRect()
                return Math.max(n.left, a.left) >= Math.min(n.right, a.right) ||
                  Math.max(n.top, a.top) >= Math.min(n.bottom, a.bottom) ||
                  e.checkVisibility?.({ checkVisibilityCSS: !0, checkOpacity: !0 }) === !1
                  ? []
                  : [{ button: e, absolutePosition: t + 1, top: n.top }]
              })
              l.sort((e, t) => e.top - t.top)
              let r = l.map(({ button: e, absolutePosition: t }, n) => ({
                  itemId: e.dataset.checklistItemId,
                  pluginId: e.dataset.checklistPluginId,
                  checked: "true" === e.getAttribute("aria-pressed"),
                  absolutePosition: t,
                  visiblePosition: n + 1,
                })),
                c = r.find((e) => e.absolutePosition === o)
              return { absolutePosition: o, displayedItems: r, ...(c && { visiblePosition: c.visiblePosition }) }
            })(n),
          })
    }
    function p(e, t, n) {
      "finance" === n
        ? (0, o.E)(e, "item_completed", { surface: "sidebar_checklist", itemId: t })
        : (0, a.yy)(e, i.CodexSidebarOnboardingChecklistItemEvent, {
            action:
              i.CodexSidebarOnboardingChecklistItemAction.CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_COMPLETED,
            itemId: t,
          })
    }
    function m(e, t, n, s, l) {
      "finance" === l
        ? (0, o.E)(e, "task_submitted", { surface: "sidebar_checklist", itemId: t, threadId: n, turnId: s })
        : (0, a.yy)(e, i.CodexSidebarOnboardingChecklistItemEvent, {
            action:
              i.CodexSidebarOnboardingChecklistItemAction
                .CODEX_SIDEBAR_ONBOARDING_CHECKLIST_ITEM_ACTION_PROMPT_TURN_STARTED,
            itemId: t,
            threadId: n,
            turnId: s,
          })
    }
  },
  TpxB(e, t, n) {
    var i = n("qmMi"),
      o = n("DBCl"),
      a = n("SPnB"),
      s = n("QmkR"),
      l = n("Wbxh"),
      r = n("OWtl"),
      c = n("Nwp9"),
      d = n("NyRq"),
      u = n("P3j9"),
      p = n("yAqi")
    let m = {},
      g = "claude_import",
      f = "claude_import",
      b = (0, i.bD)(r.u, (e) => 0),
      h = (0, c.m3)(p.y, m),
      C = (0, i.bD)(r.u, (e) => null),
      _ = (0, i.bD)(r.u, (e) => null, {
        onMount: (e, t) => {
          let { key: n } = t
          if (null != n)
            return t.watch(({ get: e }) => {
              let i = v(e(h), n),
                o = i?.items.flatMap((e) =>
                  !(0, d.$)(e) || e.completed || null == e.threadId || null == e.threadStartedAtMs
                    ? []
                    : [
                        setTimeout(
                          () => {
                            var i, o, a, s
                            let l = v(t.get(h), n)?.items.find((t) => t.id === e.id)
                            l?.completed ||
                              l?.threadId !== e.threadId ||
                              l?.threadStartedAtMs !== e.threadStartedAtMs ||
                              ((i = t),
                              (o = n),
                              (a = e.id),
                              (s = void 0),
                              i.set(h, (e) => {
                                let t = e ?? m,
                                  n = v(t, o),
                                  i = n?.items.find((e) => e.id === a && (0, d.$)(e))
                                return null == n || null == i || i.threadId === s
                                  ? t
                                  : {
                                      ...t,
                                      [o]: {
                                        ...n,
                                        items: n.items.map((e) =>
                                          e === i
                                            ? { ...e, threadId: s, threadStartedAtMs: null == s ? void 0 : Date.now() }
                                            : e,
                                        ),
                                      },
                                    }
                              }))
                          },
                          Math.max(0, e.threadStartedAtMs + 36e5 - Date.now()),
                        ),
                      ],
                )
              return () => {
                o?.forEach(clearTimeout)
              }
            })
        },
      }),
      T = (0, i.bD)(r.u, (e) => null),
      E = (0, i.vP)(r.u, null)
    function v(e, t) {
      let n = e?.[t]
      return n?.version === 1 ? n : void 0
    }
    function M(e) {
      if (null == e || !0 === e.dismissed) return !1
      let t = e.items.some((e) => e.id === g && e.completed),
        n = e.items.some(
          (t) =>
            !t.completed &&
            ((0, d.$)(t) || (0, d.L)(t) === f) &&
            ("enable_notifications" !== t.id || !0 === e.notificationPermissionItemIncluded),
        )
      return !t && n
    }
    function k(e, t, n) {
      let i = !1
      ;("enable_notifications" === n && O(e, t),
        e.set(h, (e) => {
          let o,
            a = e ?? m,
            s = v(a, t)
          if (null == s) return a
          let l = n === g,
            r = s.items.findIndex((e) => e.id === n && ((0, d.$)(e) || (l && (0, d.L)(e) === f)))
          return (r < 0 && !l) || s.items[r]?.completed === !0
            ? a
            : ((i = !0),
              (o =
                r < 0
                  ? [{ id: g, completed: !0, source: f }, ...s.items]
                  : s.items.map((e, t) => (t === r ? { ...e, completed: !0 } : e))),
              { ...a, [t]: { ...s, items: o } })
        }),
        i && (0, u.MS)(e, n, v(e.get(h), t)?.variant))
    }
    function O(e, t) {
      e.set(C, t, null)
    }
    function I(e, t) {
      e.set(T, t, null)
    }
    function S(e, t) {
      return null != e && Number.isFinite(e) && e <= t ? e : null
    }
    n.d(
      t,
      {},
      {
        Bp: function (e, t, n) {
          if (n?.mode !== "disabled") return n?.mode === "enabled" ? n.accountState : v(e, t)
        },
        E6: function (e, t) {
          return e?.version === 1 && e.items.some((e) => e.id === t && (0, d.$)(e) && e.completed)
        },
        FI: function (e, t, n) {
          e.set(h, (e) => {
            let i = e ?? m,
              o = v(i, t)
            return null == o ? i : { ...i, [t]: { ...o, collapsed: n } }
          })
        },
        KM: function (
          e,
          {
            accountId: t,
            variant: n,
            remotePluginIds: i,
            completedConversationalOnboardingTask: o,
            hasCompletedClaudeImport: a,
            sidebarItems: s,
          },
        ) {
          ;(I(e, t),
            O(e, t),
            e.set(h, (e) => {
              let l = e ?? m,
                r = v(l, t)
              return {
                ...l,
                [t]: {
                  variant: n,
                  remotePluginIds: i,
                  ...(function ({
                    completedConversationalOnboardingTask: e,
                    hasCompletedClaudeImport: t,
                    sidebarItems: n,
                  }) {
                    let i = []
                    return (
                      null != e && i.push({ ...e, completed: !0, source: "conversational_onboarding" }),
                      t && i.push({ id: g, completed: !0, source: f }),
                      i.push(
                        ...n
                          .filter(({ id: n }) => (!t || n !== g) && n !== e?.id)
                          .map((e) => ({ ...e, completed: !1, source: "sidebar" })),
                      ),
                      { version: 1, collapsed: !1, items: i }
                    )
                  })({ completedConversationalOnboardingTask: o, hasCompletedClaudeImport: a, sidebarItems: s }),
                  notificationPermissionItemIncluded: r?.notificationPermissionItemIncluded,
                  expirationClockStartedAtMs: r?.expirationClockStartedAtMs,
                  expired: r?.expired,
                },
              }
            }))
        },
        PF: C,
        QT: function (e, t, n) {
          e.set(h, (i) => {
            let o = i ?? m,
              a = v(o, t)
            if (
              null == a ||
              null != a.notificationPermissionItemIncluded ||
              !a.items.some((e) => "enable_notifications" === e.id && (0, d.$)(e))
            )
              return o
            let s = a.items.some((e) => "enable_notifications" === e.id && (0, d.$)(e) && e.completed),
              l = null != e.get(C, t)
            return null != n || s || l
              ? {
                  ...o,
                  [t]: {
                    ...a,
                    notificationPermissionItemIncluded: s || l || "disabled" === n || "not-determined" === n,
                  },
                }
              : o
          })
        },
        RE: M,
        Rf: E,
        S3: function (e, t) {
          ;(e.set(b, t, (e) => e + 1),
            I(e, t),
            O(e, t),
            e.set(h, (e) => {
              let n = e ?? m
              if (null == n[t]) return n
              let { [t]: i, ...o } = n
              return o
            }))
        },
        W4: function (e, t) {
          ;(O(e, t),
            e.set(h, (e) => {
              let n = e ?? m,
                i = v(n, t)
              return null == i ? n : { ...n, [t]: { ...i, dismissed: !0 } }
            }))
        },
        WA: v,
        Zq: function (e, { accountId: t, desktopOnboardingCompletedAt: n, evaluatedAtMs: i }) {
          let o,
            a,
            s,
            l =
              ((o = new Date(i)),
              (a = `${o.getMonth() + 1}`.padStart(2, "0")),
              (s = `${o.getDate()}`.padStart(2, "0")),
              `${o.getFullYear()}-${a}-${s}`),
            r = S(null == n ? null : Date.parse(n), i),
            c = e.get(T, t)
          if (c?.localCalendarDayKey === l && c.desktopOnboardingCompletedAt === n) return
          let d = e.get(h) ?? m,
            u = v(d, t)
          if (null == u || u.dismissed) return
          let p = (function (e, { backendStartedAtMs: t, evaluatedAtMs: n }) {
            let i = S(e.expirationClockStartedAtMs, n),
              o = Math.min(t ?? n, i ?? n),
              a = e.expired || n - o >= 2592e6
            return { expirationClockStartedAtMs: o, isExpired: a }
          })(u, { backendStartedAtMs: r, evaluatedAtMs: i })
          ;(e.set(T, t, { desktopOnboardingCompletedAt: n, localCalendarDayKey: l }),
            u.expired ||
              ((p.expirationClockStartedAtMs !== u.expirationClockStartedAtMs || p.isExpired) &&
                e.set(h, {
                  ...d,
                  [t]: {
                    ...u,
                    expirationClockStartedAtMs: p.expirationClockStartedAtMs,
                    ...(p.isExpired ? { expired: !0 } : {}),
                  },
                })))
        },
        bk: function (e, t, n, i = []) {
          e.set(h, (e) => {
            let o = e ?? m,
              a = v(o, t)
            if (null == a || !0 === a.dismissed) return o
            if (n) {
              if (a.items.some((e) => e.id === g) || !M(a)) return o
              let e = i.indexOf(g),
                n = 0
              if (e >= 0) {
                let t = a.items.map(({ id: e }) => e),
                  o = i.slice(e + 1).find((e) => t.includes(e))
                if (null != o) n = t.indexOf(o)
                else {
                  let o = i
                    .slice(0, e)
                    .reverse()
                    .find((e) => t.includes(e))
                  null != o && (n = t.indexOf(o) + 1)
                }
              }
              return {
                ...o,
                [t]: {
                  ...a,
                  items: [...a.items.slice(0, n), { id: g, completed: !1, source: f }, ...a.items.slice(n)],
                },
              }
            }
            let s = a.items.filter((e) => e.id !== g || (0, d.L)(e) !== f || e.completed)
            return s.length === a.items.length ? o : { ...o, [t]: { ...a, items: s } }
          })
        },
        fi: function (e, t, n = t) {
          return e.watch(({ get: i }) => {
            let r = v(i(h), n),
              c = r?.items.find((e) => "create_project" === e.id)
            if (null == c || c.completed) return
            let d = (0, l.F6)(i, o.Q2Y.LOCAL_PROJECTS)
            if (null != d && Object.keys(d).length > 0) return void k(e, n, "create_project")
            let u = (0, l.F6)(i, o.Q2Y.REMOTE_PROJECTS)
            if (null != u && u.length > 0) return void k(e, n, "create_project")
            let p = i(a.m0)
            "allowed" === p.status &&
              "accountId" in p &&
              p.accountId === t &&
              (0, s.e8)(i(s.Sr).data).length > 0 &&
              k(e, n, "create_project")
          })
        },
        kA: k,
        ok: b,
        sk: _,
        wT: h,
        wf: function (e, t) {
          let n = v(e.get(h), t),
            i = n?.items.find((e) => "enable_notifications" === e.id && (0, d.$)(e))
          n?.notificationPermissionItemIncluded !== !0 ||
            null == i ||
            i.completed ||
            (null == e.get(C, t) && e.set(C, t, Date.now()))
        },
      },
    )
  },
  w5yV(e, t, n) {
    var i = n("FW69"),
      o = n("ajVv")
    let a = new Set(["auto", "clip", "hidden", "overlay", "scroll"])
    function s({ range: e, element: t, target: n, bottomBoundaryTop: i }) {
      let o = c(t, i)
      if (null == o) return null
      let a = (function (e, t, n, i) {
        let o = Array.from(e.getClientRects()),
          a = t.getBoundingClientRect(),
          s = d(o, i)
        if (null != s && (o.length > 1 || null != u(s, a))) return s
        let l = e.getBoundingClientRect(),
          r = u(l, i)
        return null != r && null != u(r, a)
          ? r
          : o.some((e) => e.width > 0 && e.height > 0) || (l.width > 0 && l.height > 0)
            ? null
            : (d(Array.from(t.getClientRects()), i) ??
              u(a, i) ??
              d(Array.from(n.getClientRects()), i) ??
              u(n.getBoundingClientRect(), i))
      })(e, t, n, o)
      return null == a ? null : { rect: a, bounds: o }
    }
    function l(e, t, n) {
      let i = r(e),
        o = i?.closest(n)
      if (i instanceof HTMLElement && o instanceof HTMLElement) return { element: i, target: o }
      if (!(e instanceof Element)) return null
      for (let i of [e.childNodes[t], e.childNodes[t - 1]]) {
        let e = r(i),
          t = e?.closest(n)
        if (e instanceof HTMLElement && t instanceof HTMLElement) return { element: e, target: t }
      }
      return null
    }
    function r(e) {
      return e instanceof Element ? e : (e?.parentElement ?? null)
    }
    function c(e, t) {
      let n = {
          bottom: null == t ? window.innerHeight : Math.min(window.innerHeight, t),
          left: 0,
          right: window.innerWidth,
          top: 0,
        },
        i = e
      for (; null != i && i !== document.body && i !== document.documentElement;) {
        let e = window.getComputedStyle(i),
          t = (e.overflowX || e.overflow).split(/\s+/).some((e) => a.has(e)),
          o = (e.overflowY || e.overflow).split(/\s+/).some((e) => a.has(e))
        if (t || o) {
          let e = i.getBoundingClientRect()
          if (
            (n = {
              bottom: o ? Math.min(n.bottom, e.bottom) : n.bottom,
              left: t ? Math.max(n.left, e.left) : n.left,
              right: t ? Math.min(n.right, e.right) : n.right,
              top: o ? Math.max(n.top, e.top) : n.top,
            }).right <= n.left ||
            n.bottom <= n.top
          )
            return null
        }
        i = i.parentElement
      }
      return n.bottom <= n.top ? null : n
    }
    function d(e, t) {
      for (let n of e) {
        let e = u(n, t)
        if (null != e) return e
      }
      return null
    }
    function u(e, t) {
      let n = Math.max(e.left, t.left),
        i = Math.max(e.top, t.top),
        o = Math.min(e.right, t.right),
        a = Math.min(e.bottom, t.bottom)
      return n >= o || i >= a ? null : new DOMRect(n, i, o - n, a - i)
    }
    n.d(
      t,
      {},
      {
        HG: s,
        ZK: function (e, t) {
          return (
            null != e &&
            null != t &&
            e.direction === t.direction &&
            e.portalTarget === t.portalTarget &&
            e.selectedText === t.selectedText &&
            e.selectionRange.startContainer === t.selectionRange.startContainer &&
            e.selectionRange.startOffset === t.selectionRange.startOffset &&
            e.selectionRange.endContainer === t.selectionRange.endContainer &&
            e.selectionRange.endOffset === t.selectionRange.endOffset &&
            e.target === t.target &&
            e.targetId === t.targetId &&
            e.viewportHorizontalBounds.left === t.viewportHorizontalBounds.left &&
            e.viewportHorizontalBounds.right === t.viewportHorizontalBounds.right &&
            e.rect.left === t.rect.left &&
            e.rect.top === t.rect.top &&
            e.rect.width === t.rect.width &&
            e.rect.height === t.rect.height
          )
        },
        cF: function ({
          bottomBoundarySelector: e,
          portalTarget: t,
          targetContainer: n,
          targetSelector: a,
          windowZoom: c,
        }) {
          let d = window.getSelection()
          if (null == d || 0 === d.rangeCount || d.isCollapsed) return null
          let u = (function (e, t, n) {
            var i, o
            let a,
              s,
              r = l(e.anchorNode, e.anchorOffset, n),
              c = l(e.focusNode, e.focusOffset, n)
            if (null != r && null != c && r.target !== c.target) return null
            let d = r ?? c
            return null == d || null != d.element.closest('[contenteditable="true"]')
              ? null
              : {
                  ...d,
                  range:
                    ((i = t),
                    (o = d.target),
                    (a = document.createRange()).selectNodeContents(o),
                    (s = i.cloneRange()),
                    (!o.contains(s.startContainer) || 0 > s.compareBoundaryPoints(Range.START_TO_START, a)) &&
                      s.setStart(a.startContainer, a.startOffset),
                    (!o.contains(s.endContainer) || s.compareBoundaryPoints(Range.END_TO_END, a) > 0) &&
                      s.setEnd(a.endContainer, a.endOffset),
                    s),
                }
          })(d, d.getRangeAt(0), a)
          if (null == u || (null != n && !n.contains(u.target))) return null
          let p = (0, i.j)(u.range)?.trim() ?? u.range.toString().trim()
          if (0 === p.length) return null
          let m = null == e ? null : n?.querySelector(e),
            g = m instanceof HTMLElement ? m.getBoundingClientRect().top : void 0,
            f = s({ ...u, bottomBoundaryTop: g })
          if (null == f) return null
          let { rect: b } = f,
            h = t?.contains(u.target) === !0 ? t : void 0,
            C = h?.getBoundingClientRect(),
            _ =
              null == C
                ? { left: 0, right: window.innerWidth }
                : { left: -C.left / c, right: (window.innerWidth - C.left) / c },
            T = null == C ? b : new DOMRect((b.left - C.left) / c, (b.top - C.top) / c, b.width / c, b.height / c),
            E = r(u.range.startContainer) ?? u.element
          return {
            direction: "rtl" === window.getComputedStyle(E).direction ? "rtl" : "ltr",
            portalTarget: h,
            rect: T,
            selectionRange: u.range.cloneRange(),
            selectedText: p,
            target: u.target,
            targetId: u.target.getAttribute(o.y),
            viewportHorizontalBounds: _,
          }
        },
        k6: c,
      },
    )
  },
}
//# sourceMappingURL=892323.5e2ff24ac6.js.map
