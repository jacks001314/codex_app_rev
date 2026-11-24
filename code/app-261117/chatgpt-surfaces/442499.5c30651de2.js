export const __rspack_esm_ids = [442499]
export const __webpack_modules__ = {
  vVGb(e, t, n) {
    var a = n("uAAd")
    function r(e) {
      let t = s(e)
      if (!t) return null
      let n = t.split(":"),
        r = n[0]
      if (!r) return null
      let i = n[1] ?? r,
        l = (0, a.DX)(r),
        c = (0, a.PD)(r),
        d = (0, a.DX)(i),
        u = (0, a.PD)(i),
        p = { startRow: Math.min(l, d), startCol: Math.min(c, u), endRow: Math.max(l, d), endCol: Math.max(c, u) }
      return { ref: o(p), bounds: p }
    }
    function o(e) {
      let t = i(e.startRow, e.startCol),
        n = i(e.endRow, e.endCol)
      return t === n ? t : `${t}:${n}`
    }
    function i(e, t) {
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
        $1: i,
        DO: r,
        Ol: function (e) {
          var t
          let n = e.startsWith("=") ? e.slice(1) : e,
            a = n.indexOf("!")
          if (-1 === a) {
            let e = r(n)
            return { ref: e?.ref ?? n }
          }
          let o = n.slice(0, a),
            i = n.slice(a + 1),
            s = r(i)
          return {
            sheetName:
              (t = o).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
            ref: s?.ref ?? i,
          }
        },
        Qh: s,
        ds: function (e) {
          return { rows: e.endRow - e.startRow + 1, cols: e.endCol - e.startCol + 1 }
        },
        ox: function (e, t) {
          return e.startRow <= t.endRow && e.endRow >= t.startRow && e.startCol <= t.endCol && e.endCol >= t.startCol
        },
        wP: o,
      },
    )
  },
  P0hF(e, t, n) {
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
  RqRN(e, t, n) {
    n.r(t)
    var a = n("vVGb")
    let r = "CSV import",
      o = /\\|\/|\?|\*|\[|\]|:/g
    function i(e) {
      return ((e ?? r).trim().replace(o, "").trim() || r).slice(0, 31)
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
            r = (0, a.Ol)(t?.anchor ?? "A1"),
            o = r.sheetName?.trim(),
            s = t?.sheetName?.trim()
          if (o && s && o !== s)
            throw Error(`CSV import specifies conflicting sheet names: "${s}" (options.sheetName) vs "${o}" (anchor).`)
          let l = i(o ?? s),
            c = (0, a.DO)(r.ref)
          if (!c) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor ?? "A1"}".`)
          let { bounds: d } = c
          if (d.startRow !== d.endRow || d.startCol !== d.endCol)
            throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor ?? "A1"}".`)
          let u = (function (e, t) {
              if (!e.trim()) return []
              let n = (function (e, t) {
                let n = [],
                  a = [],
                  r = "",
                  o = !1,
                  i = () => {
                    ;(a.push(r), (r = ""))
                  },
                  s = () => {
                    ;(n.push(a), (a = []))
                  }
                for (let n = 0; n < e.length; n += 1) {
                  let a = e[n] ?? ""
                  if (o) {
                    if ('"' === a) {
                      if ('"' === e[n + 1]) {
                        ;((r += '"'), (n += 1))
                        continue
                      }
                      o = !1
                      continue
                    }
                    r += a
                    continue
                  }
                  if ('"' === a) {
                    o = !0
                    continue
                  }
                  if (a === t) {
                    i()
                    continue
                  }
                  if ("\n" === a) {
                    ;(i(), s())
                    continue
                  }
                  if ("\r" === a) {
                    ;("\n" === e[n + 1] && (n += 1), i(), s())
                    continue
                  }
                  r += a
                }
                for (i(), s(); n.length > 0;) {
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
            p = u.length,
            m = p > 0 ? (u[0]?.length ?? 0) : 0
          if (0 === p || 0 === m) return { sheetName: l, values: [] }
          let h = { startRow: d.startRow, startCol: d.startCol, endRow: d.startRow + p - 1, endCol: d.startCol + m - 1 }
          return {
            sheetName: l,
            values: u,
            rangeRef: (0, a.wP)(h),
            rect: { r1: h.startRow, c1: h.startCol, r2: h.endRow, c2: h.endCol },
          }
        },
        sanitizeSheetName: i,
      },
    )
  },
  uAAd(e, t, n) {
    var a = n("P0hF")
    let r = 4 / 3
    function o(e) {
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
          return { padLr: Math.max(2, Math.floor(0.1 * t)), padTb: Math.max(r, Math.floor(0 * t)) }
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
          return null == e || e <= 0 ? 64 : e * o(t)
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
          return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / o(t))) / 100
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
  LA2j(e, t, n) {
    var a,
      r,
      o,
      i =
        (((a = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_UNSPECIFIED"),
        (a.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_LEGACY =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_LEGACY"),
        (a.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED"),
        (a.UNRECOGNIZED = "UNRECOGNIZED"),
        a),
      s =
        (((r = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_UNSPECIFIED"),
        (r.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN"),
        (r.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN"),
        (r.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED"),
        (r.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
        (r.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
        (r.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      l =
        (((o = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_UNSPECIFIED"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS"),
        (o.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o)
    n.d(
      t,
      {},
      {
        Bj: l,
        CI: { $type: "protobuf_analytics_events.v1.ChatgptConnectorsMxRecommendationEndpointResponse" },
        H9: i,
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
  Eso4(e, t, n) {
    n.d(
      t,
      {},
      {
        Ee: [],
        p: function (e, t) {
          return t.some((t) => t.beaconId === e.beacon_id && t.containerId === e.ui_info.container_id)
        },
      },
    )
  },
  prHy(e, t, n) {
    var a = n("ASxG"),
      r = n("s4w7"),
      o = n("h6ff"),
      i = n("Eso4")
    let s = a.YjP().refine((e) => e.trim().length > 0, "Home tooltip title must not be blank"),
      l = a
        .YjP()
        .nullable()
        .optional()
        .transform((e) => e ?? null),
      c = {
        action_items: a.YOg(a.ZmZ()).length(0),
        beacon_name: a.YjP(),
        show_timing: a.k5n(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
        type: a.euz("beacon_ui_response"),
      },
      d = a.KCZ([
        a
          .Ikc({
            ...c,
            beacon_id: a.euz("voice_mode_tooltip"),
            ui_info: a
              .Ikc({
                subtitle: l,
                target: a.euz("composer-voice-button"),
                title: s,
                type: a.euz("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
        a
          .Ikc({
            ...c,
            beacon_id: a.euz("tpp_nux_tooltip"),
            ui_info: a
              .Ikc({
                subtitle: l,
                target: a.euz("tpp-surface-mode-toggle"),
                title: s,
                type: a.euz("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
      ]),
      u = a.KCZ([d, r.E2]),
      p = a.KCZ([o.Bw, u])
    n.d(
      t,
      {},
      {
        Bw: p,
        Yw: function (e, t) {
          let n = p.safeParse(e)
          if (n.success) return n.data
          let a = o.th.safeParse(e)
          return a.success && (0, i.p)(a.data, t) ? a.data : null
        },
        xU: function (e) {
          return u.safeParse(e).success
        },
      },
    )
  },
  nUDt(e, t, n) {
    var a = n("qmMi"),
      r = n("DBCl"),
      o = n("Ywss"),
      i = n("SPnB"),
      s = n("nlNF"),
      l = n("OWtl"),
      c = n("Kwur"),
      d = n("g2p6")
    let u = (0, a.vP)(l.u, null, {
        onMount: (e) => {
          let t = () => e(null)
          return (window.addEventListener("pagehide", t), () => window.removeEventListener("pagehide", t))
        },
      }),
      p = (0, a.bD)(l.u, (e) => 0)
    n.d(
      t,
      {},
      {
        Jf: function (e, t) {
          let n = e.get(u)
          n?.conversationId !== t ||
            !n.ready ||
            n.presented ||
            e.get(i.chatGptAuthenticatedUserId$) !== n.userId ||
            e.get(i.chatGptAuthenticatedAccountId$) !== n.accountId ||
            e.get(d.Sk) !== n.accountId ||
            (e.set(u, { ...n, presented: !0 }),
            e.set(p, n.userId, (e) => e + 1),
            null != n.disclosure &&
              c.Request.safePost("/gizmos/business-agents/disclosures/viewed", {
                expectedIdentity: { accountId: n.accountId, userId: n.userId },
                additionalHeaders: { "ChatGPT-Account-ID": n.accountId, [r.zBc]: n.accountId },
                requestBody: {
                  ...("advertiser_id" in n.disclosure ? { advertiser_id: n.disclosure.advertiser_id } : {}),
                  version: n.disclosure.version,
                },
              }).catch(() => {}))
        },
        O5: function (e, t) {
          let n, a
          if ((e.set(u, null == t ? null : { ...t, ready: !1, presented: !1 }), null == t)) return
          let r = e.get(s.x2)?.key
          e.when(({ get: l }) => {
            let c = l(u),
              p = l(s.x2)
            if (
              (p?.state?.initialChatGptConversationId === t.conversationId &&
                (null == n
                  ? ((n = p.key),
                    "/" === p.pathname &&
                      null != p.state.prefillPromptOnlyIfEmpty &&
                      null != p.state.prefillPrompt &&
                      (a = p.state.initialChatGptBusinessAgentGizmoId))
                  : null != a &&
                    p.key !== n &&
                    "/" === p.pathname &&
                    p.state.initialChatGptBusinessAgentGizmoId === a &&
                    null == p.state.prefillPrompt &&
                    l(s.I$) === o.rc.Replace &&
                    ((n = p.key), (a = void 0))),
              c?.conversationId !== t.conversationId)
            )
              return !0
            let m =
              l(i.chatGptAuthenticatedUserId$) !== t.userId ||
              l(i.chatGptAuthenticatedAccountId$) !== t.accountId ||
              l(d.Sk) !== t.accountId ||
              (p?.key !== r && p?.key !== n) ||
              (null != n && p?.key !== n)
            return (m && e.set(u, null), m)
          })
        },
        VB: function (e, t, n, a) {
          let r = e.get(u)
          if (r?.conversationId !== t) return
          let o = { ...r, disclosure: n?.version === 1 ? n : void 0, ready: !0 },
            i = Math.max(e.get(p, o.userId), n?.global_impression_count ?? 0)
          ;(e.set(p, o.userId, i), e.set(u, i < a ? o : null))
        },
        bC: u,
        xZ: function (e, t) {
          e.get(u)?.conversationId === t && e.set(u, null)
        },
      },
    )
  },
  GTpx(e, t, n) {
    var a = n("qmMi"),
      r = n("SPnB"),
      o = n("Kwur"),
      i = n("OWtl"),
      s = n("rvFo"),
      l = n("g2p6")
    let c = (0, a.RD)(i.u, ({ scope: e }) => {
      let t = e.get(l.Sk),
        n = e.get(r.chatGptAuthenticatedUserId$)
      return {
        enabled: e.get(r.f4) && null != t,
        queryKey: d({ accountId: t, userId: n }),
        queryFn: async ({ signal: a }) => {
          if (e.get(l.Sk) !== t || e.get(r.chatGptAuthenticatedUserId$) !== n)
            throw Error("Account changed before loading personalization")
          return o.Request.safeGet("/user_system_messages", { signal: a })
        },
        staleTime: s.D.ONE_MINUTE,
      }
    })
    function d({ accountId: e, userId: t }) {
      return ["chatgpt-user-context", e, t]
    }
    ;((0, a.aP)(i.u, ({ scope: e }) => ({
      mutationKey: ["update-chatgpt-user-context"],
      mutationFn: async (t) => {
        let n = e.get(l.Sk),
          a = e.get(r.chatGptAuthenticatedUserId$),
          i = e.query.snapshot(c)
        if ((await i.cancel(), e.get(l.Sk) !== n || e.get(r.chatGptAuthenticatedUserId$) !== a))
          throw Error("Account changed before saving personalization")
        let s = await o.Request.safePatch("/user_system_messages", { requestBody: t })
        i.setData(s)
      },
    })),
      n.d(t, {}, { Pm: d, gM: c }))
  },
  wxDG(e, t, n) {
    n.d(t, { t: () => u })
    var a = n("Kwur"),
      r = n("heoH"),
      o = n("LhrG"),
      i = n("UxLW")
    function s(e, t, n) {
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
    async function l(e, t, n) {
      if (null == e) return null
      try {
        let a = await (0, r.C)(e, {
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: n,
        })
        return (n.throwIfAborted(), { id: e, title: a.title ?? null })
      } catch {
        return (n.throwIfAborted(), null)
      }
    }
    function c(e) {
      let t = e?.display_name?.trim() || e?.email?.trim()
      return null == t ? null : { kind: "person", name: t }
    }
    function d(e) {
      return "fulfilled" === e.status ? e.value : null
    }
    function u({ accountId: e, source: t, userId: n }) {
      return {
        enabled: null != e,
        queryFn: ({ signal: r }) => {
          if (null == e) throw Error("Cannot fetch file info without an account")
          return (async function (e, t, n, r) {
            if ("library" === e.identity.type) {
              let n = e.identity.libraryFileId
              return null != (0, i.AG)(n)
                ? s(e, n, await l(e.conversationId, t, r))
                : (async function (e, t, n, r) {
                    var i, s, u
                    let p = await (0, o.F)(t, n, r)
                    r.throwIfAborted()
                    let m = p.access_kind,
                      h = e.conversationId ?? p.origination_thread_id,
                      g = { "ChatGPT-Account-ID": n },
                      [f, _, b, y] = await Promise.allSettled([
                        "mounted" === m
                          ? Promise.resolve(null)
                          : a.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: r,
                            }),
                        "mounted" === m
                          ? Promise.resolve(null)
                          : a.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: r,
                            }),
                        "shared" === m
                          ? a.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: r,
                            })
                          : Promise.resolve(null),
                        l(h, n, r),
                      ])
                    r.throwIfAborted()
                    let x = d(f),
                      C = d(_)?.items[0] ?? null,
                      w = d(b),
                      v = c(x?.owner ?? null)
                    return {
                      access:
                        ((i = m),
                        (s = x),
                        (u = w?.can_edit),
                        null != s &&
                        s.viewer.principal.principal_type === s.owner.principal.principal_type &&
                        s.viewer.principal.principal_id === s.owner.principal.principal_id
                          ? "owner"
                          : s?.viewer.role_id.includes("editor") || !0 === u
                            ? "editor"
                            : "owned" === i
                              ? "owner"
                              : "shared" !== i || (null == s && null == u)
                                ? null
                                : "viewer"),
                      conversation: d(y),
                      createdAt: p.record_creation_time ?? p.file_upload_time ?? e.createdAt ?? null,
                      createdBy: v,
                      externalAccount: p.external_account ?? e.externalAccount ?? null,
                      fileExtension: p.file_extension ?? null,
                      libraryFileMetadata: "image" === p.library_file_category ? p : void 0,
                      libraryFileId: t,
                      mimeType: p.mime_type ?? e.mimeType ?? null,
                      name: ("kind" in p ? p.name : p.file_name) || e.name,
                      parentDirectoryId: ("kind" in p ? p.parent_directory_id : p.directory_id) ?? null,
                      sizeBytes: p.file_size_bytes ?? e.sizeBytes ?? null,
                      sourceUrl: p.cloud_doc_url ?? e.sourceUrl,
                      updatedAt: C?.version_created_at ?? p.updated_at ?? p.file_upload_time ?? e.updatedAt ?? null,
                      updatedBy: (function (e, t, n) {
                        let a = e?.version_provenance
                        if (null == a) return null
                        if ("agent" === a.actor) return { kind: "chatgpt" }
                        let r = a.actor_id?.trim()
                        if (null != r && null != t) {
                          if (r === t.owner.principal.principal_id) return c(t.owner)
                          if (r === t.viewer.principal.principal_id) return c(t.viewer) ?? { kind: "you" }
                        }
                        let o = a.actor_display_name?.trim() || a.actor_email?.trim()
                        return null != o
                          ? { kind: "person", name: o }
                          : "create" === a.action && null != n
                            ? n
                            : { kind: "collaborator" }
                      })(C, x, v),
                    }
                  })(e, n, t, r)
            }
            let [u, p] = await Promise.all([
              a.Request.safeGet("/files/{file_id}", {
                parameters: { path: { file_id: e.identity.fileId }, query: { gizmo_id: e.gizmoId } },
                additionalHeaders: { "ChatGPT-Account-ID": t },
                signal: r,
              }).catch((t) => {
                if ((r.throwIfAborted(), null == e.sourceUrl && null == e.externalAccount)) throw t
                return null
              }),
              l(e.conversationId, t, r),
            ])
            if ((r.throwIfAborted(), null == u)) return s(e, null, p)
            let m = null != n && u.owner_id === n,
              h = m ? { kind: "you" } : null
            return {
              access: m ? "owner" : "viewer",
              conversation: p,
              createdAt: u.creation_time,
              createdBy: h,
              externalAccount: e.externalAccount ?? null,
              fileExtension: u.file_extension,
              libraryFileId: null,
              mimeType: u.mime_type ?? e.mimeType ?? null,
              name: u.name || e.name,
              parentDirectoryId: e.parentDirectoryId ?? null,
              sizeBytes: u.size ?? e.sizeBytes ?? null,
              sourceUrl: e.sourceUrl,
              updatedAt: u.ready_time ?? u.creation_time,
              updatedBy: h,
            }
          })(t, e, n, r)
        },
        queryKey: ["chatgpt-file-preview-file-info", e, n, t],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 3e4,
      }
    }
  },
  UBr4(e, t, n) {
    n.d(t, { h: () => k })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("bqtn"),
      i = n("Bbed"),
      s = n("yQRo"),
      l = n("TGnH"),
      c = n("Pq1H"),
      d = n("qmMi"),
      u = n("oyxz"),
      p = n("SPnB"),
      m = n("UxN3"),
      h = n("OWtl"),
      g = n("Vc45"),
      f = n("wxDG")
    function _(e) {
      let t,
        n,
        i,
        c,
        p,
        f,
        _ = (0, r.c)(12),
        { ownerId: y, source: x } = e,
        C = (0, d.gh)(h.u)
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
          ? ((i = (0, a.jsx)(o.ms.ItemIcon, {
              children: (0, a.jsx)(m.b5, { icon: { assets: { 16: s.c, 20: l.b } } }),
            })),
            (c = (0, a.jsx)(u.A, { id: "chatgptFilePreview.fileInfo.menuItem", defaultMessage: "File info" })),
            (_[5] = i),
            (_[6] = c))
          : ((i = _[5]), (c = _[6])),
        _[7] !== n
          ? ((p = (0, a.jsxs)(o.ms.Item, { onSelect: n, children: [i, c] })), (_[7] = n), (_[8] = p))
          : (p = _[8]),
        _[9] !== t || _[10] !== p
          ? ((f = (0, a.jsxs)(a.Fragment, { children: [t, p] })), (_[9] = t), (_[10] = p), (_[11] = f))
          : (f = _[11]),
        f
      )
    }
    function b(e) {
      let t,
        n = (0, r.c)(4),
        { source: a } = e,
        o = (0, d.gh)(h.u),
        i = (0, d.Ul)(p.chatGptAuthenticatedAccountId$),
        s = (0, d.Ul)(p.chatGptAuthenticatedUserId$)
      return (
        n[0] !== i || n[1] !== a || n[2] !== s
          ? ((t = (0, f.t)({ accountId: i, source: a, userId: s })), (n[0] = i), (n[1] = a), (n[2] = s), (n[3] = t))
          : (t = n[3]),
        (0, c.f)(t, o.queryClient),
        null
      )
    }
    var y = n("Y0Sw"),
      x = n("JW1J"),
      C = n("E8Sp"),
      w = n("xmjg"),
      v = n("O8Pw"),
      A = n("tl2n")
    function j(e) {
      let t,
        n,
        i,
        s,
        l,
        c = (0, r.c)(16),
        { libraryFileId: p, disabled: g, onSelect: f } = e,
        _ = (0, d.gh)(h.u),
        { pathname: b } = (0, d.Ul)(C.gM),
        j = (0, v.Tq)(),
        S = (0, v.o0)()
      return !(0, d.Ul)(A.$7) ||
        "/library" === b ||
        b?.startsWith("/library/") ||
        "/space" === b ||
        b?.startsWith("/space/")
        ? null
        : (c[0] !== S ? ((t = S({ 16: y.Y, 20: x.V }, { 16: w.Z, 20: w.e })), (c[0] = S), (c[1] = t)) : (t = c[1]),
          c[2] !== t ? ((n = (0, a.jsx)(m.b5, { icon: { assets: t } })), (c[2] = t), (c[3] = n)) : (n = c[3]),
          c[4] !== p || c[5] !== S || c[6] !== f || c[7] !== _
            ? ((i = () => {
                ;(f?.(),
                  (0, C.oo)(_, S(`/library/file/${encodeURIComponent(p)}`, `/space/file/${encodeURIComponent(p)}`)))
              }),
              (c[4] = p),
              (c[5] = S),
              (c[6] = f),
              (c[7] = _),
              (c[8] = i))
            : (i = c[8]),
          c[9] !== j
            ? ((s = j
                ? (0, a.jsx)(u.A, { id: "artifactViewer.openInLibrary.space", defaultMessage: "Open in Space" })
                : (0, a.jsx)(u.A, { id: "artifactViewer.openInLibrary", defaultMessage: "Open in Library" })),
              (c[9] = j),
              (c[10] = s))
            : (s = c[10]),
          c[11] !== g || c[12] !== n || c[13] !== i || c[14] !== s
            ? ((l = (0, a.jsx)(o.ms.Item, { disabled: g, leftIcon: n, onSelect: i, children: s })),
              (c[11] = g),
              (c[12] = n),
              (c[13] = i),
              (c[14] = s),
              (c[15] = l))
            : (l = c[15]),
          l)
    }
    let S = (0, i._)(async () => (await n.e(460679).then(n.bind(n, "hieE"))).LibraryFilePreviewVersionHistory)
    function k(e) {
      let t,
        n,
        i,
        s,
        l,
        c,
        d = (0, r.c)(23),
        {
          children: u,
          favoriteAction: p,
          file: m,
          fileInfoOwnerId: h,
          fileInfoSource: f,
          libraryFileId: b,
          openInLibraryDisabled: y,
          onOpenLibrary: x,
          versionHistoryAction: C,
        } = e,
        w = b ?? m?.libraryFileId
      d[0] !== h || d[1] !== f
        ? ((t = null == f ? void 0 : (h ?? (0, g.xd)(f))), (d[0] = h), (d[1] = f), (d[2] = t))
        : (t = d[2])
      let v = t,
        A = null != v || null != w || null != p || null != C || null != m
      return A || null != u
        ? (d[3] !== v || d[4] !== f
            ? ((n = null == v || null == f ? null : (0, a.jsx)(_, { ownerId: v, source: f })),
              (d[3] = v),
              (d[4] = f),
              (d[5] = n))
            : (n = d[5]),
          d[6] !== w || d[7] !== x || d[8] !== y
            ? ((i = null == w ? null : (0, a.jsx)(j, { disabled: y, libraryFileId: w, onSelect: x })),
              (d[6] = w),
              (d[7] = x),
              (d[8] = y),
              (d[9] = i))
            : (i = d[9]),
          d[10] !== m || d[11] !== C
            ? ((s = C ?? (null == m ? null : (0, a.jsx)(S, { file: m }))), (d[10] = m), (d[11] = C), (d[12] = s))
            : (s = d[12]),
          d[13] !== u || d[14] !== A
            ? ((l = A && null != u ? (0, a.jsx)(o.ms.Separator, { className: "last:hidden" }) : null),
              (d[13] = u),
              (d[14] = A),
              (d[15] = l))
            : (l = d[15]),
          d[16] !== u || d[17] !== p || d[18] !== n || d[19] !== i || d[20] !== s || d[21] !== l
            ? ((c = (0, a.jsxs)(a.Fragment, { children: [n, i, p, s, l, u] })),
              (d[16] = u),
              (d[17] = p),
              (d[18] = n),
              (d[19] = i),
              (d[20] = s),
              (d[21] = l),
              (d[22] = c))
            : (c = d[22]),
          c)
        : null
    }
  },
  Z4o7(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("bVeK")
    n.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            n = (0, r.c)(2),
            { className: i } = e
          return (
            n[0] !== i
              ? ((t = (0, a.jsxs)(a.Fragment, {
                  children: [null, (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(o.ERJ, { className: i }) })],
                })),
                (n[0] = i),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  L6Md(e, t, n) {
    n.d(
      t,
      {},
      {
        $: function (e, t) {
          let { start: n, end: a } = t,
            r = [],
            o = [],
            i = [...e.matchAll(/\\(?:[a-zA-Z]+|[^])|[{}]/g)]
          for (let e of i) {
            let t = e.index + e[0].length
            if (e[0].startsWith("\\") && e.index < a && t > n) ((n = Math.min(n, e.index)), (a = Math.max(a, t)))
            else if ("{" === e[0]) o.push(e.index)
            else if ("}" === e[0]) {
              let e = o.pop()
              null != e && r.push({ start: e, end: t })
            }
          }
          for (let t of i) {
            if (!t[0].startsWith("\\") || t.index >= a || t.index + t[0].length <= n) continue
            let o = t.index + t[0].length,
              i = 0
            if (
              (/^\\(?:[dt]?frac|binom|overset|underset)$/.test(t[0])
                ? (i = 2)
                : /^\\(?:sqrt|mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathcal|mathbb|mathfrak|mathnormal|mathscr|operatorname|text|textrm|textbf|textit|vec|hat|widehat|bar|overline|underline|tilde|widetilde|dot|ddot)$/.test(
                    t[0],
                  ) && (i = 1),
              "\\sqrt" === t[0] && "[" === e[o])
            ) {
              let t = e.indexOf("]", o)
              t >= 0 && (o = t + 1)
            }
            for (let t = i; t > 0; t -= 1) {
              for (; /\s/.test(e[o] ?? "");) o += 1
              o =
                r.find((e) => e.start === o)?.end ??
                o + (e.slice(o).match(/^(?:\\[a-zA-Z]+|\\[^]|[^])/u)?.[0].length ?? 0)
            }
            a = Math.max(a, o)
          }
          for (let e of r)
            ((n <= e.start && a > e.start && a < e.end) || (n > e.start && n < e.end && a >= e.end)) &&
              ((n = Math.min(n, e.start)), (a = Math.max(a, e.end)))
          return { start: n, end: a }
        },
      },
    )
  },
  KbPm(e, t, n) {
    var a = n("qmMi"),
      r = n("Kwur"),
      o = n("OWtl")
    let i = (0, a.vU)(o.u, (e) => ({
      queryKey: ["tpp-onboarding-workspace-role", e?.accountId, e?.userId],
      enabled: null != e,
      staleTime: 6e4,
      retry: !1,
      queryFn: async ({ signal: t }) => {
        if (null == e) return null
        let n = await r.Request.safeGet("/accounts/{account_id}/users/{user_id}/onboarding_information", {
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
          parameters: { path: { account_id: e.accountId, user_id: e.userId } },
          signal: t,
        })
        return n.role?.trim() || null
      },
    }))
    n.d(t, {}, { o: i })
  },
  LhrG(e, t, n) {
    var a = n("tFxw"),
      r = n("D7Ms"),
      o = n("Kwur"),
      i = n("eShZ"),
      s = n("jgEm"),
      l = n("MExO")
    async function c(e, t, n) {
      let r,
        c = (0, l.CN)(e)
      if (null != c) {
        n.throwIfAborted()
        let r = await o.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
          parameters: { path: { provider_key: c.provider } },
          requestBody: { file_id: e },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
          signal: n,
        })
        n.throwIfAborted()
        let i = (0, l.CN)(r.file_id)
        if (
          r.file_id !== e &&
          ((0, a.YO)(e)?.encodedAccountKey != null || i?.provider !== c.provider || i.nativeFileId !== c.nativeFileId)
        )
          throw Error("Provider file metadata does not match the requested file")
        return {
          id: r.file_id,
          kind: "file",
          name: r.name,
          parent_directory_id: null,
          access_kind: "mounted",
          mime_type: r.mime_type,
          file_size_bytes: r.file_size_bytes,
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
        return (n.throwIfAborted(), (0, s.U9)(t, e))
      }
      try {
        let e = await o.Request.safeGet("/files/library/files/{library_file_id}", d)
        return (n.throwIfAborted(), e)
      } catch (e) {
        if (!(e instanceof i.FetchError) || (403 !== e.status && 404 !== e.status)) throw e
      }
      n.throwIfAborted()
      try {
        if (
          ((r = await o.Request.safeGet("/files/library/files/{library_file_id}/node", d)),
          n.throwIfAborted(),
          "owned" === r.access_kind && "image" === r.library_file_category && null == r.library_artifact_type)
        ) {
          let e = await o.Request.safeGet("/files/library/files/{library_file_id}/versions", {
            ...d,
            parameters: { ...d.parameters, query: { limit: 1 } },
          })
          return (
            n.throwIfAborted(),
            { ...r, library_artifact_type: e.items[0]?.library_artifact_type ?? r.library_artifact_type }
          )
        }
        return (0, s.U9)(r, e)
      } catch (l) {
        if (!(l instanceof i.FetchError) || (403 !== l.status && 404 !== l.status)) throw l
        let t = null,
          a = new Set()
        do {
          n.throwIfAborted()
          let r = await o.Request.safePost("/files/library", {
            requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
            additionalHeaders: d.additionalHeaders,
            expectedErrorStatuses: [403, 404],
            signal: n,
          })
          n.throwIfAborted()
          let i = r.items.find((t) => t.id === e)
          if (null != i) return i
          if (null == (t = r.cursor ?? null) || a.has(t)) break
          a.add(t)
        } while (null != t)
        if (null != r) return (0, s.U9)(r, e)
        throw l
      }
    }
    n.d(
      t,
      {},
      {
        F: c,
        h: function (e, t, n) {
          return {
            queryKey: ["library-api", e, t, "file", n],
            queryFn: null != n && null != e ? ({ signal: t }) => c(n, e, t) : r.hT,
            gcTime: 0,
            staleTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
          }
        },
      },
    )
  },
  aSgO(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("LVea"),
      i = n("qmMi"),
      s = n("zd8w"),
      l = n("oyxz"),
      c = n("Sm6l"),
      d = n("JNtf"),
      u = n("ZtSy"),
      p = n("bVeK"),
      m = n("vkjh")
    n("mmXj")
    var h = n("yGJW"),
      g = n("OWtl")
    function f(e) {
      return e.preventDefault()
    }
    function _(e) {
      let t,
        n,
        o = (0, r.c)(3),
        { country: i } = e
      o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { learnMoreLink: b }), (o[0] = t)) : (t = o[0])
      let s = t
      return (
        o[1] !== i
          ? ((n =
              "CA" === i
                ? (0, a.jsx)(l.A, {
                    id: "chatgpt.new-onboarding.chatgpt-review-training-sensitive-info-disclaimer",
                    defaultMessage:
                      "ChatGPT can make mistakes. Don't share sensitive info. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>",
                    values: { learnMoreLink: s.learnMoreLink },
                  })
                : (0, a.jsx)(l.A, {
                    id: "chatgpt.new-onboarding.chatgpt-review-training-disclaimer",
                    defaultMessage:
                      "ChatGPT can make mistakes. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>",
                    values: { learnMoreLink: s.learnMoreLink },
                  })),
            (o[1] = i),
            (o[2] = n))
          : (n = o[2]),
        n
      )
    }
    function b(e) {
      return (0, a.jsx)(
        u.G,
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
            b,
            y,
            x,
            C,
            w,
            v,
            A,
            j,
            S,
            k,
            N,
            M = (0, r.c)(33),
            { country: E, isContinuing: O, standalone: I, onContinue: P, onShown: T } = e,
            R = void 0 !== O && O,
            D = void 0 !== I && I,
            L = (0, i.gh)(g.u),
            G = (0, s.useEffectEvent)(T)
          ;(M[0] !== G || M[1] !== D
            ? ((t = () => {
                D && G()
              }),
              (M[0] = G),
              (M[1] = D),
              (M[2] = t))
            : (t = M[2]),
            M[3] !== D ? ((n = [D]), (M[3] = D), (M[4] = n)) : (n = M[4]),
            (0, s.useLayoutEffect)(t, n),
            M[5] !== L
              ? ((b = {
                  termsLink: (e) =>
                    (0, a.jsx)(
                      u.G,
                      {
                        className: "underline",
                        href: "https://openai.com/terms",
                        initiator: "open_in_browser_bridge",
                        isBrowserEnabled: !1,
                        openTarget: "external-browser",
                        onClick: () =>
                          L.get(h.YV).logProductEvent(o.CodexChatgptOnboardingLegalLinkClicked, {
                            link: o.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_TERMS,
                          }),
                        children: e,
                      },
                      "terms",
                    ),
                  privacyLink: (e) =>
                    (0, a.jsx)(
                      u.G,
                      {
                        className: "underline",
                        href: "https://openai.com/privacy",
                        initiator: "open_in_browser_bridge",
                        isBrowserEnabled: !1,
                        openTarget: "external-browser",
                        onClick: () =>
                          L.get(h.YV).logProductEvent(o.CodexChatgptOnboardingLegalLinkClicked, {
                            link: o.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_PRIVACY,
                          }),
                        children: e,
                      },
                      "privacy",
                    ),
                  koreaAddendumLink: (e) =>
                    (0, a.jsx)(
                      u.G,
                      {
                        className: "underline",
                        href: "https://openai.com/ko/policies/kr-privacy-policy-addendum",
                        initiator: "open_in_browser_bridge",
                        isBrowserEnabled: !1,
                        openTarget: "external-browser",
                        onClick: () =>
                          L.get(h.YV).logProductEvent(o.CodexChatgptOnboardingLegalLinkClicked, {
                            link: o.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_KOREA_ADDENDUM,
                          }),
                        children: e,
                      },
                      "korea-addendum",
                    ),
                }),
                (M[5] = L),
                (M[6] = b))
              : (b = M[6]))
          let F = b,
            W = D ? "inline" : "centered",
            B = D ? "fixed inset-0 h-full w-full bg-surface text-default" : "h-full w-full bg-surface text-default",
            H = D ? void 0 : T
          return (
            M[7] !== H ? ((y = { onOpenAutoFocus: H, onEscapeKeyDown: f }), (M[7] = H), (M[8] = y)) : (y = M[8]),
            M[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, a.jsx)("div", {
                  className: "flex size-9 items-center justify-center",
                  children: (0, a.jsx)(p.IJp, {}),
                })),
                (M[9] = x))
              : (x = M[9]),
            M[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-y-4 text-center select-none max-sm:flex-1",
                  children: [
                    x,
                    (0, a.jsx)(d.L3, {
                      className: "text-3xl leading-9 font-normal",
                      children: (0, a.jsx)(l.A, {
                        id: "chatgpt.new-onboarding.all-done-2",
                        defaultMessage: "You're all set",
                      }),
                    }),
                  ],
                })),
                (M[10] = C))
              : (C = M[10]),
            M[11] !== E
              ? ((w = (0, a.jsx)(d.rr, {
                  className: "text-center text-base leading-6 text-secondary",
                  children: (0, a.jsx)(_, { country: E }),
                })),
                (M[11] = E),
                (M[12] = w))
              : (w = M[12]),
            M[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, a.jsx)(l.A, { id: "chatgpt.new-onboarding.continue", defaultMessage: "Continue" })),
                (M[13] = v))
              : (v = M[13]),
            M[14] !== R
              ? ((A = (0, a.jsx)(c.$, {
                  color: "primary",
                  loading: R,
                  size: "beaconAction",
                  type: "submit",
                  children: v,
                })),
                (M[14] = R),
                (M[15] = A))
              : (A = M[15]),
            M[16] !== E || M[17] !== F.koreaAddendumLink || M[18] !== F.privacyLink || M[19] !== F.termsLink
              ? ((j = (0, a.jsx)("p", {
                  className: "text-center text-sm text-secondary",
                  children:
                    "KR" === E
                      ? (0, a.jsx)(l.A, {
                          id: "thread.agreeToTermsNoAuthKorea-may-06",
                          defaultMessage:
                            "By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink> and its <koreaAddendumLink>Korea addendum</koreaAddendumLink>.",
                          values: {
                            termsLink: F.termsLink,
                            privacyLink: F.privacyLink,
                            koreaAddendumLink: F.koreaAddendumLink,
                          },
                        })
                      : (0, a.jsx)(l.A, {
                          id: "thread.agreeToTermsNoAuth-may-06",
                          defaultMessage:
                            "By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink>.",
                          values: { termsLink: F.termsLink, privacyLink: F.privacyLink },
                        }),
                })),
                (M[16] = E),
                (M[17] = F.koreaAddendumLink),
                (M[18] = F.privacyLink),
                (M[19] = F.termsLink),
                (M[20] = j))
              : (j = M[20]),
            M[21] !== w || M[22] !== A || M[23] !== j
              ? ((S = (0, a.jsxs)("div", {
                  className: "flex w-full flex-col gap-y-4 max-sm:px-6",
                  children: [w, A, j],
                })),
                (M[21] = w),
                (M[22] = A),
                (M[23] = j),
                (M[24] = S))
              : (S = M[24]),
            M[25] !== P || M[26] !== S
              ? ((k = (0, a.jsx)("div", {
                  className: "flex h-full flex-col overflow-y-auto",
                  children: (0, a.jsxs)("form", {
                    className:
                      "m-auto flex w-full shrink-0 flex-col items-center justify-between py-4 max-sm:min-h-full sm:w-80 sm:justify-center sm:gap-y-12",
                    action: P,
                    children: [C, S],
                  }),
                })),
                (M[25] = P),
                (M[26] = S),
                (M[27] = k))
              : (k = M[27]),
            M[28] !== k || M[29] !== W || M[30] !== B || M[31] !== y
              ? ((N = (0, a.jsx)(m.d, {
                  claim: "fullscreen_onboarding",
                  children: (0, a.jsx)(d.lG, {
                    open: !0,
                    showDialogClose: !1,
                    shouldIgnoreClickOutside: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    contentPosition: W,
                    contentClassName: B,
                    contentProps: y,
                    children: k,
                  }),
                })),
                (M[28] = k),
                (M[29] = W),
                (M[30] = B),
                (M[31] = y),
                (M[32] = N))
              : (N = M[32]),
            N
          )
        },
      },
    )
  },
  SLig(e, t, n) {
    n.d(t, { W: () => r })
    var a = n("a6v3")
    function r(e) {
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
    var a = n("qmMi")
    n.d(
      t,
      {},
      {
        n: function (e, t) {
          return (0, a.T1)(e, (e, { scope: n, signal: a, derived: r }) => {
            let o = a(({ scope: e }) => ({
                answers: t.initialAnswers,
                error: null,
                status: "active",
                step: "function" == typeof t.initialStep ? t.initialStep(e) : t.initialStep,
              })),
              i = r((e, { scope: n }) => t.getContext(n, e(o).answers))
            return {
              definition: t,
              state$: o,
              context$: i,
              advance: async function (e, a, r) {
                if (r.aborted || "active" !== e.status || o.get() !== e) return
                let i = { ...e, error: null, status: "pending" }
                o.set(i)
                let s = () => {
                  o.get() === i && o.set({ ...e, error: null })
                }
                r.addEventListener("abort", s, { once: !0 })
                try {
                  if (r.aborted) return void s()
                  let l = { ...e.answers, ...a },
                    c = t.getContext(n, l),
                    d = t.steps[e.step].next,
                    u = "function" == typeof d ? await d(c, r, n) : d
                  if (r.aborted || o.get() !== i) return
                  if ((t.onAdvance?.(n, c, e.step, u), "complete" === u)) {
                    if ((await t.onComplete(n, c, r), r.aborted || o.get() !== i)) return
                    o.set({ answers: l, error: null, status: "complete", step: null })
                  } else o.set({ answers: l, error: null, status: "active", step: u })
                } catch (t) {
                  r.aborted ||
                    o.get() !== i ||
                    o.set({ ...e, error: t instanceof Error ? t : Error("Onboarding transition failed", { cause: t }) })
                } finally {
                  r.removeEventListener("abort", s)
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
      r = n("YnMP"),
      o = n("qmMi"),
      i = n("Kwur"),
      s = n("g2p6"),
      l = n("KbPm"),
      c = n("yGJW"),
      d = n("idGD"),
      u = n("wP9i")
    let p = (0, o.vP)(u.E, !1)
    n.d(
      t,
      {},
      {
        R: async function (e, t, n) {
          let a = new AbortController(),
            r = a.signal,
            o = e.watch((e) => {
              ;(0, d.oA)(e, t) || a.abort()
            }),
            s = e.query.snapshot(l.o, t)
          try {
            ;(r.throwIfAborted(),
              await s.cancel(),
              r.throwIfAborted(),
              await i.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                parameters: { path: { account_id: t.accountId, user_id: t.userId } },
                requestBody: { onboarding_information: { role: n, departments: [] } },
                additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                signal: r,
              }),
              r.throwIfAborted(),
              await s.cancel(),
              r.throwIfAborted(),
              s.setData(n))
          } finally {
            o()
          }
        },
        x: async function (e, { identity: t, planType: n }) {
          if (e.get(p) || !(0, d.oA)(e, t)) return !1
          e.set(p, !0)
          let o = new AbortController(),
            i = e.watch((e) => {
              ;(0, d.oA)(e, t) || o.abort()
            })
          ;((0, c.yy)(e, r.HE, { productSurface: "edu" === n ? "chatgpt_for_education" : void 0 }),
            (0, c.yy)(e, a.ZX, {
              onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
              action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED",
            }))
          try {
            await (0, s.hs)(e, t.accountId, "oai/apps/hasSeenOnboarding", { userId: t.userId, signal: o.signal })
          } catch {
          } finally {
            ;(i(), e.set(p, !1))
          }
          let l = !o.signal.aborted && (0, d.oA)(e, t)
          return (l && (0, d.Jl)(e, t), l)
        },
      },
    )
  },
  wP9i(e, t, n) {
    var a = n("qmMi"),
      r = n("OWtl")
    let o = (0, a.z8)("WorkspaceMemberScope", {
      parent: r.u,
      key: ({ identity: e }) => JSON.stringify([e.accountId, e.userId]),
    })
    n.d(t, {}, { E: o })
  },
  fSd9(e, t, n) {
    let a = [
      "connector_5f3c8c41a1e54ad7a76272c89e2554fa",
      "connector_1e4f6a44acf14e3ca1d96672f8c945bc",
      n("o6hs").M1,
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
    n.d(
      t,
      {},
      {
        AQ: function (e, t, n) {
          return e.flatMap((e) => {
            let a = t.find(({ id: t }) => t === e.id)
            if ("ENABLED" !== e.status || a?.available !== !0 || "DISABLED_BY_ADMIN" === a.status) return []
            let r = n?.connector_stats?.find(({ connector_id: t }) => t === e.id)?.unique_user_cnt
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
                  isAccessible: a.installed,
                  isEnabled: a.installed,
                },
                connected: a.installed,
                canConnect: a.can_install,
                supportsDirectOAuth: e.supported_auth_types.includes("OAUTH") && !e.requires_link_params,
                teammateCount: null != r && Number.isSafeInteger(r) && r >= 5 ? r : 0,
              },
            ]
          })
        },
        DF: a,
        Gy: {
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
      },
    )
  },
  YgvB(e, t, n) {
    n.d(t, { sd: () => _, $l: () => y, nx: () => g, sO: () => x, Ip: () => C })
    var a = n("qmMi"),
      r = n("FpcZ"),
      o = n("pDRe"),
      i = n("uc7r"),
      s = n("hGHw"),
      l = n("Kwur"),
      c = n("idGD"),
      d = n("cLdu"),
      u = n("OWtl"),
      p = n("kfGJ"),
      m = n("rvFo"),
      h = n("fSd9")
    async function g(e, t) {
      ;(0, c.oA)(e, t) &&
        (await Promise.all([
          e.query.fetch(s.Q, t),
          e.query.fetch(C, t),
          void 0,
          Promise.all(h.DF.map((n) => e.query.fetch(f, { accountId: t.accountId, appId: n }))).then(async (n) => {
            let a = n.flat().map(({ id: e }) => e)
            0 !== a.length && (0, c.oA)(e, t) && (await e.query.fetch(b, { identity: t, appIds: a }))
          }),
        ]))
    }
    let f = (0, a.vU)(u.u, ({ accountId: e, appId: t }) => {
        let [n] = (0, r.getHostedAppsContentQueriesOptions)({
          accountId: e,
          appIds: [t],
          enabled: !0,
          productContext: "chatgpt",
        }).queries
        if (null == n) throw Error("Expected one app metadata query")
        return { ...n, retryOnMount: !0, refetchOnMount: !0 }
      }),
      _ = (0, a.i1)(u.u, ({ accountId: e }, { get: t }) => {
        let n = h.DF.map((n) => t(f, { accountId: e, appId: n }))
        return {
          data: n.every(({ data: e }) => null != e) ? n.flatMap(({ data: e }) => e ?? []) : void 0,
          isError: n.some(({ isError: e }) => e),
          isFetching: n.some(({ isFetching: e }) => e),
          retry: async () => {
            await Promise.all(n.filter(({ isError: e }) => e).map(({ refetch: e }) => e()))
          },
        }
      }),
      b = (0, a.vU)(u.u, ({ identity: e, appIds: t }) => ({
        ...(0, o.ps)({ ...e, appIds: t, enabled: !0, productSku: "CONNECTOR_SETTING" }),
        retryOnMount: !0,
        refetchOnMount: !0,
      }))
    ;((0, a.vU)(u.u, ({ identity: e, appIds: t }) => ({
      ...(0, o.zh)({ ...e, connectorIds: t, productSku: "CONNECTOR_SETTING" }),
      enabled: t.length > 0,
      retryOnMount: !0,
      refetchOnMount: !0,
    })),
      (0, a.vU)(u.u, (e, { scope: t }) => ({
        ...t.query
          .snapshot(
            d.qF,
            (function ({ accountId: e }) {
              return { accountId: e, hostId: p.fI, roots: void 0 }
            })(e),
          )
          .getOptions(),
        retryOnMount: !0,
        refetchOnMount: !0,
      })))
    let y = (0, a.i1)(u.u, (e, { get: t }) => t(b, e))
    async function x(e, t) {
      ;(await e.queryClient.invalidateQueries({
        queryKey: (0, i.Ob)({ ...t.identity, productSku: "CONNECTOR_SETTING" }),
      }),
        await e.query.invalidate(b, t))
    }
    let C = (0, a.vU)(u.u, (e) => ({
      queryKey: ["workspace_connector_stats", e],
      queryFn: ({ signal: t }) =>
        l.Request.safeGet("/aip/workspace/connector-stats", {
          additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
          signal: t,
        }),
      retry: !1,
      staleTime: m.D.FIVE_MINUTES,
      retryOnMount: !0,
      refetchOnMount: !0,
    }))
    ;(0, a.i1)(u.u, ({ identity: e, appIds: t }, { get: n }) => {
      let { data: a, isError: r } = n(C, e)
      return r
        ? void 0
        : (function (e, t) {
            let n,
              a = new Set(t)
            for (let t of e?.connector_stats ?? []) {
              let e = t.unique_user_cnt
              a.has(t.connector_id) && null != e && Number.isSafeInteger(e) && e >= 5 && (n = Math.max(n ?? 0, e))
            }
            return n
          })(a, t)
    })
  },
  bMLJ(e, t, n) {
    var a = n("Qgfj"),
      r = n("jE6S")
    let o = Object.entries(
        (0, a.YK)({
          internal_medicine: {
            id: "onboarding.health_department.internal_medicine",
            defaultMessage: "Internal Medicine",
          },
          family_medicine_primary_care: {
            id: "onboarding.health_department.family_medicine_primary_care",
            defaultMessage: "Family Medicine / Primary Care",
          },
          emergency_medicine: {
            id: "onboarding.health_department.emergency_medicine",
            defaultMessage: "Emergency Medicine",
          },
          pediatrics: { id: "onboarding.health_department.pediatrics", defaultMessage: "Pediatrics" },
          obstetrics_gynecology: {
            id: "onboarding.health_department.obstetrics_gynecology",
            defaultMessage: "Obstetrics & Gynecology",
          },
          general_surgery: { id: "onboarding.health_department.general_surgery", defaultMessage: "General Surgery" },
          orthopedic_surgery: {
            id: "onboarding.health_department.orthopedic_surgery",
            defaultMessage: "Orthopedic Surgery",
          },
          cardiology: { id: "onboarding.health_department.cardiology", defaultMessage: "Cardiology" },
          neurology: { id: "onboarding.health_department.neurology", defaultMessage: "Neurology" },
          psychiatry_behavioral_health: {
            id: "onboarding.health_department.psychiatry_behavioral_health",
            defaultMessage: "Psychiatry / Behavioral Health",
          },
          oncology_hematology: {
            id: "onboarding.health_department.oncology_hematology",
            defaultMessage: "Oncology / Hematology",
          },
          anesthesiology: { id: "onboarding.health_department.anesthesiology", defaultMessage: "Anesthesiology" },
          radiology_imaging: {
            id: "onboarding.health_department.radiology_imaging",
            defaultMessage: "Radiology / Imaging",
          },
          pathology_laboratory_medicine: {
            id: "onboarding.health_department.pathology_laboratory_medicine",
            defaultMessage: "Pathology / Laboratory Medicine",
          },
          critical_care: { id: "onboarding.health_department.critical_care", defaultMessage: "Critical Care" },
          emergency_department: {
            id: "onboarding.health_department.emergency_department",
            defaultMessage: "Emergency Department",
          },
          intensive_care_unit: {
            id: "onboarding.health_department.intensive_care_unit",
            defaultMessage: "Intensive Care Unit",
          },
          medical_surgical_unit: {
            id: "onboarding.health_department.medical_surgical_unit",
            defaultMessage: "Medical/Surgical Unit",
          },
          telemetry_step_down: {
            id: "onboarding.health_department.telemetry_step_down",
            defaultMessage: "Telemetry / Step-Down Unit",
          },
          operating_room: { id: "onboarding.health_department.operating_room", defaultMessage: "Operating Room" },
          post_anesthesia_care_unit: {
            id: "onboarding.health_department.post_anesthesia_care_unit",
            defaultMessage: "Post-Anesthesia Care Unit",
          },
          labor_delivery: { id: "onboarding.health_department.labor_delivery", defaultMessage: "Labor & Delivery" },
          neonatal_icu: { id: "onboarding.health_department.neonatal_icu", defaultMessage: "Neonatal ICU" },
          pediatric_unit: { id: "onboarding.health_department.pediatric_unit", defaultMessage: "Pediatric Unit" },
          oncology_unit: { id: "onboarding.health_department.oncology_unit", defaultMessage: "Oncology Unit" },
          psychiatric_unit: { id: "onboarding.health_department.psychiatric_unit", defaultMessage: "Psychiatric Unit" },
          ambulatory_outpatient_clinic: {
            id: "onboarding.health_department.ambulatory_outpatient_clinic",
            defaultMessage: "Ambulatory / Outpatient Clinic",
          },
          rehabilitation_unit: {
            id: "onboarding.health_department.rehabilitation_unit",
            defaultMessage: "Rehabilitation Unit",
          },
          primary_care_clinic: {
            id: "onboarding.health_department.primary_care_clinic",
            defaultMessage: "Primary Care Clinic",
          },
          hospitalist_service: {
            id: "onboarding.health_department.hospitalist_service",
            defaultMessage: "Internal Medicine / Hospitalist Service",
          },
          dermatology: { id: "onboarding.health_department.dermatology", defaultMessage: "Dermatology" },
          inpatient_pharmacy: {
            id: "onboarding.health_department.inpatient_pharmacy",
            defaultMessage: "Inpatient Pharmacy",
          },
          outpatient_pharmacy: {
            id: "onboarding.health_department.outpatient_pharmacy",
            defaultMessage: "Outpatient Pharmacy",
          },
          clinical_pharmacy: {
            id: "onboarding.health_department.clinical_pharmacy",
            defaultMessage: "Clinical Pharmacy",
          },
          emergency_department_pharmacy: {
            id: "onboarding.health_department.emergency_department_pharmacy",
            defaultMessage: "Emergency Department Pharmacy",
          },
          oncology_pharmacy: {
            id: "onboarding.health_department.oncology_pharmacy",
            defaultMessage: "Oncology Pharmacy",
          },
          pediatric_pharmacy: {
            id: "onboarding.health_department.pediatric_pharmacy",
            defaultMessage: "Pediatric Pharmacy",
          },
          critical_care_pharmacy: {
            id: "onboarding.health_department.critical_care_pharmacy",
            defaultMessage: "Critical Care Pharmacy",
          },
          pharmacy_informatics: {
            id: "onboarding.health_department.pharmacy_informatics",
            defaultMessage: "Pharmacy Informatics / Medication Safety",
          },
          research_pharmacy: {
            id: "onboarding.health_department.research_pharmacy",
            defaultMessage: "Research Pharmacy",
          },
          compounding_pharmacy: {
            id: "onboarding.health_department.compounding_pharmacy",
            defaultMessage: "Compounding Pharmacy",
          },
          laboratory_pathology: {
            id: "onboarding.health_department.laboratory_pathology",
            defaultMessage: "Laboratory / Pathology",
          },
          physical_therapy_rehabilitation: {
            id: "onboarding.health_department.physical_therapy_rehabilitation",
            defaultMessage: "Physical Therapy / Rehabilitation",
          },
          occupational_therapy: {
            id: "onboarding.health_department.occupational_therapy",
            defaultMessage: "Occupational Therapy",
          },
          speech_therapy: { id: "onboarding.health_department.speech_therapy", defaultMessage: "Speech Therapy" },
          respiratory_therapy: {
            id: "onboarding.health_department.respiratory_therapy",
            defaultMessage: "Respiratory Therapy",
          },
          nutrition_services: {
            id: "onboarding.health_department.nutrition_services",
            defaultMessage: "Dietary / Nutrition Services",
          },
          social_services_case_management: {
            id: "onboarding.health_department.social_services_case_management",
            defaultMessage: "Social Services / Case Management",
          },
          phlebotomy_unit: { id: "onboarding.health_department.phlebotomy_unit", defaultMessage: "Phlebotomy Unit" },
          cardiac_cath_endoscopy: {
            id: "onboarding.health_department.cardiac_cath_endoscopy",
            defaultMessage: "Cardiac Cath Lab / Endoscopy",
          },
          clinical_engineering: {
            id: "onboarding.health_department.clinical_engineering",
            defaultMessage: "Clinical Engineering",
          },
          executive_leadership: {
            id: "onboarding.health_department.executive_leadership",
            defaultMessage: "Executive Leadership / Administration",
          },
          operations_management: {
            id: "onboarding.health_department.operations_management",
            defaultMessage: "Operations Management",
          },
          finance_billing: { id: "onboarding.health_department.finance_billing", defaultMessage: "Finance / Billing" },
          human_resources: { id: "onboarding.health_department.human_resources", defaultMessage: "Human Resources" },
          quality_patient_safety: {
            id: "onboarding.health_department.quality_patient_safety",
            defaultMessage: "Quality Improvement / Patient Safety",
          },
          compliance_regulatory: {
            id: "onboarding.health_department.compliance_regulatory",
            defaultMessage: "Compliance / Regulatory Affairs",
          },
          health_information_management: {
            id: "onboarding.health_department.health_information_management",
            defaultMessage: "Health Information Management",
          },
          it_department: { id: "onboarding.health_department.it_department", defaultMessage: "IT Department" },
          facilities_support_services: {
            id: "onboarding.health_department.facilities_support_services",
            defaultMessage: "Facilities / Support Services",
          },
          supply_chain_procurement: {
            id: "onboarding.health_department.supply_chain_procurement",
            defaultMessage: "Supply Chain / Procurement",
          },
          patient_experience: {
            id: "onboarding.health_department.patient_experience",
            defaultMessage: "Patient Experience / Guest Services",
          },
          clinical_informatics: {
            id: "onboarding.health_department.clinical_informatics",
            defaultMessage: "Clinical Informatics",
          },
          data_analytics: {
            id: "onboarding.health_department.data_analytics",
            defaultMessage: "Data Analytics / Business Intelligence",
          },
          telehealth: { id: "onboarding.health_department.telehealth", defaultMessage: "Telehealth / Telemedicine" },
          cybersecurity: {
            id: "onboarding.health_department.cybersecurity",
            defaultMessage: "Cybersecurity / IT Security",
          },
          ehr_support: { id: "onboarding.health_department.ehr_support", defaultMessage: "EHR Support" },
          integration_team: {
            id: "onboarding.health_department.integration_team",
            defaultMessage: "Interface & Integration Team",
          },
          all_clinical_departments_support: {
            id: "onboarding.health_department.all_clinical_departments_support",
            defaultMessage: "All Clinical Departments Support",
          },
          clinical_research: {
            id: "onboarding.health_department.clinical_research",
            defaultMessage: "Clinical Research",
          },
          translational_research: {
            id: "onboarding.health_department.translational_research",
            defaultMessage: "Translational Research / Lab Research",
          },
          epidemiology_public_health: {
            id: "onboarding.health_department.epidemiology_public_health",
            defaultMessage: "Epidemiology / Public Health",
          },
          academic_department: {
            id: "onboarding.health_department.academic_department",
            defaultMessage: "Academic Department",
          },
          data_science_bioinformatics: {
            id: "onboarding.health_department.data_science_bioinformatics",
            defaultMessage: "Data Science / Bioinformatics",
          },
          pharmaceutical_research: {
            id: "onboarding.health_department.pharmaceutical_research",
            defaultMessage: "Pharmaceutical Research",
          },
          quality_outcomes_research: {
            id: "onboarding.health_department.quality_outcomes_research",
            defaultMessage: "Quality & Outcomes Research",
          },
          medical_education: {
            id: "onboarding.health_department.medical_education",
            defaultMessage: "Medical Education",
          },
          research_institute: {
            id: "onboarding.health_department.research_institute",
            defaultMessage: "Institute or Research Center",
          },
          subspecialty_fellowship: {
            id: "onboarding.health_department.subspecialty_fellowship",
            defaultMessage: "Subspecialty Fellowship",
          },
          allergy_immunology: {
            id: "onboarding.health_department.allergy_immunology",
            defaultMessage: "Allergy & Immunology",
          },
          endocrinology: { id: "onboarding.health_department.endocrinology", defaultMessage: "Endocrinology" },
          geriatric_medicine: {
            id: "onboarding.health_department.geriatric_medicine",
            defaultMessage: "Geriatric Medicine",
          },
          gastroenterology: { id: "onboarding.health_department.gastroenterology", defaultMessage: "Gastroenterology" },
          hematology: { id: "onboarding.health_department.hematology", defaultMessage: "Hematology" },
          infectious_disease: {
            id: "onboarding.health_department.infectious_disease",
            defaultMessage: "Infectious Disease",
          },
          interventional_radiology: {
            id: "onboarding.health_department.interventional_radiology",
            defaultMessage: "Interventional Radiology",
          },
          oral_maxillofacial_surgery: {
            id: "onboarding.health_department.oral_maxillofacial_surgery",
            defaultMessage: "Oral & Maxillofacial Surgery",
          },
          medical_genetics_genomics: {
            id: "onboarding.health_department.medical_genetics_genomics",
            defaultMessage: "Medical Genetics & Genomics",
          },
          nuclear_medicine: { id: "onboarding.health_department.nuclear_medicine", defaultMessage: "Nuclear Medicine" },
          nephrology: { id: "onboarding.health_department.nephrology", defaultMessage: "Nephrology" },
          neurosurgery: { id: "onboarding.health_department.neurosurgery", defaultMessage: "Neurosurgery" },
          occupational_environmental_medicine: {
            id: "onboarding.health_department.occupational_environmental_medicine",
            defaultMessage: "Occupational & Environmental Medicine",
          },
          osteopathic_neuromusculoskeletal_medicine: {
            id: "onboarding.health_department.osteopathic_neuromusculoskeletal_medicine",
            defaultMessage: "Osteopathic Neuromusculoskeletal Medicine",
          },
          ophthalmology: { id: "onboarding.health_department.ophthalmology", defaultMessage: "Ophthalmology" },
          otolaryngology: { id: "onboarding.health_department.otolaryngology", defaultMessage: "Otolaryngology (ENT)" },
          physical_medicine_rehabilitation: {
            id: "onboarding.health_department.physical_medicine_rehabilitation",
            defaultMessage: "Physical Medicine & Rehabilitation",
          },
          plastic_surgery: { id: "onboarding.health_department.plastic_surgery", defaultMessage: "Plastic Surgery" },
          pulmonology: { id: "onboarding.health_department.pulmonology", defaultMessage: "Pulmonology" },
          preventive_medicine: {
            id: "onboarding.health_department.preventive_medicine",
            defaultMessage: "Preventive Medicine",
          },
          rheumatology: { id: "onboarding.health_department.rheumatology", defaultMessage: "Rheumatology" },
          radiation_oncology: {
            id: "onboarding.health_department.radiation_oncology",
            defaultMessage: "Radiation Oncology",
          },
          thoracic_surgery: { id: "onboarding.health_department.thoracic_surgery", defaultMessage: "Thoracic Surgery" },
          urology: { id: "onboarding.health_department.urology", defaultMessage: "Urology" },
          vascular_surgery: { id: "onboarding.health_department.vascular_surgery", defaultMessage: "Vascular Surgery" },
          bedside_rn: {
            id: "onboarding.health_department.bedside_rn",
            defaultMessage: "Bedside RN (Med-Surg/ED/Peri-op)",
          },
          icu_rn: { id: "onboarding.health_department.icu_rn", defaultMessage: "ICU RN" },
          outpatient_clinic_rn: {
            id: "onboarding.health_department.outpatient_clinic_rn",
            defaultMessage: "Outpatient / Clinic RN",
          },
          nurse_manager_charge_nurse: {
            id: "onboarding.health_department.nurse_manager_charge_nurse",
            defaultMessage: "Nurse Manager / Charge Nurse",
          },
          clinical_nurse_specialist: {
            id: "onboarding.health_department.clinical_nurse_specialist",
            defaultMessage: "Clinical Nurse Specialist (CNS / APN)",
          },
          case_management_care_coordination: {
            id: "onboarding.health_department.case_management_care_coordination",
            defaultMessage: "Case Management / Care Coordination",
          },
          physical_therapist: {
            id: "onboarding.health_department.physical_therapist",
            defaultMessage: "Physical Therapist (PT)",
          },
          occupational_therapist: {
            id: "onboarding.health_department.occupational_therapist",
            defaultMessage: "Occupational Therapist (OT)",
          },
          speech_language_pathologist: {
            id: "onboarding.health_department.speech_language_pathologist",
            defaultMessage: "Speech-Language Pathologist (SLP)",
          },
          respiratory_therapist_role: {
            id: "onboarding.health_department.respiratory_therapist_role",
            defaultMessage: "Respiratory Therapist",
          },
          pharmacist_role: { id: "onboarding.health_department.pharmacist_role", defaultMessage: "Pharmacist" },
          psychologist: { id: "onboarding.health_department.psychologist", defaultMessage: "Psychologist" },
          dietitian: { id: "onboarding.health_department.dietitian", defaultMessage: "Dietitian" },
          social_worker: { id: "onboarding.health_department.social_worker", defaultMessage: "Social Worker" },
          medical_assistant: {
            id: "onboarding.health_department.medical_assistant",
            defaultMessage: "Medical Assistant",
          },
          imaging_radiology_tech: {
            id: "onboarding.health_department.imaging_radiology_tech",
            defaultMessage: "Imaging / Radiology Tech",
          },
          lab_path_tech: { id: "onboarding.health_department.lab_path_tech", defaultMessage: "Lab / Path Tech" },
          cardiac_neuro_tech: {
            id: "onboarding.health_department.cardiac_neuro_tech",
            defaultMessage: "Cardiac / Neuro Tech (EKG/EEG)",
          },
          undergraduate_student: {
            id: "onboarding.health_department.undergraduate_student",
            defaultMessage: "Undergraduate Student",
          },
          medical_student: { id: "onboarding.health_department.medical_student", defaultMessage: "Medical Student" },
          np_pa_student: { id: "onboarding.health_department.np_pa_student", defaultMessage: "NP / PA Student" },
          nursing_student: { id: "onboarding.health_department.nursing_student", defaultMessage: "Nursing Student" },
          allied_health_student: {
            id: "onboarding.health_department.allied_health_student",
            defaultMessage: "Allied Health Student (PT/OT/SLP)",
          },
          graduate_student: {
            id: "onboarding.health_department.graduate_student",
            defaultMessage: "Graduate Student (MPH/MS/PhD)",
          },
          unit_manager_department_admin: {
            id: "onboarding.health_department.unit_manager_department_admin",
            defaultMessage: "Unit Manager / Department Admin",
          },
          scheduling_front_desk: {
            id: "onboarding.health_department.scheduling_front_desk",
            defaultMessage: "Scheduling / Front Desk",
          },
          billing_finance_revenue_cycle: {
            id: "onboarding.health_department.billing_finance_revenue_cycle",
            defaultMessage: "Billing / Finance / Revenue Cycle",
          },
          it_informatics: { id: "onboarding.health_department.it_informatics", defaultMessage: "IT / Informatics" },
          hr: { id: "onboarding.health_department.hr", defaultMessage: "Human Resources (HR)" },
          support_guest_services: {
            id: "onboarding.health_department.support_guest_services",
            defaultMessage: "Support & Guest Services",
          },
          facilities_safety: {
            id: "onboarding.health_department.facilities_safety",
            defaultMessage: "Facilities & Safety",
          },
          leadership_executive: {
            id: "onboarding.health_department.leadership_executive",
            defaultMessage: "Leadership / Executive",
          },
          other_non_clinical_role: {
            id: "onboarding.health_department.other_non_clinical_role",
            defaultMessage: "Other Non-clinical Role",
          },
          principal_investigator_pi: {
            id: "onboarding.health_department.principal_investigator_pi",
            defaultMessage: "Principal Investigator (PI)",
          },
          study_coordinator: {
            id: "onboarding.health_department.study_coordinator",
            defaultMessage: "Study Coordinator",
          },
          clinical_research_nurse_crn: {
            id: "onboarding.health_department.clinical_research_nurse_crn",
            defaultMessage: "Clinical Research Nurse (CRN)",
          },
          data_manager: { id: "onboarding.health_department.data_manager", defaultMessage: "Data Manager" },
          regulatory_specialist: {
            id: "onboarding.health_department.regulatory_specialist",
            defaultMessage: "Regulatory Specialist",
          },
          biostatistician_data_scientist_analyst: {
            id: "onboarding.health_department.biostatistician_data_scientist_analyst",
            defaultMessage: "Biostatistician / Data Scientist / Analyst",
          },
          research_assistant_associate: {
            id: "onboarding.health_department.research_assistant_associate",
            defaultMessage: "Research Assistant / Associate",
          },
          other: { id: "onboarding.health_department.other", defaultMessage: "Other" },
        }),
      ).map(([e, t]) => ({ id: e, displayValue: t })),
      i = (0, a.YK)({
        physician: { id: "onboarding.health_role.physician", defaultMessage: "Physician" },
        np_pa: { id: "onboarding.health_role.np_pa", defaultMessage: "NP / PA" },
        registered_nurse: { id: "onboarding.health_role.registered_nurse", defaultMessage: "Registered Nurse" },
        allied_health_professional: {
          id: "onboarding.health_role.allied_health_professional",
          defaultMessage: "Allied Health Professional",
        },
        student: { id: "onboarding.health_role.student", defaultMessage: "Student" },
        admin_ops_non_clinical: {
          id: "onboarding.health_role.admin_ops_non_clinical",
          defaultMessage: "Administration / Operations / Non-clinical",
        },
        research: { id: "onboarding.health_role.research", defaultMessage: "Research" },
        other_clinical: { id: "onboarding.health_role.other_clinical", defaultMessage: "Other / Not Sure" },
      }),
      s = [
        { id: "physician", displayValue: i.physician },
        { id: "np_pa", displayValue: i.np_pa },
        { id: "registered_nurse", displayValue: i.registered_nurse },
        { id: "allied_health_professional", displayValue: i.allied_health_professional },
        { id: "student", displayValue: i.student },
        { id: "admin_ops_non_clinical", displayValue: i.admin_ops_non_clinical },
        { id: "research", displayValue: i.research },
        { id: "other_clinical", displayValue: i.other_clinical },
      ],
      l = {
        ...r.O,
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
        marketing: { id: "onboarding.departments.marketing", defaultMessage: "Marketing" },
        analytics: { id: "onboarding.departments.analytics", defaultMessage: "Data or Analytics" },
        product: { id: "onboarding.departments.product", defaultMessage: "Product Management" },
        comms: { id: "onboarding.departments.comms", defaultMessage: "Communications" },
        finance: { id: "onboarding.departments.finance", defaultMessage: "Finance or Accounting" },
        customer_experience: {
          id: "onboarding.departments.customer_experience",
          defaultMessage: "Customer Experience",
        },
        project_management: {
          id: "onboarding.departments.project_management",
          defaultMessage: "Project or Program Management",
        },
        engineering: { id: "onboarding.departments.engineering", defaultMessage: "Engineering" },
        education_professional: {
          id: "onboarding.departments.education_professional",
          defaultMessage: "Education Professional",
        },
        design: { id: "onboarding.departments.design", defaultMessage: "Design" },
        administrative: { id: "onboarding.departments.administrative", defaultMessage: "Administrative Assistant" },
        partnerships: { id: "onboarding.departments.partnerships", defaultMessage: "Partnerships" },
        it: { id: "onboarding.departments.it", defaultMessage: "Information Technology (IT)" },
        ops: { id: "onboarding.departments.ops", defaultMessage: "Operations" },
        human_resources: { id: "onboarding.departments.human_resources", defaultMessage: "Human Resources" },
        research: { id: "onboarding.departments.research", defaultMessage: "Research & Development" },
        sales: { id: "onboarding.departments.sales", defaultMessage: "Sales" },
        legal: { id: "onboarding.departments.legal", defaultMessage: "Legal" },
        healthcare: { id: "onboarding.departments.healthcare", defaultMessage: "Healthcare Professional" },
        other: { id: "onboarding.departments.other", defaultMessage: "Other" },
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
      ],
      u = [
        {
          id: "pharmacy",
          displayValue: (0, a.zR)({ id: "onboarding.health_role.choice_pharmacy", defaultMessage: "Pharmacy" }),
        },
        {
          id: "behavioral_health",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_behavioral_health",
            defaultMessage: "Behavioral health",
          }),
        },
        {
          id: "care_management_utilization_review",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_care_management_utilization_review",
            defaultMessage: "Care management & utilization review",
          }),
        },
        {
          id: "revenue_cycle_billing_claims",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_revenue_cycle_billing_claims",
            defaultMessage: "Revenue cycle, billing & claims",
          }),
        },
        {
          id: "quality_safety_regulatory",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_quality_safety_regulatory",
            defaultMessage: "Quality, safety & regulatory",
          }),
        },
        {
          id: "technology_business_corporate",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_technology_business_corporate",
            defaultMessage: "Technology, business & corporate functions",
          }),
        },
      ],
      p = [...s.slice(0, -1), ...u, ...s.slice(-1)]
    n.d(
      t,
      {},
      {
        $d: s,
        $f: p,
        Jj: i,
        P9: function (e) {
          let t = e?.trim()
          return t ? (p.find((e) => e.id === t)?.id ?? "other_clinical") : "physician"
        },
        _s: l,
        e1: d,
        jw: o,
      },
    )
  },
  BQjy(e, t, n) {
    var a = n("a6v3")
    function r() {
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
        SX: r,
        Sv: function (e) {
          let t
          if ("u" < typeof window || !r()) return !1
          let n = window,
            o = (0, a.$)(),
            i = btoa(JSON.stringify(e))
          if (/iPad|iPhone|iPod/.test(o)) {
            let a = n.webkit?.messageHandlers
            t = {
              enterprise_onboarding_complete: a?.onboardingComplete,
              hmp_workspace_created: a?.hmpWorkspaceCreated,
              hmp_verification_complete: a?.hmpVerificationComplete,
            }[e.type]
          } else
            /Android/.test(o) && (t = "enterprise_onboarding_complete" === e.type ? (n.openai ?? n.Android) : n.openai)
          return t?.postMessage != null && (t.postMessage(i), !0)
        },
        uG: function (e) {
          if ("u" < typeof window || !r()) return !1
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
      r = n("QosV"),
      o = n("on57"),
      i = n("iodE"),
      s = n("K4Cx"),
      l = n("T1PX")
    ;(n("V8uZ"),
      n.d(
        t,
        {},
        {
          P: function (e) {
            let t,
              n,
              c,
              d,
              u,
              p,
              m = (0, r.c)(16),
              { children: h, className: g } = e,
              f = (0, l.I)(),
              _ = (0, i.tF)()
            m[0] !== g ? ((t = (0, o.A)("flex w-full flex-col items-center", g)), (m[0] = g), (m[1] = t)) : (t = m[1])
            let b = !_
            ;(m[2] !== f ? ((n = !f && { opacity: 0, y: 7 }), (m[2] = f), (m[3] = n)) : (n = m[3]),
              m[4] === Symbol.for("react.memo_cache_sentinel") ? ((c = { opacity: 1, y: 0 }), (m[4] = c)) : (c = m[4]),
              m[5] !== f
                ? ((d = f ? { opacity: 1, y: 0 } : { opacity: 0, y: -7 }), (m[5] = f), (m[6] = d))
                : (d = m[6]))
            let y = 0.2 * !f
            return (
              m[7] !== y ? ((u = { duration: y }), (m[7] = y), (m[8] = u)) : (u = m[8]),
              m[9] !== h || m[10] !== t || m[11] !== b || m[12] !== n || m[13] !== d || m[14] !== u
                ? ((p = (0, a.jsx)(s.P.div, {
                    className: t,
                    inert: b,
                    initial: n,
                    animate: c,
                    exit: d,
                    transition: u,
                    children: h,
                  })),
                  (m[9] = h),
                  (m[10] = t),
                  (m[11] = b),
                  (m[12] = n),
                  (m[13] = d),
                  (m[14] = u),
                  (m[15] = p))
                : (p = m[15]),
              p
            )
          },
        },
      ))
  },
  Jgbh(e, t, n) {
    var a = n("SPnB"),
      r = n("Kwur")
    n.d(
      t,
      {},
      {
        M: async function (e) {
          let t = e.get(a.chatGptAuthenticatedAccountId$),
            n = e.get(a.o8)
          if (null != t && null != n)
            try {
              await r.Request.safePost("/onboarding/recommendations", {
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
  EPgc(e, t, n) {
    n.d(t, { OnboardingRoute: () => aP })
    var a = n("ABep"),
      r = n("QosV"),
      o = n("qmMi"),
      i = n("zd8w"),
      s = n("Wf1j"),
      l = n("oyxz"),
      c = n("Ywss"),
      d = n("SPnB"),
      u = n("UOa8"),
      p = n("YJm0"),
      m = n("g2p6"),
      h = n("jVlT"),
      g = n("Sm6l"),
      f = n("FrrB"),
      _ = n("Bbed"),
      b = n("zOE4"),
      y = n("OWtl"),
      x = n("OMIV"),
      C = n("a6v3"),
      w = n("UR81"),
      v = n("BQjy"),
      A = n("YnMP"),
      j = n("E8Sp"),
      S = n("yGJW"),
      k = n("qiCZ"),
      N = n("idGD"),
      M = n("Fcwd"),
      E = n("ASxG")
    let O = E.Ikc({ workspaceMemberOnboarding: E.Ikc({ accountId: E.YjP(), userId: E.YjP() }) })
    function I(e, t) {
      let n = O.safeParse(t)
      return (
        n.success &&
        n.data.workspaceMemberOnboarding.accountId === e.accountId &&
        n.data.workspaceMemberOnboarding.userId === e.userId
      )
    }
    var P = n("wP9i"),
      T = n("zPtR"),
      R = n("LA2j"),
      D = n("DBCl"),
      L = n("JAom"),
      G = n("CMv2"),
      F = n("pxeg"),
      W = n("hGHw"),
      B = n("OAko"),
      H = n("AGHv"),
      U = n("ecE5"),
      K = n("hZax"),
      V = n("fSd9"),
      q = n("YgvB"),
      $ = n("gSn1"),
      z = n("JNtf"),
      Z = n("HOLv"),
      Y = n("RNul"),
      J = n("IMIO"),
      Q = n("on57"),
      X = n("vkjh")
    function ee(e) {
      let t,
        n,
        o,
        i,
        s,
        l = (0, r.c)(14)
      ;(l[0] !== e.className
        ? ((t = (0, Q.A)("h-full w-full bg-surface-elevated text-default", e.className)),
          (l[0] = e.className),
          (l[1] = t))
        : (t = l[1]),
        l[2] !== e.onShown
          ? ((n = { "aria-describedby": void 0, onOpenAutoFocus: e.onShown, onEscapeKeyDown: et }),
            (l[2] = e.onShown),
            (l[3] = n))
          : (n = l[3]))
      let c = e.pageClassName ?? "m-auto flex w-full flex-col items-center gap-6 px-6 py-10 md:px-10"
      return (
        l[4] !== e.children || l[5] !== c
          ? ((o = (0, a.jsx)("div", { className: c, children: e.children })),
            (l[4] = e.children),
            (l[5] = c),
            (l[6] = o))
          : (o = l[6]),
        l[7] !== e.isBusy || l[8] !== o
          ? ((i = (0, a.jsx)("div", {
              className: "flex h-full flex-col overflow-y-auto select-none",
              "aria-busy": e.isBusy,
              children: o,
            })),
            (l[7] = e.isBusy),
            (l[8] = o),
            (l[9] = i))
          : (i = l[9]),
        l[10] !== t || l[11] !== n || l[12] !== i
          ? ((s = (0, a.jsx)(X.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsx)(z.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: t,
                contentProps: n,
                children: i,
              }),
            })),
            (l[10] = t),
            (l[11] = n),
            (l[12] = i),
            (l[13] = s))
          : (s = l[13]),
        s
      )
    }
    function et(e) {
      return e.preventDefault()
    }
    n("mmXj")
    var en = n("FvYa"),
      ea = n("bVeK"),
      er = n("F0xz")
    function eo(e) {
      let t,
        n,
        o,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        y,
        x = (0, r.c)(62),
        { item: C, isBundle: w, selected: v, onSelect: A } = e,
        { app: j, connected: S, canConnect: k, teammateCount: N } = C,
        M = (0, s.A)(),
        E = (0, i.useId)()
      x[0] !== j.name || x[1] !== S || x[2] !== M
        ? ((t = S
            ? M.formatMessage(
                {
                  id: "chatgpt.onboarding.new_workspace.connectors.app.connected",
                  defaultMessage: "{appName} is connected",
                },
                { appName: j.name },
              )
            : M.formatMessage(
                { id: "chatgpt.onboarding.new_workspace.connectors.app.connect", defaultMessage: "Connect {appName}" },
                { appName: j.name },
              )),
          (x[0] = j.name),
          (x[1] = S),
          (x[2] = M),
          (x[3] = t))
        : (t = x[3])
      let O = t
      ;(x[4] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a.jsx)(ea.HUG, {})), (x[4] = n)) : (n = x[4]),
        x[5] !== j
          ? ((o = (0, a.jsx)(en.R, { className: "size-6", alt: "", appInfo: j, preferRemote: !0, fallback: n })),
            (x[5] = j),
            (x[6] = o))
          : (o = x[6]))
      let I = o
      if (w) {
        let e,
          t,
          n,
          r,
          o,
          i,
          s = S ? "div" : "label",
          c = S ? void 0 : E,
          d = S || !k ? "cursor-default" : "cursor-interaction"
        return (
          x[7] !== d
            ? ((e = (0, Q.A)(
                "flex min-h-24 min-w-0 flex-col justify-between gap-5 rounded-lg border border-default bg-surface p-3",
                d,
              )),
              (x[7] = d),
              (x[8] = e))
            : (e = x[8]),
          x[9] !== I
            ? ((t = (0, a.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                "aria-hidden": "true",
                children: I,
              })),
              (x[9] = I),
              (x[10] = t))
            : (t = x[10]),
          x[11] !== j.id || x[12] !== k || x[13] !== S || x[14] !== O || x[15] !== A || x[16] !== v || x[17] !== E
            ? ((n = S
                ? (0, a.jsxs)("span", {
                    className:
                      "inline-flex min-w-0 items-center gap-1 text-[13px] leading-[18px] font-normal tracking-[-0.08px] text-secondary",
                    children: [
                      (0, a.jsx)(ea.yIE, { className: "hidden sm:block" }),
                      (0, a.jsx)("span", {
                        className: "min-w-0 break-words",
                        children: (0, a.jsx)(l.A, {
                          id: "chatgpt.onboarding.recommended_connector.bundle.app.connected",
                          defaultMessage: "Connected",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)(er.l, { id: E, name: j.id, ariaLabel: O, checked: v, disabled: !k, onChange: A })),
              (x[11] = j.id),
              (x[12] = k),
              (x[13] = S),
              (x[14] = O),
              (x[15] = A),
              (x[16] = v),
              (x[17] = E),
              (x[18] = n))
            : (n = x[18]),
          x[19] !== t || x[20] !== n
            ? ((r = (0, a.jsxs)("span", { className: "flex items-center justify-between gap-2", children: [t, n] })),
              (x[19] = t),
              (x[20] = n),
              (x[21] = r))
            : (r = x[21]),
          x[22] !== j.name
            ? ((o = (0, a.jsx)("span", {
                className: "text-base leading-[26px] break-words sm:line-clamp-1",
                children: j.name,
              })),
              (x[22] = j.name),
              (x[23] = o))
            : (o = x[23]),
          x[24] !== s || x[25] !== r || x[26] !== o || x[27] !== c || x[28] !== e
            ? ((i = (0, a.jsxs)(s, { htmlFor: c, className: e, children: [r, o] })),
              (x[24] = s),
              (x[25] = r),
              (x[26] = o),
              (x[27] = c),
              (x[28] = e),
              (x[29] = i))
            : (i = x[29]),
          i
        )
      }
      let P = S || !k,
        T = S || !k ? "cursor-default" : "cursor-interaction hover:bg-secondary-ghost-hover"
      ;(x[30] !== T
        ? ((c = (0, Q.A)(
            "flex min-h-[114px] min-w-0 flex-col gap-3 rounded-lg border border-default bg-surface p-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden",
            T,
          )),
          (x[30] = T),
          (x[31] = c))
        : (c = x[31]),
        x[32] !== k || x[33] !== S || x[34] !== A
          ? ((d = () => {
              !S && k && A()
            }),
            (x[32] = k),
            (x[33] = S),
            (x[34] = A),
            (x[35] = d))
          : (d = x[35]),
        x[36] !== I
          ? ((u = (0, a.jsx)("span", {
              className: "flex size-6 shrink-0 items-center justify-center",
              "aria-hidden": "true",
              children: I,
            })),
            (x[36] = I),
            (x[37] = u))
          : (u = x[37]))
      let R = S ? "bg-info-solid text-info-solid" : "bg-surface-tertiary text-secondary"
      return (
        x[38] !== R
          ? ((p = (0, Q.A)("flex size-7 shrink-0 items-center justify-center rounded-full", R)),
            (x[38] = R),
            (x[39] = p))
          : (p = x[39]),
        x[40] !== S
          ? ((m = S ? (0, a.jsx)(ea.yIE, {}) : (0, a.jsx)(ea.xFs, {})), (x[40] = S), (x[41] = m))
          : (m = x[41]),
        x[42] !== p || x[43] !== m
          ? ((h = (0, a.jsx)("span", { className: p, "aria-hidden": "true", children: m })),
            (x[42] = p),
            (x[43] = m),
            (x[44] = h))
          : (h = x[44]),
        x[45] !== h || x[46] !== u
          ? ((g = (0, a.jsxs)("span", {
              className: "flex w-full items-center justify-between gap-2",
              children: [u, h],
            })),
            (x[45] = h),
            (x[46] = u),
            (x[47] = g))
          : (g = x[47]),
        x[48] !== j.name
          ? ((f = (0, a.jsx)("span", {
              className: "text-base leading-[26px] break-words sm:line-clamp-1",
              children: j.name,
            })),
            (x[48] = j.name),
            (x[49] = f))
          : (f = x[49]),
        x[50] !== N
          ? ((_ =
              N >= 5 &&
              (0, a.jsxs)("span", {
                className:
                  "flex min-w-0 items-center gap-2 text-[13px] leading-[18px] tracking-[-0.08px] text-secondary",
                children: [
                  (0, a.jsx)(ea.oJq, {}),
                  (0, a.jsx)("span", {
                    className: "min-w-0 break-words sm:truncate",
                    children: (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.new_workspace.connectors.app.teammates",
                      defaultMessage: "{count, plural, one {# teammate} other {# teammates}}",
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
        x[55] !== O || x[56] !== g || x[57] !== b || x[58] !== P || x[59] !== c || x[60] !== d
          ? ((y = (0, a.jsxs)("button", {
              type: "button",
              "aria-label": O,
              "aria-disabled": P,
              className: c,
              onClick: d,
              children: [g, b],
            })),
            (x[55] = O),
            (x[56] = g),
            (x[57] = b),
            (x[58] = P),
            (x[59] = c),
            (x[60] = d),
            (x[61] = y))
          : (y = x[61]),
        y
      )
    }
    var ei = n.p + "assets/0f02295bd35e.svg",
      es = n("HhHp"),
      el = n("xFFv"),
      ec = n("DYWj"),
      ed = n.p + "assets/value-preview-background.3ecd93bf59.png"
    function eu(e) {
      let t,
        n,
        o,
        i,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f = (0, r.c)(20),
        { provider: _ } = e,
        b = (0, s.A)(),
        y = "google" === _
      f[0] !== y
        ? ((t = y ? (0, a.jsx)(es.A, { className: "h-3 w-3" }) : (0, a.jsx)(el.A, { className: "h-3 w-3" })),
          (f[0] = y),
          (f[1] = t))
        : (t = f[1])
      let x = t
      f[2] !== y
        ? ((n = y
            ? (0, a.jsx)("img", { src: ei, alt: "", className: "h-[8.75px] w-[11px]" })
            : (0, a.jsx)(ec.A, { className: "h-3 w-3" })),
          (f[2] = y),
          (f[3] = n))
        : (n = f[3])
      let C = n
      return (
        f[4] !== b
          ? ((o = b.formatMessage({
              id: "chatgpt.onboarding.new_workspace.connectors_preview.image.description",
              defaultMessage: "An example of ChatGPT answering a project launch question using connected work apps.",
            })),
            (f[4] = b),
            (f[5] = o))
          : (o = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("img", {
              src: ed,
              alt: "",
              width: 400,
              height: 592,
              className: "pointer-events-none absolute inset-0 h-full w-full object-cover dark:opacity-60",
            })),
            (f[6] = i))
          : (i = f[6]),
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)("div", {
              className:
                "max-w-full self-end rounded-3xl bg-[light-dark(var(--blue-50),var(--blue-800))] px-4 py-2.5 text-end text-[light-dark(var(--blue-500),var(--blue-50))]",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.question",
                defaultMessage: "When is Project Horizon launching?",
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
                    values: {
                      roadmap: (e) => (0, a.jsx)(ep, { icon: x, children: e }),
                      update: (e) => (0, a.jsx)(ep, { icon: C, children: e }),
                    },
                  })
                : (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_lead.default",
                    defaultMessage:
                      "The <roadmap>Project Horizon roadmap in Notion</roadmap> and the <update>latest launch update in Slack</update> show that the project is moving through staged rollout planning. The current plan calls for a small pilot in September, followed by a broader launch in October.",
                    values: {
                      roadmap: (e) => (0, a.jsx)(ep, { icon: x, children: e }),
                      update: (e) => (0, a.jsx)(ep, { icon: C, children: e }),
                    },
                  }),
            })),
            (f[8] = y),
            (f[9] = x),
            (f[10] = C),
            (f[11] = d))
          : (d = f[11]),
        f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)("p", {
              className:
                "w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.58),rgba(0,0,0,0.18))] pe-3 pt-1 text-wrap",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_details",
                defaultMessage:
                  "Before the pilot begins, the team still needs to validate permission mapping, complete the security review, and confirm rollout readiness. October remains the working target, but the date hasn\u2019t been committed.",
              }),
            })),
            (f[12] = u))
          : (u = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)("p", {
              className:
                "w-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.11),transparent)] pe-3 pt-1 text-wrap",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_conclusion",
                defaultMessage:
                  "I\u2019d plan around an October launch, with some schedule risk if the September pilot surfaces issues. The next checkpoint is the pilot readiness review later this month.",
              }),
            })),
            (f[13] = p))
          : (p = f[13]),
        f[14] !== d
          ? ((m = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className:
                "absolute inset-x-8 top-16 bottom-16 overflow-hidden rounded-xl bg-linear-to-b from-surface to-surface/0",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-start gap-3 p-5 text-sm leading-5 font-normal tracking-[-0.15px] text-default",
                children: [c, d, u, p],
              }),
            })),
            (f[14] = d),
            (f[15] = m))
          : (m = f[15]),
        f[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 rounded-[20px] border border-default",
            })),
            (f[16] = h))
          : (h = f[16]),
        f[17] !== o || f[18] !== m
          ? ((g = (0, a.jsxs)("div", {
              role: "img",
              "aria-label": o,
              className: "relative aspect-[25/37] w-full overflow-hidden rounded-[20px] bg-surface",
              children: [i, m, h],
            })),
            (f[17] = o),
            (f[18] = m),
            (f[19] = g))
          : (g = f[19]),
        g
      )
    }
    function ep(e) {
      let t,
        n,
        o,
        i,
        s = (0, r.c)(8),
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
          ? ((o = (0, a.jsx)(ea.$3V, { "aria-hidden": "true", className: "ms-1 inline-block align-[-1px]" })),
            (s[4] = o))
          : (o = s[4]),
        s[5] !== t || s[6] !== n
          ? ((i = (0, a.jsxs)("span", { children: [t, n, o] })), (s[5] = t), (s[6] = n), (s[7] = i))
          : (i = s[7]),
        i
      )
    }
    var em = "surface-Jsw_hz"
    function eh(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        A,
        j,
        S,
        k,
        N,
        M,
        E,
        O,
        I,
        P,
        T,
        R,
        D = (0, r.c)(106)
      D[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (D[0] = t)) : (t = D[0])
      let [L, G] = (0, i.useState)(t)
      if (D[1] !== L || D[2] !== e) {
        let t, r, i, A, j, S, k, N
        ;(D[20] !== L
          ? ((t = (e) => {
              let { app: t, connected: n, canConnect: a } = e
              return !n && a && !L.includes(t.id)
            }),
            (D[20] = L),
            (D[21] = t))
          : (t = D[21]),
          (d = e.apps.filter(t).map(eb)),
          D[22] !== e.apps ? ((r = e.apps.length > 0 && e.apps.every(e_)), (D[22] = e.apps), (D[23] = r)) : (r = D[23]),
          (s = r))
        let M = "google" === e.provider ? "Google" : "Microsoft"
        D[24] !== e.apps ? ((i = Math.max(0, ...e.apps.map(ef))), (D[24] = e.apps), (D[25] = i)) : (i = D[25])
        let E = i
        ;(D[26] !== s || D[27] !== e.provider || D[28] !== M
          ? ((A =
              null == e.provider || s
                ? (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors.button.continue",
                    defaultMessage: "Continue to workspace",
                  })
                : (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.recommended_connector.bundle.button.connect",
                    defaultMessage: "Connect to {providerBrandName}",
                    values: { providerBrandName: M },
                  })),
            (D[26] = s),
            (D[27] = e.provider),
            (D[28] = M),
            (D[29] = A))
          : (A = D[29]),
          (c = A),
          (o = ee),
          (v = em),
          (p = "flex min-h-full w-full px-4 py-8 sm:px-6"),
          (m = e.isLoading || e.isPreparing),
          (h = e.onShown),
          (n = J.P),
          (w = "m-auto"),
          (C = "grid w-full max-w-[848px] grid-cols-1 items-center gap-12 lg:grid-cols-2"),
          (u = "mx-auto flex w-full max-w-[400px] flex-col items-center gap-8"),
          D[30] !== e.provider
            ? ((j =
                null != e.provider &&
                (0, a.jsxs)("div", {
                  className: "inline-flex items-center gap-1 text-[13px] leading-[18px] font-medium text-info",
                  children: [
                    (0, a.jsx)(Z.I, { asset: $.i }),
                    (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.recommended_connector.admin_approval.label",
                      defaultMessage: "Approved by your admin",
                    }),
                  ],
                })),
              (D[30] = e.provider),
              (D[31] = j))
            : (j = D[31]),
          D[32] !== e.provider || D[33] !== M || D[34] !== E
            ? ((S = (0, a.jsx)(z.L3, {
                className: "text-2xl leading-7 font-semibold",
                children:
                  null == e.provider
                    ? (0, a.jsx)(l.A, {
                        id: "chatgpt.onboarding.new_workspace.connectors.title",
                        defaultMessage: "Connect your work to ChatGPT",
                      })
                    : (0, a.jsx)(a.Fragment, {
                        children:
                          E >= 5
                            ? (0, a.jsx)(l.A, {
                                id: "chatgpt.onboarding.recommended_connector.bundle.title.with_teammates",
                                defaultMessage:
                                  "{count, plural, one {Join # teammate already using {providerBrandName} tools in ChatGPT} other {Join # teammates already using {providerBrandName} tools in ChatGPT}}",
                                values: { count: E, providerBrandName: M },
                              })
                            : (0, a.jsx)(l.A, {
                                id: "chatgpt.onboarding.recommended_connector.bundle.title.without_teammates",
                                defaultMessage: "Connect your {providerBrandName} tools to ChatGPT",
                                values: { providerBrandName: M },
                              }),
                      }),
              })),
              (D[32] = e.provider),
              (D[33] = M),
              (D[34] = E),
              (D[35] = S))
            : (S = D[35]),
          D[36] !== e.provider
            ? ((k =
                null == e.provider &&
                (0, a.jsx)("p", {
                  className: "text-base leading-[26px]",
                  children: (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors.subtitle",
                    defaultMessage: "Choose from the apps approved for your workspace.",
                  }),
                })),
              (D[36] = e.provider),
              (D[37] = k))
            : (k = D[37]),
          D[38] !== S || D[39] !== k
            ? ((N = (0, a.jsxs)("div", { className: "flex w-full flex-col gap-3 text-center", children: [S, k] })),
              (D[38] = S),
              (D[39] = k),
              (D[40] = N))
            : (N = D[40]),
          D[41] !== j || D[42] !== N
            ? ((f = (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center gap-3 text-center",
                children: [j, N],
              })),
              (D[41] = j),
              (D[42] = N),
              (D[43] = f))
            : (f = D[43]),
          D[44] !== e.hasError || D[45] !== e.onRetry
            ? ((_ =
                e.hasError &&
                (0, a.jsxs)("div", {
                  role: "alert",
                  className: "flex flex-col items-center gap-3 text-center",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceMemberOnboarding.connectors.loadError",
                        defaultMessage: "Your workspace apps couldn\u2019t be loaded",
                      }),
                    }),
                    (0, a.jsx)(g.$, {
                      type: "button",
                      color: "secondary",
                      onClick: e.onRetry,
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceMemberOnboarding.connectors.retry",
                        defaultMessage: "Try again",
                      }),
                    }),
                  ],
                })),
              (D[44] = e.hasError),
              (D[45] = e.onRetry),
              (D[46] = _))
            : (_ = D[46]),
          D[47] !== e.hasError || D[48] !== e.isLoading
            ? ((b =
                !e.hasError &&
                e.isLoading &&
                (0, a.jsxs)("div", {
                  role: "status",
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsx)(Y.y, {}),
                    (0, a.jsx)(l.A, {
                      id: "workspaceMemberOnboarding.connectors.loading",
                      defaultMessage: "Loading your workspace apps\u2026",
                    }),
                  ],
                })),
              (D[47] = e.hasError),
              (D[48] = e.isLoading),
              (D[49] = b))
            : (b = D[49]),
          D[50] !== e.apps.length || D[51] !== e.hasError || D[52] !== e.isLoading
            ? ((y =
                !e.hasError &&
                !e.isLoading &&
                0 === e.apps.length &&
                (0, a.jsx)("p", {
                  className: "text-center text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "workspaceMemberOnboarding.connectors.empty",
                    defaultMessage: "There are no apps to connect right now",
                  }),
                })),
              (D[50] = e.apps.length),
              (D[51] = e.hasError),
              (D[52] = e.isLoading),
              (D[53] = y))
            : (y = D[53]),
          (x =
            !e.hasError &&
            !e.isLoading &&
            e.apps.length > 0 &&
            (0, a.jsx)("div", {
              className: "grid w-full grid-cols-2 gap-3",
              children: e.apps.map((t) =>
                (0, a.jsx)(
                  eo,
                  {
                    item: t,
                    isBundle: null != e.provider,
                    selected: d.includes(t.app.id),
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
          (D[4] = o),
          (D[5] = s),
          (D[6] = c),
          (D[7] = d),
          (D[8] = u),
          (D[9] = p),
          (D[10] = m),
          (D[11] = h),
          (D[12] = f),
          (D[13] = _),
          (D[14] = b),
          (D[15] = y),
          (D[16] = x),
          (D[17] = C),
          (D[18] = w),
          (D[19] = v))
      } else
        ((n = D[3]),
          (o = D[4]),
          (s = D[5]),
          (c = D[6]),
          (d = D[7]),
          (u = D[8]),
          (p = D[9]),
          (m = D[10]),
          (h = D[11]),
          (f = D[12]),
          (_ = D[13]),
          (b = D[14]),
          (y = D[15]),
          (x = D[16]),
          (C = D[17]),
          (w = D[18]),
          (v = D[19]))
      ;(D[54] !== s ||
      D[55] !== e.apps ||
      D[56] !== e.hasError ||
      D[57] !== e.isLoading ||
      D[58] !== e.isPreparing ||
      D[59] !== e.provider ||
      D[60] !== d
        ? ((A =
            e.isLoading ||
            e.isPreparing ||
            e.hasError ||
            (null != e.provider ? !s && 0 === d.length : e.apps.length > 0 && !e.apps.some(eg))),
          (D[54] = s),
          (D[55] = e.apps),
          (D[56] = e.hasError),
          (D[57] = e.isLoading),
          (D[58] = e.isPreparing),
          (D[59] = e.provider),
          (D[60] = d),
          (D[61] = A))
        : (A = D[61]),
        D[62] !== s || D[63] !== e || D[64] !== d
          ? ((j = () => (null == e.provider || s ? e.onContinue() : e.onConnect(d))),
            (D[62] = s),
            (D[63] = e),
            (D[64] = d),
            (D[65] = j))
          : (j = D[65]),
        D[66] !== c || D[67] !== e.isPreparing
          ? ((S = e.isPreparing
              ? (0, a.jsx)(l.A, {
                  id: "chatgpt.onboarding.recommended_connector.bundle.button.preparing",
                  defaultMessage: "Preparing\u2026",
                })
              : c),
            (D[66] = c),
            (D[67] = e.isPreparing),
            (D[68] = S))
          : (S = D[68]),
        D[69] !== e.isPreparing || D[70] !== A || D[71] !== j || D[72] !== S
          ? ((k = (0, a.jsx)(g.$, {
              type: "button",
              color: "primary",
              size: "beaconAction",
              radius: "full",
              loading: e.isPreparing,
              disabled: A,
              onClick: j,
              children: S,
            })),
            (D[69] = e.isPreparing),
            (D[70] = A),
            (D[71] = j),
            (D[72] = S),
            (D[73] = k))
          : (k = D[73]),
        D[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors.button.skip",
              defaultMessage: "Skip for now",
            })),
            (D[74] = N))
          : (N = D[74]),
        D[75] !== e.isPreparing || D[76] !== e.onSkip
          ? ((M = (0, a.jsx)(g.$, {
              type: "button",
              color: "ghostActive",
              size: "beaconAction",
              radius: "full",
              disabled: e.isPreparing,
              onClick: e.onSkip,
              children: N,
            })),
            (D[75] = e.isPreparing),
            (D[76] = e.onSkip),
            (D[77] = M))
          : (M = D[77]),
        D[78] !== k || D[79] !== M
          ? ((E = (0, a.jsxs)("div", { className: "flex flex-col items-center gap-3", children: [k, M] })),
            (D[78] = k),
            (D[79] = M),
            (D[80] = E))
          : (E = D[80]),
        D[81] !== u || D[82] !== E || D[83] !== f || D[84] !== _ || D[85] !== b || D[86] !== y || D[87] !== x
          ? ((O = (0, a.jsxs)("section", { className: u, children: [f, _, b, y, x, E] })),
            (D[81] = u),
            (D[82] = E),
            (D[83] = f),
            (D[84] = _),
            (D[85] = b),
            (D[86] = y),
            (D[87] = x),
            (D[88] = O))
          : (O = D[88]))
      let F = e.provider ?? void 0
      return (
        D[89] !== F
          ? ((I = (0, a.jsx)("div", {
              className: "hidden w-full lg:block",
              children: (0, a.jsx)(eu, { provider: F }),
            })),
            (D[89] = F),
            (D[90] = I))
          : (I = D[90]),
        D[91] !== O || D[92] !== I || D[93] !== C
          ? ((P = (0, a.jsxs)("div", { className: C, children: [O, I] })),
            (D[91] = O),
            (D[92] = I),
            (D[93] = C),
            (D[94] = P))
          : (P = D[94]),
        D[95] !== n || D[96] !== P || D[97] !== w
          ? ((T = (0, a.jsx)(n, { className: w, children: P })), (D[95] = n), (D[96] = P), (D[97] = w), (D[98] = T))
          : (T = D[98]),
        D[99] !== o || D[100] !== p || D[101] !== m || D[102] !== h || D[103] !== T || D[104] !== v
          ? ((R = (0, a.jsx)(o, { className: v, pageClassName: p, isBusy: m, onShown: h, children: T })),
            (D[99] = o),
            (D[100] = p),
            (D[101] = m),
            (D[102] = h),
            (D[103] = T),
            (D[104] = v),
            (D[105] = R))
          : (R = D[105]),
        R
      )
    }
    function eg(e) {
      let { connected: t } = e
      return t
    }
    function ef(e) {
      let { teammateCount: t } = e
      return t
    }
    function e_(e) {
      let { connected: t } = e
      return t
    }
    function eb(e) {
      let { app: t } = e
      return t.id
    }
    let ey = "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED"
    function ex(e) {
      let { id: t } = e
      return t
    }
    function eC() {}
    function ew(e) {
      let { id: t } = e
      return t
    }
    function ev(e) {
      let t,
        n,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        x,
        C,
        w,
        v,
        A,
        j,
        k,
        M,
        E,
        O,
        I = (0, r.c)(94),
        P = (0, o.gh)(y.u),
        W = (0, K.AS)()
      I[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (I[0] = t)) : (t = I[0])
      let { data: H } = (0, B.YL)(void 0, t),
        { markAppConnectOAuthPending: q, openPendingAppConnectPopup: $ } = (0, L.ZN)(),
        z = (0, i.useRef)(null)
      ;(I[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => () => z.current?.()), (s = []), (I[1] = n), (I[2] = s))
        : ((n = I[1]), (s = I[2])),
        (0, i.useEffect)(n, s))
      let Z = (0, i.useRef)(!1)
      I[3] === Symbol.for("react.memo_cache_sentinel") ? ((l = new Set()), (I[3] = l)) : (l = I[3])
      let Y = (0, i.useRef)(l),
        J = "google" === e.provider ? G._k : F.zd,
        Q =
          null == e.provider
            ? void 0
            : (e.apps.find((e) => {
                let { app: t, connected: n, canConnect: a, supportsDirectOAuth: r } = e
                return (
                  J.some((e) => {
                    let { connectorId: n } = e
                    return (
                      n === t.id &&
                      ("connector_5f3c8c41a1e54ad7a76272c89e2554fa" === n ||
                        "connector_1e4f6a44acf14e3ca1d96672f8c945bc" === n)
                    )
                  }) &&
                  (n || (a && r))
                )
              }) ??
              e.apps.find((e) => {
                let { app: t, connected: n, canConnect: a, supportsDirectOAuth: r } = e
                return (
                  J.some((e) => {
                    let { connectorId: n } = e
                    return n === t.id
                  }) &&
                  (n || (a && r))
                )
              })),
        X = []
      if (null != Q) {
        let t = Q.app.id
        if ("google" === e.provider) {
          let e = (0, G.W9)({ planType: H?.plan_type, connectorId: t, statsigClient: W })
          X = e.some((e) => {
            let { connectorId: n } = e
            return n === t
          })
            ? e.map(eT)
            : [t]
        } else X = (0, F.Vk)({ planType: H?.plan_type, connectorId: t, statsigClient: W }) ? [t, ...(0, F.HD)(t)] : [t]
      }
      let ee = (null == e.provider ? [] : V.Gy[e.provider]).flatMap((t) => {
          let n = e.apps.find((e) => {
            let { app: n } = e
            return n.id === t
          })
          return null != n && X.includes(t) && (n.connected || (n.canConnect && n.supportsDirectOAuth)) ? [n] : []
        }),
        et = null != Q && ee.length > 0 ? e.provider : null,
        en = null == et ? [...e.apps].sort(eP).slice(0, 6) : ee,
        [ea, er] = (0, i.useState)(null),
        [eo, ei] = (0, i.useState)(!1),
        es = null != et && !eo && en.length > 0 && en.every(eI),
        { isRefreshing: el, onContinue: ec } = e
      ;(I[4] !== el || I[5] !== ec || I[6] !== es
        ? ((d = () => {
            if (!es || el) return
            let e = !1
            return (
              queueMicrotask(() => {
                e || ec()
              }),
              () => {
                e = !0
              }
            )
          }),
          (c = [el, ec, es]),
          (I[4] = el),
          (I[5] = ec),
          (I[6] = es),
          (I[7] = c),
          (I[8] = d))
        : ((c = I[7]), (d = I[8])),
        (0, i.useEffect)(d, c),
        I[9] !== et || I[10] !== ea
          ? ((u =
              null == ea
                ? void 0
                : {
                    connectorId: ea.primary.app.id,
                    productSku: "CONNECTOR_SETTING",
                    oauthReferrer: "workspace_onboarding",
                    redirectAfter: null == et ? "/onboarding" : "/",
                    oauthPresentation: null == et ? "popup" : void 0,
                  }),
            (I[9] = et),
            (I[10] = ea),
            (I[11] = u))
          : (u = I[11]))
      let ed = u
      I[12] !== Q || I[13] !== e.isEnterprise || I[14] !== et
        ? ((p =
            null == Q || null == et || null == e.isEnterprise
              ? null
              : {
                  connectorProvider: et,
                  connectorId: Q.app.id,
                  connectorName: Q.app.name,
                  isEnterprise: e.isEnterprise,
                  onboardingExperience: ey,
                }),
          (I[12] = Q),
          (I[13] = e.isEnterprise),
          (I[14] = et),
          (I[15] = p))
        : (p = I[15])
      let eu = p
      ;(I[16] !== en || I[17] !== e.isEnterprise || I[18] !== et || I[19] !== P || I[20] !== es
        ? ((m = () => {
            if (!es && null != et && null != e.isEnterprise)
              for (let { app: t } of en)
                Y.current.has(t.id) ||
                  (Y.current.add(t.id),
                  (0, S.yy)(P, R.tT, {
                    connectorProvider: et,
                    connectorId: t.id,
                    connectorName: t.name,
                    isEnterprise: e.isEnterprise,
                    onboardingExperience: ey,
                  }))
          }),
          (h = [en, et, e.isEnterprise, P, es]),
          (I[16] = en),
          (I[17] = e.isEnterprise),
          (I[18] = et),
          (I[19] = P),
          (I[20] = es),
          (I[21] = m),
          (I[22] = h))
        : ((m = I[21]), (h = I[22])),
        (0, i.useEffect)(m, h),
        I[23] !== P
          ? ((g = (e, t) =>
              (0, S.yy)(P, R.ZX, {
                onboardingExperience: ey,
                action: e,
                connectorId: t,
                stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
              })),
            (I[23] = P),
            (I[24] = g))
          : (g = I[24]))
      let ep = g
      if (es) {
        let e
        return (
          I[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, { delay: !1 })), (I[25] = e))
            : (e = I[25]),
          e
        )
      }
      let em = et ?? "fallback",
        eg = null != et && ea?.consentShown === !1
      ;(I[26] !== en || I[27] !== ep || I[28] !== eu || I[29] !== e || I[30] !== P
        ? ((f = () => {
            ;(e.onShown(),
              !Z.current &&
                ((Z.current = !0),
                null != e.isEnterprise &&
                  (0, S.yy)(P, R.CI, {
                    connectorProvider: e.provider ?? "none",
                    hasRecommendation: null != e.provider,
                    isEnterprise: e.isEnterprise,
                    requestSucceeded: e.recommendationSucceeded,
                    onboardingExperience: ey,
                  }),
                null == eu &&
                  en.length > 0 &&
                  ep("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN")))
          }),
          (I[26] = en),
          (I[27] = ep),
          (I[28] = eu),
          (I[29] = e),
          (I[30] = P),
          (I[31] = f))
        : (f = I[31]),
        I[32] !== en ||
        I[33] !== ep ||
        I[34] !== eu ||
        I[35] !== Q ||
        I[36] !== e.identity ||
        I[37] !== P ||
        I[38] !== ea ||
        I[39] !== er ||
        I[40] !== ei
          ? ((_ = (t) => {
              if (null != ea || !(0, N.oA)(P, e.identity)) return
              let n = en.filter((e) => {
                  let { app: n, connected: a, canConnect: r } = e
                  return t.includes(n.id) && !a && r
                }),
                a =
                  n.find((e) => {
                    let { app: t } = e
                    return t.id === Q?.app.id
                  }) ?? n[0]
              if (null != a) {
                if (null != eu) {
                  let e = en.filter(eO).map(eE),
                    t = en.filter(eM).map(eN)
                  ;(0, S.yy)(P, R.nT, {
                    ...eu,
                    selectedConnectorIds: n.map(ek),
                    selectableConnectorIds: e,
                    alreadyConnectedConnectorIds: t,
                    selectedConnectorCount: (0, T.At)(n.length),
                    selectableConnectorCount: (0, T.At)(e.length),
                    alreadyConnectedConnectorCount: (0, T.At)(t.length),
                    allSelectableSelected: n.length === e.length,
                  })
                } else ep("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED", a.app.id)
                ;(ei(!0), er({ primary: a, companionIds: n.filter((e) => e !== a).map(eS), consentShown: !1 }))
              }
            }),
            (I[32] = en),
            (I[33] = ep),
            (I[34] = eu),
            (I[35] = Q),
            (I[36] = e.identity),
            (I[37] = P),
            (I[38] = ea),
            (I[39] = er),
            (I[40] = ei),
            (I[41] = _))
          : (_ = I[41]),
        I[42] !== ep || I[43] !== e || I[44] !== et
          ? ((x = () => {
              ;(null == et && ep("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
                e.onContinue())
            }),
            (I[42] = ep),
            (I[43] = e),
            (I[44] = et),
            (I[45] = x))
          : (x = I[45]),
        I[46] !== ep || I[47] !== eu || I[48] !== e || I[49] !== P
          ? ((C = () => {
              ;(null != eu
                ? (0, S.yy)(P, R.qo, eu)
                : ep("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
                e.onContinue())
            }),
            (I[46] = ep),
            (I[47] = eu),
            (I[48] = e),
            (I[49] = P),
            (I[50] = C))
          : (C = I[50]),
        I[51] !== en ||
        I[52] !== et ||
        I[53] !== em ||
        I[54] !== eg ||
        I[55] !== f ||
        I[56] !== _ ||
        I[57] !== x ||
        I[58] !== C
          ? ((w = (0, a.jsx)(
              eh,
              {
                apps: en,
                provider: et,
                isLoading: !1,
                isPreparing: eg,
                hasError: !1,
                onShown: f,
                onConnect: _,
                onContinue: x,
                onSkip: C,
                onRetry: ej,
              },
              em,
            )),
            (I[51] = en),
            (I[52] = et),
            (I[53] = em),
            (I[54] = eg),
            (I[55] = f),
            (I[56] = _),
            (I[57] = x),
            (I[58] = C),
            (I[59] = w))
          : (w = I[59]))
      let ef = ea?.primary.app ?? null,
        e_ = null == et,
        eb = null == et ? void 0 : ea?.companionIds
      return (
        I[60] !== er
          ? ((v = () => {
              er(eA)
            }),
            (I[60] = er),
            (I[61] = v))
          : (v = I[61]),
        I[62] !== ed?.redirectAfter || I[63] !== e.identity || I[64] !== et
          ? ((A = () => ({
              returnTo: ed?.redirectAfter ?? "/",
              resumeTarget:
                null == et
                  ? {
                      kind: "return-to-location-state",
                      successState: { workspaceMemberOnboarding: e.identity },
                      failureState: { workspaceMemberOnboarding: e.identity },
                    }
                  : void 0,
            })),
            (I[62] = ed?.redirectAfter),
            (I[63] = e.identity),
            (I[64] = et),
            (I[65] = A))
          : (A = I[65]),
        I[66] !== ed || I[67] !== q || I[68] !== $ || I[69] !== e || I[70] !== et || I[71] !== P
          ? ((j = (t) => {
              if ((0, N.oA)(P, e.identity)) {
                if (null == q({ ...t, hostId: D.iwv, appConnectOptions: ed, returnTo: ed?.redirectAfter ?? "/" })) {
                  ;(t.preventNavigation?.(), t.preopenedPopup?.close())
                  return
                }
                null == et &&
                  null != t.preventNavigation &&
                  (t.preventNavigation(),
                  z.current?.(),
                  (z.current = $(
                    t.redirectUrl,
                    (t) => {
                      "success" === t.kind && e.onConnected()
                    },
                    t.preopenedPopup,
                  )))
              }
            }),
            (I[66] = ed),
            (I[67] = q),
            (I[68] = $),
            (I[69] = e),
            (I[70] = et),
            (I[71] = P),
            (I[72] = j))
          : (j = I[72]),
        I[73] !== e.beforeOAuth || I[74] !== e.identity || I[75] !== et || I[76] !== P
          ? ((k = null == et ? async () => (0, N.oA)(P, e.identity) : e.beforeOAuth),
            (I[73] = e.beforeOAuth),
            (I[74] = e.identity),
            (I[75] = et),
            (I[76] = P),
            (I[77] = k))
          : (k = I[77]),
        I[78] !== er
          ? ((M = (e) => {
              e || er(null)
            }),
            (I[78] = er),
            (I[79] = M))
          : (M = I[79]),
        I[80] !== ed ||
        I[81] !== e.onConnected ||
        I[82] !== ef ||
        I[83] !== e_ ||
        I[84] !== eb ||
        I[85] !== v ||
        I[86] !== A ||
        I[87] !== j ||
        I[88] !== k ||
        I[89] !== M
          ? ((E = (0, a.jsx)(U.Z, {
              app: ef,
              showLoadingDialog: e_,
              hostId: D.iwv,
              appConnectOptions: ed,
              initialSelectedCompanionConnectorIds: eb,
              postConnectSource: null,
              onConnected: e.onConnected,
              onConsentShown: v,
              getOAuthResumeContext: A,
              onOAuthStarted: j,
              beforeConnect: k,
              onOpenChange: M,
            })),
            (I[80] = ed),
            (I[81] = e.onConnected),
            (I[82] = ef),
            (I[83] = e_),
            (I[84] = eb),
            (I[85] = v),
            (I[86] = A),
            (I[87] = j),
            (I[88] = k),
            (I[89] = M),
            (I[90] = E))
          : (E = I[90]),
        I[91] !== w || I[92] !== E
          ? ((O = (0, a.jsxs)(a.Fragment, { children: [w, E] })), (I[91] = w), (I[92] = E), (I[93] = O))
          : (O = I[93]),
        O
      )
    }
    function eA(e) {
      return null == e ? null : { ...e, consentShown: !0 }
    }
    function ej() {}
    function eS(e) {
      let { app: t } = e
      return t.id
    }
    function ek(e) {
      let { app: t } = e
      return t.id
    }
    function eN(e) {
      let { app: t } = e
      return t.id
    }
    function eM(e) {
      let { connected: t } = e
      return t
    }
    function eE(e) {
      let { app: t } = e
      return t.id
    }
    function eO(e) {
      let { connected: t, canConnect: n } = e
      return !t && n
    }
    function eI(e) {
      let { connected: t } = e
      return t
    }
    function eP(e, t) {
      return t.teammateCount - e.teammateCount || Number(t.connected) - Number(e.connected)
    }
    function eT(e) {
      let { connectorId: t } = e
      return t
    }
    var eR = n("sv3Z"),
      eD = n("Ot7V"),
      eL = n("SLig"),
      eG = n("Jgbh"),
      eF = n("jZDY"),
      eW = n("TjgH"),
      eB = n("cLvX"),
      eH = n.p + "assets/desktop-preview.20845310b0.png"
    function eU(e) {
      let t,
        n,
        o,
        i,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        b,
        y = (0, r.c)(24),
        x = (0, s.A)(),
        C = e.onShown
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("img", { className: "mb-2 size-24", src: eB, alt: "", "aria-hidden": "true" })),
            (y[0] = t))
          : (t = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(eW.E, {
              variant: "tip",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.approved_by_admin",
                defaultMessage: "Approved by your admin",
              }),
            })),
            (y[1] = n))
          : (n = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(z.L3, {
              className: "text-3xl leading-9 font-semibold",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.title",
                defaultMessage: "Download the ChatGPT Desktop app",
              }),
            })),
            (y[2] = o))
          : (o = y[2]),
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("p", {
              className: "text-base leading-6 text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.description",
                defaultMessage:
                  "Use Chat and Codex side by side on your desktop to turn team ideas into docs, spreadsheets, presentations, and code",
              }),
            })),
            (y[3] = i))
          : (i = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.download_desktop_app",
              defaultMessage: "Download desktop app",
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
          ? ((u = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.maybe_later",
              defaultMessage: "Maybe later",
            })),
            (y[8] = u))
          : (u = y[8]),
        y[9] !== e.onContinue
          ? ((p = (0, a.jsx)(g.$, {
              size: "detailAction",
              radius: "full",
              color: "outlineGhost",
              onClick: e.onContinue,
              children: u,
            })),
            (y[9] = e.onContinue),
            (y[10] = p))
          : (p = y[10]),
        y[11] !== d || y[12] !== p
          ? ((m = (0, a.jsxs)("div", {
              className: "flex w-full max-w-xs flex-col items-center gap-5 justify-self-center text-center",
              children: [
                t,
                n,
                o,
                i,
                (0, a.jsxs)("div", { className: "mt-2 flex flex-col items-center gap-4", children: [d, p] }),
              ],
            })),
            (y[11] = d),
            (y[12] = p),
            (y[13] = m))
          : (m = y[13]),
        y[14] !== x
          ? ((h = x.formatMessage({
              id: "workspaceMemberOnboarding.desktopPreviewAlt",
              defaultMessage:
                "Codex prompt to analyze a dashboard in Sheets, create a summary in PowerPoint, and share it in Slack",
            })),
            (y[14] = x),
            (y[15] = h))
          : (h = y[15]),
        y[16] !== h
          ? ((f = (0, a.jsx)("img", {
              className: "hidden w-full rounded-3xl object-contain md:block",
              src: eH,
              alt: h,
            })),
            (y[16] = h),
            (y[17] = f))
          : (f = y[17]),
        y[18] !== f || y[19] !== m
          ? ((_ = (0, a.jsx)(J.P, {
              children: (0, a.jsxs)("div", {
                className: "grid w-full max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24",
                children: [m, f],
              }),
            })),
            (y[18] = f),
            (y[19] = m),
            (y[20] = _))
          : (_ = y[20]),
        y[21] !== e.onShown || y[22] !== _
          ? ((b = (0, a.jsx)(ee, { onShown: C, children: _ })), (y[21] = e.onShown), (y[22] = _), (y[23] = b))
          : (b = y[23]),
        b
      )
    }
    var eK = n("T4l2"),
      eV = n.n(eK),
      eq = n("qXUS")
    function e$(e) {
      let t,
        n,
        o = (0, r.c)(14),
        { options: i, value: s, fullWidthOption: l, disabled: c, onSelect: d } = e,
        u = void 0 !== c && c
      if (o[0] !== u || o[1] !== l || o[2] !== d || o[3] !== i || o[4] !== s) {
        let e
        ;(o[6] !== u || o[7] !== l || o[8] !== d || o[9] !== i.length || o[10] !== s
          ? ((e = (e) => {
              let t = e.id === l && i.length % 2 == 1
              return (0, a.jsxs)(
                g.$,
                {
                  className: (0, Q.A)("w-full", t && "sm:col-span-2 sm:justify-center"),
                  color: "surveyCard",
                  size: "surveyCard",
                  focusRing: "native",
                  type: "button",
                  "aria-pressed": s === e.id,
                  disabled: u,
                  onClick: () => d(e.id),
                  children: [
                    e.icon,
                    (0, a.jsx)("span", {
                      className: (0, Q.A)("flex-1 text-start", t && "sm:flex-none sm:text-center"),
                      children: e.label,
                    }),
                    s === e.id ? (0, a.jsx)(ea.hEG, {}) : null,
                  ],
                },
                e.id,
              )
            }),
            (o[6] = u),
            (o[7] = l),
            (o[8] = d),
            (o[9] = i.length),
            (o[10] = s),
            (o[11] = e))
          : (e = o[11]),
          (t = i.map(e)),
          (o[0] = u),
          (o[1] = l),
          (o[2] = d),
          (o[3] = i),
          (o[4] = s),
          (o[5] = t))
      } else t = o[5]
      return (
        o[12] !== t
          ? ((n = (0, a.jsx)("div", {
              className:
                "mx-auto grid min-h-0 flex-1 grid-cols-1 justify-items-center gap-3 overflow-x-hidden overflow-y-auto pb-4 sm:w-128 sm:grid-cols-2",
              children: t,
            })),
            (o[12] = t),
            (o[13] = n))
          : (n = o[13]),
        n
      )
    }
    var ez = n("GFe9"),
      eZ = (e) =>
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
    let eY = {
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
      data_science: (0, a.jsx)(ea.sBI, {}),
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
      design: (0, a.jsx)(ea.aRI, {}),
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
      people_hr: (0, a.jsx)(eZ, { className: "icon-base shrink-0", "aria-hidden": !0 }),
      legal: (0, a.jsx)(ea._NU, {}),
      something_else: (0, a.jsx)(Z.I, { asset: eq.O }),
    }
    function eJ(e) {
      let t,
        n,
        o,
        i,
        s,
        c,
        d = (0, r.c)(13)
      return (
        d[0] !== e.onShown
          ? ((t = { "aria-describedby": void 0, onOpenAutoFocus: e.onShown, onEscapeKeyDown: eX }),
            (d[0] = e.onShown),
            (d[1] = t))
          : (t = d[1]),
        d[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(z.L3, {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.role.new.question",
                defaultMessage: "What kind of work do you do?",
              }),
            })),
            (d[2] = n))
          : (n = d[2]),
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                n,
                (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.role.new.selectOne",
                    defaultMessage: "Select the option that best applies",
                  }),
                }),
              ],
            })),
            (d[3] = o))
          : (o = d[3]),
        d[4] !== e.roles ? ((i = e.roles.map(eQ)), (d[4] = e.roles), (d[5] = i)) : (i = d[5]),
        d[6] !== e.onSelect || d[7] !== e.selectedRole || d[8] !== i
          ? ((s = (0, a.jsx)("div", {
              className: "flex h-full max-h-full flex-col select-none",
              children: (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden",
                children: (0, a.jsx)(J.P, {
                  className:
                    "max-h-full min-h-0 justify-between self-center overflow-hidden max-sm:h-full max-sm:px-6 max-sm:pt-10 max-sm:pb-5 sm:max-w-175",
                  children: (0, a.jsxs)("div", {
                    className: "flex min-h-0 w-full flex-1 flex-col",
                    children: [
                      o,
                      (0, a.jsx)(e$, {
                        options: i,
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
            (d[8] = i),
            (d[9] = s))
          : (s = d[9]),
        d[10] !== t || d[11] !== s
          ? ((c = (0, a.jsx)(X.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsx)(z.lG, {
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
    function eQ(e) {
      return { id: e, label: (0, a.jsx)(l.A, { ...ez.V[e] }), icon: eY[e] }
    }
    function eX(e) {
      return e.preventDefault()
    }
    function e1() {}
    function e0() {
      return [
        ...eV()([
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
    let e2 = (0, k.n)(P.E, {
      initialAnswers: { role: null },
      getContext: (e, t) => {
        let { identity: n, planType: a, showDesktopDownload: r } = e.getOwnValue(P.E)
        return { identity: n, planType: a, showDesktopDownload: r, ...t }
      },
      initialStep: (e) => e.getOwnValue(P.E).initialStep,
      steps: {
        role: {
          component: function (e) {
            let t,
              n,
              s,
              l = (0, r.c)(10),
              { context: c, onContinue: d } = e,
              u = (0, o.gh)(P.E),
              p = (0, i.useRef)(!1),
              [m] = (0, i.useState)(e0),
              h = c.role ?? void 0
            return (
              l[0] !== c.identity || l[1] !== u
                ? ((t = () => {
                    p.current ||
                      ((p.current = !0),
                      (0, q.nx)(u, c.identity).catch(e1),
                      (0, S.yy)(u, A.JY, { stepType: "Role" }),
                      (0, S.yy)(u, R.ZX, {
                        onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
                        action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                        stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE",
                      }))
                  }),
                  (l[0] = c.identity),
                  (l[1] = u),
                  (l[2] = t))
                : (t = l[2]),
              l[3] !== d ? ((n = (e) => void d({ role: e })), (l[3] = d), (l[4] = n)) : (n = l[4]),
              l[5] !== m || l[6] !== h || l[7] !== t || l[8] !== n
                ? ((s = (0, a.jsx)(eJ, { roles: m, selectedRole: h, onShown: t, onSelect: n })),
                  (l[5] = m),
                  (l[6] = h),
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
              : ((0, S.yy)(n, A.R5, { role: e.role }),
                (0, M.R)(n, e.identity, e.role).catch(() => {}),
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
              u = (0, r.c)(21),
              p = (0, o.gh)(y.u),
              m = (0, i.useRef)(!1),
              h = (0, eF.I)()
            u[0] !== h ? ((t = (0, eL.W)(h)), (u[0] = h), (u[1] = t)) : (t = u[1])
            let { platform: g, url: f } = t,
              _ = e.context.role ?? void 0,
              b = "engineering" === e.context.role
            u[2] !== _ || u[3] !== b
              ? ((n = { role: _, isEngineering: b, isChatgptDesktopAppCopy: !0 }), (u[2] = _), (u[3] = b), (u[4] = n))
              : (n = u[4])
            let x = n
            return (
              u[5] !== x || u[6] !== p
                ? ((s = () => {
                    m.current ||
                      ((m.current = !0),
                      (0, S.yy)(p, A.JY, { stepType: "2" }),
                      (0, S.yy)(p, R.ZX, {
                        onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
                        action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                        stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP",
                      }),
                      (0, S.yy)(p, A.se, x))
                  }),
                  (u[5] = x),
                  (u[6] = p),
                  (u[7] = s))
                : (s = u[7]),
              u[8] !== x || u[9] !== f || u[10] !== g || u[11] !== e || u[12] !== p
                ? ((l = (t) => {
                    ;((0, eG.M)(p),
                      (0, eD.PQ)({
                        event: t,
                        href: f,
                        initiator: "external_link",
                        disposition: "other" === g ? "new-tab" : "current-tab",
                      }),
                      (0, S.yy)(p, A.tx, x),
                      (0, S.yy)(p, eR.I_, { surface: "workspace_onboarding", action: "download" }),
                      e.onContinue())
                  }),
                  (u[8] = x),
                  (u[9] = f),
                  (u[10] = g),
                  (u[11] = e),
                  (u[12] = p),
                  (u[13] = l))
                : (l = u[13]),
              u[14] !== e ? ((c = () => void e.onContinue()), (u[14] = e), (u[15] = c)) : (c = u[15]),
              u[16] !== f || u[17] !== s || u[18] !== l || u[19] !== c
                ? ((d = (0, a.jsx)(eU, { downloadUrl: f, onShown: s, onDownload: l, onContinue: c })),
                  (u[16] = f),
                  (u[17] = s),
                  (u[18] = l),
                  (u[19] = c),
                  (u[20] = d))
                : (d = u[20]),
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
              u,
              p,
              m = (0, r.c)(47),
              { context: h, onContinue: g } = e,
              f = (0, o.gh)(P.E),
              { identity: _, planType: b } = h,
              y = null
            ;(0, H.isEnterpriseClientPlan)(b) && "hc" !== b && "hc_consumption" !== b && "finserv" !== b
              ? (y = !0)
              : (0, w.Hw)(b) && (y = !1)
            let x = (0, i.useRef)(!1),
              { data: C, isError: v, isFetching: j, retry: k } = (0, o._U)(q.sd, _)
            ;(m[0] !== C ? ((t = C?.map(ew) ?? []), (m[0] = C), (m[1] = t)) : (t = m[1]),
              m[2] !== _ || m[3] !== t
                ? ((n = { identity: _, appIds: t }), (m[2] = _), (m[3] = t), (m[4] = n))
                : (n = m[4]))
            let { data: E, isError: O, isFetching: I, refetch: T } = (0, o._U)(q.$l, n),
              { data: D, isPending: L, isError: G, isFetching: F } = (0, o._U)(W.Q, _),
              { data: B } = (0, o._U)(q.Ip, _),
              U = v || O,
              K = !U && (null == C || (C.length > 0 && null == E) || L)
            m[5] !== E || m[6] !== C || m[7] !== B
              ? ((s = null != C && (0 === C.length || null != E) ? (0, V.AQ)(C, E ?? [], B) : []),
                (m[5] = E),
                (m[6] = C),
                (m[7] = B),
                (m[8] = s))
              : (s = m[8])
            let $ = s,
              z = null == y ? null : (D ?? null)
            m[9] !== f
              ? ((l = () => {
                  x.current ||
                    ((x.current = !0),
                    (0, S.yy)(f, A.JY, { stepType: "1" }),
                    (0, S.yy)(f, R.ZX, {
                      onboardingExperience: ey,
                      action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                      stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
                    }))
                }),
                (m[9] = f),
                (m[10] = l))
              : (l = m[10])
            let Z = l
            if (K || U) {
              let e, t, n, r, o
              return (
                m[11] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (m[11] = e)) : (e = m[11]),
                m[12] !== g
                  ? ((t = () => void g()), (n = () => void g()), (m[12] = g), (m[13] = t), (m[14] = n))
                  : ((t = m[13]), (n = m[14])),
                m[15] !== O || m[16] !== k || m[17] !== T
                  ? ((r = () => {
                      ;(k(), O && T())
                    }),
                    (m[15] = O),
                    (m[16] = k),
                    (m[17] = T),
                    (m[18] = r))
                  : (r = m[18]),
                m[19] !== U || m[20] !== K || m[21] !== Z || m[22] !== t || m[23] !== n || m[24] !== r
                  ? ((o = (0, a.jsx)(eh, {
                      apps: e,
                      provider: null,
                      isLoading: K,
                      hasError: U,
                      onShown: Z,
                      onConnect: eC,
                      onContinue: t,
                      onSkip: n,
                      onRetry: r,
                    })),
                    (m[19] = U),
                    (m[20] = K),
                    (m[21] = Z),
                    (m[22] = t),
                    (m[23] = n),
                    (m[24] = r),
                    (m[25] = o))
                  : (o = m[25]),
                o
              )
            }
            let Y = z ?? "fallback"
            m[26] !== g ? ((c = () => void g()), (m[26] = g), (m[27] = c)) : (c = m[27])
            let J = j || I || F
            m[28] !== h || m[29] !== f
              ? ((d = () => (0, M.x)(f, h)), (m[28] = h), (m[29] = f), (m[30] = d))
              : (d = m[30])
            let Q = !G
            return (
              m[31] !== _ || m[32] !== C || m[33] !== f
                ? ((u = async () => {
                    ;(0, N.oA)(f, _) && (await (0, q.sO)(f, { identity: _, appIds: C?.map(ex) ?? [] }))
                  }),
                  (m[31] = _),
                  (m[32] = C),
                  (m[33] = f),
                  (m[34] = u))
                : (u = m[34]),
              m[35] !== $ ||
              m[36] !== _ ||
              m[37] !== y ||
              m[38] !== Z ||
              m[39] !== z ||
              m[40] !== u ||
              m[41] !== Y ||
              m[42] !== c ||
              m[43] !== J ||
              m[44] !== d ||
              m[45] !== Q
                ? ((p = (0, a.jsx)(
                    ev,
                    {
                      identity: _,
                      isEnterprise: y,
                      onContinue: c,
                      isRefreshing: J,
                      beforeOAuth: d,
                      apps: $,
                      provider: z,
                      recommendationSucceeded: Q,
                      onShown: Z,
                      onConnected: u,
                    },
                    Y,
                  )),
                  (m[35] = $),
                  (m[36] = _),
                  (m[37] = y),
                  (m[38] = Z),
                  (m[39] = z),
                  (m[40] = u),
                  (m[41] = Y),
                  (m[42] = c),
                  (m[43] = J),
                  (m[44] = d),
                  (m[45] = Q),
                  (m[46] = p))
                : (p = m[46]),
              p
            )
          },
          next: "complete",
        },
      },
      onComplete: (e, t) => {
        ;((0, M.x)(e, t), (0, N.Jl)(e, t.identity), (0, j.oo)(e, e.get(N.Q$), { replace: !0 }))
      },
    })
    function e3(e) {
      let t,
        n,
        i,
        s = (0, r.c)(8),
        { identity: l, showDesktopDownload: d, planType: u } = e,
        p = I(l, (0, c.zy)().state) ? "apps" : "role"
      return (
        s[0] !== l || s[1] !== u || s[2] !== d || s[3] !== p
          ? ((t = { identity: l, showDesktopDownload: d, planType: u, initialStep: p }),
            (s[0] = l),
            (s[1] = u),
            (s[2] = d),
            (s[3] = p),
            (s[4] = t))
          : (t = s[4]),
        s[5] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a.jsx)(e4, {})), (s[5] = n)) : (n = s[5]),
        s[6] !== t
          ? ((i = (0, a.jsx)(o.Ui, { scope: P.E, value: t, children: n })), (s[6] = t), (s[7] = i))
          : (i = s[7]),
        i
      )
    }
    function e4() {
      let e,
        t,
        n,
        s,
        l = (0, r.c)(15),
        c = (0, o.gh)(P.E),
        d = (0, o.uO)(e2, void 0),
        u = (0, o.Ul)(d.state$),
        p = (0, o.Ul)(d.context$),
        m = (0, i.useRef)(null)
      if (
        (l[0] !== c
          ? ((e = () => {
              let e = new AbortController()
              m.current = e
              let t = c.watch((t) => {
                ;(0, N.oA)(t, t.getOwnValue(P.E).identity) || e.abort()
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
        (0, i.useEffect)(e, t),
        "complete" === u.status)
      ) {
        let e
        return (
          l[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, { delay: !1 })), (l[3] = e))
            : (e = l[3]),
          e
        )
      }
      let h = d.definition.steps[u.step].component,
        g = "pending" === u.status
      return (
        l[4] !== p || l[5] !== d || l[6] !== c || l[7] !== u
          ? ((n = async (e) => {
              let t = m.current?.signal
              null != t && (0, N.oA)(c, p.identity) && (await d.advance(u, e, t))
            }),
            (l[4] = p),
            (l[5] = d),
            (l[6] = c),
            (l[7] = u),
            (l[8] = n))
          : (n = l[8]),
        l[9] !== h || l[10] !== p || l[11] !== u.step || l[12] !== g || l[13] !== n
          ? ((s = (0, a.jsx)(h, { context: p, isAdvancePending: g, onContinue: n }, u.step)),
            (l[9] = h),
            (l[10] = p),
            (l[11] = u.step),
            (l[12] = g),
            (l[13] = n),
            (l[14] = s))
          : (s = l[14]),
        s
      )
    }
    var e5 = n("Qgfj"),
      e6 = n("Zzm6"),
      e8 = n("mBJV"),
      e7 = n("iRMi"),
      e9 = n("D015")
    function te(e, t, n) {
      ;(0, S.yy)(e, e7.CodexHealthWorkspaceOnboardingStepShown, { step: t, exampleStepIndex: (0, e9.At)(n) })
    }
    var tt = n("Kwur"),
      tn = n("rvFo")
    let ta = (0, o.vU)(y.u, ({ accountId: e, userId: t, role: n, department: a }) => ({
      queryKey: ["health-onboarding-examples", e, t, n, a],
      queryFn: async ({ signal: t }) => {
        let { examples: r } = await tt.Request.safePost("/onboarding/quorum/examples", {
          requestBody: { source: "onboarding", role: n, department: a },
          additionalHeaders: { "ChatGPT-Account-ID": e },
          signal: t,
        })
        return r.filter((e) => null != tr(e))
      },
      retry: !1,
      staleTime: tn.D.ONE_MINUTE,
    }))
    function tr(e) {
      let t = e.response.parts
      if (!t.every((e) => "string" == typeof e)) return null
      let n = t.join("")
      return n.trim().length > 0 ? n : null
    }
    var to = n("suct"),
      ti = n("K4Cx"),
      ts = n("ZtSy"),
      tl = n("T1PX"),
      tc = n("ENs9")
    function td(e) {
      let t,
        n,
        o,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        A,
        j,
        S,
        k = (0, r.c)(60),
        { values: N, options: M, disabled: E, onSelect: O, onContinue: I, onSkip: P } = e,
        T = void 0 !== E && E,
        R = (0, s.A)(),
        [D, L] = (0, i.useState)("")
      k[0] !== N ? ((t = new Set(N)), (k[0] = N), (k[1] = t)) : (t = k[1])
      let G = t
      if (
        (k[2] !== T || k[3] !== I || k[4] !== N.length
          ? ((n = (e) => {
              ;(e.preventDefault(), N.length > 0 && !T && I())
            }),
            (k[2] = T),
            (k[3] = I),
            (k[4] = N.length),
            (k[5] = n))
          : (n = k[5]),
        k[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.departments.question",
                defaultMessage: "Which departments apply to your work?",
              }),
            })),
            (k[6] = o))
          : (o = k[6]),
        k[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                o,
                (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.departments.selectAll",
                    defaultMessage: "Select all that apply",
                  }),
                }),
              ],
            })),
            (k[7] = c))
          : (c = k[7]),
        k[8] !== O ? ((d = () => O([])), (k[8] = O), (k[9] = d)) : (d = k[9]),
        k[10] !== R
          ? ((u = R.formatMessage({
              id: "work.onboarding.departments.searchLabel",
              defaultMessage: "Search departments",
            })),
            (k[10] = R),
            (k[11] = u))
          : (u = k[11]),
        k[12] !== R
          ? ((p = R.formatMessage({
              id: "work.onboarding.departments.searchPlaceholder",
              defaultMessage: "Search departments",
            })),
            (k[12] = R),
            (k[13] = p))
          : (p = k[13]),
        k[14] !== M || k[15] !== D)
      ) {
        let e
        ;(k[17] !== D
          ? ((e = (e) => e.label.toLocaleLowerCase().includes(D.toLocaleLowerCase())), (k[17] = D), (k[18] = e))
          : (e = k[18]),
          (m = M.filter(e)),
          (k[14] = M),
          (k[15] = D),
          (k[16] = m))
      } else m = k[16]
      if (k[19] !== M || k[20] !== G) {
        let e
        ;(k[22] !== G ? ((e = (e) => G.has(e.id)), (k[22] = G), (k[23] = e)) : (e = k[23]),
          (h = M.filter(e)),
          (k[19] = M),
          (k[20] = G),
          (k[21] = h))
      } else h = k[21]
      ;(k[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, a.jsx)(l.A, { id: "health.onboarding.noDepartments", defaultMessage: "No departments found" })),
          (k[24] = f))
        : (f = k[24]),
        k[25] !== O || k[26] !== G || k[27] !== N
          ? ((_ = (e) => O(G.has(e.id) ? N.filter((t) => t !== e.id) : [...N, e.id])),
            (k[25] = O),
            (k[26] = G),
            (k[27] = N),
            (k[28] = _))
          : (_ = k[28]),
        k[29] !== O || k[30] !== N
          ? ((b = (e) => O(N.filter((t) => t !== e.id))), (k[29] = O), (k[30] = N), (k[31] = b))
          : (b = k[31]),
        k[32] !== R
          ? ((y = (e) =>
              R.formatMessage(
                { id: "health.onboarding.removeDepartment", defaultMessage: "Remove {department}" },
                { department: e.label },
              )),
            (k[32] = R),
            (k[33] = y))
          : (y = k[33]),
        k[34] !== T ||
        k[35] !== D ||
        k[36] !== G ||
        k[37] !== h ||
        k[38] !== _ ||
        k[39] !== b ||
        k[40] !== y ||
        k[41] !== d ||
        k[42] !== u ||
        k[43] !== p ||
        k[44] !== m
          ? ((x = (0, a.jsx)(tc.X, {
              variant: "select",
              onClearSelection: d,
              ariaLabel: u,
              placeholder: p,
              disabled: T,
              query: D,
              options: m,
              selectedOptions: h,
              selectedOptionIds: G,
              showSuggestionsOnFocus: !0,
              showLoadingDropdown: !1,
              emptyMessage: f,
              onQueryChange: L,
              onSelectOption: _,
              onRemoveOption: b,
              getRemoveLabel: y,
            })),
            (k[34] = T),
            (k[35] = D),
            (k[36] = G),
            (k[37] = h),
            (k[38] = _),
            (k[39] = b),
            (k[40] = y),
            (k[41] = d),
            (k[42] = u),
            (k[43] = p),
            (k[44] = m),
            (k[45] = x))
          : (x = k[45]))
      let F = 0 === N.length || T
      return (
        k[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(l.A, { id: "health.onboarding.next", defaultMessage: "Next" })), (k[46] = C))
          : (C = k[46]),
        k[47] !== F
          ? ((w = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", disabled: F, children: C })),
            (k[47] = F),
            (k[48] = w))
          : (w = k[48]),
        k[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(l.A, { id: "health.onboarding.skip", defaultMessage: "Skip" })), (k[49] = v))
          : (v = k[49]),
        k[50] !== T || k[51] !== P
          ? ((A = (0, a.jsx)(g.$, {
              color: "ghostActive",
              size: "beaconAction",
              disabled: T,
              onClick: P,
              children: v,
            })),
            (k[50] = T),
            (k[51] = P),
            (k[52] = A))
          : (A = k[52]),
        k[53] !== w || k[54] !== A
          ? ((j = (0, a.jsxs)("div", { className: "mt-4 flex flex-col gap-2 sm:gap-3", children: [w, A] })),
            (k[53] = w),
            (k[54] = A),
            (k[55] = j))
          : (j = k[55]),
        k[56] !== x || k[57] !== j || k[58] !== n
          ? ((S = (0, a.jsxs)("form", {
              className: "flex w-full flex-col sm:w-140 lg:w-170",
              onSubmit: n,
              children: [c, x, j],
            })),
            (k[56] = x),
            (k[57] = j),
            (k[58] = n),
            (k[59] = S))
          : (S = k[59]),
        S
      )
    }
    var tu = n("Gjet"),
      tp = n("H3J8"),
      tm = n("NtST"),
      th = n("ACoE"),
      tg = n("O5pN"),
      tf = n("osar"),
      t_ = n("enVv"),
      tb = n("Z4o7"),
      ty = n("UxN3")
    function tx(e) {
      let t,
        n,
        o,
        i,
        c,
        d,
        u,
        p,
        m = (0, r.c)(10),
        h = (0, s.A)()
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(tf.r.Input, {
              layout: "single-line",
              children: (0, a.jsx)(tg.U, {
                singleLine: !0,
                children: (0, a.jsx)("div", {
                  className: "text-tertiary opacity-[var(--composer-editor-placeholder-opacity,0.5)] select-none",
                  children: (0, a.jsx)(l.A, {
                    id: "health.onboarding.examples.composer.placeholder",
                    defaultMessage: "Message ChatGPT",
                  }),
                }),
              }),
            })),
            (m[0] = t))
          : (t = m[0]),
        m[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(ty.b5, { className: "text-default", icon: { 16: ea.D8j, 20: ea.ssU } })), (m[1] = n))
          : (n = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(tf.r.FooterInlineControls, {
              gap: "normal",
              children: (0, a.jsx)(tf.r.FooterAction, {
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
                      }),
                    }),
                  ],
                }),
              }),
            })),
            (m[2] = o))
          : (o = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(tf.r.FooterExpandingControls, {
              children: (0, a.jsx)(tf.r.FooterAction, {
                children: (0, a.jsx)(g.$, {
                  className: "min-w-0",
                  color: "ghost",
                  size: "composer",
                  children: (0, a.jsx)(th.m, {
                    categoryLabel: null,
                    collapse: "none",
                    foreground: "primary",
                    icon: null,
                    indicator: "chevron",
                    selectedValue: (0, a.jsx)(l.A, {
                      id: "health.onboarding.examples.composer.auto",
                      defaultMessage: "Auto",
                    }),
                  }),
                }),
              }),
            })),
            (m[3] = i))
          : (i = m[3]),
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(ty.b5, { className: "text-default", icon: { assets: { 16: tp.y, 20: tm.v } } })),
            (m[4] = c))
          : (c = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(tf.r.FooterAction, {
              children: (0, a.jsxs)(g.$, {
                color: "ghost",
                size: "composer",
                uniform: !0,
                children: [
                  c,
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(l.A, { id: "composer.dictation.aria", defaultMessage: "Dictate" }),
                  }),
                ],
              }),
            })),
            (m[5] = d))
          : (d = m[5]),
        m[6] !== h
          ? ((u = h.formatMessage({
              id: "health.onboarding.examples.composer.voice",
              defaultMessage: "Start voice chat",
            })),
            (m[6] = h),
            (m[7] = u))
          : (u = m[7]),
        m[8] !== u
          ? ((p = (0, a.jsx)(tf.r, {
              inert: !0,
              layout: "single-line",
              radiusVariant: "single-line",
              children: (0, a.jsx)(tf.r.Body, {
                layout: "single-line",
                children: (0, a.jsx)(tf.r.AdaptiveFooter, {
                  input: t,
                  layout: "single-line",
                  leadingControls: o,
                  trailingControls: (0, a.jsxs)(tf.r.FooterControls, {
                    layout: "single-line",
                    children: [
                      i,
                      (0, a.jsxs)(tf.r.FooterActions, {
                        children: [
                          d,
                          (0, a.jsx)(tf.r.FooterAction, { children: (0, a.jsx)(t_.f, { ariaLabel: u, Icon: tb.C }) }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })),
            (m[8] = u),
            (m[9] = p))
          : (p = m[9]),
        p
      )
    }
    var tC = n("wDWo"),
      tw = n("B3ke"),
      tv = n("y5H2"),
      tA = n("mRLe"),
      tj = n("WAdu"),
      tS = n("lA5q"),
      tk = n("dMLa"),
      tN = n("TUMj"),
      tM = n("IQg5")
    function tE(e) {
      let t,
        n,
        o = (0, r.c)(5),
        { item: i, markdownDirectives: s } = e
      return (
        o[0] !== s ? ((t = { [tS.Z5]: tO, ...s }), (o[0] = s), (o[1] = t)) : (t = o[1]),
        o[2] !== i || o[3] !== t
          ? ((n = (0, a.jsx)(tk.O, {
              item: i,
              markdownDirectives: t,
              browserConversationId: null,
              conversationId: "local-chatgpt:onboarding-example",
              cwd: null,
              hostId: "local",
              trackShownImpressions: !1,
            })),
            (o[2] = i),
            (o[3] = t),
            (o[4] = n))
          : (n = o[4]),
        n
      )
    }
    function tO(e) {
      let t,
        n,
        o = (0, r.c)(7),
        s = (0, i.useId)(),
        l = (0, tN.Rn)(),
        c = l?.contentReferences,
        d = l?.isStreaming ?? !1
      return (
        o[0] !== s
          ? ((t = () => (e) => {
              let { renderView: t } = e
              return t({ editorKey: s })
            }),
            (o[0] = s),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== e || o[3] !== c || o[4] !== d || o[5] !== t
          ? ((n = (0, a.jsx)(tM.WritingBlockDirectiveRenderer, {
              ...e,
              contentReferences: c,
              isStreaming: d,
              renderExtension: t,
              testId: "onboarding-writing-block",
            })),
            (o[2] = e),
            (o[3] = c),
            (o[4] = d),
            (o[5] = t),
            (o[6] = n))
          : (n = o[6]),
        n
      )
    }
    function tI(e) {
      let t,
        n,
        o,
        s,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        g = (0, r.c)(37),
        { prompt: f, answer: _, contentReferences: b, exampleIndex: y, animate: x, AnswerComponent: C } = e,
        w = void 0 === C ? tE : C,
        v = (0, tl.I)(),
        [A, j] = (0, i.useState)(!1),
        [S, k] = (0, i.useState)(0),
        N = (void 0 === x || x) && !v
      g[0] !== _ || g[1] !== N || g[2] !== S
        ? ((t = N ? _.slice(0, S) : _), (g[0] = _), (g[1] = N), (g[2] = S), (g[3] = t))
        : (t = g[3])
      let M = t,
        E = M.length < _.length
      g[4] !== b || g[5] !== E || g[6] !== M.length
        ? ((n = E
            ? b.filter(
                (e) =>
                  "number" == typeof e.start_idx &&
                  Number.isInteger(e.start_idx) &&
                  e.start_idx >= 0 &&
                  e.start_idx < M.length,
              )
            : b),
          (g[4] = b),
          (g[5] = E),
          (g[6] = M.length),
          (g[7] = n))
        : (n = g[7])
      let O = n
      g[8] !== E || g[9] !== O || g[10] !== M
        ? ((o = (0, tC.vu)(
            { content: { content_type: "text", parts: [M] }, metadata: { content_references: O } },
            { isStreaming: E },
          )),
          (g[8] = E),
          (g[9] = O),
          (g[10] = M),
          (g[11] = o))
        : (o = g[11])
      let I = o
      if (g[12] !== y || g[13] !== O) {
        let e
        ;(g[15] !== y ? ((e = () => `onboarding-example-${y}`), (g[15] = y), (g[16] = e)) : (e = g[16]),
          (s = O.map(e)),
          (g[12] = y),
          (g[13] = O),
          (g[14] = s))
      } else s = g[14]
      let P = !E
      g[17] !== I || g[18] !== O || g[19] !== s || g[20] !== P
        ? ((l = {
            type: "assistant-message",
            content: I,
            contentReferences: O,
            contentReferenceMessageIds: s,
            completed: P,
            phase: "final_answer",
            sentAtMs: null,
            structuredOutput: void 0,
          }),
          (g[17] = I),
          (g[18] = O),
          (g[19] = s),
          (g[20] = P),
          (g[21] = l))
        : (l = g[21])
      let T = l
      return (
        g[22] !== _.length || g[23] !== N
          ? ((d = () => {
              let e
              if (!N) return
              let t = 0,
                n = () => {
                  ;(k((t = Math.min(t + 10, _.length))), t < _.length && (e = setTimeout(n, 10)))
                }
              return (
                (e = setTimeout(() => {
                  ;(j(!0), (e = setTimeout(n, 100)))
                }, 500)),
                () => clearTimeout(e)
              )
            }),
            (c = [_.length, N]),
            (g[22] = _.length),
            (g[23] = N),
            (g[24] = c),
            (g[25] = d))
          : ((c = g[24]), (d = g[25])),
        (0, i.useEffect)(d, c),
        g[26] !== f || g[27] !== N || g[28] !== A
          ? ((u =
              !N || A
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(tw.m, { speaker: "user" }),
                      (0, a.jsx)(tv.R, {
                        message: f,
                        sentAtMs: null,
                        hideActions: !0,
                        isAeonFormatted: !1,
                        hostId: "local",
                      }),
                      (0, a.jsx)(tA.a, {}),
                    ],
                  })
                : null),
            (g[26] = f),
            (g[27] = N),
            (g[28] = A),
            (g[29] = u))
          : (u = g[29]),
        g[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(tw.m, { speaker: "assistant" })), (g[30] = p))
          : (p = g[30]),
        g[31] !== w || g[32] !== T
          ? ((m = (0, a.jsx)(w, { item: T })), (g[31] = w), (g[32] = T), (g[33] = m))
          : (m = g[33]),
        g[34] !== u || g[35] !== m
          ? ((h = (0, a.jsxs)(tj.c, { value: "restricted", children: [u, p, m] })),
            (g[34] = u),
            (g[35] = m),
            (g[36] = h))
          : (h = g[36]),
        h
      )
    }
    function tP(e) {
      let t,
        n,
        o,
        i,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        y = (0, r.c)(45),
        {
          title: x,
          subtitle: C,
          prompt: w,
          answer: v,
          contentReferences: A,
          exampleIndex: j,
          totalExamples: S,
          onNext: k,
          onSkip: N,
          animate: M,
          disabled: E,
          AnswerComponent: O,
        } = e,
        I = void 0 === M || M,
        P = void 0 !== E && E,
        T = (0, s.A)()
      ;(y[0] !== x
        ? ((t = (0, a.jsx)("h1", { className: "text-3xl leading-9 font-medium", children: x })), (y[0] = x), (y[1] = t))
        : (t = y[1]),
        y[2] !== C
          ? ((n = (0, a.jsx)("p", { className: "text-base text-secondary", children: C })), (y[2] = C), (y[3] = n))
          : (n = y[3]),
        y[4] !== t || y[5] !== n
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-4 text-center select-none", children: [t, n] })),
            (y[4] = t),
            (y[5] = n),
            (y[6] = o))
          : (o = y[6]))
      let R = o
      return (
        y[7] !== N ? ((i = () => N("desktop")), (y[7] = N), (y[8] = i)) : (i = y[8]),
        y[9] !== P || y[10] !== k || y[11] !== i
          ? ((l = (0, a.jsx)(tG, { disabled: P, onNext: k, onSkip: i })),
            (y[9] = P),
            (y[10] = k),
            (y[11] = i),
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
        y[16] !== T
          ? ((d = T.formatMessage({
              id: "onboarding.exampleTour.conversationLabel",
              defaultMessage: "Example ChatGPT conversation",
            })),
            (y[16] = T),
            (y[17] = d))
          : (d = y[17]),
        y[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)("div", { className: "hidden md:block", children: (0, a.jsx)(tx, {}) })),
            (p = { isWorking: !1 }),
            (y[18] = u),
            (y[19] = p))
          : ((u = y[18]), (p = y[19])),
        y[20] !== O || y[21] !== I || y[22] !== v || y[23] !== A || y[24] !== j || y[25] !== w
          ? ((m = (0, a.jsx)(tu.C, {
              autoLoadHistory: !1,
              footer: u,
              scrollToBottomButton: p,
              children: (0, a.jsx)("div", {
                className: "pointer-events-none flex min-h-full flex-col py-5",
                onClickCapture: tR,
                onKeyDownCapture: tT,
                children: (0, a.jsx)(tI, {
                  AnswerComponent: O,
                  prompt: w,
                  answer: v,
                  contentReferences: A,
                  exampleIndex: j,
                  animate: I,
                }),
              }),
            })),
            (y[20] = O),
            (y[21] = I),
            (y[22] = v),
            (y[23] = A),
            (y[24] = j),
            (y[25] = w),
            (y[26] = m))
          : (m = y[26]),
        y[27] !== m || y[28] !== d
          ? ((h = (0, a.jsx)("section", {
              className:
                "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-surface-elevated select-text md:rounded-4xl md:shadow-2xl",
              onWheel: tL,
              onTouchMove: tD,
              "aria-label": d,
              children: m,
            })),
            (y[27] = m),
            (y[28] = d),
            (y[29] = h))
          : (h = y[29]),
        y[30] !== j || y[31] !== N || y[32] !== S
          ? ((g = j < S - 1 ? () => N("mobile") : void 0), (y[30] = j), (y[31] = N), (y[32] = S), (y[33] = g))
          : (g = y[33]),
        y[34] !== P || y[35] !== k || y[36] !== g
          ? ((f = (0, a.jsx)(tG, { disabled: P, onNext: k, onSkip: g })),
            (y[34] = P),
            (y[35] = k),
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
        y[41] !== h || y[42] !== _ || y[43] !== c
          ? ((b = (0, a.jsxs)("div", {
              className: "relative flex h-full min-h-0 w-full flex-col gap-6 md:flex-row md:gap-0",
              children: [c, h, _],
            })),
            (y[41] = h),
            (y[42] = _),
            (y[43] = c),
            (y[44] = b))
          : (b = y[44]),
        b
      )
    }
    function tT(e) {
      ;("Enter" === e.key || " " === e.key) && (e.preventDefault(), e.stopPropagation())
    }
    function tR(e) {
      ;(e.preventDefault(), e.stopPropagation())
    }
    function tD(e) {
      return e.stopPropagation()
    }
    function tL(e) {
      return e.stopPropagation()
    }
    function tG(e) {
      let t,
        n,
        o,
        i,
        s = (0, r.c)(10),
        { disabled: c, onNext: d, onSkip: u } = e
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, { ...tF.next })), (s[0] = t))
          : (t = s[0]),
        s[1] !== c || s[2] !== d
          ? ((n = (0, a.jsx)(g.$, { size: "beaconAction", disabled: c, onClick: d, children: t })),
            (s[1] = c),
            (s[2] = d),
            (s[3] = n))
          : (n = s[3]),
        s[4] !== c || s[5] !== u
          ? ((o = u
              ? (0, a.jsx)(g.$, {
                  color: "ghost",
                  size: "beaconAction",
                  disabled: c,
                  onClick: u,
                  children: (0, a.jsx)(l.A, { ...tF.skipTour }),
                })
              : null),
            (s[4] = c),
            (s[5] = u),
            (s[6] = o))
          : (o = s[6]),
        s[7] !== n || s[8] !== o
          ? ((i = (0, a.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [n, o] })),
            (s[7] = n),
            (s[8] = o),
            (s[9] = i))
          : (i = s[9]),
        i
      )
    }
    let tF = (0, e5.YK)({
      next: { id: "onboarding.exampleTour.next", defaultMessage: "Next" },
      skipTour: { id: "onboarding.exampleTour.skip", defaultMessage: "Skip Tour" },
    })
    function tW(e) {
      let t,
        n,
        o,
        i,
        s,
        c,
        d = (0, r.c)(19),
        { value: u, options: p, disabled: m, onSelect: h, onSkip: f } = e,
        _ = void 0 !== m && m
      if (
        (d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.role.question",
                defaultMessage: "What's your primary role?",
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
                  }),
                }),
              ],
            })),
            (d[1] = n))
          : (n = d[1]),
        d[2] !== _ || d[3] !== h || d[4] !== p || d[5] !== u)
      ) {
        let e
        ;(d[7] !== _ || d[8] !== h || d[9] !== u
          ? ((e = (e) =>
              (0, a.jsxs)(
                g.$,
                {
                  className: "w-full",
                  color: u === e.id ? "secondary" : "ghostActive",
                  radius: "large",
                  size: "surveyOption",
                  "aria-pressed": u === e.id,
                  disabled: _,
                  onClick: () => h(e.id),
                  children: [
                    e.icon,
                    (0, a.jsx)("span", { className: "flex-1 text-start", children: e.label }),
                    u === e.id ? (0, a.jsx)(ea.hEG, {}) : null,
                  ],
                },
                e.id,
              )),
            (d[7] = _),
            (d[8] = h),
            (d[9] = u),
            (d[10] = e))
          : (e = d[10]),
          (o = p.map(e)),
          (d[2] = _),
          (d[3] = h),
          (d[4] = p),
          (d[5] = u),
          (d[6] = o))
      } else o = d[6]
      return (
        d[11] !== o
          ? ((i = (0, a.jsx)("div", { className: "flex flex-col gap-2", children: o })), (d[11] = o), (d[12] = i))
          : (i = d[12]),
        d[13] !== _ || d[14] !== f
          ? ((s =
              null == f
                ? null
                : (0, a.jsx)(g.$, {
                    color: "ghostActive",
                    size: "beaconAction",
                    disabled: _,
                    onClick: f,
                    children: (0, a.jsx)(l.A, { id: "health.onboarding.skip", defaultMessage: "Skip" }),
                  })),
            (d[13] = _),
            (d[14] = f),
            (d[15] = s))
          : (s = d[15]),
        d[16] !== i || d[17] !== s
          ? ((c = (0, a.jsxs)("div", { className: "flex max-w-full flex-col", children: [n, i, s] })),
            (d[16] = i),
            (d[17] = s),
            (d[18] = c))
          : (c = d[18]),
        c
      )
    }
    function tB(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        y = (0, r.c)(32),
        { onComplete: x } = e,
        C = (0, tl.I)(),
        w = null != x && !C
      y[0] !== x ? ((t = () => x?.()), (y[0] = x), (y[1] = t)) : (t = y[1])
      let v = (0, i.useEffectEvent)(t),
        A = null != x
      ;(y[2] !== v || y[3] !== A || y[4] !== C
        ? ((n = () => {
            if (!A) return
            let e = setTimeout(v, 3900 * !C)
            return () => {
              clearTimeout(e)
            }
          }),
          (y[2] = v),
          (y[3] = A),
          (y[4] = C),
          (y[5] = n))
        : (n = y[5]),
        y[6] !== A || y[7] !== C ? ((o = [A, C]), (y[6] = A), (y[7] = C), (y[8] = o)) : (o = y[8]),
        (0, i.useEffect)(n, o),
        y[9] !== w ? ((s = !!w && { opacity: 0, y: 10 }), (y[9] = w), (y[10] = s)) : (s = y[10]),
        y[11] === Symbol.for("react.memo_cache_sentinel") ? ((c = { opacity: 1, y: 0 }), (y[11] = c)) : (c = y[11]))
      let j = 0.5 * !!w,
        S = 0.4 * !!w
      ;(y[12] !== j || y[13] !== S
        ? ((d = { duration: j, delay: S }), (y[12] = j), (y[13] = S), (y[14] = d))
        : (d = y[14]),
        y[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(l.A, { id: "onboarding.tourLoading.greeting", defaultMessage: "Nice to meet you" })),
            (y[15] = u))
          : (u = y[15]),
        y[16] !== s || y[17] !== d
          ? ((p = (0, a.jsx)(ti.P.h1, { initial: s, animate: c, transition: d, children: u })),
            (y[16] = s),
            (y[17] = d),
            (y[18] = p))
          : (p = y[18]),
        y[19] !== w ? ((m = !!w && { opacity: 0, y: 10 }), (y[19] = w), (y[20] = m)) : (m = y[20]),
        y[21] === Symbol.for("react.memo_cache_sentinel") ? ((h = { opacity: 1, y: 0 }), (y[21] = h)) : (h = y[21]))
      let k = 0.5 * !!w,
        N = 1.5 * !!w
      return (
        y[22] !== k || y[23] !== N
          ? ((g = { duration: k, delay: N }), (y[22] = k), (y[23] = N), (y[24] = g))
          : (g = y[24]),
        y[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(l.A, {
              id: "onboarding.tourLoading.quickTour",
              defaultMessage: "Here's a quick tour\u2026",
            })),
            (y[25] = f))
          : (f = y[25]),
        y[26] !== m || y[27] !== g
          ? ((_ = (0, a.jsx)(ti.P.p, { initial: m, animate: h, transition: g, children: f })),
            (y[26] = m),
            (y[27] = g),
            (y[28] = _))
          : (_ = y[28]),
        y[29] !== p || y[30] !== _
          ? ((b = (0, a.jsxs)("div", {
              className: "mb-2 flex flex-col text-center text-3xl leading-9 font-medium select-none",
              "aria-atomic": "true",
              role: "status",
              children: [p, _],
            })),
            (y[29] = p),
            (y[30] = _),
            (y[31] = b))
          : (b = y[31]),
        b
      )
    }
    var tH = n("rKAs"),
      tU = n("THS1"),
      tK = n("OPXn"),
      tV = n("eaAY")
    let tq = { [tH.AX]: tK.R }
    function t$(e) {
      let t,
        n,
        o,
        i = (0, r.c)(8),
        { item: s } = e
      return (
        i[0] !== s ? ((t = (0, a.jsx)(tE, { item: s, markdownDirectives: tq })), (i[0] = s), (i[1] = t)) : (t = i[1]),
        i[2] !== s.completed || i[3] !== s.contentReferences
          ? ((n = s.completed && (0, a.jsx)(tV.X, { references: s.contentReferences, shouldBlockExternalEgress: !0 })),
            (i[2] = s.completed),
            (i[3] = s.contentReferences),
            (i[4] = n))
          : (n = i[4]),
        i[5] !== t || i[6] !== n
          ? ((o = (0, a.jsxs)(tU.r, { value: !1, children: [t, n] })), (i[5] = t), (i[6] = n), (i[7] = o))
          : (o = i[7]),
        o
      )
    }
    var tz = n("bMLJ")
    function tZ(e) {
      let t,
        n,
        o,
        i,
        c,
        d,
        u,
        p,
        m,
        h,
        f = (0, r.c)(71),
        _ = (0, s.A)()
      switch (e.step) {
        case "intro": {
          let n
          ;(f[0] !== e ? ((n = (0, a.jsx)(tX, { ...e })), (f[0] = e), (f[1] = n)) : (n = f[1]), (t = n))
          break
        }
        case "role": {
          let n,
            r,
            o = e.role,
            i = e.roleOptions ?? tz.$d
          f[2] !== i ? ((n = i.map(tJ)), (f[2] = i), (f[3] = n)) : (n = f[3])
          let s = e.isSaving || !!e.error
          ;(f[4] !== e.onRoleSelect || f[5] !== e.onSkip || f[6] !== e.role || f[7] !== n || f[8] !== s
            ? ((r = (0, a.jsx)(tW, { value: o, options: n, disabled: s, onSelect: e.onRoleSelect, onSkip: e.onSkip })),
              (f[4] = e.onRoleSelect),
              (f[5] = e.onSkip),
              (f[6] = e.role),
              (f[7] = n),
              (f[8] = s),
              (f[9] = r))
            : (r = f[9]),
            (t = r))
          break
        }
        case "department": {
          let n,
            r,
            o = e.role,
            i = e.departments
          if (f[10] !== _ || f[11] !== e.departmentOptions) {
            let t
            ;(f[13] !== _
              ? ((t = (e) => ({ id: e.id, label: _.formatMessage(e.displayValue) })), (f[13] = _), (f[14] = t))
              : (t = f[14]),
              (n = e.departmentOptions.map(t)),
              (f[10] = _),
              (f[11] = e.departmentOptions),
              (f[12] = n))
          } else n = f[12]
          let s = e.isSaving || !!e.error
          ;(f[15] !== e.departments ||
          f[16] !== e.onDepartmentNext ||
          f[17] !== e.onDepartmentsChange ||
          f[18] !== e.onSkip ||
          f[19] !== e.role ||
          f[20] !== n ||
          f[21] !== s
            ? ((r = (0, a.jsx)(
                td,
                {
                  values: i,
                  options: n,
                  disabled: s,
                  onSelect: e.onDepartmentsChange,
                  onContinue: e.onDepartmentNext,
                  onSkip: e.onSkip,
                },
                o,
              )),
              (f[15] = e.departments),
              (f[16] = e.onDepartmentNext),
              (f[17] = e.onDepartmentsChange),
              (f[18] = e.onSkip),
              (f[19] = e.role),
              (f[20] = n),
              (f[21] = s),
              (f[22] = r))
            : (r = f[22]),
            (t = r))
          break
        }
        case "loading": {
          let n
          ;(f[23] !== e.onLoadingComplete
            ? ((n = (0, a.jsx)(tB, { onComplete: e.onLoadingComplete })), (f[23] = e.onLoadingComplete), (f[24] = n))
            : (n = f[24]),
            (t = n))
          break
        }
        case "examples": {
          let n,
            r = e.example
          f[25] !== r ? ((n = null == r ? null : tr(r)), (f[25] = r), (f[26] = n)) : (n = f[26])
          let o = n
          if (null != r && null != o) {
            let n,
              i,
              s,
              c = t4[r.kind]
            ;(f[27] !== c.title ? ((n = (0, a.jsx)(l.A, { ...c.title })), (f[27] = c.title), (f[28] = n)) : (n = f[28]),
              f[29] !== c.subtitle
                ? ((i = (0, a.jsx)(l.A, { ...c.subtitle })), (f[29] = c.subtitle), (f[30] = i))
                : (i = f[30]))
            let d = e.isSaving || !!e.error
            ;(f[31] !== r.metadata.content_references ||
            f[32] !== r.prompt ||
            f[33] !== e.animateExample ||
            f[34] !== e.exampleIndex ||
            f[35] !== e.onExampleNext ||
            f[36] !== e.onTourSkip ||
            f[37] !== e.totalExamples ||
            f[38] !== n ||
            f[39] !== i ||
            f[40] !== d ||
            f[41] !== o
              ? ((s = (0, a.jsx)(
                  tP,
                  {
                    AnswerComponent: t$,
                    title: n,
                    subtitle: i,
                    prompt: r.prompt,
                    answer: o,
                    contentReferences: r.metadata.content_references,
                    exampleIndex: e.exampleIndex,
                    totalExamples: e.totalExamples,
                    animate: e.animateExample,
                    disabled: d,
                    onNext: e.onExampleNext,
                    onSkip: e.onTourSkip,
                  },
                  e.exampleIndex,
                )),
                (f[31] = r.metadata.content_references),
                (f[32] = r.prompt),
                (f[33] = e.animateExample),
                (f[34] = e.exampleIndex),
                (f[35] = e.onExampleNext),
                (f[36] = e.onTourSkip),
                (f[37] = e.totalExamples),
                (f[38] = n),
                (f[39] = i),
                (f[40] = d),
                (f[41] = o),
                (f[42] = s))
              : (s = f[42]),
              (t = s))
          }
          break
        }
        case "warning": {
          let n
          ;(f[43] !== e ? ((n = (0, a.jsx)(t0, { ...e })), (f[43] = e), (f[44] = n)) : (n = f[44]), (t = n))
        }
      }
      ;(f[45] !== _ ? ((n = _.formatMessage(t3.dialogLabel)), (f[45] = _), (f[46] = n)) : (n = f[46]),
        f[47] !== e.onShown || f[48] !== n
          ? ((o = { "aria-describedby": void 0, "aria-label": n, onOpenAutoFocus: e.onShown, onEscapeKeyDown: tY }),
            (f[47] = e.onShown),
            (f[48] = n),
            (f[49] = o))
          : (o = f[49]),
        f[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(z.L3, { className: "sr-only", children: (0, a.jsx)(l.A, { ...t3.dialogLabel }) })),
            (f[50] = i))
          : (i = f[50]))
      let b = e.isSaving,
        y = "examples" === e.step ? "min-h-0 flex-1 md:px-12 md:py-20 lg:px-16 xl:px-24" : "m-auto px-6 py-10 md:px-10"
      f[51] !== y
        ? ((c = (0, Q.A)("flex w-full flex-col items-center gap-6", y)), (f[51] = y), (f[52] = c))
        : (c = f[52])
      let x = "examples" === e.step ? `examples-${e.exampleIndex}` : e.step,
        C = "examples" === e.step ? "min-h-0 flex-1" : void 0
      return (
        f[53] !== t || f[54] !== x || f[55] !== C
          ? ((d = (0, a.jsx)(to.N, { mode: "wait", children: (0, a.jsx)(J.P, { className: C, children: t }, x) })),
            (f[53] = t),
            (f[54] = x),
            (f[55] = C),
            (f[56] = d))
          : (d = f[56]),
        f[57] !== e.error || f[58] !== e.isSaving || f[59] !== e.onRetry
          ? ((u = e.error
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
                      children: (0, a.jsx)(l.A, { ...t3.retry }),
                    }),
                  ],
                })
              : null),
            (f[57] = e.error),
            (f[58] = e.isSaving),
            (f[59] = e.onRetry),
            (f[60] = u))
          : (u = f[60]),
        f[61] !== c || f[62] !== d || f[63] !== u
          ? ((p = (0, a.jsxs)("div", { className: c, children: [d, u] })),
            (f[61] = c),
            (f[62] = d),
            (f[63] = u),
            (f[64] = p))
          : (p = f[64]),
        f[65] !== e.isSaving || f[66] !== p
          ? ((m = (0, a.jsx)("div", {
              className: "flex h-full flex-col overflow-y-auto select-none",
              "aria-busy": b,
              children: p,
            })),
            (f[65] = e.isSaving),
            (f[66] = p),
            (f[67] = m))
          : (m = f[67]),
        f[68] !== o || f[69] !== m
          ? ((h = (0, a.jsx)(X.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsxs)(z.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: "h-full w-full bg-surface-elevated text-default",
                contentProps: o,
                children: [i, m],
              }),
            })),
            (f[68] = o),
            (f[69] = m),
            (f[70] = h))
          : (h = f[70]),
        h
      )
    }
    function tY(e) {
      return e.preventDefault()
    }
    function tJ(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }) }
    }
    function tQ(e) {
      let t,
        n,
        o,
        i = (0, r.c)(7),
        { title: s, subtitle: l } = e
      return (
        i[0] !== s
          ? ((t = (0, a.jsx)("h1", { className: "text-heading-lg font-semibold", children: s })),
            (i[0] = s),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== l
          ? ((n = l ? (0, a.jsx)("p", { className: "text-base text-secondary", children: l }) : null),
            (i[2] = l),
            (i[3] = n))
          : (n = i[3]),
        i[4] !== t || i[5] !== n
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-3 text-center", children: [t, n] })),
            (i[4] = t),
            (i[5] = n),
            (i[6] = o))
          : (o = i[6]),
        o
      )
    }
    function tX(e) {
      let t,
        n,
        o,
        i,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        A = (0, r.c)(42),
        { workspaceName: j, onStart: S, error: k } = e,
        N = (0, tl.I)()
      ;(A[0] !== N ? ((t = !N && { opacity: 0, y: 12 }), (A[0] = N), (A[1] = t)) : (t = A[1]),
        A[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { opacity: 1, y: 0 }), (A[2] = n)) : (n = A[2]))
      let M = 0.5 * !N,
        E = 0.15 * !N
      ;(A[3] !== M || A[4] !== E ? ((o = { duration: M, delay: E }), (A[3] = M), (A[4] = E), (A[5] = o)) : (o = A[5]),
        A[6] !== j
          ? ((i = j
              ? (0, a.jsx)(l.A, { ...t3.workspaceWelcome, values: { workspaceName: j } })
              : (0, a.jsx)(l.A, { ...t3.workspaceWelcomeFallback })),
            (A[6] = j),
            (A[7] = i))
          : (i = A[7]),
        A[8] !== t || A[9] !== o || A[10] !== i
          ? ((s = (0, a.jsx)(ti.P.h1, {
              className: "text-center text-3xl font-semibold",
              initial: t,
              animate: n,
              transition: o,
              children: i,
            })),
            (A[8] = t),
            (A[9] = o),
            (A[10] = i),
            (A[11] = s))
          : (s = A[11]),
        A[12] !== N ? ((c = !N && { opacity: 0, y: 16 }), (A[12] = N), (A[13] = c)) : (c = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel") ? ((d = { opacity: 1, y: 0 }), (A[14] = d)) : (d = A[14]))
      let O = 0.6 * !N,
        I = 0.6 * !N
      ;(A[15] !== O || A[16] !== I
        ? ((u = { duration: O, delay: I }), (A[15] = O), (A[16] = I), (A[17] = u))
        : (u = A[17]),
        A[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(t1, {
              icon: (0, a.jsx)(ea.aVB, {}),
              title: (0, a.jsx)(l.A, { ...t3.clinicalLearningTitle }),
              body: (0, a.jsx)(l.A, { ...t3.clinicalLearningBody }),
            })),
            (A[18] = p))
          : (p = A[18]),
        A[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(t1, {
              icon: (0, a.jsx)(ea.o1J, {}),
              title: (0, a.jsx)(l.A, { ...t3.fastAnswersTitle }),
              body: (0, a.jsx)(l.A, { ...t3.fastAnswersBody }),
            })),
            (A[19] = m))
          : (m = A[19]),
        A[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(t1, {
              icon: (0, a.jsx)(ea.PL4, {}),
              title: (0, a.jsx)(l.A, { ...t3.extraSecurityTitle }),
              body: (0, a.jsx)(l.A, { ...t3.extraSecurityBody }),
            })),
            (A[20] = h))
          : (h = A[20]),
        A[21] !== u || A[22] !== c
          ? ((f = (0, a.jsxs)(ti.P.div, {
              className: "grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-10",
              initial: c,
              animate: d,
              transition: u,
              children: [p, m, h],
            })),
            (A[21] = u),
            (A[22] = c),
            (A[23] = f))
          : (f = A[23]),
        A[24] !== N ? ((_ = !N && { opacity: 0, y: 18 }), (A[24] = N), (A[25] = _)) : (_ = A[25]),
        A[26] === Symbol.for("react.memo_cache_sentinel") ? ((b = { opacity: 1, y: 0 }), (A[26] = b)) : (b = A[26]))
      let P = 0.5 * !N,
        T = 1.4 * !N
      A[27] !== P || A[28] !== T
        ? ((y = { duration: P, delay: T }), (A[27] = P), (A[28] = T), (A[29] = y))
        : (y = A[29])
      let R = !!k
      return (
        A[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(l.A, { ...t3.getStarted })), (A[30] = x))
          : (x = A[30]),
        A[31] !== S || A[32] !== R
          ? ((C = (0, a.jsx)(g.$, { size: "beaconAction", disabled: R, onClick: S, children: x })),
            (A[31] = S),
            (A[32] = R),
            (A[33] = C))
          : (C = A[33]),
        A[34] !== _ || A[35] !== y || A[36] !== C
          ? ((w = (0, a.jsx)(ti.P.div, { initial: _, animate: b, transition: y, children: C })),
            (A[34] = _),
            (A[35] = y),
            (A[36] = C),
            (A[37] = w))
          : (w = A[37]),
        A[38] !== f || A[39] !== w || A[40] !== s
          ? ((v = (0, a.jsxs)("div", {
              className: "flex w-full max-w-280 flex-col items-center gap-10 sm:px-10 lg:px-16",
              children: [s, f, w],
            })),
            (A[38] = f),
            (A[39] = w),
            (A[40] = s),
            (A[41] = v))
          : (v = A[41]),
        v
      )
    }
    function t1(e) {
      let t,
        n,
        o,
        i,
        s,
        l = (0, r.c)(12),
        { icon: c, title: d, body: u } = e
      return (
        l[0] !== c
          ? ((t = (0, a.jsx)("div", { className: "mt-1 md:mt-0", children: c })), (l[0] = c), (l[1] = t))
          : (t = l[1]),
        l[2] !== d
          ? ((n = (0, a.jsx)("h2", { className: "text-base font-semibold", children: d })), (l[2] = d), (l[3] = n))
          : (n = l[3]),
        l[4] !== t || l[5] !== n
          ? ((o = (0, a.jsxs)("div", { className: "flex items-start gap-2 md:flex-col md:gap-3", children: [t, n] })),
            (l[4] = t),
            (l[5] = n),
            (l[6] = o))
          : (o = l[6]),
        l[7] !== u
          ? ((i = (0, a.jsx)("p", { className: "text-sm text-secondary", children: u })), (l[7] = u), (l[8] = i))
          : (i = l[8]),
        l[9] !== o || l[10] !== i
          ? ((s = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [o, i] })),
            (l[9] = o),
            (l[10] = i),
            (l[11] = s))
          : (s = l[11]),
        s
      )
    }
    function t0(e) {
      let t,
        n,
        o,
        i,
        s,
        c,
        d,
        u,
        p = (0, r.c)(21),
        { isQuorum: m, onFinish: h, isSaving: f, error: _ } = e,
        b = m ? "quorum" : "hc"
      ;(p[0] !== b
        ? ((t = (0, a.jsx)(tQ, { title: (0, a.jsx)(l.A, { ...t3.usageWarningTitle, values: { product: b } }) })),
          (p[0] = b),
          (p[1] = t))
        : (t = p[1]),
        p[2] !== b
          ? ((n = (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...t3.usageWarning1, values: { product: b } }) })),
            (p[2] = b),
            (p[3] = n))
          : (n = p[3]),
        p[4] !== b
          ? ((o = (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...t3.usageWarning2, values: { product: b } }) })),
            (p[4] = b),
            (p[5] = o))
          : (o = p[5]),
        p[6] !== m
          ? ((i = m
              ? (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...t3.usageWarning3, values: { baaLink: t2 } }) })
              : null),
            (p[6] = m),
            (p[7] = i))
          : (i = p[7]),
        p[8] !== n || p[9] !== o || p[10] !== i
          ? ((s = (0, a.jsxs)("div", {
              className: "flex flex-col gap-6 text-base text-secondary",
              children: [n, o, i],
            })),
            (p[8] = n),
            (p[9] = o),
            (p[10] = i),
            (p[11] = s))
          : (s = p[11]))
      let y = f || !!_
      return (
        p[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, { ...t3.understand })), (p[12] = c))
          : (c = p[12]),
        p[13] !== f || p[14] !== h || p[15] !== y
          ? ((d = (0, a.jsx)(g.$, { size: "auth", disabled: y, loading: f, onClick: h, children: c })),
            (p[13] = f),
            (p[14] = h),
            (p[15] = y),
            (p[16] = d))
          : (d = p[16]),
        p[17] !== t || p[18] !== s || p[19] !== d
          ? ((u = (0, a.jsxs)("div", {
              className: "flex w-full max-w-3xl flex-col items-center gap-8",
              children: [t, s, d],
            })),
            (p[17] = t),
            (p[18] = s),
            (p[19] = d),
            (p[20] = u))
          : (u = p[20]),
        u
      )
    }
    function t2(e) {
      return (0, a.jsx)(ts.G, {
        href: "https://cdn.openai.com/osa/baa.pdf",
        className: "underline",
        initiator: "open_in_browser_bridge",
        openTarget: "external-browser",
        isBrowserEnabled: !1,
        children: e,
      })
    }
    let t3 = (0, e5.YK)({
        clinicalDecisionSupportTitle: {
          id: "health.onboarding.clinicalDecisionSupportTitle",
          defaultMessage: "Evidence Based Clinical Insights",
        },
        clinicalDecisionSupportSubtitle: {
          id: "health.onboarding.clinicalDecisionSupportSubtitle",
          defaultMessage: "Explore clinical questions, differential considerations, and evidence summaries",
        },
        documentationQueryTitle: {
          id: "health.onboarding.documentationQueryTitle",
          defaultMessage: "Documentation Query",
        },
        documentationQuerySubtitle: {
          id: "health.onboarding.documentationQuerySubtitle",
          defaultMessage: "Draft handoffs, notes, communications, and other care-team documentation",
        },
        latestGuidelinesTitle: {
          id: "health.onboarding.latestGuidelinesTitle",
          defaultMessage: "Looking Up Latest Guidelines",
        },
        latestGuidelinesSubtitle: {
          id: "health.onboarding.latestGuidelinesSubtitle",
          defaultMessage: "Get overviews of current guidelines and recommendations from trusted sources",
        },
        dialogLabel: { id: "health.onboarding.dialogLabel", defaultMessage: "Health workspace onboarding" },
        workspaceWelcome: {
          id: "health.onboarding.workspaceWelcome",
          defaultMessage: "Welcome to the {workspaceName} workspace",
        },
        workspaceWelcomeFallback: {
          id: "health.onboarding.workspaceWelcomeFallback",
          defaultMessage: "Welcome to your workspace",
        },
        clinicalLearningTitle: {
          id: "health.onboarding.clinicalLearningTitle",
          defaultMessage: "Get credit for clinical learning",
        },
        clinicalLearningBody: {
          id: "health.onboarding.clinicalLearningBody",
          defaultMessage:
            "Earn CME while you explore real clinical cases through evidence review. Learn, validate decisions, and stay up to date\u2014without adding extra time to your day.",
        },
        fastAnswersTitle: {
          id: "health.onboarding.fastAnswersTitle",
          defaultMessage: "Fast answers, reliable support",
        },
        fastAnswersBody: {
          id: "health.onboarding.fastAnswersBody",
          defaultMessage:
            "Work without interruptions. Higher rate limits mean you can move quickly through complex cases, documentation, and follow-up questions without slowing down.",
        },
        extraSecurityTitle: { id: "health.onboarding.extraSecurityTitle", defaultMessage: "Extra security" },
        extraSecurityBody: {
          id: "health.onboarding.extraSecurityBody",
          defaultMessage:
            "Chats in your clinician account are not used to train our AI models. ChatGPT can support clinical and operational tasks while protecting your data.",
        },
        getStarted: { id: "health.onboarding.getStartedButton", defaultMessage: "Get Started" },
        retry: { id: "health.onboarding.retry", defaultMessage: "Try again" },
        usageWarningTitle: {
          id: "health.onboarding.usageWarningTitle.productChoice",
          defaultMessage:
            "Before you use {product, select, quorum {ChatGPT for Clinicians} other {ChatGPT for Healthcare}}",
        },
        usageWarning1: {
          id: "health.onboarding.usageWarning1.productChoice",
          defaultMessage:
            "AI can make mistakes, so do not rely primarily on AI output in decision-making about a patient, and always verify information provided. {product, select, quorum {ChatGPT for Clinicians} other {ChatGPT for Healthcare}} is not intended to screen, predict, or diagnose medical conditions, nor is it intended to generate treatment plans. While we have safeguards, ChatGPT may give incomplete or inaccurate information. It is not intended to replace your professional judgment.",
        },
        usageWarning2: {
          id: "health.onboarding.usageWarning2.productChoice",
          defaultMessage:
            "Do not use {product, select, quorum {ChatGPT for Clinicians} other {ChatGPT for Healthcare}} to analyze medical images, signals from in vitro diagnostic devices (such as genomic sequences), or patterns/signals from signal acquisition systems (such as an ECG or EEG waveforms or similar inputs).",
        },
        usageWarning3: {
          id: "health.onboarding.usageWarning3",
          defaultMessage:
            "Do not enter Protected Health Information (PHI) unless you have signed a <baaLink>Business Associate Agreement</baaLink> with OpenAI and have the authority to execute it for your organization.",
        },
        understand: { id: "health.onboarding.understandButton", defaultMessage: "I understand" },
      }),
      t4 = {
        clinical_decision_support: {
          title: t3.clinicalDecisionSupportTitle,
          subtitle: t3.clinicalDecisionSupportSubtitle,
        },
        documentation_query: { title: t3.documentationQueryTitle, subtitle: t3.documentationQuerySubtitle },
        latest_guidelines: { title: t3.latestGuidelinesTitle, subtitle: t3.latestGuidelinesSubtitle },
      },
      t5 = {
        intro: "WorkspaceIntro",
        role: "Role",
        department: "Department",
        loading: "Loading",
        examples: "Examples",
        warning: "UsageWarning",
      }
    function t6(e) {
      let t,
        n = (0, r.c)(3),
        o = `${e.identity.accountId}:${e.identity.userId}`
      return (
        n[0] !== e || n[1] !== o ? ((t = (0, a.jsx)(t8, { ...e }, o)), (n[0] = e), (n[1] = o), (n[2] = t)) : (t = n[2]),
        t
      )
    }
    function t8(e) {
      let t,
        n,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        x,
        C,
        w,
        v,
        A,
        j,
        k,
        N,
        M,
        E,
        O,
        I = (0, r.c)(87),
        { identity: P, workspaceName: T, planType: R, onComplete: D } = e,
        L = (0, o.gh)(y.u),
        G = (0, s.A)(),
        F = (0, K.Zj)("1498338261"),
        W = F && ("hc" === R || "hc_consumption" === R || "quorum" === R) ? tz.$f : tz.$d,
        [B, H] = (0, i.useState)("intro"),
        [U, V] = (0, i.useState)()
      I[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (I[0] = t)) : (t = I[0])
      let [q, $] = (0, i.useState)(t)
      I[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (I[1] = n)) : (n = I[1])
      let [z, Z] = (0, i.useState)(n),
        [Y, J] = (0, i.useState)(0),
        Q = (0, i.useRef)(null),
        [X, ee] = (0, i.useState)(!1),
        [et, en] = (0, i.useState)(!1),
        ea = (0, i.useRef)(null)
      I[2] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (I[2] = l)) : (l = I[2])
      let er = (0, i.useRef)(l),
        eo = (0, i.useRef)(!1),
        ei = (0, i.useRef)(!1),
        es = null == U ? void 0 : tz._s[U]
      I[3] !== es || I[4] !== U
        ? ((c =
            null == U || "other_clinical" === U
              ? tz.e1
              : tz.jw.filter((e) => {
                  let { id: t } = e
                  return null == es || es.includes(t)
                })),
          (I[3] = es),
          (I[4] = U),
          (I[5] = c))
        : (c = I[5])
      let el = c
      ;(I[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => {
            ea.current?.abort()
          }),
          (u = []),
          (I[6] = d),
          (I[7] = u))
        : ((d = I[6]), (u = I[7])),
        (0, i.useEffect)(d, u),
        I[8] !== Y || I[9] !== L || I[10] !== B
          ? ((p = function (e) {
              ;(te(L, t5[B], Y), H(e))
            }),
            (I[8] = Y),
            (I[9] = L),
            (I[10] = B),
            (I[11] = p))
          : (p = I[11]))
      let ec = p
      I[12] !== ec || I[13] !== q || I[14] !== P || I[15] !== U || I[16] !== L
        ? ((m = function () {
            if (null == U) return
            let e = L.query.snapshot(ta, { ...P, role: U, department: q[0] ?? null }),
              t = () => {
                e.cancel()
              },
              n = ea.current?.signal
            ;(n?.addEventListener("abort", t, { once: !0 }),
              (Q.current = e
                .fetch()
                .catch(t7)
                .finally(() => {
                  n?.removeEventListener("abort", t)
                })),
              ec("loading"),
              (0, S.yy)(L, e8.odB, {}))
          }),
          (I[12] = ec),
          (I[13] = q),
          (I[14] = P),
          (I[15] = U),
          (I[16] = L),
          (I[17] = m))
        : (m = I[17])
      let ed = m
      I[18] !== ec
        ? ((h = async function () {
            let e = await Q.current
            if (!ea.current?.signal.aborted) {
              if (null == e || 0 === e.length) return void ec("warning")
              ;(Z(e), ec("examples"))
            }
          }),
          (I[18] = ec),
          (I[19] = h))
        : (h = I[19])
      let eu = h
      I[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = async function () {
            if (!(eo.current || ea.current?.signal.aborted)) {
              ;((eo.current = !0), en(!1))
              try {
                for (; er.current.length > 0;)
                  (ea.current?.signal.throwIfAborted(), await er.current[0](), er.current.shift())
              } catch {
                ea.current?.signal.aborted || en(!0)
              }
              ;((eo.current = !1), ea.current?.signal.aborted || ee(!1))
            }
          }),
          (I[20] = g))
        : (g = I[20])
      let ep = g
      I[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (e) {
            ;(er.current.push(e), ep())
          }),
          (I[21] = f))
        : (f = I[21])
      let em = f
      I[22] !== P || I[23] !== L
        ? ((_ = function () {
            if (null != ea.current) return
            let e = new AbortController()
            ;((ea.current = e),
              (0, S.yy)(L, e7.CodexHealthWorkspaceOnboardingStepShown, {
                stepType: "WorkspaceIntro",
                stepIndex: (0, e9.At)(0),
              }),
              em(async () => {
                let t = await L.query.snapshot(e6.E$, P).fetch()
                ;(e.signal.throwIfAborted(), (t.role || t.departments?.length) && (await (0, e6.Nf)(L, P, e.signal)))
              }))
          }),
          (I[22] = P),
          (I[23] = L),
          (I[24] = _))
        : (_ = I[24])
      let eh = _
      I[25] !== P || I[26] !== G || I[27] !== W || I[28] !== L
        ? ((b = async function (e, t) {
            let n = W.find((t) => {
                let { id: n } = t
                return n === e
              }),
              a = null == n ? "" : G.formatMessage(n.displayValue),
              r = [...tz.jw, ...tz.e1],
              o = t.flatMap((e) => {
                let t = r.find((t) => t.id === e)
                return null == t ? [] : [G.formatMessage(t.displayValue)]
              }),
              i = [G.formatMessage(t9.roleIntro, { role: a })]
            ;(o.length > 0 && i.push(G.formatMessage(t9.departmentOnly, { departments: G.formatList(o) })),
              await (0, e6.Qm)(
                L,
                P,
                { role: e, departments: t },
                { enabled: !0, role_user_message: a, other_user_message: i.join(" ") },
                ea.current?.signal,
              ))
          }),
          (I[25] = P),
          (I[26] = G),
          (I[27] = W),
          (I[28] = L),
          (I[29] = b))
        : (b = I[29])
      let eg = b,
        ef = "quorum" === R,
        e_ = U ?? "",
        eb = z[Y]
      return (
        I[30] !== eu
          ? ((x = () => {
              eu()
            }),
            (I[30] = eu),
            (I[31] = x))
          : (x = I[31]),
        I[32] !== ec || I[33] !== Y || I[34] !== z.length || I[35] !== L
          ? ((C = () => {
              Y + 1 >= z.length ? ec("warning") : (te(L, "Examples", Y), J(Y + 1))
            }),
            (I[32] = ec),
            (I[33] = Y),
            (I[34] = z.length),
            (I[35] = L),
            (I[36] = C))
          : (C = I[36]),
        I[37] !== ec || I[38] !== L
          ? ((w = (e) => {
              ;("desktop" === e && (0, S.yy)(L, e8.ewv, { stepType: "ask_any_question" }), ec("warning"))
            }),
            (I[37] = ec),
            (I[38] = L),
            (I[39] = w))
          : (w = I[39]),
        I[40] !== et || I[41] !== G
          ? ((v = et ? G.formatMessage(t9.saveError) : null), (I[40] = et), (I[41] = G), (I[42] = v))
          : (v = I[42]),
        I[43] !== ec ? ((A = () => ec("role")), (I[43] = ec), (I[44] = A)) : (A = I[44]),
        I[45] !== ec || I[46] !== eg || I[47] !== F
          ? ((j = (e) => {
              ;(V(e),
                $([]),
                em(() => eg(e, [])),
                ec(F && "physician" !== e && "np_pa" !== e ? "warning" : "department"))
            }),
            (I[45] = ec),
            (I[46] = eg),
            (I[47] = F),
            (I[48] = j))
          : (j = I[48]),
        I[49] !== ec ||
        I[50] !== q ||
        I[51] !== et ||
        I[52] !== U ||
        I[53] !== eg ||
        I[54] !== L ||
        I[55] !== F ||
        I[56] !== ed
          ? ((k = () => {
              !et &&
                null != U &&
                0 !== q.length &&
                ((0, S.yy)(L, e7.CodexHealthWorkspaceOnboardingAction, {
                  action:
                    e7.CodexHealthWorkspaceOnboardingActionType
                      .CODEX_HEALTH_WORKSPACE_ONBOARDING_ACTION_TYPE_SURVEY_SUBMITTED,
                }),
                em(() => eg(U, q)),
                F ? ec("warning") : ed())
            }),
            (I[49] = ec),
            (I[50] = q),
            (I[51] = et),
            (I[52] = U),
            (I[53] = eg),
            (I[54] = L),
            (I[55] = F),
            (I[56] = ed),
            (I[57] = k))
          : (k = I[57]),
        I[58] !== ec ? ((N = () => ec("warning")), (I[58] = ec), (I[59] = N)) : (N = I[59]),
        I[60] !== P || I[61] !== D || I[62] !== L
          ? ((M = () => {
              !ei.current &&
                ((ei.current = !0),
                (0, S.yy)(L, e7.CodexHealthWorkspaceOnboardingAction, {
                  action:
                    e7.CodexHealthWorkspaceOnboardingActionType
                      .CODEX_HEALTH_WORKSPACE_ONBOARDING_ACTION_TYPE_ACKNOWLEDGED,
                }),
                ee(!0),
                em(async () => {
                  ;(await (0, e6.de)(L, P, ea.current?.signal), ea.current?.signal.throwIfAborted(), D())
                }))
            }),
            (I[60] = P),
            (I[61] = D),
            (I[62] = L),
            (I[63] = M))
          : (M = I[63]),
        I[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = () => {
              ;(ee(ei.current), ep())
            }),
            (I[64] = E))
          : (E = I[64]),
        I[65] !== el ||
        I[66] !== q ||
        I[67] !== Y ||
        I[68] !== z.length ||
        I[69] !== eh ||
        I[70] !== X ||
        I[71] !== W ||
        I[72] !== B ||
        I[73] !== ef ||
        I[74] !== e_ ||
        I[75] !== eb ||
        I[76] !== x ||
        I[77] !== C ||
        I[78] !== w ||
        I[79] !== v ||
        I[80] !== A ||
        I[81] !== j ||
        I[82] !== k ||
        I[83] !== N ||
        I[84] !== M ||
        I[85] !== T
          ? ((O = (0, a.jsx)(tZ, {
              step: B,
              workspaceName: T,
              isQuorum: ef,
              role: e_,
              departments: q,
              departmentOptions: el,
              example: eb,
              exampleIndex: Y,
              totalExamples: z.length,
              onLoadingComplete: x,
              onExampleNext: C,
              onTourSkip: w,
              isSaving: X,
              error: v,
              onShown: eh,
              onStart: A,
              onRoleSelect: j,
              roleOptions: W,
              onDepartmentsChange: $,
              onDepartmentNext: k,
              onSkip: N,
              onFinish: M,
              onRetry: E,
            })),
            (I[65] = el),
            (I[66] = q),
            (I[67] = Y),
            (I[68] = z.length),
            (I[69] = eh),
            (I[70] = X),
            (I[71] = W),
            (I[72] = B),
            (I[73] = ef),
            (I[74] = e_),
            (I[75] = eb),
            (I[76] = x),
            (I[77] = C),
            (I[78] = w),
            (I[79] = v),
            (I[80] = A),
            (I[81] = j),
            (I[82] = k),
            (I[83] = N),
            (I[84] = M),
            (I[85] = T),
            (I[86] = O))
          : (O = I[86]),
        O
      )
    }
    function t7() {
      return []
    }
    let t9 = (0, e5.YK)({
      roleIntro: {
        id: "health.onboarding.personalization.roleIntro",
        defaultMessage: "I belong to following role(s): {role}.",
      },
      departmentOnly: {
        id: "health.onboarding.personalization.departmentOnly",
        defaultMessage: "I belong to following department(s): {departments}.",
      },
      saveError: {
        id: "health.onboarding.saveError",
        defaultMessage: "We couldn't save your onboarding progress. Please try again",
      },
    })
    var ne = n("lLAu"),
      nt = n("QBVt"),
      nn = n("uHE8"),
      na = n("vLpE")
    function nr(e) {
      let t,
        n,
        o,
        i,
        s = (0, r.c)(9),
        { busy: c, onRetry: d, layout: u } = e,
        p = "education" === (void 0 === u ? "default" : u) && "shrink-0 p-4"
      return (
        s[0] !== p
          ? ((t = (0, Q.A)("flex w-full max-w-lg flex-col items-center gap-3 text-center", p)), (s[0] = p), (s[1] = t))
          : (t = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("p", {
              className: "text-sm text-danger",
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.stepError",
                defaultMessage: "We couldn\u2019t complete this step. Please try again",
              }),
            })),
            (s[2] = n))
          : (n = s[2]),
        s[3] !== c || s[4] !== d
          ? ((o =
              null != d &&
              (0, a.jsx)(g.$, {
                color: "secondary",
                size: "dialog",
                loading: c,
                onClick: d,
                children: (0, a.jsx)(l.A, { id: "workspaceOnboarding.retry", defaultMessage: "Try again" }),
              })),
            (s[3] = c),
            (s[4] = d),
            (s[5] = o))
          : (o = s[5]),
        s[6] !== t || s[7] !== o
          ? ((i = (0, a.jsxs)("div", { role: "alert", className: t, children: [n, o] })),
            (s[6] = t),
            (s[7] = o),
            (s[8] = i))
          : (i = s[8]),
        i
      )
    }
    function no(e) {
      let t,
        n,
        o,
        i,
        s,
        c,
        d,
        u,
        p,
        m = (0, r.c)(28),
        { children: h, busy: g, error: f, onRetry: _, onShown: b, fillContent: y, layout: x } = e,
        C = void 0 !== y && y,
        w = void 0 === x ? "default" : x,
        v = "education" === w ? "bg-surface" : "bg-surface-elevated",
        A = "education" === w && em
      ;(m[0] !== v || m[1] !== A
        ? ((t = (0, Q.A)("h-full w-full text-default", v, A)), (m[0] = v), (m[1] = A), (m[2] = t))
        : (t = m[2]),
        m[3] !== b
          ? ((n = { "aria-describedby": void 0, onOpenAutoFocus: b, onEscapeKeyDown: ni }), (m[3] = b), (m[4] = n))
          : (n = m[4]),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(z.L3, {
              className: "sr-only",
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.dialogTitle",
                defaultMessage: "Welcome to ChatGPT",
              }),
            })),
            (m[5] = o))
          : (o = m[5]))
      let j = "education" === w ? "max-h-full" : "overflow-y-auto"
      return (
        m[6] !== j ? ((i = (0, Q.A)("flex h-full flex-col select-none", j)), (m[6] = j), (m[7] = i)) : (i = m[7]),
        m[8] !== C || m[9] !== w
          ? ((s = (0, Q.A)(
              "flex w-full flex-col items-center",
              "education" === w
                ? "min-h-0 flex-1 justify-center overflow-hidden"
                : [
                    "gap-6",
                    C ? "min-h-0 flex-1 px-6 py-10 md:px-12 md:py-20 lg:px-16 xl:px-24" : "m-auto px-6 py-10 md:px-10",
                  ],
            )),
            (m[8] = C),
            (m[9] = w),
            (m[10] = s))
          : (s = m[10]),
        m[11] !== g || m[12] !== f || m[13] !== w || m[14] !== _
          ? ((c = f ? (0, a.jsx)(nr, { busy: g, onRetry: _, layout: w }) : null),
            (m[11] = g),
            (m[12] = f),
            (m[13] = w),
            (m[14] = _),
            (m[15] = c))
          : (c = m[15]),
        m[16] !== h || m[17] !== s || m[18] !== c
          ? ((d = (0, a.jsxs)("div", { className: s, children: [h, c] })),
            (m[16] = h),
            (m[17] = s),
            (m[18] = c),
            (m[19] = d))
          : (d = m[19]),
        m[20] !== g || m[21] !== d || m[22] !== i
          ? ((u = (0, a.jsx)("div", { className: i, "aria-busy": g, children: d })),
            (m[20] = g),
            (m[21] = d),
            (m[22] = i),
            (m[23] = u))
          : (u = m[23]),
        m[24] !== u || m[25] !== t || m[26] !== n
          ? ((p = (0, a.jsx)(X.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsxs)(z.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: t,
                contentProps: n,
                children: [o, u],
              }),
            })),
            (m[24] = u),
            (m[25] = t),
            (m[26] = n),
            (m[27] = p))
          : (p = m[27]),
        p
      )
    }
    function ni(e) {
      return e.preventDefault()
    }
    let ns = (0, e5.YK)({
        summary: {
          id: "k12.onboarding.personalization.summary",
          defaultMessage:
            "{role, select, teacher {I'm a Teacher.} administrator_district_leader {I'm an Administrator / District Leader.} it_staff {I'm IT / Technical Staff.} others {I work in another role.} other {}}{subject, select, none {} stem { I teach STEM.} english { I teach English.} social_studies_history { I teach Social Studies & History.} world_languages { I teach World Languages.} arts_music { I teach Arts & Music.} physical_education_health { I teach Physical Education & Health.} other { I teach Other.}}{grade, select, preschool { I work with Preschool students.} k5 { I work with K-5 grade students.} middle_school { I work with 6-8 grade students.} high_school { I work with 9-12 grade students.} other {}}",
        },
      }),
      nl = (0, e5.YK)({
        title: { id: "k12.onboarding.teacherDetails.title", defaultMessage: "Let's tailor ideas for your classroom" },
        subtitle: {
          id: "k12.onboarding.teacherDetails.subtitle",
          defaultMessage: "Pick the options that best describe what you teach",
        },
        gradeQuestion: {
          id: "k12.onboarding.teacherDetails.gradeQuestion",
          defaultMessage: "What is your grade level?",
        },
        subjectQuestion: {
          id: "k12.onboarding.teacherDetails.subjectQuestion",
          defaultMessage: "What subject do you teach?",
        },
        gradePreschool: { id: "k12.onboarding.teacherDetails.grade.preschool", defaultMessage: "Preschool" },
        gradeK5: { id: "k12.onboarding.teacherDetails.grade.k5", defaultMessage: "K-5 grade" },
        gradeMiddle: { id: "k12.onboarding.teacherDetails.grade.middle", defaultMessage: "6-8 grade" },
        gradeHigh: { id: "k12.onboarding.teacherDetails.grade.high", defaultMessage: "9-12 grade" },
        subjectSTEM: { id: "k12.onboarding.teacherDetails.subject.stem", defaultMessage: "STEM" },
        subjectLanguageArts: { id: "k12.onboarding.teacherDetails.subject.english", defaultMessage: "English" },
        subjectSocialStudies: {
          id: "k12.onboarding.teacherDetails.subject.socialStudiesHistory",
          defaultMessage: "Social Studies & History",
        },
        subjectWorldLanguages: {
          id: "k12.onboarding.teacherDetails.subject.worldLanguages",
          defaultMessage: "World Languages",
        },
        subjectArtsMusic: { id: "k12.onboarding.teacherDetails.subject.artsMusic", defaultMessage: "Arts & Music" },
        subjectPhysicalEducationAndHealth: {
          id: "k12.onboarding.teacherDetails.subject.physicalEducationHealth",
          defaultMessage: "Physical Education & Health",
        },
        subjectOther: { id: "k12.onboarding.teacherDetails.subject.other", defaultMessage: "Other" },
      }),
      nc = (0, e5.YK)({
        allDone: { id: "k12.onboarding.wrappingUp.allDone", defaultMessage: "All done!" },
        continue: { id: "k12.onboarding.wrappingUp.continue", defaultMessage: "Continue to ChatGPT for Teachers" },
      }),
      nd = (0, e5.YK)({
        planLessonPrompt: {
          id: "k12.onboarding.toolStep.planLesson.prompt",
          defaultMessage:
            "Plan a collaborative 45-minute lesson for my students. Include clear objectives, activities, and suggestions for differentiation.",
        },
        planLessonTitle: { id: "k12.onboarding.toolStep.planLesson.title", defaultMessage: "Plan Your First Lesson" },
        planLessonSubtitle: {
          id: "k12.onboarding.toolStep.planLesson.subtitle",
          defaultMessage: "See how ChatGPT for Teachers can speed up lesson planning",
        },
        communicationPrompt: {
          id: "k12.onboarding.toolStep.communication.prompt",
          defaultMessage:
            "Draft a clear, welcoming message to families introducing an upcoming learning activity. Keep the tone supportive and easy to understand.",
        },
        communicationTitle: {
          id: "k12.onboarding.toolStep.communication.title",
          defaultMessage: "Strengthen Your Communication",
        },
        communicationSubtitle: {
          id: "k12.onboarding.toolStep.communication.subtitle",
          defaultMessage: "Draft clear updates without starting from scratch",
        },
        classroomResourcesPrompt: {
          id: "k12.onboarding.toolStep.classroomResources.prompt",
          defaultMessage:
            "Create a flexible rubric or checklist for an assignment. Emphasize key skills, clear criteria, and student-friendly language.",
        },
        classroomResourcesTitle: {
          id: "k12.onboarding.toolStep.classroomResources.title",
          defaultMessage: "Build Classroom Resources",
        },
        classroomResourcesSubtitle: {
          id: "k12.onboarding.toolStep.classroomResources.subtitle",
          defaultMessage: "Generate rubrics, checklists, and handouts in seconds",
        },
      }),
      nu = (0, e5.YK)({
        teacher: { id: "k12.onboarding.role.teacher", defaultMessage: "Teacher" },
        administratorDistrictLeader: {
          id: "k12.onboarding.role.administrator_district_leader",
          defaultMessage: "Administrator / District Leader",
        },
        itTechnicalStaff: { id: "k12.onboarding.role.it_staff", defaultMessage: "IT / Technical Staff" },
        others: { id: "k12.onboarding.role.others", defaultMessage: "Others" },
        other: { id: "k12.onboarding.role.other", defaultMessage: "Other" },
      }),
      np = [
        { id: "preschool", label: nl.gradePreschool },
        { id: "k5", label: nl.gradeK5 },
        { id: "middle_school", label: nl.gradeMiddle },
        { id: "high_school", label: nl.gradeHigh },
      ],
      nm = [
        { id: "stem", label: nl.subjectSTEM },
        { id: "english", label: nl.subjectLanguageArts },
        { id: "social_studies_history", label: nl.subjectSocialStudies },
        { id: "arts_music", label: nl.subjectArtsMusic },
        { id: "world_languages", label: nl.subjectWorldLanguages },
        { id: "physical_education_health", label: nl.subjectPhysicalEducationAndHealth },
        { id: "other", label: nl.subjectOther },
      ],
      nh = [
        { id: "teacher", displayValue: nu.teacher },
        { id: "administrator_district_leader", displayValue: nu.administratorDistrictLeader },
        { id: "it_staff", displayValue: nu.itTechnicalStaff },
        { id: "others", displayValue: nu.others },
      ],
      ng = (0, e5.YK)({
        askAway: { id: "onboarding.askAway", defaultMessage: "Ask away" },
        askAwayEducationBody: {
          id: "onboarding.askAwayEducationBody",
          defaultMessage:
            "Use ChatGPT to brainstorm lesson ideas, differentiate materials, create assessments, or save time on prep",
        },
        accuracyEducation: { id: "onboarding.accuracyEducation", defaultMessage: "Check important details" },
        accuracyEducationBody: {
          id: "onboarding.accuracyEducationBody",
          defaultMessage: "While helpful, ChatGPT can be incorrect. Check important information.",
        },
        gettingStartedButton: { id: "onboarding.gettingStartedButton", defaultMessage: "Okay, let\u2019s go" },
        educationUse: { id: "onboarding.educationUse", defaultMessage: "Made for your classroom" },
        workUseBody: {
          id: "onboarding.workUseBody",
          defaultMessage:
            "Your chats aren\u2019t used to train our models, including anything you share like lesson plans, student data, and planning work",
        },
      })
    var nf = n("ESTr")
    let n_ = (0, nf.a)({
        name: "flashcards-light-20",
        canvas: {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          frame: { x: 0, y: 0, width: 20, height: 20 },
          inkBounds: { x: 1.763672, y: 1.888672, width: 16.152344, height: 17.008789 },
          visualBounds: { x: 1.763672, y: 1.888672, width: 16.152344, height: 17.008789 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.763672, y: 1.888672, width: 16.152344, height: 17.008789 },
          center: { x: 9.839844, y: 10.393067 },
          insets: { top: 1.888672, right: 2.083984, bottom: 1.102539, left: 1.763672 },
          anchors: {
            frame: { x: 10, y: 10 },
            ink: { x: 9.839844, y: 10.393067 },
            foreground: { x: 9.839844, y: 10.393067 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M10.4975 1.90565L15.7671 2.52674C17.1017 2.68426 18.0561 3.89425 17.8989 5.22889L16.9673 13.1342C16.8096 14.4686 15.5997 15.4232 14.2651 15.266L14.2641 15.265L12.9077 15.1088L12.9497 15.4096C13.1323 16.7408 12.2019 17.9686 10.8706 18.1517L5.61376 18.8744C4.28225 19.0576 3.05392 18.1266 2.87059 16.7953L1.78661 8.90956C1.60373 7.57823 2.53442 6.35062 3.86571 6.16737L7.60399 5.65272L7.7954 4.03749C7.95296 2.70279 9.16279 1.74826 10.4975 1.90565ZM9.30419 6.76112L4.04637 7.48475C3.44304 7.5681 3.02136 8.12452 3.10399 8.72791L4.18797 16.6137C4.27105 17.2174 4.82844 17.6398 5.43212 17.557L10.689 16.8334C11.2926 16.7503 11.7152 16.1941 11.6323 15.5902L10.5473 7.70448C10.4641 7.10094 9.90772 6.67836 9.30419 6.76112ZM10.3413 3.22596C9.73614 3.1547 9.18734 3.58774 9.11571 4.19276L8.96532 5.4662L9.12254 5.44471C10.454 5.26173 11.6825 6.19236 11.8657 7.52381L12.7212 13.7484L14.4194 13.9447C15.0246 14.016 15.5745 13.5833 15.646 12.9779L16.5776 5.07264C16.6486 4.46744 16.216 3.91841 15.6108 3.84706L10.3413 3.22596Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      nb = (0, nf.a)({
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
      ny = {
        teacher: (0, a.jsx)(ea.L$D, {}),
        administrator_district_leader: (0, a.jsx)(ea.TGw, {}),
        it_staff: (0, a.jsx)(Z.I, { className: "shrink-0", asset: nb }),
        others: (0, a.jsx)(Z.I, { className: "shrink-0", asset: n_ }),
      }
    function nx(e) {
      let t,
        n,
        o,
        i,
        c = (0, r.c)(72),
        d = (0, s.A)()
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(l.A, { id: "workspaceOnboarding.next", defaultMessage: "Next" })), (c[0] = t))
        : (t = c[0]),
        c[1] !== e.busy || c[2] !== e.onNext
          ? ((n = (0, a.jsx)(g.$, { size: "beaconAction", disabled: e.busy, onClick: e.onNext, children: t })),
            (c[1] = e.busy),
            (c[2] = e.onNext),
            (c[3] = n))
          : (n = c[3]))
      let u = n,
        p = e.busy && "Tour" !== e.step
      ;(c[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, a.jsx)(l.A, { id: "workspaceOnboarding.skip", defaultMessage: "Skip" })), (c[4] = o))
        : (o = c[4]),
        c[5] !== e.onSkip || c[6] !== p
          ? ((i = (0, a.jsx)(g.$, {
              color: "ghostActive",
              size: "beaconAction",
              disabled: p,
              onClick: e.onSkip,
              children: o,
            })),
            (c[5] = e.onSkip),
            (c[6] = p),
            (c[7] = i))
          : (i = c[7]))
      let m = i
      switch (e.step) {
        case "WorkspaceIntro": {
          let t, n, r, o, i
          return (
            c[8] !== e.workspaceName
              ? ((t = (0, a.jsx)("h1", {
                  className: "text-center text-3xl font-semibold",
                  children: (0, a.jsx)(l.A, {
                    id: "work.onboarding.workspaceWelcome",
                    defaultMessage: "Welcome to the {workspaceName} workspace",
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
                    [ng.educationUse, ng.workUseBody],
                    [ng.askAway, ng.askAwayEducationBody],
                    [ng.accuracyEducation, ng.accuracyEducationBody],
                  ].map(nv),
                })),
                (c[10] = n))
              : (n = c[10]),
            c[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)(l.A, { ...ng.gettingStartedButton })), (c[11] = r))
              : (r = c[11]),
            c[12] !== e.onStart
              ? ((o = (0, a.jsx)(g.$, { size: "beaconAction", onClick: e.onStart, children: r })),
                (c[12] = e.onStart),
                (c[13] = o))
              : (o = c[13]),
            c[14] !== t || c[15] !== o
              ? ((i = (0, a.jsxs)("div", {
                  className: "flex w-full max-w-280 flex-col items-center gap-10 sm:px-10 lg:px-16",
                  children: [t, n, o],
                })),
                (c[14] = t),
                (c[15] = o),
                (c[16] = i))
              : (i = c[16]),
            i
          )
        }
        case "Role": {
          let t,
            n,
            r = e.role
          return (
            c[17] === Symbol.for("react.memo_cache_sentinel") ? ((t = nh.map(nw)), (c[17] = t)) : (t = c[17]),
            c[18] !== e.busy || c[19] !== e.onRole || c[20] !== e.onSkip || c[21] !== e.role
              ? ((n = (0, a.jsx)(tW, { value: r, options: t, disabled: e.busy, onSelect: e.onRole, onSkip: e.onSkip })),
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
          let t, n, r, o, i, s, d
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
                  children: (0, a.jsx)(l.A, { ...nl.title }),
                })),
                (c[25] = n))
              : (n = c[25]),
            c[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, { ...nl.subtitle }),
                })),
                (c[26] = r))
              : (r = c[26]),
            c[27] !== e.busy || c[28] !== e.grade || c[29] !== e.onGrade || c[30] !== e.onSubject || c[31] !== e.subject
              ? ((o = [
                  { question: nl.gradeQuestion, options: np, value: e.grade, onSelect: e.onGrade },
                  { question: nl.subjectQuestion, options: nm, value: e.subject, onSelect: e.onSubject },
                ].map((t) => {
                  let { question: n, options: r, value: o, onSelect: i } = t
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
                          children: r.map((e) =>
                            (0, a.jsx)(
                              g.$,
                              {
                                color: o === e.id ? "primary" : "secondary",
                                "aria-pressed": o === e.id,
                                onClick: () => i(e.id),
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
                (c[32] = o))
              : (o = c[32]))
          let u = e.busy || !e.grade || !e.subject
          return (
            c[33] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsx)(l.A, { id: "workspaceOnboarding.next", defaultMessage: "Next" })), (c[33] = i))
              : (i = c[33]),
            c[34] !== u
              ? ((s = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", disabled: u, children: i })),
                (c[34] = u),
                (c[35] = s))
              : (s = c[35]),
            c[36] !== m || c[37] !== s || c[38] !== t || c[39] !== o
              ? ((d = (0, a.jsxs)("form", {
                  className: "flex w-full max-w-lg flex-col gap-6 text-center",
                  onSubmit: t,
                  children: [n, r, o, s, m],
                })),
                (c[36] = m),
                (c[37] = s),
                (c[38] = t),
                (c[39] = o),
                (c[40] = d))
              : (d = c[40]),
            d
          )
        }
        case "Loading": {
          let t
          return (
            c[41] !== e.onLoadingComplete
              ? ((t = (0, a.jsx)(tB, { onComplete: e.onLoadingComplete })), (c[41] = e.onLoadingComplete), (c[42] = t))
              : (t = c[42]),
            t
          )
        }
        case "Tour": {
          let t, n, r, o, i, s, p, h
          c[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = [
                { title: nd.planLessonTitle, subtitle: nd.planLessonSubtitle },
                { title: nd.communicationTitle, subtitle: nd.communicationSubtitle },
                { title: nd.classroomResourcesTitle, subtitle: nd.classroomResourcesSubtitle },
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
              ? ((r = (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, { ...g.subtitle }),
                })),
                (c[46] = g.subtitle),
                (c[47] = r))
              : (r = c[47]),
            c[48] !== n || c[49] !== r
              ? ((o = (0, a.jsxs)("div", { className: "flex shrink-0 flex-col gap-3 text-center", children: [n, r] })),
                (c[48] = n),
                (c[49] = r),
                (c[50] = o))
              : (o = c[50]),
            c[51] !== d
              ? ((i = d.formatMessage({
                  id: "k12.onboarding.exampleConversation",
                  defaultMessage: "Example ChatGPT conversation",
                })),
                (c[51] = d),
                (c[52] = i))
              : (i = c[52]),
            c[53] !== e.transcript || c[54] !== i
              ? ((s = (0, a.jsx)("section", {
                  className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden select-text",
                  onWheel: nC,
                  "aria-label": i,
                  children: e.transcript,
                })),
                (c[53] = e.transcript),
                (c[54] = i),
                (c[55] = s))
              : (s = c[55]),
            c[56] !== u || c[57] !== m
              ? ((p = (0, a.jsxs)("div", {
                  className: "flex shrink-0 items-center justify-center gap-3",
                  children: [m, u],
                })),
                (c[56] = u),
                (c[57] = m),
                (c[58] = p))
              : (p = c[58]),
            c[59] !== s || c[60] !== p || c[61] !== o
              ? ((h = (0, a.jsxs)("div", {
                  className: "flex h-full min-h-0 w-full max-w-280 flex-col gap-6",
                  children: [o, s, p],
                })),
                (c[59] = s),
                (c[60] = p),
                (c[61] = o),
                (c[62] = h))
              : (h = c[62]),
            h
          )
        }
        case "WrappingUp": {
          let t, n, r, o, i
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
                  children: (0, a.jsx)(l.A, { ...nc.allDone }),
                })),
                (c[65] = n))
              : (n = c[65]),
            c[66] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)(l.A, { ...nc.continue })), (c[66] = r))
              : (r = c[66]),
            c[67] !== e.busy
              ? ((o = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", loading: e.busy, children: r })),
                (c[67] = e.busy),
                (c[68] = o))
              : (o = c[68]),
            c[69] !== t || c[70] !== o
              ? ((i = (0, a.jsxs)("form", {
                  className: "flex w-full max-w-lg flex-col gap-6 text-center",
                  onSubmit: t,
                  children: [n, o],
                })),
                (c[69] = t),
                (c[70] = o),
                (c[71] = i))
              : (i = c[71]),
            i
          )
        }
      }
    }
    function nC(e) {
      return e.stopPropagation()
    }
    function nw(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }), icon: ny[e.id] }
    }
    function nv(e) {
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
    let nA = { WorkspaceIntro: 0, Role: 1, TeacherDetails: 2, Loading: 3, Tour: 4, WrappingUp: 5 }
    function nj(e) {
      let t,
        n,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        x,
        C,
        w,
        v,
        A,
        j = (0, r.c)(89),
        { identity: k, workspaceName: N, onComplete: M } = e,
        E = (0, o.gh)(y.u),
        O = (0, s.A)(),
        [I, P] = (0, i.useState)("WorkspaceIntro"),
        [R, D] = (0, i.useState)(""),
        [L, G] = (0, i.useState)(""),
        [F, W] = (0, i.useState)(""),
        [B, H] = (0, i.useState)(0),
        [U, K] = (0, i.useState)(null),
        V = (0, i.useRef)(null),
        [q, $] = (0, i.useState)(!1),
        [z, Z] = (0, i.useState)(!1),
        [Y, J] = (0, i.useState)(!1),
        Q = (0, i.useRef)(null),
        X = (0, i.useRef)(!1),
        ee = (0, i.useRef)(nS),
        et = (0, i.useRef)(!1),
        en = (0, i.useRef)(0)
      ;(j[0] !== E
        ? ((t = () => () => {
            ;((en.current = en.current + 1),
              Q.current?.controller.abort(),
              Q.current?.stop(),
              null != V.current && (0, nt.SY)(E, V.current))
          }),
          (n = [E]),
          (j[0] = E),
          (j[1] = t),
          (j[2] = n))
        : ((t = j[1]), (n = j[2])),
        (0, i.useEffect)(t, n),
        j[3] !== B || j[4] !== E
          ? ((l = function (e, t) {
              let n = void 0 === t ? B : t
              ;(P(e),
                H(n),
                (0, S.yy)(E, e8.FGm, {
                  stepType: "Tour" === e ? "ask_any_question" : e,
                  stepIndex: (0, T.At)(nA[e] + n),
                }),
                "Loading" === e && (0, S.yy)(E, e8.odB, {}))
            }),
            (j[3] = B),
            (j[4] = E),
            (j[5] = l))
          : (l = j[5]))
      let ea = l
      j[6] !== k || j[7] !== E
        ? ((c = async function (e) {
            if (X.current) return
            ;(Q.current?.controller.abort(), Q.current?.stop())
            let t = new AbortController()
            ;((Q.current = { controller: t, stop: (0, e6.RR)(E, k, t) }),
              t.signal.aborted ||
                ((X.current = !0),
                (ee.current = e),
                $(!0),
                J(!1),
                await e(t.signal)
                  .catch(() => {
                    t.signal.aborted || J(!0)
                  })
                  .finally(() => {
                    Q.current?.controller === t && ((X.current = !1), t.signal.aborted || $(!1))
                  })))
          }),
          (j[6] = k),
          (j[7] = E),
          (j[8] = c))
        : (c = j[8])
      let er = c
      j[9] !== O
        ? ((d = function (e, t, n) {
            let a = nh.find((t) => t.id === e)
            return {
              roleLabel: null == a ? "" : O.formatMessage(a.displayValue),
              summary: O.formatMessage(ns.summary, { role: e, grade: t, subject: n || "none" }).trim(),
            }
          }),
          (j[9] = O),
          (j[10] = d))
        : (d = j[10])
      let eo = d
      j[11] !== ea || j[12] !== k || j[13] !== eo || j[14] !== E
        ? ((u = async function (e, t, n, a) {
            let { roleLabel: r, summary: o } = eo(e, t, n)
            ;(await (0, e6.Qm)(
              E,
              k,
              { role: e, departments: [] },
              { enabled: !0, role_user_message: r, other_user_message: o },
              a,
            ),
              a.throwIfAborted(),
              ea("Loading"))
          }),
          (j[11] = ea),
          (j[12] = k),
          (j[13] = eo),
          (j[14] = E),
          (j[15] = u))
        : (u = j[15])
      let ei = u
      j[16] !== L || j[17] !== O || j[18] !== eo || j[19] !== R || j[20] !== E || j[21] !== F
        ? ((p = async function (e, t) {
            let n = (en.current = en.current + 1),
              a = () => !t.aborted && en.current === n,
              r = O.formatMessage([nd.planLessonPrompt, nd.communicationPrompt, nd.classroomResourcesPrompt][e]),
              o = eo(R, L, F).summary
            Z(!0)
            let i = await (0, nt.submitChatGPTCompletion)(E, {
              prompt: o
                ? `${r}

${o}`
                : r,
              conversationId: V.current,
              conversationMode: "primary_assistant",
              realAuthor: "onboarding",
              isOnboardingConversation: !0,
              startupSignal: t,
              isSubmissionCurrent: a,
              isRequestCurrent: a,
              onClientThreadIdChange: (e) => {
                a() && ((V.current = e), K(e))
              },
              onServerThreadIdChange: (e) => {
                a() && ((V.current = e), K(e))
              },
              onCompletion: (e) => {
                a() && (Z(!1), J("failed" === e))
              },
            }).catch((e) => {
              throw (a() && Z(!1), e)
            })
            if (a() && null == i) throw (Z(!1), Error("Onboarding example was not submitted"))
          }),
          (j[16] = L),
          (j[17] = O),
          (j[18] = eo),
          (j[19] = R),
          (j[20] = E),
          (j[21] = F),
          (j[22] = p))
        : (p = j[22])
      let es = p
      j[23] !== k || j[24] !== M || j[25] !== er || j[26] !== E
        ? ((m = function () {
            ;((en.current = en.current + 1),
              Q.current?.controller.abort(),
              (X.current = !1),
              null != V.current && (0, nt.SY)(E, V.current),
              Z(!1),
              J(!1),
              (0, S.yy)(E, e8.OH2, { step: "ask_any_question" }),
              (0, S.yy)(E, e8.ewv, { stepType: "ask_any_question" }),
              er(async (e) => {
                ;(await (0, e6.de)(E, k, e).catch((t) => {
                  if ("AbortError" === t.name) throw t
                  e.throwIfAborted()
                }),
                  e.throwIfAborted(),
                  M())
              }))
          }),
          (j[23] = k),
          (j[24] = M),
          (j[25] = er),
          (j[26] = E),
          (j[27] = m))
        : (m = j[27])
      let el = m,
        ec = "Tour" === I
      ;(j[28] !== er ? ((h = () => void er(ee.current)), (j[28] = er), (j[29] = h)) : (h = j[29]),
        j[30] !== E
          ? ((g = () => {
              et.current ||
                ((et.current = !0), (0, S.yy)(E, e8.FGm, { stepType: "WorkspaceIntro", stepIndex: (0, T.At)(0) }))
            }),
            (j[30] = E),
            (j[31] = g))
          : (g = j[31]))
      let ed = q || z
      return (
        j[32] !== U
          ? ((f =
              null == U
                ? null
                : (0, a.jsx)(na.R, {
                    route: {
                      routeKind: "chatgpt-thread",
                      conversationId: U,
                      pathname: `/c/${U}`,
                      routeTemplate: "/c/:conversationId",
                    },
                    children: (0, a.jsx)(nn.A, {
                      children: (0, a.jsx)(ne.ChatGptConversationContent, {
                        conversationId: U,
                        isInlinePreview: !0,
                        isReadOnlyPreview: !0,
                        isTemporaryChat: !1,
                        sharedConversationId: null,
                      }),
                    }),
                  })),
            (j[32] = U),
            (j[33] = f))
          : (f = j[33]),
        j[34] !== ea ? ((_ = () => ea("Role")), (j[34] = ea), (j[35] = _)) : (_ = j[35]),
        j[36] !== ea || j[37] !== er || j[38] !== ei
          ? ((b = (e) => {
              ;(D(e), "teacher" === e ? ea("TeacherDetails") : er((t) => ei(e, "", "", t)))
            }),
            (j[36] = ea),
            (j[37] = er),
            (j[38] = ei),
            (j[39] = b))
          : (b = j[39]),
        j[40] !== ea || j[41] !== er || j[42] !== es
          ? ((x = () => {
              ;(ea("Tour", 0), er((e) => es(0, e)))
            }),
            (j[40] = ea),
            (j[41] = er),
            (j[42] = es),
            (j[43] = x))
          : (x = j[43]),
        j[44] !== ea ||
        j[45] !== q ||
        j[46] !== R ||
        j[47] !== er ||
        j[48] !== ei ||
        j[49] !== E ||
        j[50] !== el ||
        j[51] !== I
          ? ((C = () => {
              ;(q && "Tour" !== I) ||
                ("Role" === I
                  ? ((0, S.yy)(E, e8.yP9, { step: "Role" }), ea("Loading"))
                  : "TeacherDetails" === I
                    ? ((0, S.yy)(E, e8.uxs, { step: "TeacherDetails" }), G(""), W(""), er((e) => ei(R, "", "", e)))
                    : el())
            }),
            (j[44] = ea),
            (j[45] = q),
            (j[46] = R),
            (j[47] = er),
            (j[48] = ei),
            (j[49] = E),
            (j[50] = el),
            (j[51] = I),
            (j[52] = C))
          : (C = j[52]),
        j[53] !== ea ||
        j[54] !== q ||
        j[55] !== B ||
        j[56] !== L ||
        j[57] !== k ||
        j[58] !== M ||
        j[59] !== R ||
        j[60] !== er ||
        j[61] !== ei ||
        j[62] !== E ||
        j[63] !== es ||
        j[64] !== I ||
        j[65] !== z ||
        j[66] !== F
          ? ((w = () => {
              q ||
                z ||
                ("TeacherDetails" === I
                  ? er((e) => ei(R, L, F, e))
                  : "Tour" === I && B < 2
                    ? (ea("Tour", B + 1), er((e) => es(B + 1, e)))
                    : "Tour" === I
                      ? ea("WrappingUp")
                      : "WrappingUp" === I &&
                        er(async (e) => {
                          ;((0, S.yy)(E, e8.t72, {}),
                            await (0, e6.de)(E, k, e).catch((t) => {
                              if ("AbortError" === t.name) throw t
                              e.throwIfAborted()
                            }),
                            e.throwIfAborted(),
                            M())
                        }))
            }),
            (j[53] = ea),
            (j[54] = q),
            (j[55] = B),
            (j[56] = L),
            (j[57] = k),
            (j[58] = M),
            (j[59] = R),
            (j[60] = er),
            (j[61] = ei),
            (j[62] = E),
            (j[63] = es),
            (j[64] = I),
            (j[65] = z),
            (j[66] = F),
            (j[67] = w))
          : (w = j[67]),
        j[68] !== B ||
        j[69] !== L ||
        j[70] !== R ||
        j[71] !== I ||
        j[72] !== F ||
        j[73] !== ed ||
        j[74] !== f ||
        j[75] !== _ ||
        j[76] !== b ||
        j[77] !== x ||
        j[78] !== C ||
        j[79] !== w ||
        j[80] !== N
          ? ((v = (0, a.jsx)(nx, {
              step: I,
              workspaceName: N,
              role: R,
              grade: L,
              subject: F,
              exampleIndex: B,
              busy: ed,
              transcript: f,
              onStart: _,
              onRole: b,
              onGrade: G,
              onSubject: W,
              onLoadingComplete: x,
              onSkip: C,
              onNext: w,
            })),
            (j[68] = B),
            (j[69] = L),
            (j[70] = R),
            (j[71] = I),
            (j[72] = F),
            (j[73] = ed),
            (j[74] = f),
            (j[75] = _),
            (j[76] = b),
            (j[77] = x),
            (j[78] = C),
            (j[79] = w),
            (j[80] = N),
            (j[81] = v))
          : (v = j[81]),
        j[82] !== q || j[83] !== Y || j[84] !== h || j[85] !== g || j[86] !== v || j[87] !== ec
          ? ((A = (0, a.jsx)(no, { busy: q, error: Y, fillContent: ec, onRetry: h, onShown: g, children: v })),
            (j[82] = q),
            (j[83] = Y),
            (j[84] = h),
            (j[85] = g),
            (j[86] = v),
            (j[87] = ec),
            (j[88] = A))
          : (A = j[88]),
        A
      )
    }
    async function nS() {}
    var nk = n("ZhRn"),
      nN = n("aSgO"),
      nM = n("SXZ1")
    function nE(e) {
      let t,
        n,
        s,
        l,
        c = (0, r.c)(15),
        { identity: d, onComplete: u } = e,
        p = (0, o.gh)(y.u),
        { client: m } = (0, K.cn)(),
        h = (0, i.useRef)(!1)
      c[0] !== d.accountId || c[1] !== u || c[2] !== p
        ? ((t = function () {
            ;((0, nM.Wu)(p, d.accountId), u())
          }),
          (c[0] = d.accountId),
          (c[1] = u),
          (c[2] = p),
          (c[3] = t))
        : (t = c[3])
      let g = t
      return (
        c[4] !== m ? ((n = m.getContext().user.country ?? null), (c[4] = m), (c[5] = n)) : (n = c[5]),
        c[6] !== g || c[7] !== d.accountId || c[8] !== d.userId || c[9] !== p
          ? ((s = () => {
              if (h.current) return
              h.current = !0
              let e = (0, nk.Ri)("oai-aytd-user") === d.userId
              ;((0, nM.cA)(p, d.accountId, { replay: !0, showWrappingUp: !e }), e && g())
            }),
            (c[6] = g),
            (c[7] = d.accountId),
            (c[8] = d.userId),
            (c[9] = p),
            (c[10] = s))
          : (s = c[10]),
        c[11] !== g || c[12] !== n || c[13] !== s
          ? ((l = (0, a.jsx)(nN.F, { country: n, onShown: s, onContinue: g })),
            (c[11] = g),
            (c[12] = n),
            (c[13] = s),
            (c[14] = l))
          : (l = c[14]),
        l
      )
    }
    let nO = E.Ikc({ workspaceOnboardingResume: E.Ikc({ accountId: E.YjP(), userId: E.YjP(), complete: E.zMY() }) })
    var nI = n("nM0x")
    function nP(e) {
      let t,
        n = (0, r.c)(2),
        { currentFlow: a, joinerFlow: o } = e,
        s = (0, K.AS)()
      n[0] !== s
        ? ((t = () => s.getLayer("659232070").get("flow_variant", "current")), (n[0] = s), (n[1] = t))
        : (t = n[1])
      let [l] = (0, i.useState)(t)
      return "joiner_v1" === l ? o : a
    }
    var nT = n("xQom"),
      nR = n("ZmVj"),
      nD = n("vw1R")
    let nL = "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
      nG = {
        role: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE",
        apps: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
        download: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP",
      }
    function nF(e, t, n) {
      ;((0, S.yy)(e, A.JY, {
        stepType: { role: "0", apps: "1", download: "2" }[n],
        productSurface: t ? "chatgpt_for_education" : void 0,
      }),
        t ||
          (0, S.yy)(e, R.ZX, {
            onboardingExperience: nL,
            action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
            stepType: nG[n],
          }))
    }
    function nW(e, t, n, a) {
      t || (0, S.yy)(e, R.ZX, { onboardingExperience: nL, action: n, connectorId: a })
    }
    var nB = n("rGp2"),
      nH = n("hOO0"),
      nU = n("cLdu"),
      nK = n("eFn4")
    let nV = (0, o.i1)(y.u, (e, { get: t }) => {
        if (
          t(d.chatGptAuthenticatedAccountId$) !== e.accountId ||
          t(d.chatGptAuthenticatedUserId$) !== e.userId ||
          t(m.Sk) !== e.accountId
        )
          return !1
        let n = t(m.s6)
        if (n.isPending) return
        if (!n.isSuccess || !0 !== n.data.developerMode) return !1
        let a = t(x.M9)
        if (t(x.RS) || null == a) return
        if ((t(x.JW, "2042715633"), t(x.JW, "1627064618"), a.checkGate("2042715633") || !a.checkGate("1627064618")))
          return !0
        let r = t(p.f, e.accountId)
        if (r.isPending) return
        let o = r.data?.accounts?.[e.accountId]?.account
        if (!r.isSuccess || o?.account_id !== e.accountId) return !1
        if ("account-admin" === o.account_user_role || "account-owner" === o.account_user_role) return !0
        let i = t(nK.Jk, e.accountId)
        if (!i.isPending)
          return i.isSuccess && i.data.permissions?.includes("chatgpt.workspace.connector.dev_mode") === !0
      }),
      nq = {
        google: [G._k["0"].connectorId, G._k["3"].connectorId, G._k["1"].connectorId, G._k["2"].connectorId],
        microsoft: [F.zd["0"].connectorId, F.zd["1"].connectorId, F.zd["3"].connectorId, F.zd["2"].connectorId],
      },
      n$ = [
        G._k["3"].connectorId,
        F.zd["2"].connectorId,
        "asdk_app_69a1d78e929881919bba0dbda1f6436d",
        F.zd["3"].connectorId,
        G._k["0"].connectorId,
        F.zd["0"].connectorId,
        G._k["1"].connectorId,
        F.zd["1"].connectorId,
        G._k["2"].connectorId,
        "asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
        "connector_76869538009648d5b282a4bb21c3d157",
        "asdk_app_69b31dc2110c8191b8b47dc98fe5a052",
        "asdk_app_695bfc98071c8191bac7bc479aa27de7",
      ],
      nz = E.g1P(E.YjP(), E.YjP().min(1).catch("")),
      nZ = (0, o.vU)(y.u, (e, { get: t, scope: n }) => {
        let a = !e.education || t(nV, e)
        return {
          queryKey: ["workspace-onboarding-apps", e.accountId, e.userId, e.education, ...(e.education ? [a] : [])],
          enabled: void 0 !== a,
          staleTime: tn.D.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: t }) => {
            let r = nJ(n.get(x.M9), e.education),
              o = { "ChatGPT-Account-Id": e.accountId, [nB.ok]: "CONNECTOR_SETTING" },
              [i, s, l] = await Promise.all([
                tt.Request.safePost("/aip/connectors/batch", {
                  additionalHeaders: o,
                  parameters: { query: { apply_eligibility_filter: !0 } },
                  requestBody: { connector_ids: [...new Set(r.flat())], include_actions: !1 },
                  signal: t,
                }),
                (0, nU.ds)(n, { accountId: e.accountId, hostId: nU.h4, roots: void 0 }, "connector_setup"),
                tt.Request.safeGet("/aip/workspace/connector-stats", { additionalHeaders: o, signal: t }).catch(
                  () => null,
                ),
              ])
            return (
              t.throwIfAborted(),
              (function (e, t, n, a, r = !0) {
                let o = new Set()
                return e.flatMap((e) => {
                  let i = e
                    .flatMap((e) => t.filter((t) => (0, nH.$)(t.id) === (0, nH.$)(e)))
                    .find(
                      (e) =>
                        ("ENABLED" === e.status || (r && "ONLY_ME" === e.status)) &&
                        e.name.trim().length > 0 &&
                        !nY.has((0, nH.$)(e.id)) &&
                        e.labels?.admin_only_connector !== "true",
                    )
                  if (!i || o.has((0, nH.$)(i.id))) return []
                  o.add((0, nH.$)(i.id))
                  let s = new Set(e.map(nH.$)),
                    l = n.some(
                      ({ canonicalAppId: e, plugin: t }) =>
                        null != e && s.has((0, nH.$)(e)) && t.enabled && "DISABLED_BY_ADMIN" !== t.availability,
                    ),
                    c = Math.max(
                      0,
                      ...(a?.connector_stats
                        ?.filter((e) => s.has((0, nH.$)(e.connector_id)))
                        .map((e) => e.unique_user_cnt ?? 0) ?? []),
                    )
                  return [
                    {
                      connector: {
                        ...i,
                        logo_url: i.icon_assets?.["256_square"] ?? i.logo_url,
                        logo_url_dark: i.icon_dark_assets?.["256_square"] ?? i.logo_url_dark,
                      },
                      familyIds: e,
                      connected: l,
                      teammateCount: c,
                    },
                  ]
                })
              })(r, i.connectors, s, l, !0 === a)
            )
          },
        }
      }),
      nY = new Set(
        [
          "connector_bd313622bce5485cb3d0b338715f7108",
          "connector_3f8d1a79f27c4c7ba1a897ab13bf37dc",
          "connector_8cbe1e9e357f4ec79fa9f1a8aa78f4c1",
          "connector_fdb98b59c8d44f678b086d20e82bd316",
        ].map(nH.$),
      )
    function nJ(e, t) {
      let n = e?.getDynamicConfig("3365181325").get("old_to_new_mapping", {}),
        a = nz.parse(n ?? {})
      return (t ? [...n$.slice(0, 8), ...n$.slice(-2)] : n$).map((e) =>
        [Object.entries(a).find(([t]) => (0, nH.$)(t) === (0, nH.$)(e))?.[1], e].filter(
          (e) => !!e && !nY.has((0, nH.$)(e)),
        ),
      )
    }
    let nQ = (0, o.vU)(y.u, (e, t) => ({
      queryKey: [
        "workspace-onboarding-recommendation",
        e.accountId,
        e.userId,
        ...(!1 === e.includeWorkspaceStats ? [{ includeWorkspaceStats: !1 }] : []),
      ],
      staleTime: tn.D.FIVE_MINUTES,
      retry: !1,
      queryFn: async ({ signal: n }) => {
        let a = await tt.Request.safeGet("/aip/workspace/connector-recommendation", {
          additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
          parameters: { query: { include_workspace_stats: e.includeWorkspaceStats } },
          signal: n,
        }).catch(() => null)
        n.throwIfAborted()
        let r = nJ(t.get(x.M9), !1).find((e) => e.some((e) => (0, nH.$)(e) === (0, nH.$)(a?.connector_id ?? ""))),
          o = a?.mx_provider === "google" || a?.mx_provider === "microsoft" ? a.mx_provider : null
        for (let e of ["google", "microsoft"])
          if (r?.some((t) => nq[e].some((e) => (0, nH.$)(t) === (0, nH.$)(e))))
            return { provider: e, mxProvider: o, requestSucceeded: !0 }
        return { provider: o, mxProvider: o, requestSucceeded: null != a }
      },
    }))
    function nX(e, t, n, a) {
      if (null == t) return []
      let r = nq[t].flatMap((t) =>
          e.filter((e) => e.familyIds.some((e) => (0, nH.$)(e) === (0, nH.$)(t)) && (0, nB.Yo)(e.connector, "OAUTH")),
        ),
        o = r.find((e) => !e.connected)
      if (null == o) return []
      let i = nq[t].find((e) => o.familyIds.some((t) => (0, nH.$)(t) === (0, nH.$)(e)))
      if (null == i) return [o]
      let s = []
      return (
        "google" === t
          ? (s = (0, G.W9)({ planType: a, connectorId: i, statsigClient: n, disableExposureLog: !0 }).map(
              ({ connectorId: e }) => e,
            ))
          : (0, F.Vk)({ planType: a, connectorId: i, statsigClient: n, disableExposureLog: !0 }) &&
            (s = [...nq.microsoft]),
        r.filter((e) => e === o || e.familyIds.some((e) => s.some((t) => (0, nH.$)(t) === (0, nH.$)(e))))
      )
    }
    var n1 = n("Sezd"),
      n0 = n("ZQu1"),
      n2 = n("a6Zv"),
      n3 = n("syrC"),
      n4 = n.p + "assets/52b994662a0d.svg",
      n5 = n.p + "assets/1e2a55818ac2.svg",
      n6 = n.p + "assets/8206cb02ef38.svg",
      n8 = n("RXuq")
    function n7() {
      let e,
        t,
        n,
        o,
        i,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v,
        A,
        j,
        S,
        k,
        N,
        M,
        E,
        O,
        I,
        P,
        T = (0, r.c)(51),
        R = (0, s.A)(),
        D = (0, tl.I)()
      T[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { opacity: 0, y: 12 }), (T[0] = e)) : (e = T[0])
      let L = 0.35 * !D
      T[1] !== L
        ? ((t = { hidden: e, show: { opacity: 1, y: 0, transition: { duration: L } } }), (T[1] = L), (T[2] = t))
        : (t = T[2])
      let G = t
      ;(T[3] !== R
        ? ((n = R.formatMessage({
            id: "chatgpt.onboarding.new_workspace.connectors_preview.image.description",
            defaultMessage: "An example of ChatGPT answering a project launch question using connected work apps.",
          })),
          (T[3] = R),
          (T[4] = n))
        : (n = T[4]),
        T[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = {}), (T[5] = o)) : (o = T[5]))
      let F = 0.15 * !D
      ;(T[6] !== F ? ((i = (0, n3.y)(F)), (T[6] = F), (T[7] = i)) : (i = T[7]),
        T[8] !== i
          ? ((c = { hidden: o, show: { transition: { delayChildren: i } } }), (T[8] = i), (T[9] = c))
          : (c = T[9]))
      let W = !D && "hidden"
      return (
        T[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.question",
              defaultMessage: "When is Project Horizon launching?",
            })),
            (T[10] = d))
          : (d = T[10]),
        T[11] !== G
          ? ((u = (0, a.jsx)(ti.P.div, {
              className:
                "ms-auto max-w-[70%] rounded-2xl bg-surface-tertiary px-4 py-2 text-base leading-6.5 text-default",
              variants: G,
              children: d,
            })),
            (T[11] = G),
            (T[12] = u))
          : (u = T[12]),
        T[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(n0.R, {
              className: "size-5 shrink-0",
              alt: "",
              src: n6,
              fallback: (0, a.jsx)("span", {}),
              monochrome: !0,
            })),
            (T[13] = p))
          : (p = T[13]),
        T[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4",
              children: [
                p,
                (0, a.jsx)("div", {
                  className: "text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.source.notion",
                    defaultMessage: "Notion",
                  }),
                }),
              ],
            })),
            (T[14] = m))
          : (m = T[14]),
        T[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("div", {
              className: "inline-flex h-16 flex-1 basis-0 items-start rounded-2xl border border-default px-4 py-3",
              children: (0, a.jsxs)("div", {
                className: "flex w-full flex-col gap-1",
                children: [
                  m,
                  (0, a.jsx)("div", {
                    className: "text-xs leading-4 text-default",
                    children: (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.new_workspace.connectors_preview.source.notion_project",
                      defaultMessage: "Project Horizon",
                    }),
                  }),
                ],
              }),
            })),
            (T[15] = h))
          : (h = T[15]),
        T[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(n0.R, {
              className: "size-5 shrink-0",
              alt: "",
              src: n8,
              fallback: (0, a.jsx)("span", {}),
            })),
            (T[16] = g))
          : (g = T[16]),
        T[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4",
              children: [
                g,
                (0, a.jsx)("div", {
                  className: "text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.source.slack",
                    defaultMessage: "Slack",
                  }),
                }),
              ],
            })),
            (T[17] = f))
          : (f = T[17]),
        T[18] === Symbol.for("react.memo_cache_sentinel")
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
                    }),
                  }),
                ],
              }),
            })),
            (T[18] = _))
          : (_ = T[18]),
        T[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)("div", {
              className: "flex items-center text-xs leading-4",
              children: [n4, ei, n5].map(an),
            })),
            (T[19] = b))
          : (b = T[19]),
        T[20] === Symbol.for("react.memo_cache_sentinel")
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
                      values: { count: 32 },
                    }),
                  }),
                ],
              }),
            })),
            (T[20] = y))
          : (y = T[20]),
        T[21] !== G
          ? ((x = (0, a.jsxs)(ti.P.div, {
              className: "mt-3.5 flex flex-wrap items-stretch gap-2",
              variants: G,
              children: [h, _, y],
            })),
            (T[21] = G),
            (T[22] = x))
          : (x = T[22]),
        T[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.search_caption",
              defaultMessage: "Searched company knowledge",
            })),
            (T[23] = C))
          : (C = T[23]),
        T[24] !== G
          ? ((w = (0, a.jsx)(ti.P.div, {
              className: "mt-1 text-base leading-6.5 text-secondary",
              variants: G,
              children: C,
            })),
            (T[24] = G),
            (T[25] = w))
          : (w = T[25]),
        T[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_body",
              defaultMessage:
                "Project Horizon is moving through staged rollout planning. The product team is expanding integrations, validating permission mappings, and working through security reviews with a small pilot in mind.",
            })),
            (T[26] = v))
          : (v = T[26]),
        T[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsxs)("p", {
              className: "mb-6 text-base leading-6.5 text-default",
              children: [
                v,
                (0, a.jsx)("span", {
                  className: "ms-1 inline-flex items-center gap-1 rounded-xs bg-surface-tertiary px-1 py-0.5",
                  children: [n8, n6].map(at),
                }),
              ],
            })),
            (T[27] = A))
          : (A = T[27]),
        T[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, a.jsx)("h3", {
              className: "mb-1 text-lg leading-7 font-semibold text-default",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.title",
                defaultMessage: "Rollout Plan",
              }),
            })),
            (T[28] = j))
          : (j = T[28]),
        T[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.pilot_planning",
              defaultMessage:
                "<strong>Pilot planning:</strong> Validate core workflows, data handling, permission mappings, and connector reliability with a smaller user group.",
              values: { strong: ae },
            })),
            (T[29] = S))
          : (S = T[29]),
        T[30] !== G ? ((k = (0, a.jsx)(ti.P.li, { variants: G, children: S })), (T[30] = G), (T[31] = k)) : (k = T[31]),
        T[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.after_validation",
              defaultMessage:
                "<strong>Broader rollout:</strong> Expand access to more users and teams after stability, access-control settings, and admin controls are confirmed.",
              values: { strong: n9 },
            })),
            (T[32] = N))
          : (N = T[32]),
        T[33] !== G ? ((M = (0, a.jsx)(ti.P.li, { variants: G, children: N })), (T[33] = G), (T[34] = M)) : (M = T[34]),
        T[35] !== k || T[36] !== M
          ? ((E = (0, a.jsxs)("div", {
              children: [
                j,
                (0, a.jsxs)("ul", {
                  className: "list-disc ps-5 text-base leading-6.5 text-secondary",
                  children: [k, M],
                }),
              ],
            })),
            (T[35] = k),
            (T[36] = M),
            (T[37] = E))
          : (E = T[37]),
        T[38] !== G || T[39] !== E
          ? ((O = (0, a.jsxs)(ti.P.div, { className: "-mt-1 w-full max-w-180", variants: G, children: [A, E] })),
            (T[38] = G),
            (T[39] = E),
            (T[40] = O))
          : (O = T[40]),
        T[41] !== u || T[42] !== x || T[43] !== w || T[44] !== O || T[45] !== c || T[46] !== W
          ? ((I = (0, a.jsx)("div", {
              className:
                "relative h-full w-full overflow-hidden rounded-[40px] border border-default mask-b-from-80% mask-b-to-100%",
              "aria-hidden": "true",
              children: (0, a.jsx)("div", {
                className: "pointer-events-none absolute inset-0",
                children: (0, a.jsxs)(ti.P.div, {
                  className: "absolute inset-x-6 top-8 flex flex-col gap-3",
                  variants: c,
                  initial: W,
                  animate: "show",
                  children: [u, x, w, O],
                }),
              }),
            })),
            (T[41] = u),
            (T[42] = x),
            (T[43] = w),
            (T[44] = O),
            (T[45] = c),
            (T[46] = W),
            (T[47] = I))
          : (I = T[47]),
        T[48] !== n || T[49] !== I
          ? ((P = (0, a.jsx)("div", {
              className: "relative h-full w-full shrink-0 p-3 select-none max-[839px]:hidden md:w-1/2 md:p-4",
              role: "img",
              "aria-label": n,
              children: I,
            })),
            (T[48] = n),
            (T[49] = I),
            (T[50] = P))
          : (P = T[50]),
        P
      )
    }
    function n9(e) {
      return (0, a.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function ae(e) {
      return (0, a.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function at(e) {
      return (0, a.jsx)(
        n0.R,
        { className: "size-3 shrink-0", alt: "", src: e, fallback: (0, a.jsx)("span", {}), monochrome: e === n6 },
        e,
      )
    }
    function an(e) {
      return (0, a.jsx)(n0.R, { className: "size-5 shrink-0", alt: "", src: e, fallback: (0, a.jsx)("span", {}) }, e)
    }
    function aa(e) {
      let t,
        n,
        o,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v = (0, r.c)(41),
        { apps: A, busy: j, error: S, notice: k, onConnect: N, onContinue: M, onSkip: E } = e,
        O = (0, s.A)(),
        I = (0, n2.Y)(),
        [P, T] = (0, i.useState)(!1)
      v[0] !== A ? ((t = A?.filter(ao).length ?? 0), (v[0] = A), (v[1] = t)) : (t = v[1])
      let R = t
      ;(v[2] !== R
        ? ((n = (0, a.jsx)("h1", {
            className: "text-2xl md:text-3xl",
            children:
              R > 0
                ? (0, a.jsx)(l.A, { id: "educationOnboarding.apps.more.title", defaultMessage: "Connect more apps" })
                : (0, a.jsx)(l.A, {
                    id: "educationOnboarding.apps.title",
                    defaultMessage: "Select apps you use at work",
                  }),
          })),
          (v[2] = R),
          (v[3] = n))
        : (n = v[3]),
        v[4] !== R
          ? ((o = (0, a.jsx)("p", {
              className: "mt-4 text-sm text-secondary md:text-base",
              children:
                R > 0
                  ? (0, a.jsx)(l.A, {
                      id: "educationOnboarding.apps.more.subtitle",
                      defaultMessage: "Get better answers by connecting more apps",
                    })
                  : (0, a.jsx)(l.A, {
                      id: "educationOnboarding.apps.subtitle",
                      defaultMessage: "These apps are enabled for your workspace",
                    }),
            })),
            (v[4] = R),
            (v[5] = o))
          : (o = v[5]),
        v[6] !== n || v[7] !== o
          ? ((c = (0, a.jsxs)("div", {
              className: "mt-6 flex flex-col items-center px-6 text-center",
              children: [n, o],
            })),
            (v[6] = n),
            (v[7] = o),
            (v[8] = c))
          : (c = v[8]))
      let D = !P && "[mask-image:linear-gradient(180deg,black_80%,transparent_100%)]"
      ;(v[9] !== D
        ? ((d = (0, Q.A)("mx-6 mt-3 grow overflow-auto rounded-2xl p-3", D)), (v[9] = D), (v[10] = d))
        : (d = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (e) => {
              let t = e.currentTarget
              T(t.scrollTop + t.clientHeight >= t.scrollHeight - 2)
            }),
            (v[11] = u))
          : (u = v[11]),
        v[12] !== A || v[13] !== j || v[14] !== I || v[15] !== S || v[16] !== O || v[17] !== N
          ? ((p =
              S ??
              (0, a.jsx)("div", {
                className: "grid grid-cols-2 gap-2",
                "aria-busy": null == A,
                children:
                  null == A
                    ? Array.from({ length: 6 }, ar)
                    : A.map((e) => {
                        let t = I ? (e.logoUrlDark ?? e.logoUrl) : (e.logoUrl ?? e.logoUrlDark)
                        return (0, a.jsxs)(
                          "button",
                          {
                            type: "button",
                            "aria-label": e.connected
                              ? O.formatMessage(
                                  {
                                    id: "chatgpt.onboarding.new_workspace.connectors.app.connected",
                                    defaultMessage: "{appName} is connected",
                                  },
                                  { appName: e.name },
                                )
                              : O.formatMessage(
                                  {
                                    id: "chatgpt.onboarding.new_workspace.connectors.app.connect",
                                    defaultMessage: "Connect {appName}",
                                  },
                                  { appName: e.name },
                                ),
                            "aria-disabled": e.connected || j,
                            className: (0, Q.A)(
                              "group flex min-w-0 grow flex-col rounded-xl border border-default p-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden",
                              !e.connected && !j && "cursor-interaction hover:bg-surface-tertiary",
                            ),
                            onClick: () => {
                              j || N?.(e.id)
                            },
                            children: [
                              (0, a.jsxs)("span", {
                                className: "flex w-full items-center justify-between gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "flex size-6 items-center justify-center",
                                    "aria-hidden": "true",
                                    children: t
                                      ? (0, a.jsx)(n0.R, {
                                          src: t,
                                          alt: "",
                                          className: "size-6",
                                          fallback: (0, a.jsx)(ea.HUG, {}),
                                        })
                                      : (0, a.jsx)(ea.HUG, {}),
                                  }),
                                  (0, a.jsx)("span", {
                                    className: (0, Q.A)(
                                      "flex size-5 items-center justify-center rounded-full",
                                      e.connected
                                        ? "bg-info-solid text-info-solid"
                                        : "bg-surface-tertiary group-hover:bg-surface-secondary",
                                    ),
                                    "aria-hidden": "true",
                                    children: e.connected ? (0, a.jsx)(ea.yIE, {}) : (0, a.jsx)(ea.xFs, {}),
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
                                      values: { count: O.formatNumber(e.teammateCount) },
                                    }),
                                  })
                                : null,
                            ],
                          },
                          e.id,
                        )
                      }),
              })),
            (v[12] = A),
            (v[13] = j),
            (v[14] = I),
            (v[15] = S),
            (v[16] = O),
            (v[17] = N),
            (v[18] = p))
          : (p = v[18]),
        v[19] !== k || v[20] !== d || v[21] !== p
          ? ((m = (0, a.jsxs)("div", { className: d, onScroll: u, children: [k, p] })),
            (v[19] = k),
            (v[20] = d),
            (v[21] = p),
            (v[22] = m))
          : (m = v[22]))
      let L = j || null == A || 0 === R
      return (
        v[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(l.A, {
              id: "educationOnboarding.apps.continue",
              defaultMessage: "Continue to Workspace",
            })),
            (v[23] = h))
          : (h = v[23]),
        v[24] !== M || v[25] !== L
          ? ((f = (0, a.jsx)(g.$, {
              color: "chatgptPrimary",
              size: "panelAction",
              radius: "full",
              className: "w-70",
              disabled: L,
              onClick: M,
              children: h,
            })),
            (v[24] = M),
            (v[25] = L),
            (v[26] = f))
          : (f = v[26]),
        v[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(l.A, { id: "educationOnboarding.apps.skip", defaultMessage: "Skip" })), (v[27] = _))
          : (_ = v[27]),
        v[28] !== j || v[29] !== E
          ? ((b = (0, a.jsx)(g.$, {
              color: "ghost",
              size: "dialogAction",
              radius: "full",
              disabled: j,
              onClick: E,
              children: _,
            })),
            (v[28] = j),
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
        v[34] !== y || v[35] !== c || v[36] !== m
          ? ((x = (0, a.jsxs)("div", {
              className: "flex min-w-0 grow flex-col justify-center pb-1 md:w-1/2 md:pb-2",
              children: [c, m, y],
            })),
            (v[34] = y),
            (v[35] = c),
            (v[36] = m),
            (v[37] = x))
          : (x = v[37]),
        v[38] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, a.jsx)(n7, {})), (v[38] = C)) : (C = v[38]),
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
    function ar(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex grow flex-col gap-2 rounded-xl border border-default p-3",
          children: [
            (0, a.jsxs)("div", {
              className: "flex w-full items-center justify-between gap-2",
              children: [
                (0, a.jsx)("div", { className: "size-6", children: (0, a.jsx)(Y.y, {}) }),
                (0, a.jsx)("div", { className: "size-5 rounded-full bg-surface-tertiary" }),
              ],
            }),
            (0, a.jsx)("div", { className: "mt-3 h-4 w-24 rounded bg-surface-tertiary" }),
          ],
        },
        t,
      )
    }
    function ao(e) {
      return e.connected
    }
    function ai(e) {
      let t,
        n,
        i,
        s,
        c,
        d = (0, r.c)(38),
        u = (0, o.gh)(y.u)
      d[0] !== e.planType ? ((t = (0, w.V$)(e.planType)), (d[0] = e.planType), (d[1] = t)) : (t = d[1])
      let p = t
      d[2] !== e || d[3] !== u
        ? ((n = () => {
            ;((0, S.yy)(u, e8.aH3, {}), e.onFinish())
          }),
          (d[2] = e),
          (d[3] = u),
          (d[4] = n))
        : (n = d[4])
      let m = n
      d[5] !== p || d[6] !== e.identity
        ? ((i = { ...e.identity, education: p }), (d[5] = p), (d[6] = e.identity), (d[7] = i))
        : (i = d[7])
      let { data: h, isPending: f, isError: _, refetch: b } = (0, o._U)(nZ, i),
        x = !p
      d[8] !== x ? ((s = { enabled: x }), (d[8] = x), (d[9] = s)) : (s = d[9])
      let { data: C, isPending: v } = (0, o._U)(nQ, e.identity, s)
      if (f || (!p && v)) {
        let t
        if (p) {
          let t
          return (
            d[10] !== e.busy || d[11] !== e.onFinish || d[12] !== m
              ? ((t = (0, a.jsx)(aa, { apps: void 0, busy: e.busy, onContinue: e.onFinish, onSkip: m })),
                (d[10] = e.busy),
                (d[11] = e.onFinish),
                (d[12] = m),
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
                  defaultMessage: "Loading your workspace apps\u2026",
                }),
              })),
              (d[14] = t))
            : (t = d[14]),
          t
        )
      }
      if (_ || null == h) {
        let t, n, r, o, i, s, c
        ;(d[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("p", {
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.apps.error",
                defaultMessage: "We couldn\u2019t load your workspace apps",
              }),
            })),
            (d[15] = t))
          : (t = d[15]),
          d[16] !== b ? ((n = () => void b()), (d[16] = b), (d[17] = n)) : (n = d[17]),
          d[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)(l.A, { id: "workspaceOnboarding.retry", defaultMessage: "Try again" })), (d[18] = r))
            : (r = d[18]),
          d[19] !== n ? ((o = (0, a.jsx)(g.$, { onClick: n, children: r })), (d[19] = n), (d[20] = o)) : (o = d[20]),
          d[21] !== p || d[22] !== e.onFinish
            ? ((i = p
                ? null
                : (0, a.jsx)(g.$, {
                    color: "ghostActive",
                    onClick: e.onFinish,
                    children: (0, a.jsx)(l.A, { id: "workspaceOnboarding.apps.later", defaultMessage: "Set up later" }),
                  })),
              (d[21] = p),
              (d[22] = e.onFinish),
              (d[23] = i))
            : (i = d[23]),
          d[24] !== o || d[25] !== i
            ? ((s = (0, a.jsxs)("div", {
                role: "alert",
                className: "flex flex-col gap-4 text-center",
                children: [t, o, i],
              })),
              (d[24] = o),
              (d[25] = i),
              (d[26] = s))
            : (s = d[26]))
        let u = s
        return (
          d[27] !== p || d[28] !== u || d[29] !== e.busy || d[30] !== e.onFinish || d[31] !== m
            ? ((c = p ? (0, a.jsx)(aa, { apps: [], busy: e.busy, error: u, onContinue: e.onFinish, onSkip: m }) : u),
              (d[27] = p),
              (d[28] = u),
              (d[29] = e.busy),
              (d[30] = e.onFinish),
              (d[31] = m),
              (d[32] = c))
            : (c = d[32]),
          c
        )
      }
      let A = C?.provider ?? null
      return (
        d[33] !== h || d[34] !== p || d[35] !== e || d[36] !== A
          ? ((c = (0, a.jsx)(as, { ...e, apps: h, provider: A, education: p })),
            (d[33] = h),
            (d[34] = p),
            (d[35] = e),
            (d[36] = A),
            (d[37] = c))
          : (c = d[37]),
        c
      )
    }
    function as(e) {
      let t,
        n,
        c,
        d,
        u,
        p,
        m,
        h,
        f = (0, r.c)(30),
        { identity: _, planType: b, apps: x, provider: C, education: w, busy: v, beforeOAuth: A, onFinish: j } = e,
        k = (0, o.gh)(y.u),
        N = (0, s.A)(),
        { client: M } = (0, K.cn)(),
        { markAppConnectOAuthPending: E } = (0, L.ZN)(),
        O = (0, i.useRef)(!1),
        I = (0, i.useRef)(new Set()),
        P = (0, i.useRef)(!1),
        [D, G] = (0, i.useState)(!1)
      f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (f[0] = t)) : (t = f[0])
      let [F, W] = (0, i.useState)(t)
      f[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (f[1] = n)) : (n = f[1])
      let [B, H] = (0, i.useState)(n),
        [V, q] = (0, i.useState)(null),
        $ = (0, nD.o)(b),
        z = !w && ($ || "team" === b || "self_serve_business_prolite" === b)
      f[2] !== B
        ? ((c = (e) => ({ ...e, connected: e.connected || B.includes(e.connector.id) })), (f[2] = B), (f[3] = c))
        : (c = f[3])
      let Z = nX(x.map(c), C, M, b),
        Y = Z.find(ab),
        J = z && null != Y
      f[4] !== B
        ? ((d = (e) => ({ ...e, connected: e.connected || B.includes(e.connector.id) })), (f[4] = B), (f[5] = d))
        : (d = f[5])
      let Q = x.map(d),
        X = w ? Q.sort(a_) : x
      ;(J ? (X = Z) : w || (X = [...x].sort(af).slice(0, 6)),
        f[6] !== B ? ((u = (e) => e.connected || B.includes(e.connector.id)), (f[6] = B), (f[7] = u)) : (u = f[7]))
      let ee = X.filter(u),
        et = X.filter((e) => !ee.includes(e))
      f[8] !== F ? ((p = (e) => !F.includes(e.connector.id)), (f[8] = F), (f[9] = p)) : (p = f[9])
      let en = et.filter(p),
        ea =
          null == Y || null == C
            ? null
            : {
                connectorId: Y.connector.id,
                connectorName: Y.connector.name,
                connectorProvider: C,
                isEnterprise: $,
                onboardingExperience: nL,
              },
        er = function (e, t) {
          if (v || 0 === e.length) return
          let [n, ...a] = e
          if (t && ea)
            (0, S.yy)(k, R.nT, {
              ...ea,
              selectedConnectorIds: e.map(ag),
              selectableConnectorIds: et.map(ah),
              alreadyConnectedConnectorIds: ee.map(am),
              selectedConnectorCount: (0, T.At)(e.length),
              selectableConnectorCount: (0, T.At)(et.length),
              alreadyConnectedConnectorCount: (0, T.At)(ee.length),
              allSelectableSelected: e.length === et.length,
            })
          else if (w) {
            if (
              ((0, S.yy)(k, e8.AKq, { id: n.connector.id, name: n.connector.name, isSync: !1, connected: n.connected }),
              n.connected)
            )
              return
          } else
            nW(k, !1, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED", n.connector.id)
          ;(G(!1), q({ app: n, companions: a, recommended: t }))
        },
        eo = w ? "h-full w-full" : "flex w-full max-w-lg flex-col gap-6",
        ei = (e) => {
          if (e) {
            if (0 === X.length) {
              P.current || ((P.current = !0), j())
              return
            }
            if (J && ea)
              for (let { connector: e } of X)
                I.current.has(e.id) ||
                  (I.current.add(e.id), (0, S.yy)(k, R.tT, { ...ea, connectorId: e.id, connectorName: e.name }))
            !O.current &&
              ((O.current = !0),
              (J && ea) || nW(k, w, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN"))
          }
        },
        es = w
          ? (0, a.jsx)(aa, {
              apps: X.map(ap),
              busy: v,
              notice: D
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-base text-danger",
                    children: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.selectionExpired",
                      defaultMessage: "Available apps changed. Please choose your apps again",
                    }),
                  })
                : void 0,
              onConnect: (e) => {
                let t = X.find((t) => t.connector.id === e)
                t && er([t], !1)
              },
              onContinue: () => {
                ;((0, S.yy)(k, e8.CCm, { connectedCount: (0, T.At)(ee.length) }), j())
              },
              onSkip: () => {
                ;((0, S.yy)(k, e8.aH3, {}), j())
              },
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("h1", {
                  className: "text-center text-heading-lg font-semibold",
                  children: (0, a.jsx)(l.A, {
                    id: "workspaceOnboarding.apps.title",
                    defaultMessage: "Connect your apps",
                  }),
                }),
                (0, a.jsx)("p", {
                  className: "text-center text-base text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "workspaceOnboarding.apps.subtitle",
                    defaultMessage: "Bring your work into ChatGPT",
                  }),
                }),
                D
                  ? (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceOnboarding.apps.selectionExpired",
                        defaultMessage: "Available apps changed. Please choose your apps again",
                      }),
                    })
                  : null,
                (0, a.jsx)("div", {
                  className: "flex flex-col gap-2",
                  children: X.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: "relative flex items-center gap-3",
                        children: [
                          J
                            ? (0, a.jsx)(n1.S, {
                                id: e.connector.id,
                                checked: ee.includes(e) || !F.includes(e.connector.id),
                                disabled: v || ee.includes(e),
                                onCheckedChange: (t) =>
                                  W((n) => (t ? n.filter((t) => t !== e.connector.id) : [...n, e.connector.id])),
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
                                      values: { count: e.teammateCount },
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          ee.includes(e)
                            ? (0, a.jsx)("span", {
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(l.A, {
                                  id: "workspaceOnboarding.apps.connected",
                                  defaultMessage: "Connected",
                                }),
                              })
                            : null,
                          ee.includes(e) || J
                            ? null
                            : (0, a.jsx)(g.$, {
                                color: "secondary",
                                disabled: v,
                                onClick: () => er([e], !1),
                                children: (0, a.jsx)(l.A, {
                                  id: "workspaceOnboarding.apps.connect",
                                  defaultMessage: "Connect",
                                }),
                              }),
                        ],
                      },
                      e.connector.id,
                    ),
                  ),
                }),
                J
                  ? (0, a.jsx)(g.$, {
                      size: "beaconAction",
                      disabled: v || 0 === en.length,
                      onClick: () => er(en, !0),
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceOnboarding.apps.connectSelected",
                        defaultMessage: "Connect selected apps",
                      }),
                    })
                  : (0, a.jsx)(g.$, {
                      size: "beaconAction",
                      disabled: v || 0 === ee.length,
                      onClick: () => {
                        ;(nW(k, w, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
                          j())
                      },
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceOnboarding.apps.continue",
                        defaultMessage: "Continue",
                      }),
                    }),
                (0, a.jsx)(g.$, {
                  color: "ghostActive",
                  size: "beaconAction",
                  disabled: v,
                  onClick: () => {
                    ;(J && ea
                      ? (0, S.yy)(k, R.qo, ea)
                      : nW(k, w, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
                      j())
                  },
                  children: (0, a.jsx)(l.A, { id: "workspaceOnboarding.apps.later", defaultMessage: "Set up later" }),
                }),
              ],
            })
      return (
        f[10] !== A ||
        f[11] !== M ||
        f[12] !== V ||
        f[13] !== w ||
        f[14] !== _ ||
        f[15] !== N ||
        f[16] !== E ||
        f[17] !== j ||
        f[18] !== b ||
        f[19] !== C ||
        f[20] !== k ||
        f[21] !== q ||
        f[22] !== H ||
        f[23] !== G
          ? ((m =
              null == V
                ? null
                : (0, a.jsx)(U.Z, {
                    app: {
                      id: V.app.connector.id,
                      name: V.app.connector.name,
                      description: V.app.connector.description,
                      logoUrl: V.app.connector.logo_url,
                      logoUrlDark: V.app.connector.logo_url_dark ?? null,
                      distributionChannel: V.app.connector.distribution_channel ?? null,
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
                    expectedIdentity: _,
                    allowBrowserFallback: !1,
                    skipGoogleOAuthBundle: !0,
                    closeOnOAuthStarted: !1,
                    postConnectSource: null,
                    waitForConnectedHandler: !0,
                    requestedCompanionConnectorIds: V.companions.map(au),
                    appConnectOptions: {
                      connectorId: V.app.connector.id,
                      productSku: "CONNECTOR_SETTING",
                      oauthReferrer: "workspace_onboarding",
                      redirectAfter: "/",
                      oauthPresentation: "popup",
                    },
                    connectionDisclosure: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.selectedDisclosure",
                      defaultMessage: "You\u2019re connecting {apps}",
                      values: { apps: N.formatList([V.app, ...V.companions].map(ad)) },
                    }),
                    beforeConnect: async () => {
                      let e = k.query.snapshot(nZ, { ..._, education: w })
                      await e.invalidate()
                      let t = await e.fetch(),
                        n = [V.app, ...V.companions],
                        a = V.recommended
                          ? nX(t, C, M, b)
                          : t.filter((e) => !w || "ONLY_ME" !== e.connector.status || !0 === k.get(nV, _))
                      return n.some((e) => !a.some((t) => t.connector.id === e.connector.id && !t.connected))
                        ? (q(null), G(!0), !1)
                        : (V.recommended && (await A()), !0)
                    },
                    onOpenChange: (e) => {
                      e || q(null)
                    },
                    onConnected: () => {
                      ;(H((e) => [...e, V.app.connector.id, ...V.companions.map(ac)]), q(null), V.recommended && j())
                    },
                    onOAuthStarted: (e) =>
                      E({
                        ...e,
                        appConnectOptions: {
                          connectorId: V.app.connector.id,
                          productSku: "CONNECTOR_SETTING",
                          oauthReferrer: "workspace_onboarding",
                          redirectAfter: "/",
                          oauthPresentation: "popup",
                        },
                        returnTo: "/onboarding",
                        resumeTarget: {
                          kind: "return-to-location-state",
                          requiredConnectorIds: [V.app, ...V.companions].map(al),
                          successState: { workspaceOnboardingResume: { ..._, complete: V.recommended } },
                          failureState: { workspaceOnboardingResume: { ..._, complete: !1 } },
                        },
                      }),
                  })),
            (f[10] = A),
            (f[11] = M),
            (f[12] = V),
            (f[13] = w),
            (f[14] = _),
            (f[15] = N),
            (f[16] = E),
            (f[17] = j),
            (f[18] = b),
            (f[19] = C),
            (f[20] = k),
            (f[21] = q),
            (f[22] = H),
            (f[23] = G),
            (f[24] = m))
          : (m = f[24]),
        f[25] !== m || f[26] !== eo || f[27] !== ei || f[28] !== es
          ? ((h = (0, a.jsxs)("div", { className: eo, ref: ei, children: [es, m] })),
            (f[25] = m),
            (f[26] = eo),
            (f[27] = ei),
            (f[28] = es),
            (f[29] = h))
          : (h = f[29]),
        h
      )
    }
    function al(e) {
      return e.connector.id
    }
    function ac(e) {
      return e.connector.id
    }
    function ad(e) {
      return e.connector.name
    }
    function au(e) {
      return e.connector.id
    }
    function ap(e) {
      return {
        id: e.connector.id,
        name: e.connector.name,
        logoUrl: e.connector.logo_url ?? null,
        logoUrlDark: e.connector.logo_url_dark ?? null,
        connected: e.connected,
        teammateCount: e.teammateCount,
      }
    }
    function am(e) {
      return e.connector.id
    }
    function ah(e) {
      return e.connector.id
    }
    function ag(e) {
      return e.connector.id
    }
    function af(e, t) {
      return t.teammateCount - e.teammateCount
    }
    function a_(e, t) {
      return Number(t.connected) - Number(e.connected) || t.teammateCount - e.teammateCount
    }
    function ab(e) {
      return !e.connected
    }
    function ay(e) {
      let t,
        n,
        i,
        s,
        c,
        d,
        u,
        p,
        m,
        h = (0, r.c)(15),
        { onDownload: f, onContinue: _ } = e,
        b = (0, o.gh)(y.u),
        x = "https://chatgpt.com/download/"
      return (
        /Mac/.test(navigator.platform)
          ? (x = "https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg")
          : /Win/.test(navigator.platform) && (x = "https://apps.microsoft.com/detail/9nt1r1c2hh7j"),
        h[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.approved_by_admin",
                defaultMessage: "Approved by your admin",
              }),
            })),
            (h[0] = t))
          : (t = h[0]),
        h[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("h1", {
              className: "text-heading-lg font-semibold",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.title",
                defaultMessage: "Download the ChatGPT Desktop app",
              }),
            })),
            (h[1] = n))
          : (n = h[1]),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("p", {
              className: "text-base text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.description",
                defaultMessage:
                  "Use Chat and Codex side by side on your desktop to turn team ideas into docs, spreadsheets, presentations, and code",
              }),
            })),
            (h[2] = i))
          : (i = h[2]),
        h[3] !== f || h[4] !== b
          ? ((s = () => {
              ;((0, eG.M)(b), f())
            }),
            (h[3] = f),
            (h[4] = b),
            (h[5] = s))
          : (s = h[5]),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.download_desktop_app",
              defaultMessage: "Download desktop app",
            })),
            (h[6] = c))
          : (c = h[6]),
        h[7] !== s
          ? ((d = (0, a.jsx)(ts.G, {
              href: x,
              openTarget: "external-browser",
              initiator: "open_in_browser_bridge",
              onClick: s,
              children: c,
            })),
            (h[7] = s),
            (h[8] = d))
          : (d = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.maybe_later",
              defaultMessage: "Maybe later",
            })),
            (h[9] = u))
          : (u = h[9]),
        h[10] !== _
          ? ((p = (0, a.jsx)(g.$, { color: "ghostActive", size: "beaconAction", onClick: _, children: u })),
            (h[10] = _),
            (h[11] = p))
          : (p = h[11]),
        h[12] !== d || h[13] !== p
          ? ((m = (0, a.jsxs)("div", {
              className: "flex w-full max-w-lg flex-col gap-6 text-center",
              children: [t, n, i, d, p],
            })),
            (h[12] = d),
            (h[13] = p),
            (h[14] = m))
          : (m = h[14]),
        m
      )
    }
    let ax = (0, e5.YK)({
        it_technology_leader: {
          id: "edu.onboarding.role.it_technology_leader",
          defaultMessage: "IT/Technology Leader",
        },
        academic_administrator: {
          id: "edu.onboarding.role.academic_administrator",
          defaultMessage: "Academic Administrator",
        },
        faculty_professor: { id: "edu.onboarding.role.faculty_professor", defaultMessage: "Faculty / Educator" },
        researcher: { id: "edu.onboarding.role.researcher", defaultMessage: "Researcher" },
        campus_staff: { id: "edu.onboarding.role.campus_staff", defaultMessage: "Campus Staff" },
        student: { id: "edu.onboarding.role.student", defaultMessage: "Student" },
        other: { id: "edu.onboarding.role.other", defaultMessage: "Other" },
      }),
      aC = [
        { id: "student", displayValue: ax.student },
        { id: "faculty_professor", displayValue: ax.faculty_professor },
        { id: "researcher", displayValue: ax.researcher },
        { id: "academic_administrator", displayValue: ax.academic_administrator },
        { id: "campus_staff", displayValue: ax.campus_staff },
        { id: "it_technology_leader", displayValue: ax.it_technology_leader },
        { id: "other", displayValue: ax.other },
      ],
      aw = {
        student: (0, a.jsx)(ea.L$D, {}),
        faculty_professor: (0, a.jsx)(ea._NU, {}),
        researcher: (0, a.jsx)(ea.sBI, {}),
        academic_administrator: (0, a.jsx)(ea.TGw, {}),
        campus_staff: (0, a.jsx)(eZ, { className: "icon-base shrink-0", "aria-hidden": !0 }),
        it_technology_leader: (0, a.jsx)(ea.h3q, {}),
        other: (0, a.jsx)(Z.I, { asset: eq.O }),
      }
    function av(e) {
      let t,
        n,
        o,
        i,
        s = (0, r.c)(7),
        { value: c, disabled: d, onSelect: u } = e,
        p = void 0 !== d && d
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "edu.onboarding.role.question",
                defaultMessage: "Which best describes your role?",
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
                  }),
                }),
              ],
            })),
            (s[1] = n))
          : (n = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = aC.map(aA)), (s[2] = o)) : (o = s[2]),
        s[3] !== p || s[4] !== u || s[5] !== c
          ? ((i = (0, a.jsx)(J.P, {
              className:
                "max-h-full min-h-0 justify-between self-center overflow-hidden max-sm:h-full max-sm:px-6 max-sm:pt-10 max-sm:pb-5 sm:max-w-175",
              children: (0, a.jsxs)("div", {
                className: "flex min-h-0 w-full flex-1 flex-col",
                children: [
                  n,
                  (0, a.jsx)(e$, { options: o, value: c, fullWidthOption: "other", disabled: p, onSelect: u }),
                ],
              }),
            })),
            (s[3] = p),
            (s[4] = u),
            (s[5] = c),
            (s[6] = i))
          : (i = s[6]),
        i
      )
    }
    function aA(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }), icon: aw[e.id] }
    }
    function aj(e) {
      let t,
        n,
        l,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        f,
        _,
        b,
        x = (0, r.c)(65),
        { identity: C, planType: v, resumeApps: j, onComplete: k } = e,
        M = (0, o.gh)(y.u),
        E = (0, s.A)()
      x[0] !== v ? ((t = (0, w.V$)(v)), (x[0] = v), (x[1] = t)) : (t = x[1])
      let O = t,
        [I, P] = (0, i.useState)(j ? "apps" : "role"),
        [T, D] = (0, i.useState)(""),
        [L, G] = (0, i.useState)(!1),
        [F, W] = (0, i.useState)(!1),
        B = (0, i.useRef)(null),
        H = (0, i.useRef)(!1),
        U = (0, i.useRef)(null),
        K = (0, i.useRef)(!1),
        V = (0, i.useRef)(!1),
        q = (0, i.useRef)(aE)
      x[2] !== O
        ? ((n = () =>
            O
              ? aC
              : [
                  ...eV()(Object.entries(ez.V).filter(aM)).map(aN),
                  { id: "something_else", displayValue: ez.V.something_else },
                ]),
          (x[2] = O),
          (x[3] = n))
        : (n = x[3])
      let [$] = (0, i.useState)(n)
      ;(x[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => () => {
            ;(B.current?.abort(), U.current?.abort())
          }),
          (c = []),
          (x[4] = l),
          (x[5] = c))
        : ((l = x[4]), (c = x[5])),
        (0, i.useEffect)(l, c),
        x[6] !== O || x[7] !== T || x[8] !== M
          ? ((d = function (e, t) {
              let n = void 0 === t ? T : t
              ;(P(e),
                nF(M, O, e),
                "download" === e &&
                  (0, S.yy)(M, A.se, { role: n, isEngineering: "engineering" === n, isChatgptDesktopAppCopy: !0 }))
            }),
            (x[6] = O),
            (x[7] = T),
            (x[8] = M),
            (x[9] = d))
          : (d = x[9]))
      let z = d
      x[10] !== O || x[11] !== C || x[12] !== M
        ? ((u = async function (e) {
            ;(e.throwIfAborted(), !V.current) &&
              ((0, S.yy)(M, A.HE, { productSurface: O ? "chatgpt_for_education" : void 0 }),
              nW(M, O, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED"),
              await (0, e6.de)(M, C, e).catch((t) => {
                if ("AbortError" === t.name) throw t
                e.throwIfAborted()
              }),
              e.throwIfAborted(),
              (V.current = !0),
              O && (0, N.Jl)(M, C))
          }),
          (x[10] = O),
          (x[11] = C),
          (x[12] = M),
          (x[13] = u))
        : (u = x[13])
      let Z = u
      x[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = async function (e) {
            if (K.current) return
            let t = new AbortController()
            ;((B.current = t),
              (K.current = !0),
              (q.current = e),
              G(!0),
              W(!1),
              await e(t.signal)
                .catch(() => {
                  t.signal.aborted || W(!0)
                })
                .finally(() => {
                  ;((K.current = !1), t.signal.aborted || G(!1))
                }))
          }),
          (x[14] = p))
        : (p = x[14])
      let Y = p
      x[15] !== z || x[16] !== O || x[17] !== C || x[18] !== E || x[19] !== v || x[20] !== $ || x[21] !== M
        ? ((m = function (e) {
            ;(D(e),
              (0, S.yy)(M, A.R5, { role: e, productSurface: O ? "chatgpt_for_education" : void 0 }),
              Y(async (t) => {
                let n = $.find((t) => t.id === e)
                ;(await (0, e6.Qm)(
                  M,
                  C,
                  {
                    role: e,
                    departments: [],
                    role_label: O && n ? E.formatMessage(n.displayValue) : void 0,
                    role_product_surface: O ? "chatgpt_for_education" : void 0,
                    role_updated_at: O ? new Date().toISOString() : void 0,
                  },
                  null,
                  t,
                ),
                  t.throwIfAborted(),
                  z("apps", e))
              }))
          }),
          (x[15] = z),
          (x[16] = O),
          (x[17] = C),
          (x[18] = E),
          (x[19] = v),
          (x[20] = $),
          (x[21] = M),
          (x[22] = m))
        : (m = x[22])
      let J = m
      if ("role" === I) {
        let e
        ;(x[23] !== L || x[24] !== O || x[25] !== T || x[26] !== $ || x[27] !== J
          ? ((e = O
              ? (0, a.jsx)(av, { value: T, disabled: L, onSelect: J }, "role")
              : (0, a.jsx)(tW, { value: T, options: $.map(ak), disabled: L, onSelect: J })),
            (x[23] = L),
            (x[24] = O),
            (x[25] = T),
            (x[26] = $),
            (x[27] = J),
            (x[28] = e))
          : (e = x[28]),
          (h = e))
      } else if ("download" === I) {
        let e, t, n
        ;(x[29] !== z || x[30] !== T || x[31] !== M
          ? ((e = () => {
              ;((0, S.yy)(M, A.tx, { role: T, isEngineering: "engineering" === T, isChatgptDesktopAppCopy: !0 }),
                z("apps"))
            }),
            (x[29] = z),
            (x[30] = T),
            (x[31] = M),
            (x[32] = e))
          : (e = x[32]),
          x[33] !== z ? ((t = () => z("apps")), (x[33] = z), (x[34] = t)) : (t = x[34]),
          x[35] !== t || x[36] !== e
            ? ((n = (0, a.jsx)(ay, { onDownload: e, onContinue: t })), (x[35] = t), (x[36] = e), (x[37] = n))
            : (n = x[37]),
          (h = n))
      } else {
        let e, t, n
        ;(x[38] !== Z
          ? ((e = async () => {
              let e = new AbortController()
              ;((B.current = e), await Z(e.signal))
            }),
            (x[38] = Z),
            (x[39] = e))
          : (e = x[39]),
          x[40] !== Z || x[41] !== k
            ? ((t = () =>
                void Y(async (e) => {
                  ;(await Z(e), k())
                })),
              (x[40] = Z),
              (x[41] = k),
              (x[42] = t))
            : (t = x[42]),
          x[43] !== L || x[44] !== C || x[45] !== v || x[46] !== t || x[47] !== e
            ? ((n = (0, a.jsx)(ai, { identity: C, planType: v, busy: L, beforeOAuth: e, onFinish: t }, "apps")),
              (x[43] = L),
              (x[44] = C),
              (x[45] = v),
              (x[46] = t),
              (x[47] = e),
              (x[48] = n))
            : (n = x[48]),
          (h = n))
      }
      let Q = O ? "education" : "default"
      return (
        x[49] === Symbol.for("react.memo_cache_sentinel") ? ((g = () => void Y(q.current)), (x[49] = g)) : (g = x[49]),
        x[50] !== O || x[51] !== C || x[52] !== v || x[53] !== M || x[54] !== I
          ? ((f = () => {
              if (!H.current && ((H.current = !0), nF(M, O, I), !O)) {
                let e = new AbortController()
                ;((U.current = e),
                  M.query
                    .snapshot(nQ, C)
                    .fetch()
                    .then((t) => {
                      let n = (0, nD.o)(v)
                      !e.signal.aborted &&
                        (n || "team" === v || "self_serve_business_prolite" === v) &&
                        (0, S.yy)(M, R.CI, {
                          connectorProvider: t.provider ?? "none",
                          hasRecommendation: null != t.provider,
                          isEnterprise: n,
                          requestSucceeded: t.requestSucceeded,
                          onboardingExperience: nL,
                        })
                    })
                    .catch(aS))
              }
            }),
            (x[50] = O),
            (x[51] = C),
            (x[52] = v),
            (x[53] = M),
            (x[54] = I),
            (x[55] = f))
          : (f = x[55]),
        x[56] !== h || x[57] !== O
          ? ((_ = O ? (0, a.jsx)(to.N, { mode: "wait", children: h }) : h), (x[56] = h), (x[57] = O), (x[58] = _))
          : (_ = x[58]),
        x[59] !== L || x[60] !== F || x[61] !== f || x[62] !== _ || x[63] !== Q
          ? ((b = (0, a.jsx)(no, { layout: Q, busy: L, error: F, onRetry: g, onShown: f, children: _ })),
            (x[59] = L),
            (x[60] = F),
            (x[61] = f),
            (x[62] = _),
            (x[63] = Q),
            (x[64] = b))
          : (b = x[64]),
        b
      )
    }
    function aS() {}
    function ak(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }) }
    }
    function aN(e) {
      let [t, n] = e
      return { id: t, displayValue: n }
    }
    function aM(e) {
      let [t] = e
      return "student" !== t && "something_else" !== t
    }
    async function aE() {}
    let aO = (0, _._)(async () => (await n.e(152241).then(n.bind(n, "Z0ON"))).WorkspaceJoinerOnboardingFlow, {
        fallback: (0, a.jsx)(b.LoadingPage, { delay: !1 }),
      }),
      aI = (0, _._)(async () => (await n.e(784515).then(n.bind(n, "Y670"))).WorkspaceOnboardingReplay)
    function aP(e) {
      var t, n
      let i,
        _,
        A,
        j,
        S,
        k,
        M,
        E,
        O,
        P = (0, r.c)(83),
        { fallback: T } = e,
        R = (0, o.gh)(y.u),
        { accountId: D, userId: L, authMethod: G, isLoading: F } = (0, u.As)()
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((i = { enabled: !1 }), (P[0] = i)) : (i = P[0])
      let W = (0, o._U)(p.f, D, i),
        B = (0, o.Ul)(d.m0),
        H = (0, o.Ul)(d.chatGptAuthenticatedAccountId$),
        U = (0, o.Ul)(d.chatGptAuthenticatedUserId$),
        K = (0, c.Zp)(),
        V = (0, c.zy)(),
        q = (0, s.A)(),
        [$] = (0, c.ok)(),
        z = (0, o.Ul)(m.Sk),
        Z = (0, o._U)(x.JW, "4100765009"),
        Y = (0, o._U)(x.JW, "3011809797")
      if (F) {
        let e
        return (
          P[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (P[1] = e))
            : (e = P[1]),
          e
        )
      }
      if ("chatgpt" !== G || "debugOverride" in B) return T
      if ("loading" === B.status || (null != D && W.isPending)) {
        let e
        return (
          P[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (P[2] = e))
            : (e = P[2]),
          e
        )
      }
      P[3] !== D || P[4] !== W
        ? ((_ = null != D && W.isSuccess && W.data.account_ordering.includes(D) ? W.data.accounts[D] : void 0),
          (P[3] = D),
          (P[4] = W),
          (P[5] = _))
        : (_ = P[5])
      let J = _,
        Q = J?.account,
        X = "1" === $.get("replay")
      if (
        null == D ||
        null == L ||
        ("denied" === B.status && !(X ? (0, nR.JA)(B, J, D) : "unsupported-plan" === B.reason && (0, nI.jU)(J))) ||
        Q?.account_id !== D ||
        null == Q.account_user_id ||
        null == Q.account_user_role ||
        null == Q.structure ||
        null == Q.plan_type ||
        Q.is_deactivated ||
        J?.can_access_with_session === !1
      ) {
        let e, t
        return (
          P[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "onboarding.accountUnavailable",
                defaultMessage: "Unable to load your workspace",
              })),
              (P[6] = e))
            : (e = P[6]),
          P[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(f.A, {
                layout: "page",
                title: e,
                actions: (0, a.jsx)(g.$, {
                  onClick: aT,
                  children: (0, a.jsx)(l.A, { id: "onboarding.retryAccount", defaultMessage: "Try again" }),
                }),
              })),
              (P[7] = t))
            : (t = P[7]),
          t
        )
      }
      if (("allowed" === B.status && B.accountId !== D) || H !== D || U !== L || z !== D) {
        let e
        return (
          P[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (P[8] = e))
            : (e = P[8]),
          e
        )
      }
      P[9] !== D || P[10] !== L
        ? ((A = { accountId: D, userId: L }), (P[9] = D), (P[10] = L), (P[11] = A))
        : (A = P[11])
      let ee = A
      P[12] !== Q.plan_type
        ? ((j = (0, w.Hw)(Q.plan_type) && !/iPad|iPhone|iPod|Android|Tablet/.test((0, C.$)())),
          (P[12] = Q.plan_type),
          (P[13] = j))
        : (j = P[13])
      let et = j
      if (X) {
        let e
        return (
          P[14] !== ee || P[15] !== J || P[16] !== et
            ? ((e = J
                ? (0, a.jsx)(aI, { identity: ee, workspace: J, showDesktopDownload: et })
                : (0, a.jsx)(c.C5, { to: "/", replace: !0 })),
              (P[14] = ee),
              (P[15] = J),
              (P[16] = et),
              (P[17] = e))
            : (e = P[17]),
          e
        )
      }
      let en = `${D}:${L}`
      P[18] !== Q.plan_type || P[19] !== ee || P[20] !== et || P[21] !== en
        ? ((S = (0, a.jsx)(e3, { identity: ee, planType: Q.plan_type, showDesktopDownload: et }, en)),
          (P[18] = Q.plan_type),
          (P[19] = ee),
          (P[20] = et),
          (P[21] = en),
          (P[22] = S))
        : (S = P[22])
      let ea = S
      P[23] !== Q || P[24] !== Y || P[25] !== Z
        ? ((t = { k12: Z, health: Y }),
          (k =
            "workspace" !== Q.structure
              ? "personal"
              : "k12" === Q.plan_type || t.k12
                ? "k12"
                : Q.is_fedramp_compliant_workspace
                  ? null
                  : "hc" === Q.plan_type || "hc_consumption" === Q.plan_type || "quorum" === Q.plan_type || t.health
                    ? "health"
                    : "workspace"),
          (P[23] = Q),
          (P[24] = Y),
          (P[25] = Z),
          (P[26] = k))
        : (k = P[26])
      let er = k
      if (
        "health" !== er &&
        ((n = navigator),
        ((/iPad|iPhone|iPod/.test(n.userAgent) || ("MacIntel" === n.platform && n.maxTouchPoints > 1)) &&
          "ios" === $.get("from_webview")) ||
          ["promoCode", "referralCode", "partnerActivationToken"].some((e) => $.has(e)))
      ) {
        let e,
          t = `?${$}`
        return (
          P[27] !== t
            ? ((e = (0, a.jsx)(c.C5, { to: { pathname: "/", search: t }, replace: !0 })), (P[27] = t), (P[28] = e))
            : (e = P[28]),
          e
        )
      }
      P[29] !== V.state ? ((M = nO.safeParse(V.state)), (P[29] = V.state), (P[30] = M)) : (M = P[30])
      let eo = M,
        ei = eo.success ? eo.data.workspaceOnboardingResume : null,
        es = "workspace" === er && ei?.accountId === D && ei.userId === L
      if (es && ei.complete) {
        let e
        return (
          P[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.C5, { to: "/", replace: !0 })), (P[31] = e))
            : (e = P[31]),
          e
        )
      }
      let el = `${D}:${L}:${er}:${es ? V.key : ""}`
      P[32] !== V.search || P[33] !== K || P[34] !== $
        ? ((E = () => {
            K({ pathname: "/", search: "submit" === $.get(h.Wh) ? V.search : "" }, { replace: !0 })
          }),
          (P[32] = V.search),
          (P[33] = K),
          (P[34] = $),
          (P[35] = E))
        : (E = P[35])
      let ec = E
      P[36] !== Q.name || P[37] !== q
        ? ((O = Q.name ?? q.formatMessage(nT.L)), (P[36] = Q.name), (P[37] = q), (P[38] = O))
        : (O = P[38])
      let ed = O
      switch (er) {
        case "personal": {
          let e
          return (
            P[39] !== ee || P[40] !== el || P[41] !== ec
              ? ((e = (0, a.jsx)(nE, { identity: ee, onComplete: ec }, el)),
                (P[39] = ee),
                (P[40] = el),
                (P[41] = ec),
                (P[42] = e))
              : (e = P[42]),
            e
          )
        }
        case "k12": {
          let e, t
          return (
            P[43] !== ee || P[44] !== ec || P[45] !== R
              ? ((e = () => {
                  ;((0, N.Jl)(R, ee), ec())
                }),
                (P[43] = ee),
                (P[44] = ec),
                (P[45] = R),
                (P[46] = e))
              : (e = P[46]),
            P[47] !== ee || P[48] !== el || P[49] !== e || P[50] !== ed
              ? ((t = (0, a.jsx)(nj, { identity: ee, workspaceName: ed, onComplete: e }, el)),
                (P[47] = ee),
                (P[48] = el),
                (P[49] = e),
                (P[50] = ed),
                (P[51] = t))
              : (t = P[51]),
            t
          )
        }
        case "health": {
          let e, t
          return (
            P[52] !== K
              ? ((e = () => {
                  ;(0, v.Sv)({ type: "enterprise_onboarding_complete", reason: "completed" }) || K("/", { replace: !0 })
                }),
                (P[52] = K),
                (P[53] = e))
              : (e = P[53]),
            P[54] !== Q.plan_type || P[55] !== ee || P[56] !== el || P[57] !== e || P[58] !== ed
              ? ((t = (0, a.jsx)(t6, { identity: ee, workspaceName: ed, planType: Q.plan_type, onComplete: e }, el)),
                (P[54] = Q.plan_type),
                (P[55] = ee),
                (P[56] = el),
                (P[57] = e),
                (P[58] = ed),
                (P[59] = t))
              : (t = P[59]),
            t
          )
        }
        case "workspace": {
          let e, t, n, r
          P[60] !== Q.plan_type || P[61] !== ee || P[62] !== es || P[63] !== el || P[64] !== ec
            ? ((e = (0, a.jsx)(aj, { identity: ee, planType: Q.plan_type, resumeApps: es, onComplete: ec }, el)),
              (P[60] = Q.plan_type),
              (P[61] = ee),
              (P[62] = es),
              (P[63] = el),
              (P[64] = ec),
              (P[65] = e))
            : (e = P[65])
          let o = e
          if (es) return o
          P[66] !== $ ? ((t = $.get("via")), (P[66] = $), (P[67] = t)) : (t = P[67])
          let i = "invite" === t
          return (
            P[68] !== Q.account_user_role ||
            P[69] !== Q.plan_type ||
            P[70] !== ee ||
            P[71] !== V.state ||
            P[72] !== ea ||
            P[73] !== et ||
            P[74] !== i
              ? ((n =
                  (0, w.Hw)(Q.plan_type) && "account-owner" !== Q.account_user_role && !I(ee, V.state)
                    ? (0, a.jsx)(nP, {
                        currentFlow: ea,
                        joinerFlow: (0, a.jsx)(aO, {
                          invitePreviewAccepted: i,
                          identity: ee,
                          planType: Q.plan_type,
                          showDesktopDownload: et,
                        }),
                      })
                    : ea),
                (P[68] = Q.account_user_role),
                (P[69] = Q.plan_type),
                (P[70] = ee),
                (P[71] = V.state),
                (P[72] = ea),
                (P[73] = et),
                (P[74] = i),
                (P[75] = n))
              : (n = P[75]),
            P[76] !== o || P[77] !== ee || P[78] !== el || P[79] !== n || P[80] !== i
              ? ((r = (0, a.jsx)(aR, { identity: ee, viaInvite: i, fallback: o, children: n }, el)),
                (P[76] = o),
                (P[77] = ee),
                (P[78] = el),
                (P[79] = n),
                (P[80] = i),
                (P[81] = r))
              : (r = P[81]),
            r
          )
        }
        case null: {
          let e
          return (
            P[82] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.C5, { to: "/", replace: !0 })), (P[82] = e))
              : (e = P[82]),
            e
          )
        }
      }
    }
    function aT() {
      return window.location.reload()
    }
    function aR(e) {
      let t = (0, r.c)(7),
        { identity: n, viaInvite: s, children: l, fallback: d } = e,
        u = (0, o.Ul)(N.Lu),
        p = (0, o.Ul)(N.s6),
        m = (0, o.Ul)(N.Q$),
        h = (0, c.zy)(),
        [g, f] = (0, i.useState)(!1),
        _ = "member" === p || ("member" === u && I(n, h.state))
      if ((!g && _ && f(!0), (0, nI.s2)(h.pathname, h.search))) {
        let e
        return (
          t[0] !== h.search
            ? ((e = (0, a.jsx)(c.C5, { to: { pathname: "/", search: h.search }, replace: !0 })),
              (t[0] = h.search),
              (t[1] = e))
            : (e = t[1]),
          e
        )
      }
      if ("pending" === u || (!g && !_ && "pending" === p)) {
        let e
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      if (g && "member" !== u) {
        let e
        return (t[3] !== m ? ((e = (0, a.jsx)(c.C5, { to: m, replace: !0 })), (t[3] = m), (t[4] = e)) : (e = t[4]), e)
      }
      if (!g && !_) {
        if (s || I(n, h.state)) {
          let e
          return (t[5] !== m ? ((e = (0, a.jsx)(c.C5, { to: m, replace: !0 })), (t[5] = m), (t[6] = e)) : (e = t[6]), e)
        }
        return d
      }
      return l
    }
  },
  GFe9(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      engineering: { id: "work.onboarding.workArea.engineering", defaultMessage: "Engineering" },
      data_science: { id: "work.onboarding.workArea.data_science", defaultMessage: "Data Science" },
      product_management: { id: "work.onboarding.workArea.product_management", defaultMessage: "Product" },
      design: { id: "work.onboarding.workArea.design", defaultMessage: "Design" },
      marketing: { id: "work.onboarding.workArea.marketing", defaultMessage: "Marketing" },
      sales: { id: "work.onboarding.workArea.sales", defaultMessage: "Sales" },
      finance: { id: "work.onboarding.workArea.finance", defaultMessage: "Finance" },
      operations: { id: "work.onboarding.workArea.operations", defaultMessage: "Operations" },
      people_hr: { id: "work.onboarding.workArea.people_hr", defaultMessage: "People & HR" },
      legal: { id: "work.onboarding.workArea.legal", defaultMessage: "Legal" },
      student: { id: "work.onboarding.workArea.student", defaultMessage: "Student" },
      something_else: { id: "work.onboarding.workArea.something_else", defaultMessage: "Something else" },
    })
    n.d(t, {}, { V: a })
  },
  idGD(e, t, n) {
    var a = n("qmMi"),
      r = n("SPnB"),
      o = n("YJm0"),
      i = n("g2p6"),
      s = n("AGHv"),
      l = n("Zzm6"),
      c = n("OWtl"),
      d = n("OMIV"),
      u = n("vw1R"),
      p = n("UR81"),
      m = n("nM0x")
    let h = (0, a.bD)(
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
        let t = e(r.chatGptAuthenticatedAccountId$),
          n = null == t ? void 0 : e(o.f, t).data?.accounts?.[t]
        return (0, m.jU)(n) ? "/work" : "/"
      }),
      f = (0, a.un)(c.u, ({ get: e }) => {
        let t = e(r.m0)
        if ("loading" === t.status) return "pending"
        let n = e(r.chatGptAuthenticatedAccountId$)
        if (
          "debugOverride" in t ||
          null == n ||
          ("allowed" === t.status
            ? t.accountId !== n || "personal" === t.accountStructure
            : "unsupported-plan" !== t.reason) ||
          null == e(r.chatGptAuthenticatedUserId$)
        )
          return "ineligible"
        if (e(i.Sk) !== n) return "pending"
        let a = e(o.f, n)
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
            !(0, m.jU)(s))
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
                ((0, u.o)(n) || (0, p.Hw)(n))
                ? e.is_hipaa_compliant_workspace || ((0, u.o)(n) && t("1082878720")) || t("3011809797")
                  ? "ineligible"
                  : (0, p.V$)(n)
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
        let n = e(r.chatGptAuthenticatedAccountId$),
          a = e(r.chatGptAuthenticatedUserId$)
        if (null == n || null == a || e(h, { accountId: n, userId: a })) return "ineligible"
        let o = e(i.s6)
        return o.isPending
          ? "pending"
          : o.isSuccess && o.data?.eligibleAnnouncements?.includes(l.eu) === !0
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
        Jl: function (e, t) {
          e.set(h, t, !0)
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
            "string" != typeof n && n.account_id === t.accountId && e.get(r.chatGptAuthenticatedUserId$) === t.userId
          )
        },
        s6: b,
      },
    )
  },
  Zzm6(e, t, n) {
    var a = n("qmMi"),
      r = n("SPnB"),
      o = n("Kwur"),
      i = n("GTpx"),
      s = n("g2p6"),
      l = n("OWtl"),
      c = n("rvFo")
    let d = "oai/apps/hasSeenOnboarding",
      u = (0, a.vU)(l.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["health-onboarding-info", e, t],
        queryFn: ({ signal: n }) =>
          o.Request.safeGet("/accounts/{account_id}/users/{user_id}/onboarding_information", {
            parameters: { path: { account_id: e, user_id: t } },
            additionalHeaders: { "ChatGPT-Account-ID": e },
            signal: n,
          }),
        retry: !1,
        staleTime: c.D.ONE_MINUTE,
      }))
    async function p(e, t, n, a, r) {
      let s = new AbortController(),
        l = r ? AbortSignal.any([r, s.signal]) : s.signal,
        c = m(e, t, s),
        d = e.query.snapshot(u, t)
      try {
        ;(l.throwIfAborted(),
          await d.cancel(),
          l.throwIfAborted(),
          await o.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
            parameters: { path: { account_id: t.accountId, user_id: t.userId } },
            requestBody: { onboarding_information: n },
            additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
            signal: l,
          }),
          l.throwIfAborted(),
          null != a &&
            (await o.Request.safePatch("/user_system_messages", {
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
            e.queryClient.invalidateQueries({ queryKey: (0, i.Pm)(t) }),
          ]),
          l.throwIfAborted())
      } finally {
        c()
      }
    }
    function m(e, t, n) {
      return e.watch((e) => {
        let a = e.get(r.m0)
        ;("allowed" !== a.status ||
          "debugOverride" in a ||
          a.accountId !== t.accountId ||
          e.get(r.chatGptAuthenticatedAccountId$) !== t.accountId ||
          e.get(r.chatGptAuthenticatedUserId$) !== t.userId) &&
          n.abort()
      })
    }
    n.d(
      t,
      {},
      {
        E$: u,
        Nf: function (e, t, n) {
          return p(e, t, { role: "", departments: [] }, { role_user_message: "", other_user_message: "" }, n)
        },
        Qm: p,
        RR: m,
        de: async function (e, t, n) {
          let a = new AbortController(),
            r = n ? AbortSignal.any([n, a.signal]) : a.signal,
            i = m(e, t, a)
          try {
            if ((r.throwIfAborted(), e.get(s.Sk) !== t.accountId))
              throw new DOMException("Workspace settings changed", "AbortError")
            let n = e.query.snapshot(s.s6)
            if (
              (await o.Request.safePost("/settings/announcement_viewed", {
                parameters: { query: { announcement_id: d } },
                additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                signal: r,
              }),
              r.throwIfAborted(),
              e.get(s.Sk) !== t.accountId)
            )
              throw new DOMException("Workspace settings changed", "AbortError")
            ;(await n.cancel(),
              r.throwIfAborted(),
              n.setData((e) =>
                null == e ? e : { ...e, eligibleAnnouncements: e.eligibleAnnouncements?.filter((e) => e !== d) },
              ))
          } finally {
            i()
          }
        },
        eu: d,
      },
    )
  },
  xQom(e, t, n) {
    let a = (0, n("Qgfj").zR)({ id: "onboarding.workspaceNameFallback", defaultMessage: "your workspace" })
    n.d(t, {}, { L: a })
  },
  ZmVj(e, t, n) {
    var a = n("UR81")
    n.d(
      t,
      {},
      {
        JA: function (e, t, n) {
          return (
            !("debugOverride" in e) &&
            (("allowed" === e.status && e.accountId === n) ||
              ("denied" === e.status && "unsupported-plan" === e.reason && t?.features?.includes("codex_only") === !0))
          )
        },
        Ns: function (e) {
          return e.startsWith("workspace-replay-")
        },
        jw: function (e, t, n, r) {
          if (null == n || n.userId !== t.userId || n.accountId !== t.accountId) return null
          let o = e?.account,
            i = r?.id === t.userId && /^[^@\s]+@(?:dogfoodit\.com|mail\.openai\.com)$/i.test(r.email?.trim() ?? "")
          return !o ||
            (!0 !== o.is_openai_internal && !i) ||
            o.account_id !== t.accountId ||
            o.account_user_id?.split("__")[0] !== t.userId ||
            "workspace" !== o.structure ||
            !(0, a.Hw)(o.plan_type) ||
            o.is_deactivated ||
            o.is_fedramp_compliant_workspace ||
            o.is_hipaa_compliant_workspace ||
            e?.can_access_with_session === !1 ||
            e?.entitlement.has_active_subscription !== !0
            ? null
            : "account-owner" === o.account_user_role
              ? "owner"
              : "standard-user" === o.account_user_role || "account-admin" === o.account_user_role
                ? "joiner"
                : null
        },
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
      r = n("yqKZ"),
      o = n("RF9q"),
      i = n("c3f5")
    function s({ content: e, metadata: t, preserveEmptySections: n = !1 }) {
      if (t?.[a.uV] === !0) return (0, a.I$)(t).map((e) => ({ content: e.content, id: e.id, tone: e.label }))
      let o = (0, r.b_)({ content: e, metadata: t, preserveEmptySections: n }),
        i = (0, r.b_)({ content: "", metadata: t })
      return null == o || null == i
        ? o
        : o.map((e, t) => {
            let n = i[t]
            return null == n || n.tone !== e.tone || n.id === e.id ? e : { ...e, id: n.id }
          })
    }
    n.d(
      t,
      {},
      {
        He: function (e) {
          return (0, o.oz)(e)
        },
        IA: s,
        Is: function ({ attributes: e, isStreaming: t, rawText: n }) {
          let a = (n ?? "").replace(/^\r?\n/, "").replace(/\r?\n$/, ""),
            r = (0, o.q4)((0, i.B)(e, "metadata")),
            l = s({ content: a, metadata: r, preserveEmptySections: !t })
          return {
            bodyContent: a,
            content: l?.[0]?.content ?? a,
            emailMetadata: {
              bcc: (0, i.B)(e, "bcc"),
              cc: (0, i.B)(e, "cc"),
              recipient: (0, i.B)(e, "recipient"),
              subject: (0, i.B)(e, "subject"),
            },
            id: (0, i.B)(e, "id"),
            metadata: r,
            title: (0, i.B)(e, "title"),
            toneSections: l,
            variant: (0, i.B)(e, "variant"),
          }
        },
      },
    )
  },
  IQg5(e, t, n) {
    var a = n("ABep"),
      r = n("QosV"),
      o = n("zTAs"),
      i = n("CeUM"),
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
            u,
            p,
            m,
            h,
            g,
            f,
            _,
            b = (0, r.c)(29),
            {
              attributes: y,
              contentReferences: x,
              isStreaming: C,
              rawText: w,
              renderExtension: v,
              renderPersisted: A,
              testId: j,
            } = e
          if (b[0] !== y || b[1] !== x || b[2] !== C || b[3] !== w || b[4] !== v || b[5] !== A || b[6] !== j) {
            f = Symbol.for("react.early_return_sentinel")
            e: {
              n = (0, s.Is)({ attributes: y, isStreaming: C, rawText: w })
              let e = A?.(n)
              if (null != e) {
                f = (0, a.jsx)(a.Fragment, { children: e })
                break e
              }
              ;((t = i.i),
                (l = (0, o.Io)(n.content, { contentReferences: x, isStreaming: C })),
                (c = void 0),
                (d = n.emailMetadata),
                (u = !1),
                (p = v?.(n)),
                (m = j),
                (h = n.title),
                (g =
                  n.toneSections?.map((e) => ({
                    ...e,
                    content: (0, o.Io)(e.content, { contentReferences: x, isStreaming: C }),
                  })) ?? null))
            }
            ;((b[0] = y),
              (b[1] = x),
              (b[2] = C),
              (b[3] = w),
              (b[4] = v),
              (b[5] = A),
              (b[6] = j),
              (b[7] = t),
              (b[8] = n),
              (b[9] = l),
              (b[10] = c),
              (b[11] = d),
              (b[12] = u),
              (b[13] = p),
              (b[14] = m),
              (b[15] = h),
              (b[16] = g),
              (b[17] = f))
          } else
            ((t = b[7]),
              (n = b[8]),
              (l = b[9]),
              (c = b[10]),
              (d = b[11]),
              (u = b[12]),
              (p = b[13]),
              (m = b[14]),
              (h = b[15]),
              (g = b[16]),
              (f = b[17]))
          return f !== Symbol.for("react.early_return_sentinel")
            ? f
            : (b[18] !== t ||
              b[19] !== n.variant ||
              b[20] !== l ||
              b[21] !== c ||
              b[22] !== d ||
              b[23] !== u ||
              b[24] !== p ||
              b[25] !== m ||
              b[26] !== h ||
              b[27] !== g
                ? ((_ = (0, a.jsx)(t, {
                    content: l,
                    editorKey: c,
                    emailMetadata: d,
                    isEditable: u,
                    render: p,
                    testId: m,
                    title: h,
                    toneSections: g,
                    variant: n.variant,
                  })),
                  (b[18] = t),
                  (b[19] = n.variant),
                  (b[20] = l),
                  (b[21] = c),
                  (b[22] = d),
                  (b[23] = u),
                  (b[24] = p),
                  (b[25] = m),
                  (b[26] = h),
                  (b[27] = g),
                  (b[28] = _))
                : (_ = b[28]),
              _)
        },
      },
    )
  },
  dS6X(e, t, n) {
    var a = n("UP8A"),
      r = n("v5Cs"),
      o = TypeError
    e.exports = function (e) {
      if (a(e)) return e
      throw new o(r(e) + " is not a function")
    }
  },
  aRew(e, t, n) {
    var a = n("dBSE"),
      r = String,
      o = TypeError
    e.exports = function (e) {
      if (a(e)) return e
      throw new o(r(e) + " is not an object")
    }
  },
  M4Rs(e, t, n) {
    var a = n("lbJk"),
      r = a({}.toString),
      o = a("".slice)
    e.exports = function (e) {
      return o(r(e), 8, -1)
    }
  },
  Szsi(e) {
    e.exports = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
    }
  },
  FgJi(e, t, n) {
    var a = n("vlAc"),
      r = Object.defineProperty
    e.exports = function (e, t) {
      try {
        r(a, e, { value: t, configurable: !0, writable: !0 })
      } catch (n) {
        a[e] = t
      }
      return t
    }
  },
  ritu(e, t, n) {
    e.exports = !n("MGoG")(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    })
  },
  be5s(e, t, n) {
    var a = n("vlAc"),
      r = n("dBSE"),
      o = a.document,
      i = r(o) && r(o.createElement)
    e.exports = function (e) {
      return i ? o.createElement(e) : {}
    }
  },
  RpEq(e, t, n) {
    var a = n("vlAc").navigator,
      r = a && a.userAgent
    e.exports = r ? String(r) : ""
  },
  cOJA(e, t, n) {
    var a,
      r,
      o = n("vlAc"),
      i = n("RpEq"),
      s = o.process,
      l = o.Deno,
      c = (s && s.versions) || (l && l.version),
      d = c && c.v8
    ;(d && (r = (a = d.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])),
      !r && i && (!(a = i.match(/Edge\/(\d+)/)) || a[1] >= 74) && (a = i.match(/Chrome\/(\d+)/)) && (r = +a[1]),
      (e.exports = r))
  },
  MGoG(e) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  kRXN(e, t, n) {
    e.exports = !n("MGoG")(function () {
      var e = function () {}.bind()
      return "function" != typeof e || e.hasOwnProperty("prototype")
    })
  },
  z7cn(e, t, n) {
    var a = n("kRXN"),
      r = Function.prototype.call
    e.exports = a
      ? r.bind(r)
      : function () {
          return r.apply(r, arguments)
        }
  },
  lbJk(e, t, n) {
    var a = n("kRXN"),
      r = Function.prototype,
      o = r.call,
      i = a && r.bind.bind(o, o)
    e.exports = a
      ? i
      : function (e) {
          return function () {
            return o.apply(e, arguments)
          }
        }
  },
  lcaZ(e, t, n) {
    var a = n("vlAc"),
      r = n("UP8A")
    e.exports = function (e, t) {
      var n
      return arguments.length < 2 ? (r((n = a[e])) ? n : void 0) : a[e] && a[e][t]
    }
  },
  Dg3G(e, t, n) {
    var a = n("dS6X"),
      r = n("sFRP")
    e.exports = function (e, t) {
      var n = e[t]
      return r(n) ? void 0 : a(n)
    }
  },
  vlAc(e, t, n) {
    var a = function (e) {
      return e && e.Math === Math && e
    }
    e.exports =
      a("object" == typeof globalThis && globalThis) ||
      a("object" == typeof window && window) ||
      a("object" == typeof self && self) ||
      a("object" == typeof n.g && n.g) ||
      a("object" == typeof this && this) ||
      (function () {
        return this
      })() ||
      Function("return this")()
  },
  QKnk(e, t, n) {
    var a = n("lbJk"),
      r = n("fuV1"),
      o = a({}.hasOwnProperty)
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return o(r(e), t)
      }
  },
  QqHG(e, t, n) {
    var a = n("ritu"),
      r = n("MGoG"),
      o = n("be5s")
    e.exports =
      !a &&
      !r(function () {
        return (
          7 !==
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7
            },
          }).a
        )
      })
  },
  EzAB(e, t, n) {
    var a = n("lbJk"),
      r = n("MGoG"),
      o = n("M4Rs"),
      i = Object,
      s = a("".split)
    e.exports = r(function () {
      return !i("z").propertyIsEnumerable(0)
    })
      ? function (e) {
          return "String" === o(e) ? s(e, "") : i(e)
        }
      : i
  },
  UP8A(e) {
    var t = "object" == typeof document && document.all
    e.exports =
      void 0 === t && void 0 !== t
        ? function (e) {
            return "function" == typeof e || e === t
          }
        : function (e) {
            return "function" == typeof e
          }
  },
  sFRP(e) {
    e.exports = function (e) {
      return null == e
    }
  },
  dBSE(e, t, n) {
    var a = n("UP8A")
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : a(e)
    }
  },
  kPrk(e) {
    e.exports = !1
  },
  vJHk(e, t, n) {
    var a = n("lcaZ"),
      r = n("UP8A"),
      o = n("RmRk"),
      i = n("pyD8"),
      s = Object
    e.exports = i
      ? function (e) {
          return "symbol" == typeof e
        }
      : function (e) {
          var t = a("Symbol")
          return r(t) && o(t.prototype, s(e))
        }
  },
  oP4q(e, t, n) {
    var a = n("ritu"),
      r = n("QqHG"),
      o = n("Q5Uw"),
      i = n("aRew"),
      s = n("Quqj"),
      l = TypeError,
      c = Object.defineProperty,
      d = Object.getOwnPropertyDescriptor,
      u = "enumerable",
      p = "configurable",
      m = "writable"
    t.f = a
      ? o
        ? function (e, t, n) {
            if (
              (i(e), (t = s(t)), i(n), "function" == typeof e && "prototype" === t && "value" in n && m in n && !n[m])
            ) {
              var a = d(e, t)
              a &&
                a[m] &&
                ((e[t] = n.value),
                (n = { configurable: p in n ? n[p] : a[p], enumerable: u in n ? n[u] : a[u], writable: !1 }))
            }
            return c(e, t, n)
          }
        : c
      : function (e, t, n) {
          if ((i(e), (t = s(t)), i(n), r))
            try {
              return c(e, t, n)
            } catch (e) {}
          if ("get" in n || "set" in n) throw new l("Accessors not supported")
          return ("value" in n && (e[t] = n.value), e)
        }
  },
  aNGg(e, t, n) {
    var a = n("ritu"),
      r = n("z7cn"),
      o = n("cyXn"),
      i = n("Szsi"),
      s = n("MV5a"),
      l = n("Quqj"),
      c = n("QKnk"),
      d = n("QqHG"),
      u = Object.getOwnPropertyDescriptor
    t.f = a
      ? u
      : function (e, t) {
          if (((e = s(e)), (t = l(t)), d))
            try {
              return u(e, t)
            } catch (e) {}
          if (c(e, t)) return i(!r(o.f, e, t), e[t])
        }
  },
  RmRk(e, t, n) {
    e.exports = n("lbJk")({}.isPrototypeOf)
  },
  cyXn(e, t) {
    var n = {}.propertyIsEnumerable,
      a = Object.getOwnPropertyDescriptor
    t.f =
      a && !n.call({ 1: 2 }, 1)
        ? function (e) {
            var t = a(this, e)
            return !!t && t.enumerable
          }
        : n
  },
  mGId(e, t, n) {
    var a = n("z7cn"),
      r = n("UP8A"),
      o = n("dBSE"),
      i = TypeError
    e.exports = function (e, t) {
      var n, s
      if (
        ("string" === t && r((n = e.toString)) && !o((s = a(n, e)))) ||
        (r((n = e.valueOf)) && !o((s = a(n, e)))) ||
        ("string" !== t && r((n = e.toString)) && !o((s = a(n, e))))
      )
        return s
      throw new i("Can't convert object to primitive value")
    }
  },
  Rim5(e, t, n) {
    var a = n("sFRP"),
      r = TypeError
    e.exports = function (e) {
      if (a(e)) throw new r("Can't call method on " + e)
      return e
    }
  },
  r60i(e, t, n) {
    var a = n("kPrk"),
      r = n("vlAc"),
      o = n("FgJi"),
      i = "__core-js_shared__",
      s = (e.exports = r[i] || o(i, {}))
    ;(s.versions || (s.versions = [])).push({
      version: "3.46.0",
      mode: a ? "pure" : "global",
      copyright: "\xa9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
      license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
      source: "https://github.com/zloirock/core-js",
    })
  },
  AGIv(e, t, n) {
    var a = n("r60i")
    e.exports = function (e, t) {
      return a[e] || (a[e] = t || {})
    }
  },
  mPJy(e, t, n) {
    var a = n("cOJA"),
      r = n("MGoG"),
      o = n("vlAc").String
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        var e = Symbol("symbol detection")
        return !o(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && a && a < 41)
      })
  },
  MV5a(e, t, n) {
    var a = n("EzAB"),
      r = n("Rim5")
    e.exports = function (e) {
      return a(r(e))
    }
  },
  fuV1(e, t, n) {
    var a = n("Rim5"),
      r = Object
    e.exports = function (e) {
      return r(a(e))
    }
  },
  NuUD(e, t, n) {
    var a = n("z7cn"),
      r = n("dBSE"),
      o = n("vJHk"),
      i = n("Dg3G"),
      s = n("mGId"),
      l = n("eUVA"),
      c = TypeError,
      d = l("toPrimitive")
    e.exports = function (e, t) {
      if (!r(e) || o(e)) return e
      var n,
        l = i(e, d)
      if (l) {
        if ((void 0 === t && (t = "default"), !r((n = a(l, e, t))) || o(n))) return n
        throw new c("Can't convert object to primitive value")
      }
      return (void 0 === t && (t = "number"), s(e, t))
    }
  },
  Quqj(e, t, n) {
    var a = n("NuUD"),
      r = n("vJHk")
    e.exports = function (e) {
      var t = a(e, "string")
      return r(t) ? t : t + ""
    }
  },
  v5Cs(e) {
    var t = String
    e.exports = function (e) {
      try {
        return t(e)
      } catch (e) {
        return "Object"
      }
    }
  },
  JZZs(e, t, n) {
    var a = n("lbJk"),
      r = 0,
      o = Math.random(),
      i = a((1.1).toString)
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++r + o, 36)
    }
  },
  pyD8(e, t, n) {
    e.exports = n("mPJy") && !Symbol.sham && "symbol" == typeof Symbol.iterator
  },
  Q5Uw(e, t, n) {
    var a = n("ritu"),
      r = n("MGoG")
    e.exports =
      a &&
      r(function () {
        return 42 !== Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype
      })
  },
  eUVA(e, t, n) {
    var a = n("vlAc"),
      r = n("AGIv"),
      o = n("QKnk"),
      i = n("JZZs"),
      s = n("mPJy"),
      l = n("pyD8"),
      c = a.Symbol,
      d = r("wks"),
      u = l ? c.for || c : (c && c.withoutSetter) || i
    e.exports = function (e) {
      return (o(d, e) || (d[e] = s && o(c, e) ? c[e] : u("Symbol." + e)), d[e])
    }
  },
  gSn1(e, t, n) {
    let a = (0, n("ESTr").a)({
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
  Q4cg(e, t, n) {
    let a = (0, n("ESTr").a)({
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
  qXUS(e, t, n) {
    let a = (0, n("ESTr").a)({
      name: "toolbox-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 1.835938, width: 14.663086, height: 16.330078 },
        visualBounds: { x: 2.668213, y: 1.835938, width: 14.663086, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 1.835938, width: 14.663086, height: 16.330078 },
        center: { x: 9.999756, y: 10.000977 },
        insets: { top: 1.835938, right: 2.668701, bottom: 1.833984, left: 2.668213 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999756, y: 10.000977 },
          foreground: { x: 9.999756, y: 10.000977 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M11.2502 11.42C11.6174 11.4201 11.9153 11.7178 11.9153 12.085C11.915 12.452 11.6172 12.7499 11.2502 12.75H8.75025C8.38314 12.75 8.08547 12.452 8.08521 12.085C8.08521 11.7177 8.38298 11.42 8.75025 11.42H11.2502Z" fill="currentColor"/> <path d="M6.06079 2.86136C6.42939 1.75411 7.86661 1.47501 8.62329 2.36331L9.86255 3.81839C9.89425 3.85562 9.94061 3.87759 9.9895 3.87796L11.3665 3.88772L11.429 3.75101C11.561 3.46052 11.6727 3.2132 11.7786 3.01565C11.8873 2.81279 12.0103 2.62194 12.1809 2.45608C12.5888 2.06001 13.1368 1.83972 13.7053 1.84378C13.9435 1.84552 14.1641 1.89838 14.3831 1.96976C14.5962 2.03925 14.8483 2.14024 15.1448 2.25882C15.4692 2.38858 15.7446 2.49835 15.9631 2.60354C16.1864 2.71107 16.3975 2.83557 16.5793 3.01468C17.0109 3.44003 17.2441 4.02729 17.2229 4.63284C17.2139 4.88792 17.1462 5.12291 17.0579 5.35452C16.9715 5.58099 16.8477 5.84909 16.7014 6.16604L15.595 8.56253C15.7846 8.59536 15.9701 8.64781 16.1497 8.73929C16.5569 8.94686 16.8884 9.2783 17.0959 9.68558C17.2332 9.95513 17.285 10.2374 17.3088 10.5283C17.332 10.8118 17.3313 11.1593 17.3313 11.5684V13.7676C17.3313 14.41 17.3316 14.9321 17.2971 15.3545C17.262 15.7847 17.188 16.1704 17.0051 16.5293C16.7177 17.0935 16.2588 17.5524 15.6946 17.8399C15.3357 18.0227 14.95 18.0967 14.5198 18.1319C14.0973 18.1664 13.5752 18.166 12.9329 18.166H7.06665C6.42423 18.166 5.90219 18.1664 5.47974 18.1319C5.04961 18.0967 4.66381 18.0227 4.30493 17.8399C3.74093 17.5524 3.28279 17.0933 2.99536 16.5293C2.81248 16.1704 2.73754 15.7847 2.70239 15.3545C2.66789 14.9321 2.66822 14.41 2.66822 13.7676V11.5684C2.66822 11.1593 2.66751 10.8118 2.69068 10.5283C2.71448 10.2373 2.76721 9.95522 2.90454 9.68558C3.11211 9.27821 3.44346 8.94685 3.85083 8.73929C3.91271 8.70777 3.97519 8.68053 4.03833 8.65726L3.27759 8.09671C2.33829 7.4039 2.51688 5.95081 3.59595 5.50589L5.36255 4.77737C5.40758 4.75873 5.4418 4.72104 5.45728 4.67483L6.06079 2.86136ZM5.73364 9.83304C5.30263 9.83304 5.01877 9.83388 4.802 9.85159C4.59344 9.86865 4.50542 9.89787 4.45435 9.92386C4.29723 10.0039 4.16917 10.132 4.08911 10.2891C4.06313 10.3402 4.03391 10.4282 4.01685 10.6367C3.99914 10.8535 3.99829 11.1374 3.99829 11.5684V13.7676C3.99829 14.4318 3.99855 14.8904 4.02759 15.2461C4.05602 15.5941 4.1085 15.7856 4.17993 15.9258C4.33989 16.2396 4.5956 16.4944 4.90943 16.6543C5.0496 16.7257 5.24033 16.7782 5.58814 16.8067C5.94386 16.8357 6.40229 16.836 7.06665 16.836H12.9329C13.5971 16.836 14.0557 16.8357 14.4114 16.8067C14.7593 16.7782 14.9509 16.7258 15.0911 16.6543C15.4047 16.4944 15.6597 16.2394 15.8196 15.9258C15.891 15.7856 15.9435 15.5941 15.9719 15.2461C16.001 14.8904 16.0012 14.4318 16.0012 13.7676V11.5684C16.0012 11.1374 16.0014 10.8535 15.9836 10.6367C15.9666 10.428 15.9364 10.3401 15.9104 10.2891C15.8304 10.1321 15.7031 10.0039 15.5461 9.92386C15.4951 9.89784 15.4065 9.86867 15.1975 9.85159C14.9808 9.83389 14.6977 9.83304 14.2668 9.83304H5.73364ZM7.6106 3.22561C7.52563 3.12619 7.36508 3.1573 7.32349 3.28128L6.71997 5.09476C6.58248 5.50787 6.27189 5.84086 5.86939 6.00686L4.10279 6.73538C3.9816 6.78535 3.96125 6.94853 4.06665 7.0264L5.60474 8.16018C5.73555 8.25665 5.84806 8.37292 5.9397 8.50296H10.9309L10.8801 8.3428C10.7487 7.92794 10.8036 7.47622 11.0315 7.1055L12.0334 5.47757C12.1017 5.36593 12.0218 5.22267 11.8909 5.22171L9.97974 5.20804C9.54446 5.20486 9.13206 5.01212 8.84986 4.68069L7.6106 3.22561ZM13.6956 3.17386C13.4764 3.17233 13.2649 3.25751 13.1077 3.41018C13.0754 3.44164 13.0288 3.49935 12.9514 3.64358C12.8861 3.76541 12.8126 3.92029 12.7131 4.13772C13.3497 4.55853 13.6161 5.44339 13.1663 6.17483L12.1653 7.80179C12.1397 7.84342 12.133 7.89484 12.1477 7.94143L12.3264 8.50296H14.1575L15.4934 5.6094C15.6474 5.27569 15.7492 5.05524 15.8157 4.88089C15.8801 4.71181 15.8922 4.63253 15.8938 4.58597C15.902 4.35246 15.8121 4.12598 15.6458 3.96194C15.6126 3.92927 15.549 3.88029 15.386 3.80179C15.2179 3.72088 14.9927 3.63062 14.6516 3.49417C14.3389 3.36909 14.1332 3.2873 13.9709 3.2344C13.8146 3.18346 13.7406 3.1742 13.6956 3.17386Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    n.d(t, {}, { O: a })
  },
  duD4(e, t, n) {
    function a(e, [t, n]) {
      return Math.min(n, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(a, "name", { value: "clamp", configurable: !0 }), n.d(t, {}, { q: a }))
  },
  YAOF(e, t, n) {
    n.d(t, { Q6: () => D, bL: () => N, zi: () => H, CC: () => T })
    var a = n("zd8w"),
      r = n("duD4"),
      o = n("kUVq"),
      i = n("lVCP"),
      s = n("zWxU"),
      l = n("Hj0L"),
      c = n("k5JT")
    function d(e) {
      let t = a.useRef({ value: e, previous: e })
      return a.useMemo(
        () => (
          t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)),
          t.current.previous
        ),
        [e],
      )
    }
    ;(0, Object.defineProperty)(d, "name", { value: "usePrevious", configurable: !0 })
    var u = n("Vuge"),
      p = n("Fc3g"),
      m = n("gMOs"),
      h = n("ABep"),
      g = Object.defineProperty,
      f = (e, t) => g(e, "name", { value: t, configurable: !0 }),
      _ = ["PageUp", "PageDown"],
      b = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
      y = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
      },
      x = "Slider",
      [C, w, v] = (0, m.N)(x),
      [A, j] = (0, s.A)(x, [v]),
      [S, k] = A(x),
      N = a.forwardRef(
        f(function (e, t) {
          let {
              name: n,
              min: s = 0,
              max: c = 100,
              step: d = 1,
              orientation: u = "horizontal",
              disabled: p = !1,
              minStepsBetweenThumbs: m = 0,
              defaultValue: g = [s],
              value: y,
              onValueChange: x = f(() => {}, "onValueChange"),
              onValueCommit: w = f(() => {}, "onValueCommit"),
              inverted: v = !1,
              form: A,
              ...j
            } = e,
            k = a.useRef(new Set()),
            N = a.useRef(0),
            M = a.useRef(!1),
            E = "horizontal" === u,
            [P, T] = a.useState(null),
            R = (0, i.s)(t, T),
            [D = [], L] = (0, l.i)({
              prop: y,
              defaultProp: g,
              onChange: f((e) => {
                let t = [...k.current]
                ;(t[N.current]?.focus({ preventScroll: !0, focusVisible: M.current }), (M.current = !1), x(e))
              }, "onChange"),
            }),
            G = a.useRef(D),
            F = a.useRef(D)
          function W(e) {
            let t = $(D, e)
            U(e, t)
          }
          function B(e) {
            U(e, N.current)
          }
          function H() {
            String(D) !== String(G.current) && w(D)
          }
          function U(e, t, { commit: n } = { commit: !1 }) {
            let a = Q(d),
              o = X(Math.round((e - s) / d) * d + s, a),
              i = (0, r.q)(o, [s, c])
            L((e = []) => {
              let a = K(e, i, t)
              if (!Y(a, m * d)) return e
              {
                N.current = a.indexOf(i)
                let t = String(a) !== String(e)
                return (t && n && w(a), t ? a : e)
              }
            })
          }
          return (
            a.useEffect(() => {
              let e = A ? P?.ownerDocument.getElementById(A) : P?.closest("form")
              if (e instanceof HTMLFormElement) {
                let t = f(() => L(F.current), "reset")
                return (e.addEventListener("reset", t), () => e.removeEventListener("reset", t))
              }
            }, [P, A, L]),
            f(W, "handleSlideStart"),
            f(B, "handleSlideMove"),
            f(H, "handleSlideEnd"),
            f(U, "updateValues"),
            (0, h.jsx)(S, {
              scope: e.__scopeSlider,
              name: n,
              disabled: p,
              min: s,
              max: c,
              valueIndexToChangeRef: N,
              thumbs: k.current,
              values: D,
              orientation: u,
              form: A,
              children: (0, h.jsx)(C.Provider, {
                scope: e.__scopeSlider,
                children: (0, h.jsx)(C.Slot, {
                  scope: e.__scopeSlider,
                  children: (0, h.jsx)(E ? O : I, {
                    "aria-disabled": p,
                    "data-disabled": p ? "" : void 0,
                    ...j,
                    ref: R,
                    onPointerDown: (0, o.mK)(j.onPointerDown, () => {
                      p || ((G.current = D), (M.current = !1))
                    }),
                    min: s,
                    max: c,
                    inverted: v,
                    onSlideStart: p ? void 0 : W,
                    onSlideMove: p ? void 0 : B,
                    onSlideEnd: p ? void 0 : H,
                    onHomeKeyDown: () => {
                      p || ((M.current = !0), U(s, 0, { commit: !0 }))
                    },
                    onEndKeyDown: () => {
                      p || ((M.current = !0), U(c, D.length - 1, { commit: !0 }))
                    },
                    onStepKeyDown: ({ event: e, direction: t }) => {
                      if (!p) {
                        M.current = !0
                        let n = _.includes(e.key) || (e.shiftKey && b.includes(e.key)),
                          a = N.current
                        U(ee(D[a], { min: s, step: d, direction: t, multiplier: n ? 10 : 1 }), a, { commit: !0 })
                      }
                    },
                  }),
                }),
              }),
            })
          )
        }, "Slider"),
      ),
      [M, E] = A(x, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
      O = a.forwardRef(
        f(function (e, t) {
          let {
              min: n,
              max: r,
              dir: o,
              inverted: s,
              onSlideStart: l,
              onSlideMove: d,
              onSlideEnd: u,
              onStepKeyDown: p,
              ...m
            } = e,
            [g, _] = a.useState(null),
            b = (0, i.s)(t, _),
            x = a.useRef(void 0),
            C = (0, c.useDirection)(o),
            w = "ltr" === C,
            v = (w && !s) || (!w && s)
          function A(e) {
            let t = x.current || g.getBoundingClientRect(),
              a = J([0, t.width], v ? [n, r] : [r, n])
            return ((x.current = t), a(e - t.left))
          }
          return (
            f(A, "getValueFromPointer"),
            (0, h.jsx)(M, {
              scope: e.__scopeSlider,
              startEdge: v ? "left" : "right",
              endEdge: v ? "right" : "left",
              direction: v ? 1 : -1,
              size: "width",
              children: (0, h.jsx)(P, {
                dir: C,
                "data-orientation": "horizontal",
                ...m,
                ref: b,
                style: { ...m.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (e) => {
                  let t = A(e.clientX)
                  l?.(t)
                },
                onSlideMove: (e) => {
                  let t = A(e.clientX)
                  d?.(t)
                },
                onSlideEnd: () => {
                  ;((x.current = void 0), u?.())
                },
                onStepKeyDown: (e) => {
                  let t = y[v ? "from-left" : "from-right"].includes(e.key)
                  p?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderHorizontal"),
      ),
      I = a.forwardRef(
        f(function (e, t) {
          let {
              min: n,
              max: r,
              inverted: o,
              onSlideStart: s,
              onSlideMove: l,
              onSlideEnd: c,
              onStepKeyDown: d,
              ...u
            } = e,
            p = a.useRef(null),
            m = (0, i.s)(t, p),
            g = a.useRef(void 0),
            _ = !o
          function b(e) {
            let t = g.current || p.current.getBoundingClientRect(),
              a = J([0, t.height], _ ? [r, n] : [n, r])
            return ((g.current = t), a(e - t.top))
          }
          return (
            f(b, "getValueFromPointer"),
            (0, h.jsx)(M, {
              scope: e.__scopeSlider,
              startEdge: _ ? "bottom" : "top",
              endEdge: _ ? "top" : "bottom",
              size: "height",
              direction: _ ? 1 : -1,
              children: (0, h.jsx)(P, {
                "data-orientation": "vertical",
                ...u,
                ref: m,
                style: { ...u.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (e) => {
                  let t = b(e.clientY)
                  s?.(t)
                },
                onSlideMove: (e) => {
                  let t = b(e.clientY)
                  l?.(t)
                },
                onSlideEnd: () => {
                  ;((g.current = void 0), c?.())
                },
                onStepKeyDown: (e) => {
                  let t = y[_ ? "from-bottom" : "from-top"].includes(e.key)
                  d?.({ event: e, direction: t ? -1 : 1 })
                },
              }),
            })
          )
        }, "SliderVertical"),
      ),
      P = a.forwardRef(
        f(function (e, t) {
          let {
              __scopeSlider: n,
              onSlideStart: a,
              onSlideMove: r,
              onSlideEnd: i,
              onHomeKeyDown: s,
              onEndKeyDown: l,
              onStepKeyDown: c,
              ...d
            } = e,
            u = k(x, n)
          return (0, h.jsx)(p.sG.span, {
            ...d,
            ref: t,
            onKeyDown: (0, o.mK)(e.onKeyDown, (e) => {
              "Home" === e.key
                ? (s(e), e.preventDefault())
                : "End" === e.key
                  ? (l(e), e.preventDefault())
                  : _.concat(b).includes(e.key) && (c(e), e.preventDefault())
            }),
            onPointerDown: (0, o.mK)(e.onPointerDown, (e) => {
              let t = e.target
              ;(t.setPointerCapture(e.pointerId),
                e.preventDefault(),
                u.thumbs.has(t) ? t.focus({ preventScroll: !0, focusVisible: !1 }) : a(e))
            }),
            onPointerMove: (0, o.mK)(e.onPointerMove, (e) => {
              e.target.hasPointerCapture(e.pointerId) && r(e)
            }),
            onPointerUp: (0, o.mK)(e.onPointerUp, (e) => {
              let t = e.target
              t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
            }),
          })
        }, "SliderImpl"),
      ),
      T = a.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: n, ...a } = e,
            r = k("SliderTrack", n)
          return (0, h.jsx)(p.sG.span, {
            "data-disabled": r.disabled ? "" : void 0,
            "data-orientation": r.orientation,
            ...a,
            ref: t,
          })
        }, "SliderTrack"),
      ),
      R = "SliderRange",
      D = a.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: n, ...r } = e,
            o = k(R, n),
            s = E(R, n),
            l = a.useRef(null),
            c = (0, i.s)(t, l),
            d = o.values.length,
            u = o.values.map((e) => V(e, o.min, o.max)),
            m = d > 1 ? Math.min(...u) : 0,
            g = 100 - Math.max(...u)
          return (0, h.jsx)(p.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: c,
            style: { ...e.style, [s.startEdge]: m + "%", [s.endEdge]: g + "%" },
          })
        }, "SliderRange"),
      ),
      [L, G] = A("SliderThumb")
    function F(e) {
      let { __scopeSlider: t, name: n, children: r, internal_do_not_use_render: o } = e,
        i = k("SliderThumbProvider", t),
        s = w(t),
        [l, c] = a.useState(null),
        d = a.useMemo(() => (l ? s().findIndex((e) => e.ref.current === l) : -1), [s, l]),
        p = (0, u.X)(l),
        m = !l || !!i.form || !!l.closest("form"),
        g = i.values[d],
        f = n ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
        _ = void 0 === g ? 0 : V(g, i.min, i.max)
      a.useEffect(() => {
        if (l)
          return (
            i.thumbs.add(l),
            () => {
              i.thumbs.delete(l)
            }
          )
      }, [l, i.thumbs])
      let b = {
        value: g,
        name: f,
        form: i.form,
        isFormControl: m,
        index: d,
        thumb: l,
        onThumbChange: c,
        percent: _,
        size: p,
      }
      return (0, h.jsx)(L, { scope: t, ...b, children: et(o) ? o(b) : r })
    }
    f(F, "SliderThumbProvider")
    var W = "SliderThumbTrigger",
      B = a.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: n, ...a } = e,
            r = k(W, n),
            s = E(W, n),
            { index: l, value: c, percent: d, size: u, onThumbChange: m } = G(W, n),
            g = (0, i.s)(t, m),
            f = q(l, r.values.length),
            _ = u?.[s.size],
            b = _ ? z(_, d, s.direction) : 0
          return (0, h.jsx)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${d}% + ${b}px)`,
            },
            children: (0, h.jsx)(C.ItemSlot, {
              scope: n,
              children: (0, h.jsx)(p.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || f,
                "aria-valuemin": r.min,
                "aria-valuenow": c,
                "aria-valuemax": r.max,
                "aria-orientation": r.orientation,
                "data-orientation": r.orientation,
                "data-disabled": r.disabled ? "" : void 0,
                tabIndex: r.disabled ? void 0 : 0,
                ...a,
                ref: g,
                style: void 0 === c ? { display: "none" } : e.style,
                onFocus: (0, o.mK)(e.onFocus, () => {
                  r.valueIndexToChangeRef.current = l
                }),
              }),
            }),
          })
        }, "SliderThumbTrigger"),
      ),
      H = a.forwardRef(
        f(function (e, t) {
          let { __scopeSlider: n, name: a, ...r } = e
          return (0, h.jsx)(F, {
            __scopeSlider: n,
            name: a,
            internal_do_not_use_render: ({ index: e, isFormControl: a }) =>
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsx)(B, { ...r, ref: t, __scopeSlider: n }),
                  a ? (0, h.jsx)(U, { __scopeSlider: n }, e) : null,
                ],
              }),
          })
        }, "SliderThumb"),
      ),
      U = a.forwardRef(
        f(function ({ __scopeSlider: e, ...t }, n) {
          let { value: r, name: o, form: s } = G("SliderBubbleInput", e),
            l = a.useRef(null),
            c = (0, i.s)(l, n),
            u = d(r)
          return (
            a.useEffect(() => {
              let e = l.current
              if (!e) return
              let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set
              if (u !== r && t) {
                let n = new Event("input", { bubbles: !0 })
                ;(t.call(e, r), e.dispatchEvent(n))
              }
            }, [u, r]),
            (0, h.jsx)(p.sG.input, { style: { display: "none" }, name: o, form: s, ...t, ref: c, defaultValue: r })
          )
        }, "SliderBubbleInput"),
      )
    function K(e = [], t, n) {
      let a = [...e]
      return ((a[n] = t), a.sort((e, t) => e - t))
    }
    function V(e, t, n) {
      return (0, r.q)((100 / (n - t)) * (e - t), [0, 100])
    }
    function q(e, t) {
      return t > 2 ? `Value ${e + 1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
    }
    function $(e, t) {
      if (1 === e.length) return 0
      let n = e.map((e) => Math.abs(e - t)),
        a = Math.min(...n)
      return n.indexOf(a)
    }
    function z(e, t, n) {
      let a = e / 2,
        r = J([0, 50], [0, a])
      return (a - r(t) * n) * n
    }
    function Z(e) {
      return e.slice(0, -1).map((t, n) => e[n + 1] - t)
    }
    function Y(e, t) {
      return !(t > 0) || Math.min(...Z(e)) >= t
    }
    function J(e, t) {
      return (n) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0]
        let a = (t[1] - t[0]) / (e[1] - e[0])
        return t[0] + a * (n - e[0])
      }
    }
    function Q(e) {
      if (!Number.isFinite(e)) return 0
      let t = e.toString()
      if (t.includes("e")) {
        let [e, n] = t.split("e"),
          a = e.split(".")[1] || "",
          r = Number(n)
        return Math.max(0, a.length - r)
      }
      let n = t.split(".")[1]
      return n ? n.length : 0
    }
    function X(e, t) {
      let n = Math.pow(10, t)
      return Math.round(e * n) / n
    }
    function ee(e, { min: t, step: n, direction: a, multiplier: r }) {
      let o,
        i = Q(n),
        s = (e - t) / n,
        l = Math.round(s)
      return ((o = X(l * n + t, i) === X(e, i) ? l + r * a : a > 0 ? Math.ceil(s) : Math.floor(s)), X(o * n + t, i))
    }
    function et(e) {
      return "function" == typeof e
    }
    ;(f(K, "getNextSortedValues"),
      f(V, "convertValueToPercentage"),
      f(q, "getLabel"),
      f($, "getClosestValueIndex"),
      f(z, "getThumbInBoundsOffset"),
      f(Z, "getStepsBetweenValues"),
      f(Y, "hasMinStepsBetweenValues"),
      f(J, "linearScale"),
      f(Q, "getDecimalCount"),
      f(X, "roundValue"),
      f(ee, "getNextStepValue"),
      f(et, "isFunction"))
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
//# sourceMappingURL=442499.5c30651de2.js.map
