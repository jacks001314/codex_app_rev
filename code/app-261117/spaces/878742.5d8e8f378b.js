export const __rspack_esm_ids = [878742]
export const __webpack_modules__ = {
  L6k2(e, t, a) {
    let n = [137, 80, 78, 71, 13, 10, 26, 10],
      s = "OpenAI-Presentation"
    function r(e) {
      if (null == e || "object" != typeof e) return
      let { slideCount: t, backgroundColor: a } = e
      if ("number" == typeof t && Number.isSafeInteger(t) && !(t < 1))
        return {
          slideCount: t,
          ...("string" == typeof a &&
          a.length <= 96 &&
          /^(?:#[\da-f]{3}(?:[\da-f]{3})?|rgba?\(\s*(?:\d+(?:\.\d+)?\s*,\s*){2}\d+(?:\.\d+)?(?:\s*,\s*(?:\d+(?:\.\d+)?|\.\d+))?\s*\))$/i.test(
            a,
          )
            ? { backgroundColor: a }
            : {}),
        }
    }
    a.d(
      t,
      {},
      {
        dA: r,
        q$: function (e) {
          var t
          if (
            !(
              (t = e).length >= 33 &&
              n.every((e, a) => t[a] === e) &&
              13 === new DataView(t.buffer, t.byteOffset).getUint32(8) &&
              73 === t[12] &&
              72 === t[13] &&
              68 === t[14] &&
              82 === t[15]
            ) ||
            e.length < 45
          )
            return
          let a = Math.min(e.length, 301),
            i = new DataView(e.buffer, e.byteOffset, a),
            o = 45 + i.getUint32(33)
          if (
            0x74455874 !== i.getUint32(37) ||
            o > a ||
            (function (e) {
              let t = 0xffffffff
              for (let a of e) {
                t ^= a
                for (let e = 0; e < 8; e++) t = (t >>> 1) ^ (1 & t ? 0xedb88320 : 0)
              }
              return (0xffffffff ^ t) >>> 0
            })(e.subarray(37, o - 4)) !== i.getUint32(o - 4)
          )
            return
          let l = new TextDecoder().decode(e.subarray(41, o - 4))
          if (l.startsWith(`${s}\0`))
            try {
              return r(JSON.parse(l.slice(s.length + 1)))
            } catch {
              return
            }
        },
      },
    )
  },
  jG6n(e, t, a) {
    var n = a("qmMi"),
      s = a("ASxG"),
      r = a("W0tK"),
      i = a("fXhT"),
      o = a("OWtl"),
      l = a("J9bg"),
      d = a("Kw4a")
    let c = ["to-do-list", "project-tracker"],
      p = (0, n.un)(o.u, ({ get: e }) => (e(d.wu) ? e(l.S, "4051280260") : void 0)),
      u = (0, n.un)(o.u, ({ get: e }) => (e(d.ou) ? e(l.S, "4051280260") : void 0)),
      m = (0, n.un)(o.u, ({ get: e }) => (e(d.xk) ? e(l.b, "4051280260") : void 0)),
      g = s.Ikc({
        submitLabel: s.YjP().trim().min(1).optional(),
        preparingLabel: s.YjP().trim().min(1).optional(),
        freeformPlaceholder: s.YjP().trim().min(1).optional(),
        questions: s
          .YOg(
            s.Ikc({
              question: s.YjP().trim().min(1),
              answerLabel: s.YjP().trim().min(1),
              isOther: s.zMY().optional(),
              options: s
                .YOg(s.Ikc({ id: s.YjP().trim().min(1), value: s.YjP().trim().min(1) }))
                .refine(
                  (e) => new Set(e.map(({ id: e }) => e)).size === e.length,
                  "Each option ID in a question must be unique",
                ),
            }),
          )
          .min(1),
      }),
      f = s.Ikc({
        id: s.YjP().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        title: s.YjP().trim().min(1),
        prompt: s.YjP().trim().min(1),
        prefillPrompt: s.YjP().trim().min(1),
        previewMarkdown: s.YjP().trim().min(1).optional(),
        previewDocument: s
          .YOg(s.Ikc({ kind: s.euz("markdown"), markdown: s.YjP().trim().min(1), layout: i.wS.optional() }))
          .min(1)
          .optional(),
        setupQuestion: s.YjP().trim().min(1).nullish(),
        followUp: g.nullish(),
      }),
      h = s.YOg(f.partial({ title: !0, prompt: !0, prefillPrompt: !0, previewMarkdown: !0 })),
      w = s
        .YOg(s.YjP())
        .min(4)
        .max(10)
        .refine((e) => new Set(e).size === e.length && c.every((t) => e.includes(t))),
      y = s.Ikc({
        templates: h.optional(),
        templatesByLocale: s.g1P(s.YjP().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/), h).optional(),
      })
    a.d(
      t,
      {},
      {
        CQ: w,
        Hs: function (e, t) {
          let a = y.safeParse(t)
          if (!a.success) return
          if (a.data.templates?.length === 0) return []
          let n = (0, r.bW)(e) ?? "en",
            s = n.split("-")[0],
            i =
              a.data.templatesByLocale?.[n] ?? a.data.templatesByLocale?.[s] ?? ("en" === s ? a.data.templates : void 0)
          if (null != i && new Set(i.map(({ id: e }) => e)).size === i.length) return i
        },
        WN: u,
        Wz: m,
        ql: p,
        xN: h,
        z4: f,
      },
    )
  },
  U6Ok(e, t, a) {
    a.d(t, { l: () => o })
    var n = a("SOEF"),
      s = a("Qgfj"),
      r = a("jG6n")
    let i = r.z4.required({ previewDocument: !0 }).array()
    function o(e, t) {
      let a = (0, r.Hs)(e.locale, t)
      if (a?.length === 0) return []
      let n = { kind: "icon", value: "book", color: "black" },
        s = [
          {
            id: "to-do-list",
            symbol: { kind: "icon", value: "logs", color: "green" },
            title: e.formatMessage(d.todo),
            prompt: e.formatMessage(d.todoPrompt),
            prefillPrompt: e.formatMessage(d.todoPrefillPrompt),
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
                }),
              },
            ],
          },
          {
            id: "project-tracker",
            symbol: { kind: "icon", value: "bar-chart", color: "blue" },
            title: e.formatMessage(d.projectTracker),
            prompt: e.formatMessage(d.projectTrackerPrompt),
            prefillPrompt: e.formatMessage(d.projectTrackerPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.attentionHeading",
                  defaultMessage: "## \u{1F534} Needs immediate attention",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.attention",
                  defaultMessage: "- Communication systems test for launch",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.milestonesHeading",
                  defaultMessage: "## \u26F0\uFE0F Milestones",
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
                  },
                  {},
                ),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.projectTracker.preview.tasksHeading",
                  defaultMessage: "## \u2705 Tasks",
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
                  },
                  {},
                ),
              },
            ],
          },
          {
            id: "weekly-update",
            symbol: { kind: "icon", value: "writing", color: "pink" },
            title: e.formatMessage(d.weeklyUpdate),
            prompt: e.formatMessage(d.weeklyUpdatePrompt),
            prefillPrompt: e.formatMessage(d.weeklyUpdatePrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.weeklyUpdate.preview",
                  defaultMessage: `## \u{2728} Highlights

- Progress made

## \u{261D}\u{FE0F} Needs attention

- Blockers and decisions needing input

## \u{25B6}\u{FE0F} Next week

- Upcoming milestones and confirmed commitments

## \u{1F517} Sources

- Links to sources`,
                }),
              },
            ],
          },
          {
            id: "feedback-tracker",
            symbol: { kind: "icon", value: "edit", color: "red" },
            title: e.formatMessage(d.feedback),
            prompt: e.formatMessage(d.feedbackPrompt),
            prefillPrompt: e.formatMessage(d.feedbackPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.themesHeading",
                  defaultMessage: "## \u{1F50E} Top themes",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.onboardingTheme",
                  defaultMessage: "1. Make onboarding easier to follow",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.navigationTheme",
                  defaultMessage: "2. Help people find the right resource",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.sharingTheme",
                  defaultMessage: "3. Clarify what happens after sharing",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.registerHeading",
                  defaultMessage: "## \u{1F5C2}\uFE0F Feedback register",
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
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.summaryHeading",
                  defaultMessage: "## \u{1F4DD} Summary",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.summary",
                  defaultMessage:
                    "People need clearer guidance at key moments. Start with onboarding, then review navigation and sharing.",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.followupsHeading",
                  defaultMessage: "## \u25B6\uFE0F Follow-ups",
                }),
              },
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.feedback.preview.followups",
                  defaultMessage: "- Schedule user interviews for next week",
                }),
              },
            ],
          },
          {
            id: "release-notes",
            symbol: n,
            title: e.formatMessage(d.releaseNotes),
            prompt: e.formatMessage(d.releaseNotesPrompt),
            prefillPrompt: e.formatMessage(d.releaseNotesPrefillPrompt),
            previewDocument: [
              {
                kind: "markdown",
                markdown: e.formatMessage({
                  id: "space.pageTemplates.releaseNotes.preview",
                  defaultMessage: `## \u{1F195} New

- New capabilities and who can use them

## \u{1F3C6} Improvements

- Changes to existing workflows

## \u{1F6E0}\u{FE0F} Fixes

- Resolved issues and their impact

## \u{1F310} Availability

- Supported platforms, rollout status, and known limitations.

## \u{1F517} Sources

- Links to sources`,
                }),
              },
            ],
          },
          {
            id: "project-home",
            symbol: n,
            title: e.formatMessage(d.projectHome),
            prompt: e.formatMessage(d.projectHomePrompt),
            prefillPrompt: e.formatMessage(d.projectHomePrefillPrompt),
            setupQuestion: e.formatMessage({
              id: "space.pageTemplates.projectHome.question",
              defaultMessage: "Which project is this for, and which sources should I use?",
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
                }),
              },
            ],
          },
          {
            id: "faq",
            symbol: n,
            title: e.formatMessage(d.faq),
            prompt: e.formatMessage(d.faqPrompt),
            prefillPrompt: e.formatMessage(d.faqPrefillPrompt),
            setupQuestion: e.formatMessage({
              id: "space.pageTemplates.faq.question",
              defaultMessage: "What topic and audience is this FAQ for, and which sources should I use?",
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
                }),
              },
            ],
          },
        ],
        o = () =>
          s.filter(({ id: e }) => "project-home" !== e && "faq" !== e).map((e) => ({ ...e, ...l(e.previewDocument) }))
      if (null == a) return o()
      let c = i.safeParse(
        a.map((t) => {
          let a =
              s.find(({ id: e }) => e === t.id) ??
              (function (e, t) {
                switch (t) {
                  case "feature-backlog":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.title",
                        defaultMessage: "Feature backlog",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.prompt",
                        defaultMessage:
                          "Turn ideas and requests for my product into a feature backlog. Group similar requests, describe the user need, link supporting feedback, and suggest priorities and next decisions. Ask which product if it\u2019s unclear; a few ideas are enough to start. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.feature-backlog.prefillPrompt",
                        defaultMessage:
                          "Organize a feature backlog for my product, grouping requests by user need and suggesting priorities and next decisions. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.feature-backlog.preview.1",
                            defaultMessage: `## Ideas and requests
| Idea | User problem | Evidence | Next decision |
| --- | --- | --- | --- |

## Priorities to discuss
Compare impact, effort, and dependencies where known.

## Open questions
Track what needs research or a product decision.`,
                          }),
                        },
                      ],
                    }
                  case "learning-plan":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.title",
                        defaultMessage: "Learning plan",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.prompt",
                        defaultMessage:
                          "Help me make a plan for something I want to learn. Start with what I already know and what I want to be able to do. Break it into manageable steps with useful resources, practice, and a weekly routine. Include space for notes and progress checks. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.learning-plan.prefillPrompt",
                        defaultMessage:
                          "Make a learning plan with a clear goal, useful resources, practice, and a weekly routine. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.overview",
                            defaultMessage: `**Time:** Two 30-minute sessions a week

## \u{1F3AF} Outcome

Locate five major lunar features on a map and explain the difference between a crater and a dark plain in ordinary language.

## \u{1F9E9} Starting point

I can recognize the Moon\u{2019}s broad light and dark areas. I want to connect those patterns with named places.

## \u{1F5FA}\u{FE0F} Learning path`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.7",
                            defaultMessage: `| Step | Resource | Practice |
| --- | --- | --- |
| Get oriented | NASA Moon overview | Label five features on a sketch |
| Look closely | A library lunar atlas | Compare two images of one region |
| Explain it | My own notes | Write a 100-word visitor caption |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.learning-plan.preview.practiceAndReview",
                            defaultMessage: `## \u{1F4C5} Weekly rhythm

- [ ] Tuesday: read one short section and draw a sketch.

- [ ] Sunday: revisit the sketch without looking at the labels.

- [ ] Explain one feature to a friend.

## \u{1F4DD} Notebook

**Observation:** The same region can look quite different as shadows change.

**Question:** Which lighting makes a crater\u{2019}s shape easiest to see?

## \u{1F501} Progress check

I can locate three of the five features without the atlas. Compare those three under different lighting, then add two more and repeat the unlabeled sketch.

## \u{1F517} Start here

[NASA Moon overview](https://science.nasa.gov/moon/)`,
                          }),
                        },
                      ],
                    }
                  case "weekly-planner":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.title",
                        defaultMessage: "Weekly planner",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.prompt",
                        defaultMessage:
                          "Plan my week around the priorities and commitments I\u2019ve shared. Create a short priority list and a realistic day-by-day plan with suggested focus time and room for rest. Ask what matters most this week if you need a starting point. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.weekly-planner.prefillPrompt",
                        defaultMessage:
                          "Make a realistic weekly plan around my priorities and commitments, with suggested focus time and room for rest. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.priorities",
                            defaultMessage: `## \u{1F3AF} Priorities

- [ ] Finish the lunar exhibit captions.

- [ ] Confirm volunteer roles for Friday.

- [ ] Leave one evening free of commitments.

## \u{1F5D3}\u{FE0F} Week at a glance`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.6",
                            defaultMessage: `| Day | Main focus | Commitment |
| --- | --- | --- |
| Monday | Caption edits | Review with Leo, 14:00 |
| Tuesday | Final captions and handout draft | Approve the full print set |
| Wednesday | Send approved files to the print shop | Volunteer call, 18:00 |
| Thursday | Collect prints and check the room | Free evening |
| Friday | Open house | Arrive at 17:15 |
| Weekend | Rest and a short walk | Sunday journal time |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.weekly-planner.preview.lifeAndReview",
                            defaultMessage: `## \u{1F3E1} Everyday life

