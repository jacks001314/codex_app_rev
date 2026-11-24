export const __rspack_esm_ids = [69751]
export const __webpack_modules__ = {
  eRxB() {},
  TTww(e, t, o) {
    var a = o("ABep")
    ;(o("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z",
            fill: "currentColor",
          }),
        })))
  },
  cFUD(e, t, o) {
    var a = o("iRMi"),
      n = o("SqlE")
    function i(e, t) {
      if (null != t)
        return t
          ? (0, n.SV)(e)
            ? a.CodexMiniAppearance.CODEX_MINI_APPEARANCE_CUSTOM_PET
            : a.CodexMiniAppearance.CODEX_MINI_APPEARANCE_DEFAULT_PET
          : a.CodexMiniAppearance.CODEX_MINI_APPEARANCE_BAR
    }
    o.d(
      t,
      {},
      {
        K: i,
        y: function ({
          action: e,
          hasRunningLocalSession: t,
          isNotificationTrayOpen: o,
          isPetVisible: c,
          isVisible: d,
          notification: s,
          notificationCount: r,
          selectedAvatar: l,
          source: m,
        }) {
          let u = {
            action: e,
            source: m,
            miniAppearance: i(l.id, c),
            petKind: (0, n.SV)(l.id)
              ? a.CodexAvatarOverlayPetKind.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM
              : a.CodexAvatarOverlayPetKind.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN,
          }
          return (
            (0, n.SV)(l.id) || (u.builtInPetId = l.id),
            null != r && (u.notificationCount = r),
            null != s &&
              (u.notificationSource =
                a.CodexAvatarOverlayNotificationSource.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL),
            null != t && (u.hasRunningLocalSession = t),
            null != o && (u.isNotificationTrayOpen = o),
            null != d && (u.isVisible = d),
            u
          )
        },
      },
    )
  },
  dYlv(e, t, o) {
    var a = o("QosV"),
      n = o("qmMi"),
      i = o("DBCl"),
      c = o("OWtl"),
      d = o("RxZZ"),
      s = o("SqlE"),
      r = o("gKJK")
    function l(e, t = s.B4) {
      return t.find((t) => t.id === e) ?? t.find((e) => "codex" === e.id) ?? t[0] ?? s.B4["0"]
    }
    o.d(
      t,
      {},
      {
        WU: function (e) {
          let t,
            o,
            s,
            m = (0, a.c)(10),
            u = (0, n.gh)(c.u),
            p = (0, n.Ul)(r.GA)
          return (
            m[0] !== e || m[1] !== p ? ((t = l(p, e)), (m[0] = e), (m[1] = p), (m[2] = t)) : (t = m[2]),
            m[3] !== u || m[4] !== p
              ? ((o = (e) => {
                  ;((0, d.gc)(u, i.kWF.selectedAvatarId, e), (0, r.yQ)(u, e, p))
                }),
                (m[3] = u),
                (m[4] = p),
                (m[5] = o))
              : (o = m[5]),
            m[6] !== p || m[7] !== t || m[8] !== o
              ? ((s = { selectedAvatar: t, selectedAvatarId: p, setSelectedAvatarId: o }),
                (m[6] = p),
                (m[7] = t),
                (m[8] = o),
                (m[9] = s))
              : (s = m[9]),
            s
          )
        },
        _I: function (e, t) {
          return null != t && (0, s.SV)(t) && e.id !== t
        },
        so: l,
      },
    )
  },
  xYqX(e, t, o) {
    let a = {
      section: "pets",
      id: "pets-create-local",
      title: (0, o("Qgfj").zR)({ id: "settings.pets.custom.create.label", defaultMessage: "Create your own pet" }),
    }
    o.d(t, {}, { d: a })
  },
  zyWr(e, t, o) {
    var a = o("QosV"),
      n = o("qmMi"),
      i = o("SqlE"),
      c = o("dpQK"),
      d = o("KPGh"),
      s = o("l2C7")
    o.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            o,
            r,
            l,
            m = (0, a.c)(14)
          m[0] !== e ? ((t = void 0 === e ? {} : e), (m[0] = e), (m[1] = t)) : (t = m[1])
          let { includeCloudPets: u } = t,
            p = void 0 === u || u,
            { data: g, isError: x, isFetching: f, isLoading: h } = (0, n.Ul)(s.IB)
          m[2] !== p ? ((o = { enabled: p }), (m[2] = p), (m[3] = o)) : (o = m[3])
          let M = (0, n.Ul)(d.QL, o),
            v = (0, n.Ul)(c.E),
            b = g?.avatarDirectory ?? null,
            w = g?.avatars,
            y = p ? M.data : void 0
          m[4] !== v || m[5] !== w || m[6] !== y
            ? ((r = (0, i.i0)(w, y, v)), (m[4] = v), (m[5] = w), (m[6] = y), (m[7] = r))
            : (r = m[7])
          let T = f || (p && M.isFetching),
            C = h || (p && M.isLoading)
          return (
            m[8] !== x || m[9] !== b || m[10] !== r || m[11] !== T || m[12] !== C
              ? ((l = { avatarDirectory: b, avatarOptions: r, isError: x, isFetching: T, isLoading: C }),
                (m[8] = x),
                (m[9] = b),
                (m[10] = r),
                (m[11] = T),
                (m[12] = C),
                (m[13] = l))
              : (l = m[13]),
            l
          )
        },
      },
    )
  },
  WVWQ(e, t, o) {
    o.d(t, { j: () => w, I: () => b })
    var a = o("AGyq"),
      n = o("Qgfj"),
      i = o("CTWI")
    function c(e) {
      return { title: e.formatMessage(d.title), description: e.formatMessage(d.description) }
    }
    let d = (0, n.YK)({
      title: { id: "codex.command.composer.captureAppshot", defaultMessage: "Capture appshot" },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
      },
    })
    function s(e) {
      return {
        title: e.formatMessage({ id: "codex.command.openOrbit.dot", defaultMessage: "Open your dot" }),
        description: e.formatMessage({
          id: "codex.commandDescription.openOrbit.dot",
          defaultMessage: "Open your dot conversation",
        }),
      }
    }
    function r(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.focusPageBlockControls",
          defaultMessage: "Focus content controls",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.focusPageBlockControls",
          defaultMessage: "Move keyboard focus from the Page editor to the current content's controls",
        }),
      }
    }
    let l = (0, n.YK)({
        endCallDescription: {
          id: "codex.commandDescription.realtimeVoice.endCall",
          defaultMessage: "End the active Voice Chat",
        },
        endCallTitle: { id: "codex.command.realtimeVoice.endCall", defaultMessage: "End Voice Chat" },
        realtimeVoiceDescription: {
          id: "codex.commandDescription.realtimeVoice",
          defaultMessage: "Start a Voice Chat from anywhere on desktop",
        },
        realtimeVoiceTitle: { id: "codex.command.realtimeVoice", defaultMessage: "Voice Chat hotkey" },
        toggleMicrophoneMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Mute or unmute your microphone during a Voice Chat",
        },
        toggleMicrophoneMuteTitle: {
          id: "codex.command.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Toggle Voice Chat microphone",
        },
        toggleOutputMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleOutputMute",
          defaultMessage: "Mute or unmute Voice Chat audio",
        },
        toggleOutputMuteTitle: {
          id: "codex.command.realtimeVoice.toggleOutputMute",
          defaultMessage: "Toggle Voice Chat audio",
        },
      }),
      m = {
        realtimeVoice: { description: l.realtimeVoiceDescription, title: l.realtimeVoiceTitle },
        "realtimeVoice.endCall": { description: l.endCallDescription, title: l.endCallTitle },
        "realtimeVoice.toggleMicrophoneMute": {
          description: l.toggleMicrophoneMuteDescription,
          title: l.toggleMicrophoneMuteTitle,
        },
        "realtimeVoice.toggleOutputMute": {
          description: l.toggleOutputMuteDescription,
          title: l.toggleOutputMuteTitle,
        },
      }
    function u(e) {
      return Object.hasOwn(m, e)
    }
    let p = (0, n.YK)({
        title: { id: "codex.command.importExternalAgent", defaultMessage: "Import from other AI apps" },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
        },
      }),
      g = (0, n.YK)({
        title: { id: "codex.command.personalitySettings", defaultMessage: "Personality" },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
        },
      }),
      x = (0, n.zR)({ id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" }),
      f = (0, n.YK)({
        "codex.command.importPrismToLocal": {
          id: "codex.command.importPrismToLocal",
          defaultMessage: "Import from Prism\u2026",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": {
          id: "codex.commandMenuTitle.toggleFileTreePanel",
          defaultMessage: "Toggle navigation panel",
        },
        "codex.command.meetings.takeNotes": {
          id: "codex.command.meetings.takeNotes",
          defaultMessage: "Meetings: Take notes",
        },
        "codex.command.screenshotToCurrentChat": {
          id: "codex.command.screenshotToCurrentChat",
          defaultMessage: "Screenshot selection to current chat",
        },
        "codex.command.screenshotToNewChat": {
          id: "codex.command.screenshotToNewChat",
          defaultMessage: "Screenshot selection to new chat",
        },
        "codex.command.artifacts.selectTool": {
          id: "codex.command.artifacts.selectTool",
          defaultMessage: "Artifacts: Select",
        },
        "codex.command.artifacts.handTool": {
          id: "codex.command.artifacts.handTool",
          defaultMessage: "Artifacts: Pan",
        },
        "codex.command.canvas.prompt": { id: "codex.command.canvas.prompt", defaultMessage: "Canvas: Ask ChatGPT" },
        "codex.command.artifacts.rectangleTool": {
          id: "codex.command.artifacts.rectangleTool",
          defaultMessage: "Artifacts: Rectangle",
        },
        "codex.command.artifacts.circleTool": {
          id: "codex.command.artifacts.circleTool",
          defaultMessage: "Artifacts: Circle",
        },
        "codex.command.artifacts.arrowTool": {
          id: "codex.command.artifacts.arrowTool",
          defaultMessage: "Artifacts: Arrow",
        },
        "codex.command.artifacts.lineTool": {
          id: "codex.command.artifacts.lineTool",
          defaultMessage: "Artifacts: Line",
        },
        "codex.command.artifacts.textTool": {
          id: "codex.command.artifacts.textTool",
          defaultMessage: "Artifacts: Text",
        },
        "codex.command.artifacts.noteTool": {
          id: "codex.command.artifacts.noteTool",
          defaultMessage: "Artifacts: Note",
        },
        "codex.command.page.addComment": { id: "codex.command.page.addComment", defaultMessage: "Add Page comment" },
        "codex.command.page.formatNumberedList": {
          id: "codex.command.page.formatNumberedList",
          defaultMessage: "Numbered list",
        },
        "codex.command.page.formatBulletedList": {
          id: "codex.command.page.formatBulletedList",
          defaultMessage: "Bulleted list",
        },
        "codex.command.page.formatChecklist": { id: "codex.command.page.formatChecklist", defaultMessage: "Checklist" },
        "codex.command.newThread": { id: "codex.command.newThread", defaultMessage: "New chat" },
        "codex.command.newProjectlessTask": {
          id: "codex.command.newProjectlessTask",
          defaultMessage: "New standalone chat",
        },
        "codex.command.temporaryChat": { id: "codex.command.temporaryChat", defaultMessage: "New Temporary Chat" },
        "codex.command.openThreadInNewWindow": {
          id: "codex.command.openThreadInNewWindow",
          defaultMessage: "Open in new window",
        },
        "codex.command.archiveThread": { id: "codex.command.archiveThread", defaultMessage: "Archive chat" },
        "codex.command.deleteOrbit": { id: "codex.command.deleteOrbit", defaultMessage: "Delete {dot}" },
        "codex.command.deleteChat": { id: "codex.command.deleteChat", defaultMessage: "Delete chat" },
        "codex.command.markThreadUnread": { id: "codex.command.markThreadUnread", defaultMessage: "Mark as unread" },
        "codex.command.toggleThreadPin": { id: "codex.command.toggleThreadPin", defaultMessage: "Toggle pin" },
        "codex.command.copyPageLink": { id: "codex.command.copyPageLink", defaultMessage: "Copy document link" },
        "codex.command.copyConversationMarkdown": {
          id: "codex.command.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
        },
        "codex.command.copyLastCodeBlock": {
          id: "codex.command.copyLastCodeBlock",
          defaultMessage: "Copy last code block",
        },
        "codex.command.openSideChat": { id: "codex.command.openSideChat", defaultMessage: "Open side chat" },
        "codex.command.focusMainChat": { id: "codex.command.focusMainChat", defaultMessage: "Focus main chat" },
        "codex.command.focusSideChat": { id: "codex.command.focusSideChat", defaultMessage: "Focus side chat" },
        "codex.command.openControlWindow": {
          id: "codex.command.openControlWindow",
          defaultMessage: "Open control window",
        },
        "codex.command.toggleDebugModal": {
          id: "codex.command.toggleDebugModal",
          defaultMessage: "Toggle debug panel",
        },
        "codex.command.undoAppAction": { id: "codex.command.undoAppAction", defaultMessage: "Undo last action" },
        "codex.command.redoAppAction": { id: "codex.command.redoAppAction", defaultMessage: "Redo last action" },
        "codex.command.reopenClosedTab": {
          id: "codex.command.reopenClosedTab",
          defaultMessage: "Reopen closed panel tab",
        },
        "codex.command.composer.openModelPicker": {
          id: "codex.command.composer.openModelPicker",
          defaultMessage: "Select effort",
        },
        "codex.command.composer.openRecentModels": {
          id: "codex.command.composer.openRecentModels",
          defaultMessage: "Open recent models",
        },
        "codex.command.composer.openProjectPicker": {
          id: "codex.command.composer.openProjectPicker",
          defaultMessage: "Open project picker",
        },
        "codex.command.composer.toggleDictation": {
          id: "codex.command.composer.toggleDictation",
          defaultMessage: "Toggle dictation",
        },
        "codex.command.composer.startVoiceMode": {
          id: "codex.command.composer.startVoiceMode",
          defaultMessage: "Toggle voice chat",
        },
        "codex.command.composer.submit": { id: "codex.command.composer.submit", defaultMessage: "Send message" },
        "codex.command.browser.toggleAnnotationMode": {
          id: "codex.command.browser.toggleAnnotationMode",
          defaultMessage: "Toggle annotation mode",
        },
        "codex.command.browser.bookmarkPage": {
          id: "codex.command.browser.bookmarkPage",
          defaultMessage: "Bookmark page",
        },
        "codex.command.presentation.editLink": {
          id: "codex.command.presentation.editLink",
          defaultMessage: "Add or edit slide link",
        },
        "codex.command.presentation.duplicateSelection": {
          id: "codex.command.presentation.duplicateSelection",
          defaultMessage: "Duplicate presentation selection",
        },
        "codex.command.artifact.sendAnnotations": {
          id: "codex.command.artifact.sendAnnotations",
          defaultMessage: "Send annotations",
        },
        "codex.command.composer.submitInBackground": {
          id: "codex.command.composer.submitInBackground",
          defaultMessage: "Send message in background",
        },
        "codex.command.composer.steer": { id: "codex.command.composer.steer", defaultMessage: "Steer prompt" },
        "codex.command.composer.queue": { id: "codex.command.composer.queue", defaultMessage: "Queue prompt" },
        "codex.command.composer.clear": { id: "codex.command.composer.clear", defaultMessage: "Clear prompt" },
        "codex.command.composer.addPhotos": { id: "codex.command.composer.addPhotos", defaultMessage: "Add photos" },
        "codex.command.composer.addFiles": {
          id: "codex.command.composer.addFiles",
          defaultMessage: "Attach files and folders",
        },
        "codex.command.composer.toggleFastMode": {
          id: "codex.command.composer.toggleFastMode",
          defaultMessage: "Cycle speed",
        },
        "codex.command.composer.increaseReasoningEffort": {
          id: "codex.command.composer.increaseReasoningEffort",
          defaultMessage: "Increase reasoning effort",
        },
        "codex.command.composer.decreaseReasoningEffort": {
          id: "codex.command.composer.decreaseReasoningEffort",
          defaultMessage: "Decrease reasoning effort",
        },
        "codex.command.composer.cycleReasoningEffort": {
          id: "codex.command.composer.cycleReasoningEffort",
          defaultMessage: "Cycle reasoning effort",
        },
        "codex.command.composer.togglePlanMode": {
          id: "codex.command.composer.togglePlanMode",
          defaultMessage: "Toggle plan mode",
        },
        "codex.command.composer.toggleWorktreeMode": {
          id: "codex.command.composer.toggleWorktreeMode",
          defaultMessage: "Toggle Local/Worktree",
        },
        "codex.command.composer.cycleHost": { id: "codex.command.composer.cycleHost", defaultMessage: "Cycle host" },
        "codex.command.composer.toggleWorkRunLocation": {
          id: "codex.command.composer.toggleWorkRunLocation",
          defaultMessage: "Toggle Cloud/Local",
        },
        "codex.command.approval.approve": { id: "codex.command.approval.approve", defaultMessage: "Approve request" },
        "codex.command.approval.decline": { id: "codex.command.approval.decline", defaultMessage: "Decline request" },
        "codex.command.git.commit": { id: "codex.command.git.commit", defaultMessage: "Commit or push" },
        "codex.command.git.createPullRequest": {
          id: "codex.command.git.createPullRequest",
          defaultMessage: "Create PR",
        },
        "codex.command.git.createDraftPullRequest": {
          id: "codex.command.git.createDraftPullRequest",
          defaultMessage: "Create draft PR",
        },
        "codex.command.git.createBranch": { id: "codex.command.git.createBranch", defaultMessage: "Create branch" },
        "codex.command.git.mergePullRequest": { id: "codex.command.git.mergePullRequest", defaultMessage: "Merge PR" },
        "codex.command.git.openPullRequest": {
          id: "codex.command.git.openPullRequest",
          defaultMessage: "Open PR on GitHub",
        },
        "codex.command.git.toggleBlame": { id: "codex.command.git.toggleBlame", defaultMessage: "Toggle Git blame" },
        "codex.command.forkThread": { id: "codex.command.forkThread", defaultMessage: "Branch chat" },
        "codex.command.showMiniOverlay": { id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" },
        "codex.command.searchChats": { id: "codex.command.searchChats", defaultMessage: "Switch chat\u2026" },
        "codex.command.searchChatsPrevious": {
          id: "codex.command.searchChatsPrevious",
          defaultMessage: "Switch chat (previous)\u2026",
        },
        "codex.command.togglePriorityFilter": {
          id: "codex.command.togglePriorityFilter",
          defaultMessage: "Toggle activity view",
        },
        "codex.command.nextThreadNeedingAttention": {
          id: "codex.command.nextThreadNeedingAttention",
          defaultMessage: "Next chat needing attention",
        },
        "codex.command.previousThread": { id: "codex.command.previousThread", defaultMessage: "Previous sidebar item" },
        "codex.command.previousTab": { id: "codex.command.previousTab", defaultMessage: "Previous tab" },
        "codex.command.previousRecentThread": {
          id: "codex.command.previousRecentThread",
          defaultMessage: "Previous recently viewed chat",
        },
        "codex.command.nextThread": { id: "codex.command.nextThread", defaultMessage: "Next sidebar item" },
        "codex.command.nextTab": { id: "codex.command.nextTab", defaultMessage: "Next tab" },
        "codex.command.nextRecentThread": {
          id: "codex.command.nextRecentThread",
          defaultMessage: "Next recently viewed chat",
        },
        "codex.command.recentThread1": { id: "codex.command.recentThread1", defaultMessage: "Go to recent chat 1" },
        "codex.command.recentThread2": { id: "codex.command.recentThread2", defaultMessage: "Go to recent chat 2" },
        "codex.command.recentThread3": { id: "codex.command.recentThread3", defaultMessage: "Go to recent chat 3" },
        "codex.command.recentThread4": { id: "codex.command.recentThread4", defaultMessage: "Go to recent chat 4" },
        "codex.command.recentThread5": { id: "codex.command.recentThread5", defaultMessage: "Go to recent chat 5" },
        "codex.command.recentThread6": { id: "codex.command.recentThread6", defaultMessage: "Go to recent chat 6" },
        "codex.command.switchToChat": { id: "codex.command.switchToChat", defaultMessage: "Switch to Chat" },
        "codex.command.switchToWork": { id: "codex.command.switchToWork", defaultMessage: "Switch to Work" },
        "codex.command.switchToCodex": { id: "codex.command.switchToCodex", defaultMessage: "Switch to Codex" },
        "codex.command.settings": { id: "codex.command.settings", defaultMessage: "Settings" },
        "codex.command.codexMicroSettings": {
          id: "codex.command.codexMicroSettings",
          defaultMessage: "Codex Micro setup",
        },
        "codex.command.mcpSettings": { id: "codex.command.mcpSettings", defaultMessage: "MCP" },
        "codex.command.keyboardShortcuts": {
          id: "codex.command.keyboardShortcuts",
          defaultMessage: "Keyboard shortcuts",
        },
        "codex.command.showKeyboardShortcuts": {
          id: "codex.command.showKeyboardShortcuts",
          defaultMessage: "Show keyboard shortcuts",
        },
        "codex.command.clearAllUnreads": { id: "codex.command.clearAllUnreads", defaultMessage: "Clear all unreads" },
        "codex.command.manageTasks": { id: "codex.command.manageTasks", defaultMessage: "Manage scheduled tasks" },
        "codex.command.forceReloadSkills": {
          id: "codex.command.forceReloadSkills",
          defaultMessage: "Force reload skills",
        },
        "codex.command.openSkills": { id: "codex.command.openSkills", defaultMessage: "Go to skills" },
        "codex.command.newProject": { id: "codex.command.newProject", defaultMessage: "New project" },
        "codex.command.openFolder": { id: "codex.command.openFolder", defaultMessage: "Open folder" },
        "codex.command.toggleSidebar": { id: "codex.command.toggleSidebar", defaultMessage: "Toggle sidebar" },
        "codex.command.toggleBottomPanel": {
          id: "codex.command.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
        },
        "codex.command.togglePinnedSummary": {
          id: "codex.command.togglePinnedSummary",
          defaultMessage: "Toggle pinned summary",
        },
        "codex.command.toggleTerminal": { id: "codex.command.toggleTerminal", defaultMessage: "Open terminal" },
        "codex.command.newTab": { id: "codex.command.newTab", defaultMessage: "New tab" },
        "codex.command.closeOtherTabs": { id: "codex.command.closeOtherTabs", defaultMessage: "Close other tabs" },
        "codex.command.showWorkspaceTabView": { id: "codex.command.showWorkspaceTabView", defaultMessage: "Full view" },
        "codex.command.stepWorkspaceLayout": {
          id: "codex.command.stepWorkspaceLayout",
          defaultMessage: "Cycle workspace layout",
        },
        "codex.command.openReviewTab": { id: "codex.command.openReviewTab", defaultMessage: "Open Changes tab" },
        "codex.command.toggleReviewTab": { id: "codex.command.toggleReviewTab", defaultMessage: "Toggle Changes" },
        "codex.command.toggleReviewPanel": {
          id: "codex.command.toggleReviewPanel",
          defaultMessage: "Toggle Changes panel",
        },
        "codex.command.file.goToDefinition": {
          id: "codex.command.file.goToDefinition",
          defaultMessage: "Go to definition",
        },
        "codex.command.file.findReferences": {
          id: "codex.command.file.findReferences",
          defaultMessage: "Find references",
        },
        "codex.command.file.navigateBack": {
          id: "codex.command.file.navigateBack",
          defaultMessage: "Go back in file navigation",
        },
        "codex.command.file.navigateForward": {
          id: "codex.command.file.navigateForward",
          defaultMessage: "Go forward in file navigation",
        },
        "codex.command.findInThread": { id: "codex.command.findInThread", defaultMessage: "Find" },
        "codex.command.goToLine": { id: "codex.command.goToLine", defaultMessage: "Go to line" },
        "codex.command.focusBrowserAddressBar": {
          id: "codex.command.focusBrowserAddressBar",
          defaultMessage: "Focus browser address bar",
        },
        "codex.command.navigateBrowserBack": {
          id: "codex.command.navigateBrowserBack",
          defaultMessage: "Browser back",
        },
        "codex.command.navigateBrowserForward": {
          id: "codex.command.navigateBrowserForward",
          defaultMessage: "Browser forward",
        },
        "codex.command.navigateBack": { id: "codex.command.navigateBack", defaultMessage: "Back" },
        "codex.command.navigateForward": { id: "codex.command.navigateForward", defaultMessage: "Forward" },
        "codex.command.logOut": { id: "codex.command.logOut", defaultMessage: "Log out" },
        "codex.command.feedback": { id: "codex.command.feedback", defaultMessage: "Feedback" },
        "codex.command.environmentAction1": {
          id: "codex.command.environmentAction1",
          defaultMessage: "Environment action 1",
        },
        "codex.command.environmentAction2": {
          id: "codex.command.environmentAction2",
          defaultMessage: "Environment action 2",
        },
        "codex.command.environmentAction3": {
          id: "codex.command.environmentAction3",
          defaultMessage: "Environment action 3",
        },
        "codex.command.environmentAction4": {
          id: "codex.command.environmentAction4",
          defaultMessage: "Environment action 4",
        },
        "codex.command.environmentAction5": {
          id: "codex.command.environmentAction5",
          defaultMessage: "Environment action 5",
        },
        "codex.command.environmentAction6": {
          id: "codex.command.environmentAction6",
          defaultMessage: "Environment action 6",
        },
        "codex.command.environmentAction7": {
          id: "codex.command.environmentAction7",
          defaultMessage: "Environment action 7",
        },
        "codex.command.environmentAction8": {
          id: "codex.command.environmentAction8",
          defaultMessage: "Environment action 8",
        },
        "codex.command.environmentAction9": {
          id: "codex.command.environmentAction9",
          defaultMessage: "Environment action 9",
        },
        "codex.command.globalDictationHold": {
          id: "codex.command.globalDictationHold",
          defaultMessage: "Dictation shortcut",
        },
        "codex.command.globalDictationSingleTap": {
          id: "codex.command.globalDictationSingleTap",
          defaultMessage: "Single-tap dictation",
        },
        "codex.command.spotlightSearch": { id: "codex.command.spotlightSearch", defaultMessage: "Spotlight search" },
        "codex.command.notchVoice": { id: "codex.command.notchVoice", defaultMessage: "Voice in Mini" },
        "codex.command.toggleNotch": { id: "codex.command.toggleNotch", defaultMessage: "Toggle Notch" },
        "codex.command.focusTab1": { id: "codex.command.focusTab1", defaultMessage: "Focus tab 1" },
        "codex.command.focusTab2": { id: "codex.command.focusTab2", defaultMessage: "Focus tab 2" },
        "codex.command.focusTab3": { id: "codex.command.focusTab3", defaultMessage: "Focus tab 3" },
        "codex.command.focusTab4": { id: "codex.command.focusTab4", defaultMessage: "Focus tab 4" },
        "codex.command.focusTab5": { id: "codex.command.focusTab5", defaultMessage: "Focus tab 5" },
        "codex.command.focusTab6": { id: "codex.command.focusTab6", defaultMessage: "Focus tab 6" },
        "codex.command.focusTab7": { id: "codex.command.focusTab7", defaultMessage: "Focus tab 7" },
        "codex.command.focusTab8": { id: "codex.command.focusTab8", defaultMessage: "Focus tab 8" },
        "codex.command.focusTab9": { id: "codex.command.focusTab9", defaultMessage: "Focus tab 9" },
        "codex.command.thread1": { id: "codex.command.thread1", defaultMessage: "Go to chat 1" },
        "codex.command.thread2": { id: "codex.command.thread2", defaultMessage: "Go to chat 2" },
        "codex.command.thread3": { id: "codex.command.thread3", defaultMessage: "Go to chat 3" },
        "codex.command.thread4": { id: "codex.command.thread4", defaultMessage: "Go to chat 4" },
        "codex.command.thread5": { id: "codex.command.thread5", defaultMessage: "Go to chat 5" },
        "codex.command.thread6": { id: "codex.command.thread6", defaultMessage: "Go to chat 6" },
        "codex.command.thread7": { id: "codex.command.thread7", defaultMessage: "Go to chat 7" },
        "codex.command.thread8": { id: "codex.command.thread8", defaultMessage: "Go to chat 8" },
        "codex.command.thread9": { id: "codex.command.thread9", defaultMessage: "Go to chat 9" },
      }),
      h = { ...f, "codex.command.importExternalAgent": p.title, "codex.command.personalitySettings": g.title },
      M = (0, n.YK)({
        "codex.commandMenuTitle.newThread": { id: "codex.commandMenuTitle.newThread", defaultMessage: "New Chat" },
        "codex.commandMenuTitle.newProjectlessTask": {
          id: "codex.commandMenuTitle.newProjectlessTask",
          defaultMessage: "New standalone chat",
        },
        "codex.commandMenuTitle.openThreadInNewWindow": {
          id: "codex.commandMenuTitle.openThreadInNewWindow",
          defaultMessage: "Open in New Window",
        },
        "codex.commandMenuTitle.archiveThread": {
          id: "codex.commandMenuTitle.archiveThread",
          defaultMessage: "Archive chat",
        },
        "codex.commandMenuTitle.toggleThreadPin": {
          id: "codex.commandMenuTitle.toggleThreadPin",
          defaultMessage: "Pin/unpin chat",
        },
        "codex.commandMenuTitle.previousThread": {
          id: "codex.commandMenuTitle.previousThread",
          defaultMessage: "Previous Sidebar Item",
        },
        "codex.commandMenuTitle.nextThread": {
          id: "codex.commandMenuTitle.nextThread",
          defaultMessage: "Next Sidebar Item",
        },
        "codex.commandMenuTitle.settings": { id: "codex.commandMenuTitle.settings", defaultMessage: "Settings\u2026" },
        "codex.commandMenuTitle.showKeyboardShortcuts": {
          id: "codex.commandMenuTitle.showKeyboardShortcuts",
          defaultMessage: "Keyboard Shortcuts",
        },
        "codex.commandMenuTitle.newProject": {
          id: "codex.commandMenuTitle.newProject",
          defaultMessage: "New Project\u2026",
        },
        "codex.commandMenuTitle.openFolder": {
          id: "codex.commandMenuTitle.openFolder",
          defaultMessage: "Open Folder\u2026",
        },
        "codex.commandMenuTitle.toggleSidebar": {
          id: "codex.commandMenuTitle.toggleSidebar",
          defaultMessage: "Toggle Sidebar",
        },
        "codex.commandMenuTitle.toggleBottomPanel": {
          id: "codex.commandMenuTitle.toggleBottomPanel",
          defaultMessage: "Toggle Bottom Panel",
        },
        "codex.commandMenuTitle.togglePinnedSummary": {
          id: "codex.commandMenuTitle.togglePinnedSummary",
          defaultMessage: "Toggle Pinned Summary",
        },
        "codex.commandMenuTitle.toggleTerminal": {
          id: "codex.commandMenuTitle.toggleTerminal",
          defaultMessage: "Open Terminal",
        },
        "codex.commandMenuTitle.newTab": { id: "codex.commandMenuTitle.newTab", defaultMessage: "New tab" },
        "codex.commandMenuTitle.toggleReviewPanel": {
          id: "codex.commandMenuTitle.toggleReviewPanel",
          defaultMessage: "Toggle Changes Panel",
        },
        "codex.commandMenuTitle.findInThread": { id: "codex.commandMenuTitle.findInThread", defaultMessage: "Find" },
        "codex.commandMenuTitle.focusBrowserAddressBar": {
          id: "codex.commandMenuTitle.focusBrowserAddressBar",
          defaultMessage: "Focus Browser Address Bar",
        },
        "codex.commandMenuTitle.navigateBack": { id: "codex.commandMenuTitle.navigateBack", defaultMessage: "Back" },
        "codex.commandMenuTitle.navigateForward": {
          id: "codex.commandMenuTitle.navigateForward",
          defaultMessage: "Forward",
        },
        "codex.commandMenuTitle.logOut": { id: "codex.commandMenuTitle.logOut", defaultMessage: "Log Out" },
        "codex.commandMenuTitle.thread1": { id: "codex.commandMenuTitle.thread1", defaultMessage: "Go to Chat 1" },
        "codex.commandMenuTitle.thread2": { id: "codex.commandMenuTitle.thread2", defaultMessage: "Go to Chat 2" },
        "codex.commandMenuTitle.thread3": { id: "codex.commandMenuTitle.thread3", defaultMessage: "Go to Chat 3" },
        "codex.commandMenuTitle.thread4": { id: "codex.commandMenuTitle.thread4", defaultMessage: "Go to Chat 4" },
        "codex.commandMenuTitle.thread5": { id: "codex.commandMenuTitle.thread5", defaultMessage: "Go to Chat 5" },
        "codex.commandMenuTitle.thread6": { id: "codex.commandMenuTitle.thread6", defaultMessage: "Go to Chat 6" },
        "codex.commandMenuTitle.thread7": { id: "codex.commandMenuTitle.thread7", defaultMessage: "Go to Chat 7" },
        "codex.commandMenuTitle.thread8": { id: "codex.commandMenuTitle.thread8", defaultMessage: "Go to Chat 8" },
        "codex.commandMenuTitle.thread9": { id: "codex.commandMenuTitle.thread9", defaultMessage: "Go to Chat 9" },
        "codex.commandMenuTitle.copyConversationPath": {
          id: "codex.commandMenuTitle.copyConversationPath",
          defaultMessage: "Copy conversation path",
        },
        "codex.commandMenuTitle.copyDeeplink": {
          id: "codex.commandMenuTitle.copyDeeplink",
          defaultMessage: "Copy deeplink",
        },
        "codex.commandMenuTitle.copyWorkingDirectory": {
          id: "codex.commandMenuTitle.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
        },
        "codex.commandMenuTitle.closeTab": { id: "codex.commandMenuTitle.closeTab", defaultMessage: "Close Tab" },
        "codex.commandMenuTitle.closeWindow": { id: "codex.commandMenuTitle.closeWindow", defaultMessage: "Close" },
        "codex.commandMenuTitle.reloadBrowserPage": {
          id: "codex.commandMenuTitle.reloadBrowserPage",
          defaultMessage: "Reload Browser Page",
        },
        "codex.commandMenuTitle.hardReloadBrowserPage": {
          id: "codex.commandMenuTitle.hardReloadBrowserPage",
          defaultMessage: "Force Reload Browser Page",
        },
        "codex.commandMenuTitle.newWindow": { id: "codex.commandMenuTitle.newWindow", defaultMessage: "New Window" },
        "codex.commandMenuTitle.openCommandMenu": {
          id: "codex.commandMenuTitle.openCommandMenu",
          defaultMessage: "Open command menu",
        },
        "codex.commandMenuTitle.searchChats": {
          id: "codex.commandMenuTitle.searchChats",
          defaultMessage: "Search Chats\u2026",
        },
        "codex.commandMenuTitle.searchFiles": {
          id: "codex.commandMenuTitle.searchFiles",
          defaultMessage: "Search Files\u2026",
        },
        "codex.commandMenuTitle.renameThread": {
          id: "codex.commandMenuTitle.renameThread",
          defaultMessage: "Rename chat",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
        },
      }),
      v = {
        ...(0, n.YK)({
          "codex.commandDescription.importPrismToLocal": {
            id: "codex.commandDescription.importPrismToLocal",
            defaultMessage: "Edit and compile a local copy of your Prism project",
          },
          "codex.commandDescription.meetings.takeNotes": {
            id: "codex.commandDescription.meetings.takeNotes",
            defaultMessage: "Start taking notes with Meetings on this device",
          },
          "codex.commandDescription.screenshotToCurrentChat": {
            id: "codex.commandDescription.screenshotToCurrentChat",
            defaultMessage: "Select a screen area and attach its image to the current chat without sending",
          },
          "codex.commandDescription.screenshotToNewChat": {
            id: "codex.commandDescription.screenshotToNewChat",
            defaultMessage: "Select a screen area and attach its image to a new chat without sending",
          },
          "codex.commandDescription.artifacts.selectTool": {
            id: "codex.commandDescription.artifacts.selectTool",
            defaultMessage: "Select and move artifact elements",
          },
          "codex.commandDescription.artifacts.handTool": {
            id: "codex.commandDescription.artifacts.handTool",
            defaultMessage: "Pan the artifact viewport",
          },
          "codex.commandDescription.canvas.prompt": {
            id: "codex.commandDescription.canvas.prompt",
            defaultMessage: "Open a Canvas prompt at the pointer",
          },
          "codex.commandDescription.artifacts.rectangleTool": {
            id: "codex.commandDescription.artifacts.rectangleTool",
            defaultMessage: "Add rectangles to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.circleTool": {
            id: "codex.commandDescription.artifacts.circleTool",
            defaultMessage: "Add circles and ovals to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.arrowTool": {
            id: "codex.commandDescription.artifacts.arrowTool",
            defaultMessage: "Add arrows to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.lineTool": {
            id: "codex.commandDescription.artifacts.lineTool",
            defaultMessage: "Add lines to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.textTool": {
            id: "codex.commandDescription.artifacts.textTool",
            defaultMessage: "Add text to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.noteTool": {
            id: "codex.commandDescription.artifacts.noteTool",
            defaultMessage: "Place sticky notes on the Canvas",
          },
          "codex.commandDescription.page.addComment": {
            id: "codex.commandDescription.page.addComment",
            defaultMessage: "Comment on selected Page content or the word at the cursor",
          },
          "codex.commandDescription.page.formatNumberedList": {
            id: "codex.commandDescription.page.formatNumberedList",
            defaultMessage: "Format the selected Page text as a numbered list",
          },
          "codex.commandDescription.page.formatBulletedList": {
            id: "codex.commandDescription.page.formatBulletedList",
            defaultMessage: "Format the selected Page text as a bulleted list",
          },
          "codex.commandDescription.page.formatChecklist": {
            id: "codex.commandDescription.page.formatChecklist",
            defaultMessage: "Toggle checklist formatting for the selected Page text",
          },
          "codex.commandDescription.newThread": {
            id: "codex.commandDescription.newThread",
            defaultMessage: "Start a new chat",
          },
          "codex.commandDescription.newProjectlessTask": {
            id: "codex.commandDescription.newProjectlessTask",
            defaultMessage: "Start a new chat outside of any project",
          },
          "codex.commandDescription.temporaryChat": {
            id: "codex.commandDescription.temporaryChat",
            defaultMessage: "Start a chat that won't appear in history",
          },
          "codex.commandDescription.openThreadInNewWindow": {
            id: "codex.commandDescription.openThreadInNewWindow",
            defaultMessage: "Open the current chat in a new window",
          },
          "codex.commandDescription.archiveThread": {
            id: "codex.commandDescription.archiveThread",
            defaultMessage: "Archive the current chat",
          },
          "codex.commandDescription.deleteOrbit": {
            id: "codex.commandDescription.deleteOrbit",
            defaultMessage: "Confirm deletion of your {dot}",
          },
          "codex.commandDescription.deleteChat": {
            id: "codex.commandDescription.deleteChat",
            defaultMessage: "Confirm deletion of the current chat",
          },
          "codex.commandDescription.markThreadUnread": {
            id: "codex.commandDescription.markThreadUnread",
            defaultMessage: "Mark the current chat as unread",
          },
          "codex.commandDescription.toggleThreadPin": {
            id: "codex.commandDescription.toggleThreadPin",
            defaultMessage: "Pin or unpin the current chat",
          },
          "codex.commandDescription.copyPageLink": {
            id: "codex.commandDescription.copyPageLink",
            defaultMessage: "Copy the current document\u2019s link to the clipboard",
          },
          "codex.commandDescription.copyConversationMarkdown": {
            id: "codex.commandDescription.copyConversationMarkdown",
            defaultMessage: "Copy the current chat as Markdown",
          },
          "codex.commandDescription.copyLastCodeBlock": {
            id: "codex.commandDescription.copyLastCodeBlock",
            defaultMessage: "Copy the last assistant code block in the current chat",
          },
          "codex.commandDescription.openSideChat": {
            id: "codex.commandDescription.openSideChat",
            defaultMessage: "Open the current chat in a side chat",
          },
          "codex.commandDescription.focusMainChat": {
            id: "codex.commandDescription.focusMainChat",
            defaultMessage: "Move keyboard focus to the main chat composer",
          },
          "codex.commandDescription.focusSideChat": {
            id: "codex.commandDescription.focusSideChat",
            defaultMessage: "Move keyboard focus to an open side chat composer",
          },
          "codex.commandDescription.openControlWindow": {
            id: "codex.commandDescription.openControlWindow",
            defaultMessage: "Open the voice chat control window",
          },
          "codex.commandDescription.toggleDebugModal": {
            id: "codex.commandDescription.toggleDebugModal",
            defaultMessage: "Show or hide the internal debug panel",
          },
          "codex.commandDescription.undoAppAction": {
            id: "codex.commandDescription.undoAppAction",
            defaultMessage: "Undo the most recent app action",
          },
          "codex.commandDescription.redoAppAction": {
            id: "codex.commandDescription.redoAppAction",
            defaultMessage: "Redo the most recently undone app action",
          },
          "codex.commandDescription.reopenClosedTab": {
            id: "codex.commandDescription.reopenClosedTab",
            defaultMessage: "Reopen the most recently closed panel tab",
          },
          "codex.commandDescription.composer.openModelPicker": {
            id: "codex.commandDescription.composer.openModelPicker",
            defaultMessage: "Open the composer controls for model effort",
          },
          "codex.commandDescription.composer.openRecentModels": {
            id: "codex.commandDescription.composer.openRecentModels",
            defaultMessage: "Open recently used model, effort, and speed combinations",
          },
          "codex.commandDescription.composer.openProjectPicker": {
            id: "codex.commandDescription.composer.openProjectPicker",
            defaultMessage: "Open the composer project picker",
          },
          "codex.commandDescription.composer.toggleDictation": {
            id: "codex.commandDescription.composer.toggleDictation",
            defaultMessage: "Start or stop dictation in the chat composer",
          },
          "codex.commandDescription.composer.startVoiceMode": {
            id: "codex.commandDescription.composer.startVoiceMode",
            defaultMessage: "Start or stop voice chat",
          },
          "codex.commandDescription.composer.submit": {
            id: "codex.commandDescription.composer.submit",
            defaultMessage: "Send the current composer message",
          },
          "codex.commandDescription.browser.toggleAnnotationMode": {
            id: "codex.commandDescription.browser.toggleAnnotationMode",
            defaultMessage: "Enter or leave annotation mode in the browser",
          },
          "codex.commandDescription.browser.bookmarkPage": {
            id: "codex.commandDescription.browser.bookmarkPage",
            defaultMessage: "Save or edit the current browser page in bookmarks",
          },
          "codex.commandDescription.presentation.editLink": {
            id: "codex.commandDescription.presentation.editLink",
            defaultMessage: "Add or edit a link in the current slide selection",
          },
          "codex.commandDescription.presentation.duplicateSelection": {
            id: "codex.commandDescription.presentation.duplicateSelection",
            defaultMessage: "Make a copy of the selected objects on the current slide",
          },
          "codex.commandDescription.artifact.sendAnnotations": {
            id: "codex.commandDescription.artifact.sendAnnotations",
            defaultMessage: "Send pending annotations in the focused artifact",
          },
          "codex.commandDescription.composer.submitInBackground": {
            id: "codex.commandDescription.composer.submitInBackground",
            defaultMessage: "Send the current composer message without opening its chat",
          },
          "codex.commandDescription.composer.steer": {
            id: "codex.commandDescription.composer.steer",
            defaultMessage: "Submit the current composer prompt as a steering message",
          },
          "codex.commandDescription.composer.queue": {
            id: "codex.commandDescription.composer.queue",
            defaultMessage: "Submit the current composer prompt as a queued message",
          },
          "codex.commandDescription.composer.clear": {
            id: "codex.commandDescription.composer.clear",
            defaultMessage: "Clear the current composer prompt",
          },
          "codex.commandDescription.composer.addPhotos": {
            id: "codex.commandDescription.composer.addPhotos",
            defaultMessage: "Add photos to the active composer",
          },
          "codex.commandDescription.composer.addFiles": {
            id: "codex.commandDescription.composer.addFiles",
            defaultMessage: "Attach files and folders to the active composer",
          },
          "codex.commandDescription.composer.toggleFastMode": {
            id: "codex.commandDescription.composer.toggleFastMode",
            defaultMessage: "Cycle through available speeds: Standard, Fast, and Ultrafast",
          },
          "codex.commandDescription.composer.increaseReasoningEffort": {
            id: "codex.commandDescription.composer.increaseReasoningEffort",
            defaultMessage: "Increase the current composer reasoning effort",
          },
          "codex.commandDescription.composer.decreaseReasoningEffort": {
            id: "codex.commandDescription.composer.decreaseReasoningEffort",
            defaultMessage: "Decrease the current composer reasoning effort",
          },
          "codex.commandDescription.composer.cycleReasoningEffort": {
            id: "codex.commandDescription.composer.cycleReasoningEffort",
            defaultMessage: "Cycle through composer reasoning effort options",
          },
          "codex.commandDescription.composer.togglePlanMode": {
            id: "codex.commandDescription.composer.togglePlanMode",
            defaultMessage: "Turn plan mode on or off in the current composer",
          },
          "codex.commandDescription.composer.toggleWorktreeMode": {
            id: "codex.commandDescription.composer.toggleWorktreeMode",
            defaultMessage: "Switch the current composer between local and a new worktree",
          },
          "codex.commandDescription.composer.cycleHost": {
            id: "codex.commandDescription.composer.cycleHost",
            defaultMessage: "Cycle the new chat between this computer and available remote machines",
          },
          "codex.commandDescription.composer.toggleWorkRunLocation": {
            id: "codex.commandDescription.composer.toggleWorkRunLocation",
            defaultMessage: "Switch ChatGPT Work between cloud and local execution",
          },
          "codex.commandDescription.approval.approve": {
            id: "codex.commandDescription.approval.approve",
            defaultMessage: "Approve the active request",
          },
          "codex.commandDescription.approval.decline": {
            id: "codex.commandDescription.approval.decline",
            defaultMessage: "Decline the active request",
          },
          "codex.commandDescription.git.commit": {
            id: "codex.commandDescription.git.commit",
            defaultMessage: "Open commit or push options",
          },
          "codex.commandDescription.git.createPullRequest": {
            id: "codex.commandDescription.git.createPullRequest",
            defaultMessage: "Open pull request creation options",
          },
          "codex.commandDescription.git.createDraftPullRequest": {
            id: "codex.commandDescription.git.createDraftPullRequest",
            defaultMessage: "Open draft pull request creation options",
          },
          "codex.commandDescription.git.createBranch": {
            id: "codex.commandDescription.git.createBranch",
            defaultMessage: "Open branch creation options",
          },
          "codex.commandDescription.git.mergePullRequest": {
            id: "codex.commandDescription.git.mergePullRequest",
            defaultMessage: "Open pull request merge options",
          },
          "codex.commandDescription.git.openPullRequest": {
            id: "codex.commandDescription.git.openPullRequest",
            defaultMessage: "Open the pull request linked to the current chat",
          },
          "codex.commandDescription.git.toggleBlame": {
            id: "codex.commandDescription.git.toggleBlame",
            defaultMessage: "Show or hide author and commit details for the active editor line",
          },
          "codex.commandDescription.forkThread": {
            id: "codex.commandDescription.forkThread",
            defaultMessage: "Branch the current chat",
          },
          "codex.commandDescription.showMiniOverlay": {
            id: "codex.commandDescription.showMiniOverlay",
            defaultMessage: "Show Mini from anywhere",
          },
          "codex.commandDescription.nextThreadNeedingAttention": {
            id: "codex.commandDescription.nextThreadNeedingAttention",
            defaultMessage: "Switch to the next chat awaiting input or with unread activity",
          },
          "codex.commandDescription.previousThread": {
            id: "codex.commandDescription.previousThread",
            defaultMessage: "Switch to the previous sidebar item",
          },
          "codex.commandDescription.previousTab": {
            id: "codex.commandDescription.previousTab",
            defaultMessage: "Switch to the previous tab",
          },
          "codex.commandDescription.previousRecentThread": {
            id: "codex.commandDescription.previousRecentThread",
            defaultMessage: "Cycle to the previous recently viewed chat",
          },
          "codex.commandDescription.nextThread": {
            id: "codex.commandDescription.nextThread",
            defaultMessage: "Switch to the next sidebar item",
          },
          "codex.commandDescription.nextTab": {
            id: "codex.commandDescription.nextTab",
            defaultMessage: "Switch to the next tab",
          },
          "codex.commandDescription.nextRecentThread": {
            id: "codex.commandDescription.nextRecentThread",
            defaultMessage: "Cycle to the next recently viewed chat",
          },
          "codex.commandDescription.recentThreadSlot": {
            id: "codex.commandDescription.recentThreadSlot",
            defaultMessage: "Open the recently updated chat in this shortcut slot",
          },
          "codex.commandDescription.switchToChat": {
            id: "codex.commandDescription.switchToChat",
            defaultMessage: "Switch to Chat",
          },
          "codex.commandDescription.switchToWork": {
            id: "codex.commandDescription.switchToWork",
            defaultMessage: "Switch to Work",
          },
          "codex.commandDescription.switchToCodex": {
            id: "codex.commandDescription.switchToCodex",
            defaultMessage: "Switch to Codex",
          },
          "codex.commandDescription.settings": {
            id: "codex.commandDescription.settings",
            defaultMessage: "Open {appName} settings",
          },
          "codex.commandDescription.codexMicroSettings": {
            id: "codex.commandDescription.codexMicroSettings",
            defaultMessage: "Open Codex Micro setup",
          },
          "codex.commandDescription.mcpSettings": {
            id: "codex.commandDescription.mcpSettings",
            defaultMessage: "Configure MCP servers",
          },
          "codex.commandDescription.keyboardShortcuts": {
            id: "codex.commandDescription.keyboardShortcuts",
            defaultMessage: "Customize keyboard shortcuts",
          },
          "codex.commandDescription.showKeyboardShortcuts": {
            id: "codex.commandDescription.showKeyboardShortcuts",
            defaultMessage: "Show the shortcuts available right now",
          },
          "codex.commandDescription.clearAllUnreads": {
            id: "codex.commandDescription.clearAllUnreads",
            defaultMessage: "Mark all chats and scheduled task updates as read",
          },
          "codex.commandDescription.manageTasks": {
            id: "codex.commandDescription.manageTasks",
            defaultMessage: "Open the list of scheduled tasks",
          },
          "codex.commandDescription.forceReloadSkills": {
            id: "codex.commandDescription.forceReloadSkills",
            defaultMessage: "Refresh the skill catalog for the current context",
          },
          "codex.commandDescription.openSkills": {
            id: "codex.commandDescription.openSkills",
            defaultMessage: "Browse installed and recommended skills",
          },
          "codex.commandDescription.newProject": {
            id: "codex.commandDescription.newProject",
            defaultMessage: "Create a project",
          },
          "codex.commandDescription.openFolder": {
            id: "codex.commandDescription.openFolder",
            defaultMessage: "Add a local project to {appName}",
          },
          "codex.commandDescription.toggleSidebar": {
            id: "codex.commandDescription.toggleSidebar",
            defaultMessage: "Show or hide the sidebar",
          },
          "codex.commandDescription.toggleBottomPanel": {
            id: "codex.commandDescription.toggleBottomPanel",
            defaultMessage: "Show or hide the bottom panel",
          },
          "codex.commandDescription.togglePinnedSummary": {
            id: "codex.commandDescription.togglePinnedSummary",
            defaultMessage: "Show or hide the pinned summary",
          },
          "codex.commandDescription.toggleTerminal": {
            id: "codex.commandDescription.toggleTerminal",
            defaultMessage: "Open the terminal panel",
          },
          "codex.commandDescription.newTab": {
            id: "codex.commandDescription.newTab",
            defaultMessage: "Open a new tab",
          },
          "codex.commandDescription.closeOtherTabs": {
            id: "codex.commandDescription.closeOtherTabs",
            defaultMessage: "Close all tabs except the active tab",
          },
          "codex.commandDescription.showWorkspaceTabView": {
            id: "codex.commandDescription.showWorkspaceTabView",
            defaultMessage: "Enter or exit full view",
          },
          "codex.commandDescription.stepWorkspaceLayout": {
            id: "codex.commandDescription.stepWorkspaceLayout",
            defaultMessage: "Step from full view to split view, hide tabs, or show tabs beside Chat",
          },
          "codex.commandDescription.openReviewTab": {
            id: "codex.commandDescription.openReviewTab",
            defaultMessage: "Open the Changes tab",
          },
          "codex.commandDescription.toggleReviewTab": {
            id: "codex.commandDescription.toggleReviewTab",
            defaultMessage: "Show or hide Changes for the current Git-backed chat",
          },
          "codex.commandDescription.toggleReviewPanel": {
            id: "codex.commandDescription.toggleReviewPanel",
            defaultMessage: "Show or hide Changes for the current chat",
          },
          "codex.commandDescription.file.goToDefinition": {
            id: "codex.commandDescription.file.goToDefinition",
            defaultMessage: "Open the definition of the selected file symbol",
          },
          "codex.commandDescription.file.findReferences": {
            id: "codex.commandDescription.file.findReferences",
            defaultMessage: "Find references to the selected file symbol",
          },
          "codex.commandDescription.file.navigateBack": {
            id: "codex.commandDescription.file.navigateBack",
            defaultMessage: "Return to the previous file location",
          },
          "codex.commandDescription.file.navigateForward": {
            id: "codex.commandDescription.file.navigateForward",
            defaultMessage: "Return to the next file location",
          },
          "codex.commandDescription.findInThread": {
            id: "codex.commandDescription.findInThread",
            defaultMessage: "Search the current chat",
          },
          "codex.commandDescription.goToLine": {
            id: "codex.commandDescription.goToLine",
            defaultMessage: "Go to a line in the current file",
          },
          "codex.commandDescription.focusBrowserAddressBar": {
            id: "codex.commandDescription.focusBrowserAddressBar",
            defaultMessage: "Focus the in-app browser address bar",
          },
          "codex.commandDescription.navigateBrowserBack": {
            id: "codex.commandDescription.navigateBrowserBack",
            defaultMessage: "Go back in browser history",
          },
          "codex.commandDescription.navigateBrowserForward": {
            id: "codex.commandDescription.navigateBrowserForward",
            defaultMessage: "Go forward in browser history",
          },
          "codex.commandDescription.navigateBack": {
            id: "codex.commandDescription.navigateBack",
            defaultMessage: "Go back in navigation history",
          },
          "codex.commandDescription.navigateForward": {
            id: "codex.commandDescription.navigateForward",
            defaultMessage: "Go forward in navigation history",
          },
          "codex.commandDescription.logOut": {
            id: "codex.commandDescription.logOut",
            defaultMessage: "Sign out of {appName}",
          },
          "codex.commandDescription.feedback": {
            id: "codex.commandDescription.feedback",
            defaultMessage: "Send product feedback to the ChatGPT team",
          },
          "codex.commandDescription.environmentActionSlot": {
            id: "codex.commandDescription.environmentActionSlot",
            defaultMessage: "Run the environment action in this shortcut slot",
          },
          "codex.commandDescription.spotlightSearch": {
            id: "codex.commandDescription.spotlightSearch",
            defaultMessage: "Open Spotlight search from anywhere on desktop",
          },
          "codex.commandDescription.notchVoice": {
            id: "codex.commandDescription.notchVoice",
            defaultMessage: "Start voice in Mini or show the ongoing call",
          },
          "codex.commandDescription.toggleNotch": {
            id: "codex.commandDescription.toggleNotch",
            defaultMessage: "Expand or collapse the notch from anywhere",
          },
          "codex.commandDescription.globalDictationHold": {
            id: "codex.commandDescription.globalDictationHold",
            defaultMessage: "Hold to dictate, release to finish. Double-tap for hands-free, tap to finish.",
          },
          "codex.commandDescription.globalDictationSingleTap": {
            id: "codex.commandDescription.globalDictationSingleTap",
            defaultMessage: "Press once to start, again to finish",
          },
          "codex.commandDescription.copyConversationPath": {
            id: "codex.commandDescription.copyConversationPath",
            defaultMessage: "Copy the current chat path",
          },
          "codex.commandDescription.copyDeeplink": {
            id: "codex.commandDescription.copyDeeplink",
            defaultMessage: "Copy a deeplink to the current chat",
          },
          "codex.commandDescription.copyWorkingDirectory": {
            id: "codex.commandDescription.copyWorkingDirectory",
            defaultMessage: "Copy the current chat working directory",
          },
          "codex.commandDescription.closeTab": {
            id: "codex.commandDescription.closeTab",
            defaultMessage: "Close the active tab",
          },
          "codex.commandDescription.closeWindow": {
            id: "codex.commandDescription.closeWindow",
            defaultMessage: "Close the active window",
          },
          "codex.commandDescription.reloadBrowserPage": {
            id: "codex.commandDescription.reloadBrowserPage",
            defaultMessage: "Reload the active browser page",
          },
          "codex.commandDescription.hardReloadBrowserPage": {
            id: "codex.commandDescription.hardReloadBrowserPage",
            defaultMessage: "Force reload the active browser page",
          },
          "codex.commandDescription.newWindow": {
            id: "codex.commandDescription.newWindow",
            defaultMessage: "Open a new window",
          },
          "codex.commandDescription.openCommandMenu": {
            id: "codex.commandDescription.openCommandMenu",
            defaultMessage: "Open the command menu",
          },
          "codex.commandDescription.searchChats": {
            id: "codex.commandDescription.searchChats",
            defaultMessage: "Search and switch to a chat",
          },
          "codex.commandDescription.searchChatsPrevious": {
            id: "codex.commandDescription.searchChatsPrevious",
            defaultMessage: "Open the chat picker and cycle backward through chats",
          },
          "codex.commandDescription.togglePriorityFilter": {
            id: "codex.commandDescription.togglePriorityFilter",
            defaultMessage: "Turn the sidebar activity view on or off",
          },
          "codex.commandDescription.searchFiles": {
            id: "codex.commandDescription.searchFiles",
            defaultMessage: "Search files",
          },
          "codex.commandDescription.renameThread": {
            id: "codex.commandDescription.renameThread",
            defaultMessage: "Rename the current chat",
          },
          "codex.commandDescription.toggleFileTreePanel": {
            id: "codex.commandDescription.toggleFileTreePanel",
            defaultMessage: "Show or hide a page's navigation, or the code viewer's file tree",
          },
          "codex.commandDescription.toggleTraceRecording": {
            id: "codex.commandDescription.toggleTraceRecording",
            defaultMessage: "Start or stop trace recording",
          },
          "codex.commandDescription.focusTab": {
            id: "codex.commandDescription.focusTab",
            defaultMessage: "Focus the tab at this position in the chat tab strip",
          },
          "codex.commandDescription.threadSlot": {
            id: "codex.commandDescription.threadSlot",
            defaultMessage: "Open the visible chat in this shortcut slot",
          },
        }),
        "codex.commandDescription.importExternalAgent": p.description,
        "codex.commandDescription.personalitySettings": g.description,
      }
    function b(e, t, o = !1) {
      if ("openOrbit" === e.id) return s(t).title
      if ("focusPageBlockControls" === e.id) return r(t).title
      if ("openAvatarOverlay" === e.id && o) return t.formatMessage(x)
      if ("composer.captureAppshot" === e.id) return c(t).title
      if ("titleIntlId" in e) {
        var a
        let o
        return y(h, e.titleIntlId)
          ? t.formatMessage(h[e.titleIntlId], { dot: "dot" })
          : null == (o = u((a = e.id)) ? m[a] : null)
            ? ""
            : t.formatMessage(o.title)
      }
      return t.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function w(e, t, o, n = !1) {
      var d
      let l
      if ("openOrbit" === e.id) return s(t)
      if ("focusPageBlockControls" === e.id) return r(t)
      if ("composer.captureAppshot" === e.id) return c(t)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            o?.title ??
            t.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
            }),
          description:
            o?.description ??
            t.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
            }),
        }
      let p = (0, a.yF)(e)
          ? y(v, e.descriptionIntlId)
            ? t.formatMessage(v[e.descriptionIntlId], { appName: i.C, dot: "dot" })
            : null == (l = u((d = e.id)) ? m[d] : null)
              ? ""
              : t.formatMessage(l.description)
          : "",
        g = o?.title ?? b(e, t)
      return ("openAvatarOverlay" === e.id && n && (g = b(e, t, !0)), { title: g, description: o?.description ?? p })
    }
    function y(e, t) {
      return Object.hasOwn(e, t)
    }
  },
  ofxq(e, t, o) {
    o.d(t, { J: () => h })
    var a = o("ABep"),
      n = o("QosV"),
      i = o("tILS"),
      c = o("on57"),
      d = o("zd8w"),
      s = o("wD9O"),
      r = o("i7gm"),
      l = o("m5G2")
    function m({
      anchorRef: e,
      anchorPos: t,
      composerController: o,
      elementAnchor: a,
      gap: n = 8,
      flip: i = !0,
      minHeight: c = 160,
      minWidth: d,
      placement: s,
      portalRoot: r,
      windowZoom: l,
    }) {
      var f
      if ("u" < typeof document) return null
      if (null != o && null != t)
        return (function ({
          anchorPos: e,
          composerController: t,
          flip: o,
          gap: a,
          minHeight: n,
          placement: i,
          portalRoot: c,
          windowZoom: d,
        }) {
          let s = u({ anchorElement: t.view.dom, portalRoot: c }),
            r = (function (e) {
              return e > 0 ? e : 1
            })(d),
            l = s === document.body ? p(null) : s.getBoundingClientRect(),
            m = t.view.coordsAtPos(e)
          if (m.bottom <= l.top || m.top >= l.top + l.height) return null
          let f = l.width / r,
            h = Math.min(360, Math.max(f - 24, 0)),
            M = x((m.left - l.left) / r, 12, f - h - 12)
          return {
            ...g(
              { top: (m.top - l.top) / r - a, bottom: (m.bottom - l.top) / r + a },
              { top: 0, bottom: l.height / r },
              i,
              o,
              n,
            ),
            portalContainer: s,
            left: M,
            width: h,
            fixedPosition: s === document.body,
          }
        })({
          anchorPos: t,
          composerController: o,
          flip: i,
          gap: n,
          minHeight: c,
          placement: s,
          portalRoot: r,
          windowZoom: l,
        })
      let h = null == a ? e?.current : a.element
      if (null == h || (null != a && null == a.inlineBounds)) return null
      let M = u({ anchorElement: h, portalRoot: r }),
        v = (f = l) > 0 ? f : 1,
        b = h.getBoundingClientRect(),
        w = a?.inlineBounds ?? h,
        y = w === h ? b : w.getBoundingClientRect(),
        T = i && M === document.body,
        C = T ? window.visualViewport : null,
        D = M === document.body ? p(C) : M.getBoundingClientRect(),
        A = (b.top - D.top) / v - n,
        S = (b.bottom - D.top) / v + n,
        k = Math.max(T && null != a ? 46 : 0, (C?.offsetTop ?? 0) / v),
        j = (null == C ? D.height : C.offsetTop + C.height) / v,
        P = y.width / v,
        O = (y.left - D.left) / v
      if (null != d) {
        let e = D.width / v
        ;((P = Math.min(Math.max(P, d), Math.max(e - 24, 0))), (O = x(O, 12, e - P - 12)))
      }
      return {
        ...g({ top: A, bottom: S }, { top: k, bottom: j }, s, i, c),
        portalContainer: M,
        left: O,
        width: P,
        fixedPosition: M === document.body,
      }
    }
    function u({ anchorElement: e, portalRoot: t }) {
      return "body" === t ? document.body : (e.closest(".codex-dialog") ?? document.body)
    }
    function p(e) {
      let t = { height: window.innerHeight, left: 0, top: 0, width: window.innerWidth }
      if (null != e && (0 !== e.offsetTop || 0 !== e.offsetLeft)) {
        let o = document.documentElement.getBoundingClientRect()
        ;((t.left = o.left + e.pageLeft - e.offsetLeft), (t.top = o.top + e.pageTop - e.offsetTop))
      }
      return t
    }
    function g(e, t, o, a, n) {
      let i = Math.max(e.top - t.top - 12, 0),
        c = Math.max(t.bottom - e.bottom - 12, 0),
        d = "top" === o,
        s = d ? i : c,
        r = d ? c : i
      return (
        a && s < n && r > s && (d = !d),
        { renderAbove: d, top: d ? e.top : e.bottom, availableHeight: d ? i : c }
      )
    }
    function x(e, t, o) {
      return o < t ? t : Math.min(Math.max(e, t), o)
    }
    var f = o("TYyY")
    function h(e) {
      let t,
        o,
        p,
        g,
        x,
        h,
        w,
        y = (0, n.c)(44),
        {
          anchorPos: T,
          anchorRef: C,
          composerController: D,
          constrainHeightToViewport: A,
          elementAnchor: S,
          flip: k,
          gap: j,
          isActive: P,
          mentionUiState: O,
          minHeight: R,
          minWidth: E,
          placement: _,
          portalRoot: N,
          trackAnchorPosition: I,
          zIndexClassName: B,
          children: F,
        } = e,
        L = void 0 !== A && A,
        V = void 0 === k || k,
        W = void 0 === N ? "dialog" : N,
        z = void 0 !== I && I,
        U = void 0 === B ? "z-[60]" : B,
        G = (0, s.dz)()
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { key: null, value: null }), (y[0] = t)) : (t = y[0])
      let q = (0, d.useRef)(t)
      y[1] !== C || y[2] !== D || y[3] !== S || y[4] !== P || y[5] !== _ || y[6] !== W || y[7] !== z || y[8] !== G
        ? ((o = (e) => {
            let t, o
            if (!P || "u" < typeof window) return b
            if (null != S) {
              let { element: t, inlineBounds: o } = S
              if (null == t || null == o) return v
              let a = (0, i.ll)(t, null, e),
                n = o === t ? null : (0, i.ll)(o, null, e),
                c = u({ anchorElement: t, portalRoot: W }),
                d = c === document.body || c === t || c === o ? void 0 : (0, i.ll)(c, null, e)
              return () => {
                ;(a(), n?.(), d?.())
              }
            }
            let a = () => {
                if (null != D) {
                  let e = f.Gq.getState(D.view.state)
                  e?.active &&
                    null != e.anchorPos &&
                    null ==
                      m({
                        anchorPos: e.anchorPos,
                        composerController: D,
                        placement: _,
                        portalRoot: W,
                        windowZoom: G,
                      }) &&
                    (0, f.kQ)(D.view)
                }
                e()
              },
              n = C?.current
            if (z && null != n) {
              let e = () => {
                ;(t?.(), (t = (0, i.ll)(n, null, a, { ancestorResize: !1, ancestorScroll: !1, elementResize: !1 })))
              }
              ;(e(), (o = (0, l.J)({ target: n, axis: "both", onChange: e })))
            }
            return (
              null == t && a(),
              window.addEventListener("resize", a),
              window.addEventListener("scroll", a, !0),
              () => {
                ;(o?.(), t?.(), window.removeEventListener("resize", a), window.removeEventListener("scroll", a, !0))
              }
            )
          }),
          (y[1] = C),
          (y[2] = D),
          (y[3] = S),
          (y[4] = P),
          (y[5] = _),
          (y[6] = W),
          (y[7] = z),
          (y[8] = G),
          (y[9] = o))
        : (o = y[9])
      let $ = o
      y[10] !== T ||
      y[11] !== C ||
      y[12] !== D ||
      y[13] !== S ||
      y[14] !== V ||
      y[15] !== j ||
      y[16] !== P ||
      y[17] !== O?.anchorPos ||
      y[18] !== R ||
      y[19] !== E ||
      y[20] !== _ ||
      y[21] !== W ||
      y[22] !== G
        ? ((p = () => {
            if (!P) return null
            let e = m({
                anchorRef: C,
                anchorPos: T ?? O?.anchorPos,
                composerController: D,
                elementAnchor: S,
                flip: V,
                gap: j,
                minHeight: R,
                minWidth: E,
                placement: _,
                portalRoot: W,
                windowZoom: G,
              }),
              t =
                null == e
                  ? null
                  : `${e.availableHeight}:${e.fixedPosition}:${e.left}:${e.renderAbove}:${e.top}:${e.width}`,
              o = q.current
            return o.key === t && o.value?.portalContainer === e?.portalContainer
              ? o.value
              : ((q.current = { key: t, value: e }), e)
          }),
          (y[10] = T),
          (y[11] = C),
          (y[12] = D),
          (y[13] = S),
          (y[14] = V),
          (y[15] = j),
          (y[16] = P),
          (y[17] = O?.anchorPos),
          (y[18] = R),
          (y[19] = E),
          (y[20] = _),
          (y[21] = W),
          (y[22] = G),
          (y[23] = p))
        : (p = y[23])
      let H = (0, d.useSyncExternalStore)($, p, M)
      if (!P || null == H) return null
      let Y = `${H.availableHeight}px`,
        K = L ? `${H.availableHeight}px` : void 0,
        Q = L ? H.availableHeight : void 0
      y[24] !== H.left || y[25] !== H.top || y[26] !== H.width || y[27] !== K || y[28] !== Q || y[29] !== Y
        ? ((g = {
            "--autocomplete-overlay-available-height": Y,
            "--composer-overlay-available-height": K,
            left: H.left,
            maxHeight: Q,
            top: H.top,
            width: H.width,
          }),
          (y[24] = H.left),
          (y[25] = H.top),
          (y[26] = H.width),
          (y[27] = K),
          (y[28] = Q),
          (y[29] = Y),
          (y[30] = g))
        : (g = y[30])
      let X = g,
        Z = H.portalContainer,
        J = L && "flex flex-col",
        ee = H.fixedPosition ? "fixed" : "absolute",
        et = H.fixedPosition && "[zoom:var(--codex-window-zoom)]",
        eo = H.renderAbove && "-translate-y-full"
      return (
        y[31] !== J || y[32] !== ee || y[33] !== et || y[34] !== eo || y[35] !== U
          ? ((x = (0, c.A)(U, J, ee, et, eo)),
            (y[31] = J),
            (y[32] = ee),
            (y[33] = et),
            (y[34] = eo),
            (y[35] = U),
            (y[36] = x))
          : (x = y[36]),
        y[37] !== F || y[38] !== X || y[39] !== x
          ? ((h = (0, a.jsx)("div", { className: x, style: X, children: F })),
            (y[37] = F),
            (y[38] = X),
            (y[39] = x),
            (y[40] = h))
          : (h = y[40]),
        y[41] !== H.portalContainer || y[42] !== h
          ? ((w = (0, a.jsx)(r.s, { container: Z, children: h })),
            (y[41] = H.portalContainer),
            (y[42] = h),
            (y[43] = w))
          : (w = y[43]),
        w
      )
    }
    function M() {
      return null
    }
    function v() {}
    function b() {}
  },
  By8V(e, t, o) {
    var a = o("QosV"),
      n = o("iRMi"),
      i = o("tQ31"),
      c = o.n(i),
      d = o("KUdL"),
      s = o.n(d),
      r = o("i5ac"),
      l = o.n(r),
      m = o("qmMi"),
      u = o("zd8w"),
      p = o("Qgfj"),
      g = o("F5N3"),
      x = o("iiZm"),
      f = o("yGJW"),
      h = o("OWtl"),
      M = o("Sd8U")
    let v = (0, p.zR)({ id: "composer.slashCommands.dialogTitle", defaultMessage: "Slash commands" }),
      b = (0, m.vP)(h.u, []),
      w = (0, m.vP)(M.PR, []),
      y = (0, m.vP)(M.PR, 0),
      T = (0, m.vP)(M.PR, () => null),
      C = (0, m.un)(M.PR, ({ get: e }) => _(l()([...e(w), ...(e(T)?.commands ?? []), ...e(b)], (e) => e.id))),
      D = /^\s*\/[^/\r\n]*\s*$/
    function A(e) {
      return e - 1
    }
    function S(e) {
      return e + 1
    }
    function k(e, t, o, n) {
      let i,
        c,
        d,
        s,
        r = (0, a.c)(19)
      r[0] !== t.searchAliases ? ((i = t.searchAliases?.join("\0")), (r[0] = t.searchAliases), (r[1] = i)) : (i = r[1])
      let l = i
      r[2] !== t.triggers ? ((c = t.triggers?.join("\0")), (r[2] = t.triggers), (r[3] = c)) : (c = r[3])
      let m = c
      ;(r[4] !== t ? ((d = [t]), (r[4] = t), (r[5] = d)) : (d = r[5]),
        r[6] !== t.description ||
        r[7] !== t.enabled ||
        r[8] !== t.getDisplayTitle ||
        r[9] !== t.getSearchQuery ||
        r[10] !== t.group ||
        r[11] !== t.id ||
        r[12] !== t.presentation ||
        r[13] !== t.requiresEmptyComposer ||
        r[14] !== t.title ||
        r[15] !== o ||
        r[16] !== l ||
        r[17] !== m
          ? ((s = [
              t.id,
              t.title,
              m,
              t.description,
              l,
              t.getSearchQuery,
              t.getDisplayTitle,
              t.enabled,
              t.requiresEmptyComposer,
              t.presentation,
              t.group,
              ...o,
            ]),
            (r[6] = t.description),
            (r[7] = t.enabled),
            (r[8] = t.getDisplayTitle),
            (r[9] = t.getSearchQuery),
            (r[10] = t.group),
            (r[11] = t.id),
            (r[12] = t.presentation),
            (r[13] = t.requiresEmptyComposer),
            (r[14] = t.title),
            (r[15] = o),
            (r[16] = l),
            (r[17] = m),
            (r[18] = s))
          : (s = r[18]),
        j(e, d, s, n))
    }
    function j(e, t, o, n) {
      let i,
        c,
        d,
        s,
        r,
        l,
        m = (0, a.c)(16)
      m[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = new Set()), (m[0] = i)) : (i = m[0])
      let p = (0, u.useRef)(i),
        x = (0, u.useRef)(null),
        f = (0, u.useRef)(null),
        h = (0, u.useRef)(null)
      m[1] !== t ? ((c = t.map(E).join("\0")), (m[1] = t), (m[2] = c)) : (c = m[2])
      let M = c
      ;(m[3] !== M || m[4] !== t || m[5] !== o || m[6] !== e
        ? ((d = () => {
            let a = [e, M, ...o]
            if (f.current?.length === a.length && a.every((e, t) => Object.is(f.current?.[t], e))) return
            f.current = a
            let n = t.map(R)
            if (((x.current = n), 0 === t.length && 0 === p.current.size)) return
            let i = p.current,
              c = new Set(t.map(O))
            ;((p.current = c),
              e((e) => {
                let t = e.filter((e) => !1 !== e.enabled && !i.has(e.id) && !c.has(e.id)),
                  o = n.filter(P)
                return 0 === o.length && t.length === e.length ? e : [...t, ..._(o)]
              }))
          }),
          (m[3] = M),
          (m[4] = t),
          (m[5] = o),
          (m[6] = e),
          (m[7] = d))
        : (d = m[7]),
        m[8] !== M || m[9] !== o || m[10] !== e
          ? ((s = [e, M, ...o]), (m[8] = M), (m[9] = o), (m[10] = e), (m[11] = s))
          : (s = m[11]),
        (0, u.useLayoutEffect)(d, s),
        m[12] !== n || m[13] !== e
          ? ((r = () => (
              h.current?.owner === n && h.current?.setSlashCommands === e && h.current.cancel(),
              (h.current = null),
              () => {
                let t = x.current
                if (null == t || 0 === t.length) return
                let o = () => {
                  ;(x.current === t && ((p.current = new Set()), (x.current = null), (f.current = null)),
                    e((e) => {
                      let o = e.filter((e) => !t.includes(e))
                      return o.length === e.length ? e : o
                    }))
                }
                null == n ? o() : (h.current = { cancel: (0, g.UO)(n, o, "layout"), owner: n, setSlashCommands: e })
              }
            )),
            (l = [n, e]),
            (m[12] = n),
            (m[13] = e),
            (m[14] = r),
            (m[15] = l))
          : ((r = m[14]), (l = m[15])),
        (0, u.useLayoutEffect)(r, l))
    }
    function P(e) {
      return !1 !== e.enabled
    }
    function O(e) {
      return e.id
    }
    function R(e) {
      return { ...e }
    }
    function E(e) {
      return e.id
    }
    function _(e) {
      return s()(e, [(e) => e.group ?? "", (e) => e.title])
    }
    function N(e) {
      let t = c()(x.WE)
      return (o, a) => Math.max(...[o.title, o.id, ...(o.searchAliases ?? [])].map(t(a ?? e)))
    }
    o.d(
      t,
      {},
      {
        Cn: function (e) {
          let t = e?.sections
          return "function" == typeof t ? t() : (t ?? [])
        },
        KJ: function (e) {
          return 0 !== e.trim().length && !D.test(e)
        },
        KS: function (e, t, o) {
          let n,
            i,
            c,
            d = (0, a.c)(6),
            s = void 0 !== o && o,
            r = (0, m.gh)(M.PR),
            l = (0, u.useContext)(g.$w)
          ;(d[0] !== r
            ? ((n = (e) => {
                r.set(w, e)
              }),
              (d[0] = r),
              (d[1] = n))
            : (n = d[1]),
            j(n, e, t, l),
            d[2] !== s || d[3] !== r
              ? ((i = () => {
                  if (s)
                    return (
                      r.set(y, S),
                      () => {
                        r.set(y, A)
                      }
                    )
                }),
                (c = [s, r]),
                (d[2] = s),
                (d[3] = r),
                (d[4] = i),
                (d[5] = c))
              : ((i = d[4]), (c = d[5])),
            (0, u.useLayoutEffect)(i, c))
        },
        RE: function (e, t) {
          let o = t.trim()
          if (0 === o.length) return e
          let a = N(o),
            n = new Map()
          return (
            e.forEach((e) => {
              let t = e.group ?? null
              n.has(t) || n.set(t, n.size)
            }),
            s()(
              e.map((e) => ({ command: e, score: a(e, e.getSearchQuery?.(o)) })).filter((e) => e.score > 0),
              [
                (e) => n.get(e.command.group ?? null) ?? Number.MAX_SAFE_INTEGER,
                (e) => -e.score,
                (e) => e.command.title,
              ],
            ).map((e) => e.command)
          )
        },
        _e: w,
        ar: function (e, t) {
          let o = t.trim()
          if (0 === o.length) return e
          let a = N(o)
          return s()(
            e.map((e) => ({ item: e, score: a(e) })).filter((e) => e.score > 0),
            [(e) => -e.score],
          ).map((e) => e.item)
        },
        kE: T,
        kT: y,
        kW: v,
        lQ: function (e, t) {
          return t ? e.filter((e) => !e.requiresEmptyComposer) : e
        },
        r6: function (e) {
          let t,
            o,
            n,
            i,
            c = (0, a.c)(7)
          ;(c[0] !== e
            ? (({ dependencies: o, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = o))
            : ((t = c[1]), (o = c[2])),
            c[3] !== o ? ((n = void 0 === o ? [] : o), (c[3] = o), (c[4] = n)) : (n = c[4]))
          let d = n,
            s = (0, m.gh)(M.PR),
            r = (0, u.useContext)(g.$w)
          ;(c[5] !== s
            ? ((i = (e) => {
                s.set(w, e)
              }),
              (c[5] = s),
              (c[6] = i))
            : (i = c[6]),
            k(i, t, d, r))
        },
        sW: function (e, t, o) {
          var a
          ;(0, f.yy)(e, n.CodexSlashCommandSelected, {
            commandId:
              (a = t.id).startsWith("skill:") || a.startsWith("browser-skill-")
                ? "skill"
                : a.startsWith("custom-prompt:")
                  ? "custom-prompt"
                  : a,
            commandGroup: t.group,
            selectionSource: (function (e) {
              switch (e) {
                case "autocomplete":
                  return n.CodexSlashCommandSelectionSource.CODEX_SLASH_COMMAND_SELECTION_SOURCE_AUTOCOMPLETE
                case "dialog":
                  return n.CodexSlashCommandSelectionSource.CODEX_SLASH_COMMAND_SELECTION_SOURCE_DIALOG
              }
            })(o),
          })
        },
        um: function (e) {
          let t,
            o,
            n,
            i,
            c = (0, a.c)(7)
          ;(c[0] !== e
            ? (({ dependencies: o, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = o))
            : ((t = c[1]), (o = c[2])),
            c[3] !== o ? ((n = void 0 === o ? [] : o), (c[3] = o), (c[4] = n)) : (n = c[4]))
          let d = n,
            s = (0, m.gh)(h.u)
          ;(c[5] !== s
            ? ((i = (e) => {
                s.set(b, e)
              }),
              (c[5] = s),
              (c[6] = i))
            : (i = c[6]),
            k(i, t, d, null))
        },
        uy: function (e, t) {
          let o = e.filter((e) => (e.triggers ?? ["/"]).includes(t))
          return "$" === t ? _(o) : o
        },
        vJ: C,
      },
    )
  },
  Jue3(e, t, o) {
    var a = o("qmMi"),
      n = o("ChYf"),
      i = o("wLMK"),
      c = o("OWtl")
    let d = (0, a.un)(c.u, ({ get: e }) => {
      let t = e(i.V).data?.platform
      return "linux" === t
        ? e(n.G, { name: "dictation.composer" }).isCapable || e(n.G, { name: "dictation.chatgpt" }).isCapable
          ? "app"
          : null
        : ("darwin" === t || "win32" === t) && e(n.G, { name: "dictation.global" }).isCapable
          ? "os-global"
          : null
    })
    o.d(t, {}, { i: d })
  },
  wEQY(e, t, o) {
    function a(e) {
      return e.includes("\\") ? "\\" : "/"
    }
    o.d(
      t,
      {},
      {
        P: function (e) {
          var t, o
          let n = a(e),
            i = e.replace(/[\\/]+$/, ""),
            c = i.lastIndexOf(n)
          if (-1 === c) return "."
          if (0 === c) return n
          let d = i.slice(0, c)
          return ((t = d), /^[A-Za-z]:$/.test(t) || ((o = d), /^\\\\[^\\]+\\[^\\]+$/.test(o))) ? `${d}${n}` : d
        },
        U: function (e, ...t) {
          let o = a(e)
          return [e.replace(/[\\/]+$/, ""), ...t.map((e) => e.replace(/^[\\/]+|[\\/]+$/g, ""))].join(o)
        },
      },
    )
  },
  dESx(e, t, o) {
    var a = o("tO3J")
    let n = { bold: "CmdOrCtrl+B", italic: "CmdOrCtrl+I", underline: "CmdOrCtrl+U", link: "CmdOrCtrl+K" },
      i = Object.values(n)
    o.d(
      t,
      {},
      {
        QR: function (e, t) {
          return i.some((o) => (0, a.ho)(e, o, t))
        },
        TY: function (e) {
          let t = e instanceof Element ? e.closest("input, textarea, select, [contenteditable]") : null
          return (
            t?.matches(
              "[data-composer-markdown][contenteditable='true'], [data-page-document-selection] [contenteditable='true']",
            ) === !0
          )
        },
        lI: n,
      },
    )
  },
  ELpK(e, t, o) {
    var a = o("qmMi"),
      n = o("DBCl"),
      i = o("SPnB"),
      c = o("Kwur"),
      d = o("OWtl"),
      s = o("WFY2"),
      r = o("rvFo"),
      l = o("kK7d"),
      m = o("e1xH"),
      u = o("tv8P")
    let p = (0, a.vU)(d.u, (e, { get: t }) => ({
        enabled: t(m.pagesEnabled$) && null != t(i.chatGptAuthenticatedAccountId$) && e.length > 0,
        queryKey: ["space", "page-typeahead", t(i.chatGptAuthenticatedAccountId$), t(i.chatGptAuthenticatedUserId$), e],
        queryFn: ({ signal: t }) =>
          l.CodexRequest.safeGet("/pages", {
            parameters: {
              query: {
                surface: "library",
                query: e,
                limit: 5,
                include_checkpoint: !1,
                include_checkpoint_cdn: !1,
                include_has_children: !1,
              },
            },
            signal: t,
            retry: !1,
          }),
        staleTime: r.D.THIRTY_SECONDS,
        gcTime: r.D.THIRTY_SECONDS,
        retry: !1,
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      })),
      g = (0, a.vU)(d.u, (e, { get: t, scope: o }) => {
        let a = t(u.spaceAccountId$),
          d = t(i.chatGptAuthenticatedUserId$)
        return {
          enabled: t(m.pagesEnabled$) && null != a && e.length > 0,
          queryKey: ["space", "page-mention-search", a, d, e],
          queryFn: async ({ signal: t }) => {
            if (null == a) throw Error("space_account_unavailable")
            let i = (0, u.watchSpaceAccount)(o, a, d),
              r = AbortSignal.any([t, i.signal])
            try {
              let t = await (0, n._qC)(
                c.Request.safePost("/global/search", {
                  requestBody: {
                    query: e,
                    cursor: null,
                    entrypoint: "composer",
                    limit: 20,
                    source_requests: [{ type: "space", filters: {}, include_files: !1 }],
                  },
                  signal: r,
                  retry: !1,
                }),
                r,
              )
              return (r.throwIfAborted(), t)
            } catch (e) {
              throw (r.aborted || s.v.warning("page_mention_search_failed", { safe: {}, sensitive: { error: e } }), e)
            } finally {
              i.stop()
            }
          },
          refetchOnMount: !0,
          retry: !1,
          staleTime: r.D.THIRTY_SECONDS,
        }
      })
    o.d(t, {}, { B: p, Q: g })
  },
  KUNU(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("on57"),
      c = o("zd8w"),
      d = o("tsSe"),
      s = o("IlRO")
    o.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            r,
            l,
            m,
            u,
            p,
            g,
            x,
            f,
            h,
            M,
            v,
            b,
            w,
            y,
            T,
            C,
            D,
            A,
            S,
            k = (0, n.c)(73),
            {
              className: j,
              glowEnabled: P,
              onDraw: O,
              onRenderError: R,
              onStateSample: E,
              paletteIndex: _,
              placement: N,
              presentation: I,
              presentationAnchorRef: B,
              phase: F,
              previewAudioLevel: L,
              previewTimeMs: V,
              subscribeToAudio: W,
              voiceActivity: z,
            } = e,
            U = void 0 === P || P,
            G = void 0 === _ ? 0 : _,
            q = void 0 === I ? "overlay" : I,
            $ = void 0 === L ? 0 : L,
            H = void 0 === W ? d.NY : W,
            [Y, K] = (0, c.useState)(!1),
            Q = (0, c.useRef)(null),
            X = (0, c.useRef)(null),
            Z = (0, c.useRef)(null),
            J = (0, c.useRef)(null)
          ;(k[0] !== V ? ("live" !== V && (t = V), (k[0] = V), (k[1] = t)) : (t = k[1]),
            k[2] !== G || k[3] !== F || k[4] !== $ || k[5] !== t || k[6] !== z
              ? ((r = { paletteIndex: G, phase: F, previewAudioLevel: $, previewTimeMs: t, voiceActivity: z }),
                (k[2] = G),
                (k[3] = F),
                (k[4] = $),
                (k[5] = t),
                (k[6] = z),
                (k[7] = r))
              : (r = k[7]))
          let ee = (0, c.useRef)(r)
          k[8] !== O || k[9] !== q || k[10] !== $ || k[11] !== t
            ? ((l = (e) => {
                "preview" === q || null != t || $ > 0 || O?.(e)
              }),
              (k[8] = O),
              (k[9] = q),
              (k[10] = $),
              (k[11] = t),
              (k[12] = l))
            : (l = k[12])
          let et = (0, c.useEffectEvent)(l)
          k[13] !== E || k[14] !== q || k[15] !== $ || k[16] !== t
            ? ((m = (e) => {
                "preview" !== q && null == t && 0 === $ && E?.(e)
              }),
              (k[13] = E),
              (k[14] = q),
              (k[15] = $),
              (k[16] = t),
              (k[17] = m))
            : (m = k[17])
          let eo = (0, c.useEffectEvent)(m)
          k[18] !== R
            ? ((u = () => {
                ;(K(!0), R?.())
              }),
              (k[18] = R),
              (k[19] = u))
            : (u = k[19])
          let ea = (0, c.useEffectEvent)(u)
          k[20] !== N || k[21] !== B
            ? ((p = (e) => {
                ;((X.current = e), (null == e || e.dataset.avatarOverlayPlacement === N) && B?.(e, e?.parentElement))
              }),
              (k[20] = N),
              (k[21] = B),
              (k[22] = p))
            : (p = k[22])
          let en = p
          ;(k[23] !== et || k[24] !== ea || k[25] !== eo || k[26] !== Y || !1 !== k[27] || k[28] !== q
            ? ((g = () => {
                if (Y) return
                let e = X.current,
                  t = Z.current,
                  a = e?.parentElement
                if (null == e || null == t || null == a) return
                let n = !1,
                  i = null,
                  c = null,
                  d = () => {
                    let o = String(Math.max(1, Math.floor(Math.min(e.clientWidth, e.clientHeight)))) + "px"
                    ;((t.style.width = o), (t.style.height = o))
                  }
                return (
                  d(),
                  "u" > typeof ResizeObserver && (c = new ResizeObserver(d)).observe(e),
                  (async () => (await o.e(317638).then(o.bind(o, "HNEj"))).HorizonVoiceOrbController)()
                    .then((e) => {
                      var o, i
                      let c, d
                      return n
                        ? null
                        : e.create(t, {
                            displayScale:
                              ((o = a),
                              (i = t),
                              (c = Math.max(1, Math.min(o.clientWidth, o.clientHeight))),
                              (d = Math.max(1, Math.min(i.clientWidth || c + 40, i.clientHeight || c + 40))),
                              Math.min(1, c / d)),
                            onDraw: (e) => {
                              n || et(e)
                            },
                            onRenderError: () => {
                              n || ea()
                            },
                            onStateSample: void 0,
                            presentation: q,
                          })
                    })
                    .then((e) => {
                      n
                        ? e?.dispose()
                        : null != e && ((i = e), (Q.current = e), e.setAudioLevels(J.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      n || ea()
                    }),
                  () => {
                    ;((n = !0), c?.disconnect(), i?.dispose(), (Q.current = null))
                  }
                )
              }),
              (k[23] = et),
              (k[24] = ea),
              (k[25] = eo),
              (k[26] = Y),
              (k[27] = !1),
              (k[28] = q),
              (k[29] = g))
            : (g = k[29]),
            k[30] !== Y || !1 !== k[31] || k[32] !== q
              ? ((x = [Y, !1, q]), (k[30] = Y), (k[31] = !1), (k[32] = q), (k[33] = x))
              : (x = k[33]),
            (0, c.useLayoutEffect)(g, x),
            k[34] !== G || k[35] !== F || k[36] !== $ || k[37] !== t || k[38] !== z
              ? ((f = () => {
                  let e = { paletteIndex: G, phase: F, previewAudioLevel: $, previewTimeMs: t, voiceActivity: z }
                  ;((ee.current = e), Q.current?.setInputs(e))
                }),
                (k[34] = G),
                (k[35] = F),
                (k[36] = $),
                (k[37] = t),
                (k[38] = z),
                (k[39] = f))
              : (f = k[39]),
            k[40] !== G || k[41] !== F || k[42] !== $ || k[43] !== t || k[44] !== z
              ? ((h = [G, F, $, t, z]), (k[40] = G), (k[41] = F), (k[42] = $), (k[43] = t), (k[44] = z), (k[45] = h))
              : (h = k[45]),
            (0, c.useEffect)(f, h))
          let ei = !Y && "inactive" !== F
          ;(k[46] !== ei || k[47] !== H
            ? ((M = () => {
                if (!ei) {
                  ;((J.current = null), Q.current?.setAudioLevels(null))
                  return
                }
                return H((e) => {
                  ;((J.current = e), Q.current?.setAudioLevels(e))
                })
              }),
              (v = [ei, H]),
              (k[46] = ei),
              (k[47] = H),
              (k[48] = M),
              (k[49] = v))
            : ((M = k[48]), (v = k[49])),
            (0, c.useEffect)(M, v),
            k[50] !== N
              ? ((b = (0, i.A)(
                  "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
                  "center" === N
                    ? "-top-5 -left-5"
                    : [N.endsWith("end") ? "right-0" : "left-0", N.startsWith("top") ? "bottom-0" : "top-0"],
                )),
                (k[50] = N),
                (k[51] = b))
              : (b = k[51]))
          let ec = b
          k[52] !== Y || k[53] !== G
            ? ((w = Y ? (0, s.V)(G) : null), (k[52] = Y), (k[53] = G), (k[54] = w))
            : (w = k[54])
          let ed = w
          ;(k[55] !== U || k[56] !== G
            ? ((y = U ? `drop-shadow(0 0 4px color-mix(in srgb, ${(0, s.P)(G)} 55%, transparent))` : void 0),
              (k[55] = U),
              (k[56] = G),
              (k[57] = y))
            : (y = k[57]),
            k[58] !== y ? ((T = { filter: y }), (k[58] = y), (k[59] = T)) : (T = k[59]))
          let es = T
          return (
            k[60] !== j
              ? ((C = (0, i.A)("codex-avatar-root relative h-full w-full", j)), (k[60] = j), (k[61] = C))
              : (C = k[61]),
            k[62] !== es || k[63] !== ed
              ? ((D =
                  null != ed
                    ? (0, a.jsx)("div", {
                        className:
                          "absolute top-1/2 left-1/2 size-[50px] max-h-[calc(100%-40px)] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "data-testid": "voice-static-orb",
                        style: {
                          background: `linear-gradient(155deg, ${ed.fallbackColors[0]}, ${ed.fallbackColors[1]} 46%, ${ed.fallbackColors[2]})`,
                        },
                      })
                    : (0, a.jsx)("canvas", {
                        ref: Z,
                        className:
                          "pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2",
                        style: es,
                      })),
                (k[62] = es),
                (k[63] = ed),
                (k[64] = D))
              : (D = k[64]),
            k[65] !== ec || k[66] !== N || k[67] !== en || k[68] !== D
              ? ((A = (0, a.jsx)("div", { ref: en, className: ec, "data-avatar-overlay-placement": N, children: D })),
                (k[65] = ec),
                (k[66] = N),
                (k[67] = en),
                (k[68] = D),
                (k[69] = A))
              : (A = k[69]),
            k[70] !== C || k[71] !== A
              ? ((S = (0, a.jsx)("div", {
                  "aria-hidden": "true",
                  className: C,
                  "data-avatar-mascot": "true",
                  "data-chromatic": "ignore",
                  "data-realtime-voice-orb": !0,
                  "data-testid": "avatar-overlay-voice-orb",
                  children: A,
                })),
                (k[70] = C),
                (k[71] = A),
                (k[72] = S))
              : (S = k[72]),
            S
          )
        },
      },
    )
  },
  IlRO(e, t, o) {
    var a = o("nBOj")
    let n = [a.l.blue, a.l.blue, a.l.green, a.l.yellow, a.l.pink, a.l.orange, a.l.purple, a.l.black],
      i = new Map()
    function c(e) {
      return n[e] ?? a.l.blue
    }
    o.d(
      t,
      {},
      {
        P: c,
        V: function (e) {
          let t,
            o,
            a,
            n,
            d,
            s,
            r,
            l = c(e),
            m = i.get(l)
          if (null != m) return m
          let u =
            ((t = getComputedStyle(document.documentElement)
              .getPropertyValue(l.slice(4, -1))
              .trim()
              .replace(/^#([\da-f])([\da-f])([\da-f])$/i, "#$1$1$2$2$3$3")),
            (a = (o = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16))).map((e) => e / 255)),
            (d = (n = o.every((e) => 0 === e) ? [0.08, 0.08, 0.08] : a).map((e) => Math.max(0, e + 0.9465623 - 1))),
            (s = n.map((e) => {
              let t = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)
              return e + 0.79764306 * (t - e)
            })),
            (r = n.map((e) => 1 - (1 - e) * (1 - 0.63704175))),
            {
              accentColor: [...a, 1],
              fallbackColors: [
                `rgb(${d.map((e) => 255 * e).join(" ")})`,
                `rgb(${s.map((e) => 255 * e).join(" ")} / 98%)`,
                `rgb(${r.map((e) => 255 * e).join(" ")} / 98%)`,
              ],
            })
          return (i.set(l, u), u)
        },
      },
    )
  },
  f81T(e, t, o) {
    o.d(
      t,
      {},
      {
        F9: function (e, t) {
          return { x: e.left + e.width / 2 - (t.left + t.width / 2), y: e.top + e.height / 2 - (t.top + t.height / 2) }
        },
        NS: function (e, t) {
          return {
            centerX: t.screenX + e.left + e.width / 2,
            centerY: t.screenY + e.top + e.height / 2,
            height: e.height,
            width: e.width,
          }
        },
        Pz: function (e, t, o, a) {
          let n = (e.centerX - t.centerX) / o,
            i = (e.centerY - t.centerY) / o,
            c = Math.hypot(n, i),
            d = c > a ? a / c : 1
          return { x: n * d, y: i * d }
        },
        SP: function (e, t, o) {
          let a = (0.055 * e.x) / t,
            n = (0.055 * e.y) / t,
            i = Math.hypot(a, n),
            c = i > o ? o / i : 1
          return { x: a * c, y: n * c }
        },
      },
    )
  },
  PIwo(e, t, o) {
    var a = o("QosV"),
      n = o("qmMi"),
      i = o("tl5a"),
      c = o("B81s"),
      d = o("OWtl"),
      s = o("hZax"),
      r = o("OMIV"),
      l = o("jBHQ"),
      m = o("kx7U")
    let u = "1042620455",
      p = "4114442250",
      g = (0, n.un)(d.u, ({ get: e }) => {
        let t = e(i.Dc),
          { data: o } = e(c.I2, t)
        return x(o?.config, e(r.JW, p))
      })
    function x(e, t) {
      if (!0 === e?.["features.remote_connections"]) return !0
      let o = e?.features
      return null == o || "object" != typeof o || Array.isArray(o)
        ? t
        : Object.getOwnPropertyDescriptor(o, "remote_connections")?.value === !0 || t
    }
    function f(e) {
      return e.autoConnect ? [e.hostId] : []
    }
    ;((0, n.un)(d.u, ({ get: e }) => {
      let { data: t } = e(c.I2, e(i.Dc), { enabled: !1 })
      return x(t?.config, e(l.P, p))
    }),
      o.d(
        t,
        {},
        {
          Ik: function () {
            return (0, n.Ul)(g)
          },
          bc: g,
          i2: u,
          mC: function () {
            return (0, s.Zj)(u)
          },
          mw: function () {
            let e,
              t,
              o = (0, a.c)(5),
              i = (0, n.Ul)(m.u8) ?? []
            return (
              o[0] !== i ? ((e = new Set(i.flatMap(f))), (o[0] = i), (o[1] = e)) : (e = o[1]),
              o[2] !== i || o[3] !== e
                ? ((t = { remoteConnections: i, enabledRemoteHostIdSet: e }), (o[2] = i), (o[3] = e), (o[4] = t))
                : (t = o[4]),
              t
            )
          },
        },
      ))
  },
  oFmV(e, t, o) {
    let a = (0, o("zd8w").createContext)(null)
    o.d(t, {}, { S: a })
  },
  fSCS(e, t, o) {
    var a = o("AGyq"),
      n = o("qmMi"),
      i = o("DBCl"),
      c = o("Qgfj"),
      d = o("eFn4"),
      s = o("l2C7"),
      r = o("xYqX")
    o("g2p6")
    var l = o("n5iL"),
      m = o("WVWQ"),
      u = o("svjy"),
      p = o("OWtl"),
      g = o("RxZZ"),
      x = o("OMIV"),
      f = o("jBHQ")
    let h = (0, c.YK)({
        createMini: { id: "settings.mini.pets.create.accessibleLabel", defaultMessage: "Create pet" },
        customFolder: { id: "settings.pets.custom.title", defaultMessage: "Custom pets" },
        size: { id: "settings.pets.size", defaultMessage: "Pet size" },
        pick: { id: "settings.pets.pickPet.title", defaultMessage: "Pick a pet" },
        collection: { id: "settings.mini.pets.title", defaultMessage: "My pets" },
        options: { id: "settings.chatGpt.personalization.pet.options", defaultMessage: "Pet options" },
        create: { id: "settings.chatGpt.personalization.pet.create", defaultMessage: "Create a pet with ChatGPT" },
        visibility: { id: "settings.pets.visibility", defaultMessage: "Visibility" },
        onDemand: { id: "settings.pets.visibility.onDemand", defaultMessage: "On demand" },
        alwaysVisible: { id: "settings.pets.visibility.alwaysVisible", defaultMessage: "Always visible" },
      }),
      M = {
        createMini: { section: "pets", id: "pets-create-mini", title: h.createMini },
        customFolder: { section: "pets", id: "pets-custom-folder", title: h.customFolder },
        size: { section: "pets", id: "pets-size", title: h.size },
        pick: { section: "pets", id: "pets-pick", title: h.pick },
        collection: { section: "pets", id: "pets-collection", title: h.collection },
        options: { section: "pets", id: "pets-options", title: h.options },
        create: { section: "pets", id: "pets-create", title: h.create },
        visibility: {
          section: "pets",
          id: "pets-visibility",
          title: h.visibility,
          options: [h.onDemand, h.alwaysVisible],
        },
      },
      v = (0, n.un)(p.u, ({ get: e }) => e(x.JW, "1532120159")),
      b = (0, n.un)(p.u, ({ get: e }) => !e(x.RS) && e(x.JW, "2635985366")),
      w = (0, n.un)(p.u, ({ get: e }) => {
        let t = e(d.lN)
        return "allowed" === t.status || ("denied" === t.status && "free-plan" === t.reason)
      }),
      y = (0, n.un)(p.u, ({ get: e }) => {
        let t = (0, a.hF)("openAvatarOverlay"),
          o = e(l.nH)
        if (null == o || null == t || !(0, a.AK)(t)) return null
        let { title: n } = (0, m.j)(t, e(u.g), void 0, !0)
        return {
          command: t,
          keymapState: o,
          entry: { section: "pets", id: "pets-mini-shortcut", title: { localizedText: n } },
        }
      }),
      T = (0, n.un)(p.u, ({ get: e }) => {
        if (!e(f.P, "1532120159"))
          return [
            M.pick,
            M.size,
            r.d,
            ...(e(s.IB, { enabled: !1 }).data?.avatarDirectory == null ? [] : [M.customFolder]),
          ]
        let t = [M.collection, M.createMini],
          o = e(y)
        return (
          null != o && t.push(o.entry),
          !e(x.RS) && e(f.P, "2635985366") && t.push(M.visibility),
          (0, g.CN)(e, i.kWF.petVisible) && t.push(M.size),
          t
        )
      })
    o.d(t, {}, { Bc: M, Bp: v, HQ: h, fA: T, iI: y, lp: b, q: w })
  },
  GPkB(e, t, o) {
    o.d(t, { PetsSettingsRoute: () => e1 })
    var a = o("ABep"),
      n = o("qmMi"),
      i = o("fSCS"),
      c = o("QosV"),
      d = o("oyxz"),
      s = o("sLlu"),
      r = o("iRMi"),
      l = o("slpy"),
      m = o("RVZl"),
      u = o("Wf1j"),
      p = o("FPUb"),
      g = o("on57"),
      x = o("PPl1"),
      f = o("SqlE")
    function h(e) {
      let t,
        o,
        n,
        i,
        d = (0, c.c)(13),
        { avatar: s, className: r, size: l, source: m } = e,
        u = void 0 === l ? "md" : l,
        h = "sm" === u ? "size-8" : "size-16"
      d[0] !== r || d[1] !== h
        ? ((t = (0, g.A)("flex shrink-0 items-center justify-center overflow-hidden rounded-lg", h, r)),
          (d[0] = r),
          (d[1] = h),
          (d[2] = t))
        : (t = d[2])
      let M = s?.id ?? "default",
        v = "sm" === u ? "scale-[0.42]" : "scale-75"
      return (
        d[3] !== s || d[4] !== m
          ? ((o = m ?? (null == s ? { assetRef: "codex" } : (0, f.aN)(s))), (d[3] = s), (d[4] = m), (d[5] = o))
          : (o = d[5]),
        d[6] !== v || d[7] !== o
          ? ((n = (0, a.jsx)(p.bH, { assetMap: x.A, className: v, source: o })), (d[6] = v), (d[7] = o), (d[8] = n))
          : (n = d[8]),
        d[9] !== t || d[10] !== M || d[11] !== n
          ? ((i = (0, a.jsx)("div", { className: t, "data-avatar-id": M, children: n })),
            (d[9] = t),
            (d[10] = M),
            (d[11] = n),
            (d[12] = i))
          : (i = d[12]),
        i
      )
    }
    var M = o("cFUD"),
      v = o("QLtS"),
      b = o("xYqX"),
      w = o("Sm6l"),
      y = o("HOLv"),
      T = o("TL6G"),
      C = o("yGJW"),
      D = o("pO0d"),
      A = o("BSnr"),
      S = o("I7Ou"),
      k = o("AWNZ"),
      j = o("ZEx5"),
      P = o("hZax"),
      O = o("dYlv"),
      R = o("V4iM"),
      E = o("UxN3"),
      _ = o("SGsN"),
      N = o("Igf5"),
      I = o("TTww"),
      B = o("OWtl")
    function F(e) {
      let t,
        o,
        s,
        r,
        l,
        m,
        p,
        g = (0, c.c)(16),
        { avatarDirectory: x } = e,
        f = (0, n.gh)(B.u),
        h = (0, u.A)()
      g[0] !== h || g[1] !== f
        ? ((t = () => {
            f.get(_.Id).danger(
              h.formatMessage({
                id: "settings.pets.custom.openFolderError",
                defaultMessage: "Unable to open pet folder",
              }),
              { errorAnalytics: { toastId: "settings.pets.custom.openFolderError" } },
            )
          }),
          (g[0] = h),
          (g[1] = f),
          (g[2] = t))
        : (t = g[2])
      let M = t
      return (
        g[3] !== x
          ? ((o = (0, a.jsx)("span", { className: "font-mono [text-wrap:wrap] break-all", children: x })),
            (g[3] = x),
            (g[4] = o))
          : (o = g[4]),
        g[5] !== x || g[6] !== f || g[7] !== M
          ? ((s = () => {
              f.get(N.K).mutate(
                { path: x, cwd: null, target: "fileManager", openMode: "workspace" },
                {
                  onSuccess: (e) => {
                    e.success || M()
                  },
                  onError: M,
                },
              )
            }),
            (g[5] = x),
            (g[6] = f),
            (g[7] = M),
            (g[8] = s))
          : (s = g[8]),
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(d.A, { id: "settings.pets.custom.openFolder", defaultMessage: "Open folder" })),
            (l = (0, a.jsx)(E.bF, { "aria-hidden": !1, legacyIcon: I.A, asset16: R.J, legacyClassName: "icon-2xs" })),
            (g[9] = r),
            (g[10] = l))
          : ((r = g[9]), (l = g[10])),
        g[11] !== s
          ? ((m = (0, a.jsxs)(w.$, { color: "ghost", onClick: s, size: "toolbar", children: [r, l] })),
            (g[11] = s),
            (g[12] = m))
          : (m = g[12]),
        g[13] !== o || g[14] !== m
          ? ((p = (0, a.jsx)(D.GC, { entry: i.Bc.customFolder, description: o, control: m })),
            (g[13] = o),
            (g[14] = m),
            (g[15] = p))
          : (p = g[15]),
        p
      )
    }
    var L = o("DBCl"),
      V = o("HrOd"),
      W = o("yC2B"),
      z = o("RxZZ")
    function U(e) {
      let t,
        o,
        s,
        r,
        l,
        m,
        p = (0, c.c)(16),
        { showReset: g } = e,
        x = void 0 !== g && g,
        f = (0, n.gh)(B.u),
        h = (0, z.iK)(L.kWF.petSize),
        M = "rtl" === (0, W.b)((0, u.A)().locale) ? "left" : "right",
        v = ((h - 80) / 144) * 100
      p[0] !== f
        ? ((t = (e) => {
            ;(0, z.gc)(f, L.kWF.petSize, e)
          }),
          (p[0] = f),
          (p[1] = t))
        : (t = p[1])
      let b = t
      p[2] !== b ? ((o = (e) => b(Number(e.currentTarget.value))), (p[2] = b), (p[3] = o)) : (o = p[3])
      let y = `linear-gradient(to ${M}, var(--color-accent) ${v}%, var(--color-border-subtle) ${v}%)`
      ;(p[4] !== y ? ((s = { background: y }), (p[4] = y), (p[5] = s)) : (s = p[5]),
        p[6] !== h || p[7] !== o || p[8] !== s
          ? ((r = (0, a.jsx)("input", {
              id: "pet-size",
              className:
                "h-0.5 w-40 cursor-interaction appearance-none rounded-full [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:cursor-interaction [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-strong [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:cursor-interaction [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-strong [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger",
              max: 224,
              min: 80,
              onInput: o,
              style: s,
              type: "range",
              value: h,
            })),
            (p[6] = h),
            (p[7] = o),
            (p[8] = s),
            (p[9] = r))
          : (r = p[9]))
      let T = r
      return (
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(d.A, {
              id: "settings.pets.size.description",
              defaultMessage: "Adjust the size of your pet",
            })),
            (p[10] = l))
          : (l = p[10]),
        p[11] !== h || p[12] !== b || p[13] !== x || p[14] !== T
          ? ((m = (0, a.jsx)(D.GC, {
              entry: i.Bc.size,
              renderLabel: G,
              description: l,
              control: x
                ? (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [
                      T,
                      (0, a.jsx)(w.$, {
                        type: "button",
                        color: "ghost",
                        size: "toolbar",
                        disabled: h === L.kWF.petSize.default,
                        onClick: () => b(L.kWF.petSize.default),
                        children: (0, a.jsx)(d.A, { id: "settings.pets.size.reset", defaultMessage: "Reset" }),
                      }),
                    ],
                  })
                : T,
            })),
            (p[11] = h),
            (p[12] = b),
            (p[13] = x),
            (p[14] = T),
            (p[15] = m))
          : (m = p[15]),
        m
      )
    }
    function G(e) {
      return (0, a.jsx)("label", { htmlFor: "pet-size", children: e })
    }
    function q(e) {
      let t,
        o = (0, c.c)(9),
        {
          avatarDirectory: n,
          avatarOptions: i,
          isCreatingCustomAvatar: d,
          isCustomAvatarLoadError: s,
          isLoadingCustomAvatars: r,
          onCreateCustomAvatar: l,
          onRefreshCustomAvatars: m,
          onUpgradeCustomAvatar: u,
        } = e,
        p = void 0 === i ? f.B4 : i,
        g = void 0 !== d && d,
        x = void 0 !== s && s,
        h = void 0 !== r && r
      return (
        o[0] !== n || o[1] !== p || o[2] !== g || o[3] !== x || o[4] !== h || o[5] !== l || o[6] !== m || o[7] !== u
          ? ((t = (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)($, {
                avatarDirectory: n,
                avatarOptions: p,
                isCreatingCustomAvatar: g,
                isCustomAvatarLoadError: x,
                isLoadingCustomAvatars: h,
                onCreateCustomAvatar: l,
                onRefreshCustomAvatars: m,
                onUpgradeCustomAvatar: u,
              }),
            })),
            (o[0] = n),
            (o[1] = p),
            (o[2] = g),
            (o[3] = x),
            (o[4] = h),
            (o[5] = l),
            (o[6] = m),
            (o[7] = u),
            (o[8] = t))
          : (t = o[8]),
        t
      )
    }
    function $(e) {
      let t,
        o,
        s,
        p,
        g,
        x,
        f,
        h,
        R,
        E,
        _,
        N,
        I,
        B,
        L = (0, c.c)(85),
        {
          avatarDirectory: V,
          avatarOptions: W,
          isCreatingCustomAvatar: z,
          isCustomAvatarLoadError: G,
          isLoadingCustomAvatars: q,
          onCreateCustomAvatar: $,
          onRefreshCustomAvatars: Q,
          onUpgradeCustomAvatar: X,
        } = e,
        Z = (0, u.A)(),
        J = (0, n.Ul)(v.k),
        ee = (0, P.Zj)("188145323"),
        et = (0, n.Ul)(C.YV),
        { selectedAvatar: eo, setSelectedAvatarId: ea } = (0, O.WU)(W)
      if (
        L[0] !== W ||
        L[1] !== J ||
        L[2] !== Z ||
        L[3] !== z ||
        L[4] !== ee ||
        L[5] !== G ||
        L[6] !== q ||
        L[7] !== $ ||
        L[8] !== Q ||
        L[9] !== X ||
        L[10] !== et ||
        L[11] !== eo ||
        L[12] !== ea
      ) {
        let e,
          n,
          c,
          u,
          h,
          v,
          C,
          P,
          O,
          R,
          E,
          _,
          N,
          I,
          B = W.filter(Y),
          F = W.filter(H)
        L[20] !== Z ? ((e = Z.formatMessage(b.d.title)), (L[20] = Z), (L[21] = e)) : (e = L[21])
        let V = e
        L[22] !== Z
          ? ((n = Z.formatMessage({ id: "settings.pets.refresh", defaultMessage: "Refresh" })),
            (L[22] = Z),
            (L[23] = n))
          : (n = L[23])
        let U = n
        L[24] !== et
          ? ((c = (e, t) => {
              et.logProductEvent(
                r.CodexAvatarOverlayEvent,
                (0, M.y)({
                  action: e,
                  selectedAvatar: t,
                  source: r.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
                }),
              )
            }),
            (L[24] = et),
            (L[25] = c))
          : (c = L[25])
        let en = c
        L[26] !== ea || L[27] !== en
          ? ((u = (e) => {
              ;(ea(e.id), en(r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e))
            }),
            (L[26] = ea),
            (L[27] = en),
            (L[28] = u))
          : (u = L[28])
        let ei = u
        ;((s = A.X),
          L[29] !== Q || L[30] !== U
            ? ((h = Q
                ? (0, a.jsx)(l.m, {
                    content: U,
                    children: (0, a.jsx)(w.$, {
                      "aria-label": U,
                      color: "ghost",
                      onClick: Q,
                      size: "icon",
                      children: (0, a.jsx)(y.I, { "aria-hidden": !1, asset: m.S }),
                    }),
                  })
                : null),
              (L[29] = Q),
              (L[30] = U),
              (L[31] = h))
            : (h = L[31]),
          L[32] !== V || L[33] !== z || L[34] !== $ || L[35] !== eo || L[36] !== en
            ? ((v = $
                ? (0, a.jsx)(D.ek, {
                    entry: b.d,
                    children: (0, a.jsx)(w.$, {
                      "aria-label": V,
                      color: "secondary",
                      loading: z,
                      onClick: () => {
                        ;(en(r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, eo), $())
                      },
                      size: "toolbar",
                      children: (0, a.jsx)(d.A, { id: "settings.pets.custom.create.title", defaultMessage: "Create" }),
                    }),
                  })
                : null),
              (L[32] = V),
              (L[33] = z),
              (L[34] = $),
              (L[35] = eo),
              (L[36] = en),
              (L[37] = v))
            : (v = L[37]),
          L[38] !== J || L[39] !== eo || L[40] !== en
            ? ((C = () => {
                ;(en(
                  J
                    ? r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                    : r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
                  eo,
                ),
                  T.O1.dispatchMessage("avatar-overlay-open", {}))
              }),
              (L[38] = J),
              (L[39] = eo),
              (L[40] = en),
              (L[41] = C))
            : (C = L[41]),
          L[42] !== J
            ? ((P = J
                ? (0, a.jsx)(d.A, { id: "settings.personalization.mini.tuckAway", defaultMessage: "Tuck Away Mini" })
                : (0, a.jsx)(d.A, { id: "settings.personalization.mini.wake", defaultMessage: "Wake Mini" })),
              (L[42] = J),
              (L[43] = P))
            : (P = L[43]),
          L[44] !== C || L[45] !== P
            ? ((O = (0, a.jsx)(w.$, { color: "secondary", onClick: C, size: "toolbar", children: P })),
              (L[44] = C),
              (L[45] = P),
              (L[46] = O))
            : (O = L[46]),
          L[47] !== v || L[48] !== O || L[49] !== h
            ? ((R = (0, a.jsxs)(a.Fragment, { children: [h, v, O] })),
              (L[47] = v),
              (L[48] = O),
              (L[49] = h),
              (L[50] = R))
            : (R = L[50]),
          L[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (0, a.jsx)(D.ek, { entry: i.Bc.pick, children: (0, a.jsx)(D.Ct, { title: i.Bc.pick.title }) })),
              (_ = (0, a.jsx)(d.A, {
                id: "settings.pets.pickPet.miniDescription",
                defaultMessage: "Mini manages chats and surfaces what needs attention",
              })),
              (L[51] = E),
              (L[52] = _))
            : ((E = L[51]), (_ = L[52])),
          L[53] !== R
            ? ((f = (0, a.jsx)(A.X.Header, { actions: R, title: E, subtitle: _ })), (L[53] = R), (L[54] = f))
            : (f = L[54]),
          (o = A.X.Content),
          (t = j.t),
          L[55] !== G || L[56] !== q
            ? ((p = q
                ? (0, a.jsx)(S.u, {
                    children: (0, a.jsx)(d.A, {
                      id: "settings.pets.loadingCustom",
                      defaultMessage: "Loading custom pets\u2026",
                    }),
                  })
                : G
                  ? (0, a.jsx)(k.ic, {
                      label: (0, a.jsx)(d.A, {
                        id: "settings.pets.loadCustomError",
                        defaultMessage: "Unable to load custom pets",
                      }),
                      control: null,
                    })
                  : null),
              (L[55] = G),
              (L[56] = q),
              (L[57] = p))
            : (p = L[57]),
          L[58] !== ee || L[59] !== X || L[60] !== ei || L[61] !== eo
            ? ((N = (e) =>
                (0, a.jsx)(
                  K,
                  { avatar: e, isSelected: e.id === eo.id, onSelectAvatar: ei, onUpgradeAvatar: ee ? X : void 0 },
                  e.id,
                )),
              (L[58] = ee),
              (L[59] = X),
              (L[60] = ei),
              (L[61] = eo),
              (L[62] = N))
            : (N = L[62]),
          (g = F.map(N)),
          L[63] !== ei || L[64] !== eo
            ? ((I = (e) => (0, a.jsx)(K, { avatar: e, isSelected: e.id === eo.id, onSelectAvatar: ei }, e.id)),
              (L[63] = ei),
              (L[64] = eo),
              (L[65] = I))
            : (I = L[65]),
          (x = B.map(I)),
          (L[0] = W),
          (L[1] = J),
          (L[2] = Z),
          (L[3] = z),
          (L[4] = ee),
          (L[5] = G),
          (L[6] = q),
          (L[7] = $),
          (L[8] = Q),
          (L[9] = X),
          (L[10] = et),
          (L[11] = eo),
          (L[12] = ea),
          (L[13] = t),
          (L[14] = o),
          (L[15] = s),
          (L[16] = p),
          (L[17] = g),
          (L[18] = x),
          (L[19] = f))
      } else ((t = L[13]), (o = L[14]), (s = L[15]), (p = L[16]), (g = L[17]), (x = L[18]), (f = L[19]))
      return (
        L[66] !== V
          ? ((h = null != V ? (0, a.jsx)(F, { avatarDirectory: V }) : null), (L[66] = V), (L[67] = h))
          : (h = L[67]),
        L[68] !== t || L[69] !== p || L[70] !== g || L[71] !== x || L[72] !== h
          ? ((R = (0, a.jsxs)(t, { children: [p, g, x, h] })),
            (L[68] = t),
            (L[69] = p),
            (L[70] = g),
            (L[71] = x),
            (L[72] = h),
            (L[73] = R))
          : (R = L[73]),
        L[74] !== o || L[75] !== R
          ? ((E = (0, a.jsx)(o, { children: R })), (L[74] = o), (L[75] = R), (L[76] = E))
          : (E = L[76]),
        L[77] !== s || L[78] !== f || L[79] !== E
          ? ((_ = (0, a.jsxs)(s, { children: [f, E] })), (L[77] = s), (L[78] = f), (L[79] = E), (L[80] = _))
          : (_ = L[80]),
        L[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)(A.X.Header, {
              title: (0, a.jsx)(d.A, { id: "settings.pets.appearance.title", defaultMessage: "Appearance" }),
            })),
            (L[81] = N))
          : (N = L[81]),
        L[82] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, a.jsxs)(A.X, {
              children: [N, (0, a.jsx)(A.X.Content, { children: (0, a.jsx)(j.t, { children: (0, a.jsx)(U, {}) }) })],
            })),
            (L[82] = I))
          : (I = L[82]),
        L[83] !== _ ? ((B = (0, a.jsxs)(a.Fragment, { children: [_, I] })), (L[83] = _), (L[84] = B)) : (B = L[84]),
        B
      )
    }
    function H(e) {
      return (0, f.SV)(e.id)
    }
    function Y(e) {
      return !(0, f.SV)(e.id)
    }
    function K(e) {
      let t,
        o,
        n,
        i,
        s,
        r,
        m = (0, c.c)(22),
        { avatar: p, isSelected: g, onSelectAvatar: x, onUpgradeAvatar: f } = e,
        M = (0, u.A)(),
        v = p.upgradeDirectoryPath
      m[0] !== p.displayName || m[1] !== M
        ? ((t = M.formatMessage(
            { id: "settings.pets.custom.update.accessibleLabel", defaultMessage: "Update {petName}" },
            { petName: p.displayName },
          )),
          (m[0] = p.displayName),
          (m[1] = M),
          (m[2] = t))
        : (t = m[2])
      let b = t
      return (
        m[3] !== p ? ((o = (0, a.jsx)(h, { avatar: p })), (m[3] = p), (m[4] = o)) : (o = m[4]),
        m[5] !== p.displayName || m[6] !== f || m[7] !== b || m[8] !== v
          ? ((n =
              null != v && null != f
                ? (0, a.jsx)(l.m, {
                    content: b,
                    children: (0, a.jsx)(w.$, {
                      "aria-label": b,
                      color: "accent",
                      onClick: () => {
                        f(p.displayName, v)
                      },
                      size: "toolbar",
                      children: (0, a.jsx)(d.A, { id: "settings.pets.custom.update", defaultMessage: "Update" }),
                    }),
                  })
                : null),
            (m[5] = p.displayName),
            (m[6] = f),
            (m[7] = b),
            (m[8] = v),
            (m[9] = n))
          : (n = m[9]),
        m[10] !== p || m[11] !== g || m[12] !== x
          ? ((i = g
              ? (0, a.jsx)(w.$, {
                  color: "secondary",
                  disabled: !0,
                  size: "toolbar",
                  children: (0, a.jsx)(d.A, {
                    id: "settings.personalization.avatars.selected",
                    defaultMessage: "Selected",
                  }),
                })
              : (0, a.jsx)(w.$, {
                  color: "secondary",
                  size: "toolbar",
                  onClick: () => {
                    x(p)
                  },
                  children: (0, a.jsx)(d.A, {
                    id: "settings.personalization.avatars.select",
                    defaultMessage: "Select",
                  }),
                })),
            (m[10] = p),
            (m[11] = g),
            (m[12] = x),
            (m[13] = i))
          : (i = m[13]),
        m[14] !== n || m[15] !== i
          ? ((s = (0, a.jsxs)(a.Fragment, { children: [n, i] })), (m[14] = n), (m[15] = i), (m[16] = s))
          : (s = m[16]),
        m[17] !== p.description || m[18] !== p.displayName || m[19] !== o || m[20] !== s
          ? ((r = (0, a.jsx)(k.ic, { icon: o, label: p.displayName, description: p.description, control: s })),
            (m[17] = p.description),
            (m[18] = p.displayName),
            (m[19] = o),
            (m[20] = s),
            (m[21] = r))
          : (r = m[21]),
        r
      )
    }
    var Q = o("gKJK"),
      X = o("KPGh"),
      Z = o("l2C7"),
      J = o("zyWr"),
      ee = o("Haiv"),
      et = o("zd8w"),
      eo = o("OiCI"),
      ea = o("Q8aV"),
      en = o("SaEY"),
      ei = o("a0aG"),
      ec = o("Yewb"),
      ed = o("ugfi"),
      es = o("EEop"),
      er = o("cLdu"),
      el = o("ueue"),
      em = o("qixt"),
      eu = o("kfGJ"),
      ep = o("UmGt"),
      eg = o("bPa2"),
      ex = o("OMIV"),
      ef = o("WFY2"),
      eh = o("Dgwo"),
      eM = o("MX6A"),
      ev = o("wEQY"),
      eb = o("H7Ld"),
      ew = o("t4SC"),
      ey = o("hbRe")
    let eT = "hatch-pet"
    async function eC({ scope: e, forceReloadSkills: t, skillStatsigOverride: o }) {
      let a = await (0, ew.kL)({
        forceReinstall: !0,
        hostId: eu.fI,
        installRoot: null,
        repoPath: "skills/.curated/hatch-pet",
        skillId: eT,
        skillStatsigOverride: o,
        source: "bundled",
      })
      if (!a.success || null == a.destination) throw Error(a.error ?? "Unable to install Hatch Pet")
      let n = (0, ev.U)(a.destination, "SKILL.md"),
        { effectiveEnabled: i } = await (0, eh.V)(e, eu.fI).sendRequest("skills/config/write", { enabled: !0, path: n })
      if (!i) throw Error("Hatch Pet is disabled")
      return (await t(), (0, ey.Gc)({ name: eT, path: n }))
    }
    function eD(e) {
      let { marketplaceName: t, plugin: o } = e
      return o.installed && "work-pets" === o.name && (t === L.IY7 || t === L.xiH)
    }
    function eA(e) {
      let t,
        o,
        n = (0, c.c)(6)
      n[0] !== e ? ((t = void 0 === e ? {} : e), (n[0] = e), (n[1] = t)) : (t = n[1])
      let { collectionSection: i, onCreateStart: d, onCreateCloudPet: s } = t,
        r = void 0 === i ? q : i
      return (
        n[2] !== r || n[3] !== s || n[4] !== d
          ? ((o = (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(eS, { CollectionSection: r, onCreateStart: d, onCreateCloudPet: s }),
            })),
            (n[2] = r),
            (n[3] = s),
            (n[4] = d),
            (n[5] = o))
          : (o = n[5]),
        o
      )
    }
    function eS(e) {
      let t,
        o,
        i,
        r,
        l,
        m = (0, c.c)(22),
        { CollectionSection: u, onCreateStart: p, onCreateCloudPet: g } = e,
        { avatarDirectory: x, avatarOptions: f, isError: h, isLoading: M } = (0, J.F)()
      m[0] !== g ? ((t = { onCreateCloudPet: g }), (m[0] = g), (m[1] = t)) : (t = m[1])
      let {
          createPet: v,
          isCloudPetCreationEnabled: b,
          isCreatingPet: w,
          upgradePet: y,
        } = (function (e) {
          let t,
            o,
            i,
            s,
            r,
            l,
            m,
            u = (0, c.c)(27)
          u[0] !== e ? ((t = void 0 === e ? {} : e), (u[0] = e), (u[1] = t)) : (t = u[1])
          let { onCreateCloudPet: p } = t,
            g = (0, n.gh)(B.u),
            [x, f] = (0, et.useState)(!1),
            h = (0, n._U)(ex.JW, "1655510532"),
            M = null == p ? eu.fI : L.iwv,
            { installPlugin: v } = (0, ec.XY)()
          u[2] !== M ? ((o = { hostId: M }), (u[2] = M), (u[3] = o)) : (o = u[3])
          let { setPluginEnabled: b } = (0, ed.zQ)(o),
            w = (0, ea.p8)(),
            { forceReload: y } = (0, eg.a)(void 0, eu.fI)
          u[4] !== y
            ? ((i = async () => {
                await y()
              }),
              (u[4] = y),
              (u[5] = i))
            : (i = u[5])
          let T = i
          u[6] !== g
            ? ((s = () => {
                g.get(_.Id).danger(
                  (0, a.jsx)(d.A, {
                    id: "settings.pets.createCustom.error",
                    defaultMessage: "Unable to start pet creation",
                  }),
                  { errorAnalytics: { toastId: "settings.pets.createCustom.error" } },
                )
              }),
              (u[6] = g),
              (u[7] = s))
            : (s = u[7])
          let C = s
          u[8] !== T ||
          u[9] !== v ||
          u[10] !== h ||
          u[11] !== p ||
          u[12] !== M ||
          u[13] !== g ||
          u[14] !== b ||
          u[15] !== C ||
          u[16] !== w
            ? ((r = async () => {
                ;(f(!0),
                  await (async () => {
                    try {
                      let e = null == p ? null : g.get(eo.tT)
                      if (null != p && null == e) return void C()
                      let t = h
                          ? (
                              await g.queryClient.fetchQuery({
                                ...g.query.getOptions(er.qF, { accountId: e, hostId: M, roots: [] }),
                                staleTime: 0,
                                retry: !1,
                              })
                            ).find(eD)
                          : void 0,
                        o = h
                          ? (t ??
                            (0, el.qA)(
                              await g.queryClient.fetchQuery({
                                ...g.query.getOptions(es.Pc, {
                                  hostId: M,
                                  marketplacePath: null,
                                  pluginName: "plugin_connector_1p_bccf6c8660c08191ae4470d9ae4877fa",
                                  remoteMarketplaceName: L.xiH,
                                }),
                                staleTime: 0,
                                retry: !1,
                              }),
                            ))
                          : void 0
                      if (null != o && (0, en.Ei)(o.plugin)) return void C()
                      let a = await (async function (e) {
                        return "pluginId" in e
                          ? (0, eb.KH)({
                              defaultPrompt:
                                "Use your create-pet skill to create and select a pet based on what you know about me",
                              pluginDisplayName: e.pluginDisplayName,
                              pluginId: e.pluginId,
                            })
                          : `${await eC(e)} create a pet based on what you know about me`
                      })(
                        null == o
                          ? { scope: g, forceReloadSkills: T, skillStatsigOverride: await (0, ep.Uu)(g, "hatch-pet") }
                          : { pluginDisplayName: (0, ee.V)(o), pluginId: o.plugin.id },
                      )
                      if (null != p && g.get(eo.tT) !== e) return
                      if ((null == p && (await (0, em.aK)(g, em._e)), null != o && !o.plugin.installed)) {
                        v(o, {
                          hostId: M,
                          hostedAccountId: e ?? void 0,
                          marketplaceAnalytics: ei.F.settings,
                          postInstallComposerPrefill: null == p ? a : void 0,
                          postInstallNewConversation: null == p ? { activeProject: null } : void 0,
                          onSuccess: null == p ? void 0 : () => p(a),
                        }) || C()
                        return
                      }
                      if (
                        (null == o ||
                          o.plugin.enabled ||
                          (await b({
                            enabled: !0,
                            plugin: o.plugin,
                            pluginDisplayName: (0, ee.V)(o),
                            pluginId: o.plugin.id,
                          })),
                        null != p)
                      ) {
                        if (g.get(eo.tT) !== e) return
                        p(a)
                      } else
                        w({ activeProject: null, prefillComposerMode: null == o ? "local" : void 0, prefillPrompt: a })
                    } catch (e) {
                      ;(ef.v.warning("[pets] Unable to start pet creation", {
                        safe: { cloudPetCreationEnabled: h },
                        sensitive: { error: e },
                      }),
                        C())
                    }
                  })().finally(() => {
                    f(!1)
                  }))
              }),
              (u[8] = T),
              (u[9] = v),
              (u[10] = h),
              (u[11] = p),
              (u[12] = M),
              (u[13] = g),
              (u[14] = b),
              (u[15] = C),
              (u[16] = w),
              (u[17] = r))
            : (r = u[17])
          let D = r
          u[18] !== T || u[19] !== g || u[20] !== w
            ? ((l = async (e, t) => {
                try {
                  w({
                    prefillPrompt: await (async function ({
                      scope: e,
                      forceReloadSkills: t,
                      petDirectoryPath: o,
                      petName: a,
                      skillStatsigOverride: n,
                    }) {
                      return `${await eC({ scope: e, forceReloadSkills: t, skillStatsigOverride: n })} upgrade the existing pet at ${(0, eM.xR)(a.replaceAll(/[\r\n]+/g, " "), o)} to the latest pet version with looking directions`
                    })({
                      scope: g,
                      forceReloadSkills: T,
                      petDirectoryPath: t,
                      petName: e,
                      skillStatsigOverride: await (0, ep.Uu)(g, "hatch-pet"),
                    }),
                  })
                } catch {
                  g.get(_.Id).danger(
                    (0, a.jsx)(d.A, {
                      id: "settings.pets.upgradeCustom.error",
                      defaultMessage: "Unable to start pet upgrade",
                    }),
                    { errorAnalytics: { toastId: "settings.pets.upgradeCustom.error" } },
                  )
                }
              }),
              (u[18] = T),
              (u[19] = g),
              (u[20] = w),
              (u[21] = l))
            : (l = u[21])
          let A = l
          return (
            u[22] !== D || u[23] !== h || u[24] !== x || u[25] !== A
              ? ((m = { createPet: D, isCloudPetCreationEnabled: h, isCreatingPet: x, upgradePet: A }),
                (u[22] = D),
                (u[23] = h),
                (u[24] = x),
                (u[25] = A),
                (u[26] = m))
              : (m = u[26]),
            m
          )
        })(t),
        T = (0, s.B)(),
        C = b ? null : x
      return (
        m[2] !== v || m[3] !== b || m[4] !== g || m[5] !== p
          ? ((o =
              null == g || b
                ? () => {
                    ;(p?.(), v())
                  }
                : void 0),
            (m[2] = v),
            (m[3] = b),
            (m[4] = g),
            (m[5] = p),
            (m[6] = o))
          : (o = m[6]),
        m[7] !== T
          ? ((i = () => {
              ;(T(Z.uO), T(X.m7), T(Q.wY))
            }),
            (m[7] = T),
            (m[8] = i))
          : (i = m[8]),
        m[9] !== b || m[10] !== y
          ? ((r = b
              ? void 0
              : (e, t) => {
                  y(e, t)
                }),
            (m[9] = b),
            (m[10] = y),
            (m[11] = r))
          : (r = m[11]),
        m[12] !== u ||
        m[13] !== f ||
        m[14] !== w ||
        m[15] !== h ||
        m[16] !== M ||
        m[17] !== C ||
        m[18] !== o ||
        m[19] !== i ||
        m[20] !== r
          ? ((l = (0, a.jsx)(u, {
              avatarDirectory: C,
              avatarOptions: f,
              isCreatingCustomAvatar: w,
              isCustomAvatarLoadError: h,
              isLoadingCustomAvatars: M,
              onCreateCustomAvatar: o,
              onRefreshCustomAvatars: i,
              onUpgradeCustomAvatar: r,
            })),
            (m[12] = u),
            (m[13] = f),
            (m[14] = w),
            (m[15] = h),
            (m[16] = M),
            (m[17] = C),
            (m[18] = o),
            (m[19] = i),
            (m[20] = r),
            (m[21] = l))
          : (l = m[21]),
        l
      )
    }
    var ek = o("jxU8"),
      ej = o("QyE3")
    function eP() {
      let e,
        t = (0, c.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(ek.P, {
              overview: (0, a.jsx)(d.A, {
                id: "settings.overview.pets",
                defaultMessage: "Choose a pet to accompany you in the app",
              }),
              title: (0, a.jsx)(ej.s, { slug: "pets" }),
              children: (0, a.jsx)(eA, {}),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var eO = o("irkb"),
      eR = o("xSOA"),
      eE = o("hV6B"),
      e_ = o("bVeK"),
      eN = o("K4Cx"),
      eI = o("Ywss"),
      eB = o("Dh3m"),
      eF = o("xJjI"),
      eL = o("olXw"),
      eV = o("JNtf"),
      eW = o("mUDD"),
      ez = o("eGPX")
    function eU(e) {
      let t,
        o,
        s,
        r,
        l,
        m,
        u,
        p,
        g,
        x,
        h,
        M,
        v,
        b,
        y,
        T,
        C,
        D,
        S,
        k,
        P,
        O = (0, c.c)(51),
        { selectedAvatar: R } = e,
        E = (0, z.iK)(L.kWF.petSize),
        _ = (0, n.Ul)(ez.x),
        [N, I] = (0, et.useState)(!1),
        B = (0, eI.zy)(),
        F = (0, eI.Zp)(),
        W = B.hash === `#${i.Bc.size.id}`,
        G = N || W,
        q = E / V.Mc,
        $ = q + 40,
        H = (G ? 224 / V.Mc : q) + 40,
        Y = (384 - E) / 2
      O[0] !== q || O[1] !== E || O[2] !== Y
        ? ((t = { height: q, left: Y, top: 0, width: E }), (O[0] = q), (O[1] = E), (O[2] = Y), (O[3] = t))
        : (t = O[3])
      let K = t
      ;(O[4] !== $
        ? ((o = { height: $, left: 0, top: 0, width: 384 }),
          (s = { height: $, width: 384 }),
          (O[4] = $),
          (O[5] = o),
          (O[6] = s))
        : ((o = O[5]), (s = O[6])),
        O[7] !== K || O[8] !== o || O[9] !== s
          ? ((r = { mascot: K, placement: "bottom-end", tray: null, visibleBounds: o, viewport: s }),
            (O[7] = K),
            (O[8] = o),
            (O[9] = s),
            (O[10] = r))
          : (r = O[10]))
      let Q = r
      O[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, a.jsx)(w.$, {
            className: "absolute right-4 bottom-4",
            color: "outline",
            size: "toolbar",
            children: (0, a.jsx)(d.A, { id: "settings.pets.preview.customize", defaultMessage: "Customize" }),
          })),
          (O[11] = l))
        : (l = O[11])
      let X = l
      return (
        O[12] !== H ? ((m = { height: H }), (O[12] = H), (O[13] = m)) : (m = O[13]),
        O[14] !== _ ? ((u = _ ? { duration: 0 } : eB.iN), (O[14] = _), (O[15] = u)) : (u = O[15]),
        O[16] !== $ ? ((p = { height: $ }), (O[16] = $), (O[17] = p)) : (p = O[17]),
        O[18] !== R ? ((g = (0, f.aN)(R)), (O[18] = R), (O[19] = g)) : (g = O[19]),
        O[20] !== E ? ((x = (0, V.cv)(E)), (O[20] = E), (O[21] = x)) : (x = O[21]),
        O[22] !== g || O[23] !== x
          ? ((h = (0, a.jsx)(eF.r, { className: "pointer-events-none", source: g, state: "idle", style: x })),
            (O[22] = g),
            (O[23] = x),
            (O[24] = h))
          : (h = O[24]),
        O[25] !== K || O[26] !== h
          ? ((M = (0, a.jsx)("div", { className: "absolute", style: K, children: h })),
            (O[25] = K),
            (O[26] = h),
            (O[27] = M))
          : (M = O[27]),
        O[28] !== Q || O[29] !== M
          ? ((v = (0, a.jsx)(eL.l, {
              areActivityPillsVisible: !0,
              canStartVoice: !0,
              draft: "",
              hasNotifications: !0,
              isExpanded: !1,
              isVoiceSelected: !1,
              layout: Q,
              petAccessory: M,
            })),
            (O[28] = Q),
            (O[29] = M),
            (O[30] = v))
          : (v = O[30]),
        O[31] !== v || O[32] !== p
          ? ((b = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: "pointer-events-none relative w-96 max-w-full select-none",
              inert: !0,
              style: p,
              children: v,
            })),
            (O[31] = v),
            (O[32] = p),
            (O[33] = b))
          : (b = O[33]),
        O[34] !== b || O[35] !== m || O[36] !== u
          ? ((y = (0, a.jsx)(eN.P.div, {
              animate: m,
              className: "flex items-center justify-center",
              initial: !1,
              transition: u,
              children: b,
            })),
            (O[34] = b),
            (O[35] = m),
            (O[36] = u),
            (O[37] = y))
          : (y = O[37]),
        O[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = { "aria-describedby": void 0 }), (O[38] = T))
          : (T = O[38]),
        O[39] !== B || O[40] !== F || O[41] !== W
          ? ((C = (e) => {
              ;(I(e), !e && W && F({ ...B, hash: "" }, { replace: !0, state: B.state, preventScrollReset: !0 }))
            }),
            (O[39] = B),
            (O[40] = F),
            (O[41] = W),
            (O[42] = C))
          : (C = O[42]),
        O[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, a.jsx)(eW.OO, {
              children: (0, a.jsx)(eW.c7, {
                className: "pe-8",
                title: (0, a.jsx)(eV.L3, {
                  children: (0, a.jsx)(d.A, {
                    id: "settings.pets.preview.customize.title",
                    defaultMessage: "Customize pet",
                  }),
                }),
              }),
            })),
            (O[43] = D))
          : (D = O[43]),
        O[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsxs)(eW.R4, {
              className: "select-none",
              children: [D, (0, a.jsx)(eW.OO, { children: (0, a.jsx)(U, { showReset: !0 }) })],
            })),
            (O[44] = S))
          : (S = O[44]),
        O[45] !== G || O[46] !== C
          ? ((k = (0, a.jsx)(eV.lG, {
              contentProps: T,
              open: G,
              onOpenChange: C,
              size: "compact",
              triggerContent: X,
              children: S,
            })),
            (O[45] = G),
            (O[46] = C),
            (O[47] = k))
          : (k = O[47]),
        O[48] !== y || O[49] !== k
          ? ((P = (0, a.jsx)(A.X, {
              className: "select-none",
              children: (0, a.jsx)(A.X.Content, {
                children: (0, a.jsx)(j.t, {
                  children: (0, a.jsxs)("div", { className: "relative p-6", children: [y, k] }),
                }),
              }),
            })),
            (O[48] = y),
            (O[49] = k),
            (O[50] = P))
          : (P = O[50]),
        P
      )
    }
    function eG(e) {
      let t,
        o = (0, c.c)(8),
        {
          avatarOptions: n,
          isCreatingCustomAvatar: i,
          isCustomAvatarLoadError: d,
          isLoadingCustomAvatars: s,
          onCreateCustomAvatar: r,
          onRefreshCustomAvatars: l,
          onUpgradeCustomAvatar: m,
        } = e,
        u = void 0 === n ? f.B4 : n,
        p = void 0 !== i && i,
        g = void 0 !== d && d,
        x = void 0 !== s && s
      return (
        o[0] !== u || o[1] !== p || o[2] !== g || o[3] !== x || o[4] !== r || o[5] !== l || o[6] !== m
          ? ((t = (0, a.jsx)(a.Fragment, {
              children: (0, a.jsx)(eq, {
                avatarOptions: u,
                isCreatingCustomAvatar: p,
                isCustomAvatarLoadError: g,
                isLoadingCustomAvatars: x,
                onCreateCustomAvatar: r,
                onRefreshCustomAvatars: l,
                onUpgradeCustomAvatar: m,
              }),
            })),
            (o[0] = u),
            (o[1] = p),
            (o[2] = g),
            (o[3] = x),
            (o[4] = r),
            (o[5] = l),
            (o[6] = m),
            (o[7] = t))
          : (t = o[7]),
        t
      )
    }
    function eq(e) {
      let t,
        o,
        s,
        p,
        g,
        x,
        f,
        h,
        v,
        b,
        T,
        j,
        R,
        E,
        _,
        N,
        I,
        F = (0, c.c)(62),
        {
          avatarOptions: V,
          isCreatingCustomAvatar: W,
          isCustomAvatarLoadError: U,
          isLoadingCustomAvatars: G,
          onCreateCustomAvatar: q,
          onRefreshCustomAvatars: $,
          onUpgradeCustomAvatar: H,
        } = e,
        Y = (0, n.gh)(B.u),
        K = (0, u.A)(),
        Q = (0, P.Zj)("188145323"),
        X = (0, n.Ul)(C.YV),
        Z = (0, z.iK)(L.kWF.petVisible),
        { selectedAvatar: J, setSelectedAvatarId: ee } = (0, O.WU)(V)
      F[0] !== K ? ((t = K.formatMessage(i.Bc.createMini.title)), (F[0] = K), (F[1] = t)) : (t = F[1])
      let et = t
      F[2] !== K
        ? ((o = K.formatMessage({ id: "settings.pets.refresh", defaultMessage: "Refresh" })), (F[2] = K), (F[3] = o))
        : (o = F[3])
      let eo = o
      F[4] !== X
        ? ((s = (e, t) => {
            X.logProductEvent(
              r.CodexAvatarOverlayEvent,
              (0, M.y)({
                action: e,
                selectedAvatar: t,
                source: r.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
              }),
            )
          }),
          (F[4] = X),
          (F[5] = s))
        : (s = F[5])
      let ea = s
      F[6] !== Z || F[7] !== Y || F[8] !== J || F[9] !== ee || F[10] !== ea
        ? ((p = (e) => {
            ;(Z && e.id === J.id) ||
              (ee(e.id),
              Z || (0, z.gc)(Y, L.kWF.petVisible, !0),
              ea(r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e))
          }),
          (F[6] = Z),
          (F[7] = Y),
          (F[8] = J),
          (F[9] = ee),
          (F[10] = ea),
          (F[11] = p))
        : (p = F[11])
      let en = p
      F[12] !== Z || F[13] !== Y
        ? ((g = () => {
            Z && (0, z.gc)(Y, L.kWF.petVisible, !1)
          }),
          (F[12] = Z),
          (F[13] = Y),
          (F[14] = g))
        : (g = F[14])
      let ei = g
      ;(F[15] !== Z || F[16] !== J
        ? ((x = Z ? (0, a.jsx)(eU, { selectedAvatar: J }) : null), (F[15] = Z), (F[16] = J), (F[17] = x))
        : (x = F[17]),
        F[18] !== $ || F[19] !== eo
          ? ((f = $
              ? (0, a.jsx)(l.m, {
                  content: eo,
                  children: (0, a.jsx)(w.$, {
                    "aria-label": eo,
                    color: "ghost",
                    onClick: $,
                    size: "icon",
                    children: (0, a.jsx)(y.I, { "aria-hidden": !1, asset: m.S }),
                  }),
                })
              : null),
            (F[18] = $),
            (F[19] = eo),
            (F[20] = f))
          : (f = F[20]),
        F[21] !== et || F[22] !== W || F[23] !== q || F[24] !== J || F[25] !== ea
          ? ((h = q
              ? (0, a.jsx)(D.ek, {
                  entry: i.Bc.createMini,
                  children: (0, a.jsx)(w.$, {
                    "aria-label": et,
                    color: "secondary",
                    loading: W,
                    onClick: () => {
                      ;(ea(r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED, J), q())
                    },
                    size: "toolbar",
                    children: (0, a.jsx)(d.A, { id: "settings.mini.pets.create.title", defaultMessage: "Create pet" }),
                  }),
                })
              : null),
            (F[21] = et),
            (F[22] = W),
            (F[23] = q),
            (F[24] = J),
            (F[25] = ea),
            (F[26] = h))
          : (h = F[26]),
        F[27] !== f || F[28] !== h
          ? ((v = (0, a.jsxs)(a.Fragment, { children: [f, h] })), (F[27] = f), (F[28] = h), (F[29] = v))
          : (v = F[29]),
        F[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)(D.ek, {
              entry: i.Bc.collection,
              children: (0, a.jsx)(D.Ct, { title: i.Bc.collection.title }),
            })),
            (F[30] = b))
          : (b = F[30]),
        F[31] !== v ? ((T = (0, a.jsx)(A.X.Header, { actions: v, title: b })), (F[31] = v), (F[32] = T)) : (T = F[32]))
      let ec = !Z
      if (
        (F[33] !== ei || F[34] !== ec
          ? ((j = (0, a.jsx)(e$, { isSelected: ec, onSelect: ei })), (F[33] = ei), (F[34] = ec), (F[35] = j))
          : (j = F[35]),
        F[36] !== U || F[37] !== G
          ? ((R = G
              ? (0, a.jsx)("div", {
                  className: "col-span-full",
                  children: (0, a.jsx)(S.u, {
                    children: (0, a.jsx)(d.A, {
                      id: "settings.pets.loadingCustom",
                      defaultMessage: "Loading custom pets\u2026",
                    }),
                  }),
                })
              : U
                ? (0, a.jsx)(k.ic, {
                    className: "col-span-full",
                    label: (0, a.jsx)(d.A, {
                      id: "settings.pets.loadCustomError",
                      defaultMessage: "Unable to load custom pets",
                    }),
                    control: null,
                  })
                : null),
            (F[36] = U),
            (F[37] = G),
            (F[38] = R))
          : (R = F[38]),
        F[39] !== V || F[40] !== Q || F[41] !== Z || F[42] !== H || F[43] !== en || F[44] !== J)
      ) {
        let e
        ;(F[46] !== Q || F[47] !== Z || F[48] !== H || F[49] !== en || F[50] !== J
          ? ((e = (e) =>
              (0, a.jsx)(
                eH,
                { avatar: e, isSelected: Z && e.id === J.id, onSelectAvatar: en, onUpgradeAvatar: Q ? H : void 0 },
                e.id,
              )),
            (F[46] = Q),
            (F[47] = Z),
            (F[48] = H),
            (F[49] = en),
            (F[50] = J),
            (F[51] = e))
          : (e = F[51]),
          (E = V.map(e)),
          (F[39] = V),
          (F[40] = Q),
          (F[41] = Z),
          (F[42] = H),
          (F[43] = en),
          (F[44] = J),
          (F[45] = E))
      } else E = F[45]
      return (
        F[52] !== j || F[53] !== R || F[54] !== E
          ? ((_ = (0, a.jsx)(A.X.Content, {
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: [j, R, E],
              }),
            })),
            (F[52] = j),
            (F[53] = R),
            (F[54] = E),
            (F[55] = _))
          : (_ = F[55]),
        F[56] !== T || F[57] !== _
          ? ((N = (0, a.jsx)("fieldset", {
              className: "m-0 min-w-0 border-0 p-0",
              children: (0, a.jsxs)(A.X, { children: [T, _] }),
            })),
            (F[56] = T),
            (F[57] = _),
            (F[58] = N))
          : (N = F[58]),
        F[59] !== N || F[60] !== x
          ? ((I = (0, a.jsxs)(a.Fragment, { children: [x, N] })), (F[59] = N), (F[60] = x), (F[61] = I))
          : (I = F[61]),
        I
      )
    }
    function e$(e) {
      let t,
        o,
        n,
        i,
        s,
        r,
        l,
        m,
        u = (0, c.c)(10),
        { isSelected: p, onSelect: g } = e
      return (
        u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("span", {
              className: "flex flex-1 items-center justify-center",
              children: (0, a.jsx)(e_.AdZ, {}),
            })),
            (o = (0, a.jsx)("span", { className: "h-5 w-px bg-border" })),
            (u[0] = t),
            (u[1] = o))
          : ((t = u[0]), (o = u[1])),
        u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("span", {
              className: "flex flex-1 items-center justify-center",
              children: (0, a.jsx)(e_.ERJ, {}),
            })),
            (i = (0, a.jsx)("span", { className: "h-5 w-px bg-border" })),
            (u[2] = n),
            (u[3] = i))
          : ((n = u[2]), (i = u[3])),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: "pointer-events-none flex h-24 w-30 items-center",
              children: (0, a.jsxs)(eE.yl, {
                className: "flex items-center",
                nativeSurfaceId: "mini-tile-preview",
                variant: "quick-chat-voice",
                children: [
                  t,
                  o,
                  n,
                  i,
                  (0, a.jsx)("span", {
                    className: "flex flex-1 items-center justify-center",
                    children: (0, a.jsx)(e_.Hsq, {}),
                  }),
                ],
              }),
            })),
            (r = (0, a.jsx)(d.A, {
              id: "settings.mini.pets.barOnly.description",
              defaultMessage: "The lightweight Codex companion",
            })),
            (u[4] = s),
            (u[5] = r))
          : ((s = u[4]), (r = u[5])),
        u[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(d.A, { id: "settings.mini.pets.none.title", defaultMessage: "None" })), (u[6] = l))
          : (l = u[6]),
        u[7] !== p || u[8] !== g
          ? ((m = (0, a.jsx)(eY, { artwork: s, description: r, isSelected: p, label: l, onSelect: g })),
            (u[7] = p),
            (u[8] = g),
            (u[9] = m))
          : (m = u[9]),
        m
      )
    }
    function eH(e) {
      let t,
        o,
        n,
        i,
        s,
        r = (0, c.c)(20),
        { avatar: m, isSelected: p, onSelectAvatar: g, onUpgradeAvatar: x } = e,
        f = m.upgradeDirectoryPath,
        M = (0, u.A)()
      r[0] !== m.displayName || r[1] !== M
        ? ((t = M.formatMessage(
            { id: "settings.pets.custom.update.accessibleLabel", defaultMessage: "Update {petName}" },
            { petName: m.displayName },
          )),
          (r[0] = m.displayName),
          (r[1] = M),
          (r[2] = t))
        : (t = r[2])
      let v = t
      return (
        r[3] !== m.displayName || r[4] !== x || r[5] !== v || r[6] !== f
          ? ((o =
              null != f && null != x
                ? (0, a.jsx)(l.m, {
                    content: v,
                    children: (0, a.jsx)(w.$, {
                      "aria-label": v,
                      color: "accent",
                      onClick: () => {
                        x(m.displayName, f)
                      },
                      size: "toolbar",
                      children: (0, a.jsx)(d.A, { id: "settings.pets.custom.update", defaultMessage: "Update" }),
                    }),
                  })
                : null),
            (r[3] = m.displayName),
            (r[4] = x),
            (r[5] = v),
            (r[6] = f),
            (r[7] = o))
          : (o = r[7]),
        r[8] !== m
          ? ((n = (0, a.jsx)(h, { className: "size-24 rounded-none", avatar: m })), (r[8] = m), (r[9] = n))
          : (n = r[9]),
        r[10] !== m || r[11] !== g
          ? ((i = () => {
              g(m)
            }),
            (r[10] = m),
            (r[11] = g),
            (r[12] = i))
          : (i = r[12]),
        r[13] !== m.description || r[14] !== m.displayName || r[15] !== p || r[16] !== o || r[17] !== n || r[18] !== i
          ? ((s = (0, a.jsx)(eY, {
              actions: o,
              artwork: n,
              description: m.description,
              isSelected: p,
              label: m.displayName,
              onSelect: i,
            })),
            (r[13] = m.description),
            (r[14] = m.displayName),
            (r[15] = p),
            (r[16] = o),
            (r[17] = n),
            (r[18] = i),
            (r[19] = s))
          : (s = r[19]),
        s
      )
    }
    function eY(e) {
      let t,
        o,
        n,
        i,
        d,
        s,
        r,
        l = (0, c.c)(20),
        { actions: m, artwork: u, description: p, isSelected: x, label: f, onSelect: h } = e,
        M = x ? "border-strong ring-1 ring-border-strong" : "border-default"
      return (
        l[0] !== M
          ? ((t = (0, g.A)(
              "relative flex min-h-56 flex-col items-center justify-center rounded-2xl border bg-surface text-center",
              M,
            )),
            (l[0] = M),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== f
          ? ((o = (0, a.jsx)("div", { className: "text-sm font-medium text-default", children: f })),
            (l[2] = f),
            (l[3] = o))
          : (o = l[3]),
        l[4] !== p
          ? ((n = (0, a.jsx)("div", { className: "text-sm text-secondary", children: p })), (l[4] = p), (l[5] = n))
          : (n = l[5]),
        l[6] !== o || l[7] !== n
          ? ((i = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [o, n] })),
            (l[6] = o),
            (l[7] = n),
            (l[8] = i))
          : (i = l[8]),
        l[9] !== u || l[10] !== x || l[11] !== h || l[12] !== i
          ? ((d = (0, a.jsxs)("button", {
              "aria-pressed": x,
              className:
                "flex size-full min-h-56 cursor-interaction flex-col items-center justify-center gap-3 rounded-2xl p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
              onClick: h,
              type: "button",
              children: [u, i],
            })),
            (l[9] = u),
            (l[10] = x),
            (l[11] = h),
            (l[12] = i),
            (l[13] = d))
          : (d = l[13]),
        l[14] !== m
          ? ((s = null == m ? null : (0, a.jsx)("div", { className: "absolute top-3 right-3", children: m })),
            (l[14] = m),
            (l[15] = s))
          : (s = l[15]),
        l[16] !== t || l[17] !== d || l[18] !== s
          ? ((r = (0, a.jsxs)("div", { className: t, children: [d, s] })),
            (l[16] = t),
            (l[17] = d),
            (l[18] = s),
            (l[19] = r))
          : (r = l[19]),
        r
      )
    }
    var eK = o("n5iL"),
      eQ = o("bqtn"),
      eX = o("tcqM")
    function eZ() {
      let e,
        t,
        o,
        s,
        r,
        l,
        m = (0, c.c)(11),
        u = (0, n.gh)(B.u),
        p = (0, n.Ul)(i.lp),
        g = (0, z.iK)(L.kWF.petVisibility),
        x = (0, n._U)(eK.X1, "openAvatarOverlay")
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(e0, {})),
            (t = (0, a.jsx)(eJ, {})),
            (o = (0, a.jsx)(ej.s, { slug: "pets" })),
            (m[0] = e),
            (m[1] = t),
            (m[2] = o))
          : ((e = m[0]), (t = m[1]), (o = m[2])),
        m[3] !== u || m[4] !== x || m[5] !== g || m[6] !== p
          ? ((s =
              p &&
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(j.t, {
                  children: (0, a.jsx)(D.GC, {
                    entry: i.Bc.visibility,
                    description: (0, a.jsx)(d.A, {
                      id: "settings.pets.visibility.description",
                      defaultMessage: "Choose whether your Mini stays on your desktop or appears on demand",
                    }),
                    control: (0, a.jsx)(eQ.Ab, {
                      align: "end",
                      triggerButton: (0, a.jsx)(ej.vg, {
                        children:
                          "on-demand" === g
                            ? (0, a.jsx)(d.A, { ...i.HQ.onDemand })
                            : (0, a.jsx)(d.A, { ...i.HQ.alwaysVisible }),
                      }),
                      children: (0, a.jsxs)(eQ.ms.RadioGroup, {
                        value: g,
                        onValueChange: (e) => {
                          let t = L.kWF.petVisibility.schema.parse(e)
                          ;(0, z.gc)(u, L.kWF.petVisibility, t).catch(() => {
                            u.get(_.Id).danger(
                              (0, a.jsx)(d.A, {
                                id: "settings.pets.visibility.saveError",
                                defaultMessage: "Could not save Mini visibility",
                              }),
                              { errorAnalytics: { toastId: "settings.pets.visibility.saveError" } },
                            )
                          })
                        },
                        children: [
                          (0, a.jsx)(eQ.ms.RadioItem, {
                            value: "always-visible",
                            children: (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)(d.A, { ...i.HQ.alwaysVisible }),
                                (0, a.jsx)("div", {
                                  className: "text-sm text-secondary",
                                  children: (0, a.jsx)(d.A, {
                                    id: "settings.pets.visibility.alwaysVisible.description",
                                    defaultMessage: "Keep your Mini on your desktop",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(eQ.ms.RadioItem, {
                            value: "on-demand",
                            children: (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)(d.A, { ...i.HQ.onDemand }),
                                (0, a.jsx)("div", {
                                  className: "text-sm text-secondary",
                                  children:
                                    null == x
                                      ? (0, a.jsx)(d.A, {
                                          id: "settings.pets.visibility.onDemand.descriptionWithoutShortcut",
                                          defaultMessage: "Show from the menu. Hide when you click away.",
                                        })
                                      : (0, a.jsx)(d.A, {
                                          id: "settings.pets.visibility.onDemand.descriptionWithShortcut",
                                          defaultMessage: "Show with {shortcut}. Hide when you click away.",
                                          values: { shortcut: x },
                                        }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              })),
            (m[3] = u),
            (m[4] = x),
            (m[5] = g),
            (m[6] = p),
            (m[7] = s))
          : (s = m[7]),
        m[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(eA, { collectionSection: eG })), (m[8] = r))
          : (r = m[8]),
        m[9] !== s
          ? ((l = (0, a.jsxs)(ek.P, { action: e, subtitle: t, title: o, children: [s, r] })), (m[9] = s), (m[10] = l))
          : (l = m[10]),
        l
      )
    }
    function eJ() {
      let e,
        t,
        o,
        r,
        l = (0, c.c)(16),
        m = (0, n._U)(eK.X1, "openAvatarOverlay"),
        u = (0, n.Ul)(i.iI),
        p = (0, eO.jE)(),
        g = (0, s.B)()
      l[0] !== g || l[1] !== p
        ? ((e = {
            mutationFn: eK.Ld,
            networkMode: "always",
            onSuccess: (e) => {
              ;(p.setQueryData(eK.pj, e), g(eK.pj))
            },
          }),
          (l[0] = g),
          (l[1] = p),
          (l[2] = e))
        : (e = l[2])
      let x = (0, eR.n)(e)
      if (null == u) {
        let e
        return (
          l[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.mini.descriptionWithoutShortcut",
                defaultMessage: "Pets give you quick access to ChatGPT",
              })),
              (l[3] = e))
            : (e = l[3]),
          e
        )
      }
      let { command: f, keymapState: h, entry: M } = u
      ;(l[4] !== f.id || l[5] !== x
        ? ((t = async (e) => {
            await x.mutateAsync({ commandId: f.id, update: e })
          }),
          (l[4] = f.id),
          (l[5] = x),
          (l[6] = t))
        : (t = l[6]),
        l[7] !== f || l[8] !== M || l[9] !== h || l[10] !== x.isPending || l[11] !== t
          ? ((o = (0, a.jsx)(eX.P, {
              command: f,
              presentation: "chatgpt",
              description: "",
              inline: !0,
              isPending: x.isPending,
              keymapState: h,
              searchEntry: M,
              onUpdate: t,
            })),
            (l[7] = f),
            (l[8] = M),
            (l[9] = h),
            (l[10] = x.isPending),
            (l[11] = t),
            (l[12] = o))
          : (o = l[12]))
      let v = o
      return (
        l[13] !== m || l[14] !== v
          ? ((r =
              null == m
                ? (0, a.jsx)(d.A, {
                    id: "settings.mini.descriptionWithUnassignedShortcutEditor",
                    defaultMessage: "Set a shortcut to show and focus your pet: <shortcut></shortcut>",
                    values: { shortcut: () => v },
                  })
                : (0, a.jsx)(d.A, {
                    id: "settings.mini.descriptionWithShortcutEditor",
                    defaultMessage: "Show and focus your pet by pressing <shortcut></shortcut>",
                    values: { shortcut: () => v },
                  })),
            (l[13] = m),
            (l[14] = v),
            (l[15] = r))
          : (r = l[15]),
        r
      )
    }
    function e0() {
      let e,
        t,
        o,
        i = (0, c.c)(8),
        s = (0, n.gh)(B.u),
        l = (0, n.Ul)(v.k)
      return (
        i[0] !== l || i[1] !== s
          ? ((e = () => {
              ;(s
                .get(C.YV)
                .logProductEvent(
                  r.CodexAvatarOverlayEvent,
                  (0, M.y)({
                    action: l
                      ? r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                      : r.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
                    selectedAvatar: { id: (0, z.CN)(s.get, L.kWF.selectedAvatarId) ?? f.B4["0"].id },
                    source: r.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
                  }),
                ),
                T.O1.dispatchMessage("avatar-overlay-open", {}))
            }),
            (i[0] = l),
            (i[1] = s),
            (i[2] = e))
          : (e = i[2]),
        i[3] !== l
          ? ((t = l
              ? (0, a.jsx)(d.A, { id: "settings.mini.hide", defaultMessage: "Hide mini" })
              : (0, a.jsx)(d.A, { id: "settings.mini.show", defaultMessage: "Show mini" })),
            (i[3] = l),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== e || i[6] !== t
          ? ((o = (0, a.jsx)(w.$, { color: "secondary", onClick: e, size: "toolbar", children: t })),
            (i[5] = e),
            (i[6] = t),
            (i[7] = o))
          : (o = i[7]),
        o
      )
    }
    function e1() {
      return (0, n.Ul)(i.Bp) ? (0, a.jsx)(eZ, {}) : (0, a.jsx)(eP, {})
    }
  },
  pO0d(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("oyxz"),
      c = o("Wf1j"),
      d = o("AWNZ"),
      s = o("DDOY")
    function r(e) {
      let t,
        o = (0, n.c)(2),
        { title: c } = e
      return (
        o[0] !== c
          ? ((t =
              "localizedText" in c ? (0, a.jsx)(a.Fragment, { children: c.localizedText }) : (0, a.jsx)(i.A, { ...c })),
            (o[0] = c),
            (o[1] = t))
          : (t = o[1]),
        t
      )
    }
    o.d(
      t,
      {},
      {
        Ct: r,
        GC: function (e) {
          let t,
            o,
            c,
            s,
            l,
            m,
            u,
            p,
            g,
            x = (0, n.c)(19)
          x[0] !== e
            ? (({ entry: o, anchored: l, description: t, renderLabel: s, ...c } = e),
              (x[0] = e),
              (x[1] = t),
              (x[2] = o),
              (x[3] = c),
              (x[4] = s),
              (x[5] = l))
            : ((t = x[1]), (o = x[2]), (c = x[3]), (s = x[4]), (l = x[5]))
          let f = void 0 === l || l
          x[6] !== o.title ? ((m = (0, a.jsx)(r, { title: o.title })), (x[6] = o.title), (x[7] = m)) : (m = x[7])
          let h = m,
            M = f ? o.id : void 0
          return (
            x[8] !== h || x[9] !== s ? ((u = null == s ? h : s(h)), (x[8] = h), (x[9] = s), (x[10] = u)) : (u = x[10]),
            x[11] !== t || x[12] !== o.description
              ? ((p = null == o.description ? t : (0, a.jsx)(i.A, { ...o.description })),
                (x[11] = t),
                (x[12] = o.description),
                (x[13] = p))
              : (p = x[13]),
            x[14] !== c || x[15] !== M || x[16] !== u || x[17] !== p
              ? ((g = (0, a.jsx)(d.ic, { ...c, searchAnchor: M, label: u, description: p })),
                (x[14] = c),
                (x[15] = M),
                (x[16] = u),
                (x[17] = p),
                (x[18] = g))
              : (g = x[18]),
            g
          )
        },
        ek: function (e) {
          let t,
            o,
            i = (0, n.c)(12),
            { entry: d, anchored: r, className: l, children: m } = e,
            u = void 0 === r || r,
            p = (0, c.A)(),
            g = u ? d.id : void 0,
            x = u ? d.id : void 0,
            f = u ? -1 : void 0,
            h = u ? "group" : void 0
          return (
            i[0] !== u || i[1] !== d || i[2] !== p
              ? ((t = u ? (0, s.hz)(p, d.title) : void 0), (i[0] = u), (i[1] = d), (i[2] = p), (i[3] = t))
              : (t = i[3]),
            i[4] !== m || i[5] !== l || i[6] !== g || i[7] !== x || i[8] !== f || i[9] !== h || i[10] !== t
              ? ((o = (0, a.jsx)("div", {
                  id: g,
                  "data-settings-search-entry": x,
                  tabIndex: f,
                  role: h,
                  "aria-label": t,
                  className: l,
                  children: m,
                })),
                (i[4] = m),
                (i[5] = l),
                (i[6] = g),
                (i[7] = x),
                (i[8] = f),
                (i[9] = h),
                (i[10] = t),
                (i[11] = o))
              : (o = i[11]),
            o
          )
        },
        iu: function (e) {
          let t,
            o,
            i,
            c = (0, n.c)(6)
          return (
            c[0] !== e ? (({ action: t, ...o } = e), (c[0] = e), (c[1] = t), (c[2] = o)) : ((t = c[1]), (o = c[2])),
            c[3] !== t || c[4] !== o
              ? ((i = (0, a.jsx)(d.ic, { ...o, control: t })), (c[3] = t), (c[4] = o), (c[5] = i))
              : (i = c[5]),
            i
          )
        },
        kk: function (e) {
          let t,
            o,
            c,
            s,
            l,
            m,
            u,
            p = (0, n.c)(15)
          p[0] !== e
            ? (({ entry: o, anchored: s, description: t, ...c } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = o),
              (p[3] = c),
              (p[4] = s))
            : ((t = p[1]), (o = p[2]), (c = p[3]), (s = p[4]))
          let g = void 0 === s || s ? o.id : void 0
          return (
            p[5] !== o.title ? ((l = (0, a.jsx)(r, { title: o.title })), (p[5] = o.title), (p[6] = l)) : (l = p[6]),
            p[7] !== t || p[8] !== o.description
              ? ((m = null == o.description ? t : (0, a.jsx)(i.A, { ...o.description })),
                (p[7] = t),
                (p[8] = o.description),
                (p[9] = m))
              : (m = p[9]),
            p[10] !== c || p[11] !== g || p[12] !== l || p[13] !== m
              ? ((u = (0, a.jsx)(d.kG, { ...c, searchAnchor: g, label: l, description: m })),
                (p[10] = c),
                (p[11] = g),
                (p[12] = l),
                (p[13] = m),
                (p[14] = u))
              : (u = p[14]),
            u
          )
        },
      },
    )
  },
  BSnr(e, t, o) {
    o.d(t, { X: () => c })
    var a = o("ABep"),
      n = o("QosV"),
      i = o("on57")
    let c = Object.assign(
      function (e) {
        let t,
          o,
          c = (0, n.c)(6),
          { children: d, id: s, className: r } = e
        return (
          c[0] !== r ? ((t = (0, i.A)("flex flex-col", r)), (c[0] = r), (c[1] = t)) : (t = c[1]),
          c[2] !== d || c[3] !== s || c[4] !== t
            ? ((o = (0, a.jsx)("section", { id: s, className: t, children: d })),
              (c[2] = d),
              (c[3] = s),
              (c[4] = t),
              (c[5] = o))
            : (o = c[5]),
          o
        )
      },
      {
        Header: function (e) {
          let t,
            o,
            c,
            d,
            s,
            r,
            l,
            m = (0, n.c)(33),
            {
              title: u,
              subtitle: p,
              actions: g,
              actionsAlignment: x,
              className: f,
              size: h,
              showDivider: M,
              titleGap: v,
              spacing: b,
              subtitlePlacement: w,
              subtitleWrap: y,
            } = e,
            T = void 0 === h ? "default" : h,
            C = void 0 === b ? "default" : b,
            D = void 0 === w ? "below-title" : w,
            A = void 0 === y ? "balance" : y,
            S = null != u,
            k = null != p,
            j = null != g,
            P = "compact" === T
          m[0] !== P || m[1] !== p || m[2] !== D || m[3] !== A
            ? ((t = p
                ? (0, a.jsx)("div", {
                    className: (0, i.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === A ? "text-balance" : "text-wrap",
                      P ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === D && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (m[0] = P),
              (m[1] = p),
              (m[2] = D),
              (m[3] = A),
              (m[4] = t))
            : (t = m[4])
          let O = t
          if (!S && !k && !j) {
            let e
            return (
              m[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (m[5] = e))
                : (e = m[5]),
              e
            )
          }
          let R =
              S && (void 0 === M || M) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            E = "below-header" === D ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            _ = k && "compact" === C && "pb-2",
            N = k && "compact" !== C && "pb-3"
          m[6] !== f ||
          m[7] !== k ||
          m[8] !== P ||
          m[9] !== C ||
          m[10] !== _ ||
          m[11] !== N ||
          m[12] !== R ||
          m[13] !== E
            ? ((o = (0, i.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                R,
                E,
                _,
                N,
                !k && (0, i.A)("items-center pb-1.5", "compact" === C ? "min-h-8" : "min-h-toolbar"),
                k && P && "items-center",
                k && !P && "items-start",
                f,
              )),
              (m[6] = f),
              (m[7] = k),
              (m[8] = P),
              (m[9] = C),
              (m[10] = _),
              (m[11] = N),
              (m[12] = R),
              (m[13] = E),
              (m[14] = o))
            : (o = m[14])
          let I =
            "none" === (void 0 === v ? "default" : v)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(m[15] !== I ? ((c = (0, i.A)("flex min-w-0 flex-1 flex-col", I)), (m[15] = I), (m[16] = c)) : (c = m[16]),
            m[17] !== k || m[18] !== T || m[19] !== u
              ? ((d = u
                  ? (0, a.jsx)("div", {
                      className: (0, i.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === T && "text-sm leading-[18px]",
                        ("large" === T || ("default" === T && k)) && "text-lg",
                        ("base" === T || ("default" === T && !k)) && "text-base",
                      ),
                      children: u,
                    })
                  : null),
                (m[17] = k),
                (m[18] = T),
                (m[19] = u),
                (m[20] = d))
              : (d = m[20]))
          let B = "below-title" === D ? O : null
          ;(m[21] !== c || m[22] !== d || m[23] !== B
            ? ((s = (0, a.jsxs)("div", { className: c, children: [d, B] })),
              (m[21] = c),
              (m[22] = d),
              (m[23] = B),
              (m[24] = s))
            : (s = m[24]),
            m[25] !== g || m[26] !== x
              ? ((r = g
                  ? (0, a.jsx)("div", {
                      className: (0, i.A)("flex items-center gap-2", "end" === x && "self-end"),
                      children: g,
                    })
                  : null),
                (m[25] = g),
                (m[26] = x),
                (m[27] = r))
              : (r = m[27]))
          let F = "below-header" === D ? O : null
          return (
            m[28] !== o || m[29] !== s || m[30] !== r || m[31] !== F
              ? ((l = (0, a.jsxs)("div", { className: o, children: [s, r, F] })),
                (m[28] = o),
                (m[29] = s),
                (m[30] = r),
                (m[31] = F),
                (m[32] = l))
              : (l = m[32]),
            l
          )
        },
        Content: function (e) {
          let t,
            o,
            c = (0, n.c)(5),
            { children: d, className: s } = e
          return (
            c[0] !== s ? ((t = (0, i.A)("flex flex-col gap-1.5", s)), (c[0] = s), (c[1] = t)) : (t = c[1]),
            c[2] !== d || c[3] !== t
              ? ((o = (0, a.jsx)("div", { className: t, children: d })), (c[2] = d), (c[3] = t), (c[4] = o))
              : (o = c[4]),
            o
          )
        },
        Footer: function (e) {
          let t,
            o,
            c = (0, n.c)(6),
            { children: d, className: s, variant: r } = e,
            l =
              "action" === (void 0 === r ? "description" : r)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            c[0] !== s || c[1] !== l
              ? ((t = (0, i.A)("text-balance text-secondary", l, s)), (c[0] = s), (c[1] = l), (c[2] = t))
              : (t = c[2]),
            c[3] !== d || c[4] !== t
              ? ((o = (0, a.jsx)("div", { className: t, children: d })), (c[3] = d), (c[4] = t), (c[5] = o))
              : (o = c[5]),
            o
          )
        },
      },
    )
  },
  I7Ou(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("RNul"),
      c = o("AWNZ")
    o.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            o,
            d = (0, n.c)(3),
            { children: s } = e
          return (
            d[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(i.y, { className: "icon-xs shrink-0 text-secondary" })), (d[0] = t))
              : (t = d[0]),
            d[1] !== s
              ? ((o = (0, a.jsx)("div", {
                  role: "status",
                  children: (0, a.jsx)(c.ic, {
                    label: (0, a.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, a.jsx)("span", { className: "text-balance", children: s })],
                    }),
                    control: null,
                  }),
                })),
                (d[1] = s),
                (d[2] = o))
              : (o = d[2]),
            o
          )
        },
      },
    )
  },
  DDOY(e, t, o) {
    var a = o("Ywss"),
      n = o("iiZm")
    function i(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    o.d(
      t,
      {},
      {
        Xl: function (e, t, o) {
          let n = (0, a.Rr)(e),
            i = new URLSearchParams(n.search)
          for (let [e, t] of Object.entries(o ?? {})) i.set(e, t)
          return (0, a.AO)({ ...n, search: i.toString(), hash: t })
        },
        hz: i,
        s9: function (e, t, o) {
          let a = o.trim()
          return 0 === a.length
            ? []
            : e
                .flatMap((e) => {
                  let o = i(t, e.title),
                    c = (0, n.gr)(o, a),
                    d = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(a.toLocaleLowerCase(t.locale)),
                    s = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, n.gr)(i(t, e), a) > 0)
                  return 0 !== c || d || s
                    ? [
                        {
                          id: e.id,
                          label: o,
                          score: c,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: o, path: a, searchParams: n }) => ({
                  id: e,
                  label: t,
                  sectionSlug: o,
                  ...(null == a ? {} : { path: a }),
                  searchParams: n,
                }))
        },
      },
    )
  },
  Bwkw(e, t, o) {
    var a = o("QosV"),
      n = o("zd8w"),
      i = o("GaA7")
    o.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            o,
            c,
            d = (0, a.c)(12),
            { children: s, dictationKeys: r, allowsBareModifiers: l, onCapture: m, onCancel: u } = e,
            p = void 0 !== r && r,
            g = i.appServices?.shortcutCapture,
            [x, f] = (0, n.useState)(null == g),
            [h, M] = (0, n.useState)(!1),
            v = (0, n.useEffectEvent)(u),
            b = (0, n.useEffectEvent)(m)
          return (
            d[0] !== l || d[1] !== v || d[2] !== b || d[3] !== p
              ? ((t = () => {
                  let e
                  if (null == g) return
                  let t = !0
                  return (
                    (async () => {
                      try {
                        let o = await g.beginCapture()
                        if (!t) return void o?.[Symbol.dispose]()
                        if (null == o) return void v()
                        e = () => o[Symbol.dispose]()
                        let a = (l || p) && (await o.startBareModifierCapture(p ? "dictation-keys" : void 0))
                        if (!t) return
                        ;(M(a),
                          f(!0),
                          (async () => {
                            try {
                              for (; t;) {
                                let e = await o.nextShortcut()
                                if (!t) return
                                if (null == e) return void v()
                                b(e)
                              }
                            } catch {
                              t && v()
                            }
                          })(),
                          await o.waitForEnd(),
                          t && v())
                      } catch {
                        t && v()
                      }
                    })(),
                    () => {
                      ;((t = !1), e?.())
                    }
                  )
                }),
                (d[0] = l),
                (d[1] = v),
                (d[2] = b),
                (d[3] = p),
                (d[4] = t))
              : (t = d[4]),
            d[5] !== l || d[6] !== p ? ((o = [g, l, p]), (d[5] = l), (d[6] = p), (d[7] = o)) : (o = d[7]),
            (0, n.useEffect)(t, o),
            d[8] !== h || d[9] !== s || d[10] !== x
              ? ((c = x ? s(h) : null), (d[8] = h), (d[9] = s), (d[10] = x), (d[11] = c))
              : (c = d[11]),
            c
          )
        },
      },
    )
  },
  UmGt(e, t, o) {
    var a = o("ASxG"),
      n = o("OMIV")
    let i = a.YjP().refine((e) => e.trim().length > 0),
      c = a.Ikc({ skill_markdown_by_id: a.g1P(a.YjP(), a.L5J()).optional() }).catch({ skill_markdown_by_id: {} })
    o.d(
      t,
      {},
      {
        Uu: async function (e, t) {
          var o
          return (
            (o = (function (e) {
              let t = {}
              for (let [o, a] of Object.entries(c.parse(e).skill_markdown_by_id ?? {})) {
                let e = i.safeParse(a)
                e.success && (t[o] = e.data)
              }
              return t
            })(e.get(n.M9)?.getDynamicConfig("1852350085").value)),
            o[t]
          )
        },
      },
    )
  },
  t4SC(e, t, o) {
    var a = o("qmMi"),
      n = o("GaA7"),
      i = o("q77y"),
      c = o("OWtl"),
      d = o("rvFo")
    let s = ["recommendedSkills", "list"],
      r = (0, a.vU)(c.u, (e) => ({
        queryKey: [...s, e],
        enabled: n.appServices?.recommendedSkills != null,
        staleTime: d.D.FIVE_MINUTES,
        refetchOnMount: !0,
        queryFn: ({ signal: t }) => (0, i.P)(l().list({ hostId: e, refresh: !1 }), t),
      }))
    function l() {
      let e = n.appServices?.recommendedSkills
      if (null == e) throw Error("Recommended skills are not supported by this host")
      return e
    }
    o.d(
      t,
      {},
      {
        _R: function (e) {
          return (0, i.P)(l().remove(e))
        },
        ev: r,
        kL: function (e) {
          return (0, i.P)(l().install(e))
        },
        q_: function (e) {
          return (0, i.P)(l().list(e))
        },
        w5: s,
      },
    )
  },
}
//# sourceMappingURL=69751.3a13e513e3.js.map
