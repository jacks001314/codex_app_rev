export const __rspack_esm_ids = [739641]
export const __webpack_modules__ = {
  WVWQ(e, o, t) {
    t.d(o, { j: () => v, I: () => M })
    var i = t("X2Bp"),
      n = t("Qgfj"),
      a = t("CTWI")
    function c(e) {
      return { title: e.formatMessage(d.title), description: e.formatMessage(d.description) }
    }
    let d = (0, n.YK)({
      title: {
        id: "codex.command.composer.captureAppshot",
        defaultMessage: "Capture appshot",
        description: "Codex Micro action for capturing an appshot",
      },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
        description: "Description for the Codex Micro Appshot action",
      },
    })
    function s(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.openOrbit.dot",
          defaultMessage: "Open your dot",
          description:
            "Command palette and keyboard shortcut settings title for opening the user's dot assistant conversation. Keep the singular term dot untranslated.",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.openOrbit.dot",
          defaultMessage: "Open your dot conversation",
          description:
            "Description for the command that navigates to the user's existing dot assistant conversation. Keep the singular term dot untranslated.",
        }),
      }
    }
    function r(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.focusPageBlockControls",
          defaultMessage: "Focus content controls",
          description:
            "Keyboard shortcut settings row for moving focus from the Page document editor to the controls for the current content block",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.focusPageBlockControls",
          defaultMessage: "Move keyboard focus from the Page editor to the current content's controls",
          description:
            "Description for the shortcut that focuses controls for moving a content block or changing its layout, available while editing a Page document",
        }),
      }
    }
    let m = (0, n.YK)({
        endCallDescription: {
          id: "codex.commandDescription.realtimeVoice.endCall",
          defaultMessage: "End the active Voice Chat",
          description: "Description for the End Voice Chat shortcut",
        },
        endCallTitle: {
          id: "codex.command.realtimeVoice.endCall",
          defaultMessage: "End Voice Chat",
          description: "Shortcut settings row for ending Voice Chat",
        },
        realtimeVoiceDescription: {
          id: "codex.commandDescription.realtimeVoice",
          defaultMessage: "Start a Voice Chat from anywhere on desktop",
          description: "Description for the realtime voice hotkey",
        },
        realtimeVoiceTitle: {
          id: "codex.command.realtimeVoice",
          defaultMessage: "Voice Chat hotkey",
          description: "Shortcut settings row for the realtime voice hotkey",
        },
        toggleMicrophoneMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Mute or unmute your microphone during a Voice Chat",
          description: "Description for the Toggle voice microphone shortcut",
        },
        toggleMicrophoneMuteTitle: {
          id: "codex.command.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Toggle Voice Chat microphone",
          description: "Shortcut settings row for toggling the voice microphone",
        },
        toggleOutputMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleOutputMute",
          defaultMessage: "Mute or unmute Voice Chat audio",
          description: "Description for the Toggle voice audio shortcut",
        },
        toggleOutputMuteTitle: {
          id: "codex.command.realtimeVoice.toggleOutputMute",
          defaultMessage: "Toggle Voice Chat audio",
          description: "Shortcut settings row for toggling voice audio",
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
    function p(e) {
      return Object.hasOwn(l, e)
    }
    let u = (0, n.YK)({
        title: {
          id: "codex.command.importExternalAgent",
          defaultMessage: "Import from other AI apps",
          description: "Command menu item to import work from another AI app",
        },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
          description: "Description for the external agent import command",
        },
      }),
      h = (0, n.YK)({
        title: {
          id: "codex.command.personalitySettings",
          defaultMessage: "Personality",
          description: "Command menu item to open personality settings",
        },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
          description: "Description for the Personality settings command",
        },
      }),
      g = (0, n.zR)({
        id: "codex.command.showMiniOverlay",
        defaultMessage: "Show Mini",
        description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
      }),
      f = (0, n.YK)({
        "codex.command.importPrismToLocal": {
          id: "codex.command.importPrismToLocal",
          defaultMessage: "Import from Prism…",
          description: "Command to copy an owned Prism project into a new local folder",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": {
          id: "codex.commandMenuTitle.toggleFileTreePanel",
          defaultMessage: "Toggle navigation panel",
          description:
            "Native menu, command palette, and shortcut settings title for showing or hiding the active Page's navigation panel or the code file tree",
        },
        "codex.command.meetings.takeNotes": {
          id: "codex.command.meetings.takeNotes",
          defaultMessage: "Meetings: Take notes",
          description: "Command palette and keyboard shortcut settings title for starting a local Meetings recording",
        },
        "codex.command.screenshotToCurrentChat": {
          id: "codex.command.screenshotToCurrentChat",
          defaultMessage: "Screenshot selection to current chat",
          description: "Title of the macOS global shortcut to capture a rectangular screen region for this destination",
        },
        "codex.command.screenshotToNewChat": {
          id: "codex.command.screenshotToNewChat",
          defaultMessage: "Screenshot selection to new chat",
          description: "Title of the macOS global shortcut to capture a rectangular screen region for this destination",
        },
        "codex.command.artifacts.selectTool": {
          id: "codex.command.artifacts.selectTool",
          defaultMessage: "Artifacts: Select",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: select tool",
        },
        "codex.command.artifacts.handTool": {
          id: "codex.command.artifacts.handTool",
          defaultMessage: "Artifacts: Pan",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: pan tool",
        },
        "codex.command.canvas.prompt": {
          id: "codex.command.canvas.prompt",
          defaultMessage: "Canvas: Ask ChatGPT",
          description: "Command palette and shortcut settings title for opening the Canvas prompt at the pointer",
        },
        "codex.command.artifacts.rectangleTool": {
          id: "codex.command.artifacts.rectangleTool",
          defaultMessage: "Artifacts: Rectangle",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: rectangle tool",
        },
        "codex.command.artifacts.circleTool": {
          id: "codex.command.artifacts.circleTool",
          defaultMessage: "Artifacts: Circle",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: circle tool",
        },
        "codex.command.artifacts.arrowTool": {
          id: "codex.command.artifacts.arrowTool",
          defaultMessage: "Artifacts: Arrow",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: arrow tool",
        },
        "codex.command.artifacts.lineTool": {
          id: "codex.command.artifacts.lineTool",
          defaultMessage: "Artifacts: Line",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: line tool",
        },
        "codex.command.artifacts.textTool": {
          id: "codex.command.artifacts.textTool",
          defaultMessage: "Artifacts: Text",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: text tool",
        },
        "codex.command.artifacts.noteTool": {
          id: "codex.command.artifacts.noteTool",
          defaultMessage: "Artifacts: Note",
          description:
            "Command palette and shortcut settings title for the Canvas sticky-note drawing tool in the shared Artifacts command family",
        },
        "codex.command.page.addComment": {
          id: "codex.command.page.addComment",
          defaultMessage: "Add Page comment",
          description: "Keyboard shortcut title for starting a comment in the focused Page editor",
        },
        "codex.command.page.formatNumberedList": {
          id: "codex.command.page.formatNumberedList",
          defaultMessage: "Numbered list",
          description: "Page editor command that applies numbered list formatting to the selected text",
        },
        "codex.command.page.formatBulletedList": {
          id: "codex.command.page.formatBulletedList",
          defaultMessage: "Bulleted list",
          description: "Page editor command that applies bulleted list formatting to the selected text",
        },
        "codex.command.page.formatChecklist": {
          id: "codex.command.page.formatChecklist",
          defaultMessage: "Checklist",
          description: "Page editor command that toggles checklist formatting for the selected text",
        },
        "codex.command.newThread": {
          id: "codex.command.newThread",
          defaultMessage: "New chat",
          description: "Command menu item to start a new chat",
        },
        "codex.command.newProjectlessTask": {
          id: "codex.command.newProjectlessTask",
          defaultMessage: "New standalone chat",
          description: "Command menu item to start a new standalone chat",
        },
        "codex.command.temporaryChat": {
          id: "codex.command.temporaryChat",
          defaultMessage: "New Temporary Chat",
          description: "Command menu item to start a temporary chat",
        },
        "codex.command.openThreadInNewWindow": {
          id: "codex.command.openThreadInNewWindow",
          defaultMessage: "Open in new window",
          description: "Command menu item to open the current chat in a new window",
        },
        "codex.command.archiveThread": {
          id: "codex.command.archiveThread",
          defaultMessage: "Archive chat",
          description: "Command menu item to archive the current chat",
        },
        "codex.command.deleteOrbit": {
          id: "codex.command.deleteOrbit",
          defaultMessage: "Delete {dot}",
          description:
            "Command to open confirmation to permanently delete the current assistant. The dot placeholder is the untranslated term for the user's agent.",
        },
        "codex.command.deleteChat": {
          id: "codex.command.deleteChat",
          defaultMessage: "Delete chat",
          description:
            "Keyboard shortcut settings row for opening the confirmation to permanently delete the current saved ChatGPT chat",
        },
        "codex.command.markThreadUnread": {
          id: "codex.command.markThreadUnread",
          defaultMessage: "Mark as unread",
          description: "Command menu item to mark the current chat as unread",
        },
        "codex.command.toggleThreadPin": {
          id: "codex.command.toggleThreadPin",
          defaultMessage: "Toggle pin",
          description: "Command menu item to toggle whether the current chat is pinned",
        },
        "codex.command.copyPageLink": {
          id: "codex.command.copyPageLink",
          defaultMessage: "Copy document link",
          description: "Command that copies a link to the current document, including a Page, slide, or sheet",
        },
        "codex.command.copyConversationMarkdown": {
          id: "codex.command.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
          description: "Shortcut settings row for copying the current chat as Markdown",
        },
        "codex.command.copyLastCodeBlock": {
          id: "codex.command.copyLastCodeBlock",
          defaultMessage: "Copy last code block",
          description:
            "Command menu item and keyboard shortcut settings label for copying the most recent assistant code block in the current Chat conversation",
        },
        "codex.command.openSideChat": {
          id: "codex.command.openSideChat",
          defaultMessage: "Open side chat",
          description: "Shortcut settings row for opening the current chat as a side chat",
        },
        "codex.command.focusMainChat": {
          id: "codex.command.focusMainChat",
          defaultMessage: "Focus main chat",
          description: "Command menu item to focus the main chat composer",
        },
        "codex.command.focusSideChat": {
          id: "codex.command.focusSideChat",
          defaultMessage: "Focus side chat",
          description: "Command menu item to focus an open side chat composer",
        },
        "codex.command.openControlWindow": {
          id: "codex.command.openControlWindow",
          defaultMessage: "Open control window",
          description: "Command menu item to open the control window",
        },
        "codex.command.toggleDebugModal": {
          id: "codex.command.toggleDebugModal",
          defaultMessage: "Toggle debug panel",
          description: "Shortcut settings row for showing or hiding the internal debug panel within the current window",
        },
        "codex.command.undoAppAction": {
          id: "codex.command.undoAppAction",
          defaultMessage: "Undo last action",
          description: "Command menu item to undo the most recent app action",
        },
        "codex.command.redoAppAction": {
          id: "codex.command.redoAppAction",
          defaultMessage: "Redo last action",
          description: "Command menu item to redo the most recently undone app action",
        },
        "codex.command.reopenClosedTab": {
          id: "codex.command.reopenClosedTab",
          defaultMessage: "Reopen closed tab",
          description: "Command menu item to reopen the most recently closed tab",
        },
        "codex.command.composer.openModelPicker": {
          id: "codex.command.composer.openModelPicker",
          defaultMessage: "Select effort",
          description:
            "Shortcut settings row for opening the composer controls that set how much reasoning effort the model uses",
        },
        "codex.command.composer.openRecentModels": {
          id: "codex.command.composer.openRecentModels",
          defaultMessage: "Open recent models",
          description:
            "Shortcut settings row for opening recently used model, effort, and speed combinations in the composer",
        },
        "codex.command.composer.openProjectPicker": {
          id: "codex.command.composer.openProjectPicker",
          defaultMessage: "Open project picker",
          description: "Shortcut settings row for opening the project picker",
        },
        "codex.command.composer.toggleDictation": {
          id: "codex.command.composer.toggleDictation",
          defaultMessage: "Toggle dictation",
          description: "Keyboard shortcut label for starting or stopping microphone dictation in the chat composer",
        },
        "codex.command.composer.startVoiceMode": {
          id: "codex.command.composer.startVoiceMode",
          defaultMessage: "Toggle voice chat",
          description: "Shortcut settings row for toggling voice mode",
        },
        "codex.command.composer.submit": {
          id: "codex.command.composer.submit",
          defaultMessage: "Send message",
          description: "Shortcut settings row for sending the current composer message",
        },
        "codex.command.browser.toggleAnnotationMode": {
          id: "codex.command.browser.toggleAnnotationMode",
          defaultMessage: "Toggle annotation mode",
          description: "Shortcut settings row for entering or leaving annotation mode in the in-app browser",
        },
        "codex.command.presentation.duplicateSelection": {
          id: "codex.command.presentation.duplicateSelection",
          defaultMessage: "Duplicate presentation selection",
          description: "Shortcut settings row for duplicating selected slide objects",
        },
        "codex.command.artifact.sendAnnotations": {
          id: "codex.command.artifact.sendAnnotations",
          defaultMessage: "Send annotations",
          description: "Shortcut settings row for sending pending artifact annotations",
        },
        "codex.command.composer.submitInBackground": {
          id: "codex.command.composer.submitInBackground",
          defaultMessage: "Send message in background",
          description: "Shortcut settings row for sending a new composer message without opening its chat",
        },
        "codex.command.composer.steer": {
          id: "codex.command.composer.steer",
          defaultMessage: "Steer prompt",
          description: "Shortcut settings row for submitting the current composer prompt as a steering message",
        },
        "codex.command.composer.queue": {
          id: "codex.command.composer.queue",
          defaultMessage: "Queue prompt",
          description: "Shortcut settings row for submitting the current composer prompt as a queued message",
        },
        "codex.command.composer.clear": {
          id: "codex.command.composer.clear",
          defaultMessage: "Clear prompt",
          description: "Shortcut settings row for clearing the composer prompt",
        },
        "codex.command.composer.addPhotos": {
          id: "codex.command.composer.addPhotos",
          defaultMessage: "Add photos",
          description: "Shortcut settings row for adding photos to the composer",
        },
        "codex.command.composer.addFiles": {
          id: "codex.command.composer.addFiles",
          defaultMessage: "Attach files and folders",
          description: "Shortcut settings row for attaching files and folders to the composer",
        },
        "codex.command.composer.toggleFastMode": {
          id: "codex.command.composer.toggleFastMode",
          defaultMessage: "Cycle speed",
          description: "Shortcut settings row for cycling through available model speeds",
        },
        "codex.command.composer.increaseReasoningEffort": {
          id: "codex.command.composer.increaseReasoningEffort",
          defaultMessage: "Increase reasoning effort",
          description: "Shortcut settings row for increasing reasoning effort",
        },
        "codex.command.composer.decreaseReasoningEffort": {
          id: "codex.command.composer.decreaseReasoningEffort",
          defaultMessage: "Decrease reasoning effort",
          description: "Shortcut settings row for decreasing reasoning effort",
        },
        "codex.command.composer.cycleReasoningEffort": {
          id: "codex.command.composer.cycleReasoningEffort",
          defaultMessage: "Cycle reasoning effort",
          description: "Shortcut settings row for cycling reasoning effort",
        },
        "codex.command.composer.togglePlanMode": {
          id: "codex.command.composer.togglePlanMode",
          defaultMessage: "Toggle plan mode",
          description: "Shortcut settings row for toggling plan mode",
        },
        "codex.command.composer.toggleWorktreeMode": {
          id: "codex.command.composer.toggleWorktreeMode",
          defaultMessage: "Toggle Local/Worktree",
          description: "Shortcut settings row for toggling Local and Worktree mode",
        },
        "codex.command.composer.cycleHost": {
          id: "codex.command.composer.cycleHost",
          defaultMessage: "Cycle host",
          description: "Shortcut settings row for cycling between local and remote machines",
        },
        "codex.command.composer.toggleWorkRunLocation": {
          id: "codex.command.composer.toggleWorkRunLocation",
          defaultMessage: "Toggle Cloud/Local",
          description: "Shortcut settings row for toggling ChatGPT Work between Cloud and Local",
        },
        "codex.command.approval.approve": {
          id: "codex.command.approval.approve",
          defaultMessage: "Approve request",
          description: "Shortcut settings row for approving the active request",
        },
        "codex.command.approval.decline": {
          id: "codex.command.approval.decline",
          defaultMessage: "Decline request",
          description: "Shortcut settings row for declining the active request",
        },
        "codex.command.git.commit": {
          id: "codex.command.git.commit",
          defaultMessage: "Commit or push",
          description: "Command menu item for committing or pushing local changes",
        },
        "codex.command.git.createPullRequest": {
          id: "codex.command.git.createPullRequest",
          defaultMessage: "Create PR",
          description: "Command menu item for creating a pull request",
        },
        "codex.command.git.createDraftPullRequest": {
          id: "codex.command.git.createDraftPullRequest",
          defaultMessage: "Create draft PR",
          description: "Command menu item for creating a draft pull request",
        },
        "codex.command.git.createBranch": {
          id: "codex.command.git.createBranch",
          defaultMessage: "Create branch",
          description: "Command menu item for creating a branch",
        },
        "codex.command.git.mergePullRequest": {
          id: "codex.command.git.mergePullRequest",
          defaultMessage: "Merge PR",
          description: "Command menu item for merging a pull request",
        },
        "codex.command.git.openPullRequest": {
          id: "codex.command.git.openPullRequest",
          defaultMessage: "Open PR on GitHub",
          description: "Command menu item for opening the linked pull request",
        },
        "codex.command.git.toggleBlame": {
          id: "codex.command.git.toggleBlame",
          defaultMessage: "Toggle Git blame",
          description: "Command menu item for toggling active-line Git blame",
        },
        "codex.command.forkThread": {
          id: "codex.command.forkThread",
          defaultMessage: "Fork chat",
          description: "Shortcut settings row for forking the current chat",
        },
        "codex.command.showMiniOverlay": {
          id: "codex.command.showMiniOverlay",
          defaultMessage: "Show Mini",
          description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
        },
        "codex.command.searchChats": {
          id: "codex.command.searchChats",
          defaultMessage: "Switch chat…",
          description: "Command menu item that opens chat search",
        },
        "codex.command.searchChatsPrevious": {
          id: "codex.command.searchChatsPrevious",
          defaultMessage: "Switch chat (previous)…",
          description: "Keyboard shortcut that opens the chat picker and cycles its selection backward",
        },
        "codex.command.togglePriorityFilter": {
          id: "codex.command.togglePriorityFilter",
          defaultMessage: "Toggle activity view",
          description: "Command menu item that opens or closes the sidebar activity view",
        },
        "codex.command.nextThreadNeedingAttention": {
          id: "codex.command.nextThreadNeedingAttention",
          defaultMessage: "Next chat needing attention",
          description:
            "Command menu item that opens the highest-priority chat awaiting user input or containing unread activity",
        },
        "codex.command.previousThread": {
          id: "codex.command.previousThread",
          defaultMessage: "Previous sidebar item",
          description: "Command menu item to go to the previous sidebar item",
        },
        "codex.command.previousTab": {
          id: "codex.command.previousTab",
          defaultMessage: "Previous tab",
          description: "Shortcut settings row for switching to the previous tab",
        },
        "codex.command.previousRecentThread": {
          id: "codex.command.previousRecentThread",
          defaultMessage: "Previous recently viewed chat",
          description: "Shortcut settings row for cycling to the previous recently viewed chat",
        },
        "codex.command.nextThread": {
          id: "codex.command.nextThread",
          defaultMessage: "Next sidebar item",
          description: "Command menu item to go to the next sidebar item",
        },
        "codex.command.nextTab": {
          id: "codex.command.nextTab",
          defaultMessage: "Next tab",
          description: "Shortcut settings row for switching to the next tab",
        },
        "codex.command.nextRecentThread": {
          id: "codex.command.nextRecentThread",
          defaultMessage: "Next recently viewed chat",
          description: "Shortcut settings row for cycling to the next recently viewed chat",
        },
        "codex.command.recentThread1": {
          id: "codex.command.recentThread1",
          defaultMessage: "Go to recent chat 1",
          description: "Command menu item to open the most recently updated chat",
        },
        "codex.command.recentThread2": {
          id: "codex.command.recentThread2",
          defaultMessage: "Go to recent chat 2",
          description: "Command menu item to open the second most recently updated chat",
        },
        "codex.command.recentThread3": {
          id: "codex.command.recentThread3",
          defaultMessage: "Go to recent chat 3",
          description: "Command menu item to open the third most recently updated chat",
        },
        "codex.command.recentThread4": {
          id: "codex.command.recentThread4",
          defaultMessage: "Go to recent chat 4",
          description: "Command menu item to open the fourth most recently updated chat",
        },
        "codex.command.recentThread5": {
          id: "codex.command.recentThread5",
          defaultMessage: "Go to recent chat 5",
          description: "Command menu item to open the fifth most recently updated chat",
        },
        "codex.command.recentThread6": {
          id: "codex.command.recentThread6",
          defaultMessage: "Go to recent chat 6",
          description: "Command menu item to open the sixth most recently updated chat",
        },
        "codex.command.switchToChat": {
          id: "codex.command.switchToChat",
          defaultMessage: "Switch to Chat",
          description: "Command title for switching the Codex desktop app to Chat",
        },
        "codex.command.switchToWork": {
          id: "codex.command.switchToWork",
          defaultMessage: "Switch to Work",
          description: "Command title for switching the Codex desktop app to Work",
        },
        "codex.command.switchToCodex": {
          id: "codex.command.switchToCodex",
          defaultMessage: "Switch to Codex",
          description: "Command title for switching the Codex desktop app to Codex",
        },
        "codex.command.settings": {
          id: "codex.command.settings",
          defaultMessage: "Settings",
          description: "Command menu item to open settings",
        },
        "codex.command.codexMicroSettings": {
          id: "codex.command.codexMicroSettings",
          defaultMessage: "Codex Micro setup",
          description: "Codex Micro keycap action that opens device setup",
        },
        "codex.command.mcpSettings": {
          id: "codex.command.mcpSettings",
          defaultMessage: "MCP",
          description: "Command menu item to open MCP settings",
        },
        "codex.command.keyboardShortcuts": {
          id: "codex.command.keyboardShortcuts",
          defaultMessage: "Keyboard shortcuts",
          description: "Command menu item to open keyboard shortcut settings",
        },
        "codex.command.showKeyboardShortcuts": {
          id: "codex.command.showKeyboardShortcuts",
          defaultMessage: "Show keyboard shortcuts",
          description: "Shortcut settings row for showing active keyboard shortcuts",
        },
        "codex.command.clearAllUnreads": {
          id: "codex.command.clearAllUnreads",
          defaultMessage: "Clear all unreads",
          description: "Command for marking all chats and scheduled tasks as read",
        },
        "codex.command.manageTasks": {
          id: "codex.command.manageTasks",
          defaultMessage: "Manage scheduled tasks",
          description: "Command menu item to manage scheduled tasks",
        },
        "codex.command.forceReloadSkills": {
          id: "codex.command.forceReloadSkills",
          defaultMessage: "Force reload skills",
          description: "Command menu item to force reload skills",
        },
        "codex.command.openSkills": {
          id: "codex.command.openSkills",
          defaultMessage: "Go to skills",
          description: "Command menu item to open skills",
        },
        "codex.command.newProject": {
          id: "codex.command.newProject",
          defaultMessage: "New project",
          description: "Command menu item to create a project",
        },
        "codex.command.openFolder": {
          id: "codex.command.openFolder",
          defaultMessage: "Open folder",
          description: "Command menu item to open a folder/workspace",
        },
        "codex.command.toggleSidebar": {
          id: "codex.command.toggleSidebar",
          defaultMessage: "Toggle sidebar",
          description: "Command menu item to toggle the sidebar",
        },
        "codex.command.toggleBottomPanel": {
          id: "codex.command.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
          description: "Command menu item to toggle the bottom panel",
        },
        "codex.command.togglePinnedSummary": {
          id: "codex.command.togglePinnedSummary",
          defaultMessage: "Toggle pinned summary",
          description: "Command menu item to toggle the pinned summary",
        },
        "codex.command.toggleTerminal": {
          id: "codex.command.toggleTerminal",
          defaultMessage: "Open terminal",
          description: "Command menu item to open the terminal panel",
        },
        "codex.command.newTab": {
          id: "codex.command.newTab",
          defaultMessage: "New tab",
          description: "Command menu item to open a new tab",
        },
        "codex.command.closeOtherTabs": {
          id: "codex.command.closeOtherTabs",
          defaultMessage: "Close other tabs",
          description: "Shortcut settings row for closing all other tabs",
        },
        "codex.command.showWorkspaceTabView": {
          id: "codex.command.showWorkspaceTabView",
          defaultMessage: "Full view",
          description: "Command menu item that toggles the workspace between split and full view",
        },
        "codex.command.exitWorkspaceFullView": {
          id: "codex.command.exitWorkspaceFullView",
          defaultMessage: "Exit full view",
          description: "Command that restores a fullscreen workspace panel to split view",
        },
        "codex.command.stepWorkspaceLayout": {
          id: "codex.command.stepWorkspaceLayout",
          defaultMessage: "Cycle workspace layout",
          description: "Command menu item that steps from full to split view, hides tabs, or restores tabs beside Chat",
        },
        "codex.command.openReviewTab": {
          id: "codex.command.openReviewTab",
          defaultMessage: "Open Changes tab",
          description: "Command menu item to open the Changes tab showing local diffs",
        },
        "codex.command.toggleReviewTab": {
          id: "codex.command.toggleReviewTab",
          defaultMessage: "Toggle Changes",
          description: "Shortcut settings row for toggling the Changes panel showing local diffs",
        },
        "codex.command.toggleReviewPanel": {
          id: "codex.command.toggleReviewPanel",
          defaultMessage: "Toggle Changes panel",
          description: "Command menu item to toggle the Changes panel showing local diffs",
        },
        "codex.command.file.goToDefinition": {
          id: "codex.command.file.goToDefinition",
          defaultMessage: "Go to definition",
          description: "Shortcut settings row for going to a symbol's definition",
        },
        "codex.command.file.findReferences": {
          id: "codex.command.file.findReferences",
          defaultMessage: "Find references",
          description: "Shortcut settings row for finding references to a code symbol",
        },
        "codex.command.file.navigateBack": {
          id: "codex.command.file.navigateBack",
          defaultMessage: "Go back in file navigation",
          description: "Shortcut settings row for file navigation history",
        },
        "codex.command.file.navigateForward": {
          id: "codex.command.file.navigateForward",
          defaultMessage: "Go forward in file navigation",
          description: "Shortcut settings row for file navigation history",
        },
        "codex.command.findInThread": {
          id: "codex.command.findInThread",
          defaultMessage: "Find",
          description: "Command menu item to find in the current chat",
        },
        "codex.command.goToLine": {
          id: "codex.command.goToLine",
          defaultMessage: "Go to line",
          description: "Command menu item to go to a line in the current file",
        },
        "codex.command.focusBrowserAddressBar": {
          id: "codex.command.focusBrowserAddressBar",
          defaultMessage: "Focus browser address bar",
          description: "Command menu item to focus the browser address bar",
        },
        "codex.command.navigateBrowserBack": {
          id: "codex.command.navigateBrowserBack",
          defaultMessage: "Browser back",
          description: "Command menu item to navigate the browser back",
        },
        "codex.command.navigateBrowserForward": {
          id: "codex.command.navigateBrowserForward",
          defaultMessage: "Browser forward",
          description: "Command menu item to navigate the browser forward",
        },
        "codex.command.navigateBack": {
          id: "codex.command.navigateBack",
          defaultMessage: "Back",
          description: "Command menu item to navigate back",
        },
        "codex.command.navigateForward": {
          id: "codex.command.navigateForward",
          defaultMessage: "Forward",
          description: "Command menu item to navigate forward",
        },
        "codex.command.logOut": {
          id: "codex.command.logOut",
          defaultMessage: "Log out",
          description: "Command menu item to log out of ChatGPT",
        },
        "codex.command.feedback": {
          id: "codex.command.feedback",
          defaultMessage: "Feedback",
          description: "Command menu item to open the feedback dialog",
        },
        "codex.command.environmentAction1": {
          id: "codex.command.environmentAction1",
          defaultMessage: "Environment action 1",
          description: "Shortcut settings row for the first environment action",
        },
        "codex.command.environmentAction2": {
          id: "codex.command.environmentAction2",
          defaultMessage: "Environment action 2",
          description: "Shortcut settings row for the second environment action",
        },
        "codex.command.environmentAction3": {
          id: "codex.command.environmentAction3",
          defaultMessage: "Environment action 3",
          description: "Shortcut settings row for the third environment action",
        },
        "codex.command.environmentAction4": {
          id: "codex.command.environmentAction4",
          defaultMessage: "Environment action 4",
          description: "Shortcut settings row for the fourth environment action",
        },
        "codex.command.environmentAction5": {
          id: "codex.command.environmentAction5",
          defaultMessage: "Environment action 5",
          description: "Shortcut settings row for the fifth environment action",
        },
        "codex.command.environmentAction6": {
          id: "codex.command.environmentAction6",
          defaultMessage: "Environment action 6",
          description: "Shortcut settings row for the sixth environment action",
        },
        "codex.command.environmentAction7": {
          id: "codex.command.environmentAction7",
          defaultMessage: "Environment action 7",
          description: "Shortcut settings row for the seventh environment action",
        },
        "codex.command.environmentAction8": {
          id: "codex.command.environmentAction8",
          defaultMessage: "Environment action 8",
          description: "Shortcut settings row for the eighth environment action",
        },
        "codex.command.environmentAction9": {
          id: "codex.command.environmentAction9",
          defaultMessage: "Environment action 9",
          description: "Shortcut settings row for the ninth environment action",
        },
        "codex.command.hotkeyWindow": {
          id: "codex.command.hotkeyWindow",
          defaultMessage: "Popout Window hotkey",
          description: "Shortcut settings row for the Popout Window hotkey",
        },
        "codex.command.globalDictationHold": {
          id: "codex.command.globalDictationHold",
          defaultMessage: "Dictation shortcut",
          description: "Shortcut settings row for the dictation shortcut",
        },
        "codex.command.globalDictationSingleTap": {
          id: "codex.command.globalDictationSingleTap",
          defaultMessage: "Single-tap dictation",
          description: "Shortcut settings row for the single-tap dictation shortcut",
        },
        "codex.command.spotlightSearch": {
          id: "codex.command.spotlightSearch",
          defaultMessage: "Spotlight search",
          description: "Shortcut settings row for Codex Spotlight, the floating desktop search and command panel",
        },
        "codex.command.notchVoice": {
          id: "codex.command.notchVoice",
          defaultMessage: "Voice in Mini",
          description: "Shortcut settings row for starting or showing voice in the notch Mini",
        },
        "codex.command.toggleNotch": {
          id: "codex.command.toggleNotch",
          defaultMessage: "Toggle Notch",
          description:
            "Shortcut settings row for expanding or collapsing the Codex notch panel at the top of the screen",
        },
        "codex.command.focusTab1": {
          id: "codex.command.focusTab1",
          defaultMessage: "Focus tab 1",
          description: "Keyboard shortcut to focus tab 1, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab2": {
          id: "codex.command.focusTab2",
          defaultMessage: "Focus tab 2",
          description: "Keyboard shortcut to focus tab 2, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab3": {
          id: "codex.command.focusTab3",
          defaultMessage: "Focus tab 3",
          description: "Keyboard shortcut to focus tab 3, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab4": {
          id: "codex.command.focusTab4",
          defaultMessage: "Focus tab 4",
          description: "Keyboard shortcut to focus tab 4, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab5": {
          id: "codex.command.focusTab5",
          defaultMessage: "Focus tab 5",
          description: "Keyboard shortcut to focus tab 5, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab6": {
          id: "codex.command.focusTab6",
          defaultMessage: "Focus tab 6",
          description: "Keyboard shortcut to focus tab 6, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab7": {
          id: "codex.command.focusTab7",
          defaultMessage: "Focus tab 7",
          description: "Keyboard shortcut to focus tab 7, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab8": {
          id: "codex.command.focusTab8",
          defaultMessage: "Focus tab 8",
          description: "Keyboard shortcut to focus tab 8, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab9": {
          id: "codex.command.focusTab9",
          defaultMessage: "Focus tab 9",
          description: "Keyboard shortcut to focus tab 9, counting from the left of the chat tab strip",
        },
        "codex.command.thread1": {
          id: "codex.command.thread1",
          defaultMessage: "Go to chat 1",
          description: "Command menu item to go to the first visible chat",
        },
        "codex.command.thread2": {
          id: "codex.command.thread2",
          defaultMessage: "Go to chat 2",
          description: "Command menu item to go to the second visible chat",
        },
        "codex.command.thread3": {
          id: "codex.command.thread3",
          defaultMessage: "Go to chat 3",
          description: "Command menu item to go to the third visible chat",
        },
        "codex.command.thread4": {
          id: "codex.command.thread4",
          defaultMessage: "Go to chat 4",
          description: "Command menu item to go to the fourth visible chat",
        },
        "codex.command.thread5": {
          id: "codex.command.thread5",
          defaultMessage: "Go to chat 5",
          description: "Command menu item to go to the fifth visible chat",
        },
        "codex.command.thread6": {
          id: "codex.command.thread6",
          defaultMessage: "Go to chat 6",
          description: "Command menu item to go to the sixth visible chat",
        },
        "codex.command.thread7": {
          id: "codex.command.thread7",
          defaultMessage: "Go to chat 7",
          description: "Command menu item to go to the seventh visible chat",
        },
        "codex.command.thread8": {
          id: "codex.command.thread8",
          defaultMessage: "Go to chat 8",
          description: "Command menu item to go to the eighth visible chat",
        },
        "codex.command.thread9": {
          id: "codex.command.thread9",
          defaultMessage: "Go to chat 9",
          description: "Command menu item to go to the ninth visible chat",
        },
      }),
      x = { ...f, "codex.command.importExternalAgent": u.title, "codex.command.personalitySettings": h.title },
      w = (0, n.YK)({
        "codex.commandMenuTitle.newThread": {
          id: "codex.commandMenuTitle.newThread",
          defaultMessage: "New Chat",
          description: "Native menu item to start a new chat",
        },
        "codex.commandMenuTitle.newProjectlessTask": {
          id: "codex.commandMenuTitle.newProjectlessTask",
          defaultMessage: "New standalone chat",
          description: "Native shortcut command to start a new standalone chat",
        },
        "codex.commandMenuTitle.openThreadInNewWindow": {
          id: "codex.commandMenuTitle.openThreadInNewWindow",
          defaultMessage: "Open in New Window",
          description: "Native menu item to open the current chat in a new window",
        },
        "codex.commandMenuTitle.archiveThread": {
          id: "codex.commandMenuTitle.archiveThread",
          defaultMessage: "Archive chat",
          description: "Native menu item to archive the current chat",
        },
        "codex.commandMenuTitle.toggleThreadPin": {
          id: "codex.commandMenuTitle.toggleThreadPin",
          defaultMessage: "Pin/unpin chat",
          description: "Native menu item to toggle whether the current chat is pinned",
        },
        "codex.commandMenuTitle.previousThread": {
          id: "codex.commandMenuTitle.previousThread",
          defaultMessage: "Previous Sidebar Item",
          description: "Native menu item to go to the previous sidebar item",
        },
        "codex.commandMenuTitle.nextThread": {
          id: "codex.commandMenuTitle.nextThread",
          defaultMessage: "Next Sidebar Item",
          description: "Native menu item to go to the next sidebar item",
        },
        "codex.commandMenuTitle.settings": {
          id: "codex.commandMenuTitle.settings",
          defaultMessage: "Settings…",
          description: "Native menu item to open settings",
        },
        "codex.commandMenuTitle.showKeyboardShortcuts": {
          id: "codex.commandMenuTitle.showKeyboardShortcuts",
          defaultMessage: "Keyboard Shortcuts",
          description: "Native menu item to show active keyboard shortcuts",
        },
        "codex.commandMenuTitle.newProject": {
          id: "codex.commandMenuTitle.newProject",
          defaultMessage: "New Project…",
          description: "Native File menu item to open the project creation dialog",
        },
        "codex.commandMenuTitle.openFolder": {
          id: "codex.commandMenuTitle.openFolder",
          defaultMessage: "Open Folder…",
          description: "Native menu item to open a folder",
        },
        "codex.commandMenuTitle.toggleSidebar": {
          id: "codex.commandMenuTitle.toggleSidebar",
          defaultMessage: "Toggle Sidebar",
          description: "Native menu item to toggle the sidebar",
        },
        "codex.commandMenuTitle.toggleBottomPanel": {
          id: "codex.commandMenuTitle.toggleBottomPanel",
          defaultMessage: "Toggle Bottom Panel",
          description: "Native menu item to toggle the bottom panel",
        },
        "codex.commandMenuTitle.togglePinnedSummary": {
          id: "codex.commandMenuTitle.togglePinnedSummary",
          defaultMessage: "Toggle Pinned Summary",
          description: "Native menu item to toggle the pinned summary",
        },
        "codex.commandMenuTitle.toggleTerminal": {
          id: "codex.commandMenuTitle.toggleTerminal",
          defaultMessage: "Open Terminal",
          description: "Native menu item to open the terminal",
        },
        "codex.commandMenuTitle.newTab": {
          id: "codex.commandMenuTitle.newTab",
          defaultMessage: "New tab",
          description: "Native menu item to open a new tab",
        },
        "codex.commandMenuTitle.toggleReviewPanel": {
          id: "codex.commandMenuTitle.toggleReviewPanel",
          defaultMessage: "Toggle Changes Panel",
          description: "Native menu item to toggle the Changes panel showing local diffs",
        },
        "codex.commandMenuTitle.findInThread": {
          id: "codex.commandMenuTitle.findInThread",
          defaultMessage: "Find",
          description: "Native menu item to find in the current chat",
        },
        "codex.commandMenuTitle.focusBrowserAddressBar": {
          id: "codex.commandMenuTitle.focusBrowserAddressBar",
          defaultMessage: "Focus Browser Address Bar",
          description: "Native menu item to focus the browser address bar",
        },
        "codex.commandMenuTitle.navigateBack": {
          id: "codex.commandMenuTitle.navigateBack",
          defaultMessage: "Back",
          description: "Native menu item to navigate back",
        },
        "codex.commandMenuTitle.navigateForward": {
          id: "codex.commandMenuTitle.navigateForward",
          defaultMessage: "Forward",
          description: "Native menu item to navigate forward",
        },
        "codex.commandMenuTitle.logOut": {
          id: "codex.commandMenuTitle.logOut",
          defaultMessage: "Log Out",
          description:
            "Native application menu item that signs the user out of Codex after confirmation. Short action label.",
        },
        "codex.commandMenuTitle.thread1": {
          id: "codex.commandMenuTitle.thread1",
          defaultMessage: "Go to Chat 1",
          description: "Native menu item to go to chat 1",
        },
        "codex.commandMenuTitle.thread2": {
          id: "codex.commandMenuTitle.thread2",
          defaultMessage: "Go to Chat 2",
          description: "Native menu item to go to chat 2",
        },
        "codex.commandMenuTitle.thread3": {
          id: "codex.commandMenuTitle.thread3",
          defaultMessage: "Go to Chat 3",
          description: "Native menu item to go to chat 3",
        },
        "codex.commandMenuTitle.thread4": {
          id: "codex.commandMenuTitle.thread4",
          defaultMessage: "Go to Chat 4",
          description: "Native menu item to go to chat 4",
        },
        "codex.commandMenuTitle.thread5": {
          id: "codex.commandMenuTitle.thread5",
          defaultMessage: "Go to Chat 5",
          description: "Native menu item to go to chat 5",
        },
        "codex.commandMenuTitle.thread6": {
          id: "codex.commandMenuTitle.thread6",
          defaultMessage: "Go to Chat 6",
          description: "Native menu item to go to chat 6",
        },
        "codex.commandMenuTitle.thread7": {
          id: "codex.commandMenuTitle.thread7",
          defaultMessage: "Go to Chat 7",
          description: "Native menu item to go to chat 7",
        },
        "codex.commandMenuTitle.thread8": {
          id: "codex.commandMenuTitle.thread8",
          defaultMessage: "Go to Chat 8",
          description: "Native menu item to go to chat 8",
        },
        "codex.commandMenuTitle.thread9": {
          id: "codex.commandMenuTitle.thread9",
          defaultMessage: "Go to Chat 9",
          description: "Native menu item to go to chat 9",
        },
        "codex.commandMenuTitle.copyConversationPath": {
          id: "codex.commandMenuTitle.copyConversationPath",
          defaultMessage: "Copy conversation path",
          description: "Native menu item to copy the conversation path",
        },
        "codex.commandMenuTitle.copyDeeplink": {
          id: "codex.commandMenuTitle.copyDeeplink",
          defaultMessage: "Copy deeplink",
          description: "Native menu item to copy the chat deeplink",
        },
        "codex.commandMenuTitle.copyWorkingDirectory": {
          id: "codex.commandMenuTitle.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
          description: "Native menu item to copy the working directory",
        },
        "codex.commandMenuTitle.closeTab": {
          id: "codex.commandMenuTitle.closeTab",
          defaultMessage: "Close Tab",
          description: "Native menu item to close the active tab",
        },
        "codex.commandMenuTitle.closeWindow": {
          id: "codex.commandMenuTitle.closeWindow",
          defaultMessage: "Close",
          description: "Native menu item to close the active window",
        },
        "codex.commandMenuTitle.reloadBrowserPage": {
          id: "codex.commandMenuTitle.reloadBrowserPage",
          defaultMessage: "Reload Browser Page",
          description: "Native menu item to reload the browser page",
        },
        "codex.commandMenuTitle.hardReloadBrowserPage": {
          id: "codex.commandMenuTitle.hardReloadBrowserPage",
          defaultMessage: "Force Reload Browser Page",
          description: "Native menu item to force reload the browser page",
        },
        "codex.commandMenuTitle.newWindow": {
          id: "codex.commandMenuTitle.newWindow",
          defaultMessage: "New Window",
          description: "Native menu item to open a new window",
        },
        "codex.commandMenuTitle.openCommandMenu": {
          id: "codex.commandMenuTitle.openCommandMenu",
          defaultMessage: "Open command menu",
          description: "Native menu item to open the command menu",
        },
        "codex.commandMenuTitle.searchChats": {
          id: "codex.commandMenuTitle.searchChats",
          defaultMessage: "Search Chats…",
          description: "Native menu item to search chats",
        },
        "codex.commandMenuTitle.searchFiles": {
          id: "codex.commandMenuTitle.searchFiles",
          defaultMessage: "Search Files…",
          description: "Native menu item to search files",
        },
        "codex.commandMenuTitle.renameThread": {
          id: "codex.commandMenuTitle.renameThread",
          defaultMessage: "Rename chat",
          description: "Native menu item to rename the current chat",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
          description: "Native menu item to start trace recording",
        },
      }),
      b = {
        ...(0, n.YK)({
          "codex.commandDescription.importPrismToLocal": {
            id: "codex.commandDescription.importPrismToLocal",
            defaultMessage: "Edit and compile a local copy of your Prism project",
            description: "Description of the command that imports a Prism project to the desktop filesystem",
          },
          "codex.commandDescription.meetings.takeNotes": {
            id: "codex.commandDescription.meetings.takeNotes",
            defaultMessage: "Start taking notes with Meetings on this device",
            description:
              "Description of the configurable shortcut that starts a local recording after Meetings setup is complete",
          },
          "codex.commandDescription.screenshotToCurrentChat": {
            id: "codex.commandDescription.screenshotToCurrentChat",
            defaultMessage: "Select a screen area and attach its image to the current chat without sending",
            description: "Description of the macOS rectangular screenshot shortcut and its chat destination",
          },
          "codex.commandDescription.screenshotToNewChat": {
            id: "codex.commandDescription.screenshotToNewChat",
            defaultMessage: "Select a screen area and attach its image to a new chat without sending",
            description: "Description of the macOS rectangular screenshot shortcut and its chat destination",
          },
          "codex.commandDescription.artifacts.selectTool": {
            id: "codex.commandDescription.artifacts.selectTool",
            defaultMessage: "Select and move artifact elements",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: select tool",
          },
          "codex.commandDescription.artifacts.handTool": {
            id: "codex.commandDescription.artifacts.handTool",
            defaultMessage: "Pan the artifact viewport",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: pan tool",
          },
          "codex.commandDescription.canvas.prompt": {
            id: "codex.commandDescription.canvas.prompt",
            defaultMessage: "Open a Canvas prompt at the pointer",
            description: "Shortcut settings description for the Canvas prompt command",
          },
          "codex.commandDescription.artifacts.rectangleTool": {
            id: "codex.commandDescription.artifacts.rectangleTool",
            defaultMessage: "Add rectangles to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: rectangle tool",
          },
          "codex.commandDescription.artifacts.circleTool": {
            id: "codex.commandDescription.artifacts.circleTool",
            defaultMessage: "Add circles and ovals to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: circle tool",
          },
          "codex.commandDescription.artifacts.arrowTool": {
            id: "codex.commandDescription.artifacts.arrowTool",
            defaultMessage: "Add arrows to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: arrow tool",
          },
          "codex.commandDescription.artifacts.lineTool": {
            id: "codex.commandDescription.artifacts.lineTool",
            defaultMessage: "Add lines to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: line tool",
          },
          "codex.commandDescription.artifacts.textTool": {
            id: "codex.commandDescription.artifacts.textTool",
            defaultMessage: "Add text to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: text tool",
          },
          "codex.commandDescription.artifacts.noteTool": {
            id: "codex.commandDescription.artifacts.noteTool",
            defaultMessage: "Place sticky notes on the Canvas",
            description:
              "Shortcut settings description for the Canvas sticky-note drawing tool in the shared Artifacts command family",
          },
          "codex.commandDescription.page.addComment": {
            id: "codex.commandDescription.page.addComment",
            defaultMessage: "Comment on selected Page content or the word at the cursor",
            description: "Keyboard shortcut description for starting a Page comment without submitting it",
          },
          "codex.commandDescription.page.formatNumberedList": {
            id: "codex.commandDescription.page.formatNumberedList",
            defaultMessage: "Format the selected Page text as a numbered list",
            description:
              "Description of the numbered-list formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.page.formatBulletedList": {
            id: "codex.commandDescription.page.formatBulletedList",
            defaultMessage: "Format the selected Page text as a bulleted list",
            description:
              "Description of the bulleted-list formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.page.formatChecklist": {
            id: "codex.commandDescription.page.formatChecklist",
            defaultMessage: "Toggle checklist formatting for the selected Page text",
            description:
              "Description of the checklist formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.newThread": {
            id: "codex.commandDescription.newThread",
            defaultMessage: "Start a new chat",
            description: "Description for the New chat command",
          },
          "codex.commandDescription.newProjectlessTask": {
            id: "codex.commandDescription.newProjectlessTask",
            defaultMessage: "Start a new chat outside of any project",
            description: "Description for the New standalone chat command",
          },
          "codex.commandDescription.temporaryChat": {
            id: "codex.commandDescription.temporaryChat",
            defaultMessage: "Start a chat that won't appear in history",
            description: "Description for the Temporary chat command",
          },
          "codex.commandDescription.openThreadInNewWindow": {
            id: "codex.commandDescription.openThreadInNewWindow",
            defaultMessage: "Open the current chat in a new window",
            description: "Description for the Open in new window command",
          },
          "codex.commandDescription.archiveThread": {
            id: "codex.commandDescription.archiveThread",
            defaultMessage: "Archive the current chat",
            description: "Description for the Archive chat command",
          },
          "codex.commandDescription.deleteOrbit": {
            id: "codex.commandDescription.deleteOrbit",
            defaultMessage: "Confirm deletion of your {dot}",
            description:
              "Description for the command that opens confirmation to permanently delete the current assistant. The dot placeholder is the untranslated term for the user's agent.",
          },
          "codex.commandDescription.deleteChat": {
            id: "codex.commandDescription.deleteChat",
            defaultMessage: "Confirm deletion of the current chat",
            description:
              "Description of the Delete chat keyboard shortcut, which opens a confirmation dialog and does not delete the chat immediately",
          },
          "codex.commandDescription.markThreadUnread": {
            id: "codex.commandDescription.markThreadUnread",
            defaultMessage: "Mark the current chat as unread",
            description: "Description for the Mark as unread command",
          },
          "codex.commandDescription.toggleThreadPin": {
            id: "codex.commandDescription.toggleThreadPin",
            defaultMessage: "Pin or unpin the current chat",
            description: "Description for the Toggle pin command",
          },
          "codex.commandDescription.copyPageLink": {
            id: "codex.commandDescription.copyPageLink",
            defaultMessage: "Copy the current document’s link to the clipboard",
            description: "Description for the Copy document link keyboard shortcut for a Page, slide, or sheet",
          },
          "codex.commandDescription.copyConversationMarkdown": {
            id: "codex.commandDescription.copyConversationMarkdown",
            defaultMessage: "Copy the current chat as Markdown",
            description: "Description for the Copy as Markdown command",
          },
          "codex.commandDescription.copyLastCodeBlock": {
            id: "codex.commandDescription.copyLastCodeBlock",
            defaultMessage: "Copy the last assistant code block in the current chat",
            description:
              "Description in keyboard shortcut settings for the command that copies only the code from the most recent assistant code block, without its Markdown fence",
          },
          "codex.commandDescription.openSideChat": {
            id: "codex.commandDescription.openSideChat",
            defaultMessage: "Open the current chat in a side chat",
            description: "Description for the Open side chat command",
          },
          "codex.commandDescription.focusMainChat": {
            id: "codex.commandDescription.focusMainChat",
            defaultMessage: "Move keyboard focus to the main chat composer",
            description: "Description for the Focus main chat command",
          },
          "codex.commandDescription.focusSideChat": {
            id: "codex.commandDescription.focusSideChat",
            defaultMessage: "Move keyboard focus to an open side chat composer",
            description: "Description for the Focus side chat command",
          },
          "codex.commandDescription.openControlWindow": {
            id: "codex.commandDescription.openControlWindow",
            defaultMessage: "Open the voice chat control window",
            description: "Description for the Open control window command",
          },
          "codex.commandDescription.toggleDebugModal": {
            id: "codex.commandDescription.toggleDebugModal",
            defaultMessage: "Show or hide the internal debug panel",
            description: "Description for the Toggle debug panel shortcut",
          },
          "codex.commandDescription.undoAppAction": {
            id: "codex.commandDescription.undoAppAction",
            defaultMessage: "Undo the most recent app action",
            description: "Description for the Undo last action command",
          },
          "codex.commandDescription.redoAppAction": {
            id: "codex.commandDescription.redoAppAction",
            defaultMessage: "Redo the most recently undone app action",
            description: "Description for the Redo last action command",
          },
          "codex.commandDescription.reopenClosedTab": {
            id: "codex.commandDescription.reopenClosedTab",
            defaultMessage: "Reopen the most recently closed tab",
            description: "Description for the Reopen closed tab command",
          },
          "codex.commandDescription.composer.openModelPicker": {
            id: "codex.commandDescription.composer.openModelPicker",
            defaultMessage: "Open the composer controls for model effort",
            description: "Description for the shortcut that opens the reasoning effort controls in the composer",
          },
          "codex.commandDescription.composer.openRecentModels": {
            id: "codex.commandDescription.composer.openRecentModels",
            defaultMessage: "Open recently used model, effort, and speed combinations",
            description: "Description for the shortcut that opens recent model configurations in the composer",
          },
          "codex.commandDescription.composer.openProjectPicker": {
            id: "codex.commandDescription.composer.openProjectPicker",
            defaultMessage: "Open the composer project picker",
            description: "Description for the Open project picker shortcut",
          },
          "codex.commandDescription.composer.toggleDictation": {
            id: "codex.commandDescription.composer.toggleDictation",
            defaultMessage: "Start or stop dictation in the chat composer",
            description:
              "Description of the keyboard shortcut that records speech and inserts the transcript into the chat draft",
          },
          "codex.commandDescription.composer.startVoiceMode": {
            id: "codex.commandDescription.composer.startVoiceMode",
            defaultMessage: "Start or stop voice chat",
            description: "Description for the Toggle voice mode shortcut",
          },
          "codex.commandDescription.composer.submit": {
            id: "codex.commandDescription.composer.submit",
            defaultMessage: "Send the current composer message",
            description: "Description for the Send message shortcut",
          },
          "codex.commandDescription.browser.toggleAnnotationMode": {
            id: "codex.commandDescription.browser.toggleAnnotationMode",
            defaultMessage: "Enter or leave annotation mode in the browser",
            description: "Description of the keyboard shortcut that toggles annotation mode in the in-app browser",
          },
          "codex.commandDescription.presentation.duplicateSelection": {
            id: "codex.commandDescription.presentation.duplicateSelection",
            defaultMessage: "Make a copy of the selected objects on the current slide",
            description: "Description for the presentation Duplicate shortcut",
          },
          "codex.commandDescription.artifact.sendAnnotations": {
            id: "codex.commandDescription.artifact.sendAnnotations",
            defaultMessage: "Send pending annotations in the focused artifact",
            description: "Description for the Send annotations shortcut",
          },
          "codex.commandDescription.composer.submitInBackground": {
            id: "codex.commandDescription.composer.submitInBackground",
            defaultMessage: "Send the current composer message without opening its chat",
            description: "Description for the Send message in background shortcut",
          },
          "codex.commandDescription.composer.steer": {
            id: "codex.commandDescription.composer.steer",
            defaultMessage: "Submit the current composer prompt as a steering message",
            description: "Description for the Steer prompt shortcut",
          },
          "codex.commandDescription.composer.queue": {
            id: "codex.commandDescription.composer.queue",
            defaultMessage: "Submit the current composer prompt as a queued message",
            description: "Description for the Queue prompt shortcut",
          },
          "codex.commandDescription.composer.clear": {
            id: "codex.commandDescription.composer.clear",
            defaultMessage: "Clear the current composer prompt",
            description: "Description for the Clear prompt shortcut",
          },
          "codex.commandDescription.composer.addPhotos": {
            id: "codex.commandDescription.composer.addPhotos",
            defaultMessage: "Add photos to the active composer",
            description: "Description for the Add photos shortcut",
          },
          "codex.commandDescription.composer.addFiles": {
            id: "codex.commandDescription.composer.addFiles",
            defaultMessage: "Attach files and folders to the active composer",
            description: "Description for the Attach files and folders shortcut",
          },
          "codex.commandDescription.composer.toggleFastMode": {
            id: "codex.commandDescription.composer.toggleFastMode",
            defaultMessage: "Cycle through available speeds: Standard, Fast, and Ultrafast",
            description: "Description for the shortcut that cycles through the current model’s available speeds",
          },
          "codex.commandDescription.composer.increaseReasoningEffort": {
            id: "codex.commandDescription.composer.increaseReasoningEffort",
            defaultMessage: "Increase the current composer reasoning effort",
            description: "Description for the Increase reasoning effort shortcut",
          },
          "codex.commandDescription.composer.decreaseReasoningEffort": {
            id: "codex.commandDescription.composer.decreaseReasoningEffort",
            defaultMessage: "Decrease the current composer reasoning effort",
            description: "Description for the Decrease reasoning effort shortcut",
          },
          "codex.commandDescription.composer.cycleReasoningEffort": {
            id: "codex.commandDescription.composer.cycleReasoningEffort",
            defaultMessage: "Cycle through composer reasoning effort options",
            description: "Description for the Cycle reasoning effort shortcut",
          },
          "codex.commandDescription.composer.togglePlanMode": {
            id: "codex.commandDescription.composer.togglePlanMode",
            defaultMessage: "Turn plan mode on or off in the current composer",
            description: "Description for the Toggle plan mode shortcut",
          },
          "codex.commandDescription.composer.toggleWorktreeMode": {
            id: "codex.commandDescription.composer.toggleWorktreeMode",
            defaultMessage: "Switch the current composer between local and a new worktree",
            description: "Description for the Toggle Local/Worktree shortcut",
          },
          "codex.commandDescription.composer.cycleHost": {
            id: "codex.commandDescription.composer.cycleHost",
            defaultMessage: "Cycle the new chat between this computer and available remote machines",
            description:
              "Description for the Cycle host shortcut, which wraps back to this computer after the last remote machine",
          },
          "codex.commandDescription.composer.toggleWorkRunLocation": {
            id: "codex.commandDescription.composer.toggleWorkRunLocation",
            defaultMessage: "Switch ChatGPT Work between cloud and local execution",
            description: "Description for the Toggle Cloud/Local shortcut",
          },
          "codex.commandDescription.approval.approve": {
            id: "codex.commandDescription.approval.approve",
            defaultMessage: "Approve the active request",
            description: "Description for the Approve request shortcut",
          },
          "codex.commandDescription.approval.decline": {
            id: "codex.commandDescription.approval.decline",
            defaultMessage: "Decline the active request",
            description: "Description for the Decline request shortcut",
          },
          "codex.commandDescription.git.commit": {
            id: "codex.commandDescription.git.commit",
            defaultMessage: "Open commit or push options",
            description: "Description for the Commit or push command",
          },
          "codex.commandDescription.git.createPullRequest": {
            id: "codex.commandDescription.git.createPullRequest",
            defaultMessage: "Open pull request creation options",
            description: "Description for the Create PR command",
          },
          "codex.commandDescription.git.createDraftPullRequest": {
            id: "codex.commandDescription.git.createDraftPullRequest",
            defaultMessage: "Open draft pull request creation options",
            description: "Description for the Create draft PR command",
          },
          "codex.commandDescription.git.createBranch": {
            id: "codex.commandDescription.git.createBranch",
            defaultMessage: "Open branch creation options",
            description: "Description for the Create branch command",
          },
          "codex.commandDescription.git.mergePullRequest": {
            id: "codex.commandDescription.git.mergePullRequest",
            defaultMessage: "Open pull request merge options",
            description: "Description for the Merge PR command",
          },
          "codex.commandDescription.git.openPullRequest": {
            id: "codex.commandDescription.git.openPullRequest",
            defaultMessage: "Open the pull request linked to the current chat",
            description: "Description for the Open PR on GitHub command",
          },
          "codex.commandDescription.git.toggleBlame": {
            id: "codex.commandDescription.git.toggleBlame",
            defaultMessage: "Show or hide author and commit details for the active editor line",
            description: "Description for the Toggle Git blame command",
          },
          "codex.commandDescription.forkThread": {
            id: "codex.commandDescription.forkThread",
            defaultMessage: "Fork the current chat",
            description: "Description for the Fork chat shortcut",
          },
          "codex.commandDescription.showMiniOverlay": {
            id: "codex.commandDescription.showMiniOverlay",
            defaultMessage: "Show Mini from anywhere",
            description: "Description for the command that shows Mini, the floating compact panel",
          },
          "codex.commandDescription.nextThreadNeedingAttention": {
            id: "codex.commandDescription.nextThreadNeedingAttention",
            defaultMessage: "Switch to the next chat awaiting input or with unread activity",
            description:
              "Description for a navigation command that prioritizes chats awaiting user input before chats with unread activity",
          },
          "codex.commandDescription.previousThread": {
            id: "codex.commandDescription.previousThread",
            defaultMessage: "Switch to the previous sidebar item",
            description: "Description for the Previous sidebar item command",
          },
          "codex.commandDescription.previousTab": {
            id: "codex.commandDescription.previousTab",
            defaultMessage: "Switch to the previous tab",
            description: "Description for the Previous tab shortcut",
          },
          "codex.commandDescription.previousRecentThread": {
            id: "codex.commandDescription.previousRecentThread",
            defaultMessage: "Cycle to the previous recently viewed chat",
            description: "Description for the Previous recently viewed chat shortcut",
          },
          "codex.commandDescription.nextThread": {
            id: "codex.commandDescription.nextThread",
            defaultMessage: "Switch to the next sidebar item",
            description: "Description for the Next sidebar item command",
          },
          "codex.commandDescription.nextTab": {
            id: "codex.commandDescription.nextTab",
            defaultMessage: "Switch to the next tab",
            description: "Description for the Next tab shortcut",
          },
          "codex.commandDescription.nextRecentThread": {
            id: "codex.commandDescription.nextRecentThread",
            defaultMessage: "Cycle to the next recently viewed chat",
            description: "Description for the Next recently viewed chat shortcut",
          },
          "codex.commandDescription.recentThreadSlot": {
            id: "codex.commandDescription.recentThreadSlot",
            defaultMessage: "Open the recently updated chat in this shortcut slot",
            description: "Description for shortcuts that open one of the six most recently updated chats",
          },
          "codex.commandDescription.switchToChat": {
            id: "codex.commandDescription.switchToChat",
            defaultMessage: "Switch to Chat",
            description: "Description for the Switch to Chat command",
          },
          "codex.commandDescription.switchToWork": {
            id: "codex.commandDescription.switchToWork",
            defaultMessage: "Switch to Work",
            description: "Description for the Switch to Work command",
          },
          "codex.commandDescription.switchToCodex": {
            id: "codex.commandDescription.switchToCodex",
            defaultMessage: "Switch to Codex",
            description: "Description for the Switch to Codex command",
          },
          "codex.commandDescription.settings": {
            id: "codex.commandDescription.settings",
            defaultMessage: "Open {appName} settings",
            description: "Description for the Settings command",
          },
          "codex.commandDescription.codexMicroSettings": {
            id: "codex.commandDescription.codexMicroSettings",
            defaultMessage: "Open Codex Micro setup",
            description: "Description for the Codex Micro setup keycap action",
          },
          "codex.commandDescription.mcpSettings": {
            id: "codex.commandDescription.mcpSettings",
            defaultMessage: "Configure MCP servers",
            description: "Description for the MCP settings command",
          },
          "codex.commandDescription.keyboardShortcuts": {
            id: "codex.commandDescription.keyboardShortcuts",
            defaultMessage: "Customize keyboard shortcuts",
            description: "Description for the Keyboard shortcuts command",
          },
          "codex.commandDescription.showKeyboardShortcuts": {
            id: "codex.commandDescription.showKeyboardShortcuts",
            defaultMessage: "Show the shortcuts available right now",
            description: "Description for the command that shows currently active shortcuts",
          },
          "codex.commandDescription.clearAllUnreads": {
            id: "codex.commandDescription.clearAllUnreads",
            defaultMessage: "Mark all chats and scheduled task updates as read",
            description: "Description of the command that clears all unread updates",
          },
          "codex.commandDescription.manageTasks": {
            id: "codex.commandDescription.manageTasks",
            defaultMessage: "Create or manage scheduled tasks from the current page",
            description: "Description for the Manage scheduled tasks command",
          },
          "codex.commandDescription.forceReloadSkills": {
            id: "codex.commandDescription.forceReloadSkills",
            defaultMessage: "Refresh the skill catalog for the current context",
            description: "Description for the Force reload skills command",
          },
          "codex.commandDescription.openSkills": {
            id: "codex.commandDescription.openSkills",
            defaultMessage: "Browse installed and recommended skills",
            description: "Description for the Go to skills command",
          },
          "codex.commandDescription.newProject": {
            id: "codex.commandDescription.newProject",
            defaultMessage: "Create a project",
            description: "Description for the command that opens project creation",
          },
          "codex.commandDescription.openFolder": {
            id: "codex.commandDescription.openFolder",
            defaultMessage: "Add a local project to {appName}",
            description: "Description for the Open folder command",
          },
          "codex.commandDescription.toggleSidebar": {
            id: "codex.commandDescription.toggleSidebar",
            defaultMessage: "Show or hide the sidebar",
            description: "Description for the Toggle sidebar command",
          },
          "codex.commandDescription.toggleBottomPanel": {
            id: "codex.commandDescription.toggleBottomPanel",
            defaultMessage: "Show or hide the bottom panel",
            description: "Description for the Toggle bottom panel command",
          },
          "codex.commandDescription.togglePinnedSummary": {
            id: "codex.commandDescription.togglePinnedSummary",
            defaultMessage: "Show or hide the pinned summary",
            description: "Description for the Toggle pinned summary command",
          },
          "codex.commandDescription.toggleTerminal": {
            id: "codex.commandDescription.toggleTerminal",
            defaultMessage: "Open the terminal panel",
            description: "Description for the Open terminal command",
          },
          "codex.commandDescription.newTab": {
            id: "codex.commandDescription.newTab",
            defaultMessage: "Open a new tab",
            description: "Description for the New tab command",
          },
          "codex.commandDescription.closeOtherTabs": {
            id: "codex.commandDescription.closeOtherTabs",
            defaultMessage: "Close all tabs except the active tab",
            description: "Description for the Close other tabs shortcut",
          },
          "codex.commandDescription.showWorkspaceTabView": {
            id: "codex.commandDescription.showWorkspaceTabView",
            defaultMessage: "Enter or exit full view",
            description: "Description for the command that toggles full view for the workspace",
          },
          "codex.commandDescription.exitWorkspaceFullView": {
            id: "codex.commandDescription.exitWorkspaceFullView",
            defaultMessage: "Restore the fullscreen panel to split view",
            description: "Description for the Escape command that leaves workspace full view without closing its tabs",
          },
          "codex.commandDescription.stepWorkspaceLayout": {
            id: "codex.commandDescription.stepWorkspaceLayout",
            defaultMessage: "Step from full view to split view, hide tabs, or show tabs beside Chat",
            description:
              "Description for the command that steps down through workspace layouts and restores split view from hidden tabs",
          },
          "codex.commandDescription.openReviewTab": {
            id: "codex.commandDescription.openReviewTab",
            defaultMessage: "Open the Changes tab",
            description: "Description for the Open Changes tab command",
          },
          "codex.commandDescription.toggleReviewTab": {
            id: "codex.commandDescription.toggleReviewTab",
            defaultMessage: "Show or hide Changes for the current Git-backed chat",
            description: "Description for the Toggle Changes shortcut",
          },
          "codex.commandDescription.toggleReviewPanel": {
            id: "codex.commandDescription.toggleReviewPanel",
            defaultMessage: "Show or hide Changes for the current chat",
            description: "Description for the Toggle Changes panel command",
          },
          "codex.commandDescription.file.goToDefinition": {
            id: "codex.commandDescription.file.goToDefinition",
            defaultMessage: "Open the definition of the selected file symbol",
            description: "Description for the Go to definition shortcut",
          },
          "codex.commandDescription.file.findReferences": {
            id: "codex.commandDescription.file.findReferences",
            defaultMessage: "Find references to the selected file symbol",
            description: "Description for the Find references shortcut",
          },
          "codex.commandDescription.file.navigateBack": {
            id: "codex.commandDescription.file.navigateBack",
            defaultMessage: "Return to the previous file location",
            description: "Description for the file navigation back shortcut",
          },
          "codex.commandDescription.file.navigateForward": {
            id: "codex.commandDescription.file.navigateForward",
            defaultMessage: "Return to the next file location",
            description: "Description for the file navigation forward shortcut",
          },
          "codex.commandDescription.findInThread": {
            id: "codex.commandDescription.findInThread",
            defaultMessage: "Search the current chat",
            description: "Description for the Find command",
          },
          "codex.commandDescription.goToLine": {
            id: "codex.commandDescription.goToLine",
            defaultMessage: "Go to a line in the current file",
            description: "Description for the Go to line command",
          },
          "codex.commandDescription.focusBrowserAddressBar": {
            id: "codex.commandDescription.focusBrowserAddressBar",
            defaultMessage: "Focus the in-app browser address bar",
            description: "Description for the Focus browser address bar command",
          },
          "codex.commandDescription.navigateBrowserBack": {
            id: "codex.commandDescription.navigateBrowserBack",
            defaultMessage: "Go back in browser history",
            description: "Description for the Browser back command",
          },
          "codex.commandDescription.navigateBrowserForward": {
            id: "codex.commandDescription.navigateBrowserForward",
            defaultMessage: "Go forward in browser history",
            description: "Description for the Browser forward command",
          },
          "codex.commandDescription.navigateBack": {
            id: "codex.commandDescription.navigateBack",
            defaultMessage: "Go back in navigation history",
            description: "Description for the Back command",
          },
          "codex.commandDescription.navigateForward": {
            id: "codex.commandDescription.navigateForward",
            defaultMessage: "Go forward in navigation history",
            description: "Description for the Forward command",
          },
          "codex.commandDescription.logOut": {
            id: "codex.commandDescription.logOut",
            defaultMessage: "Sign out of {appName}",
            description: "Description for the Log out command",
          },
          "codex.commandDescription.feedback": {
            id: "codex.commandDescription.feedback",
            defaultMessage: "Send product feedback to the ChatGPT team",
            description: "Description for the Feedback command",
          },
          "codex.commandDescription.environmentActionSlot": {
            id: "codex.commandDescription.environmentActionSlot",
            defaultMessage: "Run the environment action in this shortcut slot",
            description: "Description for environment action shortcut slots",
          },
          "codex.commandDescription.hotkeyWindow": {
            id: "codex.commandDescription.hotkeyWindow",
            defaultMessage: "Show or hide Popout Window from anywhere on desktop",
            description: "Description for the Popout Window hotkey",
          },
          "codex.commandDescription.spotlightSearch": {
            id: "codex.commandDescription.spotlightSearch",
            defaultMessage: "Open Spotlight search from anywhere on desktop",
            description:
              "Description of the global shortcut for Codex Spotlight, the floating desktop search and command panel",
          },
          "codex.commandDescription.notchVoice": {
            id: "codex.commandDescription.notchVoice",
            defaultMessage: "Start voice in Mini or show the ongoing call",
            description: "Description of the notch voice shortcut",
          },
          "codex.commandDescription.toggleNotch": {
            id: "codex.commandDescription.toggleNotch",
            defaultMessage: "Expand or collapse the notch from anywhere",
            description:
              "Description for the shortcut that expands or collapses the Codex notch panel at the top of the screen",
          },
          "codex.commandDescription.globalDictationHold": {
            id: "codex.commandDescription.globalDictationHold",
            defaultMessage: "Hold to dictate, release to finish. Double-tap for hands-free, tap to finish.",
            description: "Description for the dictation shortcut",
          },
          "codex.commandDescription.globalDictationSingleTap": {
            id: "codex.commandDescription.globalDictationSingleTap",
            defaultMessage: "Press once to start, again to finish",
            description: "Description for the single-tap dictation shortcut",
          },
          "codex.commandDescription.copyConversationPath": {
            id: "codex.commandDescription.copyConversationPath",
            defaultMessage: "Copy the current chat path",
            description: "Description for the Copy conversation path shortcut",
          },
          "codex.commandDescription.copyDeeplink": {
            id: "codex.commandDescription.copyDeeplink",
            defaultMessage: "Copy a deeplink to the current chat",
            description: "Description for the Copy deeplink shortcut",
          },
          "codex.commandDescription.copyWorkingDirectory": {
            id: "codex.commandDescription.copyWorkingDirectory",
            defaultMessage: "Copy the current chat working directory",
            description: "Description for the Copy working directory shortcut",
          },
          "codex.commandDescription.closeTab": {
            id: "codex.commandDescription.closeTab",
            defaultMessage: "Close the active tab",
            description: "Description for the Close Tab shortcut",
          },
          "codex.commandDescription.closeWindow": {
            id: "codex.commandDescription.closeWindow",
            defaultMessage: "Close the active window",
            description: "Description for the Close Window shortcut",
          },
          "codex.commandDescription.reloadBrowserPage": {
            id: "codex.commandDescription.reloadBrowserPage",
            defaultMessage: "Reload the active browser page",
            description: "Description for the Reload Browser Page shortcut",
          },
          "codex.commandDescription.hardReloadBrowserPage": {
            id: "codex.commandDescription.hardReloadBrowserPage",
            defaultMessage: "Force reload the active browser page",
            description: "Description for the Force Reload Browser Page shortcut",
          },
          "codex.commandDescription.newWindow": {
            id: "codex.commandDescription.newWindow",
            defaultMessage: "Open a new window",
            description: "Description for the New Window shortcut",
          },
          "codex.commandDescription.openCommandMenu": {
            id: "codex.commandDescription.openCommandMenu",
            defaultMessage: "Open the command menu",
            description: "Description for the Open command menu shortcut",
          },
          "codex.commandDescription.searchChats": {
            id: "codex.commandDescription.searchChats",
            defaultMessage: "Search and switch to a chat",
            description: "Description for the Switch chat command",
          },
          "codex.commandDescription.searchChatsPrevious": {
            id: "codex.commandDescription.searchChatsPrevious",
            defaultMessage: "Open the chat picker and cycle backward through chats",
            description:
              "Description of the shortcut that highlights the previous chat in the picker until the user confirms a selection",
          },
          "codex.commandDescription.togglePriorityFilter": {
            id: "codex.commandDescription.togglePriorityFilter",
            defaultMessage: "Turn the sidebar activity view on or off",
            description: "Description for the Toggle activity view command",
          },
          "codex.commandDescription.searchFiles": {
            id: "codex.commandDescription.searchFiles",
            defaultMessage: "Search files",
            description: "Description for the Search Files shortcut",
          },
          "codex.commandDescription.renameThread": {
            id: "codex.commandDescription.renameThread",
            defaultMessage: "Rename the current chat",
            description: "Description for the Rename chat shortcut",
          },
          "codex.commandDescription.toggleFileTreePanel": {
            id: "codex.commandDescription.toggleFileTreePanel",
            defaultMessage: "Show or hide a page's navigation, or the code viewer's file tree",
            description:
              "Shortcut description explaining that the navigation panel shows the Pages hierarchy while viewing a Page and project files while working with code",
          },
          "codex.commandDescription.toggleTraceRecording": {
            id: "codex.commandDescription.toggleTraceRecording",
            defaultMessage: "Start or stop trace recording",
            description: "Description for the Start Trace Recording shortcut",
          },
          "codex.commandDescription.focusTab": {
            id: "codex.commandDescription.focusTab",
            defaultMessage: "Focus the tab at this position in the chat tab strip",
            description: "Description for numbered chat tab focus shortcuts",
          },
          "codex.commandDescription.threadSlot": {
            id: "codex.commandDescription.threadSlot",
            defaultMessage: "Open the visible chat in this shortcut slot",
            description: "Description for the chat slot commands",
          },
        }),
        "codex.commandDescription.importExternalAgent": u.description,
        "codex.commandDescription.personalitySettings": h.description,
      }
    function M(e, o, t = !1) {
      if ("openOrbit" === e.id) return s(o).title
      if ("focusPageBlockControls" === e.id) return r(o).title
      if ("openAvatarOverlay" === e.id && t) return o.formatMessage(g)
      if ("composer.captureAppshot" === e.id) return c(o).title
      if ("titleIntlId" in e) {
        var i
        let t
        return D(x, e.titleIntlId)
          ? o.formatMessage(x[e.titleIntlId], { dot: "dot" })
          : null == (t = p((i = e.id)) ? l[i] : null)
            ? ""
            : o.formatMessage(t.title)
      }
      return o.formatMessage(w[e.electron.menuTitleIntlId])
    }
    function v(e, o, t, n = !1) {
      var d
      let m
      if ("openOrbit" === e.id) return s(o)
      if ("focusPageBlockControls" === e.id) return r(o)
      if ("composer.captureAppshot" === e.id) return c(o)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            t?.title ??
            o.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
              description:
                "Command palette and shortcut settings title for switching between Chat and the previous content tab in full view or toggling workspace tab visibility in split view",
            }),
          description:
            t?.description ??
            o.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
              description:
                "Description for the command that switches between Chat and the previous content tab in full view or toggles workspace tab visibility in split view",
            }),
        }
      let u = (0, i.yF)(e)
          ? D(b, e.descriptionIntlId)
            ? o.formatMessage(b[e.descriptionIntlId], { appName: a.C, dot: "dot" })
            : null == (m = p((d = e.id)) ? l[d] : null)
              ? ""
              : o.formatMessage(m.description)
          : "",
        h = t?.title ?? M(e, o)
      return ("openAvatarOverlay" === e.id && n && (h = M(e, o, !0)), { title: h, description: t?.description ?? u })
    }
    function D(e, o) {
      return Object.hasOwn(e, o)
    }
  },
  GK7D(e, o, t) {
    var i = t("ABep"),
      n = t("QosV"),
      a = t("on57")
    t.d(
      o,
      {},
      {
        z: function (e) {
          let o,
            t,
            c,
            d,
            s,
            r,
            m,
            l,
            p,
            u,
            h = (0, n.c)(30),
            { actions: g, asset: f, subtitle: x, subtitleClassName: w, title: b, variant: M } = e,
            v = void 0 === M ? "default" : M
          h[0] !== f
            ? ((o = null == f ? null : (0, i.jsx)("div", { className: "flex", children: f })), (h[0] = f), (h[1] = o))
            : (o = h[1])
          let D = "page" === v ? "flex-nowrap" : "flex-wrap"
          h[2] !== D
            ? ((t = (0, a.A)("flex min-w-0 items-start justify-between gap-4", D)), (h[2] = D), (h[3] = t))
            : (t = h[3])
          let T = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          h[4] !== T ? ((c = (0, a.A)("flex min-w-0 flex-1 basis-64 flex-col", T)), (h[4] = T), (h[5] = c)) : (c = h[5])
          let y = "settings" === v && "heading-lg font-normal",
            C = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            k = "page" === v && "heading-lg electron:heading-xl",
            S = "default" === v && "heading-base electron:heading-lg"
          return (
            h[6] !== S || h[7] !== y || h[8] !== C || h[9] !== k
              ? ((d = (0, a.A)("min-w-0 break-words text-default", y, C, k, S)),
                (h[6] = S),
                (h[7] = y),
                (h[8] = C),
                (h[9] = k),
                (h[10] = d))
              : (d = h[10]),
            h[11] !== d || h[12] !== b
              ? ((s = (0, i.jsx)("h1", { className: d, children: b })), (h[11] = d), (h[12] = b), (h[13] = s))
              : (s = h[13]),
            h[14] !== x || h[15] !== w
              ? ((r =
                  null == x
                    ? null
                    : (0, i.jsx)("div", { className: (0, a.A)("text-base text-secondary", w), children: x })),
                (h[14] = x),
                (h[15] = w),
                (h[16] = r))
              : (r = h[16]),
            h[17] !== s || h[18] !== r || h[19] !== c
              ? ((m = (0, i.jsxs)("div", { className: c, children: [s, r] })),
                (h[17] = s),
                (h[18] = r),
                (h[19] = c),
                (h[20] = m))
              : (m = h[20]),
            h[21] !== g
              ? ((l =
                  null == g
                    ? null
                    : (0, i.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: g })),
                (h[21] = g),
                (h[22] = l))
              : (l = h[22]),
            h[23] !== m || h[24] !== l || h[25] !== t
              ? ((p = (0, i.jsxs)("div", { className: t, children: [m, l] })),
                (h[23] = m),
                (h[24] = l),
                (h[25] = t),
                (h[26] = p))
              : (p = h[26]),
            h[27] !== p || h[28] !== o
              ? ((u = (0, i.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [o, p],
                })),
                (h[27] = p),
                (h[28] = o),
                (h[29] = u))
              : (u = h[29]),
            u
          )
        },
      },
    )
  },
  jxU8(e, o, t) {
    t.d(o, { P: () => g, Y: () => f })
    var i = t("ABep"),
      n = t("QosV"),
      a = t("on57"),
      c = t("zd8w"),
      d = t("bJfu"),
      s = t("qbQ6"),
      r = t("GK7D"),
      m = t("PkPj"),
      l = t("DiyT"),
      p = t("ibLK"),
      u = t("V8uZ"),
      h = t("oFmV")
    function g(e) {
      let o,
        t,
        g,
        f,
        x,
        w,
        b,
        M,
        v,
        D,
        T,
        y,
        C,
        k,
        S,
        P,
        A,
        N,
        j,
        R,
        F,
        O,
        B,
        W,
        L,
        E,
        G,
        V,
        I,
        q,
        K,
        z,
        H,
        _,
        U,
        Y,
        Q,
        Z,
        $,
        X,
        J,
        ee,
        eo,
        et,
        ei = (0, n.c)(120)
      ei[0] !== e
        ? (({
            title: N,
            asset: t,
            backSlot: g,
            subtitle: C,
            children: f,
            fullWidth: S,
            contentClassName: w,
            subtitleClassName: k,
            action: o,
            toolbarActions: j,
            stickyControls: y,
            footer: M,
            embedded: P,
            density: b,
            scrollResetKey: T,
            containTouchOverscroll: A,
            ref: v,
            className: x,
            ...D
          } = e),
          (ei[0] = e),
          (ei[1] = o),
          (ei[2] = t),
          (ei[3] = g),
          (ei[4] = f),
          (ei[5] = x),
          (ei[6] = w),
          (ei[7] = b),
          (ei[8] = M),
          (ei[9] = v),
          (ei[10] = D),
          (ei[11] = T),
          (ei[12] = y),
          (ei[13] = C),
          (ei[14] = k),
          (ei[15] = S),
          (ei[16] = P),
          (ei[17] = A),
          (ei[18] = N),
          (ei[19] = j))
        : ((o = ei[1]),
          (t = ei[2]),
          (g = ei[3]),
          (f = ei[4]),
          (x = ei[5]),
          (w = ei[6]),
          (b = ei[7]),
          (M = ei[8]),
          (v = ei[9]),
          (D = ei[10]),
          (T = ei[11]),
          (y = ei[12]),
          (C = ei[13]),
          (k = ei[14]),
          (S = ei[15]),
          (P = ei[16]),
          (A = ei[17]),
          (N = ei[18]),
          (j = ei[19]))
      let en = void 0 !== S && S,
        ea = void 0 !== P && P,
        ec = void 0 !== A && A,
        ed = b ?? "default",
        es = (0, c.useRef)(null),
        er = (0, c.useRef)(null),
        em = ec && !ea && !1
      ;((eo = (0, n.c)(4)),
        (et = (0, p.U)(em ? "(pointer: coarse)" : null)),
        eo[0] !== et || eo[1] !== er
          ? ((J = () => {
              let e = er.current
              if (!et || null == e) return
              let o = e.ownerDocument.documentElement
              o.dataset.containTouchOverscroll = String(Number(o.dataset.containTouchOverscroll ?? 0) + 1)
              let t = e.closest("[data-app-shell-frame]") ?? e,
                i = e.closest("[data-app-shell-main-surface]"),
                n = null,
                a = 0,
                c = () => {
                  n = null
                },
                d = (o) => {
                  let t = o.touches[0]
                  if (1 !== o.touches.length || null == t) return void c()
                  let d = o.composedPath().includes(e),
                    s = o.target,
                    r =
                      s instanceof Element &&
                      ((s.contains(e) && i?.contains(s)) || null != s.closest("[data-app-shell-main-titlebar]"))
                  d || r ? ((n = { x: t.clientX, y: t.clientY, inPanel: d }), (a = t.clientY)) : c()
                },
                s = (o) => {
                  let i = o.touches[0]
                  if (1 !== o.touches.length || null == i || null == n) return void c()
                  let d = i.clientY > a
                  if (
                    ((a = i.clientY),
                    !(!o.cancelable || !d || i.clientY - n.y <= Math.abs(i.clientX - n.x)) &&
                      (!n.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let i of o.composedPath()) {
                      if (i === e || i === t) break
                      if (
                        i instanceof HTMLElement &&
                        i.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(i).overflowY)
                      )
                        return
                    }
                    o.preventDefault()
                  }
                },
                r = { capture: !0, passive: !0 }
              return (
                t.addEventListener("touchstart", d, r),
                t.addEventListener("touchmove", s, { capture: !0, passive: !1 }),
                t.addEventListener("touchend", c, r),
                t.addEventListener("touchcancel", c, r),
                () => {
                  let e = Number(o.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (o.dataset.containTouchOverscroll = String(e)) : delete o.dataset.containTouchOverscroll,
                    t.removeEventListener("touchstart", d, !0),
                    t.removeEventListener("touchmove", s, !0),
                    t.removeEventListener("touchend", c, !0),
                    t.removeEventListener("touchcancel", c, !0))
                }
              )
            }),
            (ee = [et, er]),
            (eo[0] = et),
            (eo[1] = er),
            (eo[2] = J),
            (eo[3] = ee))
          : ((J = eo[2]), (ee = eo[3])),
        (0, c.useEffect)(J, ee))
      let [el, ep] = (0, c.useState)(!1),
        eu = (0, c.useContext)(h.S),
        eh = !!eu?.slateLayout && !ea
      ;(0, p.U)(s.mk)
      let eg = eh && !1,
        ef = eu?.targetId ?? null,
        ex = eu?.targetText ?? null,
        ew = eu?.navigationKey ?? null
      ;(ei[20] !== T
        ? ((R = () => {
            null != T && null != er.current && (er.current.scrollTop = 0)
          }),
          (F = [T]),
          (ei[20] = T),
          (ei[21] = R),
          (ei[22] = F))
        : ((R = ei[21]), (F = ei[22])),
        (0, c.useLayoutEffect)(R, F),
        ei[23] !== ef || ei[24] !== ex
          ? ((O = () => {
              let e, o
              if (null == ef && null == ex) return
              let t = es.current
              if (null == t) return
              let i = () => {
                  if (null == ex) return null == ef ? null : document.getElementById(ef)
                  let e = ex.trim().toLocaleLowerCase(),
                    o = e.split(/\s+/u),
                    i = null
                  for (let n of t.querySelectorAll("*")) {
                    let t = (n.getAttribute("placeholder") ?? n.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == t ||
                      !o.every((e) => t.includes(e)) ||
                      null != n.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let a = t.includes(e)
                    ;(null == i || (a && !i.isContiguous) || (a === i.isContiguous && t.length <= i.text.length)) &&
                      (i = { element: n, isContiguous: a, text: t })
                  }
                  return i?.element ?? null
                },
                n = (o) => {
                  if ((o.scrollIntoView?.({ block: "center" }), null == ex)) return
                  let i = "true" === document.documentElement.dataset.reducedMotion,
                    n = o.closest("button"),
                    a = n?.parentElement ?? o
                  if (null == n) {
                    let e = o.closest("section")
                    for (let i = o.parentElement; null != i && i !== e && i !== t; i = i.parentElement)
                      if (
                        Array.from(i.children).some(
                          (e) =>
                            !e.contains(o) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        a = i
                        break
                      }
                  }
                  e = a.animate?.(
                    i
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${u.Wu.join(", ")})` },
                  )
                },
                a =
                  null == ex
                    ? new ResizeObserver(() => {
                        let e = i()
                        null != e && n(e)
                      })
                    : null,
                c = () => {
                  for (let e of (o?.disconnect(), a?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    t.ownerDocument.removeEventListener(e, c)
                }
              if (null != a)
                for (let e of (a.observe(t), ["wheel", "pointerdown", "keydown"]))
                  t.ownerDocument.addEventListener(e, c, { passive: !0 })
              let d = i()
              return (
                null != d
                  ? n(d)
                  : (o = new MutationObserver(() => {
                      let e = i()
                      null != e && (n(e), o?.disconnect())
                    })).observe(null == ex ? document.body : t, { childList: !0, subtree: !0 }),
                () => {
                  ;(c(), e?.cancel())
                }
              )
            }),
            (ei[23] = ef),
            (ei[24] = ex),
            (ei[25] = O))
          : (O = ei[25]),
        ei[26] !== ew || ei[27] !== ef || ei[28] !== ex
          ? ((B = [ew, ef, ex]), (ei[26] = ew), (ei[27] = ef), (ei[28] = ex), (ei[29] = B))
          : (B = ei[29]),
        (0, c.useLayoutEffect)(O, B),
        ei[30] !== j
          ? ((W =
              null == j
                ? null
                : (0, i.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: j,
                  })),
            (ei[30] = j),
            (ei[31] = W))
          : (W = ei[31]),
        ei[32] !== g || ei[33] !== W
          ? ((L = (0, i.jsxs)(i.Fragment, { children: [g, W] })), (ei[32] = g), (ei[33] = W), (ei[34] = L))
          : (L = ei[34]))
      let eb = L,
        eM = ea ? "default" : "settings"
      "compact" === ed && (eM = "settingsCompact")
      let ev = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        eD =
          "default" === b &&
          (ea && !en ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eT = en ? null : ea ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(ei[35] !== w || ei[36] !== y || ei[37] !== ev || ei[38] !== eD || ei[39] !== eT || ei[40] !== eh
        ? ((E = (0, a.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            eD,
            eT,
            eh && ["px-panel pb-panel", null == y && "pt-panel"],
            w,
          )),
          (ei[35] = w),
          (ei[36] = y),
          (ei[37] = ev),
          (ei[38] = eD),
          (ei[39] = eT),
          (ei[40] = eh),
          (ei[41] = E))
        : (E = ei[41]),
        ei[42] !== o ||
        ei[43] !== t ||
        ei[44] !== ed ||
        ei[45] !== ea ||
        ei[46] !== eM ||
        ei[47] !== C ||
        ei[48] !== k ||
        ei[49] !== N ||
        ei[50] !== eh
          ? ((G =
              null == N || eh
                ? null
                : (0, i.jsx)("div", {
                    className: (0, a.A)("compact" === ed && "pb-5.5", "default" === ed && (ea ? "pb-panel" : "pb-8")),
                    children: (0, i.jsx)(r.z, {
                      actions: o,
                      asset: t,
                      subtitle: C,
                      subtitleClassName: (0, a.A)("text-balance", k),
                      title: N,
                      variant: eM,
                    }),
                  })),
            (ei[42] = o),
            (ei[43] = t),
            (ei[44] = ed),
            (ei[45] = ea),
            (ei[46] = eM),
            (ei[47] = C),
            (ei[48] = k),
            (ei[49] = N),
            (ei[50] = eh),
            (ei[51] = G))
          : (G = ei[51]),
        ei[52] !== y
          ? ((V = null == y ? null : (0, i.jsx)(m.J1, { className: "top-0 pt-panel pb-2", children: y })),
            (ei[52] = y),
            (ei[53] = V))
          : (V = ei[53]))
      let ey =
          ea && !en
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        eC = null != y && "pt-5"
      ;(ei[54] !== ey || ei[55] !== eC
        ? ((I = (0, a.A)("flex flex-col", ey, eC)), (ei[54] = ey), (ei[55] = eC), (ei[56] = I))
        : (I = ei[56]),
        ei[57] !== f || ei[58] !== I
          ? ((q = (0, i.jsx)("div", { className: I, children: f })), (ei[57] = f), (ei[58] = I), (ei[59] = q))
          : (q = ei[59]),
        ei[60] !== ed || ei[61] !== E || ei[62] !== G || ei[63] !== V || ei[64] !== q
          ? ((K = (0, i.jsxs)("div", { ref: es, className: E, "data-density": ed, children: [G, V, q] })),
            (ei[60] = ed),
            (ei[61] = E),
            (ei[62] = G),
            (ei[63] = V),
            (ei[64] = q),
            (ei[65] = K))
          : (K = ei[65]))
      let ek = K
      if (ea) {
        let e, o, t
        return (
          ei[66] !== x ? ((e = (0, a.A)("flex min-h-0 flex-col", x)), (ei[66] = x), (ei[67] = e)) : (e = ei[67]),
          ei[68] !== g || ei[69] !== eb || ei[70] !== j
            ? ((o =
                null != g || null != j
                  ? (0, i.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (ei[68] = g),
              (ei[69] = eb),
              (ei[70] = j),
              (ei[71] = o))
            : (o = ei[71]),
          ei[72] !== ek || ei[73] !== v || ei[74] !== D || ei[75] !== e || ei[76] !== o
            ? ((t = (0, i.jsxs)("div", { ref: v, className: e, ...D, children: [o, ek] })),
              (ei[72] = ek),
              (ei[73] = v),
              (ei[74] = D),
              (ei[75] = e),
              (ei[76] = o),
              (ei[77] = t))
            : (t = ei[77]),
          t
        )
      }
      ;(ei[78] !== x
        ? ((z = (0, a.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (ei[78] = x),
          (ei[79] = z))
        : (z = ei[79]),
        ei[80] !== N || ei[81] !== eg
          ? ((H = eg
              ? (0, i.jsx)(d.G.Header, {
                  divider: !1,
                  children: (0, i.jsx)(d.G.HeaderToolbar, {
                    children: (0, i.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: N,
                    }),
                  }),
                })
              : null),
            (ei[80] = N),
            (ei[81] = eg),
            (ei[82] = H))
          : (H = ei[82]),
        ei[83] !== g || ei[84] !== eb || ei[85] !== j || ei[86] !== eh
          ? ((_ =
              eh && null == g && null == j
                ? null
                : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (ei[83] = g),
            (ei[84] = eb),
            (ei[85] = j),
            (ei[86] = eh),
            (ei[87] = _))
          : (_ = ei[87]))
      let eS = em || void 0,
        eP = eg ? el : void 0,
        eA = eg || void 0
      ei[88] !== eg
        ? ((U = eg ? (e) => ep(e.currentTarget.scrollTop > 0) : void 0), (ei[88] = eg), (ei[89] = U))
        : (U = ei[89])
      let eN = !eh && "p-panel"
      return (
        ei[90] !== eN
          ? ((Y = (0, a.A)("flex-1 scrollbar-stable overflow-y-auto", eN)), (ei[90] = eN), (ei[91] = Y))
          : (Y = ei[91]),
        ei[92] !== o ||
        ei[93] !== t ||
        ei[94] !== ed ||
        ei[95] !== en ||
        ei[96] !== C ||
        ei[97] !== k ||
        ei[98] !== N ||
        ei[99] !== eg ||
        ei[100] !== eh
          ? ((Q =
              null == N || !eh || eg
                ? null
                : (0, i.jsx)(l.g, {
                    className: en ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, i.jsxs)(i.Fragment, {
                      children: [
                        null == t ? null : (0, i.jsx)("div", { className: "flex", children: t }),
                        (0, i.jsx)("h1", {
                          className: (0, a.A)("text-default", "compact" === ed ? "heading-lg" : "heading-xl"),
                          children: N,
                        }),
                        null == C
                          ? null
                          : (0, i.jsx)("div", {
                              className: (0, a.A)("text-base leading-6 text-balance text-secondary", k),
                              children: C,
                            }),
                      ],
                    }),
                    actions: null == o ? null : (0, i.jsx)(l.T, { search: null, actions: o }),
                  })),
            (ei[92] = o),
            (ei[93] = t),
            (ei[94] = ed),
            (ei[95] = en),
            (ei[96] = C),
            (ei[97] = k),
            (ei[98] = N),
            (ei[99] = eg),
            (ei[100] = eh),
            (ei[101] = Q))
          : (Q = ei[101]),
        ei[102] !== ek ||
        ei[103] !== eS ||
        ei[104] !== eP ||
        ei[105] !== eA ||
        ei[106] !== U ||
        ei[107] !== Y ||
        ei[108] !== Q
          ? ((Z = (0, i.jsxs)("div", {
              ref: er,
              "data-contain-touch-overscroll": eS,
              "data-app-shell-page-scrolled": eP,
              "data-settings-mobile-header": eA,
              onScroll: U,
              className: Y,
              children: [Q, ek],
            })),
            (ei[102] = ek),
            (ei[103] = eS),
            (ei[104] = eP),
            (ei[105] = eA),
            (ei[106] = U),
            (ei[107] = Y),
            (ei[108] = Q),
            (ei[109] = Z))
          : (Z = ei[109]),
        ei[110] !== M
          ? (($ =
              null != M &&
              (0, i.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: M,
              })),
            (ei[110] = M),
            (ei[111] = $))
          : ($ = ei[111]),
        ei[112] !== v ||
        ei[113] !== D ||
        ei[114] !== z ||
        ei[115] !== H ||
        ei[116] !== _ ||
        ei[117] !== Z ||
        ei[118] !== $
          ? ((X = (0, i.jsxs)("div", { ref: v, className: z, ...D, children: [H, _, Z, $] })),
            (ei[112] = v),
            (ei[113] = D),
            (ei[114] = z),
            (ei[115] = H),
            (ei[116] = _),
            (ei[117] = Z),
            (ei[118] = $),
            (ei[119] = X))
          : (X = ei[119]),
        X
      )
    }
    function f(e) {
      let o,
        t,
        a = (0, n.c)(8),
        { children: c, navigationKey: d, slateLayout: s, targetId: r, targetText: m } = e,
        l = void 0 !== s && s,
        p = void 0 === m ? null : m
      return (
        a[0] !== d || a[1] !== l || a[2] !== r || a[3] !== p
          ? ((o =
              null != r || null != p || l ? { navigationKey: d, slateLayout: l, targetId: r, targetText: p } : null),
            (a[0] = d),
            (a[1] = l),
            (a[2] = r),
            (a[3] = p),
            (a[4] = o))
          : (o = a[4]),
        a[5] !== c || a[6] !== o
          ? ((t = (0, i.jsx)(h.S.Provider, { value: o, children: c })), (a[5] = c), (a[6] = o), (a[7] = t))
          : (t = a[7]),
        t
      )
    }
  },
  oFmV(e, o, t) {
    let i = (0, t("zd8w").createContext)(null)
    t.d(o, {}, { S: i })
  },
  BSnr(e, o, t) {
    t.d(o, { X: () => c })
    var i = t("ABep"),
      n = t("QosV"),
      a = t("on57")
    let c = Object.assign(
      function (e) {
        let o,
          t,
          c = (0, n.c)(6),
          { children: d, id: s, className: r } = e
        return (
          c[0] !== r ? ((o = (0, a.A)("flex flex-col", r)), (c[0] = r), (c[1] = o)) : (o = c[1]),
          c[2] !== d || c[3] !== s || c[4] !== o
            ? ((t = (0, i.jsx)("section", { id: s, className: o, children: d })),
              (c[2] = d),
              (c[3] = s),
              (c[4] = o),
              (c[5] = t))
            : (t = c[5]),
          t
        )
      },
      {
        Header: function (e) {
          let o,
            t,
            c,
            d,
            s,
            r,
            m,
            l = (0, n.c)(32),
            {
              title: p,
              subtitle: u,
              actions: h,
              actionsAlignment: g,
              className: f,
              size: x,
              titleGap: w,
              spacing: b,
              subtitlePlacement: M,
              subtitleWrap: v,
            } = e,
            D = void 0 === x ? "default" : x,
            T = void 0 === b ? "default" : b,
            y = void 0 === M ? "below-title" : M,
            C = void 0 === v ? "balance" : v,
            k = null != p,
            S = null != u,
            P = null != h,
            A = "compact" === D
          l[0] !== A || l[1] !== u || l[2] !== y || l[3] !== C
            ? ((o = u
                ? (0, i.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === C ? "text-balance" : "text-wrap",
                      A ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === y && "w-full",
                    ),
                    children: u,
                  })
                : null),
              (l[0] = A),
              (l[1] = u),
              (l[2] = y),
              (l[3] = C),
              (l[4] = o))
            : (o = l[4])
          let N = o
          if (!k && !S && !P) {
            let e
            return (
              l[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (l[5] = e))
                : (e = l[5]),
              e
            )
          }
          let j = "below-header" === y ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            R = S && "compact" === T && "pb-2",
            F = S && "compact" !== T && "pb-3"
          l[6] !== f || l[7] !== S || l[8] !== A || l[9] !== T || l[10] !== j || l[11] !== R || l[12] !== F
            ? ((t = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                j,
                R,
                F,
                !S && (0, a.A)("items-center pb-1.5", "compact" === T ? "min-h-8" : "min-h-toolbar"),
                S && A && "items-center",
                S && !A && "items-start",
                f,
              )),
              (l[6] = f),
              (l[7] = S),
              (l[8] = A),
              (l[9] = T),
              (l[10] = j),
              (l[11] = R),
              (l[12] = F),
              (l[13] = t))
            : (t = l[13])
          let O =
            "none" === (void 0 === w ? "default" : w)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(l[14] !== O ? ((c = (0, a.A)("flex min-w-0 flex-1 flex-col", O)), (l[14] = O), (l[15] = c)) : (c = l[15]),
            l[16] !== S || l[17] !== D || l[18] !== p
              ? ((d = p
                  ? (0, i.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === D && "text-sm leading-[18px]",
                        ("large" === D || ("default" === D && S)) && "text-lg",
                        ("base" === D || ("default" === D && !S)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (l[16] = S),
                (l[17] = D),
                (l[18] = p),
                (l[19] = d))
              : (d = l[19]))
          let B = "below-title" === y ? N : null
          ;(l[20] !== c || l[21] !== d || l[22] !== B
            ? ((s = (0, i.jsxs)("div", { className: c, children: [d, B] })),
              (l[20] = c),
              (l[21] = d),
              (l[22] = B),
              (l[23] = s))
            : (s = l[23]),
            l[24] !== h || l[25] !== g
              ? ((r = h
                  ? (0, i.jsx)("div", {
                      className: (0, a.A)("flex items-center gap-2", "end" === g && "self-end"),
                      children: h,
                    })
                  : null),
                (l[24] = h),
                (l[25] = g),
                (l[26] = r))
              : (r = l[26]))
          let W = "below-header" === y ? N : null
          return (
            l[27] !== t || l[28] !== s || l[29] !== r || l[30] !== W
              ? ((m = (0, i.jsxs)("div", { className: t, children: [s, r, W] })),
                (l[27] = t),
                (l[28] = s),
                (l[29] = r),
                (l[30] = W),
                (l[31] = m))
              : (m = l[31]),
            m
          )
        },
        Content: function (e) {
          let o,
            t,
            c = (0, n.c)(5),
            { children: d, className: s } = e
          return (
            c[0] !== s ? ((o = (0, a.A)("flex flex-col gap-1.5", s)), (c[0] = s), (c[1] = o)) : (o = c[1]),
            c[2] !== d || c[3] !== o
              ? ((t = (0, i.jsx)("div", { className: o, children: d })), (c[2] = d), (c[3] = o), (c[4] = t))
              : (t = c[4]),
            t
          )
        },
        Footer: function (e) {
          let o,
            t,
            c = (0, n.c)(6),
            { children: d, className: s, variant: r } = e,
            m =
              "action" === (void 0 === r ? "description" : r)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            c[0] !== s || c[1] !== m
              ? ((o = (0, a.A)("text-balance text-secondary", m, s)), (c[0] = s), (c[1] = m), (c[2] = o))
              : (o = c[2]),
            c[3] !== d || c[4] !== o
              ? ((t = (0, i.jsx)("div", { className: o, children: d })), (c[3] = d), (c[4] = o), (c[5] = t))
              : (t = c[5]),
            t
          )
        },
      },
    )
  },
  bZug(e, o, t) {
    t.d(
      o,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, o, t) {
    var i = t("ABep"),
      n = t("QosV"),
      a = t("on57"),
      c = t("zd8w"),
      d = t("HZfM"),
      s = t("GO7r")
    function r(e) {
      return e.preventDefault()
    }
    function m(e) {
      let o,
        t,
        c,
        d,
        s,
        r,
        m,
        l = (0, n.c)(24),
        {
          label: p,
          labelId: u,
          labelSizing: h,
          labelWeight: g,
          description: f,
          descriptionId: x,
          icon: w,
          variant: b,
          verticalAlignment: M,
        } = e,
        v = "start" === M ? "items-start" : "items-center",
        D = "grow" === (void 0 === h ? "grow" : h) && "flex-1"
      ;(l[0] !== v || l[1] !== D
        ? ((o = (0, a.A)("flex min-w-0 gap-3", v, D)), (l[0] = v), (l[1] = D), (l[2] = o))
        : (o = l[2]),
        l[3] !== w
          ? ((t = null != w ? (0, i.jsx)("span", { className: "flex shrink-0", children: w }) : null),
            (l[3] = w),
            (l[4] = t))
          : (t = l[4]))
      let T = "featured" === b && "text-base",
        y = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        C = "featured" !== b && "recommendation" !== b && "text-sm",
        k = "nested" !== b && "medium" === (void 0 === g ? "medium" : g) && "font-medium"
      return (
        l[5] !== k || l[6] !== T || l[7] !== y || l[8] !== C
          ? ((c = (0, a.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              T,
              y,
              C,
              k,
            )),
            (l[5] = k),
            (l[6] = T),
            (l[7] = y),
            (l[8] = C),
            (l[9] = c))
          : (c = l[9]),
        l[10] !== p || l[11] !== u || l[12] !== c
          ? ((d = (0, i.jsx)("div", { id: u, className: c, children: p })),
            (l[10] = p),
            (l[11] = u),
            (l[12] = c),
            (l[13] = d))
          : (d = l[13]),
        l[14] !== f || l[15] !== x
          ? ((s = f
              ? (0, i.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: f,
                })
              : null),
            (l[14] = f),
            (l[15] = x),
            (l[16] = s))
          : (s = l[16]),
        l[17] !== d || l[18] !== s
          ? ((r = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [d, s] })),
            (l[17] = d),
            (l[18] = s),
            (l[19] = r))
          : (r = l[19]),
        l[20] !== r || l[21] !== o || l[22] !== t
          ? ((m = (0, i.jsxs)("div", { className: o, children: [t, r] })),
            (l[20] = r),
            (l[21] = o),
            (l[22] = t),
            (l[23] = m))
          : (m = l[23]),
        m
      )
    }
    t.d(
      o,
      {},
      {
        $5: function (e) {
          let o,
            t,
            c,
            d,
            s,
            r,
            m = (0, n.c)(18),
            { children: l, compactLabelInset: p, label: u, valueAlignment: h, variant: g } = e,
            f = void 0 === p || p,
            x = void 0 === h ? "start" : h,
            w = void 0 === g ? "default" : g,
            b =
              "compact" === w
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            m[0] !== b ? ((o = (0, a.A)("grid items-center", b)), (m[0] = b), (m[1] = o)) : (o = m[1]),
            m[2] !== f || m[3] !== w
              ? ((t = (0, a.A)(
                  "min-w-0",
                  "compact" === w
                    ? (0, a.A)("flex items-center pe-2 text-start", f && "ps-1")
                    : "text-sm text-secondary",
                )),
                (m[2] = f),
                (m[3] = w),
                (m[4] = t))
              : (t = m[4]),
            m[5] !== u || m[6] !== t
              ? ((c = (0, i.jsx)("div", { className: t, children: u })), (m[5] = u), (m[6] = t), (m[7] = c))
              : (c = m[7]),
            m[8] !== x || m[9] !== w
              ? ((d = (0, a.A)(
                  "min-w-0",
                  "compact" === w
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, a.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (m[8] = x),
                (m[9] = w),
                (m[10] = d))
              : (d = m[10]),
            m[11] !== l || m[12] !== d
              ? ((s = (0, i.jsx)("div", { className: d, children: l })), (m[11] = l), (m[12] = d), (m[13] = s))
              : (s = m[13]),
            m[14] !== o || m[15] !== c || m[16] !== s
              ? ((r = (0, i.jsxs)("div", { className: o, children: [c, s] })),
                (m[14] = o),
                (m[15] = c),
                (m[16] = s),
                (m[17] = r))
              : (r = m[17]),
            r
          )
        },
        ic: function (e) {
          let o,
            t,
            d,
            s,
            r = (0, n.c)(35),
            {
              label: l,
              labelSizing: p,
              labelWeight: u,
              layout: h,
              description: g,
              control: f,
              controlSizing: x,
              icon: w,
              className: b,
              id: M,
              inset: v,
              size: D,
              variant: T,
              verticalAlignment: y,
            } = e,
            C = void 0 === p ? "grow" : p,
            k = void 0 === u ? "medium" : u,
            S = void 0 === h ? "default" : h,
            P = void 0 === x ? "minimum" : x,
            A = void 0 === v || v,
            N = void 0 === D ? "default" : D,
            j = void 0 === T ? "default" : T,
            R = void 0 === y ? "center" : y,
            F = (0, c.useId)(),
            O = null != l || null != g || null != w,
            B = "function" == typeof f,
            W = B && null != l ? `${F}-label` : void 0,
            L = B && g ? `${F}-description` : void 0,
            E = A && ("split" !== S || "default" !== j) && "px-4",
            G = A && "nested" === j && "group-data-[density=form]/settings:px-5",
            V =
              "stacked" === j &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            I =
              "nested" === j &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            q = "stacked" !== j && ("start" === R ? "items-start" : "items-center"),
            K = "split" === S && "default" === j && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            r[0] !== b ||
            r[1] !== S ||
            r[2] !== N ||
            r[3] !== G ||
            r[4] !== V ||
            r[5] !== I ||
            r[6] !== q ||
            r[7] !== K ||
            r[8] !== E ||
            r[9] !== j
              ? ((o = (0, a.A)(
                  "@container/settings-row",
                  E,
                  G,
                  V,
                  I,
                  q,
                  K,
                  "default" === S &&
                    ("default" === j || "featured" === j || "recommendation" === j) &&
                    (0, a.A)(
                      "flex justify-between",
                      "featured" === j && (0, a.A)("gap-6", "compact" === N ? "min-h-11 py-2" : "py-4"),
                      "featured" !== j && ("compact" === N ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === j && "dark:bg-primary-ghost-hover",
                  b,
                )),
                (r[0] = b),
                (r[1] = S),
                (r[2] = N),
                (r[3] = G),
                (r[4] = V),
                (r[5] = I),
                (r[6] = q),
                (r[7] = K),
                (r[8] = E),
                (r[9] = j),
                (r[10] = o))
              : (o = r[10]),
            r[11] !== g ||
            r[12] !== L ||
            r[13] !== O ||
            r[14] !== w ||
            r[15] !== l ||
            r[16] !== W ||
            r[17] !== C ||
            r[18] !== k ||
            r[19] !== j ||
            r[20] !== R
              ? ((t = O
                  ? (0, i.jsx)(m, {
                      label: l,
                      labelId: W,
                      labelSizing: C,
                      labelWeight: k,
                      description: g,
                      descriptionId: L,
                      icon: w,
                      variant: j,
                      verticalAlignment: R,
                    })
                  : null),
                (r[11] = g),
                (r[12] = L),
                (r[13] = O),
                (r[14] = w),
                (r[15] = l),
                (r[16] = W),
                (r[17] = C),
                (r[18] = k),
                (r[19] = j),
                (r[20] = R),
                (r[21] = t))
              : (t = r[21]),
            r[22] !== f || r[23] !== P || r[24] !== L || r[25] !== B || r[26] !== W || r[27] !== S || r[28] !== j
              ? ((d =
                  null != f && !1 !== f
                    ? (0, i.jsx)("div", {
                        className: (0, a.A)(
                          "stacked" === j && "w-full",
                          "nested" === j && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === S &&
                            "default" === j &&
                            (0, a.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === P && "w-full",
                            ),
                          "default" === S &&
                            ("default" === j || "featured" === j || "recommendation" === j) &&
                            (0, a.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === P ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === P && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: B ? f({ "aria-labelledby": W, "aria-describedby": L }) : f,
                      })
                    : null),
                (r[22] = f),
                (r[23] = P),
                (r[24] = L),
                (r[25] = B),
                (r[26] = W),
                (r[27] = S),
                (r[28] = j),
                (r[29] = d))
              : (d = r[29]),
            r[30] !== M || r[31] !== o || r[32] !== t || r[33] !== d
              ? ((s = (0, i.jsxs)("div", { id: M, className: o, children: [t, d] })),
                (r[30] = M),
                (r[31] = o),
                (r[32] = t),
                (r[33] = d),
                (r[34] = s))
              : (s = r[34]),
            s
          )
        },
        jj: function (e) {
          let o,
            t = (0, n.c)(2),
            { children: a } = e
          return (
            t[0] !== a
              ? ((o = (0, i.jsx)("span", { className: "text-xs text-secondary", children: a })), (t[0] = a), (t[1] = o))
              : (o = t[1]),
            o
          )
        },
        kG: function (e) {
          let o,
            t,
            c,
            s,
            l,
            p,
            u,
            h,
            g,
            f,
            x,
            w,
            b,
            M,
            v,
            D,
            T,
            y,
            C,
            k,
            S,
            P,
            A,
            N = (0, n.c)(54)
          N[0] !== e
            ? (({
                actions: o,
                actionsPlacement: x,
                ariaControls: t,
                ariaExpanded: c,
                ariaLabel: s,
                className: l,
                description: p,
                disabled: u,
                edgeRounding: w,
                icon: h,
                label: f,
                size: b,
                trailing: v,
                variant: M,
                ...g
              } = e),
              (N[0] = e),
              (N[1] = o),
              (N[2] = t),
              (N[3] = c),
              (N[4] = s),
              (N[5] = l),
              (N[6] = p),
              (N[7] = u),
              (N[8] = h),
              (N[9] = g),
              (N[10] = f),
              (N[11] = x),
              (N[12] = w),
              (N[13] = b),
              (N[14] = M),
              (N[15] = v))
            : ((o = N[1]),
              (t = N[2]),
              (c = N[3]),
              (s = N[4]),
              (l = N[5]),
              (p = N[6]),
              (u = N[7]),
              (h = N[8]),
              (g = N[9]),
              (f = N[10]),
              (x = N[11]),
              (w = N[12]),
              (b = N[13]),
              (M = N[14]),
              (v = N[15]))
          let j = void 0 === w ? "row" : w,
            R = void 0 === b ? "default" : b,
            F = void 0 === M ? "default" : M,
            O = "before-trailing" === (void 0 === x ? "end" : x) && !u && null != o && null != v,
            B = O ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          N[16] !== l || N[17] !== O || N[18] !== R || N[19] !== B || N[20] !== F
            ? ((D = (0, a.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                B,
                "empty" === F
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, a.A)(
                      "px-4 text-start",
                      "nested" === F && "min-h-10 py-0.5",
                      "nested" !== F && ("large" === R ? "py-4" : "py-3"),
                      O && "gap-2",
                      !O && ("nested" === F ? "gap-3" : "gap-6"),
                    ),
                l,
              )),
              (N[16] = l),
              (N[17] = O),
              (N[18] = R),
              (N[19] = B),
              (N[20] = F),
              (N[21] = D))
            : (D = N[21])
          let W = D
          ;(N[22] !== p || N[23] !== h || N[24] !== f || N[25] !== F
            ? ((T =
                "empty" === F
                  ? (0, i.jsxs)(i.Fragment, { children: [h, f] })
                  : (0, i.jsx)(m, { label: f, description: p, icon: h, variant: F, verticalAlignment: "center" })),
              (N[22] = p),
              (N[23] = h),
              (N[24] = f),
              (N[25] = F),
              (N[26] = T))
            : (T = N[26]),
            N[27] !== v
              ? ((y =
                  null != v
                    ? (0, i.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: v })
                    : null),
                (N[27] = v),
                (N[28] = y))
              : (y = N[28]),
            N[29] !== T || N[30] !== y
              ? ((C = (0, i.jsxs)(i.Fragment, { children: [T, y] })), (N[29] = T), (N[30] = y), (N[31] = C))
              : (C = N[31]))
          let L = C,
            E = O ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            G = "row" === j && "first:rounded-t-2xl last:rounded-b-2xl",
            V = "recommendation" === F && "dark:bg-primary-ghost-hover",
            I = !u && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            q =
              !u &&
              "recommendation" === F &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            N[32] !== E || N[33] !== G || N[34] !== V || N[35] !== I || N[36] !== q
              ? ((k = (0, a.A)("group w-full items-center", E, G, V, I, q)),
                (N[32] = E),
                (N[33] = G),
                (N[34] = V),
                (N[35] = I),
                (N[36] = q),
                (N[37] = k))
              : (k = N[37]),
            N[38] !== t || N[39] !== c || N[40] !== s || N[41] !== L || N[42] !== u || N[43] !== g || N[44] !== W
              ? ((S =
                  null != g.to
                    ? (0, i.jsx)(d.N_, {
                        ...g,
                        className: W,
                        "aria-controls": t,
                        "aria-expanded": c,
                        "aria-label": s,
                        "aria-disabled": u || void 0,
                        tabIndex: u ? -1 : void 0,
                        onClick: u ? r : g.onClick,
                        children: L,
                      })
                    : (0, i.jsx)("button", {
                        ...g,
                        className: W,
                        "aria-controls": t,
                        "aria-expanded": c,
                        "aria-label": s,
                        disabled: u,
                        type: "button",
                        children: L,
                      })),
                (N[38] = t),
                (N[39] = c),
                (N[40] = s),
                (N[41] = L),
                (N[42] = u),
                (N[43] = g),
                (N[44] = W),
                (N[45] = S))
              : (S = N[45]),
            N[46] !== o || N[47] !== u || N[48] !== O
              ? ((P =
                  u || null == o
                    ? null
                    : (0, i.jsx)("div", {
                        className: (0, a.A)(
                          "flex shrink-0 items-center gap-1",
                          O ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: o,
                      })),
                (N[46] = o),
                (N[47] = u),
                (N[48] = O),
                (N[49] = P))
              : (P = N[49]),
            N[50] !== k || N[51] !== S || N[52] !== P
              ? ((A = (0, i.jsxs)("div", { className: k, children: [S, P] })),
                (N[50] = k),
                (N[51] = S),
                (N[52] = P),
                (N[53] = A))
              : (A = N[53]),
            A
          )
        },
        kf: function (e) {
          let o,
            t = (0, n.c)(2),
            { children: a } = e
          return (
            t[0] !== a
              ? ((o = (0, i.jsx)("span", { className: "text-tertiary", children: a })), (t[0] = a), (t[1] = o))
              : (o = t[1]),
            o
          )
        },
        lu: function (e) {
          let o,
            t,
            c,
            d,
            r,
            m,
            l,
            p,
            u,
            h,
            g = (0, n.c)(43),
            {
              id: f,
              ariaLabel: x,
              autoFocus: w,
              checked: b,
              description: M,
              highlightSelected: v,
              indicator: D,
              label: T,
              name: y,
              onChange: C,
              onClick: k,
              value: S,
              variant: P,
            } = e,
            A = void 0 === v || v,
            N = void 0 === D ? "radio" : D,
            j = void 0 === P ? "default" : P
          ;(g[0] !== b || g[1] !== M || g[2] !== A || g[3] !== N || g[4] !== j
            ? ((o = (0, a.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === j &&
                  (0, a.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != M ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === j && b && A && "radio" === N && "bg-primary-soft-alpha",
                "form" === j && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === j && "items-center gap-2",
                "checkmark" === N && "after:ms-7",
              )),
              (g[0] = b),
              (g[1] = M),
              (g[2] = A),
              (g[3] = N),
              (g[4] = j),
              (g[5] = o))
            : (o = g[5]),
            g[6] !== x || g[7] !== f
              ? ((t = (0, i.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: f,
                })),
                (g[6] = x),
                (g[7] = f),
                (g[8] = t))
              : (t = g[8]),
            g[9] !== N || g[10] !== j
              ? ((c = (0, a.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === N
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, a.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === j ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (g[9] = N),
                (g[10] = j),
                (g[11] = c))
              : (c = g[11]))
          let R = null != M ? `${f}-description` : void 0
          ;(g[12] !== x ||
          g[13] !== w ||
          g[14] !== b ||
          g[15] !== f ||
          g[16] !== y ||
          g[17] !== C ||
          g[18] !== k ||
          g[19] !== c ||
          g[20] !== R ||
          g[21] !== S
            ? ((d = (0, i.jsx)("input", {
                id: f,
                className: c,
                "aria-label": x,
                "aria-describedby": R,
                autoFocus: w,
                type: "radio",
                name: y,
                value: S,
                checked: b,
                onChange: C,
                onClick: k,
              })),
              (g[12] = x),
              (g[13] = w),
              (g[14] = b),
              (g[15] = f),
              (g[16] = y),
              (g[17] = C),
              (g[18] = k),
              (g[19] = c),
              (g[20] = R),
              (g[21] = S),
              (g[22] = d))
            : (d = g[22]),
            g[23] !== b || g[24] !== N
              ? ((r = "checkmark" === N ? (0, i.jsx)(s.ALZ, { className: (0, a.A)(!b && "invisible") }) : null),
                (g[23] = b),
                (g[24] = N),
                (g[25] = r))
              : (r = g[25]))
          let F = "default" === j ? "text-sm font-medium" : "text-base"
          return (
            g[26] !== F ? ((m = (0, a.A)("text-default", F)), (g[26] = F), (g[27] = m)) : (m = g[27]),
            g[28] !== T || g[29] !== m
              ? ((l = (0, i.jsx)("span", { className: m, children: T })), (g[28] = T), (g[29] = m), (g[30] = l))
              : (l = g[30]),
            g[31] !== M || g[32] !== f
              ? ((p =
                  null != M
                    ? (0, i.jsx)("span", {
                        id: `${f}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: M,
                      })
                    : null),
                (g[31] = M),
                (g[32] = f),
                (g[33] = p))
              : (p = g[33]),
            g[34] !== l || g[35] !== p
              ? ((u = (0, i.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [l, p],
                })),
                (g[34] = l),
                (g[35] = p),
                (g[36] = u))
              : (u = g[36]),
            g[37] !== u || g[38] !== o || g[39] !== t || g[40] !== d || g[41] !== r
              ? ((h = (0, i.jsxs)("div", { className: o, children: [t, d, r, u] })),
                (g[37] = u),
                (g[38] = o),
                (g[39] = t),
                (g[40] = d),
                (g[41] = r),
                (g[42] = h))
              : (h = g[42]),
            h
          )
        },
      },
    )
  },
  ZEx5(e, o, t) {
    t.d(o, { t: () => d })
    var i = t("ABep"),
      n = t("QosV"),
      a = t("on57"),
      c = t("bZug")
    function d(e) {
      let o,
        t,
        d,
        s = (0, n.c)(23),
        { children: r, className: m, contentOverflow: l, dividers: p, variant: u, decoration: h } = e,
        g = void 0 === u ? "default" : u,
        f = "flat" === g || "rows" === g ? c.s : c.r,
        x = void 0 === p || p ? f : "flex flex-col",
        w = "recommendation" === g && "rounded-[20px]",
        b = "recommendation" !== g && "flat" !== g && "rows" !== g && "outlinedLarge" !== g && "rounded-2xl",
        M = "outlinedLarge" === g && "rounded-[30px] border border-default bg-transparent",
        v = "daybreak" === h && "daybreak-VsXdEH",
        D = "visible" === (void 0 === l ? "hidden" : l) ? "overflow-visible" : "overflow-hidden",
        T =
          "default" === g &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        y = "metered" === g && "ring-1 ring-inset ring-border-subtle",
        C = "secondary" === g && "bg-surface-secondary/92",
        k = "muted" === g && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        S =
          "form" === g &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        P = "outlined" === g && "border border-subtle bg-transparent",
        A =
          "flat" === g &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        N = "input" === g && "border border-primary-outline bg-primary-soft",
        j = "recommendation" === g && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        s[0] !== m ||
        s[1] !== T ||
        s[2] !== y ||
        s[3] !== C ||
        s[4] !== k ||
        s[5] !== S ||
        s[6] !== P ||
        s[7] !== A ||
        s[8] !== N ||
        s[9] !== j ||
        s[10] !== x ||
        s[11] !== w ||
        s[12] !== b ||
        s[13] !== M ||
        s[14] !== v ||
        s[15] !== D
          ? ((o = (0, a.A)(x, w, b, M, v, D, T, y, C, k, S, P, A, N, j, m)),
            (s[0] = m),
            (s[1] = T),
            (s[2] = y),
            (s[3] = C),
            (s[4] = k),
            (s[5] = S),
            (s[6] = P),
            (s[7] = A),
            (s[8] = N),
            (s[9] = j),
            (s[10] = x),
            (s[11] = w),
            (s[12] = b),
            (s[13] = M),
            (s[14] = v),
            (s[15] = D),
            (s[16] = o))
          : (o = s[16]),
        s[17] !== g
          ? ((t =
              "default" === g || "metered" === g
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (s[17] = g),
            (s[18] = t))
          : (t = s[18]),
        s[19] !== r || s[20] !== o || s[21] !== t
          ? ((d = (0, i.jsx)("div", { className: o, style: t, children: r })),
            (s[19] = r),
            (s[20] = o),
            (s[21] = t),
            (s[22] = d))
          : (d = s[22]),
        d
      )
    }
  },
}
//# sourceMappingURL=739641.9e136530d2.js.map
