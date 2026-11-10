export const __rspack_esm_ids = [164460]
export const __webpack_modules__ = {
  J0Jr(e, t, o) {
    var a = o("ABep"),
      i = o("QosV"),
      l = o("zTeN"),
      s = o("rpj1"),
      c = o("OQ5p"),
      n = o("pasN")
    o.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            o = (0, i.c)(3),
            r = "work" === (0, l.Ul)(n.l) ? c.A : s.A
          return (
            o[0] !== r || o[1] !== e ? ((t = (0, a.jsx)(r, { ...e })), (o[0] = r), (o[1] = e), (o[2] = t)) : (t = o[2]),
            t
          )
        },
      },
    )
  },
  DYB3(e, t, o) {
    o.d(t, { ji: () => k, g1: () => T, $9: () => P, gK: () => W })
    var a = o("ASxG"),
      i = o("MlPN"),
      l = o("ABep"),
      s = o("FY2Y"),
      c = o("QyWZ"),
      n = o("cuJP"),
      r = o("Qgfj"),
      d = o("HOLv"),
      p = o("GO7r")
    let m = (0, r.YK)({
        list_spaces: {
          id: "localConversation.codexTool.list_spaces.state",
          defaultMessage:
            "{state, select, active{Listing spaces} completed{Listed spaces} following{listed spaces} failed{Couldn’t list spaces} failedFollowing{couldn’t list spaces} other{List spaces}}",
          description:
            "Activity for the Codex tool action: List spaces. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        create_space: {
          id: "localConversation.codexTool.create_space.state",
          defaultMessage:
            "{state, select, active{Creating space} completed{Created space} following{created space} failed{Couldn’t create space} failedFollowing{couldn’t create space} other{Create space}}",
          description:
            "Activity for the Codex tool action: Create space. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        list_pages: {
          id: "localConversation.codexTool.list_pages.state",
          defaultMessage:
            "{state, select, active{Listing pages} completed{Listed pages} following{listed pages} failed{Couldn’t list pages} failedFollowing{couldn’t list pages} other{List pages}}",
          description:
            "Activity for the Codex tool action: List pages. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        find_pages: {
          id: "localConversation.codexTool.find_pages.state",
          defaultMessage:
            "{state, select, active{Searching pages} completed{Searched pages} following{searched pages} failed{Couldn’t search pages} failedFollowing{couldn’t search pages} other{Search pages}}",
          description:
            "Activity for the Codex tool action: Search pages. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        create_page: {
          id: "localConversation.codexTool.create_page.state",
          defaultMessage:
            "{state, select, active{Creating page} completed{Created page} following{created page} failed{Couldn’t create page} failedFollowing{couldn’t create page} other{Create page}}",
          description:
            "Activity for the Codex tool action: Create page. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        move_page: {
          id: "localConversation.codexTool.move_page.state",
          defaultMessage:
            "{state, select, active{Moving page} completed{Moved page} following{moved page} failed{Couldn’t move page} failedFollowing{couldn’t move page} other{Move page}}",
          description:
            "Activity for the Codex tool action: Move page. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        read_page: {
          id: "localConversation.codexTool.read_page.state",
          defaultMessage:
            "{state, select, active{Reading page} completed{Read page} following{read page} failed{Couldn’t read page} failedFollowing{couldn’t read page} other{Read page}}",
          description:
            "Activity for the Codex tool action: Read page. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        read_page_changes: {
          id: "localConversation.codexTool.read_page_changes.state",
          defaultMessage:
            "{state, select, active{Checking page changes} completed{Checked page changes} following{checked page changes} failed{Couldn’t check page changes} failedFollowing{couldn’t check page changes} other{Check page changes}}",
          description:
            "Activity for the Codex tool action: Check page changes. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        edit_page: {
          id: "localConversation.codexTool.edit_page.state",
          defaultMessage:
            "{state, select, active{Editing page} completed{Edited page} following{edited page} failed{Couldn’t edit page} failedFollowing{couldn’t edit page} other{Edit page}}",
          description:
            "Activity for the Codex tool action: Edit page. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        create_page_visualization: {
          id: "localConversation.codexTool.create_page_visualization.state",
          defaultMessage:
            "{state, select, active{Adding visualization} completed{Added visualization} following{added visualization} failed{Couldn’t add visualization} failedFollowing{couldn’t add visualization} other{Add visualization}}",
          description:
            "Activity for the Codex tool action: Add visualization. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        list_page_comments: {
          id: "localConversation.codexTool.list_page_comments.state",
          defaultMessage:
            "{state, select, active{Listing comments} completed{Listed comments} following{listed comments} failed{Couldn’t list comments} failedFollowing{couldn’t list comments} other{List comments}}",
          description:
            "Activity for the Codex tool action: List comments. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        manage_page_comment: {
          id: "localConversation.codexTool.manage_page_comment.state",
          defaultMessage:
            "{state, select, active{Adding comment} completed{Added comment} following{added comment} failed{Couldn’t add comment} failedFollowing{couldn’t add comment} other{Add comment}}",
          description:
            "Activity for the Codex tool action: Add comment. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        search_sharing_recipients: {
          id: "localConversation.codexTool.search_sharing_recipients.state",
          defaultMessage:
            "{state, select, active{Searching people and groups} completed{Searched people and groups} following{searched people and groups} failed{Couldn’t search people and groups} failedFollowing{couldn’t search people and groups} other{Search people and groups}}",
          description:
            "Activity for the Codex tool action: Search people and groups. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        get_page_sharing: {
          id: "localConversation.codexTool.get_page_sharing.state",
          defaultMessage:
            "{state, select, active{Checking page access} completed{Checked page access} following{checked page access} failed{Couldn’t check page access} failedFollowing{couldn’t check page access} other{Check page access}}",
          description:
            "Activity for the Codex tool action: Check page access. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        get_space_sharing: {
          id: "localConversation.codexTool.get_space_sharing.state",
          defaultMessage:
            "{state, select, active{Checking space access} completed{Checked space access} following{checked space access} failed{Couldn’t check space access} failedFollowing{couldn’t check space access} other{Check space access}}",
          description:
            "Activity for the Codex tool action: Check space access. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        update_page_sharing: {
          id: "localConversation.codexTool.update_page_sharing.state",
          defaultMessage:
            "{state, select, active{Updating page access} completed{Requested page access change} following{requested page access change} failed{Couldn’t update page access} failedFollowing{couldn’t update page access} other{Update page access}}",
          description:
            "Activity for the Codex tool action: Update page access. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        update_space_sharing: {
          id: "localConversation.codexTool.update_space_sharing.state",
          defaultMessage:
            "{state, select, active{Updating space access} completed{Updated space access} following{updated space access} failed{Couldn’t update space access} failedFollowing{couldn’t update space access} other{Update space access}}",
          description:
            "Activity for the Codex tool action: Update space access. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        replace_visualization: {
          id: "localConversation.codexTool.replace_visualization.state",
          defaultMessage:
            "{state, select, active{Replacing visualization} completed{Replaced visualization} following{replaced visualization} failed{Couldn’t replace visualization} failedFollowing{couldn’t replace visualization} other{Replace visualization}}",
          description:
            "Activity for the Codex tool action: Replace visualization. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_reply: {
          id: "localConversation.codexTool.comment_reply.state",
          defaultMessage:
            "{state, select, active{Replying to comment} completed{Replied to comment} following{replied to comment} failed{Couldn’t reply to comment} failedFollowing{couldn’t reply to comment} other{Reply to comment}}",
          description:
            "Activity for the Codex tool action: Reply to comment. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_resolve: {
          id: "localConversation.codexTool.comment_resolve.state",
          defaultMessage:
            "{state, select, active{Resolving comment} completed{Resolved comment} following{resolved comment} failed{Couldn’t resolve comment} failedFollowing{couldn’t resolve comment} other{Resolve comment}}",
          description:
            "Activity for the Codex tool action: Resolve comment. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_reopen: {
          id: "localConversation.codexTool.comment_reopen.state",
          defaultMessage:
            "{state, select, active{Reopening comment} completed{Reopened comment} following{reopened comment} failed{Couldn’t reopen comment} failedFollowing{couldn’t reopen comment} other{Reopen comment}}",
          description:
            "Activity for the Codex tool action: Reopen comment. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_edit: {
          id: "localConversation.codexTool.comment_edit.state",
          defaultMessage:
            "{state, select, active{Editing comment} completed{Edited comment} following{edited comment} failed{Couldn’t edit comment} failedFollowing{couldn’t edit comment} other{Edit comment}}",
          description:
            "Activity for the Codex tool action: Edit comment. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_delete_message: {
          id: "localConversation.codexTool.comment_delete_message.state",
          defaultMessage:
            "{state, select, active{Deleting comment} completed{Deleted comment} following{deleted comment} failed{Couldn’t delete comment} failedFollowing{couldn’t delete comment} other{Delete comment}}",
          description:
            "Activity for the Codex tool action: Delete comment. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_react: {
          id: "localConversation.codexTool.comment_react.state",
          defaultMessage:
            "{state, select, active{Adding reaction} completed{Added reaction} following{added reaction} failed{Couldn’t add reaction} failedFollowing{couldn’t add reaction} other{Add reaction}}",
          description:
            "Activity for the Codex tool action: Add reaction. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_remove_reaction: {
          id: "localConversation.codexTool.comment_remove_reaction.state",
          defaultMessage:
            "{state, select, active{Removing reaction} completed{Removed reaction} following{removed reaction} failed{Couldn’t remove reaction} failedFollowing{couldn’t remove reaction} other{Remove reaction}}",
          description:
            "Activity for the Codex tool action: Remove reaction. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        comment_delete_thread: {
          id: "localConversation.codexTool.comment_delete_thread.state",
          defaultMessage:
            "{state, select, active{Deleting discussion} completed{Deleted discussion} following{deleted discussion} failed{Couldn’t delete discussion} failedFollowing{couldn’t delete discussion} other{Delete discussion}}",
          description:
            "Activity for the Codex tool action: Delete discussion. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        open_page: {
          id: "localConversation.codexTool.open_page.state",
          defaultMessage:
            "{state, select, active{Opening page} completed{Opened page} following{opened page} failed{Couldn’t open page} failedFollowing{couldn’t open page} other{Open page}}",
          description:
            "Activity for the Codex tool action: Open page. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
      }),
      _ = {
        open_page: { message: m.open_page, icon: (0, l.jsx)(p.oQS, {}) },
        list_spaces: { message: m.list_spaces, icon: (0, l.jsx)(p.HPc, {}) },
        create_space: { message: m.create_space, icon: (0, l.jsx)(p.HPc, {}) },
        list_pages: { message: m.list_pages, icon: (0, l.jsx)(d.I, { asset: n.U }) },
        find_pages: { message: m.find_pages, icon: (0, l.jsx)(p.QmT, {}) },
        create_page: { message: m.create_page, icon: (0, l.jsx)(p.mgx, {}) },
        move_page: { message: m.move_page, icon: (0, l.jsx)(p.efV, {}) },
        read_page: { message: m.read_page, icon: (0, l.jsx)(p.oQS, {}) },
        read_page_changes: { message: m.read_page_changes, icon: (0, l.jsx)(d.I, { asset: c.Y }) },
        edit_page: { message: m.edit_page, icon: (0, l.jsx)(p.Npl, {}) },
        create_page_visualization: { message: m.create_page_visualization, icon: (0, l.jsx)(p.$n1, {}) },
        list_page_comments: { message: m.list_page_comments, icon: (0, l.jsx)(p.OHc, {}) },
        manage_page_comment: { message: m.manage_page_comment, icon: (0, l.jsx)(p.OHc, {}) },
        search_sharing_recipients: { message: m.search_sharing_recipients, icon: (0, l.jsx)(p.QmT, {}) },
        get_page_sharing: { message: m.get_page_sharing, icon: (0, l.jsx)(p.oJq, {}) },
        get_space_sharing: { message: m.get_space_sharing, icon: (0, l.jsx)(p.oJq, {}) },
        update_page_sharing: { message: m.update_page_sharing, icon: (0, l.jsx)(p.oJq, {}) },
        update_space_sharing: { message: m.update_space_sharing, icon: (0, l.jsx)(p.oJq, {}) },
        replace_visualization: { message: m.replace_visualization, icon: (0, l.jsx)(p.$n1, {}) },
        comment_reply: { message: m.comment_reply, icon: (0, l.jsx)(p.OHc, {}) },
        comment_resolve: { message: m.comment_resolve, icon: (0, l.jsx)(d.I, { asset: s.N }) },
        comment_reopen: { message: m.comment_reopen, icon: (0, l.jsx)(p.OHc, {}) },
        comment_edit: { message: m.comment_edit, icon: (0, l.jsx)(p.Npl, {}) },
        comment_delete_message: { message: m.comment_delete_message, icon: (0, l.jsx)(p.cSG, {}) },
        comment_react: { message: m.comment_react, icon: (0, l.jsx)(p.OSQ, {}) },
        comment_remove_reaction: { message: m.comment_remove_reaction, icon: (0, l.jsx)(p.OSQ, {}) },
        comment_delete_thread: { message: m.comment_delete_thread, icon: (0, l.jsx)(p.cSG, {}) },
      }
    var u = o("vbL5"),
      v = o("Hkqr"),
      g = o("DKJJ"),
      h = o("V9Nm"),
      f = o("Wl0s"),
      C = o("GxtJ"),
      b = o("Woiy"),
      y = o("J0Jr")
    let M = (0, r.YK)({
        cloudCreatePartial: {
          id: "localConversation.codexTool.cloudCreatePartial",
          defaultMessage:
            "{state, select, following{created {started} of {total} cloud chats} other{Created {started} of {total} cloud chats}}",
          description:
            "Activity for a partially successful batch of cloud chat creations. Started is the number started; total is the number requested. Following appears after another action in a summary.",
        },
        create_thread: {
          id: "localConversation.codexTool.create_thread.state",
          defaultMessage:
            "{state, select, active{Creating chat} completed{Created chat} following{created chat} failed{Couldn’t create chat} failedFollowing{couldn’t create chat} other{Create chat}}",
          description:
            "Activity for the Codex tool action: Create chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        create_worktree: {
          id: "localConversation.codexTool.create_worktree.creationState",
          defaultMessage:
            "{state, select, active{Creating worktree} pending{Creating worktree} pendingFollowing{creating worktree} completed{Created worktree} following{created worktree} failed{Couldn’t complete worktree setup} failedFollowing{couldn’t complete worktree setup} other{Create worktree}}",
          description:
            "Activity for creating a managed worktree and setting it up. Pending means the tool returned while creation continues in the background. Completed means creation finished. Following variants appear after another action in a summary.",
        },
        get_worktree_creation_status: {
          id: "localConversation.codexTool.get_worktree_creation_status.state",
          defaultMessage:
            "{state, select, active{Checking worktree status} completed{Checked worktree status} following{checked worktree status} failed{Couldn’t check worktree status} failedFollowing{couldn’t check worktree status} other{Check worktree status}}",
          description:
            "Activity for checking the progress of managed worktree creation. Completed means the status check returned, not that worktree creation finished. Following variants appear after another action in a summary.",
        },
        fork_thread: {
          id: "localConversation.codexTool.fork_thread.state",
          defaultMessage:
            "{state, select, active{Forking chat} completed{Forked chat} following{forked chat} failed{Couldn’t fork chat} failedFollowing{couldn’t fork chat} other{Fork chat}}",
          description:
            "Activity for the Codex tool action: Fork chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        list_threads: {
          id: "localConversation.codexTool.list_threads.state",
          defaultMessage:
            "{state, select, active{Listing chats} completed{Listed chats} following{listed chats} failed{Couldn’t list chats} failedFollowing{couldn’t list chats} other{List chats}}",
          description:
            "Activity for the Codex tool action: List chats. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        list_archived_threads: {
          id: "localConversation.codexTool.list_archived_threads.state",
          defaultMessage:
            "{state, select, active{Listing archived chats} completed{Listed archived chats} following{listed archived chats} failed{Couldn’t list archived chats} failedFollowing{couldn’t list archived chats} other{List archived chats}}",
          description:
            "Activity for the Codex tool action: List archived chats. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        read_thread: {
          id: "localConversation.codexTool.read_thread.state",
          defaultMessage:
            "{state, select, active{Reading chat} completed{Read chat} following{read chat} failed{Couldn’t read chat} failedFollowing{couldn’t read chat} other{Read chat}}",
          description:
            "Activity for the Codex tool action: Read chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        send_message_to_thread: {
          id: "localConversation.codexTool.send_message_to_thread.state",
          defaultMessage:
            "{state, select, active{Sending message to chat} completed{Sent message to chat} following{sent message to chat} failed{Couldn’t send message to chat} failedFollowing{couldn’t send message to chat} other{Send message to chat}}",
          description:
            "Activity for the Codex tool action: Send message to chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        wait_threads: {
          id: "localConversation.codexTool.wait_threads.state",
          defaultMessage:
            "{state, select, active{Waiting for chats} completed{Waited for chats} following{waited for chats} failed{Couldn’t wait for chats} failedFollowing{couldn’t wait for chats} other{Wait for chats}}",
          description:
            "Activity for the Codex tool action: Wait for chats. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        handoff_thread: {
          id: "localConversation.codexTool.handoff_thread.state",
          defaultMessage:
            "{state, select, active{Requesting chat handoff} completed{Requested chat handoff} following{requested chat handoff} failed{Couldn’t request chat handoff} failedFollowing{couldn’t request chat handoff} other{Request chat handoff}}",
          description:
            "Activity for the Codex tool action: Request chat handoff. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        get_handoff_status: {
          id: "localConversation.codexTool.get_handoff_status.state",
          defaultMessage:
            "{state, select, active{Checking handoff status} completed{Checked handoff status} following{checked handoff status} failed{Couldn’t check handoff status} failedFollowing{couldn’t check handoff status} other{Check handoff status}}",
          description:
            "Activity for the Codex tool action: Check handoff status. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        set_thread_archived: {
          id: "localConversation.codexTool.set_thread_archived.state",
          defaultMessage:
            "{state, select, active{Archiving chat} completed{Archived chat} following{archived chat} failed{Couldn’t archive chat} failedFollowing{couldn’t archive chat} other{Archive chat}}",
          description:
            "Activity for the Codex tool action: Archive chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        set_thread_title: {
          id: "localConversation.codexTool.set_thread_title.state",
          defaultMessage:
            "{state, select, active{Renaming chat} completed{Renamed chat} following{renamed chat} failed{Couldn’t rename chat} failedFollowing{couldn’t rename chat} other{Rename chat}}",
          description:
            "Activity for the Codex tool action: Rename chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        list_projects: {
          id: "localConversation.codexTool.list_projects.state",
          defaultMessage:
            "{state, select, active{Listing projects} completed{Listed projects} following{listed projects} failed{Couldn’t list projects} failedFollowing{couldn’t list projects} other{List projects}}",
          description:
            "Activity for the Codex tool action: List projects. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        create_sidebar_section: {
          id: "localConversation.codexTool.create_sidebar_section.state",
          defaultMessage:
            "{state, select, active{Creating section} completed{Created section} following{created section} failed{Couldn’t create section} failedFollowing{couldn’t create section} other{Create section}}",
          description:
            "Activity for the Codex tool action: Create section. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        rename_sidebar_section: {
          id: "localConversation.codexTool.rename_sidebar_section.state",
          defaultMessage:
            "{state, select, active{Renaming section} completed{Renamed section} following{renamed section} failed{Couldn’t rename section} failedFollowing{couldn’t rename section} other{Rename section}}",
          description:
            "Activity for the Codex tool action: Rename section. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        delete_sidebar_section: {
          id: "localConversation.codexTool.delete_sidebar_section.state",
          defaultMessage:
            "{state, select, active{Deleting section} completed{Deleted section} following{deleted section} failed{Couldn’t delete section} failedFollowing{couldn’t delete section} other{Delete section}}",
          description:
            "Activity for the Codex tool action: Delete section. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        move_thread_to_project: {
          id: "localConversation.codexTool.move_thread_to_project.state",
          defaultMessage:
            "{state, select, active{Moving chat} completed{Moved chat} following{moved chat} failed{Couldn’t move chat} failedFollowing{couldn’t move chat} other{Move chat}}",
          description:
            "Activity for moving a chat to a project. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        move_thread_to_sidebar_section: {
          id: "localConversation.codexTool.move_thread_to_sidebar_section.state",
          defaultMessage:
            "{state, select, active{Moving chat to section} completed{Moved chat to section} following{moved chat to section} failed{Couldn’t move chat to section} failedFollowing{couldn’t move chat to section} other{Move chat to section}}",
          description:
            "Activity for the Codex tool action: Move chat to section. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        move_project_to_sidebar_section: {
          id: "localConversation.codexTool.move_project_to_sidebar_section.state",
          defaultMessage:
            "{state, select, active{Moving project to section} completed{Moved project to section} following{moved project to section} failed{Couldn’t move project to section} failedFollowing{couldn’t move project to section} other{Move project to section}}",
          description:
            "Activity for the Codex tool action: Move project to section. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        reorder_section: {
          id: "localConversation.codexTool.reorder_section.state",
          defaultMessage:
            "{state, select, active{Reordering section} completed{Reordered section} following{reordered section} failed{Couldn’t reorder section} failedFollowing{couldn’t reorder section} other{Reorder section}}",
          description:
            "Activity for the Codex tool action: Reorder section. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        reorder_sidebar_projects: {
          id: "localConversation.codexTool.reorder_sidebar_projects.state",
          defaultMessage:
            "{state, select, active{Reordering projects} completed{Reordered projects} following{reordered projects} failed{Couldn’t reorder projects} failedFollowing{couldn’t reorder projects} other{Reorder projects}}",
          description:
            "Activity for the Codex tool action: Reorder projects. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        reorder_sidebar_sections: {
          id: "localConversation.codexTool.reorder_sidebar_sections.state",
          defaultMessage:
            "{state, select, active{Reordering sections} completed{Reordered sections} following{reordered sections} failed{Couldn’t reorder sections} failedFollowing{couldn’t reorder sections} other{Reorder sections}}",
          description:
            "Activity for the Codex tool action: Reorder sections. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        share_thread: {
          id: "localConversation.codexTool.share_thread.state",
          defaultMessage:
            "{state, select, active{Creating share link} completed{Created share link} following{created share link} failed{Couldn’t create share link} failedFollowing{couldn’t create share link} other{Create share link}}",
          description:
            "Activity for the Codex tool action: Create share link. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        automation_update: {
          id: "localConversation.codexTool.automation_update.state",
          defaultMessage:
            "{state, select, active{Creating scheduled task} completed{Created scheduled task} following{created scheduled task} failed{Couldn’t create scheduled task} failedFollowing{couldn’t create scheduled task} other{Create scheduled task}}",
          description:
            "Activity for the Codex tool action: Create scheduled task. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        automation_mode_update: {
          id: "localConversation.codexTool.automation_mode_update.state",
          defaultMessage:
            "{state, select, active{Updating scheduled task} completed{Updated scheduled task} following{updated scheduled task} failed{Couldn’t update scheduled task} failedFollowing{couldn’t update scheduled task} other{Update scheduled task}}",
          description:
            "Activity for the Codex tool action: Update scheduled task. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        navigate_to_codex_page: {
          id: "localConversation.codexTool.navigate_to_codex_page.state",
          defaultMessage:
            "{state, select, active{Opening chat} completed{Opened chat} following{opened chat} failed{Couldn’t open chat} failedFollowing{couldn’t open chat} other{Open chat}}",
          description:
            "Activity for the Codex tool action: Open chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        open_in_codex: {
          id: "localConversation.codexTool.open_in_codex.state",
          defaultMessage:
            "{state, select, active{Opening file} completed{Opened file} following{opened file} failed{Couldn’t open file} failedFollowing{couldn’t open file} other{Open file}}",
          description:
            "Activity for the Codex tool action: Open file. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        read_thread_terminal: {
          id: "localConversation.codexTool.read_thread_terminal.state",
          defaultMessage:
            "{state, select, active{Reading terminal} completed{Read terminal} following{read terminal} failed{Couldn’t read terminal} failedFollowing{couldn’t read terminal} other{Read terminal}}",
          description:
            "Activity for the Codex tool action: Read terminal. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        attach_artifact: {
          id: "localConversation.codexTool.attach_artifact.state",
          defaultMessage:
            "{state, select, active{Attaching artifact} completed{Attached artifact} following{attached artifact} failed{Couldn’t attach artifact} failedFollowing{couldn’t attach artifact} other{Attach artifact}}",
          description:
            "Activity for the Codex tool action: Attach artifact. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        list_artifacts: {
          id: "localConversation.codexTool.list_artifacts.state",
          defaultMessage:
            "{state, select, active{Listing attached artifacts} completed{Listed attached artifacts} following{listed attached artifacts} failed{Couldn’t list attached artifacts} failedFollowing{couldn’t list attached artifacts} other{List attached artifacts}}",
          description:
            "Activity for the Codex tool action: List attached artifacts. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        remove_artifact: {
          id: "localConversation.codexTool.remove_artifact.state",
          defaultMessage:
            "{state, select, active{Detaching artifact} completed{Detached artifact} following{detached artifact} failed{Couldn’t detach artifact} failedFollowing{couldn’t detach artifact} other{Detach artifact}}",
          description:
            "Activity for the Codex tool action: Detach artifact. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        read_settings: {
          id: "localConversation.codexTool.read_settings.state",
          defaultMessage:
            "{state, select, active{Reading settings} completed{Read settings} following{read settings} failed{Couldn’t read settings} failedFollowing{couldn’t read settings} other{Read settings}}",
          description:
            "Activity for the Codex tool action: Read settings. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        write_settings: {
          id: "localConversation.codexTool.write_settings.state",
          defaultMessage:
            "{state, select, active{Updating settings} completed{Updated settings} following{updated settings} failed{Couldn’t update settings} failedFollowing{couldn’t update settings} other{Update settings}}",
          description:
            "Activity for the Codex tool action: Update settings. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        uninstall_plugin: {
          id: "localConversation.codexTool.uninstall_plugin.state",
          defaultMessage:
            "{state, select, active{Uninstalling plugin} completed{Uninstalled plugin} following{uninstalled plugin} failed{Couldn’t uninstall plugin} failedFollowing{couldn’t uninstall plugin} other{Uninstall plugin}}",
          description:
            "Activity for the Codex tool action: Uninstall plugin. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        get_usage_limits: {
          id: "localConversation.codexTool.get_usage_limits.state",
          defaultMessage:
            "{state, select, active{Checking usage} completed{Checked usage} following{checked usage} failed{Couldn’t check usage} failedFollowing{couldn’t check usage} other{Check usage}}",
          description:
            "Activity for the Codex tool action: Check usage. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        consume_usage_reset: {
          id: "localConversation.codexTool.consume_usage_reset.state",
          defaultMessage:
            "{state, select, active{Requesting usage reset} completed{Requested usage reset} following{requested usage reset} failed{Couldn’t request usage reset} failedFollowing{couldn’t request usage reset} other{Request usage reset}}",
          description:
            "Activity for the Codex tool action: Request usage reset. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        capture_screen_context: {
          id: "localConversation.codexTool.capture_screen_context.state",
          defaultMessage:
            "{state, select, active{Reading screen context} completed{Read screen context} following{read screen context} failed{Couldn’t read screen context} failedFollowing{couldn’t read screen context} other{Read screen context}}",
          description:
            "Activity for the Codex tool action: Read screen context. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        end_realtime_voice_call: {
          id: "localConversation.codexTool.end_realtime_voice_call.state",
          defaultMessage:
            "{state, select, active{Ending voice chat} completed{Ended voice chat} following{ended voice chat} failed{Couldn’t end voice chat} failedFollowing{couldn’t end voice chat} other{End voice chat}}",
          description:
            "Activity for the Codex tool action: End voice chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        fire_confetti: {
          id: "localConversation.codexTool.fire_confetti.state",
          defaultMessage:
            "{state, select, active{Requesting confetti} completed{Requested confetti} following{requested confetti} failed{Couldn’t request confetti} failedFollowing{couldn’t request confetti} other{Request confetti}}",
          description:
            "Activity for the Codex tool action: Request confetti. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        load_workspace_dependencies: {
          id: "localConversation.codexTool.load_workspace_dependencies.state",
          defaultMessage:
            "{state, select, active{Loading workspace dependencies} completed{Loaded workspace dependencies} following{loaded workspace dependencies} failed{Couldn’t load workspace dependencies} failedFollowing{couldn’t load workspace dependencies} other{Load workspace dependencies}}",
          description:
            "Activity for the Codex tool action: Load workspace dependencies. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        create_project: {
          id: "localConversation.codexTool.create_project.state",
          defaultMessage:
            "{state, select, active{Creating project} completed{Created project} following{created project} failed{Couldn’t create project} failedFollowing{couldn’t create project} other{Create project}}",
          description:
            "Activity for the Codex tool action: Create project. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        list_hosts: {
          id: "localConversation.codexTool.list_hosts.state",
          defaultMessage:
            "{state, select, active{Listing computers} completed{Listed computers} following{listed computers} failed{Couldn’t list computers} failedFollowing{couldn’t list computers} other{List computers}}",
          description:
            "Activity for the Codex tool action: List computers. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        set_thread_pinned: {
          id: "localConversation.codexTool.set_thread_pinned.state",
          defaultMessage:
            "{state, select, active{Pinning chat} completed{Pinned chat} following{pinned chat} failed{Couldn’t pin chat} failedFollowing{couldn’t pin chat} other{Pin chat}}",
          description:
            "Activity for the Codex tool action: Pin chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        transfer_voice_call: {
          id: "localConversation.codexTool.transfer_voice_call.state",
          defaultMessage:
            "{state, select, active{Transferring voice chat} completed{Transferred voice chat} following{transferred voice chat} failed{Couldn’t transfer voice chat} failedFollowing{couldn’t transfer voice chat} other{Transfer voice chat}}",
          description:
            "Activity for the Codex tool action: Transfer voice chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        get_screen_annotations: {
          id: "localConversation.codexTool.get_screen_annotations.state",
          defaultMessage:
            "{state, select, active{Reading annotations} completed{Read annotations} following{read annotations} failed{Couldn’t read annotations} failedFollowing{couldn’t read annotations} other{Read annotations}}",
          description:
            "Activity for the Codex tool action: Read annotations. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        draw_screen_stroke: {
          id: "localConversation.codexTool.draw_screen_stroke.state",
          defaultMessage:
            "{state, select, active{Drawing annotations} completed{Drew annotations} following{drew annotations} failed{Couldn’t draw annotations} failedFollowing{couldn’t draw annotations} other{Draw annotations}}",
          description:
            "Activity for the Codex tool action: Draw annotations. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        erase_screen_strokes: {
          id: "localConversation.codexTool.erase_screen_strokes.state",
          defaultMessage:
            "{state, select, active{Erasing annotations} completed{Erased annotations} following{erased annotations} failed{Couldn’t erase annotations} failedFollowing{couldn’t erase annotations} other{Erase annotations}}",
          description:
            "Activity for the Codex tool action: Erase annotations. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        request_option_picker: {
          id: "localConversation.codexTool.request_option_picker.state",
          defaultMessage:
            "{state, select, active{Requesting option selection} completed{Requested option selection} following{requested option selection} failed{Couldn’t request option selection} failedFollowing{couldn’t request option selection} other{Request option selection}}",
          description:
            "Activity for the Codex tool action: Request option selection. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        request_onboarding_input: {
          id: "localConversation.codexTool.request_onboarding_input.state",
          defaultMessage:
            "{state, select, active{Requesting setup information} completed{Requested setup information} following{requested setup information} failed{Couldn’t request setup information} failedFollowing{couldn’t request setup information} other{Request setup information}}",
          description:
            "Activity for the Codex tool action: Request setup information. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        setup_codex_step: {
          id: "localConversation.codexTool.setup_codex_step.state",
          defaultMessage:
            "{state, select, active{Opening setup step} completed{Opened setup step} following{opened setup step} failed{Couldn’t open setup step} failedFollowing{couldn’t open setup step} other{Open setup step}}",
          description:
            "Activity for the Codex tool action: Open setup step. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        complete_conversational_onboarding_task: {
          id: "localConversation.codexTool.complete_conversational_onboarding_task.state",
          defaultMessage:
            "{state, select, active{Recording setup result} completed{Recorded setup result} following{recorded setup result} failed{Couldn’t record setup result} failedFollowing{couldn’t record setup result} other{Record setup result}}",
          description:
            "Activity for the Codex tool action: Record setup result. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        complete_sidebar_onboarding_checklist_task: {
          id: "localConversation.codexTool.complete_sidebar_onboarding_checklist_task.state",
          defaultMessage:
            "{state, select, active{Updating setup checklist} completed{Updated setup checklist} following{updated setup checklist} failed{Couldn’t update setup checklist} failedFollowing{couldn’t update setup checklist} other{Update setup checklist}}",
          description:
            "Activity for the Codex tool action: Update setup checklist. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        "cloud_threads.list": {
          id: "localConversation.codexTool.cloud_threads.list.state",
          defaultMessage:
            "{state, select, active{Listing cloud chats} completed{Listed cloud chats} following{listed cloud chats} failed{Couldn’t list cloud chats} failedFollowing{couldn’t list cloud chats} other{List cloud chats}}",
          description:
            "Activity for the Codex tool action: List cloud chats. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        "cloud_threads.read": {
          id: "localConversation.codexTool.cloud_threads.read.state",
          defaultMessage:
            "{state, select, active{Reading cloud chat turn} completed{Read cloud chat turn} following{read cloud chat turn} failed{Couldn’t read cloud chat turn} failedFollowing{couldn’t read cloud chat turn} other{Read cloud chat turn}}",
          description:
            "Activity for the Codex tool action: Read cloud chat turn. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        "cloud_threads.create": {
          id: "localConversation.codexTool.cloud_threads.create.state",
          defaultMessage:
            "{state, select, active{Creating cloud chats} completed{Created cloud chats} following{created cloud chats} failed{Couldn’t create cloud chats} failedFollowing{couldn’t create cloud chats} other{Create cloud chats}}",
          description:
            "Activity for the Codex tool action: Create cloud chats. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        "cloud_threads.attach": {
          id: "localConversation.codexTool.cloud_threads.attach.state",
          defaultMessage:
            "{state, select, active{Attaching cloud chats} completed{Attached cloud chats} following{attached cloud chats} failed{Couldn’t attach cloud chats} failedFollowing{couldn’t attach cloud chats} other{Attach cloud chats}}",
          description:
            "Activity for the Codex tool action: Attach cloud chats. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        "cloud_threads.send_message": {
          id: "localConversation.codexTool.cloud_threads.send_message.state",
          defaultMessage:
            "{state, select, active{Sending message to cloud chat} completed{Sent message to cloud chat} following{sent message to cloud chat} failed{Couldn’t send message to cloud chat} failedFollowing{couldn’t send message to cloud chat} other{Send message to cloud chat}}",
          description:
            "Activity for the Codex tool action: Send message to cloud chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        restore_chat: {
          id: "localConversation.codexTool.restore_chat.state",
          defaultMessage:
            "{state, select, active{Restoring chat} completed{Restored chat} following{restored chat} failed{Couldn’t restore chat} failedFollowing{couldn’t restore chat} other{Restore chat}}",
          description:
            "Activity for the Codex tool action: Restore chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        pin_chat: {
          id: "localConversation.codexTool.pin_chat.state",
          defaultMessage:
            "{state, select, active{Pinning chat} completed{Pinned chat} following{pinned chat} failed{Couldn’t pin chat} failedFollowing{couldn’t pin chat} other{Pin chat}}",
          description:
            "Activity for the Codex tool action: Pin chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        unpin_chat: {
          id: "localConversation.codexTool.unpin_chat.state",
          defaultMessage:
            "{state, select, active{Unpinning chat} completed{Unpinned chat} following{unpinned chat} failed{Couldn’t unpin chat} failedFollowing{couldn’t unpin chat} other{Unpin chat}}",
          description:
            "Activity for the Codex tool action: Unpin chat. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        pin_project: {
          id: "localConversation.codexTool.pin_project.state",
          defaultMessage:
            "{state, select, active{Pinning project} completed{Pinned project} following{pinned project} failed{Couldn’t pin project} failedFollowing{couldn’t pin project} other{Pin project}}",
          description:
            "Activity for the Codex tool action: Pin project. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        unpin_project: {
          id: "localConversation.codexTool.unpin_project.state",
          defaultMessage:
            "{state, select, active{Unpinning project} completed{Unpinned project} following{unpinned project} failed{Couldn’t unpin project} failedFollowing{couldn’t unpin project} other{Unpin project}}",
          description:
            "Activity for the Codex tool action: Unpin project. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        automation_view: {
          id: "localConversation.codexTool.automation_view.state",
          defaultMessage:
            "{state, select, active{Reading scheduled task} completed{Read scheduled task} following{read scheduled task} failed{Couldn’t read scheduled task} failedFollowing{couldn’t read scheduled task} other{Read scheduled task}}",
          description:
            "Activity for the Codex tool action: Read scheduled task. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        automation_delete: {
          id: "localConversation.codexTool.automation_delete.state",
          defaultMessage:
            "{state, select, active{Deleting scheduled task} completed{Deleted scheduled task} following{deleted scheduled task} failed{Couldn’t delete scheduled task} failedFollowing{couldn’t delete scheduled task} other{Delete scheduled task}}",
          description:
            "Activity for the Codex tool action: Delete scheduled task. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        automation_suggested_create: {
          id: "localConversation.codexTool.automation_suggested_create.state",
          defaultMessage:
            "{state, select, active{Proposing scheduled task} completed{Proposed scheduled task} following{proposed scheduled task} failed{Couldn’t propose scheduled task} failedFollowing{couldn’t propose scheduled task} other{Propose scheduled task}}",
          description:
            "Activity for the Codex tool action: Propose scheduled task. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        open_browser: {
          id: "localConversation.codexTool.open_browser.state",
          defaultMessage:
            "{state, select, active{Opening browser} completed{Opened browser} following{opened browser} failed{Couldn’t open browser} failedFollowing{couldn’t open browser} other{Open browser}}",
          description:
            "Activity for the Codex tool action: Open browser. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        open_terminal: {
          id: "localConversation.codexTool.open_terminal.state",
          defaultMessage:
            "{state, select, active{Opening terminal} completed{Opened terminal} following{opened terminal} failed{Couldn’t open terminal} failedFollowing{couldn’t open terminal} other{Open terminal}}",
          description:
            "Activity for the Codex tool action: Open terminal. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
        open_review: {
          id: "localConversation.codexTool.open_review.state",
          defaultMessage:
            "{state, select, active{Opening review} completed{Opened review} following{opened review} failed{Couldn’t open review} failedFollowing{couldn’t open review} other{Open review}}",
          description:
            "Activity for the Codex tool action: Open review. Completed describes the tool call, not the status of a chat. Following variants appear after another action in a summary.",
        },
      }),
      A = {
        "cloud_threads.create.partial": { message: M.cloudCreatePartial, icon: (0, l.jsx)(p.JSV, {}) },
        create_thread: { message: M.create_thread, icon: (0, l.jsx)(p.JSV, {}) },
        create_worktree: { message: M.create_worktree, icon: (0, l.jsx)(p.bxT, {}) },
        get_worktree_creation_status: { message: M.get_worktree_creation_status, icon: (0, l.jsx)(p.bxT, {}) },
        fork_thread: { message: M.fork_thread, icon: (0, l.jsx)(p.uH1, {}) },
        list_threads: { message: M.list_threads, icon: (0, l.jsx)(p.OHc, {}) },
        list_archived_threads: { message: M.list_archived_threads, icon: (0, l.jsx)(p.kaj, {}) },
        read_thread: { message: M.read_thread, icon: (0, l.jsx)(p.OHc, {}) },
        send_message_to_thread: { message: M.send_message_to_thread, icon: (0, l.jsx)(p.OHc, {}) },
        wait_threads: { message: M.wait_threads, icon: (0, l.jsx)(p.QC9, {}) },
        handoff_thread: { message: M.handoff_thread, icon: (0, l.jsx)(p.gkn, {}) },
        get_handoff_status: { message: M.get_handoff_status, icon: (0, l.jsx)(p.gkn, {}) },
        set_thread_archived: { message: M.set_thread_archived, icon: (0, l.jsx)(p.kaj, {}) },
        set_thread_title: { message: M.set_thread_title, icon: (0, l.jsx)(p.Npl, {}) },
        list_projects: { message: M.list_projects, icon: (0, l.jsx)(p.efV, {}) },
        create_sidebar_section: { message: M.create_sidebar_section, icon: (0, l.jsx)(p.efV, {}) },
        rename_sidebar_section: { message: M.rename_sidebar_section, icon: (0, l.jsx)(p.Npl, {}) },
        delete_sidebar_section: { message: M.delete_sidebar_section, icon: (0, l.jsx)(p.cSG, {}) },
        move_thread_to_project: { message: M.move_thread_to_project, icon: (0, l.jsx)(p.efV, {}) },
        move_thread_to_sidebar_section: { message: M.move_thread_to_sidebar_section, icon: (0, l.jsx)(p.efV, {}) },
        move_project_to_sidebar_section: { message: M.move_project_to_sidebar_section, icon: (0, l.jsx)(p.efV, {}) },
        reorder_section: { message: M.reorder_section, icon: (0, l.jsx)(p.cvX, {}) },
        reorder_sidebar_projects: { message: M.reorder_sidebar_projects, icon: (0, l.jsx)(p.cvX, {}) },
        reorder_sidebar_sections: { message: M.reorder_sidebar_sections, icon: (0, l.jsx)(p.cvX, {}) },
        share_thread: { message: M.share_thread, icon: (0, l.jsx)(d.I, { "aria-hidden": !1, asset: f.l }) },
        automation_update: { message: M.automation_update, icon: (0, l.jsx)(p.QC9, {}) },
        navigate_to_codex_page: { message: M.navigate_to_codex_page, icon: (0, l.jsx)(p.OHc, {}) },
        open_in_codex: { message: M.open_in_codex, icon: (0, l.jsx)(p.Z1A, {}) },
        read_thread_terminal: { message: M.read_thread_terminal, icon: (0, l.jsx)(p._dX, {}) },
        attach_artifact: { message: M.attach_artifact, icon: (0, l.jsx)(p.ibM, {}) },
        list_artifacts: { message: M.list_artifacts, icon: (0, l.jsx)(p.Z1A, {}) },
        remove_artifact: { message: M.remove_artifact, icon: (0, l.jsx)(p.ibM, {}) },
        read_settings: { message: M.read_settings, icon: (0, l.jsx)(d.I, { asset: C.T }) },
        write_settings: { message: M.write_settings, icon: (0, l.jsx)(d.I, { asset: C.T }) },
        uninstall_plugin: { message: M.uninstall_plugin, icon: (0, l.jsx)(p.Dli, {}) },
        get_usage_limits: { message: M.get_usage_limits, icon: (0, l.jsx)(p.$n1, {}) },
        consume_usage_reset: { message: M.consume_usage_reset, icon: (0, l.jsx)(p.MUp, {}) },
        capture_screen_context: { message: M.capture_screen_context, icon: (0, l.jsx)(p.Som, {}) },
        end_realtime_voice_call: { message: M.end_realtime_voice_call, icon: (0, l.jsx)(d.I, { asset: b.L }) },
        fire_confetti: { message: M.fire_confetti, icon: (0, l.jsx)(y._, { className: "icon-xs" }) },
        load_workspace_dependencies: {
          message: M.load_workspace_dependencies,
          icon: (0, l.jsx)(y._, { className: "icon-xs" }),
        },
        create_project: { message: M.create_project, icon: (0, l.jsx)(p.efV, {}) },
        list_hosts: { message: M.list_hosts, icon: (0, l.jsx)(p.Som, {}) },
        set_thread_pinned: { message: M.set_thread_pinned, icon: (0, l.jsx)(p.P0k, {}) },
        transfer_voice_call: { message: M.transfer_voice_call, icon: (0, l.jsx)(p.ERJ, {}) },
        get_screen_annotations: { message: M.get_screen_annotations, icon: (0, l.jsx)(p.WtV, {}) },
        draw_screen_stroke: { message: M.draw_screen_stroke, icon: (0, l.jsx)(p.WtV, {}) },
        erase_screen_strokes: { message: M.erase_screen_strokes, icon: (0, l.jsx)(p.Xwi, {}) },
        request_option_picker: { message: M.request_option_picker, icon: (0, l.jsx)(y._, { className: "icon-xs" }) },
        request_onboarding_input: {
          message: M.request_onboarding_input,
          icon: (0, l.jsx)(y._, { className: "icon-xs" }),
        },
        setup_codex_step: { message: M.setup_codex_step, icon: (0, l.jsx)(y._, { className: "icon-xs" }) },
        complete_conversational_onboarding_task: {
          message: M.complete_conversational_onboarding_task,
          icon: (0, l.jsx)(y._, { className: "icon-xs" }),
        },
        complete_sidebar_onboarding_checklist_task: {
          message: M.complete_sidebar_onboarding_checklist_task,
          icon: (0, l.jsx)(y._, { className: "icon-xs" }),
        },
        "cloud_threads.list": { message: M["cloud_threads.list"], icon: (0, l.jsx)(p.OHc, {}) },
        "cloud_threads.read": { message: M["cloud_threads.read"], icon: (0, l.jsx)(p.OHc, {}) },
        "cloud_threads.create": { message: M["cloud_threads.create"], icon: (0, l.jsx)(p.JSV, {}) },
        "cloud_threads.attach": { message: M["cloud_threads.attach"], icon: (0, l.jsx)(p.ibM, {}) },
        "cloud_threads.send_message": { message: M["cloud_threads.send_message"], icon: (0, l.jsx)(p.OHc, {}) },
        restore_chat: { message: M.restore_chat, icon: (0, l.jsx)(p.kaj, {}) },
        pin_chat: { message: M.pin_chat, icon: (0, l.jsx)(p.P0k, {}) },
        unpin_chat: { message: M.unpin_chat, icon: (0, l.jsx)(p.ASU, {}) },
        pin_project: { message: M.pin_project, icon: (0, l.jsx)(p.P0k, {}) },
        unpin_project: { message: M.unpin_project, icon: (0, l.jsx)(p.ASU, {}) },
        automation_mode_update: { message: M.automation_mode_update, icon: (0, l.jsx)(p.QC9, {}) },
        automation_view: { message: M.automation_view, icon: (0, l.jsx)(p.QC9, {}) },
        automation_delete: { message: M.automation_delete, icon: (0, l.jsx)(p.QC9, {}) },
        automation_suggested_create: { message: M.automation_suggested_create, icon: (0, l.jsx)(p.QC9, {}) },
        open_browser: { message: M.open_browser, icon: (0, l.jsx)(p.ZEl, {}) },
        open_terminal: { message: M.open_terminal, icon: (0, l.jsx)(p._dX, {}) },
        open_review: { message: M.open_review, icon: (0, l.jsx)(p.ono, {}) },
      },
      w = a.object({
        action: a.string().optional(),
        active: a.boolean().optional(),
        archived: a.boolean().optional(),
        pinned: a.boolean().optional(),
        sectionId: a.string().nullable().optional(),
        mode: a.string().optional(),
        replace_block: a.object({}).optional(),
        target: a.object({ type: a.string() }).optional(),
      }),
      x = a.object({ type: a.literal("pending") })
    function T({
      tool: e,
      arguments: t,
      completed: o,
      failed: a = !1,
      isLeading: i = !0,
      result: l,
      outputText: s,
      serverName: c,
    }) {
      let n,
        r,
        d = w.safeParse(t).data,
        p = a,
        m = e,
        u = !1
      switch (e) {
        case "create_worktree":
          if (null != s)
            try {
              u = x.safeParse(JSON.parse(s)).success
            } catch {}
          break
        case "cloud_threads.create":
          if (o && !a && l?.type === "success") {
            let e = (0, g.Jb)({ isCodexAppsServer: !0, toolResult: l.raw }).structuredContent,
              t = h.A.safeParse(e)
            t.success &&
              t.data.results.some((e) => "failed" === e.status) &&
              ((n = t.data.results.filter((e) => "started" === e.status).length),
              (r = t.data.results.length),
              0 === n ? (p = !0) : (m = "cloud_threads.create.partial"))
          }
          break
        case "set_thread_archived":
          d?.archived === !1 && (m = "restore_chat")
          break
        case "set_thread_pinned":
          d?.pinned === !1 && (m = "unpin_chat")
          break
        case "move_thread_to_project":
          break
        case "move_thread_to_sidebar_section":
        case "move_project_to_sidebar_section": {
          let t = "move_project_to_sidebar_section" === e ? "project" : "chat"
          ;(d?.sectionId === "pinned" && (m = `pin_${t}`),
            null != d &&
              ((null == d.sectionId && Object.hasOwn(d, "sectionId")) ||
                "threads" === d.sectionId ||
                "chats" === d.sectionId) &&
              (m = `unpin_${t}`))
          break
        }
        case "automation_update":
          d?.mode != null &&
            "create" !== d.mode &&
            (m = "update" === d.mode ? "automation_mode_update" : `automation_${d.mode}`)
          break
        case "open_in_codex":
          d?.target != null && "file" !== d.target.type && (m = `open_${d.target.type}`)
      }
      let v = Object.hasOwn(A, m) ? A[m] : void 0
      if (
        (null == v &&
          ("codex_apps" === c || "pages" === c) &&
          ("manage_page_comment" === e && d?.action != null && "add" !== d.action
            ? (m = "react" === d.action && !1 === d.active ? "comment_remove_reaction" : `comment_${d.action}`)
            : "create_page_visualization" === e && d?.replace_block != null && (m = "replace_visualization"),
          Object.hasOwn(_, m) && (v = _[m])),
        null == v)
      )
        return null
      let f = "active"
      return (
        o &&
          ((f = i ? "completed" : "following"),
          p ? (f = i ? "failed" : "failedFollowing") : u && (f = i ? "pending" : "pendingFollowing")),
        { ...v, key: `${m}:${f}${null == r ? "" : `:${n}:${r}`}`, values: { state: f, started: n, total: r } }
      )
    }
    function P(e, t = !0) {
      return "codex_app" !== e.namespace && null != e.namespace
        ? null
        : T({
            tool: e.tool,
            arguments: e.arguments,
            completed: e.completed,
            failed: !1 === e.success,
            isLeading: t,
            outputText: e.contentItems?.find((e) => "inputText" === e.type)?.text,
          })
    }
    function k({ serverName: e, toolName: t, appContext: o, matchingApp: a, pluginId: l }) {
      if ("codex_app" === e) return t
      let s = o?.connectorId ?? a?.id,
        c = (0, u.o)(e, o?.actionName ?? t, s)
      if (null != c) return c
      let n = "thread_management" === e && (0, i.FF)(e, l)
      if ("codex_apps" !== e && !n) return null
      if (n || s === i.hB || (null == s && /^thread_management[._]/.test(t)))
        switch (n ? t : (o?.actionName ?? t).replace(/^thread_management[._]/, "")) {
          case "list_threads":
            return "cloud_threads.list"
          case "read_thread":
            return "cloud_threads.read"
          case "create_thread":
            return "cloud_threads.create"
          case "attach_thread":
            return "cloud_threads.attach"
          case "send_message":
            return "cloud_threads.send_message"
          default:
            return null
        }
      if (null != s && "connector_openai_threads" !== s) return null
      let r = o?.actionName ?? t,
        d = r.replace(/^cloud_threads[._]/, "")
      if (null == s && d === r) return null
      switch (d) {
        case "list":
        case "read":
        case "create":
        case "attach":
        case "send_message":
          return `cloud_threads.${d}`
        default:
          return null
      }
    }
    function W(e, t, o = !0) {
      let a = k({
        serverName: e.invocation.server,
        toolName: e.invocation.tool,
        pluginId: e.pluginId,
        appContext: e.appContext,
        matchingApp: (0, v.M)({
          appContext: e.appContext,
          apps: t,
          functionName: e.functionName,
          serverName: e.invocation.server,
          toolName: e.invocation.tool,
        }),
      })
      return null == a
        ? null
        : T({
            tool: a,
            arguments: e.invocation.arguments,
            completed: e.completed,
            failed: (0, g.Cb)({ result: e.result, isCodexAppsServer: "codex_apps" === e.invocation.server }),
            isLeading: o,
            result: e.result,
            outputText: e.result?.type === "success" ? e.result.content.find((e) => "text" === e.type)?.text : void 0,
            serverName: e.invocation.server,
          })
    }
  },
  aAb3(e, t, o) {
    var a = o("Qgfj"),
      i = o("ASxG")
    let l = (0, o("R2IA").Ys)({
        appRegistryKey: "browser",
        getMessages: () => s,
        toolArgumentsSchema: i.object({}).strip(),
        tools: {},
      }),
      s = (0, a.YK)({
        controlConsentAllow: {
          id: "browser.controlConsent.allow",
          defaultMessage: "Allow",
          description:
            "Button granting ChatGPT permission to control the user's browser at first use. This permission is saved for future requests, rather than applying only once.",
        },
        namedControlConsentTitle: {
          id: "browser.controlConsent.namedBrowserTitle",
          defaultMessage: "Allow ChatGPT to use your {browserName}?",
          description:
            "Title of the first-use consent asking permission for ChatGPT to use the user's browser. {browserName} is the browser's brand name, such as Chrome or Edge, and should not be translated.",
        },
        controlConsentTitle: {
          id: "browser.controlConsent.genericBrowserTitle",
          defaultMessage: "Allow ChatGPT to use your browser?",
          description:
            "Title of the first-use consent asking permission for ChatGPT to use the user's browser. The wording applies to any supported browser, including Chrome and Edge.",
        },
        controlConsentDescription: {
          id: "browser.controlConsent.description",
          defaultMessage: "ChatGPT can read your open tabs and take actions in them to help complete your tasks.",
          description:
            "Body of the first-use browser consent explaining that ChatGPT can read the user's open tabs and take actions in those tabs to complete tasks. This text applies to any supported browser.",
        },
        run_code_unsafe_active: {
          id: "localConversation.mcpToolActivity.browser.run_code_unsafe.active",
          defaultMessage: "Running JavaScript",
          description: "Active label for the Browser browser_run_code_unsafe MCP tool.",
        },
        run_code_unsafe_completed: {
          id: "localConversation.mcpToolActivity.browser.run_code_unsafe.completed",
          defaultMessage: "Ran JavaScript",
          description: "Completed label for the Browser browser_run_code_unsafe MCP tool.",
        },
      })
    o.d(
      t,
      {},
      {
        Dd: function (e) {
          if (
            ("browser-use" !== e.connector_id && "connector_openai_browser" !== e.connector_id) ||
            "allow_browser_control" !== e.tool_name ||
            "browser-use-first-time-control" !== e.browser_use_elicitation_id
          )
            return null
          let t = i.string().trim().min(1).safeParse(e.browser_use_browser_name)
          return t.success
            ? {
                descriptor: s.namedControlConsentTitle,
                description: s.controlConsentDescription,
                approveLabel: s.controlConsentAllow,
                values: { browserName: t.data },
              }
            : {
                descriptor: s.controlConsentTitle,
                description: s.controlConsentDescription,
                approveLabel: s.controlConsentAllow,
              }
        },
        FY: l,
        KW: function (e, t) {
          return e ? t.formatMessage(s.run_code_unsafe_completed) : t.formatMessage(s.run_code_unsafe_active)
        },
      },
    )
  },
  R2IA(e, t, o) {
    var a = o("csnw")
    function i({ getMessages: e, getValues: t, approval: o }) {
      let a = (o, a) => {
        let i = t(o),
          l = e()
        return null == i ? o.intl.formatMessage(l.withoutContext[a]) : o.intl.formatMessage(l.withContext[a], i)
      }
      return { active: (e) => a(e, "active"), completed: (e) => a(e, "completed"), approval: o }
    }
    function l({ getMessages: e, getValue: t, maxPreviewLength: o, valueName: a, approval: c }) {
      return i({
        getMessages: e,
        getValues: ({ hasInvocationContext: e, toolArguments: i }) => {
          if (!e || null == i) return null
          let l = s({ maxLength: o, value: t(i) })
          return null == l ? null : { [a]: l }
        },
        approval: c,
      })
    }
    function s({ maxLength: e, value: t }) {
      if (null == t) return null
      let o = t.replace(/\s+/g, " ").trim()
      return 0 === o.length ? null : o.length <= e ? o : `${o.slice(0, e - 1).trimEnd()}…`
    }
    o.d(
      t,
      {},
      {
        Ep: function ({
          getMessages: e,
          getQuery: t,
          maxPreviewLength: o,
          preferredKeys: i,
          shouldIncludeResultCount: c,
        }) {
          return {
            active: l({ getMessages: e, getValue: t, maxPreviewLength: o, valueName: "query" }).active,
            completed: (l) => {
              let n = e()
              if (!l.hasInvocationContext || null == l.toolArguments)
                return l.intl.formatMessage(n.withoutContext.completed)
              let r = s({ maxLength: o, value: t(l.toolArguments) })
              if (null != r) return l.intl.formatMessage(n.withContext.completed, { query: r })
              if (c(l.toolArguments)) {
                let e = (0, a.o)({ preferredKeys: i, toolResult: l.toolResult })
                if (null != e) return l.intl.formatMessage(n.completedCount, { count: e })
              }
              return l.intl.formatMessage(n.withoutContext.completed)
            },
          }
        },
        Jw: function (e, t) {
          return {
            active: ({ intl: t }) => t.formatMessage(e().active),
            completed: ({ intl: t }) => t.formatMessage(e().completed),
            approval: t,
          }
        },
        PM: function ({ getItemName: e, getMessages: t, maxPreviewLength: o, approval: a }) {
          return l({ getMessages: t, getValue: e, maxPreviewLength: o, valueName: "itemName", approval: a })
        },
        Ys: function ({ appRegistryKey: e, getMessages: t, toolArgumentsSchema: o, tools: a }) {
          return ({ completed: i, intl: l, matchingApp: s, toolArguments: c, toolResult: n, toolKey: r }) => {
            var d, p
            if (
              ((d = s),
              (p = e),
              !(
                null != d &&
                [d.name, d.id, ...(d.pluginDisplayNames ?? [])].some((e) => e.trim().toLowerCase().includes(p))
              ))
            )
              return null
            let m = a[r]
            if (null == m) {
              let e = t()[`${r}_${i ? "completed" : "active"}`]
              return null == e ? null : l.formatMessage(e)
            }
            let _ = (function ({ intl: e, toolArguments: t, toolArgumentsSchema: o, toolResult: a }) {
              let i = null,
                l = !1,
                s = () => {
                  if (!l) {
                    let e = o.safeParse(t)
                    ;((i = e.success ? e.data : null), (l = !0))
                  }
                  return i
                }
              return {
                get hasInvocationContext() {
                  return null != s()
                },
                intl: e,
                get toolArguments() {
                  return s()
                },
                toolResult: a,
              }
            })({ intl: l, toolArguments: c, toolArgumentsSchema: o, toolResult: n })
            return i ? m.completed(_) : m.active(_)
          }
        },
        _p: i,
        kF: s,
        lu: l,
        mg: function ({ toolArgumentsSchema: e, tools: t }) {
          return ({ toolArguments: o, toolKey: a }) => {
            let i = t[a]?.approval
            if (null == i) return null
            let l = e.safeParse(o)
            return i(l.success ? l.data : null)
          }
        },
        v9: function ({ getMessages: e, preferredKeys: t }) {
          return {
            active: (t) => {
              let o = e()
              return t.hasInvocationContext
                ? t.intl.formatMessage(o.withContext.active)
                : t.intl.formatMessage(o.withoutContext.active)
            },
            completed: (o) => {
              let i = e()
              if (!o.hasInvocationContext) return o.intl.formatMessage(i.withoutContext.completed)
              let l = (0, a.o)({ preferredKeys: t, toolResult: o.toolResult })
              return null != l
                ? o.intl.formatMessage(i.completedCount, { count: l })
                : o.intl.formatMessage(i.withContext.completed)
            },
          }
        },
        vP: function (e, t, o) {
          return {
            withoutContext: { active: e[`${t}_active`], completed: e[`${t}_completed`] },
            withContext: { active: e[`${t}_active${o}`], completed: e[`${t}_completed${o}`] },
          }
        },
      },
    )
  },
  alO6(e, t, o) {
    let a, i, l, s, c, n, r, d, p, m
    o.d(t, { EP: () => tw, xB: () => tx, Il: () => tW, kD: () => tP })
    var _,
      u = o("OZum"),
      v = o("ASxG"),
      g = o("mnR8"),
      h = o("wE2l"),
      f = o("uWou"),
      C = o("DYB3"),
      b = o("LFli"),
      y = o("aAb3"),
      M = o("Qgfj"),
      A = o("R2IA")
    let w = new Map([
        ["angular", "Angular"],
        ["css", "CSS"],
        ["django", "Django"],
        ["html", "HTML"],
        ["javascript", "JavaScript"],
        ["next.js", "Next.js"],
        ["nextjs", "Next.js"],
        ["react", "React"],
        ["svelte", "Svelte"],
        ["typescript", "TypeScript"],
        ["vue", "Vue"],
      ]),
      x = v
        .object({
          componentName: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          label: v
            .string()
            .trim()
            .min(1)
            .max(100)
            .optional()
            .catch(void 0),
          source: v
            .string()
            .trim()
            .min(1)
            .max(1e3)
            .optional()
            .catch(void 0),
        })
        .strip(),
      T = v
        .object({
          clientFrameworks: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          clientLanguages: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          componentName: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          count: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          description: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          editorType: v
            .enum(["design", "figjam", "slides"])
            .optional()
            .catch(void 0),
          fileName: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          label: v
            .string()
            .trim()
            .min(1)
            .max(100)
            .optional()
            .catch(void 0),
          mappings: v
            .array(x)
            .optional()
            .catch(void 0),
          name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          scaleMode: v
            .enum(["FILL", "FIT", "TILE"])
            .optional()
            .catch(void 0),
          source: v
            .string()
            .trim()
            .min(1)
            .max(1e3)
            .optional()
            .catch(void 0),
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          userIntent: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
        })
        .strip(),
      P = {
        add_code_connect_map: (0, A.Jw)(
          () => ({ active: D.add_code_connect_map_active, completed: D.add_code_connect_map_completed }),
          (e) =>
            S(e, {
              fallback: D.add_code_connect_map_approval,
              withContext: D.add_code_connect_map_approvalWithContext,
            }),
        ),
        create_new_file: (0, A.PM)({
          getItemName: (e) => e.fileName,
          getMessages: () => (0, A.vP)(D, "create_new_file", "WithContext"),
          maxPreviewLength: 40,
          approval: function (e) {
            let t = G(e?.fileName),
              o = e?.editorType
            return null == t && null == o
              ? { descriptor: D.create_new_file_approval }
              : {
                  descriptor: D.create_new_file_approvalWithContext,
                  values: { editorType: o ?? "unknown", fileName: t ?? "", hasFileName: null == t ? "no" : "yes" },
                }
          },
        }),
        generate_deck: (0, A.Jw)(
          () => ({ active: D.generate_deck_active, completed: D.generate_deck_completed }),
          (e) =>
            q(e?.title, {
              detail: e?.description ?? e?.userIntent,
              fallback: D.generate_deck_approval,
              withContext: D.generate_deck_approvalWithContext,
            }),
        ),
        generate_diagram: (0, A.PM)({
          getItemName: (e) => e.name ?? e.userIntent,
          getMessages: () => (0, A.vP)(D, "generate_diagram", "WithContext"),
          maxPreviewLength: 40,
          approval: (e) =>
            q(e?.name, {
              detail: e?.userIntent,
              fallback: D.generate_diagram_approval,
              withContext: D.generate_diagram_approvalWithContext,
            }),
        }),
        generate_figma_design: (0, A.Jw)(
          () => ({ active: D.generate_figma_design_active, completed: D.generate_figma_design_completed }),
          () => ({ descriptor: D.generate_figma_design_approval }),
        ),
        get_design_context: (0, A._p)({
          getMessages: () => (0, A.vP)(D, "get_design_context", "WithContext"),
          getValues: ({ hasInvocationContext: e, toolArguments: t }) => {
            if (!e || null == t) return null
            let o = (function ({ clientFrameworks: e, clientLanguages: t }) {
              let o = j(e)
              if (o.length > 0) return o.join(", ")
              let a = j(t)
              return a.length > 0 ? a.join(", ") : null
            })(t)
            return null == o ? null : { target: o }
          },
        }),
        search_design_system: (0, A.lu)({
          getMessages: () => (0, A.vP)(D, "search_design_system", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        send_code_connect_mappings: (0, A.Jw)(
          () => ({ active: D.send_code_connect_mappings_active, completed: D.send_code_connect_mappings_completed }),
          function (e) {
            let t = e?.mappings
            if (null == t || 0 === t.length) return { descriptor: D.send_code_connect_mappings_approval }
            if (1 === t.length)
              return S(t[0] ?? null, {
                fallback: D.send_code_connect_mappings_approval,
                withContext: D.send_code_connect_mappings_approvalWithSingleMapping,
              })
            let o = G(
              t
                .map(({ componentName: e }) => e)
                .filter((e) => null != e)
                .join(", "),
            )
            return {
              descriptor: D.send_code_connect_mappings_approvalWithContext,
              values: { componentNames: o ?? "", count: t.length, hasComponentNames: null == o ? "no" : "yes" },
            }
          },
        ),
        upload_assets: (0, A.Jw)(
          () => ({ active: D.upload_assets_active, completed: D.upload_assets_completed }),
          function (e) {
            return e?.count == null
              ? { descriptor: D.upload_assets_approval }
              : {
                  descriptor: D.upload_assets_approvalWithContext,
                  values: {
                    count: e.count,
                    hasScaleMode: null == e.scaleMode ? "no" : "yes",
                    scaleMode: e.scaleMode ?? "unknown",
                  },
                }
          },
        ),
        use_figma: (0, A.Jw)(
          () => ({ active: D.use_figma_active, completed: D.use_figma_completed }),
          (e) => q(e?.description, { fallback: D.use_figma_approval, withContext: D.use_figma_approvalWithContext }),
        ),
      },
      k = (0, A.Ys)({ appRegistryKey: "figma", getMessages: () => D, toolArgumentsSchema: T, tools: P }),
      W = (0, A.mg)({ toolArgumentsSchema: T, tools: P })
    function q(e, { detail: t, fallback: o, withContext: a }) {
      let i = G(e),
        l = G(t)
      return null == i && null == l
        ? { descriptor: o }
        : {
            descriptor: a,
            values: {
              detail: l ?? "",
              hasDetail: null == l ? "no" : "yes",
              hasItemName: null == i ? "no" : "yes",
              itemName: i ?? "",
            },
          }
    }
    function S(e, { fallback: t, withContext: o }) {
      let a = G(e?.componentName),
        i = G(e?.label),
        l = G(e?.source)
      return null == a && null == i && null == l
        ? { descriptor: t }
        : {
            descriptor: o,
            values: {
              componentName: a ?? "",
              hasComponentName: null == a ? "no" : "yes",
              hasLabel: null == i ? "no" : "yes",
              hasSource: null == l ? "no" : "yes",
              label: i ?? "",
              source: l ?? "",
            },
          }
    }
    function G(e) {
      return (0, A.kF)({ maxLength: 40, value: e })
    }
    function j(e) {
      return null == e
        ? []
        : e
            .split(",")
            .map((e) => e.trim())
            .filter((e) => e.length > 0 && "unknown" !== e.toLowerCase())
            .map((e) => w.get(e.toLowerCase()) ?? (0, u.g)(e))
            .filter((e, t, o) => o.indexOf(e) === t)
    }
    let D = (0, M.YK)({
        add_code_connect_map_approval: {
          id: "localConversation.mcpToolApproval.figma.add_code_connect_map.fallback",
          defaultMessage: "Allow Figma to add a Code Connect mapping?",
          description:
            "Approval request for adding a Figma Code Connect mapping when no readable mapping details are available.",
        },
        add_code_connect_map_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.add_code_connect_map.context",
          defaultMessage:
            'Allow Figma to add a Code Connect mapping{hasComponentName, select, yes { for "{componentName}"} other {}}{hasSource, select, yes { from "{source}"} other {}}{hasLabel, select, yes { using {label}} other {}}?',
          description:
            "Approval request for adding a Figma Code Connect mapping with the available code component name, source path or URL, and framework or language label.",
        },
        create_new_file_approval: {
          id: "localConversation.mcpToolApproval.figma.create_new_file.fallback",
          defaultMessage: "Allow Figma to create a file?",
          description: "Approval request for creating a Figma file when no readable file details are available.",
        },
        create_new_file_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.create_new_file.context",
          defaultMessage:
            'Allow Figma to create {editorType, select, design {a design file} figjam {a FigJam board} slides {a slide deck} other {a file}}{hasFileName, select, yes { named "{fileName}"} other {}}?',
          description:
            "Approval request for creating a Figma file with its available file name and file type: design file, FigJam board, or slide deck.",
        },
        generate_deck_approval: {
          id: "localConversation.mcpToolApproval.figma.generate_deck.fallback",
          defaultMessage: "Allow Figma to generate a slide deck?",
          description:
            "Approval request for generating a Figma slide deck when no readable deck details are available.",
        },
        generate_deck_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.generate_deck.context",
          defaultMessage:
            'Allow Figma to generate{hasItemName, select, yes { a slide deck titled "{itemName}"} other { a slide deck}}{hasDetail, select, yes { about "{detail}"} other {}}?',
          description:
            "Approval request for generating a Figma slide deck with its available title and description or user intent.",
        },
        generate_diagram_approval: {
          id: "localConversation.mcpToolApproval.figma.generate_diagram.fallback",
          defaultMessage: "Allow Figma to generate a diagram?",
          description:
            "Approval request for generating a Figma diagram when no readable diagram details are available.",
        },
        generate_diagram_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.generate_diagram.context",
          defaultMessage:
            'Allow Figma to generate{hasItemName, select, yes { a diagram titled "{itemName}"} other { a diagram}}{hasDetail, select, yes { for "{detail}"} other {}}?',
          description: "Approval request for generating a Figma diagram with its available name and user intent.",
        },
        generate_figma_design_approval: {
          id: "localConversation.mcpToolApproval.figma.generate_figma_design.fallback",
          defaultMessage: "Allow Figma to import a webpage into a design?",
          description:
            "Approval request for importing a webpage into an existing Figma design. The tool has no human-readable target arguments.",
        },
        send_code_connect_mappings_approval: {
          id: "localConversation.mcpToolApproval.figma.send_code_connect_mappings.fallback",
          defaultMessage: "Allow Figma to save Code Connect mappings?",
          description:
            "Approval request for saving Figma Code Connect mappings when no readable mapping details are available.",
        },
        send_code_connect_mappings_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.send_code_connect_mappings.context",
          defaultMessage:
            'Allow Figma to save {count, plural, one {a Code Connect mapping} other {{count, number} Code Connect mappings}}{hasComponentNames, select, yes { for "{componentNames}"} other {}}?',
          description:
            "Approval request for saving multiple Figma Code Connect mappings with the mapping count and available code component names.",
        },
        send_code_connect_mappings_approvalWithSingleMapping: {
          id: "localConversation.mcpToolApproval.figma.send_code_connect_mappings.singleMapping",
          defaultMessage:
            'Allow Figma to save a Code Connect mapping{hasComponentName, select, yes { for "{componentName}"} other {}}{hasSource, select, yes { from "{source}"} other {}}{hasLabel, select, yes { using {label}} other {}}?',
          description:
            "Approval request for saving one Figma Code Connect mapping with the available code component name, source path or URL, and framework or language label.",
        },
        upload_assets_approval: {
          id: "localConversation.mcpToolApproval.figma.upload_assets.fallback",
          defaultMessage: "Allow Figma to upload assets?",
          description:
            "Approval request for uploading assets to Figma when the readable upload details are unavailable.",
        },
        upload_assets_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.upload_assets.context",
          defaultMessage:
            "Allow Figma to upload {count, plural, one {an asset} other {{count, number} assets}}{hasScaleMode, select, yes { using {scaleMode, select, FILL {fill} FIT {fit} TILE {tile} other {custom}} image scaling} other {}}?",
          description:
            "Approval request for uploading assets to Figma with the asset count and available fill, fit, or tile image scaling mode.",
        },
        use_figma_approval: {
          id: "localConversation.mcpToolApproval.figma.use_figma.fallback",
          defaultMessage: "Allow Figma to make changes to a design?",
          description:
            "Approval request for making changes to a Figma design when no readable action description is available.",
        },
        use_figma_approvalWithContext: {
          id: "localConversation.mcpToolApproval.figma.use_figma.context",
          defaultMessage: 'Allow Figma to make this design change: "{itemName}"?',
          description:
            "Approval request for making changes to a Figma design with the tool call's human-readable action description.",
        },
        add_code_connect_map_active: {
          id: "localConversation.mcpToolActivity.figma.add_code_connect_map.active",
          defaultMessage: "Adding Code Connect mapping",
          description: "Active label for the figma add_code_connect_map MCP tool.",
        },
        add_code_connect_map_completed: {
          id: "localConversation.mcpToolActivity.figma.add_code_connect_map.completed",
          defaultMessage: "Added Code Connect mapping",
          description: "Completed label for the figma add_code_connect_map MCP tool.",
        },
        create_new_file_active: {
          id: "localConversation.mcpToolActivity.figma.create_new_file.active",
          defaultMessage: "Creating Figma file",
          description: "Active label for the figma create_new_file MCP tool.",
        },
        create_new_file_completed: {
          id: "localConversation.mcpToolActivity.figma.create_new_file.completed",
          defaultMessage: "Created Figma file",
          description: "Completed label for the figma create_new_file MCP tool.",
        },
        download_assets_active: {
          id: "localConversation.mcpToolActivity.figma.download_assets.active",
          defaultMessage: "Downloading assets",
          description: "Active label for the figma download_assets MCP tool.",
        },
        download_assets_completed: {
          id: "localConversation.mcpToolActivity.figma.download_assets.completed",
          defaultMessage: "Downloaded assets",
          description: "Completed label for the figma download_assets MCP tool.",
        },
        generate_deck_active: {
          id: "localConversation.mcpToolActivity.figma.generate_deck.active",
          defaultMessage: "Generating deck",
          description: "Active label for the figma generate_deck MCP tool.",
        },
        generate_deck_completed: {
          id: "localConversation.mcpToolActivity.figma.generate_deck.completed",
          defaultMessage: "Generated deck",
          description: "Completed label for the figma generate_deck MCP tool.",
        },
        generate_diagram_active: {
          id: "localConversation.mcpToolActivity.figma.generate_diagram.active",
          defaultMessage: "Generating diagram",
          description: "Active label for the figma generate_diagram MCP tool.",
        },
        generate_diagram_completed: {
          id: "localConversation.mcpToolActivity.figma.generate_diagram.completed",
          defaultMessage: "Generated diagram",
          description: "Completed label for the figma generate_diagram MCP tool.",
        },
        generate_figma_design_active: {
          id: "localConversation.mcpToolActivity.figma.generate_figma_design.active",
          defaultMessage: "Generating Figma design",
          description: "Active label for the figma generate_figma_design MCP tool.",
        },
        generate_figma_design_completed: {
          id: "localConversation.mcpToolActivity.figma.generate_figma_design.completed",
          defaultMessage: "Generated Figma design",
          description: "Completed label for the figma generate_figma_design MCP tool.",
        },
        get_code_connect_map_active: {
          id: "localConversation.mcpToolActivity.figma.get_code_connect_map.active",
          defaultMessage: "Getting Code Connect mapping",
          description: "Active label for the figma get_code_connect_map MCP tool.",
        },
        get_code_connect_map_completed: {
          id: "localConversation.mcpToolActivity.figma.get_code_connect_map.completed",
          defaultMessage: "Got Code Connect mapping",
          description: "Completed label for the figma get_code_connect_map MCP tool.",
        },
        get_code_connect_suggestions_active: {
          id: "localConversation.mcpToolActivity.figma.get_code_connect_suggestions.active",
          defaultMessage: "Getting Code Connect suggestions",
          description: "Active label for the figma get_code_connect_suggestions MCP tool.",
        },
        get_code_connect_suggestions_completed: {
          id: "localConversation.mcpToolActivity.figma.get_code_connect_suggestions.completed",
          defaultMessage: "Got Code Connect suggestions",
          description: "Completed label for the figma get_code_connect_suggestions MCP tool.",
        },
        get_context_for_code_connect_active: {
          id: "localConversation.mcpToolActivity.figma.get_context_for_code_connect.active",
          defaultMessage: "Getting Code Connect context",
          description: "Active label for the figma get_context_for_code_connect MCP tool.",
        },
        get_context_for_code_connect_completed: {
          id: "localConversation.mcpToolActivity.figma.get_context_for_code_connect.completed",
          defaultMessage: "Got Code Connect context",
          description: "Completed label for the figma get_context_for_code_connect MCP tool.",
        },
        get_design_context_active: {
          id: "localConversation.mcpToolActivity.figma.get_design_context.active",
          defaultMessage: "Getting design context",
          description: "Active label for the figma get_design_context MCP tool.",
        },
        get_design_context_completed: {
          id: "localConversation.mcpToolActivity.figma.get_design_context.completed",
          defaultMessage: "Got design context",
          description: "Completed label for the figma get_design_context MCP tool.",
        },
        get_figjam_active: {
          id: "localConversation.mcpToolActivity.figma.get_figjam.active",
          defaultMessage: "Getting FigJam",
          description: "Active label for the figma get_figjam MCP tool.",
        },
        get_figjam_completed: {
          id: "localConversation.mcpToolActivity.figma.get_figjam.completed",
          defaultMessage: "Got FigJam",
          description: "Completed label for the figma get_figjam MCP tool.",
        },
        get_libraries_active: {
          id: "localConversation.mcpToolActivity.figma.get_libraries.active",
          defaultMessage: "Getting libraries",
          description: "Active label for the figma get_libraries MCP tool.",
        },
        get_libraries_completed: {
          id: "localConversation.mcpToolActivity.figma.get_libraries.completed",
          defaultMessage: "Got libraries",
          description: "Completed label for the figma get_libraries MCP tool.",
        },
        get_metadata_active: {
          id: "localConversation.mcpToolActivity.figma.get_metadata.active",
          defaultMessage: "Getting metadata",
          description: "Active label for the figma get_metadata MCP tool.",
        },
        get_metadata_completed: {
          id: "localConversation.mcpToolActivity.figma.get_metadata.completed",
          defaultMessage: "Got metadata",
          description: "Completed label for the figma get_metadata MCP tool.",
        },
        get_motion_context_active: {
          id: "localConversation.mcpToolActivity.figma.get_motion_context.active",
          defaultMessage: "Getting motion context",
          description: "Active label for the figma get_motion_context MCP tool.",
        },
        get_motion_context_completed: {
          id: "localConversation.mcpToolActivity.figma.get_motion_context.completed",
          defaultMessage: "Got motion context",
          description: "Completed label for the figma get_motion_context MCP tool.",
        },
        get_screenshot_active: {
          id: "localConversation.mcpToolActivity.figma.get_screenshot.active",
          defaultMessage: "Getting screenshot",
          description: "Active label for the figma get_screenshot MCP tool.",
        },
        get_screenshot_completed: {
          id: "localConversation.mcpToolActivity.figma.get_screenshot.completed",
          defaultMessage: "Got screenshot",
          description: "Completed label for the figma get_screenshot MCP tool.",
        },
        get_variable_defs_active: {
          id: "localConversation.mcpToolActivity.figma.get_variable_defs.active",
          defaultMessage: "Getting variable definitions",
          description: "Active label for the figma get_variable_defs MCP tool.",
        },
        get_variable_defs_completed: {
          id: "localConversation.mcpToolActivity.figma.get_variable_defs.completed",
          defaultMessage: "Got variable definitions",
          description: "Completed label for the figma get_variable_defs MCP tool.",
        },
        search_design_system_active: {
          id: "localConversation.mcpToolActivity.figma.search_design_system.active",
          defaultMessage: "Searching design system",
          description: "Active label for the figma search_design_system MCP tool.",
        },
        search_design_system_completed: {
          id: "localConversation.mcpToolActivity.figma.search_design_system.completed",
          defaultMessage: "Searched design system",
          description: "Completed label for the figma search_design_system MCP tool.",
        },
        send_code_connect_mappings_active: {
          id: "localConversation.mcpToolActivity.figma.send_code_connect_mappings.active",
          defaultMessage: "Saving Code Connect mappings",
          description: "Active label for the figma send_code_connect_mappings MCP tool.",
        },
        send_code_connect_mappings_completed: {
          id: "localConversation.mcpToolActivity.figma.send_code_connect_mappings.completed",
          defaultMessage: "Saved Code Connect mappings",
          description: "Completed label for the figma send_code_connect_mappings MCP tool.",
        },
        upload_assets_active: {
          id: "localConversation.mcpToolActivity.figma.upload_assets.active",
          defaultMessage: "Uploading assets",
          description: "Active label for the figma upload_assets MCP tool.",
        },
        upload_assets_completed: {
          id: "localConversation.mcpToolActivity.figma.upload_assets.completed",
          defaultMessage: "Uploaded assets",
          description: "Completed label for the figma upload_assets MCP tool.",
        },
        use_figma_active: {
          id: "localConversation.mcpToolActivity.figma.use_figma.active",
          defaultMessage: "Working in Figma",
          description: "Active label for the figma use_figma MCP tool.",
        },
        use_figma_completed: {
          id: "localConversation.mcpToolActivity.figma.use_figma.completed",
          defaultMessage: "Worked in Figma",
          description: "Completed label for the figma use_figma MCP tool.",
        },
        create_new_file_activeWithContext: {
          id: "localConversation.mcpToolActivity.figma.create_new_file.activeWithContext",
          defaultMessage: 'Creating Figma file "{itemName}"',
          description: "Active label for the figma create_new_file MCP tool with its file name.",
        },
        create_new_file_completedWithContext: {
          id: "localConversation.mcpToolActivity.figma.create_new_file.completedWithContext",
          defaultMessage: 'Created Figma file "{itemName}"',
          description: "Completed label for the figma create_new_file MCP tool with its file name.",
        },
        generate_diagram_activeWithContext: {
          id: "localConversation.mcpToolActivity.figma.generate_diagram.activeWithContext",
          defaultMessage: 'Generating diagram "{itemName}"',
          description: "Active label for the figma generate_diagram MCP tool with invocation context.",
        },
        generate_diagram_completedWithContext: {
          id: "localConversation.mcpToolActivity.figma.generate_diagram.completedWithContext",
          defaultMessage: 'Generated diagram "{itemName}"',
          description: "Completed label for the figma generate_diagram MCP tool with invocation context.",
        },
        get_design_context_activeWithContext: {
          id: "localConversation.mcpToolActivity.figma.get_design_context.activeWithContext",
          defaultMessage: "Getting design context for {target}",
          description: "Active label for the figma get_design_context MCP tool with invocation context.",
        },
        get_design_context_completedWithContext: {
          id: "localConversation.mcpToolActivity.figma.get_design_context.completedWithContext",
          defaultMessage: "Got design context for {target}",
          description: "Completed label for the figma get_design_context MCP tool with invocation context.",
        },
        search_design_system_activeWithQuery: {
          id: "localConversation.mcpToolActivity.figma.search_design_system.activeWithQuery",
          defaultMessage: 'Searching design system "{query}"',
          description: "Active label for the figma search_design_system MCP tool with its search query.",
        },
        search_design_system_completedWithQuery: {
          id: "localConversation.mcpToolActivity.figma.search_design_system.completedWithQuery",
          defaultMessage: 'Searched design system "{query}"',
          description: "Completed label for the figma search_design_system MCP tool with its search query.",
        },
      }),
      R = v
        .string()
        .trim()
        .min(1)
        .max(120)
        .optional()
        .catch(void 0),
      N = v
        .object({
          issue_number: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          pr_number: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          pull_number: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          reaction: v
            .string()
            .trim()
            .min(1)
            .max(24)
            .regex(/^[a-z0-9_+-]+$/i)
            .optional()
            .catch(void 0),
          repo_full_name: R,
          repository_full_name: R,
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
        })
        .strip(),
      F = v
        .string()
        .trim()
        .min(1)
        .optional()
        .catch(void 0),
      L = v
        .string()
        .optional()
        .catch(void 0),
      V = v
        .array(v.string().trim().min(1).max(200))
        .max(20)
        .optional()
        .catch(void 0),
      I = v
        .object({
          action: v
            .enum(["COMMENT", "APPROVE", "REQUEST_CHANGES"])
            .optional()
            .catch(void 0),
          assignees: V,
          base: F,
          base_branch: F,
          base_ref: F,
          body: L,
          branch: F,
          branch_name: F,
          comment: L,
          draft: v
            .boolean()
            .optional()
            .catch(void 0),
          force: v
            .boolean()
            .optional()
            .catch(void 0),
          head: F,
          head_branch: F,
          head_repo: F,
          issue: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          issue_number: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          label: F,
          labels: V,
          merge_method: v
            .enum(["merge", "squash", "rebase"])
            .optional()
            .catch(void 0),
          milestone: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          message: L,
          path: F,
          pr_number: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          reaction: v
            .string()
            .trim()
            .min(1)
            .max(24)
            .regex(/^[a-z0-9_+-]+$/i)
            .optional()
            .catch(void 0),
          repo_full_name: F,
          repository_full_name: F,
          review: L,
          reviewers: V,
          state: v
            .enum(["open", "closed"])
            .optional()
            .catch(void 0),
          team_reviewers: V,
          title: F,
        })
        .strip(),
      U = {
        add_issue_assignees: O({ getMessages: () => (0, A.vP)(E, "add_issue_assignees", "WithContext") }),
        add_issue_labels: O({ getMessages: () => (0, A.vP)(E, "add_issue_labels", "WithContext") }),
        add_reaction_to_issue_comment: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "add_reaction_to_issue_comment", "WithReactionOnly"),
          getValue: (e) => e.reaction?.replaceAll("_", " "),
          maxPreviewLength: 24,
          valueName: "reaction",
        }),
        add_reaction_to_pr: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "add_reaction_to_pr", "WithReactionOnly"),
          getValue: (e) => e.reaction?.replaceAll("_", " "),
          maxPreviewLength: 24,
          valueName: "reaction",
        }),
        add_reaction_to_pr_review_comment: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "add_reaction_to_pr_review_comment", "WithReactionOnly"),
          getValue: (e) => e.reaction?.replaceAll("_", " "),
          maxPreviewLength: 24,
          valueName: "reaction",
        }),
        convert_pull_request_to_draft: O({
          getMessages: () => (0, A.vP)(E, "convert_pull_request_to_draft", "WithContext"),
        }),
        create_branch: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "create_branch", "WithRepository"),
          getValue: (e) => e.repo_full_name ?? e.repository_full_name,
          maxPreviewLength: 40,
          valueName: "repository",
        }),
        create_issue: (0, A.PM)({
          getItemName: (e) => e.title,
          getMessages: () => (0, A.vP)(E, "create_issue", "WithTitle"),
          maxPreviewLength: 40,
        }),
        create_pull_request: (0, A.PM)({
          getItemName: (e) => e.title,
          getMessages: () => (0, A.vP)(E, "create_pull_request", "WithTitle"),
          maxPreviewLength: 40,
        }),
        fetch: (0, A.Jw)(() => ({ active: E.fetch_file_active, completed: E.fetch_file_completed })),
        fetch_issue: O({ getMessages: () => (0, A.vP)(E, "fetch_issue", "WithContext") }),
        fetch_issue_comments: O({ getMessages: () => (0, A.vP)(E, "fetch_issue_comments", "WithContext") }),
        fetch_pr: O({ getMessages: () => (0, A.vP)(E, "fetch_pr", "WithContext") }),
        fetch_pr_comments: O({ getMessages: () => (0, A.vP)(E, "fetch_pr_comments", "WithContext") }),
        get_pr_info: O({ getMessages: () => (0, A.vP)(E, "get_pr_info", "WithContext") }),
        label_pr: O({ getMessages: () => (0, A.vP)(E, "label_pr", "WithContext") }),
        list_repositories_by_affiliation: (0, A.Jw)(() => ({
          active: E.list_repositories_active,
          completed: E.list_repositories_completed,
        })),
        list_repositories_by_installation: (0, A.Jw)(() => ({
          active: E.list_repositories_active,
          completed: E.list_repositories_completed,
        })),
        mark_pull_request_ready_for_review: O({
          getMessages: () => (0, A.vP)(E, "mark_pull_request_ready_for_review", "WithContext"),
        }),
        merge_pull_request: O({ getMessages: () => (0, A.vP)(E, "merge_pull_request", "WithContext") }),
        remove_issue_assignees: O({ getMessages: () => (0, A.vP)(E, "remove_issue_assignees", "WithContext") }),
        remove_issue_label: O({ getMessages: () => (0, A.vP)(E, "remove_issue_label", "WithContext") }),
        request_pull_request_reviewers: O({
          getMessages: () => (0, A.vP)(E, "request_pull_request_reviewers", "WithContext"),
        }),
        search: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_branches: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search_branches", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_commits: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search_commits", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_installed_repositories_streaming: (0, A.Jw)(() => ({
          active: E.search_repositories_active,
          completed: E.search_repositories_completed,
        })),
        search_installed_repositories_v2: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search_repositories", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_issues: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search_issues", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_prs: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search_prs", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_repositories: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "search_repositories", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        update_issue: O({ getMessages: () => (0, A.vP)(E, "update_issue", "WithContext") }),
        update_pull_request: O({ getMessages: () => (0, A.vP)(E, "update_pull_request", "WithContext") }),
        update_ref: (0, A.lu)({
          getMessages: () => (0, A.vP)(E, "update_ref", "WithRepository"),
          getValue: (e) => e.repo_full_name ?? e.repository_full_name,
          maxPreviewLength: 40,
          valueName: "repository",
        }),
      },
      H = (0, A.Ys)({ appRegistryKey: "github", getMessages: () => E, toolArgumentsSchema: N, tools: U })
    function Q(e) {
      return (0, A.kF)({ maxLength: 40, value: e })
    }
    function $(e) {
      return Q(e?.join(", "))
    }
    function O({ getMessages: e }) {
      return (0, A._p)({
        getMessages: e,
        getValues: ({ hasInvocationContext: e, toolArguments: t }) =>
          e && null != t
            ? (function (e) {
                let t,
                  o,
                  a = e.repo_full_name ?? e.repository_full_name,
                  i = e.pr_number ?? e.pull_number
                if (null != i) ((t = null == a ? "pullRequest" : "repositoryPullRequest"), (o = i))
                else {
                  if (null == e.issue_number) return null
                  ;((t = null == a ? "issue" : "repositoryIssue"), (o = e.issue_number))
                }
                return { contextType: t, number: `${o}`, repository: a ?? "" }
              })(t)
            : null,
      })
    }
    let E = (0, M.YK)({
        add_comment_to_issue_active: {
          id: "localConversation.mcpToolActivity.github.add_comment_to_issue.active",
          defaultMessage: "Adding comment",
          description: "Active label for the github add_comment_to_issue MCP tool.",
        },
        add_comment_to_issue_completed: {
          id: "localConversation.mcpToolActivity.github.add_comment_to_issue.completed",
          defaultMessage: "Added comment",
          description: "Completed label for the github add_comment_to_issue MCP tool.",
        },
        add_issue_assignees_active: {
          id: "localConversation.mcpToolActivity.github.add_issue_assignees.active",
          defaultMessage: "Adding issue assignees",
          description: "Active label for the github add_issue_assignees MCP tool.",
        },
        add_issue_assignees_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.add_issue_assignees.activeWithContext",
          defaultMessage:
            "Adding issue assignees {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Active label for the github add_issue_assignees MCP tool with repository, issue, or pull request context.",
        },
        add_issue_assignees_completed: {
          id: "localConversation.mcpToolActivity.github.add_issue_assignees.completed",
          defaultMessage: "Added issue assignees",
          description: "Completed label for the github add_issue_assignees MCP tool.",
        },
        add_issue_assignees_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.add_issue_assignees.completedWithContext",
          defaultMessage:
            "Added issue assignees {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Completed label for the github add_issue_assignees MCP tool with repository, issue, or pull request context.",
        },
        add_issue_labels_active: {
          id: "localConversation.mcpToolActivity.github.add_issue_labels.active",
          defaultMessage: "Adding issue labels",
          description: "Active label for the github add_issue_labels MCP tool.",
        },
        add_issue_labels_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.add_issue_labels.activeWithContext",
          defaultMessage:
            "Adding issue labels {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Active label for the github add_issue_labels MCP tool with repository, issue, or pull request context.",
        },
        add_issue_labels_completed: {
          id: "localConversation.mcpToolActivity.github.add_issue_labels.completed",
          defaultMessage: "Added issue labels",
          description: "Completed label for the github add_issue_labels MCP tool.",
        },
        add_issue_labels_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.add_issue_labels.completedWithContext",
          defaultMessage:
            "Added issue labels {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Completed label for the github add_issue_labels MCP tool with repository, issue, or pull request context.",
        },
        add_reaction_to_issue_comment_active: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_issue_comment.active",
          defaultMessage: "Adding reaction to comment",
          description: "Active label for the github add_reaction_to_issue_comment MCP tool.",
        },
        add_reaction_to_issue_comment_activeWithReactionOnly: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_issue_comment.activeWithReactionOnly",
          defaultMessage: "Adding {reaction} reaction to comment",
          description: "Active label for the github add_reaction_to_issue_comment MCP tool with its reaction.",
        },
        add_reaction_to_issue_comment_completed: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_issue_comment.completed",
          defaultMessage: "Added reaction to comment",
          description: "Completed label for the github add_reaction_to_issue_comment MCP tool.",
        },
        add_reaction_to_issue_comment_completedWithReactionOnly: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_issue_comment.completedWithReactionOnly",
          defaultMessage: "Added {reaction} reaction to comment",
          description: "Completed label for the github add_reaction_to_issue_comment MCP tool with its reaction.",
        },
        add_reaction_to_pr_active: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr.active",
          defaultMessage: "Adding reaction to pull request",
          description: "Active label for the github add_reaction_to_pr MCP tool.",
        },
        add_reaction_to_pr_activeWithReactionOnly: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr.activeWithReactionOnly",
          defaultMessage: "Adding {reaction} reaction to pull request",
          description: "Active label for the github add_reaction_to_pr MCP tool with its reaction.",
        },
        add_reaction_to_pr_completed: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr.completed",
          defaultMessage: "Added reaction to pull request",
          description: "Completed label for the github add_reaction_to_pr MCP tool.",
        },
        add_reaction_to_pr_completedWithReactionOnly: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr.completedWithReactionOnly",
          defaultMessage: "Added {reaction} reaction to pull request",
          description: "Completed label for the github add_reaction_to_pr MCP tool with its reaction.",
        },
        add_reaction_to_pr_review_comment_active: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr_review_comment.active",
          defaultMessage: "Adding reaction to review comment",
          description: "Active label for the github add_reaction_to_pr_review_comment MCP tool.",
        },
        add_reaction_to_pr_review_comment_activeWithReactionOnly: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr_review_comment.activeWithReactionOnly",
          defaultMessage: "Adding {reaction} reaction to review comment",
          description: "Active label for the github add_reaction_to_pr_review_comment MCP tool with its reaction.",
        },
        add_reaction_to_pr_review_comment_completed: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr_review_comment.completed",
          defaultMessage: "Added reaction to review comment",
          description: "Completed label for the github add_reaction_to_pr_review_comment MCP tool.",
        },
        add_reaction_to_pr_review_comment_completedWithReactionOnly: {
          id: "localConversation.mcpToolActivity.github.add_reaction_to_pr_review_comment.completedWithReactionOnly",
          defaultMessage: "Added {reaction} reaction to review comment",
          description: "Completed label for the github add_reaction_to_pr_review_comment MCP tool with its reaction.",
        },
        add_review_to_pr_active: {
          id: "localConversation.mcpToolActivity.github.add_review_to_pr.active",
          defaultMessage: "Adding review",
          description: "Active label for the github add_review_to_pr MCP tool.",
        },
        add_review_to_pr_completed: {
          id: "localConversation.mcpToolActivity.github.add_review_to_pr.completed",
          defaultMessage: "Added review",
          description: "Completed label for the github add_review_to_pr MCP tool.",
        },
        check_repo_initialized_active: {
          id: "localConversation.mcpToolActivity.github.check_repo_initialized.active",
          defaultMessage: "Checking repository setup",
          description: "Active label for the github check_repo_initialized MCP tool.",
        },
        check_repo_initialized_completed: {
          id: "localConversation.mcpToolActivity.github.check_repo_initialized.completed",
          defaultMessage: "Checked repository setup",
          description: "Completed label for the github check_repo_initialized MCP tool.",
        },
        compare_commits_active: {
          id: "localConversation.mcpToolActivity.github.compare_commits.active",
          defaultMessage: "Comparing commits",
          description: "Active label for the github compare_commits MCP tool.",
        },
        compare_commits_completed: {
          id: "localConversation.mcpToolActivity.github.compare_commits.completed",
          defaultMessage: "Compared commits",
          description: "Completed label for the github compare_commits MCP tool.",
        },
        convert_pull_request_to_draft_active: {
          id: "localConversation.mcpToolActivity.github.convert_pull_request_to_draft.active",
          defaultMessage: "Converting pull request to draft",
          description: "Active label for the github convert_pull_request_to_draft MCP tool.",
        },
        convert_pull_request_to_draft_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.convert_pull_request_to_draft.activeWithContext",
          defaultMessage:
            "Converting pull request to draft {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Active label for the github convert_pull_request_to_draft MCP tool with repository, issue, or pull request context.",
        },
        convert_pull_request_to_draft_completed: {
          id: "localConversation.mcpToolActivity.github.convert_pull_request_to_draft.completed",
          defaultMessage: "Converted pull request to draft",
          description: "Completed label for the github convert_pull_request_to_draft MCP tool.",
        },
        convert_pull_request_to_draft_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.convert_pull_request_to_draft.completedWithContext",
          defaultMessage:
            "Converted pull request to draft {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github convert_pull_request_to_draft MCP tool with repository, issue, or pull request context.",
        },
        create_blob_active: {
          id: "localConversation.mcpToolActivity.github.create_blob.active",
          defaultMessage: "Creating blob",
          description: "Active label for the github create_blob MCP tool.",
        },
        create_blob_completed: {
          id: "localConversation.mcpToolActivity.github.create_blob.completed",
          defaultMessage: "Created blob",
          description: "Completed label for the github create_blob MCP tool.",
        },
        create_branch_active: {
          id: "localConversation.mcpToolActivity.github.create_branch.active",
          defaultMessage: "Creating branch",
          description: "Active label for the github create_branch MCP tool.",
        },
        create_branch_activeWithRepository: {
          id: "localConversation.mcpToolActivity.github.create_branch.activeWithRepository",
          defaultMessage: "Creating branch in {repository}",
          description: "Active label for the github create_branch MCP tool with repository context.",
        },
        create_branch_completed: {
          id: "localConversation.mcpToolActivity.github.create_branch.completed",
          defaultMessage: "Created branch",
          description: "Completed label for the github create_branch MCP tool.",
        },
        create_branch_completedWithRepository: {
          id: "localConversation.mcpToolActivity.github.create_branch.completedWithRepository",
          defaultMessage: "Created branch in {repository}",
          description: "Completed label for the github create_branch MCP tool with repository context.",
        },
        create_commit_active: {
          id: "localConversation.mcpToolActivity.github.create_commit.active",
          defaultMessage: "Creating commit",
          description: "Active label for the github create_commit MCP tool.",
        },
        create_commit_completed: {
          id: "localConversation.mcpToolActivity.github.create_commit.completed",
          defaultMessage: "Created commit",
          description: "Completed label for the github create_commit MCP tool.",
        },
        create_file_active: {
          id: "localConversation.mcpToolActivity.github.create_file.active",
          defaultMessage: "Creating file",
          description: "Active label for the github create_file MCP tool.",
        },
        create_file_completed: {
          id: "localConversation.mcpToolActivity.github.create_file.completed",
          defaultMessage: "Created file",
          description: "Completed label for the github create_file MCP tool.",
        },
        create_issue_active: {
          id: "localConversation.mcpToolActivity.github.create_issue.active",
          defaultMessage: "Creating issue",
          description: "Active label for the github create_issue MCP tool.",
        },
        create_issue_activeWithTitle: {
          id: "localConversation.mcpToolActivity.github.create_issue.activeWithTitle",
          defaultMessage: 'Creating issue "{itemName}"',
          description: "Active label for the github create_issue MCP tool with its issue title.",
        },
        create_issue_completed: {
          id: "localConversation.mcpToolActivity.github.create_issue.completed",
          defaultMessage: "Created issue",
          description: "Completed label for the github create_issue MCP tool.",
        },
        create_issue_completedWithTitle: {
          id: "localConversation.mcpToolActivity.github.create_issue.completedWithTitle",
          defaultMessage: 'Created issue "{itemName}"',
          description: "Completed label for the github create_issue MCP tool with its issue title.",
        },
        create_pull_request_active: {
          id: "localConversation.mcpToolActivity.github.create_pull_request.active",
          defaultMessage: "Opening pull request",
          description: "Active label for the github create_pull_request MCP tool.",
        },
        create_pull_request_activeWithTitle: {
          id: "localConversation.mcpToolActivity.github.create_pull_request.activeWithTitle",
          defaultMessage: 'Opening pull request "{itemName}"',
          description: "Active label for the github create_pull_request MCP tool with its pull request title.",
        },
        create_pull_request_completed: {
          id: "localConversation.mcpToolActivity.github.create_pull_request.completed",
          defaultMessage: "Opened pull request",
          description: "Completed label for the github create_pull_request MCP tool.",
        },
        create_pull_request_completedWithTitle: {
          id: "localConversation.mcpToolActivity.github.create_pull_request.completedWithTitle",
          defaultMessage: 'Opened pull request "{itemName}"',
          description: "Completed label for the github create_pull_request MCP tool with its pull request title.",
        },
        create_tree_active: {
          id: "localConversation.mcpToolActivity.github.create_tree.active",
          defaultMessage: "Creating tree",
          description: "Active label for the github create_tree MCP tool.",
        },
        create_tree_completed: {
          id: "localConversation.mcpToolActivity.github.create_tree.completed",
          defaultMessage: "Created tree",
          description: "Completed label for the github create_tree MCP tool.",
        },
        delete_file_active: {
          id: "localConversation.mcpToolActivity.github.delete_file.active",
          defaultMessage: "Deleting file",
          description: "Active label for the github delete_file MCP tool.",
        },
        delete_file_completed: {
          id: "localConversation.mcpToolActivity.github.delete_file.completed",
          defaultMessage: "Deleted file",
          description: "Completed label for the github delete_file MCP tool.",
        },
        download_user_content_active: {
          id: "localConversation.mcpToolActivity.github.download_user_content.active",
          defaultMessage: "Downloading content",
          description: "Active label for the github download_user_content MCP tool.",
        },
        download_user_content_completed: {
          id: "localConversation.mcpToolActivity.github.download_user_content.completed",
          defaultMessage: "Downloaded content",
          description: "Completed label for the github download_user_content MCP tool.",
        },
        download_workflow_artifact_active: {
          id: "localConversation.mcpToolActivity.github.download_workflow_artifact.active",
          defaultMessage: "Downloading workflow artifact",
          description: "Active label for the github download_workflow_artifact MCP tool.",
        },
        download_workflow_artifact_completed: {
          id: "localConversation.mcpToolActivity.github.download_workflow_artifact.completed",
          defaultMessage: "Downloaded workflow artifact",
          description: "Completed label for the github download_workflow_artifact MCP tool.",
        },
        enable_auto_merge_active: {
          id: "localConversation.mcpToolActivity.github.enable_auto_merge.active",
          defaultMessage: "Enabling auto-merge",
          description: "Active label for the github enable_auto_merge MCP tool.",
        },
        enable_auto_merge_completed: {
          id: "localConversation.mcpToolActivity.github.enable_auto_merge.completed",
          defaultMessage: "Enabled auto-merge",
          description: "Completed label for the github enable_auto_merge MCP tool.",
        },
        fetch_blob_active: {
          id: "localConversation.mcpToolActivity.github.fetch_blob.active",
          defaultMessage: "Fetching blob",
          description: "Active label for the github fetch_blob MCP tool.",
        },
        fetch_blob_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_blob.completed",
          defaultMessage: "Fetched blob",
          description: "Completed label for the github fetch_blob MCP tool.",
        },
        fetch_commit_active: {
          id: "localConversation.mcpToolActivity.github.fetch_commit.active",
          defaultMessage: "Fetching commit",
          description: "Active label for the github fetch_commit MCP tool.",
        },
        fetch_commit_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_commit.completed",
          defaultMessage: "Fetched commit",
          description: "Completed label for the github fetch_commit MCP tool.",
        },
        fetch_commit_workflow_runs_active: {
          id: "localConversation.mcpToolActivity.github.fetch_commit_workflow_runs.active",
          defaultMessage: "Fetching commit workflow runs",
          description: "Active label for the github fetch_commit_workflow_runs MCP tool.",
        },
        fetch_commit_workflow_runs_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_commit_workflow_runs.completed",
          defaultMessage: "Fetched commit workflow runs",
          description: "Completed label for the github fetch_commit_workflow_runs MCP tool.",
        },
        fetch_file_active: {
          id: "localConversation.mcpToolActivity.github.fetch_file.active",
          defaultMessage: "Fetching file",
          description: "Active label for the github fetch_file MCP tool.",
        },
        fetch_file_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_file.completed",
          defaultMessage: "Fetched file",
          description: "Completed label for the github fetch_file MCP tool.",
        },
        fetch_issue_active: {
          id: "localConversation.mcpToolActivity.github.fetch_issue.active",
          defaultMessage: "Fetching issue",
          description: "Active label for the github fetch_issue MCP tool.",
        },
        fetch_issue_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_issue.activeWithContext",
          defaultMessage:
            "Fetching issue {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Active label for the github fetch_issue MCP tool with repository, issue, or pull request context.",
        },
        fetch_issue_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_issue.completed",
          defaultMessage: "Fetched issue",
          description: "Completed label for the github fetch_issue MCP tool.",
        },
        fetch_issue_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_issue.completedWithContext",
          defaultMessage:
            "Fetched issue {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Completed label for the github fetch_issue MCP tool with repository, issue, or pull request context.",
        },
        fetch_issue_comments_active: {
          id: "localConversation.mcpToolActivity.github.fetch_issue_comments.active",
          defaultMessage: "Fetching issue comments",
          description: "Active label for the github fetch_issue_comments MCP tool.",
        },
        fetch_issue_comments_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_issue_comments.activeWithContext",
          defaultMessage:
            "Fetching issue comments {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description: "Active label for the github fetch_issue_comments MCP tool with issue context.",
        },
        fetch_issue_comments_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_issue_comments.completed",
          defaultMessage: "Fetched issue comments",
          description: "Completed label for the github fetch_issue_comments MCP tool.",
        },
        fetch_issue_comments_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_issue_comments.completedWithContext",
          defaultMessage:
            "Fetched issue comments {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description: "Completed label for the github fetch_issue_comments MCP tool with issue context.",
        },
        fetch_pr_active: {
          id: "localConversation.mcpToolActivity.github.fetch_pr.active",
          defaultMessage: "Fetching pull request",
          description: "Active label for the github fetch_pr MCP tool.",
        },
        fetch_pr_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_pr.activeWithContext",
          defaultMessage:
            "Fetching pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description: "Active label for the github fetch_pr MCP tool with repository, issue, or pull request context.",
        },
        fetch_pr_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_pr.completed",
          defaultMessage: "Fetched pull request",
          description: "Completed label for the github fetch_pr MCP tool.",
        },
        fetch_pr_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_pr.completedWithContext",
          defaultMessage:
            "Fetched pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github fetch_pr MCP tool with repository, issue, or pull request context.",
        },
        fetch_pr_comments_active: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_comments.active",
          defaultMessage: "Fetching pull request comments",
          description: "Active label for the github fetch_pr_comments MCP tool.",
        },
        fetch_pr_comments_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_comments.activeWithContext",
          defaultMessage:
            "Fetching pull request comments {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description: "Active label for the github fetch_pr_comments MCP tool with pull request context.",
        },
        fetch_pr_comments_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_comments.completed",
          defaultMessage: "Fetched pull request comments",
          description: "Completed label for the github fetch_pr_comments MCP tool.",
        },
        fetch_pr_comments_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_comments.completedWithContext",
          defaultMessage:
            "Fetched pull request comments {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description: "Completed label for the github fetch_pr_comments MCP tool with pull request context.",
        },
        fetch_pr_file_patch_active: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_file_patch.active",
          defaultMessage: "Fetching file patch",
          description: "Active label for the github fetch_pr_file_patch MCP tool.",
        },
        fetch_pr_file_patch_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_file_patch.completed",
          defaultMessage: "Fetched file patch",
          description: "Completed label for the github fetch_pr_file_patch MCP tool.",
        },
        fetch_pr_patch_active: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_patch.active",
          defaultMessage: "Fetching pull request patch",
          description: "Active label for the github fetch_pr_patch MCP tool.",
        },
        fetch_pr_patch_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_pr_patch.completed",
          defaultMessage: "Fetched pull request patch",
          description: "Completed label for the github fetch_pr_patch MCP tool.",
        },
        fetch_workflow_job_logs_active: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_job_logs.active",
          defaultMessage: "Fetching workflow job logs",
          description: "Active label for the github fetch_workflow_job_logs MCP tool.",
        },
        fetch_workflow_job_logs_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_job_logs.completed",
          defaultMessage: "Fetched workflow job logs",
          description: "Completed label for the github fetch_workflow_job_logs MCP tool.",
        },
        fetch_workflow_job_steps_active: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_job_steps.active",
          defaultMessage: "Fetching workflow job steps",
          description: "Active label for the github fetch_workflow_job_steps MCP tool.",
        },
        fetch_workflow_job_steps_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_job_steps.completed",
          defaultMessage: "Fetched workflow job steps",
          description: "Completed label for the github fetch_workflow_job_steps MCP tool.",
        },
        fetch_workflow_run_artifacts_active: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_run_artifacts.active",
          defaultMessage: "Fetching workflow run artifacts",
          description: "Active label for the github fetch_workflow_run_artifacts MCP tool.",
        },
        fetch_workflow_run_artifacts_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_run_artifacts.completed",
          defaultMessage: "Fetched workflow run artifacts",
          description: "Completed label for the github fetch_workflow_run_artifacts MCP tool.",
        },
        fetch_workflow_run_jobs_active: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_run_jobs.active",
          defaultMessage: "Fetching workflow run jobs",
          description: "Active label for the github fetch_workflow_run_jobs MCP tool.",
        },
        fetch_workflow_run_jobs_completed: {
          id: "localConversation.mcpToolActivity.github.fetch_workflow_run_jobs.completed",
          defaultMessage: "Fetched workflow run jobs",
          description: "Completed label for the github fetch_workflow_run_jobs MCP tool.",
        },
        get_commit_combined_status_active: {
          id: "localConversation.mcpToolActivity.github.get_commit_combined_status.active",
          defaultMessage: "Getting commit status",
          description: "Active label for the github get_commit_combined_status MCP tool.",
        },
        get_commit_combined_status_completed: {
          id: "localConversation.mcpToolActivity.github.get_commit_combined_status.completed",
          defaultMessage: "Got commit status",
          description: "Completed label for the github get_commit_combined_status MCP tool.",
        },
        get_issue_comment_reactions_active: {
          id: "localConversation.mcpToolActivity.github.get_issue_comment_reactions.active",
          defaultMessage: "Getting comment reactions",
          description: "Active label for the github get_issue_comment_reactions MCP tool.",
        },
        get_issue_comment_reactions_completed: {
          id: "localConversation.mcpToolActivity.github.get_issue_comment_reactions.completed",
          defaultMessage: "Got comment reactions",
          description: "Completed label for the github get_issue_comment_reactions MCP tool.",
        },
        get_pr_diff_active: {
          id: "localConversation.mcpToolActivity.github.get_pr_diff.active",
          defaultMessage: "Getting pull request diff",
          description: "Active label for the github get_pr_diff MCP tool.",
        },
        get_pr_diff_completed: {
          id: "localConversation.mcpToolActivity.github.get_pr_diff.completed",
          defaultMessage: "Got pull request diff",
          description: "Completed label for the github get_pr_diff MCP tool.",
        },
        get_pr_info_active: {
          id: "localConversation.mcpToolActivity.github.get_pr_info.active",
          defaultMessage: "Getting pull request info",
          description: "Active label for the github get_pr_info MCP tool.",
        },
        get_pr_info_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.get_pr_info.activeWithContext",
          defaultMessage:
            "Getting pull request info {contextType, select, repositoryPullRequest {for {repository}#{number}} pullRequest {for PR #{number}} other {}}",
          description: "Active label for the github get_pr_info MCP tool with its pull request number.",
        },
        get_pr_info_completed: {
          id: "localConversation.mcpToolActivity.github.get_pr_info.completed",
          defaultMessage: "Got pull request info",
          description: "Completed label for the github get_pr_info MCP tool.",
        },
        get_pr_info_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.get_pr_info.completedWithContext",
          defaultMessage:
            "Got pull request info {contextType, select, repositoryPullRequest {for {repository}#{number}} pullRequest {for PR #{number}} other {}}",
          description: "Completed label for the github get_pr_info MCP tool with its pull request number.",
        },
        get_pr_reactions_active: {
          id: "localConversation.mcpToolActivity.github.get_pr_reactions.active",
          defaultMessage: "Getting pull request reactions",
          description: "Active label for the github get_pr_reactions MCP tool.",
        },
        get_pr_reactions_completed: {
          id: "localConversation.mcpToolActivity.github.get_pr_reactions.completed",
          defaultMessage: "Got pull request reactions",
          description: "Completed label for the github get_pr_reactions MCP tool.",
        },
        get_pr_review_comment_reactions_active: {
          id: "localConversation.mcpToolActivity.github.get_pr_review_comment_reactions.active",
          defaultMessage: "Getting review comment reactions",
          description: "Active label for the github get_pr_review_comment_reactions MCP tool.",
        },
        get_pr_review_comment_reactions_completed: {
          id: "localConversation.mcpToolActivity.github.get_pr_review_comment_reactions.completed",
          defaultMessage: "Got review comment reactions",
          description: "Completed label for the github get_pr_review_comment_reactions MCP tool.",
        },
        get_profile_active: {
          id: "localConversation.mcpToolActivity.github.get_profile.active",
          defaultMessage: "Getting profile",
          description: "Active label for the github get_profile MCP tool.",
        },
        get_profile_completed: {
          id: "localConversation.mcpToolActivity.github.get_profile.completed",
          defaultMessage: "Got profile",
          description: "Completed label for the github get_profile MCP tool.",
        },
        get_repo_active: {
          id: "localConversation.mcpToolActivity.github.get_repo.active",
          defaultMessage: "Getting repository",
          description: "Active label for the github get_repo MCP tool.",
        },
        get_repo_completed: {
          id: "localConversation.mcpToolActivity.github.get_repo.completed",
          defaultMessage: "Got repository",
          description: "Completed label for the github get_repo MCP tool.",
        },
        get_repo_collaborator_permission_active: {
          id: "localConversation.mcpToolActivity.github.get_repo_collaborator_permission.active",
          defaultMessage: "Getting repository permissions",
          description: "Active label for the github get_repo_collaborator_permission MCP tool.",
        },
        get_repo_collaborator_permission_completed: {
          id: "localConversation.mcpToolActivity.github.get_repo_collaborator_permission.completed",
          defaultMessage: "Got repository permissions",
          description: "Completed label for the github get_repo_collaborator_permission MCP tool.",
        },
        get_user_login_active: {
          id: "localConversation.mcpToolActivity.github.get_user_login.active",
          defaultMessage: "Getting username",
          description: "Active label for the github get_user_login MCP tool.",
        },
        get_user_login_completed: {
          id: "localConversation.mcpToolActivity.github.get_user_login.completed",
          defaultMessage: "Got username",
          description: "Completed label for the github get_user_login MCP tool.",
        },
        get_users_recent_prs_in_repo_active: {
          id: "localConversation.mcpToolActivity.github.get_users_recent_prs_in_repo.active",
          defaultMessage: "Listing recent pull requests",
          description: "Active label for the github get_users_recent_prs_in_repo MCP tool.",
        },
        get_users_recent_prs_in_repo_completed: {
          id: "localConversation.mcpToolActivity.github.get_users_recent_prs_in_repo.completed",
          defaultMessage: "Listed recent pull requests",
          description: "Completed label for the github get_users_recent_prs_in_repo MCP tool.",
        },
        label_pr_active: {
          id: "localConversation.mcpToolActivity.github.label_pr.active",
          defaultMessage: "Labeling pull request",
          description: "Active label for the github label_pr MCP tool.",
        },
        label_pr_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.label_pr.activeWithContext",
          defaultMessage:
            "Labeling pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description: "Active label for the github label_pr MCP tool with repository, issue, or pull request context.",
        },
        label_pr_completed: {
          id: "localConversation.mcpToolActivity.github.label_pr.completed",
          defaultMessage: "Labeled pull request",
          description: "Completed label for the github label_pr MCP tool.",
        },
        label_pr_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.label_pr.completedWithContext",
          defaultMessage:
            "Labeled pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github label_pr MCP tool with repository, issue, or pull request context.",
        },
        list_installations_active: {
          id: "localConversation.mcpToolActivity.github.list_installations.active",
          defaultMessage: "Listing installations",
          description: "Active label for the github list_installations MCP tool.",
        },
        list_installations_completed: {
          id: "localConversation.mcpToolActivity.github.list_installations.completed",
          defaultMessage: "Listed installations",
          description: "Completed label for the github list_installations MCP tool.",
        },
        list_installed_accounts_active: {
          id: "localConversation.mcpToolActivity.github.list_installed_accounts.active",
          defaultMessage: "Listing installed accounts",
          description: "Active label for the github list_installed_accounts MCP tool.",
        },
        list_installed_accounts_completed: {
          id: "localConversation.mcpToolActivity.github.list_installed_accounts.completed",
          defaultMessage: "Listed installed accounts",
          description: "Completed label for the github list_installed_accounts MCP tool.",
        },
        list_pr_changed_filenames_active: {
          id: "localConversation.mcpToolActivity.github.list_pr_changed_filenames.active",
          defaultMessage: "Listing changed files",
          description: "Active label for the github list_pr_changed_filenames MCP tool.",
        },
        list_pr_changed_filenames_completed: {
          id: "localConversation.mcpToolActivity.github.list_pr_changed_filenames.completed",
          defaultMessage: "Listed changed files",
          description: "Completed label for the github list_pr_changed_filenames MCP tool.",
        },
        list_pull_request_review_threads_active: {
          id: "localConversation.mcpToolActivity.github.list_pull_request_review_threads.active",
          defaultMessage: "Listing pull request review threads",
          description: "Active label for the github list_pull_request_review_threads MCP tool.",
        },
        list_pull_request_review_threads_completed: {
          id: "localConversation.mcpToolActivity.github.list_pull_request_review_threads.completed",
          defaultMessage: "Listed pull request review threads",
          description: "Completed label for the github list_pull_request_review_threads MCP tool.",
        },
        list_pull_request_reviews_active: {
          id: "localConversation.mcpToolActivity.github.list_pull_request_reviews.active",
          defaultMessage: "Listing pull request reviews",
          description: "Active label for the github list_pull_request_reviews MCP tool.",
        },
        list_pull_request_reviews_completed: {
          id: "localConversation.mcpToolActivity.github.list_pull_request_reviews.completed",
          defaultMessage: "Listed pull request reviews",
          description: "Completed label for the github list_pull_request_reviews MCP tool.",
        },
        list_recent_issues_active: {
          id: "localConversation.mcpToolActivity.github.list_recent_issues.active",
          defaultMessage: "Listing recent issues",
          description: "Active label for the github list_recent_issues MCP tool.",
        },
        list_recent_issues_completed: {
          id: "localConversation.mcpToolActivity.github.list_recent_issues.completed",
          defaultMessage: "Listed recent issues",
          description: "Completed label for the github list_recent_issues MCP tool.",
        },
        list_repositories_active: {
          id: "localConversation.mcpToolActivity.github.list_repositories.active",
          defaultMessage: "Listing repositories",
          description: "Active label for the github list_repositories MCP tool.",
        },
        list_repositories_completed: {
          id: "localConversation.mcpToolActivity.github.list_repositories.completed",
          defaultMessage: "Listed repositories",
          description: "Completed label for the github list_repositories MCP tool.",
        },
        list_user_org_memberships_active: {
          id: "localConversation.mcpToolActivity.github.list_user_org_memberships.active",
          defaultMessage: "Listing organization memberships",
          description: "Active label for the github list_user_org_memberships MCP tool.",
        },
        list_user_org_memberships_completed: {
          id: "localConversation.mcpToolActivity.github.list_user_org_memberships.completed",
          defaultMessage: "Listed organization memberships",
          description: "Completed label for the github list_user_org_memberships MCP tool.",
        },
        list_user_orgs_active: {
          id: "localConversation.mcpToolActivity.github.list_user_orgs.active",
          defaultMessage: "Listing organizations",
          description: "Active label for the github list_user_orgs MCP tool.",
        },
        list_user_orgs_completed: {
          id: "localConversation.mcpToolActivity.github.list_user_orgs.completed",
          defaultMessage: "Listed organizations",
          description: "Completed label for the github list_user_orgs MCP tool.",
        },
        mark_pull_request_ready_for_review_active: {
          id: "localConversation.mcpToolActivity.github.mark_pull_request_ready_for_review.active",
          defaultMessage: "Marking pull request ready for review",
          description: "Active label for the github mark_pull_request_ready_for_review MCP tool.",
        },
        mark_pull_request_ready_for_review_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.mark_pull_request_ready_for_review.activeWithContext",
          defaultMessage:
            "Marking pull request ready for review {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Active label for the github mark_pull_request_ready_for_review MCP tool with repository, issue, or pull request context.",
        },
        mark_pull_request_ready_for_review_completed: {
          id: "localConversation.mcpToolActivity.github.mark_pull_request_ready_for_review.completed",
          defaultMessage: "Marked pull request ready for review",
          description: "Completed label for the github mark_pull_request_ready_for_review MCP tool.",
        },
        mark_pull_request_ready_for_review_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.mark_pull_request_ready_for_review.completedWithContext",
          defaultMessage:
            "Marked pull request ready for review {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github mark_pull_request_ready_for_review MCP tool with repository, issue, or pull request context.",
        },
        merge_pull_request_active: {
          id: "localConversation.mcpToolActivity.github.merge_pull_request.active",
          defaultMessage: "Merging pull request",
          description: "Active label for the github merge_pull_request MCP tool.",
        },
        merge_pull_request_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.merge_pull_request.activeWithContext",
          defaultMessage:
            "Merging pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Active label for the github merge_pull_request MCP tool with repository, issue, or pull request context.",
        },
        merge_pull_request_completed: {
          id: "localConversation.mcpToolActivity.github.merge_pull_request.completed",
          defaultMessage: "Merged pull request",
          description: "Completed label for the github merge_pull_request MCP tool.",
        },
        merge_pull_request_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.merge_pull_request.completedWithContext",
          defaultMessage:
            "Merged pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github merge_pull_request MCP tool with repository, issue, or pull request context.",
        },
        remove_issue_assignees_active: {
          id: "localConversation.mcpToolActivity.github.remove_issue_assignees.active",
          defaultMessage: "Removing issue assignees",
          description: "Active label for the github remove_issue_assignees MCP tool.",
        },
        remove_issue_assignees_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.remove_issue_assignees.activeWithContext",
          defaultMessage:
            "Removing issue assignees {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Active label for the github remove_issue_assignees MCP tool with repository, issue, or pull request context.",
        },
        remove_issue_assignees_completed: {
          id: "localConversation.mcpToolActivity.github.remove_issue_assignees.completed",
          defaultMessage: "Removed issue assignees",
          description: "Completed label for the github remove_issue_assignees MCP tool.",
        },
        remove_issue_assignees_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.remove_issue_assignees.completedWithContext",
          defaultMessage:
            "Removed issue assignees {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Completed label for the github remove_issue_assignees MCP tool with repository, issue, or pull request context.",
        },
        remove_issue_label_active: {
          id: "localConversation.mcpToolActivity.github.remove_issue_label.active",
          defaultMessage: "Removing issue label",
          description: "Active label for the github remove_issue_label MCP tool.",
        },
        remove_issue_label_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.remove_issue_label.activeWithContext",
          defaultMessage:
            "Removing issue label {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Active label for the github remove_issue_label MCP tool with repository, issue, or pull request context.",
        },
        remove_issue_label_completed: {
          id: "localConversation.mcpToolActivity.github.remove_issue_label.completed",
          defaultMessage: "Removed issue label",
          description: "Completed label for the github remove_issue_label MCP tool.",
        },
        remove_issue_label_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.remove_issue_label.completedWithContext",
          defaultMessage:
            "Removed issue label {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Completed label for the github remove_issue_label MCP tool with repository, issue, or pull request context.",
        },
        remove_reaction_from_issue_comment_active: {
          id: "localConversation.mcpToolActivity.github.remove_reaction_from_issue_comment.active",
          defaultMessage: "Removing reaction from comment",
          description: "Active label for the github remove_reaction_from_issue_comment MCP tool.",
        },
        remove_reaction_from_issue_comment_completed: {
          id: "localConversation.mcpToolActivity.github.remove_reaction_from_issue_comment.completed",
          defaultMessage: "Removed reaction from comment",
          description: "Completed label for the github remove_reaction_from_issue_comment MCP tool.",
        },
        remove_reaction_from_pr_active: {
          id: "localConversation.mcpToolActivity.github.remove_reaction_from_pr.active",
          defaultMessage: "Removing reaction from pull request",
          description: "Active label for the github remove_reaction_from_pr MCP tool.",
        },
        remove_reaction_from_pr_completed: {
          id: "localConversation.mcpToolActivity.github.remove_reaction_from_pr.completed",
          defaultMessage: "Removed reaction from pull request",
          description: "Completed label for the github remove_reaction_from_pr MCP tool.",
        },
        remove_reaction_from_pr_review_comment_active: {
          id: "localConversation.mcpToolActivity.github.remove_reaction_from_pr_review_comment.active",
          defaultMessage: "Removing reaction from review comment",
          description: "Active label for the github remove_reaction_from_pr_review_comment MCP tool.",
        },
        remove_reaction_from_pr_review_comment_completed: {
          id: "localConversation.mcpToolActivity.github.remove_reaction_from_pr_review_comment.completed",
          defaultMessage: "Removed reaction from review comment",
          description: "Completed label for the github remove_reaction_from_pr_review_comment MCP tool.",
        },
        reply_to_review_comment_active: {
          id: "localConversation.mcpToolActivity.github.reply_to_review_comment.active",
          defaultMessage: "Replying to review comment",
          description: "Active label for the github reply_to_review_comment MCP tool.",
        },
        reply_to_review_comment_completed: {
          id: "localConversation.mcpToolActivity.github.reply_to_review_comment.completed",
          defaultMessage: "Replied to review comment",
          description: "Completed label for the github reply_to_review_comment MCP tool.",
        },
        request_pull_request_reviewers_active: {
          id: "localConversation.mcpToolActivity.github.request_pull_request_reviewers.active",
          defaultMessage: "Requesting pull request reviewers",
          description: "Active label for the github request_pull_request_reviewers MCP tool.",
        },
        request_pull_request_reviewers_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.request_pull_request_reviewers.activeWithContext",
          defaultMessage:
            "Requesting pull request reviewers {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Active label for the github request_pull_request_reviewers MCP tool with repository, issue, or pull request context.",
        },
        request_pull_request_reviewers_completed: {
          id: "localConversation.mcpToolActivity.github.request_pull_request_reviewers.completed",
          defaultMessage: "Requested pull request reviewers",
          description: "Completed label for the github request_pull_request_reviewers MCP tool.",
        },
        request_pull_request_reviewers_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.request_pull_request_reviewers.completedWithContext",
          defaultMessage:
            "Requested pull request reviewers {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github request_pull_request_reviewers MCP tool with repository, issue, or pull request context.",
        },
        rerun_failed_workflow_run_jobs_active: {
          id: "localConversation.mcpToolActivity.github.rerun_failed_workflow_run_jobs.active",
          defaultMessage: "Rerunning failed workflow jobs",
          description: "Active label for the github rerun_failed_workflow_run_jobs MCP tool.",
        },
        rerun_failed_workflow_run_jobs_completed: {
          id: "localConversation.mcpToolActivity.github.rerun_failed_workflow_run_jobs.completed",
          defaultMessage: "Reran failed workflow jobs",
          description: "Completed label for the github rerun_failed_workflow_run_jobs MCP tool.",
        },
        rerun_workflow_job_active: {
          id: "localConversation.mcpToolActivity.github.rerun_workflow_job.active",
          defaultMessage: "Rerunning workflow job",
          description: "Active label for the github rerun_workflow_job MCP tool.",
        },
        rerun_workflow_job_completed: {
          id: "localConversation.mcpToolActivity.github.rerun_workflow_job.completed",
          defaultMessage: "Reran workflow job",
          description: "Completed label for the github rerun_workflow_job MCP tool.",
        },
        resolve_review_thread_active: {
          id: "localConversation.mcpToolActivity.github.resolve_review_thread.active",
          defaultMessage: "Resolving review thread",
          description: "Active label for the github resolve_review_thread MCP tool.",
        },
        resolve_review_thread_completed: {
          id: "localConversation.mcpToolActivity.github.resolve_review_thread.completed",
          defaultMessage: "Resolved review thread",
          description: "Completed label for the github resolve_review_thread MCP tool.",
        },
        search_active: {
          id: "localConversation.mcpToolActivity.github.search.active",
          defaultMessage: "Searching code",
          description: "Active label for the github search MCP tool.",
        },
        search_activeWithQuery: {
          id: "localConversation.mcpToolActivity.github.search.activeWithQuery",
          defaultMessage: 'Searching code "{query}"',
          description: "Active label for the github search MCP tool with its search query.",
        },
        search_completed: {
          id: "localConversation.mcpToolActivity.github.search.completed",
          defaultMessage: "Searched code",
          description: "Completed label for the github search MCP tool.",
        },
        search_completedWithQuery: {
          id: "localConversation.mcpToolActivity.github.search.completedWithQuery",
          defaultMessage: 'Searched code "{query}"',
          description: "Completed label for the github search MCP tool with its search query.",
        },
        search_branches_active: {
          id: "localConversation.mcpToolActivity.github.search_branches.active",
          defaultMessage: "Searching branches",
          description: "Active label for the github search_branches MCP tool.",
        },
        search_branches_activeWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_branches.activeWithQuery",
          defaultMessage: 'Searching branches "{query}"',
          description: "Active label for the github search_branches MCP tool with its search query.",
        },
        search_branches_completed: {
          id: "localConversation.mcpToolActivity.github.search_branches.completed",
          defaultMessage: "Searched branches",
          description: "Completed label for the github search_branches MCP tool.",
        },
        search_branches_completedWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_branches.completedWithQuery",
          defaultMessage: 'Searched branches "{query}"',
          description: "Completed label for the github search_branches MCP tool with its search query.",
        },
        search_commits_active: {
          id: "localConversation.mcpToolActivity.github.search_commits.active",
          defaultMessage: "Searching commits",
          description: "Active label for the github search_commits MCP tool.",
        },
        search_commits_activeWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_commits.activeWithQuery",
          defaultMessage: 'Searching commits "{query}"',
          description: "Active label for the github search_commits MCP tool with its search query.",
        },
        search_commits_completed: {
          id: "localConversation.mcpToolActivity.github.search_commits.completed",
          defaultMessage: "Searched commits",
          description: "Completed label for the github search_commits MCP tool.",
        },
        search_commits_completedWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_commits.completedWithQuery",
          defaultMessage: 'Searched commits "{query}"',
          description: "Completed label for the github search_commits MCP tool with its search query.",
        },
        search_issues_active: {
          id: "localConversation.mcpToolActivity.github.search_issues.active",
          defaultMessage: "Searching issues",
          description: "Active label for the github search_issues MCP tool.",
        },
        search_issues_activeWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_issues.activeWithQuery",
          defaultMessage: 'Searching issues "{query}"',
          description: "Active label for the github search_issues MCP tool with its search query.",
        },
        search_issues_completed: {
          id: "localConversation.mcpToolActivity.github.search_issues.completed",
          defaultMessage: "Searched issues",
          description: "Completed label for the github search_issues MCP tool.",
        },
        search_issues_completedWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_issues.completedWithQuery",
          defaultMessage: 'Searched issues "{query}"',
          description: "Completed label for the github search_issues MCP tool with its search query.",
        },
        search_prs_active: {
          id: "localConversation.mcpToolActivity.github.search_prs.active",
          defaultMessage: "Searching pull requests",
          description: "Active label for the github search_prs MCP tool.",
        },
        search_prs_activeWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_prs.activeWithQuery",
          defaultMessage: 'Searching pull requests "{query}"',
          description: "Active label for the github search_prs MCP tool with its search query.",
        },
        search_prs_completed: {
          id: "localConversation.mcpToolActivity.github.search_prs.completed",
          defaultMessage: "Searched pull requests",
          description: "Completed label for the github search_prs MCP tool.",
        },
        search_prs_completedWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_prs.completedWithQuery",
          defaultMessage: 'Searched pull requests "{query}"',
          description: "Completed label for the github search_prs MCP tool with its search query.",
        },
        search_repositories_active: {
          id: "localConversation.mcpToolActivity.github.search_repositories.active",
          defaultMessage: "Searching repositories",
          description: "Active label for the github search_repositories MCP tool.",
        },
        search_repositories_activeWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_repositories.activeWithQuery",
          defaultMessage: 'Searching repositories "{query}"',
          description: "Active label for the github search_repositories MCP tool with its search query.",
        },
        search_repositories_completed: {
          id: "localConversation.mcpToolActivity.github.search_repositories.completed",
          defaultMessage: "Searched repositories",
          description: "Completed label for the github search_repositories MCP tool.",
        },
        search_repositories_completedWithQuery: {
          id: "localConversation.mcpToolActivity.github.search_repositories.completedWithQuery",
          defaultMessage: 'Searched repositories "{query}"',
          description: "Completed label for the github search_repositories MCP tool with its search query.",
        },
        update_file_active: {
          id: "localConversation.mcpToolActivity.github.update_file.active",
          defaultMessage: "Updating file",
          description: "Active label for the github update_file MCP tool.",
        },
        update_file_completed: {
          id: "localConversation.mcpToolActivity.github.update_file.completed",
          defaultMessage: "Updated file",
          description: "Completed label for the github update_file MCP tool.",
        },
        update_issue_active: {
          id: "localConversation.mcpToolActivity.github.update_issue.active",
          defaultMessage: "Updating issue",
          description: "Active label for the github update_issue MCP tool.",
        },
        update_issue_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.update_issue.activeWithContext",
          defaultMessage:
            "Updating issue {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Active label for the github update_issue MCP tool with repository, issue, or pull request context.",
        },
        update_issue_completed: {
          id: "localConversation.mcpToolActivity.github.update_issue.completed",
          defaultMessage: "Updated issue",
          description: "Completed label for the github update_issue MCP tool.",
        },
        update_issue_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.update_issue.completedWithContext",
          defaultMessage:
            "Updated issue {contextType, select, repositoryIssue {on {repository}#{number}} issue {on issue #{number}} other {}}",
          description:
            "Completed label for the github update_issue MCP tool with repository, issue, or pull request context.",
        },
        update_issue_comment_active: {
          id: "localConversation.mcpToolActivity.github.update_issue_comment.active",
          defaultMessage: "Updating comment",
          description: "Active label for the github update_issue_comment MCP tool.",
        },
        update_issue_comment_completed: {
          id: "localConversation.mcpToolActivity.github.update_issue_comment.completed",
          defaultMessage: "Updated comment",
          description: "Completed label for the github update_issue_comment MCP tool.",
        },
        update_pull_request_active: {
          id: "localConversation.mcpToolActivity.github.update_pull_request.active",
          defaultMessage: "Updating pull request",
          description: "Active label for the github update_pull_request MCP tool.",
        },
        update_pull_request_activeWithContext: {
          id: "localConversation.mcpToolActivity.github.update_pull_request.activeWithContext",
          defaultMessage:
            "Updating pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Active label for the github update_pull_request MCP tool with repository, issue, or pull request context.",
        },
        update_pull_request_completed: {
          id: "localConversation.mcpToolActivity.github.update_pull_request.completed",
          defaultMessage: "Updated pull request",
          description: "Completed label for the github update_pull_request MCP tool.",
        },
        update_pull_request_completedWithContext: {
          id: "localConversation.mcpToolActivity.github.update_pull_request.completedWithContext",
          defaultMessage:
            "Updated pull request {contextType, select, repositoryPullRequest {on {repository}#{number}} pullRequest {on PR #{number}} other {}}",
          description:
            "Completed label for the github update_pull_request MCP tool with repository, issue, or pull request context.",
        },
        update_ref_active: {
          id: "localConversation.mcpToolActivity.github.update_ref.active",
          defaultMessage: "Updating branch",
          description: "Active label for the github update_ref MCP tool.",
        },
        update_ref_activeWithRepository: {
          id: "localConversation.mcpToolActivity.github.update_ref.activeWithRepository",
          defaultMessage: "Updating branch in {repository}",
          description: "Active label for the github update_ref MCP tool with repository context.",
        },
        update_ref_completed: {
          id: "localConversation.mcpToolActivity.github.update_ref.completed",
          defaultMessage: "Updated branch",
          description: "Completed label for the github update_ref MCP tool.",
        },
        update_ref_completedWithRepository: {
          id: "localConversation.mcpToolActivity.github.update_ref.completedWithRepository",
          defaultMessage: "Updated branch in {repository}",
          description: "Completed label for the github update_ref MCP tool with repository context.",
        },
        update_review_comment_active: {
          id: "localConversation.mcpToolActivity.github.update_review_comment.active",
          defaultMessage: "Updating review comment",
          description: "Active label for the github update_review_comment MCP tool.",
        },
        update_review_comment_completed: {
          id: "localConversation.mcpToolActivity.github.update_review_comment.completed",
          defaultMessage: "Updated review comment",
          description: "Completed label for the github update_review_comment MCP tool.",
        },
      }),
      J = (0, M.YK)({
        add_comment_to_issue: {
          id: "localConversation.mcpToolApproval.github.add_comment_to_issue.context",
          defaultMessage:
            'Allow GitHub to add{hasComment, select, yes { comment "{comment}"} other { a comment}} to{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?',
          description:
            "Approval request for adding a GitHub pull request conversation comment, including the available comment preview, pull request number, and repository name.",
        },
        add_issue_assignees: {
          id: "localConversation.mcpToolApproval.github.add_issue_assignees.context",
          defaultMessage:
            "Allow GitHub to add{hasAssignees, select, yes { {assignees}} other { assignees}} to{hasIssueNumber, select, yes { issue or pull request #{issueNumber}} other { an issue or pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for adding GitHub assignees, including the available usernames, issue or pull request number, and repository name.",
        },
        add_issue_labels: {
          id: "localConversation.mcpToolApproval.github.add_issue_labels.context",
          defaultMessage:
            "Allow GitHub to add{hasLabels, select, yes { labels {labels}} other { labels}} to{hasIssueNumber, select, yes { issue or pull request #{issueNumber}} other { an issue or pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for adding GitHub labels, including the available label names, issue or pull request number, and repository name.",
        },
        add_reaction_to_issue_comment: {
          id: "localConversation.mcpToolApproval.github.add_reaction_to_issue_comment.context",
          defaultMessage:
            "Allow GitHub to add{hasReaction, select, yes { the {reaction} reaction} other { a reaction}} to an issue comment{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for adding a reaction to a GitHub issue comment, including the available reaction and repository name.",
        },
        add_reaction_to_pr: {
          id: "localConversation.mcpToolApproval.github.add_reaction_to_pr.context",
          defaultMessage:
            "Allow GitHub to add{hasReaction, select, yes { the {reaction} reaction} other { a reaction}} to{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for adding a reaction to a GitHub pull request, including the available reaction, pull request number, and repository name.",
        },
        add_reaction_to_pr_review_comment: {
          id: "localConversation.mcpToolApproval.github.add_reaction_to_pr_review_comment.context",
          defaultMessage:
            "Allow GitHub to add{hasReaction, select, yes { the {reaction} reaction} other { a reaction}} to a pull request review comment{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for adding a reaction to a GitHub pull request review comment, including the available reaction and repository name.",
        },
        add_review_to_pr: {
          id: "localConversation.mcpToolApproval.github.add_review_to_pr.context",
          defaultMessage:
            '{reviewAction, select, approve {Allow GitHub to approve} requestChanges {Allow GitHub to request changes on} comment {Allow GitHub to comment on} other {Allow GitHub to submit a review on}}{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}{hasReview, select, yes { with review "{review}"} other {}}?',
          description:
            "Approval request for submitting a GitHub pull request review, including the review action, available review preview, pull request number, and repository name.",
        },
        convert_pull_request_to_draft: {
          id: "localConversation.mcpToolApproval.github.convert_pull_request_to_draft.context",
          defaultMessage:
            "Allow GitHub to convert{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}} to a draft?",
          description:
            "Approval request for converting a GitHub pull request to a draft, including the available pull request number and repository name.",
        },
        create_blob: {
          id: "localConversation.mcpToolApproval.github.create_blob.context",
          defaultMessage: "Allow GitHub to create a blob{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for creating a Git blob, including the available repository name but not the blob contents.",
        },
        create_branch: {
          id: "localConversation.mcpToolApproval.github.create_branch.context",
          defaultMessage:
            'Allow GitHub to create{hasBranchName, select, yes { branch "{branchName}"} other { a branch}}{hasRepository, select, yes { in {repository}} other {}}{hasBaseRef, select, yes { from "{baseRef}"} other {}}?',
          description:
            "Approval request for creating a GitHub branch, including the available branch name, repository name, and readable base branch, tag, or ref.",
        },
        create_commit: {
          id: "localConversation.mcpToolApproval.github.create_commit.context",
          defaultMessage:
            'Allow GitHub to create a commit{hasRepository, select, yes { in {repository}} other {}}{hasMessage, select, yes { with message "{message}"} other {}}?',
          description:
            "Approval request for creating a Git commit, including the available repository name and commit message but not commit or tree SHAs.",
        },
        create_file: {
          id: "localConversation.mcpToolApproval.github.create_file.context",
          defaultMessage:
            'Allow GitHub to create{hasPath, select, yes { file "{path}"} other { a file}}{hasRepository, select, yes { in {repository}} other {}}{hasBranch, select, yes { on branch "{branch}"} other {}}{hasMessage, select, yes { with commit message "{message}"} other {}}?',
          description:
            "Approval request for creating a GitHub file, including the available path, repository name, branch name, and commit message but not file contents.",
        },
        create_issue: {
          id: "localConversation.mcpToolApproval.github.create_issue.context_v3",
          defaultMessage:
            'Allow GitHub to create{hasTitle, select, yes { issue "{title}"} other { an issue}}{hasRepository, select, yes { in {repository}} other {}}{bodyChange, select, set { with body "{body}"} clear { with an empty body} other {}}{hasMilestone, select, yes {, assigned to milestone #{milestone}} other {}}?',
          description:
            "Approval request for creating a GitHub issue, including the available title, repository name, body preview, and milestone number.",
        },
        create_pull_request: {
          id: "localConversation.mcpToolApproval.github.create_pull_request.context_v3",
          defaultMessage:
            'Allow GitHub to create{draft, select, yes { a draft pull request} other { a pull request}}{hasTitle, select, yes { titled "{title}"} other {}}{hasSourceIssueNumber, select, yes { from issue #{sourceIssueNumber}} other {}}{hasRepository, select, yes { in {repository}} other {}}{pullRequestSourceContext, select, repositoryAndBranch { from {headRepository} branch "{headBranch}"} repository { from {headRepository}} branch { from branch "{headBranch}"} other {}}{hasBaseBranch, select, yes { into "{baseBranch}"} other {}}?',
          description:
            "Approval request for creating a GitHub pull request, including its available draft status, title or source issue number, target repository name, source repository name, and head and base branches.",
        },
        create_tree: {
          id: "localConversation.mcpToolApproval.github.create_tree.context",
          defaultMessage: "Allow GitHub to create a Git tree{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for creating a Git tree, including the available repository name but not structured tree entries or SHAs.",
        },
        delete_file: {
          id: "localConversation.mcpToolApproval.github.delete_file.context",
          defaultMessage:
            'Allow GitHub to delete{hasPath, select, yes { file "{path}"} other { a file}}{hasRepository, select, yes { in {repository}} other {}}{hasBranch, select, yes { on branch "{branch}"} other {}}{hasMessage, select, yes { with commit message "{message}"} other {}}?',
          description:
            "Approval request for deleting a GitHub file, including the available path, repository name, branch name, and commit message but not its blob SHA.",
        },
        dismiss_pull_request_review: {
          id: "localConversation.mcpToolApproval.github.dismiss_pull_request_review.context",
          defaultMessage:
            'Allow GitHub to dismiss a pull request review{hasMessage, select, yes { with explanation "{message}"} other {}}?',
          description:
            "Approval request for dismissing a GitHub pull request review, including the available dismissal message but not the opaque review ID.",
        },
        enable_auto_merge: {
          id: "localConversation.mcpToolApproval.github.enable_auto_merge.context",
          defaultMessage:
            "Allow GitHub to enable auto-merge for{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for enabling auto-merge on a GitHub pull request, including the available pull request number and repository name.",
        },
        label_pr: {
          id: "localConversation.mcpToolApproval.github.label_pr.context",
          defaultMessage:
            'Allow GitHub to add{hasLabel, select, yes { label "{label}"} other { a label}} to{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?',
          description:
            "Approval request for labeling a GitHub pull request, including the available label name, pull request number, and repository name.",
        },
        lock_issue_conversation: {
          id: "localConversation.mcpToolApproval.github.lock_issue_conversation.context_v2",
          defaultMessage:
            "Allow GitHub to lock{hasIssueNumber, select, yes { issue or pull request #{issueNumber}} other { an issue or pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for locking a GitHub issue or pull request conversation, including the available number and repository name.",
        },
        mark_pull_request_ready_for_review: {
          id: "localConversation.mcpToolApproval.github.mark_pull_request_ready_for_review.context",
          defaultMessage:
            "Allow GitHub to mark{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}} ready for review?",
          description:
            "Approval request for marking a GitHub pull request ready for review, including the available pull request number and repository name.",
        },
        merge_pull_request: {
          id: "localConversation.mcpToolApproval.github.merge_pull_request.context_v2",
          defaultMessage:
            "Allow GitHub to merge{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}{hasMergeMethod, select, yes { using {mergeMethod, select, merge {a merge commit} squash {squash} rebase {rebase} other {the selected method}}} other {}}?",
          description:
            "Approval request for merging a GitHub pull request, including the available pull request number, repository name, and merge method.",
        },
        remove_issue_assignees: {
          id: "localConversation.mcpToolApproval.github.remove_issue_assignees.context",
          defaultMessage:
            "Allow GitHub to remove{hasAssignees, select, yes { {assignees}} other { assignees}} from{hasIssueNumber, select, yes { issue or pull request #{issueNumber}} other { an issue or pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for removing GitHub assignees, including the available usernames, issue or pull request number, and repository name.",
        },
        remove_issue_label: {
          id: "localConversation.mcpToolApproval.github.remove_issue_label.context",
          defaultMessage:
            'Allow GitHub to remove{hasLabel, select, yes { label "{label}"} other { a label}} from{hasIssueNumber, select, yes { issue or pull request #{issueNumber}} other { an issue or pull request}}{hasRepository, select, yes { in {repository}} other {}}?',
          description:
            "Approval request for removing a GitHub label, including the available label name, issue or pull request number, and repository name.",
        },
        remove_pull_request_reviewers: {
          id: "localConversation.mcpToolApproval.github.remove_pull_request_reviewers.context",
          defaultMessage:
            "Allow GitHub to remove{reviewerContext, select, people { {reviewers}} teams { teams {teamReviewers}} peopleAndTeams { {reviewers} and teams {teamReviewers}} other { requested reviewers}} from{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for removing requested GitHub pull request reviewers, including the available usernames, team names, pull request number, and repository name.",
        },
        remove_reaction_from_issue_comment: {
          id: "localConversation.mcpToolApproval.github.remove_reaction_from_issue_comment.context",
          defaultMessage:
            "Allow GitHub to remove a reaction from an issue comment{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for removing a reaction from a GitHub issue comment, including the available repository name but not the opaque reaction or comment IDs.",
        },
        remove_reaction_from_pr: {
          id: "localConversation.mcpToolApproval.github.remove_reaction_from_pr.context",
          defaultMessage:
            "Allow GitHub to remove a reaction from{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for removing a reaction from a GitHub pull request, including the available pull request number and repository name but not the opaque reaction ID.",
        },
        remove_reaction_from_pr_review_comment: {
          id: "localConversation.mcpToolApproval.github.remove_reaction_from_pr_review_comment.context",
          defaultMessage:
            "Allow GitHub to remove a reaction from a pull request review comment{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for removing a reaction from a GitHub pull request review comment, including the available repository name but not opaque IDs.",
        },
        reply_to_review_comment: {
          id: "localConversation.mcpToolApproval.github.reply_to_review_comment.context",
          defaultMessage:
            'Allow GitHub to reply{hasComment, select, yes { "{comment}"} other {}} to a review comment on{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?',
          description:
            "Approval request for replying to a GitHub pull request review comment, including the available reply preview, pull request number, and repository name.",
        },
        request_pull_request_reviewers: {
          id: "localConversation.mcpToolApproval.github.request_pull_request_reviewers.context",
          defaultMessage:
            "Allow GitHub to request{reviewerContext, select, people { reviews from {reviewers}} teams { reviews from teams {teamReviewers}} peopleAndTeams { reviews from {reviewers} and teams {teamReviewers}} other { reviews}} on{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for requesting GitHub pull request reviewers, including the available usernames, team names, pull request number, and repository name.",
        },
        rerun_failed_workflow_run_jobs: {
          id: "localConversation.mcpToolApproval.github.rerun_failed_workflow_run_jobs.context",
          defaultMessage:
            "Allow GitHub to rerun the failed jobs in a workflow run{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for rerunning failed GitHub Actions jobs, including the available repository name but not the opaque workflow run ID.",
        },
        rerun_workflow_job: {
          id: "localConversation.mcpToolApproval.github.rerun_workflow_job.context",
          defaultMessage:
            "Allow GitHub to rerun a workflow job{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for rerunning a GitHub Actions workflow job, including the available repository name but not the opaque job ID.",
        },
        resolve_review_thread: {
          id: "localConversation.mcpToolApproval.github.resolve_review_thread.fallback",
          defaultMessage: "Allow GitHub to resolve a pull request review thread?",
          description:
            "Approval request for resolving a GitHub pull request review thread when only its opaque thread ID is available.",
        },
        unlock_issue_conversation: {
          id: "localConversation.mcpToolApproval.github.unlock_issue_conversation.context",
          defaultMessage:
            "Allow GitHub to unlock{hasIssueNumber, select, yes { issue or pull request #{issueNumber}} other { an issue or pull request}}{hasRepository, select, yes { in {repository}} other {}}?",
          description:
            "Approval request for unlocking a GitHub issue or pull request conversation, including the available number and repository name.",
        },
        unresolve_review_thread: {
          id: "localConversation.mcpToolApproval.github.unresolve_review_thread.fallback",
          defaultMessage: "Allow GitHub to mark a pull request review thread unresolved?",
          description:
            "Approval request for marking a GitHub pull request review thread unresolved when only its opaque thread ID is available.",
        },
        update_file: {
          id: "localConversation.mcpToolApproval.github.update_file.context",
          defaultMessage:
            'Allow GitHub to update{hasPath, select, yes { file "{path}"} other { a file}}{hasRepository, select, yes { in {repository}} other {}}{hasBranch, select, yes { on branch "{branch}"} other {}}{hasMessage, select, yes { with commit message "{message}"} other {}}?',
          description:
            "Approval request for updating a GitHub file, including the available path, repository name, branch name, and commit message but not file contents or its blob SHA.",
        },
        update_issue: {
          id: "localConversation.mcpToolApproval.github.update_issue.context_v3",
          defaultMessage:
            'Allow GitHub to update{hasIssueNumber, select, yes { issue #{issueNumber}} other { an issue}}{hasRepository, select, yes { in {repository}} other {}}{hasTitle, select, yes {, changing its title to "{title}"} other {}}{bodyChange, select, set {, replacing its body with "{body}"} clear {, clearing its body} other {}}{hasState, select, yes {, setting its state to {state, select, open {open} closed {closed} other {a new value}}} other {}}{hasMilestone, select, yes {, setting its milestone to #{milestone}} other {}}?',
          description:
            "Approval request for updating a GitHub issue, including the available issue number, repository name, new title or body preview, state, and milestone number.",
        },
        update_issue_comment: {
          id: "localConversation.mcpToolApproval.github.update_issue_comment.context",
          defaultMessage:
            'Allow GitHub to update an issue comment{hasRepository, select, yes { in {repository}} other {}}{hasComment, select, yes { to "{comment}"} other {}}?',
          description:
            "Approval request for updating a GitHub issue comment, including the available repository name and replacement comment preview but not the opaque comment ID.",
        },
        update_pull_request: {
          id: "localConversation.mcpToolApproval.github.update_pull_request.context_v2",
          defaultMessage:
            'Allow GitHub to update{hasPullRequestNumber, select, yes { pull request #{pullRequestNumber}} other { a pull request}}{hasRepository, select, yes { in {repository}} other {}}{hasTitle, select, yes {, changing its title to "{title}"} other {}}{bodyChange, select, set {, replacing its description with "{body}"} clear {, clearing its description} other {}}{hasState, select, yes {, setting its state to {state, select, open {open} closed {closed} other {a new value}}} other {}}{hasBaseBranch, select, yes {, retargeting it to branch "{baseBranch}"} other {}}?',
          description:
            "Approval request for updating a GitHub pull request, including the available pull request number, repository name, new title or description preview, state, and base branch.",
        },
        update_ref: {
          id: "localConversation.mcpToolApproval.github.update_ref.context",
          defaultMessage:
            'Allow GitHub to {force, select, yes {force-update} other {update}}{hasBranchName, select, yes { branch "{branchName}"} other { a branch}}{hasRepository, select, yes { in {repository}} other {}}?',
          description:
            "Approval request for updating a GitHub branch ref, including whether the update is forced and the available branch and repository names but not the commit SHA.",
        },
        update_review_comment: {
          id: "localConversation.mcpToolApproval.github.update_review_comment.context",
          defaultMessage:
            'Allow GitHub to update a pull request review comment{hasRepository, select, yes { in {repository}} other {}}{hasComment, select, yes { to "{comment}"} other {}}?',
          description:
            "Approval request for updating a GitHub pull request review comment, including the available repository name and replacement comment preview but not the opaque comment ID.",
        },
      }),
      B = ["emails", "messages", "message_ids", "email_ids", "results", "items"],
      z = v
        .array(v.string().trim().min(1).max(200))
        .optional()
        .catch(void 0),
      K = v
        .object({
          add_label_names: z,
          add_labels: z,
          archive: v
            .boolean()
            .optional()
            .catch(void 0),
          attachment_files: v
            .array(v.union([v.string(), v.object({}).strip()]))
            .optional()
            .catch(void 0),
          attachment_id: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          bcc: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          body: v
            .string()
            .trim()
            .min(1)
            .max(5e4)
            .optional()
            .catch(void 0),
          cc: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          draft_id: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          filename: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          id: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          id_type: v
            .enum(["message", "thread"])
            .optional()
            .catch(void 0),
          label_list_visibility: v
            .enum(["labelShow", "labelShowIfUnread", "labelHide"])
            .optional()
            .catch(void 0),
          label_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          label_ids: z,
          label_names: z,
          max_messages: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          max_results: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          message_ids: z,
          message_list_visibility: v
            .enum(["show", "hide"])
            .optional()
            .catch(void 0),
          name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          note: v
            .string()
            .trim()
            .min(1)
            .max(1e3)
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          remove_label_names: z,
          remove_labels: z,
          subject: v
            .string()
            .trim()
            .min(1)
            .max(300)
            .optional()
            .catch(void 0),
          to: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
        })
        .strip(),
      Y = {
        apply_labels_to_emails: (0, A.lu)({
          getMessages: () => (0, A.vP)(ei, "apply_labels_to_emails", "WithContext"),
          getValue: ({ add_label_names: e, remove_label_names: t }) => (e?.length ? e : t)?.join(", "),
          maxPreviewLength: 40,
          valueName: "target",
          approval: function (e) {
            let t = ee(e?.add_label_names?.join(", ")),
              o = ee(e?.remove_label_names?.join(", ")),
              a = e?.message_ids?.length ?? 0
            return null == t && null == o && 0 === a
              ? { descriptor: ei.apply_labels_to_emails_approval }
              : {
                  descriptor: ei.apply_labels_to_emails_approvalWithContext,
                  values: {
                    addedLabels: t ?? "",
                    hasAddedLabels: null == t ? "no" : "yes",
                    hasRemovedLabels: null == o ? "no" : "yes",
                    itemCount: a,
                    removedLabels: o ?? "",
                  },
                }
          },
        }),
        archive_emails: (0, A.Jw)(
          () => ({ active: ei.archive_emails_active, completed: ei.archive_emails_completed }),
          (e) =>
            eo({
              fallback: ei.archive_emails_approval,
              toolArguments: e,
              withCount: ei.archive_emails_approvalWithCount,
            }),
        ),
        batch_modify_email: (0, A.lu)({
          getMessages: () => (0, A.vP)(ei, "batch_modify_email", "WithContext"),
          getValue: ({ add_labels: e, remove_labels: t }) => (e?.length ? e : t)?.join(", "),
          maxPreviewLength: 40,
          valueName: "target",
          approval: (e) =>
            eo({
              fallback: ei.batch_modify_email_approval,
              toolArguments: e,
              withCount: ei.batch_modify_email_approvalWithCount,
            }),
        }),
        batch_read_email: (0, A.Jw)(() => ({ active: ei.read_email_active, completed: ei.read_email_completed })),
        bulk_label_matching_emails: (0, A.Jw)(
          () => ({ active: ei.bulk_label_matching_emails_active, completed: ei.bulk_label_matching_emails_completed }),
          function (e) {
            let t = ee(e?.query),
              o = ee(e?.label_name)
            return null == t && null == o
              ? { descriptor: ei.bulk_label_matching_emails_approval }
              : {
                  descriptor: ei.bulk_label_matching_emails_approvalWithContext,
                  values: {
                    hasLabelName: null == o ? "no" : "yes",
                    hasQuery: null == t ? "no" : "yes",
                    labelName: o ?? "",
                    query: t ?? "",
                    shouldArchive: e?.archive === !0 ? "yes" : "no",
                  },
                }
          },
        ),
        create_draft: ea({
          approval: (e) =>
            et({
              fallback: ei.create_draft_approval,
              toolArguments: e,
              withContext: ei.create_draft_approvalWithContext,
            }),
          getItemName: ({ subject: e }) => e,
          getMessages: () => ({
            withoutContext: { active: ei.create_draft_active, completed: ei.create_draft_completed },
            withContext: { active: ei.create_draft_activeWithContext, completed: ei.create_draft_completedWithContext },
            withRecipient: {
              active: ei.create_draft_activeWithRecipient,
              completed: ei.create_draft_completedWithRecipient,
            },
          }),
        }),
        create_label: (0, A.PM)({
          getItemName: ({ name: e }) => e,
          getMessages: () => (0, A.vP)(ei, "create_label", "WithContext"),
          maxPreviewLength: 40,
          approval: function (e) {
            let t = ee(e?.name)
            return null == t
              ? { descriptor: ei.create_label_approval }
              : {
                  descriptor: ei.create_label_approvalWithContext,
                  values: {
                    itemName: t,
                    labelVisibility: e?.label_list_visibility ?? "labelShow",
                    messageVisibility: e?.message_list_visibility ?? "show",
                  },
                }
          },
        }),
        delete_emails: (0, A.Jw)(
          () => ({ active: ei.delete_emails_active, completed: ei.delete_emails_completed }),
          (e) =>
            eo({
              fallback: ei.delete_emails_approval,
              toolArguments: e,
              withCount: ei.delete_emails_approvalWithCount,
            }),
        ),
        forward_emails: ea({
          approval: function (e) {
            let t = ee(e?.to),
              o = ee(e?.cc),
              a = ee(e?.bcc),
              i = ee(e?.note),
              l = e?.message_ids?.length ?? 0
            return null == t && null == o && null == a && null == i && 0 === l
              ? { descriptor: ei.forward_emails_approval }
              : {
                  descriptor: ei.forward_emails_approvalWithContext,
                  values: {
                    bcc: a ?? "",
                    cc: o ?? "",
                    hasBcc: null == a ? "no" : "yes",
                    hasCc: null == o ? "no" : "yes",
                    hasNote: null == i ? "no" : "yes",
                    hasTo: null == t ? "no" : "yes",
                    itemCount: l,
                    note: i ?? "",
                    to: t ?? "",
                  },
                }
          },
          getItemName: ({ note: e }) => e,
          getMessages: () => ({
            withoutContext: { active: ei.forward_emails_active, completed: ei.forward_emails_completed },
            withContext: {
              active: ei.forward_emails_activeWithContext,
              completed: ei.forward_emails_completedWithContext,
            },
            withRecipient: {
              active: ei.forward_emails_activeWithRecipient,
              completed: ei.forward_emails_completedWithRecipient,
            },
          }),
          preferRecipient: !0,
        }),
        list_labels: (0, A.lu)({
          getMessages: () => (0, A.vP)(ei, "list_labels", "WithContext"),
          getValue: ({ label_names: e }) => e?.join(", "),
          maxPreviewLength: 40,
          valueName: "target",
        }),
        read_attachment: (0, A.PM)({
          getItemName: ({ filename: e }) => e,
          getMessages: () => (0, A.vP)(ei, "read_attachment", "WithContext"),
          maxPreviewLength: 40,
        }),
        read_email_thread: (0, A.v9)({
          getMessages: () => ({
            completedCount: ei.read_email_thread_completedCount,
            withoutContext: { active: ei.read_email_thread_active, completed: ei.read_email_thread_completed },
            withContext: {
              active: ei.read_email_thread_activeWithContext,
              completed: ei.read_email_thread_completedWithContext,
            },
          }),
          preferredKeys: ["messages", "emails"],
        }),
        search_email_ids: (0, A.Ep)({
          getMessages: () => ({
            completedCount: ei.search_emails_completedCount,
            withoutContext: { active: ei.search_emails_active, completed: ei.search_emails_completed },
            withContext: {
              active: ei.search_emails_activeWithContext,
              completed: ei.search_emails_completedWithContext,
            },
          }),
          getQuery: ({ query: e }) => e,
          maxPreviewLength: 40,
          preferredKeys: B,
          shouldIncludeResultCount: ({ max_results: e }) => null != e,
        }),
        search_emails: (0, A.Ep)({
          getMessages: () => ({
            completedCount: ei.search_emails_completedCount,
            withoutContext: { active: ei.search_emails_active, completed: ei.search_emails_completed },
            withContext: {
              active: ei.search_emails_activeWithContext,
              completed: ei.search_emails_completedWithContext,
            },
          }),
          getQuery: ({ query: e }) => e,
          maxPreviewLength: 40,
          preferredKeys: B,
          shouldIncludeResultCount: ({ max_results: e }) => null != e,
        }),
        send_draft: (0, A.Jw)(
          () => ({ active: ei.send_draft_active, completed: ei.send_draft_completed }),
          () => ({ descriptor: ei.send_draft_approval }),
        ),
        send_email: ea({
          approval: (e) =>
            et({ fallback: ei.send_email_approval, toolArguments: e, withContext: ei.send_email_approvalWithContext }),
          getItemName: ({ subject: e }) => e,
          getMessages: () => ({
            withoutContext: { active: ei.send_email_active, completed: ei.send_email_completed },
            withContext: { active: ei.send_email_activeWithContext, completed: ei.send_email_completedWithContext },
            withRecipient: {
              active: ei.send_email_activeWithRecipient,
              completed: ei.send_email_completedWithRecipient,
            },
            withItemNameAndRecipient: {
              active: ei.send_email_activeWithItemNameAndRecipient,
              completed: ei.send_email_completedWithItemNameAndRecipient,
            },
          }),
        }),
        update_draft: ea({
          approval: (e) =>
            et({
              fallback: ei.update_draft_approval,
              toolArguments: e,
              withContext: ei.update_draft_approvalWithContext,
            }),
          getItemName: ({ subject: e }) => e,
          getMessages: () => ({
            withoutContext: { active: ei.update_draft_active, completed: ei.update_draft_completed },
            withContext: { active: ei.update_draft_activeWithContext, completed: ei.update_draft_completedWithContext },
            withRecipient: {
              active: ei.update_draft_activeWithRecipient,
              completed: ei.update_draft_completedWithRecipient,
            },
          }),
        }),
      },
      Z = (0, A.Ys)({ appRegistryKey: "gmail", getMessages: () => ei, toolArgumentsSchema: K, tools: Y }),
      X = (0, A.mg)({ toolArgumentsSchema: K, tools: Y })
    function ee(e) {
      return (0, A.kF)({ maxLength: 120, value: e })
    }
    function et({ fallback: e, toolArguments: t, withContext: o }) {
      let a = ee(t?.subject),
        i = ee(t?.to),
        l = ee(t?.cc),
        s = ee(t?.bcc),
        c = ee(t?.body),
        n = t?.attachment_files?.length ?? 0
      return null == a && null == i && null == l && null == s && null == c && 0 === n
        ? { descriptor: e }
        : {
            descriptor: o,
            values: {
              attachmentCount: n,
              bcc: s ?? "",
              body: c ?? "",
              cc: l ?? "",
              hasBcc: null == s ? "no" : "yes",
              hasBody: null == c ? "no" : "yes",
              hasCc: null == l ? "no" : "yes",
              hasSubject: null == a ? "no" : "yes",
              hasTo: null == i ? "no" : "yes",
              subject: a ?? "",
              to: i ?? "",
            },
          }
    }
    function eo({ fallback: e, toolArguments: t, withCount: o }) {
      let a = t?.message_ids?.length
      return null == a || 0 === a ? { descriptor: e } : { descriptor: o, values: { itemCount: a } }
    }
    function ea({ approval: e, getItemName: t, getMessages: o, preferRecipient: a = !1 }) {
      let i = (e, i) => {
        let l = o()
        if (!e.hasInvocationContext || null == e.toolArguments) return e.intl.formatMessage(l.withoutContext[i])
        let s = (0, A.kF)({ maxLength: 40, value: t(e.toolArguments) }),
          c = (0, A.kF)({ maxLength: 40, value: e.toolArguments.to?.split(",").find((e) => e.trim().length > 0) })
        return null != s && null != c && null != l.withItemNameAndRecipient
          ? e.intl.formatMessage(l.withItemNameAndRecipient[i], { itemName: s, recipientName: c })
          : null != c && (a || null == s)
            ? e.intl.formatMessage(l.withRecipient[i], { recipientName: c })
            : null != s
              ? e.intl.formatMessage(l.withContext[i], { itemName: s })
              : e.intl.formatMessage(l.withoutContext[i])
      }
      return { active: (e) => i(e, "active"), completed: (e) => i(e, "completed"), approval: e }
    }
    let ei = (0, M.YK)({
        apply_labels_to_emails_approval: {
          id: "localConversation.mcpToolApproval.gmail.apply_labels_to_emails.fallback",
          defaultMessage: "Allow Gmail to apply labels to emails?",
          description: "Approval request for applying Gmail labels to emails.",
        },
        apply_labels_to_emails_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.apply_labels_to_emails.target",
          defaultMessage:
            'Allow Gmail to apply labels to {itemCount, plural, =0 {emails} one {# email} other {# emails}}{hasAddedLabels, select, yes {, adding "{addedLabels}"} other {}}{hasRemovedLabels, select, yes {, removing "{removedLabels}"} other {}}?',
          description:
            "Approval request for updating Gmail labels, including the email count and readable added and removed label names.",
        },
        archive_emails_approval: {
          id: "localConversation.mcpToolApproval.gmail.archive_emails.fallback",
          defaultMessage: "Allow Gmail to archive emails?",
          description: "Approval request for archiving Gmail emails.",
        },
        archive_emails_approvalWithCount: {
          id: "localConversation.mcpToolApproval.gmail.archive_emails.count",
          defaultMessage: "Allow Gmail to archive {itemCount, plural, one {# email} other {# emails}}?",
          description: "Approval request for archiving Gmail emails, including the exact number of emails.",
        },
        batch_modify_email_approval: {
          id: "localConversation.mcpToolApproval.gmail.batch_modify_email.fallback",
          defaultMessage: "Allow Gmail to update email labels?",
          description: "Approval request for updating Gmail email labels using opaque label identifiers.",
        },
        batch_modify_email_approvalWithCount: {
          id: "localConversation.mcpToolApproval.gmail.batch_modify_email.count",
          defaultMessage: "Allow Gmail to update labels on {itemCount, plural, one {# email} other {# emails}}?",
          description:
            "Approval request for updating Gmail labels, including the exact email count without presenting opaque label identifiers as readable names.",
        },
        bulk_label_matching_emails_approval: {
          id: "localConversation.mcpToolApproval.gmail.bulk_label_matching_emails.fallback",
          defaultMessage: "Allow Gmail to label matching emails?",
          description: "Approval request for applying a Gmail label to matching emails.",
        },
        bulk_label_matching_emails_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.bulk_label_matching_emails.context",
          defaultMessage:
            'Allow Gmail to label emails{hasQuery, select, yes { matching "{query}"} other {}}{hasLabelName, select, yes { as "{labelName}"} other {}}{shouldArchive, select, yes { and archive them} other {}}?',
          description:
            "Approval request for bulk-labeling Gmail emails, including the search query, label name, and whether matching emails will be archived.",
        },
        create_draft_approval: {
          id: "localConversation.mcpToolApproval.gmail.create_draft.fallback",
          defaultMessage: "Allow Gmail to create a draft?",
          description: "Approval request for creating a Gmail email draft.",
        },
        create_draft_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.create_draft.itemName",
          defaultMessage:
            'Allow Gmail to create {hasSubject, select, yes {draft "{subject}"} other {a draft}}{hasTo, select, yes { to {to}} other {}}{hasCc, select, yes {, cc {cc}} other {}}{hasBcc, select, yes {, bcc {bcc}} other {}}{hasBody, select, yes { with message "{body}"} other {}}{attachmentCount, plural, =0 {} one { with # attachment} other { with # attachments}}?',
          description:
            "Approval request for creating a Gmail draft, including its subject, To, Cc, and Bcc recipients, readable message preview, and attachment count when available.",
        },
        create_label_approval: {
          id: "localConversation.mcpToolApproval.gmail.create_label.fallback",
          defaultMessage: "Allow Gmail to create a label?",
          description: "Approval request for creating a Gmail label.",
        },
        create_label_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.create_label.itemName",
          defaultMessage:
            'Allow Gmail to create label "{itemName}"{messageVisibility, select, hide { and hide its emails} other {}}{labelVisibility, select, labelHide { and hide the label} labelShowIfUnread { and show the label only when unread} other {}}?',
          description:
            "Approval request for creating a named Gmail label, including non-default email and label visibility settings.",
        },
        delete_emails_approval: {
          id: "localConversation.mcpToolApproval.gmail.delete_emails.fallback",
          defaultMessage: "Allow Gmail to delete emails?",
          description: "Approval request for moving Gmail emails to the trash.",
        },
        delete_emails_approvalWithCount: {
          id: "localConversation.mcpToolApproval.gmail.delete_emails.count",
          defaultMessage: "Allow Gmail to delete {itemCount, plural, one {# email} other {# emails}}?",
          description: "Approval request for moving Gmail emails to the trash, including the exact number of emails.",
        },
        forward_emails_approval: {
          id: "localConversation.mcpToolApproval.gmail.forward_emails.fallback",
          defaultMessage: "Allow Gmail to forward emails?",
          description: "Approval request for forwarding Gmail emails.",
        },
        forward_emails_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.forward_emails.recipient",
          defaultMessage:
            'Allow Gmail to forward {itemCount, plural, =0 {emails} one {# email} other {# emails}}{hasTo, select, yes { to {to}} other {}}{hasCc, select, yes {, cc {cc}} other {}}{hasBcc, select, yes {, bcc {bcc}} other {}}{hasNote, select, yes { with note "{note}"} other {}}?',
          description:
            "Approval request for forwarding Gmail emails, including the email count, To, Cc, and Bcc recipients, and a readable forwarding note.",
        },
        send_draft_approval: {
          id: "localConversation.mcpToolApproval.gmail.send_draft.fallback",
          defaultMessage: "Allow Gmail to send a draft?",
          description: "Approval request for sending a Gmail draft when only its opaque identifier is available.",
        },
        send_email_approval: {
          id: "localConversation.mcpToolApproval.gmail.send_email.fallback",
          defaultMessage: "Allow Gmail to send an email?",
          description: "Approval request for sending a Gmail email.",
        },
        send_email_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.send_email.item_and_recipient",
          defaultMessage:
            'Allow Gmail to send {hasSubject, select, yes {email "{subject}"} other {an email}}{hasTo, select, yes { to {to}} other {}}{hasCc, select, yes {, cc {cc}} other {}}{hasBcc, select, yes {, bcc {bcc}} other {}}{hasBody, select, yes { with message "{body}"} other {}}{attachmentCount, plural, =0 {} one { with # attachment} other { with # attachments}}?',
          description:
            "Approval request for sending a Gmail email, including its subject, To, Cc, and Bcc recipients, readable message preview, and attachment count when available.",
        },
        update_draft_approval: {
          id: "localConversation.mcpToolApproval.gmail.update_draft.fallback",
          defaultMessage: "Allow Gmail to update draft?",
          description: "Approval request for updating a Gmail email draft.",
        },
        update_draft_approvalWithContext: {
          id: "localConversation.mcpToolApproval.gmail.update_draft.itemName",
          defaultMessage:
            'Allow Gmail to update {hasSubject, select, yes {draft "{subject}"} other {a draft}}{hasTo, select, yes { to {to}} other {}}{hasCc, select, yes {, cc {cc}} other {}}{hasBcc, select, yes {, bcc {bcc}} other {}}{hasBody, select, yes { with message "{body}"} other {}}{attachmentCount, plural, =0 {} one { with # attachment} other { with # attachments}}?',
          description:
            "Approval request for updating a Gmail draft, including its changed subject, To, Cc, and Bcc recipients, and readable message preview when available.",
        },
        apply_labels_to_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.apply_labels_to_emails.active",
          defaultMessage: "Applying labels to emails",
          description: "Active label for the gmail apply_labels_to_emails MCP tool.",
        },
        apply_labels_to_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.apply_labels_to_emails.completed",
          defaultMessage: "Applied labels to emails",
          description: "Completed label for the gmail apply_labels_to_emails MCP tool.",
        },
        archive_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.archive_emails.active",
          defaultMessage: "Archiving emails",
          description: "Active label for the gmail archive_emails MCP tool.",
        },
        archive_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.archive_emails.completed",
          defaultMessage: "Archived emails",
          description: "Completed label for the gmail archive_emails MCP tool.",
        },
        batch_modify_email_active: {
          id: "localConversation.mcpToolActivity.gmail.batch_modify_email.active",
          defaultMessage: "Updating email labels",
          description: "Active label for the gmail batch_modify_email MCP tool.",
        },
        batch_modify_email_completed: {
          id: "localConversation.mcpToolActivity.gmail.batch_modify_email.completed",
          defaultMessage: "Updated email labels",
          description: "Completed label for the gmail batch_modify_email MCP tool.",
        },
        bulk_label_matching_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.bulk_label_matching_emails.active",
          defaultMessage: "Labeling matching emails",
          description: "Active label for the gmail bulk_label_matching_emails MCP tool.",
        },
        bulk_label_matching_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.bulk_label_matching_emails.completed",
          defaultMessage: "Labeled matching emails",
          description: "Completed label for the gmail bulk_label_matching_emails MCP tool.",
        },
        create_draft_active: {
          id: "localConversation.mcpToolActivity.gmail.create_draft.active",
          defaultMessage: "Creating draft",
          description: "Active label for the gmail create_draft MCP tool.",
        },
        create_draft_completed: {
          id: "localConversation.mcpToolActivity.gmail.create_draft.completed",
          defaultMessage: "Created draft",
          description: "Completed label for the gmail create_draft MCP tool.",
        },
        create_label_active: {
          id: "localConversation.mcpToolActivity.gmail.create_label.active",
          defaultMessage: "Creating label",
          description: "Active label for the gmail create_label MCP tool.",
        },
        create_label_completed: {
          id: "localConversation.mcpToolActivity.gmail.create_label.completed",
          defaultMessage: "Created label",
          description: "Completed label for the gmail create_label MCP tool.",
        },
        delete_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.delete_emails.active",
          defaultMessage: "Deleting emails",
          description: "Active label for the gmail delete_emails MCP tool.",
        },
        delete_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.delete_emails.completed",
          defaultMessage: "Deleted emails",
          description: "Completed label for the gmail delete_emails MCP tool.",
        },
        forward_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.forward_emails.active",
          defaultMessage: "Forwarding emails",
          description: "Active label for the gmail forward_emails MCP tool.",
        },
        forward_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.forward_emails.completed",
          defaultMessage: "Forwarded emails",
          description: "Completed label for the gmail forward_emails MCP tool.",
        },
        send_draft_active: {
          id: "localConversation.mcpToolActivity.gmail.send_draft.active",
          defaultMessage: "Sending draft",
          description: "Active label for the gmail send_draft MCP tool.",
        },
        send_draft_completed: {
          id: "localConversation.mcpToolActivity.gmail.send_draft.completed",
          defaultMessage: "Sent draft",
          description: "Completed label for the gmail send_draft MCP tool.",
        },
        send_email_active: {
          id: "localConversation.mcpToolActivity.gmail.send_email.active",
          defaultMessage: "Sending email",
          description: "Active label for the gmail send_email MCP tool.",
        },
        send_email_completed: {
          id: "localConversation.mcpToolActivity.gmail.send_email.completed",
          defaultMessage: "Sent email",
          description: "Completed label for the gmail send_email MCP tool.",
        },
        update_draft_active: {
          id: "localConversation.mcpToolActivity.gmail.update_draft.active",
          defaultMessage: "Updating draft",
          description: "Active label for the gmail update_draft MCP tool.",
        },
        update_draft_completed: {
          id: "localConversation.mcpToolActivity.gmail.update_draft.completed",
          defaultMessage: "Updated draft",
          description: "Completed label for the gmail update_draft MCP tool.",
        },
        get_profile_active: {
          id: "localConversation.mcpToolActivity.gmail.get_profile.active",
          defaultMessage: "Getting profile",
          description: "Active label for the gmail get_profile MCP tool.",
        },
        get_profile_completed: {
          id: "localConversation.mcpToolActivity.gmail.get_profile.completed",
          defaultMessage: "Got profile",
          description: "Completed label for the gmail get_profile MCP tool.",
        },
        get_recent_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.get_recent_emails.active",
          defaultMessage: "Getting recent emails",
          description: "Active label for the gmail get_recent_emails MCP tool.",
        },
        get_recent_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.get_recent_emails.completed",
          defaultMessage: "Got recent emails",
          description: "Completed label for the gmail get_recent_emails MCP tool.",
        },
        list_drafts_active: {
          id: "localConversation.mcpToolActivity.gmail.list_drafts.active",
          defaultMessage: "Listing drafts",
          description: "Active label for the gmail list_drafts MCP tool.",
        },
        list_drafts_completed: {
          id: "localConversation.mcpToolActivity.gmail.list_drafts.completed",
          defaultMessage: "Listed drafts",
          description: "Completed label for the gmail list_drafts MCP tool.",
        },
        list_labels_active: {
          id: "localConversation.mcpToolActivity.gmail.list_labels.active",
          defaultMessage: "Listing labels",
          description: "Active label for the gmail list_labels MCP tool.",
        },
        list_labels_completed: {
          id: "localConversation.mcpToolActivity.gmail.list_labels.completed",
          defaultMessage: "Listed labels",
          description: "Completed label for the gmail list_labels MCP tool.",
        },
        read_attachment_active: {
          id: "localConversation.mcpToolActivity.gmail.read_attachment.active",
          defaultMessage: "Reading attachment",
          description: "Active label for the gmail read_attachment MCP tool.",
        },
        read_attachment_completed: {
          id: "localConversation.mcpToolActivity.gmail.read_attachment.completed",
          defaultMessage: "Read attachment",
          description: "Completed label for the gmail read_attachment MCP tool.",
        },
        read_email_active: {
          id: "localConversation.mcpToolActivity.gmail.read_email.active",
          defaultMessage: "Reading emails",
          description: "Active label for the gmail read_email MCP tool.",
        },
        read_email_completed: {
          id: "localConversation.mcpToolActivity.gmail.read_email.completed",
          defaultMessage: "Read emails",
          description: "Completed label for the gmail read_email MCP tool.",
        },
        read_email_thread_active: {
          id: "localConversation.mcpToolActivity.gmail.read_email_thread.active",
          defaultMessage: "Reading email thread",
          description: "Active label for the gmail read_email_thread MCP tool.",
        },
        read_email_thread_completed: {
          id: "localConversation.mcpToolActivity.gmail.read_email_thread.completed",
          defaultMessage: "Read email thread",
          description: "Completed label for the gmail read_email_thread MCP tool.",
        },
        search_emails_active: {
          id: "localConversation.mcpToolActivity.gmail.search_emails.active",
          defaultMessage: "Searching emails",
          description: "Active label for the gmail search_emails MCP tool.",
        },
        search_emails_completed: {
          id: "localConversation.mcpToolActivity.gmail.search_emails.completed",
          defaultMessage: "Searched emails",
          description: "Completed label for the gmail search_emails MCP tool.",
        },
        batch_read_email_threads_active: {
          id: "localConversation.mcpToolActivity.gmail.batch_read_email_threads.active",
          defaultMessage: "Reading email threads",
          description: "Active label for the Gmail batch_read_email_threads MCP tool.",
        },
        batch_read_email_threads_completed: {
          id: "localConversation.mcpToolActivity.gmail.batch_read_email_threads.completed",
          defaultMessage: "Read email threads",
          description: "Completed label for the Gmail batch_read_email_threads MCP tool.",
        },
        apply_labels_to_emails_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.apply_labels_to_emails.activeWithContext",
          defaultMessage: 'Applying labels to emails "{target}"',
          description: "Active label for the Gmail apply_labels_to_emails MCP tool with label names.",
        },
        apply_labels_to_emails_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.apply_labels_to_emails.completedWithContext",
          defaultMessage: 'Applied labels to emails "{target}"',
          description: "Completed label for the Gmail apply_labels_to_emails MCP tool with label names.",
        },
        batch_modify_email_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.batch_modify_email.activeWithContext",
          defaultMessage: 'Updating email labels "{target}"',
          description: "Active label for the Gmail batch_modify_email MCP tool with label IDs.",
        },
        batch_modify_email_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.batch_modify_email.completedWithContext",
          defaultMessage: 'Updated email labels "{target}"',
          description: "Completed label for the Gmail batch_modify_email MCP tool with label IDs.",
        },
        create_draft_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.create_draft.activeWithContext",
          defaultMessage: 'Creating draft "{itemName}"',
          description: "Active label for a Gmail draft with an email subject.",
        },
        create_draft_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.create_draft.completedWithContext",
          defaultMessage: 'Created draft "{itemName}"',
          description: "Completed label for a Gmail draft with an email subject.",
        },
        create_draft_activeWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.create_draft.activeWithRecipient",
          defaultMessage: "Creating draft to {recipientName}",
          description: "Active label for a Gmail draft with a recipient.",
        },
        create_draft_completedWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.create_draft.completedWithRecipient",
          defaultMessage: "Created draft to {recipientName}",
          description: "Completed label for a Gmail draft with a recipient.",
        },
        create_label_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.create_label.activeWithContext",
          defaultMessage: 'Creating label "{itemName}"',
          description: "Active label for the Gmail create_label MCP tool with a name.",
        },
        create_label_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.create_label.completedWithContext",
          defaultMessage: 'Created label "{itemName}"',
          description: "Completed label for the Gmail create_label MCP tool with a name.",
        },
        forward_emails_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.forward_emails.activeWithContext",
          defaultMessage: 'Forwarding emails "{itemName}"',
          description: "Active label for forwarded Gmail emails with a note.",
        },
        forward_emails_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.forward_emails.completedWithContext",
          defaultMessage: 'Forwarded emails "{itemName}"',
          description: "Completed label for forwarded Gmail emails with a note.",
        },
        forward_emails_activeWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.forward_emails.activeWithRecipient",
          defaultMessage: "Forwarding emails to {recipientName}",
          description: "Active label for forwarded Gmail emails with a recipient.",
        },
        forward_emails_completedWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.forward_emails.completedWithRecipient",
          defaultMessage: "Forwarded emails to {recipientName}",
          description: "Completed label for forwarded Gmail emails with a recipient.",
        },
        list_labels_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.list_labels.activeWithContext",
          defaultMessage: 'Listing labels "{target}"',
          description: "Active label for listing Gmail labels with a label filter.",
        },
        list_labels_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.list_labels.completedWithContext",
          defaultMessage: 'Listed labels "{target}"',
          description: "Completed label for listing Gmail labels with a label filter.",
        },
        read_attachment_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.read_attachment.activeWithContext",
          defaultMessage: 'Reading attachment "{itemName}"',
          description: "Active label for reading a Gmail attachment with a filename.",
        },
        read_attachment_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.read_attachment.completedWithContext",
          defaultMessage: 'Read attachment "{itemName}"',
          description: "Completed label for reading a Gmail attachment with a filename.",
        },
        read_email_thread_activeWithContext: {
          id: "codex.mcpTool.gmail.readThreadEmails.active",
          defaultMessage: "Reading thread emails",
          description: "Active label for reading the emails in a Gmail thread.",
        },
        read_email_thread_completedWithContext: {
          id: "codex.mcpTool.gmail.readThreadEmails.completed",
          defaultMessage: "Read thread emails",
          description: "Completed label for reading the emails in a Gmail thread.",
        },
        read_email_thread_completedCount: {
          id: "codex.mcpTool.gmail.readThreadEmails.completedCount",
          defaultMessage: "Read {count, plural, one {a thread email} other {{count, number} thread emails}}",
          description: "Completed label for reading a Gmail thread when its exact email count is known.",
        },
        search_emails_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.search_emails.activeWithContext",
          defaultMessage: 'Searching emails "{query}"',
          description: "Active label for searching Gmail emails with a query.",
        },
        search_emails_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.search_emails.completedWithContext",
          defaultMessage: 'Searched emails "{query}"',
          description: "Completed label for searching Gmail emails with a query.",
        },
        search_emails_completedCount: {
          id: "codex.mcpTool.gmail.searchedEmailsCount",
          defaultMessage: "Searched {count, plural, one {an email} other {{count, number} emails}}",
          description: "Completed label for a Gmail search when its exact result count is known.",
        },
        send_email_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.send_email.activeWithContext",
          defaultMessage: 'Sending email "{itemName}"',
          description: "Active label for sending a Gmail email with a subject.",
        },
        send_email_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.send_email.completedWithContext",
          defaultMessage: 'Sent email "{itemName}"',
          description: "Completed label for sending a Gmail email with a subject.",
        },
        send_email_activeWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.send_email.activeWithRecipient",
          defaultMessage: "Sending email to {recipientName}",
          description: "Active label for sending a Gmail email with a recipient.",
        },
        send_email_completedWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.send_email.completedWithRecipient",
          defaultMessage: "Sent email to {recipientName}",
          description: "Completed label for sending a Gmail email with a recipient.",
        },
        send_email_activeWithItemNameAndRecipient: {
          id: "localConversation.mcpToolActivity.gmail.send_email.activeWithItemNameAndRecipient",
          defaultMessage: "Sending email “{itemName}” to {recipientName}",
          description: "Active label for sending a Gmail email with both a subject and recipient.",
        },
        send_email_completedWithItemNameAndRecipient: {
          id: "localConversation.mcpToolActivity.gmail.send_email.completedWithItemNameAndRecipient",
          defaultMessage: "Sent email “{itemName}” to {recipientName}",
          description: "Completed label for sending a Gmail email with both a subject and recipient.",
        },
        update_draft_activeWithContext: {
          id: "localConversation.mcpToolActivity.gmail.update_draft.activeWithContext",
          defaultMessage: 'Updating draft "{itemName}"',
          description: "Active label for updating a Gmail draft with a subject.",
        },
        update_draft_completedWithContext: {
          id: "localConversation.mcpToolActivity.gmail.update_draft.completedWithContext",
          defaultMessage: 'Updated draft "{itemName}"',
          description: "Completed label for updating a Gmail draft with a subject.",
        },
        update_draft_activeWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.update_draft.activeWithRecipient",
          defaultMessage: "Updating draft to {recipientName}",
          description: "Active label for updating a Gmail draft with a recipient.",
        },
        update_draft_completedWithRecipient: {
          id: "localConversation.mcpToolActivity.gmail.update_draft.completedWithRecipient",
          defaultMessage: "Updated draft to {recipientName}",
          description: "Completed label for updating a Gmail draft with a recipient.",
        },
      }),
      el = v
        .object({
          attendees: v
            .array(v.string().trim().min(1).max(320))
            .optional()
            .catch(void 0),
          attendees_to_add: v
            .array(v.string().trim().min(1).max(320))
            .optional()
            .catch(void 0),
          attendees_to_remove: v
            .array(v.string().trim().min(1).max(320))
            .optional()
            .catch(void 0),
          calendar_id: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          calendar_ids: v
            .array(v.string().trim().min(1))
            .optional()
            .catch(void 0),
          end_time: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          event_id: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          event_ids: v
            .array(v.string().trim().min(1))
            .optional()
            .catch(void 0),
          max_results: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          response_status: v
            .enum(["accepted", "declined", "tentative"])
            .optional()
            .catch(void 0),
          response_timezone_str: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          start_time: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          time_max: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          time_min: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          timezone_str: v
            .string()
            .trim()
            .min(1)
            .optional()
            .catch(void 0),
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
        })
        .strip(),
      es = {
        batch_read_event:
          ((a = (e, t) => {
            let o = e.toolArguments?.event_ids?.length
            return null == o || 0 === o
              ? "active" === t
                ? e.intl.formatMessage(ep.read_event_active)
                : e.intl.formatMessage(ep.read_event_completed)
              : "active" === t
                ? e.intl.formatMessage(ep.batch_read_event_activeWithCount, { count: o })
                : e.intl.formatMessage(ep.batch_read_event_completedWithCount, { count: o })
          }),
          { active: (e) => a(e, "active"), completed: (e) => a(e, "completed") }),
        create_event: (0, A.PM)({
          getItemName: ({ title: e }) => e,
          getMessages: () => (0, A.vP)(ep, "create_event", "WithContext"),
          maxPreviewLength: 40,
          approval: (e) =>
            er(e, { fallback: ep.create_event_approval, withContext: ep.create_event_approvalWithContext }),
        }),
        delete_event: (0, A.Jw)(
          () => ({ active: ep.delete_event_active, completed: ep.delete_event_completed }),
          () => ({ descriptor: ep.delete_event_approval }),
        ),
        get_availability:
          ((i = (e, t) => {
            let o = e.toolArguments?.calendar_ids
            if (null == o || 0 === o.length)
              return "active" === t
                ? e.intl.formatMessage(ep.get_availability_active)
                : e.intl.formatMessage(ep.get_availability_completed)
            let a = o.filter((e) => "primary" !== e && e.includes("@"))
            return 1 === a.length
              ? "active" === t
                ? e.intl.formatMessage(ep.get_availability_activeWithCalendar, { calendar: a[0] })
                : e.intl.formatMessage(ep.get_availability_completedWithCalendar, { calendar: a[0] })
              : o.length > 1
                ? "active" === t
                  ? e.intl.formatMessage(ep.get_availability_activeWithCount, { count: o.length })
                  : e.intl.formatMessage(ep.get_availability_completedWithCount, { count: o.length })
                : "active" === t
                  ? e.intl.formatMessage(ep.get_availability_active)
                  : e.intl.formatMessage(ep.get_availability_completed)
          }),
          { active: (e) => i(e, "active"), completed: (e) => i(e, "completed") }),
        respond_event:
          ((l = (e, t) => {
            let o = e.toolArguments?.response_status
            if (null == o)
              return "active" === t
                ? e.intl.formatMessage(ep.respond_event_active)
                : e.intl.formatMessage(ep.respond_event_completed)
            let a = {
              accepted: { active: ep.respond_event_acceptedActive, completed: ep.respond_event_acceptedCompleted },
              declined: { active: ep.respond_event_declinedActive, completed: ep.respond_event_declinedCompleted },
              tentative: { active: ep.respond_event_tentativeActive, completed: ep.respond_event_tentativeCompleted },
            }
            return e.intl.formatMessage(a[o][t])
          }),
          {
            active: (e) => l(e, "active"),
            completed: (e) => l(e, "completed"),
            approval: (e) => {
              let t = e?.response_status
              return null == t
                ? { descriptor: ep.respond_event_approval }
                : {
                    descriptor: {
                      accepted: ep.respond_event_approvalAccepted,
                      declined: ep.respond_event_approvalDeclined,
                      tentative: ep.respond_event_approvalTentative,
                    }[t],
                  }
            },
          }),
        search: (0, A.Ep)({
          getMessages: () => ({
            completedCount: ep.searched_events_completedCount,
            withoutContext: { active: ep.search_active, completed: ep.search_completed },
            withContext: { active: ep.search_activeWithContext, completed: ep.search_completedWithContext },
          }),
          getQuery: ({ query: e }) => e,
          maxPreviewLength: 40,
          preferredKeys: ["events", "results", "items"],
          shouldIncludeResultCount: ({ max_results: e }) => null != e,
        }),
        search_events: (0, A.Ep)({
          getMessages: () => ({
            completedCount: ep.searched_events_completedCount,
            withoutContext: { active: ep.search_events_active, completed: ep.search_events_completed },
            withContext: {
              active: ep.search_events_activeWithContext,
              completed: ep.search_events_completedWithContext,
            },
          }),
          getQuery: ({ query: e }) => e,
          maxPreviewLength: 40,
          preferredKeys: ["events", "results", "items"],
          shouldIncludeResultCount: ({ max_results: e }) => null != e,
        }),
        search_events_all_fields: (0, A.Jw)(() => ({
          active: ep.search_events_active,
          completed: ep.search_events_completed,
        })),
        update_event: (0, A.PM)({
          getItemName: ({ title: e }) => e,
          getMessages: () => (0, A.vP)(ep, "update_event", "WithContext"),
          maxPreviewLength: 40,
          approval: (e) =>
            er(e, { fallback: ep.update_event_approval, withContext: ep.update_event_approvalWithContext }),
        }),
      },
      ec = (0, A.Ys)({ appRegistryKey: "google calendar", getMessages: () => ep, toolArgumentsSchema: el, tools: es }),
      en = (0, A.mg)({ toolArgumentsSchema: el, tools: es })
    function er(e, { fallback: t, withContext: o }) {
      let a = (0, A.kF)({ maxLength: 40, value: e?.title }),
        i = ed(e?.start_time),
        l = ed(e?.end_time),
        s = e?.attendees?.join(", ") ?? "",
        c = e?.attendees_to_add?.join(", ") ?? "",
        n = e?.attendees_to_remove?.join(", ") ?? ""
      return null == a && null == i && null == l && 0 === s.length && 0 === c.length && 0 === n.length
        ? { descriptor: t }
        : {
            descriptor: o,
            values: {
              attendees: s,
              attendeesToAdd: c,
              attendeesToRemove: n,
              endTime: l ?? 0,
              hasAttendees: s.length > 0 ? "yes" : "no",
              hasAttendeesToAdd: c.length > 0 ? "yes" : "no",
              hasAttendeesToRemove: n.length > 0 ? "yes" : "no",
              hasEndTime: null == l ? "no" : "yes",
              hasStartTime: null == i ? "no" : "yes",
              hasTitle: null == a ? "no" : "yes",
              itemName: a ?? "",
              startTime: i ?? 0,
            },
          }
    }
    function ed(e) {
      if (null == e) return null
      let t = Date.parse(e)
      return Number.isFinite(t) ? t : null
    }
    let ep = (0, M.YK)({
      create_event_approval: {
        id: "localConversation.mcpToolApproval.googleCalendar.create_event.fallback",
        defaultMessage: "Allow Google Calendar to create an event?",
        description:
          "Approval request for creating a Google Calendar event when no readable event details are available.",
      },
      create_event_approvalWithContext: {
        id: "localConversation.mcpToolApproval.googleCalendar.create_event.context",
        defaultMessage:
          'Allow Google Calendar to create{hasTitle, select, yes { event "{itemName}"} other { an event}}{hasStartTime, select, yes { on {startTime, date, medium} at {startTime, time, short}} other {}}{hasEndTime, select, yes { until {endTime, date, medium} at {endTime, time, short}} other {}}{hasAttendees, select, yes { with {attendees}} other {}}?',
        description:
          "Approval request for creating a Google Calendar event with its available title, localized start and end dates and times, and invited attendee emails.",
      },
      delete_event_approval: {
        id: "localConversation.mcpToolApproval.googleCalendar.delete_event.fallback",
        defaultMessage: "Allow Google Calendar to delete an event?",
        description: "Approval request for deleting a Google Calendar event.",
      },
      respond_event_approval: {
        id: "localConversation.mcpToolApproval.googleCalendar.respond_event.fallback",
        defaultMessage: "Allow Google Calendar to respond to an event?",
        description:
          "Approval request for responding to a Google Calendar event when the invitation response status is unavailable.",
      },
      respond_event_approvalAccepted: {
        id: "localConversation.mcpToolApproval.googleCalendar.respond_event.accepted",
        defaultMessage: "Allow Google Calendar to accept an event?",
        description: "Approval request for accepting a Google Calendar event.",
      },
      respond_event_approvalDeclined: {
        id: "localConversation.mcpToolApproval.googleCalendar.respond_event.declined",
        defaultMessage: "Allow Google Calendar to decline an event?",
        description: "Approval request for declining a Google Calendar event.",
      },
      respond_event_approvalTentative: {
        id: "localConversation.mcpToolApproval.googleCalendar.respond_event.tentative",
        defaultMessage: "Allow Google Calendar to mark an event tentative?",
        description: "Approval request for marking a Google Calendar event tentative.",
      },
      update_event_approval: {
        id: "localConversation.mcpToolApproval.googleCalendar.update_event.fallback",
        defaultMessage: "Allow Google Calendar to update an event?",
        description:
          "Approval request for updating a Google Calendar event when no readable change details are available.",
      },
      update_event_approvalWithContext: {
        id: "localConversation.mcpToolApproval.googleCalendar.update_event.context",
        defaultMessage:
          'Allow Google Calendar to update{hasTitle, select, yes { event "{itemName}"} other { an event}}{hasStartTime, select, yes { to start on {startTime, date, medium} at {startTime, time, short}} other {}}{hasEndTime, select, yes { to end on {endTime, date, medium} at {endTime, time, short}} other {}}{hasAttendeesToAdd, select, yes { and add {attendeesToAdd}} other {}}{hasAttendeesToRemove, select, yes { and remove {attendeesToRemove}} other {}}?',
        description:
          "Approval request for updating a Google Calendar event with its available title, localized new start and end dates and times, and attendee emails to add or remove.",
      },
      create_event_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.create_event.active",
        defaultMessage: "Creating event",
        description: "Active label for the googleCalendar create_event MCP tool.",
      },
      create_event_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.create_event.completed",
        defaultMessage: "Created event",
        description: "Completed label for the googleCalendar create_event MCP tool.",
      },
      delete_event_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.delete_event.active",
        defaultMessage: "Deleting event",
        description: "Active label for the googleCalendar delete_event MCP tool.",
      },
      delete_event_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.delete_event.completed",
        defaultMessage: "Deleted event",
        description: "Completed label for the googleCalendar delete_event MCP tool.",
      },
      respond_event_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.respond_event.active",
        defaultMessage: "Responding to event",
        description: "Active label for the googleCalendar respond_event MCP tool.",
      },
      respond_event_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.respond_event.completed",
        defaultMessage: "Responded to event",
        description: "Completed label for the googleCalendar respond_event MCP tool.",
      },
      update_event_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.update_event.active",
        defaultMessage: "Updating event",
        description: "Active label for the googleCalendar update_event MCP tool.",
      },
      update_event_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.update_event.completed",
        defaultMessage: "Updated event",
        description: "Completed label for the googleCalendar update_event MCP tool.",
      },
      fetch_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.fetch.active",
        defaultMessage: "Fetching event",
        description: "Active label for the googleCalendar fetch MCP tool.",
      },
      fetch_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.fetch.completed",
        defaultMessage: "Fetched event",
        description: "Completed label for the googleCalendar fetch MCP tool.",
      },
      get_availability_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.get_availability.active",
        defaultMessage: "Checking availability",
        description: "Active label for the googleCalendar get_availability MCP tool.",
      },
      get_availability_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.get_availability.completed",
        defaultMessage: "Checked availability",
        description: "Completed label for the googleCalendar get_availability MCP tool.",
      },
      get_profile_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.get_profile.active",
        defaultMessage: "Getting profile",
        description: "Active label for the googleCalendar get_profile MCP tool.",
      },
      get_profile_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.get_profile.completed",
        defaultMessage: "Got profile",
        description: "Completed label for the googleCalendar get_profile MCP tool.",
      },
      read_event_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.read_event.active",
        defaultMessage: "Reading events",
        description: "Active label for the googleCalendar read_event MCP tool.",
      },
      read_event_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.read_event.completed",
        defaultMessage: "Read events",
        description: "Completed label for the googleCalendar read_event MCP tool.",
      },
      read_event_all_fields_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.read_event_all_fields.active",
        defaultMessage: "Reading event",
        description: "Active label for the googleCalendar read_event_all_fields MCP tool.",
      },
      read_event_all_fields_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.read_event_all_fields.completed",
        defaultMessage: "Read event",
        description: "Completed label for the googleCalendar read_event_all_fields MCP tool.",
      },
      search_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.search.active",
        defaultMessage: "Searching calendar",
        description: "Active label for the googleCalendar search MCP tool.",
      },
      search_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.search.completed",
        defaultMessage: "Searched calendar",
        description: "Completed label for the googleCalendar search MCP tool.",
      },
      search_events_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.search_events.active",
        defaultMessage: "Searching events",
        description: "Active label for the googleCalendar search_events MCP tool.",
      },
      search_events_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.search_events.completed",
        defaultMessage: "Searched events",
        description: "Completed label for the googleCalendar search_events MCP tool.",
      },
      get_colors_active: {
        id: "localConversation.mcpToolActivity.googleCalendar.get_colors.active",
        defaultMessage: "Getting calendar colors",
        description: "Active label for the Google Calendar get_colors MCP tool.",
      },
      get_colors_completed: {
        id: "localConversation.mcpToolActivity.googleCalendar.get_colors.completed",
        defaultMessage: "Got calendar colors",
        description: "Completed label for the Google Calendar get_colors MCP tool.",
      },
      create_event_activeWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.create_event.activeWithContext",
        defaultMessage: 'Creating event "{itemName}"',
        description: "Active label for the Google Calendar create_event MCP tool with an event title.",
      },
      create_event_completedWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.create_event.completedWithContext",
        defaultMessage: 'Created event "{itemName}"',
        description: "Completed label for the Google Calendar create_event MCP tool with an event title.",
      },
      update_event_activeWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.update_event.activeWithContext",
        defaultMessage: 'Updating event "{itemName}"',
        description: "Active label for the Google Calendar update_event MCP tool with an event title.",
      },
      update_event_completedWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.update_event.completedWithContext",
        defaultMessage: 'Updated event "{itemName}"',
        description: "Completed label for the Google Calendar update_event MCP tool with an event title.",
      },
      search_activeWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.search.activeWithContext",
        defaultMessage: 'Searching calendar "{query}"',
        description: "Active label for searching Google Calendar with a query.",
      },
      search_completedWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.search.completedWithContext",
        defaultMessage: 'Searched calendar "{query}"',
        description: "Completed label for searching Google Calendar with a query.",
      },
      search_events_activeWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.search_events.activeWithContext",
        defaultMessage: 'Searching events "{query}"',
        description: "Active label for searching Google Calendar events with a query.",
      },
      search_events_completedWithContext: {
        id: "localConversation.mcpToolActivity.googleCalendar.search_events.completedWithContext",
        defaultMessage: 'Searched events "{query}"',
        description: "Completed label for searching Google Calendar events with a query.",
      },
      searched_events_completedCount: {
        id: "codex.mcpTool.googleCalendar.searchedEventsCount",
        defaultMessage: "Searched {count, plural, one {an event} other {{count, number} events}}",
        description: "Completed label for a Google Calendar search when an exact result count is known.",
      },
      batch_read_event_activeWithCount: {
        id: "codex.mcpTool.googleCalendar.readEventsCount.active",
        defaultMessage: "Reading {count, plural, one {an event} other {{count, number} events}}",
        description: "Active label for reading a known number of Google Calendar events.",
      },
      batch_read_event_completedWithCount: {
        id: "codex.mcpTool.googleCalendar.readEventsCount.completed",
        defaultMessage: "Read {count, plural, one {an event} other {{count, number} events}}",
        description: "Completed label for reading a known number of Google Calendar events.",
      },
      get_availability_activeWithCalendar: {
        id: "codex.mcpTool.googleCalendar.checkedAvailabilityFor.active",
        defaultMessage: "Checking availability for {calendar}",
        description: "Active label for checking availability on a readable Google Calendar.",
      },
      get_availability_completedWithCalendar: {
        id: "codex.mcpTool.googleCalendar.checkedAvailabilityFor.completed",
        defaultMessage: "Checked availability for {calendar}",
        description: "Completed label for checking availability on a readable Google Calendar.",
      },
      get_availability_activeWithCount: {
        id: "codex.mcpTool.googleCalendar.checkedAvailabilityAcross.active",
        defaultMessage:
          "Checking availability across {count, plural, one {a calendar} other {{count, number} calendars}}",
        description: "Active label for checking availability across multiple Google Calendars.",
      },
      get_availability_completedWithCount: {
        id: "codex.mcpTool.googleCalendar.checkedAvailabilityAcross.completed",
        defaultMessage:
          "Checked availability across {count, plural, one {a calendar} other {{count, number} calendars}}",
        description: "Completed label for checking availability across multiple Google Calendars.",
      },
      respond_event_acceptedActive: {
        id: "codex.mcpTool.googleCalendar.acceptingEvent",
        defaultMessage: "Accepting event",
        description: "Active label for accepting a Google Calendar event.",
      },
      respond_event_acceptedCompleted: {
        id: "codex.mcpTool.googleCalendar.acceptedEvent",
        defaultMessage: "Accepted event",
        description: "Completed label for accepting a Google Calendar event.",
      },
      respond_event_declinedActive: {
        id: "codex.mcpTool.googleCalendar.decliningEvent",
        defaultMessage: "Declining event",
        description: "Active label for declining a Google Calendar event.",
      },
      respond_event_declinedCompleted: {
        id: "codex.mcpTool.googleCalendar.declinedEvent",
        defaultMessage: "Declined event",
        description: "Completed label for declining a Google Calendar event.",
      },
      respond_event_tentativeActive: {
        id: "codex.mcpTool.googleCalendar.markingEventTentative",
        defaultMessage: "Marking event tentative",
        description: "Active label for marking a Google Calendar event as tentative.",
      },
      respond_event_tentativeCompleted: {
        id: "codex.mcpTool.googleCalendar.markedEventTentative",
        defaultMessage: "Marked event tentative",
        description: "Completed label for marking a Google Calendar event as tentative.",
      },
    })
    var em = o("WaUs"),
      e_ = o("csnw")
    let eu = ["documents", "files", "items", "results"],
      ev = v
        .string()
        .trim()
        .min(5)
        .max(200)
        .regex(/^[a-zA-Z0-9_-]+$/)
        .optional()
        .catch(void 0),
      eg = v
        .string()
        .trim()
        .min(1)
        .max(500)
        .pipe(v.url({ protocol: /^https$/, hostname: /^(?:www\.)?(?:docs|drive)\.google\.com$/i }))
        .optional()
        .catch(void 0),
      eh = v
        .object({
          file_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
        })
        .strip()
        .optional()
        .catch(void 0),
      ef = v
        .object({
          anyone_at_company: v
            .boolean()
            .optional()
            .catch(void 0),
          document_id: ev,
          document_url: eg,
          email: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          fileId: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          file_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          file_uri: eh,
          filename: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          id: ev,
          name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          new_file_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          new_title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          permission: v
            .enum(["reader", "writer", "commenter", "owner"])
            .optional()
            .catch(void 0),
          presentation_id: ev,
          presentation_url: eg,
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          range: v
            .string()
            .trim()
            .min(1)
            .max(100)
            .optional()
            .catch(void 0),
          ranges: v
            .array(v.string().trim().min(1).max(100))
            .min(1)
            .max(100)
            .optional()
            .catch(void 0),
          source_file: eh,
          source_sheet_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          spreadsheet_id: ev,
          spreadsheet_url: eg,
          template_presentation_id: ev,
          template_presentation_url: eg,
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          top_k: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          url: eg,
          user_email: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
        })
        .strip(),
      eC = {
        create_file: (0, A.PM)({
          getItemName: ({ title: e }) => e,
          getMessages: () => (0, A.vP)(eP, "create_file", "WithContext"),
          maxPreviewLength: 40,
          approval: (e) =>
            eM(e, { fallback: eP.create_file_approval, withItemName: eP.create_file_approvalWithContext }),
        }),
        copy_file: (0, A.PM)({
          getItemName: ({ new_title: e }) => e,
          getMessages: () => (0, A.vP)(eP, "copy_file", "WithContext"),
          maxPreviewLength: 40,
          approval: function (e) {
            let t = (0, A.kF)({ maxLength: 40, value: e?.new_title }),
              o = ew(e)
            return null == t || null == o
              ? { descriptor: eP.copy_file_approval }
              : { descriptor: eP.copy_file_approvalWithContext, url: o, values: { itemName: t } }
          },
        }),
        create_folder: (0, A.PM)({
          getItemName: ({ name: e }) => e,
          getMessages: () => (0, A.vP)(eP, "create_folder", "WithContext"),
          maxPreviewLength: 40,
          approval: (e) =>
            eM(e, { fallback: eP.create_folder_approval, withItemName: eP.create_folder_approvalWithContext }),
        }),
        create_presentation_from_template: (0, A.PM)({
          getItemName: ({ title: e }) => e,
          getMessages: () => (0, A.vP)(eP, "create_presentation_from_template", "WithContext"),
          maxPreviewLength: 40,
          approval: function (e) {
            let t = (0, A.kF)({ maxLength: 40, value: e?.title }),
              o = e?.template_presentation_url
            return (null == o &&
              e?.template_presentation_id != null &&
              (o = `https://docs.google.com/presentation/d/${e.template_presentation_id}/edit`),
            null == t || null == o)
              ? { descriptor: eP.create_presentation_from_template_approval }
              : {
                  descriptor: eP.create_presentation_from_template_approvalWithContext,
                  url: o,
                  values: { itemName: t },
                }
          },
        }),
        delete_file: (0, A.Jw)(
          () => ({ active: eP.delete_file_active, completed: eP.delete_file_completed }),
          (e) => eA(e, { fallback: eP.delete_file_approval, withUrl: eP.delete_file_approvalWithContext }),
        ),
        duplicate_sheet_in_new_spreadsheet: (0, A.Jw)(
          () => ({
            active: eP.duplicate_sheet_in_new_spreadsheet_active,
            completed: eP.duplicate_sheet_in_new_spreadsheet_completed,
          }),
          function (e) {
            let t = (0, A.kF)({ maxLength: 40, value: e?.source_sheet_name }),
              o = (0, A.kF)({ maxLength: 40, value: e?.new_file_name })
            return null == t || null == o
              ? { descriptor: eP.duplicate_sheet_in_new_spreadsheet_approval }
              : {
                  descriptor: eP.duplicate_sheet_in_new_spreadsheet_approvalWithContext,
                  values: { sourceSheetName: t, newFileName: o },
                }
          },
        ),
        import_document: (0, A.Jw)(
          () => ({ active: eP.import_document_active, completed: eP.import_document_completed }),
          (e) => eM(e, { fallback: eP.import_document_approval, withItemName: eP.import_document_approvalWithContext }),
        ),
        import_presentation: (0, A.PM)({
          getItemName: ({ title: e }) => e,
          getMessages: () => (0, A.vP)(eP, "import_presentation", "WithContext"),
          maxPreviewLength: 40,
          approval: (e) =>
            eM(e, {
              fallback: eP.import_presentation_approval,
              withItemName: eP.import_presentation_approvalWithContext,
            }),
        }),
        import_spreadsheet: (0, A.Jw)(
          () => ({ active: eP.import_spreadsheet_active, completed: eP.import_spreadsheet_completed }),
          (e) =>
            eM(e, {
              fallback: eP.import_spreadsheet_approval,
              withItemName: eP.import_spreadsheet_approvalWithContext,
            }),
        ),
        list_folder: {
          active: ({ intl: e }) => e.formatMessage(eP.list_folder_active),
          completed: (e) => {
            if (!e.hasInvocationContext || e.toolArguments?.top_k == null)
              return e.intl.formatMessage(eP.list_folder_completed)
            let t = eT(e.toolResult)
            return null == t
              ? e.intl.formatMessage(eP.list_folder_completed)
              : e.intl.formatMessage(eP.list_folder_completedCount, { count: t })
          },
        },
        recent_documents: {
          active: ({ intl: e }) => e.formatMessage(eP.recent_documents_active),
          completed: (e) => {
            if (!e.hasInvocationContext || e.toolArguments?.top_k == null)
              return e.intl.formatMessage(eP.recent_documents_completed)
            let t = eT(e.toolResult)
            return null == t
              ? e.intl.formatMessage(eP.recent_documents_completed)
              : e.intl.formatMessage(eP.recent_documents_completedCount, { count: t })
          },
        },
        get_document: ex(() => ({
          active: eP.get_document_active,
          completed: eP.get_document_completed,
          completedWithContext: eP.get_document_completedWithContext,
        })),
        get_file_metadata: ex(() => ({
          active: eP.get_file_metadata_active,
          completed: eP.get_file_metadata_completed,
          completedWithContext: eP.get_file_metadata_completedWithContext,
        })),
        fetch: ex(() => ({
          active: eP.fetch_active,
          completed: eP.fetch_completed,
          completedWithContext: eP.fetch_completedWithContext,
        })),
        get_presentation: ex(() => ({
          active: eP.get_presentation_active,
          completed: eP.get_presentation_completed,
          completedWithContext: eP.get_presentation_completedWithContext,
        })),
        get_spreadsheet_cells: (0, A.lu)({
          getMessages: () => (0, A.vP)(eP, "get_spreadsheet_cells", "WithContext"),
          getValue: ({ ranges: e }) => e?.join(", "),
          maxPreviewLength: 40,
          valueName: "target",
        }),
        get_spreadsheet_metadata: ex(() => ({
          active: eP.get_spreadsheet_metadata_active,
          completed: eP.get_spreadsheet_metadata_completed,
          completedWithContext: eP.get_spreadsheet_metadata_completedWithContext,
        })),
        get_spreadsheet_range: (0, A.lu)({
          getMessages: () => (0, A.vP)(eP, "get_spreadsheet_range", "WithContext"),
          getValue: ({ range: e }) => e,
          maxPreviewLength: 40,
          valueName: "target",
        }),
        search: (0, A.lu)({
          getMessages: () => (0, A.vP)(eP, "search", "WithContext"),
          getValue: ({ query: e }) => e,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_spreadsheet_rows: (0, A.lu)({
          getMessages: () => (0, A.vP)(eP, "search_spreadsheet_rows", "WithContext"),
          getValue: ({ query: e }) => e,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        batch_update_document: (0, A.Jw)(
          () => ({ active: eP.batch_update_document_active, completed: eP.batch_update_document_completed }),
          (e) =>
            eA(e, {
              fallback: eP.batch_update_document_approval,
              withUrl: eP.batch_update_document_approvalWithContext,
            }),
        ),
        update_file: (0, A.Jw)(
          () => ({ active: eP.update_file_active, completed: eP.update_file_completed }),
          (e) => eA(e, { fallback: eP.update_file_approval, withUrl: eP.update_file_approvalWithContext }),
        ),
        share_file: (0, A.lu)({
          getMessages: () => (0, A.vP)(eP, "share_file", "WithRecipient"),
          getValue: ({ user_email: e }) => e,
          maxPreviewLength: 40,
          valueName: "recipientName",
          approval: function (e) {
            let t = ew(e),
              o = e?.permission
            if (null == e || null == t || null == o) return { descriptor: eP.share_file_approval }
            if (!0 === e.anyone_at_company)
              return { descriptor: eP.share_file_approvalWithCompanyAndPermission, url: t, values: { permission: o } }
            let a = (0, A.kF)({ maxLength: 40, value: e.user_email })
            return null == a
              ? { descriptor: eP.share_file_approval }
              : {
                  descriptor: eP.share_file_approvalWithRecipientAndPermission,
                  url: t,
                  values: { permission: o, recipientName: a },
                }
          },
        }),
        bulk_update_file_comments: (0, A.Jw)(
          () => ({ active: eP.bulk_update_file_comments_active, completed: eP.bulk_update_file_comments_completed }),
          (e) =>
            eA(e, {
              fallback: eP.bulk_update_file_comments_approval,
              withUrl: eP.bulk_update_file_comments_approvalWithContext,
            }),
        ),
        batch_update_presentation: (0, A.Jw)(
          () => ({ active: eP.batch_update_presentation_active, completed: eP.batch_update_presentation_completed }),
          (e) =>
            eA(e, {
              fallback: eP.batch_update_presentation_approval,
              withUrl: eP.batch_update_presentation_approvalWithContext,
            }),
        ),
        batch_update_spreadsheet: (0, A.Jw)(
          () => ({ active: eP.batch_update_spreadsheet_active, completed: eP.batch_update_spreadsheet_completed }),
          (e) =>
            eA(e, {
              fallback: eP.batch_update_spreadsheet_approval,
              withUrl: eP.batch_update_spreadsheet_approvalWithContext,
            }),
        ),
        upload_file: (0, A.Jw)(
          () => ({ active: eP.upload_file_active, completed: eP.upload_file_completed }),
          (e) => eM(e, { fallback: eP.upload_file_approval, withItemName: eP.upload_file_approvalWithContext }),
        ),
      },
      eb = (0, A.Ys)({ appRegistryKey: "google drive", getMessages: () => eP, toolArgumentsSchema: ef, tools: eC }),
      ey = (0, A.mg)({ toolArgumentsSchema: ef, tools: eC })
    function eM(e, { fallback: t, withItemName: o }) {
      let a = (0, A.kF)({
        maxLength: 40,
        value:
          e?.title ?? e?.name ?? e?.filename ?? e?.file_name ?? e?.source_file?.file_name ?? e?.file_uri?.file_name,
      })
      return null == a ? { descriptor: t } : { descriptor: o, values: { itemName: a } }
    }
    function eA(e, { fallback: t, withUrl: o }) {
      let a = ew(e)
      return null == a ? { descriptor: t } : { descriptor: o, url: a }
    }
    function ew(e) {
      let t = e?.url ?? e?.document_url ?? e?.presentation_url ?? e?.spreadsheet_url
      if (null != t) return t
      if (e?.document_id != null) return `https://docs.google.com/document/d/${e.document_id}/edit`
      if (e?.presentation_id != null) return `https://docs.google.com/presentation/d/${e.presentation_id}/edit`
      if (e?.spreadsheet_id != null) return `https://docs.google.com/spreadsheets/d/${e.spreadsheet_id}/edit`
      let o = e?.fileId ?? e?.id
      if (null != o) {
        let e = ev.parse(o)
        return null != e ? `https://drive.google.com/file/d/${e}` : eg.parse(o)
      }
    }
    function ex(e) {
      return {
        active: ({ intl: t }) => t.formatMessage(e().active),
        completed: ({ intl: t, toolResult: o }) => {
          let a = (0, A.kF)({ maxLength: 40, value: (0, em.m)((0, e_.O)(o))?.title ?? void 0 }),
            i = e()
          return null == a ? t.formatMessage(i.completed) : t.formatMessage(i.completedWithContext, { itemName: a })
        },
      }
    }
    function eT(e) {
      return (0, e_.o)({ preferredKeys: eu, toolResult: e })
    }
    let eP = (0, M.YK)({
        create_file_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.create_file.fallback",
          defaultMessage: "Allow Google Drive to create a file?",
          description: "Approval request for the Google Drive create_file MCP tool.",
        },
        create_file_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.create_file.context",
          defaultMessage: 'Allow Google Drive to create file "{itemName}"?',
          description: "Approval request for the Google Drive create_file MCP tool with a file name.",
        },
        create_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.create_file.active",
          defaultMessage: "Creating file",
          description: "Active without-context label for the Google Drive create_file MCP tool.",
        },
        create_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.create_file.completed",
          defaultMessage: "Created file",
          description: "Completed without-context label for the Google Drive create_file MCP tool.",
        },
        create_file_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.create_file.activeWithContext",
          defaultMessage: 'Creating file "{itemName}"',
          description: "Active label for the Google Drive create_file MCP tool with a file name.",
        },
        create_file_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.create_file.completedWithContext",
          defaultMessage: 'Created file "{itemName}"',
          description: "Completed label for the Google Drive create_file MCP tool with a file name.",
        },
        copy_file_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.copy_file.fallback",
          defaultMessage: "Allow Google Drive to copy file?",
          description: "Approval request for the Google Drive copy_file MCP tool.",
        },
        copy_file_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.copy_file.context",
          defaultMessage: 'Allow Google Drive to create a copy of <link>this file</link> called "{itemName}"?',
          description:
            "Approval request for the Google Drive copy_file MCP tool with a link to the source file and the new file name.",
        },
        copy_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.copy_file.active",
          defaultMessage: "Copying file",
          description: "Active without-context label for the Google Drive copy_file MCP tool.",
        },
        copy_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.copy_file.completed",
          defaultMessage: "Copied file",
          description: "Completed without-context label for the Google Drive copy_file MCP tool.",
        },
        copy_file_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.copy_file.activeWithContext",
          defaultMessage: 'Copying file "{itemName}"',
          description: "Active label for the Google Drive copy_file MCP tool with a file name.",
        },
        copy_file_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.copy_file.completedWithContext",
          defaultMessage: 'Copied file "{itemName}"',
          description: "Completed label for the Google Drive copy_file MCP tool with a file name.",
        },
        create_folder_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.create_folder.fallback",
          defaultMessage: "Allow Google Drive to create a folder?",
          description: "Approval request for the Google Drive create_folder MCP tool.",
        },
        create_folder_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.create_folder.context",
          defaultMessage: 'Allow Google Drive to create folder "{itemName}"?',
          description: "Approval request for the Google Drive create_folder MCP tool with a folder name.",
        },
        create_folder_active: {
          id: "localConversation.mcpToolActivity.googleDrive.create_folder.active",
          defaultMessage: "Creating folder",
          description: "Active without-context label for the Google Drive create_folder MCP tool.",
        },
        create_folder_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.create_folder.completed",
          defaultMessage: "Created folder",
          description: "Completed without-context label for the Google Drive create_folder MCP tool.",
        },
        create_folder_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.create_folder.activeWithContext",
          defaultMessage: 'Creating folder "{itemName}"',
          description: "Active label for the Google Drive create_folder MCP tool with a folder name.",
        },
        create_folder_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.create_folder.completedWithContext",
          defaultMessage: 'Created folder "{itemName}"',
          description: "Completed label for the Google Drive create_folder MCP tool with a folder name.",
        },
        create_presentation_from_template_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.create_presentation_from_template.fallback",
          defaultMessage: "Allow Google Drive to create a presentation?",
          description: "Approval request for the Google Drive create_presentation_from_template MCP tool.",
        },
        create_presentation_from_template_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.create_presentation_from_template.context",
          defaultMessage: 'Allow Google Drive to create presentation "{itemName}" from <link>this template</link>?',
          description:
            "Approval request for the Google Drive create_presentation_from_template MCP tool with a presentation name and a link to the template.",
        },
        create_presentation_from_template_active: {
          id: "localConversation.mcpToolActivity.googleDrive.create_presentation_from_template.active",
          defaultMessage: "Creating presentation",
          description: "Active without-context label for the Google Drive create_presentation_from_template MCP tool.",
        },
        create_presentation_from_template_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.create_presentation_from_template.completed",
          defaultMessage: "Created presentation",
          description:
            "Completed without-context label for the Google Drive create_presentation_from_template MCP tool.",
        },
        create_presentation_from_template_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.create_presentation_from_template.activeWithContext",
          defaultMessage: 'Creating presentation "{itemName}"',
          description:
            "Active label for the Google Drive create_presentation_from_template MCP tool with a presentation name.",
        },
        create_presentation_from_template_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.create_presentation_from_template.completedWithContext",
          defaultMessage: 'Created presentation "{itemName}"',
          description:
            "Completed label for the Google Drive create_presentation_from_template MCP tool with a presentation name.",
        },
        delete_file_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.delete_file.fallback",
          defaultMessage: "Allow Google Drive to delete a file?",
          description: "Approval request for the Google Drive delete_file MCP tool.",
        },
        delete_file_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.delete_file.context",
          defaultMessage: "Allow Google Drive to delete <link>this file</link>?",
          description: "Approval request for the Google Drive delete_file MCP tool with a link to the file.",
        },
        delete_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.delete_file.active",
          defaultMessage: "Deleting file",
          description: "Active label for the Google Drive delete_file MCP tool.",
        },
        delete_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.delete_file.completed",
          defaultMessage: "Deleted file",
          description: "Completed label for the Google Drive delete_file MCP tool.",
        },
        download_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.download_file.active",
          defaultMessage: "Downloading file",
          description: "Active label for the Google Drive download_file MCP tool.",
        },
        download_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.download_file.completed",
          defaultMessage: "Downloaded file",
          description: "Completed label for the Google Drive download_file MCP tool.",
        },
        duplicate_sheet_in_new_spreadsheet_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.duplicate_sheet_in_new_spreadsheet.fallback",
          defaultMessage: "Allow Google Drive to duplicate sheet?",
          description: "Approval request for the Google Drive duplicate_sheet_in_new_spreadsheet MCP tool.",
        },
        duplicate_sheet_in_new_spreadsheet_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.duplicate_sheet_in_new_spreadsheet.context",
          defaultMessage:
            'Allow Google Drive to duplicate sheet "{sourceSheetName}" into new spreadsheet "{newFileName}"?',
          description:
            "Approval request for the Google Drive duplicate_sheet_in_new_spreadsheet MCP tool with the source sheet and destination spreadsheet names.",
        },
        duplicate_sheet_in_new_spreadsheet_active: {
          id: "localConversation.mcpToolActivity.googleDrive.duplicate_sheet_in_new_spreadsheet.active",
          defaultMessage: "Duplicating sheet",
          description: "Active label for the Google Drive duplicate_sheet_in_new_spreadsheet MCP tool.",
        },
        duplicate_sheet_in_new_spreadsheet_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.duplicate_sheet_in_new_spreadsheet.completed",
          defaultMessage: "Duplicated sheet",
          description: "Completed label for the Google Drive duplicate_sheet_in_new_spreadsheet MCP tool.",
        },
        export_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.export_file.active",
          defaultMessage: "Exporting file",
          description: "Active label for the Google Drive export_file MCP tool.",
        },
        export_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.export_file.completed",
          defaultMessage: "Exported file",
          description: "Completed label for the Google Drive export_file MCP tool.",
        },
        import_document_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.import_document.fallback",
          defaultMessage: "Allow Google Drive to import document?",
          description: "Approval request for the Google Drive import_document MCP tool.",
        },
        import_document_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.import_document.context",
          defaultMessage: 'Allow Google Drive to import document "{itemName}"?',
          description: "Approval request for the Google Drive import_document MCP tool with a document name.",
        },
        import_document_active: {
          id: "localConversation.mcpToolActivity.googleDrive.import_document.active",
          defaultMessage: "Importing document",
          description: "Active label for the Google Drive import_document MCP tool.",
        },
        import_document_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.import_document.completed",
          defaultMessage: "Imported document",
          description: "Completed label for the Google Drive import_document MCP tool.",
        },
        import_presentation_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.import_presentation.fallback",
          defaultMessage: "Allow Google Drive to import presentation?",
          description: "Approval request for the Google Drive import_presentation MCP tool.",
        },
        import_presentation_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.import_presentation.context",
          defaultMessage: 'Allow Google Drive to import presentation "{itemName}"?',
          description: "Approval request for the Google Drive import_presentation MCP tool with a presentation name.",
        },
        import_presentation_active: {
          id: "localConversation.mcpToolActivity.googleDrive.import_presentation.active",
          defaultMessage: "Importing presentation",
          description: "Active without-context label for the Google Drive import_presentation MCP tool.",
        },
        import_presentation_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.import_presentation.completed",
          defaultMessage: "Imported presentation",
          description: "Completed without-context label for the Google Drive import_presentation MCP tool.",
        },
        import_presentation_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.import_presentation.activeWithContext",
          defaultMessage: 'Importing presentation "{itemName}"',
          description: "Active label for the Google Drive import_presentation MCP tool with a presentation name.",
        },
        import_presentation_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.import_presentation.completedWithContext",
          defaultMessage: 'Imported presentation "{itemName}"',
          description: "Completed label for the Google Drive import_presentation MCP tool with a presentation name.",
        },
        import_spreadsheet_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.import_spreadsheet.fallback",
          defaultMessage: "Allow Google Drive to import spreadsheet?",
          description: "Approval request for the Google Drive import_spreadsheet MCP tool.",
        },
        import_spreadsheet_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.import_spreadsheet.context",
          defaultMessage: 'Allow Google Drive to import spreadsheet "{itemName}"?',
          description: "Approval request for the Google Drive import_spreadsheet MCP tool with a spreadsheet name.",
        },
        import_spreadsheet_active: {
          id: "localConversation.mcpToolActivity.googleDrive.import_spreadsheet.active",
          defaultMessage: "Importing spreadsheet",
          description: "Active label for the Google Drive import_spreadsheet MCP tool.",
        },
        import_spreadsheet_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.import_spreadsheet.completed",
          defaultMessage: "Imported spreadsheet",
          description: "Completed label for the Google Drive import_spreadsheet MCP tool.",
        },
        list_drives_active: {
          id: "localConversation.mcpToolActivity.googleDrive.list_drives.active",
          defaultMessage: "Listing drives",
          description: "Active label for the Google Drive list_drives MCP tool.",
        },
        list_drives_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.list_drives.completed",
          defaultMessage: "Listed drives",
          description: "Completed label for the Google Drive list_drives MCP tool.",
        },
        list_file_revisions_active: {
          id: "localConversation.mcpToolActivity.googleDrive.list_file_revisions.active",
          defaultMessage: "Listing file revisions",
          description: "Active label for the Google Drive list_file_revisions MCP tool.",
        },
        list_file_revisions_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.list_file_revisions.completed",
          defaultMessage: "Listed file revisions",
          description: "Completed label for the Google Drive list_file_revisions MCP tool.",
        },
        list_folder_active: {
          id: "localConversation.mcpToolActivity.googleDrive.list_folder.active",
          defaultMessage: "Listing folder",
          description: "Active without-context label for the Google Drive list_folder MCP tool.",
        },
        list_folder_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.list_folder.completed",
          defaultMessage: "Listed folder",
          description: "Completed without-context label for the Google Drive list_folder MCP tool.",
        },
        list_folder_completedCount: {
          id: "codex.mcpTool.googleDrive.listedFolderItemsCount",
          defaultMessage: "Listed {count, plural, one {a folder item} other {{count, number} folder items}}",
          description: "Completed Google Drive folder listing label when an exact count is known.",
        },
        recent_documents_active: {
          id: "localConversation.mcpToolActivity.googleDrive.recent_documents.active",
          defaultMessage: "Getting recent documents",
          description: "Active label for the Google Drive recent_documents MCP tool.",
        },
        recent_documents_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.recent_documents.completed",
          defaultMessage: "Got recent documents",
          description: "Completed without-count label for the Google Drive recent_documents MCP tool.",
        },
        recent_documents_completedCount: {
          id: "codex.mcpTool.googleDrive.gotRecentDocumentsCount",
          defaultMessage: "Got {count, plural, one {a recent document} other {{count, number} recent documents}}",
          description: "Completed Google Drive recent documents label when an exact count is known.",
        },
        get_document_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document.active",
          defaultMessage: "Getting document",
          description: "Active without-context label for the Google Drive get_document MCP tool.",
        },
        get_document_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document.completed",
          defaultMessage: "Got document",
          description: "Completed without-context label for the Google Drive get_document MCP tool.",
        },
        get_document_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document.completedWithContext",
          defaultMessage: 'Got document "{itemName}"',
          description: "Completed label for the Google Drive get_document MCP tool with a document name.",
        },
        get_document_comments_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_comments.active",
          defaultMessage: "Getting document comments",
          description: "Active label for the Google Drive get_document_comments MCP tool.",
        },
        get_document_comments_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_comments.completed",
          defaultMessage: "Got document comments",
          description: "Completed label for the Google Drive get_document_comments MCP tool.",
        },
        get_document_tables_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_tables.active",
          defaultMessage: "Getting document tables",
          description: "Active label for the Google Drive get_document_tables MCP tool.",
        },
        get_document_tables_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_tables.completed",
          defaultMessage: "Got document tables",
          description: "Completed label for the Google Drive get_document_tables MCP tool.",
        },
        get_document_text_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_text.active",
          defaultMessage: "Getting document text",
          description: "Active label for the Google Drive get_document_text MCP tool.",
        },
        get_document_text_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_text.completed",
          defaultMessage: "Got document text",
          description: "Completed label for the Google Drive get_document_text MCP tool.",
        },
        get_file_comments_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_file_comments.active",
          defaultMessage: "Getting file comments",
          description: "Active label for the Google Drive get_file_comments MCP tool.",
        },
        get_file_comments_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_file_comments.completed",
          defaultMessage: "Got file comments",
          description: "Completed label for the Google Drive get_file_comments MCP tool.",
        },
        get_file_metadata_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_file_metadata.active",
          defaultMessage: "Getting file metadata",
          description: "Active without-context label for the Google Drive get_file_metadata MCP tool.",
        },
        get_file_metadata_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_file_metadata.completed",
          defaultMessage: "Got file metadata",
          description: "Completed without-context label for the Google Drive get_file_metadata MCP tool.",
        },
        get_file_metadata_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_file_metadata.completedWithContext",
          defaultMessage: 'Got file metadata "{itemName}"',
          description: "Completed label for the Google Drive get_file_metadata MCP tool with a file name.",
        },
        fetch_file_revision_active: {
          id: "localConversation.mcpToolActivity.googleDrive.fetch_file_revision.active",
          defaultMessage: "Fetching file revision",
          description: "Active label for the Google Drive fetch_file_revision MCP tool.",
        },
        fetch_file_revision_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.fetch_file_revision.completed",
          defaultMessage: "Fetched file revision",
          description: "Completed label for the Google Drive fetch_file_revision MCP tool.",
        },
        oai_admin_fetch_active: {
          id: "localConversation.mcpToolActivity.googleDrive.oai_admin_fetch.active",
          defaultMessage: "Fetching Drive content",
          description: "Active label for the Google Drive oai_admin_fetch MCP tool.",
        },
        oai_admin_fetch_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.oai_admin_fetch.completed",
          defaultMessage: "Fetched Drive content",
          description: "Completed label for the Google Drive oai_admin_fetch MCP tool.",
        },
        fetch_active: {
          id: "localConversation.mcpToolActivity.googleDrive.fetch.active",
          defaultMessage: "Fetching file",
          description: "Active without-context label for the Google Drive fetch MCP tool.",
        },
        fetch_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.fetch.completed",
          defaultMessage: "Fetched file",
          description: "Completed without-context label for the Google Drive fetch MCP tool.",
        },
        fetch_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.fetch.completedWithContext",
          defaultMessage: 'Fetched file "{itemName}"',
          description: "Completed label for the Google Drive fetch MCP tool with a file name.",
        },
        get_presentation_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation.active",
          defaultMessage: "Getting presentation",
          description: "Active without-context label for the Google Drive get_presentation MCP tool.",
        },
        get_presentation_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation.completed",
          defaultMessage: "Got presentation",
          description: "Completed without-context label for the Google Drive get_presentation MCP tool.",
        },
        get_presentation_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation.completedWithContext",
          defaultMessage: 'Got presentation "{itemName}"',
          description: "Completed label for the Google Drive get_presentation MCP tool with a presentation name.",
        },
        get_presentation_comments_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_comments.active",
          defaultMessage: "Getting presentation comments",
          description: "Active label for the Google Drive get_presentation_comments MCP tool.",
        },
        get_presentation_comments_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_comments.completed",
          defaultMessage: "Got presentation comments",
          description: "Completed label for the Google Drive get_presentation_comments MCP tool.",
        },
        get_presentation_outline_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_outline.active",
          defaultMessage: "Getting presentation outline",
          description: "Active label for the Google Drive get_presentation_outline MCP tool.",
        },
        get_presentation_outline_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_outline.completed",
          defaultMessage: "Got presentation outline",
          description: "Completed label for the Google Drive get_presentation_outline MCP tool.",
        },
        get_presentation_tables_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_tables.active",
          defaultMessage: "Getting presentation tables",
          description: "Active label for the Google Drive get_presentation_tables MCP tool.",
        },
        get_presentation_tables_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_tables.completed",
          defaultMessage: "Got presentation tables",
          description: "Completed label for the Google Drive get_presentation_tables MCP tool.",
        },
        get_presentation_text_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_text.active",
          defaultMessage: "Getting presentation text",
          description: "Active label for the Google Drive get_presentation_text MCP tool.",
        },
        get_presentation_text_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_presentation_text.completed",
          defaultMessage: "Got presentation text",
          description: "Completed label for the Google Drive get_presentation_text MCP tool.",
        },
        get_profile_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_profile.active",
          defaultMessage: "Getting profile",
          description: "Active label for the Google Drive get_profile MCP tool.",
        },
        get_profile_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_profile.completed",
          defaultMessage: "Got profile",
          description: "Completed label for the Google Drive get_profile MCP tool.",
        },
        get_slide_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_slide.active",
          defaultMessage: "Getting slide",
          description: "Active label for the Google Drive get_slide MCP tool.",
        },
        get_slide_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_slide.completed",
          defaultMessage: "Got slide",
          description: "Completed label for the Google Drive get_slide MCP tool.",
        },
        get_slide_thumbnail_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_slide_thumbnail.active",
          defaultMessage: "Getting slide thumbnail",
          description: "Active label for the Google Drive get_slide_thumbnail MCP tool.",
        },
        get_slide_thumbnail_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_slide_thumbnail.completed",
          defaultMessage: "Got slide thumbnail",
          description: "Completed label for the Google Drive get_slide_thumbnail MCP tool.",
        },
        get_spreadsheet_cells_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_cells.active",
          defaultMessage: "Getting spreadsheet cells",
          description: "Active without-context label for the Google Drive get_spreadsheet_cells MCP tool.",
        },
        get_spreadsheet_cells_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_cells.completed",
          defaultMessage: "Got spreadsheet cells",
          description: "Completed without-context label for the Google Drive get_spreadsheet_cells MCP tool.",
        },
        get_spreadsheet_cells_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_cells.activeWithContext",
          defaultMessage: 'Getting spreadsheet cells "{target}"',
          description: "Active label for the Google Drive get_spreadsheet_cells MCP tool with a cell range.",
        },
        get_spreadsheet_cells_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_cells.completedWithContext",
          defaultMessage: 'Got spreadsheet cells "{target}"',
          description: "Completed label for the Google Drive get_spreadsheet_cells MCP tool with a cell range.",
        },
        get_spreadsheet_comments_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_comments.active",
          defaultMessage: "Getting spreadsheet comments",
          description: "Active label for the Google Drive get_spreadsheet_comments MCP tool.",
        },
        get_spreadsheet_comments_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_comments.completed",
          defaultMessage: "Got spreadsheet comments",
          description: "Completed label for the Google Drive get_spreadsheet_comments MCP tool.",
        },
        get_spreadsheet_metadata_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_metadata.active",
          defaultMessage: "Getting spreadsheet metadata",
          description: "Active without-context label for the Google Drive get_spreadsheet_metadata MCP tool.",
        },
        get_spreadsheet_metadata_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_metadata.completed",
          defaultMessage: "Got spreadsheet metadata",
          description: "Completed without-context label for the Google Drive get_spreadsheet_metadata MCP tool.",
        },
        get_spreadsheet_metadata_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_metadata.completedWithContext",
          defaultMessage: 'Got spreadsheet metadata "{itemName}"',
          description:
            "Completed label for the Google Drive get_spreadsheet_metadata MCP tool with a spreadsheet name.",
        },
        get_spreadsheet_range_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_range.active",
          defaultMessage: "Getting spreadsheet range",
          description: "Active without-context label for the Google Drive get_spreadsheet_range MCP tool.",
        },
        get_spreadsheet_range_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_range.completed",
          defaultMessage: "Got spreadsheet range",
          description: "Completed without-context label for the Google Drive get_spreadsheet_range MCP tool.",
        },
        get_spreadsheet_range_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_range.activeWithContext",
          defaultMessage: 'Getting spreadsheet range "{target}"',
          description: "Active label for the Google Drive get_spreadsheet_range MCP tool with a cell range.",
        },
        get_spreadsheet_range_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.get_spreadsheet_range.completedWithContext",
          defaultMessage: 'Got spreadsheet range "{target}"',
          description: "Completed label for the Google Drive get_spreadsheet_range MCP tool with a cell range.",
        },
        get_document_paragraph_range_active: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_paragraph_range.active",
          defaultMessage: "Getting paragraph range",
          description: "Active label for the Google Drive get_document_paragraph_range MCP tool.",
        },
        get_document_paragraph_range_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.get_document_paragraph_range.completed",
          defaultMessage: "Got paragraph range",
          description: "Completed label for the Google Drive get_document_paragraph_range MCP tool.",
        },
        find_document_text_range_active: {
          id: "localConversation.mcpToolActivity.googleDrive.find_document_text_range.active",
          defaultMessage: "Finding text",
          description: "Active label for the Google Drive find_document_text_range MCP tool.",
        },
        find_document_text_range_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.find_document_text_range.completed",
          defaultMessage: "Found text",
          description: "Completed label for the Google Drive find_document_text_range MCP tool.",
        },
        oai_admin_search_active: {
          id: "localConversation.mcpToolActivity.googleDrive.oai_admin_search.active",
          defaultMessage: "Searching Google Drive",
          description: "Active label for the Google Drive oai_admin_search MCP tool.",
        },
        oai_admin_search_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.oai_admin_search.completed",
          defaultMessage: "Searched Google Drive",
          description: "Completed label for the Google Drive oai_admin_search MCP tool.",
        },
        search_active: {
          id: "localConversation.mcpToolActivity.googleDrive.search.active",
          defaultMessage: "Searching Drive",
          description: "Active without-context label for the Google Drive search MCP tool.",
        },
        search_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.search.completed",
          defaultMessage: "Searched Drive",
          description: "Completed without-context label for the Google Drive search MCP tool.",
        },
        search_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.search.activeWithContext",
          defaultMessage: 'Searching Drive "{query}"',
          description: "Active label for the Google Drive search MCP tool with a query.",
        },
        search_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.search.completedWithContext",
          defaultMessage: 'Searched Drive "{query}"',
          description: "Completed label for the Google Drive search MCP tool with a query.",
        },
        search_spreadsheet_rows_active: {
          id: "localConversation.mcpToolActivity.googleDrive.search_spreadsheet_rows.active",
          defaultMessage: "Searching spreadsheet rows",
          description: "Active without-context label for the Google Drive search_spreadsheet_rows MCP tool.",
        },
        search_spreadsheet_rows_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.search_spreadsheet_rows.completed",
          defaultMessage: "Searched spreadsheet rows",
          description: "Completed without-context label for the Google Drive search_spreadsheet_rows MCP tool.",
        },
        search_spreadsheet_rows_activeWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.search_spreadsheet_rows.activeWithContext",
          defaultMessage: 'Searching spreadsheet rows "{query}"',
          description: "Active label for the Google Drive search_spreadsheet_rows MCP tool with a query.",
        },
        search_spreadsheet_rows_completedWithContext: {
          id: "localConversation.mcpToolActivity.googleDrive.search_spreadsheet_rows.completedWithContext",
          defaultMessage: 'Searched spreadsheet rows "{query}"',
          description: "Completed label for the Google Drive search_spreadsheet_rows MCP tool with a query.",
        },
        batch_update_document_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.batch_update_document.fallback",
          defaultMessage: "Allow Google Drive to update document?",
          description: "Approval request for the Google Drive batch_update_document MCP tool.",
        },
        batch_update_document_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.batch_update_document.context",
          defaultMessage: "Allow Google Drive to update <link>this document</link>?",
          description:
            "Approval request for the Google Drive batch_update_document MCP tool with a link to the document.",
        },
        batch_update_document_active: {
          id: "localConversation.mcpToolActivity.googleDrive.batch_update_document.active",
          defaultMessage: "Updating document",
          description: "Active label for the Google Drive batch_update_document MCP tool.",
        },
        batch_update_document_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.batch_update_document.completed",
          defaultMessage: "Updated document",
          description: "Completed label for the Google Drive batch_update_document MCP tool.",
        },
        update_file_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.update_file.fallback",
          defaultMessage: "Allow Google Drive to update file?",
          description: "Approval request for the Google Drive update_file MCP tool.",
        },
        update_file_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.update_file.context",
          defaultMessage: "Allow Google Drive to update <link>this file</link>?",
          description: "Approval request for the Google Drive update_file MCP tool with a link to the file.",
        },
        update_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.update_file.active",
          defaultMessage: "Updating file",
          description: "Active label for the Google Drive update_file MCP tool.",
        },
        update_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.update_file.completed",
          defaultMessage: "Updated file",
          description: "Completed label for the Google Drive update_file MCP tool.",
        },
        share_file_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.share_file.fallback",
          defaultMessage: "Allow Google Drive to share file?",
          description: "Approval request for the Google Drive share_file MCP tool.",
        },
        share_file_approvalWithRecipientAndPermission: {
          id: "localConversation.mcpToolApproval.googleDrive.share_file.recipientAndPermission",
          defaultMessage:
            'Allow Google Drive to share <link>this file</link> with {recipientName} with "{permission}" permissions?',
          description:
            "Approval request for the Google Drive share_file MCP tool with a file link, recipient, and permission.",
        },
        share_file_approvalWithCompanyAndPermission: {
          id: "localConversation.mcpToolApproval.googleDrive.share_file.companyAndPermission",
          defaultMessage:
            'Allow Google Drive to share <link>this file</link> with everyone at your company with "{permission}" permissions?',
          description:
            "Approval request for sharing a Google Drive file with everyone at the company, including a file link and permission.",
        },
        share_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.share_file.active",
          defaultMessage: "Sharing file",
          description: "Active without-context label for the Google Drive share_file MCP tool.",
        },
        share_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.share_file.completed",
          defaultMessage: "Shared file",
          description: "Completed without-context label for the Google Drive share_file MCP tool.",
        },
        share_file_activeWithRecipient: {
          id: "localConversation.mcpToolActivity.googleDrive.share_file.activeWithRecipient",
          defaultMessage: "Sharing file with {recipientName}",
          description: "Active label for the Google Drive share_file MCP tool with a recipient.",
        },
        share_file_completedWithRecipient: {
          id: "localConversation.mcpToolActivity.googleDrive.share_file.completedWithRecipient",
          defaultMessage: "Shared file with {recipientName}",
          description: "Completed label for the Google Drive share_file MCP tool with a recipient.",
        },
        bulk_update_file_comments_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.bulk_update_file_comments.fallback",
          defaultMessage: "Allow Google Drive to update file comments?",
          description: "Approval request for the Google Drive bulk_update_file_comments MCP tool.",
        },
        bulk_update_file_comments_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.bulk_update_file_comments.context",
          defaultMessage: "Allow Google Drive to update comments on <link>this file</link>?",
          description:
            "Approval request for the Google Drive bulk_update_file_comments MCP tool with a link to the file.",
        },
        bulk_update_file_comments_active: {
          id: "localConversation.mcpToolActivity.googleDrive.bulk_update_file_comments.active",
          defaultMessage: "Updating file comments",
          description: "Active label for the Google Drive bulk_update_file_comments MCP tool.",
        },
        bulk_update_file_comments_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.bulk_update_file_comments.completed",
          defaultMessage: "Updated file comments",
          description: "Completed label for the Google Drive bulk_update_file_comments MCP tool.",
        },
        batch_update_presentation_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.batch_update_presentation.fallback",
          defaultMessage: "Allow Google Drive to update presentation?",
          description: "Approval request for the Google Drive batch_update_presentation MCP tool.",
        },
        batch_update_presentation_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.batch_update_presentation.context",
          defaultMessage: "Allow Google Drive to update <link>this presentation</link>?",
          description:
            "Approval request for the Google Drive batch_update_presentation MCP tool with a link to the presentation.",
        },
        batch_update_presentation_active: {
          id: "localConversation.mcpToolActivity.googleDrive.batch_update_presentation.active",
          defaultMessage: "Updating presentation",
          description: "Active label for the Google Drive batch_update_presentation MCP tool.",
        },
        batch_update_presentation_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.batch_update_presentation.completed",
          defaultMessage: "Updated presentation",
          description: "Completed label for the Google Drive batch_update_presentation MCP tool.",
        },
        batch_update_spreadsheet_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.batch_update_spreadsheet.fallback",
          defaultMessage: "Allow Google Drive to update spreadsheet?",
          description: "Approval request for the Google Drive batch_update_spreadsheet MCP tool.",
        },
        batch_update_spreadsheet_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.batch_update_spreadsheet.context",
          defaultMessage: "Allow Google Drive to update <link>this spreadsheet</link>?",
          description:
            "Approval request for the Google Drive batch_update_spreadsheet MCP tool with a link to the spreadsheet.",
        },
        batch_update_spreadsheet_active: {
          id: "localConversation.mcpToolActivity.googleDrive.batch_update_spreadsheet.active",
          defaultMessage: "Updating spreadsheet",
          description: "Active label for the Google Drive batch_update_spreadsheet MCP tool.",
        },
        batch_update_spreadsheet_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.batch_update_spreadsheet.completed",
          defaultMessage: "Updated spreadsheet",
          description: "Completed label for the Google Drive batch_update_spreadsheet MCP tool.",
        },
        upload_file_approval: {
          id: "localConversation.mcpToolApproval.googleDrive.upload_file.fallback",
          defaultMessage: "Allow Google Drive to upload file?",
          description: "Approval request for the Google Drive upload_file MCP tool.",
        },
        upload_file_approvalWithContext: {
          id: "localConversation.mcpToolApproval.googleDrive.upload_file.context",
          defaultMessage: 'Allow Google Drive to upload file "{itemName}"?',
          description: "Approval request for the Google Drive upload_file MCP tool with a file name.",
        },
        upload_file_active: {
          id: "localConversation.mcpToolActivity.googleDrive.upload_file.active",
          defaultMessage: "Uploading file",
          description: "Active label for the Google Drive upload_file MCP tool.",
        },
        upload_file_completed: {
          id: "localConversation.mcpToolActivity.googleDrive.upload_file.completed",
          defaultMessage: "Uploaded file",
          description: "Completed label for the Google Drive upload_file MCP tool.",
        },
      }),
      ek = v
        .object({
          assignee: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          customer: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          id: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          issue: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          issueId: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          issue_id: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          project: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          state: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          team: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          type: v
            .string()
            .trim()
            .min(1)
            .max(120)
            .optional()
            .catch(void 0),
        })
        .strip(),
      eW = (e = 1e4) =>
        v
          .string()
          .trim()
          .min(1)
          .max(e)
          .optional()
          .catch(void 0),
      eq = (e = 1e4) =>
        v
          .string()
          .trim()
          .min(1)
          .max(e)
          .nullable()
          .optional()
          .catch(void 0),
      eS = v
        .object({
          assignee: eq(120),
          body: eW(),
          customer: eW(120),
          filename: eW(500),
          id: eW(120),
          initiative: eW(200),
          name: eW(200),
          parentId: eW(120),
          project: eq(200),
          targetDate: eq(200),
          title: eW(200),
          type: eW(120),
        })
        .strip(),
      eG = {
        create_attachment: function (e) {
          let t = eL(e?.filename)
          return {
            descriptor: eH.create_attachment_approval,
            values: { filename: t ?? "", hasFilename: null == t ? "no" : "yes" },
          }
        },
        create_issue_label: function (e) {
          let t = eL(e?.name)
          return {
            descriptor: eH.create_issue_label_approval,
            values: { hasName: null == t ? "no" : "yes", name: t ?? "" },
          }
        },
        delete_attachment: () => ({ descriptor: eH.delete_attachment_approval }),
        delete_comment: () => ({ descriptor: eH.delete_comment_approval }),
        delete_customer: () => ({ descriptor: eH.delete_customer_approval }),
        delete_customer_need: () => ({ descriptor: eH.delete_customer_need_approval }),
        delete_status_update: function (e) {
          return { descriptor: eH.delete_status_update_approval, values: { type: e?.type ?? "unknown" } }
        },
        save_comment: function (e) {
          var t
          let o = eL(e?.body)
          return {
            descriptor: eH.save_comment_approval,
            values: {
              action: null == (t = e) ? "save" : null != t.id ? "update" : null == t.parentId ? "create" : "reply",
              body: o ?? "",
              hasBody: null == o ? "no" : "yes",
            },
          }
        },
        save_customer: function (e) {
          let t = eL(e?.name)
          return {
            descriptor: eH.save_customer_approval,
            values: { action: eR(e), hasName: null == t ? "no" : "yes", name: t ?? "" },
          }
        },
        save_customer_need: function (e) {
          let t = eL(e?.body),
            o = eL(e?.customer)
          return {
            descriptor: eH.save_customer_need_approval,
            values: {
              action: eR(e),
              body: t ?? "",
              customer: o ?? "",
              hasBody: null == t ? "no" : "yes",
              hasCustomer: null == o ? "no" : "yes",
            },
          }
        },
        save_initiative: function (e) {
          let t = eL(e?.name),
            o = eF(e?.targetDate)
          return {
            descriptor: eH.save_initiative_approval,
            values: {
              action: eR(e),
              hasName: null == t ? "no" : "yes",
              name: t ?? "",
              targetDate: o.value,
              targetDateChange: o.change,
            },
          }
        },
        save_issue: function (e) {
          let t = eL(e?.title),
            o = eN(e?.project),
            a = eN(e?.assignee)
          return {
            descriptor: eH.save_issue_approval,
            values: {
              action: eR(e),
              assignee: a.value,
              assigneeChange: a.change,
              hasTitle: null == t ? "no" : "yes",
              project: o.value,
              projectChange: o.change,
              title: t ?? "",
            },
          }
        },
        save_milestone: function (e) {
          let t = eL(e?.name),
            o = eL(e?.project),
            a = eF(e?.targetDate)
          return {
            descriptor: eH.save_milestone_approval,
            values: {
              action: eR(e),
              hasName: null == t ? "no" : "yes",
              hasProject: null == o ? "no" : "yes",
              name: t ?? "",
              project: o ?? "",
              targetDate: a.value,
              targetDateChange: a.change,
            },
          }
        },
        save_project: function (e) {
          let t = eL(e?.name),
            o = eF(e?.targetDate)
          return {
            descriptor: eH.save_project_approval,
            values: {
              action: eR(e),
              hasName: null == t ? "no" : "yes",
              name: t ?? "",
              targetDate: o.value,
              targetDateChange: o.change,
            },
          }
        },
        save_status_update: function (e) {
          let t = eL(e?.body),
            o = eL(e?.type === "initiative" ? e.initiative : e?.project)
          return {
            descriptor: eH.save_status_update_approval,
            values: {
              action: eR(e),
              body: t ?? "",
              hasBody: null == t ? "no" : "yes",
              hasTarget: null == o ? "no" : "yes",
              target: o ?? "",
              type: e?.type ?? "unknown",
            },
          }
        },
      },
      ej = {
        create_issue_label: (0, A.PM)({
          getItemName: (e) => eV(e.name),
          getMessages: () => (0, A.vP)(eH, "create_issue_label", "WithName"),
          maxPreviewLength: 40,
        }),
        get_document: (0, A.lu)({
          getMessages: () => (0, A.vP)(eH, "get_document", "WithIdentifier"),
          getValue: (e) => eI(e.id),
          maxPreviewLength: 40,
          valueName: "identifier",
        }),
        get_initiative: (0, A.PM)({
          getItemName: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "get_initiative", "WithName"),
          maxPreviewLength: 40,
        }),
        get_issue: (0, A.lu)({
          getValue: (e) => eI(e.issueId ?? e.issue_id ?? e.id),
          getMessages: () => (0, A.vP)(eH, "get_issue", "WithVariant1"),
          maxPreviewLength: 120,
          valueName: "identifier",
        }),
        get_milestone: (0, A.PM)({
          getItemName: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "get_milestone", "WithName"),
          maxPreviewLength: 40,
        }),
        get_project: (0, A.PM)({
          getItemName: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "get_project", "WithVariant1"),
          maxPreviewLength: 40,
        }),
        get_team: (0, A.PM)({
          getItemName: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "get_team", "WithName"),
          maxPreviewLength: 40,
        }),
        get_user: (0, A.PM)({
          getItemName: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "get_user", "WithName"),
          maxPreviewLength: 40,
        }),
        list_issues:
          ((s = (e, t) => {
            let o = e.toolArguments
            if (!e.hasInvocationContext || null == o) return e.intl.formatMessage(eH[`list_issues_${t}`])
            let a = eV(o.query)
            if (null != a) return e.intl.formatMessage(eH[`list_issues_${t}WithVariant1`], { query: a })
            let i = eV(o.project)
            if (null != i) return e.intl.formatMessage(eH[`list_issues_${t}WithVariant2`], { target: i })
            let l = eV(o.team)
            if (null != l) return e.intl.formatMessage(eH[`list_issues_${t}WithVariant3`], { target: l })
            let s = eV(o.assignee) ?? eV(o.state)
            return null == s
              ? e.intl.formatMessage(eH[`list_issues_${t}`])
              : e.intl.formatMessage(eH[`list_issues_${t}WithVariant4`], { target: s })
          }),
          { active: (e) => s(e, "active"), completed: (e) => s(e, "completed") }),
        list_milestones: (0, A.lu)({
          getValue: (e) => eV(e.project),
          getMessages: () => (0, A.vP)(eH, "list_milestones", "WithVariant1"),
          maxPreviewLength: 40,
          valueName: "target",
        }),
        research: (0, A.lu)({
          getValue: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "research", "WithVariant1"),
          maxPreviewLength: 40,
          valueName: "query",
        }),
        save_comment: (0, A.lu)({
          getValue: (e) => eI(e.issueId),
          getMessages: () => (0, A.vP)(eH, "save_comment", "WithVariant1"),
          maxPreviewLength: 120,
          valueName: "identifier",
        }),
        save_customer: (0, A.PM)({
          getItemName: (e) => eV(e.name),
          getMessages: () => (0, A.vP)(eH, "save_customer", "WithVariant1"),
          maxPreviewLength: 40,
        }),
        save_customer_need:
          ((c = (e, t) => {
            let o = e.toolArguments
            if (!e.hasInvocationContext || null == o) return e.intl.formatMessage(eH[`save_customer_need_${t}`])
            let a = eI(o.issue)
            if (null != a) return e.intl.formatMessage(eH[`save_customer_need_${t}WithVariant1`], { identifier: a })
            let i = eV(o.customer) ?? eV(o.project)
            return null == i
              ? e.intl.formatMessage(eH[`save_customer_need_${t}`])
              : e.intl.formatMessage(eH[`save_customer_need_${t}WithVariant2`], { itemName: i })
          }),
          { active: (e) => c(e, "active"), completed: (e) => c(e, "completed") }),
        save_initiative: (0, A.PM)({
          getItemName: (e) => eV(e.name),
          getMessages: () => (0, A.vP)(eH, "save_initiative", "WithVariant1"),
          maxPreviewLength: 40,
        }),
        save_issue:
          ((n = (e, t) => {
            let o = e.toolArguments
            if (!e.hasInvocationContext || null == o) return e.intl.formatMessage(eH[`save_issue_${t}`])
            let a = eV(o.title)
            if (null != a) return e.intl.formatMessage(eH[`save_issue_${t}WithVariant1`], { itemName: a })
            let i = eI(o.id)
            if (null != i) return e.intl.formatMessage(eH[`save_issue_${t}WithVariant2`], { identifier: i })
            let l = eV(o.project) ?? eV(o.team)
            return null == l
              ? e.intl.formatMessage(eH[`save_issue_${t}`])
              : e.intl.formatMessage(eH[`save_issue_${t}WithVariant3`], { target: l })
          }),
          { active: (e) => n(e, "active"), completed: (e) => n(e, "completed") }),
        save_milestone:
          ((r = (e, t) => {
            let o = e.toolArguments
            if (!e.hasInvocationContext || null == o) return e.intl.formatMessage(eH[`save_milestone_${t}`])
            let a = eV(o.name)
            if (null != a) return e.intl.formatMessage(eH[`save_milestone_${t}WithVariant1`], { itemName: a })
            let i = eV(o.project)
            return null == i
              ? e.intl.formatMessage(eH[`save_milestone_${t}`])
              : e.intl.formatMessage(eH[`save_milestone_${t}WithVariant2`], { target: i })
          }),
          { active: (e) => r(e, "active"), completed: (e) => r(e, "completed") }),
        save_project: (0, A.PM)({
          getItemName: (e) => eV(e.name),
          getMessages: () => (0, A.vP)(eH, "save_project", "WithVariant1"),
          maxPreviewLength: 40,
        }),
        search:
          ((d = (e, t) => {
            let o = e.toolArguments
            if (!e.hasInvocationContext || null == o) return e.intl.formatMessage(eH[`search_${t}`])
            let a = eV(o.query)
            if (null == a) return e.intl.formatMessage(eH[`search_${t}`])
            let i = eV(o.type)
            return null == i
              ? e.intl.formatMessage(eH[`search_${t}WithVariant2`], { query: a })
              : e.intl.formatMessage(eH[`search_${t}WithVariant1`], { query: a, target: i })
          }),
          { active: (e) => d(e, "active"), completed: (e) => d(e, "completed") }),
        search_documentation: (0, A.lu)({
          getValue: (e) => eV(e.query),
          getMessages: () => (0, A.vP)(eH, "search_documentation", "WithVariant1"),
          maxPreviewLength: 40,
          valueName: "query",
        }),
      },
      eD = (0, A.Ys)({ appRegistryKey: "linear", getMessages: () => eH, toolArgumentsSchema: ek, tools: ej })
    function eR(e) {
      return null == e ? "save" : null == e.id ? "create" : "update"
    }
    function eN(e) {
      switch (e) {
        case null:
          return { change: "clear", value: "" }
        case void 0:
          return { change: "unchanged", value: "" }
        default: {
          let t = eL(e)
          return null == t ? { change: "unchanged", value: "" } : { change: "set", value: t }
        }
      }
    }
    function eF(e) {
      switch (e) {
        case null:
          return { change: "clear", value: 0 }
        case void 0:
          return { change: "unchanged", value: 0 }
        default: {
          let t = Date.parse(/^\d{4}-\d{2}-\d{2}$/.test(e) ? `${e}T00:00:00` : e)
          return Number.isFinite(t) ? { change: "set", value: t } : { change: "unchanged", value: 0 }
        }
      }
    }
    function eL(e) {
      let t = (0, A.kF)({ maxLength: 80, value: e ?? void 0 })
      return null != t && eU(t) ? t : void 0
    }
    function eV(e) {
      let t = (0, A.kF)({ maxLength: 40, value: e })
      return null != t && eU(t) ? t : void 0
    }
    function eI(e) {
      return null != e && eU(e) ? e : void 0
    }
    function eU(e) {
      return !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)
    }
    let eH = (0, M.YK)({
        create_attachment_active: {
          id: "localConversation.mcpToolActivity.linear.create_attachment.active",
          defaultMessage: "Creating attachment",
          description: "Active label for the linear create_attachment MCP tool.",
        },
        create_attachment_completed: {
          id: "localConversation.mcpToolActivity.linear.create_attachment.completed",
          defaultMessage: "Created attachment",
          description: "Completed label for the linear create_attachment MCP tool.",
        },
        create_document_active: {
          id: "localConversation.mcpToolActivity.linear.create_document.active",
          defaultMessage: "Creating document",
          description: "Active label for the linear create_document MCP tool.",
        },
        create_document_completed: {
          id: "localConversation.mcpToolActivity.linear.create_document.completed",
          defaultMessage: "Created document",
          description: "Completed label for the linear create_document MCP tool.",
        },
        create_issue_label_active: {
          id: "localConversation.mcpToolActivity.linear.create_issue_label.active",
          defaultMessage: "Creating issue label",
          description: "Active label for the linear create_issue_label MCP tool.",
        },
        create_issue_label_activeWithName: {
          id: "localConversation.mcpToolActivity.linear.create_issue_label.activeWithName",
          defaultMessage: 'Creating issue label "{itemName}"',
          description: "Active label for the linear create_issue_label MCP tool with its label name.",
        },
        create_issue_label_completed: {
          id: "localConversation.mcpToolActivity.linear.create_issue_label.completed",
          defaultMessage: "Created issue label",
          description: "Completed label for the linear create_issue_label MCP tool.",
        },
        create_issue_label_completedWithName: {
          id: "localConversation.mcpToolActivity.linear.create_issue_label.completedWithName",
          defaultMessage: 'Created issue label "{itemName}"',
          description: "Completed label for the linear create_issue_label MCP tool with its label name.",
        },
        delete_attachment_active: {
          id: "localConversation.mcpToolActivity.linear.delete_attachment.active",
          defaultMessage: "Deleting attachment",
          description: "Active label for the linear delete_attachment MCP tool.",
        },
        delete_attachment_completed: {
          id: "localConversation.mcpToolActivity.linear.delete_attachment.completed",
          defaultMessage: "Deleted attachment",
          description: "Completed label for the linear delete_attachment MCP tool.",
        },
        delete_comment_active: {
          id: "localConversation.mcpToolActivity.linear.delete_comment.active",
          defaultMessage: "Deleting comment",
          description: "Active label for the linear delete_comment MCP tool.",
        },
        delete_comment_completed: {
          id: "localConversation.mcpToolActivity.linear.delete_comment.completed",
          defaultMessage: "Deleted comment",
          description: "Completed label for the linear delete_comment MCP tool.",
        },
        delete_customer_active: {
          id: "localConversation.mcpToolActivity.linear.delete_customer.active",
          defaultMessage: "Deleting customer",
          description: "Active label for the linear delete_customer MCP tool.",
        },
        delete_customer_completed: {
          id: "localConversation.mcpToolActivity.linear.delete_customer.completed",
          defaultMessage: "Deleted customer",
          description: "Completed label for the linear delete_customer MCP tool.",
        },
        delete_customer_need_active: {
          id: "localConversation.mcpToolActivity.linear.delete_customer_need.active",
          defaultMessage: "Archiving customer need",
          description: "Active label for the linear delete_customer_need MCP tool.",
        },
        delete_customer_need_completed: {
          id: "localConversation.mcpToolActivity.linear.delete_customer_need.completed",
          defaultMessage: "Archived customer need",
          description: "Completed label for the linear delete_customer_need MCP tool.",
        },
        delete_status_update_active: {
          id: "localConversation.mcpToolActivity.linear.delete_status_update.active",
          defaultMessage: "Deleting status update",
          description: "Active label for the linear delete_status_update MCP tool.",
        },
        delete_status_update_completed: {
          id: "localConversation.mcpToolActivity.linear.delete_status_update.completed",
          defaultMessage: "Deleted status update",
          description: "Completed label for the linear delete_status_update MCP tool.",
        },
        extract_images_active: {
          id: "localConversation.mcpToolActivity.linear.extract_images.active",
          defaultMessage: "Extracting images",
          description: "Active label for the linear extract_images MCP tool.",
        },
        extract_images_completed: {
          id: "localConversation.mcpToolActivity.linear.extract_images.completed",
          defaultMessage: "Extracted images",
          description: "Completed label for the linear extract_images MCP tool.",
        },
        fetch_active: {
          id: "localConversation.mcpToolActivity.linear.fetch.active",
          defaultMessage: "Fetching Linear record",
          description: "Active label for the linear fetch MCP tool.",
        },
        fetch_completed: {
          id: "localConversation.mcpToolActivity.linear.fetch.completed",
          defaultMessage: "Fetched Linear record",
          description: "Completed label for the linear fetch MCP tool.",
        },
        get_attachment_active: {
          id: "localConversation.mcpToolActivity.linear.get_attachment.active",
          defaultMessage: "Getting attachment",
          description: "Active label for the linear get_attachment MCP tool.",
        },
        get_attachment_completed: {
          id: "localConversation.mcpToolActivity.linear.get_attachment.completed",
          defaultMessage: "Got attachment",
          description: "Completed label for the linear get_attachment MCP tool.",
        },
        get_document_active: {
          id: "localConversation.mcpToolActivity.linear.get_document.active",
          defaultMessage: "Getting document",
          description: "Active label for the linear get_document MCP tool.",
        },
        get_document_activeWithIdentifier: {
          id: "localConversation.mcpToolActivity.linear.get_document.activeWithIdentifier",
          defaultMessage: 'Getting document "{identifier}"',
          description: "Active label for the linear get_document MCP tool with its readable document identifier.",
        },
        get_document_completed: {
          id: "localConversation.mcpToolActivity.linear.get_document.completed",
          defaultMessage: "Got document",
          description: "Completed label for the linear get_document MCP tool.",
        },
        get_document_completedWithIdentifier: {
          id: "localConversation.mcpToolActivity.linear.get_document.completedWithIdentifier",
          defaultMessage: 'Got document "{identifier}"',
          description: "Completed label for the linear get_document MCP tool with its readable document identifier.",
        },
        get_initiative_active: {
          id: "localConversation.mcpToolActivity.linear.get_initiative.active",
          defaultMessage: "Getting initiative",
          description: "Active label for the linear get_initiative MCP tool.",
        },
        get_initiative_activeWithName: {
          id: "localConversation.mcpToolActivity.linear.get_initiative.activeWithName",
          defaultMessage: 'Getting initiative "{itemName}"',
          description: "Active label for the linear get_initiative MCP tool with its initiative name.",
        },
        get_initiative_completed: {
          id: "localConversation.mcpToolActivity.linear.get_initiative.completed",
          defaultMessage: "Got initiative",
          description: "Completed label for the linear get_initiative MCP tool.",
        },
        get_initiative_completedWithName: {
          id: "localConversation.mcpToolActivity.linear.get_initiative.completedWithName",
          defaultMessage: 'Got initiative "{itemName}"',
          description: "Completed label for the linear get_initiative MCP tool with its initiative name.",
        },
        get_issue_active: {
          id: "localConversation.mcpToolActivity.linear.get_issue.active",
          defaultMessage: "Getting issue",
          description: "Active label for the linear get_issue MCP tool.",
        },
        get_issue_completed: {
          id: "localConversation.mcpToolActivity.linear.get_issue.completed",
          defaultMessage: "Got issue",
          description: "Completed label for the linear get_issue MCP tool.",
        },
        get_issue_status_active: {
          id: "localConversation.mcpToolActivity.linear.get_issue_status.active",
          defaultMessage: "Getting issue status",
          description: "Active label for the linear get_issue_status MCP tool.",
        },
        get_issue_status_completed: {
          id: "localConversation.mcpToolActivity.linear.get_issue_status.completed",
          defaultMessage: "Got issue status",
          description: "Completed label for the linear get_issue_status MCP tool.",
        },
        get_milestone_active: {
          id: "localConversation.mcpToolActivity.linear.get_milestone.active",
          defaultMessage: "Getting milestone",
          description: "Active label for the linear get_milestone MCP tool.",
        },
        get_milestone_activeWithName: {
          id: "localConversation.mcpToolActivity.linear.get_milestone.activeWithName",
          defaultMessage: 'Getting milestone "{itemName}"',
          description: "Active label for the linear get_milestone MCP tool with its milestone name.",
        },
        get_milestone_completed: {
          id: "localConversation.mcpToolActivity.linear.get_milestone.completed",
          defaultMessage: "Got milestone",
          description: "Completed label for the linear get_milestone MCP tool.",
        },
        get_milestone_completedWithName: {
          id: "localConversation.mcpToolActivity.linear.get_milestone.completedWithName",
          defaultMessage: 'Got milestone "{itemName}"',
          description: "Completed label for the linear get_milestone MCP tool with its milestone name.",
        },
        get_project_active: {
          id: "localConversation.mcpToolActivity.linear.get_project.active",
          defaultMessage: "Getting project",
          description: "Active label for the linear get_project MCP tool.",
        },
        get_project_completed: {
          id: "localConversation.mcpToolActivity.linear.get_project.completed",
          defaultMessage: "Got project",
          description: "Completed label for the linear get_project MCP tool.",
        },
        get_status_updates_active: {
          id: "localConversation.mcpToolActivity.linear.get_status_updates.active",
          defaultMessage: "Getting status updates",
          description: "Active label for the linear get_status_updates MCP tool.",
        },
        get_status_updates_completed: {
          id: "localConversation.mcpToolActivity.linear.get_status_updates.completed",
          defaultMessage: "Got status updates",
          description: "Completed label for the linear get_status_updates MCP tool.",
        },
        get_team_active: {
          id: "localConversation.mcpToolActivity.linear.get_team.active",
          defaultMessage: "Getting team",
          description: "Active label for the linear get_team MCP tool.",
        },
        get_team_activeWithName: {
          id: "localConversation.mcpToolActivity.linear.get_team.activeWithName",
          defaultMessage: 'Getting team "{itemName}"',
          description: "Active label for the linear get_team MCP tool with its team name.",
        },
        get_team_completed: {
          id: "localConversation.mcpToolActivity.linear.get_team.completed",
          defaultMessage: "Got team",
          description: "Completed label for the linear get_team MCP tool.",
        },
        get_team_completedWithName: {
          id: "localConversation.mcpToolActivity.linear.get_team.completedWithName",
          defaultMessage: 'Got team "{itemName}"',
          description: "Completed label for the linear get_team MCP tool with its team name.",
        },
        get_user_active: {
          id: "localConversation.mcpToolActivity.linear.get_user.active",
          defaultMessage: "Getting user",
          description: "Active label for the linear get_user MCP tool.",
        },
        get_user_activeWithName: {
          id: "localConversation.mcpToolActivity.linear.get_user.activeWithName",
          defaultMessage: 'Getting user "{itemName}"',
          description: "Active label for the linear get_user MCP tool with its user name.",
        },
        get_user_completed: {
          id: "localConversation.mcpToolActivity.linear.get_user.completed",
          defaultMessage: "Got user",
          description: "Completed label for the linear get_user MCP tool.",
        },
        get_user_completedWithName: {
          id: "localConversation.mcpToolActivity.linear.get_user.completedWithName",
          defaultMessage: 'Got user "{itemName}"',
          description: "Completed label for the linear get_user MCP tool with its user name.",
        },
        list_comments_active: {
          id: "localConversation.mcpToolActivity.linear.list_comments.active",
          defaultMessage: "Listing comments",
          description: "Active label for the linear list_comments MCP tool.",
        },
        list_comments_completed: {
          id: "localConversation.mcpToolActivity.linear.list_comments.completed",
          defaultMessage: "Listed comments",
          description: "Completed label for the linear list_comments MCP tool.",
        },
        list_customers_active: {
          id: "localConversation.mcpToolActivity.linear.list_customers.active",
          defaultMessage: "Listing customers",
          description: "Active label for the linear list_customers MCP tool.",
        },
        list_customers_completed: {
          id: "localConversation.mcpToolActivity.linear.list_customers.completed",
          defaultMessage: "Listed customers",
          description: "Completed label for the linear list_customers MCP tool.",
        },
        list_cycles_active: {
          id: "localConversation.mcpToolActivity.linear.list_cycles.active",
          defaultMessage: "Listing cycles",
          description: "Active label for the linear list_cycles MCP tool.",
        },
        list_cycles_completed: {
          id: "localConversation.mcpToolActivity.linear.list_cycles.completed",
          defaultMessage: "Listed cycles",
          description: "Completed label for the linear list_cycles MCP tool.",
        },
        list_documents_active: {
          id: "localConversation.mcpToolActivity.linear.list_documents.active",
          defaultMessage: "Listing documents",
          description: "Active label for the linear list_documents MCP tool.",
        },
        list_documents_completed: {
          id: "localConversation.mcpToolActivity.linear.list_documents.completed",
          defaultMessage: "Listed documents",
          description: "Completed label for the linear list_documents MCP tool.",
        },
        list_initiatives_active: {
          id: "localConversation.mcpToolActivity.linear.list_initiatives.active",
          defaultMessage: "Listing initiatives",
          description: "Active label for the linear list_initiatives MCP tool.",
        },
        list_initiatives_completed: {
          id: "localConversation.mcpToolActivity.linear.list_initiatives.completed",
          defaultMessage: "Listed initiatives",
          description: "Completed label for the linear list_initiatives MCP tool.",
        },
        list_issue_labels_active: {
          id: "localConversation.mcpToolActivity.linear.list_issue_labels.active",
          defaultMessage: "Listing issue labels",
          description: "Active label for the linear list_issue_labels MCP tool.",
        },
        list_issue_labels_completed: {
          id: "localConversation.mcpToolActivity.linear.list_issue_labels.completed",
          defaultMessage: "Listed issue labels",
          description: "Completed label for the linear list_issue_labels MCP tool.",
        },
        list_issue_statuses_active: {
          id: "localConversation.mcpToolActivity.linear.list_issue_statuses.active",
          defaultMessage: "Listing issue statuses",
          description: "Active label for the linear list_issue_statuses MCP tool.",
        },
        list_issue_statuses_completed: {
          id: "localConversation.mcpToolActivity.linear.list_issue_statuses.completed",
          defaultMessage: "Listed issue statuses",
          description: "Completed label for the linear list_issue_statuses MCP tool.",
        },
        list_issues_active: {
          id: "localConversation.mcpToolActivity.linear.list_issues.active",
          defaultMessage: "Listing issues",
          description: "Active label for the linear list_issues MCP tool.",
        },
        list_issues_completed: {
          id: "localConversation.mcpToolActivity.linear.list_issues.completed",
          defaultMessage: "Listed issues",
          description: "Completed label for the linear list_issues MCP tool.",
        },
        list_milestones_active: {
          id: "localConversation.mcpToolActivity.linear.list_milestones.active",
          defaultMessage: "Listing milestones",
          description: "Active label for the linear list_milestones MCP tool.",
        },
        list_milestones_completed: {
          id: "localConversation.mcpToolActivity.linear.list_milestones.completed",
          defaultMessage: "Listed milestones",
          description: "Completed label for the linear list_milestones MCP tool.",
        },
        list_project_labels_active: {
          id: "localConversation.mcpToolActivity.linear.list_project_labels.active",
          defaultMessage: "Listing project labels",
          description: "Active label for the linear list_project_labels MCP tool.",
        },
        list_project_labels_completed: {
          id: "localConversation.mcpToolActivity.linear.list_project_labels.completed",
          defaultMessage: "Listed project labels",
          description: "Completed label for the linear list_project_labels MCP tool.",
        },
        list_projects_active: {
          id: "localConversation.mcpToolActivity.linear.list_projects.active",
          defaultMessage: "Listing projects",
          description: "Active label for the linear list_projects MCP tool.",
        },
        list_projects_completed: {
          id: "localConversation.mcpToolActivity.linear.list_projects.completed",
          defaultMessage: "Listed projects",
          description: "Completed label for the linear list_projects MCP tool.",
        },
        list_teams_active: {
          id: "localConversation.mcpToolActivity.linear.list_teams.active",
          defaultMessage: "Listing teams",
          description: "Active label for the linear list_teams MCP tool.",
        },
        list_teams_completed: {
          id: "localConversation.mcpToolActivity.linear.list_teams.completed",
          defaultMessage: "Listed teams",
          description: "Completed label for the linear list_teams MCP tool.",
        },
        list_users_active: {
          id: "localConversation.mcpToolActivity.linear.list_users.active",
          defaultMessage: "Listing users",
          description: "Active label for the linear list_users MCP tool.",
        },
        list_users_completed: {
          id: "localConversation.mcpToolActivity.linear.list_users.completed",
          defaultMessage: "Listed users",
          description: "Completed label for the linear list_users MCP tool.",
        },
        research_active: {
          id: "localConversation.mcpToolActivity.linear.research.active",
          defaultMessage: "Researching in Linear",
          description: "Active label for the linear research MCP tool.",
        },
        research_completed: {
          id: "localConversation.mcpToolActivity.linear.research.completed",
          defaultMessage: "Researched in Linear",
          description: "Completed label for the linear research MCP tool.",
        },
        save_comment_active: {
          id: "localConversation.mcpToolActivity.linear.save_comment.active",
          defaultMessage: "Saving comment",
          description: "Active label for the linear save_comment MCP tool.",
        },
        save_comment_completed: {
          id: "localConversation.mcpToolActivity.linear.save_comment.completed",
          defaultMessage: "Saved comment",
          description: "Completed label for the linear save_comment MCP tool.",
        },
        save_customer_active: {
          id: "localConversation.mcpToolActivity.linear.save_customer.active",
          defaultMessage: "Saving customer",
          description: "Active label for the linear save_customer MCP tool.",
        },
        save_customer_completed: {
          id: "localConversation.mcpToolActivity.linear.save_customer.completed",
          defaultMessage: "Saved customer",
          description: "Completed label for the linear save_customer MCP tool.",
        },
        save_customer_need_active: {
          id: "localConversation.mcpToolActivity.linear.save_customer_need.active",
          defaultMessage: "Saving customer need",
          description: "Active label for the linear save_customer_need MCP tool.",
        },
        save_customer_need_completed: {
          id: "localConversation.mcpToolActivity.linear.save_customer_need.completed",
          defaultMessage: "Saved customer need",
          description: "Completed label for the linear save_customer_need MCP tool.",
        },
        save_initiative_active: {
          id: "localConversation.mcpToolActivity.linear.save_initiative.active",
          defaultMessage: "Saving initiative",
          description: "Active label for the linear save_initiative MCP tool.",
        },
        save_initiative_completed: {
          id: "localConversation.mcpToolActivity.linear.save_initiative.completed",
          defaultMessage: "Saved initiative",
          description: "Completed label for the linear save_initiative MCP tool.",
        },
        save_issue_active: {
          id: "localConversation.mcpToolActivity.linear.save_issue.active",
          defaultMessage: "Saving issue",
          description: "Active label for the linear save_issue MCP tool.",
        },
        save_issue_completed: {
          id: "localConversation.mcpToolActivity.linear.save_issue.completed",
          defaultMessage: "Saved issue",
          description: "Completed label for the linear save_issue MCP tool.",
        },
        save_milestone_active: {
          id: "localConversation.mcpToolActivity.linear.save_milestone.active",
          defaultMessage: "Saving milestone",
          description: "Active label for the linear save_milestone MCP tool.",
        },
        save_milestone_completed: {
          id: "localConversation.mcpToolActivity.linear.save_milestone.completed",
          defaultMessage: "Saved milestone",
          description: "Completed label for the linear save_milestone MCP tool.",
        },
        save_project_active: {
          id: "localConversation.mcpToolActivity.linear.save_project.active",
          defaultMessage: "Saving project",
          description: "Active label for the linear save_project MCP tool.",
        },
        save_project_completed: {
          id: "localConversation.mcpToolActivity.linear.save_project.completed",
          defaultMessage: "Saved project",
          description: "Completed label for the linear save_project MCP tool.",
        },
        save_status_update_active: {
          id: "localConversation.mcpToolActivity.linear.save_status_update.active",
          defaultMessage: "Saving status update",
          description: "Active label for the linear save_status_update MCP tool.",
        },
        save_status_update_completed: {
          id: "localConversation.mcpToolActivity.linear.save_status_update.completed",
          defaultMessage: "Saved status update",
          description: "Completed label for the linear save_status_update MCP tool.",
        },
        search_active: {
          id: "localConversation.mcpToolActivity.linear.search.active",
          defaultMessage: "Searching Linear",
          description: "Active label for the linear search MCP tool.",
        },
        search_completed: {
          id: "localConversation.mcpToolActivity.linear.search.completed",
          defaultMessage: "Searched Linear",
          description: "Completed label for the linear search MCP tool.",
        },
        search_documentation_active: {
          id: "localConversation.mcpToolActivity.linear.search_documentation.active",
          defaultMessage: "Searching Linear docs",
          description: "Active label for the linear search_documentation MCP tool.",
        },
        search_documentation_completed: {
          id: "localConversation.mcpToolActivity.linear.search_documentation.completed",
          defaultMessage: "Searched Linear docs",
          description: "Completed label for the linear search_documentation MCP tool.",
        },
        update_document_active: {
          id: "localConversation.mcpToolActivity.linear.update_document.active",
          defaultMessage: "Updating document",
          description: "Active label for the linear update_document MCP tool.",
        },
        update_document_completed: {
          id: "localConversation.mcpToolActivity.linear.update_document.completed",
          defaultMessage: "Updated document",
          description: "Completed label for the linear update_document MCP tool.",
        },
        get_issue_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.get_issue.activeWithVariant1",
          defaultMessage: "Getting issue {identifier}",
          description: "Active label for the linear get_issue MCP tool with invocation context.",
        },
        get_issue_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.get_issue.completedWithVariant1",
          defaultMessage: "Got issue {identifier}",
          description: "Completed label for the linear get_issue MCP tool with invocation context.",
        },
        get_project_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.get_project.activeWithVariant1",
          defaultMessage: 'Getting project "{itemName}"',
          description: "Active label for the linear get_project MCP tool with invocation context.",
        },
        get_project_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.get_project.completedWithVariant1",
          defaultMessage: 'Got project "{itemName}"',
          description: "Completed label for the linear get_project MCP tool with invocation context.",
        },
        list_issues_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.list_issues.activeWithVariant1",
          defaultMessage: 'Listing issues matching "{query}"',
          description: "Active label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.list_issues.completedWithVariant1",
          defaultMessage: 'Listed issues matching "{query}"',
          description: "Completed label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_activeWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.list_issues.activeWithVariant2",
          defaultMessage: 'Listing issues in "{target}"',
          description: "Active label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_completedWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.list_issues.completedWithVariant2",
          defaultMessage: 'Listed issues in "{target}"',
          description: "Completed label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_activeWithVariant3: {
          id: "localConversation.mcpToolActivity.linear.list_issues.activeWithVariant3",
          defaultMessage: 'Listing issues for team "{target}"',
          description: "Active label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_completedWithVariant3: {
          id: "localConversation.mcpToolActivity.linear.list_issues.completedWithVariant3",
          defaultMessage: 'Listed issues for team "{target}"',
          description: "Completed label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_activeWithVariant4: {
          id: "localConversation.mcpToolActivity.linear.list_issues.activeWithVariant4",
          defaultMessage: 'Listing issues for "{target}"',
          description: "Active label for the linear list_issues MCP tool with invocation context.",
        },
        list_issues_completedWithVariant4: {
          id: "localConversation.mcpToolActivity.linear.list_issues.completedWithVariant4",
          defaultMessage: 'Listed issues for "{target}"',
          description: "Completed label for the linear list_issues MCP tool with invocation context.",
        },
        list_milestones_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.list_milestones.activeWithVariant1",
          defaultMessage: 'Listing milestones in "{target}"',
          description: "Active label for the linear list_milestones MCP tool with invocation context.",
        },
        list_milestones_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.list_milestones.completedWithVariant1",
          defaultMessage: 'Listed milestones in "{target}"',
          description: "Completed label for the linear list_milestones MCP tool with invocation context.",
        },
        research_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.research.activeWithVariant1",
          defaultMessage: 'Researching in Linear "{query}"',
          description: "Active label for the linear research MCP tool with invocation context.",
        },
        research_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.research.completedWithVariant1",
          defaultMessage: 'Researched in Linear "{query}"',
          description: "Completed label for the linear research MCP tool with invocation context.",
        },
        save_comment_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_comment.activeWithVariant1",
          defaultMessage: "Saving comment {identifier}",
          description: "Active label for the linear save_comment MCP tool with invocation context.",
        },
        save_comment_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_comment.completedWithVariant1",
          defaultMessage: "Saved comment {identifier}",
          description: "Completed label for the linear save_comment MCP tool with invocation context.",
        },
        save_customer_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_customer.activeWithVariant1",
          defaultMessage: 'Saving customer "{itemName}"',
          description: "Active label for the linear save_customer MCP tool with invocation context.",
        },
        save_customer_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_customer.completedWithVariant1",
          defaultMessage: 'Saved customer "{itemName}"',
          description: "Completed label for the linear save_customer MCP tool with invocation context.",
        },
        save_customer_need_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_customer_need.activeWithVariant1",
          defaultMessage: "Saving customer need {identifier}",
          description: "Active label for the linear save_customer_need MCP tool with invocation context.",
        },
        save_customer_need_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_customer_need.completedWithVariant1",
          defaultMessage: "Saved customer need {identifier}",
          description: "Completed label for the linear save_customer_need MCP tool with invocation context.",
        },
        save_customer_need_activeWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.save_customer_need.activeWithVariant2",
          defaultMessage: 'Saving customer need "{itemName}"',
          description: "Active label for the linear save_customer_need MCP tool with invocation context.",
        },
        save_customer_need_completedWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.save_customer_need.completedWithVariant2",
          defaultMessage: 'Saved customer need "{itemName}"',
          description: "Completed label for the linear save_customer_need MCP tool with invocation context.",
        },
        save_initiative_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_initiative.activeWithVariant1",
          defaultMessage: 'Saving initiative "{itemName}"',
          description: "Active label for the linear save_initiative MCP tool with invocation context.",
        },
        save_initiative_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_initiative.completedWithVariant1",
          defaultMessage: 'Saved initiative "{itemName}"',
          description: "Completed label for the linear save_initiative MCP tool with invocation context.",
        },
        save_issue_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_issue.activeWithVariant1",
          defaultMessage: 'Saving issue "{itemName}"',
          description: "Active label for the linear save_issue MCP tool with invocation context.",
        },
        save_issue_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_issue.completedWithVariant1",
          defaultMessage: 'Saved issue "{itemName}"',
          description: "Completed label for the linear save_issue MCP tool with invocation context.",
        },
        save_issue_activeWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.save_issue.activeWithVariant2",
          defaultMessage: "Saving issue {identifier}",
          description: "Active label for the linear save_issue MCP tool with invocation context.",
        },
        save_issue_completedWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.save_issue.completedWithVariant2",
          defaultMessage: "Saved issue {identifier}",
          description: "Completed label for the linear save_issue MCP tool with invocation context.",
        },
        save_issue_activeWithVariant3: {
          id: "localConversation.mcpToolActivity.linear.save_issue.activeWithVariant3",
          defaultMessage: 'Saving issue "{target}"',
          description: "Active label for the linear save_issue MCP tool with invocation context.",
        },
        save_issue_completedWithVariant3: {
          id: "localConversation.mcpToolActivity.linear.save_issue.completedWithVariant3",
          defaultMessage: 'Saved issue "{target}"',
          description: "Completed label for the linear save_issue MCP tool with invocation context.",
        },
        save_milestone_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_milestone.activeWithVariant1",
          defaultMessage: 'Saving milestone "{itemName}"',
          description: "Active label for the linear save_milestone MCP tool with invocation context.",
        },
        save_milestone_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_milestone.completedWithVariant1",
          defaultMessage: 'Saved milestone "{itemName}"',
          description: "Completed label for the linear save_milestone MCP tool with invocation context.",
        },
        save_milestone_activeWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.save_milestone.activeWithVariant2",
          defaultMessage: 'Saving milestone in "{target}"',
          description: "Active label for the linear save_milestone MCP tool with invocation context.",
        },
        save_milestone_completedWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.save_milestone.completedWithVariant2",
          defaultMessage: 'Saved milestone in "{target}"',
          description: "Completed label for the linear save_milestone MCP tool with invocation context.",
        },
        save_project_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_project.activeWithVariant1",
          defaultMessage: 'Saving project "{itemName}"',
          description: "Active label for the linear save_project MCP tool with invocation context.",
        },
        save_project_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.save_project.completedWithVariant1",
          defaultMessage: 'Saved project "{itemName}"',
          description: "Completed label for the linear save_project MCP tool with invocation context.",
        },
        search_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.search.activeWithVariant1",
          defaultMessage: 'Searching Linear for {target} "{query}"',
          description: "Active label for the linear search MCP tool with invocation context.",
        },
        search_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.search.completedWithVariant1",
          defaultMessage: 'Searched Linear for {target} "{query}"',
          description: "Completed label for the linear search MCP tool with invocation context.",
        },
        search_activeWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.search.activeWithVariant2",
          defaultMessage: 'Searching Linear "{query}"',
          description: "Active label for the linear search MCP tool with invocation context.",
        },
        search_completedWithVariant2: {
          id: "localConversation.mcpToolActivity.linear.search.completedWithVariant2",
          defaultMessage: 'Searched Linear "{query}"',
          description: "Completed label for the linear search MCP tool with invocation context.",
        },
        search_documentation_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.search_documentation.activeWithVariant1",
          defaultMessage: 'Searching Linear docs "{query}"',
          description: "Active label for the linear search_documentation MCP tool with invocation context.",
        },
        search_documentation_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.linear.search_documentation.completedWithVariant1",
          defaultMessage: 'Searched Linear docs "{query}"',
          description: "Completed label for the linear search_documentation MCP tool with invocation context.",
        },
        create_attachment_approval: {
          id: "localConversation.mcpToolApproval.linear.create_attachment.v2",
          defaultMessage:
            'Allow Linear to create{hasFilename, select, yes { attachment "{filename}"} other { an attachment}}?',
          description: "Approval request for creating a Linear attachment with its filename when available.",
        },
        create_issue_label_approval: {
          id: "localConversation.mcpToolApproval.linear.create_issue_label.v2",
          defaultMessage:
            'Allow Linear to create{hasName, select, yes { issue label "{name}"} other { an issue label}}?',
          description: "Approval request for creating a Linear issue label with its name when available.",
        },
        delete_attachment_approval: {
          id: "localConversation.mcpToolApproval.linear.delete_attachment",
          defaultMessage: "Allow Linear to delete an attachment?",
          description: "Approval request for deleting a Linear attachment.",
        },
        delete_comment_approval: {
          id: "localConversation.mcpToolApproval.linear.delete_comment",
          defaultMessage: "Allow Linear to delete a comment?",
          description: "Approval request for deleting a Linear comment.",
        },
        delete_customer_approval: {
          id: "localConversation.mcpToolApproval.linear.delete_customer",
          defaultMessage: "Allow Linear to delete a customer?",
          description: "Approval request for deleting a Linear customer.",
        },
        delete_customer_need_approval: {
          id: "localConversation.mcpToolApproval.linear.delete_customer_need",
          defaultMessage: "Allow Linear to archive a customer need?",
          description: "Approval request for archiving a Linear customer need.",
        },
        delete_status_update_approval: {
          id: "localConversation.mcpToolApproval.linear.delete_status_update",
          defaultMessage:
            "Allow Linear to delete {type, select, project {a project status update} initiative {an initiative status update} other {a status update}}?",
          description: "Approval request for deleting a Linear project or initiative status update.",
        },
        save_comment_approval: {
          id: "localConversation.mcpToolApproval.linear.save_comment",
          defaultMessage:
            'Allow Linear to {action, select, create {add{hasBody, select, yes { comment "{body}"} other { a comment}}} reply {reply with{hasBody, select, yes { "{body}"} other { a comment}}} update {update{hasBody, select, yes { a comment to "{body}"} other { a comment}}} other {save a comment}}?',
          description:
            "Approval request for creating, replying with, or updating a Linear comment, including the available comment text.",
        },
        save_customer_approval: {
          id: "localConversation.mcpToolApproval.linear.save_customer.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}}{hasName, select, yes { customer "{name}"} other { a customer}}?',
          description: "Approval request for creating or updating a Linear customer with its name when available.",
        },
        save_customer_need_approval: {
          id: "localConversation.mcpToolApproval.linear.save_customer_need.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}}{hasBody, select, yes { customer need "{body}"} other { a customer need}}{hasCustomer, select, yes { for "{customer}"} other {}}?',
          description:
            "Approval request for creating or updating a Linear customer need with its text and customer name when available.",
        },
        save_initiative_approval: {
          id: "localConversation.mcpToolApproval.linear.save_initiative.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}}{hasName, select, yes { initiative "{name}"} other { an initiative}}{targetDateChange, select, set { targeting {targetDate, date, medium}} clear { with no target date} other {}}?',
          description:
            "Approval request for creating or updating a Linear initiative with its name and target date change when available.",
        },
        save_issue_approval: {
          id: "localConversation.mcpToolApproval.linear.save_issue.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}}{hasTitle, select, yes { issue "{title}"} other { an issue}}{projectChange, select, set { in project "{project}"} clear { with no project} other {}}{assigneeChange, select, set { assigned to {assignee}} clear { with no assignee} other {}}?',
          description:
            "Approval request for creating or updating a Linear issue with its title and project or assignee changes when available.",
        },
        save_milestone_approval: {
          id: "localConversation.mcpToolApproval.linear.save_milestone.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}}{hasName, select, yes { milestone "{name}"} other { a milestone}}{hasProject, select, yes { in project "{project}"} other {}}{targetDateChange, select, set { targeting {targetDate, date, medium}} clear { with no target date} other {}}?',
          description:
            "Approval request for creating or updating a Linear milestone with its name, project, and target date change when available.",
        },
        save_project_approval: {
          id: "localConversation.mcpToolApproval.linear.save_project.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}}{hasName, select, yes { project "{name}"} other { a project}}{targetDateChange, select, set { targeting {targetDate, date, medium}} clear { with no target date} other {}}?',
          description:
            "Approval request for creating or updating a Linear project with its name and target date change when available.",
        },
        save_status_update_approval: {
          id: "localConversation.mcpToolApproval.linear.save_status_update.v2",
          defaultMessage:
            'Allow Linear to {action, select, create {create} update {update} other {save}} {type, select, project {a project status update} initiative {an initiative status update} other {a status update}}{hasTarget, select, yes { for "{target}"} other {}}{hasBody, select, yes { saying "{body}"} other {}}?',
          description:
            "Approval request for creating or updating a Linear status update with its target and text when available.",
        },
      }),
      eQ = v
        .string()
        .optional()
        .catch(void 0),
      e$ = v
        .object({
          plain_text: v
            .string()
            .optional()
            .catch(void 0),
          text: v
            .object({ content: v.string() })
            .strip()
            .optional()
            .catch(void 0),
        })
        .strip(),
      eO = v
        .object({
          rich_text: v
            .array(e$)
            .optional()
            .catch(void 0),
          title: v
            .array(e$)
            .optional()
            .catch(void 0),
        })
        .strip(),
      eE = v
        .object({
          name: v
            .string()
            .optional()
            .catch(void 0),
          properties: v
            .record(v.string(), v.union([v.string(), v.number(), v.array(v.string()), eO, v.null()]))
            .optional()
            .catch(void 0),
          title: v
            .string()
            .optional()
            .catch(void 0),
        })
        .strip(),
      eJ = v
        .object({
          display_title: v
            .string()
            .optional()
            .catch(void 0),
          name: v
            .string()
            .optional()
            .catch(void 0),
          properties: eE.shape.properties,
          result: v.unknown().optional(),
          title: v
            .string()
            .optional()
            .catch(void 0),
        })
        .strip(),
      eB = v.object({ text: v.string(), type: v.literal("text") }).strip(),
      ez = v
        .object({
          content: v
            .array(eB)
            .optional()
            .catch(void 0),
          raw: v
            .object({
              content: v
                .array(eB)
                .optional()
                .catch(void 0),
            })
            .strip()
            .optional()
            .catch(void 0),
          type: v.literal("success"),
        })
        .strip(),
      eK = v
        .object({
          allow_deleting_content: v
            .boolean()
            .optional()
            .catch(void 0),
          command: v
            .enum(["update_properties", "update_content", "replace_content", "apply_template", "update_verification"])
            .optional()
            .catch(void 0),
          cover: eQ,
          data: v
            .object({
              query: v
                .string()
                .trim()
                .min(1)
                .max(500)
                .optional()
                .catch(void 0),
            })
            .strip()
            .optional()
            .catch(void 0),
          description: eQ,
          icon: eQ,
          id: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          in_trash: v
            .boolean()
            .optional()
            .catch(void 0),
          is_inline: v
            .boolean()
            .optional()
            .catch(void 0),
          name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          new_str: eQ,
          pages: v
            .custom(Array.isArray)
            .optional()
            .catch(void 0),
          properties: eE.shape.properties,
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          statements: eQ,
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          verification_expiry_days: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          verification_status: v
            .enum(["verified", "unverified"])
            .optional()
            .catch(void 0),
        })
        .strip(),
      eY = {
        create_database: (0, A.PM)({
          getItemName: (e) => e0(e.title),
          getMessages: () => (0, A.vP)(e5, "create_database", "WithVariant1"),
          maxPreviewLength: 40,
        }),
        create_pages:
          ((p = (e, t) => {
            if (!e.hasInvocationContext || null == e.toolArguments) return e.intl.formatMessage(e5[`create_pages_${t}`])
            let o = e0(
              (function (e) {
                if (null != e)
                  for (let t of e) {
                    let e = e2(t)
                    if (null != e) return e
                  }
              })(e.toolArguments.pages),
            )
            if (null != o) return e.intl.formatMessage(e5[`create_pages_${t}WithVariant1`], { itemName: o })
            let a = e.toolArguments.pages?.length
            return null == a || 0 === a
              ? e.intl.formatMessage(e5[`create_pages_${t}`])
              : e.intl.formatMessage(e5[`create_pages_${t}WithVariant2`], { itemCount: a })
          }),
          { active: (e) => p(e, "active"), completed: (e) => p(e, "completed") }),
        create_view: (0, A.PM)({
          getItemName: (e) => e0(e.name),
          getMessages: () => (0, A.vP)(e5, "create_view", "WithVariant1"),
          maxPreviewLength: 40,
        }),
        fetch: (0, A._p)({
          getMessages: () => (0, A.vP)(e5, "fetch", "WithVariant1"),
          getValues: ({ hasInvocationContext: e, toolArguments: t, toolResult: o }) => {
            if (!e || null == t) return null
            let a = e0(
              (function (e) {
                let t = e1((0, e_.O)(e))
                if (null != t) return t
                let o = ez.safeParse(e)
                if (o.success)
                  for (let { text: e } of [...(o.data.content ?? []), ...(o.data.raw?.content ?? [])])
                    try {
                      let t = e1(JSON.parse(e))
                      if (null != t) return t
                    } catch {
                      continue
                    }
              })(o) ??
                (function (e) {
                  if (!(null == e || e4(e))) {
                    if (!/^https?:\/\//i.test(e)) return e
                    try {
                      let t = new URL(e),
                        o = decodeURIComponent(
                          t.pathname
                            .split("/")
                            .filter((e) => e.length > 0)
                            .pop() ?? "",
                        )
                          .replace(/[-_][0-9a-f]{8,}$/i, "")
                          .replace(/[-_]+/g, " ")
                          .trim()
                      return o.length > 0 ? o : void 0
                    } catch {
                      return
                    }
                  }
                })(t.id),
            )
            return null == a ? null : { itemName: a }
          },
        }),
        get_users: (0, A.lu)({
          getMessages: () => (0, A.vP)(e5, "get_users", "WithQuery"),
          getValue: (e) => e.query,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        query_data_sources: (0, A.lu)({
          getValue: (e) => e0(e.data?.query),
          getMessages: () => (0, A.vP)(e5, "query_data_sources", "WithVariant1"),
          maxPreviewLength: 40,
          valueName: "query",
        }),
        query_meeting_notes: (0, A.lu)({
          getValue: (e) => e0(e.query),
          getMessages: () => (0, A.vP)(e5, "query_meeting_notes", "WithQuery"),
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search: (0, A.lu)({
          getValue: (e) => e0(e.query),
          getMessages: () => (0, A.vP)(e5, "search", "WithVariant1"),
          maxPreviewLength: 40,
          valueName: "query",
        }),
        update_data_source: (0, A.PM)({
          getItemName: (e) => e0(e.title),
          getMessages: () => (0, A.vP)(e5, "update_data_source", "WithTitle"),
          maxPreviewLength: 40,
          approval: function (e) {
            let t = e0(e?.title),
              o = e0(e?.description),
              a = e0(e?.statements),
              i = "none"
            e?.in_trash != null && (i = e.in_trash ? "move" : "restore")
            let l = "none"
            return (e?.is_inline != null && (l = e.is_inline ? "inline" : "full_page"),
            null == t && null == o && null == a && "none" === i && "none" === l)
              ? { descriptor: e5.update_data_source_approval }
              : {
                  descriptor: e5.update_data_source_approvalWithContext,
                  values: {
                    description: o ?? "",
                    hasDescription: null == o ? "no" : "yes",
                    hasStatements: null == a ? "no" : "yes",
                    hasTitle: null == t ? "no" : "yes",
                    inlineAction: l,
                    statements: a ?? "",
                    title: t ?? "",
                    trashAction: i,
                  },
                }
          },
        }),
        update_page: (0, A.PM)({
          getItemName: (e) => e0(e2(e)),
          getMessages: () => (0, A.vP)(e5, "update_page", "WithTitle"),
          maxPreviewLength: 40,
          approval: function (e) {
            let t = e0(
                (function (e) {
                  if (e?.title != null) return e.title
                  for (let t of Object.values(e?.properties ?? {})) {
                    if (null == t || "object" != typeof t || Array.isArray(t) || null == t.title) continue
                    let e = t.title
                      .map((e) => e.plain_text ?? e.text?.content ?? "")
                      .join("")
                      .trim()
                    if (e.length > 0) return e
                  }
                })(e),
              ),
              o = e0(e?.new_str),
              a = e0(e?.cover),
              i = e0(e?.icon),
              l = "none"
            null != a && (l = "none" === a.toLowerCase() ? "remove" : "set")
            let s = "none"
            null != i && (s = "none" === i.toLowerCase() ? "remove" : "set")
            let c = "none"
            return (e?.allow_deleting_content != null && (c = e.allow_deleting_content ? "allow" : "deny"),
            e?.command == null &&
              null == t &&
              null == o &&
              "none" === l &&
              "none" === s &&
              e?.verification_status == null &&
              "none" === c)
              ? { descriptor: e5.update_page_approval }
              : {
                  descriptor: e5.update_page_approvalWithContext,
                  values: {
                    command: e?.command ?? "unknown",
                    contentDeletionPermission: c,
                    cover: a ?? "",
                    coverAction: l,
                    hasNewContent: null == o ? "no" : "yes",
                    hasNewTitle: null == t ? "no" : "yes",
                    hasVerificationExpiryDays:
                      e?.verification_status === "verified" && null != e.verification_expiry_days ? "yes" : "no",
                    icon: i ?? "",
                    iconAction: s,
                    newContent: o ?? "",
                    newTitle: t ?? "",
                    verificationExpiryDays: e?.verification_expiry_days ?? 0,
                    verificationStatus: e?.verification_status ?? "unknown",
                  },
                }
          },
        }),
        update_view: (0, A.PM)({
          getItemName: (e) => e0(e.name),
          getMessages: () => (0, A.vP)(e5, "update_view", "WithVariant1"),
          maxPreviewLength: 40,
        }),
      },
      eZ = (0, A.Ys)({ appRegistryKey: "notion", getMessages: () => e5, toolArgumentsSchema: eK, tools: eY }),
      eX = (0, A.mg)({ toolArgumentsSchema: eK, tools: eY })
    function e0(e) {
      if (!(null == e || e4(e.trim()))) return (0, A.kF)({ maxLength: 40, value: e }) ?? void 0
    }
    function e1(e) {
      let t = eJ.safeParse(e)
      if (!t.success) return
      let { display_title: o, name: a, result: i, title: l } = t.data,
        s = l ?? o ?? a ?? e2(t.data)
      if ("string" == typeof s) return s
      let c = eJ.safeParse(i)
      if (!c.success) return
      let n = c.data.title ?? c.data.display_title ?? c.data.name ?? e2(c.data)
      return "string" == typeof n ? n : void 0
    }
    function e2(e) {
      let t = eE.safeParse(e)
      if (!t.success) return
      let { name: o, properties: a, title: i } = t.data
      for (let e of [i, o]) if (null != e && e.trim().length > 0) return e
      if (null != a)
        for (let e of ["Name", "Title", "name", "title"]) {
          let t = a[e]
          if ("string" == typeof t && t.trim().length > 0) return t
          if (null == t || "object" != typeof t || Array.isArray(t)) continue
          let o = (t.title ?? t.rich_text)
            ?.map((e) => e.plain_text ?? e.text?.content ?? "")
            .join("")
            .trim()
          if (null != o && o.length > 0) return o
        }
    }
    function e4(e) {
      return (
        /^collection:\/\/[0-9a-f-]+$/i.test(e) ||
        /^[0-9a-f]{32}$/i.test(e) ||
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)
      )
    }
    let e5 = (0, M.YK)({
        update_data_source_approval: {
          id: "localConversation.mcpToolApproval.notion.update_data_source.fallback",
          defaultMessage: "Allow Notion to update a data source?",
          description:
            "Approval request for updating a Notion data source when no readable change details are available.",
        },
        update_data_source_approvalWithContext: {
          id: "localConversation.mcpToolApproval.notion.update_data_source.context_v2",
          defaultMessage:
            'Allow Notion to update a data source{hasTitle, select, yes {, setting its title to "{title}"} other {}}{hasDescription, select, yes {, setting its description to "{description}"} other {}}{hasStatements, select, yes {, applying schema changes "{statements}"} other {}}{trashAction, select, move {, moving it to trash} restore {, restoring it from trash} other {}}{inlineAction, select, inline {, showing it inline} full_page {, showing it as a full page} other {}}?',
          description:
            "Approval request for updating a Notion data source with its available new title, description, schema changes, trash state, and inline or full-page state.",
        },
        update_page_approval: {
          id: "localConversation.mcpToolApproval.notion.update_page.fallback",
          defaultMessage: "Allow Notion to update a page?",
          description: "Approval request for updating a Notion page when no readable change details are available.",
        },
        update_page_approvalWithContext: {
          id: "localConversation.mcpToolApproval.notion.update_page.context",
          defaultMessage:
            'Allow Notion to update a page{command, select, update_properties { by changing its properties} update_content { by editing its content} replace_content { by replacing all of its content} apply_template { by applying a template} update_verification { by changing its verification} other {}}{hasNewContent, select, yes { with "{newContent}"} other {}}{hasNewTitle, select, yes {, setting its title to "{newTitle}"} other {}}{verificationStatus, select, verified {, marking it verified{hasVerificationExpiryDays, select, yes { for {verificationExpiryDays, plural, one {# day} other {# days}}} other {}}} unverified {, marking it unverified} other {}}{coverAction, select, remove {, removing its cover} set {, setting its cover to "{cover}"} other {}}{iconAction, select, remove {, removing its icon} set {, setting its icon to "{icon}"} other {}}{contentDeletionPermission, select, allow {, allowing child pages and databases to be deleted} deny {, keeping child pages and databases from being deleted} other {}}?',
          description:
            "Approval request for updating a Notion page with its available operation, replacement content preview, new title, verification status and expiry, cover, icon, and content-deletion permission.",
        },
        create_attachment_active: {
          id: "localConversation.mcpToolActivity.notion.create_attachment.active",
          defaultMessage: "Creating attachment",
          description: "Active label for the notion create_attachment MCP tool.",
        },
        create_attachment_completed: {
          id: "localConversation.mcpToolActivity.notion.create_attachment.completed",
          defaultMessage: "Created attachment",
          description: "Completed label for the notion create_attachment MCP tool.",
        },
        create_comment_active: {
          id: "localConversation.mcpToolActivity.notion.create_comment.active",
          defaultMessage: "Creating comment",
          description: "Active label for the notion create_comment MCP tool.",
        },
        create_comment_completed: {
          id: "localConversation.mcpToolActivity.notion.create_comment.completed",
          defaultMessage: "Created comment",
          description: "Completed label for the notion create_comment MCP tool.",
        },
        create_database_active: {
          id: "localConversation.mcpToolActivity.notion.create_database.active",
          defaultMessage: "Creating database",
          description: "Active label for the notion create_database MCP tool.",
        },
        create_database_completed: {
          id: "localConversation.mcpToolActivity.notion.create_database.completed",
          defaultMessage: "Created database",
          description: "Completed label for the notion create_database MCP tool.",
        },
        create_pages_active: {
          id: "localConversation.mcpToolActivity.notion.create_pages.active",
          defaultMessage: "Creating pages",
          description: "Active label for the notion create_pages MCP tool.",
        },
        create_pages_completed: {
          id: "localConversation.mcpToolActivity.notion.create_pages.completed",
          defaultMessage: "Created pages",
          description: "Completed label for the notion create_pages MCP tool.",
        },
        create_view_active: {
          id: "localConversation.mcpToolActivity.notion.create_view.active",
          defaultMessage: "Creating view",
          description: "Active label for the notion create_view MCP tool.",
        },
        create_view_completed: {
          id: "localConversation.mcpToolActivity.notion.create_view.completed",
          defaultMessage: "Created view",
          description: "Completed label for the notion create_view MCP tool.",
        },
        download_attachment_active: {
          id: "localConversation.mcpToolActivity.notion.download_attachment.active",
          defaultMessage: "Downloading attachment",
          description: "Active label for the notion download_attachment MCP tool.",
        },
        download_attachment_completed: {
          id: "localConversation.mcpToolActivity.notion.download_attachment.completed",
          defaultMessage: "Downloaded attachment",
          description: "Completed label for the notion download_attachment MCP tool.",
        },
        duplicate_page_active: {
          id: "localConversation.mcpToolActivity.notion.duplicate_page.active",
          defaultMessage: "Duplicating page",
          description: "Active label for the notion duplicate_page MCP tool.",
        },
        duplicate_page_completed: {
          id: "localConversation.mcpToolActivity.notion.duplicate_page.completed",
          defaultMessage: "Duplicated page",
          description: "Completed label for the notion duplicate_page MCP tool.",
        },
        fetch_active: {
          id: "localConversation.mcpToolActivity.notion.fetch.active",
          defaultMessage: "Fetching page",
          description: "Active label for the notion fetch MCP tool.",
        },
        fetch_completed: {
          id: "localConversation.mcpToolActivity.notion.fetch.completed",
          defaultMessage: "Fetched page",
          description: "Completed label for the notion fetch MCP tool.",
        },
        get_comments_active: {
          id: "localConversation.mcpToolActivity.notion.get_comments.active",
          defaultMessage: "Getting comments",
          description: "Active label for the notion get_comments MCP tool.",
        },
        get_comments_completed: {
          id: "localConversation.mcpToolActivity.notion.get_comments.completed",
          defaultMessage: "Got comments",
          description: "Completed label for the notion get_comments MCP tool.",
        },
        get_teams_active: {
          id: "localConversation.mcpToolActivity.notion.get_teams.active",
          defaultMessage: "Getting teams",
          description: "Active label for the notion get_teams MCP tool.",
        },
        get_teams_completed: {
          id: "localConversation.mcpToolActivity.notion.get_teams.completed",
          defaultMessage: "Got teams",
          description: "Completed label for the notion get_teams MCP tool.",
        },
        get_users_active: {
          id: "localConversation.mcpToolActivity.notion.get_users.active",
          defaultMessage: "Getting users",
          description: "Active label for the notion get_users MCP tool.",
        },
        get_users_activeWithQuery: {
          id: "localConversation.mcpToolActivity.notion.get_users.activeWithQuery",
          defaultMessage: 'Getting users "{query}"',
          description: "Active label for the notion get_users MCP tool with its search query.",
        },
        get_users_completed: {
          id: "localConversation.mcpToolActivity.notion.get_users.completed",
          defaultMessage: "Got users",
          description: "Completed label for the notion get_users MCP tool.",
        },
        get_users_completedWithQuery: {
          id: "localConversation.mcpToolActivity.notion.get_users.completedWithQuery",
          defaultMessage: 'Got users "{query}"',
          description: "Completed label for the notion get_users MCP tool with its search query.",
        },
        move_pages_active: {
          id: "localConversation.mcpToolActivity.notion.move_pages.active",
          defaultMessage: "Moving pages",
          description: "Active label for the notion move_pages MCP tool.",
        },
        move_pages_completed: {
          id: "localConversation.mcpToolActivity.notion.move_pages.completed",
          defaultMessage: "Moved pages",
          description: "Completed label for the notion move_pages MCP tool.",
        },
        query_data_sources_active: {
          id: "localConversation.mcpToolActivity.notion.query_data_sources.active",
          defaultMessage: "Querying data sources",
          description: "Active label for the notion query_data_sources MCP tool.",
        },
        query_data_sources_completed: {
          id: "localConversation.mcpToolActivity.notion.query_data_sources.completed",
          defaultMessage: "Queried data sources",
          description: "Completed label for the notion query_data_sources MCP tool.",
        },
        query_database_view_active: {
          id: "localConversation.mcpToolActivity.notion.query_database_view.active",
          defaultMessage: "Querying database view",
          description: "Active label for the notion query_database_view MCP tool.",
        },
        query_database_view_completed: {
          id: "localConversation.mcpToolActivity.notion.query_database_view.completed",
          defaultMessage: "Queried database view",
          description: "Completed label for the notion query_database_view MCP tool.",
        },
        query_meeting_notes_active: {
          id: "localConversation.mcpToolActivity.notion.query_meeting_notes.active",
          defaultMessage: "Querying meeting notes",
          description: "Active label for the notion query_meeting_notes MCP tool.",
        },
        query_meeting_notes_activeWithQuery: {
          id: "localConversation.mcpToolActivity.notion.query_meeting_notes.activeWithQuery",
          defaultMessage: 'Querying meeting notes "{query}"',
          description: "Active label for the notion query_meeting_notes MCP tool with its search query.",
        },
        query_meeting_notes_completed: {
          id: "localConversation.mcpToolActivity.notion.query_meeting_notes.completed",
          defaultMessage: "Queried meeting notes",
          description: "Completed label for the notion query_meeting_notes MCP tool.",
        },
        query_meeting_notes_completedWithQuery: {
          id: "localConversation.mcpToolActivity.notion.query_meeting_notes.completedWithQuery",
          defaultMessage: 'Queried meeting notes "{query}"',
          description: "Completed label for the notion query_meeting_notes MCP tool with its search query.",
        },
        search_active: {
          id: "localConversation.mcpToolActivity.notion.search.active",
          defaultMessage: "Searching Notion",
          description: "Active label for the notion search MCP tool.",
        },
        search_completed: {
          id: "localConversation.mcpToolActivity.notion.search.completed",
          defaultMessage: "Searched Notion",
          description: "Completed label for the notion search MCP tool.",
        },
        update_data_source_active: {
          id: "localConversation.mcpToolActivity.notion.update_data_source.active",
          defaultMessage: "Updating data source",
          description: "Active label for the notion update_data_source MCP tool.",
        },
        update_data_source_activeWithTitle: {
          id: "localConversation.mcpToolActivity.notion.update_data_source.activeWithTitle",
          defaultMessage: 'Updating data source "{itemName}"',
          description: "Active label for the notion update_data_source MCP tool with its data source title.",
        },
        update_data_source_completed: {
          id: "localConversation.mcpToolActivity.notion.update_data_source.completed",
          defaultMessage: "Updated data source",
          description: "Completed label for the notion update_data_source MCP tool.",
        },
        update_data_source_completedWithTitle: {
          id: "localConversation.mcpToolActivity.notion.update_data_source.completedWithTitle",
          defaultMessage: 'Updated data source "{itemName}"',
          description: "Completed label for the notion update_data_source MCP tool with its data source title.",
        },
        update_page_active: {
          id: "localConversation.mcpToolActivity.notion.update_page.active",
          defaultMessage: "Updating page",
          description: "Active label for the notion update_page MCP tool.",
        },
        update_page_activeWithTitle: {
          id: "localConversation.mcpToolActivity.notion.update_page.activeWithTitle",
          defaultMessage: 'Updating page "{itemName}"',
          description: "Active label for the notion update_page MCP tool with its page title.",
        },
        update_page_completed: {
          id: "localConversation.mcpToolActivity.notion.update_page.completed",
          defaultMessage: "Updated page",
          description: "Completed label for the notion update_page MCP tool.",
        },
        update_page_completedWithTitle: {
          id: "localConversation.mcpToolActivity.notion.update_page.completedWithTitle",
          defaultMessage: 'Updated page "{itemName}"',
          description: "Completed label for the notion update_page MCP tool with its page title.",
        },
        update_view_active: {
          id: "localConversation.mcpToolActivity.notion.update_view.active",
          defaultMessage: "Updating view",
          description: "Active label for the notion update_view MCP tool.",
        },
        update_view_completed: {
          id: "localConversation.mcpToolActivity.notion.update_view.completed",
          defaultMessage: "Updated view",
          description: "Completed label for the notion update_view MCP tool.",
        },
        create_database_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.create_database.activeWithVariant1",
          defaultMessage: 'Creating database "{itemName}"',
          description: "Active label for the notion create_database MCP tool with invocation context.",
        },
        create_database_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.create_database.completedWithVariant1",
          defaultMessage: 'Created database "{itemName}"',
          description: "Completed label for the notion create_database MCP tool with invocation context.",
        },
        create_pages_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.create_pages.activeWithVariant1",
          defaultMessage: 'Creating pages "{itemName}"',
          description: "Active label for the notion create_pages MCP tool with invocation context.",
        },
        create_pages_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.create_pages.completedWithVariant1",
          defaultMessage: 'Created pages "{itemName}"',
          description: "Completed label for the notion create_pages MCP tool with invocation context.",
        },
        create_pages_activeWithVariant2: {
          id: "localConversation.mcpToolActivity.notion.create_pages.activeWithVariant2",
          defaultMessage: "Creating {itemCount, plural, one {a page} other {{itemCount, number} pages}}",
          description: "Active label for the notion create_pages MCP tool with invocation context.",
        },
        create_pages_completedWithVariant2: {
          id: "localConversation.mcpToolActivity.notion.create_pages.completedWithVariant2",
          defaultMessage: "Created {itemCount, plural, one {a page} other {{itemCount, number} pages}}",
          description: "Completed label for the notion create_pages MCP tool with invocation context.",
        },
        create_view_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.create_view.activeWithVariant1",
          defaultMessage: 'Creating view "{itemName}"',
          description: "Active label for the notion create_view MCP tool with invocation context.",
        },
        create_view_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.create_view.completedWithVariant1",
          defaultMessage: 'Created view "{itemName}"',
          description: "Completed label for the notion create_view MCP tool with invocation context.",
        },
        fetch_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.fetch.activeWithVariant1",
          defaultMessage: 'Fetching page "{itemName}"',
          description: "Active label for the notion fetch MCP tool with invocation context.",
        },
        fetch_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.fetch.completedWithVariant1",
          defaultMessage: 'Fetched page "{itemName}"',
          description: "Completed label for the notion fetch MCP tool with invocation context.",
        },
        query_data_sources_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.query_data_sources.activeWithVariant1",
          defaultMessage: 'Querying data sources "{query}"',
          description: "Active label for the notion query_data_sources MCP tool with invocation context.",
        },
        query_data_sources_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.query_data_sources.completedWithVariant1",
          defaultMessage: 'Queried data sources "{query}"',
          description: "Completed label for the notion query_data_sources MCP tool with invocation context.",
        },
        search_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.search.activeWithVariant1",
          defaultMessage: 'Searching Notion "{query}"',
          description: "Active label for the notion search MCP tool with invocation context.",
        },
        search_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.search.completedWithVariant1",
          defaultMessage: 'Searched Notion "{query}"',
          description: "Completed label for the notion search MCP tool with invocation context.",
        },
        update_view_activeWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.update_view.activeWithVariant1",
          defaultMessage: 'Updating view "{itemName}"',
          description: "Active label for the notion update_view MCP tool with invocation context.",
        },
        update_view_completedWithVariant1: {
          id: "localConversation.mcpToolActivity.notion.update_view.completedWithVariant1",
          defaultMessage: 'Updated view "{itemName}"',
          description: "Completed label for the notion update_view MCP tool with invocation context.",
        },
      }),
      e9 = (0, A.Ys)({
        appRegistryKey: "sites",
        getMessages: () => e3,
        toolArgumentsSchema: v.object({}).strip(),
        tools: {},
      }),
      e3 = (0, M.YK)({
        create_project_active: {
          id: "localConversation.mcpToolActivity.sites.create_project.active",
          defaultMessage: "Creating Sites project",
          description: "Active label for the Sites create_project MCP tool.",
        },
        create_project_completed: {
          id: "localConversation.mcpToolActivity.sites.create_project.completed",
          defaultMessage: "Created Sites project",
          description: "Completed label for the Sites create_project MCP tool.",
        },
        create_project_version_active: {
          id: "localConversation.mcpToolActivity.sites.create_project_version.active",
          defaultMessage: "Saving Sites version",
          description: "Active label for the Sites create_project_version MCP tool.",
        },
        create_project_version_completed: {
          id: "localConversation.mcpToolActivity.sites.create_project_version.completed",
          defaultMessage: "Saved Sites version",
          description: "Completed label for the Sites create_project_version MCP tool.",
        },
        create_site_active: {
          id: "localConversation.mcpToolActivity.sites.create_site.active",
          defaultMessage: "Creating site",
          description: "Active label for the Sites create_site MCP tool.",
        },
        create_site_completed: {
          id: "localConversation.mcpToolActivity.sites.create_site.completed",
          defaultMessage: "Created site",
          description: "Completed label for the Sites create_site MCP tool.",
        },
        create_source_repository_write_credential_active: {
          id: "localConversation.mcpToolActivity.sites.create_source_repository_write_credential.active",
          defaultMessage: "Creating source repository credential",
          description: "Active label for the Sites create_source_repository_write_credential MCP tool.",
        },
        create_source_repository_write_credential_completed: {
          id: "localConversation.mcpToolActivity.sites.create_source_repository_write_credential.completed",
          defaultMessage: "Created source repository credential",
          description: "Completed label for the Sites create_source_repository_write_credential MCP tool.",
        },
        deploy_private_site_version_active: {
          id: "localConversation.mcpToolActivity.sites.deploy_private_site_version.active",
          defaultMessage: "Deploying private site version",
          description: "Active label for the Sites deploy_private_site_version MCP tool.",
        },
        deploy_private_site_version_completed: {
          id: "localConversation.mcpToolActivity.sites.deploy_private_site_version.completed",
          defaultMessage: "Deployed private site version",
          description: "Completed label for the Sites deploy_private_site_version MCP tool.",
        },
        deploy_project_version_active: {
          id: "localConversation.mcpToolActivity.sites.deploy_project_version.active",
          defaultMessage: "Deploying Sites version",
          description: "Active label for the Sites deploy_project_version MCP tool.",
        },
        deploy_project_version_completed: {
          id: "localConversation.mcpToolActivity.sites.deploy_project_version.completed",
          defaultMessage: "Deployed Sites version",
          description: "Completed label for the Sites deploy_project_version MCP tool.",
        },
        deploy_site_version_active: {
          id: "localConversation.mcpToolActivity.sites.deploy_site_version.active",
          defaultMessage: "Deploying site version",
          description: "Active label for the Sites deploy_site_version MCP tool.",
        },
        deploy_site_version_completed: {
          id: "localConversation.mcpToolActivity.sites.deploy_site_version.completed",
          defaultMessage: "Deployed site version",
          description: "Completed label for the Sites deploy_site_version MCP tool.",
        },
        execute_database_update_active: {
          id: "localConversation.mcpToolActivity.sites.execute_database_update.active",
          defaultMessage: "Updating site data",
          description: "Active label for the Sites execute_database_update MCP tool.",
        },
        execute_database_update_completed: {
          id: "localConversation.mcpToolActivity.sites.execute_database_update.completed",
          defaultMessage: "Updated site data",
          description: "Completed label for the Sites execute_database_update MCP tool.",
        },
        generate_siwc_bypass_token_active: {
          id: "localConversation.mcpToolActivity.sites.generate_siwc_bypass_token.active",
          defaultMessage: "Generating sign-in bypass token",
          description: "Active label for the Sites generate_siwc_bypass_token MCP tool.",
        },
        generate_siwc_bypass_token_completed: {
          id: "localConversation.mcpToolActivity.sites.generate_siwc_bypass_token.completed",
          defaultMessage: "Generated sign-in bypass token",
          description: "Completed label for the Sites generate_siwc_bypass_token MCP tool.",
        },
        get_deployment_status_active: {
          id: "localConversation.mcpToolActivity.sites.get_deployment_status.active",
          defaultMessage: "Getting deployment status",
          description: "Active label for the Sites get_deployment_status MCP tool.",
        },
        get_deployment_status_completed: {
          id: "localConversation.mcpToolActivity.sites.get_deployment_status.completed",
          defaultMessage: "Got deployment status",
          description: "Completed label for the Sites get_deployment_status MCP tool.",
        },
        get_environment_active: {
          id: "localConversation.mcpToolActivity.sites.get_environment.active",
          defaultMessage: "Getting Sites environment",
          description: "Active label for the Sites get_environment MCP tool.",
        },
        get_environment_completed: {
          id: "localConversation.mcpToolActivity.sites.get_environment.completed",
          defaultMessage: "Got Sites environment",
          description: "Completed label for the Sites get_environment MCP tool.",
        },
        get_environment_variables_active: {
          id: "localConversation.mcpToolActivity.sites.get_environment_variables.active",
          defaultMessage: "Getting environment variables",
          description: "Active label for the Sites get_environment_variables MCP tool.",
        },
        get_environment_variables_completed: {
          id: "localConversation.mcpToolActivity.sites.get_environment_variables.completed",
          defaultMessage: "Got environment variables",
          description: "Completed label for the Sites get_environment_variables MCP tool.",
        },
        get_project_active: {
          id: "localConversation.mcpToolActivity.sites.get_project.active",
          defaultMessage: "Getting Sites project",
          description: "Active label for the Sites get_project MCP tool.",
        },
        get_project_completed: {
          id: "localConversation.mcpToolActivity.sites.get_project.completed",
          defaultMessage: "Got Sites project",
          description: "Completed label for the Sites get_project MCP tool.",
        },
        get_project_deployment_active: {
          id: "localConversation.mcpToolActivity.sites.get_project_deployment.active",
          defaultMessage: "Getting Sites deployment",
          description: "Active label for the Sites get_project_deployment MCP tool.",
        },
        get_project_deployment_completed: {
          id: "localConversation.mcpToolActivity.sites.get_project_deployment.completed",
          defaultMessage: "Got Sites deployment",
          description: "Completed label for the Sites get_project_deployment MCP tool.",
        },
        get_project_version_active: {
          id: "localConversation.mcpToolActivity.sites.get_project_version.active",
          defaultMessage: "Getting Sites version",
          description: "Active label for the Sites get_project_version MCP tool.",
        },
        get_project_version_completed: {
          id: "localConversation.mcpToolActivity.sites.get_project_version.completed",
          defaultMessage: "Got Sites version",
          description: "Completed label for the Sites get_project_version MCP tool.",
        },
        get_site_active: {
          id: "localConversation.mcpToolActivity.sites.get_site.active",
          defaultMessage: "Getting site",
          description: "Active label for the Sites get_site MCP tool.",
        },
        get_site_completed: {
          id: "localConversation.mcpToolActivity.sites.get_site.completed",
          defaultMessage: "Got site",
          description: "Completed label for the Sites get_site MCP tool.",
        },
        get_site_version_active: {
          id: "localConversation.mcpToolActivity.sites.get_site_version.active",
          defaultMessage: "Getting site version",
          description: "Active label for the Sites get_site_version MCP tool.",
        },
        get_site_version_completed: {
          id: "localConversation.mcpToolActivity.sites.get_site_version.completed",
          defaultMessage: "Got site version",
          description: "Completed label for the Sites get_site_version MCP tool.",
        },
        get_site_worker_logs_active: {
          id: "localConversation.mcpToolActivity.sites.get_site_worker_logs.active",
          defaultMessage: "Getting site worker logs",
          description: "Active label for the Sites get_site_worker_logs MCP tool.",
        },
        get_site_worker_logs_completed: {
          id: "localConversation.mcpToolActivity.sites.get_site_worker_logs.completed",
          defaultMessage: "Got site worker logs",
          description: "Completed label for the Sites get_site_worker_logs MCP tool.",
        },
        list_access_groups_active: {
          id: "localConversation.mcpToolActivity.sites.list_access_groups.active",
          defaultMessage: "Listing access groups",
          description: "Active label for the Sites list_access_groups MCP tool.",
        },
        list_access_groups_completed: {
          id: "localConversation.mcpToolActivity.sites.list_access_groups.completed",
          defaultMessage: "Listed access groups",
          description: "Completed label for the Sites list_access_groups MCP tool.",
        },
        list_available_access_groups_active: {
          id: "localConversation.mcpToolActivity.sites.list_available_access_groups.active",
          defaultMessage: "Listing access groups",
          description: "Active label for the Sites list_available_access_groups MCP tool.",
        },
        list_available_access_groups_completed: {
          id: "localConversation.mcpToolActivity.sites.list_available_access_groups.completed",
          defaultMessage: "Listed access groups",
          description: "Completed label for the Sites list_available_access_groups MCP tool.",
        },
        list_projects_active: {
          id: "localConversation.mcpToolActivity.sites.list_projects.active",
          defaultMessage: "Listing Sites projects",
          description: "Active label for the Sites list_projects MCP tool.",
        },
        list_projects_completed: {
          id: "localConversation.mcpToolActivity.sites.list_projects.completed",
          defaultMessage: "Listed Sites projects",
          description: "Completed label for the Sites list_projects MCP tool.",
        },
        list_site_versions_active: {
          id: "localConversation.mcpToolActivity.sites.list_site_versions.active",
          defaultMessage: "Listing site versions",
          description: "Active label for the Sites list_site_versions MCP tool.",
        },
        list_site_versions_completed: {
          id: "localConversation.mcpToolActivity.sites.list_site_versions.completed",
          defaultMessage: "Listed site versions",
          description: "Completed label for the Sites list_site_versions MCP tool.",
        },
        list_sites_active: {
          id: "localConversation.mcpToolActivity.sites.list_sites.active",
          defaultMessage: "Listing sites",
          description: "Active label for the Sites list_sites MCP tool.",
        },
        list_sites_completed: {
          id: "localConversation.mcpToolActivity.sites.list_sites.completed",
          defaultMessage: "Listed sites",
          description: "Completed label for the Sites list_sites MCP tool.",
        },
        prepare_database_update_active: {
          id: "localConversation.mcpToolActivity.sites.prepare_database_update.active",
          defaultMessage: "Preparing site data update",
          description: "Active label for the Sites prepare_database_update MCP tool.",
        },
        prepare_database_update_completed: {
          id: "localConversation.mcpToolActivity.sites.prepare_database_update.completed",
          defaultMessage: "Prepared site data update",
          description: "Completed label for the Sites prepare_database_update MCP tool.",
        },
        read_database_overview_active: {
          id: "localConversation.mcpToolActivity.sites.read_database_overview.active",
          defaultMessage: "Checking site data",
          description: "Active label for the Sites read_database_overview MCP tool.",
        },
        read_database_overview_completed: {
          id: "localConversation.mcpToolActivity.sites.read_database_overview.completed",
          defaultMessage: "Checked site data",
          description: "Completed label for the Sites read_database_overview MCP tool.",
        },
        read_database_table_rows_active: {
          id: "localConversation.mcpToolActivity.sites.read_database_table_rows.active",
          defaultMessage: "Reading site data",
          description: "Active label for the Sites read_database_table_rows MCP tool.",
        },
        read_database_table_rows_completed: {
          id: "localConversation.mcpToolActivity.sites.read_database_table_rows.completed",
          defaultMessage: "Read site data",
          description: "Completed label for the Sites read_database_table_rows MCP tool.",
        },
        execute_database_delete_active: {
          id: "localConversation.mcpToolActivity.sites.execute_database_delete.active",
          defaultMessage: "Deleting site data",
          description: "Activity label shown while Sites permanently deletes one approved database row.",
        },
        execute_database_delete_completed: {
          id: "localConversation.mcpToolActivity.sites.execute_database_delete.completed",
          defaultMessage: "Deleted site data",
          description: "Completed activity label shown after Sites permanently deletes one approved database row.",
        },
        execute_database_insert_active: {
          id: "localConversation.mcpToolActivity.sites.execute_database_insert.active",
          defaultMessage: "Adding site data",
          description: "Activity label shown while Sites adds one approved row to a site database.",
        },
        execute_database_insert_completed: {
          id: "localConversation.mcpToolActivity.sites.execute_database_insert.completed",
          defaultMessage: "Added site data",
          description: "Completed activity label shown after Sites adds one approved row to a site database.",
        },
        prepare_database_delete_active: {
          id: "localConversation.mcpToolActivity.sites.prepare_database_delete.active",
          defaultMessage: "Preparing to delete site data",
          description: "Activity label shown while Sites prepares a one-row database deletion for the user to review.",
        },
        prepare_database_delete_completed: {
          id: "localConversation.mcpToolActivity.sites.prepare_database_delete.completed",
          defaultMessage: "Prepared to delete site data",
          description:
            "Completed activity label shown after Sites prepares a one-row database deletion for the user to review.",
        },
        prepare_database_insert_active: {
          id: "localConversation.mcpToolActivity.sites.prepare_database_insert.active",
          defaultMessage: "Preparing to add site data",
          description: "Activity label shown while Sites prepares a one-row database insertion for the user to review.",
        },
        prepare_database_insert_completed: {
          id: "localConversation.mcpToolActivity.sites.prepare_database_insert.completed",
          defaultMessage: "Prepared to add site data",
          description:
            "Completed activity label shown after Sites prepares a one-row database insertion for the user to review.",
        },
        save_site_version_active: {
          id: "localConversation.mcpToolActivity.sites.save_site_version.active",
          defaultMessage: "Saving site version",
          description: "Active label for the Sites save_site_version MCP tool.",
        },
        save_site_version_completed: {
          id: "localConversation.mcpToolActivity.sites.save_site_version.completed",
          defaultMessage: "Saved site version",
          description: "Completed label for the Sites save_site_version MCP tool.",
        },
        update_access_active: {
          id: "localConversation.mcpToolActivity.sites.update_access.active",
          defaultMessage: "Updating Sites access",
          description: "Active label for the Sites update_access MCP tool.",
        },
        update_access_completed: {
          id: "localConversation.mcpToolActivity.sites.update_access.completed",
          defaultMessage: "Updated Sites access",
          description: "Completed label for the Sites update_access MCP tool.",
        },
        update_environment_active: {
          id: "localConversation.mcpToolActivity.sites.update_environment.active",
          defaultMessage: "Updating Sites environment",
          description: "Active label for the Sites update_environment MCP tool.",
        },
        update_environment_completed: {
          id: "localConversation.mcpToolActivity.sites.update_environment.completed",
          defaultMessage: "Updated Sites environment",
          description: "Completed label for the Sites update_environment MCP tool.",
        },
        update_environment_variables_active: {
          id: "localConversation.mcpToolActivity.sites.update_environment_variables.active",
          defaultMessage: "Updating environment variables",
          description: "Active label for the Sites update_environment_variables MCP tool.",
        },
        update_environment_variables_completed: {
          id: "localConversation.mcpToolActivity.sites.update_environment_variables.completed",
          defaultMessage: "Updated environment variables",
          description: "Completed label for the Sites update_environment_variables MCP tool.",
        },
        update_site_access_active: {
          id: "localConversation.mcpToolActivity.sites.update_site_access.active",
          defaultMessage: "Updating site access",
          description: "Active label for the Sites update_site_access MCP tool.",
        },
        update_site_access_completed: {
          id: "localConversation.mcpToolActivity.sites.update_site_access.completed",
          defaultMessage: "Updated site access",
          description: "Completed label for the Sites update_site_access MCP tool.",
        },
        update_site_metadata_active: {
          id: "localConversation.mcpToolActivity.sites.update_site_metadata.active",
          defaultMessage: "Updating site metadata",
          description: "Active label for the Sites update_site_metadata MCP tool.",
        },
        update_site_metadata_completed: {
          id: "localConversation.mcpToolActivity.sites.update_site_metadata.completed",
          defaultMessage: "Updated site metadata",
          description: "Completed label for the Sites update_site_metadata MCP tool.",
        },
      }),
      e8 = v
        .union([
          v.string().trim().min(1).max(5e3),
          v
            .object({
              markdown_text: v
                .string()
                .trim()
                .min(1)
                .max(5e3)
                .optional()
                .catch(void 0),
              text: v
                .string()
                .trim()
                .min(1)
                .max(5e3)
                .optional()
                .catch(void 0),
            })
            .strip()
            .transform(({ markdown_text: e, text: t }) => e ?? t),
        ])
        .optional()
        .catch(void 0),
      e6 = v
        .object({
          channel_name: v
            .string()
            .trim()
            .min(1)
            .max(80)
            .optional()
            .catch(void 0),
          content_types: v
            .string()
            .trim()
            .min(1)
            .max(64)
            .optional()
            .catch(void 0),
          conversation_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          emoji: v
            .string()
            .trim()
            .min(1)
            .max(100)
            .optional()
            .catch(void 0),
          filename: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          initial_comment: v
            .string()
            .trim()
            .min(1)
            .max(5e3)
            .optional()
            .catch(void 0),
          is_private: v
            .boolean()
            .optional()
            .catch(void 0),
          limit: v
            .number()
            .int()
            .positive()
            .optional()
            .catch(void 0),
          message: e8,
          post_at: v
            .number()
            .int()
            .nonnegative()
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          source_file: v
            .object({
              file_name: v
                .string()
                .trim()
                .min(1)
                .max(200)
                .optional()
                .catch(void 0),
            })
            .strip()
            .optional()
            .catch(void 0),
          title: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          user_id: v
            .string()
            .trim()
            .min(1)
            .max(32)
            .optional()
            .catch(void 0),
        })
        .loose(),
      e7 = v.object({ text: v.string(), type: v.literal("text") }).loose(),
      te = v
        .object({
          content: v
            .array(e7)
            .optional()
            .catch(void 0),
          raw: v
            .object({
              content: v
                .array(e7)
                .optional()
                .catch(void 0),
            })
            .loose()
            .optional()
            .catch(void 0),
          type: v.literal("success"),
        })
        .loose(),
      tt = {
        add_reaction: (0, A.Jw)(
          () => ({ active: tn.add_reaction_active, completed: tn.add_reaction_completed }),
          (e) =>
            tl({
              fallback: tn.add_reaction_approval,
              value: e?.emoji,
              withItemName: tn.add_reaction_approvalWithEmoji,
            }),
        ),
        complete_file_upload: (0, A.Jw)(
          () => ({ active: tn.complete_file_upload_active, completed: tn.complete_file_upload_completed }),
          function (e) {
            let t = ti(e?.filename ?? e?.title ?? e?.source_file?.file_name)
            if (null == t) return { descriptor: tn.complete_file_upload_approval }
            let o = ti(e?.initial_comment)
            return null == o
              ? { descriptor: tn.complete_file_upload_approvalWithItemName, values: { itemName: t } }
              : {
                  descriptor: tn.complete_file_upload_approvalWithItemNameAndComment,
                  values: { initialComment: o, itemName: t },
                }
          },
        ),
        create_canvas: (0, A.PM)({
          getItemName: (e) => e.title,
          getMessages: () => (0, A.vP)(tn, "create_canvas", "WithContext"),
          maxPreviewLength: 36,
          approval: (e) =>
            tl({
              fallback: tn.create_canvas_approval,
              value: e?.title,
              withItemName: tn.create_canvas_approvalWithItemName,
            }),
        }),
        create_conversation: (0, A.Jw)(
          () => ({ active: tn.create_conversation_active, completed: tn.create_conversation_completed }),
          function (e) {
            return tl({
              fallback: tn.create_conversation_approval,
              value: e?.channel_name,
              withItemName:
                e?.is_private === !0
                  ? tn.create_conversation_approvalWithPrivateChannel
                  : tn.create_conversation_approvalWithPublicChannel,
            })
          },
        ),
        delete_message: (0, A.Jw)(
          () => ({ active: tn.delete_message_active, completed: tn.delete_message_completed }),
          () => ({ descriptor: tn.delete_message_approval }),
        ),
        edit_message: (0, A.Jw)(
          () => ({ active: tn.edit_message_active, completed: tn.edit_message_completed }),
          (e) =>
            tl({
              fallback: tn.edit_message_approval,
              value: e?.message,
              withItemName: tn.edit_message_approvalWithMessage,
            }),
        ),
        get_file_upload_url: (0, A.Jw)(
          () => ({ active: tn.get_file_upload_url_active, completed: tn.get_file_upload_url_completed }),
          (e) =>
            tl({
              fallback: tn.get_file_upload_url_approval,
              value: e?.filename,
              withItemName: tn.get_file_upload_url_approvalWithItemName,
            }),
        ),
        invite_to_conversation: (0, A.Jw)(
          () => ({ active: tn.invite_to_conversation_active, completed: tn.invite_to_conversation_completed }),
          () => ({ descriptor: tn.invite_to_conversation_approval }),
        ),
        join_conversation: (0, A.Jw)(
          () => ({ active: tn.join_conversation_active, completed: tn.join_conversation_completed }),
          () => ({ descriptor: tn.join_conversation_approval }),
        ),
        leave_conversation: (0, A.Jw)(
          () => ({ active: tn.leave_conversation_active, completed: tn.leave_conversation_completed }),
          () => ({ descriptor: tn.leave_conversation_approval }),
        ),
        read_channel: (0, A.v9)({
          getMessages: () => ({
            completedCount: tn.read_channel_completedCount,
            withoutContext: { active: tn.read_channel_active, completed: tn.read_channel_completed },
            withContext: { active: tn.read_channel_activeWithContext, completed: tn.read_channel_completedWithContext },
          }),
          preferredKeys: ["messages"],
        }),
        read_thread: (0, A.v9)({
          getMessages: () => ({
            completedCount: tn.read_thread_completedCount,
            withoutContext: { active: tn.read_thread_active, completed: tn.read_thread_completed },
            withContext: { active: tn.read_thread_activeWithContext, completed: tn.read_thread_completedWithContext },
          }),
          preferredKeys: ["replies", "messages"],
        }),
        read_user_profile:
          ((_ = () => ({
            withoutContext: { active: tn.read_user_profile_active, completed: tn.read_user_profile_completed },
            withContext: {
              active: tn.read_user_profile_activeWithContext,
              completed: tn.read_user_profile_completedWithContext,
            },
          })),
          (0, A._p)({
            getMessages: _,
            getValues: ({ hasInvocationContext: e, toolArguments: t }) =>
              e && null != t && null == t.user_id ? {} : null,
          })),
        remove_reaction: (0, A.Jw)(
          () => ({ active: tn.remove_reaction_active, completed: tn.remove_reaction_completed }),
          (e) =>
            tl({
              fallback: tn.remove_reaction_approval,
              value: e?.emoji,
              withItemName: tn.remove_reaction_approvalWithEmoji,
            }),
        ),
        schedule_message: (0, A.PM)({
          getItemName: (e) => e.message,
          getMessages: () => (0, A.vP)(tn, "schedule_message", "WithContext"),
          maxPreviewLength: 36,
          approval: function (e) {
            let t = ti(e?.message)
            return null == t || e?.post_at == null
              ? { descriptor: tn.schedule_message_approval }
              : {
                  descriptor: tn.schedule_message_approvalWithTime,
                  values: { itemName: t, scheduledTime: 1e3 * e.post_at },
                }
          },
        }),
        search_channels: ts({
          getMessages: () => (0, A.vP)(tn, "search_channels", "WithContext"),
          getTarget: () => "channels",
        }),
        search_public: ts({ getMessages: () => (0, A.vP)(tn, "search_public", "WithContext"), getTarget: tc }),
        search_public_and_private: ts({
          getMessages: () => (0, A.vP)(tn, "search_public", "WithContext"),
          getTarget: tc,
        }),
        search_users: ts({ getMessages: () => (0, A.vP)(tn, "search_users", "WithContext"), getTarget: () => "users" }),
        send_message: (0, A.PM)({
          getItemName: (e) => e.message,
          getMessages: () => (0, A.vP)(tn, "send_message", "WithContext"),
          maxPreviewLength: 36,
          approval: function (e) {
            let t = ti(e?.message)
            if (null == t) return { descriptor: tn.send_message_approval }
            let o = ti(e?.conversation_name)
            return null == o
              ? { descriptor: tn.send_message_approvalWithItemName, values: { itemName: t } }
              : { descriptor: tn.send_message_approvalWithConversation, values: { conversationName: o, itemName: t } }
          },
        }),
        send_message_draft: (0, A.PM)({
          getItemName: (e) => e.message,
          getMessages: () => (0, A.vP)(tn, "send_message_draft", "WithContext"),
          maxPreviewLength: 36,
          approval: (e) =>
            tl({
              fallback: tn.send_message_draft_approval,
              value: e?.message,
              withItemName: tn.send_message_draft_approvalWithItemName,
            }),
        }),
        update_canvas: (0, A.Jw)(
          () => ({ active: tn.update_canvas_active, completed: tn.update_canvas_completed }),
          () => ({ descriptor: tn.update_canvas_approval }),
        ),
      },
      to = (0, A.Ys)({ appRegistryKey: "slack", getMessages: () => tn, toolArgumentsSchema: e6, tools: tt }),
      ta = (0, A.mg)({ toolArgumentsSchema: e6, tools: tt })
    function ti(e) {
      return (0, A.kF)({ maxLength: 36, value: e })
    }
    function tl({ fallback: e, value: t, withItemName: o }) {
      let a = ti(t)
      return null == a ? { descriptor: e } : { descriptor: o, values: { itemName: a } }
    }
    function ts({ getMessages: e, getTarget: t }) {
      return (0, A._p)({
        getMessages: e,
        getValues: ({ hasInvocationContext: e, toolArguments: o, toolResult: a }) => {
          if (!e || null == o) return null
          let i = (function ({ query: e, toolResult: t }) {
            if (null == e) return null
            let o = /<@[UW][A-Z0-9]+>/.test(e)
                ? (function (e) {
                    let t = te.safeParse(e),
                      o = new Map()
                    if (!t.success) return o
                    for (let e of [...(t.data.content ?? []), ...(t.data.raw?.content ?? [])])
                      for (let t of e.text.matchAll(/From:\s*([^\n(]+?)\s*\(ID:\s*([UW][A-Z0-9]+)\)/g))
                        o.set(t[2], t[1].trim())
                    return o
                  })(t)
                : null,
              a = !1,
              i = e
                .replace(/\b(from|in|to):<@([UW][A-Z0-9]+)(?:\|([^>]+))?>/g, (e, t, i, l) => {
                  let s = null != l ? `@${l}` : o?.get(i)
                  return null == s ? ((a = !0), `${t}:${i}`) : `${t}:${s}`
                })
                .replace(/<@([UW][A-Z0-9]+)(?:\|([^>]+))?>/g, (e, t, i) => {
                  if (null != i) return `@${i}`
                  let l = o?.get(t)
                  return null == l ? ((a = !0), t) : l
                })
                .replace(/"([^"]+)"/g, "$1")
            return a ? null : (0, A.kF)({ maxLength: 36, value: i })
          })({ query: o.query, toolResult: a })
          return null == i ? null : { query: i, target: t(o) }
        },
      })
    }
    function tc({ content_types: e }) {
      let t =
        e
          ?.split(",")
          .map((e) => e.trim().toLowerCase())
          .filter((e) => e.length > 0) ?? []
      return 1 === t.length && "files" === t[0]
        ? "files"
        : 2 === t.length && t.includes("files") && t.includes("messages")
          ? "messagesAndFiles"
          : "messages"
    }
    let tn = (0, M.YK)({
        add_reaction_approval: {
          id: "localConversation.mcpToolApproval.slack.add_reaction.fallback",
          defaultMessage: "Allow Slack to add a reaction?",
          description: "Approval request for adding a Slack emoji reaction.",
        },
        add_reaction_approvalWithEmoji: {
          id: "localConversation.mcpToolApproval.slack.add_reaction.emoji",
          defaultMessage: "Allow Slack to add the :{itemName}: reaction?",
          description: "Approval request for adding a Slack reaction, including its emoji name.",
        },
        complete_file_upload_approval: {
          id: "localConversation.mcpToolApproval.slack.complete_file_upload.fallback",
          defaultMessage: "Allow Slack to complete a file upload?",
          description: "Approval request for completing a Slack file upload.",
        },
        complete_file_upload_approvalWithItemName: {
          id: "localConversation.mcpToolApproval.slack.complete_file_upload.itemName",
          defaultMessage: 'Allow Slack to upload "{itemName}"?',
          description: "Approval request for uploading a named file to Slack.",
        },
        complete_file_upload_approvalWithItemNameAndComment: {
          id: "localConversation.mcpToolApproval.slack.complete_file_upload.itemNameAndComment",
          defaultMessage: 'Allow Slack to upload "{itemName}" with the comment "{initialComment}"?',
          description: "Approval request for uploading a named file to Slack with an initial comment.",
        },
        create_canvas_approval: {
          id: "localConversation.mcpToolApproval.slack.create_canvas.fallback",
          defaultMessage: "Allow Slack to create a canvas?",
          description: "Approval request for creating a Slack canvas.",
        },
        create_canvas_approvalWithItemName: {
          id: "localConversation.mcpToolApproval.slack.create_canvas.itemName",
          defaultMessage: 'Allow Slack to create canvas "{itemName}"?',
          description: "Approval request for creating a Slack canvas with its human-readable title.",
        },
        create_conversation_approval: {
          id: "localConversation.mcpToolApproval.slack.create_conversation.fallback",
          defaultMessage: "Allow Slack to create a conversation?",
          description: "Approval request for creating a Slack conversation.",
        },
        create_conversation_approvalWithPrivateChannel: {
          id: "localConversation.mcpToolApproval.slack.create_conversation.privateChannel",
          defaultMessage: "Allow Slack to create the private channel #{itemName}?",
          description: "Approval request for creating a named private Slack channel.",
        },
        create_conversation_approvalWithPublicChannel: {
          id: "localConversation.mcpToolApproval.slack.create_conversation.publicChannel",
          defaultMessage: "Allow Slack to create the public channel #{itemName}?",
          description: "Approval request for creating a named public Slack channel.",
        },
        delete_message_approval: {
          id: "localConversation.mcpToolApproval.slack.delete_message.fallback",
          defaultMessage: "Allow Slack to delete a message?",
          description: "Approval request for deleting a Slack message.",
        },
        edit_message_approval: {
          id: "localConversation.mcpToolApproval.slack.edit_message.fallback",
          defaultMessage: "Allow Slack to edit a message?",
          description: "Approval request for editing a Slack message.",
        },
        edit_message_approvalWithMessage: {
          id: "localConversation.mcpToolApproval.slack.edit_message.message",
          defaultMessage: 'Allow Slack to edit a message to "{itemName}"?',
          description: "Approval request for editing a Slack message, including the new readable message text.",
        },
        get_file_upload_url_approval: {
          id: "localConversation.mcpToolApproval.slack.get_file_upload_url.fallback",
          defaultMessage: "Allow Slack to prepare a file for upload?",
          description: "Approval request for preparing a Slack file upload.",
        },
        get_file_upload_url_approvalWithItemName: {
          id: "localConversation.mcpToolApproval.slack.get_file_upload_url.itemName",
          defaultMessage: 'Allow Slack to prepare "{itemName}" for upload?',
          description: "Approval request for preparing a named file for upload to Slack.",
        },
        invite_to_conversation_approval: {
          id: "localConversation.mcpToolApproval.slack.invite_to_conversation.fallback",
          defaultMessage: "Allow Slack to invite people to a conversation?",
          description: "Approval request for inviting people to a Slack conversation.",
        },
        join_conversation_approval: {
          id: "localConversation.mcpToolApproval.slack.join_conversation.fallback",
          defaultMessage: "Allow Slack to join a conversation?",
          description: "Approval request for joining a Slack conversation.",
        },
        leave_conversation_approval: {
          id: "localConversation.mcpToolApproval.slack.leave_conversation.fallback",
          defaultMessage: "Allow Slack to leave a conversation?",
          description: "Approval request for leaving a Slack conversation.",
        },
        remove_reaction_approval: {
          id: "localConversation.mcpToolApproval.slack.remove_reaction.fallback",
          defaultMessage: "Allow Slack to remove a reaction?",
          description: "Approval request for removing a Slack emoji reaction.",
        },
        remove_reaction_approvalWithEmoji: {
          id: "localConversation.mcpToolApproval.slack.remove_reaction.emoji",
          defaultMessage: "Allow Slack to remove the :{itemName}: reaction?",
          description: "Approval request for removing a Slack reaction, including its emoji name.",
        },
        schedule_message_approval: {
          id: "localConversation.mcpToolApproval.slack.schedule_message.fallback",
          defaultMessage: "Allow Slack to schedule a message?",
          description: "Approval request for scheduling a Slack message.",
        },
        schedule_message_approvalWithTime: {
          id: "localConversation.mcpToolApproval.slack.schedule_message.itemNameAndTime",
          defaultMessage:
            'Allow Slack to schedule "{itemName}" for {scheduledTime, date, medium} at {scheduledTime, time, short}?',
          description:
            "Approval request for scheduling a Slack message with its readable message preview and localized delivery date and time.",
        },
        send_message_approval: {
          id: "localConversation.mcpToolApproval.slack.send_message.fallback",
          defaultMessage: "Allow Slack to send a message?",
          description: "Approval request for sending a Slack message.",
        },
        send_message_approvalWithItemName: {
          id: "localConversation.mcpToolApproval.slack.send_message.itemName",
          defaultMessage: 'Allow Slack to send message "{itemName}"?',
          description: "Approval request for sending a Slack message with a readable message preview.",
        },
        send_message_approvalWithConversation: {
          id: "localConversation.mcpToolApproval.slack.send_message.itemNameAndConversation",
          defaultMessage: 'Allow Slack to send "{itemName}" to {conversationName}?',
          description:
            "Approval request for sending a Slack message with its readable message preview and channel, direct-message recipient, or group conversation name.",
        },
        send_message_draft_approval: {
          id: "localConversation.mcpToolApproval.slack.send_message_draft.fallback",
          defaultMessage: "Allow Slack to create a message draft?",
          description: "Approval request for creating a Slack message draft.",
        },
        send_message_draft_approvalWithItemName: {
          id: "localConversation.mcpToolApproval.slack.send_message_draft.itemName",
          defaultMessage: 'Allow Slack to create message draft "{itemName}"?',
          description: "Approval request for creating a Slack message draft with a readable message preview.",
        },
        update_canvas_approval: {
          id: "localConversation.mcpToolApproval.slack.update_canvas.fallback",
          defaultMessage: "Allow Slack to update a canvas?",
          description: "Approval request for updating a Slack canvas.",
        },
        add_reaction_active: {
          id: "localConversation.mcpToolActivity.slack.add_reaction.active",
          defaultMessage: "Adding reaction",
          description: "Active label for the Slack add_reaction MCP tool.",
        },
        add_reaction_completed: {
          id: "localConversation.mcpToolActivity.slack.add_reaction.completed",
          defaultMessage: "Added reaction",
          description: "Completed label for the Slack add_reaction MCP tool.",
        },
        complete_file_upload_active: {
          id: "localConversation.mcpToolActivity.slack.complete_file_upload.active",
          defaultMessage: "Completing file upload",
          description: "Active label for the Slack complete_file_upload MCP tool.",
        },
        complete_file_upload_completed: {
          id: "localConversation.mcpToolActivity.slack.complete_file_upload.completed",
          defaultMessage: "Completed file upload",
          description: "Completed label for the Slack complete_file_upload MCP tool.",
        },
        create_canvas_active: {
          id: "localConversation.mcpToolActivity.slack.create_canvas.active",
          defaultMessage: "Creating canvas",
          description: "Active label for the Slack create_canvas MCP tool.",
        },
        create_canvas_completed: {
          id: "localConversation.mcpToolActivity.slack.create_canvas.completed",
          defaultMessage: "Created canvas",
          description: "Completed label for the Slack create_canvas MCP tool.",
        },
        create_canvas_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.create_canvas.activeWithContext",
          defaultMessage: 'Creating canvas "{itemName}"',
          description: "Active label for the Slack create_canvas MCP tool with a canvas title.",
        },
        create_canvas_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.create_canvas.completedWithContext",
          defaultMessage: 'Created canvas "{itemName}"',
          description: "Completed label for the Slack create_canvas MCP tool with a canvas title.",
        },
        create_conversation_active: {
          id: "localConversation.mcpToolActivity.slack.create_conversation.active",
          defaultMessage: "Creating conversation",
          description: "Active label for the Slack create_conversation MCP tool.",
        },
        create_conversation_completed: {
          id: "localConversation.mcpToolActivity.slack.create_conversation.completed",
          defaultMessage: "Created conversation",
          description: "Completed label for the Slack create_conversation MCP tool.",
        },
        create_reminder_active: {
          id: "localConversation.mcpToolActivity.slack.create_reminder.active",
          defaultMessage: "Creating reminder",
          description: "Active label for the Slack create_reminder MCP tool.",
        },
        create_reminder_completed: {
          id: "localConversation.mcpToolActivity.slack.create_reminder.completed",
          defaultMessage: "Created reminder",
          description: "Completed label for the Slack create_reminder MCP tool.",
        },
        delete_message_active: {
          id: "localConversation.mcpToolActivity.slack.delete_message.active",
          defaultMessage: "Deleting message",
          description: "Active label for the Slack delete_message MCP tool.",
        },
        delete_message_completed: {
          id: "localConversation.mcpToolActivity.slack.delete_message.completed",
          defaultMessage: "Deleted message",
          description: "Completed label for the Slack delete_message MCP tool.",
        },
        edit_message_active: {
          id: "localConversation.mcpToolActivity.slack.edit_message.active",
          defaultMessage: "Editing message",
          description: "Active label for the Slack edit_message MCP tool.",
        },
        edit_message_completed: {
          id: "localConversation.mcpToolActivity.slack.edit_message.completed",
          defaultMessage: "Edited message",
          description: "Completed label for the Slack edit_message MCP tool.",
        },
        get_file_upload_url_active: {
          id: "localConversation.mcpToolActivity.slack.get_file_upload_url.active",
          defaultMessage: "Getting file upload URL",
          description: "Active label for the Slack get_file_upload_url MCP tool.",
        },
        get_file_upload_url_completed: {
          id: "localConversation.mcpToolActivity.slack.get_file_upload_url.completed",
          defaultMessage: "Got file upload URL",
          description: "Completed label for the Slack get_file_upload_url MCP tool.",
        },
        get_reactions_active: {
          id: "localConversation.mcpToolActivity.slack.get_reactions.active",
          defaultMessage: "Getting reactions",
          description: "Active label for the Slack get_reactions MCP tool.",
        },
        get_reactions_completed: {
          id: "localConversation.mcpToolActivity.slack.get_reactions.completed",
          defaultMessage: "Got reactions",
          description: "Completed label for the Slack get_reactions MCP tool.",
        },
        invite_to_conversation_active: {
          id: "localConversation.mcpToolActivity.slack.invite_to_conversation.active",
          defaultMessage: "Inviting people to conversation",
          description: "Active label for the Slack invite_to_conversation MCP tool.",
        },
        invite_to_conversation_completed: {
          id: "localConversation.mcpToolActivity.slack.invite_to_conversation.completed",
          defaultMessage: "Invited people to conversation",
          description: "Completed label for the Slack invite_to_conversation MCP tool.",
        },
        join_conversation_active: {
          id: "localConversation.mcpToolActivity.slack.join_conversation.active",
          defaultMessage: "Joining conversation",
          description: "Active label for the Slack join_conversation MCP tool.",
        },
        join_conversation_completed: {
          id: "localConversation.mcpToolActivity.slack.join_conversation.completed",
          defaultMessage: "Joined conversation",
          description: "Completed label for the Slack join_conversation MCP tool.",
        },
        leave_conversation_active: {
          id: "localConversation.mcpToolActivity.slack.leave_conversation.active",
          defaultMessage: "Leaving conversation",
          description: "Active label for the Slack leave_conversation MCP tool.",
        },
        leave_conversation_completed: {
          id: "localConversation.mcpToolActivity.slack.leave_conversation.completed",
          defaultMessage: "Left conversation",
          description: "Completed label for the Slack leave_conversation MCP tool.",
        },
        list_channel_members_active: {
          id: "localConversation.mcpToolActivity.slack.list_channel_members.active",
          defaultMessage: "Listing channel members",
          description: "Active label for the Slack list_channel_members MCP tool.",
        },
        list_channel_members_completed: {
          id: "localConversation.mcpToolActivity.slack.list_channel_members.completed",
          defaultMessage: "Listed channel members",
          description: "Completed label for the Slack list_channel_members MCP tool.",
        },
        list_starred_items_active: {
          id: "localConversation.mcpToolActivity.slack.list_starred_items.active",
          defaultMessage: "Listing starred items",
          description: "Active label for the Slack list_starred_items MCP tool.",
        },
        list_starred_items_completed: {
          id: "localConversation.mcpToolActivity.slack.list_starred_items.completed",
          defaultMessage: "Listed starred items",
          description: "Completed label for the Slack list_starred_items MCP tool.",
        },
        list_user_conversations_active: {
          id: "localConversation.mcpToolActivity.slack.list_user_conversations.active",
          defaultMessage: "Listing conversations",
          description: "Active label for the Slack list_user_conversations MCP tool.",
        },
        list_user_conversations_completed: {
          id: "localConversation.mcpToolActivity.slack.list_user_conversations.completed",
          defaultMessage: "Listed conversations",
          description: "Completed label for the Slack list_user_conversations MCP tool.",
        },
        list_user_groups_active: {
          id: "localConversation.mcpToolActivity.slack.list_user_groups.active",
          defaultMessage: "Listing user groups",
          description: "Active label for the Slack list_user_groups MCP tool.",
        },
        list_user_groups_completed: {
          id: "localConversation.mcpToolActivity.slack.list_user_groups.completed",
          defaultMessage: "Listed user groups",
          description: "Completed label for the Slack list_user_groups MCP tool.",
        },
        list_workspaces_active: {
          id: "localConversation.mcpToolActivity.slack.list_workspaces.active",
          defaultMessage: "Listing workspaces",
          description: "Active label for the Slack list_workspaces MCP tool.",
        },
        list_workspaces_completed: {
          id: "localConversation.mcpToolActivity.slack.list_workspaces.completed",
          defaultMessage: "Listed workspaces",
          description: "Completed label for the Slack list_workspaces MCP tool.",
        },
        read_canvas_active: {
          id: "localConversation.mcpToolActivity.slack.read_canvas.active",
          defaultMessage: "Reading canvas",
          description: "Active label for the Slack read_canvas MCP tool.",
        },
        read_canvas_completed: {
          id: "localConversation.mcpToolActivity.slack.read_canvas.completed",
          defaultMessage: "Read canvas",
          description: "Completed label for the Slack read_canvas MCP tool.",
        },
        read_channel_active: {
          id: "localConversation.mcpToolActivity.slack.read_channel.active",
          defaultMessage: "Reading channel",
          description: "Active without-context label for the Slack read_channel MCP tool.",
        },
        read_channel_completed: {
          id: "localConversation.mcpToolActivity.slack.read_channel.completed",
          defaultMessage: "Read channel",
          description: "Completed without-context label for the Slack read_channel MCP tool.",
        },
        read_channel_activeWithContext: {
          id: "codex.mcpTool.slack.readMessages.active",
          defaultMessage: "Reading messages",
          description: "Active label for reading Slack channel messages.",
        },
        read_channel_completedWithContext: {
          id: "codex.mcpTool.slack.readMessages.completed",
          defaultMessage: "Read messages",
          description: "Completed label for reading Slack channel messages without an exact count.",
        },
        read_channel_completedCount: {
          id: "codex.mcpTool.slack.readMessages.completedCount",
          defaultMessage: "Read {count, plural, one {a message} other {{count, number} messages}}",
          description: "Completed label for reading Slack channel messages with an exact count.",
        },
        read_file_active: {
          id: "localConversation.mcpToolActivity.slack.read_file.active",
          defaultMessage: "Reading file",
          description: "Active label for the Slack read_file MCP tool.",
        },
        read_file_completed: {
          id: "localConversation.mcpToolActivity.slack.read_file.completed",
          defaultMessage: "Read file",
          description: "Completed label for the Slack read_file MCP tool.",
        },
        read_thread_active: {
          id: "localConversation.mcpToolActivity.slack.read_thread.active",
          defaultMessage: "Reading thread",
          description: "Active without-context label for the Slack read_thread MCP tool.",
        },
        read_thread_completed: {
          id: "localConversation.mcpToolActivity.slack.read_thread.completed",
          defaultMessage: "Read thread",
          description: "Completed without-context label for the Slack read_thread MCP tool.",
        },
        read_thread_activeWithContext: {
          id: "codex.mcpTool.slack.readThreadReplies.active",
          defaultMessage: "Reading thread replies",
          description: "Active label for reading Slack thread replies.",
        },
        read_thread_completedWithContext: {
          id: "codex.mcpTool.slack.readThreadReplies.completed",
          defaultMessage: "Read thread replies",
          description: "Completed label for reading Slack thread replies without an exact count.",
        },
        read_thread_completedCount: {
          id: "codex.mcpTool.slack.readThreadReplies.completedCount",
          defaultMessage: "Read {count, plural, one {a thread reply} other {{count, number} thread replies}}",
          description: "Completed label for reading Slack thread replies with an exact count.",
        },
        read_user_profile_active: {
          id: "localConversation.mcpToolActivity.slack.read_user_profile.active",
          defaultMessage: "Reading user profile",
          description: "Active without-context label for the Slack read_user_profile MCP tool.",
        },
        read_user_profile_completed: {
          id: "localConversation.mcpToolActivity.slack.read_user_profile.completed",
          defaultMessage: "Read user profile",
          description: "Completed without-context label for the Slack read_user_profile MCP tool.",
        },
        read_user_profile_activeWithContext: {
          id: "codex.mcpTool.slack.readYourProfile.active",
          defaultMessage: "Reading your profile",
          description: "Active label for reading the current user's Slack profile.",
        },
        read_user_profile_completedWithContext: {
          id: "codex.mcpTool.slack.readYourProfile.completed",
          defaultMessage: "Read your profile",
          description: "Completed label for reading the current user's Slack profile.",
        },
        remove_reaction_active: {
          id: "localConversation.mcpToolActivity.slack.remove_reaction.active",
          defaultMessage: "Removing reaction",
          description: "Active label for the Slack remove_reaction MCP tool.",
        },
        remove_reaction_completed: {
          id: "localConversation.mcpToolActivity.slack.remove_reaction.completed",
          defaultMessage: "Removed reaction",
          description: "Completed label for the Slack remove_reaction MCP tool.",
        },
        schedule_message_active: {
          id: "localConversation.mcpToolActivity.slack.schedule_message.active",
          defaultMessage: "Scheduling message",
          description: "Active label for the Slack schedule_message MCP tool.",
        },
        schedule_message_completed: {
          id: "localConversation.mcpToolActivity.slack.schedule_message.completed",
          defaultMessage: "Scheduled message",
          description: "Completed label for the Slack schedule_message MCP tool.",
        },
        schedule_message_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.schedule_message.activeWithContext",
          defaultMessage: 'Scheduling message "{itemName}"',
          description: "Active label for the Slack schedule_message MCP tool with a message preview.",
        },
        schedule_message_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.schedule_message.completedWithContext",
          defaultMessage: 'Scheduled message "{itemName}"',
          description: "Completed label for the Slack schedule_message MCP tool with a message preview.",
        },
        search_channels_active: {
          id: "localConversation.mcpToolActivity.slack.search_channels.active",
          defaultMessage: "Searching channels",
          description: "Active label for the Slack search_channels MCP tool.",
        },
        search_channels_completed: {
          id: "localConversation.mcpToolActivity.slack.search_channels.completed",
          defaultMessage: "Searched channels",
          description: "Completed label for the Slack search_channels MCP tool.",
        },
        search_channels_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.search_channels.activeWithContext",
          defaultMessage: 'Searching channels "{query}"',
          description: "Active label for the Slack search_channels MCP tool with a query.",
        },
        search_channels_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.search_channels.completedWithContext",
          defaultMessage: 'Searched channels "{query}"',
          description: "Completed label for the Slack search_channels MCP tool with a query.",
        },
        search_emojis_active: {
          id: "localConversation.mcpToolActivity.slack.search_emojis.active",
          defaultMessage: "Searching emojis",
          description: "Active label for the Slack search_emojis MCP tool.",
        },
        search_emojis_completed: {
          id: "localConversation.mcpToolActivity.slack.search_emojis.completed",
          defaultMessage: "Searched emojis",
          description: "Completed label for the Slack search_emojis MCP tool.",
        },
        search_public_active: {
          id: "localConversation.mcpToolActivity.slack.search_public.active",
          defaultMessage: "Searching messages",
          description: "Active label for the Slack search_public MCP tool.",
        },
        search_public_completed: {
          id: "localConversation.mcpToolActivity.slack.search_public.completed",
          defaultMessage: "Searched messages",
          description: "Completed label for the Slack search_public MCP tool.",
        },
        search_public_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.search_public.activeWithContext",
          defaultMessage:
            'Searching {target, select, files {files} messagesAndFiles {messages and files} other {messages}} "{query}"',
          description: "Active label for the Slack search_public MCP tool with a query.",
        },
        search_public_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.search_public.completedWithContext",
          defaultMessage:
            'Searched {target, select, files {files} messagesAndFiles {messages and files} other {messages}} "{query}"',
          description: "Completed label for the Slack search_public MCP tool with a query.",
        },
        search_users_active: {
          id: "localConversation.mcpToolActivity.slack.search_users.active",
          defaultMessage: "Searching users",
          description: "Active label for the Slack search_users MCP tool.",
        },
        search_users_completed: {
          id: "localConversation.mcpToolActivity.slack.search_users.completed",
          defaultMessage: "Searched users",
          description: "Completed label for the Slack search_users MCP tool.",
        },
        search_users_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.search_users.activeWithContext",
          defaultMessage: 'Searching users "{query}"',
          description: "Active label for the Slack search_users MCP tool with a query.",
        },
        search_users_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.search_users.completedWithContext",
          defaultMessage: 'Searched users "{query}"',
          description: "Completed label for the Slack search_users MCP tool with a query.",
        },
        send_message_active: {
          id: "localConversation.mcpToolActivity.slack.send_message.active",
          defaultMessage: "Sending message",
          description: "Active label for the Slack send_message MCP tool.",
        },
        send_message_completed: {
          id: "localConversation.mcpToolActivity.slack.send_message.completed",
          defaultMessage: "Sent message",
          description: "Completed label for the Slack send_message MCP tool.",
        },
        send_message_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.send_message.activeWithContext",
          defaultMessage: 'Sending message "{itemName}"',
          description: "Active label for the Slack send_message MCP tool with a message preview.",
        },
        send_message_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.send_message.completedWithContext",
          defaultMessage: 'Sent message "{itemName}"',
          description: "Completed label for the Slack send_message MCP tool with a message preview.",
        },
        send_message_draft_active: {
          id: "localConversation.mcpToolActivity.slack.send_message_draft.active",
          defaultMessage: "Creating message draft",
          description: "Active label for the Slack send_message_draft MCP tool.",
        },
        send_message_draft_completed: {
          id: "localConversation.mcpToolActivity.slack.send_message_draft.completed",
          defaultMessage: "Created message draft",
          description: "Completed label for the Slack send_message_draft MCP tool.",
        },
        send_message_draft_activeWithContext: {
          id: "localConversation.mcpToolActivity.slack.send_message_draft.activeWithContext",
          defaultMessage: 'Creating message draft "{itemName}"',
          description: "Active label for the Slack send_message_draft MCP tool with a message preview.",
        },
        send_message_draft_completedWithContext: {
          id: "localConversation.mcpToolActivity.slack.send_message_draft.completedWithContext",
          defaultMessage: 'Created message draft "{itemName}"',
          description: "Completed label for the Slack send_message_draft MCP tool with a message preview.",
        },
        update_canvas_active: {
          id: "localConversation.mcpToolActivity.slack.update_canvas.active",
          defaultMessage: "Updating canvas",
          description: "Active label for the Slack update_canvas MCP tool.",
        },
        update_canvas_completed: {
          id: "localConversation.mcpToolActivity.slack.update_canvas.completed",
          defaultMessage: "Updated canvas",
          description: "Completed label for the Slack update_canvas MCP tool.",
        },
        update_user_profile_active: {
          id: "localConversation.mcpToolActivity.slack.update_user_profile.active",
          defaultMessage: "Updating user profile",
          description: "Active label for the Slack update_user_profile MCP tool.",
        },
        update_user_profile_completed: {
          id: "localConversation.mcpToolActivity.slack.update_user_profile.completed",
          defaultMessage: "Updated user profile",
          description: "Completed label for the Slack update_user_profile MCP tool.",
        },
      }),
      tr = v
        .object({
          deployment: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          deployment_id: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          deployment_url: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          deploymentId: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          deploymentUrl: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          domain: v
            .string()
            .trim()
            .min(1)
            .max(253)
            .optional()
            .catch(void 0),
          idOrName: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          project: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          project_id: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          project_name: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          projectId: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          projectName: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          query: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
          team: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          team_id: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          team_slug: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          teamId: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          teamSlug: v
            .string()
            .trim()
            .min(1)
            .max(200)
            .optional()
            .catch(void 0),
          url: v
            .string()
            .trim()
            .min(1)
            .max(500)
            .optional()
            .catch(void 0),
        })
        .strip(),
      td = {
        check_domain_availability_and_price: (0, A.PM)({
          getItemName: ({ domain: e }) => tv(e),
          getMessages: () => (0, A.vP)(tf, "check_domain_availability_and_price", "WithContext"),
          maxPreviewLength: 40,
        }),
        deploy_to_vercel: (0, A.PM)({
          getItemName: tm,
          getMessages: () => (0, A.vP)(tf, "deploy_to_vercel", "WithContext"),
          maxPreviewLength: 40,
        }),
        get_access_to_vercel_url: (0, A.PM)({
          getItemName: tu,
          getMessages: () => (0, A.vP)(tf, "get_access_to_vercel_url", "WithContext"),
          maxPreviewLength: 40,
        }),
        get_deployment: (0, A.PM)({
          getItemName: tu,
          getMessages: () => (0, A.vP)(tf, "get_deployment", "WithContext"),
          maxPreviewLength: 40,
        }),
        get_deployment_build_logs: (0, A._p)({
          getMessages: () => (0, A.vP)(tf, "get_deployment_build_logs", "WithTarget"),
          getValues: ({ hasInvocationContext: e, toolArguments: t }) => {
            var o
            let a
            if (!e || null == t) return null
            let i = tu(t),
              l =
                tm(t) ??
                ((a = (null != (o = i) ? (th(o) ?? o.trim()) : "").match(/^(.*)-git-[^-]+-[^.]+\.vercel\.app$/i)),
                tg(a?.[1])) ??
                (0, A.kF)({ maxLength: 40, value: i })
            return null == l ? null : { target: l }
          },
        }),
        get_project: (0, A.PM)({
          getItemName: tm,
          getMessages: () => (0, A.vP)(tf, "get_project", "WithContext"),
          maxPreviewLength: 40,
        }),
        list_deployments:
          ((m = (e, t) => {
            let o = e.toolArguments
            if (null != o) {
              let a = (0, A.kF)({ maxLength: 40, value: tm(o) })
              if (null != a)
                return "active" === t
                  ? e.intl.formatMessage(tf.list_deployments_activeWithProject, { target: a })
                  : e.intl.formatMessage(tf.list_deployments_completedWithProject, { target: a })
              let i = (0, A.kF)({ maxLength: 40, value: t_(o) })
              if (null != i)
                return "active" === t
                  ? e.intl.formatMessage(tf.list_deployments_activeWithTeam, { target: i })
                  : e.intl.formatMessage(tf.list_deployments_completedWithTeam, { target: i })
            }
            return "active" === t
              ? e.intl.formatMessage(tf.list_deployments_active)
              : e.intl.formatMessage(tf.list_deployments_completed)
          }),
          { active: (e) => m(e, "active"), completed: (e) => m(e, "completed") }),
        list_projects: (0, A.lu)({
          getMessages: () => (0, A.vP)(tf, "list_projects", "WithTeam"),
          getValue: t_,
          maxPreviewLength: 40,
          valueName: "target",
        }),
        list_teams: (0, A.lu)({
          getMessages: () => (0, A.vP)(tf, "list_teams", "WithQuery"),
          getValue: ({ query: e }) => e,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        search_vercel_documentation: (0, A.lu)({
          getMessages: () => (0, A.vP)(tf, "search_vercel_documentation", "WithQuery"),
          getValue: ({ query: e }) => e,
          maxPreviewLength: 40,
          valueName: "query",
        }),
        web_fetch_vercel_url: (0, A.PM)({
          getItemName: tu,
          getMessages: () => (0, A.vP)(tf, "web_fetch_vercel_url", "WithContext"),
          maxPreviewLength: 40,
        }),
      },
      tp = (0, A.Ys)({ appRegistryKey: "vercel", getMessages: () => tf, toolArgumentsSchema: tr, tools: td })
    function tm({ idOrName: e, name: t, project: o, project_id: a, project_name: i, projectId: l, projectName: s }) {
      return tg(i ?? s ?? o ?? e ?? t ?? a ?? l)
    }
    function t_({ team: e, team_id: t, team_slug: o, teamId: a, teamSlug: i }) {
      return tg(e ?? o ?? i ?? t ?? a)
    }
    function tu({ deployment: e, deployment_id: t, deployment_url: o, deploymentId: a, deploymentUrl: i, url: l }) {
      let s = o ?? i ?? l ?? e ?? t ?? a
      if (null != s) return th(s) ?? tv(s) ?? tg(s)
    }
    function tv(e) {
      if (null == e) return
      let t = th(e) ?? e.trim()
      if (!(0 === t.length || t.includes("/")) && /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(t)) return t.toLowerCase()
    }
    function tg(e) {
      if (null == e) return
      let t = e.trim()
      if (!(
        0 === t.length ||
        /^(dpl|prj|team)_[a-z0-9]{6,}$/i.test(t) ||
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)
      ))
        return t
    }
    function th(e) {
      if (/^https?:\/\//i.test(e))
        try {
          return new URL(e).hostname
        } catch {
          return
        }
    }
    let tf = (0, M.YK)({
        check_domain_availability_and_price_active: {
          id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.active",
          defaultMessage: "Checking domain availability",
          description: "Active label for the Vercel check_domain_availability_and_price MCP tool.",
        },
        check_domain_availability_and_price_completed: {
          id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.completed",
          defaultMessage: "Checked domain availability",
          description: "Completed label for the Vercel check_domain_availability_and_price MCP tool.",
        },
        check_domain_availability_and_price_activeWithContext: {
          id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.activeWithContext",
          defaultMessage: 'Checking domain availability "{itemName}"',
          description:
            "Active label for the Vercel check_domain_availability_and_price MCP tool with readable context.",
        },
        check_domain_availability_and_price_completedWithContext: {
          id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.completedWithContext",
          defaultMessage: 'Checked domain availability "{itemName}"',
          description:
            "Completed label for the Vercel check_domain_availability_and_price MCP tool with readable context.",
        },
        deploy_to_vercel_active: {
          id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.active",
          defaultMessage: "Deploying to Vercel",
          description: "Active label for the Vercel deploy_to_vercel MCP tool.",
        },
        deploy_to_vercel_completed: {
          id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.completed",
          defaultMessage: "Deployed to Vercel",
          description: "Completed label for the Vercel deploy_to_vercel MCP tool.",
        },
        deploy_to_vercel_activeWithContext: {
          id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.activeWithContext",
          defaultMessage: 'Deploying to Vercel "{itemName}"',
          description: "Active label for the Vercel deploy_to_vercel MCP tool with readable context.",
        },
        deploy_to_vercel_completedWithContext: {
          id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.completedWithContext",
          defaultMessage: 'Deployed to Vercel "{itemName}"',
          description: "Completed label for the Vercel deploy_to_vercel MCP tool with readable context.",
        },
        get_access_to_vercel_url_active: {
          id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.active",
          defaultMessage: "Getting deployment access",
          description: "Active label for the Vercel get_access_to_vercel_url MCP tool.",
        },
        get_access_to_vercel_url_completed: {
          id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.completed",
          defaultMessage: "Got deployment access",
          description: "Completed label for the Vercel get_access_to_vercel_url MCP tool.",
        },
        get_access_to_vercel_url_activeWithContext: {
          id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.activeWithContext",
          defaultMessage: 'Getting deployment access "{itemName}"',
          description: "Active label for the Vercel get_access_to_vercel_url MCP tool with readable context.",
        },
        get_access_to_vercel_url_completedWithContext: {
          id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.completedWithContext",
          defaultMessage: 'Got deployment access "{itemName}"',
          description: "Completed label for the Vercel get_access_to_vercel_url MCP tool with readable context.",
        },
        get_deployment_active: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment.active",
          defaultMessage: "Getting deployment",
          description: "Active label for the Vercel get_deployment MCP tool.",
        },
        get_deployment_completed: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment.completed",
          defaultMessage: "Got deployment",
          description: "Completed label for the Vercel get_deployment MCP tool.",
        },
        get_deployment_activeWithContext: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment.activeWithContext",
          defaultMessage: 'Getting deployment "{itemName}"',
          description: "Active label for the Vercel get_deployment MCP tool with readable context.",
        },
        get_deployment_completedWithContext: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment.completedWithContext",
          defaultMessage: 'Got deployment "{itemName}"',
          description: "Completed label for the Vercel get_deployment MCP tool with readable context.",
        },
        get_deployment_build_logs_active: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.active",
          defaultMessage: "Getting build logs",
          description: "Active label for the Vercel get_deployment_build_logs MCP tool.",
        },
        get_deployment_build_logs_completed: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.completed",
          defaultMessage: "Got build logs",
          description: "Completed label for the Vercel get_deployment_build_logs MCP tool.",
        },
        get_deployment_build_logs_activeWithTarget: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.activeWithTarget",
          defaultMessage: "Getting build logs for {target}",
          description: "Active label for the Vercel get_deployment_build_logs MCP tool with readable context.",
        },
        get_deployment_build_logs_completedWithTarget: {
          id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.completedWithTarget",
          defaultMessage: "Got build logs for {target}",
          description: "Completed label for the Vercel get_deployment_build_logs MCP tool with readable context.",
        },
        get_project_active: {
          id: "localConversation.mcpToolActivity.vercel.get_project.active",
          defaultMessage: "Getting project",
          description: "Active label for the Vercel get_project MCP tool.",
        },
        get_project_completed: {
          id: "localConversation.mcpToolActivity.vercel.get_project.completed",
          defaultMessage: "Got project",
          description: "Completed label for the Vercel get_project MCP tool.",
        },
        get_project_activeWithContext: {
          id: "localConversation.mcpToolActivity.vercel.get_project.activeWithContext",
          defaultMessage: 'Getting project "{itemName}"',
          description: "Active label for the Vercel get_project MCP tool with readable context.",
        },
        get_project_completedWithContext: {
          id: "localConversation.mcpToolActivity.vercel.get_project.completedWithContext",
          defaultMessage: 'Got project "{itemName}"',
          description: "Completed label for the Vercel get_project MCP tool with readable context.",
        },
        import_claude_design_from_url_active: {
          id: "localConversation.mcpToolActivity.vercel.import-claude-design-from-url.active",
          defaultMessage: "Importing Claude design",
          description: "Active label for the Vercel import-claude-design-from-url MCP tool.",
        },
        import_claude_design_from_url_completed: {
          id: "localConversation.mcpToolActivity.vercel.import-claude-design-from-url.completed",
          defaultMessage: "Imported Claude design",
          description: "Completed label for the Vercel import-claude-design-from-url MCP tool.",
        },
        list_deployments_active: {
          id: "localConversation.mcpToolActivity.vercel.list_deployments.active",
          defaultMessage: "Listing deployments",
          description: "Active label for the Vercel list_deployments MCP tool.",
        },
        list_deployments_completed: {
          id: "localConversation.mcpToolActivity.vercel.list_deployments.completed",
          defaultMessage: "Listed deployments",
          description: "Completed label for the Vercel list_deployments MCP tool.",
        },
        list_deployments_activeWithProject: {
          id: "localConversation.mcpToolActivity.vercel.list_deployments.activeWithProject",
          defaultMessage: 'Listing deployments for "{target}"',
          description: "Active label for the Vercel list_deployments MCP tool with readable context.",
        },
        list_deployments_completedWithProject: {
          id: "localConversation.mcpToolActivity.vercel.list_deployments.completedWithProject",
          defaultMessage: 'Listed deployments for "{target}"',
          description: "Completed label for the Vercel list_deployments MCP tool with readable context.",
        },
        list_deployments_activeWithTeam: {
          id: "localConversation.mcpToolActivity.vercel.list_deployments.activeWithTeam",
          defaultMessage: 'Listing deployments for team "{target}"',
          description: "Active label for the Vercel list_deployments MCP tool with readable context.",
        },
        list_deployments_completedWithTeam: {
          id: "localConversation.mcpToolActivity.vercel.list_deployments.completedWithTeam",
          defaultMessage: 'Listed deployments for team "{target}"',
          description: "Completed label for the Vercel list_deployments MCP tool with readable context.",
        },
        list_projects_active: {
          id: "localConversation.mcpToolActivity.vercel.list_projects.active",
          defaultMessage: "Listing projects",
          description: "Active label for the Vercel list_projects MCP tool.",
        },
        list_projects_completed: {
          id: "localConversation.mcpToolActivity.vercel.list_projects.completed",
          defaultMessage: "Listed projects",
          description: "Completed label for the Vercel list_projects MCP tool.",
        },
        list_projects_activeWithTeam: {
          id: "localConversation.mcpToolActivity.vercel.list_projects.activeWithTeam",
          defaultMessage: 'Listing projects for team "{target}"',
          description: "Active label for the Vercel list_projects MCP tool with readable context.",
        },
        list_projects_completedWithTeam: {
          id: "localConversation.mcpToolActivity.vercel.list_projects.completedWithTeam",
          defaultMessage: 'Listed projects for team "{target}"',
          description: "Completed label for the Vercel list_projects MCP tool with readable context.",
        },
        list_teams_active: {
          id: "localConversation.mcpToolActivity.vercel.list_teams.active",
          defaultMessage: "Listing teams",
          description: "Active label for the Vercel list_teams MCP tool.",
        },
        list_teams_completed: {
          id: "localConversation.mcpToolActivity.vercel.list_teams.completed",
          defaultMessage: "Listed teams",
          description: "Completed label for the Vercel list_teams MCP tool.",
        },
        list_teams_activeWithQuery: {
          id: "localConversation.mcpToolActivity.vercel.list_teams.activeWithQuery",
          defaultMessage: 'Listing teams "{query}"',
          description: "Active label for the Vercel list_teams MCP tool with readable context.",
        },
        list_teams_completedWithQuery: {
          id: "localConversation.mcpToolActivity.vercel.list_teams.completedWithQuery",
          defaultMessage: 'Listed teams "{query}"',
          description: "Completed label for the Vercel list_teams MCP tool with readable context.",
        },
        search_vercel_documentation_active: {
          id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.active",
          defaultMessage: "Searching Vercel docs",
          description: "Active label for the Vercel search_vercel_documentation MCP tool.",
        },
        search_vercel_documentation_completed: {
          id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.completed",
          defaultMessage: "Searched Vercel docs",
          description: "Completed label for the Vercel search_vercel_documentation MCP tool.",
        },
        search_vercel_documentation_activeWithQuery: {
          id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.activeWithQuery",
          defaultMessage: 'Searching Vercel docs "{query}"',
          description: "Active label for the Vercel search_vercel_documentation MCP tool with readable context.",
        },
        search_vercel_documentation_completedWithQuery: {
          id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.completedWithQuery",
          defaultMessage: 'Searched Vercel docs "{query}"',
          description: "Completed label for the Vercel search_vercel_documentation MCP tool with readable context.",
        },
        web_fetch_vercel_url_active: {
          id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.active",
          defaultMessage: "Fetching deployment URL",
          description: "Active label for the Vercel web_fetch_vercel_url MCP tool.",
        },
        web_fetch_vercel_url_completed: {
          id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.completed",
          defaultMessage: "Fetched deployment URL",
          description: "Completed label for the Vercel web_fetch_vercel_url MCP tool.",
        },
        web_fetch_vercel_url_activeWithContext: {
          id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.activeWithContext",
          defaultMessage: 'Fetching deployment URL "{itemName}"',
          description: "Active label for the Vercel web_fetch_vercel_url MCP tool with readable context.",
        },
        web_fetch_vercel_url_completedWithContext: {
          id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.completedWithContext",
          defaultMessage: 'Fetched deployment URL "{itemName}"',
          description: "Completed label for the Vercel web_fetch_vercel_url MCP tool with readable context.",
        },
      }),
      tC = (0, A.Ys)({
        appRegistryKey: "wallet",
        getMessages: () => tb,
        toolArgumentsSchema: v.object({}).strip(),
        tools: {},
      }),
      tb = (0, M.YK)({
        open_vgs_card_enrollment_active: {
          id: "localConversation.mcpToolActivity.wallet.open_vgs_card_enrollment.active",
          defaultMessage: "Opening card form",
          description: "Active label for the Wallet card enrollment MCP tool.",
        },
        open_vgs_card_enrollment_completed: {
          id: "localConversation.mcpToolActivity.wallet.open_vgs_card_enrollment.completed",
          defaultMessage: "Add card to wallet",
          description: "Completed label for the Wallet card enrollment MCP tool.",
        },
        generate_cryptogram_from_saved_card_active: {
          id: "localConversation.mcpToolActivity.wallet.generate_cryptogram_from_saved_card.active",
          defaultMessage: "Generating payment credential",
          description: "Active label for the Wallet payment credential MCP tool.",
        },
        generate_cryptogram_from_saved_card_completed: {
          id: "localConversation.mcpToolActivity.wallet.generate_cryptogram_from_saved_card.completed",
          defaultMessage: "Generate payment credential",
          description: "Completed label for the Wallet payment credential MCP tool.",
        },
      })
    var ty = o("DKJJ")
    let tM = v.object({
        "openai/toolInvocation/invoking": v
          .string()
          .trim()
          .min(1)
          .optional()
          .catch(void 0),
        "openai/toolInvocation/invoked": v
          .string()
          .trim()
          .min(1)
          .optional()
          .catch(void 0),
      }),
      tA = v.object({
        title: v
          .string()
          .transform((e) => e.trim().replace(/\s+/g, " "))
          .pipe(v.string().min(1))
          .optional(),
      })
    function tw({
      appContext: e,
      completed: t,
      intl: o,
      pluginId: a,
      serverName: i,
      matchingApp: l,
      nativeDesktopAppMetadata: s,
      platform: c = "macOS",
      source: n,
      toolArguments: r,
      toolResult: d,
      toolName: p,
      toolDisplay: m,
      toolDefinition: _,
    }) {
      var u
      let v = (0, C.ji)({ pluginId: a, appContext: e, matchingApp: l, serverName: i, toolName: p }),
        M =
          null == v
            ? null
            : (0, C.g1)({
                tool: v,
                arguments: r,
                completed: t,
                failed: (0, ty.Cb)({ result: d ?? null, isCodexAppsServer: "codex_apps" === i }),
                result: d,
                serverName: i,
              })
      if (null != M) return o.formatMessage(M.message, M.values)
      let A = (function ({ toolArguments: e, toolName: t }) {
        if ("js" !== tP({ matchingApp: null, toolName: t })) return null
        let o = tA.safeParse(e)
        if (!o.success || null == o.data.title) return null
        let a = o.data.title
        return a.length <= 80 ? a : `${a.slice(0, 79).trimEnd()}…`
      })({ toolArguments: r, toolName: p })
      if (null != A) return A
      let w = (0, h.p)({ appContext: e, matchingApp: l, serverName: i, toolName: p })
      if (null != w) {
        let a = (0, f.g)({ completed: t, tool: tP({ matchingApp: w, toolName: e?.actionName ?? p }), toolArguments: r })
        if (null != a) return o.formatMessage(a)
      }
      let x = tM.safeParse(_?._meta).data,
        T = t
          ? (m?.invoked ?? x?.["openai/toolInvocation/invoked"])
          : (m?.invoking ?? x?.["openai/toolInvocation/invoking"]),
        P =
          ((0, ty.Cb)({ result: d ?? null, isCodexAppsServer: "codex_apps" === i }) || (t && d?.type !== "success")
            ? void 0
            : T) ??
          m?.title ??
          (0, g.f8)(_)
      if (P?.trim()) return P
      let W = tq(l, e),
        q = tP({ matchingApp: W, toolName: e?.actionName ?? p }),
        S =
          (null == W && "browser_run_code_unsafe" === q
            ? (0, y.KW)(t, o)
            : (function (e, t) {
                if (e?.kind === "browserUse")
                  return "chrome" === e.backend
                    ? t.formatMessage({
                        id: "localConversation.pendingMcpToolCalls.usedChrome",
                        defaultMessage: "Used Chrome",
                        description: "Fallback activity label for an untitled Chrome browser tool call",
                      })
                    : t.formatMessage({
                        id: "localConversation.pendingMcpToolCalls.usedBrowser",
                        defaultMessage: "Used the browser",
                        description: "Fallback activity label for an untitled in-app browser tool call",
                      })
              })(n, o)) ?? tW({ appContext: e, matchingApp: l, toolName: p }),
        G =
          (null == (u = i) ? null : "computer-use" === u ? b.$z : null) ??
          (function (e) {
            if (null == e) return null
            for (let t of tT(e)) {
              let e = (function (e) {
                switch (e) {
                  case "browser":
                    return y.FY
                  case "figma":
                    return k
                  case "github":
                    return H
                  case "gmail":
                    return Z
                  case "google_calendar":
                    return ec
                  case "google_drive":
                    return eb
                  case "linear":
                  case "linear_mcp_server":
                    return eD
                  case "notion":
                  case "notion_mcp_server":
                    return eZ
                  case "sites":
                    return e9
                  case "slack":
                    return to
                  case "vercel":
                    return tp
                  case "wallet":
                    return tC
                  default:
                    return null
                }
              })(t)
              if (null != e) return e
            }
            return null
          })(W)
      return (
        G?.({
          completed: t,
          intl: o,
          matchingApp: W,
          nativeDesktopAppMetadata: s ?? null,
          platform: c,
          toolArguments: r,
          toolKey: q,
          toolResult: d ?? null,
        }) ?? S
      )
    }
    function tx({ approval: e, matchingApp: t }) {
      let o = (0, y.Dd)(e)
      if (null != o) return o
      let a = e.tool_name?.trim() || e.tool_title?.trim()
      if (null == a || 0 === a.length) return null
      if ("connector_openai_pages" === e.connector_id)
        return (0, f.W)({
          tool: tP({
            matchingApp: { id: e.connector_id, name: "ChatGPT Space", pluginDisplayNames: ["pages"] },
            toolName: a,
          }),
          toolArguments: e.tool_params,
        })
      let i = t ?? {
          id: e.connector_id,
          name: e.connector_name ?? a.split(".")[0] ?? e.connector_id,
          pluginDisplayNames: [],
        },
        l = tP({ matchingApp: i, toolName: a }),
        s = tT(i)
      return s.includes("figma")
        ? W({ toolArguments: e.tool_params, toolKey: l })
        : s.includes("github")
          ? (function ({ toolArguments: e, toolKey: t }) {
              let o = J[t]
              if (null == o) return null
              let a = I.safeParse(e)
              return {
                descriptor: o,
                values: (function (e) {
                  var t
                  let o = $(e?.assignees),
                    a = Q(e?.base ?? e?.base_branch),
                    i = Q(e?.base_ref),
                    l = Q(e?.body),
                    s = Q(e?.branch),
                    c = Q(e?.branch_name),
                    n = Q(e?.comment),
                    r = Q(e?.head ?? e?.head_branch),
                    d = Q(e?.head_repo),
                    p = Q(e?.label),
                    m = $(e?.labels),
                    _ = Q(e?.message),
                    u = Q(e?.path),
                    v = Q(e?.reaction?.replaceAll("_", " ")),
                    g = Q(e?.repo_full_name ?? e?.repository_full_name),
                    h = Q(e?.review),
                    f = $(e?.reviewers),
                    C = $(e?.team_reviewers),
                    b = Q(e?.title),
                    y =
                      e?.action == null
                        ? "other"
                        : { APPROVE: "approve", COMMENT: "comment", REQUEST_CHANGES: "requestChanges" }[e.action],
                    M = "peopleAndTeams"
                  null == f ? (M = null == C ? "none" : "teams") : null == C && (M = "people")
                  let A = "repositoryAndBranch"
                  return (
                    null == d ? (A = null == r ? "none" : "branch") : null == r && (A = "repository"),
                    {
                      assignees: o ?? "",
                      baseBranch: a ?? "",
                      baseRef: i ?? "",
                      body: l ?? "",
                      bodyChange: ((t = e?.body), null == t ? "unset" : null == l ? "clear" : "set"),
                      branch: s ?? "",
                      branchName: c ?? "",
                      comment: n ?? "",
                      draft: e?.draft === !0 ? "yes" : "no",
                      force: e?.force === !0 ? "yes" : "no",
                      hasAssignees: null == o ? "no" : "yes",
                      hasBaseBranch: null == a ? "no" : "yes",
                      hasBaseRef: null == i ? "no" : "yes",
                      hasBranch: null == s ? "no" : "yes",
                      hasBranchName: null == c ? "no" : "yes",
                      hasComment: null == n ? "no" : "yes",
                      hasHeadBranch: null == r ? "no" : "yes",
                      hasIssueNumber: e?.issue_number == null ? "no" : "yes",
                      hasLabel: null == p ? "no" : "yes",
                      hasLabels: null == m ? "no" : "yes",
                      hasMergeMethod: e?.merge_method == null ? "no" : "yes",
                      hasMilestone: e?.milestone == null ? "no" : "yes",
                      hasMessage: null == _ ? "no" : "yes",
                      hasPath: null == u ? "no" : "yes",
                      hasPullRequestNumber: e?.pr_number == null ? "no" : "yes",
                      hasReaction: null == v ? "no" : "yes",
                      hasRepository: null == g ? "no" : "yes",
                      hasReview: null == h ? "no" : "yes",
                      hasSourceIssueNumber: e?.issue == null ? "no" : "yes",
                      hasState: e?.state == null ? "no" : "yes",
                      hasTitle: null == b ? "no" : "yes",
                      headBranch: r ?? "",
                      headRepository: d ?? "",
                      issueNumber: e?.issue_number ?? 0,
                      label: p ?? "",
                      labels: m ?? "",
                      mergeMethod: e?.merge_method ?? "other",
                      milestone: e?.milestone ?? 0,
                      message: _ ?? "",
                      path: u ?? "",
                      pullRequestNumber: e?.pr_number ?? 0,
                      pullRequestSourceContext: A,
                      reaction: v ?? "",
                      repository: g ?? "",
                      review: h ?? "",
                      reviewAction: y,
                      reviewerContext: M,
                      reviewers: f ?? "",
                      sourceIssueNumber: e?.issue ?? 0,
                      state: e?.state ?? "other",
                      teamReviewers: C ?? "",
                      title: b ?? "",
                    }
                  )
                })(a.success ? a.data : null),
              }
            })({ toolArguments: e.tool_params, toolKey: l })
          : s.includes("gmail")
            ? X({ toolArguments: e.tool_params, toolKey: l })
            : s.includes("google_calendar")
              ? en({ toolArguments: e.tool_params, toolKey: l })
              : s.includes("google_drive")
                ? ey({ toolArguments: e.tool_params, toolKey: l })
                : s.includes("linear") || s.includes("linear_mcp_server")
                  ? (function ({ toolArguments: e, toolKey: t }) {
                      let o = eG[t]
                      if (null == o) return null
                      let a = eS.safeParse(e)
                      return o(a.success ? a.data : null)
                    })({ toolArguments: e.tool_params, toolKey: l })
                  : s.includes("notion") || s.includes("notion_mcp_server")
                    ? eX({ toolArguments: e.tool_params, toolKey: l })
                    : s.includes("slack")
                      ? ta({ toolArguments: e.tool_params, toolKey: l })
                      : null
    }
    function tT(e) {
      let t = [e.name, e.id, e.id.replace(/^connector[_-]/i, ""), ...(e.pluginDisplayNames ?? [])].map(tk)
      return t.filter((e, o) => e.length > 0 && t.indexOf(e) === o)
    }
    function tP({ matchingApp: e, toolName: t }) {
      return tk(tS({ matchingApp: e, toolName: t }))
    }
    function tk(e) {
      return tG(e).join("_")
    }
    function tW({ appContext: e, toolName: t, matchingApp: o }) {
      var a
      return ((a = tS({ matchingApp: tq(o, e), toolName: e?.actionName ?? t })), (0, u.g)(a, { style: "sentence" }))
    }
    function tq(e, t) {
      return null != e || null == t
        ? e
        : { id: t.connectorId, name: t.appName ?? t.connectorId, pluginDisplayNames: [] }
    }
    function tS({ matchingApp: e, toolName: t }) {
      let o = tG(t),
        a = (function ({ matchingApp: e }) {
          let t
          if (null == e) return []
          let o = (t = [
            tG(e.name),
            tG(e.id),
            tG(e.id.replace(/^connector[_-]/i, "")),
            ...(e.pluginDisplayNames ?? []).map(tG),
          ])
            .filter(
              (e, o) =>
                0 !== e.length && t.findIndex((t) => t.length === e.length && t.every((t, o) => t === e[o])) === o,
            )
            .flatMap(tj)
          return o
            .filter(
              (e, t) =>
                0 !== e.length && o.findIndex((t) => t.length === e.length && t.every((t, o) => t === e[o])) === t,
            )
            .sort((e, t) => t.length - e.length)
        })({ matchingApp: e })
      for (; o.length > 0;) {
        let e = (function (e, t) {
          return t.find((t) => !(e.length < t.length) && t.every((t, o) => t === e[o])) ?? null
        })(o, a)
        if (null == e) break
        o = o.slice(e.length)
      }
      return 0 === o.length ? t : o.join(" ")
    }
    function tG(e) {
      return e
        .trim()
        .toLowerCase()
        .split(/[^a-z0-9]+/g)
        .filter((e) => e.length > 0)
    }
    function tj(e) {
      return [e, tD(e, ["mcp"]), tD(e, ["mcp", "server"])]
    }
    function tD(e, t) {
      let o = Math.min(e.length, t.length)
      for (let a = o; a > 0; a -= 1) {
        let o = e.slice(e.length - a),
          i = t.slice(0, a)
        if (o.every((e, t) => e === i[t])) return [...e, ...t.slice(a)]
      }
      return [...e, ...t]
    }
  },
  csnw(e, t, o) {
    let a = ["count", "total", "total_count", "totalCount"]
    function i(e) {
      var t
      return null == e || "object" != typeof e || "success" !== e.type
        ? null
        : (e.structuredContent ?? (null == (t = e.raw) || "object" != typeof t ? null : (t.structuredContent ?? null)))
    }
    o.d(
      t,
      {},
      {
        O: i,
        o: function ({ countKeys: e = [], preferredKeys: t, toolResult: o }) {
          let l = i(o)
          return null == l
            ? null
            : (function ({ countKeys: e, preferredKeys: t, structuredContent: o }) {
                if (Array.isArray(o)) return o.length
                if (null == o || "object" != typeof o) return null
                for (let e of t) {
                  let t = o[e]
                  if (Array.isArray(t)) return t.length
                }
                for (let t of e) {
                  let e = o[t]
                  if ("number" == typeof e && Number.isInteger(e) && e >= 0) return e
                }
                let a = Object.values(o).filter(Array.isArray)
                return 1 === a.length ? a[0].length : null
              })({ countKeys: [...e, ...a], preferredKeys: t, structuredContent: l })
        },
      },
    )
  },
  wE2l(e, t, o) {
    o.d(
      t,
      {},
      {
        p: function ({ appContext: e, matchingApp: t, serverName: o, toolName: a }) {
          let i = e?.connectorId ?? t?.id,
            l = null == i && ("pages" === o || ("codex_apps" === o && a.startsWith("pages_")))
          return "connector_openai_pages" === i || l
            ? { id: "connector_openai_pages", name: "ChatGPT Space", pluginDisplayNames: ["pages"] }
            : null
        },
      },
    )
  },
  uWou(e, t, o) {
    var a = o("Qgfj"),
      i = o("ASxG")
    let l = i.object({ action: i.string(), active: i.boolean().optional() }),
      s = i.object({ page_id: i.string().trim().min(1) }),
      c = (0, a.YK)({
        edit_page_approval: {
          id: "localConversation.pageToolApproval.editPageWithMention",
          defaultMessage: "Allow ChatGPT to edit <page></page>?",
          description:
            "Permission question before editing a Page. The page tag renders an interactive Page mention showing the document title.",
        },
        edit_page_approval_without_target: {
          id: "localConversation.pageToolApproval.editPageWithoutTarget",
          defaultMessage: "Allow ChatGPT to edit this Page?",
          description:
            "Permission question before editing a Page when the tool arguments do not identify the target Page.",
        },
        comment_approval: {
          id: "localConversation.pageToolApproval.comment",
          defaultMessage:
            "{action, select, add {Allow ChatGPT to post a comment?} reply {Allow ChatGPT to reply to this comment?} edit {Allow ChatGPT to edit this comment?} delete_message {Allow ChatGPT to delete this comment?} delete_thread {Allow ChatGPT to delete this discussion?} resolve {Allow ChatGPT to mark this discussion as resolved?} reopen {Allow ChatGPT to reopen this discussion?} react {Allow ChatGPT to add a reaction?} remove_reaction {Allow ChatGPT to remove its reaction?} other {Allow ChatGPT to update this comment?}}",
          description:
            "Permission question for a Page comment action. The action value chooses a complete question about posting, editing, deleting, resolving, or reacting to a comment in a shared Page.",
        },
        connect_spaces_artifact_active: {
          id: "localConversation.pageToolActivity.connect_spaces_artifact.active",
          defaultMessage: "Connecting artifact",
          description: "Status while connecting a Spaces spreadsheet, presentation, or canvas to this task.",
        },
        connect_spaces_artifact_completed: {
          id: "localConversation.pageToolActivity.connect_spaces_artifact.completed",
          defaultMessage: "Checked artifact connection",
          description:
            "Status after checking whether a Spaces artifact can connect to this task. The result may report that the connection is unavailable.",
        },
        connect_spaces_artifact_completedFollowing: {
          id: "localConversation.pageToolActivity.connect_spaces_artifact.completedFollowing",
          defaultMessage: "checked artifact connection",
          description:
            "Sentence-continuation status after checking whether a Spaces artifact can connect to this task. The result may report that the connection is unavailable.",
        },
        read_artifact_active: {
          id: "localConversation.pageToolActivity.read_artifact.active",
          defaultMessage: "Connecting artifact",
          description: "Status while connecting an existing cloud spreadsheet, presentation, or canvas to this task.",
        },
        read_artifact_completed: {
          id: "localConversation.pageToolActivity.read_artifact.completed",
          defaultMessage: "Read artifact",
          description: "Status after reading a cloud artifact's metadata and editing connection availability.",
        },
        read_artifact_completedFollowing: {
          id: "localConversation.pageToolActivity.read_artifact.completedFollowing",
          defaultMessage: "read artifact",
          description:
            "Sentence-continuation status after reading a cloud artifact's metadata and editing connection availability.",
        },
        read_page_reference_active: {
          id: "localConversation.pageToolActivity.read_page_reference.active",
          defaultMessage: "Reading Page reference",
          description: "Status while the assistant retrieves an image or text file referenced by a Page",
        },
        read_page_reference_completed: {
          id: "localConversation.pageToolActivity.read_page_reference.completed",
          defaultMessage: "Read Page reference",
          description: "Status after the assistant retrieves an image or text file referenced by a Page",
        },
        read_page_reference_completedFollowing: {
          id: "localConversation.pageToolActivity.read_page_reference.completedFollowing",
          defaultMessage: "read Page reference",
          description:
            "Completed status following another phrase in an activity summary; the assistant retrieved an image or text file referenced by a Page",
        },
        read_page_transcript_active: {
          id: "localConversation.pageToolActivity.read_page_transcript.active",
          defaultMessage: "Reading meeting transcript",
          description: "Status while the assistant retrieves the source meeting transcript for a Page",
        },
        read_page_transcript_completed: {
          id: "localConversation.pageToolActivity.read_page_transcript.completed",
          defaultMessage: "Read meeting transcript",
          description: "Status after the assistant retrieves the source meeting transcript for a Page",
        },
        read_page_transcript_completedFollowing: {
          id: "localConversation.pageToolActivity.read_page_transcript.completedFollowing",
          defaultMessage: "read meeting transcript",
          description:
            "Completed status following another phrase in a chat activity summary; use sentence-continuation casing. The assistant retrieved the source meeting transcript for a Page.",
        },
        list_spaces_active: {
          id: "localConversation.pageToolActivity.list_spaces.active",
          defaultMessage: "Listing spaces",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: list spaces. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        list_spaces_completed: {
          id: "localConversation.pageToolActivity.list_spaces.completed",
          defaultMessage: "Listed spaces",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: list spaces. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        list_spaces_completedFollowing: {
          id: "localConversation.pageToolActivity.list_spaces.completedFollowing",
          defaultMessage: "listed spaces",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: list spaces. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        get_space_active: {
          id: "localConversation.pageToolActivity.get_space.active",
          defaultMessage: "Reading space",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: get space. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        get_space_completed: {
          id: "localConversation.pageToolActivity.get_space.completed",
          defaultMessage: "Read space",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: get space. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        get_space_completedFollowing: {
          id: "localConversation.pageToolActivity.get_space.completedFollowing",
          defaultMessage: "read space",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: get space. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        create_space_active: {
          id: "localConversation.pageToolActivity.create_space.active",
          defaultMessage: "Creating space",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: create space. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        create_space_completed: {
          id: "localConversation.pageToolActivity.create_space.completed",
          defaultMessage: "Created space",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: create space. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        create_space_completedFollowing: {
          id: "localConversation.pageToolActivity.create_space.completedFollowing",
          defaultMessage: "created space",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: create space. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        list_pages_active: {
          id: "localConversation.pageToolActivity.list_pages.active",
          defaultMessage: "Listing pages",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: list pages. Spaces are shared workspaces, and pages are documents within them.",
        },
        list_pages_completed: {
          id: "localConversation.pageToolActivity.list_pages.completed",
          defaultMessage: "Listed pages",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: list pages. Spaces are shared workspaces, and pages are documents within them.",
        },
        list_pages_completedFollowing: {
          id: "localConversation.pageToolActivity.list_pages.completedFollowing",
          defaultMessage: "listed pages",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: list pages. Spaces are shared workspaces, and pages are documents within them.",
        },
        find_pages_active: {
          id: "localConversation.pageToolActivity.find_pages.active",
          defaultMessage: "Searching pages",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: find pages. Spaces are shared workspaces, and pages are documents within them.",
        },
        find_pages_completed: {
          id: "localConversation.pageToolActivity.find_pages.completed",
          defaultMessage: "Searched pages",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: find pages. Spaces are shared workspaces, and pages are documents within them.",
        },
        find_pages_completedFollowing: {
          id: "localConversation.pageToolActivity.find_pages.completedFollowing",
          defaultMessage: "searched pages",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: find pages. Spaces are shared workspaces, and pages are documents within them.",
        },
        create_page_active: {
          id: "localConversation.pageToolActivity.create_page.active",
          defaultMessage: "Creating page",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: create page. Spaces are shared workspaces, and pages are documents within them.",
        },
        create_page_completed: {
          id: "localConversation.pageToolActivity.create_page.completed",
          defaultMessage: "Created page",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: create page. Spaces are shared workspaces, and pages are documents within them.",
        },
        create_page_completedFollowing: {
          id: "localConversation.pageToolActivity.create_page.completedFollowing",
          defaultMessage: "created page",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: create page. Spaces are shared workspaces, and pages are documents within them.",
        },
        move_page_active: {
          id: "localConversation.pageToolActivity.move_page.active",
          defaultMessage: "Moving page",
          description:
            "Short status label shown in a Codex chat while the assistant moves an existing Page document beneath another Page.",
        },
        move_page_completed: {
          id: "localConversation.pageToolActivity.move_page.completed",
          defaultMessage: "Moved page",
          description:
            "Short status label shown in a Codex chat after the assistant moves an existing Page document beneath another Page.",
        },
        move_page_completedFollowing: {
          id: "localConversation.pageToolActivity.move_page.completedFollowing",
          defaultMessage: "moved page",
          description:
            "Completed status phrase following another phrase in a Codex chat activity summary; use sentence-continuation casing. The assistant moved an existing Page document beneath another Page.",
        },
        read_page_active: {
          id: "localConversation.pageToolActivity.read_page.active",
          defaultMessage: "Reading page",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: read page. Spaces are shared workspaces, and pages are documents within them.",
        },
        read_page_completed: {
          id: "localConversation.pageToolActivity.read_page.completed",
          defaultMessage: "Read page",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: read page. Spaces are shared workspaces, and pages are documents within them.",
        },
        read_page_completedFollowing: {
          id: "localConversation.pageToolActivity.read_page.completedFollowing",
          defaultMessage: "read page",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: read page. Spaces are shared workspaces, and pages are documents within them.",
        },
        read_page_changes_active: {
          id: "localConversation.pageToolActivity.read_page_changes.active",
          defaultMessage: "Checking page changes",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: read page changes. Spaces are shared workspaces, and pages are documents within them.",
        },
        read_page_changes_completed: {
          id: "localConversation.pageToolActivity.read_page_changes.completed",
          defaultMessage: "Checked page changes",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: read page changes. Spaces are shared workspaces, and pages are documents within them.",
        },
        read_page_changes_completedFollowing: {
          id: "localConversation.pageToolActivity.read_page_changes.completedFollowing",
          defaultMessage: "checked page changes",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: read page changes. Spaces are shared workspaces, and pages are documents within them.",
        },
        edit_page_active: {
          id: "localConversation.pageToolActivity.edit_page.active",
          defaultMessage: "Editing page",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: edit page. Spaces are shared workspaces, and pages are documents within them.",
        },
        edit_page_completed: {
          id: "localConversation.pageToolActivity.edit_page.completed",
          defaultMessage: "Edited page",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: edit page. Spaces are shared workspaces, and pages are documents within them.",
        },
        edit_page_completedFollowing: {
          id: "localConversation.pageToolActivity.edit_page.completedFollowing",
          defaultMessage: "edited page",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: edit page. Spaces are shared workspaces, and pages are documents within them.",
        },
        create_page_visualization_active: {
          id: "localConversation.pageToolActivity.create_page_visualization.active",
          defaultMessage: "Adding visualization",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: create page visualization. Spaces are shared workspaces, and pages are documents within them.",
        },
        create_page_visualization_completed: {
          id: "localConversation.pageToolActivity.create_page_visualization.completed",
          defaultMessage: "Added visualization",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: create page visualization. Spaces are shared workspaces, and pages are documents within them.",
        },
        create_page_visualization_completedFollowing: {
          id: "localConversation.pageToolActivity.create_page_visualization.completedFollowing",
          defaultMessage: "added visualization",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: create page visualization. Spaces are shared workspaces, and pages are documents within them.",
        },
        list_page_comments_active: {
          id: "localConversation.pageToolActivity.list_page_comments.active",
          defaultMessage: "Reading comments",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: list page comments. Spaces are shared workspaces, and pages are documents within them.",
        },
        list_page_comments_completed: {
          id: "localConversation.pageToolActivity.list_page_comments.completed",
          defaultMessage: "Read comments",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: list page comments. Spaces are shared workspaces, and pages are documents within them.",
        },
        list_page_comments_completedFollowing: {
          id: "localConversation.pageToolActivity.list_page_comments.completedFollowing",
          defaultMessage: "read comments",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: list page comments. Spaces are shared workspaces, and pages are documents within them.",
        },
        manage_page_comment_active: {
          id: "localConversation.pageToolActivity.manage_page_comment.active",
          defaultMessage: "Updating comment",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: manage page comment. Spaces are shared workspaces, and pages are documents within them.",
        },
        manage_page_comment_completed: {
          id: "localConversation.pageToolActivity.manage_page_comment.completed",
          defaultMessage: "Updated comment",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: manage page comment. Spaces are shared workspaces, and pages are documents within them.",
        },
        manage_page_comment_completedFollowing: {
          id: "localConversation.pageToolActivity.manage_page_comment.completedFollowing",
          defaultMessage: "updated comment",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: manage page comment. Spaces are shared workspaces, and pages are documents within them.",
        },
        search_sharing_recipients_active: {
          id: "localConversation.pageToolActivity.search_sharing_recipients.active",
          defaultMessage: "Searching people and groups",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: search sharing recipients. Spaces are shared workspaces, and pages are documents within them.",
        },
        search_sharing_recipients_completed: {
          id: "localConversation.pageToolActivity.search_sharing_recipients.completed",
          defaultMessage: "Searched people and groups",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: search sharing recipients. Spaces are shared workspaces, and pages are documents within them.",
        },
        search_sharing_recipients_completedFollowing: {
          id: "localConversation.pageToolActivity.search_sharing_recipients.completedFollowing",
          defaultMessage: "searched people and groups",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: search sharing recipients. Spaces are shared workspaces, and pages are documents within them.",
        },
        get_page_sharing_active: {
          id: "localConversation.pageToolActivity.get_page_sharing.active",
          defaultMessage: "Checking page access",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: get page sharing. Spaces are shared workspaces, and pages are documents within them.",
        },
        get_page_sharing_completed: {
          id: "localConversation.pageToolActivity.get_page_sharing.completed",
          defaultMessage: "Checked page access",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: get page sharing. Spaces are shared workspaces, and pages are documents within them.",
        },
        get_page_sharing_completedFollowing: {
          id: "localConversation.pageToolActivity.get_page_sharing.completedFollowing",
          defaultMessage: "checked page access",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: get page sharing. Spaces are shared workspaces, and pages are documents within them.",
        },
        get_space_sharing_active: {
          id: "localConversation.pageToolActivity.get_space_sharing.active",
          defaultMessage: "Checking space access",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: get space sharing. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        get_space_sharing_completed: {
          id: "localConversation.pageToolActivity.get_space_sharing.completed",
          defaultMessage: "Checked space access",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: get space sharing. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        get_space_sharing_completedFollowing: {
          id: "localConversation.pageToolActivity.get_space_sharing.completedFollowing",
          defaultMessage: "checked space access",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: get space sharing. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        update_page_sharing_active: {
          id: "localConversation.pageToolActivity.update_page_sharing.active",
          defaultMessage: "Updating page access",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: update page sharing. Spaces are shared workspaces, and pages are documents within them.",
        },
        update_page_sharing_completed: {
          id: "localConversation.pageToolActivity.update_page_sharing.completed",
          defaultMessage: "Requested page access change",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: update page sharing. Spaces are shared workspaces, and pages are documents within them.",
        },
        update_page_sharing_completedFollowing: {
          id: "localConversation.pageToolActivity.update_page_sharing.completedFollowing",
          defaultMessage: "requested page access change",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: update page sharing. Spaces are shared workspaces, and pages are documents within them.",
        },
        update_space_sharing_active: {
          id: "localConversation.pageToolActivity.update_space_sharing.active",
          defaultMessage: "Updating space access",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: update space sharing. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        update_space_sharing_completed: {
          id: "localConversation.pageToolActivity.update_space_sharing.completed",
          defaultMessage: "Updated space access",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: update space sharing. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        update_space_sharing_completedFollowing: {
          id: "localConversation.pageToolActivity.update_space_sharing.completedFollowing",
          defaultMessage: "updated space access",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: update space sharing. Spaces are shared workspaces, and pages are documents within them. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
        },
        comment_add_active: {
          id: "localConversation.pageToolActivity.comment_add.active",
          defaultMessage: "Adding comment",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: comment add. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_add_completed: {
          id: "localConversation.pageToolActivity.comment_add.completed",
          defaultMessage: "Added comment",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: comment add. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_add_completedFollowing: {
          id: "localConversation.pageToolActivity.comment_add.completedFollowing",
          defaultMessage: "added comment",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: comment add. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_reply_active: {
          id: "localConversation.pageToolActivity.comment_reply.active",
          defaultMessage: "Replying to comment",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: comment reply. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_reply_completed: {
          id: "localConversation.pageToolActivity.comment_reply.completed",
          defaultMessage: "Replied to comment",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: comment reply. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_reply_completedFollowing: {
          id: "localConversation.pageToolActivity.comment_reply.completedFollowing",
          defaultMessage: "replied to comment",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: comment reply. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_resolve_active: {
          id: "localConversation.pageToolActivity.comment_resolve.active",
          defaultMessage: "Resolving comment",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: comment resolve. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_resolve_completed: {
          id: "localConversation.pageToolActivity.comment_resolve.completed",
          defaultMessage: "Resolved comment",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: comment resolve. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_resolve_completedFollowing: {
          id: "localConversation.pageToolActivity.comment_resolve.completedFollowing",
          defaultMessage: "resolved comment",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: comment resolve. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_reopen_active: {
          id: "localConversation.pageToolActivity.comment_reopen.active",
          defaultMessage: "Reopening comment",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: comment reopen. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_reopen_completed: {
          id: "localConversation.pageToolActivity.comment_reopen.completed",
          defaultMessage: "Reopened comment",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: comment reopen. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_reopen_completedFollowing: {
          id: "localConversation.pageToolActivity.comment_reopen.completedFollowing",
          defaultMessage: "reopened comment",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: comment reopen. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_react_active: {
          id: "localConversation.pageToolActivity.comment_react.active",
          defaultMessage: "Adding reaction",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: comment react. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_react_completed: {
          id: "localConversation.pageToolActivity.comment_react.completed",
          defaultMessage: "Added reaction",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: comment react. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_react_completedFollowing: {
          id: "localConversation.pageToolActivity.comment_react.completedFollowing",
          defaultMessage: "added reaction",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: comment react. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_remove_reaction_active: {
          id: "localConversation.pageToolActivity.comment_remove_reaction.active",
          defaultMessage: "Removing reaction",
          description:
            "Short status label shown in a Codex chat while the assistant is performing this action. Action: comment remove reaction. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_remove_reaction_completed: {
          id: "localConversation.pageToolActivity.comment_remove_reaction.completed",
          defaultMessage: "Removed reaction",
          description:
            "Short status label shown in a Codex chat after the assistant completes this action. Action: comment remove reaction. Spaces are shared workspaces, and pages are documents within them.",
        },
        comment_remove_reaction_completedFollowing: {
          id: "localConversation.pageToolActivity.comment_remove_reaction.completedFollowing",
          defaultMessage: "removed reaction",
          description:
            "Completed status phrase that follows another phrase within a Codex chat activity summary; use sentence-continuation casing. Action: comment remove reaction. Spaces are shared workspaces, and pages are documents within them.",
        },
      }),
      n = new Map(
        [
          "list_spaces",
          "get_space",
          "create_space",
          "list_pages",
          "find_pages",
          "create_page",
          "move_page",
          "read_page",
          "read_artifact",
          "connect_spaces_artifact",
          "read_page_reference",
          "read_page_transcript",
          "read_page_changes",
          "edit_page",
          "create_page_visualization",
          "list_page_comments",
          "manage_page_comment",
          "search_sharing_recipients",
          "get_page_sharing",
          "get_space_sharing",
          "update_page_sharing",
          "update_space_sharing",
        ].map((e) => [
          e,
          {
            active: c[`${e}_active`],
            completed: c[`${e}_completed`],
            completedFollowing: c[`${e}_completedFollowing`],
          },
        ]),
      ),
      r = new Map(
        ["add", "reply", "resolve", "reopen", "react", "remove_reaction"].map((e) => [
          e,
          {
            active: c[`comment_${e}_active`],
            completed: c[`comment_${e}_completed`],
            completedFollowing: c[`comment_${e}_completedFollowing`],
          },
        ]),
      )
    o.d(
      t,
      {},
      {
        W: function ({ tool: e, toolArguments: t }) {
          if ("edit_page" === e || "patch_page" === e) {
            let e = s.safeParse(t)
            return {
              descriptor: e.success ? c.edit_page_approval : c.edit_page_approval_without_target,
              pageId: e.success ? e.data.page_id : void 0,
            }
          }
          if ("reply_page_comment" === e) return { descriptor: c.comment_approval, values: { action: "reply" } }
          if ("manage_page_comment" !== e) return null
          let o = l.safeParse(t)
          return o.success
            ? {
                descriptor: c.comment_approval,
                values: {
                  action: "react" === o.data.action && !1 === o.data.active ? "remove_reaction" : o.data.action,
                },
              }
            : null
        },
        g: function ({ tool: e, toolArguments: t, completed: o, isLeadingSummaryPart: a = !0 }) {
          let i = n.get(e)
          if (("reply_page_comment" === e && (i = r.get("reply")), "manage_page_comment" === e)) {
            let e = l.safeParse(t)
            if (e.success) {
              let t = "react" === e.data.action && !1 === e.data.active ? "remove_reaction" : e.data.action
              i = r.get(t) ?? i
            }
          }
          return null == i ? null : o ? (a ? i.completed : i.completedFollowing) : i.active
        },
      },
    )
  },
  FY2Y(e, t, o) {
    let a = (0, o("nkTT").a)({
      name: "chat-bubble-checkmark-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.807617, width: 13.050781, height: 12.383789 },
        visualBounds: { x: 1.474609, y: 1.807617, width: 13.050781, height: 12.383789 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.474609, y: 1.807617, width: 13.050781, height: 12.383789 },
        center: { x: 8, y: 7.999512 },
        insets: { top: 1.807617, right: 1.47461, bottom: 1.808594, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.999512 }, foreground: { x: 8, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M9.82617 5.80469C9.98754 5.56401 10.3139 5.49907 10.5547 5.66016C10.7952 5.82156 10.8602 6.14795 10.6992 6.38867L7.98633 10.4346C7.70824 10.8487 7.11684 10.8959 6.77637 10.5312L5.35352 9.00684C5.15583 8.79495 5.16725 8.46248 5.37891 8.26465C5.59087 8.06689 5.92328 8.07816 6.12109 8.29004L7.30664 9.56152L9.82617 5.80469Z" fill="currentColor"/> <path d="M8 1.80762C11.575 1.80762 14.5254 4.55257 14.5254 8C14.5252 11.4473 11.5749 14.1914 8 14.1914C6.78477 14.1914 5.75932 13.829 4.75488 13.3594L2.9873 13.8184C2.5113 13.9417 2.07317 13.5182 2.17969 13.0381L2.5498 11.3633C2.03641 10.3597 1.4747 9.3817 1.47461 8C1.47461 4.55257 4.42502 1.80762 8 1.80762ZM8 2.8584C4.94756 2.8584 2.52539 5.18821 2.52539 8C2.52548 9.1334 2.98018 9.88293 3.55176 11.0146C3.62017 11.1502 3.63938 11.3057 3.60645 11.4541L3.34277 12.6406L4.62598 12.3086L4.74023 12.2891C4.81669 12.2832 4.89333 12.2912 4.9668 12.3115L5.0752 12.3516L5.44238 12.5215C6.29248 12.8992 7.09158 13.1416 8 13.1416C11.0523 13.1416 13.4744 10.8116 13.4746 8C13.4746 5.18821 11.0524 2.8584 8 2.8584Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    o.d(t, {}, { N: a })
  },
  cuJP(e, t, o) {
    let a = (0, o("nkTT").a)({
      name: "square-stack-fanned-text-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.52417, y: 1.511719, width: 13.106201, height: 12.954956 },
        visualBounds: { x: 1.52417, y: 1.511719, width: 13.106201, height: 12.954956 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.52417, y: 1.511719, width: 13.106201, height: 12.954956 },
        center: { x: 8.077271, y: 7.989197 },
        insets: { top: 1.511719, right: 1.369629, bottom: 1.533325, left: 1.52417 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.077271, y: 7.989197 }, foreground: { x: 8.077271, y: 7.989197 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.7123 7.79633C8.00086 7.7688 8.25695 7.98139 8.28457 8.26996C8.31193 8.55834 8.10126 8.81451 7.81289 8.84223L5.12832 9.09906C4.83969 9.12669 4.5827 8.91504 4.55508 8.62641C4.52751 8.33782 4.73914 8.08079 5.02773 8.05316L7.7123 7.79633Z" fill="currentColor"/> <path d="M9.02383 4.81C9.31246 4.78237 9.56944 4.995 9.59707 5.28363C9.62446 5.57207 9.41285 5.82823 9.12441 5.8559L4.71719 6.27777C4.42856 6.3054 4.17157 6.09375 4.14394 5.80512C4.11637 5.51653 4.328 5.2595 4.6166 5.23188L9.02383 4.81Z" fill="currentColor"/> <path d="M9.18691 1.52094C10.5026 1.40594 11.6625 2.38006 11.7777 3.69574L11.8178 4.15863L12.4467 4.2143C13.7625 4.32943 14.7366 5.48927 14.6215 6.80512L14.142 12.2836C14.0265 13.599 12.8666 14.5723 11.5512 14.4575L6.07265 13.978C5.04247 13.8878 4.22294 13.1573 3.97012 12.2133C2.93481 12.0262 2.10938 11.1691 2.01308 10.0707L1.53359 4.59125C1.41887 3.27582 2.39299 2.11576 3.7084 2.00043L9.18691 1.52094ZM12.2572 9.17426C12.3721 10.4898 11.399 11.6499 10.0834 11.7651L5.08535 12.2016C5.28816 12.6006 5.68512 12.8901 6.16348 12.9321L11.642 13.4116C12.38 13.4761 13.0313 12.9298 13.0961 12.1918L13.5756 6.71332C13.6401 5.97531 13.0938 5.32499 12.3559 5.2602L11.9105 5.22113L12.2572 9.17426ZM9.27871 2.56684L3.79922 3.04633C3.06153 3.1113 2.51603 3.76262 2.58047 4.50043L3.05996 9.97895C3.12475 10.7167 3.77526 11.262 4.51308 11.1977L9.9916 10.7182C10.7295 10.6535 11.2756 10.004 11.2113 9.26606L10.7318 3.78656C10.667 3.04881 10.0165 2.50244 9.27871 2.56684Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    o.d(t, {}, { U: a })
  },
}
//# sourceMappingURL=164460.5d9128b2db.js.map
