export const __rspack_esm_ids = [923712]
export const __webpack_modules__ = {
  ZQ23(e, t, n) {
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
      a = n("rS3J"),
      r = n("EULo")
    let s = "plugin://"
    function o(e) {
      let t = e.toLowerCase().replaceAll("\\", "/")
      if (t.startsWith(s)) return (0, i.AH)(t.slice(s.length).split("@")[0])
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
                l = o(i)
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
        lI: o,
        ss: function (e) {
          let t = null,
            n = 0
          for (let i = (0, a.ex)(e, n); null != i; i = (0, a.ex)(e, n)) ((t = o((0, r.gh)(i.path)) ?? t), (n = i.end))
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
      s = n("rS3J"),
      o = n("EULo"),
      c = n("yGJW"),
      u = n("Sd8U")
    let d = (0, l.vP)(u.PR, null),
      p = (0, l.vP)(u.PR, null)
    function m(e, t, n) {
      let l = void 0 === n ? e.get(d) : n
      null != l &&
        (e.set(p, {
          ...l,
          type: "template",
          templateId: t.templateId,
          templateOrigin: t.templateOrigin,
          inclusion: t.inclusion,
        }),
        (0, c.yy)(e, i.CodexArtifactTemplateSelected, {
          ...l,
          ...(null == t.templateId ? {} : { templateId: t.templateId }),
          templateOrigin: t.templateOrigin,
        }))
    }
    function h(e, t) {
      let n = 0
      for (let i = (0, s.ex)(e, n); null != i; i = (0, s.ex)(e, n)) {
        if ((0, o.gh)(i.path) === t) return !0
        n = i.end
      }
      return !1
    }
    n.d(
      t,
      {},
      {
        c$: m,
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
          if (null == n) return (e.set(d, null), null)
          let l = { journeyId: (0, a.A)(), carouselKind: n }
          return (e.set(d, l), (0, c.yy)(e, i.CodexArtifactTemplateCarouselShown, l), l)
        },
        qv: function (e, { attachmentPath: t, journey: n, templateId: l }) {
          m(
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
          let l = e.get(p)
          if ((e.set(p, null), null != l)) {
            var a, r, s
            if (
              "create" === l.type
                ? h(n, l.mentionPath)
                : ((a = l.inclusion),
                  (r = n),
                  (s = t),
                  "mention" === a.type ? h(r, a.path) : s.some((e) => e.path === a.path))
            ) {
              if ("create" === l.type)
                return void (0, c.yy)(e, i.CodexArtifactTemplateCreateNewTemplatePromptSubmitted, {
                  journeyId: l.journeyId,
                  carouselKind: l.carouselKind,
                })
              ;(0, c.yy)(e, i.CodexArtifactTemplatePromptSubmitted, {
                journeyId: l.journeyId,
                carouselKind: l.carouselKind,
                ...(null == l.templateId ? {} : { templateId: l.templateId }),
                templateOrigin: l.templateOrigin,
              })
            }
          }
        },
        sv: function (e, t) {
          let n = e.get(d)
          null != n &&
            ((0, c.yy)(e, i.CodexArtifactTemplateCarouselDismissed, { ...n, dismissReason: t }), e.set(d, null))
        },
        tN: function (e, t) {
          m(e, {
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
          let n = e.get(d)
          null != n &&
            (e.set(p, { ...n, type: "create", mentionPath: t }),
            (0, c.yy)(e, i.CodexArtifactTemplateCreateNewTemplateSelected, { ...n }))
        },
        zD: d,
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
      A = (0, r.un)(y.u, ({ get: e }) => {
        let t = (0, b.ZI)(e, e(b.Tv))
        return {
          cloudTasks: [...(e(b.Ei).data ?? []), ...t.flatMap((e) => ("remote" === e.kind ? [e.task] : []))],
          conversationsMeta: t.flatMap((e) => ("local" === e.kind && null != e.summary ? [e.summary] : [])),
          hostIds: new Set([I.fI, s.iwv, ...e(x)]),
          projectLabelByThreadKey: e(w.o4),
        }
      })
    function T(e) {
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
    function _(e) {
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
    function P(e) {
      let t = (0, d.WE)(e),
        n = e.normalize("NFC"),
        i = n === e ? t : (0, d.WE)(n)
      return {
        score: t,
        scoreTitle: (e, n = e.searchTitle) => ("local" === e.kind && e.title ? i(n.normalize("NFC")) : t(n)),
      }
    }
    function C(e, { score: t, scoreTitle: n }, i) {
      let l = n(e)
      if (l > 0) return { fieldPriority: 0, score: l, value: e.searchTitle }
      let a = (function (e, t) {
        if (null == e) return null
        switch (e.kind) {
          case "contentMatch":
            return E(e.snippet, t, 1)
          case "branchMatch":
            return E(e.branch, t, 2)
        }
      })(e.searchPreview, t)
      if (null != a) return a
      switch (e.kind) {
        case "local":
          return (
            (i.length >= 8 && e.threadId.toLowerCase().startsWith(i) ? E(e.threadId, t, 0) : null) ??
            E(e.branch, t, 2) ??
            E(e.projectLabel ?? "", t, 3) ??
            E(e.cwd, t, 3)
          )
        case "remote":
          return E(e.projectLabel ?? "", t, 3) ?? E(e.environmentLabel, t, 3)
        case "dot":
          return { fieldPriority: 1, score: 0, value: null }
        case "chatgpt":
          return null
      }
    }
    function N(e, t) {
      let n = e.match.fieldPriority - t.match.fieldPriority
      if (0 !== n) return n
      let i = t.match.score - e.match.score
      return 0 !== i ? i : t.result.updatedAt - e.result.updatedAt
    }
    function E(e, t, n) {
      let i = t(e)
      return 0 === i ? null : { fieldPriority: n, score: i, value: e }
    }
    function R(e, t) {
      let n = [],
        i = new Map()
      for (let l of [...e, ...t]) {
        let e = T(l),
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
    function O(e, t, n) {
      if ("durable" !== (0, u._)(t)) return !1
      let { data: i } = e(g.cloudAeonByThreadId$, (0, s.JXB)(n))
      return i?.active_root_thread_id != null && i.active_root_thread_id !== n
    }
    n.d(
      t,
      {},
      {
        EI: function ({ loadedChatSearchResults: e, chatGptResults: t, isChatSelectable: n, limit: i }) {
          return R([...e, ...t], [])
            .filter(n)
            .sort((e, t) => t.updatedAt - e.updatedAt)
            .slice(0, i)
        },
        LU: T,
        MQ: function (e, t, n, i) {
          if (!t) return null
          let l = P(t)
          return l.scoreTitle(e, n) > 0 || l.score(i) > 0 ? null : (C(e, l, t.toLowerCase())?.value ?? null)
        },
        N6: function ({
          asyncResults: e,
          chatGptResults: t = [],
          isChatSelectable: n,
          loadedChatSearchResults: i,
          limit: l,
          query: a,
        }) {
          let r = e.map(_),
            s = R([...i, ...t], r)
          return (function (e, t, n) {
            if (n <= 0) return []
            let i = t.trim()
            if (0 === i.length) return []
            let l = [],
              a = P(i),
              r = i.toLowerCase()
            for (let t of e) {
              let e = C(t, a, r)
              if (null == e) continue
              let i = { result: t, match: e }
              if (l.length < n) {
                l.push(i)
                continue
              }
              let s = (function (e) {
                let t = 0
                for (let n = 1; n < e.length; n += 1) 0 > N(e[t], e[n]) && (t = n)
                return t
              })(l)
              0 > N(i, l[s]) && (l[s] = i)
            }
            return l.sort(N).map(({ result: e }) => e)
          })(null == n ? s : s.filter(n), a, l)
        },
        T0: function (e, t) {
          var n
          let l,
            c = (0, i.c)(3),
            u = (0, r.Ul)(void 0 === t || t ? A : void 0)
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
                          .filter((t) => "local" !== t.kind || !t.isAeonThread || !O(e, t.hostId, t.threadId))
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
          let l = R(t, []).filter((t) => !e?.has(t.threadKey)),
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
          let { score: i, scoreTitle: l } = P(n)
          return l(e) > 0 || 0 === i(e.branch) ? null : { kind: "branchMatch", branch: e.branch }
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
          let r = R(t, []),
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
              e.filter((e) => !(0, m.N)(e.threadStartKind, e.threadSource) || !O(t, e.hostId, e.threadId)),
            { isEqual: a() },
          )
        },
      },
    )
  },
  R2HH(e, t, n) {
    n.d(t, { Ox: () => G, Jc: () => F, yl: () => w })
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
      b = n("jDom"),
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
          loadingIcons: A,
          noResults: T,
          sections: _,
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
        H = void 0 === k || k,
        q = void 0 === N ? "top" : N,
        z = void 0 === E ? "" : E,
        K = void 0 === R ? "default" : R,
        D = void 0 !== O && O,
        W = void 0 !== j && j
      d[0] !== _ ? ((t = new Map(_.flatMap(M))), (d[0] = _), (d[1] = t)) : (t = d[1])
      let G = t
      d[2] !== G ? ((n = (e) => G.get(e) ?? null), (d[2] = G), (d[3] = n)) : (n = d[3])
      let Q = (0, b.K)(n),
        F = null != I,
        B = null == v ? y : void 0
      if (
        (d[4] !== T
          ? ((a =
              T ??
              (0, i.jsx)(c.A, {
                id: "composer.atMentionList.noResults",
                defaultMessage: "No results",
                description: "Shown when there are no mention results matching the search query",
              })),
            (d[4] = T),
            (d[5] = a))
          : (a = d[5]),
        d[6] !== Q || d[7] !== L
          ? ((r = (e) => {
              L(null == e ? null : () => Q(e.key))
            }),
            (d[6] = Q),
            (d[7] = L),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== Q || d[10] !== G || d[11] !== P || d[12] !== L
          ? ((s = (e) => {
              let t = G.get(e.key)
              null != t && (L(() => Q(e.key)), P(t))
            }),
            (d[9] = Q),
            (d[10] = G),
            (d[11] = P),
            (d[12] = L),
            (d[13] = s))
          : (s = d[13]),
        d[14] !== y || d[15] !== v || d[16] !== I || d[17] !== w || d[18] !== A || d[19] !== _)
      ) {
        let e
        ;(d[21] !== y || d[22] !== v || d[23] !== I || d[24] !== w || d[25] !== A
          ? ((e = (e) => ({
              ref: e.ref,
              footer: e.id === v ? y : void 0,
              emptyState:
                null == e.emptyState || ((null != I || null != A) && e.isLoading)
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
            (d[25] = A),
            (d[26] = e))
          : (e = d[26]),
          (o = _.map(e)),
          (d[14] = y),
          (d[15] = v),
          (d[16] = I),
          (d[17] = w),
          (d[18] = A),
          (d[19] = _),
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
        d[34] !== H ||
        d[35] !== W ||
        d[36] !== U ||
        d[37] !== $ ||
        d[38] !== A ||
        d[39] !== C ||
        d[40] !== q ||
        d[41] !== p ||
        d[42] !== z ||
        d[43] !== B ||
        d[44] !== a ||
        d[45] !== r ||
        d[46] !== s ||
        d[47] !== o ||
        d[48] !== F
          ? ((u = (0, i.jsx)(S.d, {
              className: m,
              preserveHighlightOnItemsChange: p,
              closeOnNoResults: h,
              containerRef: g,
              chromeVariant: K,
              density: f,
              fixedSectionHeaders: D,
              header: I,
              loadingIcons: A,
              showHeaderDividerOnScroll: F,
              footer: B,
              isActive: H,
              isHomeMenu: W,
              keyboardEventTarget: U,
              keyboardVariant: $,
              noResults: a,
              onHighlight: r,
              onRequestClose: C,
              placement: q,
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
            (d[34] = H),
            (d[35] = W),
            (d[36] = U),
            (d[37] = $),
            (d[38] = A),
            (d[39] = C),
            (d[40] = q),
            (d[41] = p),
            (d[42] = z),
            (d[43] = B),
            (d[44] = a),
            (d[45] = r),
            (d[46] = s),
            (d[47] = o),
            (d[48] = F),
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
    var A = n("bVeK"),
      T = n("Wf1j"),
      _ = n("EShr")
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
        S = (0, T.A)(),
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
              children: (0, i.jsx)(_.T, { ariaLabel: m, onSelect: v, options: h, selectedId: b, variant: "filter" }),
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
        A = (0, l.c)(57)
      ;(A[0] !== e
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
          (A[0] = e),
          (A[1] = t),
          (A[2] = n),
          (A[3] = a),
          (A[4] = r),
          (A[5] = s),
          (A[6] = o),
          (A[7] = c),
          (A[8] = u))
        : ((t = A[1]), (n = A[2]), (a = A[3]), (r = A[4]), (s = A[5]), (o = A[6]), (c = A[7]), (u = A[8])),
        A[9] !== o ? ((d = o.some(H)), (A[9] = o), (A[10] = d)) : (d = A[10]))
      let T = d,
        _ = null == u,
        P = _ && ("people" !== c || T) ? c : "all"
      if (
        A[11] !== P ||
        A[12] !== t ||
        A[13] !== n ||
        A[14] !== a ||
        A[15] !== T ||
        A[16] !== r ||
        A[17] !== s ||
        A[18] !== o ||
        A[19] !== _ ||
        A[20] !== u
      ) {
        let e
        A[32] !== P || A[33] !== o
          ? ((e =
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
                  })),
            (A[32] = P),
            (A[33] = o),
            (A[34] = e))
          : (e = A[34])
        let l = (0, g._d)(e, u),
          c = l.filter($).map(U),
          d =
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
                  })(l, s),
                ]
              : (0, g.Zg)(
                  l,
                  s,
                  "all" !== P || (u?.kind === "at-mention-category" && "spaces" === u.category) ? [] : t,
                  r,
                  "page",
                  "all" !== P || u?.kind === "at-mention-category" ? 20 : void 0,
                )
        ;((p = w),
          A[35] !== P || A[36] !== s || A[37] !== u
            ? ((f = JSON.stringify([s, P, u])), (A[35] = P), (A[36] = s), (A[37] = u), (A[38] = f))
            : (f = A[38]),
          (y = n),
          (v = "user"),
          (I = l.some(O) ? n.footer : void 0),
          (b = "all" === P && null == u ? n.footerSectionId : void 0),
          (S = 0 === c.length ? void 0 : Array.from({ length: 3 }, (e, t) => c[t % c.length])),
          A[39] !== P || A[40] !== n || A[41] !== a || A[42] !== T || A[43] !== _
            ? ((M = _
                ? (0, i.jsx)(L, {
                    keyboardEventTarget: n.keyboardEventTarget,
                    onSelect: a,
                    peopleEnabled: T,
                    selectedKey: P,
                  })
                : null),
              (A[39] = P),
              (A[40] = n),
              (A[41] = a),
              (A[42] = T),
              (A[43] = _),
              (A[44] = M))
            : (M = A[44]),
          (k = "all" === P ? n.onRequestClose : void 0),
          (m = s),
          (h = "all" === P ? d : d.map(R)),
          (A[11] = P),
          (A[12] = t),
          (A[13] = n),
          (A[14] = a),
          (A[15] = T),
          (A[16] = r),
          (A[17] = s),
          (A[18] = o),
          (A[19] = _),
          (A[20] = u),
          (A[21] = p),
          (A[22] = m),
          (A[23] = h),
          (A[24] = f),
          (A[25] = y),
          (A[26] = v),
          (A[27] = I),
          (A[28] = b),
          (A[29] = S),
          (A[30] = M),
          (A[31] = k))
      } else
        ((p = A[21]),
          (m = A[22]),
          (h = A[23]),
          (f = A[24]),
          (y = A[25]),
          (v = A[26]),
          (I = A[27]),
          (b = A[28]),
          (S = A[29]),
          (M = A[30]),
          (k = A[31]))
      return (
        A[45] !== p ||
        A[46] !== m ||
        A[47] !== h ||
        A[48] !== f ||
        A[49] !== y ||
        A[50] !== v ||
        A[51] !== I ||
        A[52] !== b ||
        A[53] !== S ||
        A[54] !== M ||
        A[55] !== k
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
            (A[45] = p),
            (A[46] = m),
            (A[47] = h),
            (A[48] = f),
            (A[49] = y),
            (A[50] = v),
            (A[51] = I),
            (A[52] = b),
            (A[53] = S),
            (A[54] = M),
            (A[55] = k),
            (A[56] = x))
          : (x = A[56]),
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
          return (0, i.jsx)(A.ZDC, {}, e.id)
        case "spaces":
          return (0, i.jsx)(A.i2, {}, e.id)
        case "pages":
          return (0, i.jsx)(A.oQS, {}, e.id)
        case "files":
          return (0, i.jsx)(A.Z1A, {}, e.id)
        case "threads":
        case "chatgpt-conversations":
          return (0, i.jsx)(A.OHc, {}, e.id)
        default:
          return (0, i.jsx)(A.uxM, {}, e.id)
      }
    }
    function $(e) {
      return e.isLoading
    }
    function H(e) {
      return "people" === e.id
    }
    var q = n("OWtl"),
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
          leadingItems: A,
          prioritizeLeadingItems: T,
          pluginHostId: _,
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
          threadSearchRoots: H,
        } = e
      c[0] !== u ? ((t = void 0 === u ? [] : u), (c[0] = u), (c[1] = t)) : (t = c[1])
      let q = t
      c[2] !== d ? ((n = void 0 === d ? [] : d), (c[2] = d), (c[3] = n)) : (n = c[3])
      let z = n,
        K = void 0 === h ? "default" : h,
        D = void 0 !== f && f
      c[4] !== I ? ((a = void 0 === I ? [] : I), (c[4] = I), (c[5] = a)) : (a = c[5])
      let W = a
      c[6] !== b ? ((r = void 0 === b ? [] : b), (c[6] = b), (c[7] = r)) : (r = c[7])
      let G = r,
        B = void 0 !== M && M
      c[8] !== A ? ((s = void 0 === A ? [] : A), (c[8] = A), (c[9] = s)) : (s = c[9])
      let V = s,
        J = void 0 !== T && T,
        Z = void 0 === E ? "top" : E
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
          c[21] !== Z ||
          c[22] !== R ||
          c[23] !== $
            ? ((e = (0, i.jsx)(F, {
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
                placement: Z,
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
              (c[21] = Z),
              (c[22] = R),
              (c[23] = $),
              (c[24] = e))
            : (e = c[24]),
          e
        )
      }
      return (
        c[25] !== q ||
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
        c[46] !== Z ||
        c[47] !== _ ||
        c[48] !== J ||
        c[49] !== R ||
        c[50] !== O ||
        c[51] !== U ||
        c[52] !== $ ||
        c[53] !== H
          ? ((o = (0, i.jsx)(Q, {
              additionalSections: q,
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
              pluginHostId: _,
              onAddContext: L,
              onMentionInserted: P,
              onRequestClose: C,
              onUpdateSelectedMention: N,
              placement: Z,
              query: R,
              rankingContext: O,
              fileSearchRootPaths: j,
              skillRoots: U,
              source: $,
              threadSearchRoots: H,
            })),
            (c[25] = q),
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
            (c[46] = Z),
            (c[47] = _),
            (c[48] = J),
            (c[49] = R),
            (c[50] = O),
            (c[51] = U),
            (c[52] = $),
            (c[53] = H),
            (c[54] = o))
          : (o = c[54]),
        o
      )
    }
    function Q(e) {
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
        A,
        T,
        _,
        L,
        P,
        C,
        N = (0, l.c)(59)
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
      N[33] !== v ||
      N[34] !== I ||
      N[35] !== U
        ? ((x = {
            expandedCategory: M,
            backgroundAgents: a,
            excludedAgentConversationIds: r,
            getLocalConversationId: u,
            hostId: d,
            onMentionInserted: m,
            pluginHostId: h,
            query: y,
            rankingContext: v,
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
          (N[33] = v),
          (N[34] = I),
          (N[35] = U),
          (N[36] = x))
        : (x = N[36])
      let { sections: $ } = (0, D.jh)(x)
      if (
        N[37] !== t ||
        N[38] !== n ||
        N[39] !== p ||
        N[40] !== f ||
        N[41] !== y ||
        N[42] !== v ||
        N[43] !== $ ||
        N[44] !== R ||
        N[45] !== b
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
          ;((A = w),
            (T = n),
            (_ = y),
            N[51] !== p || N[52] !== b
              ? ((e = b?.kind === "at-mention-category" && "spaces" === b.category ? [] : p),
                (N[51] = p),
                (N[52] = b),
                (N[53] = e))
              : (e = N[53]),
            (L = (0, g.Zg)((0, g._d)(l, b), y, e, f, v, b?.kind === "at-mention-category" ? 20 : void 0)))
        }
        ;((N[37] = t),
          (N[38] = n),
          (N[39] = p),
          (N[40] = f),
          (N[41] = y),
          (N[42] = v),
          (N[43] = $),
          (N[44] = R),
          (N[45] = b),
          (N[46] = A),
          (N[47] = T),
          (N[48] = _),
          (N[49] = L),
          (N[50] = P))
      } else ((A = N[46]), (T = N[47]), (_ = N[48]), (L = N[49]), (P = N[50]))
      return P !== Symbol.for("react.early_return_sentinel")
        ? P
        : (N[54] !== A || N[55] !== T || N[56] !== _ || N[57] !== L
            ? ((C = (0, i.jsx)(A, { ...T, query: _, sections: L })),
              (N[54] = A),
              (N[55] = T),
              (N[56] = _),
              (N[57] = L),
              (N[58] = C))
            : (C = N[58]),
          C)
    }
    function F(e) {
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
      let x = (0, s.gh)(q.u),
        A = null == o
      k[6] !== A ? ((f = { enabled: A }), (k[6] = A), (k[7] = f)) : (f = k[7])
      let T = (0, s._U)(h.iS, n, f)
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
      let _ = r()((o ?? T).filter(y), V).map(v),
        L = (0, s.Ul)(u.$7) && "codex_apps" === g.server && "Library" === g.title,
        P = (0, K.o)(L ? a : "", 300),
        C = L ? P : a,
        N = _.length > 0 && (!L || (a.trim().length > 0 && C.trim().length > 0))
      k[15] !== N ? ((I = { enabled: N }), (k[15] = N), (k[16] = I)) : (I = k[16])
      let E = (0, s._U)(p.Yb, { hostId: n, query: C, servers: _ }, I),
        R = (0, m.e6)({
          isLoading: C !== a || E.isLoading,
          mentionSource: g,
          query: a,
          results: C === a ? E.data : void 0,
          servers: _,
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
            u = (0, l.c)(21),
            { text: d, query: p, shouldAdjustStart: m, fragments: h } = e,
            g = void 0 !== m && m
          u[0] !== p || u[1] !== h || u[2] !== d
            ? ((t = void 0 === h ? (0, r.d7)(d, p) : h), (u[0] = p), (u[1] = h), (u[2] = d), (u[3] = t))
            : (t = u[3])
          let f = t
          if (null == f || 0 === f.length) {
            let e
            return (
              u[4] !== d ? ((e = (0, i.jsx)(i.Fragment, { children: d })), (u[4] = d), (u[5] = e)) : (e = u[5]),
              e
            )
          }
          u[6] !== f[0] || u[7] !== g || u[8] !== d
            ? ((n = g ? f[0].startOffset - Array.from(d.slice(0, f[0].startOffset)).slice(-8).join("").length : 0),
              (u[6] = f[0]),
              (u[7] = g),
              (u[8] = d),
              (u[9] = n))
            : (n = u[9])
          let y = n,
            v = y > 0 ? "…" : ""
          return (
            u[10] !== f || u[11] !== d || u[12] !== y
              ? ((s = f.map((e, t) => {
                  let { startOffset: n, endOffset: l } = e
                  return (0, i.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        d.slice(0 === t ? y : f[t - 1].endOffset, n),
                        (0, i.jsx)("span", { className: "text-default", children: d.slice(n, l) }),
                      ],
                    },
                    n,
                  )
                })),
                (u[10] = f),
                (u[11] = d),
                (u[12] = y),
                (u[13] = s))
              : (s = u[13]),
            u[14] !== f || u[15] !== d
              ? ((o = d.slice(f[f.length - 1].endOffset)), (u[14] = f), (u[15] = d), (u[16] = o))
              : (o = u[16]),
            u[17] !== v || u[18] !== s || u[19] !== o
              ? ((c = (0, i.jsxs)("span", { className: "text-codex-description", children: [v, s, o] })),
                (u[17] = v),
                (u[18] = s),
                (u[19] = o),
                (u[20] = c))
              : (c = u[20]),
            c
          )
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
    n.d(t, { jh: () => el, aw: () => ea, Cu: () => er })
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
      g = n("w8pS"),
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
    function A(e) {
      return { conversationId: e.id, mapping: e.mapping, title: e.title }
    }
    function T(e) {
      return e.items
    }
    var _ = n("PgCv"),
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
      H = n.n($),
      q = n("zd8w"),
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
      Q = n("FGAu"),
      F = n("Lmwk"),
      B = n("FdGo"),
      V = n("GVrb"),
      J = n("e5oX"),
      Z = n("Rxfy"),
      Y = n("Sdx1"),
      X = n("pNUK"),
      ee = n("MQKw"),
      et = n("hbRe"),
      en = n("bPa2"),
      ei = n("lp74")
    function el(e) {
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
        es(e, (0, J.L)(n), null)
      )
    }
    function ea(e) {
      let t,
        n,
        a,
        r,
        s,
        c,
        u = (0, i.c)(22),
        d = (0, l.gh)(U.PR),
        p = e.skillRoots ?? e.roots,
        m = "work" !== e.rankingContext || (e.isTypedAtMention && null == e.expandedCategory) ? e.query : ""
      u[0] !== e.excludedPluginId ||
      u[1] !== e.hostId ||
      u[2] !== e.pluginHostId ||
      u[3] !== e.query ||
      u[4] !== e.rankingContext ||
      u[5] !== p ||
      u[6] !== m
        ? ((t = {
            hostId: e.hostId,
            excludedPluginId: e.excludedPluginId,
            pluginHostId: e.pluginHostId,
            roots: p,
            sitesQuery: e.query,
            pluginQuery: m,
            rankingContext: e.rankingContext,
          }),
          (u[0] = e.excludedPluginId),
          (u[1] = e.hostId),
          (u[2] = e.pluginHostId),
          (u[3] = e.query),
          (u[4] = e.rankingContext),
          (u[5] = p),
          (u[6] = m),
          (u[7] = t))
        : (t = u[7])
      let h = er(t)
      u[8] !== e.query ? ((n = { query: e.query }), (u[8] = e.query), (u[9] = n)) : (n = u[9])
      let g = (0, F.p)(n)
      ;(u[10] !== e.getLocalConversationId || u[11] !== d
        ? ((a = e.getLocalConversationId ?? (() => (0, U.ah)(d))),
          (u[10] = e.getLocalConversationId),
          (u[11] = d),
          (u[12] = a))
        : (a = u[12]),
        u[13] !== d ? ((r = (e) => (0, o.ir)({ scope: d, path: e })), (u[13] = d), (u[14] = r)) : (r = u[14]),
        u[15] !== e || u[16] !== a || u[17] !== r
          ? ((s = { ...e, getLocalConversationId: a, onMentionInserted: r }),
            (u[15] = e),
            (u[16] = a),
            (u[17] = r),
            (u[18] = s))
          : (s = u[18]))
      let f = es(s, h, g)
      return (
        u[19] !== h.mentionablePlugins || u[20] !== f
          ? ((c = { ...f, mentionablePlugins: h.mentionablePlugins }),
            (u[19] = h.mentionablePlugins),
            (u[20] = f),
            (u[21] = c))
          : (c = u[21]),
        c
      )
    }
    function er(e) {
      let t,
        n,
        a,
        r,
        c,
        u = (0, i.c)(18),
        {
          excludedPluginId: d,
          hostId: p,
          pluginHostId: m,
          roots: h,
          sitesQuery: g,
          pluginQuery: f,
          rankingContext: y,
        } = e,
        v = (0, l.gh)(U.PR)
      u[0] !== g ? ((t = { query: g }), (u[0] = g), (u[1] = t)) : (t = u[1])
      let I = (0, s.Y)(t)
      return (
        u[2] !== v
          ? ((n = () => ("chatgpt" === v.value.kind ? v.value.conversationId : null)),
            (a = () => (0, U.ah)(v)),
            (u[2] = v),
            (u[3] = n),
            (u[4] = a))
          : ((n = u[3]), (a = u[4])),
        u[5] !== v ? ((r = (e) => (0, o.ir)({ scope: v, path: e })), (u[5] = v), (u[6] = r)) : (r = u[6]),
        u[7] !== d ||
        u[8] !== p ||
        u[9] !== m ||
        u[10] !== f ||
        u[11] !== y ||
        u[12] !== h ||
        u[13] !== I ||
        u[14] !== n ||
        u[15] !== a ||
        u[16] !== r
          ? ((c = {
              getChatGptConversationId: n,
              getLocalConversationId: a,
              excludedPluginId: d,
              hostId: p,
              onMentionInserted: r,
              pluginHostId: m,
              query: f,
              rankingContext: y,
              roots: h,
              sitesSource: I,
            }),
            (u[7] = d),
            (u[8] = p),
            (u[9] = m),
            (u[10] = f),
            (u[11] = y),
            (u[12] = h),
            (u[13] = I),
            (u[14] = n),
            (u[15] = a),
            (u[16] = r),
            (u[17] = c))
          : (c = u[17]),
        (0, J.L)(c)
      )
    }
    function es(e, t, n) {
      let s,
        o,
        U,
        $,
        W,
        F,
        J,
        el,
        ea,
        er,
        es,
        ep,
        em,
        eh,
        eg,
        ef,
        ey,
        ev = (0, i.c)(57),
        {
          expandedCategory: eI,
          backgroundAgents: eb,
          excludedAgentConversationIds: eS,
          excludedPluginId: ew,
          getLocalConversationId: eM,
          hostId: ek,
          onMentionInserted: ex,
          roots: eA,
          skillRoots: eT,
          threadSource: e_,
          pluginHostId: eL,
          query: eP,
          rankingContext: eC,
        } = e
      ev[0] !== eb ? ((s = void 0 === eb ? [] : eb), (ev[0] = eb), (ev[1] = s)) : (s = ev[1])
      let eN = s
      ev[2] !== eS ? ((o = void 0 === eS ? [] : eS), (ev[2] = eS), (ev[3] = o)) : (o = ev[3])
      let eE = o,
        eR = void 0 === e_ ? null : e_,
        eO = void 0 === eL ? ek : eL,
        ej = (0, l.gh)(f.u),
        eU = (0, _.d)()
      ev[4] !== eP ? ((U = eP.trim()), (ev[4] = eP), (ev[5] = U)) : (U = ev[5])
      let e$ = U.length > 0,
        eH = (0, v.o)(eP, 100)
      ev[6] !== eM ? (($ = eM?.() ?? null), (ev[6] = eM), (ev[7] = $)) : ($ = ev[7])
      let eq = eH !== eP
      ev[8] !== eH || ev[9] !== ek || ev[10] !== eA || ev[11] !== $ || ev[12] !== eq
        ? ((W = { conversationId: $, hostId: ek, query: eH, roots: eA, isQueryPending: eq }),
          (ev[8] = eH),
          (ev[9] = ek),
          (ev[10] = eA),
          (ev[11] = $),
          (ev[12] = eq),
          (ev[13] = W))
        : (W = ev[13])
      let ez = (0, V.C)(W)
      ;(ev[14] !== eC ? ((F = (e) => "page" !== eC || !(0, Q.E)(e)), (ev[14] = eC), (ev[15] = F)) : (F = ev[15]),
        ev[16] !== ek || ev[17] !== ej
          ? ((J = (e) => ({ ...e, identity: (0, P.Aj)(ej, { ...e, hostId: ek }) })),
            (ev[16] = ek),
            (ev[17] = ej),
            (ev[18] = J))
          : (J = ev[18]))
      let eK = (0, l._U)(E.iS, ek).filter(F).map(J),
        eD = (0, l._U)(
          C.iv,
          eO !== a.iwv &&
            eK.some((e) => {
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
                .filter(ed)
                .map((e) => ({
                  pluginId: e.plugin.id,
                  query: {
                    hostId: eO,
                    marketplacePath: e.marketplacePath,
                    pluginName: (0, O.R9)(e).pluginName,
                    remoteMarketplaceName: e.remoteMarketplaceName ?? null,
                  },
                }))
            : [],
        ),
        eW = (0, l.Ul)(L.$7),
        eG = eK.filter(Q.E),
        eQ = eG[0],
        eF = eW ? eK.find(eu) : void 0,
        eB = (0, v.o)(null == eF ? "" : eP, 300),
        eV = null == eF ? eH : eB,
        eJ = null == eF ? [] : [eF],
        eZ = eJ.length > 0 && eP.trim().length >= 2 && eB.trim().length >= 2
      ev[19] !== eZ ? ((el = { enabled: eZ }), (ev[19] = eZ), (ev[20] = el)) : (el = ev[20])
      let eY = (0, l._U)(C.QJ, { hostId: ek, query: eB, servers: eJ }, el),
        eX = eG.length > 0 && e$ && eV.trim().length > 0
      ev[21] !== eX ? ((ea = { enabled: eX }), (ev[21] = eX), (ev[22] = ea)) : (ea = ev[22])
      let e0 = (0, l._U)(C.QJ, { hostId: ek, query: eV, servers: eG }, ea),
        e1 = (0, N.Zb)({
          pluginAppIds: eD,
          plugins: t.mentionablePlugins,
          sections: t.sections,
          query: eP,
          servers: eK.filter((e) => !eG.includes(e)),
        }),
        e2 =
          e$ && null != eQ
            ? (0, N.e6)({
                isLoading: eV !== eP || e0.isLoading,
                mentionSource: {
                  kind: "mcp-extension",
                  mentionSearchTool: eQ.mentionSearchTool,
                  server: eQ.server,
                  title: eQ.title,
                },
                results: eV === eP ? e0.data : void 0,
                servers: eG,
              }).map(ec)
            : [],
        e3 =
          eP.trim().length >= 2 && null != eF
            ? (0, N.e6)({
                isLoading: eB !== eP || eY.isLoading,
                mentionSource: {
                  kind: "mcp-extension",
                  mentionSearchTool: eF.mentionSearchTool,
                  server: eF.server,
                  title: eF.title,
                },
                results: eB === eP ? eY.data : void 0,
                servers: eJ,
              }).map((e) => ({
                ...e,
                items: e.items.slice(0, 5).map((e) => ({ ...e, detail: eF.title })),
                queryMatchMode: "source-ranked",
              }))
            : [],
        e4 = ek === a.iwv ? "local" : ek
      ev[23] !== ex ||
      ev[24] !== t.arePluginsLoading ||
      ev[25] !== t.mentionablePlugins ||
      ev[26] !== t.systemHintsByMentionPath ||
      ev[27] !== eP ||
      ev[28] !== e4
        ? ((er = {
            arePluginsLoading: t.arePluginsLoading,
            onMentionInserted: ex,
            hostId: e4,
            plugins: t.mentionablePlugins,
            query: eP,
            systemHintsByMentionPath: t.systemHintsByMentionPath,
          }),
          (ev[23] = ex),
          (ev[24] = t.arePluginsLoading),
          (ev[25] = t.mentionablePlugins),
          (ev[26] = t.systemHintsByMentionPath),
          (ev[27] = eP),
          (ev[28] = e4),
          (ev[29] = er))
        : (er = ev[29])
      let e5 = (0, B.o)(er)
      ;(ev[30] !== eM ? ((es = eM?.() ?? null), (ev[30] = eM), (ev[31] = es)) : (es = ev[31]),
        ev[32] !== t.mentionablePlugins
          ? ((ep = new Set(t.mentionablePlugins.map(eo))), (ev[32] = t.mentionablePlugins), (ev[33] = ep))
          : (ep = ev[33]),
        ev[34] !== ew ||
        ev[35] !== ek ||
        ev[36] !== t.arePluginsLoading ||
        ev[37] !== eP ||
        ev[38] !== eT ||
        ev[39] !== es ||
        ev[40] !== ep
          ? ((em = {
              excludedPluginId: ew,
              conversationId: es,
              arePluginsLoading: t.arePluginsLoading,
              hostId: ek,
              mentionablePluginNames: ep,
              query: eP,
              roots: eT,
            }),
            (ev[34] = ew),
            (ev[35] = ek),
            (ev[36] = t.arePluginsLoading),
            (ev[37] = eP),
            (ev[38] = eT),
            (ev[39] = es),
            (ev[40] = ep),
            (ev[41] = em))
          : (em = ev[41]))
      let e6 = (function (e) {
          var t, n, l
          let a,
            s,
            o,
            c,
            u,
            d,
            p,
            m = (0, i.c)(22),
            {
              arePluginsLoading: g,
              conversationId: f,
              excludedPluginId: y,
              hostId: v,
              mentionablePluginNames: I,
              query: b,
              roots: S,
            } = e,
            w = b.trim(),
            M = (0, z.WE)(w),
            k = w.length > 0
          m[0] !== f || m[1] !== k
            ? ((a = { enabled: k, conversationId: f }), (m[0] = f), (m[1] = k), (m[2] = a))
            : (a = m[2])
          let { skills: x, hostId: A, isLoading: T } = (0, en.a)(S, v, a)
          m[3] !== k || m[4] !== x ? ((s = k ? x : []), (m[3] = k), (m[4] = x), (m[5] = s)) : (s = m[5])
          let { data: _ } = (0, Y.H)(s, A)
          m[6] !== _
            ? ((o = (e) => {
                let t = _?.get(e.path)?.galleryKind,
                  n = t ? (0, Z.c)(t) : null
                return [e.path, n ? (0, Z.uk)(n) : []]
              }),
              (m[6] = _),
              (m[7] = o))
            : (o = m[7])
          let L = new Map(x.map(o))
          if (!k) {
            let e
            return (
              m[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (m[8] = e)) : (e = m[8]),
              e
            )
          }
          m[9] !== g || m[10] !== y || m[11] !== I
            ? ((c = (e) =>
                (null == y || e.pluginId !== y) &&
                (function (e, t, n) {
                  if (!e.enabled) return !1
                  let i = (0, X.F)(e.path)?.pluginId
                  return null == i || (!n && !t.has(i))
                })(e, I, g)),
              (m[9] = g),
              (m[10] = y),
              (m[11] = I),
              (m[12] = c))
            : (c = m[12])
          let P =
              ((t = x.filter(c).filter((e) =>
                (function (e, t, n) {
                  let i = t.trim().toLowerCase()
                  if (0 === i.length) return !0
                  let l = (0, et.nf)(e)
                  return [...(n.get(e.path) ?? []), e.name, l, `@${l}`].some((e) => e.toLowerCase().includes(i))
                })(e, w, L),
              )),
              (n = M),
              (l = L),
              H()(
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
            C = T && 0 === P.length
          if (0 === P.length && !C) {
            let e
            return (
              m[13] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (m[13] = e)) : (e = m[13]),
              e
            )
          }
          m[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, r.zR)({
                id: "composer.atMentionList.skills",
                defaultMessage: "Skills",
                description: "Section header for skill results in the @ mention list.",
              })),
              (m[14] = u))
            : (u = m[14])
          let N = P.map((e) => {
            let t = _?.get(e.path)?.galleryKind,
              n = t ? (0, Z.c)(t) : null,
              i = n ? (0, Z.eA)(n) : void 0,
              l = (0, h.GZ)(e, i)
            return {
              key: `skill:${l.path}`,
              label: l.displayName,
              detail: (0, ee.a)(e),
              searchTerms: [e.name, `@${l.displayName}`, ...(L.get(e.path) ?? [])],
              icon: (0, ei.h)(i),
              type: "mention",
              insertMention: (e) => {
                let { composerController: t, mentionState: n } = e
                t.insertMention(l, n)
              },
            }
          })
          return (
            m[15] !== C
              ? ((d = C
                  ? (0, r.zR)({
                      id: "composer.atMentionList.skillsLoading",
                      defaultMessage: "Loading skills…",
                      description:
                        "Shown in the skills section when skill discovery is loading and no results have arrived yet",
                    })
                  : null),
                (m[15] = C),
                (m[16] = d))
              : (d = m[16]),
            m[17] !== T || m[18] !== u || m[19] !== N || m[20] !== d
              ? ((p = { sections: [{ id: "skills", title: u, items: N, emptyState: d, isLoading: T }] }),
                (m[17] = T),
                (m[18] = u),
                (m[19] = N),
                (m[20] = d),
                (m[21] = p))
              : (p = m[21]),
            p
          )
        })(em),
        e7 = "pages" === eI || "spaces" === eI ? eI : void 0,
        e8 = "pages" === eI || "spaces" === eI
      ev[42] !== eH || ev[43] !== eP || ev[44] !== e7 || ev[45] !== e8
        ? ((eh = { category: e7, expanded: e8, query: eP, searchQuery: eH }),
          (ev[42] = eH),
          (ev[43] = eP),
          (ev[44] = e7),
          (ev[45] = e8),
          (ev[46] = eh))
        : (eh = ev[46])
      let e9 = (0, R.w)(eh),
        te = "chats" === eI
      ev[47] !== eP || ev[48] !== te
        ? ((eg = { expanded: te, query: eP }), (ev[47] = eP), (ev[48] = te), (ev[49] = eg))
        : (eg = ev[49])
      let tt = (function (e) {
          let t,
            n,
            a,
            s,
            o,
            _,
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
          let H = (0, l._U)(d.G, t).isCapable
          E[1] !== R ? ((n = R.trim()), (E[1] = R), (E[2] = n)) : (n = E[2])
          let q = n,
            z = (0, v.o)(q, 100),
            K = 0 === q.length ? "" : z,
            D = K !== q
          ;(E[3] !== $ || E[4] !== K.length
            ? ((a = (e) =>
                (0 === K.length ? e?.slice(0, $) : e) ??
                (0 === K.length ? (0, w.nm)()?.pages.flatMap(T).slice(0, $).map(A) : void 0)),
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
            E[13] !== H || E[14] !== a || E[15] !== s || E[16] !== o
              ? ((_ = {
                  enabled: H,
                  placeholderData: a,
                  queryFn: s,
                  queryKey: o,
                  retryDelay: S.RH,
                  staleTime: y.D.ONE_MINUTE,
                }),
                (E[13] = H),
                (E[14] = a),
                (E[15] = s),
                (E[16] = o),
                (E[17] = _))
              : (_ = E[17]))
          let { data: G, isFetching: Q } = (0, c.I)(_)
          if (!H) return M
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
          let F = L
          ;(E[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, r.zR)({
                id: "composer.atMentionList.chatGptConversations",
                defaultMessage: "ChatGPT conversations",
                description: "Section header for ChatGPT conversation results in the @ mention list.",
              })),
              (E[21] = P))
            : (P = E[21]),
            E[22] !== Q || E[23] !== D || E[24] !== F
              ? ((C =
                  (Q || D) && 0 === F.length
                    ? (0, r.zR)({
                        id: "composer.atMentionList.chatGptConversationsLoading",
                        defaultMessage: "Loading ChatGPT conversations…",
                        description: "Shown in the ChatGPT conversations section while conversations load.",
                      })
                    : null),
                (E[22] = Q),
                (E[23] = D),
                (E[24] = F),
                (E[25] = C))
              : (C = E[25]))
          let B = Q || D
          return (
            E[26] !== F || E[27] !== P || E[28] !== C || E[29] !== B
              ? ((N = { sections: [{ id: "chatgpt-conversations", title: P, items: F, emptyState: C, isLoading: B }] }),
                (E[26] = F),
                (E[27] = P),
                (E[28] = C),
                (E[29] = B),
                (E[30] = N))
              : (N = E[30]),
            N
          )
        })(eg),
        { data: tn, isLoading: ti } = (0, j.OB)(eA, eU)
      if (ev[50] !== eN || ev[51] !== eE) {
        let e
        ;(ev[53] !== eE
          ? ((e = (e) => (null == e.agentRole || eE.includes(e.conversationId) ? [] : [e.agentRole])),
            (ev[53] = eE),
            (ev[54] = e))
          : (e = ev[54]),
          (ef = new Set(eN.flatMap(e))),
          (ev[50] = eN),
          (ev[51] = eE),
          (ev[52] = ef))
      } else ef = ev[52]
      let tl = ef,
        ta = tn?.roles.filter((e) => !tl.has(e.roleName)) ?? [],
        tr = (function ({ backgroundAgents: e, excludedConversationIds: t = [], query: n }) {
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
                  H()(
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
                  iconElement: (0, q.createElement)(K.B, {
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
        })({ backgroundAgents: eN, excludedConversationIds: eE, query: eP }),
        ts = eU
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
                      H()(
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
            })({ agents: ta, query: eP })
          : null,
        to = tr?.sections[0] ?? null,
        tc = ts?.sections[0] ?? null,
        tu = [...(to?.items ?? []), ...(tc?.items ?? [])],
        td =
          0 !== tu.length || ti
            ? {
                id: "agents",
                title: (0, r.zR)({
                  id: "composer.atMentionList.agents",
                  defaultMessage: "Agents",
                  description: "Section header for agent results in the @ mention list.",
                }),
                items: tu,
                emptyState:
                  0 === tu.length
                    ? (0, r.zR)({
                        id: "composer.atMentionList.agentsLoading",
                        defaultMessage: "Loading agents…",
                        description:
                          "Shown in the agents section when configured agents are loading and no results have arrived yet.",
                      })
                    : null,
                isLoading: ti,
              }
            : null,
        tp = [
          { sections: e1 },
          { sections: e3 },
          { sections: e2 },
          e5,
          null == td ? null : { sections: [td] },
          t.sitesSource ?? null,
          tt,
          n,
          e6,
          eR,
          null == eR || e$ ? ez : null,
          e9,
        ].flatMap((e) => e?.sections ?? []),
        tm = e$
          ? tp
          : tp.map((e) => {
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
      return (ev[55] !== tm ? ((ey = { sections: tm }), (ev[55] = tm), (ev[56] = ey)) : (ey = ev[56]), ey)
    }
    function eo(e) {
      return e.plugin.name
    }
    function ec(e) {
      return { ...e, queryMatchMode: "source-ranked" }
    }
    function eu(e) {
      let { server: t, title: n } = e
      return "codex_apps" === t && "Library" === n
    }
    function ed(e) {
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
            x = (0, m.lD)(e, h),
            A = (0, r.useRef)(null)
          S[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                A.current = e
              }),
              (S[2] = n))
            : (n = S[2])
          let T = n
          S[3] !== e
            ? ((g = (t) => {
                ;(0, p.M)(e.view, t) && (A.current = null)
              }),
              (S[3] = e),
              (S[4] = g))
            : (g = S[4])
          let _ = g
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
                      let n = A.current?.()
                      x && n ? v(n, t) : "insert-mention" === t && (0, d.kQ)(e.view)
                    }
                  }
                  A.current = null
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
                              t.submenu.searchHint
                                ? M.formatMessage(
                                    {
                                      id: "composer.mentionSearch.tabHintWithSearchHint",
                                      defaultMessage: "Press Tab to search {searchHint}",
                                      description:
                                        "Inline hint after mentioning a plugin. Tab opens search. searchHint is a server-provided word for searchable items, such as parts or issues.",
                                    },
                                    { searchHint: t.submenu.searchHint },
                                  )
                                : M.formatMessage({
                                    id: "composer.mentionSearch.tabHint",
                                    defaultMessage: "Press Tab to search",
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
            S[16] !== _ || S[17] !== y || S[18] !== L || S[19] !== I || S[20] !== x
              ? ((b = {
                  ui: x,
                  addMention: I,
                  closeAutocomplete: _,
                  startSearch: L,
                  setSelectedMention: T,
                  handleMentionEvent: y,
                }),
                (S[16] = _),
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
      a = n("sJco"),
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
    function A(e) {
      return "sites" === e.trim().toLowerCase()
    }
    function T(e) {
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
            _,
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
              systemHintsByMentionPath: H,
              systemHintSurface: q,
            } = e,
            z = void 0 === C || C,
            K = void 0 !== U && U,
            D = void 0 === q ? "tpp" : q,
            W = (0, o.gh)(S.u),
            G = (0, c.A)(),
            Q = z && !K
          L[0] !== N || L[1] !== Q ? ((t = { enabled: Q, hostId: N }), (L[0] = N), (L[1] = Q), (L[2] = t)) : (t = L[2])
          let F = (0, g.Km)(t)
          if (!z) {
            let e
            return (
              L[3] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (L[3] = e)) : (e = L[3]),
              e
            )
          }
          if (
            L[4] !== P ||
            L[5] !== F ||
            L[6] !== G ||
            L[7] !== E ||
            L[8] !== R ||
            L[9] !== O ||
            L[10] !== j ||
            L[11] !== K ||
            L[12] !== $ ||
            L[13] !== W ||
            L[14] !== D ||
            L[15] !== H
          ) {
            x = Symbol.for("react.early_return_sentinel")
            e: {
              var B, V
              let e, t
              L[20] !== P || L[21] !== j || L[22] !== K || L[23] !== H
                ? ((e = (e) =>
                    !K &&
                    !P &&
                    (H?.[(0, w.nw)(e.id)]?.surfaces?.includes("tpp") ?? !0) &&
                    !j.some((t) => t.servicePlugin?.is_template !== !0 && (0, b.Y)(e, t.plugin))),
                  (L[20] = P),
                  (L[21] = j),
                  (L[22] = K),
                  (L[23] = H),
                  (L[24] = e))
                : (e = L[24])
              let l = F.filter(e),
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
                            score: ((n = e), (i = V), (l = T(n)), Math.max(i(n.name), i(`@${n.name}`), ...l.map(i))),
                          }
                        }),
                        [(e) => -e.score, (e) => e.app.name, (e) => e.index],
                      )
                        .filter((e) => e.score > 0)
                        .map((e) => e.app)),
                S = Object.entries((K && (K || !P) ? (0, f.QI)(H, D, E) : void 0) ?? {}).filter((e) => {
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
                        n = T(e),
                        l = [e.name, ...n].some(A)
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
                            (e) => e.path === t || H?.[e.path]?.system_hint === n.system_hint,
                          )
                        ) {
                          ;(i.clearSuggestion(l), O?.(n))
                          return
                        }
                        ;(i.insertMention({ kind: "app", ...r }, l),
                          i.convertMentionsToText("apps", (e) => {
                            let i = H?.[e]
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
              (L[5] = F),
              (L[6] = G),
              (L[7] = E),
              (L[8] = R),
              (L[9] = O),
              (L[10] = j),
              (L[11] = K),
              (L[12] = $),
              (L[13] = W),
              (L[14] = D),
              (L[15] = H),
              (L[16] = n),
              (L[17] = r),
              (L[18] = d),
              (L[19] = x))
          } else ((n = L[16]), (r = L[17]), (d = L[18]), (x = L[19]))
          return x !== Symbol.for("react.early_return_sentinel")
            ? x
            : (L[31] !== n || L[32] !== r || L[33] !== d
                ? ((_ = { sections: [{ id: n, title: r, items: d, emptyState: null, isLoading: !1 }] }),
                  (L[31] = n),
                  (L[32] = r),
                  (L[33] = d),
                  (L[34] = _))
                : (_ = L[34]),
              _)
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
            A = b === a.iwv && null != c.appServices.hostedThreadFiles
          v[0] !== k || v[1] !== A
            ? ((t = A && null != k ? { kind: "app-server", conversationId: k } : null),
              (v[0] = k),
              (v[1] = A),
              (v[2] = t))
            : (t = v[2])
          let T = (0, l._U)(u.threadExecutorTargetByThread$, t),
            _ = T?.hostId === a.iwv ? T : null,
            L = _?.environmentId ?? null,
            P = _?.cwd ?? null
          v[3] !== L || v[4] !== P
            ? ((n = { environmentId: L, cwd: P }), (v[3] = L), (v[4] = P), (v[5] = n))
            : (n = v[5])
          let { data: C, isError: N, isFetching: E, isSuccess: R } = (0, l._U)(s.E, n),
            O = M
          if (A) {
            let e
            ;(v[6] !== C ? ((e = null == C ? void 0 : [C]), (v[6] = C), (v[7] = e)) : (e = v[7]), (O = e))
          }
          let j = A ? _?.environmentId : void 0
          v[8] !== b || v[9] !== w || v[10] !== O || v[11] !== j
            ? ((d = { environmentId: j, hostId: b, includeDirectories: !0, query: w, roots: O }),
              (v[8] = b),
              (v[9] = w),
              (v[10] = O),
              (v[11] = j),
              (v[12] = d))
            : (d = v[12])
          let { files: U, isLoading: $, error: H } = (0, o.x)(d),
            q = w.trim()
          if (!A && (null == O || 0 === O.length)) return m
          let z = null,
            K = A && null != _ && E
          if (A && (null == _ || (R && null == C))) {
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
          } else if (null != H || (A && N)) {
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
          } else if (0 === q.length) {
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
      c = n("KUdL"),
      u = n.n(c),
      d = n("zTeN"),
      p = n("DBCl"),
      m = n("D4ZO"),
      h = n("Wf1j"),
      g = n("Qgfj"),
      f = n("gwd9"),
      y = n("b3Qd"),
      v = n("SPnB"),
      I = n("usf5"),
      b = n("lBzi"),
      S = n("ZfbS"),
      w = n("MI1z"),
      M = n("IIEq"),
      k = n("jWaO"),
      x = n("yrds"),
      A = n("rO8L"),
      T = n("Vyeu"),
      _ = n("wwME"),
      L = n("COSu"),
      P = n("WXrt"),
      C = n("w8IV"),
      N = n("BA9i"),
      E = n("R4kT"),
      R = n("ABl9"),
      O = n("EEop"),
      j = n("cLdu"),
      U = n("ueue"),
      $ = n("GaA7"),
      H = n("OWtl"),
      q = n("kfGJ"),
      z = n("axh8"),
      K = n("hZax"),
      D = n("RHhA"),
      W = n("rvFo")
    let G = ["chrome-dev", "chrome-internal", "chrome"]
    var Q = n("sWWp"),
      F = n("WrbO"),
      B = n("YWcr"),
      V = n("XNvh"),
      J = n("lDn6"),
      Z = n("czj2"),
      Y = n("UN1G"),
      X = n("i5ac"),
      ee = n.n(X),
      et = n("faMt"),
      en = n("utkD"),
      ei = n("fwjD")
    let el = (0, g.YK)({
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
      return (0, Q.mz)(e)
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
    let ep = [F.W, ...G, p.ovW],
      em = [...ep, N.Bz, N.HZ, N.kV],
      eh = new Map([
        [N.Bz, J.ER],
        [N.HZ, J.wq],
        [N.kV, J.dl],
      ]),
      eg = "DISABLED_BY_ADMIN",
      ef = `openai-templates@${p.xiH}`,
      ey = `${p._NM}@${p.xiH}`
    function ev(e) {
      var t, n, s, c, X
      let ey,
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
        eH,
        eq,
        ez,
        eK,
        eD,
        eW,
        eG,
        eQ,
        eF,
        eB,
        eV,
        eJ = (0, i.c)(58),
        {
          getChatGptConversationId: eZ,
          getLocalConversationId: eY,
          excludedPluginId: eX,
          hostId: e0,
          gizmoId: e1,
          isPluginAllowed: e2,
          isSystemHintAllowed: e3,
          onMentionInserted: e4,
          preferSystemHintApps: e5,
          pluginHostId: e6,
          query: e7,
          rankingContext: e8,
          roots: e9,
          sitesSource: te,
          systemHintSurface: tt,
        } = e,
        tn = void 0 !== e5 && e5,
        ti = void 0 === e6 ? e0 : e6,
        tl = void 0 === tt ? "tpp" : tt,
        ta = (0, d.gh)(H.u),
        tr = (0, K.Zj)(!!te?.projects && "521049492"),
        ts = (0, h.A)(),
        { platform: to } = (0, _.V)(),
        tc = (0, K.Zj)("4218407052"),
        tu = (0, K.Zj)(N.J4),
        td = (0, K.Zj)(N.tN),
        tp = (0, I.l)(),
        tm = (0, d.Ul)(P.aD),
        th = ti === p.iwv,
        tg = th ? q.fI : e0
      eJ[0] !== tg ? ((eC = { hostId: tg }), (eJ[0] = tg), (eJ[1] = eC)) : (eC = eJ[1])
      let tf = (0, A.J)(eC)
      eJ[2] !== tf || eJ[3] !== ti || eJ[4] !== tn || eJ[5] !== tl
        ? ((eN = tf && tn && "chat" === tl), (eJ[2] = tf), (eJ[3] = ti), (eJ[4] = tn), (eJ[5] = tl), (eJ[6] = eN))
        : (eN = eJ[6])
      let ty = eN
      eJ[7] !== ty ? ((eE = { enabled: ty }), (eJ[7] = ty), (eJ[8] = eE)) : (eE = eJ[8])
      let { data: tv, isLoading: tI } = (0, d._U)(b.Ax, void 0 === e1 ? null : e1, eE),
        tb = tf && !th
      eJ[9] !== e0 || eJ[10] !== tb
        ? ((eR = { enabled: tb, hostId: e0 }), (eJ[9] = e0), (eJ[10] = tb), (eJ[11] = eR))
        : (eR = eJ[11])
      let tS = (0, M.H)(eR)
      eJ[12] !== tS || eJ[13] !== e0
        ? ((eO = { computerUseAvailability: tS, hostId: e0 }), (eJ[12] = tS), (eJ[13] = e0), (eJ[14] = eO))
        : (eO = eJ[14])
      let tw = (0, T.l)(eO)
      eJ[15] !== e0 || eJ[16] !== tb
        ? ((ej = { enabled: tb, hostId: e0 }), (eJ[15] = e0), (eJ[16] = tb), (eJ[17] = ej))
        : (ej = eJ[17])
      let tM = (0, k.J)(ej)
      eJ[18] !== e0 || eJ[19] !== tb
        ? ((eU = { enabled: tb, hostId: e0 }), (eJ[18] = e0), (eJ[19] = tb), (eJ[20] = eU))
        : (eU = eJ[20])
      let tk = (0, x.I)(eU)
      eJ[21] !== tb ? ((e$ = { enabled: tb }), (eJ[21] = tb), (eJ[22] = e$)) : (e$ = eJ[22])
      let tx = (0, w.y)(e0, e$),
        tA = tu ? em : ep,
        tT = tp ? [...tA, p.kJv] : tA,
        t_ = "work" === e8,
        tL = e7.trim(),
        tP = !t_ && tL.length > 0,
        tC = (0, Y.WE)(tL)
      eJ[23] !== tf || eJ[24] !== ti || eJ[25] !== e9
        ? ((eH = { enabled: tf, hostId: ti, roots: e9, resolveActiveRoots: !0 }),
          (eJ[23] = tf),
          (eJ[24] = ti),
          (eJ[25] = e9),
          (eJ[26] = eH))
        : (eH = eJ[26])
      let { data: tN, isLoading: tE } = (0, j.Kj)(eH),
        tR = (0, S.u0)(tv, tN)
      eJ[27] !== tN
        ? ((eq = (e) =>
            tN?.some((t) => {
              let { marketplaceName: n, plugin: i } = t
              return (
                (eh.has(e) ? n === p.hEe : (0, p.foP)(n)) && (i.name === e || ("chrome" === e && G.includes(i.name)))
              )
            }) === !0),
          (eJ[27] = tN),
          (eJ[28] = eq))
        : (eq = eJ[28])
      let tO = eq,
        tj = null == tx ? null : (0, O.i9)(tx),
        tU = tN?.find(e_)?.marketplacePath ?? null,
        t$ = { [F.W]: tS.available, chrome: tM.available, [p.kJv]: tk.available, [p.ovW]: tw.available },
        tH = (0, l.E)({
          queries: tT.filter(eT).map((e) => {
            let t = eh.get(e),
              n = null == t ? tj : tU
            return {
              ...ta.query.getOptions(O.Pc, {
                hostId: e0,
                marketplacePath: n,
                pluginName: e,
                remoteMarketplaceName: null,
              }),
              enabled:
                tf &&
                (null != t || e0 === q.fI) &&
                null != n &&
                null != tN &&
                !tO(e) &&
                (null == t || !tP || tC(e) > 0 || (0, J.iZ)(t, tC)) &&
                (t$[e] ?? !0),
              retry: !1,
            }
          }),
        })
      eJ[29] !== tO || eJ[30] !== e0 || eJ[31] !== tN
        ? ((ez = (e) => {
            let { data: t } = e
            return null == tN || null == t || tO(t.summary.name) || (e0 !== q.fI && t.marketplaceName !== p.hEe)
              ? []
              : [(0, U.qA)(t)]
          }),
          (eJ[29] = tO),
          (eJ[30] = e0),
          (eJ[31] = tN),
          (eJ[32] = ez))
        : (ez = eJ[32])
      let tq = tH.flatMap(ez)
      ;(eJ[33] !== tN ? ((eK = tN ?? []), (eJ[33] = tN), (eJ[34] = eK)) : (eK = eJ[34]),
        eJ[35] !== tc
          ? ((eD = (e) => {
              let { marketplaceName: t, plugin: n } = e
              return tc || t !== p.xiH || n.id === R.$n
            }),
            (eJ[35] = tc),
            (eJ[36] = eD))
          : (eD = eJ[36]))
      let tz = (0, U.PM)({
        plugins: [...eK.filter(eD), ...tq],
        isComputerUseAvailable: tS.available,
        isExternalBrowserUseAvailable: tM.available,
        isInAppBrowserUseAvailable: tk.available,
        isMessagesAvailable: tw.available,
      })
      eJ[37] !== tE ||
      eJ[38] !== tI ||
      eJ[39] !== tS.isLoading ||
      eJ[40] !== tM.isLoading ||
      eJ[41] !== tk.isLoading ||
      eJ[42] !== tw.isLoading ||
      eJ[43] !== tH ||
      eJ[44] !== ty
        ? ((eW = tE || (ty && tI) || tH.some(eA) || tS.isLoading || tM.isLoading || tk.isLoading || tw.isLoading),
          (eJ[37] = tE),
          (eJ[38] = tI),
          (eJ[39] = tS.isLoading),
          (eJ[40] = tM.isLoading),
          (eJ[41] = tk.isLoading),
          (eJ[42] = tw.isLoading),
          (eJ[43] = tH),
          (eJ[44] = ty),
          (eJ[45] = eW))
        : (eW = eJ[45])
      let tK = eW,
        tD = (0, B.t2)(ts),
        tW = tz.filter(
          (e) =>
            !(0, E.b)(ti, e.requiresLocalExecutor) &&
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
            })(e, tT, ty ? tl : null, tR, e3, tn) &&
            (e2?.(e) ?? !0),
        ),
        tG = (0, Q.zJ)(tW),
        tQ = null != tG
      eJ[46] !== tQ ? ((eG = { enabled: tQ }), (eJ[46] = tQ), (eJ[47] = eG)) : (eG = eJ[47])
      let { nativeApps: tF, isLoading: tB } = (0, eu.t)(eG),
        tV = tN?.find(ex) ?? null,
        tJ = tp && tV?.plugin.enabled !== !1 && (null == tV || e2?.(tV) !== !1) ? (tV ?? tW.find(ek) ?? null) : null,
        tZ = $.appServices?.chromiumBrowser,
        tY = null != tJ && null != tZ
      ;(eJ[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((eQ = async () => (await tZ?.getInstalledBrowserFamilies()) ?? []),
          (eF = ["chromium-browser", "installed-browser-families"]),
          (eJ[48] = eQ),
          (eJ[49] = eF))
        : ((eQ = eJ[48]), (eF = eJ[49])),
        eJ[50] !== tY
          ? ((eB = { enabled: tY, queryFn: eQ, queryKey: eF, retry: !1, staleTime: W.D.FIVE_SECONDS }),
            (eJ[50] = tY),
            (eJ[51] = eB))
          : (eB = eJ[51]))
      let { data: tX, isLoading: t0 } = (0, a.I)(eB),
        t1 = (0, P.D6)(null == tJ ? [] : Object.keys(r.Ypn).filter(r.rUV).map(eM))
      eJ[52] !== eZ || eJ[53] !== eY || eJ[54] !== e0 || eJ[55] !== e4
        ? ((eV = { getChatGptConversationId: eZ, getLocalConversationId: eY, hostId: e0, onMentionInserted: e4 }),
          (eJ[52] = eZ),
          (eJ[53] = eY),
          (eJ[54] = e0),
          (eJ[55] = e4),
          (eJ[56] = eV))
        : (eV = eJ[56])
      let t2 = (0, ed.f)(eV),
        t3 =
          null != (0, d.Ul)(t_ ? v.chatGptAuthenticatedAccountId$ : null) &&
          e0 === q.fI &&
          ti === q.fI &&
          null != tZ &&
          tJ?.plugin.installed === !0 &&
          tJ.plugin.id !== eX &&
          tW.includes(tJ) &&
          !0 === tm.get("chrome") &&
          tL.length > 0 &&
          "chrome".startsWith(tL.toLowerCase()),
        t4 = t3 && tM.available,
        t5 = Object.keys(r.Ypn)
          .filter(r.rUV)
          .filter(
            (e) =>
              (t_ ? "chrome" === e && t4 : !0 === tm.get(e)) &&
              (t1.get(e)?.isInstalled === !0 || tX?.includes(e) === !0),
          ),
        t6 = t_ && t5.includes("chrome"),
        t7 = !t6 && ((t3 && tM.isLoading) || (t4 && (t0 || t1.get("chrome")?.isLoading === !0))),
        t8 = "macOS" === to || "windows" === to,
        t9 = t8
          ? ((t = tW),
            (ey = (0, D.t)()),
            (ev = (0, p.v3D)(ey)),
            (eP = (function (e) {
              switch (e) {
                case p.x1u.Dev:
                  return "chrome-dev"
                case p.x1u.Agent:
                case p.x1u.Prod:
                case p.x1u.PublicBeta:
                  return "chrome"
                case p.x1u.InternalAlpha:
                case p.x1u.Nightly:
                  return "chrome-internal"
              }
            })(ey)),
            u()(
              t.filter((e) => eL(e) && e.marketplaceName === ev),
              [(e) => +(e.plugin.name !== eP), (e) => G.indexOf(e.plugin.name)],
            ))
          : [],
        ne = tW.find(ew) ?? null,
        nt = t8 && tu ? tW.filter(N.V0) : [],
        nn = t8 && tu && td ? tW.filter(N.ho) : [],
        ni = t8 && tu ? tW.filter(N._c) : [],
        nl = new Set(t9),
        na = tz.find(eS),
        nr = null != na && (!ty || !na.plugin.enabled || na.plugin.availability === eg || tW.includes(na)),
        ns = tW.filter(
          (e) =>
            e.plugin.id !== eX &&
            !((t6 || t7) && (e === tJ || (eL(e) && (0, p.foP)(e.marketplaceName)))) &&
            e.servicePlugin?.is_template !== !0 &&
            !(tn && ty && tR?.[(0, V.vt)(e.plugin.id)]?.is_connected === !0) &&
            !(nr && e.plugin.name === p._NM && (0, p.foP)(e.marketplaceName)) &&
            (!t8 || (!nl.has(e) && (e.plugin.installed || !eL(e)))) &&
            e !== ne &&
            e.plugin.id !== ef,
        ),
        no = o()(tr ? te?.projects : void 0, eb),
        nc = new Map(),
        nu = new Set()
      for (let e of ns) {
        let t = (0, y.VB)(e.plugin.interface?.websiteUrl)
        if (null == t) continue
        let n = no[t],
          i = n?.length === 1 ? n[0] : void 0
        null != i && (nc.set((0, m.hy)(e.plugin), i.id), nu.add(`site:${i.id}`))
      }
      let nd = tP
          ? ((n = ns),
            (s = tC),
            (c = tD),
            u()(
              n.map((e, t) => {
                var n, i, l
                let a
                return {
                  plugin: e,
                  score:
                    ((n = e),
                    (i = s),
                    (l = c),
                    (a = (0, Z.ec)(n, l)),
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
              [(e) => -e.score, (e) => -e.keywordScore, (e) => (0, Z.ec)(e.plugin, c).displayName, (e) => e.index],
            )
              .filter((e) => e.score > 0 || e.keywordScore > 0)
              .map((e) => e.plugin))
          : ns,
        np = new Map()
      for (let e of tF) {
        let t = (0, Q.Mg)(e).trim().toLowerCase(),
          n = np.get(t)
        null == n ? np.set(t, [e]) : n.push(e)
      }
      let nm = new Map(),
        nh = new Set()
      for (let e of nd) {
        let t = np.get(((X = e), (X.displayName?.trim() || X.plugin.name).toLowerCase()))
        if (null != t && e !== tG) {
          let n = u()(t, eI)[0]
          if (null != n) for (let i of (nm.set(e.plugin.id, n), t)) nh.add(i.bundleId)
        }
      }
      let ng = (function (e) {
          var t, n
          let a,
            r,
            s,
            o,
            c = (0, i.c)(13),
            {
              browserPlugin: d,
              chromeAppPlugins: p,
              computerUsePlugin: m,
              excludedNativeAppBundleIds: g,
              installedBrowserFamilies: f,
              isInstalledBrowserFamiliesLoading: y,
              isNativeAppsLoading: v,
              mentionableBrowserFamilies: I,
              messagesAppPlugin: b,
              microsoftExcelAppPlugins: S,
              microsoftPowerPointAppPlugins: w,
              microsoftWordAppPlugins: M,
              nativeApps: k,
              onPluginMentionInserted: x,
              pluginMentionLabels: A,
              query: T,
              searchOtherApps: L,
            } = e,
            P = (0, h.A)(),
            { platform: N } = (0, _.V)(),
            E = T.trim().toLowerCase(),
            R = (0, Y.WE)(E)
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
            U = p[0] ?? null,
            $ = [
              {
                alias: J.ER,
                description: P.formatMessage({
                  id: "computerUse.nativeApps.microsoftExcel.detail",
                  defaultMessage: "Live workbook control",
                  description: "Detail text for the Microsoft Excel mention that routes to live Excel control.",
                }),
                kind: "microsoft-excel-plugin",
                plugin: S[0] ?? null,
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
                plugin: w[0] ?? null,
              },
              {
                alias: J.dl,
                description: P.formatMessage({
                  id: "computerUse.nativeApps.microsoftWord.detail",
                  defaultMessage: "Live document control",
                  description: "Detail text for the Microsoft Word mention that routes to live Word control.",
                }),
                kind: "microsoft-word-plugin",
                plugin: M[0] ?? null,
              },
            ],
            H = k.find(eo) ?? null,
            q =
              null == d || 0 === E.length
                ? []
                : I.flatMap((e) => {
                    var t, n
                    if (0 >= ((t = (0, ei.Or)(e)), Math.max((n = R)(t), n(`@${t}`)))) return []
                    let i = (0, ei._K)(e)
                    return [
                      {
                        browserFamily: e,
                        kind: "browser-plugin",
                        plugin: d,
                        mention: { ...(0, Z.ec)(d, A), ...i, description: j, path: (0, ei.ri)(d.plugin.id, e) },
                        nativeApp: null,
                      },
                    ]
                  }),
            K =
              L &&
              null == d &&
              null != U &&
              ((t = U), Math.max((n = R)(t.plugin.name), n(t.displayName ?? ""), n(Q.Sb), n(`@${Q.Sb}`)) > 0)
                ? {
                    kind: "app-plugin",
                    plugin: U,
                    mention: { ...(0, Z.ec)(U, A), name: Q.Sb, displayName: Q.Sb, description: j },
                    nativeApp: null == H ? null : { ...H, displayName: (0, Q.Mg)(H) },
                  }
                : null,
            D =
              null != b
                ? {
                    kind: "app-plugin",
                    plugin: b,
                    mention: { ...(0, Z.ec)(b, A), description: (0, Z.zc)(b) ?? "" },
                    nativeApp: null,
                  }
                : null,
            W = [...(null == K ? [] : [K]), ...(L && null != D && ec(D, R) > 0 ? [D] : [])],
            G = $.flatMap((e) => {
              let { alias: t, description: n, kind: i, plugin: l } = e
              if (!L || null == l || !(0, J.iZ)(t, R)) return []
              let a = k.find((e) => (0, J.Th)(t, e)) ?? null
              return [
                {
                  kind: i,
                  plugin: l,
                  mention: (0, J.xX)({ alias: t, plugin: l, description: n }),
                  nativeApp: null == a ? null : { ...a, displayName: t.label },
                },
              ]
            }),
            F =
              L && null != m
                ? ee()(k, es)
                    .filter(
                      (e) =>
                        !(
                          g.has(e.bundleId) ||
                          (null != d && f?.some((t) => (0, ei.d)(t, e)) === !0) ||
                          (null == d && null != U && (0, Q.mz)(e)) ||
                          (null != b && e.bundleId === C.n) ||
                          $.some((t) => {
                            let { alias: n, plugin: i } = t
                            return null != i && (0, J.Th)(n, e)
                          })
                        ),
                    )
                    .map((e) => {
                      let t = (0, Q.Mg)(e)
                      return { kind: "native-app", app: t === e.displayName ? e : { ...e, displayName: t }, plugin: m }
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
                    })
                : [],
            B = u()([...q, ...W, ...G, ...F], (e) =>
              "native-app" === e.kind ? -R(e.app.displayName) : -ec(e, R),
            ).slice(0, 8),
            V = B.flatMap(er)
          c[2] !== m
            ? ((r = (e) => ({ ...(0, en.fY)({ appPath: e.appPath }), enabled: null != m })), (c[2] = m), (c[3] = r))
            : (r = c[3])
          let X = (0, l.E)({ queries: V.map(r) }),
            eu =
              L && (v || y) && 0 === q.length && 0 === W.length && 0 === G.length && 0 === F.length ? O.loading : null
          if ((null == m && 0 === q.length && 0 === W.length && 0 === G.length) || (0 === B.length && null == eu))
            return null
          let ed = O.title,
            ep = B.map((e) => {
              if ("native-app" !== e.kind) {
                let t = null == e.nativeApp ? "" : (X[V.indexOf(e.nativeApp)]?.data?.iconSmall ?? "")
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
                        ? (0, Z.PG)(e.plugin, A)
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
                      x?.(e.plugin, "browser-plugin" === e.kind ? e.browserFamily : void 0))
                  },
                }
              }
              let t = X[V.indexOf(e.app)]?.data?.iconSmall ?? "",
                n = (0, Q.UA)({ app: e.app, description: j, computerPlugin: e.plugin, iconSmall: t })
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
                  ;(i.insertMention(n, l), x?.(e.plugin))
                },
              }
            })
          return (
            c[4] !== y || c[5] !== v || c[6] !== X
              ? ((s = v || y || X.some(ea)), (c[4] = y), (c[5] = v), (c[6] = X), (c[7] = s))
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
          browserPlugin: tJ,
          chromeAppPlugins: t9,
          computerUsePlugin: tG,
          excludedNativeAppBundleIds: nh,
          installedBrowserFamilies: tX,
          isInstalledBrowserFamiliesLoading: t0,
          isNativeAppsLoading: tB,
          mentionableBrowserFamilies: t5,
          messagesAppPlugin: ne,
          microsoftExcelAppPlugins: nt,
          microsoftPowerPointAppPlugins: nn,
          microsoftWordAppPlugins: ni,
          nativeApps: tF,
          onPluginMentionInserted: t2,
          pluginMentionLabels: tD,
          query: e7,
          searchOtherApps: tP,
        }),
        nf = tK || t7,
        ny = nf && 0 === nd.length,
        nv = []
      if (nd.length > 0 || ny) {
        let e
        ;(eJ[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.zR)({
              id: "composer.atMentionList.plugins",
              defaultMessage: "Plugins",
              description: "Section header for plugin results in the @ mention list.",
            })),
            (eJ[57] = e))
          : (e = eJ[57]),
          nv.push({
            id: "plugins",
            title: e,
            items: nd.map((e) => {
              let t = nm.get(e.plugin.id),
                n = nc.get((0, m.hy)(e.plugin)),
                i = (0, Z.ec)(e, tD),
                l = {
                  ...i,
                  path: null == n ? i.path : `${i.path}${i.path.includes("?") ? "&" : "?"}site=${(0, B.rY)(n)}`,
                  computerUseAppMentionPath: null != t && null != tG ? (0, Q.I8)(t, tG) : void 0,
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
                detail: (0, Z.zc)(e),
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
                  ;(a.insertMention(l, r), t2(e), null != n && (0, f.fv)(ta), null != t && null != tG && t2(tG))
                },
              }
            }),
            emptyState: ny
              ? (0, g.zR)({
                  id: "composer.atMentionList.pluginsLoading",
                  defaultMessage: "Loading plugins…",
                  description:
                    "Shown in the plugins section when plugin discovery is loading and no results have arrived yet",
                })
              : null,
            isLoading: nf,
          }))
      }
      return (
        null != ng && nv.push(ng),
        {
          arePluginsLoading: tK,
          mentionablePlugins: tW,
          sitesSource:
            null == te
              ? void 0
              : { sections: te.sections.map((e) => ({ ...e, items: e.items.filter((e) => !nu.has(e.key)) })) },
          sections: nv,
          systemHintsByMentionPath: ty ? tR : void 0,
        }
      )
    }
    function eI(e) {
      return e.bundleId
    }
    function eb(e) {
      return (0, y.VB)(e.current_live_url)
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
      return n.name === p.kJv && (0, p.foP)(t)
    }
    function ex(e) {
      let { marketplaceName: t, plugin: n } = e
      return n.name === p.kJv && (0, p.foP)(t)
    }
    function eA(e) {
      let { isLoading: t } = e
      return t
    }
    function eT(e) {
      return "chrome" === e || !G.includes(e)
    }
    function e_(e) {
      let { marketplaceName: t, marketplacePath: n } = e
      return t === p.hEe && null != n
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
      p = n("ZQ23"),
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
      A = n("d6Ff"),
      T = n("CoqP"),
      _ = n("YWcr")
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
        q = (0, i.c)(8),
        { excludedThreadReferences: z, hostId: K, query: D, roots: W, searchTitlesOnly: G } = e,
        Q = void 0 !== G && G,
        F = (0, a.gh)(h.u),
        B = (0, I.o)(D, 100),
        V = D.trim(),
        J = B.trim(),
        Z = J !== V,
        { remoteConnections: Y, enabledRemoteHostIdSet: X } = (0, m.mw)(),
        ee = (0, c.g)(Y),
        et = [...new Set([K, g.fI, ...(ee?.map(H) ?? [])])],
        en = new Set([K, g.fI, ...X]),
        { data: ei } = (0, d.Q)(r.Q2Y.PROJECTLESS_THREAD_IDS),
        { data: el } = (0, d.Q)(r.Q2Y.THREAD_WORKSPACE_ROOT_HINTS),
        { data: ea, isFetching: er } = (0, l.I)({
          queryKey: [Q ? "page-thread-title-search" : "composer-thread-search", et, J],
          queryFn: async () => {
            let e = await Promise.allSettled(
              et.map((e) => (0, o.V)(F, e).searchThreads({ query: J, searchTitlesOnly: Q, cursor: null, limit: 50 })),
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
                    let I = null != v && (0, T.b)({ catalogEntry: v, summary: u, liveTitle: s?.title ?? null }),
                      b = I ? v.displayTitle : u?.title,
                      k =
                        n?.fallbackSearchTitle ??
                        (n?.fallbackSearchTitle !== void 0 || null == s || (0, M.N)(s.threadStartKind, s.threadSource)
                          ? null
                          : (0, w.x1)(n?.titleInput ?? void 0)),
                      x =
                        null == s || (0, T.J)(s.title, b)
                          ? null
                          : (0, w.Lm)({ id: e, title: s.title, fallbackSearchTitle: k, turns: null }),
                      _ = x ?? b ?? ((t === g.fI && d.get(e)?.trim()) || null),
                      L = null == x || s?.title?.trim() ? _ : (k ?? _),
                      P = (I ? v.cwd : u?.cwd) ?? s?.cwd ?? ""
                    i.push({
                      kind: "local",
                      conversationId: e,
                      threadId: e,
                      hostId: t,
                      threadKey: (0, A.z3)(e),
                      title: _,
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
              })(F, en, new Set(et)),
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
        ed = Z || null == es ? [] : (ea?.results ?? []).filter(O),
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
          n = Y.find((t) => t.hostId === e.hostId)?.displayName ?? null
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
            i.insertAgentMention({ kind: "agent", name: t, displayName: t, path: (0, _.yO)(e.threadId, e.hostId) }, l)
          },
        }
      })
      if (0 === eb.length && !Z && !er && !eo) return P
      ;(q[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, s.zR)({
            id: "composer.atMentionList.chats",
            defaultMessage: "Chats",
            description: "Section header for past task results in the @ mention list.",
          })),
          (q[0] = t))
        : (t = q[0]),
        q[1] !== eb.length
          ? ((n =
              0 === eb.length
                ? (0, s.zR)({
                    id: "composer.atMentionList.chats.loading",
                    defaultMessage: "Searching chats…",
                    description: "Shown in the tasks section while past tasks are loading",
                  })
                : null),
            (q[1] = eb.length),
            (q[2] = n))
          : (n = q[2]))
      let eS = Z || er || eo
      return (
        q[3] !== eb || q[4] !== t || q[5] !== n || q[6] !== eS
          ? ((C = { sections: [{ id: "threads", title: t, items: eb, emptyState: n, isLoading: eS }] }),
            (q[3] = eb),
            (q[4] = t),
            (q[5] = n),
            (q[6] = eS),
            (q[7] = C))
          : (C = q[7]),
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
    function H(e) {
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
      m = n("COSu"),
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
                    `plugin:${(0, o.GL)(l).path}`,
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
                      searchHint: n.searchHint,
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
      m = n("bVeK"),
      h = n("OWtl"),
      g = n("rpnz"),
      f = n("e1xH"),
      y = n("vnV1"),
      v = n("ELpK"),
      I = n("DWyQ"),
      b = n("pyoT"),
      S = n("M7Vo"),
      w = n("kTTh")
    function M(e) {
      return { pageId: e.root_page_id, space: e, title: e.name.trim() || e.id, detail: null }
    }
    function k(e) {
      return null == e.deleted_at
    }
    function x() {}
    function A(e) {
      return e.root_page_id
    }
    function T({
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
    function _(e, t, n) {
      let i = t.trim()
      if (0 === i.length) return e.slice(0, n).map(T)
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
        .map(({ item: e }) => T(e))
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
            P = (0, l.c)(88),
            { enabled: C, query: N, expanded: E, category: R, searchQuery: O } = e,
            j = void 0 !== E && E,
            U = void 0 === O ? N : O,
            $ = (0, s.gh)(h.u),
            H = (0, c.A)(),
            q = (0, s.Ul)(f.pagesEnabled$),
            z = (0, s.Ul)(d.chatGptAuthenticatedAccountId$),
            K = !0 === (0, s.Ul)(!!(void 0 === C || C) && !!q && null != z && y.Sc),
            D = K && "spaces" !== R
          P[0] !== D ? ((t = { enabled: D }), (P[0] = D), (P[1] = t)) : (t = P[1])
          let { data: W, isFetching: G, isError: Q, refetch: F } = (0, s.Ul)(b.spacePagesQuery$, t),
            B = (0, s.Ul)(D ? b.spacePagesHasMore$ : null)
          P[2] !== K ? ((n = { enabled: K }), (P[2] = K), (P[3] = n)) : (n = P[3])
          let { data: V, isLoading: J, isError: Z } = (0, s.Ul)(b.spacesQuery$, n),
            Y = (0, s.Ul)(D ? b.visibleSpacePages$ : null) ?? W
          P[4] !== U ? ((i = U.trim()), (P[4] = U), (P[5] = i)) : (i = P[5])
          let X = i
          P[6] !== D || P[7] !== N ? ((a = D && N.trim().length >= 2), (P[6] = D), (P[7] = N), (P[8] = a)) : (a = P[8])
          let ee = a,
            et = ee && X.length >= 2
          P[9] !== et ? ((o = { enabled: et }), (P[9] = et), (P[10] = o)) : (o = P[10])
          let { data: en, isFetching: ei, isError: el } = (0, s._U)(v.Q_, X, o)
          if (!K) return null
          P[11] !== N ? ((p = N.trim()), (P[11] = N), (P[12] = p)) : (p = P[12])
          let ea = X === p,
            er = J || (ee ? !ea || ei : G)
          P[13] !== V?.items || P[14] !== V?.items.map
            ? ((I = new Set(V?.items.map(A))), (P[13] = V?.items), (P[14] = V?.items.map), (P[15] = I))
            : (I = P[15])
          let es = I
          P[16] !== N ? ((S = N.trim()), (P[16] = N), (P[17] = S)) : (S = P[17])
          let eo = S.length > 0,
            ec = j ? 20 : 5
          if (
            P[18] !== G ||
            P[19] !== ee ||
            P[20] !== Q ||
            P[21] !== B ||
            P[22] !== j ||
            P[23] !== eo ||
            P[24] !== D ||
            P[25] !== ec ||
            P[26] !== H ||
            P[27] !== ea ||
            P[28] !== Y?.items ||
            P[29] !== N ||
            P[30] !== F ||
            P[31] !== $ ||
            P[32] !== en ||
            P[33] !== es ||
            P[34] !== V
          ) {
            let e,
              t,
              n = new Map()
            for (let t of (P[36] !== D || P[37] !== Y?.items || P[38] !== V
              ? ((e = D && null != V ? (Y?.items ?? []) : []),
                (P[36] = D),
                (P[37] = Y?.items),
                (P[38] = V),
                (P[39] = e))
              : (e = P[39]),
            e))
              if (
                !(es.has(t.page_id) || (0, g.sD)(t.page_id)) &&
                !1 !== t.access.can_read &&
                null == t.deleted_at &&
                (n.set(t.page_id, t), !eo && n.size === ec)
              )
                break
            P[40] !== V?.items
              ? ((t = (e) => {
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
                (P[40] = V?.items),
                (P[41] = t))
              : (t = P[41])
            let i = _(Array.from(n.values(), t), N, ec),
              l =
                ee && ea && null != V
                  ? en?.items.flatMap((e) => {
                      let { source_type: t, payload: i, title: l } = e
                      if ("space" !== t || "space_page" !== i.kind || es.has(i.page_id)) return []
                      let { page_id: a, space_id: r } = i,
                        s = V?.items.find((e) => e.id === r),
                        o = n.get(a)
                      return [
                        T({
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
              ((w = r()([...(l ?? []), ...i], "key").slice(0, 20)),
              D && !eo && w.length < 20 && (j || w.length < ec) && (B || Q))
            ) {
              let e
              ;(P[42] !== B || P[43] !== F || P[44] !== $
                ? ((e = () => {
                    ;(B ? (0, b.loadMoreSpacePages)($) : F()).catch(x)
                  }),
                  (P[42] = B),
                  (P[43] = F),
                  (P[44] = $),
                  (P[45] = e))
                : (e = P[45]),
                w.push({
                  key: "pages-load-more",
                  label: Q
                    ? H.formatMessage({
                        id: "space.list.retryPersonalPages",
                        defaultMessage: "Retry pages",
                        description: "Action to retry loading personal Pages",
                      })
                    : H.formatMessage({
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
            ;((P[18] = G),
              (P[19] = ee),
              (P[20] = Q),
              (P[21] = B),
              (P[22] = j),
              (P[23] = eo),
              (P[24] = D),
              (P[25] = ec),
              (P[26] = H),
              (P[27] = ea),
              (P[28] = Y?.items),
              (P[29] = N),
              (P[30] = F),
              (P[31] = $),
              (P[32] = en),
              (P[33] = es),
              (P[34] = V),
              (P[35] = w))
          } else w = P[35]
          let eu = Z || (ee && ea && el)
          if (
            P[46] !== J ||
            P[47] !== ee ||
            P[48] !== R ||
            P[49] !== j ||
            P[50] !== eu ||
            P[51] !== eo ||
            P[52] !== D ||
            P[53] !== ec ||
            P[54] !== H ||
            P[55] !== er ||
            P[56] !== w ||
            P[57] !== N ||
            P[58] !== V ||
            P[59] !== Z
          ) {
            let e = []
            if (D && (w.length > 0 || er || eu)) {
              let t,
                n,
                i = null
              if (0 === w.length && !er && eu) {
                let e
                ;(P[61] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, u.zR)({
                      id: "composer.atMentionList.pagesSearchFailed",
                      defaultMessage: "Couldn’t search Pages",
                      description:
                        "Shown when the Page search request in the composer mention menu fails and no Page matches are available.",
                    })),
                    (P[61] = e))
                  : (e = P[61]),
                  (i = e))
              }
              P[62] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, u.zR)({
                    id: "composer.atMentionList.pages",
                    defaultMessage: "Pages",
                    description:
                      "Section header for shared Page documents in the composer @ mention list. Choosing a Page gives the current task a live document reference.",
                  })),
                  (P[62] = t))
                : (t = P[62])
              let l = ee ? "source-ranked" : void 0
              ;(P[63] !== i || P[64] !== eu || P[65] !== er || P[66] !== w || P[67] !== t || P[68] !== l
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
                  (P[63] = i),
                  (P[64] = eu),
                  (P[65] = er),
                  (P[66] = w),
                  (P[67] = t),
                  (P[68] = l),
                  (P[69] = n))
                : (n = P[69]),
                e.push(n))
            }
            if ("pages" !== R) {
              let t, n
              if (P[70] !== j || P[71] !== eo || P[72] !== ec || P[73] !== H || P[74] !== N || P[75] !== V) {
                let e
                ;((n = H.formatMessage({
                  id: "composer.atMentionList.spaces",
                  defaultMessage: "Spaces",
                  description:
                    "Section header and search category for shared Spaces in the composer mention menu. A Space is a collection of Pages and files.",
                })),
                  P[78] !== V?.items ? ((e = V?.items ?? []), (P[78] = V?.items), (P[79] = e)) : (e = P[79]),
                  (t = _(e.filter(k).map(M), N, ec)))
                let i = eo && n.toLocaleLowerCase().startsWith(N.trim().toLocaleLowerCase())
                ;(!j &&
                  (i || (!eo && (V?.items.length ?? 0) > ec)) &&
                  t.push({
                    key: "spaces-browse",
                    label: n,
                    detail: null,
                    icon: { 16: m.i2, 20: m.hmv },
                    type: "submenu",
                    submenu: { kind: "at-mention-category", category: "spaces" },
                  }),
                  (P[70] = j),
                  (P[71] = eo),
                  (P[72] = ec),
                  (P[73] = H),
                  (P[74] = N),
                  (P[75] = V),
                  (P[76] = t),
                  (P[77] = n))
              } else ((t = P[76]), (n = P[77]))
              if (t.length > 0 || J || Z) {
                let i, l
                ;(P[80] !== Z
                  ? ((i = Z
                      ? (0, u.zR)({
                          id: "composer.atMentionList.spacesLoadFailed",
                          defaultMessage: "Couldn’t load Spaces",
                          description: "Shown when the composer cannot load accessible Spaces.",
                        })
                      : null),
                    (P[80] = Z),
                    (P[81] = i))
                  : (i = P[81]),
                  P[82] !== J || P[83] !== t || P[84] !== Z || P[85] !== n || P[86] !== i
                    ? ((l = {
                        id: "spaces",
                        title: n,
                        showTitle: !0,
                        items: t,
                        isLoading: J,
                        isError: Z,
                        emptyState: i,
                      }),
                      (P[82] = J),
                      (P[83] = t),
                      (P[84] = Z),
                      (P[85] = n),
                      (P[86] = i),
                      (P[87] = l))
                    : (l = P[87]),
                  e.push(l))
              }
            }
            ;((L = { sections: e }),
              (P[46] = J),
              (P[47] = ee),
              (P[48] = R),
              (P[49] = j),
              (P[50] = eu),
              (P[51] = eo),
              (P[52] = D),
              (P[53] = ec),
              (P[54] = H),
              (P[55] = er),
              (P[56] = w),
              (P[57] = N),
              (P[58] = V),
              (P[59] = Z),
              (P[60] = L))
          } else L = P[60]
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
//# sourceMappingURL=923712.8a53df3a43.js.map
