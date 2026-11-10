export const __rspack_esm_ids = [353337]
export const __webpack_modules__ = {
  v7bo(e, t, n) {
    var a = n("Eho4")
    function o(e) {
      let t = s(e)
      if (!t) return null
      let n = t.split(":"),
        o = n[0]
      if (!o) return null
      let r = n[1] ?? o,
        l = (0, a.DX)(o),
        c = (0, a.PD)(o),
        d = (0, a.DX)(r),
        p = (0, a.PD)(r),
        u = { startRow: Math.min(l, d), startCol: Math.min(c, p), endRow: Math.max(l, d), endCol: Math.max(c, p) }
      return { ref: i(u), bounds: u }
    }
    function i(e) {
      let t = r(e.startRow, e.startCol),
        n = r(e.endRow, e.endCol)
      return t === n ? t : `${t}:${n}`
    }
    function r(e, t) {
      return `${(0, a.Zp)(t)}${e + 1}`
    }
    function s(e) {
      let t = e.trim()
      return t ? (t.includes("!") ? t.slice(t.indexOf("!") + 1) : t).replace(/\$/g, "").toUpperCase() : null
    }
    n.d(
      t,
      {},
      {
        $1: r,
        DO: o,
        Ol: function (e) {
          var t
          let n = e.startsWith("=") ? e.slice(1) : e,
            a = n.indexOf("!")
          if (-1 === a) {
            let e = o(n)
            return { ref: e?.ref ?? n }
          }
          let i = n.slice(0, a),
            r = n.slice(a + 1),
            s = o(r)
          return {
            sheetName:
              (t = i).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
            ref: s?.ref ?? r,
          }
        },
        Qh: s,
        ds: function (e) {
          return { rows: e.endRow - e.startRow + 1, cols: e.endCol - e.startCol + 1 }
        },
        ox: function (e, t) {
          return e.startRow <= t.endRow && e.endRow >= t.startRow && e.startCol <= t.endCol && e.endCol >= t.startCol
        },
        wP: i,
      },
    )
  },
  dkXD(e, t, n) {
    let a = Object.freeze(
      Object.fromEntries(
        [
          "#000000",
          "#FFFFFF",
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#000000",
          "#FFFFFF",
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#800000",
          "#008000",
          "#000080",
          "#808000",
          "#800080",
          "#008080",
          "#C0C0C0",
          "#808080",
          "#9999FF",
          "#993366",
          "#FFFFCC",
          "#CCFFFF",
          "#660066",
          "#FF8080",
          "#0066CC",
          "#CCCCFF",
          "#000080",
          "#FF00FF",
          "#FFFF00",
          "#00FFFF",
          "#800080",
          "#800000",
          "#008080",
          "#0000FF",
          "#00CCFF",
          "#CCFFFF",
          "#CCFFCC",
          "#FFFF99",
          "#99CCFF",
          "#FF99CC",
          "#CC99FF",
          "#FFCC99",
          "#3366FF",
          "#33CCCC",
          "#99CC00",
          "#FFCC00",
          "#FF9900",
          "#FF6600",
          "#666699",
          "#969696",
          "#003366",
          "#339966",
          "#003300",
          "#333300",
          "#993300",
          "#993366",
          "#333399",
          "#333333",
          "#000000",
          "#FFFFFF",
        ].map((e, t) => [`indexed:${t}`, e]),
      ),
    )
    n.d(
      t,
      {},
      {
        T: a,
        b: function (e) {
          if (!e?.length) return a
          let t = { ...a }
          for (let [n, a] of e.entries()) {
            if (64 === n || 65 === n) continue
            let e = a.value.replace(/^#/, "")
            t[`indexed:${n}`] = `#${8 === e.length ? e.slice(2) : e}`
          }
          return Object.freeze(t)
        },
      },
    )
  },
  RUAz(e, t, n) {
    n.r(t)
    var a = n("v7bo")
    let o = "CSV import",
      i = /\\|\/|\?|\*|\[|\]|:/g
    function r(e) {
      return ((e ?? o).trim().replace(i, "").trim() || o).slice(0, 31)
    }
    n.d(
      t,
      {},
      {
        planCsvImport: function (e, t) {
          let n = (function (e) {
              let t = e ?? ","
              if (1 !== t.length) throw Error(`CSV import separator must be a single character; received "${t}".`)
              return t
            })(t?.separator),
            o = (0, a.Ol)(t?.anchor ?? "A1"),
            i = o.sheetName?.trim(),
            s = t?.sheetName?.trim()
          if (i && s && i !== s)
            throw Error(`CSV import specifies conflicting sheet names: "${s}" (options.sheetName) vs "${i}" (anchor).`)
          let l = r(i ?? s),
            c = (0, a.DO)(o.ref)
          if (!c) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor ?? "A1"}".`)
          let { bounds: d } = c
          if (d.startRow !== d.endRow || d.startCol !== d.endCol)
            throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor ?? "A1"}".`)
          let p = (function (e, t) {
              if (!e.trim()) return []
              let n = (function (e, t) {
                let n = [],
                  a = [],
                  o = "",
                  i = !1,
                  r = () => {
                    ;(a.push(o), (o = ""))
                  },
                  s = () => {
                    ;(n.push(a), (a = []))
                  }
                for (let n = 0; n < e.length; n += 1) {
                  let a = e[n] ?? ""
                  if (i) {
                    if ('"' === a) {
                      if ('"' === e[n + 1]) {
                        ;((o += '"'), (n += 1))
                        continue
                      }
                      i = !1
                      continue
                    }
                    o += a
                    continue
                  }
                  if ('"' === a) {
                    i = !0
                    continue
                  }
                  if (a === t) {
                    r()
                    continue
                  }
                  if ("\n" === a) {
                    ;(r(), s())
                    continue
                  }
                  if ("\r" === a) {
                    ;("\n" === e[n + 1] && (n += 1), r(), s())
                    continue
                  }
                  o += a
                }
                for (r(), s(); n.length > 0;) {
                  let e = n[n.length - 1] ?? []
                  if (!(e.length > 0 && e.every((e) => "" === e))) break
                  n.pop()
                }
                return n
              })(e, t)
              if (0 === n.length) return []
              let a = n.reduce((e, t) => Math.max(e, t.length), 0)
              return 0 === a
                ? []
                : n.map((e) => {
                    if (e.length === a) return e
                    let t = e.slice()
                    for (; t.length < a;) t.push("")
                    return t
                  })
            })(e, n),
            u = p.length,
            h = u > 0 ? (p[0]?.length ?? 0) : 0
          if (0 === u || 0 === h) return { sheetName: l, values: [] }
          let m = { startRow: d.startRow, startCol: d.startCol, endRow: d.startRow + u - 1, endCol: d.startCol + h - 1 }
          return {
            sheetName: l,
            values: p,
            rangeRef: (0, a.wP)(m),
            rect: { r1: m.startRow, c1: m.startCol, r2: m.endRow, c2: m.endCol },
          }
        },
        sanitizeSheetName: r,
      },
    )
  },
  Eho4(e, t, n) {
    var a = n("dkXD")
    let o = 4 / 3
    function i(e) {
      return Math.ceil(e && e > 0 ? e : 7)
    }
    n.d(
      t,
      {},
      {
        $s: function (e) {
          return (96 * (null == e || 0 === e ? 15 : e)) / 72
        },
        AV: function (e) {
          let t = e > 0 ? e : 11
          return { padLr: Math.max(2, Math.floor(0.1 * t)), padTb: Math.max(o, Math.floor(0 * t)) }
        },
        DX: function (e) {
          let t = e.match(/\d+/)
          return t ? parseInt(t[0], 10) - 1 : 0
        },
        Ok: function (e) {
          if (null != e) return a.T[`indexed:${e}`]
        },
        PD: function (e) {
          let t = e.match(/[A-Z]+/)
          if (!t) return 0
          let n = 0
          for (let e of t[0]) n = 26 * n + (e.charCodeAt(0) - 64)
          return n - 1
        },
        R5: function (e) {
          return Number.isFinite(e ?? 0) ? ((e ?? 0) * 72) / 96 : 15
        },
        UL: function (e) {
          let t = e.replace(/^0x/i, "")
          if (8 === t.length) {
            let e = parseInt(t.slice(2, 4), 16),
              n = parseInt(t.slice(4, 6), 16),
              a = parseInt(t.slice(6, 8), 16)
            return `rgba(${e}, ${n}, ${a}, 1.000)`
          }
          return 6 === t.length ? `#${t}` : "#ffffff"
        },
        Wh: function (e, t) {
          return null == e || e <= 0 ? 64 : e * i(t)
        },
        Zp: function (e) {
          let t = ""
          for (e += 1; e;) {
            let n = (e - 1) % 26
            ;((t = String.fromCharCode(65 + n) + t), (e = Math.floor((e - n) / 26)))
          }
          return t
        },
        eJ: function (e, t) {
          return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / i(t))) / 100
        },
      },
    )
  },
  RXuq(e, t, n) {
    e.exports = n.p + "assets/da832e892441.svg"
  },
  cLvX(e, t, n) {
    e.exports = n.p + "assets/desktop-app-icon.59d4711184.png"
  },
  rUQK(e, t, n) {
    let a = [
      { id: "paragraph", command: "text paragraph normal", messageKey: "text" },
      { id: "heading1", command: "heading1 h1 heading 1", messageKey: "heading1" },
      { id: "heading2", command: "heading2 h2 heading 2", messageKey: "heading2" },
      { id: "heading3", command: "heading3 h3 heading 3", messageKey: "heading3" },
      { id: "orderedList", command: "ordered list numbered", messageKey: "orderedList" },
      { id: "unorderedList", command: "unordered list bulleted", messageKey: "unorderedList" },
    ]
    new Map(a.map((e) => [e.id, e]))
    let o = a.map((e) => e.id)
    n.d(t, {}, { DR: o, MV: () => a })
  },
  LA2j(e, t, n) {
    var a,
      o,
      i,
      r =
        (((a = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_UNSPECIFIED"),
        (a.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_LEGACY =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_LEGACY"),
        (a.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      s =
        (((o = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_UNSPECIFIED"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o),
      l =
        (((i = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_UNSPECIFIED"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i)
    n.d(
      t,
      {},
      {
        Bj: l,
        CI: { $type: "protobuf_analytics_events.v1.ChatgptConnectorsMxRecommendationEndpointResponse" },
        H9: r,
        RH: s,
        ZX: { $type: "protobuf_analytics_events.v1.ChatgptKnowledgeProductWorkspaceOnboardingEvent" },
        nT: { $type: "protobuf_analytics_events.v1.ChatgptConnectorsRecommendedOnboardingConnectClicked" },
        qo: { $type: "protobuf_analytics_events.v1.ChatgptConnectorsRecommendedOnboardingSetupLaterClicked" },
        tT: { $type: "protobuf_analytics_events.v1.ChatgptConnectorsRecommendedOnboardingShown" },
      },
    )
  },
  YnMP(e, t, n) {
    n.d(
      t,
      {},
      {
        HE: { $type: "protobuf_analytics_events.v1.ChatgptUserOnboardingForWorkspaceCompleted" },
        JY: { $type: "protobuf_analytics_events.v1.ChatgptUserOnboardingForWorkspaceStepShown" },
        R5: { $type: "protobuf_analytics_events.v1.ChatgptUserOnboardingForWorkspaceRoleSelected" },
        se: { $type: "protobuf_analytics_events.v1.ChatgptUserOnboardingForWorkspaceCodexAppCtaViewed" },
        tx: { $type: "protobuf_analytics_events.v1.ChatgptUserOnboardingForWorkspaceCodexAppCtaClicked" },
      },
    )
  },
  LpHH(e, t, n) {
    var a = n("uUv4")
    let o = {
      google: { provider: "google", pluginId: a.Q["google-drive"], actionId: "connect_google_drive" },
      microsoft: { provider: "microsoft", pluginId: a.Q.sharepoint, actionId: "connect_sharepoint" },
    }
    n.d(t, {}, { R: o })
  },
  hGHw(e, t, n) {
    var a = n("zTeN"),
      o = n("CMv2"),
      i = n("pxeg"),
      r = n("Ghh3"),
      s = n("OWtl"),
      l = n("rvFo"),
      c = n("LpHH")
    let d = (0, a.vU)(s.u, (e) => ({
      queryKey: ["workspace-member-onboarding", "recommendation", e],
      queryFn: async ({ signal: t }) => {
        var n
        return (
          (n = await r.Request.safeGet("/aip/workspace/connector-recommendation", {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: t,
          })),
          o._k.some(({ connectorId: e }) => e === n?.connector_id)
            ? c.R.google.provider
            : i.zd.some(({ connectorId: e }) => e === n?.connector_id)
              ? c.R.microsoft.provider
              : n?.mx_provider === "google" || n?.mx_provider === "microsoft"
                ? n.mx_provider
                : null
        )
      },
      retry: !1,
      staleTime: l.D.FIVE_MINUTES,
      retryOnMount: !0,
      refetchOnMount: !0,
    }))
    n.d(t, {}, { Q: d })
  },
  Pti6(e, t, n) {
    var a = n("zTeN"),
      o = n("Oj9r")
    let i = (0, a.vP)(o.GD, () => []),
      r = (0, a.un)(o.GD, ({ get: e }) => e(i).some((t) => e(t)))
    n.d(
      t,
      {},
      {
        N: function (e, t) {
          return (
            e.set(i, (e) => [...e, t]),
            () => {
              e.set(i, (e) => e.filter((e) => e !== t))
            }
          )
        },
        x: r,
      },
    )
  },
  GTpx(e, t, n) {
    var a = n("zTeN"),
      o = n("SPnB"),
      i = n("Ghh3"),
      r = n("OWtl"),
      s = n("rvFo"),
      l = n("g2p6")
    let c = (0, a.RD)(r.u, ({ scope: e }) => {
      let t = e.get(l.Sk),
        n = e.get(o.chatGptAuthenticatedUserId$)
      return {
        enabled: e.get(o.f4) && null != t,
        queryKey: d({ accountId: t, userId: n }),
        queryFn: async ({ signal: a }) => {
          if (e.get(l.Sk) !== t || e.get(o.chatGptAuthenticatedUserId$) !== n)
            throw Error("Account changed before loading personalization")
          return i.Request.safeGet("/user_system_messages", { signal: a })
        },
        staleTime: s.D.ONE_MINUTE,
      }
    })
    function d({ accountId: e, userId: t }) {
      return ["chatgpt-user-context", e, t]
    }
    ;((0, a.aP)(r.u, ({ scope: e }) => ({
      mutationKey: ["update-chatgpt-user-context"],
      mutationFn: async (t) => {
        let n = e.get(l.Sk),
          a = e.get(o.chatGptAuthenticatedUserId$),
          r = e.query.snapshot(c)
        if ((await r.cancel(), e.get(l.Sk) !== n || e.get(o.chatGptAuthenticatedUserId$) !== a))
          throw Error("Account changed before saving personalization")
        let s = await i.Request.safePatch("/user_system_messages", { requestBody: t })
        r.setData(s)
      },
    })),
      n.d(t, {}, { Pm: d, gM: c }))
  },
  wxDG(e, t, n) {
    n.d(t, { t: () => d })
    var a = n("Ghh3"),
      o = n("LhrG"),
      i = n("UxLW")
    function r(e, t, n) {
      return {
        access: null,
        conversation: n,
        createdAt: e.createdAt ?? null,
        createdBy: null,
        externalAccount: e.externalAccount ?? null,
        fileExtension: null,
        libraryFileId: t,
        mimeType: e.mimeType ?? null,
        name: e.name,
        parentDirectoryId: e.parentDirectoryId ?? null,
        sizeBytes: e.sizeBytes ?? null,
        sourceUrl: e.sourceUrl,
        updatedAt: e.updatedAt ?? null,
        updatedBy: null,
      }
    }
    async function s(e, t, n) {
      if (null == e) return null
      try {
        let o = await a.Request.safeGet("/conversation/{conversation_id}", {
          parameters: { path: { conversation_id: e } },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: n,
        })
        return (n.throwIfAborted(), { id: e, title: o.title ?? null })
      } catch {
        return (n.throwIfAborted(), null)
      }
    }
    function l(e) {
      let t = e?.display_name?.trim() || e?.email?.trim()
      return null == t ? null : { kind: "person", name: t }
    }
    function c(e) {
      return "fulfilled" === e.status ? e.value : null
    }
    function d({ accountId: e, source: t, userId: n }) {
      return {
        enabled: null != e,
        queryFn: ({ signal: d }) => {
          if (null == e) throw Error("Cannot fetch file info without an account")
          return (async function (e, t, n, d) {
            if ("library" === e.identity.type) {
              let n = e.identity.libraryFileId
              return null != (0, i.AG)(n)
                ? r(e, n, await s(e.conversationId, t, d))
                : (async function (e, t, n, i) {
                    var r, d, p
                    let u = await (0, o.F)(t, n, i)
                    i.throwIfAborted()
                    let h = u.access_kind,
                      m = e.conversationId ?? u.origination_thread_id,
                      g = { "ChatGPT-Account-ID": n },
                      [f, _, b, y] = await Promise.allSettled([
                        "mounted" === h
                          ? Promise.resolve(null)
                          : a.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: i,
                            }),
                        "mounted" === h
                          ? Promise.resolve(null)
                          : a.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: i,
                            }),
                        "shared" === h
                          ? a.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: i,
                            })
                          : Promise.resolve(null),
                        s(m, n, i),
                      ])
                    i.throwIfAborted()
                    let x = c(f),
                      C = c(_)?.items[0] ?? null,
                      w = c(b),
                      v = l(x?.owner ?? null)
                    return {
                      access:
                        ((r = h),
                        (d = x),
                        (p = w?.can_edit),
                        null != d &&
                        d.viewer.principal.principal_type === d.owner.principal.principal_type &&
                        d.viewer.principal.principal_id === d.owner.principal.principal_id
                          ? "owner"
                          : d?.viewer.role_id.includes("editor") || !0 === p
                            ? "editor"
                            : "owned" === r
                              ? "owner"
                              : "shared" !== r || (null == d && null == p)
                                ? null
                                : "viewer"),
                      conversation: c(y),
                      createdAt: u.record_creation_time ?? u.file_upload_time ?? e.createdAt ?? null,
                      createdBy: v,
                      externalAccount: u.external_account ?? e.externalAccount ?? null,
                      fileExtension: u.file_extension ?? null,
                      libraryFileMetadata: "image" === u.library_file_category ? u : void 0,
                      libraryFileId: t,
                      mimeType: u.mime_type ?? e.mimeType ?? null,
                      name: ("kind" in u ? u.name : u.file_name) || e.name,
                      parentDirectoryId: ("kind" in u ? u.parent_directory_id : u.directory_id) ?? null,
                      sizeBytes: u.file_size_bytes ?? e.sizeBytes ?? null,
                      sourceUrl: u.cloud_doc_url ?? e.sourceUrl,
                      updatedAt: C?.version_created_at ?? u.updated_at ?? u.file_upload_time ?? e.updatedAt ?? null,
                      updatedBy: (function (e, t, n) {
                        let a = e?.version_provenance
                        if (null == a) return null
                        if ("agent" === a.actor) return { kind: "chatgpt" }
                        let o = a.actor_id?.trim()
                        if (null != o && null != t) {
                          if (o === t.owner.principal.principal_id) return l(t.owner)
                          if (o === t.viewer.principal.principal_id) return l(t.viewer) ?? { kind: "you" }
                        }
                        let i = a.actor_display_name?.trim() || a.actor_email?.trim()
                        return null != i
                          ? { kind: "person", name: i }
                          : "create" === a.action && null != n
                            ? n
                            : { kind: "collaborator" }
                      })(C, x, v),
                    }
                  })(e, n, t, d)
            }
            let [p, u] = await Promise.all([
              a.Request.safeGet("/files/{file_id}", {
                parameters: { path: { file_id: e.identity.fileId }, query: { gizmo_id: e.gizmoId } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                signal: d,
              }).catch((t) => {
                if ((d.throwIfAborted(), null == e.sourceUrl && null == e.externalAccount)) throw t
                return null
              }),
              s(e.conversationId, t, d),
            ])
            if ((d.throwIfAborted(), null == p)) return r(e, null, u)
            let h = null != n && p.owner_id === n,
              m = h ? { kind: "you" } : null
            return {
              access: h ? "owner" : "viewer",
              conversation: u,
              createdAt: p.creation_time,
              createdBy: m,
              externalAccount: e.externalAccount ?? null,
              fileExtension: p.file_extension,
              libraryFileId: null,
              mimeType: p.mime_type ?? e.mimeType ?? null,
              name: p.name || e.name,
              parentDirectoryId: e.parentDirectoryId ?? null,
              sizeBytes: p.size ?? e.sizeBytes ?? null,
              sourceUrl: e.sourceUrl,
              updatedAt: p.ready_time ?? p.creation_time,
              updatedBy: m,
            }
          })(t, e, n, d)
        },
        queryKey: ["chatgpt-file-preview-file-info", e, n, t],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 3e4,
      }
    }
  },
  UBr4(e, t, n) {
    n.d(t, { h: () => j })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("bqtn"),
      r = n("Bbed"),
      s = n("IhMz"),
      l = n("qsUv"),
      c = n("Pq1H"),
      d = n("zTeN"),
      p = n("oyxz"),
      u = n("SPnB"),
      h = n("UxN3"),
      m = n("OWtl"),
      g = n("Vc45"),
      f = n("wxDG")
    function _(e) {
      let t,
        n,
        r,
        c,
        u,
        f,
        _ = (0, o.c)(12),
        { ownerId: y, source: x } = e,
        C = (0, d.gh)(m.u)
      return (
        _[0] !== x ? ((t = (0, a.jsx)(b, { source: x })), (_[0] = x), (_[1] = t)) : (t = _[1]),
        _[2] !== y || _[3] !== C
          ? ((n = () => {
              ;(0, g.hj)(C, y, "file-info")
            }),
            (_[2] = y),
            (_[3] = C),
            (_[4] = n))
          : (n = _[4]),
        _[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(i.ms.ItemIcon, {
              children: (0, a.jsx)(h.b5, { icon: { assets: { 16: s.c, 20: l.b } } }),
            })),
            (c = (0, a.jsx)(p.A, {
              id: "chatgptFilePreview.fileInfo.menuItem",
              defaultMessage: "File info",
              description:
                "Short action label in a file preview title menu. Selecting it opens a panel with metadata for the current file.",
            })),
            (_[5] = r),
            (_[6] = c))
          : ((r = _[5]), (c = _[6])),
        _[7] !== n
          ? ((u = (0, a.jsxs)(i.ms.Item, { onSelect: n, children: [r, c] })), (_[7] = n), (_[8] = u))
          : (u = _[8]),
        _[9] !== t || _[10] !== u
          ? ((f = (0, a.jsxs)(a.Fragment, { children: [t, u] })), (_[9] = t), (_[10] = u), (_[11] = f))
          : (f = _[11]),
        f
      )
    }
    function b(e) {
      let t,
        n = (0, o.c)(4),
        { source: a } = e,
        i = (0, d.gh)(m.u),
        r = (0, d.Ul)(u.chatGptAuthenticatedAccountId$),
        s = (0, d.Ul)(u.chatGptAuthenticatedUserId$)
      return (
        n[0] !== r || n[1] !== a || n[2] !== s
          ? ((t = (0, f.t)({ accountId: r, source: a, userId: s })), (n[0] = r), (n[1] = a), (n[2] = s), (n[3] = t))
          : (t = n[3]),
        (0, c.f)(t, i.queryClient),
        null
      )
    }
    var y = n("aQcf"),
      x = n("bv3b"),
      C = n("E8Sp"),
      w = n("xmjg"),
      v = n("O8Pw"),
      k = n("tl2n")
    function A(e) {
      let t,
        n,
        r,
        s,
        l,
        c = (0, o.c)(16),
        { libraryFileId: u, disabled: g, onSelect: f } = e,
        _ = (0, d.gh)(m.u),
        { pathname: b } = (0, d.Ul)(C.gM),
        A = (0, v.Tq)(),
        S = (0, v.o0)()
      return !(0, d.Ul)(k.$7) ||
        "/library" === b ||
        b?.startsWith("/library/") ||
        "/space" === b ||
        b?.startsWith("/space/")
        ? null
        : (c[0] !== S ? ((t = S({ 16: y.Y, 20: x.V }, { 16: w.Z, 20: w.e })), (c[0] = S), (c[1] = t)) : (t = c[1]),
          c[2] !== t ? ((n = (0, a.jsx)(h.b5, { icon: { assets: t } })), (c[2] = t), (c[3] = n)) : (n = c[3]),
          c[4] !== u || c[5] !== S || c[6] !== f || c[7] !== _
            ? ((r = () => {
                ;(f?.(),
                  (0, C.oo)(_, S(`/library/file/${encodeURIComponent(u)}`, `/space/file/${encodeURIComponent(u)}`)))
              }),
              (c[4] = u),
              (c[5] = S),
              (c[6] = f),
              (c[7] = _),
              (c[8] = r))
            : (r = c[8]),
          c[9] !== A
            ? ((s = A
                ? (0, a.jsx)(p.A, {
                    id: "artifactViewer.openInLibrary.space",
                    defaultMessage: "Open in Space",
                    description:
                      "Artifact title menu action for opening the saved artifact in Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                  })
                : (0, a.jsx)(p.A, {
                    id: "artifactViewer.openInLibrary",
                    defaultMessage: "Open in Library",
                    description: "Artifact title menu action for opening the saved artifact in Library",
                  })),
              (c[9] = A),
              (c[10] = s))
            : (s = c[10]),
          c[11] !== g || c[12] !== n || c[13] !== r || c[14] !== s
            ? ((l = (0, a.jsx)(i.ms.Item, { disabled: g, leftIcon: n, onSelect: r, children: s })),
              (c[11] = g),
              (c[12] = n),
              (c[13] = r),
              (c[14] = s),
              (c[15] = l))
            : (l = c[15]),
          l)
    }
    let S = (0, r._)(async () => (await n.e(337604).then(n.bind(n, "vavQ"))).LibraryFilePreviewVersionHistory)
    function j(e) {
      let t,
        n,
        r,
        s,
        l,
        c,
        d = (0, o.c)(23),
        {
          children: p,
          favoriteAction: u,
          file: h,
          fileInfoOwnerId: m,
          fileInfoSource: f,
          libraryFileId: b,
          openInLibraryDisabled: y,
          onOpenLibrary: x,
          versionHistoryAction: C,
        } = e,
        w = b ?? h?.libraryFileId
      d[0] !== m || d[1] !== f
        ? ((t = null == f ? void 0 : (m ?? (0, g.xd)(f))), (d[0] = m), (d[1] = f), (d[2] = t))
        : (t = d[2])
      let v = t,
        k = null != v || null != w || null != u || null != C || null != h
      return k || null != p
        ? (d[3] !== v || d[4] !== f
            ? ((n = null == v || null == f ? null : (0, a.jsx)(_, { ownerId: v, source: f })),
              (d[3] = v),
              (d[4] = f),
              (d[5] = n))
            : (n = d[5]),
          d[6] !== w || d[7] !== x || d[8] !== y
            ? ((r = null == w ? null : (0, a.jsx)(A, { disabled: y, libraryFileId: w, onSelect: x })),
              (d[6] = w),
              (d[7] = x),
              (d[8] = y),
              (d[9] = r))
            : (r = d[9]),
          d[10] !== h || d[11] !== C
            ? ((s = C ?? (null == h ? null : (0, a.jsx)(S, { file: h }))), (d[10] = h), (d[11] = C), (d[12] = s))
            : (s = d[12]),
          d[13] !== p || d[14] !== k
            ? ((l = k && null != p ? (0, a.jsx)(i.ms.Separator, { className: "last:hidden" }) : null),
              (d[13] = p),
              (d[14] = k),
              (d[15] = l))
            : (l = d[15]),
          d[16] !== p || d[17] !== u || d[18] !== n || d[19] !== r || d[20] !== s || d[21] !== l
            ? ((c = (0, a.jsxs)(a.Fragment, { children: [n, r, u, s, l, p] })),
              (d[16] = p),
              (d[17] = u),
              (d[18] = n),
              (d[19] = r),
              (d[20] = s),
              (d[21] = l),
              (d[22] = c))
            : (c = d[22]),
          c)
        : null
    }
  },
  jVlT(e, t, n) {
    var a = n("ASxG"),
      o = n("qhRx")
    let i = "oai/apps/paidImageHandoffReplay"
    function r() {
      let e = (0, o.getBrowserChatGptAuthSnapshot)(),
        t = null == e ? null : (0, o.readChatGptTokenClaims)(e.accessToken)?.accountId
      return !e?.userId || !t || e.accountId !== t || (0, o.isBrowserWorkspaceSwitchPending)()
        ? null
        : { userId: e.userId, accountId: t }
    }
    ;(a.object({
      createdAtMs: a.number(),
      prompt: a.string().min(1).max(9e3),
      userId: a.string().min(1),
      accountId: a.string().min(1),
    }),
      n.d(
        t,
        {},
        {
          QT: function (e, t = r()) {
            let n = r()
            if (!n || !t || n.userId !== t.userId || n.accountId !== t.accountId || !e.trim()) return !1
            try {
              return (
                sessionStorage.setItem(
                  i,
                  JSON.stringify({ createdAtMs: Date.now(), prompt: e, userId: n.userId, accountId: n.accountId }),
                ),
                !0
              )
            } catch {
              return !1
            }
          },
          Wh: "paid_image_handoff_carryover",
          hP: r,
          y5: function () {
            try {
              sessionStorage.removeItem(i)
            } catch {}
          },
        },
      ))
  },
  O9Pc(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { k: a })
  },
  L6Md(e, t, n) {
    n.d(
      t,
      {},
      {
        $: function (e, t) {
          let { start: n, end: a } = t,
            o = [],
            i = [],
            r = [...e.matchAll(/\\(?:[a-zA-Z]+|[^])|[{}]/g)]
          for (let e of r) {
            let t = e.index + e[0].length
            if (e[0].startsWith("\\") && e.index < a && t > n) ((n = Math.min(n, e.index)), (a = Math.max(a, t)))
            else if ("{" === e[0]) i.push(e.index)
            else if ("}" === e[0]) {
              let e = i.pop()
              null != e && o.push({ start: e, end: t })
            }
          }
          for (let t of r) {
            if (!t[0].startsWith("\\") || t.index >= a || t.index + t[0].length <= n) continue
            let i = t.index + t[0].length,
              r = 0
            if (
              (/^\\(?:[dt]?frac|binom|overset|underset)$/.test(t[0])
                ? (r = 2)
                : /^\\(?:sqrt|mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathcal|mathbb|mathfrak|mathnormal|mathscr|operatorname|text|textrm|textbf|textit|vec|hat|widehat|bar|overline|underline|tilde|widetilde|dot|ddot)$/.test(
                    t[0],
                  ) && (r = 1),
              "\\sqrt" === t[0] && "[" === e[i])
            ) {
              let t = e.indexOf("]", i)
              t >= 0 && (i = t + 1)
            }
            for (let t = r; t > 0; t -= 1) {
              for (; /\s/.test(e[i] ?? "");) i += 1
              i =
                o.find((e) => e.start === i)?.end ??
                i + (e.slice(i).match(/^(?:\\[a-zA-Z]+|\\[^]|[^])/u)?.[0].length ?? 0)
            }
            a = Math.max(a, i)
          }
          for (let e of o)
            ((n <= e.start && a > e.start && a < e.end) || (n > e.start && n < e.end && a >= e.end)) &&
              ((n = Math.min(n, e.start)), (a = Math.max(a, e.end)))
          return { start: n, end: a }
        },
      },
    )
  },
  KbPm(e, t, n) {
    var a = n("zTeN"),
      o = n("Ghh3"),
      i = n("OWtl")
    let r = (0, a.vU)(i.u, (e) => ({
      queryKey: ["tpp-onboarding-workspace-role", e?.accountId, e?.userId],
      enabled: null != e,
      staleTime: 6e4,
      retry: !1,
      queryFn: async ({ signal: t }) => {
        if (null == e) return null
        let n = await o.Request.safeGet("/accounts/{account_id}/users/{user_id}/onboarding_information", {
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
          parameters: { path: { account_id: e.accountId, user_id: e.userId } },
          signal: t,
        })
        return n.role?.trim() || null
      },
    }))
    n.d(t, {}, { o: r })
  },
  LhrG(e, t, n) {
    var a = n("tFxw"),
      o = n("Ghh3"),
      i = n("eShZ"),
      r = n("jgEm"),
      s = n("MExO")
    n.d(
      t,
      {},
      {
        F: async function (e, t, n) {
          let l,
            c = (0, s.CN)(e)
          if (null != c) {
            n.throwIfAborted()
            let i = await o.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
              parameters: { path: { provider_key: c.provider } },
              requestBody: { file_id: e },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
              signal: n,
            })
            n.throwIfAborted()
            let r = (0, s.CN)(i.file_id)
            if (
              i.file_id !== e &&
              ((0, a.YO)(e)?.encodedAccountKey != null ||
                r?.provider !== c.provider ||
                r.nativeFileId !== c.nativeFileId)
            )
              throw Error("Provider file metadata does not match the requested file")
            return {
              id: i.file_id,
              kind: "file",
              name: i.name,
              parent_directory_id: null,
              access_kind: "mounted",
              mime_type: i.mime_type,
              file_size_bytes: i.file_size_bytes,
            }
          }
          let d = {
            parameters: { path: { library_file_id: e } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [403, 404],
            signal: n,
          }
          if ((n.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
            let t = await o.Request.safeGet("/files/library/files/{library_file_id}/node", d)
            return (n.throwIfAborted(), (0, r.U9)(t, e))
          }
          try {
            let e = await o.Request.safeGet("/files/library/files/{library_file_id}", d)
            return (n.throwIfAborted(), e)
          } catch (e) {
            if (!(e instanceof i.fk) || (403 !== e.status && 404 !== e.status)) throw e
          }
          n.throwIfAborted()
          try {
            if (
              ((l = await o.Request.safeGet("/files/library/files/{library_file_id}/node", d)),
              n.throwIfAborted(),
              "owned" === l.access_kind && "image" === l.library_file_category && null == l.library_artifact_type)
            ) {
              let e = await o.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                ...d,
                parameters: { ...d.parameters, query: { limit: 1 } },
              })
              return (
                n.throwIfAborted(),
                { ...l, library_artifact_type: e.items[0]?.library_artifact_type ?? l.library_artifact_type }
              )
            }
            return (0, r.U9)(l, e)
          } catch (s) {
            if (!(s instanceof i.fk) || (403 !== s.status && 404 !== s.status)) throw s
            let t = null,
              a = new Set()
            do {
              n.throwIfAborted()
              let i = await o.Request.safePost("/files/library", {
                requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
                additionalHeaders: d.additionalHeaders,
                expectedErrorStatuses: [403, 404],
                signal: n,
              })
              n.throwIfAborted()
              let r = i.items.find((t) => t.id === e)
              if (null != r) return r
              if (null == (t = i.cursor ?? null) || a.has(t)) break
              a.add(t)
            } while (null != t)
            if (null != l) return (0, r.U9)(l, e)
            throw s
          }
        },
      },
    )
  },
  aSgO(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("LVea"),
      r = n("zTeN"),
      s = n("oyxz"),
      l = n("ygO2"),
      c = n("JNtf"),
      d = n("ZtSy"),
      p = n("GO7r"),
      u = n("vkjh")
    n("mmXj")
    var h = n("yGJW"),
      m = n("OWtl")
    function g(e) {
      return e.preventDefault()
    }
    function f(e) {
      let t,
        n,
        i = (0, o.c)(3),
        { country: r } = e
      i[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { learnMoreLink: _ }), (i[0] = t)) : (t = i[0])
      let l = t
      return (
        i[1] !== r
          ? ((n =
              "CA" === r
                ? (0, a.jsx)(s.A, {
                    id: "chatgpt.new-onboarding.chatgpt-review-training-sensitive-info-disclaimer",
                    defaultMessage:
                      "ChatGPT can make mistakes. Don't share sensitive info. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>",
                    description:
                      "Disclaimer above Continue on the final ChatGPT new-user onboarding screen in Canada. Warns users about mistakes, sensitive information, and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.",
                    values: { learnMoreLink: l.learnMoreLink },
                  })
                : (0, a.jsx)(s.A, {
                    id: "chatgpt.new-onboarding.chatgpt-review-training-disclaimer",
                    defaultMessage:
                      "ChatGPT can make mistakes. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>",
                    description:
                      "Disclaimer above Continue on the final ChatGPT new-user onboarding screen outside Canada. Warns users about mistakes and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.",
                    values: { learnMoreLink: l.learnMoreLink },
                  })),
            (i[1] = r),
            (i[2] = n))
          : (n = i[2]),
        n
      )
    }
    function _(e) {
      return (0, a.jsx)(
        d.G,
        {
          className: "underline",
          href: "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance",
          initiator: "open_in_browser_bridge",
          isBrowserEnabled: !1,
          openTarget: "external-browser",
          children: e,
        },
        "learn-more",
      )
    }
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n,
            _,
            b,
            y,
            x,
            C,
            w,
            v,
            k,
            A,
            S,
            j = (0, o.c)(28),
            { country: N, isContinuing: O, onContinue: E, onShown: M } = e,
            P = void 0 !== O && O,
            T = (0, r.gh)(m.u)
          j[0] !== T
            ? ((t = {
                termsLink: (e) =>
                  (0, a.jsx)(
                    d.G,
                    {
                      className: "underline",
                      href: "https://openai.com/terms",
                      initiator: "open_in_browser_bridge",
                      isBrowserEnabled: !1,
                      openTarget: "external-browser",
                      onClick: () =>
                        T.get(h.YV).logProductEvent(i.CodexChatgptOnboardingLegalLinkClicked, {
                          link: i.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_TERMS,
                        }),
                      children: e,
                    },
                    "terms",
                  ),
                privacyLink: (e) =>
                  (0, a.jsx)(
                    d.G,
                    {
                      className: "underline",
                      href: "https://openai.com/privacy",
                      initiator: "open_in_browser_bridge",
                      isBrowserEnabled: !1,
                      openTarget: "external-browser",
                      onClick: () =>
                        T.get(h.YV).logProductEvent(i.CodexChatgptOnboardingLegalLinkClicked, {
                          link: i.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_PRIVACY,
                        }),
                      children: e,
                    },
                    "privacy",
                  ),
                koreaAddendumLink: (e) =>
                  (0, a.jsx)(
                    d.G,
                    {
                      className: "underline",
                      href: "https://openai.com/ko/policies/kr-privacy-policy-addendum",
                      initiator: "open_in_browser_bridge",
                      isBrowserEnabled: !1,
                      openTarget: "external-browser",
                      onClick: () =>
                        T.get(h.YV).logProductEvent(i.CodexChatgptOnboardingLegalLinkClicked, {
                          link: i.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_KOREA_ADDENDUM,
                        }),
                      children: e,
                    },
                    "korea-addendum",
                  ),
              }),
              (j[0] = T),
              (j[1] = t))
            : (t = j[1])
          let I = t
          return (
            j[2] !== M ? ((n = { onOpenAutoFocus: M, onEscapeKeyDown: g }), (j[2] = M), (j[3] = n)) : (n = j[3]),
            j[4] !== E
              ? ((_ = (e) => {
                  ;(e.preventDefault(), E())
                }),
                (j[4] = E),
                (j[5] = _))
              : (_ = j[5]),
            j[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, a.jsx)("div", {
                  className: "flex size-9 items-center justify-center",
                  children: (0, a.jsx)(p.IJp, {}),
                })),
                (j[6] = b))
              : (b = j[6]),
            j[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-y-4 text-center select-none max-sm:flex-1",
                  children: [
                    b,
                    (0, a.jsx)(c.L3, {
                      className: "text-3xl leading-9 font-normal",
                      children: (0, a.jsx)(s.A, {
                        id: "chatgpt.new-onboarding.all-done-2",
                        defaultMessage: "You're all set",
                        description: "Text shown in the new user onboarding after the last step.",
                      }),
                    }),
                  ],
                })),
                (j[7] = y))
              : (y = j[7]),
            j[8] !== N
              ? ((x = (0, a.jsx)(c.rr, {
                  className: "text-center text-base leading-6 text-secondary",
                  children: (0, a.jsx)(f, { country: N }),
                })),
                (j[8] = N),
                (j[9] = x))
              : (x = j[9]),
            j[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, a.jsx)(s.A, {
                  id: "chatgpt.new-onboarding.continue",
                  defaultMessage: "Continue",
                  description:
                    "Label of a button in the new user onboarding that concludes the onboarding flow and lets user start to use chatgpt.",
                })),
                (j[10] = C))
              : (C = j[10]),
            j[11] !== P
              ? ((w = (0, a.jsx)(l.$, {
                  color: "primary",
                  loading: P,
                  size: "beaconAction",
                  type: "submit",
                  children: C,
                })),
                (j[11] = P),
                (j[12] = w))
              : (w = j[12]),
            j[13] !== N || j[14] !== I.koreaAddendumLink || j[15] !== I.privacyLink || j[16] !== I.termsLink
              ? ((v = (0, a.jsx)("p", {
                  className: "text-center text-sm text-secondary",
                  children:
                    "KR" === N
                      ? (0, a.jsx)(s.A, {
                          id: "thread.agreeToTermsNoAuthKorea-may-06",
                          defaultMessage:
                            "By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink> and its <koreaAddendumLink>Korea addendum</koreaAddendumLink>.",
                          description:
                            "Legal notice below Continue on the final ChatGPT new-user onboarding screen in Korea. Each rich-text tag surrounds a link to the named policy.",
                          values: {
                            termsLink: I.termsLink,
                            privacyLink: I.privacyLink,
                            koreaAddendumLink: I.koreaAddendumLink,
                          },
                        })
                      : (0, a.jsx)(s.A, {
                          id: "thread.agreeToTermsNoAuth-may-06",
                          defaultMessage:
                            "By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink>.",
                          description:
                            "Legal notice below Continue on the final ChatGPT new-user onboarding screen. Each rich-text tag surrounds a link to the named policy.",
                          values: { termsLink: I.termsLink, privacyLink: I.privacyLink },
                        }),
                })),
                (j[13] = N),
                (j[14] = I.koreaAddendumLink),
                (j[15] = I.privacyLink),
                (j[16] = I.termsLink),
                (j[17] = v))
              : (v = j[17]),
            j[18] !== v || j[19] !== x || j[20] !== w
              ? ((k = (0, a.jsxs)("div", {
                  className: "flex w-full flex-col gap-y-4 max-sm:px-6",
                  children: [x, w, v],
                })),
                (j[18] = v),
                (j[19] = x),
                (j[20] = w),
                (j[21] = k))
              : (k = j[21]),
            j[22] !== k || j[23] !== _
              ? ((A = (0, a.jsx)("div", {
                  className: "flex h-full flex-col overflow-y-auto",
                  children: (0, a.jsxs)("form", {
                    className:
                      "m-auto flex w-full shrink-0 flex-col items-center justify-between py-4 max-sm:min-h-full sm:w-80 sm:justify-center sm:gap-y-12",
                    onSubmit: _,
                    children: [y, k],
                  }),
                })),
                (j[22] = k),
                (j[23] = _),
                (j[24] = A))
              : (A = j[24]),
            j[25] !== A || j[26] !== n
              ? ((S = (0, a.jsx)(u.d, {
                  claim: "fullscreen_onboarding",
                  children: (0, a.jsx)(c.lG, {
                    open: !0,
                    showDialogClose: !1,
                    shouldIgnoreClickOutside: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    contentClassName: "h-full w-full bg-surface text-default",
                    contentProps: n,
                    children: A,
                  }),
                })),
                (j[25] = A),
                (j[26] = n),
                (j[27] = S))
              : (S = j[27]),
            S
          )
        },
      },
    )
  },
  SXZ1(e, t, n) {
    var a = n("mBJV"),
      o = n("LVea"),
      i = n("zTeN"),
      r = n("Ghh3"),
      s = n("g2p6"),
      l = n("yGJW"),
      c = n("OWtl"),
      d = n("ZhRn"),
      p = n("WFY2")
    let u = "oai/apps/hasSeenOnboardingFlow",
      h = (0, i.bD)(c.u, (e) => null),
      m = (0, i.i1)(c.u, (e, { get: t }) => {
        if (null == e) return "loading"
        let n = t(h, e)
        if ("complete" === n) return "ineligible"
        if ("viewing" === n) return "eligible"
        let { data: a, isError: o } = t(s.s6)
        return o
          ? "ineligible"
          : null == a
            ? "loading"
            : a.eligibleAnnouncements?.includes(u)
              ? "eligible"
              : "ineligible"
      })
    async function g(e, t) {
      try {
        if (e.get(s.Sk) !== t) return
        await r.Request.safePost("/settings/announcement_viewed", {
          parameters: { query: { announcement_id: u } },
          additionalHeaders: { "ChatGPT-Account-ID": t },
        })
      } catch {
        p.v.warning("Failed to mark ChatGPT onboarding as viewed")
      }
    }
    n.d(
      t,
      {},
      {
        S3: m,
        Wu: function (e, t) {
          if (e.get(s.Sk) !== t || "viewing" !== e.get(h, t)) return
          ;(e.set(h, t, "complete"), (0, d.TV)("oai-scao", void 0), (0, d.TV)("oai-aytd-user", void 0))
          let n = e.get(l.YV)
          ;(n.logProductEvent(o.CodexChatgptOnboardingLifecycle, {
            action: o.CodexChatgptOnboardingLifecycleAction.CODEX_CHATGPT_ONBOARDING_LIFECYCLE_ACTION_ENDED,
            closeOnboardingModal: !0,
            isFinalStep: !0,
            markAsDone: !0,
            skipLifecycleLogging: !1,
            stepIndex: 0,
            userInfoReady: !0,
          }),
            n.logProductEvent(o.CodexChatgptOnboardingLifecycle, {
              action: o.CodexChatgptOnboardingLifecycleAction.CODEX_CHATGPT_ONBOARDING_LIFECYCLE_ACTION_FINISHED,
            }),
            g(e, t))
        },
        cA: function (e, t, { replay: n = !1, showWrappingUp: o = !0 } = {}) {
          e.get(s.Sk) === t &&
            (n || null == e.get(h, t)) &&
            (e.set(h, t, "viewing"),
            (0, l.yy)(e, a.kKj, {
              eventId: "new_user_onboarding_flow_modal_shown",
              type: "UPSELL_OR_MODAL_TYPE_CUSTOM_NUX_MODAL",
              flowType: "new_user_onboarding",
            }),
            o && (0, l.yy)(e, a.tIr, {}),
            g(e, t))
        },
      },
    )
  },
  SLig(e, t, n) {
    n.d(t, { W: () => o })
    var a = n("a6v3")
    function o(e) {
      let t = e ? (0, a.$)() : "",
        n = e && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
      return !t.includes("Mac OS X") || /iPad|iPhone|iPod/.test(t) || n
        ? /Windows NT|Windows_NT/.test(t)
          ? {
              platform: "windows",
              url: "https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi",
            }
          : { platform: "other", url: "https://chatgpt.com/download" }
        : { platform: "macOS", url: "https://persistent.oaistatic.com/codex-app-prod/ChatGPTInstaller.dmg" }
    }
  },
  qiCZ(e, t, n) {
    var a = n("zTeN")
    n.d(
      t,
      {},
      {
        n: function (e, t) {
          return (0, a.T1)(e, (e, { scope: n, signal: a, derived: o }) => {
            let i = a(({ scope: e }) => ({
                answers: t.initialAnswers,
                error: null,
                status: "active",
                step: "function" == typeof t.initialStep ? t.initialStep(e) : t.initialStep,
              })),
              r = o((e, { scope: n }) => t.getContext(n, e(i).answers))
            return {
              definition: t,
              state$: i,
              context$: r,
              advance: async function (e, a, o) {
                if (o.aborted || "active" !== e.status || i.get() !== e) return
                let r = { ...e, error: null, status: "pending" }
                i.set(r)
                let s = () => {
                  i.get() === r && i.set({ ...e, error: null })
                }
                o.addEventListener("abort", s, { once: !0 })
                try {
                  if (o.aborted) return void s()
                  let l = { ...e.answers, ...a },
                    c = t.getContext(n, l),
                    d = t.steps[e.step].next,
                    p = "function" == typeof d ? await d(c, o, n) : d
                  if (o.aborted || i.get() !== r) return
                  if ((t.onAdvance?.(n, c, e.step, p), "complete" === p)) {
                    if ((await t.onComplete(n, c, o), o.aborted || i.get() !== r)) return
                    i.set({ answers: l, error: null, status: "complete", step: null })
                  } else i.set({ answers: l, error: null, status: "active", step: p })
                } catch (t) {
                  o.aborted ||
                    i.get() !== r ||
                    i.set({ ...e, error: t instanceof Error ? t : Error("Onboarding transition failed", { cause: t }) })
                } finally {
                  o.removeEventListener("abort", s)
                }
              },
            }
          })
        },
      },
    )
  },
  Fcwd(e, t, n) {
    var a = n("LA2j"),
      o = n("YnMP"),
      i = n("zTeN"),
      r = n("Ghh3"),
      s = n("g2p6"),
      l = n("KbPm")
    n("AGHv")
    var c = n("yGJW")
    n("OMIV")
    var d = n("idGD"),
      p = n("wP9i")
    let u = (0, i.vP)(p.E, "idle")
    n.d(
      t,
      {},
      {
        R: async function (e, t, n) {
          let a = new AbortController(),
            o = a.signal,
            i = e.watch((e) => {
              ;(0, d.oA)(e, t) || a.abort()
            }),
            s = e.query.snapshot(l.o, t)
          try {
            ;(o.throwIfAborted(),
              await s.cancel(),
              o.throwIfAborted(),
              await r.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                parameters: { path: { account_id: t.accountId, user_id: t.userId } },
                requestBody: { onboarding_information: { role: n, departments: [] } },
                additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                signal: o,
              }),
              o.throwIfAborted(),
              await s.cancel(),
              o.throwIfAborted(),
              s.setData(n))
          } finally {
            i()
          }
        },
        x: async function (e, { identity: t, planType: n }) {
          if (!(0, d.oA)(e, t) || "pending" === e.get(u)) return !1
          e.set(u, "pending")
          let i = new AbortController(),
            r = e.watch((e) => {
              ;(0, d.oA)(e, t) || i.abort()
            })
          ;((0, c.yy)(e, o.HE, { productSurface: "edu" === n ? "chatgpt_for_education" : void 0 }),
            (0, c.yy)(e, a.ZX, {
              onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
              action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED",
            }))
          try {
            await (0, s.hs)(e, t.accountId, "oai/apps/hasSeenOnboarding", { userId: t.userId, signal: i.signal })
          } catch {
          } finally {
            r()
          }
          let l = !i.signal.aborted && (0, d.oA)(e, t)
          return (l && (0, d.Jl)(e, t), e.set(u, l ? "complete" : "idle"), l)
        },
      },
    )
  },
  wP9i(e, t, n) {
    var a = n("zTeN"),
      o = n("OWtl")
    let i = (0, a.z8)("WorkspaceMemberScope", {
      parent: o.u,
      key: ({ identity: e }) => JSON.stringify([e.accountId, e.userId]),
    })
    n.d(t, {}, { E: i })
  },
  bMLJ(e, t, n) {
    var a = n("Qgfj"),
      o = n("jE6S")
    let i = Object.entries(
        (0, a.YK)({
          internal_medicine: {
            id: "onboarding.health_department.internal_medicine",
            defaultMessage: "Internal Medicine",
            description: "Internal Medicine (General Medicine/Hospital Medicine).",
          },
          family_medicine_primary_care: {
            id: "onboarding.health_department.family_medicine_primary_care",
            defaultMessage: "Family Medicine / Primary Care",
            description: "Family Medicine / Primary Care.",
          },
          emergency_medicine: {
            id: "onboarding.health_department.emergency_medicine",
            defaultMessage: "Emergency Medicine",
            description: "Emergency Medicine.",
          },
          pediatrics: {
            id: "onboarding.health_department.pediatrics",
            defaultMessage: "Pediatrics",
            description: "Pediatrics (General Pediatrics).",
          },
          obstetrics_gynecology: {
            id: "onboarding.health_department.obstetrics_gynecology",
            defaultMessage: "Obstetrics & Gynecology",
            description: "Obstetrics & Gynecology (OB/GYN).",
          },
          general_surgery: {
            id: "onboarding.health_department.general_surgery",
            defaultMessage: "General Surgery",
            description: "General Surgery and subspecialties.",
          },
          orthopedic_surgery: {
            id: "onboarding.health_department.orthopedic_surgery",
            defaultMessage: "Orthopedic Surgery",
            description: "Orthopedic Surgery.",
          },
          cardiology: {
            id: "onboarding.health_department.cardiology",
            defaultMessage: "Cardiology",
            description: "Cardiology.",
          },
          neurology: {
            id: "onboarding.health_department.neurology",
            defaultMessage: "Neurology",
            description: "Neurology.",
          },
          psychiatry_behavioral_health: {
            id: "onboarding.health_department.psychiatry_behavioral_health",
            defaultMessage: "Psychiatry / Behavioral Health",
            description: "Psychiatry / Behavioral Health.",
          },
          oncology_hematology: {
            id: "onboarding.health_department.oncology_hematology",
            defaultMessage: "Oncology / Hematology",
            description: "Oncology / Hematology.",
          },
          anesthesiology: {
            id: "onboarding.health_department.anesthesiology",
            defaultMessage: "Anesthesiology",
            description: "Anesthesiology.",
          },
          radiology_imaging: {
            id: "onboarding.health_department.radiology_imaging",
            defaultMessage: "Radiology / Imaging",
            description: "Radiology / Imaging.",
          },
          pathology_laboratory_medicine: {
            id: "onboarding.health_department.pathology_laboratory_medicine",
            defaultMessage: "Pathology / Laboratory Medicine",
            description: "Pathology / Laboratory Medicine.",
          },
          critical_care: {
            id: "onboarding.health_department.critical_care",
            defaultMessage: "Critical Care",
            description: "Critical Care (ICU).",
          },
          emergency_department: {
            id: "onboarding.health_department.emergency_department",
            defaultMessage: "Emergency Department",
            description: "Emergency Department (ED).",
          },
          intensive_care_unit: {
            id: "onboarding.health_department.intensive_care_unit",
            defaultMessage: "Intensive Care Unit",
            description: "Intensive Care Unit (Medical ICU, Surgical ICU, Cardiac ICU).",
          },
          medical_surgical_unit: {
            id: "onboarding.health_department.medical_surgical_unit",
            defaultMessage: "Medical/Surgical Unit",
            description: "Medical/Surgical Unit (Inpatient Ward).",
          },
          telemetry_step_down: {
            id: "onboarding.health_department.telemetry_step_down",
            defaultMessage: "Telemetry / Step-Down Unit",
            description: "Telemetry / Step-Down Unit (Progressive care unit).",
          },
          operating_room: {
            id: "onboarding.health_department.operating_room",
            defaultMessage: "Operating Room",
            description: "Operating Room (Surgery).",
          },
          post_anesthesia_care_unit: {
            id: "onboarding.health_department.post_anesthesia_care_unit",
            defaultMessage: "Post-Anesthesia Care Unit",
            description: "Post-Anesthesia Care Unit (PACU / Recovery).",
          },
          labor_delivery: {
            id: "onboarding.health_department.labor_delivery",
            defaultMessage: "Labor & Delivery",
            description: "Labor & Delivery (L&D).",
          },
          neonatal_icu: {
            id: "onboarding.health_department.neonatal_icu",
            defaultMessage: "Neonatal ICU",
            description: "Neonatal ICU (NICU).",
          },
          pediatric_unit: {
            id: "onboarding.health_department.pediatric_unit",
            defaultMessage: "Pediatric Unit",
            description: "Pediatric Unit (Pediatrics ward or PICU).",
          },
          oncology_unit: {
            id: "onboarding.health_department.oncology_unit",
            defaultMessage: "Oncology Unit",
            description: "Oncology Unit.",
          },
          psychiatric_unit: {
            id: "onboarding.health_department.psychiatric_unit",
            defaultMessage: "Psychiatric Unit",
            description: "Psychiatric Unit (Behavioral Health).",
          },
          ambulatory_outpatient_clinic: {
            id: "onboarding.health_department.ambulatory_outpatient_clinic",
            defaultMessage: "Ambulatory / Outpatient Clinic",
            description: "Ambulatory / Outpatient Clinic.",
          },
          rehabilitation_unit: {
            id: "onboarding.health_department.rehabilitation_unit",
            defaultMessage: "Rehabilitation Unit",
            description: "Rehabilitation Unit.",
          },
          primary_care_clinic: {
            id: "onboarding.health_department.primary_care_clinic",
            defaultMessage: "Primary Care Clinic",
            description: "Primary Care Clinic (Family/Adult Medicine).",
          },
          hospitalist_service: {
            id: "onboarding.health_department.hospitalist_service",
            defaultMessage: "Internal Medicine / Hospitalist Service",
            description: "Internal Medicine / Hospitalist Service.",
          },
          dermatology: {
            id: "onboarding.health_department.dermatology",
            defaultMessage: "Dermatology",
            description: "Dermatology.",
          },
          inpatient_pharmacy: {
            id: "onboarding.health_department.inpatient_pharmacy",
            defaultMessage: "Inpatient Pharmacy",
            description: "Inpatient Pharmacy (Hospital pharmacy department).",
          },
          outpatient_pharmacy: {
            id: "onboarding.health_department.outpatient_pharmacy",
            defaultMessage: "Outpatient Pharmacy",
            description: "Outpatient / Ambulatory Pharmacy.",
          },
          clinical_pharmacy: {
            id: "onboarding.health_department.clinical_pharmacy",
            defaultMessage: "Clinical Pharmacy",
            description: "Clinical Pharmacy (Rounds with medical teams).",
          },
          emergency_department_pharmacy: {
            id: "onboarding.health_department.emergency_department_pharmacy",
            defaultMessage: "Emergency Department Pharmacy",
            description: "Emergency Department Pharmacy.",
          },
          oncology_pharmacy: {
            id: "onboarding.health_department.oncology_pharmacy",
            defaultMessage: "Oncology Pharmacy",
            description: "Oncology Pharmacy (Cancer center).",
          },
          pediatric_pharmacy: {
            id: "onboarding.health_department.pediatric_pharmacy",
            defaultMessage: "Pediatric Pharmacy",
            description: "Pediatric Pharmacy.",
          },
          critical_care_pharmacy: {
            id: "onboarding.health_department.critical_care_pharmacy",
            defaultMessage: "Critical Care Pharmacy",
            description: "Critical Care Pharmacy (ICU).",
          },
          pharmacy_informatics: {
            id: "onboarding.health_department.pharmacy_informatics",
            defaultMessage: "Pharmacy Informatics / Medication Safety",
            description: "Pharmacy Informatics / Medication Safety.",
          },
          research_pharmacy: {
            id: "onboarding.health_department.research_pharmacy",
            defaultMessage: "Research Pharmacy",
            description: "Research Pharmacy (Clinical trials).",
          },
          compounding_pharmacy: {
            id: "onboarding.health_department.compounding_pharmacy",
            defaultMessage: "Compounding Pharmacy",
            description: "Compounding Pharmacy (Sterile compounding unit).",
          },
          laboratory_pathology: {
            id: "onboarding.health_department.laboratory_pathology",
            defaultMessage: "Laboratory / Pathology",
            description: "Laboratory / Pathology (Lab technologists, pathologists).",
          },
          physical_therapy_rehabilitation: {
            id: "onboarding.health_department.physical_therapy_rehabilitation",
            defaultMessage: "Physical Therapy / Rehabilitation",
            description: "Physical Therapy / Rehabilitation.",
          },
          occupational_therapy: {
            id: "onboarding.health_department.occupational_therapy",
            defaultMessage: "Occupational Therapy",
            description: "Occupational Therapy.",
          },
          speech_therapy: {
            id: "onboarding.health_department.speech_therapy",
            defaultMessage: "Speech Therapy",
            description: "Speech Therapy (Speech-Language Pathology).",
          },
          respiratory_therapy: {
            id: "onboarding.health_department.respiratory_therapy",
            defaultMessage: "Respiratory Therapy",
            description: "Respiratory Therapy.",
          },
          nutrition_services: {
            id: "onboarding.health_department.nutrition_services",
            defaultMessage: "Dietary / Nutrition Services",
            description: "Dietary / Nutrition Services (Dietitians).",
          },
          social_services_case_management: {
            id: "onboarding.health_department.social_services_case_management",
            defaultMessage: "Social Services / Case Management",
            description: "Social Services / Case Management.",
          },
          phlebotomy_unit: {
            id: "onboarding.health_department.phlebotomy_unit",
            defaultMessage: "Phlebotomy Unit",
            description: "Phlebotomy Unit.",
          },
          cardiac_cath_endoscopy: {
            id: "onboarding.health_department.cardiac_cath_endoscopy",
            defaultMessage: "Cardiac Cath Lab / Endoscopy",
            description: "Cardiac Catheterization Lab / Endoscopy.",
          },
          clinical_engineering: {
            id: "onboarding.health_department.clinical_engineering",
            defaultMessage: "Clinical Engineering",
            description: "Clinical Engineering (Biomedical technology support).",
          },
          executive_leadership: {
            id: "onboarding.health_department.executive_leadership",
            defaultMessage: "Executive Leadership / Administration",
            description: "Executive leadership or administration roles.",
          },
          operations_management: {
            id: "onboarding.health_department.operations_management",
            defaultMessage: "Operations Management",
            description: "Operations Management.",
          },
          finance_billing: {
            id: "onboarding.health_department.finance_billing",
            defaultMessage: "Finance / Billing",
            description: "Finance / Billing (Revenue cycle).",
          },
          human_resources: {
            id: "onboarding.health_department.human_resources",
            defaultMessage: "Human Resources",
            description: "Human Resources.",
          },
          quality_patient_safety: {
            id: "onboarding.health_department.quality_patient_safety",
            defaultMessage: "Quality Improvement / Patient Safety",
            description: "Quality Improvement / Patient Safety.",
          },
          compliance_regulatory: {
            id: "onboarding.health_department.compliance_regulatory",
            defaultMessage: "Compliance / Regulatory Affairs",
            description: "Compliance / Regulatory Affairs.",
          },
          health_information_management: {
            id: "onboarding.health_department.health_information_management",
            defaultMessage: "Health Information Management",
            description: "Health Information Management (Medical Records).",
          },
          it_department: {
            id: "onboarding.health_department.it_department",
            defaultMessage: "IT Department",
            description: "IT Department (Administrative or operational support).",
          },
          facilities_support_services: {
            id: "onboarding.health_department.facilities_support_services",
            defaultMessage: "Facilities / Support Services",
            description: "Facilities / Support Services.",
          },
          supply_chain_procurement: {
            id: "onboarding.health_department.supply_chain_procurement",
            defaultMessage: "Supply Chain / Procurement",
            description: "Supply Chain / Procurement.",
          },
          patient_experience: {
            id: "onboarding.health_department.patient_experience",
            defaultMessage: "Patient Experience / Guest Services",
            description: "Patient Experience / Guest Services.",
          },
          clinical_informatics: {
            id: "onboarding.health_department.clinical_informatics",
            defaultMessage: "Clinical Informatics",
            description: "Clinical Informatics (EHR/EMR team).",
          },
          data_analytics: {
            id: "onboarding.health_department.data_analytics",
            defaultMessage: "Data Analytics / Business Intelligence",
            description: "Data Analytics / Business Intelligence.",
          },
          telehealth: {
            id: "onboarding.health_department.telehealth",
            defaultMessage: "Telehealth / Telemedicine",
            description: "Telehealth / Telemedicine.",
          },
          cybersecurity: {
            id: "onboarding.health_department.cybersecurity",
            defaultMessage: "Cybersecurity / IT Security",
            description: "Cybersecurity / IT Security.",
          },
          ehr_support: {
            id: "onboarding.health_department.ehr_support",
            defaultMessage: "EHR Support",
            description: "EHR Support (Epic/Cerner team).",
          },
          integration_team: {
            id: "onboarding.health_department.integration_team",
            defaultMessage: "Interface & Integration Team",
            description: "Interface & Integration Team (HL7 integration).",
          },
          all_clinical_departments_support: {
            id: "onboarding.health_department.all_clinical_departments_support",
            defaultMessage: "All Clinical Departments Support",
            description: "IT generalists supporting all clinical departments.",
          },
          clinical_research: {
            id: "onboarding.health_department.clinical_research",
            defaultMessage: "Clinical Research",
            description: "Clinical Research (Clinical trials unit).",
          },
          translational_research: {
            id: "onboarding.health_department.translational_research",
            defaultMessage: "Translational Research / Lab Research",
            description: "Translational Research / Lab Research (Biomedical).",
          },
          epidemiology_public_health: {
            id: "onboarding.health_department.epidemiology_public_health",
            defaultMessage: "Epidemiology / Public Health",
            description: "Epidemiology / Public Health.",
          },
          academic_department: {
            id: "onboarding.health_department.academic_department",
            defaultMessage: "Academic Department",
            description: "Academic Department (Teaching faculty).",
          },
          data_science_bioinformatics: {
            id: "onboarding.health_department.data_science_bioinformatics",
            defaultMessage: "Data Science / Bioinformatics",
            description: "Data Science / Bioinformatics.",
          },
          pharmaceutical_research: {
            id: "onboarding.health_department.pharmaceutical_research",
            defaultMessage: "Pharmaceutical Research",
            description: "Pharmaceutical Research (Drug development trials).",
          },
          quality_outcomes_research: {
            id: "onboarding.health_department.quality_outcomes_research",
            defaultMessage: "Quality & Outcomes Research",
            description: "Quality & Outcomes Research (Healthcare analytics).",
          },
          medical_education: {
            id: "onboarding.health_department.medical_education",
            defaultMessage: "Medical Education",
            description: "Medical Education (Research in education).",
          },
          research_institute: {
            id: "onboarding.health_department.research_institute",
            defaultMessage: "Institute or Research Center",
            description: "Institute or Research Center.",
          },
          subspecialty_fellowship: {
            id: "onboarding.health_department.subspecialty_fellowship",
            defaultMessage: "Subspecialty Fellowship",
            description: "Subspecialty Fellowship (e.g., Cardiology, Oncology).",
          },
          allergy_immunology: {
            id: "onboarding.health_department.allergy_immunology",
            defaultMessage: "Allergy & Immunology",
            description: "Allergy & Immunology specialty.",
          },
          endocrinology: {
            id: "onboarding.health_department.endocrinology",
            defaultMessage: "Endocrinology",
            description: "Endocrinology specialty.",
          },
          geriatric_medicine: {
            id: "onboarding.health_department.geriatric_medicine",
            defaultMessage: "Geriatric Medicine",
            description: "Geriatric Medicine specialty.",
          },
          gastroenterology: {
            id: "onboarding.health_department.gastroenterology",
            defaultMessage: "Gastroenterology",
            description: "Gastroenterology specialty.",
          },
          hematology: {
            id: "onboarding.health_department.hematology",
            defaultMessage: "Hematology",
            description: "Hematology specialty (separate from Oncology).",
          },
          infectious_disease: {
            id: "onboarding.health_department.infectious_disease",
            defaultMessage: "Infectious Disease",
            description: "Infectious Disease specialty.",
          },
          interventional_radiology: {
            id: "onboarding.health_department.interventional_radiology",
            defaultMessage: "Interventional Radiology",
            description: "Interventional Radiology specialty.",
          },
          oral_maxillofacial_surgery: {
            id: "onboarding.health_department.oral_maxillofacial_surgery",
            defaultMessage: "Oral & Maxillofacial Surgery",
            description: "Oral & Maxillofacial Surgery specialty.",
          },
          medical_genetics_genomics: {
            id: "onboarding.health_department.medical_genetics_genomics",
            defaultMessage: "Medical Genetics & Genomics",
            description: "Medical Genetics & Genomics specialty.",
          },
          nuclear_medicine: {
            id: "onboarding.health_department.nuclear_medicine",
            defaultMessage: "Nuclear Medicine",
            description: "Nuclear Medicine specialty.",
          },
          nephrology: {
            id: "onboarding.health_department.nephrology",
            defaultMessage: "Nephrology",
            description: "Nephrology specialty.",
          },
          neurosurgery: {
            id: "onboarding.health_department.neurosurgery",
            defaultMessage: "Neurosurgery",
            description: "Neurosurgery specialty.",
          },
          occupational_environmental_medicine: {
            id: "onboarding.health_department.occupational_environmental_medicine",
            defaultMessage: "Occupational & Environmental Medicine",
            description: "Occupational & Environmental Medicine specialty.",
          },
          osteopathic_neuromusculoskeletal_medicine: {
            id: "onboarding.health_department.osteopathic_neuromusculoskeletal_medicine",
            defaultMessage: "Osteopathic Neuromusculoskeletal Medicine",
            description: "Osteopathic Neuromusculoskeletal Medicine specialty.",
          },
          ophthalmology: {
            id: "onboarding.health_department.ophthalmology",
            defaultMessage: "Ophthalmology",
            description: "Ophthalmology specialty.",
          },
          otolaryngology: {
            id: "onboarding.health_department.otolaryngology",
            defaultMessage: "Otolaryngology (ENT)",
            description: "Otolaryngology / ENT specialty.",
          },
          physical_medicine_rehabilitation: {
            id: "onboarding.health_department.physical_medicine_rehabilitation",
            defaultMessage: "Physical Medicine & Rehabilitation",
            description: "Physical Medicine & Rehabilitation (PM&R).",
          },
          plastic_surgery: {
            id: "onboarding.health_department.plastic_surgery",
            defaultMessage: "Plastic Surgery",
            description: "Plastic Surgery specialty.",
          },
          pulmonology: {
            id: "onboarding.health_department.pulmonology",
            defaultMessage: "Pulmonology",
            description: "Pulmonology / Respiratory Medicine specialty.",
          },
          preventive_medicine: {
            id: "onboarding.health_department.preventive_medicine",
            defaultMessage: "Preventive Medicine",
            description: "Preventive Medicine specialty.",
          },
          rheumatology: {
            id: "onboarding.health_department.rheumatology",
            defaultMessage: "Rheumatology",
            description: "Rheumatology specialty.",
          },
          radiation_oncology: {
            id: "onboarding.health_department.radiation_oncology",
            defaultMessage: "Radiation Oncology",
            description: "Radiation Oncology specialty.",
          },
          thoracic_surgery: {
            id: "onboarding.health_department.thoracic_surgery",
            defaultMessage: "Thoracic Surgery",
            description: "Thoracic Surgery specialty.",
          },
          urology: {
            id: "onboarding.health_department.urology",
            defaultMessage: "Urology",
            description: "Urology specialty.",
          },
          vascular_surgery: {
            id: "onboarding.health_department.vascular_surgery",
            defaultMessage: "Vascular Surgery",
            description: "Vascular Surgery specialty.",
          },
          bedside_rn: {
            id: "onboarding.health_department.bedside_rn",
            defaultMessage: "Bedside RN (Med-Surg/ED/Peri-op)",
            description: "Bedside RN across Med-Surg, ED, perioperative settings.",
          },
          icu_rn: {
            id: "onboarding.health_department.icu_rn",
            defaultMessage: "ICU RN",
            description: "Registered Nurse in ICU settings.",
          },
          outpatient_clinic_rn: {
            id: "onboarding.health_department.outpatient_clinic_rn",
            defaultMessage: "Outpatient / Clinic RN",
            description: "Outpatient / Clinic Registered Nurse.",
          },
          nurse_manager_charge_nurse: {
            id: "onboarding.health_department.nurse_manager_charge_nurse",
            defaultMessage: "Nurse Manager / Charge Nurse",
            description: "Nurse Manager / Charge Nurse leadership role.",
          },
          clinical_nurse_specialist: {
            id: "onboarding.health_department.clinical_nurse_specialist",
            defaultMessage: "Clinical Nurse Specialist (CNS / APN)",
            description: "Clinical Nurse Specialist / Advanced Practice Nurse.",
          },
          case_management_care_coordination: {
            id: "onboarding.health_department.case_management_care_coordination",
            defaultMessage: "Case Management / Care Coordination",
            description: "Case Management / Care Coordination.",
          },
          physical_therapist: {
            id: "onboarding.health_department.physical_therapist",
            defaultMessage: "Physical Therapist (PT)",
            description: "Physical Therapist role.",
          },
          occupational_therapist: {
            id: "onboarding.health_department.occupational_therapist",
            defaultMessage: "Occupational Therapist (OT)",
            description: "Occupational Therapist role.",
          },
          speech_language_pathologist: {
            id: "onboarding.health_department.speech_language_pathologist",
            defaultMessage: "Speech-Language Pathologist (SLP)",
            description: "Speech-Language Pathologist role.",
          },
          respiratory_therapist_role: {
            id: "onboarding.health_department.respiratory_therapist_role",
            defaultMessage: "Respiratory Therapist",
            description: "Respiratory Therapist role.",
          },
          pharmacist_role: {
            id: "onboarding.health_department.pharmacist_role",
            defaultMessage: "Pharmacist",
            description: "Pharmacist (general role).",
          },
          psychologist: {
            id: "onboarding.health_department.psychologist",
            defaultMessage: "Psychologist",
            description: "Psychologist role.",
          },
          dietitian: {
            id: "onboarding.health_department.dietitian",
            defaultMessage: "Dietitian",
            description: "Dietitian role.",
          },
          social_worker: {
            id: "onboarding.health_department.social_worker",
            defaultMessage: "Social Worker",
            description: "Social Worker role.",
          },
          medical_assistant: {
            id: "onboarding.health_department.medical_assistant",
            defaultMessage: "Medical Assistant",
            description: "Medical Assistant role.",
          },
          imaging_radiology_tech: {
            id: "onboarding.health_department.imaging_radiology_tech",
            defaultMessage: "Imaging / Radiology Tech",
            description: "Imaging / Radiology technologist role.",
          },
          lab_path_tech: {
            id: "onboarding.health_department.lab_path_tech",
            defaultMessage: "Lab / Path Tech",
            description: "Laboratory / Pathology technician role.",
          },
          cardiac_neuro_tech: {
            id: "onboarding.health_department.cardiac_neuro_tech",
            defaultMessage: "Cardiac / Neuro Tech (EKG/EEG)",
            description: "Cardiac / Neuro technician role (EKG, EEG).",
          },
          undergraduate_student: {
            id: "onboarding.health_department.undergraduate_student",
            defaultMessage: "Undergraduate Student",
            description: "Undergraduate student (pre-med, pre-nursing, etc.).",
          },
          medical_student: {
            id: "onboarding.health_department.medical_student",
            defaultMessage: "Medical Student",
            description: "Medical student.",
          },
          np_pa_student: {
            id: "onboarding.health_department.np_pa_student",
            defaultMessage: "NP / PA Student",
            description: "Nurse Practitioner / Physician Assistant student.",
          },
          nursing_student: {
            id: "onboarding.health_department.nursing_student",
            defaultMessage: "Nursing Student",
            description: "Nursing student.",
          },
          allied_health_student: {
            id: "onboarding.health_department.allied_health_student",
            defaultMessage: "Allied Health Student (PT/OT/SLP)",
            description: "Allied health student (PT/OT/SLP, etc.).",
          },
          graduate_student: {
            id: "onboarding.health_department.graduate_student",
            defaultMessage: "Graduate Student (MPH/MS/PhD)",
            description: "Graduate student (MPH, MS, PhD, etc.).",
          },
          unit_manager_department_admin: {
            id: "onboarding.health_department.unit_manager_department_admin",
            defaultMessage: "Unit Manager / Department Admin",
            description: "Unit Manager / Department Administration role.",
          },
          scheduling_front_desk: {
            id: "onboarding.health_department.scheduling_front_desk",
            defaultMessage: "Scheduling / Front Desk",
            description: "Scheduling / Front Desk role.",
          },
          billing_finance_revenue_cycle: {
            id: "onboarding.health_department.billing_finance_revenue_cycle",
            defaultMessage: "Billing / Finance / Revenue Cycle",
            description: "Billing / Finance / Revenue Cycle role.",
          },
          it_informatics: {
            id: "onboarding.health_department.it_informatics",
            defaultMessage: "IT / Informatics",
            description: "IT / Informatics role.",
          },
          hr: {
            id: "onboarding.health_department.hr",
            defaultMessage: "Human Resources (HR)",
            description: "Human Resources role.",
          },
          support_guest_services: {
            id: "onboarding.health_department.support_guest_services",
            defaultMessage: "Support & Guest Services",
            description: "Support & Guest Services (Chaplain, Volunteer, Interpreter, etc.).",
          },
          facilities_safety: {
            id: "onboarding.health_department.facilities_safety",
            defaultMessage: "Facilities & Safety",
            description: "Facilities & Safety (Environmental Services, Security, Transport, etc.).",
          },
          leadership_executive: {
            id: "onboarding.health_department.leadership_executive",
            defaultMessage: "Leadership / Executive",
            description: "Leadership / Executive (CMO, CNO, CFO, VP, Chair, Dean, etc.).",
          },
          other_non_clinical_role: {
            id: "onboarding.health_department.other_non_clinical_role",
            defaultMessage: "Other Non-clinical Role",
            description: "Other non-clinical role (not listed).",
          },
          principal_investigator_pi: {
            id: "onboarding.health_department.principal_investigator_pi",
            defaultMessage: "Principal Investigator (PI)",
            description: "Principal Investigator role.",
          },
          study_coordinator: {
            id: "onboarding.health_department.study_coordinator",
            defaultMessage: "Study Coordinator",
            description: "Study Coordinator role.",
          },
          clinical_research_nurse_crn: {
            id: "onboarding.health_department.clinical_research_nurse_crn",
            defaultMessage: "Clinical Research Nurse (CRN)",
            description: "Clinical Research Nurse (CRN) role.",
          },
          data_manager: {
            id: "onboarding.health_department.data_manager",
            defaultMessage: "Data Manager",
            description: "Data Manager role.",
          },
          regulatory_specialist: {
            id: "onboarding.health_department.regulatory_specialist",
            defaultMessage: "Regulatory Specialist",
            description: "Regulatory Specialist role.",
          },
          biostatistician_data_scientist_analyst: {
            id: "onboarding.health_department.biostatistician_data_scientist_analyst",
            defaultMessage: "Biostatistician / Data Scientist / Analyst",
            description: "Biostatistician / Data Scientist / Analyst role.",
          },
          research_assistant_associate: {
            id: "onboarding.health_department.research_assistant_associate",
            defaultMessage: "Research Assistant / Associate",
            description: "Research Assistant / Associate role.",
          },
          other: {
            id: "onboarding.health_department.other",
            defaultMessage: "Other",
            description: "Other department or specialty.",
          },
        }),
      ).map(([e, t]) => ({ id: e, displayValue: t })),
      r = (0, a.YK)({
        physician: {
          id: "onboarding.health_role.physician",
          defaultMessage: "Physician",
          description: "Healthcare role category: Physician.",
        },
        np_pa: {
          id: "onboarding.health_role.np_pa",
          defaultMessage: "NP / PA",
          description: "Healthcare role category: Nurse Practitioner or Physician Assistant.",
        },
        registered_nurse: {
          id: "onboarding.health_role.registered_nurse",
          defaultMessage: "Registered Nurse",
          description: "Healthcare role category: Registered Nurse.",
        },
        allied_health_professional: {
          id: "onboarding.health_role.allied_health_professional",
          defaultMessage: "Allied Health Professional",
          description: "Healthcare role category: Allied Health Professional.",
        },
        student: {
          id: "onboarding.health_role.student",
          defaultMessage: "Student",
          description: "Healthcare role category: Student / Trainee.",
        },
        admin_ops_non_clinical: {
          id: "onboarding.health_role.admin_ops_non_clinical",
          defaultMessage: "Administration / Operations / Non-clinical",
          description: "Healthcare role category: Administration, operations, or other non-clinical staff.",
        },
        research: {
          id: "onboarding.health_role.research",
          defaultMessage: "Research",
          description: "Healthcare role category: Research roles.",
        },
        other_clinical: {
          id: "onboarding.health_role.other_clinical",
          defaultMessage: "Other / Not Sure",
          description: "Other clinical role not listed.",
        },
      }),
      s = [
        { id: "physician", displayValue: r.physician },
        { id: "np_pa", displayValue: r.np_pa },
        { id: "registered_nurse", displayValue: r.registered_nurse },
        { id: "allied_health_professional", displayValue: r.allied_health_professional },
        { id: "student", displayValue: r.student },
        { id: "admin_ops_non_clinical", displayValue: r.admin_ops_non_clinical },
        { id: "research", displayValue: r.research },
        { id: "other_clinical", displayValue: r.other_clinical },
      ],
      l = {
        ...o.O,
        admin_ops_non_clinical: [
          "unit_manager_department_admin",
          "scheduling_front_desk",
          "billing_finance_revenue_cycle",
          "it_informatics",
          "quality_patient_safety",
          "hr",
          "support_guest_services",
          "facilities_safety",
          "leadership_executive",
          "other_non_clinical_role",
        ],
        research: [
          "principal_investigator_pi",
          "study_coordinator",
          "clinical_research_nurse_crn",
          "data_manager",
          "regulatory_specialist",
          "biostatistician_data_scientist_analyst",
          "research_assistant_associate",
        ],
      },
      c = (0, a.YK)({
        marketing: {
          id: "onboarding.departments.marketing",
          defaultMessage: "Marketing",
          description: "Department option for Marketing",
        },
        analytics: {
          id: "onboarding.departments.analytics",
          defaultMessage: "Data or Analytics",
          description: "Department option for Data or Analytics",
        },
        product: {
          id: "onboarding.departments.product",
          defaultMessage: "Product Management",
          description: "Department option for Product Management",
        },
        comms: {
          id: "onboarding.departments.comms",
          defaultMessage: "Communications",
          description: "Department option for Communication",
        },
        finance: {
          id: "onboarding.departments.finance",
          defaultMessage: "Finance or Accounting",
          description: "Department option for Finance or Accounting",
        },
        customer_experience: {
          id: "onboarding.departments.customer_experience",
          defaultMessage: "Customer Experience",
          description: "Department option for Customer Experience",
        },
        project_management: {
          id: "onboarding.departments.project_management",
          defaultMessage: "Project or Program Management",
          description: "Department option for Project or Program Management",
        },
        engineering: {
          id: "onboarding.departments.engineering",
          defaultMessage: "Engineering",
          description: "Department option for Engineering",
        },
        education_professional: {
          id: "onboarding.departments.education_professional",
          defaultMessage: "Education Professional",
          description: "Department option for Education Professional",
        },
        design: {
          id: "onboarding.departments.design",
          defaultMessage: "Design",
          description: "Department option for Design",
        },
        administrative: {
          id: "onboarding.departments.administrative",
          defaultMessage: "Administrative Assistant",
          description: "Department option for Administrative Assistant",
        },
        partnerships: {
          id: "onboarding.departments.partnerships",
          defaultMessage: "Partnerships",
          description: "Department option for Partnerships",
        },
        it: {
          id: "onboarding.departments.it",
          defaultMessage: "Information Technology (IT)",
          description: "Department option for Information Technology (IT)",
        },
        ops: {
          id: "onboarding.departments.ops",
          defaultMessage: "Operations",
          description: "Department option for Operations",
        },
        human_resources: {
          id: "onboarding.departments.human_resources",
          defaultMessage: "Human Resources",
          description: "Department option for Human Resources",
        },
        research: {
          id: "onboarding.departments.research",
          defaultMessage: "Research & Development",
          description: "Department option for Research & Development",
        },
        sales: {
          id: "onboarding.departments.sales",
          defaultMessage: "Sales",
          description: "Department option for Sales",
        },
        legal: {
          id: "onboarding.departments.legal",
          defaultMessage: "Legal",
          description: "Department option for Legal",
        },
        healthcare: {
          id: "onboarding.departments.healthcare",
          defaultMessage: "Healthcare Professional",
          description: "Department option for Healthcare Professional",
        },
        other: {
          id: "onboarding.departments.other",
          defaultMessage: "Other",
          description: "Department option for Other",
        },
      }),
      d = [
        { id: "marketing", displayValue: c.marketing },
        { id: "analytics", displayValue: c.analytics },
        { id: "product", displayValue: c.product },
        { id: "comms", displayValue: c.comms },
        { id: "engineering", displayValue: c.engineering },
        { id: "education_professional", displayValue: c.education_professional },
        { id: "finance", displayValue: c.finance },
        { id: "customer_experience", displayValue: c.customer_experience },
        { id: "project_management", displayValue: c.project_management },
        { id: "design", displayValue: c.design },
        { id: "administrative", displayValue: c.administrative },
        { id: "it", displayValue: c.it },
        { id: "ops", displayValue: c.ops },
        { id: "human_resources", displayValue: c.human_resources },
        { id: "research", displayValue: c.research },
        { id: "sales", displayValue: c.sales },
        { id: "partnerships", displayValue: c.partnerships },
        { id: "legal", displayValue: c.legal },
        { id: "healthcare", displayValue: c.healthcare },
        { id: "other", displayValue: c.other },
      ]
    n.d(t, {}, { $d: s, _s: l, e1: d, jw: i })
  },
  BQjy(e, t, n) {
    var a = n("a6v3")
    function o() {
      let e = (0, a.$)().trim()
      return (
        (/iPad|iPhone|iPod/.test(e) && !/Safari/.test(e)) ||
        (/Android/.test(e) && /Version\/\d+\.\d+/.test(e)) ||
        /; wv|webview|fbav|fb_iab|fban|instagram|line\/|kakaotalk|snapchat|tiktok/i.test(e)
      )
    }
    n.d(
      t,
      {},
      {
        SX: o,
        Sv: function (e) {
          let t
          if ("u" < typeof window || !o()) return !1
          let n = window,
            i = (0, a.$)(),
            r = btoa(JSON.stringify(e))
          if (/iPad|iPhone|iPod/.test(i)) {
            let a = n.webkit?.messageHandlers
            t = {
              enterprise_onboarding_complete: a?.onboardingComplete,
              hmp_workspace_created: a?.hmpWorkspaceCreated,
              hmp_verification_complete: a?.hmpVerificationComplete,
            }[e.type]
          } else
            /Android/.test(i) && (t = "enterprise_onboarding_complete" === e.type ? (n.openai ?? n.Android) : n.openai)
          return t?.postMessage != null && (t.postMessage(r), !0)
        },
        uG: function (e) {
          if ("u" < typeof window || !o()) return !1
          let t = window
          return (
            t.webkit?.messageHandlers?.hmpWorkspaceCreated !== void 0 ||
            "true" === new URLSearchParams(e).get("native_deferred_persona_verification")
          )
        },
      },
    )
  },
  IMIO(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("on57"),
      r = n("iodE"),
      s = n("LIss"),
      l = n("T1PX")
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            n,
            c,
            d,
            p,
            u,
            h = (0, o.c)(16),
            { children: m, className: g } = e,
            f = (0, l.I)(),
            _ = (0, r.tF)()
          h[0] !== g ? ((t = (0, i.A)("flex w-full flex-col items-center", g)), (h[0] = g), (h[1] = t)) : (t = h[1])
          let b = !_
          ;(h[2] !== f ? ((n = !f && { opacity: 0, y: 7 }), (h[2] = f), (h[3] = n)) : (n = h[3]),
            h[4] === Symbol.for("react.memo_cache_sentinel") ? ((c = { opacity: 1, y: 0 }), (h[4] = c)) : (c = h[4]),
            h[5] !== f ? ((d = f ? { opacity: 1, y: 0 } : { opacity: 0, y: -7 }), (h[5] = f), (h[6] = d)) : (d = h[6]))
          let y = 0.2 * !f
          return (
            h[7] !== y ? ((p = { duration: y }), (h[7] = y), (h[8] = p)) : (p = h[8]),
            h[9] !== m || h[10] !== t || h[11] !== b || h[12] !== n || h[13] !== d || h[14] !== p
              ? ((u = (0, a.jsx)(s.P.div, {
                  className: t,
                  inert: b,
                  initial: n,
                  animate: c,
                  exit: d,
                  transition: p,
                  children: m,
                })),
                (h[9] = m),
                (h[10] = t),
                (h[11] = b),
                (h[12] = n),
                (h[13] = d),
                (h[14] = p),
                (h[15] = u))
              : (u = h[15]),
            u
          )
        },
      },
    )
  },
  Jgbh(e, t, n) {
    var a = n("SPnB"),
      o = n("Ghh3")
    n.d(
      t,
      {},
      {
        M: async function (e) {
          let t = e.get(a.chatGptAuthenticatedAccountId$),
            n = e.get(a.o8)
          if (null != t && null != n)
            try {
              await o.Request.safePost("/onboarding/recommendations", {
                expectedIdentity: { accountId: t, userId: n },
                additionalHeaders: { "x-openai-use-sheep": "1" },
                requestBody: { provider_id: "codex-starter-tasks", role: null, mail_provider: null },
                keepalive: !0,
                signal: AbortSignal.timeout(1e4),
                expectedErrorStatuses: [404, 503],
              })
            } catch {}
        },
      },
    )
  },
  BLQ5(e, t, n) {
    n.d(t, { OnboardingRoute: () => aL })
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zTeN"),
      r = n("zd8w"),
      s = n("Wf1j"),
      l = n("oyxz"),
      c = n("HZfM"),
      d = n("SPnB"),
      p = n("EOo5"),
      u = n("YJm0"),
      h = n("g2p6"),
      m = n("jVlT"),
      g = n("ygO2"),
      f = n("FrrB"),
      _ = n("Bbed"),
      b = n("zOE4"),
      y = n("OWtl"),
      x = n("OMIV"),
      C = n("a6v3"),
      w = n("UR81"),
      v = n("BQjy"),
      k = n("YnMP"),
      A = n("E8Sp"),
      S = n("yGJW"),
      j = n("qiCZ"),
      N = n("idGD"),
      O = n("Fcwd"),
      E = n("ASxG")
    let M = E.object({ workspaceMemberOnboarding: E.object({ accountId: E.string(), userId: E.string() }) })
    function P(e, t) {
      let n = M.safeParse(t)
      return (
        n.success &&
        n.data.workspaceMemberOnboarding.accountId === e.accountId &&
        n.data.workspaceMemberOnboarding.userId === e.userId
      )
    }
    var T = n("wP9i"),
      I = n("ozm1"),
      R = n("LA2j"),
      D = n("DBCl"),
      L = n("JAom"),
      G = n("CMv2"),
      H = n("pxeg"),
      F = n("uc7r"),
      W = n("hGHw"),
      B = n("AGHv"),
      U = n("ecE5"),
      K = n("hZax"),
      q = n("o6hs")
    let V = {
        google: [
          "connector_2128aebfecb84f64a069897515042a44",
          "connector_5f3c8c41a1e54ad7a76272c89e2554fa",
          "connector_947e0d954944416db111db556030eea6",
          "connector_c0f748249d6a42aea4b00fd375570ded",
        ],
        microsoft: [
          "connector_4aaab2856305417b993eca9a216aaf6e",
          "connector_e6a7394682e24467ac68c60696f275a4",
          "connector_246af0940da3457da0e751171dc1ce60",
          "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
        ],
      },
      $ = [
        "connector_5f3c8c41a1e54ad7a76272c89e2554fa",
        "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
        q.M1,
        "connector_246af0940da3457da0e751171dc1ce60",
        "connector_2128aebfecb84f64a069897515042a44",
        "connector_4aaab2856305417b993eca9a216aaf6e",
        "connector_947e0d954944416db111db556030eea6",
        "connector_e6a7394682e24467ac68c60696f275a4",
        "connector_c0f748249d6a42aea4b00fd375570ded",
        "asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
        "connector_76869538009648d5b282a4bb21c3d157",
        "asdk_app_69b31dc2110c8191b8b47dc98fe5a052",
        "asdk_app_695bfc98071c8191bac7bc479aa27de7",
      ]
    var z = n("FpcZ"),
      Z = n("pDRe"),
      Y = n("Ghh3"),
      Q = n("rvFo")
    let X = (0, i.vU)(y.u, ({ accountId: e, appId: t }) => {
        let [n] = (0, z.getHostedAppsContentQueriesOptions)({
          accountId: e,
          appIds: [t],
          enabled: !0,
          productContext: "chatgpt",
        }).queries
        if (null == n) throw Error("Expected one app metadata query")
        return { ...n, retryOnMount: !0, refetchOnMount: !0 }
      }),
      J = (0, i.i1)(y.u, ({ accountId: e }, { get: t }) => {
        let n = $.map((n) => t(X, { accountId: e, appId: n }))
        return {
          data: n.every(({ data: e }) => null != e) ? n.flatMap(({ data: e }) => e ?? []) : void 0,
          isError: n.some(({ isError: e }) => e),
          isFetching: n.some(({ isFetching: e }) => e),
          retry: async () => {
            await Promise.all(n.filter(({ isError: e }) => e).map(({ refetch: e }) => e()))
          },
        }
      }),
      ee = (0, i.vU)(y.u, ({ identity: e, appIds: t }) => ({
        ...(0, Z.p)({ ...e, appIds: t, enabled: !0, productSku: "CONNECTOR_SETTING" }),
        retryOnMount: !0,
        refetchOnMount: !0,
      })),
      et = (0, i.vU)(y.u, (e) => ({
        queryKey: ["workspace_connector_stats", e],
        queryFn: ({ signal: t }) =>
          Y.Request.safeGet("/aip/workspace/connector-stats", {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: t,
          }),
        retry: !1,
        staleTime: Q.D.FIVE_MINUTES,
        retryOnMount: !0,
        refetchOnMount: !0,
      }))
    var en = n("ZRcE"),
      ea = n("on57"),
      eo = n("JNtf"),
      ei = n("HOLv"),
      er = n("RNul"),
      es = n("IMIO"),
      el = n("vkjh")
    function ec(e) {
      let t,
        n,
        i,
        r,
        s,
        l = (0, o.c)(14)
      ;(l[0] !== e.className
        ? ((t = (0, ea.A)("h-full w-full bg-surface-elevated text-default", e.className)),
          (l[0] = e.className),
          (l[1] = t))
        : (t = l[1]),
        l[2] !== e.onShown
          ? ((n = { "aria-describedby": void 0, onOpenAutoFocus: e.onShown, onEscapeKeyDown: ed }),
            (l[2] = e.onShown),
            (l[3] = n))
          : (n = l[3]))
      let c = e.pageClassName ?? "m-auto flex w-full flex-col items-center gap-6 px-6 py-10 md:px-10"
      return (
        l[4] !== e.children || l[5] !== c
          ? ((i = (0, a.jsx)("div", { className: c, children: e.children })),
            (l[4] = e.children),
            (l[5] = c),
            (l[6] = i))
          : (i = l[6]),
        l[7] !== e.isBusy || l[8] !== i
          ? ((r = (0, a.jsx)("div", {
              className: "flex h-full flex-col overflow-y-auto select-none",
              "aria-busy": e.isBusy,
              children: i,
            })),
            (l[7] = e.isBusy),
            (l[8] = i),
            (l[9] = r))
          : (r = l[9]),
        l[10] !== t || l[11] !== n || l[12] !== r
          ? ((s = (0, a.jsx)(el.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsx)(eo.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: t,
                contentProps: n,
                children: r,
              }),
            })),
            (l[10] = t),
            (l[11] = n),
            (l[12] = r),
            (l[13] = s))
          : (s = l[13]),
        s
      )
    }
    function ed(e) {
      return e.preventDefault()
    }
    n("mmXj")
    var ep = n("FvYa"),
      eu = n("GO7r"),
      eh = n("F0xz")
    function em(e) {
      let t,
        n,
        i,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        y,
        x = (0, o.c)(62),
        { item: C, isBundle: w, selected: v, onSelect: k } = e,
        { app: A, connected: S, canConnect: j, teammateCount: N } = C,
        O = (0, s.A)(),
        E = (0, r.useId)()
      x[0] !== A.name || x[1] !== S || x[2] !== O
        ? ((t = S
            ? O.formatMessage(
                {
                  id: "chatgpt.onboarding.new_workspace.connectors.app.connected",
                  defaultMessage: "{appName} is connected",
                  description:
                    "Accessible label for an already-connected app in workspace onboarding; appName is its display name",
                },
                { appName: A.name },
              )
            : O.formatMessage(
                {
                  id: "chatgpt.onboarding.new_workspace.connectors.app.connect",
                  defaultMessage: "Connect {appName}",
                  description:
                    "Accessible label for selecting or connecting an app in workspace onboarding; appName is its display name",
                },
                { appName: A.name },
              )),
          (x[0] = A.name),
          (x[1] = S),
          (x[2] = O),
          (x[3] = t))
        : (t = x[3])
      let M = t
      ;(x[4] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a.jsx)(eu.HUG, {})), (x[4] = n)) : (n = x[4]),
        x[5] !== A
          ? ((i = (0, a.jsx)(ep.R, { className: "size-6", alt: "", appInfo: A, preferRemote: !0, fallback: n })),
            (x[5] = A),
            (x[6] = i))
          : (i = x[6]))
      let P = i
      if (w) {
        let e,
          t,
          n,
          o,
          i,
          r,
          s = S ? "div" : "label",
          c = S ? void 0 : E,
          d = S || !j ? "cursor-default" : "cursor-interaction"
        return (
          x[7] !== d
            ? ((e = (0, ea.A)(
                "flex min-h-24 min-w-0 flex-col justify-between gap-5 rounded-lg border border-default bg-surface p-3",
                d,
              )),
              (x[7] = d),
              (x[8] = e))
            : (e = x[8]),
          x[9] !== P
            ? ((t = (0, a.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                "aria-hidden": "true",
                children: P,
              })),
              (x[9] = P),
              (x[10] = t))
            : (t = x[10]),
          x[11] !== A.id || x[12] !== j || x[13] !== S || x[14] !== M || x[15] !== k || x[16] !== v || x[17] !== E
            ? ((n = S
                ? (0, a.jsxs)("span", {
                    className:
                      "inline-flex min-w-0 items-center gap-1 text-[13px] leading-[18px] font-normal tracking-[-0.08px] text-secondary",
                    children: [
                      (0, a.jsx)(eu.yIE, { className: "hidden sm:block" }),
                      (0, a.jsx)("span", {
                        className: "min-w-0 break-words",
                        children: (0, a.jsx)(l.A, {
                          id: "chatgpt.onboarding.recommended_connector.bundle.app.connected",
                          defaultMessage: "Connected",
                          description:
                            "Visible status in a workspace onboarding app card. This app is already connected and cannot be selected again.",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(eh.l, { id: E, name: A.id, ariaLabel: M, checked: v, disabled: !j, onChange: k })),
              (x[11] = A.id),
              (x[12] = j),
              (x[13] = S),
              (x[14] = M),
              (x[15] = k),
              (x[16] = v),
              (x[17] = E),
              (x[18] = n))
            : (n = x[18]),
          x[19] !== t || x[20] !== n
            ? ((o = (0, a.jsxs)("span", { className: "flex items-center justify-between gap-2", children: [t, n] })),
              (x[19] = t),
              (x[20] = n),
              (x[21] = o))
            : (o = x[21]),
          x[22] !== A.name
            ? ((i = (0, a.jsx)("span", {
                className: "text-base leading-[26px] break-words sm:line-clamp-1",
                children: A.name,
              })),
              (x[22] = A.name),
              (x[23] = i))
            : (i = x[23]),
          x[24] !== s || x[25] !== o || x[26] !== i || x[27] !== c || x[28] !== e
            ? ((r = (0, a.jsxs)(s, { htmlFor: c, className: e, children: [o, i] })),
              (x[24] = s),
              (x[25] = o),
              (x[26] = i),
              (x[27] = c),
              (x[28] = e),
              (x[29] = r))
            : (r = x[29]),
          r
        )
      }
      let T = S || !j,
        I = S || !j ? "cursor-default" : "cursor-interaction hover:bg-primary-ghost-hover"
      ;(x[30] !== I
        ? ((c = (0, ea.A)(
            "flex min-h-[114px] min-w-0 flex-col gap-3 rounded-lg border border-default bg-surface p-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden",
            I,
          )),
          (x[30] = I),
          (x[31] = c))
        : (c = x[31]),
        x[32] !== j || x[33] !== S || x[34] !== k
          ? ((d = () => {
              !S && j && k()
            }),
            (x[32] = j),
            (x[33] = S),
            (x[34] = k),
            (x[35] = d))
          : (d = x[35]),
        x[36] !== P
          ? ((p = (0, a.jsx)("span", {
              className: "flex size-6 shrink-0 items-center justify-center",
              "aria-hidden": "true",
              children: P,
            })),
            (x[36] = P),
            (x[37] = p))
          : (p = x[37]))
      let R = S ? "bg-info-solid text-info-solid" : "bg-surface-tertiary text-secondary"
      return (
        x[38] !== R
          ? ((u = (0, ea.A)("flex size-7 shrink-0 items-center justify-center rounded-full", R)),
            (x[38] = R),
            (x[39] = u))
          : (u = x[39]),
        x[40] !== S
          ? ((h = S ? (0, a.jsx)(eu.yIE, {}) : (0, a.jsx)(eu.xFs, {})), (x[40] = S), (x[41] = h))
          : (h = x[41]),
        x[42] !== u || x[43] !== h
          ? ((m = (0, a.jsx)("span", { className: u, "aria-hidden": "true", children: h })),
            (x[42] = u),
            (x[43] = h),
            (x[44] = m))
          : (m = x[44]),
        x[45] !== m || x[46] !== p
          ? ((g = (0, a.jsxs)("span", {
              className: "flex w-full items-center justify-between gap-2",
              children: [p, m],
            })),
            (x[45] = m),
            (x[46] = p),
            (x[47] = g))
          : (g = x[47]),
        x[48] !== A.name
          ? ((f = (0, a.jsx)("span", {
              className: "text-base leading-[26px] break-words sm:line-clamp-1",
              children: A.name,
            })),
            (x[48] = A.name),
            (x[49] = f))
          : (f = x[49]),
        x[50] !== N
          ? ((_ =
              N >= 5 &&
              (0, a.jsxs)("span", {
                className:
                  "flex min-w-0 items-center gap-2 text-[13px] leading-[18px] tracking-[-0.08px] text-secondary",
                children: [
                  (0, a.jsx)(eu.oJq, {}),
                  (0, a.jsx)("span", {
                    className: "min-w-0 break-words sm:truncate",
                    children: (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.new_workspace.connectors.app.teammates",
                      defaultMessage: "{count, plural, one {# teammate} other {# teammates}}",
                      description:
                        "Number of teammates using an app in workspace onboarding, shown only at five or more for privacy",
                      values: { count: N },
                    }),
                  }),
                ],
              })),
            (x[50] = N),
            (x[51] = _))
          : (_ = x[51]),
        x[52] !== f || x[53] !== _
          ? ((b = (0, a.jsxs)("span", { className: "flex w-full min-w-0 flex-col gap-1", children: [f, _] })),
            (x[52] = f),
            (x[53] = _),
            (x[54] = b))
          : (b = x[54]),
        x[55] !== M || x[56] !== g || x[57] !== b || x[58] !== T || x[59] !== c || x[60] !== d
          ? ((y = (0, a.jsxs)("button", {
              type: "button",
              "aria-label": M,
              "aria-disabled": T,
              className: c,
              onClick: d,
              children: [g, b],
            })),
            (x[55] = M),
            (x[56] = g),
            (x[57] = b),
            (x[58] = T),
            (x[59] = c),
            (x[60] = d),
            (x[61] = y))
          : (y = x[61]),
        y
      )
    }
    var eg = n.p + "assets/0f02295bd35e.svg",
      ef = n("lzRh"),
      e_ = n("VI9M"),
      eb = n("RRGc"),
      ey = n.p + "assets/value-preview-background.3ecd93bf59.png"
    function ex(e) {
      let t,
        n,
        i,
        r,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f = (0, o.c)(20),
        { provider: _ } = e,
        b = (0, s.A)(),
        y = "google" === _
      f[0] !== y
        ? ((t = y ? (0, a.jsx)(ef.A, { className: "h-3 w-3" }) : (0, a.jsx)(e_.A, { className: "h-3 w-3" })),
          (f[0] = y),
          (f[1] = t))
        : (t = f[1])
      let x = t
      f[2] !== y
        ? ((n = y
            ? (0, a.jsx)("img", { src: eg, alt: "", className: "h-[8.75px] w-[11px]" })
            : (0, a.jsx)(eb.A, { className: "h-3 w-3" })),
          (f[2] = y),
          (f[3] = n))
        : (n = f[3])
      let C = n
      return (
        f[4] !== b
          ? ((i = b.formatMessage({
              id: "chatgpt.onboarding.new_workspace.connectors_preview.image.description",
              defaultMessage: "An example of ChatGPT answering a project launch question using connected work apps.",
              description:
                "Accessible description of the decorative chat illustration on the new-workspace connector onboarding screen. It conveys to screen-reader users that connecting work apps lets ChatGPT answer company-specific questions. The visible example concerns a fictional project, not the user's real workspace data.",
            })),
            (f[4] = b),
            (f[5] = i))
          : (i = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("img", {
              src: ey,
              alt: "",
              width: 400,
              height: 592,
              className: "pointer-events-none absolute inset-0 h-full w-full object-cover dark:opacity-60",
            })),
            (f[6] = r))
          : (r = f[6]),
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("div", {
              className:
                "max-w-full self-end rounded-3xl bg-[light-dark(var(--blue-50),var(--blue-800))] px-4 py-2.5 text-end text-[light-dark(var(--blue-500),var(--blue-50))]",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.question",
                defaultMessage: "When is Project Horizon launching?",
                description:
                  "Example user question shown in the connectors preview chat on the new workspace onboarding flow. It demonstrates asking ChatGPT about a fictional internal project after work apps are connected. Short chat bubble text.",
              }),
            })),
            (f[7] = c))
          : (c = f[7]),
        f[8] !== y || f[9] !== x || f[10] !== C
          ? ((d = (0, a.jsx)("p", {
              className: "w-full [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.65))] pe-3 pt-1 text-wrap",
              children: y
                ? (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_lead.google",
                    defaultMessage:
                      "The <roadmap>Project Horizon roadmap in Google Drive</roadmap> and the <update>latest launch update in Gmail</update> show that the project is moving through staged rollout planning. The current plan calls for a small pilot in September, followed by a broader launch in October.",
                    description:
                      "First paragraph of the illustrative assistant response on the Google-bundle screen in new-workspace connector onboarding. Project Horizon is fictional. The roadmap and update tags style example source citations from Google Drive and Gmail; keep the complete source names inside their tags. 'Pilot' means a limited release to a small group, followed by a wider release. Multiline text in a narrow preview card.",
                    values: {
                      roadmap: (e) => (0, a.jsx)(eC, { icon: x, children: e }),
                      update: (e) => (0, a.jsx)(eC, { icon: C, children: e }),
                    },
                  })
                : (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_lead.default",
                    defaultMessage:
                      "The <roadmap>Project Horizon roadmap in Notion</roadmap> and the <update>latest launch update in Slack</update> show that the project is moving through staged rollout planning. The current plan calls for a small pilot in September, followed by a broader launch in October.",
                    description:
                      "First paragraph of the illustrative assistant response on the app-list and Microsoft-bundle screens in new-workspace connector onboarding. Project Horizon is fictional. The roadmap and update tags style example source citations from Notion and Slack; keep the complete source names inside their tags. 'Pilot' means a limited release to a small group, followed by a wider release. Multiline text in a narrow preview card.",
                    values: {
                      roadmap: (e) => (0, a.jsx)(eC, { icon: x, children: e }),
                      update: (e) => (0, a.jsx)(eC, { icon: C, children: e }),
                    },
                  }),
            })),
            (f[8] = y),
            (f[9] = x),
            (f[10] = C),
            (f[11] = d))
          : (d = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("p", {
              className:
                "w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.58),rgba(0,0,0,0.18))] pe-3 pt-1 text-wrap",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_details",
                defaultMessage:
                  "Before the pilot begins, the team still needs to validate permission mapping, complete the security review, and confirm rollout readiness. October remains the working target, but the date hasn’t been committed.",
                description:
                  "Second paragraph of the illustrative assistant response in new-workspace connector onboarding. It describes the remaining release checks for fictional Project Horizon. 'Permission mapping' means checking access-control settings, and 'working target' is a tentative launch date rather than a promise. Multiline text in a narrow preview card that fades toward its bottom.",
              }),
            })),
            (f[12] = p))
          : (p = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)("p", {
              className:
                "w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.11),transparent)] pe-3 pt-1 text-wrap",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_conclusion",
                defaultMessage:
                  "I’d plan around an October launch, with some schedule risk if the September pilot surfaces issues. The next checkpoint is the pilot readiness review later this month.",
                description:
                  "Final paragraph of the illustrative assistant response in new-workspace connector onboarding. It offers a tentative schedule for fictional Project Horizon and mentions a review before the limited pilot release. This is sample company-knowledge content, not a real commitment or current date. Multiline text that fades out at the bottom of the preview card.",
              }),
            })),
            (f[13] = u))
          : (u = f[13]),
        f[14] !== d
          ? ((h = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className:
                "absolute inset-x-8 top-16 bottom-16 overflow-hidden rounded-xl bg-linear-to-b from-surface to-surface/0",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-start gap-3 p-5 text-sm leading-5 font-normal tracking-[-0.15px] text-default",
                children: [c, d, p, u],
              }),
            })),
            (f[14] = d),
            (f[15] = h))
          : (h = f[15]),
        f[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 rounded-[20px] border border-default",
            })),
            (f[16] = m))
          : (m = f[16]),
        f[17] !== i || f[18] !== h
          ? ((g = (0, a.jsxs)("div", {
              role: "img",
              "aria-label": i,
              className: "relative aspect-[25/37] w-full overflow-hidden rounded-[20px] bg-surface",
              children: [r, h, m],
            })),
            (f[17] = i),
            (f[18] = h),
            (f[19] = g))
          : (g = f[19]),
        g
      )
    }
    function eC(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(8),
        { children: l, icon: c } = e
      return (
        s[0] !== c
          ? ((t = (0, a.jsx)("span", {
              className: "me-1 inline-flex h-3 w-3 items-center justify-center align-[-1px]",
              children: c,
            })),
            (s[0] = c),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== l
          ? ((n = (0, a.jsx)("span", { className: "underline decoration-current underline-offset-2", children: l })),
            (s[2] = l),
            (s[3] = n))
          : (n = s[3]),
        s[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(eu.$3V, { "aria-hidden": "true", className: "ms-1 inline-block align-[-1px]" })),
            (s[4] = i))
          : (i = s[4]),
        s[5] !== t || s[6] !== n
          ? ((r = (0, a.jsxs)("span", { children: [t, n, i] })), (s[5] = t), (s[6] = n), (s[7] = r))
          : (r = s[7]),
        r
      )
    }
    var ew = "surface-Jsw_hz"
    function ev(e) {
      let t,
        n,
        i,
        s,
        c,
        d,
        p,
        u,
        h,
        m,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        k,
        A,
        S,
        j,
        N,
        O,
        E,
        M,
        P,
        T,
        I,
        R,
        D = (0, o.c)(109)
      D[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (D[0] = t)) : (t = D[0])
      let [L, G] = (0, r.useState)(t)
      if (D[1] !== L || D[2] !== e) {
        let t, o, r, S, j, N, O, E, M, P
        ;(D[22] !== L
          ? ((t = (e) => {
              let { app: t, connected: n, canConnect: a } = e
              return !n && a && !L.includes(t.id)
            }),
            (D[22] = L),
            (D[23] = t))
          : (t = D[23]),
          (p = e.apps.filter(t).map(ej)),
          D[24] !== e.apps ? ((o = e.apps.length > 0 && e.apps.every(eS)), (D[24] = e.apps), (D[25] = o)) : (o = D[25]))
        let T = o
        ;(D[26] !== e.apps ? ((r = e.apps.some(eA)), (D[26] = e.apps), (D[27] = r)) : (r = D[27]),
          (c = r),
          (u = null != e.provider && !T))
        let I = "google" === e.provider ? "Google" : "Microsoft"
        D[28] !== e.apps ? ((S = Math.max(0, ...e.apps.map(ek))), (D[28] = e.apps), (D[29] = S)) : (S = D[29])
        let R = S
        ;(D[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors.button.continue",
              defaultMessage: "Continue to workspace",
              description: "Finishes the app connection step of workspace onboarding",
            })),
            (D[30] = j))
          : (j = D[30]),
          (s = j),
          D[31] !== I || D[32] !== u
            ? ((N = u
                ? (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.recommended_connector.bundle.button.connect",
                    defaultMessage: "Connect to {providerBrandName}",
                    description:
                      "Opens consent for the selected workspace apps; providerBrandName is Google or Microsoft",
                    values: { providerBrandName: I },
                  })
                : s),
              (D[31] = I),
              (D[32] = u),
              (D[33] = N))
            : (N = D[33]),
          (d = N),
          (i = ec),
          (A = ew),
          (m = "flex min-h-full w-full px-4 py-8 sm:px-6"),
          (f = e.isLoading || e.isPreparing),
          (_ = e.onShown),
          (n = es.P),
          (k = "m-auto"),
          (v = "grid w-full max-w-[848px] grid-cols-1 items-center gap-12 lg:grid-cols-2"),
          (h = "mx-auto flex w-full max-w-[400px] flex-col items-center gap-8"),
          D[34] !== e.provider
            ? ((O =
                null != e.provider &&
                (0, a.jsxs)("div", {
                  className: "inline-flex items-center gap-1 text-[13px] leading-[18px] font-medium text-info",
                  children: [
                    (0, a.jsx)(ei.I, { asset: en.i }),
                    (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.recommended_connector.admin_approval.label",
                      defaultMessage: "Approved by your admin",
                      description: "Reassuring label above approved work apps recommended to a new workspace member",
                    }),
                  ],
                })),
              (D[34] = e.provider),
              (D[35] = O))
            : (O = D[35]),
          D[36] !== e.provider || D[37] !== I || D[38] !== R
            ? ((E = (0, a.jsx)(eo.L3, {
                className: "text-2xl leading-7 font-semibold",
                children:
                  null == e.provider
                    ? (0, a.jsx)(l.A, {
                        id: "chatgpt.onboarding.new_workspace.connectors.title",
                        defaultMessage: "Connect your work to ChatGPT",
                        description: "Heading inviting a new workspace member to connect approved work apps",
                      })
                    : (0, a.jsx)(a.Fragment, {
                        children:
                          R >= 5
                            ? (0, a.jsx)(l.A, {
                                id: "chatgpt.onboarding.recommended_connector.bundle.title.with_teammates",
                                defaultMessage:
                                  "{count, plural, one {Join # teammate already using {providerBrandName} tools in ChatGPT} other {Join # teammates already using {providerBrandName} tools in ChatGPT}}",
                                description:
                                  "Provider recommendation heading. Count is the largest privacy-safe per-app teammate count, not a sum; providerBrandName is Google or Microsoft.",
                                values: { count: R, providerBrandName: I },
                              })
                            : (0, a.jsx)(l.A, {
                                id: "chatgpt.onboarding.recommended_connector.bundle.title.without_teammates",
                                defaultMessage: "Connect your {providerBrandName} tools to ChatGPT",
                                description:
                                  "Heading inviting a new workspace member to connect apps from providerBrandName, either Google or Microsoft",
                                values: { providerBrandName: I },
                              }),
                      }),
              })),
              (D[36] = e.provider),
              (D[37] = I),
              (D[38] = R),
              (D[39] = E))
            : (E = D[39]),
          D[40] !== e.provider
            ? ((M =
                null == e.provider &&
                (0, a.jsx)("p", {
                  className: "text-base leading-[26px]",
                  children: (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors.subtitle",
                    defaultMessage: "Choose from the apps approved for your workspace.",
                    description:
                      "Supporting text reassuring a new workspace member that listed apps have workspace approval",
                  }),
                })),
              (D[40] = e.provider),
              (D[41] = M))
            : (M = D[41]),
          D[42] !== E || D[43] !== M
            ? ((P = (0, a.jsxs)("div", { className: "flex w-full flex-col gap-3 text-center", children: [E, M] })),
              (D[42] = E),
              (D[43] = M),
              (D[44] = P))
            : (P = D[44]),
          D[45] !== O || D[46] !== P
            ? ((b = (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center gap-3 text-center",
                children: [O, P],
              })),
              (D[45] = O),
              (D[46] = P),
              (D[47] = b))
            : (b = D[47]),
          D[48] !== e.hasError || D[49] !== e.onRetry
            ? ((y =
                e.hasError &&
                (0, a.jsxs)("div", {
                  role: "alert",
                  className: "flex flex-col items-center gap-3 text-center",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceMemberOnboarding.connectors.loadError",
                        defaultMessage: "Your workspace apps couldn’t be loaded",
                        description:
                          "Error on workspace onboarding when approved apps or connection status cannot be loaded; the member can retry or skip",
                      }),
                    }),
                    (0, a.jsx)(g.$, {
                      type: "button",
                      color: "secondary",
                      onClick: e.onRetry,
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceMemberOnboarding.connectors.retry",
                        defaultMessage: "Try again",
                        description: "Retry loading approved apps in workspace onboarding",
                      }),
                    }),
                  ],
                })),
              (D[48] = e.hasError),
              (D[49] = e.onRetry),
              (D[50] = y))
            : (y = D[50]),
          D[51] !== e.hasError || D[52] !== e.isLoading
            ? ((x =
                !e.hasError &&
                e.isLoading &&
                (0, a.jsxs)("div", {
                  role: "status",
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsx)(er.y, {}),
                    (0, a.jsx)(l.A, {
                      id: "workspaceMemberOnboarding.connectors.loading",
                      defaultMessage: "Loading your workspace apps…",
                      description: "Status while approved work apps and their connection status load in onboarding",
                    }),
                  ],
                })),
              (D[51] = e.hasError),
              (D[52] = e.isLoading),
              (D[53] = x))
            : (x = D[53]),
          D[54] !== e.apps.length || D[55] !== e.hasError || D[56] !== e.isLoading
            ? ((C =
                !e.hasError &&
                !e.isLoading &&
                0 === e.apps.length &&
                (0, a.jsx)("p", {
                  className: "text-center text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "workspaceMemberOnboarding.connectors.empty",
                    defaultMessage: "There are no apps to connect right now",
                    description:
                      "Empty app inventory during workspace onboarding; the member can continue to their workspace",
                  }),
                })),
              (D[54] = e.apps.length),
              (D[55] = e.hasError),
              (D[56] = e.isLoading),
              (D[57] = C))
            : (C = D[57]),
          (w =
            !e.hasError &&
            !e.isLoading &&
            e.apps.length > 0 &&
            (0, a.jsx)("div", {
              className: "grid w-full grid-cols-2 gap-3",
              children: e.apps.map((t) =>
                (0, a.jsx)(
                  em,
                  {
                    item: t,
                    isBundle: null != e.provider,
                    selected: p.includes(t.app.id),
                    onSelect: () => {
                      null == e.provider
                        ? e.onConnect([t.app.id])
                        : G((e) => (e.includes(t.app.id) ? e.filter((e) => e !== t.app.id) : [...e, t.app.id]))
                    },
                  },
                  t.app.id,
                ),
              ),
            })),
          (D[1] = L),
          (D[2] = e),
          (D[3] = n),
          (D[4] = i),
          (D[5] = s),
          (D[6] = c),
          (D[7] = d),
          (D[8] = p),
          (D[9] = u),
          (D[10] = h),
          (D[11] = m),
          (D[12] = f),
          (D[13] = _),
          (D[14] = b),
          (D[15] = y),
          (D[16] = x),
          (D[17] = C),
          (D[18] = w),
          (D[19] = v),
          (D[20] = k),
          (D[21] = A))
      } else
        ((n = D[3]),
          (i = D[4]),
          (s = D[5]),
          (c = D[6]),
          (d = D[7]),
          (p = D[8]),
          (u = D[9]),
          (h = D[10]),
          (m = D[11]),
          (f = D[12]),
          (_ = D[13]),
          (b = D[14]),
          (y = D[15]),
          (x = D[16]),
          (C = D[17]),
          (w = D[18]),
          (v = D[19]),
          (k = D[20]),
          (A = D[21]))
      let H = e.requireConnector ? "items-stretch" : "items-center"
      ;(D[58] !== H ? ((S = (0, ea.A)("flex flex-col gap-3", H)), (D[58] = H), (D[59] = S)) : (S = D[59]),
        D[60] !== c || D[61] !== d || D[62] !== e || D[63] !== p || D[64] !== u
          ? ((j =
              (!e.requireConnector || u) &&
              (0, a.jsx)(g.$, {
                type: "button",
                color: "primary",
                size: "beaconAction",
                radius: "full",
                loading: e.isPreparing,
                disabled:
                  e.isLoading ||
                  e.isPreparing ||
                  e.hasError ||
                  (u ? 0 === p.length : (e.requireConnector || e.apps.length > 0) && !c),
                onClick: () => (u ? e.onConnect(p) : e.onContinue()),
                children: e.isPreparing
                  ? (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.recommended_connector.bundle.button.preparing",
                      defaultMessage: "Preparing…",
                      description:
                        "Temporary loading label on the primary button while new workspace onboarding prepares the selected Google or Microsoft apps' consent screen. Authorization has not started yet.",
                    })
                  : d,
              })),
            (D[60] = c),
            (D[61] = d),
            (D[62] = e),
            (D[63] = p),
            (D[64] = u),
            (D[65] = j))
          : (j = D[65]),
        D[66] !== s ||
        D[67] !== c ||
        D[68] !== e.canContinue ||
        D[69] !== e.hasError ||
        D[70] !== e.isLoading ||
        D[71] !== e.onContinue ||
        D[72] !== e.requireConnector
          ? ((N =
              e.requireConnector &&
              (0, a.jsx)(g.$, {
                type: "button",
                color: "primary",
                size: "beaconAction",
                radius: "full",
                disabled: !(e.canContinue ?? c) || e.isLoading || e.hasError,
                onClick: e.onContinue,
                children: s,
              })),
            (D[66] = s),
            (D[67] = c),
            (D[68] = e.canContinue),
            (D[69] = e.hasError),
            (D[70] = e.isLoading),
            (D[71] = e.onContinue),
            (D[72] = e.requireConnector),
            (D[73] = N))
          : (N = D[73]),
        D[74] !== e.isPreparing || D[75] !== e.isSkipDisabled || D[76] !== e.onSkip || D[77] !== e.requireConnector
          ? ((O =
              !e.requireConnector &&
              (0, a.jsx)(g.$, {
                type: "button",
                color: "ghostActive",
                size: "beaconAction",
                radius: "full",
                disabled: e.isPreparing || e.isSkipDisabled,
                onClick: e.onSkip,
                children: (0, a.jsx)(l.A, {
                  id: "chatgpt.onboarding.new_workspace.connectors.button.skip",
                  defaultMessage: "Skip for now",
                  description:
                    "Leaves workspace onboarding without requiring an app connection; apps can be connected later",
                }),
              })),
            (D[74] = e.isPreparing),
            (D[75] = e.isSkipDisabled),
            (D[76] = e.onSkip),
            (D[77] = e.requireConnector),
            (D[78] = O))
          : (O = D[78]),
        D[79] !== S || D[80] !== j || D[81] !== N || D[82] !== O
          ? ((E = (0, a.jsxs)("div", { className: S, children: [j, N, O] })),
            (D[79] = S),
            (D[80] = j),
            (D[81] = N),
            (D[82] = O),
            (D[83] = E))
          : (E = D[83]),
        D[84] !== h || D[85] !== E || D[86] !== b || D[87] !== y || D[88] !== x || D[89] !== C || D[90] !== w
          ? ((M = (0, a.jsxs)("section", { className: h, children: [b, y, x, C, w, E] })),
            (D[84] = h),
            (D[85] = E),
            (D[86] = b),
            (D[87] = y),
            (D[88] = x),
            (D[89] = C),
            (D[90] = w),
            (D[91] = M))
          : (M = D[91]))
      let F = e.provider ?? void 0
      return (
        D[92] !== F
          ? ((P = (0, a.jsx)("div", {
              className: "hidden w-full lg:block",
              children: (0, a.jsx)(ex, { provider: F }),
            })),
            (D[92] = F),
            (D[93] = P))
          : (P = D[93]),
        D[94] !== M || D[95] !== P || D[96] !== v
          ? ((T = (0, a.jsxs)("div", { className: v, children: [M, P] })),
            (D[94] = M),
            (D[95] = P),
            (D[96] = v),
            (D[97] = T))
          : (T = D[97]),
        D[98] !== n || D[99] !== T || D[100] !== k
          ? ((I = (0, a.jsx)(n, { className: k, children: T })), (D[98] = n), (D[99] = T), (D[100] = k), (D[101] = I))
          : (I = D[101]),
        D[102] !== i || D[103] !== m || D[104] !== f || D[105] !== _ || D[106] !== I || D[107] !== A
          ? ((R = (0, a.jsx)(i, { className: A, pageClassName: m, isBusy: f, onShown: _, children: I })),
            (D[102] = i),
            (D[103] = m),
            (D[104] = f),
            (D[105] = _),
            (D[106] = I),
            (D[107] = A),
            (D[108] = R))
          : (R = D[108]),
        R
      )
    }
    function ek(e) {
      let { teammateCount: t } = e
      return t
    }
    function eA(e) {
      let { connected: t } = e
      return t
    }
    function eS(e) {
      let { connected: t } = e
      return t
    }
    function ej(e) {
      let { app: t } = e
      return t.id
    }
    let eN = "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED"
    function eO(e) {
      let { id: t } = e
      return t
    }
    function eE() {}
    function eM(e) {
      let { id: t } = e
      return t
    }
    function eP(e) {
      let t,
        n,
        s,
        l,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        k,
        j = (0, o.c)(89),
        O = (0, i.gh)(T.E),
        E = (0, c.zy)(),
        M = (0, K.AS)()
      j[0] !== e.apps || j[1] !== e.isEnterprise || j[2] !== e.provider || j[3] !== M
        ? ((t = () => !1), (j[0] = e.apps), (j[1] = e.isEnterprise), (j[2] = e.provider), (j[3] = M), (j[4] = t))
        : (t = j[4])
      let [P] = (0, r.useState)(t),
        F = !0 === e.isEnterprise && P,
        W = F ? e.apps.filter(eU) : e.apps,
        B = F && W.length > 0,
        q = (0, i._U)(N.Cr, e.identity)
      j[5] !== B
        ? ((n = (e) => {
            let { connected: t, ready: n } = e
            return B ? n : t
          }),
          (j[5] = B),
          (j[6] = n))
        : (n = j[6])
      let $ = W.some(n),
        z = !B || $ || q,
        { markAppConnectOAuthPending: Z, openPendingAppConnectPopup: Y } = (0, L.ZN)(),
        Q = (0, r.useRef)(null)
      ;(j[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => () => Q.current?.()), (l = []), (j[7] = s), (j[8] = l))
        : ((s = j[7]), (l = j[8])),
        (0, r.useEffect)(s, l))
      let X = (0, r.useRef)(!1),
        J = "google" === e.provider ? G._k : H.zd,
        ee =
          null == e.provider
            ? void 0
            : (W.find((e) => {
                let { app: t, connected: n, canConnect: a, supportsDirectOAuth: o } = e
                return (
                  J.some((e) => {
                    let { connectorId: n } = e
                    return (
                      n === t.id &&
                      ("connector_5f3c8c41a1e54ad7a76272c89e2554fa" === n ||
                        "connector_1e4f6a44acf14e3ca1d96672f8c945bc" === n)
                    )
                  }) &&
                  (n || (a && o))
                )
              }) ??
              W.find((e) => {
                let { app: t, connected: n, canConnect: a, supportsDirectOAuth: o } = e
                return (
                  J.some((e) => {
                    let { connectorId: n } = e
                    return n === t.id
                  }) &&
                  (n || (a && o))
                )
              })),
        [et] = (0, r.useState)(() => {
          if (null == ee) return []
          let t = ee.app.id
          if ("google" === e.provider) {
            let e = (0, G.W9)({ connectorId: t, statsigClient: M })
            return e.some((e) => {
              let { connectorId: n } = e
              return n === t
            })
              ? e.map(eB)
              : [t]
          }
          return (0, H.Vk)({ connectorId: t, statsigClient: M }) ? [t, ...(0, H.HD)(t)] : [t]
        }),
        en = (null == e.provider ? [] : V[e.provider]).flatMap((e) => {
          let t = W.find((t) => {
            let { app: n } = t
            return n.id === e
          })
          return null != t && et.includes(e) && (t.connected || (t.canConnect && t.supportsDirectOAuth)) ? [t] : []
        }),
        ea = null != ee && en.length > 0 ? e.provider : null,
        eo = null == ea ? [...W].sort(eW).slice(0, 6) : en,
        [ei, er] = (0, r.useState)(null),
        es = null == ea || B
      j[9] !== es || j[10] !== ei
        ? ((d =
            null == ei
              ? void 0
              : {
                  connectorId: ei.primary.app.id,
                  productSku: "CONNECTOR_SETTING",
                  oauthReferrer: "workspace_onboarding",
                  redirectAfter: es ? "/onboarding" : "/",
                  oauthPresentation: es ? "popup" : void 0,
                }),
          (j[9] = es),
          (j[10] = ei),
          (j[11] = d))
        : (d = j[11])
      let el = d
      j[12] !== ee || j[13] !== e.isEnterprise || j[14] !== ea
        ? ((p =
            null == ee || null == ea || null == e.isEnterprise
              ? null
              : {
                  connectorProvider: ea,
                  connectorId: ee.app.id,
                  connectorName: ee.app.name,
                  isEnterprise: e.isEnterprise,
                  onboardingExperience: eN,
                }),
          (j[12] = ee),
          (j[13] = e.isEnterprise),
          (j[14] = ea),
          (j[15] = p))
        : (p = j[15])
      let ec = p
      j[16] !== O
        ? ((u = (e, t) =>
            (0, S.yy)(O, R.ZX, {
              onboardingExperience: eN,
              action: e,
              connectorId: t,
              stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
            })),
          (j[16] = O),
          (j[17] = u))
        : (u = j[17])
      let ed = u,
        ep = ea ?? "fallback",
        eu = null != ea && ei?.consentShown === !1
      ;(j[18] !== eo || j[19] !== ed || j[20] !== ec || j[21] !== e || j[22] !== O
        ? ((h = () => {
            ;(e.onShown(),
              !X.current &&
                ((X.current = !0),
                null != e.isEnterprise &&
                  (0, S.yy)(O, R.CI, {
                    connectorProvider: e.provider ?? "none",
                    hasRecommendation: null != e.provider,
                    isEnterprise: e.isEnterprise,
                    requestSucceeded: e.recommendationSucceeded,
                    onboardingExperience: eN,
                  }),
                null != ec
                  ? (0, S.yy)(O, R.tT, ec)
                  : eo.length > 0 && ed("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN")))
          }),
          (j[18] = eo),
          (j[19] = ed),
          (j[20] = ec),
          (j[21] = e),
          (j[22] = O),
          (j[23] = h))
        : (h = j[23]),
        j[24] !== eo ||
        j[25] !== E ||
        j[26] !== ed ||
        j[27] !== ec ||
        j[28] !== ee?.app ||
        j[29] !== e ||
        j[30] !== B ||
        j[31] !== O ||
        j[32] !== ei
          ? ((m = (t) => {
              if (null != ei || !(0, N.oA)(O, e.identity)) return
              let n = eo.filter((e) => {
                  let { app: n, connected: a, canConnect: o } = e
                  return t.includes(n.id) && !a && o
                }),
                a =
                  n.find((e) => {
                    let { app: t } = e
                    return t.id === ee?.app.id
                  }) ?? n[0]
              if (null != a) {
                if (
                  (B &&
                    (e.beforeOAuth(),
                    (0, N.Jl)(O, e.identity),
                    (0, A.oo)(O, E, { replace: !0, state: { ...E.state, workspaceMemberOnboarding: e.identity } })),
                  null != ec)
                ) {
                  let e = eo.filter(eF).map(eH),
                    t = eo.filter(eG).map(eL)
                  ;(0, S.yy)(O, R.nT, {
                    ...ec,
                    selectedConnectorIds: n.map(eD),
                    selectableConnectorIds: e,
                    alreadyConnectedConnectorIds: t,
                    selectedConnectorCount: (0, I.At)(n.length),
                    selectableConnectorCount: (0, I.At)(e.length),
                    alreadyConnectedConnectorCount: (0, I.At)(t.length),
                    allSelectableSelected: n.length === e.length,
                  })
                } else ed("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED", a.app.id)
                er({ primary: a, companionIds: n.filter((e) => e !== a).map(eR), consentShown: !1 })
              }
            }),
            (j[24] = eo),
            (j[25] = E),
            (j[26] = ed),
            (j[27] = ec),
            (j[28] = ee?.app),
            (j[29] = e),
            (j[30] = B),
            (j[31] = O),
            (j[32] = ei),
            (j[33] = m))
          : (m = j[33]),
        j[34] !== z || j[35] !== ed || j[36] !== e || j[37] !== ea
          ? ((g = () => {
              z &&
                (null == ea && ed("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
                e.onContinue())
            }),
            (j[34] = z),
            (j[35] = ed),
            (j[36] = e),
            (j[37] = ea),
            (j[38] = g))
          : (g = j[38]),
        j[39] !== ed || j[40] !== ec || j[41] !== e || j[42] !== B || j[43] !== O
          ? ((f = () => {
              B ||
                (null != ec
                  ? (0, S.yy)(O, R.qo, ec)
                  : ed("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
                e.onContinue())
            }),
            (j[39] = ed),
            (j[40] = ec),
            (j[41] = e),
            (j[42] = B),
            (j[43] = O),
            (j[44] = f))
          : (f = j[44]),
        j[45] !== eo ||
        j[46] !== z ||
        j[47] !== ea ||
        j[48] !== B ||
        j[49] !== ep ||
        j[50] !== eu ||
        j[51] !== h ||
        j[52] !== m ||
        j[53] !== g ||
        j[54] !== f
          ? ((_ = (0, a.jsx)(
              ev,
              {
                apps: eo,
                provider: ea,
                requireConnector: B,
                canContinue: z,
                isLoading: !1,
                isPreparing: eu,
                hasError: !1,
                onShown: h,
                onConnect: m,
                onContinue: g,
                onSkip: f,
                onRetry: eI,
              },
              ep,
            )),
            (j[45] = eo),
            (j[46] = z),
            (j[47] = ea),
            (j[48] = B),
            (j[49] = ep),
            (j[50] = eu),
            (j[51] = h),
            (j[52] = m),
            (j[53] = g),
            (j[54] = f),
            (j[55] = _))
          : (_ = j[55]))
      let eh = ei?.primary.app ?? null,
        em = null == ea,
        eg = ei?.companionIds,
        ef = null == ea
      return (
        j[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = () => {
              er(eT)
            }),
            (j[56] = b))
          : (b = j[56]),
        j[57] !== el?.redirectAfter || j[58] !== e.identity || j[59] !== es
          ? ((y = () => ({
              returnTo: el?.redirectAfter ?? "/",
              resumeTarget: es
                ? {
                    kind: "return-to-location-state",
                    successState: { workspaceMemberOnboarding: e.identity },
                    failureState: { workspaceMemberOnboarding: e.identity },
                  }
                : void 0,
            })),
            (j[57] = el?.redirectAfter),
            (j[58] = e.identity),
            (j[59] = es),
            (j[60] = y))
          : (y = j[60]),
        j[61] !== el || j[62] !== Z || j[63] !== Y || j[64] !== e || j[65] !== B || j[66] !== es || j[67] !== O
          ? ((x = (t) => {
              if ((0, N.oA)(O, e.identity)) {
                if (null == Z({ ...t, hostId: D.iwv, appConnectOptions: el, returnTo: el?.redirectAfter ?? "/" })) {
                  ;(t.preventNavigation?.(), t.preopenedPopup?.close())
                  return
                }
                es &&
                  null != t.preventNavigation &&
                  (B || t.preventNavigation(),
                  Q.current?.(),
                  (Q.current = Y(
                    t.redirectUrl,
                    (t) => {
                      "success" === t.kind && e.onConnected()
                    },
                    t.preopenedPopup,
                  )),
                  B && null != Q.current && t.preventNavigation())
              }
            }),
            (j[61] = el),
            (j[62] = Z),
            (j[63] = Y),
            (j[64] = e),
            (j[65] = B),
            (j[66] = es),
            (j[67] = O),
            (j[68] = x))
          : (x = j[68]),
        j[69] !== e.beforeOAuth || j[70] !== e.identity || j[71] !== B || j[72] !== es || j[73] !== O
          ? ((C = es && !B ? async () => (0, N.oA)(O, e.identity) : e.beforeOAuth),
            (j[69] = e.beforeOAuth),
            (j[70] = e.identity),
            (j[71] = B),
            (j[72] = es),
            (j[73] = O),
            (j[74] = C))
          : (C = j[74]),
        j[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => {
              e || er(null)
            }),
            (j[75] = w))
          : (w = j[75]),
        j[76] !== el ||
        j[77] !== e.onConnected ||
        j[78] !== eh ||
        j[79] !== em ||
        j[80] !== eg ||
        j[81] !== ef ||
        j[82] !== y ||
        j[83] !== x ||
        j[84] !== C
          ? ((v = (0, a.jsx)(U.Z, {
              app: eh,
              showLoadingDialog: em,
              hostId: D.iwv,
              appConnectOptions: el,
              initialSelectedCompanionConnectorIds: eg,
              skipOAuthBundle: ef,
              postConnectSource: null,
              onConnected: e.onConnected,
              onConsentShown: b,
              getOAuthResumeContext: y,
              onOAuthStarted: x,
              beforeConnect: C,
              onOpenChange: w,
            })),
            (j[76] = el),
            (j[77] = e.onConnected),
            (j[78] = eh),
            (j[79] = em),
            (j[80] = eg),
            (j[81] = ef),
            (j[82] = y),
            (j[83] = x),
            (j[84] = C),
            (j[85] = v))
          : (v = j[85]),
        j[86] !== _ || j[87] !== v
          ? ((k = (0, a.jsxs)(a.Fragment, { children: [_, v] })), (j[86] = _), (j[87] = v), (j[88] = k))
          : (k = j[88]),
        k
      )
    }
    function eT(e) {
      return null == e ? null : { ...e, consentShown: !0 }
    }
    function eI() {}
    function eR(e) {
      let { app: t } = e
      return t.id
    }
    function eD(e) {
      let { app: t } = e
      return t.id
    }
    function eL(e) {
      let { app: t } = e
      return t.id
    }
    function eG(e) {
      let { connected: t } = e
      return t
    }
    function eH(e) {
      let { app: t } = e
      return t.id
    }
    function eF(e) {
      let { connected: t, canConnect: n } = e
      return !t && n
    }
    function eW(e, t) {
      return t.teammateCount - e.teammateCount || Number(t.connected) - Number(e.connected)
    }
    function eB(e) {
      let { connectorId: t } = e
      return t
    }
    function eU(e) {
      let { ready: t, canConnect: n } = e
      return t || n
    }
    var eK = n("sv3Z"),
      eq = n("Ot7V"),
      eV = n("SLig"),
      e$ = n("Jgbh"),
      ez = n("jZDY"),
      eZ = n("TjgH"),
      eY = n("cLvX"),
      eQ = n.p + "assets/desktop-preview.20845310b0.png"
    function eX(e) {
      let t,
        n,
        i,
        r,
        c,
        d,
        p,
        u,
        h,
        m,
        f,
        _,
        b,
        y = (0, o.c)(24),
        x = (0, s.A)(),
        C = e.onShown
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("img", { className: "mb-2 size-24", src: eY, alt: "", "aria-hidden": "true" })),
            (y[0] = t))
          : (t = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(eZ.E, {
              variant: "tip",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.approved_by_admin",
                defaultMessage: "Approved by your admin",
                description:
                  "Label above the desktop download heading indicating the workspace administrator has approved the app",
              }),
            })),
            (y[1] = n))
          : (n = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(eo.L3, {
              className: "text-3xl leading-9 font-semibold",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.title",
                defaultMessage: "Download the ChatGPT Desktop app",
                description: "Heading inviting a new Business workspace member to download ChatGPT for desktop",
              }),
            })),
            (y[2] = i))
          : (i = y[2]),
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("p", {
              className: "text-base leading-6 text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.description",
                defaultMessage:
                  "Use Chat and Codex side by side on your desktop to turn team ideas into docs, spreadsheets, presentations, and code",
                description:
                  "Description explaining the value of the ChatGPT Desktop app during Business workspace onboarding",
              }),
            })),
            (y[3] = r))
          : (r = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.download_desktop_app",
              defaultMessage: "Download desktop app",
              description:
                "Opens the ChatGPT Desktop app download for the member's operating system and continues onboarding",
            })),
            (y[4] = c))
          : (c = y[4]),
        y[5] !== e.downloadUrl || y[6] !== e.onDownload
          ? ((d = (0, a.jsx)(g.z, {
              size: "detailAction",
              radius: "full",
              color: "primary",
              href: e.downloadUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: e.onDownload,
              children: c,
            })),
            (y[5] = e.downloadUrl),
            (y[6] = e.onDownload),
            (y[7] = d))
          : (d = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.maybe_later",
              defaultMessage: "Maybe later",
              description: "Skips downloading the desktop app and continues workspace onboarding",
            })),
            (y[8] = p))
          : (p = y[8]),
        y[9] !== e.onContinue
          ? ((u = (0, a.jsx)(g.$, {
              size: "detailAction",
              radius: "full",
              color: "outlineGhost",
              onClick: e.onContinue,
              children: p,
            })),
            (y[9] = e.onContinue),
            (y[10] = u))
          : (u = y[10]),
        y[11] !== d || y[12] !== u
          ? ((h = (0, a.jsxs)("div", {
              className: "flex w-full max-w-xs flex-col items-center gap-5 justify-self-center text-center",
              children: [
                t,
                n,
                i,
                r,
                (0, a.jsxs)("div", { className: "mt-2 flex flex-col items-center gap-4", children: [d, u] }),
              ],
            })),
            (y[11] = d),
            (y[12] = u),
            (y[13] = h))
          : (h = y[13]),
        y[14] !== x
          ? ((m = x.formatMessage({
              id: "workspaceMemberOnboarding.desktopPreviewAlt",
              defaultMessage:
                "Codex prompt to analyze a dashboard in Sheets, create a summary in PowerPoint, and share it in Slack",
              description: "Description of the desktop app illustration beside the download invitation",
            })),
            (y[14] = x),
            (y[15] = m))
          : (m = y[15]),
        y[16] !== m
          ? ((f = (0, a.jsx)("img", {
              className: "hidden w-full rounded-3xl object-contain md:block",
              src: eQ,
              alt: m,
            })),
            (y[16] = m),
            (y[17] = f))
          : (f = y[17]),
        y[18] !== f || y[19] !== h
          ? ((_ = (0, a.jsx)(es.P, {
              children: (0, a.jsxs)("div", {
                className: "grid w-full max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24",
                children: [h, f],
              }),
            })),
            (y[18] = f),
            (y[19] = h),
            (y[20] = _))
          : (_ = y[20]),
        y[21] !== e.onShown || y[22] !== _
          ? ((b = (0, a.jsx)(ec, { onShown: C, children: _ })), (y[21] = e.onShown), (y[22] = _), (y[23] = b))
          : (b = y[23]),
        b
      )
    }
    var eJ = n("T4l2"),
      e1 = n.n(eJ),
      e0 = n("hqLt")
    function e2(e) {
      let t,
        n,
        i = (0, o.c)(14),
        { options: r, value: s, fullWidthOption: l, disabled: c, onSelect: d } = e,
        p = void 0 !== c && c
      if (i[0] !== p || i[1] !== l || i[2] !== d || i[3] !== r || i[4] !== s) {
        let e
        ;(i[6] !== p || i[7] !== l || i[8] !== d || i[9] !== r.length || i[10] !== s
          ? ((e = (e) => {
              let t = e.id === l && r.length % 2 == 1
              return (0, a.jsxs)(
                g.$,
                {
                  className: (0, ea.A)("w-full", t && "sm:col-span-2 sm:justify-center"),
                  color: "surveyCard",
                  size: "surveyCard",
                  focusRing: "native",
                  type: "button",
                  "aria-pressed": s === e.id,
                  disabled: p,
                  onClick: () => d(e.id),
                  children: [
                    e.icon,
                    (0, a.jsx)("span", {
                      className: (0, ea.A)("flex-1 text-start", t && "sm:flex-none sm:text-center"),
                      children: e.label,
                    }),
                    s === e.id ? (0, a.jsx)(eu.hEG, {}) : null,
                  ],
                },
                e.id,
              )
            }),
            (i[6] = p),
            (i[7] = l),
            (i[8] = d),
            (i[9] = r.length),
            (i[10] = s),
            (i[11] = e))
          : (e = i[11]),
          (t = r.map(e)),
          (i[0] = p),
          (i[1] = l),
          (i[2] = d),
          (i[3] = r),
          (i[4] = s),
          (i[5] = t))
      } else t = i[5]
      return (
        i[12] !== t
          ? ((n = (0, a.jsx)("div", {
              className:
                "mx-auto grid min-h-0 flex-1 grid-cols-1 justify-items-center gap-3 overflow-x-hidden overflow-y-auto pb-4 sm:w-128 sm:grid-cols-2",
              children: t,
            })),
            (i[12] = t),
            (i[13] = n))
          : (n = i[13]),
        n
      )
    }
    var e3 = n("GFe9"),
      e4 = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M17.46 16.1903C17.4599 14.8232 16.954 13.8464 16.2324 13.205C15.4986 12.5527 14.5013 12.2128 13.4824 12.2128C12.4634 12.2128 11.4653 12.5526 10.7314 13.205C10.0099 13.8464 9.50396 14.8232 9.50391 16.1903C9.50391 16.5576 9.20614 16.8553 8.83887 16.8553C8.47175 16.8552 8.17383 16.5575 8.17383 16.1903C8.17389 14.4623 8.82922 13.117 9.84863 12.2108C10.8558 11.3157 12.1802 10.8827 13.4824 10.8827C14.7847 10.8828 16.1091 11.3156 17.1162 12.2108C18.1356 13.117 18.79 14.4623 18.79 16.1903C18.79 16.5576 18.4923 16.8553 18.125 16.8553C17.7577 16.8553 17.46 16.5576 17.46 16.1903ZM1.20996 15.4169C1.20996 13.6399 2.02488 12.3419 3.19824 11.6005C4.34687 10.8747 5.80059 10.7042 7.08496 11.0663C7.43844 11.166 7.6446 11.5341 7.54492 11.8876C7.44517 12.2408 7.0779 12.446 6.72461 12.3466C5.77802 12.0796 4.71654 12.2137 3.9082 12.7245C3.12457 13.2197 2.54004 14.0915 2.54004 15.4169C2.53995 15.7841 2.24222 16.0819 1.875 16.0819C1.50778 16.0819 1.21005 15.7841 1.20996 15.4169ZM7.78711 6.90515C7.78711 5.99033 7.04568 5.24794 6.13086 5.24792C5.21603 5.24792 4.47461 5.99032 4.47461 6.90515C4.47484 7.81979 5.21617 8.5614 6.13086 8.5614C7.04553 8.56138 7.78688 7.81978 7.78711 6.90515ZM15.5254 6.51746C15.5252 5.38921 14.6107 4.47466 13.4824 4.47449C12.354 4.47449 11.4387 5.3891 11.4385 6.51746C11.4385 7.64597 12.3539 8.5614 13.4824 8.5614C14.6108 8.56122 15.5254 7.64586 15.5254 6.51746ZM9.11719 6.90515C9.11695 8.55431 7.78007 9.89146 6.13086 9.89148C4.48163 9.89148 3.14477 8.55433 3.14453 6.90515C3.14453 5.25578 4.48149 3.91785 6.13086 3.91785C7.78022 3.91786 9.11719 5.25579 9.11719 6.90515ZM16.8555 6.51746C16.8555 8.3804 15.3453 9.8913 13.4824 9.89148C11.6194 9.89148 10.1084 8.38051 10.1084 6.51746C10.1086 4.65456 11.6195 3.14441 13.4824 3.14441C15.3452 3.14459 16.8553 4.65467 16.8555 6.51746Z",
          }),
        })
    let e5 = {
      engineering: (0, a.jsx)(
        (e) =>
          (0, a.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, a.jsx)("path", {
                d: "M6.19629 7.86231C6.42357 7.63534 6.7752 7.60692 7.0332 7.77734L7.1377 7.86231L8.80371 9.5293C9.06329 9.78889 9.06307 10.21 8.80371 10.4697L7.1377 12.1367C6.878 12.3964 6.45599 12.3964 6.19629 12.1367C5.93686 11.8771 5.93697 11.456 6.19629 11.1963L7.39258 9.99902L6.19629 8.80371L6.11133 8.69922C5.94087 8.4411 5.96904 8.08955 6.19629 7.86231Z",
              }),
              (0, a.jsx)("path", {
                d: "M13.4668 11.0156C13.7699 11.0776 13.998 11.3456 13.998 11.667C13.9979 11.9883 13.7698 12.2564 13.4668 12.3184L13.333 12.332H10.833C10.466 12.3319 10.1682 12.034 10.168 11.667C10.168 11.2998 10.4659 11.0021 10.833 11.002H13.333L13.4668 11.0156Z",
              }),
              (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.6602 2.66504C13.3492 2.66504 13.9062 2.66439 14.3564 2.70117C14.8142 2.73859 15.2201 2.81796 15.5967 3.00977C16.1922 3.31321 16.677 3.79805 16.9805 4.39356C17.1722 4.77014 17.2517 5.17604 17.2891 5.63379C17.3258 6.08402 17.3252 6.64102 17.3252 7.33008V12.6602C17.3252 13.3492 17.3258 13.9062 17.2891 14.3564C17.2516 14.8142 17.1723 15.2201 16.9805 15.5967C16.677 16.1922 16.1922 16.677 15.5967 16.9805C15.2201 17.1723 14.8142 17.2516 14.3564 17.2891C13.9062 17.3258 13.3492 17.3252 12.6602 17.3252H7.33008C6.64102 17.3252 6.08402 17.3258 5.63379 17.2891C5.17604 17.2517 4.77014 17.1722 4.39356 16.9805C3.79805 16.677 3.31321 16.1922 3.00977 15.5967C2.81796 15.2201 2.73859 14.8142 2.70117 14.3564C2.66439 13.9062 2.66504 13.3492 2.66504 12.6602V7.33008C2.66504 6.64101 2.66439 6.08402 2.70117 5.63379C2.73858 5.17601 2.81797 4.77016 3.00977 4.39356C3.31321 3.79802 3.79802 3.31321 4.39356 3.00977C4.77016 2.81797 5.17601 2.73858 5.63379 2.70117C6.08402 2.66439 6.64101 2.66504 7.33008 2.66504H12.6602ZM7.33008 3.99512C6.61907 3.99512 6.1257 3.99601 5.74219 4.02734C5.3665 4.05804 5.15508 4.11481 4.99707 4.19531C4.65183 4.37124 4.37124 4.65183 4.19531 4.99707C4.11481 5.15508 4.05805 5.3665 4.02734 5.74219C3.99601 6.1257 3.99512 6.61908 3.99512 7.33008V12.6602C3.99512 13.3711 3.99601 13.8646 4.02734 14.248C4.05805 14.6237 4.11481 14.8352 4.19531 14.9932C4.37124 15.3384 4.65186 15.619 4.99707 15.7949C5.15507 15.8754 5.36654 15.9322 5.74219 15.9629C6.1257 15.9942 6.61908 15.9951 7.33008 15.9951H12.6602C13.3711 15.9951 13.8646 15.9942 14.248 15.9629C14.6237 15.9322 14.8352 15.8754 14.9932 15.7949C15.3384 15.619 15.619 15.3384 15.7949 14.9932C15.8754 14.8352 15.9322 14.6237 15.9629 14.248C15.9942 13.8646 15.9951 13.3711 15.9951 12.6602V7.33008C15.9951 6.61908 15.9942 6.1257 15.9629 5.74219C15.9322 5.36654 15.8754 5.15507 15.7949 4.99707C15.619 4.65186 15.3384 4.37124 14.9932 4.19531C14.8352 4.11481 14.6237 4.05805 14.248 4.02734C13.8646 3.99601 13.3711 3.99512 12.6602 3.99512H7.33008Z",
              }),
            ],
          }),
        { className: "icon-base shrink-0", "aria-hidden": !0 },
      ),
      data_science: (0, a.jsx)(eu.sBI, {}),
      product_management: (0, a.jsx)(
        (e) =>
          (0, a.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, a.jsx)("path", {
              d: "M16.835 5.90091C16.835 5.68052 16.7115 5.4819 16.5205 5.38236L16.4346 5.34623L13.165 4.25638V14.5201L16.0654 15.4869L16.1357 15.5064C16.491 15.5782 16.835 15.3066 16.835 14.9322V5.90091ZM8.16504 5.47904V15.7437L11.835 14.5201V4.25638L8.16504 5.47904ZM18.165 14.9322C18.165 16.1576 17.0394 17.0456 15.877 16.8111L15.6445 16.7495L12.6846 15.7622C12.5946 15.7323 12.499 15.7247 12.4062 15.7398L12.3154 15.7622L8.10547 17.1656C7.76144 17.2802 7.39309 17.2946 7.04297 17.2085L6.89453 17.1656L3.14453 15.9156C2.3626 15.6549 1.83502 14.9234 1.83496 14.0992V5.06791C1.83496 3.76088 3.11551 2.83734 4.35547 3.25052L7.31543 4.23685L7.40625 4.26029C7.49905 4.27534 7.59449 4.26683 7.68457 4.23685L11.8945 2.83451L12.043 2.79154C12.3931 2.70547 12.7614 2.71982 13.1055 2.83451L16.8555 4.08451L16.999 4.13822C17.7014 4.43636 18.165 5.12808 18.165 5.90091V14.9322ZM3.16504 14.0992C3.1651 14.3509 3.32659 14.5742 3.56543 14.6538L6.83496 15.7437V5.47904L3.93457 4.51224C3.55592 4.38638 3.16504 4.66878 3.16504 5.06791V14.0992Z",
            }),
          }),
        { className: "icon-base shrink-0", "aria-hidden": !0 },
      ),
      design: (0, a.jsx)(eu.aRI, {}),
      marketing: (0, a.jsx)(
        (e) =>
          (0, a.jsxs)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, a.jsx)("path", {
                d: "M16.835 9.83331C16.835 9.12228 16.8341 8.62894 16.8027 8.24542C16.772 7.86972 16.7153 7.65831 16.6348 7.50031C16.4588 7.15506 16.1783 6.87447 15.833 6.69855C15.675 6.61804 15.4636 6.56128 15.0879 6.53058C14.7044 6.49924 14.211 6.49835 13.5 6.49835H6.5C5.78896 6.49835 5.29563 6.49924 4.91211 6.53058C4.5364 6.56128 4.325 6.61804 4.16699 6.69855C3.82175 6.87447 3.54116 7.15506 3.36524 7.50031C3.28473 7.65831 3.22797 7.86972 3.19727 8.24542C3.16593 8.62894 3.16504 9.12228 3.16504 9.83331V12.2503C3.16504 12.9612 3.16594 13.4547 3.19727 13.8382C3.22797 14.2137 3.28475 14.4254 3.36524 14.5833C3.54117 14.9284 3.82182 15.2092 4.16699 15.3851C4.32499 15.4656 4.53646 15.5223 4.91211 15.553C5.29563 15.5844 5.78896 15.5853 6.5 15.5853H13.5C14.211 15.5853 14.7044 15.5844 15.0879 15.553C15.4635 15.5223 15.675 15.4656 15.833 15.3851C16.1782 15.2092 16.4588 14.9284 16.6348 14.5833C16.7153 14.4254 16.772 14.2137 16.8027 13.8382C16.8341 13.4547 16.835 12.9612 16.835 12.2503V9.83331ZM18.165 12.2503C18.165 12.9392 18.1657 13.4964 18.1289 13.9466C18.0915 14.4044 18.0122 14.8102 17.8203 15.1868C17.5169 15.7824 17.0321 16.2662 16.4365 16.5696C16.0599 16.7615 15.6542 16.8408 15.1963 16.8782C14.746 16.915 14.1891 16.9153 13.5 16.9153H6.5C5.81091 16.9153 5.25395 16.915 4.80371 16.8782C4.34584 16.8408 3.94015 16.7615 3.56348 16.5696C2.96794 16.2662 2.48313 15.7824 2.17969 15.1868C1.98783 14.8102 1.90853 14.4044 1.87109 13.9466C1.83431 13.4964 1.83496 12.9392 1.83496 12.2503V9.83331C1.83496 9.14422 1.83431 8.58727 1.87109 8.13702C1.90851 7.67923 1.98788 7.27341 2.17969 6.89679C2.48313 6.30126 2.96794 5.81644 3.56348 5.513C3.94009 5.3212 4.34592 5.24182 4.80371 5.20441C5.25395 5.16762 5.81091 5.16827 6.5 5.16827H13.5C14.1891 5.16827 14.746 5.16762 15.1963 5.20441C15.6541 5.24182 16.0599 5.3212 16.4365 5.513C17.0321 5.81644 17.5169 6.30126 17.8203 6.89679C18.0121 7.27341 18.0915 7.67923 18.1289 8.13702C18.1657 8.58727 18.165 9.14422 18.165 9.83331V12.2503Z",
              }),
              (0, a.jsx)("path", {
                d: "M12.2686 2.64485L15.0069 2.66828L15.1407 2.68293C15.443 2.74798 15.6683 3.01883 15.6651 3.34016C15.6618 3.66124 15.4313 3.92651 15.128 3.98567L14.9932 3.99836L12.2627 3.97493C9.84402 3.95932 8.1286 3.96715 5.00687 3.99836C4.63968 4.00203 4.33877 3.70732 4.33499 3.34016C4.33132 2.97297 4.62603 2.67206 4.9932 2.66828C8.12135 2.63701 9.8436 2.62921 12.2686 2.64485Z",
              }),
            ],
          }),
        { className: "icon-base shrink-0", "aria-hidden": !0 },
      ),
      sales: (0, a.jsx)(
        (e) =>
          (0, a.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, a.jsx)("path", {
              d: "M16.0017 8.33331C16.0017 7.78011 15.553 7.33136 14.9998 7.33136H12.3318V16.0013H16.0017V8.33331ZM11.0017 5.00031C11.0017 4.4471 10.553 3.99835 9.99976 3.99835H4.99976C4.4467 3.99853 3.99878 4.44721 3.99878 5.00031V16.0013H6.83472V14.1663C6.83489 13.7993 7.13274 13.5015 7.49976 13.5013C7.86692 13.5013 8.16462 13.7992 8.16479 14.1663V16.0013H11.0017V5.00031ZM12.3318 6.00128H14.9998C16.2875 6.00128 17.3318 7.04557 17.3318 8.33331V16.0013H18.3337L18.4675 16.015C18.7704 16.077 18.9986 16.3451 18.9988 16.6663C18.9988 16.9876 18.7705 17.2556 18.4675 17.3177L18.3337 17.3314H1.66675C1.29948 17.3314 1.00171 17.0336 1.00171 16.6663C1.00188 16.2992 1.29959 16.0013 1.66675 16.0013H2.6687V5.00031C2.6687 3.71267 3.71216 2.66845 4.99976 2.66827H9.99976C11.2875 2.66827 12.3318 3.71256 12.3318 5.00031V6.00128Z",
            }),
          }),
        { className: "icon-base shrink-0", "aria-hidden": !0 },
      ),
      finance: (0, a.jsx)(
        (e) =>
          (0, a.jsxs)("svg", {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, a.jsx)("path", {
                d: "M12 7.75V6.75",
                stroke: "currentColor",
                strokeWidth: 1.596,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                d: "M12 16.25V17.25",
                stroke: "currentColor",
                strokeWidth: 1.596,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                d: "M9.5 15.0807C12 16.8044 14.5 15.8538 14.5 14.2826C14.5 11.5756 9.5 12.5263 9.5 9.81992C9.5 8.24806 12 7.29717 14 8.64047",
                stroke: "currentColor",
                strokeWidth: 1.596,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, a.jsx)("path", {
                d: "M11.9998 20.7001C16.8047 20.7001 20.6998 16.8049 20.6998 12C20.6998 7.19517 16.8047 3.30005 11.9998 3.30005C7.19493 3.30005 3.2998 7.19517 3.2998 12C3.2998 16.8049 7.19493 20.7001 11.9998 20.7001Z",
                stroke: "currentColor",
                strokeWidth: 1.596,
              }),
            ],
          }),
        { className: "icon-base shrink-0", "aria-hidden": !0 },
      ),
      operations: (0, a.jsx)(
        (e) =>
          (0, a.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.998 2.08691C12.7601 2.08691 14.0029 3.31903 14.0029 5.08105H14.6748C16.5285 5.08105 17.9951 6.5477 17.9951 8.40137V13.7588C17.9951 15.6125 16.5285 17.0791 14.6748 17.0791H5.3252C3.47149 17.0791 2.00488 15.6125 2.00488 13.7588V8.40137C2.00493 6.5477 3.47152 5.08105 5.3252 5.08105H5.99707C5.99708 3.31903 7.23993 2.08691 9.00195 2.08691H10.998ZM3.3291 13.7588C3.3291 14.8792 4.20482 15.7549 5.3252 15.7549H14.6748C15.7952 15.7549 16.6709 14.8792 16.6709 13.7588V11.8711C16.2055 12.167 15.6319 12.333 14.9707 12.333H11.4971V13.3311C11.4971 13.7486 11.2427 13.9833 10.8252 13.9834H9.1748C8.75733 13.9833 8.5127 13.7486 8.5127 13.3311V12.333H5.15137C4.45059 12.3329 3.8301 12.1476 3.3291 11.8174V13.7588ZM5.3252 6.40527C4.20485 6.40527 3.32915 7.28104 3.3291 8.40137V9.18555C3.3291 10.2548 4.08218 11.0086 5.15137 11.0088H14.8379C15.9073 11.0088 16.6709 10.255 16.6709 9.18555V8.40137C16.6709 7.28104 15.7951 6.40527 14.6748 6.40527H5.3252ZM9.00195 3.41113C8.014 3.41113 7.3213 4.10329 7.32129 5.08105H12.6787C12.6787 4.10329 11.986 3.41113 10.998 3.41113H9.00195Z",
            }),
          }),
        { className: "icon-base shrink-0", "aria-hidden": !0 },
      ),
      people_hr: (0, a.jsx)(e4, { className: "icon-base shrink-0", "aria-hidden": !0 }),
      legal: (0, a.jsx)(eu._NU, {}),
      something_else: (0, a.jsx)(ei.I, { asset: e0.O }),
    }
    function e6(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d = (0, o.c)(13)
      return (
        d[0] !== e.onShown
          ? ((t = { "aria-describedby": void 0, onOpenAutoFocus: e.onShown, onEscapeKeyDown: e7 }),
            (d[0] = e.onShown),
            (d[1] = t))
          : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(eo.L3, {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.role.new.question",
                defaultMessage: "What kind of work do you do?",
                description:
                  "Heading on the generic ChatGPT workspace onboarding role screen. It asks a newly added workspace member to choose their primary work area before continuing.",
              }),
            })),
            (d[2] = n))
          : (n = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                n,
                (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.role.new.selectOne",
                    defaultMessage: "Select the option that best applies",
                    description:
                      "Instruction below the heading on the generic ChatGPT workspace onboarding role screen. It tells a newly added workspace member that exactly one short role option should be selected.",
                  }),
                }),
              ],
            })),
            (d[3] = i))
          : (i = d[3]),
        d[4] !== e.roles ? ((r = e.roles.map(e8)), (d[4] = e.roles), (d[5] = r)) : (r = d[5]),
        d[6] !== e.onSelect || d[7] !== e.selectedRole || d[8] !== r
          ? ((s = (0, a.jsx)("div", {
              className: "flex h-full max-h-full flex-col select-none",
              children: (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden",
                children: (0, a.jsx)(es.P, {
                  className:
                    "max-h-full min-h-0 justify-between self-center overflow-hidden max-sm:h-full max-sm:px-6 max-sm:pt-10 max-sm:pb-5 sm:max-w-175",
                  children: (0, a.jsxs)("div", {
                    className: "flex min-h-0 w-full flex-1 flex-col",
                    children: [
                      i,
                      (0, a.jsx)(e2, {
                        options: r,
                        value: e.selectedRole,
                        fullWidthOption: "something_else",
                        onSelect: e.onSelect,
                      }),
                    ],
                  }),
                }),
              }),
            })),
            (d[6] = e.onSelect),
            (d[7] = e.selectedRole),
            (d[8] = r),
            (d[9] = s))
          : (s = d[9]),
        d[10] !== t || d[11] !== s
          ? ((c = (0, a.jsx)(el.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsx)(eo.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: "h-full w-full bg-surface text-default",
                contentProps: t,
                children: s,
              }),
            })),
            (d[10] = t),
            (d[11] = s),
            (d[12] = c))
          : (c = d[12]),
        c
      )
    }
    function e8(e) {
      return { id: e, label: (0, a.jsx)(l.A, { ...e3.V[e] }), icon: e5[e] }
    }
    function e7(e) {
      return e.preventDefault()
    }
    function e9() {}
    function te() {
      return [
        ...e1()([
          "engineering",
          "data_science",
          "product_management",
          "design",
          "marketing",
          "sales",
          "finance",
          "operations",
          "people_hr",
          "legal",
        ]),
        "something_else",
      ]
    }
    let tt = (0, j.n)(T.E, {
      initialAnswers: { role: null },
      getContext: (e, t) => {
        let { identity: n, planType: a, showDesktopDownload: o } = e.getOwnValue(T.E)
        return { identity: n, planType: a, showDesktopDownload: o, ...t }
      },
      initialStep: (e) => e.getOwnValue(T.E).initialStep,
      steps: {
        role: {
          component: function (e) {
            let t,
              n,
              s,
              l = (0, o.c)(10),
              { context: c, onContinue: d } = e,
              p = (0, i.gh)(T.E),
              u = (0, r.useRef)(!1),
              [h] = (0, r.useState)(te),
              m = c.role ?? void 0
            return (
              l[0] !== c.identity || l[1] !== p
                ? ((t = () => {
                    u.current ||
                      ((u.current = !0),
                      (async function (e, t) {
                        ;(0, N.oA)(e, t) &&
                          (await Promise.all([
                            e.query.fetch(W.Q, t),
                            e.query.fetch(et, t),
                            Promise.all($.map((n) => e.query.fetch(X, { accountId: t.accountId, appId: n }))).then(
                              async (n) => {
                                let a = n.flat().map(({ id: e }) => e)
                                0 !== a.length &&
                                  (0, N.oA)(e, t) &&
                                  (await e.query.fetch(ee, { identity: t, appIds: a }))
                              },
                            ),
                          ]))
                      })(p, c.identity).catch(e9),
                      (0, S.yy)(p, k.JY, { stepType: "Role" }),
                      (0, S.yy)(p, R.ZX, {
                        onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
                        action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                        stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE",
                      }))
                  }),
                  (l[0] = c.identity),
                  (l[1] = p),
                  (l[2] = t))
                : (t = l[2]),
              l[3] !== d ? ((n = (e) => void d({ role: e })), (l[3] = d), (l[4] = n)) : (n = l[4]),
              l[5] !== h || l[6] !== m || l[7] !== t || l[8] !== n
                ? ((s = (0, a.jsx)(e6, { roles: h, selectedRole: m, onShown: t, onSelect: n })),
                  (l[5] = h),
                  (l[6] = m),
                  (l[7] = t),
                  (l[8] = n),
                  (l[9] = s))
                : (s = l[9]),
              s
            )
          },
          next: (e, t, n) =>
            null == e.role
              ? "role"
              : ((0, S.yy)(n, k.R5, { role: e.role }),
                (0, O.R)(n, e.identity, e.role).catch(() => {}),
                e.showDesktopDownload ? "desktop-download" : "apps"),
        },
        "desktop-download": {
          component: function (e) {
            let t,
              n,
              s,
              l,
              c,
              d,
              p = (0, o.c)(21),
              u = (0, i.gh)(y.u),
              h = (0, r.useRef)(!1),
              m = (0, ez.I)()
            p[0] !== m ? ((t = (0, eV.W)(m)), (p[0] = m), (p[1] = t)) : (t = p[1])
            let { platform: g, url: f } = t,
              _ = e.context.role ?? void 0,
              b = "engineering" === e.context.role
            p[2] !== _ || p[3] !== b
              ? ((n = { role: _, isEngineering: b, isChatgptDesktopAppCopy: !0 }), (p[2] = _), (p[3] = b), (p[4] = n))
              : (n = p[4])
            let x = n
            return (
              p[5] !== x || p[6] !== u
                ? ((s = () => {
                    h.current ||
                      ((h.current = !0),
                      (0, S.yy)(u, k.JY, { stepType: "2" }),
                      (0, S.yy)(u, R.ZX, {
                        onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
                        action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                        stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP",
                      }),
                      (0, S.yy)(u, k.se, x))
                  }),
                  (p[5] = x),
                  (p[6] = u),
                  (p[7] = s))
                : (s = p[7]),
              p[8] !== x || p[9] !== f || p[10] !== g || p[11] !== e || p[12] !== u
                ? ((l = (t) => {
                    ;((0, e$.M)(u),
                      (0, eq.PQ)({
                        event: t,
                        href: f,
                        initiator: "external_link",
                        disposition: "other" === g ? "new-tab" : "current-tab",
                      }),
                      (0, S.yy)(u, k.tx, x),
                      (0, S.yy)(u, eK.I_, { surface: "workspace_onboarding", action: "download" }),
                      e.onContinue())
                  }),
                  (p[8] = x),
                  (p[9] = f),
                  (p[10] = g),
                  (p[11] = e),
                  (p[12] = u),
                  (p[13] = l))
                : (l = p[13]),
              p[14] !== e ? ((c = () => void e.onContinue()), (p[14] = e), (p[15] = c)) : (c = p[15]),
              p[16] !== f || p[17] !== s || p[18] !== l || p[19] !== c
                ? ((d = (0, a.jsx)(eX, { downloadUrl: f, onShown: s, onDownload: l, onContinue: c })),
                  (p[16] = f),
                  (p[17] = s),
                  (p[18] = l),
                  (p[19] = c),
                  (p[20] = d))
                : (d = p[20]),
              d
            )
          },
          next: "apps",
        },
        apps: {
          component: function (e) {
            let t,
              n,
              s,
              l,
              c,
              d,
              p,
              u,
              h = (0, o.c)(53),
              { context: m, onContinue: g } = e,
              f = (0, i.gh)(T.E),
              _ = (0, K.AS)(),
              { identity: b, planType: y } = m,
              x = null
            ;(0, B.isEnterpriseClientPlan)(y) && "hc" !== y && "hc_consumption" !== y && "finserv" !== y
              ? (x = !0)
              : (0, w.Hw)(y) && (x = !1)
            let C = (0, r.useRef)(!1),
              { data: v, isError: A, retry: j } = (0, i._U)(J, b)
            ;(h[0] !== v ? ((t = v?.map(eM) ?? []), (h[0] = v), (h[1] = t)) : (t = h[1]),
              h[2] !== b || h[3] !== t
                ? ((n = { identity: b, appIds: t }), (h[2] = b), (h[3] = t), (h[4] = n))
                : (n = h[4]))
            let { data: E, isError: M, refetch: P } = (0, i._U)(ee, n),
              { data: I, isPending: D, isError: L } = (0, i._U)(W.Q, b),
              { data: G } = (0, i._U)(et, b),
              H = A || M,
              U = !H && (null == v || (v.length > 0 && null == E) || D)
            if (h[5] !== E || h[6] !== v || h[7] !== G) {
              var q
              ;((s =
                null != v && (0 === v.length || null != E)
                  ? ((q = E ?? []),
                    v.flatMap((e) => {
                      let t = q.find(({ id: t }) => t === e.id)
                      if ("ENABLED" !== e.status || t?.available !== !0 || "DISABLED_BY_ADMIN" === t.status) return []
                      let n = G?.connector_stats?.find(({ connector_id: t }) => t === e.id)?.unique_user_cnt
                      return [
                        {
                          app: {
                            id: e.id,
                            name: e.name,
                            description: e.description,
                            logoUrl: e.icon_url,
                            logoUrlDark: e.icon_dark_url ?? e.icon_url,
                            distributionChannel: e.distribution_channel ?? null,
                            appMetadata: null,
                            branding: null,
                            iconAssets: null,
                            iconDarkAssets: null,
                            installUrl: null,
                            labels: null,
                            pluginDisplayNames: [],
                            isAccessible: t.installed,
                            isEnabled: t.installed,
                          },
                          connected: t.installed,
                          ready: !0 === t.ready,
                          canConnect: t.can_install,
                          supportsDirectOAuth: e.supported_auth_types.includes("OAUTH") && !e.requires_link_params,
                          teammateCount: null != n && Number.isSafeInteger(n) && n >= 5 ? n : 0,
                        },
                      ]
                    }))
                  : []),
                (h[5] = E),
                (h[6] = v),
                (h[7] = G),
                (h[8] = s))
            } else s = h[8]
            let V = s,
              $ = null == x ? null : (I ?? null)
            h[9] !== f
              ? ((l = () => {
                  C.current ||
                    ((C.current = !0),
                    (0, S.yy)(f, k.JY, { stepType: "1" }),
                    (0, S.yy)(f, R.ZX, {
                      onboardingExperience: eN,
                      action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                      stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
                    }))
                }),
                (h[9] = f),
                (h[10] = l))
              : (l = h[10])
            let z = l
            if (U || H) {
              let e, t, n, o, i, r
              h[11] !== x || h[12] !== U || h[13] !== _
                ? ((e = U && !1), (h[11] = x), (h[12] = U), (h[13] = _), (h[14] = e))
                : (e = h[14])
              let s = e
              return (
                h[15] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (h[15] = t)) : (t = h[15]),
                h[16] !== g ? ((n = () => void g()), (h[16] = g), (h[17] = n)) : (n = h[17]),
                h[18] !== s || h[19] !== g
                  ? ((o = () => {
                      s || g()
                    }),
                    (h[18] = s),
                    (h[19] = g),
                    (h[20] = o))
                  : (o = h[20]),
                h[21] !== M || h[22] !== j || h[23] !== P
                  ? ((i = () => {
                      ;(j(), M && P())
                    }),
                    (h[21] = M),
                    (h[22] = j),
                    (h[23] = P),
                    (h[24] = i))
                  : (i = h[24]),
                h[25] !== H || h[26] !== U || h[27] !== s || h[28] !== z || h[29] !== n || h[30] !== o || h[31] !== i
                  ? ((r = (0, a.jsx)(ev, {
                      apps: t,
                      provider: null,
                      isLoading: U,
                      isSkipDisabled: s,
                      hasError: H,
                      onShown: z,
                      onConnect: eE,
                      onContinue: n,
                      onSkip: o,
                      onRetry: i,
                    })),
                    (h[25] = H),
                    (h[26] = U),
                    (h[27] = s),
                    (h[28] = z),
                    (h[29] = n),
                    (h[30] = o),
                    (h[31] = i),
                    (h[32] = r))
                  : (r = h[32]),
                r
              )
            }
            let Z = $ ?? "fallback"
            ;(h[33] !== g ? ((c = () => void g()), (h[33] = g), (h[34] = c)) : (c = h[34]),
              h[35] !== m || h[36] !== f
                ? ((d = () => (0, O.x)(f, m)), (h[35] = m), (h[36] = f), (h[37] = d))
                : (d = h[37]))
            let Y = !L
            return (
              h[38] !== b || h[39] !== v || h[40] !== f
                ? ((p = async () => {
                    ;(0, N.oA)(f, b) &&
                      (await f.queryClient.invalidateQueries({
                        queryKey: (0, F.dZ)({ ...b, productSku: "CONNECTOR_SETTING" }).queryKey,
                      }),
                      await f.query.invalidate(ee, { identity: b, appIds: v?.map(eO) ?? [] }))
                  }),
                  (h[38] = b),
                  (h[39] = v),
                  (h[40] = f),
                  (h[41] = p))
                : (p = h[41]),
              h[42] !== V ||
              h[43] !== b ||
              h[44] !== x ||
              h[45] !== z ||
              h[46] !== $ ||
              h[47] !== Z ||
              h[48] !== c ||
              h[49] !== d ||
              h[50] !== Y ||
              h[51] !== p
                ? ((u = (0, a.jsx)(
                    eP,
                    {
                      identity: b,
                      isEnterprise: x,
                      onContinue: c,
                      beforeOAuth: d,
                      apps: V,
                      provider: $,
                      recommendationSucceeded: Y,
                      onShown: z,
                      onConnected: p,
                    },
                    Z,
                  )),
                  (h[42] = V),
                  (h[43] = b),
                  (h[44] = x),
                  (h[45] = z),
                  (h[46] = $),
                  (h[47] = Z),
                  (h[48] = c),
                  (h[49] = d),
                  (h[50] = Y),
                  (h[51] = p),
                  (h[52] = u))
                : (u = h[52]),
              u
            )
          },
          next: "complete",
        },
      },
      onComplete: (e, t) => {
        ;((0, O.x)(e, t), (0, N.Jl)(e, t.identity), (0, A.oo)(e, e.get(N.Q$), { replace: !0 }))
      },
    })
    function tn(e) {
      let t,
        n,
        r,
        s = (0, o.c)(8),
        { identity: l, showDesktopDownload: d, planType: p } = e,
        u = P(l, (0, c.zy)().state) ? "apps" : "role"
      return (
        s[0] !== l || s[1] !== p || s[2] !== d || s[3] !== u
          ? ((t = { identity: l, showDesktopDownload: d, planType: p, initialStep: u }),
            (s[0] = l),
            (s[1] = p),
            (s[2] = d),
            (s[3] = u),
            (s[4] = t))
          : (t = s[4]),
        s[5] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a.jsx)(ta, {})), (s[5] = n)) : (n = s[5]),
        s[6] !== t
          ? ((r = (0, a.jsx)(i.Ui, { scope: T.E, value: t, children: n })), (s[6] = t), (s[7] = r))
          : (r = s[7]),
        r
      )
    }
    function ta() {
      let e,
        t,
        n,
        s,
        l = (0, o.c)(15),
        c = (0, i.gh)(T.E),
        d = (0, i.uO)(tt, void 0),
        p = (0, i.Ul)(d.state$),
        u = (0, i.Ul)(d.context$),
        h = (0, r.useRef)(null)
      if (
        (l[0] !== c
          ? ((e = () => {
              let e = new AbortController()
              h.current = e
              let t = c.watch((t) => {
                ;(0, N.oA)(t, t.getOwnValue(T.E).identity) || e.abort()
              })
              return () => {
                ;(e.abort(), t())
              }
            }),
            (t = [c]),
            (l[0] = c),
            (l[1] = e),
            (l[2] = t))
          : ((e = l[1]), (t = l[2])),
        (0, r.useEffect)(e, t),
        "complete" === p.status)
      ) {
        let e
        return (
          l[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, { delay: !1 })), (l[3] = e))
            : (e = l[3]),
          e
        )
      }
      let m = d.definition.steps[p.step].component,
        g = "pending" === p.status
      return (
        l[4] !== u || l[5] !== d || l[6] !== c || l[7] !== p
          ? ((n = async (e) => {
              let t = h.current?.signal
              null != t && (0, N.oA)(c, u.identity) && (await d.advance(p, e, t))
            }),
            (l[4] = u),
            (l[5] = d),
            (l[6] = c),
            (l[7] = p),
            (l[8] = n))
          : (n = l[8]),
        l[9] !== m || l[10] !== u || l[11] !== p.step || l[12] !== g || l[13] !== n
          ? ((s = (0, a.jsx)(m, { context: u, isAdvancePending: g, onContinue: n }, p.step)),
            (l[9] = m),
            (l[10] = u),
            (l[11] = p.step),
            (l[12] = g),
            (l[13] = n),
            (l[14] = s))
          : (s = l[14]),
        s
      )
    }
    var to = n("Qgfj"),
      ti = n("Zzm6"),
      tr = n("mBJV"),
      ts = n("iRMi"),
      tl = n("D015")
    function tc(e, t, n) {
      ;(0, S.yy)(e, ts.CodexHealthWorkspaceOnboardingStepShown, { step: t, exampleStepIndex: (0, tl.At)(n) })
    }
    let td = (0, i.vU)(y.u, ({ accountId: e, userId: t, role: n, department: a }) => ({
      queryKey: ["health-onboarding-examples", e, t, n, a],
      queryFn: async ({ signal: t }) => {
        let { examples: o } = await Y.Request.safePost("/onboarding/quorum/examples", {
          requestBody: { source: "onboarding", role: n, department: a },
          additionalHeaders: { "ChatGPT-Account-ID": e },
          signal: t,
        })
        return o.filter((e) => null != tp(e))
      },
      retry: !1,
      staleTime: Q.D.ONE_MINUTE,
    }))
    function tp(e) {
      let t = e.response.parts
      if (!t.every((e) => "string" == typeof e)) return null
      let n = t.join("")
      return n.trim().length > 0 ? n : null
    }
    var tu = n("suct"),
      th = n("LIss"),
      tm = n("ZtSy"),
      tg = n("T1PX"),
      tf = n("ENs9")
    function t_(e) {
      let t,
        n,
        i,
        c,
        d,
        p,
        u,
        h,
        m,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        k,
        A,
        S,
        j = (0, o.c)(60),
        { values: N, options: O, disabled: E, onSelect: M, onContinue: P, onSkip: T } = e,
        I = void 0 !== E && E,
        R = (0, s.A)(),
        [D, L] = (0, r.useState)("")
      j[0] !== N ? ((t = new Set(N)), (j[0] = N), (j[1] = t)) : (t = j[1])
      let G = t
      if (
        (j[2] !== I || j[3] !== P || j[4] !== N.length
          ? ((n = (e) => {
              ;(e.preventDefault(), N.length > 0 && !I && P())
            }),
            (j[2] = I),
            (j[3] = P),
            (j[4] = N.length),
            (j[5] = n))
          : (n = j[5]),
        j[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.departments.question",
                defaultMessage: "Which departments apply to your work?",
                description: "Department multi-select question on workspace onboarding",
              }),
            })),
            (j[6] = i))
          : (i = j[6]),
        j[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                i,
                (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.departments.selectAll",
                    defaultMessage: "Select all that apply",
                    description: "Instructions for selecting workspace departments",
                  }),
                }),
              ],
            })),
            (j[7] = c))
          : (c = j[7]),
        j[8] !== M ? ((d = () => M([])), (j[8] = M), (j[9] = d)) : (d = j[9]),
        j[10] !== R
          ? ((p = R.formatMessage({
              id: "work.onboarding.departments.searchLabel",
              defaultMessage: "Search departments",
              description: "Accessible label for the workspace department multiselect input",
            })),
            (j[10] = R),
            (j[11] = p))
          : (p = j[11]),
        j[12] !== R
          ? ((u = R.formatMessage({
              id: "work.onboarding.departments.searchPlaceholder",
              defaultMessage: "Search departments",
              description: "Placeholder inside the workspace department multiselect search field",
            })),
            (j[12] = R),
            (j[13] = u))
          : (u = j[13]),
        j[14] !== O || j[15] !== D)
      ) {
        let e
        ;(j[17] !== D
          ? ((e = (e) => e.label.toLocaleLowerCase().includes(D.toLocaleLowerCase())), (j[17] = D), (j[18] = e))
          : (e = j[18]),
          (h = O.filter(e)),
          (j[14] = O),
          (j[15] = D),
          (j[16] = h))
      } else h = j[16]
      if (j[19] !== O || j[20] !== G) {
        let e
        ;(j[22] !== G ? ((e = (e) => G.has(e.id)), (j[22] = G), (j[23] = e)) : (e = j[23]),
          (m = O.filter(e)),
          (j[19] = O),
          (j[20] = G),
          (j[21] = m))
      } else m = j[21]
      ;(j[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, a.jsx)(l.A, {
            id: "health.onboarding.noDepartments",
            defaultMessage: "No departments found",
            description: "Empty search result when filtering workspace departments",
          })),
          (j[24] = f))
        : (f = j[24]),
        j[25] !== M || j[26] !== G || j[27] !== N
          ? ((_ = (e) => M(G.has(e.id) ? N.filter((t) => t !== e.id) : [...N, e.id])),
            (j[25] = M),
            (j[26] = G),
            (j[27] = N),
            (j[28] = _))
          : (_ = j[28]),
        j[29] !== M || j[30] !== N
          ? ((b = (e) => M(N.filter((t) => t !== e.id))), (j[29] = M), (j[30] = N), (j[31] = b))
          : (b = j[31]),
        j[32] !== R
          ? ((y = (e) =>
              R.formatMessage(
                {
                  id: "health.onboarding.removeDepartment",
                  defaultMessage: "Remove {department}",
                  description:
                    "Accessible label to remove one selected workspace department; department is the selected name",
                },
                { department: e.label },
              )),
            (j[32] = R),
            (j[33] = y))
          : (y = j[33]),
        j[34] !== I ||
        j[35] !== D ||
        j[36] !== G ||
        j[37] !== m ||
        j[38] !== _ ||
        j[39] !== b ||
        j[40] !== y ||
        j[41] !== d ||
        j[42] !== p ||
        j[43] !== u ||
        j[44] !== h
          ? ((x = (0, a.jsx)(tf.X, {
              variant: "select",
              onClearSelection: d,
              ariaLabel: p,
              placeholder: u,
              disabled: I,
              query: D,
              options: h,
              selectedOptions: m,
              selectedOptionIds: G,
              showSuggestionsOnFocus: !0,
              showLoadingDropdown: !1,
              emptyMessage: f,
              onQueryChange: L,
              onSelectOption: _,
              onRemoveOption: b,
              getRemoveLabel: y,
            })),
            (j[34] = I),
            (j[35] = D),
            (j[36] = G),
            (j[37] = m),
            (j[38] = _),
            (j[39] = b),
            (j[40] = y),
            (j[41] = d),
            (j[42] = p),
            (j[43] = u),
            (j[44] = h),
            (j[45] = x))
          : (x = j[45]))
      let H = 0 === N.length || I
      return (
        j[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(l.A, {
              id: "health.onboarding.next",
              defaultMessage: "Next",
              description: "Advances to the next workspace onboarding step",
            })),
            (j[46] = C))
          : (C = j[46]),
        j[47] !== H
          ? ((w = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", disabled: H, children: C })),
            (j[47] = H),
            (j[48] = w))
          : (w = j[48]),
        j[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(l.A, {
              id: "health.onboarding.skip",
              defaultMessage: "Skip",
              description: "Skips the workspace onboarding survey",
            })),
            (j[49] = v))
          : (v = j[49]),
        j[50] !== I || j[51] !== T
          ? ((k = (0, a.jsx)(g.$, {
              color: "ghostActive",
              size: "beaconAction",
              disabled: I,
              onClick: T,
              children: v,
            })),
            (j[50] = I),
            (j[51] = T),
            (j[52] = k))
          : (k = j[52]),
        j[53] !== w || j[54] !== k
          ? ((A = (0, a.jsxs)("div", { className: "mt-4 flex flex-col gap-2 sm:gap-3", children: [w, k] })),
            (j[53] = w),
            (j[54] = k),
            (j[55] = A))
          : (A = j[55]),
        j[56] !== x || j[57] !== A || j[58] !== n
          ? ((S = (0, a.jsxs)("form", {
              className: "flex w-full flex-col sm:w-140 lg:w-170",
              onSubmit: n,
              children: [c, x, A],
            })),
            (j[56] = x),
            (j[57] = A),
            (j[58] = n),
            (j[59] = S))
          : (S = j[59]),
        S
      )
    }
    var tb = n("Jg9v"),
      ty = n("T5Yo"),
      tx = n("Unmh"),
      tC = n("ACoE"),
      tw = n("O5pN"),
      tv = n("osar"),
      tk = n("enVv"),
      tA = n("Z4o7"),
      tS = n("UxN3")
    function tj(e) {
      let t,
        n,
        i,
        r,
        c,
        d,
        p,
        u,
        h = (0, o.c)(10),
        m = (0, s.A)()
      return (
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(tv.r.Input, {
              layout: "single-line",
              children: (0, a.jsx)(tw.U, {
                singleLine: !0,
                children: (0, a.jsx)("div", {
                  className: "text-tertiary opacity-[var(--composer-editor-placeholder-opacity,0.5)] select-none",
                  children: (0, a.jsx)(l.A, {
                    id: "health.onboarding.examples.composer.placeholder",
                    defaultMessage: "Message ChatGPT",
                    description:
                      "Placeholder in the non-interactive composer shown during the healthcare onboarding example",
                  }),
                }),
              }),
            })),
            (h[0] = t))
          : (t = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(tS.b5, { className: "text-default", icon: { 16: eu.D8j, 20: eu.ssU } })), (h[1] = n))
          : (n = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(tv.r.FooterInlineControls, {
              gap: "normal",
              children: (0, a.jsx)(tv.r.FooterAction, {
                children: (0, a.jsxs)(g.$, {
                  color: "ghost",
                  size: "composer",
                  uniform: !0,
                  children: [
                    n,
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: (0, a.jsx)(l.A, {
                        id: "composer.contextButton.ariaLabel",
                        defaultMessage: "Add files and more",
                        description: "Accessible label for the button that opens contextual composer suggestions",
                      }),
                    }),
                  ],
                }),
              }),
            })),
            (h[2] = i))
          : (i = h[2]),
        h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(tv.r.FooterExpandingControls, {
              children: (0, a.jsx)(tv.r.FooterAction, {
                children: (0, a.jsx)(g.$, {
                  className: "min-w-0",
                  color: "ghost",
                  size: "composer",
                  children: (0, a.jsx)(tC.m, {
                    categoryLabel: null,
                    collapse: "none",
                    foreground: "primary",
                    icon: null,
                    indicator: "chevron",
                    selectedValue: (0, a.jsx)(l.A, {
                      id: "health.onboarding.examples.composer.auto",
                      defaultMessage: "Auto",
                      description:
                        "Automatic model selection label in the non-interactive healthcare onboarding composer",
                    }),
                  }),
                }),
              }),
            })),
            (h[3] = r))
          : (r = h[3]),
        h[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(tS.b5, { className: "text-default", icon: { assets: { 16: ty.y, 20: tx.v } } })),
            (h[4] = c))
          : (c = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(tv.r.FooterAction, {
              children: (0, a.jsxs)(g.$, {
                color: "ghost",
                size: "composer",
                uniform: !0,
                children: [
                  c,
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(l.A, {
                      id: "composer.dictation.aria",
                      defaultMessage: "Dictate",
                      description: "Aria label for dictation button",
                    }),
                  }),
                ],
              }),
            })),
            (h[5] = d))
          : (d = h[5]),
        h[6] !== m
          ? ((p = m.formatMessage({
              id: "health.onboarding.examples.composer.voice",
              defaultMessage: "Start voice chat",
              description:
                "Accessible label for the non-interactive voice button in the healthcare onboarding composer",
            })),
            (h[6] = m),
            (h[7] = p))
          : (p = h[7]),
        h[8] !== p
          ? ((u = (0, a.jsx)(tv.r, {
              inert: !0,
              layout: "single-line",
              radiusVariant: "single-line",
              children: (0, a.jsx)(tv.r.Body, {
                layout: "single-line",
                children: (0, a.jsx)(tv.r.AdaptiveFooter, {
                  input: t,
                  layout: "single-line",
                  leadingControls: i,
                  trailingControls: (0, a.jsxs)(tv.r.FooterControls, {
                    layout: "single-line",
                    children: [
                      r,
                      (0, a.jsxs)(tv.r.FooterActions, {
                        children: [
                          d,
                          (0, a.jsx)(tv.r.FooterAction, { children: (0, a.jsx)(tk.f, { ariaLabel: p, Icon: tA.C }) }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })),
            (h[8] = p),
            (h[9] = u))
          : (u = h[9]),
        u
      )
    }
    var tN = n("wDWo"),
      tO = n("B3ke"),
      tE = n("y5H2"),
      tM = n("mRLe"),
      tP = n("WAdu"),
      tT = n("lA5q"),
      tI = n("Si4e"),
      tR = n("TUMj"),
      tD = n("IQg5")
    function tL(e) {
      let t,
        n,
        i = (0, o.c)(5),
        { item: r, markdownDirectives: s } = e
      return (
        i[0] !== s ? ((t = { [tT.Z5]: tG, ...s }), (i[0] = s), (i[1] = t)) : (t = i[1]),
        i[2] !== r || i[3] !== t
          ? ((n = (0, a.jsx)(tI.O, {
              item: r,
              markdownDirectives: t,
              browserConversationId: null,
              conversationId: "local-chatgpt:onboarding-example",
              cwd: null,
              hostId: "local",
              trackShownImpressions: !1,
            })),
            (i[2] = r),
            (i[3] = t),
            (i[4] = n))
          : (n = i[4]),
        n
      )
    }
    function tG(e) {
      let t,
        n,
        i = (0, o.c)(7),
        s = (0, r.useId)(),
        l = (0, tR.Rn)(),
        c = l?.contentReferences,
        d = l?.isStreaming ?? !1
      return (
        i[0] !== s
          ? ((t = () => (e) => {
              let { renderView: t } = e
              return t({ editorKey: s })
            }),
            (i[0] = s),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== e || i[3] !== c || i[4] !== d || i[5] !== t
          ? ((n = (0, a.jsx)(tD.WritingBlockDirectiveRenderer, {
              ...e,
              contentReferences: c,
              isStreaming: d,
              renderExtension: t,
              testId: "onboarding-writing-block",
            })),
            (i[2] = e),
            (i[3] = c),
            (i[4] = d),
            (i[5] = t),
            (i[6] = n))
          : (n = i[6]),
        n
      )
    }
    function tH(e) {
      let t,
        n,
        i,
        s,
        l,
        c,
        d,
        p,
        u,
        h,
        m,
        g = (0, o.c)(32),
        { prompt: f, answer: _, contentReferences: b, exampleIndex: y, animate: x, AnswerComponent: C } = e,
        w = void 0 === C ? tL : C,
        v = (0, tg.I)(),
        [k, A] = (0, r.useState)(!1),
        [S, j] = (0, r.useState)(0),
        N = (void 0 === x || x) && !v
      if (g[0] !== _ || g[1] !== b || g[2] !== N || g[3] !== S) {
        let e = N ? _.slice(0, S) : _
        ;((n = (t = e.length < _.length)
          ? b.filter(
              (t) =>
                "number" == typeof t.start_idx &&
                Number.isInteger(t.start_idx) &&
                t.start_idx >= 0 &&
                t.start_idx < e.length,
            )
          : b),
          (i = (0, tN.vu)(
            { content: { content_type: "text", parts: [e] }, metadata: { content_references: n } },
            { isStreaming: t },
          )),
          (g[0] = _),
          (g[1] = b),
          (g[2] = N),
          (g[3] = S),
          (g[4] = t),
          (g[5] = n),
          (g[6] = i))
      } else ((t = g[4]), (n = g[5]), (i = g[6]))
      let O = i
      if (g[7] !== y || g[8] !== n) {
        let e
        ;(g[10] !== y ? ((e = () => `onboarding-example-${y}`), (g[10] = y), (g[11] = e)) : (e = g[11]),
          (s = n.map(e)),
          (g[7] = y),
          (g[8] = n),
          (g[9] = s))
      } else s = g[9]
      let E = !t
      g[12] !== O || g[13] !== n || g[14] !== s || g[15] !== E
        ? ((l = {
            type: "assistant-message",
            content: O,
            contentReferences: n,
            contentReferenceMessageIds: s,
            completed: E,
            phase: "final_answer",
            sentAtMs: null,
            structuredOutput: void 0,
          }),
          (g[12] = O),
          (g[13] = n),
          (g[14] = s),
          (g[15] = E),
          (g[16] = l))
        : (l = g[16])
      let M = l
      return (
        g[17] !== _.length || g[18] !== N
          ? ((c = () => {
              let e
              if (!N) return
              let t = 0,
                n = () => {
                  ;(j((t = Math.min(t + 10, _.length))), t < _.length && (e = setTimeout(n, 10)))
                }
              return (
                (e = setTimeout(() => {
                  ;(A(!0), (e = setTimeout(n, 100)))
                }, 500)),
                () => clearTimeout(e)
              )
            }),
            (d = [_.length, N]),
            (g[17] = _.length),
            (g[18] = N),
            (g[19] = c),
            (g[20] = d))
          : ((c = g[19]), (d = g[20])),
        (0, r.useEffect)(c, d),
        g[21] !== f || g[22] !== N || g[23] !== k
          ? ((p =
              !N || k
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(tO.m, { speaker: "user" }),
                      (0, a.jsx)(tE.R, {
                        message: f,
                        sentAtMs: null,
                        hideActions: !0,
                        isAeonFormatted: !1,
                        hostId: "local",
                      }),
                      (0, a.jsx)(tM.a, {}),
                    ],
                  })
                : null),
            (g[21] = f),
            (g[22] = N),
            (g[23] = k),
            (g[24] = p))
          : (p = g[24]),
        g[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(tO.m, { speaker: "assistant" })), (g[25] = u))
          : (u = g[25]),
        g[26] !== w || g[27] !== M
          ? ((h = (0, a.jsx)(w, { item: M })), (g[26] = w), (g[27] = M), (g[28] = h))
          : (h = g[28]),
        g[29] !== h || g[30] !== p
          ? ((m = (0, a.jsxs)(tP.c, { value: "restricted", children: [p, u, h] })),
            (g[29] = h),
            (g[30] = p),
            (g[31] = m))
          : (m = g[31]),
        m
      )
    }
    function tF(e) {
      let t,
        n,
        i,
        r,
        l,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        y = (0, o.c)(45),
        {
          title: x,
          subtitle: C,
          prompt: w,
          answer: v,
          contentReferences: k,
          exampleIndex: A,
          totalExamples: S,
          onNext: j,
          onSkip: N,
          animate: O,
          disabled: E,
          AnswerComponent: M,
        } = e,
        P = void 0 === O || O,
        T = void 0 !== E && E,
        I = (0, s.A)()
      ;(y[0] !== x
        ? ((t = (0, a.jsx)("h1", { className: "text-3xl leading-9 font-medium", children: x })), (y[0] = x), (y[1] = t))
        : (t = y[1]),
        y[2] !== C
          ? ((n = (0, a.jsx)("p", { className: "text-base text-secondary", children: C })), (y[2] = C), (y[3] = n))
          : (n = y[3]),
        y[4] !== t || y[5] !== n
          ? ((i = (0, a.jsxs)("div", { className: "flex flex-col gap-4 text-center select-none", children: [t, n] })),
            (y[4] = t),
            (y[5] = n),
            (y[6] = i))
          : (i = y[6]))
      let R = i
      return (
        y[7] !== N ? ((r = () => N("desktop")), (y[7] = N), (y[8] = r)) : (r = y[8]),
        y[9] !== T || y[10] !== j || y[11] !== r
          ? ((l = (0, a.jsx)(tq, { disabled: T, onNext: j, onSkip: r })),
            (y[9] = T),
            (y[10] = j),
            (y[11] = r),
            (y[12] = l))
          : (l = y[12]),
        y[13] !== R || y[14] !== l
          ? ((c = (0, a.jsx)("div", {
              className: "hidden flex-1 flex-col items-center justify-center md:flex",
              children: (0, a.jsxs)("div", { className: "flex w-full max-w-80 flex-col gap-8", children: [R, l] }),
            })),
            (y[13] = R),
            (y[14] = l),
            (y[15] = c))
          : (c = y[15]),
        y[16] !== I
          ? ((d = I.formatMessage({
              id: "onboarding.exampleTour.conversationLabel",
              defaultMessage: "Example ChatGPT conversation",
              description:
                "Accessible region label explaining that the onboarding prompt and response are a demonstration rather than the user's own conversation",
            })),
            (y[16] = I),
            (y[17] = d))
          : (d = y[17]),
        y[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("div", { className: "hidden md:block", children: (0, a.jsx)(tj, {}) })),
            (u = { isWorking: !1 }),
            (y[18] = p),
            (y[19] = u))
          : ((p = y[18]), (u = y[19])),
        y[20] !== M || y[21] !== P || y[22] !== v || y[23] !== k || y[24] !== A || y[25] !== w
          ? ((h = (0, a.jsx)(tb.C, {
              autoLoadHistory: !1,
              footer: p,
              scrollToBottomButton: u,
              children: (0, a.jsx)("div", {
                className: "pointer-events-none flex min-h-full flex-col py-5",
                onClickCapture: tB,
                onKeyDownCapture: tW,
                children: (0, a.jsx)(tH, {
                  AnswerComponent: M,
                  prompt: w,
                  answer: v,
                  contentReferences: k,
                  exampleIndex: A,
                  animate: P,
                }),
              }),
            })),
            (y[20] = M),
            (y[21] = P),
            (y[22] = v),
            (y[23] = k),
            (y[24] = A),
            (y[25] = w),
            (y[26] = h))
          : (h = y[26]),
        y[27] !== h || y[28] !== d
          ? ((m = (0, a.jsx)("section", {
              className:
                "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-surface-elevated select-text md:rounded-4xl md:shadow-2xl",
              onWheel: tK,
              onTouchMove: tU,
              "aria-label": d,
              children: h,
            })),
            (y[27] = h),
            (y[28] = d),
            (y[29] = m))
          : (m = y[29]),
        y[30] !== A || y[31] !== N || y[32] !== S
          ? ((g = A < S - 1 ? () => N("mobile") : void 0), (y[30] = A), (y[31] = N), (y[32] = S), (y[33] = g))
          : (g = y[33]),
        y[34] !== T || y[35] !== j || y[36] !== g
          ? ((f = (0, a.jsx)(tq, { disabled: T, onNext: j, onSkip: g })),
            (y[34] = T),
            (y[35] = j),
            (y[36] = g),
            (y[37] = f))
          : (f = y[37]),
        y[38] !== R || y[39] !== f
          ? ((_ = (0, a.jsx)("div", {
              className: "pointer-events-none absolute inset-x-6 inset-y-10 z-20 flex flex-col justify-end md:hidden",
              children: (0, a.jsxs)("div", {
                className:
                  "pointer-events-auto flex max-h-full flex-col gap-6 overflow-y-auto rounded-2xl border border-default bg-surface p-6",
                children: [R, f],
              }),
            })),
            (y[38] = R),
            (y[39] = f),
            (y[40] = _))
          : (_ = y[40]),
        y[41] !== m || y[42] !== _ || y[43] !== c
          ? ((b = (0, a.jsxs)("div", {
              className: "relative flex h-full min-h-0 w-full flex-col gap-6 md:flex-row md:gap-0",
              children: [c, m, _],
            })),
            (y[41] = m),
            (y[42] = _),
            (y[43] = c),
            (y[44] = b))
          : (b = y[44]),
        b
      )
    }
    function tW(e) {
      ;("Enter" === e.key || " " === e.key) && (e.preventDefault(), e.stopPropagation())
    }
    function tB(e) {
      ;(e.preventDefault(), e.stopPropagation())
    }
    function tU(e) {
      return e.stopPropagation()
    }
    function tK(e) {
      return e.stopPropagation()
    }
    function tq(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(10),
        { disabled: c, onNext: d, onSkip: p } = e
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, { ...tV.next })), (s[0] = t))
          : (t = s[0]),
        s[1] !== c || s[2] !== d
          ? ((n = (0, a.jsx)(g.$, { size: "beaconAction", disabled: c, onClick: d, children: t })),
            (s[1] = c),
            (s[2] = d),
            (s[3] = n))
          : (n = s[3]),
        s[4] !== c || s[5] !== p
          ? ((i = p
              ? (0, a.jsx)(g.$, {
                  color: "ghost",
                  size: "beaconAction",
                  disabled: c,
                  onClick: p,
                  children: (0, a.jsx)(l.A, { ...tV.skipTour }),
                })
              : null),
            (s[4] = c),
            (s[5] = p),
            (s[6] = i))
          : (i = s[6]),
        s[7] !== n || s[8] !== i
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [n, i] })),
            (s[7] = n),
            (s[8] = i),
            (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    let tV = (0, to.YK)({
      next: {
        id: "onboarding.exampleTour.next",
        defaultMessage: "Next",
        description: "Advances to the next onboarding example or the final warning",
      },
      skipTour: {
        id: "onboarding.exampleTour.skip",
        defaultMessage: "Skip Tour",
        description: "Skips the remaining example chats in the onboarding tour",
      },
    })
    function t$(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d = (0, o.c)(19),
        { value: p, options: u, disabled: h, onSelect: m, onSkip: f } = e,
        _ = void 0 !== h && h
      if (
        (d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.role.question",
                defaultMessage: "What's your primary role?",
                description: "Primary role question on workspace onboarding",
              }),
            })),
            (d[0] = t))
          : (t = d[0]),
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                t,
                (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.role.selectOne",
                    defaultMessage: "Select one option",
                    description: "Instructions for the single-choice workspace role question",
                  }),
                }),
              ],
            })),
            (d[1] = n))
          : (n = d[1]),
        d[2] !== _ || d[3] !== m || d[4] !== u || d[5] !== p)
      ) {
        let e
        ;(d[7] !== _ || d[8] !== m || d[9] !== p
          ? ((e = (e) =>
              (0, a.jsxs)(
                g.$,
                {
                  className: "w-full",
                  color: p === e.id ? "secondary" : "ghostActive",
                  radius: "large",
                  size: "surveyOption",
                  "aria-pressed": p === e.id,
                  disabled: _,
                  onClick: () => m(e.id),
                  children: [
                    e.icon,
                    (0, a.jsx)("span", { className: "flex-1 text-start", children: e.label }),
                    p === e.id ? (0, a.jsx)(eu.hEG, {}) : null,
                  ],
                },
                e.id,
              )),
            (d[7] = _),
            (d[8] = m),
            (d[9] = p),
            (d[10] = e))
          : (e = d[10]),
          (i = u.map(e)),
          (d[2] = _),
          (d[3] = m),
          (d[4] = u),
          (d[5] = p),
          (d[6] = i))
      } else i = d[6]
      return (
        d[11] !== i
          ? ((r = (0, a.jsx)("div", { className: "flex flex-col gap-2", children: i })), (d[11] = i), (d[12] = r))
          : (r = d[12]),
        d[13] !== _ || d[14] !== f
          ? ((s =
              null == f
                ? null
                : (0, a.jsx)(g.$, {
                    color: "ghostActive",
                    size: "beaconAction",
                    disabled: _,
                    onClick: f,
                    children: (0, a.jsx)(l.A, {
                      id: "health.onboarding.skip",
                      defaultMessage: "Skip",
                      description: "Skips the workspace onboarding survey",
                    }),
                  })),
            (d[13] = _),
            (d[14] = f),
            (d[15] = s))
          : (s = d[15]),
        d[16] !== r || d[17] !== s
          ? ((c = (0, a.jsxs)("div", { className: "flex max-w-full flex-col", children: [n, r, s] })),
            (d[16] = r),
            (d[17] = s),
            (d[18] = c))
          : (c = d[18]),
        c
      )
    }
    function tz(e) {
      let t,
        n,
        i,
        s,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        y = (0, o.c)(32),
        { onComplete: x } = e,
        C = (0, tg.I)(),
        w = null != x && !C
      y[0] !== x ? ((t = () => x?.()), (y[0] = x), (y[1] = t)) : (t = y[1])
      let v = (0, r.useEffectEvent)(t),
        k = null != x
      ;(y[2] !== v || y[3] !== k || y[4] !== C
        ? ((n = () => {
            if (!k) return
            let e = setTimeout(v, 3900 * !C)
            return () => {
              clearTimeout(e)
            }
          }),
          (y[2] = v),
          (y[3] = k),
          (y[4] = C),
          (y[5] = n))
        : (n = y[5]),
        y[6] !== k || y[7] !== C ? ((i = [k, C]), (y[6] = k), (y[7] = C), (y[8] = i)) : (i = y[8]),
        (0, r.useEffect)(n, i),
        y[9] !== w ? ((s = !!w && { opacity: 0, y: 10 }), (y[9] = w), (y[10] = s)) : (s = y[10]),
        y[11] === Symbol.for("react.memo_cache_sentinel") ? ((c = { opacity: 1, y: 0 }), (y[11] = c)) : (c = y[11]))
      let A = 0.5 * !!w,
        S = 0.4 * !!w
      ;(y[12] !== A || y[13] !== S
        ? ((d = { duration: A, delay: S }), (y[12] = A), (y[13] = S), (y[14] = d))
        : (d = y[14]),
        y[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(l.A, {
              id: "onboarding.tourLoading.greeting",
              defaultMessage: "Nice to meet you",
              description: "Greeting shown while preparing the new user's onboarding example tour",
            })),
            (y[15] = p))
          : (p = y[15]),
        y[16] !== s || y[17] !== d
          ? ((u = (0, a.jsx)(th.P.h1, { initial: s, animate: c, transition: d, children: p })),
            (y[16] = s),
            (y[17] = d),
            (y[18] = u))
          : (u = y[18]),
        y[19] !== w ? ((h = !!w && { opacity: 0, y: 10 }), (y[19] = w), (y[20] = h)) : (h = y[20]),
        y[21] === Symbol.for("react.memo_cache_sentinel") ? ((m = { opacity: 1, y: 0 }), (y[21] = m)) : (m = y[21]))
      let j = 0.5 * !!w,
        N = 1.5 * !!w
      return (
        y[22] !== j || y[23] !== N
          ? ((g = { duration: j, delay: N }), (y[22] = j), (y[23] = N), (y[24] = g))
          : (g = y[24]),
        y[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(l.A, {
              id: "onboarding.tourLoading.quickTour",
              defaultMessage: "Here's a quick tour…",
              description: "Loading message introducing examples of what the new user can ask ChatGPT",
            })),
            (y[25] = f))
          : (f = y[25]),
        y[26] !== h || y[27] !== g
          ? ((_ = (0, a.jsx)(th.P.p, { initial: h, animate: m, transition: g, children: f })),
            (y[26] = h),
            (y[27] = g),
            (y[28] = _))
          : (_ = y[28]),
        y[29] !== u || y[30] !== _
          ? ((b = (0, a.jsxs)("div", {
              className: "mb-2 flex flex-col text-center text-3xl leading-9 font-medium select-none",
              "aria-atomic": "true",
              role: "status",
              children: [u, _],
            })),
            (y[29] = u),
            (y[30] = _),
            (y[31] = b))
          : (b = y[31]),
        b
      )
    }
    var tZ = n("rKAs"),
      tY = n("THS1"),
      tQ = n("OPXn"),
      tX = n("eaAY")
    let tJ = { [tZ.AX]: tQ.R }
    function t1(e) {
      let t,
        n,
        i,
        r = (0, o.c)(8),
        { item: s } = e
      return (
        r[0] !== s ? ((t = (0, a.jsx)(tL, { item: s, markdownDirectives: tJ })), (r[0] = s), (r[1] = t)) : (t = r[1]),
        r[2] !== s.completed || r[3] !== s.contentReferences
          ? ((n = s.completed && (0, a.jsx)(tX.X, { references: s.contentReferences, shouldBlockExternalEgress: !0 })),
            (r[2] = s.completed),
            (r[3] = s.contentReferences),
            (r[4] = n))
          : (n = r[4]),
        r[5] !== t || r[6] !== n
          ? ((i = (0, a.jsxs)(tY.r, { value: !1, children: [t, n] })), (r[5] = t), (r[6] = n), (r[7] = i))
          : (i = r[7]),
        i
      )
    }
    var t0 = n("bMLJ")
    function t2(e) {
      let t,
        n,
        i,
        r,
        c,
        d,
        p,
        u,
        h,
        m,
        f = (0, o.c)(69),
        _ = (0, s.A)()
      switch (e.step) {
        case "intro": {
          let n
          ;(f[0] !== e ? ((n = (0, a.jsx)(t6, { ...e })), (f[0] = e), (f[1] = n)) : (n = f[1]), (t = n))
          break
        }
        case "role": {
          let n,
            o,
            i = e.role
          f[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = t0.$d.map(t4)), (f[2] = n)) : (n = f[2])
          let r = e.isSaving || !!e.error
          ;(f[3] !== e.onRoleSelect || f[4] !== e.onSkip || f[5] !== e.role || f[6] !== r
            ? ((o = (0, a.jsx)(t$, { value: i, options: n, disabled: r, onSelect: e.onRoleSelect, onSkip: e.onSkip })),
              (f[3] = e.onRoleSelect),
              (f[4] = e.onSkip),
              (f[5] = e.role),
              (f[6] = r),
              (f[7] = o))
            : (o = f[7]),
            (t = o))
          break
        }
        case "department": {
          let n,
            o,
            i = e.role,
            r = e.departments
          if (f[8] !== _ || f[9] !== e.departmentOptions) {
            let t
            ;(f[11] !== _
              ? ((t = (e) => ({ id: e.id, label: _.formatMessage(e.displayValue) })), (f[11] = _), (f[12] = t))
              : (t = f[12]),
              (n = e.departmentOptions.map(t)),
              (f[8] = _),
              (f[9] = e.departmentOptions),
              (f[10] = n))
          } else n = f[10]
          let s = e.isSaving || !!e.error
          ;(f[13] !== e.departments ||
          f[14] !== e.onDepartmentNext ||
          f[15] !== e.onDepartmentsChange ||
          f[16] !== e.onSkip ||
          f[17] !== e.role ||
          f[18] !== n ||
          f[19] !== s
            ? ((o = (0, a.jsx)(
                t_,
                {
                  values: r,
                  options: n,
                  disabled: s,
                  onSelect: e.onDepartmentsChange,
                  onContinue: e.onDepartmentNext,
                  onSkip: e.onSkip,
                },
                i,
              )),
              (f[13] = e.departments),
              (f[14] = e.onDepartmentNext),
              (f[15] = e.onDepartmentsChange),
              (f[16] = e.onSkip),
              (f[17] = e.role),
              (f[18] = n),
              (f[19] = s),
              (f[20] = o))
            : (o = f[20]),
            (t = o))
          break
        }
        case "loading": {
          let n
          ;(f[21] !== e.onLoadingComplete
            ? ((n = (0, a.jsx)(tz, { onComplete: e.onLoadingComplete })), (f[21] = e.onLoadingComplete), (f[22] = n))
            : (n = f[22]),
            (t = n))
          break
        }
        case "examples": {
          let n,
            o = e.example
          f[23] !== o ? ((n = null == o ? null : tp(o)), (f[23] = o), (f[24] = n)) : (n = f[24])
          let i = n
          if (null != o && null != i) {
            let n,
              r,
              s,
              c = nt[o.kind]
            ;(f[25] !== c.title ? ((n = (0, a.jsx)(l.A, { ...c.title })), (f[25] = c.title), (f[26] = n)) : (n = f[26]),
              f[27] !== c.subtitle
                ? ((r = (0, a.jsx)(l.A, { ...c.subtitle })), (f[27] = c.subtitle), (f[28] = r))
                : (r = f[28]))
            let d = e.isSaving || !!e.error
            ;(f[29] !== o.metadata.content_references ||
            f[30] !== o.prompt ||
            f[31] !== e.animateExample ||
            f[32] !== e.exampleIndex ||
            f[33] !== e.onExampleNext ||
            f[34] !== e.onTourSkip ||
            f[35] !== e.totalExamples ||
            f[36] !== n ||
            f[37] !== r ||
            f[38] !== d ||
            f[39] !== i
              ? ((s = (0, a.jsx)(
                  tF,
                  {
                    AnswerComponent: t1,
                    title: n,
                    subtitle: r,
                    prompt: o.prompt,
                    answer: i,
                    contentReferences: o.metadata.content_references,
                    exampleIndex: e.exampleIndex,
                    totalExamples: e.totalExamples,
                    animate: e.animateExample,
                    disabled: d,
                    onNext: e.onExampleNext,
                    onSkip: e.onTourSkip,
                  },
                  e.exampleIndex,
                )),
                (f[29] = o.metadata.content_references),
                (f[30] = o.prompt),
                (f[31] = e.animateExample),
                (f[32] = e.exampleIndex),
                (f[33] = e.onExampleNext),
                (f[34] = e.onTourSkip),
                (f[35] = e.totalExamples),
                (f[36] = n),
                (f[37] = r),
                (f[38] = d),
                (f[39] = i),
                (f[40] = s))
              : (s = f[40]),
              (t = s))
          }
          break
        }
        case "warning": {
          let n
          ;(f[41] !== e ? ((n = (0, a.jsx)(t7, { ...e })), (f[41] = e), (f[42] = n)) : (n = f[42]), (t = n))
        }
      }
      ;(f[43] !== _ ? ((n = _.formatMessage(ne.dialogLabel)), (f[43] = _), (f[44] = n)) : (n = f[44]),
        f[45] !== e.onShown || f[46] !== n
          ? ((i = { "aria-describedby": void 0, "aria-label": n, onOpenAutoFocus: e.onShown, onEscapeKeyDown: t3 }),
            (f[45] = e.onShown),
            (f[46] = n),
            (f[47] = i))
          : (i = f[47]),
        f[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(eo.L3, { className: "sr-only", children: (0, a.jsx)(l.A, { ...ne.dialogLabel }) })),
            (f[48] = r))
          : (r = f[48]))
      let b = e.isSaving,
        y = "examples" === e.step ? "min-h-0 flex-1 md:px-12 md:py-20 lg:px-16 xl:px-24" : "m-auto px-6 py-10 md:px-10"
      f[49] !== y
        ? ((c = (0, ea.A)("flex w-full flex-col items-center gap-6", y)), (f[49] = y), (f[50] = c))
        : (c = f[50])
      let x = "examples" === e.step ? `examples-${e.exampleIndex}` : e.step,
        C = "examples" === e.step ? "min-h-0 flex-1" : void 0
      return (
        f[51] !== t || f[52] !== x || f[53] !== C
          ? ((d = (0, a.jsx)(tu.N, { mode: "wait", children: (0, a.jsx)(es.P, { className: C, children: t }, x) })),
            (f[51] = t),
            (f[52] = x),
            (f[53] = C),
            (f[54] = d))
          : (d = f[54]),
        f[55] !== e.error || f[56] !== e.isSaving || f[57] !== e.onRetry
          ? ((p = e.error
              ? (0, a.jsxs)("div", {
                  className: "flex w-full max-w-lg flex-col items-center gap-3 text-center",
                  role: "alert",
                  children: [
                    (0, a.jsx)("p", { className: "text-sm text-danger", children: e.error }),
                    (0, a.jsx)(g.$, {
                      color: "secondary",
                      size: "dialog",
                      disabled: e.isSaving,
                      onClick: e.onRetry,
                      children: (0, a.jsx)(l.A, { ...ne.retry }),
                    }),
                  ],
                })
              : null),
            (f[55] = e.error),
            (f[56] = e.isSaving),
            (f[57] = e.onRetry),
            (f[58] = p))
          : (p = f[58]),
        f[59] !== c || f[60] !== d || f[61] !== p
          ? ((u = (0, a.jsxs)("div", { className: c, children: [d, p] })),
            (f[59] = c),
            (f[60] = d),
            (f[61] = p),
            (f[62] = u))
          : (u = f[62]),
        f[63] !== e.isSaving || f[64] !== u
          ? ((h = (0, a.jsx)("div", {
              className: "flex h-full flex-col overflow-y-auto select-none",
              "aria-busy": b,
              children: u,
            })),
            (f[63] = e.isSaving),
            (f[64] = u),
            (f[65] = h))
          : (h = f[65]),
        f[66] !== i || f[67] !== h
          ? ((m = (0, a.jsx)(el.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsxs)(eo.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: "h-full w-full bg-surface-elevated text-default",
                contentProps: i,
                children: [r, h],
              }),
            })),
            (f[66] = i),
            (f[67] = h),
            (f[68] = m))
          : (m = f[68]),
        m
      )
    }
    function t3(e) {
      return e.preventDefault()
    }
    function t4(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }) }
    }
    function t5(e) {
      let t,
        n,
        i,
        r = (0, o.c)(7),
        { title: s, subtitle: l } = e
      return (
        r[0] !== s
          ? ((t = (0, a.jsx)("h1", { className: "text-heading-lg font-semibold", children: s })),
            (r[0] = s),
            (r[1] = t))
          : (t = r[1]),
        r[2] !== l
          ? ((n = l ? (0, a.jsx)("p", { className: "text-base text-secondary", children: l }) : null),
            (r[2] = l),
            (r[3] = n))
          : (n = r[3]),
        r[4] !== t || r[5] !== n
          ? ((i = (0, a.jsxs)("div", { className: "flex flex-col gap-3 text-center", children: [t, n] })),
            (r[4] = t),
            (r[5] = n),
            (r[6] = i))
          : (i = r[6]),
        i
      )
    }
    function t6(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d,
        p,
        u,
        h,
        m,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        k = (0, o.c)(42),
        { workspaceName: A, onStart: S, error: j } = e,
        N = (0, tg.I)()
      ;(k[0] !== N ? ((t = !N && { opacity: 0, y: 12 }), (k[0] = N), (k[1] = t)) : (t = k[1]),
        k[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { opacity: 1, y: 0 }), (k[2] = n)) : (n = k[2]))
      let O = 0.5 * !N,
        E = 0.15 * !N
      ;(k[3] !== O || k[4] !== E ? ((i = { duration: O, delay: E }), (k[3] = O), (k[4] = E), (k[5] = i)) : (i = k[5]),
        k[6] !== A
          ? ((r = A
              ? (0, a.jsx)(l.A, { ...ne.workspaceWelcome, values: { workspaceName: A } })
              : (0, a.jsx)(l.A, { ...ne.workspaceWelcomeFallback })),
            (k[6] = A),
            (k[7] = r))
          : (r = k[7]),
        k[8] !== t || k[9] !== i || k[10] !== r
          ? ((s = (0, a.jsx)(th.P.h1, {
              className: "text-center text-3xl font-semibold",
              initial: t,
              animate: n,
              transition: i,
              children: r,
            })),
            (k[8] = t),
            (k[9] = i),
            (k[10] = r),
            (k[11] = s))
          : (s = k[11]),
        k[12] !== N ? ((c = !N && { opacity: 0, y: 16 }), (k[12] = N), (k[13] = c)) : (c = k[13]),
        k[14] === Symbol.for("react.memo_cache_sentinel") ? ((d = { opacity: 1, y: 0 }), (k[14] = d)) : (d = k[14]))
      let M = 0.6 * !N,
        P = 0.6 * !N
      ;(k[15] !== M || k[16] !== P
        ? ((p = { duration: M, delay: P }), (k[15] = M), (k[16] = P), (k[17] = p))
        : (p = k[17]),
        k[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(t8, {
              icon: (0, a.jsx)(eu.aVB, {}),
              title: (0, a.jsx)(l.A, { ...ne.clinicalLearningTitle }),
              body: (0, a.jsx)(l.A, { ...ne.clinicalLearningBody }),
            })),
            (k[18] = u))
          : (u = k[18]),
        k[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(t8, {
              icon: (0, a.jsx)(eu.o1J, {}),
              title: (0, a.jsx)(l.A, { ...ne.fastAnswersTitle }),
              body: (0, a.jsx)(l.A, { ...ne.fastAnswersBody }),
            })),
            (k[19] = h))
          : (h = k[19]),
        k[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(t8, {
              icon: (0, a.jsx)(eu.PL4, {}),
              title: (0, a.jsx)(l.A, { ...ne.extraSecurityTitle }),
              body: (0, a.jsx)(l.A, { ...ne.extraSecurityBody }),
            })),
            (k[20] = m))
          : (m = k[20]),
        k[21] !== p || k[22] !== c
          ? ((f = (0, a.jsxs)(th.P.div, {
              className: "grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-10",
              initial: c,
              animate: d,
              transition: p,
              children: [u, h, m],
            })),
            (k[21] = p),
            (k[22] = c),
            (k[23] = f))
          : (f = k[23]),
        k[24] !== N ? ((_ = !N && { opacity: 0, y: 18 }), (k[24] = N), (k[25] = _)) : (_ = k[25]),
        k[26] === Symbol.for("react.memo_cache_sentinel") ? ((b = { opacity: 1, y: 0 }), (k[26] = b)) : (b = k[26]))
      let T = 0.5 * !N,
        I = 1.4 * !N
      k[27] !== T || k[28] !== I
        ? ((y = { duration: T, delay: I }), (k[27] = T), (k[28] = I), (k[29] = y))
        : (y = k[29])
      let R = !!j
      return (
        k[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(l.A, { ...ne.getStarted })), (k[30] = x))
          : (x = k[30]),
        k[31] !== S || k[32] !== R
          ? ((C = (0, a.jsx)(g.$, { size: "beaconAction", disabled: R, onClick: S, children: x })),
            (k[31] = S),
            (k[32] = R),
            (k[33] = C))
          : (C = k[33]),
        k[34] !== _ || k[35] !== y || k[36] !== C
          ? ((w = (0, a.jsx)(th.P.div, { initial: _, animate: b, transition: y, children: C })),
            (k[34] = _),
            (k[35] = y),
            (k[36] = C),
            (k[37] = w))
          : (w = k[37]),
        k[38] !== f || k[39] !== w || k[40] !== s
          ? ((v = (0, a.jsxs)("div", {
              className: "flex w-full max-w-280 flex-col items-center gap-10 sm:px-10 lg:px-16",
              children: [s, f, w],
            })),
            (k[38] = f),
            (k[39] = w),
            (k[40] = s),
            (k[41] = v))
          : (v = k[41]),
        v
      )
    }
    function t8(e) {
      let t,
        n,
        i,
        r,
        s,
        l = (0, o.c)(12),
        { icon: c, title: d, body: p } = e
      return (
        l[0] !== c
          ? ((t = (0, a.jsx)("div", { className: "mt-1 md:mt-0", children: c })), (l[0] = c), (l[1] = t))
          : (t = l[1]),
        l[2] !== d
          ? ((n = (0, a.jsx)("h2", { className: "text-base font-semibold", children: d })), (l[2] = d), (l[3] = n))
          : (n = l[3]),
        l[4] !== t || l[5] !== n
          ? ((i = (0, a.jsxs)("div", { className: "flex items-start gap-2 md:flex-col md:gap-3", children: [t, n] })),
            (l[4] = t),
            (l[5] = n),
            (l[6] = i))
          : (i = l[6]),
        l[7] !== p
          ? ((r = (0, a.jsx)("p", { className: "text-sm text-secondary", children: p })), (l[7] = p), (l[8] = r))
          : (r = l[8]),
        l[9] !== i || l[10] !== r
          ? ((s = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [i, r] })),
            (l[9] = i),
            (l[10] = r),
            (l[11] = s))
          : (s = l[11]),
        s
      )
    }
    function t7(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d,
        p,
        u = (0, o.c)(21),
        { isQuorum: h, onFinish: m, isSaving: f, error: _ } = e,
        b = h ? "quorum" : "hc"
      ;(u[0] !== b
        ? ((t = (0, a.jsx)(t5, { title: (0, a.jsx)(l.A, { ...ne.usageWarningTitle, values: { product: b } }) })),
          (u[0] = b),
          (u[1] = t))
        : (t = u[1]),
        u[2] !== b
          ? ((n = (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...ne.usageWarning1, values: { product: b } }) })),
            (u[2] = b),
            (u[3] = n))
          : (n = u[3]),
        u[4] !== b
          ? ((i = (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...ne.usageWarning2, values: { product: b } }) })),
            (u[4] = b),
            (u[5] = i))
          : (i = u[5]),
        u[6] !== h
          ? ((r = h
              ? (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...ne.usageWarning3, values: { baaLink: t9 } }) })
              : null),
            (u[6] = h),
            (u[7] = r))
          : (r = u[7]),
        u[8] !== n || u[9] !== i || u[10] !== r
          ? ((s = (0, a.jsxs)("div", {
              className: "flex flex-col gap-6 text-base text-secondary",
              children: [n, i, r],
            })),
            (u[8] = n),
            (u[9] = i),
            (u[10] = r),
            (u[11] = s))
          : (s = u[11]))
      let y = f || !!_
      return (
        u[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, { ...ne.understand })), (u[12] = c))
          : (c = u[12]),
        u[13] !== f || u[14] !== m || u[15] !== y
          ? ((d = (0, a.jsx)(g.$, { size: "auth", disabled: y, loading: f, onClick: m, children: c })),
            (u[13] = f),
            (u[14] = m),
            (u[15] = y),
            (u[16] = d))
          : (d = u[16]),
        u[17] !== t || u[18] !== s || u[19] !== d
          ? ((p = (0, a.jsxs)("div", {
              className: "flex w-full max-w-3xl flex-col items-center gap-8",
              children: [t, s, d],
            })),
            (u[17] = t),
            (u[18] = s),
            (u[19] = d),
            (u[20] = p))
          : (p = u[20]),
        p
      )
    }
    function t9(e) {
      return (0, a.jsx)(tm.G, {
        href: "https://cdn.openai.com/osa/baa.pdf",
        className: "underline",
        initiator: "open_in_browser_bridge",
        openTarget: "external-browser",
        isBrowserEnabled: !1,
        children: e,
      })
    }
    let ne = (0, to.YK)({
        clinicalDecisionSupportTitle: {
          id: "health.onboarding.clinicalDecisionSupportTitle",
          defaultMessage: "Evidence Based Clinical Insights",
          description: "Title of the health onboarding example",
        },
        clinicalDecisionSupportSubtitle: {
          id: "health.onboarding.clinicalDecisionSupportSubtitle",
          defaultMessage: "Explore clinical questions, differential considerations, and evidence summaries",
          description: "Description of the health onboarding example",
        },
        documentationQueryTitle: {
          id: "health.onboarding.documentationQueryTitle",
          defaultMessage: "Documentation Query",
          description: "Title of the health onboarding example",
        },
        documentationQuerySubtitle: {
          id: "health.onboarding.documentationQuerySubtitle",
          defaultMessage: "Draft handoffs, notes, communications, and other care-team documentation",
          description: "Description of the health onboarding example",
        },
        latestGuidelinesTitle: {
          id: "health.onboarding.latestGuidelinesTitle",
          defaultMessage: "Looking Up Latest Guidelines",
          description: "Title of the health onboarding example",
        },
        latestGuidelinesSubtitle: {
          id: "health.onboarding.latestGuidelinesSubtitle",
          defaultMessage: "Get overviews of current guidelines and recommendations from trusted sources",
          description: "Description of the health onboarding example",
        },
        dialogLabel: {
          id: "health.onboarding.dialogLabel",
          defaultMessage: "Health workspace onboarding",
          description: "Accessible name of the full-screen healthcare workspace onboarding flow",
        },
        workspaceWelcome: {
          id: "health.onboarding.workspaceWelcome",
          defaultMessage: "Welcome to the {workspaceName} workspace",
          description: "Healthcare workspace welcome message with name",
        },
        workspaceWelcomeFallback: {
          id: "health.onboarding.workspaceWelcomeFallback",
          defaultMessage: "Welcome to your workspace",
          description: "Healthcare workspace welcome heading when the workspace has no display name",
        },
        clinicalLearningTitle: {
          id: "health.onboarding.clinicalLearningTitle",
          defaultMessage: "Get credit for clinical learning",
          description: "Title of the continuing medical education benefit on health workspace onboarding",
        },
        clinicalLearningBody: {
          id: "health.onboarding.clinicalLearningBody",
          defaultMessage:
            "Earn CME while you explore real clinical cases through evidence review. Learn, validate decisions, and stay up to date—without adding extra time to your day.",
          description: "Description of the continuing medical education benefit on health workspace onboarding",
        },
        fastAnswersTitle: {
          id: "health.onboarding.fastAnswersTitle",
          defaultMessage: "Fast answers, reliable support",
          description: "Title of the rate-limit benefit on health workspace onboarding",
        },
        fastAnswersBody: {
          id: "health.onboarding.fastAnswersBody",
          defaultMessage:
            "Work without interruptions. Higher rate limits mean you can move quickly through complex cases, documentation, and follow-up questions without slowing down.",
          description: "Description of higher rate limits for health workspace members",
        },
        extraSecurityTitle: {
          id: "health.onboarding.extraSecurityTitle",
          defaultMessage: "Extra security",
          description: "Title of the data protection benefit on health workspace onboarding",
        },
        extraSecurityBody: {
          id: "health.onboarding.extraSecurityBody",
          defaultMessage:
            "Chats in your clinician account are not used to train our AI models. ChatGPT can support clinical and operational tasks while protecting your data.",
          description: "Description of the healthcare workspace data protection benefit",
        },
        getStarted: {
          id: "health.onboarding.getStartedButton",
          defaultMessage: "Get Started",
          description: "Starts the healthcare role and department survey",
        },
        retry: {
          id: "health.onboarding.retry",
          defaultMessage: "Try again",
          description: "Retries a failed healthcare onboarding save or completion",
        },
        usageWarningTitle: {
          id: "health.onboarding.usageWarningTitle.productChoice",
          defaultMessage:
            "Before you use {product, select, quorum {ChatGPT for Clinicians} other {ChatGPT for Healthcare}}",
          description:
            "Final healthcare usage warning title; product selects the Clinicians or Healthcare branded product name",
        },
        usageWarning1: {
          id: "health.onboarding.usageWarning1.productChoice",
          defaultMessage:
            "AI can make mistakes, so do not rely primarily on AI output in decision-making about a patient, and always verify information provided. {product, select, quorum {ChatGPT for Clinicians} other {ChatGPT for Healthcare}} is not intended to screen, predict, or diagnose medical conditions, nor is it intended to generate treatment plans. While we have safeguards, ChatGPT may give incomplete or inaccurate information. It is not intended to replace your professional judgment.",
          description:
            "First clinical usage warning about professional judgment and patient decision-making; product selects the Clinicians or Healthcare branded product name",
        },
        usageWarning2: {
          id: "health.onboarding.usageWarning2.productChoice",
          defaultMessage:
            "Do not use {product, select, quorum {ChatGPT for Clinicians} other {ChatGPT for Healthcare}} to analyze medical images, signals from in vitro diagnostic devices (such as genomic sequences), or patterns/signals from signal acquisition systems (such as an ECG or EEG waveforms or similar inputs).",
          description:
            "Clinical warning against analyzing diagnostic images or signals; product selects the Clinicians or Healthcare branded product name",
        },
        usageWarning3: {
          id: "health.onboarding.usageWarning3",
          defaultMessage:
            "Do not enter Protected Health Information (PHI) unless you have signed a <baaLink>Business Associate Agreement</baaLink> with OpenAI and have the authority to execute it for your organization.",
          description:
            "Clinicians-only warning that PHI requires an authorized Business Associate Agreement; baaLink links to the agreement",
        },
        understand: {
          id: "health.onboarding.understandButton",
          defaultMessage: "I understand",
          description: "Acknowledges the clinical usage warning and finishes onboarding",
        },
      }),
      nt = {
        clinical_decision_support: {
          title: ne.clinicalDecisionSupportTitle,
          subtitle: ne.clinicalDecisionSupportSubtitle,
        },
        documentation_query: { title: ne.documentationQueryTitle, subtitle: ne.documentationQuerySubtitle },
        latest_guidelines: { title: ne.latestGuidelinesTitle, subtitle: ne.latestGuidelinesSubtitle },
      },
      nn = {
        intro: "WorkspaceIntro",
        role: "Role",
        department: "Department",
        loading: "Loading",
        examples: "Examples",
        warning: "UsageWarning",
      }
    function na(e) {
      let t,
        n = (0, o.c)(3),
        i = `${e.identity.accountId}:${e.identity.userId}`
      return (
        n[0] !== e || n[1] !== i ? ((t = (0, a.jsx)(no, { ...e }, i)), (n[0] = e), (n[1] = i), (n[2] = t)) : (t = n[2]),
        t
      )
    }
    function no(e) {
      let t,
        n,
        l,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        x,
        C,
        w,
        v,
        k,
        A,
        j,
        N,
        O,
        E,
        M,
        P = (0, o.c)(83),
        { identity: T, workspaceName: I, isQuorum: R, onComplete: D } = e,
        L = (0, i.gh)(y.u),
        G = (0, s.A)(),
        H = (0, K.Zj)("1498338261"),
        [F, W] = (0, r.useState)("intro"),
        [B, U] = (0, r.useState)()
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (P[0] = t)) : (t = P[0])
      let [q, V] = (0, r.useState)(t)
      P[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (P[1] = n)) : (n = P[1])
      let [$, z] = (0, r.useState)(n),
        [Z, Y] = (0, r.useState)(0),
        Q = (0, r.useRef)(null),
        [X, J] = (0, r.useState)(!1),
        [ee, et] = (0, r.useState)(!1),
        en = (0, r.useRef)(null)
      P[2] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (P[2] = l)) : (l = P[2])
      let ea = (0, r.useRef)(l),
        eo = (0, r.useRef)(!1),
        ei = (0, r.useRef)(!1),
        er = null == B ? void 0 : t0._s[B]
      P[3] !== er
        ? ((c =
            null == er
              ? t0.e1
              : t0.jw.filter((e) => {
                  let { id: t } = e
                  return er.includes(t)
                })),
          (P[3] = er),
          (P[4] = c))
        : (c = P[4])
      let es = c
      ;(P[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => {
            en.current?.abort()
          }),
          (p = []),
          (P[5] = d),
          (P[6] = p))
        : ((d = P[5]), (p = P[6])),
        (0, r.useEffect)(d, p),
        P[7] !== Z || P[8] !== L || P[9] !== F
          ? ((u = function (e) {
              ;(tc(L, nn[F], Z), W(e))
            }),
            (P[7] = Z),
            (P[8] = L),
            (P[9] = F),
            (P[10] = u))
          : (u = P[10]))
      let el = u
      P[11] !== el || P[12] !== q || P[13] !== T || P[14] !== B || P[15] !== L
        ? ((h = function () {
            if (null == B) return
            let e = L.query.snapshot(td, { ...T, role: B, department: q[0] ?? null }),
              t = () => {
                e.cancel()
              },
              n = en.current?.signal
            ;(n?.addEventListener("abort", t, { once: !0 }),
              (Q.current = e
                .fetch()
                .catch(ni)
                .finally(() => {
                  n?.removeEventListener("abort", t)
                })),
              el("loading"),
              (0, S.yy)(L, tr.odB, {}))
          }),
          (P[11] = el),
          (P[12] = q),
          (P[13] = T),
          (P[14] = B),
          (P[15] = L),
          (P[16] = h))
        : (h = P[16])
      let ec = h
      P[17] !== el
        ? ((m = async function () {
            let e = await Q.current
            if (!en.current?.signal.aborted) {
              if (null == e || 0 === e.length) return void el("warning")
              ;(z(e), el("examples"))
            }
          }),
          (P[17] = el),
          (P[18] = m))
        : (m = P[18])
      let ed = m
      P[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = async function () {
            if (!(eo.current || en.current?.signal.aborted)) {
              ;((eo.current = !0), et(!1))
              try {
                for (; ea.current.length > 0;)
                  (en.current?.signal.throwIfAborted(), await ea.current[0](), ea.current.shift())
              } catch {
                en.current?.signal.aborted || et(!0)
              }
              ;((eo.current = !1), en.current?.signal.aborted || J(!1))
            }
          }),
          (P[19] = g))
        : (g = P[19])
      let ep = g
      P[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (e) {
            ;(ea.current.push(e), ep())
          }),
          (P[20] = f))
        : (f = P[20])
      let eu = f
      P[21] !== T || P[22] !== L
        ? ((_ = function () {
            if (null != en.current) return
            let e = new AbortController()
            ;((en.current = e),
              (0, S.yy)(L, ts.CodexHealthWorkspaceOnboardingStepShown, {
                stepType: "WorkspaceIntro",
                stepIndex: (0, tl.At)(0),
              }),
              eu(async () => {
                let t = await L.query.snapshot(ti.E$, T).fetch()
                ;(e.signal.throwIfAborted(), (t.role || t.departments?.length) && (await (0, ti.Nf)(L, T, e.signal)))
              }))
          }),
          (P[21] = T),
          (P[22] = L),
          (P[23] = _))
        : (_ = P[23])
      let eh = _
      P[24] !== T || P[25] !== G || P[26] !== L
        ? ((b = async function (e, t) {
            let n = t0.$d.find((t) => {
                let { id: n } = t
                return n === e
              }),
              a = null == n ? "" : G.formatMessage(n.displayValue),
              o = [...t0.jw, ...t0.e1],
              i = t.flatMap((e) => {
                let t = o.find((t) => t.id === e)
                return null == t ? [] : [G.formatMessage(t.displayValue)]
              }),
              r = [G.formatMessage(nr.roleIntro, { role: a })]
            ;(i.length > 0 && r.push(G.formatMessage(nr.departmentOnly, { departments: G.formatList(i) })),
              await (0, ti.Qm)(
                L,
                T,
                { role: e, departments: t },
                { enabled: !0, role_user_message: a, other_user_message: r.join(" ") },
                en.current?.signal,
              ))
          }),
          (P[24] = T),
          (P[25] = G),
          (P[26] = L),
          (P[27] = b))
        : (b = P[27])
      let em = b,
        eg = B ?? "",
        ef = $[Z]
      return (
        P[28] !== ed
          ? ((x = () => {
              ed()
            }),
            (P[28] = ed),
            (P[29] = x))
          : (x = P[29]),
        P[30] !== el || P[31] !== Z || P[32] !== $.length || P[33] !== L
          ? ((C = () => {
              Z + 1 >= $.length ? el("warning") : (tc(L, "Examples", Z), Y(Z + 1))
            }),
            (P[30] = el),
            (P[31] = Z),
            (P[32] = $.length),
            (P[33] = L),
            (P[34] = C))
          : (C = P[34]),
        P[35] !== el || P[36] !== L
          ? ((w = (e) => {
              ;("desktop" === e && (0, S.yy)(L, tr.ewv, { stepType: "ask_any_question" }), el("warning"))
            }),
            (P[35] = el),
            (P[36] = L),
            (P[37] = w))
          : (w = P[37]),
        P[38] !== ee || P[39] !== G
          ? ((v = ee ? G.formatMessage(nr.saveError) : null), (P[38] = ee), (P[39] = G), (P[40] = v))
          : (v = P[40]),
        P[41] !== el ? ((k = () => el("role")), (P[41] = el), (P[42] = k)) : (k = P[42]),
        P[43] !== el || P[44] !== em
          ? ((A = (e) => {
              ;(U(e), V([]), eu(() => em(e, [])), el("department"))
            }),
            (P[43] = el),
            (P[44] = em),
            (P[45] = A))
          : (A = P[45]),
        P[46] !== el ||
        P[47] !== q ||
        P[48] !== ee ||
        P[49] !== B ||
        P[50] !== em ||
        P[51] !== L ||
        P[52] !== H ||
        P[53] !== ec
          ? ((j = () => {
              !ee &&
                null != B &&
                0 !== q.length &&
                ((0, S.yy)(L, ts.CodexHealthWorkspaceOnboardingAction, {
                  action:
                    ts.CodexHealthWorkspaceOnboardingActionType
                      .CODEX_HEALTH_WORKSPACE_ONBOARDING_ACTION_TYPE_SURVEY_SUBMITTED,
                }),
                eu(() => em(B, q)),
                H ? el("warning") : ec())
            }),
            (P[46] = el),
            (P[47] = q),
            (P[48] = ee),
            (P[49] = B),
            (P[50] = em),
            (P[51] = L),
            (P[52] = H),
            (P[53] = ec),
            (P[54] = j))
          : (j = P[54]),
        P[55] !== el ? ((N = () => el("warning")), (P[55] = el), (P[56] = N)) : (N = P[56]),
        P[57] !== T || P[58] !== D || P[59] !== L
          ? ((O = () => {
              !ei.current &&
                ((ei.current = !0),
                (0, S.yy)(L, ts.CodexHealthWorkspaceOnboardingAction, {
                  action:
                    ts.CodexHealthWorkspaceOnboardingActionType
                      .CODEX_HEALTH_WORKSPACE_ONBOARDING_ACTION_TYPE_ACKNOWLEDGED,
                }),
                J(!0),
                eu(async () => {
                  ;(await (0, ti.de)(L, T, en.current?.signal), en.current?.signal.throwIfAborted(), D())
                }))
            }),
            (P[57] = T),
            (P[58] = D),
            (P[59] = L),
            (P[60] = O))
          : (O = P[60]),
        P[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = () => {
              ;(J(ei.current), ep())
            }),
            (P[61] = E))
          : (E = P[61]),
        P[62] !== es ||
        P[63] !== q ||
        P[64] !== Z ||
        P[65] !== $.length ||
        P[66] !== eh ||
        P[67] !== R ||
        P[68] !== X ||
        P[69] !== F ||
        P[70] !== eg ||
        P[71] !== ef ||
        P[72] !== x ||
        P[73] !== C ||
        P[74] !== w ||
        P[75] !== v ||
        P[76] !== k ||
        P[77] !== A ||
        P[78] !== j ||
        P[79] !== N ||
        P[80] !== O ||
        P[81] !== I
          ? ((M = (0, a.jsx)(t2, {
              step: F,
              workspaceName: I,
              isQuorum: R,
              role: eg,
              departments: q,
              departmentOptions: es,
              example: ef,
              exampleIndex: Z,
              totalExamples: $.length,
              onLoadingComplete: x,
              onExampleNext: C,
              onTourSkip: w,
              isSaving: X,
              error: v,
              onShown: eh,
              onStart: k,
              onRoleSelect: A,
              onDepartmentsChange: V,
              onDepartmentNext: j,
              onSkip: N,
              onFinish: O,
              onRetry: E,
            })),
            (P[62] = es),
            (P[63] = q),
            (P[64] = Z),
            (P[65] = $.length),
            (P[66] = eh),
            (P[67] = R),
            (P[68] = X),
            (P[69] = F),
            (P[70] = eg),
            (P[71] = ef),
            (P[72] = x),
            (P[73] = C),
            (P[74] = w),
            (P[75] = v),
            (P[76] = k),
            (P[77] = A),
            (P[78] = j),
            (P[79] = N),
            (P[80] = O),
            (P[81] = I),
            (P[82] = M))
          : (M = P[82]),
        M
      )
    }
    function ni() {
      return []
    }
    let nr = (0, to.YK)({
      roleIntro: {
        id: "health.onboarding.personalization.roleIntro",
        defaultMessage: "I belong to following role(s): {role}.",
        description: "Sentence introducing the user's role for personalization",
      },
      departmentOnly: {
        id: "health.onboarding.personalization.departmentOnly",
        defaultMessage: "I belong to following department(s): {departments}.",
        description: "Sentence describing the user's department(s)",
      },
      saveError: {
        id: "health.onboarding.saveError",
        defaultMessage: "We couldn't save your onboarding progress. Please try again",
        description:
          "Error when reading or saving the healthcare workspace onboarding survey or acknowledgment fails; retry keeps the current answers",
      },
    })
    var ns = n("BkRe"),
      nl = n("uNU6"),
      nc = n("uHE8"),
      nd = n("vmZO")
    function np(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(9),
        { busy: c, onRetry: d, layout: p } = e,
        u = "education" === (void 0 === p ? "default" : p) && "shrink-0 p-4"
      return (
        s[0] !== u
          ? ((t = (0, ea.A)("flex w-full max-w-lg flex-col items-center gap-3 text-center", u)), (s[0] = u), (s[1] = t))
          : (t = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("p", {
              className: "text-sm text-danger",
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.stepError",
                defaultMessage: "We couldn’t complete this step. Please try again",
                description: "Error after a workspace onboarding request fails; retry preserves the answers",
              }),
            })),
            (s[2] = n))
          : (n = s[2]),
        s[3] !== c || s[4] !== d
          ? ((i =
              null != d &&
              (0, a.jsx)(g.$, {
                color: "secondary",
                size: "dialog",
                loading: c,
                onClick: d,
                children: (0, a.jsx)(l.A, {
                  id: "workspaceOnboarding.retry",
                  defaultMessage: "Try again",
                  description: "Retries the failed onboarding action",
                }),
              })),
            (s[3] = c),
            (s[4] = d),
            (s[5] = i))
          : (i = s[5]),
        s[6] !== t || s[7] !== i
          ? ((r = (0, a.jsxs)("div", { role: "alert", className: t, children: [n, i] })),
            (s[6] = t),
            (s[7] = i),
            (s[8] = r))
          : (r = s[8]),
        r
      )
    }
    function nu(e) {
      let t,
        n,
        i,
        r,
        s,
        c,
        d,
        p,
        u,
        h = (0, o.c)(28),
        { children: m, busy: g, error: f, onRetry: _, onShown: b, fillContent: y, layout: x } = e,
        C = void 0 !== y && y,
        w = void 0 === x ? "default" : x,
        v = "education" === w ? "bg-surface" : "bg-surface-elevated",
        k = "education" === w && ew
      ;(h[0] !== v || h[1] !== k
        ? ((t = (0, ea.A)("h-full w-full text-default", v, k)), (h[0] = v), (h[1] = k), (h[2] = t))
        : (t = h[2]),
        h[3] !== b
          ? ((n = { "aria-describedby": void 0, onOpenAutoFocus: b, onEscapeKeyDown: nh }), (h[3] = b), (h[4] = n))
          : (n = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(eo.L3, {
              className: "sr-only",
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.dialogTitle",
                defaultMessage: "Welcome to ChatGPT",
                description: "Accessible title of the full-screen workspace onboarding dialog",
              }),
            })),
            (h[5] = i))
          : (i = h[5]))
      let A = "education" === w ? "max-h-full" : "overflow-y-auto"
      return (
        h[6] !== A ? ((r = (0, ea.A)("flex h-full flex-col select-none", A)), (h[6] = A), (h[7] = r)) : (r = h[7]),
        h[8] !== C || h[9] !== w
          ? ((s = (0, ea.A)(
              "flex w-full flex-col items-center",
              "education" === w
                ? "min-h-0 flex-1 justify-center overflow-hidden"
                : [
                    "gap-6",
                    C ? "min-h-0 flex-1 px-6 py-10 md:px-12 md:py-20 lg:px-16 xl:px-24" : "m-auto px-6 py-10 md:px-10",
                  ],
            )),
            (h[8] = C),
            (h[9] = w),
            (h[10] = s))
          : (s = h[10]),
        h[11] !== g || h[12] !== f || h[13] !== w || h[14] !== _
          ? ((c = f ? (0, a.jsx)(np, { busy: g, onRetry: _, layout: w }) : null),
            (h[11] = g),
            (h[12] = f),
            (h[13] = w),
            (h[14] = _),
            (h[15] = c))
          : (c = h[15]),
        h[16] !== m || h[17] !== s || h[18] !== c
          ? ((d = (0, a.jsxs)("div", { className: s, children: [m, c] })),
            (h[16] = m),
            (h[17] = s),
            (h[18] = c),
            (h[19] = d))
          : (d = h[19]),
        h[20] !== g || h[21] !== d || h[22] !== r
          ? ((p = (0, a.jsx)("div", { className: r, "aria-busy": g, children: d })),
            (h[20] = g),
            (h[21] = d),
            (h[22] = r),
            (h[23] = p))
          : (p = h[23]),
        h[24] !== p || h[25] !== t || h[26] !== n
          ? ((u = (0, a.jsx)(el.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsxs)(eo.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: t,
                contentProps: n,
                children: [i, p],
              }),
            })),
            (h[24] = p),
            (h[25] = t),
            (h[26] = n),
            (h[27] = u))
          : (u = h[27]),
        u
      )
    }
    function nh(e) {
      return e.preventDefault()
    }
    let nm = (0, to.YK)({
        summary: {
          id: "k12.onboarding.personalization.summary",
          defaultMessage:
            "{role, select, teacher {I'm a Teacher.} administrator_district_leader {I'm an Administrator / District Leader.} it_staff {I'm IT / Technical Staff.} others {I work in another role.} other {}}{subject, select, none {} stem { I teach STEM.} english { I teach English.} social_studies_history { I teach Social Studies & History.} world_languages { I teach World Languages.} arts_music { I teach Arts & Music.} physical_education_health { I teach Physical Education & Health.} other { I teach Other.}}{grade, select, preschool { I work with Preschool students.} k5 { I work with K-5 grade students.} middle_school { I work with 6-8 grade students.} high_school { I work with 9-12 grade students.} other {}}",
          description:
            "Personalization context saved and sent to ChatGPT after the K12 onboarding survey. The complete message describes the selected staff role, optional teaching subject, and optional grade level. Empty selections omit that sentence. Keep the whole message natural in the target language.",
        },
      }),
      ng = (0, to.YK)({
        title: {
          id: "k12.onboarding.teacherDetails.title",
          defaultMessage: "Let's tailor ideas for your classroom",
          description: "Title for teacher-specific onboarding step",
        },
        subtitle: {
          id: "k12.onboarding.teacherDetails.subtitle",
          defaultMessage: "Pick the options that best describe what you teach",
          description: "Subtitle for teacher-specific onboarding step",
        },
        gradeQuestion: {
          id: "k12.onboarding.teacherDetails.gradeQuestion",
          defaultMessage: "What is your grade level?",
          description: "Prompt asking for teacher grade level",
        },
        subjectQuestion: {
          id: "k12.onboarding.teacherDetails.subjectQuestion",
          defaultMessage: "What subject do you teach?",
          description: "Prompt asking for teacher subject",
        },
        gradePreschool: {
          id: "k12.onboarding.teacherDetails.grade.preschool",
          defaultMessage: "Preschool",
          description: "Grade level option: Preschool",
        },
        gradeK5: {
          id: "k12.onboarding.teacherDetails.grade.k5",
          defaultMessage: "K-5 grade",
          description: "Grade level option: Kindergarten through 5th grade",
        },
        gradeMiddle: {
          id: "k12.onboarding.teacherDetails.grade.middle",
          defaultMessage: "6-8 grade",
          description: "Grade level option: Middle school",
        },
        gradeHigh: {
          id: "k12.onboarding.teacherDetails.grade.high",
          defaultMessage: "9-12 grade",
          description: "Grade level option: High school",
        },
        subjectSTEM: {
          id: "k12.onboarding.teacherDetails.subject.stem",
          defaultMessage: "STEM",
          description: "Subject option: STEM",
        },
        subjectLanguageArts: {
          id: "k12.onboarding.teacherDetails.subject.english",
          defaultMessage: "English",
          description: "Subject option: English",
        },
        subjectSocialStudies: {
          id: "k12.onboarding.teacherDetails.subject.socialStudiesHistory",
          defaultMessage: "Social Studies & History",
          description: "Subject option: Social studies and history",
        },
        subjectWorldLanguages: {
          id: "k12.onboarding.teacherDetails.subject.worldLanguages",
          defaultMessage: "World Languages",
          description: "Subject option: World languages",
        },
        subjectArtsMusic: {
          id: "k12.onboarding.teacherDetails.subject.artsMusic",
          defaultMessage: "Arts & Music",
          description: "Subject option: Arts and music",
        },
        subjectPhysicalEducationAndHealth: {
          id: "k12.onboarding.teacherDetails.subject.physicalEducationHealth",
          defaultMessage: "Physical Education & Health",
          description: "Subject option: Physical education and health",
        },
        subjectOther: {
          id: "k12.onboarding.teacherDetails.subject.other",
          defaultMessage: "Other",
          description: "Subject option: Other",
        },
      }),
      nf = (0, to.YK)({
        allDone: {
          id: "k12.onboarding.wrappingUp.allDone",
          defaultMessage: "All done!",
          description: "Final page title in workspace onboarding flow",
        },
        continue: {
          id: "k12.onboarding.wrappingUp.continue",
          defaultMessage: "Continue to ChatGPT for Teachers",
          description: "Button to finish workspace onboarding flow",
        },
      }),
      n_ = (0, to.YK)({
        planLessonPrompt: {
          id: "k12.onboarding.toolStep.planLesson.prompt",
          defaultMessage:
            "Plan a collaborative 45-minute lesson for my students. Include clear objectives, activities, and suggestions for differentiation.",
          description: "Prompt describing the first suggested tool action",
        },
        planLessonTitle: {
          id: "k12.onboarding.toolStep.planLesson.title",
          defaultMessage: "Plan Your First Lesson",
          description: "Title for the first suggested tool action",
        },
        planLessonSubtitle: {
          id: "k12.onboarding.toolStep.planLesson.subtitle",
          defaultMessage: "See how ChatGPT for Teachers can speed up lesson planning",
          description: "Subtitle for the first suggested tool action",
        },
        communicationPrompt: {
          id: "k12.onboarding.toolStep.communication.prompt",
          defaultMessage:
            "Draft a clear, welcoming message to families introducing an upcoming learning activity. Keep the tone supportive and easy to understand.",
          description: "Prompt describing the second suggested tool action",
        },
        communicationTitle: {
          id: "k12.onboarding.toolStep.communication.title",
          defaultMessage: "Strengthen Your Communication",
          description: "Title for the second suggested tool action",
        },
        communicationSubtitle: {
          id: "k12.onboarding.toolStep.communication.subtitle",
          defaultMessage: "Draft clear updates without starting from scratch",
          description: "Subtitle for the second suggested tool action",
        },
        classroomResourcesPrompt: {
          id: "k12.onboarding.toolStep.classroomResources.prompt",
          defaultMessage:
            "Create a flexible rubric or checklist for an assignment. Emphasize key skills, clear criteria, and student-friendly language.",
          description: "Prompt describing the third suggested tool action",
        },
        classroomResourcesTitle: {
          id: "k12.onboarding.toolStep.classroomResources.title",
          defaultMessage: "Build Classroom Resources",
          description: "Title for the third suggested tool action",
        },
        classroomResourcesSubtitle: {
          id: "k12.onboarding.toolStep.classroomResources.subtitle",
          defaultMessage: "Generate rubrics, checklists, and handouts in seconds",
          description: "Subtitle for the third suggested tool action",
        },
      }),
      nb = (0, to.YK)({
        teacher: {
          id: "k12.onboarding.role.teacher",
          defaultMessage: "Teacher",
          description: "Role option for K12 teacher",
        },
        administratorDistrictLeader: {
          id: "k12.onboarding.role.administrator_district_leader",
          defaultMessage: "Administrator / District Leader",
          description: "Role option for K12 administrator or district leader",
        },
        itTechnicalStaff: {
          id: "k12.onboarding.role.it_staff",
          defaultMessage: "IT / Technical Staff",
          description: "Role option for K12 IT or technical staff",
        },
        others: {
          id: "k12.onboarding.role.others",
          defaultMessage: "Others",
          description: "Role option for other K12 roles",
        },
        other: { id: "k12.onboarding.role.other", defaultMessage: "Other", description: "Role option for K12 other" },
      }),
      ny = [
        { id: "preschool", label: ng.gradePreschool },
        { id: "k5", label: ng.gradeK5 },
        { id: "middle_school", label: ng.gradeMiddle },
        { id: "high_school", label: ng.gradeHigh },
      ],
      nx = [
        { id: "stem", label: ng.subjectSTEM },
        { id: "english", label: ng.subjectLanguageArts },
        { id: "social_studies_history", label: ng.subjectSocialStudies },
        { id: "arts_music", label: ng.subjectArtsMusic },
        { id: "world_languages", label: ng.subjectWorldLanguages },
        { id: "physical_education_health", label: ng.subjectPhysicalEducationAndHealth },
        { id: "other", label: ng.subjectOther },
      ],
      nC = [
        { id: "teacher", displayValue: nb.teacher },
        { id: "administrator_district_leader", displayValue: nb.administratorDistrictLeader },
        { id: "it_staff", displayValue: nb.itTechnicalStaff },
        { id: "others", displayValue: nb.others },
      ],
      nw = (0, to.YK)({
        askAway: {
          id: "onboarding.askAway",
          defaultMessage: "Ask away",
          description: "Title for the tip about what ChatGPT can do",
        },
        askAwayEducationBody: {
          id: "onboarding.askAwayEducationBody",
          defaultMessage:
            "Use ChatGPT to brainstorm lesson ideas, differentiate materials, create assessments, or save time on prep",
          description: "Body copy for the tip about what ChatGPT for Teachers can do",
        },
        accuracyEducation: {
          id: "onboarding.accuracyEducation",
          defaultMessage: "Check important details",
          description: "Title for the warning about ChatGPT inaccuracy",
        },
        accuracyEducationBody: {
          id: "onboarding.accuracyEducationBody",
          defaultMessage: "While helpful, ChatGPT can be incorrect. Check important information.",
          description: "Body copy for the warning about ChatGPT inaccuracy",
        },
        gettingStartedButton: {
          id: "onboarding.gettingStartedButton",
          defaultMessage: "Okay, let’s go",
          description: "Button to accept the getting started modal",
        },
        educationUse: {
          id: "onboarding.educationUse",
          defaultMessage: "Made for your classroom",
          description: "Title for the warning about ChatGPT K-12 workspace use",
        },
        workUseBody: {
          id: "onboarding.workUseBody",
          defaultMessage:
            "Your chats aren’t used to train our models, including anything you share like lesson plans, student data, and planning work",
          description: "Body copy for the warning about ChatGPT business workspace use",
        },
      })
    var nv = n("nkTT")
    let nk = (0, nv.a)({
        name: "flashcards-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.763428, y: 1.888672, width: 16.1521, height: 17.008789 },
          visualBounds: { x: 1.763428, y: 1.888672, width: 16.1521, height: 17.008789 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.763428, y: 1.888672, width: 16.1521, height: 17.008789 },
          center: { x: 9.839478, y: 10.393067 },
          insets: { top: 1.888672, right: 2.084472, bottom: 1.102539, left: 1.763428 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 9.839478, y: 10.393067 },
            foreground: { x: 9.839478, y: 10.393067 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M10.4973 1.90565L15.7668 2.52674C17.1015 2.68426 18.0558 3.89425 17.8987 5.22889L16.967 13.1342C16.8093 14.4686 15.5995 15.4232 14.2649 15.266L14.2639 15.265L12.9075 15.1088L12.9494 15.4096C13.1321 16.7408 12.2016 17.9686 10.8703 18.1517L5.61351 18.8744C4.282 19.0576 3.05367 18.1266 2.87035 16.7953L1.78636 8.90956C1.60349 7.57823 2.53417 6.35062 3.86546 6.16737L7.60375 5.65272L7.79515 4.03749C7.95271 2.70279 9.16254 1.74826 10.4973 1.90565ZM9.30394 6.76112L4.04613 7.48475C3.44279 7.5681 3.02112 8.12452 3.10375 8.72791L4.18773 16.6137C4.2708 17.2174 4.82819 17.6398 5.43187 17.557L10.6887 16.8334C11.2923 16.7503 11.7149 16.1941 11.6321 15.5902L10.5471 7.70448C10.4638 7.10094 9.90748 6.67836 9.30394 6.76112ZM10.3411 3.22596C9.73589 3.1547 9.18709 3.58774 9.11546 4.19276L8.96507 5.4662L9.1223 5.44471C10.4538 5.26173 11.6823 6.19236 11.8655 7.52381L12.7209 13.7484L14.4192 13.9447C15.0244 14.016 15.5743 13.5833 15.6457 12.9779L16.5774 5.07264C16.6484 4.46744 16.2157 3.91841 15.6106 3.84706L10.3411 3.22596Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      nA = (0, nv.a)({
        name: "lanyard-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 3.084961, y: 1.418457, width: 13.830078, height: 17.163086 },
          visualBounds: { x: 3.084961, y: 1.418457, width: 13.830078, height: 17.163086 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.084961, y: 1.418457, width: 13.830078, height: 17.163086 },
          center: { x: 10, y: 10 },
          insets: { top: 1.418457, right: 3.084961, bottom: 1.418457, left: 3.084961 },
          anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 }, foreground: { x: 10, y: 10 } },
        },
        capabilities: ["icon"],
        body: '<path d="M9.99902 6.95264C11.5055 6.95264 12.7273 8.17378 12.7275 9.68018C12.7275 11.1868 11.5056 12.4087 9.99902 12.4087C8.49274 12.4083 7.27148 11.1865 7.27148 9.68018C7.2717 8.174 8.49288 6.95298 9.99902 6.95264ZM9.99902 8.28271C9.22741 8.28306 8.60178 8.90854 8.60156 9.68018C8.60156 10.452 9.22728 11.0783 9.99902 11.0786C10.7711 11.0786 11.3975 10.4522 11.3975 9.68018C11.3972 8.90832 10.7709 8.28271 9.99902 8.28271Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.875 3.91846C12.2423 3.91846 12.54 4.21623 12.54 4.5835C12.5398 4.95054 12.2421 5.24854 11.875 5.24854H8.125C7.75789 5.24854 7.46022 4.95054 7.45996 4.5835C7.45996 4.21623 7.75773 3.91846 8.125 3.91846H11.875Z" fill="currentColor"/> <path d="M13.917 1.41846C15.5727 1.41863 16.9149 2.76083 16.915 4.4165V15.5835C16.915 17.2393 15.5728 18.5814 13.917 18.5815H6.08301C4.42722 18.5814 3.08496 17.2393 3.08496 15.5835V4.4165C3.08514 2.76083 4.42733 1.41863 6.08301 1.41846H13.917ZM10 14.5454C8.37302 14.5455 7.01764 15.7103 6.72363 17.2515H13.2754C12.9813 15.7104 11.6269 14.5455 10 14.5454ZM6.08301 2.74854C5.16187 2.74871 4.41522 3.49537 4.41504 4.4165V15.5835C4.41504 16.2613 4.81989 16.843 5.40039 17.104C5.77061 14.8968 7.68794 13.2154 10 13.2153C12.312 13.2154 14.2293 14.8969 14.5996 17.104C15.1801 16.843 15.585 16.2613 15.585 15.5835V4.4165C15.5848 3.49537 14.8381 2.74871 13.917 2.74854H6.08301Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      nS = {
        teacher: (0, a.jsx)(eu.L$D, {}),
        administrator_district_leader: (0, a.jsx)(eu.TGw, {}),
        it_staff: (0, a.jsx)(ei.I, { className: "shrink-0", asset: nA }),
        others: (0, a.jsx)(ei.I, { className: "shrink-0", asset: nk }),
      }
    function nj(e) {
      let t,
        n,
        i,
        r,
        c = (0, o.c)(72),
        d = (0, s.A)()
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(l.A, {
            id: "workspaceOnboarding.next",
            defaultMessage: "Next",
            description: "Advances to the next onboarding step",
          })),
          (c[0] = t))
        : (t = c[0]),
        c[1] !== e.busy || c[2] !== e.onNext
          ? ((n = (0, a.jsx)(g.$, { size: "beaconAction", disabled: e.busy, onClick: e.onNext, children: t })),
            (c[1] = e.busy),
            (c[2] = e.onNext),
            (c[3] = n))
          : (n = c[3]))
      let p = n,
        u = e.busy && "Tour" !== e.step
      ;(c[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, a.jsx)(l.A, {
            id: "workspaceOnboarding.skip",
            defaultMessage: "Skip",
            description: "Skips this optional onboarding step",
          })),
          (c[4] = i))
        : (i = c[4]),
        c[5] !== e.onSkip || c[6] !== u
          ? ((r = (0, a.jsx)(g.$, {
              color: "ghostActive",
              size: "beaconAction",
              disabled: u,
              onClick: e.onSkip,
              children: i,
            })),
            (c[5] = e.onSkip),
            (c[6] = u),
            (c[7] = r))
          : (r = c[7]))
      let h = r
      switch (e.step) {
        case "WorkspaceIntro": {
          let t, n, o, i, r
          return (
            c[8] !== e.workspaceName
              ? ((t = (0, a.jsx)("h1", {
                  className: "text-center text-3xl font-semibold",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.workspaceWelcome",
                    defaultMessage: "Welcome to the {workspaceName} workspace",
                    description: "Workspace welcome message with name",
                    values: { workspaceName: e.workspaceName },
                  }),
                })),
                (c[8] = e.workspaceName),
                (c[9] = t))
              : (t = c[9]),
            c[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)("div", {
                  className: "grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-10",
                  children: [
                    [nw.educationUse, nw.workUseBody],
                    [nw.askAway, nw.askAwayEducationBody],
                    [nw.accuracyEducation, nw.accuracyEducationBody],
                  ].map(nE),
                })),
                (c[10] = n))
              : (n = c[10]),
            c[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, a.jsx)(l.A, { ...nw.gettingStartedButton })), (c[11] = o))
              : (o = c[11]),
            c[12] !== e.onStart
              ? ((i = (0, a.jsx)(g.$, { size: "beaconAction", onClick: e.onStart, children: o })),
                (c[12] = e.onStart),
                (c[13] = i))
              : (i = c[13]),
            c[14] !== t || c[15] !== i
              ? ((r = (0, a.jsxs)("div", {
                  className: "flex w-full max-w-280 flex-col items-center gap-10 sm:px-10 lg:px-16",
                  children: [t, n, i],
                })),
                (c[14] = t),
                (c[15] = i),
                (c[16] = r))
              : (r = c[16]),
            r
          )
        }
        case "Role": {
          let t,
            n,
            o = e.role
          return (
            c[17] === Symbol.for("react.memo_cache_sentinel") ? ((t = nC.map(nO)), (c[17] = t)) : (t = c[17]),
            c[18] !== e.busy || c[19] !== e.onRole || c[20] !== e.onSkip || c[21] !== e.role
              ? ((n = (0, a.jsx)(t$, { value: o, options: t, disabled: e.busy, onSelect: e.onRole, onSkip: e.onSkip })),
                (c[18] = e.busy),
                (c[19] = e.onRole),
                (c[20] = e.onSkip),
                (c[21] = e.role),
                (c[22] = n))
              : (n = c[22]),
            n
          )
        }
        case "TeacherDetails": {
          let t, n, o, i, r, s, d
          ;(c[23] !== e
            ? ((t = (t) => {
                ;(t.preventDefault(), !e.busy && e.grade && e.subject && e.onNext())
              }),
              (c[23] = e),
              (c[24] = t))
            : (t = c[24]),
            c[25] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)("h1", {
                  className: "text-heading-lg font-semibold",
                  children: (0, a.jsx)(l.A, { ...ng.title }),
                })),
                (c[25] = n))
              : (n = c[25]),
            c[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, { ...ng.subtitle }),
                })),
                (c[26] = o))
              : (o = c[26]),
            c[27] !== e.busy || c[28] !== e.grade || c[29] !== e.onGrade || c[30] !== e.onSubject || c[31] !== e.subject
              ? ((i = [
                  { question: ng.gradeQuestion, options: ny, value: e.grade, onSelect: e.onGrade },
                  { question: ng.subjectQuestion, options: nx, value: e.subject, onSelect: e.onSubject },
                ].map((t) => {
                  let { question: n, options: o, value: i, onSelect: r } = t
                  return (0, a.jsxs)(
                    "fieldset",
                    {
                      disabled: e.busy,
                      className: "flex flex-col gap-4",
                      children: [
                        (0, a.jsx)("legend", {
                          className: "mb-4 text-base font-medium",
                          children: (0, a.jsx)(l.A, { ...n }),
                        }),
                        (0, a.jsx)("div", {
                          className: "flex flex-wrap justify-center gap-2",
                          children: o.map((e) =>
                            (0, a.jsx)(
                              g.$,
                              {
                                color: i === e.id ? "primary" : "secondary",
                                "aria-pressed": i === e.id,
                                onClick: () => r(e.id),
                                children: (0, a.jsx)(l.A, { ...e.label }),
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    },
                    n.id,
                  )
                })),
                (c[27] = e.busy),
                (c[28] = e.grade),
                (c[29] = e.onGrade),
                (c[30] = e.onSubject),
                (c[31] = e.subject),
                (c[32] = i))
              : (i = c[32]))
          let p = e.busy || !e.grade || !e.subject
          return (
            c[33] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)(l.A, {
                  id: "workspaceOnboarding.next",
                  defaultMessage: "Next",
                  description: "Advances to the next onboarding step",
                })),
                (c[33] = r))
              : (r = c[33]),
            c[34] !== p
              ? ((s = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", disabled: p, children: r })),
                (c[34] = p),
                (c[35] = s))
              : (s = c[35]),
            c[36] !== h || c[37] !== s || c[38] !== t || c[39] !== i
              ? ((d = (0, a.jsxs)("form", {
                  className: "flex w-full max-w-lg flex-col gap-6 text-center",
                  onSubmit: t,
                  children: [n, o, i, s, h],
                })),
                (c[36] = h),
                (c[37] = s),
                (c[38] = t),
                (c[39] = i),
                (c[40] = d))
              : (d = c[40]),
            d
          )
        }
        case "Loading": {
          let t
          return (
            c[41] !== e.onLoadingComplete
              ? ((t = (0, a.jsx)(tz, { onComplete: e.onLoadingComplete })), (c[41] = e.onLoadingComplete), (c[42] = t))
              : (t = c[42]),
            t
          )
        }
        case "Tour": {
          let t, n, o, i, r, s, u, m
          c[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = [
                { title: n_.planLessonTitle, subtitle: n_.planLessonSubtitle },
                { title: n_.communicationTitle, subtitle: n_.communicationSubtitle },
                { title: n_.classroomResourcesTitle, subtitle: n_.classroomResourcesSubtitle },
              ]),
              (c[43] = t))
            : (t = c[43])
          let g = t[e.exampleIndex]
          return (
            c[44] !== g.title
              ? ((n = (0, a.jsx)("h1", {
                  className: "text-heading-lg font-semibold",
                  children: (0, a.jsx)(l.A, { ...g.title }),
                })),
                (c[44] = g.title),
                (c[45] = n))
              : (n = c[45]),
            c[46] !== g.subtitle
              ? ((o = (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, { ...g.subtitle }),
                })),
                (c[46] = g.subtitle),
                (c[47] = o))
              : (o = c[47]),
            c[48] !== n || c[49] !== o
              ? ((i = (0, a.jsxs)("div", { className: "flex shrink-0 flex-col gap-3 text-center", children: [n, o] })),
                (c[48] = n),
                (c[49] = o),
                (c[50] = i))
              : (i = c[50]),
            c[51] !== d
              ? ((r = d.formatMessage({
                  id: "k12.onboarding.exampleConversation",
                  defaultMessage: "Example ChatGPT conversation",
                  description:
                    "Accessible label for the live example conversation shown during the teacher onboarding tour",
                })),
                (c[51] = d),
                (c[52] = r))
              : (r = c[52]),
            c[53] !== e.transcript || c[54] !== r
              ? ((s = (0, a.jsx)("section", {
                  className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden select-text",
                  onWheel: nN,
                  "aria-label": r,
                  children: e.transcript,
                })),
                (c[53] = e.transcript),
                (c[54] = r),
                (c[55] = s))
              : (s = c[55]),
            c[56] !== p || c[57] !== h
              ? ((u = (0, a.jsxs)("div", {
                  className: "flex shrink-0 items-center justify-center gap-3",
                  children: [h, p],
                })),
                (c[56] = p),
                (c[57] = h),
                (c[58] = u))
              : (u = c[58]),
            c[59] !== s || c[60] !== u || c[61] !== i
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex h-full min-h-0 w-full max-w-280 flex-col gap-6",
                  children: [i, s, u],
                })),
                (c[59] = s),
                (c[60] = u),
                (c[61] = i),
                (c[62] = m))
              : (m = c[62]),
            m
          )
        }
        case "WrappingUp": {
          let t, n, o, i, r
          return (
            c[63] !== e
              ? ((t = (t) => {
                  ;(t.preventDefault(), e.busy || e.onNext())
                }),
                (c[63] = e),
                (c[64] = t))
              : (t = c[64]),
            c[65] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)("h1", {
                  className: "text-heading-lg font-semibold",
                  children: (0, a.jsx)(l.A, { ...nf.allDone }),
                })),
                (c[65] = n))
              : (n = c[65]),
            c[66] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, a.jsx)(l.A, { ...nf.continue })), (c[66] = o))
              : (o = c[66]),
            c[67] !== e.busy
              ? ((i = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", loading: e.busy, children: o })),
                (c[67] = e.busy),
                (c[68] = i))
              : (i = c[68]),
            c[69] !== t || c[70] !== i
              ? ((r = (0, a.jsxs)("form", {
                  className: "flex w-full max-w-lg flex-col gap-6 text-center",
                  onSubmit: t,
                  children: [n, i],
                })),
                (c[69] = t),
                (c[70] = i),
                (c[71] = r))
              : (r = c[71]),
            r
          )
        }
      }
    }
    function nN(e) {
      return e.stopPropagation()
    }
    function nO(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }), icon: nS[e.id] }
    }
    function nE(e) {
      let [t, n] = e
      return (0, a.jsxs)(
        "div",
        {
          className: "flex flex-col gap-3",
          children: [
            (0, a.jsx)("h2", { className: "font-semibold", children: (0, a.jsx)(l.A, { ...t }) }),
            (0, a.jsx)("p", { className: "text-sm text-secondary", children: (0, a.jsx)(l.A, { ...n }) }),
          ],
        },
        t.id,
      )
    }
    let nM = { WorkspaceIntro: 0, Role: 1, TeacherDetails: 2, Loading: 3, Tour: 4, WrappingUp: 5 }
    function nP(e) {
      let t,
        n,
        l,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        x,
        C,
        w,
        v,
        k,
        A = (0, o.c)(89),
        { identity: j, workspaceName: N, onComplete: O } = e,
        E = (0, i.gh)(y.u),
        M = (0, s.A)(),
        [P, T] = (0, r.useState)("WorkspaceIntro"),
        [R, D] = (0, r.useState)(""),
        [L, G] = (0, r.useState)(""),
        [H, F] = (0, r.useState)(""),
        [W, B] = (0, r.useState)(0),
        [U, K] = (0, r.useState)(null),
        q = (0, r.useRef)(null),
        [V, $] = (0, r.useState)(!1),
        [z, Z] = (0, r.useState)(!1),
        [Y, Q] = (0, r.useState)(!1),
        X = (0, r.useRef)(null),
        J = (0, r.useRef)(!1),
        ee = (0, r.useRef)(nT),
        et = (0, r.useRef)(!1),
        en = (0, r.useRef)(0)
      ;(A[0] !== E
        ? ((t = () => () => {
            ;((en.current = en.current + 1),
              X.current?.controller.abort(),
              X.current?.stop(),
              null != q.current && (0, nl.SY)(E, q.current))
          }),
          (n = [E]),
          (A[0] = E),
          (A[1] = t),
          (A[2] = n))
        : ((t = A[1]), (n = A[2])),
        (0, r.useEffect)(t, n),
        A[3] !== W || A[4] !== E
          ? ((l = function (e, t) {
              let n = void 0 === t ? W : t
              ;(T(e),
                B(n),
                (0, S.yy)(E, tr.FGm, {
                  stepType: "Tour" === e ? "ask_any_question" : e,
                  stepIndex: (0, I.At)(nM[e] + n),
                }),
                "Loading" === e && (0, S.yy)(E, tr.odB, {}))
            }),
            (A[3] = W),
            (A[4] = E),
            (A[5] = l))
          : (l = A[5]))
      let ea = l
      A[6] !== j || A[7] !== E
        ? ((c = async function (e) {
            if (J.current) return
            ;(X.current?.controller.abort(), X.current?.stop())
            let t = new AbortController()
            ;((X.current = { controller: t, stop: (0, ti.RR)(E, j, t) }),
              t.signal.aborted ||
                ((J.current = !0),
                (ee.current = e),
                $(!0),
                Q(!1),
                await e(t.signal)
                  .catch(() => {
                    t.signal.aborted || Q(!0)
                  })
                  .finally(() => {
                    X.current?.controller === t && ((J.current = !1), t.signal.aborted || $(!1))
                  })))
          }),
          (A[6] = j),
          (A[7] = E),
          (A[8] = c))
        : (c = A[8])
      let eo = c
      A[9] !== M
        ? ((d = function (e, t, n) {
            let a = nC.find((t) => t.id === e)
            return {
              roleLabel: null == a ? "" : M.formatMessage(a.displayValue),
              summary: M.formatMessage(nm.summary, { role: e, grade: t, subject: n || "none" }).trim(),
            }
          }),
          (A[9] = M),
          (A[10] = d))
        : (d = A[10])
      let ei = d
      A[11] !== ea || A[12] !== j || A[13] !== ei || A[14] !== E
        ? ((p = async function (e, t, n, a) {
            let { roleLabel: o, summary: i } = ei(e, t, n)
            ;(await (0, ti.Qm)(
              E,
              j,
              { role: e, departments: [] },
              { enabled: !0, role_user_message: o, other_user_message: i },
              a,
            ),
              a.throwIfAborted(),
              ea("Loading"))
          }),
          (A[11] = ea),
          (A[12] = j),
          (A[13] = ei),
          (A[14] = E),
          (A[15] = p))
        : (p = A[15])
      let er = p
      A[16] !== L || A[17] !== M || A[18] !== ei || A[19] !== R || A[20] !== E || A[21] !== H
        ? ((u = async function (e, t) {
            let n = (en.current = en.current + 1),
              a = () => !t.aborted && en.current === n,
              o = M.formatMessage([n_.planLessonPrompt, n_.communicationPrompt, n_.classroomResourcesPrompt][e]),
              i = ei(R, L, H).summary
            Z(!0)
            let r = await (0, nl.submitChatGPTCompletion)(E, {
              prompt: i
                ? `${o}

${i}`
                : o,
              conversationId: q.current,
              conversationMode: "primary_assistant",
              realAuthor: "onboarding",
              isOnboardingConversation: !0,
              startupSignal: t,
              isSubmissionCurrent: a,
              isRequestCurrent: a,
              onClientThreadIdChange: (e) => {
                a() && ((q.current = e), K(e))
              },
              onServerThreadIdChange: (e) => {
                a() && ((q.current = e), K(e))
              },
              onCompletion: (e) => {
                a() && (Z(!1), Q("failed" === e))
              },
            }).catch((e) => {
              throw (a() && Z(!1), e)
            })
            if (a() && null == r) throw (Z(!1), Error("Onboarding example was not submitted"))
          }),
          (A[16] = L),
          (A[17] = M),
          (A[18] = ei),
          (A[19] = R),
          (A[20] = E),
          (A[21] = H),
          (A[22] = u))
        : (u = A[22])
      let es = u
      A[23] !== j || A[24] !== O || A[25] !== eo || A[26] !== E
        ? ((h = function () {
            ;((en.current = en.current + 1),
              X.current?.controller.abort(),
              (J.current = !1),
              null != q.current && (0, nl.SY)(E, q.current),
              Z(!1),
              Q(!1),
              (0, S.yy)(E, tr.OH2, { step: "ask_any_question" }),
              (0, S.yy)(E, tr.ewv, { stepType: "ask_any_question" }),
              eo(async (e) => {
                ;(await (0, ti.de)(E, j, e).catch((t) => {
                  if ("AbortError" === t.name) throw t
                  e.throwIfAborted()
                }),
                  e.throwIfAborted(),
                  O())
              }))
          }),
          (A[23] = j),
          (A[24] = O),
          (A[25] = eo),
          (A[26] = E),
          (A[27] = h))
        : (h = A[27])
      let el = h,
        ec = "Tour" === P
      ;(A[28] !== eo ? ((m = () => void eo(ee.current)), (A[28] = eo), (A[29] = m)) : (m = A[29]),
        A[30] !== E
          ? ((g = () => {
              et.current ||
                ((et.current = !0), (0, S.yy)(E, tr.FGm, { stepType: "WorkspaceIntro", stepIndex: (0, I.At)(0) }))
            }),
            (A[30] = E),
            (A[31] = g))
          : (g = A[31]))
      let ed = V || z
      return (
        A[32] !== U
          ? ((f =
              null == U
                ? null
                : (0, a.jsx)(nd.R, {
                    route: {
                      routeKind: "chatgpt-thread",
                      conversationId: U,
                      pathname: `/c/${U}`,
                      routeTemplate: "/c/:conversationId",
                    },
                    children: (0, a.jsx)(nc.A, {
                      children: (0, a.jsx)(ns.s, {
                        conversationId: U,
                        isInlinePreview: !0,
                        isReadOnlyPreview: !0,
                        isTemporaryChat: !1,
                        sharedConversationId: null,
                      }),
                    }),
                  })),
            (A[32] = U),
            (A[33] = f))
          : (f = A[33]),
        A[34] !== ea ? ((_ = () => ea("Role")), (A[34] = ea), (A[35] = _)) : (_ = A[35]),
        A[36] !== ea || A[37] !== eo || A[38] !== er
          ? ((b = (e) => {
              ;(D(e), "teacher" === e ? ea("TeacherDetails") : eo((t) => er(e, "", "", t)))
            }),
            (A[36] = ea),
            (A[37] = eo),
            (A[38] = er),
            (A[39] = b))
          : (b = A[39]),
        A[40] !== ea || A[41] !== eo || A[42] !== es
          ? ((x = () => {
              ;(ea("Tour", 0), eo((e) => es(0, e)))
            }),
            (A[40] = ea),
            (A[41] = eo),
            (A[42] = es),
            (A[43] = x))
          : (x = A[43]),
        A[44] !== ea ||
        A[45] !== V ||
        A[46] !== R ||
        A[47] !== eo ||
        A[48] !== er ||
        A[49] !== E ||
        A[50] !== el ||
        A[51] !== P
          ? ((C = () => {
              ;(V && "Tour" !== P) ||
                ("Role" === P
                  ? ((0, S.yy)(E, tr.yP9, { step: "Role" }), ea("Loading"))
                  : "TeacherDetails" === P
                    ? ((0, S.yy)(E, tr.uxs, { step: "TeacherDetails" }), G(""), F(""), eo((e) => er(R, "", "", e)))
                    : el())
            }),
            (A[44] = ea),
            (A[45] = V),
            (A[46] = R),
            (A[47] = eo),
            (A[48] = er),
            (A[49] = E),
            (A[50] = el),
            (A[51] = P),
            (A[52] = C))
          : (C = A[52]),
        A[53] !== ea ||
        A[54] !== V ||
        A[55] !== W ||
        A[56] !== L ||
        A[57] !== j ||
        A[58] !== O ||
        A[59] !== R ||
        A[60] !== eo ||
        A[61] !== er ||
        A[62] !== E ||
        A[63] !== es ||
        A[64] !== P ||
        A[65] !== z ||
        A[66] !== H
          ? ((w = () => {
              V ||
                z ||
                ("TeacherDetails" === P
                  ? eo((e) => er(R, L, H, e))
                  : "Tour" === P && W < 2
                    ? (ea("Tour", W + 1), eo((e) => es(W + 1, e)))
                    : "Tour" === P
                      ? ea("WrappingUp")
                      : "WrappingUp" === P &&
                        eo(async (e) => {
                          ;((0, S.yy)(E, tr.t72, {}),
                            await (0, ti.de)(E, j, e).catch((t) => {
                              if ("AbortError" === t.name) throw t
                              e.throwIfAborted()
                            }),
                            e.throwIfAborted(),
                            O())
                        }))
            }),
            (A[53] = ea),
            (A[54] = V),
            (A[55] = W),
            (A[56] = L),
            (A[57] = j),
            (A[58] = O),
            (A[59] = R),
            (A[60] = eo),
            (A[61] = er),
            (A[62] = E),
            (A[63] = es),
            (A[64] = P),
            (A[65] = z),
            (A[66] = H),
            (A[67] = w))
          : (w = A[67]),
        A[68] !== W ||
        A[69] !== L ||
        A[70] !== R ||
        A[71] !== P ||
        A[72] !== H ||
        A[73] !== ed ||
        A[74] !== f ||
        A[75] !== _ ||
        A[76] !== b ||
        A[77] !== x ||
        A[78] !== C ||
        A[79] !== w ||
        A[80] !== N
          ? ((v = (0, a.jsx)(nj, {
              step: P,
              workspaceName: N,
              role: R,
              grade: L,
              subject: H,
              exampleIndex: W,
              busy: ed,
              transcript: f,
              onStart: _,
              onRole: b,
              onGrade: G,
              onSubject: F,
              onLoadingComplete: x,
              onSkip: C,
              onNext: w,
            })),
            (A[68] = W),
            (A[69] = L),
            (A[70] = R),
            (A[71] = P),
            (A[72] = H),
            (A[73] = ed),
            (A[74] = f),
            (A[75] = _),
            (A[76] = b),
            (A[77] = x),
            (A[78] = C),
            (A[79] = w),
            (A[80] = N),
            (A[81] = v))
          : (v = A[81]),
        A[82] !== V || A[83] !== Y || A[84] !== m || A[85] !== g || A[86] !== v || A[87] !== ec
          ? ((k = (0, a.jsx)(nu, { busy: V, error: Y, fillContent: ec, onRetry: m, onShown: g, children: v })),
            (A[82] = V),
            (A[83] = Y),
            (A[84] = m),
            (A[85] = g),
            (A[86] = v),
            (A[87] = ec),
            (A[88] = k))
          : (k = A[88]),
        k
      )
    }
    async function nT() {}
    var nI = n("ZhRn"),
      nR = n("aSgO"),
      nD = n("SXZ1")
    function nL(e) {
      let t,
        n,
        s,
        l,
        c = (0, o.c)(15),
        { identity: d, onComplete: p } = e,
        u = (0, i.gh)(y.u),
        { client: h } = (0, K.cn)(),
        m = (0, r.useRef)(!1)
      c[0] !== d.accountId || c[1] !== p || c[2] !== u
        ? ((t = function () {
            ;((0, nD.Wu)(u, d.accountId), p())
          }),
          (c[0] = d.accountId),
          (c[1] = p),
          (c[2] = u),
          (c[3] = t))
        : (t = c[3])
      let g = t
      return (
        c[4] !== h ? ((n = h.getContext().user.country ?? null), (c[4] = h), (c[5] = n)) : (n = c[5]),
        c[6] !== g || c[7] !== d.accountId || c[8] !== d.userId || c[9] !== u
          ? ((s = () => {
              if (m.current) return
              m.current = !0
              let e = (0, nI.Ri)("oai-aytd-user") === d.userId
              ;((0, nD.cA)(u, d.accountId, { replay: !0, showWrappingUp: !e }), e && g())
            }),
            (c[6] = g),
            (c[7] = d.accountId),
            (c[8] = d.userId),
            (c[9] = u),
            (c[10] = s))
          : (s = c[10]),
        c[11] !== g || c[12] !== n || c[13] !== s
          ? ((l = (0, a.jsx)(nR.F, { country: n, onShown: s, onContinue: g })),
            (c[11] = g),
            (c[12] = n),
            (c[13] = s),
            (c[14] = l))
          : (l = c[14]),
        l
      )
    }
    let nG = E.object({
      workspaceOnboardingResume: E.object({ accountId: E.string(), userId: E.string(), complete: E.boolean() }),
    })
    var nH = n("nM0x")
    function nF(e) {
      let t,
        n = (0, o.c)(2),
        { currentFlow: a, joinerFlow: i } = e,
        s = (0, K.AS)()
      n[0] !== s
        ? ((t = () => s.getLayer("659232070").get("flow_variant", "current")), (n[0] = s), (n[1] = t))
        : (t = n[1])
      let [l] = (0, r.useState)(t)
      return "joiner_v1" === l ? i : a
    }
    var nW = n("vw1R")
    let nB = "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
      nU = {
        role: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE",
        apps: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
        download: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP",
      }
    function nK(e, t, n) {
      ;((0, S.yy)(e, k.JY, {
        stepType: { role: "0", apps: "1", download: "2" }[n],
        productSurface: t ? "chatgpt_for_education" : void 0,
      }),
        t ||
          (0, S.yy)(e, R.ZX, {
            onboardingExperience: nB,
            action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
            stepType: nU[n],
          }))
    }
    function nq(e, t, n, a) {
      t || (0, S.yy)(e, R.ZX, { onboardingExperience: nB, action: n, connectorId: a })
    }
    var nV = n("rGp2"),
      n$ = n("hOO0"),
      nz = n("cLdu"),
      nZ = n("eFn4")
    let nY = (0, i.i1)(y.u, (e, { get: t }) => {
        if (
          t(d.chatGptAuthenticatedAccountId$) !== e.accountId ||
          t(d.chatGptAuthenticatedUserId$) !== e.userId ||
          t(h.Sk) !== e.accountId
        )
          return !1
        let n = t(h.s6)
        if (n.isPending) return
        if (!n.isSuccess || !0 !== n.data.developerMode) return !1
        let a = t(x.M9)
        if (t(x.RS) || null == a) return
        if ((t(x.JW, "2042715633"), t(x.JW, "1627064618"), a.checkGate("2042715633") || !a.checkGate("1627064618")))
          return !0
        let o = t(u.f, e.accountId)
        if (o.isPending) return
        let i = o.data?.accounts?.[e.accountId]?.account
        if (!o.isSuccess || i?.account_id !== e.accountId) return !1
        if ("account-admin" === i.account_user_role || "account-owner" === i.account_user_role) return !0
        let r = t(nZ.Jk, e.accountId)
        if (!r.isPending)
          return r.isSuccess && r.data.permissions?.includes("chatgpt.workspace.connector.dev_mode") === !0
      }),
      nQ = {
        google: [G._k["0"].connectorId, G._k["3"].connectorId, G._k["1"].connectorId, G._k["2"].connectorId],
        microsoft: [H.zd["0"].connectorId, H.zd["1"].connectorId, H.zd["3"].connectorId, H.zd["2"].connectorId],
      },
      nX = [
        G._k["3"].connectorId,
        H.zd["2"].connectorId,
        "asdk_app_69a1d78e929881919bba0dbda1f6436d",
        H.zd["3"].connectorId,
        G._k["0"].connectorId,
        H.zd["0"].connectorId,
        G._k["1"].connectorId,
        H.zd["1"].connectorId,
        G._k["2"].connectorId,
        "asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
        "connector_76869538009648d5b282a4bb21c3d157",
        "asdk_app_69b31dc2110c8191b8b47dc98fe5a052",
        "asdk_app_695bfc98071c8191bac7bc479aa27de7",
      ],
      nJ = E.record(E.string(), E.string().min(1).catch("")),
      n1 = (0, i.vU)(y.u, (e, { get: t, scope: n }) => {
        let a = !e.education || t(nY, e)
        return {
          queryKey: ["workspace-onboarding-apps", e.accountId, e.userId, e.education, ...(e.education ? [a] : [])],
          enabled: void 0 !== a,
          staleTime: Q.D.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: t }) => {
            let o = n2(n.get(x.M9), e.education),
              i = { "ChatGPT-Account-Id": e.accountId, [nV.ok]: "CONNECTOR_SETTING" },
              [r, s, l] = await Promise.all([
                Y.Request.safePost("/aip/connectors/batch", {
                  additionalHeaders: i,
                  parameters: { query: { apply_eligibility_filter: !0 } },
                  requestBody: { connector_ids: [...new Set(o.flat())], include_actions: !1 },
                  signal: t,
                }),
                (0, nz.ds)(n, { accountId: e.accountId, hostId: nz.h4, roots: void 0 }, "connector_setup"),
                Y.Request.safeGet("/aip/workspace/connector-stats", { additionalHeaders: i, signal: t }).catch(
                  () => null,
                ),
              ])
            return (
              t.throwIfAborted(),
              (function (e, t, n, a, o = !0) {
                let i = new Set()
                return e.flatMap((e) => {
                  let r = e
                    .flatMap((e) => t.filter((t) => (0, n$.$)(t.id) === (0, n$.$)(e)))
                    .find(
                      (e) =>
                        ("ENABLED" === e.status || (o && "ONLY_ME" === e.status)) &&
                        e.name.trim().length > 0 &&
                        !n0.has((0, n$.$)(e.id)) &&
                        e.labels?.admin_only_connector !== "true",
                    )
                  if (!r || i.has((0, n$.$)(r.id))) return []
                  i.add((0, n$.$)(r.id))
                  let s = new Set(e.map(n$.$)),
                    l = n.some(
                      ({ canonicalAppId: e, plugin: t }) =>
                        null != e && s.has((0, n$.$)(e)) && t.enabled && "DISABLED_BY_ADMIN" !== t.availability,
                    ),
                    c = Math.max(
                      0,
                      ...(a?.connector_stats
                        ?.filter((e) => s.has((0, n$.$)(e.connector_id)))
                        .map((e) => e.unique_user_cnt ?? 0) ?? []),
                    )
                  return [
                    {
                      connector: {
                        ...r,
                        logo_url: r.icon_assets?.["256_square"] ?? r.logo_url,
                        logo_url_dark: r.icon_dark_assets?.["256_square"] ?? r.logo_url_dark,
                      },
                      familyIds: e,
                      connected: l,
                      teammateCount: c,
                    },
                  ]
                })
              })(o, r.connectors, s, l, !0 === a)
            )
          },
        }
      }),
      n0 = new Set(
        [
          "connector_bd313622bce5485cb3d0b338715f7108",
          "connector_3f8d1a79f27c4c7ba1a897ab13bf37dc",
          "connector_8cbe1e9e357f4ec79fa9f1a8aa78f4c1",
          "connector_fdb98b59c8d44f678b086d20e82bd316",
        ].map(n$.$),
      )
    function n2(e, t) {
      let n = e?.getDynamicConfig("3365181325").get("old_to_new_mapping", {}),
        a = nJ.parse(n ?? {})
      return (t ? [...nX.slice(0, 8), ...nX.slice(-2)] : nX).map((e) =>
        [Object.entries(a).find(([t]) => (0, n$.$)(t) === (0, n$.$)(e))?.[1], e].filter(
          (e) => !!e && !n0.has((0, n$.$)(e)),
        ),
      )
    }
    let n3 = (0, i.vU)(y.u, (e, t) => ({
      queryKey: [
        "workspace-onboarding-recommendation",
        e.accountId,
        e.userId,
        ...(!1 === e.includeWorkspaceStats ? [{ includeWorkspaceStats: !1 }] : []),
      ],
      staleTime: Q.D.FIVE_MINUTES,
      retry: !1,
      queryFn: async ({ signal: n }) => {
        let a = await Y.Request.safeGet("/aip/workspace/connector-recommendation", {
          additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
          parameters: { query: { include_workspace_stats: e.includeWorkspaceStats } },
          signal: n,
        }).catch(() => null)
        n.throwIfAborted()
        let o = n2(t.get(x.M9), !1).find((e) => e.some((e) => (0, n$.$)(e) === (0, n$.$)(a?.connector_id ?? ""))),
          i = a?.mx_provider === "google" || a?.mx_provider === "microsoft" ? a.mx_provider : null
        for (let e of ["google", "microsoft"])
          if (o?.some((t) => nQ[e].some((e) => (0, n$.$)(t) === (0, n$.$)(e))))
            return { provider: e, mxProvider: i, requestSucceeded: !0 }
        return { provider: i, mxProvider: i, requestSucceeded: null != a }
      },
    }))
    function n4(e, t, n) {
      if (null == t) return []
      let a = nQ[t].flatMap((t) =>
          e.filter((e) => e.familyIds.some((e) => (0, n$.$)(e) === (0, n$.$)(t)) && (0, nV.Yo)(e.connector, "OAUTH")),
        ),
        o = a.find((e) => !e.connected)
      if (null == o) return []
      let i = nQ[t].find((e) => o.familyIds.some((t) => (0, n$.$)(t) === (0, n$.$)(e)))
      if (null == i) return [o]
      let r = []
      return (
        "google" === t
          ? (r = (0, G.W9)({ connectorId: i, statsigClient: n, disableExposureLog: !0 }).map(({ connectorId: e }) => e))
          : (0, H.Vk)({ connectorId: i, statsigClient: n, disableExposureLog: !0 }) && (r = [...nQ.microsoft]),
        a.filter((e) => e === o || e.familyIds.some((e) => r.some((t) => (0, n$.$)(t) === (0, n$.$)(e))))
      )
    }
    var n5 = n("Xpvt"),
      n6 = n("ZQu1"),
      n8 = n("a6Zv"),
      n7 = n("KzJj"),
      n9 = n.p + "assets/52b994662a0d.svg",
      ae = n.p + "assets/1e2a55818ac2.svg",
      at = n.p + "assets/8206cb02ef38.svg",
      an = n("RXuq")
    function aa() {
      let e,
        t,
        n,
        i,
        r,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        k,
        A,
        S,
        j,
        N,
        O,
        E,
        M,
        P,
        T,
        I = (0, o.c)(51),
        R = (0, s.A)(),
        D = (0, tg.I)()
      I[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { opacity: 0, y: 12 }), (I[0] = e)) : (e = I[0])
      let L = 0.35 * !D
      I[1] !== L
        ? ((t = { hidden: e, show: { opacity: 1, y: 0, transition: { duration: L } } }), (I[1] = L), (I[2] = t))
        : (t = I[2])
      let G = t
      ;(I[3] !== R
        ? ((n = R.formatMessage({
            id: "chatgpt.onboarding.new_workspace.connectors_preview.image.description",
            defaultMessage: "An example of ChatGPT answering a project launch question using connected work apps.",
            description:
              "Accessible description of the decorative chat illustration on the new-workspace connector onboarding screen. It conveys to screen-reader users that connecting work apps lets ChatGPT answer company-specific questions. The visible example concerns a fictional project, not the user's real workspace data.",
          })),
          (I[3] = R),
          (I[4] = n))
        : (n = I[4]),
        I[5] === Symbol.for("react.memo_cache_sentinel") ? ((i = {}), (I[5] = i)) : (i = I[5]))
      let H = 0.15 * !D
      ;(I[6] !== H ? ((r = (0, n7.y)(H)), (I[6] = H), (I[7] = r)) : (r = I[7]),
        I[8] !== r
          ? ((c = { hidden: i, show: { transition: { delayChildren: r } } }), (I[8] = r), (I[9] = c))
          : (c = I[9]))
      let F = !D && "hidden"
      return (
        I[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.question",
              defaultMessage: "When is Project Horizon launching?",
              description:
                "Example user question shown in the connectors preview chat on the new workspace onboarding flow. It demonstrates asking ChatGPT about a fictional internal project after work apps are connected. Short chat bubble text.",
            })),
            (I[10] = d))
          : (d = I[10]),
        I[11] !== G
          ? ((p = (0, a.jsx)(th.P.div, {
              className:
                "ms-auto max-w-[70%] rounded-2xl bg-surface-tertiary px-4 py-2 text-base leading-6.5 text-default",
              variants: G,
              children: d,
            })),
            (I[11] = G),
            (I[12] = p))
          : (p = I[12]),
        I[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(n6.R, {
              className: "size-5 shrink-0",
              alt: "",
              src: at,
              fallback: (0, a.jsx)("span", {}),
              monochrome: !0,
            })),
            (I[13] = u))
          : (u = I[13]),
        I[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4",
              children: [
                u,
                (0, a.jsx)("div", {
                  className: "text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.source.notion",
                    defaultMessage: "Notion",
                    description: "Source chip primary label for Notion",
                  }),
                }),
              ],
            })),
            (I[14] = h))
          : (h = I[14]),
        I[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("div", {
              className: "inline-flex h-16 flex-1 basis-0 items-start rounded-2xl border border-default px-4 py-3",
              children: (0, a.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                  h,
                  (0, a.jsx)("div", {
                    className: "text-xs leading-4 text-default",
                    children: (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.new_workspace.connectors_preview.source.notion_project",
                      defaultMessage: "Project Horizon",
                      description:
                        "Secondary label in a Notion source chip shown in the connectors preview chat on the new workspace onboarding flow. It names the fictional internal project used in the surrounding example. Short source label.",
                    }),
                  }),
                ],
              }),
            })),
            (I[15] = m))
          : (m = I[15]),
        I[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(n6.R, {
              className: "size-5 shrink-0",
              alt: "",
              src: an,
              fallback: (0, a.jsx)("span", {}),
            })),
            (I[16] = g))
          : (g = I[16]),
        I[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4",
              children: [
                g,
                (0, a.jsx)("div", {
                  className: "text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.source.slack",
                    defaultMessage: "Slack",
                    description: "Source chip primary label for Slack",
                  }),
                }),
              ],
            })),
            (I[17] = f))
          : (f = I[17]),
        I[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)("div", {
              className: "inline-flex h-16 flex-1 basis-0 items-start rounded-2xl border border-default px-4 py-3",
              children: (0, a.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                  f,
                  (0, a.jsx)("div", {
                    className: "text-xs leading-4 text-default",
                    children: (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.new_workspace.connectors_preview.source.slack_channel",
                      defaultMessage: "#proj-horizon",
                      description:
                        "Secondary label in a Slack source chip shown in the connectors preview chat on the new workspace onboarding flow. It represents the fictional Slack channel for the example project. Short channel-style label.",
                    }),
                  }),
                ],
              }),
            })),
            (I[18] = _))
          : (_ = I[18]),
        I[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)("div", {
              className: "flex items-center text-xs leading-4",
              children: [n9, eg, ae].map(as),
            })),
            (I[19] = b))
          : (b = I[19]),
        I[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)("div", {
              className: "inline-flex h-16 flex-1 basis-0 items-start rounded-2xl border border-default px-4 py-3",
              children: (0, a.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                  b,
                  (0, a.jsx)("div", {
                    className: "text-xs leading-4 text-default",
                    children: (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.new_workspace.connectors_preview.source.count",
                      defaultMessage: "{count} sources",
                      description: "Source chip secondary text for combined sources, shows count",
                      values: { count: 32 },
                    }),
                  }),
                ],
              }),
            })),
            (I[20] = y))
          : (y = I[20]),
        I[21] !== G
          ? ((x = (0, a.jsxs)(th.P.div, {
              className: "mt-3.5 flex flex-wrap items-stretch gap-2",
              variants: G,
              children: [m, _, y],
            })),
            (I[21] = G),
            (I[22] = x))
          : (x = I[22]),
        I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.search_caption",
              defaultMessage: "Searched company knowledge",
              description: "Caption below source chips indicating search scope",
            })),
            (I[23] = C))
          : (C = I[23]),
        I[24] !== G
          ? ((w = (0, a.jsx)(th.P.div, {
              className: "mt-1 text-base leading-6.5 text-secondary",
              variants: G,
              children: C,
            })),
            (I[24] = G),
            (I[25] = w))
          : (w = I[25]),
        I[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_body",
              defaultMessage:
                "Project Horizon is moving through staged rollout planning. The product team is expanding integrations, validating permission mappings, and working through security reviews with a small pilot in mind.",
              description:
                "Example assistant response shown in the connectors preview chat on the new workspace onboarding flow. It illustrates company knowledge retrieved from connected apps for a fictional internal project. 'Permission mappings' means access-control settings, not legal approvals. Body copy in a chat-style response.",
            })),
            (I[26] = v))
          : (v = I[26]),
        I[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, a.jsxs)("p", {
              className: "mb-6 text-base leading-6.5 text-default",
              children: [
                v,
                (0, a.jsx)("span", {
                  className: "ms-1 inline-flex items-center gap-1 rounded-xs bg-surface-tertiary px-1 py-0.5",
                  children: [an, at].map(ar),
                }),
              ],
            })),
            (I[27] = k))
          : (k = I[27]),
        I[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsx)("h3", {
              className: "mb-1 text-lg leading-7 font-semibold text-default",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.title",
                defaultMessage: "Rollout Plan",
                description: "Heading for rollout plan list",
              }),
            })),
            (I[28] = A))
          : (A = I[28]),
        I[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.pilot_planning",
              defaultMessage:
                "<strong>Pilot planning:</strong> Validate core workflows, data handling, permission mappings, and connector reliability with a smaller user group.",
              description:
                "First bullet in the example rollout plan shown in the connectors preview chat on the new workspace onboarding flow. The strong tag emphasizes the rollout phase label for a fictional internal project. 'Permission mappings' means access-control settings.",
              values: { strong: ai },
            })),
            (I[29] = S))
          : (S = I[29]),
        I[30] !== G ? ((j = (0, a.jsx)(th.P.li, { variants: G, children: S })), (I[30] = G), (I[31] = j)) : (j = I[31]),
        I[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.after_validation",
              defaultMessage:
                "<strong>Broader rollout:</strong> Expand access to more users and teams after stability, access-control settings, and admin controls are confirmed.",
              description:
                "Second bullet in the example rollout plan shown in the connectors preview chat on the new workspace onboarding flow. The strong tag emphasizes the rollout phase label for a fictional internal project. 'Broader rollout' means expanding to more users or teams after validation, not granting higher privileges.",
              values: { strong: ao },
            })),
            (I[32] = N))
          : (N = I[32]),
        I[33] !== G ? ((O = (0, a.jsx)(th.P.li, { variants: G, children: N })), (I[33] = G), (I[34] = O)) : (O = I[34]),
        I[35] !== j || I[36] !== O
          ? ((E = (0, a.jsxs)("div", {
              children: [
                A,
                (0, a.jsxs)("ul", {
                  className: "list-disc ps-5 text-base leading-6.5 text-secondary",
                  children: [j, O],
                }),
              ],
            })),
            (I[35] = j),
            (I[36] = O),
            (I[37] = E))
          : (E = I[37]),
        I[38] !== G || I[39] !== E
          ? ((M = (0, a.jsxs)(th.P.div, { className: "-mt-1 w-full max-w-180", variants: G, children: [k, E] })),
            (I[38] = G),
            (I[39] = E),
            (I[40] = M))
          : (M = I[40]),
        I[41] !== p || I[42] !== x || I[43] !== w || I[44] !== M || I[45] !== c || I[46] !== F
          ? ((P = (0, a.jsx)("div", {
              className:
                "relative h-full w-full overflow-hidden rounded-[40px] border border-default mask-b-from-80% mask-b-to-100%",
              "aria-hidden": "true",
              children: (0, a.jsx)("div", {
                className: "pointer-events-none absolute inset-0",
                children: (0, a.jsxs)(th.P.div, {
                  className: "absolute inset-x-6 top-8 flex flex-col gap-3",
                  variants: c,
                  initial: F,
                  animate: "show",
                  children: [p, x, w, M],
                }),
              }),
            })),
            (I[41] = p),
            (I[42] = x),
            (I[43] = w),
            (I[44] = M),
            (I[45] = c),
            (I[46] = F),
            (I[47] = P))
          : (P = I[47]),
        I[48] !== n || I[49] !== P
          ? ((T = (0, a.jsx)("div", {
              className: "relative h-full w-full shrink-0 p-3 select-none max-[839px]:hidden md:w-1/2 md:p-4",
              role: "img",
              "aria-label": n,
              children: P,
            })),
            (I[48] = n),
            (I[49] = P),
            (I[50] = T))
          : (T = I[50]),
        T
      )
    }
    function ao(e) {
      return (0, a.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function ai(e) {
      return (0, a.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function ar(e) {
      return (0, a.jsx)(
        n6.R,
        { className: "size-3 shrink-0", alt: "", src: e, fallback: (0, a.jsx)("span", {}), monochrome: e === at },
        e,
      )
    }
    function as(e) {
      return (0, a.jsx)(n6.R, { className: "size-5 shrink-0", alt: "", src: e, fallback: (0, a.jsx)("span", {}) }, e)
    }
    function al(e) {
      let t,
        n,
        i,
        c,
        d,
        p,
        u,
        h,
        m,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v = (0, o.c)(41),
        { apps: k, busy: A, error: S, notice: j, onConnect: N, onContinue: O, onSkip: E } = e,
        M = (0, s.A)(),
        P = (0, n8.Y)(),
        [T, I] = (0, r.useState)(!1)
      v[0] !== k ? ((t = k?.filter(ad).length ?? 0), (v[0] = k), (v[1] = t)) : (t = v[1])
      let R = t
      ;(v[2] !== R
        ? ((n = (0, a.jsx)("h1", {
            className: "text-2xl md:text-3xl",
            children:
              R > 0
                ? (0, a.jsx)(l.A, {
                    id: "educationOnboarding.apps.more.title",
                    defaultMessage: "Connect more apps",
                    description: "Title of education onboarding when at least one workspace app is already connected",
                  })
                : (0, a.jsx)(l.A, {
                    id: "educationOnboarding.apps.title",
                    defaultMessage: "Select apps you use at work",
                    description: "Title inviting a new education workspace member to connect their apps",
                  }),
          })),
          (v[2] = R),
          (v[3] = n))
        : (n = v[3]),
        v[4] !== R
          ? ((i = (0, a.jsx)("p", {
              className: "mt-4 text-sm text-secondary md:text-base",
              children:
                R > 0
                  ? (0, a.jsx)(l.A, {
                      id: "educationOnboarding.apps.more.subtitle",
                      defaultMessage: "Get better answers by connecting more apps",
                      description: "Explains the benefit of connecting additional apps during education onboarding",
                    })
                  : (0, a.jsx)(l.A, {
                      id: "educationOnboarding.apps.subtitle",
                      defaultMessage: "These apps are enabled for your workspace",
                      description:
                        "Explains that the apps offered during education onboarding are enabled by the workspace",
                    }),
            })),
            (v[4] = R),
            (v[5] = i))
          : (i = v[5]),
        v[6] !== n || v[7] !== i
          ? ((c = (0, a.jsxs)("div", {
              className: "mt-6 flex flex-col items-center px-6 text-center",
              children: [n, i],
            })),
            (v[6] = n),
            (v[7] = i),
            (v[8] = c))
          : (c = v[8]))
      let D = !T && "[mask-image:linear-gradient(180deg,black_80%,transparent_100%)]"
      ;(v[9] !== D
        ? ((d = (0, ea.A)("mx-6 mt-3 grow overflow-auto rounded-2xl p-3", D)), (v[9] = D), (v[10] = d))
        : (d = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (e) => {
              let t = e.currentTarget
              I(t.scrollTop + t.clientHeight >= t.scrollHeight - 2)
            }),
            (v[11] = p))
          : (p = v[11]),
        v[12] !== k || v[13] !== A || v[14] !== P || v[15] !== S || v[16] !== M || v[17] !== N
          ? ((u =
              S ??
              (0, a.jsx)("div", {
                className: "grid grid-cols-2 gap-2",
                "aria-busy": null == k,
                children:
                  null == k
                    ? Array.from({ length: 6 }, ac)
                    : k.map((e) => {
                        let t = P ? (e.logoUrlDark ?? e.logoUrl) : (e.logoUrl ?? e.logoUrlDark)
                        return (0, a.jsxs)(
                          "button",
                          {
                            type: "button",
                            "aria-label": e.connected
                              ? M.formatMessage(
                                  {
                                    id: "chatgpt.onboarding.new_workspace.connectors.app.connected",
                                    defaultMessage: "{appName} is connected",
                                    description:
                                      "Accessible label for an already-connected app in workspace onboarding; appName is its display name",
                                  },
                                  { appName: e.name },
                                )
                              : M.formatMessage(
                                  {
                                    id: "chatgpt.onboarding.new_workspace.connectors.app.connect",
                                    defaultMessage: "Connect {appName}",
                                    description:
                                      "Accessible label for selecting or connecting an app in workspace onboarding; appName is its display name",
                                  },
                                  { appName: e.name },
                                ),
                            "aria-disabled": e.connected || A,
                            className: (0, ea.A)(
                              "group flex min-w-0 grow flex-col rounded-xl border border-default p-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden",
                              !e.connected && !A && "cursor-interaction hover:bg-surface-tertiary",
                            ),
                            onClick: () => {
                              A || N?.(e.id)
                            },
                            children: [
                              (0, a.jsxs)("span", {
                                className: "flex w-full items-center justify-between gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "flex size-6 items-center justify-center",
                                    "aria-hidden": "true",
                                    children: t
                                      ? (0, a.jsx)(n6.R, {
                                          src: t,
                                          alt: "",
                                          className: "size-6",
                                          fallback: (0, a.jsx)(eu.HUG, {}),
                                        })
                                      : (0, a.jsx)(eu.HUG, {}),
                                  }),
                                  (0, a.jsx)("span", {
                                    className: (0, ea.A)(
                                      "flex size-5 items-center justify-center rounded-full",
                                      e.connected
                                        ? "bg-info-solid text-info-solid"
                                        : "bg-surface-tertiary group-hover:bg-surface-secondary",
                                    ),
                                    "aria-hidden": "true",
                                    children: e.connected ? (0, a.jsx)(eu.yIE, {}) : (0, a.jsx)(eu.xFs, {}),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("span", {
                                className: "mt-3 line-clamp-1 pt-2 text-sm text-default",
                                children: e.name,
                              }),
                              e.teammateCount >= 5
                                ? (0, a.jsx)("span", {
                                    className: "line-clamp-1 text-xs text-tertiary",
                                    children: (0, a.jsx)(l.A, {
                                      id: "educationOnboarding.apps.teammates",
                                      defaultMessage: "{count} teammates",
                                      description:
                                        "Count of teammates using a workspace app during education onboarding; only shown when at least five teammates use it",
                                      values: { count: M.formatNumber(e.teammateCount) },
                                    }),
                                  })
                                : null,
                            ],
                          },
                          e.id,
                        )
                      }),
              })),
            (v[12] = k),
            (v[13] = A),
            (v[14] = P),
            (v[15] = S),
            (v[16] = M),
            (v[17] = N),
            (v[18] = u))
          : (u = v[18]),
        v[19] !== j || v[20] !== d || v[21] !== u
          ? ((h = (0, a.jsxs)("div", { className: d, onScroll: p, children: [j, u] })),
            (v[19] = j),
            (v[20] = d),
            (v[21] = u),
            (v[22] = h))
          : (h = v[22]))
      let L = A || null == k || 0 === R
      return (
        v[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(l.A, {
              id: "educationOnboarding.apps.continue",
              defaultMessage: "Continue to Workspace",
              description: "Completes education workspace onboarding after connecting at least one app",
            })),
            (v[23] = m))
          : (m = v[23]),
        v[24] !== O || v[25] !== L
          ? ((f = (0, a.jsx)(g.$, {
              color: "chatgptPrimary",
              size: "panelAction",
              radius: "full",
              className: "w-70",
              disabled: L,
              onClick: O,
              children: m,
            })),
            (v[24] = O),
            (v[25] = L),
            (v[26] = f))
          : (f = v[26]),
        v[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(l.A, {
              id: "educationOnboarding.apps.skip",
              defaultMessage: "Skip",
              description: "Completes education onboarding without connecting more apps",
            })),
            (v[27] = _))
          : (_ = v[27]),
        v[28] !== A || v[29] !== E
          ? ((b = (0, a.jsx)(g.$, {
              color: "ghost",
              size: "dialogAction",
              radius: "full",
              disabled: A,
              onClick: E,
              children: _,
            })),
            (v[28] = A),
            (v[29] = E),
            (v[30] = b))
          : (b = v[30]),
        v[31] !== f || v[32] !== b
          ? ((y = (0, a.jsxs)("div", {
              className: "flex flex-col items-center justify-center gap-3 px-6 py-4",
              children: [f, b],
            })),
            (v[31] = f),
            (v[32] = b),
            (v[33] = y))
          : (y = v[33]),
        v[34] !== y || v[35] !== c || v[36] !== h
          ? ((x = (0, a.jsxs)("div", {
              className: "flex min-w-0 grow flex-col justify-center pb-1 md:w-1/2 md:pb-2",
              children: [c, h, y],
            })),
            (v[34] = y),
            (v[35] = c),
            (v[36] = h),
            (v[37] = x))
          : (x = v[37]),
        v[38] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, a.jsx)(aa, {})), (v[38] = C)) : (C = v[38]),
        v[39] !== x
          ? ((w = (0, a.jsx)("div", {
              className: "flex h-full w-full items-center justify-center select-none",
              children: (0, a.jsxs)("div", {
                className: "relative mx-auto flex h-150 w-full max-w-240 flex-row overflow-hidden",
                children: [x, C],
              }),
            })),
            (v[39] = x),
            (v[40] = w))
          : (w = v[40]),
        w
      )
    }
    function ac(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex grow flex-col gap-2 rounded-xl border border-default p-3",
          children: [
            (0, a.jsxs)("div", {
              className: "flex w-full items-center justify-between gap-2",
              children: [
                (0, a.jsx)("div", { className: "size-6", children: (0, a.jsx)(er.y, {}) }),
                (0, a.jsx)("div", { className: "size-5 rounded-full bg-surface-tertiary" }),
              ],
            }),
            (0, a.jsx)("div", { className: "mt-3 h-4 w-24 rounded bg-surface-tertiary" }),
          ],
        },
        t,
      )
    }
    function ad(e) {
      return e.connected
    }
    function ap(e) {
      let t,
        n,
        r,
        s,
        c,
        d = (0, o.c)(38),
        p = (0, i.gh)(y.u)
      d[0] !== e.planType ? ((t = (0, w.V$)(e.planType)), (d[0] = e.planType), (d[1] = t)) : (t = d[1])
      let u = t
      d[2] !== e || d[3] !== p
        ? ((n = () => {
            ;((0, S.yy)(p, tr.aH3, {}), e.onFinish())
          }),
          (d[2] = e),
          (d[3] = p),
          (d[4] = n))
        : (n = d[4])
      let h = n
      d[5] !== u || d[6] !== e.identity
        ? ((r = { ...e.identity, education: u }), (d[5] = u), (d[6] = e.identity), (d[7] = r))
        : (r = d[7])
      let { data: m, isPending: f, isError: _, refetch: b } = (0, i._U)(n1, r),
        x = !u
      d[8] !== x ? ((s = { enabled: x }), (d[8] = x), (d[9] = s)) : (s = d[9])
      let { data: C, isPending: v } = (0, i._U)(n3, e.identity, s)
      if (f || (!u && v)) {
        let t
        if (u) {
          let t
          return (
            d[10] !== e.busy || d[11] !== e.onFinish || d[12] !== h
              ? ((t = (0, a.jsx)(al, { apps: void 0, busy: e.busy, onContinue: e.onFinish, onSkip: h })),
                (d[10] = e.busy),
                (d[11] = e.onFinish),
                (d[12] = h),
                (d[13] = t))
              : (t = d[13]),
            t
          )
        }
        return (
          d[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)("p", {
                role: "status",
                children: (0, a.jsx)(l.A, {
                  id: "workspaceOnboarding.apps.loading",
                  defaultMessage: "Loading your workspace apps…",
                  description: "Shown while loading apps available during workspace onboarding",
                }),
              })),
              (d[14] = t))
            : (t = d[14]),
          t
        )
      }
      if (_ || null == m) {
        let t, n, o, i, r, s, c
        ;(d[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("p", {
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.apps.error",
                defaultMessage: "We couldn’t load your workspace apps",
                description: "Error loading available apps in workspace onboarding",
              }),
            })),
            (d[15] = t))
          : (t = d[15]),
          d[16] !== b ? ((n = () => void b()), (d[16] = b), (d[17] = n)) : (n = d[17]),
          d[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.retry",
                defaultMessage: "Try again",
                description: "Retries the failed onboarding action",
              })),
              (d[18] = o))
            : (o = d[18]),
          d[19] !== n ? ((i = (0, a.jsx)(g.$, { onClick: n, children: o })), (d[19] = n), (d[20] = i)) : (i = d[20]),
          d[21] !== u || d[22] !== e.onFinish
            ? ((r = u
                ? null
                : (0, a.jsx)(g.$, {
                    color: "ghostActive",
                    onClick: e.onFinish,
                    children: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.later",
                      defaultMessage: "Set up later",
                      description: "Completes onboarding without connecting apps",
                    }),
                  })),
              (d[21] = u),
              (d[22] = e.onFinish),
              (d[23] = r))
            : (r = d[23]),
          d[24] !== i || d[25] !== r
            ? ((s = (0, a.jsxs)("div", {
                role: "alert",
                className: "flex flex-col gap-4 text-center",
                children: [t, i, r],
              })),
              (d[24] = i),
              (d[25] = r),
              (d[26] = s))
            : (s = d[26]))
        let p = s
        return (
          d[27] !== u || d[28] !== p || d[29] !== e.busy || d[30] !== e.onFinish || d[31] !== h
            ? ((c = u ? (0, a.jsx)(al, { apps: [], busy: e.busy, error: p, onContinue: e.onFinish, onSkip: h }) : p),
              (d[27] = u),
              (d[28] = p),
              (d[29] = e.busy),
              (d[30] = e.onFinish),
              (d[31] = h),
              (d[32] = c))
            : (c = d[32]),
          c
        )
      }
      let k = C?.provider ?? null
      return (
        d[33] !== m || d[34] !== u || d[35] !== e || d[36] !== k
          ? ((c = (0, a.jsx)(au, { ...e, apps: m, provider: k, education: u })),
            (d[33] = m),
            (d[34] = u),
            (d[35] = e),
            (d[36] = k),
            (d[37] = c))
          : (c = d[37]),
        c
      )
    }
    function au(e) {
      let t,
        n,
        c,
        d,
        p,
        u,
        h,
        m = (0, o.c)(40),
        { identity: f, planType: _, apps: b, provider: x, education: C, busy: w, beforeOAuth: v, onFinish: k } = e,
        A = (0, i.gh)(y.u),
        j = (0, s.A)(),
        { client: N } = (0, K.cn)(),
        { markAppConnectOAuthPending: O } = (0, L.ZN)(),
        E = (0, r.useRef)(!1),
        M = (0, r.useRef)(!1),
        [P, T] = (0, r.useState)(!1)
      m[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (m[0] = t)) : (t = m[0])
      let [D, G] = (0, r.useState)(t)
      m[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (m[1] = n)) : (n = m[1])
      let [H, F] = (0, r.useState)(n),
        [W, B] = (0, r.useState)(null)
      if (
        m[2] !== b ||
        m[3] !== w ||
        m[4] !== N ||
        m[5] !== D ||
        m[6] !== C ||
        m[7] !== H ||
        m[8] !== k ||
        m[9] !== _ ||
        m[10] !== x ||
        m[11] !== A ||
        m[12] !== P
      ) {
        let e,
          t,
          n,
          o,
          i = (0, nW.o)(_),
          r = !C && (i || "team" === _ || "self_serve_business_prolite" === _)
        m[16] !== H
          ? ((e = (e) => ({ ...e, connected: e.connected || H.includes(e.connector.id) })), (m[16] = H), (m[17] = e))
          : (e = m[17])
        let s = n4(b.map(e), x, N),
          u = s.find(av),
          h = r && null != u
        m[18] !== H
          ? ((t = (e) => ({ ...e, connected: e.connected || H.includes(e.connector.id) })), (m[18] = H), (m[19] = t))
          : (t = m[19])
        let f = b.map(t),
          y = C ? f.sort(aw) : b
        ;(h ? (y = s) : C || (y = [...b].sort(aC).slice(0, 6)),
          m[20] !== H
            ? ((n = (e) => e.connected || H.includes(e.connector.id)), (m[20] = H), (m[21] = n))
            : (n = m[21]))
        let v = y.filter(n),
          j = y.filter((e) => !v.includes(e))
        m[22] !== D ? ((o = (e) => !D.includes(e.connector.id)), (m[22] = D), (m[23] = o)) : (o = m[23])
        let O = j.filter(o),
          L =
            null == u || null == x
              ? null
              : {
                  connectorId: u.connector.id,
                  connectorName: u.connector.name,
                  connectorProvider: x,
                  isEnterprise: i,
                  onboardingExperience: nB,
                },
          F = function (e, t) {
            if (w || 0 === e.length) return
            let [n, ...a] = e
            if (t && L)
              (0, S.yy)(A, R.nT, {
                ...L,
                selectedConnectorIds: e.map(ax),
                selectableConnectorIds: j.map(ay),
                alreadyConnectedConnectorIds: v.map(ab),
                selectedConnectorCount: (0, I.At)(e.length),
                selectableConnectorCount: (0, I.At)(j.length),
                alreadyConnectedConnectorCount: (0, I.At)(v.length),
                allSelectableSelected: e.length === j.length,
              })
            else if (C) {
              if (
                ((0, S.yy)(A, tr.AKq, {
                  id: n.connector.id,
                  name: n.connector.name,
                  isSync: !1,
                  connected: n.connected,
                }),
                n.connected)
              )
                return
            } else
              nq(
                A,
                !1,
                "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED",
                n.connector.id,
              )
            ;(T(!1), B({ app: n, companions: a, recommended: t }))
          }
        ;((c = C ? "h-full w-full" : "flex w-full max-w-lg flex-col gap-6"),
          (d = (e) => {
            if (e) {
              if (0 === y.length) {
                M.current || ((M.current = !0), k())
                return
              }
              E.current ||
                ((E.current = !0),
                h && L
                  ? (0, S.yy)(A, R.tT, L)
                  : nq(A, C, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN"))
            }
          }),
          (p = C
            ? (0, a.jsx)(al, {
                apps: y.map(a_),
                busy: w,
                notice: P
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-base text-danger",
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceOnboarding.apps.selectionExpired",
                        defaultMessage: "Available apps changed. Please choose your apps again",
                        description:
                          "Shown when a selected onboarding app becomes unavailable or connected before consent",
                      }),
                    })
                  : void 0,
                onConnect: (e) => {
                  let t = y.find((t) => t.connector.id === e)
                  t && F([t], !1)
                },
                onContinue: () => {
                  ;((0, S.yy)(A, tr.CCm, { connectedCount: (0, I.At)(v.length) }), k())
                },
                onSkip: () => {
                  ;((0, S.yy)(A, tr.aH3, {}), k())
                },
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("h1", {
                    className: "text-center text-heading-lg font-semibold",
                    children: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.title",
                      defaultMessage: "Connect your apps",
                      description: "Title of the workspace onboarding app connection step",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-center text-base text-secondary",
                    children: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.subtitle",
                      defaultMessage: "Bring your work into ChatGPT",
                      description: "Explains why connecting workspace apps is useful during onboarding",
                    }),
                  }),
                  P
                    ? (0, a.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, a.jsx)(l.A, {
                          id: "workspaceOnboarding.apps.selectionExpired",
                          defaultMessage: "Available apps changed. Please choose your apps again",
                          description:
                            "Shown when a selected onboarding app becomes unavailable or connected before consent",
                        }),
                      })
                    : null,
                  (0, a.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: y.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "relative flex items-center gap-3",
                          children: [
                            h
                              ? (0, a.jsx)(n5.S, {
                                  id: e.connector.id,
                                  checked: v.includes(e) || !D.includes(e.connector.id),
                                  disabled: w || v.includes(e),
                                  onCheckedChange: (t) =>
                                    G((n) => (t ? n.filter((t) => t !== e.connector.id) : [...n, e.connector.id])),
                                })
                              : null,
                            (0, a.jsxs)("label", {
                              htmlFor: e.connector.id,
                              className: "flex flex-1 flex-col gap-1",
                              children: [
                                (0, a.jsx)("span", { children: e.connector.name }),
                                e.teammateCount > 0
                                  ? (0, a.jsx)("span", {
                                      className: "text-sm text-secondary",
                                      children: (0, a.jsx)(l.A, {
                                        id: "workspaceOnboarding.apps.teammates",
                                        defaultMessage:
                                          "{count, plural, one {# teammate connected} other {# teammates connected}}",
                                        description: "Number of teammates who connected this app",
                                        values: { count: e.teammateCount },
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                            v.includes(e)
                              ? (0, a.jsx)("span", {
                                  className: "text-sm text-secondary",
                                  children: (0, a.jsx)(l.A, {
                                    id: "workspaceOnboarding.apps.connected",
                                    defaultMessage: "Connected",
                                    description: "Indicates this workspace app is already connected",
                                  }),
                                })
                              : null,
                            v.includes(e) || h
                              ? null
                              : (0, a.jsx)(g.$, {
                                  color: "secondary",
                                  disabled: w,
                                  onClick: () => F([e], !1),
                                  children: (0, a.jsx)(l.A, {
                                    id: "workspaceOnboarding.apps.connect",
                                    defaultMessage: "Connect",
                                    description: "Opens consent to connect a workspace app",
                                  }),
                                }),
                          ],
                        },
                        e.connector.id,
                      ),
                    ),
                  }),
                  h
                    ? (0, a.jsx)(g.$, {
                        size: "beaconAction",
                        disabled: w || 0 === O.length,
                        onClick: () => F(O, !0),
                        children: (0, a.jsx)(l.A, {
                          id: "workspaceOnboarding.apps.connectSelected",
                          defaultMessage: "Connect selected apps",
                          description: "Opens consent for only the selected workspace apps",
                        }),
                      })
                    : (0, a.jsx)(g.$, {
                        size: "beaconAction",
                        disabled: w || 0 === v.length,
                        onClick: () => {
                          ;(nq(A, C, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
                            k())
                        },
                        children: (0, a.jsx)(l.A, {
                          id: "workspaceOnboarding.apps.continue",
                          defaultMessage: "Continue",
                          description: "Completes workspace onboarding after connecting apps",
                        }),
                      }),
                  (0, a.jsx)(g.$, {
                    color: "ghostActive",
                    size: "beaconAction",
                    disabled: w,
                    onClick: () => {
                      ;(h && L
                        ? (0, S.yy)(A, R.qo, L)
                        : nq(A, C, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
                        k())
                    },
                    children: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.later",
                      defaultMessage: "Set up later",
                      description: "Completes onboarding without connecting apps",
                    }),
                  }),
                ],
              })),
          (m[2] = b),
          (m[3] = w),
          (m[4] = N),
          (m[5] = D),
          (m[6] = C),
          (m[7] = H),
          (m[8] = k),
          (m[9] = _),
          (m[10] = x),
          (m[11] = A),
          (m[12] = P),
          (m[13] = c),
          (m[14] = d),
          (m[15] = p))
      } else ((c = m[13]), (d = m[14]), (p = m[15]))
      return (
        m[24] !== v ||
        m[25] !== N ||
        m[26] !== W ||
        m[27] !== C ||
        m[28] !== f ||
        m[29] !== j ||
        m[30] !== O ||
        m[31] !== k ||
        m[32] !== x ||
        m[33] !== A
          ? ((u =
              null == W
                ? null
                : (0, a.jsx)(U.Z, {
                    app: {
                      id: W.app.connector.id,
                      name: W.app.connector.name,
                      description: W.app.connector.description,
                      logoUrl: W.app.connector.logo_url,
                      logoUrlDark: W.app.connector.logo_url_dark ?? null,
                      distributionChannel: W.app.connector.distribution_channel ?? null,
                      appMetadata: null,
                      branding: null,
                      iconAssets: null,
                      iconDarkAssets: null,
                      installUrl: null,
                      isAccessible: !1,
                      isEnabled: !1,
                      labels: null,
                      pluginDisplayNames: [],
                    },
                    expectedIdentity: f,
                    allowBrowserFallback: !1,
                    skipGoogleOAuthBundle: !0,
                    closeOnOAuthStarted: !1,
                    postConnectSource: null,
                    waitForConnectedHandler: !0,
                    requestedCompanionConnectorIds: W.companions.map(af),
                    appConnectOptions: {
                      connectorId: W.app.connector.id,
                      productSku: "CONNECTOR_SETTING",
                      oauthReferrer: "workspace_onboarding",
                      redirectAfter: "/",
                      oauthPresentation: "popup",
                    },
                    connectionDisclosure: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.selectedDisclosure",
                      defaultMessage: "You’re connecting {apps}",
                      description: "Lists exactly the apps selected by the user before granting consent",
                      values: { apps: j.formatList([W.app, ...W.companions].map(ag)) },
                    }),
                    beforeConnect: async () => {
                      let e = A.query.snapshot(n1, { ...f, education: C })
                      await e.invalidate()
                      let t = await e.fetch(),
                        n = [W.app, ...W.companions],
                        a = W.recommended
                          ? n4(t, x, N)
                          : t.filter((e) => !C || "ONLY_ME" !== e.connector.status || !0 === A.get(nY, f))
                      return n.some((e) => !a.some((t) => t.connector.id === e.connector.id && !t.connected))
                        ? (B(null), T(!0), !1)
                        : (W.recommended && (await v()), !0)
                    },
                    onOpenChange: (e) => {
                      e || B(null)
                    },
                    onConnected: () => {
                      ;(F((e) => [...e, W.app.connector.id, ...W.companions.map(am)]), B(null), W.recommended && k())
                    },
                    onOAuthStarted: (e) =>
                      O({
                        ...e,
                        appConnectOptions: {
                          connectorId: W.app.connector.id,
                          productSku: "CONNECTOR_SETTING",
                          oauthReferrer: "workspace_onboarding",
                          redirectAfter: "/",
                          oauthPresentation: "popup",
                        },
                        returnTo: "/onboarding",
                        resumeTarget: {
                          kind: "return-to-location-state",
                          requiredConnectorIds: [W.app, ...W.companions].map(ah),
                          successState: { workspaceOnboardingResume: { ...f, complete: W.recommended } },
                          failureState: { workspaceOnboardingResume: { ...f, complete: !1 } },
                        },
                      }),
                  })),
            (m[24] = v),
            (m[25] = N),
            (m[26] = W),
            (m[27] = C),
            (m[28] = f),
            (m[29] = j),
            (m[30] = O),
            (m[31] = k),
            (m[32] = x),
            (m[33] = A),
            (m[34] = u))
          : (u = m[34]),
        m[35] !== c || m[36] !== d || m[37] !== p || m[38] !== u
          ? ((h = (0, a.jsxs)("div", { className: c, ref: d, children: [p, u] })),
            (m[35] = c),
            (m[36] = d),
            (m[37] = p),
            (m[38] = u),
            (m[39] = h))
          : (h = m[39]),
        h
      )
    }
    function ah(e) {
      return e.connector.id
    }
    function am(e) {
      return e.connector.id
    }
    function ag(e) {
      return e.connector.name
    }
    function af(e) {
      return e.connector.id
    }
    function a_(e) {
      return {
        id: e.connector.id,
        name: e.connector.name,
        logoUrl: e.connector.logo_url ?? null,
        logoUrlDark: e.connector.logo_url_dark ?? null,
        connected: e.connected,
        teammateCount: e.teammateCount,
      }
    }
    function ab(e) {
      return e.connector.id
    }
    function ay(e) {
      return e.connector.id
    }
    function ax(e) {
      return e.connector.id
    }
    function aC(e, t) {
      return t.teammateCount - e.teammateCount
    }
    function aw(e, t) {
      return Number(t.connected) - Number(e.connected) || t.teammateCount - e.teammateCount
    }
    function av(e) {
      return !e.connected
    }
    function ak(e) {
      let t,
        n,
        r,
        s,
        c,
        d,
        p,
        u,
        h,
        m = (0, o.c)(15),
        { onDownload: f, onContinue: _ } = e,
        b = (0, i.gh)(y.u),
        x = "https://chatgpt.com/download/"
      return (
        /Mac/.test(navigator.platform)
          ? (x = "https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg")
          : /Win/.test(navigator.platform) && (x = "https://apps.microsoft.com/detail/9nt1r1c2hh7j"),
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.approved_by_admin",
                defaultMessage: "Approved by your admin",
                description: "Badge on the desktop app recommendation in business workspace onboarding",
              }),
            })),
            (m[0] = t))
          : (t = m[0]),
        m[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("h1", {
              className: "text-heading-lg font-semibold",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.title",
                defaultMessage: "Download the ChatGPT Desktop app",
                description: "Headline of the desktop app recommendation in workspace onboarding",
              }),
            })),
            (m[1] = n))
          : (n = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("p", {
              className: "text-base text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.description",
                defaultMessage:
                  "Use Chat and Codex side by side on your desktop to turn team ideas into docs, spreadsheets, presentations, and code",
                description: "Explains the benefits of the ChatGPT desktop app during workspace onboarding",
              }),
            })),
            (m[2] = r))
          : (r = m[2]),
        m[3] !== f || m[4] !== b
          ? ((s = () => {
              ;((0, e$.M)(b), f())
            }),
            (m[3] = f),
            (m[4] = b),
            (m[5] = s))
          : (s = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.download_desktop_app",
              defaultMessage: "Download desktop app",
              description: "Download action in workspace onboarding",
            })),
            (m[6] = c))
          : (c = m[6]),
        m[7] !== s
          ? ((d = (0, a.jsx)(tm.G, {
              href: x,
              openTarget: "external-browser",
              initiator: "open_in_browser_bridge",
              onClick: s,
              children: c,
            })),
            (m[7] = s),
            (m[8] = d))
          : (d = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.maybe_later",
              defaultMessage: "Maybe later",
              description: "Skips the desktop app recommendation and continues onboarding",
            })),
            (m[9] = p))
          : (p = m[9]),
        m[10] !== _
          ? ((u = (0, a.jsx)(g.$, { color: "ghostActive", size: "beaconAction", onClick: _, children: p })),
            (m[10] = _),
            (m[11] = u))
          : (u = m[11]),
        m[12] !== d || m[13] !== u
          ? ((h = (0, a.jsxs)("div", {
              className: "flex w-full max-w-lg flex-col gap-6 text-center",
              children: [t, n, r, d, u],
            })),
            (m[12] = d),
            (m[13] = u),
            (m[14] = h))
          : (h = m[14]),
        h
      )
    }
    let aA = (0, to.YK)({
        it_technology_leader: {
          id: "edu.onboarding.role.it_technology_leader",
          defaultMessage: "IT/Technology Leader",
          description:
            "Role option on the ChatGPT for Education onboarding screen for a higher-education information-technology or technology leader. Selecting it tailors onboarding and education updates.",
        },
        academic_administrator: {
          id: "edu.onboarding.role.academic_administrator",
          defaultMessage: "Academic Administrator",
          description:
            "Role option on the ChatGPT for Education onboarding screen for a higher-education academic administrator. Selecting it tailors onboarding and education updates.",
        },
        faculty_professor: {
          id: "edu.onboarding.role.faculty_professor",
          defaultMessage: "Faculty / Educator",
          description:
            "Role option on the ChatGPT for Education onboarding screen for a higher-education faculty member or educator. Selecting it tailors onboarding and education updates.",
        },
        researcher: {
          id: "edu.onboarding.role.researcher",
          defaultMessage: "Researcher",
          description:
            "Role option on the ChatGPT for Education onboarding screen for a higher-education researcher. Selecting it tailors onboarding and education updates.",
        },
        campus_staff: {
          id: "edu.onboarding.role.campus_staff",
          defaultMessage: "Campus Staff",
          description:
            "Role option on the ChatGPT for Education onboarding screen for a higher-education campus staff member. Selecting it tailors onboarding and education updates.",
        },
        student: {
          id: "edu.onboarding.role.student",
          defaultMessage: "Student",
          description:
            "Role option on the ChatGPT for Education onboarding screen for a higher-education student. Selecting it tailors onboarding and education updates.",
        },
        other: {
          id: "edu.onboarding.role.other",
          defaultMessage: "Other",
          description:
            "Final role option on the ChatGPT for Education onboarding screen for a higher-education user whose role is not listed. Selecting it tailors onboarding and education updates.",
        },
      }),
      aS = [
        { id: "student", displayValue: aA.student },
        { id: "faculty_professor", displayValue: aA.faculty_professor },
        { id: "researcher", displayValue: aA.researcher },
        { id: "academic_administrator", displayValue: aA.academic_administrator },
        { id: "campus_staff", displayValue: aA.campus_staff },
        { id: "it_technology_leader", displayValue: aA.it_technology_leader },
        { id: "other", displayValue: aA.other },
      ],
      aj = {
        student: (0, a.jsx)(eu.L$D, {}),
        faculty_professor: (0, a.jsx)(eu._NU, {}),
        researcher: (0, a.jsx)(eu.sBI, {}),
        academic_administrator: (0, a.jsx)(eu.TGw, {}),
        campus_staff: (0, a.jsx)(e4, { className: "icon-base shrink-0", "aria-hidden": !0 }),
        it_technology_leader: (0, a.jsx)(eu.h3q, {}),
        other: (0, a.jsx)(ei.I, { asset: e0.O }),
      }
    function aN(e) {
      let t,
        n,
        i,
        r,
        s = (0, o.c)(7),
        { value: c, disabled: d, onSelect: p } = e,
        u = void 0 !== d && d
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "edu.onboarding.role.question",
                defaultMessage: "Which best describes your role?",
                description:
                  "Heading on the ChatGPT for Education onboarding role screen. It asks a newly added higher-education workspace member to choose the role that best describes them.",
              }),
            })),
            (s[0] = t))
          : (t = s[0]),
        s[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                t,
                (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "edu.onboarding.role.helper",
                    defaultMessage: "This helps us tailor onboarding, examples, and education updates.",
                    description:
                      "Helper text below the role question on the ChatGPT for Education onboarding screen. It explains why a higher-education workspace member is asked to select a role.",
                  }),
                }),
              ],
            })),
            (s[1] = n))
          : (n = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = aS.map(aO)), (s[2] = i)) : (i = s[2]),
        s[3] !== u || s[4] !== p || s[5] !== c
          ? ((r = (0, a.jsx)(es.P, {
              className:
                "max-h-full min-h-0 justify-between self-center overflow-hidden max-sm:h-full max-sm:px-6 max-sm:pt-10 max-sm:pb-5 sm:max-w-175",
              children: (0, a.jsxs)("div", {
                className: "flex min-h-0 w-full flex-1 flex-col",
                children: [
                  n,
                  (0, a.jsx)(e2, { options: i, value: c, fullWidthOption: "other", disabled: u, onSelect: p }),
                ],
              }),
            })),
            (s[3] = u),
            (s[4] = p),
            (s[5] = c),
            (s[6] = r))
          : (r = s[6]),
        r
      )
    }
    function aO(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }), icon: aj[e.id] }
    }
    function aE(e) {
      let t,
        n,
        l,
        c,
        d,
        p,
        u,
        h,
        m,
        g,
        f,
        _,
        b,
        x = (0, o.c)(65),
        { identity: C, planType: v, resumeApps: A, onComplete: j } = e,
        O = (0, i.gh)(y.u),
        E = (0, s.A)()
      x[0] !== v ? ((t = (0, w.V$)(v)), (x[0] = v), (x[1] = t)) : (t = x[1])
      let M = t,
        [P, T] = (0, r.useState)(A ? "apps" : "role"),
        [I, D] = (0, r.useState)(""),
        [L, G] = (0, r.useState)(!1),
        [H, F] = (0, r.useState)(!1),
        W = (0, r.useRef)(null),
        B = (0, r.useRef)(!1),
        U = (0, r.useRef)(null),
        K = (0, r.useRef)(!1),
        q = (0, r.useRef)(!1),
        V = (0, r.useRef)(aR)
      x[2] !== M
        ? ((n = () =>
            M
              ? aS
              : [
                  ...e1()(Object.entries(e3.V).filter(aI)).map(aT),
                  { id: "something_else", displayValue: e3.V.something_else },
                ]),
          (x[2] = M),
          (x[3] = n))
        : (n = x[3])
      let [$] = (0, r.useState)(n)
      ;(x[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => () => {
            ;(W.current?.abort(), U.current?.abort())
          }),
          (c = []),
          (x[4] = l),
          (x[5] = c))
        : ((l = x[4]), (c = x[5])),
        (0, r.useEffect)(l, c),
        x[6] !== M || x[7] !== I || x[8] !== O
          ? ((d = function (e, t) {
              let n = void 0 === t ? I : t
              ;(T(e),
                nK(O, M, e),
                "download" === e &&
                  (0, S.yy)(O, k.se, { role: n, isEngineering: "engineering" === n, isChatgptDesktopAppCopy: !0 }))
            }),
            (x[6] = M),
            (x[7] = I),
            (x[8] = O),
            (x[9] = d))
          : (d = x[9]))
      let z = d
      x[10] !== M || x[11] !== C || x[12] !== O
        ? ((p = async function (e) {
            ;(e.throwIfAborted(), !q.current) &&
              ((0, S.yy)(O, k.HE, { productSurface: M ? "chatgpt_for_education" : void 0 }),
              nq(O, M, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED"),
              await (0, ti.de)(O, C, e).catch((t) => {
                if ("AbortError" === t.name) throw t
                e.throwIfAborted()
              }),
              e.throwIfAborted(),
              (q.current = !0),
              M && (0, N.Jl)(O, C))
          }),
          (x[10] = M),
          (x[11] = C),
          (x[12] = O),
          (x[13] = p))
        : (p = x[13])
      let Z = p
      x[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = async function (e) {
            if (K.current) return
            let t = new AbortController()
            ;((W.current = t),
              (K.current = !0),
              (V.current = e),
              G(!0),
              F(!1),
              await e(t.signal)
                .catch(() => {
                  t.signal.aborted || F(!0)
                })
                .finally(() => {
                  ;((K.current = !1), t.signal.aborted || G(!1))
                }))
          }),
          (x[14] = u))
        : (u = x[14])
      let Y = u
      x[15] !== z || x[16] !== M || x[17] !== C || x[18] !== E || x[19] !== v || x[20] !== $ || x[21] !== O
        ? ((h = function (e) {
            ;(D(e),
              (0, S.yy)(O, k.R5, { role: e, productSurface: M ? "chatgpt_for_education" : void 0 }),
              Y(async (t) => {
                let n = $.find((t) => t.id === e)
                ;(await (0, ti.Qm)(
                  O,
                  C,
                  {
                    role: e,
                    departments: [],
                    role_label: M && n ? E.formatMessage(n.displayValue) : void 0,
                    role_product_surface: M ? "chatgpt_for_education" : void 0,
                    role_updated_at: M ? new Date().toISOString() : void 0,
                  },
                  null,
                  t,
                ),
                  t.throwIfAborted(),
                  z("apps", e))
              }))
          }),
          (x[15] = z),
          (x[16] = M),
          (x[17] = C),
          (x[18] = E),
          (x[19] = v),
          (x[20] = $),
          (x[21] = O),
          (x[22] = h))
        : (h = x[22])
      let Q = h
      if ("role" === P) {
        let e
        ;(x[23] !== L || x[24] !== M || x[25] !== I || x[26] !== $ || x[27] !== Q
          ? ((e = M
              ? (0, a.jsx)(aN, { value: I, disabled: L, onSelect: Q }, "role")
              : (0, a.jsx)(t$, { value: I, options: $.map(aP), disabled: L, onSelect: Q })),
            (x[23] = L),
            (x[24] = M),
            (x[25] = I),
            (x[26] = $),
            (x[27] = Q),
            (x[28] = e))
          : (e = x[28]),
          (m = e))
      } else if ("download" === P) {
        let e, t, n
        ;(x[29] !== z || x[30] !== I || x[31] !== O
          ? ((e = () => {
              ;((0, S.yy)(O, k.tx, { role: I, isEngineering: "engineering" === I, isChatgptDesktopAppCopy: !0 }),
                z("apps"))
            }),
            (x[29] = z),
            (x[30] = I),
            (x[31] = O),
            (x[32] = e))
          : (e = x[32]),
          x[33] !== z ? ((t = () => z("apps")), (x[33] = z), (x[34] = t)) : (t = x[34]),
          x[35] !== t || x[36] !== e
            ? ((n = (0, a.jsx)(ak, { onDownload: e, onContinue: t })), (x[35] = t), (x[36] = e), (x[37] = n))
            : (n = x[37]),
          (m = n))
      } else {
        let e, t, n
        ;(x[38] !== Z
          ? ((e = async () => {
              let e = new AbortController()
              ;((W.current = e), await Z(e.signal))
            }),
            (x[38] = Z),
            (x[39] = e))
          : (e = x[39]),
          x[40] !== Z || x[41] !== j
            ? ((t = () =>
                void Y(async (e) => {
                  ;(await Z(e), j())
                })),
              (x[40] = Z),
              (x[41] = j),
              (x[42] = t))
            : (t = x[42]),
          x[43] !== L || x[44] !== C || x[45] !== v || x[46] !== t || x[47] !== e
            ? ((n = (0, a.jsx)(ap, { identity: C, planType: v, busy: L, beforeOAuth: e, onFinish: t }, "apps")),
              (x[43] = L),
              (x[44] = C),
              (x[45] = v),
              (x[46] = t),
              (x[47] = e),
              (x[48] = n))
            : (n = x[48]),
          (m = n))
      }
      let X = M ? "education" : "default"
      return (
        x[49] === Symbol.for("react.memo_cache_sentinel") ? ((g = () => void Y(V.current)), (x[49] = g)) : (g = x[49]),
        x[50] !== M || x[51] !== C || x[52] !== v || x[53] !== O || x[54] !== P
          ? ((f = () => {
              if (!B.current && ((B.current = !0), nK(O, M, P), !M)) {
                let e = new AbortController()
                ;((U.current = e),
                  O.query
                    .snapshot(n3, C)
                    .fetch()
                    .then((t) => {
                      let n = (0, nW.o)(v)
                      !e.signal.aborted &&
                        (n || "team" === v || "self_serve_business_prolite" === v) &&
                        (0, S.yy)(O, R.CI, {
                          connectorProvider: t.provider ?? "none",
                          hasRecommendation: null != t.provider,
                          isEnterprise: n,
                          requestSucceeded: t.requestSucceeded,
                          onboardingExperience: nB,
                        })
                    })
                    .catch(aM))
              }
            }),
            (x[50] = M),
            (x[51] = C),
            (x[52] = v),
            (x[53] = O),
            (x[54] = P),
            (x[55] = f))
          : (f = x[55]),
        x[56] !== m || x[57] !== M
          ? ((_ = M ? (0, a.jsx)(tu.N, { mode: "wait", children: m }) : m), (x[56] = m), (x[57] = M), (x[58] = _))
          : (_ = x[58]),
        x[59] !== L || x[60] !== H || x[61] !== f || x[62] !== _ || x[63] !== X
          ? ((b = (0, a.jsx)(nu, { layout: X, busy: L, error: H, onRetry: g, onShown: f, children: _ })),
            (x[59] = L),
            (x[60] = H),
            (x[61] = f),
            (x[62] = _),
            (x[63] = X),
            (x[64] = b))
          : (b = x[64]),
        b
      )
    }
    function aM() {}
    function aP(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }) }
    }
    function aT(e) {
      let [t, n] = e
      return { id: t, displayValue: n }
    }
    function aI(e) {
      let [t] = e
      return "student" !== t && "something_else" !== t
    }
    async function aR() {}
    let aD = (0, _._)(async () => (await n.e(229160).then(n.bind(n, "slvF"))).WorkspaceJoinerOnboardingFlow, {
      fallback: (0, a.jsx)(b.LoadingPage, { delay: !1 }),
    })
    function aL(e) {
      var t, n
      let r,
        _,
        k,
        A,
        S,
        j,
        O,
        E,
        M,
        T = (0, o.c)(81),
        { fallback: I } = e,
        R = (0, i.gh)(y.u),
        { accountId: D, userId: L, authMethod: G, isLoading: H } = (0, p.As)()
      T[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = { enabled: !1 }), (T[0] = r)) : (r = T[0])
      let F = (0, i._U)(u.f, D, r),
        W = (0, i.Ul)(d.m0),
        B = (0, i.Ul)(d.chatGptAuthenticatedAccountId$),
        U = (0, i.Ul)(d.chatGptAuthenticatedUserId$),
        K = (0, c.Zp)(),
        q = (0, c.zy)(),
        V = (0, s.A)(),
        [$] = (0, c.ok)(),
        z = (0, i.Ul)(h.Sk),
        Z = (0, i._U)(x.JW, "4100765009"),
        Y = (0, i._U)(x.JW, "3011809797")
      if (H) {
        let e
        return (
          T[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (T[1] = e))
            : (e = T[1]),
          e
        )
      }
      if ("chatgpt" !== G || "debugOverride" in W) return I
      if ("loading" === W.status || (null != D && F.isPending)) {
        let e
        return (
          T[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (T[2] = e))
            : (e = T[2]),
          e
        )
      }
      T[3] !== D || T[4] !== F
        ? ((_ = null != D && F.isSuccess && F.data.account_ordering.includes(D) ? F.data.accounts[D] : void 0),
          (T[3] = D),
          (T[4] = F),
          (T[5] = _))
        : (_ = T[5])
      let Q = _,
        X = Q?.account
      if (
        null == D ||
        null == L ||
        ("denied" === W.status && ("unsupported-plan" !== W.reason || !(0, nH.jU)(Q))) ||
        X?.account_id !== D ||
        null == X.account_user_id ||
        null == X.account_user_role ||
        null == X.structure ||
        null == X.plan_type ||
        X.is_deactivated ||
        Q?.can_access_with_session === !1
      ) {
        let e, t
        return (
          T[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "onboarding.accountUnavailable",
                defaultMessage: "Unable to load your workspace",
                description: "Error when the active workspace cannot be loaded for onboarding",
              })),
              (T[6] = e))
            : (e = T[6]),
          T[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(f.A, {
                layout: "page",
                title: e,
                actions: (0, a.jsx)(g.$, {
                  onClick: aG,
                  children: (0, a.jsx)(l.A, {
                    id: "onboarding.retryAccount",
                    defaultMessage: "Try again",
                    description: "Reload the page to retry loading the active workspace and identity for onboarding",
                  }),
                }),
              })),
              (T[7] = t))
            : (t = T[7]),
          t
        )
      }
      if (("allowed" === W.status && W.accountId !== D) || B !== D || U !== L || z !== D) {
        let e
        return (
          T[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (T[8] = e))
            : (e = T[8]),
          e
        )
      }
      T[9] !== D || T[10] !== L
        ? ((k = { accountId: D, userId: L }), (T[9] = D), (T[10] = L), (T[11] = k))
        : (k = T[11])
      let J = k
      T[12] !== X.plan_type
        ? ((A = (0, w.Hw)(X.plan_type) && !/iPad|iPhone|iPod|Android|Tablet/.test((0, C.$)())),
          (T[12] = X.plan_type),
          (T[13] = A))
        : (A = T[13])
      let ee = A,
        et = `${D}:${L}`
      T[14] !== X.plan_type || T[15] !== J || T[16] !== ee || T[17] !== et
        ? ((S = (0, a.jsx)(tn, { identity: J, planType: X.plan_type, showDesktopDownload: ee }, et)),
          (T[14] = X.plan_type),
          (T[15] = J),
          (T[16] = ee),
          (T[17] = et),
          (T[18] = S))
        : (S = T[18])
      let en = S
      T[19] !== X || T[20] !== Y || T[21] !== Z
        ? ((t = { k12: Z, health: Y }),
          (j =
            "workspace" !== X.structure
              ? "personal"
              : "k12" === X.plan_type || t.k12
                ? "k12"
                : X.is_fedramp_compliant_workspace
                  ? null
                  : "hc" === X.plan_type || "hc_consumption" === X.plan_type || "quorum" === X.plan_type || t.health
                    ? "health"
                    : "workspace"),
          (T[19] = X),
          (T[20] = Y),
          (T[21] = Z),
          (T[22] = j))
        : (j = T[22])
      let ea = j
      if (
        "health" !== ea &&
        ((n = navigator),
        ((/iPad|iPhone|iPod/.test(n.userAgent) || ("MacIntel" === n.platform && n.maxTouchPoints > 1)) &&
          "ios" === $.get("from_webview")) ||
          ["promoCode", "referralCode", "partnerActivationToken"].some((e) => $.has(e)))
      ) {
        let e,
          t = `?${$}`
        return (
          T[23] !== t
            ? ((e = (0, a.jsx)(c.C5, { to: { pathname: "/", search: t }, replace: !0 })), (T[23] = t), (T[24] = e))
            : (e = T[24]),
          e
        )
      }
      T[25] !== q.state ? ((O = nG.safeParse(q.state)), (T[25] = q.state), (T[26] = O)) : (O = T[26])
      let eo = O,
        ei = eo.success ? eo.data.workspaceOnboardingResume : null,
        er = "workspace" === ea && ei?.accountId === D && ei.userId === L
      if (er && ei.complete) {
        let e
        return (
          T[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.C5, { to: "/", replace: !0 })), (T[27] = e))
            : (e = T[27]),
          e
        )
      }
      let es = `${D}:${L}:${ea}:${er ? q.key : ""}`
      T[28] !== q.search || T[29] !== K || T[30] !== $
        ? ((E = () => {
            K({ pathname: "/", search: "submit" === $.get(m.Wh) ? q.search : "" }, { replace: !0 })
          }),
          (T[28] = q.search),
          (T[29] = K),
          (T[30] = $),
          (T[31] = E))
        : (E = T[31])
      let el = E
      T[32] !== X.name || T[33] !== V
        ? ((M =
            X.name ??
            V.formatMessage({
              id: "onboarding.workspaceNameFallback",
              defaultMessage: "your workspace",
              description: "Workspace name used in onboarding when the account has no display name",
            })),
          (T[32] = X.name),
          (T[33] = V),
          (T[34] = M))
        : (M = T[34])
      let ec = M
      switch (ea) {
        case "personal": {
          let e
          return (
            T[35] !== J || T[36] !== es || T[37] !== el
              ? ((e = (0, a.jsx)(nL, { identity: J, onComplete: el }, es)),
                (T[35] = J),
                (T[36] = es),
                (T[37] = el),
                (T[38] = e))
              : (e = T[38]),
            e
          )
        }
        case "k12": {
          let e, t
          return (
            T[39] !== J || T[40] !== el || T[41] !== R
              ? ((e = () => {
                  ;((0, N.Jl)(R, J), el())
                }),
                (T[39] = J),
                (T[40] = el),
                (T[41] = R),
                (T[42] = e))
              : (e = T[42]),
            T[43] !== J || T[44] !== es || T[45] !== e || T[46] !== ec
              ? ((t = (0, a.jsx)(nP, { identity: J, workspaceName: ec, onComplete: e }, es)),
                (T[43] = J),
                (T[44] = es),
                (T[45] = e),
                (T[46] = ec),
                (T[47] = t))
              : (t = T[47]),
            t
          )
        }
        case "health": {
          let e,
            t,
            n = "quorum" === X.plan_type
          return (
            T[48] !== K
              ? ((e = () => {
                  !(0, v.Sv)({ type: "enterprise_onboarding_complete", reason: "completed" }) && K("/", { replace: !0 })
                }),
                (T[48] = K),
                (T[49] = e))
              : (e = T[49]),
            T[50] !== J || T[51] !== es || T[52] !== n || T[53] !== e || T[54] !== ec
              ? ((t = (0, a.jsx)(na, { identity: J, workspaceName: ec, isQuorum: n, onComplete: e }, es)),
                (T[50] = J),
                (T[51] = es),
                (T[52] = n),
                (T[53] = e),
                (T[54] = ec),
                (T[55] = t))
              : (t = T[55]),
            t
          )
        }
        case "workspace": {
          let e, t, n, o
          T[56] !== X.plan_type || T[57] !== J || T[58] !== er || T[59] !== es || T[60] !== el
            ? ((e = (0, a.jsx)(aE, { identity: J, planType: X.plan_type, resumeApps: er, onComplete: el }, es)),
              (T[56] = X.plan_type),
              (T[57] = J),
              (T[58] = er),
              (T[59] = es),
              (T[60] = el),
              (T[61] = e))
            : (e = T[61])
          let i = e
          if (er) return i
          T[62] !== $ ? ((t = $.get("via")), (T[62] = $), (T[63] = t)) : (t = T[63])
          let r = "invite" === t
          return (
            T[64] !== X.account_user_role ||
            T[65] !== X.plan_type ||
            T[66] !== X.profile_picture_url ||
            T[67] !== J ||
            T[68] !== q.state ||
            T[69] !== en ||
            T[70] !== ee ||
            T[71] !== r ||
            T[72] !== ec
              ? ((n =
                  (0, w.Hw)(X.plan_type) && "account-owner" !== X.account_user_role && !P(J, q.state)
                    ? (0, a.jsx)(nF, {
                        currentFlow: en,
                        joinerFlow: (0, a.jsx)(aD, {
                          invitePreviewAccepted: r,
                          identity: J,
                          planType: X.plan_type,
                          workspaceName: ec,
                          workspaceImageUrl: X.profile_picture_url ?? null,
                          showDesktopDownload: ee,
                        }),
                      })
                    : en),
                (T[64] = X.account_user_role),
                (T[65] = X.plan_type),
                (T[66] = X.profile_picture_url),
                (T[67] = J),
                (T[68] = q.state),
                (T[69] = en),
                (T[70] = ee),
                (T[71] = r),
                (T[72] = ec),
                (T[73] = n))
              : (n = T[73]),
            T[74] !== i || T[75] !== J || T[76] !== es || T[77] !== n || T[78] !== r
              ? ((o = (0, a.jsx)(aH, { identity: J, viaInvite: r, fallback: i, children: n }, es)),
                (T[74] = i),
                (T[75] = J),
                (T[76] = es),
                (T[77] = n),
                (T[78] = r),
                (T[79] = o))
              : (o = T[79]),
            o
          )
        }
        case null: {
          let e
          return (
            T[80] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.C5, { to: "/", replace: !0 })), (T[80] = e))
              : (e = T[80]),
            e
          )
        }
      }
    }
    function aG() {
      return window.location.reload()
    }
    function aH(e) {
      let t = (0, o.c)(7),
        { identity: n, viaInvite: s, children: l, fallback: d } = e,
        p = (0, i.Ul)(N.Lu),
        u = (0, i.Ul)(N.s6),
        h = (0, i.Ul)(N.Q$),
        m = (0, c.zy)(),
        [g, f] = (0, r.useState)(!1),
        _ = "member" === u || ("member" === p && P(n, m.state))
      if ((!g && _ && f(!0), (0, nH.s2)(m.pathname, m.search))) {
        let e
        return (
          t[0] !== m.search
            ? ((e = (0, a.jsx)(c.C5, { to: { pathname: "/", search: m.search }, replace: !0 })),
              (t[0] = m.search),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      if ("pending" === p || (!g && !_ && "pending" === u)) {
        let e
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      if (g && "member" !== p) {
        let e
        return (t[3] !== h ? ((e = (0, a.jsx)(c.C5, { to: h, replace: !0 })), (t[3] = h), (t[4] = e)) : (e = t[4]), e)
      }
      if (!g && !_) {
        if (s || P(n, m.state)) {
          let e
          return (t[5] !== h ? ((e = (0, a.jsx)(c.C5, { to: h, replace: !0 })), (t[5] = h), (t[6] = e)) : (e = t[6]), e)
        }
        return d
      }
      return l
    }
  },
  GFe9(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      engineering: {
        id: "work.onboarding.workArea.engineering",
        defaultMessage: "Engineering",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Engineering as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      data_science: {
        id: "work.onboarding.workArea.data_science",
        defaultMessage: "Data Science",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Data Science as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      product_management: {
        id: "work.onboarding.workArea.product_management",
        defaultMessage: "Product",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Product means product management; selecting it records that as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      design: {
        id: "work.onboarding.workArea.design",
        defaultMessage: "Design",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Design as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      marketing: {
        id: "work.onboarding.workArea.marketing",
        defaultMessage: "Marketing",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Marketing as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      sales: {
        id: "work.onboarding.workArea.sales",
        defaultMessage: "Sales",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Sales as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      finance: {
        id: "work.onboarding.workArea.finance",
        defaultMessage: "Finance",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Finance as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      operations: {
        id: "work.onboarding.workArea.operations",
        defaultMessage: "Operations",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Operations as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      people_hr: {
        id: "work.onboarding.workArea.people_hr",
        defaultMessage: "People & HR",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records People and Human Resources as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      legal: {
        id: "work.onboarding.workArea.legal",
        defaultMessage: "Legal",
        description:
          "Short role option label on the generic ChatGPT workspace onboarding screen. Selecting it records Legal as the user's primary work area. It appears alongside the other canonical workspace role options.",
      },
      student: {
        id: "work.onboarding.workArea.student",
        defaultMessage: "Student",
        description:
          "Short role option label shown only for higher-education workspaces on the generic ChatGPT workspace onboarding screen. Selecting it records Student as the user's primary role.",
      },
      something_else: {
        id: "work.onboarding.workArea.something_else",
        defaultMessage: "Something else",
        description:
          "Short final role option label on the generic ChatGPT workspace onboarding screen. Users select it when none of the listed canonical work areas describe their primary role.",
      },
    })
    n.d(t, {}, { V: a })
  },
  idGD(e, t, n) {
    var a = n("zTeN"),
      o = n("SPnB"),
      i = n("YJm0"),
      r = n("g2p6"),
      s = n("AGHv"),
      l = n("Zzm6"),
      c = n("OWtl"),
      d = n("OMIV"),
      p = n("vw1R"),
      u = n("UR81"),
      h = n("nM0x")
    let m = (0, a.bD)(
        c.u,
        (e) => {
          try {
            return "true" === sessionStorage.getItem(y(e))
          } catch {
            return !1
          }
        },
        { getServerSnapshot: () => !1 },
      ),
      g = (0, a.un)(c.u, ({ get: e }) => {
        let t = e(o.chatGptAuthenticatedAccountId$),
          n = null == t ? void 0 : e(i.f, t).data?.accounts?.[t]
        return (0, h.jU)(n) ? "/work" : "/"
      }),
      f = (0, a.un)(c.u, ({ get: e }) => {
        let t = e(o.m0)
        if ("loading" === t.status) return "pending"
        let n = e(o.chatGptAuthenticatedAccountId$)
        if (
          "debugOverride" in t ||
          null == n ||
          ("allowed" === t.status
            ? t.accountId !== n || "personal" === t.accountStructure
            : "unsupported-plan" !== t.reason) ||
          null == e(o.chatGptAuthenticatedUserId$)
        )
          return "ineligible"
        if (e(r.Sk) !== n) return "pending"
        let a = e(i.f, n)
        if (a.isPending) return "pending"
        let s = a.data?.accounts?.[n],
          l = s?.account
        return !a.isSuccess ||
          l?.account_id !== n ||
          "workspace" !== l.structure ||
          ("allowed" === t.status && l.plan_type !== t.plan) ||
          l.is_deactivated ||
          s?.can_access_with_session === !1 ||
          (("denied" === t.status ||
            s?.features?.includes("codex_only") ||
            "self_serve_business_usage_based" === l.plan_type) &&
            !(0, h.jU)(s))
          ? "ineligible"
          : l
      }),
      _ = (0, a.un)(c.u, ({ get: e }) => {
        let t = e(f)
        if ("string" == typeof t) return t
        let n = e(d.M9)
        return e(d.RS) || null == n
          ? "pending"
          : (function (e, t) {
              if ("k12" === e.plan_type || t("4100765009")) return "k12"
              let n = e.plan_type
              return "hc" !== n &&
                "hc_consumption" !== n &&
                "quorum" !== n &&
                !e.is_fedramp_compliant_workspace &&
                ((0, p.o)(n) || (0, u.Hw)(n))
                ? e.is_hipaa_compliant_workspace || ((0, p.o)(n) && t("1082878720")) || t("3011809797")
                  ? "ineligible"
                  : (0, u.V$)(n)
                    ? "education"
                    : t("3887633174")
                      ? "member"
                      : "ineligible"
                : "ineligible"
            })(t, (t) => (e(d.JW, t), n.checkGate(t)))
      }),
      b = (0, a.un)(c.u, ({ get: e }) => {
        let t = e(f)
        if ("string" == typeof t) return t
        let n = e(o.chatGptAuthenticatedAccountId$),
          a = e(o.chatGptAuthenticatedUserId$)
        if (null == n || null == a || e(m, { accountId: n, userId: a })) return "ineligible"
        let i = e(r.s6)
        return i.isPending
          ? "pending"
          : i.isSuccess && i.data?.eligibleAnnouncements?.includes(l.eu) === !0
            ? e(_)
            : "ineligible"
      })
    function y(e) {
      return `workspace-onboarding-dismissed:${JSON.stringify([e.accountId, e.userId])}`
    }
    n.d(
      t,
      {},
      {
        Cr: m,
        Jl: function (e, t) {
          e.set(m, t, !0)
          try {
            sessionStorage.setItem(y(t), "true")
          } catch {}
        },
        Lu: _,
        Q$: g,
        oA: function (e, t) {
          if ((0, s.isCurrentIdentity)(e, t)) return !0
          let n = e.get(f)
          return (
            "string" != typeof n && n.account_id === t.accountId && e.get(o.chatGptAuthenticatedUserId$) === t.userId
          )
        },
        s6: b,
      },
    )
  },
  Zzm6(e, t, n) {
    var a = n("zTeN"),
      o = n("SPnB"),
      i = n("Ghh3"),
      r = n("GTpx"),
      s = n("g2p6"),
      l = n("OWtl"),
      c = n("rvFo")
    let d = "oai/apps/hasSeenOnboarding",
      p = (0, a.vU)(l.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["health-onboarding-info", e, t],
        queryFn: ({ signal: n }) =>
          i.Request.safeGet("/accounts/{account_id}/users/{user_id}/onboarding_information", {
            parameters: { path: { account_id: e, user_id: t } },
            additionalHeaders: { "ChatGPT-Account-ID": e },
            signal: n,
          }),
        retry: !1,
        staleTime: c.D.ONE_MINUTE,
      }))
    async function u(e, t, n, a, o) {
      let s = new AbortController(),
        l = o ? AbortSignal.any([o, s.signal]) : s.signal,
        c = h(e, t, s),
        d = e.query.snapshot(p, t)
      try {
        ;(l.throwIfAborted(),
          await d.cancel(),
          l.throwIfAborted(),
          await i.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
            parameters: { path: { account_id: t.accountId, user_id: t.userId } },
            requestBody: { onboarding_information: n },
            additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
            signal: l,
          }),
          l.throwIfAborted(),
          null != a &&
            (await i.Request.safePatch("/user_system_messages", {
              requestBody: a,
              additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
              signal: l,
            }),
            l.throwIfAborted()),
          await d.cancel(),
          l.throwIfAborted(),
          d.setData(n),
          await Promise.all([
            e.queryClient.invalidateQueries({ queryKey: ["quorum-starter-prompts", t.accountId, t.userId] }),
            e.queryClient.invalidateQueries({ queryKey: (0, r.Pm)(t) }),
          ]),
          l.throwIfAborted())
      } finally {
        c()
      }
    }
    function h(e, t, n) {
      return e.watch((e) => {
        let a = e.get(o.m0)
        ;("allowed" !== a.status ||
          "debugOverride" in a ||
          a.accountId !== t.accountId ||
          e.get(o.chatGptAuthenticatedAccountId$) !== t.accountId ||
          e.get(o.chatGptAuthenticatedUserId$) !== t.userId) &&
          n.abort()
      })
    }
    n.d(
      t,
      {},
      {
        E$: p,
        Nf: function (e, t, n) {
          return u(e, t, { role: "", departments: [] }, { role_user_message: "", other_user_message: "" }, n)
        },
        Qm: u,
        RR: h,
        de: async function (e, t, n) {
          let a = new AbortController(),
            o = n ? AbortSignal.any([n, a.signal]) : a.signal,
            r = h(e, t, a)
          try {
            if ((o.throwIfAborted(), e.get(s.Sk) !== t.accountId))
              throw new DOMException("Workspace settings changed", "AbortError")
            let n = e.query.snapshot(s.s6)
            if (
              (await i.Request.safePost("/settings/announcement_viewed", {
                parameters: { query: { announcement_id: d } },
                additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                signal: o,
              }),
              o.throwIfAborted(),
              e.get(s.Sk) !== t.accountId)
            )
              throw new DOMException("Workspace settings changed", "AbortError")
            ;(await n.cancel(),
              o.throwIfAborted(),
              n.setData((e) =>
                null == e ? e : { ...e, eligibleAnnouncements: e.eligibleAnnouncements?.filter((e) => e !== d) },
              ))
          } finally {
            r()
          }
        },
        eu: d,
      },
    )
  },
  jE6S(e, t, n) {
    let a = [
      "allergy_immunology",
      "anesthesiology",
      "cardiology",
      "critical_care",
      "dermatology",
      "emergency_medicine",
      "endocrinology",
      "family_medicine_primary_care",
      "geriatric_medicine",
      "gastroenterology",
      "general_surgery",
      "hematology",
      "infectious_disease",
      "internal_medicine",
      "interventional_radiology",
      "oral_maxillofacial_surgery",
      "medical_genetics_genomics",
      "oncology_hematology",
      "nuclear_medicine",
      "nephrology",
      "neurology",
      "neurosurgery",
      "obstetrics_gynecology",
      "occupational_environmental_medicine",
      "osteopathic_neuromusculoskeletal_medicine",
      "ophthalmology",
      "orthopedic_surgery",
      "otolaryngology",
      "pathology_laboratory_medicine",
      "pediatrics",
      "physical_medicine_rehabilitation",
      "plastic_surgery",
      "pulmonology",
      "preventive_medicine",
      "psychiatry_behavioral_health",
      "radiology_imaging",
      "rheumatology",
      "radiation_oncology",
      "thoracic_surgery",
      "urology",
      "vascular_surgery",
    ]
    n.d(
      t,
      {},
      {
        O: {
          physician: a,
          np_pa: a,
          registered_nurse: [
            "bedside_rn",
            "icu_rn",
            "outpatient_clinic_rn",
            "nurse_manager_charge_nurse",
            "clinical_nurse_specialist",
            "case_management_care_coordination",
          ],
          allied_health_professional: [
            "physical_therapist",
            "occupational_therapist",
            "speech_language_pathologist",
            "respiratory_therapist_role",
            "pharmacist_role",
            "psychologist",
            "dietitian",
            "social_worker",
            "medical_assistant",
            "imaging_radiology_tech",
            "lab_path_tech",
            "cardiac_neuro_tech",
          ],
          student: [
            "undergraduate_student",
            "medical_student",
            "np_pa_student",
            "nursing_student",
            "allied_health_student",
            "graduate_student",
          ],
        },
      },
    )
  },
  GO1D(e, t, n) {
    var a = n("BhZP"),
      o = n("yqKZ"),
      i = n("RF9q"),
      r = n("c3f5")
    function s({ content: e, metadata: t, preserveEmptySections: n = !1 }) {
      if (t?.[a.uV] === !0) return (0, a.I$)(t).map((e) => ({ content: e.content, id: e.id, tone: e.label }))
      let i = (0, o.b_)({ content: e, metadata: t, preserveEmptySections: n }),
        r = (0, o.b_)({ content: "", metadata: t })
      return null == i || null == r
        ? i
        : i.map((e, t) => {
            let n = r[t]
            return null == n || n.tone !== e.tone || n.id === e.id ? e : { ...e, id: n.id }
          })
    }
    n.d(
      t,
      {},
      {
        He: function (e) {
          return (0, i.oz)(e)
        },
        IA: s,
        Is: function ({ attributes: e, isStreaming: t, rawText: n }) {
          let a = (n ?? "").replace(/^\r?\n/, "").replace(/\r?\n$/, ""),
            o = (0, i.q4)((0, r.B)(e, "metadata")),
            l = s({ content: a, metadata: o, preserveEmptySections: !t })
          return {
            bodyContent: a,
            content: l?.[0]?.content ?? a,
            emailMetadata: {
              bcc: (0, r.B)(e, "bcc"),
              cc: (0, r.B)(e, "cc"),
              recipient: (0, r.B)(e, "recipient"),
              subject: (0, r.B)(e, "subject"),
            },
            id: (0, r.B)(e, "id"),
            metadata: o,
            title: (0, r.B)(e, "title"),
            toneSections: l,
            variant: (0, r.B)(e, "variant"),
          }
        },
      },
    )
  },
  IQg5(e, t, n) {
    var a = n("ABep"),
      o = n("QosV"),
      i = n("zTAs"),
      r = n("op0E"),
      s = n("GO1D")
    n.d(
      t,
      {},
      {
        WritingBlockDirectiveRenderer: function (e) {
          let t,
            n,
            l,
            c,
            d,
            p,
            u,
            h,
            m,
            g,
            f,
            _,
            b = (0, o.c)(29),
            {
              attributes: y,
              contentReferences: x,
              isStreaming: C,
              rawText: w,
              renderExtension: v,
              renderPersisted: k,
              testId: A,
            } = e
          if (b[0] !== y || b[1] !== x || b[2] !== C || b[3] !== w || b[4] !== v || b[5] !== k || b[6] !== A) {
            f = Symbol.for("react.early_return_sentinel")
            e: {
              n = (0, s.Is)({ attributes: y, isStreaming: C, rawText: w })
              let e = k?.(n)
              if (null != e) {
                f = (0, a.jsx)(a.Fragment, { children: e })
                break e
              }
              ;((t = r.i),
                (l = (0, i.Io)(n.content, { contentReferences: x, isStreaming: C })),
                (c = void 0),
                (d = n.emailMetadata),
                (p = !1),
                (u = v?.(n)),
                (h = A),
                (m = n.title),
                (g =
                  n.toneSections?.map((e) => ({
                    ...e,
                    content: (0, i.Io)(e.content, { contentReferences: x, isStreaming: C }),
                  })) ?? null))
            }
            ;((b[0] = y),
              (b[1] = x),
              (b[2] = C),
              (b[3] = w),
              (b[4] = v),
              (b[5] = k),
              (b[6] = A),
              (b[7] = t),
              (b[8] = n),
              (b[9] = l),
              (b[10] = c),
              (b[11] = d),
              (b[12] = p),
              (b[13] = u),
              (b[14] = h),
              (b[15] = m),
              (b[16] = g),
              (b[17] = f))
          } else
            ((t = b[7]),
              (n = b[8]),
              (l = b[9]),
              (c = b[10]),
              (d = b[11]),
              (p = b[12]),
              (u = b[13]),
              (h = b[14]),
              (m = b[15]),
              (g = b[16]),
              (f = b[17]))
          return f !== Symbol.for("react.early_return_sentinel")
            ? f
            : (b[18] !== t ||
              b[19] !== n.variant ||
              b[20] !== l ||
              b[21] !== c ||
              b[22] !== d ||
              b[23] !== p ||
              b[24] !== u ||
              b[25] !== h ||
              b[26] !== m ||
              b[27] !== g
                ? ((_ = (0, a.jsx)(t, {
                    content: l,
                    editorKey: c,
                    emailMetadata: d,
                    isEditable: p,
                    render: u,
                    testId: h,
                    title: m,
                    toneSections: g,
                    variant: n.variant,
                  })),
                  (b[18] = t),
                  (b[19] = n.variant),
                  (b[20] = l),
                  (b[21] = c),
                  (b[22] = d),
                  (b[23] = p),
                  (b[24] = u),
                  (b[25] = h),
                  (b[26] = m),
                  (b[27] = g),
                  (b[28] = _))
                : (_ = b[28]),
              _)
        },
      },
    )
  },
  ZRcE(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "shield-checkmark-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.145996, y: 1.142578, width: 11.708008, height: 14.041992 },
        visualBounds: { x: 2.145996, y: 1.142578, width: 11.708008, height: 14.041992 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.145996, y: 1.142578, width: 11.708008, height: 14.041992 },
        center: { x: 8, y: 8.163574 },
        insets: { top: 1.142578, right: 2.145996, bottom: 0.81543, left: 2.145996 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8.163574 }, foreground: { x: 8, y: 8.163574 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.0767 5.80606C10.238 5.56537 10.5644 5.50044 10.8052 5.66152C11.0454 5.823 11.1107 6.14942 10.9497 6.39004L8.23682 10.4359C7.95882 10.8501 7.36738 10.897 7.02686 10.5326L5.604 9.0082C5.40628 8.79627 5.41761 8.46384 5.62939 8.26602C5.84136 8.06826 6.17377 8.07953 6.37158 8.29141L7.55713 9.56289L10.0767 5.80606Z" fill="currentColor"/> <path d="M7.25635 1.29824C7.73102 1.09073 8.27195 1.09065 8.74658 1.29824L12.7407 3.04531C13.4169 3.34123 13.8538 4.0104 13.854 4.74844V8.54531C13.854 10.3472 13.2194 11.7543 12.2017 12.8324C11.1956 13.8979 9.83539 14.6215 8.40381 15.1205L8.3999 15.1215C8.14437 15.2081 7.86737 15.205 7.61377 15.1137C6.17865 14.6181 4.81377 13.8979 3.8042 12.8334C2.7829 11.7564 2.146 10.349 2.146 8.54531V4.74844C2.14618 4.01019 2.58382 3.34111 3.26025 3.04531L7.25635 1.29824ZM8.32568 2.26016C8.11928 2.16991 7.88366 2.16995 7.67725 2.26016L3.68115 4.0082C3.387 4.13683 3.19696 4.42742 3.19678 4.74844V8.54531C3.19678 10.0747 3.7268 11.2249 4.56689 12.1107C5.31242 12.8967 6.31877 13.4914 7.45947 13.9389L7.95654 14.1215L7.96826 14.1254C7.99869 14.1366 8.03226 14.1378 8.06299 14.1273C9.40268 13.6599 10.5897 13.0092 11.438 12.1107C12.2753 11.2237 12.8042 10.0739 12.8042 8.54531V4.74844C12.804 4.42754 12.6138 4.13593 12.3198 4.00723L8.32568 2.26016Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { i: a })
  },
  YMCe(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "soccerball-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.462158, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.462158, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.462158, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 7.987549, y: 8 },
        insets: { top: 1.474609, right: 1.487061, bottom: 1.47461, left: 1.462158 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.987549, y: 8 }, foreground: { x: 7.987549, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.98755 1.47461C11.591 1.47481 14.5129 4.39646 14.5129 8C14.5129 11.6035 11.591 14.5252 7.98755 14.5254C4.38389 14.5254 1.46216 11.6037 1.46216 8C1.46216 7.79582 1.47213 7.59392 1.49048 7.39453C1.49931 6.9963 1.56606 6.56899 1.72681 6.07422C1.79123 5.87597 1.8673 5.69431 1.94849 5.52539C2.78111 3.4959 4.60634 1.97986 6.82056 1.58008C7.12572 1.51289 7.4631 1.47463 7.85278 1.47461C7.87041 1.47461 7.88806 1.47637 7.90552 1.47656C7.93271 1.47623 7.96028 1.47461 7.98755 1.47461ZM6.37817 11.3428L7.04712 13.3916C7.35268 13.4445 7.66686 13.4746 7.98755 13.4746C8.29779 13.4746 8.60155 13.4461 8.89771 13.3965L9.5686 11.3418L8.99048 10.5459H6.95825L6.37817 11.3428ZM2.55786 8.69629C2.64879 9.41262 2.87793 10.0852 3.21802 10.6875L5.52856 10.7236L6.1106 9.92383L5.37036 7.80957L4.26587 7.45117L2.55786 8.69629ZM10.6799 7.75098L9.93091 10.0547L10.4153 10.7217L12.7571 10.6846C13.0852 10.1027 13.3099 9.45564 13.4065 8.7666L11.6018 7.45117L10.6799 7.75098ZM5.60571 3.06836C4.97197 3.37492 4.40651 3.80053 3.93774 4.31543L4.59497 6.45312L5.69751 6.81055L7.45337 5.54004V4.40723L5.60571 3.06836ZM8.50415 4.23145V5.53516L10.2717 6.77832L11.2727 6.45312L11.9553 4.23145C11.4708 3.72138 10.8899 3.30447 10.2405 3.01074L8.50415 4.23145Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { y: a })
  },
  hqLt(e, t, n) {
    let a = (0, n("nkTT").a)({
      name: "toolbox-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 1.834961, width: 14.663086, height: 16.330078 },
        visualBounds: { x: 2.668213, y: 1.834961, width: 14.663086, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 1.834961, width: 14.663086, height: 16.330078 },
        center: { x: 9.999756, y: 10 },
        insets: { top: 1.834961, right: 2.668701, bottom: 1.834961, left: 2.668213 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 9.999756, y: 10 }, foreground: { x: 9.999756, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.2502 11.419C11.6174 11.4191 11.9153 11.7168 11.9153 12.084C11.915 12.451 11.6172 12.7489 11.2502 12.7491H8.75025C8.38314 12.7491 8.08547 12.4511 8.08521 12.084C8.08521 11.7167 8.38298 11.419 8.75025 11.419H11.2502Z" fill="currentColor"/> <path d="M6.06079 2.86038C6.42939 1.75314 7.86661 1.47404 8.62329 2.36233L9.86255 3.81741C9.89425 3.85465 9.94061 3.87662 9.9895 3.87698L11.3665 3.88675L11.429 3.75003C11.561 3.45955 11.6727 3.21223 11.7786 3.01468C11.8873 2.81181 12.0103 2.62097 12.1809 2.45511C12.5888 2.05903 13.1368 1.83874 13.7053 1.8428C13.9435 1.84455 14.1641 1.8974 14.3831 1.96878C14.5962 2.03827 14.8483 2.13926 15.1448 2.25784C15.4692 2.3876 15.7446 2.49737 15.9631 2.60257C16.1864 2.71009 16.3975 2.8346 16.5793 3.0137C17.0109 3.43905 17.2441 4.02631 17.2229 4.63186C17.2139 4.88694 17.1462 5.12193 17.0579 5.35354C16.9715 5.58002 16.8477 5.84812 16.7014 6.16507L15.595 8.56155C15.7846 8.59439 15.9701 8.64683 16.1497 8.73831C16.5569 8.94588 16.8884 9.27732 17.0959 9.6846C17.2332 9.95416 17.285 10.2364 17.3088 10.5274C17.332 10.8109 17.3313 11.1583 17.3313 11.5674V13.7666C17.3313 14.409 17.3316 14.9311 17.2971 15.3535C17.262 15.7837 17.188 16.1694 17.0051 16.5283C16.7177 17.0925 16.2588 17.5514 15.6946 17.8389C15.3357 18.0218 14.95 18.0957 14.5198 18.1309C14.0973 18.1654 13.5752 18.1651 12.9329 18.1651H7.06665C6.42423 18.1651 5.90219 18.1654 5.47974 18.1309C5.04961 18.0957 4.66381 18.0218 4.30493 17.8389C3.74093 17.5515 3.28279 17.0924 2.99536 16.5283C2.81248 16.1694 2.73754 15.7838 2.70239 15.3535C2.66789 14.9311 2.66822 14.409 2.66822 13.7666V11.5674C2.66822 11.1583 2.66751 10.8109 2.69068 10.5274C2.71448 10.2363 2.76721 9.95424 2.90454 9.6846C3.11211 9.27723 3.44346 8.94588 3.85083 8.73831C3.91271 8.70679 3.97519 8.67956 4.03833 8.65628L3.27759 8.09573C2.33829 7.40292 2.51688 5.94983 3.59595 5.50491L5.36255 4.7764C5.40758 4.75776 5.4418 4.72006 5.45728 4.67386L6.06079 2.86038ZM5.73364 9.83206C5.30263 9.83206 5.01877 9.8329 4.802 9.85061C4.59344 9.86767 4.50542 9.8969 4.45435 9.92288C4.29723 10.0029 4.16917 10.131 4.08911 10.2881C4.06313 10.3392 4.03391 10.4272 4.01685 10.6358C3.99914 10.8525 3.99829 11.1364 3.99829 11.5674V13.7666C3.99829 14.4308 3.99855 14.8895 4.02759 15.2451C4.05602 15.5931 4.1085 15.7846 4.17993 15.9248C4.33989 16.2386 4.5956 16.4934 4.90943 16.6533C5.0496 16.7247 5.24033 16.7773 5.58814 16.8057C5.94386 16.8348 6.40229 16.835 7.06665 16.835H12.9329C13.5971 16.835 14.0557 16.8347 14.4114 16.8057C14.7593 16.7773 14.9509 16.7248 15.0911 16.6533C15.4047 16.4935 15.6597 16.2384 15.8196 15.9248C15.891 15.7846 15.9435 15.5931 15.9719 15.2451C16.001 14.8895 16.0012 14.4308 16.0012 13.7666V11.5674C16.0012 11.1364 16.0014 10.8525 15.9836 10.6358C15.9666 10.427 15.9364 10.3392 15.9104 10.2881C15.8304 10.1311 15.7031 10.0029 15.5461 9.92288C15.4951 9.89686 15.4065 9.86769 15.1975 9.85061C14.9808 9.83291 14.6977 9.83206 14.2668 9.83206H5.73364ZM7.6106 3.22464C7.52563 3.12521 7.36508 3.15632 7.32349 3.2803L6.71997 5.09378C6.58248 5.5069 6.27189 5.83989 5.86939 6.00589L4.10279 6.7344C3.9816 6.78437 3.96125 6.94755 4.06665 7.02542L5.60474 8.15921C5.73555 8.25567 5.84806 8.37195 5.9397 8.50198H10.9309L10.8801 8.34183C10.7487 7.92697 10.8036 7.47524 11.0315 7.10452L12.0334 5.47659C12.1017 5.36496 12.0218 5.22169 11.8909 5.22073L9.97974 5.20706C9.54446 5.20388 9.13206 5.01114 8.84986 4.67972L7.6106 3.22464ZM13.6956 3.17288C13.4764 3.17135 13.2649 3.25653 13.1077 3.40921C13.0754 3.44066 13.0288 3.49837 12.9514 3.64261C12.8861 3.76443 12.8126 3.91931 12.7131 4.13675C13.3497 4.55755 13.6161 5.44242 13.1663 6.17386L12.1653 7.80081C12.1397 7.84244 12.133 7.89386 12.1477 7.94046L12.3264 8.50198H14.1575L15.4934 5.60843C15.6474 5.27471 15.7492 5.05426 15.8157 4.87991C15.8801 4.71083 15.8922 4.63155 15.8938 4.58499C15.902 4.35149 15.8121 4.125 15.6458 3.96097C15.6126 3.92829 15.549 3.87932 15.386 3.80081C15.2179 3.7199 14.9927 3.62964 14.6516 3.49319C14.3389 3.36811 14.1332 3.28633 13.9709 3.23343C13.8146 3.18248 13.7406 3.17323 13.6956 3.17288Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { O: a })
  },
  Pq1H(e, t, n) {
    var a = n("irkb")
    n.d(
      t,
      {},
      {
        f: function (e, t) {
          let n = (0, a.jE)(t)
          n.getQueryState(e.queryKey) || n.prefetchQuery(e)
        },
      },
    )
  },
}
//# sourceMappingURL=353337.c400ab9481.js.map