- [ ] Pick up groceries on the way home.

- [ ] Return the library book.

- [ ] Call a friend over the weekend.

## \u{1F4CC} Can wait

The archive\u{2019}s video section and the future talk schedule.

## \u{2728} Weekend review

**What helped:** Did the shared caption review resolve questions before printing?

**What to change:** Note any last-minute printing or role changes to allow for in the next event plan.`,
                          }),
                        },
                      ],
                    }
                  case "trip-planner":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.title",
                        defaultMessage: "Trip planner",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.prompt",
                        defaultMessage:
                          "Make a flexible itinerary and planning checklist using the trip details I\u2019ve shared. Include ideas for activities, transport, and accommodation, keeping confirmed bookings easy to identify. Ask where I\u2019d like to go if needed, or help me choose a destination. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.trip-planner.prefillPrompt",
                        defaultMessage:
                          "Make a flexible trip itinerary and planning checklist, including activities, transport, and accommodation. Help me choose a destination if needed. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.overview",
                            defaultMessage:
                              "**Travelers:** Maya and Sam  \n**Pace:** One main activity a day\n\n## \u{1F9ED} The plan\n\nPlan two nights near a mountain observatory. The visitor tour is the main activity; confirm its availability before choosing transport and accommodation.\n\n## \u{1F686} Travel and stay",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.5",
                            defaultMessage: `| Item | Plan | Status |
| --- | --- | --- |
| Outbound | Friday afternoon train, then local shuttle | Compare departure times |
| Accommodation | Two nights in the village | Choose a flexible booking |
| Return | Sunday afternoon train | Leave time for lunch |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.6",
                            defaultMessage: "## \u{1F5D3}\uFE0F Daily outline",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.7",
                            defaultMessage: `| Day | Main plan | Flexible alternative |
| --- | --- | --- |
| Friday | Arrive and settle in | Short village walk |
| Saturday | Observatory visitor tour | Science museum if tours change |
| Sunday | Easy morning walk | Caf\xe9 and photo journal |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.trip-planner.preview.packingAndNextSteps",
                            defaultMessage: `## \u{1F392} Before leaving

- [ ] Check the visitor schedule, reserve the tour if required, and review the weather before departure.

- [ ] Confirm transport and accommodation.

- [ ] Save tickets and maps offline.

- [ ] Pack warm layers, walking shoes, and a notebook.

## \u{1F4A1} Useful notes

Use a $450 planning allowance for two people: $300 for two nights, $120 for meals, and $30 for local transport. Intercity tickets and any tour fees are additional; confirm actual prices before booking. Keep skywatching optional.`,
                          }),
                        },
                      ],
                    }
                  case "budget-tracker":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.title",
                        defaultMessage: "Budget tracker",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.prompt",
                        defaultMessage:
                          "Use relevant financial information from connected apps you can access to build my budget tracker. Organize income and spending, show how they compare, and help me track progress toward my goals. Use the currency shown in my accounts and start with this month unless I specify otherwise. Keep totals for different currencies separate. Use the details I\u2019ve already shared, and ask for missing essentials only after checking the available information. If no financial information is available, start with an editable budget and ask what I\u2019d like to add. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.budget-tracker.prefillPrompt",
                        defaultMessage:
                          "Use financial information from connected apps you can access and details I\u2019ve shared to make a budget tracker for this month. Organize income and spending and track my savings goals, using my accounts\u2019 currencies and keeping their totals separate. If no figures are available, help me start an editable budget. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.budget-tracker.preview.1",
                            defaultMessage: `## Budget period
Add the time period and currency.

## Planned and actual spending
| Category | Planned | Actual | Remaining |
| --- | --- | --- | --- |
| Housing | | | |
| Food | | | |
| Transport | | | |

