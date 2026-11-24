export const __rspack_esm_ids = [867839]
export const __webpack_modules__ = {
  c1qP() {},
  TonS(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M9.33467 16.6663V4.93978L4.6374 9.63704L4.1667 9.16634L3.69599 8.69661L9.52998 2.86263L9.63447 2.77767C9.8925 2.60753 10.2433 2.63564 10.4704 2.86263L16.3034 8.69661L16.3884 8.80111C16.5588 9.05922 16.5306 9.40982 16.3034 9.63704C16.0762 9.86414 15.7255 9.89242 15.4675 9.722L15.363 9.63704L10.6647 4.9388V16.6663C10.6647 17.0336 10.367 17.3314 9.99971 17.3314C9.63259 17.3312 9.33467 17.0335 9.33467 16.6663ZM4.6374 9.63704C4.3777 9.89674 3.95569 9.89674 3.69599 9.63704C3.43657 9.37744 3.43668 8.95628 3.69599 8.69661L4.6374 9.63704Z",
            fill: "currentColor",
          }),
        })))
  },
  aJad(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z",
          }),
        })))
  },
  k675(e, t, n) {
    var i = n("kkdx"),
      a = n("td7D"),
      r = n("oUDT"),
      o = n("CKur"),
      l = n("B0Wx"),
      s = n("ISgP"),
      d = n("sQ4r"),
      c = n("zbjM")
    function u(e, t, n = { maxCharsPerItem: 2e3, turnLimit: 3 }) {
      let a = e.get(s.Op, t)
      if (null == a) {
        let n = e.query.getData(o.chatGptConversationQueryById$, t)
        null != n && (a = (0, r.hd)(n, { modelLookup: (0, d.Y)(e.get, t), streamingOrders: e.get(c.B, t) }))
      }
      return {
        conversationId: t,
        title: (0, l.Pl)(e, t),
        priorConversation:
          null == a
            ? null
            : (function (e, { maxCharsPerItem: t, messageLimit: n, turnLimit: a } = {}) {
                let r = [],
                  o = null == a ? e : e.slice(-a),
                  l = (e) => (null == t ? e : e.slice(0, t))
                for (let e of o)
                  for (let t of e.turn.items)
                    if ("user-message" === t.type) {
                      let e = (0, i.o)({
                        attachmentCount: t.attachments.length,
                        imageCount: t.images.length,
                        message: t.message,
                      })
                      e.length > 0 && r.push({ role: "user", content: [{ content_type: "text", text: l(e) }] })
                    } else
                      "assistant-message" === t.type &&
                        t.completed &&
                        r.push({ role: "assistant", content: [{ content_type: "text", text: l(t.content) }] })
                return { conversation: null == n ? r : r.slice(-n), diff: null }
              })(a, n),
      }
    }
    n.d(
      t,
      {},
      {
        I: u,
        d: function (e, t) {
          var n
          let i
          return ((n = t),
          (i = new Set()),
          (0, a.oz)(n).filter((e) => !i.has(e.conversationId) && (i.add(e.conversationId), !0))).map(
            (t) => ((0, l.ae)(e, t.conversationId, t.title), u(e, t.conversationId)),
          )
        },
      },
    )
  },
  K0yB(e, t, n) {
    var i = n("VpTR"),
      a = n("OMIV")
    n("V8uZ")
    var r = n("lrLr")
    let o = new i.q({ max: 32, ttl: 1e4 })
    n.d(
      t,
      {},
      {
        s: function (e, t) {
          e.get(a.JW, "codex-cot-turn-refactor") && o.set(t, !0)
        },
        z: function (e) {
          if (null != e && o.has(e))
            return (t) => {
              if (null == t || t.checkVisibility?.({ visibilityProperty: !0 }) === !1) return
              let n = o.get(e)
              if (null == n) return
              let i =
                  !0 === n
                    ? (function (e) {
                        var t
                        let n,
                          i,
                          a,
                          o = e.ownerDocument
                        if (o.hidden || (0, r.B)(o) || !e.animate) return
                        let l = e.animate(
                          ((t = e),
                          (n = t
                            .closest("[data-request-input-activity-root]")
                            ?.querySelector("[data-thread-scroll-footer] [data-composer-surface-variant]")),
                          (i = t.currentCSSZoom || 1),
                          (a =
                            null == n
                              ? 32
                              : Math.min(
                                  48,
                                  Math.max(
                                    0,
                                    (n.getBoundingClientRect().top - t.getBoundingClientRect().bottom) / i - 8,
                                  ),
                                )),
                          [
                            {
                              opacity: 0,
                              transform: `translateY(${a}px)`,
                              easing: "cubic-bezier(0.22, 0.65, 0.20, 1)",
                            },
                            { offset: 0.5, opacity: 1 },
                            { offset: 0.72, transform: "scaleX(0.98)", easing: "ease-in-out" },
                            { transform: "none" },
                          ].map((e) => ({ ...e, transformOrigin: "right center" }))),
                          { duration: 200 },
                        )
                        if (null != l) {
                          let e = () => {
                            o.hidden && l.cancel()
                          }
                          o.addEventListener("visibilitychange", e)
                          let t = () => o.removeEventListener("visibilitychange", e)
                          l.finished.then(t, t)
                        }
                        return l
                      })(t)
                    : n,
                a = i?.effect
              if (null == i || "u" < typeof KeyframeEffect || !(a instanceof KeyframeEffect)) return void o.delete(e)
              if (((a.target = t), !0 === n)) {
                o.set(e, i)
                let t = () => {
                  o.peek(e) === i && o.delete(e)
                }
                i.finished.then(t, t)
              }
              return () => {
                a.target === t &&
                  ((a.target = null),
                  queueMicrotask(() => {
                    null == a.target && i.cancel()
                  }))
              }
            }
        },
      },
    )
  },
  f38C(e, t, n) {
    n.d(t, { p: () => d })
    var i = n("ABep"),
      a = n("QosV"),
      r = n("hwkA"),
      o = n("on57"),
      l = n("bVeK"),
      s = n("UxN3")
    function d(e) {
      let t,
        n,
        d,
        c,
        u,
        m,
        v,
        g,
        p,
        f,
        y,
        h,
        I = (0, a.c)(27)
      I[0] !== e
        ? (({ className: t, label: d, onClick: c, iconClassName: n, iconSize: m, size: v, uniform: g, ...u } = e),
          (I[0] = e),
          (I[1] = t),
          (I[2] = n),
          (I[3] = d),
          (I[4] = c),
          (I[5] = u),
          (I[6] = m),
          (I[7] = v),
          (I[8] = g))
        : ((t = I[1]), (n = I[2]), (d = I[3]), (c = I[4]), (u = I[5]), (m = I[6]), (v = I[7]), (g = I[8]))
      let b = void 0 === m ? "sm" : m,
        w = void 0 === v ? "md" : v,
        S = void 0 === g || g,
        x = "lg" === b ? l.e4G : l.l0Y,
        k = "toolbar" === w && "Toolbar-TcAqyt"
      I[9] !== t || I[10] !== k ? ((p = (0, o.A)(k, t)), (I[9] = t), (I[10] = k), (I[11] = p)) : (p = I[11])
      let C = "toolbar" === w ? "xl" : w
      return (
        I[12] !== c
          ? ((f = (e) => {
              ;(e.stopPropagation(), c?.(e))
            }),
            (I[12] = c),
            (I[13] = f))
          : (f = I[13]),
        I[14] !== x || I[15] !== n || I[16] !== w
          ? ((y =
              "toolbar" === w
                ? (0, i.jsx)(s.b5, { className: n, "data-no-autosize": !0, icon: { 16: l.l0Y, 20: l.e4G } })
                : (0, i.jsx)(x, { className: n })),
            (I[14] = x),
            (I[15] = n),
            (I[16] = w),
            (I[17] = y))
          : (y = I[17]),
        I[18] !== b ||
        I[19] !== d ||
        I[20] !== u ||
        I[21] !== p ||
        I[22] !== C ||
        I[23] !== f ||
        I[24] !== y ||
        I[25] !== S
          ? ((h = (0, i.jsx)(r.$, {
              className: p,
              color: "secondary",
              variant: "ghost",
              pill: !1,
              size: C,
              iconSize: b,
              uniform: S,
              "aria-label": d,
              ...u,
              onClick: f,
              children: y,
            })),
            (I[18] = b),
            (I[19] = d),
            (I[20] = u),
            (I[21] = p),
            (I[22] = C),
            (I[23] = f),
            (I[24] = y),
            (I[25] = S),
            (I[26] = h))
          : (h = I[26]),
        h
      )
    }
  },
  ZSmB(e, t, n) {
    var i = n("qmMi"),
      a = n("q3HK"),
      r = n("vF5L"),
      o = n("OWtl")
    let l = /^\s*\/feedback(?:\s+([\s\S]*))?\s*$/,
      s = (0, i.un)(o.u, ({ get: e }) => (e(r.tu).feedback?.length ?? 0) > 0)
    n.d(
      t,
      {},
      {
        as: function (e) {
          return l.test(e)
        },
        dd: function (e) {
          let t = l.exec(e)
          return (
            null != t &&
            (0, a.d1)("feedback", "composer_slash_command", {
              fromFeedbackSlashCommand: !0,
              feedbackDetails: t[1]?.trim() ?? "",
            })
          )
        },
        nv: s,
      },
    )
  },
  jqMG(e, t, n) {
    n.d(
      t,
      {},
      {
        J7: function (e, t, n, ...i) {
          e ? n(t) : t(...i)
        },
        cm: function (e) {
          return !!e?.isCurrent() && (e.onAccepted(), !0)
        },
        rt: function (e, ...t) {
          return e?.isCurrent() ? e.prepare(...t).then((t) => (e.isCurrent() ? t : null)) : null
        },
      },
    )
  },
  Krtu(e, t, n) {
    var i = n("Ow2S"),
      a = n("Fl0J"),
      r = n("tZ72")
    n.d(
      t,
      {},
      {
        i: function (e, { conversationId: t, conversationOrigin: n, isTemporaryChat: o, systemHints: l, uploads: s }) {
          let d = (0, a.WZ)({ scope: e, conversationOrigin: n, isTemporaryChat: o, systemHints: l, uploads: s }),
            c = d ? s.filter(a.xk).filter((e) => !0 === e.pendingRestoredMountedLibraryExperimentExposure) : [],
            u = new Set()
          for (let t of c)
            (0, a.AM)(e, {
              fileId: t.mountedLibraryFileId,
              mimeType: t.mountedLibraryMimeType ?? t.mimeType,
              name: t.name,
              size: t.size,
            }) && u.add(t.uploadId)
          let m = (e) =>
            u.has(e.uploadId) && "ready" === e.status
              ? { ...e, pendingRestoredMountedLibraryExperimentExposure: void 0 }
              : e
          u.size > 0 && e.set(i.sk, t, (e) => e.map(m))
          let v = u.size > 0 ? s.map(m) : s,
            g = v.filter(a.xk)
          return 0 === g.length || d
            ? v
            : Promise.all(
                g.map(async (e) => [
                  e.uploadId,
                  await (0, r.g)({
                    ...e,
                    id: e.mountedLibraryFileId,
                    mimeType: e.mountedLibraryMimeType ?? e.mimeType ?? "",
                  }),
                ]),
              ).then((n) => {
                let r = new Map(n),
                  o = (e) => {
                    let t = r.get(e.uploadId)
                    return null != t && (0, a.xk)(e) ? { ...e, ...t } : e
                  }
                return (e.set(i.sk, t, (e) => e.map(o)), v.map(o))
              })
        },
      },
    )
  },
  tZ72(e, t, n) {
    var i = n("DBCl"),
      a = n("UxLW"),
      r = n("vvmK")
    n.d(
      t,
      {},
      {
        g: async function (e, t, { expectedIdentity: n, indexForRetrieval: o = !0 } = {}) {
          t?.throwIfAborted()
          let l =
              "fileId" in e
                ? {
                    height: e.height,
                    id: e.fileId,
                    libraryArtifactType: e.libraryArtifactType,
                    libraryFileId: e.libraryFileId,
                    libraryProvider: "native",
                    mimeType: e.mimeType,
                    name: e.name,
                    size: e.size,
                    source: "library",
                    sourceUrl: e.sourceUrl,
                    width: e.width,
                  }
                : e,
            s = ("fileId" in e ? [e.libraryFileId, e.fileId] : [e.id])
              .map((e) => ({ id: e, provider: (0, a.AG)(e) }))
              .find(({ provider: e }) => null != e)
          if (s?.provider != null) {
            let e = await (0, r.aI)(
              { file_id: s.id, file_name: l.name, mime_type: l.mimeType },
              { expectedIdentity: n, indexForRetrieval: o, signal: t },
            )
            l = {
              ...l,
              id: e.file_id,
              libraryFileId: void 0,
              libraryProvider: s.provider,
              mimeType: e.mime_type,
              mountedLibraryFileId: s.id,
              mountedLibraryMimeType: l.mimeType,
              name: e.file_name,
              size: e.file_size_bytes,
            }
          }
          return (
            t?.throwIfAborted(),
            (0, i.cb0)({ name: l.name, type: l.mimeType }) ? { ...l, imageReference: !0 } : l
          )
        },
      },
    )
  },
  Js4A(e, t, n) {
    var i = n("qmMi"),
      a = n("u4MG"),
      r = n("GaA7"),
      o = n("OWtl")
    let l = (0, i.bD)(o.u, (e) => 0)
    n.d(
      t,
      {},
      {
        Z: l,
        o: function (e, t, n) {
          let i = e?.chatGptBackingCreation
          return (
            "allowed" === n &&
            r.appServices?.projectChatGptProvisioning != null &&
            null != t &&
            null != e &&
            !(0, a.w7)(e.id) &&
            null == e.chatGptBacking &&
            null == e.retiredChatGptBacking &&
            !e.chatGptBackingRecoveryPending &&
            (null == i || (i.accountId === t.accountId && i.userId === t.userId))
          )
        },
      },
    )
  },
  lrLr(e, t, n) {
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t = e.documentElement.dataset.reducedMotion
          return null != t
            ? "true" === t
            : (e.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches ?? !1)
        },
      },
    )
  },
  GEsy(e, t, n) {
    var i = n("QosV"),
      a = n("zd8w")
    n.d(
      t,
      {},
      {
        o: function (e, t) {
          let n,
            r,
            o = (0, i.c)(4),
            [l, s] = (0, a.useState)(e)
          return (
            o[0] !== t || o[1] !== e
              ? ((n = () => {
                  let n = window.setTimeout(() => s(e), t)
                  return () => window.clearTimeout(n)
                }),
                (r = [e, t]),
                (o[0] = t),
                (o[1] = e),
                (o[2] = n),
                (o[3] = r))
              : ((n = o[2]), (r = o[3])),
            (0, a.useEffect)(n, r),
            l
          )
        },
      },
    )
  },
  izli(e, t, n) {
    var i = n("qmMi"),
      a = n("e1xH"),
      r = n("OWtl"),
      o = n("OMIV"),
      l = n("O666")
    let s = (0, i.i1)(
      r.u,
      (e, { get: t }) =>
        t(a.pagesEnabled$) &&
        t(a._s) &&
        (!e || t(l.H$, { layer: "1915661407", parameter: "enabled" })) &&
        (t(o.JW, "4117608041") || t(l.H$, { layer: "3737772469", parameter: "page_upgrade_enabled" })),
    )
    n.d(t, {}, { i: s })
  },
  oYmK(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      r = n("oyxz"),
      o = n("Sm6l")
    function l(e) {
      return (0, i.jsx)("span", { className: "select-none", "aria-hidden": !0, children: e })
    }
    function s(e) {
      return (0, i.jsx)("span", { className: "min-w-0 break-words", children: e })
    }
    n.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            n,
            d = (0, a.c)(7),
            { result: c, title: u, onView: m } = e
          d[0] !== m
            ? ((t = (e) =>
                (0, i.jsx)("span", {
                  className: "shrink-0 font-semibold text-secondary",
                  children: (0, i.jsx)(o.$, { color: "ghostMuted", size: "inline", onClick: m, children: e }),
                })),
              (d[0] = m),
              (d[1] = t))
            : (t = d[1])
          let v = t
          return (
            d[2] !== m || d[3] !== c || d[4] !== u || d[5] !== v
              ? ((n = (0, i.jsx)("div", {
                  className: "my-3 flex w-fit max-w-full items-center gap-1.5 text-sm text-tertiary",
                  children:
                    null == c
                      ? (0, i.jsx)(r.A, {
                          id: "chatgptConversations.libraryWritingBlock.createdWithHistorySummaryRow",
                          defaultMessage:
                            "<label>Created {hasTitle, select, yes {{title}} other {Document}}</label>{hasView, select, yes { <separator>\u2022</separator> <view>View</view>} other {}}",
                          values: {
                            hasTitle: null == u ? "no" : "yes",
                            title: u ?? "",
                            hasView: null == m ? "no" : "yes",
                            label: s,
                            separator: l,
                            view: v,
                          },
                        })
                      : (0, i.jsx)(r.A, {
                          id: "chatgptConversations.writingBlock.patch.summaryWithOptionalHistoryRow",
                          defaultMessage:
                            "<label>{hasSummary, select, yes {{summary}} other {Edited}}</label>{hasView, select, yes { <separator>\u2022</separator> <view>View</view>} other {}}",
                          values: {
                            hasSummary: null == c.summary ? "no" : "yes",
                            summary: c.summary ?? "",
                            hasView: null == m ? "no" : "yes",
                            label: s,
                            separator: l,
                            view: v,
                          },
                        }),
                })),
                (d[2] = m),
                (d[3] = c),
                (d[4] = u),
                (d[5] = v),
                (d[6] = n))
              : (n = d[6]),
            n
          )
        },
      },
    )
  },
  wIoR(e, t, n) {
    n.d(t, { W: () => eg, QuickChatWritingBlockDirectiveRenderer: () => ev })
    var i = n("ABep"),
      a = n("QosV"),
      r = n("ksPB"),
      o = n("BhZP"),
      l = n("yqKZ"),
      s = n("Jaao"),
      d = n("kmbx"),
      c = n("CL6A"),
      u = n("qcpr"),
      m = n("qmMi"),
      v = n("AuIy"),
      g = n("zd8w"),
      p = n("Wf1j"),
      f = n("oyxz"),
      y = n("E8Sp"),
      h = n("SPnB"),
      I = n("Ow2S"),
      b = n("eF8w"),
      w = n("MrGp"),
      S = n("TUMj"),
      x = n("SGsN"),
      k = n("q5qu"),
      C = n("geXJ"),
      _ = n("pqpL"),
      B = n("uqg3"),
      M = n("tv8P"),
      T = n("yGJW"),
      A = n("OWtl"),
      j = n("tSEg"),
      O = n("bIvi"),
      E = n("eShZ"),
      L = n("CeUM"),
      R = n("Cpq8"),
      q = n("vNK1"),
      P = n("hnOq"),
      F = n("GO1D"),
      z = n("IQg5"),
      $ = n("In8Z"),
      G = n("zTAs"),
      V = n("Sm6l"),
      K = n("O8Pw"),
      W = n("Wc42"),
      N = n("Kwur")
    class D extends Error {}
    let U = (0, m.vU)(A.u, ({ conversationId: e, blockId: t, messageId: n }, { get: i, scope: a }) => {
      let r = i(h.chatGptAuthenticatedAccountId$),
        o = i(h.chatGptAuthenticatedUserId$),
        l = i(h.cj),
        s = i(w.jS, e),
        d = i(w.Jv, e),
        u = (0, c.hv)(d?.[n]?.message?.metadata)[t],
        m = null == d ? void 0 : (0, v.Ph)({ mapping: d, current_node: n }).find((e) => "user" === e.author.role),
        g = (0, v.J5)(m?.metadata?.system_hints)
      return {
        enabled:
          l &&
          null != r &&
          null != s &&
          u?.variant === "document" &&
          u.metadata?.library_auto_save !== !1 &&
          null == u.library_file_id &&
          (g.includes("note") || g.includes("plugin:note")),
        queryKey: ["writing-block-note-promotion", r, o, s, n, t],
        queryFn: async ({ signal: i }) => {
          if (null == s || null == r) return null
          let l = await N.Request.safeGet("/conversations/{conversation_id}", {
            parameters: { path: { conversation_id: s }, query: { include_message_id: n, num_turns: 1 } },
            additionalHeaders: { "ChatGPT-Account-ID": r },
            signal: i,
          })
          i.throwIfAborted()
          let d = (0, W.g)((0, c.hv)(l.messages.find((e) => e.id === n)?.metadata)[t]?.library_file_id)
          if (null == d) throw new D("The note's Library file is not available yet")
          ;(await (0, $.lQ)(a, e, "message"), i.throwIfAborted())
          let u = (0, c.hv)(a.get(w.Jv, e)?.[n]?.message?.metadata)[t]
          return (
            null != u &&
              u.metadata?.library_auto_save !== !1 &&
              null == u.library_file_id &&
              a.get(h.chatGptAuthenticatedAccountId$) === r &&
              a.get(h.chatGptAuthenticatedUserId$) === o &&
              ((0, w.AC)({
                scope: a,
                conversationId: e,
                messageId: n,
                blockId: t,
                fallbackWritingBlock: u,
                update: { library_file_id: d },
              }),
              a.queryClient.invalidateQueries({ queryKey: ["library-api", r, o] }),
              a.queryClient.invalidateQueries({ queryKey: ["appgen-library-cloud-files", r] }),
              a.queryClient.invalidateQueries({ queryKey: ["chatgpt-composer-library-files", r] }),
              (async function (e, t, n, i) {
                let a,
                  r = () =>
                    null == i ||
                    (e.get(h.chatGptAuthenticatedAccountId$) === i.accountId &&
                      e.get(h.chatGptAuthenticatedUserId$) === i.userId)
                for (let o = 0; o < 60; o += 1) {
                  if (!r()) return
                  let o = await N.Request.safeGet("/files/library/nodes", {
                    parameters: { query: { q: n, cursor: a } },
                    additionalHeaders: null == i ? void 0 : { "ChatGPT-Account-ID": i.accountId },
                  })
                  if (!r()) return
                  let l = o.items.find((e) => e.id === t)
                  if (l?.state === "ready")
                    return void (await (async function (e, t) {
                      let n =
                        null == t
                          ? [["library-api"], ["appgen-library-cloud-files"]]
                          : [
                              ["library-api", t.accountId, t.userId],
                              ["appgen-library-cloud-files", t.accountId],
                              ["chatgpt-composer-library-files", t.accountId],
                            ]
                      await Promise.all(n.map((t) => e.queryClient.invalidateQueries({ queryKey: t })))
                    })(e, i))
                  if (l?.state === "failed") return
                  null == (a = null == l ? (o.cursor ?? void 0) : void 0) &&
                    (await new Promise((e) => setTimeout(e, 2e3)))
                }
              })(a, d, void 0, { accountId: r, userId: o }).catch(() => void 0)),
            d
          )
        },
        retry: (e, t) => t instanceof D && e < 5,
        retryDelay: (e) => Math.min(1e3 * 2 ** e, 5e3),
        refetchOnMount: !0,
        refetchOnWindowFocus: !1,
        staleTime: 0,
      }
    })
    function Z(e) {
      let t,
        n,
        r = (0, a.c)(7),
        { conversationId: o, blockId: l, messageId: s } = e,
        d = (0, K.Tq)()
      r[0] !== l || r[1] !== o || r[2] !== s
        ? ((t = { conversationId: o, blockId: l, messageId: s }), (r[0] = l), (r[1] = o), (r[2] = s), (r[3] = t))
        : (t = r[3])
      let { isError: c, isFetching: u, refetch: v } = (0, m._U)(U, t)
      return !c || u
        ? null
        : (r[4] !== d || r[5] !== v
            ? ((n = (0, i.jsx)(k.D, {
                className: "text-secondary",
                padding: "offset",
                children: (0, i.jsx)("span", {
                  className: "select-none",
                  role: "alert",
                  children: d
                    ? (0, i.jsx)(f.A, {
                        id: "codex.writingBlock.library.notePromotionError.space",
                        defaultMessage: "Couldn\u2019t sync this note with Space \xb7 <retry>Try again</retry>",
                        values: {
                          retry: (e) =>
                            (0, i.jsx)(
                              V.$,
                              {
                                className: "inline-flex",
                                color: "ghostTertiary",
                                size: "inline",
                                onClick: () => void v(),
                                children: e,
                              },
                              "retry",
                            ),
                        },
                      })
                    : (0, i.jsx)(f.A, {
                        id: "codex.writingBlock.library.notePromotionError",
                        defaultMessage: "Couldn\u2019t sync this note with Library \xb7 <retry>Try again</retry>",
                        values: {
                          retry: (e) =>
                            (0, i.jsx)(
                              V.$,
                              {
                                className: "inline-flex",
                                color: "ghostTertiary",
                                size: "inline",
                                onClick: () => void v(),
                                children: e,
                              },
                              "retry",
                            ),
                        },
                      }),
                }),
              })),
              (r[4] = d),
              (r[5] = v),
              (r[6] = n))
            : (n = r[6]),
          n)
    }
    var J = n("izli"),
      Q = n("O9ff"),
      H = n("HYIu"),
      Y = n("HXpT"),
      X = n("mBJV"),
      ee = n("sSh9"),
      et = n("on57"),
      en = n("bVeK"),
      ei = n("JIxO")
    function ea(e) {
      let t,
        n,
        r,
        o = (0, a.c)(23),
        { context: l, messageId: s, serverConversationId: d, variant: c, writingBlockId: u, writingBlockIndex: v } = e,
        p = (0, m.gh)(A.u),
        [y, h] = (0, g.useState)(!1),
        [I, b] = (0, g.useState)(!1),
        w = (0, g.useId)(),
        S = (0, g.useRef)(null),
        x = (0, g.useRef)(null)
      if (
        (o[0] !== y
          ? ((t = () => {
              let e = S.current,
                t = x.current
              if (null == e || null == t || y) return
              let n = () => {
                e.scrollTop = 0
                let n = t.querySelector(`.${ee.p.root}`),
                  i = null == n ? 0 : Number.parseFloat(getComputedStyle(n).paddingBottom)
                b(e.scrollHeight - i > e.clientHeight + 1)
              }
              n()
              let i = new ResizeObserver(n)
              return (i.observe(e), i.observe(t), () => i.disconnect())
            }),
            (o[0] = y),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== l.state.displayedContent || o[3] !== y
          ? ((n = [l.state.displayedContent, y]), (o[2] = l.state.displayedContent), (o[3] = y), (o[4] = n))
          : (n = o[4]),
        (0, g.useLayoutEffect)(t, n),
        o[5] !== l ||
          o[6] !== I ||
          o[7] !== y ||
          o[8] !== s ||
          o[9] !== w ||
          o[10] !== p ||
          o[11] !== d ||
          o[12] !== c ||
          o[13] !== u ||
          o[14] !== v)
      ) {
        let e
        ;(o[16] !== s || o[17] !== p || o[18] !== d || o[19] !== c || o[20] !== u || o[21] !== v
          ? ((e = (e) => {
              ;((0, T.yy)(p, X.DBq, {
                conversationId: d,
                messageId: s,
                variant: c,
                writingBlockId: u,
                writingBlockIndex: String(v),
              }),
                N.Request.safePost("/conversation/implicit_message_feedback", {
                  requestBody: {
                    conversation_id: d,
                    message_id: s,
                    source: "mouse",
                    location: "writing-block",
                    feedback: { feedback_type: "copy", selected_text_length: e.length },
                  },
                }).catch(el))
            }),
            (o[16] = s),
            (o[17] = p),
            (o[18] = d),
            (o[19] = c),
            (o[20] = u),
            (o[21] = v),
            (o[22] = e))
          : (e = o[22]),
          (r = l.renderView({
            hideFormatToolbar: !0,
            hideSlashMenu: !0,
            historyInteractionDisabled: !0,
            isEditable: !1,
            metadataInteractionDisabled: !0,
            onCopy: e,
            renderFrame: (e) =>
              (0, i.jsxs)(ei.$7, {
                ...e,
                actions: y ? e.actions : null,
                className: (0, et.A)(!y && "collapsedFrame-PMM45U", !y && I && "cursor-interaction"),
                headerClassName: (0, et.A)(e.headerClassName, "min-h-13 !py-2"),
                inlineContent: void 0,
                onClick:
                  !y && I
                    ? (e) => {
                        ;(e.target instanceof Element && null != e.target.closest("button, a")) || h(eo)
                      }
                    : void 0,
                title: (0, i.jsx)("span", { className: "font-normal text-tertiary", children: e.title }),
                children: [
                  (0, i.jsx)("div", {
                    id: w,
                    ref: S,
                    className: (0, et.A)(
                      !y && ["collapsed-C_zRIk", "max-h-24 overflow-hidden"],
                      !y && I && "mask-b-from-50% mask-b-to-100%",
                    ),
                    inert: (!y && I) || void 0,
                    "aria-hidden": (!y && I) || void 0,
                    children: (0, i.jsx)("div", { ref: x, children: e.children }),
                  }),
                  y || I
                    ? (0, i.jsxs)("button", {
                        type: "button",
                        "aria-controls": w,
                        "aria-expanded": y,
                        className:
                          "flex min-h-9 w-full cursor-interaction items-center justify-center gap-1 text-sm text-secondary opacity-0 select-none group-hover/writing-block-surface:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        onClick: (e) => {
                          ;(e.stopPropagation(), h(er))
                        },
                        children: [
                          y
                            ? (0, i.jsx)(f.A, {
                                id: "codex.writingBlock.showLessEarlierVersion",
                                defaultMessage: "Show less",
                              })
                            : (0, i.jsx)(f.A, {
                                id: "codex.writingBlock.showMoreEarlierVersion",
                                defaultMessage: "Show more",
                              }),
                          (0, i.jsx)(en.Aq_, { className: y ? "rotate-180" : void 0 }),
                        ],
                      })
                    : null,
                ],
              }),
          })),
          (o[5] = l),
          (o[6] = I),
          (o[7] = y),
          (o[8] = s),
          (o[9] = w),
          (o[10] = p),
          (o[11] = d),
          (o[12] = c),
          (o[13] = u),
          (o[14] = v),
          (o[15] = r))
      } else r = o[15]
      return r
    }
    function er(e) {
      return !e
    }
    function eo(e) {
      return !e
    }
    function el() {}
    var es = n("AhlA"),
      ed = n("YrRS"),
      ec = n("v9AI"),
      eu = n("WS0s")
    let em = (0, m.bD)(A.u, (e) => !1)
    function ev(e) {
      let t,
        n,
        r,
        o = (0, a.c)(12),
        l = (0, S.Rn)(),
        s = l?.contentReferences,
        d = l?.isStreaming ?? !1
      return (
        o[0] !== l?.isReadOnly || o[1] !== l?.isStreaming
          ? ((t = (e) => (t) =>
              (0, i.jsx)(eu.p, {
                context: t,
                emailMetadata: ey(e),
                editorKey: void 0,
                isReadOnly: l?.isReadOnly,
                isStreaming: l?.isStreaming ?? !1,
                title: e.title,
                variant: e.variant,
              })),
            (o[0] = l?.isReadOnly),
            (o[1] = l?.isStreaming),
            (o[2] = t))
          : (t = o[2]),
        o[3] !== e.isLastBlock || o[4] !== l
          ? ((n = (t) => {
              let n = t.id,
                a = null == n ? void 0 : l?.writingBlockIndexes?.[n]
              return (null != n &&
                l?.writingBlockMessageIds?.[n] == null &&
                (a = l?.writingBlockSources?.[n]?.index ?? a),
              null == l || null == n || null == a)
                ? null
                : (0, i.jsx)(eg, {
                    directive: t,
                    id: n,
                    index: a,
                    isLastNodeInMessage: e.isLastBlock ?? !0,
                    turnContext: l,
                  })
            }),
            (o[3] = e.isLastBlock),
            (o[4] = l),
            (o[5] = n))
          : (n = o[5]),
        o[6] !== e || o[7] !== s || o[8] !== d || o[9] !== t || o[10] !== n
          ? ((r = (0, i.jsx)(z.WritingBlockDirectiveRenderer, {
              ...e,
              contentReferences: s,
              isStreaming: d,
              renderExtension: t,
              renderPersisted: n,
              testId: "chatgpt-writing-block",
            })),
            (o[6] = e),
            (o[7] = s),
            (o[8] = d),
            (o[9] = t),
            (o[10] = n),
            (o[11] = r))
          : (r = o[11]),
        r
      )
    }
    function eg(e) {
      let t,
        S,
        z,
        V,
        K,
        W,
        N,
        D,
        U,
        X,
        ee,
        et,
        en,
        ei,
        er,
        eo,
        el,
        eu,
        ev,
        eg,
        eh,
        eI,
        eb,
        ew = (0, a.c)(115),
        {
          bufferStreamingContent: eS,
          directive: ex,
          id: ek,
          index: eC,
          isLastNodeInMessage: e_,
          readOnly: eB,
          sourceMessageId: eM,
          turnContext: eT,
        } = e,
        eA = (0, m.gh)(A.u),
        ej = (0, m.gh)(j.GD),
        eO = eB ?? eT.isReadOnly ?? !1,
        eE = "tpp" !== eT.conversationOrigin && "flora" !== eT.conversationOrigin,
        eL = (0, p.A)(),
        [eR] = (0, g.useState)(u.Gi),
        eq = (0, m.Ul)(es.cv),
        eP = (0, m.Ul)(es.W$),
        [eF, ez] = (0, g.useState)(!1),
        [e$, eG] = (0, g.useState)(null)
      ;(ew[0] !== e$
        ? ((t = () => {
            if (null == e$) return
            let e = setTimeout(() => eG(null), 2500)
            return () => clearTimeout(e)
          }),
          (S = [e$]),
          (ew[0] = e$),
          (ew[1] = t),
          (ew[2] = S))
        : ((t = ew[1]), (S = ew[2])),
        (0, g.useEffect)(t, S))
      let eV = `${eT.conversationId}
${eT.turnId ?? ""}
${ek}`,
        eK = (0, m._U)(em, eV),
        eW = (0, m._U)(w.jS, eT.conversationId),
        eN = (0, m._U)(w.Jv, eT.conversationId),
        eD = (0, m._U)(w.Od, eT.conversationId),
        eU = eT.writingBlockMessageIds,
        eZ = null != eU && Object.hasOwn(eU, ek) ? eU[ek] : void 0,
        eJ = eM ?? eZ ?? eT.writingBlockSources?.[ek]?.messageId ?? eT.messageId,
        eQ = eJ ?? "",
        eH = ex.id ?? ""
      ew[3] !== eQ || ew[4] !== eH || ew[5] !== eT.conversationId
        ? ((z = { conversationId: eT.conversationId, messageId: eQ, writingBlockId: eH }),
          (ew[3] = eQ),
          (ew[4] = eH),
          (ew[5] = eT.conversationId),
          (ew[6] = z))
        : (z = ew[6])
      let eY = (0, m._U)(Y.n, z),
        eX = eJ ?? null
      ew[7] !== ek || ew[8] !== eC || ew[9] !== eX || ew[10] !== eT.conversationId
        ? ((V = { conversationId: eT.conversationId, messageId: eX, instanceId: ek, refIndex: eC }),
          (ew[7] = ek),
          (ew[8] = eC),
          (ew[9] = eX),
          (ew[10] = eT.conversationId),
          (ew[11] = V))
        : (V = ew[11])
      let e0 = (0, m._U)(Q.N, V)
      ew[12] !== eP || ew[13] !== e0 || ew[14] !== eY?.isLiveRevision || ew[15] !== eA || ew[16] !== eW
        ? ((K = () => {
            eP && null != eW && null == e0 && eY?.isLiveRevision && (0, es.xj)(eA)
          }),
          (ew[12] = eP),
          (ew[13] = e0),
          (ew[14] = eY?.isLiveRevision),
          (ew[15] = eA),
          (ew[16] = eW),
          (ew[17] = K))
        : (K = ew[17])
      let e1 = eY?.isLiveRevision
      ;(ew[18] !== eP || ew[19] !== e0 || ew[20] !== eA || ew[21] !== eW || ew[22] !== e1
        ? ((W = [eP, e0, e1, eA, eW]),
          (ew[18] = eP),
          (ew[19] = e0),
          (ew[20] = eA),
          (ew[21] = eW),
          (ew[22] = e1),
          (ew[23] = W))
        : (W = ew[23]),
        (0, g.useEffect)(K, W))
      let e2 = eT.copyWritingBlockMessageIds,
        e3 = null != e2 && Object.hasOwn(e2, ek) ? (e2[ek] ?? null) : null,
        e5 = (0, c.hv)(null == eJ ? void 0 : eN?.[eJ]?.message?.metadata),
        e4 = (Object.hasOwn(e5, ek) ? e5[ek] : void 0) ?? Object.values(e5).find((e) => e.id === ek)
      if (null != e4 && null != eZ && !eK && e4.content.trimEnd() !== ex.bodyContent.trimEnd()) {
        e4 = { ...e4, content: ex.bodyContent }
        let e = (0, F.IA)({ content: e4.content, metadata: e4.metadata }),
          t = Math.max(0, e?.findIndex((e) => e.id === e4?.metadata?.[o.e4]) ?? -1),
          n = e?.[t]
        null != n &&
          (e4 = {
            ...e4,
            metadata: { ...e4.metadata, ...(0, o.zl)(e4.metadata, { id: n.id, index: t }, ex.bodyContent) },
          })
      }
      e4 = (0, G.nm)(e4, eT)
      let e6 = e4?.metadata ?? (0, G.Yn)(ex.metadata, eT),
        e9 = e4?.content ?? (0, G.Io)(ex.content, eT),
        e7 =
          null == e4
            ? (ex.toneSections?.map((e) => ({ ...e, content: (0, G.Io)(e.content, eT) })) ?? null)
            : (0, F.IA)({ content: e9, metadata: e6 }),
        e8 = ey(ex),
        te = {
          bcc: e8.bcc,
          cc: e8.cc,
          recipient: e8.recipient,
          ...ex.metadata,
          ...e4?.metadata,
          ...(null != eJ && eN?.[eJ]?.message?.metadata?.write_like_me_offer_policy === "automatic"
            ? { write_like_me_offer_policy: "automatic" }
            : {}),
        },
        tt = null != eJ && eN?.[eJ]?.message != null,
        tn = (0, O.K)((e) => {
          if (eO || null == eW || null == eJ) return
          let t = {
              content: e9,
              id: ek,
              index: eC,
              metadata: {
                ...e6,
                ...("email" === ex.variant
                  ? {
                      bcc: ex.emailMetadata.bcc ?? null,
                      cc: ex.emailMetadata.cc ?? null,
                      recipient: ex.emailMetadata.recipient ?? null,
                      subject: ex.emailMetadata.subject ?? null,
                    }
                  : {}),
                ...(0, l._1)(e7),
              },
              title: ex.title,
              variant: ex.variant ?? "unknown",
            },
            n = (0, c.hv)(eA.get(w.Jv, eT.conversationId)?.[eJ]?.message?.metadata),
            i = (0, G.nm)(Object.hasOwn(n, ek) ? n[ek] : void 0, eT),
            a = null == eZ || eA.get(em, eV) ? (i ?? t) : (e4 ?? t),
            r = "function" == typeof e ? e(a) : e,
            o = (0, w.AC)({
              scope: eA,
              blockId: ek,
              conversationId: eT.conversationId,
              fallbackWritingBlock: t,
              messageId: eJ,
              update: {
                ...r,
                content: r.content ?? a.content,
                locallyEdited: !!a.locallyEdited || null != r.content || r.locallyEdited,
                metadata: { ...a.metadata, ...r.metadata },
              },
            })
          null != o &&
            (null != eZ && eA.set(em, eV, !0),
            (0, $.H8)(eA, {
              blockId: ek,
              conversationId: eT.conversationId,
              messageId: eJ,
              serverConversationId: eW,
              writingBlock: o,
            }))
        }),
        ti = !eO && null != eW && null != eJ && tt
      ;(ew[24] !== tn
        ? ((N = (e) => {
            tn({ metadata: { [o.e4]: e } })
          }),
          (ew[24] = tn),
          (ew[25] = N))
        : (N = ew[25]),
        ew[26] !== e7 || ew[27] !== e6 || ew[28] !== ti || ew[29] !== N || ew[30] !== eT.isStreaming
          ? ((D = {
              isPersistenceReady: ti,
              isStreaming: eT.isStreaming,
              metadata: e6,
              onPersistSelection: N,
              toneSections: e7,
            }),
            (ew[26] = e7),
            (ew[27] = e6),
            (ew[28] = ti),
            (ew[29] = N),
            (ew[30] = eT.isStreaming),
            (ew[31] = D))
          : (D = ew[31]))
      let ta = (0, q.J)(D),
        tr = (0, P.F7)(ta.displayedToneSections, ta.activeToneSectionId)
      ew[32] !== ta.activeToneSectionId || ew[33] !== ta.displayedToneSections
        ? ((U = ta.displayedToneSections?.find((e) => e.id === ta.activeToneSectionId)?.tone),
          (ew[32] = ta.activeToneSectionId),
          (ew[33] = ta.displayedToneSections),
          (ew[34] = U))
        : (U = ew[34])
      let to = U,
        tl = `${eT.conversationId}
${eJ}
${ek}
${ta.activeToneSectionId ?? ""}`,
        ts = { metadata: (0, P.Te)({ ...te, subject: e6?.subject ?? e8.subject }, e7), title: e4?.title ?? ex.title },
        td = (0, s.Wu)(ts, tr),
        tc = `${eV}
${ta.activeToneSectionId ?? ""}`,
        [tu, tm] = (0, g.useState)({ key: tc, value: td }),
        tv = null == ta.activeToneSectionId || e7?.some((e) => e.id === ta.activeToneSectionId) === !0
      tv && (tu.key !== tc || tu.value !== td) && tm({ key: tc, value: td })
      let tg = {
        bcc: (0, s.CB)(te, "bcc"),
        cc: (0, s.CB)(te, "cc"),
        recipient: (0, s.CB)(te, "recipient"),
        subject: eT.isStreaming && !tv && tu.key === tc ? tu.value : td,
        writingBlockMetadata: te,
      }
      ew[35] !== tn
        ? ((X = (e, t) => {
            tn((n) => {
              let i = (0, P.is)({
                nextContent: e,
                toneSectionId: t,
                toneSections: (0, F.IA)({ content: n.content, metadata: n.metadata }),
              })
              if (null == i.activeToneSectionId || null == i.toneSections) return { content: i.content }
              let a = i.toneSections.findIndex((e) => e.id === i.activeToneSectionId),
                r = (0, o.zl)(n.metadata, { id: i.activeToneSectionId, index: a }, e)
              return {
                content: i.content,
                metadata: { ...(0, l._1)(i.toneSections), ...r, [o.e4]: i.activeToneSectionId },
              }
            })
          }),
          (ew[35] = tn),
          (ew[36] = X))
        : (X = ew[36])
      let tp = (0, O.K)(X)
      ew[37] !== tr || ew[38] !== tn
        ? ((ee = (e) => {
            tn((t) => ({
              metadata: (0, s.tx)(
                { ...t, metadata: (0, P.Te)(t.metadata, (0, F.IA)({ content: t.content, metadata: t.metadata })) },
                tr,
                e,
              ),
            }))
          }),
          (ew[37] = tr),
          (ew[38] = tn),
          (ew[39] = ee))
        : (ee = ew[39])
      let tf = (0, O.K)(ee)
      ew[40] !== tn
        ? ((et = (e, t) => {
            tn({ metadata: { [e]: t } })
          }),
          (ew[40] = tn),
          (ew[41] = et))
        : (et = ew[41])
      let ty = (0, O.K)(et)
      ew[42] !== tn || ew[43] !== eA || ew[44] !== eT.conversationId
        ? ((en = (e) => {
            ;(tn({ metadata: e }), (0, $.lQ)(eA, eT.conversationId)?.catch(ef))
          }),
          (ew[42] = tn),
          (ew[43] = eA),
          (ew[44] = eT.conversationId),
          (ew[45] = en))
        : (en = ew[45])
      let th = (0, O.K)(en)
      ew[46] !== eA || ew[47] !== eT.conversationId
        ? ((ei = () => {
            ;(0, $.lQ)(eA, eT.conversationId)?.catch(ep)
          }),
          (ew[46] = eA),
          (ew[47] = eT.conversationId),
          (ew[48] = ei))
        : (ei = ew[48])
      let tI = (0, O.K)(ei),
        tb = eO || null == eW || null == eJ ? void 0 : eV,
        tw = e4?.library_file_id,
        tS = null == e4 ? ek : (e4.id ?? String(e4.index))
      ew[49] !== eL || ew[50] !== eA || ew[51] !== eT.conversationId || ew[52] !== eT.conversationOrigin
        ? ((er = (e) =>
            (0, b.submitChatGptConversationComposer)(eA, {
              conversationId: eT.conversationId,
              conversationOrigin: eT.conversationOrigin,
              messageMetadata: {
                followups_v2_followup_clicked: !0,
                followups_v2_followup_source: "writing_block_suggested_followup",
                suggestion_type: "suggested_followup",
              },
              draft: { kind: "preserve" },
              prompt: e,
              selectedModel: eA.get(I.ch, eT.conversationId),
              submitErrorFallback: eL.formatMessage({
                id: "chatgptConversations.writingBlock.followup.error",
                defaultMessage: "Couldn't send follow-up",
              }),
            })),
          (ew[49] = eL),
          (ew[50] = eA),
          (ew[51] = eT.conversationId),
          (ew[52] = eT.conversationOrigin),
          (ew[53] = er))
        : (er = ew[53])
      let tx = er
      ew[54] !== eD || ew[55] !== eC || ew[56] !== e_ || ew[57] !== eJ || ew[58] !== eN
        ? ((eo = (0, d.K)({
            currentMessageId: eD,
            isLastNodeInMessage: e_,
            mapping: eN,
            messageId: eJ,
            writingBlockIndex: eC,
          })),
          (ew[54] = eD),
          (ew[55] = eC),
          (ew[56] = e_),
          (ew[57] = eJ),
          (ew[58] = eN),
          (ew[59] = eo))
        : (eo = ew[59])
      let tk = eo
      ew[60] !== e4 || ew[61] !== ex.title || ew[62] !== eZ
        ? ((el =
            null == eZ && (0, v.Lv)(e4?.presentation_display)?.mode === "collapsed"
              ? (0, i.jsx)(k.D, {
                  padding: "offset",
                  children:
                    null == ex.title
                      ? (0, i.jsx)(f.A, {
                          id: "chatgptConversations.libraryWritingBlock.created",
                          defaultMessage: "Created document",
                        })
                      : (0, i.jsx)(f.A, {
                          id: "chatgptConversations.libraryWritingBlock.createdFile",
                          defaultMessage: "Created {fileName}",
                          values: { fileName: ex.title },
                        }),
                })
              : void 0),
          (ew[60] = e4),
          (ew[61] = ex.title),
          (ew[62] = eZ),
          (ew[63] = el))
        : (el = ew[63])
      let tC = el,
        t_ = e4?.page_id,
        tB = "string" == typeof t_ && t_.length > 0
      ew[64] !== e9 ||
      ew[65] !== tb ||
      ew[66] !== tB ||
      ew[67] !== tw ||
      ew[68] !== eJ ||
      ew[69] !== eO ||
      ew[70] !== eW ||
      ew[71] !== eT.isTemporaryChat
        ? ((eu =
            !tw && !tB && !eO && !eT.isTemporaryChat && null != tb && null != eW && null != eJ && "" !== e9.trim()),
          (ew[64] = e9),
          (ew[65] = tb),
          (ew[66] = tB),
          (ew[67] = tw),
          (ew[68] = eJ),
          (ew[69] = eO),
          (ew[70] = eW),
          (ew[71] = eT.isTemporaryChat),
          (ew[72] = eu))
        : (eu = ew[72])
      let tM = eu,
        tT = (0, m._U)(!!tM && J.i, eE),
        tA = "string" == typeof tw ? tw : void 0
      ;(ew[73] !== tM ||
      ew[74] !== e4 ||
      ew[75] !== e6 ||
      ew[76] !== ex.title ||
      ew[77] !== ex.variant ||
      ew[78] !== ek ||
      ew[79] !== eC ||
      ew[80] !== eL ||
      ew[81] !== eF ||
      ew[82] !== eJ ||
      ew[83] !== ej ||
      ew[84] !== tT ||
      ew[85] !== eA ||
      ew[86] !== eW ||
      ew[87] !== eT.conversationId ||
      ew[88] !== eT.isStreaming
        ? ((ev =
            tM && tT && !eT.isStreaming
              ? (e, t) => {
                  let i = void 0 !== t && t
                  if (eF || "" === e.trim()) return Promise.resolve(!1)
                  ;(0, T.yy)(eA, r.Nw, { conversationId: eW, messageId: eJ, writingBlockId: ek })
                  let a = eA.get(M.spaceAccountId$),
                    o = eA.get(h.chatGptAuthenticatedUserId$),
                    l = eA.get(y.gM)
                  ez(!0)
                  let s = (e) => {
                    let t, n
                    return (
                      ez(!1),
                      e instanceof E.FetchError && "library_storage_limit_exceeded" === e.errorCode
                        ? ((n = "codex.writingBlock.inlineLibrary.storageFull"),
                          (t = eL.formatMessage({
                            id: "codex.writingBlock.inlineLibrary.storageFull.storage.space",
                            defaultMessage: "Your storage is full. Free up space and try again.",
                          })))
                        : ((n = "codex.writingBlock.page.saveFailed"),
                          (t = eL.formatMessage({
                            id: "codex.writingBlock.page.saveFailed",
                            defaultMessage: "Couldn\u2019t create Page. Try again",
                          }))),
                      eA.get(x.Id).danger(t, { errorAnalytics: { toastId: n } }),
                      !1
                    )
                  }
                  return n
                    .e(116304)
                    .then(n.bind(n, "WbaJ"))
                    .then((t) =>
                      t.promoteWritingBlockToPage(eA, {
                        blockId: ek,
                        conversationId: eT.conversationId,
                        messageId: eJ,
                        serverConversationId: eW,
                        writingBlock: {
                          ...e4,
                          content: e,
                          id: ek,
                          index: eC,
                          title: e4?.title ?? ex.title,
                          metadata: e6,
                          variant: ex.variant ?? "document",
                        },
                      }),
                    )
                    .then((e) => {
                      if (null == e) return s()
                      let t = eA.get(y.gM)
                      return (
                        eA.get(M.spaceAccountId$) === a &&
                          eA.get(h.chatGptAuthenticatedUserId$) === o &&
                          t.pathname === l.pathname &&
                          t.search === l.search &&
                          (0, B.openSpacePageSidePanelTab)(ej, e, { openSource: "page_creation" }),
                        ez(!1),
                        eG(i ? "keyboard" : "pointer"),
                        eA
                          .get(x.Id)
                          .success(
                            eL.formatMessage({
                              id: "codex.writingBlock.page.saved",
                              defaultMessage: "Saved as a Page",
                            }),
                          ),
                        !0
                      )
                    })
                    .catch(s)
                }
              : void 0),
          (ew[73] = tM),
          (ew[74] = e4),
          (ew[75] = e6),
          (ew[76] = ex.title),
          (ew[77] = ex.variant),
          (ew[78] = ek),
          (ew[79] = eC),
          (ew[80] = eL),
          (ew[81] = eF),
          (ew[82] = eJ),
          (ew[83] = ej),
          (ew[84] = tT),
          (ew[85] = eA),
          (ew[86] = eW),
          (ew[87] = eT.conversationId),
          (ew[88] = eT.isStreaming),
          (ew[89] = ev))
        : (ev = ew[89]),
        ew[90] !== eF || ew[91] !== e$ || ew[92] !== tT || ew[93] !== tA || ew[94] !== ev
          ? ((eg = { saveToPage: tT, libraryFileId: tA, isSaving: eF, saveConfirmation: e$, onSave: ev }),
            (ew[90] = eF),
            (ew[91] = e$),
            (ew[92] = tT),
            (ew[93] = tA),
            (ew[94] = ev),
            (ew[95] = eg))
          : (eg = ew[95]))
      let tj = eg
      ;(ew[96] !== eq || ew[97] !== e6 || ew[98] !== e0 || ew[99] !== eY || ew[100] !== tl || ew[101] !== to
        ? ((eh =
            eq && null == e0 && eY?.hasSessionRevision && !eY.isSuperseded && null != eY.previousMarkdown
              ? {
                  id: tl,
                  previousMarkdown:
                    (0, F.IA)({
                      content: eY.previousMarkdown,
                      metadata: eY.previousMetadata,
                      preserveEmptySections: !0,
                    })?.find((e) => e.tone === to)?.content ?? eY.previousMarkdown,
                  receivedMarkdown:
                    (0, F.IA)({ content: eY.receivedMarkdown, metadata: e6, preserveEmptySections: !0 })?.find(
                      (e) => e.tone === to,
                    )?.content ?? eY.receivedMarkdown,
                  isStreaming: eY.isStreaming,
                  isComplete: eY.isComplete,
                }
              : void 0),
          (ew[96] = eq),
          (ew[97] = e6),
          (ew[98] = e0),
          (ew[99] = eY),
          (ew[100] = tl),
          (ew[101] = to),
          (ew[102] = eh))
        : (eh = ew[102]),
        ew[103] !== eq ||
        ew[104] !== tb ||
        ew[105] !== tp ||
        ew[106] !== eY?.hasSessionRevision ||
        ew[107] !== tl ||
        ew[108] !== eA
          ? ((eI =
              null == tb
                ? void 0
                : (e, t) => {
                    ;(eq && eY?.hasSessionRevision && eA.get(ec.$, tl).dismiss("edit"), tp(e, t))
                  }),
            (ew[103] = eq),
            (ew[104] = tb),
            (ew[105] = tp),
            (ew[106] = eY?.hasSessionRevision),
            (ew[107] = tl),
            (ew[108] = eA),
            (ew[109] = eI))
          : (eI = ew[109]),
        ew[110] !== tl || ew[111] !== eA
          ? ((eb = () => (0, ec.F)(eA, tl)), (ew[110] = tl), (ew[111] = eA), (ew[112] = eb))
          : (eb = ew[112]))
      let tO = (0, i.jsx)(L.i, {
        bufferStreamingContent: void 0 !== eS && eS && eT.isStreaming,
        activeToneSectionId: ta.activeToneSectionId,
        assistantRevision: eh,
        content: e9,
        editorKey: tb,
        emailMetadata: tg,
        isEditable: null != tb && !tB && !eF && !eT.isStreaming && !(eq && eY?.isSuperseded),
        libraryFileId: "string" == typeof tw ? tw : void 0,
        onBlur: null == tb ? void 0 : tI,
        onContentChange: eI,
        onCopySuccess: eb,
        onRecipientChange: null == tb ? void 0 : ty,
        onSubjectChange: null == tb ? void 0 : tf,
        onToneSectionSelect: ta.selectToneSection,
        proseMirrorStore: eR,
        render: (e) =>
          (0, i.jsx)(R.F, {
            closeTabOnUnmount: eO || null == eJ,
            collapsedContent: tC,
            librarySaveControls: tj,
            context: e,
            document:
              eO || null == eW || null == eJ
                ? null
                : {
                    conversationId: eT.conversationId,
                    editorKey: eV,
                    libraryFileId: "string" == typeof tw ? tw : void 0,
                    messageId: eJ,
                    serverConversationId: eW,
                    title: e4?.title ?? ex.title,
                    turnId: eT.turnId,
                    variant: ex.variant,
                    writingBlockId: tS,
                    writingBlockIndex: eC,
                  },
            editorKey: tb,
            earlierVersion:
              eq && null == e0 && eY?.isSuperseded && null != eJ && null != eW
                ? (0, i.jsx)(ea, {
                    context: e,
                    messageId: eJ,
                    serverConversationId: eW,
                    variant: ex.variant,
                    writingBlockId: ek,
                    writingBlockIndex: eC,
                  })
                : void 0,
            emailMetadata: tg,
            isReadOnly: eO || (eq && eY?.isSuperseded),
            isStreaming: eT.isStreaming,
            messageId: eJ ?? void 0,
            copyTurnToClipboardMessageId: null != e4 && (null == eJ || eN?.[eJ]?.message?.id !== e3) ? null : e3,
            onBeforeDocumentExport: () => Promise.resolve((0, $.lQ)(eA, eT.conversationId)),
            onAskForChanges:
              !eq || null != e0 || null == eY || eY.isSuperseded || null == eJ || eT.isStreaming
                ? void 0
                : (e, t) => {
                    let n = eY.receivedMarkdown
                    return (0, ed.gm)(eA, {
                      conversationId: eT.conversationId,
                      messageId: eJ,
                      writingBlockId: ek,
                      editorView: e,
                      onCleared: t,
                      prepareSubmission: async (e) => (
                        tp(e, ta.activeToneSectionId),
                        (n =
                          eA.get(Y.n, { conversationId: eT.conversationId, messageId: eJ, writingBlockId: ek })
                            ?.receivedMarkdown ?? n),
                        await (0, $.lQ)(eA, eT.conversationId),
                        !0
                      ),
                      isCurrent: (e) => {
                        let t = e.get(Y.n, { conversationId: eT.conversationId, messageId: eJ, writingBlockId: ek }),
                          i = (0, c.hv)(e.get(w.Jv, eT.conversationId)?.[eJ]?.message?.metadata)[ek]
                        if (
                          null == t ||
                          t.isSuperseded ||
                          !t.isComplete ||
                          t.receivedMarkdown !== n ||
                          i?.library_file_id != null
                        )
                          return !1
                        let a = (0, F.IA)({ content: i?.content ?? t.receivedMarkdown, metadata: i?.metadata })
                        return (
                          (a?.find((e) => e.id === i?.metadata?.[o.e4])?.id ?? a?.[0]?.id) === ta.activeToneSectionId
                        )
                      },
                    })
                  },
            onEmailMetadataChange: null == tb ? void 0 : th,
            onSuggestedFollowup: tx,
            serverConversationId: null == tb ? void 0 : (eW ?? void 0),
            suggestedFollowupIneligibilityReason: tk,
            suppressCopyTurnToClipboardAnalytics: eT.suppressCopyTurnToClipboardAnalytics,
            showMagicEditAction: !eO && null != eJ && !eT.isStreaming,
            title: e4?.title ?? ex.title,
            userEditedWritingBlock: null != e4 && !1 !== e4.edited,
            variant: ex.variant,
            writingBlockId: null == tb ? void 0 : ek,
            writingBlockIndex: eC,
          }),
        testId: "chatgpt-writing-block",
        title: e4?.title ?? ex.title,
        toneSections: ta.displayedToneSections,
        variant: ex.variant,
      })
      if (tB) {
        let e
        return (
          ew[113] !== t_
            ? ((e = (0, i.jsx)(C.Z, { name: _.DE, attributes: { page_id: t_ } })), (ew[113] = t_), (ew[114] = e))
            : (e = ew[114]),
          e
        )
      }
      return eO || null == eJ
        ? tO
        : (0, i.jsxs)(i.Fragment, {
            children: [
              "document" !== ex.variant || eT.isStreaming || null != tw
                ? null
                : (0, i.jsx)(Z, { blockId: ek, conversationId: eT.conversationId, messageId: eJ }),
              (0, i.jsx)(H.LibraryWritingBlock, {
                conversationId: eT.conversationId,
                editorKey: eV,
                fallback: tO,
                initialContent: e9,
                inlineLibraryControls: tj,
                initialEditorStore: eR,
                instanceId: tS,
                isStreaming: eT.isStreaming,
                messageId: eJ,
                onSuggestedFollowup: tx,
                refIndex: eC,
                suggestedFollowupIneligibilityReason: tk,
                title: e4?.title ?? ex.title,
                turnId: eT.turnId,
              }),
            ],
          })
    }
    function ep() {}
    function ef() {}
    function ey(e) {
      return { ...e.emailMetadata, writingBlockMetadata: e.metadata }
    }
  },
  vNK1(e, t, n) {
    var i = n("QosV"),
      a = n("BhZP"),
      r = n("zd8w")
    function o(e, t, n, i) {
      return null == n ||
        (e?.index === t &&
          e.section.content === n.content &&
          e.section.id === n.id &&
          e.section.tone === n.tone &&
          e.shouldPersist === i)
        ? e
        : { index: t, section: n, shouldPersist: i, token: e?.token ?? Symbol() }
    }
    function l(e, t) {
      return e?.findIndex((e) => e.id === t) ?? -1
    }
    function s(e, t) {
      return t < 0 ? void 0 : e?.[t]
    }
    n.d(
      t,
      {},
      {
        J: function (e) {
          var t
          let n,
            d,
            c,
            u,
            m,
            v,
            g,
            p,
            f,
            y = (0, i.c)(38),
            {
              isPersistenceReady: h,
              isStreaming: I,
              metadata: b,
              onPersistSelection: w,
              storedActiveToneSectionId: S,
              toneSections: x,
            } = e
          y[0] !== b || y[1] !== S
            ? ((n = S ?? ("string" == typeof (t = b?.[a.e4]) ? t : void 0)), (y[0] = b), (y[1] = S), (y[2] = n))
            : (n = y[2])
          let k = n,
            [C, _] = (0, r.useState)()
          if (y[3] !== k || y[4] !== x) {
            let e = l(x, k)
            ;((d = s(x, e)), (y[3] = k), (y[4] = x), (y[5] = d))
          } else d = y[5]
          let B = d
          y[6] !== h || y[7] !== I || y[8] !== C || y[9] !== k || y[10] !== x
            ? ((c = (function (e, t, n, i, a) {
                let r = e,
                  d = l(t, e?.section.id),
                  c = s(t, d)
                if (e?.shouldPersist === !0)
                  if (e.section.id === n)
                    if (i) return o(e, d, c, !1)
                    else r = void 0
                  else {
                    if (i || null != c) return o(e, d, c, !0)
                    r = void 0
                  }
                if (i && e?.shouldPersist === !1 && null == c) return e
                let u = l(t, n),
                  m = s(t, u)
                if (i) return null != m ? o(r, u, m, !1) : r?.section.id === n ? r : void 0
                let v = t?.[0]
                if (a && null != n && null == m && null != v) return o(void 0, 0, v, !0)
              })(C, x, k, I, h)),
              (y[6] = h),
              (y[7] = I),
              (y[8] = C),
              (y[9] = k),
              (y[10] = x),
              (y[11] = c))
            : (c = y[11])
          let M = c
          if ((M !== C && _(M), y[12] !== M?.section.id || y[13] !== x)) {
            let e = l(x, M?.section.id)
            ;((u = s(x, e)), (y[12] = M?.section.id), (y[13] = x), (y[14] = u))
          } else u = y[14]
          let T = u,
            A = null != M && (I || M.shouldPersist || M.section.id === k) ? M : void 0,
            j = null == A ? void 0 : T,
            O = I && null != A && null == j ? A : void 0
          y[15] !== O || y[16] !== x
            ? ((m = (function (e, t) {
                if (null == t) return e
                let n = [...(e ?? [])]
                return (n.splice(Math.min(Math.max(t.index, 0), 2, n.length), 0, t.section), n.slice(0, 3))
              })(x, O)),
              (y[15] = O),
              (y[16] = x),
              (y[17] = m))
            : (m = y[17])
          let E = m,
            L = j?.id ?? O?.section.id ?? B?.id ?? E?.[0]?.id,
            R = (0, r.useRef)(void 0),
            q = (0, r.useEffectEvent)(w)
          ;(y[18] !== h || y[19] !== I || y[20] !== T || y[21] !== q || y[22] !== k || y[23] !== M
            ? ((v = () => {
                !I &&
                  h &&
                  M?.shouldPersist === !0 &&
                  M.section.id !== k &&
                  null != T &&
                  R.current !== M.token &&
                  ((R.current = M.token), q(M.section.id))
              }),
              (y[18] = h),
              (y[19] = I),
              (y[20] = T),
              (y[21] = q),
              (y[22] = k),
              (y[23] = M),
              (y[24] = v))
            : (v = y[24]),
            y[25] !== h || y[26] !== I || y[27] !== T || y[28] !== k || y[29] !== M
              ? ((g = [h, I, T, k, M]), (y[25] = h), (y[26] = I), (y[27] = T), (y[28] = k), (y[29] = M), (y[30] = g))
              : (g = y[30]),
            (0, r.useEffect)(v, g),
            y[31] !== L || y[32] !== E
              ? ((p = (e) => {
                  if (e === L) return
                  let t = l(E, e),
                    n = s(E, t)
                  null != n && _({ index: t, section: n, shouldPersist: !0, token: Symbol() })
                }),
                (y[31] = L),
                (y[32] = E),
                (y[33] = p))
              : (p = y[33]))
          let P = p
          return (
            y[34] !== L || y[35] !== E || y[36] !== P
              ? ((f = { activeToneSectionId: L, displayedToneSections: E, selectToneSection: P }),
                (y[34] = L),
                (y[35] = E),
                (y[36] = P),
                (y[37] = f))
              : (f = y[37]),
            f
          )
        },
      },
    )
  },
  hnOq(e, t, n) {
    var i = n("BhZP")
    n.d(
      t,
      {},
      {
        F7: function (e, t) {
          let n = e?.findIndex((e) => e.id === t) ?? -1,
            i = e?.[n]
          return n > 0 && null != i ? { id: i.id, index: n, isOriginal: !1 } : { isOriginal: !0 }
        },
        Te: function (e, t) {
          return null == t || (0, i.I$)(e).length > 0
            ? e
            : { ...e, [i.CY]: t.map((e) => ({ content: e.content, id: e.id, label: e.tone })) }
        },
        is: function ({ nextContent: e, toneSectionId: t, toneSections: n }) {
          if (null == n || 0 === n.length || null == t || !n.some((e) => e.id === t))
            return { activeToneSectionId: void 0, content: e, toneSections: n }
          let i = n.map((n) => (n.id === t ? { ...n, content: e } : n))
          return { activeToneSectionId: t, content: i[0]?.content ?? e, toneSections: i }
        },
      },
    )
  },
  GO1D(e, t, n) {
    var i = n("BhZP"),
      a = n("yqKZ"),
      r = n("RF9q"),
      o = n("c3f5")
    function l({ content: e, metadata: t, preserveEmptySections: n = !1 }) {
      if (t?.[i.uV] === !0) return (0, i.I$)(t).map((e) => ({ content: e.content, id: e.id, tone: e.label }))
      let r = (0, a.b_)({ content: e, metadata: t, preserveEmptySections: n }),
        o = (0, a.b_)({ content: "", metadata: t })
      return null == r || null == o
        ? r
        : r.map((e, t) => {
            let n = o[t]
            return null == n || n.tone !== e.tone || n.id === e.id ? e : { ...e, id: n.id }
          })
    }
    n.d(
      t,
      {},
      {
        He: function (e) {
          return (0, r.oz)(e)
        },
        IA: l,
        Is: function ({ attributes: e, isStreaming: t, rawText: n }) {
          let i = (n ?? "").replace(/^\r?\n/, "").replace(/\r?\n$/, ""),
            a = (0, r.q4)((0, o.B)(e, "metadata")),
            s = l({ content: i, metadata: a, preserveEmptySections: !t })
          return {
            bodyContent: i,
            content: s?.[0]?.content ?? i,
            emailMetadata: {
              bcc: (0, o.B)(e, "bcc"),
              cc: (0, o.B)(e, "cc"),
              recipient: (0, o.B)(e, "recipient"),
              subject: (0, o.B)(e, "subject"),
            },
            id: (0, o.B)(e, "id"),
            metadata: a,
            title: (0, o.B)(e, "title"),
            toneSections: s,
            variant: (0, o.B)(e, "variant"),
          }
        },
      },
    )
  },
  IQg5(e, t, n) {
    var i = n("ABep"),
      a = n("QosV"),
      r = n("zTAs"),
      o = n("CeUM"),
      l = n("GO1D")
    n.d(
      t,
      {},
      {
        WritingBlockDirectiveRenderer: function (e) {
          let t,
            n,
            s,
            d,
            c,
            u,
            m,
            v,
            g,
            p,
            f,
            y,
            h = (0, a.c)(29),
            {
              attributes: I,
              contentReferences: b,
              isStreaming: w,
              rawText: S,
              renderExtension: x,
              renderPersisted: k,
              testId: C,
            } = e
          if (h[0] !== I || h[1] !== b || h[2] !== w || h[3] !== S || h[4] !== x || h[5] !== k || h[6] !== C) {
            f = Symbol.for("react.early_return_sentinel")
            e: {
              n = (0, l.Is)({ attributes: I, isStreaming: w, rawText: S })
              let e = k?.(n)
              if (null != e) {
                f = (0, i.jsx)(i.Fragment, { children: e })
                break e
              }
              ;((t = o.i),
                (s = (0, r.Io)(n.content, { contentReferences: b, isStreaming: w })),
                (d = void 0),
                (c = n.emailMetadata),
                (u = !1),
                (m = x?.(n)),
                (v = C),
                (g = n.title),
                (p =
                  n.toneSections?.map((e) => ({
                    ...e,
                    content: (0, r.Io)(e.content, { contentReferences: b, isStreaming: w }),
                  })) ?? null))
            }
            ;((h[0] = I),
              (h[1] = b),
              (h[2] = w),
              (h[3] = S),
              (h[4] = x),
              (h[5] = k),
              (h[6] = C),
              (h[7] = t),
              (h[8] = n),
              (h[9] = s),
              (h[10] = d),
              (h[11] = c),
              (h[12] = u),
              (h[13] = m),
              (h[14] = v),
              (h[15] = g),
              (h[16] = p),
              (h[17] = f))
          } else
            ((t = h[7]),
              (n = h[8]),
              (s = h[9]),
              (d = h[10]),
              (c = h[11]),
              (u = h[12]),
              (m = h[13]),
              (v = h[14]),
              (g = h[15]),
              (p = h[16]),
              (f = h[17]))
          return f !== Symbol.for("react.early_return_sentinel")
            ? f
            : (h[18] !== t ||
              h[19] !== n.variant ||
              h[20] !== s ||
              h[21] !== d ||
              h[22] !== c ||
              h[23] !== u ||
              h[24] !== m ||
              h[25] !== v ||
              h[26] !== g ||
              h[27] !== p
                ? ((y = (0, i.jsx)(t, {
                    content: s,
                    editorKey: d,
                    emailMetadata: c,
                    isEditable: u,
                    render: m,
                    testId: v,
                    title: g,
                    toneSections: p,
                    variant: n.variant,
                  })),
                  (h[18] = t),
                  (h[19] = n.variant),
                  (h[20] = s),
                  (h[21] = d),
                  (h[22] = c),
                  (h[23] = u),
                  (h[24] = m),
                  (h[25] = v),
                  (h[26] = g),
                  (h[27] = p),
                  (h[28] = y))
                : (y = h[28]),
              y)
        },
      },
    )
  },
  eZRG(e, t, n) {
    let i = (0, n("ESTr").a)({
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
    n.d(t, {}, { t: i })
  },
}
//# sourceMappingURL=867839.8af34c80aa.js.map
