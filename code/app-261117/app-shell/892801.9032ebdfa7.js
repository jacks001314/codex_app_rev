export const __rspack_esm_ids = [892801]
export const __webpack_modules__ = {
  WVWQ(e, o, a) {
    a.d(o, { j: () => w, I: () => D })
    var t = a("AGyq"),
      d = a("Qgfj"),
      c = a("CTWI")
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
    let m = (0, d.YK)({
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
      l = {
        realtimeVoice: { description: m.realtimeVoiceDescription, title: m.realtimeVoiceTitle },
        "realtimeVoice.endCall": { description: m.endCallDescription, title: m.endCallTitle },
        "realtimeVoice.toggleMicrophoneMute": {
          description: m.toggleMicrophoneMuteDescription,
          title: m.toggleMicrophoneMuteTitle,
        },
        "realtimeVoice.toggleOutputMute": {
          description: m.toggleOutputMuteDescription,
          title: m.toggleOutputMuteTitle,
        },
      }
    function u(e) {
      return Object.hasOwn(l, e)
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
      f = (0, d.YK)({
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
      h = { ...f, "codex.command.importExternalAgent": g.title, "codex.command.personalitySettings": p.title },
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
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
        },
      }),
      T = {
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
    function D(e, o, a = !1) {
      if ("openOrbit" === e.id) return s(o).title
      if ("focusPageBlockControls" === e.id) return r(o).title
      if ("openAvatarOverlay" === e.id && a) return o.formatMessage(x)
      if ("composer.captureAppshot" === e.id) return n(o).title
      if ("titleIntlId" in e) {
        var t
        let a
        return b(h, e.titleIntlId)
          ? o.formatMessage(h[e.titleIntlId], { dot: "dot" })
          : null == (a = u((t = e.id)) ? l[t] : null)
            ? ""
            : o.formatMessage(a.title)
      }
      return o.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function w(e, o, a, d = !1) {
      var i
      let m
      if ("openOrbit" === e.id) return s(o)
      if ("focusPageBlockControls" === e.id) return r(o)
      if ("composer.captureAppshot" === e.id) return n(o)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            a?.title ??
            o.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
            }),
          description:
            a?.description ??
            o.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
            }),
        }
      let g = (0, t.yF)(e)
          ? b(T, e.descriptionIntlId)
            ? o.formatMessage(T[e.descriptionIntlId], { appName: c.C, dot: "dot" })
            : null == (m = u((i = e.id)) ? l[i] : null)
              ? ""
              : o.formatMessage(m.description)
          : "",
        p = a?.title ?? D(e, o)
      return ("openAvatarOverlay" === e.id && d && (p = D(e, o, !0)), { title: p, description: a?.description ?? g })
    }
    function b(e, o) {
      return Object.hasOwn(e, o)
    }
  },
  Jue3(e, o, a) {
    var t = a("qmMi"),
      d = a("ChYf"),
      c = a("wLMK"),
      n = a("OWtl")
    let i = (0, t.un)(n.u, ({ get: e }) => {
      let o = e(c.V).data?.platform
      return "linux" === o
        ? e(d.G, { name: "dictation.composer" }).isCapable || e(d.G, { name: "dictation.chatgpt" }).isCapable
          ? "app"
          : null
        : ("darwin" === o || "win32" === o) && e(d.G, { name: "dictation.global" }).isCapable
          ? "os-global"
          : null
    })
    a.d(o, {}, { i: i })
  },
  z4p1(e, o, a) {
    var t = a("AGyq")
    function d(
      e,
      {
        allowDebugMenu: o,
        fileLanguageFeaturesEnabled: a,
        isAutomationsEnabled: c,
        isDictationShortcutEnabled: n,
        isScreenshotSelectionEnabled: i,
        isPriorityFilterEnabled: s,
        isRealtimeVoiceCommandEnabled: r,
        isSpotlightEnabled: m,
        isSidebarCollapsible: l,
        modeSwitchAvailable: u,
      },
    ) {
      return (
        "composer.toggleDictation" === e ||
        ("toggleSidebar" === e
          ? l
          : "toggleDebugModal" === e
            ? !0 === o
            : (!!a ||
                ("file.goToDefinition" !== e &&
                  "file.findReferences" !== e &&
                  "file.navigateBack" !== e &&
                  "file.navigateForward" !== e)) &&
              ("screenshotToCurrentChat" === e || "screenshotToNewChat" === e
                ? i
                : "spotlightSearch" === e
                  ? m
                  : "manageTasks" === e
                    ? c
                    : "switchToMode1" === e || "switchToMode2" === e || "switchToMode3" === e
                      ? u
                      : "togglePriorityFilter" === e
                        ? s
                        : (0, t.NL)(e) || "notchVoice" === e
                          ? r
                          : ("globalDictationHold" !== e && "globalDictationSingleTap" !== e) || n))
      )
    }
    a.d(
      o,
      {},
      {
        I: function (
          e,
          {
            allowDebugMenu: o,
            browserEnabled: a,
            commandAccess: c,
            fileLanguageFeaturesEnabled: n,
            isAutomationsEnabled: i,
            isDictationShortcutEnabled: s,
            isScreenshotSelectionEnabled: r,
            isPriorityFilterEnabled: m,
            isRealtimeVoiceCommandEnabled: l,
            isSpotlightEnabled: u,
            isSidebarCollapsible: g,
            modeSwitchAvailable: p,
            platform: x,
          },
        ) {
          let f = (0, t.hF)(e)
          return (
            (null == f || !!(0, t.mg)(f, c)) &&
            !!d(e, {
              allowDebugMenu: o,
              fileLanguageFeaturesEnabled: n,
              isAutomationsEnabled: i,
              isDictationShortcutEnabled: s,
              isScreenshotSelectionEnabled: r,
              isPriorityFilterEnabled: m,
              isRealtimeVoiceCommandEnabled: l,
              isSpotlightEnabled: u,
              isSidebarCollapsible: g,
              modeSwitchAvailable: p,
            }) &&
            ("copyConversationPath" === e || "screenshotToCurrentChat" === e || "screenshotToNewChat" === e
              ? "macOS" === x
              : "hardReloadBrowserPage" === e || "newTab" === e || "reloadBrowserPage" === e
                ? a
                : "toggleTraceRecording" !== e)
          )
        },
        V: function (e, o) {
          return (
            "toggleNotch" !== e.id &&
            "notchVoice" !== e.id &&
            ("screenshotToCurrentChat" === e.id || "screenshotToNewChat" === e.id
              ? o.isScreenshotSelectionEnabled && !0 === o.desktopShortcuts && "macOS" === o.platform && (0, t.mg)(e, o)
              : "personalitySettings" !== e.id && !!(0, t.mg)(e, o) && ("toggleSidebar" === e.id || d(e.id, o)))
          )
        },
      },
    )
  },
  OvVq(e, o, a) {
    var t = a("AGyq")
    let d = ["newTask", "temporaryChat", "archiveThread", "newProjectlessTask", "openSideChat"]
    function c(e) {
      let o = d.indexOf(e)
      return -1 === o ? d.length : o
    }
    function n(e) {
      return "webview" !== e.kind || null == e.unifiedSearchGroupKey
        ? t.tU.length
        : t.tU.indexOf(e.unifiedSearchGroupKey)
    }
    a.d(
      o,
      {},
      {
        N: function (e, o) {
          let a = n(e) - n(o)
          if (0 !== a) return a
          let t = c(e.id) - c(o.id)
          return 0 !== t ? t : e.id.localeCompare(o.id)
        },
      },
    )
  },
  UBSb(e, o, a) {
    a.d(o, { KeyboardShortcutsDialog: () => W })
    var t = a("ABep"),
      d = a("QosV"),
      c = a("qmMi"),
      n = a("zd8w"),
      i = a("Wf1j"),
      s = a("oyxz"),
      r = a("ChYf"),
      m = a("gbrq"),
      l = a("AGyq"),
      u = a("n5iL"),
      g = a("S99C"),
      p = a("WVWQ"),
      x = a("q3HK"),
      f = a("vF5L"),
      h = a("JNtf"),
      M = a("mUDD"),
      T = a("e2yU"),
      D = a("Bbed"),
      w = a("Jue3"),
      b = a("wwME"),
      v = a("z4p1"),
      k = a("OvVq"),
      y = a("l0pH"),
      C = a("aeqi"),
      S = a("BSnr"),
      P = a("AWNZ"),
      A = a("yx3a"),
      R = a("pasN"),
      B = a("hZax"),
      O = a("iiZm")
    let F = [...l.tU, "general"]
    var j = a("TP69")
    let N = (0, D._)(
      async () =>
        (await Promise.all([a.e(972506), a.e(350206)]).then(a.bind(a, "pbhu"))).ChatGptKeyboardShortcutsDialog,
    )
    function W(e) {
      let o,
        a = (0, d.c)(3),
        { onOpenChange: n } = e,
        i = "work" === (0, c.Ul)(R.l)
      return (
        a[0] !== i || a[1] !== n
          ? ((o = i ? (0, t.jsx)(N, { onOpenChange: n }) : (0, t.jsx)(G, { onOpenChange: n })),
            (a[0] = i),
            (a[1] = n),
            (a[2] = o))
          : (o = a[2]),
        o
      )
    }
    function G(e) {
      let o,
        a,
        n,
        s,
        M,
        T,
        D = (0, d.c)(26),
        { onOpenChange: k } = e,
        S = (0, i.A)(),
        { platform: P } = (0, b.V)()
      D[0] === Symbol.for("react.memo_cache_sentinel") ? ((o = { name: "browser.in-app" }), (D[0] = o)) : (o = D[0])
      let R = (0, c._U)(r.G, o).isCapable,
        O = (0, c.Ul)(g.W),
        F = (0, c.Ul)(f.tu),
        j = !0 === (0, c.Ul)(C.P),
        N = null != (0, c.Ul)(w.i)
      D[1] === Symbol.for("react.memo_cache_sentinel") ? ((a = { name: "automations.local" }), (D[1] = a)) : (a = D[1])
      let W = (0, c._U)(r.G, a).isCapable
      D[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { name: "automations.cloud" }), (D[2] = n)) : (n = D[2])
      let G = (0, c._U)(r.G, n).isCapable,
        I = (0, B.Zj)("3009531526"),
        q = (0, B.Zj)("983842163"),
        _ = (0, c.Ul)(m.gU),
        K = (0, B.Zj)("1532120159"),
        U = (0, y.g)(),
        H = (0, f.ZJ)(F, "toggleDebugModal") > 0,
        z = (0, A.v)(),
        Q = (0, c.Ul)(u.nH)
      D[3] !== H ||
      D[4] !== R ||
      D[5] !== O ||
      D[6] !== j ||
      D[7] !== S ||
      D[8] !== G ||
      D[9] !== N ||
      D[10] !== W ||
      D[11] !== K ||
      D[12] !== U ||
      D[13] !== q ||
      D[14] !== _ ||
      D[15] !== I ||
      D[16] !== Q ||
      D[17] !== P ||
      D[18] !== z ||
      D[19] !== F
        ? ((s =
            null == Q
              ? null
              : (function ({
                  keymapState: e,
                  registeredCommands: o,
                  hasBaseCommandHandler: a,
                  isCommandAvailable: t,
                  platform: d,
                }) {
                  return l.zQ.filter(l.AK).flatMap((c) => {
                    if (!t(c.id)) return []
                    let n = (0, u.Dq)(c.id, e, d)
                    return 0 !== n.length && ("webview" !== c.kind || a(c.id) || (o[c.id]?.length ?? 0) !== 0)
                      ? [{ command: c, shortcutEntries: n }]
                      : []
                  })
                })({
                  keymapState: Q,
                  registeredCommands: F,
                  hasBaseCommandHandler: x.Zu,
                  isCommandAvailable: (e) =>
                    (0, v.I)(e, {
                      allowDebugMenu: H,
                      browserEnabled: R,
                      commandAccess: O,
                      fileLanguageFeaturesEnabled: j,
                      isAutomationsEnabled: W || G,
                      isDictationShortcutEnabled: N,
                      isSpotlightEnabled: I,
                      isScreenshotSelectionEnabled: q,
                      isSidebarCollapsible: _,
                      isPriorityFilterEnabled: z,
                      isRealtimeVoiceCommandEnabled: U,
                      modeSwitchAvailable: (0, f.ZJ)(F, e) > 0,
                      platform: P,
                    }),
                  platform: P,
                })
                  .sort(V)
                  .map((e) => {
                    let { command: o, shortcutEntries: a } = e,
                      t = (0, p.j)(o, S, (0, f.iG)(F, o.id), K)
                    return {
                      id: o.id,
                      ...t,
                      shortcutLabels: a.map(L),
                      sectionKey:
                        "webview" === o.kind && null != o.unifiedSearchGroupKey ? o.unifiedSearchGroupKey : "general",
                    }
                  })),
          (D[3] = H),
          (D[4] = R),
          (D[5] = O),
          (D[6] = j),
          (D[7] = S),
          (D[8] = G),
          (D[9] = N),
          (D[10] = W),
          (D[11] = K),
          (D[12] = U),
          (D[13] = q),
          (D[14] = _),
          (D[15] = I),
          (D[16] = Q),
          (D[17] = P),
          (D[18] = z),
          (D[19] = F),
          (D[20] = s))
        : (s = D[20])
      let Y = s
      return (
        D[21] !== Y ? ((M = (0, t.jsx)(E, { items: Y })), (D[21] = Y), (D[22] = M)) : (M = D[22]),
        D[23] !== k || D[24] !== M
          ? ((T = (0, t.jsx)(h.lG, { open: !0, onOpenChange: k, size: "wide", children: M })),
            (D[23] = k),
            (D[24] = M),
            (D[25] = T))
          : (T = D[25]),
        T
      )
    }
    function L(e) {
      let { label: o } = e
      return o
    }
    function V(e, o) {
      return (0, k.N)(e.command, o.command)
    }
    function E(e) {
      let o,
        a,
        c,
        i,
        r,
        m,
        l,
        u,
        g,
        p,
        x,
        f = (0, d.c)(26),
        { items: T } = e,
        [D, w] = (0, n.useState)("")
      if (f[0] !== T || f[1] !== D) {
        let e,
          d,
          n,
          p =
            null == T
              ? null
              : ((e = D.trim()),
                (d = (0, O.WE)(e)),
                (n = T.filter(
                  (o) =>
                    "personalitySettings" !== o.id &&
                    (0 === e.length || [o.id, o.title, o.description].some((e) => d(e) > 0)),
                )),
                F.flatMap((e) => {
                  let o = n.filter((o) => o.sectionKey === e)
                  return 0 === o.length ? [] : [{ key: e, items: o }]
                }))
        ;((a = M.R4),
          (l = "tall"),
          f[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, t.jsx)(M.c7, {
                title: (0, t.jsx)(h.L3, {
                  children: (0, t.jsx)(s.A, {
                    id: "keyboardShortcutsDialog.title",
                    defaultMessage: "Keyboard shortcuts",
                  }),
                }),
              })),
              (f[11] = u))
            : (u = f[11]),
          (g =
            null == T
              ? null
              : (0, t.jsx)(M.OO, {
                  className: "pb-3",
                  children: (0, t.jsx)(j.d, { autoFocus: !0, value: D, onValueChange: w }),
                })),
          (o = M.OO),
          (c = "min-h-0 flex-1 overflow-y-auto pe-3 pt-0!"),
          f[12] !== T
            ? ((i =
                null == T
                  ? (0, t.jsx)("div", {
                      className: "py-1 text-sm text-secondary",
                      children: (0, t.jsx)(s.A, {
                        id: "keyboardShortcutsDialog.loading",
                        defaultMessage: "Loading shortcuts\u2026",
                      }),
                    })
                  : null),
              (f[12] = T),
              (f[13] = i))
            : (i = f[13]),
          (r =
            p?.length === 0
              ? (0, t.jsx)("div", {
                  className: "py-1 text-sm text-secondary",
                  children:
                    0 === D.trim().length
                      ? (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.empty", defaultMessage: "No active shortcuts" })
                      : (0, t.jsx)(s.A, {
                          id: "keyboardShortcutsDialog.noMatches",
                          defaultMessage: "No matching shortcuts",
                        }),
                })
              : null),
          (m = p?.map(I)),
          (f[0] = T),
          (f[1] = D),
          (f[2] = o),
          (f[3] = a),
          (f[4] = c),
          (f[5] = i),
          (f[6] = r),
          (f[7] = m),
          (f[8] = l),
          (f[9] = u),
          (f[10] = g))
      } else
        ((o = f[2]), (a = f[3]), (c = f[4]), (i = f[5]), (r = f[6]), (m = f[7]), (l = f[8]), (u = f[9]), (g = f[10]))
      return (
        f[14] !== o || f[15] !== c || f[16] !== i || f[17] !== r || f[18] !== m
          ? ((p = (0, t.jsxs)(o, { className: c, children: [i, r, m] })),
            (f[14] = o),
            (f[15] = c),
            (f[16] = i),
            (f[17] = r),
            (f[18] = m),
            (f[19] = p))
          : (p = f[19]),
        f[20] !== a || f[21] !== l || f[22] !== u || f[23] !== g || f[24] !== p
          ? ((x = (0, t.jsxs)(a, { size: l, children: [u, g, p] })),
            (f[20] = a),
            (f[21] = l),
            (f[22] = u),
            (f[23] = g),
            (f[24] = p),
            (f[25] = x))
          : (x = f[25]),
        x
      )
    }
    function I(e) {
      return (0, t.jsxs)(
        S.X,
        {
          children: [
            (0, t.jsx)(S.X.Header, { title: (0, t.jsx)(K, { sectionKey: e.key }) }),
            (0, t.jsx)(S.X.Content, { children: e.items.map(q) }),
          ],
        },
        e.key,
      )
    }
    function q(e) {
      return (0, t.jsx)(
        P.$5,
        {
          compactLabelInset: !1,
          label: e.title,
          variant: "compact",
          children: (0, t.jsx)(M.fh, { children: e.shortcutLabels.map(_) }),
        },
        e.id,
      )
    }
    function _(e) {
      return (0, t.jsx)(T.x, { keysLabel: e }, e)
    }
    function K(e) {
      let o = (0, d.c)(8),
        { sectionKey: a } = e
      switch (a) {
        case "thread": {
          let e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.section.thread", defaultMessage: "Chat" })),
                (o[0] = e))
              : (e = o[0]),
            e
          )
        }
        case "navigation": {
          let e
          return (
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.navigation",
                  defaultMessage: "Navigation",
                })),
                (o[1] = e))
              : (e = o[1]),
            e
          )
        }
        case "panels": {
          let e
          return (
            o[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.section.panels", defaultMessage: "Panels" })),
                (o[2] = e))
              : (e = o[2]),
            e
          )
        }
        case "workspace": {
          let e
          return (
            o[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.section.workspace", defaultMessage: "Project" })),
                (o[3] = e))
              : (e = o[3]),
            e
          )
        }
        case "skills": {
          let e
          return (
            o[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.section.skills", defaultMessage: "Skills" })),
                (o[4] = e))
              : (e = o[4]),
            e
          )
        }
        case "configure": {
          let e
          return (
            o[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.configure",
                  defaultMessage: "Configure",
                })),
                (o[5] = e))
              : (e = o[5]),
            e
          )
        }
        case "app": {
          let e
          return (
            o[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.section.app", defaultMessage: "App" })),
                (o[6] = e))
              : (e = o[6]),
            e
          )
        }
        case "general": {
          let e
          return (
            o[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(s.A, { id: "keyboardShortcutsDialog.section.general", defaultMessage: "General" })),
                (o[7] = e))
              : (e = o[7]),
            e
          )
        }
      }
    }
  },
  TP69(e, o, a) {
    var t = a("ABep"),
      d = a("QosV"),
      c = a("zd8w"),
      n = a("Wf1j"),
      i = a("okCa"),
      s = a("Bwkw")
    function r() {
      return null
    }
    a.d(
      o,
      {},
      {
        d: function (e) {
          let o,
            a,
            m,
            l,
            u,
            g,
            p,
            x,
            f,
            h,
            M = (0, d.c)(37),
            {
              autoFocus: T,
              ariaLabel: D,
              isSearchingByKeystrokes: w,
              placeholder: b,
              trailingContent: v,
              onCapture: k,
              onKeyDown: y,
              value: C,
              onValueChange: S,
            } = e,
            P = void 0 !== w && w,
            A = (0, c.useId)(),
            R = (0, n.A)(),
            B = (0, c.useRef)(null),
            [O, F] = (0, c.useState)(!1),
            j = (0, c.useRef)(P)
          ;(M[0] !== P
            ? ((o = () => {
                ;(j.current && !P && B.current?.focus(), (j.current = P))
              }),
              (a = [P]),
              (M[0] = P),
              (M[1] = o),
              (M[2] = a))
            : ((o = M[1]), (a = M[2])),
            (0, c.useLayoutEffect)(o, a),
            M[3] !== D || M[4] !== R || M[5] !== P
              ? ((m = P
                  ? R.formatMessage({
                      id: "settings.keyboardShortcuts.keystrokeSearch.ariaLabel",
                      defaultMessage: "Keystroke search capture",
                    })
                  : (D ??
                    R.formatMessage({
                      id: "settings.keyboardShortcuts.search.ariaLabel",
                      defaultMessage: "Search keyboard shortcuts",
                    }))),
                (M[3] = D),
                (M[4] = R),
                (M[5] = P),
                (M[6] = m))
              : (m = M[6]))
          let N = m
          M[7] !== R || M[8] !== P || M[9] !== b
            ? ((l = P
                ? R.formatMessage({
                    id: "settings.keyboardShortcuts.keystrokeSearch.placeholder",
                    defaultMessage: "Press shortcut to search",
                  })
                : (b ??
                  R.formatMessage({
                    id: "settings.keyboardShortcuts.search.placeholder",
                    defaultMessage: "Search shortcuts",
                  }))),
              (M[7] = R),
              (M[8] = P),
              (M[9] = b),
              (M[10] = l))
            : (l = M[10])
          let W = l,
            G = P || void 0
          ;(M[11] === Symbol.for("react.memo_cache_sentinel") ? ((u = () => F(!1)), (M[11] = u)) : (u = M[11]),
            M[12] !== O || M[13] !== P || M[14] !== k
              ? ((g =
                  P &&
                  O &&
                  null != k &&
                  (0, t.jsx)(s.R, {
                    allowsBareModifiers: !1,
                    onCapture: k,
                    onCancel: () => {
                      ;(F(!1), B.current?.blur())
                    },
                    children: r,
                  })),
                (M[12] = O),
                (M[13] = P),
                (M[14] = k),
                (M[15] = g))
              : (g = M[15]))
          let L = P ? "keystrokes" : "text",
            V = !P
          return (
            M[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = () => F(!0)), (M[16] = p)) : (p = M[16]),
            M[17] !== y || M[18] !== S || M[19] !== C
              ? ((x = (e) => {
                  ;(y?.(e),
                    e.defaultPrevented ||
                      "Escape" !== e.key ||
                      "" === C ||
                      (e.preventDefault(), e.stopPropagation(), S("")))
                }),
                (M[17] = y),
                (M[18] = S),
                (M[19] = C),
                (M[20] = x))
              : (x = M[20]),
            M[21] !== T ||
            M[22] !== A ||
            M[23] !== W ||
            M[24] !== P ||
            M[25] !== N ||
            M[26] !== S ||
            M[27] !== V ||
            M[28] !== x ||
            M[29] !== L ||
            M[30] !== v ||
            M[31] !== C
              ? ((f = (0, t.jsx)(i.s, {
                  id: A,
                  autoFocus: T,
                  inputRef: B,
                  inputKey: L,
                  isClearable: V,
                  label: N,
                  placeholder: W,
                  readOnly: P,
                  searchQuery: C,
                  trailingControl: v,
                  onFocus: p,
                  onKeyDown: x,
                  onSearchQueryChange: S,
                })),
                (M[21] = T),
                (M[22] = A),
                (M[23] = W),
                (M[24] = P),
                (M[25] = N),
                (M[26] = S),
                (M[27] = V),
                (M[28] = x),
                (M[29] = L),
                (M[30] = v),
                (M[31] = C),
                (M[32] = f))
              : (f = M[32]),
            M[33] !== f || M[34] !== G || M[35] !== g
              ? ((h = (0, t.jsxs)("div", { "data-codex-shortcut-capture": G, onBlur: u, children: [g, f] })),
                (M[33] = f),
                (M[34] = G),
                (M[35] = g),
                (M[36] = h))
              : (h = M[36]),
            h
          )
        },
      },
    )
  },
  Bwkw(e, o, a) {
    var t = a("QosV"),
      d = a("zd8w"),
      c = a("GaA7")
    a.d(
      o,
      {},
      {
        R: function (e) {
          let o,
            a,
            n,
            i = (0, t.c)(12),
            { children: s, dictationKeys: r, allowsBareModifiers: m, onCapture: l, onCancel: u } = e,
            g = void 0 !== r && r,
            p = c.appServices?.shortcutCapture,
            [x, f] = (0, d.useState)(null == p),
            [h, M] = (0, d.useState)(!1),
            T = (0, d.useEffectEvent)(u),
            D = (0, d.useEffectEvent)(l)
          return (
            i[0] !== m || i[1] !== T || i[2] !== D || i[3] !== g
              ? ((o = () => {
                  let e
                  if (null == p) return
                  let o = !0
                  return (
                    (async () => {
                      try {
                        let a = await p.beginCapture()
                        if (!o) return void a?.[Symbol.dispose]()
                        if (null == a) return void T()
                        e = () => a[Symbol.dispose]()
                        let t = (m || g) && (await a.startBareModifierCapture(g ? "dictation-keys" : void 0))
                        if (!o) return
                        ;(M(t),
                          f(!0),
                          (async () => {
                            try {
                              for (; o;) {
                                let e = await a.nextShortcut()
                                if (!o) return
                                if (null == e) return void T()
                                D(e)
                              }
                            } catch {
                              o && T()
                            }
                          })(),
                          await a.waitForEnd(),
                          o && T())
                      } catch {
                        o && T()
                      }
                    })(),
                    () => {
                      ;((o = !1), e?.())
                    }
                  )
                }),
                (i[0] = m),
                (i[1] = T),
                (i[2] = D),
                (i[3] = g),
                (i[4] = o))
              : (o = i[4]),
            i[5] !== m || i[6] !== g ? ((a = [p, m, g]), (i[5] = m), (i[6] = g), (i[7] = a)) : (a = i[7]),
            (0, d.useEffect)(o, a),
            i[8] !== h || i[9] !== s || i[10] !== x
              ? ((n = x ? s(h) : null), (i[8] = h), (i[9] = s), (i[10] = x), (i[11] = n))
              : (n = i[11]),
            n
          )
        },
      },
    )
  },
}
//# sourceMappingURL=892801.9032ebdfa7.js.map
