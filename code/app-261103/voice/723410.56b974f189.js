export const __rspack_esm_ids = [723410]
export const __webpack_modules__ = {
  m8L3(e, t, n) {
    n.d(t, {}, { C: "default", Y: "explicitRequestOnly" })
  },
  dsow(e, t, n) {
    var r = n("PkQL"),
      o = n("IhIa"),
      a = n("wTVm"),
      s = n("WFY2")
    function i(e) {
      let t = e.untrustedAppMessage
      return {
        prompt: [
          t?.text || e.prompt,
          t?.structuredContent == null ? null : JSON.stringify(t.structuredContent, null, 2),
          ...(e.mcpAppModelContextAttachments ?? []).map((e) =>
            [
              `## ${e.sourceName}`,
              (0, r.af)(e),
              null == e.structuredContent ? null : JSON.stringify(e.structuredContent, null, 2),
            ]
              .filter((e) => null != e)
              .join("\n\n"),
          ),
        ]
          .filter((e) => null != e)
          .join("\n\n"),
        imageAttachments: [
          ...e.imageAttachments.map((e) => ({ ...e })),
          ...(t?.imageUrls ?? []).map((e) => ({ id: (0, a.A)(), src: e })),
          ...(e.mcpAppModelContextAttachments ?? []).flatMap((e) =>
            (0, r.U1)(e).map((e) => ({ id: (0, a.A)(), src: e })),
          ),
        ],
      }
    }
    function l(e, t) {
      return { ...e, ...t, untrustedAppMessage: void 0, mcpAppModelContextAttachments: void 0 }
    }
    n.d(
      t,
      {},
      {
        Hh: i,
        TW: l,
        VR: async function ({ context: e, send: t, signal: n, requestConfirmation: r }) {
          n?.throwIfAborted()
          try {
            return await t(e)
          } catch (u) {
            if (null == r || !(0, o.Yb)(u)) throw u
            n?.throwIfAborted()
            let a = i(e)
            s.v.info("Waiting for app input approval", { safe: { mcpAppId: e.untrustedAppMessage?.sourceId } })
            let c = await r(a)
            return (
              n?.throwIfAborted(),
              s.v.info("Approved app input", { safe: { mcpAppId: e.untrustedAppMessage?.sourceId } }),
              t(l(e, { ...a, prompt: c }))
            )
          }
        },
      },
    )
  },
  qbxq(e, t, n) {
    var r = n("PkQL")
    function o(e) {
      let t = e.annotations?.audience
      return !t?.includes("assistant") || t.includes("user")
    }
    n.d(
      t,
      {},
      {
        Cc: function (e) {
          if ("resource_link" === e.type) return e.title?.trim() || e.name.trim() || null
          if ("resource" === e.type) return null
          let t = e._meta?.["openai/title"]
          return ("string" == typeof t && t.trim()) || null
        },
        Fn: o,
        Rn: function (e) {
          return (0, r.U1)(null == e.content ? e : { ...e, content: e.content.filter(o) })
        },
        s2: function (e, { showImages: t = !0 } = {}) {
          return null == e.content || e.content.some((e) => (t || "image" !== e.type) && o(e))
        },
      },
    )
  },
  yLBk(e, t, n) {
    n.d(
      t,
      {},
      {
        b: function (e) {
          return { source: "codex", client_type: "desktop_app", ...e }
        },
      },
    )
  },
  YEpt(e, t, n) {
    var r = n("U6iU"),
      o = n("WFY2")
    n.d(
      t,
      {},
      {
        bj: "closed_agent_send_failed",
        hJ: function (e, t) {
          let n = t.trim()
          return 0 === n.length ? e : 0 === e.length || /\s$/.test(e) ? `${e}${n}` : `${e} ${n}`
        },
        lg: async function (e, t, n) {
          if (!t) return null
          try {
            return await (0, r.kB)({ workspaceRoot: e ? n : "" })
          } catch (e) {
            return (o.v.error("[Composer] failed to fetch ide-context", { safe: {}, sensitive: { error: e } }), null)
          }
        },
      },
    )
  },
  xKli(e, t, n) {
    var r = n("PkQL"),
      o = n("IhIa"),
      a = n("yJfM"),
      s = n("wTVm")
    function i(e, t = !1) {
      return (0, a.Ry)({ ...l(e), worktreePrompt: !1 }, t)
    }
    function l(e) {
      return { ...e, mcpAppModelContextAttachments: (0, r.g5)(e.mcpAppModelContextAttachments, !0).user }
    }
    n.d(
      t,
      {},
      {
        Fc: function (e, t = i(e)) {
          let n = (0, r.g5)(e.mcpAppModelContextAttachments, !0)
          return (0, o.yU)({
            prompt: t,
            message: e.untrustedAppMessage,
            sender: e.messageSender,
            modelContextAttachments: n.untrusted,
            reviewedMessageAttachments: n.user.filter((e) => "message" === e.kind),
            callId: `untrusted_input_${(0, s.A)()}`,
          })
        },
        NS: l,
        gx: function (e) {
          let t = e.worktreeRecovery
          if (!e.worktreePrompt && null == t) return e.additionalContext
          let n = t?.startingState ?? e.worktreeStartingState
          return {
            ...e.additionalContext,
            ...(n?.type === "working-tree"
              ? { codex_apps_worktree: { kind: "application", value: (0, a.FE)({ worktreeStartingState: n }) } }
              : {}),
            ...(null == t ? {} : { codex_apps_worktree_creation: { kind: "application", value: t.instructions } }),
          }
        },
        kv: i,
      },
    )
  },
  seW7(e, t, n) {
    var r = n("SRbQ"),
      o = n("ZEOU"),
      a = n.n(o),
      s = n("zMIV"),
      i = n.n(s),
      l = n("DBCl"),
      c = n("zhJ8"),
      u = n("vpsD"),
      d = n("kpNK"),
      m = n("ZIaK")
    n("pvRJ")
    var p = n("RAsy"),
      h = n("TAOo"),
      f = n("ZjPZ"),
      g = n("YLui"),
      v = n("RF9q"),
      w = n("wTVm"),
      y = n("Dgwo"),
      x = n("dSuPU"),
      b = n("tl5a"),
      A = n("MYVk"),
      I = n("vdpW"),
      S = n("gp55"),
      M = n("shRG"),
      C = n("m8L3"),
      k = n("dbK8"),
      _ = n("wCOm"),
      P = n("AqHb"),
      E = n("SPnB"),
      q = n("dF4Z"),
      R = n("r0y7")
    n("KSXx")
    var T = n("MtDh"),
      D = n("JQtI"),
      j = n("qMca"),
      F = n("TYK1"),
      U = n("jiwy"),
      N = n("SjAp"),
      V = n("GaA7"),
      O = n("kfGJ"),
      L = n("D6SK"),
      B = n("PZWn"),
      W = n("TurB"),
      z = n("syw5"),
      K = n("yLBk"),
      H = n("YEpt"),
      $ = n("xKli"),
      Y = n("e1yv"),
      Q = n("Ryoj"),
      X = n("Ld2s"),
      G = n("VDZee")
    function J({
      context: e,
      cwd: t,
      text: n = e.prompt,
      messageId: r = (0, w.A)(),
      messageThreadId: o = e.messageThreadId,
      createdAt: a = Date.now(),
    }) {
      return {
        id: r,
        text: n,
        context: { ...i()(e, "openingPromptForHistory"), messageThreadId: o },
        cwd: t,
        createdAt: a,
        responsesapiClientMetadata: { source: "codex", message_submission_source: e.messageSubmissionSource },
      }
    }
    async function Z(e, t) {
      let n = { ...e, clientUserMessageId: e.clientUserMessageId ?? e.restoreMessage?.id ?? (0, w.A)() },
        o = () => {
          if ((n.signal?.throwIfAborted(), n.isSubmissionCurrent?.() === !1)) throw new q.y()
        }
      ;(o(), (0, S.Q3)(n.scope, n.managerHostId, n.targetConversationId))
      let s = (0, y.V)(n.scope, n.managerHostId),
        i = await es(
          n.scope,
          n.managerHostId,
          n.targetConversationId,
          n.restoreMessage?.writingBlockAdditionalContext === void 0,
        ),
        l = i?.ephemeral === !0 || i?.sideConversation === !0 || n.restoreMessage?.requiresExistingOwner === !0,
        u = n.restoreMessage?.writingBlockAdditionalContext
      void 0 === u && i?.resumeState === "resumed" && (u = (0, z.I)(n.targetConversationId, i.writingBlocks) ?? null)
      let m = a()({
          ...(n.restoreMessage ??
            J({
              context: n.context,
              cwd: n.cwd,
              messageId: n.clientUserMessageId,
              messageThreadId: n.messageThreadId,
            })),
          threadAccess: i?.threadAccess ?? n.restoreMessage?.threadAccess,
          submissionOptions: {
            useUserMessageAdmission:
              n.restoreMessage?.submissionOptions?.useUserMessageAdmission ??
              ((0, d.n)(i?.threadStartKind, i?.threadSource) && (0, x.S)(n.scope, n.managerHostId)),
            executionHostId: n.hostId,
            agentMode: n.agentMode,
            permissionProfileId: n.permissionProfileId,
            serviceTier: n.serviceTier,
            shouldSendPermissionOverrides: n.shouldSendPermissionOverrides,
            usePermissionSelection: n.usePermissionSelection,
            permissionSelection: n.permissionSelection,
            collaborationMode: n.context.collaborationMode ?? n.activeCollaborationMode,
            clientUserMessageId: n.clientUserMessageId,
          },
          writingBlockAdditionalContext: u,
        }),
        p = {
          ...m,
          responsesapiClientMetadata: (0, K.b)(m.responsesapiClientMetadata),
          context: {
            ...(0, c.x)(m.context),
            turnTrigger: n.turnTrigger,
            workspaceRoots: n.scope.get(b.m8, n.targetConversationId)?.slice() ?? m.context.workspaceRoots ?? [n.cwd],
          },
          multiUserMessageSender:
            void 0 === m.multiUserMessageSender
              ? await (0, R.tu)(n.scope, n.hostId, i?.threadAccess === "shared")
              : m.multiUserMessageSender,
        }
      return en({ ...n, conversation: i }, async () => {
        let e = { stack: [], error: void 0, hasError: !1 }
        try {
          let a = await (0, F.F)(n.scope, n.managerHostId, n.targetConversationId, i),
            c = () => {
              ;(a || ea(n.scope, n.targetConversationId, i)) && (0, U.qo)(n.scope)
            },
            u = () => {
              ;(o(), c(), n.submissionLifecycle?.validate())
            },
            d = (0, r.mS)(e, await s.getTurnCoordinator(), !1),
            m = { hostId: n.hostId, threadId: n.targetConversationId },
            h = (0, r.mS)(
              e,
              null == n.onMessageAdded || ea(n.scope, n.targetConversationId, i)
                ? null
                : (0, Q.c)(n.scope, m, n.clientUserMessageId, n.onMessageAdded),
              !1,
            ),
            f =
              null == h
                ? void 0
                : n.scope.watch(({ get: e }) => {
                    let t = e(I.fl, m)
                    ;(e(A.Ax, m), ("error" === t || "unavailable" === t) && h[Symbol.dispose]())
                  })
          try {
            let e = await (0, X.t)(n.scope, p.context, async (e) => {
              let r
              u()
              let o = e
              return (
                l && null != n.prepareContext && ((r = Promise.resolve(n.prepareContext(o))), (o = await r), u()),
                d.sendMessage(
                  {
                    conversationId: n.targetConversationId,
                    message: {
                      ...p,
                      requiresExistingOwner: !!l || void 0,
                      text: o === p.context ? p.text : o.prompt,
                      context: {
                        ...o,
                        mcpAppModelContextAttachments: o.mcpAppModelContextAttachments?.map((e) =>
                          "message" === e.kind ? e : { ...e, untrusted: !0 },
                        ),
                      },
                    },
                    ...t,
                    acceptLocally: t.acceptLocally && !l,
                    options: p.submissionOptions,
                  },
                  async (e, t) => {
                    ;(c(), (r = r ?? Promise.resolve(n.prepareContext?.(e.message.context) ?? e.message.context)))
                    let o = { ...e.message, context: await r }
                    c()
                    let s = (0, R.jD)({ ...e, message: o }, n.managerHostId),
                      i = await et(
                        {
                          ...n,
                          context: s.message.context,
                          activeCollaborationMode: e.message.submissionOptions?.collaborationMode,
                          permissionSelection: e.message.submissionOptions?.permissionSelection,
                          restoreMessage: s.message,
                        },
                        t,
                        a,
                      )
                    return (c(), (i.steer.restoreMessage = o), i)
                  },
                  null == n.submissionLifecycle
                    ? (h?.onMessageAdded ?? n.onMessageAdded)
                    : (e) => {
                        ;(n.submissionLifecycle?.onMessageAdded(e), (h?.onMessageAdded ?? n.onMessageAdded)?.(e))
                      },
                  async () => u(),
                  async () => {
                    ;(c(), n.submissionLifecycle?.validate())
                  },
                )
              )
            })
            return (
              "sent" === e.status && "steer" === e.kind && N.j.abort(n.clientUserMessageId, "active_turn_steer"),
              await h?.displayed,
              e
            )
          } finally {
            f?.()
          }
        } catch (t) {
          ;((e.error = t), (e.hasError = !0))
        } finally {
          ;(0, r.hk)(e)
        }
      })
    }
    function ee(e) {
      return Z(e, { queueModeOverride: "send-now" })
    }
    async function et(e, t, r) {
      let o = e
      o.signal?.throwIfAborted()
      let a = o.context.worktreeRecovery
      if (a?.creationRequest != null) {
        if (
          a.hostId !== o.hostId ||
          a.threadId !== o.targetConversationId ||
          a.creationRequest.hostId !== o.hostId ||
          a.creationRequest.threadId !== o.targetConversationId
        )
          throw Error("Worktree recovery belongs to a different task or host.")
        let e = V.appServices.managedWorktrees
        if (null == e) throw Error("This host does not support managed worktree recovery.")
        let t = (await (0, G.S)(e, { ...a.creationRequest, recoverOnly: !0 })).codex_apps_worktree_creation
        if (null == t) throw Error("Missing worktree recovery context.")
        let n = { ...o.context, worktreeRecovery: { ...a, instructions: t.value, creationRequest: void 0 } }
        ;((o = {
          ...o,
          context: n,
          restoreMessage: null == o.restoreMessage ? void 0 : { ...o.restoreMessage, context: n },
        }),
          o.signal?.throwIfAborted())
      }
      if (
        (0, g.sI)(o.context, o.hostId, o.scope.get(E.chatGptAuthenticatedAccountId$), "durable" === (0, P._)(o.hostId))
      )
        throw Error(g.fi)
      let s = await es(
          o.scope,
          o.managerHostId,
          o.targetConversationId,
          o.restoreMessage?.writingBlockAdditionalContext === void 0,
        ),
        i = (s?.mode === "durable" && eo(s)) || (0, k.C)(o.hostId) || (0, k.C)(o.managerHostId),
        c = {
          ...o,
          conversation: s,
          isCloudFollowUp: i,
          inheritNativeWorkspacePermissions:
            !i &&
            null == o.context.workPermissions &&
            s?.mode !== "durable" &&
            !ea(o.scope, o.targetConversationId, s) &&
            "projectless" !== o.scope.get(b.EL, o.targetConversationId),
        },
        d = await ("start" === t || o.restoreMessage?.submissionOptions?.useUserMessageAdmission === !0
          ? er(c)
          : (async function ({
              scope: e,
              turnTrigger: t,
              clientUserMessageId: n,
              managerHostId: r,
              hostId: o,
              targetConversationId: a,
              agentMode: s,
              permissionProfileId: i,
              serviceTier: c,
              shouldSendPermissionOverrides: d,
              usePermissionSelection: m = !1,
              permissionSelection: g,
              activeCollaborationMode: w,
              restoreMessage: x,
              conversation: A,
              inheritNativeWorkspacePermissions: I,
            }) {
              let S = o !== O.fI,
                { cwd: C, context: k } = x,
                _ = k.workspaceRoots ?? e.get(b.m8, a) ?? [C],
                E = (0, y.V)(e, r)
              if (A?.isClosedSubagent) throw Error(H.bj)
              let q = k.collaborationMode ?? w,
                R = A
              if (A?.resumeState === "resuming" || null == A || A.needsResume) {
                let t = await E.resumeConversation(
                  {
                    conversationId: a,
                    threadAccess: A?.threadAccess ?? x.threadAccess,
                    model: null,
                    serviceTier: c,
                    reasoningEffort: null,
                    workspaceRoots: _,
                    useAppServerPermissionDefault: m,
                    inheritNativeWorkspacePermissions: I,
                    collaborationMode: q,
                  },
                  { readResumeInputs: (0, M.jQ)(e, r) },
                )
                if ("not-ready" === t.status) throw new u.uZ(t)
                R = await es(e, r, a, void 0 === x.writingBlockAdditionalContext)
              }
              if ((0, l.ZJQ)(r) && R?.mode === "durable" && eo(R))
                return er({
                  scope: e,
                  turnTrigger: t,
                  clientUserMessageId: n,
                  managerHostId: r,
                  hostId: o,
                  context: k,
                  targetConversationId: a,
                  cwd: C,
                  agentMode: s,
                  permissionProfileId: i,
                  serviceTier: c,
                  shouldSendPermissionOverrides: d,
                  usePermissionSelection: m,
                  permissionSelection: g,
                  activeCollaborationMode: w,
                  restoreMessage: x,
                  conversation: R,
                  isCloudFollowUp: !0,
                  inheritNativeWorkspacePermissions: !1,
                })
              let T = (0, h.K)(k.imageAttachments),
                D = (0, $.Fc)(k, (0, $.kv)(k, "durable" === (0, P._)(r))),
                j = [D.input, ...(0, Y.v)(k, S, { shouldRestrictRemoteHostImageSize: !1 })],
                F = (0, p.Y)([...(0, f.E5)(k.fileAttachments, k.pastedTextAttachments), ...k.addedFiles, ...T])
              return {
                conversationId: a,
                executionHostId: o,
                requiresIdle: D.responseItems.length > 0,
                resume: {
                  conversationId: a,
                  threadAccess: R?.threadAccess ?? x.threadAccess,
                  model: null,
                  serviceTier: c,
                  reasoningEffort: null,
                  workspaceRoots: _,
                  useAppServerPermissionDefault: m,
                  inheritNativeWorkspacePermissions: I,
                  collaborationMode: q,
                },
                steer: {
                  input: j,
                  restoreMessage: { ...x, context: { ...k, turnTrigger: t } },
                  serviceTier: c,
                  attachments: F,
                  clientUserMessageId: n,
                  additionalContext: (0, v.AK)(
                    (0, $.gx)(k),
                    void 0 !== x.writingBlockAdditionalContext
                      ? (x.writingBlockAdditionalContext ?? void 0)
                      : (0, z.I)(a, R?.writingBlocks),
                  ),
                },
              }
            })({ ...c, restoreMessage: o.restoreMessage ?? J({ context: o.context, cwd: o.cwd }) }))
      d.allowStartAfterNoActiveTurn = r ?? (await (0, F.F)(o.scope, o.managerHostId, o.targetConversationId, s))
      let { addSharedArtifactPageContext: m } = await n.e(309492).then(n.bind(n, "NPal"))
      return (await m(o.scope, d), o.signal?.throwIfAborted(), d)
    }
    async function en(e, t) {
      let n =
        void 0 === e.conversation ? await es(e.scope, e.managerHostId, e.targetConversationId, !1) : e.conversation
      if (n?.mode === "durable" && eo(n)) {
        ;(0, U.qo)(e.scope)
        try {
          return await (0, T._P)(e.targetConversationId, () => t(!1))
        } catch (t) {
          throw ((0, U.Mo)(e.scope), t)
        }
      }
      return t(!1)
    }
    async function er({
      scope: e,
      turnTrigger: t,
      managerHostId: n,
      hostId: r,
      context: o,
      targetConversationId: a,
      cwd: s,
      agentMode: i,
      permissionProfileId: c,
      serviceTier: u,
      shouldSendPermissionOverrides: d,
      usePermissionSelection: g = !1,
      permissionSelection: w,
      activeCollaborationMode: y,
      restoreMessage: x,
      clientUserMessageId: A,
      conversation: I,
      isCloudFollowUp: S,
      inheritNativeWorkspacePermissions: M,
      isQueuedReplay: k = !1,
    }) {
      let E = r !== O.fI
      if (I?.isClosedSubagent) throw Error(H.bj)
      let q = o.collaborationMode ?? y,
        R = eo(I),
        T = S ? s : (I?.cwd ?? s),
        D = o.workspaceRoots ?? e.get(b.m8, a) ?? [T]
      ;(r === O.fI && O.fI,
        null != I && R && (q = { ...I.latestCollaborationMode, mode: q?.mode ?? I.latestCollaborationMode.mode }),
        S || (await (0, W.Bx)(e, { conversationId: a, cwd: T, hostId: r })))
      let j = (0, h.K)(o.imageAttachments),
        F = (0, $.Fc)(o, (0, $.kv)(o, "durable" === (0, P._)(n))),
        U = [F.input, ...(0, Y.v)(o, E, { shouldRestrictRemoteHostImageSize: !1 })],
        V = (0, p.Y)([...(0, f.E5)(o.fileAttachments, o.pastedTextAttachments), ...o.addedFiles, ...j]),
        K =
          o.fileAttachments.length +
          (o.uploadedFileAttachments?.length ?? 0) +
          (o.pastedTextAttachments?.length ?? 0) +
          o.addedFiles.filter(l.xwm).length,
        Q = ea(e, a, I),
        X = o.workPermissions,
        G = null != X,
        Z = !G && g && !Q,
        ee = !Z && (d || (g && Q)),
        et = Q ? "guardian-approvals" : (X?.mode ?? i),
        en = G || ((ee || w?.kind === "custom") && (null == w || Q)),
        es =
          (G && null == X.resolvedPermissions) ||
          (!G && en && ("guardian-approvals" === et || "custom" === et)) ||
          (!Z && w?.kind === "custom")
            ? (0, _.Y$)(
                (await (0, _.ig)(e, n, { includeLayers: !1, cwd: T }, { priority: "critical", timeoutMs: 3e4 })).config,
              )
            : null,
        ei = Q && I?.mode === "durable",
        el = en
          ? (X?.resolvedPermissions ?? (0, l.$5i)(et, D, null != X && null != es ? (0, B.mu)(X.defaults, es) : es))
          : null
      null == el ||
        null == c ||
        G ||
        Q ||
        ((el.activePermissionProfile = { id: c, extends: null }), (el.runtimeWorkspaceRoots = D))
      let ec =
          G || Z || null == w || Q
            ? null
            : (0, l.URU)({ config: es, permissionSelection: w, runtimeWorkspaceRoots: D }),
        eu =
          M &&
          (function (e, t, n, r, o) {
            if (null == r || null == n || "durable" === n.mode || n.primaryEnvironment?.environmentId !== "local")
              return !1
            if (o || (null != n.cwd && !(0, m.Pw)(n.primaryEnvironment.cwd, n.cwd))) return !0
            if (":workspace" !== r) return !1
            let a = e.get(b.h2, t)?.activePermissionProfile,
              s = void 0 === a ? e.get(b.we, t)?.activePermissionProfile : a
            return s?.id === ":workspace"
          })(e, a, I, ec?.permissions ?? el?.activePermissionProfile?.id, k || x?.submissionIntent === "queue"),
        ed = {
          request: {
            threadId: a,
            turnTrigger: t,
            responsesapiClientMetadata: { source: "codex", ...x?.responsesapiClientMetadata },
            clientUserMessageId: A ?? x?.id,
            input: U,
            cwd: S ? s : void 0,
            model: null,
            effort: null,
            multiAgentMode: C.Y,
            serviceTier: u,
            ...(null == el
              ? {}
              : {
                  approvalPolicy: el.approvalPolicy,
                  approvalsReviewer: ei ? "auto_review" : el.approvalsReviewer,
                  ...(0, l.ZGB)(el),
                  ...(null == el.activePermissionProfile || eu ? {} : { runtimeWorkspaceRoots: (0, l.Xhp)(el) }),
                }),
            ...(null == ec ? {} : { ...ec, ...(eu ? {} : { runtimeWorkspaceRoots: D }) }),
            collaborationMode: q,
          },
          context: {
            onRequestDispatched: null == A ? void 0 : (e) => N.j.markRequestDispatched(A, e),
            trace: null == A ? void 0 : N.j.getTrace(A),
            useUserMessageAdmission: x?.submissionOptions?.useUserMessageAdmission,
            restoreMessage: x,
            messageThreadId: x?.context.messageThreadId ?? o.messageThreadId,
            writingBlockContextPrepared: x?.writingBlockAdditionalContext !== void 0,
            localTurnMetadata: { fileAttachmentCount: K },
            commentAttachments: o.commentAttachments,
            useAppServerPermissionDefault: !G && null == ec && !ee,
            usePermissionSelection: Z,
            attachments: V,
            mcpAppModelContextAttachments: o.mcpAppModelContextAttachments,
            responseItems: F.responseItems,
            passiveContext: (0, L.QG)(e, n, a, o.mcpAppModelContextAttachments),
            ...{},
          },
        }
      ed.request.additionalContext = (0, v.AK)(
        (0, $.gx)(o),
        x?.writingBlockAdditionalContext !== void 0
          ? (x.writingBlockAdditionalContext ?? void 0)
          : (0, z.I)(a, I?.writingBlocks),
      )
      let em = x?.submissionOptions?.useUserMessageAdmission === !0 || ((0, l.ZJQ)(n) && I?.mode === "durable" && R)
      return {
        conversationId: a,
        executionHostId: r,
        requiresIdle: F.responseItems.length > 0,
        resume: {
          conversationId: a,
          threadAccess: I?.threadAccess ?? x?.threadAccess,
          model: null,
          serviceTier: u,
          reasoningEffort: null,
          workspaceRoots: D,
          useAppServerPermissionDefault: g,
          inheritNativeWorkspacePermissions: M,
          collaborationMode: q,
        },
        start: ed,
        steer: {
          ...(em ? { userMessageAdmissionStart: ed } : {}),
          input: U,
          restoreMessage: x ?? J({ context: o, cwd: s }),
          serviceTier: u,
          attachments: V,
          clientUserMessageId: A,
          additionalContext: ed.request.additionalContext,
        },
      }
    }
    function eo(e) {
      return (0, D.N)(e?.threadStartKind, e?.threadSource)
    }
    function ea(e, t, n) {
      return eo(n) || e.get(j.D0, t)
    }
    async function es(e, t, n, o) {
      let a = { stack: [], error: void 0, hasError: !1 }
      try {
        let s = (0, r.mS)(a, await (0, y.V)(e, t).getFollowUpContext(n, o), !1)
        return null == s ? null : { ...s }
      } catch (e) {
        ;((a.error = e), (a.hasError = !0))
      } finally {
        ;(0, r.hk)(a)
      }
    }
    n.d(
      t,
      {},
      {
        E2: en,
        FB: et,
        Kv: ea,
        St: function (e) {
          return ee({ ...e, context: e.restoreMessage.context, cwd: e.restoreMessage.cwd })
        },
        bD: ee,
        h: Z,
        jo: J,
      },
    )
  },
  e1yv(e, t, n) {
    var r = n("DBCl"),
      o = n("S8um"),
      a = n("e0Zo")
    n("XW6f")
    var s = n("LnAF"),
      i = n("ZjPZ"),
      l = n("Dgwo"),
      c = n("CfsC"),
      u = n("wCOm"),
      d = n("svjy"),
      m = n("PWXi"),
      p = n("r0y7"),
      h = n("kfGJ"),
      f = n("PZWn"),
      g = n("yLBk"),
      v = n("xKli"),
      w = n("gfHD"),
      y = n("qcLg"),
      x = n("Wumz")
    function b(e, t, { shouldRestrictRemoteHostImageSize: n = !1 } = {}) {
      return (0, s.v)((0, v.NS)(e), t)
    }
    n.d(
      t,
      {},
      {
        l: async function ({
          scope: e,
          context: t,
          prompt: n,
          workspaceRoots: s,
          cwd: A,
          hostId: I,
          configHostId: S = I,
          threadCreationHostId: M,
          agentMode: C,
          permissionProfileId: k,
          permissionSelection: _,
          shouldSendPermissionOverrides: P,
          serviceTier: E,
          collaborationMode: q,
          memoryPreferences: R,
          workspaceKind: T = "project",
          projectlessOutputDirectory: D,
          projectAssignment: j,
        }) {
          let F,
            U = (0, r.JFB)(e.get(c.B, I), "threadPluginSelection")
          if (!U && (t.disabledPluginIds?.length ?? 0) > 0)
            throw Error(
              e
                .get(d.g)
                .formatMessage({
                  id: "composer.pluginSelectionRequiresSupportedRuntime",
                  defaultMessage:
                    "This Codex runtime does not support chat plugin selection. Update the runtime before sending this chat",
                  description:
                    "Error when a chat excludes plugins but the selected execution host cannot enforce those exclusions",
                }),
            )
          let N =
              null != t.firstTurnReasoningEffort && null != q
                ? { ...q, settings: { ...q.settings, reasoning_effort: t.firstTurnReasoningEffort } }
                : q,
            { daybreakEnabled: V, apiKeyIdentityToRecheck: O } = (0, w.V3)(e, I, { threadCreationHostId: M }),
            [{ config: L }, B] = await Promise.all([
              (0, l.V)(e, S).sendRequest("config/read", { includeLayers: !1, cwd: A }, { priority: "critical" }),
              (0, p.tu)(e, M, !1),
            ]),
            W = (0, u.Y$)(L),
            z = !t.cloudThreadPrototype && (W.model_provider ?? "openai") === "openai"
          if (z && null != O && (!0 !== V || !e.get(y.dK, I) || !(0, x.j)(e.get(x.B), O))) throw (0, w.FH)(e, !0)
          ;(null != t.firstTurnReasoningEffort && (F = { ...F, model_reasoning_effort: t.firstTurnReasoningEffort }),
            null != t.elicitationPluginIds &&
              t.elicitationPluginIds.length > 0 &&
              (F = {
                ...F,
                [o.F2]: !0,
                "features.auth_elicitation": !0,
                "features.tool_suggest": !0,
                "tool_suggest.discoverables": t.elicitationPluginIds.map((e) => ({ type: "plugin", id: e })),
              }))
          let K = b(t, I !== h.fI || !0 === t.cloudThreadPrototype, { shouldRestrictRemoteHostImageSize: !1 }),
            H = (0, v.Fc)({ ...t, messageSender: B ?? void 0 }, null != B ? (0, a.Y5)(n, B) : n),
            $ = [H.input, ...(t.cloudThreadPrototype ? K.filter((e) => "localImage" !== e.type) : K)],
            Y =
              null != _
                ? { permissionSelection: _ }
                : { agentMode: C, permissionProfileId: k, shouldSendPermissionOverrides: P }
          return (
            null != t.workPermissions &&
              ((W = (0, f.mu)(t.workPermissions.defaults, W)),
              (Y = { agentMode: t.workPermissions.mode, permissionProfileId: null, shouldSendPermissionOverrides: !0 }),
              null != W.web_search && (F = { ...F, web_search: W.web_search })),
            {
              input: $,
              responseItems: H.responseItems,
              turnTrigger: t.turnTrigger ?? "composer",
              responsesapiClientMetadata: (0, g.b)({ message_submission_source: t.messageSubmissionSource }),
              disabledPluginIds: U ? t.disabledPluginIds : void 0,
              commentAttachments: t.commentAttachments,
              mcpAppModelContextAttachments: t.mcpAppModelContextAttachments,
              workspaceRoots: s,
              cwd: A,
              fileAttachments: (0, i.E5)(t.fileAttachments, t.pastedTextAttachments),
              uploadedFileAttachmentCount:
                (t.uploadedFileAttachments?.length ?? 0) +
                (t.pastedTextAttachments?.filter(({ upload: e }) => null != e).length ?? 0),
              addedFiles: t.addedFiles,
              ...Y,
              model: null,
              serviceTier: E,
              daybreakEnabled: z ? V : void 0,
              reasoningEffort: t.firstTurnReasoningEffort ?? N?.settings.reasoning_effort ?? W.model_reasoning_effort,
              collaborationMode: N,
              config: W,
              configOverrides: null == t.firstTurnConfigOverrides ? F : { ...t.firstTurnConfigOverrides, ...F },
              memoryPreferences: R,
              requiresThreadReferences: (t.threadReferences?.length ?? 0) > 0,
              additionalContext: (0, v.gx)(t),
              additionalDeveloperInstructions:
                [t.additionalDeveloperInstructions, t.libraryFileCreation ? m.z : void 0]
                  .filter(Boolean)
                  .join("\n\n") || void 0,
              workspaceKind: T,
              projectAssignment: j,
              ...("projectless" === T ? { projectlessOutputDirectory: D } : {}),
            }
          )
        },
        v: b,
      },
    )
  },
  ipIJ(e, t, n) {
    var r = n("SZCv"),
      o = n.n(r),
      a = n("PkQL"),
      s = n("Dx08"),
      i = n("Sd8U"),
      l = n("TSib")
    function c(e, t, n, r) {
      if (null != t) {
        let o = e.get(l.ib).find(({ id: e }) => e === t)
        if ((null != n || null != r) && o?.content != null) {
          let i = o.content.filter((e, t) => (null != r ? t !== r : (0, a.nH)(e) !== n))
          if (i.length === o.content.length) return
          if (i.length > 0) {
            let n = {
              ...o,
              content: i,
              modelContextUpdateId: "context" === o.kind ? crypto.randomUUID() : o.modelContextUpdateId,
            }
            ;((0, s.M)(e, t, n, o), u(e, n))
            return
          }
        }
        ;(e.set(l.P5, t, null), null != o && (0, s.M)(e, t, null, o))
      }
      ;(0, l.Kk)(e, (e) => {
        e.mcpAppModelContextAttachments =
          null == t ? [] : e.mcpAppModelContextAttachments.filter(({ id: e }) => e !== t)
      })
    }
    function u(e, t) {
      let n =
        null != t.structuredContent ||
        (null != t.content ? t.content.length > 0 : !!t.text?.trim() || t.imageAttachments.length > 0)
      ;("context" === t.kind && e.set(l.P5, t.id, n ? t.modelContextUpdateId : null),
        (0, l.Kk)(e, (e) => {
          let { id: r } = t,
            o = e.mcpAppModelContextAttachments.findIndex((e) => e.id === r)
          if (!n) {
            ;-1 !== o && e.mcpAppModelContextAttachments.splice(o, 1)
            return
          }
          let a = null != t.content ? t : { ...t, text: t.text?.trim() || null }
          ;-1 === o ? e.mcpAppModelContextAttachments.push(a) : (e.mcpAppModelContextAttachments[o] = a)
        }))
    }
    n.d(
      t,
      {},
      {
        $M: function (e, t) {
          e.get(l.ib).some(({ id: e, kind: n }) => e === t && "context" === n) && c(e, t)
          let n = (0, i.Xr)(e)
          null != n &&
            e.set(l.X5, n, (e) =>
              null == e
                ? e
                : {
                    ...e,
                    viewState: {
                      ...e.viewState,
                      mcpAppModelContextAttachments: e.viewState.mcpAppModelContextAttachments.filter(
                        ({ id: e, kind: n }) => e !== t || "context" !== n,
                      ),
                    },
                  },
            )
        },
        $V: function (e, t, n) {
          ;(0, l.Kk)(e, (e) => {
            let r = e.mcpAppModelContextAttachments.find((e) => e.id === t)
            null == r || o()(r.composerIcon, n) || (r.composerIcon = n)
          })
        },
        EQ: function (e, t) {
          if (0 === t.length) return
          let n = new Map(t.map((e) => [e.id, e]))
          ;(0, l.Kk)(e, (e) => {
            e.mcpAppModelContextAttachments = e.mcpAppModelContextAttachments.filter((e) => !(0, a.F_)(e, n.get(e.id)))
          })
          let r = (0, i.Xr)(e)
          null != r &&
            e.set(l.X5, r, (e) =>
              null == e
                ? e
                : {
                    ...e,
                    viewState: {
                      ...e.viewState,
                      mcpAppModelContextAttachments: e.viewState.mcpAppModelContextAttachments.filter(
                        (e) => !(0, a.F_)(e, n.get(e.id)),
                      ),
                    },
                  },
            )
        },
        GE: u,
        HI: function (e, t) {
          let n = e.untrustedAppMessage,
            r = [...(e.mcpAppModelContextAttachments ?? [])],
            o = [...e.imageAttachments, ...(n?.imageUrls ?? []).map((e) => ({ src: e }))]
          return (
            (n?.structuredContent != null || o.length > 0) &&
              r.push({
                id: crypto.randomUUID(),
                kind: "message",
                widgetSource: n?.widgetSource,
                sourceName: t.formatMessage({
                  id: "codex.composer.appMessage",
                  defaultMessage: "App message",
                  description: "Attachment containing images or data sent by an app",
                }),
                untrusted: !0,
                text: null,
                structuredContent: n?.structuredContent,
                imageAttachments: o,
              }),
            r
          )
        },
        Qq: function (e, t) {
          let n = new Set(e.get(l.ib).map(({ id: e }) => e)),
            r = t.filter((t) => {
              if (n.has(t.id)) return !1
              let r = e.get(l.P5, t.id)
              return "context" !== t.kind || void 0 === r || r === t.modelContextUpdateId
            })
          ;(0, l.Kk)(e, (e) => {
            e.mcpAppModelContextAttachments = [...r, ...e.mcpAppModelContextAttachments]
          })
        },
        m$: c,
        t3: function (e, t) {
          let n = e.context.untrustedAppMessage
          return [
            ...(e.context.mcpAppModelContextAttachments ?? []).map((e) => {
              if ("message" === e.kind) return e
              let { modelContextUpdateId: t, ...n } = e
              return { ...n, id: crypto.randomUUID(), kind: "message" }
            }),
            ...(null != n && ((n.imageUrls?.length ?? 0) > 0 || null != n.structuredContent)
              ? [
                  {
                    id: `app-message:${e.id}`,
                    kind: "message",
                    untrusted: !0,
                    sourceName: t.formatMessage({
                      id: "codex.composer.appMessageContext",
                      defaultMessage: "App message context",
                      description:
                        "Attachment holding app-supplied images and data when the user edits an app-generated message",
                    }),
                    text: null,
                    imageAttachments: (n.imageUrls ?? []).map((e) => ({ src: e })),
                    structuredContent: n.structuredContent,
                  },
                ]
              : []),
          ]
        },
      },
    )
  },
  lICN(e, t, n) {
    var r = n("zTeN"),
      o = n("PkQL"),
      a = n("IhIa"),
      s = n("V3rO"),
      i = n("qbxq"),
      l = n("TSib"),
      c = n("ipIJ")
    class u {
      source = null
      claims = new Set()
      async submit(e) {
        let t = this.claim()
        try {
          return await e(t.attachments)
        } finally {
          this.claims.delete(t)
        }
      }
      async inject(e) {
        let t = this.claim({ hiddenOnly: !0 })
        try {
          if (0 === t.attachments.length) return
          let { responseItems: n } = (0, a.yU)({
            prompt: "",
            modelContextAttachments: t.attachments,
            callId: `untrusted_input_${crypto.randomUUID()}`,
          })
          ;(await e(n),
            (0, c.EQ)(t.source, t.attachments),
            null != this.source && this.source !== t.source && (0, c.EQ)(this.source, t.attachments))
        } finally {
          this.claims.delete(t)
        }
      }
      claim({ hiddenOnly: e = !1 } = {}) {
        let t = this.source
        if (null == t) throw Error("The context composer is unavailable")
        let n = t
            .get(l.ib)
            .filter(
              (t) =>
                "context" === t.kind &&
                (!e || !(0, i.s2)(t)) &&
                !Array.from(this.claims).some((e) => e.attachments.some((e) => (0, o.F_)(t, e))),
            ),
          r = { source: t, attachments: n }
        return (this.claims.add(r), r)
      }
    }
    let d = (0, r.T1)(s.l7, (e) => new u())
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t = e.get(
            d,
            "local" === e.value.kind && "side" === e.value.placement ? `side:${e.value.clientThreadId}` : "main",
          )
          return ((t.source = e), t)
        },
      },
    )
  },
  Ld2s(e, t, n) {
    var r = n("IhIa"),
      o = n("X6Vn"),
      a = n("dsow")
    class s extends Error {}
    n.d(
      t,
      {},
      {
        e: s,
        t: async function (e, t, i) {
          let l
          try {
            return await i(t)
          } catch (e) {
            if (!(0, r.Yb)(e) || null != t.untrustedAppMessage || (t.mcpAppModelContextAttachments?.length ?? 0) === 0)
              throw e
          }
          let { McpAppFollowUpConfirmationDialog: c } = await Promise.all([
            n.e(74692),
            n.e(1975),
            n.e(241748),
            n.e(869588),
          ]).then(n.bind(n, "RFeS"))
          if ((0, o.oY)(e, c)) throw new s()
          let u = (0, a.Hh)(t),
            d = await new Promise((t, n) => {
              ;((0, o.qf)(e, c, {
                confirmation: {
                  prompt: u.prompt,
                  imageUrls: u.imageAttachments.map((e) => e.src),
                  onConfirm: (n) => {
                    ;(t(n), (0, o.Oo)(e, c))
                  },
                  onCancel: () => {
                    ;((0, o.Oo)(e, c), n(new s()))
                  },
                },
              }),
                (l = e.watch((e) => {
                  ;(0, o.oY)(e, c) || n(new s())
                })))
            }).finally(() => l?.())
          return i((0, a.TW)(t, { ...u, prompt: d }))
        },
      },
    )
  },
  VDZee(e, t, n) {
    n.d(
      t,
      {},
      {
        S: async function (e, t) {
          let n
          if (null == e) throw Error("This host does not support managed worktree creation.")
          let r = await e.createForThread(t)
          switch (r.type) {
            case "pending":
              n =
                "The worktree is being created asynchronously. Use get_worktree_creation_status with this operationId to check progress. Begin planning and read-only investigation while creation completes; do not edit files until the new checkout is ready. Once ready, use worktreeWorkspaceRoot for task commands and edits. If status is missing or expired, inspect this task's attachments before recovery. Do not repeat create_worktree."
              break
            case "created":
              n =
                "Use worktreeWorkspaceRoot for all task shell commands and edits. Do not create another worktree. If registrationError is present, recover attachment with attach_worktree using these paths; do not rerun creation or setup during attachment recovery."
              break
            case "error":
              n =
                "Creation failed. Report this blocker; do not edit the source checkout or automatically retry creation. Check task attachments before any user-requested recovery."
          }
          return (
            "error" !== r.type &&
              (n +=
                " If setupError is present in the final result, report the setup failure and keep the checkout; do not automatically retry setup or choose another environment."),
            {
              codex_apps_worktree_creation: {
                kind: "application",
                value: `# Worktree creation status:
${JSON.stringify(r).replaceAll("#", "\\u0023")}
${n}
`,
              },
            }
          )
        },
        d: function ({ hostId: e, threadId: t, requestId: n, startingState: r, environmentConfigPath: o }) {
          return {
            hostId: e,
            threadId: t,
            requestId: n,
            origin: "composer",
            allowAsync: !0,
            ref: r?.type === "working-tree" ? "HEAD" : (r?.remoteRef ?? r?.branchName ?? null),
            name: null,
            existingPath: null,
            environmentConfigPath: o ?? null,
          }
        },
      },
    )
  },
  PWXi(e, t, n) {
    n.d(
      t,
      {},
      {
        z: "The user started this task from ChatGPT Library to create a file. Use the available Library skill or Library access method to save each completed user-facing document, spreadsheet, presentation, or PDF to their ChatGPT Library. Create one Library file for each new deliverable. If the same deliverable is edited later, preserve its Library file identity and update the existing file instead of creating a duplicate.",
      },
    )
  },
  Dx08(e, t, n) {
    var r = n("PkQL"),
      o = n("vzzY")
    n.d(
      t,
      {},
      {
        M: function (e, t, n, a) {
          e.set(o.UZ, (e) => {
            for (let [o, s] of e) {
              if (
                "app" !== s.lifetime ||
                s.sessionId !== t ||
                (null != a && (null == s.modelContext || !(0, r.F_)(s.modelContext, a)))
              )
                continue
              if (s.modelContext === n) break
              let i = new Map(e)
              return (i.set(o, { ...s, modelContext: n }), i)
            }
            return e
          })
        },
        W: function (e, t) {
          return (
            Array.from(e.get(o.UZ).values()).find((e) => "app" === e.lifetime && e.sourceMcpAppId === t)
              ?.modelContext ?? null
          )
        },
      },
    )
  },
  Eo5f(e, t, n) {
    n.d(t, { X: () => o })
    var r = n.p + "assets/orbit-ringing.02a31cd5e8.wav"
    function o() {
      let e, t
      try {
        e = new Audio(r)
      } catch {
        return () => {}
      }
      let n = () => {
          ;(clearTimeout(t), (e.onended = null), (e.onerror = null), e.pause())
        },
        o = () => {
          try {
            e.play().catch(n)
          } catch {
            n()
          }
        }
      return (
        (e.onended = () => {
          t = setTimeout(o, 3e3)
        }),
        (e.onerror = n),
        o(),
        n
      )
    }
  },
  KUNU(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      a = n("on57"),
      s = n("zd8w"),
      i = n("tsSe"),
      l = n("IlRO")
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            c,
            u,
            d,
            m,
            p,
            h,
            f,
            g,
            v,
            w,
            y,
            x,
            b,
            A,
            I,
            S,
            M,
            C,
            k,
            _ = (0, o.c)(73),
            {
              className: P,
              glowEnabled: E,
              onDraw: q,
              onRenderError: R,
              onStateSample: T,
              paletteIndex: D,
              placement: j,
              presentation: F,
              presentationAnchorRef: U,
              phase: N,
              previewAudioLevel: V,
              previewTimeMs: O,
              subscribeToAudio: L,
              voiceActivity: B,
            } = e,
            W = void 0 === E || E,
            z = void 0 === D ? 0 : D,
            K = void 0 === F ? "overlay" : F,
            H = void 0 === V ? 0 : V,
            $ = void 0 === L ? i.NY : L,
            [Y, Q] = (0, s.useState)(!1),
            X = (0, s.useRef)(null),
            G = (0, s.useRef)(null),
            J = (0, s.useRef)(null),
            Z = (0, s.useRef)(null)
          ;(_[0] !== O ? ("live" !== O && (t = O), (_[0] = O), (_[1] = t)) : (t = _[1]),
            _[2] !== z || _[3] !== N || _[4] !== H || _[5] !== t || _[6] !== B
              ? ((c = { paletteIndex: z, phase: N, previewAudioLevel: H, previewTimeMs: t, voiceActivity: B }),
                (_[2] = z),
                (_[3] = N),
                (_[4] = H),
                (_[5] = t),
                (_[6] = B),
                (_[7] = c))
              : (c = _[7]))
          let ee = (0, s.useRef)(c)
          _[8] !== q || _[9] !== K || _[10] !== H || _[11] !== t
            ? ((u = (e) => {
                "preview" === K || null != t || H > 0 || q?.(e)
              }),
              (_[8] = q),
              (_[9] = K),
              (_[10] = H),
              (_[11] = t),
              (_[12] = u))
            : (u = _[12])
          let et = (0, s.useEffectEvent)(u)
          _[13] !== T || _[14] !== K || _[15] !== H || _[16] !== t
            ? ((d = (e) => {
                "preview" !== K && null == t && 0 === H && T?.(e)
              }),
              (_[13] = T),
              (_[14] = K),
              (_[15] = H),
              (_[16] = t),
              (_[17] = d))
            : (d = _[17])
          let en = (0, s.useEffectEvent)(d)
          _[18] !== R
            ? ((m = () => {
                ;(Q(!0), R?.())
              }),
              (_[18] = R),
              (_[19] = m))
            : (m = _[19])
          let er = (0, s.useEffectEvent)(m)
          _[20] !== j || _[21] !== U
            ? ((p = (e) => {
                ;((G.current = e), (null == e || e.dataset.avatarOverlayPlacement === j) && U?.(e, e?.parentElement))
              }),
              (_[20] = j),
              (_[21] = U),
              (_[22] = p))
            : (p = _[22])
          let eo = p
          ;(_[23] !== et || _[24] !== er || _[25] !== en || _[26] !== Y || !1 !== _[27] || _[28] !== K
            ? ((h = () => {
                if (Y) return
                let e = G.current,
                  t = J.current,
                  r = e?.parentElement
                if (null == e || null == t || null == r) return
                let o = !1,
                  a = null,
                  s = null,
                  i = () => {
                    let n = String(Math.max(1, Math.floor(Math.min(e.clientWidth, e.clientHeight)))) + "px"
                    ;((t.style.width = n), (t.style.height = n))
                  }
                return (
                  i(),
                  "u" > typeof ResizeObserver && (s = new ResizeObserver(i)).observe(e),
                  (async () => (await n.e(317638).then(n.bind(n, "HNEj"))).HorizonVoiceOrbController)()
                    .then((e) => {
                      var n, a
                      let s, i
                      return o
                        ? null
                        : e.create(t, {
                            displayScale:
                              ((n = r),
                              (a = t),
                              (s = Math.max(1, Math.min(n.clientWidth, n.clientHeight))),
                              (i = Math.max(1, Math.min(a.clientWidth || s + 40, a.clientHeight || s + 40))),
                              Math.min(1, s / i)),
                            onDraw: (e) => {
                              o || et(e)
                            },
                            onRenderError: () => {
                              o || er()
                            },
                            onStateSample: void 0,
                            presentation: K,
                          })
                    })
                    .then((e) => {
                      o
                        ? e?.dispose()
                        : null != e && ((a = e), (X.current = e), e.setAudioLevels(Z.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      o || er()
                    }),
                  () => {
                    ;((o = !0), s?.disconnect(), a?.dispose(), (X.current = null))
                  }
                )
              }),
              (_[23] = et),
              (_[24] = er),
              (_[25] = en),
              (_[26] = Y),
              (_[27] = !1),
              (_[28] = K),
              (_[29] = h))
            : (h = _[29]),
            _[30] !== Y || !1 !== _[31] || _[32] !== K
              ? ((f = [Y, !1, K]), (_[30] = Y), (_[31] = !1), (_[32] = K), (_[33] = f))
              : (f = _[33]),
            (0, s.useLayoutEffect)(h, f),
            _[34] !== z || _[35] !== N || _[36] !== H || _[37] !== t || _[38] !== B
              ? ((g = () => {
                  let e = { paletteIndex: z, phase: N, previewAudioLevel: H, previewTimeMs: t, voiceActivity: B }
                  ;((ee.current = e), X.current?.setInputs(e))
                }),
                (_[34] = z),
                (_[35] = N),
                (_[36] = H),
                (_[37] = t),
                (_[38] = B),
                (_[39] = g))
              : (g = _[39]),
            _[40] !== z || _[41] !== N || _[42] !== H || _[43] !== t || _[44] !== B
              ? ((v = [z, N, H, t, B]), (_[40] = z), (_[41] = N), (_[42] = H), (_[43] = t), (_[44] = B), (_[45] = v))
              : (v = _[45]),
            (0, s.useEffect)(g, v))
          let ea = !Y && "inactive" !== N
          ;(_[46] !== ea || _[47] !== $
            ? ((w = () => {
                if (!ea) {
                  ;((Z.current = null), X.current?.setAudioLevels(null))
                  return
                }
                return $((e) => {
                  ;((Z.current = e), X.current?.setAudioLevels(e))
                })
              }),
              (y = [ea, $]),
              (_[46] = ea),
              (_[47] = $),
              (_[48] = w),
              (_[49] = y))
            : ((w = _[48]), (y = _[49])),
            (0, s.useEffect)(w, y),
            _[50] !== j
              ? ((x = (0, a.A)(
                  "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
                  "center" === j
                    ? "-top-5 -left-5"
                    : [j.endsWith("end") ? "right-0" : "left-0", j.startsWith("top") ? "bottom-0" : "top-0"],
                )),
                (_[50] = j),
                (_[51] = x))
              : (x = _[51]))
          let es = x
          _[52] !== Y || _[53] !== z
            ? ((b = Y ? (0, l.V)(z) : null), (_[52] = Y), (_[53] = z), (_[54] = b))
            : (b = _[54])
          let ei = b
          ;(_[55] !== W || _[56] !== z
            ? ((A = W ? `drop-shadow(0 0 4px color-mix(in srgb, ${(0, l.P)(z)} 55%, transparent))` : void 0),
              (_[55] = W),
              (_[56] = z),
              (_[57] = A))
            : (A = _[57]),
            _[58] !== A ? ((I = { filter: A }), (_[58] = A), (_[59] = I)) : (I = _[59]))
          let el = I
          return (
            _[60] !== P
              ? ((S = (0, a.A)("codex-avatar-root relative h-full w-full", P)), (_[60] = P), (_[61] = S))
              : (S = _[61]),
            _[62] !== el || _[63] !== ei
              ? ((M =
                  null != ei
                    ? (0, r.jsx)("div", {
                        className:
                          "absolute top-1/2 left-1/2 size-[50px] max-h-[calc(100%-40px)] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "data-testid": "voice-static-orb",
                        style: {
                          background: `linear-gradient(155deg, ${ei.fallbackColors[0]}, ${ei.fallbackColors[1]} 46%, ${ei.fallbackColors[2]})`,
                        },
                      })
                    : (0, r.jsx)("canvas", {
                        ref: J,
                        className:
                          "pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2",
                        style: el,
                      })),
                (_[62] = el),
                (_[63] = ei),
                (_[64] = M))
              : (M = _[64]),
            _[65] !== es || _[66] !== j || _[67] !== eo || _[68] !== M
              ? ((C = (0, r.jsx)("div", { ref: eo, className: es, "data-avatar-overlay-placement": j, children: M })),
                (_[65] = es),
                (_[66] = j),
                (_[67] = eo),
                (_[68] = M),
                (_[69] = C))
              : (C = _[69]),
            _[70] !== S || _[71] !== C
              ? ((k = (0, r.jsx)("div", {
                  "aria-hidden": "true",
                  className: S,
                  "data-avatar-mascot": "true",
                  "data-chromatic": "ignore",
                  "data-realtime-voice-orb": !0,
                  "data-testid": "avatar-overlay-voice-orb",
                  children: C,
                })),
                (_[70] = S),
                (_[71] = C),
                (_[72] = k))
              : (k = _[72]),
            k
          )
        },
      },
    )
  },
  IlRO(e, t, n) {
    var r = n("nBOj")
    let o = [r.l.blue, r.l.blue, r.l.green, r.l.yellow, r.l.pink, r.l.orange, r.l.purple, r.l.black],
      a = new Map()
    function s(e) {
      return o[e] ?? r.l.blue
    }
    n.d(
      t,
      {},
      {
        P: s,
        V: function (e) {
          let t,
            n,
            r,
            o,
            i,
            l,
            c,
            u = s(e),
            d = a.get(u)
          if (null != d) return d
          let m =
            ((t = getComputedStyle(document.documentElement)
              .getPropertyValue(u.slice(4, -1))
              .trim()
              .replace(/^#([\da-f])([\da-f])([\da-f])$/i, "#$1$1$2$2$3$3")),
            (r = (n = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16))).map((e) => e / 255)),
            (i = (o = n.every((e) => 0 === e) ? [0.08, 0.08, 0.08] : r).map((e) => Math.max(0, e + 0.9465623 - 1))),
            (l = o.map((e) => {
              let t = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)
              return e + 0.79764306 * (t - e)
            })),
            (c = o.map((e) => 1 - (1 - e) * (1 - 0.63704175))),
            {
              accentColor: [...r, 1],
              fallbackColors: [
                `rgb(${i.map((e) => 255 * e).join(" ")})`,
                `rgb(${l.map((e) => 255 * e).join(" ")} / 98%)`,
                `rgb(${c.map((e) => 255 * e).join(" ")} / 98%)`,
              ],
            })
          return (a.set(u, m), m)
        },
      },
    )
  },
  atrN(e, t, n) {
    n.d(t, { W: () => f })
    var r = n("ABep"),
      o = n("QosV"),
      a = n("on57"),
      s = n("K45w"),
      i = n("W5pg"),
      l = n("LIss"),
      c = n("zd8w")
    let u = 2 * Math.PI * (1088 / 520),
      d = 0.7332121111929343 * u,
      m = Math.atan(d / (0.68 * u)) / d,
      p = (1.06 - 1) / ((Math.exp(-0.68 * u * m) * Math.sin(d * m)) / d)
    var h = n("Mbqw")
    function f(e) {
      let t,
        n,
        m,
        f,
        y,
        x,
        b,
        A,
        I,
        S,
        M,
        C,
        k,
        _,
        P,
        E,
        q,
        R,
        T,
        D,
        j = (0, o.c)(63),
        { isConnecting: F, onHandoffComplete: U, orb: N, orbDiameter: V, reduceMotion: O } = e,
        L = (0, c.useRef)(null),
        B = (0, c.useRef)(!1),
        W = (0, c.useRef)(!1),
        z = (0, s.d)(+!F),
        K = (0, s.d)(50)
      j[0] !== z || j[1] !== V || j[2] !== K
        ? ((t = () =>
            (function (e, t, n) {
              let r = Math.max(0, e)
              if (r >= 1125) return n
              if (r <= 325) {
                let e = r / 325
                return t + e ** 2 * (3 - 2 * e) * (12 - t)
              }
              let o = 12 / n
              if (r <= 520) {
                let e = Math.max(1 - o, 1e-4),
                  a = (((6 * (t / n - o)) / 0.10562500000000001) * (0.038025 / e)) / 2,
                  s = 1 - a,
                  i = (0.195 * p) / e - 2 * a - 3 * s,
                  l = ((-1.36 * u * p * 0.038025) / e - 2 * a - 6 * s - 6 * i) / 2,
                  c = i - 2 * l,
                  d = (r - 325) / 195
                return n * (o + (1 - o) * (d ** 2 * (l * d ** 3 + c * d ** 2 + (s - l - c) * d + a)))
              }
              let a = (r - 520) / 1e3
              return n * (1 + (p / d) * Math.exp(-0.68 * u * a) * Math.sin(d * a))
            })(1125 * z.get(), K.get(), V)),
          (j[0] = z),
          (j[1] = V),
          (j[2] = K),
          (j[3] = t))
        : (t = j[3])
      let H = (0, i.G)(t),
        $ = (0, i.G)(z, v),
        Y = (0, i.G)($, g)
      j[4] !== V ? ((n = (e) => e / V), (j[4] = V), (j[5] = n)) : (n = j[5])
      let Q = (0, i.G)(H, n)
      j[6] !== H || j[7] !== K ? ((m = () => H.get() / K.get()), (j[6] = H), (j[7] = K), (j[8] = m)) : (m = j[8])
      let X = (0, i.G)(m)
      j[9] !== z || j[10] !== F || j[11] !== U || j[12] !== O
        ? ((f = () => {
            F || (!O && 1 > z.get()) || B.current || ((B.current = !0), U?.())
          }),
          (j[9] = z),
          (j[10] = F),
          (j[11] = U),
          (j[12] = O),
          (j[13] = f))
        : (f = j[13])
      let G = f,
        J = (0, c.useEffectEvent)(G)
      ;(j[14] !== J || j[15] !== F
        ? ((y = () => {
            if (F) return
            let e = requestAnimationFrame(J)
            return () => {
              cancelAnimationFrame(e)
            }
          }),
          (j[14] = J),
          (j[15] = F),
          (j[16] = y))
        : (y = j[16]),
        j[17] !== F ? ((x = [F]), (j[17] = F), (j[18] = x)) : (x = j[18]),
        (0, c.useEffect)(y, x),
        j[19] !== V ? ((b = { height: V, width: V }), (j[19] = V), (j[20] = b)) : (b = j[20]))
      let Z = O ? h.TU : h.Eq,
        ee = F && "pointer-events-none"
      ;(j[21] !== ee ? ((A = (0, a.A)("absolute inset-0", ee)), (j[21] = ee), (j[22] = A)) : (A = j[22]),
        j[23] !== $ || j[24] !== Q
          ? ((I = { opacity: $, scale: Q }), (j[23] = $), (j[24] = Q), (j[25] = I))
          : (I = j[25]),
        j[26] !== N || j[27] !== A || j[28] !== I
          ? ((S = (0, r.jsx)(l.P.div, { className: A, style: I, children: N })),
            (j[26] = N),
            (j[27] = A),
            (j[28] = I),
            (j[29] = S))
          : (S = j[29]),
        j[30] !== Y || j[31] !== X
          ? ((M = { opacity: Y, scale: X }), (j[30] = Y), (j[31] = X), (j[32] = M))
          : (M = j[32]),
        j[33] !== O ? ((C = (0, r.jsx)(w, { ref: L, reduceMotion: O })), (j[33] = O), (j[34] = C)) : (C = j[34]),
        j[35] !== M || j[36] !== C
          ? ((k = (0, r.jsx)(l.P.div, {
              className: "pointer-events-none absolute inset-0 flex items-center justify-center",
              style: M,
              children: C,
            })),
            (j[35] = M),
            (j[36] = C),
            (j[37] = k))
          : (k = j[37]))
      let et = +!F
      ;(j[38] !== et ? ((_ = { opacity: et }), (j[38] = et), (j[39] = _)) : (_ = j[39]),
        j[40] !== F || j[41] !== K
          ? ((P = () => {
              let e = L.current
              if (F) {
                ;((W.current = !1), (B.current = !1), null != e && (e.style.animationPlayState = ""))
                return
              }
              if (((W.current = !0), null == e)) return
              let t = e.getBoundingClientRect().width
              ;(t > 0 && K.set(t), (e.style.animationPlayState = "paused"))
            }),
            (j[40] = F),
            (j[41] = K),
            (j[42] = P))
          : (P = j[42]),
        j[43] !== G || j[44] !== F || j[45] !== O
          ? ((E = () => {
              F || O || !W.current || ((W.current = !1), G())
            }),
            (j[43] = G),
            (j[44] = F),
            (j[45] = O),
            (j[46] = E))
          : (E = j[46]),
        j[47] !== z ? ((q = { opacity: z }), (j[47] = z), (j[48] = q)) : (q = j[48]))
      let en = O ? 0 : F ? 0.325 : 1.125
      return (
        j[49] !== en ? ((R = { duration: en, ease: "linear" }), (j[49] = en), (j[50] = R)) : (R = j[50]),
        j[51] !== _ || j[52] !== P || j[53] !== E || j[54] !== q || j[55] !== R
          ? ((T = (0, r.jsx)(l.P.span, {
              "aria-hidden": !0,
              animate: _,
              className: "pointer-events-none absolute size-0",
              initial: !1,
              onAnimationStart: P,
              onAnimationComplete: E,
              style: q,
              transition: R,
            })),
            (j[51] = _),
            (j[52] = P),
            (j[53] = E),
            (j[54] = q),
            (j[55] = R),
            (j[56] = T))
          : (T = j[56]),
        j[57] !== S || j[58] !== k || j[59] !== T || j[60] !== b || j[61] !== Z
          ? ((D = (0, r.jsxs)(l.P.div, {
              "aria-hidden": !0,
              className: "relative flex items-center justify-center",
              initial: !1,
              animate: b,
              transition: Z,
              children: [S, k, T],
            })),
            (j[57] = S),
            (j[58] = k),
            (j[59] = T),
            (j[60] = b),
            (j[61] = Z),
            (j[62] = D))
          : (D = j[62]),
        D
      )
    }
    function g(e) {
      return 1 - e
    }
    function v(e) {
      let t
      return (t = Math.min(1, Math.max(0, (1125 * e - 325) / 195))) ** 3 * (t * (6 * t - 15) + 10)
    }
    function w(e) {
      let t,
        n,
        s = (0, o.c)(5),
        { ref: i, reduceMotion: l } = e,
        c = !l && "pulsing-dot"
      return (
        s[0] !== c
          ? ((t = (0, a.A)("size-[50px] rounded-full bg-primary-solid", c)), (s[0] = c), (s[1] = t))
          : (t = s[1]),
        s[2] !== i || s[3] !== t
          ? ((n = (0, r.jsx)("div", { ref: i, className: t })), (s[2] = i), (s[3] = t), (s[4] = n))
          : (n = s[4]),
        n
      )
    }
  },
  kXFg(e, t, n) {
    n.d(t, {
      zW: () => I,
      jS: () => q,
      Kj: () => k,
      hW: () => E,
      uO: () => T,
      ml: () => P,
      Yc: () => R,
      VR: () => M,
      RJ: () => S,
      eE: () => C,
      jj: () => _,
    })
    var r = n("SRbQ"),
      o = n("zTeN"),
      a = n("DBCl"),
      s = n("Dgwo"),
      i = n("seW7"),
      l = n("SGsN"),
      c = n("svjy"),
      u = n("JQtI"),
      d = n("TYK1"),
      m = n("jiwy"),
      p = n("ho8L"),
      h = n("Eo5f"),
      f = n("GaA7"),
      g = n("OWtl"),
      v = n("WFY2"),
      w = n("HK0a"),
      y = n("Fkn8"),
      x = n("lICN"),
      b = n("Sd8U")
    class A extends y.TF {
      source
      delivery
      locator = null
      constructor(e) {
        ;(super(), (this.source = e), (this.delivery = (0, x.Q)(e)))
      }
      async injectContext(e) {
        if (
          null != this.locator &&
          (this.locator.hostId !== e.hostId || this.locator.conversationId !== e.conversationId)
        )
          throw Error("Voice context belongs to another conversation")
        let t = (0, b.Xr)(this.source)
        if (null != t && t !== e.conversationId) throw Error("Voice context belongs to another composer")
        ;((this.locator = e),
          await this.delivery.inject((t) =>
            (0, s.V)(this.source, e.hostId).sendRequest("thread/inject_items", {
              threadId: e.conversationId,
              items: t,
            }),
          ))
      }
    }
    let I = "microphone_permission_denied",
      S = (0, o.vP)(g.u, null)
    async function M(e, { conversationId: t, hostId: n }) {
      let o = { stack: [], error: void 0, hasError: !1 }
      try {
        let a = (0, s.V)(e, n),
          l = (0, r.mS)(o, await a.getThreadListSummary(t), !1)
        if ((0, u.N)(l?.threadStartKind, l?.threadSource)) return !0
        let c = (0, r.mS)(o, await a.getFollowUpContext(t), !1)
        return (
          (0, i.Kv)(e, t, c) ||
          e.get(p.Rr, { hostId: n, threadId: t }) ||
          null != e.query.getData(d.cloudAeonByThreadId$, t) ||
          (await (0, d.F)(e, n, t, c))
        )
      } catch (e) {
        ;((o.error = e), (o.hasError = !0))
      } finally {
        ;(0, r.hk)(o)
      }
    }
    async function C(e, t, n, r, o) {
      ;(0, w.jz)(e, o)
      let s = e.get(S)
      if (null != s && "failed" !== s.phase && "composer_button_new_thread" !== n.source) return
      let i = "composer_button_existing_thread" === n.source && (await M(e, n.locator))
      if ((i && (0, m.qo)(e), e.get(S) !== s)) return
      let l = crypto.randomUUID(),
        c = null == t ? void 0 : new A(t)
      if (
        (e.set(S, {
          sourceComposerScope: t,
          handoffComplete:
            "composer_button_existing_thread" === n.source && "in-window" === n.preferredPresentationSurface,
          launchId: l,
          originPath: r,
          phase: "starting",
          request: n,
          workHomePolicyAcceptance: o,
        }),
        i || null != o)
      ) {
        let t
        t = e.watch((e) => {
          let n = e.get(S)
          n?.launchId !== l || "starting" !== n.phase
            ? t?.()
            : ((!i || e.get(m.VK)) && (0, w.BB)(e, o)) || q(e).catch(() => {})
        })
      }
      if ("composer_button_existing_thread" === n.source && "in-window" === n.preferredPresentationSurface) {
        let t = (0, h.X)()
        e.when((e) => {
          let t = e.get(S)
          return t?.launchId !== l || "starting" !== t.phase
        }).then(t)
      }
      try {
        let t = f.appServices.realtimeVoiceRuntime
        if (null == t) throw Error("Voice chat is unavailable")
        ;((0, w.jz)(e, o), await t.requestRealtimeStart(n, l, c))
      } catch (t) {
        if (e.get(S)?.launchId !== l) return
        throw (
          _(e, "failed", l, (0, a.Rt_)(t)),
          v.v.error("Unable to request realtime voice launch", { safe: {}, sensitive: { error: t } }),
          t
        )
      }
    }
    function k(e, t) {
      e.set(S, (e) =>
        e?.request !== t
          ? e
          : "composer_button_existing_thread" === t.source && "connected" === e.phase
            ? null
            : { ...e, handoffComplete: !0 },
      )
    }
    function _(e, t, n, r) {
      let o = e.get(S)
      if (
        o?.launchId === n &&
        "failed" !== o.phase &&
        "failed" === t &&
        "composer_button_existing_thread" === o.request.source &&
        "in-window" === o.request.preferredPresentationSurface
      ) {
        let t = e.get(c.g),
          n = r === I,
          a = f.appServices.systemPermissions,
          s = e
            .get(l.Id)
            .danger(
              n
                ? t.formatMessage({
                    id: "realtimeVoice.launch.microphonePermissionDeniedTitle",
                    defaultMessage: "Microphone permission denied",
                    description:
                      "Title shown when realtime voice chat cannot start because the operating system denied microphone permission",
                  })
                : t.formatMessage({
                    id: "realtimeVoice.launch.failedTitle",
                    defaultMessage: "Voice chat couldn’t start",
                    description: "Title shown when an optimistic realtime voice launch fails",
                  }),
              {
                id: "realtime-voice-launch-error",
                errorAnalytics: {
                  toastId: n ? "realtimeVoice.launch.microphonePermissionDenied" : "realtimeVoice.launch.failed",
                },
                duration: 1 / 0,
                hasCloseButton: !0,
                description: n
                  ? t.formatMessage({
                      id: "realtimeVoice.launch.microphonePermissionDeniedDescription",
                      defaultMessage: "Allow microphone access in system settings to start a voice chat",
                      description:
                        "Instructions shown when operating-system microphone permission must be enabled before starting realtime voice chat",
                    })
                  : r,
                primaryAction:
                  n && null != a
                    ? {
                        label: t.formatMessage({
                          id: "realtimeVoice.launch.openMicrophoneSettings",
                          defaultMessage: "Open system settings",
                          description:
                            "Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat",
                        }),
                        onClick: async () => {
                          await a.openMicrophoneSettings().catch(() => {})
                        },
                      }
                    : {
                        label: t.formatMessage({
                          id: "realtimeVoice.launch.retry",
                          defaultMessage: "Try again",
                          description: "Button that retries a failed realtime voice launch",
                        }),
                        onClick: () => {
                          ;(s.close(),
                            C(e, o.sourceComposerScope, o.request, o.originPath, o.workHomePolicyAcceptance).catch(
                              () => {},
                            ))
                        },
                      },
              },
            )
      }
      e.set(S, (e) =>
        null == e || e.launchId !== n
          ? e
          : "idle" === t
            ? "failed" === e.phase
              ? e
              : null
            : "connected" === t && "composer_button_existing_thread" === e.request.source && e.handoffComplete
              ? null
              : { ...e, error: r, phase: t },
      )
    }
    function P(e, t, n) {
      return (
        e?.request.source === "composer_button_existing_thread" &&
        e.request.locator.conversationId === t &&
        e.request.locator.hostId === n
      )
    }
    function E(e, t) {
      e.set(S, (e) => (e?.request === t && "connected" === e.phase && e.handoffComplete ? null : e))
    }
    function q(e) {
      return (
        e.set(S, null),
        f.appServices.realtimeVoiceRuntime?.cancelRealtimeSessionStart().catch((e) => {
          throw (v.v.error("Unable to cancel realtime voice launch", { safe: {}, sensitive: { error: e } }), e)
        }) ?? Promise.resolve()
      )
    }
    function R(e, t, n) {
      return e === t || (null != n && e === (0, a._RT)(n))
    }
    function T(e, t) {
      return "inactive" !== e.phase && "main-thread" === e.preferredPresentationSurface
        ? e.locator.conversationId
        : t?.surface === "main-thread"
          ? t.locator.conversationId
          : null
    }
  },
  h0ld(e, t, n) {
    var r = n("ABep"),
      o = n("QosV"),
      a = n("LIss"),
      s = n("zTeN"),
      i = n("oyxz"),
      l = n("HZfM"),
      c = n("q3HK"),
      u = n("ygO2"),
      d = n("T1PX"),
      m = n("KUNU"),
      p = n("GaA7"),
      h = n("OWtl"),
      f = n("atrN"),
      g = n("XLpU"),
      v = n("kXFg"),
      w = n("Mbqw"),
      y = n("XL6s"),
      x = n("hJzG"),
      b = n("NolR")
    function A() {}
    function I() {}
    function S() {}
    n.d(
      t,
      {},
      {
        RealtimeVoiceLaunchSurface: function (e) {
          let t,
            n,
            M,
            C,
            k,
            _,
            P,
            E,
            q,
            R,
            T = (0, o.c)(69),
            { threadLocator: D } = e,
            j = (0, s.gh)(h.u),
            F = (0, l.zy)(),
            U = (0, s.Ul)(v.RJ),
            N = (0, s.Ul)(g._A),
            V = (0, s.Ul)(y.qE),
            O = (0, d.I)(),
            L = (0, b.w)(),
            B =
              null == D
                ? U?.request.source === "composer_button_new_thread" &&
                  (0, v.Yc)(`${F.pathname}${F.search}`, U.originPath, (0, v.uO)(N, V))
                : (0, v.ml)(U, D.conversationId, D.hostId)
          if (
            null == U ||
            !B ||
            ("composer_button_existing_thread" === U.request.source &&
              "in-window" === U.request.preferredPresentationSurface) ||
            (("composer_button_existing_thread" === U.request.source || null != U.request.pageCompanion) &&
              "failed" !== U.phase)
          )
            return null
          if ("failed" === U.phase) {
            let e,
              t,
              n,
              o,
              a,
              s,
              l,
              d,
              m,
              h,
              f,
              g,
              w,
              y,
              x,
              b,
              M = U.error === v.zW,
              C = p.appServices.systemPermissions
            ;(T[0] !== M
              ? ((e = (0, r.jsx)("h2", {
                  className: "text-base font-medium text-default",
                  children: M
                    ? (0, r.jsx)(i.A, {
                        id: "realtimeVoice.launch.microphonePermissionDeniedTitle",
                        defaultMessage: "Microphone permission denied",
                        description:
                          "Title shown when realtime voice chat cannot start because the operating system denied microphone permission",
                      })
                    : (0, r.jsx)(i.A, {
                        id: "realtimeVoice.launch.failedTitle",
                        defaultMessage: "Voice chat couldn’t start",
                        description: "Title shown when an optimistic realtime voice launch fails",
                      }),
                })),
                (T[0] = M),
                (T[1] = e))
              : (e = T[1]),
              T[2] !== U.error || T[3] !== M
                ? ((t = M
                    ? (0, r.jsx)(i.A, {
                        id: "realtimeVoice.launch.microphonePermissionDeniedDescription",
                        defaultMessage: "Allow microphone access in system settings to start a voice chat",
                        description:
                          "Instructions shown when operating-system microphone permission must be enabled before starting realtime voice chat",
                      })
                    : U.error ||
                      (0, r.jsx)(i.A, {
                        id: "realtimeVoice.launch.failedDescription",
                        defaultMessage: "Try again, or go back",
                        description: "Description shown when an optimistic realtime voice launch fails",
                      })),
                  (T[2] = U.error),
                  (T[3] = M),
                  (T[4] = t))
                : (t = T[4]),
              T[5] !== t
                ? ((n = (0, r.jsx)("p", { className: "text-sm text-secondary", children: t })), (T[5] = t), (T[6] = n))
                : (n = T[6]),
              T[7] !== e || T[8] !== n
                ? ((o = (0, r.jsxs)("div", { className: "flex flex-col gap-1", children: [e, n] })),
                  (T[7] = e),
                  (T[8] = n),
                  (T[9] = o))
                : (o = T[9]),
              T[10] !== M
                ? ((a =
                    M &&
                    null != C &&
                    (0, r.jsx)(u.$, {
                      color: "primary",
                      onClick: () => {
                        C.openMicrophoneSettings().catch(S)
                      },
                      size: "medium",
                      children: (0, r.jsx)(i.A, {
                        id: "realtimeVoice.launch.openMicrophoneSettings",
                        defaultMessage: "Open system settings",
                        description:
                          "Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat",
                      }),
                    })),
                  (T[10] = M),
                  (T[11] = a))
                : (a = T[11]))
            let k = M && null != C ? "secondary" : "primary"
            return (
              T[12] !== U.originPath ||
              T[13] !== U.request ||
              T[14] !== U.sourceComposerScope ||
              T[15] !== U.workHomePolicyAcceptance ||
              T[16] !== j
                ? ((s = () => {
                    ;(0, v.eE)(j, U.sourceComposerScope, U.request, U.originPath, U.workHomePolicyAcceptance).catch(I)
                  }),
                  (T[12] = U.originPath),
                  (T[13] = U.request),
                  (T[14] = U.sourceComposerScope),
                  (T[15] = U.workHomePolicyAcceptance),
                  (T[16] = j),
                  (T[17] = s))
                : (s = T[17]),
              T[18] === Symbol.for("react.memo_cache_sentinel")
                ? ((l = (0, r.jsx)(i.A, {
                    id: "realtimeVoice.launch.retry",
                    defaultMessage: "Try again",
                    description: "Button that retries a failed realtime voice launch",
                  })),
                  (T[18] = l))
                : (l = T[18]),
              T[19] !== k || T[20] !== s
                ? ((d = (0, r.jsx)(u.$, { color: k, onClick: s, size: "medium", children: l })),
                  (T[19] = k),
                  (T[20] = s),
                  (T[21] = d))
                : (d = T[21]),
              T[22] !== U.error
                ? ((m = () => {
                    ;(0, c.d1)("feedback", "realtime_voice_startup_failure", { feedbackDetails: U.error })
                  }),
                  (T[22] = U.error),
                  (T[23] = m))
                : (m = T[23]),
              T[24] === Symbol.for("react.memo_cache_sentinel")
                ? ((h = (0, r.jsx)(i.A, {
                    id: "realtimeVoice.launch.feedback",
                    defaultMessage: "Send feedback",
                    description: "Button that opens the feedback dialog with a failed realtime voice startup error",
                  })),
                  (T[24] = h))
                : (h = T[24]),
              T[25] !== m
                ? ((f = (0, r.jsx)(u.$, { color: "secondary", onClick: m, size: "medium", children: h })),
                  (T[25] = m),
                  (T[26] = f))
                : (f = T[26]),
              T[27] !== j
                ? ((g = () => {
                    ;(0, v.jS)(j).catch(A)
                  }),
                  (T[27] = j),
                  (T[28] = g))
                : (g = T[28]),
              T[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((w = (0, r.jsx)(i.A, {
                    id: "realtimeVoice.launch.back",
                    defaultMessage: "Back",
                    description:
                      "Button that dismisses a failed realtime voice launch and returns to the previous surface",
                  })),
                  (T[29] = w))
                : (w = T[29]),
              T[30] !== g
                ? ((y = (0, r.jsx)(u.$, { color: "secondary", onClick: g, size: "medium", children: w })),
                  (T[30] = g),
                  (T[31] = y))
                : (y = T[31]),
              T[32] !== f || T[33] !== y || T[34] !== a || T[35] !== d
                ? ((x = (0, r.jsxs)("div", {
                    className: "flex flex-wrap justify-center gap-2",
                    children: [a, d, f, y],
                  })),
                  (T[32] = f),
                  (T[33] = y),
                  (T[34] = a),
                  (T[35] = d),
                  (T[36] = x))
                : (x = T[36]),
              T[37] !== x || T[38] !== o
                ? ((b = (0, r.jsx)("div", {
                    className: "absolute inset-0 z-30 flex items-center justify-center bg-surface",
                    children: (0, r.jsxs)("div", {
                      className: "flex flex-col items-center gap-4 text-center",
                      children: [o, x],
                    }),
                  })),
                  (T[37] = x),
                  (T[38] = o),
                  (T[39] = b))
                : (b = T[39]),
              b
            )
          }
          let W = "active" === N.phase && "main-thread" === N.preferredPresentationSurface,
            z = "connected" === U.phase && U.handoffComplete,
            K = L && V?.surface === "main-thread" && V.handoff?.from === "global-overlay" ? x.vY : x.Ke,
            H = +!z
          ;(T[40] !== H ? ((t = { opacity: H }), (T[40] = H), (T[41] = t)) : (t = T[41]),
            T[42] !== z || T[43] !== U.request || T[44] !== j
              ? ((n = () => {
                  z && (0, v.hW)(j, U.request)
                }),
                (T[42] = z),
                (T[43] = U.request),
                (T[44] = j),
                (T[45] = n))
              : (n = T[45]))
          let $ = O ? w.TU : w.sk
          ;(T[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = (0, r.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: (0, r.jsx)(i.A, {
                  id: "realtimeVoice.launch.starting",
                  defaultMessage: "Starting voice chat",
                  description: "Accessible status announced while realtime voice starts",
                }),
              })),
              (T[46] = M))
            : (M = T[46]),
            T[47] !== K ? ((C = { transform: K }), (T[47] = K), (T[48] = C)) : (C = T[48]),
            T[49] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = { height: 112, width: 112 }), (T[49] = k))
              : (k = T[49]))
          let Y = !W
          T[50] !== U.request || T[51] !== j
            ? ((_ = () => (0, v.Kj)(j, U.request)), (T[50] = U.request), (T[51] = j), (T[52] = _))
            : (_ = T[52])
          let Q = "inactive" === N.phase ? "starting" : N.phase,
            X = "inactive" === N.phase ? "idle" : N.activity
          return (
            T[53] !== Q || T[54] !== X
              ? ((P = (0, r.jsx)(m.P, {
                  className: "!aspect-square !size-full",
                  glowEnabled: !1,
                  phase: Q,
                  placement: "center",
                  voiceActivity: X,
                })),
                (T[53] = Q),
                (T[54] = X),
                (T[55] = P))
              : (P = T[55]),
            T[56] !== O || T[57] !== P || T[58] !== Y || T[59] !== _
              ? ((E = (0, r.jsx)("div", {
                  className: "relative flex",
                  style: k,
                  children: (0, r.jsx)(f.W, {
                    isConnecting: Y,
                    onHandoffComplete: _,
                    orb: P,
                    orbDiameter: 112,
                    reduceMotion: O,
                  }),
                })),
                (T[56] = O),
                (T[57] = P),
                (T[58] = Y),
                (T[59] = _),
                (T[60] = E))
              : (E = T[60]),
            T[61] !== E || T[62] !== C
              ? ((q = (0, r.jsx)("div", {
                  className: x.Jn,
                  children: (0, r.jsx)("div", { className: x.$S, style: C, children: E }),
                })),
                (T[61] = E),
                (T[62] = C),
                (T[63] = q))
              : (q = T[63]),
            T[64] !== q || T[65] !== t || T[66] !== n || T[67] !== $
              ? ((R = (0, r.jsxs)(a.P.div, {
                  animate: t,
                  className: "absolute inset-0 z-30 bg-surface",
                  initial: !1,
                  onAnimationComplete: n,
                  transition: $,
                  children: [M, q],
                })),
                (T[64] = q),
                (T[65] = t),
                (T[66] = n),
                (T[67] = $),
                (T[68] = R))
              : (R = T[68]),
            R
          )
        },
      },
    )
  },
  t0b9(e, t, n) {
    var r = n("DBCl")
    let o = "realtimeVoiceHostId"
    n.d(
      t,
      {},
      {
        I: function (e) {
          let t = new URLSearchParams({ [o]: e.hostId })
          return `${(0, r._RT)(e.conversationId)}?${t}`
        },
        N: function ({ conversationId: e, routeConversationId: t, searchParams: n }) {
          return null != e && e === t ? n.get(o) : null
        },
      },
    )
  },
  Mbqw(e, t, n) {
    n.d(
      t,
      {},
      {
        Eq: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
        TU: { duration: 0 },
        sk: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      },
    )
  },
  tsSe(e, t, n) {
    let r = Math.ceil(400 / 240),
      o = [
        [1, 3],
        [3, 23],
        [23, 240],
      ],
      a = [10, 1, 1],
      s = Math.floor(1e3 / 60),
      i = { codexScaleLevel: 0, high: 0, low: 0, mid: 0, overall: 0 },
      l = null,
      c = null,
      u = new Set()
    function d() {
      return "u" < typeof BroadcastChannel
        ? null
        : (null == c &&
            ((c = new BroadcastChannel("codex-realtime-voice-orb-audio")).onmessage = (e) => {
              m(e.data)
            }),
          c)
    }
    function m(e) {
      for (let t of ((l = e), u)) t(e)
    }
    function p(e, t, n, r) {
      let o = e.slice(t, n).sort((e, t) => e - t),
        a = Math.floor(o.length / 2),
        s = Math.abs(o.length % 2 == 0 ? ((o[a - 1] ?? 0) + (o[a] ?? 0)) / 2 : (o[a] ?? 0)) * r
      return s / (s + 1)
    }
    function h(e) {
      return Math.sqrt(1 - Math.abs(Math.max(-100, Math.min(-10, e))) / 100)
    }
    n.d(
      t,
      {},
      {
        Ig: class {
          publish
          mode
          analyser = null
          audioContext = null
          audioSource = null
          audioStream = null
          codexScaleAnalyser = null
          codexScaleFrequencyData = new Float32Array(0)
          codexScaleLevel = 0
          frequencyData = new Float32Array(0)
          outputSampleCount = 0
          sampleIntervalId = null
          constructor(e, t = "output") {
            ;((this.publish = e), (this.mode = t))
          }
          get isRunning() {
            return this.audioContext?.state === "running"
          }
          setStream(e) {
            if (this.audioStream === e) return void this.audioContext?.resume().catch(() => {})
            let t = null != this.audioStream
            if (
              (this.audioSource?.disconnect(),
              (this.audioSource = null),
              (this.audioStream = e),
              null == e || "u" < typeof AudioContext)
            ) {
              ;(null != this.sampleIntervalId &&
                (window.clearInterval(this.sampleIntervalId), (this.sampleIntervalId = null)),
                "output" === this.mode && ((this.codexScaleLevel = 0), (this.outputSampleCount = 0)),
                t && this.publish(i))
              return
            }
            let n = this.audioContext ?? new AudioContext()
            this.audioContext = n
            let r = this.analyser ?? n.createAnalyser()
            if (
              (null == this.analyser &&
                ((r.fftSize = 2048),
                (r.minDecibels = -100),
                (r.maxDecibels = -80),
                (r.smoothingTimeConstant = 0.8),
                (this.analyser = r),
                (this.frequencyData = new Float32Array(r.frequencyBinCount))),
              "output" === this.mode && null == this.codexScaleAnalyser)
            ) {
              let e = n.createAnalyser()
              ;((e.fftSize = 2048),
                (e.minDecibels = -100),
                (e.maxDecibels = -10),
                (e.smoothingTimeConstant = 0.86),
                (this.codexScaleAnalyser = e),
                (this.codexScaleFrequencyData = new Float32Array(e.frequencyBinCount)))
            }
            let o = n.createMediaStreamSource(e)
            ;((this.audioSource = o),
              o.connect(r),
              null != this.codexScaleAnalyser && o.connect(this.codexScaleAnalyser),
              n.resume().catch(() => {}),
              null == this.sampleIntervalId &&
                (this.sampleIntervalId = window.setInterval(this.sample, "microphone" === this.mode ? 32 : s)))
          }
          dispose() {
            ;(this.setStream(null),
              this.audioContext?.close().catch(() => {}),
              (this.audioContext = null),
              (this.analyser = null),
              (this.codexScaleAnalyser = null),
              (this.codexScaleFrequencyData = new Float32Array(0)),
              (this.codexScaleLevel = 0),
              (this.frequencyData = new Float32Array(0)),
              (this.outputSampleCount = 0))
          }
          sample = () => {
            var e, t
            let n, s
            null != this.analyser &&
              null != this.audioStream &&
              (this.analyser.getFloatFrequencyData(this.frequencyData),
              "output" === this.mode &&
                ((this.outputSampleCount += 1),
                null != this.codexScaleAnalyser &&
                  this.outputSampleCount % 2 == 0 &&
                  (this.codexScaleAnalyser.getFloatFrequencyData(this.codexScaleFrequencyData),
                  (this.codexScaleLevel = (function (e) {
                    let t = []
                    for (let n = 0; n < 400; n += 1) t.push(h(e[n] ?? -100))
                    return p(t, 0, t.length, 1)
                  })(this.codexScaleFrequencyData)))),
              this.publish(
                "microphone" === this.mode
                  ? (function (e) {
                      let t = 0
                      for (let n = 0; n < 400; n += 1) t += h(e[n] ?? -100)
                      return { high: 0, low: 0, mid: 0, overall: t / 400 }
                    })(this.frequencyData)
                  : ((e = this.frequencyData),
                    (t = this.codexScaleLevel),
                    (n = (function (e) {
                      let t = Array.from({ length: 240 }, () => 0)
                      for (let n = 0; n < 240; n += 1) {
                        let o = n * r,
                          a = Math.min(o + r, 400),
                          s = 0
                        for (let t = o; t < a; t += 1) s += h(e[t] ?? -100)
                        t[n] = s / r
                      }
                      return t
                    })(e)),
                    {
                      codexScaleLevel: t,
                      high: (s = o.map(([e, t], r) => p(n, e, t, a[r])))[2] ?? 0,
                      low: s[0] ?? 0,
                      mid: s[1] ?? 0,
                      overall: p(n, 0, 240, 1),
                    }),
              ))
          }
        },
        NY: function (e) {
          return (
            d(),
            u.add(e),
            e(l),
            () => {
              u.delete(e)
            }
          )
        },
        ue: function (e) {
          ;(m(e), d()?.postMessage(e))
        },
      },
    )
  },
  f81T(e, t, n) {
    n.d(
      t,
      {},
      {
        F9: function (e, t) {
          return { x: e.left + e.width / 2 - (t.left + t.width / 2), y: e.top + e.height / 2 - (t.top + t.height / 2) }
        },
        NS: function (e, t) {
          return {
            centerX: t.screenX + e.left + e.width / 2,
            centerY: t.screenY + e.top + e.height / 2,
            height: e.height,
            width: e.width,
          }
        },
        Pz: function (e, t, n, r) {
          let o = (e.centerX - t.centerX) / n,
            a = (e.centerY - t.centerY) / n,
            s = Math.hypot(o, a),
            i = s > r ? r / s : 1
          return { x: o * i, y: a * i }
        },
        SP: function (e, t, n) {
          let r = (0.055 * e.x) / t,
            o = (0.055 * e.y) / t,
            a = Math.hypot(r, o),
            s = a > n ? n / a : 1
          return { x: r * s, y: o * s }
        },
      },
    )
  },
  XL6s(e, t, n) {
    var r = n("SRbQ"),
      o = n("QosV"),
      a = n("zTeN"),
      s = n("zd8w"),
      i = n("wD9O"),
      l = n("SGsN"),
      c = n("TL6G"),
      u = n("GaA7"),
      d = n("OWtl"),
      m = n("t0b9"),
      p = n("f81T")
    let h = { active: null },
      f = (0, a.vP)(d.u, () => h, {
        onMount: (e) => {
          let t = u.appServices?.realtimeVoicePresentation
          if (null == t) return
          let n = !0,
            o = null
          return (
            t
              .subscribe((t) => {
                n && e(t)
              })
              .then((e) => {
                if (!n) {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let n = (0, r.mS)(t, e, !1)
                    ;(0, r.mS)(t, n.unsubscribe(), !1)
                    return
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, r.hk)(t)
                  }
                }
                o = () => {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let n = (0, r.mS)(t, e, !1)
                    ;(0, r.mS)(t, n.unsubscribe(), !1)
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, r.hk)(t)
                  }
                }
              }),
            () => {
              ;((n = !1), o?.(), (o = null))
            }
          )
        },
      }),
      g = (0, a.un)(d.u, ({ get: e }) => e(f).active)
    function v({ locator: e, motion: t, surface: n }) {
      let o = { stack: [], error: void 0, hasError: !1 }
      try {
        ;(0, r.mS)(o, u.appServices.realtimeVoicePresentation?.requestSurface(e, n, t), !1)
      } catch (e) {
        ;((o.error = e), (o.hasError = !0))
      } finally {
        ;(0, r.hk)(o)
      }
    }
    n.d(
      t,
      {},
      {
        UB: function (e) {
          let t,
            n = (0, o.c)(2)
          n[0] !== e
            ? ((t = () => {
                null != e &&
                  (v({ locator: e, surface: "main-thread" }),
                  c.O1.dispatchMessage("open-in-main-window", {
                    path: (0, m.I)(e),
                    appEntryAttribution: { channel: "shortcut", source: "shortcut" },
                  }))
              }),
              (n[0] = e),
              (n[1] = t))
            : (t = n[1])
          let r = t
          return null == e ? void 0 : r
        },
        _x: v,
        cr: function (e) {
          let t,
            n,
            r,
            m,
            h,
            f,
            g,
            v,
            w,
            y,
            x,
            b = (0, o.c)(29),
            { enabled: A, isEligible: I, locator: S, surface: M, usesNativeOverlayTransition: C } = e,
            k = (0, a.gh)(d.u),
            _ = (0, i.dz)(),
            P = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            q = (0, s.useRef)(null),
            R = (0, s.useRef)(null),
            T = S?.conversationId,
            D = S?.hostId
          b[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                let e = E.current,
                  t = P.current
                if (null == e || null == t) return
                let n = e.getBoundingClientRect()
                t.updateAnchor((0, p.NS)(n, { screenX: window.screenX, screenY: window.screenY }))
                let r = q.current
                null != r && t.updatePresentationOffset((0, p.F9)(n, r.getBoundingClientRect()))
              }),
              (b[0] = t))
            : (t = b[0])
          let j = t
          b[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e, t) => {
                if (
                  (R.current?.(), (R.current = null), (E.current = e), (q.current = void 0 === t ? null : t), null == e)
                )
                  return
                let n = "u" < typeof ResizeObserver ? null : new ResizeObserver(j)
                ;(n?.observe(e),
                  e.addEventListener("pointerdown", j, !0),
                  e.addEventListener("pointerup", j, !0),
                  window.addEventListener("blur", j),
                  window.addEventListener("resize", j))
                let r = c.O1.subscribe("electron-window-position-changed", j)
                ;(j(),
                  (R.current = () => {
                    ;(n?.disconnect(),
                      e.removeEventListener("pointerdown", j, !0),
                      e.removeEventListener("pointerup", j, !0),
                      window.removeEventListener("blur", j),
                      window.removeEventListener("resize", j),
                      r())
                  }))
              }),
              (b[1] = n))
            : (n = b[1])
          let F = n
          b[2] !== I ? ((r = () => I), (b[2] = I), (b[3] = r)) : (r = b[3])
          let U = (0, s.useEffectEvent)(r)
          b[4] === Symbol.for("react.memo_cache_sentinel") ? ((m = () => j()), (b[4] = m)) : (m = b[4])
          let N = (0, s.useEffectEvent)(m)
          b[5] !== k
            ? ((h = (e) => {
                switch (e.kind) {
                  case "danger":
                    k.get(l.Id).danger(e.message, {
                      errorAnalytics: { toastId: "realtimeVoicePresentation.showToast" },
                    })
                    break
                  case "warning":
                    k.get(l.Id).warning(e.message)
                }
              }),
              (b[5] = k),
              (b[6] = h))
            : (h = b[6])
          let V = h
          return (
            b[7] !== T ||
            b[8] !== A ||
            b[9] !== U ||
            b[10] !== D ||
            b[11] !== N ||
            b[12] !== V ||
            b[13] !== M ||
            b[14] !== C
              ? ((f = () => {
                  if (!A || null == T || null == D) return
                  let e = u.appServices.realtimeVoicePresentation
                  if (null == e) return
                  let t = !1,
                    n = null
                  return (
                    e.registerSurface({ conversationId: T, hostId: D }, M, U(), C, V).then((e) => {
                      t
                        ? e.unregister()
                        : ((P.current = e),
                          e.updateEligibility(U()),
                          N(),
                          (n = () => {
                            e.unregister()
                          }))
                    }),
                    () => {
                      ;((t = !0), (P.current = null), n?.(), (n = null))
                    }
                  )
                }),
                (b[7] = T),
                (b[8] = A),
                (b[9] = U),
                (b[10] = D),
                (b[11] = N),
                (b[12] = V),
                (b[13] = M),
                (b[14] = C),
                (b[15] = f))
              : (f = b[15]),
            b[16] !== T || b[17] !== A || b[18] !== D || b[19] !== V || b[20] !== M || b[21] !== C
              ? ((g = [T, A, D, V, M, C]),
                (b[16] = T),
                (b[17] = A),
                (b[18] = D),
                (b[19] = V),
                (b[20] = M),
                (b[21] = C),
                (b[22] = g))
              : (g = b[22]),
            (0, s.useEffect)(f, g),
            b[23] !== I
              ? ((v = () => {
                  let e = P.current
                  null != e && e.updateEligibility(I)
                }),
                (w = [I]),
                (b[23] = I),
                (b[24] = v),
                (b[25] = w))
              : ((v = b[24]), (w = b[25])),
            (0, s.useEffect)(v, w),
            b[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = () => {
                  j()
                }),
                (b[26] = y))
              : (y = b[26]),
            b[27] !== _ ? ((x = [j, _]), (b[27] = _), (b[28] = x)) : (x = b[28]),
            (0, s.useEffect)(y, x),
            A ? F : void 0
          )
        },
        qE: g,
      },
    )
  },
  hJzG(e, t, n) {
    n.d(
      t,
      {},
      {
        $S: "absolute inset-x-12 top-0 flex flex-col items-center gap-1",
        Jn: "pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto h-52 w-full max-w-[900px] px-12",
        Ke: "translateY(52px)",
        vY: "translateY(-28px)",
      },
    )
  },
  NolR(e, t, n) {
    var r = n("QosV"),
      o = n("XYHU"),
      a = n("hZax")
    n.d(
      t,
      {},
      {
        w: function () {
          let e,
            t = (0, r.c)(2),
            n = (0, a.Zj)("620613358")
          return (t[0] !== n ? ((e = "macOS" === (0, o.tR)() && n), (t[0] = n), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  PZWn(e, t, n) {
    var r = n("zTeN"),
      o = n("OWtl"),
      a = n("tzYO"),
      s = n("vXOR")
    let i = (0, r.bD)(o.u, (e) => ({ mode: "custom", overridden: !1 })),
      l = (0, r.i1)(o.u, (e, { get: t }) => {
        let n = t(a.Wo)
        return null == n ? { mode: "custom", overridden: !1 } : t(i, { ...n, conversationId: e })
      }),
      c = (0, r.i1)(o.u, (e, { get: t }) => t(l, e).mode)
    n.d(
      t,
      { mu: () => s.mu },
      {
        SO: function (e, t, n, r = !0) {
          let o = e.get(a.Wo)
          null != o && e.set(i, { ...o, conversationId: t }, { mode: n, overridden: r })
        },
        Wn: c,
        lU: l,
      },
    )
  },
  TurB(e, t, n) {
    var r = n("nuXe"),
      o = n.n(r),
      a = n("zTeN"),
      s = n("DBCl")
    n("NvvW")
    var i = n("M9WK"),
      l = n("tl5a"),
      c = n("J43j")
    n("mNN5")
    var u = n("GaA7"),
      d = n("OWtl"),
      m = n("ndjw"),
      p = n("V0vl"),
      h = n("rvFo"),
      f = n("iQgv"),
      g = n("psi4"),
      v = n("dg06")
    let w = { kind: "available" },
      y = { kind: "unavailable", reason: "inspection-failed", worktreePath: null },
      x = "worktree_restore_required",
      b = "worktree_status_unavailable",
      A = (0, a.vU)(d.u, ({ conversationId: e, cwd: t, hostId: n }, { get: r }) => {
        let a = (0, v.d)(n)
        if (null == t)
          return {
            queryFn: async () => w,
            queryKey: [...a, "available", null],
            networkMode: "always",
            staleTime: h.D.FIVE_SECONDS,
          }
        let l = r(m.lE, { hostId: n })
        if (null == l.data)
          return {
            enabled: l.isError,
            queryFn: async () => y,
            queryKey: [...a, l.isError ? "codex-home-error" : "codex-home-loading", t],
            staleTime: h.D.FIVE_SECONDS,
          }
        if (!(0, s.n9x)(t, l.data.codexHome, l.data.worktreesSegment))
          return {
            queryFn: async () => w,
            queryKey: [...a, "available", t],
            networkMode: "always",
            staleTime: h.D.FIVE_SECONDS,
          }
        let c = (0, g.HG)(t, (0, i._9)(l.data))
        if (null == c)
          return {
            queryFn: async () => w,
            queryKey: [...a, "available-unmanaged-worktree", t],
            networkMode: "always",
            staleTime: h.D.FIVE_SECONDS,
          }
        let d = r(m.fm, n)
        if (d.id !== n)
          return {
            enabled: !1,
            queryFn: async () => y,
            queryKey: [...a, "host-config-loading", t],
            staleTime: h.D.FIVE_SECONDS,
          }
        let x = r(p.ty, e),
          b =
            x?.pending?.cwd === t ? x.pending.projectSources : x?.applied?.cwd === t ? x.applied.projectSources : null,
          A = r(m.FM, { hostId: n })
        if (null == b && null == A.data && !A.isError)
          return {
            enabled: !1,
            queryFn: async () => y,
            queryKey: [...a, "workspace-roots-loading", c],
            staleTime: h.D.FIVE_SECONDS,
          }
        let I = o()([...(b ?? []), ...(A.data?.roots ?? [])]).map(s.PUz),
          S = (0, s.DIv)(c)
        return {
          queryFn: async () => {
            let e
            try {
              let e = await u.appServices.workspaceFiles.getMetadata?.({ hostId: n, path: t })
              if (null != e)
                return "directory" === e.kind
                  ? w
                  : { kind: "unavailable", reason: "inspection-failed", worktreePath: S }
            } catch {}
            try {
              e = await (0, f.V)("git").request({
                method: "managed-worktree-state",
                params: {
                  candidateRoots: I,
                  cwd: t,
                  hostConfig: d,
                  operationSource: "worktree_restore_banner",
                  worktreePath: S,
                },
              })
            } catch (e) {
              throw e
            }
            switch (e.kind) {
              case "available":
                return w
              case "restorable":
              case "unavailable":
                return { ...e, worktreePath: S }
              case "gone":
                return { kind: "gone", worktreePath: S }
            }
          },
          queryKey: [...a, "inspect", t, S, I],
          networkMode: "always",
          refetchOnReconnect: "always",
          staleTime: h.D.FIVE_SECONDS,
        }
      }),
      I = (0, a.i1)(d.u, (e, { get: t }) => t(A, { conversationId: e, cwd: t(l.JN, e), hostId: t(l.qX, e) })),
      S = (0, a.i1)(d.u, (e, { get: t }) => {
        let n = t(I, e)
        return n.isError ? "unavailable" : null != n.data ? n.data.kind : "loading"
      })
    async function M(e, { conversationId: t, cwd: n, hostId: r }) {
      let o = e.query.snapshot(m.lE, { hostId: r }),
        a = o.getData()
      if (
        ("local" === r || null == a || e.queryClient.getQueryState(o.queryKey)?.isInvalidated
          ? (a = await o.fetch())
          : o.fetch().catch(() => void 0),
        !(0, s.n9x)(n, a.codexHome, a.worktreesSegment))
      )
        return w
      await e.query.getOrFetch(m.FM, { hostId: r }).catch(() => void 0)
      let i = { conversationId: t, cwd: (0, s.DIv)(n), hostId: r }
      return (await e.query.invalidate(A, i, { exact: !0 }), e.query.fetch(A, i))
    }
    async function C(e, t) {
      await Promise.all([
        e.query.invalidate(m.lE, { hostId: t }, { exact: !0 }),
        e.query.invalidate(m.FM, { hostId: t }, { exact: !0 }),
      ])
    }
    n.d(
      t,
      {},
      {
        B3: async function (e, t) {
          let n = await M(e, t)
          if ("unavailable" === n.kind) throw Error(b)
          if ("restorable" !== n.kind) return
          let r = e.get(m.fm, t.hostId)
          await (0, f.V)("git").request({
            method: "restore-worktree",
            params: {
              conversationId: t.conversationId,
              cwd: (0, s.DIv)(t.cwd),
              hostConfig: r,
              operationSource: "worktree_restore_banner",
              repoRoot: n.snapshot.repoRoot,
              worktreePath: n.worktreePath,
            },
          })
          let o = (0, c.W)(r)
          await Promise.all([
            e.query.invalidate(A, { ...t, cwd: (0, s.DIv)(t.cwd) }, { exact: !0 }),
            e.queryClient.invalidateQueries({ queryKey: (0, v.F)(o) }),
            e.queryClient.invalidateQueries({ queryKey: ["git", "metadata", o] }),
          ])
        },
        Bx: async function (e, { conversationId: t, cwd: n, hostId: r }) {
          let o
          try {
            o = await M(e, { conversationId: t, cwd: n, hostId: r })
          } catch {
            throw Error(b)
          }
          switch (o.kind) {
            case "available":
            case "gone":
              return
            case "restorable":
              throw Error(x)
            case "unavailable":
              throw Error(b)
          }
        },
        V4: b,
        aM: async function (e, { conversationId: t, cwd: n, hostId: r }) {
          return (await C(e, r), M(e, { conversationId: t, cwd: n, hostId: r }))
        },
        ae: I,
        c5: A,
        fX: "worktree_gone",
        j2: S,
        mb: x,
        u0: async function (e, t) {
          ;(await C(e, t), await e.queryClient.invalidateQueries({ queryKey: (0, v.d)(t) }))
        },
      },
    )
  },
  psi4(e, t, n) {
    var r = n("bnxy"),
      o = n("M9WK")
    n.d(
      t,
      { Cy: () => o.Cy, HG: () => o.HG, Xs: () => o.Xs },
      {
        _M: function (e) {
          if (!e) return null
          let t = (0, r.Fd)(e).replace(/\/+$/, ""),
            n = t.indexOf("/.git/worktrees/")
          if (-1 !== n) return t.slice(0, n)
          let o = "/.git"
          return t.endsWith(o) ? t.slice(0, -o.length) : null
        },
      },
    )
  },
}
//# sourceMappingURL=723410.56b974f189.js.map
