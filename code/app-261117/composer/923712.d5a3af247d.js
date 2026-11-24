export const __rspack_esm_ids = [923712]
export const __webpack_modules__ = {
  gsZR(e, t, n) {
    var l = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 14,
          height: 12,
          fill: "none",
          viewBox: "0 0 14 12",
          ...e,
          children: (0, l.jsx)("path", {
            fill: "currentColor",
            d: "M8 7.534C8 5.846 6.492 4.4 4.532 4.4S1.064 5.846 1.064 7.534c0 .615.195 1.19.538 1.678a.532.532 0 0 1 .093.365 6.178 6.178 0 0 1-.204 1.001c.37-.062.726-.151 1.075-.27l.1-.023c.1-.013.202.002.294.045a3.75 3.75 0 0 0 1.572.34C6.492 10.67 8 9.223 8 7.533Zm4.8-3.336c0-1.688-1.508-3.134-3.468-3.134-1.152 0-2.162.507-2.788 1.272a.533.533 0 0 1-.824-.675C6.553.645 7.867 0 9.332 0c2.458 0 4.532 1.837 4.532 4.198 0 .77-.226 1.49-.613 2.107.07.455.21.904.389 1.368a.532.532 0 0 1-.528.723 8.246 8.246 0 0 1-1.961-.354 4.73 4.73 0 0 1-.412.15.532.532 0 0 1-.308-1.02c.164-.049.322-.109.473-.178l.095-.034a.533.533 0 0 1 .299.013c.349.118.704.207 1.074.27a6.172 6.172 0 0 1-.203-1.002.532.532 0 0 1 .093-.365 2.903 2.903 0 0 0 .538-1.678ZM9.064 7.534c0 2.362-2.074 4.2-4.532 4.2a4.826 4.826 0 0 1-1.822-.355 8.139 8.139 0 0 1-1.676.332l-.282.021a.532.532 0 0 1-.528-.723l.142-.391a5.85 5.85 0 0 0 .247-.977A3.95 3.95 0 0 1 0 7.534c0-2.361 2.074-4.198 4.532-4.198s4.532 1.837 4.532 4.198Z",
          }),
        })))
  },
  TKga(e, t, n) {
    function l() {
      return { sources: [], selection: { status: "idle" } }
    }
    n.d(
      t,
      {},
      {
        Z: function (e, t) {
          switch (t.type) {
            case "reset":
              return l()
            case "dismiss":
              return "open" === e.selection.status ? { ...e, selection: { ...e.selection, status: "dismissed" } } : e
            case "open":
              return { ...e, selection: { status: "open", category: t.category } }
            case "reconcile": {
              let n = t.sources,
                l = n.at(-1)
              if (void 0 === l)
                return 0 === e.sources.length && "idle" === e.selection.status
                  ? e
                  : { sources: n, selection: { status: "idle" } }
              if (
                n.length === e.sources.length &&
                n.every((t, n) => t.mentionId === e.sources[n]?.mentionId && t.category === e.sources[n]?.category)
              )
                return e
              let i = e.selection,
                a = n.findLast((t) => !e.sources.some((e) => e.mentionId === t.mentionId && e.category === t.category))
              if (
                "idle" !== i.status &&
                n.some((e) => e.category === i.category) &&
                (void 0 === a || a.category === i.category)
              )
                return { sources: n, selection: i }
              return { sources: n, selection: { status: "open", category: (a ?? l).category } }
            }
          }
        },
        y: l,
      },
    )
  },
  Aetk(e, t, n) {
    var l = n("iRMi"),
      i = n("qmMi"),
      a = n("yGJW"),
      r = n("Sd8U")
    let s = (0, i.vP)(r.PR, null),
      o = (0, i.vP)(r.PR, null)
    function u(e, t) {
      e.set(s, t)
    }
    function c(e, t) {
      ;((0, a.yy)(e, l.CodexNewChatSuggestionEvent, {
        action: l.CodexNewChatSuggestionAction.CODEX_NEW_CHAT_SUGGESTION_ACTION_MESSAGE_SENT,
        categoryId: t.categoryId,
        suggestionId: t.suggestionId,
        suggestionLevel: t.suggestionLevel,
        surface: t.surface,
      }),
        e.get(s) === t && d(e))
    }
    function d(e) {
      ;(e.set(s, null), m(e))
    }
    function m(e) {
      e.set(o, null)
    }
    n.d(
      t,
      {},
      {
        G0: function (e, t) {
          ;(u(e, t), e.set(o, t))
        },
        J6: function (e) {
          return e.get(s)
        },
        OK: function (e) {
          e.get(s)?.preserveAttributionOnArtifactTemplateOpen ? m(e) : d(e)
        },
        R: d,
        dN: u,
        iH: m,
        rV: o,
        vn: function (e) {
          let t = e.get(s)
          null != t && c(e, t)
        },
        zn: c,
      },
    )
  },
  RAeG(e, t, n) {
    var l = n("SIrB"),
      i = n("f6KK"),
      a = n("rS3J"),
      r = n("EULo")
    let s = "plugin://"
    function o(e) {
      let t = e.toLowerCase().replaceAll("\\", "/")
      if (t.startsWith(s)) return (0, l.AH)(t.slice(s.length).split("@")[0])
      if (t.startsWith("app://")) return (0, l.AH)(t.slice(6))
      let n = t.match(/(?:^|\/)skills\/(?:\.system\/)?([^/]+)\/skill\.md$/)?.[1]
      return null == n ? null : (0, l.AH)(n)
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
              let l = "string" == typeof e.attrs.path ? e.attrs.path : "",
                i = o(l)
              return (null != i && ("site" !== i || t) && n.push({ mentionId: l, category: i }), !0)
            }),
            n
          )
        },
        k8: function (e, t, n) {
          let { state: l, dispatch: a } = e.view,
            r = i.U3.atEnd(l.doc),
            s = r.$from.nodeBefore
          ;(a(l.tr.setSelection(r)),
            null == s || (s.isText && /\s$/.test(s.text ?? "")) || e.insertTextAtSelection(" "))
          let o = "__CODEX_TEMPLATE_NAME_PLACEHOLDER__",
            u = n.formatMessage(
              { id: "home.artifactTemplates.useTemplate.prompt", defaultMessage: "Use the {templateName} template." },
              { templateName: o },
            ),
            c = u.indexOf(o)
          if (-1 === c) {
            ;(e.insertMentionAtSelection(t), e.insertTextAtSelection(u))
            return
          }
          let d = u.slice(0, c),
            m = u.slice(c + o.length).replaceAll(o, () => t.displayName)
          ;(e.insertTextAtSelection(d), e.insertMentionAtSelection(t))
          let { state: p, dispatch: h } = e.view,
            g = p.selection.from - 1,
            f = p.tr.insertText(m, g, p.selection.from)
          ;(f.setSelection(i.U3.create(f.doc, g + m.length)), h(f))
        },
        lI: o,
        ss: function (e) {
          let t = null,
            n = 0
          for (let l = (0, a.ex)(e, n); null != l; l = (0, a.ex)(e, n)) ((t = o((0, r.gh)(l.path)) ?? t), (n = l.end))
          return t
        },
      },
    )
  },
  P50e(e, t, n) {
    var l = n("Kt3w"),
      i = n("qmMi"),
      a = n("DD2M"),
      r = n("Isak"),
      s = n("rS3J"),
      o = n("EULo"),
      u = n("yGJW"),
      c = n("Sd8U")
    let d = (0, i.vP)(c.PR, null),
      m = (0, i.vP)(c.PR, null)
    function p(e, t, n) {
      let i = void 0 === n ? e.get(d) : n
      null != i &&
        (e.set(m, {
          ...i,
          type: "template",
          templateId: t.templateId,
          templateOrigin: t.templateOrigin,
          inclusion: t.inclusion,
        }),
        (0, u.yy)(e, l.CodexArtifactTemplateSelected, {
          ...i,
          ...(null == t.templateId ? {} : { templateId: t.templateId }),
          templateOrigin: t.templateOrigin,
        }))
    }
    function h(e, t) {
      let n = 0
      for (let l = (0, s.ex)(e, n); null != l; l = (0, s.ex)(e, n)) {
        if ((0, o.gh)(l.path) === t) return !0
        n = l.end
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
                return l.CodexArtifactTemplateCarouselKind.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_DOCUMENT
              case "presentation":
                return l.CodexArtifactTemplateCarouselKind.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_PRESENTATION
              case "spreadsheet":
                return l.CodexArtifactTemplateCarouselKind.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_KIND_SPREADSHEET
              case "site":
                return null
            }
          })(t)
          if (null == n) return (e.set(d, null), null)
          let i = { journeyId: (0, a.A)(), carouselKind: n }
          return (e.set(d, i), (0, u.yy)(e, l.CodexArtifactTemplateCarouselShown, i), i)
        },
        qv: function (e, { attachmentPath: t, journey: n, templateId: i }) {
          p(
            e,
            {
              templateId: i,
              templateOrigin: l.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_BUILT_IN_ASSET,
              inclusion: { type: "attachment", path: t },
            },
            n,
          )
        },
        rY: function (e, { fileAttachments: t, persistedPrompt: n }) {
          let i = e.get(m)
          if ((e.set(m, null), null != i)) {
            var a, r, s
            if (
              "create" === i.type
                ? h(n, i.mentionPath)
                : ((a = i.inclusion),
                  (r = n),
                  (s = t),
                  "mention" === a.type ? h(r, a.path) : s.some((e) => e.path === a.path))
            ) {
              if ("create" === i.type)
                return void (0, u.yy)(e, l.CodexArtifactTemplateCreateNewTemplatePromptSubmitted, {
                  journeyId: i.journeyId,
                  carouselKind: i.carouselKind,
                })
              ;(0, u.yy)(e, l.CodexArtifactTemplatePromptSubmitted, {
                journeyId: i.journeyId,
                carouselKind: i.carouselKind,
                ...(null == i.templateId ? {} : { templateId: i.templateId }),
                templateOrigin: i.templateOrigin,
              })
            }
          }
        },
        sv: function (e, t) {
          let n = e.get(d)
          null != n &&
            ((0, u.yy)(e, l.CodexArtifactTemplateCarouselDismissed, { ...n, dismissReason: t }), e.set(d, null))
        },
        tN: function (e, t) {
          p(e, {
            templateId:
              "system" === t.scope ? (0, r.A)(`${t.scope}:${t.name}`, "6b4ea11a-b46f-4e9d-957d-35b6f934874c") : void 0,
            templateOrigin: (function (e) {
              switch (e) {
                case "system":
                  return l.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_SYSTEM_SKILL
                case "user":
                  return l.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_USER_SKILL
                case "repo":
                  return l.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_REPO_SKILL
                case "admin":
                  return l.CodexArtifactTemplateOrigin.CODEX_ARTIFACT_TEMPLATE_ORIGIN_ADMIN_SKILL
              }
            })(t.scope),
            inclusion: { type: "mention", path: t.path },
          })
        },
        u4: function (e, t) {
          let n = e.get(d)
          null != n &&
            (e.set(m, { ...n, type: "create", mentionPath: t }),
            (0, u.yy)(e, l.CodexArtifactTemplateCreateNewTemplateSelected, { ...n }))
        },
        zD: d,
      },
    )
  },
  BI7S(e, t, n) {
    var l = n("TKga"),
      i = n("qmMi"),
      a = n("Aetk"),
      r = n("CiLO"),
      s = n("Sd8U"),
      o = n("RAeG"),
      u = n("P50e")
    let c = (0, i.vP)(s.PR, l.y),
      d = (0, i.vP)(s.PR, !1),
      m = (0, i.un)(s.PR, ({ get: e }) => e(d) || "open" === e(c).selection.status),
      p = (0, i.un)(s.PR, ({ get: e }) => e(d) || ("open" === e(c).selection.status && null != (0, o.ss)(e(r.$e))))
    n.d(
      t,
      {},
      {
        LM: p,
        b1: d,
        d_: m,
        ek: c,
        ir: function ({ scope: e, path: t }) {
          let n = (0, o.lI)(t)
          null != n && ((0, a.OK)(e), e.set(c, (e) => (0, l.Z)(e, { type: "open", category: n })))
        },
        td: function (e) {
          ;(e.set(d, !1), (0, a.R)(e), e.set(u.zD, null), e.set(c, (e) => (0, l.Z)(e, { type: "dismiss" })))
        },
      },
    )
  },
  mzLv(e, t, n) {
    n.d(
      t,
      {},
      {
        Q: function (e) {
          return `chatgpt:${e}`
        },
        s: function (e, t) {
          return "local" === t ? e : `${e}:${t}`
        },
      },
    )
  },
  vnLQ(e, t, n) {
    var l = n("QosV"),
      i = n("SZCv"),
      a = n.n(i),
      r = n("qmMi"),
      s = n("DBCl"),
      o = n("Ehlj"),
      u = n("tgbB"),
      c = n("UlKW"),
      d = n("t162"),
      m = n("CfsC"),
      p = n("tl5a"),
      h = n("AqHb"),
      g = n("nIa3"),
      f = n("JQtI"),
      y = n("gdZA"),
      v = n("TYK1"),
      I = n("kx7U"),
      b = n("OWtl"),
      S = n("V3rO"),
      M = n("kfGJ"),
      k = n("r6TF"),
      x = n("d6Ff"),
      w = n("QGyr"),
      _ = n("TWTg"),
      A = n("mzLv"),
      L = n("fmZS")
    let T = (0, r.un)(b.u, ({ get: e }) =>
        (e(I.u8) ?? [])
          .filter(({ hostId: t }) => "connected" === e(p.y2, t))
          .map(({ hostId: e }) => e)
          .sort((e, t) => e.localeCompare(t)),
      ),
      C = (0, r.un)(b.u, ({ get: e }) => [M.fI, ...e(T)].filter((t) => (0, o.JF)(e(m.B, t), "attachedThreadSearch"))),
      P = (0, r.un)(b.u, ({ get: e }) => new Set([M.fI, s.iwv, ...e(T)])),
      E = (0, r.un)(b.u, ({ get: e }) => ({
        conversationsMeta: (0, k.ZI)(e, e(k.Tv)).flatMap((e) =>
          "local" === e.kind && null != e.summary ? [e.summary] : [],
        ),
        hostIds: e(P),
        projectLabelByThreadKey: e(w.o4),
      })),
      R = []
    function N(e, t) {
      if (t.isAeonThread && $(e, t.hostId, t.threadId)) return null
      let n = e(y.$P, { hostId: t.hostId, threadId: t.conversationId })
      return null == n ? t : { ...t, title: n, searchTitle: n }
    }
    function q(e, t) {
      return (
        t.has(e.hostId ?? M.fI) &&
        e.threadSource !== c.kM &&
        (null == e.source || "string" == typeof e.source || !("subAgent" in e.source))
      )
    }
    function O(e, t, n) {
      let l = e.cwd ?? "",
        i = null == t || e.title?.trim() ? t : ((0, d.uw)(t, 60) ?? ""),
        a = (t ?? l) || e.conversationId,
        r = (0, s.JXB)(e.conversationId),
        o = (0, x.z3)(r)
      return {
        kind: "local",
        threadKey: o,
        conversationId: r,
        hostId: e.hostId ?? M.fI,
        threadId: e.conversationId,
        title: i,
        searchTitle: a,
        cwd: l,
        workspaceKind: e.workspaceKind,
        branch: e.gitInfo?.branch ?? "",
        projectLabel: n?.get(o),
        hasUnreadTurn: e.hasUnreadTurn,
        isAeonThread: "durable" === (0, g.d)(e.hostId ?? M.fI, e.mode) && (0, f.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.recencyAt ?? e.updatedAt,
        searchPreview: null,
      }
    }
    function U(e) {
      switch (e.kind) {
        case "local":
          return (0, A.s)(e.threadKey, e.hostId)
        case "chatgpt":
          return (0, A.Q)(e.conversationId)
        case "dot":
          return `dot:${e.item.id}`
      }
    }
    function j(e) {
      let t = (0, s.JXB)(e.threadId)
      return {
        kind: "local",
        threadKey: (0, x.z3)(t),
        conversationId: t,
        hostId: e.hostId,
        attachedToThreadId: e.attachedToThreadId,
        threadId: e.threadId,
        title: e.title,
        searchTitle: e.title,
        cwd: e.cwd,
        branch: "",
        hasUnreadTurn: !1,
        isAeonThread: "durable" === (0, g.d)(e.hostId) && (0, f.N)(e.threadStartKind, e.threadSource),
        updatedAt: e.updatedAt,
        searchPreview: e.searchPreview,
      }
    }
    function z(e) {
      if ("local" === e.kind) return (0, L.Q7)(e.hostId, e.conversationId)
    }
    function $(e, t, n) {
      if ("durable" !== (0, h._)(t)) return !1
      let { data: l } = e(v.cloudAeonByThreadId$, (0, s.JXB)(n))
      return l?.active_root_thread_id != null && l.active_root_thread_id !== n
    }
    n.d(
      t,
      {},
      {
        EI: function ({ loadedChatSearchResults: e, chatGptResults: t, isChatSelectable: n, limit: l }) {
          return (0, u.lU)([...e, ...t], U)
            .filter(n)
            .sort((e, t) => t.updatedAt - e.updatedAt)
            .slice(0, l)
        },
        LU: U,
        MQ: function (e, t, n, l) {
          if (void 0 !== e.matchContext) return e.matchContext === n || e.matchContext === l ? null : e.matchContext
          if (!t) return null
          let i = (0, u.C4)(t),
            a = "local" === e.kind ? i.scoreCanonical : i.score
          return i.scoreTitle(e, n) > 0 || a(l) > 0 ? null : ((0, u.gA)(e, i, t.toLowerCase())?.value ?? null)
        },
        N6: function ({
          asyncResults: e,
          chatGptResults: t = [],
          isChatSelectable: n,
          loadedChatSearchResults: l,
          limit: i,
          query: a,
        }) {
          if (0 === a.trim().length || i <= 0) return []
          let r = (0, u.lU)([...l, ...t, ...e.filter((e) => e.threadSource !== c.kM).map(j)], U),
            s = (0, u.Wn)(a, i)
          for (let e of r) n?.(e) !== !1 && s.add(e)
          return s.results()
        },
        T0: function (e, t) {
          var n
          let i,
            s = (0, l.c)(3),
            o = (0, r.Ul)(void 0 === t || t ? E : void 0)
          s[0] !== e || s[1] !== o
            ? ((i =
                null == o
                  ? void 0
                  : ((n = { ...o, conversationsMeta: [...(e ?? []), ...o.conversationsMeta] }),
                    (0, r.un)(
                      b.u,
                      ({ get: e }) =>
                        (function ({
                          conversationsMeta: e,
                          getSearchTitle: t,
                          hostIds: n,
                          projectLabelByThreadKey: l,
                        }) {
                          return e.filter((e) => q(e, n)).map((e) => O(e, t(e), l))
                        })({ ...n, getSearchTitle: (t) => (0, _.D)(e, t) }).flatMap((t) => N(e, t) ?? []),
                      { isEqual: a() },
                    ))),
              (s[0] = e),
              (s[1] = o),
              (s[2] = i))
            : (i = s[2])
          let u = i
          return (0, r.Ul)(u) ?? R
        },
        er: T,
        hM: function (e, t) {
          let n = (0, k.oB)(e, t),
            l = n?.summary
          return null != l && q(l, e(P)) ? N(e, O(l, (0, _.D)(e, l), e(w.o4))) : null
        },
        hv: function ({ excludedThreadKeys: e, loadedChatSearchResults: t, limit: n, pinnedThreadIds: l }) {
          if (n <= 0) return { pinnedResults: [], recentResults: [] }
          let i = (0, u.lU)(t, U).filter((t) => !e?.has(t.threadKey)),
            a = new Map()
          for (let e of i) {
            let t = (0, x.PK)(e.threadKey)
            if (null != t) {
              let n = a.get(t)
              null == n ? a.set(t, [e]) : n.push(e)
            }
          }
          let r = new Set(l),
            s = l.flatMap((e) => a.get(e) ?? []),
            o = i
              .filter((e) => {
                let t = (0, x.PK)(e.threadKey)
                return null == t || !r.has(t)
              })
              .sort((e, t) => t.updatedAt - e.updatedAt)
          return { pinnedResults: s.slice(0, n), recentResults: o.slice(0, Math.max(n - s.length, 0)) }
        },
        oB: function (e, t) {
          if ("chatgpt" === e.kind) return null
          if (void 0 !== e.matchContext || null != e.searchPreview || "local" !== e.kind) return e.searchPreview
          let n = t.trim()
          if (0 === n.length) return null
          let { score: l, scoreTitle: i } = (0, u.C4)(n)
          return i(e) > 0 || 0 === l(e.branch) ? null : { kind: "branchMatch", branch: e.branch }
        },
        qw: function ({
          currentThreadKey: e,
          loadedChatSearchResults: t,
          limit: n,
          recentThreadKeys: l,
          unreadThreadKeys: i,
          visibleThreadKeys: a,
        }) {
          if (n <= 0) return []
          let r = (0, u.lU)(t, U),
            o = new Map(),
            c = new Map()
          for (let e of r) {
            ;(o.set(e.threadKey, e), o.set(z(e), e))
            let t = c.get(e.threadKey)
            if ((null == t ? c.set(e.threadKey, [e]) : t.push(e), "local" === e.kind)) {
              let t = (0, S.Uw)(e.conversationId)
              ;(0, s.L$F)(t) && o.set((0, x.z3)(t), e)
            }
          }
          let d = [],
            m = new Set(),
            p = (t) => {
              if (null == t) return
              if (null != a && !a.has(t.threadKey)) {
                if ("local" !== t.kind) return
                let e = (0, S.Uw)(t.conversationId)
                if (!(0, s.L$F)(e) || !a.has((0, x.z3)(e))) return
              }
              let l = z(t)
              l === e || m.has(l) || d.length === n || (m.add(l), d.push(t))
            },
            h = (e) => {
              p(o.get(e))
            }
          for (let e of i) {
            let t = o.get(e)
            null != t &&
              c.get(t.threadKey)?.forEach((e) => {
                p({ ...e, hasUnreadTurn: !0 })
              })
          }
          for (let e of l) h(e)
          for (let e of r.sort((e, t) => t.updatedAt - e.updatedAt)) p(e)
          return d
        },
        rb: C,
        xH: function (e) {
          return (0, r.un)(
            b.u,
            ({ get: t }) =>
              e.filter((e) => !(0, f.N)(e.threadStartKind, e.threadSource) || !$(t, e.hostId, e.threadId)),
            { isEqual: a() },
          )
        },
      },
    )
  },
  R2HH(e, t, n) {
    n.d(t, { Ox: () => F, Jc: () => B, yl: () => M })
    var l = n("ABep"),
      i = n("QosV"),
      a = n("i5ac"),
      r = n.n(a),
      s = n("qmMi"),
      o = n("zd8w"),
      u = n("oyxz"),
      c = n("tl2n"),
      d = n("u0X2"),
      m = n("Qm75"),
      p = n("qfej"),
      h = n("Wv1R"),
      g = n("VaJ5"),
      f = n("on57"),
      y = n("ZQu1"),
      v = n("tnQ4"),
      I = n("UxN3"),
      b = n("bIvi"),
      S = n("OOvA")
    function M(e) {
      let t,
        n,
        a,
        r,
        s,
        o,
        c,
        d = (0, i.c)(50),
        {
          preserveHighlightOnItemsChange: m,
          className: p,
          closeOnNoResults: h,
          containerRef: g,
          density: f,
          footer: y,
          footerSectionId: v,
          header: I,
          iconSize: M,
          isActive: x,
          loadingIcons: _,
          noResults: A,
          sections: L,
          onUpdateSelectedMention: T,
          onAddContext: C,
          onRequestClose: P,
          placement: E,
          query: R,
          chromeVariant: N,
          fixedSectionHeaders: q,
          isHomeMenu: O,
          keyboardEventTarget: U,
          keyboardVariant: j,
        } = e,
        z = void 0 === x || x,
        $ = void 0 === E ? "bottom" : E,
        D = void 0 === R ? "" : R,
        H = void 0 === N ? "default" : N,
        K = void 0 !== q && q,
        W = void 0 !== O && O
      d[0] !== L ? ((t = new Map(L.flatMap(k))), (d[0] = L), (d[1] = t)) : (t = d[1])
      let F = t
      d[2] !== F ? ((n = (e) => F.get(e) ?? null), (d[2] = F), (d[3] = n)) : (n = d[3])
      let Q = (0, b.K)(n),
        B = null != I,
        V = null == v ? y : void 0
      if (
        (d[4] !== A
          ? ((a = A ?? (0, l.jsx)(u.A, { id: "composer.atMentionList.noResults", defaultMessage: "No results" })),
            (d[4] = A),
            (d[5] = a))
          : (a = d[5]),
        d[6] !== Q || d[7] !== T
          ? ((r = (e) => {
              T(null == e ? null : () => Q(e.key))
            }),
            (d[6] = Q),
            (d[7] = T),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== Q || d[10] !== F || d[11] !== C || d[12] !== T
          ? ((s = (e) => {
              let t = F.get(e.key)
              null != t && (T(() => Q(e.key)), C(t))
            }),
            (d[9] = Q),
            (d[10] = F),
            (d[11] = C),
            (d[12] = T),
            (d[13] = s))
          : (s = d[13]),
        d[14] !== y || d[15] !== v || d[16] !== I || d[17] !== M || d[18] !== _ || d[19] !== L)
      ) {
        let e
        ;(d[21] !== y || d[22] !== v || d[23] !== I || d[24] !== M || d[25] !== _
          ? ((e = (e) => ({
              ref: e.ref,
              footer: e.id === v ? y : void 0,
              emptyState:
                null == e.emptyState || ((null != I || null != _) && e.isLoading)
                  ? null
                  : (0, l.jsx)(u.A, { ...e.emptyState }),
              id: e.id,
              isError: e.isError,
              isLoading: e.isLoading,
              items: e.items.map((e) => ({
                ariaLabel: e.ariaLabel,
                content: (0, l.jsx)(w, { entry: e, iconSize: M }),
                placeholder: (0, l.jsxs)(l.Fragment, {
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
              title: "string" == typeof e.title ? e.title : (0, l.jsx)(u.A, { ...e.title, values: e.titleValues }),
            })),
            (d[21] = y),
            (d[22] = v),
            (d[23] = I),
            (d[24] = M),
            (d[25] = _),
            (d[26] = e))
          : (e = d[26]),
          (o = L.map(e)),
          (d[14] = y),
          (d[15] = v),
          (d[16] = I),
          (d[17] = M),
          (d[18] = _),
          (d[19] = L),
          (d[20] = o))
      } else o = d[20]
      return (
        d[27] !== H ||
        d[28] !== p ||
        d[29] !== h ||
        d[30] !== g ||
        d[31] !== f ||
        d[32] !== K ||
        d[33] !== I ||
        d[34] !== z ||
        d[35] !== W ||
        d[36] !== U ||
        d[37] !== j ||
        d[38] !== _ ||
        d[39] !== P ||
        d[40] !== $ ||
        d[41] !== m ||
        d[42] !== D ||
        d[43] !== V ||
        d[44] !== a ||
        d[45] !== r ||
        d[46] !== s ||
        d[47] !== o ||
        d[48] !== B
          ? ((c = (0, l.jsx)(S.d, {
              className: p,
              preserveHighlightOnItemsChange: m,
              closeOnNoResults: h,
              containerRef: g,
              chromeVariant: H,
              density: f,
              fixedSectionHeaders: K,
              header: I,
              loadingIcons: _,
              showHeaderDividerOnScroll: B,
              footer: V,
              isActive: z,
              isHomeMenu: W,
              keyboardEventTarget: U,
              keyboardVariant: j,
              noResults: a,
              onHighlight: r,
              onRequestClose: P,
              placement: $,
              onSelect: s,
              query: D,
              sections: o,
            })),
            (d[27] = H),
            (d[28] = p),
            (d[29] = h),
            (d[30] = g),
            (d[31] = f),
            (d[32] = K),
            (d[33] = I),
            (d[34] = z),
            (d[35] = W),
            (d[36] = U),
            (d[37] = j),
            (d[38] = _),
            (d[39] = P),
            (d[40] = $),
            (d[41] = m),
            (d[42] = D),
            (d[43] = V),
            (d[44] = a),
            (d[45] = r),
            (d[46] = s),
            (d[47] = o),
            (d[48] = B),
            (d[49] = c))
          : (c = d[49]),
        c
      )
    }
    function k(e) {
      return e.items.map(x)
    }
    function x(e) {
      return [e.key, e]
    }
    function w(e) {
      let t,
        n,
        a,
        r,
        s,
        o = (0, i.c)(22),
        { entry: u, iconSize: c } = e,
        d = 20 === c ? "size-5 shrink-0" : "icon-xs shrink-0"
      o[0] !== u.icon || o[1] !== u.iconElement || o[2] !== d
        ? ((t = u.iconElement ?? (u.icon ? (0, l.jsx)(I.b5, { icon: u.icon, legacyClassName: d }) : null)),
          (o[0] = u.icon),
          (o[1] = u.iconElement),
          (o[2] = d),
          (o[3] = t))
        : (t = o[3])
      let m = t
      return (
        o[4] !== u.iconImage || o[5] !== m || o[6] !== d
          ? ((n = u.iconImage?.src
              ? (0, l.jsx)(
                  y.R,
                  {
                    className: (0, f.A)("rounded-2xs", d),
                    alt: "",
                    src: u.iconImage.src,
                    monochrome: u.iconImage.monochrome,
                    fallback: (0, l.jsx)(l.Fragment, { children: m }),
                  },
                  u.iconImage.src,
                )
              : m),
            (o[4] = u.iconImage),
            (o[5] = m),
            (o[6] = d),
            (o[7] = n))
          : (n = o[7]),
        o[8] !== u.trailingContent || o[9] !== u.trailingDetail
          ? ((a =
              u.trailingContent ??
              (null != u.trailingDetail
                ? (0, l.jsx)("span", {
                    className:
                      "max-w-1/2 min-w-0 shrink-0 truncate text-end text-sm text-codex-description select-none",
                    children: u.trailingDetail,
                  })
                : null)),
            (o[8] = u.trailingContent),
            (o[9] = u.trailingDetail),
            (o[10] = a))
          : (a = o[10]),
        o[11] !== u.allowLabelAndDetailToShrink ||
        o[12] !== u.detail ||
        o[13] !== u.detailElement ||
        o[14] !== u.detailSuffix ||
        o[15] !== u.label ||
        o[16] !== u.labelElement
          ? ((r =
              u.allowLabelAndDetailToShrink && null != u.detail
                ? (0, l.jsxs)("span", {
                    className: "flex min-w-0 shrink items-center gap-1",
                    children: [
                      (0, l.jsxs)("span", {
                        className: "flex min-w-0 shrink items-center gap-menu-row-content",
                        children: [
                          (0, l.jsx)("span", {
                            className: "min-w-0 shrink truncate",
                            children: u.labelElement ?? u.label,
                          }),
                          (0, l.jsx)("span", {
                            className: "min-w-0 shrink truncate text-sm text-codex-description",
                            children: u.detailElement ?? u.detail,
                          }),
                        ],
                      }),
                      null == u.detailSuffix
                        ? null
                        : (0, l.jsx)("span", {
                            className: "shrink-0 text-sm text-codex-description",
                            children: u.detailSuffix,
                          }),
                    ],
                  })
                : (0, l.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-menu-row-content",
                    children: [
                      (0, l.jsx)("span", {
                        className: (0, f.A)("min-w-0 truncate", null != u.detail && "shrink-0"),
                        children: u.labelElement ?? u.label,
                      }),
                      null == u.detail
                        ? null
                        : (0, l.jsx)("span", {
                            className: "min-w-0 flex-1 truncate text-sm text-codex-description",
                            children: u.detailElement ?? u.detail,
                          }),
                    ],
                  })),
            (o[11] = u.allowLabelAndDetailToShrink),
            (o[12] = u.detail),
            (o[13] = u.detailElement),
            (o[14] = u.detailSuffix),
            (o[15] = u.label),
            (o[16] = u.labelElement),
            (o[17] = r))
          : (r = o[17]),
        o[18] !== n || o[19] !== a || o[20] !== r
          ? ((s = (0, l.jsx)(v.s, { leftIcon: n, trailingContent: a, children: r })),
            (o[18] = n),
            (o[19] = a),
            (o[20] = r),
            (o[21] = s))
          : (s = o[21]),
        s
      )
    }
    var _ = n("bVeK"),
      A = n("Wf1j"),
      L = n("EShr")
    function T(e) {
      let t,
        n,
        a,
        r,
        s,
        c,
        d,
        m,
        p,
        h,
        g,
        f = (0, i.c)(25),
        { keyboardEventTarget: y, onSelect: v, peopleEnabled: I, selectedKey: b } = e,
        S = (0, A.A)(),
        M = (0, o.useRef)(null)
      ;(f[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { key: "all", name: (0, l.jsx)(u.A, { id: "composer.atMentionTabs.all", defaultMessage: "All" }) }),
          (f[0] = t))
        : (t = f[0]),
        f[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = {
              key: "people",
              name: (0, l.jsx)(u.A, { id: "composer.atMentionTabs.people", defaultMessage: "People" }),
            }),
            (f[1] = n))
          : (n = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = {
              key: "files",
              name: (0, l.jsx)(u.A, { id: "composer.atMentionTabs.files", defaultMessage: "Files" }),
            }),
            (f[2] = a))
          : (a = f[2]),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = [
              t,
              n,
              a,
              { key: "chats", name: (0, l.jsx)(u.A, { id: "composer.atMentionTabs.chats", defaultMessage: "Chats" }) },
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
      let k = s
      f[6] !== y || f[7] !== v || f[8] !== b || f[9] !== k
        ? ((c = (e) => {
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
              n = null != M.current && "rtl" === t.getComputedStyle(M.current).direction,
              l = e.key === (n ? "ArrowLeft" : "ArrowRight"),
              i = k.findIndex((e) => {
                let { key: t } = e
                return t === b
              })
            v(k[(i + (l ? 1 : -1) + k.length) % k.length].key)
          }),
          (f[6] = y),
          (f[7] = v),
          (f[8] = b),
          (f[9] = k),
          (f[10] = c))
        : (c = f[10])
      let x = (0, o.useEffectEvent)(c)
      return (
        f[11] !== x || f[12] !== y
          ? ((d = () => {
              let e = y ?? window
              return (e.addEventListener("keydown", x, !0), () => e.removeEventListener("keydown", x, !0))
            }),
            (f[11] = x),
            (f[12] = y),
            (f[13] = d))
          : (d = f[13]),
        f[14] !== y ? ((m = [y]), (f[14] = y), (f[15] = m)) : (m = f[15]),
        (0, o.useEffect)(d, m),
        f[16] !== S
          ? ((p = S.formatMessage({ id: "composer.atMentionTabs.label", defaultMessage: "Mention categories" })),
            (f[16] = S),
            (f[17] = p))
          : (p = f[17]),
        f[18] !== k ? ((h = k.map(C)), (f[18] = k), (f[19] = h)) : (h = f[19]),
        f[20] !== v || f[21] !== b || f[22] !== h || f[23] !== p
          ? ((g = (0, l.jsx)("div", {
              ref: M,
              className: "p-1 select-none",
              role: "presentation",
              onMouseDown: P,
              children: (0, l.jsx)(L.T, { ariaLabel: p, onSelect: v, options: h, selectedId: b, variant: "filter" }),
            })),
            (f[20] = v),
            (f[21] = b),
            (f[22] = h),
            (f[23] = p),
            (f[24] = g))
          : (g = f[24]),
        g
      )
    }
    function C(e) {
      let { key: t, name: n } = e
      return { id: t, label: n }
    }
    function P(e) {
      return e.preventDefault()
    }
    var E = n("Qgfj")
    function R(e) {
      let t,
        n,
        a,
        r,
        s,
        o,
        u,
        c,
        d,
        m,
        p,
        h,
        f,
        y,
        v,
        I,
        b,
        S,
        k,
        x,
        w,
        _ = (0, i.c)(57)
      ;(_[0] !== e
        ? (({
            leadingItems: t,
            prioritizeLeadingItems: r,
            query: s,
            sections: o,
            source: c,
            selectedCategory: u,
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
          (_[7] = u),
          (_[8] = c))
        : ((t = _[1]), (n = _[2]), (a = _[3]), (r = _[4]), (s = _[5]), (o = _[6]), (u = _[7]), (c = _[8])),
        _[9] !== o ? ((d = o.some(z)), (_[9] = o), (_[10] = d)) : (d = _[10]))
      let A = d,
        L = null == c,
        C = L && ("people" !== u || A) ? u : "all"
      if (
        _[11] !== C ||
        _[12] !== t ||
        _[13] !== n ||
        _[14] !== a ||
        _[15] !== A ||
        _[16] !== r ||
        _[17] !== s ||
        _[18] !== o ||
        _[19] !== L ||
        _[20] !== c
      ) {
        let e
        _[32] !== C || _[33] !== o
          ? ((e =
              "all" === C
                ? o
                : o.filter((e) => {
                    switch (C) {
                      case "chats":
                        return ["threads", "chatgpt-conversations"].includes(e.id)
                      case "files":
                        return ["pages", "files"].includes(e.id)
                      default:
                        return e.id === C
                    }
                  })),
            (_[32] = C),
            (_[33] = o),
            (_[34] = e))
          : (e = _[34])
        let i = (0, g._d)(e, c),
          u = i.filter(j).map(U),
          d =
            "all" === C && null == c
              ? [
                  ...(0, g.Zg)([], s, t, r, "page").filter(O),
                  ...(function (e, t) {
                    let n = /\S\s+\S/u.test(t),
                      l = new Map()
                    for (let t of e) {
                      let e = t.id
                      ;(("pages" === e || t.titleValues?.scope === "Library") && (e = "files"),
                        ("threads" === e || "chatgpt-conversations" === e) && (e = "chats"))
                      let n = l.get(e)
                      null == n ? l.set(e, [t]) : n.push(t)
                    }
                    return Array.from(l, ([e, l]) => {
                      let i = (0, g.Zg)(
                          n && "people" !== e ? l.map((e) => ({ ...e, queryMatchMode: void 0 })) : l,
                          t,
                          [],
                          !1,
                          "page",
                          8,
                        ),
                        a = {
                          ...l[0],
                          id: e,
                          title: l[0].title,
                          showTitle: !0,
                          items: i.flatMap((e) => e.items),
                          isLoading: i.some((e) => e.isLoading),
                          isError: i.some((e) => e.isError),
                          emptyState: i.find((e) => null != e.emptyState)?.emptyState ?? null,
                        }
                      return (
                        "files" === e
                          ? (a.title = (0, E.zR)({ id: "pages.mentions.filesSection", defaultMessage: "Files" }))
                          : "chats" === e &&
                            (a.title = (0, E.zR)({ id: "pages.mentions.chatsSection", defaultMessage: "Chats" })),
                        a
                      )
                    })
                  })(i, s),
                ]
              : (0, g.Zg)(
                  i,
                  s,
                  "all" !== C || (c?.kind === "at-mention-category" && "spaces" === c.category) ? [] : t,
                  r,
                  "page",
                  "all" !== C || c?.kind === "at-mention-category" ? 20 : void 0,
                )
        ;((m = M),
          _[35] !== C || _[36] !== s || _[37] !== c
            ? ((f = JSON.stringify([s, C, c])), (_[35] = C), (_[36] = s), (_[37] = c), (_[38] = f))
            : (f = _[38]),
          (y = n),
          (v = "user"),
          (I = i.some(q) ? n.footer : void 0),
          (b = "all" === C && null == c ? n.footerSectionId : void 0),
          (S = 0 === u.length ? void 0 : Array.from({ length: 3 }, (e, t) => u[t % u.length])),
          _[39] !== C || _[40] !== n || _[41] !== a || _[42] !== A || _[43] !== L
            ? ((k = L
                ? (0, l.jsx)(T, {
                    keyboardEventTarget: n.keyboardEventTarget,
                    onSelect: a,
                    peopleEnabled: A,
                    selectedKey: C,
                  })
                : null),
              (_[39] = C),
              (_[40] = n),
              (_[41] = a),
              (_[42] = A),
              (_[43] = L),
              (_[44] = k))
            : (k = _[44]),
          (x = "all" === C ? n.onRequestClose : void 0),
          (p = s),
          (h = "all" === C ? d : d.map(N)),
          (_[11] = C),
          (_[12] = t),
          (_[13] = n),
          (_[14] = a),
          (_[15] = A),
          (_[16] = r),
          (_[17] = s),
          (_[18] = o),
          (_[19] = L),
          (_[20] = c),
          (_[21] = m),
          (_[22] = p),
          (_[23] = h),
          (_[24] = f),
          (_[25] = y),
          (_[26] = v),
          (_[27] = I),
          (_[28] = b),
          (_[29] = S),
          (_[30] = k),
          (_[31] = x))
      } else
        ((m = _[21]),
          (p = _[22]),
          (h = _[23]),
          (f = _[24]),
          (y = _[25]),
          (v = _[26]),
          (I = _[27]),
          (b = _[28]),
          (S = _[29]),
          (k = _[30]),
          (x = _[31]))
      return (
        _[45] !== m ||
        _[46] !== p ||
        _[47] !== h ||
        _[48] !== f ||
        _[49] !== y ||
        _[50] !== v ||
        _[51] !== I ||
        _[52] !== b ||
        _[53] !== S ||
        _[54] !== k ||
        _[55] !== x
          ? ((w = (0, l.jsx)(
              m,
              {
                ...y,
                preserveHighlightOnItemsChange: v,
                footer: I,
                footerSectionId: b,
                loadingIcons: S,
                header: k,
                onRequestClose: x,
                query: p,
                sections: h,
              },
              f,
            )),
            (_[45] = m),
            (_[46] = p),
            (_[47] = h),
            (_[48] = f),
            (_[49] = y),
            (_[50] = v),
            (_[51] = I),
            (_[52] = b),
            (_[53] = S),
            (_[54] = k),
            (_[55] = x),
            (_[56] = w))
          : (w = _[56]),
        w
      )
    }
    function N(e) {
      return { ...e, showTitle: !1 }
    }
    function q(e) {
      return "people" === e.id
    }
    function O(e) {
      return e.items.length > 0
    }
    function U(e) {
      switch (e.id) {
        case "people":
          return (0, l.jsx)(_.ZDC, {}, e.id)
        case "spaces":
          return (0, l.jsx)(_.i2, {}, e.id)
        case "pages":
          return (0, l.jsx)(_.oQS, {}, e.id)
        case "files":
          return (0, l.jsx)(_.Z1A, {}, e.id)
        case "threads":
        case "chatgpt-conversations":
          return (0, l.jsx)(_.OHc, {}, e.id)
        default:
          return (0, l.jsx)(_.uxM, {}, e.id)
      }
    }
    function j(e) {
      return e.isLoading
    }
    function z(e) {
      return "people" === e.id
    }
    var $ = n("OWtl"),
      D = n("WFY2"),
      H = n("GEsy"),
      K = n("xAmH"),
      W = n("KMx9")
    function F(e) {
      let t,
        n,
        a,
        r,
        s,
        o,
        u = (0, i.c)(57),
        {
          additionalSections: c,
          backgroundAgents: d,
          className: m,
          chromeVariant: h,
          closeOnNoResults: g,
          fixedSectionHeaders: f,
          footer: y,
          footerSectionId: v,
          excludedAgentConversationIds: I,
          excludedThreadReferences: b,
          isPersonalDot: S,
          getLocalConversationId: M,
          hostId: k,
          isHomeMenu: x,
          keyboardEventTarget: w,
          keyboardVariant: _,
          leadingItems: A,
          prioritizeLeadingItems: L,
          pluginHostId: T,
          onAddContext: C,
          onMentionInserted: P,
          onRequestClose: E,
          onUpdateSelectedMention: R,
          pageCategory: N,
          placement: q,
          query: O,
          rankingContext: U,
          fileSearchRootPaths: j,
          skillRoots: z,
          source: $,
          threadSearchRoots: D,
        } = e
      u[0] !== c ? ((t = void 0 === c ? [] : c), (u[0] = c), (u[1] = t)) : (t = u[1])
      let H = t
      u[2] !== d ? ((n = void 0 === d ? [] : d), (u[2] = d), (u[3] = n)) : (n = u[3])
      let K = n,
        W = void 0 === h ? "default" : h,
        F = void 0 !== f && f
      u[4] !== I ? ((a = void 0 === I ? [] : I), (u[4] = I), (u[5] = a)) : (a = u[5])
      let V = a
      u[6] !== b ? ((r = void 0 === b ? [] : b), (u[6] = b), (u[7] = r)) : (r = u[7])
      let G = r,
        J = void 0 !== x && x
      u[8] !== A ? ((s = void 0 === A ? [] : A), (u[8] = A), (u[9] = s)) : (s = u[9])
      let Z = s,
        Y = void 0 !== L && L,
        X = void 0 === q ? "bottom" : q
      if ((0, p.Lo)($)) {
        let e
        return (
          u[10] !== W ||
          u[11] !== m ||
          u[12] !== g ||
          u[13] !== F ||
          u[14] !== k ||
          u[15] !== J ||
          u[16] !== w ||
          u[17] !== _ ||
          u[18] !== C ||
          u[19] !== E ||
          u[20] !== R ||
          u[21] !== X ||
          u[22] !== O ||
          u[23] !== $
            ? ((e = (0, l.jsx)(B, {
                className: m,
                chromeVariant: W,
                closeOnNoResults: g,
                fixedSectionHeaders: F,
                hostId: k,
                isHomeMenu: J,
                keyboardEventTarget: w,
                keyboardVariant: _,
                onAddContext: C,
                onRequestClose: E,
                onUpdateSelectedMention: R,
                placement: X,
                query: O,
                source: $,
              })),
              (u[10] = W),
              (u[11] = m),
              (u[12] = g),
              (u[13] = F),
              (u[14] = k),
              (u[15] = J),
              (u[16] = w),
              (u[17] = _),
              (u[18] = C),
              (u[19] = E),
              (u[20] = R),
              (u[21] = X),
              (u[22] = O),
              (u[23] = $),
              (u[24] = e))
            : (e = u[24]),
          e
        )
      }
      return (
        u[25] !== H ||
        u[26] !== K ||
        u[27] !== W ||
        u[28] !== m ||
        u[29] !== g ||
        u[30] !== V ||
        u[31] !== G ||
        u[32] !== j ||
        u[33] !== F ||
        u[34] !== y ||
        u[35] !== v ||
        u[36] !== M ||
        u[37] !== k ||
        u[38] !== J ||
        u[39] !== S ||
        u[40] !== w ||
        u[41] !== _ ||
        u[42] !== Z ||
        u[43] !== C ||
        u[44] !== P ||
        u[45] !== E ||
        u[46] !== R ||
        u[47] !== N ||
        u[48] !== X ||
        u[49] !== T ||
        u[50] !== Y ||
        u[51] !== O ||
        u[52] !== U ||
        u[53] !== z ||
        u[54] !== $ ||
        u[55] !== D
          ? ((o = (0, l.jsx)(Q, {
              additionalSections: H,
              backgroundAgents: K,
              className: m,
              chromeVariant: W,
              closeOnNoResults: g,
              fixedSectionHeaders: F,
              footer: y,
              footerSectionId: v,
              excludedAgentConversationIds: V,
              excludedThreadReferences: G,
              isPersonalDot: S,
              getLocalConversationId: M,
              hostId: k,
              isHomeMenu: J,
              keyboardEventTarget: w,
              keyboardVariant: _,
              leadingItems: Z,
              prioritizeLeadingItems: Y,
              pluginHostId: T,
              onAddContext: C,
              onMentionInserted: P,
              onRequestClose: E,
              onUpdateSelectedMention: R,
              pageCategory: N,
              placement: X,
              query: O,
              rankingContext: U,
              fileSearchRootPaths: j,
              skillRoots: z,
              source: $,
              threadSearchRoots: D,
            })),
            (u[25] = H),
            (u[26] = K),
            (u[27] = W),
            (u[28] = m),
            (u[29] = g),
            (u[30] = V),
            (u[31] = G),
            (u[32] = j),
            (u[33] = F),
            (u[34] = y),
            (u[35] = v),
            (u[36] = M),
            (u[37] = k),
            (u[38] = J),
            (u[39] = S),
            (u[40] = w),
            (u[41] = _),
            (u[42] = Z),
            (u[43] = C),
            (u[44] = P),
            (u[45] = E),
            (u[46] = R),
            (u[47] = N),
            (u[48] = X),
            (u[49] = T),
            (u[50] = Y),
            (u[51] = O),
            (u[52] = U),
            (u[53] = z),
            (u[54] = $),
            (u[55] = D),
            (u[56] = o))
          : (o = u[56]),
        o
      )
    }
    function Q(e) {
      let t,
        n,
        a,
        r,
        s,
        u,
        c,
        d,
        m,
        p,
        h,
        f,
        y,
        v,
        I,
        b,
        S,
        k,
        x,
        w,
        _,
        A,
        L,
        T,
        C,
        P,
        E,
        N,
        q = (0, i.c)(63)
      q[0] !== e
        ? (({
            additionalSections: t,
            backgroundAgents: a,
            excludedAgentConversationIds: r,
            excludedThreadReferences: s,
            isPersonalDot: m,
            getLocalConversationId: c,
            hostId: d,
            onMentionInserted: h,
            leadingItems: p,
            pageCategory: f,
            prioritizeLeadingItems: v,
            pluginHostId: y,
            query: I,
            rankingContext: b,
            fileSearchRootPaths: u,
            skillRoots: S,
            source: k,
            threadSearchRoots: x,
            ...n
          } = e),
          (q[0] = e),
          (q[1] = t),
          (q[2] = n),
          (q[3] = a),
          (q[4] = r),
          (q[5] = s),
          (q[6] = u),
          (q[7] = c),
          (q[8] = d),
          (q[9] = m),
          (q[10] = p),
          (q[11] = h),
          (q[12] = f),
          (q[13] = y),
          (q[14] = v),
          (q[15] = I),
          (q[16] = b),
          (q[17] = S),
          (q[18] = k),
          (q[19] = x))
        : ((t = q[1]),
          (n = q[2]),
          (a = q[3]),
          (r = q[4]),
          (s = q[5]),
          (u = q[6]),
          (c = q[7]),
          (d = q[8]),
          (m = q[9]),
          (p = q[10]),
          (h = q[11]),
          (f = q[12]),
          (y = q[13]),
          (v = q[14]),
          (I = q[15]),
          (b = q[16]),
          (S = q[17]),
          (k = q[18]),
          (x = q[19]))
      let [O, U] = (0, o.useState)("all"),
        j = f?.selected ?? O
      k?.kind === "at-mention-category"
        ? (w = k.category)
        : "page" === b && null == k && (w = "files" === j ? "pages" : j)
      let z = "page" === b
      q[20] !== s || q[21] !== d || q[22] !== I || q[23] !== z || q[24] !== x
        ? ((_ = { excludedThreadReferences: s, hostId: d, query: I, roots: x, searchTitlesOnly: z }),
          (q[20] = s),
          (q[21] = d),
          (q[22] = I),
          (q[23] = z),
          (q[24] = x),
          (q[25] = _))
        : (_ = q[25])
      let $ = (0, W.q)(_)
      q[26] !== a ||
      q[27] !== r ||
      q[28] !== w ||
      q[29] !== u ||
      q[30] !== c ||
      q[31] !== d ||
      q[32] !== m ||
      q[33] !== h ||
      q[34] !== y ||
      q[35] !== I ||
      q[36] !== b ||
      q[37] !== S ||
      q[38] !== $
        ? ((A = {
            expandedCategory: w,
            backgroundAgents: a,
            excludedAgentConversationIds: r,
            isPersonalDot: m,
            getLocalConversationId: c,
            hostId: d,
            onMentionInserted: h,
            pluginHostId: y,
            query: I,
            rankingContext: b,
            roots: u,
            skillRoots: S,
            threadSource: $,
          }),
          (q[26] = a),
          (q[27] = r),
          (q[28] = w),
          (q[29] = u),
          (q[30] = c),
          (q[31] = d),
          (q[32] = m),
          (q[33] = h),
          (q[34] = y),
          (q[35] = I),
          (q[36] = b),
          (q[37] = S),
          (q[38] = $),
          (q[39] = A))
        : (A = q[39])
      let { sections: D } = (0, K.jh)(A)
      if (
        q[40] !== t ||
        q[41] !== n ||
        q[42] !== p ||
        q[43] !== f?.onSelect ||
        q[44] !== v ||
        q[45] !== I ||
        q[46] !== b ||
        q[47] !== D ||
        q[48] !== j ||
        q[49] !== k
      ) {
        E = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            i = [...t, ...D]
          if ("page" === b) {
            E = (0, l.jsx)(R, {
              ...n,
              selectedCategory: j,
              onSelectCategory: f?.onSelect ?? U,
              leadingItems: p,
              prioritizeLeadingItems: v,
              query: I,
              sections: i,
              source: k,
            })
            break e
          }
          ;((L = M),
            (T = n),
            (C = I),
            q[55] !== p || q[56] !== k
              ? ((e = k?.kind === "at-mention-category" && "spaces" === k.category ? [] : p),
                (q[55] = p),
                (q[56] = k),
                (q[57] = e))
              : (e = q[57]),
            (P = (0, g.Zg)((0, g._d)(i, k), I, e, v, b, k?.kind === "at-mention-category" ? 20 : void 0)))
        }
        ;((q[40] = t),
          (q[41] = n),
          (q[42] = p),
          (q[43] = f?.onSelect),
          (q[44] = v),
          (q[45] = I),
          (q[46] = b),
          (q[47] = D),
          (q[48] = j),
          (q[49] = k),
          (q[50] = L),
          (q[51] = T),
          (q[52] = C),
          (q[53] = P),
          (q[54] = E))
      } else ((L = q[50]), (T = q[51]), (C = q[52]), (P = q[53]), (E = q[54]))
      return E !== Symbol.for("react.early_return_sentinel")
        ? E
        : (q[58] !== L || q[59] !== T || q[60] !== C || q[61] !== P
            ? ((N = (0, l.jsx)(L, { ...T, query: C, sections: P })),
              (q[58] = L),
              (q[59] = T),
              (q[60] = C),
              (q[61] = P),
              (q[62] = N))
            : (N = q[62]),
          N)
    }
    function B(e) {
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
        k,
        x = (0, i.c)(29)
      x[0] !== e
        ? (({ hostId: n, query: a, source: g, servers: o, ...t } = e),
          (x[0] = e),
          (x[1] = t),
          (x[2] = n),
          (x[3] = a),
          (x[4] = o),
          (x[5] = g))
        : ((t = x[1]), (n = x[2]), (a = x[3]), (o = x[4]), (g = x[5]))
      let w = (0, s.gh)($.u),
        _ = null == o
      x[6] !== _ ? ((f = { enabled: _ }), (x[6] = _), (x[7] = f)) : (f = x[7])
      let A = (0, s._U)(h.iS, n, f)
      ;(x[8] !== g.mentionProviders || x[9] !== g.mentionSearchTool || x[10] !== g.server
        ? ((y = (e) => {
            let { mentionSearchTool: t, server: n } = e
            return null == g.mentionProviders
              ? t === g.mentionSearchTool && n === g.server
              : g.mentionProviders.some((e) => e.mentionSearchTool === t && e.server === n)
          }),
          (x[8] = g.mentionProviders),
          (x[9] = g.mentionSearchTool),
          (x[10] = g.server),
          (x[11] = y))
        : (y = x[11]),
        x[12] !== n || x[13] !== w
          ? ((v = (e) => ({ ...e, identity: (0, d.Aj)(w, { ...e, hostId: n }) })),
            (x[12] = n),
            (x[13] = w),
            (x[14] = v))
          : (v = x[14]))
      let L = r()((o ?? A).filter(y), G).map(v),
        T = (0, s.Ul)(c.$7) && "codex_apps" === g.server && "Library" === g.title,
        C = (0, H.o)(T ? a : "", 300),
        P = T ? C : a,
        E = L.length > 0 && (!T || (a.trim().length > 0 && P.trim().length > 0))
      x[15] !== E ? ((I = { enabled: E }), (x[15] = E), (x[16] = I)) : (I = x[16])
      let R = (0, s._U)(m.Yb, { hostId: n, query: P, servers: L }, I),
        N = (0, p.e6)({
          isLoading: P !== a || R.isLoading,
          mentionSource: g,
          query: a,
          results: P === a ? R.data : void 0,
          servers: L,
        }),
        q = a.trim().length > 0 || N.some(V)
      return (
        x[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, l.jsx)(u.A, {
              id: "composer.atMentionList.noResourceResults",
              defaultMessage: "No results found",
            })),
            (x[17] = b))
          : (b = x[17]),
        x[18] !== t || x[19] !== n || x[20] !== g.server
          ? ((S = (e) => {
              ;(D.v.info("Selected app mention", { safe: {}, sensitive: { hostId: n, server: g.server } }),
                t.onAddContext(e))
            }),
            (x[18] = t),
            (x[19] = n),
            (x[20] = g.server),
            (x[21] = S))
          : (S = x[21]),
        x[22] !== M || x[23] !== t || x[24] !== a || x[25] !== N || x[26] !== S || x[27] !== q
          ? ((k = (0, l.jsx)(M, {
              ...t,
              density: "compact",
              isActive: q,
              noResults: b,
              onAddContext: S,
              query: a,
              sections: N,
            })),
            (x[22] = M),
            (x[23] = t),
            (x[24] = a),
            (x[25] = N),
            (x[26] = S),
            (x[27] = q),
            (x[28] = k))
          : (k = x[28]),
        k
      )
    }
    function V(e) {
      return e.items.length > 0
    }
    function G(e) {
      let { server: t, mentionSearchTool: n } = e
      return JSON.stringify([t, n])
    }
  },
  nRNm(e, t, n) {
    var l = n("ABep"),
      i = n("QosV"),
      a = n("zd8w"),
      r = n("iiZm")
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            n,
            s,
            o,
            u,
            c = (0, i.c)(21),
            { text: d, query: m, shouldAdjustStart: p, fragments: h } = e,
            g = void 0 !== p && p
          c[0] !== m || c[1] !== h || c[2] !== d
            ? ((t = void 0 === h ? (0, r.d7)(d, m) : h), (c[0] = m), (c[1] = h), (c[2] = d), (c[3] = t))
            : (t = c[3])
          let f = t
          if (null == f || 0 === f.length) {
            let e
            return (
              c[4] !== d ? ((e = (0, l.jsx)(l.Fragment, { children: d })), (c[4] = d), (c[5] = e)) : (e = c[5]),
              e
            )
          }
          c[6] !== f[0] || c[7] !== g || c[8] !== d
            ? ((n = g ? f[0].startOffset - Array.from(d.slice(0, f[0].startOffset)).slice(-8).join("").length : 0),
              (c[6] = f[0]),
              (c[7] = g),
              (c[8] = d),
              (c[9] = n))
            : (n = c[9])
          let y = n,
            v = y > 0 ? "\u2026" : ""
          return (
            c[10] !== f || c[11] !== d || c[12] !== y
              ? ((s = f.map((e, t) => {
                  let { startOffset: n, endOffset: i } = e
                  return (0, l.jsxs)(
                    a.Fragment,
                    {
                      children: [
                        d.slice(0 === t ? y : f[t - 1].endOffset, n),
                        (0, l.jsx)("span", { className: "text-default", children: d.slice(n, i) }),
                      ],
                    },
                    n,
                  )
                })),
                (c[10] = f),
                (c[11] = d),
                (c[12] = y),
                (c[13] = s))
              : (s = c[13]),
            c[14] !== f || c[15] !== d
              ? ((o = d.slice(f[f.length - 1].endOffset)), (c[14] = f), (c[15] = d), (c[16] = o))
              : (o = c[16]),
            c[17] !== v || c[18] !== s || c[19] !== o
              ? ((u = (0, l.jsxs)("span", { className: "text-codex-description", children: [v, s, o] })),
                (c[17] = v),
                (c[18] = s),
                (c[19] = o),
                (c[20] = u))
              : (u = c[20]),
            u
          )
        },
      },
    )
  },
  VaJ5(e, t, n) {
    var l = n("Qgfj"),
      i = n("iiZm")
    function a(e, t, n, s = 8) {
      let o = t.trim(),
        u = o.toLowerCase(),
        c = (0, i.WE)(o),
        d = [],
        m = 0
      for (let t of e)
        for (let e of t.items) {
          let l = m++,
            i = (function (e, t, n, l) {
              if ("page" === l && "people" === e) return -2
              if ("page" === l && ("pages" === e || "spaces" === e)) return -1
              if (
                ("plugins" === e || "native-apps" === e) &&
                [t.label, ...(t.searchTerms ?? [])].some((e) => e.toLowerCase().startsWith(n))
              ) {
                if ("plugins" === e) return 0
                if ("native-apps" === e) return 1
              }
              return ["chatgpt-conversations", "files", "sites", "threads"].includes(e) ? 3 : 2
            })(t.id, e, u, n)
          if (d.length === s && i > d[s - 1].priority) continue
          let a = "source-ranked" === t.queryMatchMode,
            p = c(e.label),
            h = ("threads" === t.id ? p : 0) || (a ? 1 : r(e, c, p)),
            g = a ? 0 : Math.max(0, ...(e.searchKeywords ?? []).map(c))
          if (!a && o.length > 0 && 0 === h && 0 === g) continue
          let f = { index: l, item: e, priority: i, score: h, keywordScore: g },
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
      let p = d.map(({ item: e }) => e),
        h = e.some((e) => e.isLoading),
        g = e.find((e) => null != e.emptyState)?.emptyState ?? null
      return (
        p.length > 0
          ? (g = null)
          : h && (g = (0, l.zR)({ id: "composer.atMentionList.searching", defaultMessage: "Searching\u2026" })),
        {
          id: "search-results",
          title: (0, l.zR)({ id: "composer.atMentionList.searchResults", defaultMessage: "Results" }),
          items: p,
          emptyState: g,
          isError: e.some((e) => e.isError),
          isLoading: h,
          showTitle: !1,
        }
      )
    }
    function r(e, t, n) {
      let l = n
      for (let n of e.searchTerms ?? []) l = Math.max(l, t(n))
      return l
    }
    n.d(
      t,
      {},
      {
        Zg: function (e, t, n = [], s = !1, o, u = 8) {
          let c = (0, i.WE)(t),
            d =
              0 === t.trim().length
                ? n
                : n.filter((e) => r(e, c, c(e.label)) > 0 || (e.searchKeywords?.some((e) => c(e) > 0) ?? !1)),
            m = d[0]?.group,
            p =
              0 === d.length
                ? e
                : [
                    {
                      id: "context-actions",
                      title:
                        null != m && d.every((e) => e.group === m)
                          ? m
                          : (0, l.zR)({ id: "composer.atMentionList.contextActions", defaultMessage: "Add" }),
                      items: d,
                      emptyState: null,
                      isLoading: !1,
                    },
                    ...e,
                  ]
          if (0 === t.trim().length) {
            if ("page" === o) {
              let e = p.filter((e) => "files" === e.id),
                t = p.filter((e) => "files" !== e.id),
                n = t.findIndex((e) => "plugins" === e.id)
              if (-1 !== n) return (t.splice(n + 1, 0, ...e), t)
            }
            return p
          }
          if (s && d.length > 0) {
            let n = a(e, t, o, u)
            return [{ ...n, emptyState: null, items: [...d, ...n.items].slice(0, u) }]
          }
          return [a(p, t, o, u)]
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
    var l = n("o6hs"),
      i = n("oXug")
    n.d(
      t,
      {},
      {
        E: function ({ server: e, connectorId: t }) {
          return "codex_apps" === e && ((0, i._t)(t) || t === l.hk)
        },
      },
    )
  },
  xAmH(e, t, n) {
    n.d(t, { jh: () => ei, aw: () => ea, Cu: () => er })
    var l = n("QosV"),
      i = n("qmMi"),
      a = n("DBCl"),
      r = n("Qgfj"),
      s = n("HxmM"),
      o = n("BI7S"),
      u = n("T0Rc"),
      c = n("Wf1j"),
      d = n("ChYf"),
      m = n("Kwur"),
      p = n("fHS7"),
      h = n("YWcr"),
      g = n("hJLd"),
      f = n("OWtl"),
      y = n("rvFo"),
      v = n("GEsy"),
      I = n("OtLV"),
      b = n("oU3c"),
      S = n("LCGF"),
      M = n("QmkR")
    let k = { sections: [] }
    function x(e) {
      return { conversationId: e.conversation_id, title: e.title }
    }
    function w(e) {
      return { conversationId: e.id, mapping: e.mapping, title: e.title }
    }
    function _(e) {
      return { conversationId: e.id, mapping: e.mapping, title: e.title }
    }
    function A(e) {
      return e.items
    }
    var L = n("PgCv"),
      T = n("tl2n"),
      C = n("u0X2"),
      P = n("Qm75"),
      E = n("qfej"),
      R = n("Wv1R"),
      N = n("Rw2H"),
      q = n("ueue"),
      O = n("B81s"),
      U = n("Sd8U"),
      j = n("KUdL"),
      z = n.n(j),
      $ = n("zd8w"),
      D = n("iiZm"),
      H = n("yP7T")
    function K(e) {
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
      F = n.n(W),
      Q = n("FGAu"),
      B = n("Lmwk"),
      V = n("FdGo"),
      G = n("GVrb"),
      J = n("e5oX"),
      Z = n("Rxfy"),
      Y = n("Sdx1"),
      X = n("pNUK"),
      ee = n("MQKw"),
      et = n("hbRe"),
      en = n("bPa2"),
      el = n("lp74")
    function ei(e) {
      let t,
        n,
        i = (0, l.c)(12)
      i[0] !== e.query ? ((t = { query: e.query }), (i[0] = e.query), (i[1] = t)) : (t = i[1])
      let a = (0, s.Y)(t),
        r = e.skillRoots ?? e.roots
      return (
        i[2] !== e.excludedPluginId ||
        i[3] !== e.getLocalConversationId ||
        i[4] !== e.hostId ||
        i[5] !== e.isPersonalDot ||
        i[6] !== e.onMentionInserted ||
        i[7] !== e.pluginHostId ||
        i[8] !== e.query ||
        i[9] !== a ||
        i[10] !== r
          ? ((n = {
              isPersonalDot: e.isPersonalDot,
              getLocalConversationId: e.getLocalConversationId,
              excludedPluginId: e.excludedPluginId,
              hostId: e.hostId,
              onMentionInserted: e.onMentionInserted,
              pluginHostId: e.pluginHostId,
              query: e.query,
              roots: r,
              sitesSource: a,
            }),
            (i[2] = e.excludedPluginId),
            (i[3] = e.getLocalConversationId),
            (i[4] = e.hostId),
            (i[5] = e.isPersonalDot),
            (i[6] = e.onMentionInserted),
            (i[7] = e.pluginHostId),
            (i[8] = e.query),
            (i[9] = a),
            (i[10] = r),
            (i[11] = n))
          : (n = i[11]),
        es(e, (0, J.L)(n), null)
      )
    }
    function ea(e) {
      let t,
        n,
        a,
        r,
        s,
        u,
        c = (0, l.c)(22),
        d = (0, i.gh)(U.PR),
        m = e.skillRoots ?? e.roots,
        p = "work" !== e.rankingContext || (e.isTypedAtMention && null == e.expandedCategory) ? e.query : ""
      c[0] !== e.excludedPluginId ||
      c[1] !== e.hostId ||
      c[2] !== e.pluginHostId ||
      c[3] !== e.query ||
      c[4] !== e.rankingContext ||
      c[5] !== m ||
      c[6] !== p
        ? ((t = {
            hostId: e.hostId,
            excludedPluginId: e.excludedPluginId,
            pluginHostId: e.pluginHostId,
            roots: m,
            sitesQuery: e.query,
            pluginQuery: p,
            rankingContext: e.rankingContext,
          }),
          (c[0] = e.excludedPluginId),
          (c[1] = e.hostId),
          (c[2] = e.pluginHostId),
          (c[3] = e.query),
          (c[4] = e.rankingContext),
          (c[5] = m),
          (c[6] = p),
          (c[7] = t))
        : (t = c[7])
      let h = er(t)
      c[8] !== e.query ? ((n = { query: e.query }), (c[8] = e.query), (c[9] = n)) : (n = c[9])
      let g = (0, B.p)(n)
      ;(c[10] !== e.getLocalConversationId || c[11] !== d
        ? ((a = e.getLocalConversationId ?? (() => (0, U.ah)(d))),
          (c[10] = e.getLocalConversationId),
          (c[11] = d),
          (c[12] = a))
        : (a = c[12]),
        c[13] !== d ? ((r = (e) => (0, o.ir)({ scope: d, path: e })), (c[13] = d), (c[14] = r)) : (r = c[14]),
        c[15] !== e || c[16] !== a || c[17] !== r
          ? ((s = { ...e, getLocalConversationId: a, onMentionInserted: r }),
            (c[15] = e),
            (c[16] = a),
            (c[17] = r),
            (c[18] = s))
          : (s = c[18]))
      let f = es(s, h, g)
      return (
        c[19] !== h.mentionablePlugins || c[20] !== f
          ? ((u = { ...f, mentionablePlugins: h.mentionablePlugins }),
            (c[19] = h.mentionablePlugins),
            (c[20] = f),
            (c[21] = u))
          : (u = c[21]),
        u
      )
    }
    function er(e) {
      let t,
        n,
        a,
        r,
        u,
        c = (0, l.c)(18),
        {
          excludedPluginId: d,
          hostId: m,
          pluginHostId: p,
          roots: h,
          sitesQuery: g,
          pluginQuery: f,
          rankingContext: y,
        } = e,
        v = (0, i.gh)(U.PR)
      c[0] !== g ? ((t = { query: g }), (c[0] = g), (c[1] = t)) : (t = c[1])
      let I = (0, s.Y)(t)
      return (
        c[2] !== v
          ? ((n = () => ("chatgpt" === v.value.kind ? v.value.conversationId : null)),
            (a = () => (0, U.ah)(v)),
            (c[2] = v),
            (c[3] = n),
            (c[4] = a))
          : ((n = c[3]), (a = c[4])),
        c[5] !== v ? ((r = (e) => (0, o.ir)({ scope: v, path: e })), (c[5] = v), (c[6] = r)) : (r = c[6]),
        c[7] !== d ||
        c[8] !== m ||
        c[9] !== p ||
        c[10] !== f ||
        c[11] !== y ||
        c[12] !== h ||
        c[13] !== I ||
        c[14] !== n ||
        c[15] !== a ||
        c[16] !== r
          ? ((u = {
              getChatGptConversationId: n,
              getLocalConversationId: a,
              excludedPluginId: d,
              hostId: m,
              onMentionInserted: r,
              pluginHostId: p,
              query: f,
              rankingContext: y,
              roots: h,
              sitesSource: I,
            }),
            (c[7] = d),
            (c[8] = m),
            (c[9] = p),
            (c[10] = f),
            (c[11] = y),
            (c[12] = h),
            (c[13] = I),
            (c[14] = n),
            (c[15] = a),
            (c[16] = r),
            (c[17] = u))
          : (u = c[17]),
        (0, J.L)(u)
      )
    }
    function es(e, t, n) {
      let s,
        o,
        U,
        j,
        W,
        B,
        J,
        ei,
        ea,
        er,
        es,
        em,
        ep,
        eh,
        eg,
        ef,
        ey,
        ev = (0, l.c)(57),
        {
          expandedCategory: eI,
          backgroundAgents: eb,
          excludedAgentConversationIds: eS,
          excludedPluginId: eM,
          getLocalConversationId: ek,
          hostId: ex,
          onMentionInserted: ew,
          roots: e_,
          skillRoots: eA,
          threadSource: eL,
          pluginHostId: eT,
          query: eC,
          rankingContext: eP,
        } = e
      ev[0] !== eb ? ((s = void 0 === eb ? [] : eb), (ev[0] = eb), (ev[1] = s)) : (s = ev[1])
      let eE = s
      ev[2] !== eS ? ((o = void 0 === eS ? [] : eS), (ev[2] = eS), (ev[3] = o)) : (o = ev[3])
      let eR = o,
        eN = void 0 === eL ? null : eL,
        eq = void 0 === eT ? ex : eT,
        eO = (0, i.gh)(f.u),
        eU = (0, L.d)()
      ev[4] !== eC ? ((U = eC.trim()), (ev[4] = eC), (ev[5] = U)) : (U = ev[5])
      let ej = U.length > 0,
        ez = (0, v.o)(eC, 100)
      ev[6] !== ek ? ((j = ek?.() ?? null), (ev[6] = ek), (ev[7] = j)) : (j = ev[7])
      let e$ = ez !== eC
      ev[8] !== ez || ev[9] !== ex || ev[10] !== e_ || ev[11] !== j || ev[12] !== e$
        ? ((W = { conversationId: j, hostId: ex, query: ez, roots: e_, isQueryPending: e$ }),
          (ev[8] = ez),
          (ev[9] = ex),
          (ev[10] = e_),
          (ev[11] = j),
          (ev[12] = e$),
          (ev[13] = W))
        : (W = ev[13])
      let eD = (0, G.C)(W)
      ;(ev[14] !== eP ? ((B = (e) => "page" !== eP || !(0, Q.E)(e)), (ev[14] = eP), (ev[15] = B)) : (B = ev[15]),
        ev[16] !== ex || ev[17] !== eO
          ? ((J = (e) => ({ ...e, identity: (0, C.Aj)(eO, { ...e, hostId: ex }) })),
            (ev[16] = ex),
            (ev[17] = eO),
            (ev[18] = J))
          : (J = ev[18]))
      let eH = (0, i._U)(R.iS, ex).filter(B).map(J),
        eK = (0, i._U)(
          P.iv,
          eq !== a.iwv &&
            eH.some((e) => {
              let { connectorId: n, pluginId: l } = e
              return (
                null == l &&
                null != n &&
                !t.mentionablePlugins.some((e) => {
                  let { canonicalAppId: t, appIds: l } = e
                  return t === n || l?.includes(n)
                })
              )
            })
            ? t.mentionablePlugins
                .filter(ed)
                .map((e) => ({
                  pluginId: e.plugin.id,
                  query: {
                    hostId: eq,
                    marketplacePath: e.marketplacePath,
                    pluginName: (0, q.R9)(e).pluginName,
                    remoteMarketplaceName: e.remoteMarketplaceName ?? null,
                  },
                }))
            : [],
        ),
        eW = (0, i.Ul)(T.$7),
        eF = eH.filter(Q.E),
        eQ = eF[0],
        eB = eW ? eH.find(ec) : void 0,
        eV = (0, v.o)(null == eB ? "" : eC, 300),
        eG = null == eB ? ez : eV,
        eJ = null == eB ? [] : [eB],
        eZ = eJ.length > 0 && eC.trim().length >= 2 && eV.trim().length >= 2
      ev[19] !== eZ ? ((ei = { enabled: eZ }), (ev[19] = eZ), (ev[20] = ei)) : (ei = ev[20])
      let eY = (0, i._U)(P.QJ, { hostId: ex, query: eV, servers: eJ }, ei),
        eX = eF.length > 0 && ej && eG.trim().length > 0
      ev[21] !== eX ? ((ea = { enabled: eX }), (ev[21] = eX), (ev[22] = ea)) : (ea = ev[22])
      let e0 = (0, i._U)(P.QJ, { hostId: ex, query: eG, servers: eF }, ea),
        e1 = (0, E.Zb)({
          pluginAppIds: eK,
          plugins: t.mentionablePlugins,
          sections: t.sections,
          query: eC,
          servers: eH.filter((e) => !eF.includes(e)),
        }),
        e2 =
          ej && null != eQ
            ? (0, E.e6)({
                isLoading: eG !== eC || e0.isLoading,
                mentionSource: {
                  kind: "mcp-extension",
                  mentionSearchTool: eQ.mentionSearchTool,
                  server: eQ.server,
                  title: eQ.title,
                },
                results: eG === eC ? e0.data : void 0,
                servers: eF,
              }).map(eu)
            : [],
        e3 =
          eC.trim().length >= 2 && null != eB
            ? (0, E.e6)({
                isLoading: eV !== eC || eY.isLoading,
                mentionSource: {
                  kind: "mcp-extension",
                  mentionSearchTool: eB.mentionSearchTool,
                  server: eB.server,
                  title: eB.title,
                },
                results: eV === eC ? eY.data : void 0,
                servers: eJ,
              }).map((e) => ({
                ...e,
                items: e.items.slice(0, 5).map((e) => ({ ...e, detail: eB.title })),
                queryMatchMode: "source-ranked",
              }))
            : [],
        e4 = ex === a.iwv ? "local" : ex
      ev[23] !== ew ||
      ev[24] !== t.arePluginsLoading ||
      ev[25] !== t.mentionablePlugins ||
      ev[26] !== t.systemHintsByMentionPath ||
      ev[27] !== eC ||
      ev[28] !== e4
        ? ((er = {
            arePluginsLoading: t.arePluginsLoading,
            onMentionInserted: ew,
            hostId: e4,
            plugins: t.mentionablePlugins,
            query: eC,
            systemHintsByMentionPath: t.systemHintsByMentionPath,
          }),
          (ev[23] = ew),
          (ev[24] = t.arePluginsLoading),
          (ev[25] = t.mentionablePlugins),
          (ev[26] = t.systemHintsByMentionPath),
          (ev[27] = eC),
          (ev[28] = e4),
          (ev[29] = er))
        : (er = ev[29])
      let e5 = (0, V.o)(er)
      ;(ev[30] !== ek ? ((es = ek?.() ?? null), (ev[30] = ek), (ev[31] = es)) : (es = ev[31]),
        ev[32] !== t.mentionablePlugins
          ? ((em = new Set(t.mentionablePlugins.map(eo))), (ev[32] = t.mentionablePlugins), (ev[33] = em))
          : (em = ev[33]),
        ev[34] !== eM ||
        ev[35] !== ex ||
        ev[36] !== t.arePluginsLoading ||
        ev[37] !== eC ||
        ev[38] !== eA ||
        ev[39] !== es ||
        ev[40] !== em
          ? ((ep = {
              excludedPluginId: eM,
              conversationId: es,
              arePluginsLoading: t.arePluginsLoading,
              hostId: ex,
              mentionablePluginNames: em,
              query: eC,
              roots: eA,
            }),
            (ev[34] = eM),
            (ev[35] = ex),
            (ev[36] = t.arePluginsLoading),
            (ev[37] = eC),
            (ev[38] = eA),
            (ev[39] = es),
            (ev[40] = em),
            (ev[41] = ep))
          : (ep = ev[41]))
      let e6 = (function (e) {
          var t, n, i
          let a,
            s,
            o,
            u,
            c,
            d,
            m,
            p = (0, l.c)(22),
            {
              arePluginsLoading: g,
              conversationId: f,
              excludedPluginId: y,
              hostId: v,
              mentionablePluginNames: I,
              query: b,
              roots: S,
            } = e,
            M = b.trim(),
            k = (0, D.WE)(M),
            x = M.length > 0
          p[0] !== f || p[1] !== x
            ? ((a = { enabled: x, conversationId: f }), (p[0] = f), (p[1] = x), (p[2] = a))
            : (a = p[2])
          let { skills: w, hostId: _, isLoading: A } = (0, en.a)(S, v, a)
          p[3] !== x || p[4] !== w ? ((s = x ? w : []), (p[3] = x), (p[4] = w), (p[5] = s)) : (s = p[5])
          let { data: L } = (0, Y.H)(s, _)
          p[6] !== L
            ? ((o = (e) => {
                let t = L?.get(e.path)?.galleryKind,
                  n = t ? (0, Z.c)(t) : null
                return [e.path, n ? (0, Z.uk)(n) : []]
              }),
              (p[6] = L),
              (p[7] = o))
            : (o = p[7])
          let T = new Map(w.map(o))
          if (!x) {
            let e
            return (
              p[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (p[8] = e)) : (e = p[8]),
              e
            )
          }
          p[9] !== g || p[10] !== y || p[11] !== I
            ? ((u = (e) =>
                (null == y || e.pluginId !== y) &&
                (function (e, t, n) {
                  if (!e.enabled) return !1
                  let l = (0, X.F)(e.path)?.pluginId
                  return null == l || (!n && !t.has(l))
                })(e, I, g)),
              (p[9] = g),
              (p[10] = y),
              (p[11] = I),
              (p[12] = u))
            : (u = p[12])
          let C =
              ((t = w.filter(u).filter((e) =>
                (function (e, t, n) {
                  let l = t.trim().toLowerCase()
                  if (0 === l.length) return !0
                  let i = (0, et.nf)(e)
                  return [...(n.get(e.path) ?? []), e.name, i, `@${i}`].some((e) => e.toLowerCase().includes(l))
                })(e, M, T),
              )),
              (n = k),
              (i = T),
              z()(
                t.map((e, t) => {
                  var l, a, r
                  let s
                  return {
                    skill: e,
                    score:
                      ((l = e),
                      (a = n),
                      (r = i),
                      (s = (0, et.nf)(l)),
                      Math.max(...(r.get(l.path) ?? []).map(a), a(l.name), a(s), a(`@${s}`))),
                    index: t,
                  }
                }),
                [(e) => -e.score, (e) => (0, et.nf)(e.skill), (e) => e.index],
              ).map((e) => e.skill)),
            P = A && 0 === C.length
          if (0 === C.length && !P) {
            let e
            return (
              p[13] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (p[13] = e)) : (e = p[13]),
              e
            )
          }
          p[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, r.zR)({ id: "composer.atMentionList.skills", defaultMessage: "Skills" })), (p[14] = c))
            : (c = p[14])
          let E = C.map((e) => {
            let t = L?.get(e.path)?.galleryKind,
              n = t ? (0, Z.c)(t) : null,
              l = n ? (0, Z.eA)(n) : void 0,
              i = (0, h.GZ)(e, l)
            return {
              key: `skill:${i.path}`,
              label: i.displayName,
              detail: (0, ee.a)(e),
              searchTerms: [e.name, `@${i.displayName}`, ...(T.get(e.path) ?? [])],
              icon: (0, el.h)(l),
              type: "mention",
              insertMention: (e) => {
                let { composerController: t, mentionState: n } = e
                t.insertMention(i, n)
              },
            }
          })
          return (
            p[15] !== P
              ? ((d = P
                  ? (0, r.zR)({ id: "composer.atMentionList.skillsLoading", defaultMessage: "Loading skills\u2026" })
                  : null),
                (p[15] = P),
                (p[16] = d))
              : (d = p[16]),
            p[17] !== A || p[18] !== c || p[19] !== E || p[20] !== d
              ? ((m = { sections: [{ id: "skills", title: c, items: E, emptyState: d, isLoading: A }] }),
                (p[17] = A),
                (p[18] = c),
                (p[19] = E),
                (p[20] = d),
                (p[21] = m))
              : (m = p[21]),
            m
          )
        })(ep),
        e7 = "pages" === eI || "spaces" === eI ? eI : void 0,
        e8 = "pages" === eI || "spaces" === eI
      ev[42] !== ez || ev[43] !== eC || ev[44] !== e7 || ev[45] !== e8
        ? ((eh = { category: e7, expanded: e8, query: eC, searchQuery: ez }),
          (ev[42] = ez),
          (ev[43] = eC),
          (ev[44] = e7),
          (ev[45] = e8),
          (ev[46] = eh))
        : (eh = ev[46])
      let e9 = (0, N.w)(eh),
        te = "chats" === eI
      ev[47] !== eC || ev[48] !== te
        ? ((eg = { expanded: te, query: eC }), (ev[47] = eC), (ev[48] = te), (ev[49] = eg))
        : (eg = ev[49])
      let tt = (function (e) {
          let t,
            n,
            a,
            s,
            o,
            L,
            T,
            C,
            P,
            E,
            R = (0, l.c)(31),
            { query: N, expanded: q } = e,
            O = (0, c.A)(),
            U = (0, i.gh)(f.u),
            j = void 0 !== q && q ? 20 : 5
          R[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "chatgpt" }), (R[0] = t)) : (t = R[0])
          let z = (0, i._U)(d.G, t).isCapable
          R[1] !== N ? ((n = N.trim()), (R[1] = N), (R[2] = n)) : (n = R[2])
          let $ = n,
            D = (0, v.o)($, 100),
            H = 0 === $.length ? "" : D,
            K = H !== $
          ;(R[3] !== j || R[4] !== H.length
            ? ((a = (e) =>
                (0 === H.length ? e?.slice(0, j) : e) ??
                (0 === H.length ? (0, M.nm)()?.pages.flatMap(A).slice(0, j).map(_) : void 0)),
              (R[3] = j),
              (R[4] = H.length),
              (R[5] = a))
            : (a = R[5]),
            R[6] !== j || R[7] !== U || R[8] !== H
              ? ((s = async (e) => {
                  let { signal: t } = e
                  return 0 === H.length
                    ? (await (0, p.Mj)(U, { is_archived: !1, limit: j, order: "updated" }, t)).items.map(w)
                    : (
                        await m.Request.safeGet("/conversations/search", {
                          parameters: { query: { cursor: void 0, query: H } },
                          signal: t,
                        })
                      ).items.map(x)
                }),
                (R[6] = j),
                (R[7] = U),
                (R[8] = H),
                (R[9] = s))
              : (s = R[9]))
          let W = 0 === H.length ? j : null
          ;(R[10] !== H || R[11] !== W
            ? ((o = ["chatgpt-conversation-at-mention", H, W]), (R[10] = H), (R[11] = W), (R[12] = o))
            : (o = R[12]),
            R[13] !== z || R[14] !== a || R[15] !== s || R[16] !== o
              ? ((L = {
                  enabled: z,
                  placeholderData: a,
                  queryFn: s,
                  queryKey: o,
                  retryDelay: S.RH,
                  staleTime: y.D.ONE_MINUTE,
                }),
                (R[13] = z),
                (R[14] = a),
                (R[15] = s),
                (R[16] = o),
                (R[17] = L))
              : (L = R[17]))
          let { data: F, isFetching: Q } = (0, u.I)(L)
          if (!z) return k
          R[18] !== F || R[19] !== O
            ? ((T =
                F?.map((e) => {
                  let t = (0, b.bF)(e.title, e.mapping) ?? O.formatMessage(I.D.newChat),
                    n = (0, h.u1)(e.conversationId)
                  return {
                    key: `chatgpt-conversation:${e.conversationId}`,
                    label: t,
                    detail: null,
                    trailingDetail: O.formatMessage({
                      id: "composer.atMentionList.chatGptConversationDetail",
                      defaultMessage: "ChatGPT conversation",
                    }),
                    icon: g.A,
                    type: "mention",
                    insertMention: (l) => {
                      let { composerController: i, mentionState: a } = l
                      i.insertChatGptConversationMention({ conversationId: e.conversationId, path: n, title: t }, a)
                    },
                  }
                }) ?? []),
              (R[18] = F),
              (R[19] = O),
              (R[20] = T))
            : (T = R[20])
          let B = T
          ;(R[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = (0, r.zR)({
                id: "composer.atMentionList.chatGptConversations",
                defaultMessage: "ChatGPT conversations",
              })),
              (R[21] = C))
            : (C = R[21]),
            R[22] !== Q || R[23] !== K || R[24] !== B
              ? ((P =
                  (Q || K) && 0 === B.length
                    ? (0, r.zR)({
                        id: "composer.atMentionList.chatGptConversationsLoading",
                        defaultMessage: "Loading ChatGPT conversations\u2026",
                      })
                    : null),
                (R[22] = Q),
                (R[23] = K),
                (R[24] = B),
                (R[25] = P))
              : (P = R[25]))
          let V = Q || K
          return (
            R[26] !== B || R[27] !== C || R[28] !== P || R[29] !== V
              ? ((E = { sections: [{ id: "chatgpt-conversations", title: C, items: B, emptyState: P, isLoading: V }] }),
                (R[26] = B),
                (R[27] = C),
                (R[28] = P),
                (R[29] = V),
                (R[30] = E))
              : (E = R[30]),
            E
          )
        })(eg),
        { data: tn, isLoading: tl } = (0, O.OB)(e_, eU)
      if (ev[50] !== eE || ev[51] !== eR) {
        let e
        ;(ev[53] !== eR
          ? ((e = (e) => (null == e.agentRole || eR.includes(e.conversationId) ? [] : [e.agentRole])),
            (ev[53] = eR),
            (ev[54] = e))
          : (e = ev[54]),
          (ef = new Set(eE.flatMap(e))),
          (ev[50] = eE),
          (ev[51] = eR),
          (ev[52] = ef))
      } else ef = ev[52]
      let ti = ef,
        ta = tn?.roles.filter((e) => !ti.has(e.roleName)) ?? [],
        tr = (function ({ backgroundAgents: e, excludedConversationIds: t = [], query: n }) {
          var l, i
          if (0 === e.length) return null
          let a = e.filter((e) => !t.includes(e.conversationId)),
            s = n.trim(),
            o = (0, D.WE)(s),
            u =
              0 === s.length
                ? a
                : ((l = a),
                  (i = o),
                  z()(
                    l.map((e, t) => {
                      var n, l
                      return {
                        agent: e,
                        score:
                          ((n = e),
                          Math.max((l = i)(n.displayName), l(`@${n.displayName}`), l(n.agentRole ?? ""), l(K(n)))),
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
                title: (0, r.zR)({ id: "composer.atMentionList.liveAgents", defaultMessage: "Live agents" }),
                items: u.map((e) => ({
                  key: `agent:${e.conversationId}`,
                  label: e.displayName,
                  detail: e.agentRole,
                  searchTerms: [`@${e.displayName}`, e.agentRole ?? "", K(e)],
                  iconElement: (0, $.createElement)(H.B, {
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
        })({ backgroundAgents: eE, excludedConversationIds: eR, query: eC }),
        ts = eU
          ? (function ({ agents: e, query: t }) {
              var n, l
              if (0 === e.length) return null
              let i = t.trim(),
                a = (0, D.WE)(i),
                s =
                  0 === i.length
                    ? e
                    : ((n = e),
                      (l = a),
                      z()(
                        n.map((e, t) => {
                          var n, i
                          return {
                            agent: e,
                            score:
                              ((n = e),
                              Math.max(
                                (i = l)(n.roleName),
                                i(`@${n.roleName}`),
                                i(n.description ?? ""),
                                ...n.nicknameCandidates.map(i),
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
                    title: (0, r.zR)({ id: "composer.atMentionList.customAgents", defaultMessage: "Custom agents" }),
                    items: s.map((e) => ({
                      key: `subagent:${e.roleName}`,
                      label: F()(e.roleName),
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
            })({ agents: ta, query: eC })
          : null,
        to = tr?.sections[0] ?? null,
        tu = ts?.sections[0] ?? null,
        tc = [...(to?.items ?? []), ...(tu?.items ?? [])],
        td =
          0 !== tc.length || tl
            ? {
                id: "agents",
                title: (0, r.zR)({ id: "composer.atMentionList.agents", defaultMessage: "Agents" }),
                items: tc,
                emptyState:
                  0 === tc.length
                    ? (0, r.zR)({ id: "composer.atMentionList.agentsLoading", defaultMessage: "Loading agents\u2026" })
                    : null,
                isLoading: tl,
              }
            : null,
        tm = [
          { sections: e1 },
          { sections: e3 },
          { sections: e2 },
          e5,
          null == td ? null : { sections: [td] },
          t.sitesSource ?? null,
          tt,
          n,
          e6,
          eN,
          null == eN || ej ? eD : null,
          e9,
        ].flatMap((e) => e?.sections ?? []),
        tp = ej
          ? tm
          : tm.map((e) => {
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
      return (ev[55] !== tp ? ((ey = { sections: tp }), (ev[55] = tp), (ev[56] = ey)) : (ey = ev[56]), ey)
    }
    function eo(e) {
      return e.plugin.name
    }
    function eu(e) {
      return { ...e, queryMatchMode: "source-ranked" }
    }
    function ec(e) {
      let { server: t, title: n } = e
      return "codex_apps" === t && "Library" === n
    }
    function ed(e) {
      let { canonicalAppId: t, plugin: n } = e
      return null == t && n.installed
    }
  },
  L03S(e, t, n) {
    var l = n("QosV"),
      i = n("iRMi"),
      a = n("qmMi"),
      r = n("zd8w"),
      s = n("Wf1j"),
      o = n("yGJW"),
      u = n("OWtl"),
      c = n("yJ3w"),
      d = n("TYyY"),
      m = n("r5dO"),
      p = n("v5fl")
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
            b = (0, l.c)(19),
            S = (0, a.gh)(u.u),
            M = (0, s.A)()
          b[0] !== M
            ? ((t = M.formatMessage({ id: "composer.mentionSearch.placeholder", defaultMessage: "type to search" })),
              (b[0] = M),
              (b[1] = t))
            : (t = b[1])
          let k = t,
            x = (0, p.lD)(e, h),
            w = (0, r.useRef)(null)
          b[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                w.current = e
              }),
              (b[2] = n))
            : (n = b[2])
          let _ = n
          b[3] !== e
            ? ((g = (t) => {
                ;(0, m.M)(e.view, t) && (w.current = null)
              }),
              (b[3] = e),
              (b[4] = g))
            : (g = b[4])
          let A = g
          return (
            b[5] !== e || b[6] !== M || b[7] !== S || b[8] !== k || b[9] !== x
              ? ((f = (t) => {
                  let n = d.Gq.getState(e.view.state)
                  if ("complete-query" === t && n?.mentionSearch != null && !n.active)
                    return void (0, o.yy)(S, i.CodexMcpExtensionAction, {
                      ...n.mentionSearch.source.analyticsIdentity,
                      feature: "mentions",
                      action: "opened",
                    })
                  switch (t) {
                    case "complete-query":
                    case "insert-mention": {
                      let n = w.current?.()
                      x && n ? y(n, t) : "insert-mention" === t && (0, d.kQ)(e.view)
                    }
                  }
                  w.current = null
                }),
                (y = (t, n) => {
                  if (x?.range == null) return
                  let l = "typed" === x.activation ? x.range.from + 1 : x.range.from,
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
                              ;(n.insertCompletionTextAtSelection(e.insertText), (0, m.M)(n.view))
                            },
                            type: "action",
                          }
                      }
                    })(t, n, e)
                  ;(0, c.d)(
                    a,
                    { queryRange: { from: l, to: x.range.to }, replacementRange: x.range },
                    {
                      clearReplacementRange: () => e.clearSuggestion(x),
                      insertMention: (t) => {
                        ;(t.insertMention({ composerController: e, mentionState: x }),
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
                                    },
                                    { searchHint: t.submenu.searchHint },
                                  )
                                : M.formatMessage({
                                    id: "composer.mentionSearch.tabHint",
                                    defaultMessage: "Press Tab to search",
                                  }),
                            ))
                      },
                      openSubmenu: (n) => {
                        ;(e.setSuggestionSource("mcp-extension" === n.kind ? { ...n, placeholder: k } : n, x),
                          "mcp-extension" === n.kind &&
                            (0, o.yy)(S, i.CodexMcpExtensionAction, {
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
                      (0, o.yy)(S, i.CodexMcpExtensionAction, {
                        ...t.mcpExtensionResultIdentity,
                        feature: "mentions",
                        action: "selected",
                      })
                  })
                }),
                (b[5] = e),
                (b[6] = M),
                (b[7] = S),
                (b[8] = k),
                (b[9] = x),
                (b[10] = f),
                (b[11] = y))
              : ((f = b[10]), (y = b[11])),
            b[12] !== y ? ((v = (e) => y(e, "insert-mention")), (b[12] = y), (b[13] = v)) : (v = b[13]),
            b[14] !== A || b[15] !== f || b[16] !== v || b[17] !== x
              ? ((I = { ui: x, addMention: v, closeAutocomplete: A, setSelectedMention: _, handleMentionEvent: f }),
                (b[14] = A),
                (b[15] = f),
                (b[16] = v),
                (b[17] = x),
                (b[18] = I))
              : (I = b[18]),
            I
          )
        },
      },
    )
  },
  FdGo(e, t, n) {
    var l = n("ABep"),
      i = n("QosV"),
      a = n("fAic"),
      r = n("KUdL"),
      s = n.n(r),
      o = n("qmMi"),
      u = n("Wf1j"),
      c = n("Qgfj"),
      d = n("ASxG"),
      m = n("gwd9"),
      p = n("hPoZ"),
      h = n("hOO0"),
      g = n("HUHI"),
      f = n("RWGq"),
      y = n("Kmy6"),
      v = n("FvYa"),
      I = n("HOLv"),
      b = n("C3Kr"),
      S = n("OWtl"),
      M = n("YWcr"),
      k = n("EULo"),
      x = n("iiZm")
    let w = d.YOg(d.YjP().catch("")).catch([])
    function _(e) {
      return "sites" === e.trim().toLowerCase()
    }
    function A(e) {
      return "connector_openai_codex_dream_memory" === (0, h.$)(e)
    }
    function L(e) {
      return w.parse(e.pluginDisplayNames).filter((e) => e.trim().length > 0)
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
            w,
            T,
            C = (0, i.c)(35),
            {
              arePluginsLoading: P,
              enabled: E,
              hostId: R,
              isSystemHintAllowed: N,
              onMentionInserted: q,
              onSystemHintSelect: O,
              plugins: U,
              preferSystemHintApps: j,
              query: z,
              systemHintsByMentionPath: $,
              systemHintSurface: D,
            } = e,
            H = void 0 === E || E,
            K = void 0 !== j && j,
            W = void 0 === D ? "tpp" : D,
            F = (0, o.gh)(S.u),
            Q = (0, u.A)(),
            B = H && !K
          C[0] !== R || C[1] !== B ? ((t = { enabled: B, hostId: R }), (C[0] = R), (C[1] = B), (C[2] = t)) : (t = C[2])
          let V = (0, g.Km)(t)
          if (!H) {
            let e
            return (
              C[3] === Symbol.for("react.memo_cache_sentinel") ? ((e = { sections: [] }), (C[3] = e)) : (e = C[3]),
              e
            )
          }
          if (
            C[4] !== P ||
            C[5] !== V ||
            C[6] !== Q ||
            C[7] !== N ||
            C[8] !== q ||
            C[9] !== O ||
            C[10] !== U ||
            C[11] !== K ||
            C[12] !== z ||
            C[13] !== F ||
            C[14] !== W ||
            C[15] !== $
          ) {
            w = Symbol.for("react.early_return_sentinel")
            e: {
              var G, J
              let e, t
              C[20] !== P || C[21] !== U || C[22] !== K || C[23] !== $
                ? ((e = (e) =>
                    !K &&
                    !P &&
                    !A(e.id) &&
                    ($?.[(0, M.nw)(e.id)]?.surfaces?.includes("tpp") ?? !0) &&
                    !U.some((t) => t.servicePlugin?.is_template !== !0 && (0, b.Y)(e, t.plugin))),
                  (C[20] = P),
                  (C[21] = U),
                  (C[22] = K),
                  (C[23] = $),
                  (C[24] = e))
                : (e = C[24])
              let i = V.filter(e),
                o = z.trim(),
                u = (0, x.WE)(o),
                g =
                  0 === o.length
                    ? i
                    : ((G = i),
                      (J = u),
                      s()(
                        G.map((e, t) => {
                          var n, l
                          let i
                          return {
                            app: e,
                            index: t,
                            score: ((n = e), (l = J), (i = L(n)), Math.max(l(n.name), l(`@${n.name}`), ...i.map(l))),
                          }
                        }),
                        [(e) => -e.score, (e) => e.app.name, (e) => e.index],
                      )
                        .filter((e) => e.score > 0)
                        .map((e) => e.app)),
                S = Object.entries((K && (K || !P) ? (0, f.QI)($, W, N) : void 0) ?? {}).filter((e) => {
                  let [t, n] = e
                  return (
                    (0, M.XX)(t) &&
                    !A(t.slice(6)) &&
                    (o.length > 0 || !0 !== n.hide_from_initial_selection) &&
                    !i.some((e) => (0, h.$)(e.id) === (0, h.$)(t.slice(6))) &&
                    (K ||
                      !U.some((e) => {
                        let n = e.canonicalAppId?.trim() || e.plugin.remotePluginId
                        return null != n && (0, h.$)(n) === (0, h.$)(t.slice(6))
                      })) &&
                    (0 === o.length ||
                      Math.max(
                        u(n.name),
                        u((0, p.AC)(t.slice(6))?.name ?? n.name),
                        u(n.action_label ?? n.name),
                        u(`@${n.name}`),
                        ...n.aliases.map(u),
                        ...(n.keyword_invocations ?? []).map(u),
                      ) > 0)
                  )
                })
              if (0 === g.length && 0 === S.length) {
                let e
                ;(C[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = { sections: [] }), (C[25] = e))
                  : (e = C[25]),
                  (w = e))
                break e
              }
              ;((n = "apps"),
                C[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((r = (0, c.zR)({ id: "composer.atMentionList.apps", defaultMessage: "Apps" })), (C[26] = r))
                  : (r = C[26]),
                C[27] !== Q || C[28] !== q || C[29] !== F
                  ? ((t = (e) => {
                      let t = (0, M.UH)(e),
                        n = L(e),
                        i = [e.name, ...n].some(_)
                      return {
                        key: `app:${t.path}`,
                        mentionPath: t.path,
                        label: t.displayName,
                        detail: e.description,
                        searchTerms: [e.name, `@${e.name}`, ...n],
                        iconElement: (0, l.jsx)(v.R, {
                          alt: Q.formatMessage(
                            { id: "composer.atMentionList.appLogoAlt", defaultMessage: "{name} logo" },
                            { name: t.displayName },
                          ),
                          appInfo: e,
                          className: "icon-xs shrink-0 object-contain",
                          fallback: (0, l.jsx)(I.I, { className: "shrink-0", "aria-hidden": !1, asset: a.t }),
                        }),
                        type: "mention",
                        insertMention: (e) => {
                          let { composerController: n, mentionState: l } = e
                          ;(n.insertMention(t, l), q?.(t.path), i && (0, m.fv)(F))
                        },
                      }
                    }),
                    (C[27] = Q),
                    (C[28] = q),
                    (C[29] = F),
                    (C[30] = t))
                  : (t = C[30]),
                (d = g.map(t).concat(
                  S.map((e) => {
                    let [t, n] = e,
                      { label: i, mention: r } = (0, f.ts)(t, n),
                      { displayName: s, iconSmall: o } = r
                    return {
                      key: `app:${t}`,
                      pluginImpression: n.system_hint.startsWith("plugin:")
                        ? { pluginId: n.system_hint.slice(7), eligible: !1 }
                        : void 0,
                      label: i,
                      detail: n.description,
                      searchTerms: [s, `@${s}`, n.name, n.action_label ?? n.name, `@${n.name}`, ...n.aliases],
                      searchKeywords: n.keyword_invocations,
                      iconElement: o?.trimStart().startsWith("<")
                        ? (0, l.jsx)(y.I, { className: "icon-xs shrink-0 object-contain", logo: o })
                        : (0, l.jsx)(v.R, {
                            className: "icon-xs shrink-0 object-contain",
                            alt: "",
                            logoUrl: o,
                            fallback: (0, l.jsx)(I.I, { className: "shrink-0", "aria-hidden": !0, asset: a.t }),
                          }),
                      type: "mention",
                      mentionPath: r.path,
                      insertMention: (e) => {
                        let { composerController: l, mentionState: i } = e
                        if (
                          (0, k.C4)(l.getPersistedText()).some(
                            (e) => e.path === t || $?.[e.path]?.system_hint === n.system_hint,
                          )
                        ) {
                          ;(l.clearSuggestion(i), O?.(n))
                          return
                        }
                        ;(l.insertMention({ kind: "app", ...r }, i),
                          l.convertMentionsToText("apps", (e) => {
                            let l = $?.[e]
                            return e !== t && (!0 === n.mutually_exclusive || l?.mutually_exclusive === !0)
                          }),
                          O?.(n),
                          q?.(r.path),
                          "sites" === n.name.trim().toLowerCase() && (0, m.fv)(F))
                      },
                    }
                  }),
                )))
            }
            ;((C[4] = P),
              (C[5] = V),
              (C[6] = Q),
              (C[7] = N),
              (C[8] = q),
              (C[9] = O),
              (C[10] = U),
              (C[11] = K),
              (C[12] = z),
              (C[13] = F),
              (C[14] = W),
              (C[15] = $),
              (C[16] = n),
              (C[17] = r),
              (C[18] = d),
              (C[19] = w))
          } else ((n = C[16]), (r = C[17]), (d = C[18]), (w = C[19]))
          return w !== Symbol.for("react.early_return_sentinel")
            ? w
            : (C[31] !== n || C[32] !== r || C[33] !== d
                ? ((T = { sections: [{ id: n, title: r, items: d, emptyState: null, isLoading: !1 }] }),
                  (C[31] = n),
                  (C[32] = r),
                  (C[33] = d),
                  (C[34] = T))
                : (T = C[34]),
              T)
        },
      },
    )
  },
  GVrb(e, t, n) {
    var l = n("QosV"),
      i = n("qmMi"),
      a = n("DBCl"),
      r = n("Qgfj"),
      s = n("rtYD"),
      o = n("FjRo"),
      u = n("GaA7"),
      c = n("gTKF"),
      d = n("lp74")
    let m = [],
      p = { sections: [] }
    function h(e) {
      let t
      return (
        "directory" === e.matchType && (t = /[\\/]$/.test(e.path) ? e.path : `${e.path}/`),
        {
          completionQuery: t,
          detail: e.relativePathWithoutFileName,
          icon: (0, d.u)(e),
          insertMention: (t) => {
            let { composerController: n, mentionState: l } = t
            n.insertAtMention(e, l)
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
            v = (0, l.c)(25),
            { conversationId: I, hostId: b, isQueryPending: S, query: M, roots: k } = e,
            x = void 0 === I ? null : I,
            w = void 0 !== S && S,
            _ = b === a.iwv && null != u.appServices.hostedThreadFiles
          v[0] !== x || v[1] !== _
            ? ((t = _ && null != x ? { kind: "app-server", conversationId: x } : null),
              (v[0] = x),
              (v[1] = _),
              (v[2] = t))
            : (t = v[2])
          let A = (0, i._U)(c.threadExecutorTargetByThread$, t),
            L = A?.hostId === a.iwv ? A : null,
            T = L?.environmentId ?? null,
            C = L?.cwd ?? null
          v[3] !== T || v[4] !== C
            ? ((n = { environmentId: T, cwd: C }), (v[3] = T), (v[4] = C), (v[5] = n))
            : (n = v[5])
          let { data: P, isError: E, isFetching: R, isSuccess: N } = (0, i._U)(s.E, n),
            q = k
          if (_) {
            let e
            ;(v[6] !== P ? ((e = null == P ? void 0 : [P]), (v[6] = P), (v[7] = e)) : (e = v[7]), (q = e))
          }
          let O = _ ? L?.environmentId : void 0
          v[8] !== b || v[9] !== M || v[10] !== q || v[11] !== O
            ? ((d = { environmentId: O, hostId: b, includeDirectories: !0, query: M, roots: q }),
              (v[8] = b),
              (v[9] = M),
              (v[10] = q),
              (v[11] = O),
              (v[12] = d))
            : (d = v[12])
          let { files: U, isLoading: j, error: z } = (0, o.x)(d),
            $ = M.trim()
          if (!_ && (null == q || 0 === q.length)) return p
          let D = null,
            H = _ && null != L && R
          if (_ && (null == L || (N && null == P))) {
            let e
            ;(v[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.cloudFilesUnavailable",
                  defaultMessage: "Files are available when a Cloud workspace is connected",
                })),
                (v[13] = e))
              : (e = v[13]),
              (D = e))
          } else if (null != z || (_ && E)) {
            let e
            ;(v[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.fileSearchError",
                  defaultMessage: "Unable to search files",
                })),
                (v[14] = e))
              : (e = v[14]),
              (D = e))
          } else if (0 === $.length) {
            let e
            ;(v[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({
                  id: "composer.atMentionList.emptyQuery",
                  defaultMessage: "Type to search for files",
                })),
                (v[15] = e))
              : (e = v[15]),
              (D = e))
          } else if (w || H || (j && !U?.length)) {
            let e
            ;(v[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.zR)({ id: "composer.atMentionList.loading", defaultMessage: "Searching files\u2026" })),
                (v[16] = e))
              : (e = v[16]),
              (D = e))
          }
          ;(v[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (0, r.zR)({ id: "composer.atMentionList.files", defaultMessage: "Files" })), (v[17] = g))
            : (g = v[17]),
            v[18] !== U ? ((f = null == U ? m : U.map(h)), (v[18] = U), (v[19] = f)) : (f = v[19]))
          let K = j || w || H
          return (
            v[20] !== D || v[21] !== f || v[22] !== K || v[23] !== g
              ? ((y = { sections: [{ id: "files", title: g, items: f, emptyState: D, isLoading: K }] }),
                (v[20] = D),
                (v[21] = f),
                (v[22] = K),
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
    n.d(t, { L: () => eb })
    var l = n("QosV"),
      i = n("fxCc"),
      a = n("T0Rc"),
      r = n("pLGj"),
      s = n("HFi9"),
      o = n.n(s),
      u = n("KUdL"),
      c = n.n(u),
      d = n("qmMi"),
      m = n("DBCl"),
      p = n("D4ZO"),
      h = n("Wf1j"),
      g = n("Qgfj"),
      f = n("gwd9"),
      y = n("b3Qd"),
      v = n("SPnB"),
      I = n("usf5"),
      b = n("CKur"),
      S = n("ZfbS"),
      M = n("MI1z"),
      k = n("IIEq"),
      x = n("jWaO"),
      w = n("yrds"),
      _ = n("rO8L"),
      A = n("Vyeu"),
      L = n("wwME"),
      T = n("ZuY9"),
      C = n("qIad"),
      P = n("WXrt"),
      E = n("w8IV"),
      R = n("BA9i"),
      N = n("R4kT"),
      q = n("IVVU"),
      O = n("ABl9"),
      U = n("EEop"),
      j = n("cLdu"),
      z = n("ueue"),
      $ = n("GaA7"),
      D = n("OWtl"),
      H = n("kfGJ"),
      K = n("axh8"),
      W = n("hZax"),
      F = n("RHhA"),
      Q = n("rvFo")
    let B = ["chrome-dev", "chrome-internal", "chrome"]
    var V = n("sWWp"),
      G = n("WrbO"),
      J = n("YWcr"),
      Z = n("XNvh"),
      Y = n("lDn6"),
      X = n("czj2"),
      ee = n("iiZm"),
      et = n("i5ac"),
      en = n.n(et),
      el = n("s5dU"),
      ei = n("utkD"),
      ea = n("fwjD")
    let er = (0, g.YK)({
      macTitle: { id: "computerUse.nativeApps.mac.title", defaultMessage: "Mac apps" },
      macLoading: { id: "computerUse.nativeApps.mac.loading", defaultMessage: "Loading Mac apps\u2026" },
      desktopTitle: { id: "computerUse.nativeApps.desktop.title", defaultMessage: "Desktop apps" },
      desktopLoading: { id: "computerUse.nativeApps.desktop.loading", defaultMessage: "Loading desktop apps\u2026" },
    })
    function es(e) {
      return e.isLoading
    }
    function eo(e) {
      return "native-app" === e.kind ? [e.app] : "browser-plugin" === e.kind || null == e.nativeApp ? [] : [e.nativeApp]
    }
    function eu(e) {
      return e.bundleId
    }
    function ec(e) {
      return (0, V.mz)(e)
    }
    function ed(e, t) {
      return Math.max(
        t(e.plugin.plugin.name),
        t(e.plugin.displayName ?? ""),
        t(e.mention.displayName),
        t(`@${e.mention.displayName}`),
      )
    }
    var em = n("wRU4"),
      ep = n("m3vH")
    let eh = [G.W, ...B, m.ovW],
      eg = [...eh, R.Bz, R.HZ, R.kV],
      ef = new Map([
        [R.Bz, Y.ER],
        [R.HZ, Y.wq],
        [R.kV, Y.dl],
      ]),
      ey = "DISABLED_BY_ADMIN",
      ev = `openai-templates@${m.xiH}`,
      eI = `${m._NM}@${m.xiH}`
    function eb(e) {
      var t, n, s, u, et
      let eI,
        eb,
        eE,
        eR,
        eN,
        eq,
        eO,
        eU,
        ej,
        ez,
        e$,
        eD,
        eH,
        eK,
        eW,
        eF,
        eQ,
        eB,
        eV,
        eG,
        eJ,
        eZ,
        eY,
        eX,
        e0 = (0, l.c)(64),
        {
          isPersonalDot: e1,
          getChatGptConversationId: e2,
          getLocalConversationId: e3,
          excludedPluginId: e4,
          hostId: e5,
          gizmoId: e6,
          isPluginAllowed: e7,
          isSystemHintAllowed: e8,
          onMentionInserted: e9,
          preferSystemHintApps: te,
          pluginHostId: tt,
          query: tn,
          rankingContext: tl,
          roots: ti,
          sitesSource: ta,
          systemHintSurface: tr,
        } = e,
        ts = void 0 !== te && te,
        to = void 0 === tt ? e5 : tt,
        tu = void 0 === tr ? "tpp" : tr,
        tc = (0, d.gh)(D.u)
      e0[0] !== e3 || e0[1] !== e1
        ? ((eR = null == e1 ? e3?.() : null), (e0[0] = e3), (e0[1] = e1), (e0[2] = eR))
        : (eR = e0[2])
      let td = eR
      e0[3] !== e5 || e0[4] !== td
        ? ((eN = null == td ? null : { hostId: e5, threadId: td }), (e0[3] = e5), (e0[4] = td), (e0[5] = eN))
        : (eN = e0[5])
      let tm = (0, d._U)(C.q, eN),
        tp = (e1 ?? tm) ? "personal_dot" : "standard",
        th = (0, d.Ul)(q.yu),
        tg = (0, W.Zj)(!!ta?.projects && "521049492"),
        tf = (0, h.A)(),
        { platform: ty } = (0, L.V)(),
        tv = (0, W.Zj)("4218407052"),
        tI = (0, W.Zj)(R.J4),
        tb = (0, W.Zj)(R.tN),
        tS = (0, I.l)(),
        tM = (0, d.Ul)(P.aD),
        tk = to === m.iwv,
        tx = tk ? H.fI : e5
      e0[6] !== tx ? ((eq = { hostId: tx }), (e0[6] = tx), (e0[7] = eq)) : (eq = e0[7])
      let tw = (0, _.J)(eq)
      e0[8] !== tw || e0[9] !== to || e0[10] !== ts || e0[11] !== tu
        ? ((eO = tw && ts && "chat" === tu), (e0[8] = tw), (e0[9] = to), (e0[10] = ts), (e0[11] = tu), (e0[12] = eO))
        : (eO = e0[12])
      let t_ = eO
      e0[13] !== t_ ? ((eU = { enabled: t_ }), (e0[13] = t_), (e0[14] = eU)) : (eU = e0[14])
      let { data: tA, isLoading: tL } = (0, d._U)(b.Ax, void 0 === e6 ? null : e6, eU),
        tT = tw && !tk
      e0[15] !== e5 || e0[16] !== tT
        ? ((ej = { enabled: tT, hostId: e5 }), (e0[15] = e5), (e0[16] = tT), (e0[17] = ej))
        : (ej = e0[17])
      let tC = (0, k.H)(ej)
      e0[18] !== tC || e0[19] !== e5
        ? ((ez = { computerUseAvailability: tC, hostId: e5 }), (e0[18] = tC), (e0[19] = e5), (e0[20] = ez))
        : (ez = e0[20])
      let tP = (0, A.l)(ez)
      e0[21] !== e5 || e0[22] !== tT
        ? ((e$ = { enabled: tT, hostId: e5 }), (e0[21] = e5), (e0[22] = tT), (e0[23] = e$))
        : (e$ = e0[23])
      let tE = (0, x.J)(e$)
      e0[24] !== e5 || e0[25] !== tT
        ? ((eD = { enabled: tT, hostId: e5 }), (e0[24] = e5), (e0[25] = tT), (e0[26] = eD))
        : (eD = e0[26])
      let tR = (0, w.I)(eD)
      e0[27] !== tT ? ((eH = { enabled: tT }), (e0[27] = tT), (e0[28] = eH)) : (eH = e0[28])
      let tN = (0, M.y)(e5, eH),
        tq = tI ? eg : eh,
        tO = tS ? [...tq, m.kJv] : tq,
        tU = "work" === tl,
        tj = tn.trim(),
        tz = !tU && tj.length > 0,
        t$ = (0, ee.WE)(tj)
      e0[29] !== tw || e0[30] !== to || e0[31] !== ti
        ? ((eK = { enabled: tw, hostId: to, roots: ti, resolveActiveRoots: !0 }),
          (e0[29] = tw),
          (e0[30] = to),
          (e0[31] = ti),
          (e0[32] = eK))
        : (eK = e0[32])
      let { data: tD, isLoading: tH } = (0, j.Kj)(eK),
        tK = (0, S.u0)(tA, tD)
      e0[33] !== tD
        ? ((eW = (e) =>
            tD?.some((t) => {
              let { marketplaceName: n, plugin: l } = t
              return (
                (ef.has(e) ? n === m.hEe : (0, m.foP)(n)) && (l.name === e || ("chrome" === e && B.includes(l.name)))
              )
            }) === !0),
          (e0[33] = tD),
          (e0[34] = eW))
        : (eW = e0[34])
      let tW = eW,
        tF = null == tN ? null : (0, U.i9)(tN),
        tQ = tD?.find(eC)?.marketplacePath ?? null,
        tB = { [G.W]: tC.available, chrome: tE.available, [m.kJv]: tR.available, [m.ovW]: tP.available },
        tV = (0, i.E)({
          queries: tO.filter(eT).map((e) => {
            let t = ef.get(e),
              n = null == t ? tF : tQ
            return {
              ...tc.query.getOptions(U.Pc, {
                hostId: e5,
                marketplacePath: n,
                pluginName: e,
                remoteMarketplaceName: null,
              }),
              enabled:
                tw &&
                (null != t || e5 === H.fI) &&
                null != n &&
                null != tD &&
                !tW(e) &&
                (null == t || !tz || t$(e) > 0 || (0, Y.iZ)(t, t$)) &&
                (tB[e] ?? !0),
              retry: !1,
            }
          }),
        })
      e0[35] !== tW || e0[36] !== e5 || e0[37] !== tD
        ? ((eF = (e) => {
            let { data: t } = e
            return null == tD || null == t || tW(t.summary.name) || (e5 !== H.fI && t.marketplaceName !== m.hEe)
              ? []
              : [(0, z.qA)(t)]
          }),
          (e0[35] = tW),
          (e0[36] = e5),
          (e0[37] = tD),
          (e0[38] = eF))
        : (eF = e0[38])
      let tG = tV.flatMap(eF)
      ;(e0[39] !== tD ? ((eQ = tD ?? []), (e0[39] = tD), (e0[40] = eQ)) : (eQ = e0[40]),
        e0[41] !== tv
          ? ((eB = (e) => {
              let { marketplaceName: t, plugin: n } = e
              return tv || t !== m.xiH || n.id === O.$n
            }),
            (e0[41] = tv),
            (e0[42] = eB))
          : (eB = e0[42]))
      let tJ = (0, z.PM)({
        plugins: [...eQ.filter(eB), ...tG],
        isComputerUseAvailable: tC.available,
        isExternalBrowserUseAvailable: tE.available,
        isInAppBrowserUseAvailable: tR.available,
        isMessagesAvailable: tP.available,
      })
      e0[43] !== tH ||
      e0[44] !== tL ||
      e0[45] !== tC.isLoading ||
      e0[46] !== tE.isLoading ||
      e0[47] !== tR.isLoading ||
      e0[48] !== tP.isLoading ||
      e0[49] !== tV ||
      e0[50] !== t_
        ? ((eV = tH || (t_ && tL) || tV.some(eL) || tC.isLoading || tE.isLoading || tR.isLoading || tP.isLoading),
          (e0[43] = tH),
          (e0[44] = tL),
          (e0[45] = tC.isLoading),
          (e0[46] = tE.isLoading),
          (e0[47] = tR.isLoading),
          (e0[48] = tP.isLoading),
          (e0[49] = tV),
          (e0[50] = t_),
          (e0[51] = eV))
        : (eV = e0[51])
      let tZ = eV,
        tY = (0, J.t2)(tf),
        tX = tJ.filter(
          (e) =>
            !(0, N.b)(to, e.requiresLocalExecutor) &&
            (function (e, t, n, l, i, a) {
              if (e.plugin.availability === ey) return !1
              if (null != n) {
                let t = l?.[(0, Z.vt)(e.plugin.id)]
                if (
                  ((e.canonicalAppId || e.plugin.remotePluginId) && (null == l || (a && t?.is_connected !== !0))) ||
                  (null != t && ((null != t.surfaces && !t.surfaces.includes(n)) || i?.(t) === !1))
                )
                  return !1
              }
              return !!e.plugin.enabled || (!e.plugin.installed && t.includes(e.plugin.name))
            })(e, tO, t_ ? tu : null, tK, e8, ts) &&
            (e7?.(e) ?? !0),
        ),
        t0 = (0, V.zJ)(tX),
        t1 = null != t0
      e0[52] !== t1 ? ((eG = { enabled: t1 }), (e0[52] = t1), (e0[53] = eG)) : (eG = e0[53])
      let { nativeApps: t2, isLoading: t3 } = (0, em.t)(eG),
        t4 = tD?.find(eA) ?? null,
        t5 = tS && t4?.plugin.enabled !== !1 && (null == t4 || e7?.(t4) !== !1) ? (t4 ?? tX.find(e_) ?? null) : null,
        t6 = $.appServices?.chromiumBrowser,
        t7 = null != t5 && null != t6
      ;(e0[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((eJ = async () => (await t6?.getInstalledBrowserFamilies()) ?? []),
          (eZ = ["chromium-browser", "installed-browser-families"]),
          (e0[54] = eJ),
          (e0[55] = eZ))
        : ((eJ = e0[54]), (eZ = e0[55])),
        e0[56] !== t7
          ? ((eY = { enabled: t7, queryFn: eJ, queryKey: eZ, retry: !1, staleTime: Q.D.FIVE_SECONDS }),
            (e0[56] = t7),
            (e0[57] = eY))
          : (eY = e0[57]))
      let { data: t8, isLoading: t9 } = (0, a.I)(eY),
        ne = (0, P.D6)(null == t5 ? [] : Object.keys(r.Ypn).filter(r.rUV).map(ew))
      e0[58] !== e2 || e0[59] !== e3 || e0[60] !== e5 || e0[61] !== e9
        ? ((eX = { getChatGptConversationId: e2, getLocalConversationId: e3, hostId: e5, onMentionInserted: e9 }),
          (e0[58] = e2),
          (e0[59] = e3),
          (e0[60] = e5),
          (e0[61] = e9),
          (e0[62] = eX))
        : (eX = e0[62])
      let nt = (0, ep.f)(eX),
        nn =
          null != (0, d.Ul)(tU ? v.chatGptAuthenticatedAccountId$ : null) &&
          e5 === H.fI &&
          to === H.fI &&
          null != t6 &&
          t5?.plugin.installed === !0 &&
          t5.plugin.id !== e4 &&
          tX.includes(t5) &&
          !0 === tM.get("chrome") &&
          tj.length > 0 &&
          "chrome".startsWith(tj.toLowerCase()),
        nl = nn && tE.available,
        ni = Object.keys(r.Ypn)
          .filter(r.rUV)
          .filter(
            (e) =>
              (tU ? "chrome" === e && nl : !0 === tM.get(e)) &&
              (ne.get(e)?.isInstalled === !0 || t8?.includes(e) === !0),
          ),
        na = tU && ni.includes("chrome"),
        nr = !na && ((nn && tE.isLoading) || (nl && (t9 || ne.get("chrome")?.isLoading === !0))),
        ns = "macOS" === ty || "windows" === ty,
        no = ns
          ? ((t = tX),
            (eI = (0, F.t)()),
            (eb = (0, m.v3D)(eI)),
            (eE = (function (e) {
              switch (e) {
                case m.x1u.Dev:
                  return "chrome-dev"
                case m.x1u.Agent:
                case m.x1u.Prod:
                case m.x1u.PublicBeta:
                  return "chrome"
                case m.x1u.InternalAlpha:
                case m.x1u.Nightly:
                  return "chrome-internal"
              }
            })(eI)),
            c()(
              t.filter((e) => eP(e) && e.marketplaceName === eb),
              [(e) => +(e.plugin.name !== eE), (e) => B.indexOf(e.plugin.name)],
            ))
          : [],
        nu = tX.find(ex) ?? null,
        nc = ns && tI ? tX.filter(R.V0) : [],
        nd = ns && tI && tb ? tX.filter(R.ho) : [],
        nm = ns && tI ? tX.filter(R._c) : [],
        np = new Set(no),
        nh = tJ.find(ek),
        ng = null != nh && (!t_ || !nh.plugin.enabled || nh.plugin.availability === ey || tX.includes(nh)),
        nf = tX.filter(
          (e) =>
            e.plugin.id !== e4 &&
            !((na || nr) && (e === t5 || (eP(e) && (0, m.foP)(e.marketplaceName)))) &&
            e.servicePlugin?.is_template !== !0 &&
            !(ts && t_ && tK?.[(0, Z.vt)(e.plugin.id)]?.is_connected === !0) &&
            (0, q.E_)(e, tp, th) &&
            !(ng && e.plugin.name === m._NM && (0, m.foP)(e.marketplaceName)) &&
            (!ns || (!np.has(e) && (e.plugin.installed || !eP(e)))) &&
            e !== nu &&
            e.plugin.id !== ev,
        ),
        ny = o()(tg ? ta?.projects : void 0, eM),
        nv = new Map(),
        nI = new Set()
      for (let e of nf) {
        let t = (0, y.VB)(e.plugin.interface?.websiteUrl)
        if (null == t) continue
        let n = ny[t],
          l = n?.length === 1 ? n[0] : void 0
        null != l && (nv.set((0, p.hy)(e.plugin), l.id), nI.add(`site:${l.id}`))
      }
      let nb = tz
          ? ((n = nf),
            (s = t$),
            (u = tY),
            c()(
              n.map((e, t) => {
                var n, l, i
                let a
                return {
                  plugin: e,
                  score:
                    ((n = e),
                    (l = s),
                    (i = u),
                    (a = (0, X.ec)(n, i)),
                    Math.max(
                      l(n.plugin.name),
                      l(n.displayName ?? ""),
                      l(a.displayName),
                      l(`@${a.displayName}`),
                      l(`@${n.displayName ?? n.plugin.name}`),
                    )),
                  keywordScore: Math.max(0, ...(e.keywords ?? []).map(s)),
                  index: t,
                }
              }),
              [(e) => -e.score, (e) => -e.keywordScore, (e) => (0, X.ec)(e.plugin, u).displayName, (e) => e.index],
            )
              .filter((e) => e.score > 0 || e.keywordScore > 0)
              .map((e) => e.plugin))
          : nf,
        nS = new Map()
      for (let e of t2) {
        let t = (0, V.Mg)(e).trim().toLowerCase(),
          n = nS.get(t)
        null == n ? nS.set(t, [e]) : n.push(e)
      }
      let nM = new Map(),
        nk = new Set()
      for (let e of nb) {
        let t = nS.get(((et = e), (et.displayName?.trim() || et.plugin.name).toLowerCase()))
        if (null != t && e !== t0) {
          let n = c()(t, eS)[0]
          if (null != n) for (let l of (nM.set(e.plugin.id, n), t)) nk.add(l.bundleId)
        }
      }
      let nx = (function (e) {
          var t, n
          let a,
            r,
            s,
            o,
            u = (0, l.c)(13),
            {
              browserPlugin: d,
              chromeAppPlugins: m,
              computerUsePlugin: p,
              excludedNativeAppBundleIds: g,
              installedBrowserFamilies: f,
              isInstalledBrowserFamiliesLoading: y,
              isNativeAppsLoading: v,
              mentionableBrowserFamilies: I,
              messagesAppPlugin: b,
              microsoftExcelAppPlugins: S,
              microsoftPowerPointAppPlugins: M,
              microsoftWordAppPlugins: k,
              nativeApps: x,
              onPluginMentionInserted: w,
              pluginMentionLabels: _,
              query: A,
              searchOtherApps: T,
            } = e,
            C = (0, h.A)(),
            { platform: P } = (0, L.V)(),
            R = A.trim().toLowerCase(),
            N = (0, ee.WE)(R)
          u[0] !== P
            ? ((a =
                "macOS" === P
                  ? { title: er.macTitle, loading: er.macLoading }
                  : { title: er.desktopTitle, loading: er.desktopLoading }),
              (u[0] = P),
              (u[1] = a))
            : (a = u[1])
          let q = a,
            O = C.formatMessage({ id: "computerUse.label", defaultMessage: "Computer use" }),
            U = m[0] ?? null,
            j = [
              {
                alias: Y.ER,
                description: C.formatMessage({
                  id: "computerUse.nativeApps.microsoftExcel.detail",
                  defaultMessage: "Live workbook control",
                }),
                kind: "microsoft-excel-plugin",
                plugin: S[0] ?? null,
              },
              {
                alias: Y.wq,
                description: C.formatMessage({
                  id: "computerUse.nativeApps.microsoftPowerPoint.detail",
                  defaultMessage: "Live presentation control",
                }),
                kind: "microsoft-powerpoint-plugin",
                plugin: M[0] ?? null,
              },
              {
                alias: Y.dl,
                description: C.formatMessage({
                  id: "computerUse.nativeApps.microsoftWord.detail",
                  defaultMessage: "Live document control",
                }),
                kind: "microsoft-word-plugin",
                plugin: k[0] ?? null,
              },
            ],
            z = x.find(ec) ?? null,
            $ =
              null == d || 0 === R.length
                ? []
                : I.flatMap((e) => {
                    var t, n
                    if (0 >= ((t = (0, ea.Or)(e)), Math.max((n = N)(t), n(`@${t}`)))) return []
                    let l = (0, ea._K)(e)
                    return [
                      {
                        browserFamily: e,
                        kind: "browser-plugin",
                        plugin: d,
                        mention: { ...(0, X.ec)(d, _), ...l, description: O, path: (0, ea.ri)(d.plugin.id, e) },
                        nativeApp: null,
                      },
                    ]
                  }),
            D =
              T &&
              null == d &&
              null != U &&
              ((t = U), Math.max((n = N)(t.plugin.name), n(t.displayName ?? ""), n(V.Sb), n(`@${V.Sb}`)) > 0)
                ? {
                    kind: "app-plugin",
                    plugin: U,
                    mention: { ...(0, X.ec)(U, _), name: V.Sb, displayName: V.Sb, description: O },
                    nativeApp: null == z ? null : { ...z, displayName: (0, V.Mg)(z) },
                  }
                : null,
            H =
              null != b
                ? {
                    kind: "app-plugin",
                    plugin: b,
                    mention: { ...(0, X.ec)(b, _), description: (0, X.zc)(b) ?? "" },
                    nativeApp: null,
                  }
                : null,
            W = [...(null == D ? [] : [D]), ...(T && null != H && ed(H, N) > 0 ? [H] : [])],
            F = j.flatMap((e) => {
              let { alias: t, description: n, kind: l, plugin: i } = e
              if (!T || null == i || !(0, Y.iZ)(t, N)) return []
              let a = x.find((e) => (0, Y.Th)(t, e)) ?? null
              return [
                {
                  kind: l,
                  plugin: i,
                  mention: (0, Y.xX)({ alias: t, plugin: i, description: n }),
                  nativeApp: null == a ? null : { ...a, displayName: t.label },
                },
              ]
            }),
            Q =
              T && null != p
                ? en()(x, eu)
                    .filter(
                      (e) =>
                        !(
                          g.has(e.bundleId) ||
                          (null != d && f?.some((t) => (0, ea.d)(t, e)) === !0) ||
                          (null == d && null != U && (0, V.mz)(e)) ||
                          (null != b && e.bundleId === E.n) ||
                          j.some((t) => {
                            let { alias: n, plugin: l } = t
                            return null != l && (0, Y.Th)(n, e)
                          })
                        ),
                    )
                    .map((e) => {
                      let t = (0, V.Mg)(e)
                      return { kind: "native-app", app: t === e.displayName ? e : { ...e, displayName: t }, plugin: p }
                    })
                    .filter((e) => {
                      var t, n
                      return (
                        (t = e.app.displayName),
                        (n = R),
                        t
                          .toLocaleLowerCase()
                          .split(/\s+/)
                          .some((e) => e.startsWith(n))
                      )
                    })
                : [],
            B = c()([...$, ...W, ...F, ...Q], (e) =>
              "native-app" === e.kind ? -N(e.app.displayName) : -ed(e, N),
            ).slice(0, 8),
            G = B.flatMap(eo)
          u[2] !== p
            ? ((r = (e) => ({ ...(0, ei.fY)({ appPath: e.appPath }), enabled: null != p })), (u[2] = p), (u[3] = r))
            : (r = u[3])
          let J = (0, i.E)({ queries: G.map(r) }),
            Z = T && (v || y) && 0 === $.length && 0 === W.length && 0 === F.length && 0 === Q.length ? q.loading : null
          if ((null == p && 0 === $.length && 0 === W.length && 0 === F.length) || (0 === B.length && null == Z))
            return null
          let et = q.title,
            em = B.map((e) => {
              if ("native-app" !== e.kind) {
                let t = null == e.nativeApp ? "" : (J[G.indexOf(e.nativeApp)]?.data?.iconSmall ?? "")
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
                      ? (0, K.HP)(null, {
                          iconSmall: e.mention.iconSmall,
                          basePath: null,
                          alt: e.mention.displayName,
                          fallbackName: e.mention.displayName,
                          fallbackIcon: el.A,
                        })
                      : null == e.nativeApp
                        ? (0, X.PG)(e.plugin, _)
                        : (0, K.HP)(null, {
                            iconSmall: t,
                            basePath: e.nativeApp.appPath,
                            alt: e.mention.displayName,
                            fallbackName: e.nativeApp.bundleId,
                            fallbackIcon: el.A,
                          }),
                  type: "mention",
                  insertMention: (t) => {
                    let { composerController: n, mentionState: l } = t
                    ;(n.insertMention(e.mention, l),
                      w?.(e.plugin, "browser-plugin" === e.kind ? e.browserFamily : void 0))
                  },
                }
              }
              let t = J[G.indexOf(e.app)]?.data?.iconSmall ?? "",
                n = (0, V.UA)({ app: e.app, description: O, computerPlugin: e.plugin, iconSmall: t })
              return {
                key: `plugin:${n.path}:${e.app.bundleId}`,
                label: n.displayName,
                detail: O,
                icon: (0, K.HP)(null, {
                  iconSmall: t,
                  basePath: e.app.appPath,
                  alt: n.displayName,
                  fallbackName: e.app.bundleId,
                  fallbackIcon: el.A,
                }),
                type: "mention",
                insertMention: (t) => {
                  let { composerController: l, mentionState: i } = t
                  ;(l.insertMention(n, i), w?.(e.plugin))
                },
              }
            })
          return (
            u[4] !== y || u[5] !== v || u[6] !== J
              ? ((s = v || y || J.some(es)), (u[4] = y), (u[5] = v), (u[6] = J), (u[7] = s))
              : (s = u[7]),
            u[8] !== Z || u[9] !== s || u[10] !== em || u[11] !== q.title
              ? ((o = { id: "native-apps", title: et, items: em, emptyState: Z, isLoading: s }),
                (u[8] = Z),
                (u[9] = s),
                (u[10] = em),
                (u[11] = q.title),
                (u[12] = o))
              : (o = u[12]),
            o
          )
        })({
          browserPlugin: t5,
          chromeAppPlugins: no,
          computerUsePlugin: t0,
          excludedNativeAppBundleIds: nk,
          installedBrowserFamilies: t8,
          isInstalledBrowserFamiliesLoading: t9,
          isNativeAppsLoading: t3,
          mentionableBrowserFamilies: ni,
          messagesAppPlugin: nu,
          microsoftExcelAppPlugins: nc,
          microsoftPowerPointAppPlugins: nd,
          microsoftWordAppPlugins: nm,
          nativeApps: t2,
          onPluginMentionInserted: nt,
          pluginMentionLabels: tY,
          query: tn,
          searchOtherApps: tz,
        }),
        nw = tZ || nr,
        n_ = nw && 0 === nb.length,
        nA = []
      if (nb.length > 0 || n_) {
        let e
        ;(e0[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, g.zR)({ id: "composer.atMentionList.plugins", defaultMessage: "Plugins" })), (e0[63] = e))
          : (e = e0[63]),
          nA.push({
            id: "plugins",
            title: e,
            items: nb.map((e) => {
              let t = nM.get(e.plugin.id),
                n = nv.get((0, p.hy)(e.plugin)),
                l = (0, X.ec)(e, tY),
                i = {
                  ...l,
                  path: null == n ? l.path : `${l.path}${l.path.includes("?") ? "&" : "?"}site=${(0, J.rY)(n)}`,
                  computerUseAppMentionPath: null != t && null != t0 ? (0, V.I8)(t, t0) : void 0,
                },
                { url: a, useCurrentColorMask: r } = (0, K.Oe)({
                  iconSmall: i.iconSmall,
                  basePath: i.path,
                  smallOnly: !0,
                })
              return {
                key: `plugin:${l.path}`,
                mentionPath: i.path,
                label: i.displayName,
                detail: (0, X.zc)(e),
                searchTerms: [
                  e.plugin.name,
                  e.displayName ?? "",
                  `@${i.displayName}`,
                  `@${e.displayName ?? e.plugin.name}`,
                ],
                searchKeywords: e.keywords,
                icon: T.A,
                iconImage: { src: a, monochrome: r },
                type: "mention",
                insertMention: (l) => {
                  let { composerController: a, mentionState: r } = l
                  ;(a.insertMention(i, r), nt(e), null != n && (0, f.fv)(tc), null != t && null != t0 && nt(t0))
                },
              }
            }),
            emptyState: n_
              ? (0, g.zR)({ id: "composer.atMentionList.pluginsLoading", defaultMessage: "Loading plugins\u2026" })
              : null,
            isLoading: nw,
          }))
      }
      return (
        null != nx && nA.push(nx),
        {
          arePluginsLoading: tZ,
          mentionablePlugins: tX,
          sitesSource:
            null == ta
              ? void 0
              : { sections: ta.sections.map((e) => ({ ...e, items: e.items.filter((e) => !nI.has(e.key)) })) },
          sections: nA,
          systemHintsByMentionPath: t_ ? tK : void 0,
        }
      )
    }
    function eS(e) {
      return e.bundleId
    }
    function eM(e) {
      return (0, y.VB)(e.current_live_url)
    }
    function ek(e) {
      let { plugin: t } = e
      return t.installed && t.id === eI
    }
    function ex(e) {
      let { plugin: t } = e
      return t.id === E.G
    }
    function ew(e) {
      return { browserFamily: e }
    }
    function e_(e) {
      let { marketplaceName: t, plugin: n } = e
      return n.name === m.kJv && (0, m.foP)(t)
    }
    function eA(e) {
      let { marketplaceName: t, plugin: n } = e
      return n.name === m.kJv && (0, m.foP)(t)
    }
    function eL(e) {
      let { isLoading: t } = e
      return t
    }
    function eT(e) {
      return "chrome" === e || !B.includes(e)
    }
    function eC(e) {
      let { marketplaceName: t, marketplacePath: n } = e
      return t === m.hEe && null != n
    }
    function eP(e) {
      return B.includes(e.plugin.name)
    }
  },
  m3vH(e, t, n) {
    var l = n("QosV"),
      i = n("qmMi"),
      a = n("gwd9"),
      r = n("MrGp"),
      s = n("Yewb"),
      o = n("w8IV"),
      u = n("ABl9"),
      c = n("OWtl"),
      d = n("YWcr")
    n.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            n = (0, l.c)(8),
            {
              getChatGptConversationId: m,
              getLocalConversationId: p,
              hostId: h,
              marketplaceAnalytics: g,
              onMentionInserted: f,
            } = e,
            y = (0, i.gh)(c.u),
            { installPlugin: v } = (0, s.XY)()
          return (
            n[0] !== m || n[1] !== p || n[2] !== h || n[3] !== v || n[4] !== g || n[5] !== f || n[6] !== y
              ? ((t = (e, t) => {
                  if (!e.plugin.installed && null == t) {
                    let t,
                      n = p?.(),
                      l = m?.()
                    if (null != n) t = { type: "app-server", conversationId: n }
                    else if (null != l) {
                      let e = y.get(r.jS, l)
                      null != e && (t = { type: "chatgpt", conversationId: e })
                    }
                    v(e, {
                      conversation: t,
                      hostId: h,
                      marketplaceAnalytics: g,
                      reloadUserConfigAfterInstall: e.plugin.id === o.G,
                    })
                  }
                  ;(f?.((0, d.vt)(e.plugin.id)), e.plugin.id === u.$n && (0, a.fv)(y))
                }),
                (n[0] = m),
                (n[1] = p),
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
    n.d(t, { q: () => q })
    var l = n("QosV"),
      i = n("T0Rc"),
      a = n("qmMi"),
      r = n("DBCl"),
      s = n("Qgfj"),
      o = n("Dgwo"),
      u = n("oYYx"),
      c = n("vnLQ"),
      d = n("SV1R"),
      m = n("gsZR"),
      p = n("PIwo"),
      h = n("OWtl"),
      g = n("kfGJ"),
      f = n("B5Qz"),
      y = n("bnxy"),
      v = n("rvFo"),
      I = n("fEwQ"),
      b = n("GEsy"),
      S = n("SRbQ"),
      M = n("UlKW"),
      k = n("D6V5"),
      x = n("L2Eu"),
      w = n("nIa3"),
      _ = n("JQtI"),
      A = n("btvb"),
      L = n("r6TF"),
      T = n("d6Ff"),
      C = n("CoqP"),
      P = n("YWcr")
    let E = (0, a.T1)(h.u, (e) => (0, I.o)(1)),
      R = {
        sections: [
          {
            id: "files-and-chats",
            title: (0, s.zR)({ id: "composer.atMentionList.filesAndChats", defaultMessage: "Files and chats" }),
            items: [],
            emptyState: (0, s.zR)({
              id: "composer.atMentionList.filesAndChats.emptyQuery",
              defaultMessage: "Type to search files or chats",
            }),
            isLoading: !1,
          },
        ],
      },
      N = { sections: [] }
    function q(e) {
      let t,
        n,
        I,
        q = (0, l.c)(8),
        { excludedThreadReferences: W, hostId: F, query: Q, roots: B, searchTitlesOnly: V } = e,
        G = void 0 !== V && V,
        J = (0, a.gh)(h.u),
        Z = (0, a.Ul)(c.rb),
        Y = (0, b.o)(Q, 100),
        X = Q.trim(),
        ee = Y.trim(),
        et = ee !== X,
        en = !G && (null == B || et) ? null : ee,
        { remoteConnections: el, enabledRemoteHostIdSet: ei } = (0, p.mw)(),
        ea = (0, u.g)(el),
        er = [...new Set([F, g.fI, ...(ea?.map(K) ?? [])])],
        es = new Set([F, g.fI, ...ei]),
        { data: eo } = (0, d.Q)(r.Q2Y.PROJECTLESS_THREAD_IDS),
        { data: eu } = (0, d.Q)(r.Q2Y.THREAD_WORKSPACE_ROOT_HINTS),
        { data: ec, isFetching: ed } = (0, i.I)({
          queryKey: [G ? "page-thread-title-search" : "composer-thread-search", er, Z, en],
          queryFn: async (e) => {
            let t = await Promise.allSettled(
              er.flatMap((t) => {
                let n = Z.includes(t)
                return (n && !G ? [!1, !0] : [G]).map((l) => {
                  let i = { query: ee, includeAttachedThreads: n, searchTitlesOnly: l, cursor: null, limit: 50 }
                  return l
                    ? (0, o.V)(J, t).searchThreads(i)
                    : J.get(E, t)(() => (0, o.V)(J, t).searchThreads(i), e.signal)
                })
              }),
            )
            return { results: t.flatMap(H), hasFailures: t.some(D) }
          },
          enabled: null != B && !!en,
          refetchInterval: $,
          staleTime: v.D.THIRTY_SECONDS,
        }),
        { data: em, isFetching: ep } = (0, i.I)({
          queryKey: ["composer-known-threads", [...es], er, X],
          queryFn: (e) => {
            let { signal: t } = e
            return (0, r._qC)(
              (async function (e, t, n) {
                let l = [],
                  i = new Set(),
                  a = [...t],
                  s = await Promise.all(
                    a.map(async (t) => {
                      let l = { stack: [], error: void 0, hasError: !1 }
                      try {
                        if (!n.has(t)) return null
                        let i = (0, S.mS)(l, (0, o.V)(e, t).getCachedThreadSearchSnapshot(), !1)
                        return await i
                      } catch (e) {
                        ;((l.error = e), (l.hasError = !0))
                      } finally {
                        ;(0, S.hk)(l)
                      }
                    }),
                  ),
                  u = e.get(f.kv) ? e.get(f.zS) : null,
                  c =
                    null == u
                      ? []
                      : Array.from((0, f.uX)(u)).filter((e) => "chatgpt" !== e.sourceKind && t.has(e.hostId)),
                  { automationDisplayNames: d } = e.get(A.P),
                  m = e.get(L.Oo)
                for (let [e, t] of a.entries()) {
                  let n = s[e],
                    a = new Map(n?.conversations.map((e) => [e.summary.conversationId, e]))
                  for (let e of [...(n?.suppressedIds ?? []), ...(t === g.fI ? m : [])]) i.add((0, f.tJ)(t, e))
                  let o = new Map(n?.summaries.map((e) => [e.conversationId, e]))
                  for (let e of new Set([
                    ...c.filter((e) => e.hostId === t).map((e) => (0, r.JXB)(e.threadId)),
                    ...(n?.recentIds ?? []),
                    ...o.keys(),
                  ])) {
                    let n = a.get(e),
                      s = n?.summary ?? null,
                      c = o.get(e),
                      m = s ?? c,
                      p = m?.source,
                      h = (0, f.tJ)(t, e),
                      y = u?.members.has(h) ? u.read(h) : void 0,
                      v = y?.sourceKind === "chatgpt" ? null : y
                    if (
                      i.has(h) ||
                      n?.ephemeral === !0 ||
                      (null != m && (0, k.I3)(m)) ||
                      (null != p && "object" == typeof p && "subAgent" in p) ||
                      s?.threadSource === M.kM ||
                      c?.threadSource === M.kM ||
                      v?.threadSource === M.kM ||
                      s?.threadSource === r.l02 ||
                      c?.threadSource === r.l02 ||
                      v?.threadSource === r.l02
                    ) {
                      i.add(h)
                      continue
                    }
                    if (n?.sideConversation) continue
                    let I = null != v && (0, C.bT)({ catalogEntry: v, summary: c, liveTitle: s?.title ?? null }),
                      b = I ? v.displayTitle : c?.title,
                      S =
                        n?.fallbackSearchTitle ??
                        (n?.fallbackSearchTitle !== void 0 ||
                        null == s ||
                        ("durable" === (0, w.d)(t, s.mode) && (0, _.N)(s.threadStartKind, s.threadSource))
                          ? null
                          : (0, x.x1)(n?.titleInput ?? void 0)),
                      A =
                        null == s || (0, C.JL)(s.title, b)
                          ? null
                          : (0, x.Lm)({ id: e, title: s.title, fallbackSearchTitle: S, turns: null }),
                      L = A ?? b ?? ((t === g.fI && d.get(e)?.trim()) || null),
                      P = null == A || s?.title?.trim() ? L : (S ?? L),
                      E = (I ? v.cwd : c?.cwd) ?? s?.cwd ?? ""
                    l.push({
                      kind: "local",
                      conversationId: e,
                      threadId: e,
                      hostId: t,
                      threadKey: (0, T.z3)(e),
                      title: L,
                      searchTitle: P ?? (E || e),
                      cwd: E,
                      branch: s?.branch ?? c?.branch ?? v?.gitBranch ?? "",
                      updatedAt: I
                        ? 1e3 * v.sourceRecencyAt
                        : (c?.recencyAt ?? c?.updatedAt ?? s?.recencyAt ?? s?.updatedAt ?? 0),
                      searchPreview: null,
                    })
                  }
                }
                return { results: l, excludedKeys: i }
              })(J, es, new Set(er)),
              t,
            )
          },
          enabled: null != B && X.length > 0,
          staleTime: 0,
          gcTime: 0,
        })
      if (null == B) return null
      if (0 === X.length) return R
      let eh = em?.results ?? [],
        eg = em?.excludedKeys,
        ef = et || null == em ? [] : (ec?.results ?? []).filter(z),
        ey = new Set(ef.map(j)),
        ev = eh.filter(
          (e) =>
            !ey.has((0, f.tJ)(e.hostId, e.threadId)) ||
            (0, c.N6)({ asyncResults: [], loadedChatSearchResults: [e], limit: 1, query: X }).length > 0,
        ),
        eI = B.map(U).filter(O),
        eb = new Set(eo),
        eS = (0, c.N6)({
          asyncResults: ef,
          loadedChatSearchResults: ev,
          limit: ev.length + ef.length,
          query: X,
        }).filter(
          (e) =>
            "local" === e.kind &&
            es.has(e.hostId) &&
            !eg?.has((0, f.tJ)(e.hostId, e.threadId)) &&
            !W.some((t) => (t.hostId ?? F) === e.hostId && t.threadId === e.threadId),
        ),
        eM = [],
        ek = [],
        ex = []
      for (let e of eS) {
        let t = eu?.[e.threadId] ?? e.cwd,
          n = null == t ? "" : (0, y.JH)(t).replace(/\/+$/, "")
        e.hostId === F && eI.some((e) => n === e || n.startsWith(`${e}/`))
          ? eM.push(e)
          : eb.has(e.threadId)
            ? ek.push(e)
            : ex.push(e)
      }
      let ew = [...eM, ...ek, ...ex].map((e) => {
          let t = e.title?.trim() || e.threadId,
            n = el.find((t) => t.hostId === e.hostId)?.displayName ?? null
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
            icon: m.A,
            type: "mention",
            insertMention: (n) => {
              let { composerController: l, mentionState: i } = n
              l.insertAgentMention({ kind: "agent", name: t, displayName: t, path: (0, P.yO)(e.threadId, e.hostId) }, i)
            },
          }
        }),
        e_ = et || ep || (ed && (!G || null == ec))
      return 0 !== ew.length || e_
        ? (q[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.zR)({ id: "composer.atMentionList.chats", defaultMessage: "Chats" })), (q[0] = t))
            : (t = q[0]),
          q[1] !== ew.length
            ? ((n =
                0 === ew.length
                  ? (0, s.zR)({ id: "composer.atMentionList.chats.loading", defaultMessage: "Searching chats\u2026" })
                  : null),
              (q[1] = ew.length),
              (q[2] = n))
            : (n = q[2]),
          q[3] !== e_ || q[4] !== ew || q[5] !== t || q[6] !== n
            ? ((I = { sections: [{ id: "threads", title: t, items: ew, emptyState: n, isLoading: e_ }] }),
              (q[3] = e_),
              (q[4] = ew),
              (q[5] = t),
              (q[6] = n),
              (q[7] = I))
            : (I = q[7]),
          I)
        : N
    }
    function O(e) {
      return e.length > 0
    }
    function U(e) {
      return (0, y.JH)(e).replace(/\/+$/, "")
    }
    function j(e) {
      return (0, f.tJ)(e.hostId, e.threadId)
    }
    function z(e) {
      return e.threadSource !== r.l02
    }
    function $(e) {
      return e.state.data?.hasFailures === !0 && 1e3
    }
    function D(e) {
      return "rejected" === e.status
    }
    function H(e) {
      return "fulfilled" === e.status ? e.value.data : []
    }
    function K(e) {
      return e.hostId
    }
  },
  FjRo(e, t, n) {
    n.d(t, { x: () => k })
    var l = n("QosV"),
      i = n("KUdL"),
      a = n.n(i),
      r = n("qmMi"),
      s = n("zd8w"),
      o = n("iiZm"),
      u = n("y0HZ"),
      c = n("NvvW"),
      d = n("DD2M"),
      m = n("Dgwo"),
      p = n("l00C"),
      h = n("bBSc"),
      g = n("OWtl"),
      f = n("WFY2")
    class y {
      sendRequest
      sessionSupport = "unknown"
      updatedCallbacks = []
      completedCallbacks = []
      constructor(e) {
        this.sendRequest = e
      }
      async createSession(e) {
        let t = (0, d.A)()
        if ("unsupported" !== this.sessionSupport)
          try {
            ;(await this.sendRequest("fuzzyFileSearch/sessionStart", { sessionId: t, roots: e.roots }),
              (this.sessionSupport = "supported"))
          } catch (e) {
            if ((0, c.Rg)(e, "fuzzyFileSearch/sessionStart")) this.sessionSupport = "unsupported"
            else throw e
          }
        let n = !1,
          l =
            null == e.onUpdated
              ? () => {}
              : this.addUpdatedCallback((n) => {
                  n.sessionId === t && e.onUpdated?.(n)
                }),
          i =
            null == e.onCompleted
              ? () => {}
              : this.addCompletedCallback((n) => {
                  n.sessionId === t && e.onCompleted?.(n)
                })
        return {
          update: async (l) => {
            n || (await this.updateQuery({ sessionId: t, query: l, roots: e.roots }))
          },
          stop: async () => {
            n || ((n = !0), l(), i(), await this.stopSession({ sessionId: t }))
          },
        }
      }
      onSessionUpdated(e) {
        for (let t of Array.from(this.updatedCallbacks)) t(e)
      }
      onSessionCompleted(e) {
        for (let t of Array.from(this.completedCallbacks)) t(e)
      }
      async updateQuery(e) {
        if ("supported" === this.sessionSupport)
          try {
            await this.sendRequest("fuzzyFileSearch/sessionUpdate", { sessionId: e.sessionId, query: e.query })
            return
          } catch (n) {
            var t
            if (!(
              "object" == typeof (t = n) &&
              null != t &&
              "message" in t &&
              "string" == typeof t.message &&
              t.message.toLowerCase().includes("fuzzy file search session not found")
            ))
              throw n
            ;(await this.sendRequest("fuzzyFileSearch/sessionStart", { sessionId: e.sessionId, roots: e.roots }),
              await this.sendRequest("fuzzyFileSearch/sessionUpdate", { sessionId: e.sessionId, query: e.query }))
            return
          }
        let n = await this.sendRequest("fuzzyFileSearch", {
          query: e.query,
          roots: e.roots,
          cancellationToken: "vscode-fuzzy-file-search",
        })
        ;(this.onSessionUpdated({ sessionId: e.sessionId, query: e.query, files: n.files }),
          this.onSessionCompleted({ sessionId: e.sessionId }))
      }
      addUpdatedCallback(e) {
        return (
          this.updatedCallbacks.push(e),
          () => {
            this.updatedCallbacks = this.updatedCallbacks.filter((t) => t !== e)
          }
        )
      }
      addCompletedCallback(e) {
        return (
          this.completedCallbacks.push(e),
          () => {
            this.completedCallbacks = this.completedCallbacks.filter((t) => t !== e)
          }
        )
      }
      async stopSession(e) {
        if ("unsupported" !== this.sessionSupport)
          try {
            await this.sendRequest("fuzzyFileSearch/sessionStop", { sessionId: e.sessionId })
          } catch (e) {
            ;(0, c.Rg)(e, "fuzzyFileSearch/sessionStop")
              ? (this.sessionSupport = "unsupported")
              : f.v.warning("Failed to close fuzzy file search session", { safe: {}, sensitive: { error: e } })
          }
      }
    }
    let v = (0, r.T1)(g.u, (e, { externalSignal: t, get: n, scope: l }) => {
      let i = () => new y((t, n) => (0, m.V)(l, e).sendRequest(t, n)),
        a = n(p.u$, e),
        r = i()
      return {
        controller$: t(
          () => r,
          ({ get: t, set: n }) => {
            let s = t(p.u$, e)
            ;(s !== a && ((a = s), (r = i())), n(r))
            let o = r
            return (0, h.jf)(
              l,
              e,
              (e, t, n) =>
                e.rpc.subscribe({
                  type: "notification",
                  key: { hostId: t },
                  methods: ["fuzzyFileSearch/sessionUpdated", "fuzzyFileSearch/sessionCompleted"],
                  listener: n,
                }),
              (e) => {
                "fuzzyFileSearch/sessionUpdated" === e.method
                  ? o.onSessionUpdated(e.params)
                  : o.onSessionCompleted(e.params)
              },
              () => {},
            )
          },
        ),
      }
    })
    var I = n("wwME"),
      b = n("bnxy"),
      S = n("bIvi")
    let M = new Set([
      ".git",
      ".hg",
      ".next",
      ".pnpm-store",
      ".svn",
      ".turbo",
      ".yarn",
      "build",
      "coverage",
      "dist",
      "node_modules",
    ])
    function k(e) {
      let t,
        n,
        i,
        a,
        s = (0, l.c)(23),
        { environmentId: o, hostId: c, includeDirectories: d, onFiles: m, query: p, roots: h } = e,
        g = void 0 !== d && d,
        { platform: f } = (0, I.V)()
      s[0] !== o || s[1] !== g || s[2] !== m || s[3] !== f || s[4] !== h
        ? ((t = (e) => {
            null != h &&
              m?.({
                files: w({
                  files: e.files,
                  includeDirectories: g,
                  isWindowsHost: null == o && "windows" === f,
                  query: e.query,
                  roots: h,
                }),
                query: e.query,
              })
          }),
          (s[0] = o),
          (s[1] = g),
          (s[2] = m),
          (s[3] = f),
          (s[4] = h),
          (s[5] = t))
        : (t = s[5])
      let y = (0, S.K)(t),
        v = p.trim(),
        b = x(c, null == o && v.length > 0 ? h : void 0, p, y)
      s[6] !== o || s[7] !== p || s[8] !== h
        ? ((n = null != o && null != h ? { environmentId: o, roots: h, query: p } : null),
          (s[6] = o),
          (s[7] = p),
          (s[8] = h),
          (s[9] = n))
        : (n = s[9])
      let { data: M, isFetching: k, error: _ } = (0, r._U)(u.Ut, n),
        A = b.response
      if (null != o) {
        let e
        ;(s[10] !== M || s[11] !== p
          ? ((e = null == M ? null : { query: p, files: M.files }), (s[10] = M), (s[11] = p), (s[12] = e))
          : (e = s[12]),
          (A = e))
      }
      let L = null != A && v.length > 0 ? A : null
      e: {
        let e
        if (null == L || null == h) {
          i = null
          break e
        }
        let t = null == o && "windows" === f
        ;(s[13] !== g || s[14] !== h || s[15] !== t || s[16] !== L.files || s[17] !== L.query
          ? ((e = w({ files: L.files, includeDirectories: g, isWindowsHost: t, query: L.query, roots: h })),
            (s[13] = g),
            (s[14] = h),
            (s[15] = t),
            (s[16] = L.files),
            (s[17] = L.query),
            (s[18] = e))
          : (e = s[18]),
          (i = e))
      }
      let T = i,
        C = null == o ? b.isLoading : k,
        P = null == o ? b.error : _
      return (
        s[19] !== T || s[20] !== C || s[21] !== P
          ? ((a = { files: T, isLoading: C, error: P }), (s[19] = T), (s[20] = C), (s[21] = P), (s[22] = a))
          : (a = s[22]),
        a
      )
    }
    let x = (e, t, n, i) => {
      let a,
        o,
        u,
        c,
        d,
        m,
        p,
        h,
        g = (0, l.c)(25),
        { controller$: y } = (0, r.uO)(v, e),
        I = (0, r.Ul)(y),
        [b, S] = (0, s.useState)(null),
        [M, k] = (0, s.useState)(!1),
        [x, w] = (0, s.useState)(null),
        A = (0, s.useRef)(null),
        L = (0, s.useRef)(null),
        T = null != t && t.length > 0
      g[0] !== t ? ((a = t?.join("\0") ?? ""), (g[0] = t), (g[1] = a)) : (a = g[1])
      let C = a
      g[2] !== I || g[3] !== i || g[4] !== t
        ? ((o = async () => {
            if (null == t || 0 === t.length) return null
            if (null != A.current) return A.current
            let e = {}
            L.current = e
            let n = I.createSession({
              roots: t,
              onUpdated: (t) => {
                if (L.current !== e) return
                let n = { query: t.query, files: t.files }
                ;(S(n), i(n))
              },
              onCompleted: () => {
                L.current === e && k(!1)
              },
            }).catch((t) => {
              throw (A.current === n && (A.current = null), L.current === e && (L.current = null), t)
            })
            return ((A.current = n), n)
          }),
          (g[2] = I),
          (g[3] = i),
          (g[4] = t),
          (g[5] = o))
        : (o = g[5])
      let P = (0, s.useEffectEvent)(o)
      g[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = async () => {
            let e = A.current
            if (null == e) return
            ;((A.current = null), (L.current = null))
            let t = await e
            await t.stop()
          }),
          (g[6] = u))
        : (u = g[6])
      let E = (0, s.useEffectEvent)(u)
      return (
        g[7] !== E
          ? ((c = () => (
              S(null),
              k(!1),
              () => {
                E().catch(_)
              }
            )),
            (g[7] = E),
            (g[8] = c))
          : (c = g[8]),
        g[9] !== I || g[10] !== C ? ((d = [I, C]), (g[9] = I), (g[10] = C), (g[11] = d)) : (d = g[11]),
        (0, s.useEffect)(c, d),
        g[12] !== P || g[13] !== T || g[14] !== n
          ? ((m = () => {
              let e = !1
              return (
                (async () => {
                  if ((w(null), !T || 0 === n.length)) {
                    ;(S(null), k(!1))
                    return
                  }
                  try {
                    k(!0)
                    let t = await P()
                    if (e || null == t) return
                    await t.update(n)
                  } catch (t) {
                    e ||
                      (f.v.error("Error fetching fuzzy file search", { safe: {}, sensitive: { error: t } }),
                      S(null),
                      w(t instanceof Error ? t : Error("File search failed")),
                      k(!1))
                  }
                })(),
                () => {
                  e = !0
                }
              )
            }),
            (g[12] = P),
            (g[13] = T),
            (g[14] = n),
            (g[15] = m))
          : (m = g[15]),
        g[16] !== I || g[17] !== T || g[18] !== n || g[19] !== C
          ? ((p = [I, T, n, C]), (g[16] = I), (g[17] = T), (g[18] = n), (g[19] = C), (g[20] = p))
          : (p = g[20]),
        (0, s.useEffect)(m, p),
        g[21] !== x || g[22] !== M || g[23] !== b
          ? ((h = { response: b, isLoading: M, error: x }), (g[21] = x), (g[22] = M), (g[23] = b), (g[24] = h))
          : (h = g[24]),
        h
      )
    }
    function w({ files: e, includeDirectories: t, isWindowsHost: n, query: l, roots: i }) {
      var r = e
          .filter(
            (e) =>
              ("file" === e.match_type || (t && "directory" === e.match_type)) &&
              !e.path.split((0, b.ZQ)(e.root) ? "/" : /[\\/]+/).some((e) => M.has(e)),
          )
          .map((e) =>
            (function ({ file_name: e, match_type: t, path: n, root: l }, i, a) {
              let { displayPath: r, fsPath: s } = (0, b._v)({
                  root: l,
                  relativePath: n,
                  includeWorkspaceRootLabel: i,
                  isWindowsHost: a,
                }),
                o = r.lastIndexOf("/")
              return {
                label: e,
                matchType: t,
                path: i ? s : r,
                relativePathWithoutFileName: r.substring(0, o),
                fsPath: s,
              }
            })(e, i.length > 1, n),
          ),
        s = l
      let u = s.trim()
      if (0 === u.length) return r
      let c = (0, o.WE)(u)
      return a()(
        r.map((e, t) => ({ file: e, score: c(e.label), index: t })).filter((e) => e.score > 0 || c(e.file.path) > 0),
        [(e) => "file" !== e.file.matchType || 0 === e.score, (e) => -e.score, (e) => e.file.label, (e) => e.index],
      ).map((e) => e.file)
    }
    function _(e) {
      f.v.warning("Failed to close fuzzy file search session", { safe: {}, sensitive: { error: e } })
    }
  },
  PgCv(e, t, n) {
    n.d(
      t,
      {},
      {
        d: function () {
          return !0
        },
      },
    )
  },
  qfej(e, t, n) {
    n.d(t, { e6: () => v, Zb: () => y, Lo: () => I })
    var l = n("CjTC"),
      i = n("zd8w"),
      a = n("Qgfj"),
      r = n("KJ1J"),
      s = n("nRNm"),
      o = n("YWcr"),
      u = n("iiZm"),
      c = n("FvYa"),
      d = n("UxN3"),
      m = n("OGl1"),
      p = n("ZuY9"),
      h = n("axh8"),
      g = n("zUz7"),
      f = n("N0Xk")
    function y({ hiddenTopLevelServers: e = [], pluginAppIds: t, plugins: n = [], sections: i, query: r, servers: s }) {
      let c = new Set(i.filter((e) => "plugins" === e.id).flatMap((e) => e.items.map((e) => e.key))),
        d = new Map(),
        m = s.filter((l) => {
          let i = b(l, n, t),
            a =
              null == i
                ? void 0
                : [
                    `plugin:${(0, o.GL)(i).path}`,
                    null == l.connectorId ? null : `app:${(0, o.nw)(l.connectorId)}`,
                  ].find((e) => null != e && c.has(e))
          if (null == i || null == a) return !e.includes(l)
          let r = d.get(a)
          return (null == r ? d.set(a, { plugin: i, servers: [l] }) : ((r.plugin = i), r.servers.push(l)), !1)
        }),
        p = i.map((e) =>
          "plugins" !== e.id
            ? e
            : {
                ...e,
                items: e.items.map((e) => {
                  if ("mention" !== e.type) return e
                  let t = d.get(e.key),
                    n = t?.servers[0]
                  if (null == t || null == n) return e
                  let { plugin: i, servers: a } = t
                  return {
                    ...e,
                    submenu: {
                      analyticsIdentity: { pluginId: (0, l.p)(i.plugin) },
                      iconSmall: (0, o.kI)(i),
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
        h = (function ({ plugins: e, pluginAppIds: t, query: n, servers: l }) {
          let i = n.trim().length > 0
          return l
            .flatMap((l) => {
              let a = Math.max((0, u.gr)(l.title, n), (0, u.gr)(l.detail, n))
              if (i && 0 === a) return []
              let r = b(l, e, t),
                s = {
                  analyticsIdentity: { ...l.identity, connectorId: l.connectorId ?? void 0 },
                  iconSmall: null == r ? void 0 : (0, o.kI)(r),
                  kind: "mcp-extension",
                  mentionSearchTool: l.mentionSearchTool,
                  server: l.server,
                  title: l.title,
                }
              return [
                {
                  item: {
                    detail: l.detail,
                    iconElement: S(s.iconSmall, l),
                    key: k(l),
                    label: l.title,
                    searchTerms: [l.detail],
                    submenu: s,
                    type: "submenu",
                  },
                  score: a,
                },
              ]
            })
            .sort(M)
        })({ plugins: n, pluginAppIds: t, query: r, servers: m })
      return 0 === h.length
        ? p
        : [
            {
              id: "mcp-servers",
              title: (0, a.zR)({ id: "composer.atMentionList.mcpServers", defaultMessage: "MCP servers" }),
              items: h.map(({ item: e }) => e),
              emptyState: null,
              isLoading: !1,
            },
            ...p,
          ]
    }
    function v({ isLoading: e, mentionSource: t, query: n = "", results: l, servers: r }) {
      let o = new Map(l?.map((e) => [k(e), e.items])),
        c = r.some(({ preload: e }) => e) ? 6 : 1 / 0,
        p = []
      for (let e of r) {
        let l = c - p.length
        if (0 === l) break
        let a = o.get(k(e))
        if (null == a) continue
        let { mentionSearchTool: r, server: h } = e
        for (let o of (function ({
          resourceTarget: e,
          iconSmall: t,
          items: n,
          mentionSearchTool: l,
          preloaded: a,
          providerIcon: r,
          query: o,
          server: c,
        }) {
          let p = a && o.trim() ? (0, u.WE)(o) : void 0
          return n.map((n, u) => {
            let h = "resource_link" === n.type ? (n.title ?? n.name) : n.title,
              y = p?.(h) === 0 ? n.searchTerms?.find((e) => p(e) > 0) : void 0,
              v = a ? (0, i.createElement)(s._, { text: h, query: o }) : void 0,
              I = null == y ? void 0 : (0, i.createElement)(s._, { text: y, query: o })
            switch (n.type) {
              case "resource":
              case "resource_link": {
                let s = "resource_link" === n.type ? n.uri : n.resourceUri,
                  o = (0, g.p)(n),
                  p = (function (e) {
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
                      l =
                        ("resource_link" === e.type ? e.mimeType : void 0) ??
                        t?.get("mime_type") ??
                        t?.get("mimeType") ??
                        void 0,
                      i = (0, m.re)(n ?? e.title, l)
                    if ("file" !== i || null != n || null != l) return m.Ug[i]
                  })(n)
                return {
                  detail: y ?? ("resource_link" === n.type ? n.description : n.subtitle) ?? null,
                  labelElement: v,
                  detailElement: I,
                  searchTerms: a ? n.searchTerms : void 0,
                  iconElement:
                    null == o
                      ? r
                      : (0, i.createElement)(f.X, {
                          className: "icon-leading shrink-0",
                          icon: o,
                          fallback: (0, i.createElement)(d.b5, { icon: p ?? m.Ug.file }),
                        }),
                  type: "mention",
                  insertMention: ({ composerController: n, mentionState: l }) => {
                    n.insertResourceMentionFromAtMention(
                      { iconSmall: t, resourceUri: s, server: c, connectorId: e?.connectorId, linkId: e?.linkId },
                      h,
                      l,
                    )
                  },
                  key: a
                    ? JSON.stringify(["mcp-extension-resource", c, l, s])
                    : `mcp-extension-resource:${c}:${l}:${s}:${u}`,
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
                    ? JSON.stringify(["mcp-extension-completion", c, l, n.title, n.insertText])
                    : `mcp-extension-completion:${c}:${l}:${u}`,
                  label: n.title,
                  type: "text-completion",
                }
            }
          })
        })({
          iconSmall: t.iconSmall || e.icon?.logoUrl || e.icon?.logoDarkUrl || "",
          items: e.preload
            ? (function (e, t, n) {
                let l = t.trim().toLowerCase()
                if (0 === l.length) return e.slice(0, n)
                let i = (0, u.WE)(t),
                  a = [],
                  r = [],
                  s = []
                for (let t of e) {
                  let e = ["resource_link" === t.type ? (t.title ?? t.name) : t.title, ...(t.searchTerms ?? [])]
                  if (e.some((e) => e.toLowerCase() === l)) {
                    if ((a.push(t), a.length === n)) break
                  } else
                    a.length + r.length < n && e.some((e) => e.toLowerCase().startsWith(l))
                      ? r.push(t)
                      : a.length + r.length + s.length < n && e.some((e) => i(e) > 0) && s.push(t)
                }
                return [...a, ...r, ...s].slice(0, n)
              })(a, n, l)
            : a.slice(0, l),
          preloaded: e.preload,
          providerIcon: S(t.iconSmall, e),
          query: n,
          resourceTarget: e.resourceTarget,
          mentionSearchTool: r,
          server: h,
        }))
          p.push({ ...o, mcpExtensionResultIdentity: { ...e.identity, connectorId: e.connectorId ?? void 0 } })
      }
      return 0 !== p.length || e
        ? [
            {
              id: k(t),
              title: t.title,
              titleValues: { scope: t.title },
              items: p,
              emptyState:
                e && 0 === p.length
                  ? (0, a.zR)({ id: "composer.atMentionList.mcpServersLoading", defaultMessage: "Loading\u2026" })
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
      return t.find(({ canonicalAppId: t, appIds: i, plugin: a }) => {
        let s = (0, l.p)(a)
        return null != e.hosted && e.identity?.pluginId != null && null != s
          ? s === e.identity.pluginId
          : null != e.pluginId
            ? a.id === e.pluginId
            : (0, r.fI)(e.server)
              ? null != e.connectorId &&
                (t === e.connectorId ||
                  i?.includes(e.connectorId) === !0 ||
                  n?.get(a.id)?.includes(e.connectorId) === !0)
              : void 0 === e.pluginId && e.server === a.name
      })
    }
    function S(e, t) {
      if (e) {
        let { url: t, useCurrentColorMask: n } = (0, h.Oe)({ iconSmall: e })
        return (0, i.createElement)(c.R, {
          className: "icon-xs",
          alt: "",
          logoUrl: t,
          monochrome: n,
          fallback: (0, i.createElement)(p.A, { className: "icon-xs" }),
        })
      }
      return (0, i.createElement)(f.X, { icon: t.icon, fallback: (0, i.createElement)(p.A, { className: "icon-xs" }) })
    }
    function M(e, t) {
      return t.score - e.score || e.item.label.localeCompare(t.item.label)
    }
    function k({ mentionSearchTool: e, server: t }) {
      return `mcp-extension:${t}:${e}`
    }
  },
  qIad(e, t, n) {
    var l = n("qmMi"),
      i = n("pvRJ"),
      a = n("tl5a"),
      r = n("qMca"),
      s = n("NenV"),
      o = n("TYK1"),
      u = n("OWtl")
    let c = (0, l.i1)(u.u, (e, { get: t }) => {
      if (null == e) return !1
      let { hostId: n, threadId: l } = e,
        u = { hostId: n, threadId: l }
      if (t(a.M5, u)?.threadAccess === "shared") return !1
      if (!e.knownDot) {
        let e = t(s.C1, u)
        if (e !== i.BB && "aeon_child" !== e && !t(r.D0, l)) return !1
      }
      let { data: c, isError: m } = t(o.cloudAeonByThreadId$, l)
      return !m && d(c)
    })
    function d(e) {
      return (
        null != e &&
        "aeon" !== e.aeon_kind &&
        (null == e.scope || "personal" === e.scope) &&
        null == e.service_account_account_user_id
      )
    }
    n.d(t, {}, { q: c, t: d })
  },
  Rw2H(e, t, n) {
    var l = n("ABep"),
      i = n("QosV"),
      a = n("i5ac"),
      r = n.n(a),
      s = n("qmMi"),
      o = n("G4E3"),
      u = n("Wf1j"),
      c = n("Qgfj"),
      d = n("SPnB"),
      m = n("iiZm"),
      p = n("bVeK"),
      h = n("OWtl"),
      g = n("rpnz"),
      f = n("e1xH"),
      y = n("vnV1"),
      v = n("ELpK"),
      I = n("t6WW"),
      b = n("tv8P"),
      S = n("nDmq"),
      M = n("kTTh")
    function k(e) {
      return { pageId: e.root_page_id, space: e, title: e.name.trim() || e.id, detail: null }
    }
    function x(e) {
      return null == e.deleted_at
    }
    function w() {}
    function _(e) {
      return e.root_page_id
    }
    function A({
      defaultIconName: e,
      detail: t,
      documentType: n,
      namespace: i,
      symbol: a,
      pageId: r,
      space: s,
      title: u,
    }) {
      let c = (0, o.$j)({ kind: "page", id: r }),
        d = null == s ? void 0 : (0, l.jsx)(I.O, { spaceId: s.id, size: "leading" })
      return {
        key: c,
        ariaLabel: [u, t].filter((e) => null != e).join(" "),
        label: null == s ? (0, M.w)(u, void 0, void 0, a).title : u,
        labelElement:
          null != s
            ? void 0
            : (0, l.jsx)(S.s, {
                pageId: r,
                defaultIconName: e,
                documentType: n,
                namespace: i,
                symbol: a,
                title: u,
                children: ({ title: e }) => e,
              }),
        detail: t,
        searchTerms: null == t ? [u] : [u, t],
        iconElement:
          d ??
          (0, l.jsx)(S.s, {
            pageId: r,
            defaultIconName: e,
            documentType: n,
            namespace: i,
            symbol: a,
            title: u,
            children: ({ icon: e }) => e,
          }),
        type: "mention",
        insertMention: ({ composerController: e, mentionState: t }) => {
          e.insertPageReferenceMention({ path: c, spaceId: s?.id, title: u }, t)
        },
      }
    }
    function L(e, t, n) {
      let l = t.trim()
      if (0 === l.length) return e.slice(0, n).map(A)
      let i = (0, m.WE)(l)
      return e
        .map((e, t) => ({
          item: e,
          index: t,
          score: Math.max(i((0, M.O)(e.title).title), i(e.title), null == e.detail ? 0 : i(e.detail)),
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
            l,
            a,
            o,
            m,
            I,
            S,
            M,
            T,
            C = (0, i.c)(88),
            { enabled: P, query: E, expanded: R, category: N, includePageReferences: q, searchQuery: O } = e,
            U = void 0 !== R && R,
            j = void 0 === O ? E : O,
            z = (0, s.gh)(h.u),
            $ = (0, u.A)(),
            D = (0, s.Ul)(f.pagesEnabled$),
            H = (0, s.Ul)(d.chatGptAuthenticatedAccountId$),
            K = !0 === (0, s.Ul)(!!(void 0 === P || P) && !!D && null != H && y.Sc),
            W = K && (void 0 === q || q) && "spaces" !== N
          C[0] !== W ? ((t = { enabled: W }), (C[0] = W), (C[1] = t)) : (t = C[1])
          let { data: F, isFetching: Q, isError: B, refetch: V } = (0, s.Ul)(b.spacePagesQuery$, t),
            G = (0, s.Ul)(W ? b.spacePagesHasMore$ : null)
          C[2] !== K ? ((n = { enabled: K }), (C[2] = K), (C[3] = n)) : (n = C[3])
          let { data: J, isLoading: Z, isError: Y } = (0, s.Ul)(b.spacesQuery$, n),
            X = (0, s.Ul)(W ? b.visibleSpacePages$ : null) ?? F
          C[4] !== j ? ((l = j.trim()), (C[4] = j), (C[5] = l)) : (l = C[5])
          let ee = l
          C[6] !== W || C[7] !== E ? ((a = W && E.trim().length >= 2), (C[6] = W), (C[7] = E), (C[8] = a)) : (a = C[8])
          let et = a,
            en = et && ee.length >= 2
          C[9] !== en ? ((o = { enabled: en }), (C[9] = en), (C[10] = o)) : (o = C[10])
          let { data: el, isFetching: ei, isError: ea } = (0, s._U)(v.Q, ee, o)
          if (!K) return null
          C[11] !== E ? ((m = E.trim()), (C[11] = E), (C[12] = m)) : (m = C[12])
          let er = ee === m,
            es = Z || (et ? !er || ei : Q)
          C[13] !== J?.items || C[14] !== J?.items.map
            ? ((I = new Set(J?.items.map(_))), (C[13] = J?.items), (C[14] = J?.items.map), (C[15] = I))
            : (I = C[15])
          let eo = I
          C[16] !== E ? ((S = E.trim()), (C[16] = E), (C[17] = S)) : (S = C[17])
          let eu = S.length > 0,
            ec = U ? 20 : 5
          if (
            C[18] !== Q ||
            C[19] !== et ||
            C[20] !== B ||
            C[21] !== G ||
            C[22] !== U ||
            C[23] !== eu ||
            C[24] !== W ||
            C[25] !== ec ||
            C[26] !== $ ||
            C[27] !== er ||
            C[28] !== X?.items ||
            C[29] !== E ||
            C[30] !== V ||
            C[31] !== z ||
            C[32] !== el ||
            C[33] !== eo ||
            C[34] !== J
          ) {
            let e,
              t,
              n = new Map()
            for (let t of (C[36] !== W || C[37] !== X?.items || C[38] !== J
              ? ((e = W && null != J ? (X?.items ?? []) : []),
                (C[36] = W),
                (C[37] = X?.items),
                (C[38] = J),
                (C[39] = e))
              : (e = C[39]),
            e))
              if (
                !(eo.has(t.page_id) || (0, g.sD)(t.page_id)) &&
                !1 !== t.access.can_read &&
                null == t.deleted_at &&
                (n.set(t.page_id, t), !eu && n.size === ec)
              )
                break
            C[40] !== J?.items
              ? ((t = (e) => {
                  var t, n
                  let l
                  return (
                    (t = e),
                    (n = J?.items),
                    (l = n?.find((e) => e.id === t.drive_space_id)),
                    {
                      documentType: t.document_type,
                      namespace: t.namespace,
                      symbol: t.symbol,
                      pageId: t.page_id,
                      title: t.title?.trim() || t.page_id,
                      detail: l?.name ?? (null != t.parent && "title" in t.parent ? t.parent.title : null),
                    }
                  )
                }),
                (C[40] = J?.items),
                (C[41] = t))
              : (t = C[41])
            let l = L(Array.from(n.values(), t), E, ec),
              i =
                et && er && null != J
                  ? el?.items.flatMap((e) => {
                      let { source_type: t, payload: l, title: i } = e
                      if ("space" !== t || "space_page" !== l.kind || eo.has(l.page_id)) return []
                      let { page_id: a, space_id: r } = l,
                        s = J?.items.find((e) => e.id === r),
                        o = n.get(a)
                      return [
                        A({
                          defaultIconName: l.default_symbol?.value,
                          documentType: l.document_type ?? o?.document_type,
                          namespace: o?.namespace,
                          symbol: l.symbol ?? o?.symbol,
                          pageId: a,
                          title: i.trim() || a,
                          detail: s?.name ?? null,
                        }),
                      ]
                    })
                  : void 0
            if (
              ((M = r()([...(i ?? []), ...l], "key").slice(0, 20)),
              W && !eu && M.length < 20 && (U || M.length < ec) && (G || B))
            ) {
              let e
              ;(C[42] !== G || C[43] !== V || C[44] !== z
                ? ((e = () => {
                    ;(G ? (0, b.loadMoreSpacePages)(z) : V()).catch(w)
                  }),
                  (C[42] = G),
                  (C[43] = V),
                  (C[44] = z),
                  (C[45] = e))
                : (e = C[45]),
                M.push({
                  key: "pages-load-more",
                  label: B
                    ? $.formatMessage({ id: "space.list.retryPersonalPages", defaultMessage: "Retry pages" })
                    : $.formatMessage({ id: "space.list.loadMore", defaultMessage: "Load more" }),
                  detail: null,
                  disabled: Q,
                  type: "submenu",
                  submenu: { kind: "at-mention-category", category: "pages" },
                  onOpen: e,
                }))
            }
            ;((C[18] = Q),
              (C[19] = et),
              (C[20] = B),
              (C[21] = G),
              (C[22] = U),
              (C[23] = eu),
              (C[24] = W),
              (C[25] = ec),
              (C[26] = $),
              (C[27] = er),
              (C[28] = X?.items),
              (C[29] = E),
              (C[30] = V),
              (C[31] = z),
              (C[32] = el),
              (C[33] = eo),
              (C[34] = J),
              (C[35] = M))
          } else M = C[35]
          let ed = Y || (et && er && ea)
          if (
            C[46] !== Z ||
            C[47] !== et ||
            C[48] !== N ||
            C[49] !== U ||
            C[50] !== ed ||
            C[51] !== eu ||
            C[52] !== W ||
            C[53] !== ec ||
            C[54] !== $ ||
            C[55] !== es ||
            C[56] !== M ||
            C[57] !== E ||
            C[58] !== J ||
            C[59] !== Y
          ) {
            let e = []
            if (W && (M.length > 0 || es || ed)) {
              let t,
                n,
                l = null
              if (0 === M.length && !es && ed) {
                let e
                ;(C[61] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, c.zR)({
                      id: "composer.atMentionList.pagesSearchFailed",
                      defaultMessage: "Couldn\u2019t search Pages",
                    })),
                    (C[61] = e))
                  : (e = C[61]),
                  (l = e))
              }
              C[62] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, c.zR)({ id: "composer.atMentionList.pages", defaultMessage: "Pages" })), (C[62] = t))
                : (t = C[62])
              let i = et ? "source-ranked" : void 0
              ;(C[63] !== l || C[64] !== ed || C[65] !== es || C[66] !== M || C[67] !== t || C[68] !== i
                ? ((n = {
                    id: "pages",
                    showTitle: !0,
                    title: t,
                    items: M,
                    queryMatchMode: i,
                    emptyState: l,
                    isError: ed,
                    isLoading: es,
                  }),
                  (C[63] = l),
                  (C[64] = ed),
                  (C[65] = es),
                  (C[66] = M),
                  (C[67] = t),
                  (C[68] = i),
                  (C[69] = n))
                : (n = C[69]),
                e.push(n))
            }
            if ("pages" !== N) {
              let t, n
              if (C[70] !== U || C[71] !== eu || C[72] !== ec || C[73] !== $ || C[74] !== E || C[75] !== J) {
                let e
                ;((n = $.formatMessage({ id: "composer.atMentionList.spaces", defaultMessage: "Spaces" })),
                  C[78] !== J?.items ? ((e = J?.items ?? []), (C[78] = J?.items), (C[79] = e)) : (e = C[79]),
                  (t = L(e.filter(x).map(k), E, ec)))
                let l = eu && n.toLocaleLowerCase().startsWith(E.trim().toLocaleLowerCase())
                ;(!U &&
                  (l || (!eu && (J?.items.length ?? 0) > ec)) &&
                  t.push({
                    key: "spaces-browse",
                    label: n,
                    detail: null,
                    icon: { 16: p.i2, 20: p.hmv },
                    type: "submenu",
                    submenu: { kind: "at-mention-category", category: "spaces" },
                  }),
                  (C[70] = U),
                  (C[71] = eu),
                  (C[72] = ec),
                  (C[73] = $),
                  (C[74] = E),
                  (C[75] = J),
                  (C[76] = t),
                  (C[77] = n))
              } else ((t = C[76]), (n = C[77]))
              if (t.length > 0 || Z || Y) {
                let l, i
                ;(C[80] !== Y
                  ? ((l = Y
                      ? (0, c.zR)({
                          id: "composer.atMentionList.spacesLoadFailed",
                          defaultMessage: "Couldn\u2019t load Spaces",
                        })
                      : null),
                    (C[80] = Y),
                    (C[81] = l))
                  : (l = C[81]),
                  C[82] !== Z || C[83] !== t || C[84] !== Y || C[85] !== n || C[86] !== l
                    ? ((i = {
                        id: "spaces",
                        title: n,
                        showTitle: !0,
                        items: t,
                        isLoading: Z,
                        isError: Y,
                        emptyState: l,
                      }),
                      (C[82] = Z),
                      (C[83] = t),
                      (C[84] = Y),
                      (C[85] = n),
                      (C[86] = l),
                      (C[87] = i))
                    : (i = C[87]),
                  e.push(i))
              }
            }
            ;((T = { sections: e }),
              (C[46] = Z),
              (C[47] = et),
              (C[48] = N),
              (C[49] = U),
              (C[50] = ed),
              (C[51] = eu),
              (C[52] = W),
              (C[53] = ec),
              (C[54] = $),
              (C[55] = es),
              (C[56] = M),
              (C[57] = E),
              (C[58] = J),
              (C[59] = Y),
              (C[60] = T))
          } else T = C[60]
          return T
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
  NnK8(e, t, n) {
    var l = n("qmMi"),
      i = n("hOO0"),
      a = n("IVVU"),
      r = n("OWtl")
    let s = (0, l.un)(r.u, ({ get: e }) => new Set(e(a.Lq).hiddenPluginIds)),
      o = (0, l.un)(r.u, ({ get: e }) => new Set(Array.from(e(s), i.$)))
    n.d(t, {}, { I: s, X: o })
  },
  oXug(e, t, n) {
    var l = n("o6hs"),
      i = n("hOO0"),
      a = n("NnK8")
    let r = ["asdk_app_", "connector_", "plugin_asdk_app_", "plugin_connector_"]
    function s(e) {
      return null != e && (0, i.$)(e.replace(/^plugin_/, "")) === (0, i.$)(l.M1)
    }
    function o(e) {
      return "DISABLED_BY_ADMIN" === e.status || "NOT_AVAILABLE" === e.installation_policy
    }
    n.d(
      t,
      { JN: () => o, RW: () => "connector_bd313622bce5485cb3d0b338715f7108", _t: () => s, dO: () => a.I },
      {
        r: function (e, t, n = !1) {
          return (
            !(
              !t &&
              (n && null != e.canonical_app_id
                ? [e.canonical_app_id, e.connector_id]
                : [e.id, e.connector_id, e.canonical_app_id]
              ).some(s)
            ) &&
            (null != e.connector_id || !r.some((t) => e.id.startsWith(t)))
          )
        },
      },
    )
  },
}
//# sourceMappingURL=923712.d5a3af247d.js.map
