export const __rspack_esm_ids = [377631]
export const __webpack_modules__ = {
  YUUK(e, t) {
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
    var i = n("eWgO"),
      r = n("Dgwo"),
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
              let r = await (0, o.Wr)(e, t, { priority: "critical" })
              return (e.query.setData(o.b9, { authMethod: n, hostId: t }, r), (0, i.W6)(r))
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
                  let { data: i } = await (0, r.V)(e, t).sendRequest(
                    "model/list",
                    { includeHidden: !0, cursor: null, limit: 100 },
                    { priority: "critical" },
                  )
                  if (null == n) return i.find((e) => e.isDefault) ?? null
                  return i.find((e) => e.model === n || e.id === n) ?? null
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
    var i = n("ABep"),
      r = n("QosV"),
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
            u = (0, r.c)(15)
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
              ? ((c = (0, i.jsx)("div", { className: d, "data-pane-header-placement": l, ...o })),
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
    var i = n("VtPR")
    n.d(t, { E: () => i.E })
  },
  vpCL(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("Dlb7")
    function l(e) {
      return (0, i.jsx)(
        a.U,
        {
          divider: e.divider,
          height: e.height,
          placement: e.placement,
          children: (0, i.jsx)("div", {
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
            a = (0, r.c)(7),
            { headerRows: o, content: d } = e
          return (
            a[0] !== o ? ((t = o.map(l)), (a[0] = o), (a[1] = t)) : (t = a[1]),
            a[2] !== d
              ? ((n = (0, i.jsx)(
                  "div",
                  {
                    className: "relative min-h-0 min-w-0 flex-1 overflow-hidden",
                    "data-app-shell-pane-content-viewport": !0,
                    children: (0, i.jsx)("div", {
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
              ? ((s = (0, i.jsxs)("div", { className: "flex h-full min-h-0 min-w-0 flex-col", children: [t, n] })),
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
    var i = n("ABep"),
      r = n("vpCL")
    n.d(
      t,
      {},
      {
        E: function (e) {
          return (0, i.jsx)(r.Z, { ...e })
        },
      },
    )
  },
  mGK9(e, t, n) {
    var i = n("SRbQ"),
      r = n("l00C"),
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
            let c = e.get(r.u$, t),
              u = !1,
              m = () => {
                if (u || e.get(r.u$, t) !== c) throw (0, o.NK)()
              }
            if (t === l.fI && s.appServices?.copilot != null) {
              let [e, t] = await Promise.all([
                (0, a.P)(s.appServices.copilot.getPreferences()),
                (0, a.P)(s.appServices.copilot.isAvailable()),
              ])
              if ((m(), e.useForInference && t)) return "copilot"
            }
            if (null == c) return null
            let p = (0, i.mS)(
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
              (0, i.mS)(n, await p, !1).onRpcBroken(() => {
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
            ;(0, i.hk)(n)
          }
        },
      },
    )
  },
  vi3X(e, t, n) {
    let i = (0, n("zd8w").createContext)(void 0)
    n.d(t, {}, { V: i })
  },
  XlHx(e, t, n) {
    n.d(t, { at: () => T, KB: () => P })
    var i = n("SRbQ"),
      r = n("QosV"),
      s = n("zTeN"),
      a = n("N2rm"),
      l = n("wTVm"),
      o = n("Dgwo"),
      d = n("tl5a"),
      c = n("MYVk"),
      u = n("YLui"),
      m = n("PAzX"),
      p = n("AqHb"),
      f = n("SPnB"),
      h = n("seW7"),
      g = n("r0y7"),
      x = n("OMIV")
    function v(e, t, n = "fresh") {
      return async (r, s) => {
        let a = (0, g.jD)(r, t),
          l = r.message.submissionOptions ?? r.options
        if (null == l) {
          let n = { stack: [], error: void 0, hasError: !1 }
          try {
            let s = (0, i.mS)(n, (0, o.V)(e, t).getThreadExecutionState(r.conversationId), !1),
              a = (0, i.mS)(n, await s, !1)
            l = {
              executionHostId: e.get(d.qX, r.conversationId) ?? t,
              agentMode: "auto",
              permissionProfileId: null,
              serviceTier: await (0, m.e)(e, t, a?.latestModel ?? null),
              shouldSendPermissionOverrides: !1,
              usePermissionSelection: !0 === e.get(x.JW, "4226282475"),
              collaborationMode: null,
              clientUserMessageId: r.message.id,
            }
          } catch (e) {
            ;((n.error = e), (n.hasError = !0))
          } finally {
            ;(0, i.hk)(n)
          }
        }
        if (
          (0, u.sI)(
            r.message.context,
            l.executionHostId,
            e.get(f.chatGptAuthenticatedAccountId$),
            "durable" === (0, p._)(l.executionHostId),
          )
        )
          throw Error(u.fi)
        let c = await (0, h.FB)(
          {
            scope: e,
            turnTrigger: r.message.context.turnTrigger ?? "composer_queue_run_now",
            managerHostId: t,
            hostId: l.executionHostId,
            targetConversationId: a.conversationId,
            context: a.message.context,
            cwd: a.message.cwd,
            agentMode: l.agentMode,
            permissionProfileId: l.permissionProfileId,
            serviceTier: l.serviceTier,
            shouldSendPermissionOverrides: l.shouldSendPermissionOverrides,
            usePermissionSelection: l.usePermissionSelection,
            permissionSelection: l.permissionSelection,
            activeCollaborationMode: l.collaborationMode,
            clientUserMessageId: l.clientUserMessageId,
            restoreMessage: a.message,
            isQueuedReplay: "queued" === n,
          },
          s,
        )
        return ((c.steer.restoreMessage = r.message), c)
      }
    }
    var b = n("TYK1"),
      y = n("jiwy"),
      w = n("OWtl"),
      j = n("yLBk"),
      k = n("iKMW"),
      A = n("ABep"),
      N = n("oyxz"),
      S = n("Y5Sy"),
      _ = n("Ed5q"),
      I = n("SGsN"),
      M = n("c9K0"),
      C = n("hgea"),
      B = n("WFY2"),
      E = n("R69Z"),
      U = n("CDw0"),
      D = n("Ld2s")
    function P(e) {
      var t
      let n,
        a,
        l,
        m,
        p,
        f,
        g,
        x,
        j,
        D,
        P,
        z,
        V,
        R,
        O = (0, r.c)(45),
        Y = (0, s.gh)(w.u),
        F = (0, s._U)(d.qX, e)
      O[0] !== e || O[1] !== F
        ? ((n = null == e ? null : { hostId: F, threadId: e }), (O[0] = e), (O[1] = F), (O[2] = n))
        : (n = O[2])
      let q = n,
        K = (0, s._U)(c.Ax, q),
        L = (0, s._U)(k.kf, q)
      O[3] !== q || O[4] !== Y
        ? ((a = (e) => Y.get(c.Ax, q)?.find((t) => t.id === e) ?? null), (O[3] = q), (O[4] = Y), (O[5] = a))
        : (a = O[5])
      let W = a
      O[6] !== F || O[7] !== Y
        ? ((l = async () => (0, o.V)(Y, F).getTurnCoordinator()), (O[6] = F), (O[7] = Y), (O[8] = l))
        : (l = O[8])
      let G = l
      ;(O[9] !== K ? ((m = K ?? []), (O[9] = K), (O[10] = m)) : (m = O[10]),
        O[11] !== L ? ((p = L ?? []), (O[11] = L), (O[12] = p)) : (p = O[12]))
      let $ = null != e && null == K
      return (
        O[13] !== e || O[14] !== F || O[15] !== Y
          ? ((f = async (t, n) => (null == e ? null : T(Y, F, e, t, n))),
            (O[13] = e),
            (O[14] = F),
            (O[15] = Y),
            (O[16] = f))
          : (f = O[16]),
        O[17] !== G || O[18] !== e
          ? ((g = async () => {
              if (null == e) return []
              let t = await G()
              return await t.clearQueuedMessages(e)
            }),
            (O[17] = G),
            (O[18] = e),
            (O[19] = g))
          : (g = O[19]),
        O[20] !== e || O[21] !== W || O[22] !== F
          ? ((x = async (t) => {
              let n = W(t.messageId)
              null != e &&
                null != n &&
                (await (async function (
                  { scope: e, conversationId: t, executionHostId: n, onSendResult: r, submission: s },
                  a,
                  l,
                ) {
                  let c
                  if (e.get(S.Nk)) return void r?.("failed")
                  let m = (0, u.zi)(l.context)
                  ;(m && (0, M.c7)(e, t, l.id), s.onAttempt?.(), r?.("attempted"))
                  let p = (0, U.FA)(s.prepareContext)
                  try {
                    let n = { stack: [], error: void 0, hasError: !1 }
                    try {
                      let r = (0, i.mS)(n, await (0, o.V)(e, a).getTurnCoordinator(), !1),
                        d = (0, o.V)(e, a),
                        u = (0, i.mS)(n, await d.getFollowUpContext(t), !1),
                        m = await (0, b.F)(e, a, t, u),
                        f = () => {
                          ;(m || (0, h.Kv)(e, t, u)) && (0, y.qo)(e)
                        }
                      ;(f(),
                        (c = await r.sendQueuedMessageNow(
                          t,
                          l.id,
                          s.getOptions(l),
                          async (t, n) => {
                            let i =
                              !0 === t.message.context.localSubmitPrepared
                                ? t.message.context
                                : await p.prepare(t.message.context, { isQueuedMessage: !0 })
                            f()
                            let r = await v(e, a, "queued")({ ...t, message: { ...t.message, context: i } }, n)
                            return (f(), r)
                          },
                          async () => {
                            ;(f(), p.validate())
                          },
                        )))
                    } catch (e) {
                      ;((n.error = e), (n.hasError = !0))
                    } finally {
                      ;(0, i.hk)(n)
                    }
                  } catch (n) {
                    ;(p.settleError(n),
                      m && (0, M.sr)(e, t, l.id),
                      s.onError?.(),
                      r?.("failed"),
                      B.v.warning("Failed to send queued message", {
                        safe: {},
                        sensitive: { conversationId: t, error: n },
                      }))
                    return
                  }
                  if ((p.settle(c), c?.status !== "sent")) {
                    if ((m && (0, M.sr)(e, t, l.id), c?.status === "queued")) {
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
                    ;(s.onError?.(), r?.("failed"))
                    return
                  }
                  ;((0, C.e)(
                    e,
                    l.context.sharedThreadAttributions?.filter(({ shareId: e }) =>
                      l.context.fileAttachments.some((t) => t.sharedThread?.shareId === e),
                    ),
                    { threadId: t, turnId: c.turnId },
                  ),
                    (0, _.ML)(e, l.context.artifactAnnotationBatch, { threadId: t, turnId: c.turnId }),
                    m && (0, M.AF)(e, t, l.id, c.turnId, (e) => e(d.BP, { hostId: a, threadId: t })),
                    (0, E.Q)(e, n, l),
                    s.onSuccess?.(l, c),
                    r?.("succeeded", { threadId: t, turnId: c.turnId }))
                })({ ...t, conversationId: e }, F, n))
            }),
            (O[20] = e),
            (O[21] = W),
            (O[22] = F),
            (O[23] = x))
          : (x = O[23]),
        O[24] !== G || O[25] !== e
          ? ((z = async (t) => {
              if (null == e) return null
              let n = await G()
              return await n.removeQueuedMessage(e, t)
            }),
            (j = async (t) => {
              if (null == e) return
              let n = await G()
              t.message.id = await n.restoreQueuedMessage(e, t)
            }),
            (D = async () => {
              if (null == e) return
              let t = await G()
              await t.resumeInterruptedQueuedMessages(e)
            }),
            (P = async (t) => {
              if (null == e) return
              let n = await G()
              await n.reorderQueuedMessages(e, t)
            }),
            (O[24] = G),
            (O[25] = e),
            (O[26] = j),
            (O[27] = D),
            (O[28] = P),
            (O[29] = z))
          : ((j = O[26]), (D = O[27]), (P = O[28]), (z = O[29])),
        O[30] !== W ||
        O[31] !== j ||
        O[32] !== D ||
        O[33] !== P ||
        O[34] !== f ||
        O[35] !== g ||
        O[36] !== x ||
        O[37] !== z
          ? ((V = {
              ...(t = {
                get: W,
                send: f,
                clear: g,
                start: x,
                remove: z,
                restore: j,
                resumeInterruptedSteers: D,
                reorder: P,
              }),
              beginEdit: t.remove,
              restoreEdit: t.restore,
              async transfer(e, n) {
                let i,
                  r = await t.remove(e)
                if (null == r) return null
                try {
                  i = await n(r.message)
                } catch (e) {
                  throw (await t.restore(r), e)
                }
                return (null == i && (await t.restore(r)), i)
              },
            }),
            (O[30] = W),
            (O[31] = j),
            (O[32] = D),
            (O[33] = P),
            (O[34] = f),
            (O[35] = g),
            (O[36] = x),
            (O[37] = z),
            (O[38] = V))
          : (V = O[38]),
        O[39] !== q || O[40] !== V || O[41] !== m || O[42] !== p || O[43] !== $
          ? ((R = { threadKey: q, messages: m, visibleMessages: p, isLoading: $, actions: V }),
            (O[39] = q),
            (O[40] = V),
            (O[41] = m),
            (O[42] = p),
            (O[43] = $),
            (O[44] = R))
          : (R = O[44]),
        R
      )
    }
    async function T(e, t, n, r, s) {
      let d = { stack: [], error: void 0, hasError: !1 }
      try {
        let c = (0, o.V)(e, t),
          u = (0, i.mS)(d, await c.getFollowUpContext(n), !1),
          [m, p] = await Promise.all([
            (0, b.F)(e, t, n, u),
            void 0 === r.multiUserMessageSender
              ? (0, g.tu)(e, t, u?.threadAccess === "shared")
              : (r.multiUserMessageSender ?? null),
          ]),
          f =
            s?.editPosition?.messageThreadId ?? r.context.messageThreadId ?? (m && (0, a.ZJ)(t) ? (0, l.A)() : void 0),
          x = (0, i.mS)(d, await (0, o.V)(e, t).getTurnCoordinator(), !1),
          w = () => {
            ;(m || (0, h.Kv)(e, n, u)) && (0, y.qo)(e)
          }
        return await (0, D.t)(
          e,
          r.context,
          (i) => (
            w(),
            x.sendMessage(
              {
                conversationId: n,
                message: {
                  ...r,
                  threadAccess: u?.threadAccess,
                  responsesapiClientMetadata: (0, j.b)(r.responsesapiClientMetadata),
                  multiUserMessageSender: p,
                  text: i === r.context ? r.text : i.prompt,
                  context: {
                    ...i,
                    messageThreadId: f,
                    mcpAppModelContextAttachments: i.mcpAppModelContextAttachments?.map((e) =>
                      "message" === e.kind ? e : { ...e, untrusted: !0 },
                    ),
                  },
                  id: (0, l.A)(),
                  createdAt: Date.now(),
                },
                ...s,
              },
              v(e, t),
              void 0,
              async () => w(),
            )
          ),
        )
      } catch (e) {
        ;((d.error = e), (d.hasError = !0))
      } finally {
        ;(0, i.hk)(d)
      }
    }
  },
  TjgH(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57")
    let a = {
      catalog:
        "gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-sm leading-5 font-normal text-default",
      catalogDisabled:
        "gap-2 rounded-full border border-subtle bg-surface-tertiary px-3 py-1.5 text-sm leading-5 font-normal text-tertiary opacity-70",
      unread:
        "h-3.75 min-w-3.75 shrink-0 justify-center rounded-unread-badge bg-info-solid px-0.5 text-unread-badge text-(--color-text-unread-badge) tabular-nums select-none",
      count:
        "h-5 min-w-6 justify-center rounded-full bg-text/8 px-1.25 text-xs leading-4.5 font-semibold tracking-[0.3px] text-(--gray-750) tabular-nums",
      default: "bg-secondary-soft text-secondary-solid rounded-sm px-2 py-1 text-sm leading-none",
      info: "bg-text-info/10 text-info rounded-sm px-2 py-1 text-sm leading-none",
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
      success: "min-h-5 rounded-full bg-chart-green/15 px-2 text-xs font-medium text-chart-green tabular-nums",
      warning: "min-h-5 rounded-full bg-warning-soft-alpha px-2 text-xs font-medium text-warning-surface",
      caution: "min-h-5 rounded-full bg-yellow/15 px-2 text-xs font-medium text-yellow light:text-default",
      danger: "min-h-5 rounded-full bg-danger-soft-alpha px-2 text-xs font-medium text-danger-surface",
      tip: "min-h-5 rounded-full bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      tipInset:
        "min-h-5 rounded-[calc(var(--radius-2xl)-var(--spacing)*2-1px)] bg-tip-soft px-2 text-xs leading-none font-medium text-tip",
      internal:
        "rounded-full bg-(--color-background-internal-badge) px-2.5 py-1 text-xs font-medium text-(--color-text-internal-badge)",
      reserve: "gap-1 rounded-full bg-chart-yellow/15 px-3 py-1 text-sm leading-5 font-semibold text-chart-yellow",
      recording:
        "h-5 rounded-sidebar-inset bg-text-info/10 px-1.5 text-info dark:bg-text-info-soft/15 dark:text-info-soft",
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            l,
            o = (0, r.c)(10),
            { ref: d, children: c, className: u, variant: m } = e,
            p = void 0 === m ? "default" : m,
            f = a[p]
          return (
            o[0] !== u || o[1] !== f
              ? ((t = (0, s.A)("inline-flex items-center", f, u)), (o[0] = u), (o[1] = f), (o[2] = t))
              : (t = o[2]),
            o[3] !== c || o[4] !== p
              ? ((n = "unread" === p ? (0, i.jsx)("span", { className: "text-cap-trim", children: c }) : c),
                (o[3] = c),
                (o[4] = p),
                (o[5] = n))
              : (n = o[5]),
            o[6] !== d || o[7] !== t || o[8] !== n
              ? ((l = (0, i.jsx)("span", { ref: d, className: t, children: n })),
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
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("ygO2"),
      l = n("uWmg"),
      o = n("GO7r"),
      d = n("mT2q"),
      c = n("YUUK")
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
        y = (0, r.c)(393),
        {
          title: w,
          content: j,
          customCtas: k,
          footer: A,
          density: N,
          onPrimaryCtaClick: S,
          primaryCtaText: _,
          primaryCtaColor: I,
          secondaryCtaColor: M,
          onSecondaryCtaClick: C,
          onDangerCtaClick: B,
          secondaryCtaText: E,
          dangerCtaText: U,
          icon: D,
          Icon: P,
          iconClassName: T,
          isPrimaryCtaDisabled: z,
          isSecondaryCtaDisabled: V,
          isDangerCtaDisabled: R,
          type: O,
          variant: Y,
          layout: F,
          stackOnNarrow: q,
          showCtaSeparator: K,
          wrapCtas: L,
          ariaLive: W,
          role: G,
          trailingAction: $,
          attachedToComposer: Q,
        } = e,
        X = void 0 === N ? "default" : N,
        J = void 0 !== z && z,
        H = void 0 !== V && V,
        Z = void 0 !== R && R,
        ee = void 0 === O ? "normal" : O,
        et = void 0 === Y ? "default" : Y,
        en = void 0 === F ? "horizontal" : F,
        ei = void 0 !== q && q,
        er = void 0 === K || K,
        es = void 0 !== L && L,
        ea = void 0 !== Q && Q
      if ("composerContext" === et) {
        let e
        return (
          y[0] !== W || y[1] !== j || y[2] !== G
            ? ((e = (0, i.jsx)("aside", { className: "composerContext-WXELWW", "aria-live": W, role: G, children: j })),
              (y[0] = W),
              (y[1] = j),
              (y[2] = G),
              (y[3] = e))
            : (e = y[3]),
          e
        )
      }
      if ("recovery" === et) {
        let e
        return (
          y[4] !== j || y[5] !== k || y[6] !== D || y[7] !== w
            ? ((e = (0, i.jsx)(l.B, { icon: D, title: w, content: j, actions: k })),
              (y[4] = j),
              (y[5] = k),
              (y[6] = D),
              (y[7] = w),
              (y[8] = e))
            : (e = y[8]),
          e
        )
      }
      if ("browserNotice" === et) {
        let e, t, n, r, s
        y[9] !== w
          ? ((e = w ? (0, i.jsx)("div", { className: "text-sm leading-5 font-medium", children: w }) : null),
            (y[9] = w),
            (y[10] = e))
          : (e = y[10])
        let a = w ? "text-xs leading-4 text-codex-description" : "text-sm leading-5"
        return (
          y[11] !== j || y[12] !== a
            ? ((t = (0, i.jsx)("div", { className: a, children: j })), (y[11] = j), (y[12] = a), (y[13] = t))
            : (t = y[13]),
          y[14] !== e || y[15] !== t
            ? ((n = (0, i.jsxs)("div", {
                className: "flex min-h-9 min-w-40 flex-1 flex-col justify-center",
                children: [e, t],
              })),
              (y[14] = e),
              (y[15] = t),
              (y[16] = n))
            : (n = y[16]),
          y[17] !== k || y[18] !== $
            ? ((r = (0, i.jsxs)("div", {
                className: "ms-auto flex shrink-0 items-center gap-1.5",
                "data-viewer-density": "compact",
                children: [k, $],
              })),
              (y[17] = k),
              (y[18] = $),
              (y[19] = r))
            : (r = y[19]),
          y[20] !== W || y[21] !== D || y[22] !== G || y[23] !== n || y[24] !== r
            ? ((s = (0, i.jsxs)("aside", {
                "aria-live": W,
                className:
                  "flex w-full flex-wrap items-center gap-3 border-b border-default bg-surface p-2 text-default select-none",
                role: G,
                children: [D, n, r],
              })),
              (y[20] = W),
              (y[21] = D),
              (y[22] = G),
              (y[23] = n),
              (y[24] = r),
              (y[25] = s))
            : (s = y[25]),
          s
        )
      }
      if ("mobileApp" === et || "mobileAppSolid" === et || "mobileAppGradient" === et) {
        let e,
          t,
          n,
          r,
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
        let _ = x ? $ : null,
          I = x ? "size-16" : "size-14"
        y[32] !== I
          ? ((n = (0, s.A)("flex shrink-0 items-center justify-center", I)), (y[32] = I), (y[33] = n))
          : (n = y[33])
        let M = x ? "size-9 rounded-full" : "size-14 rounded-2xl"
        ;(y[34] !== M
          ? ((r = (0, s.A)(
              "flex items-center justify-center border border-default bg-media-foreground text-media-background shadow-sm",
              M,
            )),
            (y[34] = M),
            (y[35] = r))
          : (r = y[35]),
          y[36] !== P || y[37] !== D || y[38] !== x
            ? ((a = D ?? (P ? (0, i.jsx)(P, { className: x ? "size-7" : "size-11" }) : null)),
              (y[36] = P),
              (y[37] = D),
              (y[38] = x),
              (y[39] = a))
            : (a = y[39]),
          y[40] !== r || y[41] !== a
            ? ((l = (0, i.jsx)("div", { className: r, children: a })), (y[40] = r), (y[41] = a), (y[42] = l))
            : (l = y[42]),
          y[43] !== n || y[44] !== l
            ? ((o = (0, i.jsx)("div", { "aria-hidden": !0, className: n, children: l })),
              (y[43] = n),
              (y[44] = l),
              (y[45] = o))
            : (o = y[45]),
          y[46] !== x || y[47] !== v || y[48] !== w
            ? ((d = w
                ? (0, i.jsx)("div", {
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
          B = !x && (v ? "text-media-foreground" : "text-tertiary")
        ;(y[50] !== C || y[51] !== B
          ? ((c = (0, s.A)("truncate", C, B)), (y[50] = C), (y[51] = B), (y[52] = c))
          : (c = y[52]),
          y[53] !== j || y[54] !== c
            ? ((u = (0, i.jsx)("div", { className: c, children: j })), (y[53] = j), (y[54] = c), (y[55] = u))
            : (u = y[55]),
          y[56] !== d || y[57] !== u
            ? ((m = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col justify-center", children: [d, u] })),
              (y[56] = d),
              (y[57] = u),
              (y[58] = m))
            : (m = y[58]))
        let E = x && "ms-2 me-2"
        y[59] !== E ? ((p = (0, s.A)("flex shrink-0 items-center gap-2", E)), (y[59] = E), (y[60] = p)) : (p = y[60])
        let U = x ? null : $
        return (
          y[61] !== k || y[62] !== p || y[63] !== U
            ? ((f = (0, i.jsxs)("div", { className: p, children: [k, U] })),
              (y[61] = k),
              (y[62] = p),
              (y[63] = U),
              (y[64] = f))
            : (f = y[64]),
          y[65] !== W || y[66] !== G || y[67] !== t || y[68] !== _ || y[69] !== o || y[70] !== m || y[71] !== f
            ? ((h = (0, i.jsxs)("aside", { "aria-live": W, className: t, role: G, children: [_, o, m, f] })),
              (y[65] = W),
              (y[66] = G),
              (y[67] = t),
              (y[68] = _),
              (y[69] = o),
              (y[70] = m),
              (y[71] = f),
              (y[72] = h))
            : (h = y[72]),
          y[73] !== e || y[74] !== h
            ? ((g = (0, i.jsx)("div", { className: e, children: h })), (y[73] = e), (y[74] = h), (y[75] = g))
            : (g = y[75]),
          g
        )
      }
      if ("status" === et) {
        let e, t
        return (
          y[76] !== j
            ? ((e = (0, i.jsx)("div", { className: "min-w-0 flex-1 break-words", children: j })),
              (y[76] = j),
              (y[77] = e))
            : (e = y[77]),
          y[78] !== W || y[79] !== D || y[80] !== G || y[81] !== e
            ? ((t = (0, i.jsxs)("aside", {
                "aria-live": W,
                className:
                  "flex items-center gap-2 rounded-lg bg-secondary-soft px-3 py-3 text-sm text-default select-none",
                role: G,
                children: [D, e],
              })),
              (y[78] = W),
              (y[79] = D),
              (y[80] = G),
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
          r = G ?? "alert"
        return (
          y[83] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.zOs, { "aria-hidden": !0, className: "shrink-0" })), (y[83] = e))
            : (e = y[83]),
          y[84] !== j
            ? ((t = (0, i.jsx)("div", { className: "min-w-0 break-words", children: j })), (y[84] = j), (y[85] = t))
            : (t = y[85]),
          y[86] !== W || y[87] !== r || y[88] !== t
            ? ((n = (0, i.jsxs)("div", {
                role: r,
                "aria-live": W,
                className:
                  "flex items-start gap-3 rounded-2xl border border-border-danger-surface bg-background-danger-surface p-4 text-sm/5 font-medium text-danger",
                children: [e, t],
              })),
              (y[86] = W),
              (y[87] = r),
              (y[88] = t),
              (y[89] = n))
            : (n = y[89]),
          n
        )
      }
      if ("informationNotice" === et) {
        let e, t, n, r, s
        return (
          y[90] !== P || y[91] !== D || y[92] !== T
            ? ((e = D ?? (P ? (0, i.jsx)(P, { className: T }) : null)),
              (y[90] = P),
              (y[91] = D),
              (y[92] = T),
              (y[93] = e))
            : (e = y[93]),
          y[94] !== w
            ? ((t = w ? (0, i.jsx)("h3", { className: "font-semibold", children: w }) : null), (y[94] = w), (y[95] = t))
            : (t = y[95]),
          y[96] !== j
            ? ((n = (0, i.jsx)("div", { className: "text-secondary", children: j })), (y[96] = j), (y[97] = n))
            : (n = y[97]),
          y[98] !== t || y[99] !== n
            ? ((r = (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-1.5 pt-0.5 break-words",
                children: [t, n],
              })),
              (y[98] = t),
              (y[99] = n),
              (y[100] = r))
            : (r = y[100]),
          y[101] !== W || y[102] !== G || y[103] !== e || y[104] !== r
            ? ((s = (0, i.jsxs)("aside", {
                "aria-live": W,
                className:
                  "flex items-start gap-3 rounded-2xl bg-secondary-soft p-4 text-sm leading-5 text-default dark:bg-surface-tertiary",
                role: G,
                children: [e, r],
              })),
              (y[101] = W),
              (y[102] = G),
              (y[103] = e),
              (y[104] = r),
              (y[105] = s))
            : (s = y[105]),
          s
        )
      }
      if ("profilePromotion" === et) {
        let e, t, n, r, s, a, l
        return (
          y[106] !== w
            ? ((e = w && (0, i.jsx)("h3", { className: "font-medium", children: w })), (y[106] = w), (y[107] = e))
            : (e = y[107]),
          y[108] !== j
            ? ((t = (0, i.jsx)("div", { className: "text-secondary", children: j })), (y[108] = j), (y[109] = t))
            : (t = y[109]),
          y[110] !== e || y[111] !== t
            ? ((n = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-0.5", children: [e, t] })),
              (y[110] = e),
              (y[111] = t),
              (y[112] = n))
            : (n = y[112]),
          y[113] !== k || y[114] !== n
            ? ((r = (0, i.jsxs)("div", {
                className:
                  "flex min-w-0 flex-1 flex-col items-start gap-2 md:flex-row md:items-center md:justify-between md:gap-4",
                children: [n, k],
              })),
              (y[113] = k),
              (y[114] = n),
              (y[115] = r))
            : (r = y[115]),
          y[116] !== D || y[117] !== r
            ? ((s = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 gap-3 md:items-center", children: [D, r] })),
              (y[116] = D),
              (y[117] = r),
              (y[118] = s))
            : (s = y[118]),
          y[119] !== $
            ? ((a = (0, i.jsx)("div", { className: "shrink-0 self-center", children: $ })), (y[119] = $), (y[120] = a))
            : (a = y[120]),
          y[121] !== W || y[122] !== G || y[123] !== s || y[124] !== a
            ? ((l = (0, i.jsxs)("aside", {
                "aria-live": W,
                role: G,
                className:
                  "flex w-full items-start gap-4 rounded-3xl border border-default bg-surface p-4 text-sm leading-5 tracking-[-0.15px] text-default md:min-h-[94px] md:items-center",
                children: [s, a],
              })),
              (y[121] = W),
              (y[122] = G),
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
          r,
          a = $ ? "px-14" : "px-4"
        return (
          y[126] !== a
            ? ((e = (0, s.A)(
                "relative flex min-h-12 w-full shrink-0 items-center justify-center gap-2 bg-(--blue-500) py-3 text-center text-sm font-medium text-white select-none md:min-h-13 md:text-base",
                a,
              )),
              (y[126] = a),
              (y[127] = e))
            : (e = y[127]),
          y[128] !== j
            ? ((t = (0, i.jsx)("div", { className: "min-w-0 break-words", children: j })), (y[128] = j), (y[129] = t))
            : (t = y[129]),
          y[130] !== $
            ? ((n = $
                ? (0, i.jsx)("div", { className: "absolute end-3 top-1/2 -translate-y-1/2", children: $ })
                : null),
              (y[130] = $),
              (y[131] = n))
            : (n = y[131]),
          y[132] !== W || y[133] !== D || y[134] !== G || y[135] !== e || y[136] !== t || y[137] !== n
            ? ((r = (0, i.jsxs)("aside", { "aria-live": W, className: e, role: G, children: [D, t, n] })),
              (y[132] = W),
              (y[133] = D),
              (y[134] = G),
              (y[135] = e),
              (y[136] = t),
              (y[137] = n),
              (y[138] = r))
            : (r = y[138]),
          r
        )
      }
      if ("strip" === et) {
        let e,
          t,
          n,
          r,
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
            ? ((t = w ? (0, i.jsxs)("span", { className: "font-semibold", children: [w, " "] }) : null),
              (y[141] = w),
              (y[142] = t))
            : (t = y[142]),
          y[143] !== j || y[144] !== t
            ? ((n = (0, i.jsxs)("div", { className: "min-w-0 text-center break-words", children: [t, j] })),
              (y[143] = j),
              (y[144] = t),
              (y[145] = n))
            : (n = y[145]),
          y[146] !== W || y[147] !== D || y[148] !== G || y[149] !== e || y[150] !== n
            ? ((r = (0, i.jsxs)("aside", { "aria-live": W, className: e, role: G, children: [D, n] })),
              (y[146] = W),
              (y[147] = D),
              (y[148] = G),
              (y[149] = e),
              (y[150] = n),
              (y[151] = r))
            : (r = y[151]),
          r
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
        ew = "horizontal" === en && ei,
        ej = ew && ("default" === et || em || ep),
        ek = ey && ei
      if (ef) n = eu.ctas
      else {
        let e,
          t = es && "min-w-0 shrink flex-wrap justify-end",
          i = !es && (ev ? "w-full justify-end" : "shrink-0"),
          r = "horizontal" === en && !eo && !ed && !eg && (ea ? "mt-0 min-w-fit" : "mt-2 min-w-fit @min-[560px]:mt-0"),
          a = eg && "max-w-full",
          l = "success" === ee && "successCta-DS7DTt",
          o = ey && er && "border-default border-s ps-3",
          d =
            ej &&
            (ea
              ? "@max-[400px]:order-last @max-[400px]:w-full @max-[400px]:min-w-0 @max-[400px]:flex-wrap @max-[400px]:justify-center"
              : "@max-[560px]:order-last @max-[560px]:w-full @max-[560px]:min-w-0 @max-[560px]:flex-wrap @max-[560px]:justify-center @min-[560px]:ms-5"),
          c =
            !ej &&
            ew &&
            !eo &&
            !eg &&
            "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center",
          u =
            ek &&
            "[@container_(max-width:400px)]:w-full [@container_(max-width:400px)]:shrink [@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:justify-center",
          m =
            ek &&
            er &&
            "[@container_(max-width:400px)]:border-t [@container_(max-width:400px)]:border-s-0 [@container_(max-width:400px)]:pt-2 [@container_(max-width:400px)]:ps-0"
        ;(y[152] !== t ||
        y[153] !== i ||
        y[154] !== r ||
        y[155] !== a ||
        y[156] !== l ||
        y[157] !== o ||
        y[158] !== d ||
        y[159] !== c ||
        y[160] !== u ||
        y[161] !== m
          ? ((e = (0, s.A)("flex gap-2", t, i, r, a, l, o, d, c, u, m)),
            (y[152] = t),
            (y[153] = i),
            (y[154] = r),
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
      y[165] !== k ||
      y[166] !== U ||
      y[167] !== ef ||
      y[168] !== Z ||
      y[169] !== eo ||
      y[170] !== J ||
      y[171] !== H ||
      y[172] !== B ||
      y[173] !== S ||
      y[174] !== C ||
      y[175] !== I ||
      y[176] !== t ||
      y[177] !== _ ||
      y[178] !== M ||
      y[179] !== E
        ? ((m = k
            ? (0, i.jsx)(d.V, {
                value: ef && ea ? "eyebrow" : "default",
                children: (0, i.jsx)("div", { className: n, children: k }),
              })
            : (_ || E || U) &&
              (0, i.jsxs)("div", {
                className: n,
                children: [
                  _ &&
                    (0, i.jsx)(a.$, {
                      onClick: S,
                      size: t,
                      color: I ?? "outline",
                      className: "shrink-0",
                      disabled: J,
                      children: _,
                    }),
                  E &&
                    (0, i.jsx)(a.$, {
                      onClick: C,
                      size: eo ? "dialog" : void 0,
                      color: M ?? "ghost",
                      className: "shrink-0",
                      disabled: H,
                      children: E,
                    }),
                  U &&
                    (0, i.jsx)(a.$, { onClick: B, color: "danger", className: "shrink-0", disabled: Z, children: U }),
                ],
              })),
          (y[163] = ea),
          (y[164] = n),
          (y[165] = k),
          (y[166] = U),
          (y[167] = ef),
          (y[168] = Z),
          (y[169] = eo),
          (y[170] = J),
          (y[171] = H),
          (y[172] = B),
          (y[173] = S),
          (y[174] = C),
          (y[175] = I),
          (y[176] = t),
          (y[177] = _),
          (y[178] = M),
          (y[179] = E),
          (y[180] = m))
        : (m = y[180])
      let eA = m
      if (ed) {
        let e, t
        return (
          y[181] !== j
            ? ((e = (0, i.jsx)("div", { className: "min-w-0 flex-1 text-secondary", children: j })),
              (y[181] = j),
              (y[182] = e))
            : (e = y[182]),
          y[183] !== W || y[184] !== eA || y[185] !== G || y[186] !== e || y[187] !== $
            ? ((t = (0, i.jsxs)("aside", {
                "aria-live": W,
                role: G,
                className:
                  "flex w-full flex-wrap items-center gap-4 rounded-xl bg-secondary-soft px-4 py-3 text-sm text-default select-none",
                children: [e, eA, $],
              })),
              (y[183] = W),
              (y[184] = eA),
              (y[185] = G),
              (y[186] = e),
              (y[187] = $),
              (y[188] = t))
            : (t = y[188]),
          t
        )
      }
      if (el) {
        let e, t, n, r, s, a, l, o
        return (
          y[189] !== P || y[190] !== D || y[191] !== T
            ? ((e = D ?? (P ? (0, i.jsx)(P, { className: T }) : null)),
              (y[189] = P),
              (y[190] = D),
              (y[191] = T),
              (y[192] = e))
            : (e = y[192]),
          y[193] !== e
            ? ((t = (0, i.jsx)("div", { className: "hidden shrink-0 text-warning md:block", children: e })),
              (y[193] = e),
              (y[194] = t))
            : (t = y[194]),
          y[195] !== w
            ? ((n = (0, i.jsx)("div", { className: "text-lg font-semibold", children: w })), (y[195] = w), (y[196] = n))
            : (n = y[196]),
          y[197] !== t || y[198] !== n
            ? ((r = (0, i.jsxs)("div", { className: "flex items-center gap-4", children: [t, n] })),
              (y[197] = t),
              (y[198] = n),
              (y[199] = r))
            : (r = y[199]),
          y[200] !== j
            ? ((s = (0, i.jsx)("div", { className: "text-base md:ms-8", children: j })), (y[200] = j), (y[201] = s))
            : (s = y[201]),
          y[202] !== r || y[203] !== s
            ? ((a = (0, i.jsxs)("div", { className: "mx-2 min-w-0 grow md:mx-4", children: [r, s] })),
              (y[202] = r),
              (y[203] = s),
              (y[204] = a))
            : (a = y[204]),
          y[205] !== eA || y[206] !== a || y[207] !== $
            ? ((l = (0, i.jsxs)("div", {
                className: "mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-2 py-4 md:px-6 lg:py-6",
                children: [a, eA, $],
              })),
              (y[205] = eA),
              (y[206] = a),
              (y[207] = $),
              (y[208] = l))
            : (l = y[208]),
          y[209] !== W || y[210] !== G || y[211] !== l
            ? ((o = (0, i.jsx)("aside", {
                "aria-live": W,
                role: G,
                className: "w-full shrink-0 bg-surface-tertiary text-default select-none",
                children: l,
              })),
              (y[209] = W),
              (y[210] = G),
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
          r,
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
          y[215] !== P || y[216] !== D
            ? ((t = D ?? (P ? (0, i.jsx)(P, {}) : null)), (y[215] = P), (y[216] = D), (y[217] = t))
            : (t = y[217]))
        let o = !ew && "md:truncate"
        return (
          y[218] !== o ? ((n = (0, s.A)("min-w-0 flex-1 leading-5", o)), (y[218] = o), (y[219] = n)) : (n = y[219]),
          y[220] !== j || y[221] !== n
            ? ((r = (0, i.jsx)("div", { className: n, children: j })), (y[220] = j), (y[221] = n), (y[222] = r))
            : (r = y[222]),
          y[223] !== W || y[224] !== eA || y[225] !== G || y[226] !== e || y[227] !== t || y[228] !== r || y[229] !== $
            ? ((a = (0, i.jsxs)("aside", { "aria-live": W, role: G, className: e, children: [t, r, eA, $] })),
              (y[223] = W),
              (y[224] = eA),
              (y[225] = G),
              (y[226] = e),
              (y[227] = t),
              (y[228] = r),
              (y[229] = $),
              (y[230] = a))
            : (a = y[230]),
          a
        )
      }
      if (eh) {
        let e, t, n, r, a
        y[231] !== P || y[232] !== D || y[233] !== T
          ? ((e =
              D ??
              (P
                ? (0, i.jsx)(P, { className: (0, s.A)("text-secondary", T) })
                : (0, i.jsx)(o.zOs, { className: (0, s.A)("text-secondary", T) }))),
            (y[231] = P),
            (y[232] = D),
            (y[233] = T),
            (y[234] = e))
          : (e = y[234])
        let l = e
        return (
          y[235] !== w
            ? ((t = w ? (0, i.jsx)("div", { className: "text-xs font-medium text-default", children: w }) : null),
              (y[235] = w),
              (y[236] = t))
            : (t = y[236]),
          y[237] !== j
            ? ((n = (0, i.jsx)("div", { className: "text-xs text-secondary", children: j })),
              (y[237] = j),
              (y[238] = n))
            : (n = y[238]),
          y[239] !== eA || y[240] !== t || y[241] !== n
            ? ((r = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [t, n, eA] })),
              (y[239] = eA),
              (y[240] = t),
              (y[241] = n),
              (y[242] = r))
            : (r = y[242]),
          y[243] !== W || y[244] !== l || y[245] !== G || y[246] !== r || y[247] !== $
            ? ((a = (0, i.jsxs)("aside", {
                "aria-live": W,
                className: "flex items-center gap-3 rounded-xl bg-background-secondary-soft-alpha p-3 select-none",
                role: G,
                children: [l, r, $],
              })),
              (y[243] = W),
              (y[244] = l),
              (y[245] = G),
              (y[246] = r),
              (y[247] = $),
              (y[248] = a))
            : (a = y[248]),
          a
        )
      }
      if (ef) {
        let e,
          t,
          n,
          r,
          a,
          l,
          o = ea && c.A.composer
        return (
          y[249] !== o ? ((e = (0, s.A)(c.A.container, o)), (y[249] = o), (y[250] = e)) : (e = y[250]),
          y[251] !== j || y[252] !== w
            ? ((t =
                null == w
                  ? j
                  : (0, i.jsx)("div", {
                      className: (0, s.A)(c.A.body, c.A.noVisual),
                      children: (0, i.jsxs)("div", {
                        className: c.A.copy,
                        children: [
                          (0, i.jsx)("h3", { className: c.A.title, children: w }),
                          (0, i.jsx)("div", { className: c.A.description, children: j }),
                        ],
                      }),
                    })),
              (y[251] = j),
              (y[252] = w),
              (y[253] = t))
            : (t = y[253]),
          y[254] !== eu.content || y[255] !== t
            ? ((n = (0, i.jsx)("div", { className: eu.content, children: t })),
              (y[254] = eu.content),
              (y[255] = t),
              (y[256] = n))
            : (n = y[256]),
          y[257] !== $
            ? ((r = $ ? (0, i.jsx)("div", { className: c.A.dismiss, children: $ }) : null), (y[257] = $), (y[258] = r))
            : (r = y[258]),
          y[259] !== W || y[260] !== eu.surface || y[261] !== eA || y[262] !== G || y[263] !== n || y[264] !== r
            ? ((a = (0, i.jsxs)("aside", { "aria-live": W, className: eu.surface, role: G, children: [n, eA, r] })),
              (y[259] = W),
              (y[260] = eu.surface),
              (y[261] = eA),
              (y[262] = G),
              (y[263] = n),
              (y[264] = r),
              (y[265] = a))
            : (a = y[265]),
          y[266] !== e || y[267] !== a
            ? ((l = (0, i.jsx)("div", { className: e, children: a })), (y[266] = e), (y[267] = a), (y[268] = l))
            : (l = y[268]),
          l
        )
      }
      if (
        y[269] !== P ||
        y[270] !== W ||
        y[271] !== ea ||
        y[272] !== j ||
        y[273] !== eA ||
        y[274] !== X ||
        y[275] !== A ||
        y[276] !== D ||
        y[277] !== T ||
        y[278] !== eg ||
        y[279] !== em ||
        y[280] !== ep ||
        y[281] !== ex ||
        y[282] !== ev ||
        y[283] !== eb ||
        y[284] !== ey ||
        y[285] !== G ||
        y[286] !== ek ||
        y[287] !== ej ||
        y[288] !== w ||
        y[289] !== $ ||
        y[290] !== ee ||
        y[291] !== et
      ) {
        x = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            r,
            a,
            l,
            o,
            d,
            c,
            u,
            m,
            v,
            b,
            k,
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
              success: "border-chart-green/30 text-chart-green",
              warning: "border-text-warning/30 text-default",
            }[ee],
            I = ea ? "bg-surface-tertiary" : "bg-transparent"
          if (
            y[297] !== P ||
            y[298] !== D ||
            y[299] !== T ||
            y[300] !== eg ||
            y[301] !== em ||
            y[302] !== ey ||
            y[303] !== I ||
            y[304] !== ee ||
            y[305] !== et
          ) {
            let r,
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
                success: "bg-chart-green/15",
                warning: ey ? "bg-background-warning-surface/15" : "bg-background-warning-surface/30",
              }[ee],
              o = !em && !eg && "icon-sm shrink-0",
              d = eg && "icon-md shrink-0 text-secondary",
              c = "infoAccent" === ee && "text-info",
              u = "success" === ee && "text-chart-green",
              m = "warning" === ee && "text-warning"
            y[309] !== T || y[310] !== o || y[311] !== d || y[312] !== c || y[313] !== u || y[314] !== m
              ? ((r = (0, s.A)(o, d, c, u, m, T)),
                (y[309] = T),
                (y[310] = o),
                (y[311] = d),
                (y[312] = c),
                (y[313] = u),
                (y[314] = m),
                (y[315] = r))
              : (r = y[315])
            let p = r
            ;(y[316] !== P || y[317] !== D || y[318] !== p
              ? ((a = D ?? (P ? (0, i.jsx)(P, { className: p }) : null)),
                (y[316] = P),
                (y[317] = D),
                (y[318] = p),
                (y[319] = a))
              : (a = y[319]),
              (e = a),
              (t = !0),
              (n = (0, s.A)("absolute inset-0 -z-10", l)),
              (y[297] = P),
              (y[298] = D),
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
            ? ((r = (0, i.jsx)("div", { "aria-hidden": t, className: n })), (y[320] = t), (y[321] = n), (y[322] = r))
            : (r = y[322]),
            (f = r))
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
            B = em ? "gap-1" : "gap-1.5",
            E = em || eg || ey || ea ? "text-secondary" : "text-codex-description"
          ;("error" === ee ? (E = "text-danger") : "success" === ee && (E = "text-chart-green"),
            y[324] !== e || y[325] !== w || y[326] !== C
              ? ((l = () =>
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-1",
                    children: [e, w && (0, i.jsx)("h3", { className: C, children: w })],
                  })),
                (y[324] = e),
                (y[325] = w),
                (y[326] = C),
                (y[327] = l))
              : (l = y[327]))
          let U = l,
            z = (e) =>
              (0, i.jsx)("div", {
                className: (0, s.A)("flex min-w-0 flex-1 flex-col", e),
                children: (0, i.jsx)("div", {
                  className: (0, s.A)(
                    "min-w-0 flex-1",
                    ex && "truncate",
                    !em && !eg && "electron:leading-relaxed",
                    eg && "leading-5",
                    ("announcement" === et || "catalog" === et || "settings" === et) && "tracking-announcement-body",
                    !em && !eg && !ex && "text-pretty",
                    (w || ea) && E,
                  ),
                  children: j,
                }),
              })
          if (ev) {
            let t
            ;(y[328] !== e || y[329] !== U || y[330] !== w
              ? ((t = (e ?? w) && U()), (y[328] = e), (y[329] = U), (y[330] = w), (y[331] = t))
              : (t = y[331]),
              (x = (0, i.jsxs)("aside", {
                "aria-live": W,
                className: (0, s.A)(M, "flex-col", B),
                role: G,
                children: [f, t, z(B), eA],
              })))
            break e
          }
          if (eb) {
            let t,
              n,
              r,
              a = (0, s.A)(M, "gap-3", (em || "settings" === et) && "items-start")
            ;(y[332] !== em || y[333] !== e || y[334] !== et
              ? ((t =
                  null != e
                    ? (0, i.jsx)("div", {
                        className: em || "settings" === et ? "flex h-lh items-center" : "flex items-center self-center",
                        children: e,
                      })
                    : null),
                (y[332] = em),
                (y[333] = e),
                (y[334] = et),
                (y[335] = t))
              : (t = y[335]),
              y[336] !== B
                ? ((n = (0, s.A)("flex min-w-0 flex-1 flex-col", B)), (y[336] = B), (y[337] = n))
                : (n = y[337]),
              y[338] !== w || y[339] !== C
                ? ((r = w ? (0, i.jsx)("h3", { className: C, children: w }) : null),
                  (y[338] = w),
                  (y[339] = C),
                  (y[340] = r))
                : (r = y[340]),
              (x = (0, i.jsxs)("aside", {
                "aria-live": W,
                className: a,
                role: G,
                children: [f, t, (0, i.jsxs)("div", { className: n, children: [r, z(), eA] })],
              })))
            break e
          }
          if (ey || (ej && eA)) {
            let t,
              n,
              r,
              a = (0, s.A)(
                M,
                ej ? "items-start gap-x-3 @min-[560px]:items-center" : "items-center gap-3",
                ej && ea && "@max-[400px]:flex-wrap @max-[400px]:gap-y-2 @max-[400px]:px-3",
                ej &&
                  !ea &&
                  ("compact" === X
                    ? "@max-[560px]:flex-wrap @max-[560px]:px-2.5"
                    : "@max-[560px]:flex-wrap @max-[560px]:px-4"),
                ek &&
                  "[@container_(max-width:400px)]:flex-wrap [@container_(max-width:400px)]:items-start [@container_(max-width:400px)]:gap-2",
              ),
              l = ey && "gap-0.5"
            ;(y[341] !== l
              ? ((t = (0, s.A)("flex min-w-0 flex-1 flex-col", l)), (y[341] = l), (y[342] = t))
              : (t = y[342]),
              y[343] !== ej || y[344] !== w || y[345] !== C
                ? ((n =
                    w && (0, i.jsx)("h3", { className: ej ? C : "text-sm font-semibold text-pretty", children: w })),
                  (y[343] = ej),
                  (y[344] = w),
                  (y[345] = C),
                  (y[346] = n))
                : (n = y[346]),
              y[347] !== ej || y[348] !== $
                ? ((r =
                    ej &&
                    $ &&
                    (0, i.jsx)("div", {
                      className: "flex shrink-0 items-start @min-[560px]:self-center",
                      children: $,
                    })),
                  (y[347] = ej),
                  (y[348] = $),
                  (y[349] = r))
                : (r = y[349]),
              (x = (0, i.jsx)("div", {
                className: "@container w-full",
                children: (0, i.jsxs)("aside", {
                  "aria-live": W,
                  className: a,
                  role: G,
                  children: [f, e, (0, i.jsxs)("div", { className: t, children: [n, z()] }), eA, r],
                }),
              })))
            break e
          }
          let V = eg ? "items-center" : "items-start @min-[560px]:items-center"
          ;(y[350] !== V ? ((o = (0, s.A)("flex h-full w-full gap-3", V)), (y[350] = V), (y[351] = o)) : (o = y[351]),
            y[352] !== eg || y[353] !== e
              ? ((d =
                  null != e &&
                  (0, i.jsx)("div", { className: (0, s.A)("flex items-start", !eg && "pt-0.5"), children: e })),
                (y[352] = eg),
                (y[353] = e),
                (y[354] = d))
              : (d = y[354]))
          let R = ex && "items-center justify-between gap-3",
            O = !ex && eg && "flex-wrap items-center gap-x-8 gap-y-3",
            Y = !ex && !eg && "flex-col",
            F =
              !ex &&
              !eg &&
              ea &&
              "@min-[400px]:flex-row @min-[400px]:items-start @min-[400px]:justify-between @min-[400px]:gap-3",
            q =
              !ex &&
              !eg &&
              !ea &&
              "@min-[560px]:flex-row @min-[560px]:items-center @min-[560px]:justify-between @min-[560px]:gap-8"
          y[355] !== R || y[356] !== O || y[357] !== Y || y[358] !== F || y[359] !== q
            ? ((c = (0, s.A)("flex min-w-0 grow", R, O, Y, F, q)),
              (y[355] = R),
              (y[356] = O),
              (y[357] = Y),
              (y[358] = F),
              (y[359] = q),
              (y[360] = c))
            : (c = y[360])
          let K = eg ? "grow basis-64 wrap-break-word" : "flex-1"
          ;(y[361] !== K ? ((u = (0, s.A)("flex min-w-0 flex-col", K)), (y[361] = K), (y[362] = u)) : (u = y[362]),
            y[363] !== w || y[364] !== C
              ? ((m = w && (0, i.jsx)("h3", { className: C, children: w })), (y[363] = w), (y[364] = C), (y[365] = m))
              : (m = y[365]))
          let L = z()
          ;(y[366] !== u || y[367] !== m || y[368] !== L
            ? ((v = (0, i.jsxs)("div", { className: u, children: [m, L] })),
              (y[366] = u),
              (y[367] = m),
              (y[368] = L),
              (y[369] = v))
            : (v = y[369]),
            y[370] !== eA || y[371] !== c || y[372] !== v
              ? ((b = (0, i.jsxs)("div", { className: c, children: [v, eA] })),
                (y[370] = eA),
                (y[371] = c),
                (y[372] = v),
                (y[373] = b))
              : (b = y[373]),
            y[374] !== o || y[375] !== d || y[376] !== b
              ? ((k = (0, i.jsxs)("div", { className: o, children: [d, b] })),
                (y[374] = o),
                (y[375] = d),
                (y[376] = b),
                (y[377] = k))
              : (k = y[377]),
            y[378] !== $
              ? ((N = $
                  ? (0, i.jsx)("div", { className: "flex shrink-0 items-start @min-[560px]:self-center", children: $ })
                  : null),
                (y[378] = $),
                (y[379] = N))
              : (N = y[379]),
            y[380] !== k || y[381] !== N
              ? ((S = (0, i.jsxs)(i.Fragment, { children: [k, N] })), (y[380] = k), (y[381] = N), (y[382] = S))
              : (S = y[382]),
            (p = S),
            (h = W),
            (g = (0, s.A)(M, "@container items-start gap-4", null != A && "flex-col")))
        }
        ;((y[269] = P),
          (y[270] = W),
          (y[271] = ea),
          (y[272] = j),
          (y[273] = eA),
          (y[274] = X),
          (y[275] = A),
          (y[276] = D),
          (y[277] = T),
          (y[278] = eg),
          (y[279] = em),
          (y[280] = ep),
          (y[281] = ex),
          (y[282] = ev),
          (y[283] = eb),
          (y[284] = ey),
          (y[285] = G),
          (y[286] = ek),
          (y[287] = ej),
          (y[288] = w),
          (y[289] = $),
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
            ? ((v = null != A ? (0, i.jsx)("div", { className: "flex w-full items-start gap-4", children: p }) : p),
              (y[383] = p),
              (y[384] = A),
              (y[385] = v))
            : (v = y[385]),
          y[386] !== A || y[387] !== G || y[388] !== f || y[389] !== h || y[390] !== g || y[391] !== v
            ? ((b = (0, i.jsxs)("aside", { "aria-live": h, className: g, role: G, children: [f, v, A] })),
              (y[386] = A),
              (y[387] = G),
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
    var i = n("ABep"),
      r = n("QosV"),
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
            m = (0, r.c)(17)
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
              ? ((c = (0, i.jsx)("div", { className: d, children: t })), (m[10] = t), (m[11] = d), (m[12] = c))
              : (c = m[12]),
            m[13] !== a || m[14] !== o || m[15] !== c
              ? ((u = (0, i.jsx)("div", { className: o, ...a, children: c })),
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
    var i = n("ABep"),
      r = n("QosV"),
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
        v = (0, r.c)(21),
        { icon: b, title: y, content: w, actions: j } = e
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
              (0, i.jsx)("span", {
                "aria-hidden": "true",
                className:
                  "-ms-2 me-3 flex size-8 shrink-0 items-center justify-center self-center rounded-full bg-callout-surface",
                children: b,
              })),
            (v[4] = b),
            (v[5] = u))
          : (u = v[5]),
        v[6] !== y
          ? ((m = y && (0, i.jsx)("h3", { className: "font-semibold", children: y })), (v[6] = y), (v[7] = m))
          : (m = v[7]),
        v[8] !== w
          ? ((p = (0, i.jsx)("div", { className: "description-izhOpC", children: w })), (v[8] = w), (v[9] = p))
          : (p = v[9]),
        v[10] !== m || v[11] !== p
          ? ((f = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [m, p] })),
            (v[10] = m),
            (v[11] = p),
            (v[12] = f))
          : (f = v[12]),
        v[13] !== j
          ? ((h =
              null != j &&
              (0, i.jsx)("div", {
                className: "mt-2 flex min-w-0 shrink-0 flex-wrap gap-2 pb-1 @min-[560px]:mt-0 @min-[560px]:pb-0",
                children: (0, i.jsx)(o.V, { value: "recovery", children: j }),
              })),
            (v[13] = j),
            (v[14] = h))
          : (h = v[14]),
        v[15] !== f || v[16] !== h
          ? ((g = (0, i.jsxs)("div", {
              className:
                "flex min-w-0 grow flex-col @min-[560px]:flex-row @min-[560px]:items-center @min-[560px]:justify-between @min-[560px]:gap-6",
              children: [f, h],
            })),
            (v[15] = f),
            (v[16] = h),
            (v[17] = g))
          : (g = v[17]),
        v[18] !== g || v[19] !== u
          ? ((x = (0, i.jsx)(l.G, {
              children: (0, i.jsxs)(a.P.aside, {
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
    let i = (0, n("zd8w").createContext)("default")
    n.d(t, {}, { V: i })
  },
  ULpA(e, t, n) {
    var i = n("zTeN"),
      r = n("tl5a"),
      s = n("vdpW"),
      a = n("OWtl"),
      l = n("eA5w")
    let o = (0, i.i1)(a.u, (e, { get: t }) => {
        let n = { hostId: (0, l.Y)(), threadId: e }
        return "ready" === t(s.fl, n) && t(s.M, n)?.length === 0 && t(r.zp, n)?.type === "idle"
      }),
      d = (0, i.i1)(
        a.u,
        (e, { get: t }) => {
          let n = { hostId: (0, l.Y)(), threadId: e }
          if ("ready" !== t(s.fl, n)) return null
          let i = t(s.M, n)?.at(-1),
            a = t(s.RN, i ?? null),
            o = t(s.OM, i ?? null)
          return null == a || null == o
            ? null
            : { id: a, status: o, isActive: "inProgress" === o || t(r.zp, n)?.type === "active" }
        },
        { isEqual: (e, t) => e?.id === t?.id && e?.status === t?.status && e?.isActive === t?.isActive },
      ),
      c = (0, i.i1)(
        a.u,
        (e, { get: t }) => t(r.zp, { hostId: (0, l.Y)(), threadId: e })?.type === "active" || t(d, e)?.isActive === !0,
      ),
      u = (0, i.i1)(a.u, ({ conversationId: e, savedTurnId: t }, { get: n }) => {
        let i = { hostId: (0, l.Y)(), threadId: e }
        if ("ready" !== n(s.fl, i) || n(s.as, i) || !0 !== n(s.uI, i) || n(r.zp, i)?.type !== "idle") return !1
        let a = n(s.M, i)
        if (null == a) return !1
        let o = a.findIndex((e) => n(s.RN, e) === t)
        if (o < 0) return !1
        for (let e = a.length - 1; e >= o; e--) {
          let t = a[e],
            i = n(s.OM, t)
          if ("completed" === i) return e < a.length - 1
          let r = n(s.hm, t),
            l = n(s.cC, t),
            o = n(s.Ko, t)
          if (
            "interrupted" !== i ||
            null == n(s.RN, t) ||
            n(s.yF, t) ||
            (o?.hookRuns?.length ?? 0) > 0 ||
            (o?.interruptedCommandExecutionItemIds?.length ?? 0) > 0 ||
            (o?.params.attachments?.length ?? 0) > 0 ||
            (o?.params.commentAttachments?.length ?? 0) > 0 ||
            o?.params.input.some((e) => "text" !== e.type) ||
            o?.diff != null ||
            null == r ||
            null == l ||
            r.length !== l.length ||
            l.some(({ itemId: e, type: i }, a) => {
              if (r[a] !== e) return !0
              if ("userMessage" === i) {
                let i = n(s.mz, { ...t, itemId: e })
                return i?.type !== "userMessage" || i.content.some((e) => "text" !== e.type)
              }
              if ("steeringUserMessage" === i) {
                let i = n(s.mz, { ...t, itemId: e })
                if (i?.type !== "steeringUserMessage") return !0
                let r = i.restoreMessage.context
                return (
                  "accepted" !== i.status ||
                  null == i.serverUserMessageId ||
                  i.input.some((e) => "text" !== e.type) ||
                  i.compareKey.imageCount > 0 ||
                  i.attachments.length > 0 ||
                  [
                    r.addedFiles,
                    r.fileAttachments,
                    r.uploadedFileAttachments,
                    r.pastedTextAttachments,
                    r.commentAttachments,
                    r.imageAttachments,
                    r.mcpAppModelContextAttachments,
                    r.appshotContexts,
                  ].some((e) => (e?.length ?? 0) > 0)
                )
              }
              return "steered" === i
                ? !l.some(({ itemId: i, type: r }) => {
                    if ("steeringUserMessage" !== r) return !1
                    let a = n(s.mz, { ...t, itemId: i })
                    return a?.type === "steeringUserMessage" && "accepted" === a.status && a.serverUserMessageId === e
                  })
                : "agentMessage" !== i && "reasoning" !== i
            })
          )
            break
        }
        return !1
      })
    n.d(t, {}, { fK: c, jI: u, pe: d, xp: o })
  },
  QvRd(e, t, n) {
    var i = n("ABep"),
      r = n("oyxz"),
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
          return { title: (0, i.jsx)(r.A, { ...a[e].title }), content: (0, i.jsx)(r.A, { ...a[e].body }) }
        },
      },
    )
  },
  xWIM(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
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
        d = (0, r.c)(9),
        { agentSections: c, userSections: u, savedStatus: m } = e
      d[0] !== c ? ((t = void 0 === c ? [] : c), (d[0] = c), (d[1] = t)) : (t = d[1])
      let p = t,
        g = p.length + u.length
      return (
        d[2] !== p || d[3] !== g || d[4] !== m || d[5] !== u
          ? ((n =
              0 === g
                ? (m ?? (0, i.jsx)(f, {}))
                : (0, i.jsx)(s.m, {
                    interactive: !0,
                    side: "top",
                    openDelay: 0,
                    align: "start",
                    content: (0, i.jsxs)("div", {
                      className: "w-60 py-1 text-start select-text",
                      children: [
                        p.length > 0
                          ? (0, i.jsxs)("div", {
                              children: [
                                (0, i.jsx)(o.ms.SectionLabel, {
                                  children: (0, i.jsx)(l.A, {
                                    id: "restricted.environmentSetup.changes.byCodex",
                                    defaultMessage: "By Codex",
                                    description:
                                      "Heading for environment sections changed by the setup agent and awaiting user review",
                                  }),
                                }),
                                (0, i.jsx)(h, { sections: p }),
                              ],
                            })
                          : null,
                        u.length > 0
                          ? (0, i.jsxs)("div", {
                              children: [
                                (0, i.jsx)(o.ms.SectionLabel, {
                                  children: (0, i.jsx)(l.A, {
                                    id: "restricted.environmentSetup.changes.byYou",
                                    defaultMessage: "By you",
                                    description: "Heading for environment sections with unsaved edits made by the user",
                                  }),
                                }),
                                (0, i.jsx)(h, { sections: u }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    children: (0, i.jsx)(s.m.TriggerDecorator, {
                      unstyled: !0,
                      children: (0, i.jsx)("span", {
                        children: (0, i.jsx)(l.A, {
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
          ? ((a = (0, i.jsx)("div", { className: "min-w-0 truncate text-sm text-secondary select-none", children: n })),
            (d[7] = n),
            (d[8] = a))
          : (a = d[8]),
        a
      )
    }
    function p(e) {
      let t,
        n = (0, r.c)(2),
        { conversationId: s } = e,
        o = (0, a._U)(c.Bx, s)
      return null == o
        ? null
        : (n[0] !== o
            ? ((t = o
                ? (0, i.jsx)(l.A, {
                    id: "environmentSetup.changes.savedUnpublished",
                    defaultMessage: "Draft saved · Not published",
                    description:
                      "Status when all environment edits are saved and reviewed, but the saved draft differs from the published environment",
                  })
                : (0, i.jsx)(f, {})),
              (n[0] = o),
              (n[1] = t))
            : (t = n[1]),
          t)
    }
    function f() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
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
        s = (0, r.c)(4),
        { sections: a } = e
      return (
        s[0] !== a ? ((t = a.map(g)), (s[0] = a), (s[1] = t)) : (t = s[1]),
        s[2] !== t
          ? ((n = (0, i.jsx)("ul", { className: "flex flex-col text-sm", children: t })), (s[2] = t), (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    function g(e) {
      return (0, i.jsx)(
        "li",
        { className: "px-row-x py-row-y", children: (0, i.jsx)(l.A, { ...("description" === e ? d.S : d.b[e]) }) },
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
            o = (0, r.c)(23),
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
            o[17] !== d ? ((s = (0, i.jsx)(p, { conversationId: d })), (o[17] = d), (o[18] = s)) : (s = o[18]),
            o[19] !== g || o[20] !== s || o[21] !== t
              ? ((l = (0, i.jsx)(m, { agentSections: g, userSections: t, savedStatus: s })),
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
    var i = n("SZCv"),
      r = n.n(i),
      s = n("KUdL"),
      a = n.n(s),
      l = n("VrVA"),
      o = n("Q00z"),
      d = n("USmf")
    function c(e, t) {
      return (e?.ssh ?? !1) === (t?.ssh ?? !1) && r()(a()(e?.http_ports ?? []), a()(t?.http_ports ?? []))
    }
    function u(e, t) {
      return (
        e.type === t.type &&
        r()(
          "restricted" === e.type ? [...(e.presets ?? [])].sort() : [],
          "restricted" === t.type ? [...(t.presets ?? [])].sort() : [],
        ) &&
        r()(
          "restricted" === e.type ? e.egress_rules.map(({ host: e }) => e).sort() : [],
          "restricted" === t.type ? t.egress_rules.map(({ host: e }) => e).sort() : [],
        )
      )
    }
    function m(e, t) {
      let n = (e) =>
        a()(
          e.map(({ id: e, name: t, source: n, optional: i, target: r }) => ({
            id: e,
            name: t,
            source: n,
            optional: i ?? "user_provided" === n,
            target:
              "http_header" in r
                ? {
                    http_header: {
                      header_name: r.http_header.header_name,
                      allowed_domains: [...r.http_header.allowed_domains].sort(),
                    },
                  }
                : {
                    environment_variable: r.environment_variable,
                    allowed_domains: null == r.allowed_domains ? void 0 : [...r.allowed_domains].sort(),
                  },
          })),
          "name",
        )
      return r()(n(e), n(t))
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
      let i = (e.draft ?? e).network_policy,
        r =
          t.networkPreset ??
          ("unrestricted" === (n = i).type
            ? "all"
            : "restricted" === n.type
              ? n.presets?.includes("package_managers")
                ? "package_managers"
                : "none"
              : "package_managers")
      return "all" === r
        ? { type: "unrestricted" }
        : {
            type: "restricted",
            presets: "none" === r ? [] : [r],
            egress_rules: [
              ...new Set(t.networkDomains ?? ("restricted" === i.type ? i.egress_rules.map((e) => e.host) : [])),
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
          let i = e.draft ?? e,
            s = { ...t }
          if ((null != t.portals && c(t.portals, i.portals) && delete s.portals, null != t.environmentVariableNames)) {
            let t = n?.environmentVariables
            !e.draft?.pending_runtime_requirements?.length &&
              t?.every(
                ({ value: e, source: t, serverId: n }) => 0 === e.length && ("user_provided" === t || null != n),
              ) &&
              r()(
                a()((0, o.kD)(t), "delivery.variable_name"),
                a()(
                  (i.runtime_requirements ?? []).map(({ source: e, delivery: t, optional: n }) => ({
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
            t.setupScript === (i.install_script ?? "") && delete s.setupScript,
            t.startSkill === (i.start_skill ?? "") && delete s.startSkill,
            null != t.repositories &&
              r()([...t.repositories].sort(), i.repositories.map(({ repository_id: e }) => e).sort()) &&
              delete s.repositories,
            null != t.outboundIdentityRequirements &&
              r()(
                a()(t.outboundIdentityRequirements, "connection_id"),
                a()(i.outbound_identity_requirements ?? [], "connection_id"),
              ) &&
              delete s.outboundIdentityRequirements,
            null != t.tcpNetworkAccess &&
              r()([...t.tcpNetworkAccess.ip_ranges].sort(), [...(i.tcp_network_access?.ip_ranges ?? [])].sort()) &&
              r()([...t.tcpNetworkAccess.domains].sort(), [...(i.tcp_network_access?.domains ?? [])].sort()) &&
              delete s.tcpNetworkAccess)
          let l = f(e, t)
          if (
            (null != l &&
              u(l, i.network_policy) &&
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
                i.secrets ?? [],
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
          let i = { ...e }
          return (
            t || delete i.outboundIdentityRequirements,
            n || delete i.portals,
            Object.values(i).some((e) => void 0 !== e) ? i : null
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
      or: () => D,
      $U: () => T,
      Yj: () => N,
      ZF: () => C,
      De: () => g.De,
      U1: () => S,
      rx: () => I,
      n6: () => M,
      fm: () => _,
      Jo: () => g.Jo,
      UV: () => k,
      O0: () => B,
      e2: () => U,
      XL: () => P,
    })
    var i = n("zTeN"),
      r = n("DBCl"),
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
    let j = (0, i.vU)(d.u, (e, { get: t }) => {
      let n = t(a.Qk, e),
        i = t(a.M5, n === (0, y.Y)() ? { hostId: n, threadId: e } : null),
        r = i?.environmentConfigId,
        s = t(l.PO).authLoading ? null : t(l.chatGptAuthenticatedAccountId$),
        o = t(l.chatGptAuthenticatedUserId$),
        d = b.appServices?.environmentConfigs
      return {
        queryFn: async () => {
          if (null == s || null == o || null == r || null == d) throw Error("Environment configuration is unavailable")
          return (0, m.UG)(d, s, o, r)
        },
        queryKey: (0, m.l4)(s, o, r),
        enabled:
          null != i &&
          "needs_resume" !== i.resumeState &&
          null != s &&
          null != o &&
          null != r &&
          !t(w.bQ, r) &&
          null != d,
        staleTime: 0,
        refetchOnMount: (e) => !(0, m.Qe)(e.state.error) && "always",
        refetchOnWindowFocus: (e) => !(0, m.Qe)(e.state.error),
        refetchOnReconnect: (e) => !(0, m.Qe)(e.state.error),
        retry: !1,
      }
    })
    function k(e) {
      return "unrestricted" === e.type
        ? "all"
        : "restricted" === e.type
          ? e.presets?.includes("package_managers")
            ? "package_managers"
            : "none"
          : "package_managers"
    }
    let A = (0, u.m3)(s.mX, void 0),
      N = (0, i.un)(d.u, ({ get: e }) => {
        let t = e(l.chatGptAuthenticatedAccountId$),
          n = e(l.chatGptAuthenticatedUserId$),
          i = e(A) ?? (0, c.TB)(s.mX, void 0)
        return null == t || null == n || null == i
          ? null
          : Object.fromEntries(
              Object.entries(i).flatMap(([e, i]) =>
                i.accountId === t && i.userId === n && null == i.draftId ? [[i.configId, (0, r.JXB)(e)]] : [],
              ),
            )
      }),
      S = (0, i.i1)(d.u, (e, { get: t }) => (0, h.w4)(t(g.Jo, e), t(v.Y), t(x.H))),
      _ = (0, i.i1)(d.u, (e, { get: t }) => {
        if (null == e) return null
        let n = t(A) ?? (0, c.TB)(s.mX, void 0),
          i = n?.[e]
        if (null != i) return i
        let { data: r, isEnabled: a } = t(j, e),
          o = t(l.chatGptAuthenticatedAccountId$),
          d = t(l.chatGptAuthenticatedUserId$)
        return r?.thread_id !== e || null == o || null == d
          ? null
          : {
              accountId: o,
              userId: d,
              configId: r.id,
              name: r.name,
              publicationStateUnknown: !0,
              repositoryNamesById: Object.fromEntries(
                (r.draft ?? r).repositories.map(({ repository_id: e }) => {
                  let n = a ? t(p.D, e).data : void 0
                  return [e, null != n && "inaccessible" !== n ? n.repository_full_name : e]
                }),
              ),
            }
      }),
      I = (0, i.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        return null != n &&
          n.accountId === t(l.chatGptAuthenticatedAccountId$) &&
          n.userId === t(l.chatGptAuthenticatedUserId$)
          ? n.name
          : null
      }),
      M = (0, i.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        if (null == n || t(f.fK, e)) return
        if (null != n.draftId && t(f.xp, e)) return null
        let i = t(f.pe, e),
          r = i?.id ?? null
        if (
          (null == i && (n.savedTurnId === r || n.promotedTurnId === r)) ||
          i?.status === "completed" ||
          (i?.status === "interrupted" &&
            null != n.savedTurnId &&
            t(f.jI, { conversationId: e, savedTurnId: n.savedTurnId })) ||
          (null != n.promotedVersionId && (i?.status === "interrupted" || i?.status === "failed"))
        )
          return null === n.promotedTurnId ? null : r
      }),
      C = (0, i.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        if (
          null != n &&
          (n.accountId !== t(l.chatGptAuthenticatedAccountId$) || n.userId !== t(l.chatGptAuthenticatedUserId$))
        )
          return null
        let i = t(g.De, e)
        if (null == n) return i
        let r = void 0 !== t(M, e) ? "ready" : (i?.phase ?? "inspecting")
        if (null != i) {
          let s = t(g.hV, e)?.githubRepositories
          return {
            ...i,
            phase: r,
            repositories: i.repositories.map(
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
          phase: r,
          repositories: Object.values(n.repositoryNamesById),
          secretNames: [],
        }
      }),
      B = (0, i.i1)(d.u, (e, { get: t }) => null != e && ("environment_setup" === t(a.hD, e) || t(E, e))),
      E = (0, i.i1)(d.u, (e, { get: t }) => {
        let n = t(_, e)
        return (
          null != n &&
          n.accountId === t(l.chatGptAuthenticatedAccountId$) &&
          n.userId === t(l.chatGptAuthenticatedUserId$)
        )
      })
    function U(e, t, n) {
      let i = (0, c.TB)(s.mX, {}),
        r = Object.fromEntries([
          ...Object.entries(i)
            .filter(([e]) => e !== t)
            .slice(-99),
          [t, n],
        ])
      ;((0, c.jx)(s.mX, r), (0, g._L)(e, t, i[t], n), e.set(A, r))
    }
    function D(e, t, n) {
      e.set(g.De, t, {
        access: null,
        name: n.name,
        phase: "inspecting",
        repositories: n.repositories,
        githubRepository: n.githubRepository,
        secretNames: [],
      })
    }
    function P(e, t, n) {
      let i = {
        ...(e.get(g.De, t) ?? { access: null, name: null, phase: "inspecting", repositories: [], secretNames: [] }),
        ...n,
      }
      e.set(g.De, t, i)
      let r = e.get(_, t)
      if (null != r) {
        let { phase: i, ...s } = n,
          a = { ...e.get(g.Jo, t), ...s },
          o = e.queryClient.getQueryData(
            (0, m.l4)(
              e.get(l.chatGptAuthenticatedAccountId$),
              e.get(l.chatGptAuthenticatedUserId$),
              r.configId,
              r.draftId,
            ),
          )
        e.set(g.Jo, t, null == o ? a : (0, h.Od)(o, a, e.get(g.hV, t)))
      }
      return i
    }
    function T(e, t, n) {
      let r = { ...e.get(g.De, t), ...n, phase: "ready" }
      return (
        (0, i.Y)(e, (e) => {
          ;(e.set(o.Q, t, null), e.set(g.hV, t, null), e.set(g.De, t, r))
        }),
        r
      )
    }
  },
  tFcq(e, t, n) {
    var i = n("zTeN"),
      r = n("OWtl")
    let s = (0, i.bD)(r.u, (e) => 0),
      a = (0, i.bD)(r.u, (e) => null),
      l = (0, i.bD)(r.u, (e) => null),
      o = (0, i.bD)(r.u, (e) => null),
      d = (0, i.bD)(r.u, (e) => null)
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
        _L: function (e, t, n, i) {
          if (null == n || c(n, i)) return
          let r = e.get(d, u(t, i))
          ;(e.set(d, u(t, n), { draft: e.get(a, t), changes: e.get(l, t), inputs: e.get(o, t) }),
            e.set(a, t, r?.draft ?? null),
            e.set(l, t, r?.changes ?? null),
            e.set(o, t, r?.inputs ?? null),
            e.set(d, u(t, i), null))
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
    var i = n("zTeN"),
      r = n("OWtl")
    let s = (0, i.bD)(r.u, (e) => null)
    n.d(
      t,
      {},
      {
        D7: function (e, t) {
          let n = t?.environmentVariables,
            i = (e?.draft ?? e)?.runtime_requirements,
            r = e?.draft?.pending_runtime_requirements
          if (null != n || null != i || null != r)
            return [
              ...(n ??
                i?.map(({ source: e, delivery: t, optional: n, error: i }) => ({
                  name: t.variable_name,
                  value: "",
                  source: "user_provided" === e.type ? "user_provided" : void 0,
                  serverId: "vault_secret" === e.type ? e.id : void 0,
                  optional: n,
                  error: i,
                })) ??
                []),
              ...(r
                ?.filter(
                  ({ delivery: e }) =>
                    !n?.some(({ name: t }) => t === e.variable_name) &&
                    !i?.some((t) => t.delivery.variable_name === e.variable_name) &&
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
          return e.map(({ name: e, serverId: t, optional: n, source: i }) => {
            let r
            if ("user_provided" === i) r = { type: "user_provided" }
            else if (null != t) r = { type: "vault_secret", id: t }
            else throw Error("environment-variables")
            return {
              source: r,
              delivery: { type: "direct_environment_variable", variable_name: e },
              optional: "user_provided" === i || n,
            }
          })
        },
      },
    )
  },
  ZEpF(e, t, n) {
    var i = n("zTeN"),
      r = n("OWtl"),
      s = n("OMIV")
    let a = (0, i.un)(r.u, ({ get: e }) => e(s.JW, "3292594718"))
    n.d(t, {}, { H: a })
  },
  USmf(e, t, n) {
    var i = n("zTeN"),
      r = n("SPnB"),
      s = n("OWtl"),
      a = n("tFcq")
    let l = (0, i.i1)(s.u, (e, { get: t }) => {
      let n = t(a.hV, e),
        i =
          n?.secretsOwner == null ||
          (n.secretsOwner.accountId === t(r.chatGptAuthenticatedAccountId$) &&
            n.secretsOwner.userId === t(r.chatGptAuthenticatedUserId$)),
        s =
          n?.environmentVariablesOwner == null ||
          (n.environmentVariablesOwner.accountId === t(r.chatGptAuthenticatedAccountId$) &&
            n.environmentVariablesOwner.userId === t(r.chatGptAuthenticatedUserId$))
      return null == n || (i && s)
        ? n
        : {
            ...n,
            secrets: i ? n.secrets : void 0,
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
          let i = (e?.draft ?? e)?.secrets
          if (null == i) return n
          let r = Math.max(-1, ...(n ?? []).map(({ id: e }) => e)) + 1,
            s = i.map((e, t) => ({
              id: r + t,
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
    var i = n("zTeN"),
      r = n("OWtl"),
      s = n("OMIV")
    let a = (0, i.un)(r.u, ({ get: e }) => e(s.JW, "1180331538") && e(s.JW, "3877348421"))
    n.d(t, {}, { Y: a })
  },
  gW5Q(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("oyxz"),
      a = n("zKCW"),
      l = n("GO7r")
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n,
            a = (0, r.c)(3),
            { publicationFailed: o } = e,
            d = void 0 !== o && o
          return (
            a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(l.Gmf, { className: "text-danger" })), (a[0] = t))
              : (t = a[0]),
            a[1] !== d
              ? ((n = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    d
                      ? (0, i.jsx)(s.A, {
                          id: "environmentSetup.footer.publicationFailed",
                          defaultMessage: "Couldn’t publish",
                          description: "Compact footer status for a confirmed failed environment publication",
                        })
                      : (0, i.jsx)(s.A, {
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
            d = (0, r.c)(13),
            { children: c, status: u, error: m, errorActions: p } = e
          return (
            d[0] !== m || d[1] !== p
              ? ((t =
                  null != m &&
                  (0, i.jsx)(a.l, {
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
              ? ((n = (0, i.jsx)("div", {
                  className: "flex min-w-0 flex-auto items-center gap-2 text-secondary",
                  children: u,
                })),
                (d[3] = u),
                (d[4] = n))
              : (n = d[4]),
            d[5] !== c
              ? ((s = (0, i.jsx)("div", { className: "ms-auto flex shrink-0 items-center gap-2", children: c })),
                (d[5] = c),
                (d[6] = s))
              : (s = d[6]),
            d[7] !== n || d[8] !== s
              ? ((l = (0, i.jsxs)("div", { className: "flex min-w-0 flex-wrap items-center gap-2", children: [n, s] })),
                (d[7] = n),
                (d[8] = s),
                (d[9] = l))
              : (l = d[9]),
            d[10] !== t || d[11] !== l
              ? ((o = (0, i.jsxs)("div", {
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
    var i = n("ABep"),
      r = n("QosV"),
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
      return (0, i.jsxs)(
        s.X,
        {
          children: [
            (0, i.jsx)(s.X.Header, {
              actions: e.showAction ? (0, i.jsx)("div", { className: "h-6 w-20 rounded bg-text/10" }) : void 0,
              size: "compact",
              title: (0, i.jsx)("div", { className: "h-3 w-20 rounded bg-text/10" }),
            }),
            (0, i.jsx)(s.X.Content, {
              children: (0, i.jsx)(l.t, {
                children: Array.from({ length: e.rowCount }, (t, n) =>
                  (0, i.jsx)(
                    a.ic,
                    {
                      control: (0, i.jsx)("div", { className: "h-3 w-12 shrink-0 rounded bg-text/10" }),
                      icon: e.showIcon
                        ? (0, i.jsx)("div", { className: "size-4 shrink-0 rounded bg-text/10" })
                        : void 0,
                      label: (0, i.jsx)("div", { className: "h-3 w-20 rounded bg-text/10" }),
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
            o = (0, r.c)(11),
            { loadingLabel: d, inPlace: p } = e,
            f = void 0 !== p && p,
            h = f ? c : u,
            g = f ? void 0 : "min-h-0 flex-1 overflow-y-auto p-panel"
          return (
            o[0] !== d
              ? ((t = (0, i.jsx)("span", { className: "sr-only", children: d })), (o[0] = d), (o[1] = t))
              : (t = o[1]),
            o[2] !== h ? ((n = h.map(m)), (o[2] = h), (o[3] = n)) : (n = o[3]),
            o[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, i.jsx)("div", { className: "h-6 w-24 self-end rounded bg-text/10" })), (o[4] = s))
              : (s = o[4]),
            o[5] !== n
              ? ((a = (0, i.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "flex flex-col gap-6 motion-safe:animate-pulse",
                  children: [n, s],
                })),
                (o[5] = n),
                (o[6] = a))
              : (a = o[6]),
            o[7] !== g || o[8] !== t || o[9] !== a
              ? ((l = (0, i.jsxs)("div", { className: g, role: "status", children: [t, a] })),
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
  kRiQ(e, t, n) {
    n.d(t, { ThreadEnvironmentPanel: () => W })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("SZCv"),
      a = n.n(s),
      l = n("zTeN"),
      o = n("DBCl"),
      d = n("yKY7"),
      c = n("zd8w"),
      u = n("oyxz"),
      m = n("tl5a"),
      p = n("yXmW"),
      f = n("SPnB"),
      h = n("ckTT"),
      g = n("Cybu"),
      x = n("zKCW"),
      v = n("ygO2"),
      b = n("GaA7"),
      y = n("OWtl"),
      w = n("ndjw"),
      j = n("V3rO"),
      k = n("eA5w"),
      A = n("tz0P"),
      N = n("QvRd"),
      S = n("BPZJ"),
      _ = n("SbKN"),
      I = n("xWIM"),
      M = n("HhRW"),
      C = n("j8Ud"),
      B = n("vw1I"),
      E = n("jf0i"),
      U = n("CFI7"),
      D = n("gW5Q"),
      P = n("wbXL"),
      T = n("nuXe"),
      z = n.n(T),
      V = n("dDVm"),
      R = n("KEmQ")
    let O = (0, l.i1)(y.u, (e, { get: t }) =>
      Object.fromEntries(
        e.flatMap((e) => {
          let { data: n } = t(V.D, e)
          return null == n || "inaccessible" === n ? [] : [[e, n.repository_full_name]]
        }),
      ),
    )
    function Y(e) {
      let t,
        n,
        s,
        a,
        o,
        d = (0, r.c)(18),
        { settings: u, repositories: m, isReadOnly: p, onChange: f } = e
      d[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (d[0] = t)) : (t = d[0])
      let [h, g] = (0, c.useState)(t)
      d[1] !== m ? ((n = z()(m.map(F))), (d[1] = m), (d[2] = n)) : (n = d[2])
      let x = n,
        v = (0, l._U)(O, x)
      return (
        d[3] !== u.envVars || d[4] !== u.networkSecrets || d[5] !== u.repositories
          ? ((s = JSON.stringify([u.repositories, u.envVars, u.networkSecrets])),
            (d[3] = u.envVars),
            (d[4] = u.networkSecrets),
            (d[5] = u.repositories),
            (d[6] = s))
          : (s = d[6]),
        d[7] !== f || d[8] !== m || d[9] !== u.repositories
          ? ((a = (e, t) => {
              let n = e.flatMap((e) => {
                let n = m.filter((t) => {
                    let { repositoryId: n } = t
                    return n === e
                  }),
                  i =
                    n.length > 0
                      ? n
                      : u.repositories.filter((t) => {
                          let { repositoryId: n } = t
                          return n === e
                        })
                if (i.length > 0) return i
                let r = t.find((t) => {
                  let { repository: n } = t
                  return n.id === e
                })
                if (null == r || !r.repository.default_branch) throw Error("Repository has no available default branch")
                return [
                  {
                    resourceId: `repository:${crypto.randomUUID()}`,
                    repositoryId: e,
                    ref: r.repository.default_branch,
                    mountPath: "",
                    refresh: void 0,
                    depth: void 0,
                    extraRefs: [],
                    githubLinkId: r.linkId,
                  },
                ]
              })
              ;(g(t), f(n))
            }),
            (d[7] = f),
            (d[8] = m),
            (d[9] = u.repositories),
            (d[10] = a))
          : (a = d[10]),
        d[11] !== p || d[12] !== v || d[13] !== x || d[14] !== h || d[15] !== s || d[16] !== a
          ? ((o = (0, i.jsx)(R.j, {
              repositoryIds: x,
              selections: h,
              repositoryNames: v,
              revision: s,
              isReadOnly: p,
              onChange: a,
            })),
            (d[11] = p),
            (d[12] = v),
            (d[13] = x),
            (d[14] = h),
            (d[15] = s),
            (d[16] = a),
            (d[17] = o))
          : (o = d[17]),
        o
      )
    }
    function F(e) {
      let { repositoryId: t } = e
      return t
    }
    var q = n("ER7Kt")
    let K = (0, l.i1)(y.u, (e, { get: t }) => t(m.M5, { hostId: (0, k.Y)(), threadId: e })?.environmentConfigId),
      L = (0, l.i1)(y.u, (e, { get: t }) => {
        let n = t(K, e)
        if (null == n || !t(q.iO, n)) return !1
        let { data: i } = t(A.A$, n)
        return i?.provider_metadata?.codex_desktop_default_cloud_parent !== "1" || t(w.Gm)?.[e] != null
      })
    function W(e) {
      let t,
        n = (0, r.c)(11),
        { threadId: s, renderSlots: a } = e,
        o = void 0 === a ? p.E : a,
        d = (0, l.Ul)(q.fp),
        c = (0, l._U)(j.ic, s),
        h = (0, l._U)(m.hU, c),
        g = (0, l.Ul)(f.chatGptAuthenticatedAccountId$),
        x = (0, l.Ul)(f.chatGptAuthenticatedUserId$)
      if (!d) return null
      if (n[0] !== g || n[1] !== c || n[2] !== h || n[3] !== o || n[4] !== x) {
        let e
        ;(n[6] !== g || n[7] !== c || n[8] !== h || n[9] !== x
          ? ((e =
              null != c && null != h && null != g && null != x
                ? (0, i.jsx)(
                    G,
                    { conversationId: c, identity: { accountId: g, userId: x, environmentId: h } },
                    `${g}:${x}:${h}`,
                  )
                : (0, i.jsx)(ee, {
                    children: (0, i.jsx)(P.J, {
                      inPlace: !0,
                      loadingLabel: (0, i.jsx)(u.A, {
                        id: "threadEnvironment.panel.waiting",
                        defaultMessage:
                          "Settings will be available after this thread connects to its Cloud environment",
                        description: "Settings require an existing runtime instance",
                      }),
                    }),
                  })),
            (n[6] = g),
            (n[7] = c),
            (n[8] = h),
            (n[9] = x),
            (n[10] = e))
          : (e = n[10]),
          (t = o({ headerRows: [], content: e })),
          (n[0] = g),
          (n[1] = c),
          (n[2] = h),
          (n[3] = o),
          (n[4] = x),
          (n[5] = t))
      } else t = n[5]
      return t
    }
    function G(e) {
      let t,
        n,
        s,
        p,
        j,
        k,
        T,
        z,
        V,
        R,
        O,
        F,
        W,
        G,
        et,
        en,
        ei,
        er,
        es,
        ea,
        el,
        eo,
        ed,
        ec,
        eu,
        em,
        ep,
        ef,
        eh,
        eg,
        ex,
        ev,
        eb,
        ey,
        ew,
        ej = (0, r.c)(149),
        { identity: ek, conversationId: eA } = e,
        eN = (0, l.gh)(y.u),
        eS = (0, l._U)(q.rW, ek),
        e_ = (0, l._U)(K, eA),
        eI = (0, l._U)(L, eA),
        [eM, eC] = (0, c.useState)(!1),
        [eB, eE] = (0, c.useState)(null),
        [eU, eD] = (0, c.useState)(!1),
        [eP, eT] = (0, c.useState)(null),
        [ez, eV] = (0, c.useState)(null),
        [eR, eO] = (0, c.useState)(!1),
        eY = (0, c.useRef)(!1),
        [eF, eq] = (0, c.useState)(null),
        [eK, eL] = (0, c.useState)(!1),
        eW = eS.data,
        eG =
          eI && null != eP && eP.configId === e_ && eP.revision === eW?.desiredRevision && null == ez
            ? eP.conflicts
            : null
      ej[0] !== ez || ej[1] !== eR || ej[2] !== eW
        ? ((t = !eR && null != ez && null != eW && !(0, d.xo)(ez.baseSettings, eW)),
          (ej[0] = ez),
          (ej[1] = eR),
          (ej[2] = eW),
          (ej[3] = t))
        : (t = ej[3])
      let e$ = t
      ej[4] !== eW?.envVars ? ((n = eW?.envVars.map(Z) ?? []), (ej[4] = eW?.envVars), (ej[5] = n)) : (n = ej[5])
      let eQ = n
      ej[6] !== eW?.networkSecrets
        ? ((s = eW?.networkSecrets.map(H) ?? []), (ej[6] = eW?.networkSecrets), (ej[7] = s))
        : (s = ej[7])
      let eX = s,
        eJ = ez?.variables ?? eQ
      ej[8] !== eG ? ((p = (0, E.R)(eG)), (ej[8] = eG), (ej[9] = p)) : (p = ej[9])
      let eH = p,
        eZ = ez?.secrets ?? eX
      ej[10] !== eX || ej[11] !== eQ || ej[12] !== eW?.networkPolicy || ej[13] !== eW?.repositories
        ? ((j = function (e) {
            eT(null)
            let t = a()(e.networkPolicy, eW?.networkPolicy) ? void 0 : e.networkPolicy,
              n = a()(e.repositories, eW?.repositories) ? void 0 : e.repositories,
              i = a()(e.variables, eQ) ? void 0 : e.variables,
              r = a()(e.secrets, eX) ? void 0 : e.secrets
            ;(eV(
              null == i && null == r && null == n && null == t
                ? null
                : { ...e, variables: i, secrets: r, repositories: n, networkPolicy: t },
            ),
              eq(null))
          }),
          (ej[10] = eX),
          (ej[11] = eQ),
          (ej[12] = eW?.networkPolicy),
          (ej[13] = eW?.repositories),
          (ej[14] = j))
        : (j = ej[14])
      let e0 = j
      ej[15] !== eA || ej[16] !== ek || ej[17] !== eN
        ? ((k = () =>
            eN.get(q.fp) &&
            eN.get(f.chatGptAuthenticatedAccountId$) === ek.accountId &&
            eN.get(f.chatGptAuthenticatedUserId$) === ek.userId &&
            eN.get(m.hU, eA) === ek.environmentId),
          (ej[15] = eA),
          (ej[16] = ek),
          (ej[17] = eN),
          (ej[18] = k))
        : (k = ej[18])
      let e1 = k
      ej[19] !== ek || ej[20] !== eN.query
        ? ((T = async () => {
            await eN.query.invalidate(q.rW, ek)
          }),
          (ej[19] = ek),
          (ej[20] = eN.query),
          (ej[21] = T))
        : (T = ej[21])
      let e2 = T
      ej[22] !== e_ ||
      ej[23] !== eG?.override ||
      ej[24] !== eA ||
      ej[25] !== ez ||
      ej[26] !== ek ||
      ej[27] !== e1 ||
      ej[28] !== e2 ||
      ej[29] !== eN ||
      ej[30] !== eW
        ? ((z = async function () {
            let e = b.appServices?.environmentConfigs
            if (
              e?.promoteInstanceSettings == null ||
              null == e_ ||
              null == eW ||
              null != ez ||
              eY.current ||
              !e1() ||
              !eN.get(L, eA) ||
              eN.get(K, eA) !== e_
            )
              return
            ;(eC(!0), eD(!1))
            let t = eN.get(w.Gm)?.[eA]
            return e
              .promoteInstanceSettings({
                ...ek,
                configId: e_,
                desiredRevision: eW.desiredRevision,
                override: eG?.override,
              })
              .then((e) => {
                if (e1() && eN.get(K, eA) === e_) {
                  if (!e.ok) {
                    if ("conflict" === e.error)
                      return void eT({ configId: e_, revision: eW.desiredRevision, conflicts: e.review })
                    throw Error("promotion-unconfirmed")
                  }
                  ;(eT(null),
                    eE(eW.desiredRevision),
                    t?.projectKind === "local" &&
                      eN.get(h.Kc) &&
                      (0, g.ke)(eN, "cloud", e_, { type: "local", projectId: (0, o.Np8)(t.projectId) }),
                    eN.query.invalidate(A.A$, e_),
                    (0, A.Nb)(eN, { force: !0 }).catch(J))
                }
              })
              .catch(async () => {
                ;(eD(!0), await Promise.all([e2(), eN.query.invalidate(A.A$, e_)]))
              })
              .finally(() => {
                eC(!1)
              })
          }),
          (ej[22] = e_),
          (ej[23] = eG?.override),
          (ej[24] = eA),
          (ej[25] = ez),
          (ej[26] = ek),
          (ej[27] = e1),
          (ej[28] = e2),
          (ej[29] = eN),
          (ej[30] = eW),
          (ej[31] = z))
        : (z = ej[31])
      let e3 = z
      ej[32] !== ez || ej[33] !== ek || ej[34] !== e1 || ej[35] !== e2 || ej[36] !== eN
        ? ((V = async function () {
            if (null != ez && e1() && !eY.current)
              return (
                (eY.current = !0),
                eO(!0),
                eq(null),
                (0, q.M2)(eN, ek, ez, e1)
                  .then((e) => {
                    "network-policy-limit" === e ? eq(e) : (eV(null), e2())
                  })
                  .catch(async () => {
                    e1() && (eq("unconfirmed"), await e2())
                  })
                  .finally(() => {
                    ;((eY.current = !1), eO(!1))
                  })
              )
          }),
          (ej[32] = ez),
          (ej[33] = ek),
          (ej[34] = e1),
          (ej[35] = e2),
          (ej[36] = eN),
          (ej[37] = V))
        : (V = ej[37])
      let e4 = V
      if (null == eW) {
        let e
        return (
          ej[38] !== eS.isError || ej[39] !== eS.isFetching || ej[40] !== e2
            ? ((e = (0, i.jsx)(ee, {
                children: eS.isError
                  ? (0, i.jsx)(x.l, {
                      variant: "settings",
                      role: "alert",
                      content: (0, i.jsx)(u.A, {
                        id: "threadEnvironment.loadFailed",
                        defaultMessage: "Settings could not be loaded for this Default Cloud environment",
                        description: "Error when the existing settings could not be read in a Default Cloud chat",
                      }),
                      trailingAction: (0, i.jsx)(v.$, {
                        color: "secondary",
                        size: "settingsAction",
                        disabled: eS.isFetching,
                        onClick: () => void e2(),
                        children: (0, i.jsx)(u.A, {
                          id: "threadEnvironment.retryLoad",
                          defaultMessage: "Retry",
                          description: "Retry loading settings for this Cloud environment",
                        }),
                      }),
                    })
                  : (0, i.jsx)(P.J, {
                      inPlace: !0,
                      loadingLabel: (0, i.jsx)(u.A, {
                        id: "restricted.environmentSetup.sidePanel.loading",
                        defaultMessage: "Loading environment…",
                        description: "Status shown while the cloud environment configuration is being loaded",
                      }),
                    }),
              })),
              (ej[38] = eS.isError),
              (ej[39] = eS.isFetching),
              (ej[40] = e2),
              (ej[41] = e))
            : (e = ej[41]),
          e
        )
      }
      ej[42] !== ez?.networkPolicy || ej[43] !== ez?.repositories || ej[44] !== ez?.secrets || ej[45] !== ez?.variables
        ? ((R = []),
          ez?.networkPolicy != null && R.push("network"),
          ez?.repositories != null && R.push("repositories"),
          ez?.variables != null && R.push("variables"),
          ez?.secrets != null && R.push("secrets"),
          (ej[42] = ez?.networkPolicy),
          (ej[43] = ez?.repositories),
          (ej[44] = ez?.secrets),
          (ej[45] = ez?.variables),
          (ej[46] = R))
        : (R = ej[46])
      let e5 = ez?.networkPolicy ?? eW.networkPolicy,
        e6 = "disabled" !== e5.type
      ;(ej[47] !== e5 ? ((O = (0, M.UV)(e5)), (ej[47] = e5), (ej[48] = O)) : (O = ej[48]),
        ej[49] !== e5.egress_rules || ej[50] !== e5.type
          ? ((F = "restricted" === e5.type ? e5.egress_rules.map(X) : []),
            (ej[49] = e5.egress_rules),
            (ej[50] = e5.type),
            (ej[51] = F))
          : (F = ej[51]),
        ej[52] !== e6 || ej[53] !== O || ej[54] !== F
          ? ((W = { networkEnabled: e6, networkPreset: O, networkDomains: F }),
            (ej[52] = e6),
            (ej[53] = O),
            (ej[54] = F),
            (ej[55] = W))
          : (W = ej[55]))
      let e7 = W
      if (e$) {
        let e
        ;(ej[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, N.E)("unsavedChangesConflict")), (ej[56] = e))
          : (e = ej[56]),
          (G = e))
      } else if ("network-policy-limit" === eF) {
        let e
        ;(ej[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, N.E)("networkPolicyLimit")), (ej[57] = e))
          : (e = ej[57]),
          (G = e))
      } else if ("unconfirmed" === eF) {
        let e
        ;(ej[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = {
              ...(0, N.E)("saveUnconfirmed"),
              content: (0, i.jsx)(u.A, {
                id: "threadEnvironment.retrySave",
                defaultMessage: "Your edits are still here. Try saving again.",
                description:
                  "Recovery guidance when saving edits to the environment in a Default Cloud chat could not be confirmed",
              }),
            }),
            (ej[58] = e))
          : (e = ej[58]),
          (G = e))
      }
      ej[59] !== R ? ((et = (0, i.jsx)(I.k, { userSections: R })), (ej[59] = R), (ej[60] = et)) : (et = ej[60])
      let e8 = et
      if (eG) {
        let e
        ;(ej[61] !== eG.conflicts.length
          ? ((e = (0, i.jsx)("span", {
              role: "alert",
              children: (0, i.jsx)(u.A, {
                id: "threadEnvironment.conflictCount",
                defaultMessage: "{count, plural, one {# conflict} other {# conflicts}}",
                values: { count: eG.conflicts.length },
                description: "Number of settings that need review before promotion",
              }),
            })),
            (ej[61] = eG.conflicts.length),
            (ej[62] = e))
          : (e = ej[62]),
          (e8 = e))
      }
      if (null != G) {
        let e
        ;(ej[63] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(D.E, {})), (ej[63] = e)) : (e = ej[63]),
          (e8 = e))
      }
      ;(ej[64] !== eI ||
      ej[65] !== eG ||
      ej[66] !== ez ||
      ej[67] !== e3 ||
      ej[68] !== eB ||
      ej[69] !== eM ||
      ej[70] !== eR ||
      ej[71] !== eW.desiredRevision
        ? ((en =
            eI &&
            (0, i.jsx)(v.$, {
              color: eG ? "primary" : "secondary",
              size: "dialog",
              loading: eM,
              disabled: null != ez || eR || eB === eW.desiredRevision,
              onClick: () => void e3(),
              children: eG
                ? (0, i.jsx)(u.A, {
                    id: "threadEnvironment.overrideAndPromote",
                    defaultMessage: "Override and Promote",
                    description: "Publish the reviewed conflicting settings using this thread’s values",
                  })
                : (0, i.jsx)(u.A, {
                    id: "threadEnvironment.promote",
                    defaultMessage: "Promote",
                    description: "Publish this thread’s saved settings for future threads from its Cloud configuration",
                  }),
            })),
          (ej[64] = eI),
          (ej[65] = eG),
          (ej[66] = ez),
          (ej[67] = e3),
          (ej[68] = eB),
          (ej[69] = eM),
          (ej[70] = eR),
          (ej[71] = eW.desiredRevision),
          (ej[72] = en))
        : (en = ej[72]),
        ej[73] !== ez || ej[74] !== eR
          ? ((ei =
              null != ez &&
              (0, i.jsx)(v.$, {
                color: "secondary",
                size: "dialog",
                disabled: eR,
                onClick: () => {
                  ;(eV(null), eq(null))
                },
                children: (0, i.jsx)(u.A, {
                  id: "threadEnvironment.discard",
                  defaultMessage: "Discard edits",
                  description: "Discard local instance settings edits",
                }),
              })),
            (ej[73] = ez),
            (ej[74] = eR),
            (ej[75] = ei))
          : (ei = ej[75]),
        ej[76] !== e$ || ej[77] !== eG || ej[78] !== ez || ej[79] !== e4 || ej[80] !== eR
          ? ((er =
              !eG &&
              (0, i.jsx)(v.$, {
                size: "dialog",
                "aria-busy": eR,
                loading: eR,
                disabled: null == ez || e$,
                onClick: () => void e4(),
                children: (0, i.jsx)(u.A, {
                  id: "threadEnvironment.save",
                  defaultMessage: "Save",
                  description: "Save changes to this Cloud environment; they take effect asynchronously",
                }),
              })),
            (ej[76] = e$),
            (ej[77] = eG),
            (ej[78] = ez),
            (ej[79] = e4),
            (ej[80] = eR),
            (ej[81] = er))
          : (er = ej[81]),
        ej[82] !== G || ej[83] !== e8 || ej[84] !== en || ej[85] !== ei || ej[86] !== er
          ? ((es = (0, i.jsxs)(D.W, { status: e8, error: G, children: [en, ei, er] })),
            (ej[82] = G),
            (ej[83] = e8),
            (ej[84] = en),
            (ej[85] = ei),
            (ej[86] = er),
            (ej[87] = es))
          : (es = ej[87]))
      let e9 = eH.other
      ;(ej[88] !== eU
        ? ((ea =
            eU &&
            (0, i.jsx)(x.l, {
              variant: "settings",
              role: "alert",
              content: (0, i.jsx)(u.A, {
                id: "threadEnvironment.promoteFailed",
                defaultMessage: "Couldn’t confirm promotion. Review the saved settings and try again.",
                description: "Recovery guidance after promoting a thread environment to its source configuration fails",
              }),
            })),
          (ej[88] = eU),
          (ej[89] = ea))
        : (ea = ej[89]),
        ej[90] !== eB || ej[91] !== eW.desiredRevision
          ? ((el =
              eB === eW.desiredRevision &&
              (0, i.jsx)("p", {
                role: "status",
                children: (0, i.jsx)(u.A, {
                  id: "threadEnvironment.published",
                  defaultMessage: "New threads from this configuration will use the promoted settings",
                  description: "Confirmation after promoting the saved settings of a thread environment",
                }),
              })),
            (ej[90] = eB),
            (ej[91] = eW.desiredRevision),
            (ej[92] = el))
          : (el = ej[92]))
      let te = ez?.repositories ?? eW.repositories,
        tt = eR || eM || e$
      ;(ej[93] !== ez || ej[94] !== e0 || ej[95] !== eW
        ? ((eo = (e) => e0({ ...ez, baseSettings: ez?.baseSettings ?? eW, repositories: e })),
          (ej[93] = ez),
          (ej[94] = e0),
          (ej[95] = eW),
          (ej[96] = eo))
        : (eo = ej[96]),
        ej[97] !== eW || ej[98] !== te || ej[99] !== tt || ej[100] !== eo
          ? ((ed = (0, i.jsx)(Y, { settings: eW, repositories: te, isReadOnly: tt, onChange: eo })),
            (ej[97] = eW),
            (ej[98] = te),
            (ej[99] = tt),
            (ej[100] = eo),
            (ej[101] = ed))
          : (ed = ej[101]))
      let tn = eR || e$
      ;(ej[102] === Symbol.for("react.memo_cache_sentinel")
        ? ((ec = (0, i.jsx)(u.A, {
            id: "threadEnvironment.network.packageManagerSnapshot",
            defaultMessage:
              "Saving a network edit adds these hosts to Additional allowed domains and resets this switch",
            description: "Explains the one-time package manager selection for a running Cloud environment",
          })),
          (ej[102] = ec))
        : (ec = ej[102]),
        ej[103] === Symbol.for("react.memo_cache_sentinel")
          ? ((eu = (0, i.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, i.jsx)(u.A, {
                id: "threadEnvironment.network.limit",
                defaultMessage:
                  "Access must stay within the limits of this environment’s configuration. Changes apply only to this thread.",
                description: "Explains the limits and scope of live HTTP network edits",
              }),
            })),
            (ej[103] = eu))
          : (eu = ej[103]),
        ej[104] !== ez || ej[105] !== e0 || ej[106] !== e7 || ej[107] !== eW
          ? ((em = (e) =>
              e0({ ...ez, baseSettings: ez?.baseSettings ?? eW, networkPolicy: (0, C.t)({ ...e7, ...e }) })),
            (ej[104] = ez),
            (ej[105] = e0),
            (ej[106] = e7),
            (ej[107] = eW),
            (ej[108] = em))
          : (em = ej[108]),
        ej[109] !== e7 || ej[110] !== tn || ej[111] !== em
          ? ((ep = (0, i.jsx)(U._, {
              draft: e7,
              isReadOnly: tn,
              packageManagersDescription: ec,
              notice: eu,
              onDraftChange: em,
            })),
            (ej[109] = e7),
            (ej[110] = tn),
            (ej[111] = em),
            (ej[112] = ep))
          : (ep = ej[112]))
      let ti = eH.variables
      ;(ej[113] === Symbol.for("react.memo_cache_sentinel") ? ((ef = []), (ej[113] = ef)) : (ef = ej[113]),
        ej[114] !== eZ ? ((eh = eZ.map(Q)), (ej[114] = eZ), (ej[115] = eh)) : (eh = ej[115]))
      let tr = eR || eM || e$
      ;(ej[116] !== ez || ej[117] !== e0 || ej[118] !== eW
        ? ((eg = (e) => {
            e0({ ...ez, baseSettings: ez?.baseSettings ?? eW, variables: e })
          }),
          (ej[116] = ez),
          (ej[117] = e0),
          (ej[118] = eW),
          (ej[119] = eg))
        : (eg = ej[119]),
        ej[120] !== eH.variables || ej[121] !== eh || ej[122] !== tr || ej[123] !== eg || ej[124] !== eJ
          ? ((ex = (0, i.jsx)(B.W, {
              environmentOnly: !0,
              config: void 0,
              configuration: null,
              variables: eJ,
              conflictRows: ti,
              issues: ef,
              unavailableNames: eh,
              isReadOnly: tr,
              onChange: eg,
            })),
            (ej[120] = eH.variables),
            (ej[121] = eh),
            (ej[122] = tr),
            (ej[123] = eg),
            (ej[124] = eJ),
            (ej[125] = ex))
          : (ex = ej[125]))
      let ts = eR || eM || e$
      return (
        ej[126] === Symbol.for("react.memo_cache_sentinel") ? ((ev = () => eL(!0)), (ej[126] = ev)) : (ev = ej[126]),
        ej[127] !== eH.secrets || ej[128] !== eZ || ej[129] !== ts
          ? ((eb = (0, i.jsx)(_.m, { secrets: eZ, conflictRows: eH.secrets, isReadOnly: ts, onEdit: ev })),
            (ej[127] = eH.secrets),
            (ej[128] = eZ),
            (ej[129] = ts),
            (ej[130] = eb))
          : (eb = ej[130]),
        ej[131] !== e$ ||
        ej[132] !== ez ||
        ej[133] !== e0 ||
        ej[134] !== eK ||
        ej[135] !== eR ||
        ej[136] !== eZ ||
        ej[137] !== eW
          ? ((ey =
              eK &&
              !eR &&
              (0, i.jsx)(S.b, {
                environmentOnly: !0,
                hasConflict: e$,
                initialSecrets: eZ,
                onClose: () => eL(!1),
                onLocalSave: (e) => {
                  e0({ ...ez, baseSettings: ez?.baseSettings ?? eW, secrets: e.map($) })
                },
              })),
            (ej[131] = e$),
            (ej[132] = ez),
            (ej[133] = e0),
            (ej[134] = eK),
            (ej[135] = eR),
            (ej[136] = eZ),
            (ej[137] = eW),
            (ej[138] = ey))
          : (ey = ej[138]),
        ej[139] !== eH.other ||
        ej[140] !== es ||
        ej[141] !== ea ||
        ej[142] !== el ||
        ej[143] !== ed ||
        ej[144] !== ep ||
        ej[145] !== ex ||
        ej[146] !== eb ||
        ej[147] !== ey
          ? ((ew = (0, i.jsxs)(ee, { footer: es, children: [e9, ea, el, ed, ep, ex, eb, ey] })),
            (ej[139] = eH.other),
            (ej[140] = es),
            (ej[141] = ea),
            (ej[142] = el),
            (ej[143] = ed),
            (ej[144] = ep),
            (ej[145] = ex),
            (ej[146] = eb),
            (ej[147] = ey),
            (ej[148] = ew))
          : (ew = ej[148]),
        ew
      )
    }
    function $(e) {
      return { ...e, injectionTarget: e.injectionTarget ?? { type: "environment_variable", name: e.name } }
    }
    function Q(e) {
      let { injectionTarget: t, name: n } = e
      return t?.name ?? n
    }
    function X(e) {
      let { host: t } = e
      return t
    }
    function J() {}
    function H(e, t) {
      let { name: n, vaultId: i, optional: r, origin: s, variableName: a, allowedDomains: l } = e
      return {
        id: t,
        name: n,
        value: "",
        serverId: i,
        optional: r,
        origin: s,
        source: "environment",
        injectionTarget: { type: "environment_variable", name: a, domain: l.join(", ") },
      }
    }
    function Z(e) {
      let { name: t, vaultId: n, optional: i, origin: r } = e
      return { name: t, value: "", serverId: n, optional: i, origin: r }
    }
    function ee(e) {
      let t,
        n,
        s,
        a,
        l = (0, r.c)(8),
        { children: o, footer: d } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)("h2", {
              className: "text-lg font-medium select-none",
              children: (0, i.jsx)(u.A, {
                id: "threadEnvironment.panel.title",
                defaultMessage: "Environment configuration",
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
        l[3] !== d
          ? ((s =
              null != d &&
              (0, i.jsx)("footer", { className: "shrink-0 border-t border-default px-panel py-2", children: d })),
            (l[3] = d),
            (l[4] = s))
          : (s = l[4]),
        l[5] !== n || l[6] !== s
          ? ((a = (0, i.jsxs)("div", { className: "flex h-full min-h-0 flex-col bg-surface", children: [n, s] })),
            (l[5] = n),
            (l[6] = s),
            (l[7] = a))
          : (a = l[7]),
        a
      )
    }
  },
  JzLx(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("v7qY"),
      l = n("vi3X")
    function o(e, t) {
      let n = e.ownerDocument,
        i = n.activeElement
      if (!(i instanceof HTMLElement) || !e.contains(i)) return void t()
      let r = !1,
        s = () => {
          r = !0
        }
      ;(n.addEventListener("focusin", s, !0),
        t(),
        queueMicrotask(() => {
          ;(n.removeEventListener("focusin", s, !0),
            !r && i.isConnected && e.contains(i) && n.activeElement === n.body && i.focus({ preventScroll: !0 }))
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
            p = (0, r.c)(17),
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
              ? ((c = b && null != x ? null : (0, i.jsx)("div", { ref: w, className: "contents" })),
                (p[7] = x),
                (p[8] = b),
                (p[9] = w),
                (p[10] = c))
              : (c = p[10]),
            p[11] !== f || p[12] !== x
              ? ((u = null == x ? null : (0, a.createPortal)(f, x)), (p[11] = f), (p[12] = x), (p[13] = u))
              : (u = p[13]),
            p[14] !== c || p[15] !== u
              ? ((m = (0, i.jsxs)(i.Fragment, { children: [c, u] })), (p[14] = c), (p[15] = u), (p[16] = m))
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
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("zd8w"),
      l = n("HZfM"),
      o = n("GO7r")
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
        u = (0, r.c)(24),
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
        j = "grow" === (void 0 === f ? "grow" : f) && "flex-1"
      ;(u[0] !== w || u[1] !== j
        ? ((t = (0, s.A)("flex min-w-0 gap-3", w, j)), (u[0] = w), (u[1] = j), (u[2] = t))
        : (t = u[2]),
        u[3] !== v
          ? ((n = null != v ? (0, i.jsx)("span", { className: "flex shrink-0", children: v }) : null),
            (u[3] = v),
            (u[4] = n))
          : (n = u[4]))
      let k = "featured" === b && "text-base",
        A = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        N = "featured" !== b && "recommendation" !== b && "text-sm",
        S = "nested" !== b && "medium" === (void 0 === h ? "medium" : h) && "font-medium"
      return (
        u[5] !== S || u[6] !== k || u[7] !== A || u[8] !== N
          ? ((a = (0, s.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              k,
              A,
              N,
              S,
            )),
            (u[5] = S),
            (u[6] = k),
            (u[7] = A),
            (u[8] = N),
            (u[9] = a))
          : (a = u[9]),
        u[10] !== m || u[11] !== p || u[12] !== a
          ? ((l = (0, i.jsx)("div", { id: p, className: a, children: m })),
            (u[10] = m),
            (u[11] = p),
            (u[12] = a),
            (u[13] = l))
          : (l = u[13]),
        u[14] !== g || u[15] !== x
          ? ((o = g
              ? (0, i.jsx)("div", {
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
          ? ((d = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [l, o] })),
            (u[17] = l),
            (u[18] = o),
            (u[19] = d))
          : (d = u[19]),
        u[20] !== d || u[21] !== t || u[22] !== n
          ? ((c = (0, i.jsxs)("div", { className: t, children: [n, d] })),
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
            c = (0, r.c)(18),
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
              ? ((a = (0, i.jsx)("div", { className: n, children: p })), (c[5] = p), (c[6] = n), (c[7] = a))
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
              ? ((o = (0, i.jsx)("div", { className: l, children: u })), (c[11] = u), (c[12] = l), (c[13] = o))
              : (o = c[13]),
            c[14] !== t || c[15] !== a || c[16] !== o
              ? ((d = (0, i.jsxs)("div", { className: t, children: [a, o] })),
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
            d = (0, r.c)(35),
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
              size: j,
              variant: k,
              verticalAlignment: A,
            } = e,
            N = void 0 === m ? "grow" : m,
            S = void 0 === p ? "medium" : p,
            _ = void 0 === f ? "default" : f,
            I = void 0 === x ? "minimum" : x,
            M = void 0 === w || w,
            C = void 0 === j ? "default" : j,
            B = void 0 === k ? "default" : k,
            E = void 0 === A ? "center" : A,
            U = (0, a.useId)(),
            D = null != u || null != h || null != v,
            P = "function" == typeof g,
            T = P && null != u ? `${U}-label` : void 0,
            z = P && h ? `${U}-description` : void 0,
            V = M && ("split" !== _ || "default" !== B) && "px-4",
            R = M && "nested" === B && "group-data-[density=form]/settings:px-5",
            O =
              "stacked" === B &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            Y =
              "nested" === B &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            F = "stacked" !== B && ("start" === E ? "items-start" : "items-center"),
            q = "split" === _ && "default" === B && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            d[0] !== b ||
            d[1] !== _ ||
            d[2] !== C ||
            d[3] !== R ||
            d[4] !== O ||
            d[5] !== Y ||
            d[6] !== F ||
            d[7] !== q ||
            d[8] !== V ||
            d[9] !== B
              ? ((t = (0, s.A)(
                  "@container/settings-row",
                  V,
                  R,
                  O,
                  Y,
                  F,
                  q,
                  "default" === _ &&
                    ("default" === B || "featured" === B || "recommendation" === B) &&
                    (0, s.A)(
                      "flex justify-between",
                      "featured" === B && (0, s.A)("gap-6", "compact" === C ? "min-h-11 py-2" : "py-4"),
                      "featured" !== B && ("compact" === C ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === B && "dark:bg-primary-ghost-hover",
                  b,
                )),
                (d[0] = b),
                (d[1] = _),
                (d[2] = C),
                (d[3] = R),
                (d[4] = O),
                (d[5] = Y),
                (d[6] = F),
                (d[7] = q),
                (d[8] = V),
                (d[9] = B),
                (d[10] = t))
              : (t = d[10]),
            d[11] !== h ||
            d[12] !== z ||
            d[13] !== D ||
            d[14] !== v ||
            d[15] !== u ||
            d[16] !== T ||
            d[17] !== N ||
            d[18] !== S ||
            d[19] !== B ||
            d[20] !== E
              ? ((n = D
                  ? (0, i.jsx)(c, {
                      label: u,
                      labelId: T,
                      labelSizing: N,
                      labelWeight: S,
                      description: h,
                      descriptionId: z,
                      icon: v,
                      variant: B,
                      verticalAlignment: E,
                    })
                  : null),
                (d[11] = h),
                (d[12] = z),
                (d[13] = D),
                (d[14] = v),
                (d[15] = u),
                (d[16] = T),
                (d[17] = N),
                (d[18] = S),
                (d[19] = B),
                (d[20] = E),
                (d[21] = n))
              : (n = d[21]),
            d[22] !== g || d[23] !== I || d[24] !== z || d[25] !== P || d[26] !== T || d[27] !== _ || d[28] !== B
              ? ((l =
                  null != g && !1 !== g
                    ? (0, i.jsx)("div", {
                        className: (0, s.A)(
                          "stacked" === B && "w-full",
                          "nested" === B && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === _ &&
                            "default" === B &&
                            (0, s.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === I && "w-full",
                            ),
                          "default" === _ &&
                            ("default" === B || "featured" === B || "recommendation" === B) &&
                            (0, s.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === I ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === I && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: P ? g({ "aria-labelledby": T, "aria-describedby": z }) : g,
                      })
                    : null),
                (d[22] = g),
                (d[23] = I),
                (d[24] = z),
                (d[25] = P),
                (d[26] = T),
                (d[27] = _),
                (d[28] = B),
                (d[29] = l))
              : (l = d[29]),
            d[30] !== y || d[31] !== t || d[32] !== n || d[33] !== l
              ? ((o = (0, i.jsxs)("div", { id: y, className: t, children: [n, l] })),
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
            n = (0, r.c)(2),
            { children: s } = e
          return (
            n[0] !== s
              ? ((t = (0, i.jsx)("span", { className: "text-xs text-secondary", children: s })), (n[0] = s), (n[1] = t))
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
            j,
            k,
            A,
            N,
            S,
            _,
            I,
            M,
            C = (0, r.c)(54)
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
          let B = void 0 === v ? "row" : v,
            E = void 0 === b ? "default" : b,
            U = void 0 === y ? "default" : y,
            D = "before-trailing" === (void 0 === x ? "end" : x) && !p && null != t && null != w,
            P = D ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          C[16] !== u || C[17] !== D || C[18] !== E || C[19] !== P || C[20] !== U
            ? ((j = (0, s.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                P,
                "empty" === U
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, s.A)(
                      "px-4 text-start",
                      "nested" === U && "min-h-10 py-0.5",
                      "nested" !== U && ("large" === E ? "py-4" : "py-3"),
                      D && "gap-2",
                      !D && ("nested" === U ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (C[16] = u),
              (C[17] = D),
              (C[18] = E),
              (C[19] = P),
              (C[20] = U),
              (C[21] = j))
            : (j = C[21])
          let T = j
          ;(C[22] !== m || C[23] !== f || C[24] !== g || C[25] !== U
            ? ((k =
                "empty" === U
                  ? (0, i.jsxs)(i.Fragment, { children: [f, g] })
                  : (0, i.jsx)(c, { label: g, description: m, icon: f, variant: U, verticalAlignment: "center" })),
              (C[22] = m),
              (C[23] = f),
              (C[24] = g),
              (C[25] = U),
              (C[26] = k))
            : (k = C[26]),
            C[27] !== w
              ? ((A =
                  null != w
                    ? (0, i.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (C[27] = w),
                (C[28] = A))
              : (A = C[28]),
            C[29] !== k || C[30] !== A
              ? ((N = (0, i.jsxs)(i.Fragment, { children: [k, A] })), (C[29] = k), (C[30] = A), (C[31] = N))
              : (N = C[31]))
          let z = N,
            V = D ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            R = "row" === B && "first:rounded-t-2xl last:rounded-b-2xl",
            O = "recommendation" === U && "dark:bg-primary-ghost-hover",
            Y = !p && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            F =
              !p &&
              "recommendation" === U &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            C[32] !== V || C[33] !== R || C[34] !== O || C[35] !== Y || C[36] !== F
              ? ((S = (0, s.A)("group w-full items-center", V, R, O, Y, F)),
                (C[32] = V),
                (C[33] = R),
                (C[34] = O),
                (C[35] = Y),
                (C[36] = F),
                (C[37] = S))
              : (S = C[37]),
            C[38] !== n || C[39] !== a || C[40] !== o || C[41] !== z || C[42] !== p || C[43] !== h || C[44] !== T
              ? ((_ =
                  null != h.to
                    ? (0, i.jsx)(l.N_, {
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
                    : (0, i.jsx)("button", {
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
            C[46] !== t || C[47] !== p || C[48] !== D
              ? ((I =
                  p || null == t
                    ? null
                    : (0, i.jsx)("div", {
                        className: (0, s.A)(
                          "flex shrink-0 items-center gap-1",
                          D ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (C[46] = t),
                (C[47] = p),
                (C[48] = D),
                (C[49] = I))
              : (I = C[49]),
            C[50] !== S || C[51] !== _ || C[52] !== I
              ? ((M = (0, i.jsxs)("div", { className: S, children: [_, I] })),
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
            n = (0, r.c)(2),
            { children: s } = e
          return (
            n[0] !== s
              ? ((t = (0, i.jsx)("span", { className: "text-tertiary", children: s })), (n[0] = s), (n[1] = t))
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
            h = (0, r.c)(43),
            {
              id: g,
              ariaLabel: x,
              autoFocus: v,
              checked: b,
              description: y,
              highlightSelected: w,
              indicator: j,
              label: k,
              name: A,
              onChange: N,
              onClick: S,
              value: _,
              variant: I,
            } = e,
            M = void 0 === w || w,
            C = void 0 === j ? "radio" : j,
            B = void 0 === I ? "default" : I
          ;(h[0] !== b || h[1] !== y || h[2] !== M || h[3] !== C || h[4] !== B
            ? ((t = (0, s.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === B &&
                  (0, s.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != y ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === B && b && M && "radio" === C && "bg-primary-soft-alpha",
                "form" === B && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === B && "items-center gap-2",
                "checkmark" === C && "after:ms-7",
              )),
              (h[0] = b),
              (h[1] = y),
              (h[2] = M),
              (h[3] = C),
              (h[4] = B),
              (h[5] = t))
            : (t = h[5]),
            h[6] !== x || h[7] !== g
              ? ((n = (0, i.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: g,
                })),
                (h[6] = x),
                (h[7] = g),
                (h[8] = n))
              : (n = h[8]),
            h[9] !== C || h[10] !== B
              ? ((a = (0, s.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === C
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, s.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === B ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (h[9] = C),
                (h[10] = B),
                (h[11] = a))
              : (a = h[11]))
          let E = null != y ? `${g}-description` : void 0
          ;(h[12] !== x ||
          h[13] !== v ||
          h[14] !== b ||
          h[15] !== g ||
          h[16] !== A ||
          h[17] !== N ||
          h[18] !== S ||
          h[19] !== a ||
          h[20] !== E ||
          h[21] !== _
            ? ((l = (0, i.jsx)("input", {
                id: g,
                className: a,
                "aria-label": x,
                "aria-describedby": E,
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
              (h[20] = E),
              (h[21] = _),
              (h[22] = l))
            : (l = h[22]),
            h[23] !== b || h[24] !== C
              ? ((d = "checkmark" === C ? (0, i.jsx)(o.ALZ, { className: (0, s.A)(!b && "invisible") }) : null),
                (h[23] = b),
                (h[24] = C),
                (h[25] = d))
              : (d = h[25]))
          let U = "default" === B ? "text-sm font-medium" : "text-base"
          return (
            h[26] !== U ? ((c = (0, s.A)("text-default", U)), (h[26] = U), (h[27] = c)) : (c = h[27]),
            h[28] !== k || h[29] !== c
              ? ((u = (0, i.jsx)("span", { className: c, children: k })), (h[28] = k), (h[29] = c), (h[30] = u))
              : (u = h[30]),
            h[31] !== y || h[32] !== g
              ? ((m =
                  null != y
                    ? (0, i.jsx)("span", {
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
              ? ((p = (0, i.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, m],
                })),
                (h[34] = u),
                (h[35] = m),
                (h[36] = p))
              : (p = h[36]),
            h[37] !== p || h[38] !== t || h[39] !== n || h[40] !== l || h[41] !== d
              ? ((f = (0, i.jsxs)("div", { className: t, children: [n, l, d, p] })),
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
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("bZug")
    function l(e) {
      let t,
        n,
        l,
        o = (0, r.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: m, variant: p, decoration: f } = e,
        h = void 0 === p ? "default" : p,
        g = "flat" === h || "rows" === h ? a.s : a.r,
        x = void 0 === m || m ? g : "flex flex-col",
        v = "recommendation" === h && "rounded-[20px]",
        b = "recommendation" !== h && "flat" !== h && "rows" !== h && "outlinedLarge" !== h && "rounded-2xl",
        y = "outlinedLarge" === h && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === f && "daybreak-VsXdEH",
        j = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        k =
          "default" === h &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        A = "metered" === h && "ring-1 ring-inset ring-border-subtle",
        N = "secondary" === h && "bg-surface-secondary/92",
        S = "muted" === h && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        _ =
          "form" === h &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        I = "outlined" === h && "border border-subtle bg-transparent",
        M =
          "flat" === h &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        C = "input" === h && "border border-primary-outline bg-primary-soft",
        B = "recommendation" === h && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        o[0] !== c ||
        o[1] !== k ||
        o[2] !== A ||
        o[3] !== N ||
        o[4] !== S ||
        o[5] !== _ ||
        o[6] !== I ||
        o[7] !== M ||
        o[8] !== C ||
        o[9] !== B ||
        o[10] !== x ||
        o[11] !== v ||
        o[12] !== b ||
        o[13] !== y ||
        o[14] !== w ||
        o[15] !== j
          ? ((t = (0, s.A)(x, v, b, y, w, j, k, A, N, S, _, I, M, C, B, c)),
            (o[0] = c),
            (o[1] = k),
            (o[2] = A),
            (o[3] = N),
            (o[4] = S),
            (o[5] = _),
            (o[6] = I),
            (o[7] = M),
            (o[8] = C),
            (o[9] = B),
            (o[10] = x),
            (o[11] = v),
            (o[12] = b),
            (o[13] = y),
            (o[14] = w),
            (o[15] = j),
            (o[16] = t))
          : (t = o[16]),
        o[17] !== h
          ? ((n =
              "default" === h || "metered" === h
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (o[17] = h),
            (o[18] = n))
          : (n = o[18]),
        o[19] !== d || o[20] !== t || o[21] !== n
          ? ((l = (0, i.jsx)("div", { className: t, style: n, children: d })),
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
//# sourceMappingURL=377631.ba30eb7339.js.map
