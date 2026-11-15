export const __rspack_esm_ids = [150595]
export const __webpack_modules__ = {
  zxZd(e, t) {
    t.A = {
      container: "container-C1xTCG",
      surface: "surface-NbxhOL",
      content: "content-tH5Jdx",
      authUpsellSurface: "authUpsellSurface-quYEPh",
      authUpsellContent: "authUpsellContent-pCNqKz",
      authUpsellCtas: "authUpsellCtas-thHpmi",
      body: "body-F1ixEW",
      visual: "visual-mZAtoS",
      iconCircle: "iconCircle-KOGKLv",
      responsiveImage: "responsiveImage-uOZ0Ay",
      copy: "copy-nj2odw",
      title: "title-TGNnMU",
      description: "description-iF4DEu",
      ctas: "ctas-dOiCY0",
      actions: "actions-nhbYt6",
      dismiss: "dismiss-o5oOqY",
      action: "action-UM7Nw_",
      primary: "primary-FmM7e1",
      secondary: "secondary-sIS2DJ",
      dismissButton: "dismissButton-dLiayh",
      mobileDismiss: "mobileDismiss-Ebj2Ia",
      composer: "composer-LGf166",
      inlineActions: "inlineActions-kYdKTO",
      noVisual: "noVisual-pjyuD6",
      desktopDismiss: "desktopDismiss-zL0l1K",
    }
  },
  PAzX(e, t, n) {
    var r = n("eWgO"),
      i = n("Dgwo"),
      s = n("tl5a"),
      a = n("wCOm"),
      l = n("mGK9"),
      o = n("B81s"),
      d = n("WFY2"),
      c = n("l2g8")
    n.d(
      t,
      {},
      {
        e: async function (e, t, n, u) {
          try {
            let m = await (async function (e, t) {
              let n = await (0, l.s)(e, t)
              if ("chatgpt" !== n && "personalAccessToken" !== n && "amazonBedrock" !== n) return null
              let i = await (0, o.Wr)(e, t, { priority: "critical" })
              return (e.query.setData(o.b9, { authMethod: n, hostId: t }, i), (0, r.W6)(i))
            })(e, t)
            if (void 0 !== u) return (0, c.E_)(null, u, m)
            let p = e.get(s.QN, t)
            if ("fromConfig" !== p.type) return (0, c.E_)(null, (0, c.qh)(p, null), m)
            let { config: f } = await (0, a.ig)(e, t, { includeLayers: !1, cwd: null }, { priority: "critical" }),
              h = (0, a.Y$)(f)
            if (null != h.service_tier) return (0, c.E_)(null, h.service_tier, m)
            return (0, c.E_)(
              await (async function (e, t, n) {
                try {
                  let { data: r } = await (0, i.V)(e, t).sendRequest(
                    "model/list",
                    { includeHidden: !0, cursor: null, limit: 100 },
                    { priority: "critical" },
                  )
                  if (null == n) return r.find((e) => e.isDefault) ?? null
                  return r.find((e) => e.model === n || e.id === n) ?? null
                } catch (e) {
                  return (d.v.error("Failed to read service tier model", { safe: {}, sensitive: { error: e } }), null)
                }
              })(e, t, n ?? h.model),
              h.service_tier,
              m,
            )
          } catch (e) {
            return (d.v.error("Failed to read service tier for request", { safe: {}, sensitive: { error: e } }), null)
          }
        },
      },
    )
  },
  Dlb7(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n,
            a,
            l,
            o,
            d,
            c,
            u = (0, i.c)(15)
          u[0] !== e
            ? (({ className: t, divider: n, height: a, placement: l, ...o } = e),
              (u[0] = e),
              (u[1] = t),
              (u[2] = n),
              (u[3] = a),
              (u[4] = l),
              (u[5] = o))
            : ((t = u[1]), (n = u[2]), (a = u[3]), (l = u[4]), (o = u[5]))
          let m = "content" === a || "overlay" === l ? "flex" : "h-toolbar-pane",
            p = (n ?? ("content" !== a && "overlay" !== l)) && "border-b border-default",
            f = "overlay" === l && "pointer-events-none h-0"
          return (
            u[6] !== t || u[7] !== m || u[8] !== p || u[9] !== f
              ? ((d = (0, s.A)("relative z-10 min-w-0 shrink-0", m, p, f, t)),
                (u[6] = t),
                (u[7] = m),
                (u[8] = p),
                (u[9] = f),
                (u[10] = d))
              : (d = u[10]),
            u[11] !== l || u[12] !== o || u[13] !== d
              ? ((c = (0, r.jsx)("div", { className: d, "data-pane-header-placement": l, ...o })),
                (u[11] = l),
                (u[12] = o),
                (u[13] = d),
                (u[14] = c))
              : (c = u[14]),
            c
          )
        },
      },
    )
  },
  yXmW(e, t, n) {
    var r = n("VtPR")
    n.d(t, { E: () => r.E })
  },
  vpCL(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      a = n("Dlb7")
    function l(e) {
      return (0, r.jsx)(
        a.U,
        {
          divider: e.divider,
          height: e.height,
          placement: e.placement,
          children: (0, r.jsx)("div", {
            className: (0, s.A)(
              "min-h-0 min-w-0 w-full",
              "content" === e.height || "overlay" === e.placement
                ? "relative shrink-0 self-start"
                : "absolute inset-y-0 left-0",
            ),
            children: e.content,
          }),
        },
        `header:${e.id}`,
      )
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            s,
            a = (0, i.c)(7),
            { headerRows: o, content: d } = e
          return (
            a[0] !== o ? ((t = o.map(l)), (a[0] = o), (a[1] = t)) : (t = a[1]),
            a[2] !== d
              ? ((n = (0, r.jsx)(
                  "div",
                  {
                    className: "relative min-h-0 min-w-0 flex-1 overflow-hidden",
                    "data-app-shell-pane-content-viewport": !0,
                    children: (0, r.jsx)("div", {
                      className: "absolute inset-y-0 left-0 min-h-0 w-full min-w-0",
                      children: d,
                    }),
                  },
                  "content",
                )),
                (a[2] = d),
                (a[3] = n))
              : (n = a[3]),
            a[4] !== t || a[5] !== n
              ? ((s = (0, r.jsxs)("div", { className: "flex h-full min-h-0 min-w-0 flex-col", children: [t, n] })),
                (a[4] = t),
                (a[5] = n),
                (a[6] = s))
              : (s = a[6]),
            s
          )
        },
      },
    )
  },
  VtPR(e, t, n) {
    var r = n("ABep"),
      i = n("vpCL")
    n.d(
      t,
      {},
      {
        E: function (e) {
          return (0, r.jsx)(i.Z, { ...e })
        },
      },
    )
  },
  mGK9(e, t, n) {
    var r = n("SRbQ"),
      i = n("l00C"),
      s = n("GaA7"),
      a = n("q77y"),
      l = n("kfGJ"),
      o = n("CxiD")
    n.d(
      t,
      {},
      {
        s: async function (e, t) {
          let n = { stack: [], error: void 0, hasError: !1 }
          try {
            let c = e.get(i.u$, t),
              u = !1,
              m = () => {
                if (u || e.get(i.u$, t) !== c) throw (0, o.NK)()
              }
            if (t === l.fI && s.appServices?.copilot != null) {
              let [e, t] = await Promise.all([
                (0, a.P)(s.appServices.copilot.getPreferences()),
                (0, a.P)(s.appServices.copilot.isAvailable()),
              ])
              if ((m(), e.useForInference && t)) return "copilot"
            }
            if (null == c) return null
            let p = (0, r.mS)(
              n,
              c.rpc.subscribe({
                type: "event",
                key: { hostId: t },
                event: "auth-status",
                listener: () => {
                  u = !0
                },
              }),
              !1,
            )
            ;(p.onRpcBroken(() => {
              u = !0
            }),
              (0, r.mS)(n, await p, !1).onRpcBroken(() => {
                u = !0
              }),
              m())
            let [f, h] = await Promise.all([
              (0, a.P)(c.rpc.getAccount({ priority: "critical" })),
              (0, a.P)(c.rpc.getAuthMethod({ priority: "critical" })).catch(() => null),
            ])
            if ((m(), "personalAccessToken" === h)) return h
            var d = f.account
            if (null == d) return null
            let g = d.type
            return "apiKey" === g ? "apikey" : "amazonBedrock" === g || "chatgpt" === g || "gcp" === g ? g : null
          } catch (e) {
            ;((n.error = e), (n.hasError = !0))
          } finally {
            ;(0, r.hk)(n)
          }
        },
      },
    )
  },
  vi3X(e, t, n) {
    let r = (0, n("zd8w").createContext)(void 0)
    n.d(t, {}, { V: r })
  },
  XlHx(e, t, n) {
    n.d(t, { at: () => T, KB: () => D })
    var r = n("SRbQ"),
      i = n("zTeN"),
      s = n("N2rm"),
      a = n("wTVm"),
      l = n("Dgwo"),
      o = n("tl5a"),
      d = n("MYVk"),
      c = n("YLui"),
      u = n("PAzX"),
      m = n("AqHb"),
      p = n("SPnB"),
      f = n("seW7"),
      h = n("r0y7"),
      g = n("OMIV")
    function x(e, t, n = "fresh") {
      return async (i, s) => {
        let a = (0, h.jD)(i, t),
          d = i.message.submissionOptions ?? i.options
        if (null == d) {
          let n = { stack: [], error: void 0, hasError: !1 }
          try {
            let s = (0, r.mS)(n, (0, l.V)(e, t).getThreadExecutionState(i.conversationId), !1),
              a = (0, r.mS)(n, await s, !1)
            d = {
              executionHostId: e.get(o.qX, i.conversationId) ?? t,
              agentMode: "auto",
              permissionProfileId: null,
              serviceTier: await (0, u.e)(e, t, a?.latestModel ?? null),
              shouldSendPermissionOverrides: !1,
              usePermissionSelection: !0 === e.get(g.JW, "4226282475"),
              collaborationMode: null,
              clientUserMessageId: i.message.id,
            }
          } catch (e) {
            ;((n.error = e), (n.hasError = !0))
          } finally {
            ;(0, r.hk)(n)
          }
        }
        if (
          (0, c.sI)(
            i.message.context,
            d.executionHostId,
            e.get(p.chatGptAuthenticatedAccountId$),
            "durable" === (0, m._)(d.executionHostId),
          )
        )
          throw Error(c.fi)
        let x = await (0, f.FB)(
          {
            scope: e,
            turnTrigger: i.message.context.turnTrigger ?? "composer_queue_run_now",
            managerHostId: t,
            hostId: d.executionHostId,
            targetConversationId: a.conversationId,
            context: a.message.context,
            cwd: a.message.cwd,
            agentMode: d.agentMode,
            permissionProfileId: d.permissionProfileId,
            serviceTier: d.serviceTier,
            shouldSendPermissionOverrides: d.shouldSendPermissionOverrides,
            usePermissionSelection: d.usePermissionSelection,
            permissionSelection: d.permissionSelection,
            activeCollaborationMode: d.collaborationMode,
            clientUserMessageId: d.clientUserMessageId,
            restoreMessage: a.message,
            isQueuedReplay: "queued" === n,
          },
          s,
        )
        return ((x.steer.restoreMessage = i.message), x)
      }
    }
    var v = n("Yn2j"),
      b = n("TYK1"),
      y = n("jiwy"),
      w = n("OWtl"),
      k = n("Oo9D"),
      j = n("iKMW"),
      A = n("ABep"),
      N = n("oyxz"),
      S = n("Y5Sy"),
      _ = n("Ed5q"),
      I = n("SGsN"),
      M = n("c9K0"),
      C = n("hgea"),
      E = n("WFY2"),
      B = n("R69Z"),
      P = n("CDw0"),
      U = n("Ld2s")
    function D(e) {
      var t
      let n = (0, i.gh)(w.u),
        s = (0, i._U)(o.qX, e),
        a = null == e ? null : { hostId: s, threadId: e },
        u = (0, i._U)(d.Ax, a),
        m = (0, i._U)(j.kf, a),
        p = (e) => n.get(d.Ax, a)?.find((t) => t.id === e) ?? null,
        h = async () => (0, l.V)(n, s).getTurnCoordinator()
      return {
        threadKey: a,
        messages: u ?? [],
        visibleMessages: m ?? [],
        isLoading: null != e && null == u,
        actions: {
          ...(t = {
            get: p,
            send: async (t, r) => (null == e ? null : T(n, s, e, t, r)),
            clear: async () => {
              let t = { stack: [], error: void 0, hasError: !1 }
              try {
                if (null == e) return []
                let n = (0, r.mS)(t, await h(), !1)
                return await n.clearQueuedMessages(e)
              } catch (e) {
                ;((t.error = e), (t.hasError = !0))
              } finally {
                ;(0, r.hk)(t)
              }
            },
            start: async (t) => {
              let n = p(t.messageId)
              null != e &&
                null != n &&
                (await (async function (
                  { scope: e, conversationId: t, executionHostId: n, onSendResult: i, submission: s },
                  a,
                  d,
                ) {
                  let u
                  if (e.get(S.Nk)) return void i?.("failed")
                  let m = (0, c.zi)(d.context)
                  ;(m && (0, M.c7)(e, t, d.id), s.onAttempt?.(), i?.("attempted"))
                  let p = (0, P.FA)(s.prepareContext)
                  try {
                    let n = { stack: [], error: void 0, hasError: !1 }
                    try {
                      let i = (0, r.mS)(n, await (0, l.V)(e, a).getTurnCoordinator(), !1),
                        o = (0, l.V)(e, a),
                        c = (0, r.mS)(n, await o.getFollowUpContext(t), !1),
                        m = await (0, b.F)(e, a, t, c),
                        h = () => {
                          ;(m || (0, f.Kv)(e, t, c)) && (0, y.qo)(e)
                        }
                      ;(h(),
                        (u = await i.sendQueuedMessageNow(
                          t,
                          d.id,
                          s.getOptions(d),
                          async (t, n) => {
                            let r =
                              !0 === t.message.context.localSubmitPrepared
                                ? t.message.context
                                : await p.prepare(t.message.context, { isQueuedMessage: !0 })
                            h()
                            let i = await x(e, a, "queued")({ ...t, message: { ...t.message, context: r } }, n)
                            return (h(), i)
                          },
                          async () => {
                            ;(h(), p.validate())
                          },
                        )))
                    } catch (e) {
                      ;((n.error = e), (n.hasError = !0))
                    } finally {
                      ;(0, r.hk)(n)
                    }
                  } catch (n) {
                    ;(p.settleError(n),
                      m && (0, M.sr)(e, t, d.id),
                      s.onError?.(),
                      i?.("failed"),
                      E.v.warning("Failed to send queued message", {
                        safe: {},
                        sensitive: { conversationId: t, error: n },
                      }))
                    return
                  }
                  if ((p.settle(u), u?.status !== "sent")) {
                    if ((m && (0, M.sr)(e, t, d.id), u?.status === "queued")) {
                      ;(s.onQueued?.(),
                        e
                          .get(I.Id)
                          .info(
                            (0, A.jsx)(N.A, {
                              id: "codex.composer.queuedSteerDuringCompaction",
                              defaultMessage:
                                "Can't steer while compacting. Your message will run when compaction finishes.",
                              description:
                                "Informational toast after the user clicks Steer on an already queued message during context compaction. The message remains queued and will run automatically when compaction finishes.",
                            }),
                            { id: "queued-steer-during-compaction" },
                          ))
                      return
                    }
                    ;(s.onError?.(), i?.("failed"))
                    return
                  }
                  ;((0, C.e)(
                    e,
                    d.context.sharedThreadAttributions?.filter(({ shareId: e }) =>
                      d.context.fileAttachments.some((t) => t.sharedThread?.shareId === e),
                    ),
                    { threadId: t, turnId: u.turnId },
                  ),
                    (0, _.ML)(e, d.context.artifactAnnotationBatch, { threadId: t, turnId: u.turnId }),
                    m && (0, M.AF)(e, t, d.id, u.turnId, (e) => e(o.BP, { hostId: a, threadId: t })),
                    (0, B.Q)(e, n, d),
                    s.onSuccess?.(d, u),
                    i?.("succeeded", { threadId: t, turnId: u.turnId }))
                })({ ...t, conversationId: e }, s, n))
            },
            remove: async (t) => {
              let i = { stack: [], error: void 0, hasError: !1 }
              try {
                if (null == e) return null
                let a = (0, r.mS)(i, await h(), !1),
                  l = await a.removeQueuedMessage(e, t)
                if (l?.serverSubmission != null && null == l.message.context.userMessageFormat) {
                  let e = await (0, k.bv)(n, s, l.message)
                  null != e && (l.message.context.userMessageFormat = e)
                }
                return l
              } catch (e) {
                ;((i.error = e), (i.hasError = !0))
              } finally {
                ;(0, r.hk)(i)
              }
            },
            restore: async (t) => {
              let i = { stack: [], error: void 0, hasError: !1 }
              try {
                if (null == e) return
                let a = (0, r.mS)(i, await h(), !1)
                ;(null != t.restoreClientUserMessageId &&
                  (await (0, k.gG)(n, s, t.restoreClientUserMessageId, await (0, k.bv)(n, s, t.message))),
                  (t.message.id = await a.restoreQueuedMessage(e, t)))
              } catch (e) {
                ;((i.error = e), (i.hasError = !0))
              } finally {
                ;(0, r.hk)(i)
              }
            },
            resumeInterruptedSteers: async () => {
              let t = { stack: [], error: void 0, hasError: !1 }
              try {
                if (null == e) return
                let n = (0, r.mS)(t, await h(), !1)
                await n.resumeInterruptedQueuedMessages(e)
              } catch (e) {
                ;((t.error = e), (t.hasError = !0))
              } finally {
                ;(0, r.hk)(t)
              }
            },
            reorder: async (t) => {
              let n = { stack: [], error: void 0, hasError: !1 }
              try {
                if (null == e) return
                let i = (0, r.mS)(n, await h(), !1)
                await i.reorderQueuedMessages(e, t)
              } catch (e) {
                ;((n.error = e), (n.hasError = !0))
              } finally {
                ;(0, r.hk)(n)
              }
            },
          }),
          beginEdit: t.remove,
          restoreEdit: t.restore,
          async transfer(e, n) {
            let r,
              i = await t.remove(e)
            if (null == i) return null
            try {
              r = await n(i.message)
            } catch (e) {
              throw (await t.restore(i), e)
            }
            return (null == r && (await t.restore(i)), r)
          },
        },
      }
    }
    async function T(e, t, n, i, o) {
      let d = { stack: [], error: void 0, hasError: !1 }
      try {
        let c = (0, l.V)(e, t),
          u = (0, r.mS)(d, await c.getFollowUpContext(n), !1),
          [m, p] = await Promise.all([
            (0, b.F)(e, t, n, u),
            void 0 === i.multiUserMessageSender
              ? (0, h.tu)(e, t, u?.threadAccess === "shared")
              : (i.multiUserMessageSender ?? null),
          ]),
          g =
            o?.editPosition?.messageThreadId ?? i.context.messageThreadId ?? (m && (0, s.ZJ)(t) ? (0, a.A)() : void 0),
          w = (0, r.mS)(d, await (0, l.V)(e, t).getTurnCoordinator(), !1),
          k = () => {
            ;(m || (0, f.Kv)(e, n, u)) && (0, y.qo)(e)
          }
        return await (0, U.t)(
          e,
          i.context,
          (r) => (
            k(),
            w.sendMessage(
              {
                conversationId: n,
                message: {
                  ...i,
                  threadAccess: u?.threadAccess,
                  responsesapiClientMetadata: (0, v.V)(e, t, i.responsesapiClientMetadata),
                  multiUserMessageSender: p,
                  text: r === i.context ? i.text : r.prompt,
                  context: {
                    ...r,
                    messageThreadId: g,
                    mcpAppModelContextAttachments: r.mcpAppModelContextAttachments?.map((e) =>
                      "message" === e.kind ? e : { ...e, untrusted: !0 },
                    ),
                  },
                  id: (0, a.A)(),
                  createdAt: Date.now(),
                },
                ...o,
              },
              x(e, t),
              void 0,
              async () => k(),
            )
          ),
        )
      } catch (e) {
        ;((d.error = e), (d.hasError = !0))
      } finally {
        ;(0, r.hk)(d)
      }
    }
  },
  TjgH(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    let a = {
      catalog:
        "gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm leading-5 font-normal text-default",
      catalogDisabled:
        "gap-2 rounded-full border border-subtle bg-surface-tertiary px-3 py-1.5 text-sm leading-5 font-normal text-tertiary opacity-70",
      unread:
        "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-accent px-0.5 text-unread-badge text-on-accent tabular-nums select-none",
      count:
        "h-5 min-w-6 justify-center rounded-full bg-text/8 px-1.25 text-xs leading-4.5 font-semibold tracking-[0.3px] text-(--gray-750) tabular-nums",
      default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
      info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
      infoPill: "rounded-full bg-info-soft px-3 py-1.5 text-xs font-medium text-info",
      outline:
        "rounded-sm border border-default bg-transparent px-2 py-1 text-xs leading-none font-medium text-secondary",
      outlinePill: "h-6 rounded-full border border-subtle px-2.5 text-xs leading-4 font-semibold text-secondary",
      identity:
        "max-w-full min-w-0 rounded-xl border border-default px-3 py-2 text-heading-lg leading-7 font-medium wrap-anywhere text-default select-text",
      neutral:
        "h-7 gap-1.5 rounded-full border border-default bg-surface-secondary px-2.5 text-sm leading-none font-medium whitespace-nowrap text-secondary",
      neutralCompact:
        "h-6 gap-1 rounded-md border border-default bg-surface-secondary px-2 text-xs leading-none font-medium whitespace-nowrap text-secondary",
      recipient:
        "h-7 gap-1.5 rounded-md bg-secondary-soft px-2 text-sm leading-none font-normal whitespace-nowrap text-default",
      offer:
        "min-h-5 gap-1 rounded-[6px] bg-chart-green/15 px-2.5 py-1 text-xs font-medium text-chart-green tabular-nums light:text-(color:--green-700)",
      promotion:
        "min-h-6 rounded-full bg-chart-purple/10 px-2.5 text-sm leading-none font-medium whitespace-nowrap text-chart-purple",
      success:
        "min-h-5 rounded-full bg-success-soft-alpha px-2 text-xs font-medium text-success-soft-alpha tabular-nums",
      warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-soft-alpha",
      caution: "min-h-5 rounded-full bg-caution-soft-alpha px-2 text-xs font-medium text-caution-soft-alpha",
      danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-soft-alpha",
      tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      tipInset:
        "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      internal:
        "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
      reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
      recording: "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info/15",
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            l,
            o = (0, i.c)(10),
            { ref: d, children: c, className: u, variant: m } = e,
            p = void 0 === m ? "default" : m,
            f = a[p]
          return (
            o[0] !== u || o[1] !== f
              ? ((t = (0, s.A)("inline-flex items-center", f, u)), (o[0] = u), (o[1] = f), (o[2] = t))
              : (t = o[2]),
            o[3] !== c || o[4] !== p
              ? ((n = "unread" === p ? (0, r.jsx)("span", { className: "text-cap-trim", children: c }) : c),
                (o[3] = c),
                (o[4] = p),
                (o[5] = n))
              : (n = o[5]),
            o[6] !== d || o[7] !== t || o[8] !== n
              ? ((l = (0, r.jsx)("span", { ref: d, className: t, children: n })),
                (o[6] = d),
                (o[7] = t),
                (o[8] = n),
                (o[9] = l))
              : (l = o[9]),
            l
          )
        },
      },
    )
  },
  zKCW(e, t, n) {
    n.d(t, { l: () => m })
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      a = n("Sm6l"),
      l = n("uWmg"),
      o = n("bVeK"),
      d = n("mT2q"),
      c = n("zxZd")
    let u = { surface: c.A.authUpsellSurface, content: c.A.authUpsellContent, ctas: c.A.authUpsellCtas }
    function m(e) {
      let t,
        n,
        m,
        p,
        f,
        h,
        g,
        x,
        v,
        b,
        y = (0, i.c)(393),
        {
          title: w,
          content: k,
          customCtas: j,
          footer: A,
          density: N,
          onPrimaryCtaClick: S,
          primaryCtaText: _,
          primaryCtaColor: I,
          secondaryCtaColor: M,
          onSecondaryCtaClick: C,
          onDangerCtaClick: E,
          secondaryCtaText: B,
          dangerCtaText: P,
          icon: U,
          Icon: D,
          iconClassName: T,
          isPrimaryCtaDisabled: z,
          isSecondaryCtaDisabled: R,
          isDangerCtaDisabled: V,
          type: O,
          variant: Y,
          layout: q,
          stackOnNarrow: F,
          showCtaSeparator: K,
          wrapCtas: L,
          ariaLive: W,
          role: $,
          trailingAction: G,
          attachedToComposer: Q,
        } = e,
        X = void 0 === N ? "default" : N,
        J = void 0 !== z && z,
        H = void 0 !== R && R,
        Z = void 0 !== V && V,
        ee = void 0 === O ? "normal" : O,
        et = void 0 === Y ? "default" : Y,
        en = void 0 === q ? "horizontal" : q,
        er = void 0 !== F && F,
        ei = void 0 === K || K,
        es = void 0 !== L && L,
        ea = void 0 !== Q && Q
      if ("composerContext" === et) {
        let e
        return (
          y[0] !== W || y[1] !== k || y[2] !== $
            ? ((e = (0, r.jsx)("aside", { className: "composerContext-WXELWW", "aria-live": W, role: $, children: k })),
              (y[0] = W),
              (y[1] = k),
              (y[2] = $),
              (y[3] = e))
            : (e = y[3]),
          e
        )
      }
      if ("recovery" === et) {
        let e
        return (
          y[4] !== k || y[5] !== j || y[6] !== U || y[7] !== w
            ? ((e = (0, r.jsx)(l.B, { icon: U, title: w, content: k, actions: j })),
              (y[4] = k),
              (y[5] = j),
              (y[6] = U),
              (y[7] = w),
              (y[8] = e))
            : (e = y[8]),
          e
        )
      }
      if ("browserNotice" === et) {
        let e, t, n, i, s
        y[9] !== w
          ? ((e = w ? (0, r.jsx)("div", { className: "text-sm leading-5 font-medium", children: w }) : null),
            (y[9] = w),
            (y[10] = e))
          : (e = y[10])
        let a = w ? "text-xs leading-4 text-codex-description" : "text-sm leading-5"
        return (
          y[11] !== k || y[12] !== a
            ? ((t = (0, r.jsx)("div", { className: a, children: k })), (y[11] = k), (y[12] = a), (y[13] = t))
            : (t = y[13]),
          y[14] !== e || y[15] !== t
            ? ((n = (0, r.jsxs)("div", {
                className: "flex min-h-9 min-w-40 flex-1 flex-col justify-center",
                children: [e, t],
              })),
              (y[14] = e),
              (y[15] = t),
              (y[16] = n))
            : (n = y[16]),
          y[17] !== j || y[18] !== G
            ? ((i = (0, r.jsxs)("div", {
                className: "ms-auto flex shrink-0 items-center gap-1.5",
                "data-viewer-density": "compact",
                children: [j, G],
              })),
              (y[17] = j),
              (y[18] = G),
              (y[19] = i))
            : (i = y[19]),
          y[20] !== W || y[21] !== U || y[22] !== $ || y[23] !== n || y[24] !== i
            ? ((s = (0, r.jsxs)("aside", {
                "aria-live": W,
                className:
                  "flex w-full flex-wrap items-center gap-3 border-b border-default bg-surface p-2 text-default select-none",
                role: $,
                children: [U, n, i],
              })),
              (y[20] = W),
              (y[21] = U),
              (y[22] = $),
              (y[23] = n),
              (y[24] = i),
              (y[25] = s))
            : (s = y[25]),
          s
        )
      }
      if ("mobileApp" === et || "mobileAppSolid" === et || "mobileAppGradient" === et) {
        let e,
          t,
          n,
          i,
          a,
          l,
          o,
          d,
          c,
          u,
          m,
          p,
          f,
          h,
          g,
          x = "mobileApp" === et,
          v = "mobileAppGradient" === et,
          b = "mobileAppSolid" === et && "p-2"
        y[26] !== b ? ((e = (0, s.A)("w-full shrink-0 bg-surface", b)), (y[26] = b), (y[27] = e)) : (e = y[27])
        let A = x ? "h-16 border-b border-default px-2" : "gap-2 p-2",
          N = "mobileAppSolid" === et && "rounded-2xl bg-surface-secondary",
          S = v && "mobileAppGradient-s0f7fS"
        y[28] !== A || y[29] !== N || y[30] !== S
          ? ((t = (0, s.A)("flex w-full items-center text-default select-none", A, N, S)),
            (y[28] = A),
            (y[29] = N),
            (y[30] = S),
            (y[31] = t))
          : (t = y[31])
        let _ = x ? G : null,
          I = x ? "size-16" : "size-14"
        y[32] !== I
          ? ((n = (0, s.A)("flex shrink-0 items-center justify-center", I)), (y[32] = I), (y[33] = n))
          : (n = y[33])
        let M = x ? "size-9 rounded-full" : "size-14 rounded-2xl"
        ;(y[34] !== M
          ? ((i = (0, s.A)(
              "flex items-center justify-center border border-default bg-media-foreground text-media-background shadow-sm",
              M,
            )),
            (y[34] = M),
            (y[35] = i))
          : (i = y[35]),
          y[36] !== D || y[37] !== U || y[38] !== x
            ? ((a = U ?? (D ? (0, r.jsx)(D, { className: x ? "size-7" : "size-11" }) : null)),
              (y[36] = D),
              (y[37] = U),
              (y[38] = x),
              (y[39] = a))
            : (a = y[39]),
          y[40] !== i || y[41] !== a
            ? ((l = (0, r.jsx)("div", { className: i, children: a })), (y[40] = i), (y[41] = a), (y[42] = l))
            : (l = y[42]),
          y[43] !== n || y[44] !== l
            ? ((o = (0, r.jsx)("div", { "aria-hidden": !0, className: n, children: l })),
              (y[43] = n),
              (y[44] = l),
              (y[45] = o))
            : (o = y[45]),
          y[46] !== x || y[47] !== v || y[48] !== w
            ? ((d = w
                ? (0, r.jsx)("div", {
                    className: (0, s.A)(
                      "truncate text-sm leading-5",
                      x ? "font-bold" : "font-medium",
                      v && "text-media-foreground",
                    ),
                    children: w,
                  })
                : null),
              (y[46] = x),
              (y[47] = v),
              (y[48] = w),
              (y[49] = d))
            : (d = y[49]))
        let C = x ? "text-sm text-secondary" : "text-suggestion-description",
          E = !x && (v ? "text-media-foreground" : "text-tertiary")
        ;(y[50] !== C || y[51] !== E
          ? ((c = (0, s.A)("truncate", C, E)), (y[50] = C), (y[51] = E), (y[52] = c))
          : (c = y[52]),
          y[53] !== k || y[54] !== c
            ? ((u = (0, r.jsx)("div", { className: c, children: k })), (y[53] = k), (y[54] = c), (y[55] = u))
            : (u = y[55]),
          y[56] !== d || y[57] !== u
            ? ((m = (0, r.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col justify-center", children: [d, u] })),
              (y[56] = d),
              (y[57] = u),
              (y[58] = m))
            : (m = y[58]))
        let B = x && "ms-2 me-2"
        y[59] !== B ? ((p = (0, s.A)("flex shrink-0 items-center gap-2", B)), (y[59] = B), (y[60] = p)) : (p = y[60])
        let P = x ? null : G
        return (
          y[61] !== j || y[62] !== p || y[63] !== P
            ? ((f = (0, r.jsxs)("div", { className: p, children: [j, P] })),
              (y[61] = j),
              (y[62] = p),
              (y[63] = P),
              (y[64] = f))
            : (f = y[64]),
          y[65] !== W || y[66] !== $ || y[67] !== t || y[68] !== _ || y[69] !== o || y[70] !== m || y[71] !== f
            ? ((h = (0, r.jsxs)("aside", { "aria-live": W, className: t, role: $, children: [_, o, m, f] })),
              (y[65] = W),
              (y[66] = $),
              (y[67] = t),
              (y[68] = _),
              (y[69] = o),
              (y[70] = m),
              (y[71] = f),
              (y[72] = h))
            : (h = y[72]),
          y[73] !== e || y[74] !== h
            ? ((g = (0, r.jsx)("div", { className: e, children: h })), (y[73] = e), (y[74] = h), (y[75] = g))
            : (g = y[75]),
          g
        )
      }
      if ("status" === et) {
        let e, t
        return (
          y[76] !== k
            ? ((e = (0, r.jsx)("div", { className: "min-w-0 flex-1 break-words", children: k })),
              (y[76] = k),
              (y[77] = e))
            : (e = y[77]),
          y[78] !== W || y[79] !== U || y[80] !== $ || y[81] !== e
            ? ((t = (0, r.jsxs)("aside", {
                "aria-live": W,
                className:
                  "flex items-center gap-2 rounded-lg bg-secondary-soft px-3 py-3 text-sm text-default select-none",
                role: $,
                children: [U, e],
              })),
              (y[78] = W),
              (y[79] = U),
              (y[80] = $),
              (y[81] = e),
              (y[82] = t))
            : (t = y[82]),
          t
        )
      }
      if ("errorNotice" === et) {
        let e,
          t,
          n,
          i = $ ?? "alert"
        return (
          y[83] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(o.zOs, { "aria-hidden": !0, className: "shrink-0" })), (y[83] = e))
            : (e = y[83]),
          y[84] !== k
            ? ((t = (0, r.jsx)("div", { className: "min-w-0 break-words", children: k })), (y[84] = k), (y[85] = t))
            : (t = y[85]),
          y[86] !== W || y[87] !== i || y[88] !== t
            ? ((n = (0, r.jsxs)("div", {
                role: i,
                "aria-live": W,
                className:
                  "flex items-start gap-3 rounded-2xl border border-border-danger-surface bg-background-danger-surface p-4 text-sm/5 font-medium text-danger",
                children: [e, t],
              })),
              (y[86] = W),
              (y[87] = i),
              (y[88] = t),
              (y[89] = n))
            : (n = y[89]),
          n
        )
      }
      if ("informationNotice" === et) {
        let e, t, n, i, s
        return (
          y[90] !== D || y[91] !== U || y[92] !== T
            ? ((e = U ?? (D ? (0, r.jsx)(D, { className: T }) : null)),
              (y[90] = D),
              (y[91] = U),
              (y[92] = T),
              (y[93] = e))
            : (e = y[93]),
          y[94] !== w
            ? ((t = w ? (0, r.jsx)("h3", { className: "font-semibold", children: w }) : null), (y[94] = w), (y[95] = t))
            : (t = y[95]),
          y[96] !== k
            ? ((n = (0, r.jsx)("div", { className: "text-secondary", children: k })), (y[96] = k), (y[97] = n))
            : (n = y[97]),
          y[98] !== t || y[99] !== n
            ? ((i = (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1.5 pt-0.5 break-words",
                children: [t, n],
              })),
              (y[98] = t),
              (y[99] = n),
              (y[100] = i))
            : (i = y[100]),
          y[101] !== W || y[102] !== $ || y[103] !== e || y[104] !== i
            ? ((s = (0, r.jsxs)("aside", {
                "aria-live": W,
                className:
                  "flex items-start gap-3 rounded-2xl bg-secondary-soft p-4 text-sm leading-5 text-default dark:bg-surface-tertiary",
                role: $,
                children: [e, i],
              })),
              (y[101] = W),
              (y[102] = $),
              (y[103] = e),
              (y[104] = i),
              (y[105] = s))
            : (s = y[105]),
          s
        )
      }
      if ("profilePromotion" === et) {
        let e, t, n, i, s, a, l
        return (
          y[106] !== w
            ? ((e = w && (0, r.jsx)("h3", { className: "font-medium", children: w })), (y[106] = w), (y[107] = e))
            : (e = y[107]),
          y[108] !== k
            ? ((t = (0, r.jsx)("div", { className: "text-secondary", children: k })), (y[108] = k), (y[109] = t))
            : (t = y[109]),
          y[110] !== e || y[111] !== t
            ? ((n = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [e, t] })),
              (y[110] = e),
              (y[111] = t),
              (y[112] = n))
            : (n = y[112]),
          y[113] !== j || y[114] !== n
            ? ((i = (0, r.jsxs)("div", {
                className:
                  "flex min-w-0 flex-1 flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-4",
                children: [n, j],
              })),
              (y[113] = j),
              (y[114] = n),
              (y[115] = i))
            : (i = y[115]),
          y[116] !== U || y[117] !== i
            ? ((s = (0, r.jsxs)("div", { className: "flex min-w-0 flex-1 gap-3 md:items-center", children: [U, i] })),
              (y[116] = U),
              (y[117] = i),
              (y[118] = s))
            : (s = y[118]),
          y[119] !== G
            ? ((a = (0, r.jsx)("div", { className: "shrink-0 self-center", children: G })), (y[119] = G), (y[120] = a))
            : (a = y[120]),
          y[121] !== W || y[122] !== $ || y[123] !== s || y[124] !== a
            ? ((l = (0, r.jsxs)("aside", {
                "aria-live": W,
                role: $,
                className:
                  "flex w-full items-start gap-4 rounded-3xl border border-default bg-surface p-4 text-sm leading-5 tracking-[-0.15px] text-default md:min-h-[94px] md:items-center",
                children: [s, a],
              })),
              (y[121] = W),
              (y[122] = $),
              (y[123] = s),
              (y[124] = a),
              (y[125] = l))
            : (l = y[125]),
          l
        )
      }
      if ("promotion" === et) {
        let e,
          t,
          n,
          i,
          a = G ? "px-14" : "px-4"
        return (
          y[126] !== a
            ? ((e = (0, s.A)(
                "relative flex min-h-12 w-full shrink-0 items-center justify-center gap-2 bg-(--blue-500) py-3 text-center text-sm font-medium text-white select-none md:min-h-13 md:text-base",
                a,
              )),
              (y[126] = a),
              (y[127] = e))
            : (e = y[127]),
          y[128] !== k
            ? ((t = (0, r.jsx)("div", { className: "min-w-0 break-words", children: k })), (y[128] = k), (y[129] = t))
            : (t = y[129]),
          y[130] !== G
            ? ((n = G
                ? (0, r.jsx)("div", { className: "absolute end-3 top-1/2 -translate-y-1/2", children: G })
                : null),
              (y[130] = G),
              (y[131] = n))
            : (n = y[131]),
          y[132] !== W || y[133] !== U || y[134] !== $ || y[135] !== e || y[136] !== t || y[137] !== n
            ? ((i = (0, r.jsxs)("aside", { "aria-live": W, className: e, role: $, children: [U, t, n] })),
              (y[132] = W),
              (y[133] = U),
              (y[134] = $),
              (y[135] = e),
              (y[136] = t),
              (y[137] = n),
              (y[138] = i))
            : (i = y[138]),
          i
        )
      }
      if ("strip" === et) {
        let e,
          t,
          n,
          i,
          a = "error" === ee ? "bg-background-danger-surface/20 text-danger" : "bg-info-surface text-default"
        return (
          y[139] !== a
            ? ((e = (0, s.A)(
                "flex min-h-11 w-full shrink-0 items-center justify-center gap-2 px-4 py-2 text-sm select-none",
                a,
              )),
              (y[139] = a),
              (y[140] = e))
            : (e = y[140]),
          y[141] !== w
            ? ((t = w ? (0, r.jsxs)("span", { className: "font-semibold", children: [w, " "] }) : null),
              (y[141] = w),
              (y[142] = t))
            : (t = y[142]),
          y[143] !== k || y[144] !== t
            ? ((n = (0, r.jsxs)("div", { className: "min-w-0 text-center break-words", children: [t, k] })),
              (y[143] = k),
              (y[144] = t),
              (y[145] = n))
            : (n = y[145]),
          y[146] !== W || y[147] !== U || y[148] !== $ || y[149] !== e || y[150] !== n
            ? ((i = (0, r.jsxs)("aside", { "aria-live": W, className: e, role: $, children: [U, n] })),
              (y[146] = W),
              (y[147] = U),
              (y[148] = $),
              (y[149] = e),
              (y[150] = n),
              (y[151] = i))
            : (i = y[151]),
          i
        )
      }
      let el = "page" === et,
        eo = "pageNotice" === et,
        ed = "insetNotice" === et,
        ec = "authUpsell" === et,
        eu = ec ? u : c.A
      el || ed ? (t = "dialogAction") : eo && (t = "dialog")
      let em = "callout" === et,
        ep = "embedded" === et,
        ef = "beacon" === et || ec,
        eh = "privacyNotice" === et,
        eg = el || "catalog" === et || "announcement" === et || "announcementInset" === et || "settings" === et,
        ex = "inline" === en,
        ev = "vertical" === en,
        eb = "verticalIcon" === en,
        ey = "warningCallout" === en,
        ew = "horizontal" === en && er,
        ek = ew && ("default" === et || em || ep),
        ej = ey && er
      if (ef) n = eu.ctas
      else {
        let e,
          t = es && "min-w-0 shrink flex-wrap justify-end",
          r = !es && (ev ? "w-full justify-end" : "shrink-0"),
          i = "horizontal" === en && !eo && !ed && !eg && (ea ? "mt-0 min-w-fit" : "mt-2 min-w-fit @min-[560px]:mt-0"),
          a = eg && "max-w-full",
          l = "success" === ee && "successCta-DS7DTt",
          o = ey && ei && "border-default border-s ps-3",
          d =
            ek &&
            (ea
              ? "@max-[400px]:order-last @max-[400px]:w-full @max-[400px]:min-w-0 @max-[400px]:flex-wrap @max-[400px]:justify-center"
              : "@max-[560px]:order-last @max-[560px]:w-full @max-[560px]:min-w-0 @max-[560px]:flex-wrap @max-[560px]:justify-center @min-[560px]:ms-5"),
          c =
            !ek &&
            ew &&
            !eo &&
            !eg &&
            "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center",
          u =
            ej &&
            "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center",
          m =
            ej &&
            ei &&
            "[@container_(max-width:400px)]:border-t [@container_(max-width:400px)]:border-s-0 [@container_(max-width:400px)]:pt-2 [@container_(max-width:400px)]:ps-0"
        ;(y[152] !== t ||
        y[153] !== r ||
        y[154] !== i ||
        y[155] !== a ||
        y[156] !== l ||
        y[157] !== o ||
        y[158] !== d ||
        y[159] !== c ||
        y[160] !== u ||
        y[161] !== m
          ? ((e = (0, s.A)("flex gap-2", t, r, i, a, l, o, d, c, u, m)),
            (y[152] = t),
            (y[153] = r),
            (y[154] = i),
            (y[155] = a),
            (y[156] = l),
            (y[157] = o),
            (y[158] = d),
            (y[159] = c),
            (y[160] = u),
            (y[161] = m),
            (y[162] = e))
          : (e = y[162]),
          (n = e))
      }
      y[163] !== ea ||
      y[164] !== n ||
      y[165] !== j ||
      y[166] !== P ||
      y[167] !== ef ||
      y[168] !== Z ||
      y[169] !== eo ||
      y[170] !== J ||
      y[171] !== H ||
      y[172] !== E ||
      y[173] !== S ||
      y[174] !== C ||
      y[175] !== I ||
      y[176] !== t ||
      y[177] !== _ ||
      y[178] !== M ||
      y[179] !== B
        ? ((m = j
            ? (0, r.jsx)(d.V, {
                value: ef && ea ? "eyebrow" : "default",
                children: (0, r.jsx)("div", { className: n, children: j }),
              })
            : (_ || B || P) &&
              (0, r.jsxs)("div", {
                className: n,
                children: [
                  _ &&
                    (0, r.jsx)(a.$, {
                      onClick: S,
                      size: t,
                      color: I ?? "outline",
                      className: "shrink-0",
                      disabled: J,
                      children: _,
                    }),
                  B &&
                    (0, r.jsx)(a.$, {
                      onClick: C,
                      size: eo ? "dialog" : void 0,
                      color: M ?? "ghost",
                      className: "shrink-0",
                      disabled: H,
                      children: B,
                    }),
                  P &&
                    (0, r.jsx)(a.$, { onClick: E, color: "danger", className: "shrink-0", disabled: Z, children: P }),
                ],
              })),
          (y[163] = ea),
          (y[164] = n),
          (y[165] = j),
          (y[166] = P),
          (y[167] = ef),
          (y[168] = Z),
          (y[169] = eo),
          (y[170] = J),
          (y[171] = H),
          (y[172] = E),
          (y[173] = S),
          (y[174] = C),
          (y[175] = I),
          (y[176] = t),
          (y[177] = _),
          (y[178] = M),
          (y[179] = B),
          (y[180] = m))
        : (m = y[180])
      let eA = m
      if (ed) {
        let e, t
        return (
          y[181] !== k
            ? ((e = (0, r.jsx)("div", { className: "min-w-0 flex-1 text-secondary", children: k })),
              (y[181] = k),
              (y[182] = e))
            : (e = y[182]),
          y[183] !== W || y[184] !== eA || y[185] !== $ || y[186] !== e || y[187] !== G
            ? ((t = (0, r.jsxs)("aside", {
                "aria-live": W,
                role: $,
                className:
                  "flex w-full flex-wrap items-center gap-4 rounded-xl bg-secondary-soft px-4 py-3 text-sm text-default select-none",
                children: [e, eA, G],
              })),
              (y[183] = W),
              (y[184] = eA),
              (y[185] = $),
              (y[186] = e),
              (y[187] = G),
              (y[188] = t))
            : (t = y[188]),
          t
        )
      }
      if (el) {
        let e, t, n, i, s, a, l, o
        return (
          y[189] !== D || y[190] !== U || y[191] !== T
            ? ((e = U ?? (D ? (0, r.jsx)(D, { className: T }) : null)),
              (y[189] = D),
              (y[190] = U),
              (y[191] = T),
              (y[192] = e))
            : (e = y[192]),
          y[193] !== e
            ? ((t = (0, r.jsx)("div", { className: "hidden shrink-0 text-warning md:block", children: e })),
              (y[193] = e),
              (y[194] = t))
            : (t = y[194]),
          y[195] !== w
            ? ((n = (0, r.jsx)("div", { className: "text-lg font-semibold", children: w })), (y[195] = w), (y[196] = n))
            : (n = y[196]),
          y[197] !== t || y[198] !== n
            ? ((i = (0, r.jsxs)("div", { className: "flex items-center gap-4", children: [t, n] })),
              (y[197] = t),
              (y[198] = n),
              (y[199] = i))
            : (i = y[199]),
          y[200] !== k
            ? ((s = (0, r.jsx)("div", { className: "text-base md:ms-8", children: k })), (y[200] = k), (y[201] = s))
            : (s = y[201]),
          y[202] !== i || y[203] !== s
            ? ((a = (0, r.jsxs)("div", { className: "mx-2 min-w-0 grow md:mx-4", children: [i, s] })),
              (y[202] = i),
              (y[203] = s),
              (y[204] = a))
            : (a = y[204]),
          y[205] !== eA || y[206] !== a || y[207] !== G
            ? ((l = (0, r.jsxs)("div", {
                className: "mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-2 py-4 md:px-6 lg:py-6",
                children: [a, eA, G],
              })),
              (y[205] = eA),
              (y[206] = a),
              (y[207] = G),
              (y[208] = l))
            : (l = y[208]),
          y[209] !== W || y[210] !== $ || y[211] !== l
            ? ((o = (0, r.jsx)("aside", {
                "aria-live": W,
                role: $,
                className: "w-full shrink-0 bg-surface-tertiary text-default select-none",
                children: l,
              })),
              (y[209] = W),
              (y[210] = $),
              (y[211] = l),
              (y[212] = o))
            : (o = y[212]),
          o
        )
      }
      if (eo) {
        let e,
          t,
          n,
          i,
          a,
          l = "infoAccent" === ee ? "border-text-info/40 bg-info-surface" : "border-default bg-surface"
        ;(y[213] !== l
          ? ((e = (0, s.A)(
              "flex min-h-13 w-full flex-wrap items-center gap-2 border-b px-5 py-2 text-sm text-default select-none md:flex-nowrap",
              l,
            )),
            (y[213] = l),
            (y[214] = e))
          : (e = y[214]),
          y[215] !== D || y[216] !== U
            ? ((t = U ?? (D ? (0, r.jsx)(D, {}) : null)), (y[215] = D), (y[216] = U), (y[217] = t))
            : (t = y[217]))
        let o = !ew && "md:truncate"
        return (
          y[218] !== o ? ((n = (0, s.A)("min-w-0 flex-1 leading-5", o)), (y[218] = o), (y[219] = n)) : (n = y[219]),
          y[220] !== k || y[221] !== n
            ? ((i = (0, r.jsx)("div", { className: n, children: k })), (y[220] = k), (y[221] = n), (y[222] = i))
            : (i = y[222]),
          y[223] !== W || y[224] !== eA || y[225] !== $ || y[226] !== e || y[227] !== t || y[228] !== i || y[229] !== G
            ? ((a = (0, r.jsxs)("aside", { "aria-live": W, role: $, className: e, children: [t, i, eA, G] })),
              (y[223] = W),
              (y[224] = eA),
              (y[225] = $),
              (y[226] = e),
              (y[227] = t),
              (y[228] = i),
              (y[229] = G),
              (y[230] = a))
            : (a = y[230]),
          a
        )
      }
      if (eh) {
        let e, t, n, i, a
        y[231] !== D || y[232] !== U || y[233] !== T
          ? ((e =
              U ??
              (D
                ? (0, r.jsx)(D, { className: (0, s.A)("text-secondary", T) })
                : (0, r.jsx)(o.zOs, { className: (0, s.A)("text-secondary", T) }))),
            (y[231] = D),
            (y[232] = U),
            (y[233] = T),
            (y[234] = e))
          : (e = y[234])
        let l = e
        return (
          y[235] !== w
            ? ((t = w ? (0, r.jsx)("div", { className: "text-xs font-medium text-default", children: w }) : null),
              (y[235] = w),
              (y[236] = t))
            : (t = y[236]),
          y[237] !== k
            ? ((n = (0, r.jsx)("div", { className: "text-xs text-secondary", children: k })),
              (y[237] = k),
              (y[238] = n))
            : (n = y[238]),
          y[239] !== eA || y[240] !== t || y[241] !== n
            ? ((i = (0, r.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [t, n, eA] })),
              (y[239] = eA),
              (y[240] = t),
              (y[241] = n),
              (y[242] = i))
            : (i = y[242]),
          y[243] !== W || y[244] !== l || y[245] !== $ || y[246] !== i || y[247] !== G
            ? ((a = (0, r.jsxs)("aside", {
                "aria-live": W,
                className: "flex items-center gap-3 rounded-xl bg-background-secondary-soft-alpha p-3 select-none",
                role: $,
                children: [l, i, G],
              })),
              (y[243] = W),
              (y[244] = l),
              (y[245] = $),
              (y[246] = i),
              (y[247] = G),
              (y[248] = a))
            : (a = y[248]),
          a
        )
      }
      if (ef) {
        let e,
          t,
          n,
          i,
          a,
          l,
          o = ea && c.A.composer
        return (
          y[249] !== o ? ((e = (0, s.A)(c.A.container, o)), (y[249] = o), (y[250] = e)) : (e = y[250]),
          y[251] !== k || y[252] !== w
            ? ((t =
                null == w
                  ? k
                  : (0, r.jsx)("div", {
                      className: (0, s.A)(c.A.body, c.A.noVisual),
                      children: (0, r.jsxs)("div", {
                        className: c.A.copy,
                        children: [
                          (0, r.jsx)("h3", { className: c.A.title, children: w }),
                          (0, r.jsx)("div", { className: c.A.description, children: k }),
                        ],
                      }),
                    })),
              (y[251] = k),
              (y[252] = w),
              (y[253] = t))
            : (t = y[253]),
          y[254] !== eu.content || y[255] !== t
            ? ((n = (0, r.jsx)("div", { className: eu.content, children: t })),
              (y[254] = eu.content),
              (y[255] = t),
              (y[256] = n))
            : (n = y[256]),
          y[257] !== G
            ? ((i = G ? (0, r.jsx)("div", { className: c.A.dismiss, children: G }) : null), (y[257] = G), (y[258] = i))
            : (i = y[258]),
          y[259] !== W || y[260] !== eu.surface || y[261] !== eA || y[262] !== $ || y[263] !== n || y[264] !== i
            ? ((a = (0, r.jsxs)("aside", { "aria-live": W, className: eu.surface, role: $, children: [n, eA, i] })),
              (y[259] = W),
              (y[260] = eu.surface),
              (y[261] = eA),
              (y[262] = $),
              (y[263] = n),
              (y[264] = i),
              (y[265] = a))
            : (a = y[265]),
          y[266] !== e || y[267] !== a
            ? ((l = (0, r.jsx)("div", { className: e, children: a })), (y[266] = e), (y[267] = a), (y[268] = l))
            : (l = y[268]),
          l
        )
      }
      if (
        y[269] !== D ||
        y[270] !== W ||
        y[271] !== ea ||
        y[272] !== k ||
        y[273] !== eA ||
        y[274] !== X ||
        y[275] !== A ||
        y[276] !== U ||
        y[277] !== T ||
        y[278] !== eg ||
        y[279] !== em ||
        y[280] !== ep ||
        y[281] !== ex ||
        y[282] !== ev ||
        y[283] !== eb ||
        y[284] !== ey ||
        y[285] !== $ ||
        y[286] !== ej ||
        y[287] !== ek ||
        y[288] !== w ||
        y[289] !== G ||
        y[290] !== ee ||
        y[291] !== et
      ) {
        x = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            i,
            a,
            l,
            o,
            d,
            c,
            u,
            m,
            v,
            b,
            j,
            N,
            S,
            _ = {
              caution: "border-default text-default",
              error: "border-text-danger/20 text-danger",
              infoAccent: "border-text-info/40 text-default",
              normal: (0, s.A)(
                "text-default",
                em && "border-strong",
                "settings" === et && "border-default",
                !em && "settings" !== et && "border-primary-outline",
              ),
              success: "border-text-success/30 text-success-soft-alpha",
              warning: "border-text-warning/30 text-default",
            }[ee],
            I = ea ? "bg-surface-tertiary" : "bg-transparent"
          if (
            y[297] !== D ||
            y[298] !== U ||
            y[299] !== T ||
            y[300] !== eg ||
            y[301] !== em ||
            y[302] !== ey ||
            y[303] !== I ||
            y[304] !== ee ||
            y[305] !== et
          ) {
            let i,
              a,
              l = {
                caution: "bg-background-caution-solid/15",
                error: "bg-background-danger-surface/20",
                infoAccent: "bg-primary-soft",
                normal: {
                  callout: "bg-callout-surface",
                  announcement: "bg-surface-elevated",
                  catalog: "bg-surface-elevated",
                  announcementInset: "bg-surface-tertiary",
                  settings: "bg-surface",
                  embedded: "bg-transparent",
                  default: I,
                }[et],
                success: "bg-success-soft-alpha",
                warning: ey ? "bg-background-warning-surface/15" : "bg-background-warning-surface/30",
              }[ee],
              o = !em && !eg && "icon-sm shrink-0",
              d = eg && "icon-md shrink-0 text-secondary",
              c = "infoAccent" === ee && "text-info",
              u = "success" === ee && "text-success-soft-alpha",
              m = "warning" === ee && "text-warning"
            y[309] !== T || y[310] !== o || y[311] !== d || y[312] !== c || y[313] !== u || y[314] !== m
              ? ((i = (0, s.A)(o, d, c, u, m, T)),
                (y[309] = T),
                (y[310] = o),
                (y[311] = d),
                (y[312] = c),
                (y[313] = u),
                (y[314] = m),
                (y[315] = i))
              : (i = y[315])
            let p = i
            ;(y[316] !== D || y[317] !== U || y[318] !== p
              ? ((a = U ?? (D ? (0, r.jsx)(D, { className: p }) : null)),
                (y[316] = D),
                (y[317] = U),
                (y[318] = p),
                (y[319] = a))
              : (a = y[319]),
              (e = a),
              (t = !0),
              (n = (0, s.A)("absolute inset-0 -z-10", l)),
              (y[297] = D),
              (y[298] = U),
              (y[299] = T),
              (y[300] = eg),
              (y[301] = em),
              (y[302] = ey),
              (y[303] = I),
              (y[304] = ee),
              (y[305] = et),
              (y[306] = e),
              (y[307] = t),
              (y[308] = n))
          } else ((e = y[306]), (t = y[307]), (n = y[308]))
          ;(y[320] !== t || y[321] !== n
            ? ((i = (0, r.jsx)("div", { "aria-hidden": t, className: n })), (y[320] = t), (y[321] = n), (y[322] = i))
            : (i = y[322]),
            (f = i))
          let M = (0, s.A)(
            "relative isolate flex w-full overflow-hidden",
            ep ? "bg-transparent" : "bg-surface",
            "catalog" !== et && !ep && "border",
            !eg && "text-pretty",
            "catalog" === et && "text-document leading-5",
            "catalog" !== et && ("announcementInset" === et ? "text-base" : "text-sm"),
            {
              callout: "rounded-md px-4 py-3",
              announcement: "rounded-3xl px-5 py-4 shadow-xs",
              catalog: (0, s.A)("px-5 py-4", "catalog-Qac5fp"),
              announcementInset: "rounded-3xl px-5 py-4 shadow-xs",
              settings: "rounded-2xl py-4 ps-5 pe-3",
              embedded: "py-4 ps-5 pe-3",
              default: (0, s.A)(
                "shadow-[0_0_2px_0_rgb(0_0_0/5%),0_4px_6px_0_rgb(0_0_0/2%)] lg:mx-auto",
                ea
                  ? "-mb-9 rounded-t-[32px] rounded-b-none border-b-0 ps-4 pe-2.5 pt-2.5 pb-9 electron:border electron:border-b-0"
                  : (0, s.A)(
                      "rounded-3xl electron:border-0 electron:ring-[0.5px] electron:ring-border-strong",
                      "compact" === X ? "py-2 ps-3 pe-2" : "py-4 ps-5 pe-3",
                    ),
              ),
            }[et],
            _,
            ey &&
              "warning" === ee &&
              "before:bg-text-warning/60 before:absolute before:inset-y-0 before:start-0 before:w-0.5",
          )
          y[323] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = {
                announcementInset: "text-base font-semibold",
                announcement: "text-sm font-medium",
                catalog: "text-document leading-5 font-medium",
                settings: "text-sm font-medium",
                callout: "text-sm font-medium",
                embedded: "text-sm font-bold",
                default: "text-sm font-bold",
              }),
              (y[323] = a))
            : (a = y[323])
          let C = a[et],
            E = em ? "gap-1" : "gap-1.5",
            B = em || eg || ey || ea ? "text-secondary" : "text-codex-description"
          ;("error" === ee ? (B = "text-danger") : "success" === ee && (B = "text-success-soft-alpha"),
            y[324] !== e || y[325] !== w || y[326] !== C
              ? ((l = () =>
                  (0, r.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [e, w && (0, r.jsx)("h3", { className: C, children: w })],
                  })),
                (y[324] = e),
                (y[325] = w),
                (y[326] = C),
                (y[327] = l))
              : (l = y[327]))
          let P = l,
            z = (e) =>
              (0, r.jsx)("div", {
                className: (0, s.A)("flex min-w-0 flex-1 flex-col", e),
                children: (0, r.jsx)("div", {
                  className: (0, s.A)(
                    "min-w-0 flex-1",
                    ex && "truncate",
                    !em && !eg && "electron:leading-relaxed",
                    eg && "leading-5",
                    ("announcement" === et || "catalog" === et || "settings" === et) && "tracking-announcement-body",
                    !em && !eg && !ex && "text-pretty",
                    (w || ea) && B,
                  ),
                  children: k,
                }),
              })
          if (ev) {
            let t
            ;(y[328] !== e || y[329] !== P || y[330] !== w
              ? ((t = (e ?? w) && P()), (y[328] = e), (y[329] = P), (y[330] = w), (y[331] = t))
              : (t = y[331]),
              (x = (0, r.jsxs)("aside", {
                "aria-live": W,
                className: (0, s.A)(M, "flex-col", E),
                role: $,
                children: [f, t, z(E), eA],
              })))
            break e
          }
          if (eb) {
            let t,
              n,
              i,
              a = (0, s.A)(M, "gap-3", (em || "settings" === et) && "items-start")
            ;(y[332] !== em || y[333] !== e || y[334] !== et
              ? ((t =
                  null != e
                    ? (0, r.jsx)("div", {
                        className: em || "settings" === et ? "flex h-lh items-center" : "flex items-center self-center",
                        children: e,
                      })
                    : null),
                (y[332] = em),
                (y[333] = e),
                (y[334] = et),
                (y[335] = t))
              : (t = y[335]),
              y[336] !== E
                ? ((n = (0, s.A)("flex min-w-0 flex-1 flex-col", E)), (y[336] = E), (y[337] = n))
                : (n = y[337]),
              y[338] !== w || y[339] !== C
                ? ((i = w ? (0, r.jsx)("h3", { className: C, children: w }) : null),
                  (y[338] = w),
                  (y[339] = C),
                  (y[340] = i))
                : (i = y[340]),
              (x = (0, r.jsxs)("aside", {
                "aria-live": W,
                className: a,
                role: $,
                children: [f, t, (0, r.jsxs)("div", { className: n, children: [i, z(), eA] })],
              })))
            break e
          }
          if (ey || (ek && eA)) {
            let t,
              n,
              i,
              a = (0, s.A)(
                M,
                ek ? "items-start gap-x-3 @min-[560px]:items-center" : "items-center gap-3",
                ek && ea && "@max-[400px]:flex-wrap @max-[400px]:gap-y-2 @max-[400px]:px-3",
                ek &&
                  !ea &&
                  ("compact" === X
                    ? "@max-[560px]:flex-wrap @max-[560px]:px-2.5"
                    : "@max-[560px]:flex-wrap @max-[560px]:px-4"),
                ej &&
                  "[@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:items-start [@container_(max-width:400px)]:gap-2",
              ),
              l = ey && "gap-0.5"
            ;(y[341] !== l
              ? ((t = (0, s.A)("flex min-w-0 flex-1 flex-col", l)), (y[341] = l), (y[342] = t))
              : (t = y[342]),
              y[343] !== ek || y[344] !== w || y[345] !== C
                ? ((n =
                    w && (0, r.jsx)("h3", { className: ek ? C : "text-sm font-semibold text-pretty", children: w })),
                  (y[343] = ek),
                  (y[344] = w),
                  (y[345] = C),
                  (y[346] = n))
                : (n = y[346]),
              y[347] !== ek || y[348] !== G
                ? ((i =
                    ek &&
                    G &&
                    (0, r.jsx)("div", {
                      className: "flex shrink-0 items-start @min-[560px]:self-center",
                      children: G,
                    })),
                  (y[347] = ek),
                  (y[348] = G),
                  (y[349] = i))
                : (i = y[349]),
              (x = (0, r.jsx)("div", {
                className: "@container w-full",
                children: (0, r.jsxs)("aside", {
                  "aria-live": W,
                  className: a,
                  role: $,
                  children: [f, e, (0, r.jsxs)("div", { className: t, children: [n, z()] }), eA, i],
                }),
              })))
            break e
          }
          let R = eg ? "items-center" : "items-start @min-[560px]:items-center"
          ;(y[350] !== R ? ((o = (0, s.A)("flex h-full w-full gap-3", R)), (y[350] = R), (y[351] = o)) : (o = y[351]),
            y[352] !== eg || y[353] !== e
              ? ((d =
                  null != e &&
                  (0, r.jsx)("div", { className: (0, s.A)("flex items-start", !eg && "pt-0.5"), children: e })),
                (y[352] = eg),
                (y[353] = e),
                (y[354] = d))
              : (d = y[354]))
          let V = ex && "items-center justify-between gap-3",
            O = !ex && eg && "flex-wrap items-center gap-x-8 gap-y-3",
            Y = !ex && !eg && "flex-col",
            q =
              !ex &&
              !eg &&
              ea &&
              "@min-[400px]:flex-row @min-[400px]:items-start @min-[400px]:justify-between @min-[400px]:gap-3",
            F =
              !ex &&
              !eg &&
              !ea &&
              "@min-[560px]:flex-row @min-[560px]:items-center @min-[560px]:justify-between @min-[560px]:gap-8"
          y[355] !== V || y[356] !== O || y[357] !== Y || y[358] !== q || y[359] !== F
            ? ((c = (0, s.A)("flex min-w-0 grow", V, O, Y, q, F)),
              (y[355] = V),
              (y[356] = O),
              (y[357] = Y),
              (y[358] = q),
              (y[359] = F),
              (y[360] = c))
            : (c = y[360])
          let K = eg ? "grow basis-64 wrap-break-word" : "flex-1"
          ;(y[361] !== K ? ((u = (0, s.A)("flex min-w-0 flex-col", K)), (y[361] = K), (y[362] = u)) : (u = y[362]),
            y[363] !== w || y[364] !== C
              ? ((m = w && (0, r.jsx)("h3", { className: C, children: w })), (y[363] = w), (y[364] = C), (y[365] = m))
              : (m = y[365]))
          let L = z()
          ;(y[366] !== u || y[367] !== m || y[368] !== L
            ? ((v = (0, r.jsxs)("div", { className: u, children: [m, L] })),
              (y[366] = u),
              (y[367] = m),
              (y[368] = L),
              (y[369] = v))
            : (v = y[369]),
            y[370] !== eA || y[371] !== c || y[372] !== v
              ? ((b = (0, r.jsxs)("div", { className: c, children: [v, eA] })),
                (y[370] = eA),
                (y[371] = c),
                (y[372] = v),
                (y[373] = b))
              : (b = y[373]),
            y[374] !== o || y[375] !== d || y[376] !== b
              ? ((j = (0, r.jsxs)("div", { className: o, children: [d, b] })),
                (y[374] = o),
                (y[375] = d),
                (y[376] = b),
                (y[377] = j))
              : (j = y[377]),
            y[378] !== G
              ? ((N = G
                  ? (0, r.jsx)("div", { className: "flex shrink-0 items-start @min-[560px]:self-center", children: G })
                  : null),
                (y[378] = G),
                (y[379] = N))
              : (N = y[379]),
            y[380] !== j || y[381] !== N
              ? ((S = (0, r.jsxs)(r.Fragment, { children: [j, N] })), (y[380] = j), (y[381] = N), (y[382] = S))
              : (S = y[382]),
            (p = S),
            (h = W),
            (g = (0, s.A)(M, "@container items-start gap-4", null != A && "flex-col")))
        }
        ;((y[269] = D),
          (y[270] = W),
          (y[271] = ea),
          (y[272] = k),
          (y[273] = eA),
          (y[274] = X),
          (y[275] = A),
          (y[276] = U),
          (y[277] = T),
          (y[278] = eg),
          (y[279] = em),
          (y[280] = ep),
          (y[281] = ex),
          (y[282] = ev),
          (y[283] = eb),
          (y[284] = ey),
          (y[285] = $),
          (y[286] = ej),
          (y[287] = ek),
          (y[288] = w),
          (y[289] = G),
          (y[290] = ee),
          (y[291] = et),
          (y[292] = p),
          (y[293] = f),
          (y[294] = h),
          (y[295] = g),
          (y[296] = x))
      } else ((p = y[292]), (f = y[293]), (h = y[294]), (g = y[295]), (x = y[296]))
      return x !== Symbol.for("react.early_return_sentinel")
        ? x
        : (y[383] !== p || y[384] !== A
            ? ((v = null != A ? (0, r.jsx)("div", { className: "flex w-full items-start gap-4", children: p }) : p),
              (y[383] = p),
              (y[384] = A),
              (y[385] = v))
            : (v = y[385]),
          y[386] !== A || y[387] !== $ || y[388] !== f || y[389] !== h || y[390] !== g || y[391] !== v
            ? ((b = (0, r.jsxs)("aside", { "aria-live": h, className: g, role: $, children: [f, v, A] })),
              (y[386] = A),
              (y[387] = $),
              (y[388] = f),
              (y[389] = h),
              (y[390] = g),
              (y[391] = v),
              (y[392] = b))
            : (b = y[392]),
          b)
    }
  },
  PD37(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57")
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            a,
            l,
            o,
            d,
            c,
            u,
            m = (0, i.c)(17)
          m[0] !== e
            ? (({ children: t, className: n, tone: l, ...a } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = n),
              (m[3] = a),
              (m[4] = l))
            : ((t = m[1]), (n = m[2]), (a = m[3]), (l = m[4]))
          let p = void 0 === l ? "accent" : l,
            f = "neutral" === p ? "bg-surface/80" : "bg-codex-drop-overlay/60"
          m[5] !== n || m[6] !== f
            ? ((o = (0, s.A)(
                "pointer-events-none absolute inset-0 z-40 flex items-center justify-center select-none",
                f,
                n,
              )),
              (m[5] = n),
              (m[6] = f),
              (m[7] = o))
            : (o = m[7])
          let h = "neutral" === p ? "bg-surface-elevated" : "bg-codex-drop-prompt"
          return (
            m[8] !== h
              ? ((d = (0, s.A)(
                  "inline-flex items-center gap-1 rounded-md border border-border/50 px-3 py-1 text-sm text-default shadow",
                  h,
                )),
                (m[8] = h),
                (m[9] = d))
              : (d = m[9]),
            m[10] !== t || m[11] !== d
              ? ((c = (0, r.jsx)("div", { className: d, children: t })), (m[10] = t), (m[11] = d), (m[12] = c))
              : (c = m[12]),
            m[13] !== a || m[14] !== o || m[15] !== c
              ? ((u = (0, r.jsx)("div", { className: o, ...a, children: c })),
                (m[13] = a),
                (m[14] = o),
                (m[15] = c),
                (m[16] = u))
              : (u = m[16]),
            u
          )
        },
      },
    )
  },
  uWmg(e, t, n) {
    n.d(t, { B: () => d })
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      a = n("LIss"),
      l = n("JzLx"),
      o = n("mT2q")
    function d(e) {
      let t,
        n,
        d,
        c,
        u,
        m,
        p,
        f,
        h,
        g,
        x,
        v = (0, i.c)(21),
        { icon: b, title: y, content: w, actions: k } = e
      return (
        v[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, s.A)("banner-cPVvz7", "@container")), (v[0] = t))
          : (t = v[0]),
        v[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = { opacity: 0, y: 8 }),
            (d = { opacity: 1, y: 0 }),
            (c = { type: "tween", ease: "easeInOut", duration: 0.25 }),
            (v[1] = n),
            (v[2] = d),
            (v[3] = c))
          : ((n = v[1]), (d = v[2]), (c = v[3])),
        v[4] !== b
          ? ((u =
              null != b &&
              (0, r.jsx)("span", {
                "aria-hidden": "true",
                className:
                  "-ms-2 me-3 flex size-8 shrink-0 items-center justify-center self-center rounded-full bg-callout-surface",
                children: b,
              })),
            (v[4] = b),
            (v[5] = u))
          : (u = v[5]),
        v[6] !== y
          ? ((m = y && (0, r.jsx)("h3", { className: "font-semibold", children: y })), (v[6] = y), (v[7] = m))
          : (m = v[7]),
        v[8] !== w
          ? ((p = (0, r.jsx)("div", { className: "description-izhOpC", children: w })), (v[8] = w), (v[9] = p))
          : (p = v[9]),
        v[10] !== m || v[11] !== p
          ? ((f = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [m, p] })),
            (v[10] = m),
            (v[11] = p),
            (v[12] = f))
          : (f = v[12]),
        v[13] !== k
          ? ((h =
              null != k &&
              (0, r.jsx)("div", {
                className: "mt-2 flex min-w-0 shrink-0 flex-wrap gap-2 pb-1 @min-[560px]:mt-0 @min-[560px]:pb-0",
                children: (0, r.jsx)(o.V, { value: "recovery", children: k }),
              })),
            (v[13] = k),
            (v[14] = h))
          : (h = v[14]),
        v[15] !== f || v[16] !== h
          ? ((g = (0, r.jsxs)("div", {
              className:
                "flex min-w-0 grow flex-col @min-[560px]:flex-row @min-[560px]:items-center @min-[560px]:justify-between @min-[560px]:gap-6",
              children: [f, h],
            })),
            (v[15] = f),
            (v[16] = h),
            (v[17] = g))
          : (g = v[17]),
        v[18] !== g || v[19] !== u
          ? ((x = (0, r.jsx)(l.G, {
              children: (0, r.jsxs)(a.P.aside, {
                "aria-live": "polite",
                className: t,
                role: "status",
                initial: n,
                animate: d,
                transition: c,
                children: [u, g],
              }),
            })),
            (v[18] = g),
            (v[19] = u),
            (v[20] = x))
          : (x = v[20]),
        x
      )
    }
  },
  mT2q(e, t, n) {
    let r = (0, n("zd8w").createContext)("default")
    n.d(t, {}, { V: r })
  },
  ULpA(e, t, n) {
    var r = n("zTeN"),
      i = n("tl5a"),
      s = n("vdpW"),
      a = n("OWtl"),
      l = n("eA5w")
    let o = (0, r.i1)(a.u, (e, { get: t }) => {
        let n = { hostId: (0, l.Y)(), threadId: e }
        return "ready" === t(s.fl, n) && t(s.M, n)?.length === 0 && t(i.zp, n)?.type === "idle"
      }),
      d = (0, r.i1)(
        a.u,
        (e, { get: t }) => {
          let n = { hostId: (0, l.Y)(), threadId: e }
          if ("ready" !== t(s.fl, n)) return null
          let r = t(s.M, n)?.at(-1),
            a = t(s.RN, r ?? null),
            o = t(s.OM, r ?? null)
          return null == a || null == o
            ? null
            : { id: a, status: o, isActive: "inProgress" === o || t(i.zp, n)?.type === "active" }
        },
        { isEqual: (e, t) => e?.id === t?.id && e?.status === t?.status && e?.isActive === t?.isActive },
      ),
      c = (0, r.i1)(
        a.u,
        (e, { get: t }) => t(i.zp, { hostId: (0, l.Y)(), threadId: e })?.type === "active" || t(d, e)?.isActive === !0,
      ),
      u = (0, r.i1)(a.u, ({ conversationId: e, savedTurnId: t }, { get: n }) => {
        let r = { hostId: (0, l.Y)(), threadId: e }
        if ("ready" !== n(s.fl, r) || n(s.as, r) || !0 !== n(s.uI, r) || n(i.zp, r)?.type !== "idle") return !1
        let a = n(s.M, r)
        if (null == a) return !1
        let o = a.findIndex((e) => n(s.RN, e) === t)
        if (o < 0) return !1
        for (let e = a.length - 1; e >= o; e--) {
          let t = a[e],
            r = n(s.OM, t)
          if ("completed" === r) return e < a.length - 1
          let i = n(s.hm, t),
            l = n(s.cC, t),
            o = n(s.Ko, t)
          if (
            "interrupted" !== r ||
            null == n(s.RN, t) ||
            n(s.yF, t) ||
            (o?.hookRuns?.length ?? 0) > 0 ||
            (o?.interruptedCommandExecutionItemIds?.length ?? 0) > 0 ||
            (o?.params.attachments?.length ?? 0) > 0 ||
            (o?.params.commentAttachments?.length ?? 0) > 0 ||
            o?.params.input.some((e) => "text" !== e.type) ||
            o?.diff != null ||
            null == i ||
            null == l ||
            i.length !== l.length ||
            l.some(({ itemId: e, type: r }, a) => {
              if (i[a] !== e) return !0
              if ("userMessage" === r) {
                let r = n(s.mz, { ...t, itemId: e })
                return r?.type !== "userMessage" || r.content.some((e) => "text" !== e.type)
              }
              if ("steeringUserMessage" === r) {
                let r = n(s.mz, { ...t, itemId: e })
                if (r?.type !== "steeringUserMessage") return !0
                let i = r.restoreMessage.context
                return (
                  "accepted" !== r.status ||
                  null == r.serverUserMessageId ||
                  r.input.some((e) => "text" !== e.type) ||
                  r.compareKey.imageCount > 0 ||
                  r.attachments.length > 0 ||
                  [
                    i.addedFiles,
                    i.fileAttachments,
                    i.uploadedFileAttachments,
                    i.pastedTextAttachments,
                    i.commentAttachments,
                    i.imageAttachments,
                    i.mcpAppModelContextAttachments,
                    i.appshotContexts,
                  ].some((e) => (e?.length ?? 0) > 0)
                )
              }
              return "steered" === r
                ? !l.some(({ itemId: r, type: i }) => {
                    if ("steeringUserMessage" !== i) return !1
                    let a = n(s.mz, { ...t, itemId: r })
                    return a?.type === "steeringUserMessage" && "accepted" === a.status && a.serverUserMessageId === e
                  })
                : "agentMessage" !== r && "reasoning" !== r
            })
          )
            break
        }
        return !1
      })
    n.d(t, {}, { fK: c, jI: u, pe: d, xp: o })
  },
  QvRd(e, t, n) {
    var r = n("ABep"),
      i = n("oyxz"),
      s = n("Qgfj")
    let a = {
      runtimeUpdateFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.runtimeUpdateFailed.title",
          defaultMessage: "Draft saved",
          description:
            "Banner title confirming that environment settings were saved even though applying them to the build environment did not succeed",
        },
        body: {
          id: "environmentSetup.banner.runtimeUpdateFailed.body",
          defaultMessage: "The build environment update needs attention. Reload the draft before retrying",
          description:
            "Recovery guidance after a successful draft save when applying the settings was rejected or its result is unknown",
        },
      }),
      settingsConflict: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.settingsConflict.title",
          defaultMessage: "Review your settings",
          description: "Banner title for a publishing conflict that may indicate changed settings or a draft in use",
        },
        body: {
          id: "environmentSetup.banner.settingsConflict.body",
          defaultMessage: "These settings changed or are in use. Review them before trying again.",
          description:
            "Publishing conflict guidance when the response does not distinguish changed settings from a lock",
        },
      }),
      reviewSettings: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.reviewSettings.title",
          defaultMessage: "Review your settings",
          description:
            "Banner title for invalid fields that must be corrected before environment settings can be saved",
        },
        body: {
          id: "environmentSetup.banner.reviewSettings.body",
          defaultMessage: "Fix the highlighted fields before saving.",
          description:
            "Banner explanation for invalid fields that must be corrected before environment settings can be saved",
        },
      }),
      saveFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveFailed.title",
          defaultMessage: "Couldn’t save changes",
          description: "Banner title for confirmed failure to save some environment changes",
        },
        body: {
          id: "environmentSetup.banner.saveFailed.body",
          defaultMessage: "Some changes couldn’t be saved. Review the details and try again.",
          description: "Banner explanation for confirmed failure to save some environment changes",
        },
      }),
      networkPolicyLimit: (0, s.YK)({
        title: {
          id: "threadEnvironment.networkPolicyLimit.title",
          defaultMessage: "This environment limits network access",
          description: "Title when a live network edit exceeds the source environment’s allowed access",
        },
        body: {
          id: "threadEnvironment.networkPolicyLimit.body",
          defaultMessage:
            "Turn off all public internet access or remove domains this environment doesn’t allow. For broader access, configure an environment in Settings → Codex Cloud and start a new thread with it.",
          description:
            "Recovery guidance when a thread requests broader network access than its source environment allows",
        },
      }),
      saveUnconfirmed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveUnconfirmed.title",
          defaultMessage: "Couldn’t confirm changes were saved",
          description:
            "Banner title for an unconfirmed save outcome; existing details explain whether retry may create another value",
        },
        body: {
          id: "environmentSetup.banner.saveUnconfirmed.body",
          defaultMessage: "Your edits are still here. Review the save details before trying again.",
          description:
            "Banner explanation for an unconfirmed save outcome; existing details explain whether retry may create another value",
        },
      }),
      saveAuthentication: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveAuthentication.title",
          defaultMessage: "Check your sign-in",
          description: "Banner title for a save blocked by expired or changed account authentication",
        },
        body: {
          id: "environmentSetup.banner.saveAuthentication.body",
          defaultMessage: "Use the account and workspace where you started setup, then try saving again.",
          description: "Banner explanation for a save blocked by expired or changed account authentication",
        },
      }),
      saveDenied: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.saveDenied.title",
          defaultMessage: "Access denied",
          description: "Banner title for a save blocked by missing permission",
        },
        body: {
          id: "environmentSetup.banner.saveDenied.body",
          defaultMessage: "You don’t have permission to save these changes. Check your account and environment access.",
          description: "Banner explanation for a save blocked by missing permission",
        },
      }),
      publishFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.publishFailed.title",
          defaultMessage: "Couldn’t publish environment",
          description:
            "Banner title for a confirmed publishing failure before snapshot creation; settings remain saved and retry is supported",
        },
        body: {
          id: "environmentSetup.banner.publishFailed.body",
          defaultMessage: "Your settings are saved. Try publishing again.",
          description:
            "Banner explanation for a confirmed publishing failure before snapshot creation; settings remain saved and retry is supported",
        },
      }),
      publishIncomplete: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.publishIncomplete.title",
          defaultMessage: "Couldn’t finish publishing",
          description:
            "Banner title for a publishing failure after the setup snapshot was saved; retry reuses that snapshot",
        },
        body: {
          id: "environmentSetup.banner.publishIncomplete.body",
          defaultMessage: "Your setup was saved. Try again to finish publishing.",
          description:
            "Banner explanation for a publishing failure after the setup snapshot was saved; retry reuses that snapshot",
        },
      }),
      statusUnknown: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.statusUnknown.title",
          defaultMessage: "Couldn’t confirm publishing status",
          description:
            "Banner title for an interrupted or failed status check; publication itself may still be running",
        },
        body: {
          id: "environmentSetup.banner.statusUnknown.body",
          defaultMessage: "Publishing may still be running. Check its status to continue.",
          description:
            "Banner explanation for an interrupted or failed status check; publication itself may still be running",
        },
      }),
      reconnectFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.reconnectFailed.title",
          defaultMessage: "Couldn’t connect this chat",
          description: "Banner title for successful publication followed by failure to reconnect the setup chat",
        },
        body: {
          id: "environmentSetup.banner.reconnectFailed.body",
          defaultMessage: "Your environment was published, but this chat couldn’t connect. Try again to reconnect.",
          description: "Banner explanation for successful publication followed by failure to reconnect the setup chat",
        },
      }),
      unsavedChangesConflict: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.environmentChanged.title",
          defaultMessage: "Environment changed",
          description: "Banner title for environment settings changed elsewhere and need review before saving",
        },
        body: {
          id: "environmentSetup.banner.unsavedChangesConflict.body",
          defaultMessage:
            "Your unsaved edits conflict with newer settings. Discard them to load the latest saved version",
          description: "Explains how to resolve an environment editor conflict by discarding only local unsaved edits",
        },
      }),
      environmentChanged: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.environmentChanged.title",
          defaultMessage: "Environment changed",
          description: "Banner title for environment settings changed elsewhere and need review before saving",
        },
        body: {
          id: "environmentSetup.banner.environmentChanged.body",
          defaultMessage: "Load the latest settings and review your changes before saving.",
          description: "Banner explanation for environment settings changed elsewhere and need review before saving",
        },
      }),
      draftLocked: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.draftLocked.title",
          defaultMessage: "Draft unavailable",
          description: "Banner title for a locked draft whose publishing outcome is not yet known",
        },
        body: {
          id: "environmentSetup.banner.draftLocked.body",
          defaultMessage:
            "This draft is locked, and publishing may still be running. Check its status before trying again.",
          description: "Banner explanation for a locked draft whose publishing outcome is not yet known",
        },
      }),
      authentication: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.authentication.title",
          defaultMessage: "Check your sign-in",
          description:
            "Banner title for a publishing status check interrupted by missing or changed account authentication",
        },
        body: {
          id: "environmentSetup.banner.authentication.body",
          defaultMessage: "Use the account and workspace where you started setup, then check publishing status.",
          description:
            "Banner explanation for a publishing status check interrupted by missing or changed account authentication",
        },
      }),
      planNotSupported: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.planNotSupported.title",
          defaultMessage: "Codex Cloud is unavailable on this plan",
          description: "Banner title when the selected ChatGPT plan cannot publish a cloud environment",
        },
        body: {
          id: "environmentSetup.banner.planNotSupported.body",
          defaultMessage: "Switch to an eligible ChatGPT plan to publish this environment",
          description: "Recovery guidance for a publishing request rejected by the Cloud plan policy",
        },
      }),
      accessDenied: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.accessDenied.title",
          defaultMessage: "Access denied",
          description: "Banner title for a publishing status check rejected because of missing access",
        },
        body: {
          id: "environmentSetup.banner.accessDenied.body",
          defaultMessage: "We couldn’t access the publishing status. Check your account and workspace.",
          description: "Banner explanation for a publishing status check rejected because of missing access",
        },
      }),
      vpn: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.vpn.title",
          defaultMessage: "VPN connection needs attention",
          description:
            "Banner title for a VPN connection problem; additional body details identify the cause and recovery step",
        },
        body: {
          id: "environmentSetup.banner.vpn.body",
          defaultMessage: "Review the VPN connection in Internet access before trying again.",
          description:
            "Banner explanation for a VPN connection problem; additional body details identify the cause and recovery step",
        },
      }),
      investigation: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.investigation.title",
          defaultMessage: "Publishing needs investigation",
          description:
            "Banner title for a failed publishing operation with no confirmed reusable setup; the user must report the issue",
        },
        body: {
          id: "environmentSetup.banner.investigation.body",
          defaultMessage: "We couldn’t confirm your setup was saved. Report this issue before starting again.",
          description:
            "Banner explanation for a failed publishing operation with no confirmed reusable setup; the user must report the issue",
        },
      }),
      openTaskFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.openTaskFailed.title",
          defaultMessage: "Couldn’t open a chat",
          description: "Banner title for successful publication followed by failure to open a new chat",
        },
        body: {
          id: "environmentSetup.banner.openTaskFailed.body",
          defaultMessage: "Your environment is published. Try opening a new chat again.",
          description: "Banner explanation for successful publication followed by failure to open a new chat",
        },
      }),
      setupChanged: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.setupChanged.title",
          defaultMessage: "Environment changed",
          description: "Banner title for the user switched environment configurations during publication",
        },
        body: {
          id: "environmentSetup.banner.setupChanged.body",
          defaultMessage: "Return to the original setup to check publishing status.",
          description: "Banner explanation for the user switched environment configurations during publication",
        },
      }),
      returnToSetup: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.returnToSetup.title",
          defaultMessage: "Couldn’t confirm publishing status",
          description:
            "Banner title for publication history is unavailable on this client; the user must return to the original setup client",
        },
        body: {
          id: "environmentSetup.banner.returnToSetup.body",
          defaultMessage: "Reopen this chat where you started setup to confirm publication.",
          description:
            "Banner explanation for publication history is unavailable on this client; the user must return to the original setup client",
        },
      }),
      settingsUnavailable: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.settingsUnavailable.title",
          defaultMessage: "Couldn’t load your settings",
          description: "Banner title for the required settings refresh failed before a publishing retry",
        },
        body: {
          id: "environmentSetup.banner.settingsUnavailable.body",
          defaultMessage: "Try publishing again to reload your saved settings.",
          description: "Banner explanation for the required settings refresh failed before a publishing retry",
        },
      }),
      connectionNeedsAttention: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.connectionNeedsAttention.title",
          defaultMessage: "Review your settings",
          description:
            "Banner title for an invalid saved outbound identity connection that needs review in Internet access",
        },
        body: {
          id: "environmentSetup.banner.connectionNeedsAttention.body",
          defaultMessage: "Review connections in Internet access before publishing.",
          description:
            "Banner explanation for an invalid saved outbound identity connection that needs review in Internet access",
        },
      }),
      lockedNeedsInvestigation: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.lockedNeedsInvestigation.title",
          defaultMessage: "Draft unavailable",
          description: "Banner title for an earlier publishing attempt left a lock that retry cannot clear",
        },
        body: {
          id: "environmentSetup.banner.lockedNeedsInvestigation.body",
          defaultMessage: "An earlier publishing attempt left this draft locked. Report the issue before trying again.",
          description: "Banner explanation for an earlier publishing attempt left a lock that retry cannot clear",
        },
      }),
      publishUnconfirmed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.publishUnconfirmed.title",
          defaultMessage: "Couldn’t confirm publishing status",
          description:
            "Banner title for publication completion is unknown and the existing retry first checks saved settings",
        },
        body: {
          id: "environmentSetup.banner.publishUnconfirmed.body",
          defaultMessage: "Try publishing again to check your saved settings.",
          description:
            "Banner explanation for publication completion is unknown and the existing retry first checks saved settings",
        },
      }),
      genericPublishFailed: (0, s.YK)({
        title: {
          id: "environmentSetup.banner.genericPublishFailed.title",
          defaultMessage: "Couldn’t publish environment",
          description: "Banner title for a publishing error without a more specific known cause",
        },
        body: {
          id: "environmentSetup.banner.genericPublishFailed.body",
          defaultMessage: "Try publishing again. If it still fails, report the issue.",
          description: "Banner explanation for a publishing error without a more specific known cause",
        },
      }),
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          return { title: (0, r.jsx)(i.A, { ...a[e].title }), content: (0, r.jsx)(i.A, { ...a[e].body }) }
        },
      },
    )
  },
  xWIM(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("slpy"),
      a = n("zTeN"),
      l = n("oyxz"),
      o = n("bqtn"),
      d = n("SXhj"),
      c = n("M5B1"),
      u = n("HhRW")
    function m(e) {
      let t,
        n,
        a,
        d = (0, i.c)(9),
        { agentSections: c, userSections: u, savedStatus: m } = e
      d[0] !== c ? ((t = void 0 === c ? [] : c), (d[0] = c), (d[1] = t)) : (t = d[1])
      let p = t,
        g = p.length + u.length
      return (
        d[2] !== p || d[3] !== g || d[4] !== m || d[5] !== u
          ? ((n =
              0 === g
                ? (m ?? (0, r.jsx)(f, {}))
                : (0, r.jsx)(s.m, {
                    interactive: !0,
                    side: "top",
                    openDelay: 0,
                    align: "start",
                    content: (0, r.jsxs)("div", {
                      className: "w-60 py-1 text-start select-text",
                      children: [
                        p.length > 0
                          ? (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)(o.ms.SectionLabel, {
                                  children: (0, r.jsx)(l.A, {
                                    id: "restricted.environmentSetup.changes.byCodex",
                                    defaultMessage: "By Codex",
                                    description:
                                      "Heading for environment sections changed by the setup agent and awaiting user review",
                                  }),
                                }),
                                (0, r.jsx)(h, { sections: p }),
                              ],
                            })
                          : null,
                        u.length > 0
                          ? (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)(o.ms.SectionLabel, {
                                  children: (0, r.jsx)(l.A, {
                                    id: "restricted.environmentSetup.changes.byYou",
                                    defaultMessage: "By you",
                                    description: "Heading for environment sections with unsaved edits made by the user",
                                  }),
                                }),
                                (0, r.jsx)(h, { sections: u }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    children: (0, r.jsx)(s.m.TriggerDecorator, {
                      unstyled: !0,
                      children: (0, r.jsx)("span", {
                        children: (0, r.jsx)(l.A, {
                          id: "restricted.environmentSetup.changes.count",
                          defaultMessage: "{count, plural, one {# change} other {# changes}}",
                          description:
                            "Button showing the number of changed environment sections, including saved agent proposals awaiting review and unsaved user edits",
                          values: { count: g },
                        }),
                      }),
                    }),
                  })),
            (d[2] = p),
            (d[3] = g),
            (d[4] = m),
            (d[5] = u),
            (d[6] = n))
          : (n = d[6]),
        d[7] !== n
          ? ((a = (0, r.jsx)("div", { className: "min-w-0 truncate text-sm text-secondary select-none", children: n })),
            (d[7] = n),
            (d[8] = a))
          : (a = d[8]),
        a
      )
    }
    function p(e) {
      let t,
        n = (0, i.c)(2),
        { conversationId: s } = e,
        o = (0, a._U)(c.Bx, s)
      return null == o
        ? null
        : (n[0] !== o
            ? ((t = o
                ? (0, r.jsx)(l.A, {
                    id: "environmentSetup.changes.savedUnpublished",
                    defaultMessage: "Draft saved · Not published",
                    description:
                      "Status when all environment edits are saved and reviewed, but the saved draft differs from the published environment",
                  })
                : (0, r.jsx)(f, {})),
              (n[0] = o),
              (n[1] = t))
            : (t = n[1]),
          t)
    }
    function f() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(l.A, {
              id: "restricted.environmentSetup.changes.saved",
              defaultMessage: "All changes saved",
              description:
                "Status when there are no unreviewed agent updates, unsaved user edits, or saved content changes awaiting publication in the environment panel",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function h(e) {
      let t,
        n,
        s = (0, i.c)(4),
        { sections: a } = e
      return (
        s[0] !== a ? ((t = a.map(g)), (s[0] = a), (s[1] = t)) : (t = s[1]),
        s[2] !== t
          ? ((n = (0, r.jsx)("ul", { className: "flex flex-col text-sm", children: t })), (s[2] = t), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    function g(e) {
      return (0, r.jsx)(
        "li",
        { className: "px-row-x py-row-y", children: (0, r.jsx)(l.A, { ...("description" === e ? d.S : d.b[e]) }) },
        e,
      )
    }
    n.d(
      t,
      {},
      {
        Z: function (e) {
          let t,
            n,
            s,
            l,
            o = (0, i.c)(23),
            { conversationId: d } = e,
            f = (0, a._U)(c.qR, d),
            h = (0, a._U)(u.U1, d)
          if (
            (o[0] !== h?.access ||
            o[1] !== h?.description ||
            o[2] !== h?.environmentVariableNames ||
            o[3] !== h?.name ||
            o[4] !== h?.networkDomains ||
            o[5] !== h?.networkEnabled ||
            o[6] !== h?.outboundIdentityRequirements ||
            o[7] !== h?.repositories ||
            o[8] !== h?.secretNames ||
            o[9] !== h?.setupScript ||
            o[10] !== h?.startSkill
              ? ((t = []),
                h?.name !== void 0 && t.push("name"),
                h?.description !== void 0 && t.push("description"),
                (h?.setupScript !== void 0 || h?.startSkill !== void 0) && t.push("scripts"),
                (h?.networkEnabled !== void 0 || h?.networkDomains !== void 0) && t.push("network"),
                h?.repositories !== void 0 && t.push("repositories"),
                h?.secretNames !== void 0 && t.push("secrets"),
                h?.environmentVariableNames !== void 0 && t.push("variables"),
                h?.access !== void 0 && t.push("privacy"),
                h?.outboundIdentityRequirements !== void 0 && t.push("connections"),
                (o[0] = h?.access),
                (o[1] = h?.description),
                (o[2] = h?.environmentVariableNames),
                (o[3] = h?.name),
                (o[4] = h?.networkDomains),
                (o[5] = h?.networkEnabled),
                (o[6] = h?.outboundIdentityRequirements),
                (o[7] = h?.repositories),
                (o[8] = h?.secretNames),
                (o[9] = h?.setupScript),
                (o[10] = h?.startSkill),
                (o[11] = t))
              : (t = o[11]),
            o[12] !== f || o[13] !== t)
          ) {
            let e
            ;(o[15] !== t ? ((e = (e) => !t.includes(e)), (o[15] = t), (o[16] = e)) : (e = o[16]),
              (n = f.filter(e)),
              (o[12] = f),
              (o[13] = t),
              (o[14] = n))
          } else n = o[14]
          let g = n
          return (
            o[17] !== d ? ((s = (0, r.jsx)(p, { conversationId: d })), (o[17] = d), (o[18] = s)) : (s = o[18]),
            o[19] !== g || o[20] !== s || o[21] !== t
              ? ((l = (0, r.jsx)(m, { agentSections: g, userSections: t, savedStatus: s })),
                (o[19] = g),
                (o[20] = s),
                (o[21] = t),
                (o[22] = l))
              : (l = o[22]),
            l
          )
        },
        k: m,
      },
    )
  },
  ILsY(e, t, n) {
    var r = n("SZCv"),
      i = n.n(r),
      s = n("KUdL"),
      a = n.n(s),
      l = n("VrVA"),
      o = n("Q00z"),
      d = n("USmf")
    function c(e, t) {
      return (e?.ssh ?? !1) === (t?.ssh ?? !1) && i()(a()(e?.http_ports ?? []), a()(t?.http_ports ?? []))
    }
    function u(e, t) {
      return (
        e.type === t.type &&
        i()(
          "restricted" === e.type ? [...(e.presets ?? [])].sort() : [],
          "restricted" === t.type ? [...(t.presets ?? [])].sort() : [],
        ) &&
        i()(
          "restricted" === e.type ? e.egress_rules.map(({ host: e }) => e).sort() : [],
          "restricted" === t.type ? t.egress_rules.map(({ host: e }) => e).sort() : [],
        )
      )
    }
    function m(e, t) {
      let n = (e) =>
        a()(
          e.map(({ id: e, name: t, source: n, optional: r, target: i }) => ({
            id: e,
            name: t,
            source: n,
            optional: r ?? "user_provided" === n,
            target:
              "http_header" in i
                ? {
                    http_header: {
                      header_name: i.http_header.header_name,
                      allowed_domains: [...i.http_header.allowed_domains].sort(),
                    },
                  }
                : {
                    environment_variable: i.environment_variable,
                    allowed_domains: null == i.allowed_domains ? void 0 : [...i.allowed_domains].sort(),
                  },
          })),
          "name",
        )
      return i()(n(e), n(t))
    }
    function p(e) {
      if (null != e.target) return l.q_.parse(e.target)
      let t = e.injectionTarget,
        n = t?.domain
          ?.split(",")
          .map((e) => e.trim())
          .filter((e) => e.length > 0)
      return t?.type === "http_header"
        ? { http_header: { header_name: t.name, allowed_domains: n ?? [] } }
        : { environment_variable: t?.name ?? e.name, allowed_domains: n }
    }
    function f(e, t) {
      var n
      if (void 0 === t.networkEnabled && void 0 === t.networkPreset && void 0 === t.networkDomains) return
      if (!1 === t.networkEnabled) return { type: "disabled" }
      let r = (e.draft ?? e).network_policy,
        i =
          t.networkPreset ??
          ("unrestricted" === (n = r).type
            ? "all"
            : "restricted" === n.type
              ? n.presets?.includes("package_managers")
                ? "package_managers"
                : "none"
              : "package_managers")
      return "all" === i
        ? { type: "unrestricted" }
        : {
            type: "restricted",
            presets: "none" === i ? [] : [i],
            egress_rules: [
              ...new Set(t.networkDomains ?? ("restricted" === r.type ? r.egress_rules.map((e) => e.host) : [])),
            ].map((e) => ({ host: e })),
          }
    }
    n.d(
      t,
      {},
      {
        AO: f,
        N6: m,
        Od: function (e, t, n) {
          let r = e.draft ?? e,
            s = { ...t }
          if ((null != t.portals && c(t.portals, r.portals) && delete s.portals, null != t.environmentVariableNames)) {
            let t = n?.environmentVariables
            !e.draft?.pending_runtime_requirements?.length &&
              t?.every(
                ({ value: e, source: t, serverId: n }) => 0 === e.length && ("user_provided" === t || null != n),
              ) &&
              i()(
                a()((0, o.kD)(t), "delivery.variable_name"),
                a()(
                  (r.runtime_requirements ?? []).map(({ source: e, delivery: t, optional: n }) => ({
                    source: e,
                    delivery: t,
                    optional: n,
                  })),
                  "delivery.variable_name",
                ),
              ) &&
              delete s.environmentVariableNames
          }
          ;(t.name === e.name && delete s.name,
            t.description === (e.description ?? "") && delete s.description,
            t.access === ("workspace" === e.share_settings ? "organization" : "private") && delete s.access,
            t.setupScript === (r.install_script ?? "") && delete s.setupScript,
            t.startSkill === (r.start_skill ?? "") && delete s.startSkill,
            null != t.repositories &&
              i()([...t.repositories].sort(), r.repositories.map(({ repository_id: e }) => e).sort()) &&
              delete s.repositories,
            null != t.outboundIdentityRequirements &&
              i()(
                a()(t.outboundIdentityRequirements, "connection_id"),
                a()(r.outbound_identity_requirements ?? [], "connection_id"),
              ) &&
              delete s.outboundIdentityRequirements,
            null != t.tcpNetworkAccess &&
              i()([...t.tcpNetworkAccess.ip_ranges].sort(), [...(r.tcp_network_access?.ip_ranges ?? [])].sort()) &&
              i()([...t.tcpNetworkAccess.domains].sort(), [...(r.tcp_network_access?.domains ?? [])].sort()) &&
              delete s.tcpNetworkAccess)
          let l = f(e, t)
          if (
            (null != l &&
              u(l, r.network_policy) &&
              (delete s.networkEnabled, delete s.networkPreset, delete s.networkDomains),
            null != t.secretNames)
          ) {
            let t = (0, d.wj)(e, n)
            t?.every(({ value: e }) => 0 === e.length) &&
              m(
                t.map((e) => ({
                  id: "user_provided" === e.source ? void 0 : e.serverId,
                  name: e.name,
                  source: e.source ?? "environment",
                  optional: "user_provided" === e.source || e.optional,
                  target: p(e),
                })),
                r.secrets ?? [],
              ) &&
              delete s.secretNames
          }
          return Object.values(s).some((e) => void 0 !== e) ? s : null
        },
        RL: c,
        Uo: u,
        oj: p,
        w4: function (e, t, n) {
          if (null == e || (t && n)) return e
          let r = { ...e }
          return (
            t || delete r.outboundIdentityRequirements,
            n || delete r.portals,
            Object.values(r).some((e) => void 0 !== e) ? r : null
          )
        },
      },
    )
  },
  j8Ud(e, t, n) {
    n.d(
      t,
      {},
      {
        t: function (e) {
          return e?.networkEnabled !== !0
            ? { type: "disabled" }
            : "all" === e.networkPreset
              ? { type: "unrestricted" }
              : {
                  type: "restricted",
                  presets: "none" === e.networkPreset ? [] : ["package_managers"],
                  egress_rules: (e.networkDomains ?? []).map((e) => ({ host: e })),
                }
        },
      },
    )
  },
  HhRW(e, t, n) {
    n.d(t, {
      or: () => U,
      $U: () => T,
      Yj: () => N,
      ZF: () => C,
      De: () => g.De,
      U1: () => S,
      rx: () => I,
      n6: () => M,
      fm: () => _,
      Jo: () => g.Jo,
      UV: () => j,
      O0: () => E,
      e2: () => P,
      XL: () => D,
    })
    var r = n("zTeN"),
      i = n("DBCl"),
      s = n("VrVA"),
      a = n("tl5a"),
      l = n("SPnB"),
      o = n("GTP7"),
      d = n("OWtl"),
      c = n("kpIY"),
      u = n("Nwp9"),
      m = n("NsMq"),
      p = n("dDVm"),
      f = n("ULpA"),
      h = n("ILsY"),
      g = n("tFcq"),
      x = n("ZEpF"),
      v = n("ogLr"),
      b = n("GaA7"),
      y = n("eA5w"),
      w = n("tz0P")
    let k = (0, r.vU)(d.u, (e, { get: t }) => {
      let n = t(a.Qk, e),
        r = t(a.M5, n === (0, y.Y)() ? { hostId: n, threadId: e } : null),
        i = r?.environmentConfigId,
        s = t(l.PO).authLoading ? null : t(l.chatGptAuthenticatedAccountId$),
        o = t(l.chatGptAuthenticatedUserId$),
        d = b.appServices?.environmentConfigs
      return {
        queryFn: async () => {
          if (null == s || null == o || null == i || null == d) throw Error("Environment configuration is unavailable")
          return (0, m.UG)(d, s, o, i)
        },
        queryKey: (0, m.l4)(s, o, i),
        enabled:
          null != r &&
          "needs_resume" !== r.resumeState &&
          null != s &&
          null != o &&
          null != i &&
          !t(w.bQ, i) &&
          null != d,
        staleTime: 0,
        refetchOnMount: (e) => !(0, m.Qe)(e.state.error) && "always",
        refetchOnWindowFocus: (e) => !(0, m.Qe)(e.state.error),
        refetchOnReconnect: (e) => !(0, m.Qe)(e.state.error),
        retry: !1,
      }
    })
    function j(e) {
      return "unrestricted" === e.type
        ? "all"
        : "restricted" === e.type
          ? e.presets?.includes("package_managers")
            ? "package_managers"
            : "none"
          : "package_managers"
    }
    let A = (0, u.m3)(s.mX, void 0),
      N = (0, r.un)(d.u, ({ get: e }) => {
        let t = e(l.chatGptAuthenticatedAccountId$),
          n = e(l.chatGptAuthenticatedUserId$),
          r = e(A) ?? (0, c.TB)(s.mX, void 0)
        return null == t || null == n || null == r
          ? null
          : Object.fromEntries(
              Object.entries(r).flatMap(([e, r]) =>
                r.accountId === t && r.userId === n && null == r.draftId ? [[r.configId, (0, i.JXB)(e)]] : [],
              ),
            )
      }),
      S = (0, r.i1)(d.u, (e, { get: t }) => (0, h.w4)(t(g.Jo, e), t(v.Y), t(x.H))),
      _ = (0, r.i1)(d.u, (e, { get: t }) => {
        if (null == e) return null
        let n = t(A) ?? (0, c.TB)(s.mX, void 0),
          r = n?.[e]
        if (null != r) return r
        let { data: i, isEnabled: a } = t(k, e),
          o = t(l.chatGptAuthenticatedAccountId$),
          d = t(l.chatGptAuthenticatedUserId$)
        return i?.thread_id !== e || null == o || null == d
          ? null
          : {
              accountId: o,
              userId: d,
              configId: i.id,
              name: i.name,
              publicationStateUnknown: !0,
              repositoryNamesById: Object.fromEntries(
                (i.draft ?? i).repositories.map(({ repository_id: e }) => {
                  let n = a ? t(p.D, e).data : void 0
                  return [e, null != n && "inaccessible" !== n ? n.repository_full_name : e]
                }),
              ),
            }
      }),
      I = (0, r.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        return null != n &&
          n.accountId === t(l.chatGptAuthenticatedAccountId$) &&
          n.userId === t(l.chatGptAuthenticatedUserId$)
          ? n.name
          : null
      }),
      M = (0, r.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        if (null == n || t(f.fK, e)) return
        if (null != n.draftId && t(f.xp, e)) return null
        let r = t(f.pe, e),
          i = r?.id ?? null
        if (
          (null == r && (n.savedTurnId === i || n.promotedTurnId === i)) ||
          r?.status === "completed" ||
          (r?.status === "interrupted" &&
            null != n.savedTurnId &&
            t(f.jI, { conversationId: e, savedTurnId: n.savedTurnId })) ||
          (null != n.promotedVersionId && (r?.status === "interrupted" || r?.status === "failed"))
        )
          return null === n.promotedTurnId ? null : i
      }),
      C = (0, r.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        if (
          null != n &&
          (n.accountId !== t(l.chatGptAuthenticatedAccountId$) || n.userId !== t(l.chatGptAuthenticatedUserId$))
        )
          return null
        let r = t(g.De, e)
        if (null == n) return r
        let i = void 0 !== t(M, e) ? "ready" : (r?.phase ?? "inspecting")
        if (null != r) {
          let s = t(g.hV, e)?.repositorySelections
          return {
            ...r,
            phase: i,
            repositories: r.repositories.map(
              (e) =>
                n.repositoryNamesById[e] ??
                s?.find(({ repository: t }) => t.id === e)?.repository.repository_full_name ??
                e,
            ),
          }
        }
        return {
          access: null,
          name: n.name,
          phase: i,
          repositories: Object.values(n.repositoryNamesById),
          secretNames: [],
        }
      }),
      E = (0, r.i1)(d.u, (e, { get: t }) => null != e && ("environment_setup" === t(a.hD, e) || t(B, e))),
      B = (0, r.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        return (
          null != n &&
          n.accountId === t(l.chatGptAuthenticatedAccountId$) &&
          n.userId === t(l.chatGptAuthenticatedUserId$)
        )
      })
    function P(e, t, n) {
      let r = (0, c.TB)(s.mX, {}),
        i = Object.fromEntries([
          ...Object.entries(r)
            .filter(([e]) => e !== t)
            .slice(-99),
          [t, n],
        ])
      ;((0, c.jx)(s.mX, i), (0, g._L)(e, t, r[t], n), e.set(A, i))
    }
    function U(e, t, n) {
      e.set(g.De, t, { access: null, name: n.name, phase: "inspecting", repositories: n.repositories, secretNames: [] })
    }
    function D(e, t, n) {
      let r = {
        ...(e.get(g.De, t) ?? { access: null, name: null, phase: "inspecting", repositories: [], secretNames: [] }),
        ...n,
      }
      e.set(g.De, t, r)
      let i = e.get(_, t)
      if (null != i) {
        let { phase: r, ...s } = n,
          a = { ...e.get(g.Jo, t), ...s },
          o = e.queryClient.getQueryData(
            (0, m.l4)(
              e.get(l.chatGptAuthenticatedAccountId$),
              e.get(l.chatGptAuthenticatedUserId$),
              i.configId,
              i.draftId,
            ),
          )
        e.set(g.Jo, t, null == o ? a : (0, h.Od)(o, a, e.get(g.hV, t)))
      }
      return r
    }
    function T(e, t, n) {
      let i = { ...e.get(g.De, t), ...n, phase: "ready" }
      return (
        (0, r.Y)(e, (e) => {
          ;(e.set(o.Q, t, null), e.set(g.hV, t, null), e.set(g.De, t, i))
        }),
        i
      )
    }
  },
  tFcq(e, t, n) {
    var r = n("zTeN"),
      i = n("OWtl")
    let s = (0, r.bD)(i.u, (e) => 0),
      a = (0, r.bD)(i.u, (e) => null),
      l = (0, r.bD)(i.u, (e) => null),
      o = (0, r.bD)(i.u, (e) => null),
      d = (0, r.bD)(i.u, (e) => null)
    function c(e, t) {
      return (
        e?.accountId === t.accountId && e.userId === t.userId && e.configId === t.configId && e.draftId === t.draftId
      )
    }
    function u(e, t) {
      return JSON.stringify([e, t.accountId, t.userId, t.configId, t.draftId])
    }
    n.d(
      t,
      {},
      {
        De: a,
        Jo: l,
        _L: function (e, t, n, r) {
          if (null == n || c(n, r)) return
          let i = e.get(d, u(t, r))
          ;(e.set(d, u(t, n), { draft: e.get(a, t), changes: e.get(l, t), inputs: e.get(o, t) }),
            e.set(a, t, i?.draft ?? null),
            e.set(l, t, i?.changes ?? null),
            e.set(o, t, i?.inputs ?? null),
            e.set(d, u(t, r), null))
        },
        hV: o,
        mk: c,
        ut: function (e, t, n) {
          return e.get(d, u(t, n))
        },
        yu: s,
      },
    )
  },
  Q00z(e, t, n) {
    var r = n("zTeN"),
      i = n("OWtl")
    let s = (0, r.bD)(i.u, (e) => null)
    n.d(
      t,
      {},
      {
        D7: function (e, t) {
          let n = t?.environmentVariables,
            r = (e?.draft ?? e)?.runtime_requirements,
            i = e?.draft?.pending_runtime_requirements
          if (null != n || null != r || null != i)
            return [
              ...(n ??
                r?.map(({ source: e, delivery: t, optional: n, error: r }) => ({
                  name: t.variable_name,
                  value: "",
                  source: "user_provided" === e.type ? "user_provided" : void 0,
                  serverId: "vault_secret" === e.type ? e.id : void 0,
                  optional: n,
                  error: r,
                })) ??
                []),
              ...(i
                ?.filter(
                  ({ delivery: e }) =>
                    !n?.some(({ name: t }) => t === e.variable_name) &&
                    !r?.some((t) => t.delivery.variable_name === e.variable_name) &&
                    !t?.removedEnvironmentVariableNames?.includes(e.variable_name),
                )
                .map(({ delivery: e, suggested_value: t }) => ({
                  name: e.variable_name,
                  value: t ?? "",
                  optional: !1,
                })) ?? []),
            ]
        },
        du: s,
        kD: function (e) {
          return e.map(({ name: e, serverId: t, optional: n, source: r }) => {
            let i
            if ("user_provided" === r) i = { type: "user_provided" }
            else if (null != t) i = { type: "vault_secret", id: t }
            else throw Error("environment-variables")
            return {
              source: i,
              delivery: { type: "direct_environment_variable", variable_name: e },
              optional: "user_provided" === r || n,
            }
          })
        },
      },
    )
  },
  ZEpF(e, t, n) {
    var r = n("zTeN"),
      i = n("OWtl"),
      s = n("OMIV")
    let a = (0, r.un)(i.u, ({ get: e }) => e(s.JW, "3292594718"))
    n.d(t, {}, { H: a })
  },
  USmf(e, t, n) {
    var r = n("zTeN"),
      i = n("SPnB"),
      s = n("OWtl"),
      a = n("tFcq")
    let l = (0, r.i1)(s.u, (e, { get: t }) => {
      let n = t(a.hV, e),
        r =
          n?.secretsOwner == null ||
          (n.secretsOwner.accountId === t(i.chatGptAuthenticatedAccountId$) &&
            n.secretsOwner.userId === t(i.chatGptAuthenticatedUserId$)),
        s =
          n?.environmentVariablesOwner == null ||
          (n.environmentVariablesOwner.accountId === t(i.chatGptAuthenticatedAccountId$) &&
            n.environmentVariablesOwner.userId === t(i.chatGptAuthenticatedUserId$))
      return null == n || (r && s)
        ? n
        : {
            ...n,
            secrets: r ? n.secrets : void 0,
            environmentVariables: s ? n.environmentVariables : void 0,
            removedEnvironmentVariableNames: s ? n.removedEnvironmentVariableNames : void 0,
          }
    })
    n.d(
      t,
      { hV: () => a.hV },
      {
        g1: function (e) {
          return (
            e.name.trim().length > 0 &&
            (e.value.length > 0 ||
              null != e.serverId ||
              null != e.personalSecret ||
              "user_provided" === e.source ||
              !0 === e.optional)
          )
        },
        wj: function (e, t) {
          let n =
            t?.secretsDraft == null ||
            (t.secretsDraft.id === e?.draft?.id && t.secretsDraft.revision === e.draft.revision)
              ? t?.secrets
              : void 0
          if (null != n && t?.secretsEditMode === "replace") return n
          let r = (e?.draft ?? e)?.secrets
          if (null == r) return n
          let i = Math.max(-1, ...(n ?? []).map(({ id: e }) => e)) + 1,
            s = r.map((e, t) => ({
              id: i + t,
              name: e.name,
              source: e.source,
              optional: e.optional,
              serverId: e.id,
              isMissing: "environment" === e.source && null == e.id && null == e.error,
              injectionTarget:
                "environment_variable" in e.target
                  ? {
                      type: "environment_variable",
                      name: e.target.environment_variable,
                      domain: e.target.allowed_domains?.join(", "),
                    }
                  : {
                      type: "http_header",
                      name: e.target.http_header.header_name,
                      domain: e.target.http_header.allowed_domains.join(", "),
                    },
              value: "",
            }))
          return [
            ...(n ?? []).map((e) => ({ ...s.find(({ name: t }) => t === e.name), ...e })),
            ...s.filter(({ name: e }) => !n?.some((t) => t.name === e)),
          ]
        },
        z4: l,
      },
    )
  },
  ogLr(e, t, n) {
    var r = n("zTeN"),
      i = n("OWtl"),
      s = n("OMIV")
    let a = (0, r.un)(i.u, ({ get: e }) => e(s.JW, "1180331538") && e(s.JW, "3877348421"))
    n.d(t, {}, { Y: a })
  },
  gW5Q(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("oyxz"),
      a = n("zKCW"),
      l = n("bVeK")
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            a = (0, i.c)(3),
            { publicationFailed: o } = e,
            d = void 0 !== o && o
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(l.Gmf, { className: "text-danger" })), (a[0] = t))
              : (t = a[0]),
            a[1] !== d
              ? ((n = (0, r.jsxs)(r.Fragment, {
                  children: [
                    t,
                    d
                      ? (0, r.jsx)(s.A, {
                          id: "environmentSetup.footer.publicationFailed",
                          defaultMessage: "Couldn’t publish",
                          description: "Compact footer status for a confirmed failed environment publication",
                        })
                      : (0, r.jsx)(s.A, {
                          id: "environmentSetup.footer.needsAttention",
                          defaultMessage: "Needs attention",
                          description:
                            "Compact footer status when environment settings or publishing status need attention; details appear in the banner above",
                        }),
                  ],
                })),
                (a[1] = d),
                (a[2] = n))
              : (n = a[2]),
            n
          )
        },
        W: function (e) {
          let t,
            n,
            s,
            l,
            o,
            d = (0, i.c)(13),
            { children: c, status: u, error: m, errorActions: p } = e
          return (
            d[0] !== m || d[1] !== p
              ? ((t =
                  null != m &&
                  (0, r.jsx)(a.l, {
                    variant: "callout",
                    type: "error",
                    layout: "vertical",
                    role: "alert",
                    title: m.title,
                    content: m.content,
                    customCtas: p,
                  })),
                (d[0] = m),
                (d[1] = p),
                (d[2] = t))
              : (t = d[2]),
            d[3] !== u
              ? ((n = (0, r.jsx)("div", {
                  className: "flex min-w-0 flex-auto items-center gap-2 text-secondary",
                  children: u,
                })),
                (d[3] = u),
                (d[4] = n))
              : (n = d[4]),
            d[5] !== c
              ? ((s = (0, r.jsx)("div", { className: "ms-auto flex shrink-0 items-center gap-2", children: c })),
                (d[5] = c),
                (d[6] = s))
              : (s = d[6]),
            d[7] !== n || d[8] !== s
              ? ((l = (0, r.jsxs)("div", { className: "flex min-w-0 flex-wrap items-center gap-2", children: [n, s] })),
                (d[7] = n),
                (d[8] = s),
                (d[9] = l))
              : (l = d[9]),
            d[10] !== t || d[11] !== l
              ? ((o = (0, r.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-3 text-sm select-none",
                  children: [t, l],
                })),
                (d[10] = t),
                (d[11] = l),
                (d[12] = o))
              : (o = d[12]),
            o
          )
        },
      },
    )
  },
  wbXL(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("BSnr"),
      a = n("AWNZ"),
      l = n("ZEx5")
    let o = { rowCount: 1, showAction: !0, showIcon: !0 },
      d = { key: "secrets", ...o },
      c = [{ key: "variables", ...o }, d],
      u = [
        { key: "repositories", ...o },
        d,
        { key: "network", rowCount: 2, showAction: !1, showIcon: !1 },
        { key: "privacy", rowCount: 1, showAction: !1, showIcon: !1 },
      ]
    function m(e) {
      return (0, r.jsxs)(
        s.X,
        {
          children: [
            (0, r.jsx)(s.X.Header, {
              actions: e.showAction ? (0, r.jsx)("div", { className: "h-6 w-20 rounded bg-text/10" }) : void 0,
              size: "compact",
              title: (0, r.jsx)("div", { className: "h-3 w-20 rounded bg-text/10" }),
            }),
            (0, r.jsx)(s.X.Content, {
              children: (0, r.jsx)(l.t, {
                children: Array.from({ length: e.rowCount }, (t, n) =>
                  (0, r.jsx)(
                    a.ic,
                    {
                      control: (0, r.jsx)("div", { className: "h-3 w-12 shrink-0 rounded bg-text/10" }),
                      icon: e.showIcon
                        ? (0, r.jsx)("div", { className: "size-4 shrink-0 rounded bg-text/10" })
                        : void 0,
                      label: (0, r.jsx)("div", { className: "h-3 w-20 rounded bg-text/10" }),
                    },
                    n,
                  ),
                ),
              }),
            }),
          ],
        },
        e.key,
      )
    }
    n.d(
      t,
      {},
      {
        J: function (e) {
          let t,
            n,
            s,
            a,
            l,
            o = (0, i.c)(11),
            { loadingLabel: d, inPlace: p } = e,
            f = void 0 !== p && p,
            h = f ? c : u,
            g = f ? void 0 : "min-h-0 flex-1 overflow-y-auto p-panel"
          return (
            o[0] !== d
              ? ((t = (0, r.jsx)("span", { className: "sr-only", children: d })), (o[0] = d), (o[1] = t))
              : (t = o[1]),
            o[2] !== h ? ((n = h.map(m)), (o[2] = h), (o[3] = n)) : (n = o[3]),
            o[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, r.jsx)("div", { className: "h-6 w-24 self-end rounded bg-text/10" })), (o[4] = s))
              : (s = o[4]),
            o[5] !== n
              ? ((a = (0, r.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "flex flex-col gap-6 motion-safe:animate-pulse",
                  children: [n, s],
                })),
                (o[5] = n),
                (o[6] = a))
              : (a = o[6]),
            o[7] !== g || o[8] !== t || o[9] !== a
              ? ((l = (0, r.jsxs)("div", { className: g, role: "status", children: [t, a] })),
                (o[7] = g),
                (o[8] = t),
                (o[9] = a),
                (o[10] = l))
              : (l = o[10]),
            l
          )
        },
      },
    )
  },
  yWRA(e, t, n) {
    n.d(t, { ThreadEnvironmentPanel: () => es })
    var r = n("SRbQ"),
      i = n("ABep"),
      s = n("QosV"),
      a = n("SZCv"),
      l = n.n(a),
      o = n("zTeN"),
      d = n("DBCl"),
      c = n("yKY7"),
      u = n("zd8w"),
      m = n("oyxz"),
      p = n("tl5a"),
      f = n("yXmW"),
      h = n("SPnB"),
      g = n("ckTT"),
      x = n("Cybu"),
      v = n("zKCW"),
      b = n("Sm6l"),
      y = n("bVeK"),
      w = n("GaA7"),
      k = n("OWtl"),
      j = n("ndjw"),
      A = n("V3rO"),
      N = n("eA5w"),
      S = n("tz0P"),
      _ = n("QvRd"),
      I = n("BPZJ"),
      M = n("SbKN"),
      C = n("xWIM"),
      E = n("vw1I"),
      B = n("jf0i"),
      P = n("gW5Q"),
      U = n("wbXL"),
      D = n("wU6J"),
      T = n("ILsY")
    function z(e, t) {
      let n = e?.networkPolicy
      if (null == e || null == n || null == t) return null
      let r = t.network_policy
      if ("unrestricted" === r.type || "disabled" === n.type) return null
      let i = "unrestricted" === n.type,
        s = e.beforeAllInternet ?? e.baseSettings.networkPolicy,
        a = i ? s : n,
        l = a,
        o = [],
        d = !1
      if ("restricted" === a.type) {
        let t = "disabled" === r.type ? [] : [...r.egress_rules, ...(r.preset_egress_rules ?? [])],
          n = "disabled" === r.type || !r.presets?.length || null != r.preset_egress_rules,
          i = e.baseSettings.networkPolicy,
          s = new Set("restricted" === i.type ? i.egress_rules.map(({ host: e }) => e) : [])
        ;(n &&
          (o = a.egress_rules
            .map(({ host: e }) => e)
            .filter((e) => {
              var n, r
              let i
              return (
                !s.has(e) &&
                ((n = e),
                (r = t),
                !(
                  null == (i = (0, D.T)(n)) ||
                  r.some(
                    ({ host: e }) =>
                      "*" === e ||
                      e === i ||
                      (e.startsWith("*.") && i.endsWith(e.slice(1))) ||
                      e === `www.${i}` ||
                      i === `www.${e}`,
                  )
                ))
              )
            })),
          (l = R(
            (d = !!a.presets?.length && !("restricted" === i.type && i.presets?.length) && n && 0 === t.length)
              ? { ...a, presets: [] }
              : a,
            o,
          )))
      }
      if (!i && !d && !o.length) return null
      let c = (0, T.Uo)(l, e.baseSettings.networkPolicy) ? void 0 : l
      return {
        allInternet: i,
        domains: o,
        packageManagers: d,
        remaining:
          c || e.variables || e.secrets || e.repositories
            ? { ...e, networkPolicy: c, beforeAllInternet: void 0 }
            : null,
      }
    }
    function R(e, t) {
      if ("restricted" !== e.type) return e
      let n = e.egress_rules.filter(({ host: e }) => !t.includes(e))
      return n.length || e.presets?.length
        ? { type: "restricted", presets: e.presets, egress_rules: n }
        : { type: "disabled" }
    }
    var V = n("HhRW"),
      O = n("j8Ud"),
      Y = n("pqcU"),
      q = n("CFI7")
    function F(e) {
      let t,
        n,
        r,
        a,
        l,
        o,
        d,
        c,
        u,
        p,
        f,
        h,
        g,
        x = (0, s.c)(47),
        { identity: v, settings: b, draft: y, source: w, blocked: k, disabled: j, onEdit: A, onRemoveBlocked: N } = e,
        S = y?.networkPolicy ?? b.networkPolicy,
        _ = "disabled" !== S.type
      ;(x[0] !== S ? ((t = (0, V.UV)(S)), (x[0] = S), (x[1] = t)) : (t = x[1]),
        x[2] !== S.egress_rules || x[3] !== S.type
          ? ((n = "restricted" === S.type ? S.egress_rules.map(L) : []),
            (x[2] = S.egress_rules),
            (x[3] = S.type),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== _ || x[6] !== t || x[7] !== n
          ? ((r = { networkEnabled: _, networkPreset: t, networkDomains: n }),
            (x[5] = _),
            (x[6] = t),
            (x[7] = n),
            (x[8] = r))
          : (r = x[8]))
      let I = r,
        M = y?.beforeAllInternet,
        C = null != w && "unrestricted" !== w.network_policy.type
      x[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(m.A, {
            id: "threadEnvironment.network.restrictedByPolicy",
            defaultMessage: "Restricted by policy",
            description: "Short explanation beside a switch that the published source network policy restricts",
          })),
          (x[9] = a))
        : (a = x[9])
      let E = a,
        B =
          y?.networkPolicy?.type === "restricted" &&
          w?.network_policy.type === "restricted" &&
          !!w.network_policy.presets?.length &&
          null == w.network_policy.preset_egress_rules,
        P = null
      if (null != k) {
        let e,
          t = w?.id
        ;(x[10] !== k || x[11] !== j || x[12] !== N || x[13] !== t
          ? ((e = (0, i.jsx)(W, { blocked: k, disabled: j, onRemove: N }, t)),
            (x[10] = k),
            (x[11] = j),
            (x[12] = N),
            (x[13] = t),
            (x[14] = e))
          : (e = x[14]),
          (P = e))
      } else if (B) {
        let e
        ;(x[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              className: "text-sm text-secondary",
              children: (0, i.jsx)(m.A, {
                id: "threadEnvironment.network.checkOnSave",
                defaultMessage: "Domains will be checked when you apply changes",
                description: "The published preset list is unavailable, so the service will check access when saving",
              }),
            })),
            (x[15] = e))
          : (e = x[15]),
          (P = e))
      }
      ;(x[16] !== M
        ? ((l =
            null == M
              ? void 0
              : {
                  packageManagers: "restricted" === M.type && !!M.presets?.length,
                  domains: "restricted" === M.type ? M.egress_rules.map(K) : [],
                }),
          (x[16] = M),
          (x[17] = l))
        : (l = x[17]),
        x[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(m.A, {
              id: "threadEnvironment.network.scope",
              defaultMessage: "Changes apply only to this thread.",
              description: "Explains the scope of live HTTP network edits",
            })),
            (x[18] = o))
          : (o = x[18]),
        x[19] !== C || x[20] !== w
          ? ((d =
              C &&
              (0, i.jsx)(m.A, {
                id: "threadEnvironment.network.allLimit",
                defaultMessage:
                  "The published policy for {name} doesn’t allow all public internet access in this chat.",
                description: "Reason next to the all-internet switch when the published source is restricted",
                values: { name: w.name },
              })),
            (x[19] = C),
            (x[20] = w),
            (x[21] = d))
          : (d = x[21]),
        x[22] !== B || x[23] !== w
          ? ((c =
              B &&
              (0, i.jsx)(m.A, {
                id: "threadEnvironment.network.unknownPreset",
                defaultMessage:
                  "The published package-manager list for {name} is unavailable. Requested domains will be checked when you apply changes.",
                description: "Some allowed hosts cannot be identified without the published preset snapshot",
                values: { name: w.name },
              })),
            (x[22] = B),
            (x[23] = w),
            (x[24] = c))
          : (c = x[24]),
        x[25] !== v ? ((u = (0, i.jsx)(Y.u, { configuration: v })), (x[25] = v), (x[26] = u)) : (u = x[26]),
        x[27] !== u || x[28] !== d || x[29] !== c
          ? ((p = (0, i.jsxs)(i.Fragment, { children: [o, d, c, u] })),
            (x[27] = u),
            (x[28] = d),
            (x[29] = c),
            (x[30] = p))
          : (p = x[30]))
      let U = C ? E : void 0,
        D = k?.packageManagers ? E : void 0
      return (
        x[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(m.A, {
              id: "threadEnvironment.network.packageManagerSnapshot",
              defaultMessage:
                "Saving a network edit adds these hosts to Additional allowed domains and resets this switch",
              description: "Explains the one-time package manager selection for a running Cloud environment",
            })),
            (x[31] = f))
          : (f = x[31]),
        x[32] !== y || x[33] !== I || x[34] !== S || x[35] !== A || x[36] !== b
          ? ((h = (e) => {
              let t = (0, O.t)({ ...I, ...e })
              A({
                ...y,
                baseSettings: y?.baseSettings ?? b,
                networkPolicy: t,
                beforeAllInternet: "unrestricted" === t.type ? S : void 0,
              })
            }),
            (x[32] = y),
            (x[33] = I),
            (x[34] = S),
            (x[35] = A),
            (x[36] = b),
            (x[37] = h))
          : (h = x[37]),
        x[38] !== j ||
        x[39] !== I ||
        x[40] !== P ||
        x[41] !== p ||
        x[42] !== U ||
        x[43] !== D ||
        x[44] !== h ||
        x[45] !== l
          ? ((g = (0, i.jsx)(q._, {
              draft: I,
              isReadOnly: j,
              previousRestrictedAccess: l,
              help: p,
              allInternetDescription: U,
              packageManagersDescription: D,
              packageManagersTooltip: f,
              notice: P,
              onDraftChange: h,
            })),
            (x[38] = j),
            (x[39] = I),
            (x[40] = P),
            (x[41] = p),
            (x[42] = U),
            (x[43] = D),
            (x[44] = h),
            (x[45] = l),
            (x[46] = g))
          : (g = x[46]),
        g
      )
    }
    function K(e) {
      let { host: t } = e
      return t
    }
    function L(e) {
      let { host: t } = e
      return t
    }
    function W(e) {
      let t,
        n,
        r,
        a,
        l,
        o,
        d,
        c,
        p = (0, s.c)(33),
        { blocked: f, disabled: h, onRemove: g } = e,
        [x, v] = (0, u.useState)(!1),
        w = (0, u.useId)(),
        { domains: k } = f
      if (k.length > 1) {
        let e, n, r, s
        ;(p[0] !== x ? ((e = () => v(!x)), (p[0] = x), (p[1] = e)) : (e = p[1]),
          p[2] !== k.length
            ? ((n = (0, i.jsx)(m.A, {
                id: "threadEnvironment.network.blockedDomainCount",
                defaultMessage: "{count, plural, one {# domain blocked} other {# domains blocked}}",
                description: "Expand or collapse the list of domains blocked by the source network policy",
                values: { count: k.length },
              })),
              (p[2] = k.length),
              (p[3] = n))
            : (n = p[3]))
        let a = x ? void 0 : "-rotate-90"
        ;(p[4] !== a ? ((r = (0, i.jsx)(y.Awc, { className: a })), (p[4] = a), (p[5] = r)) : (r = p[5]),
          p[6] !== x || p[7] !== w || p[8] !== e || p[9] !== n || p[10] !== r
            ? ((s = (0, i.jsxs)(b.$, {
                color: "ghostSubtle",
                size: "inline",
                className: "gap-1 text-start",
                "aria-expanded": x,
                "aria-controls": w,
                onClick: e,
                children: [n, r],
              })),
              (p[6] = x),
              (p[7] = w),
              (p[8] = e),
              (p[9] = n),
              (p[10] = r),
              (p[11] = s))
            : (s = p[11]),
          (t = s))
      } else if (1 === k.length) {
        let e
        ;(p[12] !== k[0]
          ? ((e = (0, i.jsx)(m.A, {
              id: "threadEnvironment.network.singleBlockedHost",
              defaultMessage: "{host} is blocked",
              description: "Names the one domain blocked in the pending chat settings",
              values: { host: k[0] },
            })),
            (p[12] = k[0]),
            (p[13] = e))
          : (e = p[13]),
          (t = e))
      } else {
        let e,
          n = f.allInternet ? "all" : "packages"
        ;(f.allInternet && f.packageManagers && (n = "both"),
          p[14] !== n
            ? ((e = (0, i.jsx)(m.A, {
                id: "threadEnvironment.network.blockedSwitches",
                defaultMessage:
                  "{setting, select, all {All public internet access is blocked} packages {Package manager domains are blocked} other {Both network switches are blocked}}",
                description:
                  "Identifies which requested switch edits are blocked when there are no blocked domain edits",
                values: { setting: n },
              })),
              (p[14] = n),
              (p[15] = e))
            : (e = p[15]),
          (t = e))
      }
      return (
        p[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(y.Ko7, { className: "text-warning" })), (p[16] = n))
          : (n = p[16]),
        p[17] !== t
          ? ((r = (0, i.jsx)("div", { className: "min-w-0 flex-1 wrap-anywhere", children: t })),
            (p[17] = t),
            (p[18] = r))
          : (r = p[18]),
        p[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(m.A, {
              id: "threadEnvironment.network.removeFromDraft",
              defaultMessage: "Remove blocked",
              description: "Remove the indicated blocked edits from the pending form, leaving other edits unsaved",
            })),
            (p[19] = a))
          : (a = p[19]),
        p[20] !== h || p[21] !== g
          ? ((l = (0, i.jsx)(b.$, { color: "secondary", size: "compact", disabled: h, onClick: g, children: a })),
            (p[20] = h),
            (p[21] = g),
            (p[22] = l))
          : (l = p[22]),
        p[23] !== r || p[24] !== l
          ? ((o = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [n, r, l] })),
            (p[23] = r),
            (p[24] = l),
            (p[25] = o))
          : (o = p[25]),
        p[26] !== k || p[27] !== x || p[28] !== w
          ? ((d =
              k.length > 1 &&
              (0, i.jsx)("ul", {
                id: w,
                hidden: !x,
                className: "mt-1 border-t border-default ps-6 pt-1",
                children: k.map($),
              })),
            (p[26] = k),
            (p[27] = x),
            (p[28] = w),
            (p[29] = d))
          : (d = p[29]),
        p[30] !== o || p[31] !== d
          ? ((c = (0, i.jsxs)("div", {
              className: "rounded-lg border border-default px-3 py-1.5 text-sm",
              children: [o, d],
            })),
            (p[30] = o),
            (p[31] = d),
            (p[32] = c))
          : (c = p[32]),
        c
      )
    }
    function $(e) {
      return (0, i.jsx)("li", { className: "py-0.5 wrap-anywhere", children: e }, e)
    }
    var G = n("nuXe"),
      Q = n.n(G),
      X = n("temr"),
      J = n("dDVm"),
      H = n("KEmQ")
    let Z = (0, o.i1)(k.u, (e, { get: t }) =>
      Object.fromEntries(
        e.flatMap((e) => {
          let { data: n } = t(J.D, e)
          return null == n || "inaccessible" === n ? [] : [[e, n.repository_full_name]]
        }),
      ),
    )
    function ee(e) {
      let t,
        n,
        r,
        a,
        l,
        d = (0, s.c)(18),
        { settings: c, repositories: m, isReadOnly: p, onChange: f } = e
      d[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (d[0] = t)) : (t = d[0])
      let [h, g] = (0, u.useState)(t)
      d[1] !== m ? ((n = Q()(m.map(et))), (d[1] = m), (d[2] = n)) : (n = d[2])
      let x = n,
        v = (0, o._U)(Z, x)
      return (
        d[3] !== c.envVars || d[4] !== c.networkSecrets || d[5] !== c.repositories
          ? ((r = JSON.stringify([c.repositories, c.envVars, c.networkSecrets])),
            (d[3] = c.envVars),
            (d[4] = c.networkSecrets),
            (d[5] = c.repositories),
            (d[6] = r))
          : (r = d[6]),
        d[7] !== f || d[8] !== m || d[9] !== c.repositories
          ? ((a = (e, t) => {
              let n = e.flatMap((e) => {
                let n = m.filter((t) => {
                    let { repositoryId: n } = t
                    return n === e
                  }),
                  r =
                    n.length > 0
                      ? n
                      : c.repositories.filter((t) => {
                          let { repositoryId: n } = t
                          return n === e
                        })
                if (r.length > 0) return r
                let i = t.find((t) => {
                  let { repository: n } = t
                  return n.id === e
                })
                if (null == i || !i.repository.default_branch) throw Error("Repository has no available default branch")
                return [
                  {
                    resourceId: `repository:${crypto.randomUUID()}`,
                    repositoryId: e,
                    ref: i.repository.default_branch,
                    mountPath: "",
                    refresh: void 0,
                    depth: void 0,
                    extraRefs: [],
                    githubLinkId: (0, X.LG)(e) ? void 0 : i.linkId,
                  },
                ]
              })
              ;(g(t), f(n))
            }),
            (d[7] = f),
            (d[8] = m),
            (d[9] = c.repositories),
            (d[10] = a))
          : (a = d[10]),
        d[11] !== p || d[12] !== v || d[13] !== x || d[14] !== h || d[15] !== r || d[16] !== a
          ? ((l = (0, i.jsx)(H.j, {
              repositoryIds: x,
              selections: h,
              repositoryNames: v,
              revision: r,
              isReadOnly: p,
              onChange: a,
            })),
            (d[11] = p),
            (d[12] = v),
            (d[13] = x),
            (d[14] = h),
            (d[15] = r),
            (d[16] = a),
            (d[17] = l))
          : (l = d[17]),
        l
      )
    }
    function et(e) {
      let { repositoryId: t } = e
      return t
    }
    var en = n("ER7Kt")
    let er = (0, o.i1)(k.u, (e, { get: t }) => t(p.M5, { hostId: (0, N.Y)(), threadId: e })?.environmentConfigId),
      ei = (0, o.i1)(k.u, (e, { get: t }) => {
        let n = t(er, e)
        if (null == n || !t(en.iO, n)) return !1
        let { data: r } = t(S.A$, n)
        return r?.provider_metadata?.codex_desktop_default_cloud_parent !== "1" || t(j.Gm)?.[e] != null
      })
    function es(e) {
      let t,
        n = (0, s.c)(11),
        { threadId: r, renderSlots: a } = e,
        l = void 0 === a ? f.E : a,
        d = (0, o.Ul)(en.fp),
        c = (0, o._U)(A.ic, r),
        u = (0, o._U)(p.hU, c),
        g = (0, o.Ul)(h.chatGptAuthenticatedAccountId$),
        x = (0, o.Ul)(h.chatGptAuthenticatedUserId$)
      if (!d) return null
      if (n[0] !== g || n[1] !== c || n[2] !== u || n[3] !== l || n[4] !== x) {
        let e
        ;(n[6] !== g || n[7] !== c || n[8] !== u || n[9] !== x
          ? ((e =
              null != c && null != u && null != g && null != x
                ? (0, i.jsx)(
                    ea,
                    { conversationId: c, identity: { accountId: g, userId: x, environmentId: u } },
                    `${g}:${x}:${u}`,
                  )
                : (0, i.jsx)(el, {
                    children: (0, i.jsx)(U.J, {
                      inPlace: !0,
                      loadingLabel: (0, i.jsx)(m.A, {
                        id: "threadEnvironment.panel.waiting",
                        defaultMessage:
                          "Settings will be available after this thread connects to its Cloud environment",
                        description: "Settings require an existing runtime instance",
                      }),
                    }),
                  })),
            (n[6] = g),
            (n[7] = c),
            (n[8] = u),
            (n[9] = x),
            (n[10] = e))
          : (e = n[10]),
          (t = l({ headerRows: [], content: e })),
          (n[0] = g),
          (n[1] = c),
          (n[2] = u),
          (n[3] = l),
          (n[4] = x),
          (n[5] = t))
      } else t = n[5]
      return t
    }
    function ea({ identity: e, conversationId: t }) {
      let n,
        s = (0, o.gh)(k.u),
        a = (0, o._U)(en.rW, e),
        f = (0, o._U)(er, t),
        A = (0, o._U)(S.A$, f ?? void 0),
        N =
          !(0, o._U)(en.iO, f) && A.isSuccess && A.data.id === f && A.data.version_id === A.data.latest_ready_version_id
            ? A.data
            : void 0,
        D = (0, o._U)(ei, t),
        [T, V] = (0, u.useState)(!1),
        [O, Y] = (0, u.useState)(null),
        [q, K] = (0, u.useState)(!1),
        [L, W] = (0, u.useState)(null),
        [$, G] = (0, u.useState)(null),
        [Q, X] = (0, u.useState)(!1),
        J = (0, u.useRef)(!1),
        [H, Z] = (0, u.useState)(null),
        [et, es] = (0, u.useState)(!1),
        eo = a.data,
        ed = D && null != L && L.configId === f && L.revision === eo?.desiredRevision && null == $ ? L.conflicts : null,
        ec = !Q && null != $ && null != eo && !(0, c.xo)($.baseSettings, eo),
        eu =
          eo?.envVars.map(({ name: e, vaultId: t, optional: n, origin: r }) => ({
            name: e,
            value: "",
            serverId: t,
            optional: n,
            origin: r,
          })) ?? [],
        em =
          eo?.networkSecrets.map(
            ({ name: e, vaultId: t, optional: n, origin: r, variableName: i, allowedDomains: s }, a) => ({
              id: a,
              name: e,
              value: "",
              serverId: t,
              optional: n,
              origin: r,
              source: "environment",
              injectionTarget: { type: "environment_variable", name: i, domain: s.join(", ") },
            }),
          ) ?? [],
        ep = $?.variables ?? eu,
        ef = (0, B.R)(ed),
        eh = $?.secrets ?? em
      function eg(e) {
        W(null)
        let t = l()(e.networkPolicy, eo?.networkPolicy) ? void 0 : e.networkPolicy,
          n = l()(e.repositories, eo?.repositories) ? void 0 : e.repositories,
          r = l()(e.variables, eu) ? void 0 : e.variables,
          i = l()(e.secrets, em) ? void 0 : e.secrets
        ;(G(
          null == r && null == i && null == n && null == t
            ? null
            : { ...e, variables: r, secrets: i, repositories: n, networkPolicy: t },
        ),
          Z(null))
      }
      let ex = () =>
          s.get(en.fp) &&
          s.get(h.chatGptAuthenticatedAccountId$) === e.accountId &&
          s.get(h.chatGptAuthenticatedUserId$) === e.userId &&
          s.get(p.hU, t) === e.environmentId,
        ev = async () => {
          await s.query.invalidate(en.rW, e)
        },
        eb = z($, N)
      if (null == eo)
        return (0, i.jsx)(el, {
          children: a.isError
            ? (0, i.jsx)(v.l, {
                variant: "settings",
                role: "alert",
                content: (0, i.jsx)(m.A, {
                  id: "threadEnvironment.loadFailed",
                  defaultMessage: "Settings could not be loaded for this Default Cloud environment",
                  description: "Error when the existing settings could not be read in a Default Cloud chat",
                }),
                trailingAction: (0, i.jsx)(b.$, {
                  color: "secondary",
                  size: "settingsAction",
                  disabled: a.isFetching,
                  onClick: () => void ev(),
                  children: (0, i.jsx)(m.A, {
                    id: "threadEnvironment.retryLoad",
                    defaultMessage: "Retry",
                    description: "Retry loading settings for this Cloud environment",
                  }),
                }),
              })
            : (0, i.jsx)(U.J, {
                inPlace: !0,
                loadingLabel: (0, i.jsx)(m.A, {
                  id: "restricted.environmentSetup.sidePanel.loading",
                  defaultMessage: "Loading environment…",
                  description: "Status shown while the cloud environment configuration is being loaded",
                }),
              }),
        })
      let ey = []
      if (
        ($?.networkPolicy != null && ey.push("network"),
        $?.repositories != null && ey.push("repositories"),
        $?.variables != null && ey.push("variables"),
        $?.secrets != null && ey.push("secrets"),
        ec)
      )
        n = (0, _.E)("unsavedChangesConflict")
      else if ("network-policy-limit" === H)
        n = {
          ...(0, _.E)("networkPolicyLimit"),
          content: (0, i.jsx)(m.A, {
            id: "threadEnvironment.network.saveLimit",
            defaultMessage:
              "Cloud rejected the submitted network access because it exceeds the configured limit. Your edits are still here.",
            description:
              "Backend network limit rejection, including when the source or rejected host cannot be identified",
          }),
        }
      else if ("source-changed" === H || "source-unavailable" === H || ("object" == typeof H && null != H)) {
        let e
        ;((e =
          "object" == typeof H
            ? (0, i.jsx)(m.A, {
                id: "threadEnvironment.saveRejected",
                defaultMessage: "Cloud rejected the changes ({status}). Your edits are still here.",
                description: "Shows the actual status of a confirmed backend rejection without echoing private inputs",
                values: { status: H.detail },
              })
            : "source-changed" === H
              ? (0, i.jsx)(m.A, {
                  id: "threadEnvironment.network.changed",
                  defaultMessage: "The published network policy changed. Review your edits and try again.",
                  description: "Recovery stopped because different network edits are now allowed",
                })
              : (0, i.jsx)(m.A, {
                  id: "threadEnvironment.network.unavailable",
                  defaultMessage: "Couldn’t verify the published network policy. Your edits are still here.",
                  description: "Recovery stopped because the source could not be read",
                })),
          (n = {
            title: (0, i.jsx)(m.A, {
              id: "threadEnvironment.network.notSaved",
              defaultMessage: "Changes weren’t saved",
              description: "Title after a confirmed rejection or interrupted recovery",
            }),
            content: e,
          }))
      } else
        "unconfirmed" === H &&
          (n = {
            ...(0, _.E)("saveUnconfirmed"),
            content: (0, i.jsx)(m.A, {
              id: "threadEnvironment.retrySave",
              defaultMessage: "Your edits are still here. Try saving again.",
              description:
                "Recovery guidance when saving edits to the environment in a Default Cloud chat could not be confirmed",
            }),
          })
      let ew = null != O && O.configId === f && O.revision === eo.desiredRevision,
        ek = (0, i.jsx)(C.k, { userSections: ey })
      return (
        ed &&
          (ek = (0, i.jsx)("span", {
            role: "alert",
            children: (0, i.jsx)(m.A, {
              id: "threadEnvironment.conflictCount",
              defaultMessage: "{count, plural, one {# conflict} other {# conflicts}}",
              values: { count: ed.conflicts.length },
              description: "Number of settings that need review before promotion",
            }),
          })),
        null != n && (ek = (0, i.jsx)(P.E, {})),
        (0, i.jsxs)(el, {
          footerNotice:
            D &&
            ew &&
            null == $ &&
            (0, i.jsx)(v.l, {
              variant: "callout",
              type: "success",
              role: "status",
              icon: (0, i.jsx)(y.TlE, {}),
              content: (0, i.jsx)(m.A, {
                id: "threadEnvironment.published",
                defaultMessage: "New threads from this configuration will use the promoted settings",
                description: "Confirmation after promoting the saved settings of a thread environment",
              }),
            }),
          footer: (0, i.jsxs)(P.W, {
            status: ek,
            error: n,
            children: [
              D &&
                null == eb &&
                (0, i.jsx)(b.$, {
                  color: ed ? "primary" : "secondary",
                  size: "dialog",
                  loading: T,
                  disabled: null != $ || Q || ew,
                  onClick: () =>
                    void (async function () {
                      let n = w.appServices?.environmentConfigs
                      if (
                        n?.promoteInstanceSettings == null ||
                        null == f ||
                        null == eo ||
                        null != $ ||
                        J.current ||
                        !ex() ||
                        !s.get(ei, t) ||
                        s.get(er, t) !== f
                      )
                        return
                      ;(V(!0), K(!1))
                      let i = s.get(j.Gm)?.[t]
                      return n
                        .promoteInstanceSettings({
                          ...e,
                          configId: f,
                          desiredRevision: eo.desiredRevision,
                          override: ed?.override,
                        })
                        .then((e) => {
                          let n = { stack: [], error: void 0, hasError: !1 }
                          try {
                            let a = (0, r.mS)(n, e, !1)
                            if (!ex() || s.get(er, t) !== f) return
                            if (!a.ok) {
                              if ("conflict" === a.error)
                                return void W({ configId: f, revision: eo.desiredRevision, conflicts: a.review })
                              throw Error("promotion-unconfirmed")
                            }
                            ;(W(null),
                              Y({ configId: f, revision: eo.desiredRevision }),
                              i?.projectKind === "local" &&
                                s.get(g.Kc) &&
                                (0, x.ke)(s, "cloud", f, { type: "local", projectId: (0, d.Np8)(i.projectId) }),
                              s.query.invalidate(S.A$, f),
                              (0, S.Nb)(s, { force: !0 }).catch(() => {}))
                          } catch (e) {
                            ;((n.error = e), (n.hasError = !0))
                          } finally {
                            ;(0, r.hk)(n)
                          }
                        })
                        .catch(async () => {
                          ;(K(!0), await Promise.all([ev(), s.query.invalidate(S.A$, f)]))
                        })
                        .finally(() => {
                          V(!1)
                        })
                    })(),
                  children: ed
                    ? (0, i.jsx)(m.A, {
                        id: "threadEnvironment.overrideAndPromote",
                        defaultMessage: "Override and Promote",
                        description: "Publish the reviewed conflicting settings using this thread’s values",
                      })
                    : (0, i.jsx)(m.A, {
                        id: "threadEnvironment.promote",
                        defaultMessage: "Promote",
                        description:
                          "Publish this thread’s saved settings for future threads from its Cloud configuration",
                      }),
                }),
              null != $ &&
                (null == eb || ec) &&
                (0, i.jsx)(b.$, {
                  color: "secondary",
                  size: "dialog",
                  disabled: Q,
                  onClick: () => {
                    ;(G(null), Z(null))
                  },
                  children: (0, i.jsx)(m.A, {
                    id: "threadEnvironment.discard",
                    defaultMessage: "Discard edits",
                    description: "Discard local instance settings edits",
                  }),
                }),
              !ed &&
                (0, i.jsx)(b.$, {
                  size: "dialog",
                  "aria-busy": Q,
                  loading: Q,
                  disabled: null == $ || ec || (null != eb && null == eb.remaining),
                  onClick: () =>
                    void (async function (t = !1) {
                      if (null != $ && !ec && ex() && !J.current)
                        return (
                          (J.current = !0),
                          X(!0),
                          Z(null),
                          (async function (t, n) {
                            let r = t
                            if (n) {
                              let e = await A.refetch()
                              if (!ex()) return
                              if (
                                !e.isSuccess ||
                                e.data.id !== f ||
                                e.data.version_id !== e.data.latest_ready_version_id
                              )
                                return void Z("source-unavailable")
                              let t = z(r, e.data)
                              if (!eb || !t || !l()(t, eb)) return void Z("source-changed")
                              if (null == t.remaining) return void G(null)
                              r = t.remaining
                            }
                            let i = await (0, en.M2)(s, e, r, ex, f)
                            "network-policy-limit" === i ? (Z(i), f && s.query.invalidate(S.A$, f)) : (G(null), ev())
                          })($, t)
                            .catch(async (e) => {
                              ex() && (Z(e instanceof en.Xb ? { detail: e.message } : "unconfirmed"), await ev())
                            })
                            .finally(() => {
                              ;((J.current = !1), X(!1))
                            })
                        )
                    })(null != eb),
                  children: eb?.remaining
                    ? (0, i.jsx)(m.A, {
                        id: "threadEnvironment.network.applyAllowedChanges",
                        defaultMessage: "Apply allowed changes",
                        description:
                          "Apply the allowed edits to this running chat and discard the blocked edits on success",
                      })
                    : (0, i.jsx)(m.A, {
                        id: "threadEnvironment.save",
                        defaultMessage: "Apply",
                        description: "Save changes to this Cloud environment; they take effect asynchronously",
                      }),
                }),
            ],
          }),
          children: [
            ef.other,
            q &&
              (0, i.jsx)(v.l, {
                variant: "settings",
                role: "alert",
                content: (0, i.jsx)(m.A, {
                  id: "threadEnvironment.promoteFailed",
                  defaultMessage: "Couldn’t confirm promotion. Review the saved settings and try again.",
                  description:
                    "Recovery guidance after promoting a thread environment to its source configuration fails",
                }),
              }),
            (0, i.jsx)(ee, {
              settings: eo,
              repositories: $?.repositories ?? eo.repositories,
              isReadOnly: Q || T || ec,
              onChange: (e) => eg({ ...$, baseSettings: $?.baseSettings ?? eo, repositories: e }),
            }),
            (0, i.jsx)(F, {
              identity: e,
              settings: eo,
              draft: $,
              source: N,
              blocked: eb,
              disabled: Q || T || ec,
              onRemoveBlocked: () => {
                null != $ &&
                  null != eb &&
                  (G(
                    0 !== eb.domains.length && (eb.allInternet || eb.packageManagers)
                      ? eb.allInternet
                        ? {
                            ...$,
                            beforeAllInternet: R($.beforeAllInternet ?? $.baseSettings.networkPolicy, eb.domains),
                          }
                        : { ...$, networkPolicy: R($.networkPolicy ?? $.baseSettings.networkPolicy, eb.domains) }
                      : eb.remaining,
                  ),
                  Z(null))
              },
              onEdit: eg,
            }),
            (0, i.jsx)(E.W, {
              environmentOnly: !0,
              config: void 0,
              configuration: null,
              variables: ep,
              conflictRows: ef.variables,
              issues: [],
              unavailableNames: eh.map(({ injectionTarget: e, name: t }) => e?.name ?? t),
              isReadOnly: Q || T || ec,
              onChange: (e) => {
                eg({ ...$, baseSettings: $?.baseSettings ?? eo, variables: e })
              },
            }),
            (0, i.jsx)(M.m, { secrets: eh, conflictRows: ef.secrets, isReadOnly: Q || T || ec, onEdit: () => es(!0) }),
            et &&
              !Q &&
              (0, i.jsx)(I.b, {
                environmentOnly: !0,
                hasConflict: ec,
                initialSecrets: eh,
                onClose: () => es(!1),
                onLocalSave: (e) => {
                  eg({
                    ...$,
                    baseSettings: $?.baseSettings ?? eo,
                    secrets: e.map((e) => ({
                      ...e,
                      injectionTarget: e.injectionTarget ?? { type: "environment_variable", name: e.name },
                    })),
                  })
                },
              }),
          ],
        })
      )
    }
    function el(e) {
      let t,
        n,
        r,
        a,
        l = (0, s.c)(9),
        { children: o, footer: d, footerNotice: c } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)("h2", {
              className: "text-lg font-medium select-none",
              children: (0, i.jsx)(m.A, {
                id: "threadEnvironment.panel.title",
                defaultMessage: "Cloud environment configuration",
                description: "Current Cloud instance settings panel heading",
              }),
            })),
            (l[0] = t))
          : (t = l[0]),
        l[1] !== o
          ? ((n = (0, i.jsxs)("div", {
              className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-panel",
              children: [t, o],
            })),
            (l[1] = o),
            (l[2] = n))
          : (n = l[2]),
        l[3] !== d || l[4] !== c
          ? ((r =
              null != d &&
              (0, i.jsxs)("footer", {
                className: "flex shrink-0 flex-col gap-3 border-t border-default px-panel py-2",
                children: [c, d],
              })),
            (l[3] = d),
            (l[4] = c),
            (l[5] = r))
          : (r = l[5]),
        l[6] !== n || l[7] !== r
          ? ((a = (0, i.jsxs)("div", { className: "flex h-full min-h-0 flex-col bg-surface", children: [n, r] })),
            (l[6] = n),
            (l[7] = r),
            (l[8] = a))
          : (a = l[8]),
        a
      )
    }
  },
  JzLx(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("zd8w"),
      a = n("v7qY"),
      l = n("vi3X")
    function o(e, t) {
      let n = e.ownerDocument,
        r = n.activeElement
      if (!(r instanceof HTMLElement) || !e.contains(r)) return void t()
      let i = !1,
        s = () => {
          i = !0
        }
      ;(n.addEventListener("focusin", s, !0),
        t(),
        queueMicrotask(() => {
          ;(n.removeEventListener("focusin", s, !0),
            !i && r.isConnected && e.contains(r) && n.activeElement === n.body && r.focus({ preventScroll: !0 }))
        }))
    }
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n,
            d,
            c,
            u,
            m,
            p = (0, i.c)(17),
            { children: f } = e,
            h = (0, s.useContext)(l.V),
            g = (0, s.useRef)(null),
            [x, v] = (0, s.useState)(null),
            b = h?.homeBannerPlacement === "footer",
            y = h?.target
          p[0] !== x
            ? ((t = (e) => {
                if (
                  (null == e && null != x && x.parentNode === g.current && o(x, () => x.remove()),
                  (g.current = e),
                  null != e && null == x)
                ) {
                  let t = e.ownerDocument.createElement("div")
                  ;((t.className = "contents"), v(t))
                } else null != e && null != x && o(x, () => e.insertBefore(x, e.firstChild))
              }),
              (p[0] = x),
              (p[1] = t))
            : (t = p[1])
          let w = t
          return (
            p[2] !== x || p[3] !== y || p[4] !== b
              ? ((n = () => {
                  if (b && null != x && null != y)
                    return (
                      o(x, () => {
                        y.insertBefore(x, y.firstChild)
                      }),
                      () => {
                        x.parentNode === y && o(x, () => x.remove())
                      }
                    )
                }),
                (d = [x, y, b]),
                (p[2] = x),
                (p[3] = y),
                (p[4] = b),
                (p[5] = n),
                (p[6] = d))
              : ((n = p[5]), (d = p[6])),
            (0, s.useLayoutEffect)(n, d),
            p[7] !== x || p[8] !== b || p[9] !== w
              ? ((c = b && null != x ? null : (0, r.jsx)("div", { ref: w, className: "contents" })),
                (p[7] = x),
                (p[8] = b),
                (p[9] = w),
                (p[10] = c))
              : (c = p[10]),
            p[11] !== f || p[12] !== x
              ? ((u = null == x ? null : (0, a.createPortal)(f, x)), (p[11] = f), (p[12] = x), (p[13] = u))
              : (u = p[13]),
            p[14] !== c || p[15] !== u
              ? ((m = (0, r.jsxs)(r.Fragment, { children: [c, u] })), (p[14] = c), (p[15] = u), (p[16] = m))
              : (m = p[16]),
            m
          )
        },
      },
    )
  },
  bZug(e, t, n) {
    n.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      a = n("zd8w"),
      l = n("HZfM"),
      o = n("bVeK")
    function d(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        n,
        a,
        l,
        o,
        d,
        c,
        u = (0, i.c)(24),
        {
          label: m,
          labelId: p,
          labelSizing: f,
          labelWeight: h,
          description: g,
          descriptionId: x,
          icon: v,
          variant: b,
          verticalAlignment: y,
        } = e,
        w = "start" === y ? "items-start" : "items-center",
        k = "grow" === (void 0 === f ? "grow" : f) && "flex-1"
      ;(u[0] !== w || u[1] !== k
        ? ((t = (0, s.A)("flex min-w-0 gap-3", w, k)), (u[0] = w), (u[1] = k), (u[2] = t))
        : (t = u[2]),
        u[3] !== v
          ? ((n = null != v ? (0, r.jsx)("span", { className: "flex shrink-0", children: v }) : null),
            (u[3] = v),
            (u[4] = n))
          : (n = u[4]))
      let j = "featured" === b && "text-base",
        A = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        N = "featured" !== b && "recommendation" !== b && "text-sm",
        S = "nested" !== b && "medium" === (void 0 === h ? "medium" : h) && "font-medium"
      return (
        u[5] !== S || u[6] !== j || u[7] !== A || u[8] !== N
          ? ((a = (0, s.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              j,
              A,
              N,
              S,
            )),
            (u[5] = S),
            (u[6] = j),
            (u[7] = A),
            (u[8] = N),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== m || u[11] !== p || u[12] !== a
          ? ((l = (0, r.jsx)("div", { id: p, className: a, children: m })),
            (u[10] = m),
            (u[11] = p),
            (u[12] = a),
            (u[13] = l))
          : (l = u[13]),
        u[14] !== g || u[15] !== x
          ? ((o = g
              ? (0, r.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: g,
                })
              : null),
            (u[14] = g),
            (u[15] = x),
            (u[16] = o))
          : (o = u[16]),
        u[17] !== l || u[18] !== o
          ? ((d = (0, r.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [l, o] })),
            (u[17] = l),
            (u[18] = o),
            (u[19] = d))
          : (d = u[19]),
        u[20] !== d || u[21] !== t || u[22] !== n
          ? ((c = (0, r.jsxs)("div", { className: t, children: [n, d] })),
            (u[20] = d),
            (u[21] = t),
            (u[22] = n),
            (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    n.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            n,
            a,
            l,
            o,
            d,
            c = (0, i.c)(18),
            { children: u, compactLabelInset: m, label: p, valueAlignment: f, variant: h } = e,
            g = void 0 === m || m,
            x = void 0 === f ? "start" : f,
            v = void 0 === h ? "default" : h,
            b =
              "compact" === v
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== b ? ((t = (0, s.A)("grid items-center", b)), (c[0] = b), (c[1] = t)) : (t = c[1]),
            c[2] !== g || c[3] !== v
              ? ((n = (0, s.A)(
                  "min-w-0",
                  "compact" === v
                    ? (0, s.A)("flex items-center pe-2 text-start", g && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = g),
                (c[3] = v),
                (c[4] = n))
              : (n = c[4]),
            c[5] !== p || c[6] !== n
              ? ((a = (0, r.jsx)("div", { className: n, children: p })), (c[5] = p), (c[6] = n), (c[7] = a))
              : (a = c[7]),
            c[8] !== x || c[9] !== v
              ? ((l = (0, s.A)(
                  "min-w-0",
                  "compact" === v
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, s.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (c[8] = x),
                (c[9] = v),
                (c[10] = l))
              : (l = c[10]),
            c[11] !== u || c[12] !== l
              ? ((o = (0, r.jsx)("div", { className: l, children: u })), (c[11] = u), (c[12] = l), (c[13] = o))
              : (o = c[13]),
            c[14] !== t || c[15] !== a || c[16] !== o
              ? ((d = (0, r.jsxs)("div", { className: t, children: [a, o] })),
                (c[14] = t),
                (c[15] = a),
                (c[16] = o),
                (c[17] = d))
              : (d = c[17]),
            d
          )
        },
        ic: function (e) {
          let t,
            n,
            l,
            o,
            d = (0, i.c)(35),
            {
              label: u,
              labelSizing: m,
              labelWeight: p,
              layout: f,
              description: h,
              control: g,
              controlSizing: x,
              icon: v,
              className: b,
              id: y,
              inset: w,
              size: k,
              variant: j,
              verticalAlignment: A,
            } = e,
            N = void 0 === m ? "grow" : m,
            S = void 0 === p ? "medium" : p,
            _ = void 0 === f ? "default" : f,
            I = void 0 === x ? "minimum" : x,
            M = void 0 === w || w,
            C = void 0 === k ? "default" : k,
            E = void 0 === j ? "default" : j,
            B = void 0 === A ? "center" : A,
            P = (0, a.useId)(),
            U = null != u || null != h || null != v,
            D = "function" == typeof g,
            T = D && null != u ? `${P}-label` : void 0,
            z = D && h ? `${P}-description` : void 0,
            R = M && ("split" !== _ || "default" !== E) && "px-4",
            V = M && "nested" === E && "group-data-[density=form]/settings:px-5",
            O =
              "stacked" === E &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            Y =
              "nested" === E &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            q = "stacked" !== E && ("start" === B ? "items-start" : "items-center"),
            F = "split" === _ && "default" === E && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            d[0] !== b ||
            d[1] !== _ ||
            d[2] !== C ||
            d[3] !== V ||
            d[4] !== O ||
            d[5] !== Y ||
            d[6] !== q ||
            d[7] !== F ||
            d[8] !== R ||
            d[9] !== E
              ? ((t = (0, s.A)(
                  "@container/settings-row",
                  R,
                  V,
                  O,
                  Y,
                  q,
                  F,
                  "default" === _ &&
                    ("default" === E || "featured" === E || "recommendation" === E) &&
                    (0, s.A)(
                      "flex justify-between",
                      "featured" === E && (0, s.A)("gap-6", "compact" === C ? "min-h-11 py-2" : "py-4"),
                      "featured" !== E && ("compact" === C ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === E && "dark:bg-secondary-ghost-hover",
                  b,
                )),
                (d[0] = b),
                (d[1] = _),
                (d[2] = C),
                (d[3] = V),
                (d[4] = O),
                (d[5] = Y),
                (d[6] = q),
                (d[7] = F),
                (d[8] = R),
                (d[9] = E),
                (d[10] = t))
              : (t = d[10]),
            d[11] !== h ||
            d[12] !== z ||
            d[13] !== U ||
            d[14] !== v ||
            d[15] !== u ||
            d[16] !== T ||
            d[17] !== N ||
            d[18] !== S ||
            d[19] !== E ||
            d[20] !== B
              ? ((n = U
                  ? (0, r.jsx)(c, {
                      label: u,
                      labelId: T,
                      labelSizing: N,
                      labelWeight: S,
                      description: h,
                      descriptionId: z,
                      icon: v,
                      variant: E,
                      verticalAlignment: B,
                    })
                  : null),
                (d[11] = h),
                (d[12] = z),
                (d[13] = U),
                (d[14] = v),
                (d[15] = u),
                (d[16] = T),
                (d[17] = N),
                (d[18] = S),
                (d[19] = E),
                (d[20] = B),
                (d[21] = n))
              : (n = d[21]),
            d[22] !== g || d[23] !== I || d[24] !== z || d[25] !== D || d[26] !== T || d[27] !== _ || d[28] !== E
              ? ((l =
                  null != g && !1 !== g
                    ? (0, r.jsx)("div", {
                        className: (0, s.A)(
                          "stacked" === E && "w-full",
                          "nested" === E && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === _ &&
                            "default" === E &&
                            (0, s.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === I && "w-full",
                            ),
                          "default" === _ &&
                            ("default" === E || "featured" === E || "recommendation" === E) &&
                            (0, s.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === I ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === I && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: D ? g({ "aria-labelledby": T, "aria-describedby": z }) : g,
                      })
                    : null),
                (d[22] = g),
                (d[23] = I),
                (d[24] = z),
                (d[25] = D),
                (d[26] = T),
                (d[27] = _),
                (d[28] = E),
                (d[29] = l))
              : (l = d[29]),
            d[30] !== y || d[31] !== t || d[32] !== n || d[33] !== l
              ? ((o = (0, r.jsxs)("div", { id: y, className: t, children: [n, l] })),
                (d[30] = y),
                (d[31] = t),
                (d[32] = n),
                (d[33] = l),
                (d[34] = o))
              : (o = d[34]),
            o
          )
        },
        jj: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: s } = e
          return (
            n[0] !== s
              ? ((t = (0, r.jsx)("span", { className: "text-xs text-secondary", children: s })), (n[0] = s), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            n,
            a,
            o,
            u,
            m,
            p,
            f,
            h,
            g,
            x,
            v,
            b,
            y,
            w,
            k,
            j,
            A,
            N,
            S,
            _,
            I,
            M,
            C = (0, i.c)(54)
          C[0] !== e
            ? (({
                actions: t,
                actionsPlacement: x,
                ariaControls: n,
                ariaExpanded: a,
                ariaLabel: o,
                className: u,
                description: m,
                disabled: p,
                edgeRounding: v,
                icon: f,
                label: g,
                size: b,
                trailing: w,
                variant: y,
                ...h
              } = e),
              (C[0] = e),
              (C[1] = t),
              (C[2] = n),
              (C[3] = a),
              (C[4] = o),
              (C[5] = u),
              (C[6] = m),
              (C[7] = p),
              (C[8] = f),
              (C[9] = h),
              (C[10] = g),
              (C[11] = x),
              (C[12] = v),
              (C[13] = b),
              (C[14] = y),
              (C[15] = w))
            : ((t = C[1]),
              (n = C[2]),
              (a = C[3]),
              (o = C[4]),
              (u = C[5]),
              (m = C[6]),
              (p = C[7]),
              (f = C[8]),
              (h = C[9]),
              (g = C[10]),
              (x = C[11]),
              (v = C[12]),
              (b = C[13]),
              (y = C[14]),
              (w = C[15]))
          let E = void 0 === v ? "row" : v,
            B = void 0 === b ? "default" : b,
            P = void 0 === y ? "default" : y,
            U = "before-trailing" === (void 0 === x ? "end" : x) && !p && null != t && null != w,
            D = U ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          C[16] !== u || C[17] !== U || C[18] !== B || C[19] !== D || C[20] !== P
            ? ((k = (0, s.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                D,
                "empty" === P
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, s.A)(
                      "px-4 text-start",
                      "nested" === P && "min-h-10 py-0.5",
                      "nested" !== P && ("large" === B ? "py-4" : "py-3"),
                      U && "gap-2",
                      !U && ("nested" === P ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (C[16] = u),
              (C[17] = U),
              (C[18] = B),
              (C[19] = D),
              (C[20] = P),
              (C[21] = k))
            : (k = C[21])
          let T = k
          ;(C[22] !== m || C[23] !== f || C[24] !== g || C[25] !== P
            ? ((j =
                "empty" === P
                  ? (0, r.jsxs)(r.Fragment, { children: [f, g] })
                  : (0, r.jsx)(c, { label: g, description: m, icon: f, variant: P, verticalAlignment: "center" })),
              (C[22] = m),
              (C[23] = f),
              (C[24] = g),
              (C[25] = P),
              (C[26] = j))
            : (j = C[26]),
            C[27] !== w
              ? ((A =
                  null != w
                    ? (0, r.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (C[27] = w),
                (C[28] = A))
              : (A = C[28]),
            C[29] !== j || C[30] !== A
              ? ((N = (0, r.jsxs)(r.Fragment, { children: [j, A] })), (C[29] = j), (C[30] = A), (C[31] = N))
              : (N = C[31]))
          let z = N,
            R = U ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            V = "row" === E && "first:rounded-t-2xl last:rounded-b-2xl",
            O = "recommendation" === P && "dark:bg-secondary-ghost-hover",
            Y = !p && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            q =
              !p &&
              "recommendation" === P &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            C[32] !== R || C[33] !== V || C[34] !== O || C[35] !== Y || C[36] !== q
              ? ((S = (0, s.A)("group w-full items-center", R, V, O, Y, q)),
                (C[32] = R),
                (C[33] = V),
                (C[34] = O),
                (C[35] = Y),
                (C[36] = q),
                (C[37] = S))
              : (S = C[37]),
            C[38] !== n || C[39] !== a || C[40] !== o || C[41] !== z || C[42] !== p || C[43] !== h || C[44] !== T
              ? ((_ =
                  null != h.to
                    ? (0, r.jsx)(l.N_, {
                        ...h,
                        className: T,
                        "aria-controls": n,
                        "aria-expanded": a,
                        "aria-label": o,
                        "aria-disabled": p || void 0,
                        tabIndex: p ? -1 : void 0,
                        onClick: p ? d : h.onClick,
                        children: z,
                      })
                    : (0, r.jsx)("button", {
                        ...h,
                        className: T,
                        "aria-controls": n,
                        "aria-expanded": a,
                        "aria-label": o,
                        disabled: p,
                        type: "button",
                        children: z,
                      })),
                (C[38] = n),
                (C[39] = a),
                (C[40] = o),
                (C[41] = z),
                (C[42] = p),
                (C[43] = h),
                (C[44] = T),
                (C[45] = _))
              : (_ = C[45]),
            C[46] !== t || C[47] !== p || C[48] !== U
              ? ((I =
                  p || null == t
                    ? null
                    : (0, r.jsx)("div", {
                        className: (0, s.A)(
                          "flex shrink-0 items-center gap-1",
                          U ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (C[46] = t),
                (C[47] = p),
                (C[48] = U),
                (C[49] = I))
              : (I = C[49]),
            C[50] !== S || C[51] !== _ || C[52] !== I
              ? ((M = (0, r.jsxs)("div", { className: S, children: [_, I] })),
                (C[50] = S),
                (C[51] = _),
                (C[52] = I),
                (C[53] = M))
              : (M = C[53]),
            M
          )
        },
        kf: function (e) {
          let t,
            n = (0, i.c)(2),
            { children: s } = e
          return (
            n[0] !== s
              ? ((t = (0, r.jsx)("span", { className: "text-tertiary", children: s })), (n[0] = s), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            n,
            a,
            l,
            d,
            c,
            u,
            m,
            p,
            f,
            h = (0, i.c)(43),
            {
              id: g,
              ariaLabel: x,
              autoFocus: v,
              checked: b,
              description: y,
              highlightSelected: w,
              indicator: k,
              label: j,
              name: A,
              onChange: N,
              onClick: S,
              value: _,
              variant: I,
            } = e,
            M = void 0 === w || w,
            C = void 0 === k ? "radio" : k,
            E = void 0 === I ? "default" : I
          ;(h[0] !== b || h[1] !== y || h[2] !== M || h[3] !== C || h[4] !== E
            ? ((t = (0, s.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === E &&
                  (0, s.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != y ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === E && b && M && "radio" === C && "bg-background-neutral-soft-alpha",
                "form" === E && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === E && "items-center gap-2",
                "checkmark" === C && "after:ms-7",
              )),
              (h[0] = b),
              (h[1] = y),
              (h[2] = M),
              (h[3] = C),
              (h[4] = E),
              (h[5] = t))
            : (t = h[5]),
            h[6] !== x || h[7] !== g
              ? ((n = (0, r.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: g,
                })),
                (h[6] = x),
                (h[7] = g),
                (h[8] = n))
              : (n = h[8]),
            h[9] !== C || h[10] !== E
              ? ((a = (0, s.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === C
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, s.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === E ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (h[9] = C),
                (h[10] = E),
                (h[11] = a))
              : (a = h[11]))
          let B = null != y ? `${g}-description` : void 0
          ;(h[12] !== x ||
          h[13] !== v ||
          h[14] !== b ||
          h[15] !== g ||
          h[16] !== A ||
          h[17] !== N ||
          h[18] !== S ||
          h[19] !== a ||
          h[20] !== B ||
          h[21] !== _
            ? ((l = (0, r.jsx)("input", {
                id: g,
                className: a,
                "aria-label": x,
                "aria-describedby": B,
                autoFocus: v,
                type: "radio",
                name: A,
                value: _,
                checked: b,
                onChange: N,
                onClick: S,
              })),
              (h[12] = x),
              (h[13] = v),
              (h[14] = b),
              (h[15] = g),
              (h[16] = A),
              (h[17] = N),
              (h[18] = S),
              (h[19] = a),
              (h[20] = B),
              (h[21] = _),
              (h[22] = l))
            : (l = h[22]),
            h[23] !== b || h[24] !== C
              ? ((d = "checkmark" === C ? (0, r.jsx)(o.ALZ, { className: (0, s.A)(!b && "invisible") }) : null),
                (h[23] = b),
                (h[24] = C),
                (h[25] = d))
              : (d = h[25]))
          let P = "default" === E ? "text-sm font-medium" : "text-base"
          return (
            h[26] !== P ? ((c = (0, s.A)("text-default", P)), (h[26] = P), (h[27] = c)) : (c = h[27]),
            h[28] !== j || h[29] !== c
              ? ((u = (0, r.jsx)("span", { className: c, children: j })), (h[28] = j), (h[29] = c), (h[30] = u))
              : (u = h[30]),
            h[31] !== y || h[32] !== g
              ? ((m =
                  null != y
                    ? (0, r.jsx)("span", {
                        id: `${g}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: y,
                      })
                    : null),
                (h[31] = y),
                (h[32] = g),
                (h[33] = m))
              : (m = h[33]),
            h[34] !== u || h[35] !== m
              ? ((p = (0, r.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, m],
                })),
                (h[34] = u),
                (h[35] = m),
                (h[36] = p))
              : (p = h[36]),
            h[37] !== p || h[38] !== t || h[39] !== n || h[40] !== l || h[41] !== d
              ? ((f = (0, r.jsxs)("div", { className: t, children: [n, l, d, p] })),
                (h[37] = p),
                (h[38] = t),
                (h[39] = n),
                (h[40] = l),
                (h[41] = d),
                (h[42] = f))
              : (f = h[42]),
            f
          )
        },
      },
    )
  },
  ZEx5(e, t, n) {
    n.d(t, { t: () => l })
    var r = n("ABep"),
      i = n("QosV"),
      s = n("on57"),
      a = n("bZug")
    function l(e) {
      let t,
        n,
        l,
        o = (0, i.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: m, variant: p, decoration: f } = e,
        h = void 0 === p ? "default" : p,
        g = "flat" === h || "rows" === h ? a.s : a.r,
        x = void 0 === m || m ? g : "flex flex-col",
        v = "recommendation" === h && "rounded-[20px]",
        b = "recommendation" !== h && "flat" !== h && "rows" !== h && "outlinedLarge" !== h && "rounded-2xl",
        y = "outlinedLarge" === h && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === f && "daybreak-VsXdEH",
        k = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        j =
          "default" === h &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        A = "metered" === h && "ring-1 ring-inset ring-border-subtle",
        N = "secondary" === h && "bg-surface-secondary/92",
        S = "muted" === h && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
        _ =
          "form" === h &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        I = "outlined" === h && "border border-subtle bg-transparent",
        M =
          "flat" === h &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        C = "input" === h && "border border-primary-outline bg-primary-soft",
        E = "recommendation" === h && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== c ||
        o[1] !== j ||
        o[2] !== A ||
        o[3] !== N ||
        o[4] !== S ||
        o[5] !== _ ||
        o[6] !== I ||
        o[7] !== M ||
        o[8] !== C ||
        o[9] !== E ||
        o[10] !== x ||
        o[11] !== v ||
        o[12] !== b ||
        o[13] !== y ||
        o[14] !== w ||
        o[15] !== k
          ? ((t = (0, s.A)(x, v, b, y, w, k, j, A, N, S, _, I, M, C, E, c)),
            (o[0] = c),
            (o[1] = j),
            (o[2] = A),
            (o[3] = N),
            (o[4] = S),
            (o[5] = _),
            (o[6] = I),
            (o[7] = M),
            (o[8] = C),
            (o[9] = E),
            (o[10] = x),
            (o[11] = v),
            (o[12] = b),
            (o[13] = y),
            (o[14] = w),
            (o[15] = k),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== h
          ? ((n =
              "default" === h || "metered" === h
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
                : void 0),
            (o[17] = h),
            (o[18] = n))
          : (n = o[18]),
        o[19] !== d || o[20] !== t || o[21] !== n
          ? ((l = (0, r.jsx)("div", { className: t, style: n, children: d })),
            (o[19] = d),
            (o[20] = t),
            (o[21] = n),
            (o[22] = l))
          : (l = o[22]),
        l
      )
    }
  },
}
//# sourceMappingURL=150595.08945a16f7.js.map
