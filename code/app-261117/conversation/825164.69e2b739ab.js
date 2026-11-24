export const __rspack_esm_ids = [825164]
export const __webpack_modules__ = {
  M0nI(e, t) {
    t.A = { summary: "summary-fnAD_7", execDescendants: "execDescendants-d8xS36" }
  },
  Z2K2(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsxs)("svg", {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M8.00037 4.14209C8.29009 4.14235 8.52478 4.37769 8.52478 4.66748V7.86279C8.52464 8.0901 8.43446 8.30843 8.2738 8.46924L6.70447 10.0386C6.49954 10.2433 6.16728 10.2432 5.96228 10.0386C5.75731 9.8336 5.75742 9.50142 5.96228 9.29639L7.47498 7.78369V4.66748C7.47498 4.37753 7.71042 4.14209 8.00037 4.14209Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.00037 1.4751C11.604 1.4751 14.5258 4.39683 14.5258 8.00049C14.5258 11.6041 11.604 14.5259 8.00037 14.5259C4.39671 14.5259 1.47498 11.6041 1.47498 8.00049C1.47498 4.39683 4.39671 1.4751 8.00037 1.4751ZM8.00037 2.52588C4.97661 2.52588 2.52576 4.97673 2.52576 8.00049C2.52576 11.0242 4.97661 13.4751 8.00037 13.4751C11.0241 13.4751 13.475 11.0242 13.475 8.00049C13.475 4.97673 11.0241 2.52588 8.00037 2.52588Z",
              fill: "currentColor",
            }),
          ],
        })))
  },
  MT12(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.2929 5.70711C16.4743 3.88849 13.5257 3.88849 11.7071 5.7071L10.7071 6.70711C10.3166 7.09763 9.68341 7.09763 9.29289 6.70711C8.90236 6.31658 8.90236 5.68342 9.29289 5.29289L10.2929 4.29289C12.8926 1.69323 17.1074 1.69323 19.7071 4.29289C22.3068 6.89256 22.3068 11.1074 19.7071 13.7071L18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929L18.2929 12.2929C20.1115 10.4743 20.1115 7.52572 18.2929 5.70711ZM15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L9.7071 15.7071C9.31658 16.0976 8.68341 16.0976 8.29289 15.7071C7.90236 15.3166 7.90236 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289ZM6.7071 9.29289C7.09763 9.68342 7.09763 10.3166 6.7071 10.7071L5.7071 11.7071C3.88849 13.5257 3.88849 16.4743 5.7071 18.2929C7.52572 20.1115 10.4743 20.1115 12.2929 18.2929L13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071L13.7071 19.7071C11.1074 22.3068 6.89255 22.3068 4.29289 19.7071C1.69322 17.1074 1.69322 12.8926 4.29289 10.2929L5.29289 9.29289C5.68341 8.90237 6.31658 8.90237 6.7071 9.29289Z",
            fill: "currentColor",
          }),
        })))
  },
  sM3V(e, t, n) {
    var a = n("qmMi"),
      r = n("B81s"),
      i = n("OWtl"),
      o = n("tl5a")
    let l = (0, a.i1)(i.u, ({ hostId: e, conversationId: t }, { get: n }) => {
        if (t.startsWith("chatgpt:")) return null
        let a = n(o.zp, { hostId: e, threadId: t })
        return null != a && "notLoaded" !== a.type ? t : null
      }),
      s = (0, a.i1)(i.u, (e, { get: t }) => {
        let { data: n } =
          null == t(l, { hostId: e.hostId, conversationId: e.threadId }) ? t(r.pu, e.hostId) : t(r.Dr, e)
        return n?.data.find((t) => t.name === e.serverName) ?? null
      })
    n.d(t, {}, { n: l, t: s })
  },
  UaU4(e, t, n) {
    var a = n("SRbQ"),
      r = n("YLui"),
      i = n("Dgwo"),
      o = n("tl5a"),
      l = n("dbK8"),
      s = n("PAzX"),
      d = n("AqHb"),
      u = n("SPnB"),
      c = n("seW7"),
      m = n("r0y7"),
      p = n("OMIV")
    n.d(
      t,
      {},
      {
        _: function (e, t, n = "fresh") {
          return async (g, h) => {
            let f = (0, m.jD)(g, t),
              v = g.message.submissionOptions ?? g.options
            if (null == v) {
              let n = { stack: [], error: void 0, hasError: !1 }
              try {
                let r = (0, a.mS)(n, await (0, i.V)(e, t).getThreadListSummary(g.conversationId), !1)
                v = {
                  executionHostId: e.get(o.qX, g.conversationId) ?? t,
                  agentMode: "auto",
                  permissionProfileId: null,
                  serviceTier: await (0, s.e)(
                    e,
                    t,
                    r?.latestModel ?? null,
                    void 0,
                    (0, l.C)(t) ? void 0 : r?.modelProvider || void 0,
                  ),
                  shouldSendPermissionOverrides: !1,
                  usePermissionSelection: !0 === e.get(p.JW, "4226282475"),
                  collaborationMode: null,
                  clientUserMessageId: g.message.id,
                }
              } catch (e) {
                ;((n.error = e), (n.hasError = !0))
              } finally {
                ;(0, a.hk)(n)
              }
            }
            if (
              (0, r.sI)(
                g.message.context,
                v.executionHostId,
                e.get(u.chatGptAuthenticatedAccountId$),
                "durable" === (0, d._)(v.executionHostId),
              )
            )
              throw Error(r.fi)
            let y = await (0, c.FB)(
              {
                scope: e,
                turnTrigger: g.message.context.turnTrigger ?? "composer_queue_run_now",
                managerHostId: t,
                hostId: v.executionHostId,
                targetConversationId: f.conversationId,
                context: f.message.context,
                cwd: f.message.cwd,
                agentMode: v.agentMode,
                permissionProfileId: v.permissionProfileId,
                serviceTier: v.serviceTier,
                shouldSendPermissionOverrides: v.shouldSendPermissionOverrides,
                usePermissionSelection: v.usePermissionSelection,
                permissionSelection: v.permissionSelection,
                activeCollaborationMode: v.collaborationMode,
                clientUserMessageId: v.clientUserMessageId,
                restoreMessage: f.message,
                isQueuedReplay: "queued" === n,
              },
              h,
            )
            return ((y.steer.restoreMessage = g.message), y)
          }
        },
      },
    )
  },
  VvpR(e, t, n) {
    var a = n("SRbQ"),
      r = n("Y5Sy"),
      i = n("Dgwo"),
      o = n("dF4Z"),
      l = n("SjAp"),
      s = n("syw5")
    n.d(
      t,
      {},
      {
        J: async function (e, t, n, l) {
          let d = { stack: [], error: void 0, hasError: !1 }
          try {
            let u = (0, i.V)(e, t),
              c = (0, a.mS)(d, await u.getFollowUpContext(n, !0), !1)
            if (e.get(r.Nk)) throw new o.y()
            await u.editLastUserTurn(n, {
              ...l,
              clientUserMessageId: crypto.randomUUID(),
              writingBlockContextPrepared: null != c,
              additionalContext: (0, s.I)(n, c?.writingBlocks, l.additionalContext),
            })
          } catch (e) {
            ;((d.error = e), (d.hasError = !0))
          } finally {
            ;(0, a.hk)(d)
          }
        },
        MT: async function (e, t, n, r) {
          let o = { stack: [], error: void 0, hasError: !1 }
          try {
            let d = (0, i.V)(e, t),
              u = (0, a.mS)(o, await d.getFollowUpContext(n, !0), !1)
            return await d.startTurn(n, {
              ...r,
              context: {
                ...r.context,
                onRequestDispatched:
                  r.context?.onRequestDispatched ??
                  ((e) => {
                    null != r.request.clientUserMessageId && l.j.markRequestDispatched(r.request.clientUserMessageId, e)
                  }),
                trace:
                  r.context?.trace ??
                  (null == r.request.clientUserMessageId ? void 0 : l.j.getTrace(r.request.clientUserMessageId)),
                writingBlockContextPrepared: null != u,
              },
              request: { ...r.request, additionalContext: (0, s.I)(n, u?.writingBlocks, r.request.additionalContext) },
            })
          } catch (e) {
            ;((o.error = e), (o.hasError = !0))
          } finally {
            ;(0, a.hk)(o)
          }
        },
        R9: async function (e, t, n, r) {
          let o = { stack: [], error: void 0, hasError: !1 }
          try {
            let l = (0, i.V)(e, t),
              d = (0, a.mS)(o, await l.getFollowUpContext(n, !0), !1)
            await l.startEmptyTurn(n, {
              ...r,
              writingBlockContextPrepared: null != d,
              additionalContext: (0, s.I)(n, d?.writingBlocks, r.additionalContext),
            })
          } catch (e) {
            ;((o.error = e), (o.hasError = !0))
          } finally {
            ;(0, a.hk)(o)
          }
        },
        dp: async function (e, t, n, r, o) {
          let l = { stack: [], error: void 0, hasError: !1 }
          try {
            let d = (0, i.V)(e, t),
              u = (0, a.mS)(l, await d.getFollowUpContext(n, !0), !1)
            await d.retrySafetyBufferedTurn(n, r, o, {
              additionalContext: (0, s.I)(n, u?.writingBlocks),
              writingBlockContextPrepared: null != u,
            })
          } catch (e) {
            ;((l.error = e), (l.hasError = !0))
          } finally {
            ;(0, a.hk)(l)
          }
        },
      },
    )
  },
  m8L3(e, t, n) {
    n.d(t, {}, { C: "default", Y: "explicitRequestOnly" })
  },
  PYah(e, t, n) {
    var a = n("Dgwo")
    n.d(
      t,
      {},
      {
        k: async function (e, t, n, r) {
          let { apps: i } = await (0, a.V)(e, t).sendRequest(
            "app/installed",
            { forceRefresh: !0, threadId: n },
            null == r ? void 0 : { threadAccess: r, coalesce: !1 },
          )
          return new Set(i.filter(({ callable: e, enabled: t }) => e && t).map(({ id: e }) => e))
        },
      },
    )
  },
  FzwW(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("zd8w"),
      l = n("OGl1")
    n.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            n,
            s,
            d,
            u = (0, r.c)(18),
            { getImagePreviewSrc: c, iconClassName: m, imageClassName: p, path: g } = e
          u[0] !== c || u[1] !== g ? ((t = c?.(g) ?? null), (u[0] = c), (u[1] = g), (u[2] = t)) : (t = u[2])
          let h = t,
            [f, v] = (0, o.useState)(null)
          if (null != h && h !== f) {
            let e, t, n
            return (
              u[3] !== p ? ((e = (0, i.A)("shrink-0 object-cover", p)), (u[3] = p), (u[4] = e)) : (e = u[4]),
              u[5] !== h ? ((t = () => v(h)), (u[5] = h), (u[6] = t)) : (t = u[6]),
              u[7] !== h || u[8] !== e || u[9] !== t
                ? ((n = (0, a.jsx)("img", { alt: "", className: e, src: h, onError: t })),
                  (u[7] = h),
                  (u[8] = e),
                  (u[9] = t),
                  (u[10] = n))
                : (n = u[10]),
              n
            )
          }
          u[11] !== g ? ((n = (0, l.I3)(g)), (u[11] = g), (u[12] = n)) : (n = u[12])
          let y = n
          return (
            u[13] !== m ? ((s = (0, i.A)("shrink-0", m)), (u[13] = m), (u[14] = s)) : (s = u[14]),
            u[15] !== y || u[16] !== s
              ? ((d = (0, a.jsx)(y, { className: s })), (u[15] = y), (u[16] = s), (u[17] = d))
              : (d = u[17]),
            d
          )
        },
      },
    )
  },
  ygKd(e, t, n) {
    var a = n("qmMi"),
      r = n("ZU27"),
      i = n("gbrq"),
      o = n("VCD3"),
      l = n("tSEg")
    let s = (0, a.vP)(l.GD, () => null),
      d = (0, a.vP)(l.GD, () => null),
      u = (0, a.un)(l.GD, ({ get: e }) => {
        let t = e(d)
        return t?.markup == null ? null : t.tabId
      }),
      c = (0, a.un)(l.GD, ({ get: e }) => {
        let t = e(d),
          n = e(s)
        return null != n
          ? t?.markup != null && null == t.tabId && t.viewerId === n.viewerId
            ? t
            : null
          : null != t && (null == t.tabId || (e(i.SZ) && e(i.yN) && e(r.It.activeTab$)?.tabId === t.tabId))
            ? t
            : null
      }),
      m = (0, a.un)(l.GD, ({ get: e }) => e(c)?.markup != null),
      p = (0, a.bD)(l.GD, (e) => null),
      g = (0, a.un)(l.GD, ({ get: e }) => {
        let t = e(s),
          n = t?.target ?? null
        if (null == t) {
          let t = e(r.It.activeTab$)?.tabId
          n = null != t && e(i.SZ) && e(i.yN) ? e(p, t) : null
        }
        return n?.viewerId == null ? n : { ...n, image: (0, o.NS)(e(o.lF, n.viewerId), n.image) }
      }),
      h = (0, a.un)(l.GD, ({ get: e }) => (e(c)?.markup == null ? e(g) : null)),
      f = (0, a.un)(l.GD, ({ get: e }) => null != e(h)),
      v = (0, a.un)(l.GD, ({ get: e }) => e(s)?.useImageEditDraft ?? null != e(g))
    n.d(t, {}, { Dv: f, L_: m, OW: p, Uc: d, _3: s, fi: v, pH: u, uI: c, vM: h })
  },
  dsow(e, t, n) {
    var a = n("PkQL"),
      r = n("IhIa"),
      i = n("DD2M"),
      o = n("WFY2")
    function l(e) {
      let t = e.untrustedAppMessage
      return {
        prompt: [
          t?.text || e.prompt,
          t?.structuredContent == null ? null : JSON.stringify(t.structuredContent, null, 2),
          ...(e.mcpAppModelContextAttachments ?? []).map((e) =>
            [
              `## ${e.sourceName}`,
              (0, a.af)(e),
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
          ...(t?.imageUrls ?? []).map((e) => ({ id: (0, i.A)(), src: e })),
          ...(e.mcpAppModelContextAttachments ?? []).flatMap((e) =>
            (0, a.U1)(e).map((e) => ({ id: (0, i.A)(), src: e })),
          ),
        ],
      }
    }
    function s(e, t) {
      return { ...e, ...t, untrustedAppMessage: void 0, mcpAppModelContextAttachments: void 0 }
    }
    n.d(
      t,
      {},
      {
        Hh: l,
        TW: s,
        VR: async function ({ context: e, send: t, signal: n, requestConfirmation: a }) {
          n?.throwIfAborted()
          try {
            return await t(e)
          } catch (u) {
            if (null == a || !(0, r.Yb)(u)) throw u
            n?.throwIfAborted()
            let i = l(e)
            o.v.info("Waiting for app input approval", { safe: { mcpAppId: e.untrustedAppMessage?.sourceId } })
            let d = await a(i)
            return (
              n?.throwIfAborted(),
              o.v.info("Approved app input", { safe: { mcpAppId: e.untrustedAppMessage?.sourceId } }),
              t(s(e, { ...i, prompt: d }))
            )
          }
        },
      },
    )
  },
  qle4(e, t, n) {
    n.d(t, { bj: () => i, hJ: () => o, lg: () => l })
    var a = n("SRbQ"),
      r = n("WFY2")
    let i = "closed_agent_send_failed"
    function o(e, t) {
      let n = t.trim()
      return 0 === n.length ? e : 0 === e.length || /\s$/.test(e) ? `${e}${n}` : `${e} ${n}`
    }
    async function l(e, t, n) {
      if (!t) return null
      try {
        return await (async function () {
          let e = { stack: [], error: void 0, hasError: !1 }
          try {
            throw Error("Client coordination service is unavailable")
          } catch (t) {
            ;((e.error = t), (e.hasError = !0))
          } finally {
            ;(0, a.hk)(e)
          }
        })()
      } catch (e) {
        return (r.v.error("[Composer] failed to fetch ide-context", { safe: {}, sensitive: { error: e } }), null)
      }
    }
  },
  xKli(e, t, n) {
    var a = n("PkQL"),
      r = n("IhIa"),
      i = n("yJfM"),
      o = n("DD2M")
    function l(e, t = !1) {
      return (0, i.Ry)({ ...s(e), worktreePrompt: !1 }, t)
    }
    function s(e) {
      return { ...e, mcpAppModelContextAttachments: (0, a.g5)(e.mcpAppModelContextAttachments, !0).user }
    }
    n.d(
      t,
      {},
      {
        Fc: function (e, t = l(e)) {
          let n = (0, a.g5)(e.mcpAppModelContextAttachments, !0)
          return (0, r.yU)({
            prompt: t,
            message: e.untrustedAppMessage,
            sender: e.messageSender,
            modelContextAttachments: n.untrusted,
            reviewedMessageAttachments: n.user.filter((e) => "message" === e.kind),
            callId: `untrusted_input_${(0, o.A)()}`,
          })
        },
        NS: s,
        gx: function (e) {
          let t = e.worktreeRecovery
          if (!e.worktreePrompt && null == t) return e.additionalContext
          let n = t?.startingState ?? e.worktreeStartingState
          return {
            ...e.additionalContext,
            ...(n?.type === "working-tree"
              ? { codex_apps_worktree: { kind: "application", value: (0, i.FE)({ worktreeStartingState: n }) } }
              : {}),
            ...(null == t ? {} : { codex_apps_worktree_creation: { kind: "application", value: t.instructions } }),
          }
        },
        kv: l,
      },
    )
  },
  seW7(e, t, n) {
    var a = n("SRbQ"),
      r = n("ZEOU"),
      i = n.n(r),
      o = n("zMIV"),
      l = n.n(o),
      s = n("DBCl"),
      d = n("Vrnh"),
      u = n("vpsD"),
      c = n("kpNK"),
      m = n("ZIaK"),
      p = n("rjU5"),
      g = n("RAsy"),
      h = n("TAOo"),
      f = n("ZjPZ"),
      v = n("YLui"),
      y = n("RF9q"),
      w = n("DD2M"),
      I = n("Dgwo"),
      x = n("dSuPU"),
      C = n("tl5a"),
      b = n("MYVk"),
      A = n("vdpW"),
      S = n("gp55"),
      M = n("shRG"),
      _ = n("m8L3"),
      k = n("dbK8"),
      E = n("wCOm"),
      T = n("AqHb"),
      P = n("SPnB"),
      D = n("dF4Z"),
      N = n("Yn2j"),
      j = n("r0y7"),
      R = n("MtDh"),
      O = n("JQtI"),
      U = n("qMca"),
      L = n("TYK1"),
      G = n("jiwy"),
      q = n("SjAp"),
      B = n("GaA7"),
      V = n("kfGJ"),
      F = n("D6SK"),
      W = n("PZWn"),
      H = n("TurB"),
      z = n("syw5"),
      K = n("qle4"),
      Y = n("xKli"),
      Z = n("e1yv"),
      $ = n("Ryoj"),
      X = n("Ld2s"),
      Q = n("VDZe")
    function J({
      context: e,
      cwd: t,
      text: n = e.prompt,
      persistedPrompt: a,
      messageId: r = (0, w.A)(),
      messageThreadId: i = e.messageThreadId,
      createdAt: o = Date.now(),
    }) {
      return {
        id: r,
        text: n,
        ...(null != a && (a !== e.prompt || a !== n) ? { editableMarkdown: a } : {}),
        context: { ...l()(e, "openingPromptForHistory", "executorSkillPick"), messageThreadId: i },
        cwd: t,
        createdAt: o,
        responsesapiClientMetadata: {
          source: "codex",
          message_submission_source: e.messageSubmissionSource,
          in_space: e.inSpace?.toString(),
          [p.sy]: e.usedDictation?.toString(),
        },
      }
    }
    async function ee(e, t) {
      let n = { ...e, clientUserMessageId: e.clientUserMessageId ?? e.restoreMessage?.id ?? (0, w.A)() },
        r = () => {
          if ((n.signal?.throwIfAborted(), n.isSubmissionCurrent?.() === !1)) throw new D.y()
        }
      ;(r(), (0, S.Q3)(n.scope, n.managerHostId, n.targetConversationId))
      let o = (0, I.V)(n.scope, n.managerHostId),
        l = await el(
          n.scope,
          n.managerHostId,
          n.targetConversationId,
          n.restoreMessage?.writingBlockAdditionalContext === void 0,
        ),
        s = l?.ephemeral === !0 || l?.sideConversation === !0 || n.restoreMessage?.requiresExistingOwner === !0,
        u = n.restoreMessage?.writingBlockAdditionalContext
      void 0 === u && l?.resumeState === "resumed" && (u = (0, z.I)(n.targetConversationId, l.writingBlocks) ?? null)
      let m = i()({
          ...(n.restoreMessage ??
            J({
              context: n.context,
              cwd: n.cwd,
              messageId: n.clientUserMessageId,
              messageThreadId: n.messageThreadId,
            })),
          threadAccess: l?.threadAccess ?? n.restoreMessage?.threadAccess,
          submissionOptions: {
            useUserMessageAdmission:
              n.restoreMessage?.submissionOptions?.useUserMessageAdmission ??
              ((0, c.n)(l?.threadStartKind, l?.threadSource) && (0, x.S)(n.scope, n.managerHostId)),
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
          responsesapiClientMetadata: (0, N.V)(n.scope, n.managerHostId, m.responsesapiClientMetadata),
          context: {
            ...(0, d.jA)(m.context),
            turnTrigger: n.turnTrigger,
            workspaceRoots: n.scope.get(C.m8, n.targetConversationId)?.slice() ?? m.context.workspaceRoots ?? [n.cwd],
          },
          multiUserMessageSender:
            void 0 === m.multiUserMessageSender
              ? await (0, j.tu)(n.scope, n.hostId, l?.threadAccess === "shared")
              : m.multiUserMessageSender,
        }
      return ea({ ...n, conversation: l }, async () => {
        let e = { stack: [], error: void 0, hasError: !1 }
        try {
          let i = await (0, L.F)(n.scope, n.managerHostId, n.targetConversationId, l),
            d = () => i || eo(n.scope, n.targetConversationId, l),
            u = () => {
              d() && (0, G.qo)(n.scope)
            },
            c = () => {
              ;(u(), n.submissionLifecycle?.validate())
            },
            m = () => {
              ;(r(), c())
            },
            g = (0, a.mS)(e, await o.getTurnCoordinator(), !1),
            h = { hostId: n.hostId, threadId: n.targetConversationId },
            f = (0, a.mS)(
              e,
              null == n.onMessageAdded || eo(n.scope, n.targetConversationId, l)
                ? null
                : (0, $.c)(n.scope, h, n.clientUserMessageId, n.onMessageAdded),
              !1,
            ),
            v =
              null == f
                ? void 0
                : n.scope.watch(({ get: e }) => {
                    let t = e(A.fl, h)
                    ;(e(b.Ax, h), ("error" === t || "unavailable" === t) && f[Symbol.dispose]())
                  })
          try {
            let e = await (0, X.t)(n.scope, p.context, async (e) => {
              let a
              m()
              let r = e
              s && null != n.prepareContext && ((a = Promise.resolve(n.prepareContext(r))), (r = await a), m())
              let o =
                n.managerHostId === V.fI &&
                n.hostId === V.fI &&
                l?.mode === "default" &&
                !0 === t.acceptLocally &&
                null == t.completesPreparation &&
                null == t.editPosition &&
                !s &&
                null == n.prepareContext &&
                null == n.submissionLifecycle &&
                !d()
              return g.sendMessage(
                {
                  conversationId: n.targetConversationId,
                  message: {
                    ...p,
                    requiresExistingOwner: !!s || void 0,
                    text: r === p.context ? p.text : r.prompt,
                    context: {
                      ...r,
                      mcpAppModelContextAttachments: r.mcpAppModelContextAttachments?.map((e) =>
                        "message" === e.kind ? e : { ...e, untrusted: !0 },
                      ),
                    },
                  },
                  ...t,
                  acceptLocally: t.acceptLocally && !s,
                  options: p.submissionOptions,
                },
                async (e, t) => {
                  ;(u(), (a = a ?? Promise.resolve(n.prepareContext?.(e.message.context) ?? e.message.context)))
                  let r = { ...e.message, context: await a }
                  u()
                  let o = (0, j.jD)({ ...e, message: r }, n.managerHostId),
                    l = await en(
                      {
                        ...n,
                        context: o.message.context,
                        activeCollaborationMode: e.message.submissionOptions?.collaborationMode,
                        permissionSelection: e.message.submissionOptions?.permissionSelection,
                        restoreMessage: o.message,
                      },
                      t,
                      i,
                    )
                  return (u(), (l.steer.restoreMessage = r), l)
                },
                null == n.submissionLifecycle
                  ? (f?.onMessageAdded ?? n.onMessageAdded)
                  : (e) => {
                      ;(n.submissionLifecycle?.onMessageAdded(e), (f?.onMessageAdded ?? n.onMessageAdded)?.(e))
                    },
                async () => m(),
                o ? null : async () => c(),
              )
            })
            return (
              "sent" === e.status && "steer" === e.kind && q.j.abort(n.clientUserMessageId, "active_turn_steer"),
              await f?.displayed,
              e
            )
          } finally {
            v?.()
          }
        } catch (t) {
          ;((e.error = t), (e.hasError = !0))
        } finally {
          ;(0, a.hk)(e)
        }
      })
    }
    function et(e) {
      return ee(e, { queueModeOverride: "send-now" })
    }
    async function en(e, t, a) {
      let r = e
      r.signal?.throwIfAborted()
      let i = r.context.worktreeRecovery
      if (i?.creationRequest != null) {
        if (
          i.hostId !== r.hostId ||
          i.threadId !== r.targetConversationId ||
          i.creationRequest.hostId !== r.hostId ||
          i.creationRequest.threadId !== r.targetConversationId
        )
          throw Error("Worktree recovery belongs to a different task or host.")
        let e = B.appServices.managedWorktrees
        if (null == e) throw Error("This host does not support managed worktree recovery.")
        let t = (await (0, Q.S)(e, { ...i.creationRequest, recoverOnly: !0 })).codex_apps_worktree_creation
        if (null == t) throw Error("Missing worktree recovery context.")
        let n = { ...r.context, worktreeRecovery: { ...i, instructions: t.value, creationRequest: void 0 } }
        ;((r = {
          ...r,
          context: n,
          restoreMessage: null == r.restoreMessage ? void 0 : { ...r.restoreMessage, context: n },
        }),
          r.signal?.throwIfAborted())
      }
      if (
        (0, v.sI)(r.context, r.hostId, r.scope.get(P.chatGptAuthenticatedAccountId$), "durable" === (0, T._)(r.hostId))
      )
        throw Error(v.fi)
      let o = await el(
          r.scope,
          r.managerHostId,
          r.targetConversationId,
          r.restoreMessage?.writingBlockAdditionalContext === void 0,
        ),
        l = (o?.mode === "durable" && ei(o)) || (0, k.C)(r.hostId) || (0, k.C)(r.managerHostId),
        d = {
          ...r,
          conversation: o,
          isCloudFollowUp: l,
          inheritNativeWorkspacePermissions:
            !l &&
            null == r.context.workPermissions &&
            o?.mode !== "durable" &&
            !eo(r.scope, r.targetConversationId, o) &&
            "projectless" !== r.scope.get(C.EL, r.targetConversationId),
        },
        c = await ("start" === t || r.restoreMessage?.submissionOptions?.useUserMessageAdmission === !0
          ? er(d)
          : (async function ({
              scope: e,
              turnTrigger: t,
              clientUserMessageId: n,
              managerHostId: a,
              hostId: r,
              targetConversationId: i,
              agentMode: o,
              permissionProfileId: l,
              serviceTier: d,
              shouldSendPermissionOverrides: c,
              usePermissionSelection: m = !1,
              permissionSelection: p,
              activeCollaborationMode: v,
              restoreMessage: w,
              conversation: x,
              inheritNativeWorkspacePermissions: b,
            }) {
              let A = r !== V.fI,
                { cwd: S, context: _ } = w,
                k = _.workspaceRoots ?? e.get(C.m8, i) ?? [S],
                E = (0, I.V)(e, a)
              if (x?.isClosedSubagent) throw Error(K.bj)
              let P = _.collaborationMode ?? v,
                D = x
              if (x?.resumeState === "resuming" || null == x || x.needsResume) {
                let t = await E.resumeConversation(
                  {
                    conversationId: i,
                    threadAccess: x?.threadAccess ?? w.threadAccess,
                    model: null,
                    serviceTier: d,
                    reasoningEffort: null,
                    workspaceRoots: k,
                    useAppServerPermissionDefault: m,
                    inheritNativeWorkspacePermissions: b,
                    collaborationMode: P,
                  },
                  { readResumeInputs: (0, M.jQ)(e, a) },
                )
                if ("not-ready" === t.status) throw new u.uZ(t)
                D = await el(e, a, i, void 0 === w.writingBlockAdditionalContext)
              }
              if ((0, s.ZJQ)(a) && D?.mode === "durable" && ei(D))
                return er({
                  scope: e,
                  turnTrigger: t,
                  clientUserMessageId: n,
                  managerHostId: a,
                  hostId: r,
                  context: _,
                  targetConversationId: i,
                  cwd: S,
                  agentMode: o,
                  permissionProfileId: l,
                  serviceTier: d,
                  shouldSendPermissionOverrides: c,
                  usePermissionSelection: m,
                  permissionSelection: p,
                  activeCollaborationMode: v,
                  restoreMessage: w,
                  conversation: D,
                  isCloudFollowUp: !0,
                  inheritNativeWorkspacePermissions: !1,
                })
              let N = (0, h.K)(_.imageAttachments),
                j = (0, Y.Fc)(_, (0, Y.kv)(_, "durable" === (0, T._)(a))),
                R = [j.input, ...(0, Z.v)(_, A)],
                O = (0, g.Y)([...(0, f.E5)(_.fileAttachments, _.pastedTextAttachments), ..._.addedFiles, ...N])
              return {
                conversationId: i,
                executionHostId: r,
                requiresIdle: j.responseItems.length > 0,
                resume: {
                  conversationId: i,
                  threadAccess: D?.threadAccess ?? w.threadAccess,
                  model: null,
                  serviceTier: d,
                  reasoningEffort: null,
                  workspaceRoots: k,
                  useAppServerPermissionDefault: m,
                  inheritNativeWorkspacePermissions: b,
                  collaborationMode: P,
                },
                steer: {
                  input: R,
                  restoreMessage: { ...w, context: { ..._, turnTrigger: t } },
                  serviceTier: d,
                  attachments: O,
                  clientUserMessageId: n,
                  additionalContext: (0, y.AK)(
                    (0, Y.gx)(_),
                    void 0 !== w.writingBlockAdditionalContext
                      ? (w.writingBlockAdditionalContext ?? void 0)
                      : (0, z.I)(i, D?.writingBlocks),
                  ),
                },
              }
            })({ ...d, restoreMessage: r.restoreMessage ?? J({ context: r.context, cwd: r.cwd }) }))
      c.allowStartAfterNoActiveTurn = a ?? (await (0, L.F)(r.scope, r.managerHostId, r.targetConversationId, o))
      let { addSharedArtifactPageContext: m } = await n.e(309492).then(n.bind(n, "NPal"))
      return (await m(r.scope, c), r.signal?.throwIfAborted(), c)
    }
    async function ea(e, t) {
      let n =
        void 0 === e.conversation ? await el(e.scope, e.managerHostId, e.targetConversationId, !1) : e.conversation
      if (n?.mode === "durable" && ei(n)) {
        ;(0, G.qo)(e.scope)
        try {
          return await (0, R._P)(e.targetConversationId, () => t())
        } catch (t) {
          throw ((0, G.Mo)(e.scope), t)
        }
      }
      return t()
    }
    async function er({
      scope: e,
      turnTrigger: t,
      managerHostId: n,
      hostId: a,
      context: r,
      targetConversationId: i,
      cwd: o,
      agentMode: l,
      permissionProfileId: d,
      serviceTier: u,
      shouldSendPermissionOverrides: c,
      usePermissionSelection: p = !1,
      permissionSelection: v,
      activeCollaborationMode: w,
      restoreMessage: I,
      clientUserMessageId: x,
      conversation: b,
      isCloudFollowUp: A,
      inheritNativeWorkspacePermissions: S,
      isQueuedReplay: M = !1,
    }) {
      let k = a !== V.fI
      if (b?.isClosedSubagent) throw Error(K.bj)
      let P = r.collaborationMode ?? w,
        D = ei(b),
        j = A ? o : (b?.cwd ?? o),
        R = r.workspaceRoots ?? e.get(C.m8, i)?.slice() ?? [j]
      ;(null != b && D && (P = { ...b.latestCollaborationMode, mode: P?.mode ?? b.latestCollaborationMode.mode }),
        A || (await (0, H.Bx)(e, { conversationId: i, cwd: j, hostId: a })))
      let O = (0, h.K)(r.imageAttachments),
        U = (0, Y.Fc)(r, (0, Y.kv)(r, "durable" === (0, T._)(n))),
        L = [U.input, ...(0, Z.v)(r, k)],
        G = (0, g.Y)([...(0, f.E5)(r.fileAttachments, r.pastedTextAttachments), ...r.addedFiles, ...O]),
        B =
          r.fileAttachments.length +
          (r.uploadedFileAttachments?.length ?? 0) +
          (r.pastedTextAttachments?.length ?? 0) +
          r.addedFiles.filter(s.xwm).length,
        $ = eo(e, i, b),
        X = r.workPermissions,
        Q = null != X,
        ee = !Q && p && !$,
        et = !ee && (c || (p && $)),
        en = $ ? "guardian-approvals" : (X?.mode ?? l),
        ea = Q || ((et || v?.kind === "custom") && (null == v || $)),
        el =
          (Q && null == X.resolvedPermissions) ||
          (!Q && ea && ("guardian-approvals" === en || "custom" === en)) ||
          (!ee && v?.kind === "custom")
            ? (0, E.Y$)(
                (await (0, E.ig)(e, n, { includeLayers: !1, cwd: j }, { priority: "critical", timeoutMs: 3e4 })).config,
              )
            : null,
        es = $ && b?.mode === "durable",
        ed = ea
          ? (X?.resolvedPermissions ?? (0, s.$5i)(en, R, null != X && null != el ? (0, W.mu)(X.defaults, el) : el))
          : null
      null == ed ||
        null == d ||
        Q ||
        $ ||
        ((ed.activePermissionProfile = { id: d, extends: null }), (ed.runtimeWorkspaceRoots = R))
      let eu =
          Q || ee || null == v || $
            ? null
            : (0, s.URU)({ config: el, permissionSelection: v, runtimeWorkspaceRoots: R }),
        ec =
          S &&
          (function (e, t, n, a, r) {
            if (null == a || null == n || "durable" === n.mode || n.primaryEnvironment?.environmentId !== "local")
              return !1
            if (r || (null != n.cwd && !(0, m.Pw)(n.primaryEnvironment.cwd, n.cwd))) return !0
            if (":workspace" !== a) return !1
            let i = e.get(C.h2, t)?.activePermissionProfile,
              o = void 0 === i ? e.get(C.we, t)?.activePermissionProfile : i
            return o?.id === ":workspace"
          })(e, i, b, eu?.permissions ?? ed?.activePermissionProfile?.id, M || I?.submissionIntent === "queue"),
        em = {
          request: {
            threadId: i,
            turnTrigger: t,
            responsesapiClientMetadata: (0, N.V)(e, n, I?.responsesapiClientMetadata),
            clientUserMessageId: x ?? I?.id,
            input: L,
            cwd: A ? o : void 0,
            model: null,
            effort: null,
            multiAgentMode: _.Y,
            serviceTier: u,
            ...(null == ed
              ? {}
              : {
                  approvalPolicy: ed.approvalPolicy,
                  approvalsReviewer: es ? "auto_review" : ed.approvalsReviewer,
                  ...(0, s.ZGB)(ed),
                  ...(null == ed.activePermissionProfile || ec ? {} : { runtimeWorkspaceRoots: (0, s.Xhp)(ed) }),
                }),
            ...(null == eu ? {} : { ...eu, ...(ec ? {} : { runtimeWorkspaceRoots: R }) }),
            collaborationMode: P,
          },
          context: {
            onRequestDispatched: null == x ? void 0 : (e) => q.j.markRequestDispatched(x, e),
            trace: null == x ? void 0 : q.j.getTrace(x),
            useUserMessageAdmission: I?.submissionOptions?.useUserMessageAdmission,
            restoreMessage: I,
            messageThreadId: I?.context.messageThreadId ?? r.messageThreadId,
            writingBlockContextPrepared: I?.writingBlockAdditionalContext !== void 0,
            localTurnMetadata: { fileAttachmentCount: B },
            commentAttachments: r.commentAttachments,
            useAppServerPermissionDefault: !Q && null == eu && !et,
            usePermissionSelection: ee,
            attachments: G,
            mcpAppModelContextAttachments: r.mcpAppModelContextAttachments,
            responseItems: U.responseItems,
            passiveContext: (0, F.QG)(e, n, i, r.mcpAppModelContextAttachments),
          },
        }
      em.request.additionalContext = (0, y.AK)(
        (0, Y.gx)(r),
        I?.writingBlockAdditionalContext !== void 0
          ? (I.writingBlockAdditionalContext ?? void 0)
          : (0, z.I)(i, b?.writingBlocks),
      )
      let ep = I?.submissionOptions?.useUserMessageAdmission === !0 || ((0, s.ZJQ)(n) && b?.mode === "durable" && D)
      return {
        conversationId: i,
        executionHostId: a,
        requiresIdle: U.responseItems.length > 0,
        resume: {
          conversationId: i,
          threadAccess: b?.threadAccess ?? I?.threadAccess,
          model: null,
          serviceTier: u,
          reasoningEffort: null,
          workspaceRoots: R,
          useAppServerPermissionDefault: p,
          inheritNativeWorkspacePermissions: S,
          collaborationMode: P,
        },
        start: em,
        steer: {
          ...(ep ? { userMessageAdmissionStart: em } : {}),
          input: L,
          restoreMessage: I ?? J({ context: r, cwd: o }),
          serviceTier: u,
          attachments: G,
          clientUserMessageId: x,
          additionalContext: em.request.additionalContext,
        },
      }
    }
    function ei(e) {
      return e?.mode === "durable" && (0, O.N)(e.threadStartKind, e.threadSource)
    }
    function eo(e, t, n) {
      return ei(n) || e.get(U.D0, t)
    }
    async function el(e, t, n, r) {
      let i = { stack: [], error: void 0, hasError: !1 }
      try {
        let o = (0, a.mS)(i, await (0, I.V)(e, t).getFollowUpContext(n, r), !1)
        return null == o ? null : { ...o }
      } catch (e) {
        ;((i.error = e), (i.hasError = !0))
      } finally {
        ;(0, a.hk)(i)
      }
    }
    n.d(
      t,
      {},
      {
        E2: ea,
        FB: en,
        Kv: eo,
        St: function (e) {
          return et({ ...e, context: e.restoreMessage.context, cwd: e.restoreMessage.cwd })
        },
        bD: et,
        h: ee,
        jo: J,
      },
    )
  },
  e1yv(e, t, n) {
    var a = n("DBCl")
    n("OeLR")
    var r = n("S8um"),
      i = n("e0Zo"),
      o = n("rjU5"),
      l = n("LnAF"),
      s = n("ZjPZ"),
      d = n("Dgwo"),
      u = n("CfsC"),
      c = n("wCOm"),
      m = n("svjy"),
      p = n("PWXi"),
      g = n("Yn2j"),
      h = n("r0y7"),
      f = n("kfGJ"),
      v = n("PZWn"),
      y = n("xKli"),
      w = n("gfHD"),
      I = n("qcLg"),
      x = n("Wumz")
    function C(e, t) {
      return (0, l.v)((0, y.NS)(e), t)
    }
    n.d(
      t,
      {},
      {
        l: async function ({
          scope: e,
          context: t,
          prompt: n,
          workspaceRoots: l,
          cwd: b,
          hostId: A,
          configHostId: S = A,
          threadCreationHostId: M,
          agentMode: _,
          permissionProfileId: k,
          permissionSelection: E,
          shouldSendPermissionOverrides: T,
          serviceTier: P,
          collaborationMode: D,
          memoryPreferences: N,
          workspaceKind: j = "project",
          projectlessOutputDirectory: R,
          projectAssignment: O,
        }) {
          let U,
            L = (0, a.JFB)(e.get(u.B, A), "threadPluginSelection")
          if (!L && (t.disabledPluginIds?.length ?? 0) > 0)
            throw Error(
              e
                .get(m.g)
                .formatMessage({
                  id: "composer.pluginSelectionRequiresSupportedRuntime",
                  defaultMessage:
                    "This Codex runtime does not support chat plugin selection. Update the runtime before sending this chat",
                  description:
                    "Error when a chat excludes plugins but the selected execution host cannot enforce those exclusions",
                }),
            )
          let G =
              null != t.firstTurnReasoningEffort && null != D
                ? { ...D, settings: { ...D.settings, reasoning_effort: t.firstTurnReasoningEffort } }
                : D,
            { daybreakEnabled: q, apiKeyIdentityToRecheck: B } = (0, w.V3)(e, A, { threadCreationHostId: M }),
            [{ config: V }, F] = await Promise.all([
              (0, d.V)(e, S).sendRequest("config/read", { includeLayers: !1, cwd: b }, { priority: "critical" }),
              (0, h.tu)(e, M, !1),
            ]),
            W = (0, c.Y$)(V),
            H = t.cloudThreadPrototype || (W.model_provider ?? "openai") === "openai"
          if (H && null != B && (!0 !== q || !e.get(I.dK, A) || !(0, x.j)(e.get(x.B), B))) throw (0, w.FH)(e, !0)
          ;(null != t.firstTurnReasoningEffort && (U = { ...U, model_reasoning_effort: t.firstTurnReasoningEffort }),
            null != t.elicitationPluginIds &&
              t.elicitationPluginIds.length > 0 &&
              (U = {
                ...U,
                [r.F2]: !0,
                "features.auth_elicitation": !0,
                "features.tool_suggest": !0,
                "tool_suggest.discoverables": t.elicitationPluginIds.map((e) => ({ type: "plugin", id: e })),
              }))
          let z = C(t, A !== f.fI || !0 === t.cloudThreadPrototype),
            K = (0, y.Fc)({ ...t, messageSender: F ?? void 0 }, null != F ? (0, i.Y5)(n, F) : n),
            Y = [K.input, ...(t.cloudThreadPrototype ? z.filter((e) => "localImage" !== e.type) : z)],
            Z =
              null != E
                ? { permissionSelection: E }
                : { agentMode: _, permissionProfileId: k, shouldSendPermissionOverrides: T }
          return (
            null != t.workPermissions &&
              ((W = (0, v.mu)(t.workPermissions.defaults, W)),
              (Z = { agentMode: t.workPermissions.mode, permissionProfileId: null, shouldSendPermissionOverrides: !0 }),
              null != W.web_search && (U = { ...U, web_search: W.web_search })),
            {
              input: Y,
              responseItems: K.responseItems,
              turnTrigger: t.turnTrigger ?? "composer",
              responsesapiClientMetadata: (0, g.V)(e, M, {
                message_submission_source: t.messageSubmissionSource,
                in_space: t.inSpace?.toString(),
                [o.sy]: t.usedDictation?.toString(),
              }),
              disabledPluginIds: L ? t.disabledPluginIds : void 0,
              commentAttachments: t.commentAttachments,
              mcpAppModelContextAttachments: t.mcpAppModelContextAttachments,
              workspaceRoots: l,
              cwd: b,
              fileAttachments: (0, s.E5)(t.fileAttachments, t.pastedTextAttachments),
              uploadedFileAttachmentCount:
                (t.uploadedFileAttachments?.length ?? 0) +
                (t.pastedTextAttachments?.filter(({ upload: e }) => null != e).length ?? 0),
              addedFiles: t.addedFiles,
              ...Z,
              model: null,
              serviceTier: P,
              daybreakEnabled: H ? q : void 0,
              reasoningEffort: t.firstTurnReasoningEffort ?? G?.settings.reasoning_effort ?? W.model_reasoning_effort,
              collaborationMode: G,
              config: W,
              configOverrides: null == t.firstTurnConfigOverrides ? U : { ...t.firstTurnConfigOverrides, ...U },
              memoryPreferences: N,
              requiresThreadReferences: (t.threadReferences?.length ?? 0) > 0,
              additionalContext: (0, y.gx)(t),
              additionalDeveloperInstructions:
                [t.additionalDeveloperInstructions, t.libraryFileCreation ? p.z : void 0]
                  .filter(Boolean)
                  .join("\n\n") || void 0,
              workspaceKind: j,
              projectAssignment: O,
              ...("projectless" === j ? { projectlessOutputDirectory: R } : {}),
            }
          )
        },
        v: C,
      },
    )
  },
  Eklu(e, t, n) {
    var a = n("qmMi"),
      r = n("OWtl")
    let i = (0, a.bD)(r.u, (e) => null),
      o = (0, a.bD)(r.u, (e) => null),
      l = (0, a.bD)(r.u, (e) => null),
      s = (0, a.T1)(r.u, (e, { scope: t }) => {
        let n = null,
          a = !1,
          r = null
        return (e) => {
          let l = n
          ;(t.set(i, e.target, e.selection),
            (n = e),
            null != l && l.resolve(!1),
            null != r && clearTimeout(r),
            (r = setTimeout(() => {
              ;((r = null),
                (async function e() {
                  var l, s
                  if (a || null == n) return
                  let d = n
                  ;((n = null), (a = !0), t.set(o, d.target, d.selection))
                  let u = !1
                  try {
                    u = await d.write()
                  } catch {}
                  ;((l = t),
                    (s = d),
                    l.get(o, s.target) === s.selection &&
                      (l.set(o, s.target, null), l.get(i, s.target) === s.selection && l.set(i, s.target, null)),
                    d.resolve(u),
                    (a = !1),
                    null != n && null == r && e())
                })())
            }, 320)))
        }
      })
    n.d(
      t,
      {},
      {
        BG: function ({ conversationId: e, hasConversation: t, hostId: n, cwd: a }) {
          return null != e && t ? ["conversation", e] : ["default", n, a]
        },
        EX: i,
        HM: function (e, t, n, a) {
          return new Promise((r) => {
            e.get(s, JSON.stringify(t))({ resolve: r, selection: n, target: t, write: a })
          })
        },
        pu: l,
        si: o,
      },
    )
  },
  Ld2s(e, t, n) {
    var a = n("IhIa"),
      r = n("X6Vn"),
      i = n("dsow")
    class o extends Error {}
    n.d(
      t,
      {},
      {
        e: o,
        t: async function (e, t, l) {
          let s
          try {
            return await l(t)
          } catch (e) {
            if (!(0, a.Yb)(e) || null != t.untrustedAppMessage || (t.mcpAppModelContextAttachments?.length ?? 0) === 0)
              throw e
          }
          let { McpAppFollowUpConfirmationDialog: d } = await Promise.all([
            n.e(579325),
            n.e(712262),
            n.e(978338),
            n.e(205646),
          ]).then(n.bind(n, "v7ut"))
          if ((0, r.oY)(e, d)) throw new o()
          let u = (0, i.Hh)(t),
            c = await new Promise((t, n) => {
              ;((0, r.qf)(e, d, {
                confirmation: {
                  prompt: u.prompt,
                  imageUrls: u.imageAttachments.map((e) => e.src),
                  onConfirm: (n) => {
                    ;(t(n), (0, r.Oo)(e, d))
                  },
                  onCancel: () => {
                    ;((0, r.Oo)(e, d), n(new o()))
                  },
                },
              }),
                (s = e.watch((e) => {
                  ;(0, r.oY)(e, d) || n(new o())
                })))
            }).finally(() => s?.())
          return l((0, i.TW)(t, { ...u, prompt: c }))
        },
      },
    )
  },
  qEnx(e, t, n) {
    var a = n("LulU")
    n.d(
      t,
      {},
      {
        s: async function ({ dataUrl: e, filename: t, onStep: n, file: r }) {
          let i = await (0, a.QT)(e, t, n, r)
          return { pointer: { ...i, size_bytes: i.size_bytes ?? 0 }, uploadStatus: "ready" }
        },
      },
    )
  },
  VDZe(e, t, n) {
    n.d(
      t,
      {},
      {
        S: async function (e, t) {
          let n
          if (null == e) throw Error("This host does not support managed worktree creation.")
          let a = await e.createForThread(t)
          switch (a.type) {
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
            "error" !== a.type &&
              (n +=
                " If setupError is present in the final result, report the setup failure and keep the checkout; do not automatically retry setup or choose another environment."),
            {
              codex_apps_worktree_creation: {
                kind: "application",
                value: `# Worktree creation status:
${JSON.stringify(a).replaceAll("#", "\\u0023")}
${n}
`,
              },
            }
          )
        },
        d: function ({ hostId: e, threadId: t, requestId: n, startingState: a, environmentConfigPath: r }) {
          return {
            hostId: e,
            threadId: t,
            requestId: n,
            origin: "composer",
            allowAsync: !0,
            ref: a?.type === "working-tree" ? "HEAD" : (a?.remoteRef ?? a?.branchName ?? null),
            name: null,
            existingPath: null,
            environmentConfigPath: r ?? null,
          }
        },
      },
    )
  },
  ESK5(e, t, n) {
    n.d(t, { k: () => v })
    var a = n("qmMi"),
      r = n("xSzB"),
      i = n("ILnd"),
      o = n("OWtl"),
      l = n("Nwp9"),
      s = n("rvFo"),
      d = n("Vsx4"),
      u = n("DBCl"),
      c = n("lnSV"),
      m = n("WaUs")
    let p = {
      "google-drive": {
        getRequest(e) {
          let t = (0, c.t9)(e),
            n = e.pathname.match(/\/(?:d|folders)\/(?:e\/)?([^/]+)/u)?.[1] ?? e.searchParams.get("id")
          return null == t || null == n
            ? null
            : {
                arguments: { fields: "id,name,mimeType,webViewLink", fileId: n },
                cacheKey: `google-drive:${t}:${n}`,
                server: "codex_apps",
                sourceAppId: "google-drive",
                tool: "google_drive.get_file_metadata",
              }
        },
        getTitle: (e, t) =>
          (function (e, t) {
            let n = (0, u.SwP)(t._meta)
            if ("valid" !== n.status) return null
            for (let t of n.resources) if (g(t.url)?.cacheKey === e.cacheKey) return t.title?.trim() || null
            return null
          })(e, t) ??
          (0, m.m)(t.structuredContent)?.title ??
          null,
      },
    }
    function g(e) {
      let t,
        n = (0, d.qe)(e)
      if (null == n) return null
      try {
        t = new URL(e)
      } catch {
        return null
      }
      return p[n.appId]?.getRequest(t) ?? null
    }
    let h = (0, l.m3)("conversation-sources:connector-asset-title-cache", {}),
      f = (0, a.un)(o.u, ({ get: e }) => null != e(h)),
      v = (0, a.vU)(
        o.u,
        ({ hostId: e, url: t }, { get: n, scope: a }) => {
          let o = g(t),
            l = null == o ? null : JSON.stringify([e, o.cacheKey]),
            d = n(f)
          return {
            enabled: null != o && d,
            queryFn: async () => {
              let t = a.get(h)
              if (null == o || null == l || null == t) return null
              let n = t[l]
              if (null != n && Date.now() - n.resolvedAt < 864e5) return n.title
              try {
                let t = (0, r.O9)({
                    isCodexAppsServer: "codex_apps" === o.server,
                    toolResult: await (0, i.W1)(a, e, o.server, o.tool, o.arguments),
                  }),
                  n = p[o.sourceAppId]?.getTitle(o, t) ?? null
                return (null != n && a.set(h, { ...a.get(h), [l]: { resolvedAt: Date.now(), title: n } }), n)
              } catch {
                return null
              }
            },
            queryKey: ["connector-asset-title", l ?? JSON.stringify([e, t])],
            retry: !1,
            staleTime: s.D.FIVE_MINUTES,
          }
        },
        { key: ({ hostId: e, url: t }) => JSON.stringify([e, g(t)?.cacheKey ?? t]) },
      )
  },
  MFk9(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("zd8w"),
      l = n("wD9O"),
      s = n("nMdB"),
      d = n("HBzQ"),
      u = n("JGoU"),
      c = n("M0nI")
    n.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            n,
            m,
            p,
            g,
            h,
            f,
            v,
            y,
            w,
            I,
            x,
            C,
            b,
            A,
            S,
            M,
            _ = (0, r.c)(39)
          _[0] !== e
            ? (({
                accessory: t,
                body: n,
                className: m,
                disclosure: p,
                externalDisclosure: g,
                headerClassName: h,
                icon: f,
                summary: y,
                ...v
              } = e),
              (_[0] = e),
              (_[1] = t),
              (_[2] = n),
              (_[3] = m),
              (_[4] = p),
              (_[5] = g),
              (_[6] = h),
              (_[7] = f),
              (_[8] = v),
              (_[9] = y))
            : ((t = _[1]),
              (n = _[2]),
              (m = _[3]),
              (p = _[4]),
              (g = _[5]),
              (h = _[6]),
              (f = _[7]),
              (v = _[8]),
              (y = _[9]))
          let k = (0, o.useId)(),
            E = (0, l.dz)(),
            T = p ?? g
          _[10] !== T || _[11] !== E
            ? ((w = (e) => {
                ;((0, s.I)(e.currentTarget, E), T?.onToggle(e))
              }),
              (_[10] = T),
              (_[11] = E),
              (_[12] = w))
            : (w = _[12])
          let P = w,
            D = null == T ? void 0 : k,
            N =
              null != T &&
              "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:[--agent-activity-summary-color:var(--color-text)]"
          ;(_[13] !== N
            ? ((I = (0, i.A)(
                "min-w-0 flex-1 truncate [&_*:not(button)]:!text-(--agent-activity-summary-color)",
                c.A.summary,
                N,
              )),
              (_[13] = N),
              (_[14] = I))
            : (I = _[14]),
            _[15] !== y || _[16] !== D || _[17] !== I
              ? ((x = (0, a.jsx)("span", { id: D, className: I, children: y })),
                (_[15] = y),
                (_[16] = D),
                (_[17] = I),
                (_[18] = x))
              : (x = _[18]),
            _[19] !== f || _[20] !== x
              ? ((C = (0, a.jsxs)(a.Fragment, { children: [f, x] })), (_[19] = f), (_[20] = x), (_[21] = C))
              : (C = _[21]))
          let j = C
          _[22] !== n || _[23] !== p || _[24] !== g || _[25] !== P || _[26] !== k
            ? ((b = p
                ? { disclosure: { ...p, labelledBy: k, onToggle: P } }
                : { body: n, externalDisclosure: g && { ...g, labelledBy: k, onToggle: P } }),
              (_[22] = n),
              (_[23] = p),
              (_[24] = g),
              (_[25] = P),
              (_[26] = k),
              (_[27] = b))
            : (b = _[27])
          let R = b
          return (
            _[28] !== h ? ((A = (0, i.A)("max-w-full", h)), (_[28] = h), (_[29] = A)) : (A = _[29]),
            _[30] !== t || _[31] !== j || _[32] !== R || _[33] !== A
              ? ((S = (0, a.jsx)(d.m, { ...R, accessory: t, className: A, children: j })),
                (_[30] = t),
                (_[31] = j),
                (_[32] = R),
                (_[33] = A),
                (_[34] = S))
              : (S = _[34]),
            _[35] !== m || _[36] !== v || _[37] !== S
              ? ((M = (0, a.jsx)(u.n, { ...v, className: m, children: S })),
                (_[35] = m),
                (_[36] = v),
                (_[37] = S),
                (_[38] = M))
              : (M = _[38]),
            M
          )
        },
      },
    )
  },
  A7Ss(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("K4Cx"),
      l = n("T1PX"),
      s = n("V8uZ")
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            n,
            d,
            u,
            c = (0, r.c)(15),
            { expanded: m, height: p, onExpandComplete: g, children: h } = e,
            f = (0, l.I)(),
            v = m ? p : 0,
            y = +!!m
          ;(c[0] !== v || c[1] !== y
            ? ((t = { height: v, opacity: y }), (c[0] = v), (c[1] = y), (c[2] = t))
            : (t = c[2]),
            c[3] !== f ? ((n = f ? { duration: 0 } : s.X7), (c[3] = f), (c[4] = n)) : (n = c[4]))
          let w = !m,
            I = !m,
            x = m ? "overflow-visible" : "pointer-events-none overflow-hidden"
          c[5] !== x
            ? ((d = (0, i.A)(
                "motion-reduce:h-auto! motion-reduce:aria-hidden:h-0! motion-reduce:opacity-100! motion-reduce:aria-hidden:opacity-0!",
                x,
              )),
              (c[5] = x),
              (c[6] = d))
            : (d = c[6])
          let C = m ? g : void 0
          return (
            c[7] !== h || c[8] !== t || c[9] !== n || c[10] !== w || c[11] !== I || c[12] !== d || c[13] !== C
              ? ((u = (0, a.jsx)(o.P.div, {
                  initial: !1,
                  animate: t,
                  transition: n,
                  "aria-hidden": w,
                  inert: I,
                  className: d,
                  onAnimationComplete: C,
                  children: h,
                })),
                (c[7] = h),
                (c[8] = t),
                (c[9] = n),
                (c[10] = w),
                (c[11] = I),
                (c[12] = d),
                (c[13] = C),
                (c[14] = u))
              : (u = c[14]),
            u
          )
        },
      },
    )
  },
  K5Kt(e, t, n) {
    n.d(t, { j: () => l })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("QmNX")
    function l(e) {
      let t,
        n,
        l,
        s,
        d,
        u,
        c,
        m = (0, r.c)(15)
      m[0] !== e
        ? (({ ref: l, className: t, indent: s, variant: d, ...n } = e),
          (m[0] = e),
          (m[1] = t),
          (m[2] = n),
          (m[3] = l),
          (m[4] = s),
          (m[5] = d))
        : ((t = m[1]), (n = m[2]), (l = m[3]), (s = m[4]), (d = m[5]))
      let p = void 0 === d ? "default" : d,
        g = ((void 0 !== s && s) || "steps" === p) && "indented-NdDHUk",
        h = "steps" === p && "steps-SF26rj",
        f = "default" === p && "pt-3"
      return (
        m[6] !== t || m[7] !== g || m[8] !== h || m[9] !== f
          ? ((u = (0, i.A)(g, h, f, t)), (m[6] = t), (m[7] = g), (m[8] = h), (m[9] = f), (m[10] = u))
          : (u = m[10]),
        m[11] !== n || m[12] !== l || m[13] !== u
          ? ((c = (0, a.jsx)(o.B, { spacing: "activity", ref: l, className: u, ...n })),
            (m[11] = n),
            (m[12] = l),
            (m[13] = u),
            (m[14] = c))
          : (c = m[14]),
        c
      )
    }
  },
  HBzQ(e, t, n) {
    n.d(t, { m: () => c, A: () => m })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("zd8w"),
      l = n("dUfi"),
      s = n("lCMb")
    function d(e) {
      let t,
        n,
        o = (0, r.c)(4),
        { expanded: l } = e,
        d = l && "rotate-90 opacity-100"
      return (
        o[0] !== d
          ? ((t = (0, i.A)(
              "icon-2xs shrink-0 text-tertiary opacity-0 group-focus-visible/activity-header:opacity-100 group-focus-visible/activity-header:text-default group-has-[:focus-visible]/activity-header:opacity-100 group-has-[:focus-visible]/activity-header:text-default transition-transform duration-relaxed [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:opacity-100",
              d,
            )),
            (o[0] = d),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== t ? ((n = (0, a.jsx)(s.A, { "aria-hidden": !0, className: t })), (o[2] = t), (o[3] = n)) : (n = o[3]),
        n
      )
    }
    var u = n("dqpP")
    function c(e) {
      let t,
        n,
        i,
        o,
        s,
        d,
        u,
        c = (0, r.c)(15)
      c[0] !== e
        ? (({ body: t, disclosure: n, externalDisclosure: i, ...o } = e),
          (c[0] = e),
          (c[1] = t),
          (c[2] = n),
          (c[3] = i),
          (c[4] = o))
        : ((t = c[1]), (n = c[2]), (i = c[3]), (o = c[4]))
      let p = n?.details,
        g = n ?? i
      return (
        c[5] !== o || c[6] !== g
          ? ((s = (0, a.jsx)(m, { ...o, externalDisclosure: g })), (c[5] = o), (c[6] = g), (c[7] = s))
          : (s = c[7]),
        c[8] !== t || c[9] !== p || c[10] !== n
          ? ((d =
              null == n
                ? t
                : (0, a.jsx)(l.Q, {
                    expanded: n.expanded,
                    className: n.bodyClassName,
                    children: "function" == typeof p ? n.expanded && p() : p,
                  })),
            (c[8] = t),
            (c[9] = p),
            (c[10] = n),
            (c[11] = d))
          : (d = c[11]),
        c[12] !== s || c[13] !== d
          ? ((u = (0, a.jsxs)(a.Fragment, { children: [s, d] })), (c[12] = s), (c[13] = d), (c[14] = u))
          : (u = c[14]),
        u
      )
    }
    function m(e) {
      let t,
        n,
        l,
        s,
        c,
        m,
        p,
        g = (0, r.c)(21),
        { accessory: h, children: f, className: v, externalDisclosure: y } = e,
        w = (0, o.useId)(),
        I = null == y ? void 0 : w,
        x = null != y && "pointer-events-none relative [&_a]:pointer-events-auto [&_button]:pointer-events-auto"
      ;(g[0] !== x ? ((t = (0, i.A)("shrink truncate text-size-chat", x)), (g[0] = x), (g[1] = t)) : (t = g[1]),
        g[2] !== f || g[3] !== I || g[4] !== t
          ? ((n = (0, a.jsx)(u.F, { id: I, className: t, children: f })),
            (g[2] = f),
            (g[3] = I),
            (g[4] = t),
            (g[5] = n))
          : (n = g[5]),
        g[6] !== y
          ? ((l =
              null == y
                ? null
                : (0, a.jsx)("span", {
                    className: (0, i.A)("pointer-events-none relative flex", y.alignEnd && "ms-auto"),
                    children: (0, a.jsx)(d, { expanded: y.expanded }),
                  })),
            (g[6] = y),
            (g[7] = l))
          : (l = g[7]),
        g[8] !== h || g[9] !== n || g[10] !== l
          ? ((s = (0, a.jsxs)(a.Fragment, { children: [n, h, l] })), (g[8] = h), (g[9] = n), (g[10] = l), (g[11] = s))
          : (s = g[11]))
      let C = s
      g[12] !== v
        ? ((c = (0, i.A)(
            "group/activity-header relative inline-flex min-w-0 max-w-full self-start items-center gap-1 p-0 text-start",
            v,
          )),
          (g[12] = v),
          (g[13] = c))
        : (c = g[13])
      let b = c
      return (
        g[14] !== y || g[15] !== w
          ? ((m =
              null == y
                ? null
                : (0, a.jsx)("button", {
                    type: "button",
                    className:
                      "absolute inset-0 cursor-interaction rounded-md bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-inset",
                    "aria-label": y.accessibleLabel,
                    "aria-labelledby": null == y.accessibleLabel ? (y.labelledBy ?? w) : void 0,
                    "aria-expanded": y.expanded,
                    onClick: y.onToggle,
                  })),
            (g[14] = y),
            (g[15] = w),
            (g[16] = m))
          : (m = g[16]),
        g[17] !== C || g[18] !== b || g[19] !== m
          ? ((p = (0, a.jsxs)("div", { className: b, children: [m, C] })),
            (g[17] = C),
            (g[18] = b),
            (g[19] = m),
            (g[20] = p))
          : (p = g[20]),
        p
      )
    }
  },
  dqpP(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57")
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n,
            o,
            l,
            s,
            d,
            u = (0, r.c)(12)
          u[0] !== e
            ? (({ ref: o, className: t, align: l, ...n } = e),
              (u[0] = e),
              (u[1] = t),
              (u[2] = n),
              (u[3] = o),
              (u[4] = l))
            : ((t = u[1]), (n = u[2]), (o = u[3]), (l = u[4]))
          let c = "center" === (void 0 === l ? "center" : l) ? "items-center" : "items-start"
          return (
            u[5] !== t || u[6] !== c
              ? ((s = (0, i.A)("inline-flex min-w-0 gap-2 align-top", c, t)), (u[5] = t), (u[6] = c), (u[7] = s))
              : (s = u[7]),
            u[8] !== n || u[9] !== o || u[10] !== s
              ? ((d = (0, a.jsx)("span", { ref: o, className: s, ...n })),
                (u[8] = n),
                (u[9] = o),
                (u[10] = s),
                (u[11] = d))
              : (d = u[11]),
            d
          )
        },
      },
    )
  },
  JGoU(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("q5qu")
    n.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            n,
            l,
            s,
            d,
            u = (0, r.c)(10)
          return (
            u[0] !== e
              ? (({ className: n, children: t, ...l } = e), (u[0] = e), (u[1] = t), (u[2] = n), (u[3] = l))
              : ((t = u[1]), (n = u[2]), (l = u[3])),
            u[4] !== n ? ((s = (0, i.A)("flex min-w-0 flex-col", n)), (u[4] = n), (u[5] = s)) : (s = u[5]),
            u[6] !== t || u[7] !== l || u[8] !== s
              ? ((d = (0, a.jsx)(o.D, {
                  padding: "offset",
                  children: (0, a.jsx)("div", { ...l, className: s, children: t }),
                })),
                (u[6] = t),
                (u[7] = l),
                (u[8] = s),
                (u[9] = d))
              : (d = u[9]),
            d
          )
        },
      },
    )
  },
  cKhh(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("zd8w"),
      o = n("A7Ss"),
      l = n("wbOy"),
      s = n("ltPT"),
      d = n("MFk9"),
      u = n("K5Kt")
    n.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            n,
            c,
            m,
            p,
            g,
            h,
            f = (0, r.c)(34),
            {
              defaultExpanded: v,
              indentContent: y,
              icon: w,
              onExpand: I,
              summary: x,
              status: C,
              children: b,
              unmountOnCollapse: A,
            } = e,
            S = void 0 === y || y,
            M = void 0 !== A && A,
            [_, k] = (0, i.useState)(!1),
            [E, T] = (0, i.useState)(void 0 !== v && v),
            { elementHeightPx: P, elementRef: D } = (0, s.$)(),
            N = "running" === C,
            j = null != b,
            R = j && (N ? !_ : E)
          f[0] !== _ || f[1] !== E || f[2] !== R || f[3] !== N || f[4] !== I
            ? ((t = () => {
                ;(R || I?.(), N ? k(!_) : T(!E))
              }),
              (f[0] = _),
              (f[1] = E),
              (f[2] = R),
              (f[3] = N),
              (f[4] = I),
              (f[5] = t))
            : (t = f[5])
          let O = t
          f[6] !== N || f[7] !== x
            ? ((n = (0, a.jsx)(l.N, {
                active: N,
                className:
                  "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                children: x,
              })),
              (f[6] = N),
              (f[7] = x),
              (f[8] = n))
            : (n = f[8])
          let U = n
          f[9] !== O || f[10] !== j || f[11] !== R
            ? ((c = j ? { expanded: R, onToggle: O } : void 0), (f[9] = O), (f[10] = j), (f[11] = R), (f[12] = c))
            : (c = f[12])
          let L = c,
            G = M ? void 0 : D
          f[13] !== b || f[14] !== S || f[15] !== G
            ? ((m = (0, a.jsx)(u.j, { ref: G, indent: S, children: b })),
              (f[13] = b),
              (f[14] = S),
              (f[15] = G),
              (f[16] = m))
            : (m = f[16])
          let q = m
          f[17] !== w || f[18] !== U
            ? ((p = { icon: w, summary: U }), (f[17] = w), (f[18] = U), (f[19] = p))
            : (p = f[19])
          let B = p
          if (M || null == L) {
            let e, t
            return (
              f[20] !== q || f[21] !== L
                ? ((e = L && { ...L, details: q }), (f[20] = q), (f[21] = L), (f[22] = e))
                : (e = f[22]),
              f[23] !== B || f[24] !== e
                ? ((t = (0, a.jsx)(d.o, { ...B, disclosure: e })), (f[23] = B), (f[24] = e), (f[25] = t))
                : (t = f[25]),
              t
            )
          }
          f[26] !== q || f[27] !== P || f[28] !== R
            ? ((g = (0, a.jsx)(o.k, { expanded: R, height: P, children: q })),
              (f[26] = q),
              (f[27] = P),
              (f[28] = R),
              (f[29] = g))
            : (g = f[29])
          let V = g
          return (
            f[30] !== V || f[31] !== L || f[32] !== B
              ? ((h = (0, a.jsx)(d.o, { ...B, body: V, externalDisclosure: L })),
                (f[30] = V),
                (f[31] = L),
                (f[32] = B),
                (f[33] = h))
              : (h = f[33]),
            h
          )
        },
      },
    )
  },
  dUfi(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("suct"),
      l = n("iodE"),
      s = n("K4Cx"),
      d = n("T1PX"),
      u = n("V8uZ")
    function c(e) {
      let t,
        n,
        o,
        c,
        m,
        p,
        g,
        h,
        f,
        v,
        y,
        w,
        I,
        x,
        C,
        b,
        A,
        S,
        M,
        _ = (0, r.c)(49)
      _[0] !== e
        ? (({ ref: p, className: n, children: t, maxHeight: o, snappy: h, onExpandComplete: c, style: g, ...m } = e),
          (_[0] = e),
          (_[1] = t),
          (_[2] = n),
          (_[3] = o),
          (_[4] = c),
          (_[5] = m),
          (_[6] = p),
          (_[7] = g),
          (_[8] = h))
        : ((t = _[1]), (n = _[2]), (o = _[3]), (c = _[4]), (m = _[5]), (p = _[6]), (g = _[7]), (h = _[8]))
      let k = void 0 !== h && h,
        E = (0, l.tF)(),
        T = (0, d.I)()
      _[9] !== o ? ((f = null == o ? { height: 0 } : { maxHeight: 0 }), (_[9] = o), (_[10] = f)) : (f = _[10])
      let P = f
      _[11] !== o || _[12] !== g
        ? ((v = { overflow: "hidden", ...g, "--disclosure-max-height": o }), (_[11] = o), (_[12] = g), (_[13] = v))
        : (v = _[13])
      let D = v,
        N =
          null == o
            ? "motion-reduce:h-auto! motion-reduce:aria-hidden:h-0!"
            : "motion-reduce:max-h-(--disclosure-max-height)! motion-reduce:aria-hidden:max-h-0!",
        j = !E && "pointer-events-none"
      _[14] !== n || _[15] !== N || _[16] !== j
        ? ((y = (0, i.A)(
            "overflow-hidden",
            "motion-reduce:opacity-100! motion-reduce:aria-hidden:opacity-0!",
            N,
            j,
            n,
          )),
          (_[14] = n),
          (_[15] = N),
          (_[16] = j),
          (_[17] = y))
        : (y = _[17])
      let R = !E || m["aria-hidden"],
        O = !E || m.inert
      ;(_[18] !== P || _[19] !== T
        ? ((w = !T && { ...P, opacity: 0 }), (_[18] = P), (_[19] = T), (_[20] = w))
        : (w = _[20]),
        _[21] !== o ? ((I = null == o ? { height: "auto" } : { maxHeight: o }), (_[21] = o), (_[22] = I)) : (I = _[22]))
      let U = null == o ? "visible" : "hidden"
      return (
        _[23] !== U ? ((x = { overflow: U }), (_[23] = U), (_[24] = x)) : (x = _[24]),
        _[25] !== I || _[26] !== x
          ? ((C = { ...I, opacity: 1, overflow: "hidden", transitionEnd: x }), (_[25] = I), (_[26] = x), (_[27] = C))
          : (C = _[27]),
        _[28] !== P ? ((b = { ...P, opacity: 0, overflow: "hidden" }), (_[28] = P), (_[29] = b)) : (b = _[29]),
        _[30] !== E || _[31] !== c
          ? ((A = () => {
              E && c?.()
            }),
            (_[30] = E),
            (_[31] = c),
            (_[32] = A))
          : (A = _[32]),
        _[33] !== T || _[34] !== k
          ? ((S = T ? { duration: 0 } : { ...u.X7, ...(k ? { duration: 0.15 } : {}) }),
            (_[33] = T),
            (_[34] = k),
            (_[35] = S))
          : (S = _[35]),
        _[36] !== t ||
        _[37] !== D ||
        _[38] !== m ||
        _[39] !== p ||
        _[40] !== C ||
        _[41] !== b ||
        _[42] !== A ||
        _[43] !== S ||
        _[44] !== y ||
        _[45] !== R ||
        _[46] !== O ||
        _[47] !== w
          ? ((M = (0, a.jsx)(s.P.div, {
              ...m,
              ref: p,
              className: y,
              style: D,
              "aria-hidden": R,
              inert: O,
              initial: w,
              animate: C,
              exit: b,
              onAnimationComplete: A,
              transition: S,
              children: t,
            })),
            (_[36] = t),
            (_[37] = D),
            (_[38] = m),
            (_[39] = p),
            (_[40] = C),
            (_[41] = b),
            (_[42] = A),
            (_[43] = S),
            (_[44] = y),
            (_[45] = R),
            (_[46] = O),
            (_[47] = w),
            (_[48] = M))
          : (M = _[48]),
        M
      )
    }
    n.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            n,
            i,
            l,
            s = (0, r.c)(8)
          return (
            s[0] !== e ? (({ expanded: t, ...n } = e), (s[0] = e), (s[1] = t), (s[2] = n)) : ((t = s[1]), (n = s[2])),
            s[3] !== t || s[4] !== n
              ? ((i = t ? (0, a.jsx)(c, { ...n }) : null), (s[3] = t), (s[4] = n), (s[5] = i))
              : (i = s[5]),
            s[6] !== i ? ((l = (0, a.jsx)(o.N, { initial: !1, children: i })), (s[6] = i), (s[7] = l)) : (l = s[7]),
            l
          )
        },
      },
    )
  },
  TleN(e, t, n) {
    var a = n("QosV"),
      r = n("DBCl"),
      i = n("Ywss")
    n.d(
      t,
      {},
      {
        g: function () {
          let e,
            t = (0, a.c)(2),
            n = (0, i.RQ)("/local/:conversationId"),
            o = n?.params.conversationId
          return (t[0] !== o ? ((e = o ? (0, r.JXB)(o) : null), (t[0] = o), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  ts3W(e, t, n) {
    var a = n("CBsD"),
      r = n("LulU"),
      i = n("xygx")
    n.d(
      t,
      {},
      {
        D: function ({
          conversationId: e,
          environmentId: t,
          filename: n,
          hostId: o,
          imageAssetResolver: l,
          onCopySucceeded: s,
          onFailure: d,
          src: u,
        }) {
          let c = (0, i.Gz)({
            conversationId: e,
            environmentId: t,
            absoluteImageFilePath: (0, a.IY)(u),
            hostId: o,
            imageAssetResolver: l,
            src: u,
          }).then(async (e) => {
            if (null == e) throw Error("Could not read image for clipboard copy")
            let t = e instanceof Blob ? e : (0, r.bX)(e, n).file
            if ("image/png" === t.type) return t
            let a = await createImageBitmap(t),
              i = document.createElement("canvas")
            ;((i.width = a.width), (i.height = a.height))
            let o = i.getContext("2d")
            if (null == o) throw (a.close(), Error("Could not create image clipboard canvas"))
            ;(o.drawImage(a, 0, 0), a.close())
            let l = await new Promise((e) => {
              i.toBlob(e, "image/png")
            })
            if (null == l) throw Error("Could not encode image for clipboard copy")
            return l
          })
          c.catch(() => void 0)
          try {
            navigator.clipboard.write([new ClipboardItem({ "image/png": c })]).then(s, d)
          } catch {
            d()
          }
        },
        p: function () {
          return "u" > typeof ClipboardItem && "function" == typeof navigator.clipboard?.write
        },
      },
    )
  },
  Oco2(e, t, n) {
    var a = n("rICf"),
      r = n("CiLO"),
      i = n("yGJW")
    let o = {
        canvas: a.CodexGeneratedImageViewType.CODEX_GENERATED_IMAGE_VIEW_TYPE_CANVAS,
        preview_dialog: a.CodexGeneratedImageViewType.CODEX_GENERATED_IMAGE_VIEW_TYPE_PREVIEW_DIALOG,
        single: a.CodexGeneratedImageViewType.CODEX_GENERATED_IMAGE_VIEW_TYPE_SINGLE_IMAGE,
      },
      l = {
        canvas_button: a.CodexGeneratedImageViewEntrypoint.CODEX_GENERATED_IMAGE_VIEW_ENTRYPOINT_CANVAS_BUTTON,
        gallery_edit_button:
          a.CodexGeneratedImageViewEntrypoint.CODEX_GENERATED_IMAGE_VIEW_ENTRYPOINT_GALLERY_EDIT_BUTTON,
        image_click: a.CodexGeneratedImageViewEntrypoint.CODEX_GENERATED_IMAGE_VIEW_ENTRYPOINT_IMAGE_CLICK,
        lightbox_edit_button:
          a.CodexGeneratedImageViewEntrypoint.CODEX_GENERATED_IMAGE_VIEW_ENTRYPOINT_LIGHTBOX_EDIT_BUTTON,
        view_toggle: a.CodexGeneratedImageViewEntrypoint.CODEX_GENERATED_IMAGE_VIEW_ENTRYPOINT_VIEW_TOGGLE,
      },
      s = {
        comment: a.CodexGeneratedImageEditMode.CODEX_GENERATED_IMAGE_EDIT_MODE_COMMENT,
        remove: a.CodexGeneratedImageEditMode.CODEX_GENERATED_IMAGE_EDIT_MODE_REMOVE,
        resize: a.CodexGeneratedImageEditMode.CODEX_GENERATED_IMAGE_EDIT_MODE_RESIZE,
        select: a.CodexGeneratedImageEditMode.CODEX_GENERATED_IMAGE_EDIT_MODE_SELECT,
        markup: a.CodexGeneratedImageEditMode.CODEX_GENERATED_IMAGE_EDIT_MODE_MARKUP,
        remove_background: a.CodexGeneratedImageEditMode.CODEX_GENERATED_IMAGE_EDIT_MODE_REMOVE_BACKGROUND,
      }
    function d(e, { commentCount: t, hasGeneralInstruction: n, imageSource: r, mode: o, selectedImageCount: l }) {
      ;(0, i.yy)(e, a.CodexImageEditSubmitted, {
        commentCount: t,
        hasGeneralInstruction: n,
        imageSource: r,
        mode: s[o],
        selectedImageCount: l,
      })
    }
    n.d(
      t,
      {},
      {
        PQ: function (e, { availableImageCount: t, entrypoint: n, imageSource: r, view: s }) {
          ;(0, i.yy)(e, a.CodexImageView, { availableImageCount: t, entrypoint: l[n], imageSource: r, view: o[s] })
        },
        jf: function (e, { imageSource: t, mode: n, view: r }) {
          ;(0, i.yy)(e, a.CodexImageEditEntered, { imageSource: t, mode: s[n], view: o[r] })
        },
        r9: function (e, t) {
          let n = e.get(r.gy),
            a = e.get(r.JX)
          for (let r of ["generated", "uploaded"]) {
            let i = new Set(
              n
                .filter(
                  ({ excludeFromImageAnalytics: e, id: t }) =>
                    !0 !== e && (t.startsWith("image-playground:") ? "generated" : "uploaded") === r,
                )
                .map(({ id: e }) => e),
            )
            if (0 === i.size) continue
            let o = a.filter(({ attachmentId: e }) => i.has(e)),
              l = o.reduce((e, { comments: t }) => e + t.length, 0)
            ;("uploaded" !== r || 0 !== l) &&
              d(e, {
                commentCount: l > 0 ? l : void 0,
                hasGeneralInstruction: t.trim().length > 0,
                imageSource: r,
                mode: l > 0 ? "comment" : "select",
                selectedImageCount: "generated" === r ? i.size : o.length,
              })
          }
        },
        xZ: d,
      },
    )
  },
  YeQK(e, t, n) {
    n.r(t)
    var a = n("iRMi"),
      r = n("DBCl"),
      i = n("Qgfj"),
      o = n("DD2M"),
      l = n("Wefw"),
      s = n("tl5a"),
      d = n("Ow2S"),
      u = n("jAnS"),
      c = n("CiLO"),
      m = n("jEN2"),
      p = n("Eklu"),
      g = n("uIyc"),
      h = n("qEnx"),
      f = n("SGsN"),
      v = n("Igf5"),
      y = n("XYHU"),
      w = n("ddzD"),
      I = n("urzV"),
      x = n("ylNI"),
      C = n("CBsD"),
      b = n("Q4dB"),
      A = n("Sd8U"),
      S = n("nf3G"),
      M = n("ndjw"),
      _ = n("b38k"),
      k = n("gTKF"),
      E = n("LulU"),
      T = n("zHp1"),
      P = n("aepO"),
      D = n("bnxy"),
      N = n("ts3W"),
      j = n("xygx")
    n.d(
      t,
      {},
      {
        getGeneratedImageContextMenuItems: function (
          e,
          {
            chatGptConversationId: t,
            displaySrc: n,
            hostId: R,
            image: O,
            imageAssetResolver: U,
            intl: L,
            onAddToChat: G,
            onAddedToChat: q,
            onDownload: B,
            onDownloadClick: V,
            onDownloadInitiated: F,
            onDownloaded: W,
            onOpenedInNewTab: H,
          },
        ) {
          let z = (0, A.ah)(e),
            K = R ?? e.get(S.threadHostId$),
            Y = e.get(k.threadExecutorTargetByThread$, null == z ? null : { kind: "app-server", conversationId: z }),
            Z = Y?.hostId === K ? Y.environmentId : void 0,
            $ = (0, C.IY)(O.src),
            X = (function (e, t, n) {
              if (!("kind" in e)) return (0, j.gn)(e)
              let a = (e.filename ?? (null == t ? e.alt.trim() : (0, D.Q0)(t))) || "image"
              return /\.[a-z\d]+$/i.test(a) ? a : `${a}.${(0, I.TP)(e.src) ?? (0, I.TP)(n) ?? "png"}`
            })(O, $, n),
            Q = (0, w.R)({ isAnimated: "isAnimated" in O && !0 === O.isAnimated }),
            J = []
          J.push({
            id: "open-image-in-new-tab",
            message: (0, i.zR)({
              id: "codex.localConversation.image.contextMenu.openInNewTab",
              defaultMessage: "Open image in new tab",
            }),
            onSelect: () => {
              let t = () => {
                e.get(f.Id).danger(
                  L.formatMessage({
                    id: "codex.localConversation.image.contextMenu.openFailure",
                    defaultMessage: "Could not open image",
                  }),
                  { errorAnalytics: { toastId: "imageContextMenu.openFailure" } },
                )
              }
              ;(async () => {
                let a =
                  null == $ && (!("kind" in O) || /^https?:/i.test(O.src))
                    ? O.src
                    : await (0, j.C0)({
                        conversationId: z,
                        environmentId: Z,
                        absoluteImageFilePath: $,
                        hostId: K,
                        imageAssetResolver: U,
                        queryClient: e.queryClient,
                        src: O.src,
                      })
                null == a
                  ? t()
                  : (0, x.openImagePreview)(e, {
                      alt: O.alt,
                      attachmentSrc: "kind" in O || null != $ ? a : O.src,
                      imageAssetResolver: U,
                      isAnimated: Q.isAnimated,
                      onDownloadInitiated: null == F ? void 0 : () => F("lightbox"),
                      openInEditor: !0,
                      readOnly: !0,
                      ...(!("kind" in O) && null == $
                        ? {
                            src: n,
                            title: O.tabTitle,
                            generatedImages: [O],
                            generatedImagesSource: "provided",
                            initialImageId: O.id,
                          }
                        : { src: a, downloadSrc: a, title: "kind" in O ? O.alt : O.tabTitle }),
                    }) && H?.()
              })().catch(t)
            },
          })
          let ee = [O.src, n].find(r.q$v)
          ;(null != ee &&
            J.push({
              id: "copy-image-address",
              message: (0, i.zR)({
                id: "codex.localConversation.image.contextMenu.copyAddress",
                defaultMessage: "Copy image address",
              }),
              onSelect: () => {
                ;(0, P.lW)(ee)
              },
            }),
            Q.canSelect &&
              J.push({
                id: "add-to-chat",
                message: (0, i.zR)({
                  id: "codex.localConversation.generatedImage.contextMenu.addToChat",
                  defaultMessage: "Add to chat",
                }),
                onSelect: () => {
                  if (G?.() === !1) return
                  let a = () => {
                    e.get(f.Id).danger(
                      L.formatMessage({
                        id: "codex.localConversation.imagePlayground.selectFailed",
                        defaultMessage: "Could not select image",
                      }),
                      { errorAnalytics: { toastId: "codex.localConversation.imagePlayground.selectFailed" } },
                    )
                  }
                  ;(0, m.xJ)()
                  let r = t ?? ("chatgpt-thread" === e.value.routeKind ? e.value.conversationId : void 0)
                  null != r
                    ? (0, j.C0)({
                        conversationId: z,
                        environmentId: Z,
                        absoluteImageFilePath: $,
                        hostId: K,
                        imageAssetResolver: U,
                        queryClient: e.queryClient,
                        src: O.src,
                      })
                        .then(async (t) => {
                          if (null == t) return void a()
                          let { file: n } = (0, E.bX)(t, X)
                          ;(await (0, d.Jv)(e, r, [n], {
                            isTemporaryChat:
                              "chatgpt-thread" === e.value.routeKind &&
                              e.value.conversationId === r &&
                              (0, u.CV)(e.value.search ?? ""),
                          })) && q?.()
                        })
                        .catch(a)
                    : "kind" in O
                      ? (function (
                          e,
                          {
                            absoluteImageFilePath: t,
                            displaySrc: n,
                            filename: a,
                            hostId: r,
                            image: i,
                            imageAssetResolver: l,
                            intl: d,
                            onFailure: u,
                            onAddedToChat: m,
                          },
                        ) {
                          let v = i.src.startsWith("data:image/") ? i.src : void 0,
                            y = (0, A.ah)(e),
                            w = r
                          if (
                            (null != y
                              ? (w = e.get(s.qX, y))
                              : "other" !== e.value.routeKind && (w = e.get(S.threadHostId$)),
                            null != y)
                          ) {
                            let t =
                                e.get(p.EX, ["conversation", y])?.model ??
                                e.get(p.si, ["conversation", y])?.model ??
                                e.get(s.aG, y)?.settings.model,
                              n = e.queryClient
                                .getQueriesData({ queryKey: [...b.$, w] })
                                .flatMap(([, e]) => e?.data ?? [])
                                .find(({ model: e }) => e === t)
                            if (n?.inputModalities.includes("image") === !1)
                              return e
                                .get(f.Id)
                                .danger(
                                  d.formatMessage({
                                    id: "composer.imageInputsUnsupported",
                                    defaultMessage: "This model does not support image inputs. Try a different model",
                                  }),
                                  { errorAnalytics: { toastId: "composer.imageInputsUnsupported" } },
                                )
                          }
                          let I = (0, o.A)(),
                            x = "cloud" === e.get(c.YH) || null == v
                          if (
                            ((0, c.Kk)(e, (e) => {
                              e.imageAttachments.push({
                                filename: a,
                                id: I,
                                localPath: r === w ? (t ?? void 0) : void 0,
                                previewSrc: v ?? n,
                                src: v ?? i.src,
                                uploadStatus: x ? "uploading" : "idle",
                              })
                            }),
                            !x)
                          )
                            return m?.()
                          let C = (0, g.Mz)(e, { hostId: w, id: I }),
                            M = () => {
                              C.isPending() &&
                                (C.fail(),
                                (0, c.Kk)(e, (e) => {
                                  ;((e.imageAttachments = e.imageAttachments.filter((e) => e.id !== I)),
                                    (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => e.attachmentId !== I)))
                                }),
                                u())
                            }
                          ;(async () => {
                            let n =
                              v ??
                              (await (0, j.C0)({
                                conversationId: y,
                                absoluteImageFilePath: t,
                                hostId: r,
                                imageAssetResolver: l,
                                queryClient: e.queryClient,
                                src: i.src,
                              }))
                            if (!C.isPending()) return
                            if (null == n) return void M()
                            let o = "cloud" === e.get(c.YH)
                            if (
                              ((0, c.Kk)(e, (e) => {
                                let t = e.imageAttachments.find((e) => e.id === I)
                                null != t &&
                                  ((t.src = n),
                                  (t.previewSrc = n),
                                  (t.uploadSrc = n),
                                  (t.uploadStatus = o ? "uploading" : "idle"))
                              }),
                              o)
                            ) {
                              let t = await (0, h.s)({ dataUrl: n, filename: a })
                              if (!C.isPending()) return
                              ;(0, c.Kk)(e, (e) => {
                                let n = e.imageAttachments.find((e) => e.id === I)
                                null != n && Object.assign(n, t)
                              })
                            }
                            ;(C.succeed(), m?.())
                          })().catch(M)
                        })(e, {
                          absoluteImageFilePath: $,
                          displaySrc: n,
                          filename: X,
                          hostId: K,
                          image: O,
                          imageAssetResolver: U,
                          intl: L,
                          onFailure: a,
                          onAddedToChat: q,
                        })
                      : (0, j.j_)(e, {
                          displaySrc: n,
                          hostId: K,
                          image: O,
                          imageAssetResolver: U,
                          onFailure: a,
                          queryClient: e.queryClient,
                        })
                          .then((e) => {
                            e && q?.()
                          })
                          .catch(a)
                },
              }),
            Q.canCopy &&
              (0, N.p)() &&
              J.push({
                id: "copy-image",
                message: (0, i.zR)({
                  id: "codex.localConversation.generatedImage.contextMenu.copyImage",
                  defaultMessage: "Copy image",
                }),
                onSelect: () => {
                  ;((0, l.l)(e, {
                    action: a.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_COPY_IMAGE,
                    surface: a.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU,
                  }),
                    (0, N.D)({
                      conversationId: z,
                      environmentId: Z,
                      filename: X,
                      hostId: K,
                      imageAssetResolver: U,
                      onFailure: () => {
                        e.get(f.Id).danger(
                          L.formatMessage({
                            id: "codex.localConversation.image.contextMenu.copyFailure",
                            defaultMessage: "Could not copy image",
                          }),
                          { errorAnalytics: { toastId: "codex.localConversation.image.contextMenu.copyFailure" } },
                        )
                      },
                      src: O.src,
                    }))
                },
              }))
          let et = null == $ ? null : e.get(M.fm, K)
          return (
            null != $ &&
              et?.kind === "local" &&
              et.id === K &&
              J.push({
                id: "open-in-file-manager",
                message: (0, _.S)(e.get(y.IU)),
                onSelect: () => {
                  ;(0, v.k)({ cwd: null, hostId: K, path: $, target: "fileManager" })
                },
              }),
            J.push({
              id: "download-a-copy",
              message: Q.downloadCopyLabel,
              onSelect: () => {
                ;(0, l.l)(e, {
                  action: a.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE,
                  surface: a.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU,
                })
                let t = () => {
                  e.get(f.Id).danger(
                    L.formatMessage({
                      id: "imageSidePanel.downloadFailure",
                      defaultMessage: "Could not download image",
                    }),
                    { errorAnalytics: { toastId: "imageSidePanel.downloadFailure" } },
                  )
                }
                if (null != B) return void B().catch(t)
                let n = "sourceImage" in O ? O.sourceImage : void 0
                ;(F?.("context-menu"),
                  V?.(),
                  (async () => {
                    let e = O.src
                    ;((null != $ || (0, T.fi)(O.src)) &&
                      (e = await (0, j.C0)({
                        conversationId: z,
                        environmentId: Z,
                        absoluteImageFilePath: $,
                        hostId: K,
                        imageAssetResolver: U,
                        src: O.src,
                      })),
                      (null != e &&
                        (await (0, I.er)({
                          downloadSrc: e,
                          onDownloaded: W,
                          suggestedFilename: (0, I.lO)(
                            L,
                            Q.downloadExtension ?? (0, I.TP)(e) ?? (0, I.TP)(O.src) ?? "png",
                            { title: n?.chatGptDisplayTitle, gifSpeed: n?.gifPlayback?.speed },
                          ),
                        }))) ||
                        t())
                  })().catch(t))
              },
            }),
            J
          )
        },
      },
    )
  },
  xygx(e, t, n) {
    var a = n("CiLO"),
      r = n("uIyc"),
      i = n("qEnx"),
      o = n("urzV"),
      l = n("CBsD"),
      s = n("Sd8U"),
      d = n("zHp1"),
      u = n("Yscs")
    let c = "image-playground:",
      m = new WeakMap()
    function p(e) {
      return `${c}${e}`
    }
    function g(e) {
      let t = e.alt.trim() || "generated-image"
      return /\.[a-z\d]+$/i.test(t) ? t : `${t}.png`
    }
    function h(e, t, n, r) {
      f(e).get(t)?.token === n &&
        ((0, a.Kk)(e, (e) => {
          ;((e.imageAttachments = e.imageAttachments.filter((e) => e.id !== t)),
            (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => e.attachmentId !== t)))
        }),
        r())
    }
    function f(e) {
      let t = m.get(e.node)
      if (null != t) return t
      let n = new Map()
      return (m.set(e.node, n), n)
    }
    async function v(e) {
      let t = await y(e)
      return t instanceof Blob ? (0, u.G)(t).catch(() => null) : t
    }
    async function y({
      conversationId: e,
      environmentId: t,
      absoluteImageFilePath: n,
      hostId: a,
      imageAssetResolver: r,
      queryClient: i,
      src: s,
    }) {
      if (s.startsWith("data:image/")) return s
      if (null != n)
        return null == i
          ? (0, l.r2)({ path: n, hostId: a, conversationId: e, environmentId: t })
          : (0, l.fB)(n, a, i, void 0, e, t)
      try {
        let e
        if ((0, d.fi)(s)) {
          let t = await (0, d.Ci)(s, r)
          if ("available" !== t.kind) return null
          e = await (0, d.jE)(t)
        } else {
          let t = await (0, o.M2)(s)
          if (null == t) return null
          e = t.blob
        }
        return e.size > 0 && "" !== e.type && !e.type.includes(";") ? e : await (0, u.G)(e)
      } catch {
        return null
      }
    }
    n.d(
      t,
      {},
      {
        C0: v,
        Gz: y,
        e6: function (e, t) {
          let n = p(t)
          ;(f(e).delete(n),
            (0, r.td)(e, n),
            (0, a.Kk)(e, (e) => {
              ;((e.imageAttachments = e.imageAttachments.filter((e) => e.id !== n)),
                (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => e.attachmentId !== n)))
            }))
        },
        gn: g,
        i3: function (e) {
          let t = f(e),
            n = new Set(t.keys())
          for (let t of e.get(a.gy)) t.id.startsWith(c) && n.add(t.id)
          for (let t of n) (0, r.td)(e, t)
          ;(t.clear(),
            (0, a.Kk)(e, (e) => {
              ;((e.imageAttachments = e.imageAttachments.filter((e) => !e.id.startsWith(c))),
                (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => !e.attachmentId.startsWith(c))))
            }))
        },
        jV: p,
        j_: async function (
          e,
          {
            displaySrc: t,
            hostId: n,
            image: o,
            imageAssetResolver: d,
            onFailure: u,
            queryClient: m,
            selectionMode: y = "multiple",
          },
        ) {
          let w = p(o.id),
            I = f(e),
            x = new Set()
          if ("single" === y) {
            for (let e of I.keys()) e !== w && x.add(e)
            for (let t of e.get(a.gy)) t.id !== w && t.id.startsWith(c) && x.add(t.id)
            for (let t of x) (I.delete(t), (0, r.td)(e, t))
          }
          let C = I.get(w),
            b = e.get(a.gy).some((e) => e.id === w)
          if (null != C || b)
            return (
              b &&
                x.size > 0 &&
                (0, a.Kk)(e, (e) => {
                  ;((e.imageAttachments = e.imageAttachments.filter((e) => !x.has(e.id))),
                    (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => !x.has(e.attachmentId))))
                }),
              C?.promise ?? !0
            )
          let A = (0, l.IY)(o.src),
            S = g(o),
            M = o.src.startsWith("data:") ? o.src : void 0,
            _ = "cloud" === e.get(a.YH) || null == M
          if (
            ((0, a.Kk)(e, (e) => {
              ;(x.size > 0 &&
                ((e.imageAttachments = e.imageAttachments.filter((e) => !x.has(e.id))),
                (e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => !x.has(e.attachmentId)))),
                e.imageAttachments.push({
                  filename: S,
                  id: w,
                  localPath: A ?? void 0,
                  previewSrc: t,
                  src: M ?? o.src,
                  uploadStatus: _ ? "uploading" : "idle",
                }))
            }),
            !_)
          )
            return !0
          let k = (0, r.Mz)(e, { hostId: n, id: w }),
            E = Symbol(),
            T = Promise.resolve()
              .then(() =>
                (async function (
                  e,
                  {
                    absoluteImageFilePath: t,
                    attachmentId: n,
                    filename: r,
                    hostId: o,
                    imageAssetResolver: l,
                    inlineDataUrl: d,
                    onFailure: u,
                    queryClient: c,
                    requestToken: m,
                    src: p,
                  },
                ) {
                  let g =
                    d ??
                    (await v({
                      conversationId: (0, s.ah)(e),
                      absoluteImageFilePath: t,
                      hostId: o,
                      imageAssetResolver: l,
                      queryClient: c,
                      src: p,
                    }))
                  if (f(e).get(n)?.token !== m) return !1
                  if (null == g) return (h(e, n, m, u), !1)
                  let y = "cloud" === e.get(a.YH)
                  if (
                    ((0, a.Kk)(e, (e) => {
                      let a = e.imageAttachments.find((e) => e.id === n)
                      null == a
                        ? e.imageAttachments.push({
                            filename: r,
                            id: n,
                            localPath: t ?? void 0,
                            previewSrc: g,
                            src: g,
                            uploadSrc: g,
                            uploadStatus: y ? "uploading" : "idle",
                          })
                        : ((a.src = g),
                          (a.previewSrc = g),
                          (a.uploadSrc = g),
                          (a.uploadStatus = y ? "uploading" : "idle"))
                    }),
                    !y)
                  )
                    return !0
                  try {
                    let t = await (0, i.s)({ dataUrl: g, filename: r })
                    if (f(e).get(n)?.token !== m) return !1
                    return (
                      (0, a.Kk)(e, (e) => {
                        let a = e.imageAttachments.find((e) => e.id === n)
                        null != a && Object.assign(a, t)
                      }),
                      !0
                    )
                  } catch {
                    return (h(e, n, m, u), !1)
                  }
                })(e, {
                  absoluteImageFilePath: A,
                  attachmentId: w,
                  filename: S,
                  hostId: n,
                  imageAssetResolver: d,
                  inlineDataUrl: M,
                  onFailure: u,
                  queryClient: m,
                  requestToken: E,
                  src: o.src,
                }),
              )
              .then((e) => (e && k.succeed(), e))
              .finally(() => {
                ;(k.fail(), I.get(w)?.token === E && I.delete(w))
              })
          return (I.set(w, { promise: T, token: E }), T)
        },
      },
    )
  },
  ddzD(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      downloadGif: { id: "imageSidePanel.downloadGif", defaultMessage: "Download GIF" },
      download: { id: "imageSidePanel.download", defaultMessage: "Download" },
      downloadCurrent: { id: "imagePreview.downloadCurrent", defaultMessage: "Download image" },
      downloadCurrentGif: { id: "imagePreview.downloadCurrentGif", defaultMessage: "Download GIF" },
      downloadCopy: {
        id: "codex.localConversation.generatedImage.contextMenu.downloadCopy",
        defaultMessage: "Download a copy",
      },
      downloadFile: { id: "libraryFilePreview.download", defaultMessage: "Download file" },
      shareCurrentGif: { id: "imagePreview.shareCurrentGif", defaultMessage: "This GIF" },
      shareCurrent: { id: "imagePreview.shareCurrent", defaultMessage: "This image" },
      shareGif: { id: "chatgptConversations.generatedImageGallery.shareGif", defaultMessage: "Share this GIF" },
      shareImage: {
        id: "chatgptConversations.generatedImageGallery.shareImage",
        defaultMessage: "Share generated image {imageNumber}",
      },
      expandGif: { id: "chatgptConversations.generatedImageGallery.expandGif", defaultMessage: "Expand this GIF" },
      altGif: { id: "codex.localConversation.generatedGif", defaultMessage: "Generated GIF {imageNumber}" },
      altImage: { id: "codex.localConversation.generatedImage", defaultMessage: "Generated image {imageNumber}" },
    })
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t = e?.isAnimated === !0 || e?.mimeType?.split(";", 1)[0].trim().toLowerCase() === "image/gif"
          return {
            isAnimated: t,
            canEdit: !t,
            canSelect: !t,
            canCopy: !t,
            canShop: !t,
            downloadExtension: t ? "gif" : void 0,
            downloadLabel: t ? a.downloadGif : a.download,
            downloadMenuLabel: t ? a.downloadCurrentGif : a.downloadCurrent,
            downloadCopyLabel: a.downloadCopy,
            downloadFileLabel: a.downloadFile,
            shareSelectionLabel: t ? a.shareCurrentGif : a.shareCurrent,
            shareLabel: t ? a.shareGif : a.shareImage,
            expandLabel: t ? a.expandGif : a.altImage,
            altLabel: t ? a.altGif : a.altImage,
          }
        },
      },
    )
  },
  VCD3(e, t, n) {
    var a = n("qmMi"),
      r = n("Qgfj"),
      i = n("ddzD"),
      o = n("tSEg")
    let l = (0, a.bD)(o.GD, (e) => new Map(), void 0, { autoDispose: 6e4 })
    function s(e, t = 0) {
      let n = new Map()
      return e.map((e) => {
        let a = e.layerRevision?.sourceImageId ?? e.id,
          r = n.get(a) ?? n.size + t + 1
        return (n.set(a, r), r)
      })
    }
    function d(e) {
      return (
        e.displayVariants ??
        (null == e.spritesheet
          ? []
          : [
              {
                id: e.spritesheet.src,
                asset: e.spritesheet,
                label: (0, r.zR)({ id: "codex.imageGen.animationSheet", defaultMessage: "Sheet" }),
              },
            ])
      )
    }
    function u(e, t) {
      return {
        ...e,
        ...t.asset,
        transparentBackground: void 0,
        sizeBytes: t.asset.sizeBytes,
        displayVariantId: t.id,
        isAnimated: (0, i.R)(t.asset).isAnimated,
        previewSrc: t.asset.src,
        watermarkedSrc: void 0,
        hasPanoramaPrompt: !1,
        chatGptImageMetadata: {
          ...e.chatGptImageMetadata,
          mimeType: t.asset.mimeType,
          transparentBackground: void 0,
          purchaseHints: void 0,
          generationDimensions: { width: t.asset.width, height: t.asset.height },
        },
      }
    }
    n.d(
      t,
      {},
      {
        JQ: s,
        NS: function (e, t) {
          let n = d(t).find((n) => n.id === e.get(t.id))
          return null == n ? t : u(t, n)
        },
        an: function (e, t) {
          let n = d(e).find((e) => e.id === t)
          return null == n ? e : u(e, n)
        },
        bw: function (e, t, n, a) {
          e.set(l, t, (e) => new Map(e).set(n, a))
        },
        gK: function (e, t) {
          let n = t.displayVariants?.find((n) => n.id === e.get(t.id))
          return null == n
            ? t
            : {
                ...t,
                ...n.asset,
                displayVariantId: n.id,
                previewSrc: n.asset.src,
                isAnimated: (0, i.R)(n.asset).isAnimated,
                hasPanoramaPrompt: !1,
                sourceImage: null == t.sourceImage ? void 0 : u(t.sourceImage, n),
              }
        },
        lF: l,
        nt: function ({ conversationTitle: e, images: t, intl: n, imageNumberOffset: a = 0 }) {
          let r = s(t, a)
          return t.map((t, a) => {
            let o = r[a],
              l = n.formatMessage((0, i.R)(t).altLabel, { imageNumber: o }),
              s = l
            return (
              null != e &&
                (s = t.isAnimated
                  ? n.formatMessage(
                      {
                        id: "codex.localConversation.generatedGifTabTitle",
                        defaultMessage: "{conversationTitle} - Generated GIF {imageNumber}",
                      },
                      { conversationTitle: e, imageNumber: o },
                    )
                  : n.formatMessage(
                      {
                        id: "codex.localConversation.generatedImageTabTitle",
                        defaultMessage: "{conversationTitle} - Generated image {imageNumber}",
                      },
                      { conversationTitle: e, imageNumber: o },
                    )),
              {
                alt: l,
                isAnimated: t.isAnimated,
                displayVariants: d(t),
                height: t.chatGptImageMetadata?.generationDimensions?.height ?? t.height,
                id: t.id,
                textEditingDocumentId: null == t.layerRevision ? void 0 : t.id,
                textEditingConversationImageId: t.layerRevision?.sourceImageId,
                textEditingVersion: t.layerRevision?.version,
                previewSrc: (t.isAnimated ? t.src : void 0) ?? t.previewSrc ?? t.src ?? "",
                hasPanoramaPrompt: t.hasPanoramaPrompt,
                sourceImage: t,
                src: t.src ?? t.previewSrc ?? "",
                tabTitle: t.chatGptDisplayTitle ?? s,
                width: t.chatGptImageMetadata?.generationDimensions?.width ?? t.width,
              }
            )
          })
        },
      },
    )
  },
  ylNI(e, t, n) {
    ;(n.r(t), n("eJl1"))
    var a = n("ZU27"),
      r = n("Oco2"),
      i = n("pX1x"),
      o = n("Zr70"),
      l = n("pZMh")
    n.d(
      t,
      {},
      {
        openImagePreview: function (
          e,
          {
            availableImageCount: t = 1,
            entrypoint: n = "image_click",
            initialView: s = "single",
            initialZoomPercent: d,
            openInEditor: u = !1,
            title: c,
            ...m
          },
          p = {},
        ) {
          let g = (0, o.bc)(e),
            h =
              null != m.generatedImages || m.attachmentId?.startsWith("image-playground:") === !0
                ? "generated"
                : m.imageSource,
            f = null != m.generatedImages && null != m.initialImageId ? s : "single",
            v = (0, i.openImagePreviewTab)(
              e,
              { ...m, initialView: f, initialZoomPercent: u && "split" === e.get(l.y_).mode ? null : d, title: c },
              {
                durableIdentity: p.durableIdentity,
                isPreview: !u && null == p.replaceTabId,
                onClose: p.onClose,
                onRenderError: p.onRenderError,
                replaceTabId: p.replaceTabId,
              },
            )
          return (
            null != e.get(a.It.tabById$, v) &&
            (!1 !== p.addToHistory && (0, o.Rh)(e, g),
            null == h ||
              (null != m.generatedImages && (u || "single" !== f)) ||
              (0, r.PQ)(e, {
                availableImageCount: m.generatedImages?.length ?? t,
                entrypoint: n,
                imageSource: h,
                view: "single",
              }),
            !0)
          )
        },
      },
    )
  },
  VPBa(e, t, n) {
    var a = n("ZIaK"),
      r = n("WcOa"),
      i = n("ASxG"),
      o = n("zHp1"),
      l = n("kpIY")
    let s = `${r.i}image-preview:source-locations`,
      d = i.YjP().min(1),
      u = d.refine((e) => null != (0, a.IY)(e)),
      c = d.refine((e) => (0, o.fi)(e) && !e.endsWith("://")),
      m = i.Ikc({ turnId: d, itemId: d.optional(), galleryNumber: i.aig().int().positive().optional() }),
      p = "image-preview",
      g = i.Ikc({ manualZoomPercent: i.aig().positive().nullable() }),
      h = i.gMt("source", [
        i.rej({
          galleryNumber: m.shape.galleryNumber,
          imageItemId: d,
          source: i.euz("generated-image"),
          turnId: d.optional(),
        }),
        i.rej({ conversationId: d.optional(), hostId: d, path: u, source: i.euz("artifact"), viewState: g.optional() }),
        i.rej({
          attachmentIdentity: i.gMt("kind", [
            i.rej({ kind: i.euz("local-path"), path: u }),
            i.rej({ kind: i.euz("asset-pointer"), pointer: c }),
          ]),
          hostId: d,
          itemId: d.optional(),
          source: i.euz("user-attachment"),
          turnId: d.optional(),
        }),
      ])
    function f(e, t, n) {
      let a =
        "generated-image" === n.source
          ? [n.imageItemId]
          : [
              n.hostId,
              n.attachmentIdentity.kind,
              "local-path" === n.attachmentIdentity.kind ? n.attachmentIdentity.path : n.attachmentIdentity.pointer,
            ]
      return JSON.stringify([e, t, n.source, ...a])
    }
    n.d(
      t,
      {},
      {
        $m: function (e, t) {
          let n = (0, a.IY)(t)
          return null == n ? void 0 : { hostId: e, path: n, source: "artifact" }
        },
        Ic: function (e, t, n) {
          if ("artifact" === n.source || null == n.turnId) return
          let a = f(e, t, n),
            r = {
              turnId: n.turnId,
              itemId: "user-attachment" === n.source ? n.itemId : void 0,
              galleryNumber: "generated-image" === n.source ? n.galleryNumber : void 0,
            },
            i = (0, l.TB)(s, {}),
            o = m.safeParse(i?.[a]).data
          ;(o?.turnId !== r.turnId ||
            o.itemId !== r.itemId ||
            (null != r.galleryNumber && o.galleryNumber !== r.galleryNumber)) &&
            (0, l.EG)(s, { entries: { [a]: { value: r } }, maxEntries: 100, maxBytes: 65536 })
        },
        RR: h,
        _5: p,
        iP: function (e) {
          return {
            kind: p,
            params: (function (e) {
              switch (e.source) {
                case "generated-image":
                  return { source: e.source, imageItemId: e.imageItemId }
                case "user-attachment":
                  return { source: e.source, hostId: e.hostId, attachmentIdentity: e.attachmentIdentity }
                case "artifact":
                  return e
              }
            })(e),
            payloadVersion: 1,
          }
        },
        l8: g,
        rM: function (e, t, n) {
          if ("artifact" === n.source || null != n.turnId) return n
          let a = (0, l.TB)(s, {}),
            r = m.safeParse(a?.[f(e, t, n)]).data
          return null == r
            ? n
            : "generated-image" === n.source
              ? { ...n, turnId: r.turnId, galleryNumber: r.galleryNumber }
              : { ...n, turnId: r.turnId, itemId: r.itemId }
        },
        tH: function (e, t, n) {
          let r = (0, a.IY)(t)
          return null != r
            ? { attachmentIdentity: { kind: "local-path", path: r }, hostId: e, source: "user-attachment", ...n }
            : !(0, o.fi)(t) || t.endsWith("://")
              ? void 0
              : {
                  attachmentIdentity: { kind: "asset-pointer", pointer: t },
                  hostId: e,
                  source: "user-attachment",
                  ...n,
                }
        },
      },
    )
  },
  pX1x(e, t, n) {
    n.r(t)
    var a = n("iqEK"),
      r = n("zd8w"),
      i = n("tl5a"),
      o = n("ZU27"),
      l = n("ygKd"),
      s = n("xygx"),
      d = n("VPBa"),
      u = n("px7L"),
      c = n("Sd8U"),
      m = n("tSEg"),
      p = n("M1Uv"),
      g = n("XXJV")
    let h = new WeakMap(),
      f = (0, p.S)({ open: v })
    function v(
      e,
      { imageSourceContext: t, initialView: n, liveTailImagePolicy: p = "follow", title: y, ...w },
      {
        revealAndFocus: I,
        durableIdentity: x,
        insertPosition: C,
        isPreview: b,
        onClose: A,
        onRenderError: S,
        replaceTabId: M,
        tabId: _,
        target: k = "right",
      },
    ) {
      let E = _ ?? `image:${crypto.randomUUID()}`,
        T = (0, m.Qm)(e.value)
      if (null != x && null != T) {
        let t =
          "generated-image" === x.source && null == _ && !0 === e.get(i.pp, T)
            ? w.generatedImages?.findIndex(({ id: e }) => e === x.imageItemId)
            : void 0
        ;(0, d.Ic)(T, E, "generated-image" === x.source && null != t && t >= 0 ? { ...x, galleryNumber: t + 1 } : x)
      }
      let P = w.viewerId ?? E,
        D = (0, g.KE)(e, E),
        N = (t) => {
          if ("chatgpt-thread" !== e.value.routeKind || "provided" === w.generatedImagesSource) return
          let n =
            t?.sourceImage ??
            (null == w.generatedImages && w.chatGptConversationId === e.value.conversationId ? w.sourceImage : void 0)
          e.set(
            l.OW,
            E,
            w.readOnly || n?.status !== "completed" || null == n.src || null == (0, a.V2)(n.src)
              ? null
              : { image: n, attribution: t?.imageEditAttribution ?? w.imageEditAttribution, viewerId: P },
          )
        }
      return (
        (0, o.AP)(e, f, {
          revealAndFocus: I ?? !0,
          defaultState: () => ({
            activeImageId: w.initialImageId ?? null,
            manualZoomPercent:
              x?.source === "artifact" && null != x.viewState
                ? x.viewState.manualZoomPercent
                : (w.initialZoomPercent ?? null),
            view: n,
          }),
          durableRoute: null == x || "local-thread" !== e.value.routeKind ? void 0 : (0, d.iP)(x),
          id: E,
          insertPosition: C,
          isPreview: b,
          onClose:
            null == A && null == w.sourceImage && (null == w.generatedImages || null == w.initialImageId)
              ? void 0
              : (e) => {
                  if ((A?.(), e.set(l.OW, E, null), null != w.generatedImages && null != w.initialImageId)) {
                    if (h.get(e.node) !== E) return
                    h.delete(e.node)
                    let t = (0, c.Oq)(e)
                    null != t && (0, s.i3)(t)
                  }
                },
          onRenderError: S,
          replaceTabId: M,
          props: {
            ...w,
            fullViewRef: (0, r.createRef)(),
            viewerId: P,
            onActiveImageChange:
              null == w.generatedImages
                ? w.onActiveImageChange
                : (e) => {
                    ;(N(e), w.onActiveImageChange?.(e))
                  },
            durableIdentity: "local-thread" === e.value.routeKind ? x : void 0,
            imageSourceContext: t,
            transferState: (0, u.i)(),
            initialView: n,
            liveTailImagePolicy: p,
            onGeneratedImageSelection:
              null == w.generatedImages || null == w.initialImageId
                ? void 0
                : () => {
                    h.set(e.node, E)
                  },
            title: y,
          },
          target: D ?? k,
          title: y,
          tooltip: y,
        }),
        null == D && N(w.generatedImages?.find((e) => e.id === w.initialImageId)),
        E
      )
    }
    n.d(t, {}, { openImagePreviewTab: v })
  },
  px7L(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(
      t,
      {},
      {
        a: a,
        i: function () {
          let e = new Set(),
            t = new Set(),
            n = new Set(),
            a = !1,
            r = () => {
              a ||
                ((a = !0),
                queueMicrotask(() => {
                  for (let r of ((a = !1), e.size > 0 && t.clear(), n)) r()
                }))
            }
          return {
            isBlocked: () => {
              let n = 0 === e.size ? t : e
              return 0 === n.size || [...n].some((e) => e())
            },
            registerBlocker: (n) => (
              t.clear(),
              e.add(n),
              r(),
              () => {
                ;(t.add(n), e.delete(n), r())
              }
            ),
            subscribe: (e) => (
              n.add(e),
              () => {
                n.delete(e)
              }
            ),
          }
        },
      },
    )
  },
  WhoN(e, t, n) {
    var a = n("qmMi"),
      r = n("OWtl"),
      i = n("O666")
    let o = (0, a.un)(
      r.u,
      ({ get: e }) =>
        e(i.H$, { layer: "2983946247", parameter: "image_unified_viewer_enabled", disableExposureLog: !0 }) ||
        e(i.H$, { layer: "2983946247", parameter: "image_overlay_enabled", disableExposureLog: !0 }),
    )
    n.d(t, {}, { t: o })
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
  Sgcz(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      actionSummaryEditingFile: {
        id: "localConversation.automaticApprovalReview.actionSummary.editingFile",
        defaultMessage: "Editing {file}",
      },
      actionSummaryEditingFiles: {
        id: "localConversation.automaticApprovalReview.actionSummary.editingFiles",
        defaultMessage: "Editing {fileCount, plural, one {a file} other {# files}}",
      },
      actionSummaryMcpToolCall: {
        id: "localConversation.automaticApprovalReview.actionSummary.mcpToolCall",
        defaultMessage: "MCP {toolName} on {connector}",
      },
      actionSummaryNetworkAccess: {
        id: "localConversation.automaticApprovalReview.actionSummary.networkAccess",
        defaultMessage: "Network access to {target}",
      },
      actionSummaryPermissionRequest: {
        id: "localConversation.automaticApprovalReview.actionSummary.permissionRequest",
        defaultMessage: "Permission request",
      },
      actionSummaryPermissionRequestWithReason: {
        id: "localConversation.automaticApprovalReview.actionSummary.permissionRequestWithReason",
        defaultMessage: "Permission request: {reason}",
      },
      summaryInProgress: {
        id: "localConversation.automaticApprovalReview.summary.inProgress",
        defaultMessage: "Checking whether this action can proceed",
      },
      summaryAborted: {
        id: "localConversation.automaticApprovalReview.summary.aborted",
        defaultMessage: "Auto-review ended without a decision",
      },
      summaryTimedOut: {
        id: "localConversation.automaticApprovalReview.summary.timedOut",
        defaultMessage: "Auto-review couldn\u2019t reach a decision in time",
      },
      summaryApproved: {
        id: "localConversation.automaticApprovalReview.summary.approved",
        defaultMessage: "This action was approved",
      },
      summaryDenied: {
        id: "localConversation.automaticApprovalReview.summary.denied",
        defaultMessage: "This action wasn\u2019t approved",
      },
      summaryDeniedHighRisk: {
        id: "localConversation.automaticApprovalReview.summary.deniedHighRisk",
        defaultMessage: "This action wasn\u2019t approved because it was assessed as high risk",
      },
      titleInProgress: {
        id: "localConversation.automaticApprovalReview.title.inProgress",
        defaultMessage: "Auto-reviewing",
      },
      titleApproved: {
        id: "localConversation.automaticApprovalReview.title.approved",
        defaultMessage: "Auto-review approved",
      },
      titleDenied: {
        id: "localConversation.automaticApprovalReview.title.denied",
        defaultMessage: "Auto-review denied",
      },
      titleDeniedHighRisk: {
        id: "localConversation.automaticApprovalReview.title.deniedHighRisk",
        defaultMessage: "Auto-review denied high risk",
      },
      titleTimedOut: {
        id: "localConversation.automaticApprovalReview.title.timedOut",
        defaultMessage: "Auto-review timed out",
      },
      titleAborted: {
        id: "localConversation.automaticApprovalReview.title.aborted",
        defaultMessage: "Auto-review stopped",
      },
      actionSummaryRequest: {
        id: "localConversation.automaticApprovalReview.actionSummary.request",
        defaultMessage: "Request",
      },
    })
    n.d(
      t,
      {},
      {
        LS: function (e) {
          return (
            "declined" === ("exec" === e.type ? e.executionStatus : e.status) &&
            e.automaticApprovalReviews?.some((e) => "denied" === e.status) === !0
          )
        },
        MR: function (e, t) {
          switch (t.status) {
            case "inProgress":
              return e.formatMessage(a.titleInProgress)
            case "approved":
              return e.formatMessage(a.titleApproved)
            case "denied":
              if ("high" === t.riskLevel) return e.formatMessage(a.titleDeniedHighRisk)
              return e.formatMessage(a.titleDenied)
            case "timedOut":
              return e.formatMessage(a.titleTimedOut)
            case "aborted":
              return e.formatMessage(a.titleAborted)
          }
        },
        uO: function (e, t) {
          if (null == t) return e.formatMessage(a.actionSummaryRequest)
          switch (t.type) {
            case "command":
              return t.command
            case "execve":
              return [t.program, ...t.argv].join(" ")
            case "writeStdin":
              return e.formatMessage(
                {
                  id: "localConversation.automaticApprovalReview.actionSummary.writeStdin",
                  defaultMessage: "Send input to process {processId}: {stdin}",
                },
                { processId: t.processId, stdin: t.stdin },
              )
            case "applyPatch":
              if (1 === t.files.length) return e.formatMessage(a.actionSummaryEditingFile, { file: t.files[0] })
              return e.formatMessage(a.actionSummaryEditingFiles, { fileCount: t.files.length })
            case "networkAccess":
              return e.formatMessage(a.actionSummaryNetworkAccess, { target: t.target })
            case "mcpToolCall":
              return e.formatMessage(a.actionSummaryMcpToolCall, {
                toolName: t.toolName,
                connector: t.connectorName ?? t.server,
              })
            case "requestPermissions":
              return null == t.reason
                ? e.formatMessage(a.actionSummaryPermissionRequest)
                : e.formatMessage(a.actionSummaryPermissionRequestWithReason, { reason: t.reason })
          }
        },
        y5: function (e, t) {
          return null != t.rationale && t.rationale.trim().length > 0
            ? t.rationale.trim()
            : "inProgress" === t.status
              ? e.formatMessage(a.summaryInProgress)
              : "aborted" === t.status
                ? e.formatMessage(a.summaryAborted)
                : "timedOut" === t.status
                  ? e.formatMessage(a.summaryTimedOut)
                  : "denied" === t.status
                    ? "high" === t.riskLevel
                      ? e.formatMessage(a.summaryDeniedHighRisk)
                      : e.formatMessage(a.summaryDenied)
                    : "approved" === t.status
                      ? e.formatMessage(a.summaryApproved)
                      : ""
        },
      },
    )
  },
  Yn2j(e, t, n) {
    var a = n("WiNP")
    n.d(
      t,
      {},
      {
        V: function (e, t, n) {
          let r,
            i = "electron"
          return (
            (i = "desktop_app"),
            "local" === t && (r = e.get(a.kL, t) ? "thread_attachment" : "true"),
            { source: "codex", client_type: i, ...n, browser_preview_history_requested: r }
          )
        },
      },
    )
  },
  dkxK(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("NKFb"),
      o = n("DqAq"),
      l = n("nDx1"),
      s = n("HhHp")
    n.d(
      t,
      {},
      {
        v: function (e) {
          let t = (0, r.c)(8),
            { className: n, resourceKind: d } = e
          switch (d) {
            case "document": {
              let e
              return (t[0] !== n ? ((e = (0, a.jsx)(i.A, { className: n })), (t[0] = n), (t[1] = e)) : (e = t[1]), e)
            }
            case "spreadsheet": {
              let e
              return (t[2] !== n ? ((e = (0, a.jsx)(o.A, { className: n })), (t[2] = n), (t[3] = e)) : (e = t[3]), e)
            }
            case "presentation": {
              let e
              return (t[4] !== n ? ((e = (0, a.jsx)(l.A, { className: n })), (t[4] = n), (t[5] = e)) : (e = t[5]), e)
            }
            case "drive": {
              let e
              return (t[6] !== n ? ((e = (0, a.jsx)(s.A, { className: n })), (t[6] = n), (t[7] = e)) : (e = t[7]), e)
            }
          }
        },
      },
    )
  },
  QmNX(e, t, n) {
    n.d(t, { B: () => o })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57")
    function o(e) {
      let t,
        n,
        o,
        l,
        s,
        d,
        u = (0, r.c)(14)
      u[0] !== e
        ? (({ as: o, className: t, spacing: l, ...n } = e), (u[0] = e), (u[1] = t), (u[2] = n), (u[3] = o), (u[4] = l))
        : ((t = u[1]), (n = u[2]), (o = u[3]), (l = u[4]))
      let c = void 0 === o ? "div" : o,
        m = void 0 === l ? "item" : l,
        p = "custom" === m ? void 0 : m,
        g = "item" === m && "gap-4",
        h = "activity" === m && "gap-3"
      return (
        u[5] !== t || u[6] !== g || u[7] !== h
          ? ((s = (0, i.A)("flex flex-col", "stack-eQ550z", g, h, t)), (u[5] = t), (u[6] = g), (u[7] = h), (u[8] = s))
          : (s = u[8]),
        u[9] !== c || u[10] !== n || u[11] !== p || u[12] !== s
          ? ((d = (0, a.jsx)(c, { ...n, "data-spacing": p, className: s })),
            (u[9] = c),
            (u[10] = n),
            (u[11] = p),
            (u[12] = s),
            (u[13] = d))
          : (d = u[13]),
        d
      )
    }
  },
  o62A(e, t, n) {
    var a = n("i5ac"),
      r = n.n(a),
      i = n("DBCl"),
      o = n("Vrnh"),
      l = n("P61R"),
      s = n("Dgwo"),
      d = n("tl5a"),
      u = n("KJ1J"),
      c = n("tTIR"),
      m = n("VvpR"),
      p = n("PYah"),
      g = n("X6Vn"),
      h = n("mdWu"),
      f = n("FPpy"),
      v = n("Yshm"),
      y = n("qZWE"),
      w = n("xSzB"),
      I = n("joT6"),
      x = n("loz7"),
      C = n("uzkw"),
      b = n("EEop"),
      A = n("cLdu"),
      S = n("ueue"),
      M = n("tSEg")
    function _(e) {
      return k(e)
    }
    function k({ mcpAppScope: e, access: t, server: n }) {
      let a = "connectorId" in t.serverIdentity ? t.serverIdentity.connectorId : null
      return (
        "internal://plugin-management-suggestions" === e.originResourceUri &&
        (0, u.fI)(n) &&
        a === l.iq &&
        e.codexAppsToolScope?.connectorId === a
      )
    }
    n.d(
      t,
      {},
      {
        Oe: k,
        UC: function ({
          scope: e,
          conversationId: t,
          hostId: n,
          installPlugin: a,
          mcpAppScope: l,
          navigate: u,
          access: k,
          server: E,
          sessionId: T,
          sourceMcpAppId: P,
          toolResult: D,
        }) {
          if (!_({ hostId: n, mcpAppScope: l, access: k, server: E })) return null
          let N = { hostId: n, threadId: t },
            j = (0, w.xH)(D),
            R = v.H2.safeParse(j?._meta ?? j).data,
            O = (n, a, r) => {
              let { accountId: i, uiUserId: o } = k
              null == i ||
                null == o ||
                e.get(M.Rj) ||
                e.get(y.ax, T)?.sourceMcpAppId !== P ||
                (0, C.d)({
                  connectorId: a,
                  conversationId: t,
                  eventType: r,
                  expectedIdentity: { accountId: i, userId: o },
                  pluginId: n,
                  productSurface: "CODEX",
                })
            }
          return (0, f._)({
            scope: e,
            hostId: n,
            navigate: u,
            toolResult: D,
            onSuggestionInteraction: O,
            connect: async (r, l) => {
              let u = r.plugin_id
              try {
                let f = e.get(d.ok, N)?.latestTurnId,
                  v = !1,
                  y = !1
                if (
                  !a(
                    { displayName: r.display_name, remoteMarketplaceName: i.xiH, remotePluginId: u },
                    {
                      conversation: { type: "app-server", conversationId: t },
                      hostId: n,
                      marketplaceAnalytics: l,
                      onError: () => {
                        y = !0
                      },
                      onSuccess: () => {
                        v = !0
                      },
                      origin: "in_conversation_elicitation",
                      productContext: "codex",
                      requiresAppSetup: !0,
                    },
                  )
                )
                  return { pluginId: u, status: "unavailable" }
                if (
                  (await e.when(({ get: e }) => {
                    let t = e(x.Tx)
                    return "closed" === t.kind || t.hostId !== n
                  }),
                  y)
                )
                  return { pluginId: u, status: "retryable_error" }
                if (!v) return { pluginId: u, status: "cancelled" }
                let w = (0, s.V)(e, n)
                if (!(0, A.hE)(n)) {
                  let e = await w.sendRequest("plugin/reconcile", { reason: "plugin_suggestion_connected" })
                  if (e.failedRemotePluginIds.length > 0 || e.failedMaterializationRemotePluginIds.length > 0)
                    return { pluginId: u, status: "retryable_error" }
                }
                let C = e.query.snapshot(b.Pc, {
                  hostId: n,
                  marketplacePath: null,
                  pluginName: u,
                  productContext: "codex",
                  remoteMarketplaceName: i.xiH,
                })
                await C.invalidate({ refetchType: "none" })
                let [M, _] = await Promise.all([C.getOrFetch(), (0, p.k)(e, n, t)])
                if (
                  !M.summary.installed ||
                  !M.summary.enabled ||
                  (null != M.summary.remotePluginId && M.summary.remotePluginId !== u) ||
                  !M.apps.every(({ id: e }) => _.has(e)) ||
                  (
                    await (0, I.h)({
                      scope: e,
                      authPolicy: M.summary.authPolicy,
                      codexHome: void 0,
                      hostId: n,
                      plugin: (0, S.qA)(M),
                      queryClient: e.queryClient,
                      windowType: "electron",
                    })
                  ).length > 0
                )
                  return { pluginId: u, status: "connection_required" }
                if (
                  void 0 === f ||
                  (await e.when(({ get: e }) => {
                    let n = e(d.ok, N)
                    return (
                      null != n &&
                      (n.latestTurnId !== f ||
                        (n.summary.threadRuntimeStatus?.type !== "active" && !e(h.Ty, t) && !e(g.O0)))
                    )
                  }),
                  (await w.getLatestTurnId(t)) !== f)
                )
                  return { pluginId: u, status: "connected" }
                if (!(0, c.g)(t)) return { pluginId: u, status: "retryable_error" }
                try {
                  await (0, m.R9)(e, n, t, {
                    turnTrigger: "plugin_suggestion_connected",
                    additionalContext: (0, o.w1)({ connectedPlugin: r.display_name }),
                  })
                } finally {
                  ;(0, c.w)(t)
                }
                return { pluginId: u, status: "connected" }
              } catch {
                return { pluginId: u, status: "retryable_error" }
              }
            },
            decline: async (a) => {
              let i = (e) => !e(M.Rj) && e(y.ax, T)?.sourceMcpAppId === P,
                l = v.Yn.safeParse(e.get(y.SL, T) ?? {})
              if (!i(e.get) || !l.success) return { status: "unavailable", declinedPluginIds: [] }
              let u = new Set(l.data.connectedPluginIds),
                p = new Set(l.data.declinedPluginIds),
                g = r()(a, "plugin_id").filter(({ plugin_id: e }) => !u.has(e) && !p.has(e))
              if (0 === g.length) return { status: "unavailable", declinedPluginIds: [] }
              let f = e.get(d.ok, N)?.latestTurnId,
                w = g.map(({ plugin_id: e }) => e)
              for (let { plugin_id: e } of g) O(e, R?.["openai/plugin_suggestion_connector_ids"]?.[e], "dismiss")
              e.set(y.SL, T, { ...l.data, declinedPluginIds: [...p, ...w] })
              try {
                if (void 0 === f) return { status: "declined", declinedPluginIds: w }
                if (
                  (await e.when(({ get: e }) => {
                    let n = e(d.ok, N)
                    return (
                      !i(e) ||
                      (null != n &&
                        (n.latestTurnId !== f || (n.summary.threadRuntimeStatus?.type !== "active" && !e(h.Ty, t))))
                    )
                  }),
                  (await (0, s.V)(e, n).getLatestTurnId(t)) === f && i(e.get) && (0, c.g)(t))
                )
                  try {
                    await (0, m.R9)(e, n, t, {
                      turnTrigger: "plugin_suggestion_declined",
                      additionalContext: (0, o.w1)({ declinedPlugins: g.map(({ display_name: e }) => e) }),
                    })
                  } finally {
                    ;(0, c.w)(t)
                  }
              } catch {}
              return { status: "declined", declinedPluginIds: w }
            },
          })
        },
        j7: _,
      },
    )
  },
  qYBv(e, t, n) {
    var a = n("nQiX"),
      r = n("KJ1J"),
      i = n("Sgjw"),
      o = n("W10I"),
      l = n("xSzB"),
      s = n("acxW")
    function d({ item: e, mcpServerStatuses: t }) {
      if (!0 === e.isMcpAppWidgetSuperseded || (e.completed && null == e.result)) return "not-mcp-app"
      if ((0, i.G)(e)?.type === "chatgpt-automation") return "mcp-app"
      let n = e.result?.type === "success" ? e.result.raw : null
      return null != e.mcpAppResourceUri ||
        null != (0, o.Hn)({ mcpServerStatuses: t, server: e.invocation.server, tool: e.invocation.tool, toolResult: n })
        ? "mcp-app"
        : null == n
          ? "not-mcp-app"
          : null == t
            ? "maybe-mcp-app"
            : "not-mcp-app"
    }
    function u(e) {
      let { appContext: t, result: n } = e
      return e.completed &&
        t?.linkId != null &&
        n?.type === "success" &&
        !0 !== e.isMcpAppWidgetSuperseded &&
        (0, r.fI)(e.invocation.server)
        ? (0, a.Y)(t.connectorId, t.actionName, () =>
            (0, s.Cb)({ isCodexAppsServer: !0, result: n })
              ? null
              : (0, l.O9)({ isCodexAppsServer: !0, toolResult: n.raw }).structuredContent,
          )
        : null
    }
    n.d(
      t,
      {},
      {
        P: u,
        kT: function ({ item: e, mcpServerStatuses: t }) {
          return (
            null != u(e) ||
            ("mcp-app" === d({ item: e, mcpServerStatuses: t }) &&
              !(0, s.Cb)({ isCodexAppsServer: (0, r.fI)(e.invocation.server), result: e.result }))
          )
        },
        pA: function (e) {
          return e.some(
            (e) =>
              "item" === e.kind &&
              "mcp-tool-call" === e.item.type &&
              (e.item.result?.type === "success" ||
                (!e.item.completed && null == e.item.result && null == e.item.mcpAppResourceUri)),
          )
        },
        sT: function ({ item: e, mcpServerStatuses: t }) {
          return (
            "not-mcp-app" !== d({ item: e, mcpServerStatuses: t }) &&
            !(0, s.Cb)({ isCodexAppsServer: (0, r.fI)(e.invocation.server), result: e.result })
          )
        },
      },
    )
  },
  t7eZ(e, t, n) {
    var a = n("fceG")
    n.d(
      t,
      {},
      {
        o: function (e) {
          return e.result?.type === "error" && (0, a.Qu)(e.result.error)
        },
      },
    )
  },
  ltPT(e, t, n) {
    var a = n("QosV"),
      r = n("zd8w"),
      i = n("nsuH")
    n.d(
      t,
      {},
      {
        $: function () {
          let e,
            t,
            n,
            o,
            l = (0, a.c)(7),
            [s, d] = (0, r.useState)(0)
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (e) => {
                d((t) => (t === e ? t : e))
              }),
              (l[0] = e))
            : (e = l[0])
          let u = e
          l[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                u(
                  (function (e) {
                    if (!e.borderBoxSize) return e.contentRect.height
                    let t = Array.isArray(e.borderBoxSize) ? e.borderBoxSize[0] : e.borderBoxSize
                    return t?.blockSize ?? e.contentRect.height
                  })(e),
                )
              }),
              (l[1] = t))
            : (t = l[1])
          let c = (0, i.wY)(t)
          l[2] !== c
            ? ((n = (e) => {
                ;(null != e && u(e.scrollHeight), c(e))
              }),
              (l[2] = c),
              (l[3] = n))
            : (n = l[3])
          let m = n
          return (
            l[4] !== s || l[5] !== m
              ? ((o = { elementHeightPx: s, elementRef: m }), (l[4] = s), (l[5] = m), (l[6] = o))
              : (o = l[6]),
            o
          )
        },
      },
    )
  },
  f4th(e, t, n) {
    var a = n("DBCl"),
      r = n("Wbxh"),
      i = n("NF58"),
      o = n("bnxy")
    n.d(
      t,
      {},
      {
        q: async function ({ projectId: e, prompt: t }) {
          let { value: n } = await (0, r.Ts)(a.Q2Y.LOCAL_PROJECTS),
            o = (0, a.b9)(n)[e]
          if (null == o) return null
          let l = await (0, i.OR)({ project: o, prompt: t })
          return {
            cwd: l.cwd,
            projectlessOutputDirectory: l.generatedWorkspace?.outputDirectory ?? null,
            workspaceRoots: l.workspaceRoots,
            projectAssignment: { projectKind: "local", projectId: e },
          }
        },
        w: function (e) {
          let t = new Set(),
            n = []
          for (let a of e) {
            let e = (0, o.XH)(a)
            t.has(e) || (t.add(e), n.push(a))
          }
          return n
        },
      },
    )
  },
  aENG(e, t, n) {
    n.d(
      t,
      {},
      {
        i: function (e, t, n, a, r = !1) {
          let i = Math.max(e ?? t ?? ("card" === a ? 200 : 480), n ?? 200)
          return r || null != e ? i : Math.min(i, 720)
        },
        q: function (e) {
          return null == e
            ? void 0
            : {
                marginBlockStart: -e.blockStart,
                marginBlockEnd: -e.blockEnd,
                marginInlineStart: -e.inlineStart,
                marginInlineEnd: -e.inlineEnd,
              }
        },
      },
    )
  },
  Cv9y(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("Wf1j"),
      o = n("DcH0"),
      l = n("X3K1"),
      s = n("zOE4")
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            d,
            u,
            c = (0, r.c)(21),
            {
              className: m,
              height: p,
              inlineFramePadding: g,
              allowCompact: h,
              fullSurface: f,
              showLoadingStatus: v,
              disableInlineLoadingState: y,
            } = e,
            w = void 0 !== h && h,
            I = void 0 === v || v,
            x = (0, i.A)()
          c[0] !== x
            ? ((t = x.formatMessage({ id: "codex.mcpTool.mcpAppLoading", defaultMessage: "Loading app" })),
              (c[0] = x),
              (c[1] = t))
            : (t = c[1])
          let C = t,
            b = I ? "status" : void 0,
            A = !I
          c[2] !== C || c[3] !== b || c[4] !== A
            ? ((n = { role: b, "aria-hidden": A, "aria-label": C, "data-mcp-app-loading": "true" }),
              (c[2] = C),
              (c[3] = b),
              (c[4] = A),
              (c[5] = n))
            : (n = c[5])
          let S = n
          if (void 0 !== f && f) {
            let e, t
            return (
              c[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(s.LoadingPage, { fillParent: !0, variant: "blossom" })), (c[6] = e))
                : (e = c[6]),
              c[7] !== S
                ? ((t = (0, a.jsx)("div", { className: "relative h-full min-h-0", ...S, children: e })),
                  (c[7] = S),
                  (c[8] = t))
                : (t = c[8]),
              t
            )
          }
          if (void 0 !== y && y) {
            let e
            return (
              c[9] !== p
                ? ((e = (0, a.jsx)("div", { "aria-hidden": "true", style: { height: p } })), (c[9] = p), (c[10] = e))
                : (e = c[10]),
              e
            )
          }
          c[11] !== w || c[12] !== m || c[13] !== p || c[14] !== g || c[15] !== S
            ? ((d =
                w && "number" == typeof p && p > 0 && p < 48
                  ? (0, a.jsx)("div", {
                      className: "flex w-full items-center overflow-hidden",
                      ...S,
                      style: { height: null == g ? p : "100%" },
                      children: (0, a.jsx)(l.X, { className: "w-48 max-w-full", size: "md" }),
                    })
                  : (0, a.jsx)(o._, { className: m, ...S, style: { height: null == g ? p : "100%" } })),
              (c[11] = w),
              (c[12] = m),
              (c[13] = p),
              (c[14] = g),
              (c[15] = S),
              (c[16] = d))
            : (d = c[16])
          let M = d
          return (
            c[17] !== p || c[18] !== g || c[19] !== M
              ? ((u =
                  null == g
                    ? M
                    : (0, a.jsx)("div", {
                        style: {
                          height: p,
                          paddingBlockStart: g.blockStart,
                          paddingBlockEnd: g.blockEnd,
                          paddingInlineStart: g.inlineStart,
                          paddingInlineEnd: g.inlineEnd,
                        },
                        children: M,
                      })),
                (c[17] = p),
                (c[18] = g),
                (c[19] = M),
                (c[20] = u))
              : (u = c[20]),
            u
          )
        },
      },
    )
  },
  FPpy(e, t, n) {
    var a = n("bTvG"),
      r = n("iRMi"),
      i = n("mfKi"),
      o = n("DBCl"),
      l = n("xSzB"),
      s = n("k7G6"),
      d = n("yGJW"),
      u = n("Yshm")
    n.d(
      t,
      {},
      {
        _: function ({
          scope: e,
          chatgpt: t,
          hostId: n,
          navigate: c,
          toolResult: m,
          connect: p,
          open: g,
          decline: h,
          onShownReceipt: f,
          onInstallClick: v,
          onSuggestionInteraction: y,
          isCurrent: w = () => !0,
        }) {
          let I = u.Jq.safeParse(m.structuredContent)
          if (!I.success) return null
          let x = (0, l.xH)(m),
            C = u.H2.safeParse(x?._meta ?? x),
            b = C.success ? C.data["openai/plugin_suggestion_id"] : void 0,
            A = {
              chatgpt: t,
              source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
              suggestionId: b,
              surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS,
            },
            S = (n, r, o) => {
              try {
                ;((0, d.yy)(e, i.CodexPluginAction, {
                  source: A.source,
                  suggestionId: b,
                  surface: A.surface,
                  action: n,
                  remotePluginId: r,
                  result: i.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                  uiStyle: i.CodexPluginsSuggestionUiStyle.CODEX_PLUGINS_SUGGESTION_UI_STYLE_MCP,
                }),
                  null != t &&
                    null != b &&
                    (n !== i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION || null != o) &&
                    (0, d.yy)(e, a.dS, {
                      action:
                        n === i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION
                          ? "CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION"
                          : "CHATGPT_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK",
                      pluginId: r,
                      pluginIds: o,
                      result: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                      suggestionId: b,
                      productExperience: t.productExperience,
                      surface: t.surface,
                    }))
              } catch {}
            },
            M = new Set(),
            _ = (e) => {
              let t = u.Jt.parse(e),
                n = I.data.suggestions.find(({ plugin_id: e }) => e === t.pluginId)
              if (!w() || null == n || (null != t.suggestionId && t.suggestionId !== b))
                throw Error("Plugin suggestion is outside the trusted widget scope")
              return n
            }
          return {
            requestDeclinePluginSuggestions: null == h ? void 0 : () => h(I.data.suggestions),
            sendInstrument: (e) => {
              let t = u.gt.safeParse(e)
              if (
                !w() ||
                !t.success ||
                t.data.payload.suggestion_id !== b ||
                !I.data.suggestions.some(({ plugin_id: e }) => e === t.data.payload.remote_plugin_id)
              )
                return
              let n = t.data.payload.remote_plugin_id
              if ("chatgpt_plugin_management_suggestion_shown" === t.data.label) {
                if (!t.data.payload.plugin_ids.includes(n) || (f?.(n, e), M.has(n))) return
                ;(M.add(n),
                  y?.(n, C.success ? C.data["openai/plugin_suggestion_connector_ids"]?.[n] : void 0, "viewed"))
                return
              }
              let a = t.data.payload.plugin_ids
              S(
                i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_IMPRESSION,
                n,
                a?.includes(n) && a.every((e) => I.data.suggestions.some(({ plugin_id: t }) => t === e)) ? a : void 0,
              )
            },
            requestConnectPlugin: async (e) => {
              let t = _(e)
              return (
                v?.(t.plugin_id),
                y?.(
                  t.plugin_id,
                  C.success ? C.data["openai/plugin_suggestion_connector_ids"]?.[t.plugin_id] : void 0,
                  "click",
                ),
                S(i.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_SUGGESTION_INSTALL_CLICK, t.plugin_id),
                p(t, A)
              )
            },
            requestOpenPlugin: async (r) => {
              let i = _(r)
              if (null != t && null != g)
                try {
                  ;(0, d.yy)(e, a.BI, {
                    target: "CHATGPT_PLUGIN_CLICK_TARGET_SUGGESTION_OPEN",
                    pluginId: i.plugin_id,
                    suggestionId: b,
                    surface: t.surface,
                  })
                } catch {}
              null != g
                ? await g(i)
                : await c((0, s.Ct)({ hostId: n, pluginId: i.plugin_id, remoteMarketplaceName: o.xiH }))
            },
          }
        },
      },
    )
  },
  Yshm(e, t, n) {
    var a = n("ASxG")
    let r = a.YjP().regex(/^[A-Za-z0-9_-]{1,128}$/),
      i = a
        .Ikc({ connectedPluginIds: a.YOg(a.YjP()).optional(), declinedPluginIds: a.YOg(a.YjP()).optional() })
        .catchall(a.Pq9()),
      o = a.Ikc({ pluginId: a.YjP().min(1), suggestionId: r.optional() }),
      l = a.Ikc({
        type: a.euz("event"),
        label: a.euz("chatgpt_plugin_management_suggestion_impression"),
        payload: a.Ikc({
          remote_plugin_id: a.YjP().min(1).max(256),
          plugin_ids: a
            .YOg(a.YjP().min(1).max(256))
            .min(1)
            .max(10)
            .optional()
            .catch(void 0),
          suggestion_id: r,
        }),
      }),
      s = l.extend({
        label: a.euz("chatgpt_plugin_management_suggestion_shown"),
        payload: l.shape.payload.extend({
          suggestion_id: r.optional(),
          plugin_ids: a.YOg(a.YjP().min(1).max(256)).min(1).max(10),
        }),
      }),
      d = a.gMt("label", [l, s]),
      u = a.Ikc({
        kind: a.euz("plugin_suggestions"),
        version: a.euz(1),
        suggestions: a.YOg(a.Ikc({ plugin_id: a.YjP().min(1), display_name: a.YjP().min(1) })),
      }),
      c = a.Ikc({
        "openai/plugin_suggestion_id": r.optional(),
        "openai/plugin_suggestion_connector_ids": a
          .g1P(a.YjP(), a.YjP().min(1))
          .optional()
          .catch(void 0),
      })
    n.d(t, {}, { H2: c, Jq: u, Jt: o, Yn: i, gt: d })
  },
  EAcR(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("qmMi"),
      l = n("zd8w"),
      s = n("oyxz"),
      d = n("Wdu7"),
      u = n("aENG"),
      c = n("tSEg"),
      m = n("WFY2"),
      p = n("Cv9y"),
      g = n("qZWE"),
      h = n("X3T3"),
      f = n("EDsV")
    n.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            n,
            v,
            y,
            w,
            I,
            x,
            C,
            b,
            A,
            S,
            M,
            _ = (0, r.c)(90),
            {
              resource: k,
              error: E,
              errorTitle: T,
              errorIllustration: P,
              hostDisplayModes: D,
              fullSurface: N,
              hostScroll: j,
              inlineSurface: R,
              mcpAppId: O,
              overlayOwnerId: U,
              onRetryResourceRead: L,
              renderErrorActions: G,
              appName: q,
              presentation: B,
              showLoadingStatus: V,
              disableInlineLoadingState: F,
            } = e,
            W = void 0 !== N && N,
            H = void 0 !== j && j,
            z = void 0 === R ? "standalone" : R,
            K = void 0 === U ? null : U,
            Y = void 0 === V || V,
            Z = void 0 !== F && F,
            $ = (0, o.gh)(c.GD),
            X = (0, o._U)(g.Mc, O),
            Q = X?.content.resource
          _[0] !== E || _[1] !== k || _[2] !== Q
            ? ((t = null == Q ? k : { data: Q, error: E ?? null, isLoading: !1 }),
              (_[0] = E),
              (_[1] = k),
              (_[2] = Q),
              (_[3] = t))
            : (t = _[3])
          let J = t,
            { data: ee, isLoading: et } = J,
            en = ee?.html ?? null
          _[4] !== J || _[5] !== D ? ((n = (0, f.ej)(J, D)), (_[4] = J), (_[5] = D), (_[6] = n)) : (n = _[6])
          let ea = n,
            er = (0, o._U)(g.Et, O),
            ei = (0, o._U)(g.nE, O),
            eo = W || "inline" === B,
            el = X?.inlineFrameAnchor.ref,
            es = ee?.heightHint ?? null,
            ed = ee?.minFrameHeight ?? null
          _[7] !== er.intrinsicHeight || _[8] !== H || _[9] !== z || _[10] !== ed || _[11] !== es
            ? ((v = (0, u.i)(er.intrinsicHeight, es, ed, z, H)),
              (_[7] = er.intrinsicHeight),
              (_[8] = H),
              (_[9] = z),
              (_[10] = ed),
              (_[11] = es),
              (_[12] = v))
            : (v = _[12])
          let eu = v,
            ec = !W && ee?.fitWidth ? (er.intrinsicWidth ?? ee.widthHint) : void 0,
            em = W ? void 0 : ee?.inlineFramePadding
          ;(_[13] !== em ? ((y = (0, u.q)(em)), (_[13] = em), (_[14] = y)) : (y = _[14]),
            _[15] !== ec || _[16] !== y
              ? ((w = { width: ec, ...y }), (_[15] = ec), (_[16] = y), (_[17] = w))
              : (w = _[17]))
          let ep = w,
            eg = "error" === ea.kind ? ea.error : er.sandboxError
          _[18] !== ea.kind || _[19] !== eg
            ? ((I = null),
              "too-large" === ea.kind
                ? (I = "HTML exceeds display limit")
                : eg instanceof f.l3 && (I = "No supported display mode"),
              (_[18] = ea.kind),
              (_[19] = eg),
              (_[20] = I))
            : (I = _[20])
          let eh = "error" === ea.kind ? ea.error : null,
            ef = eh?.message
          _[21] !== I ||
          _[22] !== ee?.availableDisplayModes ||
          _[23] !== ee?.htmlByteLength ||
          _[24] !== D ||
          _[25] !== O ||
          _[26] !== eh
            ? ((x = () => {
                ;(null != I || null != eh) &&
                  m.v.warning("MCP app error displayed", {
                    safe: { reason: I ?? "App could not be displayed", htmlByteLength: ee?.htmlByteLength },
                    sensitive: {
                      mcpAppId: O,
                      error: eh,
                      hostDisplayModes: D,
                      availableDisplayModes: ee?.availableDisplayModes,
                    },
                  })
              }),
              (_[21] = I),
              (_[22] = ee?.availableDisplayModes),
              (_[23] = ee?.htmlByteLength),
              (_[24] = D),
              (_[25] = O),
              (_[26] = eh),
              (_[27] = x))
            : (x = _[27])
          let ev = (0, l.useEffectEvent)(x)
          if (
            (_[28] !== ev
              ? ((C = () => {
                  ev()
                }),
                (_[28] = ev),
                (_[29] = C))
              : (C = _[29]),
            _[30] !== I || _[31] !== O || _[32] !== ef
              ? ((b = [I, ef, O]), (_[30] = I), (_[31] = O), (_[32] = ef), (_[33] = b))
              : (b = _[33]),
            (0, l.useEffect)(C, b),
            "too-large" === ea.kind)
          ) {
            let e
            return (
              _[34] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.F, {
                    className: "w-full",
                    fullWidth: !0,
                    level: "danger",
                    children: (0, a.jsx)("div", {
                      className: "max-h-48 overflow-auto text-size-chat whitespace-pre-wrap",
                      children: (0, a.jsx)(s.A, {
                        id: "codex.mcpTool.mcpAppTooLarge",
                        defaultMessage: "This app is too large to display",
                      }),
                    }),
                  })),
                  (_[34] = e))
                : (e = _[34]),
              e
            )
          }
          if (!W && "launcher" === B) {
            let e,
              t = K ?? void 0
            return (
              _[35] !== el || _[36] !== t
                ? ((e = (0, a.jsx)("div", { ref: el, "data-overlay-owner": t, hidden: !0 })),
                  (_[35] = el),
                  (_[36] = t),
                  (_[37] = e))
                : (e = _[37]),
              e
            )
          }
          if (et || (!ei && null != en && null == eg)) {
            let e, t, n, r
            if ("pending" === B && !W) {
              let e
              return !Y || Z
                ? null
                : (_[38] === Symbol.for("react.memo_cache_sentinel")
                    ? ((e = (0, a.jsx)("span", {
                        role: "status",
                        className: "loading-shimmer-pure-text text-codex-description",
                        children: (0, a.jsx)(s.A, { id: "codex.mcpTool.mcpAppLoading", defaultMessage: "Loading app" }),
                      })),
                      (_[38] = e))
                    : (e = _[38]),
                  e)
            }
            let o = et ? null : el,
              l = K ?? void 0,
              d = null == em && "max-w-full",
              u = W && "h-full"
            _[39] !== d || _[40] !== u ? ((e = (0, i.A)(d, u)), (_[39] = d), (_[40] = u), (_[41] = e)) : (e = _[41])
            let c = "standalone" === z && "rounded-lg border"
            _[42] !== c ? ((t = (0, i.A)("w-full border-subtle", c)), (_[42] = c), (_[43] = t)) : (t = _[43])
            let m = W ? "100%" : eu
            return (
              _[44] !== Z || _[45] !== W || _[46] !== H || _[47] !== em || _[48] !== Y || _[49] !== t || _[50] !== m
                ? ((n = (0, a.jsx)(p.p, {
                    className: t,
                    height: m,
                    inlineFramePadding: em,
                    fullSurface: W,
                    allowCompact: H,
                    showLoadingStatus: Y,
                    disableInlineLoadingState: Z,
                  })),
                  (_[44] = Z),
                  (_[45] = W),
                  (_[46] = H),
                  (_[47] = em),
                  (_[48] = Y),
                  (_[49] = t),
                  (_[50] = m),
                  (_[51] = n))
                : (n = _[51]),
              _[52] !== ep || _[53] !== z || _[54] !== o || _[55] !== l || _[56] !== e || _[57] !== n
                ? ((r = (0, a.jsx)("div", {
                    ref: o,
                    "data-overlay-owner": l,
                    className: e,
                    style: ep,
                    "data-mcp-app-inline-surface": z,
                    children: n,
                  })),
                  (_[52] = ep),
                  (_[53] = z),
                  (_[54] = o),
                  (_[55] = l),
                  (_[56] = e),
                  (_[57] = n),
                  (_[58] = r))
                : (r = _[58]),
              r
            )
          }
          if (null != eg) {
            let e, t
            return (
              _[59] !== ea.kind ||
              _[60] !== O ||
              _[61] !== L ||
              _[62] !== X?.content.mcpAppHostAdapter?.retry ||
              _[63] !== $
                ? ((e = X?.content.mcpAppHostAdapter?.retry ?? ("error" === ea.kind ? L : () => (0, g.C3)($, O))),
                  (_[59] = ea.kind),
                  (_[60] = O),
                  (_[61] = L),
                  (_[62] = X?.content.mcpAppHostAdapter?.retry),
                  (_[63] = $),
                  (_[64] = e))
                : (e = _[64]),
              _[65] !== q ||
              _[66] !== P ||
              _[67] !== T ||
              _[68] !== W ||
              _[69] !== z ||
              _[70] !== eg ||
              _[71] !== G ||
              _[72] !== e
                ? ((t = (0, a.jsx)(h.P, {
                    error: eg,
                    errorTitle: T,
                    errorIllustration: P,
                    fullSurface: W,
                    inlineSurface: z,
                    pluginName: q,
                    renderErrorActions: G,
                    onRetry: e,
                  })),
                  (_[65] = q),
                  (_[66] = P),
                  (_[67] = T),
                  (_[68] = W),
                  (_[69] = z),
                  (_[70] = eg),
                  (_[71] = G),
                  (_[72] = e),
                  (_[73] = t))
                : (t = _[73]),
              t
            )
          }
          if (!eo) {
            let e,
              t = K ?? void 0
            return (
              _[74] !== el || _[75] !== t
                ? ((e = (0, a.jsx)("div", { ref: el, "data-overlay-owner": t, hidden: !0 })),
                  (_[74] = el),
                  (_[75] = t),
                  (_[76] = e))
                : (e = _[76]),
              e
            )
          }
          if (null == en) {
            let e
            return (
              _[77] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("p", {
                    className: "text-codex-description/80",
                    children: (0, a.jsx)(s.A, {
                      id: "codex.mcpTool.mcpAppNoContent",
                      defaultMessage: "This app has no content to display",
                    }),
                  })),
                  (_[77] = e))
                : (e = _[77]),
              e
            )
          }
          let ey = K ?? void 0,
            ew = null == em && "w-full max-w-full",
            eI = W && "h-full"
          _[78] !== ew || _[79] !== eI
            ? ((A = (0, i.A)("overflow-hidden", ew, eI)), (_[78] = ew), (_[79] = eI), (_[80] = A))
            : (A = _[80])
          let ex = W ? "100%" : eu
          return (
            _[81] !== ep || _[82] !== ex
              ? ((S = { ...ep, height: ex }), (_[81] = ep), (_[82] = ex), (_[83] = S))
              : (S = _[83]),
            _[84] !== el || _[85] !== z || _[86] !== ey || _[87] !== A || _[88] !== S
              ? ((M = (0, a.jsx)("div", {
                  ref: el,
                  "data-overlay-owner": ey,
                  "data-mcp-app-expanded": "true",
                  "data-mcp-app-inline-surface": z,
                  className: A,
                  style: S,
                })),
                (_[84] = el),
                (_[85] = z),
                (_[86] = ey),
                (_[87] = A),
                (_[88] = S),
                (_[89] = M))
              : (M = _[89]),
            M
          )
        },
      },
    )
  },
  X3T3(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("slpy"),
      o = n("on57"),
      l = n("oyxz"),
      s = n("Wf1j"),
      d = n("Sm6l"),
      u = n("bVeK"),
      c = n("ZiSI"),
      m = n("pZTm"),
      p = n("EDsV")
    function g(e) {
      let t,
        n,
        i,
        l = (0, r.c)(11),
        { fullSurface: s, inlineSurface: d, title: u, illustration: m, actions: p } = e,
        g = s ? "h-full" : "h-60",
        h =
          !s && "standalone" === (void 0 === d ? "standalone" : d) && "overflow-hidden rounded-lg border border-strong"
      l[0] !== g || l[1] !== h ? ((t = (0, o.A)(g, h)), (l[0] = g), (l[1] = h), (l[2] = t)) : (t = l[2])
      let f = !s
      return (
        l[3] !== p || l[4] !== m || l[5] !== f || l[6] !== u
          ? ((n = (0, a.jsx)(c.X, { compact: f, title: u, illustration: m, description: null, actions: p })),
            (l[3] = p),
            (l[4] = m),
            (l[5] = f),
            (l[6] = u),
            (l[7] = n))
          : (n = l[7]),
        l[8] !== t || l[9] !== n
          ? ((i = (0, a.jsx)("div", { className: t, children: n })), (l[8] = t), (l[9] = n), (l[10] = i))
          : (i = l[10]),
        i
      )
    }
    function h() {
      let e,
        t,
        n,
        o,
        c = (0, r.c)(6),
        m = (0, s.A)()
      c[0] !== m
        ? ((e = m.formatMessage({
            id: "codex.mcpTool.mcpAppInitializationTimeoutDetailsLabel",
            defaultMessage: "Timeout details",
          })),
          (c[0] = m),
          (c[1] = e))
        : (e = c[1])
      let p = e
      return (
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, {
              id: "codex.mcpTool.mcpAppInitializationTimeoutDetails",
              defaultMessage:
                "The app didn't finish initializing within 5 seconds. Check that it sends ui/notifications/initialized after ui/initialize completes.",
            })),
            (c[2] = t))
          : (t = c[2]),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(u.ehD, { className: "text-secondary" })), (c[3] = n))
          : (n = c[3]),
        c[4] !== p
          ? ((o = (0, a.jsx)(i.m, {
              preventDismissOnFastClick: !0,
              content: t,
              children: (0, a.jsx)(d.$, { size: "inline", color: "ghost", "aria-label": p, children: n }),
            })),
            (c[4] = p),
            (c[5] = o))
          : (o = c[5]),
        o
      )
    }
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            n,
            i,
            o = (0, r.c)(21),
            {
              error: s,
              errorTitle: u,
              errorIllustration: c,
              fullSurface: f,
              inlineSurface: v,
              onRetry: y,
              renderErrorActions: w,
              pluginName: I,
            } = e,
            x = void 0 !== f && f,
            C = void 0 === v ? "standalone" : v,
            b = u
          if (null == b)
            if (s instanceof p.zR) {
              let e,
                t,
                n,
                r = I ? "yes" : "no"
              ;(o[0] !== I || o[1] !== r
                ? ((e = (0, a.jsx)(l.A, {
                    id: "codex.mcpTool.mcpAppInitializationTimeout",
                    defaultMessage: "{hasName, select, yes {{appName}} other {This app}} timed out",
                    values: { hasName: r, appName: I },
                  })),
                  (o[0] = I),
                  (o[1] = r),
                  (o[2] = e))
                : (e = o[2]),
                o[3] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)(h, {})), (o[3] = t)) : (t = o[3]),
                o[4] !== e
                  ? ((n = (0, a.jsxs)("span", { className: "inline-flex items-center gap-1.5", children: [e, t] })),
                    (o[4] = e),
                    (o[5] = n))
                  : (n = o[5]),
                (b = n))
            } else if (null == I) {
              let e
              ;(o[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(l.A, { ...m.A.displayUnnamedApp })), (o[6] = e))
                : (e = o[6]),
                (b = e))
            } else {
              let e
              ;(o[7] !== I
                ? ((e = (0, a.jsx)(l.A, { ...m.A.displayApp, values: { appName: I } })), (o[7] = I), (o[8] = e))
                : (e = o[8]),
                (b = e))
            }
          o[9] !== x || o[10] !== y
            ? ((t =
                null != y
                  ? (0, a.jsx)(d.$, {
                      color: "secondary",
                      size: x ? "large" : "compact",
                      onClick: () => y(),
                      children: (0, a.jsx)(l.A, { id: "codex.mcpTool.mcpAppRetry", defaultMessage: "Try again" }),
                    })
                  : null),
              (o[9] = x),
              (o[10] = y),
              (o[11] = t))
            : (t = o[11])
          let A = t
          o[12] !== w || o[13] !== A ? ((n = w ? w(A) : A), (o[12] = w), (o[13] = A), (o[14] = n)) : (n = o[14])
          let S = n
          return (
            o[15] !== S || o[16] !== c || o[17] !== b || o[18] !== x || o[19] !== C
              ? ((i = (0, a.jsx)(g, { fullSurface: x, inlineSurface: C, title: b, illustration: c, actions: S })),
                (o[15] = S),
                (o[16] = c),
                (o[17] = b),
                (o[18] = x),
                (o[19] = C),
                (o[20] = i))
              : (i = o[20]),
            i
          )
        },
        W: g,
      },
    )
  },
  qwxA(e, t, n) {
    n.d(t, { er: () => w, j3: () => y, KO: () => v })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("qmMi"),
      o = n("zd8w"),
      l = n("I7bK"),
      s = n("Bv6U"),
      d = n("Vlqh"),
      u = n("kfGJ")
    let c = new Set(["defense-factory@openai-curated-remote", "ngs-analysis-workbench@openai-curated-remote", d.p4])
    var m = n("qZWE"),
      p = n("tSEg"),
      g = n("SNez"),
      h = n("EDsV"),
      f = n("DRR4")
    function v(e) {
      let t,
        n,
        a = (0, r.c)(6),
        { callIds: l, hostId: s, conversationId: d } = e,
        u = (0, i.gh)(p.GD)
      return (
        a[0] !== l || a[1] !== d || a[2] !== s || a[3] !== u
          ? ((t = () => {
              ;(0, m.wU)(u, { callIds: l, hostId: s, conversationId: d })
            }),
            (n = [l, s, d, u]),
            (a[0] = l),
            (a[1] = d),
            (a[2] = s),
            (a[3] = u),
            (a[4] = t),
            (a[5] = n))
          : ((t = a[4]), (n = a[5])),
        (0, o.useLayoutEffect)(t, n),
        null
      )
    }
    function y(e) {
      let t,
        n,
        a = (0, r.c)(5),
        { isInlineRequested: l, mcpAppId: s } = e,
        d = (0, i.gh)(p.GD)
      return (
        a[0] !== l || a[1] !== s || a[2] !== d
          ? ((t = () => {
              d.set(m.vm, s, l)
            }),
            (n = [l, s, d]),
            (a[0] = l),
            (a[1] = s),
            (a[2] = d),
            (a[3] = t),
            (a[4] = n))
          : ((t = a[3]), (n = a[4])),
        (0, o.useLayoutEffect)(t, n),
        null
      )
    }
    function w(e) {
      let t,
        n,
        d,
        v,
        y,
        w,
        I,
        x,
        C,
        b,
        A,
        S,
        M,
        _,
        k,
        E,
        T,
        P,
        D,
        N,
        j,
        R,
        O,
        U,
        L,
        G = (0, r.c)(65)
      G[0] !== e
        ? (({
            recipient: M,
            resource: A,
            access: n,
            fullSurface: _,
            hostDisplayModes: v,
            hostId: y,
            lifetime: w,
            mcpAppId: I,
            mcpServerStatuses: x,
            pluginId: C,
            connectorId: d,
            Frame: t,
            server: S,
            ...b
          } = e),
          (G[0] = e),
          (G[1] = t),
          (G[2] = n),
          (G[3] = d),
          (G[4] = v),
          (G[5] = y),
          (G[6] = w),
          (G[7] = I),
          (G[8] = x),
          (G[9] = C),
          (G[10] = b),
          (G[11] = A),
          (G[12] = S),
          (G[13] = M),
          (G[14] = _))
        : ((t = G[1]),
          (n = G[2]),
          (d = G[3]),
          (v = G[4]),
          (y = G[5]),
          (w = G[6]),
          (I = G[7]),
          (x = G[8]),
          (C = G[9]),
          (b = G[10]),
          (A = G[11]),
          (S = G[12]),
          (M = G[13]),
          (_ = G[14]))
      let q = void 0 === M ? null : M,
        B = void 0 !== _ && _,
        V = (0, i.gh)(p.GD),
        F = (0, i._U)(m.eW, I),
        W = (0, i.Ul)(g.e)
      ;(G[15] !== w || G[16] !== I || G[17] !== V
        ? ((k = () => {
            if ("component" === w)
              return () => {
                ;(0, m.$u)(V, I)
              }
          }),
          (E = [w, I, V]),
          (G[15] = w),
          (G[16] = I),
          (G[17] = V),
          (G[18] = k),
          (G[19] = E))
        : ((k = G[18]), (E = G[19])),
        (0, o.useLayoutEffect)(k, E))
      let H = (0, o.useContext)(l.f$)?.rightPanelLayoutTick
      G[20] !== x || G[21] !== C || G[22] !== S
        ? ((T =
            void 0 !== C
              ? C
              : x?.data.find((e) => {
                  let { name: t } = e
                  return t === S
                })?.pluginId),
          (G[20] = x),
          (G[21] = C),
          (G[22] = S),
          (G[23] = T))
        : (T = G[23])
      let z = T
      G[24] !== d || G[25] !== y || G[26] !== z || G[27] !== S
        ? ((P = { hostId: y, pluginId: z, connectorId: d, server: S }),
          (G[24] = d),
          (G[25] = y),
          (G[26] = z),
          (G[27] = S),
          (G[28] = P))
        : (P = G[28])
      let { bridge: K, pluginId: Y, isLoading: Z } = (0, i._U)(s.firstPartyPluginBridgeForServer$, P),
        $ = z ?? Y
      G[29] !== y || G[30] !== $
        ? ((D = !(function ({ hostId: e, pluginId: t }) {
            return e === u.fI && null != t && c.has(t)
          })({ hostId: y, pluginId: $ })
            ? void 0
            : $),
          (G[29] = y),
          (G[30] = $),
          (G[31] = D))
        : (D = G[31])
      let X = D,
        Q = A.isLoading || Z
      G[32] !== v || G[33] !== Q || G[34] !== A
        ? ((N = (0, h.ej)({ ...A, isLoading: Q }, v)), (G[32] = v), (G[33] = Q), (G[34] = A), (G[35] = N))
        : (N = G[35])
      let J = N
      return (
        G[36] !== n ||
        G[37] !== J ||
        G[38] !== K ||
        G[39] !== X ||
        G[40] !== B ||
        G[41] !== v ||
        G[42] !== y ||
        G[43] !== W ||
        G[44] !== I ||
        G[45] !== x ||
        G[46] !== q ||
        G[47] !== b ||
        G[48] !== z ||
        G[49] !== H ||
        G[50] !== V ||
        G[51] !== S
          ? ((R = () => {
              W ||
                "ready" !== J.kind ||
                null == n ||
                (0, m.Se)(V, {
                  ...b,
                  recipient: q,
                  resource: J.data,
                  access: n,
                  fullSurface: B,
                  hostDisplayModes: v,
                  hostId: y,
                  mcpAppId: I,
                  mcpServerStatuses: x,
                  pluginId: z,
                  server: S,
                  firstPartyPluginBridge: K,
                  firstPartyPluginLoggerPluginId: X,
                  rightPanelLayoutTick: H,
                })
            }),
            (j = [n, J, K, X, B, v, y, W, I, x, q, b, z, H, V, S]),
            (G[36] = n),
            (G[37] = J),
            (G[38] = K),
            (G[39] = X),
            (G[40] = B),
            (G[41] = v),
            (G[42] = y),
            (G[43] = W),
            (G[44] = I),
            (G[45] = x),
            (G[46] = q),
            (G[47] = b),
            (G[48] = z),
            (G[49] = H),
            (G[50] = V),
            (G[51] = S),
            (G[52] = j),
            (G[53] = R))
          : ((j = G[52]), (R = G[53])),
        (0, o.useLayoutEffect)(R, j),
        G[54] !== t || G[55] !== w || G[56] !== I || G[57] !== V || G[58] !== F
          ? ((O = () => {
              "component" !== w && null != F && (0, f.Iv)(V, { Frame: t, lifetime: w, sessionId: F, sourceMcpAppId: I })
            }),
            (U = [t, w, I, F, V]),
            (G[54] = t),
            (G[55] = w),
            (G[56] = I),
            (G[57] = V),
            (G[58] = F),
            (G[59] = O),
            (G[60] = U))
          : ((O = G[59]), (U = G[60])),
        (0, o.useLayoutEffect)(O, U),
        G[61] !== t || G[62] !== w || G[63] !== F
          ? ((L = "component" === w && null != F ? (0, a.jsx)(t, { sessionId: F }, F) : null),
            (G[61] = t),
            (G[62] = w),
            (G[63] = F),
            (G[64] = L))
          : (L = G[64]),
        L
      )
    }
  },
  nQiX(e, t, n) {
    var a = n("ASxG")
    let r = "connector_openai_phone",
      i = a.Ikc({
        call_id: a.YjP().regex(/^phone_[A-Za-z0-9_]{1,128}$/),
        destination_number: a.YjP().max(128),
        status: a.euz("accepted"),
      }),
      o = a.Ikc({ ticket: a.YjP().min(1).max(8192), cluster: a.YjP().min(1).max(32), websocketUrl: a.YjP() })
    n.d(
      t,
      {},
      {
        Y: function (e, t, n) {
          if (e !== r || "place_call" !== t) return null
          let a = n(),
            l = i.safeParse(a)
          return l.success
            ? {
                ...l.data,
                connection: (function (e, t) {
                  let n,
                    a = o.safeParse(t)
                  if (!a.success) return null
                  try {
                    n = new URL(a.data.websocketUrl)
                  } catch {
                    return null
                  }
                  return "" === n.username &&
                    "" === n.password &&
                    "" === n.hash &&
                    "/phone" === n.pathname &&
                    1 === n.searchParams.getAll("call_id").length &&
                    n.searchParams.get("call_id") === e &&
                    1 === n.searchParams.getAll("cluster").length &&
                    n.searchParams.get("cluster") === a.data.cluster &&
                    ["wss://realtime.chatgpt.com", "wss://realtime.chatgpt-staging.com"].includes(n.origin)
                    ? a.data
                    : null
                })(l.data.call_id, a),
              }
            : null
        },
        x: r,
      },
    )
  },
  u0X2(e, t, n) {
    var a = n("iRMi"),
      r = n("DBCl"),
      i = n("Ywss"),
      o = n("KJ1J"),
      l = n("cLdu"),
      s = n("yGJW"),
      d = n("Wv1R")
    function u(e, t) {
      return {
        connectorId: t.connectorId ?? t.identity?.connectorId,
        pluginId:
          t.identity?.pluginId ??
          ((0, o.fI)(t.server) || null == t.pluginId ? void 0 : (0, l.$A)(e, t.hostId, t.pluginId)),
      }
    }
    function c(e, t) {
      return null != t.source ? u(e, t.source) : { connectorId: t.hostedEntrypoint.app_id, pluginId: t.remotePluginId }
    }
    function m(e, t) {
      if (!(0, i.B6)(r.RNG, t)) return null
      let n = e.get(d.jT)?.entries?.find((e) => e.path === t)
      return null == n ? {} : c(e, n)
    }
    n.d(
      t,
      {},
      {
        Aj: u,
        E5: m,
        Oc: function (e) {
          let t = m(e, e.value.pathname)
          null != t &&
            (0, s.yy)(e, a.CodexMcpExtensionAction, { ...t, feature: "global_entrypoint", action: "tab_requested" })
        },
        nm: c,
        zD: function (e, t) {
          return u(e, { ...t, connectorId: "appId" in t ? t.appId : ((0, o.Nt)(t) ?? void 0) })
        },
      },
    )
  },
  N0Xk(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("on57"),
      o = n("qmMi"),
      l = n("FvYa"),
      s = n("ZQu1"),
      d = n("s5dU"),
      u = n("a6Zv"),
      c = n("mwaw")
    n.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            n,
            m,
            p = (0, r.c)(17),
            { icon: g, className: h, fallback: f, monochrome: v } = e,
            y = void 0 === h ? "icon-xs" : h,
            w = void 0 !== v && v,
            I = (0, o._U)(g?.connectorId != null && void 0 === g.logoUrl ? c.I : null, g) ?? g,
            x = (0, u.Y)()
          p[0] !== y || p[1] !== f
            ? ((t = f ?? (0, a.jsx)(d.A, { className: y })), (p[0] = y), (p[1] = f), (p[2] = t))
            : (t = p[2])
          let C = t
          if (I?.connectorId != null) {
            let e
            return (
              p[3] !== y ||
              p[4] !== C ||
              p[5] !== I.connectorId ||
              p[6] !== I.logoDarkUrl ||
              p[7] !== I.logoUrl ||
              p[8] !== w
                ? ((e = (0, a.jsx)(l.R, {
                    className: y,
                    alt: "",
                    fallback: C,
                    knownAppId: I.connectorId,
                    logoDarkUrl: I.logoDarkUrl,
                    logoUrl: I.logoUrl,
                    monochrome: w,
                  })),
                  (p[3] = y),
                  (p[4] = C),
                  (p[5] = I.connectorId),
                  (p[6] = I.logoDarkUrl),
                  (p[7] = I.logoUrl),
                  (p[8] = w),
                  (p[9] = e))
                : (e = p[9]),
              e
            )
          }
          if (I?.logoUrl == null) return C
          let b = x ? I.logoDarkUrl : I.logoUrl
          return (
            p[10] !== y ? ((n = (0, i.A)("rounded-2xs", y)), (p[10] = y), (p[11] = n)) : (n = p[11]),
            p[12] !== C || p[13] !== w || p[14] !== b || p[15] !== n
              ? ((m = (0, a.jsx)(s.R, { className: n, alt: "", fallback: C, src: b, monochrome: w }, b)),
                (p[12] = C),
                (p[13] = w),
                (p[14] = b),
                (p[15] = n),
                (p[16] = m))
              : (m = p[16]),
            m
          )
        },
      },
    )
  },
  H7Ld(e, t, n) {
    var a = n("YWcr"),
      r = n("MX6A")
    n.d(
      t,
      {},
      {
        Dy: function (e) {
          return e?.map((e) => e.trim()).find((e) => e.length > 0) ?? null
        },
        KH: function ({ defaultPrompt: e, pluginDisplayName: t, pluginId: n }) {
          let i = `[@${t}](${(0, r.b4)((0, a.vt)(n))})`
          return `${i} ${e?.trim() ?? ""}`
        },
        h0: "deep-research-workflow@openai-curated-remote",
      },
    )
  },
  uzkw(e, t, n) {
    var a = n("Kwur")
    n.d(
      t,
      {},
      {
        d: function ({
          connectorId: e,
          conversationId: t,
          eventType: n,
          expectedIdentity: r,
          messageId: i,
          pluginId: o,
          productSurface: l,
          suggestionMessageId: s,
        }) {
          a.Request.safePost("/unified_user_signals", {
            expectedIdentity: r,
            requestBody: {
              signal_type: "ecosystem_suggestion_interaction",
              product_surface: l,
              signal_metadata: {},
              user_metadata: {},
              signal_detail: {
                common_metadata: { conversation_id: t, message_id: i },
                ecosystem_suggestion_interaction: {
                  connector_id: e ?? "",
                  plugin_id: o,
                  suggestion_message_id: s,
                  event_type: n,
                },
              },
            },
          }).catch(() => void 0)
        },
      },
    )
  },
  ePOr(e, t, n) {
    var a = n("Qgfj")
    let r = (0, a.YK)({
        customizeTitle: { id: "sidebar.customize.title", defaultMessage: "Customize" },
        unreadsTitle: { id: "sidebarElectron.unreads.title", defaultMessage: "Unreads" },
        unreadsEmpty: { id: "sidebarElectron.unreads.empty", defaultMessage: "Nothing needs attention" },
      }),
      i = (0, a.YK)({
        newPage: { id: "sidebarFeatureNavigation.space.newPage", defaultMessage: "New page" },
        navigation: { id: "sidebarElectron.spaceNavigation", defaultMessage: "Space" },
        openInNewWindow: { id: "sidebarFeatureNavigation.space.openInNewWindow", defaultMessage: "Open in new window" },
      })
    n.d(t, {}, { J: i, T: r })
  },
  cWHY(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("qmMi"),
      o = n("oyxz"),
      l = n("DEA6"),
      s = n("O666")
    n.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            n,
            d = (0, r.c)(4),
            { children: u } = e
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { layer: "3435160418", parameter: "use_tasks_label" }), (d[0] = t))
            : (t = d[0])
          let c = (0, i._U)(s.H$, t)
          return (
            d[1] !== u || d[2] !== c
              ? ((n = c
                  ? (0, a.jsx)(o.A, { ...l.U.tasks })
                  : (u ?? (0, a.jsx)(o.A, { id: "sidebarElectron.inboxRouteNavLink", defaultMessage: "Scheduled" }))),
                (d[1] = u),
                (d[2] = c),
                (d[3] = n))
              : (n = d[3]),
            n
          )
        },
      },
    )
  },
  DEA6(e, t, n) {
    let a = (0, n("Qgfj").YK)({ tasks: { id: "sidebar.scheduledTasks.destinationLabel", defaultMessage: "Tasks" } })
    n.d(t, {}, { U: a })
  },
  b38k(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      finder: { id: "sidebarElectron.openWorkspaceRootInFinder", defaultMessage: "Reveal in Finder" },
      explorer: { id: "sidebarElectron.openWorkspaceRootInExplorer", defaultMessage: "Open in Explorer" },
      fileManager: { id: "sidebarElectron.openWorkspaceRootInFileManager", defaultMessage: "Open in File Manager" },
    })
    n.d(
      t,
      {},
      {
        S: function (e) {
          switch (e) {
            case "macOS":
              return a.finder
            case "windows":
              return a.explorer
            case "linux":
              return a.fileManager
          }
        },
      },
    )
  },
  GzOO(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("hwkA"),
      o = n("on57"),
      l = n("qmMi"),
      s = n("oyxz"),
      d = n("khOd")
    n.d(
      t,
      {},
      {
        l: function (e) {
          let t,
            n,
            i,
            l,
            s,
            d,
            u,
            c,
            m = (0, r.c)(14)
          m[0] !== e
            ? (({ children: t, className: n, alignment: l, variant: s, hasLoadingRows: d, ...i } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = n),
              (m[3] = i),
              (m[4] = l),
              (m[5] = s),
              (m[6] = d))
            : ((t = m[1]), (n = m[2]), (i = m[3]), (l = m[4]), (s = m[5]), (d = m[6]))
          let p = void 0 === l ? "edge" : l,
            g = void 0 === s ? "default" : s,
            h =
              "parent-label" === p
                ? "ps-[var(--sidebar-row-label-inset)]"
                : "nested" === p && ("tableRow" === g ? "ps-[40px]" : "px-8")
          return (
            m[7] !== n || m[8] !== h
              ? ((u = (0, o.A)("flex gap-1 py-1", h, n)), (m[7] = n), (m[8] = h), (m[9] = u))
              : (u = m[9]),
            m[10] !== t || m[11] !== i || m[12] !== u
              ? ((c = (0, a.jsxs)(a.Fragment, {
                  children: [
                    null,
                    (0, a.jsx)(a.Fragment, { children: (0, a.jsx)("div", { ...i, className: u, children: t }) }),
                  ],
                })),
                (m[10] = t),
                (m[11] = i),
                (m[12] = u),
                (m[13] = c))
              : (c = m[13]),
            c
          )
        },
        z: function (e) {
          let t,
            n,
            o,
            u,
            c,
            m,
            p,
            g = (0, r.c)(14)
          g[0] !== e
            ? (({ alignment: o, children: t, variant: u, ...n } = e),
              (g[0] = e),
              (g[1] = t),
              (g[2] = n),
              (g[3] = o),
              (g[4] = u))
            : ((t = g[1]), (n = g[2]), (o = g[3]), (u = g[4]))
          let h = void 0 === o ? "edge" : o,
            f = (0, l.Ul)(d.GB),
            v = u ?? (f ? "ghost" : "transparent"),
            y = "edge" !== h ? "start" : void 0
          return (
            g[5] !== t
              ? ((c =
                  void 0 === t ? (0, a.jsx)(s.A, { id: "sidebarElectron.showMore", defaultMessage: "Show more" }) : t),
                (g[5] = t),
                (g[6] = c))
              : (c = g[6]),
            g[7] !== c
              ? ((m = (0, a.jsx)("span", { className: "text-base", children: c })), (g[7] = c), (g[8] = m))
              : (m = g[8]),
            g[9] !== n || g[10] !== v || g[11] !== y || g[12] !== m
              ? ((p = (0, a.jsx)(i.$, {
                  className:
                    "[--button-font-weight:var(--font-weight-normal)] [--color-text-secondary-ghost:var(--color-text-tertiary)]",
                  color: "secondary",
                  variant: v,
                  pill: !1,
                  size: "xs",
                  opticallyAlign: y,
                  type: "button",
                  ...n,
                  children: m,
                })),
                (g[9] = n),
                (g[10] = v),
                (g[11] = y),
                (g[12] = m),
                (g[13] = p))
              : (p = g[13]),
            p
          )
        },
      },
    )
  },
  M1Uv(e, t, n) {
    n.d(t, { ImagePreviewTab: () => C, a: () => A, S: () => S })
    var a = n("ABep"),
      r = n("zd8w"),
      i = n("ZU27"),
      o = n("EpL9"),
      l = n("Bbed"),
      s = (e) =>
        (0, a.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M11.5047 10C12.8828 10 14 11.1172 14 12.4953C14 15.2919 10.9404 14.9905 9.00947 14.9905C9.00947 13.0596 8.70813 10 11.5047 10Z",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinejoin: "round",
            }),
            (0, a.jsx)("path", {
              d: "M12 9.5C13.8983 6.79576 16.0839 4.85949 18.8983 3.40128C19.3829 3.15019 19.9712 3.25691 20.3571 3.64286V3.64286C20.7431 4.0288 20.8498 4.61706 20.5987 5.10168C19.1405 7.91612 17.2042 10.1017 14.5 12",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
            }),
            (0, a.jsx)("path", {
              d: "M12.0003 21.0003C11.5003 21.0003 8.93732 20.1297 6.71782 17.9102C3.00784 14.2002 2.05809 9.13491 4.5965 6.5965C6.68218 4.51082 10.4738 4.78002 13.8179 7.00031M17.1066 10.0003C19.9927 13.3315 21.2146 16.7289 19.0003 18.5003C17.3415 19.8274 15.2424 18.2927 14.0176 17.1097",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        }),
      d = n("DBCl"),
      u = n("mEZK"),
      c = n("SPnB"),
      m = n("CiLO"),
      p = n("uSwP"),
      g = n("CBsD"),
      h = n("Sd8U"),
      f = n("VPBa")
    let v = {
      canTransfer: (e, t, n) => null != y(e, t, n),
      start: async (e, t, n, a) => {
        let r = y(e, t, n)
        if (null == r || a.aborted) return null
        let i = e.get(c.chatGptAuthenticatedAccountId$),
          o = e.get(c.chatGptAuthenticatedUserId$),
          l = e.get(r.controller.tabStateById$, r.tab.tabId),
          s = () =>
            !a.aborted &&
            !t.transferState.isBlocked() &&
            e.get(r.controller.tabById$, r.tab.tabId)?.props === t &&
            e.get(r.controller.tabStateById$, r.tab.tabId) === l &&
            e.get(c.chatGptAuthenticatedAccountId$) === i &&
            e.get(c.chatGptAuthenticatedUserId$) === o,
          u = await (0, d._qC)(e.query.getOrFetch(p.S, { hostId: r.params.hostId, paths: [r.params.path] }), a)
        if (!u?.existingPaths.includes(r.params.path) || !s()) return null
        let g = !1,
          f = () => {
            g || ((g = !0), w(), I?.(), x(), a.removeEventListener("abort", f))
          },
          v = () => {
            g ||
              s() ||
              (e.get(r.controller.tabById$, r.tab.tabId)?.props === t &&
                r.controller.updateTab(e, r.tab.tabId, { props: { ...t } }),
              queueMicrotask(f))
          },
          w = t.transferState.subscribe(v),
          I = (0, h.Oq)(e)?.watch(({ get: e }) => {
            ;(e(m.gy), e(m.JX), e(m.mX), v())
          }),
          x = e.watch(({ get: e }) => {
            ;(e(r.controller.tabById$, r.tab.tabId),
              e(r.controller.tabStateById$, r.tab.tabId),
              e(c.chatGptAuthenticatedAccountId$),
              e(c.chatGptAuthenticatedUserId$),
              v())
          })
        return (
          a.addEventListener("abort", f, { once: !0 }),
          { cancel: () => (f(), e.get(r.controller.tabById$, r.tab.tabId)?.dndId === r.tab.dndId) }
        )
      },
    }
    function y(e, t, n) {
      let a = (0, u.du)(e)
      if (
        "local-thread" !== e.value.routeKind ||
        null == a ||
        a.hostId !== n.hostId ||
        a.threadId === n.threadId ||
        (0, d.L$F)(n.threadId) ||
        t.transferState.isBlocked() ||
        !0 === t.readOnly ||
        null != t.generatedImages ||
        null != t.imageAssetResolver ||
        "provided" === t.generatedImagesSource ||
        null != t.attachmentId ||
        null != t.chatGptConversationId ||
        null != t.sourceImage ||
        null != t.ref ||
        null != t.imageRef ||
        null != t.toolbarRef ||
        null != t.toolbarDragBoundary ||
        null != t.initialEditTool ||
        null != t.onInitialEditToolApplied ||
        null != t.onImageEditSubmit ||
        null != t.onImageEditSubmitted ||
        null != t.onImageEditSubmitStatusChange ||
        null != t.onEditToolSelected ||
        null != t.onImageError ||
        null != t.onDownloadClick ||
        null != t.onDownloadInitiated ||
        null != t.onDownloaded ||
        null != t.onPanoramaInteraction ||
        null != t.onActiveImageChange ||
        null != t.onGeneratedImageSelection ||
        null != t.onClose ||
        null != t.renderHeaderActions ||
        null != t.renderHeaderTitle ||
        null != t.renderComposer ||
        null != t.footerActions ||
        null != t.markupMode ||
        null != t.removeMode ||
        null != t.clipboardScope ||
        null != t.sizeControlContainer ||
        null != t.headerWindowControls ||
        null != t.belowHeader ||
        "overlay" === t.presentation ||
        !0 === t.standalone
      )
        return null
      for (let a of [i.It, i.VZ]) {
        let r = e.get(a.tabs$).find((e) => e.props === t)
        if (
          null == r ||
          r.tabType.kind !== f._5 ||
          r.isPreview ||
          r.hasUnsavedChanges ||
          null != r.onBeforeClose ||
          null != r.onBeforeMove ||
          null != r.onRenderError ||
          null != r.onClose
        )
          continue
        let i = (0, o.GL)(e, r),
          l = f.RR.safeParse(i?.params)
        if (
          i?.kind !== f._5 ||
          !l.success ||
          "artifact" !== l.data.source ||
          null != l.data.conversationId ||
          l.data.hostId !== n.hostId ||
          (0, g.IY)(t.attachmentSrc) !== l.data.path
        )
          break
        return { controller: a, tab: r, params: l.data }
      }
      return null
    }
    var w = n("WhoN"),
      I = n("tSEg"),
      x = n("V3rO")
    let C = (0, l._)(
        async () => {
          let { ImagePreviewPanel: e } = await Promise.all([
            n.e(446194),
            n.e(579325),
            n.e(712262),
            n.e(978338),
            n.e(923712),
            n.e(322496),
            n.e(53010),
            n.e(644312),
            n.e(164460),
            n.e(529755),
            n.e(486890),
            n.e(820714),
            n.e(887074),
            n.e(198911),
            n.e(434505),
            n.e(202588),
            n.e(633339),
            n.e(643651),
            n.e(441809),
            n.e(973904),
            n.e(896482),
            n.e(818947),
            n.e(977544),
            n.e(915524),
            n.e(295103),
            n.e(68367),
            n.e(216721),
            n.e(832130),
            n.e(556252),
            n.e(539808),
            n.e(444701),
            n.e(923720),
            n.e(786335),
            n.e(219331),
          ]).then(n.bind(n, "nncr"))
          return e
        },
        { propagateLoadError: !0 },
      ),
      b = (0, l._)(
        async () => {
          let { CreateImageTabThumbnail: e } = await n.e(355402).then(n.bind(n, "AOL7"))
          return e
        },
        { propagateLoadError: !0 },
      ),
      A = {
        durableRoute: { preload: async () => (await C.prefetch(), "prepared"), version: 1 },
        isAvailable: () => !0,
        kind: f._5,
      }
    function S({ open: e }) {
      return (0, o.v)(A.kind, C, {
        showsArtifact: () => !0,
        ownsSingleTabHeader: (e) => e(w.t),
        defaultState: (e, { initialImageId: t, initialView: n }) => ({ activeImageId: t ?? null, view: n }),
        durableRoute: {
          preload: A.durableRoute.preload,
          restore: async ({
            revealAndFocus: t,
            descriptor: a,
            insertPosition: r,
            isDisconnected: i,
            scope: o,
            target: l,
          }) => {
            if (1 !== a.payloadVersion) return !1
            let s = f.RR.safeParse(a.params),
              d = (0, I.Qm)(o.value)
            if (!s.success || null == d) return !1
            let { restoreImagePreviewTab: u } = await Promise.all([
              n.e(446194),
              n.e(164460),
              n.e(306206),
              n.e(926610),
            ]).then(n.bind(n, "SFD0"))
            return u(
              o,
              (0, f.rM)(d, a.tabId, s.data),
              { revealAndFocus: t, insertPosition: r, isDisconnected: i, isPreview: !1, tabId: a.tabId, target: l },
              e,
            )
          },
          serialize: (e, t, n) => {
            let a = f.RR.safeParse(n?.params ?? t.durableIdentity)
            if (!a.success) return
            if ("artifact" !== a.data.source) return (0, f.iP)(a.data)
            let r = t.imageSourceContext?.conversationId ?? t.sourceConversationId,
              o = { ...a.data, conversationId: a.data.conversationId ?? (r === e.get(x.dY) ? void 0 : r) }
            for (let n of [i.It, i.VZ]) {
              let r = e.get(n.storedTabs$).find((e) => e.props === t)
              if (null == r) continue
              let i = f.l8.safeParse(e.get(n.tabStateById$, r.tabId)?.value)
              return (0, f.iP)({ ...o, viewState: i.success ? i.data : a.data.viewState })
            }
            return (0, f.iP)(o)
          },
          version: A.durableRoute.version,
        },
        conversationTransfer: v,
        getIcon: () => (0, r.createElement)(s, { className: "icon-xs shrink-0" }),
        getTitle: (e, { title: t }) => t,
        retainFullWidthOnWindowResize: () => !0,
        transitionFullView: (e, { fullViewRef: t }, n) => {
          t?.current != null ? t.current.transitionFullView(n) : n()
        },
        isAvailable: A.isAvailable,
        open: e,
        showComposerInFullWidth: () => !0,
        renderThumbnail: (e, t, n) => (0, a.jsx)(b, { icon: t.icon, props: e, readState: n, title: t.title }),
      })
    }
  },
  nMdB(e, t, n) {
    var a = n("ekLq"),
      r = n("wD9O")
    n("V8uZ")
    let i = new WeakMap()
    n.d(
      t,
      {},
      {
        I: function (e, t = 1) {
          let n,
            o,
            l = e.closest(a.IX.timelineScroll)
          if (null == l) return
          let s = i.get(l)
          if (s?.element === e && s.zoom === t) return void s.renew()
          s?.stop()
          let d = e.getBoundingClientRect().top,
            u = -1 / 0,
            c = null,
            m = () => {
              e.isConnected && (l.scrollTop += (0, r.Ud)(e.getBoundingClientRect().top - d, t))
            },
            p = () => {
              null == c &&
                (c = window.requestAnimationFrame(() => {
                  ;((c = null), m())
                }))
            },
            g = e.closest("[data-turn-key]"),
            h = null
          null != g &&
            "u" > typeof ResizeObserver &&
            (h = new ResizeObserver(() => {
              ;((u = performance.now()), null != c && (window.cancelAnimationFrame(c), (c = null)), m(), p())
            })).observe(g)
          let f = new AbortController(),
            v = () => {
              ;(null != c && window.cancelAnimationFrame(c),
                h?.disconnect(),
                window.clearTimeout(n),
                f.abort(),
                i.delete(l))
            },
            y = () => {
              let e = Math.min(u + 50, o) - performance.now()
              e > 0 ? (n = window.setTimeout(y, Math.ceil(e))) : v()
            },
            w = () => {
              ;(window.clearTimeout(n), (o = performance.now() + 700), (n = window.setTimeout(y, 350)), p())
            }
          ;(i.set(l, { element: e, zoom: t, renew: w, stop: v }), w())
          let I = (t) => {
            t.target instanceof Node &&
            e.contains(t.target) &&
            ((t instanceof PointerEvent && 0 === t.button) ||
              (t instanceof KeyboardEvent && ("Enter" === t.key || " " === t.key)))
              ? w()
              : v()
          }
          for (let e of ["wheel", "touchmove", "pointerdown", "keydown"])
            l.addEventListener(e, I, { passive: !0, signal: f.signal })
          return v
        },
      },
    )
  },
  DvSb(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("qmMi"),
      o = n("G4E3"),
      l = n("FvYa"),
      s = n("KxMp"),
      d = n("bVeK"),
      u = n("MT12"),
      c = n("dkxK"),
      m = n("lnSV"),
      p = n("e1xH")
    n("tKel")
    var g = n("vADh"),
      h = n("AKba")
    n.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            n,
            f,
            v,
            y,
            w,
            I = (0, r.c)(28),
            { className: x, resource: C } = e,
            b = void 0 === x ? "icon-sm" : x,
            A = (0, i.Ul)(p.pagesEnabled$)
          I[0] !== A || I[1] !== C
            ? ((t = A ? (0, o.I0)(C.url) : null), (I[0] = A), (I[1] = C), (I[2] = t))
            : (t = I[2])
          let S = t
          I[3] === Symbol.for("react.memo_cache_sentinel") ? ((n = { enabled: !1 }), (I[3] = n)) : (n = I[3])
          let M = (0, i._U)(null, S, n),
            _ = (0, g.Y)(M)
          if (S?.kind === "page") {
            let e,
              t = _?.[16] ?? d.oQS
            return (I[4] !== t ? ((e = (0, a.jsx)(t, {})), (I[4] = t), (I[5] = e)) : (e = I[5]), e)
          }
          if (C.activities.includes("provided")) {
            let e
            return (
              I[6] !== b
                ? ((e = (0, a.jsx)(u.A, { "aria-hidden": !0, className: b })), (I[6] = b), (I[7] = e))
                : (e = I[7]),
              e
            )
          }
          I[8] !== C.mimeType || I[9] !== C.url
            ? ((f = (0, m.mN)(C.mimeType) ?? (0, m.K5)(C.url)), (I[8] = C.mimeType), (I[9] = C.url), (I[10] = f))
            : (f = I[10])
          let k = f
          if (null != k) {
            let e
            return (
              I[11] !== b || I[12] !== k
                ? ((e = (0, a.jsx)(c.v, { className: b, resourceKind: k })), (I[11] = b), (I[12] = k), (I[13] = e))
                : (e = I[13]),
              e
            )
          }
          let E = C.provider
          if (null == E) {
            let e
            return (
              I[14] !== b || I[15] !== C.url
                ? ((e = (0, a.jsx)(s._, { className: b, href: C.url })), (I[14] = b), (I[15] = C.url), (I[16] = e))
                : (e = I[16]),
              e
            )
          }
          return (
            I[17] !== b || I[18] !== C.url
              ? ((v = (0, a.jsx)(s._, { className: b, href: C.url })), (I[17] = b), (I[18] = C.url), (I[19] = v))
              : (v = I[19]),
            I[20] !== E ? ((y = (0, h.T)(E)), (I[20] = E), (I[21] = y)) : (y = I[21]),
            I[22] !== b || I[23] !== E.logoUrl || I[24] !== E.logoUrlDark || I[25] !== v || I[26] !== y
              ? ((w = (0, a.jsx)(l.R, {
                  alt: "",
                  className: b,
                  fallback: v,
                  knownAppId: y,
                  logoDarkUrl: E.logoUrlDark,
                  logoUrl: E.logoUrl,
                })),
                (I[22] = b),
                (I[23] = E.logoUrl),
                (I[24] = E.logoUrlDark),
                (I[25] = v),
                (I[26] = y),
                (I[27] = w))
              : (w = I[27]),
            w
          )
        },
      },
    )
  },
  VcDE(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("qmMi"),
      o = n("G4E3"),
      l = n("Wf1j"),
      s = n("ESK5"),
      d = n("Ot7V"),
      u = n("tKel"),
      c = n("uqg3"),
      m = n("Ba78"),
      p = n("tSEg"),
      g = n("DvSb"),
      h = n("W4GL")
    n.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            n,
            f,
            v,
            y,
            w,
            I,
            x = (0, r.c)(26),
            { children: C, hostId: b, meta: A, presentation: S, resource: M } = e,
            _ = (0, i.gh)(p.GD),
            k = (0, l.A)()
          x[0] !== M.url ? ((t = (0, o.I0)(M.url)), (x[0] = M.url), (x[1] = t)) : (t = x[1])
          let E = t,
            T = (0, i._U)(u.qF, E)
          x[2] !== b || x[3] !== M.url
            ? ((n = { hostId: b, url: M.url }), (x[2] = b), (x[3] = M.url), (x[4] = n))
            : (n = x[4])
          let P = null == E && "summary" === S
          x[5] !== P ? ((f = { enabled: P }), (x[5] = P), (x[6] = f)) : (f = x[6])
          let { data: D } = (0, i._U)(s.k, n, f)
          ;(x[7] !== D || x[8] !== k || x[9] !== T || x[10] !== E?.kind || x[11] !== M.title
            ? ((v = D ?? M.title),
              E?.kind === "page" && (v = (0, m.LV)(T, k)),
              (x[7] = D),
              (x[8] = k),
              (x[9] = T),
              (x[10] = E?.kind),
              (x[11] = M.title),
              (x[12] = v))
            : (v = x[12]),
            x[13] !== M ? ((y = (0, a.jsx)(g.b, { resource: M })), (x[13] = M), (x[14] = y)) : (y = x[14]))
          let N = y
          x[15] !== M || x[16] !== _ || x[17] !== v
            ? ((w = (e) => {
                ;(0, c.openSpacePageResource)(_, { ...M, title: v }) ||
                  (0, d.PQ)({ event: e, href: M.url, initiator: M.openInitiator })
              }),
              (x[15] = M),
              (x[16] = _),
              (x[17] = v),
              (x[18] = w))
            : (w = x[18])
          let j = w
          return (
            x[19] !== C || x[20] !== N || x[21] !== A || x[22] !== j || x[23] !== S || x[24] !== v
              ? ((I =
                  "summary" === S
                    ? (0, a.jsx)(h.x.SourceRow, { icon: N, label: v, onOpen: j })
                    : (0, a.jsx)(h.x.SourceDetails, { icon: N, label: v, meta: A, onOpen: j, children: C })),
                (x[19] = C),
                (x[20] = N),
                (x[21] = A),
                (x[22] = j),
                (x[23] = S),
                (x[24] = v),
                (x[25] = I))
              : (I = x[25]),
            I
          )
        },
      },
    )
  },
  AKba(e, t, n) {
    var a = n("hPoZ")
    n.d(
      t,
      {},
      {
        T: function (e) {
          for (let t of [e.id, e.name, ...e.pluginDisplayNames]) if (null != (0, a.N6)(t)) return t
          return null
        },
      },
    )
  },
  WGuh(e, t, n) {
    n.d(t, { LocalConversationSourcesSidePanelTab: () => R })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("iRMi"),
      o = n("jfMv"),
      l = n("qmMi"),
      s = n("RAsy"),
      d = n("Wf1j"),
      u = n("oyxz"),
      c = n("FzwW"),
      m = n("khkh"),
      p = n("FvYa"),
      g = n("cKhh"),
      h = n("Ot7V"),
      f = n("KxMp"),
      v = n("HOLv"),
      y = n("Rvwy"),
      w = n("vy3j"),
      I = n("BGqp"),
      x = n("k1XY"),
      C = n("yGJW"),
      b = n("tSEg"),
      A = n("VcDE"),
      S = n("AKba"),
      M = n("la9L"),
      _ = n("l1aP")
    function k(e) {
      let t,
        n,
        i,
        o = (0, r.c)(6),
        { calls: l } = e
      return (
        o[0] !== l
          ? ((t = "flex flex-col gap-1"), (n = (0, _.F)(l).map(E)), (o[0] = l), (o[1] = t), (o[2] = n))
          : ((t = o[1]), (n = o[2])),
        o[3] !== t || o[4] !== n
          ? ((i = (0, a.jsx)("ul", { className: t, children: n })), (o[3] = t), (o[4] = n), (o[5] = i))
          : (i = o[5]),
        i
      )
    }
    function E(e) {
      let t = e.calls.filter(T)
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsx)(g.d, {
            icon: null,
            indentContent: !1,
            status: "completed",
            summary: (0, a.jsx)("span", {
              className: "text-sm leading-5 text-secondary",
              children: (0, a.jsx)(u.A, {
                id: "codex.localConversation.sources.panel.toolUseCount",
                defaultMessage: "{name} {count, plural, one {once} other {# times}}",
                values: { count: e.calls.length, name: e.name },
              }),
            }),
            children:
              0 === t.length
                ? null
                : (0, a.jsx)("ul", {
                    className: "flex flex-col gap-2",
                    children: t.map((t, n) =>
                      (0, a.jsxs)(
                        "li",
                        {
                          className: "flex min-w-0 flex-col gap-2",
                          children: [
                            "invokeTool" !== t.kind || null == t.inputJson
                              ? null
                              : (0, a.jsx)(M.CodeSnippet, {
                                  codeContainerClassName: "max-h-48 overflow-auto",
                                  content: P(t.inputJson),
                                  language: "json",
                                  showStickyRightContent: !1,
                                  title: t.inputTruncated
                                    ? (0, a.jsx)(u.A, {
                                        id: "codex.localConversation.webMcpTools.inputTruncated",
                                        defaultMessage: "Input (truncated)",
                                      })
                                    : (0, a.jsx)(u.A, {
                                        id: "codex.localConversation.webMcpTools.input",
                                        defaultMessage: "Input",
                                      }),
                                }),
                            null == t.outputJson
                              ? null
                              : (0, a.jsx)(M.CodeSnippet, {
                                  codeContainerClassName: "max-h-48 overflow-auto",
                                  content: P(t.outputJson),
                                  language: "json",
                                  showStickyRightContent: !1,
                                  title: t.outputTruncated
                                    ? (0, a.jsx)(u.A, {
                                        id: "codex.localConversation.webMcpTools.resultTruncated",
                                        defaultMessage: "Result (truncated)",
                                      })
                                    : (0, a.jsx)(u.A, {
                                        id: "codex.localConversation.webMcpTools.result",
                                        defaultMessage: "Result",
                                      }),
                                }),
                          ],
                        },
                        `${e.name}:${n}`,
                      ),
                    ),
                  }),
          }),
        },
        e.name,
      )
    }
    function T(e) {
      return ("invokeTool" === e.kind && null != e.inputJson) || null != e.outputJson
    }
    function P(e) {
      try {
        return JSON.stringify(JSON.parse(e), null, 2)
      } catch {
        return e
      }
    }
    var D = n("sVau"),
      N = n("W4GL"),
      j = n("qRfi")
    function R(e) {
      let t,
        n = (0, r.c)(17),
        {
          conversationId: i,
          getImagePreviewSrc: o,
          hostId: l,
          onOpenFile: s,
          onOpenImage: d,
          onOpenMcpApp: u,
          renderSlots: c,
        } = e,
        m = (0, j.Y)(i, l)
      if (
        n[0] !== i ||
        n[1] !== o ||
        n[2] !== l ||
        n[3] !== s ||
        n[4] !== d ||
        n[5] !== u ||
        n[6] !== c ||
        n[7] !== m
      ) {
        let e
        ;(n[9] !== i || n[10] !== o || n[11] !== l || n[12] !== s || n[13] !== d || n[14] !== u || n[15] !== m
          ? ((e = (0, a.jsx)(O, {
              ...m,
              conversationId: i,
              getImagePreviewSrc: o,
              hostId: l,
              onOpenFile: s,
              onOpenImage: d,
              onOpenMcpApp: u,
            })),
            (n[9] = i),
            (n[10] = o),
            (n[11] = l),
            (n[12] = s),
            (n[13] = d),
            (n[14] = u),
            (n[15] = m),
            (n[16] = e))
          : (e = n[16]),
          (t = c({ headerRows: [], content: e })),
          (n[0] = i),
          (n[1] = o),
          (n[2] = l),
          (n[3] = s),
          (n[4] = d),
          (n[5] = u),
          (n[6] = c),
          (n[7] = m),
          (n[8] = t))
      } else t = n[8]
      return t
    }
    function O(e) {
      let t,
        n,
        o,
        h,
        f,
        v,
        I,
        M,
        E,
        T,
        P,
        j,
        R = (0, r.c)(54),
        {
          conversationId: O,
          externalSources: V,
          fileSources: F,
          getImagePreviewSrc: W,
          hostId: H,
          onOpenFile: z,
          onOpenImage: K,
          onOpenMcpApp: Y,
          toolSources: Z,
          webMcpCalls: $,
          webSearchSource: X,
        } = e,
        Q = (0, l.gh)(b.GD),
        J = (0, d.A)(),
        ee = (0, l.Ul)(m.k)
      R[0] !== J
        ? ((t = J.formatMessage({ id: "codex.localConversation.sources.panel.listLabel", defaultMessage: "Sources" })),
          (R[0] = J),
          (R[1] = t))
        : (t = R[1])
      let et = t
      if (
        R[2] !== V ||
        R[3] !== F ||
        R[4] !== W ||
        R[5] !== H ||
        R[6] !== z ||
        R[7] !== K ||
        R[8] !== et ||
        R[9] !== ee ||
        R[10] !== $
      ) {
        if (((I = new Map()), ee))
          for (let e of $) {
            if (null == e.sourceHostname) continue
            let t = I.get(e.sourceHostname)
            null == t ? I.set(e.sourceHostname, [e]) : t.push(e)
          }
        if (
          ((o = N.x.SourcesSidePanel),
          (n = N.x.SourcesSidePanelList),
          (h = et),
          R[17] !== F || R[18] !== W || R[19] !== z || R[20] !== K)
        ) {
          let e
          ;(R[22] !== W || R[23] !== z || R[24] !== K
            ? ((e = (e) => {
                let t,
                  n = e.fsPath || e.path || e.label,
                  r = W?.(n) ?? null
                return (
                  null != r && null != K ? (t = () => K(e, r)) : null != z && (t = () => z(e)),
                  (0, a.jsx)(
                    N.x.SourceDetails,
                    {
                      icon: (0, a.jsx)(c.y, {
                        getImagePreviewSrc: W,
                        iconClassName: "icon-sm",
                        imageClassName: "size-[18px] rounded-[3px] border border-default",
                        path: n,
                      }),
                      label: e.label,
                      meta: n,
                      onOpen: t,
                      children: (0, a.jsx)(u.A, {
                        id: "codex.localConversation.sources.panel.fileAttached",
                        defaultMessage: "Attached to the conversation",
                      }),
                    },
                    (0, s.T)(e),
                  )
                )
              }),
              (R[22] = W),
              (R[23] = z),
              (R[24] = K),
              (R[25] = e))
            : (e = R[25]),
            (f = F.map(e)),
            (R[17] = F),
            (R[18] = W),
            (R[19] = z),
            (R[20] = K),
            (R[21] = f))
        } else f = R[21]
        ;((v = V.map((e) => {
          let t,
            n = (0, _.getHostnameFromWebUrl)(e.url),
            r = null == n || e.title !== n ? [] : (I.get(n) ?? [])
          return (
            null != n && e.title === n && I.delete(n),
            e.activities.includes("provided") ||
              (t = (0, x.f4)(e.citation).showUrl
                ? null == e.provider
                  ? e.url
                  : `${e.provider.name} \xb7 ${e.url}`
                : e.provider?.name),
            (0, a.jsxs)(
              A.n,
              {
                hostId: H,
                meta: t,
                presentation: "side-panel",
                resource: e,
                children: [
                  (0, a.jsx)("ul", { className: "flex flex-col gap-1", children: e.activities.map(q) }),
                  0 === r.length ? null : (0, a.jsx)(k, { calls: r }),
                ],
              },
              e.key,
            )
          )
        })),
          (R[2] = V),
          (R[3] = F),
          (R[4] = W),
          (R[5] = H),
          (R[6] = z),
          (R[7] = K),
          (R[8] = et),
          (R[9] = ee),
          (R[10] = $),
          (R[11] = n),
          (R[12] = o),
          (R[13] = h),
          (R[14] = f),
          (R[15] = v),
          (R[16] = I))
      } else ((n = R[11]), (o = R[12]), (h = R[13]), (f = R[14]), (v = R[15]), (I = R[16]))
      if (
        (R[26] !== I ? ((M = Array.from(I, G)), (R[26] = I), (R[27] = M)) : (M = R[27]),
        R[28] !== O || R[29] !== H || R[30] !== Y || R[31] !== Q || R[32] !== Z)
      ) {
        let e
        ;(R[34] !== O || R[35] !== H || R[36] !== Y || R[37] !== Q
          ? ((e = (e) => {
              var t
              let n = (t = e).name.trim() || t.pluginDisplayNames.join(", "),
                r = e.mcpAppId
              return (0, a.jsx)(
                N.x.SourceDetails,
                {
                  icon: (0, a.jsx)(p.R, {
                    alt: "",
                    className: "icon-sm shrink-0 object-contain",
                    fallback: (0, a.jsx)(y.A, { className: "icon-sm shrink-0" }),
                    knownAppId: null == e.providerId ? (0, S.T)(e) : void 0,
                    logoDarkUrl: e.logoUrlDark,
                    logoUrl: e.logoUrl,
                  }),
                  label: n,
                  meta: null != e.delayMinutes ? (0, a.jsx)(D.y, { minutes: e.delayMinutes }) : void 0,
                  onOpen: null == r || null == Y ? void 0 : () => Y(r),
                  children: (0, a.jsx)("ul", {
                    className: "flex flex-col gap-1",
                    children: e.activities.flatMap((t) => {
                      if (0 === t.calls.length) return []
                      let n = (0, a.jsx)("span", {
                          className: "text-sm leading-5 text-secondary",
                          children: (0, a.jsx)(u.A, {
                            id: "codex.localConversation.sources.panel.toolUseCount",
                            defaultMessage: "{name} {count, plural, one {once} other {# times}}",
                            values: { count: t.calls.length, name: t.label },
                          }),
                        }),
                        r = () => {
                          ;(0, C.yy)(Q, i.CodexSourcesSectionExpanded, {
                            sectionType: i.CodexSourcesSectionType.CODEX_SOURCES_SECTION_TYPE_MCP_TOOL_CALLS,
                            appName: e.trustedAnalyticsAppName,
                            itemCount: t.calls.length,
                          })
                        }
                      return 1 === t.calls.length
                        ? t.calls.map((e) =>
                            (0, a.jsx)(
                              "li",
                              {
                                children: (0, a.jsx)(B, {
                                  conversationId: O,
                                  hostId: H,
                                  item: e,
                                  onExpand: r,
                                  summary: n,
                                }),
                              },
                              e.callId,
                            ),
                          )
                        : [
                            (0, a.jsx)(
                              "li",
                              {
                                children: (0, a.jsx)(g.d, {
                                  icon: null,
                                  indentContent: !1,
                                  onExpand: r,
                                  status: "completed",
                                  summary: n,
                                  unmountOnCollapse: !0,
                                  children: (0, a.jsx)("ul", {
                                    className: "flex flex-col gap-1",
                                    children: t.calls.map((e) =>
                                      (0, a.jsx)(
                                        "li",
                                        {
                                          children: (0, a.jsx)(B, {
                                            conversationId: O,
                                            expandedContentOnly: !0,
                                            hostId: H,
                                            item: e,
                                          }),
                                        },
                                        e.callId,
                                      ),
                                    ),
                                  }),
                                }),
                              },
                              t.label,
                            ),
                          ]
                    }),
                  }),
                },
                e.id,
              )
            }),
            (R[34] = O),
            (R[35] = H),
            (R[36] = Y),
            (R[37] = Q),
            (R[38] = e))
          : (e = R[38]),
          (E = Z.map(e)),
          (R[28] = O),
          (R[29] = H),
          (R[30] = Y),
          (R[31] = Q),
          (R[32] = Z),
          (R[33] = E))
      } else E = R[33]
      return (
        R[39] !== J || R[40] !== Q || R[41] !== X
          ? ((T =
              null == X
                ? null
                : (0, a.jsx)(N.x.SourceDetails, {
                    icon: (0, a.jsx)(w.A, { "aria-hidden": !0, className: "icon-sm shrink-0" }),
                    label: J.formatMessage({
                      id: "codex.localConversation.sources.webSearch",
                      defaultMessage: "Web search",
                    }),
                    children: (0, a.jsxs)("ul", {
                      className: "flex flex-col gap-1",
                      children: [
                        X.queryCount > 0
                          ? (0, a.jsx)("li", {
                              children: (0, a.jsx)(g.d, {
                                icon: null,
                                indentContent: !1,
                                onExpand: () => {
                                  ;(0, C.yy)(Q, i.CodexSourcesSectionExpanded, {
                                    sectionType: i.CodexSourcesSectionType.CODEX_SOURCES_SECTION_TYPE_WEB_SEARCHES,
                                    itemCount: X.queryCount,
                                  })
                                },
                                status: "completed",
                                summary: (0, a.jsx)(u.A, {
                                  id: "codex.localConversation.sources.panel.webSearchCount",
                                  defaultMessage: "{count, plural, one {Searched once} other {Searched # times}}",
                                  values: { count: X.queryCount },
                                }),
                                children:
                                  0 === X.queries.length
                                    ? null
                                    : (0, a.jsx)("ul", {
                                        className: "flex flex-col gap-1",
                                        children: X.queries.map(L),
                                      }),
                              }),
                            })
                          : null,
                        X.viewedLinks.length > 0
                          ? (0, a.jsx)("li", {
                              children: (0, a.jsx)(g.d, {
                                icon: null,
                                indentContent: !1,
                                onExpand: () => {
                                  ;(0, C.yy)(Q, i.CodexSourcesSectionExpanded, {
                                    sectionType: i.CodexSourcesSectionType.CODEX_SOURCES_SECTION_TYPE_WEB_PAGES,
                                    itemCount: X.viewedLinks.length,
                                  })
                                },
                                status: "completed",
                                summary: (0, a.jsx)(u.A, {
                                  id: "codex.localConversation.sources.panel.webPageCount",
                                  defaultMessage: "{count, plural, one {Opened one page} other {Opened # pages}}",
                                  values: { count: X.viewedLinks.length },
                                }),
                                children: (0, a.jsx)("ul", {
                                  className: "flex flex-col gap-1.5",
                                  children: X.viewedLinks.map(U),
                                }),
                              }),
                            })
                          : null,
                      ],
                    }),
                  })),
            (R[39] = J),
            (R[40] = Q),
            (R[41] = X),
            (R[42] = T))
          : (T = R[42]),
        R[43] !== n || R[44] !== h || R[45] !== f || R[46] !== v || R[47] !== M || R[48] !== E || R[49] !== T
          ? ((P = (0, a.jsxs)(n, { label: h, children: [f, v, M, E, T] })),
            (R[43] = n),
            (R[44] = h),
            (R[45] = f),
            (R[46] = v),
            (R[47] = M),
            (R[48] = E),
            (R[49] = T),
            (R[50] = P))
          : (P = R[50]),
        R[51] !== o || R[52] !== P
          ? ((j = (0, a.jsx)(o, { children: P })), (R[51] = o), (R[52] = P), (R[53] = j))
          : (j = R[53]),
        j
      )
    }
    function U(e) {
      return (0, a.jsx)(
        "li",
        {
          children: (0, a.jsxs)("button", {
            className:
              "flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm text-start text-link-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
            title: e.url,
            type: "button",
            onClick: (t) => {
              ;(0, h.PQ)({ event: t, href: e.url, initiator: "browser_use", source: "browser_use" })
            },
            children: [
              (0, a.jsx)(v.I, { className: "shrink-0", asset: o.U }),
              (0, a.jsx)("span", { className: "truncate", children: e.label }),
            ],
          }),
        },
        e.url,
      )
    }
    function L(e) {
      return (0, a.jsx)("li", { className: "break-words", children: e }, e)
    }
    function G(e) {
      let [t, n] = e
      return (0, a.jsx)(
        N.x.SourceDetails,
        {
          icon: (0, a.jsx)(f._, { className: "icon-sm shrink-0", href: `https://${t}` }),
          label: t,
          children: (0, a.jsx)(k, { calls: n }),
        },
        t,
      )
    }
    function q(e) {
      return (0, a.jsx)("li", { children: (0, a.jsx)(V, { activity: e }) }, e)
    }
    function B(e) {
      let t,
        n = (0, r.c)(7),
        { conversationId: i, expandedContentOnly: o, hostId: l, item: s, onExpand: d, summary: u } = e,
        c = void 0 !== o && o
      return (
        n[0] !== i || n[1] !== c || n[2] !== l || n[3] !== s || n[4] !== d || n[5] !== u
          ? ((t = (0, a.jsx)(I.T, {
              conversationId: i,
              expandedContentOnly: c,
              hideTextBlocksWithStructuredContent: !0,
              hostId: l,
              item: s,
              loadRemoteLogos: !1,
              onExpand: d,
              renderMcpApps: !1,
              summary: u,
              summaryIcon: null,
            })),
            (n[0] = i),
            (n[1] = c),
            (n[2] = l),
            (n[3] = s),
            (n[4] = d),
            (n[5] = u),
            (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function V(e) {
      let t = (0, r.c)(4),
        { activity: n } = e
      switch (n) {
        case "provided": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "codex.localConversation.sources.panel.activity.provided",
                  defaultMessage: "Provided in the conversation",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "read": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "codex.localConversation.sources.panel.activity.read",
                  defaultMessage: "Read during the chat",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "created": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "codex.localConversation.sources.panel.activity.created",
                  defaultMessage: "Created during the chat",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "updated": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.A, {
                  id: "codex.localConversation.sources.panel.activity.updated",
                  defaultMessage: "Updated during the chat",
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
      }
    }
  },
  CRTJ(e, t, n) {
    n.d(t, { VE: () => k, rv: () => E, b8: () => T, bn: () => P })
    var a = n("AQaI"),
      r = n.n(a),
      i = n("DBCl"),
      o = n("ZIaK"),
      l = n("OZum"),
      s = n("D4ZO"),
      d = n("RAsy"),
      u = n("guiN"),
      c = n("TAOo"),
      m = n("RZnR"),
      p = n("KJ1J"),
      g = n("pA0U"),
      h = n("VmSA"),
      f = n("KnMC"),
      v = n("alO6"),
      y = n("Hkqr"),
      w = n("acxW"),
      I = n("zUz7")
    function x(e) {
      return e?.trim().toLowerCase() ?? ""
    }
    var C = n("bwpB"),
      b = n("xSzB"),
      A = n("ghNX"),
      S = n("ePOr"),
      M = n("bnxy"),
      _ = n("ZsMk")
    function k(e) {
      let t = [],
        n = new Set(),
        a = (e, a) => {
          let r = e.filter((e) => !e.isDictationRecording)
          for (let e of [
            ...(0, c.P)({ attachments: r, input: a }),
            ...a.flatMap((e) =>
              "localImage" === e.type ? [{ label: (0, M.Q0)(e.path) || e.path, path: e.path, fsPath: e.path }] : [],
            ),
            ...r.filter(
              (e) => e.isImageAttachment && !a.some((t) => "localImage" === t.type && (0, o.y7)(t.path, e.fsPath)),
            ),
          ]) {
            let a = (0, d.T)(e)
            n.has(a) || (n.add(a), t.push(e))
          }
        }
      for (let t = e.length - 1; t >= 0; t -= 1) {
        let n = e[t],
          r = (0, g.W)(n.items)
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let t = r[e]
          "steeringUserMessage" === t.type
            ? a(t.attachments, t.input)
            : "userMessage" === t.type && a(t.attachments ?? (0, u.mi)(t.content), t.content)
        }
        a(n.params.attachments ?? [], n.params.input)
      }
      return t
    }
    function E(e, t, n, a, o, d, u = !1, c) {
      let h = [],
        M = new Map(),
        _ = new Set(),
        k = (function (e) {
          let t = new Map()
          for (let n of e?.data ?? []) {
            let e = n.serverInfo
            if (null == e) continue
            let a = (0, I.p)(e),
              r = e.title?.trim() || e.name.trim() || null
            if (null == a && null == r) continue
            let i = { logoUrl: a?.logoUrl ?? null, logoUrlDark: a?.logoDarkUrl ?? null, name: r }
            for (let a of [n.name, e.name]) {
              let e = x(a)
              e.length > 0 && !t.has(e) && t.set(e, i)
            }
          }
          return t
        })(o)
      for (let o = e.length - 1; o >= 0; o -= 1) {
        let I = e[o],
          E = (0, g.W)(I.items)
        for (let e = E.length - 1; e >= 0; e -= 1) {
          let o = E[e]
          if (
            "mcpToolCall" !== o.type ||
            "failed" === o.status ||
            null != o.error ||
            (u && null != (0, A.Wh)(o)) ||
            (0, i.qOc)(o.server) ||
            "plugin-runtime" === x(o.server)
          )
            continue
          let g = (0, p.fI)(o.server),
            T = { ...(0, f.H5)(I, o), detailsEntityKey: I.entityKey }
          if ((0, w.Cb)({ isCodexAppsServer: g, result: T.result })) continue
          let P = (0, y.M)({
              appContext: o.appContext,
              apps: t,
              functionName: `${o.server}__${o.tool}`,
              serverName: o.server,
              toolName: o.tool,
            }),
            D = (function (e, t, n, a, r) {
              let i = x(e.server),
                o = i === C.tc ? C.tc : null
              if (null != t)
                return {
                  id: o ?? t.id,
                  name: "connector_openai_pages" === t.id ? r.formatMessage(S.J.navigation) : t.name,
                  pluginDisplayNames: t.pluginDisplayNames ?? [],
                  logoUrl: t.logoUrl,
                  logoUrlDark: t.logoUrlDark,
                  activities: [],
                  trustedAnalyticsAppName: (0, m.P)(t),
                }
              if (null != e.appContext)
                return {
                  id: o ?? e.appContext.connectorId,
                  name:
                    "connector_openai_pages" === e.appContext.connectorId
                      ? r.formatMessage(S.J.navigation)
                      : (e.appContext.appName ?? e.appContext.connectorId),
                  pluginDisplayNames: [],
                  logoUrl: null,
                  logoUrlDark: null,
                  activities: [],
                }
              let d = n.get(i),
                u =
                  null == e.pluginId || (0, p.fI)(e.server)
                    ? void 0
                    : a?.find(({ plugin: t }) => t.id === e.pluginId || (0, s.hy)(t) === e.pluginId)
              return {
                id: o ?? e.pluginId ?? `mcp-server:${e.server}`,
                name: d?.name ?? (0, l.g)(e.server),
                pluginDisplayNames: [],
                logoUrl: d?.logoUrl ?? u?.composerIconPath ?? u?.logoPath ?? null,
                logoUrlDark: d?.logoUrlDark ?? u?.composerIconPath ?? u?.logoDarkPath ?? u?.logoPath ?? null,
                activities: [],
              }
            })(o, P, k, c, n),
            N = (function (e, t) {
              if (
                t &&
                null != e.appContext &&
                "completed" === e.status &&
                null != e.result &&
                (null != r()(e.result._meta, ["openai/toolSource"]) ||
                  null != r()(e.result.structuredContent, ["meta", "openai/toolSource"]))
              )
                return (0, i.Sxi)((0, b.O9)({ isCodexAppsServer: t, toolResult: e.result })._meta)
            })(o, g)
          if (void 0 === N && d?.has(D.id) === !0) continue
          void 0 !== N && N.length > 0 && _.add(D.id)
          let j =
              void 0 === N
                ? [D]
                : N.map((e) => ({
                    ...D,
                    id: `${D.id}:provider:${e.id}:${e.accessMode ?? ""}`,
                    connectorId: D.id,
                    providerId: e.id,
                    name: e.title,
                    logoUrl: e.icons?.find((e) => "dark" !== e.theme)?.src ?? null,
                    logoUrlDark: e.icons?.find((e) => "dark" === e.theme)?.src ?? null,
                    delayMinutes: e.delayMinutes,
                    activities: [],
                  })),
            R = (0, i.djq)(o.id),
            O = a?.has(R) === !0 ? R : void 0,
            U = (0, v.EP)({
              pluginId: o.pluginId,
              appContext: o.appContext,
              completed: T.completed,
              intl: n,
              matchingApp: P,
              serverName: o.server,
              toolArguments: void 0,
              toolName: o.tool,
            })
          for (let e of j) {
            let t = M.get(e.id)
            if (null != t) {
              t.delayMinutes = Math.max(t.delayMinutes ?? 0, e.delayMinutes ?? 0) || void 0
              let n = t.activities.find((e) => e.label === U)
              ;(null == n
                ? t.activities.push({ calls: [T], label: U })
                : n.calls.at(-1)?.callId !== T.callId && n.calls.push(T),
                null == t.mcpAppId && null != O && (t.mcpAppId = O))
              continue
            }
            ;(null != O && (e.mcpAppId = O), e.activities.push({ calls: [T], label: U }), M.set(e.id, e), h.push(e))
          }
        }
      }
      return h.filter((e) => null != e.providerId || !_.has(e.id))
    }
    function T(e) {
      let t = !1,
        n = 0,
        a = [],
        r = [],
        i = new Set(),
        o = new Set(),
        l = (e) => {
          let t = e.trim()
          0 === t.length || ((n += 1), i.has(t) || (i.add(t), a.push(t)))
        },
        s = (e) => {
          let t = (0, h.J)({ url: e })
          null == t || o.has(t.url) || (o.add(t.url), r.push(t))
        }
      for (let n = e.length - 1; n >= 0; n -= 1) {
        let a = e[n],
          r = (0, g.W)(a.items)
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let n = r[e]
          if ("webSearch" !== n.type) continue
          t = !0
          let a = n.action
          if (null == a) l(n.query)
          else if ("search" === a.type)
            for (let e of null == a.queries || 0 === a.queries.length ? [a.query] : a.queries) null != e && l(e)
          else "openPage" === a.type || "findInPage" === a.type ? null != a.url && s(a.url) : l(n.query)
        }
      }
      return t ? { queries: a, queryCount: n, viewedLinks: r } : null
    }
    function P(e, t) {
      if (null == t) return { externalSources: e, webSearchSource: null }
      let n = new Set(
          t.viewedLinks.flatMap((e) => {
            let t = (0, _.Gz)(e.url)
            return null == t ? [] : [t]
          }),
        ),
        a = e.filter(
          (e) => !(null == e.provider && 1 === e.activities.length && "read" === e.activities[0] && n.has(e.key)),
        ),
        r = new Set(a.map((e) => e.key)),
        i = {
          ...t,
          viewedLinks: t.viewedLinks.filter((e) => {
            let t = (0, _.Gz)(e.url)
            return null == t || !r.has(t)
          }),
        }
      return { externalSources: a, webSearchSource: 0 === i.queryCount && 0 === i.viewedLinks.length ? null : i }
    }
  },
  l1aP(e, t, n) {
    var a = n("DBCl"),
      r = n("pA0U"),
      i = n("SfaR")
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t = new Map()
          for (let n of e) {
            let e = t.get(n.name)
            null == e ? t.set(n.name, { calls: [n], name: n.name }) : e.calls.push(n)
          }
          return Array.from(t.values())
        },
        getHostnameFromWebUrl: function (e) {
          try {
            return new URL(e).hostname || void 0
          } catch {
            return
          }
        },
        getWebMcpCallsForSummaryPanel: function (e) {
          let t = []
          for (let n = e.length - 1; n >= 0; n -= 1) {
            let o = (0, r.W)(e[n]?.items ?? [])
            for (let e = o.length - 1; e >= 0; e -= 1) {
              let n = o[e]
              n?.type === "mcpToolCall" &&
                "inProgress" !== n.status &&
                (0, a.qOc)(n.server) &&
                t.push(...(0, i.s)(n.result?._meta).slice().reverse())
            }
          }
          return t
        },
      },
    )
  },
  sVau(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      i = n("oyxz")
    n.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            n = (0, r.c)(2),
            { minutes: o } = e
          return (
            n[0] !== o
              ? ((t = (0, a.jsx)("span", {
                  className: "text-secondary",
                  children: (0, a.jsx)(i.A, {
                    id: "codex.sources.providerDelay",
                    defaultMessage: "Includes {minutes}m delayed data",
                    values: { minutes: o },
                  }),
                })),
                (n[0] = o),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  qRfi(e, t, n) {
    var a = n("QosV"),
      r = n("qmMi"),
      i = n("Wf1j"),
      o = n("HUHI"),
      l = n("rO8L"),
      s = n("qZWE"),
      d = n("e1xH"),
      u = n("cLdu"),
      c = n("B81s"),
      m = n("V3rO"),
      p = n("ZsMk"),
      g = n("FRNM"),
      h = n("CRTJ"),
      f = n("l1aP")
    n.d(
      t,
      {},
      {
        Y: function (e, t, n) {
          var v, y, w, I, x, C, b, A
          let S,
            M,
            _,
            k,
            E,
            T,
            P = (0, a.c)(23),
            D = (0, i.A)()
          P[0] !== e || P[1] !== t
            ? ((S = null == e ? null : { hostId: t, threadId: e }), (P[0] = e), (P[1] = t), (P[2] = S))
            : (S = P[2])
          let N = (0, r.uO)(g.BW, S),
            j = !0 === (0, r.Ul)(d.pagesEnabled$),
            R = (0, r._U)(g.mw, e)
          P[3] !== R || P[4] !== t ? ((M = { enabled: R, hostId: t }), (P[3] = R), (P[4] = t), (P[5] = M)) : (M = P[5])
          let { data: O } = (0, o.Ad)(M),
            U = (0, r._U)(g.f0, e)
          P[6] !== U || P[7] !== t ? ((_ = { enabled: U, hostId: t }), (P[6] = U), (P[7] = t), (P[8] = _)) : (_ = P[8])
          let L = (0, l.J)(_)
          P[9] !== t || P[10] !== L
            ? ((k = { enabled: L, hostId: t, roots: void 0, resolveActiveRoots: !0 }),
              (P[9] = t),
              (P[10] = L),
              (P[11] = k))
            : (k = P[11])
          let { data: G } = (0, u.Kj)(k)
          P[12] !== R ? ((E = { enabled: R }), (P[12] = R), (P[13] = E)) : (E = P[13])
          let { data: q } = (0, r._U)(c.pu, t, E)
          P[14] !== O ||
          P[15] !== e ||
          P[16] !== N ||
          P[17] !== j ||
          P[18] !== G ||
          P[19] !== D ||
          P[20] !== q ||
          P[21] !== n
            ? ((v = e),
              (y = O),
              (w = D),
              (I = q),
              (x = j),
              (C = G),
              (b = N),
              (A = n),
              (T = (0, r.un)(m.l7, ({ get: e }) => {
                let t = y ?? [],
                  n = e(g.conversationTurnsForSources$, v) ?? [],
                  { externalSources: a, webSearchSource: r } = (0, h.bn)(
                    (0, p.By)(n, t, x, b).filter(p.mY),
                    (0, h.b8)(n),
                  ),
                  i = (0, h.rv)(
                    n,
                    t,
                    w,
                    e(s.LU),
                    I,
                    new Set(a.flatMap((e) => (null == e.provider ? [] : [e.provider.id]))),
                    x,
                    C,
                  ),
                  o = {
                    externalSources: a,
                    fileSources: (0, h.VE)(n),
                    toolSources: i,
                    webMcpCalls: (0, f.getWebMcpCallsForSummaryPanel)(n),
                    webSearchSource: r,
                  }
                return null == A ? o : A(o)
              })),
              (P[14] = O),
              (P[15] = e),
              (P[16] = N),
              (P[17] = j),
              (P[18] = G),
              (P[19] = D),
              (P[20] = q),
              (P[21] = n),
              (P[22] = T))
            : (T = P[22])
          let B = T
          return (0, r.Ul)(B)
        },
        d: function (e) {
          return {
            externalSources: e.externalSources,
            fileSources: e.fileSources,
            toolSources: e.toolSources.map(
              ({
                id: e,
                name: t,
                pluginDisplayNames: n,
                logoUrl: a,
                logoUrlDark: r,
                mcpAppId: i,
                providerId: o,
                connectorId: l,
                delayMinutes: s,
              }) => ({
                id: e,
                providerId: o,
                connectorId: l,
                delayMinutes: s,
                name: t,
                pluginDisplayNames: n,
                logoUrl: a,
                logoUrlDark: r,
                mcpAppId: i,
              }),
            ),
            webMcpSourceHostnames: Array.from(
              new Set(e.webMcpCalls.flatMap((e) => (null == e.sourceHostname ? [] : [e.sourceHostname]))),
            ),
            hasWebSearch: null != e.webSearchSource,
          }
        },
      },
    )
  },
  IVFh(e, t, n) {
    n.d(t, { o: () => b })
    var a = n("ABep"),
      r = n("QosV"),
      i = n("slpy")
    let o = (0, n("ESTr").a)({
      name: "chevron-down-left-chevron-up-right-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.459961, y: 3.500977, width: 9.080078, height: 8.998047 },
        visualBounds: { x: 3.459961, y: 3.500977, width: 9.080078, height: 8.998047 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.459961, y: 3.500977, width: 9.080078, height: 8.998047 },
        center: { x: 8, y: 8 },
        insets: { top: 3.500977, right: 3.459961, bottom: 3.500976, left: 3.459961 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.75391 8.48828C7.18193 8.48828 7.5293 8.83565 7.5293 9.26367V11.9736C7.5293 12.2636 7.29386 12.499 7.00391 12.499C6.71396 12.499 6.47852 12.2636 6.47852 11.9736V9.53906H3.98535C3.6954 9.53906 3.45996 9.30362 3.45996 9.01367C3.45996 8.72372 3.6954 8.48828 3.98535 8.48828H6.75391Z" fill="currentColor"/> <path d="M8.99609 3.50098C9.28604 3.50098 9.52148 3.73642 9.52148 4.02637V6.46094H12.0146C12.3046 6.46094 12.54 6.69638 12.54 6.98633C12.54 7.27628 12.3046 7.51172 12.0146 7.51172H9.24609C8.81807 7.51172 8.4707 7.16435 8.4707 6.73633V4.02637C8.4707 3.73642 8.70614 3.50098 8.99609 3.50098Z" fill="currentColor"/>',
    })
    var l = n("tKcI"),
      s = n("SYwi"),
      d = n("jzBl"),
      u = n("qmMi"),
      c = n("QcW8"),
      m = n("ZU27"),
      p = n("n5iL"),
      g = n("Sm6l"),
      h = n("HOLv"),
      f = n("tSEg"),
      v = n("dt6g"),
      y = n("jZDY"),
      w = n("qsTb"),
      I = n("pZMh"),
      x = n("XbTJ"),
      C = n("Xfch")
    function b(e) {
      let t,
        n,
        b,
        A,
        S,
        M,
        _ = (0, r.c)(22),
        { bubbled: k, surface: E } = e,
        T = void 0 !== k && k,
        P = void 0 === E ? "toolbar" : E,
        D = (0, u.gh)(f.GD),
        N = (0, u.Ul)(C.nq),
        j = (0, y.I)(),
        R = (0, u.Ul)(c.eN) && j,
        O = (0, u.Ul)(C._y),
        U = (0, u.Ul)(c.Rl),
        L = (0, u.Ul)(I.FI),
        G = U || "full" === L,
        q = (0, u._U)(p.X1, "showWorkspaceTabView")
      if (R || !N) return null
      let B = "viewer" === P ? d.n : s.E,
        V = "viewer" === P ? l.V : o,
        F = !G
      _[0] !== D
        ? ((t = (e) => {
            let t = () => {
                ;(0, v.$)(D, "layout_button", () => (0, x.Ui)(D, "full"))
              },
              n = D.get(m.It.activeTab$)
            e.detail > 0 && !D.get(m.im) && D.get(I.dS) && n?.tabType.transitionFullView != null
              ? n.tabType.transitionFullView(D, n.props, t)
              : t()
          }),
          (_[0] = D),
          (_[1] = t))
        : (t = _[1])
      let W = G ? V : B
      _[2] !== W
        ? ((n = (0, a.jsx)(h.I, { className: "shrink-0", asset: W, focusable: "false" })), (_[2] = W), (_[3] = n))
        : (n = _[3])
      let H = G && O
      ;(_[4] !== n || _[5] !== H
        ? ((b = (0, a.jsxs)(a.Fragment, { children: [n, H] })), (_[4] = n), (_[5] = H), (_[6] = b))
        : (b = _[6]),
        _[7] !== G || _[8] !== O || _[9] !== F || _[10] !== t || _[11] !== b
          ? ((A = {
              "aria-label": O,
              "aria-pressed": G,
              "data-app-shell-focus-area": "right-panel",
              "data-app-shell-workspace-layout-toggle": "right-panel",
              uniform: F,
              onClick: t,
              children: b,
            }),
            (_[7] = G),
            (_[8] = O),
            (_[9] = F),
            (_[10] = t),
            (_[11] = b),
            (_[12] = A))
          : (A = _[12]))
      let z = A
      return (
        _[13] !== T || _[14] !== z || _[15] !== G || _[16] !== P
          ? ((S =
              "viewer" === P
                ? (0, a.jsx)(w.DW, { ...z })
                : (0, a.jsx)(g.$, {
                    ...z,
                    color: "ghostActive",
                    className: T ? "conversation-header-control" : void 0,
                    radius: G ? "full" : void 0,
                    size: G ? "toolbarLabel" : "toolbar",
                  })),
            (_[13] = T),
            (_[14] = z),
            (_[15] = G),
            (_[16] = P),
            (_[17] = S))
          : (S = _[17]),
        _[18] !== O || _[19] !== q || _[20] !== S
          ? ((M = (0, a.jsx)(i.m, { openDelay: 250, shortcut: q, content: O, children: S })),
            (_[18] = O),
            (_[19] = q),
            (_[20] = S),
            (_[21] = M))
          : (M = _[21]),
        M
      )
    }
  },
  Xfch(e, t, n) {
    var a = n("qmMi"),
      r = n("QcW8"),
      i = n("ZU27"),
      o = n("gbrq"),
      l = n("svjy"),
      s = n("tSEg"),
      d = n("moBM"),
      u = n("pZMh")
    let c = (0, a.un)(
        s.GD,
        ({ get: e }) => !e(s.Rj) && ("full" === e(u.FI) || e(r.dX) || e(u.BH).length > 0 || e(d.qJ)),
      ),
      m = (0, a.un)(
        s.GD,
        ({ get: e }) =>
          !e(s.Rj) &&
          (e(r.Rl) || (e(i.It.activeTab$)?.tabType.allowFullWidth !== !1 && (null == e(r.sY) ? e(o.SZ) : e(c)))),
      ),
      p = (0, a.un)(s.GD, ({ get: e }) => "full" === e(u.FI) && (e(i.It.tabs$).length > 0 || e(d.qJ))),
      g = (0, a.un)(s.GD, ({ get: e }) => {
        let t = e(l.g),
          n = e(u.FI)
        return e(d.Nz) && "split" === n
          ? e(h)
          : e(p)
            ? t.formatMessage({
                id: "threadWorkspace.layout.splitView",
                defaultMessage: "Enter split view",
                description: "Shows Chat beside the content tabs",
              })
            : "chat" !== n
              ? t.formatMessage({
                  id: "threadWorkspace.layout.hideTabs",
                  defaultMessage: "Hide tabs",
                  description: "Hides the content tabs and leaves Chat visible",
                })
              : t.formatMessage({
                  id: "threadWorkspace.layout.showTabs",
                  defaultMessage: "Show tabs",
                  description: "Shows retained content tabs beside Chat in split view",
                })
      }),
      h = (0, a.un)(s.GD, ({ get: e }) => {
        let t = e(l.g)
        return e(r.Rl) || "full" === e(u.FI)
          ? t.formatMessage({
              id: "threadWorkspace.layout.exitFullView",
              defaultMessage: "Exit full view",
              description: "Button label for restoring the previous layout when a tab or panel fills the workspace",
            })
          : null != e(r.sY) && 0 === e(i.It.tabs$).length
            ? t.formatMessage({
                id: "threadWorkspace.layout.newTabInFullView",
                defaultMessage: "New tab in full view",
                description: "Creates a content tab that fills the workspace",
              })
            : t.formatMessage({
                id: "threadWorkspace.layout.enterFullView",
                defaultMessage: "Enter full view",
                description: "Expands the active content tab to fill the workspace",
              })
      })
    n.d(t, {}, { PW: c, Sq: g, _y: h, nq: m })
  },
  m5G2(e, t, n) {
    var a = n("f4Vb")
    n.d(
      t,
      {},
      {
        J: function ({ axis: e, debounce: t, initialSize: n = !0, onChange: r, target: i }) {
          if (!i || "u" < typeof ResizeObserver) return
          let o = new AbortController(),
            l = null,
            s = null,
            d = n,
            u = new ResizeObserver((n) => {
              n.forEach((n) => {
                let { width: i, height: u } = (0, a.q)(n),
                  c = !1
                if ("width" === e) {
                  let e = (d || null != l) && l !== i
                  ;((l = i), e && (c = !0))
                } else if ("height" === e) {
                  let e = (d || null != s) && s !== u
                  ;((s = u), e && (c = !0))
                } else if ("both" === e) {
                  let e = (d || null != l) && l !== i,
                    t = (d || null != s) && s !== u
                  ;((l = i), (s = u), (e || t) && (c = !0))
                }
                if (((d = !1), c))
                  if (t) {
                    o.abort()
                    let e = (o = new AbortController()).signal
                    requestAnimationFrame(() => {
                      e.aborted || r({ width: i, height: u, previousWidth: l, previousHeight: s }, n)
                    })
                  } else r({ width: i, height: u, previousWidth: l, previousHeight: s }, n)
              })
            })
          return (
            u.observe(i),
            function () {
              try {
                u.disconnect()
              } catch (e) {}
            }
          )
        },
      },
    )
  },
  pZTm(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      appInput: { id: "operationError.appInput", defaultMessage: "Couldn\u2019t use the app\u2019s content" },
      displayApp: { id: "operationError.displayApp", defaultMessage: "Couldn\u2019t display {appName}" },
      displayUnnamedApp: { id: "operationError.displayUnnamedApp", defaultMessage: "Couldn\u2019t display this app" },
      runAction: { id: "operationError.runAction", defaultMessage: "Something went wrong with {action}" },
    })
    n.d(t, {}, { A: a })
  },
  PZWn(e, t, n) {
    var a = n("qmMi"),
      r = n("OWtl"),
      i = n("tzYO"),
      o = n("vXOR")
    let l = (0, a.bD)(r.u, (e) => ({ mode: "custom", overridden: !1 })),
      s = (0, a.i1)(r.u, (e, { get: t }) => {
        let n = t(i.Wo)
        return null == n ? { mode: "custom", overridden: !1 } : t(l, { ...n, conversationId: e })
      }),
      d = (0, a.i1)(r.u, (e, { get: t }) => t(s, e).mode)
    function u(e, t, n, a = !0) {
      let r = e.get(i.Wo)
      null != r && e.set(l, { ...r, conversationId: t }, { mode: n, overridden: a })
    }
    n.d(t, { SO: () => u, Wn: () => d, lU: () => s, mu: () => o.mu })
  },
  TurB(e, t, n) {
    var a = n("nuXe"),
      r = n.n(a),
      i = n("qmMi"),
      o = n("DBCl")
    n("NvvW")
    var l = n("M9WK"),
      s = n("tl5a"),
      d = n("J43j"),
      u = n("GaA7"),
      c = n("OWtl"),
      m = n("ndjw"),
      p = n("V0vl"),
      g = n("rvFo"),
      h = n("iQgv"),
      f = n("psi4"),
      v = n("dg06")
    let y = { kind: "available" },
      w = { kind: "unavailable", reason: "inspection-failed", worktreePath: null },
      I = "worktree_restore_required",
      x = "worktree_status_unavailable",
      C = (0, i.vU)(c.u, ({ conversationId: e, cwd: t, hostId: n }, { get: a }) => {
        let i = (0, v.d)(n)
        if (null == t)
          return {
            queryFn: () => y,
            queryKey: [...i, "available", null],
            networkMode: "always",
            staleTime: g.D.FIVE_SECONDS,
          }
        let s = a(m.lE, { hostId: n })
        if (null == s.data)
          return {
            enabled: s.isError,
            queryFn: () => w,
            queryKey: [...i, s.isError ? "codex-home-error" : "codex-home-loading", t],
            staleTime: g.D.FIVE_SECONDS,
          }
        if (!(0, o.n9x)(t, s.data.codexHome, s.data.worktreesSegment))
          return {
            queryFn: () => y,
            queryKey: [...i, "available", t],
            networkMode: "always",
            staleTime: g.D.FIVE_SECONDS,
          }
        let d = (0, f.HG)(t, (0, l._9)(s.data))
        if (null == d)
          return {
            queryFn: () => y,
            queryKey: [...i, "available-unmanaged-worktree", t],
            networkMode: "always",
            staleTime: g.D.FIVE_SECONDS,
          }
        let c = a(m.fm, n)
        if (c.id !== n)
          return {
            enabled: !1,
            queryFn: () => w,
            queryKey: [...i, "host-config-loading", t],
            staleTime: g.D.FIVE_SECONDS,
          }
        let I = a(p.ty, e),
          x =
            I?.pending?.cwd === t ? I.pending.projectSources : I?.applied?.cwd === t ? I.applied.projectSources : null,
          C = a(m.FM, { hostId: n })
        if (null == x && null == C.data && !C.isError)
          return {
            enabled: !1,
            queryFn: () => w,
            queryKey: [...i, "workspace-roots-loading", d],
            staleTime: g.D.FIVE_SECONDS,
          }
        let b = r()([...(x ?? []), ...(C.data?.roots ?? [])]).map(o.PUz),
          A = (0, o.DIv)(d)
        return {
          queryFn: async () => {
            let e
            try {
              let e = await u.appServices.workspaceFiles.getMetadata?.({ hostId: n, path: t })
              if (null != e)
                return "directory" === e.kind
                  ? y
                  : { kind: "unavailable", reason: "inspection-failed", worktreePath: A }
            } catch {}
            try {
              e = await (0, h.V)("git").request({
                method: "managed-worktree-state",
                params: {
                  candidateRoots: b,
                  cwd: t,
                  hostConfig: c,
                  operationSource: "worktree_restore_banner",
                  worktreePath: A,
                },
              })
            } catch (e) {
              throw e
            }
            switch (e.kind) {
              case "available":
                return y
              case "restorable":
              case "unavailable":
                return { ...e, worktreePath: A }
              case "gone":
                return { kind: "gone", worktreePath: A }
            }
          },
          queryKey: [...i, "inspect", t, A, b],
          networkMode: "always",
          refetchOnReconnect: "always",
          staleTime: g.D.FIVE_SECONDS,
        }
      }),
      b = (0, i.i1)(c.u, (e, { get: t }) => t(C, { conversationId: e, cwd: t(s.JN, e), hostId: t(s.qX, e) })),
      A = (0, i.i1)(c.u, (e, { get: t }) => {
        let n = t(b, e)
        return n.isError ? "unavailable" : null != n.data ? n.data.kind : "loading"
      })
    async function S(e, { conversationId: t, cwd: n, hostId: a }) {
      let r = e.query.snapshot(m.lE, { hostId: a }),
        i = r.getData()
      if (
        ("local" === a || null == i || e.queryClient.getQueryState(r.queryKey)?.isInvalidated
          ? (i = await r.fetch())
          : r.fetch().catch(() => void 0),
        !(0, o.n9x)(n, i.codexHome, i.worktreesSegment))
      )
        return y
      await e.query.getOrFetch(m.FM, { hostId: a }).catch(() => void 0)
      let l = { conversationId: t, cwd: (0, o.DIv)(n), hostId: a }
      return (await e.query.invalidate(C, l, { exact: !0 }), e.query.fetch(C, l))
    }
    async function M(e, t) {
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
          let n = await S(e, t)
          if ("unavailable" === n.kind) throw Error(x)
          if ("restorable" !== n.kind) return
          let a = e.get(m.fm, t.hostId)
          await (0, h.V)("git").request({
            method: "restore-worktree",
            params: {
              conversationId: t.conversationId,
              cwd: (0, o.DIv)(t.cwd),
              hostConfig: a,
              operationSource: "worktree_restore_banner",
              repoRoot: n.snapshot.repoRoot,
              worktreePath: n.worktreePath,
            },
          })
          let r = (0, d.W)(a)
          await Promise.all([
            e.query.invalidate(C, { ...t, cwd: (0, o.DIv)(t.cwd) }, { exact: !0 }),
            e.queryClient.invalidateQueries({ queryKey: (0, v.F)(r) }),
            e.queryClient.invalidateQueries({ queryKey: ["git", "metadata", r] }),
          ])
        },
        Bx: async function (e, { conversationId: t, cwd: n, hostId: a }) {
          let r
          try {
            r = await S(e, { conversationId: t, cwd: n, hostId: a })
          } catch {
            throw Error(x)
          }
          switch (r.kind) {
            case "available":
            case "gone":
              return
            case "restorable":
              throw Error(I)
            case "unavailable":
              throw Error(x)
          }
        },
        V4: x,
        aM: async function (e, { conversationId: t, cwd: n, hostId: a }) {
          return (await M(e, a), S(e, { conversationId: t, cwd: n, hostId: a }))
        },
        ae: b,
        c5: C,
        fX: "worktree_gone",
        j2: A,
        mb: I,
        u0: async function (e, t) {
          ;(await M(e, t), await e.queryClient.invalidateQueries({ queryKey: (0, v.d)(t) }))
        },
      },
    )
  },
  psi4(e, t, n) {
    var a = n("bnxy"),
      r = n("M9WK")
    n.d(
      t,
      { Cy: () => r.Cy, HG: () => r.HG, Xs: () => r.Xs },
      {
        _M: function (e) {
          if (!e) return null
          let t = (0, a.Fd)(e).replace(/\/+$/, ""),
            n = t.indexOf("/.git/worktrees/")
          if (-1 !== n) return t.slice(0, n)
          let r = "/.git"
          return t.endsWith(r) ? t.slice(0, -r.length) : null
        },
      },
    )
  },
  tKcI(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "chevron-down-left-chevron-up-right-sm-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 4.316406, y: 4.368164, width: 11.367188, height: 11.263672 },
        visualBounds: { x: 4.316406, y: 4.368164, width: 11.367188, height: 11.263672 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.316406, y: 4.368164, width: 11.367188, height: 11.263672 },
        center: { x: 10, y: 10 },
        insets: { top: 4.368164, right: 4.316406, bottom: 4.368164, left: 4.316406 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.50488 10.6016C9.01014 10.6016 9.41979 11.0114 9.41992 11.5166V14.9668C9.41992 15.3341 9.12215 15.6318 8.75488 15.6318C8.38761 15.6318 8.08984 15.3341 8.08984 14.9668V11.9316H4.98145C4.61424 11.9316 4.31641 11.6338 4.31641 11.2666C4.31654 10.8995 4.61432 10.6016 4.98145 10.6016H8.50488Z" fill="currentColor"/> <path d="M11.2451 4.36816C11.6124 4.36816 11.9102 4.66593 11.9102 5.0332V8.06836H15.0186C15.3858 8.06843 15.6836 8.36618 15.6836 8.7334C15.6835 9.10051 15.3857 9.39836 15.0186 9.39844H11.4951C10.9899 9.39844 10.5802 8.98863 10.5801 8.4834V5.0332C10.5801 4.66593 10.8778 4.36816 11.2451 4.36816Z" fill="currentColor"/>',
    })
    n.d(t, {}, { V: a })
  },
  SYwi(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "chevron-up-right-chevron-down-left-sm-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 4.132813, y: 4.149414, width: 7.734375, height: 7.701172 },
        visualBounds: { x: 4.132813, y: 4.149414, width: 7.734375, height: 7.701172 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.132813, y: 4.149414, width: 7.734375, height: 7.701172 },
        center: { x: 8, y: 8 },
        insets: { top: 4.149414, right: 4.132812, bottom: 4.149414, left: 4.132813 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.6582 7.83984C4.94815 7.83984 5.18359 8.07528 5.18359 8.36523V10.7998H7.67676C7.96671 10.7998 8.20215 11.0352 8.20215 11.3252C8.20215 11.6151 7.96671 11.8506 7.67676 11.8506H4.9082C4.48018 11.8506 4.13281 11.5032 4.13281 11.0752V8.36523C4.13281 8.07528 4.36825 7.83984 4.6582 7.83984Z" fill="currentColor"/> <path d="M11.0918 4.14941C11.5197 4.14955 11.8672 4.49687 11.8672 4.9248V7.63477C11.8672 7.92463 11.6316 8.16002 11.3418 8.16016C11.0518 8.16016 10.8164 7.92472 10.8164 7.63477V5.2002H8.32324C8.03329 5.2002 7.79785 4.96475 7.79785 4.6748C7.79785 4.38486 8.03329 4.14941 8.32324 4.14941H11.0918Z" fill="currentColor"/>',
    })
    n.d(t, {}, { E: a })
  },
  jzBl(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "chevron-up-right-chevron-down-left-sm-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 5.157715, y: 5.178223, width: 9.68457, height: 9.643555 },
        visualBounds: { x: 5.157715, y: 5.178223, width: 9.68457, height: 9.643555 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 5.157715, y: 5.178223, width: 9.68457, height: 9.643555 },
        center: { x: 10, y: 10 },
        insets: { top: 5.178223, right: 5.157715, bottom: 5.178222, left: 5.157715 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M5.82275 9.7915C6.19002 9.7915 6.48779 10.0893 6.48779 10.4565V13.4917H9.59619C9.9634 13.4918 10.2612 13.7895 10.2612 14.1567C10.2611 14.5238 9.96332 14.8217 9.59619 14.8218H6.07275C5.56749 14.8218 5.15785 14.412 5.15771 13.9067V10.4565C5.15771 10.0893 5.45548 9.7915 5.82275 9.7915Z" fill="currentColor"/> <path d="M13.9272 5.17822C14.4324 5.17829 14.8422 5.58807 14.8423 6.09326V9.54346C14.8423 9.91069 14.5445 10.2084 14.1772 10.2085C13.81 10.2085 13.5122 9.91073 13.5122 9.54346V6.5083H10.4038C10.0366 6.50823 9.73877 6.21048 9.73877 5.84326C9.7389 5.47615 10.0367 5.1783 10.4038 5.17822H13.9272Z" fill="currentColor"/>',
    })
    n.d(t, {}, { n: a })
  },
  rLuO(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "circle-grid-2x2-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.974609, y: 1.974609, width: 12.050537, height: 12.048462 },
        visualBounds: { x: 1.974609, y: 1.974609, width: 12.050537, height: 12.048462 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.974609, y: 1.974609, width: 12.050537, height: 12.048462 },
        center: { x: 7.999878, y: 7.99884 },
        insets: { top: 1.974609, right: 1.974854, bottom: 1.976929, left: 1.974609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.99884 }, foreground: { x: 7.999878, y: 7.99884 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.30859 4.66699C6.30859 3.76043 5.57351 3.02557 4.66699 3.02539C3.76032 3.02539 3.02539 3.76032 3.02539 4.66699C3.02557 5.57351 3.76043 6.30859 4.66699 6.30859C5.5734 6.30842 6.30842 5.5734 6.30859 4.66699ZM7.3584 4.66699C7.35822 6.1533 6.1533 7.35822 4.66699 7.3584C3.18053 7.3584 1.97479 6.15341 1.97461 4.66699C1.97461 3.18043 3.18043 1.97461 4.66699 1.97461C6.15341 1.97479 7.3584 3.18053 7.3584 4.66699Z" fill="currentColor"/> <path d="M6.30859 11.3317C6.30859 10.4251 5.57351 9.69024 4.66699 9.69006C3.76032 9.69006 3.02539 10.425 3.02539 11.3317C3.02557 12.2382 3.76043 12.9733 4.66699 12.9733C5.5734 12.9731 6.30842 12.2381 6.30859 11.3317ZM7.3584 11.3317C7.35822 12.818 6.1533 14.0229 4.66699 14.0231C3.18053 14.0231 1.97479 12.8181 1.97461 11.3317C1.97461 9.8451 3.18043 8.63928 4.66699 8.63928C6.15341 8.63946 7.3584 9.84521 7.3584 11.3317Z" fill="currentColor"/> <path d="M12.9753 4.66699C12.9753 3.76043 12.2403 3.02557 11.3337 3.02539C10.4271 3.02539 9.69214 3.76032 9.69214 4.66699C9.69231 5.57351 10.4272 6.30859 11.3337 6.30859C12.2401 6.30842 12.9752 5.5734 12.9753 4.66699ZM14.0251 4.66699C14.025 6.1533 12.82 7.35822 11.3337 7.3584C9.84728 7.3584 8.64153 6.15341 8.64136 4.66699C8.64136 3.18043 9.84717 1.97461 11.3337 1.97461C12.8202 1.97479 14.0251 3.18053 14.0251 4.66699Z" fill="currentColor"/> <path d="M12.9753 11.3317C12.9753 10.4251 12.2403 9.69024 11.3337 9.69006C10.4271 9.69006 9.69214 10.425 9.69214 11.3317C9.69231 12.2382 10.4272 12.9733 11.3337 12.9733C12.2401 12.9731 12.9752 12.2381 12.9753 11.3317ZM14.0251 11.3317C14.025 12.818 12.82 14.0229 11.3337 14.0231C9.84728 14.0231 8.64153 12.8181 8.64136 11.3317C8.64136 9.8451 9.84717 8.63928 11.3337 8.63928C12.8202 8.63946 14.0251 9.84521 14.0251 11.3317Z" fill="currentColor"/>',
    })
    n.d(t, {}, { o: a })
  },
  jkCp(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "clock-arrow-rotate-counterclockwise-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.641113, y: 1.640625, width: 12.716797, height: 12.716797 },
        visualBounds: { x: 1.641113, y: 1.640625, width: 12.716797, height: 12.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.641113, y: 1.640625, width: 12.716797, height: 12.716797 },
        center: { x: 7.999512, y: 7.999024 },
        insets: { top: 1.640625, right: 1.64209, bottom: 1.642578, left: 1.641113 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999512, y: 7.999024 }, foreground: { x: 7.999512, y: 7.999024 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99951 1.64062C11.511 1.64062 14.3577 4.48756 14.3579 7.99902C14.3579 11.5106 11.5111 14.3574 7.99951 14.3574C4.97316 14.3572 2.44194 12.2435 1.79932 9.41211C1.73517 9.12938 1.91212 8.8474 2.19482 8.7832C2.47756 8.71908 2.75859 8.89696 2.82275 9.17969C3.35918 11.5434 5.47412 13.3074 7.99951 13.3076C10.9312 13.3076 13.3081 10.9307 13.3081 7.99902C13.3079 5.06746 10.9311 2.69141 7.99951 2.69141C5.96082 2.69155 4.19173 3.84199 3.30225 5.53027H4.75928C5.04914 5.53037 5.28369 5.76577 5.28369 6.05566C5.28352 6.3454 5.04904 6.57998 4.75928 6.58008H2.1665C1.87666 6.58008 1.64129 6.34546 1.64111 6.05566V3.13867C1.64111 2.84872 1.87655 2.61328 2.1665 2.61328C2.45645 2.61328 2.69189 2.84872 2.69189 3.13867V4.50098C3.82896 2.77928 5.78029 1.64076 7.99951 1.64062Z" fill="currentColor"/> <path d="M7.99951 4.2334C8.28946 4.2334 8.5249 4.46884 8.5249 4.75879V8C8.52478 8.13907 8.46895 8.27275 8.37061 8.37109L6.75049 9.99121C6.54548 10.196 6.21327 10.1961 6.0083 9.99121C5.80341 9.78624 5.80348 9.45404 6.0083 9.24902L7.4751 7.78125V4.75879C7.4751 4.46897 7.70975 4.23362 7.99951 4.2334Z" fill="currentColor"/>',
    })
    n.d(t, {}, { Y: a })
  },
  wayE(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "clock-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        visualBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.25, right: 2.25, bottom: 2.25, left: 2.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12 6.25C12.4142 6.25003 12.75 6.58581 12.75 7V11.793C12.75 12.1244 12.6182 12.4424 12.3838 12.6768L10.0303 15.0303C9.88383 15.1767 9.69193 15.2499 9.50001 15.2499C9.08581 15.2499 8.75006 14.9142 8.75006 14.5C8.75006 14.3081 8.82328 14.1162 8.96973 13.9697L11.25 11.6895V7C11.25 6.58579 11.5858 6.25 12 6.25Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill="currentColor"/>',
    })
    n.d(t, {}, { p: a })
  },
  anM9(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "cursor-interactive-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.243164, y: 1.243164, width: 13.885986, height: 13.911621 },
        visualBounds: { x: 1.243164, y: 1.243164, width: 13.885986, height: 13.911621 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.243164, y: 1.243164, width: 13.885986, height: 13.911621 },
        center: { x: 8.186157, y: 8.198975 },
        insets: { top: 1.243164, right: 0.87085, bottom: 0.845215, left: 1.243164 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.186157, y: 8.198975 }, foreground: { x: 8.186157, y: 8.198975 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.86556 9.31191C7.57172 8.41012 8.43766 7.56145 9.33333 7.87343L14.3597 9.62441C15.3386 9.96546 15.3985 11.3267 14.4535 11.7523L12.6253 12.5756C12.6051 12.5847 12.5884 12.6006 12.5785 12.6205L11.6283 14.5209C11.1698 15.4378 9.82995 15.3382 9.51205 14.3637L7.86556 9.31191ZM8.98763 8.86464C8.91231 8.83868 8.8401 8.9099 8.86458 8.98573L10.5101 14.0385C10.5191 14.0659 10.5313 14.0789 10.5413 14.0863C10.5538 14.0955 10.5726 14.1032 10.5951 14.1049C10.6175 14.1065 10.6371 14.1014 10.6507 14.0941C10.6618 14.0882 10.6758 14.0772 10.6888 14.0512L11.639 12.1508C11.7571 11.9146 11.9529 11.7259 12.1937 11.6176L14.0228 10.7953C14.0496 10.7832 14.0605 10.7689 14.0667 10.7582C14.0745 10.7448 14.0804 10.7253 14.0794 10.7025C14.0784 10.6799 14.0707 10.6615 14.0619 10.6488C14.0547 10.6387 14.0427 10.6254 14.015 10.6156L8.98763 8.86464Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M4.36458 10.0219C4.56962 9.81694 4.90276 9.81688 5.10775 10.0219C5.31263 10.2269 5.31263 10.56 5.10775 10.765L3.69369 12.1791C3.4887 12.3841 3.15556 12.384 2.95052 12.1791C2.7455 11.9741 2.7455 11.641 2.95052 11.4359L4.36458 10.0219Z" fill="currentColor"/> <path d="M1.90462 5.50331L3.83626 6.02089C4.1162 6.0959 4.28312 6.3845 4.20833 6.66444C4.1333 6.94446 3.8448 7.11146 3.56478 7.03651L1.63314 6.51894C1.35314 6.44391 1.18617 6.15538 1.26107 5.87538C1.33609 5.59539 1.62463 5.42843 1.90462 5.50331Z" fill="currentColor"/> <path d="M11.4359 2.95058C11.6408 2.74586 11.9731 2.74588 12.1781 2.95058C12.3831 3.1556 12.3831 3.48872 12.1781 3.69374L10.764 5.1078C10.559 5.31272 10.2258 5.31279 10.0208 5.1078C9.8161 4.9028 9.81601 4.56959 10.0208 4.36464L11.4359 2.95058Z" fill="currentColor"/> <path d="M5.87533 1.26112C6.1554 1.18608 6.44384 1.35312 6.51888 1.63319L7.03646 3.56484C7.11144 3.84481 6.94529 4.13327 6.66537 4.20839C6.3853 4.28343 6.09686 4.11639 6.02181 3.83632L5.50423 1.90468C5.42925 1.62467 5.59534 1.3362 5.87533 1.26112Z" fill="currentColor"/>',
    })
    n.d(t, {}, { y: a })
  },
  blHc(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "stop-fill-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.141235, y: 3.141113, width: 9.716797, height: 9.716797 },
        visualBounds: { x: 3.141235, y: 3.141113, width: 9.716797, height: 9.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.141235, y: 3.141113, width: 9.716797, height: 9.716797 },
        center: { x: 7.999634, y: 7.999512 },
        insets: { top: 3.141113, right: 3.141968, bottom: 3.14209, left: 3.141235 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999634, y: 7.999512 }, foreground: { x: 7.999634, y: 7.999512 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.4664 3.14111C11.7872 3.14111 12.8578 4.21204 12.858 5.53271V10.4663C12.858 11.7872 11.7873 12.8579 10.4664 12.8579H5.53284C4.21217 12.8577 3.14124 11.787 3.14124 10.4663V5.53271C3.14148 4.2122 4.21232 3.14136 5.53284 3.14111H10.4664Z" fill="currentColor"/>',
    })
    n.d(t, {}, { L: a })
  },
}
//# sourceMappingURL=825164.69e2b739ab.js.map
