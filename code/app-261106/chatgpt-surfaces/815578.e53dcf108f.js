export const __rspack_esm_ids = [815578]
export const __webpack_modules__ = {
  H2jL(e, t) {
    t.A = { surface: "surface-Jsw_hz" }
  },
  v7bo(e, t, n) {
    var a = n("Eho4")
    function i(e) {
      let t = s(e)
      if (!t) return null
      let n = t.split(":"),
        i = n[0]
      if (!i) return null
      let r = n[1] ?? i,
        l = (0, a.DX)(i),
        c = (0, a.PD)(i),
        d = (0, a.DX)(r),
        u = (0, a.PD)(r),
        p = { startRow: Math.min(l, d), startCol: Math.min(c, u), endRow: Math.max(l, d), endCol: Math.max(c, u) }
      return { ref: o(p), bounds: p }
    }
    function o(e) {
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
        DO: i,
        Ol: function (e) {
          var t
          let n = e.startsWith("=") ? e.slice(1) : e,
            a = n.indexOf("!")
          if (-1 === a) {
            let e = i(n)
            return { ref: e?.ref ?? n }
          }
          let o = n.slice(0, a),
            r = n.slice(a + 1),
            s = i(r)
          return {
            sheetName:
              (t = o).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
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
        wP: o,
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
    let i = "CSV import",
      o = /\\|\/|\?|\*|\[|\]|:/g
    function r(e) {
      return ((e ?? i).trim().replace(o, "").trim() || i).slice(0, 31)
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
            i = (0, a.Ol)(t?.anchor ?? "A1"),
            o = i.sheetName?.trim(),
            s = t?.sheetName?.trim()
          if (o && s && o !== s)
            throw Error(`CSV import specifies conflicting sheet names: "${s}" (options.sheetName) vs "${o}" (anchor).`)
          let l = r(o ?? s),
            c = (0, a.DO)(i.ref)
          if (!c) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor ?? "A1"}".`)
          let { bounds: d } = c
          if (d.startRow !== d.endRow || d.startCol !== d.endCol)
            throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor ?? "A1"}".`)
          let u = (function (e, t) {
              if (!e.trim()) return []
              let n = (function (e, t) {
                let n = [],
                  a = [],
                  i = "",
                  o = !1,
                  r = () => {
                    ;(a.push(i), (i = ""))
                  },
                  s = () => {
                    ;(n.push(a), (a = []))
                  }
                for (let n = 0; n < e.length; n += 1) {
                  let a = e[n] ?? ""
                  if (o) {
                    if ('"' === a) {
                      if ('"' === e[n + 1]) {
                        ;((i += '"'), (n += 1))
                        continue
                      }
                      o = !1
                      continue
                    }
                    i += a
                    continue
                  }
                  if ('"' === a) {
                    o = !0
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
                  i += a
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
            p = u.length,
            h = p > 0 ? (u[0]?.length ?? 0) : 0
          if (0 === p || 0 === h) return { sheetName: l, values: [] }
          let m = { startRow: d.startRow, startCol: d.startCol, endRow: d.startRow + p - 1, endCol: d.startCol + h - 1 }
          return {
            sheetName: l,
            values: u,
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
    let i = 4 / 3
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
          return { padLr: Math.max(2, Math.floor(0.1 * t)), padTb: Math.max(i, Math.floor(0 * t)) }
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
    let i = a.map((e) => e.id)
    n.d(t, {}, { DR: i, MV: () => a })
  },
  LA2j(e, t, n) {
    var a,
      i,
      o,
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
        (((i = {}).CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_UNSPECIFIED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_UNSPECIFIED"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
        (i.CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED =
          "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
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
      i = n("s4w7"),
      o = n("h6ff"),
      r = n("Eso4")
    let s = a.string().refine((e) => e.trim().length > 0, "Home tooltip title must not be blank"),
      l = a
        .string()
        .nullable()
        .optional()
        .transform((e) => e ?? null),
      c = {
        action_items: a.array(a.never()).length(0),
        beacon_name: a.string(),
        show_timing: a.enum(["immediate", "wait_until_conversation_refresh"]).optional().default("immediate"),
        type: a.literal("beacon_ui_response"),
      },
      d = a.union([
        a
          .object({
            ...c,
            beacon_id: a.literal("voice_mode_tooltip"),
            ui_info: a
              .object({
                subtitle: l,
                target: a.literal("composer-voice-button"),
                title: s,
                type: a.literal("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
        a
          .object({
            ...c,
            beacon_id: a.literal("tpp_nux_tooltip"),
            ui_info: a
              .object({
                subtitle: l,
                target: a.literal("tpp-surface-mode-toggle"),
                title: s,
                type: a.literal("beacon_tooltip_info"),
              })
              .loose(),
          })
          .loose(),
      ]),
      u = a.union([d, i.E2]),
      p = a.union([o.Bw, u])
    n.d(
      t,
      {},
      {
        Bw: p,
        Yw: function (e, t) {
          let n = p.safeParse(e)
          if (n.success) return n.data
          let a = o.th.safeParse(e)
          return a.success && (0, r.p)(a.data, t) ? a.data : null
        },
        xU: function (e) {
          return u.safeParse(e).success
        },
      },
    )
  },
  MRPP(e, t, n) {
    var a = n("DBCl"),
      i = n("ASxG"),
      o = n("SPnB"),
      r = n("kpIY"),
      s = n("Nwp9"),
      l = n("Ghh3"),
      c = n("g2p6"),
      d = n("AHqG"),
      u = n("zGlb"),
      p = n("VaAS")
    let h = "chatgpt-business-agent-drafts-v1",
      m = (0, s.m3)(h, void 0),
      g = i.record(i.string(), i.unknown()),
      f = i.object({
        userId: i.string().min(1),
        accountId: i.string().min(1),
        expiresAt: i.number(),
        context: i.object({
          businessAgentId: i.string().min(1),
          nativeRuntimeVersion: i.literal(1).optional(),
          gizmoId: i.string().min(1),
          interactionId: i.uuid(),
          businessName: i.string().optional(),
          logoUrl: i.string().optional(),
          notice: i.string().optional(),
          headerColor: i.string().optional(),
          conversationStarters: i.array(i.string()).max(4).optional(),
          disablePrefill: i.boolean().optional(),
          showDisclosureModal: i.boolean().optional(),
          showConversationStarters: i.boolean(),
        }),
      })
    function _(e, t, n) {
      let a = JSON.stringify([n.userId, n.accountId, t])
      try {
        return (
          (0, r.EG)(h, {
            entries: { [a]: { value: f.parse({ ...n, expiresAt: Date.now() + 864e5 }) } },
            maxEntries: 100,
          }),
          e.set(m, (0, r.TB)(h)),
          !0
        )
      } catch {
        return !1
      }
    }
    n.d(
      t,
      {},
      {
        recoverBusinessAgentDraft: async function (e, t, n) {
          await Promise.all([(0, r.Uz)(), e.when((e) => "loading" !== e.get(o.m0).status)])
          let i = e.get(o.m0),
            s = e.get(c.Sk),
            b = e.get(o.chatGptAuthenticatedUserId$)
          if (
            "allowed" !== i.status ||
            !("accountId" in i) ||
            null == s ||
            i.accountId !== s ||
            e.get(o.chatGptAuthenticatedAccountId$) !== s ||
            null == b
          )
            throw new DOMException("Business Agent account unavailable", "AbortError")
          let y = g.parse(e.get(m) ?? (0, r.TB)(h)),
            x = f.parse(y[JSON.stringify([b, s, t])])
          if (x.userId !== b || x.accountId !== s || x.context.gizmoId !== n || x.expiresAt <= Date.now())
            throw new DOMException("Business Agent draft unavailable", "AbortError")
          let C = (e) =>
              e(o.chatGptAuthenticatedUserId$) === b && e(c.Sk) === s && e(o.chatGptAuthenticatedAccountId$) === s,
            w = !1,
            v = e.watch(({ get: e }) => {
              w = w || !C(e)
            }),
            A = () => {
              if (w || !C(e.get)) throw new DOMException("Business Agent identity changed", "AbortError")
              ;(0, u.DQ)(e)
            }
          try {
            null != x.context.nativeRuntimeVersion && A()
            let i = await l.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
                requestBody:
                  null == x.context.nativeRuntimeVersion
                    ? void 0
                    : { native_runtime_version: x.context.nativeRuntimeVersion, include_gizmo_resource: !0 },
                parameters: { path: { business_agent_id: x.context.businessAgentId } },
                additionalHeaders: {
                  "ChatGPT-Account-ID": s,
                  [a.zBc]: s,
                  "x-openai-business-agent-interaction-id": x.context.interactionId,
                },
              }),
              o = p.Do.parse(i)
            if (
              (null != x.context.nativeRuntimeVersion &&
                o.business_agent_native_runtime_version !== x.context.nativeRuntimeVersion) ||
              w ||
              !C(e.get) ||
              o.business_agent_id !== x.context.businessAgentId ||
              o.underlying_gizmo_id !== n ||
              o.interaction_id !== x.context.interactionId
            )
              throw new DOMException("Business Agent identity changed", "AbortError")
            let r = o.business_agent_native_runtime_version,
              c = {
                ...x.context,
                nativeRuntimeVersion: r,
                conversationStarters: null == r ? x.context.conversationStarters : void 0,
                privacyPolicyUrl: o.privacy_policy_url,
                animateDisclosure: !1,
              },
              u = { accountId: s, userId: b, status: "ready", context: c }
            if (null != r) {
              A()
              let n = await (0, d.E)(e, u, i.gizmo_resource)
              if (w) throw new DOMException("Business Agent identity changed", "AbortError")
              if (
                ((c.businessName = n.gizmo.display.name.trim() || void 0),
                (c.logoUrl = o.favicon_url?.trim() || n.gizmo.display.profile_picture_url?.trim() || void 0),
                (c.headerColor = o.header_color?.trim() || n.gizmo.display.theme?.trim() || void 0),
                (c.conversationStarters = n.gizmo.display.prompt_starters?.slice(0, 4) ?? void 0),
                null == x.context.nativeRuntimeVersion && !_(e, t, { accountId: s, userId: b, context: c }))
              )
                throw new DOMException("Business Agent draft unavailable", "AbortError")
            }
            return u
          } finally {
            v()
          }
        },
        removeBusinessAgentDraftsForInteraction: function (e, t) {
          let n = g.safeParse((0, r.TB)(h))
          if (!n.success) return
          let a = {}
          for (let [i, r] of Object.entries(n.data)) {
            let n = f.safeParse(r)
            n.success &&
              n.data.userId === e.get(o.chatGptAuthenticatedUserId$) &&
              n.data.accountId === e.get(c.Sk) &&
              n.data.context.interactionId === t &&
              (a[i] = null)
          }
          Object.keys(a).length > 0 && ((0, r.EG)(h, { entries: a }), e.set(m, (0, r.TB)(h)))
        },
        s: _,
      },
    )
  },
  AHqG(e, t, n) {
    var a = n("Ghh3"),
      i = n("zGlb"),
      o = n("VaAS")
    n.d(
      t,
      {},
      {
        E: async function (e, t, n) {
          ;(0, i.DQ)(e)
          let r =
            n ??
            (await a.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
              parameters: { path: { gizmo_id_or_short_url: t.context.gizmoId } },
              additionalHeaders: (0, o.Rx)(t),
              expectedIdentity: { accountId: t.accountId, userId: t.userId },
            }))
          return ((0, i.DQ)(e), (0, i.GL)(r, t.context.gizmoId), r)
        },
      },
    )
  },
  grx7(e, t, n) {
    var a = n("T8X0"),
      i = n("gBBC"),
      o = n("Ve8c"),
      r = n("MrGp"),
      s = n("lSqO"),
      l = n("GgLN")
    async function c(e, t, n, a) {
      let i,
        o = e.get(l.D3, t)
      if (null != o && "failed" !== o.status) return
      let r = {
        status: "pending",
        accountId: n.accountId,
        userId: n.userId,
        gizmoId: n.gizmoId,
        ...a,
        showConversationStarters: !1,
      }
      if (((0, l.DB)(e, t, r), e.get(l.D3, t) === r))
        try {
          ;((i = new s.kW(e, n.businessAgentId, {
            entry_point: "business_profile",
            source_profile_lookup_id: n.sourceProfileLookupId,
          })),
            await i.prepare({ conversationId: t, gizmoId: n.gizmoId }),
            i.open())
        } catch {
          e.get(l.D3, t) === r && e.set(l.D3, t, { ...r, status: "failed" })
        } finally {
          i?.cancel()
        }
    }
    function d(e, t, n, r, s, l) {
      ;((0, i.yN)(e, null),
        (0, a.Rm)(e, "chat"),
        t("/", {
          state: {
            ...(0, o.D$)(s, r, !0),
            homeDraftClientThreadId: void 0,
            initialChatGptConversationId: n,
            initialChatGptBusinessAgentGizmoId: r.id,
            prefillPrompt: l ?? "",
            ...(null == l ? {} : { prefillPromptFormat: "plain", prefillPromptOnlyIfEmpty: !0 }),
          },
        }))
    }
    n.d(
      t,
      {},
      {
        Bv: c,
        wJ: function (e, t, n, a, i) {
          let { conversationId: o, context: r } = n.open()
          d(e, t, o, { id: r.gizmoId, name: r.businessName ?? r.businessAgentId, iconUrl: r.logoUrl ?? null }, a, i)
        },
        wM: function (e, t, n, a, i) {
          let o = (0, r.dL)(e),
            s = c(e, o, n, a)
          return (
            (0, r.Zh)({ scope: e, conversationId: o, projectId: n.gizmoId }),
            d(
              e,
              t,
              o,
              { id: n.gizmoId, name: a.businessName || n.businessAgentId, iconUrl: a.logoUrl ?? null },
              { businessProfileChat: n },
              i,
            ),
            s
          )
        },
      },
    )
  },
  lSqO(e, t, n) {
    var a = n("zTeN"),
      i = n("DBCl"),
      o = n("ASxG"),
      r = n("SPnB"),
      s = n("nUDt"),
      l = n("MRPP"),
      c = n("AHqG"),
      d = n("zGlb"),
      u = n("VaAS"),
      p = n("wwvo"),
      h = n("Ghh3"),
      m = n("MrGp"),
      g = n("g2p6"),
      f = n("nlNF"),
      _ = n("OWtl"),
      b = n("OMIV")
    let y = u.Do.extend({
        requires_click_attribution_bridge: o.literal(!1).optional(),
        entry_context: o.object({
          entry_channel: o.literal("organic"),
          entry_point: o.enum(["debug_settings", "business_profile", "shared_link"]),
          client_platform: o.literal("web"),
          traffic_class: o.enum(["production", "internal_test"]),
        }),
      }),
      x = (0, a.un)(_.u, ({ get: e }) => e(b.JW, "699583893") && e(b.JW, "199045523")),
      C = (0, a.un)(_.u, ({ get: e }) => {
        let t = e(r.PO),
          n = e(r.m0)
        return (
          !t.authLoading &&
          !t.accountLoading &&
          "chatgpt" === t.authMethod &&
          !0 === t.hasChatGptToken &&
          null != t.userId &&
          t.authenticatedUserId === t.userId &&
          "allowed" === n.status &&
          "accountId" in n &&
          n.accountId === t.authenticatedAccountId &&
          e(x)
        )
      })
    n.d(
      t,
      {},
      {
        Cl: x,
        eG: C,
        kW: class {
          scope
          entry
          enabled$
          controller = new AbortController()
          accountId
          userId
          navigationVisit
          businessAgentId
          unwatch
          profileDraft
          preparation
          ready
          resource
          disclosure
          constructor(e, t, n, a = C) {
            ;((this.scope = e), (this.entry = n), (this.enabled$ = a))
            let i = e.get(g.Sk),
              o = e.get(r.chatGptAuthenticatedUserId$)
            if (((this.businessAgentId = t.trim()), null == i || null == o || !this.businessAgentId))
              throw Error("Business Agent launch unavailable")
            ;((this.accountId = i), (this.userId = o), (this.navigationVisit = e.get(f.Jw)))
          }
          get signal() {
            return this.controller.signal
          }
          prepare(e) {
            return (
              null == this.preparation &&
                ((this.profileDraft = e),
                (this.preparation = this.createInteraction().catch((e) => {
                  throw (this.stopWatching(), e)
                }))),
              this.preparation
            )
          }
          open() {
            this.assertCurrent()
            let e = this.ready
            if (null == e) throw Error("Business Agent launch unavailable")
            null != e.context.nativeRuntimeVersion && (0, d.DQ)(this.scope)
            let t = (0, m.dL)(this.scope, this.profileDraft?.conversationId)
            if (!(0, l.s)(this.scope, t, { accountId: this.accountId, userId: this.userId, context: e.context }))
              throw Error("Business Agent draft unavailable")
            return (
              (0, m.Zh)({ scope: this.scope, conversationId: t, projectId: e.context.gizmoId }),
              null != this.resource && this.scope.queryClient.setQueryData((0, p.H)(e, t), this.resource),
              (0, m.DB)(this.scope, t, e),
              this.disclosure?.version === 1 &&
                null != this.disclosure.global_impression_count &&
                ((0, s.O5)(this.scope, { conversationId: t, accountId: this.accountId, userId: this.userId }),
                (0, s.VB)(
                  this.scope,
                  t,
                  this.disclosure,
                  this.scope.get(b.M9)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0,
                )),
              this.cancel(),
              { conversationId: t, context: e.context }
            )
          }
          cancel = () => {
            ;(this.controller.abort(), this.stopWatching())
          }
          stopWatching() {
            ;(this.unwatch?.(), (this.unwatch = void 0), window.removeEventListener("pagehide", this.cancel))
          }
          isCurrentVisit(e) {
            if (e(f.Jw) === this.navigationVisit) return !0
            let t = e(f.x2)
            return (
              null != this.profileDraft &&
              t?.pathname === "/" &&
              t.state?.initialChatGptConversationId === this.profileDraft.conversationId &&
              t.state.initialChatGptBusinessAgentGizmoId === this.profileDraft.gizmoId
            )
          }
          assertCurrent = () => {
            ;(this.signal.throwIfAborted(),
              (this.scope.get(this.enabled$) &&
                this.scope.get(g.Sk) === this.accountId &&
                this.scope.get(r.chatGptAuthenticatedAccountId$) === this.accountId &&
                this.scope.get(r.chatGptAuthenticatedUserId$) === this.userId &&
                this.isCurrentVisit(this.scope.get)) ||
                (this.cancel(), this.signal.throwIfAborted()))
          }
          async createInteraction() {
            this.assertCurrent()
            let e = "shared_link" === this.entry.entry_point ? this.entry.gizmoId : void 0
            ;(null != e && (0, d.DQ)(this.scope),
              (this.unwatch = this.scope.watch(({ get: e }) => {
                ;(e(this.enabled$) &&
                  e(g.Sk) === this.accountId &&
                  e(r.chatGptAuthenticatedAccountId$) === this.accountId &&
                  e(r.chatGptAuthenticatedUserId$) === this.userId &&
                  this.isCurrentVisit(e)) ||
                  this.cancel()
              })),
              window.addEventListener("pagehide", this.cancel))
            let t = await h.Request.safePost("/gizmos/business-agents/{business_agent_id}/interactions", {
              parameters: { path: { business_agent_id: this.businessAgentId } },
              additionalHeaders: { "ChatGPT-Account-ID": this.accountId, [i.zBc]: this.accountId },
              expectedIdentity: { accountId: this.accountId, userId: this.userId },
              signal: this.signal,
              assertRequestCurrent: this.assertCurrent,
              retry: "never",
              requestBody: {
                ...(null == e ? {} : { native_runtime_version: 1 }),
                include_gizmo_resource: !0,
                include_disclosure_state:
                  (this.scope.get(b.M9)?.getDynamicConfig("3310023174").get("global_impression_limit", 0) ?? 0) > 0,
                entry_context: {
                  entry_channel: "organic",
                  entry_point: this.entry.entry_point,
                  ...("business_profile" === this.entry.entry_point
                    ? { source_profile_lookup_id: this.entry.source_profile_lookup_id }
                    : {}),
                  client_platform: "web",
                },
              },
            })
            this.assertCurrent()
            let n = y.parse(t)
            if (
              n.entry_context.entry_point !== this.entry.entry_point ||
              ("debug_settings" === this.entry.entry_point && "internal_test" !== n.entry_context.traffic_class) ||
              n.business_agent_id !== this.businessAgentId ||
              (null != this.profileDraft && n.underlying_gizmo_id !== this.profileDraft.gizmoId) ||
              (null != e && e !== n.underlying_gizmo_id) ||
              (null != e && 1 !== n.business_agent_native_runtime_version) ||
              (t.gizmo_resource?.business_agent_native_runtime_version != null &&
                t.gizmo_resource.business_agent_native_runtime_version !== n.business_agent_native_runtime_version) ||
              (null != t.gizmo_resource && t.gizmo_resource.gizmo.id !== n.underlying_gizmo_id)
            )
              throw Error("Business Agent identity mismatch")
            let a = n.business_agent_native_runtime_version
            "shared_link" === this.entry.entry_point && null != a && (0, d.DQ)(this.scope)
            let o = {
                businessAgentId: n.business_agent_id,
                nativeRuntimeVersion: a,
                gizmoId: n.underlying_gizmo_id,
                interactionId: n.interaction_id,
                businessName: n.business_name?.trim() || void 0,
                logoUrl: n.favicon_url?.trim() || n.logo_url?.trim() || void 0,
                headerColor: n.header_color?.trim() || void 0,
                privacyPolicyUrl: n.privacy_policy_url,
                showDisclosureModal: !1,
                showConversationStarters: !1,
              },
              s = { accountId: this.accountId, userId: this.userId, status: "ready", context: o },
              l = null == a ? t.gizmo_resource : await (0, c.E)(this.scope, s, t.gizmo_resource)
            return (
              this.assertCurrent(),
              (o.businessName = o.businessName ?? (l?.gizmo.display.name.trim() || void 0)),
              null != a &&
                ((o.logoUrl = o.logoUrl ?? (l?.gizmo.display.profile_picture_url?.trim() || void 0)),
                (o.headerColor = o.headerColor ?? (l?.gizmo.display.theme?.trim() || void 0))),
              (this.resource = l),
              (this.disclosure = n.disclosure ?? n.global_disclosure),
              (this.ready = s),
              o
            )
          }
        },
      },
    )
  },
  C6kc(e, t, n) {
    var a = n("mBJV"),
      i = n("MVHH"),
      o = n("D99L"),
      r = n("fVOX"),
      s = n("yGJW"),
      l = n("g2p6")
    function c(e, t, n) {
      ;("memory_footnote_shown" === t &&
        (0, s.yy)(e, o.CodexChatgptInteractionMemoryFootnoteShown, { memoryCitationExperiment: n }),
        e
          .get(r.u)
          .count("default", t, {
            entrypoint: "turn_sources_button",
            memory_citation_experiment: n,
            target: "search_sources_sidebar",
          }))
    }
    n.d(
      t,
      { ag: () => i.sI },
      {
        LS: function (e, t) {
          ;("dismissed" === t &&
            (0, s.yy)(e, o.CodexChatgptInteractionMemoryIntroductionDismissed, { announcementKey: l.zF }),
            "shown" === t &&
              (0, s.yy)(e, a.kKj, { eventId: `${l.zF}_tooltip_shown`, type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP" }))
        },
        w8: function (
          e,
          {
            actionType: t,
            conversationId: n,
            experiment: a,
            messageId: o,
            source: r,
            feedback: l,
            selectedFeedback: d,
            surface: u = "sources",
          },
        ) {
          let p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED"
          "positive" === l
            ? (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE")
            : "negative" === l
              ? (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE")
              : Object.is(l, null) && (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED")
          let h =
            null == r
              ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON"
              : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU"
          ;("explainer" === u &&
            (h = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"),
            (0, s.yy)(e, i.im, {
              actionType: t,
              conversationId: n ?? void 0,
              messageId: o,
              citationUuid: r?.citationUuid ?? void 0,
              sourceType: (function (e) {
                switch (e?.conversationContextType) {
                  case "user_memory":
                    return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY"
                  case "general_memory":
                    return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY"
                  case "past_conversation":
                    return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION"
                  case "user_instructions":
                    return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS"
                  case null:
                  case void 0:
                    return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                }
              })(r),
              feedback: p,
              selectedFeedback:
                null == d
                  ? void 0
                  : {
                      positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                      negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE",
                    }[d],
              entrypoint: h,
              target:
                "explainer" === u ||
                "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === t
                  ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR"
                  : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
              memoryCitationExperiment: a,
            }),
            "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === t &&
              c(e, "chatgpt_memory_citations_sidebar_open_clicked", a))
        },
        zw: c,
      },
    )
  },
  GTpx(e, t, n) {
    var a = n("zTeN"),
      i = n("SPnB"),
      o = n("Ghh3"),
      r = n("OWtl"),
      s = n("rvFo"),
      l = n("g2p6")
    let c = (0, a.RD)(r.u, ({ scope: e }) => {
      let t = e.get(l.Sk),
        n = e.get(i.chatGptAuthenticatedUserId$)
      return {
        enabled: e.get(i.f4) && null != t,
        queryKey: d({ accountId: t, userId: n }),
        queryFn: async ({ signal: a }) => {
          if (e.get(l.Sk) !== t || e.get(i.chatGptAuthenticatedUserId$) !== n)
            throw Error("Account changed before loading personalization")
          return o.Request.safeGet("/user_system_messages", { signal: a })
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
          a = e.get(i.chatGptAuthenticatedUserId$),
          r = e.query.snapshot(c)
        if ((await r.cancel(), e.get(l.Sk) !== n || e.get(i.chatGptAuthenticatedUserId$) !== a))
          throw Error("Account changed before saving personalization")
        let s = await o.Request.safePatch("/user_system_messages", { requestBody: t })
        r.setData(s)
      },
    })),
      n.d(t, {}, { Pm: d, gM: c }))
  },
  wxDG(e, t, n) {
    n.d(t, { t: () => d })
    var a = n("Ghh3"),
      i = n("LhrG"),
      o = n("UxLW")
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
        let i = await a.Request.safeGet("/conversation/{conversation_id}", {
          parameters: { path: { conversation_id: e } },
          additionalHeaders: { "ChatGPT-Account-ID": t },
          expectedErrorStatuses: [403, 404],
          signal: n,
        })
        return (n.throwIfAborted(), { id: e, title: i.title ?? null })
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
              return null != (0, o.AG)(n)
                ? r(e, n, await s(e.conversationId, t, d))
                : (async function (e, t, n, o) {
                    var r, d, u
                    let p = await (0, i.F)(t, n, o)
                    o.throwIfAborted()
                    let h = p.access_kind,
                      m = e.conversationId ?? p.origination_thread_id,
                      g = { "ChatGPT-Account-ID": n },
                      [f, _, b, y] = await Promise.allSettled([
                        "mounted" === h
                          ? Promise.resolve(null)
                          : a.Request.safeGet("/files/library/files/{library_file_id}/sharing-state", {
                              parameters: { path: { library_file_id: t }, query: { include_profile_photos: !1 } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: o,
                            }),
                        "mounted" === h
                          ? Promise.resolve(null)
                          : a.Request.safeGet("/files/library/files/{library_file_id}/versions", {
                              parameters: { path: { library_file_id: t }, query: { limit: 1 } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: o,
                            }),
                        "shared" === h
                          ? a.Request.safeGet("/files/library/shared/files/{library_file_id}/access", {
                              parameters: { path: { library_file_id: t } },
                              additionalHeaders: g,
                              expectedErrorStatuses: [403, 404],
                              signal: o,
                            })
                          : Promise.resolve(null),
                        s(m, n, o),
                      ])
                    o.throwIfAborted()
                    let x = c(f),
                      C = c(_)?.items[0] ?? null,
                      w = c(b),
                      v = l(x?.owner ?? null)
                    return {
                      access:
                        ((r = h),
                        (d = x),
                        (u = w?.can_edit),
                        null != d &&
                        d.viewer.principal.principal_type === d.owner.principal.principal_type &&
                        d.viewer.principal.principal_id === d.owner.principal.principal_id
                          ? "owner"
                          : d?.viewer.role_id.includes("editor") || !0 === u
                            ? "editor"
                            : "owned" === r
                              ? "owner"
                              : "shared" !== r || (null == d && null == u)
                                ? null
                                : "viewer"),
                      conversation: c(y),
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
                        let i = a.actor_id?.trim()
                        if (null != i && null != t) {
                          if (i === t.owner.principal.principal_id) return l(t.owner)
                          if (i === t.viewer.principal.principal_id) return l(t.viewer) ?? { kind: "you" }
                        }
                        let o = a.actor_display_name?.trim() || a.actor_email?.trim()
                        return null != o
                          ? { kind: "person", name: o }
                          : "create" === a.action && null != n
                            ? n
                            : { kind: "collaborator" }
                      })(C, x, v),
                    }
                  })(e, n, t, d)
            }
            let [u, p] = await Promise.all([
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
            if ((d.throwIfAborted(), null == u)) return r(e, null, p)
            let h = null != n && u.owner_id === n,
              m = h ? { kind: "you" } : null
            return {
              access: h ? "owner" : "viewer",
              conversation: p,
              createdAt: u.creation_time,
              createdBy: m,
              externalAccount: e.externalAccount ?? null,
              fileExtension: u.file_extension,
              libraryFileId: null,
              mimeType: u.mime_type ?? e.mimeType ?? null,
              name: u.name || e.name,
              parentDirectoryId: e.parentDirectoryId ?? null,
              sizeBytes: u.size ?? e.sizeBytes ?? null,
              sourceUrl: e.sourceUrl,
              updatedAt: u.ready_time ?? u.creation_time,
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
    n.d(t, { h: () => I })
    var a = n("ABep"),
      i = n("QosV"),
      o = n("bqtn"),
      r = n("Bbed"),
      s = n("CccI"),
      l = n("EBlr"),
      c = n("Pq1H"),
      d = n("zTeN"),
      u = n("oyxz"),
      p = n("SPnB"),
      h = n("UxN3"),
      m = n("OWtl"),
      g = n("Vc45"),
      f = n("wxDG")
    function _(e) {
      let t,
        n,
        r,
        c,
        p,
        f,
        _ = (0, i.c)(12),
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
          ? ((r = (0, a.jsx)(o.ms.ItemIcon, {
              children: (0, a.jsx)(h.b5, { icon: { assets: { 16: s.c, 20: l.b } } }),
            })),
            (c = (0, a.jsx)(u.A, {
              id: "chatgptFilePreview.fileInfo.menuItem",
              defaultMessage: "File info",
              description:
                "Short action label in a file preview title menu. Selecting it opens a panel with metadata for the current file.",
            })),
            (_[5] = r),
            (_[6] = c))
          : ((r = _[5]), (c = _[6])),
        _[7] !== n
          ? ((p = (0, a.jsxs)(o.ms.Item, { onSelect: n, children: [r, c] })), (_[7] = n), (_[8] = p))
          : (p = _[8]),
        _[9] !== t || _[10] !== p
          ? ((f = (0, a.jsxs)(a.Fragment, { children: [t, p] })), (_[9] = t), (_[10] = p), (_[11] = f))
          : (f = _[11]),
        f
      )
    }
    function b(e) {
      let t,
        n = (0, i.c)(4),
        { source: a } = e,
        o = (0, d.gh)(m.u),
        r = (0, d.Ul)(p.chatGptAuthenticatedAccountId$),
        s = (0, d.Ul)(p.chatGptAuthenticatedUserId$)
      return (
        n[0] !== r || n[1] !== a || n[2] !== s
          ? ((t = (0, f.t)({ accountId: r, source: a, userId: s })), (n[0] = r), (n[1] = a), (n[2] = s), (n[3] = t))
          : (t = n[3]),
        (0, c.f)(t, o.queryClient),
        null
      )
    }
    var y = n("fCWS"),
      x = n("gjSX"),
      C = n("E8Sp"),
      w = n("xmjg"),
      v = n("O8Pw"),
      A = n("tl2n")
    function k(e) {
      let t,
        n,
        r,
        s,
        l,
        c = (0, i.c)(16),
        { libraryFileId: p, disabled: g, onSelect: f } = e,
        _ = (0, d.gh)(m.u),
        { pathname: b } = (0, d.Ul)(C.gM),
        k = (0, v.Tq)(),
        S = (0, v.o0)()
      return !(0, d.Ul)(A.$7) ||
        "/library" === b ||
        b?.startsWith("/library/") ||
        "/space" === b ||
        b?.startsWith("/space/")
        ? null
        : (c[0] !== S ? ((t = S({ 16: y.Y, 20: x.V }, { 16: w.Z, 20: w.e })), (c[0] = S), (c[1] = t)) : (t = c[1]),
          c[2] !== t ? ((n = (0, a.jsx)(h.b5, { icon: { assets: t } })), (c[2] = t), (c[3] = n)) : (n = c[3]),
          c[4] !== p || c[5] !== S || c[6] !== f || c[7] !== _
            ? ((r = () => {
                ;(f?.(),
                  (0, C.oo)(_, S(`/library/file/${encodeURIComponent(p)}`, `/space/file/${encodeURIComponent(p)}`)))
              }),
              (c[4] = p),
              (c[5] = S),
              (c[6] = f),
              (c[7] = _),
              (c[8] = r))
            : (r = c[8]),
          c[9] !== k
            ? ((s = k
                ? (0, a.jsx)(u.A, {
                    id: "artifactViewer.openInLibrary.space",
                    defaultMessage: "Open in Space",
                    description:
                      "Artifact title menu action for opening the saved artifact in Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                  })
                : (0, a.jsx)(u.A, {
                    id: "artifactViewer.openInLibrary",
                    defaultMessage: "Open in Library",
                    description: "Artifact title menu action for opening the saved artifact in Library",
                  })),
              (c[9] = k),
              (c[10] = s))
            : (s = c[10]),
          c[11] !== g || c[12] !== n || c[13] !== r || c[14] !== s
            ? ((l = (0, a.jsx)(o.ms.Item, { disabled: g, leftIcon: n, onSelect: r, children: s })),
              (c[11] = g),
              (c[12] = n),
              (c[13] = r),
              (c[14] = s),
              (c[15] = l))
            : (l = c[15]),
          l)
    }
    let S = (0, r._)(async () => (await n.e(427370).then(n.bind(n, "KU1f"))).LibraryFilePreviewVersionHistory)
    function I(e) {
      let t,
        n,
        r,
        s,
        l,
        c,
        d = (0, i.c)(23),
        {
          children: u,
          favoriteAction: p,
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
        A = null != v || null != w || null != p || null != C || null != h
      return A || null != u
        ? (d[3] !== v || d[4] !== f
            ? ((n = null == v || null == f ? null : (0, a.jsx)(_, { ownerId: v, source: f })),
              (d[3] = v),
              (d[4] = f),
              (d[5] = n))
            : (n = d[5]),
          d[6] !== w || d[7] !== x || d[8] !== y
            ? ((r = null == w ? null : (0, a.jsx)(k, { disabled: y, libraryFileId: w, onSelect: x })),
              (d[6] = w),
              (d[7] = x),
              (d[8] = y),
              (d[9] = r))
            : (r = d[9]),
          d[10] !== h || d[11] !== C
            ? ((s = C ?? (null == h ? null : (0, a.jsx)(S, { file: h }))), (d[10] = h), (d[11] = C), (d[12] = s))
            : (s = d[12]),
          d[13] !== u || d[14] !== A
            ? ((l = A && null != u ? (0, a.jsx)(o.ms.Separator, { className: "last:hidden" }) : null),
              (d[13] = u),
              (d[14] = A),
              (d[15] = l))
            : (l = d[15]),
          d[16] !== u || d[17] !== p || d[18] !== n || d[19] !== r || d[20] !== s || d[21] !== l
            ? ((c = (0, a.jsxs)(a.Fragment, { children: [n, r, p, s, l, u] })),
              (d[16] = u),
              (d[17] = p),
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
  vpdG(e, t, n) {
    var a = n("QosV"),
      i = n("HVBu"),
      o = n.n(i),
      r = n("zTeN"),
      s = n("DBCl"),
      l = n("zd8w"),
      c = n("Gdjn"),
      d = n("xqnZ"),
      u = n("OWtl"),
      p = n("RxZZ"),
      h = n("Ow2S"),
      m = n("fDfx"),
      g = n("MrGp")
    n.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            n,
            i,
            f,
            _,
            b,
            y = (0, a.c)(19)
          y[0] !== e ? ((t = void 0 === e ? {} : e), (y[0] = e), (y[1] = t)) : (t = y[1])
          let { composerController: x, conversationId: C, draftKey: w, initialPrompt: v, initialPromptKind: A } = t,
            k = void 0 === w ? C : w,
            S = (0, r.gh)(u.u)
          y[2] !== C || y[3] !== k || y[4] !== v || y[5] !== A || y[6] !== S
            ? ((n = () =>
                o()(() => {
                  let e = null == C ? null : S.get(g.uh, C),
                    t = (0, d.Sr)(v ?? (null == k ? "" : S.get(h.Od, k)), {
                      addInitialContentToHistory: null == v && null != k,
                      defaultTextKind:
                        A ?? ((null == v && null != k) || (0, c.Tf)(v ?? "").length > 0 ? "prompt" : "plain"),
                      enableFileMentions: !0,
                      enableRichText: !0,
                      enableSkillMentions: !1,
                      enableSlashCommands: { triggers: ["/"] },
                      plainTextMode: (0, p.CN)(S.get, s.Szl.composerPlainTextMode),
                      suggestionOptions: {
                        enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                        variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0,
                      },
                    })
                  return (
                    null == v &&
                      null != C &&
                      "string" == typeof k &&
                      null != (0, m.Cc)(S, k) &&
                      "tpp" !== e &&
                      "flora" !== e &&
                      (0, h.f_)(S, C, t.getChatGptPrompt().systemHints),
                    t
                  )
                })),
              (y[2] = C),
              (y[3] = k),
              (y[4] = v),
              (y[5] = A),
              (y[6] = S),
              (y[7] = n))
            : (n = y[7])
          let [I] = (0, l.useState)(n)
          y[8] !== I || y[9] !== x ? ((i = x ?? I()), (y[8] = I), (y[9] = x), (y[10] = i)) : (i = y[10])
          let E = i,
            N = (0, l.useRef)(null)
          ;(y[11] !== E || y[12] !== k || y[13] !== S
            ? ((f = () => {
                if (null == k) return
                let e = S.get(h.Od, k)
                return (
                  null != N.current && N.current !== e && E.restoreDraft(e),
                  () => {
                    N.current = S.get(h.Od, k)
                  }
                )
              }),
              (_ = [E, k, S]),
              (y[11] = E),
              (y[12] = k),
              (y[13] = S),
              (y[14] = f),
              (y[15] = _))
            : ((f = y[14]), (_ = y[15])),
            (0, l.useLayoutEffect)(f, _),
            y[16] !== E || y[17] !== x
              ? ((b = () => {
                  null != x || E.view.isDestroyed || E.destroy()
                }),
                (y[16] = E),
                (y[17] = x),
                (y[18] = b))
              : (b = y[18]))
          let j = b
          return ((0, d.fP)(j, E), E)
        },
      },
    )
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
            i = [],
            o = [],
            r = [...e.matchAll(/\\(?:[a-zA-Z]+|[^])|[{}]/g)]
          for (let e of r) {
            let t = e.index + e[0].length
            if (e[0].startsWith("\\") && e.index < a && t > n) ((n = Math.min(n, e.index)), (a = Math.max(a, t)))
            else if ("{" === e[0]) o.push(e.index)
            else if ("}" === e[0]) {
              let e = o.pop()
              null != e && i.push({ start: e, end: t })
            }
          }
          for (let t of r) {
            if (!t[0].startsWith("\\") || t.index >= a || t.index + t[0].length <= n) continue
            let o = t.index + t[0].length,
              r = 0
            if (
              (/^\\(?:[dt]?frac|binom|overset|underset)$/.test(t[0])
                ? (r = 2)
                : /^\\(?:sqrt|mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathcal|mathbb|mathfrak|mathnormal|mathscr|operatorname|text|textrm|textbf|textit|vec|hat|widehat|bar|overline|underline|tilde|widetilde|dot|ddot)$/.test(
                    t[0],
                  ) && (r = 1),
              "\\sqrt" === t[0] && "[" === e[o])
            ) {
              let t = e.indexOf("]", o)
              t >= 0 && (o = t + 1)
            }
            for (let t = r; t > 0; t -= 1) {
              for (; /\s/.test(e[o] ?? "");) o += 1
              o =
                i.find((e) => e.start === o)?.end ??
                o + (e.slice(o).match(/^(?:\\[a-zA-Z]+|\\[^]|[^])/u)?.[0].length ?? 0)
            }
            a = Math.max(a, o)
          }
          for (let e of i)
            ((n <= e.start && a > e.start && a < e.end) || (n > e.start && n < e.end && a >= e.end)) &&
              ((n = Math.min(n, e.start)), (a = Math.max(a, e.end)))
          return { start: n, end: a }
        },
      },
    )
  },
  AleY(e, t, n) {
    var a = n("zTeN"),
      i = n("ReGc"),
      o = n("OWtl"),
      r = n("OMIV")
    let s = (0, a.un)(o.u, ({ get: e }) =>
      e(i.a).data?.preloadAttribution?.partner === "lenovo" ? e(r.M9)?.getContext().user.customIDs?.stableID : void 0,
    )
    n.d(
      t,
      {},
      {
        f: s,
        s: function (e, t) {
          t && e.searchParams.set("lenovo_preload_installation_id", t)
        },
      },
    )
  },
  KbPm(e, t, n) {
    var a = n("zTeN"),
      i = n("Ghh3"),
      o = n("OWtl")
    let r = (0, a.vU)(o.u, (e) => ({
      queryKey: ["tpp-onboarding-workspace-role", e?.accountId, e?.userId],
      enabled: null != e,
      staleTime: 6e4,
      retry: !1,
      queryFn: async ({ signal: t }) => {
        if (null == e) return null
        let n = await i.Request.safeGet("/accounts/{account_id}/users/{user_id}/onboarding_information", {
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId },
          parameters: { path: { account_id: e.accountId, user_id: e.userId } },
          signal: t,
        })
        return n.role?.trim() || null
      },
    }))
    n.d(t, {}, { o: r })
  },
  ZOQb(e, t, n) {
    var a = n("zTeN"),
      i = n("Oj9r")
    let o = (0, a.vP)(i.GD, () => null),
      r = (0, a.un)(i.GD, ({ get: e }) => {
        let t = e(o)
        return null == t ? null : e(t)
      })
    n.d(
      t,
      {},
      {
        M: function (e) {
          return (t) => {
            if (null != t)
              return (
                e.set(o, t),
                () => {
                  e.get(o) === t && e.set(o, null)
                }
              )
          }
        },
        a: r,
      },
    )
  },
  LhrG(e, t, n) {
    var a = n("tFxw"),
      i = n("Ghh3"),
      o = n("eShZ"),
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
            let o = await i.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
              parameters: { path: { provider_key: c.provider } },
              requestBody: { file_id: e },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503, 504],
              signal: n,
            })
            n.throwIfAborted()
            let r = (0, s.CN)(o.file_id)
            if (
              o.file_id !== e &&
              ((0, a.YO)(e)?.encodedAccountKey != null ||
                r?.provider !== c.provider ||
                r.nativeFileId !== c.nativeFileId)
            )
              throw Error("Provider file metadata does not match the requested file")
            return {
              id: o.file_id,
              kind: "file",
              name: o.name,
              parent_directory_id: null,
              access_kind: "mounted",
              mime_type: o.mime_type,
              file_size_bytes: o.file_size_bytes,
            }
          }
          let d = {
            parameters: { path: { library_file_id: e } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [403, 404],
            signal: n,
          }
          if ((n.throwIfAborted(), /^libfile_fde[123]_/.test(e))) {
            let t = await i.Request.safeGet("/files/library/files/{library_file_id}/node", d)
            return (n.throwIfAborted(), (0, r.U9)(t, e))
          }
          try {
            let e = await i.Request.safeGet("/files/library/files/{library_file_id}", d)
            return (n.throwIfAborted(), e)
          } catch (e) {
            if (!(e instanceof o.fk) || (403 !== e.status && 404 !== e.status)) throw e
          }
          n.throwIfAborted()
          try {
            if (
              ((l = await i.Request.safeGet("/files/library/files/{library_file_id}/node", d)),
              n.throwIfAborted(),
              "owned" === l.access_kind && "image" === l.library_file_category && null == l.library_artifact_type)
            ) {
              let e = await i.Request.safeGet("/files/library/files/{library_file_id}/versions", {
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
            if (!(s instanceof o.fk) || (403 !== s.status && 404 !== s.status)) throw s
            let t = null,
              a = new Set()
            do {
              n.throwIfAborted()
              let o = await i.Request.safePost("/files/library", {
                requestBody: { cursor: t, limit: 100, include_hidden_files: !0, include_saved_entities: !0 },
                additionalHeaders: d.additionalHeaders,
                expectedErrorStatuses: [403, 404],
                signal: n,
              })
              n.throwIfAborted()
              let r = o.items.find((t) => t.id === e)
              if (null != r) return r
              if (null == (t = o.cursor ?? null) || a.has(t)) break
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
      i = n("QosV"),
      o = n("LVea"),
      r = n("zTeN"),
      s = n("oyxz"),
      l = n("Sm6l"),
      c = n("JNtf"),
      d = n("ZtSy"),
      u = n("bVeK"),
      p = n("vkjh")
    n("mmXj")
    var h = n("yGJW"),
      m = n("OWtl")
    function g(e) {
      return e.preventDefault()
    }
    function f(e) {
      let t,
        n,
        o = (0, i.c)(3),
        { country: r } = e
      o[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { learnMoreLink: _ }), (o[0] = t)) : (t = o[0])
      let l = t
      return (
        o[1] !== r
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
            (o[1] = r),
            (o[2] = n))
          : (n = o[2]),
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
            A,
            k,
            S,
            I = (0, i.c)(28),
            { country: E, isContinuing: N, onContinue: j, onShown: T } = e,
            O = void 0 !== N && N,
            M = (0, r.gh)(m.u)
          I[0] !== M
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
                        M.get(h.YV).logProductEvent(o.CodexChatgptOnboardingLegalLinkClicked, {
                          link: o.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_TERMS,
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
                        M.get(h.YV).logProductEvent(o.CodexChatgptOnboardingLegalLinkClicked, {
                          link: o.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_PRIVACY,
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
                        M.get(h.YV).logProductEvent(o.CodexChatgptOnboardingLegalLinkClicked, {
                          link: o.CodexChatgptOnboardingLegalLink.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_KOREA_ADDENDUM,
                        }),
                      children: e,
                    },
                    "korea-addendum",
                  ),
              }),
              (I[0] = M),
              (I[1] = t))
            : (t = I[1])
          let P = t
          return (
            I[2] !== T ? ((n = { onOpenAutoFocus: T, onEscapeKeyDown: g }), (I[2] = T), (I[3] = n)) : (n = I[3]),
            I[4] !== j
              ? ((_ = (e) => {
                  ;(e.preventDefault(), j())
                }),
                (I[4] = j),
                (I[5] = _))
              : (_ = I[5]),
            I[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, a.jsx)("div", {
                  className: "flex size-9 items-center justify-center",
                  children: (0, a.jsx)(u.IJp, {}),
                })),
                (I[6] = b))
              : (b = I[6]),
            I[7] === Symbol.for("react.memo_cache_sentinel")
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
                (I[7] = y))
              : (y = I[7]),
            I[8] !== E
              ? ((x = (0, a.jsx)(c.rr, {
                  className: "text-center text-base leading-6 text-secondary",
                  children: (0, a.jsx)(f, { country: E }),
                })),
                (I[8] = E),
                (I[9] = x))
              : (x = I[9]),
            I[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, a.jsx)(s.A, {
                  id: "chatgpt.new-onboarding.continue",
                  defaultMessage: "Continue",
                  description:
                    "Label of a button in the new user onboarding that concludes the onboarding flow and lets user start to use chatgpt.",
                })),
                (I[10] = C))
              : (C = I[10]),
            I[11] !== O
              ? ((w = (0, a.jsx)(l.$, {
                  color: "primary",
                  loading: O,
                  size: "beaconAction",
                  type: "submit",
                  children: C,
                })),
                (I[11] = O),
                (I[12] = w))
              : (w = I[12]),
            I[13] !== E || I[14] !== P.koreaAddendumLink || I[15] !== P.privacyLink || I[16] !== P.termsLink
              ? ((v = (0, a.jsx)("p", {
                  className: "text-center text-sm text-secondary",
                  children:
                    "KR" === E
                      ? (0, a.jsx)(s.A, {
                          id: "thread.agreeToTermsNoAuthKorea-may-06",
                          defaultMessage:
                            "By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink> and its <koreaAddendumLink>Korea addendum</koreaAddendumLink>.",
                          description:
                            "Legal notice below Continue on the final ChatGPT new-user onboarding screen in Korea. Each rich-text tag surrounds a link to the named policy.",
                          values: {
                            termsLink: P.termsLink,
                            privacyLink: P.privacyLink,
                            koreaAddendumLink: P.koreaAddendumLink,
                          },
                        })
                      : (0, a.jsx)(s.A, {
                          id: "thread.agreeToTermsNoAuth-may-06",
                          defaultMessage:
                            "By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink>.",
                          description:
                            "Legal notice below Continue on the final ChatGPT new-user onboarding screen. Each rich-text tag surrounds a link to the named policy.",
                          values: { termsLink: P.termsLink, privacyLink: P.privacyLink },
                        }),
                })),
                (I[13] = E),
                (I[14] = P.koreaAddendumLink),
                (I[15] = P.privacyLink),
                (I[16] = P.termsLink),
                (I[17] = v))
              : (v = I[17]),
            I[18] !== v || I[19] !== x || I[20] !== w
              ? ((A = (0, a.jsxs)("div", {
                  className: "flex w-full flex-col gap-y-4 max-sm:px-6",
                  children: [x, w, v],
                })),
                (I[18] = v),
                (I[19] = x),
                (I[20] = w),
                (I[21] = A))
              : (A = I[21]),
            I[22] !== A || I[23] !== _
              ? ((k = (0, a.jsx)("div", {
                  className: "flex h-full flex-col overflow-y-auto",
                  children: (0, a.jsxs)("form", {
                    className:
                      "m-auto flex w-full shrink-0 flex-col items-center justify-between py-4 max-sm:min-h-full sm:w-80 sm:justify-center sm:gap-y-12",
                    onSubmit: _,
                    children: [y, A],
                  }),
                })),
                (I[22] = A),
                (I[23] = _),
                (I[24] = k))
              : (k = I[24]),
            I[25] !== k || I[26] !== n
              ? ((S = (0, a.jsx)(p.d, {
                  claim: "fullscreen_onboarding",
                  children: (0, a.jsx)(c.lG, {
                    open: !0,
                    showDialogClose: !1,
                    shouldIgnoreClickOutside: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    contentClassName: "h-full w-full bg-surface text-default",
                    contentProps: n,
                    children: k,
                  }),
                })),
                (I[25] = k),
                (I[26] = n),
                (I[27] = S))
              : (S = I[27]),
            S
          )
        },
      },
    )
  },
  SLig(e, t, n) {
    n.d(t, { W: () => i })
    var a = n("a6v3")
    function i(e) {
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
          return (0, a.T1)(e, (e, { scope: n, signal: a, derived: i }) => {
            let o = a(({ scope: e }) => ({
                answers: t.initialAnswers,
                error: null,
                status: "active",
                step: "function" == typeof t.initialStep ? t.initialStep(e) : t.initialStep,
              })),
              r = i((e, { scope: n }) => t.getContext(n, e(o).answers))
            return {
              definition: t,
              state$: o,
              context$: r,
              advance: async function (e, a, i) {
                if (i.aborted || "active" !== e.status || o.get() !== e) return
                let r = { ...e, error: null, status: "pending" }
                o.set(r)
                let s = () => {
                  o.get() === r && o.set({ ...e, error: null })
                }
                i.addEventListener("abort", s, { once: !0 })
                try {
                  if (i.aborted) return void s()
                  let l = { ...e.answers, ...a },
                    c = t.getContext(n, l),
                    d = t.steps[e.step].next,
                    u = "function" == typeof d ? await d(c, i, n) : d
                  if (i.aborted || o.get() !== r) return
                  if ((t.onAdvance?.(n, c, e.step, u), "complete" === u)) {
                    if ((await t.onComplete(n, c, i), i.aborted || o.get() !== r)) return
                    o.set({ answers: l, error: null, status: "complete", step: null })
                  } else o.set({ answers: l, error: null, status: "active", step: u })
                } catch (t) {
                  i.aborted ||
                    o.get() !== r ||
                    o.set({ ...e, error: t instanceof Error ? t : Error("Onboarding transition failed", { cause: t }) })
                } finally {
                  i.removeEventListener("abort", s)
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
      i = n("YnMP"),
      o = n("zTeN"),
      r = n("Ghh3"),
      s = n("g2p6"),
      l = n("KbPm")
    n("AGHv")
    var c = n("yGJW")
    n("OMIV")
    var d = n("idGD"),
      u = n("wP9i")
    let p = (0, o.vP)(u.E, "idle")
    n.d(
      t,
      {},
      {
        R: async function (e, t, n) {
          let a = new AbortController(),
            i = a.signal,
            o = e.watch((e) => {
              ;(0, d.oA)(e, t) || a.abort()
            }),
            s = e.query.snapshot(l.o, t)
          try {
            ;(i.throwIfAborted(),
              await s.cancel(),
              i.throwIfAborted(),
              await r.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                parameters: { path: { account_id: t.accountId, user_id: t.userId } },
                requestBody: { onboarding_information: { role: n, departments: [] } },
                additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                signal: i,
              }),
              i.throwIfAborted(),
              await s.cancel(),
              i.throwIfAborted(),
              s.setData(n))
          } finally {
            o()
          }
        },
        x: async function (e, { identity: t, planType: n }) {
          if (!(0, d.oA)(e, t) || "pending" === e.get(p)) return !1
          e.set(p, "pending")
          let o = new AbortController(),
            r = e.watch((e) => {
              ;(0, d.oA)(e, t) || o.abort()
            })
          ;((0, c.yy)(e, i.HE, { productSurface: "edu" === n ? "chatgpt_for_education" : void 0 }),
            (0, c.yy)(e, a.ZX, {
              onboardingExperience: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
              action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED",
            }))
          try {
            await (0, s.hs)(e, t.accountId, "oai/apps/hasSeenOnboarding", { userId: t.userId, signal: o.signal })
          } catch {
          } finally {
            r()
          }
          let l = !o.signal.aborted && (0, d.oA)(e, t)
          return (l && (0, d.Jl)(e, t), e.set(p, l ? "complete" : "idle"), l)
        },
      },
    )
  },
  wP9i(e, t, n) {
    var a = n("zTeN"),
      i = n("OWtl")
    let o = (0, a.z8)("WorkspaceMemberScope", {
      parent: i.u,
      key: ({ identity: e }) => JSON.stringify([e.accountId, e.userId]),
    })
    n.d(t, {}, { E: o })
  },
  Vbkk(e, t, n) {
    var a = n("ABep"),
      i = n("QosV"),
      o = n("on57"),
      r = n("JNtf"),
      s = n("vkjh")
    function l(e) {
      return e.preventDefault()
    }
    ;(n("mmXj"),
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
              p = (0, i.c)(14)
            ;(p[0] !== e.className
              ? ((t = (0, o.A)("h-full w-full bg-surface-elevated text-default", e.className)),
                (p[0] = e.className),
                (p[1] = t))
              : (t = p[1]),
              p[2] !== e.onShown
                ? ((n = { "aria-describedby": void 0, onOpenAutoFocus: e.onShown, onEscapeKeyDown: l }),
                  (p[2] = e.onShown),
                  (p[3] = n))
                : (n = p[3]))
            let h = e.pageClassName ?? "m-auto flex w-full flex-col items-center gap-6 px-6 py-10 md:px-10"
            return (
              p[4] !== e.children || p[5] !== h
                ? ((c = (0, a.jsx)("div", { className: h, children: e.children })),
                  (p[4] = e.children),
                  (p[5] = h),
                  (p[6] = c))
                : (c = p[6]),
              p[7] !== e.isBusy || p[8] !== c
                ? ((d = (0, a.jsx)("div", {
                    className: "flex h-full flex-col overflow-y-auto select-none",
                    "aria-busy": e.isBusy,
                    children: c,
                  })),
                  (p[7] = e.isBusy),
                  (p[8] = c),
                  (p[9] = d))
                : (d = p[9]),
              p[10] !== t || p[11] !== n || p[12] !== d
                ? ((u = (0, a.jsx)(s.d, {
                    claim: "fullscreen_onboarding",
                    children: (0, a.jsx)(r.lG, {
                      open: !0,
                      showDialogClose: !1,
                      shouldIgnoreClickOutside: !0,
                      unstyledContent: !0,
                      viewportSized: !0,
                      contentClassName: t,
                      contentProps: n,
                      children: d,
                    }),
                  })),
                  (p[10] = t),
                  (p[11] = n),
                  (p[12] = d),
                  (p[13] = u))
                : (u = p[13]),
              u
            )
          },
        },
      ))
  },
  bMLJ(e, t, n) {
    var a = n("Qgfj"),
      i = n("jE6S")
    let o = Object.entries(
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
        ...i.O,
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
      ],
      u = [
        {
          id: "pharmacy",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_pharmacy",
            defaultMessage: "Pharmacy",
            description: "Role option in the healthcare onboarding survey.",
          }),
        },
        {
          id: "behavioral_health",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_behavioral_health",
            defaultMessage: "Behavioral health",
            description: "Role option in the healthcare onboarding survey.",
          }),
        },
        {
          id: "care_management_utilization_review",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_care_management_utilization_review",
            defaultMessage: "Care management & utilization review",
            description: "Role option in the healthcare onboarding survey.",
          }),
        },
        {
          id: "revenue_cycle_billing_claims",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_revenue_cycle_billing_claims",
            defaultMessage: "Revenue cycle, billing & claims",
            description: "Role option in the healthcare onboarding survey.",
          }),
        },
        {
          id: "quality_safety_regulatory",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_quality_safety_regulatory",
            defaultMessage: "Quality, safety & regulatory",
            description: "Role option in the healthcare onboarding survey.",
          }),
        },
        {
          id: "technology_business_corporate",
          displayValue: (0, a.zR)({
            id: "onboarding.health_role.choice_technology_business_corporate",
            defaultMessage: "Technology, business & corporate functions",
            description: "Role option in the healthcare onboarding survey.",
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
        Jj: r,
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
    function i() {
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
        SX: i,
        Sv: function (e) {
          let t
          if ("u" < typeof window || !i()) return !1
          let n = window,
            o = (0, a.$)(),
            r = btoa(JSON.stringify(e))
          if (/iPad|iPhone|iPod/.test(o)) {
            let a = n.webkit?.messageHandlers
            t = {
              enterprise_onboarding_complete: a?.onboardingComplete,
              hmp_workspace_created: a?.hmpWorkspaceCreated,
              hmp_verification_complete: a?.hmpVerificationComplete,
            }[e.type]
          } else
            /Android/.test(o) && (t = "enterprise_onboarding_complete" === e.type ? (n.openai ?? n.Android) : n.openai)
          return t?.postMessage != null && (t.postMessage(r), !0)
        },
        uG: function (e) {
          if ("u" < typeof window || !i()) return !1
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
      i = n("QosV"),
      o = n("on57"),
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
            u,
            p,
            h = (0, i.c)(16),
            { children: m, className: g } = e,
            f = (0, l.I)(),
            _ = (0, r.tF)()
          h[0] !== g ? ((t = (0, o.A)("flex w-full flex-col items-center", g)), (h[0] = g), (h[1] = t)) : (t = h[1])
          let b = !_
          ;(h[2] !== f ? ((n = !f && { opacity: 0, y: 7 }), (h[2] = f), (h[3] = n)) : (n = h[3]),
            h[4] === Symbol.for("react.memo_cache_sentinel") ? ((c = { opacity: 1, y: 0 }), (h[4] = c)) : (c = h[4]),
            h[5] !== f ? ((d = f ? { opacity: 1, y: 0 } : { opacity: 0, y: -7 }), (h[5] = f), (h[6] = d)) : (d = h[6]))
          let y = 0.2 * !f
          return (
            h[7] !== y ? ((u = { duration: y }), (h[7] = y), (h[8] = u)) : (u = h[8]),
            h[9] !== m || h[10] !== t || h[11] !== b || h[12] !== n || h[13] !== d || h[14] !== u
              ? ((p = (0, a.jsx)(s.P.div, {
                  className: t,
                  inert: b,
                  initial: n,
                  animate: c,
                  exit: d,
                  transition: u,
                  children: m,
                })),
                (h[9] = m),
                (h[10] = t),
                (h[11] = b),
                (h[12] = n),
                (h[13] = d),
                (h[14] = u),
                (h[15] = p))
              : (p = h[15]),
            p
          )
        },
      },
    )
  },
  Jgbh(e, t, n) {
    var a = n("SPnB"),
      i = n("Ghh3")
    n.d(
      t,
      {},
      {
        M: async function (e) {
          let t = e.get(a.chatGptAuthenticatedAccountId$),
            n = e.get(a.o8)
          if (null != t && null != n)
            try {
              await i.Request.safePost("/onboarding/recommendations", {
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
  NsHZ(e, t, n) {
    n.d(t, { OnboardingRoute: () => aG })
    var a = n("ABep"),
      i = n("QosV"),
      o = n("zTeN"),
      r = n("zd8w"),
      s = n("Wf1j"),
      l = n("oyxz"),
      c = n("HZfM"),
      d = n("SPnB"),
      u = n("EOo5"),
      p = n("YJm0"),
      h = n("g2p6"),
      m = n("jVlT"),
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
      k = n("E8Sp"),
      S = n("yGJW"),
      I = n("qiCZ"),
      E = n("idGD"),
      N = n("Fcwd"),
      j = n("ASxG")
    let T = j.object({ workspaceMemberOnboarding: j.object({ accountId: j.string(), userId: j.string() }) })
    function O(e, t) {
      let n = T.safeParse(t)
      return (
        n.success &&
        n.data.workspaceMemberOnboarding.accountId === e.accountId &&
        n.data.workspaceMemberOnboarding.userId === e.userId
      )
    }
    var M = n("wP9i"),
      P = n("ozm1"),
      R = n("LA2j"),
      D = n("DBCl"),
      G = n("JAom"),
      L = n("CMv2"),
      B = n("pxeg"),
      H = n("uc7r"),
      W = n("hGHw"),
      F = n("OAko"),
      U = n("AGHv"),
      K = n("ecE5"),
      z = n("hZax"),
      V = n("o6hs")
    let q = {
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
        V.M1,
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
    var Y = n("FpcZ"),
      Z = n("pDRe"),
      J = n("Ghh3"),
      Q = n("rvFo")
    let X = (0, o.vU)(y.u, ({ accountId: e, appId: t }) => {
        let [n] = (0, Y.getHostedAppsContentQueriesOptions)({
          accountId: e,
          appIds: [t],
          enabled: !0,
          productContext: "chatgpt",
        }).queries
        if (null == n) throw Error("Expected one app metadata query")
        return { ...n, retryOnMount: !0, refetchOnMount: !0 }
      }),
      ee = (0, o.i1)(y.u, ({ accountId: e }, { get: t }) => {
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
      et = (0, o.vU)(y.u, ({ identity: e, appIds: t }) => ({
        ...(0, Z.p)({ ...e, appIds: t, enabled: !0, productSku: "CONNECTOR_SETTING" }),
        retryOnMount: !0,
        refetchOnMount: !0,
      })),
      en = (0, o.vU)(y.u, (e) => ({
        queryKey: ["workspace_connector_stats", e],
        queryFn: ({ signal: t }) =>
          J.Request.safeGet("/aip/workspace/connector-stats", {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: t,
          }),
        retry: !1,
        staleTime: Q.D.FIVE_MINUTES,
        retryOnMount: !0,
        refetchOnMount: !0,
      }))
    var ea = n("m4Ej"),
      ei = n("on57"),
      eo = n("JNtf"),
      er = n("HOLv"),
      es = n("RNul"),
      el = n("IMIO"),
      ec = n("Vbkk"),
      ed = n("FvYa"),
      eu = n("bVeK"),
      ep = n("F0xz")
    function eh(e) {
      let t,
        n,
        o,
        c,
        d,
        u,
        p,
        h,
        m,
        g,
        f,
        _,
        b,
        y,
        x = (0, i.c)(62),
        { item: C, isBundle: w, selected: v, onSelect: A } = e,
        { app: k, connected: S, canConnect: I, teammateCount: E } = C,
        N = (0, s.A)(),
        j = (0, r.useId)()
      x[0] !== k.name || x[1] !== S || x[2] !== N
        ? ((t = S
            ? N.formatMessage(
                {
                  id: "chatgpt.onboarding.new_workspace.connectors.app.connected",
                  defaultMessage: "{appName} is connected",
                  description:
                    "Accessible label for an already-connected app in workspace onboarding; appName is its display name",
                },
                { appName: k.name },
              )
            : N.formatMessage(
                {
                  id: "chatgpt.onboarding.new_workspace.connectors.app.connect",
                  defaultMessage: "Connect {appName}",
                  description:
                    "Accessible label for selecting or connecting an app in workspace onboarding; appName is its display name",
                },
                { appName: k.name },
              )),
          (x[0] = k.name),
          (x[1] = S),
          (x[2] = N),
          (x[3] = t))
        : (t = x[3])
      let T = t
      ;(x[4] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a.jsx)(eu.HUG, {})), (x[4] = n)) : (n = x[4]),
        x[5] !== k
          ? ((o = (0, a.jsx)(ed.R, { className: "size-6", alt: "", appInfo: k, preferRemote: !0, fallback: n })),
            (x[5] = k),
            (x[6] = o))
          : (o = x[6]))
      let O = o
      if (w) {
        let e,
          t,
          n,
          i,
          o,
          r,
          s = S ? "div" : "label",
          c = S ? void 0 : j,
          d = S || !I ? "cursor-default" : "cursor-interaction"
        return (
          x[7] !== d
            ? ((e = (0, ei.A)(
                "flex min-h-24 min-w-0 flex-col justify-between gap-5 rounded-lg border border-default bg-surface p-3",
                d,
              )),
              (x[7] = d),
              (x[8] = e))
            : (e = x[8]),
          x[9] !== O
            ? ((t = (0, a.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                "aria-hidden": "true",
                children: O,
              })),
              (x[9] = O),
              (x[10] = t))
            : (t = x[10]),
          x[11] !== k.id || x[12] !== I || x[13] !== S || x[14] !== T || x[15] !== A || x[16] !== v || x[17] !== j
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
                : (0, a.jsx)(ep.l, { id: j, name: k.id, ariaLabel: T, checked: v, disabled: !I, onChange: A })),
              (x[11] = k.id),
              (x[12] = I),
              (x[13] = S),
              (x[14] = T),
              (x[15] = A),
              (x[16] = v),
              (x[17] = j),
              (x[18] = n))
            : (n = x[18]),
          x[19] !== t || x[20] !== n
            ? ((i = (0, a.jsxs)("span", { className: "flex items-center justify-between gap-2", children: [t, n] })),
              (x[19] = t),
              (x[20] = n),
              (x[21] = i))
            : (i = x[21]),
          x[22] !== k.name
            ? ((o = (0, a.jsx)("span", {
                className: "text-base leading-[26px] break-words sm:line-clamp-1",
                children: k.name,
              })),
              (x[22] = k.name),
              (x[23] = o))
            : (o = x[23]),
          x[24] !== s || x[25] !== i || x[26] !== o || x[27] !== c || x[28] !== e
            ? ((r = (0, a.jsxs)(s, { htmlFor: c, className: e, children: [i, o] })),
              (x[24] = s),
              (x[25] = i),
              (x[26] = o),
              (x[27] = c),
              (x[28] = e),
              (x[29] = r))
            : (r = x[29]),
          r
        )
      }
      let M = S || !I,
        P = S || !I ? "cursor-default" : "cursor-interaction hover:bg-secondary-ghost-hover"
      ;(x[30] !== P
        ? ((c = (0, ei.A)(
            "flex min-h-[114px] min-w-0 flex-col gap-3 rounded-lg border border-default bg-surface p-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden",
            P,
          )),
          (x[30] = P),
          (x[31] = c))
        : (c = x[31]),
        x[32] !== I || x[33] !== S || x[34] !== A
          ? ((d = () => {
              !S && I && A()
            }),
            (x[32] = I),
            (x[33] = S),
            (x[34] = A),
            (x[35] = d))
          : (d = x[35]),
        x[36] !== O
          ? ((u = (0, a.jsx)("span", {
              className: "flex size-6 shrink-0 items-center justify-center",
              "aria-hidden": "true",
              children: O,
            })),
            (x[36] = O),
            (x[37] = u))
          : (u = x[37]))
      let R = S ? "bg-info-solid text-info-solid" : "bg-surface-tertiary text-secondary"
      return (
        x[38] !== R
          ? ((p = (0, ei.A)("flex size-7 shrink-0 items-center justify-center rounded-full", R)),
            (x[38] = R),
            (x[39] = p))
          : (p = x[39]),
        x[40] !== S
          ? ((h = S ? (0, a.jsx)(eu.yIE, {}) : (0, a.jsx)(eu.xFs, {})), (x[40] = S), (x[41] = h))
          : (h = x[41]),
        x[42] !== p || x[43] !== h
          ? ((m = (0, a.jsx)("span", { className: p, "aria-hidden": "true", children: h })),
            (x[42] = p),
            (x[43] = h),
            (x[44] = m))
          : (m = x[44]),
        x[45] !== m || x[46] !== u
          ? ((g = (0, a.jsxs)("span", {
              className: "flex w-full items-center justify-between gap-2",
              children: [u, m],
            })),
            (x[45] = m),
            (x[46] = u),
            (x[47] = g))
          : (g = x[47]),
        x[48] !== k.name
          ? ((f = (0, a.jsx)("span", {
              className: "text-base leading-[26px] break-words sm:line-clamp-1",
              children: k.name,
            })),
            (x[48] = k.name),
            (x[49] = f))
          : (f = x[49]),
        x[50] !== E
          ? ((_ =
              E >= 5 &&
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
                      values: { count: E },
                    }),
                  }),
                ],
              })),
            (x[50] = E),
            (x[51] = _))
          : (_ = x[51]),
        x[52] !== f || x[53] !== _
          ? ((b = (0, a.jsxs)("span", { className: "flex w-full min-w-0 flex-col gap-1", children: [f, _] })),
            (x[52] = f),
            (x[53] = _),
            (x[54] = b))
          : (b = x[54]),
        x[55] !== T || x[56] !== g || x[57] !== b || x[58] !== M || x[59] !== c || x[60] !== d
          ? ((y = (0, a.jsxs)("button", {
              type: "button",
              "aria-label": T,
              "aria-disabled": M,
              className: c,
              onClick: d,
              children: [g, b],
            })),
            (x[55] = T),
            (x[56] = g),
            (x[57] = b),
            (x[58] = M),
            (x[59] = c),
            (x[60] = d),
            (x[61] = y))
          : (y = x[61]),
        y
      )
    }
    var em = n.p + "assets/0f02295bd35e.svg",
      eg = n("ftLE"),
      ef = n("m63n"),
      e_ = n("xm9v"),
      eb = n.p + "assets/value-preview-background.3ecd93bf59.png"
    function ey(e) {
      let t,
        n,
        o,
        r,
        c,
        d,
        u,
        p,
        h,
        m,
        g,
        f = (0, i.c)(20),
        { provider: _ } = e,
        b = (0, s.A)(),
        y = "google" === _
      f[0] !== y
        ? ((t = y ? (0, a.jsx)(eg.A, { className: "h-3 w-3" }) : (0, a.jsx)(ef.A, { className: "h-3 w-3" })),
          (f[0] = y),
          (f[1] = t))
        : (t = f[1])
      let x = t
      f[2] !== y
        ? ((n = y
            ? (0, a.jsx)("img", { src: em, alt: "", className: "h-[8.75px] w-[11px]" })
            : (0, a.jsx)(e_.A, { className: "h-3 w-3" })),
          (f[2] = y),
          (f[3] = n))
        : (n = f[3])
      let C = n
      return (
        f[4] !== b
          ? ((o = b.formatMessage({
              id: "chatgpt.onboarding.new_workspace.connectors_preview.image.description",
              defaultMessage: "An example of ChatGPT answering a project launch question using connected work apps.",
              description:
                "Accessible description of the decorative chat illustration on the new-workspace connector onboarding screen. It conveys to screen-reader users that connecting work apps lets ChatGPT answer company-specific questions. The visible example concerns a fictional project, not the user's real workspace data.",
            })),
            (f[4] = b),
            (f[5] = o))
          : (o = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("img", {
              src: eb,
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
                      roadmap: (e) => (0, a.jsx)(ex, { icon: x, children: e }),
                      update: (e) => (0, a.jsx)(ex, { icon: C, children: e }),
                    },
                  })
                : (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_lead.default",
                    defaultMessage:
                      "The <roadmap>Project Horizon roadmap in Notion</roadmap> and the <update>latest launch update in Slack</update> show that the project is moving through staged rollout planning. The current plan calls for a small pilot in September, followed by a broader launch in October.",
                    description:
                      "First paragraph of the illustrative assistant response on the app-list and Microsoft-bundle screens in new-workspace connector onboarding. Project Horizon is fictional. The roadmap and update tags style example source citations from Notion and Slack; keep the complete source names inside their tags. 'Pilot' means a limited release to a small group, followed by a wider release. Multiline text in a narrow preview card.",
                    values: {
                      roadmap: (e) => (0, a.jsx)(ex, { icon: x, children: e }),
                      update: (e) => (0, a.jsx)(ex, { icon: C, children: e }),
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
                  "Before the pilot begins, the team still needs to validate permission mapping, complete the security review, and confirm rollout readiness. October remains the working target, but the date hasn’t been committed.",
                description:
                  "Second paragraph of the illustrative assistant response in new-workspace connector onboarding. It describes the remaining release checks for fictional Project Horizon. 'Permission mapping' means checking access-control settings, and 'working target' is a tentative launch date rather than a promise. Multiline text in a narrow preview card that fades toward its bottom.",
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
                  "I’d plan around an October launch, with some schedule risk if the September pilot surfaces issues. The next checkpoint is the pilot readiness review later this month.",
                description:
                  "Final paragraph of the illustrative assistant response in new-workspace connector onboarding. It offers a tentative schedule for fictional Project Horizon and mentions a review before the limited pilot release. This is sample company-knowledge content, not a real commitment or current date. Multiline text that fades out at the bottom of the preview card.",
              }),
            })),
            (f[13] = p))
          : (p = f[13]),
        f[14] !== d
          ? ((h = (0, a.jsx)("div", {
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
            (f[15] = h))
          : (h = f[15]),
        f[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("div", {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 rounded-[20px] border border-default",
            })),
            (f[16] = m))
          : (m = f[16]),
        f[17] !== o || f[18] !== h
          ? ((g = (0, a.jsxs)("div", {
              role: "img",
              "aria-label": o,
              className: "relative aspect-[25/37] w-full overflow-hidden rounded-[20px] bg-surface",
              children: [r, h, m],
            })),
            (f[17] = o),
            (f[18] = h),
            (f[19] = g))
          : (g = f[19]),
        g
      )
    }
    function ex(e) {
      let t,
        n,
        o,
        r,
        s = (0, i.c)(8),
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
          ? ((o = (0, a.jsx)(eu.$3V, { "aria-hidden": "true", className: "ms-1 inline-block align-[-1px]" })),
            (s[4] = o))
          : (o = s[4]),
        s[5] !== t || s[6] !== n
          ? ((r = (0, a.jsxs)("span", { children: [t, n, o] })), (s[5] = t), (s[6] = n), (s[7] = r))
          : (r = s[7]),
        r
      )
    }
    var eC = n("H2jL")
    function ew(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u,
        p,
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
        A,
        k,
        S,
        I,
        E,
        N,
        j,
        T,
        O,
        M,
        P,
        R,
        D = (0, i.c)(109)
      D[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (D[0] = t)) : (t = D[0])
      let [G, L] = (0, r.useState)(t)
      if (D[1] !== G || D[2] !== e) {
        let t, i, r, S, I, E, N, j, T, O
        ;(D[22] !== G
          ? ((t = (e) => {
              let { app: t, connected: n, canConnect: a } = e
              return !n && a && !G.includes(t.id)
            }),
            (D[22] = G),
            (D[23] = t))
          : (t = D[23]),
          (u = e.apps.filter(t).map(eS)),
          D[24] !== e.apps ? ((i = e.apps.length > 0 && e.apps.every(ek)), (D[24] = e.apps), (D[25] = i)) : (i = D[25]))
        let M = i
        ;(D[26] !== e.apps ? ((r = e.apps.some(eA)), (D[26] = e.apps), (D[27] = r)) : (r = D[27]),
          (c = r),
          (p = null != e.provider && !M))
        let P = "google" === e.provider ? "Google" : "Microsoft"
        D[28] !== e.apps ? ((S = Math.max(0, ...e.apps.map(ev))), (D[28] = e.apps), (D[29] = S)) : (S = D[29])
        let R = S
        ;(D[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors.button.continue",
              defaultMessage: "Continue to workspace",
              description: "Finishes the app connection step of workspace onboarding",
            })),
            (D[30] = I))
          : (I = D[30]),
          (s = I),
          D[31] !== P || D[32] !== p
            ? ((E = p
                ? (0, a.jsx)(l.A, {
                    id: "chatgpt.onboarding.recommended_connector.bundle.button.connect",
                    defaultMessage: "Connect to {providerBrandName}",
                    description:
                      "Opens consent for the selected workspace apps; providerBrandName is Google or Microsoft",
                    values: { providerBrandName: P },
                  })
                : s),
              (D[31] = P),
              (D[32] = p),
              (D[33] = E))
            : (E = D[33]),
          (d = E),
          (o = ec.P),
          (k = eC.A.surface),
          (m = "flex min-h-full w-full px-4 py-8 sm:px-6"),
          (f = e.isLoading || e.isPreparing),
          (_ = e.onShown),
          (n = el.P),
          (A = "m-auto"),
          (v = "grid w-full max-w-[848px] grid-cols-1 items-center gap-12 lg:grid-cols-2"),
          (h = "mx-auto flex w-full max-w-[400px] flex-col items-center gap-8"),
          D[34] !== e.provider
            ? ((N =
                null != e.provider &&
                (0, a.jsxs)("div", {
                  className: "inline-flex items-center gap-1 text-[13px] leading-[18px] font-medium text-info",
                  children: [
                    (0, a.jsx)(er.I, { asset: ea.i }),
                    (0, a.jsx)(l.A, {
                      id: "chatgpt.onboarding.recommended_connector.admin_approval.label",
                      defaultMessage: "Approved by your admin",
                      description: "Reassuring label above approved work apps recommended to a new workspace member",
                    }),
                  ],
                })),
              (D[34] = e.provider),
              (D[35] = N))
            : (N = D[35]),
          D[36] !== e.provider || D[37] !== P || D[38] !== R
            ? ((j = (0, a.jsx)(eo.L3, {
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
                                values: { count: R, providerBrandName: P },
                              })
                            : (0, a.jsx)(l.A, {
                                id: "chatgpt.onboarding.recommended_connector.bundle.title.without_teammates",
                                defaultMessage: "Connect your {providerBrandName} tools to ChatGPT",
                                description:
                                  "Heading inviting a new workspace member to connect apps from providerBrandName, either Google or Microsoft",
                                values: { providerBrandName: P },
                              }),
                      }),
              })),
              (D[36] = e.provider),
              (D[37] = P),
              (D[38] = R),
              (D[39] = j))
            : (j = D[39]),
          D[40] !== e.provider
            ? ((T =
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
              (D[41] = T))
            : (T = D[41]),
          D[42] !== j || D[43] !== T
            ? ((O = (0, a.jsxs)("div", { className: "flex w-full flex-col gap-3 text-center", children: [j, T] })),
              (D[42] = j),
              (D[43] = T),
              (D[44] = O))
            : (O = D[44]),
          D[45] !== N || D[46] !== O
            ? ((b = (0, a.jsxs)("div", {
                className: "flex w-full flex-col items-center gap-3 text-center",
                children: [N, O],
              })),
              (D[45] = N),
              (D[46] = O),
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
                    (0, a.jsx)(es.y, {}),
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
                  eh,
                  {
                    item: t,
                    isBundle: null != e.provider,
                    selected: u.includes(t.app.id),
                    onSelect: () => {
                      null == e.provider
                        ? e.onConnect([t.app.id])
                        : L((e) => (e.includes(t.app.id) ? e.filter((e) => e !== t.app.id) : [...e, t.app.id]))
                    },
                  },
                  t.app.id,
                ),
              ),
            })),
          (D[1] = G),
          (D[2] = e),
          (D[3] = n),
          (D[4] = o),
          (D[5] = s),
          (D[6] = c),
          (D[7] = d),
          (D[8] = u),
          (D[9] = p),
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
          (D[20] = A),
          (D[21] = k))
      } else
        ((n = D[3]),
          (o = D[4]),
          (s = D[5]),
          (c = D[6]),
          (d = D[7]),
          (u = D[8]),
          (p = D[9]),
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
          (A = D[20]),
          (k = D[21]))
      let B = e.requireConnector ? "items-stretch" : "items-center"
      ;(D[58] !== B ? ((S = (0, ei.A)("flex flex-col gap-3", B)), (D[58] = B), (D[59] = S)) : (S = D[59]),
        D[60] !== c || D[61] !== d || D[62] !== e || D[63] !== u || D[64] !== p
          ? ((I =
              (!e.requireConnector || p) &&
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
                  (p ? 0 === u.length : (e.requireConnector || e.apps.length > 0) && !c),
                onClick: () => (p ? e.onConnect(u) : e.onContinue()),
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
            (D[63] = u),
            (D[64] = p),
            (D[65] = I))
          : (I = D[65]),
        D[66] !== s ||
        D[67] !== c ||
        D[68] !== e.canContinue ||
        D[69] !== e.hasError ||
        D[70] !== e.isLoading ||
        D[71] !== e.onContinue ||
        D[72] !== e.requireConnector
          ? ((E =
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
            (D[73] = E))
          : (E = D[73]),
        D[74] !== e.isPreparing || D[75] !== e.isSkipDisabled || D[76] !== e.onSkip || D[77] !== e.requireConnector
          ? ((N =
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
            (D[78] = N))
          : (N = D[78]),
        D[79] !== S || D[80] !== I || D[81] !== E || D[82] !== N
          ? ((j = (0, a.jsxs)("div", { className: S, children: [I, E, N] })),
            (D[79] = S),
            (D[80] = I),
            (D[81] = E),
            (D[82] = N),
            (D[83] = j))
          : (j = D[83]),
        D[84] !== h || D[85] !== j || D[86] !== b || D[87] !== y || D[88] !== x || D[89] !== C || D[90] !== w
          ? ((T = (0, a.jsxs)("section", { className: h, children: [b, y, x, C, w, j] })),
            (D[84] = h),
            (D[85] = j),
            (D[86] = b),
            (D[87] = y),
            (D[88] = x),
            (D[89] = C),
            (D[90] = w),
            (D[91] = T))
          : (T = D[91]))
      let H = e.provider ?? void 0
      return (
        D[92] !== H
          ? ((O = (0, a.jsx)("div", {
              className: "hidden w-full lg:block",
              children: (0, a.jsx)(ey, { provider: H }),
            })),
            (D[92] = H),
            (D[93] = O))
          : (O = D[93]),
        D[94] !== T || D[95] !== O || D[96] !== v
          ? ((M = (0, a.jsxs)("div", { className: v, children: [T, O] })),
            (D[94] = T),
            (D[95] = O),
            (D[96] = v),
            (D[97] = M))
          : (M = D[97]),
        D[98] !== n || D[99] !== M || D[100] !== A
          ? ((P = (0, a.jsx)(n, { className: A, children: M })), (D[98] = n), (D[99] = M), (D[100] = A), (D[101] = P))
          : (P = D[101]),
        D[102] !== o || D[103] !== m || D[104] !== f || D[105] !== _ || D[106] !== P || D[107] !== k
          ? ((R = (0, a.jsx)(o, { className: k, pageClassName: m, isBusy: f, onShown: _, children: P })),
            (D[102] = o),
            (D[103] = m),
            (D[104] = f),
            (D[105] = _),
            (D[106] = P),
            (D[107] = k),
            (D[108] = R))
          : (R = D[108]),
        R
      )
    }
    function ev(e) {
      let { teammateCount: t } = e
      return t
    }
    function eA(e) {
      let { connected: t } = e
      return t
    }
    function ek(e) {
      let { connected: t } = e
      return t
    }
    function eS(e) {
      let { app: t } = e
      return t.id
    }
    let eI = "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED"
    function eE(e) {
      let { id: t } = e
      return t
    }
    function eN() {}
    function ej(e) {
      let { id: t } = e
      return t
    }
    function eT(e) {
      let t,
        n,
        s,
        l,
        d,
        u,
        p,
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
        A,
        I,
        N,
        j,
        T,
        O,
        H,
        W,
        U,
        V = (0, i.c)(113),
        $ = (0, o.gh)(M.E),
        Y = (0, c.zy)(),
        Z = (0, z.AS)()
      V[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (V[0] = t)) : (t = V[0])
      let { data: J } = (0, F.YL)(void 0, t)
      V[1] !== e.apps || V[2] !== e.isEnterprise || V[3] !== e.provider || V[4] !== Z
        ? ((n = () => !1), (V[1] = e.apps), (V[2] = e.isEnterprise), (V[3] = e.provider), (V[4] = Z), (V[5] = n))
        : (n = V[5])
      let [Q] = (0, r.useState)(n),
        X = !0 === e.isEnterprise && Q
      V[6] !== X || V[7] !== e.apps
        ? ((s = X ? e.apps.filter(eF) : e.apps), (V[6] = X), (V[7] = e.apps), (V[8] = s))
        : (s = V[8])
      let ee = s,
        et = X && ee.length > 0,
        en = (0, o._U)(E.Cr, e.identity)
      if (V[9] !== ee || V[10] !== et) {
        let e
        ;(V[12] !== et
          ? ((e = (e) => {
              let { connected: t, ready: n } = e
              return et ? n : t
            }),
            (V[12] = et),
            (V[13] = e))
          : (e = V[13]),
          (l = ee.some(e)),
          (V[9] = ee),
          (V[10] = et),
          (V[11] = l))
      } else l = V[11]
      let ea = l,
        ei = !et || ea || en,
        { markAppConnectOAuthPending: eo, openPendingAppConnectPopup: er } = (0, G.ZN)(),
        es = (0, r.useRef)(null)
      ;(V[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => es.current?.()), (u = []), (V[14] = d), (V[15] = u))
        : ((d = V[14]), (u = V[15])),
        (0, r.useEffect)(d, u))
      let el = (0, r.useRef)(!1)
      V[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = new Set()), (V[16] = p)) : (p = V[16])
      let ec = (0, r.useRef)(p),
        ed = "google" === e.provider ? L._k : B.zd
      if (V[17] !== J?.plan_type || V[18] !== ed || V[19] !== ee || V[20] !== e.provider || V[21] !== Z) {
        h =
          null == e.provider
            ? void 0
            : (ee.find((e) => {
                let { app: t, connected: n, canConnect: a, supportsDirectOAuth: i } = e
                return (
                  ed.some((e) => {
                    let { connectorId: n } = e
                    return (
                      n === t.id &&
                      ("connector_5f3c8c41a1e54ad7a76272c89e2554fa" === n ||
                        "connector_1e4f6a44acf14e3ca1d96672f8c945bc" === n)
                    )
                  }) &&
                  (n || (a && i))
                )
              }) ??
              ee.find((e) => {
                let { app: t, connected: n, canConnect: a, supportsDirectOAuth: i } = e
                return (
                  ed.some((e) => {
                    let { connectorId: n } = e
                    return n === t.id
                  }) &&
                  (n || (a && i))
                )
              }))
        let t = []
        if (null != h) {
          let n = h.app.id
          if ("google" === e.provider) {
            let e = (0, L.W9)({ planType: J?.plan_type, connectorId: n, statsigClient: Z })
            t = e.some((e) => {
              let { connectorId: t } = e
              return t === n
            })
              ? e.map(eW)
              : [n]
          } else
            t = (0, B.Vk)({ planType: J?.plan_type, connectorId: n, statsigClient: Z }) ? [n, ...(0, B.HD)(n)] : [n]
        }
        ;((m = (null == e.provider ? [] : q[e.provider]).flatMap((e) => {
          let n = ee.find((t) => {
            let { app: n } = t
            return n.id === e
          })
          return null != n && t.includes(e) && (n.connected || (n.canConnect && n.supportsDirectOAuth)) ? [n] : []
        })),
          (V[17] = J?.plan_type),
          (V[18] = ed),
          (V[19] = ee),
          (V[20] = e.provider),
          (V[21] = Z),
          (V[22] = h),
          (V[23] = m))
      } else ((h = V[22]), (m = V[23]))
      let eu = m,
        ep = null != h && eu.length > 0 ? e.provider : null
      V[24] !== ee || V[25] !== ep || V[26] !== eu
        ? ((g = null == ep ? [...ee].sort(eH).slice(0, 6) : eu), (V[24] = ee), (V[25] = ep), (V[26] = eu), (V[27] = g))
        : (g = V[27])
      let eh = g,
        [em, eg] = (0, r.useState)(null),
        ef = null == ep || et
      V[28] !== ef || V[29] !== em
        ? ((f =
            null == em
              ? void 0
              : {
                  connectorId: em.primary.app.id,
                  productSku: "CONNECTOR_SETTING",
                  oauthReferrer: "workspace_onboarding",
                  redirectAfter: ef ? "/onboarding" : "/",
                  oauthPresentation: ef ? "popup" : void 0,
                }),
          (V[28] = ef),
          (V[29] = em),
          (V[30] = f))
        : (f = V[30])
      let e_ = f
      V[31] !== h || V[32] !== e.isEnterprise || V[33] !== ep
        ? ((_ =
            null == h || null == ep || null == e.isEnterprise
              ? null
              : {
                  connectorProvider: ep,
                  connectorId: h.app.id,
                  connectorName: h.app.name,
                  isEnterprise: e.isEnterprise,
                  onboardingExperience: eI,
                }),
          (V[31] = h),
          (V[32] = e.isEnterprise),
          (V[33] = ep),
          (V[34] = _))
        : (_ = V[34])
      let eb = _
      ;(V[35] !== eh || V[36] !== e.isEnterprise || V[37] !== ep || V[38] !== $
        ? ((b = () => {
            if (null != ep && null != e.isEnterprise)
              for (let { app: t } of eh)
                ec.current.has(t.id) ||
                  (ec.current.add(t.id),
                  (0, S.yy)($, R.tT, {
                    connectorProvider: ep,
                    connectorId: t.id,
                    connectorName: t.name,
                    isEnterprise: e.isEnterprise,
                    onboardingExperience: eI,
                  }))
          }),
          (y = [eh, ep, e.isEnterprise, $]),
          (V[35] = eh),
          (V[36] = e.isEnterprise),
          (V[37] = ep),
          (V[38] = $),
          (V[39] = b),
          (V[40] = y))
        : ((b = V[39]), (y = V[40])),
        (0, r.useEffect)(b, y),
        V[41] !== $
          ? ((x = (e, t) =>
              (0, S.yy)($, R.ZX, {
                onboardingExperience: eI,
                action: e,
                connectorId: t,
                stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
              })),
            (V[41] = $),
            (V[42] = x))
          : (x = V[42]))
      let ey = x,
        ex = ep ?? "fallback",
        eC = null != ep && em?.consentShown === !1
      ;(V[43] !== eh || V[44] !== ey || V[45] !== eb || V[46] !== e || V[47] !== $
        ? ((C = () => {
            ;(e.onShown(),
              !el.current &&
                ((el.current = !0),
                null != e.isEnterprise &&
                  (0, S.yy)($, R.CI, {
                    connectorProvider: e.provider ?? "none",
                    hasRecommendation: null != e.provider,
                    isEnterprise: e.isEnterprise,
                    requestSucceeded: e.recommendationSucceeded,
                    onboardingExperience: eI,
                  }),
                null == eb &&
                  eh.length > 0 &&
                  ey("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN")))
          }),
          (V[43] = eh),
          (V[44] = ey),
          (V[45] = eb),
          (V[46] = e),
          (V[47] = $),
          (V[48] = C))
        : (C = V[48]),
        V[49] !== eh ||
        V[50] !== Y ||
        V[51] !== ey ||
        V[52] !== eb ||
        V[53] !== h ||
        V[54] !== e ||
        V[55] !== et ||
        V[56] !== $ ||
        V[57] !== em
          ? ((w = (t) => {
              if (null != em || !(0, E.oA)($, e.identity)) return
              let n = eh.filter((e) => {
                  let { app: n, connected: a, canConnect: i } = e
                  return t.includes(n.id) && !a && i
                }),
                a =
                  n.find((e) => {
                    let { app: t } = e
                    return t.id === h?.app.id
                  }) ?? n[0]
              if (null != a) {
                if (
                  (et &&
                    (e.beforeOAuth(),
                    (0, E.Jl)($, e.identity),
                    (0, k.oo)($, Y, { replace: !0, state: { ...Y.state, workspaceMemberOnboarding: e.identity } })),
                  null != eb)
                ) {
                  let e = eh.filter(eB).map(eL),
                    t = eh.filter(eG).map(eD)
                  ;(0, S.yy)($, R.nT, {
                    ...eb,
                    selectedConnectorIds: n.map(eR),
                    selectableConnectorIds: e,
                    alreadyConnectedConnectorIds: t,
                    selectedConnectorCount: (0, P.At)(n.length),
                    selectableConnectorCount: (0, P.At)(e.length),
                    alreadyConnectedConnectorCount: (0, P.At)(t.length),
                    allSelectableSelected: n.length === e.length,
                  })
                } else ey("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED", a.app.id)
                eg({ primary: a, companionIds: n.filter((e) => e !== a).map(eP), consentShown: !1 })
              }
            }),
            (V[49] = eh),
            (V[50] = Y),
            (V[51] = ey),
            (V[52] = eb),
            (V[53] = h),
            (V[54] = e),
            (V[55] = et),
            (V[56] = $),
            (V[57] = em),
            (V[58] = w))
          : (w = V[58]),
        V[59] !== ei || V[60] !== ey || V[61] !== e || V[62] !== ep
          ? ((v = () => {
              ei &&
                (null == ep && ey("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
                e.onContinue())
            }),
            (V[59] = ei),
            (V[60] = ey),
            (V[61] = e),
            (V[62] = ep),
            (V[63] = v))
          : (v = V[63]),
        V[64] !== ey || V[65] !== eb || V[66] !== e || V[67] !== et || V[68] !== $
          ? ((A = () => {
              et ||
                (null != eb
                  ? (0, S.yy)($, R.qo, eb)
                  : ey("CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
                e.onContinue())
            }),
            (V[64] = ey),
            (V[65] = eb),
            (V[66] = e),
            (V[67] = et),
            (V[68] = $),
            (V[69] = A))
          : (A = V[69]),
        V[70] !== eh ||
        V[71] !== ei ||
        V[72] !== ep ||
        V[73] !== et ||
        V[74] !== ex ||
        V[75] !== eC ||
        V[76] !== C ||
        V[77] !== w ||
        V[78] !== v ||
        V[79] !== A
          ? ((I = (0, a.jsx)(
              ew,
              {
                apps: eh,
                provider: ep,
                requireConnector: et,
                canContinue: ei,
                isLoading: !1,
                isPreparing: eC,
                hasError: !1,
                onShown: C,
                onConnect: w,
                onContinue: v,
                onSkip: A,
                onRetry: eM,
              },
              ex,
            )),
            (V[70] = eh),
            (V[71] = ei),
            (V[72] = ep),
            (V[73] = et),
            (V[74] = ex),
            (V[75] = eC),
            (V[76] = C),
            (V[77] = w),
            (V[78] = v),
            (V[79] = A),
            (V[80] = I))
          : (I = V[80]))
      let ev = em?.primary.app ?? null,
        eA = null == ep,
        ek = null == ep ? void 0 : em?.companionIds
      return (
        V[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = () => {
              eg(eO)
            }),
            (V[81] = N))
          : (N = V[81]),
        V[82] !== e_?.redirectAfter || V[83] !== e.identity || V[84] !== ef
          ? ((j = () => ({
              returnTo: e_?.redirectAfter ?? "/",
              resumeTarget: ef
                ? {
                    kind: "return-to-location-state",
                    successState: { workspaceMemberOnboarding: e.identity },
                    failureState: { workspaceMemberOnboarding: e.identity },
                  }
                : void 0,
            })),
            (V[82] = e_?.redirectAfter),
            (V[83] = e.identity),
            (V[84] = ef),
            (V[85] = j))
          : (j = V[85]),
        V[86] !== e_ || V[87] !== eo || V[88] !== er || V[89] !== e || V[90] !== et || V[91] !== ef || V[92] !== $
          ? ((T = (t) => {
              if ((0, E.oA)($, e.identity)) {
                if (null == eo({ ...t, hostId: D.iwv, appConnectOptions: e_, returnTo: e_?.redirectAfter ?? "/" })) {
                  ;(t.preventNavigation?.(), t.preopenedPopup?.close())
                  return
                }
                ef &&
                  null != t.preventNavigation &&
                  (et || t.preventNavigation(),
                  es.current?.(),
                  (es.current = er(
                    t.redirectUrl,
                    (t) => {
                      "success" === t.kind && e.onConnected()
                    },
                    t.preopenedPopup,
                  )),
                  et && null != es.current && t.preventNavigation())
              }
            }),
            (V[86] = e_),
            (V[87] = eo),
            (V[88] = er),
            (V[89] = e),
            (V[90] = et),
            (V[91] = ef),
            (V[92] = $),
            (V[93] = T))
          : (T = V[93]),
        V[94] !== e.beforeOAuth || V[95] !== e.identity || V[96] !== et || V[97] !== ef || V[98] !== $
          ? ((O = ef && !et ? async () => (0, E.oA)($, e.identity) : e.beforeOAuth),
            (V[94] = e.beforeOAuth),
            (V[95] = e.identity),
            (V[96] = et),
            (V[97] = ef),
            (V[98] = $),
            (V[99] = O))
          : (O = V[99]),
        V[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (e) => {
              e || eg(null)
            }),
            (V[100] = H))
          : (H = V[100]),
        V[101] !== e_ ||
        V[102] !== e.onConnected ||
        V[103] !== ev ||
        V[104] !== eA ||
        V[105] !== ek ||
        V[106] !== j ||
        V[107] !== T ||
        V[108] !== O
          ? ((W = (0, a.jsx)(K.Z, {
              app: ev,
              showLoadingDialog: eA,
              hostId: D.iwv,
              appConnectOptions: e_,
              initialSelectedCompanionConnectorIds: ek,
              postConnectSource: null,
              onConnected: e.onConnected,
              onConsentShown: N,
              getOAuthResumeContext: j,
              onOAuthStarted: T,
              beforeConnect: O,
              onOpenChange: H,
            })),
            (V[101] = e_),
            (V[102] = e.onConnected),
            (V[103] = ev),
            (V[104] = eA),
            (V[105] = ek),
            (V[106] = j),
            (V[107] = T),
            (V[108] = O),
            (V[109] = W))
          : (W = V[109]),
        V[110] !== I || V[111] !== W
          ? ((U = (0, a.jsxs)(a.Fragment, { children: [I, W] })), (V[110] = I), (V[111] = W), (V[112] = U))
          : (U = V[112]),
        U
      )
    }
    function eO(e) {
      return null == e ? null : { ...e, consentShown: !0 }
    }
    function eM() {}
    function eP(e) {
      let { app: t } = e
      return t.id
    }
    function eR(e) {
      let { app: t } = e
      return t.id
    }
    function eD(e) {
      let { app: t } = e
      return t.id
    }
    function eG(e) {
      let { connected: t } = e
      return t
    }
    function eL(e) {
      let { app: t } = e
      return t.id
    }
    function eB(e) {
      let { connected: t, canConnect: n } = e
      return !t && n
    }
    function eH(e, t) {
      return t.teammateCount - e.teammateCount || Number(t.connected) - Number(e.connected)
    }
    function eW(e) {
      let { connectorId: t } = e
      return t
    }
    function eF(e) {
      let { ready: t, canConnect: n } = e
      return t || n
    }
    var eU = n("sv3Z"),
      eK = n("Ot7V"),
      ez = n("SLig"),
      eV = n("Jgbh"),
      eq = n("jZDY"),
      e$ = n("TjgH"),
      eY = n("cLvX"),
      eZ = n.p + "assets/desktop-preview.20845310b0.png"
    function eJ(e) {
      let t,
        n,
        o,
        r,
        c,
        d,
        u,
        p,
        h,
        m,
        f,
        _,
        b,
        y = (0, i.c)(24),
        x = (0, s.A)(),
        C = e.onShown
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("img", { className: "mb-2 size-24", src: eY, alt: "", "aria-hidden": "true" })),
            (y[0] = t))
          : (t = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(e$.E, {
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
          ? ((o = (0, a.jsx)(eo.L3, {
              className: "text-3xl leading-9 font-semibold",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.codex_screen.chatgpt_desktop_app.title",
                defaultMessage: "Download the ChatGPT Desktop app",
                description: "Heading inviting a new Business workspace member to download ChatGPT for desktop",
              }),
            })),
            (y[2] = o))
          : (o = y[2]),
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
          ? ((u = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.maybe_later",
              defaultMessage: "Maybe later",
              description: "Skips downloading the desktop app and continues workspace onboarding",
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
          ? ((h = (0, a.jsxs)("div", {
              className: "flex w-full max-w-xs flex-col items-center gap-5 justify-self-center text-center",
              children: [
                t,
                n,
                o,
                r,
                (0, a.jsxs)("div", { className: "mt-2 flex flex-col items-center gap-4", children: [d, p] }),
              ],
            })),
            (y[11] = d),
            (y[12] = p),
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
              src: eZ,
              alt: m,
            })),
            (y[16] = m),
            (y[17] = f))
          : (f = y[17]),
        y[18] !== f || y[19] !== h
          ? ((_ = (0, a.jsx)(el.P, {
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
          ? ((b = (0, a.jsx)(ec.P, { onShown: C, children: _ })), (y[21] = e.onShown), (y[22] = _), (y[23] = b))
          : (b = y[23]),
        b
      )
    }
    var eQ = n("T4l2"),
      eX = n.n(eQ),
      e1 = n("Gx3J")
    function e0(e) {
      let t,
        n,
        o = (0, i.c)(14),
        { options: r, value: s, fullWidthOption: l, disabled: c, onSelect: d } = e,
        u = void 0 !== c && c
      if (o[0] !== u || o[1] !== l || o[2] !== d || o[3] !== r || o[4] !== s) {
        let e
        ;(o[6] !== u || o[7] !== l || o[8] !== d || o[9] !== r.length || o[10] !== s
          ? ((e = (e) => {
              let t = e.id === l && r.length % 2 == 1
              return (0, a.jsxs)(
                g.$,
                {
                  className: (0, ei.A)("w-full", t && "sm:col-span-2 sm:justify-center"),
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
                      className: (0, ei.A)("flex-1 text-start", t && "sm:flex-none sm:text-center"),
                      children: e.label,
                    }),
                    s === e.id ? (0, a.jsx)(eu.hEG, {}) : null,
                  ],
                },
                e.id,
              )
            }),
            (o[6] = u),
            (o[7] = l),
            (o[8] = d),
            (o[9] = r.length),
            (o[10] = s),
            (o[11] = e))
          : (e = o[11]),
          (t = r.map(e)),
          (o[0] = u),
          (o[1] = l),
          (o[2] = d),
          (o[3] = r),
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
    var e2 = n("GFe9"),
      e3 = n("vkjh")
    n("mmXj")
    var e4 = (e) =>
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
      something_else: (0, a.jsx)(er.I, { asset: e1.O }),
    }
    function e6(e) {
      let t,
        n,
        o,
        r,
        s,
        c,
        d = (0, i.c)(13)
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
          ? ((o = (0, a.jsxs)("div", {
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
            (d[3] = o))
          : (o = d[3]),
        d[4] !== e.roles ? ((r = e.roles.map(e8)), (d[4] = e.roles), (d[5] = r)) : (r = d[5]),
        d[6] !== e.onSelect || d[7] !== e.selectedRole || d[8] !== r
          ? ((s = (0, a.jsx)("div", {
              className: "flex h-full max-h-full flex-col select-none",
              children: (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden",
                children: (0, a.jsx)(el.P, {
                  className:
                    "max-h-full min-h-0 justify-between self-center overflow-hidden max-sm:h-full max-sm:px-6 max-sm:pt-10 max-sm:pb-5 sm:max-w-175",
                  children: (0, a.jsxs)("div", {
                    className: "flex min-h-0 w-full flex-1 flex-col",
                    children: [
                      o,
                      (0, a.jsx)(e0, {
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
          ? ((c = (0, a.jsx)(e3.d, {
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
      return { id: e, label: (0, a.jsx)(l.A, { ...e2.V[e] }), icon: e5[e] }
    }
    function e7(e) {
      return e.preventDefault()
    }
    function e9() {}
    function te() {
      return [
        ...eX()([
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
    let tt = (0, I.n)(M.E, {
      initialAnswers: { role: null },
      getContext: (e, t) => {
        let { identity: n, planType: a, showDesktopDownload: i } = e.getOwnValue(M.E)
        return { identity: n, planType: a, showDesktopDownload: i, ...t }
      },
      initialStep: (e) => e.getOwnValue(M.E).initialStep,
      steps: {
        role: {
          component: function (e) {
            let t,
              n,
              s,
              l = (0, i.c)(10),
              { context: c, onContinue: d } = e,
              u = (0, o.gh)(M.E),
              p = (0, r.useRef)(!1),
              [h] = (0, r.useState)(te),
              m = c.role ?? void 0
            return (
              l[0] !== c.identity || l[1] !== u
                ? ((t = () => {
                    p.current ||
                      ((p.current = !0),
                      (async function (e, t) {
                        ;(0, E.oA)(e, t) &&
                          (await Promise.all([
                            e.query.fetch(W.Q, t),
                            e.query.fetch(en, t),
                            Promise.all($.map((n) => e.query.fetch(X, { accountId: t.accountId, appId: n }))).then(
                              async (n) => {
                                let a = n.flat().map(({ id: e }) => e)
                                0 !== a.length &&
                                  (0, E.oA)(e, t) &&
                                  (await e.query.fetch(et, { identity: t, appIds: a }))
                              },
                            ),
                          ]))
                      })(u, c.identity).catch(e9),
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
              : ((0, S.yy)(n, A.R5, { role: e.role }),
                (0, N.R)(n, e.identity, e.role).catch(() => {}),
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
              u = (0, i.c)(21),
              p = (0, o.gh)(y.u),
              h = (0, r.useRef)(!1),
              m = (0, eq.I)()
            u[0] !== m ? ((t = (0, ez.W)(m)), (u[0] = m), (u[1] = t)) : (t = u[1])
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
                    h.current ||
                      ((h.current = !0),
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
                    ;((0, eV.M)(p),
                      (0, eK.PQ)({
                        event: t,
                        href: f,
                        initiator: "external_link",
                        disposition: "other" === g ? "new-tab" : "current-tab",
                      }),
                      (0, S.yy)(p, A.tx, x),
                      (0, S.yy)(p, eU.I_, { surface: "workspace_onboarding", action: "download" }),
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
                ? ((d = (0, a.jsx)(eJ, { downloadUrl: f, onShown: s, onDownload: l, onContinue: c })),
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
              h = (0, i.c)(53),
              { context: m, onContinue: g } = e,
              f = (0, o.gh)(M.E),
              _ = (0, z.AS)(),
              { identity: b, planType: y } = m,
              x = null
            ;(0, U.isEnterpriseClientPlan)(y) && "hc" !== y && "hc_consumption" !== y && "finserv" !== y
              ? (x = !0)
              : (0, w.Hw)(y) && (x = !1)
            let C = (0, r.useRef)(!1),
              { data: v, isError: k, retry: I } = (0, o._U)(ee, b)
            ;(h[0] !== v ? ((t = v?.map(ej) ?? []), (h[0] = v), (h[1] = t)) : (t = h[1]),
              h[2] !== b || h[3] !== t
                ? ((n = { identity: b, appIds: t }), (h[2] = b), (h[3] = t), (h[4] = n))
                : (n = h[4]))
            let { data: j, isError: T, refetch: O } = (0, o._U)(et, n),
              { data: P, isPending: D, isError: G } = (0, o._U)(W.Q, b),
              { data: L } = (0, o._U)(en, b),
              B = k || T,
              F = !B && (null == v || (v.length > 0 && null == j) || D)
            if (h[5] !== j || h[6] !== v || h[7] !== L) {
              var K
              ;((s =
                null != v && (0 === v.length || null != j)
                  ? ((K = j ?? []),
                    v.flatMap((e) => {
                      let t = K.find(({ id: t }) => t === e.id)
                      if ("ENABLED" !== e.status || t?.available !== !0 || "DISABLED_BY_ADMIN" === t.status) return []
                      let n = L?.connector_stats?.find(({ connector_id: t }) => t === e.id)?.unique_user_cnt
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
                (h[5] = j),
                (h[6] = v),
                (h[7] = L),
                (h[8] = s))
            } else s = h[8]
            let V = s,
              q = null == x ? null : (P ?? null)
            h[9] !== f
              ? ((l = () => {
                  C.current ||
                    ((C.current = !0),
                    (0, S.yy)(f, A.JY, { stepType: "1" }),
                    (0, S.yy)(f, R.ZX, {
                      onboardingExperience: eI,
                      action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
                      stepType: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
                    }))
                }),
                (h[9] = f),
                (h[10] = l))
              : (l = h[10])
            let $ = l
            if (F || B) {
              let e, t, n, i, o, r
              h[11] !== x || h[12] !== F || h[13] !== _
                ? ((e = F && !1), (h[11] = x), (h[12] = F), (h[13] = _), (h[14] = e))
                : (e = h[14])
              let s = e
              return (
                h[15] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (h[15] = t)) : (t = h[15]),
                h[16] !== g ? ((n = () => void g()), (h[16] = g), (h[17] = n)) : (n = h[17]),
                h[18] !== s || h[19] !== g
                  ? ((i = () => {
                      s || g()
                    }),
                    (h[18] = s),
                    (h[19] = g),
                    (h[20] = i))
                  : (i = h[20]),
                h[21] !== T || h[22] !== I || h[23] !== O
                  ? ((o = () => {
                      ;(I(), T && O())
                    }),
                    (h[21] = T),
                    (h[22] = I),
                    (h[23] = O),
                    (h[24] = o))
                  : (o = h[24]),
                h[25] !== B || h[26] !== F || h[27] !== s || h[28] !== $ || h[29] !== n || h[30] !== i || h[31] !== o
                  ? ((r = (0, a.jsx)(ew, {
                      apps: t,
                      provider: null,
                      isLoading: F,
                      isSkipDisabled: s,
                      hasError: B,
                      onShown: $,
                      onConnect: eN,
                      onContinue: n,
                      onSkip: i,
                      onRetry: o,
                    })),
                    (h[25] = B),
                    (h[26] = F),
                    (h[27] = s),
                    (h[28] = $),
                    (h[29] = n),
                    (h[30] = i),
                    (h[31] = o),
                    (h[32] = r))
                  : (r = h[32]),
                r
              )
            }
            let Y = q ?? "fallback"
            ;(h[33] !== g ? ((c = () => void g()), (h[33] = g), (h[34] = c)) : (c = h[34]),
              h[35] !== m || h[36] !== f
                ? ((d = () => (0, N.x)(f, m)), (h[35] = m), (h[36] = f), (h[37] = d))
                : (d = h[37]))
            let Z = !G
            return (
              h[38] !== b || h[39] !== v || h[40] !== f
                ? ((u = async () => {
                    ;(0, E.oA)(f, b) &&
                      (await f.queryClient.invalidateQueries({
                        queryKey: (0, H.dZ)({ ...b, productSku: "CONNECTOR_SETTING" }).queryKey,
                      }),
                      await f.query.invalidate(et, { identity: b, appIds: v?.map(eE) ?? [] }))
                  }),
                  (h[38] = b),
                  (h[39] = v),
                  (h[40] = f),
                  (h[41] = u))
                : (u = h[41]),
              h[42] !== V ||
              h[43] !== b ||
              h[44] !== x ||
              h[45] !== $ ||
              h[46] !== q ||
              h[47] !== Y ||
              h[48] !== c ||
              h[49] !== d ||
              h[50] !== Z ||
              h[51] !== u
                ? ((p = (0, a.jsx)(
                    eT,
                    {
                      identity: b,
                      isEnterprise: x,
                      onContinue: c,
                      beforeOAuth: d,
                      apps: V,
                      provider: q,
                      recommendationSucceeded: Z,
                      onShown: $,
                      onConnected: u,
                    },
                    Y,
                  )),
                  (h[42] = V),
                  (h[43] = b),
                  (h[44] = x),
                  (h[45] = $),
                  (h[46] = q),
                  (h[47] = Y),
                  (h[48] = c),
                  (h[49] = d),
                  (h[50] = Z),
                  (h[51] = u),
                  (h[52] = p))
                : (p = h[52]),
              p
            )
          },
          next: "complete",
        },
      },
      onComplete: (e, t) => {
        ;((0, N.x)(e, t), (0, E.Jl)(e, t.identity), (0, k.oo)(e, e.get(E.Q$), { replace: !0 }))
      },
    })
    function tn(e) {
      let t,
        n,
        r,
        s = (0, i.c)(8),
        { identity: l, showDesktopDownload: d, planType: u } = e,
        p = O(l, (0, c.zy)().state) ? "apps" : "role"
      return (
        s[0] !== l || s[1] !== u || s[2] !== d || s[3] !== p
          ? ((t = { identity: l, showDesktopDownload: d, planType: u, initialStep: p }),
            (s[0] = l),
            (s[1] = u),
            (s[2] = d),
            (s[3] = p),
            (s[4] = t))
          : (t = s[4]),
        s[5] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, a.jsx)(ta, {})), (s[5] = n)) : (n = s[5]),
        s[6] !== t
          ? ((r = (0, a.jsx)(o.Ui, { scope: M.E, value: t, children: n })), (s[6] = t), (s[7] = r))
          : (r = s[7]),
        r
      )
    }
    function ta() {
      let e,
        t,
        n,
        s,
        l = (0, i.c)(15),
        c = (0, o.gh)(M.E),
        d = (0, o.uO)(tt, void 0),
        u = (0, o.Ul)(d.state$),
        p = (0, o.Ul)(d.context$),
        h = (0, r.useRef)(null)
      if (
        (l[0] !== c
          ? ((e = () => {
              let e = new AbortController()
              h.current = e
              let t = c.watch((t) => {
                ;(0, E.oA)(t, t.getOwnValue(M.E).identity) || e.abort()
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
      let m = d.definition.steps[u.step].component,
        g = "pending" === u.status
      return (
        l[4] !== p || l[5] !== d || l[6] !== c || l[7] !== u
          ? ((n = async (e) => {
              let t = h.current?.signal
              null != t && (0, E.oA)(c, p.identity) && (await d.advance(u, e, t))
            }),
            (l[4] = p),
            (l[5] = d),
            (l[6] = c),
            (l[7] = u),
            (l[8] = n))
          : (n = l[8]),
        l[9] !== m || l[10] !== p || l[11] !== u.step || l[12] !== g || l[13] !== n
          ? ((s = (0, a.jsx)(m, { context: p, isAdvancePending: g, onContinue: n }, u.step)),
            (l[9] = m),
            (l[10] = p),
            (l[11] = u.step),
            (l[12] = g),
            (l[13] = n),
            (l[14] = s))
          : (s = l[14]),
        s
      )
    }
    var ti = n("Qgfj"),
      to = n("Zzm6"),
      tr = n("mBJV"),
      ts = n("iRMi"),
      tl = n("D015")
    function tc(e, t, n) {
      ;(0, S.yy)(e, ts.CodexHealthWorkspaceOnboardingStepShown, { step: t, exampleStepIndex: (0, tl.At)(n) })
    }
    let td = (0, o.vU)(y.u, ({ accountId: e, userId: t, role: n, department: a }) => ({
      queryKey: ["health-onboarding-examples", e, t, n, a],
      queryFn: async ({ signal: t }) => {
        let { examples: i } = await J.Request.safePost("/onboarding/quorum/examples", {
          requestBody: { source: "onboarding", role: n, department: a },
          additionalHeaders: { "ChatGPT-Account-ID": e },
          signal: t,
        })
        return i.filter((e) => null != tu(e))
      },
      retry: !1,
      staleTime: Q.D.ONE_MINUTE,
    }))
    function tu(e) {
      let t = e.response.parts
      if (!t.every((e) => "string" == typeof e)) return null
      let n = t.join("")
      return n.trim().length > 0 ? n : null
    }
    var tp = n("suct"),
      th = n("LIss"),
      tm = n("ZtSy"),
      tg = n("T1PX"),
      tf = n("ENs9")
    function t_(e) {
      let t,
        n,
        o,
        c,
        d,
        u,
        p,
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
        A,
        k,
        S,
        I = (0, i.c)(60),
        { values: E, options: N, disabled: j, onSelect: T, onContinue: O, onSkip: M } = e,
        P = void 0 !== j && j,
        R = (0, s.A)(),
        [D, G] = (0, r.useState)("")
      I[0] !== E ? ((t = new Set(E)), (I[0] = E), (I[1] = t)) : (t = I[1])
      let L = t
      if (
        (I[2] !== P || I[3] !== O || I[4] !== E.length
          ? ((n = (e) => {
              ;(e.preventDefault(), E.length > 0 && !P && O())
            }),
            (I[2] = P),
            (I[3] = O),
            (I[4] = E.length),
            (I[5] = n))
          : (n = I[5]),
        I[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("h1", {
              className: "text-3xl leading-9 font-medium",
              children: (0, a.jsx)(l.A, {
                id: "work.onboarding.departments.question",
                defaultMessage: "Which departments apply to your work?",
                description: "Department multi-select question on workspace onboarding",
              }),
            })),
            (I[6] = o))
          : (o = I[6]),
        I[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsxs)("div", {
              className: "mb-7 flex flex-col gap-4 text-center",
              children: [
                o,
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
            (I[7] = c))
          : (c = I[7]),
        I[8] !== T ? ((d = () => T([])), (I[8] = T), (I[9] = d)) : (d = I[9]),
        I[10] !== R
          ? ((u = R.formatMessage({
              id: "work.onboarding.departments.searchLabel",
              defaultMessage: "Search departments",
              description: "Accessible label for the workspace department multiselect input",
            })),
            (I[10] = R),
            (I[11] = u))
          : (u = I[11]),
        I[12] !== R
          ? ((p = R.formatMessage({
              id: "work.onboarding.departments.searchPlaceholder",
              defaultMessage: "Search departments",
              description: "Placeholder inside the workspace department multiselect search field",
            })),
            (I[12] = R),
            (I[13] = p))
          : (p = I[13]),
        I[14] !== N || I[15] !== D)
      ) {
        let e
        ;(I[17] !== D
          ? ((e = (e) => e.label.toLocaleLowerCase().includes(D.toLocaleLowerCase())), (I[17] = D), (I[18] = e))
          : (e = I[18]),
          (h = N.filter(e)),
          (I[14] = N),
          (I[15] = D),
          (I[16] = h))
      } else h = I[16]
      if (I[19] !== N || I[20] !== L) {
        let e
        ;(I[22] !== L ? ((e = (e) => L.has(e.id)), (I[22] = L), (I[23] = e)) : (e = I[23]),
          (m = N.filter(e)),
          (I[19] = N),
          (I[20] = L),
          (I[21] = m))
      } else m = I[21]
      ;(I[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, a.jsx)(l.A, {
            id: "health.onboarding.noDepartments",
            defaultMessage: "No departments found",
            description: "Empty search result when filtering workspace departments",
          })),
          (I[24] = f))
        : (f = I[24]),
        I[25] !== T || I[26] !== L || I[27] !== E
          ? ((_ = (e) => T(L.has(e.id) ? E.filter((t) => t !== e.id) : [...E, e.id])),
            (I[25] = T),
            (I[26] = L),
            (I[27] = E),
            (I[28] = _))
          : (_ = I[28]),
        I[29] !== T || I[30] !== E
          ? ((b = (e) => T(E.filter((t) => t !== e.id))), (I[29] = T), (I[30] = E), (I[31] = b))
          : (b = I[31]),
        I[32] !== R
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
            (I[32] = R),
            (I[33] = y))
          : (y = I[33]),
        I[34] !== P ||
        I[35] !== D ||
        I[36] !== L ||
        I[37] !== m ||
        I[38] !== _ ||
        I[39] !== b ||
        I[40] !== y ||
        I[41] !== d ||
        I[42] !== u ||
        I[43] !== p ||
        I[44] !== h
          ? ((x = (0, a.jsx)(tf.X, {
              variant: "select",
              onClearSelection: d,
              ariaLabel: u,
              placeholder: p,
              disabled: P,
              query: D,
              options: h,
              selectedOptions: m,
              selectedOptionIds: L,
              showSuggestionsOnFocus: !0,
              showLoadingDropdown: !1,
              emptyMessage: f,
              onQueryChange: G,
              onSelectOption: _,
              onRemoveOption: b,
              getRemoveLabel: y,
            })),
            (I[34] = P),
            (I[35] = D),
            (I[36] = L),
            (I[37] = m),
            (I[38] = _),
            (I[39] = b),
            (I[40] = y),
            (I[41] = d),
            (I[42] = u),
            (I[43] = p),
            (I[44] = h),
            (I[45] = x))
          : (x = I[45]))
      let B = 0 === E.length || P
      return (
        I[46] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(l.A, {
              id: "health.onboarding.next",
              defaultMessage: "Next",
              description: "Advances to the next workspace onboarding step",
            })),
            (I[46] = C))
          : (C = I[46]),
        I[47] !== B
          ? ((w = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", disabled: B, children: C })),
            (I[47] = B),
            (I[48] = w))
          : (w = I[48]),
        I[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(l.A, {
              id: "health.onboarding.skip",
              defaultMessage: "Skip",
              description: "Skips the workspace onboarding survey",
            })),
            (I[49] = v))
          : (v = I[49]),
        I[50] !== P || I[51] !== M
          ? ((A = (0, a.jsx)(g.$, {
              color: "ghostActive",
              size: "beaconAction",
              disabled: P,
              onClick: M,
              children: v,
            })),
            (I[50] = P),
            (I[51] = M),
            (I[52] = A))
          : (A = I[52]),
        I[53] !== w || I[54] !== A
          ? ((k = (0, a.jsxs)("div", { className: "mt-4 flex flex-col gap-2 sm:gap-3", children: [w, A] })),
            (I[53] = w),
            (I[54] = A),
            (I[55] = k))
          : (k = I[55]),
        I[56] !== x || I[57] !== k || I[58] !== n
          ? ((S = (0, a.jsxs)("form", {
              className: "flex w-full flex-col sm:w-140 lg:w-170",
              onSubmit: n,
              children: [c, x, k],
            })),
            (I[56] = x),
            (I[57] = k),
            (I[58] = n),
            (I[59] = S))
          : (S = I[59]),
        S
      )
    }
    var tb = n("Jg9v"),
      ty = n("mGjP"),
      tx = n("AJw6"),
      tC = n("ACoE"),
      tw = n("O5pN"),
      tv = n("osar"),
      tA = n("enVv"),
      tk = n("Z4o7"),
      tS = n("UxN3")
    function tI(e) {
      let t,
        n,
        o,
        r,
        c,
        d,
        u,
        p,
        h = (0, i.c)(10),
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
          ? ((o = (0, a.jsx)(tv.r.FooterInlineControls, {
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
            (h[2] = o))
          : (o = h[2]),
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
          ? ((u = m.formatMessage({
              id: "health.onboarding.examples.composer.voice",
              defaultMessage: "Start voice chat",
              description:
                "Accessible label for the non-interactive voice button in the healthcare onboarding composer",
            })),
            (h[6] = m),
            (h[7] = u))
          : (u = h[7]),
        h[8] !== u
          ? ((p = (0, a.jsx)(tv.r, {
              inert: !0,
              layout: "single-line",
              radiusVariant: "single-line",
              children: (0, a.jsx)(tv.r.Body, {
                layout: "single-line",
                children: (0, a.jsx)(tv.r.AdaptiveFooter, {
                  input: t,
                  layout: "single-line",
                  leadingControls: o,
                  trailingControls: (0, a.jsxs)(tv.r.FooterControls, {
                    layout: "single-line",
                    children: [
                      r,
                      (0, a.jsxs)(tv.r.FooterActions, {
                        children: [
                          d,
                          (0, a.jsx)(tv.r.FooterAction, { children: (0, a.jsx)(tA.f, { ariaLabel: u, Icon: tk.C }) }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })),
            (h[8] = u),
            (h[9] = p))
          : (p = h[9]),
        p
      )
    }
    var tE = n("wDWo"),
      tN = n("B3ke"),
      tj = n("y5H2"),
      tT = n("mRLe"),
      tO = n("WAdu"),
      tM = n("lA5q"),
      tP = n("dMLa"),
      tR = n("TUMj"),
      tD = n("IQg5")
    function tG(e) {
      let t,
        n,
        o = (0, i.c)(5),
        { item: r, markdownDirectives: s } = e
      return (
        o[0] !== s ? ((t = { [tM.Z5]: tL, ...s }), (o[0] = s), (o[1] = t)) : (t = o[1]),
        o[2] !== r || o[3] !== t
          ? ((n = (0, a.jsx)(tP.O, {
              item: r,
              markdownDirectives: t,
              browserConversationId: null,
              conversationId: "local-chatgpt:onboarding-example",
              cwd: null,
              hostId: "local",
              trackShownImpressions: !1,
            })),
            (o[2] = r),
            (o[3] = t),
            (o[4] = n))
          : (n = o[4]),
        n
      )
    }
    function tL(e) {
      let t,
        n,
        o = (0, i.c)(7),
        s = (0, r.useId)(),
        l = (0, tR.Rn)(),
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
          ? ((n = (0, a.jsx)(tD.WritingBlockDirectiveRenderer, {
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
    function tB(e) {
      let t,
        n,
        o,
        s,
        l,
        c,
        d,
        u,
        p,
        h,
        m,
        g = (0, i.c)(37),
        { prompt: f, answer: _, contentReferences: b, exampleIndex: y, animate: x, AnswerComponent: C } = e,
        w = void 0 === C ? tG : C,
        v = (0, tg.I)(),
        [A, k] = (0, r.useState)(!1),
        [S, I] = (0, r.useState)(0),
        E = (void 0 === x || x) && !v
      g[0] !== _ || g[1] !== E || g[2] !== S
        ? ((t = E ? _.slice(0, S) : _), (g[0] = _), (g[1] = E), (g[2] = S), (g[3] = t))
        : (t = g[3])
      let N = t,
        j = N.length < _.length
      g[4] !== b || g[5] !== j || g[6] !== N.length
        ? ((n = j
            ? b.filter(
                (e) =>
                  "number" == typeof e.start_idx &&
                  Number.isInteger(e.start_idx) &&
                  e.start_idx >= 0 &&
                  e.start_idx < N.length,
              )
            : b),
          (g[4] = b),
          (g[5] = j),
          (g[6] = N.length),
          (g[7] = n))
        : (n = g[7])
      let T = n
      g[8] !== j || g[9] !== T || g[10] !== N
        ? ((o = (0, tE.vu)(
            { content: { content_type: "text", parts: [N] }, metadata: { content_references: T } },
            { isStreaming: j },
          )),
          (g[8] = j),
          (g[9] = T),
          (g[10] = N),
          (g[11] = o))
        : (o = g[11])
      let O = o
      if (g[12] !== y || g[13] !== T) {
        let e
        ;(g[15] !== y ? ((e = () => `onboarding-example-${y}`), (g[15] = y), (g[16] = e)) : (e = g[16]),
          (s = T.map(e)),
          (g[12] = y),
          (g[13] = T),
          (g[14] = s))
      } else s = g[14]
      let M = !j
      g[17] !== O || g[18] !== T || g[19] !== s || g[20] !== M
        ? ((l = {
            type: "assistant-message",
            content: O,
            contentReferences: T,
            contentReferenceMessageIds: s,
            completed: M,
            phase: "final_answer",
            sentAtMs: null,
            structuredOutput: void 0,
          }),
          (g[17] = O),
          (g[18] = T),
          (g[19] = s),
          (g[20] = M),
          (g[21] = l))
        : (l = g[21])
      let P = l
      return (
        g[22] !== _.length || g[23] !== E
          ? ((d = () => {
              let e
              if (!E) return
              let t = 0,
                n = () => {
                  ;(I((t = Math.min(t + 10, _.length))), t < _.length && (e = setTimeout(n, 10)))
                }
              return (
                (e = setTimeout(() => {
                  ;(k(!0), (e = setTimeout(n, 100)))
                }, 500)),
                () => clearTimeout(e)
              )
            }),
            (c = [_.length, E]),
            (g[22] = _.length),
            (g[23] = E),
            (g[24] = c),
            (g[25] = d))
          : ((c = g[24]), (d = g[25])),
        (0, r.useEffect)(d, c),
        g[26] !== f || g[27] !== E || g[28] !== A
          ? ((u =
              !E || A
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(tN.m, { speaker: "user" }),
                      (0, a.jsx)(tj.R, {
                        message: f,
                        sentAtMs: null,
                        hideActions: !0,
                        isAeonFormatted: !1,
                        hostId: "local",
                      }),
                      (0, a.jsx)(tT.a, {}),
                    ],
                  })
                : null),
            (g[26] = f),
            (g[27] = E),
            (g[28] = A),
            (g[29] = u))
          : (u = g[29]),
        g[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(tN.m, { speaker: "assistant" })), (g[30] = p))
          : (p = g[30]),
        g[31] !== w || g[32] !== P
          ? ((h = (0, a.jsx)(w, { item: P })), (g[31] = w), (g[32] = P), (g[33] = h))
          : (h = g[33]),
        g[34] !== u || g[35] !== h
          ? ((m = (0, a.jsxs)(tO.c, { value: "restricted", children: [u, p, h] })),
            (g[34] = u),
            (g[35] = h),
            (g[36] = m))
          : (m = g[36]),
        m
      )
    }
    function tH(e) {
      let t,
        n,
        o,
        r,
        l,
        c,
        d,
        u,
        p,
        h,
        m,
        g,
        f,
        _,
        b,
        y = (0, i.c)(45),
        {
          title: x,
          subtitle: C,
          prompt: w,
          answer: v,
          contentReferences: A,
          exampleIndex: k,
          totalExamples: S,
          onNext: I,
          onSkip: E,
          animate: N,
          disabled: j,
          AnswerComponent: T,
        } = e,
        O = void 0 === N || N,
        M = void 0 !== j && j,
        P = (0, s.A)()
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
        y[7] !== E ? ((r = () => E("desktop")), (y[7] = E), (y[8] = r)) : (r = y[8]),
        y[9] !== M || y[10] !== I || y[11] !== r
          ? ((l = (0, a.jsx)(tz, { disabled: M, onNext: I, onSkip: r })),
            (y[9] = M),
            (y[10] = I),
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
        y[16] !== P
          ? ((d = P.formatMessage({
              id: "onboarding.exampleTour.conversationLabel",
              defaultMessage: "Example ChatGPT conversation",
              description:
                "Accessible region label explaining that the onboarding prompt and response are a demonstration rather than the user's own conversation",
            })),
            (y[16] = P),
            (y[17] = d))
          : (d = y[17]),
        y[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)("div", { className: "hidden md:block", children: (0, a.jsx)(tI, {}) })),
            (p = { isWorking: !1 }),
            (y[18] = u),
            (y[19] = p))
          : ((u = y[18]), (p = y[19])),
        y[20] !== T || y[21] !== O || y[22] !== v || y[23] !== A || y[24] !== k || y[25] !== w
          ? ((h = (0, a.jsx)(tb.C, {
              autoLoadHistory: !1,
              footer: u,
              scrollToBottomButton: p,
              children: (0, a.jsx)("div", {
                className: "pointer-events-none flex min-h-full flex-col py-5",
                onClickCapture: tF,
                onKeyDownCapture: tW,
                children: (0, a.jsx)(tB, {
                  AnswerComponent: T,
                  prompt: w,
                  answer: v,
                  contentReferences: A,
                  exampleIndex: k,
                  animate: O,
                }),
              }),
            })),
            (y[20] = T),
            (y[21] = O),
            (y[22] = v),
            (y[23] = A),
            (y[24] = k),
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
        y[30] !== k || y[31] !== E || y[32] !== S
          ? ((g = k < S - 1 ? () => E("mobile") : void 0), (y[30] = k), (y[31] = E), (y[32] = S), (y[33] = g))
          : (g = y[33]),
        y[34] !== M || y[35] !== I || y[36] !== g
          ? ((f = (0, a.jsx)(tz, { disabled: M, onNext: I, onSkip: g })),
            (y[34] = M),
            (y[35] = I),
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
    function tF(e) {
      ;(e.preventDefault(), e.stopPropagation())
    }
    function tU(e) {
      return e.stopPropagation()
    }
    function tK(e) {
      return e.stopPropagation()
    }
    function tz(e) {
      let t,
        n,
        o,
        r,
        s = (0, i.c)(10),
        { disabled: c, onNext: d, onSkip: u } = e
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
        s[4] !== c || s[5] !== u
          ? ((o = u
              ? (0, a.jsx)(g.$, {
                  color: "ghost",
                  size: "beaconAction",
                  disabled: c,
                  onClick: u,
                  children: (0, a.jsx)(l.A, { ...tV.skipTour }),
                })
              : null),
            (s[4] = c),
            (s[5] = u),
            (s[6] = o))
          : (o = s[6]),
        s[7] !== n || s[8] !== o
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-3 select-none", children: [n, o] })),
            (s[7] = n),
            (s[8] = o),
            (s[9] = r))
          : (r = s[9]),
        r
      )
    }
    let tV = (0, ti.YK)({
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
    function tq(e) {
      let t,
        n,
        o,
        r,
        s,
        c,
        d = (0, i.c)(19),
        { value: u, options: p, disabled: h, onSelect: m, onSkip: f } = e,
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
        d[2] !== _ || d[3] !== m || d[4] !== p || d[5] !== u)
      ) {
        let e
        ;(d[7] !== _ || d[8] !== m || d[9] !== u
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
                  onClick: () => m(e.id),
                  children: [
                    e.icon,
                    (0, a.jsx)("span", { className: "flex-1 text-start", children: e.label }),
                    u === e.id ? (0, a.jsx)(eu.hEG, {}) : null,
                  ],
                },
                e.id,
              )),
            (d[7] = _),
            (d[8] = m),
            (d[9] = u),
            (d[10] = e))
          : (e = d[10]),
          (o = p.map(e)),
          (d[2] = _),
          (d[3] = m),
          (d[4] = p),
          (d[5] = u),
          (d[6] = o))
      } else o = d[6]
      return (
        d[11] !== o
          ? ((r = (0, a.jsx)("div", { className: "flex flex-col gap-2", children: o })), (d[11] = o), (d[12] = r))
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
    function t$(e) {
      let t,
        n,
        o,
        s,
        c,
        d,
        u,
        p,
        h,
        m,
        g,
        f,
        _,
        b,
        y = (0, i.c)(32),
        { onComplete: x } = e,
        C = (0, tg.I)(),
        w = null != x && !C
      y[0] !== x ? ((t = () => x?.()), (y[0] = x), (y[1] = t)) : (t = y[1])
      let v = (0, r.useEffectEvent)(t),
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
        (0, r.useEffect)(n, o),
        y[9] !== w ? ((s = !!w && { opacity: 0, y: 10 }), (y[9] = w), (y[10] = s)) : (s = y[10]),
        y[11] === Symbol.for("react.memo_cache_sentinel") ? ((c = { opacity: 1, y: 0 }), (y[11] = c)) : (c = y[11]))
      let k = 0.5 * !!w,
        S = 0.4 * !!w
      ;(y[12] !== k || y[13] !== S
        ? ((d = { duration: k, delay: S }), (y[12] = k), (y[13] = S), (y[14] = d))
        : (d = y[14]),
        y[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(l.A, {
              id: "onboarding.tourLoading.greeting",
              defaultMessage: "Nice to meet you",
              description: "Greeting shown while preparing the new user's onboarding example tour",
            })),
            (y[15] = u))
          : (u = y[15]),
        y[16] !== s || y[17] !== d
          ? ((p = (0, a.jsx)(th.P.h1, { initial: s, animate: c, transition: d, children: u })),
            (y[16] = s),
            (y[17] = d),
            (y[18] = p))
          : (p = y[18]),
        y[19] !== w ? ((h = !!w && { opacity: 0, y: 10 }), (y[19] = w), (y[20] = h)) : (h = y[20]),
        y[21] === Symbol.for("react.memo_cache_sentinel") ? ((m = { opacity: 1, y: 0 }), (y[21] = m)) : (m = y[21]))
      let I = 0.5 * !!w,
        E = 1.5 * !!w
      return (
        y[22] !== I || y[23] !== E
          ? ((g = { duration: I, delay: E }), (y[22] = I), (y[23] = E), (y[24] = g))
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
    var tY = n("rKAs"),
      tZ = n("THS1"),
      tJ = n("OPXn"),
      tQ = n("eaAY")
    let tX = { [tY.AX]: tJ.R }
    function t1(e) {
      let t,
        n,
        o,
        r = (0, i.c)(8),
        { item: s } = e
      return (
        r[0] !== s ? ((t = (0, a.jsx)(tG, { item: s, markdownDirectives: tX })), (r[0] = s), (r[1] = t)) : (t = r[1]),
        r[2] !== s.completed || r[3] !== s.contentReferences
          ? ((n = s.completed && (0, a.jsx)(tQ.X, { references: s.contentReferences, shouldBlockExternalEgress: !0 })),
            (r[2] = s.completed),
            (r[3] = s.contentReferences),
            (r[4] = n))
          : (n = r[4]),
        r[5] !== t || r[6] !== n
          ? ((o = (0, a.jsxs)(tZ.r, { value: !1, children: [t, n] })), (r[5] = t), (r[6] = n), (r[7] = o))
          : (o = r[7]),
        o
      )
    }
    var t0 = n("bMLJ")
    function t2(e) {
      let t,
        n,
        o,
        r,
        c,
        d,
        u,
        p,
        h,
        m,
        f = (0, i.c)(71),
        _ = (0, s.A)()
      switch (e.step) {
        case "intro": {
          let n
          ;(f[0] !== e ? ((n = (0, a.jsx)(t6, { ...e })), (f[0] = e), (f[1] = n)) : (n = f[1]), (t = n))
          break
        }
        case "role": {
          let n,
            i,
            o = e.role,
            r = e.roleOptions ?? t0.$d
          f[2] !== r ? ((n = r.map(t4)), (f[2] = r), (f[3] = n)) : (n = f[3])
          let s = e.isSaving || !!e.error
          ;(f[4] !== e.onRoleSelect || f[5] !== e.onSkip || f[6] !== e.role || f[7] !== n || f[8] !== s
            ? ((i = (0, a.jsx)(tq, { value: o, options: n, disabled: s, onSelect: e.onRoleSelect, onSkip: e.onSkip })),
              (f[4] = e.onRoleSelect),
              (f[5] = e.onSkip),
              (f[6] = e.role),
              (f[7] = n),
              (f[8] = s),
              (f[9] = i))
            : (i = f[9]),
            (t = i))
          break
        }
        case "department": {
          let n,
            i,
            o = e.role,
            r = e.departments
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
            ? ((i = (0, a.jsx)(
                t_,
                {
                  values: r,
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
              (f[22] = i))
            : (i = f[22]),
            (t = i))
          break
        }
        case "loading": {
          let n
          ;(f[23] !== e.onLoadingComplete
            ? ((n = (0, a.jsx)(t$, { onComplete: e.onLoadingComplete })), (f[23] = e.onLoadingComplete), (f[24] = n))
            : (n = f[24]),
            (t = n))
          break
        }
        case "examples": {
          let n,
            i = e.example
          f[25] !== i ? ((n = null == i ? null : tu(i)), (f[25] = i), (f[26] = n)) : (n = f[26])
          let o = n
          if (null != i && null != o) {
            let n,
              r,
              s,
              c = nt[i.kind]
            ;(f[27] !== c.title ? ((n = (0, a.jsx)(l.A, { ...c.title })), (f[27] = c.title), (f[28] = n)) : (n = f[28]),
              f[29] !== c.subtitle
                ? ((r = (0, a.jsx)(l.A, { ...c.subtitle })), (f[29] = c.subtitle), (f[30] = r))
                : (r = f[30]))
            let d = e.isSaving || !!e.error
            ;(f[31] !== i.metadata.content_references ||
            f[32] !== i.prompt ||
            f[33] !== e.animateExample ||
            f[34] !== e.exampleIndex ||
            f[35] !== e.onExampleNext ||
            f[36] !== e.onTourSkip ||
            f[37] !== e.totalExamples ||
            f[38] !== n ||
            f[39] !== r ||
            f[40] !== d ||
            f[41] !== o
              ? ((s = (0, a.jsx)(
                  tH,
                  {
                    AnswerComponent: t1,
                    title: n,
                    subtitle: r,
                    prompt: i.prompt,
                    answer: o,
                    contentReferences: i.metadata.content_references,
                    exampleIndex: e.exampleIndex,
                    totalExamples: e.totalExamples,
                    animate: e.animateExample,
                    disabled: d,
                    onNext: e.onExampleNext,
                    onSkip: e.onTourSkip,
                  },
                  e.exampleIndex,
                )),
                (f[31] = i.metadata.content_references),
                (f[32] = i.prompt),
                (f[33] = e.animateExample),
                (f[34] = e.exampleIndex),
                (f[35] = e.onExampleNext),
                (f[36] = e.onTourSkip),
                (f[37] = e.totalExamples),
                (f[38] = n),
                (f[39] = r),
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
          ;(f[43] !== e ? ((n = (0, a.jsx)(t7, { ...e })), (f[43] = e), (f[44] = n)) : (n = f[44]), (t = n))
        }
      }
      ;(f[45] !== _ ? ((n = _.formatMessage(ne.dialogLabel)), (f[45] = _), (f[46] = n)) : (n = f[46]),
        f[47] !== e.onShown || f[48] !== n
          ? ((o = { "aria-describedby": void 0, "aria-label": n, onOpenAutoFocus: e.onShown, onEscapeKeyDown: t3 }),
            (f[47] = e.onShown),
            (f[48] = n),
            (f[49] = o))
          : (o = f[49]),
        f[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(eo.L3, { className: "sr-only", children: (0, a.jsx)(l.A, { ...ne.dialogLabel }) })),
            (f[50] = r))
          : (r = f[50]))
      let b = e.isSaving,
        y = "examples" === e.step ? "min-h-0 flex-1 md:px-12 md:py-20 lg:px-16 xl:px-24" : "m-auto px-6 py-10 md:px-10"
      f[51] !== y
        ? ((c = (0, ei.A)("flex w-full flex-col items-center gap-6", y)), (f[51] = y), (f[52] = c))
        : (c = f[52])
      let x = "examples" === e.step ? `examples-${e.exampleIndex}` : e.step,
        C = "examples" === e.step ? "min-h-0 flex-1" : void 0
      return (
        f[53] !== t || f[54] !== x || f[55] !== C
          ? ((d = (0, a.jsx)(tp.N, { mode: "wait", children: (0, a.jsx)(el.P, { className: C, children: t }, x) })),
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
                      children: (0, a.jsx)(l.A, { ...ne.retry }),
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
          ? ((h = (0, a.jsx)("div", {
              className: "flex h-full flex-col overflow-y-auto select-none",
              "aria-busy": b,
              children: p,
            })),
            (f[65] = e.isSaving),
            (f[66] = p),
            (f[67] = h))
          : (h = f[67]),
        f[68] !== o || f[69] !== h
          ? ((m = (0, a.jsx)(e3.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsxs)(eo.lG, {
                open: !0,
                showDialogClose: !1,
                shouldIgnoreClickOutside: !0,
                unstyledContent: !0,
                viewportSized: !0,
                contentClassName: "h-full w-full bg-surface-elevated text-default",
                contentProps: o,
                children: [r, h],
              }),
            })),
            (f[68] = o),
            (f[69] = h),
            (f[70] = m))
          : (m = f[70]),
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
        o,
        r = (0, i.c)(7),
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
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-3 text-center", children: [t, n] })),
            (r[4] = t),
            (r[5] = n),
            (r[6] = o))
          : (o = r[6]),
        o
      )
    }
    function t6(e) {
      let t,
        n,
        o,
        r,
        s,
        c,
        d,
        u,
        p,
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
        A = (0, i.c)(42),
        { workspaceName: k, onStart: S, error: I } = e,
        E = (0, tg.I)()
      ;(A[0] !== E ? ((t = !E && { opacity: 0, y: 12 }), (A[0] = E), (A[1] = t)) : (t = A[1]),
        A[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = { opacity: 1, y: 0 }), (A[2] = n)) : (n = A[2]))
      let N = 0.5 * !E,
        j = 0.15 * !E
      ;(A[3] !== N || A[4] !== j ? ((o = { duration: N, delay: j }), (A[3] = N), (A[4] = j), (A[5] = o)) : (o = A[5]),
        A[6] !== k
          ? ((r = k
              ? (0, a.jsx)(l.A, { ...ne.workspaceWelcome, values: { workspaceName: k } })
              : (0, a.jsx)(l.A, { ...ne.workspaceWelcomeFallback })),
            (A[6] = k),
            (A[7] = r))
          : (r = A[7]),
        A[8] !== t || A[9] !== o || A[10] !== r
          ? ((s = (0, a.jsx)(th.P.h1, {
              className: "text-center text-3xl font-semibold",
              initial: t,
              animate: n,
              transition: o,
              children: r,
            })),
            (A[8] = t),
            (A[9] = o),
            (A[10] = r),
            (A[11] = s))
          : (s = A[11]),
        A[12] !== E ? ((c = !E && { opacity: 0, y: 16 }), (A[12] = E), (A[13] = c)) : (c = A[13]),
        A[14] === Symbol.for("react.memo_cache_sentinel") ? ((d = { opacity: 1, y: 0 }), (A[14] = d)) : (d = A[14]))
      let T = 0.6 * !E,
        O = 0.6 * !E
      ;(A[15] !== T || A[16] !== O
        ? ((u = { duration: T, delay: O }), (A[15] = T), (A[16] = O), (A[17] = u))
        : (u = A[17]),
        A[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(t8, {
              icon: (0, a.jsx)(eu.aVB, {}),
              title: (0, a.jsx)(l.A, { ...ne.clinicalLearningTitle }),
              body: (0, a.jsx)(l.A, { ...ne.clinicalLearningBody }),
            })),
            (A[18] = p))
          : (p = A[18]),
        A[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(t8, {
              icon: (0, a.jsx)(eu.o1J, {}),
              title: (0, a.jsx)(l.A, { ...ne.fastAnswersTitle }),
              body: (0, a.jsx)(l.A, { ...ne.fastAnswersBody }),
            })),
            (A[19] = h))
          : (h = A[19]),
        A[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(t8, {
              icon: (0, a.jsx)(eu.PL4, {}),
              title: (0, a.jsx)(l.A, { ...ne.extraSecurityTitle }),
              body: (0, a.jsx)(l.A, { ...ne.extraSecurityBody }),
            })),
            (A[20] = m))
          : (m = A[20]),
        A[21] !== u || A[22] !== c
          ? ((f = (0, a.jsxs)(th.P.div, {
              className: "grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-10",
              initial: c,
              animate: d,
              transition: u,
              children: [p, h, m],
            })),
            (A[21] = u),
            (A[22] = c),
            (A[23] = f))
          : (f = A[23]),
        A[24] !== E ? ((_ = !E && { opacity: 0, y: 18 }), (A[24] = E), (A[25] = _)) : (_ = A[25]),
        A[26] === Symbol.for("react.memo_cache_sentinel") ? ((b = { opacity: 1, y: 0 }), (A[26] = b)) : (b = A[26]))
      let M = 0.5 * !E,
        P = 1.4 * !E
      A[27] !== M || A[28] !== P
        ? ((y = { duration: M, delay: P }), (A[27] = M), (A[28] = P), (A[29] = y))
        : (y = A[29])
      let R = !!I
      return (
        A[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(l.A, { ...ne.getStarted })), (A[30] = x))
          : (x = A[30]),
        A[31] !== S || A[32] !== R
          ? ((C = (0, a.jsx)(g.$, { size: "beaconAction", disabled: R, onClick: S, children: x })),
            (A[31] = S),
            (A[32] = R),
            (A[33] = C))
          : (C = A[33]),
        A[34] !== _ || A[35] !== y || A[36] !== C
          ? ((w = (0, a.jsx)(th.P.div, { initial: _, animate: b, transition: y, children: C })),
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
    function t8(e) {
      let t,
        n,
        o,
        r,
        s,
        l = (0, i.c)(12),
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
          ? ((r = (0, a.jsx)("p", { className: "text-sm text-secondary", children: u })), (l[7] = u), (l[8] = r))
          : (r = l[8]),
        l[9] !== o || l[10] !== r
          ? ((s = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [o, r] })),
            (l[9] = o),
            (l[10] = r),
            (l[11] = s))
          : (s = l[11]),
        s
      )
    }
    function t7(e) {
      let t,
        n,
        o,
        r,
        s,
        c,
        d,
        u,
        p = (0, i.c)(21),
        { isQuorum: h, onFinish: m, isSaving: f, error: _ } = e,
        b = h ? "quorum" : "hc"
      ;(p[0] !== b
        ? ((t = (0, a.jsx)(t5, { title: (0, a.jsx)(l.A, { ...ne.usageWarningTitle, values: { product: b } }) })),
          (p[0] = b),
          (p[1] = t))
        : (t = p[1]),
        p[2] !== b
          ? ((n = (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...ne.usageWarning1, values: { product: b } }) })),
            (p[2] = b),
            (p[3] = n))
          : (n = p[3]),
        p[4] !== b
          ? ((o = (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...ne.usageWarning2, values: { product: b } }) })),
            (p[4] = b),
            (p[5] = o))
          : (o = p[5]),
        p[6] !== h
          ? ((r = h
              ? (0, a.jsx)("p", { children: (0, a.jsx)(l.A, { ...ne.usageWarning3, values: { baaLink: t9 } }) })
              : null),
            (p[6] = h),
            (p[7] = r))
          : (r = p[7]),
        p[8] !== n || p[9] !== o || p[10] !== r
          ? ((s = (0, a.jsxs)("div", {
              className: "flex flex-col gap-6 text-base text-secondary",
              children: [n, o, r],
            })),
            (p[8] = n),
            (p[9] = o),
            (p[10] = r),
            (p[11] = s))
          : (s = p[11]))
      let y = f || !!_
      return (
        p[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, { ...ne.understand })), (p[12] = c))
          : (c = p[12]),
        p[13] !== f || p[14] !== m || p[15] !== y
          ? ((d = (0, a.jsx)(g.$, { size: "auth", disabled: y, loading: f, onClick: m, children: c })),
            (p[13] = f),
            (p[14] = m),
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
    let ne = (0, ti.YK)({
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
        n = (0, i.c)(3),
        o = `${e.identity.accountId}:${e.identity.userId}`
      return (
        n[0] !== e || n[1] !== o ? ((t = (0, a.jsx)(ni, { ...e }, o)), (n[0] = e), (n[1] = o), (n[2] = t)) : (t = n[2]),
        t
      )
    }
    function ni(e) {
      let t,
        n,
        l,
        c,
        d,
        u,
        p,
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
        A,
        k,
        I,
        E,
        N,
        j,
        T,
        O = (0, i.c)(87),
        { identity: M, workspaceName: P, planType: R, onComplete: D } = e,
        G = (0, o.gh)(y.u),
        L = (0, s.A)(),
        B = (0, z.Zj)("1498338261"),
        H = B && ("hc" === R || "hc_consumption" === R || "quorum" === R) ? t0.$f : t0.$d,
        [W, F] = (0, r.useState)("intro"),
        [U, K] = (0, r.useState)()
      O[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (O[0] = t)) : (t = O[0])
      let [V, q] = (0, r.useState)(t)
      O[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (O[1] = n)) : (n = O[1])
      let [$, Y] = (0, r.useState)(n),
        [Z, J] = (0, r.useState)(0),
        Q = (0, r.useRef)(null),
        [X, ee] = (0, r.useState)(!1),
        [et, en] = (0, r.useState)(!1),
        ea = (0, r.useRef)(null)
      O[2] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (O[2] = l)) : (l = O[2])
      let ei = (0, r.useRef)(l),
        eo = (0, r.useRef)(!1),
        er = (0, r.useRef)(!1),
        es = null == U ? void 0 : t0._s[U]
      O[3] !== es || O[4] !== U
        ? ((c =
            null == U || "other_clinical" === U
              ? t0.e1
              : t0.jw.filter((e) => {
                  let { id: t } = e
                  return null == es || es.includes(t)
                })),
          (O[3] = es),
          (O[4] = U),
          (O[5] = c))
        : (c = O[5])
      let el = c
      ;(O[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => () => {
            ea.current?.abort()
          }),
          (u = []),
          (O[6] = d),
          (O[7] = u))
        : ((d = O[6]), (u = O[7])),
        (0, r.useEffect)(d, u),
        O[8] !== Z || O[9] !== G || O[10] !== W
          ? ((p = function (e) {
              ;(tc(G, nn[W], Z), F(e))
            }),
            (O[8] = Z),
            (O[9] = G),
            (O[10] = W),
            (O[11] = p))
          : (p = O[11]))
      let ec = p
      O[12] !== ec || O[13] !== V || O[14] !== M || O[15] !== U || O[16] !== G
        ? ((h = function () {
            if (null == U) return
            let e = G.query.snapshot(td, { ...M, role: U, department: V[0] ?? null }),
              t = () => {
                e.cancel()
              },
              n = ea.current?.signal
            ;(n?.addEventListener("abort", t, { once: !0 }),
              (Q.current = e
                .fetch()
                .catch(no)
                .finally(() => {
                  n?.removeEventListener("abort", t)
                })),
              ec("loading"),
              (0, S.yy)(G, tr.odB, {}))
          }),
          (O[12] = ec),
          (O[13] = V),
          (O[14] = M),
          (O[15] = U),
          (O[16] = G),
          (O[17] = h))
        : (h = O[17])
      let ed = h
      O[18] !== ec
        ? ((m = async function () {
            let e = await Q.current
            if (!ea.current?.signal.aborted) {
              if (null == e || 0 === e.length) return void ec("warning")
              ;(Y(e), ec("examples"))
            }
          }),
          (O[18] = ec),
          (O[19] = m))
        : (m = O[19])
      let eu = m
      O[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = async function () {
            if (!(eo.current || ea.current?.signal.aborted)) {
              ;((eo.current = !0), en(!1))
              try {
                for (; ei.current.length > 0;)
                  (ea.current?.signal.throwIfAborted(), await ei.current[0](), ei.current.shift())
              } catch {
                ea.current?.signal.aborted || en(!0)
              }
              ;((eo.current = !1), ea.current?.signal.aborted || ee(!1))
            }
          }),
          (O[20] = g))
        : (g = O[20])
      let ep = g
      O[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function (e) {
            ;(ei.current.push(e), ep())
          }),
          (O[21] = f))
        : (f = O[21])
      let eh = f
      O[22] !== M || O[23] !== G
        ? ((_ = function () {
            if (null != ea.current) return
            let e = new AbortController()
            ;((ea.current = e),
              (0, S.yy)(G, ts.CodexHealthWorkspaceOnboardingStepShown, {
                stepType: "WorkspaceIntro",
                stepIndex: (0, tl.At)(0),
              }),
              eh(async () => {
                let t = await G.query.snapshot(to.E$, M).fetch()
                ;(e.signal.throwIfAborted(), (t.role || t.departments?.length) && (await (0, to.Nf)(G, M, e.signal)))
              }))
          }),
          (O[22] = M),
          (O[23] = G),
          (O[24] = _))
        : (_ = O[24])
      let em = _
      O[25] !== M || O[26] !== L || O[27] !== H || O[28] !== G
        ? ((b = async function (e, t) {
            let n = H.find((t) => {
                let { id: n } = t
                return n === e
              }),
              a = null == n ? "" : L.formatMessage(n.displayValue),
              i = [...t0.jw, ...t0.e1],
              o = t.flatMap((e) => {
                let t = i.find((t) => t.id === e)
                return null == t ? [] : [L.formatMessage(t.displayValue)]
              }),
              r = [L.formatMessage(nr.roleIntro, { role: a })]
            ;(o.length > 0 && r.push(L.formatMessage(nr.departmentOnly, { departments: L.formatList(o) })),
              await (0, to.Qm)(
                G,
                M,
                { role: e, departments: t },
                { enabled: !0, role_user_message: a, other_user_message: r.join(" ") },
                ea.current?.signal,
              ))
          }),
          (O[25] = M),
          (O[26] = L),
          (O[27] = H),
          (O[28] = G),
          (O[29] = b))
        : (b = O[29])
      let eg = b,
        ef = "quorum" === R,
        e_ = U ?? "",
        eb = $[Z]
      return (
        O[30] !== eu
          ? ((x = () => {
              eu()
            }),
            (O[30] = eu),
            (O[31] = x))
          : (x = O[31]),
        O[32] !== ec || O[33] !== Z || O[34] !== $.length || O[35] !== G
          ? ((C = () => {
              Z + 1 >= $.length ? ec("warning") : (tc(G, "Examples", Z), J(Z + 1))
            }),
            (O[32] = ec),
            (O[33] = Z),
            (O[34] = $.length),
            (O[35] = G),
            (O[36] = C))
          : (C = O[36]),
        O[37] !== ec || O[38] !== G
          ? ((w = (e) => {
              ;("desktop" === e && (0, S.yy)(G, tr.ewv, { stepType: "ask_any_question" }), ec("warning"))
            }),
            (O[37] = ec),
            (O[38] = G),
            (O[39] = w))
          : (w = O[39]),
        O[40] !== et || O[41] !== L
          ? ((v = et ? L.formatMessage(nr.saveError) : null), (O[40] = et), (O[41] = L), (O[42] = v))
          : (v = O[42]),
        O[43] !== ec ? ((A = () => ec("role")), (O[43] = ec), (O[44] = A)) : (A = O[44]),
        O[45] !== ec || O[46] !== eg || O[47] !== B
          ? ((k = (e) => {
              ;(K(e),
                q([]),
                eh(() => eg(e, [])),
                ec(B && "physician" !== e && "np_pa" !== e ? "warning" : "department"))
            }),
            (O[45] = ec),
            (O[46] = eg),
            (O[47] = B),
            (O[48] = k))
          : (k = O[48]),
        O[49] !== ec ||
        O[50] !== V ||
        O[51] !== et ||
        O[52] !== U ||
        O[53] !== eg ||
        O[54] !== G ||
        O[55] !== B ||
        O[56] !== ed
          ? ((I = () => {
              !et &&
                null != U &&
                0 !== V.length &&
                ((0, S.yy)(G, ts.CodexHealthWorkspaceOnboardingAction, {
                  action:
                    ts.CodexHealthWorkspaceOnboardingActionType
                      .CODEX_HEALTH_WORKSPACE_ONBOARDING_ACTION_TYPE_SURVEY_SUBMITTED,
                }),
                eh(() => eg(U, V)),
                B ? ec("warning") : ed())
            }),
            (O[49] = ec),
            (O[50] = V),
            (O[51] = et),
            (O[52] = U),
            (O[53] = eg),
            (O[54] = G),
            (O[55] = B),
            (O[56] = ed),
            (O[57] = I))
          : (I = O[57]),
        O[58] !== ec ? ((E = () => ec("warning")), (O[58] = ec), (O[59] = E)) : (E = O[59]),
        O[60] !== M || O[61] !== D || O[62] !== G
          ? ((N = () => {
              !er.current &&
                ((er.current = !0),
                (0, S.yy)(G, ts.CodexHealthWorkspaceOnboardingAction, {
                  action:
                    ts.CodexHealthWorkspaceOnboardingActionType
                      .CODEX_HEALTH_WORKSPACE_ONBOARDING_ACTION_TYPE_ACKNOWLEDGED,
                }),
                ee(!0),
                eh(async () => {
                  ;(await (0, to.de)(G, M, ea.current?.signal), ea.current?.signal.throwIfAborted(), D())
                }))
            }),
            (O[60] = M),
            (O[61] = D),
            (O[62] = G),
            (O[63] = N))
          : (N = O[63]),
        O[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = () => {
              ;(ee(er.current), ep())
            }),
            (O[64] = j))
          : (j = O[64]),
        O[65] !== el ||
        O[66] !== V ||
        O[67] !== Z ||
        O[68] !== $.length ||
        O[69] !== em ||
        O[70] !== X ||
        O[71] !== H ||
        O[72] !== W ||
        O[73] !== ef ||
        O[74] !== e_ ||
        O[75] !== eb ||
        O[76] !== x ||
        O[77] !== C ||
        O[78] !== w ||
        O[79] !== v ||
        O[80] !== A ||
        O[81] !== k ||
        O[82] !== I ||
        O[83] !== E ||
        O[84] !== N ||
        O[85] !== P
          ? ((T = (0, a.jsx)(t2, {
              step: W,
              workspaceName: P,
              isQuorum: ef,
              role: e_,
              departments: V,
              departmentOptions: el,
              example: eb,
              exampleIndex: Z,
              totalExamples: $.length,
              onLoadingComplete: x,
              onExampleNext: C,
              onTourSkip: w,
              isSaving: X,
              error: v,
              onShown: em,
              onStart: A,
              onRoleSelect: k,
              roleOptions: H,
              onDepartmentsChange: q,
              onDepartmentNext: I,
              onSkip: E,
              onFinish: N,
              onRetry: j,
            })),
            (O[65] = el),
            (O[66] = V),
            (O[67] = Z),
            (O[68] = $.length),
            (O[69] = em),
            (O[70] = X),
            (O[71] = H),
            (O[72] = W),
            (O[73] = ef),
            (O[74] = e_),
            (O[75] = eb),
            (O[76] = x),
            (O[77] = C),
            (O[78] = w),
            (O[79] = v),
            (O[80] = A),
            (O[81] = k),
            (O[82] = I),
            (O[83] = E),
            (O[84] = N),
            (O[85] = P),
            (O[86] = T))
          : (T = O[86]),
        T
      )
    }
    function no() {
      return []
    }
    let nr = (0, ti.YK)({
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
    var ns = n("yj5s"),
      nl = n("Sm7V"),
      nc = n("uHE8"),
      nd = n("vLpE")
    function nu(e) {
      let t,
        n,
        o,
        r,
        s = (0, i.c)(9),
        { busy: c, onRetry: d, layout: u } = e,
        p = "education" === (void 0 === u ? "default" : u) && "shrink-0 p-4"
      return (
        s[0] !== p
          ? ((t = (0, ei.A)("flex w-full max-w-lg flex-col items-center gap-3 text-center", p)), (s[0] = p), (s[1] = t))
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
          ? ((o =
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
            (s[5] = o))
          : (o = s[5]),
        s[6] !== t || s[7] !== o
          ? ((r = (0, a.jsxs)("div", { role: "alert", className: t, children: [n, o] })),
            (s[6] = t),
            (s[7] = o),
            (s[8] = r))
          : (r = s[8]),
        r
      )
    }
    function np(e) {
      let t,
        n,
        o,
        r,
        s,
        c,
        d,
        u,
        p,
        h = (0, i.c)(28),
        { children: m, busy: g, error: f, onRetry: _, onShown: b, fillContent: y, layout: x } = e,
        C = void 0 !== y && y,
        w = void 0 === x ? "default" : x,
        v = "education" === w ? "bg-surface" : "bg-surface-elevated",
        A = "education" === w && eC.A.surface
      ;(h[0] !== v || h[1] !== A
        ? ((t = (0, ei.A)("h-full w-full text-default", v, A)), (h[0] = v), (h[1] = A), (h[2] = t))
        : (t = h[2]),
        h[3] !== b
          ? ((n = { "aria-describedby": void 0, onOpenAutoFocus: b, onEscapeKeyDown: nh }), (h[3] = b), (h[4] = n))
          : (n = h[4]),
        h[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(eo.L3, {
              className: "sr-only",
              children: (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.dialogTitle",
                defaultMessage: "Welcome to ChatGPT",
                description: "Accessible title of the full-screen workspace onboarding dialog",
              }),
            })),
            (h[5] = o))
          : (o = h[5]))
      let k = "education" === w ? "max-h-full" : "overflow-y-auto"
      return (
        h[6] !== k ? ((r = (0, ei.A)("flex h-full flex-col select-none", k)), (h[6] = k), (h[7] = r)) : (r = h[7]),
        h[8] !== C || h[9] !== w
          ? ((s = (0, ei.A)(
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
          ? ((c = f ? (0, a.jsx)(nu, { busy: g, onRetry: _, layout: w }) : null),
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
          ? ((u = (0, a.jsx)("div", { className: r, "aria-busy": g, children: d })),
            (h[20] = g),
            (h[21] = d),
            (h[22] = r),
            (h[23] = u))
          : (u = h[23]),
        h[24] !== u || h[25] !== t || h[26] !== n
          ? ((p = (0, a.jsx)(e3.d, {
              claim: "fullscreen_onboarding",
              children: (0, a.jsxs)(eo.lG, {
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
            (h[24] = u),
            (h[25] = t),
            (h[26] = n),
            (h[27] = p))
          : (p = h[27]),
        p
      )
    }
    function nh(e) {
      return e.preventDefault()
    }
    let nm = (0, ti.YK)({
        summary: {
          id: "k12.onboarding.personalization.summary",
          defaultMessage:
            "{role, select, teacher {I'm a Teacher.} administrator_district_leader {I'm an Administrator / District Leader.} it_staff {I'm IT / Technical Staff.} others {I work in another role.} other {}}{subject, select, none {} stem { I teach STEM.} english { I teach English.} social_studies_history { I teach Social Studies & History.} world_languages { I teach World Languages.} arts_music { I teach Arts & Music.} physical_education_health { I teach Physical Education & Health.} other { I teach Other.}}{grade, select, preschool { I work with Preschool students.} k5 { I work with K-5 grade students.} middle_school { I work with 6-8 grade students.} high_school { I work with 9-12 grade students.} other {}}",
          description:
            "Personalization context saved and sent to ChatGPT after the K12 onboarding survey. The complete message describes the selected staff role, optional teaching subject, and optional grade level. Empty selections omit that sentence. Keep the whole message natural in the target language.",
        },
      }),
      ng = (0, ti.YK)({
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
      nf = (0, ti.YK)({
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
      n_ = (0, ti.YK)({
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
      nb = (0, ti.YK)({
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
      nw = (0, ti.YK)({
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
    var nv = n("iJY0")
    let nA = (0, nv.a)({
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
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4975 1.90565L15.7671 2.52674C17.1017 2.68426 18.0561 3.89425 17.8989 5.22889L16.9673 13.1342C16.8096 14.4686 15.5997 15.4232 14.2651 15.266L14.2641 15.265L12.9077 15.1088L12.9497 15.4096C13.1323 16.7408 12.2019 17.9686 10.8706 18.1517L5.61376 18.8744C4.28225 19.0576 3.05392 18.1266 2.87059 16.7953L1.78661 8.90956C1.60373 7.57823 2.53442 6.35062 3.86571 6.16737L7.60399 5.65272L7.7954 4.03749C7.95296 2.70279 9.16279 1.74826 10.4975 1.90565ZM9.30419 6.76112L4.04637 7.48475C3.44304 7.5681 3.02136 8.12452 3.10399 8.72791L4.18797 16.6137C4.27105 17.2174 4.82844 17.6398 5.43212 17.557L10.689 16.8334C11.2926 16.7503 11.7152 16.1941 11.6323 15.5902L10.5473 7.70448C10.4641 7.10094 9.90772 6.67836 9.30419 6.76112ZM10.3413 3.22596C9.73614 3.1547 9.18734 3.58774 9.11571 4.19276L8.96532 5.4662L9.12254 5.44471C10.454 5.26173 11.6825 6.19236 11.8657 7.52381L12.7212 13.7484L14.4194 13.9447C15.0246 14.016 15.5745 13.5833 15.646 12.9779L16.5776 5.07264C16.6486 4.46744 16.216 3.91841 15.6108 3.84706L10.3413 3.22596Z" fill="currentColor"/>',
      }),
      nk = (0, nv.a)({
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
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99902 6.95264C11.5055 6.95264 12.7273 8.17378 12.7275 9.68018C12.7275 11.1868 11.5056 12.4087 9.99902 12.4087C8.49274 12.4083 7.27148 11.1865 7.27148 9.68018C7.2717 8.174 8.49288 6.95298 9.99902 6.95264ZM9.99902 8.28271C9.22741 8.28306 8.60178 8.90854 8.60156 9.68018C8.60156 10.452 9.22728 11.0783 9.99902 11.0786C10.7711 11.0786 11.3975 10.4522 11.3975 9.68018C11.3972 8.90832 10.7709 8.28271 9.99902 8.28271Z" fill="currentColor"/> <path d="M11.875 3.91846C12.2423 3.91846 12.54 4.21623 12.54 4.5835C12.5398 4.95054 12.2421 5.24854 11.875 5.24854H8.125C7.75789 5.24854 7.46022 4.95054 7.45996 4.5835C7.45996 4.21623 7.75773 3.91846 8.125 3.91846H11.875Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.917 1.41846C15.5727 1.41863 16.9149 2.76083 16.915 4.4165V15.5835C16.915 17.2393 15.5728 18.5814 13.917 18.5815H6.08301C4.42722 18.5814 3.08496 17.2393 3.08496 15.5835V4.4165C3.08514 2.76083 4.42733 1.41863 6.08301 1.41846H13.917ZM10 14.5454C8.37302 14.5455 7.01764 15.7103 6.72363 17.2515H13.2754C12.9813 15.7104 11.6269 14.5455 10 14.5454ZM6.08301 2.74854C5.16187 2.74871 4.41522 3.49537 4.41504 4.4165V15.5835C4.41504 16.2613 4.81989 16.843 5.40039 17.104C5.77061 14.8968 7.68794 13.2154 10 13.2153C12.312 13.2154 14.2293 14.8969 14.5996 17.104C15.1801 16.843 15.585 16.2613 15.585 15.5835V4.4165C15.5848 3.49537 14.8381 2.74871 13.917 2.74854H6.08301Z" fill="currentColor"/>',
      }),
      nS = {
        teacher: (0, a.jsx)(eu.L$D, {}),
        administrator_district_leader: (0, a.jsx)(eu.TGw, {}),
        it_staff: (0, a.jsx)(er.I, { className: "shrink-0", asset: nk }),
        others: (0, a.jsx)(er.I, { className: "shrink-0", asset: nA }),
      }
    function nI(e) {
      let t,
        n,
        o,
        r,
        c = (0, i.c)(72),
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
      let u = n,
        p = e.busy && "Tour" !== e.step
      ;(c[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = (0, a.jsx)(l.A, {
            id: "workspaceOnboarding.skip",
            defaultMessage: "Skip",
            description: "Skips this optional onboarding step",
          })),
          (c[4] = o))
        : (o = c[4]),
        c[5] !== e.onSkip || c[6] !== p
          ? ((r = (0, a.jsx)(g.$, {
              color: "ghostActive",
              size: "beaconAction",
              disabled: p,
              onClick: e.onSkip,
              children: o,
            })),
            (c[5] = e.onSkip),
            (c[6] = p),
            (c[7] = r))
          : (r = c[7]))
      let h = r
      switch (e.step) {
        case "WorkspaceIntro": {
          let t, n, i, o, r
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
                  ].map(nj),
                })),
                (c[10] = n))
              : (n = c[10]),
            c[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsx)(l.A, { ...nw.gettingStartedButton })), (c[11] = i))
              : (i = c[11]),
            c[12] !== e.onStart
              ? ((o = (0, a.jsx)(g.$, { size: "beaconAction", onClick: e.onStart, children: i })),
                (c[12] = e.onStart),
                (c[13] = o))
              : (o = c[13]),
            c[14] !== t || c[15] !== o
              ? ((r = (0, a.jsxs)("div", {
                  className: "flex w-full max-w-280 flex-col items-center gap-10 sm:px-10 lg:px-16",
                  children: [t, n, o],
                })),
                (c[14] = t),
                (c[15] = o),
                (c[16] = r))
              : (r = c[16]),
            r
          )
        }
        case "Role": {
          let t,
            n,
            i = e.role
          return (
            c[17] === Symbol.for("react.memo_cache_sentinel") ? ((t = nC.map(nN)), (c[17] = t)) : (t = c[17]),
            c[18] !== e.busy || c[19] !== e.onRole || c[20] !== e.onSkip || c[21] !== e.role
              ? ((n = (0, a.jsx)(tq, { value: i, options: t, disabled: e.busy, onSelect: e.onRole, onSkip: e.onSkip })),
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
          let t, n, i, o, r, s, d
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
              ? ((i = (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, { ...ng.subtitle }),
                })),
                (c[26] = i))
              : (i = c[26]),
            c[27] !== e.busy || c[28] !== e.grade || c[29] !== e.onGrade || c[30] !== e.onSubject || c[31] !== e.subject
              ? ((o = [
                  { question: ng.gradeQuestion, options: ny, value: e.grade, onSelect: e.onGrade },
                  { question: ng.subjectQuestion, options: nx, value: e.subject, onSelect: e.onSubject },
                ].map((t) => {
                  let { question: n, options: i, value: o, onSelect: r } = t
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
                          children: i.map((e) =>
                            (0, a.jsx)(
                              g.$,
                              {
                                color: o === e.id ? "primary" : "secondary",
                                "aria-pressed": o === e.id,
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
                (c[32] = o))
              : (o = c[32]))
          let u = e.busy || !e.grade || !e.subject
          return (
            c[33] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)(l.A, {
                  id: "workspaceOnboarding.next",
                  defaultMessage: "Next",
                  description: "Advances to the next onboarding step",
                })),
                (c[33] = r))
              : (r = c[33]),
            c[34] !== u
              ? ((s = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", disabled: u, children: r })),
                (c[34] = u),
                (c[35] = s))
              : (s = c[35]),
            c[36] !== h || c[37] !== s || c[38] !== t || c[39] !== o
              ? ((d = (0, a.jsxs)("form", {
                  className: "flex w-full max-w-lg flex-col gap-6 text-center",
                  onSubmit: t,
                  children: [n, i, o, s, h],
                })),
                (c[36] = h),
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
              ? ((t = (0, a.jsx)(t$, { onComplete: e.onLoadingComplete })), (c[41] = e.onLoadingComplete), (c[42] = t))
              : (t = c[42]),
            t
          )
        }
        case "Tour": {
          let t, n, i, o, r, s, p, m
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
              ? ((i = (0, a.jsx)("p", {
                  className: "text-base text-secondary",
                  children: (0, a.jsx)(l.A, { ...g.subtitle }),
                })),
                (c[46] = g.subtitle),
                (c[47] = i))
              : (i = c[47]),
            c[48] !== n || c[49] !== i
              ? ((o = (0, a.jsxs)("div", { className: "flex shrink-0 flex-col gap-3 text-center", children: [n, i] })),
                (c[48] = n),
                (c[49] = i),
                (c[50] = o))
              : (o = c[50]),
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
                  onWheel: nE,
                  "aria-label": r,
                  children: e.transcript,
                })),
                (c[53] = e.transcript),
                (c[54] = r),
                (c[55] = s))
              : (s = c[55]),
            c[56] !== u || c[57] !== h
              ? ((p = (0, a.jsxs)("div", {
                  className: "flex shrink-0 items-center justify-center gap-3",
                  children: [h, u],
                })),
                (c[56] = u),
                (c[57] = h),
                (c[58] = p))
              : (p = c[58]),
            c[59] !== s || c[60] !== p || c[61] !== o
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex h-full min-h-0 w-full max-w-280 flex-col gap-6",
                  children: [o, s, p],
                })),
                (c[59] = s),
                (c[60] = p),
                (c[61] = o),
                (c[62] = m))
              : (m = c[62]),
            m
          )
        }
        case "WrappingUp": {
          let t, n, i, o, r
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
              ? ((i = (0, a.jsx)(l.A, { ...nf.continue })), (c[66] = i))
              : (i = c[66]),
            c[67] !== e.busy
              ? ((o = (0, a.jsx)(g.$, { size: "beaconAction", type: "submit", loading: e.busy, children: i })),
                (c[67] = e.busy),
                (c[68] = o))
              : (o = c[68]),
            c[69] !== t || c[70] !== o
              ? ((r = (0, a.jsxs)("form", {
                  className: "flex w-full max-w-lg flex-col gap-6 text-center",
                  onSubmit: t,
                  children: [n, o],
                })),
                (c[69] = t),
                (c[70] = o),
                (c[71] = r))
              : (r = c[71]),
            r
          )
        }
      }
    }
    function nE(e) {
      return e.stopPropagation()
    }
    function nN(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }), icon: nS[e.id] }
    }
    function nj(e) {
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
    let nT = { WorkspaceIntro: 0, Role: 1, TeacherDetails: 2, Loading: 3, Tour: 4, WrappingUp: 5 }
    function nO(e) {
      let t,
        n,
        l,
        c,
        d,
        u,
        p,
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
        A,
        k = (0, i.c)(89),
        { identity: I, workspaceName: E, onComplete: N } = e,
        j = (0, o.gh)(y.u),
        T = (0, s.A)(),
        [O, M] = (0, r.useState)("WorkspaceIntro"),
        [R, D] = (0, r.useState)(""),
        [G, L] = (0, r.useState)(""),
        [B, H] = (0, r.useState)(""),
        [W, F] = (0, r.useState)(0),
        [U, K] = (0, r.useState)(null),
        z = (0, r.useRef)(null),
        [V, q] = (0, r.useState)(!1),
        [$, Y] = (0, r.useState)(!1),
        [Z, J] = (0, r.useState)(!1),
        Q = (0, r.useRef)(null),
        X = (0, r.useRef)(!1),
        ee = (0, r.useRef)(nM),
        et = (0, r.useRef)(!1),
        en = (0, r.useRef)(0)
      ;(k[0] !== j
        ? ((t = () => () => {
            ;((en.current = en.current + 1),
              Q.current?.controller.abort(),
              Q.current?.stop(),
              null != z.current && (0, nl.SY)(j, z.current))
          }),
          (n = [j]),
          (k[0] = j),
          (k[1] = t),
          (k[2] = n))
        : ((t = k[1]), (n = k[2])),
        (0, r.useEffect)(t, n),
        k[3] !== W || k[4] !== j
          ? ((l = function (e, t) {
              let n = void 0 === t ? W : t
              ;(M(e),
                F(n),
                (0, S.yy)(j, tr.FGm, {
                  stepType: "Tour" === e ? "ask_any_question" : e,
                  stepIndex: (0, P.At)(nT[e] + n),
                }),
                "Loading" === e && (0, S.yy)(j, tr.odB, {}))
            }),
            (k[3] = W),
            (k[4] = j),
            (k[5] = l))
          : (l = k[5]))
      let ea = l
      k[6] !== I || k[7] !== j
        ? ((c = async function (e) {
            if (X.current) return
            ;(Q.current?.controller.abort(), Q.current?.stop())
            let t = new AbortController()
            ;((Q.current = { controller: t, stop: (0, to.RR)(j, I, t) }),
              t.signal.aborted ||
                ((X.current = !0),
                (ee.current = e),
                q(!0),
                J(!1),
                await e(t.signal)
                  .catch(() => {
                    t.signal.aborted || J(!0)
                  })
                  .finally(() => {
                    Q.current?.controller === t && ((X.current = !1), t.signal.aborted || q(!1))
                  })))
          }),
          (k[6] = I),
          (k[7] = j),
          (k[8] = c))
        : (c = k[8])
      let ei = c
      k[9] !== T
        ? ((d = function (e, t, n) {
            let a = nC.find((t) => t.id === e)
            return {
              roleLabel: null == a ? "" : T.formatMessage(a.displayValue),
              summary: T.formatMessage(nm.summary, { role: e, grade: t, subject: n || "none" }).trim(),
            }
          }),
          (k[9] = T),
          (k[10] = d))
        : (d = k[10])
      let eo = d
      k[11] !== ea || k[12] !== I || k[13] !== eo || k[14] !== j
        ? ((u = async function (e, t, n, a) {
            let { roleLabel: i, summary: o } = eo(e, t, n)
            ;(await (0, to.Qm)(
              j,
              I,
              { role: e, departments: [] },
              { enabled: !0, role_user_message: i, other_user_message: o },
              a,
            ),
              a.throwIfAborted(),
              ea("Loading"))
          }),
          (k[11] = ea),
          (k[12] = I),
          (k[13] = eo),
          (k[14] = j),
          (k[15] = u))
        : (u = k[15])
      let er = u
      k[16] !== G || k[17] !== T || k[18] !== eo || k[19] !== R || k[20] !== j || k[21] !== B
        ? ((p = async function (e, t) {
            let n = (en.current = en.current + 1),
              a = () => !t.aborted && en.current === n,
              i = T.formatMessage([n_.planLessonPrompt, n_.communicationPrompt, n_.classroomResourcesPrompt][e]),
              o = eo(R, G, B).summary
            Y(!0)
            let r = await (0, nl.submitChatGPTCompletion)(j, {
              prompt: o
                ? `${i}

${o}`
                : i,
              conversationId: z.current,
              conversationMode: "primary_assistant",
              realAuthor: "onboarding",
              isOnboardingConversation: !0,
              startupSignal: t,
              isSubmissionCurrent: a,
              isRequestCurrent: a,
              onClientThreadIdChange: (e) => {
                a() && ((z.current = e), K(e))
              },
              onServerThreadIdChange: (e) => {
                a() && ((z.current = e), K(e))
              },
              onCompletion: (e) => {
                a() && (Y(!1), J("failed" === e))
              },
            }).catch((e) => {
              throw (a() && Y(!1), e)
            })
            if (a() && null == r) throw (Y(!1), Error("Onboarding example was not submitted"))
          }),
          (k[16] = G),
          (k[17] = T),
          (k[18] = eo),
          (k[19] = R),
          (k[20] = j),
          (k[21] = B),
          (k[22] = p))
        : (p = k[22])
      let es = p
      k[23] !== I || k[24] !== N || k[25] !== ei || k[26] !== j
        ? ((h = function () {
            ;((en.current = en.current + 1),
              Q.current?.controller.abort(),
              (X.current = !1),
              null != z.current && (0, nl.SY)(j, z.current),
              Y(!1),
              J(!1),
              (0, S.yy)(j, tr.OH2, { step: "ask_any_question" }),
              (0, S.yy)(j, tr.ewv, { stepType: "ask_any_question" }),
              ei(async (e) => {
                ;(await (0, to.de)(j, I, e).catch((t) => {
                  if ("AbortError" === t.name) throw t
                  e.throwIfAborted()
                }),
                  e.throwIfAborted(),
                  N())
              }))
          }),
          (k[23] = I),
          (k[24] = N),
          (k[25] = ei),
          (k[26] = j),
          (k[27] = h))
        : (h = k[27])
      let el = h,
        ec = "Tour" === O
      ;(k[28] !== ei ? ((m = () => void ei(ee.current)), (k[28] = ei), (k[29] = m)) : (m = k[29]),
        k[30] !== j
          ? ((g = () => {
              et.current ||
                ((et.current = !0), (0, S.yy)(j, tr.FGm, { stepType: "WorkspaceIntro", stepIndex: (0, P.At)(0) }))
            }),
            (k[30] = j),
            (k[31] = g))
          : (g = k[31]))
      let ed = V || $
      return (
        k[32] !== U
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
            (k[32] = U),
            (k[33] = f))
          : (f = k[33]),
        k[34] !== ea ? ((_ = () => ea("Role")), (k[34] = ea), (k[35] = _)) : (_ = k[35]),
        k[36] !== ea || k[37] !== ei || k[38] !== er
          ? ((b = (e) => {
              ;(D(e), "teacher" === e ? ea("TeacherDetails") : ei((t) => er(e, "", "", t)))
            }),
            (k[36] = ea),
            (k[37] = ei),
            (k[38] = er),
            (k[39] = b))
          : (b = k[39]),
        k[40] !== ea || k[41] !== ei || k[42] !== es
          ? ((x = () => {
              ;(ea("Tour", 0), ei((e) => es(0, e)))
            }),
            (k[40] = ea),
            (k[41] = ei),
            (k[42] = es),
            (k[43] = x))
          : (x = k[43]),
        k[44] !== ea ||
        k[45] !== V ||
        k[46] !== R ||
        k[47] !== ei ||
        k[48] !== er ||
        k[49] !== j ||
        k[50] !== el ||
        k[51] !== O
          ? ((C = () => {
              ;(V && "Tour" !== O) ||
                ("Role" === O
                  ? ((0, S.yy)(j, tr.yP9, { step: "Role" }), ea("Loading"))
                  : "TeacherDetails" === O
                    ? ((0, S.yy)(j, tr.uxs, { step: "TeacherDetails" }), L(""), H(""), ei((e) => er(R, "", "", e)))
                    : el())
            }),
            (k[44] = ea),
            (k[45] = V),
            (k[46] = R),
            (k[47] = ei),
            (k[48] = er),
            (k[49] = j),
            (k[50] = el),
            (k[51] = O),
            (k[52] = C))
          : (C = k[52]),
        k[53] !== ea ||
        k[54] !== V ||
        k[55] !== W ||
        k[56] !== G ||
        k[57] !== I ||
        k[58] !== N ||
        k[59] !== R ||
        k[60] !== ei ||
        k[61] !== er ||
        k[62] !== j ||
        k[63] !== es ||
        k[64] !== O ||
        k[65] !== $ ||
        k[66] !== B
          ? ((w = () => {
              V ||
                $ ||
                ("TeacherDetails" === O
                  ? ei((e) => er(R, G, B, e))
                  : "Tour" === O && W < 2
                    ? (ea("Tour", W + 1), ei((e) => es(W + 1, e)))
                    : "Tour" === O
                      ? ea("WrappingUp")
                      : "WrappingUp" === O &&
                        ei(async (e) => {
                          ;((0, S.yy)(j, tr.t72, {}),
                            await (0, to.de)(j, I, e).catch((t) => {
                              if ("AbortError" === t.name) throw t
                              e.throwIfAborted()
                            }),
                            e.throwIfAborted(),
                            N())
                        }))
            }),
            (k[53] = ea),
            (k[54] = V),
            (k[55] = W),
            (k[56] = G),
            (k[57] = I),
            (k[58] = N),
            (k[59] = R),
            (k[60] = ei),
            (k[61] = er),
            (k[62] = j),
            (k[63] = es),
            (k[64] = O),
            (k[65] = $),
            (k[66] = B),
            (k[67] = w))
          : (w = k[67]),
        k[68] !== W ||
        k[69] !== G ||
        k[70] !== R ||
        k[71] !== O ||
        k[72] !== B ||
        k[73] !== ed ||
        k[74] !== f ||
        k[75] !== _ ||
        k[76] !== b ||
        k[77] !== x ||
        k[78] !== C ||
        k[79] !== w ||
        k[80] !== E
          ? ((v = (0, a.jsx)(nI, {
              step: O,
              workspaceName: E,
              role: R,
              grade: G,
              subject: B,
              exampleIndex: W,
              busy: ed,
              transcript: f,
              onStart: _,
              onRole: b,
              onGrade: L,
              onSubject: H,
              onLoadingComplete: x,
              onSkip: C,
              onNext: w,
            })),
            (k[68] = W),
            (k[69] = G),
            (k[70] = R),
            (k[71] = O),
            (k[72] = B),
            (k[73] = ed),
            (k[74] = f),
            (k[75] = _),
            (k[76] = b),
            (k[77] = x),
            (k[78] = C),
            (k[79] = w),
            (k[80] = E),
            (k[81] = v))
          : (v = k[81]),
        k[82] !== V || k[83] !== Z || k[84] !== m || k[85] !== g || k[86] !== v || k[87] !== ec
          ? ((A = (0, a.jsx)(np, { busy: V, error: Z, fillContent: ec, onRetry: m, onShown: g, children: v })),
            (k[82] = V),
            (k[83] = Z),
            (k[84] = m),
            (k[85] = g),
            (k[86] = v),
            (k[87] = ec),
            (k[88] = A))
          : (A = k[88]),
        A
      )
    }
    async function nM() {}
    var nP = n("ZhRn"),
      nR = n("aSgO"),
      nD = n("SXZ1")
    function nG(e) {
      let t,
        n,
        s,
        l,
        c = (0, i.c)(15),
        { identity: d, onComplete: u } = e,
        p = (0, o.gh)(y.u),
        { client: h } = (0, z.cn)(),
        m = (0, r.useRef)(!1)
      c[0] !== d.accountId || c[1] !== u || c[2] !== p
        ? ((t = function () {
            ;((0, nD.Wu)(p, d.accountId), u())
          }),
          (c[0] = d.accountId),
          (c[1] = u),
          (c[2] = p),
          (c[3] = t))
        : (t = c[3])
      let g = t
      return (
        c[4] !== h ? ((n = h.getContext().user.country ?? null), (c[4] = h), (c[5] = n)) : (n = c[5]),
        c[6] !== g || c[7] !== d.accountId || c[8] !== d.userId || c[9] !== p
          ? ((s = () => {
              if (m.current) return
              m.current = !0
              let e = (0, nP.Ri)("oai-aytd-user") === d.userId
              ;((0, nD.cA)(p, d.accountId, { replay: !0, showWrappingUp: !e }), e && g())
            }),
            (c[6] = g),
            (c[7] = d.accountId),
            (c[8] = d.userId),
            (c[9] = p),
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
    let nL = j.object({
      workspaceOnboardingResume: j.object({ accountId: j.string(), userId: j.string(), complete: j.boolean() }),
    })
    var nB = n("nM0x")
    function nH(e) {
      let t,
        n = (0, i.c)(2),
        { currentFlow: a, joinerFlow: o } = e,
        s = (0, z.AS)()
      n[0] !== s
        ? ((t = () => s.getLayer("659232070").get("flow_variant", "current")), (n[0] = s), (n[1] = t))
        : (t = n[1])
      let [l] = (0, r.useState)(t)
      return "joiner_v1" === l ? o : a
    }
    var nW = n("vw1R")
    let nF = "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_EXPERIENCE_REDESIGNED",
      nU = {
        role: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_ROLE",
        apps: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CONNECTORS",
        download: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_STEP_TYPE_CODEX_APP",
      }
    function nK(e, t, n) {
      ;((0, S.yy)(e, A.JY, {
        stepType: { role: "0", apps: "1", download: "2" }[n],
        productSurface: t ? "chatgpt_for_education" : void 0,
      }),
        t ||
          (0, S.yy)(e, R.ZX, {
            onboardingExperience: nF,
            action: "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_STEP_SHOWN",
            stepType: nU[n],
          }))
    }
    function nz(e, t, n, a) {
      t || (0, S.yy)(e, R.ZX, { onboardingExperience: nF, action: n, connectorId: a })
    }
    var nV = n("rGp2"),
      nq = n("hOO0"),
      n$ = n("cLdu"),
      nY = n("eFn4")
    let nZ = (0, o.i1)(y.u, (e, { get: t }) => {
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
        let i = t(p.f, e.accountId)
        if (i.isPending) return
        let o = i.data?.accounts?.[e.accountId]?.account
        if (!i.isSuccess || o?.account_id !== e.accountId) return !1
        if ("account-admin" === o.account_user_role || "account-owner" === o.account_user_role) return !0
        let r = t(nY.Jk, e.accountId)
        if (!r.isPending)
          return r.isSuccess && r.data.permissions?.includes("chatgpt.workspace.connector.dev_mode") === !0
      }),
      nJ = {
        google: [L._k["0"].connectorId, L._k["3"].connectorId, L._k["1"].connectorId, L._k["2"].connectorId],
        microsoft: [B.zd["0"].connectorId, B.zd["1"].connectorId, B.zd["3"].connectorId, B.zd["2"].connectorId],
      },
      nQ = [
        L._k["3"].connectorId,
        B.zd["2"].connectorId,
        "asdk_app_69a1d78e929881919bba0dbda1f6436d",
        B.zd["3"].connectorId,
        L._k["0"].connectorId,
        B.zd["0"].connectorId,
        L._k["1"].connectorId,
        B.zd["1"].connectorId,
        L._k["2"].connectorId,
        "asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
        "connector_76869538009648d5b282a4bb21c3d157",
        "asdk_app_69b31dc2110c8191b8b47dc98fe5a052",
        "asdk_app_695bfc98071c8191bac7bc479aa27de7",
      ],
      nX = j.record(j.string(), j.string().min(1).catch("")),
      n1 = (0, o.vU)(y.u, (e, { get: t, scope: n }) => {
        let a = !e.education || t(nZ, e)
        return {
          queryKey: ["workspace-onboarding-apps", e.accountId, e.userId, e.education, ...(e.education ? [a] : [])],
          enabled: void 0 !== a,
          staleTime: Q.D.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: t }) => {
            let i = n2(n.get(x.M9), e.education),
              o = { "ChatGPT-Account-Id": e.accountId, [nV.ok]: "CONNECTOR_SETTING" },
              [r, s, l] = await Promise.all([
                J.Request.safePost("/aip/connectors/batch", {
                  additionalHeaders: o,
                  parameters: { query: { apply_eligibility_filter: !0 } },
                  requestBody: { connector_ids: [...new Set(i.flat())], include_actions: !1 },
                  signal: t,
                }),
                (0, n$.ds)(n, { accountId: e.accountId, hostId: n$.h4, roots: void 0 }, "connector_setup"),
                J.Request.safeGet("/aip/workspace/connector-stats", { additionalHeaders: o, signal: t }).catch(
                  () => null,
                ),
              ])
            return (
              t.throwIfAborted(),
              (function (e, t, n, a, i = !0) {
                let o = new Set()
                return e.flatMap((e) => {
                  let r = e
                    .flatMap((e) => t.filter((t) => (0, nq.$)(t.id) === (0, nq.$)(e)))
                    .find(
                      (e) =>
                        ("ENABLED" === e.status || (i && "ONLY_ME" === e.status)) &&
                        e.name.trim().length > 0 &&
                        !n0.has((0, nq.$)(e.id)) &&
                        e.labels?.admin_only_connector !== "true",
                    )
                  if (!r || o.has((0, nq.$)(r.id))) return []
                  o.add((0, nq.$)(r.id))
                  let s = new Set(e.map(nq.$)),
                    l = n.some(
                      ({ canonicalAppId: e, plugin: t }) =>
                        null != e && s.has((0, nq.$)(e)) && t.enabled && "DISABLED_BY_ADMIN" !== t.availability,
                    ),
                    c = Math.max(
                      0,
                      ...(a?.connector_stats
                        ?.filter((e) => s.has((0, nq.$)(e.connector_id)))
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
              })(i, r.connectors, s, l, !0 === a)
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
        ].map(nq.$),
      )
    function n2(e, t) {
      let n = e?.getDynamicConfig("3365181325").get("old_to_new_mapping", {}),
        a = nX.parse(n ?? {})
      return (t ? [...nQ.slice(0, 8), ...nQ.slice(-2)] : nQ).map((e) =>
        [Object.entries(a).find(([t]) => (0, nq.$)(t) === (0, nq.$)(e))?.[1], e].filter(
          (e) => !!e && !n0.has((0, nq.$)(e)),
        ),
      )
    }
    let n3 = (0, o.vU)(y.u, (e, t) => ({
      queryKey: [
        "workspace-onboarding-recommendation",
        e.accountId,
        e.userId,
        ...(!1 === e.includeWorkspaceStats ? [{ includeWorkspaceStats: !1 }] : []),
      ],
      staleTime: Q.D.FIVE_MINUTES,
      retry: !1,
      queryFn: async ({ signal: n }) => {
        let a = await J.Request.safeGet("/aip/workspace/connector-recommendation", {
          additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
          parameters: { query: { include_workspace_stats: e.includeWorkspaceStats } },
          signal: n,
        }).catch(() => null)
        n.throwIfAborted()
        let i = n2(t.get(x.M9), !1).find((e) => e.some((e) => (0, nq.$)(e) === (0, nq.$)(a?.connector_id ?? ""))),
          o = a?.mx_provider === "google" || a?.mx_provider === "microsoft" ? a.mx_provider : null
        for (let e of ["google", "microsoft"])
          if (i?.some((t) => nJ[e].some((e) => (0, nq.$)(t) === (0, nq.$)(e))))
            return { provider: e, mxProvider: o, requestSucceeded: !0 }
        return { provider: o, mxProvider: o, requestSucceeded: null != a }
      },
    }))
    function n4(e, t, n, a) {
      if (null == t) return []
      let i = nJ[t].flatMap((t) =>
          e.filter((e) => e.familyIds.some((e) => (0, nq.$)(e) === (0, nq.$)(t)) && (0, nV.Yo)(e.connector, "OAUTH")),
        ),
        o = i.find((e) => !e.connected)
      if (null == o) return []
      let r = nJ[t].find((e) => o.familyIds.some((t) => (0, nq.$)(t) === (0, nq.$)(e)))
      if (null == r) return [o]
      let s = []
      return (
        "google" === t
          ? (s = (0, L.W9)({ planType: a, connectorId: r, statsigClient: n, disableExposureLog: !0 }).map(
              ({ connectorId: e }) => e,
            ))
          : (0, B.Vk)({ planType: a, connectorId: r, statsigClient: n, disableExposureLog: !0 }) &&
            (s = [...nJ.microsoft]),
        i.filter((e) => e === o || e.familyIds.some((e) => s.some((t) => (0, nq.$)(t) === (0, nq.$)(e))))
      )
    }
    var n5 = n("djbx"),
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
        o,
        r,
        c,
        d,
        u,
        p,
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
        A,
        k,
        S,
        I,
        E,
        N,
        j,
        T,
        O,
        M,
        P = (0, i.c)(51),
        R = (0, s.A)(),
        D = (0, tg.I)()
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { opacity: 0, y: 12 }), (P[0] = e)) : (e = P[0])
      let G = 0.35 * !D
      P[1] !== G
        ? ((t = { hidden: e, show: { opacity: 1, y: 0, transition: { duration: G } } }), (P[1] = G), (P[2] = t))
        : (t = P[2])
      let L = t
      ;(P[3] !== R
        ? ((n = R.formatMessage({
            id: "chatgpt.onboarding.new_workspace.connectors_preview.image.description",
            defaultMessage: "An example of ChatGPT answering a project launch question using connected work apps.",
            description:
              "Accessible description of the decorative chat illustration on the new-workspace connector onboarding screen. It conveys to screen-reader users that connecting work apps lets ChatGPT answer company-specific questions. The visible example concerns a fictional project, not the user's real workspace data.",
          })),
          (P[3] = R),
          (P[4] = n))
        : (n = P[4]),
        P[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = {}), (P[5] = o)) : (o = P[5]))
      let B = 0.15 * !D
      ;(P[6] !== B ? ((r = (0, n7.y)(B)), (P[6] = B), (P[7] = r)) : (r = P[7]),
        P[8] !== r
          ? ((c = { hidden: o, show: { transition: { delayChildren: r } } }), (P[8] = r), (P[9] = c))
          : (c = P[9]))
      let H = !D && "hidden"
      return (
        P[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.question",
              defaultMessage: "When is Project Horizon launching?",
              description:
                "Example user question shown in the connectors preview chat on the new workspace onboarding flow. It demonstrates asking ChatGPT about a fictional internal project after work apps are connected. Short chat bubble text.",
            })),
            (P[10] = d))
          : (d = P[10]),
        P[11] !== L
          ? ((u = (0, a.jsx)(th.P.div, {
              className:
                "ms-auto max-w-[70%] rounded-2xl bg-surface-tertiary px-4 py-2 text-base leading-6.5 text-default",
              variants: L,
              children: d,
            })),
            (P[11] = L),
            (P[12] = u))
          : (u = P[12]),
        P[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(n6.R, {
              className: "size-5 shrink-0",
              alt: "",
              src: at,
              fallback: (0, a.jsx)("span", {}),
              monochrome: !0,
            })),
            (P[13] = p))
          : (p = P[13]),
        P[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsxs)("div", {
              className: "flex items-center gap-1 text-xs leading-4",
              children: [
                p,
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
            (P[14] = h))
          : (h = P[14]),
        P[15] === Symbol.for("react.memo_cache_sentinel")
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
            (P[15] = m))
          : (m = P[15]),
        P[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(n6.R, {
              className: "size-5 shrink-0",
              alt: "",
              src: an,
              fallback: (0, a.jsx)("span", {}),
            })),
            (P[16] = g))
          : (g = P[16]),
        P[17] === Symbol.for("react.memo_cache_sentinel")
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
            (P[17] = f))
          : (f = P[17]),
        P[18] === Symbol.for("react.memo_cache_sentinel")
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
            (P[18] = _))
          : (_ = P[18]),
        P[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, a.jsx)("div", {
              className: "flex items-center text-xs leading-4",
              children: [n9, em, ae].map(as),
            })),
            (P[19] = b))
          : (b = P[19]),
        P[20] === Symbol.for("react.memo_cache_sentinel")
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
            (P[20] = y))
          : (y = P[20]),
        P[21] !== L
          ? ((x = (0, a.jsxs)(th.P.div, {
              className: "mt-3.5 flex flex-wrap items-stretch gap-2",
              variants: L,
              children: [m, _, y],
            })),
            (P[21] = L),
            (P[22] = x))
          : (x = P[22]),
        P[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.search_caption",
              defaultMessage: "Searched company knowledge",
              description: "Caption below source chips indicating search scope",
            })),
            (P[23] = C))
          : (C = P[23]),
        P[24] !== L
          ? ((w = (0, a.jsx)(th.P.div, {
              className: "mt-1 text-base leading-6.5 text-secondary",
              variants: L,
              children: C,
            })),
            (P[24] = L),
            (P[25] = w))
          : (w = P[25]),
        P[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.answer_body",
              defaultMessage:
                "Project Horizon is moving through staged rollout planning. The product team is expanding integrations, validating permission mappings, and working through security reviews with a small pilot in mind.",
              description:
                "Example assistant response shown in the connectors preview chat on the new workspace onboarding flow. It illustrates company knowledge retrieved from connected apps for a fictional internal project. 'Permission mappings' means access-control settings, not legal approvals. Body copy in a chat-style response.",
            })),
            (P[26] = v))
          : (v = P[26]),
        P[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsxs)("p", {
              className: "mb-6 text-base leading-6.5 text-default",
              children: [
                v,
                (0, a.jsx)("span", {
                  className: "ms-1 inline-flex items-center gap-1 rounded-xs bg-surface-tertiary px-1 py-0.5",
                  children: [an, at].map(ar),
                }),
              ],
            })),
            (P[27] = A))
          : (A = P[27]),
        P[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, a.jsx)("h3", {
              className: "mb-1 text-lg leading-7 font-semibold text-default",
              children: (0, a.jsx)(l.A, {
                id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.title",
                defaultMessage: "Rollout Plan",
                description: "Heading for rollout plan list",
              }),
            })),
            (P[28] = k))
          : (k = P[28]),
        P[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.pilot_planning",
              defaultMessage:
                "<strong>Pilot planning:</strong> Validate core workflows, data handling, permission mappings, and connector reliability with a smaller user group.",
              description:
                "First bullet in the example rollout plan shown in the connectors preview chat on the new workspace onboarding flow. The strong tag emphasizes the rollout phase label for a fictional internal project. 'Permission mappings' means access-control settings.",
              values: { strong: ao },
            })),
            (P[29] = S))
          : (S = P[29]),
        P[30] !== L ? ((I = (0, a.jsx)(th.P.li, { variants: L, children: S })), (P[30] = L), (P[31] = I)) : (I = P[31]),
        P[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.connectors_preview.rollout_plan.after_validation",
              defaultMessage:
                "<strong>Broader rollout:</strong> Expand access to more users and teams after stability, access-control settings, and admin controls are confirmed.",
              description:
                "Second bullet in the example rollout plan shown in the connectors preview chat on the new workspace onboarding flow. The strong tag emphasizes the rollout phase label for a fictional internal project. 'Broader rollout' means expanding to more users or teams after validation, not granting higher privileges.",
              values: { strong: ai },
            })),
            (P[32] = E))
          : (E = P[32]),
        P[33] !== L ? ((N = (0, a.jsx)(th.P.li, { variants: L, children: E })), (P[33] = L), (P[34] = N)) : (N = P[34]),
        P[35] !== I || P[36] !== N
          ? ((j = (0, a.jsxs)("div", {
              children: [
                k,
                (0, a.jsxs)("ul", {
                  className: "list-disc ps-5 text-base leading-6.5 text-secondary",
                  children: [I, N],
                }),
              ],
            })),
            (P[35] = I),
            (P[36] = N),
            (P[37] = j))
          : (j = P[37]),
        P[38] !== L || P[39] !== j
          ? ((T = (0, a.jsxs)(th.P.div, { className: "-mt-1 w-full max-w-180", variants: L, children: [A, j] })),
            (P[38] = L),
            (P[39] = j),
            (P[40] = T))
          : (T = P[40]),
        P[41] !== u || P[42] !== x || P[43] !== w || P[44] !== T || P[45] !== c || P[46] !== H
          ? ((O = (0, a.jsx)("div", {
              className:
                "relative h-full w-full overflow-hidden rounded-[40px] border border-default mask-b-from-80% mask-b-to-100%",
              "aria-hidden": "true",
              children: (0, a.jsx)("div", {
                className: "pointer-events-none absolute inset-0",
                children: (0, a.jsxs)(th.P.div, {
                  className: "absolute inset-x-6 top-8 flex flex-col gap-3",
                  variants: c,
                  initial: H,
                  animate: "show",
                  children: [u, x, w, T],
                }),
              }),
            })),
            (P[41] = u),
            (P[42] = x),
            (P[43] = w),
            (P[44] = T),
            (P[45] = c),
            (P[46] = H),
            (P[47] = O))
          : (O = P[47]),
        P[48] !== n || P[49] !== O
          ? ((M = (0, a.jsx)("div", {
              className: "relative h-full w-full shrink-0 p-3 select-none max-[839px]:hidden md:w-1/2 md:p-4",
              role: "img",
              "aria-label": n,
              children: O,
            })),
            (P[48] = n),
            (P[49] = O),
            (P[50] = M))
          : (M = P[50]),
        M
      )
    }
    function ai(e) {
      return (0, a.jsx)("span", { className: "font-semibold text-default", children: e })
    }
    function ao(e) {
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
        o,
        c,
        d,
        u,
        p,
        h,
        m,
        f,
        _,
        b,
        y,
        x,
        C,
        w,
        v = (0, i.c)(41),
        { apps: A, busy: k, error: S, notice: I, onConnect: E, onContinue: N, onSkip: j } = e,
        T = (0, s.A)(),
        O = (0, n8.Y)(),
        [M, P] = (0, r.useState)(!1)
      v[0] !== A ? ((t = A?.filter(ad).length ?? 0), (v[0] = A), (v[1] = t)) : (t = v[1])
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
          ? ((o = (0, a.jsx)("p", {
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
      let D = !M && "[mask-image:linear-gradient(180deg,black_80%,transparent_100%)]"
      ;(v[9] !== D
        ? ((d = (0, ei.A)("mx-6 mt-3 grow overflow-auto rounded-2xl p-3", D)), (v[9] = D), (v[10] = d))
        : (d = v[10]),
        v[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (e) => {
              let t = e.currentTarget
              P(t.scrollTop + t.clientHeight >= t.scrollHeight - 2)
            }),
            (v[11] = u))
          : (u = v[11]),
        v[12] !== A || v[13] !== k || v[14] !== O || v[15] !== S || v[16] !== T || v[17] !== E
          ? ((p =
              S ??
              (0, a.jsx)("div", {
                className: "grid grid-cols-2 gap-2",
                "aria-busy": null == A,
                children:
                  null == A
                    ? Array.from({ length: 6 }, ac)
                    : A.map((e) => {
                        let t = O ? (e.logoUrlDark ?? e.logoUrl) : (e.logoUrl ?? e.logoUrlDark)
                        return (0, a.jsxs)(
                          "button",
                          {
                            type: "button",
                            "aria-label": e.connected
                              ? T.formatMessage(
                                  {
                                    id: "chatgpt.onboarding.new_workspace.connectors.app.connected",
                                    defaultMessage: "{appName} is connected",
                                    description:
                                      "Accessible label for an already-connected app in workspace onboarding; appName is its display name",
                                  },
                                  { appName: e.name },
                                )
                              : T.formatMessage(
                                  {
                                    id: "chatgpt.onboarding.new_workspace.connectors.app.connect",
                                    defaultMessage: "Connect {appName}",
                                    description:
                                      "Accessible label for selecting or connecting an app in workspace onboarding; appName is its display name",
                                  },
                                  { appName: e.name },
                                ),
                            "aria-disabled": e.connected || k,
                            className: (0, ei.A)(
                              "group flex min-w-0 grow flex-col rounded-xl border border-default p-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden",
                              !e.connected && !k && "cursor-interaction hover:bg-surface-tertiary",
                            ),
                            onClick: () => {
                              k || E?.(e.id)
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
                                    className: (0, ei.A)(
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
                                      values: { count: T.formatNumber(e.teammateCount) },
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
            (v[13] = k),
            (v[14] = O),
            (v[15] = S),
            (v[16] = T),
            (v[17] = E),
            (v[18] = p))
          : (p = v[18]),
        v[19] !== I || v[20] !== d || v[21] !== p
          ? ((h = (0, a.jsxs)("div", { className: d, onScroll: u, children: [I, p] })),
            (v[19] = I),
            (v[20] = d),
            (v[21] = p),
            (v[22] = h))
          : (h = v[22]))
      let G = k || null == A || 0 === R
      return (
        v[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(l.A, {
              id: "educationOnboarding.apps.continue",
              defaultMessage: "Continue to Workspace",
              description: "Completes education workspace onboarding after connecting at least one app",
            })),
            (v[23] = m))
          : (m = v[23]),
        v[24] !== N || v[25] !== G
          ? ((f = (0, a.jsx)(g.$, {
              color: "chatgptPrimary",
              size: "panelAction",
              radius: "full",
              className: "w-70",
              disabled: G,
              onClick: N,
              children: m,
            })),
            (v[24] = N),
            (v[25] = G),
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
        v[28] !== k || v[29] !== j
          ? ((b = (0, a.jsx)(g.$, {
              color: "ghost",
              size: "dialogAction",
              radius: "full",
              disabled: k,
              onClick: j,
              children: _,
            })),
            (v[28] = k),
            (v[29] = j),
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
                (0, a.jsx)("div", { className: "size-6", children: (0, a.jsx)(es.y, {}) }),
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
    function au(e) {
      let t,
        n,
        r,
        s,
        c,
        d = (0, i.c)(38),
        u = (0, o.gh)(y.u)
      d[0] !== e.planType ? ((t = (0, w.V$)(e.planType)), (d[0] = e.planType), (d[1] = t)) : (t = d[1])
      let p = t
      d[2] !== e || d[3] !== u
        ? ((n = () => {
            ;((0, S.yy)(u, tr.aH3, {}), e.onFinish())
          }),
          (d[2] = e),
          (d[3] = u),
          (d[4] = n))
        : (n = d[4])
      let h = n
      d[5] !== p || d[6] !== e.identity
        ? ((r = { ...e.identity, education: p }), (d[5] = p), (d[6] = e.identity), (d[7] = r))
        : (r = d[7])
      let { data: m, isPending: f, isError: _, refetch: b } = (0, o._U)(n1, r),
        x = !p
      d[8] !== x ? ((s = { enabled: x }), (d[8] = x), (d[9] = s)) : (s = d[9])
      let { data: C, isPending: v } = (0, o._U)(n3, e.identity, s)
      if (f || (!p && v)) {
        let t
        if (p) {
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
        let t, n, i, o, r, s, c
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
            ? ((i = (0, a.jsx)(l.A, {
                id: "workspaceOnboarding.retry",
                defaultMessage: "Try again",
                description: "Retries the failed onboarding action",
              })),
              (d[18] = i))
            : (i = d[18]),
          d[19] !== n ? ((o = (0, a.jsx)(g.$, { onClick: n, children: i })), (d[19] = n), (d[20] = o)) : (o = d[20]),
          d[21] !== p || d[22] !== e.onFinish
            ? ((r = p
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
              (d[21] = p),
              (d[22] = e.onFinish),
              (d[23] = r))
            : (r = d[23]),
          d[24] !== o || d[25] !== r
            ? ((s = (0, a.jsxs)("div", {
                role: "alert",
                className: "flex flex-col gap-4 text-center",
                children: [t, o, r],
              })),
              (d[24] = o),
              (d[25] = r),
              (d[26] = s))
            : (s = d[26]))
        let u = s
        return (
          d[27] !== p || d[28] !== u || d[29] !== e.busy || d[30] !== e.onFinish || d[31] !== h
            ? ((c = p ? (0, a.jsx)(al, { apps: [], busy: e.busy, error: u, onContinue: e.onFinish, onSkip: h }) : u),
              (d[27] = p),
              (d[28] = u),
              (d[29] = e.busy),
              (d[30] = e.onFinish),
              (d[31] = h),
              (d[32] = c))
            : (c = d[32]),
          c
        )
      }
      let A = C?.provider ?? null
      return (
        d[33] !== m || d[34] !== p || d[35] !== e || d[36] !== A
          ? ((c = (0, a.jsx)(ap, { ...e, apps: m, provider: A, education: p })),
            (d[33] = m),
            (d[34] = p),
            (d[35] = e),
            (d[36] = A),
            (d[37] = c))
          : (c = d[37]),
        c
      )
    }
    function ap(e) {
      let t,
        n,
        c,
        d,
        u,
        p,
        h,
        m,
        f = (0, i.c)(30),
        { identity: _, planType: b, apps: x, provider: C, education: w, busy: v, beforeOAuth: A, onFinish: k } = e,
        I = (0, o.gh)(y.u),
        E = (0, s.A)(),
        { client: N } = (0, z.cn)(),
        { markAppConnectOAuthPending: j } = (0, G.ZN)(),
        T = (0, r.useRef)(!1),
        O = (0, r.useRef)(new Set()),
        M = (0, r.useRef)(!1),
        [D, L] = (0, r.useState)(!1)
      f[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (f[0] = t)) : (t = f[0])
      let [B, H] = (0, r.useState)(t)
      f[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (f[1] = n)) : (n = f[1])
      let [W, F] = (0, r.useState)(n),
        [U, V] = (0, r.useState)(null),
        q = (0, nW.o)(b),
        $ = !w && (q || "team" === b || "self_serve_business_prolite" === b)
      f[2] !== W
        ? ((c = (e) => ({ ...e, connected: e.connected || W.includes(e.connector.id) })), (f[2] = W), (f[3] = c))
        : (c = f[3])
      let Y = n4(x.map(c), C, N, b),
        Z = Y.find(av),
        J = $ && null != Z
      f[4] !== W
        ? ((d = (e) => ({ ...e, connected: e.connected || W.includes(e.connector.id) })), (f[4] = W), (f[5] = d))
        : (d = f[5])
      let Q = x.map(d),
        X = w ? Q.sort(aw) : x
      ;(J ? (X = Y) : w || (X = [...x].sort(aC).slice(0, 6)),
        f[6] !== W ? ((u = (e) => e.connected || W.includes(e.connector.id)), (f[6] = W), (f[7] = u)) : (u = f[7]))
      let ee = X.filter(u),
        et = X.filter((e) => !ee.includes(e))
      f[8] !== B ? ((p = (e) => !B.includes(e.connector.id)), (f[8] = B), (f[9] = p)) : (p = f[9])
      let en = et.filter(p),
        ea =
          null == Z || null == C
            ? null
            : {
                connectorId: Z.connector.id,
                connectorName: Z.connector.name,
                connectorProvider: C,
                isEnterprise: q,
                onboardingExperience: nF,
              },
        ei = function (e, t) {
          if (v || 0 === e.length) return
          let [n, ...a] = e
          if (t && ea)
            (0, S.yy)(I, R.nT, {
              ...ea,
              selectedConnectorIds: e.map(ax),
              selectableConnectorIds: et.map(ay),
              alreadyConnectedConnectorIds: ee.map(ab),
              selectedConnectorCount: (0, P.At)(e.length),
              selectableConnectorCount: (0, P.At)(et.length),
              alreadyConnectedConnectorCount: (0, P.At)(ee.length),
              allSelectableSelected: e.length === et.length,
            })
          else if (w) {
            if (
              ((0, S.yy)(I, tr.AKq, { id: n.connector.id, name: n.connector.name, isSync: !1, connected: n.connected }),
              n.connected)
            )
              return
          } else
            nz(I, !1, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONNECT_CLICKED", n.connector.id)
          ;(L(!1), V({ app: n, companions: a, recommended: t }))
        },
        eo = w ? "h-full w-full" : "flex w-full max-w-lg flex-col gap-6",
        er = (e) => {
          if (e) {
            if (0 === X.length) {
              M.current || ((M.current = !0), k())
              return
            }
            if (J && ea)
              for (let { connector: e } of X)
                O.current.has(e.id) ||
                  (O.current.add(e.id), (0, S.yy)(I, R.tT, { ...ea, connectorId: e.id, connectorName: e.name }))
            !T.current &&
              ((T.current = !0),
              (J && ea) || nz(I, w, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SHOWN"))
          }
        },
        es = w
          ? (0, a.jsx)(al, {
              apps: X.map(a_),
              busy: v,
              notice: D
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
                let t = X.find((t) => t.connector.id === e)
                t && ei([t], !1)
              },
              onContinue: () => {
                ;((0, S.yy)(I, tr.CCm, { connectedCount: (0, P.At)(ee.length) }), k())
              },
              onSkip: () => {
                ;((0, S.yy)(I, tr.aH3, {}), k())
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
                D
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
                  children: X.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className: "relative flex items-center gap-3",
                        children: [
                          J
                            ? (0, a.jsx)(n5.S, {
                                id: e.connector.id,
                                checked: ee.includes(e) || !B.includes(e.connector.id),
                                disabled: v || ee.includes(e),
                                onCheckedChange: (t) =>
                                  H((n) => (t ? n.filter((t) => t !== e.connector.id) : [...n, e.connector.id])),
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
                          ee.includes(e)
                            ? (0, a.jsx)("span", {
                                className: "text-sm text-secondary",
                                children: (0, a.jsx)(l.A, {
                                  id: "workspaceOnboarding.apps.connected",
                                  defaultMessage: "Connected",
                                  description: "Indicates this workspace app is already connected",
                                }),
                              })
                            : null,
                          ee.includes(e) || J
                            ? null
                            : (0, a.jsx)(g.$, {
                                color: "secondary",
                                disabled: v,
                                onClick: () => ei([e], !1),
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
                J
                  ? (0, a.jsx)(g.$, {
                      size: "beaconAction",
                      disabled: v || 0 === en.length,
                      onClick: () => ei(en, !0),
                      children: (0, a.jsx)(l.A, {
                        id: "workspaceOnboarding.apps.connectSelected",
                        defaultMessage: "Connect selected apps",
                        description: "Opens consent for only the selected workspace apps",
                      }),
                    })
                  : (0, a.jsx)(g.$, {
                      size: "beaconAction",
                      disabled: v || 0 === ee.length,
                      onClick: () => {
                        ;(nz(I, w, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_CONTINUE_CLICKED"),
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
                  disabled: v,
                  onClick: () => {
                    ;(J && ea
                      ? (0, S.yy)(I, R.qo, ea)
                      : nz(I, w, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_FALLBACK_SKIPPED"),
                      k())
                  },
                  children: (0, a.jsx)(l.A, {
                    id: "workspaceOnboarding.apps.later",
                    defaultMessage: "Set up later",
                    description: "Completes onboarding without connecting apps",
                  }),
                }),
              ],
            })
      return (
        f[10] !== A ||
        f[11] !== N ||
        f[12] !== U ||
        f[13] !== w ||
        f[14] !== _ ||
        f[15] !== E ||
        f[16] !== j ||
        f[17] !== k ||
        f[18] !== b ||
        f[19] !== C ||
        f[20] !== I ||
        f[21] !== V ||
        f[22] !== F ||
        f[23] !== L
          ? ((h =
              null == U
                ? null
                : (0, a.jsx)(K.Z, {
                    app: {
                      id: U.app.connector.id,
                      name: U.app.connector.name,
                      description: U.app.connector.description,
                      logoUrl: U.app.connector.logo_url,
                      logoUrlDark: U.app.connector.logo_url_dark ?? null,
                      distributionChannel: U.app.connector.distribution_channel ?? null,
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
                    requestedCompanionConnectorIds: U.companions.map(af),
                    appConnectOptions: {
                      connectorId: U.app.connector.id,
                      productSku: "CONNECTOR_SETTING",
                      oauthReferrer: "workspace_onboarding",
                      redirectAfter: "/",
                      oauthPresentation: "popup",
                    },
                    connectionDisclosure: (0, a.jsx)(l.A, {
                      id: "workspaceOnboarding.apps.selectedDisclosure",
                      defaultMessage: "You’re connecting {apps}",
                      description: "Lists exactly the apps selected by the user before granting consent",
                      values: { apps: E.formatList([U.app, ...U.companions].map(ag)) },
                    }),
                    beforeConnect: async () => {
                      let e = I.query.snapshot(n1, { ..._, education: w })
                      await e.invalidate()
                      let t = await e.fetch(),
                        n = [U.app, ...U.companions],
                        a = U.recommended
                          ? n4(t, C, N, b)
                          : t.filter((e) => !w || "ONLY_ME" !== e.connector.status || !0 === I.get(nZ, _))
                      return n.some((e) => !a.some((t) => t.connector.id === e.connector.id && !t.connected))
                        ? (V(null), L(!0), !1)
                        : (U.recommended && (await A()), !0)
                    },
                    onOpenChange: (e) => {
                      e || V(null)
                    },
                    onConnected: () => {
                      ;(F((e) => [...e, U.app.connector.id, ...U.companions.map(am)]), V(null), U.recommended && k())
                    },
                    onOAuthStarted: (e) =>
                      j({
                        ...e,
                        appConnectOptions: {
                          connectorId: U.app.connector.id,
                          productSku: "CONNECTOR_SETTING",
                          oauthReferrer: "workspace_onboarding",
                          redirectAfter: "/",
                          oauthPresentation: "popup",
                        },
                        returnTo: "/onboarding",
                        resumeTarget: {
                          kind: "return-to-location-state",
                          requiredConnectorIds: [U.app, ...U.companions].map(ah),
                          successState: { workspaceOnboardingResume: { ..._, complete: U.recommended } },
                          failureState: { workspaceOnboardingResume: { ..._, complete: !1 } },
                        },
                      }),
                  })),
            (f[10] = A),
            (f[11] = N),
            (f[12] = U),
            (f[13] = w),
            (f[14] = _),
            (f[15] = E),
            (f[16] = j),
            (f[17] = k),
            (f[18] = b),
            (f[19] = C),
            (f[20] = I),
            (f[21] = V),
            (f[22] = F),
            (f[23] = L),
            (f[24] = h))
          : (h = f[24]),
        f[25] !== h || f[26] !== eo || f[27] !== er || f[28] !== es
          ? ((m = (0, a.jsxs)("div", { className: eo, ref: er, children: [es, h] })),
            (f[25] = h),
            (f[26] = eo),
            (f[27] = er),
            (f[28] = es),
            (f[29] = m))
          : (m = f[29]),
        m
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
    function aA(e) {
      let t,
        n,
        r,
        s,
        c,
        d,
        u,
        p,
        h,
        m = (0, i.c)(15),
        { onDownload: f, onContinue: _ } = e,
        b = (0, o.gh)(y.u),
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
              ;((0, eV.M)(b), f())
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
          ? ((u = (0, a.jsx)(l.A, {
              id: "chatgpt.onboarding.new_workspace.codex_screen.maybe_later",
              defaultMessage: "Maybe later",
              description: "Skips the desktop app recommendation and continues onboarding",
            })),
            (m[9] = u))
          : (u = m[9]),
        m[10] !== _
          ? ((p = (0, a.jsx)(g.$, { color: "ghostActive", size: "beaconAction", onClick: _, children: u })),
            (m[10] = _),
            (m[11] = p))
          : (p = m[11]),
        m[12] !== d || m[13] !== p
          ? ((h = (0, a.jsxs)("div", {
              className: "flex w-full max-w-lg flex-col gap-6 text-center",
              children: [t, n, r, d, p],
            })),
            (m[12] = d),
            (m[13] = p),
            (m[14] = h))
          : (h = m[14]),
        h
      )
    }
    let ak = (0, ti.YK)({
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
        { id: "student", displayValue: ak.student },
        { id: "faculty_professor", displayValue: ak.faculty_professor },
        { id: "researcher", displayValue: ak.researcher },
        { id: "academic_administrator", displayValue: ak.academic_administrator },
        { id: "campus_staff", displayValue: ak.campus_staff },
        { id: "it_technology_leader", displayValue: ak.it_technology_leader },
        { id: "other", displayValue: ak.other },
      ],
      aI = {
        student: (0, a.jsx)(eu.L$D, {}),
        faculty_professor: (0, a.jsx)(eu._NU, {}),
        researcher: (0, a.jsx)(eu.sBI, {}),
        academic_administrator: (0, a.jsx)(eu.TGw, {}),
        campus_staff: (0, a.jsx)(e4, { className: "icon-base shrink-0", "aria-hidden": !0 }),
        it_technology_leader: (0, a.jsx)(eu.h3q, {}),
        other: (0, a.jsx)(er.I, { asset: e1.O }),
      }
    function aE(e) {
      let t,
        n,
        o,
        r,
        s = (0, i.c)(7),
        { value: c, disabled: d, onSelect: u } = e,
        p = void 0 !== d && d
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
        s[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = aS.map(aN)), (s[2] = o)) : (o = s[2]),
        s[3] !== p || s[4] !== u || s[5] !== c
          ? ((r = (0, a.jsx)(el.P, {
              className:
                "max-h-full min-h-0 justify-between self-center overflow-hidden max-sm:h-full max-sm:px-6 max-sm:pt-10 max-sm:pb-5 sm:max-w-175",
              children: (0, a.jsxs)("div", {
                className: "flex min-h-0 w-full flex-1 flex-col",
                children: [
                  n,
                  (0, a.jsx)(e0, { options: o, value: c, fullWidthOption: "other", disabled: p, onSelect: u }),
                ],
              }),
            })),
            (s[3] = p),
            (s[4] = u),
            (s[5] = c),
            (s[6] = r))
          : (r = s[6]),
        r
      )
    }
    function aN(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }), icon: aI[e.id] }
    }
    function aj(e) {
      let t,
        n,
        l,
        c,
        d,
        u,
        p,
        h,
        m,
        g,
        f,
        _,
        b,
        x = (0, i.c)(65),
        { identity: C, planType: v, resumeApps: k, onComplete: I } = e,
        N = (0, o.gh)(y.u),
        j = (0, s.A)()
      x[0] !== v ? ((t = (0, w.V$)(v)), (x[0] = v), (x[1] = t)) : (t = x[1])
      let T = t,
        [O, M] = (0, r.useState)(k ? "apps" : "role"),
        [P, D] = (0, r.useState)(""),
        [G, L] = (0, r.useState)(!1),
        [B, H] = (0, r.useState)(!1),
        W = (0, r.useRef)(null),
        F = (0, r.useRef)(!1),
        U = (0, r.useRef)(null),
        K = (0, r.useRef)(!1),
        z = (0, r.useRef)(!1),
        V = (0, r.useRef)(aR)
      x[2] !== T
        ? ((n = () =>
            T
              ? aS
              : [
                  ...eX()(Object.entries(e2.V).filter(aP)).map(aM),
                  { id: "something_else", displayValue: e2.V.something_else },
                ]),
          (x[2] = T),
          (x[3] = n))
        : (n = x[3])
      let [q] = (0, r.useState)(n)
      ;(x[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () => () => {
            ;(W.current?.abort(), U.current?.abort())
          }),
          (c = []),
          (x[4] = l),
          (x[5] = c))
        : ((l = x[4]), (c = x[5])),
        (0, r.useEffect)(l, c),
        x[6] !== T || x[7] !== P || x[8] !== N
          ? ((d = function (e, t) {
              let n = void 0 === t ? P : t
              ;(M(e),
                nK(N, T, e),
                "download" === e &&
                  (0, S.yy)(N, A.se, { role: n, isEngineering: "engineering" === n, isChatgptDesktopAppCopy: !0 }))
            }),
            (x[6] = T),
            (x[7] = P),
            (x[8] = N),
            (x[9] = d))
          : (d = x[9]))
      let $ = d
      x[10] !== T || x[11] !== C || x[12] !== N
        ? ((u = async function (e) {
            ;(e.throwIfAborted(), !z.current) &&
              ((0, S.yy)(N, A.HE, { productSurface: T ? "chatgpt_for_education" : void 0 }),
              nz(N, T, "CHATGPT_KNOWLEDGE_PRODUCT_WORKSPACE_ONBOARDING_ACTION_COMPLETED"),
              await (0, to.de)(N, C, e).catch((t) => {
                if ("AbortError" === t.name) throw t
                e.throwIfAborted()
              }),
              e.throwIfAborted(),
              (z.current = !0),
              T && (0, E.Jl)(N, C))
          }),
          (x[10] = T),
          (x[11] = C),
          (x[12] = N),
          (x[13] = u))
        : (u = x[13])
      let Y = u
      x[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = async function (e) {
            if (K.current) return
            let t = new AbortController()
            ;((W.current = t),
              (K.current = !0),
              (V.current = e),
              L(!0),
              H(!1),
              await e(t.signal)
                .catch(() => {
                  t.signal.aborted || H(!0)
                })
                .finally(() => {
                  ;((K.current = !1), t.signal.aborted || L(!1))
                }))
          }),
          (x[14] = p))
        : (p = x[14])
      let Z = p
      x[15] !== $ || x[16] !== T || x[17] !== C || x[18] !== j || x[19] !== v || x[20] !== q || x[21] !== N
        ? ((h = function (e) {
            ;(D(e),
              (0, S.yy)(N, A.R5, { role: e, productSurface: T ? "chatgpt_for_education" : void 0 }),
              Z(async (t) => {
                let n = q.find((t) => t.id === e)
                ;(await (0, to.Qm)(
                  N,
                  C,
                  {
                    role: e,
                    departments: [],
                    role_label: T && n ? j.formatMessage(n.displayValue) : void 0,
                    role_product_surface: T ? "chatgpt_for_education" : void 0,
                    role_updated_at: T ? new Date().toISOString() : void 0,
                  },
                  null,
                  t,
                ),
                  t.throwIfAborted(),
                  $("apps", e))
              }))
          }),
          (x[15] = $),
          (x[16] = T),
          (x[17] = C),
          (x[18] = j),
          (x[19] = v),
          (x[20] = q),
          (x[21] = N),
          (x[22] = h))
        : (h = x[22])
      let J = h
      if ("role" === O) {
        let e
        ;(x[23] !== G || x[24] !== T || x[25] !== P || x[26] !== q || x[27] !== J
          ? ((e = T
              ? (0, a.jsx)(aE, { value: P, disabled: G, onSelect: J }, "role")
              : (0, a.jsx)(tq, { value: P, options: q.map(aO), disabled: G, onSelect: J })),
            (x[23] = G),
            (x[24] = T),
            (x[25] = P),
            (x[26] = q),
            (x[27] = J),
            (x[28] = e))
          : (e = x[28]),
          (m = e))
      } else if ("download" === O) {
        let e, t, n
        ;(x[29] !== $ || x[30] !== P || x[31] !== N
          ? ((e = () => {
              ;((0, S.yy)(N, A.tx, { role: P, isEngineering: "engineering" === P, isChatgptDesktopAppCopy: !0 }),
                $("apps"))
            }),
            (x[29] = $),
            (x[30] = P),
            (x[31] = N),
            (x[32] = e))
          : (e = x[32]),
          x[33] !== $ ? ((t = () => $("apps")), (x[33] = $), (x[34] = t)) : (t = x[34]),
          x[35] !== t || x[36] !== e
            ? ((n = (0, a.jsx)(aA, { onDownload: e, onContinue: t })), (x[35] = t), (x[36] = e), (x[37] = n))
            : (n = x[37]),
          (m = n))
      } else {
        let e, t, n
        ;(x[38] !== Y
          ? ((e = async () => {
              let e = new AbortController()
              ;((W.current = e), await Y(e.signal))
            }),
            (x[38] = Y),
            (x[39] = e))
          : (e = x[39]),
          x[40] !== Y || x[41] !== I
            ? ((t = () =>
                void Z(async (e) => {
                  ;(await Y(e), I())
                })),
              (x[40] = Y),
              (x[41] = I),
              (x[42] = t))
            : (t = x[42]),
          x[43] !== G || x[44] !== C || x[45] !== v || x[46] !== t || x[47] !== e
            ? ((n = (0, a.jsx)(au, { identity: C, planType: v, busy: G, beforeOAuth: e, onFinish: t }, "apps")),
              (x[43] = G),
              (x[44] = C),
              (x[45] = v),
              (x[46] = t),
              (x[47] = e),
              (x[48] = n))
            : (n = x[48]),
          (m = n))
      }
      let Q = T ? "education" : "default"
      return (
        x[49] === Symbol.for("react.memo_cache_sentinel") ? ((g = () => void Z(V.current)), (x[49] = g)) : (g = x[49]),
        x[50] !== T || x[51] !== C || x[52] !== v || x[53] !== N || x[54] !== O
          ? ((f = () => {
              if (!F.current && ((F.current = !0), nK(N, T, O), !T)) {
                let e = new AbortController()
                ;((U.current = e),
                  N.query
                    .snapshot(n3, C)
                    .fetch()
                    .then((t) => {
                      let n = (0, nW.o)(v)
                      !e.signal.aborted &&
                        (n || "team" === v || "self_serve_business_prolite" === v) &&
                        (0, S.yy)(N, R.CI, {
                          connectorProvider: t.provider ?? "none",
                          hasRecommendation: null != t.provider,
                          isEnterprise: n,
                          requestSucceeded: t.requestSucceeded,
                          onboardingExperience: nF,
                        })
                    })
                    .catch(aT))
              }
            }),
            (x[50] = T),
            (x[51] = C),
            (x[52] = v),
            (x[53] = N),
            (x[54] = O),
            (x[55] = f))
          : (f = x[55]),
        x[56] !== m || x[57] !== T
          ? ((_ = T ? (0, a.jsx)(tp.N, { mode: "wait", children: m }) : m), (x[56] = m), (x[57] = T), (x[58] = _))
          : (_ = x[58]),
        x[59] !== G || x[60] !== B || x[61] !== f || x[62] !== _ || x[63] !== Q
          ? ((b = (0, a.jsx)(np, { layout: Q, busy: G, error: B, onRetry: g, onShown: f, children: _ })),
            (x[59] = G),
            (x[60] = B),
            (x[61] = f),
            (x[62] = _),
            (x[63] = Q),
            (x[64] = b))
          : (b = x[64]),
        b
      )
    }
    function aT() {}
    function aO(e) {
      return { id: e.id, label: (0, a.jsx)(l.A, { ...e.displayValue }) }
    }
    function aM(e) {
      let [t, n] = e
      return { id: t, displayValue: n }
    }
    function aP(e) {
      let [t] = e
      return "student" !== t && "something_else" !== t
    }
    async function aR() {}
    let aD = (0, _._)(async () => (await n.e(229160).then(n.bind(n, "slvF"))).WorkspaceJoinerOnboardingFlow, {
      fallback: (0, a.jsx)(b.LoadingPage, { delay: !1 }),
    })
    function aG(e) {
      var t, n
      let r,
        _,
        A,
        k,
        S,
        I,
        N,
        j,
        T,
        M = (0, i.c)(81),
        { fallback: P } = e,
        R = (0, o.gh)(y.u),
        { accountId: D, userId: G, authMethod: L, isLoading: B } = (0, u.As)()
      M[0] === Symbol.for("react.memo_cache_sentinel") ? ((r = { enabled: !1 }), (M[0] = r)) : (r = M[0])
      let H = (0, o._U)(p.f, D, r),
        W = (0, o.Ul)(d.m0),
        F = (0, o.Ul)(d.chatGptAuthenticatedAccountId$),
        U = (0, o.Ul)(d.chatGptAuthenticatedUserId$),
        K = (0, c.Zp)(),
        z = (0, c.zy)(),
        V = (0, s.A)(),
        [q] = (0, c.ok)(),
        $ = (0, o.Ul)(h.Sk),
        Y = (0, o._U)(x.JW, "4100765009"),
        Z = (0, o._U)(x.JW, "3011809797")
      if (B) {
        let e
        return (
          M[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (M[1] = e))
            : (e = M[1]),
          e
        )
      }
      if ("chatgpt" !== L || "debugOverride" in W) return P
      if ("loading" === W.status || (null != D && H.isPending)) {
        let e
        return (
          M[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (M[2] = e))
            : (e = M[2]),
          e
        )
      }
      M[3] !== D || M[4] !== H
        ? ((_ = null != D && H.isSuccess && H.data.account_ordering.includes(D) ? H.data.accounts[D] : void 0),
          (M[3] = D),
          (M[4] = H),
          (M[5] = _))
        : (_ = M[5])
      let J = _,
        Q = J?.account
      if (
        null == D ||
        null == G ||
        ("denied" === W.status && ("unsupported-plan" !== W.reason || !(0, nB.jU)(J))) ||
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
          M[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "onboarding.accountUnavailable",
                defaultMessage: "Unable to load your workspace",
                description: "Error when the active workspace cannot be loaded for onboarding",
              })),
              (M[6] = e))
            : (e = M[6]),
          M[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(f.A, {
                layout: "page",
                title: e,
                actions: (0, a.jsx)(g.$, {
                  onClick: aL,
                  children: (0, a.jsx)(l.A, {
                    id: "onboarding.retryAccount",
                    defaultMessage: "Try again",
                    description: "Reload the page to retry loading the active workspace and identity for onboarding",
                  }),
                }),
              })),
              (M[7] = t))
            : (t = M[7]),
          t
        )
      }
      if (("allowed" === W.status && W.accountId !== D) || F !== D || U !== G || $ !== D) {
        let e
        return (
          M[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(b.LoadingPage, {})), (M[8] = e))
            : (e = M[8]),
          e
        )
      }
      M[9] !== D || M[10] !== G
        ? ((A = { accountId: D, userId: G }), (M[9] = D), (M[10] = G), (M[11] = A))
        : (A = M[11])
      let X = A
      M[12] !== Q.plan_type
        ? ((k = (0, w.Hw)(Q.plan_type) && !/iPad|iPhone|iPod|Android|Tablet/.test((0, C.$)())),
          (M[12] = Q.plan_type),
          (M[13] = k))
        : (k = M[13])
      let ee = k,
        et = `${D}:${G}`
      M[14] !== Q.plan_type || M[15] !== X || M[16] !== ee || M[17] !== et
        ? ((S = (0, a.jsx)(tn, { identity: X, planType: Q.plan_type, showDesktopDownload: ee }, et)),
          (M[14] = Q.plan_type),
          (M[15] = X),
          (M[16] = ee),
          (M[17] = et),
          (M[18] = S))
        : (S = M[18])
      let en = S
      M[19] !== Q || M[20] !== Z || M[21] !== Y
        ? ((t = { k12: Y, health: Z }),
          (I =
            "workspace" !== Q.structure
              ? "personal"
              : "k12" === Q.plan_type || t.k12
                ? "k12"
                : Q.is_fedramp_compliant_workspace
                  ? null
                  : "hc" === Q.plan_type || "hc_consumption" === Q.plan_type || "quorum" === Q.plan_type || t.health
                    ? "health"
                    : "workspace"),
          (M[19] = Q),
          (M[20] = Z),
          (M[21] = Y),
          (M[22] = I))
        : (I = M[22])
      let ea = I
      if (
        "health" !== ea &&
        ((n = navigator),
        ((/iPad|iPhone|iPod/.test(n.userAgent) || ("MacIntel" === n.platform && n.maxTouchPoints > 1)) &&
          "ios" === q.get("from_webview")) ||
          ["promoCode", "referralCode", "partnerActivationToken"].some((e) => q.has(e)))
      ) {
        let e,
          t = `?${q}`
        return (
          M[23] !== t
            ? ((e = (0, a.jsx)(c.C5, { to: { pathname: "/", search: t }, replace: !0 })), (M[23] = t), (M[24] = e))
            : (e = M[24]),
          e
        )
      }
      M[25] !== z.state ? ((N = nL.safeParse(z.state)), (M[25] = z.state), (M[26] = N)) : (N = M[26])
      let ei = N,
        eo = ei.success ? ei.data.workspaceOnboardingResume : null,
        er = "workspace" === ea && eo?.accountId === D && eo.userId === G
      if (er && eo.complete) {
        let e
        return (
          M[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(c.C5, { to: "/", replace: !0 })), (M[27] = e))
            : (e = M[27]),
          e
        )
      }
      let es = `${D}:${G}:${ea}:${er ? z.key : ""}`
      M[28] !== z.search || M[29] !== K || M[30] !== q
        ? ((j = () => {
            K({ pathname: "/", search: "submit" === q.get(m.Wh) ? z.search : "" }, { replace: !0 })
          }),
          (M[28] = z.search),
          (M[29] = K),
          (M[30] = q),
          (M[31] = j))
        : (j = M[31])
      let el = j
      M[32] !== Q.name || M[33] !== V
        ? ((T =
            Q.name ??
            V.formatMessage({
              id: "onboarding.workspaceNameFallback",
              defaultMessage: "your workspace",
              description: "Workspace name used in onboarding when the account has no display name",
            })),
          (M[32] = Q.name),
          (M[33] = V),
          (M[34] = T))
        : (T = M[34])
      let ec = T
      switch (ea) {
        case "personal": {
          let e
          return (
            M[35] !== X || M[36] !== es || M[37] !== el
              ? ((e = (0, a.jsx)(nG, { identity: X, onComplete: el }, es)),
                (M[35] = X),
                (M[36] = es),
                (M[37] = el),
                (M[38] = e))
              : (e = M[38]),
            e
          )
        }
        case "k12": {
          let e, t
          return (
            M[39] !== X || M[40] !== el || M[41] !== R
              ? ((e = () => {
                  ;((0, E.Jl)(R, X), el())
                }),
                (M[39] = X),
                (M[40] = el),
                (M[41] = R),
                (M[42] = e))
              : (e = M[42]),
            M[43] !== X || M[44] !== es || M[45] !== e || M[46] !== ec
              ? ((t = (0, a.jsx)(nO, { identity: X, workspaceName: ec, onComplete: e }, es)),
                (M[43] = X),
                (M[44] = es),
                (M[45] = e),
                (M[46] = ec),
                (M[47] = t))
              : (t = M[47]),
            t
          )
        }
        case "health": {
          let e, t
          return (
            M[48] !== K
              ? ((e = () => {
                  !(0, v.Sv)({ type: "enterprise_onboarding_complete", reason: "completed" }) && K("/", { replace: !0 })
                }),
                (M[48] = K),
                (M[49] = e))
              : (e = M[49]),
            M[50] !== Q.plan_type || M[51] !== X || M[52] !== es || M[53] !== e || M[54] !== ec
              ? ((t = (0, a.jsx)(na, { identity: X, workspaceName: ec, planType: Q.plan_type, onComplete: e }, es)),
                (M[50] = Q.plan_type),
                (M[51] = X),
                (M[52] = es),
                (M[53] = e),
                (M[54] = ec),
                (M[55] = t))
              : (t = M[55]),
            t
          )
        }
        case "workspace": {
          let e, t, n, i
          M[56] !== Q.plan_type || M[57] !== X || M[58] !== er || M[59] !== es || M[60] !== el
            ? ((e = (0, a.jsx)(aj, { identity: X, planType: Q.plan_type, resumeApps: er, onComplete: el }, es)),
              (M[56] = Q.plan_type),
              (M[57] = X),
              (M[58] = er),
              (M[59] = es),
              (M[60] = el),
              (M[61] = e))
            : (e = M[61])
          let o = e
          if (er) return o
          M[62] !== q ? ((t = q.get("via")), (M[62] = q), (M[63] = t)) : (t = M[63])
          let r = "invite" === t
          return (
            M[64] !== Q.account_user_role ||
            M[65] !== Q.plan_type ||
            M[66] !== Q.profile_picture_url ||
            M[67] !== X ||
            M[68] !== z.state ||
            M[69] !== en ||
            M[70] !== ee ||
            M[71] !== r ||
            M[72] !== ec
              ? ((n =
                  (0, w.Hw)(Q.plan_type) && "account-owner" !== Q.account_user_role && !O(X, z.state)
                    ? (0, a.jsx)(nH, {
                        currentFlow: en,
                        joinerFlow: (0, a.jsx)(aD, {
                          invitePreviewAccepted: r,
                          identity: X,
                          planType: Q.plan_type,
                          workspaceName: ec,
                          workspaceImageUrl: Q.profile_picture_url ?? null,
                          showDesktopDownload: ee,
                        }),
                      })
                    : en),
                (M[64] = Q.account_user_role),
                (M[65] = Q.plan_type),
                (M[66] = Q.profile_picture_url),
                (M[67] = X),
                (M[68] = z.state),
                (M[69] = en),
                (M[70] = ee),
                (M[71] = r),
                (M[72] = ec),
                (M[73] = n))
              : (n = M[73]),
            M[74] !== o || M[75] !== X || M[76] !== es || M[77] !== n || M[78] !== r
              ? ((i = (0, a.jsx)(aB, { identity: X, viaInvite: r, fallback: o, children: n }, es)),
                (M[74] = o),
                (M[75] = X),
                (M[76] = es),
                (M[77] = n),
                (M[78] = r),
                (M[79] = i))
              : (i = M[79]),
            i
          )
        }
        case null: {
          let e
          return (
            M[80] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.C5, { to: "/", replace: !0 })), (M[80] = e))
              : (e = M[80]),
            e
          )
        }
      }
    }
    function aL() {
      return window.location.reload()
    }
    function aB(e) {
      let t = (0, i.c)(7),
        { identity: n, viaInvite: s, children: l, fallback: d } = e,
        u = (0, o.Ul)(E.Lu),
        p = (0, o.Ul)(E.s6),
        h = (0, o.Ul)(E.Q$),
        m = (0, c.zy)(),
        [g, f] = (0, r.useState)(!1),
        _ = "member" === p || ("member" === u && O(n, m.state))
      if ((!g && _ && f(!0), (0, nB.s2)(m.pathname, m.search))) {
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
        return (t[3] !== h ? ((e = (0, a.jsx)(c.C5, { to: h, replace: !0 })), (t[3] = h), (t[4] = e)) : (e = t[4]), e)
      }
      if (!g && !_) {
        if (s || O(n, m.state)) {
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
      i = n("SPnB"),
      o = n("YJm0"),
      r = n("g2p6"),
      s = n("AGHv"),
      l = n("Zzm6"),
      c = n("OWtl"),
      d = n("OMIV"),
      u = n("vw1R"),
      p = n("UR81"),
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
        let t = e(i.chatGptAuthenticatedAccountId$),
          n = null == t ? void 0 : e(o.f, t).data?.accounts?.[t]
        return (0, h.jU)(n) ? "/work" : "/"
      }),
      f = (0, a.un)(c.u, ({ get: e }) => {
        let t = e(i.m0)
        if ("loading" === t.status) return "pending"
        let n = e(i.chatGptAuthenticatedAccountId$)
        if (
          "debugOverride" in t ||
          null == n ||
          ("allowed" === t.status
            ? t.accountId !== n || "personal" === t.accountStructure
            : "unsupported-plan" !== t.reason) ||
          null == e(i.chatGptAuthenticatedUserId$)
        )
          return "ineligible"
        if (e(r.Sk) !== n) return "pending"
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
        let n = e(i.chatGptAuthenticatedAccountId$),
          a = e(i.chatGptAuthenticatedUserId$)
        if (null == n || null == a || e(m, { accountId: n, userId: a })) return "ineligible"
        let o = e(r.s6)
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
            "string" != typeof n && n.account_id === t.accountId && e.get(i.chatGptAuthenticatedUserId$) === t.userId
          )
        },
        s6: b,
      },
    )
  },
  Zzm6(e, t, n) {
    var a = n("zTeN"),
      i = n("SPnB"),
      o = n("Ghh3"),
      r = n("GTpx"),
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
    async function p(e, t, n, a, i) {
      let s = new AbortController(),
        l = i ? AbortSignal.any([i, s.signal]) : s.signal,
        c = h(e, t, s),
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
            e.queryClient.invalidateQueries({ queryKey: (0, r.Pm)(t) }),
          ]),
          l.throwIfAborted())
      } finally {
        c()
      }
    }
    function h(e, t, n) {
      return e.watch((e) => {
        let a = e.get(i.m0)
        ;("allowed" !== a.status ||
          "debugOverride" in a ||
          a.accountId !== t.accountId ||
          e.get(i.chatGptAuthenticatedAccountId$) !== t.accountId ||
          e.get(i.chatGptAuthenticatedUserId$) !== t.userId) &&
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
        RR: h,
        de: async function (e, t, n) {
          let a = new AbortController(),
            i = n ? AbortSignal.any([n, a.signal]) : a.signal,
            r = h(e, t, a)
          try {
            if ((i.throwIfAborted(), e.get(s.Sk) !== t.accountId))
              throw new DOMException("Workspace settings changed", "AbortError")
            let n = e.query.snapshot(s.s6)
            if (
              (await o.Request.safePost("/settings/announcement_viewed", {
                parameters: { query: { announcement_id: d } },
                additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
                signal: i,
              }),
              i.throwIfAborted(),
              e.get(s.Sk) !== t.accountId)
            )
              throw new DOMException("Workspace settings changed", "AbortError")
            ;(await n.cancel(),
              i.throwIfAborted(),
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
      i = n("yqKZ"),
      o = n("RF9q"),
      r = n("c3f5")
    function s({ content: e, metadata: t, preserveEmptySections: n = !1 }) {
      if (t?.[a.uV] === !0) return (0, a.I$)(t).map((e) => ({ content: e.content, id: e.id, tone: e.label }))
      let o = (0, i.b_)({ content: e, metadata: t, preserveEmptySections: n }),
        r = (0, i.b_)({ content: "", metadata: t })
      return null == o || null == r
        ? o
        : o.map((e, t) => {
            let n = r[t]
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
            i = (0, o.q4)((0, r.B)(e, "metadata")),
            l = s({ content: a, metadata: i, preserveEmptySections: !t })
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
            metadata: i,
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
      i = n("QosV"),
      o = n("zTAs"),
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
            u,
            p,
            h,
            m,
            g,
            f,
            _,
            b = (0, i.c)(29),
            {
              attributes: y,
              contentReferences: x,
              isStreaming: C,
              rawText: w,
              renderExtension: v,
              renderPersisted: A,
              testId: k,
            } = e
          if (b[0] !== y || b[1] !== x || b[2] !== C || b[3] !== w || b[4] !== v || b[5] !== A || b[6] !== k) {
            f = Symbol.for("react.early_return_sentinel")
            e: {
              n = (0, s.Is)({ attributes: y, isStreaming: C, rawText: w })
              let e = A?.(n)
              if (null != e) {
                f = (0, a.jsx)(a.Fragment, { children: e })
                break e
              }
              ;((t = r.i),
                (l = (0, o.Io)(n.content, { contentReferences: x, isStreaming: C })),
                (c = void 0),
                (d = n.emailMetadata),
                (u = !1),
                (p = v?.(n)),
                (h = k),
                (m = n.title),
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
              (b[6] = k),
              (b[7] = t),
              (b[8] = n),
              (b[9] = l),
              (b[10] = c),
              (b[11] = d),
              (b[12] = u),
              (b[13] = p),
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
              (u = b[12]),
              (p = b[13]),
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
              b[23] !== u ||
              b[24] !== p ||
              b[25] !== h ||
              b[26] !== m ||
              b[27] !== g
                ? ((_ = (0, a.jsx)(t, {
                    content: l,
                    editorKey: c,
                    emailMetadata: d,
                    isEditable: u,
                    render: p,
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
                  (b[23] = u),
                  (b[24] = p),
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
  m4Ej(e, t, n) {
    let a = (0, n("iJY0").a)({
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
      body: '<path d="M10.0767 5.80606C10.238 5.56537 10.5644 5.50044 10.8052 5.66152C11.0454 5.823 11.1107 6.14942 10.9497 6.39004L8.23682 10.4359C7.95882 10.8501 7.36738 10.897 7.02686 10.5326L5.604 9.0082C5.40628 8.79627 5.41761 8.46384 5.62939 8.26602C5.84136 8.06826 6.17377 8.07953 6.37158 8.29141L7.55713 9.56289L10.0767 5.80606Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25635 1.29824C7.73102 1.09073 8.27195 1.09065 8.74658 1.29824L12.7407 3.04531C13.4169 3.34123 13.8538 4.0104 13.854 4.74844V8.54531C13.854 10.3472 13.2194 11.7543 12.2017 12.8324C11.1956 13.8979 9.83539 14.6215 8.40381 15.1205L8.3999 15.1215C8.14437 15.2081 7.86737 15.205 7.61377 15.1137C6.17865 14.6181 4.81377 13.8979 3.8042 12.8334C2.7829 11.7564 2.146 10.349 2.146 8.54531V4.74844C2.14618 4.01019 2.58382 3.34111 3.26025 3.04531L7.25635 1.29824ZM8.32568 2.26016C8.11928 2.16991 7.88366 2.16995 7.67725 2.26016L3.68115 4.0082C3.387 4.13683 3.19696 4.42742 3.19678 4.74844V8.54531C3.19678 10.0747 3.7268 11.2249 4.56689 12.1107C5.31242 12.8967 6.31877 13.4914 7.45947 13.9389L7.95654 14.1215L7.96826 14.1254C7.99869 14.1366 8.03226 14.1378 8.06299 14.1273C9.40268 13.6599 10.5897 13.0092 11.438 12.1107C12.2753 11.2237 12.8042 10.0739 12.8042 8.54531V4.74844C12.804 4.42754 12.6138 4.13593 12.3198 4.00723L8.32568 2.26016Z" fill="currentColor"/>',
    })
    n.d(t, {}, { i: a })
  },
  IfMb(e, t, n) {
    let a = (0, n("iJY0").a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98755 1.47461C11.591 1.47481 14.5129 4.39646 14.5129 8C14.5129 11.6035 11.591 14.5252 7.98755 14.5254C4.38389 14.5254 1.46216 11.6037 1.46216 8C1.46216 7.79582 1.47213 7.59392 1.49048 7.39453C1.49931 6.9963 1.56606 6.56899 1.72681 6.07422C1.79123 5.87597 1.8673 5.69431 1.94849 5.52539C2.78111 3.4959 4.60634 1.97986 6.82056 1.58008C7.12572 1.51289 7.4631 1.47463 7.85278 1.47461C7.87041 1.47461 7.88806 1.47637 7.90552 1.47656C7.93271 1.47623 7.96028 1.47461 7.98755 1.47461ZM6.37817 11.3428L7.04712 13.3916C7.35268 13.4445 7.66686 13.4746 7.98755 13.4746C8.29779 13.4746 8.60155 13.4461 8.89771 13.3965L9.5686 11.3418L8.99048 10.5459H6.95825L6.37817 11.3428ZM2.55786 8.69629C2.64879 9.41262 2.87793 10.0852 3.21802 10.6875L5.52856 10.7236L6.1106 9.92383L5.37036 7.80957L4.26587 7.45117L2.55786 8.69629ZM10.6799 7.75098L9.93091 10.0547L10.4153 10.7217L12.7571 10.6846C13.0852 10.1027 13.3099 9.45564 13.4065 8.7666L11.6018 7.45117L10.6799 7.75098ZM5.60571 3.06836C4.97197 3.37492 4.40651 3.80053 3.93774 4.31543L4.59497 6.45312L5.69751 6.81055L7.45337 5.54004V4.40723L5.60571 3.06836ZM8.50415 4.23145V5.53516L10.2717 6.77832L11.2727 6.45312L11.9553 4.23145C11.4708 3.72138 10.8899 3.30447 10.2405 3.01074L8.50415 4.23145Z" fill="currentColor"/>',
    })
    n.d(t, {}, { y: a })
  },
  Gx3J(e, t, n) {
    let a = (0, n("iJY0").a)({
      name: "toolbox-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.668213, y: 1.835938, width: 14.66309, height: 16.330078 },
        visualBounds: { x: 2.668213, y: 1.835938, width: 14.66309, height: 16.330078 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.668213, y: 1.835938, width: 14.66309, height: 16.330078 },
        center: { x: 9.999758, y: 10.000977 },
        insets: { top: 1.835938, right: 2.668697, bottom: 1.833984, left: 2.668213 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999758, y: 10.000977 },
          foreground: { x: 9.999758, y: 10.000977 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M11.2502 11.42C11.6174 11.4201 11.9153 11.7178 11.9153 12.085C11.915 12.452 11.6172 12.7499 11.2502 12.75H8.75025C8.38314 12.75 8.08547 12.452 8.08521 12.085C8.08521 11.7177 8.38298 11.42 8.75025 11.42H11.2502Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06079 2.86136C6.42939 1.75411 7.86661 1.47501 8.62329 2.36331L9.86255 3.81839C9.89425 3.85562 9.94061 3.87759 9.9895 3.87796L11.3665 3.88772L11.429 3.75101C11.561 3.46052 11.6727 3.2132 11.7786 3.01565C11.8873 2.81279 12.0103 2.62194 12.1809 2.45608C12.5888 2.06001 13.1368 1.83972 13.7053 1.84378C13.9435 1.84552 14.1641 1.89838 14.3831 1.96976C14.5962 2.03925 14.8483 2.14024 15.1448 2.25882C15.4692 2.38858 15.7446 2.49835 15.9631 2.60354C16.1864 2.71107 16.3975 2.83557 16.5793 3.01468C17.0109 3.44003 17.2441 4.02729 17.2229 4.63284C17.2139 4.88792 17.1462 5.12291 17.0579 5.35452C16.9715 5.58099 16.8477 5.84909 16.7014 6.16604L15.595 8.56253C15.7846 8.59536 15.9701 8.64781 16.1497 8.73929C16.5569 8.94686 16.8884 9.2783 17.0959 9.68558C17.2332 9.95513 17.285 10.2374 17.3088 10.5283C17.332 10.8118 17.3313 11.1593 17.3313 11.5684V13.7676C17.3313 14.41 17.3316 14.9321 17.2971 15.3545C17.262 15.7847 17.188 16.1704 17.0051 16.5293C16.7177 17.0935 16.2588 17.5524 15.6946 17.8399C15.3357 18.0227 14.95 18.0967 14.5198 18.1319C14.0973 18.1664 13.5752 18.166 12.9329 18.166H7.06665C6.42423 18.166 5.90219 18.1664 5.47974 18.1319C5.04961 18.0967 4.66381 18.0227 4.30493 17.8399C3.74093 17.5524 3.28279 17.0933 2.99536 16.5293C2.81248 16.1704 2.73754 15.7847 2.70239 15.3545C2.66789 14.9321 2.66822 14.41 2.66822 13.7676V11.5684C2.66822 11.1593 2.66751 10.8118 2.69068 10.5283C2.71448 10.2373 2.76721 9.95522 2.90454 9.68558C3.11211 9.27821 3.44346 8.94685 3.85083 8.73929C3.91271 8.70777 3.97519 8.68053 4.03833 8.65726L3.27759 8.09671C2.33829 7.4039 2.51688 5.95081 3.59595 5.50589L5.36255 4.77737C5.40758 4.75873 5.4418 4.72104 5.45728 4.67483L6.06079 2.86136ZM5.73364 9.83304C5.30263 9.83304 5.01877 9.83388 4.802 9.85159C4.59344 9.86865 4.50542 9.89787 4.45435 9.92386C4.29723 10.0039 4.16917 10.132 4.08911 10.2891C4.06313 10.3402 4.03391 10.4282 4.01685 10.6367C3.99914 10.8535 3.99829 11.1374 3.99829 11.5684V13.7676C3.99829 14.4318 3.99855 14.8904 4.02759 15.2461C4.05602 15.5941 4.1085 15.7856 4.17993 15.9258C4.33989 16.2396 4.5956 16.4944 4.90943 16.6543C5.0496 16.7257 5.24033 16.7782 5.58814 16.8067C5.94386 16.8357 6.40229 16.836 7.06665 16.836H12.9329C13.5971 16.836 14.0557 16.8357 14.4114 16.8067C14.7593 16.7782 14.9509 16.7258 15.0911 16.6543C15.4047 16.4944 15.6597 16.2394 15.8196 15.9258C15.891 15.7856 15.9435 15.5941 15.9719 15.2461C16.001 14.8904 16.0012 14.4318 16.0012 13.7676V11.5684C16.0012 11.1374 16.0014 10.8535 15.9836 10.6367C15.9666 10.428 15.9364 10.3401 15.9104 10.2891C15.8304 10.1321 15.7031 10.0039 15.5461 9.92386C15.4951 9.89784 15.4065 9.86867 15.1975 9.85159C14.9808 9.83389 14.6977 9.83304 14.2668 9.83304H5.73364ZM7.6106 3.22561C7.52563 3.12619 7.36508 3.1573 7.32349 3.28128L6.71997 5.09476C6.58248 5.50787 6.27189 5.84086 5.86939 6.00686L4.10279 6.73538C3.9816 6.78535 3.96125 6.94853 4.06665 7.0264L5.60474 8.16018C5.73555 8.25665 5.84806 8.37292 5.9397 8.50296H10.9309L10.8801 8.3428C10.7487 7.92794 10.8036 7.47622 11.0315 7.1055L12.0334 5.47757C12.1017 5.36593 12.0218 5.22267 11.8909 5.22171L9.97974 5.20804C9.54446 5.20486 9.13206 5.01212 8.84986 4.68069L7.6106 3.22561ZM13.6956 3.17386C13.4764 3.17233 13.2649 3.25751 13.1077 3.41018C13.0754 3.44164 13.0288 3.49935 12.9514 3.64358C12.8861 3.76541 12.8126 3.92029 12.7131 4.13772C13.3497 4.55853 13.6161 5.44339 13.1663 6.17483L12.1653 7.80179C12.1397 7.84342 12.133 7.89484 12.1477 7.94143L12.3264 8.50296H14.1575L15.4934 5.6094C15.6474 5.27569 15.7492 5.05524 15.8157 4.88089C15.8801 4.71181 15.8922 4.63253 15.8938 4.58597C15.902 4.35246 15.8121 4.12598 15.6458 3.96194C15.6126 3.92927 15.549 3.88029 15.386 3.80179C15.2179 3.72088 14.9927 3.63062 14.6516 3.49417C14.3389 3.36909 14.1332 3.2873 13.9709 3.2344C13.8146 3.18346 13.7406 3.1742 13.6956 3.17386Z" fill="currentColor"/>',
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
//# sourceMappingURL=815578.e53dcf108f.js.map
