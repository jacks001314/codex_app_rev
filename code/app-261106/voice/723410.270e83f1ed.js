export const __rspack_esm_ids = [723410]
export const __webpack_modules__ = {
  m8L3(e, t, r) {
    r.d(t, {}, { C: "default", Y: "explicitRequestOnly" })
  },
  dsow(e, t, r) {
    var n = r("PkQL"),
      a = r("IhIa"),
      o = r("wTVm"),
      s = r("WFY2")
    function i(e) {
      let t = e.untrustedAppMessage
      return {
        prompt: [
          t?.text || e.prompt,
          t?.structuredContent == null ? null : JSON.stringify(t.structuredContent, null, 2),
          ...(e.mcpAppModelContextAttachments ?? []).map((e) =>
            [
              `## ${e.sourceName}`,
              (0, n.af)(e),
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
          ...(t?.imageUrls ?? []).map((e) => ({ id: (0, o.A)(), src: e })),
          ...(e.mcpAppModelContextAttachments ?? []).flatMap((e) =>
            (0, n.U1)(e).map((e) => ({ id: (0, o.A)(), src: e })),
          ),
        ],
      }
    }
    function l(e, t) {
      return { ...e, ...t, untrustedAppMessage: void 0, mcpAppModelContextAttachments: void 0 }
    }
    r.d(
      t,
      {},
      {
        Hh: i,
        TW: l,
        VR: async function ({ context: e, send: t, signal: r, requestConfirmation: n }) {
          r?.throwIfAborted()
          try {
            return await t(e)
          } catch (u) {
            if (null == n || !(0, a.Yb)(u)) throw u
            r?.throwIfAborted()
            let o = i(e)
            s.v.info("Waiting for app input approval", { safe: { mcpAppId: e.untrustedAppMessage?.sourceId } })
            let c = await n(o)
            return (
              r?.throwIfAborted(),
              s.v.info("Approved app input", { safe: { mcpAppId: e.untrustedAppMessage?.sourceId } }),
              t(l(e, { ...o, prompt: c }))
            )
          }
        },
      },
    )
  },
  qbxq(e, t, r) {
    var n = r("PkQL")
    function a(e) {
      let t = e.annotations?.audience
      return !t?.includes("assistant") || t.includes("user")
    }
    r.d(
      t,
      {},
      {
        Cc: function (e) {
          if ("resource_link" === e.type) return e.title?.trim() || e.name.trim() || null
          if ("resource" === e.type) return null
          let t = e._meta?.["openai/title"]
          return ("string" == typeof t && t.trim()) || null
        },
        Fn: a,
        Rn: function (e) {
          return (0, n.U1)(null == e.content ? e : { ...e, content: e.content.filter(a) })
        },
        s2: function (e, { showImages: t = !0 } = {}) {
          return null == e.content || e.content.some((e) => (t || "image" !== e.type) && a(e))
        },
      },
    )
  },
  YEpt(e, t, r) {
    var n = r("U6iU"),
      a = r("WFY2")
    r.d(
      t,
      {},
      {
        bj: "closed_agent_send_failed",
        hJ: function (e, t) {
          let r = t.trim()
          return 0 === r.length ? e : 0 === e.length || /\s$/.test(e) ? `${e}${r}` : `${e} ${r}`
        },
        lg: async function (e, t, r) {
          if (!t) return null
          try {
            return await (0, n.kB)({ workspaceRoot: e ? r : "" })
          } catch (e) {
            return (a.v.error("[Composer] failed to fetch ide-context", { safe: {}, sensitive: { error: e } }), null)
          }
        },
      },
    )
  },
  xKli(e, t, r) {
    var n = r("PkQL"),
      a = r("IhIa"),
      o = r("yJfM"),
      s = r("wTVm")
    function i(e, t = !1) {
      return (0, o.Ry)({ ...l(e), worktreePrompt: !1 }, t)
    }
    function l(e) {
      return { ...e, mcpAppModelContextAttachments: (0, n.g5)(e.mcpAppModelContextAttachments, !0).user }
    }
    r.d(
      t,
      {},
      {
        Fc: function (e, t = i(e)) {
          let r = (0, n.g5)(e.mcpAppModelContextAttachments, !0)
          return (0, a.yU)({
            prompt: t,
            message: e.untrustedAppMessage,
            sender: e.messageSender,
            modelContextAttachments: r.untrusted,
            reviewedMessageAttachments: r.user.filter((e) => "message" === e.kind),
            callId: `untrusted_input_${(0, s.A)()}`,
          })
        },
        NS: l,
        gx: function (e) {
          let t = e.worktreeRecovery
          if (!e.worktreePrompt && null == t) return e.additionalContext
          let r = t?.startingState ?? e.worktreeStartingState
          return {
            ...e.additionalContext,
            ...(r?.type === "working-tree"
              ? { codex_apps_worktree: { kind: "application", value: (0, o.FE)({ worktreeStartingState: r }) } }
              : {}),
            ...(null == t ? {} : { codex_apps_worktree_creation: { kind: "application", value: t.instructions } }),
          }
        },
        kv: i,
      },
    )
  },
  seW7(e, t, r) {
    var n = r("SRbQ"),
      a = r("ZEOU"),
      o = r.n(a),
      s = r("zMIV"),
      i = r.n(s),
      l = r("DBCl"),
      c = r("Vrnh"),
      u = r("vpsD"),
      d = r("kpNK"),
      m = r("ZIaK")
    r("pvRJ")
    var h = r("RAsy"),
      p = r("TAOo"),
      f = r("ZjPZ"),
      g = r("YLui"),
      v = r("RF9q"),
      w = r("wTVm"),
      y = r("Dgwo"),
      x = r("dSuPU"),
      b = r("tl5a"),
      I = r("MYVk"),
      S = r("vdpW"),
      k = r("gp55"),
      A = r("shRG"),
      M = r("m8L3"),
      C = r("dbK8"),
      _ = r("wCOm"),
      E = r("AqHb"),
      P = r("SPnB"),
      q = r("dF4Z"),
      T = r("Yn2j"),
      R = r("r0y7")
    r("KSXx")
    var j = r("MtDh"),
      D = r("JQtI"),
      F = r("qMca"),
      V = r("TYK1"),
      N = r("jiwy"),
      O = r("SjAp"),
      U = r("GaA7"),
      B = r("kfGJ"),
      L = r("D6SK"),
      W = r("PZWn"),
      z = r("TurB"),
      H = r("syw5"),
      K = r("YEpt"),
      Y = r("xKli"),
      $ = r("e1yv"),
      G = r("Oo9D"),
      Q = r("Ryoj"),
      X = r("Ld2s"),
      Z = r("VDZe")
    function J({
      context: e,
      cwd: t,
      text: r = e.prompt,
      persistedPrompt: n,
      messageId: a = (0, w.A)(),
      messageThreadId: o = e.messageThreadId,
      createdAt: s = Date.now(),
    }) {
      return {
        id: a,
        text: r,
        ...("markdown" === e.userMessageFormat && null != n && n !== e.prompt ? { editableMarkdown: n } : {}),
        context: { ...i()(e, "openingPromptForHistory", "executorSkillPick"), messageThreadId: o },
        cwd: t,
        createdAt: s,
        responsesapiClientMetadata: {
          source: "codex",
          message_submission_source: e.messageSubmissionSource,
          in_space: e.inSpace?.toString(),
        },
      }
    }
    async function ee(e, t) {
      let r = { ...e, clientUserMessageId: e.clientUserMessageId ?? e.restoreMessage?.id ?? (0, w.A)() },
        a = () => {
          if ((r.signal?.throwIfAborted(), r.isSubmissionCurrent?.() === !1)) throw new q.y()
        }
      ;(a(), (0, k.Q3)(r.scope, r.managerHostId, r.targetConversationId))
      let s = (0, y.V)(r.scope, r.managerHostId),
        i = await ei(
          r.scope,
          r.managerHostId,
          r.targetConversationId,
          r.restoreMessage?.writingBlockAdditionalContext === void 0,
        ),
        l = i?.ephemeral === !0 || i?.sideConversation === !0 || r.restoreMessage?.requiresExistingOwner === !0,
        u = r.restoreMessage?.writingBlockAdditionalContext
      void 0 === u && i?.resumeState === "resumed" && (u = (0, H.I)(r.targetConversationId, i.writingBlocks) ?? null)
      let m = o()({
          ...(r.restoreMessage ??
            J({
              context: r.context,
              cwd: r.cwd,
              messageId: r.clientUserMessageId,
              messageThreadId: r.messageThreadId,
            })),
          threadAccess: i?.threadAccess ?? r.restoreMessage?.threadAccess,
          submissionOptions: {
            useUserMessageAdmission:
              r.restoreMessage?.submissionOptions?.useUserMessageAdmission ??
              ((0, d.n)(i?.threadStartKind, i?.threadSource) && (0, x.S)(r.scope, r.managerHostId)),
            executionHostId: r.hostId,
            agentMode: r.agentMode,
            permissionProfileId: r.permissionProfileId,
            serviceTier: r.serviceTier,
            shouldSendPermissionOverrides: r.shouldSendPermissionOverrides,
            usePermissionSelection: r.usePermissionSelection,
            permissionSelection: r.permissionSelection,
            collaborationMode: r.context.collaborationMode ?? r.activeCollaborationMode,
            clientUserMessageId: r.clientUserMessageId,
          },
          writingBlockAdditionalContext: u,
        }),
        h = {
          ...m,
          responsesapiClientMetadata: (0, T.V)(r.scope, r.managerHostId, m.responsesapiClientMetadata),
          context: {
            ...(0, c.jA)(m.context),
            turnTrigger: r.turnTrigger,
            workspaceRoots: r.scope.get(b.m8, r.targetConversationId)?.slice() ?? m.context.workspaceRoots ?? [r.cwd],
          },
          multiUserMessageSender:
            void 0 === m.multiUserMessageSender
              ? await (0, R.tu)(r.scope, r.hostId, i?.threadAccess === "shared")
              : m.multiUserMessageSender,
        },
        p = t.editPosition?.serverSubmission
      return (
        p?.clientUserMessageId !== r.clientUserMessageId &&
          (await (0, G.gG)(r.scope, r.managerHostId, r.clientUserMessageId, r.context.userMessageFormat)),
        en({ ...r, conversation: i }, async () => {
          let e = { stack: [], error: void 0, hasError: !1 }
          try {
            let o = await (0, V.F)(r.scope, r.managerHostId, r.targetConversationId, i),
              c = () => {
                ;(o || es(r.scope, r.targetConversationId, i)) && (0, N.qo)(r.scope)
              },
              u = () => {
                ;(a(), c(), r.submissionLifecycle?.validate())
              },
              d = (0, n.mS)(e, await s.getTurnCoordinator(), !1),
              m = { hostId: r.hostId, threadId: r.targetConversationId },
              f = (0, n.mS)(
                e,
                null == r.onMessageAdded || es(r.scope, r.targetConversationId, i)
                  ? null
                  : (0, Q.c)(r.scope, m, r.clientUserMessageId, r.onMessageAdded),
                !1,
              ),
              g =
                null == f
                  ? void 0
                  : r.scope.watch(({ get: e }) => {
                      let t = e(S.fl, m)
                      ;(e(I.Ax, m), ("error" === t || "unavailable" === t) && f[Symbol.dispose]())
                    })
            try {
              let e = await (0, X.t)(r.scope, h.context, async (e) => {
                let n
                u()
                let a = e
                return (
                  l && null != r.prepareContext && ((n = Promise.resolve(r.prepareContext(a))), (a = await n), u()),
                  d.sendMessage(
                    {
                      conversationId: r.targetConversationId,
                      message: {
                        ...h,
                        requiresExistingOwner: !!l || void 0,
                        text: a === h.context ? h.text : a.prompt,
                        context: {
                          ...a,
                          mcpAppModelContextAttachments: a.mcpAppModelContextAttachments?.map((e) =>
                            "message" === e.kind ? e : { ...e, untrusted: !0 },
                          ),
                        },
                      },
                      ...t,
                      acceptLocally: t.acceptLocally && !l,
                      options: h.submissionOptions,
                    },
                    async (e, t) => {
                      ;(c(), (n = n ?? Promise.resolve(r.prepareContext?.(e.message.context) ?? e.message.context)))
                      let a = { ...e.message, context: await n }
                      c()
                      let s = (0, R.jD)({ ...e, message: a }, r.managerHostId),
                        i = await er(
                          {
                            ...r,
                            context: s.message.context,
                            activeCollaborationMode: e.message.submissionOptions?.collaborationMode,
                            permissionSelection: e.message.submissionOptions?.permissionSelection,
                            restoreMessage: s.message,
                          },
                          t,
                          o,
                        )
                      return (c(), (i.steer.restoreMessage = a), i)
                    },
                    null == r.submissionLifecycle
                      ? (f?.onMessageAdded ?? r.onMessageAdded)
                      : (e) => {
                          ;(r.submissionLifecycle?.onMessageAdded(e), (f?.onMessageAdded ?? r.onMessageAdded)?.(e))
                        },
                    async () => u(),
                    async () => {
                      ;(c(), r.submissionLifecycle?.validate())
                    },
                  )
                )
              })
              return (
                "queued" === e.status &&
                  null != p &&
                  (e.messageId === p.id || r.clientUserMessageId === p.clientUserMessageId) &&
                  (await (0, G.gG)(r.scope, r.managerHostId, p.clientUserMessageId, r.context.userMessageFormat, !0)),
                "sent" === e.status && "steer" === e.kind && O.j.abort(r.clientUserMessageId, "active_turn_steer"),
                await f?.displayed,
                e
              )
            } finally {
              g?.()
            }
          } catch (t) {
            ;((e.error = t), (e.hasError = !0))
          } finally {
            ;(0, n.hk)(e)
          }
        })
      )
    }
    function et(e) {
      return ee(e, { queueModeOverride: "send-now" })
    }
    async function er(e, t, n) {
      let a = e
      a.signal?.throwIfAborted()
      let o = a.context.worktreeRecovery
      if (o?.creationRequest != null) {
        if (
          o.hostId !== a.hostId ||
          o.threadId !== a.targetConversationId ||
          o.creationRequest.hostId !== a.hostId ||
          o.creationRequest.threadId !== a.targetConversationId
        )
          throw Error("Worktree recovery belongs to a different task or host.")
        let e = U.appServices.managedWorktrees
        if (null == e) throw Error("This host does not support managed worktree recovery.")
        let t = (await (0, Z.S)(e, { ...o.creationRequest, recoverOnly: !0 })).codex_apps_worktree_creation
        if (null == t) throw Error("Missing worktree recovery context.")
        let r = { ...a.context, worktreeRecovery: { ...o, instructions: t.value, creationRequest: void 0 } }
        ;((a = {
          ...a,
          context: r,
          restoreMessage: null == a.restoreMessage ? void 0 : { ...a.restoreMessage, context: r },
        }),
          a.signal?.throwIfAborted())
      }
      if (
        (0, g.sI)(a.context, a.hostId, a.scope.get(P.chatGptAuthenticatedAccountId$), "durable" === (0, E._)(a.hostId))
      )
        throw Error(g.fi)
      let s = await ei(
          a.scope,
          a.managerHostId,
          a.targetConversationId,
          a.restoreMessage?.writingBlockAdditionalContext === void 0,
        ),
        i = (s?.mode === "durable" && eo(s)) || (0, C.C)(a.hostId) || (0, C.C)(a.managerHostId),
        c = {
          ...a,
          conversation: s,
          isCloudFollowUp: i,
          inheritNativeWorkspacePermissions:
            !i &&
            null == a.context.workPermissions &&
            s?.mode !== "durable" &&
            !es(a.scope, a.targetConversationId, s) &&
            "projectless" !== a.scope.get(b.EL, a.targetConversationId),
        },
        d = await ("start" === t || a.restoreMessage?.submissionOptions?.useUserMessageAdmission === !0
          ? ea(c)
          : (async function ({
              scope: e,
              turnTrigger: t,
              clientUserMessageId: r,
              managerHostId: n,
              hostId: a,
              targetConversationId: o,
              agentMode: s,
              permissionProfileId: i,
              serviceTier: c,
              shouldSendPermissionOverrides: d,
              usePermissionSelection: m = !1,
              permissionSelection: g,
              activeCollaborationMode: w,
              restoreMessage: x,
              conversation: I,
              inheritNativeWorkspacePermissions: S,
            }) {
              let k = a !== B.fI,
                { cwd: M, context: C } = x,
                _ = C.workspaceRoots ?? e.get(b.m8, o) ?? [M],
                P = (0, y.V)(e, n)
              if (I?.isClosedSubagent) throw Error(K.bj)
              let q = C.collaborationMode ?? w,
                T = I
              if (I?.resumeState === "resuming" || null == I || I.needsResume) {
                let t = await P.resumeConversation(
                  {
                    conversationId: o,
                    threadAccess: I?.threadAccess ?? x.threadAccess,
                    model: null,
                    serviceTier: c,
                    reasoningEffort: null,
                    workspaceRoots: _,
                    useAppServerPermissionDefault: m,
                    inheritNativeWorkspacePermissions: S,
                    collaborationMode: q,
                  },
                  { readResumeInputs: (0, A.jQ)(e, n) },
                )
                if ("not-ready" === t.status) throw new u.uZ(t)
                T = await ei(e, n, o, void 0 === x.writingBlockAdditionalContext)
              }
              if ((0, l.ZJQ)(n) && T?.mode === "durable" && eo(T))
                return ea({
                  scope: e,
                  turnTrigger: t,
                  clientUserMessageId: r,
                  managerHostId: n,
                  hostId: a,
                  context: C,
                  targetConversationId: o,
                  cwd: M,
                  agentMode: s,
                  permissionProfileId: i,
                  serviceTier: c,
                  shouldSendPermissionOverrides: d,
                  usePermissionSelection: m,
                  permissionSelection: g,
                  activeCollaborationMode: w,
                  restoreMessage: x,
                  conversation: T,
                  isCloudFollowUp: !0,
                  inheritNativeWorkspacePermissions: !1,
                })
              let R = (0, p.K)(C.imageAttachments),
                j = (0, Y.Fc)(C, (0, Y.kv)(C, "durable" === (0, E._)(n))),
                D = [j.input, ...(0, $.v)(C, k, { shouldRestrictRemoteHostImageSize: !1 })],
                F = (0, h.Y)([...(0, f.E5)(C.fileAttachments, C.pastedTextAttachments), ...C.addedFiles, ...R])
              return {
                conversationId: o,
                executionHostId: a,
                requiresIdle: j.responseItems.length > 0,
                resume: {
                  conversationId: o,
                  threadAccess: T?.threadAccess ?? x.threadAccess,
                  model: null,
                  serviceTier: c,
                  reasoningEffort: null,
                  workspaceRoots: _,
                  useAppServerPermissionDefault: m,
                  inheritNativeWorkspacePermissions: S,
                  collaborationMode: q,
                },
                steer: {
                  input: D,
                  restoreMessage: { ...x, context: { ...C, turnTrigger: t } },
                  serviceTier: c,
                  attachments: F,
                  clientUserMessageId: r,
                  additionalContext: (0, v.AK)(
                    (0, Y.gx)(C),
                    void 0 !== x.writingBlockAdditionalContext
                      ? (x.writingBlockAdditionalContext ?? void 0)
                      : (0, H.I)(o, T?.writingBlocks),
                  ),
                },
              }
            })({ ...c, restoreMessage: a.restoreMessage ?? J({ context: a.context, cwd: a.cwd }) }))
      d.allowStartAfterNoActiveTurn = n ?? (await (0, V.F)(a.scope, a.managerHostId, a.targetConversationId, s))
      let { addSharedArtifactPageContext: m } = await r.e(309492).then(r.bind(r, "NPal"))
      return (await m(a.scope, d), a.signal?.throwIfAborted(), d)
    }
    async function en(e, t) {
      let r =
        void 0 === e.conversation ? await ei(e.scope, e.managerHostId, e.targetConversationId, !1) : e.conversation
      if (r?.mode === "durable" && eo(r)) {
        ;(0, N.qo)(e.scope)
        try {
          return await (0, j._P)(e.targetConversationId, () => t(!1))
        } catch (t) {
          throw ((0, N.Mo)(e.scope), t)
        }
      }
      return t(!1)
    }
    async function ea({
      scope: e,
      turnTrigger: t,
      managerHostId: r,
      hostId: n,
      context: a,
      targetConversationId: o,
      cwd: s,
      agentMode: i,
      permissionProfileId: c,
      serviceTier: u,
      shouldSendPermissionOverrides: d,
      usePermissionSelection: g = !1,
      permissionSelection: w,
      activeCollaborationMode: y,
      restoreMessage: x,
      clientUserMessageId: I,
      conversation: S,
      isCloudFollowUp: k,
      inheritNativeWorkspacePermissions: A,
      isQueuedReplay: C = !1,
    }) {
      let P = n !== B.fI
      if (S?.isClosedSubagent) throw Error(K.bj)
      let q = a.collaborationMode ?? y,
        R = eo(S),
        j = k ? s : (S?.cwd ?? s),
        D = a.workspaceRoots ?? e.get(b.m8, o) ?? [j]
      ;(n === B.fI && B.fI,
        null != S && R && (q = { ...S.latestCollaborationMode, mode: q?.mode ?? S.latestCollaborationMode.mode }),
        k || (await (0, z.Bx)(e, { conversationId: o, cwd: j, hostId: n })))
      let F = (0, p.K)(a.imageAttachments),
        V = (0, Y.Fc)(a, (0, Y.kv)(a, "durable" === (0, E._)(r))),
        N = [V.input, ...(0, $.v)(a, P, { shouldRestrictRemoteHostImageSize: !1 })],
        U = (0, h.Y)([...(0, f.E5)(a.fileAttachments, a.pastedTextAttachments), ...a.addedFiles, ...F]),
        G =
          a.fileAttachments.length +
          (a.uploadedFileAttachments?.length ?? 0) +
          (a.pastedTextAttachments?.length ?? 0) +
          a.addedFiles.filter(l.xwm).length,
        Q = es(e, o, S),
        X = a.workPermissions,
        Z = null != X,
        ee = !Z && g && !Q,
        et = !ee && (d || (g && Q)),
        er = Q ? "guardian-approvals" : (X?.mode ?? i),
        en = Z || ((et || w?.kind === "custom") && (null == w || Q)),
        ei =
          (Z && null == X.resolvedPermissions) ||
          (!Z && en && ("guardian-approvals" === er || "custom" === er)) ||
          (!ee && w?.kind === "custom")
            ? (0, _.Y$)(
                (await (0, _.ig)(e, r, { includeLayers: !1, cwd: j }, { priority: "critical", timeoutMs: 3e4 })).config,
              )
            : null,
        el = Q && S?.mode === "durable",
        ec = en
          ? (X?.resolvedPermissions ?? (0, l.$5i)(er, D, null != X && null != ei ? (0, W.mu)(X.defaults, ei) : ei))
          : null
      null == ec ||
        null == c ||
        Z ||
        Q ||
        ((ec.activePermissionProfile = { id: c, extends: null }), (ec.runtimeWorkspaceRoots = D))
      let eu =
          Z || ee || null == w || Q
            ? null
            : (0, l.URU)({ config: ei, permissionSelection: w, runtimeWorkspaceRoots: D }),
        ed =
          A &&
          (function (e, t, r, n, a) {
            if (null == n || null == r || "durable" === r.mode || r.primaryEnvironment?.environmentId !== "local")
              return !1
            if (a || (null != r.cwd && !(0, m.Pw)(r.primaryEnvironment.cwd, r.cwd))) return !0
            if (":workspace" !== n) return !1
            let o = e.get(b.h2, t)?.activePermissionProfile,
              s = void 0 === o ? e.get(b.we, t)?.activePermissionProfile : o
            return s?.id === ":workspace"
          })(e, o, S, eu?.permissions ?? ec?.activePermissionProfile?.id, C || x?.submissionIntent === "queue"),
        em = {
          request: {
            threadId: o,
            turnTrigger: t,
            responsesapiClientMetadata: (0, T.V)(e, r, x?.responsesapiClientMetadata),
            clientUserMessageId: I ?? x?.id,
            input: N,
            cwd: k ? s : void 0,
            model: null,
            effort: null,
            multiAgentMode: M.Y,
            serviceTier: u,
            ...(null == ec
              ? {}
              : {
                  approvalPolicy: ec.approvalPolicy,
                  approvalsReviewer: el ? "auto_review" : ec.approvalsReviewer,
                  ...(0, l.ZGB)(ec),
                  ...(null == ec.activePermissionProfile || ed ? {} : { runtimeWorkspaceRoots: (0, l.Xhp)(ec) }),
                }),
            ...(null == eu ? {} : { ...eu, ...(ed ? {} : { runtimeWorkspaceRoots: D }) }),
            collaborationMode: q,
          },
          context: {
            onRequestDispatched: null == I ? void 0 : (e) => O.j.markRequestDispatched(I, e),
            trace: null == I ? void 0 : O.j.getTrace(I),
            useUserMessageAdmission: x?.submissionOptions?.useUserMessageAdmission,
            restoreMessage: x,
            messageThreadId: x?.context.messageThreadId ?? a.messageThreadId,
            writingBlockContextPrepared: x?.writingBlockAdditionalContext !== void 0,
            localTurnMetadata: { fileAttachmentCount: G },
            commentAttachments: a.commentAttachments,
            useAppServerPermissionDefault: !Z && null == eu && !et,
            usePermissionSelection: ee,
            attachments: U,
            mcpAppModelContextAttachments: a.mcpAppModelContextAttachments,
            responseItems: V.responseItems,
            passiveContext: (0, L.QG)(e, r, o, a.mcpAppModelContextAttachments),
            ...{},
          },
        }
      em.request.additionalContext = (0, v.AK)(
        (0, Y.gx)(a),
        x?.writingBlockAdditionalContext !== void 0
          ? (x.writingBlockAdditionalContext ?? void 0)
          : (0, H.I)(o, S?.writingBlocks),
      )
      let eh = x?.submissionOptions?.useUserMessageAdmission === !0 || ((0, l.ZJQ)(r) && S?.mode === "durable" && R)
      return {
        conversationId: o,
        executionHostId: n,
        requiresIdle: V.responseItems.length > 0,
        resume: {
          conversationId: o,
          threadAccess: S?.threadAccess ?? x?.threadAccess,
          model: null,
          serviceTier: u,
          reasoningEffort: null,
          workspaceRoots: D,
          useAppServerPermissionDefault: g,
          inheritNativeWorkspacePermissions: A,
          collaborationMode: q,
        },
        start: em,
        steer: {
          ...(eh ? { userMessageAdmissionStart: em } : {}),
          input: N,
          restoreMessage: x ?? J({ context: a, cwd: s }),
          serviceTier: u,
          attachments: U,
          clientUserMessageId: I,
          additionalContext: em.request.additionalContext,
        },
      }
    }
    function eo(e) {
      return (0, D.N)(e?.threadStartKind, e?.threadSource)
    }
    function es(e, t, r) {
      return eo(r) || e.get(F.D0, t)
    }
    async function ei(e, t, r, a) {
      let o = { stack: [], error: void 0, hasError: !1 }
      try {
        let s = (0, n.mS)(o, await (0, y.V)(e, t).getFollowUpContext(r, a), !1)
        return null == s ? null : { ...s }
      } catch (e) {
        ;((o.error = e), (o.hasError = !0))
      } finally {
        ;(0, n.hk)(o)
      }
    }
    r.d(
      t,
      {},
      {
        E2: en,
        FB: er,
        Kv: es,
        St: function (e) {
          return et({ ...e, context: e.restoreMessage.context, cwd: e.restoreMessage.cwd })
        },
        bD: et,
        h: ee,
        jo: J,
      },
    )
  },
  e1yv(e, t, r) {
    var n = r("DBCl"),
      a = r("S8um"),
      o = r("e0Zo")
    r("XW6f")
    var s = r("LnAF"),
      i = r("ZjPZ"),
      l = r("Dgwo"),
      c = r("CfsC"),
      u = r("wCOm"),
      d = r("svjy"),
      m = r("PWXi"),
      h = r("Yn2j"),
      p = r("r0y7"),
      f = r("kfGJ"),
      g = r("PZWn"),
      v = r("xKli"),
      w = r("gfHD"),
      y = r("qcLg"),
      x = r("Wumz")
    function b(e, t, { shouldRestrictRemoteHostImageSize: r = !1 } = {}) {
      return (0, s.v)((0, v.NS)(e), t)
    }
    r.d(
      t,
      {},
      {
        l: async function ({
          scope: e,
          context: t,
          prompt: r,
          workspaceRoots: s,
          cwd: I,
          hostId: S,
          configHostId: k = S,
          threadCreationHostId: A,
          agentMode: M,
          permissionProfileId: C,
          permissionSelection: _,
          shouldSendPermissionOverrides: E,
          serviceTier: P,
          collaborationMode: q,
          memoryPreferences: T,
          workspaceKind: R = "project",
          projectlessOutputDirectory: j,
          projectAssignment: D,
        }) {
          let F,
            V = (0, n.JFB)(e.get(c.B, S), "threadPluginSelection")
          if (!V && (t.disabledPluginIds?.length ?? 0) > 0)
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
            { daybreakEnabled: O, apiKeyIdentityToRecheck: U } = (0, w.V3)(e, S, { threadCreationHostId: A }),
            [{ config: B }, L] = await Promise.all([
              (0, l.V)(e, k).sendRequest("config/read", { includeLayers: !1, cwd: I }, { priority: "critical" }),
              (0, p.tu)(e, A, !1),
            ]),
            W = (0, u.Y$)(B),
            z = !t.cloudThreadPrototype && (W.model_provider ?? "openai") === "openai"
          if (z && null != U && (!0 !== O || !e.get(y.dK, S) || !(0, x.j)(e.get(x.B), U))) throw (0, w.FH)(e, !0)
          ;(null != t.firstTurnReasoningEffort && (F = { ...F, model_reasoning_effort: t.firstTurnReasoningEffort }),
            null != t.elicitationPluginIds &&
              t.elicitationPluginIds.length > 0 &&
              (F = {
                ...F,
                [a.F2]: !0,
                "features.auth_elicitation": !0,
                "features.tool_suggest": !0,
                "tool_suggest.discoverables": t.elicitationPluginIds.map((e) => ({ type: "plugin", id: e })),
              }))
          let H = b(t, S !== f.fI || !0 === t.cloudThreadPrototype, { shouldRestrictRemoteHostImageSize: !1 }),
            K = (0, v.Fc)({ ...t, messageSender: L ?? void 0 }, null != L ? (0, o.Y5)(r, L) : r),
            Y = [K.input, ...(t.cloudThreadPrototype ? H.filter((e) => "localImage" !== e.type) : H)],
            $ =
              null != _
                ? { permissionSelection: _ }
                : { agentMode: M, permissionProfileId: C, shouldSendPermissionOverrides: E }
          return (
            null != t.workPermissions &&
              ((W = (0, g.mu)(t.workPermissions.defaults, W)),
              ($ = { agentMode: t.workPermissions.mode, permissionProfileId: null, shouldSendPermissionOverrides: !0 }),
              null != W.web_search && (F = { ...F, web_search: W.web_search })),
            {
              input: Y,
              responseItems: K.responseItems,
              turnTrigger: t.turnTrigger ?? "composer",
              responsesapiClientMetadata: (0, h.V)(e, A, {
                message_submission_source: t.messageSubmissionSource,
                in_space: t.inSpace?.toString(),
              }),
              disabledPluginIds: V ? t.disabledPluginIds : void 0,
              commentAttachments: t.commentAttachments,
              mcpAppModelContextAttachments: t.mcpAppModelContextAttachments,
              workspaceRoots: s,
              cwd: I,
              fileAttachments: (0, i.E5)(t.fileAttachments, t.pastedTextAttachments),
              uploadedFileAttachmentCount:
                (t.uploadedFileAttachments?.length ?? 0) +
                (t.pastedTextAttachments?.filter(({ upload: e }) => null != e).length ?? 0),
              addedFiles: t.addedFiles,
              ...$,
              model: null,
              serviceTier: P,
              daybreakEnabled: z ? O : void 0,
              reasoningEffort: t.firstTurnReasoningEffort ?? N?.settings.reasoning_effort ?? W.model_reasoning_effort,
              collaborationMode: N,
              config: W,
              configOverrides: null == t.firstTurnConfigOverrides ? F : { ...t.firstTurnConfigOverrides, ...F },
              memoryPreferences: T,
              requiresThreadReferences: (t.threadReferences?.length ?? 0) > 0,
              additionalContext: (0, v.gx)(t),
              additionalDeveloperInstructions:
                [t.additionalDeveloperInstructions, t.libraryFileCreation ? m.z : void 0]
                  .filter(Boolean)
                  .join("\n\n") || void 0,
              workspaceKind: R,
              projectAssignment: D,
              ...("projectless" === R ? { projectlessOutputDirectory: j } : {}),
            }
          )
        },
        v: b,
      },
    )
  },
  Oo9D(e, t, r) {
    var n = r("HVBu"),
      a = r.n(n),
      o = r("zTeN"),
      s = r("DBCl"),
      i = r("ASxG"),
      l = r("vLsY"),
      c = r("OWtl"),
      u = r("RxZZ"),
      d = r("WFY2")
    let m = i.enum(["plain", "markdown"]),
      h = (0, o.un)(c.u, ({ get: e }) => (0, u.CN)(e, s.Szl.composerPlainTextMode)),
      p = a()(async () => {
        let { default: e } = await r.e(294722).then(r.bind(r, "DMTH")),
          t = new e("codex-local-user-message-formats")
        return (t.version(1).stores({ formats: "" }), t.table("formats"))
      }),
      f = (0, o.vU)(c.u, ({ hostId: e, clientUserMessageId: t }) => ({
        queryKey: ["local-user-message-format", e, t],
        queryFn: async () => {
          let r = await p(),
            n = await r.get([e, t])
          return m.safeParse(n).data ?? null
        },
        networkMode: "always",
        staleTime: 1 / 0,
        retry: !1,
      }))
    r.d(
      t,
      {},
      {
        Ds: h,
        bs: f,
        bv: async function (e, t, r) {
          return null != r.context.userMessageFormat
            ? r.context.userMessageFormat
            : ((await e.query.fetch(f, { hostId: t, clientUserMessageId: (0, s.sx6)(r) }).catch(() => null)) ?? void 0)
        },
        gG: async function (e, t, r, n, a = !1) {
          if (null == r || null == n) return
          let o = e.query.snapshot(f, { hostId: t, clientUserMessageId: r })
          try {
            let e = await p()
            ;(await e.put(n, [t, r]), a && (0, l.G)(o.queryKey))
          } catch (e) {
            d.v.warning("Could not save local user message format", { safe: {}, sensitive: { error: e } })
          }
          ;(await o.cancel(), o.setData(n))
        },
      },
    )
  },
  lICN(e, t, r) {
    var n = r("zTeN"),
      a = r("PkQL"),
      o = r("IhIa"),
      s = r("V3rO"),
      i = r("qbxq"),
      l = r("TSib"),
      c = r("ipIJ")
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
          let { responseItems: r } = (0, o.yU)({
            prompt: "",
            modelContextAttachments: t.attachments,
            callId: `untrusted_input_${crypto.randomUUID()}`,
          })
          ;(await e(r),
            (0, c.EQ)(t.source, t.attachments),
            null != this.source && this.source !== t.source && (0, c.EQ)(this.source, t.attachments))
        } finally {
          this.claims.delete(t)
        }
      }
      claim({ hiddenOnly: e = !1 } = {}) {
        let t = this.source
        if (null == t) throw Error("The context composer is unavailable")
        let r = t
            .get(l.ib)
            .filter(
              (t) =>
                "context" === t.kind &&
                (!e || !(0, i.s2)(t)) &&
                !Array.from(this.claims).some((e) => e.attachments.some((e) => (0, a.F_)(t, e))),
            ),
          n = { source: t, attachments: r }
        return (this.claims.add(n), n)
      }
    }
    let d = (0, n.T1)(s.l7, (e) => new u())
    r.d(
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
  Ld2s(e, t, r) {
    var n = r("IhIa"),
      a = r("X6Vn"),
      o = r("dsow")
    class s extends Error {}
    r.d(
      t,
      {},
      {
        e: s,
        t: async function (e, t, i) {
          let l
          try {
            return await i(t)
          } catch (e) {
            if (!(0, n.Yb)(e) || null != t.untrustedAppMessage || (t.mcpAppModelContextAttachments?.length ?? 0) === 0)
              throw e
          }
          let { McpAppFollowUpConfirmationDialog: c } = await Promise.all([
            r.e(74692),
            r.e(198336),
            r.e(423550),
            r.e(96897),
          ]).then(r.bind(r, "v7ut"))
          if ((0, a.oY)(e, c)) throw new s()
          let u = (0, o.Hh)(t),
            d = await new Promise((t, r) => {
              ;((0, a.qf)(e, c, {
                confirmation: {
                  prompt: u.prompt,
                  imageUrls: u.imageAttachments.map((e) => e.src),
                  onConfirm: (r) => {
                    ;(t(r), (0, a.Oo)(e, c))
                  },
                  onCancel: () => {
                    ;((0, a.Oo)(e, c), r(new s()))
                  },
                },
              }),
                (l = e.watch((e) => {
                  ;(0, a.oY)(e, c) || r(new s())
                })))
            }).finally(() => l?.())
          return i((0, o.TW)(t, { ...u, prompt: d }))
        },
      },
    )
  },
  VDZe(e, t, r) {
    r.d(
      t,
      {},
      {
        S: async function (e, t) {
          let r
          if (null == e) throw Error("This host does not support managed worktree creation.")
          let n = await e.createForThread(t)
          switch (n.type) {
            case "pending":
              r =
                "The worktree is being created asynchronously. Use get_worktree_creation_status with this operationId to check progress. Begin planning and read-only investigation while creation completes; do not edit files until the new checkout is ready. Once ready, use worktreeWorkspaceRoot for task commands and edits. If status is missing or expired, inspect this task's attachments before recovery. Do not repeat create_worktree."
              break
            case "created":
              r =
                "Use worktreeWorkspaceRoot for all task shell commands and edits. Do not create another worktree. If registrationError is present, recover attachment with attach_worktree using these paths; do not rerun creation or setup during attachment recovery."
              break
            case "error":
              r =
                "Creation failed. Report this blocker; do not edit the source checkout or automatically retry creation. Check task attachments before any user-requested recovery."
          }
          return (
            "error" !== n.type &&
              (r +=
                " If setupError is present in the final result, report the setup failure and keep the checkout; do not automatically retry setup or choose another environment."),
            {
              codex_apps_worktree_creation: {
                kind: "application",
                value: `# Worktree creation status:
${JSON.stringify(n).replaceAll("#", "\\u0023")}
${r}
`,
              },
            }
          )
        },
        d: function ({ hostId: e, threadId: t, requestId: r, startingState: n, environmentConfigPath: a }) {
          return {
            hostId: e,
            threadId: t,
            requestId: r,
            origin: "composer",
            allowAsync: !0,
            ref: n?.type === "working-tree" ? "HEAD" : (n?.remoteRef ?? n?.branchName ?? null),
            name: null,
            existingPath: null,
            environmentConfigPath: a ?? null,
          }
        },
      },
    )
  },
  PWXi(e, t, r) {
    r.d(
      t,
      {},
      {
        z: "The user started this task from ChatGPT Library to create a file. Use the available Library skill or Library access method to save each completed user-facing document, spreadsheet, presentation, or PDF to their ChatGPT Library. Create one Library file for each new deliverable. If the same deliverable is edited later, preserve its Library file identity and update the existing file instead of creating a duplicate.",
      },
    )
  },
  Yn2j(e, t, r) {
    var n = r("WiNP")
    r.d(
      t,
      {},
      {
        V: function (e, t, r) {
          let a,
            o = "electron"
          return (
            (o = "desktop_app"),
            "local" === t && (a = e.get(n.kL, t) ? "thread_attachment" : "true"),
            { source: "codex", client_type: o, ...r, browser_preview_history_requested: a }
          )
        },
      },
    )
  },
  Eo5f(e, t, r) {
    r.d(t, { X: () => a })
    var n = r.p + "assets/orbit-ringing.02a31cd5e8.wav"
    function a() {
      let e, t
      try {
        e = new Audio(n)
      } catch {
        return () => {}
      }
      let r = () => {
          ;(clearTimeout(t), (e.onended = null), (e.onerror = null), e.pause())
        },
        a = () => {
          try {
            e.play().catch(r)
          } catch {
            r()
          }
        }
      return (
        (e.onended = () => {
          t = setTimeout(a, 3e3)
        }),
        (e.onerror = r),
        a(),
        r
      )
    }
  },
  KUNU(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57"),
      s = r("zd8w"),
      i = r("tsSe"),
      l = r("IlRO")
    r.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            c,
            u,
            d,
            m,
            h,
            p,
            f,
            g,
            v,
            w,
            y,
            x,
            b,
            I,
            S,
            k,
            A,
            M,
            C,
            _ = (0, a.c)(73),
            {
              className: E,
              glowEnabled: P,
              onDraw: q,
              onRenderError: T,
              onStateSample: R,
              paletteIndex: j,
              placement: D,
              presentation: F,
              presentationAnchorRef: V,
              phase: N,
              previewAudioLevel: O,
              previewTimeMs: U,
              subscribeToAudio: B,
              voiceActivity: L,
            } = e,
            W = void 0 === P || P,
            z = void 0 === j ? 0 : j,
            H = void 0 === F ? "overlay" : F,
            K = void 0 === O ? 0 : O,
            Y = void 0 === B ? i.NY : B,
            [$, G] = (0, s.useState)(!1),
            Q = (0, s.useRef)(null),
            X = (0, s.useRef)(null),
            Z = (0, s.useRef)(null),
            J = (0, s.useRef)(null)
          ;(_[0] !== U ? ("live" !== U && (t = U), (_[0] = U), (_[1] = t)) : (t = _[1]),
            _[2] !== z || _[3] !== N || _[4] !== K || _[5] !== t || _[6] !== L
              ? ((c = { paletteIndex: z, phase: N, previewAudioLevel: K, previewTimeMs: t, voiceActivity: L }),
                (_[2] = z),
                (_[3] = N),
                (_[4] = K),
                (_[5] = t),
                (_[6] = L),
                (_[7] = c))
              : (c = _[7]))
          let ee = (0, s.useRef)(c)
          _[8] !== q || _[9] !== H || _[10] !== K || _[11] !== t
            ? ((u = (e) => {
                "preview" === H || null != t || K > 0 || q?.(e)
              }),
              (_[8] = q),
              (_[9] = H),
              (_[10] = K),
              (_[11] = t),
              (_[12] = u))
            : (u = _[12])
          let et = (0, s.useEffectEvent)(u)
          _[13] !== R || _[14] !== H || _[15] !== K || _[16] !== t
            ? ((d = (e) => {
                "preview" !== H && null == t && 0 === K && R?.(e)
              }),
              (_[13] = R),
              (_[14] = H),
              (_[15] = K),
              (_[16] = t),
              (_[17] = d))
            : (d = _[17])
          let er = (0, s.useEffectEvent)(d)
          _[18] !== T
            ? ((m = () => {
                ;(G(!0), T?.())
              }),
              (_[18] = T),
              (_[19] = m))
            : (m = _[19])
          let en = (0, s.useEffectEvent)(m)
          _[20] !== D || _[21] !== V
            ? ((h = (e) => {
                ;((X.current = e), (null == e || e.dataset.avatarOverlayPlacement === D) && V?.(e, e?.parentElement))
              }),
              (_[20] = D),
              (_[21] = V),
              (_[22] = h))
            : (h = _[22])
          let ea = h
          ;(_[23] !== et || _[24] !== en || _[25] !== er || _[26] !== $ || !1 !== _[27] || _[28] !== H
            ? ((p = () => {
                if ($) return
                let e = X.current,
                  t = Z.current,
                  n = e?.parentElement
                if (null == e || null == t || null == n) return
                let a = !1,
                  o = null,
                  s = null,
                  i = () => {
                    let r = String(Math.max(1, Math.floor(Math.min(e.clientWidth, e.clientHeight)))) + "px"
                    ;((t.style.width = r), (t.style.height = r))
                  }
                return (
                  i(),
                  "u" > typeof ResizeObserver && (s = new ResizeObserver(i)).observe(e),
                  (async () => (await r.e(317638).then(r.bind(r, "HNEj"))).HorizonVoiceOrbController)()
                    .then((e) => {
                      var r, o
                      let s, i
                      return a
                        ? null
                        : e.create(t, {
                            displayScale:
                              ((r = n),
                              (o = t),
                              (s = Math.max(1, Math.min(r.clientWidth, r.clientHeight))),
                              (i = Math.max(1, Math.min(o.clientWidth || s + 40, o.clientHeight || s + 40))),
                              Math.min(1, s / i)),
                            onDraw: (e) => {
                              a || et(e)
                            },
                            onRenderError: () => {
                              a || en()
                            },
                            onStateSample: void 0,
                            presentation: H,
                          })
                    })
                    .then((e) => {
                      a
                        ? e?.dispose()
                        : null != e && ((o = e), (Q.current = e), e.setAudioLevels(J.current), e.setInputs(ee.current))
                    })
                    .catch(() => {
                      a || en()
                    }),
                  () => {
                    ;((a = !0), s?.disconnect(), o?.dispose(), (Q.current = null))
                  }
                )
              }),
              (_[23] = et),
              (_[24] = en),
              (_[25] = er),
              (_[26] = $),
              (_[27] = !1),
              (_[28] = H),
              (_[29] = p))
            : (p = _[29]),
            _[30] !== $ || !1 !== _[31] || _[32] !== H
              ? ((f = [$, !1, H]), (_[30] = $), (_[31] = !1), (_[32] = H), (_[33] = f))
              : (f = _[33]),
            (0, s.useLayoutEffect)(p, f),
            _[34] !== z || _[35] !== N || _[36] !== K || _[37] !== t || _[38] !== L
              ? ((g = () => {
                  let e = { paletteIndex: z, phase: N, previewAudioLevel: K, previewTimeMs: t, voiceActivity: L }
                  ;((ee.current = e), Q.current?.setInputs(e))
                }),
                (_[34] = z),
                (_[35] = N),
                (_[36] = K),
                (_[37] = t),
                (_[38] = L),
                (_[39] = g))
              : (g = _[39]),
            _[40] !== z || _[41] !== N || _[42] !== K || _[43] !== t || _[44] !== L
              ? ((v = [z, N, K, t, L]), (_[40] = z), (_[41] = N), (_[42] = K), (_[43] = t), (_[44] = L), (_[45] = v))
              : (v = _[45]),
            (0, s.useEffect)(g, v))
          let eo = !$ && "inactive" !== N
          ;(_[46] !== eo || _[47] !== Y
            ? ((w = () => {
                if (!eo) {
                  ;((J.current = null), Q.current?.setAudioLevels(null))
                  return
                }
                return Y((e) => {
                  ;((J.current = e), Q.current?.setAudioLevels(e))
                })
              }),
              (y = [eo, Y]),
              (_[46] = eo),
              (_[47] = Y),
              (_[48] = w),
              (_[49] = y))
            : ((w = _[48]), (y = _[49])),
            (0, s.useEffect)(w, y),
            _[50] !== D
              ? ((x = (0, o.A)(
                  "pointer-events-none absolute block h-[calc(100%+40px)] w-[calc(100%+40px)] max-w-none",
                  "center" === D
                    ? "-top-5 -left-5"
                    : [D.endsWith("end") ? "right-0" : "left-0", D.startsWith("top") ? "bottom-0" : "top-0"],
                )),
                (_[50] = D),
                (_[51] = x))
              : (x = _[51]))
          let es = x
          _[52] !== $ || _[53] !== z
            ? ((b = $ ? (0, l.V)(z) : null), (_[52] = $), (_[53] = z), (_[54] = b))
            : (b = _[54])
          let ei = b
          ;(_[55] !== W || _[56] !== z
            ? ((I = W ? `drop-shadow(0 0 4px color-mix(in srgb, ${(0, l.P)(z)} 55%, transparent))` : void 0),
              (_[55] = W),
              (_[56] = z),
              (_[57] = I))
            : (I = _[57]),
            _[58] !== I ? ((S = { filter: I }), (_[58] = I), (_[59] = S)) : (S = _[59]))
          let el = S
          return (
            _[60] !== E
              ? ((k = (0, o.A)("codex-avatar-root relative h-full w-full", E)), (_[60] = E), (_[61] = k))
              : (k = _[61]),
            _[62] !== el || _[63] !== ei
              ? ((A =
                  null != ei
                    ? (0, n.jsx)("div", {
                        className:
                          "absolute top-1/2 left-1/2 size-[50px] max-h-[calc(100%-40px)] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                        "data-testid": "voice-static-orb",
                        style: {
                          background: `linear-gradient(155deg, ${ei.fallbackColors[0]}, ${ei.fallbackColors[1]} 46%, ${ei.fallbackColors[2]})`,
                        },
                      })
                    : (0, n.jsx)("canvas", {
                        ref: Z,
                        className:
                          "pointer-events-none absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2",
                        style: el,
                      })),
                (_[62] = el),
                (_[63] = ei),
                (_[64] = A))
              : (A = _[64]),
            _[65] !== es || _[66] !== D || _[67] !== ea || _[68] !== A
              ? ((M = (0, n.jsx)("div", { ref: ea, className: es, "data-avatar-overlay-placement": D, children: A })),
                (_[65] = es),
                (_[66] = D),
                (_[67] = ea),
                (_[68] = A),
                (_[69] = M))
              : (M = _[69]),
            _[70] !== k || _[71] !== M
              ? ((C = (0, n.jsx)("div", {
                  "aria-hidden": "true",
                  className: k,
                  "data-avatar-mascot": "true",
                  "data-chromatic": "ignore",
                  "data-realtime-voice-orb": !0,
                  "data-testid": "avatar-overlay-voice-orb",
                  children: M,
                })),
                (_[70] = k),
                (_[71] = M),
                (_[72] = C))
              : (C = _[72]),
            C
          )
        },
      },
    )
  },
  IlRO(e, t, r) {
    var n = r("nBOj")
    let a = [n.l.blue, n.l.blue, n.l.green, n.l.yellow, n.l.pink, n.l.orange, n.l.purple, n.l.black],
      o = new Map()
    function s(e) {
      return a[e] ?? n.l.blue
    }
    r.d(
      t,
      {},
      {
        P: s,
        V: function (e) {
          let t,
            r,
            n,
            a,
            i,
            l,
            c,
            u = s(e),
            d = o.get(u)
          if (null != d) return d
          let m =
            ((t = getComputedStyle(document.documentElement)
              .getPropertyValue(u.slice(4, -1))
              .trim()
              .replace(/^#([\da-f])([\da-f])([\da-f])$/i, "#$1$1$2$2$3$3")),
            (n = (r = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16))).map((e) => e / 255)),
            (i = (a = r.every((e) => 0 === e) ? [0.08, 0.08, 0.08] : n).map((e) => Math.max(0, e + 0.9465623 - 1))),
            (l = a.map((e) => {
              let t = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)
              return e + 0.79764306 * (t - e)
            })),
            (c = a.map((e) => 1 - (1 - e) * (1 - 0.63704175))),
            {
              accentColor: [...n, 1],
              fallbackColors: [
                `rgb(${i.map((e) => 255 * e).join(" ")})`,
                `rgb(${l.map((e) => 255 * e).join(" ")} / 98%)`,
                `rgb(${c.map((e) => 255 * e).join(" ")} / 98%)`,
              ],
            })
          return (o.set(u, m), m)
        },
      },
    )
  },
  atrN(e, t, r) {
    r.d(t, { W: () => f })
    var n = r("ABep"),
      a = r("QosV"),
      o = r("on57"),
      s = r("K45w"),
      i = r("W5pg"),
      l = r("LIss"),
      c = r("zd8w")
    let u = 2 * Math.PI * (1088 / 520),
      d = 0.7332121111929343 * u,
      m = Math.atan(d / (0.68 * u)) / d,
      h = (1.06 - 1) / ((Math.exp(-0.68 * u * m) * Math.sin(d * m)) / d)
    var p = r("Mbqw")
    function f(e) {
      let t,
        r,
        m,
        f,
        y,
        x,
        b,
        I,
        S,
        k,
        A,
        M,
        C,
        _,
        E,
        P,
        q,
        T,
        R,
        j,
        D = (0, a.c)(63),
        { isConnecting: F, onHandoffComplete: V, orb: N, orbDiameter: O, reduceMotion: U } = e,
        B = (0, c.useRef)(null),
        L = (0, c.useRef)(!1),
        W = (0, c.useRef)(!1),
        z = (0, s.d)(+!F),
        H = (0, s.d)(50)
      D[0] !== z || D[1] !== O || D[2] !== H
        ? ((t = () =>
            (function (e, t, r) {
              let n = Math.max(0, e)
              if (n >= 1125) return r
              if (n <= 325) {
                let e = n / 325
                return t + e ** 2 * (3 - 2 * e) * (12 - t)
              }
              let a = 12 / r
              if (n <= 520) {
                let e = Math.max(1 - a, 1e-4),
                  o = (((6 * (t / r - a)) / 0.10562500000000001) * (0.038025 / e)) / 2,
                  s = 1 - o,
                  i = (0.195 * h) / e - 2 * o - 3 * s,
                  l = ((-1.36 * u * h * 0.038025) / e - 2 * o - 6 * s - 6 * i) / 2,
                  c = i - 2 * l,
                  d = (n - 325) / 195
                return r * (a + (1 - a) * (d ** 2 * (l * d ** 3 + c * d ** 2 + (s - l - c) * d + o)))
              }
              let o = (n - 520) / 1e3
              return r * (1 + (h / d) * Math.exp(-0.68 * u * o) * Math.sin(d * o))
            })(1125 * z.get(), H.get(), O)),
          (D[0] = z),
          (D[1] = O),
          (D[2] = H),
          (D[3] = t))
        : (t = D[3])
      let K = (0, i.G)(t),
        Y = (0, i.G)(z, v),
        $ = (0, i.G)(Y, g)
      D[4] !== O ? ((r = (e) => e / O), (D[4] = O), (D[5] = r)) : (r = D[5])
      let G = (0, i.G)(K, r)
      D[6] !== K || D[7] !== H ? ((m = () => K.get() / H.get()), (D[6] = K), (D[7] = H), (D[8] = m)) : (m = D[8])
      let Q = (0, i.G)(m)
      D[9] !== z || D[10] !== F || D[11] !== V || D[12] !== U
        ? ((f = () => {
            F || (!U && 1 > z.get()) || L.current || ((L.current = !0), V?.())
          }),
          (D[9] = z),
          (D[10] = F),
          (D[11] = V),
          (D[12] = U),
          (D[13] = f))
        : (f = D[13])
      let X = f,
        Z = (0, c.useEffectEvent)(X)
      ;(D[14] !== Z || D[15] !== F
        ? ((y = () => {
            if (F) return
            let e = requestAnimationFrame(Z)
            return () => {
              cancelAnimationFrame(e)
            }
          }),
          (D[14] = Z),
          (D[15] = F),
          (D[16] = y))
        : (y = D[16]),
        D[17] !== F ? ((x = [F]), (D[17] = F), (D[18] = x)) : (x = D[18]),
        (0, c.useEffect)(y, x),
        D[19] !== O ? ((b = { height: O, width: O }), (D[19] = O), (D[20] = b)) : (b = D[20]))
      let J = U ? p.TU : p.Eq,
        ee = F && "pointer-events-none"
      ;(D[21] !== ee ? ((I = (0, o.A)("absolute inset-0", ee)), (D[21] = ee), (D[22] = I)) : (I = D[22]),
        D[23] !== Y || D[24] !== G
          ? ((S = { opacity: Y, scale: G }), (D[23] = Y), (D[24] = G), (D[25] = S))
          : (S = D[25]),
        D[26] !== N || D[27] !== I || D[28] !== S
          ? ((k = (0, n.jsx)(l.P.div, { className: I, style: S, children: N })),
            (D[26] = N),
            (D[27] = I),
            (D[28] = S),
            (D[29] = k))
          : (k = D[29]),
        D[30] !== $ || D[31] !== Q
          ? ((A = { opacity: $, scale: Q }), (D[30] = $), (D[31] = Q), (D[32] = A))
          : (A = D[32]),
        D[33] !== U ? ((M = (0, n.jsx)(w, { ref: B, reduceMotion: U })), (D[33] = U), (D[34] = M)) : (M = D[34]),
        D[35] !== A || D[36] !== M
          ? ((C = (0, n.jsx)(l.P.div, {
              className: "pointer-events-none absolute inset-0 flex items-center justify-center",
              style: A,
              children: M,
            })),
            (D[35] = A),
            (D[36] = M),
            (D[37] = C))
          : (C = D[37]))
      let et = +!F
      ;(D[38] !== et ? ((_ = { opacity: et }), (D[38] = et), (D[39] = _)) : (_ = D[39]),
        D[40] !== F || D[41] !== H
          ? ((E = () => {
              let e = B.current
              if (F) {
                ;((W.current = !1), (L.current = !1), null != e && (e.style.animationPlayState = ""))
                return
              }
              if (((W.current = !0), null == e)) return
              let t = e.getBoundingClientRect().width
              ;(t > 0 && H.set(t), (e.style.animationPlayState = "paused"))
            }),
            (D[40] = F),
            (D[41] = H),
            (D[42] = E))
          : (E = D[42]),
        D[43] !== X || D[44] !== F || D[45] !== U
          ? ((P = () => {
              F || U || !W.current || ((W.current = !1), X())
            }),
            (D[43] = X),
            (D[44] = F),
            (D[45] = U),
            (D[46] = P))
          : (P = D[46]),
        D[47] !== z ? ((q = { opacity: z }), (D[47] = z), (D[48] = q)) : (q = D[48]))
      let er = U ? 0 : F ? 0.325 : 1.125
      return (
        D[49] !== er ? ((T = { duration: er, ease: "linear" }), (D[49] = er), (D[50] = T)) : (T = D[50]),
        D[51] !== _ || D[52] !== E || D[53] !== P || D[54] !== q || D[55] !== T
          ? ((R = (0, n.jsx)(l.P.span, {
              "aria-hidden": !0,
              animate: _,
              className: "pointer-events-none absolute size-0",
              initial: !1,
              onAnimationStart: E,
              onAnimationComplete: P,
              style: q,
              transition: T,
            })),
            (D[51] = _),
            (D[52] = E),
            (D[53] = P),
            (D[54] = q),
            (D[55] = T),
            (D[56] = R))
          : (R = D[56]),
        D[57] !== k || D[58] !== C || D[59] !== R || D[60] !== b || D[61] !== J
          ? ((j = (0, n.jsxs)(l.P.div, {
              "aria-hidden": !0,
              className: "relative flex items-center justify-center",
              initial: !1,
              animate: b,
              transition: J,
              children: [k, C, R],
            })),
            (D[57] = k),
            (D[58] = C),
            (D[59] = R),
            (D[60] = b),
            (D[61] = J),
            (D[62] = j))
          : (j = D[62]),
        j
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
        r,
        s = (0, a.c)(5),
        { ref: i, reduceMotion: l } = e,
        c = !l && "pulsing-dot"
      return (
        s[0] !== c ? ((t = (0, o.A)("size-[50px] rounded-full bg-text", c)), (s[0] = c), (s[1] = t)) : (t = s[1]),
        s[2] !== i || s[3] !== t
          ? ((r = (0, n.jsx)("div", { ref: i, className: t })), (s[2] = i), (s[3] = t), (s[4] = r))
          : (r = s[4]),
        r
      )
    }
  },
  kXFg(e, t, r) {
    r.d(t, {
      zW: () => S,
      jS: () => q,
      Kj: () => C,
      hW: () => P,
      uO: () => R,
      ml: () => E,
      Yc: () => T,
      VR: () => A,
      RJ: () => k,
      eE: () => M,
      jj: () => _,
    })
    var n = r("SRbQ"),
      a = r("zTeN"),
      o = r("DBCl"),
      s = r("Dgwo"),
      i = r("seW7"),
      l = r("SGsN"),
      c = r("svjy"),
      u = r("JQtI"),
      d = r("TYK1"),
      m = r("jiwy"),
      h = r("ho8L"),
      p = r("Eo5f"),
      f = r("GaA7"),
      g = r("OWtl"),
      v = r("WFY2"),
      w = r("HK0a"),
      y = r("ZG9f"),
      x = r("lICN"),
      b = r("Sd8U")
    class I extends y.TF {
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
    let S = "microphone_permission_denied",
      k = (0, a.vP)(g.u, null)
    async function A(e, { conversationId: t, hostId: r }) {
      let a = { stack: [], error: void 0, hasError: !1 }
      try {
        let o = (0, s.V)(e, r),
          l = (0, n.mS)(a, await o.getThreadListSummary(t), !1)
        if ((0, u.N)(l?.threadStartKind, l?.threadSource)) return !0
        let c = (0, n.mS)(a, await o.getFollowUpContext(t), !1)
        return (
          (0, i.Kv)(e, t, c) ||
          e.get(h.Rr, { hostId: r, threadId: t }) ||
          null != e.query.getData(d.cloudAeonByThreadId$, t) ||
          (await (0, d.F)(e, r, t, c))
        )
      } catch (e) {
        ;((a.error = e), (a.hasError = !0))
      } finally {
        ;(0, n.hk)(a)
      }
    }
    async function M(e, t, r, n, a) {
      ;(0, w.jz)(e, a)
      let s = e.get(k)
      if (null != s && "failed" !== s.phase && "composer_button_new_thread" !== r.source) return
      let i = "composer_button_existing_thread" === r.source && (await A(e, r.locator))
      if ((i && (0, m.qo)(e), e.get(k) !== s)) return
      let l = crypto.randomUUID(),
        c = null == t ? void 0 : new I(t)
      if (
        (e.set(k, {
          sourceComposerScope: t,
          handoffComplete:
            "composer_button_existing_thread" === r.source && "in-window" === r.preferredPresentationSurface,
          launchId: l,
          originPath: n,
          phase: "starting",
          request: r,
          workHomePolicyAcceptance: a,
        }),
        i || null != a)
      ) {
        let t
        t = e.watch((e) => {
          let r = e.get(k)
          r?.launchId !== l || "starting" !== r.phase
            ? t?.()
            : ((!i || e.get(m.VK)) && (0, w.BB)(e, a)) || q(e).catch(() => {})
        })
      }
      if ("composer_button_existing_thread" === r.source && "in-window" === r.preferredPresentationSurface) {
        let t = (0, p.X)()
        e.when((e) => {
          let t = e.get(k)
          return t?.launchId !== l || "starting" !== t.phase
        }).then(t)
      }
      try {
        let t = f.appServices.realtimeVoiceRuntime
        if (null == t) throw Error("Voice chat is unavailable")
        ;((0, w.jz)(e, a), await t.requestRealtimeStart(r, l, c))
      } catch (t) {
        if (e.get(k)?.launchId !== l) return
        throw (
          _(e, "failed", l, (0, o.Rt_)(t)),
          v.v.error("Unable to request realtime voice launch", { safe: {}, sensitive: { error: t } }),
          t
        )
      }
    }
    function C(e, t) {
      e.set(k, (e) =>
        e?.request !== t
          ? e
          : "composer_button_existing_thread" === t.source && "connected" === e.phase
            ? null
            : { ...e, handoffComplete: !0 },
      )
    }
    function _(e, t, r, n) {
      let a = e.get(k)
      if (
        a?.launchId === r &&
        "failed" !== a.phase &&
        "failed" === t &&
        "composer_button_existing_thread" === a.request.source &&
        "in-window" === a.request.preferredPresentationSurface
      ) {
        let t = e.get(c.g),
          r = n === S,
          o = f.appServices.systemPermissions,
          s = e
            .get(l.Id)
            .danger(
              r
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
                  toastId: r ? "realtimeVoice.launch.microphonePermissionDenied" : "realtimeVoice.launch.failed",
                },
                duration: 1 / 0,
                hasCloseButton: !0,
                description: r
                  ? t.formatMessage({
                      id: "realtimeVoice.launch.microphonePermissionDeniedDescription",
                      defaultMessage: "Allow microphone access in system settings to start a voice chat",
                      description:
                        "Instructions shown when operating-system microphone permission must be enabled before starting realtime voice chat",
                    })
                  : n,
                primaryAction:
                  r && null != o
                    ? {
                        label: t.formatMessage({
                          id: "realtimeVoice.launch.openMicrophoneSettings",
                          defaultMessage: "Open system settings",
                          description:
                            "Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat",
                        }),
                        onClick: async () => {
                          await o.openMicrophoneSettings().catch(() => {})
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
                            M(e, a.sourceComposerScope, a.request, a.originPath, a.workHomePolicyAcceptance).catch(
                              () => {},
                            ))
                        },
                      },
              },
            )
      }
      e.set(k, (e) =>
        null == e || e.launchId !== r
          ? e
          : "idle" === t
            ? "failed" === e.phase
              ? e
              : null
            : "connected" === t && "composer_button_existing_thread" === e.request.source && e.handoffComplete
              ? null
              : { ...e, error: n, phase: t },
      )
    }
    function E(e, t, r) {
      return (
        e?.request.source === "composer_button_existing_thread" &&
        e.request.locator.conversationId === t &&
        e.request.locator.hostId === r
      )
    }
    function P(e, t) {
      e.set(k, (e) => (e?.request === t && "connected" === e.phase && e.handoffComplete ? null : e))
    }
    function q(e) {
      return (
        e.set(k, null),
        f.appServices.realtimeVoiceRuntime?.cancelRealtimeSessionStart().catch((e) => {
          throw (v.v.error("Unable to cancel realtime voice launch", { safe: {}, sensitive: { error: e } }), e)
        }) ?? Promise.resolve()
      )
    }
    function T(e, t, r) {
      return e === t || (null != r && e === (0, o._RT)(r))
    }
    function R(e, t) {
      return "inactive" !== e.phase && "main-thread" === e.preferredPresentationSurface
        ? e.locator.conversationId
        : t?.surface === "main-thread"
          ? t.locator.conversationId
          : null
    }
  },
  h0ld(e, t, r) {
    var n = r("ABep"),
      a = r("QosV"),
      o = r("LIss"),
      s = r("zTeN"),
      i = r("oyxz"),
      l = r("HZfM"),
      c = r("q3HK"),
      u = r("Sm6l"),
      d = r("T1PX"),
      m = r("KUNU"),
      h = r("GaA7"),
      p = r("OWtl"),
      f = r("atrN"),
      g = r("XLpU"),
      v = r("kXFg"),
      w = r("Mbqw"),
      y = r("XL6s"),
      x = r("hJzG"),
      b = r("NolR")
    function I() {}
    function S() {}
    function k() {}
    r.d(
      t,
      {},
      {
        RealtimeVoiceLaunchSurface: function (e) {
          let t,
            r,
            A,
            M,
            C,
            _,
            E,
            P,
            q,
            T,
            R = (0, a.c)(69),
            { threadLocator: j } = e,
            D = (0, s.gh)(p.u),
            F = (0, l.zy)(),
            V = (0, s.Ul)(v.RJ),
            N = (0, s.Ul)(g._A),
            O = (0, s.Ul)(y.qE),
            U = (0, d.I)(),
            B = (0, b.w)(),
            L =
              null == j
                ? V?.request.source === "composer_button_new_thread" &&
                  (0, v.Yc)(`${F.pathname}${F.search}`, V.originPath, (0, v.uO)(N, O))
                : (0, v.ml)(V, j.conversationId, j.hostId)
          if (
            null == V ||
            !L ||
            ("composer_button_existing_thread" === V.request.source &&
              "in-window" === V.request.preferredPresentationSurface) ||
            (("composer_button_existing_thread" === V.request.source || null != V.request.pageCompanion) &&
              "failed" !== V.phase)
          )
            return null
          if ("failed" === V.phase) {
            let e,
              t,
              r,
              a,
              o,
              s,
              l,
              d,
              m,
              p,
              f,
              g,
              w,
              y,
              x,
              b,
              A = V.error === v.zW,
              M = h.appServices.systemPermissions
            ;(R[0] !== A
              ? ((e = (0, n.jsx)("h2", {
                  className: "text-base font-medium text-default",
                  children: A
                    ? (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.microphonePermissionDeniedTitle",
                        defaultMessage: "Microphone permission denied",
                        description:
                          "Title shown when realtime voice chat cannot start because the operating system denied microphone permission",
                      })
                    : (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.failedTitle",
                        defaultMessage: "Voice chat couldn’t start",
                        description: "Title shown when an optimistic realtime voice launch fails",
                      }),
                })),
                (R[0] = A),
                (R[1] = e))
              : (e = R[1]),
              R[2] !== V.error || R[3] !== A
                ? ((t = A
                    ? (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.microphonePermissionDeniedDescription",
                        defaultMessage: "Allow microphone access in system settings to start a voice chat",
                        description:
                          "Instructions shown when operating-system microphone permission must be enabled before starting realtime voice chat",
                      })
                    : V.error ||
                      (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.failedDescription",
                        defaultMessage: "Try again, or go back",
                        description: "Description shown when an optimistic realtime voice launch fails",
                      })),
                  (R[2] = V.error),
                  (R[3] = A),
                  (R[4] = t))
                : (t = R[4]),
              R[5] !== t
                ? ((r = (0, n.jsx)("p", { className: "text-sm text-secondary", children: t })), (R[5] = t), (R[6] = r))
                : (r = R[6]),
              R[7] !== e || R[8] !== r
                ? ((a = (0, n.jsxs)("div", { className: "flex flex-col gap-1", children: [e, r] })),
                  (R[7] = e),
                  (R[8] = r),
                  (R[9] = a))
                : (a = R[9]),
              R[10] !== A
                ? ((o =
                    A &&
                    null != M &&
                    (0, n.jsx)(u.$, {
                      color: "primary",
                      onClick: () => {
                        M.openMicrophoneSettings().catch(k)
                      },
                      size: "medium",
                      children: (0, n.jsx)(i.A, {
                        id: "realtimeVoice.launch.openMicrophoneSettings",
                        defaultMessage: "Open system settings",
                        description:
                          "Button that opens the operating-system microphone privacy settings after microphone permission blocks realtime voice chat",
                      }),
                    })),
                  (R[10] = A),
                  (R[11] = o))
                : (o = R[11]))
            let C = A && null != M ? "secondary" : "primary"
            return (
              R[12] !== V.originPath ||
              R[13] !== V.request ||
              R[14] !== V.sourceComposerScope ||
              R[15] !== V.workHomePolicyAcceptance ||
              R[16] !== D
                ? ((s = () => {
                    ;(0, v.eE)(D, V.sourceComposerScope, V.request, V.originPath, V.workHomePolicyAcceptance).catch(S)
                  }),
                  (R[12] = V.originPath),
                  (R[13] = V.request),
                  (R[14] = V.sourceComposerScope),
                  (R[15] = V.workHomePolicyAcceptance),
                  (R[16] = D),
                  (R[17] = s))
                : (s = R[17]),
              R[18] === Symbol.for("react.memo_cache_sentinel")
                ? ((l = (0, n.jsx)(i.A, {
                    id: "realtimeVoice.launch.retry",
                    defaultMessage: "Try again",
                    description: "Button that retries a failed realtime voice launch",
                  })),
                  (R[18] = l))
                : (l = R[18]),
              R[19] !== C || R[20] !== s
                ? ((d = (0, n.jsx)(u.$, { color: C, onClick: s, size: "medium", children: l })),
                  (R[19] = C),
                  (R[20] = s),
                  (R[21] = d))
                : (d = R[21]),
              R[22] !== V.error
                ? ((m = () => {
                    ;(0, c.d1)("feedback", "realtime_voice_startup_failure", { feedbackDetails: V.error })
                  }),
                  (R[22] = V.error),
                  (R[23] = m))
                : (m = R[23]),
              R[24] === Symbol.for("react.memo_cache_sentinel")
                ? ((p = (0, n.jsx)(i.A, {
                    id: "realtimeVoice.launch.feedback",
                    defaultMessage: "Send feedback",
                    description: "Button that opens the feedback dialog with a failed realtime voice startup error",
                  })),
                  (R[24] = p))
                : (p = R[24]),
              R[25] !== m
                ? ((f = (0, n.jsx)(u.$, { color: "secondary", onClick: m, size: "medium", children: p })),
                  (R[25] = m),
                  (R[26] = f))
                : (f = R[26]),
              R[27] !== D
                ? ((g = () => {
                    ;(0, v.jS)(D).catch(I)
                  }),
                  (R[27] = D),
                  (R[28] = g))
                : (g = R[28]),
              R[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((w = (0, n.jsx)(i.A, {
                    id: "realtimeVoice.launch.back",
                    defaultMessage: "Back",
                    description:
                      "Button that dismisses a failed realtime voice launch and returns to the previous surface",
                  })),
                  (R[29] = w))
                : (w = R[29]),
              R[30] !== g
                ? ((y = (0, n.jsx)(u.$, { color: "secondary", onClick: g, size: "medium", children: w })),
                  (R[30] = g),
                  (R[31] = y))
                : (y = R[31]),
              R[32] !== f || R[33] !== y || R[34] !== o || R[35] !== d
                ? ((x = (0, n.jsxs)("div", {
                    className: "flex flex-wrap justify-center gap-2",
                    children: [o, d, f, y],
                  })),
                  (R[32] = f),
                  (R[33] = y),
                  (R[34] = o),
                  (R[35] = d),
                  (R[36] = x))
                : (x = R[36]),
              R[37] !== x || R[38] !== a
                ? ((b = (0, n.jsx)("div", {
                    className: "absolute inset-0 z-30 flex items-center justify-center bg-surface",
                    children: (0, n.jsxs)("div", {
                      className: "flex flex-col items-center gap-4 text-center",
                      children: [a, x],
                    }),
                  })),
                  (R[37] = x),
                  (R[38] = a),
                  (R[39] = b))
                : (b = R[39]),
              b
            )
          }
          let W = "active" === N.phase && "main-thread" === N.preferredPresentationSurface,
            z = "connected" === V.phase && V.handoffComplete,
            H = B && O?.surface === "main-thread" && O.handoff?.from === "global-overlay" ? x.vY : x.Ke,
            K = +!z
          ;(R[40] !== K ? ((t = { opacity: K }), (R[40] = K), (R[41] = t)) : (t = R[41]),
            R[42] !== z || R[43] !== V.request || R[44] !== D
              ? ((r = () => {
                  z && (0, v.hW)(D, V.request)
                }),
                (R[42] = z),
                (R[43] = V.request),
                (R[44] = D),
                (R[45] = r))
              : (r = R[45]))
          let Y = U ? w.TU : w.sk
          ;(R[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (0, n.jsx)("span", {
                className: "sr-only",
                role: "status",
                children: (0, n.jsx)(i.A, {
                  id: "realtimeVoice.launch.starting",
                  defaultMessage: "Starting voice chat",
                  description: "Accessible status announced while realtime voice starts",
                }),
              })),
              (R[46] = A))
            : (A = R[46]),
            R[47] !== H ? ((M = { transform: H }), (R[47] = H), (R[48] = M)) : (M = R[48]),
            R[49] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = { height: 112, width: 112 }), (R[49] = C))
              : (C = R[49]))
          let $ = !W
          R[50] !== V.request || R[51] !== D
            ? ((_ = () => (0, v.Kj)(D, V.request)), (R[50] = V.request), (R[51] = D), (R[52] = _))
            : (_ = R[52])
          let G = "inactive" === N.phase ? "starting" : N.phase,
            Q = "inactive" === N.phase ? "idle" : N.activity
          return (
            R[53] !== G || R[54] !== Q
              ? ((E = (0, n.jsx)(m.P, {
                  className: "!aspect-square !size-full",
                  glowEnabled: !1,
                  phase: G,
                  placement: "center",
                  voiceActivity: Q,
                })),
                (R[53] = G),
                (R[54] = Q),
                (R[55] = E))
              : (E = R[55]),
            R[56] !== U || R[57] !== E || R[58] !== $ || R[59] !== _
              ? ((P = (0, n.jsx)("div", {
                  className: "relative flex",
                  style: C,
                  children: (0, n.jsx)(f.W, {
                    isConnecting: $,
                    onHandoffComplete: _,
                    orb: E,
                    orbDiameter: 112,
                    reduceMotion: U,
                  }),
                })),
                (R[56] = U),
                (R[57] = E),
                (R[58] = $),
                (R[59] = _),
                (R[60] = P))
              : (P = R[60]),
            R[61] !== P || R[62] !== M
              ? ((q = (0, n.jsx)("div", {
                  className: x.Jn,
                  children: (0, n.jsx)("div", { className: x.$S, style: M, children: P }),
                })),
                (R[61] = P),
                (R[62] = M),
                (R[63] = q))
              : (q = R[63]),
            R[64] !== q || R[65] !== t || R[66] !== r || R[67] !== Y
              ? ((T = (0, n.jsxs)(o.P.div, {
                  animate: t,
                  className: "absolute inset-0 z-30 bg-surface",
                  initial: !1,
                  onAnimationComplete: r,
                  transition: Y,
                  children: [A, q],
                })),
                (R[64] = q),
                (R[65] = t),
                (R[66] = r),
                (R[67] = Y),
                (R[68] = T))
              : (T = R[68]),
            T
          )
        },
      },
    )
  },
  t0b9(e, t, r) {
    var n = r("DBCl")
    let a = "realtimeVoiceHostId"
    r.d(
      t,
      {},
      {
        I: function (e) {
          let t = new URLSearchParams({ [a]: e.hostId })
          return `${(0, n._RT)(e.conversationId)}?${t}`
        },
        N: function ({ conversationId: e, routeConversationId: t, searchParams: r }) {
          return null != e && e === t ? r.get(a) : null
        },
      },
    )
  },
  Mbqw(e, t, r) {
    r.d(
      t,
      {},
      {
        Eq: { duration: 0.28, ease: [0.33, 1, 0.68, 1] },
        TU: { duration: 0 },
        sk: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      },
    )
  },
  tsSe(e, t, r) {
    let n = Math.ceil(400 / 240),
      a = [
        [1, 3],
        [3, 23],
        [23, 240],
      ],
      o = [10, 1, 1],
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
    function h(e, t, r, n) {
      let a = e.slice(t, r).sort((e, t) => e - t),
        o = Math.floor(a.length / 2),
        s = Math.abs(a.length % 2 == 0 ? ((a[o - 1] ?? 0) + (a[o] ?? 0)) / 2 : (a[o] ?? 0)) * n
      return s / (s + 1)
    }
    function p(e) {
      return Math.sqrt(1 - Math.abs(Math.max(-100, Math.min(-10, e))) / 100)
    }
    r.d(
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
            let r = this.audioContext ?? new AudioContext()
            this.audioContext = r
            let n = this.analyser ?? r.createAnalyser()
            if (
              (null == this.analyser &&
                ((n.fftSize = 2048),
                (n.minDecibels = -100),
                (n.maxDecibels = -80),
                (n.smoothingTimeConstant = 0.8),
                (this.analyser = n),
                (this.frequencyData = new Float32Array(n.frequencyBinCount))),
              "output" === this.mode && null == this.codexScaleAnalyser)
            ) {
              let e = r.createAnalyser()
              ;((e.fftSize = 2048),
                (e.minDecibels = -100),
                (e.maxDecibels = -10),
                (e.smoothingTimeConstant = 0.86),
                (this.codexScaleAnalyser = e),
                (this.codexScaleFrequencyData = new Float32Array(e.frequencyBinCount)))
            }
            let a = r.createMediaStreamSource(e)
            ;((this.audioSource = a),
              a.connect(n),
              null != this.codexScaleAnalyser && a.connect(this.codexScaleAnalyser),
              r.resume().catch(() => {}),
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
            let r, s
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
                    for (let r = 0; r < 400; r += 1) t.push(p(e[r] ?? -100))
                    return h(t, 0, t.length, 1)
                  })(this.codexScaleFrequencyData)))),
              this.publish(
                "microphone" === this.mode
                  ? (function (e) {
                      let t = 0
                      for (let r = 0; r < 400; r += 1) t += p(e[r] ?? -100)
                      return { high: 0, low: 0, mid: 0, overall: t / 400 }
                    })(this.frequencyData)
                  : ((e = this.frequencyData),
                    (t = this.codexScaleLevel),
                    (r = (function (e) {
                      let t = Array.from({ length: 240 }, () => 0)
                      for (let r = 0; r < 240; r += 1) {
                        let a = r * n,
                          o = Math.min(a + n, 400),
                          s = 0
                        for (let t = a; t < o; t += 1) s += p(e[t] ?? -100)
                        t[r] = s / n
                      }
                      return t
                    })(e)),
                    {
                      codexScaleLevel: t,
                      high: (s = a.map(([e, t], n) => h(r, e, t, o[n])))[2] ?? 0,
                      low: s[0] ?? 0,
                      mid: s[1] ?? 0,
                      overall: h(r, 0, 240, 1),
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
  f81T(e, t, r) {
    r.d(
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
        Pz: function (e, t, r, n) {
          let a = (e.centerX - t.centerX) / r,
            o = (e.centerY - t.centerY) / r,
            s = Math.hypot(a, o),
            i = s > n ? n / s : 1
          return { x: a * i, y: o * i }
        },
        SP: function (e, t, r) {
          let n = (0.055 * e.x) / t,
            a = (0.055 * e.y) / t,
            o = Math.hypot(n, a),
            s = o > r ? r / o : 1
          return { x: n * s, y: a * s }
        },
      },
    )
  },
  XL6s(e, t, r) {
    var n = r("SRbQ"),
      a = r("QosV"),
      o = r("zTeN"),
      s = r("zd8w"),
      i = r("wD9O"),
      l = r("SGsN"),
      c = r("TL6G"),
      u = r("GaA7"),
      d = r("OWtl"),
      m = r("t0b9"),
      h = r("f81T")
    let p = { active: null },
      f = (0, o.vP)(d.u, () => p, {
        onMount: (e) => {
          let t = u.appServices?.realtimeVoicePresentation
          if (null == t) return
          let r = !0,
            a = null
          return (
            t
              .subscribe((t) => {
                r && e(t)
              })
              .then((e) => {
                if (!r) {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let r = (0, n.mS)(t, e, !1)
                    ;(0, n.mS)(t, r.unsubscribe(), !1)
                    return
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, n.hk)(t)
                  }
                }
                a = () => {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    let r = (0, n.mS)(t, e, !1)
                    ;(0, n.mS)(t, r.unsubscribe(), !1)
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, n.hk)(t)
                  }
                }
              }),
            () => {
              ;((r = !1), a?.(), (a = null))
            }
          )
        },
      }),
      g = (0, o.un)(d.u, ({ get: e }) => e(f).active)
    function v({ locator: e, motion: t, surface: r }) {
      let a = { stack: [], error: void 0, hasError: !1 }
      try {
        ;(0, n.mS)(a, u.appServices.realtimeVoicePresentation?.requestSurface(e, r, t), !1)
      } catch (e) {
        ;((a.error = e), (a.hasError = !0))
      } finally {
        ;(0, n.hk)(a)
      }
    }
    r.d(
      t,
      {},
      {
        UB: function (e) {
          let t,
            r = (0, a.c)(2)
          r[0] !== e
            ? ((t = () => {
                null != e &&
                  (v({ locator: e, surface: "main-thread" }),
                  c.O1.dispatchMessage("open-in-main-window", {
                    path: (0, m.I)(e),
                    appEntryAttribution: { channel: "shortcut", source: "shortcut" },
                  }))
              }),
              (r[0] = e),
              (r[1] = t))
            : (t = r[1])
          let n = t
          return null == e ? void 0 : n
        },
        _x: v,
        cr: function ({ enabled: e, isEligible: t, locator: r, surface: a, usesNativeOverlayTransition: m }) {
          let p = (0, o.gh)(d.u),
            f = (0, i.dz)(),
            g = (0, s.useRef)(null),
            v = (0, s.useRef)(null),
            w = (0, s.useRef)(null),
            y = (0, s.useRef)(null),
            x = r?.conversationId,
            b = r?.hostId,
            I = (0, s.useCallback)(() => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                let t = v.current,
                  r = g.current
                if (null == t || null == r) return
                let a = t.getBoundingClientRect()
                ;(0, n.mS)(e, r.updateAnchor((0, h.NS)(a, { screenX: window.screenX, screenY: window.screenY })), !1)
                let o = w.current
                if (null == o) return
                ;(0, n.mS)(e, r.updatePresentationOffset((0, h.F9)(a, o.getBoundingClientRect())), !1)
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                ;(0, n.hk)(e)
              }
            }, []),
            S = (0, s.useCallback)(
              (e, t = null) => {
                if ((y.current?.(), (y.current = null), (v.current = e), (w.current = t), null == e)) return
                let r = "u" < typeof ResizeObserver ? null : new ResizeObserver(I)
                ;(r?.observe(e),
                  e.addEventListener("pointerdown", I, !0),
                  e.addEventListener("pointerup", I, !0),
                  window.addEventListener("blur", I),
                  window.addEventListener("resize", I))
                let n = c.O1.subscribe("electron-window-position-changed", I)
                ;(I(),
                  (y.current = () => {
                    ;(r?.disconnect(),
                      e.removeEventListener("pointerdown", I, !0),
                      e.removeEventListener("pointerup", I, !0),
                      window.removeEventListener("blur", I),
                      window.removeEventListener("resize", I),
                      n())
                  }))
              },
              [I],
            ),
            k = (0, s.useEffectEvent)(() => t),
            A = (0, s.useEffectEvent)(() => I()),
            M = (0, s.useCallback)(
              (e) => {
                switch (e.kind) {
                  case "danger":
                    p.get(l.Id).danger(e.message, {
                      errorAnalytics: { toastId: "realtimeVoicePresentation.showToast" },
                    })
                    break
                  case "warning":
                    p.get(l.Id).warning(e.message)
                }
              },
              [p],
            )
          return (
            (0, s.useEffect)(() => {
              if (!e || null == x || null == b) return
              let t = u.appServices.realtimeVoicePresentation
              if (null == t) return
              let r = !1,
                o = null
              return (
                t.registerSurface({ conversationId: x, hostId: b }, a, k(), m, M).then((e) => {
                  let t = { stack: [], error: void 0, hasError: !1 }
                  try {
                    if (r) {
                      let t = { stack: [], error: void 0, hasError: !1 }
                      try {
                        let r = (0, n.mS)(t, e, !1)
                        ;(0, n.mS)(t, r.unregister(), !1)
                        return
                      } catch (e) {
                        ;((t.error = e), (t.hasError = !0))
                      } finally {
                        ;(0, n.hk)(t)
                      }
                    }
                    ;((g.current = e),
                      (0, n.mS)(t, e.updateEligibility(k()), !1),
                      A(),
                      (o = () => {
                        let t = { stack: [], error: void 0, hasError: !1 }
                        try {
                          let r = (0, n.mS)(t, e, !1)
                          ;(0, n.mS)(t, r.unregister(), !1)
                        } catch (e) {
                          ;((t.error = e), (t.hasError = !0))
                        } finally {
                          ;(0, n.hk)(t)
                        }
                      }))
                  } catch (e) {
                    ;((t.error = e), (t.hasError = !0))
                  } finally {
                    ;(0, n.hk)(t)
                  }
                }),
                () => {
                  ;((r = !0), (g.current = null), o?.(), (o = null))
                }
              )
            }, [x, e, b, M, a, m]),
            (0, s.useEffect)(() => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                let r = g.current
                if (null == r) return
                ;(0, n.mS)(e, r.updateEligibility(t), !1)
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                ;(0, n.hk)(e)
              }
            }, [t]),
            (0, s.useEffect)(() => {
              I()
            }, [I, f]),
            e ? S : void 0
          )
        },
        qE: g,
      },
    )
  },
  hJzG(e, t, r) {
    r.d(
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
  NolR(e, t, r) {
    var n = r("QosV"),
      a = r("XYHU"),
      o = r("hZax")
    r.d(
      t,
      {},
      {
        w: function () {
          let e,
            t = (0, n.c)(2),
            r = (0, o.Zj)("620613358")
          return (t[0] !== r ? ((e = "macOS" === (0, a.tR)() && r), (t[0] = r), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  PZWn(e, t, r) {
    var n = r("zTeN"),
      a = r("OWtl"),
      o = r("tzYO"),
      s = r("vXOR")
    let i = (0, n.bD)(a.u, (e) => ({ mode: "custom", overridden: !1 })),
      l = (0, n.i1)(a.u, (e, { get: t }) => {
        let r = t(o.Wo)
        return null == r ? { mode: "custom", overridden: !1 } : t(i, { ...r, conversationId: e })
      }),
      c = (0, n.i1)(a.u, (e, { get: t }) => t(l, e).mode)
    r.d(
      t,
      { mu: () => s.mu },
      {
        SO: function (e, t, r, n = !0) {
          let a = e.get(o.Wo)
          null != a && e.set(i, { ...a, conversationId: t }, { mode: r, overridden: n })
        },
        Wn: c,
        lU: l,
      },
    )
  },
  TurB(e, t, r) {
    var n = r("nuXe"),
      a = r.n(n),
      o = r("zTeN"),
      s = r("DBCl")
    r("NvvW")
    var i = r("M9WK"),
      l = r("tl5a"),
      c = r("J43j")
    r("mNN5")
    var u = r("GaA7"),
      d = r("OWtl"),
      m = r("ndjw"),
      h = r("V0vl"),
      p = r("rvFo"),
      f = r("iQgv"),
      g = r("psi4"),
      v = r("dg06")
    let w = { kind: "available" },
      y = { kind: "unavailable", reason: "inspection-failed", worktreePath: null },
      x = "worktree_restore_required",
      b = "worktree_status_unavailable",
      I = (0, o.vU)(d.u, ({ conversationId: e, cwd: t, hostId: r }, { get: n }) => {
        let o = (0, v.d)(r)
        if (null == t)
          return {
            queryFn: () => w,
            queryKey: [...o, "available", null],
            networkMode: "always",
            staleTime: p.D.FIVE_SECONDS,
          }
        let l = n(m.lE, { hostId: r })
        if (null == l.data)
          return {
            enabled: l.isError,
            queryFn: () => y,
            queryKey: [...o, l.isError ? "codex-home-error" : "codex-home-loading", t],
            staleTime: p.D.FIVE_SECONDS,
          }
        if (!(0, s.n9x)(t, l.data.codexHome, l.data.worktreesSegment))
          return {
            queryFn: () => w,
            queryKey: [...o, "available", t],
            networkMode: "always",
            staleTime: p.D.FIVE_SECONDS,
          }
        let c = (0, g.HG)(t, (0, i._9)(l.data))
        if (null == c)
          return {
            queryFn: () => w,
            queryKey: [...o, "available-unmanaged-worktree", t],
            networkMode: "always",
            staleTime: p.D.FIVE_SECONDS,
          }
        let d = n(m.fm, r)
        if (d.id !== r)
          return {
            enabled: !1,
            queryFn: () => y,
            queryKey: [...o, "host-config-loading", t],
            staleTime: p.D.FIVE_SECONDS,
          }
        let x = n(h.ty, e),
          b =
            x?.pending?.cwd === t ? x.pending.projectSources : x?.applied?.cwd === t ? x.applied.projectSources : null,
          I = n(m.FM, { hostId: r })
        if (null == b && null == I.data && !I.isError)
          return {
            enabled: !1,
            queryFn: () => y,
            queryKey: [...o, "workspace-roots-loading", c],
            staleTime: p.D.FIVE_SECONDS,
          }
        let S = a()([...(b ?? []), ...(I.data?.roots ?? [])]).map(s.PUz),
          k = (0, s.DIv)(c)
        return {
          queryFn: async () => {
            let e
            try {
              let e = await u.appServices.workspaceFiles.getMetadata?.({ hostId: r, path: t })
              if (null != e)
                return "directory" === e.kind
                  ? w
                  : { kind: "unavailable", reason: "inspection-failed", worktreePath: k }
            } catch {}
            try {
              e = await (0, f.V)("git").request({
                method: "managed-worktree-state",
                params: {
                  candidateRoots: S,
                  cwd: t,
                  hostConfig: d,
                  operationSource: "worktree_restore_banner",
                  worktreePath: k,
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
                return { ...e, worktreePath: k }
              case "gone":
                return { kind: "gone", worktreePath: k }
            }
          },
          queryKey: [...o, "inspect", t, k, S],
          networkMode: "always",
          refetchOnReconnect: "always",
          staleTime: p.D.FIVE_SECONDS,
        }
      }),
      S = (0, o.i1)(d.u, (e, { get: t }) => t(I, { conversationId: e, cwd: t(l.JN, e), hostId: t(l.qX, e) })),
      k = (0, o.i1)(d.u, (e, { get: t }) => {
        let r = t(S, e)
        return r.isError ? "unavailable" : null != r.data ? r.data.kind : "loading"
      })
    async function A(e, { conversationId: t, cwd: r, hostId: n }) {
      let a = e.query.snapshot(m.lE, { hostId: n }),
        o = a.getData()
      if (
        ("local" === n || null == o || e.queryClient.getQueryState(a.queryKey)?.isInvalidated
          ? (o = await a.fetch())
          : a.fetch().catch(() => void 0),
        !(0, s.n9x)(r, o.codexHome, o.worktreesSegment))
      )
        return w
      await e.query.getOrFetch(m.FM, { hostId: n }).catch(() => void 0)
      let i = { conversationId: t, cwd: (0, s.DIv)(r), hostId: n }
      return (await e.query.invalidate(I, i, { exact: !0 }), e.query.fetch(I, i))
    }
    async function M(e, t) {
      await Promise.all([
        e.query.invalidate(m.lE, { hostId: t }, { exact: !0 }),
        e.query.invalidate(m.FM, { hostId: t }, { exact: !0 }),
      ])
    }
    r.d(
      t,
      {},
      {
        B3: async function (e, t) {
          let r = await A(e, t)
          if ("unavailable" === r.kind) throw Error(b)
          if ("restorable" !== r.kind) return
          let n = e.get(m.fm, t.hostId)
          await (0, f.V)("git").request({
            method: "restore-worktree",
            params: {
              conversationId: t.conversationId,
              cwd: (0, s.DIv)(t.cwd),
              hostConfig: n,
              operationSource: "worktree_restore_banner",
              repoRoot: r.snapshot.repoRoot,
              worktreePath: r.worktreePath,
            },
          })
          let a = (0, c.W)(n)
          await Promise.all([
            e.query.invalidate(I, { ...t, cwd: (0, s.DIv)(t.cwd) }, { exact: !0 }),
            e.queryClient.invalidateQueries({ queryKey: (0, v.F)(a) }),
            e.queryClient.invalidateQueries({ queryKey: ["git", "metadata", a] }),
          ])
        },
        Bx: async function (e, { conversationId: t, cwd: r, hostId: n }) {
          let a
          try {
            a = await A(e, { conversationId: t, cwd: r, hostId: n })
          } catch {
            throw Error(b)
          }
          switch (a.kind) {
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
        aM: async function (e, { conversationId: t, cwd: r, hostId: n }) {
          return (await M(e, n), A(e, { conversationId: t, cwd: r, hostId: n }))
        },
        ae: S,
        c5: I,
        fX: "worktree_gone",
        j2: k,
        mb: x,
        u0: async function (e, t) {
          ;(await M(e, t), await e.queryClient.invalidateQueries({ queryKey: (0, v.d)(t) }))
        },
      },
    )
  },
  psi4(e, t, r) {
    var n = r("bnxy"),
      a = r("M9WK")
    r.d(
      t,
      { Cy: () => a.Cy, HG: () => a.HG, Xs: () => a.Xs },
      {
        _M: function (e) {
          if (!e) return null
          let t = (0, n.Fd)(e).replace(/\/+$/, ""),
            r = t.indexOf("/.git/worktrees/")
          if (-1 !== r) return t.slice(0, r)
          let a = "/.git"
          return t.endsWith(a) ? t.slice(0, -a.length) : null
        },
      },
    )
  },
}
//# sourceMappingURL=723410.270e83f1ed.js.map
