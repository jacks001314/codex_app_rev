export const __rspack_esm_ids = [923712]
export const __webpack_modules__ = {
  tNuX(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 14,
          height: 12,
          fill: "none",
          viewBox: "0 0 14 12",
          ...e,
          children: (0, i.jsx)("path", {
            fill: "currentColor",
            d: "M8 7.534C8 5.846 6.492 4.4 4.532 4.4S1.064 5.846 1.064 7.534c0 .615.195 1.19.538 1.678a.532.532 0 0 1 .093.365 6.178 6.178 0 0 1-.204 1.001c.37-.062.726-.151 1.075-.27l.1-.023c.1-.013.202.002.294.045a3.75 3.75 0 0 0 1.572.34C6.492 10.67 8 9.223 8 7.533Zm4.8-3.336c0-1.688-1.508-3.134-3.468-3.134-1.152 0-2.162.507-2.788 1.272a.533.533 0 0 1-.824-.675C6.553.645 7.867 0 9.332 0c2.458 0 4.532 1.837 4.532 4.198 0 .77-.226 1.49-.613 2.107.07.455.21.904.389 1.368a.532.532 0 0 1-.528.723 8.246 8.246 0 0 1-1.961-.354 4.73 4.73 0 0 1-.412.15.532.532 0 0 1-.308-1.02c.164-.049.322-.109.473-.178l.095-.034a.533.533 0 0 1 .299.013c.349.118.704.207 1.074.27a6.172 6.172 0 0 1-.203-1.002.532.532 0 0 1 .093-.365 2.903 2.903 0 0 0 .538-1.678ZM9.064 7.534c0 2.362-2.074 4.2-4.532 4.2a4.826 4.826 0 0 1-1.822-.355 8.139 8.139 0 0 1-1.676.332l-.282.021a.532.532 0 0 1-.528-.723l.142-.391a5.85 5.85 0 0 0 .247-.977A3.95 3.95 0 0 1 0 7.534c0-2.361 2.074-4.198 4.532-4.198s4.532 1.837 4.532 4.198Z",
          }),
        })))
  },
  TKga(e, t, n) {
    function i() {
      return { sources: [], selection: { status: "idle" } }
    }
    n.d(
      t,
      {},
      {
        Z: function (e, t) {
          switch (t.type) {
            case "reset":
              return i()
            case "dismiss":
              return "open" === e.selection.status ? { ...e, selection: { ...e.selection, status: "dismissed" } } : e
            case "open":
              return { ...e, selection: { status: "open", category: t.category } }
            case "reconcile": {
              let n = t.sources,
                i = n.at(-1)
              if (void 0 === i)
                return 0 === e.sources.length && "idle" === e.selection.status
                  ? e
                  : { sources: n, selection: { status: "idle" } }
              if (
                n.length === e.sources.length &&
                n.every((t, n) => t.mentionId === e.sources[n]?.mentionId && t.category === e.sources[n]?.category)
              )
                return e
              let l = e.selection,
                a = n.findLast((t) => !e.sources.some((e) => e.mentionId === t.mentionId && e.category === t.category))
              if (
                "idle" !== l.status &&
                n.some((e) => e.category === l.category) &&
                (void 0 === a || a.category === l.category)
              )
                return { sources: n, selection: l }
              return { sources: n, selection: { status: "open", category: (a ?? i).category } }
            }
          }
        },
        y: i,
      },
    )
  },
  Aetk(e, t, n) {
    var i = n("iRMi"),
      l = n("zTeN"),
      a = n("yGJW"),
      r = n("Sd8U")
    let s = (0, l.vP)(r.PR, null),
      o = (0, l.vP)(r.PR, null)
    function c(e, t) {
      e.set(s, t)
    }
    function u(e, t) {
      ;((0, a.yy)(e, i.CodexNewChatSuggestionEvent, {
        action: i.CodexNewChatSuggestionAction.CODEX_NEW_CHAT_SUGGESTION_ACTION_MESSAGE_SENT,
        categoryId: t.categoryId,
        suggestionId: t.suggestionId,
        suggestionLevel: t.suggestionLevel,
        surface: t.surface,
      }),
        e.get(s) === t && d(e))
    }
    function d(e) {
      ;(e.set(s, null), p(e))
    }
    function p(e) {
      e.set(o, null)
    }
    n.d(
      t,
      {},
      {
        G0: function (e, t) {
          ;(c(e, t), e.set(o, t))
        },
        OK: function (e) {
          e.get(s)?.preserveAttributionOnArtifactTemplateOpen ? p(e) : d(e)
        },
        R: d,
        bd: s,
        dN: c,
        iH: p,
        rV: o,
        vn: function (e) {
          let t = e.get(s)
          null != t && u(e, t)
        },
        zn: u,
      },
    )
  },
  RAeG(e, t, n) {
    var i = n("SIrB"),
      l = n("f6KK"),
      a = n("EULo")
    let r = "plugin://"
    function s(e) {
      let t = e.toLowerCase().replaceAll("\\", "/")
      if (t.startsWith(r)) return (0, i.AH)(t.slice(r.length).split("@")[0])
      if (t.startsWith("app://")) return (0, i.AH)(t.slice(6))
      let n = t.match(/(?:^|\/)skills\/(?:\.system\/)?([^/]+)\/skill\.md$/)?.[1]
      return null == n ? null : (0, i.AH)(n)
    }
    n.d(
      t,
      {},
      {
        XZ: function (e, t) {
          let n = []
          return (
            e.descendants((e) => {
              if ("skillMention" !== e.type.name && "pluginMention" !== e.type.name && "appMention" !== e.type.name)
                return !0
              let i = "string" == typeof e.attrs.path ? e.attrs.path : "",
                l = s(i)
              return (null != l && ("site" !== l || t) && n.push({ mentionId: i, category: l }), !0)
            }),
            n
          )
        },
        k8: function (e, t, n) {
          let { state: i, dispatch: a } = e.view,
            r = l.U3.atEnd(i.doc),
            s = r.$from.nodeBefore
          ;(a(i.tr.setSelection(r)),
            null == s || (s.isText && /\s$/.test(s.text ?? "")) || e.insertTextAtSelection(" "))
          let o = "__CODEX_TEMPLATE_NAME_PLACEHOLDER__",
            c = n.formatMessage(
              {
                id: "home.artifactTemplates.useTemplate.prompt",
                defaultMessage: "Use the {templateName} template.",
                description: "Composer text added after selecting an artifact template",
              },
              { templateName: o },
            ),
            u = c.indexOf(o)
          if (-1 === u) {
            ;(e.insertMentionAtSelection(t), e.insertTextAtSelection(c))
            return
          }
          let d = c.slice(0, u),
            p = c.slice(u + o.length).replaceAll(o, () => t.displayName)
          ;(e.insertTextAtSelection(d), e.insertMentionAtSelection(t))
          let { state: m, dispatch: h } = e.view,
            g = m.selection.from - 1,
            f = m.tr.insertText(p, g, m.selection.from)
          ;(f.setSelection(l.U3.create(f.doc, g + p.length)), h(f))
        },
        lI: s,
        ss: function (e) {
          let t = null,
            n = 0
          for (let i = (0, a.ex)(e, n); null != i; i = (0, a.ex)(e, n)) ((t = s((0, a.gh)(i.path)) ?? t), (n = i.end))
          return t
        },
      },
    )
  },
  P50e(e, t, n) {
    var i = n("Kt3w"),
      l = n("zTeN"),
      a = n("wTVm"),
      r = n("Isak"),
      s = n("EULo"),
      o = n("yGJW"),
      c = n("Sd8U")
    let u = (0, l.vP)(c.PR, null),
      d = (0, l.vP)(c.PR, null)
    function p(e, t, n) {
      let l = void 0 === n ? e.get(u) : n
      null != l &&
        (e.set(d, {
          ...l,
          type: "template",
          templateId: t.templateId,
          templateOrigin: t.templateOrigin,
          inclusion: t.inclusion,
        }),
        (0, o.yy)(e, i.CodexArtifactTemplateSelected, {
          ...l,
          ...(null == t.templateId ? {} : { templateId: t.templateId }),
          templateOrigin: t.templateOrigin,
        }))
    }
    function m(e, t) {
      let n = 0
      for (let i = (0, s.ex)(e, n); null != i; i = (0, s.ex)(e, n)) {
        if ((0, s.gh)(i.path) === t) return !0
        n = i.end
      }
      return !1
    }
    n.d(
      t,
      {},
      {
        c$: p,
        iy: function (e, t) {
          let n = (function (e) {
            switch (e) {
              case "document":
                return i.CodexArtifactTemplateCarouselKind.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_DOCUMENT
              case "presentation":
                return i.CodexArtifactTemplateCarouselKind.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_PRESENTATION
              case "spreadsheet":
                return i.CodexArtifactTemplateCarouselKind.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_SPREADSHEET
              case "site":
                return null
            }
          })(t)
          if (null == n) return (e.set(u, null), null)
          let l = { journeyId: (0, a.A)(), carouselKind: n }
          return (e.set(u, l), (0, o.yy)(e, i.CodexArtifactTemplateCarouselShown, l), l)
        },
        qv: function (e, { attachmentPath: t, journey: n, templateId: l }) {
          p(
            e,
            {
              templateId: l,
              templateOrigin: i.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_BUILT_IN_ASSET,
              inclusion: { type: "attachment", path: t },
            },
            n,
          )
        },
        rY: function (e, { fileAttachments: t, persistedPrompt: n }) {
          let l = e.get(d)
          if ((e.set(d, null), null != l)) {
            var a, r, s
            if (
              "create" === l.type
                ? m(n, l.mentionPath)
                : ((a = l.inclusion),
                  (r = n),
                  (s = t),
                  "mention" === a.type ? m(r, a.path) : s.some((e) => e.path === a.path))
            ) {
              if ("create" === l.type)
                return void (0, o.yy)(e, i.CodexArtifactTemplateCreateNewTemplatePromptSubmitted, {
                  journeyId: l.journeyId,
                  carouselKind: l.carouselKind,
                })
              ;(0, o.yy)(e, i.CodexArtifactTemplatePromptSubmitted, {
                journeyId: l.journeyId,
                carouselKind: l.carouselKind,
                ...(null == l.templateId ? {} : { templateId: l.templateId }),
                templateOrigin: l.templateOrigin,
              })
            }
          }
        },
        sv: function (e, t) {
          let n = e.get(u)
          null != n &&
            ((0, o.yy)(e, i.CodexArtifactTemplateCarouselDismissed, { ...n, dismissReason: t }), e.set(u, null))
        },
        tN: function (e, t) {
          p(e, {
            templateId:
              "system" === t.scope ? (0, r.A)(`${t.scope}:${t.name}`, "6b4ea11a-b46f-4e9d-957d-35b6f934874c") : void 0,
            templateOrigin: (function (e) {
              switch (e) {
                case "system":
                  return i.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_SYSTEM_SKILL
                case "user":
                  return i.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_USER_SKILL
                case "repo":
                  return i.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_REPO_SKILL
                case "admin":
                  return i.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_ADMIN_SKILL
              }
            })(t.scope),
            inclusion: { type: "mention", path: t.path },
          })
        },
        u4: function (e, t) {
          let n = e.get(u)
          null != n &&
            (e.set(d, { ...n, type: "create", mentionPath: t }),
            (0, o.yy)(e, i.CodexArtifactTemplateCreateNewTemplateSelected, { ...n }))
        },
        zD: u,
      },
    )
  },
  BI7S(e, t, n) {
    var i = n("TKga"),
      l = n("zTeN"),
      a = n("Aetk"),
      r = n("TSib"),
      s = n("Sd8U"),
      o = n("RAeG"),
      c = n("P50e")
    let u = (0, l.vP)(s.PR, i.y),
      d = (0, l.un)(s.PR, ({ get: e }) => "open" === e(u).selection.status),
      p = (0, l.un)(s.PR, ({ get: e }) => e(d) && null != (0, o.ss)(e(r.$e)))
    n.d(
      t,
      {},
      {
        LM: p,
        d_: d,
        ek: u,
        ir: function ({ scope: e, path: t }) {
          let n = (0, o.lI)(t)
          null != n && ((0, a.OK)(e), e.set(u, (e) => (0, i.Z)(e, { type: "open", category: n })))
        },
        td: function (e) {
          ;((0, a.R)(e), e.set(c.zD, null), e.set(u, (e) => (0, i.Z)(e, { type: "dismiss" })))
        },
      },
    )
  },
  vnLQ(e, t, n) {
    var i = n("QosV"),
      l = n("SZCv"),
      a = n.n(l),
      r = n("zTeN"),
      s = n("DBCl"),
      o = n("t162"),
      c = n("tl5a"),
      u = n("AqHb"),
      d = n("UN1G"),
      p = n("L2Eu"),
      m = n("JQtI"),
      h = n("gdZA"),
      g = n("TYK1"),
      f = n("kx7U"),
      y = n("OWtl"),
      v = n("V3rO"),
      I = n("kfGJ"),
      b = n("r6TF"),
      S = n("d6Ff"),
      w = n("QGyr"),
      M = n("TWTg"),
      k = n("fmZS")
    let x = (0, r.un)(y.u, ({ get: e }) =>
        (e(f.u8) ?? [])
          .filter(({ hostId: t }) => "connected" === e(c.y2, t))
          .map(({ hostId: e }) => e)
          .sort((e, t) => e.localeCompare(t)),
      ),
      _ = (0, r.un)(y.u, ({ get: e }) => {
        let t = (0, b.ZI)(e, e(b.Tv))
        return {
          cloudTasks: [...(e(b.Ei).data ?? []), ...t.flatMap((e) => ("remote" === e.kind ? [e.task] : []))],
          conversationsMeta: t.flatMap((e) => ("local" === e.kind && null != e.summary ? [e.summary] : [])),
          hostIds: new Set([I.fI, s.iwv, ...e(x)]),
          projectLabelByThreadKey: e(w.o4),
        }
      })
    function A(e) {
      switch (e.kind) {
        case "local":
          return e.hostId === I.fI ? e.threadKey : `${e.threadKey}:${e.hostId}`
        case "remote":
          return e.threadKey
        case "chatgpt":
          return `chatgpt:${e.conversationId}`
        case "dot":
          return `dot:${e.item.id}`
      }
    }
    function T(e) {
      let t = (0, s.JXB)(e.threadId)
      return {
        kind: "local",
        threadKey: (0, S.z3)(t),
        conversationId: t,
        hostId: e.hostId,
        threadId: e.threadId,
        title: e.title,
        searchTitle: e.title,
        cwd: e.cwd,
        branch: "",
        hasUnreadTurn: !1,
        isAeonThread: (0, m.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.updatedAt,
        searchPreview: e.searchPreview,
      }
    }
    function L(e) {
      switch (e.kind) {
        case "local":
          return (0, k.Q7)(e.hostId, e.conversationId)
        case "remote":
          return e.threadKey
      }
    }
    function P(e, t, n) {
      let i = N(e.searchTitle, t, 0)
      if (null != i) return i
      let l = (function (e, t) {
        if (null == e) return null
        switch (e.kind) {
          case "contentMatch":
            return N(e.snippet, t, 1)
          case "branchMatch":
            return N(e.branch, t, 2)
        }
      })(e.searchPreview, t)
      if (null != l) return l
      switch (e.kind) {
        case "local":
          return (
            (n.length >= 8 && e.threadId.toLowerCase().startsWith(n) ? N(e.threadId, t, 0) : null) ??
            N(e.branch, t, 2) ??
            N(e.projectLabel ?? "", t, 3) ??
            N(e.cwd, t, 3)
          )
        case "remote":
          return N(e.projectLabel ?? "", t, 3) ?? N(e.environmentLabel, t, 3)
        case "dot":
          return { fieldPriority: 1, score: 0, value: null }
        case "chatgpt":
          return null
      }
    }
    function C(e, t) {
      let n = e.match.fieldPriority - t.match.fieldPriority
      if (0 !== n) return n
      let i = t.match.score - e.match.score
      return 0 !== i ? i : t.result.updatedAt - e.result.updatedAt
    }
    function N(e, t, n) {
      let i = t(e)
      return 0 === i ? null : { fieldPriority: n, score: i, value: e }
    }
    function E(e, t) {
      let n = [],
        i = new Map()
      for (let l of [...e, ...t]) {
        let e = A(l),
          t = i.get(e)
        if (null == t) {
          ;(i.set(e, n.length), n.push(l))
          continue
        }
        let a = n[t]
        null == a.searchPreview && null != l.searchPreview && (n[t] = { ...a, searchPreview: l.searchPreview })
      }
      return n
    }
    function R(e, t, n) {
      if ("durable" !== (0, u._)(t)) return !1
      let { data: i } = e(g.cloudAeonByThreadId$, (0, s.JXB)(n))
      return i?.active_root_thread_id != null && i.active_root_thread_id !== n
    }
    n.d(
      t,
      {},
      {
        EI: function ({ loadedChatSearchResults: e, chatGptResults: t, isChatSelectable: n, limit: i }) {
          return E([...e, ...t], [])
            .filter(n)
            .sort((e, t) => t.updatedAt - e.updatedAt)
            .slice(0, i)
        },
        LU: A,
        MQ: function (e, t, n, i) {
          if (!t) return null
          let l = (0, d.WE)(t)
          return l(n) > 0 || l(i) > 0 ? null : (P(e, l, t.toLowerCase())?.value ?? null)
        },
        N6: function ({
          asyncResults: e,
          chatGptResults: t = [],
          isChatSelectable: n,
          loadedChatSearchResults: i,
          limit: l,
          query: a,
        }) {
          let r = e.map(T),
            s = E([...i, ...t], r)
          return (function (e, t, n) {
            if (n <= 0) return []
            let i = t.trim()
            if (0 === i.length) return []
            let l = [],
              a = (0, d.WE)(i),
              r = i.toLowerCase()
            for (let t of e) {
              let e = P(t, a, r)
              if (null == e) continue
              let i = { result: t, match: e }
              if (l.length < n) {
                l.push(i)
                continue
              }
              let s = (function (e) {
                let t = 0
                for (let n = 1; n < e.length; n += 1) 0 > C(e[t], e[n]) && (t = n)
                return t
              })(l)
              0 > C(i, l[s]) && (l[s] = i)
            }
            return l.sort(C).map(({ result: e }) => e)
          })(null == n ? s : s.filter(n), a, l)
        },
        T0: function (e, t) {
          var n
          let l,
            c = (0, i.c)(3),
            u = (0, r.Ul)(void 0 === t || t ? _ : void 0)
          c[0] !== e || c[1] !== u
            ? ((l =
                null == u
                  ? void 0
                  : ((n = { ...u, conversationsMeta: [...(e ?? []), ...u.conversationsMeta] }),
                    (0, r.un)(
                      y.u,
                      ({ get: e }) =>
                        (function ({
                          cloudTasks: e,
                          conversationsMeta: t,
                          getSearchTitle: n,
                          hostIds: i,
                          projectLabelByThreadKey: l,
                        }) {
                          return [
                            ...t
                              .filter(
                                (e) =>
                                  i.has(e.hostId ?? I.fI) &&
                                  (null == e.source || "string" == typeof e.source || !("subAgent" in e.source)),
                              )
                              .map((e) => {
                                let t = e.cwd ?? "",
                                  i = n(e),
                                  a = null == i || e.title?.trim() ? i : ((0, o.uw)(i, 60) ?? ""),
                                  r = (i ?? t) || e.conversationId,
                                  c = (0, s.JXB)(e.conversationId),
                                  u = (0, S.z3)(c)
                                return {
                                  kind: "local",
                                  threadKey: u,
                                  conversationId: c,
                                  hostId: e.hostId ?? I.fI,
                                  threadId: e.conversationId,
                                  title: a,
                                  searchTitle: r,
                                  cwd: t,
                                  branch: e.gitInfo?.branch ?? "",
                                  projectLabel: l?.get(u),
                                  hasUnreadTurn: e.hasUnreadTurn,
                                  isAeonThread: (0, m.N)(e.threadStartKind, e.threadSource),
                                  updatedAt: e.recencyAt ?? e.updatedAt,
                                  searchPreview: null,
                                }
                              }),
                            ...(e?.map((e) => {
                              let t = (0, S.Wz)(e.id),
                                n = (0, p.SX)(e.title ?? "") || null
                              return {
                                kind: "remote",
                                threadKey: t,
                                taskId: e.id,
                                title: n,
                                searchTitle: e.title ?? e.id,
                                environmentLabel: e.task_status_display?.environment_label ?? "",
                                projectLabel: l?.get(t),
                                hasUnreadTurn: e.has_unread_turn,
                                updatedAt: (e.updated_at ?? e.created_at ?? 0) * 1e3,
                                searchPreview: null,
                              }
                            }) ?? []),
                          ]
                        })({ ...n, getSearchTitle: (t) => (0, M.D)(e, t) })
                          .filter((t) => "local" !== t.kind || !t.isAeonThread || !R(e, t.hostId, t.threadId))
                          .map((t) => {
                            let n =
                              "local" === t.kind ? e(h.$P, { hostId: t.hostId, threadId: t.conversationId }) : null
                            return null == n ? t : { ...t, title: n, searchTitle: n }
                          }),
                      { isEqual: a() },
                    ))),
              (c[0] = e),
              (c[1] = u),
              (c[2] = l))
            : (l = c[2])
          let d = l
          return (0, r.Ul)(d) ?? []
        },
        er: x,
        hv: function ({ excludedThreadKeys: e, loadedChatSearchResults: t, limit: n, pinnedThreadIds: i }) {
          if (n <= 0) return { pinnedResults: [], recentResults: [] }
          let l = E(t, []).filter((t) => !e?.has(t.threadKey)),
            a = new Map()
          for (let e of l) {
            let t = (0, S.PK)(e.threadKey)
            if (null != t) {
              let n = a.get(t)
              null == n ? a.set(t, [e]) : n.push(e)
            }
          }
          let r = new Set(i),
            s = i.flatMap((e) => a.get(e) ?? []),
            o = l
              .filter((e) => {
                let t = (0, S.PK)(e.threadKey)
                return null == t || !r.has(t)
              })
              .sort((e, t) => t.updatedAt - e.updatedAt)
          return { pinnedResults: s.slice(0, n), recentResults: o.slice(0, Math.max(n - s.length, 0)) }
        },
        oB: function (e, t) {
          if ("chatgpt" === e.kind) return null
          if (null != e.searchPreview || "local" !== e.kind) return e.searchPreview
          let n = t.trim()
          if (0 === n.length) return null
          let i = (0, d.WE)(n)
          return i(e.searchTitle) > 0 || 0 === i(e.branch) ? null : { kind: "branchMatch", branch: e.branch }
        },
        qw: function ({
          currentThreadKey: e,
          loadedChatSearchResults: t,
          limit: n,
          recentThreadKeys: i,
          unreadThreadKeys: l,
          visibleThreadKeys: a,
        }) {
          if (n <= 0) return []
          let r = E(t, []),
            o = new Map(),
            c = new Map()
          for (let e of r) {
            ;(o.set(e.threadKey, e), o.set(L(e), e))
            let t = c.get(e.threadKey)
            if ((null == t ? c.set(e.threadKey, [e]) : t.push(e), "local" === e.kind)) {
              let t = (0, v.Uw)(e.conversationId)
              ;(0, s.L$F)(t) && o.set((0, S.z3)(t), e)
            }
          }
          let u = [],
            d = new Set(),
            p = (t) => {
              if (null == t) return
              if (null != a && !a.has(t.threadKey)) {
                if ("local" !== t.kind) return
                let e = (0, v.Uw)(t.conversationId)
                if (!(0, s.L$F)(e) || !a.has((0, S.z3)(e))) return
              }
              let i = L(t)
              i === e || d.has(i) || u.length === n || (d.add(i), u.push(t))
            },
            m = (e) => {
              p(o.get(e))
            }
          for (let e of l) {
            let t = o.get(e)
            null != t &&
              c.get(t.threadKey)?.forEach((e) => {
                p({ ...e, hasUnreadTurn: !0 })
              })
          }
          for (let e of i) m(e)
          for (let e of r.sort((e, t) => t.updatedAt - e.updatedAt)) p(e)
          return u
        },
        xH: function (e) {
          return (0, r.un)(
            y.u,
            ({ get: t }) =>
              e.filter((e) => !(0, m.N)(e.threadStartKind, e.threadSource) || !R(t, e.hostId, e.threadId)),
            { isEqual: a() },
          )
        },
      },
    )
  },
  R2HH(e, t, n) {
    n.d(t, { Ox: () => G, Jc: () => Q, yl: () => w })
    var i = n("ABep"),
      l = n("QosV"),
      a = n("i5ac"),
      r = n.n(a),
      s = n("zTeN"),
      o = n("zd8w"),
      c = n("oyxz"),
      u = n("tl2n"),
      d = n("u0X2"),
      p = n("Qm75"),
      m = n("qfej"),
      h = n("Wv1R"),
      g = n("VaJ5"),
      f = n("on57"),
      y = n("ZQu1"),
      v = n("tnQ4"),
      I = n("UxN3"),
      b = n("bIvi"),
      S = n("OOvA")
    function w(e) {
      let t,
        n,
        a,
        r,
        s,
        o,
        u,
        d = (0, l.c)(50),
        {
          preserveHighlightOnItemsChange: p,
          className: m,
          closeOnNoResults: h,
          containerRef: g,
          density: f,
          footer: y,
          footerSectionId: v,
          header: I,
          iconSize: w,
          isActive: k,
          loadingIcons: _,
          noResults: A,
          sections: T,
          onUpdateSelectedMention: L,
          onAddContext: P,
          onRequestClose: C,
          placement: N,
          query: E,
          chromeVariant: R,
          fixedSectionHeaders: O,
          isHomeMenu: j,
          keyboardEventTarget: U,
          keyboardVariant: $,
        } = e,
        q = void 0 === k || k,
        H = void 0 === N ? "top" : N,
        z = void 0 === E ? "" : E,
        K = void 0 === R ? "default" : R,
        D = void 0 !== O && O,
        W = void 0 !== j && j
      d[0] !== T ? ((t = new Map(T.flatMap(M))), (d[0] = T), (d[1] = t)) : (t = d[1])
      let G = t
      d[2] !== G ? ((n = (e) => G.get(e) ?? null), (d[2] = G), (d[3] = n)) : (n = d[3])
      let F = (0, b.K)(n),
        Q = null != I,
        B = null == v ? y : void 0
      if (
        (d[4] !== A
          ? ((a =
              A ??
              (0, i.jsx)(c.A, {
                id: "composer.atMentionList.noResults",
                defaultMessage: "No results",
                description: "Shown when there are no mention results matching the search query",
              })),
            (d[4] = A),
            (d[5] = a))
          : (a = d[5]),
        d[6] !== F || d[7] !== L
          ? ((r = (e) => {
              L(null == e ? null : () => F(e.key))
            }),
            (d[6] = F),
            (d[7] = L),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== F || d[10] !== G || d[11] !== P || d[12] !== L
          ? ((s = (e) => {
              let t = G.get(e.key)
              null != t && (L(() => F(e.key)), P(t))
            }),
            (d[9] = F),
            (d[10] = G),
            (d[11] = P),
            (d[12] = L),
            (d[13] = s))
          : (s = d[13]),
        d[14] !== y || d[15] !== v || d[16] !== I || d[17] !== w || d[18] !== _ || d[19] !== T)
      ) {
        let e
        ;(d[21] !== y || d[22] !== v || d[23] !== I || d[24] !== w || d[25] !== _
          ? ((e = (e) => ({
              ref: e.ref,
              footer: e.id === v ? y : void 0,
              emptyState:
                null == e.emptyState || ((null != I || null != _) && e.isLoading)
                  ? null
                  : (0, i.jsx)(c.A, { ...e.emptyState }),
              id: e.id,
              isError: e.isError,
              isLoading: e.isLoading,
              items: e.items.map((e) => ({
                ariaLabel: e.ariaLabel,
                content: (0, i.jsx)(x, { entry: e, iconSize: w }),
                placeholder: (0, i.jsxs)(i.Fragment, {
                  children: [
                    e.labelElement ?? e.label,
                    " ",
                    e.detailElement ?? e.detail,
                    " ",
                    e.allowLabelAndDetailToShrink && null != e.detail ? e.detailSuffix : null,
                    " ",
                    e.trailingContent,
                  ],
                }),
                disabled: e.disabled,
                key: e.key,
                pluginImpressionId: e.pluginImpression?.pluginId,
                selectionAliases: [e.label, ...(e.searchTerms ?? [])],
                tooltipText: e.tooltipText,
                renderWithPreview: e.renderWithPreview,
              })),
              showTitle: e.showTitle,
              title: "string" == typeof e.title ? e.title : (0, i.jsx)(c.A, { ...e.title, values: e.titleValues }),
            })),
            (d[21] = y),
            (d[22] = v),
            (d[23] = I),
            (d[24] = w),
            (d[25] = _),
            (d[26] = e))
          : (e = d[26]),
          (o = T.map(e)),
          (d[14] = y),
          (d[15] = v),
          (d[16] = I),
          (d[17] = w),
          (d[18] = _),
          (d[19] = T),
          (d[20] = o))
      } else o = d[20]
      return (
        d[27] !== K ||
        d[28] !== m ||
        d[29] !== h ||
        d[30] !== g ||
        d[31] !== f ||
        d[32] !== D ||
        d[33] !== I ||
        d[34] !== q ||
        d[35] !== W ||
        d[36] !== U ||
        d[37] !== $ ||
        d[38] !== _ ||
        d[39] !== C ||
        d[40] !== H ||
        d[41] !== p ||
        d[42] !== z ||
        d[43] !== B ||
        d[44] !== a ||
        d[45] !== r ||
        d[46] !== s ||
        d[47] !== o ||
        d[48] !== Q
          ? ((u = (0, i.jsx)(S.d, {
              className: m,
              preserveHighlightOnItemsChange: p,
              closeOnNoResults: h,
              containerRef: g,
              chromeVariant: K,
              density: f,
              fixedSectionHeaders: D,
              header: I,
              loadingIcons: _,
              showHeaderDividerOnScroll: Q,
              footer: B,
              isActive: q,
              isHomeMenu: W,
              keyboardEventTarget: U,
              keyboardVariant: $,
              noResults: a,
              onHighlight: r,
              onRequestClose: C,
              placement: H,
              onSelect: s,
              query: z,
              sections: o,
            })),
            (d[27] = K),
            (d[28] = m),
            (d[29] = h),
            (d[30] = g),
            (d[31] = f),
            (d[32] = D),
            (d[33] = I),
            (d[34] = q),
            (d[35] = W),
            (d[36] = U),
            (d[37] = $),
            (d[38] = _),
            (d[39] = C),
            (d[40] = H),
            (d[41] = p),
            (d[42] = z),
            (d[43] = B),
            (d[44] = a),
            (d[45] = r),
            (d[46] = s),
            (d[47] = o),
            (d[48] = Q),
            (d[49] = u))
          : (u = d[49]),
        u
      )
    }
    function M(e) {
      return e.items.map(k)
    }
    function k(e) {
      return [e.key, e]
    }
    function x(e) {
      let t,
        n,
        a,
        r,
        s,
        o = (0, l.c)(22),
        { entry: c, iconSize: u } = e,
        d = 20 === u ? "size-5 shrink-0" : "icon-xs shrink-0"
      o[0] !== c.icon || o[1] !== c.iconElement || o[2] !== d
        ? ((t = c.iconElement ?? (c.icon ? (0, i.jsx)(I.b5, { icon: c.icon, legacyClassName: d }) : null)),
          (o[0] = c.icon),
          (o[1] = c.iconElement),
          (o[2] = d),
          (o[3] = t))
        : (t = o[3])
      let p = t
      return (
        o[4] !== c.iconImage || o[5] !== p || o[6] !== d
          ? ((n = c.iconImage?.src
              ? (0, i.jsx)(
                  y.R,
                  {
                    className: (0, f.A)("rounded-2xs", d),
                    alt: "",
                    src: c.iconImage.src,
                    monochrome: c.iconImage.monochrome,
                    fallback: (0, i.jsx)(i.Fragment, { children: p }),
                  },
                  c.iconImage.src,
                )
              : p),
            (o[4] = c.iconImage),
            (o[5] = p),
            (o[6] = d),
            (o[7] = n))
          : (n = o[7]),
        o[8] !== c.trailingContent || o[9] !== c.trailingDetail
          ? ((a =
              c.trailingContent ??
              (null != c.trailingDetail
                ? (0, i.jsx)("span", {
                    className:
                      "max-w-1/2 min-w-0 shrink-0 truncate text-end text-sm text-codex-description select-none",
                    children: c.trailingDetail,
                  })
                : null)),
            (o[8] = c.trailingContent),
            (o[9] = c.trailingDetail),
            (o[10] = a))
          : (a = o[10]),
        o[11] !== c.allowLabelAndDetailToShrink ||
        o[12] !== c.detail ||
        o[13] !== c.detailElement ||
        o[14] !== c.detailSuffix ||
        o[15] !== c.label ||
        o[16] !== c.labelElement
          ? ((r =
              c.allowLabelAndDetailToShrink && null != c.detail
                ? (0, i.jsxs)("span", {
                    className: "flex min-w-0 shrink items-center gap-1",
                    children: [
                      (0, i.jsxs)("span", {
                        className: "flex min-w-0 shrink items-center gap-menu-row-content",
                        children: [
                          (0, i.jsx)("span", {
                            className: "min-w-0 shrink truncate",
                            children: c.labelElement ?? c.label,
                          }),
                          (0, i.jsx)("span", {
                            className: "min-w-0 shrink truncate text-sm text-codex-description",
                            children: c.detailElement ?? c.detail,
                          }),
                        ],
                      }),
                      null == c.detailSuffix
                        ? null
                        : (0, i.jsx)("span", {
                            className: "shrink-0 text-sm text-codex-description",
                            children: c.detailSuffix,
                          }),
                    ],
                  })
                : (0, i.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-menu-row-content",
                    children: [
                      (0, i.jsx)("span", {
                        className: (0, f.A)("min-w-0 truncate", null != c.detail && "shrink-0"),
                        children: c.labelElement ?? c.label,
                      }),
                      null == c.detail
                        ? null
                        : (0, i.jsx)("span", {
                            className: "min-w-0 flex-1 truncate text-sm text-codex-description",
                            children: c.detailElement ?? c.detail,
                          }),
                    ],
                  })),
            (o[11] = c.allowLabelAndDetailToShrink),
            (o[12] = c.detail),
            (o[13] = c.detailElement),
            (o[14] = c.detailSuffix),
            (o[15] = c.label),
            (o[16] = c.labelElement),
            (o[17] = r))
          : (r = o[17]),
        o[18] !== n || o[19] !== a || o[20] !== r
          ? ((s = (0, i.jsx)(v.s, { leftIcon: n, trailingContent: a, children: r })),
            (o[18] = n),
            (o[19] = a),
            (o[20] = r),
            (o[21] = s))
          : (s = o[21]),
        s
      )
    }
    var _ = n("GO7r"),
      A = n("Wf1j"),
      T = n("EShr")
    function L(e) {
      let t,
        n,
        a,
        r,
        s,
        u,
        d,
        p,
        m,
        h,
        g,
        f = (0, l.c)(25),
        { keyboardEventTarget: y, onSelect: v, peopleEnabled: I, selectedKey: b } = e,
        S = (0, A.A)(),
        w = (0, o.useRef)(null)
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            key: "all",
            name: (0, i.jsx)(c.A, {
              id: "composer.atMentionTabs.all",
              defaultMessage: "All",
              description: "Mention picker tab showing every category of results",
            }),
          }),
          (f[0] = t))
        : (t = f[0]),
        f[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = {
              key: "people",
              name: (0, i.jsx)(c.A, {
                id: "composer.atMentionTabs.people",
                defaultMessage: "People",
                description: "Mention picker tab filtering people results",
              }),
            }),
            (f[1] = n))
          : (n = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = {
              key: "files",
              name: (0, i.jsx)(c.A, {
                id: "composer.atMentionTabs.files",
                defaultMessage: "Files",
                description: "Mention picker tab filtering file results",
              }),
            }),
            (f[2] = a))
          : (a = f[2]),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = [
              t,
              n,
              a,
              {
                key: "chats",
                name: (0, i.jsx)(c.A, {
                  id: "composer.atMentionTabs.chats",
                  defaultMessage: "Chats",
                  description: "Mention picker tab filtering chat and task results",
                }),
              },
            ]),
            (f[3] = r))
          : (r = f[3]),
        f[4] !== I
          ? ((s = r.filter((e) => {
              let { key: t } = e
              return "people" !== t || I
            })),
            (f[4] = I),
            (f[5] = s))
          : (s = f[5]))
      let M = s
      f[6] !== y || f[7] !== v || f[8] !== b || f[9] !== M
        ? ((u = (e) => {
            if (
              e.defaultPrevented ||
              e.isComposing ||
              229 === e.keyCode ||
              e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              e.shiftKey ||
              ("ArrowLeft" !== e.key && "ArrowRight" !== e.key)
            )
              return
            ;(e.preventDefault(), e.stopPropagation())
            let t = y ?? window,
              n = null != w.current && "rtl" === t.getComputedStyle(w.current).direction,
              i = e.key === (n ? "ArrowLeft" : "ArrowRight"),
              l = M.findIndex((e) => {
                let { key: t } = e
                return t === b
              })
            v(M[(l + (i ? 1 : -1) + M.length) % M.length].key)
          }),
          (f[6] = y),
          (f[7] = v),
          (f[8] = b),
          (f[9] = M),
          (f[10] = u))
        : (u = f[10])
      let k = (0, o.useEffectEvent)(u)
      return (
        f[11] !== k || f[12] !== y
          ? ((d = () => {
              let e = y ?? window
              return (e.addEventListener("keydown", k, !0), () => e.removeEventListener("keydown", k, !0))
            }),
            (f[11] = k),
            (f[12] = y),
            (f[13] = d))
          : (d = f[13]),
        f[14] !== y ? ((p = [y]), (f[14] = y), (f[15] = p)) : (p = f[15]),
        (0, o.useEffect)(d, p),
        f[16] !== S
          ? ((m = S.formatMessage({
              id: "composer.atMentionTabs.label",
              defaultMessage: "Mention categories",
              description: "Accessible label for the mention picker category tabs",
            })),
            (f[16] = S),
            (f[17] = m))
          : (m = f[17]),
        f[18] !== M ? ((h = M.map(P)), (f[18] = M), (f[19] = h)) : (h = f[19]),
        f[20] !== v || f[21] !== b || f[22] !== h || f[23] !== m
          ? ((g = (0, i.jsx)("div", {
              ref: w,
              className: "p-1 select-none",
              role: "presentation",
              onMouseDown: C,
              children: (0, i.jsx)(T.T, { ariaLabel: m, onSelect: v, options: h, selectedId: b, variant: "filter" }),
            })),
            (f[20] = v),
            (f[21] = b),
            (f[22] = h),
            (f[23] = m),
            (f[24] = g))
          : (g = f[24]),
        g
      )
    }
    function P(e) {
      let { key: t, name: n } = e
      return { id: t, label: n }
    }
    function C(e) {
      return e.preventDefault()
    }
    var N = n("Qgfj")
    function E(e) {
      let t,
        n,
        a,
        r,
        s,
        o,
        c,
        u,
        d,
        p,
        m,
        h,
        f,
        y,
        v,
        I,
        b,
        S,
        M,
        k,
        x,
        _ = (0, l.c)(54)
      ;(_[0] !== e
        ? (({
            leadingItems: t,
            prioritizeLeadingItems: r,
            query: s,
            sections: o,
            source: u,
            selectedCategory: c,
            onSelectCategory: a,
            ...n
          } = e),
          (_[0] = e),
          (_[1] = t),
          (_[2] = n),
          (_[3] = a),
          (_[4] = r),
          (_[5] = s),
          (_[6] = o),
          (_[7] = c),
          (_[8] = u))
        : ((t = _[1]), (n = _[2]), (a = _[3]), (r = _[4]), (s = _[5]), (o = _[6]), (c = _[7]), (u = _[8])),
        _[9] !== o ? ((d = o.some(q)), (_[9] = o), (_[10] = d)) : (d = _[10]))
      let A = d,
        T = null == u,
        P = T && ("people" !== c || A) ? c : "all"
      if (
        _[11] !== P ||
        _[12] !== t ||
        _[13] !== n ||
        _[14] !== a ||
        _[15] !== A ||
        _[16] !== r ||
        _[17] !== s ||
        _[18] !== o ||
        _[19] !== T ||
        _[20] !== u
      ) {
        let e = (0, g._d)(
            "all" === P
              ? o
              : o.filter((e) => {
                  switch (P) {
                    case "chats":
                      return ["threads", "chatgpt-conversations"].includes(e.id)
                    case "files":
                      return ["pages", "files"].includes(e.id)
                    default:
                      return e.id === P
                  }
                }),
            u,
          ),
          l = e.filter($).map(U),
          c =
            "all" === P && null == u
              ? [
                  ...(0, g.Zg)([], s, t, r, "page").filter(j),
                  ...(function (e, t) {
                    let n = /\S\s+\S/u.test(t),
                      i = new Map()
                    for (let t of e) {
                      let e = t.id
                      ;(("pages" === e || t.titleValues?.scope === "Library") && (e = "files"),
                        ("threads" === e || "chatgpt-conversations" === e) && (e = "chats"))
                      let n = i.get(e)
                      null == n ? i.set(e, [t]) : n.push(t)
                    }
                    return Array.from(i, ([e, i]) => {
                      let l = (0, g.Zg)(
                          n && "people" !== e ? i.map((e) => ({ ...e, queryMatchMode: void 0 })) : i,
                          t,
                          [],
                          !1,
                          "page",
                          8,
                        ),
                        a = {
                          ...i[0],
                          id: e,
                          title: i[0].title,
                          showTitle: !0,
                          items: l.flatMap((e) => e.items),
                          isLoading: l.some((e) => e.isLoading),
                          isError: l.some((e) => e.isError),
                          emptyState: l.find((e) => null != e.emptyState)?.emptyState ?? null,
                        }
                      return (
                        "files" === e
                          ? (a.title = (0, N.zR)({
                              id: "pages.mentions.filesSection",
                              defaultMessage: "Files",
                              description: "Heading for Pages and Library files in Page mention search results",
                            }))
                          : "chats" === e &&
                            (a.title = (0, N.zR)({
                              id: "pages.mentions.chatsSection",
                              defaultMessage: "Chats",
                              description: "Heading for chats and tasks in Page mention search results",
                            })),
                        a
                      )
                    })
                  })(e, s),
                ]
              : (0, g.Zg)(
                  e,
                  s,
                  "all" !== P || (u?.kind === "at-mention-category" && "spaces" === u.category) ? [] : t,
                  r,
                  "page",
                  "all" !== P || u?.kind === "at-mention-category" ? 20 : void 0,
                )
        ;((p = w),
          _[32] !== P || _[33] !== s || _[34] !== u
            ? ((f = JSON.stringify([s, P, u])), (_[32] = P), (_[33] = s), (_[34] = u), (_[35] = f))
            : (f = _[35]),
          (y = n),
          (v = "user"),
          (I = e.some(O) ? n.footer : void 0),
          (b = "all" === P && null == u ? n.footerSectionId : void 0),
          (S = 0 === l.length ? void 0 : Array.from({ length: 3 }, (e, t) => l[t % l.length])),
          _[36] !== P || _[37] !== n || _[38] !== a || _[39] !== A || _[40] !== T
            ? ((M = T
                ? (0, i.jsx)(L, {
                    keyboardEventTarget: n.keyboardEventTarget,
                    onSelect: a,
                    peopleEnabled: A,
                    selectedKey: P,
                  })
                : null),
              (_[36] = P),
              (_[37] = n),
              (_[38] = a),
              (_[39] = A),
              (_[40] = T),
              (_[41] = M))
            : (M = _[41]),
          (k = "all" === P ? n.onRequestClose : void 0),
          (m = s),
          (h = "all" === P ? c : c.map(R)),
          (_[11] = P),
          (_[12] = t),
          (_[13] = n),
          (_[14] = a),
          (_[15] = A),
          (_[16] = r),
          (_[17] = s),
          (_[18] = o),
          (_[19] = T),
          (_[20] = u),
          (_[21] = p),
          (_[22] = m),
          (_[23] = h),
          (_[24] = f),
          (_[25] = y),
          (_[26] = v),
          (_[27] = I),
          (_[28] = b),
          (_[29] = S),
          (_[30] = M),
          (_[31] = k))
      } else
        ((p = _[21]),
          (m = _[22]),
          (h = _[23]),
          (f = _[24]),
          (y = _[25]),
          (v = _[26]),
          (I = _[27]),
          (b = _[28]),
          (S = _[29]),
          (M = _[30]),
          (k = _[31]))
      return (
        _[42] !== p ||
        _[43] !== m ||
        _[44] !== h ||
        _[45] !== f ||
        _[46] !== y ||
        _[47] !== v ||
        _[48] !== I ||
        _[49] !== b ||
        _[50] !== S ||
        _[51] !== M ||
        _[52] !== k
          ? ((x = (0, i.jsx)(
              p,
              {
                ...y,
                preserveHighlightOnItemsChange: v,
                footer: I,
                footerSectionId: b,
                loadingIcons: S,
                header: M,
                onRequestClose: k,
                query: m,
                sections: h,
              },
              f,
            )),
            (_[42] = p),
            (_[43] = m),
            (_[44] = h),
            (_[45] = f),
            (_[46] = y),
            (_[47] = v),
            (_[48] = I),
            (_[49] = b),
            (_[50] = S),
            (_[51] = M),
            (_[52] = k),
            (_[53] = x))
          : (x = _[53]),
        x
      )
    }
    function R(e) {
      return { ...e, showTitle: !1 }
    }
    function O(e) {
      return "people" === e.id
    }
    function j(e) {
      return e.items.length > 0
    }
    function U(e) {
      switch (e.id) {
        case "people":
          return (0, i.jsx)(_.ZDC, {}, e.id)
        case "spaces":
          return (0, i.jsx)(_.i2, {}, e.id)
        case "pages":
          return (0, i.jsx)(_.oQS, {}, e.id)
        case "files":
          return (0, i.jsx)(_.Z1A, {}, e.id)
        case "threads":
        case "chatgpt-conversations":
          return (0, i.jsx)(_.OHc, {}, e.id)
        default:
          return (0, i.jsx)(_.uxM, {}, e.id)
      }
    }
    function $(e) {
      return e.isLoading
    }
    function q(e) {
      return "people" === e.id
    }
    var H = n("OWtl"),
      z = n("WFY2"),
      K = n("GEsy"),
      D = n("xAmH"),
      W = n("KMx9")
    function G(e) {
      let t,
        n,
        a,
        r,
        s,
        o,
        c = (0, l.c)(55),
        {
          additionalSections: u,
          backgroundAgents: d,
          className: p,
          chromeVariant: h,
          closeOnNoResults: g,
          fixedSectionHeaders: f,
          footer: y,
          footerSectionId: v,
          excludedAgentConversationIds: I,
          excludedThreadReferences: b,
          getLocalConversationId: S,
          hostId: w,
          isHomeMenu: M,
          keyboardEventTarget: k,
          keyboardVariant: x,
          leadingItems: _,
          prioritizeLeadingItems: A,
          pluginHostId: T,
          onAddContext: L,
          onMentionInserted: P,
          onRequestClose: C,
          onUpdateSelectedMention: N,
          placement: E,
          query: R,
          rankingContext: O,
          fileSearchRootPaths: j,
          skillRoots: U,
          source: $,
          threadSearchRoots: q,
        } = e
      c[0] !== u ? ((t = void 0 === u ? [] : u), (c[0] = u), (c[1] = t)) : (t = c[1])
      let H = t
      c[2] !== d ? ((n = void 0 === d ? [] : d), (c[2] = d), (c[3] = n)) : (n = c[3])
      let z = n,
        K = void 0 === h ? "default" : h,
        D = void 0 !== f && f
      c[4] !== I ? ((a = void 0 === I ? [] : I), (c[4] = I), (c[5] = a)) : (a = c[5])
      let W = a
      c[6] !== b ? ((r = void 0 === b ? [] : b), (c[6] = b), (c[7] = r)) : (r = c[7])
      let G = r,
        B = void 0 !== M && M
      c[8] !== _ ? ((s = void 0 === _ ? [] : _), (c[8] = _), (c[9] = s)) : (s = c[9])
      let V = s,
        J = void 0 !== A && A,
        Y = void 0 === E ? "top" : E
      if ((0, m.Lo)($)) {
        let e
        return (
          c[10] !== K ||
          c[11] !== p ||
          c[12] !== g ||
          c[13] !== D ||
          c[14] !== w ||
          c[15] !== B ||
          c[16] !== k ||
          c[17] !== x ||
          c[18] !== L ||
          c[19] !== C ||
          c[20] !== N ||
          c[21] !== Y ||
          c[22] !== R ||
          c[23] !== $
            ? ((e = (0, i.jsx)(Q, {
                className: p,
                chromeVariant: K,
                closeOnNoResults: g,
                fixedSectionHeaders: D,
                hostId: w,
                isHomeMenu: B,
                keyboardEventTarget: k,
                keyboardVariant: x,
                onAddContext: L,
                onRequestClose: C,
                onUpdateSelectedMention: N,
                placement: Y,
                query: R,
                source: $,
              })),
              (c[10] = K),
              (c[11] = p),
              (c[12] = g),
              (c[13] = D),
              (c[14] = w),
              (c[15] = B),
              (c[16] = k),
              (c[17] = x),
              (c[18] = L),
              (c[19] = C),
              (c[20] = N),
              (c[21] = Y),
              (c[22] = R),
              (c[23] = $),
              (c[24] = e))
            : (e = c[24]),
          e
        )
      }
      return (
        c[25] !== H ||
        c[26] !== z ||
        c[27] !== K ||
        c[28] !== p ||
        c[29] !== g ||
        c[30] !== W ||
        c[31] !== G ||
        c[32] !== j ||
        c[33] !== D ||
        c[34] !== y ||
        c[35] !== v ||
        c[36] !== S ||
        c[37] !== w ||
        c[38] !== B ||
        c[39] !== k ||
        c[40] !== x ||
        c[41] !== V ||
        c[42] !== L ||
        c[43] !== P ||
        c[44] !== C ||
        c[45] !== N ||
        c[46] !== Y ||
        c[47] !== T ||
        c[48] !== J ||
        c[49] !== R ||
        c[50] !== O ||
        c[51] !== U ||
        c[52] !== $ ||
        c[53] !== q
          ? ((o = (0, i.jsx)(F, {
              additionalSections: H,
              backgroundAgents: z,
              className: p,
              chromeVariant: K,
              closeOnNoResults: g,
              fixedSectionHeaders: D,
              footer: y,
              footerSectionId: v,
              excludedAgentConversationIds: W,
              excludedThreadReferences: G,
              getLocalConversationId: S,
              hostId: w,
              isHomeMenu: B,
              keyboardEventTarget: k,
              keyboardVariant: x,
              leadingItems: V,
              prioritizeLeadingItems: J,
              pluginHostId: T,
              onAddContext: L,
              onMentionInserted: P,
              onRequestClose: C,
              onUpdateSelectedMention: N,
              placement: Y,
              query: R,
              rankingContext: O,
              fileSearchRootPaths: j,
              skillRoots: U,
              source: $,
              threadSearchRoots: q,
            })),
            (c[25] = H),
            (c[26] = z),
            (c[27] = K),
            (c[28] = p),
            (c[29] = g),
            (c[30] = W),
            (c[31] = G),
            (c[32] = j),
            (c[33] = D),
            (c[34] = y),
            (c[35] = v),
            (c[36] = S),
            (c[37] = w),
            (c[38] = B),
            (c[39] = k),
            (c[40] = x),
            (c[41] = V),
            (c[42] = L),
            (c[43] = P),
            (c[44] = C),
            (c[45] = N),
            (c[46] = Y),
            (c[47] = T),
            (c[48] = J),
            (c[49] = R),
            (c[50] = O),
            (c[51] = U),
            (c[52] = $),
            (c[53] = q),
            (c[54] = o))
          : (o = c[54]),
        o
      )
    }
    function F(e) {
      let t,
        n,
        a,
        r,
        s,
        c,
        u,
        d,
        p,
        m,
        h,
        f,
        y,
        v,
        I,
        b,
        S,
        M,
        k,
        x,
        _,
        A,
        T,
        L,
        P,
        C,
        N = (0, l.c)(58)
      N[0] !== e
        ? (({
            additionalSections: t,
            backgroundAgents: a,
            excludedAgentConversationIds: r,
            excludedThreadReferences: s,
            getLocalConversationId: u,
            hostId: d,
            onMentionInserted: m,
            leadingItems: p,
            prioritizeLeadingItems: f,
            pluginHostId: h,
            query: y,
            rankingContext: v,
            fileSearchRootPaths: c,
            skillRoots: I,
            source: b,
            threadSearchRoots: S,
            ...n
          } = e),
          (N[0] = e),
          (N[1] = t),
          (N[2] = n),
          (N[3] = a),
          (N[4] = r),
          (N[5] = s),
          (N[6] = c),
          (N[7] = u),
          (N[8] = d),
          (N[9] = p),
          (N[10] = m),
          (N[11] = h),
          (N[12] = f),
          (N[13] = y),
          (N[14] = v),
          (N[15] = I),
          (N[16] = b),
          (N[17] = S))
        : ((t = N[1]),
          (n = N[2]),
          (a = N[3]),
          (r = N[4]),
          (s = N[5]),
          (c = N[6]),
          (u = N[7]),
          (d = N[8]),
          (p = N[9]),
          (m = N[10]),
          (h = N[11]),
          (f = N[12]),
          (y = N[13]),
          (v = N[14]),
          (I = N[15]),
          (b = N[16]),
          (S = N[17]))
      let [R, O] = (0, o.useState)("all")
      b?.kind === "at-mention-category"
        ? (M = b.category)
        : "page" === v && null == b && (M = "files" === R ? "pages" : R)
      let j = "page" === v
      N[18] !== s || N[19] !== d || N[20] !== y || N[21] !== j || N[22] !== S
        ? ((k = { excludedThreadReferences: s, hostId: d, query: y, roots: S, searchTitlesOnly: j }),
          (N[18] = s),
          (N[19] = d),
          (N[20] = y),
          (N[21] = j),
          (N[22] = S),
          (N[23] = k))
        : (k = N[23])
      let U = (0, W.q)(k)
      N[24] !== a ||
      N[25] !== r ||
      N[26] !== M ||
      N[27] !== c ||
      N[28] !== u ||
      N[29] !== d ||
      N[30] !== m ||
      N[31] !== h ||
      N[32] !== y ||
      N[33] !== I ||
      N[34] !== U
        ? ((x = {
            expandedCategory: M,
            backgroundAgents: a,
            excludedAgentConversationIds: r,
            getLocalConversationId: u,
            hostId: d,
            onMentionInserted: m,
            pluginHostId: h,
            query: y,
            roots: c,
            skillRoots: I,
            threadSource: U,
          }),
          (N[24] = a),
          (N[25] = r),
          (N[26] = M),
          (N[27] = c),
          (N[28] = u),
          (N[29] = d),
          (N[30] = m),
          (N[31] = h),
          (N[32] = y),
          (N[33] = I),
          (N[34] = U),
          (N[35] = x))
        : (x = N[35])
      let { sections: $ } = (0, D.jh)(x)
      if (
        N[36] !== t ||
        N[37] !== n ||
        N[38] !== p ||
        N[39] !== f ||
        N[40] !== y ||
        N[41] !== v ||
        N[42] !== $ ||
        N[43] !== R ||
        N[44] !== b
      ) {
        P = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            l = [...t, ...$]
          if ("page" === v) {
            P = (0, i.jsx)(E, {
              ...n,
              selectedCategory: R,
              onSelectCategory: O,
              leadingItems: p,
              prioritizeLeadingItems: f,
              query: y,
              sections: l,
              source: b,
            })
            break e
          }
          ;((_ = w),
            (A = n),
            (T = y),
            N[50] !== p || N[51] !== b
              ? ((e = b?.kind === "at-mention-category" && "spaces" === b.category ? [] : p),
                (N[50] = p),
                (N[51] = b),
                (N[52] = e))
              : (e = N[52]),
            (L = (0, g.Zg)((0, g._d)(l, b), y, e, f, v, b?.kind === "at-mention-category" ? 20 : void 0)))
        }
        ;((N[36] = t),
          (N[37] = n),
          (N[38] = p),
          (N[39] = f),
          (N[40] = y),
          (N[41] = v),
          (N[42] = $),
          (N[43] = R),
          (N[44] = b),
          (N[45] = _),
          (N[46] = A),
          (N[47] = T),
          (N[48] = L),
          (N[49] = P))
      } else ((_ = N[45]), (A = N[46]), (T = N[47]), (L = N[48]), (P = N[49]))
      return P !== Symbol.for("react.early_return_sentinel")
        ? P
        : (N[53] !== _ || N[54] !== A || N[55] !== T || N[56] !== L
            ? ((C = (0, i.jsx)(_, { ...A, query: T, sections: L })),
              (N[53] = _),
              (N[54] = A),
              (N[55] = T),
              (N[56] = L),
              (N[57] = C))
            : (C = N[57]),
          C)
    }
    function Q(e) {
      let t,
        n,
        a,
        o,
        g,
        f,
        y,
        v,
        I,
        b,
        S,
        M,
        k = (0, l.c)(29)
      k[0] !== e
        ? (({ hostId: n, query: a, source: g, servers: o, ...t } = e),
          (k[0] = e),
          (k[1] = t),
          (k[2] = n),
          (k[3] = a),
          (k[4] = o),
          (k[5] = g))
        : ((t = k[1]), (n = k[2]), (a = k[3]), (o = k[4]), (g = k[5]))
      let x = (0, s.gh)(H.u),
        _ = null == o
      k[6] !== _ ? ((f = { enabled: _ }), (k[6] = _), (k[7] = f)) : (f = k[7])
      let A = (0, s._U)(h.iS, n, f)
      ;(k[8] !== g.mentionProviders || k[9] !== g.mentionSearchTool || k[10] !== g.server
        ? ((y = (e) => {
            let { mentionSearchTool: t, server: n } = e
            return null == g.mentionProviders
              ? t === g.mentionSearchTool && n === g.server
              : g.mentionProviders.some((e) => e.mentionSearchTool === t && e.server === n)
          }),
          (k[8] = g.mentionProviders),
          (k[9] = g.mentionSearchTool),
          (k[10] = g.server),
          (k[11] = y))
        : (y = k[11]),
        k[12] !== n || k[13] !== x
          ? ((v = (e) => ({ ...e, identity: (0, d.Aj)(x, { ...e, hostId: n }) })),
            (k[12] = n),
            (k[13] = x),
            (k[14] = v))
          : (v = k[14]))
      let T = r()((o ?? A).filter(y), V).map(v),
        L = (0, s.Ul)(u.$7) && "codex_apps" === g.server && "Library" === g.title,
        P = (0, K.o)(L ? a : "", 300),
        C = L ? P : a,
        N = T.length > 0 && (!L || (a.trim().length > 0 && C.trim().length > 0))
      k[15] !== N ? ((I = { enabled: N }), (k[15] = N), (k[16] = I)) : (I = k[16])
      let E = (0, s._U)(p.Yb, { hostId: n, query: C, servers: T }, I),
        R = (0, m.e6)({
          isLoading: C !== a || E.isLoading,
          mentionSource: g,
          query: a,
          results: C === a ? E.data : void 0,
          servers: T,
        }),
        O = a.trim().length > 0 || R.some(B)
      return (
        k[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsx)(c.A, {
              id: "composer.atMentionList.noResourceResults",
              defaultMessage: "No results found",
              description: "Shown when the selected app or MCP server has no resource search results for the query",
            })),
            (k[17] = b))
          : (b = k[17]),
        k[18] !== t || k[19] !== n || k[20] !== g.server
          ? ((S = (e) => {
              ;(z.v.info("Selected app mention", { safe: {}, sensitive: { hostId: n, server: g.server } }),
                t.onAddContext(e))
            }),
            (k[18] = t),
            (k[19] = n),
            (k[20] = g.server),
            (k[21] = S))
          : (S = k[21]),
        k[22] !== w || k[23] !== t || k[24] !== a || k[25] !== R || k[26] !== S || k[27] !== O
          ? ((M = (0, i.jsx)(w, {
              ...t,
              density: "compact",
              isActive: O,
              noResults: b,
              onAddContext: S,
              query: a,
              sections: R,
            })),
            (k[22] = w),
            (k[23] = t),
            (k[24] = a),
            (k[25] = R),
            (k[26] = S),
            (k[27] = O),
            (k[28] = M))
          : (M = k[28]),
        M
      )
    }
    function B(e) {
      return e.items.length > 0
    }
    function V(e) {
      let { server: t, mentionSearchTool: n } = e
      return JSON.stringify([t, n])
    }
  },
  nRNm(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      a = n("zd8w"),
      r = n("UN1G")
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            n,
            s,
            o,
            c,
            u,
            d = (0, l.c)(15),
            { text: p, query: m, shouldAdjustStart: h } = e,
            g = void 0 !== h && h
          if (d[0] !== m || d[1] !== g || d[2] !== p) {
            c = Symbol.for("react.early_return_sentinel")
            e: {
              let e = (0, r.d7)(p, m)
              if (null == e || 0 === e.length) {
                let e
                ;(d[8] !== p ? ((e = (0, i.jsx)(i.Fragment, { children: p })), (d[8] = p), (d[9] = e)) : (e = d[9]),
                  (c = e))
                break e
              }
              let l = g ? e[0].startOffset - Array.from(p.slice(0, e[0].startOffset)).slice(-8).join("").length : 0
              ;((t = "text-codex-description"),
                (n = l > 0 ? "…" : ""),
                (s = e.map((t, n) => {
                  let { startOffset: r, endOffset: s } = t
                  return (0, i.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        p.slice(0 === n ? l : e[n - 1].endOffset, r),
                        (0, i.jsx)("span", { className: "text-default", children: p.slice(r, s) }),
                      ],
                    },
                    r,
                  )
                })),
                (o = p.slice(e[e.length - 1].endOffset)))
            }
            ;((d[0] = m), (d[1] = g), (d[2] = p), (d[3] = t), (d[4] = n), (d[5] = s), (d[6] = o), (d[7] = c))
          } else ((t = d[3]), (n = d[4]), (s = d[5]), (o = d[6]), (c = d[7]))
          return c !== Symbol.for("react.early_return_sentinel")
            ? c
            : (d[10] !== t || d[11] !== n || d[12] !== s || d[13] !== o
                ? ((u = (0, i.jsxs)("span", { className: t, children: [n, s, o] })),
                  (d[10] = t),
                  (d[11] = n),
                  (d[12] = s),
                  (d[13] = o),
                  (d[14] = u))
                : (u = d[14]),
              u)
        },
      },
    )
  },
  VaJ5(e, t, n) {
    var i = n("Qgfj"),
      l = n("UN1G")
    function a(e, t, n, s = 8) {
      let o = t.trim(),
        c = o.toLowerCase(),
        u = (0, l.WE)(o),
        d = [],
        p = 0
      for (let t of e)
        for (let e of t.items) {
          let i = p++,
            l = (function (e, t, n, i) {
              if ("page" === i && "people" === e) return -2
              if ("page" === i && ("pages" === e || "spaces" === e)) return -1
              if (
                ("plugins" === e || "native-apps" === e) &&
                [t.label, ...(t.searchTerms ?? [])].some((e) => e.toLowerCase().startsWith(n))
              ) {
                if ("plugins" === e) return 0
                if ("native-apps" === e) return 1
              }
              return ["chatgpt-conversations", "files", "sites", "threads"].includes(e) ? 3 : 2
            })(t.id, e, c, n)
          if (d.length === s && l > d[s - 1].priority) continue
          let a = "source-ranked" === t.queryMatchMode,
            m = u(e.label),
            h = ("threads" === t.id ? m : 0) || (a ? 1 : r(e, u, m)),
            g = a ? 0 : Math.max(0, ...(e.searchKeywords ?? []).map(u))
          if (!a && o.length > 0 && 0 === h && 0 === g) continue
          let f = { index: i, item: e, priority: l, score: h, keywordScore: g },
            y = d.findIndex((e) => {
              var t, n
              return (
                0 >
                ((t = f),
                (n = e),
                t.priority - n.priority || n.score - t.score || n.keywordScore - t.keywordScore || t.index - n.index)
              )
            })
          ;-1 === y ? d.length < s && d.push(f) : (d.splice(y, 0, f), d.length > s && d.pop())
        }
      let m = d.map(({ item: e }) => e),
        h = e.some((e) => e.isLoading),
        g = e.find((e) => null != e.emptyState)?.emptyState ?? null
      return (
        m.length > 0
          ? (g = null)
          : h &&
            (g = (0, i.zR)({
              id: "composer.atMentionList.searching",
              defaultMessage: "Searching…",
              description: "Shown while the global @ mention search is waiting for results",
            })),
        {
          id: "search-results",
          title: (0, i.zR)({
            id: "composer.atMentionList.searchResults",
            defaultMessage: "Results",
            description: "Hidden title for globally ranked @ mention search results",
          }),
          items: m,
          emptyState: g,
          isError: e.some((e) => e.isError),
          isLoading: h,
          showTitle: !1,
        }
      )
    }
    function r(e, t, n) {
      let i = n
      for (let n of e.searchTerms ?? []) i = Math.max(i, t(n))
      return i
    }
    n.d(
      t,
      {},
      {
        Zg: function (e, t, n = [], s = !1, o, c = 8) {
          let u = (0, l.WE)(t),
            d =
              0 === t.trim().length
                ? n
                : n.filter((e) => r(e, u, u(e.label)) > 0 || (e.searchKeywords?.some((e) => u(e) > 0) ?? !1)),
            p = d[0]?.group,
            m =
              0 === d.length
                ? e
                : [
                    {
                      id: "context-actions",
                      title:
                        null != p && d.every((e) => e.group === p)
                          ? p
                          : (0, i.zR)({
                              id: "composer.atMentionList.contextActions",
                              defaultMessage: "Add",
                              description: "Section heading for actions available from the composer @ menu",
                            }),
                      items: d,
                      emptyState: null,
                      isLoading: !1,
                    },
                    ...e,
                  ]
          if (0 === t.trim().length) {
            if ("page" === o) {
              let e = m.filter((e) => "files" === e.id),
                t = m.filter((e) => "files" !== e.id),
                n = t.findIndex((e) => "plugins" === e.id)
              if (-1 !== n) return (t.splice(n + 1, 0, ...e), t)
            }
            return m
          }
          if (s && d.length > 0) {
            let n = a(e, t, o, c)
            return [{ ...n, emptyState: null, items: [...d, ...n.items].slice(0, c) }]
          }
          return [a(m, t, o, c)]
        },
        _d: function (e, t) {
          return t?.kind !== "at-mention-category"
            ? e
            : e.flatMap((e) => {
                switch (t.category) {
                  case "pages":
                  case "spaces":
                    return e.id === t.category ? [e] : []
                  case "chats":
                    return ["threads", "chatgpt-conversations"].includes(e.id) ? [e] : []
                  case "files": {
                    if ("files" === e.id || e.titleValues?.scope === "Library") return [e]
                    let t = e.items.filter(
                      (e) =>
                        ("mention" === e.type || "submenu" === e.type) &&
                        e.submenu?.kind === "mcp-extension" &&
                        "Library" === e.submenu.title,
                    )
                    return 0 === t.length ? [] : [{ ...e, items: t }]
                  }
                }
              })
        },
      },
    )
  },
  cRTP(e, t, n) {
    n.d(
      t,
      {},
      {
        V: function (e, { onAtMention: t, onSkillMention: n }) {
          switch (e.kind) {
            case "at-mention":
              return void t("submit" === e.type ? e.action : "close")
            case "skill-mention":
              return void n(e.type)
            case "browser-autocomplete":
            case "emoji":
            case "slash-command":
              return
          }
        },
      },
    )
  },
  FGAu(e, t, n) {
    var i = n("o6hs"),
      l = n("oXug")
    n.d(
      t,
      {},
      {
        E: function ({ server: e, connectorId: t }) {
          return "codex_apps" === e && ((0, l._t)(t) || t === i.hk)
        },
      },
    )
  },
  xAmH(e, t, n) {
    n.d(t, { jh: () => er, aw: () => es, Cu: () => eo })
    var i = n("QosV"),
      l = n("zTeN"),
      a = n("DBCl"),
      r = n("Qgfj"),
      s = n("HxmM"),
      o = n("BI7S"),
      c = n("T0Rc"),
      u = n("Wf1j"),
      d = n("ChYf"),
      p = n("Ghh3"),
      m = n("fHS7"),
      h = n("YWcr"),
      g = n("Ynxh"),
      f = n("OWtl"),
      y = n("rvFo"),
      v = n("GEsy"),
      I = n("OtLV"),
      b = n("oU3c"),
      S = n("LCGF"),
      w = n("QmkR")
    let M = { sections: [] }
    function k(e) {
      return { conversationId: e.conversation_id, title: e.title }
    }
    function x(e) {
      return { conversationId: e.id, mapping: e.mapping, title: e.title }
    }
    function _(e) {
      return { conversationId: e.id, mapping: e.mapping, title: e.title }
    }
    function A(e) {
      return e.items
    }
    var T = n("PgCv"),
      L = n("tl2n"),
      P = n("u0X2"),
      C = n("Qm75"),
      N = n("qfej"),
      E = n("Wv1R"),
      R = n("Rw2H"),
      O = n("ueue"),
      j = n("B81s"),
      U = n("Sd8U"),
      $ = n("KUdL"),
      q = n.n($),
      H = n("zd8w"),
      z = n("UN1G"),
      K = n("yP7T")
    function D(e) {
      switch (e.status) {
        case "active":
          if (null != e.statusSummary) return e.statusSummary
          return "Thinking"
        case "waiting":
          return "Waiting"
        case "done":
          return "Done"
      }
    }
    var W = n("Wyro"),
      G = n.n(W),
      F = n("FGAu"),
      Q = n("Lmwk"),
      B = n("FdGo"),
      V = n("GVrb"),
      J = n("e5oX"),
      Y = n("Rxfy"),
      X = n("Sdx1"),
      Z = n("pNUK"),
      ee = n("MQKw"),
      et = n("hbRe"),
      en = n("bPa2"),
      ei = n("RHhA"),
      el = n("lp74"),
      ea = n("QfTn")
    function er(e) {
      let t,
        n,
        l = (0, i.c)(11)
      l[0] !== e.query ? ((t = { query: e.query }), (l[0] = e.query), (l[1] = t)) : (t = l[1])
      let a = (0, s.Y)(t),
        r = e.skillRoots ?? e.roots
      return (
        l[2] !== e.excludedPluginId ||
        l[3] !== e.getLocalConversationId ||
        l[4] !== e.hostId ||
        l[5] !== e.onMentionInserted ||
        l[6] !== e.pluginHostId ||
        l[7] !== e.query ||
        l[8] !== a ||
        l[9] !== r
          ? ((n = {
              getLocalConversationId: e.getLocalConversationId,
              excludedPluginId: e.excludedPluginId,
              hostId: e.hostId,
              onMentionInserted: e.onMentionInserted,
              pluginHostId: e.pluginHostId,
              query: e.query,
              roots: r,
              sitesSource: a,
            }),
            (l[2] = e.excludedPluginId),
            (l[3] = e.getLocalConversationId),
            (l[4] = e.hostId),
            (l[5] = e.onMentionInserted),
            (l[6] = e.pluginHostId),
            (l[7] = e.query),
            (l[8] = a),
            (l[9] = r),
            (l[10] = n))
          : (n = l[10]),
        ec(e, (0, J.L)(n), null)
      )
    }
    function es(e) {
      let t,
        n,
        a,
        r,
        s,
        c,
        u = (0, i.c)(21),
        d = (0, l.gh)(U.PR),
        p = e.skillRoots ?? e.roots,
        m = "work" === e.rankingContext ? "" : e.query
      u[0] !== e.excludedPluginId ||
      u[1] !== e.hostId ||
      u[2] !== e.pluginHostId ||
      u[3] !== e.query ||
      u[4] !== p ||
      u[5] !== m
        ? ((t = {
            hostId: e.hostId,
            excludedPluginId: e.excludedPluginId,
            pluginHostId: e.pluginHostId,
            roots: p,
            sitesQuery: e.query,
            pluginQuery: m,
          }),
          (u[0] = e.excludedPluginId),
          (u[1] = e.hostId),
          (u[2] = e.pluginHostId),
          (u[3] = e.query),
          (u[4] = p),
          (u[5] = m),
          (u[6] = t))
        : (t = u[6])
      let h = eo(t)
      u[7] !== e.query ? ((n = { query: e.query }), (u[7] = e.query), (u[8] = n)) : (n = u[8])
      let g = (0, Q.p)(n)
      ;(u[9] !== e.getLocalConversationId || u[10] !== d
        ? ((a = e.getLocalConversationId ?? (() => (0, U.ah)(d))),
          (u[9] = e.getLocalConversationId),
          (u[10] = d),
          (u[11] = a))
        : (a = u[11]),
        u[12] !== d ? ((r = (e) => (0, o.ir)({ scope: d, path: e })), (u[12] = d), (u[13] = r)) : (r = u[13]),
        u[14] !== e || u[15] !== a || u[16] !== r
          ? ((s = { ...e, getLocalConversationId: a, onMentionInserted: r }),
            (u[14] = e),
            (u[15] = a),
            (u[16] = r),
            (u[17] = s))
          : (s = u[17]))
      let f = ec(s, h, g)
      return (
        u[18] !== h.mentionablePlugins || u[19] !== f
          ? ((c = { ...f, mentionablePlugins: h.mentionablePlugins }),
            (u[18] = h.mentionablePlugins),
            (u[19] = f),
            (u[20] = c))
          : (c = u[20]),
        c
      )
    }
    function eo(e) {
      let t,
        n,
        a,
        r,
        c,
        u = (0, i.c)(17),
        { excludedPluginId: d, hostId: p, pluginHostId: m, roots: h, sitesQuery: g, pluginQuery: f } = e,
        y = (0, l.gh)(U.PR)
      u[0] !== g ? ((t = { query: g }), (u[0] = g), (u[1] = t)) : (t = u[1])
      let v = (0, s.Y)(t)
      return (
        u[2] !== y
          ? ((n = () => ("chatgpt" === y.value.kind ? y.value.conversationId : null)),
            (a = () => (0, U.ah)(y)),
            (u[2] = y),
            (u[3] = n),
            (u[4] = a))
          : ((n = u[3]), (a = u[4])),
        u[5] !== y ? ((r = (e) => (0, o.ir)({ scope: y, path: e })), (u[5] = y), (u[6] = r)) : (r = u[6]),
        u[7] !== d ||
        u[8] !== p ||
        u[9] !== m ||
        u[10] !== f ||
        u[11] !== h ||
        u[12] !== v ||
        u[13] !== n ||
        u[14] !== a ||
        u[15] !== r
          ? ((c = {
              getChatGptConversationId: n,
              getLocalConversationId: a,
              excludedPluginId: d,
              hostId: p,
              onMentionInserted: r,
              pluginHostId: m,
              query: f,
              roots: h,
              sitesSource: v,
            }),
            (u[7] = d),
            (u[8] = p),
            (u[9] = m),
            (u[10] = f),
            (u[11] = h),
            (u[12] = v),
            (u[13] = n),
            (u[14] = a),
            (u[15] = r),
            (u[16] = c))
          : (c = u[16]),
        (0, J.L)(c)
      )
    }
    function ec(e, t, n) {
      let s,
        o,
        U,
        $,
        W,
        Q,
        J,
        er,
        es,
        eo,
        ec,
        eh,
        eg,
        ef = (0, i.c)(46),
        {
          expandedCategory: ey,
          backgroundAgents: ev,
          excludedAgentConversationIds: eI,
          excludedPluginId: eb,
          getLocalConversationId: eS,
          hostId: ew,
          onMentionInserted: eM,
          roots: ek,
          skillRoots: ex,
          threadSource: e_,
          pluginHostId: eA,
          query: eT,
        } = e,
        eL = void 0 === ev ? [] : ev,
        eP = void 0 === eI ? [] : eI,
        eC = void 0 === e_ ? null : e_,
        eN = void 0 === eA ? ew : eA,
        eE = (0, l.gh)(f.u),
        eR = (0, T.d)()
      ef[0] !== eT ? ((s = eT.trim()), (ef[0] = eT), (ef[1] = s)) : (s = ef[1])
      let eO = s.length > 0,
        ej = (0, v.o)(eT, 100)
      ef[2] !== eS ? ((o = eS?.() ?? null), (ef[2] = eS), (ef[3] = o)) : (o = ef[3])
      let eU = ej !== eT
      ef[4] !== ej || ef[5] !== ew || ef[6] !== ek || ef[7] !== o || ef[8] !== eU
        ? ((U = { conversationId: o, hostId: ew, query: ej, roots: ek, isQueryPending: eU }),
          (ef[4] = ej),
          (ef[5] = ew),
          (ef[6] = ek),
          (ef[7] = o),
          (ef[8] = eU),
          (ef[9] = U))
        : (U = ef[9])
      let e$ = (0, V.C)(U)
      ef[10] !== ew || ef[11] !== eE
        ? (($ = (e) => ({ ...e, identity: (0, P.Aj)(eE, { ...e, hostId: ew }) })),
          (ef[10] = ew),
          (ef[11] = eE),
          (ef[12] = $))
        : ($ = ef[12])
      let eq = (0, l._U)(E.iS, ew).map($),
        eH = (0, l._U)(
          C.iv,
          eN !== a.iwv &&
            eq.some((e) => {
              let { connectorId: n, pluginId: i } = e
              return (
                null == i &&
                null != n &&
                !t.mentionablePlugins.some((e) => {
                  let { canonicalAppId: t, appIds: i } = e
                  return t === n || i?.includes(n)
                })
              )
            })
            ? t.mentionablePlugins
                .filter(em)
                .map((e) => ({
                  pluginId: e.plugin.id,
                  query: {
                    hostId: eN,
                    marketplacePath: e.marketplacePath,
                    pluginName: (0, O.R9)(e).pluginName,
                    remoteMarketplaceName: e.remoteMarketplaceName ?? null,
                  },
                }))
            : [],
        ),
        ez = (0, l.Ul)(L.$7),
        eK = eq.filter(F.E),
        eD = eK[0],
        eW = ez ? eq.find(ep) : void 0,
        eG = (0, v.o)(null == eW ? "" : eT, 300),
        eF = null == eW ? ej : eG,
        eQ = null == eW ? [] : [eW],
        eB = eQ.length > 0 && eT.trim().length >= 2 && eG.trim().length >= 2
      ef[13] !== eB ? ((W = { enabled: eB }), (ef[13] = eB), (ef[14] = W)) : (W = ef[14])
      let eV = (0, l._U)(C.QJ, { hostId: ew, query: eG, servers: eQ }, W),
        eJ = eK.length > 0 && eO && eF.trim().length > 0
      ef[15] !== eJ ? ((Q = { enabled: eJ }), (ef[15] = eJ), (ef[16] = Q)) : (Q = ef[16])
      let eY = (0, l._U)(C.QJ, { hostId: ew, query: eF, servers: eK }, Q),
        eX = (0, N.Zb)({
          pluginAppIds: eH,
          plugins: t.mentionablePlugins,
          sections: t.sections,
          query: eT,
          servers: eq.filter((e) => !eK.includes(e)),
        }),
        eZ =
          eO && null != eD
            ? (0, N.e6)({
                isLoading: eF !== eT || eY.isLoading,
                mentionSource: {
                  kind: "mcp-extension",
                  mentionSearchTool: eD.mentionSearchTool,
                  server: eD.server,
                  title: eD.title,
                },
                results: eF === eT ? eY.data : void 0,
                servers: eK,
              }).map(ed)
            : [],
        e0 =
          eT.trim().length >= 2 && null != eW
            ? (0, N.e6)({
                isLoading: eG !== eT || eV.isLoading,
                mentionSource: {
                  kind: "mcp-extension",
                  mentionSearchTool: eW.mentionSearchTool,
                  server: eW.server,
                  title: eW.title,
                },
                results: eG === eT ? eV.data : void 0,
                servers: eQ,
              }).map((e) => ({
                ...e,
                items: e.items.slice(0, 5).map((e) => ({ ...e, detail: eW.title })),
                queryMatchMode: "source-ranked",
              }))
            : [],
        e1 = ew === a.iwv ? "local" : ew
      ef[17] !== eM ||
      ef[18] !== t.arePluginsLoading ||
      ef[19] !== t.mentionablePlugins ||
      ef[20] !== t.systemHintsByMentionPath ||
      ef[21] !== eT ||
      ef[22] !== e1
        ? ((J = {
            arePluginsLoading: t.arePluginsLoading,
            onMentionInserted: eM,
            hostId: e1,
            plugins: t.mentionablePlugins,
            query: eT,
            systemHintsByMentionPath: t.systemHintsByMentionPath,
          }),
          (ef[17] = eM),
          (ef[18] = t.arePluginsLoading),
          (ef[19] = t.mentionablePlugins),
          (ef[20] = t.systemHintsByMentionPath),
          (ef[21] = eT),
          (ef[22] = e1),
          (ef[23] = J))
        : (J = ef[23])
      let e2 = (0, B.o)(J)
      ;(ef[24] !== eS ? ((er = eS?.() ?? null), (ef[24] = eS), (ef[25] = er)) : (er = ef[25]),
        ef[26] !== t.mentionablePlugins
          ? ((es = new Set(t.mentionablePlugins.map(eu))), (ef[26] = t.mentionablePlugins), (ef[27] = es))
          : (es = ef[27]),
        ef[28] !== eb ||
        ef[29] !== ew ||
        ef[30] !== t.arePluginsLoading ||
        ef[31] !== eT ||
        ef[32] !== ex ||
        ef[33] !== er ||
        ef[34] !== es
          ? ((eo = {
              excludedPluginId: eb,
              conversationId: er,
              arePluginsLoading: t.arePluginsLoading,
              hostId: ew,
              mentionablePluginNames: es,
              query: eT,
              roots: ex,
            }),
            (ef[28] = eb),
            (ef[29] = ew),
            (ef[30] = t.arePluginsLoading),
            (ef[31] = eT),
            (ef[32] = ex),
            (ef[33] = er),
            (ef[34] = es),
            (ef[35] = eo))
          : (eo = ef[35]))
      let e3 = (function (e) {
          var t, n, l
          let a,
            s,
            o,
            c,
            u,
            d,
            p = (0, i.c)(18),
            {
              arePluginsLoading: m,
              conversationId: g,
              excludedPluginId: f,
              hostId: y,
              mentionablePluginNames: v,
              query: I,
              roots: b,
            } = e,
            S = I.trim(),
            w = (0, z.WE)(S),
            M = S.length > 0
          p[0] !== g || p[1] !== M
            ? ((a = { enabled: M, conversationId: g }), (p[0] = g), (p[1] = M), (p[2] = a))
            : (a = p[2])
          let { skills: k, hostId: x, isLoading: _ } = (0, en.a)(b, y, a)
          p[3] !== M || p[4] !== k ? ((s = M ? k : []), (p[3] = M), (p[4] = k), (p[5] = s)) : (s = p[5])
          let { data: A } = (0, X.H)(s, x)
          p[6] !== A
            ? ((o = (e) => {
                let t = A?.get(e.path)?.galleryKind,
                  n = t ? (0, Y.c)(t) : null
                return [e.path, n ? (0, Y.uk)(n) : []]
              }),
              (p[6] = A),
              (p[7] = o))
            : (o = p[7])
          let T = new Map(k.map(o)),
            L = (0, ei.t)()
          if (!M) {
            let e
            return (
              p[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (p[8] = e)) : (e = p[8]),
              e
            )
          }
          let P =
              ((t = k
                .filter(
                  (e) =>
                    (null == f || e.pluginId !== f) &&
                    (function (e, t, n, i = null) {
                      if (!e.enabled || !(0, ea.b)(e, i)) return !1
                      let l = (0, Z.F)(e.path)?.pluginId
                      return null == l || (!n && !t.has(l))
                    })(e, v, m, L),
                )
                .filter((e) =>
                  (function (e, t, n) {
                    let i = t.trim().toLowerCase()
                    if (0 === i.length) return !0
                    let l = (0, et.nf)(e)
                    return [...(n.get(e.path) ?? []), e.name, l, `@${l}`].some((e) => e.toLowerCase().includes(i))
                  })(e, S, T),
                )),
              (n = w),
              (l = T),
              q()(
                t.map((e, t) => {
                  var i, a, r
                  let s
                  return {
                    skill: e,
                    score:
                      ((i = e),
                      (a = n),
                      (r = l),
                      (s = (0, et.nf)(i)),
                      Math.max(...(r.get(i.path) ?? []).map(a), a(i.name), a(s), a(`@${s}`))),
                    index: t,
                  }
                }),
                [(e) => -e.score, (e) => (0, et.nf)(e.skill), (e) => e.index],
              ).map((e) => e.skill)),
            C = _ && 0 === P.length
          if (0 === P.length && !C) {
            let e
            return (
              p[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (p[9] = e)) : (e = p[9]),
              e
            )
          }
          p[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, r.zR)({
                id: "composer.atMentionList.skills",
                defaultMessage: "Skills",
                description: "Section header for skill results in the @ mention list.",
              })),
              (p[10] = c))
            : (c = p[10])
          let N = P.map((e) => {
            let t = A?.get(e.path)?.galleryKind,
              n = t ? (0, Y.c)(t) : null,
              i = n ? (0, Y.eA)(n) : void 0,
              l = (0, h.GZ)(e, i)
            return {
              key: `skill:${l.path}`,
              label: l.displayName,
              detail: (0, ee.a)(e),
              searchTerms: [e.name, `@${l.displayName}`, ...(T.get(e.path) ?? [])],
              icon: (0, el.h)(i),
              type: "mention",
              insertMention: (e) => {
                let { composerController: t, mentionState: n } = e
                t.insertMention(l, n)
              },
            }
          })
          return (
            p[11] !== C
              ? ((u = C
                  ? (0, r.zR)({
                      id: "composer.atMentionList.skillsLoading",
                      defaultMessage: "Loading skills…",
                      description:
                        "Shown in the skills section when skill discovery is loading and no results have arrived yet",
                    })
                  : null),
                (p[11] = C),
                (p[12] = u))
              : (u = p[12]),
            p[13] !== _ || p[14] !== c || p[15] !== N || p[16] !== u
              ? ((d = { sections: [{ id: "skills", title: c, items: N, emptyState: u, isLoading: _ }] }),
                (p[13] = _),
                (p[14] = c),
                (p[15] = N),
                (p[16] = u),
                (p[17] = d))
              : (d = p[17]),
            d
          )
        })(eo),
        e4 = "pages" === ey || "spaces" === ey ? ey : void 0,
        e5 = "pages" === ey || "spaces" === ey
      ef[36] !== ej || ef[37] !== eT || ef[38] !== e4 || ef[39] !== e5
        ? ((ec = { category: e4, expanded: e5, query: eT, searchQuery: ej }),
          (ef[36] = ej),
          (ef[37] = eT),
          (ef[38] = e4),
          (ef[39] = e5),
          (ef[40] = ec))
        : (ec = ef[40])
      let e6 = (0, R.w)(ec),
        e7 = "chats" === ey
      ef[41] !== eT || ef[42] !== e7
        ? ((eh = { expanded: e7, query: eT }), (ef[41] = eT), (ef[42] = e7), (ef[43] = eh))
        : (eh = ef[43])
      let e8 = (function (e) {
          let t,
            n,
            a,
            s,
            o,
            T,
            L,
            P,
            C,
            N,
            E = (0, i.c)(31),
            { query: R, expanded: O } = e,
            j = (0, u.A)(),
            U = (0, l.gh)(f.u),
            $ = void 0 !== O && O ? 20 : 5
          E[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "chatgpt" }), (E[0] = t)) : (t = E[0])
          let q = (0, l._U)(d.G, t).isCapable
          E[1] !== R ? ((n = R.trim()), (E[1] = R), (E[2] = n)) : (n = E[2])
          let H = n,
            z = (0, v.o)(H, 100),
            K = 0 === H.length ? "" : z,
            D = K !== H
          ;(E[3] !== $ || E[4] !== K.length
            ? ((a = (e) =>
                (0 === K.length ? e?.slice(0, $) : e) ??
                (0 === K.length ? (0, w.nm)()?.pages.flatMap(A).slice(0, $).map(_) : void 0)),
              (E[3] = $),
              (E[4] = K.length),
              (E[5] = a))
            : (a = E[5]),
            E[6] !== $ || E[7] !== U || E[8] !== K
              ? ((s = async (e) => {
                  let { signal: t } = e
                  return 0 === K.length
                    ? (await (0, m.Mj)(U, { is_archived: !1, limit: $, order: "updated" }, t)).items.map(x)
                    : (
                        await p.Request.safeGet("/conversations/search", {
                          parameters: { query: { cursor: void 0, query: K } },
                          signal: t,
                        })
                      ).items.map(k)
                }),
                (E[6] = $),
                (E[7] = U),
                (E[8] = K),
                (E[9] = s))
              : (s = E[9]))
          let W = 0 === K.length ? $ : null
          ;(E[10] !== K || E[11] !== W
            ? ((o = ["chatgpt-conversation-at-mention", K, W]), (E[10] = K), (E[11] = W), (E[12] = o))
            : (o = E[12]),
            E[13] !== q || E[14] !== a || E[15] !== s || E[16] !== o
              ? ((T = {
                  enabled: q,
                  placeholderData: a,
                  queryFn: s,
                  queryKey: o,
                  retryDelay: S.RH,
                  staleTime: y.D.ONE_MINUTE,
                }),
                (E[13] = q),
                (E[14] = a),
                (E[15] = s),
                (E[16] = o),
                (E[17] = T))
              : (T = E[17]))
          let { data: G, isFetching: F } = (0, c.I)(T)
          if (!q) return M
          E[18] !== G || E[19] !== j
            ? ((L =
                G?.map((e) => {
                  let t = (0, b.bF)(e.title, e.mapping) ?? j.formatMessage(I.D.newChat),
                    n = (0, h.u1)(e.conversationId)
                  return {
                    key: `chatgpt-conversation:${e.conversationId}`,
                    label: t,
                    detail: null,
                    trailingDetail: j.formatMessage({
                      id: "composer.atMentionList.chatGptConversationDetail",
                      defaultMessage: "ChatGPT conversation",
                      description: "Detail text for a ChatGPT conversation result in the @ mention list.",
                    }),
                    icon: g.A,
                    type: "mention",
                    insertMention: (i) => {
                      let { composerController: l, mentionState: a } = i
                      l.insertChatGptConversationMention({ conversationId: e.conversationId, path: n, title: t }, a)
                    },
                  }
                }) ?? []),
              (E[18] = G),
              (E[19] = j),
              (E[20] = L))
            : (L = E[20])
          let Q = L
          ;(E[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, r.zR)({
                id: "composer.atMentionList.chatGptConversations",
                defaultMessage: "ChatGPT conversations",
                description: "Section header for ChatGPT conversation results in the @ mention list.",
              })),
              (E[21] = P))
            : (P = E[21]),
            E[22] !== F || E[23] !== D || E[24] !== Q
              ? ((C =
                  (F || D) && 0 === Q.length
                    ? (0, r.zR)({
                        id: "composer.atMentionList.chatGptConversationsLoading",
                        defaultMessage: "Loading ChatGPT conversations…",
                        description: "Shown in the ChatGPT conversations section while conversations load.",
                      })
                    : null),
                (E[22] = F),
                (E[23] = D),
                (E[24] = Q),
                (E[25] = C))
              : (C = E[25]))
          let B = F || D
          return (
            E[26] !== Q || E[27] !== P || E[28] !== C || E[29] !== B
              ? ((N = { sections: [{ id: "chatgpt-conversations", title: P, items: Q, emptyState: C, isLoading: B }] }),
                (E[26] = Q),
                (E[27] = P),
                (E[28] = C),
                (E[29] = B),
                (E[30] = N))
              : (N = E[30]),
            N
          )
        })(eh),
        { data: e9, isLoading: te } = (0, j.OB)(ek, eR),
        tt = new Set(eL.flatMap((e) => (null == e.agentRole || eP.includes(e.conversationId) ? [] : [e.agentRole]))),
        tn = e9?.roles.filter((e) => !tt.has(e.roleName)) ?? [],
        ti = (function ({ backgroundAgents: e, excludedConversationIds: t = [], query: n }) {
          var i, l
          if (0 === e.length) return null
          let a = e.filter((e) => !t.includes(e.conversationId)),
            s = n.trim(),
            o = (0, z.WE)(s),
            c =
              0 === s.length
                ? a
                : ((i = a),
                  (l = o),
                  q()(
                    i.map((e, t) => {
                      var n, i
                      return {
                        agent: e,
                        score:
                          ((n = e),
                          Math.max((i = l)(n.displayName), i(`@${n.displayName}`), i(n.agentRole ?? ""), i(D(n)))),
                        index: t,
                      }
                    }),
                    [(e) => -e.score, (e) => e.agent.displayName, (e) => e.index],
                  )
                    .filter((e) => e.score > 0)
                    .map((e) => e.agent))
          return {
            sections: [
              {
                id: "agents",
                title: (0, r.zR)({
                  id: "composer.atMentionList.liveAgents",
                  defaultMessage: "Live agents",
                  description: "Section header for live agent results in the @ mention list.",
                }),
                items: c.map((e) => ({
                  key: `agent:${e.conversationId}`,
                  label: e.displayName,
                  detail: e.agentRole,
                  searchTerms: [`@${e.displayName}`, e.agentRole ?? "", D(e)],
                  iconElement: (0, H.createElement)(K.B, {
                    className: "icon-xs shrink-0",
                    seed: e.conversationId,
                    "aria-hidden": !0,
                  }),
                  type: "mention",
                  insertMention: ({ composerController: t, mentionState: n }) => {
                    t.insertAgentMention(e, n)
                  },
                })),
                emptyState: null,
                isLoading: !1,
              },
            ],
          }
        })({ backgroundAgents: eL, excludedConversationIds: eP, query: eT }),
        tl = eR
          ? (function ({ agents: e, query: t }) {
              var n, i
              if (0 === e.length) return null
              let l = t.trim(),
                a = (0, z.WE)(l),
                s =
                  0 === l.length
                    ? e
                    : ((n = e),
                      (i = a),
                      q()(
                        n.map((e, t) => {
                          var n, l
                          return {
                            agent: e,
                            score:
                              ((n = e),
                              Math.max(
                                (l = i)(n.roleName),
                                l(`@${n.roleName}`),
                                l(n.description ?? ""),
                                ...n.nicknameCandidates.map(l),
                              )),
                            index: t,
                          }
                        }),
                        [(e) => -e.score, (e) => e.agent.roleName, (e) => e.index],
                      )
                        .filter((e) => e.score > 0)
                        .map((e) => e.agent))
              return {
                sections: [
                  {
                    id: "custom-agents",
                    title: (0, r.zR)({
                      id: "composer.atMentionList.customAgents",
                      defaultMessage: "Custom agents",
                      description: "Section header for configured custom agent results in the @ mention list.",
                    }),
                    items: s.map((e) => ({
                      key: `subagent:${e.roleName}`,
                      label: G()(e.roleName),
                      detail: e.description,
                      searchTerms: [e.roleName, `@${e.roleName}`, e.description ?? "", ...e.nicknameCandidates],
                      type: "mention",
                      insertMention: ({ composerController: t, mentionState: n }) => {
                        t.insertConfiguredAgentMention(e, n)
                      },
                    })),
                    emptyState: null,
                    isLoading: !1,
                  },
                ],
              }
            })({ agents: tn, query: eT })
          : null,
        ta = ti?.sections[0] ?? null,
        tr = tl?.sections[0] ?? null,
        ts = [...(ta?.items ?? []), ...(tr?.items ?? [])],
        to =
          0 !== ts.length || te
            ? {
                id: "agents",
                title: (0, r.zR)({
                  id: "composer.atMentionList.agents",
                  defaultMessage: "Agents",
                  description: "Section header for agent results in the @ mention list.",
                }),
                items: ts,
                emptyState:
                  0 === ts.length
                    ? (0, r.zR)({
                        id: "composer.atMentionList.agentsLoading",
                        defaultMessage: "Loading agents…",
                        description:
                          "Shown in the agents section when configured agents are loading and no results have arrived yet.",
                      })
                    : null,
                isLoading: te,
              }
            : null,
        tc = [
          { sections: eX },
          { sections: e0 },
          { sections: eZ },
          e2,
          null == to ? null : { sections: [to] },
          t.sitesSource ?? null,
          e8,
          n,
          e3,
          eC,
          null == eC || eO ? e$ : null,
          e6,
        ].flatMap((e) => e?.sections ?? []),
        tu = eO
          ? tc
          : tc.map((e) => {
              let t = (function (e) {
                switch (e) {
                  case "agents":
                    return 5
                  case "apps":
                    return 3
                  case "skills":
                  case "sites":
                    return 2
                  default:
                    return null
                }
              })(e.id)
              return null == t || e.items.length <= t ? e : { ...e, items: e.items.slice(0, t) }
            })
      return (ef[44] !== tu ? ((eg = { sections: tu }), (ef[44] = tu), (ef[45] = eg)) : (eg = ef[45]), eg)
    }
    function eu(e) {
      return e.plugin.name
    }
    function ed(e) {
      return { ...e, queryMatchMode: "source-ranked" }
    }
    function ep(e) {
      let { server: t, title: n } = e
      return "codex_apps" === t && "Library" === n
    }
    function em(e) {
      let { canonicalAppId: t, plugin: n } = e
      return null == t && n.installed
    }
  },
  L03S(e, t, n) {
    var i = n("QosV"),
      l = n("iRMi"),
      a = n("zTeN"),
      r = n("zd8w"),
      s = n("Wf1j"),
      o = n("yGJW"),
      c = n("OWtl"),
      u = n("yJ3w"),
      d = n("TYyY"),
      p = n("r5dO"),
      m = n("v5fl")
    function h(e) {
      let t = d.Gq.getState(e.view.state)
      return t?.kind === "at-mention" ? t : void 0
    }
    n.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            n,
            g,
            f,
            y,
            v,
            I,
            b,
            S = (0, i.c)(22),
            w = (0, a.gh)(c.u),
            M = (0, s.A)()
          S[0] !== M
            ? ((t = M.formatMessage({
                id: "composer.mentionSearch.placeholder",
                defaultMessage: "type to search",
                description: "Inline placeholder while searching an app or MCP server's resources with an empty query.",
              })),
              (S[0] = M),
              (S[1] = t))
            : (t = S[1])
          let k = t,
            x = (0, m.l)(e, h),
            _ = (0, r.useRef)(null)
          S[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                _.current = e
              }),
              (S[2] = n))
            : (n = S[2])
          let A = n
          S[3] !== e
            ? ((g = (t) => {
                ;(0, p.M)(e.view, t) && (_.current = null)
              }),
              (S[3] = e),
              (S[4] = g))
            : (g = S[4])
          let T = g
          S[5] !== e
            ? ((f = () => {
                let t = d.Gq.getState(e.view.state)
                t?.active === !0 && "at-mention" === t.kind && e.setSuggestionSource({ kind: "context-menu-search" }, t)
              }),
              (S[5] = e),
              (S[6] = f))
            : (f = S[6])
          let L = f
          return (
            S[7] !== e || S[8] !== M || S[9] !== w || S[10] !== k || S[11] !== x
              ? ((y = (t) => {
                  let n = d.Gq.getState(e.view.state)
                  if ("complete-query" === t && n?.mentionSearch != null && !n.active)
                    return void (0, o.yy)(w, l.CodexMcpExtensionAction, {
                      ...n.mentionSearch.source.analyticsIdentity,
                      feature: "mentions",
                      action: "opened",
                    })
                  switch (t) {
                    case "complete-query":
                    case "insert-mention": {
                      let n = _.current?.()
                      x && n ? v(n, t) : "insert-mention" === t && (0, d.kQ)(e.view)
                    }
                  }
                  _.current = null
                }),
                (v = (t, n) => {
                  if (x?.range == null) return
                  let i = "typed" === x.activation ? x.range.from + 1 : x.range.from,
                    a = (function (e, t, n) {
                      switch (e.type) {
                        case "action":
                          return { run: e.action, type: "action" }
                        case "submenu":
                          return { submenu: e.submenu, type: "submenu" }
                        case "mention":
                          if ("complete-query" === t && null == e.submenu && null != e.completionQuery)
                            return { query: e.completionQuery, type: "query-completion" }
                          return { mention: e, type: "mention" }
                        case "text-completion":
                          return {
                            run: () => {
                              ;(n.insertCompletionTextAtSelection(e.insertText), (0, p.M)(n.view))
                            },
                            type: "action",
                          }
                      }
                    })(t, n, e)
                  ;(0, u.d)(
                    a,
                    { queryRange: { from: i, to: x.range.to }, replacementRange: x.range },
                    {
                      clearReplacementRange: () => e.clearSuggestion(x),
                      insertMention: (t) => {
                        ;(t.insertMention({ composerController: e, mentionState: x, action: n }),
                          null != t.submenu &&
                            (0, d.xf)(
                              e.view,
                              { ...t.submenu, placeholder: k },
                              t.mentionPath,
                              M.formatMessage({
                                id: "composer.mentionSearch.tabHint",
                                defaultMessage: "tab to search",
                                description:
                                  "Inline hint after mentioning a plugin. Pressing the Tab key searches that plugin's resources.",
                              }),
                            ))
                      },
                      openSubmenu: (n) => {
                        ;(e.setSuggestionSource("mcp-extension" === n.kind ? { ...n, placeholder: k } : n, x),
                          "mcp-extension" === n.kind &&
                            (0, o.yy)(w, l.CodexMcpExtensionAction, {
                              ...n.analyticsIdentity,
                              feature: "mentions",
                              action: "opened",
                            }),
                          "submenu" === t.type && t.onOpen?.(x))
                      },
                      replaceQuery: (t) => {
                        e.completeSuggestionQuery(t, x)
                      },
                    },
                  ).then(() => {
                    null != t.mcpExtensionResultIdentity &&
                      ("mention" === a.type || "action" === a.type) &&
                      (0, o.yy)(w, l.CodexMcpExtensionAction, {
                        ...t.mcpExtensionResultIdentity,
                        feature: "mentions",
                        action: "selected",
                      })
                  })
                }),
                (S[7] = e),
                (S[8] = M),
                (S[9] = w),
                (S[10] = k),
                (S[11] = x),
                (S[12] = y),
                (S[13] = v))
              : ((y = S[12]), (v = S[13])),
            S[14] !== v ? ((I = (e) => v(e, "insert-mention")), (S[14] = v), (S[15] = I)) : (I = S[15]),
            S[16] !== T || S[17] !== y || S[18] !== L || S[19] !== I || S[20] !== x
              ? ((b = {
                  ui: x,
                  addMention: I,
                  closeAutocomplete: T,
                  startSearch: L,
                  setSelectedMention: A,
                  handleMentionEvent: y,
                }),
                (S[16] = T),
                (S[17] = y),
                (S[18] = L),
                (S[19] = I),
                (S[20] = x),
                (S[21] = b))
              : (b = S[21]),
            b
          )
        },
      },
    )
  },
  FdGo(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      a = n("aJkJ"),
      r = n("KUdL"),
      s = n.n(r),
      o = n("zTeN"),
      c = n("Wf1j"),
      u = n("Qgfj"),
      d = n("ASxG"),
      p = n("gwd9"),
      m = n("r2OT"),
      h = n("hOO0"),
      g = n("HUHI"),
      f = n("RWGq"),
      y = n("Kmy6"),
      v = n("FvYa"),
      I = n("HOLv"),
      b = n("C3Kr"),
      S = n("OWtl"),
      w = n("YWcr"),
      M = n("EULo"),
      k = n("UN1G")
    let x = d.array(d.string().catch("")).catch([])
    function _(e) {
      return "sites" === e.trim().toLowerCase()
    }
    function A(e) {
      return x.parse(e.pluginDisplayNames).filter((e) => e.trim().length > 0)
    }
    n.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            n,
            r,
            d,
            x,
            T,
            L = (0, l.c)(35),
            {
              arePluginsLoading: P,
              enabled: C,
              hostId: N,
              isSystemHintAllowed: E,
              onMentionInserted: R,
              onSystemHintSelect: O,
              plugins: j,
              preferSystemHintApps: U,
              query: $,
              systemHintsByMentionPath: q,
              systemHintSurface: H,
            } = e,
            z = void 0 === C || C,
            K = void 0 !== U && U,
            D = void 0 === H ? "tpp" : H,
            W = (0, o.gh)(S.u),
            G = (0, c.A)(),
            F = z && !K
          L[0] !== N || L[1] !== F ? ((t = { enabled: F, hostId: N }), (L[0] = N), (L[1] = F), (L[2] = t)) : (t = L[2])
          let Q = (0, g.Km)(t)
          if (!z) {
            let e
            return (
              L[3] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (L[3] = e)) : (e = L[3]),
              e
            )
          }
          if (
            L[4] !== P ||
            L[5] !== Q ||
            L[6] !== G ||
            L[7] !== E ||
            L[8] !== R ||
            L[9] !== O ||
            L[10] !== j ||
            L[11] !== K ||
            L[12] !== $ ||
            L[13] !== W ||
            L[14] !== D ||
            L[15] !== q
          ) {
            x = Symbol.for("react.early_return_sentinel")
            e: {
              var B, V
              let e, t
              L[20] !== P || L[21] !== j || L[22] !== K || L[23] !== q
                ? ((e = (e) =>
                    !K &&
                    !P &&
                    (q?.[(0, w.nw)(e.id)]?.surfaces?.includes("tpp") ?? !0) &&
                    !j.some((t) => t.servicePlugin?.is_template !== !0 && (0, b.Y)(e, t.plugin))),
                  (L[20] = P),
                  (L[21] = j),
                  (L[22] = K),
                  (L[23] = q),
                  (L[24] = e))
                : (e = L[24])
              let l = Q.filter(e),
                o = $.trim(),
                c = (0, k.WE)(o),
                g =
                  0 === o.length
                    ? l
                    : ((B = l),
                      (V = c),
                      s()(
                        B.map((e, t) => {
                          var n, i
                          let l
                          return {
                            app: e,
                            index: t,
                            score: ((n = e), (i = V), (l = A(n)), Math.max(i(n.name), i(`@${n.name}`), ...l.map(i))),
                          }
                        }),
                        [(e) => -e.score, (e) => e.app.name, (e) => e.index],
                      )
                        .filter((e) => e.score > 0)
                        .map((e) => e.app)),
                S = Object.entries((K && (K || !P) ? (0, f.QI)(q, D, E) : void 0) ?? {}).filter((e) => {
                  let [t, n] = e
                  return (
                    (0, w.XX)(t) &&
                    (o.length > 0 || !0 !== n.hide_from_initial_selection) &&
                    !l.some((e) => (0, h.$)(e.id) === (0, h.$)(t.slice(6))) &&
                    (K ||
                      !j.some((e) => {
                        let n = e.canonicalAppId?.trim() || e.plugin.remotePluginId
                        return null != n && (0, h.$)(n) === (0, h.$)(t.slice(6))
                      })) &&
                    (0 === o.length ||
                      Math.max(
                        c(n.name),
                        c((0, m.AC)(t.slice(6))?.name ?? n.name),
                        c(n.action_label ?? n.name),
                        c(`@${n.name}`),
                        ...n.aliases.map(c),
                        ...(n.keyword_invocations ?? []).map(c),
                      ) > 0)
                  )
                })
              if (0 === g.length && 0 === S.length) {
                let e
                ;(L[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = { sections: [] }), (L[25] = e))
                  : (e = L[25]),
                  (x = e))
                break e
              }
              ;((n = "apps"),
                L[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((r = (0, u.zR)({
                      id: "composer.atMentionList.apps",
                      defaultMessage: "Apps",
                      description: "Section header for ChatGPT app results in the @ mention list.",
                    })),
                    (L[26] = r))
                  : (r = L[26]),
                L[27] !== G || L[28] !== R || L[29] !== W
                  ? ((t = (e) => {
                      let t = (0, w.UH)(e),
                        n = A(e),
                        l = [e.name, ...n].some(_)
                      return {
                        key: `app:${t.path}`,
                        mentionPath: t.path,
                        label: t.displayName,
                        detail: e.description,
                        searchTerms: [e.name, `@${e.name}`, ...n],
                        iconElement: (0, i.jsx)(v.R, {
                          alt: G.formatMessage(
                            {
                              id: "composer.atMentionList.appLogoAlt",
                              defaultMessage: "{name} logo",
                              description: "Alt text for an installed ChatGPT app logo in the @ mention list.",
                            },
                            { name: t.displayName },
                          ),
                          appInfo: e,
                          className: "icon-xs shrink-0 object-contain",
                          fallback: (0, i.jsx)(I.I, { className: "shrink-0", "aria-hidden": !1, asset: a.t }),
                        }),
                        type: "mention",
                        insertMention: (e) => {
                          let { composerController: n, mentionState: i } = e
                          ;(n.insertMention(t, i), R?.(t.path), l && (0, p.fv)(W))
                        },
                      }
                    }),
                    (L[27] = G),
                    (L[28] = R),
                    (L[29] = W),
                    (L[30] = t))
                  : (t = L[30]),
                (d = g.map(t).concat(
                  S.map((e) => {
                    let [t, n] = e,
                      { label: l, mention: r } = (0, f.ts)(t, n),
                      { displayName: s, iconSmall: o } = r
                    return {
                      key: `app:${t}`,
                      pluginImpression: n.system_hint.startsWith("plugin:")
                        ? { pluginId: n.system_hint.slice(7), eligible: !1 }
                        : void 0,
                      label: l,
                      detail: n.description,
                      searchTerms: [s, `@${s}`, n.name, n.action_label ?? n.name, `@${n.name}`, ...n.aliases],
                      searchKeywords: n.keyword_invocations,
                      iconElement: o?.trimStart().startsWith("<")
                        ? (0, i.jsx)(y.I, { className: "icon-xs shrink-0 object-contain", logo: o })
                        : (0, i.jsx)(v.R, {
                            className: "icon-xs shrink-0 object-contain",
                            alt: "",
                            logoUrl: o,
                            fallback: (0, i.jsx)(I.I, { className: "shrink-0", "aria-hidden": !0, asset: a.t }),
                          }),
                      type: "mention",
                      mentionPath: r.path,
                      insertMention: (e) => {
                        let { composerController: i, mentionState: l } = e
                        if (
                          (0, M.C4)(i.getPersistedText()).some(
                            (e) => e.path === t || q?.[e.path]?.system_hint === n.system_hint,
                          )
                        ) {
                          ;(i.clearSuggestion(l), O?.(n))
                          return
                        }
                        ;(i.insertMention({ kind: "app", ...r }, l),
                          i.convertMentionsToText("apps", (e) => {
                            let i = q?.[e]
                            return e !== t && (!0 === n.mutually_exclusive || i?.mutually_exclusive === !0)
                          }),
                          O?.(n),
                          R?.(r.path),
                          "sites" === n.name.trim().toLowerCase() && (0, p.fv)(W))
                      },
                    }
                  }),
                )))
            }
            ;((L[4] = P),
              (L[5] = Q),
              (L[6] = G),
              (L[7] = E),
              (L[8] = R),
              (L[9] = O),
              (L[10] = j),
              (L[11] = K),
              (L[12] = $),
              (L[13] = W),
              (L[14] = D),
              (L[15] = q),
              (L[16] = n),
              (L[17] = r),
              (L[18] = d),
              (L[19] = x))
          } else ((n = L[16]), (r = L[17]), (d = L[18]), (x = L[19]))
          return x !== Symbol.for("react.early_return_sentinel")
            ? x
            : (L[31] !== n || L[32] !== r || L[33] !== d
                ? ((T = { sections: [{ id: n, title: r, items: d, emptyState: null, isLoading: !1 }] }),
                  (L[31] = n),
                  (L[32] = r),
                  (L[33] = d),
                  (L[34] = T))
                : (T = L[34]),
              T)
        },
      },
    )
  },
  GVrb(e, t, n) {
    var i = n("QosV"),
      l = n("zTeN"),
      a = n("DBCl"),
      r = n("Qgfj"),
      s = n("rtYD"),
      o = n("FjRo"),
      c = n("GaA7"),
      u = n("gTKF"),
      d = n("lp74")
    let p = [],
      m = { sections: [] }
    function h(e) {
      let t
      return (
        "directory" === e.matchType && (t = /[\\/]$/.test(e.path) ? e.path : `${e.path}/`),
        {
          completionQuery: t,
          detail: e.relativePathWithoutFileName,
          icon: (0, d.u)(e),
          insertMention: (t) => {
            let { composerController: n, mentionState: i } = t
            n.insertAtMention(e, i)
          },
          key: `file:${e.fsPath ?? e.path}`,
          label: e.label,
          searchTerms: [e.path],
          type: "mention",
        }
      )
    }
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n,
            d,
            g,
            f,
            y,
            v = (0, i.c)(25),
            { conversationId: I, hostId: b, isQueryPending: S, query: w, roots: M } = e,
            k = void 0 === I ? null : I,
            x = void 0 !== S && S,
            _ = b === a.iwv && null != c.appServices.hostedThreadFiles
          v[0] !== k || v[1] !== _
            ? ((t = _ && null != k ? { kind: "app-server", conversationId: k } : null),
              (v[0] = k),
              (v[1] = _),
              (v[2] = t))
            : (t = v[2])
          let A = (0, l._U)(u.threadExecutorTargetByThread$, t),
            T = A?.hostId === a.iwv ? A : null,
            L = T?.environmentId ?? null,
            P = T?.cwd ?? null
          v[3] !== L || v[4] !== P
            ? ((n = { environmentId: L, cwd: P }), (v[3] = L), (v[4] = P), (v[5] = n))
            : (n = v[5])
          let { data: C, isError: N, isFetching: E, isSuccess: R } = (0, l._U)(s.E, n),
            O = M
          if (_) {
            let e
            ;(v[6] !== C ? ((e = null == C ? void 0 : [C]), (v[6] = C), (v[7] = e)) : (e = v[7]), (O = e))
          }
          let j = _ ? T?.environmentId : void 0
          v[8] !== b || v[9] !== w || v[10] !== O || v[11] !== j
            ? ((d = { environmentId: j, hostId: b, includeDirectories: !0, query: w, roots: O }),
              (v[8] = b),
              (v[9] = w),
              (v[10] = O),
              (v[11] = j),
              (v[12] = d))
            : (d = v[12])
          let { files: U, isLoading: $, error: q } = (0, o.x)(d),
            H = w.trim()
          if (!_ && (null == O || 0 === O.length)) return m
          let z = null,
            K = _ && null != T && E
          if (_ && (null == T || (R && null == C))) {
            let e
            ;(v[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.cloudFilesUnavailable",
                  defaultMessage: "Files are available when a Cloud workspace is connected",
                  description:
                    "Shown in the file mention picker before a Cloud chat has an attached execution workspace",
                })),
                (v[13] = e))
              : (e = v[13]),
              (z = e))
          } else if (null != q || (_ && N)) {
            let e
            ;(v[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.fileSearchError",
                  defaultMessage: "Unable to search files",
                  description: "Shown in the file mention picker after workspace search fails",
                })),
                (v[14] = e))
              : (e = v[14]),
              (z = e))
          } else if (0 === H.length) {
            let e
            ;(v[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.emptyQuery",
                  defaultMessage: "Type to search for files",
                  description: "Shown in the files section when the query is empty",
                })),
                (v[15] = e))
              : (e = v[15]),
              (z = e))
          } else if (x || K || ($ && !U?.length)) {
            let e
            ;(v[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.loading",
                  defaultMessage: "Searching files…",
                  description:
                    "Shown in the files section when fuzzy search is loading and no results have arrived yet",
                })),
                (v[16] = e))
              : (e = v[16]),
              (z = e))
          }
          ;(v[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (0, r.zR)({
                id: "composer.atMentionList.files",
                defaultMessage: "Files",
                description: "Section header for file results in the @ mention list.",
              })),
              (v[17] = g))
            : (g = v[17]),
            v[18] !== U ? ((f = null == U ? p : U.map(h)), (v[18] = U), (v[19] = f)) : (f = v[19]))
          let D = $ || x || K
          return (
            v[20] !== z || v[21] !== f || v[22] !== D || v[23] !== g
              ? ((y = { sections: [{ id: "files", title: g, items: f, emptyState: z, isLoading: D }] }),
                (v[20] = z),
                (v[21] = f),
                (v[22] = D),
                (v[23] = g),
                (v[24] = y))
              : (y = v[24]),
            y
          )
        },
      },
    )
  },
  e5oX(e, t, n) {
    n.d(t, { L: () => ev })
    var i = n("QosV"),
      l = n("fxCc"),
      a = n("T0Rc"),
      r = n("yQP1"),
      s = n("HFi9"),
      o = n.n(s),
      c = n("GJA8"),
      u = n.n(c),
      d = n("KUdL"),
      p = n.n(d),
      m = n("zTeN"),
      h = n("DBCl"),
      g = n("Wf1j"),
      f = n("Qgfj"),
      y = n("gwd9"),
      v = n("b3Qd"),
      I = n("usf5"),
      b = n("lBzi"),
      S = n("ZfbS"),
      w = n("MI1z"),
      M = n("IIEq"),
      k = n("jWaO"),
      x = n("yrds"),
      _ = n("rO8L"),
      A = n("Vyeu"),
      T = n("wwME"),
      L = n("N5C1"),
      P = n("WXrt"),
      C = n("w8IV"),
      N = n("BA9i"),
      E = n("R4kT"),
      R = n("ABl9"),
      O = n("EEop"),
      j = n("cLdu"),
      U = n("ueue"),
      $ = n("GaA7"),
      q = n("OWtl"),
      H = n("kfGJ"),
      z = n("axh8"),
      K = n("hZax"),
      D = n("RHhA"),
      W = n("rvFo")
    let G = ["chrome-dev", "chrome-internal", "chrome"]
    var F = n("sWWp"),
      Q = n("WrbO"),
      B = n("YWcr"),
      V = n("XNvh"),
      J = n("lDn6"),
      Y = n("czj2"),
      X = n("UN1G"),
      Z = n("i5ac"),
      ee = n.n(Z),
      et = n("m5Hw"),
      en = n("utkD"),
      ei = n("fwjD")
    let el = (0, f.YK)({
      macTitle: {
        id: "computerUse.nativeApps.mac.title",
        defaultMessage: "Mac apps",
        description:
          "Section header for native macOS app mentions powered by the Computer Use plugin in the @ mention list.",
      },
      macLoading: {
        id: "computerUse.nativeApps.mac.loading",
        defaultMessage: "Loading Mac apps…",
        description:
          "Shown in the native app mentions section when macOS app discovery is loading and no results have arrived yet.",
      },
      desktopTitle: {
        id: "computerUse.nativeApps.desktop.title",
        defaultMessage: "Desktop apps",
        description:
          "Fallback section header for native desktop app mentions powered by the Computer Use plugin in the @ mention list.",
      },
      desktopLoading: {
        id: "computerUse.nativeApps.desktop.loading",
        defaultMessage: "Loading desktop apps…",
        description:
          "Shown in the native app mentions section when desktop app discovery is loading and no results have arrived yet.",
      },
    })
    function ea(e) {
      return e.isLoading
    }
    function er(e) {
      return "native-app" === e.kind ? [e.app] : "browser-plugin" === e.kind || null == e.nativeApp ? [] : [e.nativeApp]
    }
    function es(e) {
      return e.bundleId
    }
    function eo(e) {
      return (0, F.mz)(e)
    }
    function ec(e, t) {
      return Math.max(
        t(e.plugin.plugin.name),
        t(e.plugin.displayName ?? ""),
        t(e.mention.displayName),
        t(`@${e.mention.displayName}`),
      )
    }
    var eu = n("wRU4"),
      ed = n("m3vH")
    let ep = [Q.W, ...G, h.ovW],
      em = [...ep, N.Bz, N.HZ, N.kV],
      eh = new Map([
        [N.Bz, J.ER],
        [N.HZ, J.wq],
        [N.kV, J.dl],
      ]),
      eg = "DISABLED_BY_ADMIN",
      ef = `openai-templates@${h.xiH}`,
      ey = `${h._NM}@${h.xiH}`
    function ev(e) {
      var t, n, s, c, d
      let Z,
        ey,
        ev,
        eP,
        eC,
        eN,
        eE,
        eR,
        eO,
        ej,
        eU,
        e$,
        eq,
        eH,
        ez,
        eK,
        eD,
        eW,
        eG,
        eF,
        eQ,
        eB,
        eV = (0, i.c)(60),
        {
          getChatGptConversationId: eJ,
          getLocalConversationId: eY,
          excludedPluginId: eX,
          hostId: eZ,
          gizmoId: e0,
          isPluginAllowed: e1,
          isSystemHintAllowed: e2,
          onMentionInserted: e3,
          preferSystemHintApps: e4,
          pluginHostId: e5,
          query: e6,
          roots: e7,
          sitesSource: e8,
          systemHintSurface: e9,
        } = e,
        te = void 0 !== e4 && e4,
        tt = void 0 === e5 ? eZ : e5,
        tn = void 0 === e9 ? "tpp" : e9,
        ti = (0, m.gh)(q.u),
        tl = (0, K.Zj)(!!e8?.projects && "521049492"),
        ta = (0, g.A)(),
        { platform: tr } = (0, T.V)(),
        ts = (0, K.Zj)("4218407052"),
        to = (0, K.Zj)(N.J4),
        tc = (0, K.Zj)(N.tN),
        tu = (0, I.l)(),
        td = (0, m.Ul)(P.aD),
        tp = tt === h.iwv,
        tm = tp ? H.fI : eZ
      eV[0] !== tm ? ((eP = { hostId: tm }), (eV[0] = tm), (eV[1] = eP)) : (eP = eV[1])
      let th = (0, _.J)(eP)
      eV[2] !== th || eV[3] !== tt || eV[4] !== te || eV[5] !== tn
        ? ((eC = th && te && "chat" === tn), (eV[2] = th), (eV[3] = tt), (eV[4] = te), (eV[5] = tn), (eV[6] = eC))
        : (eC = eV[6])
      let tg = eC
      eV[7] !== tg ? ((eN = { enabled: tg }), (eV[7] = tg), (eV[8] = eN)) : (eN = eV[8])
      let { data: tf, isLoading: ty } = (0, m._U)(b.Ax, void 0 === e0 ? null : e0, eN),
        tv = th && !tp
      eV[9] !== eZ || eV[10] !== tv
        ? ((eE = { enabled: tv, hostId: eZ }), (eV[9] = eZ), (eV[10] = tv), (eV[11] = eE))
        : (eE = eV[11])
      let tI = (0, M.H)(eE)
      eV[12] !== tI || eV[13] !== eZ
        ? ((eR = { computerUseAvailability: tI, hostId: eZ }), (eV[12] = tI), (eV[13] = eZ), (eV[14] = eR))
        : (eR = eV[14])
      let tb = (0, A.l)(eR)
      eV[15] !== eZ || eV[16] !== tv
        ? ((eO = { enabled: tv, hostId: eZ }), (eV[15] = eZ), (eV[16] = tv), (eV[17] = eO))
        : (eO = eV[17])
      let tS = (0, k.J)(eO)
      eV[18] !== eZ || eV[19] !== tv
        ? ((ej = { enabled: tv, hostId: eZ }), (eV[18] = eZ), (eV[19] = tv), (eV[20] = ej))
        : (ej = eV[20])
      let tw = (0, x.I)(ej)
      eV[21] !== tv ? ((eU = { enabled: tv }), (eV[21] = tv), (eV[22] = eU)) : (eU = eV[22])
      let tM = (0, w.y)(eZ, eU),
        tk = to ? em : ep,
        tx = tu ? [...tk, h.kJv] : tk,
        t_ = e6.trim(),
        tA = (0, X.WE)(t_)
      eV[23] !== th || eV[24] !== tt || eV[25] !== e7
        ? ((e$ = { enabled: th, hostId: tt, roots: e7, resolveActiveRoots: !0 }),
          (eV[23] = th),
          (eV[24] = tt),
          (eV[25] = e7),
          (eV[26] = e$))
        : (e$ = eV[26])
      let { data: tT, isLoading: tL } = (0, j.Kj)(e$),
        tP = (0, S.u0)(tf, tT)
      eV[27] !== tT
        ? ((eq = (e) =>
            tT?.some((t) => {
              let { marketplaceName: n, plugin: i } = t
              return (
                (eh.has(e) ? n === h.hEe : (0, h.foP)(n)) && (i.name === e || ("chrome" === e && G.includes(i.name)))
              )
            }) === !0),
          (eV[27] = tT),
          (eV[28] = eq))
        : (eq = eV[28])
      let tC = eq,
        tN = null == tM ? null : (0, O.i9)(tM),
        tE = tT?.find(eT)?.marketplacePath ?? null,
        tR = { [Q.W]: tI.available, chrome: tS.available, [h.kJv]: tw.available, [h.ovW]: tb.available },
        tO = (0, l.E)({
          queries: tx.filter(eA).map((e) => {
            let t = eh.get(e),
              n = null == t ? tN : tE
            return {
              ...ti.query.getOptions(O.Pc, {
                hostId: eZ,
                marketplacePath: n,
                pluginName: e,
                remoteMarketplaceName: null,
              }),
              enabled:
                th &&
                (null != t || eZ === H.fI) &&
                null != n &&
                null != tT &&
                !tC(e) &&
                (null == t || 0 === t_.length || tA(e) > 0 || (0, J.iZ)(t, tA)) &&
                (tR[e] ?? !0),
              retry: !1,
            }
          }),
        })
      eV[29] !== tC || eV[30] !== eZ || eV[31] !== tT
        ? ((eH = (e) => {
            let { data: t } = e
            return null == tT || null == t || tC(t.summary.name) || (eZ !== H.fI && t.marketplaceName !== h.hEe)
              ? []
              : [(0, U.qA)(t)]
          }),
          (eV[29] = tC),
          (eV[30] = eZ),
          (eV[31] = tT),
          (eV[32] = eH))
        : (eH = eV[32])
      let tj = tO.flatMap(eH)
      eV[33] !== ts
        ? ((ez = (e) => {
            let { marketplaceName: t, plugin: n } = e
            return ts || t !== h.xiH || n.id === R.$n
          }),
          (eV[33] = ts),
          (eV[34] = ez))
        : (ez = eV[34])
      let tU = (0, U.PM)({
        plugins: [...(tT ?? []).filter(ez), ...tj],
        isComputerUseAvailable: tI.available,
        isExternalBrowserUseAvailable: tS.available,
        isInAppBrowserUseAvailable: tw.available,
        isMessagesAvailable: tb.available,
      })
      eV[35] !== tL ||
      eV[36] !== ty ||
      eV[37] !== tI.isLoading ||
      eV[38] !== tS.isLoading ||
      eV[39] !== tw.isLoading ||
      eV[40] !== tb.isLoading ||
      eV[41] !== tO ||
      eV[42] !== tg
        ? ((eK = tL || (tg && ty) || tO.some(e_) || tI.isLoading || tS.isLoading || tw.isLoading || tb.isLoading),
          (eV[35] = tL),
          (eV[36] = ty),
          (eV[37] = tI.isLoading),
          (eV[38] = tS.isLoading),
          (eV[39] = tw.isLoading),
          (eV[40] = tb.isLoading),
          (eV[41] = tO),
          (eV[42] = tg),
          (eV[43] = eK))
        : (eK = eV[43])
      let t$ = eK,
        tq = (0, B.t2)(ta),
        tH = tU.filter(
          (e) =>
            !(0, E.b)(tt, e.requiresLocalExecutor) &&
            (function (e, t, n, i, l, a) {
              if (e.plugin.availability === eg) return !1
              if (null != n) {
                let t = i?.[(0, V.vt)(e.plugin.id)]
                if (
                  ((e.canonicalAppId || e.plugin.remotePluginId) && (null == i || (a && t?.is_connected !== !0))) ||
                  (null != t && ((null != t.surfaces && !t.surfaces.includes(n)) || l?.(t) === !1))
                )
                  return !1
              }
              return !!e.plugin.enabled || (!e.plugin.installed && t.includes(e.plugin.name))
            })(e, tx, tg ? tn : null, tP, e2, te) &&
            (e1?.(e) ?? !0),
        ),
        tz = (0, F.zJ)(tH),
        tK = null != tz
      eV[44] !== tK ? ((eD = { enabled: tK }), (eV[44] = tK), (eV[45] = eD)) : (eD = eV[45])
      let { nativeApps: tD, isLoading: tW } = (0, eu.t)(eD),
        tG = tT?.find(ex) ?? null,
        tF = tu && tG?.plugin.enabled !== !1 && (null == tG || e1?.(tG) !== !1) ? (tG ?? tH.find(ek) ?? null) : null,
        tQ = $.appServices?.chromiumBrowser,
        tB = null != tF && null != tQ
      ;(eV[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((eW = async () => (await tQ?.getInstalledBrowserFamilies()) ?? []),
          (eG = ["chromium-browser", "installed-browser-families"]),
          (eV[46] = eW),
          (eV[47] = eG))
        : ((eW = eV[46]), (eG = eV[47])),
        eV[48] !== tB
          ? ((eF = { enabled: tB, queryFn: eW, queryKey: eG, retry: !1, staleTime: W.D.FIVE_SECONDS }),
            (eV[48] = tB),
            (eV[49] = eF))
          : (eF = eV[49]))
      let { data: tV, isLoading: tJ } = (0, a.I)(eF),
        tY = (0, P.D6)(null == tF ? [] : Object.keys(r.Ypn).filter(r.rUV).map(eM))
      eV[50] !== tY
        ? ((eQ = (e, t) => (0, r.rUV)(t) && tY.get(t)?.isInstalled === !0), (eV[50] = tY), (eV[51] = eQ))
        : (eQ = eV[51])
      let tX = u()(r.Ypn, eQ)
      eV[52] !== eJ || eV[53] !== eY || eV[54] !== eZ || eV[55] !== e3
        ? ((eB = { getChatGptConversationId: eJ, getLocalConversationId: eY, hostId: eZ, onMentionInserted: e3 }),
          (eV[52] = eJ),
          (eV[53] = eY),
          (eV[54] = eZ),
          (eV[55] = e3),
          (eV[56] = eB))
        : (eB = eV[56])
      let tZ = (0, ed.f)(eB),
        t0 = Object.keys(r.Ypn)
          .filter(r.rUV)
          .filter((e) => !0 === td.get(e)),
        t1 = "macOS" === tr || "windows" === tr,
        t2 = t1
          ? ((t = tH),
            (Z = (0, D.t)()),
            (ey = (0, h.v3D)(Z)),
            (ev = (function (e) {
              switch (e) {
                case h.x1u.Dev:
                  return "chrome-dev"
                case h.x1u.Agent:
                case h.x1u.Prod:
                case h.x1u.PublicBeta:
                  return "chrome"
                case h.x1u.InternalAlpha:
                case h.x1u.Nightly:
                  return "chrome-internal"
              }
            })(Z)),
            p()(
              t.filter((e) => eL(e) && e.marketplaceName === ey),
              [(e) => +(e.plugin.name !== ev), (e) => G.indexOf(e.plugin.name)],
            ))
          : [],
        t3 = tH.find(ew) ?? null,
        t4 = t1 && to ? tH.filter(N.V0) : [],
        t5 = t1 && to && tc ? tH.filter(N.ho) : [],
        t6 = t1 && to ? tH.filter(N._c) : [],
        t7 = new Set(t2),
        t8 = tU.find(eS),
        t9 = null != t8 && (!tg || !t8.plugin.enabled || t8.plugin.availability === eg || tH.includes(t8)),
        ne = tH.filter(
          (e) =>
            e.plugin.id !== eX &&
            e.servicePlugin?.is_template !== !0 &&
            !(te && tg && tP?.[(0, V.vt)(e.plugin.id)]?.is_connected === !0) &&
            !(t9 && e.plugin.name === h._NM && (0, h.foP)(e.marketplaceName)) &&
            (!t1 || (!t7.has(e) && (e.plugin.installed || !eL(e)))) &&
            e !== t3 &&
            e.plugin.id !== ef,
        ),
        nt = o()(tl ? e8?.projects : void 0, eb),
        nn = new Map(),
        ni = new Set()
      for (let e of ne) {
        let t = (0, v.VB)(e.plugin.interface?.websiteUrl)
        if (null == t) continue
        let n = nt[t],
          i = n?.length === 1 ? n[0] : void 0
        null != i && (nn.set(e.plugin.id, i.id), ni.add(`site:${i.id}`))
      }
      let nl =
          0 === t_.length
            ? ne
            : ((n = ne),
              (s = tA),
              (c = tq),
              p()(
                n.map((e, t) => {
                  var n, i, l
                  let a
                  return {
                    plugin: e,
                    score:
                      ((n = e),
                      (i = s),
                      (l = c),
                      (a = (0, Y.ec)(n, l)),
                      Math.max(
                        i(n.plugin.name),
                        i(n.displayName ?? ""),
                        i(a.displayName),
                        i(`@${a.displayName}`),
                        i(`@${n.displayName ?? n.plugin.name}`),
                      )),
                    keywordScore: Math.max(0, ...(e.keywords ?? []).map(s)),
                    index: t,
                  }
                }),
                [(e) => -e.score, (e) => -e.keywordScore, (e) => (0, Y.ec)(e.plugin, c).displayName, (e) => e.index],
              )
                .filter((e) => e.score > 0 || e.keywordScore > 0)
                .map((e) => e.plugin)),
        na = new Map()
      for (let e of tD) {
        let t = (0, F.Mg)(e).trim().toLowerCase(),
          n = na.get(t)
        null == n ? na.set(t, [e]) : n.push(e)
      }
      let nr = new Map(),
        ns = new Set()
      for (let e of nl) {
        let t = na.get(((d = e), (d.displayName?.trim() || d.plugin.name).toLowerCase()))
        if (null != t && e !== tz) {
          let n = p()(t, eI)[0]
          if (null != n) for (let i of (nr.set(e.plugin.id, n), t)) ns.add(i.bundleId)
        }
      }
      let no = (function (e) {
          var t, n
          let a,
            r,
            s,
            o,
            c = (0, i.c)(13),
            {
              browserExtensionInstalledByFamily: u,
              browserPlugin: d,
              chromeAppPlugins: m,
              computerUsePlugin: h,
              enabledBrowserFamilies: f,
              excludedNativeAppBundleIds: y,
              installedBrowserFamilies: v,
              isInstalledBrowserFamiliesLoading: I,
              isNativeAppsLoading: b,
              messagesAppPlugin: S,
              microsoftExcelAppPlugins: w,
              microsoftPowerPointAppPlugins: M,
              microsoftWordAppPlugins: k,
              nativeApps: x,
              onPluginMentionInserted: _,
              pluginMentionLabels: A,
              query: L,
            } = e,
            P = (0, g.A)(),
            { platform: N } = (0, T.V)(),
            E = L.trim().toLowerCase(),
            R = (0, X.WE)(E)
          c[0] !== N
            ? ((a =
                "macOS" === N
                  ? { title: el.macTitle, loading: el.macLoading }
                  : { title: el.desktopTitle, loading: el.desktopLoading }),
              (c[0] = N),
              (c[1] = a))
            : (a = c[1])
          let O = a,
            j = P.formatMessage({
              id: "computerUse.label",
              defaultMessage: "Computer use",
              description: "Label for the Computer Use feature",
            }),
            U = m[0] ?? null,
            $ = [
              {
                alias: J.ER,
                description: P.formatMessage({
                  id: "computerUse.nativeApps.microsoftExcel.detail",
                  defaultMessage: "Live workbook control",
                  description: "Detail text for the Microsoft Excel mention that routes to live Excel control.",
                }),
                kind: "microsoft-excel-plugin",
                plugin: w[0] ?? null,
              },
              {
                alias: J.wq,
                description: P.formatMessage({
                  id: "computerUse.nativeApps.microsoftPowerPoint.detail",
                  defaultMessage: "Live presentation control",
                  description:
                    "Detail text for the Microsoft PowerPoint mention that routes to live PowerPoint control.",
                }),
                kind: "microsoft-powerpoint-plugin",
                plugin: M[0] ?? null,
              },
              {
                alias: J.dl,
                description: P.formatMessage({
                  id: "computerUse.nativeApps.microsoftWord.detail",
                  defaultMessage: "Live document control",
                  description: "Detail text for the Microsoft Word mention that routes to live Word control.",
                }),
                kind: "microsoft-word-plugin",
                plugin: k[0] ?? null,
              },
            ],
            q = x.find(eo) ?? null,
            H =
              null == d || 0 === E.length
                ? []
                : f.flatMap((e) => {
                    var t, n
                    if (
                      0 >= ((t = (0, ei.Or)(e)), Math.max((n = R)(t), n(`@${t}`))) ||
                      (!u[e] && v?.includes(e) !== !0)
                    )
                      return []
                    let i = (0, ei._K)(e)
                    return [
                      {
                        browserFamily: e,
                        kind: "browser-plugin",
                        plugin: d,
                        mention: { ...(0, Y.ec)(d, A), ...i, description: j, path: (0, ei.ri)(d.plugin.id, e) },
                        nativeApp: null,
                      },
                    ]
                  }),
            K =
              E.length > 0 &&
              null == d &&
              null != U &&
              ((t = U), Math.max((n = R)(t.plugin.name), n(t.displayName ?? ""), n(F.Sb), n(`@${F.Sb}`)) > 0)
                ? {
                    kind: "app-plugin",
                    plugin: U,
                    mention: { ...(0, Y.ec)(U, A), name: F.Sb, displayName: F.Sb, description: j },
                    nativeApp: null == q ? null : { ...q, displayName: (0, F.Mg)(q) },
                  }
                : null,
            D =
              null != S
                ? {
                    kind: "app-plugin",
                    plugin: S,
                    mention: { ...(0, Y.ec)(S, A), description: (0, Y.zc)(S) ?? "" },
                    nativeApp: null,
                  }
                : null,
            W = [...(null == K ? [] : [K]), ...(E.length > 0 && null != D && ec(D, R) > 0 ? [D] : [])],
            G = $.flatMap((e) => {
              let { alias: t, description: n, kind: i, plugin: l } = e
              if (0 === E.length || null == l || !(0, J.iZ)(t, R)) return []
              let a = x.find((e) => (0, J.Th)(t, e)) ?? null
              return [
                {
                  kind: i,
                  plugin: l,
                  mention: (0, J.xX)({ alias: t, plugin: l, description: n }),
                  nativeApp: null == a ? null : { ...a, displayName: t.label },
                },
              ]
            }),
            Q =
              0 === E.length || null == h
                ? []
                : ee()(x, es)
                    .filter(
                      (e) =>
                        !(
                          y.has(e.bundleId) ||
                          (null != d && v?.some((t) => (0, ei.d)(t, e)) === !0) ||
                          (null == d && null != U && (0, F.mz)(e)) ||
                          (null != S && e.bundleId === C.n) ||
                          $.some((t) => {
                            let { alias: n, plugin: i } = t
                            return null != i && (0, J.Th)(n, e)
                          })
                        ),
                    )
                    .map((e) => {
                      let t = (0, F.Mg)(e)
                      return { kind: "native-app", app: t === e.displayName ? e : { ...e, displayName: t }, plugin: h }
                    })
                    .filter((e) => {
                      var t, n
                      return (
                        (t = e.app.displayName),
                        (n = E),
                        t
                          .toLocaleLowerCase()
                          .split(/\s+/)
                          .some((e) => e.startsWith(n))
                      )
                    }),
            B = p()([...H, ...W, ...G, ...Q], (e) =>
              "native-app" === e.kind ? -R(e.app.displayName) : -ec(e, R),
            ).slice(0, 8),
            V = B.flatMap(er)
          c[2] !== h
            ? ((r = (e) => ({ ...(0, en.fY)({ appPath: e.appPath }), enabled: null != h })), (c[2] = h), (c[3] = r))
            : (r = c[3])
          let Z = (0, l.E)({ queries: V.map(r) }),
            eu =
              E.length > 0 && (b || I) && 0 === H.length && 0 === W.length && 0 === G.length && 0 === Q.length
                ? O.loading
                : null
          if ((null == h && 0 === H.length && 0 === W.length && 0 === G.length) || (0 === B.length && null == eu))
            return null
          let ed = O.title,
            ep = B.map((e) => {
              if ("native-app" !== e.kind) {
                let t = null == e.nativeApp ? "" : (Z[V.indexOf(e.nativeApp)]?.data?.iconSmall ?? "")
                return {
                  key:
                    "browser-plugin" === e.kind
                      ? `browser-plugin-alias:${e.browserFamily}:${e.mention.path}`
                      : "app-plugin" === e.kind
                        ? `plugin:${e.mention.path}`
                        : `office-plugin-alias:${e.kind}:${e.mention.path}`,
                  label: e.mention.displayName,
                  detail: e.mention.description,
                  searchTerms: [
                    e.plugin.plugin.name,
                    e.plugin.displayName ?? "",
                    e.mention.displayName,
                    `@${e.mention.displayName}`,
                  ],
                  icon:
                    "browser-plugin" === e.kind
                      ? (0, z.HP)(null, {
                          iconSmall: e.mention.iconSmall,
                          basePath: null,
                          alt: e.mention.displayName,
                          fallbackName: e.mention.displayName,
                          fallbackIcon: et.A,
                        })
                      : null == e.nativeApp
                        ? (0, Y.PG)(e.plugin, A)
                        : (0, z.HP)(null, {
                            iconSmall: t,
                            basePath: e.nativeApp.appPath,
                            alt: e.mention.displayName,
                            fallbackName: e.nativeApp.bundleId,
                            fallbackIcon: et.A,
                          }),
                  type: "mention",
                  insertMention: (t) => {
                    let { composerController: n, mentionState: i } = t
                    ;(n.insertMention(e.mention, i),
                      _?.(e.plugin, "browser-plugin" === e.kind ? e.browserFamily : void 0))
                  },
                }
              }
              let t = Z[V.indexOf(e.app)]?.data?.iconSmall ?? "",
                n = (0, F.UA)({ app: e.app, description: j, computerPlugin: e.plugin, iconSmall: t })
              return {
                key: `plugin:${n.path}:${e.app.bundleId}`,
                label: n.displayName,
                detail: j,
                icon: (0, z.HP)(null, {
                  iconSmall: t,
                  basePath: e.app.appPath,
                  alt: n.displayName,
                  fallbackName: e.app.bundleId,
                  fallbackIcon: et.A,
                }),
                type: "mention",
                insertMention: (t) => {
                  let { composerController: i, mentionState: l } = t
                  ;(i.insertMention(n, l), _?.(e.plugin))
                },
              }
            })
          return (
            c[4] !== I || c[5] !== b || c[6] !== Z
              ? ((s = b || I || Z.some(ea)), (c[4] = I), (c[5] = b), (c[6] = Z), (c[7] = s))
              : (s = c[7]),
            c[8] !== eu || c[9] !== s || c[10] !== ep || c[11] !== O.title
              ? ((o = { id: "native-apps", title: ed, items: ep, emptyState: eu, isLoading: s }),
                (c[8] = eu),
                (c[9] = s),
                (c[10] = ep),
                (c[11] = O.title),
                (c[12] = o))
              : (o = c[12]),
            o
          )
        })({
          browserExtensionInstalledByFamily: tX,
          browserPlugin: tF,
          chromeAppPlugins: t2,
          computerUsePlugin: tz,
          enabledBrowserFamilies: t0,
          excludedNativeAppBundleIds: ns,
          installedBrowserFamilies: tV,
          isInstalledBrowserFamiliesLoading: tJ,
          isNativeAppsLoading: tW,
          messagesAppPlugin: t3,
          microsoftExcelAppPlugins: t4,
          microsoftPowerPointAppPlugins: t5,
          microsoftWordAppPlugins: t6,
          nativeApps: tD,
          onPluginMentionInserted: tZ,
          pluginMentionLabels: tq,
          query: e6,
        }),
        nc = t$ && 0 === nl.length,
        nu = []
      if (nl.length > 0 || nc) {
        let e, t
        ;(eV[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, f.zR)({
              id: "composer.atMentionList.plugins",
              defaultMessage: "Plugins",
              description: "Section header for plugin results in the @ mention list.",
            })),
            (eV[57] = e))
          : (e = eV[57]),
          eV[58] !== nc
            ? ((t = nc
                ? (0, f.zR)({
                    id: "composer.atMentionList.pluginsLoading",
                    defaultMessage: "Loading plugins…",
                    description:
                      "Shown in the plugins section when plugin discovery is loading and no results have arrived yet",
                  })
                : null),
              (eV[58] = nc),
              (eV[59] = t))
            : (t = eV[59]),
          nu.push({
            id: "plugins",
            title: e,
            items: nl.map((e) => {
              let t = nr.get(e.plugin.id),
                n = nn.get(e.plugin.id),
                i = (0, Y.ec)(e, tq),
                l = {
                  ...i,
                  path: null == n ? i.path : `${i.path}?site=${(0, B.rY)(n)}`,
                  computerUseAppMentionPath: null != t && null != tz ? (0, F.I8)(t, tz) : void 0,
                },
                { url: a, useCurrentColorMask: r } = (0, z.Oe)({
                  iconSmall: l.iconSmall,
                  basePath: l.path,
                  smallOnly: !0,
                })
              return {
                key: `plugin:${i.path}`,
                mentionPath: l.path,
                label: l.displayName,
                detail: (0, Y.zc)(e),
                searchTerms: [
                  e.plugin.name,
                  e.displayName ?? "",
                  `@${l.displayName}`,
                  `@${e.displayName ?? e.plugin.name}`,
                ],
                searchKeywords: e.keywords,
                icon: L.A,
                iconImage: { src: a, monochrome: r },
                type: "mention",
                insertMention: (i) => {
                  let { composerController: a, mentionState: r } = i
                  ;(a.insertMention(l, r), tZ(e), null != n && (0, y.fv)(ti), null != t && null != tz && tZ(tz))
                },
              }
            }),
            emptyState: t,
            isLoading: t$,
          }))
      }
      return (
        null != no && nu.push(no),
        {
          arePluginsLoading: t$,
          mentionablePlugins: tH,
          sitesSource:
            null == e8
              ? void 0
              : { sections: e8.sections.map((e) => ({ ...e, items: e.items.filter((e) => !ni.has(e.key)) })) },
          sections: nu,
          systemHintsByMentionPath: tg ? tP : void 0,
        }
      )
    }
    function eI(e) {
      return e.bundleId
    }
    function eb(e) {
      return (0, v.VB)(e.current_live_url)
    }
    function eS(e) {
      let { plugin: t } = e
      return t.installed && t.id === ey
    }
    function ew(e) {
      let { plugin: t } = e
      return t.id === C.G
    }
    function eM(e) {
      return { browserFamily: e }
    }
    function ek(e) {
      let { marketplaceName: t, plugin: n } = e
      return n.name === h.kJv && (0, h.foP)(t)
    }
    function ex(e) {
      let { marketplaceName: t, plugin: n } = e
      return n.name === h.kJv && (0, h.foP)(t)
    }
    function e_(e) {
      let { isLoading: t } = e
      return t
    }
    function eA(e) {
      return "chrome" === e || !G.includes(e)
    }
    function eT(e) {
      let { marketplaceName: t, marketplacePath: n } = e
      return t === h.hEe && null != n
    }
    function eL(e) {
      return G.includes(e.plugin.name)
    }
  },
  m3vH(e, t, n) {
    var i = n("QosV"),
      l = n("zTeN"),
      a = n("gwd9"),
      r = n("MrGp"),
      s = n("Yewb"),
      o = n("w8IV"),
      c = n("ABl9"),
      u = n("OWtl"),
      d = n("YWcr")
    n.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            n = (0, i.c)(8),
            {
              getChatGptConversationId: p,
              getLocalConversationId: m,
              hostId: h,
              marketplaceAnalytics: g,
              onMentionInserted: f,
            } = e,
            y = (0, l.gh)(u.u),
            { installPlugin: v } = (0, s.XY)()
          return (
            n[0] !== p || n[1] !== m || n[2] !== h || n[3] !== v || n[4] !== g || n[5] !== f || n[6] !== y
              ? ((t = (e, t) => {
                  if (!e.plugin.installed && null == t) {
                    let t,
                      n = m?.(),
                      i = p?.()
                    if (null != n) t = { type: "app-server", conversationId: n }
                    else if (null != i) {
                      let e = y.get(r.jS, i)
                      null != e && (t = { type: "chatgpt", conversationId: e })
                    }
                    v(e, {
                      conversation: t,
                      hostId: h,
                      marketplaceAnalytics: g,
                      reloadUserConfigAfterInstall: e.plugin.id === o.G,
                    })
                  }
                  ;(f?.((0, d.vt)(e.plugin.id)), e.plugin.id === c.$n && (0, a.fv)(y))
                }),
                (n[0] = p),
                (n[1] = m),
                (n[2] = h),
                (n[3] = v),
                (n[4] = g),
                (n[5] = f),
                (n[6] = y),
                (n[7] = t))
              : (t = n[7]),
            t
          )
        },
      },
    )
  },
  KMx9(e, t, n) {
    n.d(t, { q: () => C })
    var i = n("QosV"),
      l = n("T0Rc"),
      a = n("zTeN"),
      r = n("DBCl"),
      s = n("Qgfj"),
      o = n("Dgwo"),
      c = n("oYYx"),
      u = n("vnLQ"),
      d = n("SV1R"),
      p = n("tNuX"),
      m = n("PIwo"),
      h = n("OWtl"),
      g = n("kfGJ"),
      f = n("B5Qz"),
      y = n("bnxy"),
      v = n("rvFo"),
      I = n("GEsy"),
      b = n("SRbQ"),
      S = n("D6V5"),
      w = n("L2Eu"),
      M = n("JQtI"),
      k = n("btvb"),
      x = n("r6TF"),
      _ = n("d6Ff"),
      A = n("CoqP"),
      T = n("YWcr")
    let L = {
        sections: [
          {
            id: "files-and-chats",
            title: (0, s.zR)({
              id: "composer.atMentionList.filesAndChats",
              defaultMessage: "Files and chats",
              description: "Section header shown before the user searches files and tasks in the @ mention list.",
            }),
            items: [],
            emptyState: (0, s.zR)({
              id: "composer.atMentionList.filesAndChats.emptyQuery",
              defaultMessage: "Type to search files or chats",
              description: "Shown in the files and tasks section when the @ mention query is empty.",
            }),
            isLoading: !1,
          },
        ],
      },
      P = { sections: [] }
    function C(e) {
      let t,
        n,
        C,
        H = (0, i.c)(8),
        { excludedThreadReferences: z, hostId: K, query: D, roots: W, searchTitlesOnly: G } = e,
        F = void 0 !== G && G,
        Q = (0, a.gh)(h.u),
        B = (0, I.o)(D, 100),
        V = D.trim(),
        J = B.trim(),
        Y = J !== V,
        { remoteConnections: X, enabledRemoteHostIdSet: Z } = (0, m.mw)(),
        ee = (0, c.g)(X),
        et = [...new Set([K, g.fI, ...(ee?.map(q) ?? [])])],
        en = new Set([K, g.fI, ...Z]),
        { data: ei } = (0, d.Q)(r.Q2Y.PROJECTLESS_THREAD_IDS),
        { data: el } = (0, d.Q)(r.Q2Y.THREAD_WORKSPACE_ROOT_HINTS),
        { data: ea, isFetching: er } = (0, l.I)({
          queryKey: [F ? "page-thread-title-search" : "composer-thread-search", et, J],
          queryFn: async () => {
            let e = await Promise.allSettled(
              et.map((e) => (0, o.V)(Q, e).searchThreads({ query: J, searchTitlesOnly: F, cursor: null, limit: 50 })),
            )
            return { results: e.flatMap($), hasFailures: e.some(U) }
          },
          enabled: null != W && J.length > 0,
          refetchInterval: j,
          staleTime: v.D.THIRTY_SECONDS,
        }),
        { data: es, isFetching: eo } = (0, l.I)({
          queryKey: ["composer-known-threads", [...en], et, V],
          queryFn: (e) => {
            let { signal: t } = e
            return (0, r._qC)(
              (async function (e, t, n) {
                let i = [],
                  l = new Set(),
                  a = [...t],
                  s = await Promise.all(
                    a.map(async (t) => {
                      let i = { stack: [], error: void 0, hasError: !1 }
                      try {
                        if (!n.has(t)) return null
                        let l = (0, b.mS)(i, (0, o.V)(e, t).getCachedThreadSearchSnapshot(), !1)
                        return await l
                      } catch (e) {
                        ;((i.error = e), (i.hasError = !0))
                      } finally {
                        ;(0, b.hk)(i)
                      }
                    }),
                  ),
                  c = e.get(f.kv) ? e.get(f.kZ) : null,
                  u = c?.entries.filter((e) => "chatgpt" !== e.sourceKind && t.has(e.hostId)) ?? [],
                  { automationDisplayNames: d } = e.get(k.P),
                  p = e.get(x.Oo)
                for (let [e, t] of a.entries()) {
                  let n = s[e],
                    a = new Map(n?.conversations.map((e) => [e.summary.conversationId, e]))
                  for (let e of [...(n?.suppressedIds ?? []), ...(t === g.fI ? p : [])]) l.add((0, f.tJ)(t, e))
                  let o = new Map(n?.summaries.map((e) => [e.conversationId, e]))
                  for (let e of new Set([
                    ...u.filter((e) => e.hostId === t).map((e) => (0, r.JXB)(e.threadId)),
                    ...(n?.recentIds ?? []),
                    ...o.keys(),
                  ])) {
                    let n = a.get(e),
                      s = n?.summary ?? null,
                      u = o.get(e),
                      p = s ?? u,
                      m = p?.source,
                      h = (0, f.tJ)(t, e),
                      y = c?.entriesByKey.get(h),
                      v = y?.sourceKind === "chatgpt" ? null : y
                    if (
                      l.has(h) ||
                      n?.ephemeral === !0 ||
                      n?.sideConversation === !0 ||
                      (null != p && (0, S.I3)(p)) ||
                      (null != m && "object" == typeof m && "subAgent" in m) ||
                      s?.threadSource === r.l02 ||
                      u?.threadSource === r.l02 ||
                      v?.threadSource === r.l02
                    ) {
                      l.add(h)
                      continue
                    }
                    let I = null != v && (0, A.bT)({ catalogEntry: v, summary: u, liveTitle: s?.title ?? null }),
                      b = I ? v.displayTitle : u?.title,
                      k =
                        n?.fallbackSearchTitle ??
                        (n?.fallbackSearchTitle !== void 0 || null == s || (0, M.N)(s.threadStartKind, s.threadSource)
                          ? null
                          : (0, w.x1)(n?.titleInput ?? void 0)),
                      x =
                        null == s || (0, A.JL)(s.title, b)
                          ? null
                          : (0, w.Lm)({ id: e, title: s.title, fallbackSearchTitle: k, turns: null }),
                      T = x ?? b ?? ((t === g.fI && d.get(e)?.trim()) || null),
                      L = null == x || s?.title?.trim() ? T : (k ?? T),
                      P = (I ? v.cwd : u?.cwd) ?? s?.cwd ?? ""
                    i.push({
                      kind: "local",
                      conversationId: e,
                      threadId: e,
                      hostId: t,
                      threadKey: (0, _.z3)(e),
                      title: T,
                      searchTitle: L ?? (P || e),
                      cwd: P,
                      branch: s?.gitInfo?.branch ?? u?.gitInfo?.branch ?? v?.gitBranch ?? "",
                      updatedAt: I
                        ? 1e3 * v.sourceRecencyAt
                        : (u?.recencyAt ?? u?.updatedAt ?? s?.recencyAt ?? s?.updatedAt ?? 0),
                      searchPreview: null,
                    })
                  }
                }
                return { results: i, excludedKeys: l }
              })(Q, en, new Set(et)),
              t,
            )
          },
          enabled: null != W && V.length > 0,
          staleTime: 0,
          gcTime: 0,
        })
      if (null == W) return null
      if (0 === V.length) return L
      let ec = es?.results ?? [],
        eu = es?.excludedKeys,
        ed = Y || null == es ? [] : (ea?.results ?? []).filter(O),
        ep = new Set(ed.map(R)),
        em = ec.filter(
          (e) =>
            !ep.has((0, f.tJ)(e.hostId, e.threadId)) ||
            (0, u.N6)({ asyncResults: [], loadedChatSearchResults: [e], limit: 1, query: V }).length > 0,
        ),
        eh = W.map(E).filter(N),
        eg = new Set(ei),
        ef = (0, u.N6)({
          asyncResults: ed,
          loadedChatSearchResults: em,
          limit: em.length + ed.length,
          query: V,
        }).filter(
          (e) =>
            "local" === e.kind &&
            en.has(e.hostId) &&
            !eu?.has((0, f.tJ)(e.hostId, e.threadId)) &&
            !z.some((t) => (t.hostId ?? K) === e.hostId && t.threadId === e.threadId),
        ),
        ey = [],
        ev = [],
        eI = []
      for (let e of ef) {
        let t = el?.[e.threadId] ?? e.cwd,
          n = null == t ? "" : (0, y.JH)(t).replace(/\/+$/, "")
        e.hostId === K && eh.some((e) => n === e || n.startsWith(`${e}/`))
          ? ey.push(e)
          : eg.has(e.threadId)
            ? ev.push(e)
            : eI.push(e)
      }
      let eb = [...ey, ...ev, ...eI].map((e) => {
        let t = e.title?.trim() || e.threadId,
          n = X.find((t) => t.hostId === e.hostId)?.displayName ?? null
        return {
          ariaLabel: null == n ? void 0 : `${t} ${n}`,
          key: `thread:${e.hostId}:${e.threadId}`,
          label: t,
          detail: n,
          searchTerms: (function (e) {
            let t = [e.searchTitle, e.branch, e.cwd]
            if (null == e.searchPreview) return t
            switch (e.searchPreview.kind) {
              case "branchMatch":
                return [...t, e.searchPreview.branch]
              case "contentMatch":
                return [...t, e.searchPreview.snippet]
            }
          })(e),
          icon: p.A,
          type: "mention",
          insertMention: (n) => {
            let { composerController: i, mentionState: l } = n
            i.insertAgentMention({ kind: "agent", name: t, displayName: t, path: (0, T.yO)(e.threadId, e.hostId) }, l)
          },
        }
      })
      if (0 === eb.length && !Y && !er && !eo) return P
      ;(H[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.zR)({
            id: "composer.atMentionList.chats",
            defaultMessage: "Chats",
            description: "Section header for past task results in the @ mention list.",
          })),
          (H[0] = t))
        : (t = H[0]),
        H[1] !== eb.length
          ? ((n =
              0 === eb.length
                ? (0, s.zR)({
                    id: "composer.atMentionList.chats.loading",
                    defaultMessage: "Searching chats…",
                    description: "Shown in the tasks section while past tasks are loading",
                  })
                : null),
            (H[1] = eb.length),
            (H[2] = n))
          : (n = H[2]))
      let eS = Y || er || eo
      return (
        H[3] !== eb || H[4] !== t || H[5] !== n || H[6] !== eS
          ? ((C = { sections: [{ id: "threads", title: t, items: eb, emptyState: n, isLoading: eS }] }),
            (H[3] = eb),
            (H[4] = t),
            (H[5] = n),
            (H[6] = eS),
            (H[7] = C))
          : (C = H[7]),
        C
      )
    }
    function N(e) {
      return e.length > 0
    }
    function E(e) {
      return (0, y.JH)(e).replace(/\/+$/, "")
    }
    function R(e) {
      return (0, f.tJ)(e.hostId, e.threadId)
    }
    function O(e) {
      return e.threadSource !== r.l02
    }
    function j(e) {
      return e.state.data?.hasFailures === !0 && 1e3
    }
    function U(e) {
      return "rejected" === e.status
    }
    function $(e) {
      return "fulfilled" === e.status ? e.value.data : []
    }
    function q(e) {
      return e.hostId
    }
  },
  qfej(e, t, n) {
    n.d(t, { e6: () => v, Zb: () => y, Lo: () => I })
    var i = n("CjTC"),
      l = n("zd8w"),
      a = n("Qgfj"),
      r = n("KJ1J"),
      s = n("nRNm"),
      o = n("YWcr"),
      c = n("UN1G"),
      u = n("FvYa"),
      d = n("UxN3"),
      p = n("OGl1"),
      m = n("N5C1"),
      h = n("axh8"),
      g = n("zUz7"),
      f = n("N0Xk")
    function y({ hiddenTopLevelServers: e = [], pluginAppIds: t, plugins: n = [], sections: l, query: r, servers: s }) {
      let u = new Set(l.filter((e) => "plugins" === e.id).flatMap((e) => e.items.map((e) => e.key))),
        d = new Map(),
        p = s.filter((i) => {
          let l = b(i, n, t),
            a =
              null == l
                ? void 0
                : [
                    `plugin:plugin://${l.plugin.id}`,
                    null == i.connectorId ? null : `app:${(0, o.nw)(i.connectorId)}`,
                  ].find((e) => null != e && u.has(e))
          if (null == l || null == a) return !e.includes(i)
          let r = d.get(a)
          return (null == r ? d.set(a, { plugin: l, servers: [i] }) : ((r.plugin = l), r.servers.push(i)), !1)
        }),
        m = l.map((e) =>
          "plugins" !== e.id
            ? e
            : {
                ...e,
                items: e.items.map((e) => {
                  if ("mention" !== e.type) return e
                  let t = d.get(e.key),
                    n = t?.servers[0]
                  if (null == t || null == n) return e
                  let { plugin: l, servers: a } = t
                  return {
                    ...e,
                    submenu: {
                      analyticsIdentity: { pluginId: (0, i.p)(l.plugin) },
                      iconSmall: (0, o.kI)(l),
                      kind: "mcp-extension",
                      mentionProviders: a.map(({ mentionSearchTool: e, server: t }) => ({
                        mentionSearchTool: e,
                        server: t,
                      })),
                      mentionSearchTool: n.mentionSearchTool,
                      server: n.server,
                      title: e.label,
                    },
                  }
                }),
              },
        ),
        h = (function ({ plugins: e, pluginAppIds: t, query: n, servers: i }) {
          let l = n.trim().length > 0
          return i
            .flatMap((i) => {
              let a = Math.max((0, c.gr)(i.title, n), (0, c.gr)(i.detail, n))
              if (l && 0 === a) return []
              let r = b(i, e, t),
                s = {
                  analyticsIdentity: { ...i.identity, connectorId: i.connectorId ?? void 0 },
                  iconSmall: null == r ? void 0 : (0, o.kI)(r),
                  kind: "mcp-extension",
                  mentionSearchTool: i.mentionSearchTool,
                  server: i.server,
                  title: i.title,
                }
              return [
                {
                  item: {
                    detail: i.detail,
                    iconElement: S(s.iconSmall, i),
                    key: M(i),
                    label: i.title,
                    searchTerms: [i.detail],
                    submenu: s,
                    type: "submenu",
                  },
                  score: a,
                },
              ]
            })
            .sort(w)
        })({ plugins: n, pluginAppIds: t, query: r, servers: p })
      return 0 === h.length
        ? m
        : [
            {
              id: "mcp-servers",
              title: (0, a.zR)({
                id: "composer.atMentionList.mcpServers",
                defaultMessage: "MCP servers",
                description: "Section header for MCP server mention sources in the @ mention list",
              }),
              items: h.map(({ item: e }) => e),
              emptyState: null,
              isLoading: !1,
            },
            ...m,
          ]
    }
    function v({ isLoading: e, mentionSource: t, query: n = "", results: i, servers: r }) {
      let o = new Map(i?.map((e) => [M(e), e.items])),
        u = r.some(({ preload: e }) => e) ? 6 : 1 / 0,
        m = []
      for (let e of r) {
        let i = u - m.length
        if (0 === i) break
        let a = o.get(M(e))
        if (null == a) continue
        let { mentionSearchTool: r, server: h } = e
        for (let o of (function ({
          resourceTarget: e,
          iconSmall: t,
          items: n,
          mentionSearchTool: i,
          preloaded: a,
          providerIcon: r,
          query: o,
          server: u,
        }) {
          let m = a && o.trim() ? (0, c.WE)(o) : void 0
          return n.map((n, c) => {
            let h = "resource_link" === n.type ? (n.title ?? n.name) : n.title,
              y = m?.(h) === 0 ? n.searchTerms?.find((e) => m(e) > 0) : void 0,
              v = a ? (0, l.createElement)(s._, { text: h, query: o }) : void 0,
              I = null == y ? void 0 : (0, l.createElement)(s._, { text: y, query: o })
            switch (n.type) {
              case "resource":
              case "resource_link": {
                let s = "resource_link" === n.type ? n.uri : n.resourceUri,
                  o = (0, g.p)(n),
                  m = (function (e) {
                    let t = (function (e) {
                        try {
                          return new URL(e).searchParams
                        } catch {
                          return
                        }
                      })("resource_link" === e.type ? e.uri : e.resourceUri),
                      n =
                        ("resource_link" === e.type ? e.name : void 0) ??
                        t?.get("file_name") ??
                        t?.get("filename") ??
                        void 0,
                      i =
                        ("resource_link" === e.type ? e.mimeType : void 0) ??
                        t?.get("mime_type") ??
                        t?.get("mimeType") ??
                        void 0,
                      l = (0, p.re)(n ?? e.title, i)
                    if ("file" !== l || null != n || null != i) return p.Ug[l]
                  })(n)
                return {
                  detail: y ?? ("resource_link" === n.type ? n.description : n.subtitle) ?? null,
                  labelElement: v,
                  detailElement: I,
                  searchTerms: a ? n.searchTerms : void 0,
                  iconElement:
                    null == o
                      ? r
                      : (0, l.createElement)(f.X, {
                          className: "icon-leading shrink-0",
                          icon: o,
                          fallback: (0, l.createElement)(d.b5, { icon: m ?? p.Ug.file }),
                        }),
                  type: "mention",
                  insertMention: ({ composerController: n, mentionState: i }) => {
                    n.insertResourceMentionFromAtMention(
                      { iconSmall: t, resourceUri: s, server: u, connectorId: e?.connectorId, linkId: e?.linkId },
                      h,
                      i,
                    )
                  },
                  key: a
                    ? JSON.stringify(["mcp-extension-resource", u, i, s])
                    : `mcp-extension-resource:${u}:${i}:${s}:${c}`,
                  label: h,
                }
              }
              case "completion":
                return {
                  detail: y ?? n.detail ?? null,
                  labelElement: v,
                  detailElement: I,
                  searchTerms: a ? n.searchTerms : void 0,
                  insertText: n.insertText,
                  key: a
                    ? JSON.stringify(["mcp-extension-completion", u, i, n.title, n.insertText])
                    : `mcp-extension-completion:${u}:${i}:${c}`,
                  label: n.title,
                  type: "text-completion",
                }
            }
          })
        })({
          iconSmall: t.iconSmall || e.icon?.logoUrl || e.icon?.logoDarkUrl || "",
          items: e.preload
            ? (function (e, t, n) {
                let i = t.trim().toLowerCase()
                if (0 === i.length) return e.slice(0, n)
                let l = (0, c.WE)(t),
                  a = [],
                  r = [],
                  s = []
                for (let t of e) {
                  let e = ["resource_link" === t.type ? (t.title ?? t.name) : t.title, ...(t.searchTerms ?? [])]
                  if (e.some((e) => e.toLowerCase() === i)) {
                    if ((a.push(t), a.length === n)) break
                  } else
                    a.length + r.length < n && e.some((e) => e.toLowerCase().startsWith(i))
                      ? r.push(t)
                      : a.length + r.length + s.length < n && e.some((e) => l(e) > 0) && s.push(t)
                }
                return [...a, ...r, ...s].slice(0, n)
              })(a, n, i)
            : a.slice(0, i),
          preloaded: e.preload,
          providerIcon: S(t.iconSmall, e),
          query: n,
          resourceTarget: e.resourceTarget,
          mentionSearchTool: r,
          server: h,
        }))
          m.push({ ...o, mcpExtensionResultIdentity: { ...e.identity, connectorId: e.connectorId ?? void 0 } })
      }
      return 0 !== m.length || e
        ? [
            {
              id: M(t),
              title: t.title,
              titleValues: { scope: t.title },
              items: m,
              emptyState:
                e && 0 === m.length
                  ? (0, a.zR)({
                      id: "composer.atMentionList.mcpServersLoading",
                      defaultMessage: "Loading…",
                      description: "Shown while a selected MCP server mention provider is loading",
                    })
                  : null,
              isLoading: e,
              showTitle: !1,
            },
          ]
        : []
    }
    function I(e) {
      return e?.kind === "mcp-extension"
    }
    function b(e, t, n) {
      return t.find(({ canonicalAppId: t, appIds: l, plugin: a }) => {
        let s = (0, i.p)(a)
        return null != e.hosted && e.identity?.pluginId != null && null != s
          ? s === e.identity.pluginId
          : null != e.pluginId
            ? a.id === e.pluginId
            : (0, r.fI)(e.server)
              ? null != e.connectorId &&
                (t === e.connectorId ||
                  l?.includes(e.connectorId) === !0 ||
                  n?.get(a.id)?.includes(e.connectorId) === !0)
              : void 0 === e.pluginId && e.server === a.name
      })
    }
    function S(e, t) {
      if (e) {
        let { url: t, useCurrentColorMask: n } = (0, h.Oe)({ iconSmall: e })
        return (0, l.createElement)(u.R, {
          className: "icon-xs",
          alt: "",
          logoUrl: t,
          monochrome: n,
          fallback: (0, l.createElement)(m.A, { className: "icon-xs" }),
        })
      }
      return (0, l.createElement)(f.X, { icon: t.icon, fallback: (0, l.createElement)(m.A, { className: "icon-xs" }) })
    }
    function w(e, t) {
      return t.score - e.score || e.item.label.localeCompare(t.item.label)
    }
    function M({ mentionSearchTool: e, server: t }) {
      return `mcp-extension:${t}:${e}`
    }
  },
  Rw2H(e, t, n) {
    var i = n("ABep"),
      l = n("QosV"),
      a = n("i5ac"),
      r = n.n(a),
      s = n("zTeN"),
      o = n("G4E3"),
      c = n("Wf1j"),
      u = n("Qgfj"),
      d = n("SPnB"),
      p = n("UN1G"),
      m = n("GO7r"),
      h = n("OWtl"),
      g = n("rpnz"),
      f = n("e1xH"),
      y = n("vnV1"),
      v = n("ELpK"),
      I = n("Fa4w"),
      b = n("pyoT"),
      S = n("aeCT"),
      w = n("kTTh")
    function M(e) {
      return { pageId: e.root_page_id, space: e, title: e.name.trim() || e.id, detail: null }
    }
    function k(e) {
      return null == e.deleted_at
    }
    function x() {}
    function _(e) {
      return e.root_page_id
    }
    function A({
      defaultIconName: e,
      detail: t,
      documentType: n,
      namespace: l,
      symbol: a,
      pageId: r,
      space: s,
      title: c,
    }) {
      let u = (0, o.$j)({ kind: "page", id: r }),
        d = null == s ? void 0 : (0, i.jsx)(I.O, { spaceId: s.id, size: "leading" })
      return {
        key: u,
        ariaLabel: [c, t].filter((e) => null != e).join(" "),
        label: null == s ? (0, w.w)(c, void 0, void 0, a).title : c,
        labelElement:
          null != s
            ? void 0
            : (0, i.jsx)(S.s, {
                pageId: r,
                defaultIconName: e,
                documentType: n,
                namespace: l,
                symbol: a,
                title: c,
                children: ({ title: e }) => e,
              }),
        detail: t,
        searchTerms: null == t ? [c] : [c, t],
        iconElement:
          d ??
          (0, i.jsx)(S.s, {
            pageId: r,
            defaultIconName: e,
            documentType: n,
            namespace: l,
            symbol: a,
            title: c,
            children: ({ icon: e }) => e,
          }),
        type: "mention",
        insertMention: ({ composerController: e, mentionState: t }) => {
          e.insertPageReferenceMention({ path: u, spaceId: s?.id, title: c }, t)
        },
      }
    }
    function T(e, t, n) {
      let i = t.trim()
      if (0 === i.length) return e.slice(0, n).map(A)
      let l = (0, p.WE)(i)
      return e
        .map((e, t) => ({
          item: e,
          index: t,
          score: Math.max(l((0, w.O)(e.title).title), l(e.title), null == e.detail ? 0 : l(e.detail)),
        }))
        .filter((e) => e.score > 0)
        .sort((e, t) => t.score - e.score || e.index - t.index)
        .slice(0, 20)
        .map(({ item: e }) => A(e))
    }
    n.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            n,
            i,
            a,
            o,
            p,
            I,
            S,
            w,
            L,
            P = (0, l.c)(81),
            { enabled: C, query: N, expanded: E, category: R, searchQuery: O } = e,
            j = void 0 !== E && E,
            U = void 0 === O ? N : O,
            $ = (0, s.gh)(h.u),
            q = (0, c.A)(),
            H = (0, s.Ul)(f.pagesEnabled$),
            z = (0, s.Ul)(d.chatGptAuthenticatedAccountId$),
            K = !0 === (0, s.Ul)(!!(void 0 === C || C) && !!H && null != z && y.Sc),
            D = K && "spaces" !== R
          P[0] !== D ? ((t = { enabled: D }), (P[0] = D), (P[1] = t)) : (t = P[1])
          let { data: W, isFetching: G, isError: F, refetch: Q } = (0, s.Ul)(b.spacePagesQuery$, t),
            B = (0, s.Ul)(D ? b.spacePagesHasMore$ : null)
          P[2] !== K ? ((n = { enabled: K }), (P[2] = K), (P[3] = n)) : (n = P[3])
          let { data: V, isLoading: J, isError: Y } = (0, s.Ul)(b.spacesQuery$, n),
            X = (0, s.Ul)(D ? b.visibleSpacePages$ : null) ?? W
          P[4] !== U ? ((i = U.trim()), (P[4] = U), (P[5] = i)) : (i = P[5])
          let Z = i
          P[6] !== D || P[7] !== N ? ((a = D && N.trim().length >= 2), (P[6] = D), (P[7] = N), (P[8] = a)) : (a = P[8])
          let ee = a,
            et = ee && Z.length >= 2
          P[9] !== et ? ((o = { enabled: et }), (P[9] = et), (P[10] = o)) : (o = P[10])
          let { data: en, isFetching: ei, isError: el } = (0, s._U)(v.Q_, Z, o)
          if (!K) return null
          P[11] !== N ? ((p = N.trim()), (P[11] = N), (P[12] = p)) : (p = P[12])
          let ea = Z === p,
            er = J || (ee ? !ea || ei : G)
          P[13] !== V?.items ? ((I = new Set(V?.items.map(_))), (P[13] = V?.items), (P[14] = I)) : (I = P[14])
          let es = I
          P[15] !== N ? ((S = N.trim()), (P[15] = N), (P[16] = S)) : (S = P[16])
          let eo = S.length > 0,
            ec = j ? 20 : 5
          if (
            P[17] !== G ||
            P[18] !== ee ||
            P[19] !== F ||
            P[20] !== B ||
            P[21] !== j ||
            P[22] !== eo ||
            P[23] !== D ||
            P[24] !== ec ||
            P[25] !== q ||
            P[26] !== ea ||
            P[27] !== X?.items ||
            P[28] !== N ||
            P[29] !== Q ||
            P[30] !== $ ||
            P[31] !== en?.items ||
            P[32] !== es ||
            P[33] !== V
          ) {
            let e,
              t = new Map()
            for (let e of D && null != V ? (X?.items ?? []) : [])
              if (
                !(es.has(e.page_id) || (0, g.sD)(e.page_id)) &&
                !1 !== e.access.can_read &&
                null == e.deleted_at &&
                (t.set(e.page_id, e), !eo && t.size === ec)
              )
                break
            P[35] !== V?.items
              ? ((e = (e) => {
                  var t, n
                  let i
                  return (
                    (t = e),
                    (n = V?.items),
                    (i = n?.find((e) => e.id === t.drive_space_id)),
                    {
                      documentType: t.document_type,
                      namespace: t.namespace,
                      symbol: t.symbol,
                      pageId: t.page_id,
                      title: t.title?.trim() || t.page_id,
                      detail: i?.name ?? (null != t.parent && "title" in t.parent ? t.parent.title : null),
                    }
                  )
                }),
                (P[35] = V?.items),
                (P[36] = e))
              : (e = P[36])
            let n = T(Array.from(t.values(), e), N, ec),
              i =
                ee && ea && null != V
                  ? en?.items.flatMap((e) => {
                      let { source_type: n, payload: i, title: l } = e
                      if ("space" !== n || "space_page" !== i.kind || es.has(i.page_id)) return []
                      let { page_id: a, space_id: r } = i,
                        s = V?.items.find((e) => e.id === r),
                        o = t.get(a)
                      return [
                        A({
                          defaultIconName: i.default_symbol?.value,
                          documentType: i.document_type ?? o?.document_type,
                          namespace: o?.namespace,
                          symbol: i.symbol ?? o?.symbol,
                          pageId: a,
                          title: l.trim() || a,
                          detail: s?.name ?? null,
                        }),
                      ]
                    })
                  : void 0
            if (
              ((w = r()([...(i ?? []), ...n], "key").slice(0, 20)),
              D && !eo && w.length < 20 && (j || w.length < ec) && (B || F))
            ) {
              let e
              ;(P[37] !== B || P[38] !== Q || P[39] !== $
                ? ((e = () => {
                    ;(B ? (0, b.loadMoreSpacePages)($) : Q()).catch(x)
                  }),
                  (P[37] = B),
                  (P[38] = Q),
                  (P[39] = $),
                  (P[40] = e))
                : (e = P[40]),
                w.push({
                  key: "pages-load-more",
                  label: F
                    ? q.formatMessage({
                        id: "space.list.retryPersonalPages",
                        defaultMessage: "Retry pages",
                        description: "Action to retry loading personal Pages",
                      })
                    : q.formatMessage({
                        id: "space.list.loadMore",
                        defaultMessage: "Load more",
                        description: "Button to load more items in Space",
                      }),
                  detail: null,
                  disabled: G,
                  type: "submenu",
                  submenu: { kind: "at-mention-category", category: "pages" },
                  onOpen: e,
                }))
            }
            ;((P[17] = G),
              (P[18] = ee),
              (P[19] = F),
              (P[20] = B),
              (P[21] = j),
              (P[22] = eo),
              (P[23] = D),
              (P[24] = ec),
              (P[25] = q),
              (P[26] = ea),
              (P[27] = X?.items),
              (P[28] = N),
              (P[29] = Q),
              (P[30] = $),
              (P[31] = en?.items),
              (P[32] = es),
              (P[33] = V),
              (P[34] = w))
          } else w = P[34]
          let eu = Y || (ee && ea && el)
          if (
            P[41] !== J ||
            P[42] !== ee ||
            P[43] !== R ||
            P[44] !== j ||
            P[45] !== eu ||
            P[46] !== eo ||
            P[47] !== D ||
            P[48] !== ec ||
            P[49] !== q ||
            P[50] !== er ||
            P[51] !== w ||
            P[52] !== N ||
            P[53] !== V?.items ||
            P[54] !== Y
          ) {
            let e = []
            if (D && (w.length > 0 || er || eu)) {
              let t,
                n,
                i = null
              if (0 === w.length && !er && eu) {
                let e
                ;(P[56] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, u.zR)({
                      id: "composer.atMentionList.pagesSearchFailed",
                      defaultMessage: "Couldn’t search Pages",
                      description:
                        "Shown when the Page search request in the composer mention menu fails and no Page matches are available.",
                    })),
                    (P[56] = e))
                  : (e = P[56]),
                  (i = e))
              }
              P[57] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, u.zR)({
                    id: "composer.atMentionList.pages",
                    defaultMessage: "Pages",
                    description:
                      "Section header for shared Page documents in the composer @ mention list. Choosing a Page gives the current task a live document reference.",
                  })),
                  (P[57] = t))
                : (t = P[57])
              let l = ee ? "source-ranked" : void 0
              ;(P[58] !== i || P[59] !== eu || P[60] !== er || P[61] !== w || P[62] !== t || P[63] !== l
                ? ((n = {
                    id: "pages",
                    showTitle: !0,
                    title: t,
                    items: w,
                    queryMatchMode: l,
                    emptyState: i,
                    isError: eu,
                    isLoading: er,
                  }),
                  (P[58] = i),
                  (P[59] = eu),
                  (P[60] = er),
                  (P[61] = w),
                  (P[62] = t),
                  (P[63] = l),
                  (P[64] = n))
                : (n = P[64]),
                e.push(n))
            }
            if ("pages" !== R) {
              let t, n
              if (P[65] !== j || P[66] !== eo || P[67] !== ec || P[68] !== q || P[69] !== N || P[70] !== V?.items) {
                ;((n = q.formatMessage({
                  id: "composer.atMentionList.spaces",
                  defaultMessage: "Spaces",
                  description:
                    "Section header and search category for shared Spaces in the composer mention menu. A Space is a collection of Pages and files.",
                })),
                  (t = T((V?.items ?? []).filter(k).map(M), N, ec)))
                let e = eo && n.toLocaleLowerCase().startsWith(N.trim().toLocaleLowerCase())
                ;(!j &&
                  (e || (!eo && (V?.items.length ?? 0) > ec)) &&
                  t.push({
                    key: "spaces-browse",
                    label: n,
                    detail: null,
                    icon: { 16: m.i2, 20: m.hmv },
                    type: "submenu",
                    submenu: { kind: "at-mention-category", category: "spaces" },
                  }),
                  (P[65] = j),
                  (P[66] = eo),
                  (P[67] = ec),
                  (P[68] = q),
                  (P[69] = N),
                  (P[70] = V?.items),
                  (P[71] = t),
                  (P[72] = n))
              } else ((t = P[71]), (n = P[72]))
              if (t.length > 0 || J || Y) {
                let i, l
                ;(P[73] !== Y
                  ? ((i = Y
                      ? (0, u.zR)({
                          id: "composer.atMentionList.spacesLoadFailed",
                          defaultMessage: "Couldn’t load Spaces",
                          description: "Shown when the composer cannot load accessible Spaces.",
                        })
                      : null),
                    (P[73] = Y),
                    (P[74] = i))
                  : (i = P[74]),
                  P[75] !== J || P[76] !== t || P[77] !== Y || P[78] !== n || P[79] !== i
                    ? ((l = {
                        id: "spaces",
                        title: n,
                        showTitle: !0,
                        items: t,
                        isLoading: J,
                        isError: Y,
                        emptyState: i,
                      }),
                      (P[75] = J),
                      (P[76] = t),
                      (P[77] = Y),
                      (P[78] = n),
                      (P[79] = i),
                      (P[80] = l))
                    : (l = P[80]),
                  e.push(l))
              }
            }
            ;((L = { sections: e }),
              (P[41] = J),
              (P[42] = ee),
              (P[43] = R),
              (P[44] = j),
              (P[45] = eu),
              (P[46] = eo),
              (P[47] = D),
              (P[48] = ec),
              (P[49] = q),
              (P[50] = er),
              (P[51] = w),
              (P[52] = N),
              (P[53] = V?.items),
              (P[54] = Y),
              (P[55] = L))
          } else L = P[55]
          return L
        },
      },
    )
  },
  R4kT(e, t, n) {
    ;(n("kfGJ"),
      n.d(
        t,
        {},
        {
          b: function (e, t) {
            return !1
          },
        },
      ))
  },
  oXug(e, t, n) {
    var i = n("o6hs"),
      l = n("hOO0"),
      a = n("NnK8")
    let r = ["asdk_app_", "connector_", "plugin_asdk_app_", "plugin_connector_"]
    function s(e) {
      return null != e && (0, l.$)(e.replace(/^plugin_/, "")) === (0, l.$)(i.M1)
    }
    n.d(
      t,
      { dO: () => a.I },
      {
        JN: function (e) {
          return "DISABLED_BY_ADMIN" === e.status || "NOT_AVAILABLE" === e.installation_policy
        },
        RW: "connector_bd313622bce5485cb3d0b338715f7108",
        _t: s,
        r: function (e, t, n = !1) {
          return (
            !(
              !t &&
              (n && null != e.canonical_app_id
                ? [e.canonical_app_id, e.connector_id]
                : [e.id, e.connector_id, e.canonical_app_id]
              ).some(s)
            ) &&
            (null != e.connector_id || ((!n || null == e.canonical_app_id) && !r.some((t) => e.id.startsWith(t))))
          )
        },
      },
    )
  },
}
//# sourceMappingURL=923712.6148a9c308.js.map
