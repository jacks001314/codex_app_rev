export const __rspack_esm_ids = [656792]
export const __webpack_modules__ = {
  N8b3(e, t, a) {
    a.d(t, { Yn: () => I, TA: () => M, WT: () => T })
    var n = a("zTeN"),
      r = a("DBCl"),
      s = a("PFjh"),
      i = a("E8Sp"),
      o = a("SPnB"),
      l = a("SGsN"),
      c = a("svjy"),
      d = a("mNPx"),
      p = a("pyoT"),
      u = a("yGJW"),
      m = a("H2L8"),
      g = a("OWtl"),
      h = a("HFSu"),
      f = a("eShZ"),
      k = a("jGsJ"),
      y = a("OoIX"),
      w = a("HNZf"),
      b = a("D550"),
      v = a("PzpM")
    let P = (0, n.bD)(g.u, (e) => void 0),
      I = (0, n.i1)(g.u, (e, { get: t }) => {
        let a = t(P, e)
        return a?.accountId === t(p.spaceAccountId$) && a?.userId === t(o.chatGptAuthenticatedUserId$) ? a : void 0
      }),
      M = (0, n.un)(g.u, ({ get: e }) =>
        e(v.z$).flatMap((t) => {
          let a = e(I, t.localPageId)
          return a?.response != null && "error" !== a.status
            ? []
            : [
                {
                  id: t.localPageId,
                  name: t.name,
                  title: t.name,
                  backingType: t.backingType,
                  serverSpaceId: t.space?.spaceId,
                  status: a?.status ?? "error",
                },
              ]
        }),
      )
    function T(e, { name: t, createSpace: n, invitations: g = [], appearance: I, resume: M }) {
      let A,
        _,
        j = e.get(p.spaceAccountId$),
        x = e.get(o.chatGptAuthenticatedUserId$),
        S = e.get(o.o8)
      if (null == j) throw Error("space_account_unavailable")
      if (null != M && (M.accountId !== j || M.userId !== x || null == M.space)) throw Error("space_setup_unavailable")
      let C = e.get(o.PO).accountUserId,
        D = M?.localPageId ?? `local-page-${crypto.randomUUID()}`
      ;(0, v.Bz)(
        e,
        M ?? {
          accountId: j,
          userId: x,
          localPageId: D,
          name: t,
          backingType: "drive",
          rootInitialization: "server",
          appearance: I,
          invitations: g.map((e) => ({ ...e, status: "pending" })),
        },
      )
      let q = (0, b.a)((0, s.dj)(e), performance.now(), "space", { surface: "electron", emit: (t) => (0, k.V)(e, t) }),
        O = M?.space,
        E = !1,
        N = new AbortController(),
        W = () => e.get(v.z$).find((e) => e.localPageId === D),
        H = (a) => {
          let n = { localPageId: D, accountId: j, userId: x, name: t, status: a, response: A, metrics: q, retry: G }
          ;(e.set(P, D, n), null != A && e.set(P, A.id, n))
        },
        G = () => {
          if (null != _) return _
          if (E || N.signal.aborted) return Promise.reject(new DOMException("Space creation cancelled", "AbortError"))
          let s = (0, p.watchSpaceAccount)(e, j, x, C, S),
            g = AbortSignal.any([N.signal, s.signal]),
            k = async () => {
              g.throwIfAborted()
              try {
                let a
                ;(null == O
                  ? ((a = await n(g, D)), q.creationRequestSucceeded())
                  : (a = await e
                      .get(p.createSpaceMutation$)
                      .mutateAsync({ requestBody: { name: t }, existingSpace: O, signal: g })),
                  g.throwIfAborted(),
                  (A = a),
                  (O = { spaceId: a.id, rootPageId: a.root_page_id }),
                  q.savedIdentity())
              } catch (a) {
                ;(g.throwIfAborted(), (O = (0, p.pendingSpaceInitialization)(a) ?? O))
                let t = W()
                throw (
                  null != O
                    ? (q.savedIdentity(), null != t && (0, v.Bz)(e, { ...t, space: O }))
                    : (a instanceof f.fk && a.status >= 400 && a.status < 500 && ![408, 499].includes(a.status)) ||
                      (E = !0),
                  q.fail((0, y.XY)(a)),
                  a
                )
              }
              let s = W(),
                i = null != s && !0 !== s.rootInitialized && "server" !== s.rootInitialization
              ;(null != s && (0, v.Bz)(e, { ...s, space: O, rootInitialized: !i }),
                (0, p.cacheCreatedSpace)(e, j, A),
                e.query.setData(p.spaceQuery$, A.id, A),
                i || q.rootInitialized(A.root_page_id),
                H("creating"))
              let l = W()?.appearance,
                c = (0, r._R3)(l?.emoji),
                d = null == c ? null : { kind: "icon", value: c, color: (0, m.sj)(l?.theme) ?? "black" }
              if (i || null != d) {
                let { completeSpaceRootSetup: t } = await Promise.all([a.e(7104), a.e(6735), a.e(224584)]).then(
                  a.bind(a, "PluF"),
                )
                g.throwIfAborted()
                let n = await t(e, A, d, i, g)
                ;(g.throwIfAborted(),
                  (A = {
                    ...(e.query.getData(p.spaceQuery$, A.id) ?? A),
                    symbol: n,
                    can_edit_appearance: null == n && A.can_edit_appearance,
                  }),
                  e.query.setData(p.spaceQuery$, A.id, A),
                  (0, p.cacheCreatedSpace)(e, j, A))
                let r = W()
                ;(null != r && (0, v.Bz)(e, { ...r, rootInitialized: !0 }), i && q.rootInitialized(A.root_page_id))
              }
              if (null == d && null != l && !0 === A.can_edit_appearance) {
                let t = await h.CodexRequest.safePatch("/spaces/v2/{space_id}/appearance", {
                  parameters: { path: { space_id: A.id } },
                  requestBody: l,
                  signal: g,
                })
                ;(g.throwIfAborted(),
                  (A = { ...(e.query.getData(p.spaceQuery$, A.id) ?? A), appearance: t }),
                  e.query.setData(p.spaceQuery$, A.id, A),
                  (0, p.cacheCreatedSpace)(e, j, A))
              }
              let u = W()
              null != u && (0, v.Bz)(e, { ...u, appearance: void 0 })
              let k = W()?.invitations ?? [],
                b = k.filter((e) => "shared" !== e.status)
              if (b.length > 0) {
                let t = await (async function (e, t, a, n, s) {
                  if ((n.throwIfAborted(), 0 === a.length)) return []
                  let i = { type: "space", id: t },
                    l = a.map(({ recipient: e, label: t, secondaryLabel: a, roleId: n }) => ({
                      action: "invite",
                      target: i,
                      recipient: e,
                      roleId: n,
                      invitee: { id: (0, w.hk)(e), label: t, secondaryLabel: a },
                    })),
                    c = new Map(),
                    d = new Set(),
                    u = (e) => {
                      if (n.aborted || d.has(e)) return
                      d.add(e)
                      let t = l.indexOf(e)
                      s?.(t, c.get(e) ?? a[t].recipient)
                    },
                    m = []
                  if (
                    (await e.queryClient
                      .getMutationCache()
                      .build(e.queryClient, {
                        mutationKey: [
                          "space",
                          "save-library-sharing",
                          e.get(o.chatGptAuthenticatedUserId$),
                          e.get(p.spaceAccountId$),
                        ],
                        networkMode: "always",
                        mutationFn: async ({ changes: t }) => {
                          ;(n.throwIfAborted(),
                            await (0, w.X5)(
                              e,
                              t,
                              void 0,
                              void 0,
                              n,
                              (e, t) => c.set(e, t.recipient),
                              (e, t) => {
                                m.push(
                                  t.then(
                                    () => u(e),
                                    () => void 0,
                                  ),
                                )
                              },
                              (e, t) => {
                                ;(c.set(e, t.recipient), u(e))
                              },
                            ))
                        },
                      })
                      .execute({ changes: l }),
                    await (0, r._qC)(Promise.all(m), n),
                    n.throwIfAborted(),
                    d.size < l.length)
                  )
                    try {
                      let t = await (0, w.gv)(e, i, n, !0)
                      ;(n.throwIfAborted(),
                        (0, w.TO)(t) &&
                          l.forEach((e, n) => {
                            let r = c.get(e) ?? a[n].recipient
                            t.shares.some((e) => (0, w.je)(e, r) && e.role_id === a[n].roleId) && u(e)
                          }))
                    } catch {
                      n.throwIfAborted()
                    }
                  return a.map((e, t) => {
                    let a = c.get(l[t]) ?? e.recipient
                    return { ...e, recipient: a, status: d.has(l[t]) ? "shared" : "failed" }
                  })
                })(e, A.id, b, g, (t, a) => {
                  if (g.aborted) return
                  let n = W()
                  if (null != n) {
                    let r = k.indexOf(b[t])
                    ;(0, v.Bz)(e, {
                      ...n,
                      invitations: n.invitations.map((e, t) =>
                        t === r ? { ...e, recipient: a, status: "shared" } : e,
                      ),
                    })
                  }
                })
                g.throwIfAborted()
                let a = W()
                if (
                  (null != a && (0, v.Bz)(e, { ...a, invitations: [...k.filter((e) => "shared" === e.status), ...t] }),
                  t.some((e) => "failed" === e.status))
                )
                  throw Error("space_creation_invitations_incomplete")
              }
              ;((0, v.FT)(e, D), H("created"))
            }
          return (
            H("creating"),
            (_ = Promise.resolve()
              .then(() =>
                null == navigator.locks
                  ? k()
                  : navigator.locks.request(`space-setup:${JSON.stringify([j, x, D])}`, { signal: g }, k),
              )
              .catch((t) => {
                if (g.aborted)
                  throw (
                    N.abort(),
                    e.set(P, D, void 0),
                    null != A && e.set(P, A.id, void 0),
                    q.cancel("account_changed"),
                    t
                  )
                throw (
                  E ? e.set(P, D, void 0) : H("error"),
                  (0, y.XY)(t) || (0, d.ZD)(e.get(u.YV), "pages.space.create", t),
                  q.fail(),
                  (() => {
                    let { pathname: t, search: a } = e.get(i.gM)
                    e.get(p.spaceAccountId$) === j &&
                      e.get(o.chatGptAuthenticatedUserId$) === x &&
                      ("/spaces/new" !== t || new URLSearchParams(a).get("creation") !== D) &&
                      e
                        .get(l.Id)
                        .warning(
                          e
                            .get(c.g)
                            .formatMessage({
                              id: "codex.space.sidebar.spaceSetupNeedsAttention",
                              defaultMessage: "Space setup needs attention",
                              description:
                                "Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                            }),
                        )
                  })(),
                  t
                )
              })
              .finally(() => {
                ;(s.stop(), (_ = void 0))
              }))
          )
        }
      return (G().catch(() => {}), D)
    }
  },
  jG6n(e, t, a) {
    var n = a("zTeN"),
      r = a("ASxG"),
      s = a("W0tK"),
      i = a("fXhT"),
      o = a("OWtl"),
      l = a("J9bg"),
      c = a("Kw4a")
    let d = ["to-do-list", "project-tracker"],
      p = (0, n.un)(o.u, ({ get: e }) => (e(c.wu) ? e(l.S, "4051280260") : void 0)),
      u = (0, n.un)(o.u, ({ get: e }) => (e(c.ou) ? e(l.S, "4051280260") : void 0)),
      m = r.object({
        submitLabel: r.string().trim().min(1).optional(),
        preparingLabel: r.string().trim().min(1).optional(),
        freeformPlaceholder: r.string().trim().min(1).optional(),
        questions: r
          .array(
            r.object({
              question: r.string().trim().min(1),
              answerLabel: r.string().trim().min(1),
              isOther: r.boolean().optional(),
              options: r
                .array(r.object({ id: r.string().trim().min(1), value: r.string().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      g = r.object({
        id: r.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: r.string().trim().min(1),
        prompt: r.string().trim().min(1),
        prefillPrompt: r.string().trim().min(1),
        previewMarkdown: r.string().trim().min(1).optional(),
        previewDocument: r
          .array(r.object({ kind: r.literal("markdown"), markdown: r.string().trim().min(1), layout: i.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: r.string().trim().min(1).nullish(),
        followUp: m.nullish(),
      }),
      h = r.array(g.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      f = r
        .array(r.string())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && d.every((t) => e.includes(t))),
      k = r.object({
        templates: h.optional(),
        templatesByLocale: r.record(r.string().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), h).optional(),
      })
    a.d(
      t,
      {},
      {
        CQ: f,
        Hs: function (e, t) {
          let a = k.safeParse(t)
          if (!a.success) return
          if (a.data.templates?.length === 0) return []
          let n = (0, s.bW)(e) ?? "en",
            r = n.split("-")[0],
            i =
              a.data.templatesByLocale?.[n] ?? a.data.templatesByLocale?.[r] ?? ("en" === r ? a.data.templates : void 0)
          if (null != i && new Set(i.map(({ id: e }) => e)).size === i.length) return i
        },
        WN: u,
        ql: p,
        xN: h,
        z4: g,
      },
    )
  },
  dUuO(e, t, a) {
    var n = a("HgFd"),
      r = a("Qgfj"),
      s = a("jG6n")
    let i = s.z4.required({ previewDocument: !0 }).array()
    function o(e) {
      let t = e.flatMap((e) => (0, n.Cy)(e.markdown).map((t) => ({ ...e, markdown: t })))
      return { previewMarkdown: t.map(({ markdown: e }) => e).join("\n\n"), previewDocument: t }
    }
    let l = (0, r.YK)({
      todoPrefillPrompt: {
        id: "space.pageTemplates.todo.prefill.sourceAware",
        defaultMessage:
          "Help me turn this Page into my to-do list. Check relevant conversations and connected apps you can access for things I need to do. If you can’t find enough, ask me what to add. Replace the sample tasks, keep the checkboxes and any edits I’ve made, and don’t invent tasks or deadlines.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the To-do list template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing tasks, and preserve user edits while replacing sample content.",
      },
      projectTrackerPrefillPrompt: {
        id: "space.pageTemplates.projectTracker.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page a tracker for my project. Use relevant conversations and connected apps you can access to find milestones and tasks, and ask me for anything missing. Replace the examples, keep my edits, and don’t guess at owners, dates, or statuses.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Project tracker template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing details, and preserve user edits while replacing examples.",
      },
      weeklyUpdatePrefillPrompt: {
        id: "space.pageTemplates.weeklyUpdate.prefill.sourceAware",
        defaultMessage:
          "Help me write this week’s update on this Page. Look for progress, blockers, and next steps in relevant conversations and connected apps you can access. Ask which project or week I mean if it’s unclear, and don’t make up accomplishments.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Weekly update template. It asks ChatGPT to use only accessible conversations and connected apps, clarify an ambiguous project or week, and avoid invented accomplishments.",
      },
      feedbackPrefillPrompt: {
        id: "space.pageTemplates.feedback.prefill.sourceAware",
        defaultMessage:
          "Help me organize feedback on this Page. Use relevant conversations and connected apps you can access to find feedback. Ask what product or topic to focus on if it’s unclear, replace the examples with what you find, and don’t invent feedback.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Feedback tracker template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the topic, and replace examples without inventing feedback.",
      },
      releaseNotesPrefillPrompt: {
        id: "space.pageTemplates.releaseNotes.prefill.sourceAware",
        defaultMessage:
          "Help me write release notes on this Page. Check relevant conversations and connected apps you can access for confirmed changes and limitations. Ask which release I mean if it’s unclear, and don’t add unconfirmed details or publish anything.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Release notes template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the release, and avoid unconfirmed details or publishing.",
      },
      projectHomePrefillPrompt: {
        id: "space.pageTemplates.projectHome.prefill.sourceAware",
        defaultMessage:
          "Help me set up this Project Home Page. Use relevant conversations and connected apps you can access for the project’s goals, team, milestones, and links. Ask me for anything missing, keep my edits, and don’t make up owners or dates.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the Project Home template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing project details, and preserve user edits.",
      },
      faqPrefillPrompt: {
        id: "space.pageTemplates.faq.prefill.sourceAware",
        defaultMessage:
          "Help me make an FAQ on this Page. Look for trusted answers in relevant conversations and connected apps you can access. Ask who it’s for and what it’s about if unclear, and leave anything unverified as an open question.",
        description:
          "Unsent draft in the native Page chat composer for a non-Work user choosing the FAQ template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the audience and topic, and leave unverified answers open.",
      },
      customPrefillPrompt: {
        id: "space.pageTemplates.custom.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page my own. Use relevant conversations and connected apps you can access, and ask me what I want to add if it’s unclear. Keep my edits and don’t fill in details you can’t verify.",
        description:
          "Fallback unsent draft in the native Page chat composer for a non-Work user choosing a configured Page template without its own prefill prompt. It asks ChatGPT to use only accessible conversations and connected apps, clarify intent, and preserve user edits.",
      },
      weeklyUpdate: {
        id: "space.pageTemplates.weeklyUpdate.title",
        defaultMessage: "Weekly update",
        description: "Title of the native Weekly update Page template",
      },
      weeklyUpdatePrompt: {
        id: "space.pageTemplates.weeklyUpdate.setup",
        defaultMessage: `Check my relevant connected apps and create a weekly update suitable for sharing with cross-functional partners, stakeholders, and executives.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a weekly update Page for cross-functional partners, stakeholders, and executives. Preserve the instructions to verify sources, keep user edits, and ask only essential questions.",
      },
      releaseNotes: {
        id: "space.pageTemplates.releaseNotes.title",
        defaultMessage: "Release notes",
        description: "Title of the native Release notes Page template",
      },
      releaseNotesPrompt: {
        id: "space.pageTemplates.releaseNotes.setup",
        defaultMessage: `Check my relevant connected apps and create release notes. Ask which project I would like to create release notes for.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a release notes Page. Ask which project to cover. Preserve the instructions to verify sources, keep user edits, and use comments only when input is needed.",
      },
      projectHome: {
        id: "space.pageTemplates.projectHome.title",
        defaultMessage: "Project Home",
        description: "Title of a native Page template organizing project context and resources",
      },
      projectHomePrompt: {
        id: "space.pageTemplates.projectHome.setup",
        defaultMessage: `Help me make this Project Home my own. Start working directly in the Page without a setup interview or waiting for confirmation. Choose a project from available context and begin filling it in; the user can redirect you afterward.

If the Page has an Instructions section, collapse it before adding content so it does not push the useful content below the chat, and keep it collapsed when you finish. If that section exists but the available controls cannot change its collapsed state, say so briefly; do not claim it is collapsed. If there is no Instructions section, continue without creating one or mentioning its absence.

Make sure the Page has a title. If it is untitled, use “Project Home” initially. Preserve an existing title and any user edits.

Before searching connected sources, add an editable starting structure with two sections: Project overview and Essential resources. Include supported details already available in context. Keep this first version compact and useful, without a wall of empty headings or repeated placeholders. Send this brief chat message: “I’m filling in your Project Home. You can edit any section while I work.”

Choose the most relevant project using your best judgment. Prioritize context attached to this Page or its current Space, then recent conversations and project activity. If several projects are plausible, pick the strongest candidate and treat it as a working assumption. Do not stop to ask which project to use or wait for approval before filling in supported details. Choose a real project supported by context; do not invent one. If the initial context provides no candidate, search recent connected sources for one.

Leave one comment explaining the choice: “I picked [project] based on [context] and started filling in this Page. If you’d like a different project, reply here with its name or a source and I’ll switch.”

Prefer anchoring this comment to the Page title. If title comments are unsupported, use the first existing content section outside Instructions. If supported, open and focus the comment so it is visible above the chat. Do not claim it is open or focused unless verified. Do not create body content solely to anchor the comment, and do not repeat the project-selection question in the body.

Continue working immediately after leaving the comment. Use the project’s Slack channel, relevant emails, project notes, and links to fill in the Page incrementally. Write useful findings as you find them instead of waiting until all research is complete. Add short, scannable sections as evidence becomes available:

- Project overview: what we’re building, who it’s for, and why it matters
- Team and responsibilities
- Essential resources
- Recent updates
- Upcoming milestones
- Decisions and open questions
- A short guide for someone joining

Cite sources near the claims they support. Prioritize recent sources for status and milestones, and include relevant dates. Distinguish confirmed decisions from proposals, and commitments from completed work. Flag conflicting information rather than silently choosing one version. Do not invent facts or sample records. Keep detailed tasks in a linked tracker if one exists.

Use Open questions only for substantive project unknowns. Label these “Needs input” or “Not yet found” where useful. Do not create an Open questions section to ask which project to use. If no real project can be found after a reasonable search, preserve the starting structure and explain the missing context in the single comment rather than fabricating a project.

Use Page comments for focused questions and assumptions. Prefer the title, or the first existing content section outside Instructions if title comments are unsupported. Refer to the relevant section in the comment instead of anchoring questions farther down the Page. Ask only what is needed to move forward, and continue supported work while awaiting answers. If a relevant app isn’t connected, offer to connect it and continue with available sources.

When input would help, add one brief, contextual invitation in comments or chat: “Add a project brief here with @, or type @ChatGPT, select it from the Page’s mention menu, and ask me to use a different project. Use / to add content to the Page.” Adapt the example to the actual gap. Do not repeat this guidance in the Page body.

Write using native Page blocks. Check current content before replacing anything, and preserve edits the user makes while you work. When the user names a different project or provides new context, update the relevant sections, revise the choice comment, and remove obsolete content, resolved questions, and unnecessary hints.

Keep chat replies brief and focused on the next step. Do not repeat Page content in chat. Do not imply that the Page is being monitored or updated continuously. Do not send messages or configure recurring updates without asking first.`,
        description:
          "Setup prompt automatically submitted in the new Project Home Page's chat after the user selects its template. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
      },
      projectTracker: {
        id: "space.pageTemplates.projectTracker.title",
        defaultMessage: "Project tracker",
        description: "Title of a native Page template tracking project tasks and milestones",
      },
      projectTrackerPrompt: {
        id: "space.pageTemplates.projectTracker.setup",
        defaultMessage: `Check my relevant connected apps and create a project tracker. Automatically update every morning at 6am in my browser time zone.

Include checkboxes to the left of the milestones and tasks in the table. This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a project tracker Page, including checkbox tables and daily updates at 6 a.m. in the browser time zone. Preserve the instructions to verify sources and keep user edits.",
      },
      todo: {
        id: "space.pageTemplates.todo.title",
        defaultMessage: "To-do list",
        description: "Title of a native Page template for personal tasks across projects",
      },
      todoPrompt: {
        id: "space.pageTemplates.todo.setup",
        defaultMessage: `Check my relevant connected apps and create a to-do checklist. Automatically update every morning at 6am in my browser time zone: check off completed tasks for me, and carry forward incomplete tasks to the next day.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. Do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a personal to-do Page, including daily updates at 6 a.m. in the browser time zone. Preserve the distinction between illustrative tasks and verified user information.",
      },
      feedback: {
        id: "space.pageTemplates.feedback.title",
        defaultMessage: "Feedback tracker",
        description: "Title of a native Page template collecting feedback and summarizing recurring issues",
      },
      feedbackPrompt: {
        id: "space.pageTemplates.feedback.setup",
        defaultMessage: `Check my relevant connected apps and create a feedback tracker. Ask which project I would like to track feedback for. Automatically update every morning at 6am in my browser time zone.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
        description:
          "Setup request for a feedback tracker Page. Ask which project to track and update daily at 6 a.m. in the browser time zone. Preserve the instructions to verify sources and keep user edits.",
      },
      faq: {
        id: "space.pageTemplates.faq.title",
        defaultMessage: "FAQ",
        description: "Title of a native Page template for frequently asked questions and source-backed answers",
      },
      faqPrompt: {
        id: "space.pageTemplates.faq.setup",
        defaultMessage:
          "Help me make this FAQ my own. Ask for the topic, audience and trusted source notes or links, including relevant Slack discussions and approved guidance. Offer to connect relevant apps when needed. Build the most useful questions with concise supported answers and source links. Combine equivalent questions, keep unanswered or disputed questions visible with an owner or next decision, and keep material freshness qualifiers beside the answers they affect. Link a separate feedback tracker if I have one. Write directly into this Page using native Page blocks, preserving its title and my edits. Do not invent answers or treat unconfirmed replies as authoritative guidance. Keep source-channel replies unsent and automatic updates unconfigured unless I ask to set them up. Ask only the setup questions needed to proceed. Keep chat replies brief and focused on the next step. Organize the Page into short, scannable sections with actionable details. Don't repeat Page content in chat.",
        description:
          "Setup prompt automatically submitted in the new FAQ Page's chat after the user selects its template",
      },
    })
    a.d(
      t,
      {},
      {
        l: function (e, t) {
          let a = (0, s.Hs)(e.locale, t)
          if (a?.length === 0) return []
          let n = { kind: "icon", value: "book", color: "black" },
            r = [
              {
                id: "to-do-list",
                symbol: { kind: "icon", value: "logs", color: "green" },
                title: e.formatMessage(l.todo),
                prompt: e.formatMessage(l.todoPrompt),
                prefillPrompt: e.formatMessage(l.todoPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.todo.preview",
                      defaultMessage: `## Today

### Top priorities

- [ ] Run propulsion test

- [ ] Verify course calculations

- [ ] Inspect fuel tanks

### If time allows

- [ ] Inspect radiation shields

- [ ] Test communication systems

- [ ] Write status report`,
                      description:
                        "Illustrative Markdown for the To-do list template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "project-tracker",
                symbol: { kind: "icon", value: "bar-chart", color: "blue" },
                title: e.formatMessage(l.projectTracker),
                prompt: e.formatMessage(l.projectTrackerPrompt),
                prefillPrompt: e.formatMessage(l.projectTrackerPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.attentionHeading",
                      defaultMessage: "## 🔴 Needs immediate attention",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.attention",
                      defaultMessage: "- Communication systems test for launch",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.milestonesHeading",
                      defaultMessage: "## ⛰️ Milestones",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage(
                      {
                        id: "space.pageTemplates.projectTracker.preview.milestonesCheckboxes",
                        defaultMessage: `| Milestone | Status |
| - | - |
| '<ul><li data-checked="false"><p>'Project brief'</p></li></ul>' | Complete |
| '<ul><li data-checked="false"><p>'Prototype review'</p></li></ul>' | In progress |
| '<ul><li data-checked="false"><p>'Launch readiness'</p></li></ul>' | Upcoming |`,
                        description:
                          "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and the ICU-quoted HTML checkbox markup and data-checked attributes; translate only the visible text.",
                      },
                      {},
                    ),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectTracker.preview.tasksHeading",
                      defaultMessage: "## ✅ Tasks",
                      description:
                        "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage(
                      {
                        id: "space.pageTemplates.projectTracker.preview.tasksCheckboxes",
                        defaultMessage: `| Task | Owner | Status |
| - | - | - |
| '<ul><li data-checked="false"><p>'Confirm scope'</p></li></ul>' | Product | Done |
| '<ul><li data-checked="false"><p>'Review designs'</p></li></ul>' | Design | In progress |
| '<ul><li data-checked="false"><p>'Test the core flow'</p></li></ul>' | Engineering | Next |
| '<ul><li data-checked="false"><p>'Prepare launch notes'</p></li></ul>' | Marketing | Next |`,
                        description:
                          "Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and the ICU-quoted HTML checkbox markup and data-checked attributes; translate only the visible text.",
                      },
                      {},
                    ),
                  },
                ],
              },
              {
                id: "weekly-update",
                symbol: { kind: "icon", value: "writing", color: "pink" },
                title: e.formatMessage(l.weeklyUpdate),
                prompt: e.formatMessage(l.weeklyUpdatePrompt),
                prefillPrompt: e.formatMessage(l.weeklyUpdatePrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.weeklyUpdate.preview",
                      defaultMessage: `## ✨ Highlights

- Progress made

## ☝️ Needs attention

- Blockers and decisions needing input

## ▶️ Next week

- Upcoming milestones and confirmed commitments

## 🔗 Sources

- Links to sources`,
                      description:
                        "Illustrative Markdown for the Weekly update template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "feedback-tracker",
                symbol: { kind: "icon", value: "edit", color: "red" },
                title: e.formatMessage(l.feedback),
                prompt: e.formatMessage(l.feedbackPrompt),
                prefillPrompt: e.formatMessage(l.feedbackPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.themesHeading",
                      defaultMessage: "## 🔎 Top themes",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.onboardingTheme",
                      defaultMessage: "1. Make onboarding easier to follow",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.navigationTheme",
                      defaultMessage: "2. Help people find the right resource",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.sharingTheme",
                      defaultMessage: "3. Clarify what happens after sharing",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.registerHeading",
                      defaultMessage: "## 🗂️ Feedback register",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.register",
                      defaultMessage: `| Theme | Source | Next step |
| - | - | - |
| Onboarding | Research notes | Review the first-run flow |
| Navigation | Team channel | Group related resources |
| Sharing | Support email | Clarify confirmation copy |`,
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.summaryHeading",
                      defaultMessage: "## 📝 Summary",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.summary",
                      defaultMessage:
                        "People need clearer guidance at key moments. Start with onboarding, then review navigation and sharing.",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.followupsHeading",
                      defaultMessage: "## ▶️ Follow-ups",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.feedback.preview.followups",
                      defaultMessage: "- Schedule user interviews for next week",
                      description:
                        "Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "release-notes",
                symbol: n,
                title: e.formatMessage(l.releaseNotes),
                prompt: e.formatMessage(l.releaseNotesPrompt),
                prefillPrompt: e.formatMessage(l.releaseNotesPrefillPrompt),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.releaseNotes.preview",
                      defaultMessage: `## 🆕 New

- New capabilities and who can use them

## 🏆 Improvements

- Changes to existing workflows

## 🛠️ Fixes

- Resolved issues and their impact

## 🌐 Availability

- Supported platforms, rollout status, and known limitations.

## 🔗 Sources

- Links to sources`,
                      description:
                        "Illustrative Markdown for the Release notes template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.",
                    }),
                  },
                ],
              },
              {
                id: "project-home",
                symbol: n,
                title: e.formatMessage(l.projectHome),
                prompt: e.formatMessage(l.projectHomePrompt),
                prefillPrompt: e.formatMessage(l.projectHomePrefillPrompt),
                setupQuestion: e.formatMessage({
                  id: "space.pageTemplates.projectHome.question",
                  defaultMessage: "Which project is this for, and which sources should I use?",
                  description:
                    "Immediate setup question for a Project Home Page; the answer identifies the project and permitted source material",
                }),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectHome.preview.intro",
                      defaultMessage: `One place for the team, the plan, and what comes next.

## Overview
Make the next product launch simple, coordinated, and easy to follow.

## Team`,
                      description:
                        "Illustrative intro content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.",
                    }),
                  },
                  {
                    kind: "markdown",
                    layout: "flexible",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectHome.preview.team",
                      defaultMessage: `| Responsibility | Team |
| --- | --- |
| Project lead | Product |
| Experience | Design |
| Delivery | Engineering |`,
                      description:
                        "Illustrative team content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.",
                    }),
                  },
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.projectHome.preview.ending",
                      defaultMessage: `## Milestones
- Align on the plan
- Review the first prototype
- Prepare the launch

## Key resources
- Project brief and goals
- Decisions from the team channel
- Research notes and launch checklist

## Latest update
The brief is ready for review. Next up: confirm owners and milestones.`,
                      description:
                        "Illustrative ending content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.",
                    }),
                  },
                ],
              },
              {
                id: "faq",
                symbol: n,
                title: e.formatMessage(l.faq),
                prompt: e.formatMessage(l.faqPrompt),
                prefillPrompt: e.formatMessage(l.faqPrefillPrompt),
                setupQuestion: e.formatMessage({
                  id: "space.pageTemplates.faq.question",
                  defaultMessage: "What topic and audience is this FAQ for, and which sources should I use?",
                  description:
                    "Immediate setup question for an FAQ Page; the answer identifies the topic, intended audience and trusted source material",
                }),
                previewDocument: [
                  {
                    kind: "markdown",
                    markdown: e.formatMessage({
                      id: "space.pageTemplates.faq.preview",
                      defaultMessage: `Shared answers, grounded in the team's knowledge.

## Getting started
### Where should I start?
Read the project brief for goals, scope, and the people involved.

### Where can I find the latest plan?
The Project Home brings together milestones, resources, and recent decisions.

## Working together
### How do I share feedback?
Add the source discussion and a clear next step to the feedback tracker.

### How are decisions recorded?
Keep the decision, its owner, and supporting context together.

## Open questions
- Who owns the next review?
- Which resources need an update?

## Sources
Project notes, team discussions, and approved guidance.`,
                      description:
                        "Illustrative Markdown for the FAQ thumbnail and initial Page content. Fictional questions and answers, not approved guidance. Preserve Markdown headings and lists.",
                    }),
                  },
                ],
              },
            ],
            c = () =>
              r
                .filter(({ id: e }) => "project-home" !== e && "faq" !== e)
                .map((e) => ({ ...e, ...o(e.previewDocument) }))
          if (null == a) return c()
          let d = i.safeParse(
            a.map((t) => {
              let a = r.find(({ id: e }) => e === t.id),
                n = null == t.prompt ? a?.setupQuestion : void 0,
                s =
                  t.prefillPrompt ??
                  (null == t.prompt ? a?.prefillPrompt : void 0) ??
                  e.formatMessage(l.customPrefillPrompt)
              return {
                ...a,
                ...t,
                prefillPrompt: s,
                previewDocument:
                  t.previewDocument ??
                  (null == t.previewMarkdown
                    ? a?.previewDocument
                    : [{ kind: "markdown", markdown: t.previewMarkdown }]),
                setupQuestion: void 0 !== t.setupQuestion ? t.setupQuestion : n,
              }
            }),
          )
          return d.success
            ? d.data.map((e) => ({
                ...e,
                symbol: r.find(({ id: t }) => t === e.id)?.symbol ?? n,
                ...o(e.previewDocument),
              }))
            : c()
        },
      },
    )
  },
  o72y(e, t, a) {
    var n = a("zTeN"),
      r = a("DBCl"),
      s = a("SPnB"),
      i = a("eFn4"),
      o = a("Ghh3"),
      l = a("e1xH"),
      c = a("pyoT"),
      d = a("OWtl"),
      p = a("JYRT")
    let u = (0, n.un)(d.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(i.lN).status),
      m = (0, n.RD)(d.u, ({ get: e, scope: t }) => {
        let a = e(c.spaceAccountId$),
          n = e(s.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", a, n],
          enabled: e(u) && null != a && null != n,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == a || null == n) throw Error("space_account_unavailable")
            let s = (0, c.watchSpaceAccount)(t, a, n),
              i = AbortSignal.any([e, s.signal])
            try {
              let e = await o.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": a, [r.zBc]: a },
                signal: i,
              })
              return (i.throwIfAborted(), e)
            } finally {
              s.stop()
            }
          },
        }
      }),
      g = (0, n.A4)(
        d.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: t }) => {
          let a,
            n = () => {
              let r = Date.parse(e) - Date.now()
              ;(t(r > 0), r > 0 && (a = setTimeout(n, Math.min(r, 0x7fffffff))))
            }
          return (n(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      h = (0, n.i1)(d.u, (e, { get: t }) => {
        if (!t(u)) return
        let a = t(p.X, "3798925676")
        if (a?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let n = t(m)
        return n.isSuccess ? n.data.suggestions.filter((e) => t(g, e.expires_at)).slice(0, 3) : void 0
      }),
      f = (0, n.un)(
        d.u,
        ({ get: e }) => e(u) && e(p.X, "3798925676")?.value.show_in_template_modal === !0 && e(m).isLoading,
      )
    a.d(t, {}, { BE: f, fH: u, ps: m, x5: h })
  },
  i1Zq(e, t, a) {
    a.d(t, { J: () => y, m: () => w })
    var n = a("QBk8"),
      r = a("zTeN"),
      s = a("PFjh"),
      i = a("Ghh3"),
      o = a("yGJW"),
      l = a("OWtl"),
      c = a("eShZ"),
      d = a("OoIX"),
      p = a("pyoT"),
      u = a("WF9u"),
      m = a("nndI"),
      g = a("SCmN"),
      h = a("Kw4a"),
      f = a("pyo2"),
      k = a("JkZJ")
    let y = (0, r.bD)(l.u, (e) => "idle")
    async function w(e, t, a = !1, l = "onboarding", b) {
      let v = e.get(g.jm)
      if (a && null != v && ("creating" === e.get(y, v.key) || e.get(g.av, v.key)))
        throw Error("Welcome Page is busy; retry reset after it finishes")
      let P = null == v ? void 0 : e.get(m.ax)[v.key]
      if (
        null == v ||
        ("onboarding" === l && !a && !e.get(f.aQ).includes("welcome")) ||
        (!a && null != P) ||
        "creating" === e.get(y, v.key)
      )
        return
      let I = (0, p.watchSpaceAccount)(e, v.accountId, v.userId),
        M = new AbortController(),
        T = e.watch(({ get: e }) => {
          "onboarding" !== l || e(h.vy) || M.abort()
        }),
        A = AbortSignal.any([I.signal, M.signal]),
        _ = e.get(s.T$)
      ;(_.count("codex_pages", "welcome_creation", { outcome: "failed" === e.get(y, v.key) ? "retry" : "started" }),
        e.set(y, v.key, "creating"),
        a && e.set(g.Dj, v.key, "unknown"))
      let j = e.get(m.bs)[v.key],
        x = b ?? e.get(m.DF)[v.key] ?? j?.idempotency_key ?? m.qu
      ;(j?.idempotency_key !== x && (j = void 0), null == j && null == b && (x = (0, m.t8)(x)))
      try {
        ;(null == j || a) && (0, d.Jx)(e)
        let s = () => {
          j?.idempotency_key !== x &&
            ((0, d.Jx)(e),
            (j = {
              idempotency_key: x,
              destination: "personal_file_drive",
              title: (0, k.eg)(t),
              initial_blocks: (0, k.gt)(t, u.rZ),
              parent_page_id: null,
            }))
          let s = j
          return e.get(p.createSpacePageMutation$).mutateAsync({
            source: n.CodexSpacesSource.CODEX_SPACES_SOURCE_WELCOME,
            accountId: v.accountId,
            requestBody: s,
            assertRequestCurrent: () => {
              ;(A.throwIfAborted(),
                e.get(m.bs)[v.key]?.idempotency_key !== s.idempotency_key && (0, d.Jx)(e),
                (0, r.Y)(e, (e) => {
                  ;(e.set(m.DF, (e) => ({ ...e, [v.key]: x })), e.set(m.bs, (e) => ({ ...e, [v.key]: s })))
                }))
            },
            signal: A,
            isExpectedError: (e) =>
              !a &&
              !x.startsWith("space-welcome-readable:") &&
              ((403 === e.status && "page_read_forbidden" === e.errorCode) ||
                (404 === e.status && "page_not_found" === e.errorCode)),
          })
        }
        if (a) {
          let t = P,
            a = !1
          try {
            ;((t = t ?? (await s()).metadata.page_id), A.throwIfAborted())
            try {
              ;(await i.Request.safePost("/pages/{page_id}/delete", {
                parameters: { path: { page_id: t } },
                signal: A,
                isExpectedError: (e) =>
                  (403 === e.status && "page_write_forbidden" === e.errorCode) ||
                  (410 === e.status && "page_deleted" === e.errorCode),
              }),
                (a = !0))
            } catch (e) {
              ;(A.throwIfAborted(), (a = e instanceof c.fk && 410 === e.status && "page_deleted" === e.errorCode))
            }
          } catch (e) {
            if (!(e instanceof c.fk) || 410 !== e.status || "page_deleted" !== e.errorCode) throw e
            a = !0
          }
          ;(A.throwIfAborted(),
            (x = m.qu + ":reset:" + (t ?? crypto.randomUUID())),
            (0, r.Y)(e, (e) => {
              ;(e.set(m.DF, (e) => ({ ...e, [v.key]: x })), (0, g.YB)(e, v.key))
            }),
            a && null != t && (0, p.evictCachedSpacePages)(e, [t], v.accountId, { unavailablePageIds: [t] }))
        }
        let o = await s().catch(async (t) => {
          if (
            !a &&
            t instanceof c.fk &&
            ((403 === t.status && "page_read_forbidden" === t.errorCode) ||
              (404 === t.status && "page_not_found" === t.errorCode)) &&
            !x.startsWith("space-welcome-readable:")
          )
            return (
              A.throwIfAborted(),
              (x = "space-welcome-readable:" + x),
              e.set(m.DF, (e) => ({ ...e, [v.key]: x })),
              s()
            )
          if (!a || !(t instanceof c.fk) || 410 !== t.status || "page_deleted" !== t.errorCode) throw t
          return (
            A.throwIfAborted(),
            (x = m.qu + ":reset:" + crypto.randomUUID()),
            e.set(m.DF, (e) => ({ ...e, [v.key]: x })),
            s()
          )
        })
        if ((A.throwIfAborted(), (0, m.gC)(e, v.key, o.metadata.page_id), null == o.content))
          throw Error("Welcome Page content could not be read")
        ;((0, p.cacheCreatedSpacePage)(e, v.accountId, o),
          (0, r.Y)(e, (e) => {
            ;(e.set(g.Dj, v.key, "available"),
              e.set(m.ax, (e) => ({ ...e, [v.key]: o.metadata.page_id })),
              e.set(y, v.key, "idle"))
          }),
          _.count("codex_pages", "welcome_creation", { outcome: "bound" }))
      } catch (s) {
        let t = !a && !A.aborted && s instanceof c.fk && "page_deleted" === s.errorCode
        ;(t
          ? (0, f.$V)(e, "welcome")
          : A.aborted ||
            (e.set(g.Dj, v.key, "failed"),
            (0, o.yy)(e, n.CodexSpacesOnboarding, {
              action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
              item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
              pageId: e.get(m.FZ)[v.key],
              failureOperation:
                n.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_CREATE,
            })),
          e.set(y, v.key, A.aborted || t ? "idle" : "failed"))
        let r = t ? "deleted" : "failed"
        if (
          (A.aborted && (r = "cancelled"),
          _.count("codex_pages", "welcome_creation", { outcome: r }),
          a || "legacy" === l)
        )
          throw s
      } finally {
        ;(T(), I.stop())
      }
    }
  },
  pyo2(e, t, a) {
    a.d(t, {
      $V: () => C,
      Gd: () => j,
      Ii: () => D,
      Wz: () => T,
      aQ: () => A,
      provisionSpaceWelcomePage: () => S,
      wE: () => _,
    })
    var n = a("zTeN"),
      r = a("SPnB"),
      s = a("svjy"),
      i = a("iyTF"),
      o = a("OWtl"),
      l = a("OMIV"),
      c = a("kpIY"),
      d = a("e1xH"),
      p = a("nTUY"),
      u = a("QftW"),
      m = a("pyoT"),
      g = a("nndI"),
      h = a("SCmN"),
      f = a("Kw4a"),
      k = a("jG6n"),
      y = a("dUuO"),
      w = a("o72y"),
      b = a("v5SL")
    let v = ["welcome", "templates"],
      P = (0, n.A4)(
        o.u,
        (e) => Date.now() >= e + 12096e5,
        (e, { set: t }) => {
          let a,
            n = () => {
              let r = e + 12096e5 - Date.now()
              ;(t(r <= 0), r > 0 && (a = setTimeout(n, Math.min(r, 0x7fffffff))))
            }
          return (n(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      I = (0, n.un)(o.u, ({ get: e }) => {
        let t = e(h.jm)
        if (null == t) return []
        let a = e(b.qZ)[t.key]
        return v.filter(
          (t) =>
            !a?.includes(t) &&
            ("templates" !== t ||
              (e(f.wu) &&
                ((void 0 !== e(k.ql) && (0, y.l)(e(s.g), e(k.ql)?.value).length > 0) ||
                  (e(d.H6, "granola_presentation") && (e(i.i8).data?.length ?? 0) > 0)))),
        )
      }),
      M = (0, n.un)(o.u, ({ get: e }) => {
        if (e(m.pinnedSpacePageIds$).length > 0 || e(m.pinnedSpaceIds$).length > 0) return !0
        let t = e(m.spaceAccountId$)
        if (!e(l.JW, "1425956883") || null == t || t !== e(r.chatGptAuthenticatedAccountId$)) return !1
        let { data: a } = e(p.IO)
        return null == a ? void 0 : a.sites.length > 0
      }),
      T = (0, n.un)(o.u, ({ get: e }) => {
        let t = e(h.jm)
        if (null == t || !e(f.vy)) return !1
        let a = e(b.qZ)[t.key]
        if (v.every((e) => a?.includes(e))) return !1
        let n = e(b.Q6)[t.key]
        if (!0 === n || (null == n && !0 === e(M))) return !1
        let r = e(b.aj)[t.key]
        return !(null != r && e(P, r)) && (e(I).length > 0 || (e(j)?.length ?? 0) > 0)
      }),
      A = (0, n.un)(o.u, ({ get: e }) => (e(T) ? e(I) : [])),
      _ = (0, n.i1)(
        o.u,
        (e, { get: t }) =>
          null != e && t(d._s) && ("pages" === e || t(d.H6, "granola_presentation")) && t(A).includes("templates"),
      ),
      j = (0, n.un)(o.u, ({ get: e }) => {
        let t = e(h.jm),
          a = null == t ? void 0 : e(b.y$, t.key)
        return e(w.x5, "getting-started")?.filter((e) => !a?.[`personalized:${e.id}`])
      })
    function x(e, t) {
      let a = e.get(r.chatGptAuthenticatedUserId$)
      null != a && !0 === e.get(M) && null == e.get(b.Q6)[JSON.stringify([t, a])] && (0, b.al)(e, t, a)
    }
    async function S(e) {
      if (!e.get(f.vy)) return
      let t = e.get(m.spaceAccountId$)
      ;(null != t && x(e, t), await e.when(({ get: e }) => null != e(m.spaceAccountId$) || !e(f.vy)))
      let a = e.get(m.spaceAccountId$)
      if (null == a || !e.get(f.vy)) return
      ;(x(e, a), await e.when(({ get: e }) => null != e(h.jm) || e(m.spaceAccountId$) !== a || !e(f.vy)))
      let n = e.get(h.jm)
      if (
        n?.accountId !== a ||
        ((0, c.EG)(b.ON, { entries: { [n.key]: { value: e.get(b.aj)[n.key] ?? Date.now() } }, maxEntries: 100 }),
        await e.when(({ get: e }) => null != e(b.Q6)[n.key] || e(h.jm)?.key !== n.key || !e(f.vy) || null != e(M)),
        e.get(h.jm)?.key !== n.key || !e.get(f.vy)) ||
        (x(e, a), !e.get(A).includes("welcome"))
      )
        return
      let r = e.get(g.ax)[n.key],
        i = await (0, h.h4)(e, e.get(s.g), r ?? null)
      null != i &&
        e.get(h.jm)?.key === n.key &&
        e.get(A).includes("welcome") &&
        e.get(d.wr) &&
        e.query.getOrFetch(u.ab, i).catch(() => {})
    }
    function C(e, t) {
      let a = e.get(h.jm)
      if (null != a) {
        if ("welcome" !== t && "templates" !== t)
          return void (0, c.EG)((0, b.X1)(a.key), { entries: { [t]: { value: !0 } }, maxEntries: 100 })
        e.set(b.qZ, (e) => ({ ...e, [a.key]: [...new Set([...(e[a.key] ?? []), t])] }))
      }
    }
    function D(e) {
      let t = e.get(h.jm)
      null != t && e.set(b.qZ, (e) => ({ ...e, [t.key]: v }))
    }
  },
  JkZJ(e, t, a) {
    var n = a("HgFd"),
      r = a("WF9u")
    let s = ["⁣⁣", "⁣⁤"]
    a.d(
      t,
      {},
      {
        Qb: function (e) {
          let t = s.find((t) => e.endsWith(t))
          return null == t ? e : e.slice(0, -t.length)
        },
        aA: ["Welcome to Space", "🚀 Getting started with pages", "Getting started with pages"],
        eg: function (e) {
          return e.formatMessage({
            id: "space.gettingStartedPages.pageTitle",
            defaultMessage: "Your guide to pages",
            description: "Title of the introductory Getting Started Page",
          })
        },
        gt: function (e, t) {
          let a = e.formatMessage(
            {
              id: "space.gettingStartedPages.starterBody.guide",
              defaultMessage: `> [!CALLOUT] 💡
>
> Pages are a place for you to write, build, and collaborate with ChatGPT and your teammates. Use this page as your playground to learn the basics — and have fun!

## Getting started

- [ ] **Play with this page.** Type \`/\` to add headings, images, checklists, tables, and more. Try it out in the empty space below 👇

- [ ] **Work with ChatGPT.** Type \`@ChatGPT\`, followed by your request, and ChatGPT will jump in to help with whatever you need.

- [ ] **Get organized.** Instead of folders, organize information by nesting pages *inside of* pages. Type \`/page\` to create a page inside this one.

- [ ] When your masterpiece is ready, **share** it with your teammates (using the share button in the upper-right), **collaborate**, and fiercely debate in the **comments**.

## Imagine anything, and make it real

Create **interactive visualizations** by typing \`/visualize\` and describing your idea, whether it’s *“Show me how my savings could grow with an interactive calculator”*, *“Simulate the solar system”*, or even *“Create a playable mini-piano.”*

{savings}

{solar}

{piano}

---

- [ ] Try it out yourself: In the empty space below, type \`/visualize\` and describe your idea 👇

---

## Put ChatGPT to work

You can add instructions to pages, and ChatGPT will do the work for you, like creating a self-updating to-do list or comprehensive trip planner. Here are a couple examples of pages ChatGPT can create for you.

\`\`\`codex-prompt
Create a daily list of prioritized tasks from my email, messages, and calendar, and update it every morning
\`\`\`

\`\`\`codex-prompt
Create a new trip planner page with flight details, hotel reservations, and tour info, pulled from my emails
\`\`\``,
              description:
                "Initial Markdown for each user's editable guide to Pages. Preserve headings, the light-bulb callout, pointing-down emoji, checkboxes, emphasis, dividers, code fences, and the literal commands /, /page, @ChatGPT, /visualize, and codex-prompt. Preserve the savings, solar, and piano placeholders: each inserts a complete interactive visualization.",
            },
            {
              savings:
                t?.savings == null
                  ? ""
                  : (0, r._i)(
                      t.savings,
                      e.formatMessage({
                        id: "space.welcome.demo.savingsAlt",
                        defaultMessage: "Savings growth calculator",
                        description:
                          "Accessible title for the embedded interactive savings calculator in the Welcome Page",
                      }),
                    ),
              solar:
                t?.solar == null
                  ? ""
                  : (0, r._i)(
                      t.solar,
                      e.formatMessage({
                        id: "space.welcome.demo.solarAlt",
                        defaultMessage: "Solar system explorer",
                        description: "Accessible title for the embedded interactive solar system in the Welcome Page",
                      }),
                    ),
              piano:
                t?.piano == null
                  ? ""
                  : (0, r._i)(
                      t.piano,
                      e.formatMessage({
                        id: "space.welcome.demo.pianoAlt",
                        defaultMessage: "Mini Piano",
                        description: "Accessible title for the embedded playable piano in the Welcome Page",
                      }),
                    ),
            },
          )
          return (0, n.Cy)(a).flatMap((e) => (e.startsWith("- [ ] ") ? [e, ""] : [e]))
        },
        mf: "Your guide to pages",
      },
    )
  },
  sR1U(e, t, a) {
    var n = a("i5ac"),
      r = a.n(n),
      s = a("zTeN"),
      i = a("SPnB"),
      o = a("OWtl"),
      l = a("PVyj"),
      c = a("v4UZ"),
      d = a("N8b3"),
      p = a("rpnz"),
      u = a("e1xH"),
      m = a("jAir"),
      g = a("ELpK"),
      h = a("vpOl"),
      f = a("pyoT")
    let k = (0, s.un)(o.u, ({ get: e }) => {
        let t = e(f.spacePageTree$),
          a = e(f.spacesQuery$).data
        if (null == t || null == a) {
          let a = e(f.visibleSpacePages$)?.items.filter(
            (e) =>
              (0, p.sD)(e.page_id) &&
              null == e.parent &&
              "space" !== e.drive_scope &&
              e.access.can_read &&
              null == e.deleted_at,
          )
          if (!a?.length) return
          t = (0, h.e0)(a, [])
        }
        let n = new Map(a?.items.map((e) => [e.id, e])),
          r = new Set(e(d.TA).map((e) => e.id)),
          s = new Set(t.allLoosePages.map((e) => e.page_id))
        return [...t.pagesById.values()]
          .filter((e) => !r.has(e.page_id))
          .map((e) => ({
            page: e,
            personal: s.has(e.page_id),
            parentSpace: [...(t.spaceIdsByPageId.get(e.page_id) ?? [])].map((e) => n.get(e)).find((e) => null != e),
          }))
          .sort((e, t) => Date.parse(t.page.updated_at) - Date.parse(e.page.updated_at))
      }),
      y = (0, s.un)(o.u, ({ get: e }) => {
        let t = new Set(e(f.spacesQuery$).data?.items.map((e) => e.root_page_id))
        return e(k)?.filter(({ page: e }) => !t.has(e.page_id))
      }),
      w = (0, s.i1)(o.u, (e, { get: t }) => {
        let a = t(k)
        if (!t(c.T).incremental_discovery) return a
        let n = t(g.JC, e).data,
          s = t(f.spacesQuery$).data
        if (null == s || (null == a && null == n)) return
        let o = t(u.bd),
          d = r()(
            [...(0, m.yz)(n ?? [], a?.map(({ page: e }) => e) ?? []), ...(a?.map(({ page: e }) => e) ?? [])],
            "page_id",
          ).map((e) => {
            let a = t(f.loadedSpacePageMetadata$, e.page_id)
            return null != a && (!a.access.can_read || null != a.deleted_at || (0, m.gN)(a, e)) ? a : e
          }),
          p = (0, h.e0)(
            (0, l.uq)(
              { items: d },
              t(l.aP, { accountId: t(f.spaceAccountId$), userId: t(i.chatGptAuthenticatedUserId$) }),
            ).items.filter((e) => e.access.can_read && null == e.deleted_at && (o || null == e.site_project_id)),
            s.items,
          ),
          y = new Set(p.allLoosePages.map((e) => e.page_id))
        return [...p.pagesById.values()]
          .map((e) => ({
            page: e,
            personal: y.has(e.page_id),
            parentSpace: s.items.find((t) => p.spaceIdsByPageId.get(e.page_id)?.has(t.id)),
          }))
          .sort((e, t) => Date.parse(t.page.updated_at) - Date.parse(e.page.updated_at))
      })
    a.d(t, {}, { Zx: w, aH: y, oS: k })
  },
  SCmN(e, t, a) {
    a.d(t, {
      AR: () => q,
      Aq: () => W,
      As: () => N,
      Dj: () => E,
      Hh: () => U,
      MT: () => $,
      YB: () => z,
      ac: () => G,
      av: () => O,
      h4: () => F,
      i$: () => H,
      jm: () => D,
    })
    var n = a("QBk8"),
      r = a("zTeN"),
      s = a("E8Sp"),
      i = a("SPnB"),
      o = a("lBzi"),
      l = a("g2p6"),
      c = a("SGsN"),
      d = a("e1xH"),
      p = a("yGJW"),
      u = a("OWtl"),
      m = a("WFY2"),
      g = a("kpIY"),
      h = a("Nwp9"),
      f = a("eShZ"),
      k = a("pyoT"),
      y = a("Kw4a"),
      w = a("v5SL"),
      b = a("i1Zq"),
      v = a("pyo2"),
      P = a("JkZJ"),
      I = a("sR1U"),
      M = a("nndI"),
      T = a("WP5H")
    let A = "oai/apps/hasOpenedSpaceWelcome",
      _ = "space-welcome-dismissal-v1",
      j = (0, h.m3)(_, {}),
      x = (0, r.bD)(u.u, (e) => !1),
      S = (0, r.vP)(u.u, () => null),
      C = (0, r.bD)(u.u, (e) => ({ visible: !1, pageId: null })),
      D = (0, r.un)(u.u, ({ get: e }) => {
        let t = e(k.spaceAccountId$),
          a = e(i.chatGptAuthenticatedUserId$)
        return null != t && null != a && t === e(l.Sk) ? { accountId: t, userId: a, key: JSON.stringify([t, a]) } : null
      }),
      q = (0, r.i1)(u.u, (e, { get: t }) => {
        let a = t(D)
        return null != a && t(M.ax)[a.key] === e
      }),
      O = (0, r.bD)(u.u, (e) => !1),
      E = (0, r.bD)(u.u, (e) => "unknown"),
      N = (0, r.i1)(u.u, (e, { get: t }) => {
        let a = t(S)
        return (
          t(y.vy) && a?.awaitingPaint === !0 && !t(w.i2, a.identityKey) && a.pageId === e && a.identityKey === t(D)?.key
        )
      }),
      W = (0, r.un)(u.u, ({ get: e }) => {
        let t = e(D)
        if (null == t) return
        let a = e(j)[t.key]
        if (null != a) return !1 !== a
        let n = e(l.s6)
        if (n.isSuccess && !n.isPlaceholderData) return Object.hasOwn(n.data.seenAnnouncements ?? {}, A)
      }),
      H = (0, r.i1)(u.u, (e, { get: t }) => {
        if (!t(d.pagesEnabled$)) return null
        let a = t(D)
        if (null == a) return null
        let n = t(C, a.key)
        if (n.visible) return { pageId: n.pageId }
        if (!1 !== t(W)) return null
        let r = t(k.spacePagesQuery$),
          s = t(k.spacesQuery$)
        if (
          !t(k.spacePagesComplete$) ||
          !r.isSuccess ||
          !r.isFetched ||
          r.isFetching ||
          r.isPlaceholderData ||
          !s.isSuccess ||
          !s.isFetched ||
          s.isFetching
        )
          return null
        let i = t(I.aH)?.filter(({ personal: e }) => e)
        if (null == i) return null
        if (0 === i.length) return { pageId: null }
        let o = i[0].page
        return 1 === i.length && (o.title === e || o.title === P.mf || P.aA.some((e) => o.title === e))
          ? { pageId: null }
          : null
      })
    async function G(e, t, a, n) {
      let r = e.get(D),
        i = n ?? e.get(H, (0, P.eg)(a)),
        { pathname: o, search: l } = e.get(s.gM)
      if (null == r || null == i) return
      let c = await F(e, a, i.pageId, { showErrorToast: !0 })
      if (
        null == c ||
        e.get(D)?.key !== r.key ||
        e.get(s.gM).pathname !== o ||
        e.get(s.gM).search !== l ||
        n?.isCurrent?.() === !1
      )
        return
      let d = e.get(S)
      ;(n?.onOpenPage != null
        ? n.onOpenPage(c)
        : await t(`/space/${c}`, { state: { spaceSidebarAccountId: r.accountId, spaceSidebarPersonal: !0 } }),
        null != d && e.get(S) === d && e.get(D)?.key === r.key && e.set(S, { ...d, awaitingPaint: !0 }),
        (0, T.Q)(e, c, () => e.get(D)?.key === r.key && e.get(M.ax)[r.key] === c).catch(() => {
          m.v.warning("Failed to save the Welcome Page's default icon")
        }))
    }
    async function F(e, t, a, { showErrorToast: s = !1 } = {}) {
      let i = e.get(D)
      if (
        !e.get(d.pagesEnabled$) ||
        null == i ||
        e.get(O, i.key) ||
        ("creating" === e.get(b.J, i.key) && (null != a || null != e.get(M.ax)[i.key]))
      )
        return null
      let o = e.get(y.vy),
        l = (0, k.watchSpaceAccount)(e, i.accountId, i.userId)
      e.set(O, i.key, !0)
      let u = e.get(S),
        m = e.get(M.ax)[i.key],
        g = a ?? m ?? (u?.identityKey === i.key ? u.pageId : null)
      try {
        if (
          null == g &&
          (await (0, b.m)(e, t, !1, o ? "onboarding" : "legacy"),
          await e.when(({ get: e }) => e(D)?.key !== i.key || "creating" !== e(b.J, i.key)),
          l.signal.throwIfAborted(),
          (g = e.get(M.ax)[i.key] ?? null),
          null == g)
        )
          return null
        ;((u?.identityKey !== i.key || u.pageId !== g) &&
          e.set(S, { identityKey: i.key, pageId: g, awaitingPaint: !1 }),
          e.get(C, i.key).visible && e.set(C, i.key, { visible: !0, pageId: g }))
        try {
          await e.query.fetch(k.spacePageQuery$, g)
        } catch (s) {
          l.signal.throwIfAborted()
          let a = e.get(M.DF)[i.key] ?? e.get(M.bs)[i.key]?.idempotency_key,
            n = a ?? M.qu
          if (
            !o ||
            !e.get(y.vy) ||
            !e.get(v.aQ).includes("welcome") ||
            g !== m ||
            !(s instanceof f.fk) ||
            ((403 !== s.status || "page_read_forbidden" !== s.errorCode) &&
              (404 !== s.status || ("page_not_found" !== s.errorCode && "page_trashed" !== s.errorCode))) ||
            (404 !== s.status && n.startsWith("space-welcome-readable:"))
          )
            throw s
          if (404 === s.status && null == a)
            return (
              (0, r.Y)(e, (e) => {
                ;((0, v.$V)(e, "welcome"), e.set(E, i.key, "failed"), e.set(S, null))
              }),
              null
            )
          if (
            ((0, r.Y)(e, (e) => {
              ;(404 !== s.status && e.set(M.DF, (e) => ({ ...e, [i.key]: "space-welcome-readable:" + n })), z(e, i.key))
            }),
            await (0, b.m)(e, t, !1, "onboarding", 404 === s.status ? n : void 0),
            l.signal.throwIfAborted(),
            (g = e.get(M.ax)[i.key] ?? null),
            null == g)
          )
            return null
          ;(e.set(S, { identityKey: i.key, pageId: g, awaitingPaint: !1 }), await e.query.fetch(k.spacePageQuery$, g))
        }
        return (
          l.signal.throwIfAborted(),
          o && e.get(y.vy) && e.get(M.ax)[i.key] === g && (0, M.gC)(e, i.key, g),
          e.set(M.ax, (e) => ({ ...e, [i.key]: g })),
          e.set(E, i.key, "available"),
          g
        )
      } catch (a) {
        if (!l.signal.aborted) {
          if (o && a instanceof f.fk && "page_deleted" === a.errorCode)
            return ((0, v.$V)(e, "welcome"), e.set(S, null), null)
          if (
            (o &&
              e.get(y.vy) &&
              (0, p.yy)(e, n.CodexSpacesOnboarding, {
                action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                pageId: g ?? void 0,
                failureOperation:
                  n.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_OPEN,
              }),
            e.set(E, i.key, "failed"),
            !s)
          )
            return null
          e.get(c.Id).danger(
            t.formatMessage({
              id: "space.gettingStartedPages.openError",
              defaultMessage: "Could not open the Getting Started Page. Try again.",
              description:
                "Error when creating or opening the Getting Started Page fails; the welcome card remains available to retry",
            }),
            { errorAnalytics: { toastId: "space.gettingStartedPages.openError" } },
          )
        }
        return null
      } finally {
        ;(l.stop(), e.set(O, i.key, !1))
      }
    }
    function z(e, t) {
      ;(e.set(E, t, "unknown"),
        e.set(M.ax, (e) => {
          let { [t]: a, ...n } = e
          return n
        }),
        e.set(M.FZ, (e) => {
          let { [t]: a, ...n } = e
          return n
        }),
        e.get(S)?.identityKey === t && e.set(S, null),
        e.set(C, t, { visible: !1, pageId: null }))
    }
    function $(e, t) {
      let a = e.get(S)
      if (a?.pageId !== t) return
      let r = e.get(D)
      null == r ||
        a.identityKey !== r.key ||
        e.get(w.i2, r.key) ||
        (e.get(y.vy) &&
          (0, p.yy)(e, n.CodexSpacesOnboarding, {
            action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_OPENED,
            item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
            pageId: t,
          }),
        e.get(C, r.key).visible && e.set(C, r.key, { visible: !1, pageId: t }),
        (0, g.EG)(_, { entries: { [r.key]: { value: "pending" } } }),
        e.set(S, null),
        U(e))
    }
    async function U(e) {
      if (!e.get(d.pagesEnabled$)) return
      let t = e.get(D)
      if (null == t || e.get(w.i2, t.key) || "pending" !== e.get(j)[t.key] || e.get(x, t.key)) return
      let a = (0, k.watchSpaceAccount)(e, t.accountId, t.userId)
      e.set(x, t.key, !0)
      try {
        if ((await (0, o.hs)(e, A, !1, a.signal), a.signal.throwIfAborted(), "pending" !== e.get(j)[t.key])) return
        ;((0, g.EG)(_, { entries: { [t.key]: { value: "saved" } } }), await e.query.snapshot(l.s6).invalidate())
      } catch {
        a.signal.aborted || m.v.warning("Failed to save Space welcome dismissal")
      } finally {
        ;(a.stop(), e.set(x, t.key, !1))
      }
    }
  },
  WP5H(e, t, a) {
    var n = a("HgFd")
    let r = { kind: "icon", value: "graduation-cap", color: "blue" }
    a.d(
      t,
      {},
      {
        Q: async function (e, t, s) {
          let { withPageMenuSession: i } = await Promise.all([a.e(7104), a.e(6735), a.e(726596)]).then(
            a.bind(a, "tKju"),
          )
          s() &&
            (await i(e, t, "write", async (e) => {
              s() &&
                null == e.getSymbol() &&
                null == (0, n.Od)(e.document.getText("title").toJSON()).emoji &&
                e.mutateDocument((e) => (0, n.UY)(e, r)) &&
                (await e.flush({ scope: "current", timeoutMs: null }))
            }))
        },
        x: r,
      },
    )
  },
  iyTF(e, t, a) {
    a.d(t, { TM: () => P, i8: () => b, JF: () => v })
    var n = a("zTeN"),
      r = a("TNqT"),
      s = a("OWtl"),
      i = a("OMIV"),
      o = a("SPnB"),
      l = a("NRR1"),
      c = a("e1xH"),
      d = a("JYRT"),
      p = a("zgGI"),
      u = a("rvFo"),
      m = a("GDNt"),
      g = a("ASxG")
    let h = g.object({
        width: g.number().int().positive().max(65535),
        height: g.number().int().positive().max(65535),
        blurhash: g.string().max(166),
        blurhashAlpha: g.string().max(166).optional(),
      }),
      f = g.string().regex(/^[a-f0-9]{64}$/),
      k = g
        .object({
          id: g.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
          title: g.string().trim().min(1),
          thumbnailUrl: g.string(),
          thumbnailMetadata: h.optional().catch(void 0),
          publisher: g.literal("openai"),
          revision: f,
          source: g.object({
            format: g.literal("presentation-protobuf"),
            url: g.string(),
            byteLength: g.number().int().positive().max(0x6400000),
            sha256: f,
          }),
        })
        .refine((e) => {
          let t = `https://persistent.oaistatic.com/space-presentation-templates/${e.id}/${e.revision}`
          return e.thumbnailUrl === `${t}/cover.png` && e.source.url === `${t}/presentation.pb`
        }, "Template URLs must identify the same immutable revision"),
      y = g.object({
        schemaVersion: g.literal(1),
        templates: g
          .array(k)
          .refine((e) => new Set(e.map(({ id: e }) => e)).size === e.length, "Template IDs must be unique"),
      }),
      w = (0, n.RD)(s.u, ({ get: e }) => {
        let t = e(o.chatGptAuthenticatedAccountId$),
          a = e(o.o8),
          n = e(d.X, "1122994996")
        return {
          queryKey: ["default-presentation-templates", t, a, n?.value],
          enabled: e(c.pagesEnabled$) && !e(i.RS) && null != t && null != a && e(l.DO) === t,
          gcTime: 0,
          staleTime: u.D.FIVE_MINUTES,
          retry: !1,
          queryFn: () =>
            (function (e) {
              let t = y.safeParse(e)
              if (!t.success) throw Error("Default presentation catalog unavailable")
              return t.data.templates
            })(n?.value),
        }
      }),
      b = (0, n.un)(s.u, ({ get: e }) => (e(i.JW, "2419050919") ? e(w) : e(r.R)))
    async function v(e) {
      e.get(i.JW, "2419050919")
        ? await (async function (e) {
            ;(await e.get(i.M9)?.refreshValuesAsync(), await e.query.invalidate(w))
          })(e)
        : await e.get(r.R).refetch()
    }
    function P(e, t, a) {
      return "source" in t
        ? (async function (e, t, a) {
            let n = e.get(o.chatGptAuthenticatedAccountId$),
              r = e.get(o.o8)
            if (null == n || null == r || e.get(l.DO) !== n) throw Error("Template account unavailable")
            let s = (0, l.hI)(e, n, void 0, void 0, r),
              i = AbortSignal.any([a, s.signal])
            try {
              if ((i.throwIfAborted(), t.source.byteLength > 0x6400000)) throw Error("Template exceeds download limit")
              let e = await m._n.getInstance().fetch(t.source.url, { signal: i })
              if (!e.ok) throw Error("Default presentation template unavailable")
              let a = await (0, p.A)(e, t.source.byteLength, i)
              if (a.size !== t.source.byteLength) throw Error("Template length mismatch")
              let n = await a.arrayBuffer(),
                r = await crypto.subtle.digest("SHA-256", n),
                s = Array.from(new Uint8Array(r), (e) => e.toString(16).padStart(2, "0")).join("")
              if ((i.throwIfAborted(), s !== t.source.sha256)) throw Error("Template integrity mismatch")
              return new Uint8Array(n)
            } catch (t) {
              throw (i.aborted || e.query.invalidate(w), t)
            } finally {
              s.stop()
            }
          })(e, t, a)
        : (0, r.G)(e, t, a)
    }
  },
  J9bg(e, t, a) {
    var n = a("D7Ms"),
      r = a("zTeN"),
      s = a("OWtl"),
      i = a("EWIu"),
      o = a("JYRT"),
      l = a("OMIV")
    let c = (0, r.vU)(s.u, (e, { get: t }) => {
        let a = t(l.M9),
          r = t(o.X, e)
        return {
          queryKey: ["deferred-statsig-config", e, a?.getContext().user, r?.__evaluation],
          queryFn: null == a ? n.hT : () => (0, i.d1)(a, e),
          staleTime: 1 / 0,
          retry: 2,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
        }
      }),
      d = (0, r.i1)(s.u, (e, { get: t }) => {
        let a = t(l.M9),
          n = t(o.X, e)
        return (0, i.tA)(a, e) ? t(c, e).data : n
      })
    a.d(t, {}, { S: d })
  },
  EWIu(e, t, a) {
    a.d(
      t,
      {},
      {
        Ex: function (e, t) {},
        d1: async function (e, t) {
          return e.getDynamicConfig(t)
        },
        tA: function (e, t) {
          return !1
        },
      },
    )
  },
}
//# sourceMappingURL=656792.065b046301.js.map