## Transactions
Add income and expenses with dates and sources.

## Review
Note missing figures and changes for next period.`,
                          }),
                        },
                      ],
                    }
                  case "apartment-hunter":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.title",
                        defaultMessage: "Apartment hunter",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.prompt",
                        defaultMessage:
                          "Organize my apartment search around my location and rent budget. Compare available listings by rent, fees, availability, and my preferences, with links and next steps. If I haven\u2019t added listings yet, start with search criteria and a comparison table. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.apartment-hunter.prefillPrompt",
                        defaultMessage:
                          "Help me compare apartments by rent, fees, availability, and my preferences, with listing links and next steps. Use details I\u2019ve shared and relevant conversations and connected apps you can access; ask for what\u2019s missing after checking them. Update this Page and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.apartment-hunter.preview.1",
                            defaultMessage: `## Search criteria
Add location, budget, move-in timing, and must-haves.

## Shortlist
| Listing | Rent and fees | Availability | Notes |
| --- | --- | --- | --- |

## Next steps
- [ ] Save listings to compare
- [ ] Prepare questions for a viewing

## Viewing notes
Record observations and questions for each apartment.`,
                          }),
                        },
                      ],
                    }
                  case "event-plan":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.event-plan.title",
                        defaultMessage: "Event Plan",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.event-plan.prompt",
                        defaultMessage:
                          "Make a plan for my event with its purpose, key details, schedule, people involved, and preparation checklist. Include a backup plan and follow-up tasks where useful. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.event-plan.prefillPrompt",
                        defaultMessage:
                          "Help me plan my event, including the schedule, people involved, preparation, and follow-up. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.overview",
                            defaultMessage:
                              "**Time:** 18:00\u201320:00 local time  \n**Place:** Northfield Observatory visitor hall  \n**Lead:** Sam Rivera\n\n## \u{1F319} Purpose\n\nAn informal evening of lunar images, short talks, and questions for first-time visitors.\n\n## \u{1F4CB} Essentials",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.5",
                            defaultMessage: `| Item | Plan |
| --- | --- |
| Capacity | 40 visitors |
| Planning budget | $300 total: $100 printing and $200 refreshments |
| Access | Step-free entrance, seating, large-print handouts |
| Main contact | Sam at the welcome desk |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.6",
                            defaultMessage: "## \u{1F570}\uFE0F Run of show",
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.7",
                            defaultMessage: `| Time | Activity | Lead |
| --- | --- | --- |
| 17:15 | Set up and volunteer briefing | Sam |
| 18:00 | Welcome and image gallery | Maya |
| 18:30 | A short tour of the lunar landscape | Priya |
| 19:00 | Indoor questions; outdoor viewing if conditions allow | Priya |
| 20:00 | Close and reset the room | Team |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.event-plan.preview.preparation",
                            defaultMessage: `## \u{2705} Preparation

- [ ] Sam: confirm the room layout and step-free visitor route.

- [ ] Maya: print 50 handouts and the caption cards before the room check.

- [ ] Priya: confirm the observing setup and brief volunteers on the indoor alternative.

## \u{2601}\u{FE0F} If plans change

At 16:00, Sam confirms whether outdoor viewing will run. The indoor event goes ahead either way. Sam updates the welcome desk and guest message; if viewing is cancelled, Priya extends the indoor questions and image discussion.

## \u{1F4DD} Afterwards

- [ ] Gather short visitor comments.

- [ ] Record useful changes for the next event.`,
                          }),
                        },
                      ],
                    }
                  case "personal-goals":
                    return {
                      id: t,
                      title: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.title",
                        defaultMessage: "Personal goals",
                      }),
                      prompt: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.prompt",
                        defaultMessage:
                          "Help me turn the goals I care about into a practical plan. Capture why each goal matters, what progress would look like, and a few steps I can take this week. Suggest ways to make time for them and include a short review section. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      prefillPrompt: e.formatMessage({
                        id: "space.pageTemplates.personal-goals.prefillPrompt",
                        defaultMessage:
                          "Help me make a plan for my personal goals, with signs of progress, a few steps for this week, and time to review how it\u2019s going. Use the details I\u2019ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.",
                      }),
                      previewDocument: [
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.overview",
                            defaultMessage: `**Review:** Last Sunday of each month

## \u{1F9ED} What matters

Over the next twelve weeks, learn a few lunar features, finish a photo journal, and keep one evening a week free.

