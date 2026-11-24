export const __rspack_esm_ids = [928366]
export const __webpack_modules__ = {
  dhtj(e, o, t) {
    var a = t("ABep")
    ;(t("zd8w"),
      (o.A = (e) =>
        (0, a.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("rect", {
              x: 3.75,
              y: 3.75,
              width: 16.5,
              height: 16.5,
              rx: 3,
              stroke: "currentColor",
              strokeWidth: 2,
            }),
            (0, a.jsx)("path", {
              d: "M8.5835 12.7043L12.0316 8.0023C12.3544 7.56216 13.0483 7.8838 12.9211 8.41456L12.4211 10.5H15.0133C15.4228 10.5 15.6587 10.9654 15.4165 11.2957L11.9684 15.9977C11.6456 16.4378 10.9517 16.1162 11.0789 15.5854L11.5789 13.5H8.9867C8.57715 13.5 8.34131 13.0346 8.5835 12.7043Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  WVWQ(e, o, t) {
    t.d(o, { j: () => w, I: () => T })
    var a = t("AGyq"),
      d = t("Qgfj"),
      c = t("CTWI")
    function n(e) {
      return { title: e.formatMessage(i.title), description: e.formatMessage(i.description) }
    }
    let i = (0, d.YK)({
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
    let l = (0, d.YK)({
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
    let g = (0, d.YK)({
        title: { id: "codex.command.importExternalAgent", defaultMessage: "Import from other AI apps" },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
        },
      }),
      p = (0, d.YK)({
        title: { id: "codex.command.personalitySettings", defaultMessage: "Personality" },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
        },
      }),
      x = (0, d.zR)({ id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" }),
      h = (0, d.YK)({
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
      f = { ...h, "codex.command.importExternalAgent": g.title, "codex.command.personalitySettings": p.title },
      M = (0, d.YK)({
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
        "codex.commandMenuTitle.toggleFileTreePanel": h["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
        },
      }),
      b = {
        ...(0, d.YK)({
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
        "codex.commandDescription.importExternalAgent": g.description,
        "codex.commandDescription.personalitySettings": p.description,
      }
    function T(e, o, t = !1) {
      if ("openOrbit" === e.id) return s(o).title
      if ("focusPageBlockControls" === e.id) return r(o).title
      if ("openAvatarOverlay" === e.id && t) return o.formatMessage(x)
      if ("composer.captureAppshot" === e.id) return n(o).title
      if ("titleIntlId" in e) {
        var a
        let t
        return y(f, e.titleIntlId)
          ? o.formatMessage(f[e.titleIntlId], { dot: "dot" })
          : null == (t = u((a = e.id)) ? m[a] : null)
            ? ""
            : o.formatMessage(t.title)
      }
      return o.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function w(e, o, t, d = !1) {
      var i
      let l
      if ("openOrbit" === e.id) return s(o)
      if ("focusPageBlockControls" === e.id) return r(o)
      if ("composer.captureAppshot" === e.id) return n(o)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            t?.title ??
            o.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
            }),
          description:
            t?.description ??
            o.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
            }),
        }
      let g = (0, a.yF)(e)
          ? y(b, e.descriptionIntlId)
            ? o.formatMessage(b[e.descriptionIntlId], { appName: c.C, dot: "dot" })
            : null == (l = u((i = e.id)) ? m[i] : null)
              ? ""
              : o.formatMessage(l.description)
          : "",
        p = t?.title ?? T(e, o)
      return ("openAvatarOverlay" === e.id && d && (p = T(e, o, !0)), { title: p, description: t?.description ?? g })
    }
    function y(e, o) {
      return Object.hasOwn(e, o)
    }
  },
  Jue3(e, o, t) {
    var a = t("qmMi"),
      d = t("ChYf"),
      c = t("wLMK"),
      n = t("OWtl")
    let i = (0, a.un)(n.u, ({ get: e }) => {
      let o = e(c.V).data?.platform
      return "linux" === o
        ? e(d.G, { name: "dictation.composer" }).isCapable || e(d.G, { name: "dictation.chatgpt" }).isCapable
          ? "app"
          : null
        : ("darwin" === o || "win32" === o) && e(d.G, { name: "dictation.global" }).isCapable
          ? "os-global"
          : null
    })
    t.d(o, {}, { i: i })
  },
  z4p1(e, o, t) {
    var a = t("AGyq")
    function d(
      e,
      {
        allowDebugMenu: o,
        fileLanguageFeaturesEnabled: t,
        isAutomationsEnabled: c,
        isDictationShortcutEnabled: n,
        isScreenshotSelectionEnabled: i,
        isPriorityFilterEnabled: s,
        isRealtimeVoiceCommandEnabled: r,
        isSpotlightEnabled: l,
        isSidebarCollapsible: m,
        modeSwitchAvailable: u,
      },
    ) {
      return (
        "composer.toggleDictation" === e ||
        ("toggleSidebar" === e
          ? m
          : "toggleDebugModal" === e
            ? !0 === o
            : (!!t ||
                ("file.goToDefinition" !== e &&
                  "file.findReferences" !== e &&
                  "file.navigateBack" !== e &&
                  "file.navigateForward" !== e)) &&
              ("screenshotToCurrentChat" === e || "screenshotToNewChat" === e
                ? i
                : "spotlightSearch" === e
                  ? l
                  : "manageTasks" === e
                    ? c
                    : "switchToMode1" === e || "switchToMode2" === e || "switchToMode3" === e
                      ? u
                      : "togglePriorityFilter" === e
                        ? s
                        : (0, a.NL)(e) || "notchVoice" === e
                          ? r
                          : ("globalDictationHold" !== e && "globalDictationSingleTap" !== e) || n))
      )
    }
    t.d(
      o,
      {},
      {
        I: function (
          e,
          {
            allowDebugMenu: o,
            browserEnabled: t,
            commandAccess: c,
            fileLanguageFeaturesEnabled: n,
            isAutomationsEnabled: i,
            isDictationShortcutEnabled: s,
            isScreenshotSelectionEnabled: r,
            isPriorityFilterEnabled: l,
            isRealtimeVoiceCommandEnabled: m,
            isSpotlightEnabled: u,
            isSidebarCollapsible: g,
            modeSwitchAvailable: p,
            platform: x,
          },
        ) {
          let h = (0, a.hF)(e)
          return (
            (null == h || !!(0, a.mg)(h, c)) &&
            !!d(e, {
              allowDebugMenu: o,
              fileLanguageFeaturesEnabled: n,
              isAutomationsEnabled: i,
              isDictationShortcutEnabled: s,
              isScreenshotSelectionEnabled: r,
              isPriorityFilterEnabled: l,
              isRealtimeVoiceCommandEnabled: m,
              isSpotlightEnabled: u,
              isSidebarCollapsible: g,
              modeSwitchAvailable: p,
            }) &&
            ("copyConversationPath" === e || "screenshotToCurrentChat" === e || "screenshotToNewChat" === e
              ? "macOS" === x
              : "hardReloadBrowserPage" === e || "newTab" === e || "reloadBrowserPage" === e
                ? t
                : "toggleTraceRecording" !== e)
          )
        },
        V: function (e, o) {
          return (
            "toggleNotch" !== e.id &&
            "notchVoice" !== e.id &&
            ("screenshotToCurrentChat" === e.id || "screenshotToNewChat" === e.id
              ? o.isScreenshotSelectionEnabled && !0 === o.desktopShortcuts && "macOS" === o.platform && (0, a.mg)(e, o)
              : "personalitySettings" !== e.id && !!(0, a.mg)(e, o) && ("toggleSidebar" === e.id || d(e.id, o)))
          )
        },
      },
    )
  },
  OvVq(e, o, t) {
    var a = t("AGyq")
    let d = ["newTask", "temporaryChat", "archiveThread", "newProjectlessTask", "openSideChat"]
    function c(e) {
      let o = d.indexOf(e)
      return -1 === o ? d.length : o
    }
    function n(e) {
      return "webview" !== e.kind || null == e.unifiedSearchGroupKey
        ? a.tU.length
        : a.tU.indexOf(e.unifiedSearchGroupKey)
    }
    t.d(
      o,
      {},
      {
        N: function (e, o) {
          let t = n(e) - n(o)
          if (0 !== t) return t
          let a = c(e.id) - c(o.id)
          return 0 !== a ? a : e.id.localeCompare(o.id)
        },
      },
    )
  },
  TP69(e, o, t) {
    var a = t("ABep"),
      d = t("QosV"),
      c = t("zd8w"),
      n = t("Wf1j"),
      i = t("okCa"),
      s = t("Bwkw")
    function r() {
      return null
    }
    t.d(
      o,
      {},
      {
        d: function (e) {
          let o,
            t,
            l,
            m,
            u,
            g,
            p,
            x,
            h,
            f,
            M = (0, d.c)(37),
            {
              autoFocus: b,
              ariaLabel: T,
              isSearchingByKeystrokes: w,
              placeholder: y,
              trailingContent: D,
              onCapture: v,
              onKeyDown: S,
              value: k,
              onValueChange: C,
            } = e,
            P = void 0 !== w && w,
            j = (0, c.useId)(),
            A = (0, n.A)(),
            B = (0, c.useRef)(null),
            [O, R] = (0, c.useState)(!1),
            N = (0, c.useRef)(P)
          ;(M[0] !== P
            ? ((o = () => {
                ;(N.current && !P && B.current?.focus(), (N.current = P))
              }),
              (t = [P]),
              (M[0] = P),
              (M[1] = o),
              (M[2] = t))
            : ((o = M[1]), (t = M[2])),
            (0, c.useLayoutEffect)(o, t),
            M[3] !== T || M[4] !== A || M[5] !== P
              ? ((l = P
                  ? A.formatMessage({
                      id: "settings.keyboardShortcuts.keystrokeSearch.ariaLabel",
                      defaultMessage: "Keystroke search capture",
                    })
                  : (T ??
                    A.formatMessage({
                      id: "settings.keyboardShortcuts.search.ariaLabel",
                      defaultMessage: "Search keyboard shortcuts",
                    }))),
                (M[3] = T),
                (M[4] = A),
                (M[5] = P),
                (M[6] = l))
              : (l = M[6]))
          let F = l
          M[7] !== A || M[8] !== P || M[9] !== y
            ? ((m = P
                ? A.formatMessage({
                    id: "settings.keyboardShortcuts.keystrokeSearch.placeholder",
                    defaultMessage: "Press shortcut to search",
                  })
                : (y ??
                  A.formatMessage({
                    id: "settings.keyboardShortcuts.search.placeholder",
                    defaultMessage: "Search shortcuts",
                  }))),
              (M[7] = A),
              (M[8] = P),
              (M[9] = y),
              (M[10] = m))
            : (m = M[10])
          let L = m,
            W = P || void 0
          ;(M[11] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => R(!1)), (M[11] = u)) : (u = M[11]),
            M[12] !== O || M[13] !== P || M[14] !== v
              ? ((g =
                  P &&
                  O &&
                  null != v &&
                  (0, a.jsx)(s.R, {
                    allowsBareModifiers: !1,
                    onCapture: v,
                    onCancel: () => {
                      ;(R(!1), B.current?.blur())
                    },
                    children: r,
                  })),
                (M[12] = O),
                (M[13] = P),
                (M[14] = v),
                (M[15] = g))
              : (g = M[15]))
          let I = P ? "keystrokes" : "text",
            V = !P
          return (
            M[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = () => R(!0)), (M[16] = p)) : (p = M[16]),
            M[17] !== S || M[18] !== C || M[19] !== k
              ? ((x = (e) => {
                  ;(S?.(e),
                    e.defaultPrevented ||
                      "Escape" !== e.key ||
                      "" === k ||
                      (e.preventDefault(), e.stopPropagation(), C("")))
                }),
                (M[17] = S),
                (M[18] = C),
                (M[19] = k),
                (M[20] = x))
              : (x = M[20]),
            M[21] !== b ||
            M[22] !== j ||
            M[23] !== L ||
            M[24] !== P ||
            M[25] !== F ||
            M[26] !== C ||
            M[27] !== V ||
            M[28] !== x ||
            M[29] !== I ||
            M[30] !== D ||
            M[31] !== k
              ? ((h = (0, a.jsx)(i.s, {
                  id: j,
                  autoFocus: b,
                  inputRef: B,
                  inputKey: I,
                  isClearable: V,
                  label: F,
                  placeholder: L,
                  readOnly: P,
                  searchQuery: k,
                  trailingControl: D,
                  onFocus: p,
                  onKeyDown: x,
                  onSearchQueryChange: C,
                })),
                (M[21] = b),
                (M[22] = j),
                (M[23] = L),
                (M[24] = P),
                (M[25] = F),
                (M[26] = C),
                (M[27] = V),
                (M[28] = x),
                (M[29] = I),
                (M[30] = D),
                (M[31] = k),
                (M[32] = h))
              : (h = M[32]),
            M[33] !== h || M[34] !== W || M[35] !== g
              ? ((f = (0, a.jsxs)("div", { "data-codex-shortcut-capture": W, onBlur: u, children: [g, h] })),
                (M[33] = h),
                (M[34] = W),
                (M[35] = g),
                (M[36] = f))
              : (f = M[36]),
            f
          )
        },
      },
    )
  },
  dESx(e, o, t) {
    var a = t("tO3J")
    let d = { bold: "CmdOrCtrl+B", italic: "CmdOrCtrl+I", underline: "CmdOrCtrl+U", link: "CmdOrCtrl+K" },
      c = Object.values(d)
    t.d(
      o,
      {},
      {
        QR: function (e, o) {
          return c.some((t) => (0, a.ho)(e, t, o))
        },
        TY: function (e) {
          let o = e instanceof Element ? e.closest("input, textarea, select, [contenteditable]") : null
          return (
            o?.matches(
              "[data-composer-markdown][contenteditable='true'], [data-page-document-selection] [contenteditable='true']",
            ) === !0
          )
        },
        lI: d,
      },
    )
  },
  BTYH(e, o, t) {
    var a = t("AGyq"),
      d = t("qmMi"),
      c = t("ChYf"),
      n = t("gbrq"),
      i = t("S99C"),
      s = t("n5iL"),
      r = t("vF5L"),
      l = t("Jue3"),
      m = t("XYHU"),
      u = t("jiwy"),
      g = t("l0pH"),
      p = t("aeqi"),
      x = t("GaA7"),
      h = t("OWtl"),
      f = t("yx3a"),
      M = t("OMIV"),
      b = t("FXSO"),
      T = t("z4p1")
    let w = a.zQ.filter((e) => (0, a.AK)(e) && "findInThread" !== e.id),
      y = (0, d.un)(h.u, ({ get: e }) => x.appServices?.commandKeybindings != null && e(M.JW, "2402779155")),
      D = (0, d.i1)(h.u, (e, { get: o }) => {
        let t = e && o(y),
          a = o(r.tu),
          d = o(i.W),
          x = o(m.IU),
          h = o(g.x),
          D = {
            ...d,
            platform: x,
            desktopShortcuts: !0,
            allowDebugMenu: (0, r.ZJ)(a, "toggleDebugModal") > 0,
            ...{},
            fileLanguageFeaturesEnabled: !0 === o(p.P),
            isAutomationsEnabled:
              o(c.G, { name: "automations.local" }).isCapable || o(c.G, { name: "automations.cloud" }).isCapable,
            isDictationShortcutEnabled: null != o(l.i),
            isSpotlightEnabled: o(M.JW, "3009531526"),
            isScreenshotSelectionEnabled: o(M.JW, "983842163"),
            isSidebarCollapsible: o(n.gU),
            isPriorityFilterEnabled: o(f.cw),
          }
        return w.filter(
          (c) =>
            ("toggleBottomPanel" !== c.id || !o(n.VK)) &&
            (!e || null != (0, b.iq)(c, t)) &&
            (("git.toggleBlame" !== c.id && "meetings.takeNotes" !== c.id) || (0, r.ZJ)(a, c.id) > 0) &&
            (0, T.V)(c, {
              ...D,
              codexLocal: d.codexLocal || !1,
              modeSwitchAvailable: (0, r.ZJ)(a, c.id) > 0,
              isRealtimeVoiceCommandEnabled:
                h ||
                ("realtimeVoice.toggleMicrophoneMute" === c.id && o(u.VK)) ||
                ("realtimeVoice" === c.id && (0, s.Dq)(c.id, o(s.nH), x).length > 0),
            }),
        )
      })
    t.d(o, {}, { D: y, q: D })
  },
  l0pH(e, o, t) {
    var a = t("qmMi"),
      d = t("ChYf"),
      c = t("OWtl")
    let n = (0, a.un)(c.u, ({ get: e }) => e(d.G, { name: "voice.realtime" }).isCapable)
    t.d(
      o,
      {},
      {
        g: function () {
          return (0, a.Ul)(n)
        },
        x: n,
      },
    )
  },
  Y4lV(e, o, t) {
    var a = t("ABep"),
      d = t("QosV"),
      c = t("qmMi"),
      n = t("zd8w"),
      i = t("oyxz"),
      s = t("n5iL"),
      r = t("Sm6l"),
      l = t("bVeK"),
      m = t("pO0d"),
      u = t("EjYe")
    t.d(
      o,
      {},
      {
        O: function (e) {
          let o,
            t,
            g,
            p = (0, d.c)(12),
            { children: x, description: h, searching: f } = e,
            M = (0, c._U)(s.M5, "globalDictationSingleTap"),
            b = !(void 0 !== f && f) && null == M,
            [T, w] = (0, n.useState)(!1),
            y = (0, n.useId)()
          p[0] !== y || p[1] !== T || p[2] !== b
            ? ((o = b
                ? (0, a.jsxs)(r.$, {
                    "aria-controls": y,
                    "aria-expanded": T,
                    color: "ghostTertiary",
                    radius: "small",
                    size: "inline",
                    onClick: () => w(!T),
                    children: [
                      T ? (0, a.jsx)(l.Aq_, {}) : (0, a.jsx)(l.uM3, {}),
                      (0, a.jsx)(i.A, {
                        id: "settings.keyboardShortcuts.dictation.advanced",
                        defaultMessage: "Advanced",
                      }),
                    ],
                  })
                : null),
              (p[0] = y),
              (p[1] = T),
              (p[2] = b),
              (p[3] = o))
            : (o = p[3])
          let D = o,
            v = !b || T
          return (
            p[4] !== D || p[5] !== h
              ? ((t = null != D && (0, a.jsx)(m.iu, { description: h, size: "compact", label: D })),
                (p[4] = D),
                (p[5] = h),
                (p[6] = t))
              : (t = p[6]),
            p[7] !== y || p[8] !== x || p[9] !== v || p[10] !== t
              ? ((g = (0, a.jsx)(u.H, { content: x, contentId: y, expanded: v, children: t })),
                (p[7] = y),
                (p[8] = x),
                (p[9] = v),
                (p[10] = t),
                (p[11] = g))
              : (g = p[11]),
            g
          )
        },
      },
    )
  },
  oFmV(e, o, t) {
    let a = (0, t("zd8w").createContext)(null)
    t.d(o, {}, { S: a })
  },
  rjP9(e, o, t) {
    t.d(o, { KeyboardShortcutsSettings: () => Z })
    var a = t("ABep"),
      d = t("QosV"),
      c = t("slpy"),
      n = t("irkb"),
      i = t("xSOA"),
      s = t("on57"),
      r = t("qmMi"),
      l = t("DBCl"),
      m = t("zd8w"),
      u = t("Wf1j"),
      g = t("oyxz"),
      p = t("n5iL"),
      x = t("iiZm"),
      h = t("Sm6l"),
      f = t("JNtf"),
      M = t("mUDD"),
      b = t("evwP"),
      T = t("Jue3"),
      w = t("wwME"),
      y = t("dhtj"),
      D = t("FXSO"),
      v = t("jDEJ"),
      S = t("JKrk"),
      k = t("TP69"),
      C = t("BTYH"),
      P = t("sLlu"),
      j = t("OWtl"),
      A = t("RxZZ"),
      B = t("jxU8"),
      O = t("oFmV"),
      R = t("BSnr"),
      N = t("odCE"),
      F = t("bZug"),
      L = t("QyE3"),
      W = t("ZEx5"),
      I = t("tcqM"),
      V = t("Y4lV")
    function G(e) {
      let o,
        t,
        c,
        n,
        i = (0, d.c)(11),
        { shortcut: s, singleTapShortcut: l, searching: m } = e,
        u = (0, r.Ul)(T.i)
      return (
        i[0] !== m || i[1] !== l
          ? ((o =
              null != l
                ? (0, a.jsx)(V.O, {
                    searching: m,
                    description: (0, a.jsx)(g.A, {
                      id: "settings.shortcuts.advancedDictation.help",
                      defaultMessage: "Set a shortcut to start dictation with a single tap",
                    }),
                    children: l,
                  })
                : null),
            (i[0] = m),
            (i[1] = l),
            (i[2] = o))
          : (o = i[2]),
        i[3] !== s || i[4] !== o
          ? ((t = (0, a.jsxs)(W.t, { children: [s, o] })), (i[3] = s), (i[4] = o), (i[5] = t))
          : (t = i[5]),
        i[6] !== u
          ? ((c = (0, a.jsx)(R.X.Footer, {
              children:
                "app" === u
                  ? (0, a.jsx)(g.A, {
                      id: "settings.keyboardShortcuts.dictation.appHint",
                      defaultMessage: "Press Esc to stop dictation and keep the text",
                    })
                  : (0, a.jsx)(g.A, {
                      id: "settings.keyboardShortcuts.dictation.globalOverlayHint",
                      defaultMessage:
                        "Opens global dictation in any app. To dictate inline with the same shortcut, assign it to in-app dictation too.",
                    }),
            })),
            (i[6] = u),
            (i[7] = c))
          : (c = i[7]),
        i[8] !== t || i[9] !== c
          ? ((n = (0, a.jsxs)(R.X, { className: "select-none", children: [t, c] })),
            (i[8] = t),
            (i[9] = c),
            (i[10] = n))
          : (n = i[10]),
        n
      )
    }
    var q = t("eFcQ"),
      E = t("AGyq"),
      K = t("bqtn"),
      _ = t("bVeK"),
      U = t("pO0d"),
      z = t("fliG")
    function H(e) {
      let o,
        t,
        c,
        n,
        i,
        s = (0, d.c)(15),
        { platform: u, shortcut: p } = e,
        x = (0, r.gh)(j.u),
        f = (0, r.Ul)(z.gh),
        M = (0, m.useId)(),
        [b, T] = (0, m.useState)(!1),
        [w, y] = (0, m.useState)(!1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(g.A, { ...q.q.description })), (s[0] = o))
          : (o = s[0]),
        s[1] !== w
          ? ((t = w
              ? (0, a.jsx)("span", {
                  className: "block text-danger",
                  role: "alert",
                  children: (0, a.jsx)(g.A, {
                    id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.error",
                    defaultMessage: "Could not save shortcut preference",
                  }),
                })
              : null),
            (s[1] = w),
            (s[2] = t))
          : (t = s[2]),
        s[3] !== t ? ((c = (0, a.jsxs)(a.Fragment, { children: [o, t] })), (s[3] = t), (s[4] = c)) : (c = s[4]),
        s[5] !== u || s[6] !== b || s[7] !== x || s[8] !== p || s[9] !== M
          ? ((n = (e) =>
              (0, a.jsx)("div", {
                className: "flex w-96 max-w-full @max-xl/keyboard-shortcuts:w-full",
                children: (0, a.jsx)(K.Ab, {
                  align: "end",
                  triggerButton: (0, a.jsxs)(h.$, {
                    ...e,
                    className: "-ms-[calc(var(--spacing-button-toolbar-inline)+1px)]",
                    "aria-labelledby": [e["aria-labelledby"], M].join(" "),
                    color: "ghostSecondary",
                    disabled: b,
                    radius: "large",
                    size: "toolbar",
                    children: [
                      (0, a.jsx)("span", { id: M, children: (0, a.jsx)(g.A, { ...q.q[p], values: { platform: u } }) }),
                      (0, a.jsx)(_.Awc, { className: "text-tertiary" }),
                    ],
                  }),
                  children: (0, a.jsx)(K.ms.RadioGroup, {
                    value: p,
                    children: E.yI.map((e) =>
                      (0, a.jsx)(
                        K.ms.RadioItem,
                        {
                          value: e,
                          onSelect: () => {
                            e !== p &&
                              (T(!0),
                              y(!1),
                              (0, A.gc)(x, l.U6S.externalBrowserLinkShortcut, e)
                                .catch(() => y(!0))
                                .finally(() => T(!1)))
                          },
                          children: (0, a.jsx)(g.A, { ...q.q[e], values: { platform: u } }),
                        },
                        e,
                      ),
                    ),
                  }),
                }),
              })),
            (s[5] = u),
            (s[6] = b),
            (s[7] = x),
            (s[8] = p),
            (s[9] = M),
            (s[10] = n))
          : (n = s[10]),
        s[11] !== f || s[12] !== c || s[13] !== n
          ? ((i = (0, a.jsx)(U.GC, {
              className:
                "select-none @max-xl/keyboard-shortcuts:flex-col @max-xl/keyboard-shortcuts:items-stretch @max-xl/keyboard-shortcuts:gap-2",
              entry: f,
              description: c,
              control: n,
            })),
            (s[11] = f),
            (s[12] = c),
            (s[13] = n),
            (s[14] = i))
          : (i = s[14]),
        i
      )
    }
    var Y = t("xWo2")
    function Q() {
      let e,
        o,
        t,
        c,
        n,
        i,
        s,
        u = (0, d.c)(25),
        x = (0, r.gh)(j.u),
        h = (0, r.Ul)(z.FB),
        { platform: f } = (0, w.V)(),
        M = "macOS" === f ? "\u2318" : "Ctrl+",
        b = (0, A.iK)(l.U6S.primaryNumberShortcutTarget),
        { data: T } = (0, r.Ul)(p.H0),
        [y, D] = (0, m.useState)(!1),
        [v, S] = (0, m.useState)(!1)
      u[0] !== T || u[1] !== f || u[2] !== b
        ? ((e =
            null != T && (0, E.Ks)({ keymapState: { ...T, primaryNumberShortcutTarget: b }, isMacOS: "macOS" === f })),
          (u[0] = T),
          (u[1] = f),
          (u[2] = b),
          (u[3] = e))
        : (e = u[3])
      let k = e
      return (
        u[4] !== v
          ? ((o = v
              ? (0, a.jsx)("span", {
                  className: "block text-danger",
                  role: "alert",
                  children: (0, a.jsx)(g.A, {
                    id: "settings.keyboardShortcuts.numberTarget.error",
                    defaultMessage: "Could not save shortcut preference",
                  }),
                })
              : null),
            (u[4] = v),
            (u[5] = o))
          : (o = u[5]),
        u[6] !== f || u[7] !== M || u[8] !== b
          ? ((t =
              "sidebar" === b
                ? (0, a.jsx)(g.A, {
                    ...Y.P.chatsPrimary,
                    values: { primary: M, secondary: "macOS" === f ? "\u2303" : "Alt+" },
                  })
                : (0, a.jsx)(g.A, {
                    ...Y.P.tabsPrimary,
                    values: { primary: M, secondary: "macOS" === f ? "\u2303" : "Alt+" },
                  })),
            (u[6] = f),
            (u[7] = M),
            (u[8] = b),
            (u[9] = t))
          : (t = u[9]),
        u[10] !== k
          ? ((c = k
              ? (0, a.jsx)("span", {
                  className: "block",
                  children: (0, a.jsx)(g.A, {
                    id: "settings.keyboardShortcuts.numberTarget.conflict",
                    defaultMessage: "Some number shortcuts are already assigned to other actions",
                  }),
                })
              : null),
            (u[10] = k),
            (u[11] = c))
          : (c = u[11]),
        u[12] !== o || u[13] !== t || u[14] !== c
          ? ((n = (0, a.jsxs)(a.Fragment, { children: [o, t, " ", c] })),
            (u[12] = o),
            (u[13] = t),
            (u[14] = c),
            (u[15] = n))
          : (n = u[15]),
        u[16] !== M || u[17] !== y || u[18] !== x || u[19] !== b
          ? ((i = (e) =>
              (0, a.jsx)(K.Ab, {
                align: "end",
                triggerButton: (0, a.jsx)(L.vg, {
                  ...e,
                  disabled: y,
                  children: (0, a.jsx)(g.A, { ...Y.P[b], values: { primary: M } }),
                }),
                children: (0, a.jsx)(K.ms.RadioGroup, {
                  value: b,
                  children: ["tabs", "sidebar"].map((e) =>
                    (0, a.jsx)(
                      K.ms.RadioItem,
                      {
                        value: e,
                        onSelect: () => {
                          ;(D(!0),
                            S(!1),
                            (0, A.gc)(x, l.U6S.primaryNumberShortcutTarget, e)
                              .catch(() => S(!0))
                              .finally(() => D(!1)))
                        },
                        children: (0, a.jsx)(g.A, { ...Y.P[e], values: { primary: M } }),
                      },
                      e,
                    ),
                  ),
                }),
              })),
            (u[16] = M),
            (u[17] = y),
            (u[18] = x),
            (u[19] = b),
            (u[20] = i))
          : (i = u[20]),
        u[21] !== h || u[22] !== n || u[23] !== i
          ? ((s = (0, a.jsx)(U.GC, { entry: h, description: n, control: i })),
            (u[21] = h),
            (u[22] = n),
            (u[23] = i),
            (u[24] = s))
          : (s = u[24]),
        s
      )
    }
    function Z(e) {
      let o,
        t,
        f,
        M,
        V,
        E,
        K,
        _,
        U,
        Z,
        ei,
        es,
        er,
        el,
        em,
        eu,
        eg,
        ep,
        ex,
        eh,
        ef,
        eM,
        eb,
        eT,
        ew = (0, d.c)(138),
        { embedded: ey, presentation: eD } = e,
        ev = void 0 !== ey && ey,
        eS = (0, r.gh)(j.u),
        { isChatGpt: ek, commands: eC } = (0, r._U)(z.Zd, eD),
        eP = (0, m.useContext)(O.S),
        ej = (0, u.A)(),
        { platform: eA } = (0, w.V)(),
        eB = (0, n.jE)(),
        eO = (0, r.Ul)(!!ek && C.D),
        eR = (0, P.B)(),
        eN = (0, r.Ul)(T.i)
      ew[0] !== eP
        ? ((o = eP?.targetId?.startsWith("keyboard-shortcut-") ? eP.navigationKey : null), (ew[0] = eP), (ew[1] = o))
        : (o = ew[1])
      let eF = o,
        [eL, eW] = (0, m.useState)(null),
        eI = eL?.navigationKey === eF ? eL : null,
        eV = eI?.query ?? "",
        eG = eI?.byKeystrokes ?? !1
      ew[2] !== eG || ew[3] !== eF
        ? ((t = function (e, o) {
            eW({ navigationKey: eF, query: e, byKeystrokes: void 0 === o ? eG : o })
          }),
          (ew[2] = eG),
          (ew[3] = eF),
          (ew[4] = t))
        : (t = ew[4])
      let eq = t,
        [eE, eK] = (0, m.useState)(!1),
        [e_, eU] = (0, m.useState)(!1),
        [ez, eH] = (0, m.useState)(null),
        [eY, eQ] = (0, m.useState)(null),
        eZ = (0, r.Ul)(ek ? null : z.n4),
        eJ = eZ?.externalBrowserLinkShortcut,
        eX = null != eJ,
        e$ = (0, r.Ul)(p.nH)
      ew[5] !== eN || ew[6] !== eR || ew[7] !== eB
        ? ((f = {
            mutationFn: p.Ld,
            networkMode: "always",
            onSuccess: (e) => {
              eB.setQueryData(p.pj, e)
              let o = [p.pj]
              ;("os-global" === eN && o.push(["vscode", "global-dictation-hotkey-state"]),
                Promise.all(o.map((e) => eR(e))))
            },
          }),
          (ew[5] = eN),
          (ew[6] = eR),
          (ew[7] = eB),
          (ew[8] = f))
        : (f = ew[8])
      let e0 = (0, i.n)(f)
      ew[9] !== eN || ew[10] !== eR || ew[11] !== eB
        ? ((M = {
            mutationFn: p.A0,
            networkMode: "always",
            onSuccess: (e) => {
              eB.setQueryData(p.pj, e)
              let o = [p.pj]
              ;("os-global" === eN && o.push(["vscode", "global-dictation-hotkey-state"]),
                Promise.all(o.map((e) => eR(e))))
            },
          }),
          (ew[9] = eN),
          (ew[10] = eR),
          (ew[11] = eB),
          (ew[12] = M))
        : (M = ew[12])
      let e1 = (0, i.n)(M)
      if (
        ew[13] !== eJ ||
        ew[14] !== ej ||
        ew[15] !== ek ||
        ew[16] !== eX ||
        ew[17] !== eG ||
        ew[18] !== e$ ||
        ew[19] !== eA ||
        ew[20] !== eV ||
        ew[21] !== eC
      ) {
        _ = eV.trim()
        let e = (0, x.WE)(eG ? "" : _)
        ;((E =
          !eG &&
          (0 === _.length ||
            Object.values(Y.P).some(
              (o) =>
                e(
                  ej.formatMessage(o, {
                    primary: "macOS" === eA ? "\u2318" : "Ctrl+",
                    secondary: "macOS" === eA ? "\u2303" : "Alt+",
                  }),
                ) > 0,
            ))),
          (V =
            !ek &&
            eX &&
            !eG &&
            (0 === _.length ||
              [q.q.title, q.q.description, q.q[eJ]].some((o) => e(ej.formatMessage(o, { platform: eA })) > 0))),
          (K =
            0 === _.length
              ? eC
              : eC.filter((o) => {
                  let { command: t, title: a, description: d } = o
                  return eG
                    ? (0, p.Dq)(t.id, e$, eA, ek ? "chatgpt" : "codex").some((e) => {
                        let { label: o } = e
                        return ec(o, _)
                      })
                    : [t.id, a, d].some((o) => e(o) > 0)
                })),
          (ew[13] = eJ),
          (ew[14] = ej),
          (ew[15] = ek),
          (ew[16] = eX),
          (ew[17] = eG),
          (ew[18] = e$),
          (ew[19] = eA),
          (ew[20] = eV),
          (ew[21] = eC),
          (ew[22] = V),
          (ew[23] = E),
          (ew[24] = K),
          (ew[25] = _))
      } else ((V = ew[22]), (E = ew[23]), (K = ew[24]), (_ = ew[25]))
      let e2 = K
      ew[26] !== e2 ? ((U = e2.findIndex(ea)), (ew[26] = e2), (ew[27] = U)) : (U = ew[27])
      let e3 = U
      ew[28] !== eJ || ew[29] !== eA || ew[30] !== V
        ? ((Z = V ? (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(H, { platform: eA, shortcut: eJ }) }) : null),
          (ew[28] = eJ),
          (ew[29] = eA),
          (ew[30] = V),
          (ew[31] = Z))
        : (Z = ew[31])
      let e5 = Z
      ew[32] !== ek || ew[33] !== e$ || ew[34] !== eA || ew[35] !== eV || ew[36] !== eq || ew[37] !== eC
        ? ((ei = (e) => {
            let o = (0, v.X)(e, "macOS" === eA, "linux" === eA),
              t = 0 === eV.length ? o : `${eV} ${o}`
            eq(
              eV.length > 0 &&
                eC.some((e) => {
                  let { command: o } = e
                  return (0, p.Dq)(o.id, e$, eA, ek ? "chatgpt" : "codex").some((e) => {
                    let { label: o } = e
                    return ec(o, t)
                  })
                })
                ? t
                : o,
            )
          }),
          (ew[32] = ek),
          (ew[33] = e$),
          (ew[34] = eA),
          (ew[35] = eV),
          (ew[36] = eq),
          (ew[37] = eC),
          (ew[38] = ei))
        : (ei = ew[38])
      let e4 = ei
      ew[39] !== e4 || ew[40] !== ej || ew[41] !== eG || ew[42] !== e$ || ew[43] !== eV || ew[44] !== eq
        ? ((es =
            null == e$
              ? null
              : (0, a.jsx)(k.d, {
                  autoFocus: eG,
                  isSearchingByKeystrokes: eG,
                  trailingContent: (0, a.jsx)(c.m, {
                    content: (0, a.jsx)(g.A, {
                      id: "settings.keyboardShortcuts.searchByKeystrokes.tooltip",
                      defaultMessage: "Search by keystrokes",
                    }),
                    children: (0, a.jsx)(h.$, {
                      "aria-label": ej.formatMessage({
                        id: "settings.keyboardShortcuts.searchByKeystrokes.ariaLabel",
                        defaultMessage: "Search by keystrokes",
                      }),
                      "aria-pressed": eG,
                      color: eG ? "secondary" : "ghost",
                      size: "toolbar",
                      uniform: !0,
                      onMouseDown: et,
                      onClick: () => {
                        eq("", !eG)
                      },
                      children: (0, a.jsx)(y.A, { className: "icon-sm" }),
                    }),
                  }),
                  value: eV,
                  onCapture: e4,
                  onKeyDown: eG
                    ? (e) => {
                        if (e.repeat) return
                        if (
                          (e.preventDefault(),
                          e.stopPropagation(),
                          "Escape" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey)
                        )
                          return void eq("", !1)
                        let o = (0, S.L)(e.nativeEvent)
                        null != o && e4(o)
                      }
                    : void 0,
                  onValueChange: eq,
                })),
          (ew[39] = e4),
          (ew[40] = ej),
          (ew[41] = eG),
          (ew[42] = e$),
          (ew[43] = eV),
          (ew[44] = eq),
          (ew[45] = es))
        : (es = ew[45])
      let e6 = es
      if (ew[46] !== eY || ew[47] !== e$ || ew[48] !== eA || ew[49] !== eC) {
        let e, o
        ;(ew[52] !== e$ || ew[53] !== eA
          ? ((e = (e) => {
              let { command: o } = e
              return (
                e$?.bindings.some((e) => e.command === o.id) &&
                !("composer.submit" === o.id && (0, D.Jb)((0, p.Dq)(o.id, e$, eA).map(eo)))
              )
            }),
            (ew[52] = e$),
            (ew[53] = eA),
            (ew[54] = e))
          : (e = ew[54]),
          (er = eC.filter(e)),
          ew[55] !== eY
            ? ((o = (e) => {
                let { command: o } = e
                return o.id === eY
              }),
              (ew[55] = eY),
              (ew[56] = o))
            : (o = ew[56]),
          (el = er.find(o)),
          (ew[46] = eY),
          (ew[47] = e$),
          (ew[48] = eA),
          (ew[49] = eC),
          (ew[50] = er),
          (ew[51] = el))
      } else ((er = ew[50]), (el = ew[51]))
      let e8 = el
      ew[57] !== er || ew[58] !== e8
        ? ((em = null == e8 ? er : [e8]), (ew[57] = er), (ew[58] = e8), (ew[59] = em))
        : (em = ew[59])
      let e7 = em,
        e9 = ek
          ? er.length > 0
          : null != e$ &&
            (e$.bindings.length > 0 ||
              eZ?.hasCustomNumberShortcuts ||
              (eX && eJ !== l.U6S.externalBrowserLinkShortcut.default))
      ew[60] !== e7 ||
      ew[61] !== eZ ||
      ew[62] !== ej ||
      ew[63] !== ek ||
      ew[64] !== eX ||
      ew[65] !== e_ ||
      ew[66] !== e1 ||
      ew[67] !== eS ||
      ew[68] !== e0
        ? ((eu = async function () {
            if (!e_) {
              ;(eH(null), eU(!0))
              try {
                if (ek)
                  for (let { command: e } of e7) await e0.mutateAsync({ commandId: e.id, update: { type: "reset" } })
                else
                  (eZ?.hasCustomNumberShortcuts &&
                    (await (0, A.gc)(eS, l.U6S.primaryNumberShortcutTarget, l.U6S.primaryNumberShortcutTarget.default)),
                    await Promise.all([
                      e1.mutateAsync(void 0),
                      eX
                        ? (0, A.gc)(eS, l.U6S.externalBrowserLinkShortcut, l.U6S.externalBrowserLinkShortcut.default)
                        : void 0,
                    ]))
                eK(!1)
              } catch (e) {
                eH(
                  e instanceof Error
                    ? e.message
                    : ej.formatMessage({
                        id: "settings.keyboardShortcuts.resetAllError",
                        defaultMessage: "Failed to reset keyboard shortcuts",
                      }),
                )
              }
              eU(!1)
            }
          }),
          (ew[60] = e7),
          (ew[61] = eZ),
          (ew[62] = ej),
          (ew[63] = ek),
          (ew[64] = eX),
          (ew[65] = e_),
          (ew[66] = e1),
          (ew[67] = eS),
          (ew[68] = e0),
          (ew[69] = eu))
        : (eu = ew[69])
      let oe = eu
      ew[70] !== ev || ew[71] !== e9 || ew[72] !== ek || ew[73] !== e_ || ew[74] !== oe
        ? ((eg =
            ek || e9
              ? (0, a.jsx)(h.$, {
                  color: ek ? "primary" : "secondary",
                  disabled: e_ || !e9,
                  radius: ek && ev ? "full" : "default",
                  size: ek && ev ? "dialogAction" : "toolbar",
                  onClick: () => {
                    ;(eH(null), ek ? oe() : eK(!0))
                  },
                  children: ek
                    ? (0, a.jsx)(g.A, {
                        id: "settings.keyboardShortcuts.restoreDefaults",
                        defaultMessage: "Restore defaults",
                      })
                    : (0, a.jsx)(g.A, {
                        id: "settings.keyboardShortcuts.resetAll",
                        defaultMessage: "Reset all to defaults",
                      }),
                })
              : null),
          (ew[70] = ev),
          (ew[71] = e9),
          (ew[72] = ek),
          (ew[73] = e_),
          (ew[74] = oe),
          (ew[75] = eg))
        : (eg = ew[75])
      let oo = eg
      if (
        ew[76] !== ev ||
        ew[77] !== e5 ||
        ew[78] !== e2 ||
        ew[79] !== ek ||
        ew[80] !== e_ ||
        ew[81] !== eG ||
        ew[82] !== e$ ||
        ew[83] !== e3 ||
        ew[84] !== eS ||
        ew[85] !== eP?.targetId ||
        ew[86] !== e0 ||
        ew[87] !== V ||
        ew[88] !== E ||
        ew[89] !== _ ||
        ew[90] !== eO
      ) {
        let e =
            null == e$
              ? null
              : e2.map((e) => {
                  let { command: o, description: t, entry: d } = e
                  return {
                    commandId: o.id,
                    entry: d,
                    section: (0, D.iq)(o, eO),
                    content: (0, a.jsx)(
                      I.P,
                      {
                        command: o,
                        presentation: ek ? "chatgpt" : "codex",
                        description: ek ? "" : t,
                        embedded: ev,
                        searchEntry: d,
                        isPending: e0.isPending || e_,
                        keymapState: e$,
                        onBlur: () => eQ((e) => (e === o.id ? null : e)),
                        onFocus: () => eQ(o.id),
                        onUpdate: async (e) => {
                          await e0.mutateAsync({ commandId: o.id, update: e })
                        },
                      },
                      o.id,
                    ),
                  }
                }),
          o = e?.find(ee),
          t = e?.find($),
          d = e?.filter(X)
        if (null == e) {
          let e
          ;(ew[92] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(N.j, {
                children: (0, a.jsx)(g.A, {
                  id: "settings.keyboardShortcuts.loading",
                  defaultMessage: "Loading shortcuts\u2026",
                }),
              })),
              (ew[92] = e))
            : (e = ew[92]),
            (ep = e))
        } else if (ek)
          ep = ["composer", "thread", "app"].map((o) => {
            let t = e.filter((e) => e.section === o),
              d = (0, a.jsx)(en, { section: o })
            return 0 === t.length
              ? null
              : (0, a.jsxs)(
                  R.X,
                  {
                    children: [
                      ev
                        ? (0, a.jsx)("h3", {
                            className:
                              "sticky top-0 z-10 bg-surface px-6 py-0.5 text-sm leading-6 font-medium text-secondary dark:bg-surface-tertiary",
                            children: d,
                          })
                        : (0, a.jsx)(R.X.Header, {
                            className: "sticky top-0 z-10 bg-surface",
                            size: "compact",
                            spacing: "compact",
                            title: (0, a.jsx)("h3", { children: d }),
                          }),
                      (0, a.jsx)("ul", {
                        className: (0, s.A)("list-none", ev ? "flex flex-col px-3" : F.s),
                        children: t.map(J),
                      }),
                    ],
                  },
                  o,
                )
          })
        else {
          let e,
            c,
            n =
              null != d && (d.length > 0 || V)
                ? (0, a.jsxs)(W.t, {
                    children: [
                      d.flatMap((e) => [e.content, "newTab" === e.commandId ? e5 : null]),
                      -1 === e3 ? e5 : null,
                    ],
                  })
                : null
          ew[93] !== e2.length || ew[94] !== V || ew[95] !== E
            ? ((e =
                0 !== e2.length || V || E
                  ? null
                  : (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsx)(W.t, {
                        children: (0, a.jsx)(b.W, {
                          layout: "settings-row",
                          children: (0, a.jsx)(g.A, {
                            id: "settings.keyboardShortcuts.noMatches",
                            defaultMessage: "No matching shortcuts",
                          }),
                        }),
                      }),
                    })),
              (ew[93] = e2.length),
              (ew[94] = V),
              (ew[95] = E),
              (ew[96] = e))
            : (e = ew[96])
          let i =
            o || t
              ? (0, a.jsx)(G, {
                  shortcut: o?.content,
                  singleTapShortcut: t?.content,
                  searching: (null != t && eP?.targetId === t.entry.id) || (_.length > 0 && (null == o || eG)),
                })
              : null
          ;(ew[97] !== n || ew[98] !== e || ew[99] !== i
            ? ((c = (0, a.jsxs)(a.Fragment, { children: [n, e, i] })),
              (ew[97] = n),
              (ew[98] = e),
              (ew[99] = i),
              (ew[100] = c))
            : (c = ew[100]),
            (ep = c))
        }
        ;((ew[76] = ev),
          (ew[77] = e5),
          (ew[78] = e2),
          (ew[79] = ek),
          (ew[80] = e_),
          (ew[81] = eG),
          (ew[82] = e$),
          (ew[83] = e3),
          (ew[84] = eS),
          (ew[85] = eP?.targetId),
          (ew[86] = e0),
          (ew[87] = V),
          (ew[88] = E),
          (ew[89] = _),
          (ew[90] = eO),
          (ew[91] = ep))
      } else ep = ew[91]
      ew[101] === Symbol.for("react.memo_cache_sentinel")
        ? ((ex = (0, a.jsx)(g.A, {
            id: "settings.overview.keyboard-shortcuts",
            defaultMessage: "Review and change keyboard shortcuts",
          })),
          (ew[101] = ex))
        : (ex = ew[101])
      let ot = ex
      if (ek) {
        let e,
          o,
          t,
          d,
          c,
          n,
          i,
          r = ev && "px-6"
        ;(ew[102] !== r
          ? ((e = (0, s.A)("text-sm leading-5 text-secondary select-none", r)), (ew[102] = r), (ew[103] = e))
          : (e = ew[103]),
          ew[104] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)(g.A, {
                id: "settings.keyboardShortcuts.editKeyInstructions",
                defaultMessage: "To change a shortcut, select the key combination, and then type the new keys",
              })),
              (ew[104] = o))
            : (o = ew[104]),
          ew[105] !== e
            ? ((t = (0, a.jsx)("p", { className: e, children: o })), (ew[105] = e), (ew[106] = t))
            : (t = ew[106]),
          ew[107] !== ep || ew[108] !== t
            ? ((d = (0, a.jsxs)("div", { className: "flex flex-col gap-8 py-4", children: [t, ep] })),
              (ew[107] = ep),
              (ew[108] = t),
              (ew[109] = d))
            : (d = ew[109]))
        let l = d
        ;(ew[110] !== ez
          ? ((c =
              null == ez
                ? null
                : (0, a.jsx)("span", { className: "text-xs text-danger", role: "alert", children: ez })),
            (ew[110] = ez),
            (ew[111] = c))
          : (c = ew[111]),
          ew[112] !== oo || ew[113] !== c
            ? ((n = (0, a.jsxs)(a.Fragment, { children: [c, oo] })), (ew[112] = oo), (ew[113] = c), (ew[114] = n))
            : (n = ew[114]))
        let m = n
        return (
          ew[115] !== l || ew[116] !== ev || ew[117] !== m
            ? ((i = ev
                ? (0, a.jsxs)("div", {
                    className: "flex min-h-0 flex-1 flex-col",
                    children: [
                      (0, a.jsx)("div", { className: "min-h-0 flex-1 scrollbar-stable overflow-y-auto", children: l }),
                      (0, a.jsx)("div", {
                        className:
                          "flex items-center justify-end gap-3 border-t border-primary-outline bg-surface px-3 py-3 dark:bg-surface-tertiary",
                        children: m,
                      }),
                    ],
                  })
                : (0, a.jsx)(B.P, {
                    overview: ot,
                    footer: m,
                    title: (0, a.jsx)(L.s, { slug: "keyboard-shortcuts" }),
                    children: l,
                  })),
              (ew[115] = l),
              (ew[116] = ev),
              (ew[117] = m),
              (ew[118] = i))
            : (i = ew[118]),
          i
        )
      }
      let oa = ev ? void 0 : ot
      return (
        ew[119] !== ev
          ? ((eh = ev ? null : (0, a.jsx)(L.s, { slug: "keyboard-shortcuts" })), (ew[119] = ev), (ew[120] = eh))
          : (eh = ew[120]),
        ew[121] !== E
          ? ((ef = E ? (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(W.t, { children: (0, a.jsx)(Q, {}) }) }) : null),
            (ew[121] = E),
            (ew[122] = ef))
          : (ef = ew[122]),
        ew[123] === Symbol.for("react.memo_cache_sentinel")
          ? ((eM = (e) => {
              ;(eK(e), e || eH(null))
            }),
            (ew[123] = eM))
          : (eM = ew[123]),
        ew[124] !== eE || ew[125] !== e_ || ew[126] !== ez || ew[127] !== oe
          ? ((eb = (0, a.jsx)(ed, { error: ez, isPending: e_, open: eE, onOpenChange: eM, onConfirm: oe })),
            (ew[124] = eE),
            (ew[125] = e_),
            (ew[126] = ez),
            (ew[127] = oe),
            (ew[128] = eb))
          : (eb = ew[128]),
        ew[129] !== ev ||
        ew[130] !== oo ||
        ew[131] !== e6 ||
        ew[132] !== ep ||
        ew[133] !== oa ||
        ew[134] !== eh ||
        ew[135] !== ef ||
        ew[136] !== eb
          ? ((eT = (0, a.jsxs)(B.P, {
              action: oo,
              contentClassName: "@container/keyboard-shortcuts",
              embedded: ev,
              overview: oa,
              stickyControls: e6,
              title: eh,
              children: [ef, ep, eb],
            })),
            (ew[129] = ev),
            (ew[130] = oo),
            (ew[131] = e6),
            (ew[132] = ep),
            (ew[133] = oa),
            (ew[134] = eh),
            (ew[135] = ef),
            (ew[136] = eb),
            (ew[137] = eT))
          : (eT = ew[137]),
        eT
      )
    }
    function J(e) {
      return e.content
    }
    function X(e) {
      return "globalDictationHold" !== e.commandId && "globalDictationSingleTap" !== e.commandId
    }
    function $(e) {
      return "globalDictationSingleTap" === e.commandId
    }
    function ee(e) {
      return "globalDictationHold" === e.commandId
    }
    function eo(e) {
      let { accelerator: o } = e
      return o
    }
    function et(e) {
      e.preventDefault()
    }
    function ea(e) {
      let { command: o } = e
      return "newTab" === o.id
    }
    function ed(e) {
      let o,
        t,
        c,
        n,
        i,
        s,
        r,
        l,
        m,
        u,
        p,
        x,
        b,
        T,
        w,
        y = (0, d.c)(28),
        { error: D, isPending: v, onConfirm: S, onOpenChange: k, open: C } = e
      y[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, a.jsx)(g.A, {
            id: "settings.keyboardShortcuts.resetAllConfirm.title",
            defaultMessage: "Reset all keyboard shortcuts?",
          })),
          (y[0] = o))
        : (o = y[0])
      let P = o
      y[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(g.A, {
            id: "settings.keyboardShortcuts.resetAllConfirm.description",
            defaultMessage: "This will discard all custom shortcuts and restore the defaults",
          })),
          (y[1] = t))
        : (t = y[1])
      let j = t
      return (
        y[2] !== S
          ? ((c = (e) => {
              ;(e.preventDefault(), S())
            }),
            (y[2] = S),
            (y[3] = c))
          : (c = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(f.L3, { className: "sr-only", children: P })),
            (i = (0, a.jsx)(f.rr, { className: "sr-only", children: j })),
            (y[4] = n),
            (y[5] = i))
          : ((n = y[4]), (i = y[5])),
        y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(M.OO, { children: (0, a.jsx)(M.c7, { title: P, subtitle: j }) })), (y[6] = s))
          : (s = y[6]),
        y[7] !== D
          ? ((r = null == D ? null : (0, a.jsx)(M.OO, { className: "text-danger", children: D })),
            (y[7] = D),
            (y[8] = r))
          : (r = y[8]),
        y[9] !== k
          ? ((l = () => {
              k(!1)
            }),
            (y[9] = k),
            (y[10] = l))
          : (l = y[10]),
        y[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(g.A, {
              id: "settings.keyboardShortcuts.resetAllConfirm.cancel",
              defaultMessage: "Cancel",
            })),
            (y[11] = m))
          : (m = y[11]),
        y[12] !== l
          ? ((u = (0, a.jsx)(h.$, { color: "secondary", onClick: l, children: m })), (y[12] = l), (y[13] = u))
          : (u = y[13]),
        y[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(g.A, {
              id: "settings.keyboardShortcuts.resetAllConfirm.confirm",
              defaultMessage: "Reset all",
            })),
            (y[14] = p))
          : (p = y[14]),
        y[15] !== v
          ? ((x = (0, a.jsx)(h.$, { color: "danger", loading: v, type: "submit", children: p })),
            (y[15] = v),
            (y[16] = x))
          : (x = y[16]),
        y[17] !== u || y[18] !== x
          ? ((b = (0, a.jsx)(M.OO, { children: (0, a.jsxs)(M.Es, { children: [u, x] }) })),
            (y[17] = u),
            (y[18] = x),
            (y[19] = b))
          : (b = y[19]),
        y[20] !== b || y[21] !== c || y[22] !== r
          ? ((T = (0, a.jsxs)(M.R4, { as: "form", onSubmit: c, children: [n, i, s, r, b] })),
            (y[20] = b),
            (y[21] = c),
            (y[22] = r),
            (y[23] = T))
          : (T = y[23]),
        y[24] !== k || y[25] !== C || y[26] !== T
          ? ((w = (0, a.jsx)(f.lG, { open: C, onOpenChange: k, showDialogClose: !1, size: "compact", children: T })),
            (y[24] = k),
            (y[25] = C),
            (y[26] = T),
            (y[27] = w))
          : (w = y[27]),
        w
      )
    }
    function ec(e, o) {
      return e === o || e.startsWith(`${o} `)
    }
    function en(e) {
      let o = (0, d.c)(3),
        { section: t } = e
      switch (t) {
        case "composer": {
          let e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(g.A, {
                  id: "settings.keyboardShortcuts.section.composer",
                  defaultMessage: "Composer",
                })),
                (o[0] = e))
              : (e = o[0]),
            e
          )
        }
        case "thread": {
          let e
          return (
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(g.A, { id: "settings.keyboardShortcuts.section.thread", defaultMessage: "Chat" })),
                (o[1] = e))
              : (e = o[1]),
            e
          )
        }
        case "app": {
          let e
          return (
            o[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(g.A, { id: "settings.keyboardShortcuts.section.app", defaultMessage: "App" })),
                (o[2] = e))
              : (e = o[2]),
            e
          )
        }
      }
    }
  },
  eFcQ(e, o, t) {
    let a = (0, t("Qgfj").YK)({
      title: {
        id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.title",
        defaultMessage: "Open web link in default browser",
      },
      description: {
        id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.description",
        defaultMessage: "Hold the assigned keys while clicking a web link to open it in your default system browser",
      },
      unassigned: {
        id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.unassigned",
        defaultMessage: "Unassigned",
      },
      primary: {
        id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.primary",
        defaultMessage: "{platform, select, macOS {\u2318+Click} other {Ctrl+Click}}",
      },
      alt: {
        id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.alt",
        defaultMessage: "{platform, select, macOS {\u2325+Click} other {Alt+Click}}",
      },
      "primary-shift": {
        id: "settings.keyboardShortcuts.externalBrowserLinkShortcut.primaryShift",
        defaultMessage: "{platform, select, macOS {\u21E7\u2318+Click} other {Ctrl+Shift+Click}}",
      },
    })
    t.d(o, {}, { q: a })
  },
  xWo2(e, o, t) {
    let a = (0, t("Qgfj").YK)({
      title: { id: "settings.keyboardShortcuts.numberTarget.title", defaultMessage: "Number shortcuts" },
      sidebar: {
        id: "settings.keyboardShortcuts.numberTarget.sidebarWithShortcut",
        defaultMessage: "{primary}1-9 for Chats",
      },
      tabs: { id: "settings.keyboardShortcuts.numberTarget.tabsWithShortcut", defaultMessage: "{primary}1-9 for Tabs" },
      chatsPrimary: {
        id: "settings.keyboardShortcuts.numberTarget.chatsPrimary",
        defaultMessage: "Use {primary}1\u20139 to switch chats and {secondary}1\u20139 to switch tabs",
      },
      tabsPrimary: {
        id: "settings.keyboardShortcuts.numberTarget.tabsPrimary",
        defaultMessage: "Use {primary}1\u20139 to switch tabs and {secondary}1\u20139 to switch chats",
      },
    })
    t.d(o, {}, { P: a })
  },
  fliG(e, o, t) {
    var a = t("AGyq"),
      d = t("qmMi"),
      c = t("DBCl"),
      n = t("n5iL"),
      i = t("WVWQ"),
      s = t("vF5L"),
      r = t("XYHU"),
      l = t("svjy"),
      m = t("FXSO"),
      u = t("OvVq"),
      g = t("BTYH"),
      p = t("OWtl"),
      x = t("RxZZ"),
      h = t("pasN"),
      f = t("OMIV"),
      M = t("eFcQ"),
      b = t("xWo2")
    let T = (0, d.i1)(p.u, (e, { get: o }) => {
        let t = null == e ? "work" === o(h.l) : "chatgpt" === e,
          a = o(l.g),
          d = o(s.tu),
          c = o(f.JW, "1532120159"),
          n = (o(g.q, t) ?? []).map((e) => {
            let o = (0, i.j)(e, a, null == d ? void 0 : (0, s.iG)(d, e.id), c)
            return {
              command: e,
              title: o.title,
              description: o.description,
              entry: {
                section: "keyboard-shortcuts",
                id: `keyboard-shortcut-${e.id}`,
                title: { localizedText: o.title },
              },
            }
          })
        return (
          n.sort((e, o) =>
            t
              ? m.NT.findIndex(({ commandId: o }) => o === e.command.id) -
                m.NT.findIndex(({ commandId: e }) => e === o.command.id)
              : (0, u.N)(e.command, o.command),
          ),
          { isChatGpt: t, commands: n }
        )
      }),
      w = (0, d.un)(p.u, ({ get: e }) => ({
        externalBrowserLinkShortcut: (0, x.CN)(e, c.U6S.externalBrowserLinkShortcut),
        hasCustomNumberShortcuts:
          (0, x.CN)(e, c.U6S.primaryNumberShortcutTarget) !== c.U6S.primaryNumberShortcutTarget.default,
      })),
      y = (0, d.un)(p.u, ({ get: e }) => {
        let o = e(l.g),
          t = "macOS" === e(r.IU) ? "\u2318" : "Ctrl+"
        return {
          section: "keyboard-shortcuts",
          id: "keyboard-shortcut-number-preference",
          title: b.P.title,
          options: [b.P.sidebar, b.P.tabs].map((e) => ({ localizedText: o.formatMessage(e, { primary: t }) })),
        }
      }),
      D = (0, d.un)(p.u, ({ get: e }) => {
        let o = e(l.g),
          t = e(r.IU)
        return {
          section: "keyboard-shortcuts",
          id: "keyboard-shortcut-external-browser-link",
          title: M.q.title,
          options: a.yI.map((e) => ({ localizedText: o.formatMessage(M.q[e], { platform: t }) })),
        }
      }),
      v = (0, d.un)(p.u, ({ get: e }) => {
        let { isChatGpt: o, commands: t } = e(T, void 0),
          a = null != e(n.nH),
          d = a ? t.map(({ entry: e }) => e) : []
        return (!o && (d.push(e(y)), a && e(w)?.externalBrowserLinkShortcut != null && d.push(e(D))), d)
      })
    t.d(o, {}, { FB: y, Zd: T, gh: D, k8: v, n4: w })
  },
  pO0d(e, o, t) {
    var a = t("ABep"),
      d = t("QosV"),
      c = t("oyxz"),
      n = t("Wf1j"),
      i = t("AWNZ"),
      s = t("DDOY")
    function r(e) {
      let o,
        t = (0, d.c)(2),
        { title: n } = e
      return (
        t[0] !== n
          ? ((o =
              "localizedText" in n ? (0, a.jsx)(a.Fragment, { children: n.localizedText }) : (0, a.jsx)(c.A, { ...n })),
            (t[0] = n),
            (t[1] = o))
          : (o = t[1]),
        o
      )
    }
    t.d(
      o,
      {},
      {
        Ct: r,
        GC: function (e) {
          let o,
            t,
            n,
            s,
            l,
            m,
            u,
            g,
            p,
            x = (0, d.c)(19)
          x[0] !== e
            ? (({ entry: t, anchored: l, description: o, renderLabel: s, ...n } = e),
              (x[0] = e),
              (x[1] = o),
              (x[2] = t),
              (x[3] = n),
              (x[4] = s),
              (x[5] = l))
            : ((o = x[1]), (t = x[2]), (n = x[3]), (s = x[4]), (l = x[5]))
          let h = void 0 === l || l
          x[6] !== t.title ? ((m = (0, a.jsx)(r, { title: t.title })), (x[6] = t.title), (x[7] = m)) : (m = x[7])
          let f = m,
            M = h ? t.id : void 0
          return (
            x[8] !== f || x[9] !== s ? ((u = null == s ? f : s(f)), (x[8] = f), (x[9] = s), (x[10] = u)) : (u = x[10]),
            x[11] !== o || x[12] !== t.description
              ? ((g = null == t.description ? o : (0, a.jsx)(c.A, { ...t.description })),
                (x[11] = o),
                (x[12] = t.description),
                (x[13] = g))
              : (g = x[13]),
            x[14] !== n || x[15] !== M || x[16] !== u || x[17] !== g
              ? ((p = (0, a.jsx)(i.ic, { ...n, searchAnchor: M, label: u, description: g })),
                (x[14] = n),
                (x[15] = M),
                (x[16] = u),
                (x[17] = g),
                (x[18] = p))
              : (p = x[18]),
            p
          )
        },
        ek: function (e) {
          let o,
            t,
            c = (0, d.c)(12),
            { entry: i, anchored: r, className: l, children: m } = e,
            u = void 0 === r || r,
            g = (0, n.A)(),
            p = u ? i.id : void 0,
            x = u ? i.id : void 0,
            h = u ? -1 : void 0,
            f = u ? "group" : void 0
          return (
            c[0] !== u || c[1] !== i || c[2] !== g
              ? ((o = u ? (0, s.hz)(g, i.title) : void 0), (c[0] = u), (c[1] = i), (c[2] = g), (c[3] = o))
              : (o = c[3]),
            c[4] !== m || c[5] !== l || c[6] !== p || c[7] !== x || c[8] !== h || c[9] !== f || c[10] !== o
              ? ((t = (0, a.jsx)("div", {
                  id: p,
                  "data-settings-search-entry": x,
                  tabIndex: h,
                  role: f,
                  "aria-label": o,
                  className: l,
                  children: m,
                })),
                (c[4] = m),
                (c[5] = l),
                (c[6] = p),
                (c[7] = x),
                (c[8] = h),
                (c[9] = f),
                (c[10] = o),
                (c[11] = t))
              : (t = c[11]),
            t
          )
        },
        iu: function (e) {
          let o,
            t,
            c,
            n = (0, d.c)(6)
          return (
            n[0] !== e ? (({ action: o, ...t } = e), (n[0] = e), (n[1] = o), (n[2] = t)) : ((o = n[1]), (t = n[2])),
            n[3] !== o || n[4] !== t
              ? ((c = (0, a.jsx)(i.ic, { ...t, control: o })), (n[3] = o), (n[4] = t), (n[5] = c))
              : (c = n[5]),
            c
          )
        },
        kk: function (e) {
          let o,
            t,
            n,
            s,
            l,
            m,
            u,
            g = (0, d.c)(15)
          g[0] !== e
            ? (({ entry: t, anchored: s, description: o, ...n } = e),
              (g[0] = e),
              (g[1] = o),
              (g[2] = t),
              (g[3] = n),
              (g[4] = s))
            : ((o = g[1]), (t = g[2]), (n = g[3]), (s = g[4]))
          let p = void 0 === s || s ? t.id : void 0
          return (
            g[5] !== t.title ? ((l = (0, a.jsx)(r, { title: t.title })), (g[5] = t.title), (g[6] = l)) : (l = g[6]),
            g[7] !== o || g[8] !== t.description
              ? ((m = null == t.description ? o : (0, a.jsx)(c.A, { ...t.description })),
                (g[7] = o),
                (g[8] = t.description),
                (g[9] = m))
              : (m = g[9]),
            g[10] !== n || g[11] !== p || g[12] !== l || g[13] !== m
              ? ((u = (0, a.jsx)(i.kG, { ...n, searchAnchor: p, label: l, description: m })),
                (g[10] = n),
                (g[11] = p),
                (g[12] = l),
                (g[13] = m),
                (g[14] = u))
              : (u = g[14]),
            u
          )
        },
      },
    )
  },
  BSnr(e, o, t) {
    t.d(o, { X: () => n })
    var a = t("ABep"),
      d = t("QosV"),
      c = t("on57")
    let n = Object.assign(
      function (e) {
        let o,
          t,
          n = (0, d.c)(6),
          { children: i, id: s, className: r } = e
        return (
          n[0] !== r ? ((o = (0, c.A)("flex flex-col", r)), (n[0] = r), (n[1] = o)) : (o = n[1]),
          n[2] !== i || n[3] !== s || n[4] !== o
            ? ((t = (0, a.jsx)("section", { id: s, className: o, children: i })),
              (n[2] = i),
              (n[3] = s),
              (n[4] = o),
              (n[5] = t))
            : (t = n[5]),
          t
        )
      },
      {
        Header: function (e) {
          let o,
            t,
            n,
            i,
            s,
            r,
            l,
            m = (0, d.c)(33),
            {
              title: u,
              subtitle: g,
              actions: p,
              actionsAlignment: x,
              className: h,
              size: f,
              showDivider: M,
              titleGap: b,
              spacing: T,
              subtitlePlacement: w,
              subtitleWrap: y,
            } = e,
            D = void 0 === f ? "default" : f,
            v = void 0 === T ? "default" : T,
            S = void 0 === w ? "below-title" : w,
            k = void 0 === y ? "balance" : y,
            C = null != u,
            P = null != g,
            j = null != p,
            A = "compact" === D
          m[0] !== A || m[1] !== g || m[2] !== S || m[3] !== k
            ? ((o = g
                ? (0, a.jsx)("div", {
                    className: (0, c.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === k ? "text-balance" : "text-wrap",
                      A ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === S && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (m[0] = A),
              (m[1] = g),
              (m[2] = S),
              (m[3] = k),
              (m[4] = o))
            : (o = m[4])
          let B = o
          if (!C && !P && !j) {
            let e
            return (
              m[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (m[5] = e))
                : (e = m[5]),
              e
            )
          }
          let O =
              C && (void 0 === M || M) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            R = "below-header" === S ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            N = P && "compact" === v && "pb-2",
            F = P && "compact" !== v && "pb-3"
          m[6] !== h ||
          m[7] !== P ||
          m[8] !== A ||
          m[9] !== v ||
          m[10] !== N ||
          m[11] !== F ||
          m[12] !== O ||
          m[13] !== R
            ? ((t = (0, c.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                O,
                R,
                N,
                F,
                !P && (0, c.A)("items-center pb-1.5", "compact" === v ? "min-h-8" : "min-h-toolbar"),
                P && A && "items-center",
                P && !A && "items-start",
                h,
              )),
              (m[6] = h),
              (m[7] = P),
              (m[8] = A),
              (m[9] = v),
              (m[10] = N),
              (m[11] = F),
              (m[12] = O),
              (m[13] = R),
              (m[14] = t))
            : (t = m[14])
          let L =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(m[15] !== L ? ((n = (0, c.A)("flex min-w-0 flex-1 flex-col", L)), (m[15] = L), (m[16] = n)) : (n = m[16]),
            m[17] !== P || m[18] !== D || m[19] !== u
              ? ((i = u
                  ? (0, a.jsx)("div", {
                      className: (0, c.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === D && "text-sm leading-[18px]",
                        ("large" === D || ("default" === D && P)) && "text-lg",
                        ("base" === D || ("default" === D && !P)) && "text-base",
                      ),
                      children: u,
                    })
                  : null),
                (m[17] = P),
                (m[18] = D),
                (m[19] = u),
                (m[20] = i))
              : (i = m[20]))
          let W = "below-title" === S ? B : null
          ;(m[21] !== n || m[22] !== i || m[23] !== W
            ? ((s = (0, a.jsxs)("div", { className: n, children: [i, W] })),
              (m[21] = n),
              (m[22] = i),
              (m[23] = W),
              (m[24] = s))
            : (s = m[24]),
            m[25] !== p || m[26] !== x
              ? ((r = p
                  ? (0, a.jsx)("div", {
                      className: (0, c.A)("flex items-center gap-2", "end" === x && "self-end"),
                      children: p,
                    })
                  : null),
                (m[25] = p),
                (m[26] = x),
                (m[27] = r))
              : (r = m[27]))
          let I = "below-header" === S ? B : null
          return (
            m[28] !== t || m[29] !== s || m[30] !== r || m[31] !== I
              ? ((l = (0, a.jsxs)("div", { className: t, children: [s, r, I] })),
                (m[28] = t),
                (m[29] = s),
                (m[30] = r),
                (m[31] = I),
                (m[32] = l))
              : (l = m[32]),
            l
          )
        },
        Content: function (e) {
          let o,
            t,
            n = (0, d.c)(5),
            { children: i, className: s } = e
          return (
            n[0] !== s ? ((o = (0, c.A)("flex flex-col gap-1.5", s)), (n[0] = s), (n[1] = o)) : (o = n[1]),
            n[2] !== i || n[3] !== o
              ? ((t = (0, a.jsx)("div", { className: o, children: i })), (n[2] = i), (n[3] = o), (n[4] = t))
              : (t = n[4]),
            t
          )
        },
        Footer: function (e) {
          let o,
            t,
            n = (0, d.c)(6),
            { children: i, className: s, variant: r } = e,
            l =
              "action" === (void 0 === r ? "description" : r)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            n[0] !== s || n[1] !== l
              ? ((o = (0, c.A)("text-balance text-secondary", l, s)), (n[0] = s), (n[1] = l), (n[2] = o))
              : (o = n[2]),
            n[3] !== i || n[4] !== o
              ? ((t = (0, a.jsx)("div", { className: o, children: i })), (n[3] = i), (n[4] = o), (n[5] = t))
              : (t = n[5]),
            t
          )
        },
      },
    )
  },
  odCE(e, o, t) {
    var a = t("ABep"),
      d = t("QosV"),
      c = t("oyxz"),
      n = t("RNul")
    t.d(
      o,
      {},
      {
        j: function (e) {
          let o,
            t,
            i,
            s = (0, d.c)(5),
            { children: r } = e
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, a.jsx)(n.y, { className: "icon-xs shrink-0 text-secondary" })), (s[0] = o))
              : (o = s[0]),
            s[1] !== r
              ? ((t =
                  void 0 === r
                    ? (0, a.jsx)(c.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : r),
                (s[1] = r),
                (s[2] = t))
              : (t = s[2]),
            s[3] !== t
              ? ((i = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [o, (0, a.jsx)("span", { className: "text-balance", children: t })],
                })),
                (s[3] = t),
                (s[4] = i))
              : (i = s[4]),
            i
          )
        },
      },
    )
  },
  EjYe(e, o, t) {
    var a = t("ABep"),
      d = t("QosV"),
      c = t("bZug")
    t.d(
      o,
      {},
      {
        H: function (e) {
          let o,
            t,
            n = (0, d.c)(7),
            { children: i, content: s, contentId: r, expanded: l } = e
          return (
            n[0] !== s || n[1] !== r || n[2] !== l
              ? ((o = l ? (0, a.jsx)("div", { id: r, className: c.r, children: s }) : null),
                (n[0] = s),
                (n[1] = r),
                (n[2] = l),
                (n[3] = o))
              : (o = n[3]),
            n[4] !== i || n[5] !== o
              ? ((t = (0, a.jsxs)("div", { className: c.r, children: [i, o] })), (n[4] = i), (n[5] = o), (n[6] = t))
              : (t = n[6]),
            t
          )
        },
      },
    )
  },
  DDOY(e, o, t) {
    var a = t("Ywss"),
      d = t("iiZm")
    function c(e, o) {
      return "localizedText" in o ? o.localizedText : e.formatMessage(o, o.values)
    }
    t.d(
      o,
      {},
      {
        Xl: function (e, o, t) {
          let d = (0, a.Rr)(e),
            c = new URLSearchParams(d.search)
          for (let [e, o] of Object.entries(t ?? {})) c.set(e, o)
          return (0, a.AO)({ ...d, search: c.toString(), hash: o })
        },
        hz: c,
        s9: function (e, o, t) {
          let a = t.trim()
          return 0 === a.length
            ? []
            : e
                .flatMap((e) => {
                  let t = c(o, e.title),
                    n = (0, d.gr)(t, a),
                    i = (null == e.description ? "" : o.formatMessage(e.description))
                      .toLocaleLowerCase(o.locale)
                      .includes(a.toLocaleLowerCase(o.locale)),
                    s = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, d.gr)(c(o, e), a) > 0)
                  return 0 !== n || i || s
                    ? [
                        {
                          id: e.id,
                          label: t,
                          score: n,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, o) => o.score - e.score)
                .map(({ id: e, label: o, sectionSlug: t, path: a, searchParams: d }) => ({
                  id: e,
                  label: o,
                  sectionSlug: t,
                  ...(null == a ? {} : { path: a }),
                  searchParams: d,
                }))
        },
      },
    )
  },
  Bwkw(e, o, t) {
    var a = t("QosV"),
      d = t("zd8w"),
      c = t("GaA7")
    t.d(
      o,
      {},
      {
        R: function (e) {
          let o,
            t,
            n,
            i = (0, a.c)(12),
            { children: s, dictationKeys: r, allowsBareModifiers: l, onCapture: m, onCancel: u } = e,
            g = void 0 !== r && r,
            p = c.appServices?.shortcutCapture,
            [x, h] = (0, d.useState)(null == p),
            [f, M] = (0, d.useState)(!1),
            b = (0, d.useEffectEvent)(u),
            T = (0, d.useEffectEvent)(m)
          return (
            i[0] !== l || i[1] !== b || i[2] !== T || i[3] !== g
              ? ((o = () => {
                  let e
                  if (null == p) return
                  let o = !0
                  return (
                    (async () => {
                      try {
                        let t = await p.beginCapture()
                        if (!o) return void t?.[Symbol.dispose]()
                        if (null == t) return void b()
                        e = () => t[Symbol.dispose]()
                        let a = (l || g) && (await t.startBareModifierCapture(g ? "dictation-keys" : void 0))
                        if (!o) return
                        ;(M(a),
                          h(!0),
                          (async () => {
                            try {
                              for (; o;) {
                                let e = await t.nextShortcut()
                                if (!o) return
                                if (null == e) return void b()
                                T(e)
                              }
                            } catch {
                              o && b()
                            }
                          })(),
                          await t.waitForEnd(),
                          o && b())
                      } catch {
                        o && b()
                      }
                    })(),
                    () => {
                      ;((o = !1), e?.())
                    }
                  )
                }),
                (i[0] = l),
                (i[1] = b),
                (i[2] = T),
                (i[3] = g),
                (i[4] = o))
              : (o = i[4]),
            i[5] !== l || i[6] !== g ? ((t = [p, l, g]), (i[5] = l), (i[6] = g), (i[7] = t)) : (t = i[7]),
            (0, d.useEffect)(o, t),
            i[8] !== f || i[9] !== s || i[10] !== x
              ? ((n = x ? s(f) : null), (i[8] = f), (i[9] = s), (i[10] = x), (i[11] = n))
              : (n = i[11]),
            n
          )
        },
      },
    )
  },
}
//# sourceMappingURL=928366.784ad82eec.js.map
