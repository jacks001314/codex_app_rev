export const __rspack_esm_ids = [401845]
export const __webpack_modules__ = {
  SgPg(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("JIuM"),
      c = o("LhhH"),
      r = o("ISnp")
    o.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            o = (0, n.c)(9),
            { avatarUrl: s, colorKey: d, fadeIn: l, loading: m, loadingFallback: u, muted: p, name: h, size: g } = e,
            f = void 0 === g ? "md" : g,
            { isProfileVisible: x } = (0, r.D)(),
            { src: w, isError: M } = (0, i._w)(x ? s : null),
            v = x && (m || (null != s && null == w && !M)) ? u : void 0
          return (
            o[0] !== d || o[1] !== l || o[2] !== u || o[3] !== p || o[4] !== h || o[5] !== f || o[6] !== w || o[7] !== v
              ? ((t = (0, a.jsx)(c.e, {
                  alt: "",
                  colorKey: d,
                  fadeIn: l,
                  fallback: v,
                  loadingFallback: u,
                  muted: p,
                  name: h,
                  size: f,
                  src: w,
                })),
                (o[0] = d),
                (o[1] = l),
                (o[2] = u),
                (o[3] = p),
                (o[4] = h),
                (o[5] = f),
                (o[6] = w),
                (o[7] = v),
                (o[8] = t))
              : (t = o[8]),
            t
          )
        },
      },
    )
  },
  klMk(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("on57"),
      c = o("oyxz"),
      r = o("ZZgR"),
      s = o("bVeK")
    function d(e) {
      let t,
        o,
        c,
        r = (0, n.c)(10),
        { children: s, description: d, disabledReason: l } = e
      if (!l && !d) {
        let e
        return (r[0] !== s ? ((e = (0, a.jsx)(a.Fragment, { children: s })), (r[0] = s), (r[1] = e)) : (e = r[1]), e)
      }
      return (
        r[2] !== s
          ? ((t = (0, a.jsx)("span", { className: "truncate", children: s })), (r[2] = s), (r[3] = t))
          : (t = r[3]),
        r[4] !== d || r[5] !== l
          ? ((o =
              l || d
                ? (0, a.jsx)("span", {
                    className: (0, i.A)("truncate text-sm text-codex-description", null != l && "shrink-0"),
                    children: l ?? d,
                  })
                : null),
            (r[4] = d),
            (r[5] = l),
            (r[6] = o))
          : (o = r[6]),
        r[7] !== t || r[8] !== o
          ? ((c = (0, a.jsxs)("span", { className: "flex min-w-0 items-center gap-1", children: [t, o] })),
            (r[7] = t),
            (r[8] = o),
            (r[9] = c))
          : (c = r[9]),
        c
      )
    }
    o.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            o,
            i,
            l = (0, n.c)(8),
            { disabledReason: m, onClick: u } = e,
            p = null != m
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(c.A, {
                  id: "floatingComposer.newChat",
                  defaultMessage: "New chat",
                  description: "Menu action to start a new primary chat while keeping the workspace content open",
                })),
                (l[0] = t))
              : (t = l[0]),
            l[1] !== m ? ((o = (0, a.jsx)(d, { disabledReason: m, children: t })), (l[1] = m), (l[2] = o)) : (o = l[2]),
            l[3] !== m || l[4] !== u || l[5] !== p || l[6] !== o
              ? ((i = (0, a.jsx)(r.G.Button, {
                  "aria-description": m,
                  LeftIcon: s.JSV,
                  disabled: p,
                  tooltipText: m,
                  onClick: u,
                  children: o,
                })),
                (l[3] = m),
                (l[4] = u),
                (l[5] = p),
                (l[6] = o),
                (l[7] = i))
              : (i = l[7]),
            i
          )
        },
        U: function (e) {
          let t,
            o,
            i,
            c,
            l,
            m,
            u,
            p = (0, n.c)(18)
          ;(p[0] !== e
            ? (({ children: t, description: o, disabledReason: i, ...c } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = o),
              (p[3] = i),
              (p[4] = c))
            : ((t = p[1]), (o = p[2]), (i = p[3]), (c = p[4])),
            p[5] !== t || p[6] !== i
              ? ((l = null == i ? t : (0, a.jsxs)(a.Fragment, { children: [t, (0, a.jsx)("br", {}), i] })),
                (p[5] = t),
                (p[6] = i),
                (p[7] = l))
              : (l = p[7]))
          let h = null == i ? "trigger-overflows" : "always"
          return (
            p[8] !== t || p[9] !== o || p[10] !== i
              ? ((m = (0, a.jsx)(d, { description: o, disabledReason: i, children: t })),
                (p[8] = t),
                (p[9] = o),
                (p[10] = i),
                (p[11] = m))
              : (m = p[11]),
            p[12] !== i || p[13] !== c || p[14] !== l || p[15] !== h || p[16] !== m
              ? ((u = (0, a.jsx)(r.G.Item, {
                  ...c,
                  "aria-description": i,
                  LeftIcon: s.OHc,
                  tooltipText: l,
                  tooltipOpenWhen: h,
                  children: m,
                })),
                (p[12] = i),
                (p[13] = c),
                (p[14] = l),
                (p[15] = h),
                (p[16] = m),
                (p[17] = u))
              : (u = p[17]),
            u
          )
        },
      },
    )
  },
  Aoej(e, t, o) {
    var a = o("DBCl"),
      n = o("SPnB"),
      i = o("g2p6"),
      c = o("Zyn0"),
      r = o("X6Vn"),
      s = o("UxLW"),
      d = o("DIdv"),
      l = o("nlNF"),
      m = o("V1hw")
    o.d(
      t,
      {},
      {
        g: async function (e, t, u) {
          let p = e.get(l.x2),
            h = e.get(i.Sk),
            g = e.get(n.chatGptAuthenticatedAccountId$),
            f = e.get(n.chatGptAuthenticatedUserId$),
            x = t.payload
          if (
            null == g ||
            !e.get(n.f4) ||
            "library" !== t.source_type ||
            !("library_item_id" in x) ||
            "native_shared" === (0, c.j)(x) ||
            "shared" === x.access_kind
          )
            return
          let w = (0, m.T)(x)
          if (null == w && "native" !== (0, c.j)(x)) return
          let M =
            null == w && "image" === (0, d.CR)(x) && (0, a.cb0)({ name: x.file_name, type: x.mime_type })
              ? await o.e(338281).then(o.bind(o, "CIm5"))
              : await Promise.all([
                  o.e(293648),
                  o.e(560170),
                  o.e(648165),
                  o.e(74692),
                  o.e(198336),
                  o.e(543449),
                  o.e(904485),
                  o.e(148321),
                  o.e(923712),
                  o.e(726441),
                  o.e(202026),
                  o.e(932210),
                  o.e(822019),
                  o.e(164460),
                  o.e(275425),
                  o.e(846754),
                  o.e(818557),
                  o.e(901175),
                  o.e(161049),
                  o.e(431137),
                  o.e(108823),
                  o.e(832348),
                  o.e(864380),
                  o.e(880356),
                  o.e(679632),
                  o.e(656640),
                  o.e(129203),
                  o.e(233814),
                  o.e(384218),
                  o.e(478806),
                  o.e(638132),
                  o.e(390941),
                  o.e(140959),
                  o.e(552666),
                  o.e(309485),
                  o.e(866709),
                  o.e(793430),
                  o.e(549505),
                  o.e(776931),
                  o.e(872923),
                  o.e(283497),
                  o.e(496120),
                  o.e(136167),
                  o.e(837359),
                  o.e(266409),
                  o.e(970448),
                  o.e(350772),
                  o.e(473403),
                  o.e(883186),
                  o.e(490915),
                  o.e(454431),
                  o.e(613953),
                  o.e(144988),
                  o.e(368411),
                  o.e(664556),
                  o.e(349675),
                  o.e(108676),
                  o.e(339554),
                  o.e(208942),
                  o.e(339467),
                  o.e(632285),
                  o.e(498983),
                  o.e(999152),
                  o.e(388023),
                  o.e(81327),
                  o.e(122962),
                ]).then(o.bind(o, "OTYU"))
          if (
            e.get(i.Sk) !== h ||
            e.get(n.chatGptAuthenticatedAccountId$) !== g ||
            e.get(n.chatGptAuthenticatedUserId$) !== f ||
            !e.get(n.f4) ||
            e.get(l.x2)?.key !== p?.key
          )
            return
          let v = {
            externalAccount: x.external_account,
            parentDirectoryId: x.parent_directory_id,
            fileExtension: x.file_extension,
            libraryArtifactType: x.library_artifact_type,
            originationThreadId: x.origination_thread_id,
            id: x.library_item_id,
            fileId: w ?? x.file_id,
            provider: (0, s.AG)(w) ?? void 0,
            sourceUrl: x.cloud_doc_url ?? void 0,
            gizmoId: x.gizmo_id,
            name: x.file_name,
            category: x.library_file_category,
            mimeType: x.mime_type ?? null,
            sizeBytes: x.file_size_bytes ?? null,
            modifiedAt: null == t.update_time ? null : new Date(1e3 * t.update_time).toISOString(),
          }
          "openChatGptSearchImagePreview" in M
            ? await M.openChatGptSearchImagePreview(e, v, u)
            : (0, r.qf)(e, M.ChatGptSearchFilePreview, {
                accountId: h,
                authenticatedAccountId: g,
                canFavorite: null == w && "chat_message_snapshot" !== x.library_artifact_type,
                file: v,
                userId: f,
              })
        },
      },
    )
  },
  WVWQ(e, t, o) {
    o.d(t, { j: () => b, I: () => v })
    var a = o("AGyq"),
      n = o("Qgfj"),
      i = o("CTWI")
    function c(e) {
      return { title: e.formatMessage(r.title), description: e.formatMessage(r.description) }
    }
    let r = (0, n.YK)({
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
    function d(e) {
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
    let l = (0, n.YK)({
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
        "codex.command.browser.bookmarkPage": {
          id: "codex.command.browser.bookmarkPage",
          defaultMessage: "Bookmark page",
          description: "Keyboard shortcut label for saving or editing a bookmark for the current in-app browser page",
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
      x = { ...f, "codex.command.importExternalAgent": p.title, "codex.command.personalitySettings": h.title },
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
      M = {
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
          "codex.commandDescription.browser.bookmarkPage": {
            id: "codex.commandDescription.browser.bookmarkPage",
            defaultMessage: "Save or edit the current browser page in bookmarks",
            description: "Description of the browser bookmark keyboard shortcut",
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
        "codex.commandDescription.importExternalAgent": p.description,
        "codex.commandDescription.personalitySettings": h.description,
      }
    function v(e, t, o = !1) {
      if ("openOrbit" === e.id) return s(t).title
      if ("focusPageBlockControls" === e.id) return d(t).title
      if ("openAvatarOverlay" === e.id && o) return t.formatMessage(g)
      if ("composer.captureAppshot" === e.id) return c(t).title
      if ("titleIntlId" in e) {
        var a
        let o
        return y(x, e.titleIntlId)
          ? t.formatMessage(x[e.titleIntlId], { dot: "dot" })
          : null == (o = u((a = e.id)) ? m[a] : null)
            ? ""
            : t.formatMessage(o.title)
      }
      return t.formatMessage(w[e.electron.menuTitleIntlId])
    }
    function b(e, t, o, n = !1) {
      var r
      let l
      if ("openOrbit" === e.id) return s(t)
      if ("focusPageBlockControls" === e.id) return d(t)
      if ("composer.captureAppshot" === e.id) return c(t)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            o?.title ??
            t.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
              description:
                "Command palette and shortcut settings title for switching between Chat and the previous content tab in full view or toggling workspace tab visibility in split view",
            }),
          description:
            o?.description ??
            t.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
              description:
                "Description for the command that switches between Chat and the previous content tab in full view or toggles workspace tab visibility in split view",
            }),
        }
      let p = (0, a.yF)(e)
          ? y(M, e.descriptionIntlId)
            ? t.formatMessage(M[e.descriptionIntlId], { appName: i.C, dot: "dot" })
            : null == (l = u((r = e.id)) ? m[r] : null)
              ? ""
              : t.formatMessage(l.description)
          : "",
        h = o?.title ?? v(e, t)
      return ("openAvatarOverlay" === e.id && n && (h = v(e, t, !0)), { title: h, description: o?.description ?? p })
    }
    function y(e, t) {
      return Object.hasOwn(e, t)
    }
  },
  vnLQ(e, t, o) {
    var a = o("QosV"),
      n = o("SZCv"),
      i = o.n(n),
      c = o("zTeN"),
      r = o("DBCl"),
      s = o("t162"),
      d = o("tl5a"),
      l = o("AqHb"),
      m = o("UN1G"),
      u = o("L2Eu"),
      p = o("JQtI"),
      h = o("gdZA"),
      g = o("TYK1"),
      f = o("kx7U"),
      x = o("OWtl"),
      w = o("V3rO"),
      M = o("kfGJ"),
      v = o("r6TF"),
      b = o("d6Ff"),
      y = o("QGyr"),
      S = o("TWTg"),
      D = o("fmZS")
    let C = (0, c.un)(x.u, ({ get: e }) =>
        (e(f.u8) ?? [])
          .filter(({ hostId: t }) => "connected" === e(d.y2, t))
          .map(({ hostId: e }) => e)
          .sort((e, t) => e.localeCompare(t)),
      ),
      T = (0, c.un)(x.u, ({ get: e }) => {
        let t = (0, v.ZI)(e, e(v.Tv))
        return {
          cloudTasks: [...(e(v.Ei).data ?? []), ...t.flatMap((e) => ("remote" === e.kind ? [e.task] : []))],
          conversationsMeta: t.flatMap((e) => ("local" === e.kind && null != e.summary ? [e.summary] : [])),
          hostIds: new Set([M.fI, r.iwv, ...e(C)]),
          projectLabelByThreadKey: e(y.o4),
        }
      })
    function k(e) {
      switch (e.kind) {
        case "local":
          return e.hostId === M.fI ? e.threadKey : `${e.threadKey}:${e.hostId}`
        case "remote":
          return e.threadKey
        case "chatgpt":
          return `chatgpt:${e.conversationId}`
        case "dot":
          return `dot:${e.item.id}`
      }
    }
    function P(e) {
      let t = (0, r.JXB)(e.threadId)
      return {
        kind: "local",
        threadKey: (0, b.z3)(t),
        conversationId: t,
        hostId: e.hostId,
        threadId: e.threadId,
        title: e.title,
        searchTitle: e.title,
        cwd: e.cwd,
        branch: "",
        hasUnreadTurn: !1,
        isAeonThread: (0, p.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.updatedAt,
        searchPreview: e.searchPreview,
      }
    }
    function _(e) {
      switch (e.kind) {
        case "local":
          return (0, D.Q7)(e.hostId, e.conversationId)
        case "remote":
          return e.threadKey
      }
    }
    function A(e) {
      let t = (0, m.WE)(e),
        o = e.normalize("NFC"),
        a = o === e ? t : (0, m.WE)(o)
      return {
        score: t,
        scoreTitle: (e, o = e.searchTitle) => ("local" === e.kind && e.title ? a(o.normalize("NFC")) : t(o)),
      }
    }
    function I(e, { score: t, scoreTitle: o }, a) {
      let n = o(e)
      if (n > 0) return { fieldPriority: 0, score: n, value: e.searchTitle }
      let i = (function (e, t) {
        if (null == e) return null
        switch (e.kind) {
          case "contentMatch":
            return N(e.snippet, t, 1)
          case "branchMatch":
            return N(e.branch, t, 2)
        }
      })(e.searchPreview, t)
      if (null != i) return i
      switch (e.kind) {
        case "local":
          return (
            (a.length >= 8 && e.threadId.toLowerCase().startsWith(a) ? N(e.threadId, t, 0) : null) ??
            N(e.branch, t, 2) ??
            N(e.projectLabel ?? "", t, 3) ??
            N(e.cwd, t, 3)
          )
        case "remote":
          return N(e.projectLabel ?? "", t, 3) ?? N(e.environmentLabel, t, 3)
        case "dot":
          return { fieldPriority: 1, score: 0, value: null }
        case "chatgpt":
          return null
      }
    }
    function j(e, t) {
      let o = e.match.fieldPriority - t.match.fieldPriority
      if (0 !== o) return o
      let a = t.match.score - e.match.score
      return 0 !== a ? a : t.result.updatedAt - e.result.updatedAt
    }
    function N(e, t, o) {
      let a = t(e)
      return 0 === a ? null : { fieldPriority: o, score: a, value: e }
    }
    function R(e, t) {
      let o = [],
        a = new Map()
      for (let n of [...e, ...t]) {
        let e = k(n),
          t = a.get(e)
        if (null == t) {
          ;(a.set(e, o.length), o.push(n))
          continue
        }
        let i = o[t]
        null == i.searchPreview && null != n.searchPreview && (o[t] = { ...i, searchPreview: n.searchPreview })
      }
      return o
    }
    function E(e, t, o) {
      if ("durable" !== (0, l._)(t)) return !1
      let { data: a } = e(g.cloudAeonByThreadId$, (0, r.JXB)(o))
      return a?.active_root_thread_id != null && a.active_root_thread_id !== o
    }
    o.d(
      t,
      {},
      {
        EI: function ({ loadedChatSearchResults: e, chatGptResults: t, isChatSelectable: o, limit: a }) {
          return R([...e, ...t], [])
            .filter(o)
            .sort((e, t) => t.updatedAt - e.updatedAt)
            .slice(0, a)
        },
        LU: k,
        MQ: function (e, t, o, a) {
          if (!t) return null
          let n = A(t)
          return n.scoreTitle(e, o) > 0 || n.score(a) > 0 ? null : (I(e, n, t.toLowerCase())?.value ?? null)
        },
        N6: function ({
          asyncResults: e,
          chatGptResults: t = [],
          isChatSelectable: o,
          loadedChatSearchResults: a,
          limit: n,
          query: i,
        }) {
          let c = e.map(P),
            r = R([...a, ...t], c)
          return (function (e, t, o) {
            if (o <= 0) return []
            let a = t.trim()
            if (0 === a.length) return []
            let n = [],
              i = A(a),
              c = a.toLowerCase()
            for (let t of e) {
              let e = I(t, i, c)
              if (null == e) continue
              let a = { result: t, match: e }
              if (n.length < o) {
                n.push(a)
                continue
              }
              let r = (function (e) {
                let t = 0
                for (let o = 1; o < e.length; o += 1) 0 > j(e[t], e[o]) && (t = o)
                return t
              })(n)
              0 > j(a, n[r]) && (n[r] = a)
            }
            return n.sort(j).map(({ result: e }) => e)
          })(null == o ? r : r.filter(o), i, n)
        },
        T0: function (e, t) {
          var o
          let n,
            d = (0, a.c)(3),
            l = (0, c.Ul)(void 0 === t || t ? T : void 0)
          d[0] !== e || d[1] !== l
            ? ((n =
                null == l
                  ? void 0
                  : ((o = { ...l, conversationsMeta: [...(e ?? []), ...l.conversationsMeta] }),
                    (0, c.un)(
                      x.u,
                      ({ get: e }) =>
                        (function ({
                          cloudTasks: e,
                          conversationsMeta: t,
                          getSearchTitle: o,
                          hostIds: a,
                          projectLabelByThreadKey: n,
                        }) {
                          return [
                            ...t
                              .filter(
                                (e) =>
                                  a.has(e.hostId ?? M.fI) &&
                                  (null == e.source || "string" == typeof e.source || !("subAgent" in e.source)),
                              )
                              .map((e) => {
                                let t = e.cwd ?? "",
                                  a = o(e),
                                  i = null == a || e.title?.trim() ? a : ((0, s.uw)(a, 60) ?? ""),
                                  c = (a ?? t) || e.conversationId,
                                  d = (0, r.JXB)(e.conversationId),
                                  l = (0, b.z3)(d)
                                return {
                                  kind: "local",
                                  threadKey: l,
                                  conversationId: d,
                                  hostId: e.hostId ?? M.fI,
                                  threadId: e.conversationId,
                                  title: i,
                                  searchTitle: c,
                                  cwd: t,
                                  branch: e.gitInfo?.branch ?? "",
                                  projectLabel: n?.get(l),
                                  hasUnreadTurn: e.hasUnreadTurn,
                                  isAeonThread: (0, p.N)(e.threadStartKind, e.threadSource),
                                  updatedAt: e.recencyAt ?? e.updatedAt,
                                  searchPreview: null,
                                }
                              }),
                            ...(e?.map((e) => {
                              let t = (0, b.Wz)(e.id),
                                o = (0, u.SX)(e.title ?? "") || null
                              return {
                                kind: "remote",
                                threadKey: t,
                                taskId: e.id,
                                title: o,
                                searchTitle: e.title ?? e.id,
                                environmentLabel: e.task_status_display?.environment_label ?? "",
                                projectLabel: n?.get(t),
                                hasUnreadTurn: e.has_unread_turn,
                                updatedAt: (e.updated_at ?? e.created_at ?? 0) * 1e3,
                                searchPreview: null,
                              }
                            }) ?? []),
                          ]
                        })({ ...o, getSearchTitle: (t) => (0, S.D)(e, t) })
                          .filter((t) => "local" !== t.kind || !t.isAeonThread || !E(e, t.hostId, t.threadId))
                          .map((t) => {
                            let o =
                              "local" === t.kind ? e(h.$P, { hostId: t.hostId, threadId: t.conversationId }) : null
                            return null == o ? t : { ...t, title: o, searchTitle: o }
                          }),
                      { isEqual: i() },
                    ))),
              (d[0] = e),
              (d[1] = l),
              (d[2] = n))
            : (n = d[2])
          let m = n
          return (0, c.Ul)(m) ?? []
        },
        er: C,
        hv: function ({ excludedThreadKeys: e, loadedChatSearchResults: t, limit: o, pinnedThreadIds: a }) {
          if (o <= 0) return { pinnedResults: [], recentResults: [] }
          let n = R(t, []).filter((t) => !e?.has(t.threadKey)),
            i = new Map()
          for (let e of n) {
            let t = (0, b.PK)(e.threadKey)
            if (null != t) {
              let o = i.get(t)
              null == o ? i.set(t, [e]) : o.push(e)
            }
          }
          let c = new Set(a),
            r = a.flatMap((e) => i.get(e) ?? []),
            s = n
              .filter((e) => {
                let t = (0, b.PK)(e.threadKey)
                return null == t || !c.has(t)
              })
              .sort((e, t) => t.updatedAt - e.updatedAt)
          return { pinnedResults: r.slice(0, o), recentResults: s.slice(0, Math.max(o - r.length, 0)) }
        },
        oB: function (e, t) {
          if ("chatgpt" === e.kind) return null
          if (null != e.searchPreview || "local" !== e.kind) return e.searchPreview
          let o = t.trim()
          if (0 === o.length) return null
          let { score: a, scoreTitle: n } = A(o)
          return n(e) > 0 || 0 === a(e.branch) ? null : { kind: "branchMatch", branch: e.branch }
        },
        qw: function ({
          currentThreadKey: e,
          loadedChatSearchResults: t,
          limit: o,
          recentThreadKeys: a,
          unreadThreadKeys: n,
          visibleThreadKeys: i,
        }) {
          if (o <= 0) return []
          let c = R(t, []),
            s = new Map(),
            d = new Map()
          for (let e of c) {
            ;(s.set(e.threadKey, e), s.set(_(e), e))
            let t = d.get(e.threadKey)
            if ((null == t ? d.set(e.threadKey, [e]) : t.push(e), "local" === e.kind)) {
              let t = (0, w.Uw)(e.conversationId)
              ;(0, r.L$F)(t) && s.set((0, b.z3)(t), e)
            }
          }
          let l = [],
            m = new Set(),
            u = (t) => {
              if (null == t) return
              if (null != i && !i.has(t.threadKey)) {
                if ("local" !== t.kind) return
                let e = (0, w.Uw)(t.conversationId)
                if (!(0, r.L$F)(e) || !i.has((0, b.z3)(e))) return
              }
              let a = _(t)
              a === e || m.has(a) || l.length === o || (m.add(a), l.push(t))
            },
            p = (e) => {
              u(s.get(e))
            }
          for (let e of n) {
            let t = s.get(e)
            null != t &&
              d.get(t.threadKey)?.forEach((e) => {
                u({ ...e, hasUnreadTurn: !0 })
              })
          }
          for (let e of a) p(e)
          for (let e of c.sort((e, t) => t.updatedAt - e.updatedAt)) u(e)
          return l
        },
        xH: function (e) {
          return (0, c.un)(
            x.u,
            ({ get: t }) =>
              e.filter((e) => !(0, p.N)(e.threadStartKind, e.threadSource) || !E(t, e.hostId, e.threadId)),
            { isEqual: i() },
          )
        },
      },
    )
  },
  MrJD(e, t, o) {
    o.d(t, { UnifiedSearchDialog: () => tY })
    var a = o("ABep"),
      n = o("QosV"),
      i = o("cH2O"),
      c = o("CLRU"),
      r = o("AWRU"),
      s = o("MwZW"),
      d = o("IJRm"),
      l = o("rLkR"),
      m = o("bqSP"),
      u = o("BhAX"),
      p = o("PTkQ"),
      h = o("uZvu"),
      g = o("lbFQ"),
      f = o("Cj22"),
      x = o("mGjP"),
      w = o("nTpN"),
      M = o("Ttg3"),
      v = o("hlqL"),
      b = o("syaX"),
      y = o("Mf8R"),
      S = o("UJHK"),
      D = o("Jmc7"),
      C = o("wepB"),
      T = o("yfrR"),
      k = o("on57"),
      P = o("qhiJ"),
      _ = o("AGyq"),
      A = o("SZCv"),
      I = o.n(A),
      j = o("NFGs"),
      N = o.n(j),
      R = o("zTeN"),
      E = o("zd8w"),
      F = o("v7qY")
    o("A3F0")
    var O = o("Wf1j"),
      B = o("oyxz"),
      G = o("Qgfj"),
      L = o("HZfM"),
      W = o("ChYf"),
      q = o("tl5a"),
      U = o("QcW8"),
      K = o("gbrq"),
      $ = o("eFn4"),
      V = o("sSHx"),
      z = o("QLtS"),
      H = o("kZDS"),
      Z = o("nRNm"),
      Q = o("UN1G"),
      Y = o("Itrj"),
      J = o("HOLv"),
      X = o("bVeK"),
      ee = o("wZQ4"),
      et = o("evwP"),
      eo = o("Bbed"),
      ea = o("zkPp"),
      en = o("RNul"),
      ei = o("zLIa"),
      ec = o("JM0a"),
      er = o("ubby"),
      es = o("qGiC"),
      ed = o("OFUt"),
      el = o("mS6z"),
      em = o("AXK1"),
      eu = o("KhRo"),
      ep = o("e1xH"),
      eh = o("QBk8"),
      eg = o("DBCl"),
      ef = o("SPnB"),
      ex = o("Ghh3"),
      ew = o("mCnp"),
      eM = o("Aoej"),
      ev = o("CoxM"),
      eb = o("V1hw"),
      ey = o("Ypxw"),
      eS = o("ANKV"),
      eD = o("xA4p"),
      eC = o("wQlV"),
      eT = o("lFyd"),
      ek = o("Ot7V"),
      eP = o("SGsN"),
      e_ = o("uNsz"),
      eA = o("tl2n"),
      eI = o("TCFx"),
      ej = o("ZpLy"),
      eN = o("jrp4"),
      eR = o("nlNF"),
      eE = o("yGJW"),
      eF = o("Oj9r"),
      eO = o("khOd"),
      eB = o("soaw"),
      eG = o("PVyj"),
      eL = o("BkbV"),
      eW = o("tUjg"),
      eq = o("idI8"),
      eU = o("BIx6"),
      eK = o("uqg3"),
      e$ = o("ZsYZ"),
      eV = o("pyoT"),
      ez = o("M7Vo"),
      eH = o("NnV7"),
      eZ = o("ZPSN")
    function eQ(e) {
      let t,
        o = (0, n.c)(4),
        { close: i, searchEventLogger: c } = e,
        r = (0, R.Ul)(ep.pagesEnabled$)
      return (
        o[0] !== i || o[1] !== r || o[2] !== c
          ? ((t = r ? (0, a.jsx)(eY, { close: i, searchEventLogger: c }) : null),
            (o[0] = i),
            (o[1] = r),
            (o[2] = c),
            (o[3] = t))
          : (t = o[3]),
        t
      )
    }
    function eY(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p,
        h = (0, n.c)(64),
        { close: g, searchEventLogger: f } = e,
        x = (0, R.gh)(eF.GD),
        w = (0, O.A)(),
        M = (0, eB.a)(),
        v = (0, L.Zp)(),
        b = (0, L.zy)(),
        y = (0, P.wo)(e3),
        S = (0, R.Ul)(eS.YC),
        D = "pages" === S ? "pages" : "all",
        C = "root" === S,
        [T, k] = (0, E.useState)(null),
        _ = T?.query === y ? T.limit : 20
      C && (_ = 5)
      let A = (0, R.Ul)(eV.spaceAccountId$),
        I = (0, R.Ul)(ef.chatGptAuthenticatedUserId$)
      h[0] !== A || h[1] !== I ? ((t = { accountId: A, userId: I }), (h[0] = A), (h[1] = I), (h[2] = t)) : (t = h[2])
      let j = (0, R._U)(eG.aP, t),
        N = (0, R.Ul)(eZ.Wr),
        F = (0, R.Ul)(eO.GB),
        G = (0, R.Ul)(F ? e$.IF : null),
        W = (0, R.Ul)(eA.$7),
        q = (0, R.Ul)(ep.gG),
        U = (0, R.Ul)(q && y.length > 0 ? eU.Y : null),
        K = q && y.length > 0
      h[3] !== y || h[4] !== f || h[5] !== D || h[6] !== K
        ? ((o = { enabled: K, eventLogger: f, limit: 40, search: y, searchFilter: D, searchScope: "palette" }),
          (h[3] = y),
          (h[4] = f),
          (h[5] = D),
          (h[6] = K),
          (h[7] = o))
        : (o = h[7])
      let $ = (0, ew.P)(o),
        V = $.contentSearchPending || $.isFetchingNextPage,
        z = (0, Q.WE)(y),
        Z = U?.map((e) => ({ page: e, score: z(e.title.trim() || w.formatMessage((0, eH._Y)(e.documentType))) }))
          .filter(e4)
          .sort(e2)
          .map(e0)
      if (0 === y.length)
        i = F
          ? G?.filter((e) => {
              let { file: t } = e
              return "pages" !== S || null == t
            })
              .slice(0, 20)
              .flatMap(e1)
          : N?.slice(0, 20).map(eX)
      else {
        i = []
        let e = new Set()
        for (let t of $.searchItems)
          if ("conversation" !== t.source_type && "dot_messages" !== t.source_type)
            if ("space_page" === t.payload.kind) {
              if (e.has(t.payload.page_id)) continue
              ;(e.add(t.payload.page_id),
                i.push({
                  kind: "page",
                  searchItem: t,
                  page: { pageId: t.payload.page_id, title: t.title, searchPayload: t.payload },
                }))
            } else {
              let e = (0, ey.W)(t, y, "", W)
              null != e && i.push({ kind: "search", result: e })
            }
        for (let t of Z ?? []) e.has(t.pageId) || i.push({ kind: "page", page: t })
      }
      j.length > 0 && (i = i?.filter((e) => "page" !== e.kind || !j.some((t) => t.pageIds.has(e.page.pageId))))
      let J = i?.slice(0, _),
        { groupRef: ee, prepareSelection: et } = (0, eC.K)(y, J?.length ?? 0),
        eo = y.length > 0 && ((i?.length ?? 0) > _ || $.hasNextPage),
        ea = !!J?.length
      if ((0 === y.length && !ea) || (y.length > 0 && !q)) return null
      let en = !ea && "error" === $.nextSpaceSourceStatus && $.hasNextPage,
        ei = $.contentSearchError || en
      if (!ea && !V && !ei) {
        let e
        if (C) return null
        if ($.hasNextPage && "ok" === $.nextSpaceSourceStatus) {
          let e, t, o
          return (
            h[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, eD._X)("page:continue")), (h[8] = e))
              : (e = h[8]),
            h[9] !== w
              ? ((t = w.formatMessage({
                  id: "codex.space.page.commandMenu.continueSearch",
                  defaultMessage: "Continue searching",
                  description: "Action to search the next batch after finding no Space matches so far",
                })),
                (h[9] = w),
                (h[10] = t))
              : (t = h[10]),
            h[11] !== $.loadNextPage || h[12] !== t
              ? ((o = (0, a.jsx)(Y.y, { value: e, title: t, onSelect: $.loadNextPage })),
                (h[11] = $.loadNextPage),
                (h[12] = t),
                (h[13] = o))
              : (o = h[13]),
            o
          )
        }
        return (
          h[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(P.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: (0, a.jsx)(B.A, {
                  id: "codex.commandMenu.noResults",
                  defaultMessage: "No matches",
                  description: "Shown when no commands or workspaces match in the command menu",
                }),
              })),
              (h[14] = e))
            : (e = h[14]),
          e
        )
      }
      h[15] !== y || h[16] !== f || h[17] !== D || h[18] !== $.localSearchItems || h[19] !== $.queryIdentity
        ? ((c = (e, t) => {
            null != e &&
              f?.logResultOpen({
                item: e,
                globalIndex: t,
                queryIdentity: $.queryIdentity,
                isLocalResult: $.localSearchItems.includes(e),
                openInNewTab: !1,
                search: y,
                searchFilter: D,
                searchScope: "all",
              })
          }),
          (h[15] = y),
          (h[16] = f),
          (h[17] = D),
          (h[18] = $.localSearchItems),
          (h[19] = $.queryIdentity),
          (h[20] = c))
        : (c = h[20])
      let ec = c
      h[21] !== g || h[22] !== M || h[23] !== b || h[24] !== v || h[25] !== x
        ? ((r = (e) => {
            let t = () => {
              ;(0, eK.openSpacePageSidePanelTab)(x, e.pageId, { title: e.title, openSource: "discovery" }).opened && g()
            }
            if (null == e.searchPayload) return void t()
            let o = x.get(eV.spaceAccountId$),
              n = x.get(ef.chatGptAuthenticatedAccountId$),
              i = x.get(ef.chatGptAuthenticatedUserId$),
              c = x.get(eR.x2)?.key,
              r = () =>
                x.get(eV.spaceAccountId$) === o &&
                x.get(ef.chatGptAuthenticatedAccountId$) === n &&
                x.get(ef.chatGptAuthenticatedUserId$) === i &&
                x.get(ep.gG) &&
                M() &&
                x.get(eR.x2)?.key === c
            ;(0, eq.openGlobalSearchSpacePage)(x, v, b, e.searchPayload, r, t).catch(() => {
              r() &&
                x
                  .get(eP.Id)
                  .danger((0, a.jsx)(B.A, { ...eW.h.pageOpenFailed }), {
                    errorAnalytics: { toastId: "codex.chatGptSearch.pageOpenFailed" },
                  })
            })
          }),
          (h[21] = g),
          (h[22] = M),
          (h[23] = b),
          (h[24] = v),
          (h[25] = x),
          (h[26] = r))
        : (r = h[26])
      let er = r
      h[27] !== g || h[28] !== v || h[29] !== x || h[30] !== $.localSearchItems
        ? ((s = (e) => {
            let t = e.item.rawItem
            ;("space" !== t.source_type && (0, ev._h)(x, t, !0, $.localSearchItems.includes(t)),
              g(),
              null == e.href || ("library_item_id" in t.payload && null != (0, eb.T)(t.payload))
                ? (0, eM.g)(x, t, v).catch(() => {
                    x.get(eP.Id).danger(
                      (0, a.jsx)(B.A, {
                        id: "codex.chatGptSearch.previewFailed",
                        defaultMessage: "Unable to open file preview",
                        description:
                          "Toast shown when a file preview cannot be loaded after selecting a ChatGPT search result",
                      }),
                      { errorAnalytics: { toastId: "codex.chatGptSearch.previewFailed" } },
                    )
                  })
                : /^https?:\/\//i.test(e.href)
                  ? (0, ek.E0)({ href: e.href, initiator: "mcp_app_resource" })
                  : v(e.href))
          }),
          (h[27] = g),
          (h[28] = v),
          (h[29] = x),
          (h[30] = $.localSearchItems),
          (h[31] = s))
        : (s = h[31])
      let es = s,
        ed = P.uB,
        el = V && !ea,
        em = V || void 0
      ;(h[32] !== ea || h[33] !== S || h[34] !== V
        ? ((d = ea
            ? (0, a.jsx)(H.z, {
                loading: V,
                children:
                  "pages" === S
                    ? (0, a.jsx)(B.A, {
                        id: "codex.space.page.commandMenu.heading",
                        defaultMessage: "Pages",
                        description: "Section for recent or matching Pages in the command menu",
                      })
                    : (0, a.jsx)(B.A, {
                        id: "codex.space.commandMenu.heading",
                        defaultMessage: "Space",
                        description: "Section for recent or matching files and Pages in the command menu",
                      }),
              })
            : void 0),
          (h[32] = ea),
          (h[33] = S),
          (h[34] = V),
          (h[35] = d))
        : (d = h[35]),
        h[36] !== V
          ? ((l = V
              ? (0, a.jsx)("span", {
                  className: "sr-only",
                  role: "status",
                  children: (0, a.jsx)(B.A, {
                    id: "codex.space.page.commandMenu.loading",
                    defaultMessage: "Searching Space…",
                    description:
                      "Accessible loading status while the command menu searches Space (Pages, files, folders, projects, and sites); visually only a spinner appears beside the section title",
                  }),
                })
              : null),
            (h[36] = V),
            (h[37] = l))
          : (l = h[37]))
      let eu = J?.map((e, t) => {
        if ("page" === e.kind) {
          let { page: o } = e
          return (0, a.jsx)(
            e5,
            {
              page: o,
              children: (n) => {
                let { icon: i, title: c } = n
                return (0, a.jsx)(Y.y, {
                  value: (0, eD._X)(`page:${o.pageId}`),
                  "aria-label": c,
                  title: c,
                  titleTooltipContent: c,
                  leftAccessory: i,
                  onSelect: () => {
                    ;(ec(e.searchItem, t),
                      (0, eE.yy)(x, eh.CodexSpacesPageOpenRequested, {
                        referrer: eh.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_COMMAND_PALETTE,
                      }),
                      er(o))
                  },
                })
              },
            },
            o.pageId,
          )
        }
        if ("file" === e.kind || "site" === e.kind) {
          let { file: t } = e,
            o = () => {
              ;(g(),
                "site" === e.kind
                  ? (0, ek.E0)({ href: e.href, initiator: "sites_library" })
                  : v(`/space/file/${encodeURIComponent(t.node.id)}`),
                ex.Request.safePost("/files/library/files/{library_file_id}/opened", {
                  parameters: { path: { library_file_id: t.node.id } },
                }).catch(eJ))
            }
          return "site" === e.kind
            ? (0, a.jsx)(e6, { file: t, onSelect: o }, t.node.id)
            : (0, a.jsx)(
                Y.y,
                {
                  value: (0, eD._X)(`file:${t.node.id}`),
                  title: t.node.name,
                  leftAccessory: (0, a.jsx)(ej.p, {
                    fileName: t.node.name,
                    fileExtension: t.node.file_extension,
                    libraryArtifactType: t.node.library_artifact_type,
                    mimeType: t.node.mime_type ?? void 0,
                    provider: (0, eI.oh)(t.node.id),
                    style: "message-inline",
                  }),
                  onSelect: o,
                },
                t.node.id,
              )
        }
        let { result: o } = e,
          { item: n } = o,
          i = (0, a.jsx)(X.Z1A, {})
        return (
          "library_file" === n.kind
            ? (i = (0, a.jsx)(ej.p, {
                fileName: n.fileName,
                fileExtension: n.fileExtension,
                libraryArtifactType: n.libraryArtifactType,
                mimeType: n.mimeType ?? void 0,
                provider: n.libraryProvider,
                style: "message-inline",
              }))
            : "site" === n.kind
              ? (i = (0, a.jsx)(X.q_r, {}))
              : ("library_folder" === n.kind || "project" === n.kind) && (i = (0, a.jsx)(X.efV, {})),
          (0, a.jsx)(
            Y.y,
            {
              value: (0, eD._X)(`space:${n.rawItem.source_key}:${n.rawItem.id}`),
              title: n.title,
              leftAccessory: i,
              onSelect: () => {
                ;(ec(n.rawItem, t), es(o))
              },
            },
            `${n.rawItem.source_key}:${n.rawItem.id}`,
          )
        )
      })
      return (
        h[38] !== w ||
        h[39] !== y.length ||
        h[40] !== en ||
        h[41] !== ei ||
        h[42] !== $.loadNextPage ||
        h[43] !== $.retryContentSearch
          ? ((m =
              y.length > 0 && ei
                ? (0, a.jsx)(Y.y, {
                    value: (0, eD._X)("page:retry"),
                    onSelect: en ? $.loadNextPage : $.retryContentSearch,
                    title: w.formatMessage({
                      id: "codex.space.page.commandMenu.error",
                      defaultMessage: "Could not search Space",
                      description:
                        "Error state when searching Space (Pages, files, folders, projects, and sites) fails in the command menu",
                    }),
                    description: w.formatMessage({
                      id: "codex.space.page.commandMenu.retry",
                      defaultMessage: "Retry",
                      description:
                        "Action on a command-menu row that retries a failed Space search without closing the menu",
                    }),
                  })
                : null),
            (h[38] = w),
            (h[39] = y.length),
            (h[40] = en),
            (h[41] = ei),
            (h[42] = $.loadNextPage),
            (h[43] = $.retryContentSearch),
            (h[44] = m))
          : (m = h[44]),
        h[45] !== eo ||
        h[46] !== ea ||
        h[47] !== C ||
        h[48] !== _ ||
        h[49] !== et ||
        h[50] !== y ||
        h[51] !== i ||
        h[52] !== $
          ? ((u =
              ea && eo && !C
                ? (0, a.jsx)(eT.X, {
                    section: "pages",
                    disabled: (i?.length ?? 0) <= _ && $.isFetchingNextPage,
                    onSelect: () => {
                      ;(et(), k({ query: y, limit: _ + 5 }), (i?.length ?? 0) <= _ + 5 && $.loadNextPage())
                    },
                  })
                : null),
            (h[45] = eo),
            (h[46] = ea),
            (h[47] = C),
            (h[48] = _),
            (h[49] = et),
            (h[50] = y),
            (h[51] = i),
            (h[52] = $),
            (h[53] = u))
          : (u = h[53]),
        h[54] !== ee ||
        h[55] !== em ||
        h[56] !== d ||
        h[57] !== l ||
        h[58] !== eu ||
        h[59] !== m ||
        h[60] !== u ||
        h[61] !== ed.Group ||
        h[62] !== el
          ? ((p = (0, a.jsxs)(ed.Group, {
              ref: ee,
              className: "relative flex flex-col gap-1 select-none",
              forceMount: el,
              "data-command-menu-loading": em,
              "data-command-menu-search-section": "pages",
              heading: d,
              children: [l, eu, m, u],
            })),
            (h[54] = ee),
            (h[55] = em),
            (h[56] = d),
            (h[57] = l),
            (h[58] = eu),
            (h[59] = m),
            (h[60] = u),
            (h[61] = ed.Group),
            (h[62] = el),
            (h[63] = p))
          : (p = h[63]),
        p
      )
    }
    function eJ() {}
    function eX(e) {
      return { kind: "page", page: e }
    }
    function e1(e) {
      let { id: t, file: o } = e
      if (null == o) return [{ kind: "page", page: { pageId: t, title: "" } }]
      if ((0, e_.K$)(o)) {
        let e = o.node.site_metadata?.live_url
        return e && (0, eg.q$v)(e) ? [{ kind: "site", file: o, href: e }] : []
      }
      return [{ kind: "file", file: o }]
    }
    function e0(e) {
      let { page: t } = e
      return t
    }
    function e2(e, t) {
      return t.score - e.score
    }
    function e4(e) {
      let { score: t } = e
      return t > 0
    }
    function e3(e) {
      return e.search.trim()
    }
    function e6(e) {
      let t,
        o,
        i,
        c = (0, n.c)(7),
        { file: r, onSelect: s } = e,
        d = (0, R._U)(eN.g, r),
        l = `site:${r.node.id}`
      return (
        c[0] !== l ? ((t = (0, eD._X)(l)), (c[0] = l), (c[1] = t)) : (t = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, a.jsx)(X.q_r, {})), (c[2] = o)) : (o = c[2]),
        c[3] !== s || c[4] !== t || c[5] !== d
          ? ((i = (0, a.jsx)(Y.y, { value: t, title: d, leftAccessory: o, onSelect: s })),
            (c[3] = s),
            (c[4] = t),
            (c[5] = d),
            (c[6] = i))
          : (i = c[6]),
        i
      )
    }
    function e5(e) {
      let t,
        o,
        i = (0, n.c)(12),
        { page: c, children: r } = e,
        s = (0, O.A)(),
        d = (0, R._U)(eL.j, c.pageId),
        l = d?.document_type ?? c.documentType,
        m = d?.namespace
      i[0] !== l || i[1] !== s || i[2] !== d?.title || i[3] !== c.title
        ? ((t = (d?.title ?? c.title).trim() || s.formatMessage((0, eH._Y)(l))),
          (i[0] = l),
          (i[1] = s),
          (i[2] = d?.title),
          (i[3] = c.title),
          (i[4] = t))
        : (t = i[4])
      let u = d?.symbol
      return (
        i[5] !== r || i[6] !== l || i[7] !== c.pageId || i[8] !== m || i[9] !== t || i[10] !== u
          ? ((o = (0, a.jsx)(ez.s, {
              pageId: c.pageId,
              documentType: l,
              namespace: m,
              title: t,
              symbol: u,
              children: r,
            })),
            (i[5] = r),
            (i[6] = l),
            (i[7] = c.pageId),
            (i[8] = m),
            (i[9] = t),
            (i[10] = u),
            (i[11] = o))
          : (o = i[11]),
        o
      )
    }
    var e8 = o("mSaF"),
      e9 = o("GaA7"),
      e7 = o("fnPc"),
      te = o("kfGJ"),
      tt = o("KEws"),
      to = o("pasN"),
      ta = o("hZax"),
      tn = o("XXJV"),
      ti = o("GEsy"),
      tc = o("Bc5r"),
      tr = o("jDom"),
      ts = o("C2qB"),
      td = o("S99C"),
      tl = o("WVWQ"),
      tm = o("R7kA"),
      tu = o("q3HK")
    function tp(e) {
      if ("F6" !== e.key || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.nativeEvent.isComposing)
        return !1
      let t = e.currentTarget.closest("[cmdk-root]:has([cmdk-input])"),
        o = t?.querySelector("[cmdk-input]"),
        a =
          e.currentTarget === o
            ? t?.querySelector(
                '[data-search-options] :is(input, button, select, textarea, a[href], [tabindex="0"]):not([disabled]):not([tabindex="-1"])',
              )
            : o
      return null != a && (e.preventDefault(), a.focus(), !0)
    }
    var th = o("BrP7")
    function tg(e) {
      let t,
        o,
        i,
        c,
        r,
        s = (0, n.c)(15),
        { controls: d, mode: l, modes: m, onSelect: u } = e,
        p = (0, O.A)()
      return (
        s[0] !== p
          ? ((t = p.formatMessage({
              id: "codex.commandMenu.searchScopes",
              defaultMessage: "Search in",
              description: "Accessible label for the tabs that select what the search window searches",
            })),
            (s[0] = p),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== m ? ((o = m.map(tf)), (s[2] = m), (s[3] = o)) : (o = s[3]),
        s[4] !== l || s[5] !== u || s[6] !== t || s[7] !== o
          ? ((i = (0, a.jsx)(th.t, {
              ariaLabel: t,
              className: "shrink-0",
              onSelect: u,
              selectedKey: l,
              tabs: o,
              variant: "search",
            })),
            (s[4] = l),
            (s[5] = u),
            (s[6] = t),
            (s[7] = o),
            (s[8] = i))
          : (i = s[8]),
        s[9] !== d || s[10] !== p
          ? ((c =
              null == d
                ? null
                : (0, a.jsx)("div", {
                    className: "ms-auto flex min-w-0 shrink-0 items-center justify-end gap-2",
                    "data-search-options": !0,
                    role: "toolbar",
                    tabIndex: -1,
                    "aria-label": p.formatMessage({
                      id: "codex.commandMenu.searchOptions",
                      defaultMessage: "Search options",
                      description: "Accessible label for options that apply to the selected search tab",
                    }),
                    onKeyDown: tp,
                    children: d,
                  })),
            (s[9] = d),
            (s[10] = p),
            (s[11] = c))
          : (c = s[11]),
        s[12] !== i || s[13] !== c
          ? ((r = (0, a.jsxs)("div", {
              className:
                "flex min-w-0 shrink-0 items-center gap-2 overflow-x-auto border-t border-default py-1 pe-2 select-none",
              children: [i, c],
            })),
            (s[12] = i),
            (s[13] = c),
            (s[14] = r))
          : (r = s[14]),
        r
      )
    }
    function tf(e) {
      return { key: e, name: (0, a.jsx)(B.A, { ...tx[e] }) }
    }
    let tx = (0, G.YK)({
      root: {
        id: "codex.commandMenu.scope.everywhere",
        defaultMessage: "All",
        description: "Search tab for finding chats, actions, project files, and text in project files together",
      },
      chats: {
        id: "codex.commandMenu.scope.chats",
        defaultMessage: "Chats",
        description: "Search tab for finding chats by title or content",
      },
      people: {
        id: "codex.commandMenu.scope.people",
        defaultMessage: "People",
        description: "Search tab for finding members of the current workspace",
      },
      space: {
        id: "codex.commandMenu.scope.space",
        defaultMessage: "Space",
        description: "Search tab for finding files and Pages in Space",
      },
      actions: {
        id: "codex.commandMenu.scope.actions",
        defaultMessage: "Actions",
        description: "Search tab for finding commands and settings",
      },
      pages: {
        id: "codex.commandMenu.scope.pages",
        defaultMessage: "Pages",
        description: "Search tab for finding Pages documents",
      },
      files: {
        id: "codex.commandMenu.scope.files",
        defaultMessage: "Files",
        description: "Search tab for finding files by name in the selected location",
      },
      text: {
        id: "codex.commandMenu.scope.text",
        defaultMessage: "Text",
        description: "Search tab for finding text inside files in the selected location",
      },
    })
    var tw = o("RU3e"),
      tM = o("XYHU"),
      tv = o("hGgS"),
      tb = o("n5iL"),
      ty = o("EFj1")
    function tS(e) {
      let t,
        o,
        i,
        c,
        r = (0, n.c)(12),
        { commandIds: s, onRunCommand: d } = e,
        l = !0 === (0, R.Ul)(tw.$O),
        m = (0, R.Ul)(tb.nH),
        u = (0, R.Ul)(tM.IU),
        p = (0, R.Ul)(td.W)
      r[0] !== p || r[1] !== s || r[2] !== m || r[3] !== u
        ? ((t = [...new Set([..._.dM, ...s, "settings", "keyboardShortcuts"])].flatMap((e) => {
            let t = (0, _.hF)(e)
            return null == t || (0, _.uL)(t) || !(0, _.mg)(t, p)
              ? []
              : (0, tb.Dq)(e, m, u).map((t) => {
                  let { accelerator: o } = t
                  return { commandId: e, accelerator: o }
                })
          })),
          (r[0] = p),
          (r[1] = s),
          (r[2] = m),
          (r[3] = u),
          (r[4] = t))
        : (t = r[4])
      let h = t
      return (
        r[5] !== h
          ? ((o = () => (e9.appServices.spotlight?.setShortcutAccelerators(h.map(tC)), tD)),
            (i = [h]),
            (r[5] = h),
            (r[6] = o),
            (r[7] = i))
          : ((o = r[6]), (i = r[7])),
        (0, E.useEffect)(o, i),
        r[8] !== l || r[9] !== d || r[10] !== h
          ? ((c = (0, a.jsx)(a.Fragment, {
              children: h.map((e) => {
                let { commandId: t, accelerator: o } = e
                return (0, a.jsx)(tT, { commandId: t, accelerator: o, isFocused: l, onRunCommand: d }, `${t}:${o}`)
              }),
            })),
            (r[8] = l),
            (r[9] = d),
            (r[10] = h),
            (r[11] = c))
          : (c = r[11]),
        c
      )
    }
    function tD() {
      e9.appServices.spotlight?.setShortcutAccelerators([])
    }
    function tC(e) {
      let { accelerator: t } = e
      return t
    }
    function tT(e) {
      let t,
        o,
        a,
        i,
        c,
        r,
        s,
        d = (0, n.c)(17),
        { accelerator: l, commandId: m, isFocused: u, onRunCommand: p } = e
      d[0] !== m ? ((t = _.dM.includes(m)), (d[0] = m), (d[1] = t)) : (t = d[1])
      let h = t
      d[2] !== m || d[3] !== p ? ((o = () => p(m)), (d[2] = m), (d[3] = p), (d[4] = o)) : (o = d[4])
      let g = u && !h
      return (
        d[5] !== g ? ((a = { enabled: g }), (d[5] = g), (d[6] = a)) : (a = d[6]),
        (0, ty.K)(m, o, a),
        d[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = /(?:^|\+)(?:CmdOrCtrl|Cmd|Command|Ctrl|Control|Alt|Option)\+/), (d[7] = i))
          : (i = d[7]),
        d[8] !== l ? ((c = i.test(l.split(" ")[0] ?? "")), (d[8] = l), (d[9] = c)) : (c = d[9]),
        d[10] !== m
          ? ((r = (e) => {
              e.isComposing || e.defaultPrevented || ((0, tu.W7)(m, e) && e.preventDefault())
            }),
            (d[10] = m),
            (d[11] = r))
          : (r = d[11]),
        d[12] !== l || d[13] !== u || d[14] !== c || d[15] !== r
          ? ((s = { accelerator: l, enabled: u, allowWithinEditable: c, onKeyDown: r }),
            (d[12] = l),
            (d[13] = u),
            (d[14] = c),
            (d[15] = r),
            (d[16] = s))
          : (s = d[16]),
        (0, tv.EE)(s),
        null
      )
    }
    var tk = o("bWRV"),
      tP = o("Fk6e"),
      t_ = o("Nz3U"),
      tA = o("gLoR"),
      tI = o("slpy"),
      tj = o("yQP1"),
      tN = o("mkNg"),
      tR = o("MgeM"),
      tE = o("OWtl"),
      tF = o("n5oN")
    let tO = (0, R.SZ)(
      tE.u,
      () => tN.p.getOpenTabs(),
      ({ set: e }) =>
        tN.p.subscribe(() => {
          e(tN.p.getOpenTabs())
        }),
      { isEqual: I() },
    )
    function tB(e) {
      let t,
        o,
        i,
        c,
        r,
        s = (0, n.c)(23),
        { close: d } = e,
        l = (0, L.zy)(),
        m = (0, L.Zp)(),
        u = (0, P.wo)(tG),
        [p, h] = (0, E.useState)(null),
        g = p?.query === u ? p.limit : 10
      s[0] !== u
        ? ((t = (0, R.un)(
            tE.u,
            (e) => {
              let { get: t } = e
              return u
                ? t(tO).filter((e) =>
                    (0, tj.lR7)(
                      {
                        title: `${e.title}
${e.pageTitle}`,
                        url: e.url,
                      },
                      u,
                    ),
                  )
                : []
            },
            { isEqual: I() },
          )),
          (s[0] = u),
          (s[1] = t))
        : (t = s[1])
      let f = (0, R.Ul)(t),
        x = Math.min(f.length, g),
        { groupRef: w, prepareSelection: M } = (0, eC.K)(u, x),
        v = 0 === f.length ? "hidden" : "flex flex-col gap-1 select-none"
      if (
        (s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(H.z, {
              children: (0, a.jsx)(B.A, {
                id: "codex.commandMenu.browserTabs",
                defaultMessage: "Browser tabs",
                description:
                  "Heading for matching open Codex Browser tabs across tasks in the current window in the command menu",
              }),
            })),
            (s[2] = o))
          : (o = s[2]),
        s[3] !== d || s[4] !== g || s[5] !== l || s[6] !== m || s[7] !== f)
      ) {
        let e
        ;(s[9] !== d || s[10] !== l || s[11] !== m
          ? ((e = (e) =>
              (0, a.jsx)(
                Y.y,
                {
                  "aria-label": e.title || e.url,
                  value: (0, eD._X)(`browser-tab:${JSON.stringify([e.conversationId, e.browserTabId])}`),
                  title: e.title || e.url,
                  description: e.url,
                  titleTooltipContent: e.title || e.url,
                  descriptionTooltipContent: e.url,
                  leftAccessory: (0, a.jsx)(X.ZEl, {}),
                  rightAccessory: (0, a.jsx)(tL, { ownerRoutePath: e.ownerRoutePath }),
                  onSelect: () => {
                    ;(d(),
                      (0, tR.uu)(e.conversationId, { active: !0, browserTabId: e.browserTabId, mode: "activate" }),
                      `${l.pathname}${l.search}` !== e.ownerRoutePath && m(e.ownerRoutePath))
                  },
                },
                `${e.conversationId}\0${e.browserTabId}`,
              )),
            (s[9] = d),
            (s[10] = l),
            (s[11] = m),
            (s[12] = e))
          : (e = s[12]),
          (i = f.slice(0, g).map(e)),
          (s[3] = d),
          (s[4] = g),
          (s[5] = l),
          (s[6] = m),
          (s[7] = f),
          (s[8] = i))
      } else i = s[8]
      return (
        s[13] !== g || s[14] !== M || s[15] !== u || s[16] !== f.length
          ? ((c =
              f.length > g
                ? (0, a.jsx)(eT.X, {
                    section: "browser-tabs",
                    onSelect: () => {
                      ;(M(), h({ query: u, limit: g + 10 }))
                    },
                  })
                : null),
            (s[13] = g),
            (s[14] = M),
            (s[15] = u),
            (s[16] = f.length),
            (s[17] = c))
          : (c = s[17]),
        s[18] !== w || s[19] !== v || s[20] !== i || s[21] !== c
          ? ((r = (0, a.jsxs)(P.uB.Group, {
              ref: w,
              className: v,
              "data-command-menu-search-section": "browser-tabs",
              heading: o,
              children: [i, c],
            })),
            (s[18] = w),
            (s[19] = v),
            (s[20] = i),
            (s[21] = c),
            (s[22] = r))
          : (r = s[22]),
        r
      )
    }
    function tG(e) {
      return e.search.trim()
    }
    function tL(e) {
      let t,
        o,
        i = (0, n.c)(5),
        { ownerRoutePath: c } = e,
        r = (0, R._U)(tF.m, c)
      return r?.trim()
        ? (i[0] !== r
            ? ((t = (0, a.jsx)("span", {
                className: "block w-24 truncate text-end text-sm text-codex-description",
                children: r,
              })),
              (i[0] = r),
              (i[1] = t))
            : (t = i[1]),
          i[2] !== t || i[3] !== r
            ? ((o = (0, a.jsx)(tI.m, { content: r, enabledWhen: "target-overflows", children: t })),
              (i[2] = t),
              (i[3] = r),
              (i[4] = o))
            : (o = i[4]),
          o)
        : null
    }
    var tW = o("pbIy"),
      tq = o("VatZ"),
      tU = o("ZOtJ"),
      tK = o("vF5L")
    let t$ = new Set(["ArrowDown", "ArrowUp", "Home", "End", "Enter"]),
      tV = new Set(["j", "k", "n", "p"]),
      tz = (0, eo._)(
        async () =>
          (await Promise.all([o.e(160740), o.e(109399)]).then(o.bind(o, "UTF2")))
            .VisibleSettingsUnifiedSearchSectionItems,
      ),
      tH = ["newTask", "openFolder"],
      tZ = {
        newTask: { asset: y.f },
        newProjectlessTask: { asset: y.f },
        openThreadInNewWindow: { asset: T.v },
        archiveThread: { asset: i.u },
        toggleThreadPin: { asset: M.F },
        openControlWindow: { asset: x.y },
        undoAppAction: { asset: d.K },
        "git.openPullRequest": el.A,
        openAvatarOverlay: { asset: u.$ },
        searchChats: { asset: f.Y },
        importExternalAgent: { asset: c.Y },
        keyboardShortcuts: { asset: h.T },
        manageTasks: X.QC9,
        forceReloadSkills: { asset: l.S },
        openSkills: { asset: b.S },
        openFolder: { asset: p.Y },
        toggleSidebar: { asset: v.s },
        togglePinnedSummary: { asset: g.E },
        toggleTerminal: { asset: C.K },
        newTab: { asset: D.I },
        stepWorkspaceLayout: { asset: v.s },
        openReviewTab: { asset: S.L },
        toggleSidePanel: { asset: v.s },
        findInThread: { asset: f.Y },
        navigateBack: { asset: r.z },
        navigateForward: function (e) {
          let t,
            o,
            i = (0, n.c)(4),
            { className: c } = e
          return (
            i[0] !== c ? ((t = (0, k.A)(c, "-scale-x-100")), (i[0] = c), (i[1] = t)) : (t = i[1]),
            i[2] !== t ? ((o = (0, a.jsx)(es.A, { className: t })), (i[2] = t), (i[3] = o)) : (o = i[3]),
            o
          )
        },
        previousThread: { asset: s.l },
        nextThread: function (e) {
          let t,
            o,
            i = (0, n.c)(4),
            { className: c } = e
          return (
            i[0] !== c ? ((t = (0, k.A)(c, "rotate-180")), (i[0] = c), (i[1] = t)) : (t = i[1]),
            i[2] !== t ? ((o = (0, a.jsx)(ed.A, { className: t })), (i[2] = t), (i[3] = o)) : (o = i[3]),
            o
          )
        },
        logOut: { asset: w.z },
        feedback: { asset: m.R },
      }
    function tQ(e, { canUseChatGpt: t, codexFeaturesAllowed: o }) {
      switch (e) {
        case void 0:
          return !0
        case "chatgpt":
          return t
        case "codex":
          return o
      }
    }
    function tY(e) {
      let t,
        o,
        i,
        c,
        s,
        d,
        l,
        m,
        u,
        p,
        h,
        g,
        f,
        x,
        w,
        M,
        v,
        b,
        y,
        S,
        D,
        C,
        T,
        k,
        A,
        I,
        j,
        N,
        G,
        Z,
        Q,
        Y,
        X,
        ee,
        et,
        eo,
        en,
        es,
        ed = (0, n.c)(199),
        {
          close: el,
          inputRef: eh,
          host: eg,
          originElement: ef,
          search: ex,
          searchEventLogger: ew,
          setSearch: eM,
          standaloneWindow: ev,
        } = e,
        eb = (0, R.gh)(eF.GD),
        ey = (0, L.zy)()
      ed[0] !== ey ? ((t = (0, tt.IT)(ey)), (ed[0] = ey), (ed[1] = t)) : (t = ed[1])
      let eC = "space" === t,
        eT = (0, O.A)(),
        ek = (0, E.useRef)(null),
        eP = (0, E.useRef)(null)
      ed[2] !== eh
        ? ((o = (e) => {
            ;((eP.current = e), eh(e))
          }),
          (ed[2] = eh),
          (ed[3] = o))
        : (o = ed[3])
      let e_ = (0, tr.K)(o)
      ed[4] !== ef ? ((i = () => (void 0 === ef ? (0, tU.Jl)() : ef)), (ed[4] = ef), (ed[5] = i)) : (i = ed[5])
      let [eA] = (0, E.useState)(i)
      ed[6] !== eA || ed[7] !== eb
        ? ((c = () => {
            let e = eA
              ?.closest("[data-app-shell-tab-panel-controller]")
              ?.getAttribute("data-app-shell-tab-panel-controller")
            return "bottom" === e || "right" === e
              ? e
              : (0, tn.AU)(eb.get(U.J8), { bottom: eb.get(K.lN), right: eb.get(K.SZ) && eb.get(K.yN) })
          }),
          (ed[6] = eA),
          (ed[7] = eb),
          (ed[8] = c))
        : (c = ed[8])
      let [eI] = (0, E.useState)(c),
        { selectedHostId: ej } = (0, e7.D)(),
        eN = (0, tc.M0)(),
        eR = (0, eu.N)((0, R.Ul)(tW.v)),
        eE = (0, R.Ul)(to.l)
      ed[9] === Symbol.for("react.memo_cache_sentinel") ? ((s = { name: "chatgpt" }), (ed[9] = s)) : (s = ed[9])
      let eO = (0, R._U)(W.G, s).isCapable,
        eB = (0, R.Ul)(!!eO && tP.Pz)
      ed[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { name: "automations.local" }), (ed[10] = d))
        : (d = ed[10])
      let eG = (0, R._U)(W.G, d).isCapable,
        eL = (0, R.Ul)(V.B).isCapable,
        eW = (0, R.Ul)($.ph),
        eq = (0, R.Ul)(td.W),
        eU = (0, R.Ul)(tK.tu),
        eK = "local-thread" === eb.value.routeKind ? eb.value : null,
        e$ = (0, R._U)(q.qX, eK?.conversationId ?? null)
      ed[11] !== e$ || ed[12] !== eK
        ? ((l = null == eK ? null : { hostId: eK.hostId ?? e$, threadId: eK.conversationId }),
          (ed[11] = e$),
          (ed[12] = eK),
          (ed[13] = l))
        : (l = ed[13])
      let eV = (0, R._U)(em.K, l),
        ez = (0, R.Ul)(K.gU),
        eH = (0, R.Ul)(tK.m$),
        eZ = (0, R.Ul)(eS.YC),
        eY = "people" !== eZ || eB ? eZ : "root",
        eJ = (0, R.Ul)("root" === eY && !!eO && tP.dE)
      ed[14] !== eY || ed[15] !== eH
        ? ((m = "root" === eY || "actions" === eY ? (eH.at(-1) ?? null) : null),
          (ed[14] = eY),
          (ed[15] = eH),
          (ed[16] = m))
        : (m = ed[16])
      let eX = m,
        e1 = (0, R.Ul)("files" === eY || "text" === eY ? ec.H : null)
      ed[17] !== eY || ed[18] !== e1?.hostId || ed[19] !== e1?.roots
        ? ((u = JSON.stringify([eY, e1?.hostId, e1?.roots])),
          (ed[17] = eY),
          (ed[18] = e1?.hostId),
          (ed[19] = e1?.roots),
          (ed[20] = u))
        : (u = ed[20])
      let e0 = u,
        e2 =
          (0, R.Ul)("text" === eY ? er.n : null)?.find((e) => e.key === JSON.stringify([e1?.hostId, e1?.projectRoots]))
            ?.fileMask ?? ""
      ed[21] !== e2 || ed[22] !== eY || ed[23] !== e0
        ? ((p = () => {
            let e = ""
            return ("chats" === eY && (e = eS.u), { key: e0, value: e, fileMask: e2 })
          }),
          (ed[21] = e2),
          (ed[22] = eY),
          (ed[23] = e0),
          (ed[24] = p))
        : (p = ed[24])
      let [e4, e3] = (0, E.useState)(p)
      e4.key !== e0
        ? e3({ key: e0, value: "chats" === eY ? eS.u : "", fileMask: e2 })
        : e4.fileMask !== e2 && e3({ ...e4, fileMask: e2, value: "" === ex.trim() ? e4.value : (0, eD._X)("text:0") })
      let e6 = (0, R.Ul)(z.k),
        e5 = (0, ta.Zj)("1532120159")
      ed[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { name: "browser.in-app" }), (ed[25] = h))
        : (h = ed[25])
      let e8 = (0, R._U)(W.G, h).isCapable,
        ti = (0, ta.Zj)("2717023667"),
        tm = (0, ta.Zj)("2171042036"),
        th = "local" === (0, te.Qz)(ej).kind,
        tf = null != ev
      ed[26] !== eO || ed[27] !== eW || ed[28] !== eq || ed[29] !== tf || ed[30] !== eE
        ? ((g = (e) =>
            (!tf || !e.isWorkspaceScoped) &&
            ("codex" === eE || !e.modes?.some(on)) &&
            tQ(e.unifiedSearchFeature, { canUseChatGpt: eO, codexFeaturesAllowed: eW }) &&
            (0, _.bn)(e.requiredAccess, eq)),
          (ed[26] = eO),
          (ed[27] = eW),
          (ed[28] = eq),
          (ed[29] = tf),
          (ed[30] = eE),
          (ed[31] = g))
        : (g = ed[31])
      let tx = eR.filter(g)
      ed[32] !== eY
        ? ((f = (e) => e.modes?.includes(eY) ?? ("root" === eY || "actions" === eY)), (ed[32] = eY), (ed[33] = f))
        : (f = ed[33])
      let tw = tx.filter(f),
        tM = ex.trim()
      if (ed[34] !== eT || ed[35] !== eY || ed[36] !== eX?.searchPlaceholder) {
        let e = {
          root: of.unifiedSearchPlaceholder,
          chats: of.chatSearchPlaceholder,
          people: of.peopleSearchPlaceholder,
          pages: of.pageSearchPlaceholder,
          space: of.spaceSearchPlaceholder,
          actions: of.actionSearchPlaceholder,
          files: of.fileSearchPlaceholder,
          text: of.fileSearchPlaceholder,
        }
        ;((x = eX?.searchPlaceholder ?? eT.formatMessage(e[eY])),
          (ed[34] = eT),
          (ed[35] = eY),
          (ed[36] = eX?.searchPlaceholder),
          (ed[37] = x))
      } else x = ed[37]
      let tv = x,
        tb = (0, R.Ul)(ep.pagesEnabled$),
        ty = (0, R.Ul)(!tf && ep.gG),
        tD = eS.v3.filter((e) =>
          "people" === e
            ? !tf && eB
            : "space" === e || "pages" === e
              ? !tf && tb && ("pages" !== e || ty)
              : ("files" !== e && "text" !== e) ||
                (!tf &&
                  ("text" !== e || null != e9.appServices.workspaceSearch) &&
                  tx.some((t) => t.modes?.includes(e))),
        )
      ed[38] !== eg?.input || ed[39] !== eb || ed[40] !== ex || ed[41] !== eM
        ? ((w = (e) => {
            ;(eb.set(eS.ek, null), eb.set(tK.m$, []), eb.set(eS.YC, e), eM(ex), (eg?.input ?? eP).current?.focus())
          }),
          (ed[38] = eg?.input),
          (ed[39] = eb),
          (ed[40] = ex),
          (ed[41] = eM),
          (ed[42] = w))
        : (w = ed[42])
      let tC = w,
        tT = "root" === eY ? [] : tw.filter(oa).map(oo)
      ed[43] !== e8 ||
      ed[44] !== eO ||
      ed[45] !== eL ||
      ed[46] !== eW ||
      ed[47] !== eq ||
      ed[48] !== tm ||
      ed[49] !== eV ||
      ed[50] !== ez ||
      ed[51] !== tf ||
      ed[52] !== eG ||
      ed[53] !== eU
        ? ((M = _.zQ.filter(
            (e) =>
              !(
                !(0, _.Ix)(e) ||
                (tf && "workspace" === e.unifiedSearchGroupKey && "openFolder" !== e.id) ||
                !(0, _.mg)(e, eq) ||
                !tQ(e.unifiedSearchFeature, { canUseChatGpt: eO, codexFeaturesAllowed: eW }) ||
                ("toggleSidebar" === e.id && !ez) ||
                ("manageTasks" === e.id && !eG && !eL) ||
                ("newTab" === e.id && !e8) ||
                ("openControlWindow" === e.id && !tm) ||
                "settings" === e.id ||
                "mcpSettings" === e.id ||
                "personalitySettings" === e.id ||
                "keyboardShortcuts" === e.id ||
                ("archiveThread" === e.id && (eV || (0, tK.ZJ)(eU, "deleteOrbit") > 0))
              ) &&
              (!!(0, tu.Zu)(e.id) || 0 !== (0, tK.ZJ)(eU, e.id)),
          )),
          (ed[43] = e8),
          (ed[44] = eO),
          (ed[45] = eL),
          (ed[46] = eW),
          (ed[47] = eq),
          (ed[48] = tm),
          (ed[49] = eV),
          (ed[50] = ez),
          (ed[51] = tf),
          (ed[52] = eG),
          (ed[53] = eU),
          (ed[54] = M))
        : (M = ed[54])
      let tk = M
      ed[55] !== eM
        ? ((v = () => {
            eM("")
          }),
          (ed[55] = eM),
          (ed[56] = v))
        : (v = ed[56])
      let t_ = v
      ed[57] !== t_ || ed[58] !== eH || ed[59] !== eb
        ? ((b = () => {
            ;(eb.set(tK.m$, eH.slice(0, -1)), t_())
          }),
          (ed[57] = t_),
          (ed[58] = eH),
          (ed[59] = eb),
          (ed[60] = b))
        : (b = ed[60])
      let tA = b
      ed[61] !== e6 ||
      ed[62] !== eO ||
      ed[63] !== el ||
      ed[64] !== eT ||
      ed[65] !== e5 ||
      ed[66] !== eA ||
      ed[67] !== eI ||
      ed[68] !== eU ||
      ed[69] !== ew ||
      ed[70] !== ev?.onRunCommand
        ? ((y = (e) => {
            let t = "openAvatarOverlay" === e.id && e6,
              o = (0, tK.iG)(eU, e.id),
              n = (0, tl.j)(e, eT, o, e5),
              i = n.title
            "openAvatarOverlay" === e.id && e5
              ? (i = e6
                  ? eT.formatMessage({
                      id: "codex.command.hideMiniOverlay",
                      defaultMessage: "Hide Mini",
                      description:
                        "Command menu item to hide Mini, the floating compact Codex panel, when it is visible",
                    })
                  : eT.formatMessage({
                      id: "codex.command.showMiniOverlay",
                      defaultMessage: "Show Mini",
                      description:
                        "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
                    }))
              : "openAvatarOverlay" === e.id &&
                (i = t
                  ? eT.formatMessage(of.tuckAwayPet)
                  : eT.formatMessage({
                      id: "codex.command.wakeMiniOverlay",
                      defaultMessage: "Wake Mini",
                      description: "Command menu item to wake Mini, the floating compact panel, when it is hidden",
                    }))
            let c = t ? eT.formatMessage(of.tuckAwayPetDescription) : n.description
            return (0, a.jsx)(
              ou,
              {
                command: e,
                close: el,
                description: c,
                icon: o?.icon,
                originElement: eA,
                originPanel: eI,
                onRunCommand: ev?.onRunCommand,
                onOpenChatSearch: () => {
                  eO && ew.openSession()
                },
                searchKeywords:
                  "openAvatarOverlay" === e.id
                    ? [n.title, eT.formatMessage(of.tuckAwayPet), eT.formatMessage(of.petSearchAlias)]
                    : void 0,
                title: i,
              },
              e.id,
            )
          }),
          (ed[61] = e6),
          (ed[62] = eO),
          (ed[63] = el),
          (ed[64] = eT),
          (ed[65] = e5),
          (ed[66] = eA),
          (ed[67] = eI),
          (ed[68] = eU),
          (ed[69] = ew),
          (ed[70] = ev?.onRunCommand),
          (ed[71] = y))
        : (y = ed[71])
      let tI = y,
        tj = [],
        tN = tw.filter(ot),
        tR = "chats" === eY,
        tE = "people" === eY,
        tF = "files" === eY,
        tO = "text" === eY,
        tG = "space" === eY || "pages" === eY,
        tL = tN.length > 0 || tR || tE || tF || tO || tG,
        t$ = "root" === eY && null == eX && !tL,
        tV = t$ && 0 === tM.length,
        tZ = tV ? "chats" : eY
      ed[72] !== ex || ed[73] !== tZ
        ? ((S = (0, eD.ks)(tZ, ex)), (ed[72] = ex), (ed[73] = tZ), (ed[74] = S))
        : (S = ed[74])
      let tY = S,
        oc = t$ ? tw.filter((e) => !e.modes?.some(oe) && (!tV || "suggested" === e.groupKey)) : tw,
        os =
          tV || (tR && 0 === tM.length)
            ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ts.B, {
                  close: el,
                  navigateToLocalConversation: eN,
                  onSelectResult: ev?.onSelectResult,
                }),
              })
            : null
      ed[75] !== tY ||
      ed[76] !== el ||
      ed[77] !== tL ||
      ed[78] !== eN ||
      ed[79] !== ex ||
      ed[80] !== ew ||
      ed[81] !== tV ||
      ed[82] !== ev
        ? ((D =
            tL || null == tY
              ? null
              : (0, a.jsx)(
                  ts.UnifiedSearchChatContent,
                  {
                    close: el,
                    navigateToLocalConversation: eN,
                    presentation: tV ? "focused" : "quick",
                    searchPlan: tY,
                    search: ex,
                    searchEventLogger: ew,
                    onSelectResult: ev?.onSelectResult,
                    onStartNewConversation: null == ev ? void 0 : () => ev.onRunCommand("newTask"),
                  },
                  "group-chat-search-results",
                )),
          (ed[75] = tY),
          (ed[76] = el),
          (ed[77] = tL),
          (ed[78] = eN),
          (ed[79] = ex),
          (ed[80] = ew),
          (ed[81] = tV),
          (ed[82] = ev),
          (ed[83] = D))
        : (D = ed[83])
      let ol = D
      ed[84] !== el || ed[85] !== t$ || ed[86] !== tG || ed[87] !== ew || ed[88] !== ev
        ? ((C =
            (t$ || tG) && null == ev
              ? (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(eQ, { close: el, searchEventLogger: ew }) })
              : null),
          (ed[84] = el),
          (ed[85] = t$),
          (ed[86] = tG),
          (ed[87] = ew),
          (ed[88] = ev),
          (ed[89] = C))
        : (C = ed[89])
      let om = C,
        op = 0 === tM.length,
        og = []
      if (op && !tL)
        for (let e of tH) {
          let t = tk.find((t) => t.id === e)
          t && og.push(t)
        }
      ed[90] !== tV || ed[91] !== op
        ? ((T = (e) => !tV && (!op || !tH.includes(e.id))), (ed[90] = tV), (ed[91] = op), (ed[92] = T))
        : (T = ed[92])
      let ox = tk.filter(T),
        ow = (0, eD.w0)(tM, ox.some(t7)),
        oM = tL
          ? []
          : oc
              .filter(t9)
              .map((e) => e.render(el, t_, eM))
              .filter(t8)
      if (tG) null != om && tj.push(om)
      else if (tR && 0 === tM.length && null == ev) null != os && tj.push(os)
      else if (tR && null != tY) {
        let e,
          t,
          o = ev?.onSelectResult
        ;(ed[93] !== ev
          ? ((e = null == ev ? void 0 : () => ev.onRunCommand("newTask")), (ed[93] = ev), (ed[94] = e))
          : (e = ed[94]),
          ed[95] !== tY ||
          ed[96] !== el ||
          ed[97] !== eN ||
          ed[98] !== ex ||
          ed[99] !== ew ||
          ed[100] !== o ||
          ed[101] !== e
            ? ((t = (0, a.jsx)(
                ts.UnifiedSearchChatContent,
                {
                  close: el,
                  navigateToLocalConversation: eN,
                  presentation: "focused",
                  searchPlan: tY,
                  search: ex,
                  searchEventLogger: ew,
                  onSelectResult: o,
                  onStartNewConversation: e,
                },
                "group-threads",
              )),
              (ed[95] = tY),
              (ed[96] = el),
              (ed[97] = eN),
              (ed[98] = ex),
              (ed[99] = ew),
              (ed[100] = o),
              (ed[101] = e),
              (ed[102] = t))
            : (t = ed[102]),
          tj.push(t))
      } else if (tL) {
        let e,
          t = tF || tO ? tw : tN
        ed[103] !== t_ || ed[104] !== el || ed[105] !== eM
          ? ((e = (e) => e.render(el, t_, eM)), (ed[103] = t_), (ed[104] = el), (ed[105] = eM), (ed[106] = e))
          : (e = ed[106])
        let o = t.map(e).filter(t5)
        tj.push(...o)
      } else
        for (let e of oc) {
          if (null != e.groupKey || (e.order ?? 0) >= 0) continue
          let t = e.render(el, t_, eM)
          t && tj.push(t)
        }
      if (!tL && (og.length > 0 || oM.length > 0)) {
        let e, t
        ;(ed[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(H.z, {
              children: (0, a.jsx)(B.A, {
                id: "codex.commandMenu.suggestedGroup",
                defaultMessage: "Quick actions",
                description: "Command group label in the command menu when no search query is entered",
              }),
            })),
            (ed[107] = e))
          : (e = ed[107]),
          ed[108] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { gap: "var(--spacing)" }), (ed[108] = t))
            : (t = ed[108]),
          tj.push(
            (0, a.jsxs)(
              P.uB.Group,
              { heading: e, className: "flex flex-col", style: t, children: [og.map(tI), oM] },
              "group-suggested",
            ),
          ))
      }
      ed[109] !== el ||
      ed[110] !== eW ||
      ed[111] !== th ||
      ed[112] !== ej ||
      ed[113] !== tV ||
      ed[114] !== ev?.onNavigate
        ? ((k =
            eW && !tV
              ? (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsx)(tz, {
                    close: el,
                    isSelectedHostLocal: th,
                    selectedHostId: ej,
                    onNavigate: ev?.onNavigate,
                  }),
                })
              : null),
          (ed[109] = el),
          (ed[110] = eW),
          (ed[111] = th),
          (ed[112] = ej),
          (ed[113] = tV),
          (ed[114] = ev?.onNavigate),
          (ed[115] = k))
        : (k = ed[115])
      let ov = k
      tL || null == ov || ow || tj.push(ov)
      let ob = new Map(),
        oy = []
      for (let e of ox) {
        let t = e.unifiedSearchGroupKey
        if (!t) {
          oy.push(e)
          continue
        }
        let o = ob.get(t)
        o ? o.push(e) : ob.set(t, [e])
      }
      for (let e of (tL || tj.push((0, a.jsx)(P.uB.Group, { children: oy.map(tI) }, "ungrouped-actions")), _.tU)) {
        if (tL) break
        let t = ob.get(e),
          o = oc
            .filter((t) => t.groupKey === e)
            .map((e) => e.render(el, t_, eM))
            .filter(t6)
        ;(t?.length || 0 !== o.length) &&
          (tj.push(
            (0, a.jsxs)(
              P.uB.Group,
              {
                heading: (0, a.jsx)(H.z, { children: (0, a.jsx)(B.A, { ...of[e] }) }),
                className: "flex flex-col",
                style: { gap: "var(--spacing)" },
                children: [o, t?.map(tI)],
              },
              `group-${e}`,
            ),
          ),
          ow && "configure" === e && null != ov && tj.push(ov))
      }
      if (!tL)
        for (let e of oc) {
          if (null != e.groupKey || (e.order ?? 0) < 0) continue
          let t = e.render(el, t_, eM)
          t && tj.push(t)
        }
      if (tE && eB) {
        let e
        ;(ed[116] !== el || ed[117] !== ew || ed[118] !== tM
          ? ((e = (0, a.jsx)(
              or,
              { scrollRef: ek, close: el, search: tM, searchEventLogger: ew },
              "group-people-search",
            )),
            (ed[116] = el),
            (ed[117] = ew),
            (ed[118] = tM),
            (ed[119] = e))
          : (e = ed[119]),
          tj.push(e))
      }
      let oS = t$
          ? {
              actions: tj,
              pages: [],
              space: [om],
              chats: [os, tV ? null : ol],
              files: tw.filter(t3).map((e) => (0, a.jsx)(E.Fragment, { children: e.render(el, t_, eM) }, e.id)),
              text: tw.filter(t4).map((e) => (0, a.jsx)(E.Fragment, { children: e.render(el, t_, eM) }, e.id)),
            }
          : null,
        oD = eS.v3.filter(t2)
      tV && (oD = eC ? ["actions", "space", "chats", "files", "text"] : ["actions", "chats", "space", "files", "text"])
      let oC = e4.value,
        oT = tR && 0 === tM.length && !tf,
        ok = !tF && !tO && !tR && !tE && !tG
      ;(ed[120] !== eT ? ((A = eT.formatMessage(tq.b.dialogTitle)), (ed[120] = eT), (ed[121] = A)) : (A = ed[121]),
        ed[122] !== e2 || ed[123] !== e0 || ed[124] !== e3
          ? ((I = (e) => e3({ key: e0, value: e, fileMask: e2 })),
            (ed[122] = e2),
            (ed[123] = e0),
            (ed[124] = e3),
            (ed[125] = I))
          : (I = ed[125]),
        ed[126] !== e4.value || ed[127] !== oT || ed[128] !== ok || ed[129] !== A || ed[130] !== I
          ? ((j = { value: oC, loop: oT, shouldFilter: ok, filter: eD.st, label: A, onValueChange: I }),
            (ed[126] = e4.value),
            (ed[127] = oT),
            (ed[128] = ok),
            (ed[129] = A),
            (ed[130] = I),
            (ed[131] = j))
          : (j = ed[131]))
      let oP = j
      ed[132] !== tk || ed[133] !== ev
        ? ((N = null != ev && (0, a.jsx)(tS, { commandIds: tk.map(t0), onRunCommand: ev.onRunCommand })),
          (ed[132] = tk),
          (ed[133] = ev),
          (ed[134] = N))
        : (N = ed[134])
      let o_ = null == eg ? e_ : void 0,
        oA = null != ev
      ed[135] !== eT || ed[136] !== tT.length
        ? ((G =
            0 === tT.length
              ? void 0
              : eT.formatMessage({
                  id: "codex.commandMenu.searchKeyboardHint",
                  defaultMessage: "Tab switches search; F6 focuses search options",
                  description:
                    "Keyboard help for the search input when the current search scope has extra options beside its tabs",
                })),
          (ed[135] = eT),
          (ed[136] = tT.length),
          (ed[137] = G))
        : (G = ed[137])
      let oI = tO ? 256 : void 0
      ;(ed[138] !== eO ||
      ed[139] !== e2 ||
      ed[140] !== tL ||
      ed[141] !== tR ||
      ed[142] !== eY ||
      ed[143] !== eb ||
      ed[144] !== ew ||
      ed[145] !== e0 ||
      ed[146] !== eM ||
      ed[147] !== e3 ||
      ed[148] !== eX
        ? ((Z = (e) => {
            ;((0, tK.ks)(eb, eY, e), (0, F.flushSync)(() => eM(e)))
            let t = (0, eD.ks)(eY, e)
            ;(eO && t?.includeContentResults && (tR || (null == eX && !tL)) && ew.openSession(),
              tR && e3({ key: e0, value: eS.u, fileMask: e2 }))
          }),
          (ed[138] = eO),
          (ed[139] = e2),
          (ed[140] = tL),
          (ed[141] = tR),
          (ed[142] = eY),
          (ed[143] = eb),
          (ed[144] = ew),
          (ed[145] = e0),
          (ed[146] = eM),
          (ed[147] = e3),
          (ed[148] = eX),
          (ed[149] = Z))
        : (Z = ed[149]),
        ed[150] !== tL || ed[151] !== tF || ed[152] !== eY || ed[153] !== tD || ed[154] !== tC || ed[155] !== eX
          ? ((Q = (e) => {
              if (!tp(e)) {
                if (
                  "Enter" === e.key &&
                  !e.defaultPrevented &&
                  !e.nativeEvent.isComposing &&
                  229 !== e.nativeEvent.keyCode &&
                  (tF || ("root" === eY && !tL)) &&
                  null == eX
                ) {
                  let t = Array.from(
                    e.currentTarget
                      .closest("[cmdk-root]")
                      ?.querySelectorAll('[cmdk-item]:not([aria-disabled="true"])') ?? [],
                  ).filter(t1)
                  t.some(tX) || (e.preventDefault(), t[0]?.click())
                }
                null != eX ||
                  "Tab" !== e.key ||
                  e.defaultPrevented ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.nativeEvent.isComposing ||
                  (e.preventDefault(), tC(tD[(tD.indexOf(eY) + (e.shiftKey ? -1 : 1) + tD.length) % tD.length]))
              }
            }),
            (ed[150] = tL),
            (ed[151] = tF),
            (ed[152] = eY),
            (ed[153] = tD),
            (ed[154] = tC),
            (ed[155] = eX),
            (ed[156] = Q))
          : (Q = ed[156]),
        ed[157] !== eg
          ? ((Y = null == eg ? (0, a.jsx)(ei.pd, { variant: "search", focusRing: !1 }) : (0, a.jsx)(oi, { host: eg })),
            (ed[157] = eg),
            (ed[158] = Y))
          : (Y = ed[158]),
        ed[159] !== ex ||
        ed[160] !== tv ||
        ed[161] !== o_ ||
        ed[162] !== oA ||
        ed[163] !== G ||
        ed[164] !== oI ||
        ed[165] !== Z ||
        ed[166] !== Q ||
        ed[167] !== Y
          ? ((X = (0, a.jsx)(P.uB.Input, {
              ref: o_,
              asChild: !0,
              autoFocus: oA,
              "aria-description": G,
              maxLength: oI,
              placeholder: tv,
              value: ex,
              onValueChange: Z,
              onKeyDown: Q,
              children: Y,
            })),
            (ed[159] = ex),
            (ed[160] = tv),
            (ed[161] = o_),
            (ed[162] = oA),
            (ed[163] = G),
            (ed[164] = oI),
            (ed[165] = Z),
            (ed[166] = Q),
            (ed[167] = Y),
            (ed[168] = X))
          : (X = ed[168]),
        ed[169] !== tA || ed[170] !== tN || ed[171] !== eT || ed[172] !== eX
          ? ((ee =
              null == eX
                ? null
                : (0, a.jsx)(ea.fy, {
                    ariaLabel: eT.formatMessage({
                      id: "codex.commandMenu.backToCommands",
                      defaultMessage: "Back to commands",
                      description: "Accessible label for returning from a command menu drill-in",
                    }),
                    density: "row",
                    icon: (0, a.jsx)(J.I, { asset: r.z }),
                    isSelected: !1,
                    title: (0, a.jsx)("span", { title: eX.title, children: eX.title }),
                    rightText: tN[0]?.pageAccessory,
                    showDivider: !1,
                    onSelect: (e) => {
                      ;(e.stopPropagation(), tA())
                    },
                  })),
            (ed[169] = tA),
            (ed[170] = tN),
            (ed[171] = eT),
            (ed[172] = eX),
            (ed[173] = ee))
          : (ee = ed[173]))
      let oj = P.uB.List,
        oN =
          null == oS
            ? tj
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  oD.map((e) => (0, a.jsx)("div", { children: oS[e] }, e)),
                  (0, a.jsx)("div", { children: null == ev && e8 && ti ? (0, a.jsx)(tB, { close: el }) : null }),
                  null == ev && eJ ? (0, a.jsx)(od, { close: el, search: tM, searchEventLogger: ew }) : null,
                ],
              }),
        oR =
          (tF || tO) && 0 === tj.length
            ? (0, a.jsx)("div", {
                "data-cmdk-empty": !0,
                "data-command-menu-search-state": !0,
                children: (0, a.jsx)(B.A, {
                  id: "codex.commandMenu.chooseSearchFolder",
                  defaultMessage: "Choose a folder to search files",
                  description: "Prompt in Files and Text search when no folder is available to search",
                }),
              })
            : null
      ;(ed[174] === Symbol.for("react.memo_cache_sentinel")
        ? ((et = (0, a.jsx)(oh, {})), (ed[174] = et))
        : (et = ed[174]),
        ed[175] !== tY || ed[176] !== tR || ed[177] !== tF || ed[178] !== tE || ed[179] !== tG || ed[180] !== tO
          ? ((eo =
              tR || tE || null != tY || tF || tO || tG
                ? null
                : (0, a.jsx)(P.uB.Empty, {
                    "data-command-menu-search-state": !0,
                    children: (0, a.jsx)(B.A, {
                      id: "codex.commandMenu.noResults",
                      defaultMessage: "No matches",
                      description: "Shown when no commands or workspaces match in the command menu",
                    }),
                  })),
            (ed[175] = tY),
            (ed[176] = tR),
            (ed[177] = tF),
            (ed[178] = tE),
            (ed[179] = tG),
            (ed[180] = tO),
            (ed[181] = eo))
          : (eo = ed[181]),
        ed[182] !== oj || ed[183] !== e0 || ed[184] !== ek || ed[185] !== oN || ed[186] !== oR || ed[187] !== eo
          ? ((en = (0, a.jsxs)(oj, { ref: ek, children: [oN, oR, et, eo] }, e0)),
            (ed[182] = oj),
            (ed[183] = e0),
            (ed[184] = ek),
            (ed[185] = oN),
            (ed[186] = oR),
            (ed[187] = eo),
            (ed[188] = en))
          : (en = ed[188]),
        ed[189] !== eY || ed[190] !== tT || ed[191] !== tD || ed[192] !== tC || ed[193] !== eX
          ? ((es =
              null != eX
                ? null
                : (0, a.jsx)(tg, { controls: 0 === tT.length ? null : tT, mode: eY, modes: tD, onSelect: tC })),
            (ed[189] = eY),
            (ed[190] = tT),
            (ed[191] = tD),
            (ed[192] = tC),
            (ed[193] = eX),
            (ed[194] = es))
          : (es = ed[194]))
      let oE = (0, a.jsxs)(a.Fragment, { children: [N, X, ee, en, es] })
      if (null != ev) {
        let e
        return (
          ed[195] !== el || ed[196] !== tA || ed[197] !== eX
            ? ((e = (e) => {
                "Escape" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), null != eX ? tA() : el())
              }),
              (ed[195] = el),
              (ed[196] = tA),
              (ed[197] = eX),
              (ed[198] = e))
            : (e = ed[198]),
          (0, a.jsx)(P.uB, { ...oP, "data-command-menu-variant": "standalone", onKeyDown: e, children: oE })
        )
      }
      return (0, a.jsx)(P.uB, { ...oP, className: null == eg ? void 0 : "contents!", onKeyDown: tJ, children: oE })
    }
    function tJ(e) {
      e.target instanceof Node && !e.target.isConnected && e.stopPropagation()
    }
    function tX(e) {
      return "true" === e.getAttribute("aria-selected")
    }
    function t1(e) {
      return null == e.closest("[hidden], [inert]")
    }
    function t0(e) {
      let { id: t } = e
      return t
    }
    function t2(e) {
      return "root" !== e && "people" !== e
    }
    function t4(e) {
      return e.modes?.includes("text")
    }
    function t3(e) {
      return e.modes?.includes("files")
    }
    function t6(e) {
      return null != e
    }
    function t5(e) {
      return null != e
    }
    function t8(e) {
      return null != e
    }
    function t9(e) {
      return "suggested" === e.groupKey
    }
    function t7(e) {
      return "importExternalAgent" === e.id && "configure" === e.unifiedSearchGroupKey
    }
    function oe(e) {
      return "files" === e || "text" === e
    }
    function ot(e) {
      return e.exclusive
    }
    function oo(e) {
      return (0, a.jsx)(E.Fragment, { children: e.renderControls?.() }, e.id)
    }
    function oa(e) {
      return null != e.renderControls
    }
    function on(e) {
      return "files" === e || "text" === e
    }
    function oi(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p,
        h = (0, n.c)(19)
      if (h[0] !== e) {
        let { host: a, onChange: n, onKeyDown: r, value: s, ...d } = e
        ;((o = a), (i = n), (c = r), (t = d), (h[0] = e), (h[1] = t), (h[2] = o), (h[3] = i), (h[4] = c))
      } else ((t = h[1]), (o = h[2]), (i = h[3]), (c = h[4]))
      let [g] = (0, E.useState)(oc),
        f = (0, E.useRef)(null)
      h[5] !== i ? ((r = (e) => i?.(e)), (h[5] = i), (h[6] = r)) : (r = h[6])
      let x = (0, tr.K)(r)
      h[7] !== c
        ? ((s = (e) => {
            if (
              (c?.(e),
              e.defaultPrevented || e.nativeEvent.isComposing || !(t$.has(e.key) || (e.ctrlKey && tV.has(e.key))))
            )
              return
            let t = new KeyboardEvent("keydown", e.nativeEvent)
            f.current?.dispatchEvent(t) === !1 && e.preventDefault()
          }),
          (h[7] = c),
          (h[8] = s))
        : (s = h[8])
      let w = (0, tr.K)(s)
      h[9] !== t || h[10] !== x || h[11] !== w
        ? ((d = { ...t, onChange: x, onKeyDown: w }), (h[9] = t), (h[10] = x), (h[11] = w), (h[12] = d))
        : (d = h[12])
      let M = d,
        [v, b] = (0, E.useState)(M)
      return (
        I()(v, M) || b(M),
        h[13] !== v ? ((l = () => v), (m = [v]), (h[13] = v), (h[14] = l), (h[15] = m)) : ((l = h[14]), (m = h[15])),
        (0, E.useImperativeHandle)(o.setInputProps, l, m),
        h[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)("span", { ref: f })), (h[16] = u))
          : (u = h[16]),
        h[17] !== g ? ((p = (0, F.createPortal)(u, g)), (h[17] = g), (h[18] = p)) : (p = h[18]),
        p
      )
    }
    function oc() {
      return document.createDocumentFragment()
    }
    function or(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p = (0, n.c)(46)
      p[0] !== e ? (({ scrollRef: o, ...t } = e), (p[0] = e), (p[1] = t), (p[2] = o)) : ((t = p[1]), (o = p[2]))
      let h = (0, O.A)(),
        g = (0, ti.o)(t.search, 150),
        f = t.search !== g
      p[3] !== t.search || p[4] !== f
        ? ((i = { search: t.search, debouncing: f }), (p[3] = t.search), (p[4] = f), (p[5] = i))
        : (i = p[5])
      let {
          members: x,
          hasLoadedResults: w,
          showSearchResults: M,
          isLoading: v,
          isError: b,
          hasNextPage: y,
          isFetchingNextPage: S,
          isFetchNextPageError: D,
          fetchNextPage: C,
        } = (0, R._U)(tA.E8, i),
        T = (0, R._U)(tP.Iq, !M || w || b ? "" : t.search),
        k = !w
      p[6] !== k || p[7] !== T || p[8] !== x
        ? ((c = k ? T.flatMap(os) : x), (p[6] = k), (p[7] = T), (p[8] = x), (p[9] = c))
        : (c = p[9])
      let _ = c,
        A = v || b || _.length > 0
      if (
        (p[10] !== t.search || p[11] !== t.searchEventLogger || p[12] !== M || p[13] !== A
          ? ((r = { enabled: M, pending: A, search: t.search, searchEventLogger: t.searchEventLogger }),
            (p[10] = t.search),
            (p[11] = t.searchEventLogger),
            (p[12] = M),
            (p[13] = A),
            (p[14] = r))
          : (r = p[14]),
        (0, tk.I)(r),
        !M)
      )
        return null
      p[15] !== t.search.length
        ? ((s = 0 === t.search.length && (0, a.jsx)(H.z, { children: (0, a.jsx)(B.A, { ...tA.RE }) })),
          (p[15] = t.search.length),
          (p[16] = s))
        : (s = p[16])
      let I = s
      if (v && 0 === _.length) {
        let e, t, o, n
        return (
          p[17] !== h
            ? ((e = h.formatMessage({
                id: "codex.commandMenu.peopleSearchLoading",
                defaultMessage: "Searching people…",
                description: "Loading message while searching workspace members",
              })),
              (p[17] = h),
              (p[18] = e))
            : (e = p[18]),
          p[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(en.y, { className: "icon-sm" })), (p[19] = t))
            : (t = p[19]),
          p[20] !== e
            ? ((o = (0, a.jsx)(P.uB.Loading, { "data-command-menu-search-state": !0, label: e, children: t })),
              (p[20] = e),
              (p[21] = o))
            : (o = p[21]),
          p[22] !== I || p[23] !== o
            ? ((n = (0, a.jsxs)(a.Fragment, { children: [I, o] })), (p[22] = I), (p[23] = o), (p[24] = n))
            : (n = p[24]),
          n
        )
      }
      if (!_.length && !y && !D) {
        let e, t
        return (
          p[25] !== b
            ? ((e = (0, a.jsx)(P.uB.Empty, {
                "data-command-menu-search-state": !0,
                children: b
                  ? (0, a.jsx)(B.A, {
                      id: "codex.commandMenu.peopleSearchError",
                      defaultMessage: "Could not search people",
                      description: "Error shown when workspace member search fails",
                    })
                  : (0, a.jsx)(B.A, {
                      id: "codex.commandMenu.peopleSearchEmpty",
                      defaultMessage: "No people found",
                      description: "Empty state when no workspace members match the search",
                    }),
              })),
              (p[25] = b),
              (p[26] = e))
            : (e = p[26]),
          p[27] !== I || p[28] !== e
            ? ((t = (0, a.jsxs)(a.Fragment, { children: [I, e] })), (p[27] = I), (p[28] = e), (p[29] = t))
            : (t = p[29]),
          t
        )
      }
      return (
        p[30] !== k || p[31] !== _ || p[32] !== t
          ? ((d = (0, a.jsx)(om, { ...t, tab: "people", members: _, isLocalResult: k })),
            (p[30] = k),
            (p[31] = _),
            (p[32] = t),
            (p[33] = d))
          : (d = p[33]),
        p[34] !== C || p[35] !== y || p[36] !== S || p[37] !== o
          ? ((l = (0, a.jsx)(ee.D, {
              hasNextPage: y,
              isFetchingNextPage: S,
              rootMargin: "0px 0px 520px 0px",
              rootRef: o,
              onLoadNextPage: C,
            })),
            (p[34] = C),
            (p[35] = y),
            (p[36] = S),
            (p[37] = o),
            (p[38] = l))
          : (l = p[38]),
        p[39] !== C || p[40] !== D
          ? ((m =
              D &&
              (0, a.jsx)(H.M, {
                onSelect: C,
                children: (0, a.jsx)(B.A, {
                  id: "profile.workspaceSearch.paginationRetry",
                  defaultMessage: "Couldn’t load more profiles. Try again",
                  description: "Action to retry loading the next page of workspace profile search results",
                }),
              })),
            (p[39] = C),
            (p[40] = D),
            (p[41] = m))
          : (m = p[41]),
        p[42] !== d || p[43] !== l || p[44] !== m
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [d, l, m] })), (p[42] = d), (p[43] = l), (p[44] = m), (p[45] = u))
          : (u = p[45]),
        u
      )
    }
    function os(e) {
      let t = e.profile_url?.trim()
      return t ? [{ member: e, profileUrl: t }] : []
    }
    function od(e) {
      let t,
        o,
        i,
        c,
        r = (0, n.c)(14),
        { search: s, searchEventLogger: d } = e,
        l = (0, ti.o)(s, 150),
        m = s.length >= 2,
        u = m && l === s
      r[0] !== u ? ((t = { enabled: u }), (r[0] = u), (r[1] = t)) : (t = r[1])
      let { data: p, isLoading: h, isError: g } = (0, R._U)(tP.O, l, t),
        f = u ? p?.items : void 0,
        x = (0, R._U)(tP.Iq, m && null == f && !(u && g) ? s : ""),
        w = f ?? x
      r[2] !== w ? ((o = w.flatMap(ol).slice(0, 5)), (r[2] = w), (r[3] = o)) : (o = r[3])
      let M = o,
        v = !u || h || g || M.length > 0
      return (
        r[4] !== m || r[5] !== s || r[6] !== d || r[7] !== v
          ? ((i = { enabled: m, pending: v, search: s, searchEventLogger: d }),
            (r[4] = m),
            (r[5] = s),
            (r[6] = d),
            (r[7] = v),
            (r[8] = i))
          : (i = r[8]),
        (0, tk.I)(i),
        r[9] !== m || r[10] !== M || r[11] !== e || r[12] !== f
          ? ((c =
              m && M.length > 0 ? (0, a.jsx)(om, { ...e, tab: "all", members: M, isLocalResult: null == f }) : null),
            (r[9] = m),
            (r[10] = M),
            (r[11] = e),
            (r[12] = f),
            (r[13] = c))
          : (c = r[13]),
        c
      )
    }
    function ol(e) {
      let t = e.profile_url?.trim()
      return t ? [{ member: e, profileUrl: t }] : []
    }
    function om(e) {
      let t,
        o,
        i,
        c,
        r = (0, n.c)(31),
        { close: s, isLocalResult: d, members: l, search: m, searchEventLogger: u, tab: p } = e,
        h = (0, R.gh)(eF.GD),
        g = (0, L.Zp)()
      r[0] !== d || r[1] !== l.length || r[2] !== m || r[3] !== u || r[4] !== p
        ? ((t = (e, t) => {
            u.logWorkspaceMemberResult({
              action: e,
              accountUserId: t,
              isLocalResult: d,
              resultCount: l.length,
              search: m,
              tab: p,
            })
          }),
          (r[0] = d),
          (r[1] = l.length),
          (r[2] = m),
          (r[3] = u),
          (r[4] = p),
          (r[5] = t))
        : (t = r[5])
      let f = t
      if (
        (r[6] !== m || r[7] !== p
          ? ((o = (0, a.jsx)(H.z, {
              children:
                "people" === p && 0 === m.length
                  ? (0, a.jsx)(B.A, { ...tA.RE })
                  : (0, a.jsx)(B.A, {
                      id: "codex.commandMenu.peopleSearchGroup",
                      defaultMessage: "People",
                      description: "Group label for workspace member search results in global search",
                    }),
            })),
            (r[6] = m),
            (r[7] = p),
            (r[8] = o))
          : (o = r[8]),
        r[9] !== s ||
          r[10] !== d ||
          r[11] !== f ||
          r[12] !== l ||
          r[13] !== g ||
          r[14] !== h ||
          r[15] !== m ||
          r[16] !== u ||
          r[17] !== p)
      ) {
        let e
        ;(r[19] !== s ||
        r[20] !== d ||
        r[21] !== f ||
        r[22] !== g ||
        r[23] !== h ||
        r[24] !== m ||
        r[25] !== u ||
        r[26] !== p
          ? ((e = (e) => {
              let { member: t, profileUrl: o } = e
              return (0, a.jsx)(
                H.M,
                {
                  onSelect: () => {
                    let e = (0, e8.y)(h, "all" === p ? "command_menu_all" : "command_menu_people")
                    ;((0, tP.B5)(h, t, d),
                      f("open", t.account_user_id),
                      u.closeSession("result-open"),
                      g(o, { state: e }),
                      s())
                  },
                  value: (0, eD._X)(`person:${t.account_user_id}`),
                  children: (0, a.jsx)(t_.I, { member: t, onResult: (e) => f(e, t.account_user_id), query: m }),
                },
                t.account_user_id,
              )
            }),
            (r[19] = s),
            (r[20] = d),
            (r[21] = f),
            (r[22] = g),
            (r[23] = h),
            (r[24] = m),
            (r[25] = u),
            (r[26] = p),
            (r[27] = e))
          : (e = r[27]),
          (i = l.map(e)),
          (r[9] = s),
          (r[10] = d),
          (r[11] = f),
          (r[12] = l),
          (r[13] = g),
          (r[14] = h),
          (r[15] = m),
          (r[16] = u),
          (r[17] = p),
          (r[18] = i))
      } else i = r[18]
      return (
        r[28] !== o || r[29] !== i
          ? ((c = (0, a.jsx)(P.uB.Group, {
              className: "flex flex-col gap-1 select-none",
              "data-command-menu-has-results": !0,
              "data-command-menu-search-section": "people",
              heading: o,
              children: i,
            })),
            (r[28] = o),
            (r[29] = i),
            (r[30] = c))
          : (c = r[30]),
        c
      )
    }
    function ou(e) {
      let t,
        o,
        i,
        c,
        r,
        s,
        d,
        l,
        m,
        u,
        p,
        h = (0, n.c)(38),
        {
          close: g,
          command: f,
          description: x,
          icon: w,
          onOpenChatSearch: M,
          onRunCommand: v,
          originElement: b,
          originPanel: y,
          searchKeywords: S,
          title: D,
        } = e,
        C = (0, P.wo)(op)
      if (
        (h[0] !== S ? ((t = S ?? []), (h[0] = S), (h[1] = t)) : (t = h[1]),
        h[2] !== f.id || h[3] !== x || h[4] !== w || h[5] !== C || h[6] !== t || h[7] !== D)
      ) {
        let e = [x, ...t],
          n = (0, Q.WE)(C),
          m = 0 === n(D) ? N()(e, n) : void 0,
          u = w ?? tZ[f.id] ?? X.h2I
        if ("asset" in u) {
          let e
          ;(h[15] !== u.asset
            ? ((e = (0, a.jsx)(J.I, { className: "shrink-0", asset: u.asset, "aria-hidden": !1 })),
              (h[15] = u.asset),
              (h[16] = e))
            : (e = h[16]),
            (c = e))
        } else if (u === X.QC9) {
          let e
          ;(h[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(X.QC9, {})), (h[17] = e))
            : (e = h[17]),
            (c = e))
        } else if (u === X.h2I) {
          let e
          ;(h[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(X.h2I, {})), (h[18] = e))
            : (e = h[18]),
            (c = e))
        } else o = u
        ;((i = Y.y),
          (r = D),
          (s = e),
          (d = D),
          (l = null == m || 0 === n(m) ? void 0 : (0, a.jsx)(Z._, { text: m, query: C, shouldAdjustStart: !0 })),
          (h[2] = f.id),
          (h[3] = x),
          (h[4] = w),
          (h[5] = C),
          (h[6] = t),
          (h[7] = D),
          (h[8] = o),
          (h[9] = i),
          (h[10] = c),
          (h[11] = r),
          (h[12] = s),
          (h[13] = d),
          (h[14] = l))
      } else ((o = h[8]), (i = h[9]), (c = h[10]), (r = h[11]), (s = h[12]), (d = h[13]), (l = h[14]))
      return (
        h[19] !== g || h[20] !== f.id || h[21] !== M || h[22] !== v || h[23] !== b || h[24] !== y
          ? ((m = () => {
              if (null != v) return void v(f.id)
              if ("canvas.prompt" === f.id || "toggleFileTreePanel" === f.id) {
                if (
                  ((0, F.flushSync)(g),
                  b instanceof HTMLElement &&
                    b.isConnected &&
                    (b.focus({ preventScroll: !0 }),
                    b.ownerDocument.activeElement === b && (0, tu.d1)(f.id, "command_menu")))
                )
                  return
                ;(null != y || "toggleFileTreePanel" === f.id) &&
                  (0, tu.d1)(f.id, "command_menu", { originPanel: y ?? void 0 })
                return
              }
              if ("previousThread" === f.id || "nextThread" === f.id) {
                ;((0, F.flushSync)(g), (0, tu.d1)(f.id, "command_menu"))
                return
              }
              ;("searchChats" === f.id && M(), (0, tu.d1)(f.id, "command_menu"), "searchChats" !== f.id && g())
            }),
            (h[19] = g),
            (h[20] = f.id),
            (h[21] = M),
            (h[22] = v),
            (h[23] = b),
            (h[24] = y),
            (h[25] = m))
          : (m = h[25]),
        h[26] !== f.id ? ((u = (0, a.jsx)(tm.M, { commandId: f.id })), (h[26] = f.id), (h[27] = u)) : (u = h[27]),
        h[28] !== o ||
        h[29] !== i ||
        h[30] !== c ||
        h[31] !== r ||
        h[32] !== s ||
        h[33] !== d ||
        h[34] !== l ||
        h[35] !== m ||
        h[36] !== u
          ? ((p = (0, a.jsx)(i, {
              value: r,
              keywords: s,
              title: d,
              secondaryContent: l,
              onSelect: m,
              LeftIcon: o,
              leftAccessory: c,
              rightAccessory: u,
            })),
            (h[28] = o),
            (h[29] = i),
            (h[30] = c),
            (h[31] = r),
            (h[32] = s),
            (h[33] = d),
            (h[34] = l),
            (h[35] = m),
            (h[36] = u),
            (h[37] = p))
          : (p = h[37]),
        p
      )
    }
    function op(e) {
      return e.search
    }
    function oh() {
      let e,
        t = (0, n.c)(1)
      return (0, P.wo)(og)
        ? null
        : (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "absolute inset-0 hidden",
                "aria-hidden": !0,
                "data-command-menu-search-loading": !0,
                children: (0, a.jsx)(et.W, {
                  className: "h-full w-full",
                  children: (0, a.jsx)(en.y, { className: "icon-sm" }),
                }),
              })),
              (t[0] = e))
            : (e = t[0]),
          e)
    }
    function og(e) {
      return e.filtered.count > 0
    }
    let of = (0, G.YK)({
      thread: {
        id: "codex.commandGroup.thread",
        defaultMessage: "Chat",
        description: "Command group label in the command menu",
      },
      navigation: {
        id: "codex.commandGroup.navigation",
        defaultMessage: "Navigation",
        description: "Command group label in the command menu",
      },
      panels: {
        id: "codex.commandGroup.panels",
        defaultMessage: "Panels",
        description: "Command group label in the command menu",
      },
      workspace: {
        id: "codex.commandGroup.workspace",
        defaultMessage: "Project",
        description: "Command group label in the command menu",
      },
      configure: {
        id: "codex.commandGroup.configure",
        defaultMessage: "Configure",
        description: "Command group label in the command menu",
      },
      app: {
        id: "codex.commandGroup.app",
        defaultMessage: "App",
        description: "Command group label in the command menu",
      },
      skills: {
        id: "codex.commandGroup.skills",
        defaultMessage: "Skills",
        description: "Command group label in the command menu",
      },
      spaceSearchPlaceholder: {
        id: "codex.commandMenu.spaceSearchPlaceholder",
        defaultMessage: "Search Space",
        description: "Placeholder for finding files and Pages in Space",
      },
      pageSearchPlaceholder: {
        id: "codex.commandMenu.pageSearchPlaceholder",
        defaultMessage: "Search pages",
        description: "Placeholder for the Pages tab in the command menu",
      },
      chatSearchPlaceholder: {
        id: "codex.commandMenu.chatSearchPlaceholder",
        defaultMessage: "Search chats",
        description: "Placeholder text for the command menu task search input",
      },
      peopleSearchPlaceholder: {
        id: "codex.commandMenu.peopleSearchPlaceholder",
        defaultMessage: "Search people",
        description: "Placeholder for searching workspace members in the People tab",
      },
      fileSearchPlaceholder: {
        id: "codex.commandMenu.fileSearchPlaceholder",
        defaultMessage: "Search files",
        description: "Placeholder for searching file names, paths, or contents in the selected location",
      },
      actionSearchPlaceholder: {
        id: "codex.commandMenu.actionSearchPlaceholder",
        defaultMessage: "Search actions",
        description: "Placeholder for searching commands and settings in the search window",
      },
      recentlyViewedThreadsGroupLabel: {
        id: "codex.commandMenu.recentlyViewedThreadsGroup",
        defaultMessage: "Recently viewed chats",
        description: "Group label for recently viewed task results in the command menu",
      },
      unifiedSearchPlaceholder: {
        id: "codex.commandMenu.unifiedSearchPlaceholder",
        defaultMessage: "Search ChatGPT",
        description: "Placeholder text for the unified command menu search input",
      },
      tuckAwayPet: {
        id: "codex.command.hideMiniOverlay",
        defaultMessage: "Hide Mini",
        description: "Command menu item to hide Mini, the floating compact Codex panel, when it is visible",
      },
      tuckAwayPetDescription: {
        id: "codex.commandDescription.tuckAwayMiniOverlay",
        defaultMessage: "Tuck away Mini",
        description: "Description for the command menu item to close Mini, the floating compact panel, when it is open",
      },
      petSearchAlias: {
        id: "codex.commandMenu.miniPetSearchAlias",
        defaultMessage: "pet pets",
        description:
          "Search keywords for Mini, the floating compact panel previously called Pet or Pets; include the localized singular and plural names",
      },
    })
  },
  bWRV(e, t, o) {
    var a = o("QosV"),
      n = o("zd8w")
    o.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            o,
            i,
            c,
            r = (0, a.c)(11),
            { enabled: s, pending: d, search: l, searchEventLogger: m } = e
          ;(r[0] !== s || r[1] !== d || r[2] !== l || r[3] !== m
            ? ((t = () => {
                s && m.trackWorkspaceMemberSearch(l, d, d ? void 0 : 0)
              }),
              (o = [s, d, l, m]),
              (r[0] = s),
              (r[1] = d),
              (r[2] = l),
              (r[3] = m),
              (r[4] = t),
              (r[5] = o))
            : ((t = r[4]), (o = r[5])),
            (0, n.useLayoutEffect)(t, o),
            r[6] !== s || r[7] !== l || r[8] !== m
              ? ((i = () => {
                  if (s) return () => m.trackWorkspaceMemberSearch(l, !1)
                }),
                (c = [s, l, m]),
                (r[6] = s),
                (r[7] = l),
                (r[8] = m),
                (r[9] = i),
                (r[10] = c))
              : ((i = r[9]), (c = r[10])),
            (0, n.useLayoutEffect)(i, c))
        },
      },
    )
  },
  Fk6e(e, t, o) {
    var a = o("D7Ms"),
      n = o("SZCv"),
      i = o.n(n),
      c = o("zTeN"),
      r = o("ASxG"),
      s = o("SPnB"),
      d = o("eFn4"),
      l = o("Ghh3"),
      m = o("rTPf"),
      u = o("pyoT"),
      p = o("OWtl"),
      h = o("O666"),
      g = o("kpIY"),
      f = o("Nwp9"),
      x = o("rvFo")
    let w = (0, c.un)(p.u, ({ get: e }) => {
        let t = e(s.m0)
        if ("allowed" !== t.status || !("accountId" in t) || "workspace" !== t.accountStructure) return null
        let { data: o } = e(d.Jk, t.accountId)
        return o?.member_profiles_enabled !== !1 && o?.member_profiles_sharing === "workspace" ? t.accountId : null
      }),
      M = r.object({
        id: r.string().min(1),
        account_user_id: r.string().min(1),
        avatar_url: r
          .url({ protocol: /^https$/ })
          .nullable()
          .catch(null),
        name: r.string().nullable().default(null),
        profile_username: r.string().min(1),
        profile_url: r.string().regex(/^\/(?:w\/[^/\\?#]+\/|u\/)[^/\\?#]+$/),
      }),
      v = r.record(r.string(), r.unknown()),
      b = r.object({ member: M, openedAt: r.number(), confirmedAt: r.number() }),
      y = (0, f.Kn)((e) => e, void 0),
      S = (0, c.bD)(p.u, (e) => !1, {
        onMount(e, { key: t }) {
          let o = t - Date.now()
          if (o <= 0) return void e(!0)
          let a = setTimeout(() => e(!0), o)
          return () => clearTimeout(a)
        },
      }),
      D = (0, c.un)(p.u, ({ get: e }) => {
        let t = e(w),
          o = e(s.o8)
        return null != t &&
          t === e(s.chatGptAuthenticatedAccountId$) &&
          null != o &&
          o === e(s.chatGptAuthenticatedUserId$)
          ? `workspace-member-search-opens-v1:${JSON.stringify([t, o])}`
          : null
      }),
      C = (0, c.i1)(p.u, (e, { get: t }) => {
        let o = e.trim().toLowerCase()
        if (!o || "@" === o || o.length > 256) return []
        let a = t(D)
        return null == a
          ? []
          : Object.values(v.safeParse(t(y, a)).data ?? {})
              .reverse()
              .flatMap((e) => {
                let a = b.safeParse(e).data
                if (!a || !T(a.member, o)) return []
                let n = a.confirmedAt + 864e5
                return Date.now() < n && !t(S, n) ? [a] : []
              })
              .sort((e, t) => t.openedAt - e.openedAt)
              .slice(0, 5)
              .map(({ member: e }) => ({ ...e, email: null }))
      })
    function T(e, t) {
      return !!e.name?.toLowerCase().includes(t) || e.profile_username.toLowerCase().startsWith(t.replace(/^@/, ""))
    }
    let k = N("command_menu_all_tab"),
      P = N("command_menu_people_tab"),
      _ = N("profile_page"),
      A = (0, c.vU)(p.u, (e, { get: t, scope: o }) => {
        let n = t(w),
          i = t(s.o8),
          c = e.trim()
        return {
          queryKey: ["workspace-member-search", n, i, c],
          queryFn:
            null == n || null == i || 0 === c.length || c.length > 256
              ? a.hT
              : ({ signal: e }) => j({ scope: o, accountId: n, limit: 10, offset: 0, query: c, signal: e, userId: i }),
          staleTime: x.D.ONE_MINUTE,
          retry: !1,
        }
      }),
      I = (0, c.N3)(p.u, (e, { get: t, scope: o }) => {
        let n = t(w),
          i = t(s.o8),
          c = e.trim()
        return {
          queryKey: ["workspace-member-search-pages", n, i, c],
          initialPageParam: 0,
          queryFn:
            null == n || null == i || 0 === c.length || c.length > 256
              ? a.hT
              : ({ pageParam: e, signal: t }) =>
                  j({ scope: o, accountId: n, limit: 20, offset: e, query: c, signal: t, userId: i }),
          getNextPageParam: (e) => (e.has_more ? e.offset + e.limit : void 0),
          staleTime: x.D.ONE_MINUTE,
          retry: !1,
        }
      })
    async function j({ scope: e, accountId: t, limit: o, offset: a, query: n, signal: c, userId: r }) {
      let d = e.get(D),
        p = null == d ? void 0 : (0, g.TB)(d),
        h = await l.Request.safeGet("/spaces/people", {
          expectedIdentity: { accountId: t, userId: r },
          parameters: {
            query: { account_id: t, include_profile_details: !0, profiles_only: !0, query: n, limit: o, offset: a },
          },
          expectedErrorStatuses: [403, 404],
          signal: c,
        })
      if ((c.throwIfAborted(), e.get(u.spaceAccountId$) === t && e.get(s.chatGptAuthenticatedUserId$) === r))
        for (let t of (null != p &&
          null != d &&
          e.get(D) === d &&
          (function (e, t, o, a) {
            let n = v.safeParse(t).data
            if (!n) return
            let c = v.safeParse((0, g.TB)(e)).data,
              r = {}
            for (let [e, t] of Object.entries(n)) {
              let n = b.safeParse(t).data,
                s = c?.[e],
                d = b.safeParse(s).data
              if (!d || !n || d.confirmedAt !== n.confirmedAt || !i()(d.member, n.member)) continue
              let l = a.items.find((t) => t.account_user_id === e)
              if (l) {
                let t = M.safeParse(l).data
                t
                  ? (r[e] = { expectedValue: s, value: { ...d, member: t, confirmedAt: Date.now() }, updateOnly: !0 })
                  : (r[e] = { delete: !0, expectedValue: s })
              } else
                0 === a.offset &&
                  !a.has_more &&
                  "@" !== o &&
                  T(d.member, o.toLowerCase()) &&
                  (r[e] = { delete: !0, expectedValue: s })
            }
            Object.keys(r).length > 0 && (0, g.EG)(e, { entries: r })
          })(d, p, n, h),
        h.items))
          t.avatar_url && e.query.setData(m.Ks, t.account_user_id, (e) => ({ ...e, ...t }))
      return h
    }
    function N(e) {
      return (0, c.un)(p.u, ({ get: t }) => null != t(w) && t(h.H$, { layer: "1030612179", parameter: e }))
    }
    o.d(
      t,
      {},
      {
        B5: function (e, t, o = !1) {
          let a = e.get(D),
            n = M.safeParse(t).data
          if (null == a || null == n) return
          let i = Date.now(),
            c = n.account_user_id,
            r = { value: { member: n, openedAt: i, confirmedAt: i } }
          if (o) {
            let e = v.safeParse((0, g.TB)(a)).data?.[c],
              t = b.safeParse(e).data
            if (!t) return
            r = { expectedValue: e, value: { ...t, openedAt: i } }
          }
          ;(0, g.EG)(a, { entries: { [c]: r }, maxEntries: 5, timestampField: "openedAt" })
        },
        CD: w,
        Iq: C,
        O: A,
        Pz: P,
        dE: k,
        k1: I,
        p6: _,
      },
    )
  },
  Nz3U(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("zd8w"),
      c = o("Wf1j"),
      r = o("SgPg"),
      s = o("LhhH"),
      d = o("X3K1"),
      l = o("hlYN"),
      m = o("N0P0")
    o.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            o,
            u,
            p,
            h,
            g,
            f,
            x,
            w,
            M,
            v,
            b,
            y,
            S,
            D,
            C = (0, n.c)(48),
            { avatarSize: T, member: k, onResult: P, query: _ } = e,
            A = void 0 === T ? "md" : T,
            I = (0, c.A)(),
            j = (0, i.useRef)(null),
            N = null != P
          C[0] !== P ? ((t = (e) => P?.(e)), (C[0] = P), (C[1] = t)) : (t = C[1])
          let R = (0, i.useEffectEvent)(t)
          ;(C[2] !== N || C[3] !== R
            ? ((o = () => {
                N && R("received")
              }),
              (C[2] = N),
              (C[3] = R),
              (C[4] = o))
            : (o = C[4]),
            C[5] !== N || C[6] !== k || C[7] !== _
              ? ((u = [N, k, _]), (C[5] = N), (C[6] = k), (C[7] = _), (C[8] = u))
              : (u = C[8]),
            (0, i.useLayoutEffect)(o, u),
            C[9] !== N || C[10] !== R
              ? ((p = () => {
                  let e
                  if (!N) return
                  let t = j.current
                  if (null == t || "u" < typeof IntersectionObserver) return
                  let o = window.setTimeout(() => {
                    e = (0, m.D)(t, () => R("impression"))
                  }, 250)
                  return () => {
                    ;(window.clearTimeout(o), e?.())
                  }
                }),
                (C[9] = N),
                (C[10] = R),
                (C[11] = p))
              : (p = C[11]),
            C[12] !== N || C[13] !== k.account_user_id || C[14] !== _
              ? ((h = [N, k.account_user_id, _]), (C[12] = N), (C[13] = k.account_user_id), (C[14] = _), (C[15] = h))
              : (h = C[15]),
            (0, i.useLayoutEffect)(p, h),
            C[16] !== k.email ? ((g = k.email?.trim()), (C[16] = k.email), (C[17] = g)) : (g = C[17]))
          let E = g
          if (C[18] !== I || C[19] !== k.profile_username) {
            let e = k.profile_username?.trim()
            ;((f = e
              ? I.formatMessage(
                  {
                    id: "profile.usernameValue",
                    defaultMessage: "@{username}",
                    description: "Profile username shown with an at-sign prefix",
                  },
                  { username: e },
                )
              : null),
              (C[18] = I),
              (C[19] = k.profile_username),
              (C[20] = f))
          } else f = C[20]
          let F = f
          C[21] !== E || C[22] !== I || C[23] !== k.name || C[24] !== F
            ? ((x =
                k.name?.trim() ||
                E ||
                F ||
                I.formatMessage({
                  id: "codex.commandMenu.unnamedWorkspaceMember",
                  defaultMessage: "Workspace member",
                  description:
                    "Fallback label for a workspace member in search results when their name, email, and username are unavailable",
                })),
              (C[21] = E),
              (C[22] = I),
              (C[23] = k.name),
              (C[24] = F),
              (C[25] = x))
            : (x = C[25])
          let O = x,
            B = F ?? E
          return (
            C[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, a.jsx)("span", {
                  className: "size-full overflow-hidden rounded-full",
                  children: (0, a.jsx)(d.X, { as: "span", size: "fill" }),
                })),
                (C[26] = w))
              : (w = C[26]),
            C[27] !== A
              ? ((M = (0, a.jsx)(s.e, { alt: "", fallbackIcon: w, name: null, size: A, src: null })),
                (C[27] = A),
                (C[28] = M))
              : (M = C[28]),
            C[29] !== A || C[30] !== k.account_user_id || C[31] !== k.avatar_url || C[32] !== O || C[33] !== M
              ? ((v = (0, a.jsx)(r.T, {
                  avatarUrl: k.avatar_url,
                  colorKey: k.account_user_id,
                  loadingFallback: M,
                  name: O,
                  size: A,
                })),
                (C[29] = A),
                (C[30] = k.account_user_id),
                (C[31] = k.avatar_url),
                (C[32] = O),
                (C[33] = M),
                (C[34] = v))
              : (v = C[34]),
            C[35] !== O || C[36] !== _
              ? ((b = (0, a.jsx)("span", {
                  className: "truncate text-sm leading-5 text-default",
                  children: (0, a.jsx)(l.D, { highlightClassName: "font-semibold text-default", query: _, text: O }),
                })),
                (C[35] = O),
                (C[36] = _),
                (C[37] = b))
              : (b = C[37]),
            C[38] !== O || C[39] !== _ || C[40] !== B
              ? ((y =
                  B && B !== O
                    ? (0, a.jsx)("span", {
                        className: "truncate text-xs text-secondary",
                        children: (0, a.jsx)(l.D, {
                          highlightClassName: "font-medium text-default",
                          query: _,
                          text: B,
                        }),
                      })
                    : null),
                (C[38] = O),
                (C[39] = _),
                (C[40] = B),
                (C[41] = y))
              : (y = C[41]),
            C[42] !== b || C[43] !== y
              ? ((S = (0, a.jsxs)("span", {
                  ref: j,
                  className: "flex min-w-0 flex-1 flex-col gap-0.5 select-none",
                  children: [b, y],
                })),
                (C[42] = b),
                (C[43] = y),
                (C[44] = S))
              : (S = C[44]),
            C[45] !== v || C[46] !== S
              ? ((D = (0, a.jsxs)(a.Fragment, { children: [v, S] })), (C[45] = v), (C[46] = S), (C[47] = D))
              : (D = C[47]),
            D
          )
        },
      },
    )
  },
  gLoR(e, t, o) {
    var a = o("i5ac"),
      n = o.n(a),
      i = o("zTeN"),
      c = o("Qgfj"),
      r = o("SPnB"),
      s = o("OWtl"),
      d = o("UR81"),
      l = o("Fk6e")
    let m = (0, c.zR)({
        id: "profile.workspaceSearch.resultsLabel",
        defaultMessage: "Explore profiles",
        description: "Heading above workspace profile search results",
      }),
      u = (0, i.un)(s.u, ({ get: e }) => {
        let t = e(r.e0)
        return null != t && "unknown" !== t && !(0, d.J8)(t) && null != e(l.CD) && null != e(r.o8)
      }),
      p = (0, i.i1)(s.u, ({ search: e, debouncing: t }, { get: o }) => {
        let a = null != e && (e.length > 0 || o(u)),
          i = e || "@",
          c = a && !t && i.length <= 256 ? o(l.k1, i) : null,
          r = n()(
            c?.data?.pages.flatMap(({ items: e }) =>
              e.flatMap((e) => {
                let t = e.profile_url?.trim()
                return t ? [{ member: e, profileUrl: t }] : []
              }),
            ) ?? [],
            ({ member: e }) => e.account_user_id,
          )
        return {
          members: r,
          hasLoadedResults: c?.data != null,
          showSearchResults: a,
          isLoading: a && (t || (0 === r.length && null != c && (c.isPending || c.isFetching))),
          isError: c?.isError === !0 && null == c.data,
          hasNextPage: c?.hasNextPage === !0 && !c.isFetchNextPageError,
          isFetchingNextPage: c?.isFetchingNextPage === !0,
          isFetchNextPageError: c?.isFetchNextPageError === !0,
          fetchNextPage: () => {
            c?.fetchNextPage()
          },
        }
      })
    o.d(
      t,
      {},
      {
        E8: p,
        RE: m,
        Vh: function (e) {
          e.get(u) &&
            null == e.query.getData(l.k1, "@") &&
            e.queryClient.prefetchInfiniteQuery({ ...e.query.getOptions(l.k1, "@"), pages: 1 })
        },
      },
    )
  },
  nRNm(e, t, o) {
    var a = o("ABep"),
      n = o("QosV"),
      i = o("zd8w"),
      c = o("UN1G")
    o.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            o,
            r,
            s,
            d,
            l = (0, n.c)(21),
            { text: m, query: u, shouldAdjustStart: p, fragments: h } = e,
            g = void 0 !== p && p
          l[0] !== u || l[1] !== h || l[2] !== m
            ? ((t = void 0 === h ? (0, c.d7)(m, u) : h), (l[0] = u), (l[1] = h), (l[2] = m), (l[3] = t))
            : (t = l[3])
          let f = t
          if (null == f || 0 === f.length) {
            let e
            return (
              l[4] !== m ? ((e = (0, a.jsx)(a.Fragment, { children: m })), (l[4] = m), (l[5] = e)) : (e = l[5]),
              e
            )
          }
          l[6] !== f[0] || l[7] !== g || l[8] !== m
            ? ((o = g ? f[0].startOffset - Array.from(m.slice(0, f[0].startOffset)).slice(-8).join("").length : 0),
              (l[6] = f[0]),
              (l[7] = g),
              (l[8] = m),
              (l[9] = o))
            : (o = l[9])
          let x = o,
            w = x > 0 ? "…" : ""
          return (
            l[10] !== f || l[11] !== m || l[12] !== x
              ? ((r = f.map((e, t) => {
                  let { startOffset: o, endOffset: n } = e
                  return (0, a.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        m.slice(0 === t ? x : f[t - 1].endOffset, o),
                        (0, a.jsx)("span", { className: "text-default", children: m.slice(o, n) }),
                      ],
                    },
                    o,
                  )
                })),
                (l[10] = f),
                (l[11] = m),
                (l[12] = x),
                (l[13] = r))
              : (r = l[13]),
            l[14] !== f || l[15] !== m
              ? ((s = m.slice(f[f.length - 1].endOffset)), (l[14] = f), (l[15] = m), (l[16] = s))
              : (s = l[16]),
            l[17] !== w || l[18] !== r || l[19] !== s
              ? ((d = (0, a.jsxs)("span", { className: "text-codex-description", children: [w, r, s] })),
                (l[17] = w),
                (l[18] = r),
                (l[19] = s),
                (l[20] = d))
              : (d = l[20]),
            d
          )
        },
      },
    )
  },
  pYUv(e, t, o) {
    var a = o("zKw6"),
      n = o.n(a),
      i = o("DBCl"),
      c = o("bnxy")
    o.d(
      t,
      {},
      {
        $e: function (e) {
          return e.filter((t, o) => {
            let a = n().posix.normalize((0, c.XH)(t))
            return e.every((e, t) => {
              if (t === o) return !0
              let i = n().posix.normalize((0, c.XH)(e))
              return i === a ? t > o : !a.startsWith("/" === i ? i : `${i}/`)
            })
          })
        },
        Bw: function ({
          codexHome: e,
          executionCwd: t,
          isWorktreeMode: o,
          projectRootPaths: a,
          workspaceBrowserRoot: n,
        }) {
          return null != t && (o || (0, i.n9x)(t, e ?? void 0))
            ? [t, ...(0, i.gYy)(a)]
            : a.length > 0
              ? a
              : null == n
                ? []
                : [n]
        },
        pK: function ({
          activeWorkspaceRootPaths: e,
          executionRootPaths: t,
          isProjectless: o,
          isWorktreeMode: a,
          readThreadToolAvailable: n,
        }) {
          if (n) return a ? t : o ? [] : [...e, ...t]
        },
      },
    )
  },
  JM0a(e, t, o) {
    o.d(t, { l: () => p, H: () => u })
    var a = o("zTeN"),
      n = o("ANKV"),
      i = o("WiNP"),
      c = o("aqTO"),
      r = o("Oj9r"),
      s = o("nf3G"),
      d = o("pYUv")
    let l = (0, a.un)(r.GD, ({ get: e, scope: t }) => {
        let o = e(i.V8, {
          conversationId: "local-thread" === t.value.routeKind ? t.value.conversationId : null,
          hostId: e(s.threadHostId$),
        })?.data?.latestWorktree
        return null == o ? (0, d.$e)(e(c.Xi)) : [o.workspaceRoot]
      }),
      m = (0, a.vP)(r.GD, null),
      u = (0, a.un)(r.GD, ({ get: e }) => {
        let t = e(s.threadHostId$),
          o = e(l),
          a = e(m),
          i = a?.projectKey === JSON.stringify([t, o]) ? a.target : null,
          c = "root" !== e(n.YC) ? i : null
        return {
          selectedHostId: i?.hostId ?? t,
          hostId: c?.hostId ?? t,
          roots: null == c ? o : [c.root],
          directory: c?.root ?? null,
          projectRoots: null != c && c.hostId !== t ? [c.root] : o,
        }
      })
    function p(e, t) {
      e.set(m, null == t ? null : { projectKey: JSON.stringify([e.get(s.threadHostId$), e.get(l)]), target: t })
    }
  },
  ubby(e, t, o) {
    var a = o("SRbQ"),
      n = o("zTeN"),
      i = o("GaA7"),
      c = o("OWtl")
    let r = (0, o("Nwp9").m3)("files-content-search-history", []),
      s = (0, n.A4)(
        c.u,
        (e) => ({ matches: [], loading: e.query.trim().length > 0, limited: !1, error: null }),
        (e, { set: t }) => {
          let o,
            n = i.appServices.workspaceSearch
          if (!e.query.trim() || null == n) return
          let c = !1,
            r = setTimeout(() => {
              ;(async () => {
                let i = { stack: [], error: void 0, hasError: !1 }
                try {
                  let r = (0, a.mS)(i, await n.search(e), !1)
                  if (c) return void (await r.cancel())
                  o = r.getReader()
                  let s = []
                  try {
                    for (;;) {
                      let { done: e, value: a } = await o.read()
                      if (e || c) break
                      "match" === a.type
                        ? (s.push(a.match), t({ matches: [...s], loading: !0, limited: !1, error: null }))
                        : t({
                            matches: s,
                            loading: !1,
                            limited: "done" === a.type && a.limited,
                            error: "error" === a.type ? a.code : null,
                          })
                    }
                  } finally {
                    ;(o.releaseLock(), (o = void 0))
                  }
                } catch (e) {
                  ;((i.error = e), (i.hasError = !0))
                } finally {
                  ;(0, a.hk)(i)
                }
              })().catch(() => {
                c || t({ matches: [], loading: !1, limited: !1, error: "search-failed" })
              })
            }, 50)
          return () => {
            ;((c = !0), clearTimeout(r), o?.cancel().catch(() => {}))
          }
        },
        { autoDispose: !0 },
      )
    o.d(t, {}, { P: s, n: r })
  },
  DIdv(e, t, o) {
    var a = o("w7Qu"),
      n = o("bWX0")
    let i = /^external-gdrive:file:([A-Za-z0-9_-]+)$/u,
      c = new Map([
        ["application/vnd.google-apps.document", "document"],
        ["application/vnd.google-apps.presentation", "presentation"],
        ["application/vnd.google-apps.spreadsheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "presentation"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "spreadsheets"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "document"],
      ]),
      r = new Set([
        "c",
        "conf",
        "cpp",
        "css",
        "go",
        "h",
        "hpp",
        "java",
        "js",
        "json",
        "jsonl",
        "jsx",
        "log",
        "py",
        "rb",
        "rs",
        "sh",
        "ts",
        "tsx",
        "txt",
        "xml",
        "yaml",
        "yml",
      ]),
      s = new Set([
        "application/javascript",
        "application/json",
        "application/ld+json",
        "application/x-javascript",
        "application/x-ndjson",
        "application/xml",
        "application/yaml",
        "application/yml",
        "text/javascript",
      ]),
      d = new Map([
        ["application/x-ipynb+json", "ipynb"],
        ["application/vnd.ms-excel.sheet.macroenabled.12", "xlsx"],
        ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"],
        ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"],
        ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
        ["text/csv", "csv"],
        ["text/tab-separated-values", "tsv"],
      ])
    function l(e) {
      let t = m(e)
      if (null != t) {
        let e = d.get(t)
        if (null != e) return e
      }
      let o = (null == e.file_extension ? null : (0, a.Yg)(`file.${e.file_extension}`)) ?? (0, a.Yg)(e.file_name)
      switch (o) {
        case "csv":
        case "docx":
        case "ipynb":
        case "pptx":
        case "tsv":
        case "xlsx":
          return o
        case "pdf":
        case "tex":
        case null:
          return null
      }
    }
    function m(e) {
      return e.mime_type?.split(";")[0]?.trim().toLowerCase() || null
    }
    o.d(
      t,
      {},
      {
        CR: function (e) {
          var t, o, a, i
          let c, d, u
          if ("deep_research_report" === e.library_artifact_type) return "deep-research"
          if (((c = m((t = e))), "image" === t.library_file_category || c?.startsWith("image/") === !0)) return "image"
          if (
            ((d = m((o = e))), "pdf" === o.library_file_category || "application/pdf" === d || (0, n.ZH)(o.file_name))
          )
            return "pdf"
          if (null != l(e)) return "artifact"
          let p = e.file_extension ? `${e.file_name}.${e.file_extension}` : e.file_name
          if ((0, n.e$)(p) || "text/markdown" === m(e)) return "markdown"
          let h = (0, n.Zo)(p)
          return "html" === h || "htm" === h || "text/html" === m(e)
            ? "html"
            : ((a = e),
                (i = h),
                (u = m(a)),
                "text" === a.library_file_category ||
                  u?.startsWith("text/") === !0 ||
                  (null != u && s.has(u)) ||
                  (null != i && r.has(i)))
              ? "text"
              : "unsupported"
        },
        FE: l,
        gv: function ({ fileId: e, mimeType: t, sourceUrl: o }) {
          let a = i.exec(e)?.[1],
            n = t?.split(";")[0]?.trim().toLowerCase(),
            r = null == n ? void 0 : c.get(n)
          if (null == a || null == r) return null
          let s = `https://docs.google.com/${r}/d/${a}/preview`
          if (null == o) return s
          if (!URL.canParse(o)) return null
          let d = new URL(o),
            l = d.searchParams.get("resourcekey")
          return null == l
            ? s
            : "https://docs.google.com" !== d.origin && "https://drive.google.com" !== d.origin
              ? null
              : `${s}?${new URLSearchParams({ resourcekey: l })}`
        },
      },
    )
  },
  GJ52(e, t, o) {
    var a = o("IgxH")
    o.d(t, { h: () => a.h })
  },
  tUjg(e, t, o) {
    let a = (0, o("Qgfj").YK)({
      pageOpenFailed: {
        id: "codex.chatGptSearch.pageOpenFailed",
        defaultMessage: "Unable to open this page",
        description: "Toast when a Page selected from global search cannot be opened in its Space",
      },
      dialogDescriptionWithSpaces: {
        id: "codex.chatGptSearch.dialogDescriptionWithSpaces",
        defaultMessage: "Search your chats, projects, images, documents, and spaces",
        description:
          "Visually hidden description for global search when Pages and files in Spaces are included. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      spaceFile: {
        id: "codex.chatGptSearch.spaceFile",
        defaultMessage: "File in Space",
        description:
          "Result-type label beside a file found in a Space in global search. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
    })
    o.d(t, {}, { h: a })
  },
  idI8(e, t, o) {
    var a = o("zd8w"),
      n = o("khOd"),
      i = o("eShZ"),
      c = o("r9ga"),
      r = o("pyoT")
    o.d(
      t,
      {},
      {
        openGlobalSearchSpacePage: async function (e, t, o, s, d, l) {
          let m, u
          if (!d()) return
          let p = e.get(r.spaceAccountId$)
          if (null != p) {
            if (null != s.space_id)
              try {
                let t = await e.queryClient.fetchQuery({
                  ...e.query.getOptions(r.spaceQuery$, s.space_id),
                  staleTime: 0,
                })
                if (null == t.root_page_id) throw Error("space_unavailable")
                m = t.root_page_id
              } catch (e) {
                if (!(e instanceof i.fk) || ![403, 404, 410].includes(e.status)) throw e
                u = e
              }
            if (null == m) {
              if (!d()) return
              let o = await e.queryClient.fetchQuery({
                ...e.query.getOptions(r.spacePageAncestryQuery$, s.page_id),
                staleTime: 0,
              })
              if (o.metadata.page_id !== s.page_id || !o.metadata.access.can_read || null != o.metadata.deleted_at)
                throw u ?? Error("page_unavailable")
              if (d()) {
                if (null != l) return void l(s.page_id)
                let o = { spaceSidebarAccountId: p, sidebarArea: e.get(n.GB) ? "space" : void 0 },
                  i = (0, c.mI)(e, s.page_id)
                ;(0, a.startTransition)(() => {
                  t(i, { state: o })
                })
              }
              return
            }
            if (d()) {
              if (null != l) return void l(s.page_id)
              ;(0, c.C_)(e, t, o, p, m, s.page_id)
            }
          }
        },
      },
    )
  },
  rTPf(e, t, o) {
    var a = o("CpsU"),
      n = o.n(a),
      i = o("zTeN"),
      c = o("DBCl"),
      r = o("SPnB"),
      s = o("Ghh3"),
      d = o("pyoT"),
      l = o("AOG7"),
      m = o("OWtl"),
      u = o("Wuyk"),
      p = o("rvFo")
    let h = (0, i.T1)(m.u, ({ accountId: e, userId: t }, { scope: o }) => {
        let a = null
        return (i, r) => {
          r.throwIfAborted()
          let l = (0, c.udX)()
          if (a?.account?.signal.aborted || null == a) {
            let c = { lookups: [{ accountUserId: i, signal: r, result: l }] }
            a = c
            let m = (0, d.watchSpaceAccount)(o, e, t)
            ;((c.account = m),
              setTimeout(() => {
                a === c && (a = null)
                let t = c.lookups.filter((e) => !e.signal.aborted || (e.result.reject(e.signal.reason), !1))
                Promise.all(
                  n()(t, 50).map(async (t) => {
                    try {
                      m.signal.throwIfAborted()
                      let o = await s.Request.safeGet("/spaces/people", {
                        parameters: {
                          query: {
                            account_id: e,
                            include_profile_details: !0,
                            account_user_ids: t.map((e) => e.accountUserId),
                            limit: t.length,
                          },
                        },
                        signal: m.signal,
                      })
                      for (let e of (m.signal.throwIfAborted(), t))
                        e.result.resolve(o.items.find((t) => t.account_user_id === e.accountUserId) ?? null)
                    } catch (e) {
                      for (let o of t) o.result.reject(e)
                    }
                  }),
                ).finally(m.stop)
              }, 0))
          } else a.lookups.push({ accountUserId: i, signal: r, result: l })
          return l.promise
        }
      }),
      g = (0, i.vU)(m.u, (e, { get: t }) => {
        let o = t(d.spaceAccountId$),
          a = t(r.chatGptAuthenticatedUserId$),
          n = t(r.kf),
          i = null == o ? null : t(h, { accountId: o, userId: a })
        return {
          enabled: null != o && null != a && "loaded" === n.status && "workspace" === n.structure,
          queryKey: ["space-person", o, a, e],
          staleTime: 3e5,
          retry: u.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (null == i) throw Error("account id is required")
            let o = await i(e, t)
            return (t.throwIfAborted(), o)
          },
        }
      }),
      f = (0, i.vU)(m.u, (e, { get: t, scope: o }) => {
        let a = t(d.spaceAccountId$),
          n = t(r.chatGptAuthenticatedUserId$)
        return {
          enabled: null != a && e.length > 0,
          queryKey: ["space-people", a, n, e],
          staleTime: p.D.THIRTY_SECONDS,
          gcTime: p.D.ONE_MINUTE,
          retry: u.kh,
          refetchOnMount: !0,
          queryFn: async ({ signal: t }) => {
            if (
              (await new Promise((e, o) => {
                let a = () => {
                    ;(clearTimeout(n), o(new DOMException("Aborted", "AbortError")))
                  },
                  n = setTimeout(() => {
                    ;(t.removeEventListener("abort", a), e())
                  }, 150)
                ;(t.addEventListener("abort", a, { once: !0 }), t.aborted && a())
              }),
              null == a)
            )
              throw Error("account id is required")
            let i = (0, d.watchSpaceAccount)(o, a, n),
              c = AbortSignal.any([t, i.signal])
            try {
              c.throwIfAborted()
              let t = await (0, l.We)(a, e, c)
              for (let e of (c.throwIfAborted(), t)) {
                let t = o.query.snapshot(g, e.account_user_id),
                  a = t.getData(),
                  n = e.profile_username === a?.profile_username,
                  i = {
                    ...a,
                    ...e,
                    name: e.name ?? a?.name ?? null,
                    profile_username: n ? a?.profile_username : null,
                    profile_url: n ? a?.profile_url : null,
                  }
                ;((i.avatar_url = i.avatar_url ?? a?.avatar_url),
                  t.setData(i, { updatedAt: n ? (o.queryClient.getQueryState(t.queryKey)?.dataUpdatedAt ?? 0) : 0 }))
              }
              return t.map((e) => ({ ...e, name: e.name ?? null }))
            } finally {
              i.stop()
            }
          },
        }
      }),
      x = (0, i.i1)(m.u, (e, { get: t }) =>
        null == e || null == t(d.spaceAccountId$) ? null : (t(g, e).data?.avatar_url ?? null),
      ),
      w = (0, i.i1)(m.u, (e, { get: t }) => (null == e ? null : t(g, e).data?.name?.trim() || null))
    o.d(t, {}, { DC: f, Ks: g, ik: w, tg: x })
  },
  ZsYZ(e, t, o) {
    var a = o("SZCv"),
      n = o.n(a),
      i = o("zTeN"),
      c = o("RaBo"),
      r = o("SPnB"),
      s = o("OWtl"),
      d = o("khOd"),
      l = o("OMIV"),
      m = o("eShZ"),
      u = o("PVyj"),
      p = o("v4UZ"),
      h = o("N8b3"),
      g = o("e1xH"),
      f = o("jAir"),
      x = o("MdGo"),
      w = o("MvVt"),
      M = o("ELpK"),
      v = o("pyoT")
    let b = (0, i.un)(s.u, ({ get: e }) => e(v.spacesQuery$).data?.items.map((e) => e.root_page_id), { isEqual: n() }),
      y = (0, i.un)(
        s.u,
        ({ get: e }) => {
          if (!e(d.GB)) return
          let t = e(b),
            o = e(u.aP, { accountId: e(v.spaceAccountId$), userId: e(r.chatGptAuthenticatedUserId$) }),
            a = e(l.JW, "2881922323") && "available" === e(c.ND),
            n = new Set([
              ...(t ?? []),
              ...e(v.pinnedSpacePageIds$),
              ...e(C).map((e) => e.id),
              ...(0 === o.length ? [] : (0, u.p9)(e(v.visibleSpacePages$)?.items ?? [], o)),
            ]),
            i = e(w.QI)
          return i
            ?.filter(({ id: o, file: i }) => {
              if (null != i) {
                if ("site" !== i.node.library_artifact_type) return !0
                let e = i.node.site_metadata
                return a && e?.status === "active" && !!e.live_url && null == i.node.trashed_at
              }
              if (null == t && e(v.spacesQuery$).isError) return !1
              let c = e(x.rk, { source: { kind: "catalog" }, pageId: o }) ?? e(v.loadedSpacePageMetadata$, o)
              return (
                !n.has(o) &&
                (null == c || (null == c.deleted_at && c.access.can_read && (e(g.bd) || null == c.site_project_id)))
              )
            })
            .map(({ id: e, file: t }) => ({ id: e, file: t }))
        },
        { isEqual: n() },
      ),
      S = (0, i.i1)(s.u, (e, { get: t }) => t(w.QI)?.find((t) => t.id === e)?.pageTitle),
      D = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let { data: o } = t(v.spacePageAncestryQuery$, e),
            a = o?.metadata.access.can_read
              ? o.metadata
              : (t(x.rk, { source: { kind: "catalog" }, pageId: e }) ?? o?.metadata)
          if (null != a && null == a.deleted_at && a.access.can_read && (t(g.bd) || null == a.site_project_id)) return a
        },
        { isEqual: n() },
      ),
      C = (0, i.un)(s.u, ({ get: e }) => e(h.TA).map(({ id: e, serverSpaceId: t }) => ({ id: e, serverSpaceId: t })), {
        isEqual: n(),
      }),
      T = (0, i.i1)(s.u, (e, { get: t }) => t(h.TA).find((t) => t.id === e), { isEqual: n() }),
      k = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let o = t(v.spacePageContext$, e)
          return {
            rootPageId: null === o.space ? null : o.space?.root_page_id,
            missingAncestorPageId: o.missingAncestorPageId,
          }
        },
        { isEqual: n() },
      ),
      P = (0, i.un)(
        s.u,
        ({ get: e }) =>
          e(w.QI)?.some(({ id: t, file: o }) => {
            if (null != o) return !1
            let a = e(x.rk, { source: { kind: "catalog" }, pageId: t }) ?? e(v.loadedSpacePageMetadata$, t)
            if (null != a) return null != a.deleted_at || !a.access.can_read
            let { error: n, errorUpdatedAt: i } = e(v.spacePageAncestryQuery$, t, { enabled: !1 })
            return (
              n instanceof m.fk &&
              [403, 404, 410].includes(n.status) &&
              i > 0 &&
              e(w.rC, { enabled: !1 }).dataUpdatedAt > i
            )
          }) ?? !1,
      ),
      _ = (0, i.i1)(
        s.u,
        (e, { get: t }) => {
          let o = t(v.spacesQuery$)
          return {
            hasListedPages: e && t(v.spacePagesComplete$),
            hasMorePages: e && t(v.spacePagesHasMore$),
            hasCatalogTree: null != o.data || null != t(v.spacePageTreeSpaces$),
            hasPages: e && null != t(v.visibleSpacePages$),
            hasSpaces: null != o.data,
            spacesError: o.isError,
          }
        },
        { isEqual: n() },
      ),
      A = (0, i.i1)(
        s.u,
        ({ personal: e, browse: t, rootPageId: o, query: a = "" }, { get: n }) => {
          let i = n(x.c, { kind: "catalog" }),
            c = i?.spaces.find((e) => e.rootPageId === o),
            r = new Set(i?.allLoosePageIds),
            s = n(v.visibleSpacePages$)?.items,
            d = e && n(p.T).incremental_discovery && a.trim() ? n(M.JC, a) : void 0,
            l = d?.data,
            m = new Map(s?.map((e) => [e.page_id, e]))
          for (let e of l ?? []) {
            let t = e
            for (let o of [m.get(e.page_id), n(v.loadedSpacePageMetadata$, e.page_id)])
              null != o &&
                (!o.access.can_read ||
                  null != o.deleted_at ||
                  (t.access.can_read && null == t.deleted_at && (0, f.gN)(o, t))) &&
                (t = o)
            ;(m.set(t.page_id, t),
              null == t.drive_space_id && "space" !== t.drive_scope ? r.add(t.page_id) : r.delete(t.page_id))
          }
          let u =
            null == s && null == l
              ? void 0
              : Array.from(m.values()).filter(
                  (a) =>
                    null == a.deleted_at &&
                    a.access.can_read &&
                    (n(g.bd) || null == a.site_project_id) &&
                    (e
                      ? r.has(a.page_id)
                      : t ||
                        a.page_id === o ||
                        (null != c && i?.spaceIdsByPageId.get(a.page_id)?.has(c.spaceId) === !0)),
                )
          return {
            pages: u,
            spaces: n(v.spacesQuery$).data?.items.filter((a) => !e && (t || a.root_page_id === o)),
            pagesById: new Map(u?.map((e) => [e.page_id, e])),
            serverDataUpdatedAt: d?.dataUpdatedAt ?? 0,
          }
        },
        { isEqual: n() },
      )
    o.d(t, {}, { $L: D, AA: T, Dr: k, E7: _, IF: y, Ri: S, bn: C, cl: P, up: A })
  },
  mSaF(e, t, o) {
    var a = o("iRMi"),
      n = o("yGJW")
    let i = {
      command_menu_all: a.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_COMMAND_MENU_ALL,
      command_menu_people: a.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_COMMAND_MENU_PEOPLE,
      profile_search: a.CodexProfileViewEntryPoint.CODEX_PROFILE_VIEW_ENTRY_POINT_PROFILE_SEARCH,
    }
    o.d(
      t,
      {},
      {
        y: function (e, t) {
          return ((0, n.yy)(e, a.CodexProfilePageEntrypointClicked, { source: t }), { profileEntryPoint: i[t] })
        },
      },
    )
  },
  AOG7(e, t, o) {
    var a = o("QosV"),
      n = o("T0Rc"),
      i = o("EOo5"),
      c = o("rvFo"),
      r = o("HFSu"),
      s = o("GEsy"),
      d = o("eShZ")
    async function l(e, t, o, { includeProfilePhotos: a = !1, includeTotal: n, limit: i = 10 } = {}) {
      return (
        await r.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: i, offset: 0, query: t, include_profile_photos: a, include_total: n },
          },
          signal: o,
        })
      ).items
    }
    o.d(
      t,
      {},
      {
        AB: l,
        C4: async function (e, t, o) {
          let a = t.trim().toLowerCase(),
            n = await l(e, a, o)
          return n.find((e) => e.email?.trim().toLowerCase() === a)?.account_user_id
        },
        Nc: function (e, t) {
          let o,
            d,
            l,
            m,
            u,
            p,
            h = (0, a.c)(18)
          h[0] !== t ? ((o = void 0 === t ? {} : t), (h[0] = t), (h[1] = o)) : (o = h[1])
          let { includeMemberCounts: g } = o,
            f = void 0 !== g && g,
            { accountId: x, authMethod: w } = (0, i.As)()
          h[2] !== e ? ((d = e.trim()), (h[2] = e), (h[3] = d)) : (d = h[3])
          let M = d,
            v = (0, s.o)(M, 150)
          ;(h[4] !== f ? ((l = f ? ["member-counts"] : []), (h[4] = f), (h[5] = l)) : (l = h[5]),
            h[6] !== x || h[7] !== M || h[8] !== l
              ? ((m = ["workspace-groups", x, M, ...l]), (h[6] = x), (h[7] = M), (h[8] = l), (h[9] = m))
              : (m = h[9]))
          let b = ("chatgpt" === w || "chatgptAuthTokens" === w) && null != x && M.length > 0 && M === v
          return (
            h[10] !== x || h[11] !== f || h[12] !== M
              ? ((u = async (e) => {
                  let { signal: t } = e
                  if (null == x) throw Error("account id is required")
                  return (
                    await r.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: x },
                        query: { limit: 10, offset: 0, query: M, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (h[10] = x),
                (h[11] = f),
                (h[12] = M),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== m || h[15] !== b || h[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: c.D.ONE_MINUTE,
                }),
                (h[14] = m),
                (h[15] = b),
                (h[16] = u),
                (h[17] = p))
              : (p = h[17]),
            (0, n.I)(p)
          )
        },
        Nv: function (e, t) {
          let o,
            r,
            d,
            m,
            u,
            p,
            h = (0, a.c)(18)
          h[0] !== t ? ((o = void 0 === t ? {} : t), (h[0] = t), (h[1] = o)) : (o = h[1])
          let { includeProfilePhotos: g } = o,
            f = void 0 !== g && g,
            { accountId: x, authMethod: w } = (0, i.As)()
          h[2] !== e ? ((r = e.trim()), (h[2] = e), (h[3] = r)) : (r = h[3])
          let M = r,
            v = (0, s.o)(M, 150)
          ;(h[4] !== f ? ((d = f ? ["profile-photos"] : []), (h[4] = f), (h[5] = d)) : (d = h[5]),
            h[6] !== x || h[7] !== M || h[8] !== d
              ? ((m = ["workspace-users", x, M, ...d]), (h[6] = x), (h[7] = M), (h[8] = d), (h[9] = m))
              : (m = h[9]))
          let b = ("chatgpt" === w || "chatgptAuthTokens" === w) && null != x && M.length > 0 && M === v
          return (
            h[10] !== x || h[11] !== f || h[12] !== M
              ? ((u = (e) => {
                  let { signal: t } = e
                  if (null == x) throw Error("account id is required")
                  return l(x, M, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (h[10] = x),
                (h[11] = f),
                (h[12] = M),
                (h[13] = u))
              : (u = h[13]),
            h[14] !== m || h[15] !== b || h[16] !== u
              ? ((p = {
                  queryKey: m,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: u,
                  staleTime: c.D.ONE_MINUTE,
                }),
                (h[14] = m),
                (h[15] = b),
                (h[16] = u),
                (h[17] = p))
              : (p = h[17]),
            (0, n.I)(p)
          )
        },
        We: async function (e, t, o) {
          try {
            return (
              await r.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: o,
              })
            ).items
          } catch (e) {
            if (!(e instanceof d.fk && 404 === e.status)) throw e
          }
          return l(e, t, o)
        },
      },
    )
  },
  BhAX(e, t, o) {
    let a = (0, o("iJY0").a)({
      name: "circle-person-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 1.474609, right: 1.47461, bottom: 1.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.1416C9.39452 4.1416 10.5254 5.27247 10.5254 6.66699C10.5251 8.06129 9.39436 9.19238 8 9.19238C6.60564 9.19238 5.47487 8.06129 5.47461 6.66699C5.47461 5.27247 6.60548 4.1416 8 4.1416ZM8 5.19238C7.18538 5.19238 6.52539 5.85237 6.52539 6.66699C6.52565 7.48139 7.18554 8.1416 8 8.1416C8.81446 8.1416 9.47435 7.48139 9.47461 6.66699C9.47461 5.85237 8.81462 5.19238 8 5.19238Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 11.1924C6.82222 11.1925 5.78204 11.7791 5.15332 12.6768C5.98281 13.1827 6.95721 13.4746 8 13.4746C9.04297 13.4746 10.0171 13.1819 10.8467 12.6758C10.2178 11.7786 9.17734 11.1925 8 11.1924ZM8 2.52539C4.97624 2.52539 2.52539 4.97624 2.52539 8C2.52539 9.60307 3.21462 11.0447 4.3125 12.0459C5.13249 10.8944 6.47756 10.1417 8 10.1416C9.52227 10.1417 10.8667 10.8946 11.6865 12.0459C12.7847 11.0447 13.4746 9.60333 13.4746 8C13.4746 4.97624 11.0238 2.52539 8 2.52539Z" fill="currentColor"/>',
    })
    o.d(t, {}, { $: a })
  },
  lbFQ(e, t, o) {
    let a = (0, o("iJY0").a)({
      name: "list-circle-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.365234, y: 2.139648, width: 13.160156, height: 11.728516 },
        visualBounds: { x: 1.365234, y: 2.139648, width: 13.160156, height: 11.728516 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.365234, y: 2.139648, width: 13.160156, height: 11.728516 },
        center: { x: 7.945312, y: 8.003906 },
        insets: { top: 2.139648, right: 1.47461, bottom: 2.131836, left: 1.365234 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.945312, y: 8.003906 }, foreground: { x: 7.945312, y: 8.003906 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.89062 8.81738C5.28506 8.81738 6.41588 9.94837 6.41602 11.3428C6.41602 12.7373 5.28514 13.8682 3.89062 13.8682C2.49611 13.8682 1.36523 12.7373 1.36523 11.3428C1.36537 9.94837 2.49619 8.81738 3.89062 8.81738ZM3.89062 9.86816C3.07609 9.86816 2.41615 10.5283 2.41602 11.3428C2.41602 12.1574 3.076 12.8174 3.89062 12.8174C4.70525 12.8174 5.36523 12.1574 5.36523 11.3428C5.3651 10.5283 4.70516 9.86816 3.89062 9.86816Z" fill="currentColor"/> <path d="M14 10.8174C14.2898 10.8174 14.5253 11.053 14.5254 11.3428C14.5254 11.6327 14.2899 11.8681 14 11.8682H8.66699C8.37704 11.8682 8.1416 11.6327 8.1416 11.3428C8.14173 11.0529 8.37712 10.8174 8.66699 10.8174H14Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.89062 2.13965C5.28514 2.13965 6.41602 3.27052 6.41602 4.66504C6.41602 6.05956 5.28514 7.19043 3.89062 7.19043C2.49611 7.19043 1.36523 6.05956 1.36523 4.66504C1.36523 3.27052 2.49611 2.13965 3.89062 2.13965ZM3.89062 3.19043C3.076 3.19043 2.41602 3.85042 2.41602 4.66504C2.41602 5.47966 3.076 6.13965 3.89062 6.13965C4.70525 6.13965 5.36523 5.47966 5.36523 4.66504C5.36523 3.85042 4.70525 3.19043 3.89062 3.19043Z" fill="currentColor"/> <path d="M14 4.13965C14.2899 4.13971 14.5254 4.37513 14.5254 4.66504C14.5254 4.95495 14.2899 5.19036 14 5.19043H8.66699C8.37704 5.19043 8.1416 4.95499 8.1416 4.66504C8.1416 4.37509 8.37704 4.13965 8.66699 4.13965H14Z" fill="currentColor"/>',
    })
    o.d(t, {}, { E: a })
  },
}
//# sourceMappingURL=401845.8b91e60f6b.js.map
