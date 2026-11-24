export const __rspack_esm_ids = [58193]
export const __webpack_modules__ = {
  xYqX(e, t, o) {
    let a = {
      section: "pets",
      id: "pets-create-local",
      title: (0, o("Qgfj").zR)({ id: "settings.pets.custom.create.label", defaultMessage: "Create your own pet" }),
    }
    o.d(t, {}, { d: a })
  },
  WVWQ(e, t, o) {
    o.d(t, { j: () => v, I: () => w })
    var a = o("AGyq"),
      d = o("Qgfj"),
      n = o("CTWI")
    function i(e) {
      return { title: e.formatMessage(s.title), description: e.formatMessage(s.description) }
    }
    let s = (0, d.YK)({
      title: { id: "codex.command.composer.captureAppshot", defaultMessage: "Capture appshot" },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
      },
    })
    function c(e) {
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
    function p(e) {
      return Object.hasOwn(m, e)
    }
    let u = (0, d.YK)({
        title: { id: "codex.command.importExternalAgent", defaultMessage: "Import from other AI apps" },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
        },
      }),
      g = (0, d.YK)({
        title: { id: "codex.command.personalitySettings", defaultMessage: "Personality" },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
        },
      }),
      h = (0, d.zR)({ id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" }),
      x = (0, d.YK)({
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
      f = { ...x, "codex.command.importExternalAgent": u.title, "codex.command.personalitySettings": g.title },
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
        "codex.commandMenuTitle.toggleFileTreePanel": x["codex.commandMenuTitle.toggleFileTreePanel"],
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
        "codex.commandDescription.importExternalAgent": u.description,
        "codex.commandDescription.personalitySettings": g.description,
      }
    function w(e, t, o = !1) {
      if ("openOrbit" === e.id) return c(t).title
      if ("focusPageBlockControls" === e.id) return r(t).title
      if ("openAvatarOverlay" === e.id && o) return t.formatMessage(h)
      if ("composer.captureAppshot" === e.id) return i(t).title
      if ("titleIntlId" in e) {
        var a
        let o
        return y(f, e.titleIntlId)
          ? t.formatMessage(f[e.titleIntlId], { dot: "dot" })
          : null == (o = p((a = e.id)) ? m[a] : null)
            ? ""
            : t.formatMessage(o.title)
      }
      return t.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function v(e, t, o, d = !1) {
      var s
      let l
      if ("openOrbit" === e.id) return c(t)
      if ("focusPageBlockControls" === e.id) return r(t)
      if ("composer.captureAppshot" === e.id) return i(t)
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
      let u = (0, a.yF)(e)
          ? y(b, e.descriptionIntlId)
            ? t.formatMessage(b[e.descriptionIntlId], { appName: n.C, dot: "dot" })
            : null == (l = p((s = e.id)) ? m[s] : null)
              ? ""
              : t.formatMessage(l.description)
          : "",
        g = o?.title ?? w(e, t)
      return ("openAvatarOverlay" === e.id && d && (g = w(e, t, !0)), { title: g, description: o?.description ?? u })
    }
    function y(e, t) {
      return Object.hasOwn(e, t)
    }
  },
  CnsO(e, t, o) {
    var a = o("QosV"),
      d = o("zd8w")
    o.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            o,
            n = (0, a.c)(2),
            { children: i } = e,
            [s, c] = (0, d.useState)(!1)
          return (
            n[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = () => {
                  let e = window.setTimeout(() => c(!0), 200)
                  return () => window.clearTimeout(e)
                }),
                (o = []),
                (n[0] = t),
                (n[1] = o))
              : ((t = n[0]), (o = n[1])),
            (0, d.useEffect)(t, o),
            s ? i : null
          )
        },
      },
    )
  },
  okCa(e, t, o) {
    var a = o("ABep"),
      d = o("QosV"),
      n = o("on57"),
      i = o("zd8w"),
      s = o("Wf1j"),
      c = o("YwPh"),
      r = o("BrXf"),
      l = o("bVeK"),
      m = o("UxN3")
    o.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            o,
            p,
            u,
            g,
            h,
            x,
            f,
            M,
            b = (0, d.c)(70),
            {
              id: w,
              inputRef: v,
              className: y,
              "aria-activedescendant": T,
              "aria-autocomplete": D,
              "aria-controls": C,
              "aria-expanded": k,
              autoFocus: j,
              clearLabel: A,
              disabled: S,
              inputKey: P,
              inputRole: N,
              isClearable: O,
              label: R,
              maxLength: z,
              onFocus: G,
              onKeyDown: B,
              onSearchQueryChange: F,
              placeholder: I,
              readOnly: _,
              searchQuery: L,
              toolbarIconTone: E,
              trailingControl: W,
              variant: V,
            } = e,
            q = void 0 === O || O,
            U = void 0 === E ? "secondary" : E,
            Z = void 0 === V ? "default" : V,
            Y = (0, s.A)(),
            K = (0, i.useRef)(null),
            H = v ?? K,
            Q =
              "settings-dialog" === Z ||
              "catalog-compact" === Z ||
              "toolbar" === Z ||
              "toolbar-action" === Z ||
              "toolbar-compact" === Z ||
              "directory" === Z,
            $ =
              ("default" === Z || "settings" === Z) &&
              "h-page-search gap-2 border border-primary-outline bg-page-search px-2.5",
            X = "default" === Z && "rounded-full",
            J = "settings" === Z && "rounded-button-toolbar",
            ee = Q && "gap-2 border border-primary-outline text-sm leading-5",
            et = Q && "catalog-compact" !== Z && "rounded-full px-3",
            eo = "catalog-compact" === Z && "h-9 rounded-xl px-2",
            ea = Q && "directory" !== Z && "bg-transparent",
            ed = "directory" === Z && "h-9 bg-white dark:bg-(--gray-200)",
            en = "toolbar" === Z && "h-9",
            ei = "settings-dialog" === Z && "h-10",
            es = "toolbar-action" === Z && "h-token-button-composer",
            ec = "toolbar-compact" === Z && "h-8 browser:h-9",
            er =
              "sidebar" === Z &&
              "sidebar-item h-[var(--height-token-row)] bg-background-secondary-soft-alpha pe-[var(--padding-row-cell-x,var(--padding-row-x))]",
            el = "sidebar-header" === Z && "h-9 shrink-0 gap-2 rounded-full bg-background-secondary-soft-alpha px-3",
            em = "catalog" === Z && "h-14 gap-3 rounded-xl border border-primary-outline bg-surface px-5",
            ep =
              "catalog-filter" === Z && "h-12 gap-3 rounded-xl border border-primary-outline bg-surface-secondary px-4",
            eu =
              "discovery" === Z &&
              "h-12.5 gap-2 rounded-full border border-primary-outline bg-surface-card px-3 text-sm leading-5"
          b[0] !== y ||
          b[1] !== ea ||
          b[2] !== ed ||
          b[3] !== en ||
          b[4] !== ei ||
          b[5] !== es ||
          b[6] !== ec ||
          b[7] !== er ||
          b[8] !== el ||
          b[9] !== em ||
          b[10] !== ep ||
          b[11] !== eu ||
          b[12] !== $ ||
          b[13] !== X ||
          b[14] !== J ||
          b[15] !== ee ||
          b[16] !== et ||
          b[17] !== eo
            ? ((t = (0, n.A)(
                "no-drag flex items-center py-0 text-base leading-[18px]",
                $,
                X,
                J,
                ee,
                et,
                eo,
                ea,
                ed,
                en,
                ei,
                es,
                ec,
                er,
                el,
                em,
                ep,
                eu,
                y,
              )),
              (b[0] = y),
              (b[1] = ea),
              (b[2] = ed),
              (b[3] = en),
              (b[4] = ei),
              (b[5] = es),
              (b[6] = ec),
              (b[7] = er),
              (b[8] = el),
              (b[9] = em),
              (b[10] = ep),
              (b[11] = eu),
              (b[12] = $),
              (b[13] = X),
              (b[14] = J),
              (b[15] = ee),
              (b[16] = et),
              (b[17] = eo),
              (b[18] = t))
            : (t = b[18])
          let eg = "sidebar-header" === Z || void 0
          ;(b[19] !== Q || b[20] !== U || b[21] !== Z
            ? ((o =
                "sidebar" === Z
                  ? (0, a.jsx)(r.B, { icon: (0, a.jsx)(c.A, { className: "icon-sm text-secondary" }) })
                  : (0, a.jsxs)("span", {
                      className: "flex shrink-0 items-center justify-center",
                      children: [
                        Q &&
                          (0, a.jsx)(m.b5, {
                            icon: { 16: l.QmT, 20: l.zcw },
                            className: "tertiary" === U ? "text-tertiary" : "text-secondary",
                          }),
                        "discovery" === Z && (0, a.jsx)(l.zcw, {}),
                        !Q &&
                          "discovery" !== Z &&
                          ("sidebar-header" === Z
                            ? (0, a.jsx)(l.QmT, { className: "text-secondary" })
                            : (0, a.jsx)(c.A, { className: "icon-sm text-secondary" })),
                      ],
                    })),
              (b[19] = Q),
              (b[20] = U),
              (b[21] = Z),
              (b[22] = o))
            : (o = b[22]),
            b[23] !== w || b[24] !== R
              ? ((p = (0, a.jsx)("label", { className: "sr-only", htmlFor: w, children: R })),
                (b[23] = w),
                (b[24] = R),
                (b[25] = p))
              : (p = b[25]))
          let eh = "discovery" === Z ? "placeholder:text-default" : "placeholder:text-tertiary",
            ex = Q || "discovery" === Z ? "text-sm leading-5" : "text-base leading-[18px]",
            ef = "discovery" === Z && "tracking-[-0.15px] max-md:text-base"
          return (
            b[26] !== eh || b[27] !== ex || b[28] !== ef
              ? ((u = (0, n.A)(
                  "min-w-0 flex-1 bg-transparent text-default outline-none select-text [&::placeholder]:select-none",
                  eh,
                  ex,
                  ef,
                )),
                (b[26] = eh),
                (b[27] = ex),
                (b[28] = ef),
                (b[29] = u))
              : (u = b[29]),
            b[30] !== F
              ? ((g = (e) => {
                  F(e.target.value)
                }),
                (b[30] = F),
                (b[31] = g))
              : (g = b[31]),
            b[32] !== T ||
            b[33] !== D ||
            b[34] !== C ||
            b[35] !== k ||
            b[36] !== j ||
            b[37] !== S ||
            b[38] !== w ||
            b[39] !== P ||
            b[40] !== N ||
            b[41] !== z ||
            b[42] !== G ||
            b[43] !== B ||
            b[44] !== I ||
            b[45] !== _ ||
            b[46] !== H ||
            b[47] !== L ||
            b[48] !== u ||
            b[49] !== g
              ? ((h = (0, a.jsx)(
                  "input",
                  {
                    "aria-activedescendant": T,
                    "aria-autocomplete": D,
                    "aria-controls": C,
                    "aria-expanded": k,
                    autoFocus: j,
                    id: w,
                    ref: H,
                    className: u,
                    autoComplete: "off",
                    disabled: S,
                    maxLength: z,
                    readOnly: _,
                    role: N,
                    type: "text",
                    value: L,
                    onChange: g,
                    onFocus: G,
                    onKeyDown: B,
                    placeholder: I,
                  },
                  P,
                )),
                (b[32] = T),
                (b[33] = D),
                (b[34] = C),
                (b[35] = k),
                (b[36] = j),
                (b[37] = S),
                (b[38] = w),
                (b[39] = P),
                (b[40] = N),
                (b[41] = z),
                (b[42] = G),
                (b[43] = B),
                (b[44] = I),
                (b[45] = _),
                (b[46] = H),
                (b[47] = L),
                (b[48] = u),
                (b[49] = g),
                (b[50] = h))
              : (h = b[50]),
            b[51] !== A ||
            b[52] !== S ||
            b[53] !== Y ||
            b[54] !== q ||
            b[55] !== F ||
            b[56] !== H ||
            b[57] !== L ||
            b[58] !== Z
              ? ((x =
                  q && L.length > 0
                    ? (0, a.jsx)("button", {
                        disabled: S,
                        "aria-label":
                          A ?? Y.formatMessage({ id: "skills.pageSearchInput.clear", defaultMessage: "Clear search" }),
                        className: (0, n.A)(
                          "flex shrink-0 cursor-interaction items-center justify-center text-secondary hover:text-default",
                          "sidebar" === Z && "size-6",
                        ),
                        type: "button",
                        onClick: () => {
                          ;(H.current?.focus(), F(""))
                        },
                        children: (0, a.jsx)(l.YwO, {}),
                      })
                    : null),
                (b[51] = A),
                (b[52] = S),
                (b[53] = Y),
                (b[54] = q),
                (b[55] = F),
                (b[56] = H),
                (b[57] = L),
                (b[58] = Z),
                (b[59] = x))
              : (x = b[59]),
            b[60] !== W
              ? ((f = null == W ? null : (0, a.jsx)("div", { className: "flex shrink-0 items-center", children: W })),
                (b[60] = W),
                (b[61] = f))
              : (f = b[61]),
            b[62] !== t || b[63] !== eg || b[64] !== o || b[65] !== p || b[66] !== h || b[67] !== x || b[68] !== f
              ? ((M = (0, a.jsxs)("div", {
                  className: t,
                  "data-sidebar-header-search": eg,
                  children: [o, p, h, x, f],
                })),
                (b[62] = t),
                (b[63] = eg),
                (b[64] = o),
                (b[65] = p),
                (b[66] = h),
                (b[67] = x),
                (b[68] = f),
                (b[69] = M))
              : (M = b[69]),
            M
          )
        },
      },
    )
  },
  oFmV(e, t, o) {
    let a = (0, o("zd8w").createContext)(null)
    o.d(t, {}, { S: a })
  },
  Jh7B(e, t, o) {
    ;(o.r(t), o.d(t, { PetSettingsDialog: () => em }))
    var a = o("ABep"),
      d = o("QosV"),
      n = o("zd8w"),
      i = o("JNtf"),
      s = o("mUDD"),
      c = o("qmMi"),
      r = o("g2p6"),
      l = o("odCE"),
      m = o("ueRx"),
      p = o("QyE3"),
      u = o("iRMi"),
      g = o("FPUb"),
      h = o("ZII9"),
      x = o("CXCR"),
      f = o("ESTr")
    let M = (0, f.a)({
        name: "pet-egg-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 4.75, y: 2.083984, width: 22.5, height: 27.833984 },
          visualBounds: { x: 4.75, y: 2.083984, width: 22.5, height: 27.833984 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.75, y: 2.083984, width: 22.5, height: 27.833984 },
          center: { x: 16, y: 16.000976 },
          insets: { top: 2.083984, right: 4.75, bottom: 2.082032, left: 4.75 },
          anchors: { frame: { x: 16, y: 16 }, ink: { x: 16, y: 16.000976 }, foreground: { x: 16, y: 16.000976 } },
        },
        capabilities: ["icon"],
        body: '<path d="M17.0833 18.022V15.6027C17.0833 14.6454 17.859 13.8696 18.8163 13.8696C19.7736 13.8696 20.5494 14.6454 20.5494 15.6027V18.022C20.5491 18.979 19.7734 19.755 18.8163 19.755C17.8592 19.755 17.0836 18.979 17.0833 18.022Z" fill="currentColor"/> <path d="M11.4507 18.022V15.6027C11.4507 14.6454 12.2265 13.8696 13.1838 13.8696C14.1411 13.8696 14.9168 14.6454 14.9168 15.6027V18.022C14.9165 18.979 14.1409 19.755 13.1838 19.755C12.2266 19.755 11.451 18.979 11.4507 18.022Z" fill="currentColor"/> <path d="M24.75 18.5342C24.75 14.8526 23.4319 11.2977 21.6035 8.67383C20.6913 7.36477 19.6752 6.32129 18.6748 5.61523C17.6642 4.90207 16.7446 4.58398 16 4.58398C15.2554 4.58398 14.3358 4.90207 13.3252 5.61523C12.3248 6.32129 11.3087 7.36477 10.3965 8.67383C8.56814 11.2977 7.25 14.8526 7.25 18.5342C7.25009 23.434 10.6569 27.417 16 27.417C21.3431 27.417 24.7499 23.434 24.75 18.5342ZM27.25 18.5342C27.2499 24.6728 22.8615 29.917 16 29.917C9.13851 29.917 4.75009 24.6728 4.75 18.5342C4.75 14.2836 6.26014 10.2382 8.3457 7.24512C9.3903 5.746 10.6021 4.47677 11.8838 3.57227C13.1555 2.67484 14.5724 2.08398 16 2.08398C17.4276 2.08398 18.8445 2.67484 20.1162 3.57227C21.3979 4.47677 22.6097 5.746 23.6543 7.24512C25.7399 10.2382 27.25 14.2836 27.25 18.5342Z" fill="currentColor"/>',
      }),
      b = (0, f.a)({
        name: "pet-hatched-egg-regular-32",
        canvas: {
          width: 32,
          height: 32,
          viewBox: "0 0 32 32",
          frame: { x: 0, y: 0, width: 32, height: 32 },
          inkBounds: { x: 4.695313, y: 1.564453, width: 22.5, height: 28.353516 },
          visualBounds: { x: 4.695313, y: 1.564453, width: 22.5, height: 28.353516 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.695313, y: 1.564453, width: 22.5, height: 28.353516 },
          center: { x: 15.945313, y: 15.741211 },
          insets: { top: 1.564453, right: 4.804687, bottom: 2.082031, left: 4.695313 },
          anchors: {
            frame: { x: 16, y: 16 },
            ink: { x: 15.945313, y: 15.741211 },
            foreground: { x: 15.945313, y: 15.741211 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M10.8262 13.8623C11.336 13.206 12.2727 13.0957 12.918 13.5869L13.043 13.6934L15.9531 16.4521L18.9346 13.6865C19.5525 13.1132 20.5104 13.1664 21.0635 13.7744L21.168 13.9033L22.6406 15.9287L24.3047 14.21L24.3828 14.1338C25.1904 13.4095 26.53 13.7597 26.8223 14.8516L26.8477 14.9639L26.9268 15.3994C27.1003 16.4206 27.1953 17.4699 27.1953 18.5332C27.1952 24.6718 22.8068 29.917 15.9453 29.917C9.08386 29.917 4.69545 24.6718 4.69531 18.5332C4.69533 17.3211 4.81828 16.1267 5.04102 14.9717C5.27812 13.7439 6.78392 13.3665 7.59961 14.2344L9.20801 15.9453L10.8262 13.8623ZM10.4648 18.4023C9.89966 19.1298 8.81846 19.1809 8.1875 18.5098L7.23047 17.4922C7.20755 17.8377 7.19532 18.1851 7.19531 18.5332C7.19545 23.4329 10.6023 27.417 15.9453 27.417C21.2884 27.417 24.6952 23.4329 24.6953 18.5332C24.6953 18.1677 24.6815 17.8031 24.6562 17.4404L23.6094 18.5225C22.9614 19.1914 21.8663 19.1145 21.3184 18.3613L19.8096 16.2852L16.9678 18.9229C16.388 19.4607 15.4892 19.456 14.915 18.9121L12.123 16.2666L10.4648 18.4023Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M6.06934 5.32324C6.54397 4.82218 7.3347 4.80093 7.83594 5.27539L11.4941 8.73926C11.9952 9.21395 12.0166 10.0047 11.542 10.5059C11.0673 11.007 10.2766 11.0283 9.77539 10.5537L6.11719 7.08984C5.61622 6.61514 5.59477 5.82442 6.06934 5.32324Z" fill="currentColor"/> <path d="M24.1641 5.27539C24.6653 4.8008 25.456 4.82218 25.9307 5.32324C26.4053 5.82447 26.3839 6.61516 25.8828 7.08984L22.2246 10.5537C21.7234 11.0283 20.9327 11.007 20.458 10.5059C19.9835 10.0047 20.0049 9.21394 20.5059 8.73926L24.1641 5.27539Z" fill="currentColor"/> <path d="M16 1.56445C16.6904 1.56445 17.25 2.1241 17.25 2.81445V7.37402C17.25 8.06435 16.6903 8.62402 16 8.62402C15.3097 8.62396 14.75 8.06431 14.75 7.37402V2.81445C14.75 2.12414 15.3097 1.56452 16 1.56445Z" fill="currentColor"/>',
      })
    var w = o("xSOA"),
      v = o("on57"),
      y = o("Wf1j"),
      T = o("oyxz"),
      D = o("Ywss"),
      C = o("eFn4"),
      k = o("PPl1"),
      j = o("SqlE"),
      A = o("Sm6l"),
      S = o("bqtn"),
      P = o("HOLv"),
      N = o("bVeK"),
      O = o("Bbed"),
      R = o("SGsN"),
      z = o("Q8aV"),
      G = o("OWtl"),
      B = o("jxU8"),
      F = o("fSCS"),
      I = o("pO0d"),
      _ = o("I7Ou"),
      L = o("AWNZ"),
      E = o("LAI4"),
      W = o("akkX"),
      V = o("hZax"),
      q = o("aepO"),
      U = o("ripK"),
      Z = o("kK7d"),
      Y = o("Qgfj"),
      K = o("KPGh"),
      H = o("OAko"),
      Q = o("zLIa"),
      $ = o("m4Ag")
    function X(e) {
      let t,
        o,
        l,
        m,
        p,
        u,
        h,
        x,
        f,
        M,
        b,
        v,
        D,
        C,
        k,
        j,
        S,
        P,
        N,
        O,
        z,
        B,
        F,
        I,
        _,
        L,
        E,
        W,
        V,
        q,
        U,
        Y,
        H,
        X = (0, d.c)(99),
        { accountId: J, pet: eo, onClose: ea, onReturnFocus: ed } = e,
        en = (0, c.gh)(G.u),
        ei = (0, y.A)(),
        es = (0, n.useId)(),
        ec = (0, n.useId)(),
        er = (0, n.useId)(),
        el = (0, n.useId)(),
        em = (0, n.useId)(),
        [ep, eu] = (0, n.useState)(null)
      ;(X[0] !== J || X[1] !== ei || X[2] !== eo || X[3] !== en
        ? ((t = async (e) => {
            let { name: t, description: o, file: a } = e,
              d = en.query.snapshot($.lU)
            if (null != eo)
              return (
                await Z.CodexRequest.safePatch("/pets/{pet_id}", {
                  additionalHeaders: { "ChatGPT-Account-ID": J },
                  parameters: { path: { pet_id: eo.id } },
                  requestBody: { name: t, description: o || null },
                }),
                await d.invalidate(),
                !0
              )
            if (null == a) return !1
            let n = await (async function (e) {
              if ("image/png" !== e.type && "image/webp" !== e.type) return "type"
              if (e.size > 0x1400000) return "size"
              let t = URL.createObjectURL(e)
              try {
                let e = new Image()
                ;((e.src = t), await e.decode())
                let o = (0, g.Eu)(e.naturalWidth, e.naturalHeight)
                if (null == o) return "dimensions"
                let a = document.createElement("canvas")
                ;((a.width = e.naturalWidth), (a.height = e.naturalHeight))
                let d = a.getContext("2d", { willReadFrequently: !0 })
                if (null == d) return "unreadable"
                d.drawImage(e, 0, 0)
                let n = d.getImageData(0, 0, a.width, a.height).data
                for (let [e, t] of o.requiredFramesByRow.entries())
                  for (let a = 0; a < t; a += 1) {
                    let t = !1,
                      d = !1
                    for (let i = 0; i < o.cellHeight && !(t && d); i += 1)
                      for (let s = 0; s < o.cellWidth; s += 1) {
                        let c = n[((e * o.cellHeight + i) * o.width + a * o.cellWidth + s) * 4 + 3]
                        if (((t = t || c > 0), (d = d || c < 255), t && d)) break
                      }
                    if (!t || !d) return "frames"
                  }
                return null
              } catch {
                return "unreadable"
              } finally {
                URL.revokeObjectURL(t)
              }
            })(a)
            if (null != n) return (eu(ei.formatMessage(et[n])), !1)
            let { pet: i } = await (0, K.yd)(J, { name: t, description: o, file: a })
            await d.invalidate()
            try {
              en.get(r.Sk) === J && (await (0, $.Zi)(en, J, i.id))
            } catch {
              en.get(R.Id).danger(
                ei.formatMessage({
                  id: "settings.chatGpt.personalization.pet.upload.selectionFailed",
                  defaultMessage:
                    "Your pet was uploaded, but couldn\u2019t be selected. Select it from the picker to try again",
                }),
                { errorAnalytics: { toastId: "settings.chatGpt.personalization.pet.upload.selectionFailed" } },
              )
            }
            return !0
          }),
          (X[0] = J),
          (X[1] = ei),
          (X[2] = eo),
          (X[3] = en),
          (X[4] = t))
        : (t = X[4]),
        X[5] !== ea
          ? ((o = (e) => {
              e && ea()
            }),
            (X[5] = ea),
            (X[6] = o))
          : (o = X[6]),
        X[7] !== ei
          ? ((l = () =>
              eu(
                ei.formatMessage({
                  id: "settings.chatGpt.personalization.pet.save.error",
                  defaultMessage: "Couldn\u2019t save your pet. Please try again",
                }),
              )),
            (X[7] = ei),
            (X[8] = l))
          : (l = X[8]),
        X[9] !== t || X[10] !== o || X[11] !== l
          ? ((m = { mutationFn: t, onSuccess: o, onError: l }), (X[9] = t), (X[10] = o), (X[11] = l), (X[12] = m))
          : (m = X[12]))
      let { mutate: eg, isPending: eh } = (0, w.n)(m)
      ;(X[13] !== eo
        ? ((p = null == eo ? {} : { "aria-describedby": void 0 }), (X[13] = eo), (X[14] = p))
        : (p = X[14]),
        X[15] !== ed
          ? ((u =
              null == ed
                ? void 0
                : (e) => {
                    ;(e.preventDefault(), ed())
                  }),
            (X[15] = ed),
            (X[16] = u))
          : (u = X[16]),
        X[17] !== p || X[18] !== u
          ? ((h = { ...p, onCloseAutoFocus: u }), (X[17] = p), (X[18] = u), (X[19] = h))
          : (h = X[19]))
      let ex = !eh
      ;(X[20] !== eh || X[21] !== ea
        ? ((x = (e) => {
            e || eh || ea()
          }),
          (X[20] = eh),
          (X[21] = ea),
          (X[22] = x))
        : (x = X[22]),
        X[23] !== ei || X[24] !== eh || X[25] !== eg || X[26] !== eo
          ? ((f = (e) => {
              if ((e.preventDefault(), eh)) return
              eu(null)
              let t = new FormData(e.currentTarget),
                o = t.get("pet-name"),
                a = t.get("pet-description"),
                d = t.get("pet-spritesheet")
              "string" != typeof o || !o.trim() || o.trim().length > 80 || "string" != typeof a || a.trim().length > 500
                ? eu(
                    ei.formatMessage({
                      id: "settings.chatGpt.personalization.pet.fields.error",
                      defaultMessage: "Enter a name of up to 80 characters and a description of up to 500 characters",
                    }),
                  )
                : null != eo || (d instanceof File && 0 !== d.size)
                  ? eg({ name: o.trim(), description: a.trim(), file: d instanceof File ? d : null })
                  : eu(
                      ei.formatMessage({
                        id: "settings.chatGpt.personalization.pet.file.required",
                        defaultMessage: "Choose a sprite sheet to upload",
                      }),
                    )
            }),
            (X[23] = ei),
            (X[24] = eh),
            (X[25] = eg),
            (X[26] = eo),
            (X[27] = f))
          : (f = X[27]),
        X[28] !== eo
          ? ((M = (0, a.jsx)(s.OO, {
              children: (0, a.jsx)(s.c7, {
                title: (0, a.jsx)(i.L3, {
                  children:
                    null == eo
                      ? (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.upload.title",
                          defaultMessage: "Upload a pet",
                        })
                      : (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.edit.named.title",
                          defaultMessage: "Edit {petName}",
                          values: { petName: eo.name },
                        }),
                }),
              }),
            })),
            (X[28] = eo),
            (X[29] = M))
          : (M = X[29]),
        X[30] !== eo
          ? ((b =
              null == eo &&
              (0, a.jsx)(i.rr, {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.upload.description",
                  defaultMessage: "Add an animated companion for Work mode",
                }),
              })),
            (X[30] = eo),
            (X[31] = b))
          : (b = X[31]),
        X[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(T.A, { id: "settings.chatGpt.personalization.pet.name", defaultMessage: "Pet name" })),
            (X[32] = v))
          : (v = X[32]),
        X[33] !== es
          ? ((D = (0, a.jsx)("label", {
              className: "text-sm font-medium text-default select-none",
              htmlFor: es,
              children: v,
            })),
            (X[33] = es),
            (X[34] = D))
          : (D = X[34]))
      let ef = eo?.name
      ;(X[35] !== ei
        ? ((C = ei.formatMessage({
            id: "settings.chatGpt.personalization.pet.name.placeholder",
            defaultMessage: "Name your pet",
          })),
          (X[35] = ei),
          (X[36] = C))
        : (C = X[36]),
        X[37] !== eh || X[38] !== es || X[39] !== ef || X[40] !== C
          ? ((k = (0, a.jsx)(Q.pd, {
              id: es,
              autoComplete: "off",
              autoFocus: !0,
              defaultValue: ef,
              disabled: eh,
              maxLength: 80,
              name: "pet-name",
              placeholder: C,
              required: !0,
            })),
            (X[37] = eh),
            (X[38] = es),
            (X[39] = ef),
            (X[40] = C),
            (X[41] = k))
          : (k = X[41]),
        X[42] !== D || X[43] !== k
          ? ((j = (0, a.jsxs)(s.RW, { children: [D, k] })), (X[42] = D), (X[43] = k), (X[44] = j))
          : (j = X[44]),
        X[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(T.A, {
              id: "settings.chatGpt.personalization.pet.description",
              defaultMessage: "Pet description (optional)",
            })),
            (X[45] = S))
          : (S = X[45]),
        X[46] !== ec
          ? ((P = (0, a.jsx)("label", {
              className: "text-sm font-medium text-default select-none",
              htmlFor: ec,
              children: S,
            })),
            (X[46] = ec),
            (X[47] = P))
          : (P = X[47]))
      let eM = eo?.description
      return (
        X[48] !== ei
          ? ((N = ei.formatMessage({
              id: "settings.chatGpt.personalization.pet.description.placeholder",
              defaultMessage: "Describe your pet",
            })),
            (X[48] = ei),
            (X[49] = N))
          : (N = X[49]),
        X[50] !== er || X[51] !== ec || X[52] !== eh || X[53] !== eM || X[54] !== N
          ? ((O = (0, a.jsx)(Q.TM, {
              id: ec,
              "aria-describedby": er,
              autoComplete: "off",
              defaultValue: eM,
              disabled: eh,
              maxLength: 500,
              name: "pet-description",
              placeholder: N,
            })),
            (X[50] = er),
            (X[51] = ec),
            (X[52] = eh),
            (X[53] = eM),
            (X[54] = N),
            (X[55] = O))
          : (O = X[55]),
        X[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, a.jsx)(T.A, {
              id: "settings.chatGpt.personalization.pet.description.help",
              defaultMessage: "Up to 500 characters",
            })),
            (X[56] = z))
          : (z = X[56]),
        X[57] !== er
          ? ((B = (0, a.jsx)("p", { id: er, className: "text-xs text-tertiary", children: z })),
            (X[57] = er),
            (X[58] = B))
          : (B = X[58]),
        X[59] !== P || X[60] !== O || X[61] !== B
          ? ((F = (0, a.jsxs)(s.RW, { children: [P, O, B] })), (X[59] = P), (X[60] = O), (X[61] = B), (X[62] = F))
          : (F = X[62]),
        X[63] !== em || X[64] !== el || X[65] !== eh || X[66] !== eo
          ? ((I =
              null == eo &&
              (0, a.jsxs)(s.RW, {
                children: [
                  (0, a.jsx)("label", {
                    className: "text-sm font-medium text-default select-none",
                    htmlFor: el,
                    children: (0, a.jsx)(T.A, {
                      id: "settings.chatGpt.personalization.pet.file",
                      defaultMessage: "Sprite sheet",
                    }),
                  }),
                  (0, a.jsx)("input", {
                    id: el,
                    accept: "image/png,image/webp",
                    "aria-describedby": em,
                    className:
                      "w-full cursor-interaction rounded-lg border border-primary-outline p-2 text-sm text-default file:me-3 file:cursor-interaction file:rounded-md file:border-0 file:bg-surface-secondary file:px-3 file:py-1.5 file:text-default disabled:cursor-not-allowed disabled:opacity-40",
                    disabled: eh,
                    name: "pet-spritesheet",
                    required: !0,
                    type: "file",
                  }),
                  (0, a.jsx)("p", {
                    id: em,
                    className: "text-xs text-tertiary",
                    children: (0, a.jsx)(T.A, {
                      id: "settings.chatGpt.personalization.pet.file.help",
                      defaultMessage:
                        "Transparent PNG or WebP, 1536 \xd7 1872 (v1) or 1536 \xd7 2288 (v2) pixels, up to 20 MiB",
                    }),
                  }),
                ],
              })),
            (X[63] = em),
            (X[64] = el),
            (X[65] = eh),
            (X[66] = eo),
            (X[67] = I))
          : (I = X[67]),
        X[68] !== ep
          ? ((_ = null != ep && (0, a.jsx)("p", { className: "text-sm text-danger", role: "alert", children: ep })),
            (X[68] = ep),
            (X[69] = _))
          : (_ = X[69]),
        X[70] !== b || X[71] !== j || X[72] !== F || X[73] !== I || X[74] !== _
          ? ((L = (0, a.jsxs)(s.OO, { className: "gap-4", children: [b, j, F, I, _] })),
            (X[70] = b),
            (X[71] = j),
            (X[72] = F),
            (X[73] = I),
            (X[74] = _),
            (X[75] = L))
          : (L = X[75]),
        X[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(T.A, { ...ee.cancel })), (X[76] = E))
          : (E = X[76]),
        X[77] !== eh || X[78] !== ea
          ? ((W = (0, a.jsx)(A.$, { color: "secondary", disabled: eh, onClick: ea, type: "button", children: E })),
            (X[77] = eh),
            (X[78] = ea),
            (X[79] = W))
          : (W = X[79]),
        X[80] !== eo
          ? ((V =
              null == eo
                ? (0, a.jsx)(T.A, {
                    id: "settings.chatGpt.personalization.pet.upload.submit",
                    defaultMessage: "Upload",
                  })
                : (0, a.jsx)(T.A, { ...ee.save })),
            (X[80] = eo),
            (X[81] = V))
          : (V = X[81]),
        X[82] !== eh || X[83] !== V
          ? ((q = (0, a.jsx)(A.$, { color: "primary", loading: eh, type: "submit", children: V })),
            (X[82] = eh),
            (X[83] = V),
            (X[84] = q))
          : (q = X[84]),
        X[85] !== W || X[86] !== q
          ? ((U = (0, a.jsx)(s.OO, { children: (0, a.jsxs)(s.Es, { children: [W, q] }) })),
            (X[85] = W),
            (X[86] = q),
            (X[87] = U))
          : (U = X[87]),
        X[88] !== f || X[89] !== M || X[90] !== L || X[91] !== U
          ? ((Y = (0, a.jsxs)(s.R4, { as: "form", onSubmit: f, children: [M, L, U] })),
            (X[88] = f),
            (X[89] = M),
            (X[90] = L),
            (X[91] = U),
            (X[92] = Y))
          : (Y = X[92]),
        X[93] !== eh || X[94] !== Y || X[95] !== h || X[96] !== ex || X[97] !== x
          ? ((H = (0, a.jsx)(i.lG, {
              open: !0,
              contentProps: h,
              showDialogClose: ex,
              shouldIgnoreClickOutside: eh,
              size: "compact",
              variant: "chatgpt",
              onOpenChange: x,
              children: Y,
            })),
            (X[93] = eh),
            (X[94] = Y),
            (X[95] = h),
            (X[96] = ex),
            (X[97] = x),
            (X[98] = H))
          : (H = X[98]),
        H
      )
    }
    function J(e) {
      let t,
        o,
        l,
        m,
        p,
        u,
        g,
        h,
        x,
        f,
        M,
        b,
        v,
        D,
        C,
        k,
        j,
        S,
        P,
        N,
        O,
        R,
        z,
        B = (0, d.c)(89),
        { accountId: F, action: I, pet: _, onClose: L } = e,
        E = (0, c.gh)(G.u),
        V = (0, y.A)(),
        { data: U } = (0, H.YL)(),
        [Y, K] = (0, n.useState)(null)
      ;(B[0] !== F || B[1] !== I || B[2] !== _ || B[3] !== E
        ? ((t = async () => {
            let e = E.query.snapshot($.lU),
              t = E.query.snapshot(r.s6),
              o = { additionalHeaders: { "ChatGPT-Account-ID": F }, parameters: { path: { pet_id: _.id } } },
              a = null
            return (
              "share" === I
                ? (a = (await Z.CodexRequest.safePost("/pets/{pet_id}/share", o)).share_url)
                : "unshare" === I
                  ? await Z.CodexRequest.safeDelete("/pets/{pet_id}/share", o)
                  : await Z.CodexRequest.safeDelete("/pets/{pet_id}", o),
              await Promise.all([e.invalidate(), t.invalidate()]),
              a
            )
          }),
          (B[0] = F),
          (B[1] = I),
          (B[2] = _),
          (B[3] = E),
          (B[4] = t))
        : (t = B[4]),
        B[5] !== L
          ? ((o = (e) => {
              null == e ? L() : K(e)
            }),
            (B[5] = L),
            (B[6] = o))
          : (o = B[6]),
        B[7] !== t || B[8] !== o
          ? ((l = { mutationFn: t, onSuccess: o }), (B[7] = t), (B[8] = o), (B[9] = l))
          : (l = B[9]))
      let { mutate: X, isPending: J, isError: et } = (0, w.n)(l),
        eo = !J
      return (
        B[10] !== J || B[11] !== L
          ? ((m = (e) => {
              e || J || L()
            }),
            (B[10] = J),
            (B[11] = L),
            (B[12] = m))
          : (m = B[12]),
        B[13] !== J || B[14] !== X || B[15] !== Y
          ? ((p = (e) => {
              ;(e.preventDefault(), J || null != Y || X())
            }),
            (B[13] = J),
            (B[14] = X),
            (B[15] = Y),
            (B[16] = p))
          : (p = B[16]),
        B[17] !== I || B[18] !== _
          ? ((u =
              "delete" === I &&
              (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.delete.title",
                defaultMessage: "Delete {petName}?",
                values: { petName: _.name },
              })),
            (B[17] = I),
            (B[18] = _),
            (B[19] = u))
          : (u = B[19]),
        B[20] !== I || B[21] !== _
          ? ((g =
              "unshare" === I &&
              (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.unshare.title",
                defaultMessage: "Stop sharing {petName}?",
                values: { petName: _.name },
              })),
            (B[20] = I),
            (B[21] = _),
            (B[22] = g))
          : (g = B[22]),
        B[23] !== I || B[24] !== _ || B[25] !== Y
          ? ((h =
              "share" === I &&
              null == Y &&
              (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.share.title",
                defaultMessage: "Share {petName}?",
                values: { petName: _.name },
              })),
            (B[23] = I),
            (B[24] = _),
            (B[25] = Y),
            (B[26] = h))
          : (h = B[26]),
        B[27] !== I || B[28] !== _ || B[29] !== Y
          ? ((x =
              "share" === I &&
              null != Y &&
              (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.share.success.title",
                defaultMessage: "{petName} is shared",
                values: { petName: _.name },
              })),
            (B[27] = I),
            (B[28] = _),
            (B[29] = Y),
            (B[30] = x))
          : (x = B[30]),
        B[31] !== x || B[32] !== u || B[33] !== g || B[34] !== h
          ? ((f = (0, a.jsx)(s.OO, {
              children: (0, a.jsx)(s.c7, { title: (0, a.jsxs)(i.L3, { children: [u, g, h, x] }) }),
            })),
            (B[31] = x),
            (B[32] = u),
            (B[33] = g),
            (B[34] = h),
            (B[35] = f))
          : (f = B[35]),
        B[36] !== I || B[37] !== _
          ? ((M =
              "delete" === I &&
              (0, a.jsx)(i.rr, {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.delete.description",
                  defaultMessage: "This permanently deletes {petName} and its uploaded sprite sheet",
                  values: { petName: _.name },
                }),
              })),
            (B[36] = I),
            (B[37] = _),
            (B[38] = M))
          : (M = B[38]),
        B[39] !== I || B[40] !== _
          ? ((b =
              "unshare" === I &&
              (0, a.jsx)(i.rr, {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.unshare.description",
                  defaultMessage:
                    "The current link to {petName} will stop working. People who already adopted this pet will keep their copies",
                  values: { petName: _.name },
                }),
              })),
            (B[39] = I),
            (B[40] = _),
            (B[41] = b))
          : (b = B[41]),
        B[42] !== U?.structure || B[43] !== I || B[44] !== _ || B[45] !== Y
          ? ((v =
              "share" === I &&
              null == Y &&
              U?.structure === "workspace" &&
              (0, a.jsx)(i.rr, {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.share.workspace",
                  defaultMessage:
                    "People in your workspace with the link can view and adopt {petName}, following the same rules as shared conversations. Your name and account information will not be shown",
                  values: { petName: _.name },
                }),
              })),
            (B[42] = U?.structure),
            (B[43] = I),
            (B[44] = _),
            (B[45] = Y),
            (B[46] = v))
          : (v = B[46]),
        B[47] !== U?.structure || B[48] !== I || B[49] !== _ || B[50] !== Y
          ? ((D =
              "share" === I &&
              null == Y &&
              U?.structure === "personal" &&
              (0, a.jsx)(i.rr, {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.share.personal",
                  defaultMessage:
                    "Anyone with the link can view and adopt {petName}. Your name and account information will not be shown",
                  values: { petName: _.name },
                }),
              })),
            (B[47] = U?.structure),
            (B[48] = I),
            (B[49] = _),
            (B[50] = Y),
            (B[51] = D))
          : (D = B[51]),
        B[52] !== V || B[53] !== Y
          ? ((C =
              null != Y &&
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, a.jsx)(i.rr, {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(T.A, {
                      id: "settings.chatGpt.personalization.pet.share.success.description",
                      defaultMessage: "Share this link so others can meet and adopt your pet",
                    }),
                  }),
                  (0, a.jsx)(Q.pd, {
                    "aria-label": V.formatMessage({
                      id: "settings.chatGpt.personalization.pet.share.link",
                      defaultMessage: "Pet share link",
                    }),
                    readOnly: !0,
                    value: Y,
                  }),
                ],
              })),
            (B[52] = V),
            (B[53] = Y),
            (B[54] = C))
          : (C = B[54]),
        B[55] !== et
          ? ((k =
              et &&
              (0, a.jsx)("p", {
                className: "text-sm text-danger",
                role: "alert",
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.action.error",
                  defaultMessage: "Something went wrong. Please try again",
                }),
              })),
            (B[55] = et),
            (B[56] = k))
          : (k = B[56]),
        B[57] !== M || B[58] !== b || B[59] !== v || B[60] !== D || B[61] !== C || B[62] !== k
          ? ((j = (0, a.jsxs)(s.OO, { className: "gap-3", children: [M, b, v, D, C, k] })),
            (B[57] = M),
            (B[58] = b),
            (B[59] = v),
            (B[60] = D),
            (B[61] = C),
            (B[62] = k),
            (B[63] = j))
          : (j = B[63]),
        B[64] !== Y
          ? ((S =
              null == Y
                ? (0, a.jsx)(T.A, { ...ee.cancel })
                : (0, a.jsx)(T.A, { id: "settings.chatGpt.personalization.pet.share.done", defaultMessage: "Done" })),
            (B[64] = Y),
            (B[65] = S))
          : (S = B[65]),
        B[66] !== J || B[67] !== L || B[68] !== S
          ? ((P = (0, a.jsx)(A.$, { color: "secondary", disabled: J, onClick: L, type: "button", children: S })),
            (B[66] = J),
            (B[67] = L),
            (B[68] = S),
            (B[69] = P))
          : (P = B[69]),
        B[70] !== U || B[71] !== I || B[72] !== J || B[73] !== E || B[74] !== Y
          ? ((N =
              null != Y
                ? (0, a.jsx)(A.$, {
                    color: "primary",
                    onClick: () => {
                      ;(0, q.lW)(Y).then((e) => {
                        e && (0, W.o)(E)
                      })
                    },
                    type: "button",
                    children: (0, a.jsx)(T.A, {
                      id: "settings.chatGpt.personalization.pet.share.copy",
                      defaultMessage: "Copy link",
                    }),
                  })
                : (0, a.jsxs)(A.$, {
                    color: "share" === I ? "primary" : "dangerSolid",
                    disabled: "share" === I && null == U,
                    loading: J,
                    type: "submit",
                    children: [
                      "delete" === I &&
                        (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.delete.confirm",
                          defaultMessage: "Delete",
                        }),
                      "unshare" === I &&
                        (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.unshare.confirm",
                          defaultMessage: "Stop sharing",
                        }),
                      "share" === I &&
                        (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.share.confirm",
                          defaultMessage: "Share",
                        }),
                    ],
                  })),
            (B[70] = U),
            (B[71] = I),
            (B[72] = J),
            (B[73] = E),
            (B[74] = Y),
            (B[75] = N))
          : (N = B[75]),
        B[76] !== P || B[77] !== N
          ? ((O = (0, a.jsx)(s.OO, { children: (0, a.jsxs)(s.Es, { children: [P, N] }) })),
            (B[76] = P),
            (B[77] = N),
            (B[78] = O))
          : (O = B[78]),
        B[79] !== f || B[80] !== j || B[81] !== O || B[82] !== p
          ? ((R = (0, a.jsxs)(s.R4, { as: "form", onSubmit: p, children: [f, j, O] })),
            (B[79] = f),
            (B[80] = j),
            (B[81] = O),
            (B[82] = p),
            (B[83] = R))
          : (R = B[83]),
        B[84] !== J || B[85] !== R || B[86] !== eo || B[87] !== m
          ? ((z = (0, a.jsx)(i.lG, {
              open: !0,
              showDialogClose: eo,
              shouldIgnoreClickOutside: J,
              size: "compact",
              variant: "chatgpt",
              onOpenChange: m,
              children: R,
            })),
            (B[84] = J),
            (B[85] = R),
            (B[86] = eo),
            (B[87] = m),
            (B[88] = z))
          : (z = B[88]),
        z
      )
    }
    let ee = (0, Y.YK)({
        cancel: { id: "settings.chatGpt.personalization.pet.cancel", defaultMessage: "Cancel" },
        save: { id: "settings.chatGpt.personalization.pet.save", defaultMessage: "Save" },
      }),
      et = (0, Y.YK)({
        type: {
          id: "settings.chatGpt.personalization.pet.file.error.type",
          defaultMessage: "Choose a PNG or WebP image",
        },
        size: {
          id: "settings.chatGpt.personalization.pet.file.error.size",
          defaultMessage: "Choose an image no larger than 20 MiB",
        },
        dimensions: {
          id: "settings.chatGpt.personalization.pet.file.error.dimensions",
          defaultMessage: "Use a 1536 \xd7 1872 (v1) or 1536 \xd7 2288 (v2) pixel sprite sheet",
        },
        frames: {
          id: "settings.chatGpt.personalization.pet.file.error.frames",
          defaultMessage: "Each required animation frame must contain pet artwork and a transparent background",
        },
        unreadable: {
          id: "settings.chatGpt.personalization.pet.file.error.unreadable",
          defaultMessage: "Couldn\u2019t read this image. Choose another file",
        },
      })
    var eo = o("CKur"),
      ea = o("jAnS")
    let ed = (0, O._)(async () => (await o.e(292520).then(o.bind(o, "ztWh"))).PetCreationUpsellModal)
    function en(e) {
      let t,
        l,
        m,
        p,
        g,
        x,
        f,
        v,
        k,
        S,
        N,
        O,
        z,
        W,
        q,
        U,
        Z,
        Y,
        K,
        H,
        Q,
        J,
        ee,
        et,
        en,
        ec,
        er = (0, d.c)(112),
        { accountId: el, embedded: em, onNavigate: ep } = e,
        eu = void 0 !== em && em,
        eg = (0, c.gh)(G.u),
        eh = (0, y.A)(),
        ex = (0, D.Zp)(),
        ef = (0, c.Ul)(C.lN),
        eM = "allowed" === ef.status,
        eb = (0, c.Ul)(F.q),
        ew = !eu,
        ev = "denied" === ef.status && "free-plan" === ef.reason,
        ey = (0, n.useRef)(null),
        [eT, eD] = (0, n.useState)(!1),
        [eC, ek] = (0, n.useState)(!1),
        [ej, eA] = (0, n.useState)(!1),
        { data: eS } = (0, c.Ul)(r.s6),
        { data: eP, isPending: eN, isError: eO, isFetching: eR, refetch: ez } = (0, c.Ul)($.lU),
        eG = eP?.pets.filter(ei) ?? [],
        eB = (0, V.Zj)(eG.length > 0 && "1665452992"),
        eF = (0, V.Ou)("1658802482")
      er[0] !== eB || er[1] !== eF
        ? ((t = eB && !eF.get("disable_sharing", !1)), (er[0] = eB), (er[1] = eF), (er[2] = t))
        : (t = er[2])
      let eI = t
      ;(er[3] !== el || er[4] !== eg
        ? ((l = (e) => (0, $.Zi)(eg, el, e)), (er[3] = el), (er[4] = eg), (er[5] = l))
        : (l = er[5]),
        er[6] !== eh || er[7] !== eg
          ? ((m = () =>
              eg
                .get(R.Id)
                .danger(
                  eh.formatMessage({
                    id: "settings.chatGpt.personalization.pet.selection.error",
                    defaultMessage: "Couldn\u2019t select your pet. Please try again",
                  }),
                  { errorAnalytics: { toastId: "settings.chatGpt.personalization.pet.selection.error" } },
                )),
            (er[6] = eh),
            (er[7] = eg),
            (er[8] = m))
          : (m = er[8]),
        er[9] !== l || er[10] !== m
          ? ((p = { mutationFn: l, onError: m }), (er[9] = l), (er[10] = m), (er[11] = p))
          : (p = er[11]))
      let { mutate: e_, isPending: eL } = (0, w.n)(p)
      er[12] !== eP || er[13] !== eS?.accessoryId
        ? ((g = (0, $.OT)(eS?.accessoryId)),
          null != eP && g.startsWith("pet_") && !eP.pets.some((e) => e.id === g) && (g = "default"),
          (er[12] = eP),
          (er[13] = eS?.accessoryId),
          (er[14] = g))
        : (g = er[14])
      let eE = (0, c.Ul)($.EC),
        eW = null != eS,
        eV = (0, n.useRef)(!1)
      er[15] !== eg || er[16] !== g
        ? ((x = () => {
            ;((0, $.q3)(eg, u.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED, g),
              (0, $.q3)(eg, u.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPENED))
          }),
          (er[15] = eg),
          (er[16] = g),
          (er[17] = x))
        : (x = er[17])
      let eq = (0, n.useEffectEvent)(x)
      ;(er[18] !== eW || er[19] !== eq
        ? ((f = () => {
            eW && !eV.current && ((eV.current = !0), eq())
          }),
          (er[18] = eW),
          (er[19] = eq),
          (er[20] = f))
        : (f = er[20]),
        er[21] !== eW ? ((v = [eW]), (er[21] = eW), (er[22] = v)) : (v = er[22]),
        (0, n.useEffect)(f, v),
        er[23] !== eM || er[24] !== eu || er[25] !== eg
          ? ((k =
              eM &&
              (0, a.jsxs)(A.$, {
                id: "chatgpt-pet-upload",
                ref: ey,
                color: "outlineSurface",
                size: eu ? "actionSm" : "toolbar",
                onClick: () => {
                  ;((0, $.q3)(eg, u.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED),
                    eD(!0))
                },
                children: [
                  (0, a.jsx)(P.I, { asset: h.U }),
                  (0, a.jsx)(T.A, { id: "settings.chatGpt.personalization.pet.upload", defaultMessage: "Upload pet" }),
                ],
              })),
            (er[23] = eM),
            (er[24] = eu),
            (er[25] = eg),
            (er[26] = k))
          : (k = er[26]))
      let eU = k
      er[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, a.jsx)(T.A, {
            id: "settings.chatGpt.personalization.pet.pickerTitle",
            defaultMessage: "Choose your pet",
          })),
          (er[27] = S))
        : (S = er[27])
      let eZ = S,
        eY = ew ? F.Bc.options.id : void 0,
        eK = ew ? F.Bc.options.id : void 0,
        eH = ew ? -1 : void 0
      er[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (0, a.jsx)("legend", {
            className: "sr-only",
            children: (0, a.jsx)(I.Ct, { title: F.Bc.options.title }),
          })),
          (er[28] = N))
        : (N = er[28])
      let eQ = E.r
      ;(er[29] !== el ||
      er[30] !== ew ||
      er[31] !== eh ||
      er[32] !== ej ||
      er[33] !== eL ||
      er[34] !== ex ||
      er[35] !== ep ||
      er[36] !== eg ||
      er[37] !== eb ||
      er[38] !== ev
        ? ((O =
            eb &&
            (0, a.jsx)(I.kk, {
              entry: F.Bc.create,
              anchored: ew,
              className: "min-h-19",
              disabled: eL || ej,
              edgeRounding: "none",
              icon: (0, a.jsxs)("span", {
                className: "flex size-10 shrink-0 items-center justify-center",
                children: [
                  (0, a.jsx)(P.I, { asset: M, className: "group-hover:hidden" }),
                  (0, a.jsx)(P.I, { asset: b, className: "hidden group-hover:block" }),
                ],
              }),
              description: (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.create.description",
                defaultMessage: "Describe what you want, and ChatGPT will make it for you",
              }),
              onClick: () => {
                ;((0, $.q3)(eg, u.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED), ev)
                  ? ek(!0)
                  : (eA(!0),
                    (async function (e, t, a, d, n) {
                      try {
                        let { submitChatGPTCompletion: i } = await Promise.resolve().then(o.bind(o, "QBVt")),
                          s = await e.query.fetch(eo.av)
                        if (e.get(r.Sk) !== t) return
                        await i(e, {
                          conversationOrigin: "tpp",
                          model: s.defaultModelSlug,
                          thinkingEffort: "min",
                          serviceTier: "fast",
                          prompt: a.formatMessage({
                            id: "chatgpt.tpp.onboarding.mock_setup.choose_pet.prompt.user_request",
                            defaultMessage: "Help me setup my pet",
                          }),
                          messageMetadata: { starter_prompt_id: "tpp-onboarding-mock-setup-pet" },
                          onClientThreadIdChange: (e) => {
                            ;(n?.(), d((0, ea.mv)(e)))
                          },
                          onServerThreadIdChange: (e) => {
                            d((0, ea.mv)(e), { replace: !0 })
                          },
                        })
                      } catch {
                        e.get(R.Id).danger(
                          a.formatMessage({
                            id: "settings.chatGpt.personalization.pet.create.error",
                            defaultMessage: "Couldn\u2019t start pet creation. Please try again",
                          }),
                          { errorAnalytics: { toastId: "settings.chatGpt.personalization.pet.create.error" } },
                        )
                      }
                    })(eg, el, eh, ex, ep).finally(() => eA(!1)))
              },
            })),
          (er[29] = el),
          (er[30] = ew),
          (er[31] = eh),
          (er[32] = ej),
          (er[33] = eL),
          (er[34] = ex),
          (er[35] = ep),
          (er[36] = eg),
          (er[37] = eb),
          (er[38] = ev),
          (er[39] = O))
        : (O = er[39]),
        er[40] !== eN
          ? ((z =
              eN &&
              (0, a.jsx)(_.u, {
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.loading",
                  defaultMessage: "Loading custom pets\u2026",
                }),
              })),
            (er[40] = eN),
            (er[41] = z))
          : (z = er[41]),
        er[42] !== eO || er[43] !== eR || er[44] !== ez
          ? ((W =
              eO &&
              (0, a.jsx)(L.ic, {
                label: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.loadError",
                  defaultMessage: "Couldn\u2019t load your custom pets",
                }),
                control: (0, a.jsx)(A.$, {
                  loading: eR,
                  onClick: () => void ez(),
                  children: (0, a.jsx)(T.A, {
                    id: "settings.chatGpt.personalization.pet.retry",
                    defaultMessage: "Retry",
                  }),
                }),
              })),
            (er[42] = eO),
            (er[43] = eR),
            (er[44] = ez),
            (er[45] = W))
          : (W = er[45]),
        er[46] !== el ||
        er[47] !== eI ||
        er[48] !== eR ||
        er[49] !== eL ||
        er[50] !== ep ||
        er[51] !== ez ||
        er[52] !== e_ ||
        er[53] !== g ||
        er[54] !== eS ||
        er[55] !== eE
          ? ((q = (e) =>
              (0, a.jsx)(
                es,
                {
                  accountId: el,
                  canShare: eI,
                  onNavigate: ep,
                  pet: e,
                  selection: e.id,
                  title: e.name,
                  description: (0, $.U7)(e)
                    ? e.description
                    : (0, a.jsx)(T.A, {
                        id: "settings.chatGpt.personalization.pet.unavailable",
                        defaultMessage: "This pet\u2019s artwork is unavailable",
                      }),
                  checked: g === e.id,
                  disabled: eL || null == eS || !(0, $.U7)(e) || eE,
                  onSelect: () => e_(e.id),
                  onRefresh:
                    eE && !eR
                      ? () => {
                          ez()
                        }
                      : void 0,
                },
                e.id,
              )),
            (er[46] = el),
            (er[47] = eI),
            (er[48] = eR),
            (er[49] = eL),
            (er[50] = ep),
            (er[51] = ez),
            (er[52] = e_),
            (er[53] = g),
            (er[54] = eS),
            (er[55] = eE),
            (er[56] = q))
          : (q = er[56]))
      let e$ = eG.map(q)
      ;(er[57] !== el || er[58] !== eL || er[59] !== e_ || er[60] !== g || er[61] !== eS
        ? ((U = j.B4.map((e) =>
            (0, a.jsx)(
              es,
              {
                accountId: el,
                selection: e.id,
                title: e.displayName,
                description:
                  "rocky" === e.id
                    ? (0, a.jsx)(T.A, {
                        id: "settings.chatGpt.personalization.pet.rocky.description",
                        defaultMessage: "A steady rock for when the inbox gets out of control",
                      })
                    : e.description,
                checked: g === e.id,
                disabled: eL || null == eS,
                onSelect: () => e_(e.id),
              },
              e.id,
            ),
          )),
          (er[57] = el),
          (er[58] = eL),
          (er[59] = e_),
          (er[60] = g),
          (er[61] = eS),
          (er[62] = U))
        : (U = er[62]),
        er[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)(T.A, {
              id: "settings.chatGpt.personalization.pet.none",
              defaultMessage: "Do not show pet",
            })),
            (er[63] = Z))
          : (Z = er[63]))
      let eX = "default" === g,
        eJ = eL || null == eS
      ;(er[64] !== e_ ? ((Y = () => e_("default")), (er[64] = e_), (er[65] = Y)) : (Y = er[65]),
        er[66] !== el || er[67] !== eX || er[68] !== eJ || er[69] !== Y
          ? ((K = (0, a.jsx)(es, {
              accountId: el,
              selection: "default",
              title: Z,
              checked: eX,
              disabled: eJ,
              onSelect: Y,
            })),
            (er[66] = el),
            (er[67] = eX),
            (er[68] = eJ),
            (er[69] = Y),
            (er[70] = K))
          : (K = er[70]),
        er[71] !== eQ || er[72] !== O || er[73] !== z || er[74] !== W || er[75] !== e$ || er[76] !== U || er[77] !== K
          ? ((H = (0, a.jsxs)(eQ, { variant: "interactive", children: [O, z, W, e$, U, K] })),
            (er[71] = eQ),
            (er[72] = O),
            (er[73] = z),
            (er[74] = W),
            (er[75] = e$),
            (er[76] = U),
            (er[77] = K),
            (er[78] = H))
          : (H = er[78]),
        er[79] !== eL || er[80] !== eY || er[81] !== eK || er[82] !== eH || er[83] !== N || er[84] !== H
          ? ((Q = (0, a.jsxs)("fieldset", {
              "aria-busy": eL,
              className: "min-w-0",
              disabled: eL,
              id: eY,
              "data-settings-search-entry": eK,
              tabIndex: eH,
              children: [N, H],
            })),
            (er[79] = eL),
            (er[80] = eY),
            (er[81] = eK),
            (er[82] = eH),
            (er[83] = N),
            (er[84] = H),
            (er[85] = Q))
          : (Q = er[85]),
        er[86] !== eC || er[87] !== ep || er[88] !== ev
          ? ((J = eC && ev && (0, a.jsx)(ed, { onClose: () => ek(!1), onNavigate: ep })),
            (er[86] = eC),
            (er[87] = ep),
            (er[88] = ev),
            (er[89] = J))
          : (J = er[89]),
        er[90] !== el || er[91] !== eT
          ? ((ee =
              eT && (0, a.jsx)(X, { accountId: el, onClose: () => eD(!1), onReturnFocus: () => ey.current?.focus() })),
            (er[90] = el),
            (er[91] = eT),
            (er[92] = ee))
          : (ee = er[92]),
        er[93] !== Q || er[94] !== J || er[95] !== ee
          ? ((et = (0, a.jsxs)(a.Fragment, { children: [Q, J, ee] })),
            (er[93] = Q),
            (er[94] = J),
            (er[95] = ee),
            (er[96] = et))
          : (et = er[96]))
      let e1 = et
      if (eu) {
        let e, t, o, d
        return (
          er[97] !== eZ
            ? ((e = (0, a.jsx)(s.c7, { title: (0, a.jsx)(i.L3, { className: "select-none", children: eZ }) })),
              (er[97] = eZ),
              (er[98] = e))
            : (e = er[98]),
          er[99] !== e || er[100] !== eU
            ? ((t = (0, a.jsx)(s.OO, {
                children: (0, a.jsxs)("div", {
                  className: "flex items-center justify-between gap-3 pe-8",
                  children: [e, eU],
                }),
              })),
              (er[99] = e),
              (er[100] = eU),
              (er[101] = t))
            : (t = er[101]),
          er[102] !== e1
            ? ((o = (0, a.jsx)(s.OO, {
                className: "min-h-0 flex-1",
                children: (0, a.jsx)("div", { className: "-mx-5 min-h-0 flex-1 overflow-y-auto px-5", children: e1 }),
              })),
              (er[102] = e1),
              (er[103] = o))
            : (o = er[103]),
          er[104] !== t || er[105] !== o
            ? ((d = (0, a.jsxs)(a.Fragment, { children: [t, o] })), (er[104] = t), (er[105] = o), (er[106] = d))
            : (d = er[106]),
          d
        )
      }
      return (
        er[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, a.jsx)(T.A, {
              id: "settings.pets.choice.overview",
              defaultMessage: "Pick a companion or add one of your own",
            })),
            (er[107] = en))
          : (en = er[107]),
        er[108] !== e1 || er[109] !== eZ || er[110] !== eU
          ? ((ec = (0, a.jsx)(B.P, { overview: en, title: eZ, action: eU, children: e1 })),
            (er[108] = e1),
            (er[109] = eZ),
            (er[110] = eU),
            (er[111] = ec))
          : (ec = er[111]),
        ec
      )
    }
    function ei(e) {
      return e.id.startsWith("pet_")
    }
    function es(e) {
      let t,
        o,
        i,
        s,
        c,
        r,
        l,
        m,
        p,
        u,
        g,
        h,
        f,
        M,
        b = (0, d.c)(49),
        {
          accountId: w,
          canShare: D,
          pet: C,
          selection: k,
          title: j,
          description: S,
          checked: O,
          disabled: R,
          onSelect: z,
          onRefresh: G,
          onNavigate: B,
        } = e,
        F = void 0 !== D && D,
        I = (0, n.useId)(),
        _ = (0, y.A)(),
        E = !R && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover"
      b[0] !== E ? ((t = (0, v.A)("flex min-h-19 items-center", E)), (b[0] = E), (b[1] = t)) : (t = b[1])
      let W = R ? "cursor-not-allowed opacity-60" : "cursor-interaction"
      ;(b[2] !== W
        ? ((o = (0, v.A)("flex min-w-0 flex-1 self-stretch select-none", W)), (b[2] = W), (b[3] = o))
        : (o = b[3]),
        b[4] !== O || b[5] !== R || b[6] !== I || b[7] !== z || b[8] !== k
          ? ((i = (0, a.jsx)("input", {
              id: I,
              className: "peer sr-only",
              checked: O,
              disabled: R,
              name: "chatgpt-pet",
              onChange: z,
              type: "radio",
              value: k,
            })),
            (b[4] = O),
            (b[5] = R),
            (b[6] = I),
            (b[7] = z),
            (b[8] = k),
            (b[9] = i))
          : (i = b[9]),
        b[10] !== C || b[11] !== k
          ? ((s = "default" === k ? null : (0, a.jsx)(ec, { pet: C, selection: k })),
            (b[10] = C),
            (b[11] = k),
            (b[12] = s))
          : (s = b[12]),
        b[13] !== F || b[14] !== _ || b[15] !== C || b[16] !== j
          ? ((c =
              F && C?.shared_pet_id != null
                ? (0, a.jsxs)("span", {
                    className: "flex items-center gap-1.5",
                    children: [
                      (0, a.jsx)("span", { className: "truncate", children: j }),
                      (0, a.jsx)(N.ZEl, {
                        "aria-label": _.formatMessage(
                          {
                            id: "settings.chatGpt.personalization.pet.sharedIndicator",
                            defaultMessage: "{petName} is shared",
                          },
                          { petName: C.name },
                        ),
                        className: "text-tertiary",
                      }),
                    ],
                  })
                : j),
            (b[13] = F),
            (b[14] = _),
            (b[15] = C),
            (b[16] = j),
            (b[17] = c))
          : (c = b[17]),
        b[18] !== S || b[19] !== s || b[20] !== c
          ? ((r = (0, a.jsx)(L.ic, {
              className:
                "flex-1 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-0 peer-focus-visible:outline-ring",
              icon: s,
              label: c,
              description: S,
              control: null,
            })),
            (b[18] = S),
            (b[19] = s),
            (b[20] = c),
            (b[21] = r))
          : (r = b[21]),
        b[22] !== o || b[23] !== i || b[24] !== r
          ? ((l = (0, a.jsxs)("label", { className: o, children: [i, r] })),
            (b[22] = o),
            (b[23] = i),
            (b[24] = r),
            (b[25] = l))
          : (l = b[25]),
        b[26] !== G
          ? ((m =
              null != G &&
              (0, a.jsx)(A.$, {
                onClick: G,
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.refresh",
                  defaultMessage: "Refresh",
                }),
              })),
            (b[26] = G),
            (b[27] = m))
          : (m = b[27]),
        b[28] !== w || b[29] !== F || b[30] !== B || b[31] !== C
          ? ((p = null != C && (0, a.jsx)(er, { accountId: w, canShare: F, pet: C, onNavigate: B })),
            (b[28] = w),
            (b[29] = F),
            (b[30] = B),
            (b[31] = C),
            (b[32] = p))
          : (p = b[32]))
      let V = R ? "cursor-not-allowed opacity-60" : "cursor-interaction"
      return (
        b[33] !== V ? ((u = (0, v.A)("flex items-center self-stretch", V)), (b[33] = V), (b[34] = u)) : (u = b[34]),
        b[35] !== O
          ? ((g = O
              ? (0, a.jsx)(N.hEG, { className: "text-(--radio-group-indicator-background-color)" })
              : (0, a.jsx)(P.I, { asset: x.$, className: "text-tertiary" })),
            (b[35] = O),
            (b[36] = g))
          : (g = b[36]),
        b[37] !== I || b[38] !== u || b[39] !== g
          ? ((h = (0, a.jsx)("label", { className: u, htmlFor: I, children: g })),
            (b[37] = I),
            (b[38] = u),
            (b[39] = g),
            (b[40] = h))
          : (h = b[40]),
        b[41] !== m || b[42] !== p || b[43] !== h
          ? ((f = (0, a.jsxs)("div", {
              className: "flex shrink-0 items-center gap-2 self-stretch pe-4",
              children: [m, p, h],
            })),
            (b[41] = m),
            (b[42] = p),
            (b[43] = h),
            (b[44] = f))
          : (f = b[44]),
        b[45] !== l || b[46] !== f || b[47] !== t
          ? ((M = (0, a.jsxs)("div", { className: t, children: [l, f] })),
            (b[45] = l),
            (b[46] = f),
            (b[47] = t),
            (b[48] = M))
          : (M = b[48]),
        M
      )
    }
    function ec(e) {
      let t,
        o,
        n = (0, d.c)(9),
        { pet: i, selection: s } = e
      if (s.startsWith("pet_")) {
        let e
        if (i?.spritesheet_url == null) return null
        ;(n[0] !== i.id || n[1] !== i.spritesheet_url
          ? ((e = { petId: i.id, spritesheetUrl: i.spritesheet_url }),
            (n[0] = i.id),
            (n[1] = i.spritesheet_url),
            (n[2] = e))
          : (e = n[2]),
          (t = e))
      } else {
        let e, o
        ;(n[3] !== s ? ((e = j.B4.find((e) => e.id === s)?.assetRef ?? "codex"), (n[3] = s), (n[4] = e)) : (e = n[4]),
          n[5] !== e ? ((o = { assetRef: e }), (n[5] = e), (n[6] = o)) : (o = n[6]),
          (t = o))
      }
      return (
        n[7] !== t
          ? ((o = (0, a.jsx)(g.bH, {
              className: "shrink-0 [--codex-pet-width:--spacing(10)]",
              assetMap: k.A,
              source: t,
            })),
            (n[7] = t),
            (n[8] = o))
          : (o = n[8]),
        o
      )
    }
    function er(e) {
      let t,
        o,
        i,
        s,
        r,
        l,
        m,
        p,
        u,
        g,
        h,
        x,
        f,
        M,
        b,
        v,
        D,
        k = (0, d.c)(51),
        { accountId: j, canShare: P, pet: O, onNavigate: B } = e,
        F = (0, c.gh)(G.u),
        I = (0, y.A)(),
        _ = "allowed" === (0, c.Ul)(C.lN).status,
        [L, E] = (0, n.useState)(null)
      ;(k[0] !== j || k[1] !== O.id || k[2] !== F
        ? ((t = async (e) => {
            let t = { additionalHeaders: { "ChatGPT-Account-ID": j }, parameters: { path: { pet_id: O.id } } }
            if ("copy" === e) {
              let e = await Z.CodexRequest.safePost("/pets/{pet_id}/share", t)
              ;(await (0, q.lW)(e.share_url)) && (0, W.o)(F)
              return
            }
            let o = await Z.CodexRequest.safeGet("/pets/{pet_id}/download", t),
              a = await fetch(o.spritesheet_url, { credentials: "omit" })
            if (!a.ok) throw Error("Pet download failed")
            let d = await a.blob()
            ;(0, U.W)(d, `${O.id}-spritesheet.${"image/webp" === d.type ? "webp" : "png"}`)
          }),
          (k[0] = j),
          (k[1] = O.id),
          (k[2] = F),
          (k[3] = t))
        : (t = k[3]),
        k[4] !== I || k[5] !== F
          ? ((o = () =>
              F.get(R.Id).danger(
                I.formatMessage({
                  id: "settings.chatGpt.personalization.pet.actionFailed",
                  defaultMessage: "Couldn\u2019t complete this action. Please try again",
                }),
                { errorAnalytics: { toastId: "settings.chatGpt.personalization.pet.actionFailed" } },
              )),
            (k[4] = I),
            (k[5] = F),
            (k[6] = o))
          : (o = k[6]),
        k[7] !== t || k[8] !== o
          ? ((i = { mutationFn: t, onError: o }), (k[7] = t), (k[8] = o), (k[9] = i))
          : (i = k[9]))
      let { mutate: V, isPending: Y } = (0, w.n)(i)
      return (
        k[10] !== I || k[11] !== O.name
          ? ((s = I.formatMessage(
              { id: "settings.chatGpt.personalization.pet.actions", defaultMessage: "Actions for {petName}" },
              { petName: O.name },
            )),
            (k[10] = I),
            (k[11] = O.name),
            (k[12] = s))
          : (s = k[12]),
        k[13] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(N.l0Y, {})), (k[13] = r)) : (r = k[13]),
        k[14] !== Y || k[15] !== s
          ? ((l = (0, a.jsx)(A.$, { "aria-label": s, color: "ghost", disabled: Y, size: "icon", children: r })),
            (k[14] = Y),
            (k[15] = s),
            (k[16] = l))
          : (l = k[16]),
        k[17] !== _ || k[18] !== I || k[19] !== B || k[20] !== O.name || k[21] !== F
          ? ((m =
              _ &&
              (0, a.jsx)(S.ms.Item, {
                onSelect: () => {
                  ;(B?.(),
                    (0, z.startNewConversation)(F, {
                      activeProject: null,
                      codexAppMode: "work",
                      prefillPrompt: I.formatMessage(
                        {
                          id: "settings.chatGpt.personalization.pet.edit.prompt",
                          defaultMessage: "Help me modify my pet {petName}.",
                        },
                        { petName: O.name },
                      ),
                    }))
                },
                children: (0, a.jsx)(T.A, {
                  id: "settings.chatGpt.personalization.pet.edit.chatgpt",
                  defaultMessage: "Edit in ChatGPT",
                }),
              })),
            (k[17] = _),
            (k[18] = I),
            (k[19] = B),
            (k[20] = O.name),
            (k[21] = F),
            (k[22] = m))
          : (m = k[22]),
        k[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(S.ms.Item, {
              onSelect: () => E("edit"),
              children: (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.edit.manually",
                defaultMessage: "Edit manually",
              }),
            })),
            (k[23] = p))
          : (p = k[23]),
        k[24] !== V ? ((u = () => V("download")), (k[24] = V), (k[25] = u)) : (u = k[25]),
        k[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(T.A, {
              id: "settings.chatGpt.personalization.pet.download",
              defaultMessage: "Download sprite sheet",
            })),
            (k[26] = g))
          : (g = k[26]),
        k[27] !== u
          ? ((h = (0, a.jsx)(S.ms.Item, { onSelect: u, children: g })), (k[27] = u), (k[28] = h))
          : (h = k[28]),
        k[29] !== P || k[30] !== V || k[31] !== O.shared_pet_id
          ? ((x =
              P &&
              (null == O.shared_pet_id
                ? (0, a.jsx)(S.ms.Item, {
                    onSelect: () => E("share"),
                    children: (0, a.jsx)(T.A, {
                      id: "settings.chatGpt.personalization.pet.share",
                      defaultMessage: "Share",
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(S.ms.Item, {
                        onSelect: () => V("copy"),
                        children: (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.copy",
                          defaultMessage: "Copy share link",
                        }),
                      }),
                      (0, a.jsx)(S.ms.Item, {
                        onSelect: () => E("unshare"),
                        children: (0, a.jsx)(T.A, {
                          id: "settings.chatGpt.personalization.pet.unshare",
                          defaultMessage: "Unshare",
                        }),
                      }),
                    ],
                  }))),
            (k[29] = P),
            (k[30] = V),
            (k[31] = O.shared_pet_id),
            (k[32] = x))
          : (x = k[32]),
        k[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(S.ms.Item, {
              color: "danger",
              onSelect: () => E("delete"),
              children: (0, a.jsx)(T.A, {
                id: "settings.chatGpt.personalization.pet.delete",
                defaultMessage: "Delete",
              }),
            })),
            (k[33] = f))
          : (f = k[33]),
        k[34] !== h || k[35] !== x || k[36] !== l || k[37] !== m
          ? ((M = (0, a.jsxs)(S.Ab, { triggerButton: l, children: [m, p, h, x, f] })),
            (k[34] = h),
            (k[35] = x),
            (k[36] = l),
            (k[37] = m),
            (k[38] = M))
          : (M = k[38]),
        k[39] !== j || k[40] !== L || k[41] !== O
          ? ((b = "edit" === L && (0, a.jsx)(X, { accountId: j, pet: O, onClose: () => E(null) })),
            (k[39] = j),
            (k[40] = L),
            (k[41] = O),
            (k[42] = b))
          : (b = k[42]),
        k[43] !== j || k[44] !== L || k[45] !== O
          ? ((v =
              null != L && "edit" !== L && (0, a.jsx)(J, { accountId: j, action: L, pet: O, onClose: () => E(null) })),
            (k[43] = j),
            (k[44] = L),
            (k[45] = O),
            (k[46] = v))
          : (v = k[46]),
        k[47] !== M || k[48] !== b || k[49] !== v
          ? ((D = (0, a.jsxs)(a.Fragment, { children: [M, b, v] })), (k[47] = M), (k[48] = b), (k[49] = v), (k[50] = D))
          : (D = k[50]),
        D
      )
    }
    function el(e) {
      let t,
        o = (0, d.c)(7),
        { embedded: n, onNavigate: u } = e,
        g = void 0 !== n && n,
        h = (0, c.Ul)(r.Sk)
      if (null == h) {
        let e
        if (g) {
          let e, t
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(s.OO, {
                  children: (0, a.jsx)(s.c7, {
                    title: (0, a.jsx)(i.L3, { className: "select-none", children: (0, a.jsx)(p.s, { slug: "pets" }) }),
                  }),
                })),
                (o[0] = e))
              : (e = o[0]),
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsxs)(a.Fragment, { children: [e, (0, a.jsx)(s.OO, { children: (0, a.jsx)(l.j, {}) })] })),
                (o[1] = t))
              : (t = o[1]),
            t
          )
        }
        return (
          o[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.M, { section: "pets" })), (o[2] = e))
            : (e = o[2]),
          e
        )
      }
      return (
        o[3] !== h || o[4] !== g || o[5] !== u
          ? ((t = (0, a.jsx)(en, { accountId: h, embedded: g, onNavigate: u }, h)),
            (o[3] = h),
            (o[4] = g),
            (o[5] = u),
            (o[6] = t))
          : (t = o[6]),
        t
      )
    }
    function em(e) {
      let t,
        o,
        c,
        r,
        l = (0, d.c)(10),
        { onClose: m, onReturnFocus: p } = e,
        u = (0, n.useRef)(!0)
      return (
        l[0] !== p
          ? ((t = {
              "aria-describedby": void 0,
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), u.current && p?.())
              },
            }),
            (l[0] = p),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== m
          ? ((o = (e) => {
              e || m()
            }),
            (l[2] = m),
            (l[3] = o))
          : (o = l[3]),
        l[4] !== m
          ? ((c = (0, a.jsx)(s.R4, {
              size: "full",
              children: (0, a.jsx)(el, {
                embedded: !0,
                onNavigate: () => {
                  ;((u.current = !1), m())
                },
              }),
            })),
            (l[4] = m),
            (l[5] = c))
          : (c = l[5]),
        l[6] !== t || l[7] !== o || l[8] !== c
          ? ((r = (0, a.jsx)(i.lG, {
              open: !0,
              contentProps: t,
              size: "setup",
              variant: "chatgpt",
              onOpenChange: o,
              children: c,
            })),
            (l[6] = t),
            (l[7] = o),
            (l[8] = c),
            (l[9] = r))
          : (r = l[9]),
        r
      )
    }
  },
  pjIx(e, t, o) {
    let a = (0, o("Qgfj").YK)({
      codexInstructionsNavTitle: { id: "settings.personalization.instructions.codex", defaultMessage: "Codex" },
      dotDescription: {
        id: "settings.personalization.instructions.dotDescription",
        defaultMessage: "Tell your {dot} what to prioritize and how to work with you",
      },
      instructionsPlaceholder: {
        id: "settings.personalization.agents.placeholder",
        defaultMessage: "Add your custom instructions\u2026",
      },
      localCustomInstructions: { id: "settings.personalization.agents.title", defaultMessage: "Codex instructions" },
      customInstructions: {
        id: "settings.personalization.instructions.accountTitle",
        defaultMessage: "Custom instructions",
      },
      agentsMd: { id: "settings.personalization.agents.fileTitle", defaultMessage: "AGENTS.md" },
      loading: { id: "settings.personalization.loading", defaultMessage: "Loading personalization settings\u2026" },
      memory: { id: "settings.personalization.memory.title", defaultMessage: "Codex memory" },
      enableMemories: { id: "settings.memory.enableMemoriesLabel.host", defaultMessage: "Enable Codex memories" },
      allowMemoryGenerationFromToolAssistedTasks: {
        id: "settings.memory.allowMemoryGenerationFromToolAssistedTasksLabel.host",
        defaultMessage: "Allow memories from tool-assisted chats",
      },
      resetMemories: { id: "settings.memory.resetMemoriesLabel.host", defaultMessage: "Delete Codex memories" },
    })
    o.d(t, {}, { i: a })
  },
  fSCS(e, t, o) {
    var a = o("AGyq"),
      d = o("qmMi"),
      n = o("DBCl"),
      i = o("Qgfj"),
      s = o("eFn4"),
      c = o("l2C7"),
      r = o("xYqX")
    o("g2p6")
    var l = o("n5iL"),
      m = o("WVWQ"),
      p = o("svjy"),
      u = o("OWtl"),
      g = o("RxZZ"),
      h = o("OMIV"),
      x = o("jBHQ")
    let f = (0, i.YK)({
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
        createMini: { section: "pets", id: "pets-create-mini", title: f.createMini },
        customFolder: { section: "pets", id: "pets-custom-folder", title: f.customFolder },
        size: { section: "pets", id: "pets-size", title: f.size },
        pick: { section: "pets", id: "pets-pick", title: f.pick },
        collection: { section: "pets", id: "pets-collection", title: f.collection },
        options: { section: "pets", id: "pets-options", title: f.options },
        create: { section: "pets", id: "pets-create", title: f.create },
        visibility: {
          section: "pets",
          id: "pets-visibility",
          title: f.visibility,
          options: [f.onDemand, f.alwaysVisible],
        },
      },
      b = (0, d.un)(u.u, ({ get: e }) => e(h.JW, "1532120159")),
      w = (0, d.un)(u.u, ({ get: e }) => !e(h.RS) && e(h.JW, "2635985366")),
      v = (0, d.un)(u.u, ({ get: e }) => {
        let t = e(s.lN)
        return "allowed" === t.status || ("denied" === t.status && "free-plan" === t.reason)
      }),
      y = (0, d.un)(u.u, ({ get: e }) => {
        let t = (0, a.hF)("openAvatarOverlay"),
          o = e(l.nH)
        if (null == o || null == t || !(0, a.AK)(t)) return null
        let { title: d } = (0, m.j)(t, e(p.g), void 0, !0)
        return {
          command: t,
          keymapState: o,
          entry: { section: "pets", id: "pets-mini-shortcut", title: { localizedText: d } },
        }
      }),
      T = (0, d.un)(u.u, ({ get: e }) => {
        if (!e(x.P, "1532120159"))
          return [
            M.pick,
            M.size,
            r.d,
            ...(e(c.IB, { enabled: !1 }).data?.avatarDirectory == null ? [] : [M.customFolder]),
          ]
        let t = [M.collection, M.createMini],
          o = e(y)
        return (
          null != o && t.push(o.entry),
          !e(h.RS) && e(x.P, "2635985366") && t.push(M.visibility),
          (0, g.CN)(e, n.kWF.petVisible) && t.push(M.size),
          t
        )
      })
    o.d(t, {}, { Bc: M, Bp: b, HQ: f, fA: T, iI: y, lp: w, q: v })
  },
  pO0d(e, t, o) {
    var a = o("ABep"),
      d = o("QosV"),
      n = o("oyxz"),
      i = o("Wf1j"),
      s = o("AWNZ"),
      c = o("DDOY")
    function r(e) {
      let t,
        o = (0, d.c)(2),
        { title: i } = e
      return (
        o[0] !== i
          ? ((t =
              "localizedText" in i ? (0, a.jsx)(a.Fragment, { children: i.localizedText }) : (0, a.jsx)(n.A, { ...i })),
            (o[0] = i),
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
            i,
            c,
            l,
            m,
            p,
            u,
            g,
            h = (0, d.c)(19)
          h[0] !== e
            ? (({ entry: o, anchored: l, description: t, renderLabel: c, ...i } = e),
              (h[0] = e),
              (h[1] = t),
              (h[2] = o),
              (h[3] = i),
              (h[4] = c),
              (h[5] = l))
            : ((t = h[1]), (o = h[2]), (i = h[3]), (c = h[4]), (l = h[5]))
          let x = void 0 === l || l
          h[6] !== o.title ? ((m = (0, a.jsx)(r, { title: o.title })), (h[6] = o.title), (h[7] = m)) : (m = h[7])
          let f = m,
            M = x ? o.id : void 0
          return (
            h[8] !== f || h[9] !== c ? ((p = null == c ? f : c(f)), (h[8] = f), (h[9] = c), (h[10] = p)) : (p = h[10]),
            h[11] !== t || h[12] !== o.description
              ? ((u = null == o.description ? t : (0, a.jsx)(n.A, { ...o.description })),
                (h[11] = t),
                (h[12] = o.description),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== i || h[15] !== M || h[16] !== p || h[17] !== u
              ? ((g = (0, a.jsx)(s.ic, { ...i, searchAnchor: M, label: p, description: u })),
                (h[14] = i),
                (h[15] = M),
                (h[16] = p),
                (h[17] = u),
                (h[18] = g))
              : (g = h[18]),
            g
          )
        },
        ek: function (e) {
          let t,
            o,
            n = (0, d.c)(12),
            { entry: s, anchored: r, className: l, children: m } = e,
            p = void 0 === r || r,
            u = (0, i.A)(),
            g = p ? s.id : void 0,
            h = p ? s.id : void 0,
            x = p ? -1 : void 0,
            f = p ? "group" : void 0
          return (
            n[0] !== p || n[1] !== s || n[2] !== u
              ? ((t = p ? (0, c.hz)(u, s.title) : void 0), (n[0] = p), (n[1] = s), (n[2] = u), (n[3] = t))
              : (t = n[3]),
            n[4] !== m || n[5] !== l || n[6] !== g || n[7] !== h || n[8] !== x || n[9] !== f || n[10] !== t
              ? ((o = (0, a.jsx)("div", {
                  id: g,
                  "data-settings-search-entry": h,
                  tabIndex: x,
                  role: f,
                  "aria-label": t,
                  className: l,
                  children: m,
                })),
                (n[4] = m),
                (n[5] = l),
                (n[6] = g),
                (n[7] = h),
                (n[8] = x),
                (n[9] = f),
                (n[10] = t),
                (n[11] = o))
              : (o = n[11]),
            o
          )
        },
        iu: function (e) {
          let t,
            o,
            n,
            i = (0, d.c)(6)
          return (
            i[0] !== e ? (({ action: t, ...o } = e), (i[0] = e), (i[1] = t), (i[2] = o)) : ((t = i[1]), (o = i[2])),
            i[3] !== t || i[4] !== o
              ? ((n = (0, a.jsx)(s.ic, { ...o, control: t })), (i[3] = t), (i[4] = o), (i[5] = n))
              : (n = i[5]),
            n
          )
        },
        kk: function (e) {
          let t,
            o,
            i,
            c,
            l,
            m,
            p,
            u = (0, d.c)(15)
          u[0] !== e
            ? (({ entry: o, anchored: c, description: t, ...i } = e),
              (u[0] = e),
              (u[1] = t),
              (u[2] = o),
              (u[3] = i),
              (u[4] = c))
            : ((t = u[1]), (o = u[2]), (i = u[3]), (c = u[4]))
          let g = void 0 === c || c ? o.id : void 0
          return (
            u[5] !== o.title ? ((l = (0, a.jsx)(r, { title: o.title })), (u[5] = o.title), (u[6] = l)) : (l = u[6]),
            u[7] !== t || u[8] !== o.description
              ? ((m = null == o.description ? t : (0, a.jsx)(n.A, { ...o.description })),
                (u[7] = t),
                (u[8] = o.description),
                (u[9] = m))
              : (m = u[9]),
            u[10] !== i || u[11] !== g || u[12] !== l || u[13] !== m
              ? ((p = (0, a.jsx)(s.kG, { ...i, searchAnchor: g, label: l, description: m })),
                (u[10] = i),
                (u[11] = g),
                (u[12] = l),
                (u[13] = m),
                (u[14] = p))
              : (p = u[14]),
            p
          )
        },
      },
    )
  },
  I7Ou(e, t, o) {
    var a = o("ABep"),
      d = o("QosV"),
      n = o("RNul"),
      i = o("AWNZ")
    o.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            o,
            s = (0, d.c)(3),
            { children: c } = e
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(n.y, { className: "icon-xs shrink-0 text-secondary" })), (s[0] = t))
              : (t = s[0]),
            s[1] !== c
              ? ((o = (0, a.jsx)("div", {
                  role: "status",
                  children: (0, a.jsx)(i.ic, {
                    label: (0, a.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, a.jsx)("span", { className: "text-balance", children: c })],
                    }),
                    control: null,
                  }),
                })),
                (s[1] = c),
                (s[2] = o))
              : (o = s[2]),
            o
          )
        },
      },
    )
  },
  odCE(e, t, o) {
    var a = o("ABep"),
      d = o("QosV"),
      n = o("oyxz"),
      i = o("RNul")
    o.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            o,
            s,
            c = (0, d.c)(5),
            { children: r } = e
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(i.y, { className: "icon-xs shrink-0 text-secondary" })), (c[0] = t))
              : (t = c[0]),
            c[1] !== r
              ? ((o =
                  void 0 === r
                    ? (0, a.jsx)(n.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : r),
                (c[1] = r),
                (c[2] = o))
              : (o = c[2]),
            c[3] !== o
              ? ((s = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, a.jsx)("span", { className: "text-balance", children: o })],
                })),
                (c[3] = o),
                (c[4] = s))
              : (s = c[4]),
            s
          )
        },
      },
    )
  },
  ueRx(e, t, o) {
    var a = o("ABep"),
      d = o("QosV"),
      n = o("oyxz"),
      i = o("CnsO"),
      s = o("pjIx"),
      c = o("jxU8"),
      r = o("odCE"),
      l = o("QyE3")
    o.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            o,
            m,
            p,
            u,
            g = (0, d.c)(14),
            { section: h, showTitle: x } = e,
            f = void 0 !== x && x
          ;(g[0] !== h
            ? ((t = "personalization" === h ? (0, a.jsx)(n.A, { ...s.i.loading }) : void 0), (g[0] = h), (g[1] = t))
            : (t = g[1]),
            g[2] !== t ? ((o = (0, a.jsx)(r.j, { children: t })), (g[2] = t), (g[3] = o)) : (o = g[3]))
          let M = o
          g[4] !== h || g[5] !== f
            ? ((m = f ? (0, a.jsx)(l.s, { slug: h }) : null), (g[4] = h), (g[5] = f), (g[6] = m))
            : (m = g[6])
          let b = f ? void 0 : "min-h-full items-center justify-center"
          return (
            g[7] !== M || g[8] !== f
              ? ((p = f ? (0, a.jsx)(i.y, { children: M }) : M), (g[7] = M), (g[8] = f), (g[9] = p))
              : (p = g[9]),
            g[10] !== m || g[11] !== b || g[12] !== p
              ? ((u = (0, a.jsx)(c.P, { title: m, contentClassName: b, children: p })),
                (g[10] = m),
                (g[11] = b),
                (g[12] = p),
                (g[13] = u))
              : (u = g[13]),
            u
          )
        },
      },
    )
  },
  bZug(e, t, o) {
    o.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, o) {
    var a = o("ABep"),
      d = o("QosV"),
      n = o("on57"),
      i = o("zd8w"),
      s = o("Ywss"),
      c = o("bVeK")
    function r(e) {
      return e.preventDefault()
    }
    function l(e) {
      let t,
        o,
        i,
        s,
        c,
        r,
        l,
        m,
        p = (0, d.c)(29),
        {
          label: u,
          labelId: g,
          labelSizing: h,
          description: x,
          descriptionId: f,
          icon: M,
          labelWeight: b,
          variant: w,
          verticalAlignment: v,
        } = e,
        y = "start" === v ? "items-start" : "items-center",
        T = "grow" === (void 0 === h ? "grow" : h) && "flex-1"
      ;(p[0] !== y || p[1] !== T
        ? ((t = (0, n.A)("flex min-w-0 gap-3", y, T)), (p[0] = y), (p[1] = T), (p[2] = t))
        : (t = p[2]),
        p[3] !== M
          ? ((o = null != M ? (0, a.jsx)("span", { className: "flex shrink-0", children: M }) : null),
            (p[3] = M),
            (p[4] = o))
          : (o = p[4]))
      let D = x && "recommendation" !== w && "[[data-settings-panel]_&]:gap-1 [[data-settings-panel]_&]:py-0.5",
        C = "featured" === w && "text-base [[data-settings-standard-rows]_&]:text-sm",
        k = "recommendation" === w && "text-[13px] leading-[18.571429px]",
        j = "featured" !== w && "recommendation" !== w && "text-sm"
      p[5] !== D || p[6] !== C || p[7] !== k || p[8] !== j
        ? ((i = (0, n.A)(
            "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[density=compact]/settings:leading-4.5",
            D,
            C,
            k,
            j,
          )),
          (p[5] = D),
          (p[6] = C),
          (p[7] = k),
          (p[8] = j),
          (p[9] = i))
        : (i = p[9])
      let A = ("medium" === b || (null == b && "nested" !== w)) && "font-medium",
        S = null == b && "nested" === w && x && "[[data-settings-panel]_&]:font-medium"
      return (
        p[10] !== A || p[11] !== S
          ? ((s = (0, n.A)("min-w-0 break-words text-default", A, S)), (p[10] = A), (p[11] = S), (p[12] = s))
          : (s = p[12]),
        p[13] !== u || p[14] !== g || p[15] !== s
          ? ((c = (0, a.jsx)("div", { id: g, className: s, children: u })),
            (p[13] = u),
            (p[14] = g),
            (p[15] = s),
            (p[16] = c))
          : (c = p[16]),
        p[17] !== x || p[18] !== f || p[19] !== w
          ? ((r = x
              ? (0, a.jsx)("div", {
                  id: f,
                  className: (0, n.A)(
                    "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                    "recommendation" !== w &&
                      "[[data-settings-panel]_&]:[font-size:inherit] [[data-settings-panel]_&]:[line-height:inherit] [[data-settings-panel]_&]:font-normal",
                  ),
                  children: x,
                })
              : null),
            (p[17] = x),
            (p[18] = f),
            (p[19] = w),
            (p[20] = r))
          : (r = p[20]),
        p[21] !== i || p[22] !== c || p[23] !== r
          ? ((l = (0, a.jsxs)("div", { className: i, children: [c, r] })),
            (p[21] = i),
            (p[22] = c),
            (p[23] = r),
            (p[24] = l))
          : (l = p[24]),
        p[25] !== l || p[26] !== t || p[27] !== o
          ? ((m = (0, a.jsxs)("div", { className: t, children: [o, l] })),
            (p[25] = l),
            (p[26] = t),
            (p[27] = o),
            (p[28] = m))
          : (m = p[28]),
        m
      )
    }
    o.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            o,
            i,
            s,
            c,
            r,
            l = (0, d.c)(18),
            { children: m, compactLabelInset: p, label: u, valueAlignment: g, variant: h } = e,
            x = void 0 === p || p,
            f = void 0 === g ? "start" : g,
            M = void 0 === h ? "default" : h,
            b =
              "compact" === M
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            l[0] !== b ? ((t = (0, n.A)("grid items-center", b)), (l[0] = b), (l[1] = t)) : (t = l[1]),
            l[2] !== x || l[3] !== M
              ? ((o = (0, n.A)(
                  "min-w-0",
                  "compact" === M
                    ? (0, n.A)("flex items-center pe-2 text-start", x && "ps-1")
                    : "text-sm text-secondary",
                )),
                (l[2] = x),
                (l[3] = M),
                (l[4] = o))
              : (o = l[4]),
            l[5] !== u || l[6] !== o
              ? ((i = (0, a.jsx)("div", { className: o, children: u })), (l[5] = u), (l[6] = o), (l[7] = i))
              : (i = l[7]),
            l[8] !== f || l[9] !== M
              ? ((s = (0, n.A)(
                  "min-w-0",
                  "compact" === M
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, n.A)("break-words whitespace-normal text-sm text-default", "end" === f && "text-end"),
                )),
                (l[8] = f),
                (l[9] = M),
                (l[10] = s))
              : (s = l[10]),
            l[11] !== m || l[12] !== s
              ? ((c = (0, a.jsx)("div", { className: s, children: m })), (l[11] = m), (l[12] = s), (l[13] = c))
              : (c = l[13]),
            l[14] !== t || l[15] !== i || l[16] !== c
              ? ((r = (0, a.jsxs)("div", { className: t, children: [i, c] })),
                (l[14] = t),
                (l[15] = i),
                (l[16] = c),
                (l[17] = r))
              : (r = l[17]),
            r
          )
        },
        ic: function (e) {
          let t,
            o,
            s,
            c,
            r = (0, d.c)(37),
            {
              label: m,
              labelSizing: p,
              labelWeight: u,
              layout: g,
              description: h,
              control: x,
              controlSizing: f,
              icon: M,
              className: b,
              id: w,
              inset: v,
              size: y,
              searchAnchor: T,
              variant: D,
              verticalAlignment: C,
            } = e,
            k = void 0 === p ? "grow" : p,
            j = void 0 === g ? "default" : g,
            A = void 0 === f ? "minimum" : f,
            S = void 0 === v || v,
            P = void 0 === y ? "default" : y,
            N = void 0 === D ? "default" : D,
            O = void 0 === C ? "center" : C,
            R = (0, i.useId)(),
            z = null != m || null != h || null != M,
            G = "function" == typeof x,
            B = G && null != m ? `${R}-label` : void 0,
            F = G && h ? `${R}-description` : void 0,
            I = T ?? w,
            _ = null == T ? void 0 : -1,
            L = S && ("split" !== j || "default" !== N) && "px-[var(--settings-row-padding-inline,--spacing(4))]",
            E =
              S &&
              "nested" === N &&
              "group-data-[density=form]/settings:px-[var(--settings-row-padding-inline,--spacing(5))]",
            W =
              "stacked" === N &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            V =
              "nested" === N &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            q = "stacked" !== N && ("start" === O ? "items-start" : "items-center"),
            U = "split" === j && "default" === N && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            r[0] !== b ||
            r[1] !== j ||
            r[2] !== P ||
            r[3] !== L ||
            r[4] !== E ||
            r[5] !== W ||
            r[6] !== V ||
            r[7] !== q ||
            r[8] !== U ||
            r[9] !== N
              ? ((t = (0, n.A)(
                  "@container/settings-row",
                  L,
                  E,
                  W,
                  V,
                  q,
                  U,
                  "default" === j &&
                    ("default" === N || "featured" === N || "recommendation" === N) &&
                    (0, n.A)(
                      "flex justify-between",
                      "featured" === N &&
                        (0, n.A)(
                          "gap-6",
                          "compact" === P
                            ? "min-h-11 py-2 [[data-settings-standard-rows]_&]:min-h-0 [[data-settings-standard-rows]_&]:gap-4"
                            : "py-4 [[data-settings-standard-rows]_&]:py-3",
                        ),
                      "featured" !== N && ("compact" === P ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === N && "dark:bg-secondary-ghost-hover",
                  b,
                )),
                (r[0] = b),
                (r[1] = j),
                (r[2] = P),
                (r[3] = L),
                (r[4] = E),
                (r[5] = W),
                (r[6] = V),
                (r[7] = q),
                (r[8] = U),
                (r[9] = N),
                (r[10] = t))
              : (t = r[10]),
            r[11] !== h ||
            r[12] !== F ||
            r[13] !== z ||
            r[14] !== M ||
            r[15] !== m ||
            r[16] !== B ||
            r[17] !== k ||
            r[18] !== u ||
            r[19] !== N ||
            r[20] !== O
              ? ((o = z
                  ? (0, a.jsx)(l, {
                      label: m,
                      labelId: B,
                      labelSizing: k,
                      labelWeight: u,
                      description: h,
                      descriptionId: F,
                      icon: M,
                      variant: N,
                      verticalAlignment: O,
                    })
                  : null),
                (r[11] = h),
                (r[12] = F),
                (r[13] = z),
                (r[14] = M),
                (r[15] = m),
                (r[16] = B),
                (r[17] = k),
                (r[18] = u),
                (r[19] = N),
                (r[20] = O),
                (r[21] = o))
              : (o = r[21]),
            r[22] !== x || r[23] !== A || r[24] !== F || r[25] !== G || r[26] !== B || r[27] !== j || r[28] !== N
              ? ((s =
                  null != x && !1 !== x
                    ? (0, a.jsx)("div", {
                        className: (0, n.A)(
                          "stacked" === N && "w-full",
                          "nested" === N && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === j &&
                            "default" === N &&
                            (0, n.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === A && "w-full",
                            ),
                          "default" === j &&
                            ("default" === N || "featured" === N || "recommendation" === N) &&
                            (0, n.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === A ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === A && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: G ? x({ "aria-labelledby": B, "aria-describedby": F }) : x,
                      })
                    : null),
                (r[22] = x),
                (r[23] = A),
                (r[24] = F),
                (r[25] = G),
                (r[26] = B),
                (r[27] = j),
                (r[28] = N),
                (r[29] = s))
              : (s = r[29]),
            r[30] !== T || r[31] !== t || r[32] !== o || r[33] !== s || r[34] !== I || r[35] !== _
              ? ((c = (0, a.jsxs)("div", {
                  id: I,
                  "data-settings-search-entry": T,
                  tabIndex: _,
                  className: t,
                  children: [o, s],
                })),
                (r[30] = T),
                (r[31] = t),
                (r[32] = o),
                (r[33] = s),
                (r[34] = I),
                (r[35] = _),
                (r[36] = c))
              : (c = r[36]),
            c
          )
        },
        jj: function (e) {
          let t,
            o = (0, d.c)(2),
            { children: n } = e
          return (
            o[0] !== n
              ? ((t = (0, a.jsx)("span", { className: "text-xs text-secondary", children: n })), (o[0] = n), (o[1] = t))
              : (t = o[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            o,
            i,
            c,
            m,
            p,
            u,
            g,
            h,
            x,
            f,
            M,
            b,
            w,
            v,
            y,
            T,
            D,
            C,
            k,
            j,
            A,
            S,
            P,
            N,
            O,
            R = (0, d.c)(64)
          R[0] !== e
            ? (({
                actions: t,
                actionsPlacement: M,
                ariaControls: o,
                ariaExpanded: i,
                ariaLabel: c,
                className: m,
                description: p,
                disabled: u,
                edgeRounding: b,
                highlightOnFocus: w,
                icon: g,
                label: x,
                searchAnchor: f,
                size: v,
                trailing: D,
                variant: y,
                wrapActions: T,
                ...h
              } = e),
              (R[0] = e),
              (R[1] = t),
              (R[2] = o),
              (R[3] = i),
              (R[4] = c),
              (R[5] = m),
              (R[6] = p),
              (R[7] = u),
              (R[8] = g),
              (R[9] = h),
              (R[10] = x),
              (R[11] = f),
              (R[12] = M),
              (R[13] = b),
              (R[14] = w),
              (R[15] = v),
              (R[16] = y),
              (R[17] = T),
              (R[18] = D))
            : ((t = R[1]),
              (o = R[2]),
              (i = R[3]),
              (c = R[4]),
              (m = R[5]),
              (p = R[6]),
              (u = R[7]),
              (g = R[8]),
              (h = R[9]),
              (x = R[10]),
              (f = R[11]),
              (M = R[12]),
              (b = R[13]),
              (w = R[14]),
              (v = R[15]),
              (y = R[16]),
              (T = R[17]),
              (D = R[18]))
          let z = void 0 === b ? "row" : b,
            G = void 0 === w || w,
            B = void 0 === v ? "default" : v,
            F = void 0 === y ? "default" : y,
            I = "before-trailing" === (void 0 === M ? "end" : M) && !u && null != t && null != D,
            _ = void 0 !== T && T && !u && null != t && !I,
            L = _ && "basis-64",
            E = I ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          R[19] !== m || R[20] !== I || R[21] !== B || R[22] !== L || R[23] !== E || R[24] !== F
            ? ((C = (0, n.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                L,
                E,
                "empty" === F
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, n.A)(
                      "px-[var(--settings-row-padding-inline,--spacing(4))] text-start",
                      "nested" === F && "min-h-10 py-0.5",
                      "nested" !== F && ("large" === B ? "py-4" : "py-3"),
                      I && "gap-2",
                      !I && ("nested" === F ? "gap-3" : "gap-6"),
                    ),
                m,
              )),
              (R[19] = m),
              (R[20] = I),
              (R[21] = B),
              (R[22] = L),
              (R[23] = E),
              (R[24] = F),
              (R[25] = C))
            : (C = R[25])
          let W = C
          ;(R[26] !== p || R[27] !== g || R[28] !== x || R[29] !== F
            ? ((k =
                "empty" === F
                  ? (0, a.jsxs)(a.Fragment, { children: [g, x] })
                  : (0, a.jsx)(l, { label: x, description: p, icon: g, variant: F, verticalAlignment: "center" })),
              (R[26] = p),
              (R[27] = g),
              (R[28] = x),
              (R[29] = F),
              (R[30] = k))
            : (k = R[30]),
            R[31] !== D
              ? ((j =
                  null != D
                    ? (0, a.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: D })
                    : null),
                (R[31] = D),
                (R[32] = j))
              : (j = R[32]),
            R[33] !== k || R[34] !== j
              ? ((A = (0, a.jsxs)(a.Fragment, { children: [k, j] })), (R[33] = k), (R[34] = j), (R[35] = A))
              : (A = R[35]))
          let V = A,
            q = null == f ? void 0 : -1,
            U = I ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            Z = _ && "flex-wrap",
            Y = "row" === z && "first:rounded-t-2xl last:rounded-b-2xl",
            K = "recommendation" === F && "dark:bg-secondary-ghost-hover",
            H = !u && "hover:bg-secondary-ghost-hover",
            Q = !u && G && "focus-within:bg-secondary-ghost-hover",
            $ = !u && "recommendation" === F && "dark:hover:bg-background-secondary-soft-alpha",
            X = !u && G && "recommendation" === F && "dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            R[36] !== U ||
            R[37] !== Z ||
            R[38] !== Y ||
            R[39] !== K ||
            R[40] !== H ||
            R[41] !== Q ||
            R[42] !== $ ||
            R[43] !== X
              ? ((S = (0, n.A)("group w-full items-center", U, Z, Y, K, H, Q, $, X)),
                (R[36] = U),
                (R[37] = Z),
                (R[38] = Y),
                (R[39] = K),
                (R[40] = H),
                (R[41] = Q),
                (R[42] = $),
                (R[43] = X),
                (R[44] = S))
              : (S = R[44]),
            R[45] !== o || R[46] !== i || R[47] !== c || R[48] !== V || R[49] !== u || R[50] !== h || R[51] !== W
              ? ((P =
                  null != h.to
                    ? (0, a.jsx)(s.N_, {
                        ...h,
                        className: W,
                        "aria-controls": o,
                        "aria-expanded": i,
                        "aria-label": c,
                        "aria-disabled": u || void 0,
                        tabIndex: u ? -1 : void 0,
                        onClick: u ? r : h.onClick,
                        children: V,
                      })
                    : (0, a.jsx)("button", {
                        ...h,
                        className: W,
                        "aria-controls": o,
                        "aria-expanded": i,
                        "aria-label": c,
                        disabled: u,
                        type: "button",
                        children: V,
                      })),
                (R[45] = o),
                (R[46] = i),
                (R[47] = c),
                (R[48] = V),
                (R[49] = u),
                (R[50] = h),
                (R[51] = W),
                (R[52] = P))
              : (P = R[52]),
            R[53] !== t || R[54] !== _ || R[55] !== u || R[56] !== I
              ? ((N =
                  u || null == t
                    ? null
                    : (0, a.jsx)("div", {
                        className: (0, n.A)(
                          "flex shrink-0 items-center gap-1",
                          _ && "ms-auto max-w-full py-2",
                          I
                            ? "relative col-start-2 row-start-1"
                            : "pe-[var(--settings-row-padding-inline,--spacing(4))]",
                        ),
                        children: t,
                      })),
                (R[53] = t),
                (R[54] = _),
                (R[55] = u),
                (R[56] = I),
                (R[57] = N))
              : (N = R[57]),
            R[58] !== f || R[59] !== q || R[60] !== S || R[61] !== P || R[62] !== N
              ? ((O = (0, a.jsxs)("div", {
                  id: f,
                  "data-settings-search-entry": f,
                  tabIndex: q,
                  className: S,
                  children: [P, N],
                })),
                (R[58] = f),
                (R[59] = q),
                (R[60] = S),
                (R[61] = P),
                (R[62] = N),
                (R[63] = O))
              : (O = R[63]),
            O
          )
        },
        kf: function (e) {
          let t,
            o = (0, d.c)(2),
            { children: n } = e
          return (
            o[0] !== n
              ? ((t = (0, a.jsx)("span", { className: "text-tertiary", children: n })), (o[0] = n), (o[1] = t))
              : (t = o[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            o,
            i,
            s,
            r,
            l,
            m,
            p,
            u,
            g,
            h = (0, d.c)(43),
            {
              id: x,
              ariaLabel: f,
              autoFocus: M,
              checked: b,
              description: w,
              highlightSelected: v,
              indicator: y,
              label: T,
              name: D,
              onChange: C,
              onClick: k,
              value: j,
              variant: A,
            } = e,
            S = void 0 === v || v,
            P = void 0 === y ? "radio" : y,
            N = void 0 === A ? "default" : A
          ;(h[0] !== b || h[1] !== w || h[2] !== S || h[3] !== P || h[4] !== N
            ? ((t = (0, n.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === N &&
                  (0, n.A)(
                    "gap-3 px-[var(--settings-row-padding-inline,--spacing(4))] py-3 hover:bg-secondary-ghost-hover",
                    null != w ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === N && b && S && "radio" === P && "bg-background-neutral-soft-alpha",
                "form" === N && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === N && "items-center gap-2",
                "checkmark" === P && "after:ms-7",
              )),
              (h[0] = b),
              (h[1] = w),
              (h[2] = S),
              (h[3] = P),
              (h[4] = N),
              (h[5] = t))
            : (t = h[5]),
            h[6] !== f || h[7] !== x
              ? ((o = (0, a.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": f,
                  htmlFor: x,
                })),
                (h[6] = f),
                (h[7] = x),
                (h[8] = o))
              : (o = h[8]),
            h[9] !== P || h[10] !== N
              ? ((i = (0, n.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === P
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, n.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === N ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (h[9] = P),
                (h[10] = N),
                (h[11] = i))
              : (i = h[11]))
          let O = null != w ? `${x}-description` : void 0
          ;(h[12] !== f ||
          h[13] !== M ||
          h[14] !== b ||
          h[15] !== x ||
          h[16] !== D ||
          h[17] !== C ||
          h[18] !== k ||
          h[19] !== i ||
          h[20] !== O ||
          h[21] !== j
            ? ((s = (0, a.jsx)("input", {
                id: x,
                className: i,
                "aria-label": f,
                "aria-describedby": O,
                autoFocus: M,
                type: "radio",
                name: D,
                value: j,
                checked: b,
                onChange: C,
                onClick: k,
              })),
              (h[12] = f),
              (h[13] = M),
              (h[14] = b),
              (h[15] = x),
              (h[16] = D),
              (h[17] = C),
              (h[18] = k),
              (h[19] = i),
              (h[20] = O),
              (h[21] = j),
              (h[22] = s))
            : (s = h[22]),
            h[23] !== b || h[24] !== P
              ? ((r = "checkmark" === P ? (0, a.jsx)(c.ALZ, { className: (0, n.A)(!b && "invisible") }) : null),
                (h[23] = b),
                (h[24] = P),
                (h[25] = r))
              : (r = h[25]))
          let R = "default" === N ? "text-sm font-medium" : "text-base"
          return (
            h[26] !== R ? ((l = (0, n.A)("text-default", R)), (h[26] = R), (h[27] = l)) : (l = h[27]),
            h[28] !== T || h[29] !== l
              ? ((m = (0, a.jsx)("span", { className: l, children: T })), (h[28] = T), (h[29] = l), (h[30] = m))
              : (m = h[30]),
            h[31] !== w || h[32] !== x
              ? ((p =
                  null != w
                    ? (0, a.jsx)("span", {
                        id: `${x}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: w,
                      })
                    : null),
                (h[31] = w),
                (h[32] = x),
                (h[33] = p))
              : (p = h[33]),
            h[34] !== m || h[35] !== p
              ? ((u = (0, a.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [m, p],
                })),
                (h[34] = m),
                (h[35] = p),
                (h[36] = u))
              : (u = h[36]),
            h[37] !== u || h[38] !== t || h[39] !== o || h[40] !== s || h[41] !== r
              ? ((g = (0, a.jsxs)("div", { className: t, children: [o, s, r, u] })),
                (h[37] = u),
                (h[38] = t),
                (h[39] = o),
                (h[40] = s),
                (h[41] = r),
                (h[42] = g))
              : (g = h[42]),
            g
          )
        },
      },
    )
  },
  LAI4(e, t, o) {
    o.d(t, { r: () => s })
    var a = o("ABep"),
      d = o("QosV"),
      n = o("on57"),
      i = o("bZug")
    function s(e) {
      let t,
        o,
        s = (0, d.c)(6),
        { children: c, dividerInset: r, variant: l } = e,
        m = void 0 === l ? "default" : l,
        p = "none" === (void 0 === r ? "default" : r) ? i.s : i.r
      return (
        s[0] !== p || s[1] !== m
          ? ((t = "interactive" === m ? (0, n.A)("divide-y", "interactive-JJMtbj") : p),
            (s[0] = p),
            (s[1] = m),
            (s[2] = t))
          : (t = s[2]),
        s[3] !== c || s[4] !== t
          ? ((o = (0, a.jsx)("div", { className: t, children: c })), (s[3] = c), (s[4] = t), (s[5] = o))
          : (o = s[5]),
        o
      )
    }
  },
  DDOY(e, t, o) {
    var a = o("Ywss"),
      d = o("iiZm")
    function n(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    o.d(
      t,
      {},
      {
        Xl: function (e, t, o) {
          let d = (0, a.Rr)(e),
            n = new URLSearchParams(d.search)
          for (let [e, t] of Object.entries(o ?? {})) n.set(e, t)
          return (0, a.AO)({ ...d, search: n.toString(), hash: t })
        },
        hz: n,
        s9: function (e, t, o) {
          let a = o.trim()
          return 0 === a.length
            ? []
            : e
                .flatMap((e) => {
                  let o = n(t, e.title),
                    i = (0, d.gr)(o, a),
                    s = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(a.toLocaleLowerCase(t.locale)),
                    c = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, d.gr)(n(t, e), a) > 0)
                  return 0 !== i || s || c
                    ? [
                        {
                          id: e.id,
                          label: o,
                          score: i,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: o, path: a, searchParams: d }) => ({
                  id: e,
                  label: t,
                  sectionSlug: o,
                  ...(null == a ? {} : { path: a }),
                  searchParams: d,
                }))
        },
      },
    )
  },
  ZII9(e, t, o) {
    let a = (0, o("ESTr").a)({
      name: "arrow-up-line-horizontal-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        visualBounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.807861, y: 2.182129, width: 10.383789, height: 11.677246 },
        center: { x: 7.999756, y: 8.020752 },
        insets: { top: 2.182129, right: 2.80835, bottom: 2.140625, left: 2.807861 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.020752 }, foreground: { x: 7.999756, y: 8.020752 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.6663 12.8083C12.9562 12.8083 13.1917 13.0438 13.1917 13.3337C13.1916 13.6236 12.9561 13.8591 12.6663 13.8591H3.33325C3.04336 13.8591 2.80796 13.6236 2.80786 13.3337C2.80786 13.0438 3.0433 12.8083 3.33325 12.8083H12.6663Z" fill="currentColor"/> <path d="M7.27466 2.48218C7.64985 2.10704 8.24416 2.08374 8.64673 2.41187L8.72485 2.48218L11.7043 5.46167C11.9092 5.66657 11.909 5.9988 11.7043 6.20386C11.4993 6.40888 11.1672 6.40888 10.9622 6.20386L8.52563 3.76733V10.5007C8.52536 10.7903 8.28989 11.025 8.00024 11.0251C7.71046 11.0251 7.47512 10.7905 7.47485 10.5007V3.76538L5.03735 6.20386C4.83233 6.40888 4.50019 6.40888 4.29517 6.20386C4.09072 5.99879 4.09033 5.6665 4.29517 5.46167L7.27466 2.48218Z" fill="currentColor"/>',
    })
    o.d(t, {}, { U: a })
  },
  CXCR(e, t, o) {
    let a = (0, o("ESTr").a)({
      name: "circle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.834961, y: 1.834961, width: 16.330078, height: 16.330078 },
        visualBounds: { x: 1.834961, y: 1.834961, width: 16.330078, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.834961, y: 1.834961, width: 16.330078, height: 16.330078 },
        center: { x: 10, y: 10 },
        insets: { top: 1.834961, right: 1.834961, bottom: 1.834961, left: 1.834961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M16.835 10C16.835 6.22513 13.7749 3.16504 10 3.16504C6.22513 3.16504 3.16504 6.22513 3.16504 10C3.16504 13.7749 6.22513 16.835 10 16.835C13.7749 16.835 16.835 13.7749 16.835 10ZM18.165 10C18.165 14.5094 14.5094 18.165 10 18.165C5.49059 18.165 1.83496 14.5094 1.83496 10C1.83496 5.49059 5.49059 1.83496 10 1.83496C14.5094 1.83496 18.165 5.49059 18.165 10Z" fill="currentColor"/>',
    })
    o.d(t, {}, { $: a })
  },
}
//# sourceMappingURL=58193.bdce3ca988.js.map