## \u{1F3AF} Goals`,
                          }),
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.5",
                            defaultMessage: `| Goal | Why | A useful sign of progress |
| --- | --- | --- |
| Learn the lunar landscape | Make skywatching more rewarding | Recognize five named features |
| Make a small photo journal | Finish something tangible | Twelve images with captions |
| Protect unplanned time | Leave room to rest | One free evening each week |`,
                          }),
                          layout: "normal",
                        },
                        {
                          kind: "markdown",
                          markdown: e.formatMessage({
                            id: "space.pageTemplates.personal-goals.preview.rhythmAndReview",
                            defaultMessage: `## \u{1F463} This week

- [ ] Borrow a Moon guide from the library.

- [ ] Choose the first three journal images.

- [ ] Keep Thursday evening free.

## \u{1F5D3}\u{FE0F} Make room

Reserve half an hour on Sunday for the journal. Join one astronomy-club evening each month. Pause the second online course until the next review.

## \u{1F501} Monthly review

**Progress:** The journal theme is chosen and twelve images are shortlisted.

**Lesson:** Short sessions are easier to keep than a whole afternoon.

**Adjustment:** Finish one caption each week so all twelve images are ready by the end of this plan.`,
                          }),
                        },
                      ],
                    }
                  default:
                    return
                }
              })(e, t.id),
            n = null == t.prompt ? a?.setupQuestion : void 0,
            r =
              t.prefillPrompt ??
              (null == t.prompt ? a?.prefillPrompt : void 0) ??
              e.formatMessage(d.customPrefillPrompt)
          return {
            ...a,
            ...t,
            prefillPrompt: r,
            previewDocument:
              t.previewDocument ??
              (null == t.previewMarkdown ? a?.previewDocument : [{ kind: "markdown", markdown: t.previewMarkdown }]),
            setupQuestion: void 0 !== t.setupQuestion ? t.setupQuestion : n,
          }
        }),
      )
      return c.success
        ? c.data.map((e) => ({ ...e, symbol: s.find(({ id: t }) => t === e.id)?.symbol ?? n, ...l(e.previewDocument) }))
        : o()
    }
    function l(e) {
      let t = e.flatMap((e) => (0, n.CyG)(e.markdown).map((t) => ({ ...e, markdown: t })))
      return { previewMarkdown: t.map(({ markdown: e }) => e).join("\n\n"), previewDocument: t }
    }
    let d = (0, s.YK)({
      todoPrefillPrompt: {
        id: "space.pageTemplates.todo.prefill.sourceAware",
        defaultMessage:
          "Help me turn this Page into my to-do list. Check relevant conversations and connected apps you can access for things I need to do. If you can\u2019t find enough, ask me what to add. Replace the sample tasks, keep the checkboxes and any edits I\u2019ve made, and don\u2019t invent tasks or deadlines.",
      },
      projectTrackerPrefillPrompt: {
        id: "space.pageTemplates.projectTracker.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page a tracker for my project. Use relevant conversations and connected apps you can access to find milestones and tasks, and ask me for anything missing. Replace the examples, keep my edits, and don\u2019t guess at owners, dates, or statuses.",
      },
      weeklyUpdatePrefillPrompt: {
        id: "space.pageTemplates.weeklyUpdate.prefill.sourceAware",
        defaultMessage:
          "Help me write this week\u2019s update on this Page. Look for progress, blockers, and next steps in relevant conversations and connected apps you can access. Ask which project or week I mean if it\u2019s unclear, and don\u2019t make up accomplishments.",
      },
      feedbackPrefillPrompt: {
        id: "space.pageTemplates.feedback.prefill.sourceAware",
        defaultMessage:
          "Help me organize feedback on this Page. Use relevant conversations and connected apps you can access to find feedback. Ask what product or topic to focus on if it\u2019s unclear, replace the examples with what you find, and don\u2019t invent feedback.",
      },
      releaseNotesPrefillPrompt: {
        id: "space.pageTemplates.releaseNotes.prefill.sourceAware",
        defaultMessage:
          "Help me write release notes on this Page. Check relevant conversations and connected apps you can access for confirmed changes and limitations. Ask which release I mean if it\u2019s unclear, and don\u2019t add unconfirmed details or publish anything.",
      },
      projectHomePrefillPrompt: {
        id: "space.pageTemplates.projectHome.prefill.sourceAware",
        defaultMessage:
          "Help me set up this Project Home Page. Use relevant conversations and connected apps you can access for the project\u2019s goals, team, milestones, and links. Ask me for anything missing, keep my edits, and don\u2019t make up owners or dates.",
      },
      faqPrefillPrompt: {
        id: "space.pageTemplates.faq.prefill.sourceAware",
        defaultMessage:
          "Help me make an FAQ on this Page. Look for trusted answers in relevant conversations and connected apps you can access. Ask who it\u2019s for and what it\u2019s about if unclear, and leave anything unverified as an open question.",
      },
      customPrefillPrompt: {
        id: "space.pageTemplates.custom.prefill.sourceAware",
        defaultMessage:
          "Help me make this Page my own. Use relevant conversations and connected apps you can access, and ask me what I want to add if it\u2019s unclear. Keep my edits and don\u2019t fill in details you can\u2019t verify.",
      },
      weeklyUpdate: { id: "space.pageTemplates.weeklyUpdate.title", defaultMessage: "Weekly update" },
      weeklyUpdatePrompt: {
        id: "space.pageTemplates.weeklyUpdate.setup",
        defaultMessage: `Check my relevant connected apps and create a weekly update suitable for sharing with cross-functional partners, stakeholders, and executives.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      releaseNotes: { id: "space.pageTemplates.releaseNotes.title", defaultMessage: "Release notes" },
      releaseNotesPrompt: {
        id: "space.pageTemplates.releaseNotes.setup",
        defaultMessage: `Check my relevant connected apps and create release notes. Ask which project I would like to create release notes for.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      projectHome: { id: "space.pageTemplates.projectHome.title", defaultMessage: "Project Home" },
      projectHomePrompt: {
        id: "space.pageTemplates.projectHome.setup",
        defaultMessage: `Help me make this Project Home my own. Start working directly in the Page without a setup interview or waiting for confirmation. Choose a project from available context and begin filling it in; the user can redirect you afterward.

If the Page has an Instructions section, collapse it before adding content so it does not push the useful content below the chat, and keep it collapsed when you finish. If that section exists but the available controls cannot change its collapsed state, say so briefly; do not claim it is collapsed. If there is no Instructions section, continue without creating one or mentioning its absence.

Make sure the Page has a title. If it is untitled, use \u{201C}Project Home\u{201D} initially. Preserve an existing title and any user edits.

Before searching connected sources, add an editable starting structure with two sections: Project overview and Essential resources. Include supported details already available in context. Keep this first version compact and useful, without a wall of empty headings or repeated placeholders. Send this brief chat message: \u{201C}I\u{2019}m filling in your Project Home. You can edit any section while I work.\u{201D}

Choose the most relevant project using your best judgment. Prioritize context attached to this Page or its current Space, then recent conversations and project activity. If several projects are plausible, pick the strongest candidate and treat it as a working assumption. Do not stop to ask which project to use or wait for approval before filling in supported details. Choose a real project supported by context; do not invent one. If the initial context provides no candidate, search recent connected sources for one.

Leave one comment explaining the choice: \u{201C}I picked [project] based on [context] and started filling in this Page. If you\u{2019}d like a different project, reply here with its name or a source and I\u{2019}ll switch.\u{201D}

Prefer anchoring this comment to the Page title. If title comments are unsupported, use the first existing content section outside Instructions. If supported, open and focus the comment so it is visible above the chat. Do not claim it is open or focused unless verified. Do not create body content solely to anchor the comment, and do not repeat the project-selection question in the body.

Continue working immediately after leaving the comment. Use the project\u{2019}s Slack channel, relevant emails, project notes, and links to fill in the Page incrementally. Write useful findings as you find them instead of waiting until all research is complete. Add short, scannable sections as evidence becomes available:

- Project overview: what we\u{2019}re building, who it\u{2019}s for, and why it matters
- Team and responsibilities
- Essential resources
- Recent updates
- Upcoming milestones
- Decisions and open questions
- A short guide for someone joining

Cite sources near the claims they support. Prioritize recent sources for status and milestones, and include relevant dates. Distinguish confirmed decisions from proposals, and commitments from completed work. Flag conflicting information rather than silently choosing one version. Do not invent facts or sample records. Keep detailed tasks in a linked tracker if one exists.

Use Open questions only for substantive project unknowns. Label these \u{201C}Needs input\u{201D} or \u{201C}Not yet found\u{201D} where useful. Do not create an Open questions section to ask which project to use. If no real project can be found after a reasonable search, preserve the starting structure and explain the missing context in the single comment rather than fabricating a project.

Use Page comments for focused questions and assumptions. Prefer the title, or the first existing content section outside Instructions if title comments are unsupported. Refer to the relevant section in the comment instead of anchoring questions farther down the Page. Ask only what is needed to move forward, and continue supported work while awaiting answers. If a relevant app isn\u{2019}t connected, offer to connect it and continue with available sources.

When input would help, add one brief, contextual invitation in comments or chat: \u{201C}Add a project brief here with @, or type @ChatGPT, select it from the Page\u{2019}s mention menu, and ask me to use a different project. Use / to add content to the Page.\u{201D} Adapt the example to the actual gap. Do not repeat this guidance in the Page body.

Write using native Page blocks. Check current content before replacing anything, and preserve edits the user makes while you work. When the user names a different project or provides new context, update the relevant sections, revise the choice comment, and remove obsolete content, resolved questions, and unnecessary hints.

Keep chat replies brief and focused on the next step. Do not repeat Page content in chat. Do not imply that the Page is being monitored or updated continuously. Do not send messages or configure recurring updates without asking first.`,
      },
      projectTracker: { id: "space.pageTemplates.projectTracker.title", defaultMessage: "Project tracker" },
      projectTrackerPrompt: {
        id: "space.pageTemplates.projectTracker.setup",
        defaultMessage: `Check my relevant connected apps and create a project tracker. Automatically update every morning at 6am in my browser time zone.

Include checkboxes to the left of the milestones and tasks in the table. This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      todo: { id: "space.pageTemplates.todo.title", defaultMessage: "To-do list" },
      todoPrompt: {
        id: "space.pageTemplates.todo.setup",
        defaultMessage: `Check my relevant connected apps and create a to-do checklist. Automatically update every morning at 6am in my browser time zone: check off completed tasks for me, and carry forward incomplete tasks to the next day.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. Do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      feedback: { id: "space.pageTemplates.feedback.title", defaultMessage: "Feedback tracker" },
      feedbackPrompt: {
        id: "space.pageTemplates.feedback.setup",
        defaultMessage: `Check my relevant connected apps and create a feedback tracker. Ask which project I would like to track feedback for. Automatically update every morning at 6am in my browser time zone.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,
      },
      faq: { id: "space.pageTemplates.faq.title", defaultMessage: "FAQ" },
      faqPrompt: {
        id: "space.pageTemplates.faq.setup",
        defaultMessage:
          "Help me make this FAQ my own. Ask for the topic, audience and trusted source notes or links, including relevant Slack discussions and approved guidance. Offer to connect relevant apps when needed. Build the most useful questions with concise supported answers and source links. Combine equivalent questions, keep unanswered or disputed questions visible with an owner or next decision, and keep material freshness qualifiers beside the answers they affect. Link a separate feedback tracker if I have one. Write directly into this Page using native Page blocks, preserving its title and my edits. Do not invent answers or treat unconfirmed replies as authoritative guidance. Keep source-channel replies unsent and automatic updates unconfigured unless I ask to set them up. Ask only the setup questions needed to proceed. Keep chat replies brief and focused on the next step. Organize the Page into short, scannable sections with actionable details. Don't repeat Page content in chat.",
      },
    })
  },
  o72y(e, t, a) {
    var n = a("qmMi"),
      s = a("DBCl"),
      r = a("SPnB"),
      i = a("eFn4"),
      o = a("Kwur"),
      l = a("e1xH"),
      d = a("tv8P"),
      c = a("OWtl"),
      p = a("JYRT")
    let u = (0, n.un)(c.u, ({ get: e }) => e(l.pagesEnabled$) && "allowed" === e(i.lN).status),
      m = (0, n.RD)(c.u, ({ get: e, scope: t }) => {
        let a = e(d.spaceAccountId$),
          n = e(r.chatGptAuthenticatedUserId$)
        return {
          queryKey: ["space", "personalized-pages", a, n],
          enabled: e(u) && null != a && null != n,
          staleTime: 6e4,
          gcTime: 0,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (null == a || null == n) throw Error("space_account_unavailable")
            let r = (0, d.watchSpaceAccount)(t, a, n),
              i = AbortSignal.any([e, r.signal])
            try {
              let e = await o.Request.safeGet("/pages/suggestions", {
                additionalHeaders: { "ChatGPT-Account-ID": a, [s.zBc]: a },
                signal: i,
              })
              return (i.throwIfAborted(), e)
            } finally {
              r.stop()
            }
          },
        }
      }),
      g = (0, n.A4)(
        c.u,
        (e) => Date.parse(e) > Date.now(),
        (e, { set: t }) => {
          let a,
            n = () => {
              let s = Date.parse(e) - Date.now()
              ;(t(s > 0), s > 0 && (a = setTimeout(n, Math.min(s, 0x7fffffff))))
            }
          return (n(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      f = (0, n.i1)(c.u, (e, { get: t }) => {
        if (!t(u)) return
        let a = t(p.X, "3798925676")
        if (a?.value["getting-started" === e ? "show_in_getting_started" : "show_in_template_modal"] !== !0) return
        let n = t(m)
        return n.isSuccess ? n.data.suggestions.filter((e) => t(g, e.expires_at)).slice(0, 3) : void 0
      }),
      h = (0, n.un)(
        c.u,
        ({ get: e }) => e(u) && e(p.X, "3798925676")?.value.show_in_template_modal === !0 && e(m).isLoading,
      )
    a.d(t, {}, { BE: h, fH: u, ps: m, x5: f })
  },
  e7M0(e, t, a) {
    var n = a("SPnB"),
      s = a("svjy"),
      r = a("kpIY"),
      i = a("e1xH"),
      o = a("QftW"),
      l = a("tv8P"),
      d = a("vHxi"),
      c = a("nndI"),
      p = a("SCmN"),
      u = a("Kw4a"),
      m = a("v5SL"),
      g = a("pyo2")
    function f(e, t) {
      let a = e.get(n.chatGptAuthenticatedUserId$)
      null != a && !0 === e.get(g.vF) && null == e.get(m.Q6)[JSON.stringify([t, a])] && (0, m.al)(e, t, a)
    }
    a.d(
      t,
      {},
      {
        provisionSpaceWelcomePage: async function (e) {
          if (!e.get(u.vy)) return
          let t = e.get(l.spaceAccountId$)
          ;(null != t && f(e, t), await e.when(({ get: e }) => null != e(l.spaceAccountId$) || !e(u.vy)))
          let a = e.get(l.spaceAccountId$)
          if (null == a || !e.get(u.vy)) return
          ;(f(e, a), await e.when(({ get: e }) => null != e(p.jm) || e(l.spaceAccountId$) !== a || !e(u.vy)))
          let n = e.get(p.jm)
          if (
            n?.accountId !== a ||
            ((0, r.EG)(m.ON, { entries: { [n.key]: { value: e.get(m.aj)[n.key] ?? Date.now() } }, maxEntries: 100 }),
            await e.when(
              ({ get: e }) => null != e(m.Q6)[n.key] || e(p.jm)?.key !== n.key || !e(u.vy) || null != e(g.vF),
            ),
            e.get(p.jm)?.key !== n.key || !e.get(u.vy)) ||
            (f(e, a), !e.get(g.aQ).includes("welcome"))
          )
            return
          let h = e.get(c.ax)[n.key],
            w = await (0, d.h)(e, e.get(s.g), h ?? null)
          null != w &&
            e.get(p.jm)?.key === n.key &&
            e.get(g.aQ).includes("welcome") &&
            e.get(i.wr) &&
            e.query.getOrFetch(o.ab, w).catch(() => {})
        },
      },
    )
  },
  i1Zq(e, t, a) {
    var n = a("QBk8"),
      s = a("qmMi"),
      r = a("PFjh"),
      i = a("Kwur"),
      o = a("yGJW"),
      l = a("OWtl"),
      d = a("eShZ"),
      c = a("OoIX"),
      p = a("tv8P"),
      u = a("WF9u"),
      m = a("nndI"),
      g = a("SCmN"),
      f = a("Kw4a"),
      h = a("pyo2"),
      w = a("JkZJ")
    let y = (0, s.bD)(l.u, (e) => "idle")
    a.d(
      t,
      {},
      {
        J: y,
        m: async function (e, t, a = !1, l = "onboarding", k) {
          let v = e.get(g.jm)
          if (a && null != v && ("creating" === e.get(y, v.key) || e.get(g.av, v.key)))
            throw Error("Welcome Page is busy; retry reset after it finishes")
          let b = null == v ? void 0 : e.get(m.ax)[v.key]
          if (
            null == v ||
            ("onboarding" === l && !a && !e.get(h.aQ).includes("welcome")) ||
            (!a && null != b) ||
            "creating" === e.get(y, v.key)
          )
            return
          let M = (0, p.watchSpaceAccount)(e, v.accountId, v.userId),
            P = new AbortController(),
            T = e.watch(({ get: e }) => {
              "onboarding" !== l || e(f.vy) || P.abort()
            }),
            I = AbortSignal.any([M.signal, P.signal]),
            x = e.get(r.T$)
          ;(x.count("codex_pages", "welcome_creation", { outcome: "failed" === e.get(y, v.key) ? "retry" : "started" }),
            e.set(y, v.key, "creating"),
            a && e.set(g.Dj, v.key, "unknown"))
          let A = e.get(m.bs)[v.key],
            S = k ?? e.get(m.DF)[v.key] ?? A?.idempotency_key ?? m.qu
          ;(A?.idempotency_key !== S && (A = void 0), null == A && null == k && (S = (0, m.t8)(S)))
          try {
            ;(null == A || a) && (0, c.Jx)(e)
            let r = () => {
              A?.idempotency_key !== S &&
                ((0, c.Jx)(e),
                (A = {
                  idempotency_key: S,
                  destination: "personal_file_drive",
                  title: (0, w.eg)(t),
                  initial_blocks: (0, w.gt)(t, u.rZ),
                  parent_page_id: null,
                }))
              let r = A
              return e.get(p.createSpacePageMutation$).mutateAsync({
                source: n.CodexSpacesSource.CODEX_SPACES_SOURCE_WELCOME,
                accountId: v.accountId,
                requestBody: r,
                assertRequestCurrent: () => {
                  ;(I.throwIfAborted(),
                    e.get(m.bs)[v.key]?.idempotency_key !== r.idempotency_key && (0, c.Jx)(e),
                    (0, s.Y)(e, (e) => {
                      ;(e.set(m.DF, (e) => ({ ...e, [v.key]: S })), e.set(m.bs, (e) => ({ ...e, [v.key]: r })))
                    }))
                },
                signal: I,
                isExpectedError: (e) =>
                  !a &&
                  !S.startsWith("space-welcome-readable:") &&
                  ((403 === e.status && "page_read_forbidden" === e.errorCode) ||
                    (404 === e.status && "page_not_found" === e.errorCode)),
              })
            }
            if (a) {
              let t = b,
                a = !1
              try {
                ;((t = t ?? (await r()).metadata.page_id), I.throwIfAborted())
                try {
                  ;(await i.Request.safePost("/pages/{page_id}/delete", {
                    parameters: { path: { page_id: t } },
                    signal: I,
                    isExpectedError: (e) =>
                      (403 === e.status && "page_write_forbidden" === e.errorCode) ||
                      (410 === e.status && "page_deleted" === e.errorCode),
                  }),
                    (a = !0))
                } catch (e) {
                  ;(I.throwIfAborted(),
                    (a = e instanceof d.FetchError && 410 === e.status && "page_deleted" === e.errorCode))
                }
              } catch (e) {
                if (!(e instanceof d.FetchError) || 410 !== e.status || "page_deleted" !== e.errorCode) throw e
                a = !0
              }
              ;(I.throwIfAborted(),
                (S = m.qu + ":reset:" + (t ?? crypto.randomUUID())),
                (0, s.Y)(e, (e) => {
                  ;(e.set(m.DF, (e) => ({ ...e, [v.key]: S })), (0, g.YB)(e, v.key))
                }),
                a && null != t && (0, p.evictCachedSpacePages)(e, [t], v.accountId, { unavailablePageIds: [t] }))
            }
            let o = await r().catch(async (t) => {
              if (
                !a &&
                t instanceof d.FetchError &&
                ((403 === t.status && "page_read_forbidden" === t.errorCode) ||
                  (404 === t.status && "page_not_found" === t.errorCode)) &&
                !S.startsWith("space-welcome-readable:")
              )
                return (
                  I.throwIfAborted(),
                  (S = "space-welcome-readable:" + S),
                  e.set(m.DF, (e) => ({ ...e, [v.key]: S })),
                  r()
                )
              if (!a || !(t instanceof d.FetchError) || 410 !== t.status || "page_deleted" !== t.errorCode) throw t
              return (
                I.throwIfAborted(),
                (S = m.qu + ":reset:" + crypto.randomUUID()),
                e.set(m.DF, (e) => ({ ...e, [v.key]: S })),
                r()
              )
            })
            if ((I.throwIfAborted(), (0, m.gC)(e, v.key, o.metadata.page_id), null == o.content))
              throw Error("Welcome Page content could not be read")
            ;((0, p.cacheCreatedSpacePage)(e, v.accountId, o, { background: !0 }),
              (0, s.Y)(e, (e) => {
                ;(e.set(g.Dj, v.key, "available"),
                  e.set(m.ax, (e) => ({ ...e, [v.key]: o.metadata.page_id })),
                  e.set(y, v.key, "idle"))
              }),
              x.count("codex_pages", "welcome_creation", { outcome: "bound" }))
          } catch (r) {
            let t = !a && !I.aborted && r instanceof d.FetchError && "page_deleted" === r.errorCode
            ;(t
              ? (0, h.$V)(e, "welcome")
              : I.aborted ||
                (e.set(g.Dj, v.key, (0, g.vd)(r)),
                (0, o.yy)(e, n.CodexSpacesOnboarding, {
                  action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                  item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                  pageId: e.get(m.FZ)[v.key],
                  failureOperation:
                    n.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_CREATE,
                })),
              e.set(y, v.key, I.aborted || t ? "idle" : "failed"))
            let s = t ? "deleted" : "failed"
            if (
              (I.aborted && (s = "cancelled"),
              x.count("codex_pages", "welcome_creation", { outcome: s }),
              a || "legacy" === l)
            )
              throw r
          } finally {
            ;(T(), M.stop())
          }
        },
      },
    )
  },
  pyo2(e, t, a) {
    var n = a("qmMi"),
      s = a("TzYl"),
      r = a("SPnB"),
      i = a("svjy"),
      o = a("iyTF"),
      l = a("OWtl"),
      d = a("OMIV"),
      c = a("kpIY"),
      p = a("e1xH"),
      u = a("tv8P"),
      m = a("SCmN"),
      g = a("Kw4a"),
      f = a("jG6n"),
      h = a("U6Ok"),
      w = a("o72y"),
      y = a("v5SL")
    let k = ["welcome", "templates"],
      v = (0, n.A4)(
        l.u,
        (e) => Date.now() >= e + 12096e5,
        (e, { set: t }) => {
          let a,
            n = () => {
              let s = e + 12096e5 - Date.now()
              ;(t(s <= 0), s > 0 && (a = setTimeout(n, Math.min(s, 0x7fffffff))))
            }
          return (n(), () => clearTimeout(a))
        },
        { autoDispose: !0 },
      ),
      b = (0, n.un)(l.u, ({ get: e }) => {
        let t = e(m.jm)
        if (null == t) return []
        let a = e(y.qZ)[t.key]
        return e(g.px)
          ? !a?.includes("templates") && e(g.xk)
            ? ["templates"]
            : []
          : k.filter(
              (t) =>
                !a?.includes(t) &&
                ("templates" !== t ||
                  (e(g.wu) &&
                    ((void 0 !== e(f.ql) && (0, h.l)(e(i.g), e(f.ql)?.value).length > 0) ||
                      (e(p.H6, "granola_presentation") && (e(o.i8).data?.length ?? 0) > 0)))),
            )
      }),
      M = (0, n.un)(l.u, ({ get: e }) => {
        if (e(u.pinnedSpacePageIds$).length > 0 || e(u.pinnedSpaceIds$).length > 0) return !0
        let t = e(u.spaceAccountId$)
        if (!e(d.JW, "1425956883") || null == t || t !== e(r.chatGptAuthenticatedAccountId$)) return !1
        let a = e(s.Zo)
        if (null == a) return !1
        let { data: n } = a
        return null == n ? void 0 : n.length > 0
      }),
      P = (0, n.un)(l.u, ({ get: e }) => {
        let t = e(m.jm)
        if (null == t || !e(g.vy)) return !1
        let a = e(y.qZ)[t.key]
        if (k.every((e) => a?.includes(e))) return !1
        let n = e(y.Q6)[t.key]
        if (!0 === n || (null == n && !0 === e(M))) return !1
        let s = e(y.aj)[t.key]
        return !(null != s && e(v, s)) && (e(b).length > 0 || (!e(g.px) && (e(x)?.length ?? 0) > 0))
      }),
      T = (0, n.un)(l.u, ({ get: e }) => (e(P) ? e(b) : [])),
      I = (0, n.i1)(
        l.u,
        (e, { get: t }) =>
          null != e && t(p._s) && ("pages" === e || t(p.H6, "granola_presentation")) && t(T).includes("templates"),
      ),
      x = (0, n.un)(l.u, ({ get: e }) => {
        let t = e(m.jm),
          a = null == t ? void 0 : e(y.y$, t.key)
        return e(w.x5, "getting-started")?.filter((e) => !a?.[`personalized:${e.id}`])
      })
    a.d(
      t,
      {},
      {
        $V: function (e, t) {
          let a = e.get(m.jm)
          if (null != a) {
            if ("welcome" !== t && "templates" !== t)
              return void (0, c.EG)((0, y.X1)(a.key), { entries: { [t]: { value: !0 } }, maxEntries: 100 })
            e.set(y.qZ, (e) => ({ ...e, [a.key]: [...new Set([...(e[a.key] ?? []), t])] }))
          }
        },
        Gd: x,
        Ii: function (e) {
          let t = e.get(m.jm)
          null != t && e.set(y.qZ, (e) => ({ ...e, [t.key]: k }))
        },
        Wz: P,
        aQ: T,
        vF: M,
        wE: I,
      },
    )
  },
  JkZJ(e, t, a) {
    var n = a("SOEF"),
      s = a("WF9u")
    let r = ["\u2063\u2063", "\u2063\u2064"]
    a.d(
      t,
      {},
      {
        Qb: function (e) {
          let t = r.find((t) => e.endsWith(t))
          return null == t ? e : e.slice(0, -t.length)
        },
        eg: function (e) {
          return e.formatMessage({ id: "space.gettingStartedPages.pageTitle", defaultMessage: "Your guide to pages" })
        },
        gt: function (e, t) {
          let a = e.formatMessage(
            {
              id: "space.gettingStartedPages.starterBody.guide",
              defaultMessage: `> [!CALLOUT] \u{1F4A1}
>
> Pages are a place for you to write, build, and collaborate with ChatGPT and your teammates. Use this page as your playground to learn the basics \u{2014} and have fun!

## Getting started

- [ ] **Play with this page.** Type \`/\` to add headings, images, checklists, tables, and more. Try it out in the empty space below \u{1F447}

- [ ] **Work with ChatGPT.** Type \`@ChatGPT\`, followed by your request, and ChatGPT will jump in to help with whatever you need.

- [ ] **Get organized.** Instead of folders, organize information by nesting pages *inside of* pages. Type \`/page\` to create a page inside this one.

- [ ] When your masterpiece is ready, **share** it with your teammates (using the share button in the upper-right), **collaborate**, and fiercely debate in the **comments**.

## Imagine anything, and make it real

Create **interactive visualizations** by typing \`/visualize\` and describing your idea, whether it\u{2019}s *\u{201C}Show me how my savings could grow with an interactive calculator\u{201D}*, *\u{201C}Simulate the solar system\u{201D}*, or even *\u{201C}Create a playable mini-piano.\u{201D}*

{savings}

{solar}

{piano}

---

- [ ] Try it out yourself: In the empty space below, type \`/visualize\` and describe your idea \u{1F447}

---

## Put ChatGPT to work

You can add instructions to pages, and ChatGPT will do the work for you, like creating a self-updating to-do list or comprehensive trip planner. Here are a couple examples of pages ChatGPT can create for you.

\`\`\`codex-prompt
Create a daily list of prioritized tasks from my email, messages, and calendar, and update it every morning
\`\`\`

\`\`\`codex-prompt
Create a new trip planner page with flight details, hotel reservations, and tour info, pulled from my emails
\`\`\``,
            },
            {
              savings:
                t?.savings == null
                  ? ""
                  : (0, s._i)(
                      t.savings,
                      e.formatMessage({
                        id: "space.welcome.demo.savingsAlt",
                        defaultMessage: "Savings growth calculator",
                      }),
                    ),
              solar:
                t?.solar == null
                  ? ""
                  : (0, s._i)(
                      t.solar,
                      e.formatMessage({ id: "space.welcome.demo.solarAlt", defaultMessage: "Solar system explorer" }),
                    ),
              piano:
                t?.piano == null
                  ? ""
                  : (0, s._i)(
                      t.piano,
                      e.formatMessage({ id: "space.welcome.demo.pianoAlt", defaultMessage: "Mini Piano" }),
                    ),
            },
          )
          return (0, n.CyG)(a).flatMap((e) => (e.startsWith("- [ ] ") ? [e, ""] : [e]))
        },
      },
    )
  },
  vHxi(e, t, a) {
    var n = a("QBk8"),
      s = a("qmMi"),
      r = a("E8Sp"),
      i = a("SGsN"),
      o = a("e1xH"),
      l = a("yGJW"),
      d = a("WFY2"),
      c = a("eShZ"),
      p = a("tv8P"),
      u = a("Kw4a"),
      m = a("i1Zq"),
      g = a("pyo2"),
      f = a("nndI"),
      h = a("SCmN"),
      w = a("WP5H")
    async function y(e, t, a, { showErrorToast: r = !1 } = {}) {
      let d = e.get(h.jm)
      if (
        !e.get(o.pagesEnabled$) ||
        null == d ||
        e.get(h.av, d.key) ||
        ("creating" === e.get(m.J, d.key) && (null != a || null != e.get(f.ax)[d.key]))
      )
        return null
      let w = e.get(u.vy),
        k = (0, p.watchSpaceAccount)(e, d.accountId, d.userId)
      e.set(h.av, d.key, !0)
      let v = e.get(h.Ev),
        b = e.get(f.ax)[d.key],
        M = a ?? b ?? (v?.identityKey === d.key ? v.pageId : null)
      try {
        if (
          null == M &&
          (await (0, m.m)(e, t, !1, w ? "onboarding" : "legacy"),
          await e.when(({ get: e }) => e(h.jm)?.key !== d.key || "creating" !== e(m.J, d.key)),
          k.signal.throwIfAborted(),
          (M = e.get(f.ax)[d.key] ?? null),
          null == M)
        )
          return null
        ;(v?.identityKey !== d.key || v.pageId !== M) &&
          e.set(h.Ev, { identityKey: d.key, pageId: M, awaitingPaint: !1 })
        try {
          await e.query.fetch(p.spacePageQuery$, M)
        } catch (r) {
          k.signal.throwIfAborted()
          let a = e.get(f.DF)[d.key] ?? e.get(f.bs)[d.key]?.idempotency_key,
            n = a ?? f.qu
          if (
            !w ||
            !e.get(u.vy) ||
            !e.get(g.aQ).includes("welcome") ||
            M !== b ||
            !(r instanceof c.FetchError) ||
            ((403 !== r.status || "page_read_forbidden" !== r.errorCode) &&
              (404 !== r.status || ("page_not_found" !== r.errorCode && "page_trashed" !== r.errorCode))) ||
            (404 !== r.status && n.startsWith("space-welcome-readable:"))
          )
            throw r
          if (404 === r.status && null == a)
            return (
              (0, s.Y)(e, (e) => {
                ;((0, g.$V)(e, "welcome"), e.set(h.Dj, d.key, "failed"), e.set(h.Ev, null))
              }),
              null
            )
          if (
            ((0, s.Y)(e, (e) => {
              ;(404 !== r.status && e.set(f.DF, (e) => ({ ...e, [d.key]: "space-welcome-readable:" + n })),
                (0, h.YB)(e, d.key))
            }),
            await (0, m.m)(e, t, !1, "onboarding", 404 === r.status ? n : void 0),
            k.signal.throwIfAborted(),
            (M = e.get(f.ax)[d.key] ?? null),
            null == M)
          )
            return null
          ;(e.set(h.Ev, { identityKey: d.key, pageId: M, awaitingPaint: !1 }),
            await e.query.fetch(p.spacePageQuery$, M))
        }
        return (
          k.signal.throwIfAborted(),
          w && e.get(u.vy) && e.get(f.ax)[d.key] === M && (0, f.gC)(e, d.key, M),
          e.set(f.ax, (e) => ({ ...e, [d.key]: M })),
          e.set(h.Dj, d.key, "available"),
          M
        )
      } catch (a) {
        if (!k.signal.aborted) {
          if (w && a instanceof c.FetchError && "page_deleted" === a.errorCode)
            return ((0, g.$V)(e, "welcome"), e.set(h.Ev, null), null)
          if (
            (w &&
              e.get(u.vy) &&
              (0, l.yy)(e, n.CodexSpacesOnboarding, {
                action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                pageId: M ?? void 0,
                failureOperation:
                  n.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_OPEN,
              }),
            e.set(h.Dj, d.key, (0, h.vd)(a)),
            !r)
          )
            return null
          e.get(i.Id).danger(
            t.formatMessage({
              id: "space.gettingStartedPages.openError",
              defaultMessage: "Could not open the Getting Started Page. Try again.",
            }),
            { errorAnalytics: { toastId: "space.gettingStartedPages.openError" } },
          )
        }
        return null
      } finally {
        ;(k.stop(), e.set(h.av, d.key, !1))
      }
    }
    a.d(
      t,
      {},
      {
        a: async function (e, t, a, n) {
          let s = e.get(h.jm),
            { pathname: i, search: o } = e.get(r.gM)
          if (null == s) return
          let l = await y(e, a, n.pageId, { showErrorToast: !0 })
          if (
            null == l ||
            e.get(h.jm)?.key !== s.key ||
            e.get(r.gM).pathname !== i ||
            e.get(r.gM).search !== o ||
            n.isCurrent?.() === !1
          )
            return
          let c = e.get(h.Ev)
          ;(null != n.onOpenPage
            ? n.onOpenPage(l)
            : await t(`/space/${l}`, { state: { spaceSidebarAccountId: s.accountId } }),
            null != c && e.get(h.Ev) === c && e.get(h.jm)?.key === s.key && e.set(h.Ev, { ...c, awaitingPaint: !0 }),
            (0, w.Q)(e, l, () => e.get(h.jm)?.key === s.key && e.get(f.ax)[s.key] === l).catch(() => {
              d.v.warning("Failed to save the Welcome Page's default icon")
            }))
        },
        h: y,
      },
    )
  },
  SCmN(e, t, a) {
    var n = a("QBk8"),
      s = a("qmMi"),
      r = a("SPnB"),
      i = a("CKur"),
      o = a("g2p6"),
      l = a("e1xH"),
      d = a("yGJW"),
      c = a("OWtl"),
      p = a("WFY2"),
      u = a("kpIY"),
      m = a("Nwp9"),
      g = a("OHD8"),
      f = a("tv8P"),
      h = a("Kw4a"),
      w = a("v5SL"),
      y = a("nndI")
    let k = "oai/apps/hasOpenedSpaceWelcome",
      v = "space-welcome-dismissal-v1",
      b = (0, m.m3)(v, {}),
      M = (0, s.bD)(c.u, (e) => !1),
      P = (0, s.vP)(c.u, () => null),
      T = (0, s.un)(c.u, ({ get: e }) => {
        let t = e(f.spaceAccountId$),
          a = e(r.chatGptAuthenticatedUserId$)
        return null != t && null != a && t === e(o.Sk) ? { accountId: t, userId: a, key: JSON.stringify([t, a]) } : null
      }),
      I = (0, s.i1)(c.u, (e, { get: t }) => {
        let a = t(T)
        return null != a && t(y.ax)[a.key] === e
      }),
      x = (0, s.bD)(c.u, (e) => !1),
      A = (0, s.bD)(c.u, (e) => "unknown"),
      S = (0, s.i1)(c.u, (e, { get: t }) => {
        let a = t(P)
        return (
          t(h.vy) && a?.awaitingPaint === !0 && !t(w.i2, a.identityKey) && a.pageId === e && a.identityKey === t(T)?.key
        )
      }),
      j = (0, s.un)(c.u, ({ get: e }) => {
        let t = e(T)
        if (null == t) return
        let a = e(b)[t.key]
        if (null != a) return !1 !== a
        let n = e(o.s6)
        if (n.isSuccess && !n.isPlaceholderData) return Object.hasOwn(n.data.seenAnnouncements ?? {}, k)
      })
    async function _(e) {
      if (!e.get(l.pagesEnabled$)) return
      let t = e.get(T)
      if (null == t || e.get(w.i2, t.key) || "pending" !== e.get(b)[t.key] || e.get(M, t.key)) return
      let a = (0, f.watchSpaceAccount)(e, t.accountId, t.userId)
      e.set(M, t.key, !0)
      try {
        if ((await (0, i.hs)(e, k, !1, a.signal), a.signal.throwIfAborted(), "pending" !== e.get(b)[t.key])) return
        ;((0, u.EG)(v, { entries: { [t.key]: { value: "saved" } } }), await e.query.snapshot(o.s6).invalidate())
      } catch {
        a.signal.aborted || p.v.warning("Failed to save Space welcome dismissal")
      } finally {
        ;(a.stop(), e.set(M, t.key, !1))
      }
    }
    a.d(
      t,
      {},
      {
        AR: I,
        Aq: j,
        As: S,
        Dj: A,
        Ev: P,
        Hh: _,
        MT: function (e, t) {
          let a = e.get(P)
          if (a?.pageId !== t) return
          let s = e.get(T)
          null == s ||
            a.identityKey !== s.key ||
            e.get(w.i2, s.key) ||
            (e.get(h.vy) &&
              (0, d.yy)(e, n.CodexSpacesOnboarding, {
                action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_OPENED,
                item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                pageId: t,
              }),
            (0, u.EG)(v, { entries: { [s.key]: { value: "pending" } } }),
            e.set(P, null),
            _(e))
        },
        YB: function (e, t) {
          ;(e.set(A, t, "unknown"),
            e.set(y.ax, (e) => {
              let { [t]: a, ...n } = e
              return n
            }),
            e.set(y.FZ, (e) => {
              let { [t]: a, ...n } = e
              return n
            }),
            e.get(P)?.identityKey === t && e.set(P, null))
        },
        av: x,
        jm: T,
        vd: function (e) {
          return e instanceof Error && (0, g.$)(e) ? "retryable" : "failed"
        },
      },
    )
  },
  WP5H(e, t, a) {
    var n = a("SOEF")
    let s = { kind: "icon", value: "graduation-cap", color: "blue" }
    a.d(
      t,
      {},
      {
        Q: async function (e, t, r) {
          let { withPageMenuSession: i } = await Promise.all([a.e(753405), a.e(534377), a.e(193172), a.e(184016)]).then(
            a.bind(a, "tKju"),
          )
          r() &&
            (await i(e, t, "write", async (e) => {
              r() &&
                null == e.getSymbol() &&
                null == (0, n.OdJ)(e.document.getText("title").toJSON()).emoji &&
                e.mutateDocument((e) => (0, n.UYY)(e, s)) &&
                (await e.flush({ scope: "current", timeoutMs: null }))
            }))
        },
        x: s,
      },
    )
  },
  iyTF(e, t, a) {
    a.d(t, { TM: () => P, i8: () => b, JF: () => M })
    var n = a("qmMi"),
      s = a("TNqT"),
      r = a("OWtl"),
      i = a("OMIV"),
      o = a("SPnB"),
      l = a("NRR1"),
      d = a("e1xH"),
      c = a("JYRT"),
      p = a("zgGI"),
      u = a("rvFo"),
      m = a("GDNt"),
      g = a("ASxG"),
      f = a("L6k2")
    let h = g.Ikc({
        width: g.aig().int().positive().max(65535),
        height: g.aig().int().positive().max(65535),
        blurhash: g.YjP().max(166),
        blurhashAlpha: g.YjP().max(166).optional(),
        presentation: g.L5J().transform(f.dA).optional(),
      }),
      w = g.YjP().regex(/^[a-f0-9]{64}$/),
      y = g
        .Ikc({
          id: g.YjP().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
          title: g.YjP().trim().min(1),
          thumbnailUrl: g.YjP(),
          thumbnailMetadata: h.optional().catch(void 0),
          publisher: g.euz("openai"),
          revision: w,
          source: g.Ikc({
            format: g.euz("presentation-protobuf"),
            url: g.YjP(),
            byteLength: g.aig().int().positive().max(0x6400000),
            sha256: w,
          }),
        })
        .refine((e) => {
          let t = `https://persistent.oaistatic.com/space-presentation-templates/${e.id}/${e.revision}`
          return e.thumbnailUrl === `${t}/cover.png` && e.source.url === `${t}/presentation.pb`
        }, "Template URLs must identify the same immutable revision"),
      k = g.Ikc({
        schemaVersion: g.euz(1),
        templates: g
          .YOg(y)
          .refine((e) => new Set(e.map(({ id: e }) => e)).size === e.length, "Template IDs must be unique"),
      }),
      v = (0, n.RD)(r.u, ({ get: e }) => {
        let t = e(o.chatGptAuthenticatedAccountId$),
          a = e(o.o8),
          n = e(c.X, "1122994996")
        return {
          queryKey: ["default-presentation-templates", t, a, n?.value],
          enabled: e(d.pagesEnabled$) && !e(i.RS) && null != t && null != a && e(l.DO) === t,
          gcTime: 0,
          staleTime: u.D.FIVE_MINUTES,
          retry: !1,
          queryFn: () =>
            (function (e) {
              let t = k.safeParse(e)
              if (!t.success) throw Error("Default presentation catalog unavailable")
              return t.data.templates
            })(n?.value),
        }
      }),
      b = (0, n.un)(r.u, ({ get: e }) => (e(i.JW, "2419050919") ? e(v) : e(s.R)))
    async function M(e) {
      e.get(i.JW, "2419050919")
        ? await (async function (e) {
            ;(await e.get(i.M9)?.refreshValuesAsync(), await e.query.invalidate(v))
          })(e)
        : await e.get(s.R).refetch()
    }
    function P(e, t, a) {
      return "source" in t
        ? (async function (e, t, a) {
            let n = e.get(o.chatGptAuthenticatedAccountId$),
              s = e.get(o.o8)
            if (null == n || null == s || e.get(l.DO) !== n) throw Error("Template account unavailable")
            let r = (0, l.hI)(e, n, void 0, void 0, s),
              i = AbortSignal.any([a, r.signal])
            try {
              if ((i.throwIfAborted(), t.source.byteLength > 0x6400000)) throw Error("Template exceeds download limit")
              let e = await m._n.getInstance().fetch(t.source.url, { signal: i })
              if (!e.ok) throw Error("Default presentation template unavailable")
              let a = await (0, p.A)(e, t.source.byteLength, i)
              if (a.size !== t.source.byteLength) throw Error("Template length mismatch")
              let n = await a.arrayBuffer(),
                s = await crypto.subtle.digest("SHA-256", n),
                r = Array.from(new Uint8Array(s), (e) => e.toString(16).padStart(2, "0")).join("")
              if ((i.throwIfAborted(), r !== t.source.sha256)) throw Error("Template integrity mismatch")
              return new Uint8Array(n)
            } catch (t) {
              throw (i.aborted || e.query.invalidate(v), t)
            } finally {
              r.stop()
            }
          })(e, t, a)
        : (0, s.G)(e, t, a)
    }
  },
  TNqT(e, t, a) {
    var n = a("Rxfy"),
      s = a("qmMi"),
      r = a("HJEB"),
      i = a("ldD6"),
      o = a("ASxG"),
      l = a("OiCI"),
      d = a("SPnB"),
      c = a("Kwur"),
      p = a("WzdM"),
      u = a("OWtl"),
      m = a("zgGI"),
      g = a("rvFo"),
      f = a("GDNt"),
      h = a("ygu7"),
      w = a("EEop")
    let y = "artifact-template-",
      k = o.Ikc({
        schemaVersion: o.euz(1),
        kind: o.euz("presentation"),
        nativePresentation: o.Ikc({ schemaVersion: o.euz(1), reference: o.YjP() }),
      }),
      v = (0, s.RD)(u.u, ({ get: e, scope: t }) => {
        let a = e(l.tT),
          s = e(d.o8)
        return {
          queryKey: ["native-presentation-templates", a, s],
          enabled: null != a && null != s,
          staleTime: g.D.FIVE_MINUTES,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            b(t, a, s, e)
            let { plugin_id: o } = await t.query.fetch(h.b4, {
              appId: "connector_openai_default_templates",
              productContext: "chatgpt",
            })
            if ((b(t, a, s, e), null == o)) return []
            let { plugin: l } = await t.queryClient.fetchQuery((0, w.K0)(a, o, e, "chatgpt"))
            b(t, a, s, e)
            let { id: d, version: c } = l.release
            return "ENABLED" !== l.status ||
              null != l.disabled_reason ||
              null == d ||
              null == c ||
              !(0, i.D)(c) ||
              0 > (0, i.r)(c, "0.1.2")
              ? []
              : (l.release.skills ?? []).flatMap((e) => {
                  let t = e.interface?.icon_large_url
                  return e.name.startsWith(y) && "presentation" === (0, n.Ru)(e.description) && t
                    ? [
                        {
                          id: e.name.slice(y.length),
                          title: e.interface?.display_name || (0, r.l)(e.name.slice(y.length)),
                          thumbnail: t,
                          pluginId: o,
                          releaseId: d,
                          skillName: e.name,
                          skillId: e.plugin_release_skill_id,
                        },
                      ]
                    : []
                })
          },
        }
      })
    function b(e, t, a, n) {
      if ((n.throwIfAborted(), null == t || null == a || e.get(l.tT) !== t || e.get(d.o8) !== a))
        throw Error("Template account changed")
    }
    a.d(
      t,
      {},
      {
        G: async function (e, t, n) {
          let s = e.get(l.tT),
            r = e.get(d.o8)
          if (null == s || null == r) throw Error("Template account unavailable")
          let i = await e.queryClient.fetchQuery({
            queryKey: ["plugins", "skill-download", s, r, t.skillId],
            staleTime: g.D.ONE_MINUTE,
            retry: !1,
            queryFn: () =>
              c.Request.safeGet("/ps/plugins/{plugin_id}/skills/{skill_name}", {
                parameters: {
                  path: { plugin_id: t.pluginId, skill_name: t.skillName },
                  query: { includeDownloadUrls: !0 },
                },
                additionalHeaders: { ...(0, p.A)("chatgpt"), "ChatGPT-Account-Id": s },
                signal: n,
                expectedErrorStatuses: [401, 403, 404],
              }),
          })
          if ((b(e, s, r, n), i.plugin_release_id !== t.releaseId || i.plugin_release_skill_id !== t.skillId))
            throw (e.query.invalidate(v), Error("Template release changed"))
          if ("ENABLED" !== i.status || null == i.skill_bundle_download_url) throw Error("Template unavailable")
          let o = await f._n.getInstance().fetch(i.skill_bundle_download_url, { signal: n }),
            u = await (0, m.A)(o, 0x6400000, n),
            h = await (0, m.A)(new Response(u.stream().pipeThrough(new DecompressionStream("gzip"))), 0x6400000, n),
            { parseTar: w } = await a.e(13996).then(a.bind(a, "zXE4")),
            y = w(await h.arrayBuffer(), { filter: (e) => "file" === e.type }),
            M = y.find((e) => "artifact-template.json" === e.name)
          if (null == M || M.size > 65536) throw Error("Native template manifest unavailable")
          let { nativePresentation: P } = k.parse(JSON.parse(M.text)),
            T = y.find((e) => e.name === P.reference)?.data
          if ((b(e, s, r, n), !T?.byteLength)) throw Error("Native template unavailable")
          return Uint8Array.from(T)
        },
        R: v,
      },
    )
  },
  J9bg(e, t, a) {
    var n = a("D7Ms"),
      s = a("qmMi"),
      r = a("OWtl"),
      i = a("EWIu"),
      o = a("JYRT"),
      l = a("OMIV")
    let d = (0, s.vU)(r.u, (e, { get: t }) => {
        let a = t(l.M9),
          s = t(o.X, e)
        return {
          queryKey: ["deferred-statsig-config", e, a?.getContext().user, s?.__evaluation],
          queryFn: null == a ? n.hT : () => (0, i.d1)(a, e),
          staleTime: 1 / 0,
          retry: 2,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchOnReconnect: !0,
        }
      }),
      c = (0, s.i1)(r.u, (e, { get: t }) => {
        let a = t(l.M9),
          n = t(o.X, e)
        if (!(0, i.tA)(a, e)) return { config: n, isLoading: !1 }
        let { data: s, isLoading: r } = t(d, e)
        return { config: s, isLoading: r }
      }),
      p = (0, s.i1)(r.u, (e, { get: t }) => t(c, e).config)
    a.d(t, {}, { S: p, b: c })
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
//# sourceMappingURL=878742.5d8e8f378b.js.map
