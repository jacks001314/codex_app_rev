export const __rspack_esm_ids = [219033]
export const __webpack_modules__ = {
  MWj3(e, t, a) {
    a.d(t, { WorkspaceAgentStudioAssistant: () => eE })
    var n = a("ABep"),
      r = a("QosV"),
      s = a("eZRG"),
      i = a("zd8w"),
      l = {
        "chatkit.error": "onError",
        "chatkit.response.end": "onResponseEnd",
        "chatkit.response.start": "onResponseStart",
        "chatkit.log": "onLog",
        "chatkit.thread.change": "onThreadChange",
        "chatkit.thread.load.start": "onThreadLoadStart",
        "chatkit.thread.load.end": "onThreadLoadEnd",
        "chatkit.tool.change": "onToolChange",
        "chatkit.ready": "onReady",
        "chatkit.effect": "onEffect",
        "chatkit.deeplink": "onDeeplink",
      },
      o = Object.keys(l),
      d = i.forwardRef(function ({ control: e, ...t }, a) {
        let r = i.useRef(null)
        return (
          i.useLayoutEffect(() => {
            let t = r.current
            if (!t) return
            if (customElements.get("openai-chatkit")) return void t.setOptions(e.options)
            let a = !0
            return (
              customElements.whenDefined("openai-chatkit").then(() => {
                a && t.setOptions(e.options)
              }),
              () => {
                a = !1
              }
            )
          }, [e.options]),
          i.useEffect(() => {
            let t = r.current
            if (!t) return
            let a = new AbortController()
            for (let n of o)
              t.addEventListener(
                n,
                (t) => {
                  let a = l[n],
                    r = e.handlers[a]
                  "function" == typeof r && r(t.detail)
                },
                { signal: a.signal },
              )
            return () => {
              a.abort()
            }
          }, [e.handlers]),
          (0, n.jsx)("openai-chatkit", {
            ref: (t) => {
              if (((r.current = t), e.setInstance(t), "function" == typeof a ? a(t) : a && (a.current = t), !r.current))
                return
            },
            ...t,
          })
        )
      })
    function u(e) {
      return (
        (null !== e && "object" == typeof e && [null, Object.prototype].includes(Object.getPrototypeOf(e))) ||
        Array.isArray(e)
      )
    }
    var c = Object.freeze([
        "focusComposer",
        "setThreadId",
        "sendUserMessage",
        "setComposerValue",
        "fetchUpdates",
        "sendCustomAction",
        "showHistory",
        "hideHistory",
      ]),
      p = a("qmMi"),
      m = a("Wf1j"),
      f = a("oyxz"),
      g = a("Ywss"),
      _ = a("i8Zd"),
      h = a("MM0V"),
      y = a("Sm6l"),
      v = a("HOLv"),
      k = a("bVeK"),
      b = a("xqnZ"),
      w = a("OWtl"),
      I = a("hZax"),
      S = a("a6Zv"),
      C = a("bIvi"),
      A = a("qQGj"),
      P = a("keHI"),
      E = a("eFn4"),
      M = a("qoBe"),
      x = a("YchO"),
      T = a("oZOL")
    let O = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    async function R(e, t) {
      let [a, n, r, s, i] = await Promise.all([
        e.query.fetch(x.W, t.agentId).catch(() => void 0),
        e.query.fetch(A.k, t.agentId).catch(() => void 0),
        e.queryClient.fetchQuery((0, P.T9)(t.accountId, t.userId)).catch(() => void 0),
        e.query.fetch(T.t).catch(() => void 0),
        e.query.fetch(E.Jk, t.accountId).catch(() => void 0),
      ])
      return { tree: a, schedules: n, apps: r, slack: s, browsing: i?.beta_settings.browsing }
    }
    function j(e) {
      let t = [],
        a = e.root_node_id
          ? (function t(a) {
              for (let n of a) {
                if (n.id === e.root_node_id) return n
                let a = t(n.children ?? [])
                if (null != a) return a
              }
            })(e.nodes)
          : void 0
      return (
        (null == a ? e.nodes : (a.children ?? [])).forEach((e) =>
          (function e(a, n) {
            let r = n ? `${n}/${a.name}` : a.name
            ;(t.push({ node_id: a.id, path: r, kind: a.kind }), a.children?.forEach((t) => e(t, r)))
          })(e, ""),
        ),
        t
      )
    }
    var F = a("SZCv"),
      L = a.n(F),
      U = a("ASxG"),
      D = a("Kwur"),
      q = a("LNWO"),
      G = a("uTO0"),
      Y = a("OQWN"),
      H = a("muVw"),
      N = a("ivNZ"),
      B = a("yFyI"),
      W = a("AuIy"),
      z = a("heoH"),
      $ = a("SPnB"),
      V = a("Nwp9")
    let K = U.Ikc({ accountId: U.YjP(), userId: U.YjP(), agentId: U.YjP(), threadId: U.YjP(), updatedAt: U.aig() }),
      Z = (0, V.m3)("workspace-agents-studio-assistant-threads", [], {
        coerceStoredValue: (e) => U.YOg(K).catch([]).parse(e).slice(0, 50),
      }),
      Q = (0, p.i1)(w.u, (e, { get: t }) => {
        let a = t(Z).find((t) => t.accountId === e.accountId && t.userId === e.userId && t.agentId === e.agentId)
        return null != a && Date.now() - a.updatedAt <= 36e5 ? a.threadId : null
      })
    function J(e, t) {
      return e.get($.chatGptAuthenticatedAccountId$) === t.accountId && e.get($.o8) === t.userId
    }
    function X(e, t, a) {
      if (!J(e, t)) return
      let n = Date.now()
      e.set(Z, (e) => {
        let r = e.filter(
          (e) =>
            n - e.updatedAt <= 36e5 &&
            (e.accountId !== t.accountId || e.userId !== t.userId || e.agentId !== t.agentId),
        )
        return null == a ? r : [{ ...t, threadId: a, updatedAt: n }, ...r].slice(0, 50)
      })
    }
    let ee = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
      et = U.Ikc({
        channel: U.k5n(["chatgpt", "slack"]),
        channel_id: U.YjP().nullish(),
        deployment_id: U.YjP().nullish(),
      }),
      ea = U.Ikc({
        schedule_type: U.k5n(["minutely", "hourly", "daily", "weekly", "monthly"]),
        every_minutes: U.aig().int().nullish(),
        every_hours: U.aig().int().nullish(),
        minute_past_hour: U.aig().int().nullish(),
        run_at: U.YjP().nullish(),
        weekdays: U.YOg(U.k5n(ee)).nullish(),
        day_of_month: U.aig().int().nullish(),
      }),
      en = U.Ikc({
        items: U.YOg(et.extend({ timezone: U.YjP().nullish(), schedule_prompt: U.YjP().nullish(), schedule: ea })),
      }),
      er = U.Ikc({ items: U.YOg(et.extend({ deployment_id: U.YjP().trim().min(1) })) }),
      es = U.Ikc({ instructions: U.YjP(), resolved_instructions: U.YjP().nullish() }),
      ei = U.Ikc({ enabled: U.zMY() }),
      el = U.Ikc({
        icon: U.YjP(),
        title: U.YjP(),
        short_description: U.YjP().nullish(),
        prompt: U.YjP(),
        source: U.k5n(["generated", "manual"]),
      }),
      eo = U.Ikc({ name: U.YjP(), icon: U.YjP(), agent_description: U.YjP(), starter_prompts: U.YjP() }),
      ed = U.Ikc({
        name: U.YjP().nullish(),
        icon_name: U.YjP().nullish(),
        icon_color: U.YjP().nullish(),
        agent_description: U.YjP().nullish(),
        starter_prompts: U.YOg(el).nullish(),
        field_results: eo,
      }),
      eu = U.Ikc({
        suggestions: U.YOg(U.Ikc({ start_text_pointer: U.YjP(), end_text_pointer: U.YjP(), replacement: U.YjP() })),
      }),
      ec = U.Ikc({
        deployment_id: U.YjP().trim().min(1),
        response_mode: U.k5n(["all_messages", "mentions"]).nullish(),
        instructions: U.YjP().nullish(),
      }),
      ep = U.Ikc({ deployment_id: U.YjP().trim().min(1) }),
      em = U.Ikc({
        action: U.k5n(["start_new_thread", "restart_thread"]),
        payload: U.YjP().nullish(),
        thread_id: U.YjP().nullish(),
      })
    var ef = a("GXwO"),
      eg = a("M2S2"),
      e_ = a("dE9m")
    async function eh(e, t, a, n, r = !1) {
      let s = () => {
        if ((n.throwIfAborted(), !J(e, t))) throw new DOMException("Workspace changed", "AbortError")
      }
      s()
      let i = { expectedIdentity: t, signal: n, assertRequestCurrent: s },
        l = { agent_id: t.agentId },
        o = structuredClone(a)
      try {
        let [a, d, u, c] = await Promise.all([
          D.Request.safeGet("/hermes/agent/{agent_id}/builder-view", { ...i, parameters: { path: l } }),
          D.Request.safeGet("/hermes/agent/{agent_id}/files/tree", { ...i, parameters: { path: l } }),
          D.Request.safeGet("/hermes/agent/{agent_id}/triggers", {
            ...i,
            parameters: { path: l, query: { scope: "all_accessible" } },
          }),
          Promise.all(
            o.skills
              .filter((e) => !("chatgpt_skill_id" in e))
              .map(async (e) => ({
                id: e.id,
                definition: await D.Request.safeGet("/hermes/agent/{agent_id}/skills/{skill_id}/definition", {
                  ...i,
                  parameters: { path: { ...l, skill_id: e.id } },
                }),
              })),
          ),
        ])
        if ((s(), !L()(o, (0, Y.H5)(a)))) return null
        let p = a
        if (r && p.draft_version.config?.file_tree_id == null && ev(d).length > 0) {
          let t = await (0, Y.FG)(e, p, o, !1, { signal: n })
          if ((s(), "operation" in t || t.draft_version.config?.file_tree_id == null)) return null
          p = t
        }
        return { identity: t, fields: o, builder: p, tree: d, skills: c, schedules: u.filter(ey) }
      } catch {
        return (s(), null)
      }
    }
    function ey(e) {
      return "SCHEDULE" === e.trigger.type
    }
    function ev(e) {
      let t = e.nodes.find((t) => t.id === e.root_node_id)
      return null == t ? e.nodes : (t.children ?? [])
    }
    var ek = a("yQwI"),
      eb = a("MFme")
    let ew = U.g1P(U.YjP(), U.Pq9()),
      eI = U.Ikc({ gpt_id: U.YjP(), draft_revision: U.YjP().min(1) }),
      eS = U.g1P(U.YjP(), U.Pq9())
    var eC = a("Qgfj")
    let eA = ({ alias: e, promptText: t }) => [
        {
          type: "input_tag",
          text: "",
          id: `starter-prompt-${e}`,
          data: { type: "starter_prompt", starter_prompt_alias: e },
        },
        { type: "input_text", text: t },
      ],
      eP = (0, eC.YK)({
        startScreenGreetingFresh: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenGreetingFresh",
          defaultMessage: "What would you like to build?",
        },
        startScreenGreetingConfigured: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenGreetingConfigured",
          defaultMessage: "How should we improve this agent?",
        },
        startScreenBuildMyAgentLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenBuildMyAgentLabel",
          defaultMessage: "Build an agent from scratch",
        },
        startScreenBuildMyAgentPrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenBuildMyAgentPrompt",
          defaultMessage: "Help me build an agent from scratch.",
        },
        startScreenWhatCanIDoLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenWhatCanIDoLabel",
          defaultMessage: "See what agents can do",
        },
        startScreenWhatCanIDoPrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenWhatCanIDoPrompt",
          defaultMessage: "What can I do with agents?",
        },
        startScreenStartFromTemplateLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenStartFromTemplateLabel",
          defaultMessage: "Start from a template",
        },
        startScreenStartFromTemplatePrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenStartFromTemplatePrompt",
          defaultMessage: "Show me templates I can start from.",
        },
        startScreenBuildFromExampleLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenBuildFromExampleLabel",
          defaultMessage: "Build from sample input and output",
        },
        startScreenBuildFromExamplePrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenBuildFromExamplePrompt",
          defaultMessage: "Help me build an agent by working backward from an example input and output.",
        },
        startScreenConfigureTriggersLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenConfigureTriggersLabel",
          defaultMessage: "Configure when the agent runs",
        },
        startScreenConfigureTriggersPrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenConfigureTriggersPrompt",
          defaultMessage: "How do I set up when my agent runs?",
        },
        startScreenRunPreviewLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenRunPreviewLabel",
          defaultMessage: "Test this agent",
        },
        startScreenRunPreviewPrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenRunPreviewPrompt",
          defaultMessage: "Run a preview.",
        },
        startScreenAddAdvancedLogicLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenAddAdvancedLogicLabel",
          defaultMessage: "Add advanced logic",
        },
        startScreenAddAdvancedLogicPrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenAddAdvancedLogicPrompt",
          defaultMessage: "Create a skill that makes this agent more effective.",
        },
        startScreenHelpImproveAgentLabel: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenHelpImproveAgentLabel",
          defaultMessage: "Improve this agent",
        },
        startScreenHelpImproveAgentPrompt: {
          id: "Hermes.GptStudio.Chat.UseStartScreenOption.startScreenHelpImproveAgentPrompt",
          defaultMessage: "Help me improve this agent.",
        },
      })
    function eE(e) {
      var t
      let a,
        l,
        o,
        P,
        E,
        T,
        F,
        V,
        K,
        Z,
        et,
        ea,
        el,
        eo,
        ey,
        eC,
        eE,
        eM,
        ex,
        eT,
        eO,
        eR,
        ej,
        eF,
        eL,
        eU,
        eD,
        eq,
        eG,
        eY,
        eH,
        eN,
        eB,
        eW,
        ez,
        e$,
        eV,
        eK,
        eZ,
        eQ,
        eJ,
        eX,
        e1,
        e0,
        e5,
        e3,
        e2,
        e4,
        e6,
        e9,
        e7,
        e8,
        te,
        tt,
        ta,
        tn,
        tr,
        ts,
        ti,
        tl,
        to,
        td,
        tu = (0, r.c)(176),
        {
          identity: tc,
          canEdit: tp,
          fields: tm,
          readFields: tf,
          hasLocalEdits: tg,
          onPrepare: t_,
          onRefresh: th,
          onCursorTarget: ty,
          onDraftRevision: tv,
          onFieldsChange: tk,
          onOpen: tb,
          onSelectApp: tw,
          onPreview: tI,
          onReady: tS,
          onBusyChange: tC,
          onClose: tA,
          onBack: tP,
        } = e,
        tE = (0, p.gh)(w.u),
        tM = (0, m.A)(),
        { pathname: tx } = (0, g.zy)(),
        tT = (0, S.Y)(),
        tO = (0, I.Zj)("1010509169"),
        [tR, tj] = (0, i.useState)(!1),
        [tF, tL] = (0, i.useState)(null),
        [tU, tD] = (0, i.useState)(!1),
        [tq, tG] = (0, i.useState)(!1),
        [tY, tH] = (0, i.useState)(!1),
        tN = (0, i.useRef)(null),
        { data: tB, isPending: tW } = (0, p._U)(A.k, tc.agentId)
      tu[0] !== tO ||
      tu[1] !== tp ||
      tu[2] !== tg ||
      tu[3] !== tM ||
      tu[4] !== tC ||
      tu[5] !== ty ||
      tu[6] !== tv ||
      tu[7] !== tk ||
      tu[8] !== tb ||
      tu[9] !== t_ ||
      tu[10] !== tI ||
      tu[11] !== th ||
      tu[12] !== tx ||
      tu[13] !== tf
        ? ((a = () => ({
            canEdit: tp,
            apiAvailable: tO,
            intl: tM,
            pathname: tx,
            readFields: tf,
            hasLocalEdits: tg,
            onPrepare: t_,
            onRefresh: th,
            onCursorTarget: ty,
            onDraftRevision: tv,
            onFieldsChange: tk,
            onOpen: tb,
            onPreview: tI,
            onBusyChange: (e) => {
              ;(tD(e), e && tj(!1), tC(e))
            },
            onFailure: () => tj(!0),
            onUndoFailure: tL,
          })),
          (tu[0] = tO),
          (tu[1] = tp),
          (tu[2] = tg),
          (tu[3] = tM),
          (tu[4] = tC),
          (tu[5] = ty),
          (tu[6] = tv),
          (tu[7] = tk),
          (tu[8] = tb),
          (tu[9] = t_),
          (tu[10] = tI),
          (tu[11] = th),
          (tu[12] = tx),
          (tu[13] = tf),
          (tu[14] = a))
        : (a = tu[14])
      let tz = (0, C.K)(a),
        t$ = (0, p._U)(Q, tc)
      tu[15] !== tz || tu[16] !== tc || tu[17] !== t$ || tu[18] !== tE
        ? ((l = () => {
            let e, t, a, n, r, s, i, l
            return (
              (e = {
                lifetime: new AbortController(),
                thread: new AbortController(),
                threadId: t$,
                turn: null,
                completed: null,
                resetThread: !1,
                undoing: !1,
              }),
              (t = () => {
                if ((e.lifetime.signal.throwIfAborted(), e.thread.signal.throwIfAborted(), !J(tE, tc)))
                  throw new DOMException("Workspace changed", "AbortError")
              }),
              (a = () => {
                ;(e.turn?.controller.abort(), (e.turn = null), (e.completed = null), tz().onBusyChange(!1))
              }),
              (n = () => {
                !e.lifetime.signal.aborted && J(tE, tc) && (a(), tz().onFailure())
              }),
              (r = (e, t) => {
                let a = tz().readFields()
                e.manualEdits = e.manualEdits || !L()(a, e.expectedFields)
                let n = { ...e.expectedFields, ...t },
                  r = (0, H.M)(e.expectedFields, a, n)
                return (
                  (e.expectedFields = n),
                  tz().onFieldsChange(r),
                  Object.keys(t).every((e) => L()(Reflect.get(r, e), Reflect.get(n, e)))
                )
              }),
              (s = () => {
                let a = e.turn,
                  n = e.thread.signal,
                  s = () => {
                    if ((t(), n.throwIfAborted(), a?.signal.throwIfAborted(), e.turn !== a))
                      throw new DOMException("Assistant turn changed", "AbortError")
                  }
                return {
                  scope: tE,
                  identity: tc,
                  signal: a?.signal ?? AbortSignal.any([e.lifetime.signal, n]),
                  assertCurrent: s,
                  canEdit: () => tz().canEdit && !0 === tE.get(q.iX),
                  apiAvailable: () => tz().apiAvailable,
                  readFields: () => tz().readFields(),
                  update: (e) => {
                    if ((s(), null == a)) throw Error("No active assistant turn")
                    if ((a.signal.throwIfAborted(), !r(a, e))) throw Error("Newer edits prevented an assistant update")
                  },
                  open: (e, t) => tz().onOpen(e, t),
                  preview: (t) => tz().onPreview(t, a?.signal ?? AbortSignal.any([e.lifetime.signal, n])),
                }
              }),
              (i = async (a) => {
                if (
                  (t(),
                  a.signal.throwIfAborted(),
                  (a.manualEdits = a.manualEdits || !L()(tz().readFields(), a.expectedFields)),
                  await Promise.all([
                    tE.query.invalidate(x.W, tc.agentId),
                    tE.query.invalidate(A.k, tc.agentId),
                    tE.queryClient.invalidateQueries({
                      queryKey: ["workspace-agent", "skill-definition", tc.accountId, tc.userId, tc.agentId],
                    }),
                    tE.queryClient.invalidateQueries({
                      queryKey: ["workspace-agent", "files", tc.accountId, tc.userId, tc.agentId],
                    }),
                  ]),
                  a.signal.throwIfAborted(),
                  await tz().onRefresh(a.signal),
                  t(),
                  a.signal.throwIfAborted(),
                  e.turn !== a)
                )
                  throw new DOMException("Assistant turn changed", "AbortError")
                a.expectedFields = structuredClone(tz().readFields())
              }),
              {
                initialThread: t$,
                assertCurrent: t,
                runtime: s,
                fetch: async (r, s = {}) => {
                  t()
                  let l = e.thread.signal,
                    o = AbortSignal.any([e.lifetime.signal, l, ...(null == s.signal ? [] : [s.signal])]),
                    d = () => {
                      ;(o.throwIfAborted(), t())
                    }
                  if (!tz().canEdit || !0 !== tE.get(q.iX)) return new Response(null, { status: 403 })
                  let u = new Headers(s.headers).get("chatkit-frame-instance-id"),
                    c = null == u ? void 0 : { "chatkit-frame-instance-id": u }
                  if (s.body instanceof FormData) {
                    let e = await (0, ef.X)({
                      body: s.body,
                      additionalHeaders: c,
                      signal: o,
                      identity: tc,
                      assertCurrent: d,
                    })
                    return (d(), Response.json(e))
                  }
                  if ("string" != typeof s.body) throw Error("Unsupported assistant request")
                  let p = eS.parse(JSON.parse(s.body)),
                    m =
                      "threads.create" === p.type ||
                      "threads.add_user_message" === p.type ||
                      "threads.retry_after_item" === p.type,
                    f = U.Ikc({ params: U.Ikc({ action: U.Ikc({ type: U.YjP() }) }) }).safeParse(p),
                    g = f.success && f.data.params.action.type.startsWith("changes.undo."),
                    _ = m || ("threads.custom_action" === p.type && !g) || "threads.add_structured_input" === p.type
                  if (("threads.stop" === p.type && a(), "threads.add_client_tool_output" === p.type)) {
                    let t = U.Ikc({ params: U.Ikc({ thread_id: U.YjP() }) }).safeParse(p)
                    if (null == e.turn || (null != e.threadId && t.data?.params.thread_id !== e.threadId))
                      throw new DOMException("Assistant turn ended", "AbortError")
                  }
                  if (_ && e.undoing) throw Error("Wait for Undo to finish")
                  if (_ && null == e.turn) {
                    ;(tz().onBusyChange(!0), tz().onCursorTarget(ek.nI), tz().onUndoFailure(null), (e.completed = null))
                    let t = new AbortController(),
                      a = {
                        id: crypto.randomUUID(),
                        controller: t,
                        signal: AbortSignal.any([o, t.signal]),
                        before: null,
                        expectedFields: structuredClone(tz().readFields()),
                        manualEdits: !1,
                        waitingForTools: 0,
                        finishing: !1,
                      }
                    e.turn = a
                    try {
                      let e = await tz().onPrepare(a.signal)
                      ;(d(),
                        (a.expectedFields = structuredClone(tz().readFields())),
                        (a.before = await eh(tE, tc, a.expectedFields, a.signal, !0)),
                        d(),
                        null != a.before &&
                          a.before.builder.draft_revision !== e.draft_revision &&
                          (await tz().onRefresh(a.signal), d()),
                        (a.manualEdits = a.manualEdits || !L()(tz().readFields(), a.expectedFields)))
                    } catch (t) {
                      throw (e.turn === a && n(), t)
                    }
                  } else if (m) throw Error("Wait for the current assistant turn to finish")
                  let h = e.turn
                  "threads.add_client_tool_output" === p.type &&
                    null != h &&
                    ((h.waitingForTools = Math.max(0, h.waitingForTools - 1)), await i(h))
                  let y = await R(tE, tc)
                  ;(d(),
                    null != h &&
                      (_ || "threads.add_client_tool_output" === p.type) &&
                      (h.signal = AbortSignal.any([h.signal, o])))
                  let v = AbortSignal.any([o, ...(null == h ? [] : [h.signal])]),
                    k = (function (
                      e,
                      t,
                      a,
                      n,
                      r,
                      { canEdit: s, apiAvailable: i, reviewId: l, initialMessage: o, pathname: d, intl: u },
                    ) {
                      let c = a.apiDeployments?.find((e) => !e.pending_deletion) ?? a.apiDeployments?.[0],
                        p = "live"
                      null == c
                        ? (p = "not_configured")
                        : c.pending_deletion
                          ? (p = "pending_removal")
                          : null == c.materialized_trigger_id && (p = "pending_addition")
                      let m = "unknown"
                      !0 === r.browsing
                        ? (m = "always_enabled_for_this_agent")
                        : !1 === r.browsing && (m = "not_available_in_this_workspace")
                      let f = !0 === e.get(q.lF) ? "ready" : "insufficient_permissions",
                        g = (e) =>
                          r.apps
                            ?.filter((t) => t.source === e)
                            .map((e) => ({
                              id: e.id,
                              label: e.name,
                              description: e.description,
                              logo_url: e.logoUrl,
                              icon_assets: null == e.logoUrl ? null : { "256_square": e.logoUrl },
                              disabled_by_admin: e.disabledByAdmin,
                              links: [],
                            })) ?? [],
                        _ = e.get(M.tR, t)
                      return ew.parse(
                        JSON.parse(
                          JSON.stringify({
                            current_agent_configuration: {
                              id: t.agentId,
                              name: a.name,
                              tagline: a.tagline,
                              subtitle: a.description,
                              icon: a.icon,
                              prompt: a.instructions,
                              tools: {
                                webSearch: a.tools.web_search,
                                imageGeneration: a.tools.image_generation,
                                memory: "per_user" === a.persistentFolder ? {} : null,
                                connectors: a.tools.connectors?.map((e) => ({
                                  connectorId:
                                    "CONNECTOR_ID" === e.connector_identifier.type
                                      ? e.connector_identifier.connector_id
                                      : void 0,
                                  serverUrl:
                                    "SERVER_URL" === e.connector_identifier.type
                                      ? e.connector_identifier.server_url
                                      : void 0,
                                  connectionType:
                                    "LINK_PLACEHOLDER" === e.auth.type
                                      ? "end_user_connection"
                                      : e.auth.link.auth_type.toLowerCase(),
                                  linkId: "LINK" === e.auth.type ? e.auth.link.id : void 0,
                                  link: "LINK" === e.auth.type ? e.auth.link : void 0,
                                  allowedActions: e.allowed_tools,
                                  actionParamSchemas: e.action_param_schemas,
                                  actionsConstraintsConfiguration: e.actions_constraints_configuration,
                                  userApprovals: e.user_approvals,
                                  appsPrivacyControl: e.apps_privacy_control,
                                })),
                                skills: a.skills,
                              },
                              skills: a.skills,
                              starterPrompts: a.starterPrompts,
                              deployments: { api: a.apiDeployments, slack: a.slackDeployments },
                              version_id: n?.draft_version.id,
                              highestCapability: n?.agent.viewer_capability ?? (s ? "hermes_write" : "hermes_read"),
                            },
                            current_view_experience: { pathname: d },
                            default_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                            agent_runtime_tools: { web_search: m },
                            agent_files: (function (e) {
                              if (null == e)
                                return {
                                  availability: "unavailable",
                                  has_files: null,
                                  entries: null,
                                  total_entries: null,
                                  entries_truncated: null,
                                }
                              let t = j(e)
                              return {
                                availability: "available",
                                has_files: t.length > 0,
                                entries: t.slice(0, 50),
                                total_entries: t.length,
                                entries_truncated: t.length > 50,
                              }
                            })(r.tree),
                            schedules: (function (e) {
                              if (null == e) return "could_not_load_schedules"
                              let t = [],
                                a = []
                              for (let n of e) {
                                if ("SCHEDULE" !== n.trigger.type) continue
                                let e = n.trigger,
                                  r = e.rules[0]
                                if (null == r) continue
                                let s = {
                                  schedule_id: n.id,
                                  enabled: !1 !== e.enabled,
                                  timezone: e.tz ?? null,
                                  schedule_prompt: e.instructions ?? null,
                                  schedule: (function (e) {
                                    let t = `${String(e.hour ?? 0).padStart(2, "0")}:${String(e.minute ?? 0).padStart(2, "0")}`
                                    switch (e.freq) {
                                      case "minutely":
                                        return { schedule_type: "minutely", interval_minutes: e.interval ?? 1 }
                                      case "hourly":
                                        return {
                                          schedule_type: "hourly",
                                          interval_hours: e.interval ?? 1,
                                          minute: e.minute ?? 0,
                                        }
                                      case "daily":
                                        return { schedule_type: "daily", run_at: t }
                                      case "weekly":
                                        return {
                                          schedule_type: "weekly",
                                          byweekday: e.byweekday?.flatMap((e) => (null == O[e] ? [] : [O[e]])) ?? [],
                                          run_at: t,
                                        }
                                      case "monthly":
                                        return { schedule_type: "monthly", bymonthday: e.bymonthday ?? [], run_at: t }
                                    }
                                  })(r),
                                }
                                e.channel_binding?.type === "slack"
                                  ? a.push({ ...s, channel_binding: e.channel_binding })
                                  : t.push(s)
                              }
                              return { chatgpt: t, slack: a }
                            })(r.schedules),
                            slack_channel_setup: {
                              open_modal_state: s ? f : "builder_is_currently_readonly",
                              readiness: r.slack ?? null,
                            },
                            available_apps_state: null == r.apps ? "request_failed" : void 0,
                            available_apps: {
                              recommended_apps: g("recommended"),
                              workspace_apps: g("workspace"),
                              public_apps: g("public"),
                            },
                            preview_conversations: {
                              current_conversation_id: _[0]?.conversationId ?? null,
                              conversations: _.map((e, t) => ({
                                conversation_id: e.conversationId,
                                title: u.formatDate(e.submittedAt, { dateStyle: "medium", timeStyle: "short" }),
                                is_current: 0 === t,
                                latest_message_id: null,
                              })),
                            },
                            draft_live_version_state: (function ({
                              agentId: e,
                              builder: t,
                              fields: a,
                              isPublished: n,
                              localEdits: r,
                            }) {
                              let s = t?.latest_published_version?.id ?? t?.agent.latest_published_version_id ?? null,
                                i = n || null != s,
                                l = []
                              ;(null == e && l.push("missing_id"),
                                a.name.trim() || l.push("missing_name"),
                                a.instructions.trim() || l.push("missing_prompt"))
                              let o = "needs_create",
                                d = "no_live_version",
                                u = "create"
                              return (
                                i &&
                                  ((o = "live_comparison_unavailable"),
                                  (d = "live_version_exists_but_comparison_unavailable"),
                                  (u = "unknown"),
                                  t?.latest_published_version?.config != null &&
                                    ((0, eb.p)(t, a, r).length > 0
                                      ? ((o = "needs_update"), (d = "differs_from_live_version"), (u = "update"))
                                      : ((o = "up_to_date"),
                                        (d = "matches_live_version"),
                                        (u = "none"),
                                        l.push("no_changes")))),
                                {
                                  state: o,
                                  live_version_exists: i,
                                  draft_live_comparison: d,
                                  user_action_to_make_current_draft_live: u,
                                  current_draft_version_id: t?.draft_version.id ?? null,
                                  live_version_id: s,
                                  make_live_readiness: {
                                    state: 0 === l.length ? "ready" : "blocked",
                                    known_blockers: l,
                                  },
                                }
                              )
                            })({
                              agentId: t.agentId,
                              builder: n,
                              fields: a,
                              isPublished: n?.latest_published_version != null,
                            }),
                            api_channel_setup: {
                              availability: s ? (i ? "ready" : "feature_disabled") : "builder_is_currently_readonly",
                              state: p,
                              deployment_id: c?.deployment_id ?? null,
                              api_trigger_id: c?.materialized_trigger_id ?? null,
                            },
                            review_id: l,
                            message_source: o ? "initial_agent_request" : void 0,
                          }),
                        ),
                      )
                    })(tE, tc, tz().readFields(), tE.query.getData(Y.m9, tc.agentId), y, {
                      canEdit: tz().canEdit,
                      apiAvailable: tz().apiAvailable,
                      reviewId: h?.id ?? null,
                      initialMessage: "threads.create" === p.type,
                      pathname: tz().pathname,
                      intl: tz().intl,
                    })
                  return D.Request.postResponse("/hermes/pluto/chat", {
                    requestBody: { ...p, metadata: k },
                    additionalHeaders: c,
                    signal: v,
                    expectedIdentity: tc,
                    assertRequestCurrent: d,
                  })
                },
                undo: async (a) => {
                  t()
                  let n = e.completed
                  if (null != e.turn || null == n || n.id !== a) return "disabled"
                  e.undoing = !0
                  let r = AbortSignal.any([e.lifetime.signal, e.thread.signal])
                  ;((e.completed = null), tz().onUndoFailure(null), tz().onBusyChange(!0))
                  let s = {
                    actionType: "CHATGPT_AGENT_BUILDER_ACTION_TYPE_CHECKPOINT_UNDO",
                    source: "CHATGPT_AGENT_BUILDER_SOURCE_SIDEBAR_WIDGET",
                    agentId: tc.agentId,
                  }
                  ;(0, G.u)(tE, { ...s, actionResult: "CHATGPT_AGENT_BUILDER_ACTION_RESULT_STARTED" })
                  try {
                    let e = await (async function (e, t, a, n, r, s) {
                      var i, l
                      let { identity: o } = t,
                        d = () => {
                          if ((s.throwIfAborted(), !J(e, o) || !0 !== e.get(q.iX)))
                            throw new DOMException("Agent access changed", "AbortError")
                          if (r() || !L()(n(), a.fields)) throw Error("Newer edits prevent Undo")
                        }
                      if ((d(), !L()(o, a.identity))) throw Error("Checkpoint identity changed")
                      let u = await eh(e, o, n(), s)
                      if (
                        (d(),
                        null == u ||
                          u.builder.draft_revision !== a.builder.draft_revision ||
                          u.builder.draft_version.id !== a.builder.draft_version.id ||
                          u.tree.tree_revision !== a.tree.tree_revision ||
                          !L()(u.tree.nodes, a.tree.nodes) ||
                          !L()(u.skills, a.skills) ||
                          !L()(u.schedules, a.schedules))
                      )
                        throw Error("Newer edits prevent Undo")
                      let c =
                          ((i = t.schedules),
                          (l = a.schedules),
                          [
                            ...i.flatMap((e) => {
                              let t = l.find((t) => t.id === e.id)
                              return L()(e.trigger, t?.trigger) ? [] : [{ before: e, after: t }]
                            }),
                            ...l
                              .filter((e) => !i.some((t) => t.id === e.id))
                              .map((e) => ({ before: void 0, after: e })),
                          ]),
                        { accountUserId: p } = e.get($.PO),
                        m = !0 === e.get(q.lF)
                      for (let e of c) {
                        let a = e.after ?? e.before
                        if (null == a) continue
                        let n = (0, eg.Uk)({
                          resource: a,
                          userId: p ?? null,
                          agentCreatorId: u.builder.agent.creator_id,
                          canAccess: !0,
                          canShare: m,
                        })
                        if (
                          (null == e.before ? !n.canDelete : !n.canEdit) ||
                          (null != e.before &&
                            !(function (e, t) {
                              let a = t.channel_binding
                              return (
                                a?.type !== "slack" ||
                                !!e.slackDeployments?.some(
                                  (e) =>
                                    !e.pending_deletion &&
                                    e.slack_trigger.link.id === a.link_id &&
                                    (0, B.IO)(e).id === a.channel_id,
                                )
                              )
                            })(t.fields, e.before.trigger))
                        )
                          throw Error("Schedule permissions prevent Undo")
                      }
                      let f = t.builder.draft_version.config?.file_tree_id ?? null
                      if (null == f && ev(t.tree).length > 0 && !L()(t.tree.nodes, a.tree.nodes))
                        throw Error("The original file snapshot is unavailable")
                      d()
                      let g = await (0, Y.FG)(e, u.builder, t.fields, !1, { fileTreeId: f, signal: s })
                      if ((d(), "operation" in g)) return { status: "partially_restored", fields: t.fields }
                      let _ = !1
                      try {
                        if (null == f && 0 === ev(t.tree).length)
                          for (let t of ev(a.tree))
                            (d(),
                              await (0, e_.cG)(
                                e,
                                o,
                                { agentId: o.agentId, skillId: null, versionId: null },
                                { type: "delete", node: t },
                                s,
                              ))
                        for (let e of t.skills) {
                          let t = a.skills.find((t) => t.id === e.id)
                          if (L()(e.definition, t?.definition)) continue
                          d()
                          let n = await D.Request.safeGet("/hermes/agent/{agent_id}/builder-view", {
                            parameters: { path: { agent_id: o.agentId } },
                            expectedIdentity: o,
                            signal: s,
                            assertRequestCurrent: d,
                          })
                          d()
                          let r = e.definition
                          await D.Request.safePost("/hermes/agent/{agent_id}/skills/{skill_id}/definition", {
                            parameters: { path: { agent_id: o.agentId, skill_id: e.id } },
                            expectedIdentity: o,
                            signal: s,
                            assertRequestCurrent: d,
                            requestBody: {
                              skill_name: r.skill_name ?? null,
                              skill_description: r.skill_description ?? null,
                              display_name: r.display_name ?? null,
                              short_description: r.short_description ?? null,
                              default_prompt: r.default_prompt ?? null,
                              instructions: r.instructions ?? null,
                              icon: r.icon,
                              expected_draft_version_id: n.draft_version.id,
                              expected_draft_revision: n.draft_revision,
                            },
                          })
                        }
                        for (let t of c) {
                          d()
                          let a = e.get(A.M, o.agentId)
                          await a.mutateAsync(
                            null == t.before
                              ? {
                                  accountId: o.accountId,
                                  versionScope: "draft",
                                  resource: t.after,
                                  delete: !0,
                                  signal: s,
                                }
                              : {
                                  accountId: o.accountId,
                                  versionScope: "draft",
                                  resource: t.after,
                                  trigger: t.before.trigger,
                                  signal: s,
                                },
                          )
                        }
                      } catch {
                        ;(s.throwIfAborted(), (_ = !0))
                      }
                      return (
                        await Promise.all([
                          e.query.invalidate(Y.m9, o.agentId),
                          e.query.invalidate(x.W, o.agentId),
                          e.query.invalidate(A.k, o.agentId),
                          ...t.skills.map((t) => e.query.invalidate(x.J, { agentId: o.agentId, skillId: t.id })),
                          e.queryClient.invalidateQueries({
                            queryKey: ["workspace-agent", "files", o.accountId, o.userId, o.agentId],
                          }),
                        ]),
                        d(),
                        { status: _ ? "partially_restored" : "restored", fields: (0, Y.H5)(g) }
                      )
                    })(
                      tE,
                      n.before,
                      n.after,
                      () => tz().readFields(),
                      () => tz().hasLocalEdits(),
                      r,
                    )
                    ;(r.throwIfAborted(),
                      t(),
                      tz().onFieldsChange(e.fields),
                      await tz().onRefresh(r),
                      r.throwIfAborted(),
                      t())
                    let a = "restored" === e.status
                    return (
                      (0, G.u)(tE, {
                        ...s,
                        actionResult: a
                          ? "CHATGPT_AGENT_BUILDER_ACTION_RESULT_SUCCEEDED"
                          : "CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED",
                      }),
                      a || tz().onUndoFailure("partial"),
                      e.status
                    )
                  } catch {
                    return (
                      !e.lifetime.signal.aborted &&
                        J(tE, tc) &&
                        (tz().onUndoFailure("failed"),
                        (0, G.u)(tE, { ...s, actionResult: "CHATGPT_AGENT_BUILDER_ACTION_RESULT_FAILED" })),
                      "disabled"
                    )
                  } finally {
                    ;((e.undoing = !1), !e.lifetime.signal.aborted && J(tE, tc) && tz().onBusyChange(!1))
                  }
                },
                fail: n,
                markManualEdit: (l = () => {
                  ;((e.completed = null), null != e.turn && (e.turn.manualEdits = !0))
                }),
                onThreadChange: ({ threadId: a }) => {
                  ;(t(),
                    null != e.threadId &&
                      a !== e.threadId &&
                      (e.thread.abort(),
                      e.turn?.controller.abort(),
                      (e.thread = new AbortController()),
                      (e.turn = null),
                      (e.completed = null),
                      tz().onBusyChange(!1)),
                    (e.threadId = a),
                    X(tE, tc, a))
                },
                onClientTool: async (t) => {
                  let a = e.turn
                  if (null == a) return { status: "error", reason: "assistant_turn_ended" }
                  a.waitingForTools += 1
                  try {
                    let e = s()
                    ;(null != a.resourceRead && (await a.resourceRead.done), e.assertCurrent())
                    let n = (0, ek.C3)(t.name, t.params)
                    return (
                      void 0 !== n && e.canEdit() && tz().onCursorTarget(n),
                      await (async function (e, t) {
                        e.assertCurrent()
                        let { scope: a, identity: n } = e
                        if (!e.canEdit()) return { status: "error", reason: "builder_is_currently_readonly" }
                        if ("create_agent" === t.name) return { status: "ok", agent_id: n.agentId }
                        if ("upsert_schedule_deployments" === t.name || "delete_schedule_deployments" === t.name)
                          return (async function (e, t, a, n, r, s, i) {
                            s()
                            let { accountId: l, agentId: o } = n,
                              d = "upsert_schedule_deployments" === t ? en.safeParse(a) : er.safeParse(a)
                            if (!d.success) return { status: "error", reason: "invalid_schedule_state" }
                            let u = await e.query.getOrFetch(A.k, o).catch(() => null)
                            if (null == u) return { status: "error", reason: "invalid_schedule_state" }
                            s()
                            let c = [...u],
                              p = []
                            for (let [t, a] of d.data.items.entries()) {
                              s()
                              let n = a.deployment_id
                              function m(e) {
                                p.push({ index: t, status: "failed", deployment_id: n, reason: e, message: e })
                              }
                              let d =
                                "slack" === a.channel
                                  ? r.slackDeployments?.filter(
                                      (e) =>
                                        !0 !== e.pending_deletion &&
                                        (0, B.IO)(e).id === a.channel_id?.trim().toUpperCase(),
                                    )
                                  : void 0
                              if ("slack" === a.channel && d?.length !== 1) {
                                m(
                                  null == a.channel_id
                                    ? "Select a Slack channel before managing its schedule."
                                    : "Configure this Slack channel first.",
                                )
                                continue
                              }
                              let u = d?.[0],
                                f =
                                  null == u
                                    ? { type: "chatgpt" }
                                    : { type: "slack", channel_id: (0, B.IO)(u).id, link_id: u.slack_trigger.link.id },
                                g =
                                  null == n
                                    ? void 0
                                    : c.find((e) => {
                                        if (e.id !== n || "SCHEDULE" !== e.trigger.type) return !1
                                        let t = e.trigger.channel_binding ?? { type: "chatgpt" }
                                        return "slack" !== f.type
                                          ? "slack" !== t.type
                                          : "slack" === t.type &&
                                              t.link_id === f.link_id &&
                                              t.channel_id === f.channel_id
                                      })
                              try {
                                if (!("schedule" in a)) {
                                  if (null == g) {
                                    p.push({ index: t, status: "already_deleted", deployment_id: n })
                                    continue
                                  }
                                  ;(await e
                                    .get(A.M, o)
                                    .mutateAsync({
                                      accountId: l,
                                      versionScope: "draft",
                                      signal: i,
                                      resource: g,
                                      delete: !0,
                                    }),
                                    s(),
                                    c.splice(c.indexOf(g), 1),
                                    p.push({ index: t, status: "deleted", deployment_id: n }))
                                  continue
                                }
                                if (null != n && null == g) {
                                  m("schedule_not_found")
                                  continue
                                }
                                let r = (function (e) {
                                  let t = e.run_at?.match(/^([01]\d|2[0-3]):([0-5]\d)$/)
                                  switch (e.schedule_type) {
                                    case "minutely":
                                      return 15 === e.every_minutes || 30 === e.every_minutes
                                        ? { freq: "minutely", interval: e.every_minutes }
                                        : null
                                    case "hourly":
                                      return null != e.every_hours &&
                                        e.every_hours >= 1 &&
                                        e.every_hours <= 24 &&
                                        (null == e.minute_past_hour ||
                                          (e.minute_past_hour >= 0 && e.minute_past_hour <= 59))
                                        ? { freq: "hourly", interval: e.every_hours, minute: e.minute_past_hour ?? 0 }
                                        : null
                                    case "daily":
                                      return null == t
                                        ? null
                                        : { freq: "daily", hour: Number(t[1]), minute: Number(t[2]) }
                                    case "weekly":
                                      return null != t && e.weekdays?.length
                                        ? {
                                            freq: "weekly",
                                            hour: Number(t[1]),
                                            minute: Number(t[2]),
                                            byweekday: Array.from(new Set(e.weekdays.map((e) => ee.indexOf(e)))).sort(
                                              (e, t) => e - t,
                                            ),
                                          }
                                        : null
                                    case "monthly":
                                      return null == t ||
                                        null == e.day_of_month ||
                                        e.day_of_month < 1 ||
                                        e.day_of_month > 31
                                        ? null
                                        : {
                                            freq: "monthly",
                                            hour: Number(t[1]),
                                            minute: Number(t[2]),
                                            bymonthday: [e.day_of_month],
                                          }
                                  }
                                })(a.schedule)
                                if (null == r) {
                                  m(`Invalid ${a.schedule.schedule_type} schedule.`)
                                  continue
                                }
                                let d = await e
                                  .get(A.M, o)
                                  .mutateAsync({
                                    accountId: l,
                                    versionScope: "draft",
                                    signal: i,
                                    resource: g,
                                    trigger: {
                                      type: "SCHEDULE",
                                      enabled: !0,
                                      instructions: a.schedule_prompt?.trim() || null,
                                      tz: a.timezone?.trim() || Intl.DateTimeFormat().resolvedOptions().timeZone,
                                      rules: [r],
                                      channel_binding: f,
                                      parent_trigger_id: u?.materialized_trigger_id,
                                    },
                                  })
                                if ((s(), null != d)) {
                                  let e = c.findIndex((e) => e.id === d.id)
                                  e < 0 ? c.push(d) : (c[e] = d)
                                }
                                p.push({
                                  index: t,
                                  status: null == n ? "created" : "updated",
                                  deployment_id: d?.id ?? n,
                                })
                              } catch {
                                ;(s(), m("schedule_request_failed"))
                              }
                            }
                            return { status: "ok", item_results: p }
                          })(a, t.name, t.params, n, e.readFields(), e.assertCurrent, e.signal)
                        if ("open_custom_mcp_modal" === t.name) return (e.open("custom_mcp"), { status: "ok" })
                        if ("trigger_preview_run" === t.name) {
                          let r = em.safeParse(t.params)
                          if (!r.success) return { status: "error", reason: "invalid_preview_action" }
                          let s = r.data.payload?.trim()
                          if ("restart_thread" === r.data.action) {
                            let t = r.data.thread_id
                            if (null == t || !a.get(M.tR, n).some((e) => e.conversationId === t))
                              return { status: "error", reason: "preview_thread_not_found" }
                            s = await (async function (e, t, a, n) {
                              let r = () => {
                                if ((n.throwIfAborted(), !J(e, a)))
                                  throw new DOMException("Workspace changed", "AbortError")
                              }
                              r()
                              let s = await (0, z.C)(t, { expectedIdentity: a, signal: n, assertRequestCurrent: r })
                              r()
                              let i = (0, W.UI)(s).find((e) => "user" === e.author.role)
                              return null == i ? void 0 : (0, W.s)(i)
                            })(a, t, n, e.signal)
                          }
                          return s
                            ? (e.assertCurrent(),
                              await e.preview(s),
                              e.assertCurrent(),
                              { status: "ok", preview_started: !0 })
                            : { status: "error", reason: "invalid_preview_payload" }
                        }
                        if (
                          (("add_api_channel" === t.name ||
                            "remove_api_channel" === t.name ||
                            "update_slack_channel_deployment" === t.name ||
                            "delete_slack_channel_deployment" === t.name) &&
                            (await (async function (e) {
                              let { identity: t, scope: a, signal: n } = e,
                                r = await D.Request.safeGet("/hermes/agent/{agent_id}/builder-view", {
                                  parameters: { path: { agent_id: t.agentId } },
                                  expectedIdentity: t,
                                  signal: n,
                                  assertRequestCurrent: e.assertCurrent,
                                })
                              if (
                                (e.assertCurrent(), "hermes_admin" !== r.agent.viewer_capability || !0 !== a.get(q.lF))
                              )
                                throw Error("Only the agent owner can manage its channels")
                            })(e)),
                          "add_api_channel" === t.name)
                        ) {
                          if (!e.apiAvailable()) return { status: "error", reason: "api_channel_feature_disabled" }
                          let t = e.readFields().apiDeployments?.find((e) => !e.pending_deletion)
                          if (null != t) return { status: "ok", noop: !0, deployment_id: t.deployment_id }
                          let a = (0, N.y)()
                          return (
                            e.update({ apiDeployments: [...(e.readFields().apiDeployments ?? []), a] }),
                            { status: "ok", deployment_id: a.deployment_id, publish_required: !0 }
                          )
                        }
                        if ("remove_api_channel" === t.name) {
                          let t = e.readFields().apiDeployments?.filter((e) => !e.pending_deletion)
                          if (t?.length !== 1)
                            return (e.open("api"), { status: "error", reason: "select_api_channel_to_remove" })
                          let a = t[0]
                          return (
                            e.update({
                              apiDeployments: e
                                .readFields()
                                .apiDeployments?.flatMap((e) =>
                                  e !== a
                                    ? [e]
                                    : null == e.materialized_trigger_id
                                      ? []
                                      : [{ ...e, pending_deletion: !0 }],
                                ),
                            }),
                            { status: "ok", publish_required: null != a.materialized_trigger_id }
                          )
                        }
                        if ("update_slack_channel_deployment" === t.name) {
                          let a = ec.safeParse(t.params)
                          if (!a.success) return { status: "error", reason: "invalid_deployment_id" }
                          let { deployment_id: n, response_mode: r, instructions: s } = a.data
                          if (null == r && null == s) return { status: "error", reason: "missing_deployment_updates" }
                          let i = e
                            .readFields()
                            .slackDeployments?.find((e) => e.deployment_id === n && !0 !== e.pending_deletion)
                          if (null == i || (null != r && !i.slack_trigger.link.id))
                            return { status: "error", reason: "deployment_not_found" }
                          let l = { ...i.slack_trigger, params: { ...i.slack_trigger.params } }
                          return (
                            "all_messages" === r
                              ? ((l.webhook_name = "message"), (l.params.only_initial_message = !0))
                              : "mentions" === r &&
                                ((l.webhook_name = "mention"), delete l.params.only_initial_message),
                            null != s && (l.instructions = s),
                            e.update({
                              slackDeployments: e
                                .readFields()
                                .slackDeployments?.map((e) => (e === i ? { ...e, slack_trigger: l } : e)),
                            }),
                            {
                              status: "ok",
                              deployment_id: n,
                              updated_fields: [
                                ...(null == r ? [] : ["response_mode"]),
                                ...(null == s ? [] : ["instructions"]),
                              ],
                            }
                          )
                        }
                        if ("delete_slack_channel_deployment" === t.name) {
                          let a = ep.safeParse(t.params)
                          if (!a.success) return { status: "error", reason: "invalid_deployment_id" }
                          let n = a.data.deployment_id,
                            r = e.readFields().slackDeployments?.find((e) => e.deployment_id === n)
                          return null == r
                            ? { status: "error", reason: "deployment_not_found" }
                            : !0 === r.pending_deletion
                              ? { status: "ok", noop: !0, tool: t.name }
                              : (e.update({ slackDeployments: (0, B.kt)(e.readFields().slackDeployments, n) }),
                                {
                                  status: "ok",
                                  deployment_id: n,
                                  deleted: !0,
                                  pending_deletion: null != r.materialized_trigger_id,
                                })
                        }
                        if ("patch_agent_instructions" === t.name) {
                          let a = eu.safeParse(t.params)
                          if (!a.success) return { status: "error", reason: "no_valid_suggestions" }
                          if (0 === a.data.suggestions.length) return { status: "error", reason: "missing_suggestions" }
                          let n = e.readFields().instructions,
                            r = n,
                            s = [],
                            i = []
                          for (let [e, t] of a.data.suggestions.entries()) {
                            let a = t.start_text_pointer.trim(),
                              r = t.end_text_pointer.trim()
                            if (!a || !r) {
                              s.push({ index: e, reason: "empty_text_pointer" })
                              continue
                            }
                            let l = n.indexOf(a)
                            if (l < 0) {
                              s.push({ index: e, reason: "start_text_not_found" })
                              continue
                            }
                            let o = a === r ? l : n.indexOf(r, l)
                            if (o < 0) {
                              s.push({ index: e, reason: "end_text_not_found" })
                              continue
                            }
                            let d = o + r.length
                            if (i.some((e) => l < e.end && d > e.start)) {
                              s.push({ index: e, reason: "overlaps_prior_edit" })
                              continue
                            }
                            i.push({ start: l, end: d, replacement: t.replacement })
                          }
                          for (let e of i.toSorted((e, t) => t.start - e.start))
                            r = r.slice(0, e.start) + e.replacement + r.slice(e.end)
                          return r === n
                            ? {
                                status: "error",
                                reason: JSON.stringify({ reason: "no_edits_applied", failed_edits: s }),
                              }
                            : (e.update({ instructions: r }), { status: "ok", failed_edits: s })
                        }
                        return { status: "error", reason: "unsupported_tool" }
                      })(e, t)
                    )
                  } catch {
                    return { status: "error", reason: "assistant_action_failed" }
                  }
                },
                onEffect: (t) => {
                  try {
                    let a = s()
                    if ((a.assertCurrent(), "sync_agent_draft_revision" === t.name)) {
                      let n = eI.safeParse(t.data)
                      a.canEdit() &&
                        n.success &&
                        n.data.gpt_id === tc.agentId &&
                        (null != e.turn && (e.turn.draftRevision = n.data.draft_revision),
                        tz().onDraftRevision(n.data.draft_revision))
                      return
                    }
                    let n = e.turn
                    if (null != n && a.canEdit()) {
                      let a = (0, ek.C3)(t.name, t.data ?? {})
                      if (
                        (function (e) {
                          switch (e) {
                            case "upsert_agent_tools":
                            case "remove_agent_tools":
                            case "upsert_agent_action_constraint_rules":
                            case "remove_agent_action_constraint_rules":
                            case "attach_chatgpt_skill_to_agent":
                            case "attach_uploaded_skill_to_agent":
                            case "update_skill_definition":
                            case "detach_skill_from_agent":
                              return !0
                            default:
                              return !1
                          }
                        })(t.name) &&
                        null != n.draftRevision &&
                        n.resourceRead?.revision !== n.draftRevision
                      ) {
                        let t = n.draftRevision
                        n.resourceRead = {
                          revision: t,
                          done: (async (t) => {
                            let a
                            try {
                              a = await (0, Y.is)(tc.agentId, t.signal, tc)
                            } catch {
                              return
                            }
                            if (
                              t.signal.aborted ||
                              e.turn !== t ||
                              !J(tE, tc) ||
                              !tz().canEdit ||
                              !0 !== tE.get(q.iX) ||
                              a.draft_revision !== t.draftRevision
                            )
                              return
                            let { tools: n, skills: s } = (0, Y.H5)(a)
                            r(t, { tools: n, skills: s })
                          })(n).finally(() => {
                            n.resourceRead?.revision === t && (n.resourceRead = void 0)
                          }),
                        }
                      }
                      let s = "widget_streamed" === t.name && null == a && null != n.resourceRead
                      void 0 === a || s || tz().onCursorTarget(a)
                    }
                    !(function (e, t) {
                      if ((e.assertCurrent(), e.canEdit())) {
                        if ("update_agent_instructions" === t.name) {
                          let a = es.safeParse(t.data)
                          a.success && e.update({ instructions: a.data.resolved_instructions ?? a.data.instructions })
                        }
                        if ("set_memory" === t.name) {
                          let a = ei.safeParse(t.data)
                          a.success && e.update({ persistentFolder: a.data.enabled ? "per_user" : "none" })
                        }
                        if ("update_agent_details" === t.name) {
                          let a = ed.safeParse(t.data)
                          if (a.success) {
                            let {
                                name: t,
                                icon_name: n,
                                icon_color: r,
                                agent_description: s,
                                starter_prompts: i,
                                field_results: l,
                              } = a.data,
                              o = {}
                            ;("updated" === l.name && null != t && (o.name = t),
                              "updated" === l.agent_description && null != s && (o.tagline = s),
                              "updated" === l.icon && null != n && null != r && (o.icon = { name: n, color: r }),
                              "updated" === l.starter_prompts && null != i && (o.starterPrompts = i),
                              e.update(o))
                          }
                        }
                      }
                    })(a, t)
                  } catch {
                    if (e.lifetime.signal.aborted || !J(tE, tc)) return
                    ;(l(), tz().onFailure())
                  }
                },
                onResponseEnd: () => {
                  ;(async () => {
                    let a = e.turn
                    if (null != a && !a.finishing && !(a.waitingForTools > 0)) {
                      a.finishing = !0
                      try {
                        ;(t(),
                          a.signal.throwIfAborted(),
                          await a.resourceRead?.done,
                          await i(a),
                          await tz().onPrepare(a.signal),
                          t())
                        let n = await eh(tE, tc, tz().readFields(), a.signal)
                        if ((t(), e.turn !== a)) return
                        ;((e.completed =
                          null == a.before || null == n || a.manualEdits
                            ? null
                            : { id: a.id, before: a.before, after: n }),
                          (e.turn = null),
                          tz().onBusyChange(!1),
                          X(tE, tc, e.threadId))
                      } catch {
                        e.turn === a &&
                          ((e.turn = null),
                          (e.completed = null),
                          tz().onBusyChange(!1),
                          a.signal.aborted || tz().onFailure())
                      }
                    }
                  })()
                },
                onError: ({ error: t }) => {
                  ;(/thread.*not found|not found.*thread/i.test(t.message) && (X(tE, tc, null), (e.resetThread = !0)),
                    n())
                },
                takeThreadReset: () => {
                  let t = e.resetThread
                  return ((e.resetThread = !1), t)
                },
                close: () => {
                  e.lifetime.abort()
                },
              }
            )
          }),
          (tu[15] = tz),
          (tu[16] = tc),
          (tu[17] = t$),
          (tu[18] = tE),
          (tu[19] = l))
        : (l = tu[19])
      let [tV] = (0, i.useState)(l)
      ;(0, b.fP)(tV.close, tV)
      let [tK, tZ] = (0, i.useState)(tV.initialThread),
        tQ = (0, p.Ul)(_.cZ)
      tu[20] !== tQ
        ? ((o =
            null == tQ || "u" < typeof document || document.documentElement.classList.contains("chatgpt-theme")
              ? void 0
              : tQ.variables),
          (tu[20] = tQ),
          (tu[21] = o))
        : (o = tu[21])
      let tJ = o,
        tX = tJ?.["--app-color-background-surface-under"] ?? "light-dark(var(--gray-50), var(--gray-100))",
        t1 = tT ? "dark" : "light",
        t0 = tJ?.["--app-color-background-elevated-primary"] ?? "light-dark(var(--gray-0), var(--gray-200))"
      ;(tu[22] !== tX || tu[23] !== t0
        ? ((P = {
            "chat-gutter": "calc(var(--spacing) * 4)",
            "font-heading-lg-weight": "var(--font-weight-medium)",
            "font-heading-lg-size": "calc(var(--spacing) * 4)",
            "color-surface": tX,
            "color-surface-elevated": t0,
            "task-title-color": "var(--color-text-tertiary)",
            "task-expand-chevron-interactive-opacity": "0",
            "task-expand-chevron-hover-expanded-opacity": "1",
          }),
          (tu[22] = tX),
          (tu[23] = t0),
          (tu[24] = P))
        : (P = tu[24]),
        tu[25] !== t1 || tu[26] !== P
          ? ((E = { density: "spacious", colorScheme: t1, unsafeVariables: P }),
            (tu[25] = t1),
            (tu[26] = P),
            (tu[27] = E))
          : (E = tu[27]))
      let t5 = E
      ;(tu[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { type: "direct", uploadUrl: "/hermes/pluto/attachments" }), (tu[28] = T))
        : (T = tu[28]),
        tu[29] !== tV.fetch
          ? ((F = {
              url: "/hermes/pluto/chat",
              fetch: tV.fetch,
              domainKey: "domain_pk_697ce8a427d481909b4902ac602842750eb10017e95feea6",
              uploadStrategy: T,
            }),
            (tu[29] = tV.fetch),
            (tu[30] = F))
          : (F = tu[30]))
      let t3 = tV.initialThread
      ;(tu[31] !== tM
        ? ((V = tM.formatMessage({
            id: "workspaceAgents.studio.assistant.frame",
            defaultMessage: "Agent builder assistant",
          })),
          (tu[31] = tM),
          (tu[32] = V))
        : (V = tu[32]),
        tu[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = { enabled: !1 }), (Z = { enabled: !0, showDelete: !0, showRename: !0 }), (tu[33] = K), (tu[34] = Z))
          : ((K = tu[33]), (Z = tu[34])),
        tu[35] !== tm || tu[36] !== tM || tu[37] !== tB || tu[38] !== tW
          ? ((et = (({ intl: e, fields: t, triggers: a, triggersLoading: n }) => {
              if (
                (({ agentName: e, agentInstructions: t }) => e.trim().length > 0 && t.trim().length >= 500)({
                  agentName: t.name,
                  agentInstructions: t.instructions,
                })
              ) {
                let t = [
                  {
                    icon: "play",
                    label: e.formatMessage(eP.startScreenRunPreviewLabel),
                    prompt: eA({ alias: "run-preview", promptText: e.formatMessage(eP.startScreenRunPreviewPrompt) }),
                  },
                  {
                    icon: "book-open",
                    label: e.formatMessage(eP.startScreenAddAdvancedLogicLabel),
                    prompt: eA({
                      alias: "add-advanced-logic",
                      promptText: e.formatMessage(eP.startScreenAddAdvancedLogicPrompt),
                    }),
                  },
                ]
                return (
                  a?.length === 0 &&
                    t.push({
                      icon: "clock",
                      label: e.formatMessage(eP.startScreenConfigureTriggersLabel),
                      prompt: eA({
                        alias: "configure-triggers",
                        promptText: e.formatMessage(eP.startScreenConfigureTriggersPrompt),
                      }),
                    }),
                  t.push({
                    icon: "write-alt2",
                    label: e.formatMessage(eP.startScreenHelpImproveAgentLabel),
                    prompt: eA({
                      alias: "help-improve-agent",
                      promptText: e.formatMessage(eP.startScreenHelpImproveAgentPrompt),
                    }),
                  }),
                  { greeting: e.formatMessage(eP.startScreenGreetingConfigured), enabled: !n, prompts: t }
                )
              }
              let r = [
                {
                  icon: "book-open",
                  label: e.formatMessage(eP.startScreenWhatCanIDoLabel),
                  prompt: eA({ alias: "what-can-i-do", promptText: e.formatMessage(eP.startScreenWhatCanIDoPrompt) }),
                },
                {
                  icon: "write-alt2",
                  label: e.formatMessage(eP.startScreenBuildMyAgentLabel),
                  prompt: eA({ alias: "build", promptText: e.formatMessage(eP.startScreenBuildMyAgentPrompt) }),
                },
                {
                  icon: "sparkle",
                  label: e.formatMessage(eP.startScreenStartFromTemplateLabel),
                  prompt: eA({
                    alias: "start-from-template",
                    promptText: e.formatMessage(eP.startScreenStartFromTemplatePrompt),
                  }),
                },
                {
                  icon: "square-text",
                  label: e.formatMessage(eP.startScreenBuildFromExampleLabel),
                  prompt: eA({
                    alias: "build-from-example",
                    promptText: e.formatMessage(eP.startScreenBuildFromExamplePrompt),
                  }),
                },
              ]
              return { greeting: e.formatMessage(eP.startScreenGreetingFresh), enabled: !0, prompts: r }
            })({ intl: tM, fields: tm, triggers: tB, triggersLoading: tW })),
            (tu[35] = tm),
            (tu[36] = tM),
            (tu[37] = tB),
            (tu[38] = tW),
            (tu[39] = et))
          : (et = tu[39]),
        tu[40] !== tM
          ? ((ea = tM.formatMessage({
              id: "workspaceAgents.studio.assistant.placeholder",
              defaultMessage: "Ask anything, @ for context",
            })),
            (tu[40] = tM),
            (tu[41] = ea))
          : (ea = tu[41]),
        tu[42] === Symbol.for("react.memo_cache_sentinel") ? ((el = { enabled: !0 }), (tu[42] = el)) : (el = tu[42]),
        tu[43] !== tp ? ((eo = { enabled: tp }), (tu[43] = tp), (tu[44] = eo)) : (eo = tu[44]),
        tu[45] !== tM
          ? ((ey = tM.formatMessage({
              id: "Hermes.GptStudio.Chat.ChatSidebar.extraReasoningEffortToolLabel",
              defaultMessage: "Extra reasoning effort",
            })),
            (tu[45] = tM),
            (tu[46] = ey))
          : (ey = tu[46]),
        tu[47] !== tM
          ? ((eC = tM.formatMessage({
              id: "Hermes.GptStudio.Chat.ChatSidebar.extraReasoningEffortToolShortLabel",
              defaultMessage: "Extra reasoning",
            })),
            (tu[47] = tM),
            (tu[48] = eC))
          : (eC = tu[48]),
        tu[49] !== ey || tu[50] !== eC
          ? ((eE = [{ id: "extra-reasoning", label: ey, shortLabel: eC, icon: "sparkle", persistent: !0 }]),
            (tu[49] = ey),
            (tu[50] = eC),
            (tu[51] = eE))
          : (eE = tu[51]),
        tu[52] !== ea || tu[53] !== eo || tu[54] !== eE
          ? ((eM = { placeholder: ea, attachments: el, dictation: eo, tools: eE }),
            (tu[52] = ea),
            (tu[53] = eo),
            (tu[54] = eE),
            (tu[55] = eM))
          : (eM = tu[55]),
        tu[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((ex = { feedback: !1, retry: !1 }), (tu[56] = ex))
          : (ex = tu[56]),
        tu[57] !== tV || tu[58] !== tc || tu[59] !== tM || tu[60] !== tf || tu[61] !== tE
          ? ((eT = async (e) => {
              tV.assertCurrent()
              let t = tV.runtime(),
                a = await R(tE, tc)
              return (
                t.assertCurrent(),
                tV.assertCurrent(),
                (function ({
                  scope: e,
                  identity: t,
                  fields: a,
                  apps: n,
                  tree: r,
                  intl: s,
                  query: i,
                  memoryAvailable: l,
                  browsingAvailable: o,
                }) {
                  let d = {
                      files: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.files",
                        defaultMessage: "Uploaded files",
                      }),
                      skills: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.skills",
                        defaultMessage: "Uploaded skills",
                      }),
                      tools: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.tools",
                        defaultMessage: "Tools",
                      }),
                      apps: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.apps",
                        defaultMessage: "Apps",
                      }),
                      previews: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.previews",
                        defaultMessage: "Preview runs",
                      }),
                    },
                    u = []
                  for (let e of null == r ? [] : j(r))
                    "file" === e.kind &&
                      u.push({
                        id: `file:${e.node_id}`,
                        title: e.path,
                        icon: "file",
                        interactive: !0,
                        group: d.files,
                        data: {
                          type: "file",
                          mention_group_key: "uploaded_files",
                          file_id: e.node_id,
                          node_id: e.node_id,
                          path: e.path,
                          file_name: e.path.split("/").at(-1) ?? e.path,
                        },
                      })
                  for (let e of a.skills)
                    "source" in e &&
                      u.push({
                        id: `skill:${e.id}`,
                        title: e.name.slice(0, 40),
                        icon: "cube",
                        interactive: !0,
                        group: d.skills,
                        data: {
                          type: "skill",
                          mention_group_key: "uploaded_skills",
                          skill_id: e.id,
                          skill_name: e.name,
                          ...(null == e.description ? {} : { description: e.description }),
                        },
                      })
                  let c = [
                    {
                      id: "image_generation",
                      title: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.image",
                        defaultMessage: "Create image",
                      }),
                      icon: "images",
                    },
                  ]
                  for (let e of (o &&
                    c.push({
                      id: "web_search",
                      title: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.web",
                        defaultMessage: "Web search",
                      }),
                      icon: "globe",
                    }),
                  l &&
                    c.push({
                      id: "memory",
                      title: s.formatMessage({
                        id: "workspaceAgents.studio.assistant.entities.memory",
                        defaultMessage: "Memory",
                      }),
                      icon: "book-clock",
                    }),
                  c))
                    u.push({
                      id: `tool:${e.id}`,
                      title: e.title,
                      icon: e.icon,
                      interactive: !0,
                      group: d.tools,
                      data: { type: "tool", mention_group_key: "tools", tool_type: e.id, tool_name: e.title },
                    })
                  for (let e of n ?? [])
                    u.push({
                      id: `connector:${e.id}`,
                      title: e.name.slice(0, 44),
                      interactive: !0,
                      group: d.apps,
                      data: {
                        type: "connector",
                        mention_group_key: "apps",
                        connector_id: e.id,
                        connector_name: e.name,
                      },
                    })
                  for (let a of e.get(M.tR, t)) {
                    let e = s.formatDate(a.submittedAt, { dateStyle: "medium", timeStyle: "short" })
                    u.push({
                      id: `preview_run:${a.conversationId}`,
                      title: e,
                      icon: "clock",
                      interactive: !0,
                      group: d.previews,
                      data: {
                        type: "preview_run",
                        mention_group_key: "preview_runs",
                        preview_thread_id: a.conversationId,
                        conversation_id: a.conversationId,
                        conversation_title: e,
                      },
                    })
                  }
                  let p = i.trim().toLocaleLowerCase(),
                    m = new Map()
                  return u
                    .filter((e) => {
                      if (
                        p &&
                        ![e.title, ...Object.values(e.data ?? {})].some((e) => e.toLocaleLowerCase().includes(p))
                      )
                        return !1
                      let t = e.group ?? "",
                        a = m.get(t) ?? 0
                      return (m.set(t, a + 1), a < 10)
                    })
                    .slice(0, 50)
                })({
                  scope: tE,
                  identity: tc,
                  fields: tf(),
                  apps: a.apps,
                  tree: a.tree,
                  intl: tM,
                  query: e,
                  memoryAvailable: !0,
                  browsingAvailable: !0 === a.browsing,
                })
              )
            }),
            (tu[57] = tV),
            (tu[58] = tc),
            (tu[59] = tM),
            (tu[60] = tf),
            (tu[61] = tE),
            (tu[62] = eT))
          : (eT = tu[62]),
        tu[63] !== tV || tu[64] !== tb || tu[65] !== tf
          ? ((eO = (e) => {
              tV.assertCurrent()
              let t = e.data
              t?.type === "connector"
                ? tb("custom_mcp", t.connector_id)
                : t?.type === "file"
                  ? tb("files", t.node_id)
                  : t?.type === "skill"
                    ? tb("skill", t.skill_id)
                    : t?.type === "preview_run"
                      ? tb("preview", t.conversation_id)
                      : t?.type === "tool" &&
                        "memory" === t.tool_type &&
                        "per_user" === tf().persistentFolder &&
                        tb("memory")
            }),
            (tu[63] = tV),
            (tu[64] = tb),
            (tu[65] = tf),
            (tu[66] = eO))
          : (eO = tu[66]),
        tu[67] !== eT || tu[68] !== eO
          ? ((eR = { onTagSearch: eT, onClick: eO }), (tu[67] = eT), (tu[68] = eO), (tu[69] = eR))
          : (eR = tu[69]),
        tu[70] !== tV
          ? ((ej = (e) => {
              ;(tV.onThreadChange(e), tZ(e.threadId))
            }),
            (tu[70] = tV),
            (tu[71] = ej))
          : (ej = tu[71]),
        tu[72] !== tV.initialThread ||
        tu[73] !== tV.onClientTool ||
        tu[74] !== tV.onEffect ||
        tu[75] !== tV.onError ||
        tu[76] !== tV.onResponseEnd ||
        tu[77] !== V ||
        tu[78] !== et ||
        tu[79] !== eM ||
        tu[80] !== eR ||
        tu[81] !== ej ||
        tu[82] !== F ||
        tu[83] !== t5
          ? ((eF = {
              disableTelemetry: !0,
              api: F,
              theme: t5,
              initialThread: t3,
              frameTitle: V,
              header: K,
              history: Z,
              startScreen: et,
              composer: eM,
              threadItemActions: ex,
              entities: eR,
              onThreadChange: ej,
              onClientTool: tV.onClientTool,
              onEffect: tV.onEffect,
              onResponseEnd: tV.onResponseEnd,
              onError: tV.onError,
            }),
            (tu[72] = tV.initialThread),
            (tu[73] = tV.onClientTool),
            (tu[74] = tV.onEffect),
            (tu[75] = tV.onError),
            (tu[76] = tV.onResponseEnd),
            (tu[77] = V),
            (tu[78] = et),
            (tu[79] = eM),
            (tu[80] = eR),
            (tu[81] = ej),
            (tu[82] = F),
            (tu[83] = t5),
            (tu[84] = eF))
          : (eF = tu[84]))
      let t2 =
        ((t = eF),
        (tt = i.useRef(null)),
        ((ta = i.useRef(t)).current = t),
        ((tn = i.useRef(null)).current &&
          (function e(t, a, n = new WeakMap()) {
            if (Object.is(t, a)) return !0
            if ("function" == typeof t && "function" == typeof a) return typeof t == typeof a
            if (!u(t) || !u(a)) return !1
            let r = n.get(t)
            if (r && r === a) return !0
            if ((n.set(t, a), Array.isArray(t) || Array.isArray(a))) {
              if (!Array.isArray(t) || !Array.isArray(a) || t.length !== a.length) return !1
              for (let r = 0; r < t.length; r++) if (!e(t[r], a[r], n)) return !1
              return !0
            }
            let s = Object.keys(t),
              i = Object.keys(a)
            if (s.length !== i.length) return !1
            for (let r = 0; r < s.length; r++) {
              let i = s[r]
              if (!Object.prototype.hasOwnProperty.call(a, i) || !e(t[i], a[i], n)) return !1
            }
            return !0
          })(tn.current.snapshot, t)) ||
          (tn.current = {
            snapshot: t,
            shaped:
              ((tr = []),
              (ts = (e) => {
                if ("function" == typeof e) {
                  let e,
                    t = tr[tr.length - 1]
                  return (
                    (e = tr.slice(0, -1)),
                    (...a) => {
                      let n,
                        r = ((n = ta.current), e.reduce((e, t) => (null == e ? e : e[t]), n)),
                        s = r?.[t]
                      if ("function" == typeof s) return s.apply(r, a)
                    }
                  )
                }
                if (Array.isArray(e)) {
                  let t = tr.length,
                    a = Array(e.length)
                  for (let n = 0; n < e.length; n++) ((tr[t] = n), (a[n] = ts(e[n])))
                  return ((tr.length = t), a)
                }
                if (e && "object" == typeof e) {
                  let t = tr.length,
                    a = {}
                  for (let n of Object.keys(e)) ((tr[t] = n), (a[n] = ts(e[n])))
                  return ((tr.length = t), a)
                }
                return e
              })(ta.current)),
          }),
        (ti = tn.current.shaped),
        (tl = i.useMemo(
          () =>
            c.reduce(
              (e, t) => (
                (e[t] = (...e) =>
                  tt.current ? tt.current[t](...e) : void console.warn("ChatKit element is not mounted")),
                e
              ),
              {},
            ),
          [],
        )),
        (to = i.useCallback((e) => {
          tt.current = e
        }, [])),
        (td = i.useMemo(() => {
          let e = {},
            t = {}
          for (let [a, n] of Object.entries(ti)) /^on[A-Z]/.test(a) && "onClientTool" !== a ? (t[a] = n) : (e[a] = n)
          return { setInstance: to, options: e, handlers: t }
        }, [ti, to])),
        i.useMemo(() => ({ ...tl, control: td, ref: tt }), [tl, td]))
      ;(tu[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((eL = () => {
            let e = tN.current
            if (null == e) return
            let t = () => tG(!0),
              a = () => tG(!1)
            return (
              e.addEventListener("chatkit.history.open", t),
              e.addEventListener("chatkit.history.close", a),
              () => {
                ;(e.removeEventListener("chatkit.history.open", t), e.removeEventListener("chatkit.history.close", a))
              }
            )
          }),
          (eU = [tN]),
          (tu[85] = eL),
          (tu[86] = eU))
        : ((eL = tu[85]), (eU = tu[86])),
        (0, i.useEffect)(eL, eU),
        tu[87] !== t2 || tu[88] !== tV
          ? ((eD = async function (e, t) {
              let a = await tV.undo(e)
              ;(tV.assertCurrent(),
                await t2.sendCustomAction(
                  {
                    type: "restored" === a ? "changes.undo.succeeded" : "changes.undo.disabled",
                    payload: { review_id: e },
                  },
                  t,
                ))
            }),
            (tu[87] = t2),
            (tu[88] = tV),
            (tu[89] = eD))
          : (eD = tu[89]))
      let t4 = eD,
        t6 = t2.control,
        t9 = t2.control.options
      tu[90] !== t2 || tu[91] !== tV || tu[92] !== tM || tu[93] !== tw || tu[94] !== t4
        ? ((eq = async (e, t) => {
            try {
              await (async function (e, t, a, n, { intl: r, selectApp: s, undo: i, onFailure: l }) {
                if ((e.assertCurrent(), "chat.try" === a.type)) return void e.open("chatgpt")
                if ("templates.browse" === a.type || "template.select" === a.type) {
                  let t = a.payload?.id
                  e.open("templates", "string" == typeof t ? t : void 0)
                  return
                }
                if (!e.canEdit()) return
                if ("slack_channel_setup.open" === a.type) return void e.open("slack")
                if ("publish.create" === a.type) return void e.open("publish")
                if (["missing_app_link.connect", "template.apps.add", "template.apps.browse"].includes(a.type)) {
                  let r = a.payload,
                    i = U.YjP().trim().min(1),
                    o = U.Ikc({ id: i }).safeParse(r?.app),
                    d = U.Ikc({
                      id: i,
                      payload: U.Ikc({
                        apps: U.YOg(U.Ikc({ id: i, connectionMode: U.YjP().optional() }).loose()),
                      }).loose(),
                    }).safeParse(r),
                    u = U.Ikc({ id: i }).safeParse(r?.category),
                    c = i.safeParse(r?.categoryId),
                    p = c.success ? c.data : u.data?.id,
                    m = U.g1P(U.YjP(), U.Pq9()).safeParse(r?.state)
                  return ("template.apps.add" !== a.type || o.success) &&
                    ("missing_app_link.connect" !== a.type || d.success) &&
                    ("template.apps.browse" !== a.type || (null != p && m.success))
                    ? "template.apps.add" === a.type && o.data?.id === "file_persistence"
                      ? void (await t.sendCustomAction(a, n.id))
                      : void s({
                          connectorId: d.data?.id ?? o.data?.id,
                          requireLink: "missing_app_link.connect" === a.type,
                          shared: d.success
                            ? d.data.payload.apps.find((e) => e.id === d.data.id)?.connectionMode === "shared"
                            : void 0,
                          completed: (r) => {
                            e.assertCurrent()
                            let s = a
                            if ("template.apps.browse" === a.type)
                              s = {
                                type: "template.apps.add",
                                payload: {
                                  app: { id: r.id, name: r.name, icon: null, logoUrl: r.logoUrl },
                                  categoryId: p,
                                  state: m.data,
                                },
                              }
                            else if ("missing_app_link.connect" === a.type && d.success) {
                              let e = d.data.payload.apps.find((e) => e.id === d.data.id)?.connectionMode === "shared"
                              s = {
                                type: "missing_app_link.connect.succeeded",
                                payload: { ...d.data, ...(e ? { linkId: r.linkId } : {}) },
                              }
                            }
                            t.sendCustomAction(s, n.id).catch(() => {
                              l()
                            })
                          },
                        })
                    : void 0
                }
                if ("changes.undo" === a.type) {
                  let e = a.payload?.review_id
                  "string" == typeof e && e.trim() && (await i(e.trim(), n.id))
                  return
                }
                if ("agent_plan.confirm" !== a.type && "agent_plan.edit" !== a.type) return
                let o = U.g1P(U.YjP(), U.Pq9()).safeParse(a.payload?.state),
                  d = o.success ? o.data : void 0,
                  u = "agent_plan.edit" === a.type,
                  c = u ? "edit" : "confirm",
                  p = {
                    type: "input_tag",
                    text: "",
                    id: `agent_plan_action:${c}`,
                    group: r.formatMessage({
                      id: "workspaceAgents.studio.assistant.planActions",
                      defaultMessage: "Agent plan actions",
                    }),
                    data: {
                      type: "agent_plan_action",
                      action: c,
                      widget_item_id: n.id,
                      ...(null == d ? {} : { state: d }),
                    },
                  }
                if (u) {
                  let e = U.Ikc({ copy: U.Ikc({ title: U.YjP() }) }).safeParse(d)
                  ;(await t.setComposerValue({ text: "", content: [p], reply: e.success ? e.data.copy.title : void 0 }),
                    await t.focusComposer())
                  return
                }
                await t.sendUserMessage({
                  content: [
                    p,
                    {
                      type: "input_text",
                      text: r.formatMessage({
                        id: "workspaceAgents.studio.assistant.confirmPlan",
                        defaultMessage: "Build this agent",
                      }),
                    },
                  ],
                })
              })(tV.runtime(), t2, e, t, { intl: tM, selectApp: tw, undo: t4, onFailure: tV.fail })
            } catch {
              tV.fail()
            }
          }),
          (tu[90] = t2),
          (tu[91] = tV),
          (tu[92] = tM),
          (tu[93] = tw),
          (tu[94] = t4),
          (tu[95] = eq))
        : (eq = tu[95])
      let t7 = (0, C.K)(eq)
      ;(tu[96] !== t7 ? ((eG = { onAction: t7 }), (tu[96] = t7), (tu[97] = eG)) : (eG = tu[97]),
        tu[98] !== t2.control.options || tu[99] !== eG
          ? ((eY = { ...t9, widgets: eG }), (tu[98] = t2.control.options), (tu[99] = eG), (tu[100] = eY))
          : (eY = tu[100]))
      let t8 = t2.control.handlers
      tu[101] !== t2.focusComposer ||
      tu[102] !== t2.sendUserMessage ||
      tu[103] !== t2.setComposerValue ||
      tu[104] !== tV ||
      tu[105] !== tS
        ? ((eH = () => {
            ;(tV.assertCurrent(),
              tj(!1),
              tH(!0),
              tS({
                send: t2.sendUserMessage,
                compose: t2.setComposerValue,
                focus: t2.focusComposer,
                markManualEdit: tV.markManualEdit,
              }))
          }),
          (tu[101] = t2.focusComposer),
          (tu[102] = t2.sendUserMessage),
          (tu[103] = t2.setComposerValue),
          (tu[104] = tV),
          (tu[105] = tS),
          (tu[106] = eH))
        : (eH = tu[106])
      let ae = (0, C.K)(eH)
      ;(tu[107] !== t2.control.handlers || tu[108] !== ae
        ? ((eN = { ...t8, onReady: ae }), (tu[107] = t2.control.handlers), (tu[108] = ae), (tu[109] = eN))
        : (eN = tu[109]),
        tu[110] !== t2.control || tu[111] !== eY || tu[112] !== eN
          ? ((eB = { ...t6, options: eY, handlers: eN }),
            (tu[110] = t2.control),
            (tu[111] = eY),
            (tu[112] = eN),
            (tu[113] = eB))
          : (eB = tu[113]))
      let at = eB
      ;(tu[114] !== tX ? ((eW = { backgroundColor: tX }), (tu[114] = tX), (tu[115] = eW)) : (eW = tu[115]),
        tu[116] !== t2 || tu[117] !== tV.fail || tu[118] !== tq || tu[119] !== tP
          ? ((ez = () => {
              tq ? t2.hideHistory().catch(tV.fail) : tP()
            }),
            (tu[116] = t2),
            (tu[117] = tV.fail),
            (tu[118] = tq),
            (tu[119] = tP),
            (tu[120] = ez))
          : (ez = tu[120]),
        tu[121] === Symbol.for("react.memo_cache_sentinel")
          ? ((e$ = (0, n.jsx)(k.tOb, {})), (tu[121] = e$))
          : (e$ = tu[121]),
        tu[122] !== tq
          ? ((eV = tq
              ? (0, n.jsx)(f.A, { id: "workspaceAgents.studio.assistant.backToChat", defaultMessage: "Back to chat" })
              : (0, n.jsx)(f.A, { id: "workspaceAgents.studio.assistant.backToChatGPT", defaultMessage: "ChatGPT" })),
            (tu[122] = tq),
            (tu[123] = eV))
          : (eV = tu[123]),
        tu[124] !== ez || tu[125] !== eV
          ? ((eK = (0, n.jsxs)(y.$, { color: "ghostActive", size: "dialogGhost", onClick: ez, children: [e$, eV] })),
            (tu[124] = ez),
            (tu[125] = eV),
            (tu[126] = eK))
          : (eK = tu[126]),
        tu[127] !== tK || tu[128] !== t2 || tu[129] !== tV.fail || tu[130] !== tM || tu[131] !== tY
          ? ((eZ =
              null != tK
                ? (0, n.jsx)(y.$, {
                    color: "ghostSecondary",
                    size: "iconCircleLg",
                    disabled: !tY,
                    "aria-label": tM.formatMessage({
                      id: "workspaceAgents.studio.assistant.newChat",
                      defaultMessage: "New chat",
                    }),
                    onClick: () => {
                      t2.hideHistory()
                        .then(() => t2.setThreadId(null))
                        .then(() => t2.focusComposer())
                        .catch(tV.fail)
                    },
                    children: (0, n.jsx)(k.ONy, {}),
                  })
                : null),
            (tu[127] = tK),
            (tu[128] = t2),
            (tu[129] = tV.fail),
            (tu[130] = tM),
            (tu[131] = tY),
            (tu[132] = eZ))
          : (eZ = tu[132]))
      let aa = !tY
      return (
        tu[133] !== tM
          ? ((eQ = tM.formatMessage({
              id: "workspaceAgents.studio.assistant.history",
              defaultMessage: "Chat history",
            })),
            (tu[133] = tM),
            (tu[134] = eQ))
          : (eQ = tu[134]),
        tu[135] !== t2 || tu[136] !== tV.fail || tu[137] !== tq
          ? ((eJ = () => {
              ;(tq ? t2.hideHistory() : t2.showHistory()).catch(tV.fail)
            }),
            (tu[135] = t2),
            (tu[136] = tV.fail),
            (tu[137] = tq),
            (tu[138] = eJ))
          : (eJ = tu[138]),
        tu[139] === Symbol.for("react.memo_cache_sentinel")
          ? ((eX = (0, n.jsx)(v.I, { asset: s.t })), (tu[139] = eX))
          : (eX = tu[139]),
        tu[140] !== tq || tu[141] !== aa || tu[142] !== eQ || tu[143] !== eJ
          ? ((e1 = (0, n.jsx)(y.$, {
              color: "ghostSecondary",
              size: "iconCircleLg",
              disabled: aa,
              "aria-pressed": tq,
              "aria-label": eQ,
              onClick: eJ,
              children: eX,
            })),
            (tu[140] = tq),
            (tu[141] = aa),
            (tu[142] = eQ),
            (tu[143] = eJ),
            (tu[144] = e1))
          : (e1 = tu[144]),
        tu[145] !== tM
          ? ((e0 = tM.formatMessage({
              id: "workspaceAgents.studio.assistant.close",
              defaultMessage: "Close assistant",
            })),
            (tu[145] = tM),
            (tu[146] = e0))
          : (e0 = tu[146]),
        tu[147] !== tV || tu[148] !== tA
          ? ((e5 = () => {
              ;(tV.close(), tA())
            }),
            (tu[147] = tV),
            (tu[148] = tA),
            (tu[149] = e5))
          : (e5 = tu[149]),
        tu[150] === Symbol.for("react.memo_cache_sentinel")
          ? ((e3 = (0, n.jsx)(k.pgK, {})), (tu[150] = e3))
          : (e3 = tu[150]),
        tu[151] !== e0 || tu[152] !== e5
          ? ((e2 = (0, n.jsx)(y.$, {
              color: "ghostSecondary",
              size: "iconCircleLg",
              "aria-label": e0,
              onClick: e5,
              children: e3,
            })),
            (tu[151] = e0),
            (tu[152] = e5),
            (tu[153] = e2))
          : (e2 = tu[153]),
        tu[154] !== eZ || tu[155] !== e1 || tu[156] !== e2
          ? ((e4 = (0, n.jsxs)("div", { className: "flex items-center gap-1", children: [eZ, e1, e2] })),
            (tu[154] = eZ),
            (tu[155] = e1),
            (tu[156] = e2),
            (tu[157] = e4))
          : (e4 = tu[157]),
        tu[158] !== eK || tu[159] !== e4
          ? ((e6 = (0, n.jsxs)("div", {
              className: "flex h-(--studio-toolbar-height) shrink-0 items-center justify-between gap-2 px-2",
              children: [eK, e4],
            })),
            (tu[158] = eK),
            (tu[159] = e4),
            (tu[160] = e6))
          : (e6 = tu[160]),
        tu[161] !== tU || tu[162] !== t2 || tu[163] !== tV || tu[164] !== tR
          ? ((e9 = tR
              ? (0, n.jsx)(h.l, {
                  type: "error",
                  content: (0, n.jsx)(f.A, {
                    id: "workspaceAgents.studio.assistant.error",
                    defaultMessage: "The assistant could not finish this request",
                  }),
                  trailingAction: (0, n.jsx)(y.$, {
                    color: "secondary",
                    disabled: tU,
                    onClick: () => {
                      ;(tj(!1), (tV.takeThreadReset() ? t2.setThreadId(null) : t2.fetchUpdates()).catch(tV.fail))
                    },
                    children: (0, n.jsx)(f.A, {
                      id: "workspaceAgents.studio.assistant.retry",
                      defaultMessage: "Retry",
                    }),
                  }),
                })
              : null),
            (tu[161] = tU),
            (tu[162] = t2),
            (tu[163] = tV),
            (tu[164] = tR),
            (tu[165] = e9))
          : (e9 = tu[165]),
        tu[166] !== tF
          ? ((e7 =
              null != tF
                ? (0, n.jsx)(h.l, {
                    type: "error",
                    content:
                      "partial" === tF
                        ? (0, n.jsx)(f.A, {
                            id: "workspaceAgents.studio.assistant.undoPartial",
                            defaultMessage: "Some changes could not be restored. Review the agent before continuing",
                          })
                        : (0, n.jsx)(f.A, {
                            id: "workspaceAgents.studio.assistant.undoFailed",
                            defaultMessage:
                              "These changes could not be restored. Check for later edits and review the agent",
                          }),
                  })
                : null),
            (tu[166] = tF),
            (tu[167] = e7))
          : (e7 = tu[167]),
        tu[168] !== at
          ? ((e8 = (0, n.jsx)(d, { ref: tN, control: at, className: "min-h-0 w-full flex-1" })),
            (tu[168] = at),
            (tu[169] = e8))
          : (e8 = tu[169]),
        tu[170] !== eW || tu[171] !== e6 || tu[172] !== e9 || tu[173] !== e7 || tu[174] !== e8
          ? ((te = (0, n.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col",
              style: eW,
              children: [e6, e9, e7, e8],
            })),
            (tu[170] = eW),
            (tu[171] = e6),
            (tu[172] = e9),
            (tu[173] = e7),
            (tu[174] = e8),
            (tu[175] = te))
          : (te = tu[175]),
        te
      )
    }
  },
  qoBe(e, t, a) {
    var n = a("qmMi"),
      r = a("ASxG"),
      s = a("bzoy"),
      i = a("CTBG"),
      l = a("OOaz"),
      o = a("MrGp"),
      d = a("lIsV"),
      u = a("J3Mi"),
      c = a("OWtl"),
      p = a("Nwp9")
    let m = r.Ikc({
        accountId: r.YjP(),
        userId: r.YjP(),
        agentId: r.YjP(),
        conversationId: r.YjP().min(1),
        submittedAt: r.aig(),
      }),
      f = r.YOg(m),
      g = (0, p.m3)("workspace-agent-preview-history-v1", [], {
        coerceStoredValue: (e) => {
          let t = f.safeParse(e)
          return t.success ? t.data.slice(0, 100) : []
        },
      }),
      _ = (0, n.i1)(c.u, (e, { get: t }) =>
        t(g).filter((t) => t.accountId === e.accountId && t.userId === e.userId && t.agentId === e.agentId),
      ),
      h = (0, n.i1)(c.u, (e, { get: t }) => t(i.g4, e)?.some((e) => "user" === e.author.role) ?? !1),
      y = (0, n.i1)(c.u, (e, { get: t }) => {
        let a = t(o.F1, e),
          n = t(o.r4, e),
          r = t(o.i4, e),
          i = t(o.ym, e)
        if ("error" === i) return "failed"
        if ("streaming" !== i && r?.result === "cancelled") return "aborted"
        let c = t(o.Od, e),
          p = t(o.Jv, e),
          m = t(u.T4, e),
          f = null == c || null == p ? void 0 : p[c]?.message,
          g = null == f ? null : (0, d.X_)(f)?.item
        return (m?.kind === "questions" && m.nativeRequestMetadata?.is_blocking === !0) ||
          (g?.type === "chatgpt-tool-approval" && g.request?.type !== "preview")
          ? "blocked"
          : (0, o.QN)(a) || (0, s.zO)(n) || n === s.iO.REALTIME_BACKGROUND || 1 === n
            ? "running"
            : r?.result === "failed"
              ? "failed"
              : (r?.result === "completed" && null != r.terminalMessageId && r.terminalMessageId === f?.id) ||
                  (f?.author.role === "assistant" && !0 === f.end_turn && "finished_successfully" === f.status)
                ? "completed"
                : (0, l.YA)(e) && null == f && null == r
                  ? "not_started"
                  : "unknown"
      })
    a.d(
      t,
      {},
      {
        m9: function (e, t) {
          e.set(g, (e) =>
            [
              t,
              ...e.filter(
                (e) => e.accountId !== t.accountId || e.userId !== t.userId || e.conversationId !== t.conversationId,
              ),
            ].slice(0, 100),
          )
        },
        rs: y,
        tR: _,
        v4: h,
      },
    )
  },
  eZRG(e, t, a) {
    let n = (0, a("ESTr").a)({
      name: "clock-arrow-rotate-counterclockwise-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.043457, y: 2.042969, width: 15.913086, height: 15.913086 },
        visualBounds: { x: 2.043457, y: 2.042969, width: 15.913086, height: 15.913086 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.043457, y: 2.042969, width: 15.913086, height: 15.913086 },
        center: { x: 10, y: 9.999512 },
        insets: { top: 2.042969, right: 2.043457, bottom: 2.043945, left: 2.043457 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.999512 }, foreground: { x: 10, y: 9.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0005 2.04297C14.3947 2.04316 17.9565 5.60577 17.9565 10C17.9564 14.3941 14.3946 17.9559 10.0005 17.9561C6.21315 17.956 3.04491 15.3108 2.24072 11.7676C2.15948 11.4095 2.38374 11.0531 2.7417 10.9717C3.09978 10.8904 3.45622 11.1146 3.5376 11.4727C4.2072 14.4236 6.84766 16.626 10.0005 16.626C13.66 16.6258 16.6263 13.6595 16.6265 10C16.6265 6.34031 13.6601 3.37323 10.0005 3.37305C7.45999 3.37306 5.2526 4.80293 4.14014 6.9043H5.94971C6.31665 6.90455 6.61359 7.20237 6.61377 7.56934C6.61351 7.93622 6.3166 8.23412 5.94971 8.23438H2.7085C2.34139 8.23438 2.04372 7.93638 2.04346 7.56934V3.92383C2.04346 3.55656 2.34123 3.25879 2.7085 3.25879C3.07577 3.25879 3.37354 3.55656 3.37354 3.92383V5.5957C4.79891 3.45538 7.23414 2.04298 10.0005 2.04297Z" fill="currentColor"/> <path d="M10.0005 5.2832C10.3676 5.28343 10.6655 5.58111 10.6655 5.94824V9.99902C10.6655 10.1753 10.5957 10.345 10.4712 10.4697L8.4458 12.4951C8.18617 12.7547 7.76411 12.7546 7.50439 12.4951C7.24493 12.2355 7.24511 11.8144 7.50439 11.5547L9.33545 9.72363V5.94824C9.33545 5.581 9.63325 5.28324 10.0005 5.2832Z" fill="currentColor"/>',
    })
    a.d(t, {}, { t: n })
  },
}
//# sourceMappingURL=219033.2aa5c1c391.js.map
