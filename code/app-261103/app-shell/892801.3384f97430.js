export const __rspack_esm_ids = [892801]
export const __webpack_modules__ = {
  WVWQ(e, o, t) {
    t.d(o, { j: () => b, I: () => D })
    var i = t("X2Bp"),
      a = t("Qgfj"),
      n = t("CTWI")
    function c(e) {
      return { title: e.formatMessage(d.title), description: e.formatMessage(d.description) }
    }
    let d = (0, a.YK)({
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
    let m = (0, a.YK)({
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
    let h = (0, a.YK)({
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
      u = (0, a.YK)({
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
      g = (0, a.zR)({
        id: "codex.command.showMiniOverlay",
        defaultMessage: "Show Mini",
        description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
      }),
      f = (0, a.YK)({
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
      x = { ...f, "codex.command.importExternalAgent": h.title, "codex.command.personalitySettings": u.title },
      M = (0, a.YK)({
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
      w = {
        ...(0, a.YK)({
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
        "codex.commandDescription.importExternalAgent": h.description,
        "codex.commandDescription.personalitySettings": u.description,
      }
    function D(e, o, t = !1) {
      if ("openOrbit" === e.id) return s(o).title
      if ("focusPageBlockControls" === e.id) return r(o).title
      if ("openAvatarOverlay" === e.id && t) return o.formatMessage(g)
      if ("composer.captureAppshot" === e.id) return c(o).title
      if ("titleIntlId" in e) {
        var i
        let t
        return v(x, e.titleIntlId)
          ? o.formatMessage(x[e.titleIntlId], { dot: "dot" })
          : null == (t = p((i = e.id)) ? l[i] : null)
            ? ""
            : o.formatMessage(t.title)
      }
      return o.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function b(e, o, t, a = !1) {
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
      let h = (0, i.yF)(e)
          ? v(w, e.descriptionIntlId)
            ? o.formatMessage(w[e.descriptionIntlId], { appName: n.C, dot: "dot" })
            : null == (m = p((d = e.id)) ? l[d] : null)
              ? ""
              : o.formatMessage(m.description)
          : "",
        u = t?.title ?? D(e, o)
      return ("openAvatarOverlay" === e.id && a && (u = D(e, o, !0)), { title: u, description: t?.description ?? h })
    }
    function v(e, o) {
      return Object.hasOwn(e, o)
    }
  },
  Jue3(e, o, t) {
    var i = t("zTeN"),
      a = t("ChYf"),
      n = t("wLMK"),
      c = t("OWtl")
    let d = (0, i.un)(c.u, ({ get: e }) => {
      let o = e(n.V).data?.platform
      return "linux" === o
        ? e(a.G, { name: "dictation.composer" }).isCapable || e(a.G, { name: "dictation.chatgpt" }).isCapable
          ? "app"
          : null
        : ("darwin" === o || "win32" === o) && e(a.G, { name: "dictation.global" }).isCapable
          ? "os-global"
          : null
    })
    t.d(o, {}, { i: d })
  },
  z4p1(e, o, t) {
    var i = t("X2Bp")
    function a(
      e,
      {
        allowDebugMenu: o,
        fileLanguageFeaturesEnabled: t,
        isAutomationsEnabled: n,
        isDictationShortcutEnabled: c,
        isHotkeyWindowEnabled: d,
        isScreenshotSelectionEnabled: s,
        isPriorityFilterEnabled: r,
        isRealtimeVoiceCommandEnabled: m,
        isSpotlightEnabled: l,
        isSidebarCollapsible: p,
        modeSwitchAvailable: h,
      },
    ) {
      return "toggleSidebar" === e
        ? p
        : "toggleDebugModal" === e
          ? !0 === o
          : (!!t || ("file.goToDefinition" !== e && "file.navigateBack" !== e && "file.navigateForward" !== e)) &&
            ("screenshotToCurrentChat" === e || "screenshotToNewChat" === e
              ? s
              : "hotkeyWindow" === e
                ? d
                : "spotlightSearch" === e
                  ? l
                  : "manageTasks" === e
                    ? n
                    : "switchToMode1" === e || "switchToMode2" === e || "switchToMode3" === e
                      ? h
                      : "togglePriorityFilter" === e
                        ? r
                        : (0, i.NL)(e) || "notchVoice" === e
                          ? m
                          : ("globalDictationHold" !== e && "globalDictationSingleTap" !== e) || c)
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
            commandAccess: n,
            fileLanguageFeaturesEnabled: c,
            isAutomationsEnabled: d,
            isDictationShortcutEnabled: s,
            isHotkeyWindowEnabled: r,
            isScreenshotSelectionEnabled: m,
            isPriorityFilterEnabled: l,
            isRealtimeVoiceCommandEnabled: p,
            isSpotlightEnabled: h,
            isSidebarCollapsible: u,
            modeSwitchAvailable: g,
            platform: f,
          },
        ) {
          let x = (0, i.hF)(e)
          return (
            "composer.toggleDictation" !== e &&
            (null == x || !!(0, i.mg)(x, n)) &&
            !!a(e, {
              allowDebugMenu: o,
              fileLanguageFeaturesEnabled: c,
              isAutomationsEnabled: d,
              isDictationShortcutEnabled: s,
              isHotkeyWindowEnabled: r,
              isScreenshotSelectionEnabled: m,
              isPriorityFilterEnabled: l,
              isRealtimeVoiceCommandEnabled: p,
              isSpotlightEnabled: h,
              isSidebarCollapsible: u,
              modeSwitchAvailable: g,
            }) &&
            ("copyConversationPath" === e || "screenshotToCurrentChat" === e || "screenshotToNewChat" === e
              ? "macOS" === f
              : "hardReloadBrowserPage" === e || "newTab" === e || "reloadBrowserPage" === e
                ? t
                : "toggleTraceRecording" !== e)
          )
        },
        V: function (e, o) {
          return (
            "composer.toggleDictation" !== e.id &&
            "toggleNotch" !== e.id &&
            "notchVoice" !== e.id &&
            ("screenshotToCurrentChat" === e.id || "screenshotToNewChat" === e.id
              ? o.isScreenshotSelectionEnabled && !0 === o.desktopShortcuts && "macOS" === o.platform && (0, i.mg)(e, o)
              : "personalitySettings" !== e.id && !!(0, i.mg)(e, o) && ("toggleSidebar" === e.id || a(e.id, o)))
          )
        },
      },
    )
  },
  OvVq(e, o, t) {
    var i = t("X2Bp")
    let a = ["newTask", "temporaryChat", "archiveThread", "newProjectlessTask", "openSideChat"]
    function n(e) {
      let o = a.indexOf(e)
      return -1 === o ? a.length : o
    }
    function c(e) {
      return "webview" !== e.kind || null == e.commandMenuGroupKey ? i.vW.length : i.vW.indexOf(e.commandMenuGroupKey)
    }
    t.d(
      o,
      {},
      {
        N: function (e, o) {
          let t = c(e) - c(o)
          if (0 !== t) return t
          let i = n(e.id) - n(o.id)
          return 0 !== i ? i : e.id.localeCompare(o.id)
        },
      },
    )
  },
  UBSb(e, o, t) {
    t.d(o, { KeyboardShortcutsDialog: () => j })
    var i = t("ABep"),
      a = t("QosV"),
      n = t("zTeN"),
      c = t("zd8w"),
      d = t("Wf1j"),
      s = t("oyxz"),
      r = t("ChYf"),
      m = t("gbrq"),
      l = t("X2Bp"),
      p = t("n5iL"),
      h = t("S99C"),
      u = t("YxWD"),
      g = t("WVWQ"),
      f = t("q3HK"),
      x = t("JNtf"),
      M = t("mUDD"),
      w = t("e2yU"),
      D = t("Bbed"),
      b = t("Jue3"),
      v = t("wwME"),
      T = t("z4p1"),
      C = t("OvVq"),
      y = t("l0pH"),
      k = t("aeqi"),
      S = t("BSnr"),
      P = t("AWNZ"),
      A = t("yx3a"),
      N = t("pasN"),
      R = t("hZax"),
      O = t("UN1G")
    let B = [...l.vW, "general"]
    var F = t("TP69")
    let W = (0, D._)(
      async () =>
        (await Promise.all([t.e(755278), t.e(350206)]).then(t.bind(t, "pbhu"))).ChatGptKeyboardShortcutsDialog,
    )
    function j(e) {
      let o,
        t = (0, a.c)(3),
        { onOpenChange: c } = e,
        d = "work" === (0, n.Ul)(N.l)
      return (
        t[0] !== d || t[1] !== c
          ? ((o = d ? (0, i.jsx)(W, { onOpenChange: c }) : (0, i.jsx)(G, { onOpenChange: c })),
            (t[0] = d),
            (t[1] = c),
            (t[2] = o))
          : (o = t[2]),
        o
      )
    }
    function G(e) {
      let o,
        t,
        c,
        s,
        M,
        w,
        D = (0, a.c)(27),
        { onOpenChange: C } = e,
        S = (0, d.A)(),
        { platform: P } = (0, v.V)()
      D[0] === Symbol.for("react.memo_cache_sentinel") ? ((o = { name: "browser.in-app" }), (D[0] = o)) : (o = D[0])
      let N = (0, n._U)(r.G, o).isCapable,
        O = (0, n.Ul)(h.W),
        B = (0, n.Ul)(u.tu),
        F = (0, R.Zj)(k.N),
        W = null != (0, n.Ul)(b.i)
      D[1] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "automations.local" }), (D[1] = t)) : (t = D[1])
      let j = (0, n._U)(r.G, t).isCapable
      D[2] === Symbol.for("react.memo_cache_sentinel") ? ((c = { name: "automations.cloud" }), (D[2] = c)) : (c = D[2])
      let G = (0, n._U)(r.G, c).isCapable,
        q = (0, R.Zj)("1372061905"),
        I = (0, R.Zj)("3009531526"),
        E = (0, R.Zj)("983842163"),
        _ = (0, n.Ul)(m.gU),
        U = (0, R.Zj)("1532120159"),
        H = (0, y.g)(),
        z = (0, u.ZJ)(B, "toggleDebugModal") > 0,
        Q = (0, A.v)(),
        Y = (0, n.Ul)(p.nH)
      D[3] !== z ||
      D[4] !== N ||
      D[5] !== O ||
      D[6] !== F ||
      D[7] !== S ||
      D[8] !== G ||
      D[9] !== W ||
      D[10] !== q ||
      D[11] !== j ||
      D[12] !== U ||
      D[13] !== H ||
      D[14] !== E ||
      D[15] !== _ ||
      D[16] !== I ||
      D[17] !== Y ||
      D[18] !== P ||
      D[19] !== Q ||
      D[20] !== B
        ? ((s =
            null == Y
              ? null
              : (function ({
                  keymapState: e,
                  registeredCommands: o,
                  hasBaseCommandHandler: t,
                  isCommandAvailable: i,
                  platform: a,
                }) {
                  return l.zQ.filter(l.AK).flatMap((n) => {
                    if (!i(n.id)) return []
                    let c = (0, p.Dq)(n.id, e, a)
                    return 0 !== c.length && ("webview" !== n.kind || t(n.id) || (o[n.id]?.length ?? 0) !== 0)
                      ? [{ command: n, shortcutEntries: c }]
                      : []
                  })
                })({
                  keymapState: Y,
                  registeredCommands: B,
                  hasBaseCommandHandler: f.Zu,
                  isCommandAvailable: (e) =>
                    (0, T.I)(e, {
                      allowDebugMenu: z,
                      browserEnabled: N,
                      commandAccess: O,
                      fileLanguageFeaturesEnabled: F,
                      isAutomationsEnabled: j || G,
                      isDictationShortcutEnabled: W,
                      isHotkeyWindowEnabled: q,
                      isSpotlightEnabled: I,
                      isScreenshotSelectionEnabled: E,
                      isSidebarCollapsible: _,
                      isPriorityFilterEnabled: Q,
                      isRealtimeVoiceCommandEnabled: H,
                      modeSwitchAvailable: (0, u.ZJ)(B, e) > 0,
                      platform: P,
                    }),
                  platform: P,
                })
                  .sort(V)
                  .map((e) => {
                    let { command: o, shortcutEntries: t } = e,
                      i = (0, g.j)(o, S, (0, u.iG)(B, o.id), U)
                    return {
                      id: o.id,
                      ...i,
                      shortcutLabels: t.map(L),
                      sectionKey:
                        "webview" === o.kind && null != o.commandMenuGroupKey ? o.commandMenuGroupKey : "general",
                    }
                  })),
          (D[3] = z),
          (D[4] = N),
          (D[5] = O),
          (D[6] = F),
          (D[7] = S),
          (D[8] = G),
          (D[9] = W),
          (D[10] = q),
          (D[11] = j),
          (D[12] = U),
          (D[13] = H),
          (D[14] = E),
          (D[15] = _),
          (D[16] = I),
          (D[17] = Y),
          (D[18] = P),
          (D[19] = Q),
          (D[20] = B),
          (D[21] = s))
        : (s = D[21])
      let Z = s
      return (
        D[22] !== Z ? ((M = (0, i.jsx)(K, { items: Z })), (D[22] = Z), (D[23] = M)) : (M = D[23]),
        D[24] !== C || D[25] !== M
          ? ((w = (0, i.jsx)(x.lG, { open: !0, onOpenChange: C, size: "wide", children: M })),
            (D[24] = C),
            (D[25] = M),
            (D[26] = w))
          : (w = D[26]),
        w
      )
    }
    function L(e) {
      let { label: o } = e
      return o
    }
    function V(e, o) {
      return (0, C.N)(e.command, o.command)
    }
    function K(e) {
      let o,
        t,
        n,
        d,
        r,
        m,
        l,
        p,
        h,
        u,
        g,
        f = (0, a.c)(26),
        { items: w } = e,
        [D, b] = (0, c.useState)("")
      if (f[0] !== w || f[1] !== D) {
        let e,
          a,
          c =
            null == w
              ? null
              : ((e = D.trim()),
                (a = w.filter(
                  (o) =>
                    "personalitySettings" !== o.id &&
                    (0 === e.length || [o.id, o.title, o.description].some((o) => (0, O.gr)(o, e) > 0)),
                )),
                B.flatMap((e) => {
                  let o = a.filter((o) => o.sectionKey === e)
                  return 0 === o.length ? [] : [{ key: e, items: o }]
                }))
        ;((t = M.R4),
          (l = "tall"),
          f[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, i.jsx)(M.c7, {
                title: (0, i.jsx)(x.L3, {
                  children: (0, i.jsx)(s.A, {
                    id: "keyboardShortcutsDialog.title",
                    defaultMessage: "Keyboard shortcuts",
                    description: "Title for the active keyboard shortcuts dialog",
                  }),
                }),
              })),
              (f[11] = p))
            : (p = f[11]),
          (h =
            null == w
              ? null
              : (0, i.jsx)(M.OO, {
                  className: "pb-3",
                  children: (0, i.jsx)(F.d, { autoFocus: !0, value: D, onValueChange: b }),
                })),
          (o = M.OO),
          (n = "min-h-0 flex-1 overflow-y-auto pe-3 pt-0!"),
          f[12] !== w
            ? ((d =
                null == w
                  ? (0, i.jsx)("div", {
                      className: "py-1 text-sm text-secondary",
                      children: (0, i.jsx)(s.A, {
                        id: "keyboardShortcutsDialog.loading",
                        defaultMessage: "Loading shortcuts…",
                        description: "Loading label while active keyboard shortcuts are being fetched",
                      }),
                    })
                  : null),
              (f[12] = w),
              (f[13] = d))
            : (d = f[13]),
          (r =
            c?.length === 0
              ? (0, i.jsx)("div", {
                  className: "py-1 text-sm text-secondary",
                  children:
                    0 === D.trim().length
                      ? (0, i.jsx)(s.A, {
                          id: "keyboardShortcutsDialog.empty",
                          defaultMessage: "No active shortcuts",
                          description: "Empty state shown when no active shortcuts are available",
                        })
                      : (0, i.jsx)(s.A, {
                          id: "keyboardShortcutsDialog.noMatches",
                          defaultMessage: "No matching shortcuts",
                          description: "Empty state shown when active shortcut search has no matches",
                        }),
                })
              : null),
          (m = c?.map(q)),
          (f[0] = w),
          (f[1] = D),
          (f[2] = o),
          (f[3] = t),
          (f[4] = n),
          (f[5] = d),
          (f[6] = r),
          (f[7] = m),
          (f[8] = l),
          (f[9] = p),
          (f[10] = h))
      } else
        ((o = f[2]), (t = f[3]), (n = f[4]), (d = f[5]), (r = f[6]), (m = f[7]), (l = f[8]), (p = f[9]), (h = f[10]))
      return (
        f[14] !== o || f[15] !== n || f[16] !== d || f[17] !== r || f[18] !== m
          ? ((u = (0, i.jsxs)(o, { className: n, children: [d, r, m] })),
            (f[14] = o),
            (f[15] = n),
            (f[16] = d),
            (f[17] = r),
            (f[18] = m),
            (f[19] = u))
          : (u = f[19]),
        f[20] !== t || f[21] !== l || f[22] !== p || f[23] !== h || f[24] !== u
          ? ((g = (0, i.jsxs)(t, { size: l, children: [p, h, u] })),
            (f[20] = t),
            (f[21] = l),
            (f[22] = p),
            (f[23] = h),
            (f[24] = u),
            (f[25] = g))
          : (g = f[25]),
        g
      )
    }
    function q(e) {
      return (0, i.jsxs)(
        S.X,
        {
          children: [
            (0, i.jsx)(S.X.Header, { title: (0, i.jsx)(_, { sectionKey: e.key }) }),
            (0, i.jsx)(S.X.Content, { children: e.items.map(I) }),
          ],
        },
        e.key,
      )
    }
    function I(e) {
      return (0, i.jsx)(
        P.$5,
        {
          compactLabelInset: !1,
          label: e.title,
          variant: "compact",
          children: (0, i.jsx)(M.fh, { children: e.shortcutLabels.map(E) }),
        },
        e.id,
      )
    }
    function E(e) {
      return (0, i.jsx)(w.x, { keysLabel: e }, e)
    }
    function _(e) {
      let o = (0, a.c)(8),
        { sectionKey: t } = e
      switch (t) {
        case "thread": {
          let e
          return (
            o[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.thread",
                  defaultMessage: "Chat",
                  description: "Section title for active task keyboard shortcuts",
                })),
                (o[0] = e))
              : (e = o[0]),
            e
          )
        }
        case "navigation": {
          let e
          return (
            o[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.navigation",
                  defaultMessage: "Navigation",
                  description: "Section title for active navigation keyboard shortcuts",
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
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.panels",
                  defaultMessage: "Panels",
                  description: "Section title for active panel keyboard shortcuts",
                })),
                (o[2] = e))
              : (e = o[2]),
            e
          )
        }
        case "workspace": {
          let e
          return (
            o[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.workspace",
                  defaultMessage: "Project",
                  description: "Section title for active project keyboard shortcuts",
                })),
                (o[3] = e))
              : (e = o[3]),
            e
          )
        }
        case "skills": {
          let e
          return (
            o[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.skills",
                  defaultMessage: "Skills",
                  description: "Section title for active skill keyboard shortcuts",
                })),
                (o[4] = e))
              : (e = o[4]),
            e
          )
        }
        case "configure": {
          let e
          return (
            o[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.configure",
                  defaultMessage: "Configure",
                  description: "Section title for active configuration keyboard shortcuts",
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
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.app",
                  defaultMessage: "App",
                  description: "Section title for active app keyboard shortcuts",
                })),
                (o[6] = e))
              : (e = o[6]),
            e
          )
        }
        case "general": {
          let e
          return (
            o[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(s.A, {
                  id: "keyboardShortcutsDialog.section.general",
                  defaultMessage: "General",
                  description: "Section title for general active keyboard shortcuts",
                })),
                (o[7] = e))
              : (e = o[7]),
            e
          )
        }
      }
    }
  },
  TP69(e, o, t) {
    var i = t("ABep"),
      a = t("QosV"),
      n = t("zd8w"),
      c = t("Wf1j"),
      d = t("okCa")
    t.d(
      o,
      {},
      {
        d: function (e) {
          let o,
            t,
            s,
            r,
            m,
            l,
            p,
            h = (0, a.c)(30),
            {
              autoFocus: u,
              ariaLabel: g,
              isSearchingByKeystrokes: f,
              placeholder: x,
              trailingContent: M,
              onKeyDown: w,
              value: D,
              onValueChange: b,
            } = e,
            v = void 0 !== f && f,
            T = (0, n.useId)(),
            C = (0, c.A)(),
            y = (0, n.useRef)(null),
            k = (0, n.useRef)(v)
          ;(h[0] !== v
            ? ((o = () => {
                ;(k.current && !v && y.current?.focus(), (k.current = v))
              }),
              (t = [v]),
              (h[0] = v),
              (h[1] = o),
              (h[2] = t))
            : ((o = h[1]), (t = h[2])),
            (0, n.useLayoutEffect)(o, t),
            h[3] !== g || h[4] !== C || h[5] !== v
              ? ((s = v
                  ? C.formatMessage({
                      id: "settings.keyboardShortcuts.keystrokeSearch.ariaLabel",
                      defaultMessage: "Keystroke search capture",
                      description: "Accessible label for the input that captures keyboard shortcuts to search",
                    })
                  : (g ??
                    C.formatMessage({
                      id: "settings.keyboardShortcuts.search.ariaLabel",
                      defaultMessage: "Search keyboard shortcuts",
                      description: "Accessible label for the keyboard shortcuts search input",
                    }))),
                (h[3] = g),
                (h[4] = C),
                (h[5] = v),
                (h[6] = s))
              : (s = h[6]))
          let S = s
          h[7] !== C || h[8] !== v || h[9] !== x
            ? ((r = v
                ? C.formatMessage({
                    id: "settings.keyboardShortcuts.keystrokeSearch.placeholder",
                    defaultMessage: "Press shortcut to search",
                    description: "Placeholder shown while capturing a keyboard shortcut to search",
                  })
                : (x ??
                  C.formatMessage({
                    id: "settings.keyboardShortcuts.search.placeholder",
                    defaultMessage: "Search shortcuts",
                    description: "Placeholder for the keyboard shortcuts search input",
                  }))),
              (h[7] = C),
              (h[8] = v),
              (h[9] = x),
              (h[10] = r))
            : (r = h[10])
          let P = r,
            A = v || void 0,
            N = v ? "keystrokes" : "text",
            R = !v
          return (
            h[11] !== w || h[12] !== b || h[13] !== D
              ? ((m = (e) => {
                  ;(w?.(e),
                    e.defaultPrevented ||
                      "Escape" !== e.key ||
                      "" === D ||
                      (e.preventDefault(), e.stopPropagation(), b("")))
                }),
                (h[11] = w),
                (h[12] = b),
                (h[13] = D),
                (h[14] = m))
              : (m = h[14]),
            h[15] !== u ||
            h[16] !== T ||
            h[17] !== P ||
            h[18] !== v ||
            h[19] !== S ||
            h[20] !== b ||
            h[21] !== N ||
            h[22] !== R ||
            h[23] !== m ||
            h[24] !== M ||
            h[25] !== D
              ? ((l = (0, i.jsx)(d.s, {
                  id: T,
                  autoFocus: u,
                  inputRef: y,
                  inputKey: N,
                  isClearable: R,
                  label: S,
                  placeholder: P,
                  readOnly: v,
                  searchQuery: D,
                  trailingControl: M,
                  onKeyDown: m,
                  onSearchQueryChange: b,
                })),
                (h[15] = u),
                (h[16] = T),
                (h[17] = P),
                (h[18] = v),
                (h[19] = S),
                (h[20] = b),
                (h[21] = N),
                (h[22] = R),
                (h[23] = m),
                (h[24] = M),
                (h[25] = D),
                (h[26] = l))
              : (l = h[26]),
            h[27] !== l || h[28] !== A
              ? ((p = (0, i.jsx)("div", { "data-codex-shortcut-capture": A, children: l })),
                (h[27] = l),
                (h[28] = A),
                (h[29] = p))
              : (p = h[29]),
            p
          )
        },
      },
    )
  },
  aeqi(e, o, t) {
    t.d(o, {}, { N: "1932174607" })
  },
}
//# sourceMappingURL=892801.3384f97430.js.map
