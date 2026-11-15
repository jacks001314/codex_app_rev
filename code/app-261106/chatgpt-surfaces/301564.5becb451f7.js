export const __rspack_esm_ids = [301564]
export const __webpack_modules__ = {
  v7bo(e, t, i) {
    var a = i("Eho4")
    function s(e) {
      let t = l(e)
      if (!t) return null
      let i = t.split(":"),
        s = i[0]
      if (!s) return null
      let n = i[1] ?? s,
        o = (0, a.DX)(s),
        c = (0, a.PD)(s),
        d = (0, a.DX)(n),
        u = (0, a.PD)(n),
        p = { startRow: Math.min(o, d), startCol: Math.min(c, u), endRow: Math.max(o, d), endCol: Math.max(c, u) }
      return { ref: r(p), bounds: p }
    }
    function r(e) {
      let t = n(e.startRow, e.startCol),
        i = n(e.endRow, e.endCol)
      return t === i ? t : `${t}:${i}`
    }
    function n(e, t) {
      return `${(0, a.Zp)(t)}${e + 1}`
    }
    function l(e) {
      let t = e.trim()
      return t ? (t.includes("!") ? t.slice(t.indexOf("!") + 1) : t).replace(/\$/g, "").toUpperCase() : null
    }
    i.d(
      t,
      {},
      {
        $1: n,
        DO: s,
        Ol: function (e) {
          var t
          let i = e.startsWith("=") ? e.slice(1) : e,
            a = i.indexOf("!")
          if (-1 === a) {
            let e = s(i)
            return { ref: e?.ref ?? i }
          }
          let r = i.slice(0, a),
            n = i.slice(a + 1),
            l = s(n)
          return {
            sheetName:
              (t = r).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
            ref: l?.ref ?? n,
          }
        },
        Qh: l,
        ds: function (e) {
          return { rows: e.endRow - e.startRow + 1, cols: e.endCol - e.startCol + 1 }
        },
        ox: function (e, t) {
          return e.startRow <= t.endRow && e.endRow >= t.startRow && e.startCol <= t.endCol && e.endCol >= t.startCol
        },
        wP: r,
      },
    )
  },
  dkXD(e, t, i) {
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
    i.d(
      t,
      {},
      {
        T: a,
        b: function (e) {
          if (!e?.length) return a
          let t = { ...a }
          for (let [i, a] of e.entries()) {
            if (64 === i || 65 === i) continue
            let e = a.value.replace(/^#/, "")
            t[`indexed:${i}`] = `#${8 === e.length ? e.slice(2) : e}`
          }
          return Object.freeze(t)
        },
      },
    )
  },
  RUAz(e, t, i) {
    i.r(t)
    var a = i("v7bo")
    let s = "CSV import",
      r = /\\|\/|\?|\*|\[|\]|:/g
    function n(e) {
      return ((e ?? s).trim().replace(r, "").trim() || s).slice(0, 31)
    }
    i.d(
      t,
      {},
      {
        planCsvImport: function (e, t) {
          let i = (function (e) {
              let t = e ?? ","
              if (1 !== t.length) throw Error(`CSV import separator must be a single character; received "${t}".`)
              return t
            })(t?.separator),
            s = (0, a.Ol)(t?.anchor ?? "A1"),
            r = s.sheetName?.trim(),
            l = t?.sheetName?.trim()
          if (r && l && r !== l)
            throw Error(`CSV import specifies conflicting sheet names: "${l}" (options.sheetName) vs "${r}" (anchor).`)
          let o = n(r ?? l),
            c = (0, a.DO)(s.ref)
          if (!c) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor ?? "A1"}".`)
          let { bounds: d } = c
          if (d.startRow !== d.endRow || d.startCol !== d.endCol)
            throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor ?? "A1"}".`)
          let u = (function (e, t) {
              if (!e.trim()) return []
              let i = (function (e, t) {
                let i = [],
                  a = [],
                  s = "",
                  r = !1,
                  n = () => {
                    ;(a.push(s), (s = ""))
                  },
                  l = () => {
                    ;(i.push(a), (a = []))
                  }
                for (let i = 0; i < e.length; i += 1) {
                  let a = e[i] ?? ""
                  if (r) {
                    if ('"' === a) {
                      if ('"' === e[i + 1]) {
                        ;((s += '"'), (i += 1))
                        continue
                      }
                      r = !1
                      continue
                    }
                    s += a
                    continue
                  }
                  if ('"' === a) {
                    r = !0
                    continue
                  }
                  if (a === t) {
                    n()
                    continue
                  }
                  if ("\n" === a) {
                    ;(n(), l())
                    continue
                  }
                  if ("\r" === a) {
                    ;("\n" === e[i + 1] && (i += 1), n(), l())
                    continue
                  }
                  s += a
                }
                for (n(), l(); i.length > 0;) {
                  let e = i[i.length - 1] ?? []
                  if (!(e.length > 0 && e.every((e) => "" === e))) break
                  i.pop()
                }
                return i
              })(e, t)
              if (0 === i.length) return []
              let a = i.reduce((e, t) => Math.max(e, t.length), 0)
              return 0 === a
                ? []
                : i.map((e) => {
                    if (e.length === a) return e
                    let t = e.slice()
                    for (; t.length < a;) t.push("")
                    return t
                  })
            })(e, i),
            p = u.length,
            h = p > 0 ? (u[0]?.length ?? 0) : 0
          if (0 === p || 0 === h) return { sheetName: o, values: [] }
          let m = { startRow: d.startRow, startCol: d.startCol, endRow: d.startRow + p - 1, endCol: d.startCol + h - 1 }
          return {
            sheetName: o,
            values: u,
            rangeRef: (0, a.wP)(m),
            rect: { r1: m.startRow, c1: m.startCol, r2: m.endRow, c2: m.endCol },
          }
        },
        sanitizeSheetName: n,
      },
    )
  },
  Eho4(e, t, i) {
    var a = i("dkXD")
    let s = 4 / 3
    function r(e) {
      return Math.ceil(e && e > 0 ? e : 7)
    }
    i.d(
      t,
      {},
      {
        $s: function (e) {
          return (96 * (null == e || 0 === e ? 15 : e)) / 72
        },
        AV: function (e) {
          let t = e > 0 ? e : 11
          return { padLr: Math.max(2, Math.floor(0.1 * t)), padTb: Math.max(s, Math.floor(0 * t)) }
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
          let i = 0
          for (let e of t[0]) i = 26 * i + (e.charCodeAt(0) - 64)
          return i - 1
        },
        R5: function (e) {
          return Number.isFinite(e ?? 0) ? ((e ?? 0) * 72) / 96 : 15
        },
        UL: function (e) {
          let t = e.replace(/^0x/i, "")
          if (8 === t.length) {
            let e = parseInt(t.slice(2, 4), 16),
              i = parseInt(t.slice(4, 6), 16),
              a = parseInt(t.slice(6, 8), 16)
            return `rgba(${e}, ${i}, ${a}, 1.000)`
          }
          return 6 === t.length ? `#${t}` : "#ffffff"
        },
        Wh: function (e, t) {
          return null == e || e <= 0 ? 64 : e * r(t)
        },
        Zp: function (e) {
          let t = ""
          for (e += 1; e;) {
            let i = (e - 1) % 26
            ;((t = String.fromCharCode(65 + i) + t), (e = Math.floor((e - i) / 26)))
          }
          return t
        },
        eJ: function (e, t) {
          return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / r(t))) / 100
        },
      },
    )
  },
  jjPm(e, t, i) {
    var a = i("QosV"),
      s = i("zTeN"),
      r = i("eFn4"),
      n = i("EOo5"),
      l = i("OAko"),
      o = i("OWtl"),
      c = i("JYRT"),
      d = i("OMIV"),
      u = i("dXCv")
    let p = new Set([
        "business",
        "enterprise_cbp_usage_based",
        "enterprise_cbp_automation",
        "hc",
        "hc_consumption",
        "finserv",
        "law",
        "ent26",
        "enterprise",
        "education",
        "edu_plus",
        "edu_pro",
        "edu",
        "k12",
        "quorum",
      ]),
      h = (0, s.SZ)(
        o.u,
        ({ get: e }) => e(d.M9)?.getContext().user.customIDs?.account_id,
        ({ get: e, set: t }) => {
          let i = e(d.M9)
          if (null == i) return
          let a = () => {
            t(i.getContext().user.customIDs?.account_id)
          }
          return (i.on("values_updated", a), () => i.off("values_updated", a))
        },
      )
    i.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            i,
            o,
            m = (0, a.c)(5),
            { children: g, loadingFallback: f, unavailableFallback: _, readOnlyFallback: y } = e,
            b = void 0 === _ ? null : _,
            { accountId: x } = (0, n.As)()
          m[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (m[0] = t)) : (t = m[0])
          let { data: v, isError: j } = (0, l.YL)(void 0, t),
            w = null != x && v?.id === x && !j
          m[1] !== w ? ((i = { enabled: w }), (m[1] = w), (m[2] = i)) : (i = m[2])
          let { data: A, isError: T } = (0, s._U)(u.i, x ?? "", i),
            P = (0, s.Ul)(d.RS),
            S = (0, s.Ul)(h),
            k = (0, s._U)(c.X, "2826703856"),
            C = !P && S === x,
            M = k?.value.enable_gpt_fe_controls === !0,
            B = v?.id === x && A?.account.structure === "workspace" && C && M
          m[3] !== B ? ((o = { enabled: B }), (m[3] = B), (m[4] = o)) : (o = m[4])
          let { data: G, isPending: F, isError: z } = (0, s._U)(r.Jk, x ?? "", o)
          return j || T || (B && z)
            ? b
            : null == v || v.id !== x || null == A || A.account.account_id !== x || !C || null == k || (B && F)
              ? void 0 === f
                ? null
                : f
              : (!0 === A.entitlement.has_active_subscription ||
                    p.has(A.account.plan_type ?? "free") ||
                    "free_workspace" === A.account.plan_type) &&
                  (!B || G?.permissions?.includes("chatgpt.workspace.gpt.crud"))
                ? g
                : (y ?? b)
        },
      },
    )
  },
  dXCv(e, t, i) {
    var a = i("zTeN"),
      s = i("DBCl"),
      r = i("Ietk"),
      n = i("Ghh3"),
      l = i("OWtl")
    let o = (0, a.vU)(l.u, (e, { scope: t }) => ({
      queryKey: ["accounts", "check", "v4-2023-04-27", e],
      staleTime: 0,
      refetchOnWindowFocus: !0,
      queryFn: async ({ signal: i }) => (
        await (0, r.uc)(t, i),
        n.Request.safeGet("/accounts/check/{version}", {
          parameters: { path: { version: "v4-2023-04-27" } },
          additionalHeaders: { [s.n1Q]: "1", [s.zBc]: e },
          signal: i,
        })
      ),
      select: (t) => t.accounts[e],
    }))
    i.d(t, {}, { i: o })
  },
  iK0z(e, t, i) {
    i.d(t, { GptBuilderPage: () => e6 })
    var a = i("ABep"),
      s = i("QosV"),
      r = i("zTeN"),
      n = i("zd8w"),
      l = i("oyxz"),
      o = i("Wf1j"),
      c = i("HZfM"),
      d = i("ASxG"),
      u = i("SPnB"),
      p = i("eFn4"),
      h = i("X5Tu"),
      m = i("MrGp"),
      g = i("nQgc"),
      f = i("jjPm"),
      _ = i("dXCv"),
      y = i("vzxm"),
      b = i("zKCW"),
      x = i("Sm6l"),
      v = i("FrrB"),
      j = i("X6Vn"),
      w = i("zOE4"),
      A = i("OWtl"),
      T = i("JYRT"),
      P = i("OMIV"),
      S = i("soaw"),
      k = i("Clvq")
    let C = d.enum(["basic", "bearer", "custom"]),
      M = { instructions: d.string().optional(), verification_tokens: d.record(d.string(), d.string()).optional() },
      B = d.looseObject({
        action_id: d.string().nullish(),
        domain: d.string().nullish(),
        privacy_policy_url: d.string().nullish(),
        raw_spec: d.string().nullish(),
        json_schema: d.record(d.string(), d.json()).nullish(),
        api_key: d.string().nullish(),
        oauth_client_id: d.string().nullish(),
        oauth_client_secret: d.string().nullish(),
        auth: d
          .discriminatedUnion("type", [
            d.looseObject({ type: d.literal("none") }),
            d.looseObject({
              type: d.literal("service_http"),
              ...M,
              authorization_type: C,
              custom_auth_header: d.string().nullish(),
            }),
            d.looseObject({ type: d.literal("user_http"), ...M, authorization_type: C }),
            d.looseObject({
              type: d.literal("oauth"),
              ...M,
              client_url: d.string(),
              scope: d.string(),
              authorization_url: d.string(),
              authorization_content_type: d.string(),
              pkce_required: d.boolean().nullish(),
              token_exchange_method: d.enum(["default_post", "basic_auth_header"]).nullish(),
            }),
          ])
          .nullish(),
      })
    function G(e, t, i) {
      let a = t.tools?.find((t) => "plugins_prototype" === t.type && t.metadata.domain === e.domain),
        s = i.tools
          .filter((e) => "plugins_prototype" === e.type)
          .map((e) => B.parse(e.metadata))
          .find((t) => t.domain === e.domain)
      if (a?.type !== "plugins_prototype" || null == s) return e
      let r = a.metadata
      return e.auth?.type !== r.auth?.type
        ? e
        : {
            ...e,
            action_id: e.action_id === r.action_id ? s.action_id : e.action_id,
            api_key: e.api_key === r.api_key ? void 0 : e.api_key,
            oauth_client_id: e.oauth_client_id === r.oauth_client_id ? void 0 : e.oauth_client_id,
            oauth_client_secret: e.oauth_client_secret === r.oauth_client_secret ? void 0 : e.oauth_client_secret,
          }
    }
    var F = i("iqEK"),
      z = i("ccwJ"),
      N = i("wTVm")
    let R = d.object({
      name: d
        .string()
        .optional()
        .catch(void 0),
      description: d
        .string()
        .optional()
        .catch(void 0),
      context: d
        .string()
        .optional()
        .catch(void 0),
      prompt_starters: d
        .array(d.string())
        .optional()
        .catch(void 0),
      profile_pic_file_id: d
        .string()
        .trim()
        .min(1)
        .optional()
        .catch(void 0),
    })
    function I(e) {
      return `This is the GPT's current set of fields:

${JSON.stringify({ name: e.display.name, description: e.display.description, context: e.instructions, prompt_starters: e.display.prompt_starters, abilities: e.tools?.map((e) => e.type), file_ids: e.files.map((e) => e.file_id) }, null, 2)}

${e.display.profile_pic_id || e.display.profile_picture_url ? "The GPT has a profile picture." : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior."}`
    }
    var E = i("on57"),
      O = i("bJfu"),
      $ = i("lcic"),
      q = i("djbx"),
      L = i("bVeK"),
      U = i("BrP7"),
      D = i("zLIa"),
      H = i("nsuH"),
      K = i("jxU8"),
      W = i("BSnr"),
      X = i("AWNZ"),
      V = i("ZEx5"),
      J = i("jDom"),
      Y = i("Qgfj"),
      Q = i("HwQY"),
      Z = i("JNtf"),
      ee = i("mUDD")
    function et(e) {
      let t,
        i,
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
        y,
        b,
        x,
        v,
        j,
        w,
        A = (0, s.c)(65),
        { metadata: T, onChange: P, disabled: S } = e,
        k = (0, o.A)(),
        C = T.auth,
        M = (0, n.useId)()
      ;(A[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)("p", {
            className: "text-sm text-secondary",
            children: (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.keepCredentials",
              defaultMessage: "Leave credential fields blank to keep existing credentials",
              description:
                "Help text in GPT custom-action authentication settings explaining that blank API key, client ID, and client secret fields preserve stored credentials.",
            }),
          })),
          (A[0] = t))
        : (t = A[0]),
        A[1] !== k
          ? ((i = k.formatMessage({
              id: "gptBuilder.actions.authentication",
              defaultMessage: "Authentication",
              description: "Accessible label for the authentication choices in the GPT custom-action editor.",
            })),
            (A[1] = k),
            (A[2] = i))
          : (i = A[2]))
      let B = `${M}-none`,
        G = `${M}-auth`
      A[3] !== k ? ((r = k.formatMessage(ea.noAuth)), (A[3] = k), (A[4] = r)) : (r = A[4])
      let F = null == C || "none" === C.type
      ;(A[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, a.jsx)(l.A, {
            id: "gptBuilder.actions.noAuth",
            defaultMessage: "None",
            description: "Choice to use no authentication for a GPT custom action.",
          })),
          (A[5] = c))
        : (c = A[5]),
        A[6] !== T || A[7] !== P
          ? ((d = () =>
              P({
                ...T,
                auth: { type: "none" },
                api_key: void 0,
                oauth_client_id: void 0,
                oauth_client_secret: void 0,
              })),
            (A[6] = T),
            (A[7] = P),
            (A[8] = d))
          : (d = A[8]),
        A[9] !== B || A[10] !== G || A[11] !== r || A[12] !== F || A[13] !== d
          ? ((u = (0, a.jsx)(X.lu, {
              id: B,
              name: G,
              value: "none",
              variant: "inline",
              ariaLabel: r,
              checked: F,
              label: c,
              onChange: d,
            })),
            (A[9] = B),
            (A[10] = G),
            (A[11] = r),
            (A[12] = F),
            (A[13] = d),
            (A[14] = u))
          : (u = A[14]))
      let z = `${M}-service_http`,
        N = `${M}-auth`
      A[15] !== k ? ((p = k.formatMessage(ea.apiKey)), (A[15] = k), (A[16] = p)) : (p = A[16])
      let R = C?.type === "service_http"
      ;(A[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, a.jsx)(l.A, { ...ea.apiKey })), (A[17] = h))
        : (h = A[17]),
        A[18] !== C || A[19] !== T || A[20] !== P
          ? ((m = () =>
              P({
                ...T,
                auth: C?.type === "service_http" ? C : { type: "service_http", authorization_type: "bearer" },
                oauth_client_id: void 0,
                oauth_client_secret: void 0,
              })),
            (A[18] = C),
            (A[19] = T),
            (A[20] = P),
            (A[21] = m))
          : (m = A[21]),
        A[22] !== z || A[23] !== N || A[24] !== p || A[25] !== R || A[26] !== m
          ? ((g = (0, a.jsx)(X.lu, {
              id: z,
              name: N,
              value: "service_http",
              variant: "inline",
              ariaLabel: p,
              checked: R,
              label: h,
              onChange: m,
            })),
            (A[22] = z),
            (A[23] = N),
            (A[24] = p),
            (A[25] = R),
            (A[26] = m),
            (A[27] = g))
          : (g = A[27]))
      let I = `${M}-oauth`,
        E = `${M}-auth`
      A[28] !== k ? ((f = k.formatMessage(ea.oauth)), (A[28] = k), (A[29] = f)) : (f = A[29])
      let O = C?.type === "oauth"
      return (
        A[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.oauth",
              defaultMessage: "OAuth",
              description: "Authentication method label in the GPT custom-action form.",
            })),
            (A[30] = _))
          : (_ = A[30]),
        A[31] !== C || A[32] !== T || A[33] !== P
          ? ((y = () =>
              P({
                ...T,
                auth:
                  C?.type === "oauth"
                    ? C
                    : {
                        type: "oauth",
                        client_url: "",
                        authorization_url: "",
                        scope: "",
                        authorization_content_type: "application/x-www-form-urlencoded",
                      },
                api_key: void 0,
              })),
            (A[31] = C),
            (A[32] = T),
            (A[33] = P),
            (A[34] = y))
          : (y = A[34]),
        A[35] !== I || A[36] !== E || A[37] !== f || A[38] !== O || A[39] !== y
          ? ((b = (0, a.jsx)(X.lu, {
              id: I,
              name: E,
              value: "oauth",
              variant: "inline",
              ariaLabel: f,
              checked: O,
              label: _,
              onChange: y,
            })),
            (A[35] = I),
            (A[36] = E),
            (A[37] = f),
            (A[38] = O),
            (A[39] = y),
            (A[40] = b))
          : (b = A[40]),
        A[41] !== S || A[42] !== g || A[43] !== i || A[44] !== b || A[45] !== u
          ? ((x = (0, a.jsxs)("fieldset", {
              disabled: S,
              className: "flex gap-4",
              "aria-label": i,
              children: [u, g, b],
            })),
            (A[41] = S),
            (A[42] = g),
            (A[43] = i),
            (A[44] = b),
            (A[45] = u),
            (A[46] = x))
          : (x = A[46]),
        A[47] !== C || A[48] !== S || A[49] !== M || A[50] !== k || A[51] !== T || A[52] !== P
          ? ((v =
              C?.type === "service_http" &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(ei, {
                    label: ea.apiKey,
                    value: T.api_key ?? "",
                    disabled: S,
                    secret: !0,
                    onChange: (e) => P({ ...T, api_key: e || void 0 }),
                  }),
                  (0, a.jsx)("fieldset", {
                    disabled: S,
                    className: "flex gap-4",
                    children: ["basic", "bearer", "custom"].map((e) =>
                      (0, a.jsx)(
                        X.lu,
                        {
                          id: `${M}-${e}`,
                          name: `${M}-api-auth`,
                          value: e,
                          variant: "inline",
                          ariaLabel: k.formatMessage(ea[e]),
                          checked: C.authorization_type === e,
                          label: (0, a.jsx)(l.A, { ...ea[e] }),
                          onChange: () => P({ ...T, auth: { ...C, authorization_type: e } }),
                        },
                        e,
                      ),
                    ),
                  }),
                  "custom" === C.authorization_type &&
                    (0, a.jsx)(ei, {
                      label: ea.header,
                      value: C.custom_auth_header ?? "",
                      disabled: S,
                      onChange: (e) => P({ ...T, auth: { ...C, custom_auth_header: e } }),
                    }),
                ],
              })),
            (A[47] = C),
            (A[48] = S),
            (A[49] = M),
            (A[50] = k),
            (A[51] = T),
            (A[52] = P),
            (A[53] = v))
          : (v = A[53]),
        A[54] !== C || A[55] !== S || A[56] !== M || A[57] !== k || A[58] !== T || A[59] !== P
          ? ((j =
              C?.type === "oauth" &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(ei, {
                    secret: !0,
                    label: ea.clientId,
                    value: T.oauth_client_id ?? "",
                    disabled: S,
                    onChange: (e) => P({ ...T, oauth_client_id: e || void 0 }),
                  }),
                  (0, a.jsx)(ei, {
                    label: ea.clientSecret,
                    value: T.oauth_client_secret ?? "",
                    disabled: S,
                    secret: !0,
                    onChange: (e) => P({ ...T, oauth_client_secret: e || void 0 }),
                  }),
                  (0, a.jsx)(ei, {
                    label: ea.authUrl,
                    value: C.client_url,
                    disabled: S,
                    onChange: (e) => P({ ...T, auth: { ...C, client_url: e } }),
                  }),
                  (0, a.jsx)(ei, {
                    label: ea.tokenUrl,
                    value: C.authorization_url,
                    disabled: S,
                    onChange: (e) => P({ ...T, auth: { ...C, authorization_url: e } }),
                  }),
                  (0, a.jsx)(ei, {
                    label: ea.scope,
                    value: C.scope,
                    disabled: S,
                    onChange: (e) => P({ ...T, auth: { ...C, scope: e } }),
                  }),
                  (0, a.jsxs)("fieldset", {
                    disabled: S,
                    className: "flex flex-col gap-2",
                    children: [
                      (0, a.jsx)("legend", {
                        className: "text-sm font-medium select-none",
                        children: (0, a.jsx)(l.A, {
                          id: "gptBuilder.actions.tokenExchange",
                          defaultMessage: "Token exchange method",
                          description: "How the action sends OAuth credentials to its token endpoint",
                        }),
                      }),
                      ["default_post", "basic_auth_header"].map((e) =>
                        (0, a.jsx)(
                          X.lu,
                          {
                            id: `${M}-${e}`,
                            name: `${M}-token-exchange`,
                            value: e,
                            variant: "inline",
                            ariaLabel: k.formatMessage(ea[e]),
                            checked: (C.token_exchange_method ?? "default_post") === e,
                            label: (0, a.jsx)(l.A, { ...ea[e] }),
                            onChange: () => P({ ...T, auth: { ...C, token_exchange_method: e } }),
                          },
                          e,
                        ),
                      ),
                    ],
                  }),
                  (0, a.jsx)(X.ic, {
                    label: (0, a.jsx)(l.A, { ...ea.pkce }),
                    control: (0, a.jsx)("div", {
                      className: "relative",
                      children: (0, a.jsx)(q.S, {
                        "aria-label": k.formatMessage(ea.pkce),
                        checked: !0 === C.pkce_required,
                        disabled: S,
                        onCheckedChange: (e) => P({ ...T, auth: { ...C, pkce_required: !0 === e } }),
                      }),
                    }),
                  }),
                ],
              })),
            (A[54] = C),
            (A[55] = S),
            (A[56] = M),
            (A[57] = k),
            (A[58] = T),
            (A[59] = P),
            (A[60] = j))
          : (j = A[60]),
        A[61] !== x || A[62] !== v || A[63] !== j
          ? ((w = (0, a.jsxs)("div", { className: "flex flex-col gap-4", children: [t, x, v, j] })),
            (A[61] = x),
            (A[62] = v),
            (A[63] = j),
            (A[64] = w))
          : (w = A[64]),
        w
      )
    }
    function ei(e) {
      let t,
        i,
        r,
        o,
        c,
        d = (0, s.c)(16),
        { label: u, value: p, disabled: h, secret: m, onChange: g } = e,
        f = (0, n.useId)()
      ;(d[0] !== u ? ((t = (0, a.jsx)(l.A, { ...u })), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] !== f || d[3] !== t
          ? ((i = (0, a.jsx)("label", { className: "text-sm font-medium select-none", htmlFor: f, children: t })),
            (d[2] = f),
            (d[3] = t),
            (d[4] = i))
          : (i = d[4]))
      let _ = void 0 !== m && m ? "password" : "text"
      return (
        d[5] !== g ? ((r = (e) => g(e.currentTarget.value)), (d[5] = g), (d[6] = r)) : (r = d[6]),
        d[7] !== h || d[8] !== f || d[9] !== _ || d[10] !== r || d[11] !== p
          ? ((o = (0, a.jsx)(D.pd, {
              id: f,
              name: f,
              value: p,
              disabled: h,
              type: _,
              autoComplete: "off",
              onChange: r,
            })),
            (d[7] = h),
            (d[8] = f),
            (d[9] = _),
            (d[10] = r),
            (d[11] = p),
            (d[12] = o))
          : (o = d[12]),
        d[13] !== i || d[14] !== o
          ? ((c = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [i, o] })),
            (d[13] = i),
            (d[14] = o),
            (d[15] = c))
          : (c = d[15]),
        c
      )
    }
    let ea = (0, Y.YK)({
      default_post: {
        id: "gptBuilder.actions.defaultPost",
        defaultMessage: "Default (POST request)",
        description: "Send OAuth credentials in the token request body",
      },
      basic_auth_header: {
        id: "gptBuilder.actions.basicAuthHeader",
        defaultMessage: "Basic authorization header",
        description: "Send OAuth credentials in the token request authorization header",
      },
      noAuth: {
        id: "gptBuilder.actions.noAuth",
        defaultMessage: "None",
        description: "No authentication for a GPT custom action",
      },
      oauth: {
        id: "gptBuilder.actions.oauth",
        defaultMessage: "OAuth",
        description: "OAuth authentication for a GPT custom action",
      },
      apiKey: {
        id: "gptBuilder.actions.apiKey",
        defaultMessage: "API key",
        description:
          "Label for a replacement API key in the GPT custom-action authentication form. The existing key is never shown.",
      },
      clientId: {
        id: "gptBuilder.actions.clientId",
        defaultMessage: "Client ID",
        description: "Label for a replacement OAuth client ID in the GPT custom-action authentication form.",
      },
      clientSecret: {
        id: "gptBuilder.actions.clientSecret",
        defaultMessage: "Client secret",
        description:
          "Label for a replacement OAuth client secret in the GPT custom-action authentication form. The existing secret is never shown.",
      },
      authUrl: {
        id: "gptBuilder.actions.authUrl",
        defaultMessage: "Authorization URL",
        description: "Label for the OAuth authorization endpoint in the GPT custom-action authentication form.",
      },
      tokenUrl: {
        id: "gptBuilder.actions.tokenUrl",
        defaultMessage: "Token URL",
        description: "Label for the OAuth token endpoint in the GPT custom-action authentication form.",
      },
      scope: {
        id: "gptBuilder.actions.scope",
        defaultMessage: "Scope",
        description: "Label for OAuth scopes requested by the GPT custom action.",
      },
      header: {
        id: "gptBuilder.actions.header",
        defaultMessage: "Custom header name",
        description: "Label for the HTTP header that carries a GPT custom action's API key.",
      },
      basic: {
        id: "gptBuilder.actions.basic",
        defaultMessage: "Basic",
        description: "HTTP Basic authentication method for a GPT custom action.",
      },
      bearer: {
        id: "gptBuilder.actions.bearer",
        defaultMessage: "Bearer",
        description: "HTTP Bearer authentication method for a GPT custom action.",
      },
      custom: {
        id: "gptBuilder.actions.customHeader",
        defaultMessage: "Custom",
        description: "API key authentication option that sends the key in a custom HTTP header.",
      },
      pkce: {
        id: "gptBuilder.actions.pkce",
        defaultMessage: "PKCE",
        description: "Label for enabling Proof Key for Code Exchange in GPT custom-action OAuth settings.",
      },
    })
    function es(e) {
      let t,
        i,
        r,
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
        y,
        b,
        v = (0, s.c)(35),
        { metadata: j, disabled: w, onSave: A, onClose: T, subscribeToSaves: P } = e,
        [S, k] = (0, n.useState)(j)
      ;(v[0] !== P
        ? ((t = () =>
            P?.((e, t) => {
              k((i) => G(i, e, t))
            })),
          (i = [P]),
          (v[0] = P),
          (v[1] = t),
          (v[2] = i))
        : ((t = v[1]), (i = v[2])),
        (0, n.useEffect)(t, i))
      let [C, M] = (0, n.useState)(null)
      return (
        v[3] !== T
          ? ((r = (e) => {
              e || T()
            }),
            (v[3] = T),
            (v[4] = r))
          : (r = v[4]),
        v[5] !== w || v[6] !== S || v[7] !== T || v[8] !== A
          ? ((o = (e) => {
              if ((e.preventDefault(), w)) return
              let t = A(S)
              ;(M(t), null == t && T())
            }),
            (v[5] = w),
            (v[6] = S),
            (v[7] = T),
            (v[8] = A),
            (v[9] = o))
          : (o = v[9]),
        v[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(ee.c7, {
              title: (0, a.jsx)(Z.L3, {
                children: (0, a.jsx)(l.A, {
                  id: "gptBuilder.actions.authTitle",
                  defaultMessage: "Authentication",
                  description: "Title of the GPT action authentication dialog",
                }),
              }),
            })),
            (v[10] = c))
          : (c = v[10]),
        v[11] !== w || v[12] !== S
          ? ((d = (0, a.jsx)(et, { metadata: S, onChange: k, disabled: w })), (v[11] = w), (v[12] = S), (v[13] = d))
          : (d = v[13]),
        v[14] !== C
          ? ((u = null != C && (0, a.jsx)("p", { role: "alert", className: "text-error", children: C })),
            (v[14] = C),
            (v[15] = u))
          : (u = v[15]),
        v[16] !== d || v[17] !== u
          ? ((p = (0, a.jsxs)(ee.OO, { children: [d, u] })), (v[16] = d), (v[17] = u), (v[18] = p))
          : (p = v[18]),
        v[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.authCancel",
              defaultMessage: "Cancel",
              description: "Discard changes in the action authentication dialog",
            })),
            (v[19] = h))
          : (h = v[19]),
        v[20] !== T
          ? ((m = (0, a.jsx)(x.$, { type: "button", color: "secondary", onClick: T, children: h })),
            (v[20] = T),
            (v[21] = m))
          : (m = v[21]),
        v[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.authSave",
              defaultMessage: "Save",
              description: "Apply authentication settings to the GPT action",
            })),
            (v[22] = g))
          : (g = v[22]),
        v[23] !== w
          ? ((f = (0, a.jsx)(x.$, { type: "submit", disabled: w, children: g })), (v[23] = w), (v[24] = f))
          : (f = v[24]),
        v[25] !== m || v[26] !== f
          ? ((_ = (0, a.jsxs)(ee.Es, { children: [m, f] })), (v[25] = m), (v[26] = f), (v[27] = _))
          : (_ = v[27]),
        v[28] !== _ || v[29] !== o || v[30] !== p
          ? ((y = (0, a.jsxs)(ee.R4, { as: "form", onSubmit: o, children: [c, p, _] })),
            (v[28] = _),
            (v[29] = o),
            (v[30] = p),
            (v[31] = y))
          : (y = v[31]),
        v[32] !== y || v[33] !== r
          ? ((b = (0, a.jsx)(Z.lG, {
              open: !0,
              onOpenChange: r,
              size: "wide",
              contentPosition: "scrollable",
              children: y,
            })),
            (v[32] = y),
            (v[33] = r),
            (v[34] = b))
          : (b = v[34]),
        b
      )
    }
    var er = i("uuN8"),
      en = i("ReGc"),
      el = i("aepO")
    function eo(e) {
      let t,
        i,
        n,
        c,
        d,
        u,
        p = (0, s.c)(15),
        { metadata: h } = e,
        m = (0, o.A)(),
        { data: g } = (0, r.Ul)(en.a),
        f = g?.chatGptApiBaseUrl ?? g?.chatGptDesktopAuthOrigin,
        _ = null == f ? "" : new URL(f).hostname,
        y =
          "chatgpt-staging.com" === _ || _.endsWith(".chatgpt-staging.com")
            ? "https://chatgpt-staging.com"
            : "https://chat.openai.com",
        b =
          null != g && h?.auth?.type === "oauth" && h.action_id
            ? `${y}/aip/${encodeURIComponent(h.action_id)}/oauth/callback`
            : null
      p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, a.jsx)(l.A, {
            id: "gptBuilder.actions.callbackUrl",
            defaultMessage: "Callback URL",
            description: "Read-only OAuth redirect URL to register with the provider of a GPT custom action",
          })),
          (p[0] = t))
        : (t = p[0])
      let x = b ?? ""
      ;(p[1] !== m
        ? ((i = m.formatMessage({
            id: "gptBuilder.actions.callbackAfterSave",
            defaultMessage: "Available after the action is saved",
            description:
              "Placeholder for the OAuth callback URL until the server has saved the action and returned its current ID",
          })),
          (p[1] = m),
          (p[2] = i))
        : (i = p[2]),
        p[3] !== m
          ? ((n = m.formatMessage({
              id: "gptBuilder.actions.copyCallbackUrl",
              defaultMessage: "Copy callback URL",
              description:
                "Accessible label for copying the GPT action's OAuth callback URL to register with its provider",
            })),
            (p[3] = m),
            (p[4] = n))
          : (n = p[4]))
      let v = null == b
      return (
        p[5] !== b ? ((c = (e) => null != b && (0, el.E)(b, e)), (p[5] = b), (p[6] = c)) : (c = p[6]),
        p[7] !== n || p[8] !== v || p[9] !== c
          ? ((d = (0, a.jsx)(er.i, { ariaLabel: n, isDisabled: v, onCopy: c })),
            (p[7] = n),
            (p[8] = v),
            (p[9] = c),
            (p[10] = d))
          : (d = p[10]),
        p[11] !== x || p[12] !== i || p[13] !== d
          ? ((u = (0, a.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [t, (0, a.jsx)(D.pd, { readOnly: !0, value: x, placeholder: i, trailingControl: d })],
            })),
            (p[11] = x),
            (p[12] = i),
            (p[13] = d),
            (p[14] = u))
          : (u = p[14]),
        u
      )
    }
    var ec = i("bqtn")
    function ed(e) {
      let t,
        i,
        r,
        n,
        o = (0, s.c)(8),
        { onSelect: c, disabled: d } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(l.A, { ...eh.examples })), (o[0] = t))
          : (t = o[0]),
        o[1] !== d
          ? ((i = (0, a.jsx)(x.$, { type: "button", color: "secondary", disabled: d, children: t })),
            (o[1] = d),
            (o[2] = i))
          : (i = o[2]),
        o[3] !== c
          ? ((r = em.map((e) =>
              (0, a.jsx)(
                ec.ms.Item,
                { onSelect: () => c(e.spec), children: (0, a.jsx)(l.A, { ...e.displayName }) },
                e.displayName.id,
              ),
            )),
            (o[3] = c),
            (o[4] = r))
          : (r = o[4]),
        o[5] !== i || o[6] !== r
          ? ((n = (0, a.jsx)(ec.Ab, { triggerButton: i, children: r })), (o[5] = i), (o[6] = r), (o[7] = n))
          : (n = o[7]),
        n
      )
    }
    let eu = {
        openapi: "3.1.0",
        info: {
          title: "Get weather data",
          description: "Retrieves current weather data for a location.",
          version: "v1.0.0",
        },
        servers: [{ url: "https://weather.example.com" }],
        paths: {
          "/location": {
            get: {
              description: "Get temperature for a specific location",
              operationId: "GetCurrentWeather",
              parameters: [
                {
                  name: "location",
                  in: "query",
                  description: "The city and state to retrieve the weather for",
                  required: !0,
                  schema: { type: "string" },
                },
              ],
              deprecated: !1,
            },
          },
        },
        components: { schemas: {} },
      },
      ep = `openapi: 3.1.0
info:
  title: Swagger Petstore
  description: This example uses the Swagger Petstore API.
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.7
servers:
  - url: https://petstore.swagger.io/v2
paths:
  /store/inventory:
    get:
      tags:
        - store
      summary: Returns pet inventories by status
      operationId: getInventory
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: object
                additionalProperties:
                  type: integer
                  format: int32
                properties:
                  available:
                    type: integer
                    format: int32
                  pending:
                    type: integer
                    format: int32
                  sold:
                    type: integer
                    format: int32
  /pet/findByStatus:
    get:
      tags:
        - pet
      summary: Finds Pets by status
      operationId: findPetsByStatusPending
      parameters:
        - name: status
          in: query
          required: true
          schema:
            type: string
            enum:
              - pending
            default: pending
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Pet"
  /pet/{petId}:
    get:
      tags:
        - pet
      summary: Find pet by ID
      operationId: getPetById
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int64
            default: 1
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
components:
  schemas:
    Pet:
      type: object
      required:
        - name
        - photoUrls
      properties:
        id:
          type: integer
          format: int64
        category:
          $ref: "#/components/schemas/Category"
        name:
          type: string
          example: doggie
        photoUrls:
          type: array
          items:
            type: string
        tags:
          type: array
          items:
            $ref: "#/components/schemas/Tag"
        status:
          type: string
          enum:
            - pending
            - available
            - sold
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,
      eh = (0, Y.YK)({
        examples: {
          id: "gizmo.actions.examples",
          defaultMessage: "Examples",
          description: "Label of examples in GPT actions editor",
        },
        weatherExampleTitle: {
          id: "gizmo.actions.weatherExampleTitle",
          defaultMessage: "Weather (JSON)",
          description: "Dropdown label for the weather OpenAPI example",
        },
        petStoreExampleTitle: {
          id: "gizmo.actions.petStoreExampleTitle",
          defaultMessage: "Pet Store (YAML)",
          description: "Dropdown label for the pet store OpenAPI example",
        },
        blankExampleTitle: {
          id: "gizmo.actions.blankExampleTitle",
          defaultMessage: "Blank Template",
          description: "Dropdown label for the blank template OpenAPI spec",
        },
      }),
      em = [
        { displayName: eh.weatherExampleTitle, spec: JSON.stringify(eu, null, 2) },
        { displayName: eh.petStoreExampleTitle, spec: ep },
        {
          displayName: eh.blankExampleTitle,
          spec: JSON.stringify(
            {
              openapi: "3.1.0",
              info: { title: "Untitled", description: "Your OpenAPI specification", version: "v1.0.0" },
              servers: [{ url: "" }],
              paths: {},
              components: { schemas: {} },
            },
            null,
            2,
          ),
        },
      ]
    function eg(e) {
      let t,
        i,
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
        y,
        b,
        v,
        j,
        w = (0, s.c)(41),
        { disabled: A, onImport: T, onLoaded: P, onClose: S } = e,
        k = (0, o.A)(),
        C = (0, n.useId)(),
        [M, B] = (0, n.useState)(""),
        [G, F] = (0, n.useState)(!1),
        [z, N] = (0, n.useState)(!1),
        R = (0, n.useRef)(null)
      ;(w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => R.current?.abort()), (i = []), (w[0] = t), (w[1] = i))
        : ((t = w[0]), (i = w[1])),
        (0, n.useEffect)(t, i),
        w[2] !== A || w[3] !== T || w[4] !== P || w[5] !== G || w[6] !== M
          ? ((r = (e) => {
              if ((e.preventDefault(), A || G)) return
              let t = new AbortController()
              ;((R.current = t),
                F(!0),
                N(!1),
                T(M, t.signal)
                  .then((e) => {
                    t.signal.aborted || P(e)
                  })
                  .catch(() => {
                    t.signal.aborted || N(!0)
                  })
                  .finally(() => {
                    t.signal.aborted || F(!1)
                  }))
            }),
            (w[2] = A),
            (w[3] = T),
            (w[4] = P),
            (w[5] = G),
            (w[6] = M),
            (w[7] = r))
          : (r = w[7]),
        w[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.schemaUrl",
              defaultMessage: "Schema URL",
              description: "URL of the OpenAPI schema to import",
            })),
            (w[8] = c))
          : (c = w[8]),
        w[9] !== C
          ? ((d = (0, a.jsx)("label", { htmlFor: C, className: "sr-only", children: c })), (w[9] = C), (w[10] = d))
          : (d = w[10]))
      let I = A || G
      return (
        w[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (e) => B(e.currentTarget.value)), (w[11] = u))
          : (u = w[11]),
        w[12] !== C || w[13] !== I || w[14] !== M
          ? ((p = (0, a.jsx)(D.pd, {
              id: C,
              name: "schema-url",
              type: "url",
              required: !0,
              value: M,
              disabled: I,
              placeholder: "https://example.com/openapi.json",
              onChange: u,
            })),
            (w[12] = C),
            (w[13] = I),
            (w[14] = M),
            (w[15] = p))
          : (p = w[15]),
        w[16] !== A || w[17] !== G || w[18] !== M
          ? ((h = A || G || !M.trim()), (w[16] = A), (w[17] = G), (w[18] = M), (w[19] = h))
          : (h = w[19]),
        w[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.import",
              defaultMessage: "Import",
              description: "Fetch and import an OpenAPI schema from the entered URL",
            })),
            (w[20] = m))
          : (m = w[20]),
        w[21] !== G || w[22] !== h
          ? ((g = (0, a.jsx)(x.$, { type: "submit", color: "secondary", disabled: h, loading: G, children: m })),
            (w[21] = G),
            (w[22] = h),
            (w[23] = g))
          : (g = w[23]),
        w[24] !== S
          ? ((f = () => {
              ;(R.current?.abort(), S())
            }),
            (w[24] = S),
            (w[25] = f))
          : (f = w[25]),
        w[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.importCancel",
              defaultMessage: "Cancel",
              description: "Cancel importing an OpenAPI schema",
            })),
            (w[26] = _))
          : (_ = w[26]),
        w[27] !== f
          ? ((y = (0, a.jsx)(x.$, { type: "button", color: "secondary", onClick: f, children: _ })),
            (w[27] = f),
            (w[28] = y))
          : (y = w[28]),
        w[29] !== g || w[30] !== y
          ? ((b = (0, a.jsxs)("div", { className: "flex gap-2", children: [g, y] })),
            (w[29] = g),
            (w[30] = y),
            (w[31] = b))
          : (b = w[31]),
        w[32] !== z || w[33] !== k
          ? ((v =
              z &&
              (0, a.jsx)("p", {
                role: "alert",
                className: "text-error text-sm",
                children: k.formatMessage({
                  id: "gptBuilder.actions.importFailed",
                  defaultMessage: "Couldn’t import this schema. Check the URL and try again",
                  description: "Recoverable error importing an action's schema URL",
                }),
              })),
            (w[32] = z),
            (w[33] = k),
            (w[34] = v))
          : (v = w[34]),
        w[35] !== b || w[36] !== v || w[37] !== r || w[38] !== d || w[39] !== p
          ? ((j = (0, a.jsxs)("form", { className: "flex flex-col gap-2", onSubmit: r, children: [d, p, b, v] })),
            (w[35] = b),
            (w[36] = v),
            (w[37] = r),
            (w[38] = d),
            (w[39] = p),
            (w[40] = j))
          : (j = w[40]),
        j
      )
    }
    function ef(e) {
      let t,
        i,
        r,
        o,
        c,
        d,
        u,
        p = (0, s.c)(18),
        { draft: h, savedActions: m, disabled: g, onEdit: f } = e
      return (
        p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(W.X.Header, {
              title: (0, a.jsx)(l.A, {
                id: "gptBuilder.actions.title",
                defaultMessage: "Actions",
                description: "Heading for external API actions configured on a GPT in the GPT editor.",
              }),
            })),
            (p[0] = t))
          : (t = p[0]),
        p[1] !== g || p[2] !== h.tools || p[3] !== f || p[4] !== m
          ? ((i = h.tools?.map((e, t) =>
              "plugins_prototype" === e.type
                ? (0, a.jsxs)(
                    n.Fragment,
                    {
                      children: [
                        (0, a.jsx)(X.ic, {
                          label: e.metadata.domain ?? "",
                          control: (0, a.jsx)(x.$, {
                            type: "button",
                            color: "secondary",
                            disabled: g,
                            onClick: () => f(t, e.metadata),
                            children: (0, a.jsx)(l.A, {
                              id: "gptBuilder.actions.edit",
                              defaultMessage: "Edit",
                              description:
                                "Button that opens the schema and authentication settings of an existing GPT custom action.",
                            }),
                          }),
                        }),
                        e.metadata.auth?.type === "oauth" &&
                          (0, a.jsx)(X.ic, {
                            variant: "stacked",
                            label: null,
                            control: (0, a.jsx)(eo, { metadata: m.find((t) => t.domain === e.metadata.domain) }),
                          }),
                      ],
                    },
                    t,
                  )
                : null,
            )),
            (p[1] = g),
            (p[2] = h.tools),
            (p[3] = f),
            (p[4] = m),
            (p[5] = i))
          : (i = p[5]),
        p[6] !== i ? ((r = (0, a.jsx)(V.t, { children: i })), (p[6] = i), (p[7] = r)) : (r = p[7]),
        p[8] !== h.tools?.length || p[9] !== f
          ? ((o = () => f(h.tools?.length ?? 0, { raw_spec: "", auth: { type: "none" } })),
            (p[8] = h.tools?.length),
            (p[9] = f),
            (p[10] = o))
          : (o = p[10]),
        p[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.add",
              defaultMessage: "Add action",
              description: "Button that opens a form to add a custom API action to the GPT.",
            })),
            (p[11] = c))
          : (c = p[11]),
        p[12] !== g || p[13] !== o
          ? ((d = (0, a.jsx)(W.X.Content, {
              children: (0, a.jsx)(x.$, { type: "button", color: "secondary", disabled: g, onClick: o, children: c }),
            })),
            (p[12] = g),
            (p[13] = o),
            (p[14] = d))
          : (d = p[14]),
        p[15] !== r || p[16] !== d
          ? ((u = (0, a.jsxs)(W.X, { children: [t, r, d] })), (p[15] = r), (p[16] = d), (p[17] = u))
          : (u = p[17]),
        u
      )
    }
    function e_(e) {
      let t,
        i,
        c,
        d,
        u,
        p,
        h,
        m,
        g,
        f,
        _,
        y,
        b,
        v,
        j,
        w,
        T,
        P,
        S,
        k,
        C,
        M,
        B,
        F,
        z,
        N,
        R,
        I,
        E,
        O,
        $,
        q,
        U,
        H,
        Y,
        Q,
        et,
        ei,
        ea,
        er,
        en,
        el,
        ec,
        eu,
        ep,
        eh,
        em,
        ef,
        e_,
        eA,
        eT,
        eP,
        eS,
        ek,
        eC,
        eM,
        eB,
        eG,
        eF,
        ez,
        eN,
        eR,
        eI,
        eE,
        eO,
        e$,
        eq,
        eL,
        eU,
        eD = (0, s.c)(203),
        {
          metadata: eH,
          savedActions: eK,
          domains: eW,
          disabled: eX,
          isNew: eV,
          allowedDomains: eJ,
          onValidate: eY,
          onImport: eQ,
          onTest: eZ,
          onSave: e0,
          onDelete: e1,
          onClose: e2,
          onDirtyChange: e3,
          subscribeToSaves: e4,
        } = e
      eD[0] !== eK ? ((t = void 0 === eK ? [] : eK), (eD[0] = eK), (eD[1] = t)) : (t = eD[1])
      let e6 = t,
        e5 = (0, o.A)(),
        e8 = (0, n.useId)(),
        [e9, e7] = (0, n.useState)(eH),
        [te, tt] = (0, n.useState)(eH)
      ;(eD[2] !== e4
        ? ((i = () =>
            e4?.((e, t) => {
              ;(e7((i) => G(i, e, t)), tt((i) => G(i, e, t)))
            })),
          (c = [e4]),
          (eD[2] = e4),
          (eD[3] = i),
          (eD[4] = c))
        : ((i = eD[3]), (c = eD[4])),
        (0, n.useEffect)(i, c))
      let [ti, ta] = (0, n.useState)(!1),
        [ts, tr] = (0, n.useState)(!1),
        [tn, tl] = (0, n.useState)(!1)
      eD[5] === Symbol.for("react.memo_cache_sentinel") ? ((d = []), (eD[5] = d)) : (d = eD[5])
      let [to, tc] = (0, n.useState)(d),
        [td, tu] = (0, n.useState)(),
        [tp, th] = (0, n.useState)(!1),
        [tm, tg] = (0, n.useState)(!1),
        [tf, t_] = (0, n.useState)(null),
        [ty, tb] = (0, n.useState)(!1),
        [tx, tv] = (0, n.useState)(!1),
        tj = (0, n.useRef)(null),
        tw = (0, n.useRef)(null)
      eD[6] !== e8 || eD[7] !== eH || eD[8] !== eY
        ? ((u = () =>
            (0, r.RD)(A.u, () => ({
              queryKey: ["gpt-action-initial-validation", e8],
              queryFn: (e) => {
                let { signal: t } = e
                return eY(eH.raw_spec ?? "", t)
              },
              enabled: !!eH.raw_spec?.trim(),
              staleTime: 1 / 0,
              gcTime: 0,
              retry: !1,
            }))),
          (eD[6] = e8),
          (eD[7] = eH),
          (eD[8] = eY),
          (eD[9] = u))
        : (u = eD[9])
      let [tA] = (0, n.useState)(u),
        { data: tT, isFetching: tP, error: tS } = (0, r.Ul)(tA),
        tk = ti ? td : tT,
        tC = ti ? tn : tP
      ;(eD[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => () => {
            ;(null != tj.current && clearTimeout(tj.current), tw.current?.abort())
          }),
          (h = []),
          (eD[10] = p),
          (eD[11] = h))
        : ((p = eD[10]), (h = eD[11])),
        (0, n.useEffect)(p, h),
        eD[12] !== ts
          ? ((g = () => {
              if (ts)
                return (
                  window.addEventListener("beforeunload", ev),
                  () => window.removeEventListener("beforeunload", ev)
                )
            }),
            (m = [ts]),
            (eD[12] = ts),
            (eD[13] = m),
            (eD[14] = g))
          : ((m = eD[13]), (g = eD[14])),
        (0, n.useEffect)(g, m),
        eD[15] !== te || eD[16] !== e5
          ? ((f = (e, t) =>
              e.auth?.type === "oauth" &&
              (te.auth?.type !== "oauth" ||
                te.domain !== t ||
                te.auth.authorization_url !== e.auth.authorization_url ||
                e.oauth_client_id ||
                e.oauth_client_secret) &&
              (!e.oauth_client_id || !e.oauth_client_secret)
                ? e5.formatMessage(ew.oauthCredentialsRequired)
                : e.auth?.type !== "service_http" || (te.auth?.type === "service_http" && te.domain === t) || e.api_key
                  ? null
                  : e5.formatMessage(ew.apiKeyRequired)),
            (eD[15] = te),
            (eD[16] = e5),
            (eD[17] = f))
          : (f = eD[17]))
      let tM = f
      eD[18] !== te ||
      eD[19] !== tM ||
      eD[20] !== eX ||
      eD[21] !== eW ||
      eD[22] !== e5 ||
      eD[23] !== e9 ||
      eD[24] !== e3 ||
      eD[25] !== e0
        ? ((_ = (e) => {
            if (eX) return
            if ((tu(e), !e.success)) return void tc(e.errors)
            if (eW.includes(e.spec.root_domain))
              return void tc([e5.formatMessage(ew.duplicateDomain, { domain: e.spec.root_domain })])
            let t = tM(e9, e.spec.root_domain)
            if (null != t) return void tc([t])
            let i = {
              ...e9,
              domain: e.spec.root_domain,
              json_schema: e9.raw_spec === te.raw_spec ? e9.json_schema : void 0,
            }
            ;(null != e.known_auth &&
              null != e.known_privacy_policy &&
              e9.auth?.type !== "oauth" &&
              ((i.auth = e.known_auth), (i.privacy_policy_url = e.known_privacy_policy)),
              e7(i),
              tt(i),
              tc([]),
              tr(!1),
              e3(!1),
              e0(i))
          }),
          (eD[18] = te),
          (eD[19] = tM),
          (eD[20] = eX),
          (eD[21] = eW),
          (eD[22] = e5),
          (eD[23] = e9),
          (eD[24] = e3),
          (eD[25] = e0),
          (eD[26] = _))
        : (_ = eD[26])
      let tB = (0, J.K)(_)
      eD[27] !== tB || eD[28] !== e5 || eD[29] !== eY
        ? ((y = (e, t) =>
            eY(e.raw_spec ?? "", t.signal)
              .then((e) => {
                t.signal.aborted || tB(e)
              })
              .catch(() => {
                t.signal.aborted || tc([e5.formatMessage(ew.validationFailed)])
              })
              .finally(() => {
                t.signal.aborted || tl(!1)
              })),
          (eD[27] = tB),
          (eD[28] = e5),
          (eD[29] = eY),
          (eD[30] = y))
        : (y = eD[30])
      let tG = (0, J.K)(y)
      eD[31] !== eX || eD[32] !== e3 || eD[33] !== tG
        ? ((b = (e) => {
            if (eX) return
            ;(null != tj.current && clearTimeout(tj.current), tw.current?.abort())
            let t = new AbortController()
            ;((tw.current = t),
              e7(e),
              ta(!0),
              tu(void 0),
              tc([]),
              tr(!0),
              e3(!0),
              tl(!0),
              (tj.current = setTimeout(() => {
                tG(e, t)
              }, 1e3)))
          }),
          (eD[31] = eX),
          (eD[32] = e3),
          (eD[33] = tG),
          (eD[34] = b))
        : (b = eD[34])
      let tF = b
      eD[35] !== e2 || eD[36] !== e3
        ? ((v = () => {
            ;(tw.current?.abort(), e3(!1), e2())
          }),
          (eD[35] = e2),
          (eD[36] = e3),
          (eD[37] = v))
        : (v = eD[37])
      let tz = v,
        tN = to
      if (0 === tN.length && tk?.success === !1) tN = tk.errors
      else if (0 === tN.length && null != tS && !ti) {
        let e, t
        ;(eD[38] !== e5 ? ((e = e5.formatMessage(ew.validationFailed)), (eD[38] = e5), (eD[39] = e)) : (e = eD[39]),
          eD[40] !== e ? ((t = [e]), (eD[40] = e), (eD[41] = t)) : (t = eD[41]),
          (tN = t))
      }
      let tR = ew.none
      ;(e9.auth?.type === "oauth" ? (tR = ew.oauth) : e9.auth?.type === "service_http" && (tR = ew.apiKey),
        eD[42] !== e5 ? ((j = e5.formatMessage(ew.back)), (eD[42] = e5), (eD[43] = j)) : (j = eD[43]),
        eD[44] !== tz || eD[45] !== ts
          ? ((w = () => (ts ? t_("discard") : tz())), (eD[44] = tz), (eD[45] = ts), (eD[46] = w))
          : (w = eD[46]),
        eD[47] === Symbol.for("react.memo_cache_sentinel") ? ((T = (0, a.jsx)(L.tOb, {})), (eD[47] = T)) : (T = eD[47]),
        eD[48] !== j || eD[49] !== w
          ? ((P = (0, a.jsx)(x.$, {
              type: "button",
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              "aria-label": j,
              onClick: w,
              children: T,
            })),
            (eD[48] = j),
            (eD[49] = w),
            (eD[50] = P))
          : (P = eD[50]),
        eD[51] !== eV
          ? ((S = (0, a.jsx)("h2", {
              className: "text-sm font-medium select-none",
              children: eV
                ? (0, a.jsx)(l.A, {
                    id: "gptBuilder.actions.addTitle",
                    defaultMessage: "Add actions",
                    description: "Title of the GPT action editor for a new action",
                  })
                : (0, a.jsx)(l.A, {
                    id: "gptBuilder.actions.editActionsTitle",
                    defaultMessage: "Edit actions",
                    description: "Title of the GPT action editor",
                  }),
            })),
            (eD[51] = eV),
            (eD[52] = S))
          : (S = eD[52]))
      let tI = eX || (eV && null == te.domain)
      ;(eD[53] !== e5 ? ((k = e5.formatMessage(ew.delete)), (eD[53] = e5), (eD[54] = k)) : (k = eD[54]),
        eD[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = () => t_("delete")), (M = (0, a.jsx)(L.cSG, {})), (eD[55] = C), (eD[56] = M))
          : ((C = eD[55]), (M = eD[56])),
        eD[57] !== tI || eD[58] !== k
          ? ((B = (0, a.jsx)(x.$, {
              type: "button",
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              disabled: tI,
              "aria-label": k,
              onClick: C,
              children: M,
            })),
            (eD[57] = tI),
            (eD[58] = k),
            (eD[59] = B))
          : (B = eD[59]),
        eD[60] !== P || eD[61] !== S || eD[62] !== B
          ? ((F = (0, a.jsxs)("div", {
              className: "flex h-14 shrink-0 items-center justify-between px-4",
              children: [P, S, B],
            })),
            (eD[60] = P),
            (eD[61] = S),
            (eD[62] = B),
            (eD[63] = F))
          : (F = eD[63]),
        eD[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (0, a.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, a.jsx)(l.A, {
                id: "gptBuilder.actions.description",
                defaultMessage: "Let your GPT retrieve information or take actions outside of ChatGPT",
                description: "Description of custom actions in the GPT editor",
              }),
            })),
            (eD[64] = z))
          : (z = eD[64]),
        eD[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, a.jsx)(W.X.Header, { title: (0, a.jsx)(l.A, { ...ew.authentication }) })), (eD[65] = N))
          : (N = eD[65]),
        eD[66] !== tR ? ((R = (0, a.jsx)(l.A, { ...tR })), (eD[66] = tR), (eD[67] = R)) : (R = eD[67]),
        eD[68] !== e5 ? ((I = e5.formatMessage(ew.authentication)), (eD[68] = e5), (eD[69] = I)) : (I = eD[69]),
        eD[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = () => th(!0)), (O = (0, a.jsx)(L.dqq, {})), (eD[70] = E), (eD[71] = O))
          : ((E = eD[70]), (O = eD[71])),
        eD[72] !== eX || eD[73] !== I
          ? (($ = (0, a.jsx)(x.$, {
              type: "button",
              color: "ghost",
              disabled: eX,
              "aria-label": I,
              onClick: E,
              children: O,
            })),
            (eD[72] = eX),
            (eD[73] = I),
            (eD[74] = $))
          : ($ = eD[74]),
        eD[75] !== R || eD[76] !== $
          ? ((q = (0, a.jsx)(V.t, { children: (0, a.jsx)(X.ic, { label: R, control: $ }) })),
            (eD[75] = R),
            (eD[76] = $),
            (eD[77] = q))
          : (q = eD[77]),
        eD[78] !== ts || eD[79] !== e9.auth?.type || eD[80] !== e9.domain || eD[81] !== e6
          ? ((U =
              e9.auth?.type === "oauth" &&
              (0, a.jsx)(eo, { metadata: ts ? void 0 : e6.find((e) => e.domain === e9.domain) })),
            (eD[78] = ts),
            (eD[79] = e9.auth?.type),
            (eD[80] = e9.domain),
            (eD[81] = e6),
            (eD[82] = U))
          : (U = eD[82]),
        eD[83] !== q || eD[84] !== U
          ? ((H = (0, a.jsxs)(W.X, { children: [N, q, U] })), (eD[83] = q), (eD[84] = U), (eD[85] = H))
          : (H = eD[85]))
      let tE = `${e8}-schema`
      ;(eD[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = (0, a.jsx)(l.A, {
            id: "gptBuilder.actions.schemaTitle",
            defaultMessage: "Schema",
            description: "Label for the OpenAPI schema editor",
          })),
          (eD[86] = Y))
        : (Y = eD[86]),
        eD[87] !== tE
          ? ((Q = (0, a.jsx)(W.X.Header, { title: (0, a.jsx)("label", { htmlFor: tE, children: Y }) })),
            (eD[87] = tE),
            (eD[88] = Q))
          : (Q = eD[88]))
      let tO = eX || null == eQ
      ;(eD[89] !== tm ? ((et = () => tg(!tm)), (eD[89] = tm), (eD[90] = et)) : (et = eD[90]),
        eD[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.importUrl",
              defaultMessage: "Import from URL",
              description: "Open a URL field to import an OpenAPI schema",
            })),
            (eD[91] = ei))
          : (ei = eD[91]),
        eD[92] !== tO || eD[93] !== et
          ? ((ea = (0, a.jsx)(x.$, { type: "button", color: "secondary", disabled: tO, onClick: et, children: ei })),
            (eD[92] = tO),
            (eD[93] = et),
            (eD[94] = ea))
          : (ea = eD[94]),
        eD[95] !== tF || eD[96] !== e9
          ? ((er = (e) => tF({ ...e9, raw_spec: e })), (eD[95] = tF), (eD[96] = e9), (eD[97] = er))
          : (er = eD[97]),
        eD[98] !== eX || eD[99] !== er
          ? ((en = (0, a.jsx)(ed, { disabled: eX, onSelect: er })), (eD[98] = eX), (eD[99] = er), (eD[100] = en))
          : (en = eD[100]),
        eD[101] !== ea || eD[102] !== en
          ? ((el = (0, a.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [ea, en] })),
            (eD[101] = ea),
            (eD[102] = en),
            (eD[103] = el))
          : (el = eD[103]),
        eD[104] !== tF || eD[105] !== eX || eD[106] !== e9 || eD[107] !== eQ || eD[108] !== tm
          ? ((ec =
              tm &&
              null != eQ &&
              (0, a.jsx)(eg, {
                disabled: eX,
                onImport: eQ,
                onClose: () => tg(!1),
                onLoaded: (e) => {
                  ;(tF({ ...e9, raw_spec: ej(e) }), tg(!1))
                },
              })),
            (eD[104] = tF),
            (eD[105] = eX),
            (eD[106] = e9),
            (eD[107] = eQ),
            (eD[108] = tm),
            (eD[109] = ec))
          : (ec = eD[109]),
        eD[110] !== e9.raw_spec
          ? ((eu =
              !e9.raw_spec &&
              (0, a.jsx)(x.z, {
                to: "/g/g-TYEliDU6A-actionsgpt",
                target: "_blank",
                color: "secondary",
                children: (0, a.jsx)(l.A, {
                  id: "gptBuilder.actions.actionsGpt",
                  defaultMessage: "Get help from ActionsGPT",
                  description: "Open ActionsGPT for help authoring an OpenAPI schema",
                }),
              })),
            (eD[110] = e9.raw_spec),
            (eD[111] = eu))
          : (eu = eD[111]))
      let t$ = `${e8}-schema`,
        tq = e9.raw_spec ?? ""
      ;(eD[112] !== e5
        ? ((ep = e5.formatMessage(ew.schemaPlaceholder)), (eD[112] = e5), (eD[113] = ep))
        : (ep = eD[113]),
        eD[114] !== tF || eD[115] !== e9
          ? ((eh = (e) => tF({ ...e9, raw_spec: e.currentTarget.value })),
            (eD[114] = tF),
            (eD[115] = e9),
            (eD[116] = eh))
          : (eh = eD[116]),
        eD[117] !== eX || eD[118] !== t$ || eD[119] !== tq || eD[120] !== ep || eD[121] !== eh
          ? ((em = (0, a.jsx)(D.TM, {
              id: t$,
              name: "schema",
              rows: 20,
              value: tq,
              dir: "ltr",
              spellCheck: !1,
              disabled: eX,
              placeholder: ep,
              onChange: eh,
            })),
            (eD[117] = eX),
            (eD[118] = t$),
            (eD[119] = tq),
            (eD[120] = ep),
            (eD[121] = eh),
            (eD[122] = em))
          : (em = eD[122]),
        eD[123] !== tC
          ? ((ef =
              tC &&
              (0, a.jsx)(l.A, {
                id: "gptBuilder.actions.validating",
                defaultMessage: "Validating schema…",
                description: "Status while the server checks an action's OpenAPI schema",
              })),
            (eD[123] = tC),
            (eD[124] = ef))
          : (ef = eD[124]),
        eD[125] !== ef
          ? ((e_ = (0, a.jsx)("span", { role: "status", className: "text-sm text-secondary", children: ef })),
            (eD[125] = ef),
            (eD[126] = e_))
          : (e_ = eD[126]))
      let tL = eX || !e9.raw_spec
      ;(eD[127] !== tF || eD[128] !== e9
        ? ((eA = () => tF({ ...e9, raw_spec: ej(e9.raw_spec ?? "") })), (eD[127] = tF), (eD[128] = e9), (eD[129] = eA))
        : (eA = eD[129]),
        eD[130] === Symbol.for("react.memo_cache_sentinel")
          ? ((eT = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.format",
              defaultMessage: "Format",
              description: "Format the action schema as JSON or YAML",
            })),
            (eD[130] = eT))
          : (eT = eD[130]),
        eD[131] !== tL || eD[132] !== eA
          ? ((eP = (0, a.jsx)(x.$, { type: "button", color: "secondary", disabled: tL, onClick: eA, children: eT })),
            (eD[131] = tL),
            (eD[132] = eA),
            (eD[133] = eP))
          : (eP = eD[133]),
        eD[134] !== e_ || eD[135] !== eP
          ? ((eS = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [e_, eP] })),
            (eD[134] = e_),
            (eD[135] = eP),
            (eD[136] = eS))
          : (eS = eD[136]),
        eD[137] !== tF || eD[138] !== eX || eD[139] !== e9 || eD[140] !== tN || eD[141] !== tC
          ? ((ek =
              tN.length > 0 &&
              (0, a.jsxs)("div", {
                role: "alert",
                className: "text-error text-sm",
                children: [
                  tN.map(ex),
                  (0, a.jsx)(x.$, {
                    type: "button",
                    color: "secondary",
                    disabled: eX || tC,
                    onClick: () => tF(e9),
                    children: (0, a.jsx)(l.A, {
                      id: "gptBuilder.actions.retry",
                      defaultMessage: "Try again",
                      description: "Retry validation of the action schema",
                    }),
                  }),
                ],
              })),
            (eD[137] = tF),
            (eD[138] = eX),
            (eD[139] = e9),
            (eD[140] = tN),
            (eD[141] = tC),
            (eD[142] = ek))
          : (ek = eD[142]),
        eD[143] !== tk ? ((eC = tk?.success && tk.warnings?.map(eb)), (eD[143] = tk), (eD[144] = eC)) : (eC = eD[144]),
        eD[145] !== Q ||
        eD[146] !== el ||
        eD[147] !== ec ||
        eD[148] !== eu ||
        eD[149] !== em ||
        eD[150] !== eS ||
        eD[151] !== ek ||
        eD[152] !== eC
          ? ((eM = (0, a.jsxs)(W.X, { children: [Q, el, ec, eu, em, eS, ek, eC] })),
            (eD[145] = Q),
            (eD[146] = el),
            (eD[147] = ec),
            (eD[148] = eu),
            (eD[149] = em),
            (eD[150] = eS),
            (eD[151] = ek),
            (eD[152] = eC),
            (eD[153] = eM))
          : (eM = eD[153]),
        eD[154] !== ts || eD[155] !== eX || eD[156] !== eZ || eD[157] !== tk || eD[158] !== tx || eD[159] !== ty
          ? ((eB =
              tk?.success &&
              (0, a.jsxs)(W.X, {
                children: [
                  (0, a.jsx)(W.X.Header, {
                    title: (0, a.jsx)(l.A, {
                      id: "gptBuilder.actions.available",
                      defaultMessage: "Available actions",
                      description: "Heading for operations parsed from an OpenAPI schema",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, a.jsxs)("table", {
                      className: "w-full text-start text-sm",
                      children: [
                        (0, a.jsx)("thead", {
                          children: (0, a.jsxs)("tr", {
                            children: [
                              (0, a.jsx)("th", {
                                className: "py-2 text-start",
                                children: (0, a.jsx)(l.A, {
                                  id: "gptBuilder.actions.operationName",
                                  defaultMessage: "Name",
                                  description: "Column for API operation name",
                                }),
                              }),
                              (0, a.jsx)("th", {
                                className: "py-2 text-start",
                                children: (0, a.jsx)(l.A, {
                                  id: "gptBuilder.actions.operationMethod",
                                  defaultMessage: "Method",
                                  description: "Column for HTTP operation method",
                                }),
                              }),
                              (0, a.jsx)("th", {
                                className: "py-2 text-start",
                                children: (0, a.jsx)(l.A, {
                                  id: "gptBuilder.actions.operationPath",
                                  defaultMessage: "Path",
                                  description: "Column for API operation path",
                                }),
                              }),
                              (0, a.jsx)("th", {
                                children: (0, a.jsx)("span", {
                                  className: "sr-only",
                                  children: (0, a.jsx)(l.A, { ...ew.test }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("tbody", {
                          children: tk.spec.operations.map((e) =>
                            (0, a.jsxs)(
                              "tr",
                              {
                                children: [
                                  (0, a.jsx)("td", { className: "py-2 break-all", children: e.operationName }),
                                  (0, a.jsx)("td", { className: "px-2 py-2", children: e.method }),
                                  (0, a.jsx)("td", { className: "py-2 break-all", children: e.path }),
                                  (0, a.jsx)("td", {
                                    className: "py-2",
                                    children: (0, a.jsx)(x.$, {
                                      type: "button",
                                      color: "secondary",
                                      disabled: eX || ts || ty || null == eZ,
                                      onClick: () => {
                                        null != eZ &&
                                          (tb(!0),
                                          tv(!1),
                                          eZ(tk.spec.root_domain, e.operationName)
                                            .catch(() => tv(!0))
                                            .finally(() => tb(!1)))
                                      },
                                      children: (0, a.jsx)(l.A, { ...ew.test }),
                                    }),
                                  }),
                                ],
                              },
                              e.operationName,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  tx &&
                    (0, a.jsx)("p", {
                      role: "alert",
                      className: "text-error",
                      children: (0, a.jsx)(l.A, {
                        id: "gptBuilder.actions.testFailed",
                        defaultMessage: "Couldn’t start the action test. Try again",
                        description: "Error starting an operation in the GPT preview",
                      }),
                    }),
                ],
              })),
            (eD[154] = ts),
            (eD[155] = eX),
            (eD[156] = eZ),
            (eD[157] = tk),
            (eD[158] = tx),
            (eD[159] = ty),
            (eD[160] = eB))
          : (eB = eD[160]),
        eD[161] !== eJ
          ? ((eG =
              null != eJ &&
              (eJ.length
                ? (0, a.jsxs)("details", {
                    children: [
                      (0, a.jsx)("summary", {
                        className: "cursor-interaction text-sm font-medium",
                        children: (0, a.jsx)(l.A, {
                          id: "gptBuilder.actions.allowedDomains",
                          defaultMessage: "Domains allowed by your workspace",
                          description: "Expandable list of domains allowed for actions by the workspace administrator",
                        }),
                      }),
                      (0, a.jsx)("ul", { className: "list-disc ps-4", children: eJ.map(ey) }),
                    ],
                  })
                : (0, a.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(l.A, {
                      id: "gptBuilder.actions.noDomains",
                      defaultMessage: "No domains are allowed by your workspace’s settings",
                      description: "Workspace policy disallows all custom action domains",
                    }),
                  }))),
            (eD[161] = eJ),
            (eD[162] = eG))
          : (eG = eD[162]))
      let tU = `${e8}-privacy`
      ;(eD[163] === Symbol.for("react.memo_cache_sentinel")
        ? ((eF = (0, a.jsx)(l.A, {
            id: "gptBuilder.actions.privacyTitle",
            defaultMessage: "Privacy policy",
            description: "Label for the action's privacy policy URL",
          })),
          (eD[163] = eF))
        : (eF = eD[163]),
        eD[164] !== tU
          ? ((ez = (0, a.jsx)("label", { htmlFor: tU, children: eF })), (eD[164] = tU), (eD[165] = ez))
          : (ez = eD[165]),
        eD[166] === Symbol.for("react.memo_cache_sentinel")
          ? ((eN = (0, a.jsx)(l.A, {
              id: "gptBuilder.actions.privacyHelp",
              defaultMessage: "Privacy policy is required for all public GPTs",
              description: "Help for the action privacy policy URL",
            })),
            (eD[166] = eN))
          : (eN = eD[166]),
        eD[167] !== ez
          ? ((eR = (0, a.jsx)(W.X.Header, { title: ez, subtitle: eN })), (eD[167] = ez), (eD[168] = eR))
          : (eR = eD[168]))
      let tD = `${e8}-privacy`,
        tH = e9.privacy_policy_url ?? ""
      return (
        eD[169] !== tF || eD[170] !== e9
          ? ((eI = (e) => tF({ ...e9, privacy_policy_url: e.currentTarget.value })),
            (eD[169] = tF),
            (eD[170] = e9),
            (eD[171] = eI))
          : (eI = eD[171]),
        eD[172] !== eX || eD[173] !== tD || eD[174] !== tH || eD[175] !== eI
          ? ((eE = (0, a.jsx)(D.pd, {
              id: tD,
              name: "privacy",
              type: "url",
              value: tH,
              disabled: eX,
              placeholder: "https://app.example.com/privacy",
              onChange: eI,
            })),
            (eD[172] = eX),
            (eD[173] = tD),
            (eD[174] = tH),
            (eD[175] = eI),
            (eD[176] = eE))
          : (eE = eD[176]),
        eD[177] !== eR || eD[178] !== eE
          ? ((eO = (0, a.jsxs)(W.X, { children: [eR, eE] })), (eD[177] = eR), (eD[178] = eE), (eD[179] = eO))
          : (eO = eD[179]),
        eD[180] !== H || eD[181] !== eM || eD[182] !== eB || eD[183] !== eG || eD[184] !== eO
          ? ((e$ = (0, a.jsx)("div", {
              className: "min-h-0 flex-1 overflow-y-auto p-panel",
              children: (0, a.jsxs)(K.P, { embedded: !0, fullWidth: !0, children: [z, H, eM, eB, eG, eO] }),
            })),
            (eD[180] = H),
            (eD[181] = eM),
            (eD[182] = eB),
            (eD[183] = eG),
            (eD[184] = eO),
            (eD[185] = e$))
          : (e$ = eD[185]),
        eD[186] !== tF || eD[187] !== tM || eD[188] !== eX || eD[189] !== e9 || eD[190] !== tp || eD[191] !== e4
          ? ((eq =
              tp &&
              (0, a.jsx)(es, {
                metadata: e9,
                subscribeToSaves: e4,
                disabled: eX,
                onClose: () => th(!1),
                onSave: (e) => {
                  let t = tM(e, e.domain)
                  return (null == t && tF(e), t)
                },
              })),
            (eD[186] = tF),
            (eD[187] = tM),
            (eD[188] = eX),
            (eD[189] = e9),
            (eD[190] = tp),
            (eD[191] = e4),
            (eD[192] = eq))
          : (eq = eD[192]),
        eD[193] !== tz || eD[194] !== tf || eD[195] !== eX || eD[196] !== e1
          ? ((eL =
              null != tf &&
              (0, a.jsx)(Z.lG, {
                open: !0,
                onOpenChange: (e) => {
                  e || t_(null)
                },
                children: (0, a.jsxs)(ee.R4, {
                  as: "form",
                  onSubmit: (e) => {
                    if ((e.preventDefault(), "delete" === tf)) {
                      if (eX) return
                      e1()
                    }
                    tz()
                  },
                  children: [
                    (0, a.jsx)(ee.c7, {
                      title: (0, a.jsx)(Z.L3, {
                        children:
                          "delete" === tf
                            ? (0, a.jsx)(l.A, { ...ew.delete })
                            : (0, a.jsx)(l.A, {
                                id: "gptBuilder.actions.discardTitle",
                                defaultMessage: "Discard unsaved action changes?",
                                description:
                                  "Confirm leaving the action editor while changes are invalid or still being validated",
                              }),
                      }),
                    }),
                    (0, a.jsx)(ee.OO, {
                      children: (0, a.jsx)("p", {
                        children:
                          "delete" === tf
                            ? (0, a.jsx)(l.A, {
                                id: "gptBuilder.actions.deleteDescription",
                                defaultMessage: "This removes the action from this GPT’s draft",
                                description: "Explanation of deleting a custom action",
                              })
                            : (0, a.jsx)(l.A, {
                                id: "gptBuilder.actions.discardDescription",
                                defaultMessage:
                                  "These changes haven’t been saved. Stay here to fix or finish validating the schema",
                                description: "Explanation of unsaved action edits before leaving the editor",
                              }),
                      }),
                    }),
                    (0, a.jsxs)(ee.Es, {
                      children: [
                        (0, a.jsx)(x.$, {
                          type: "button",
                          color: "secondary",
                          onClick: () => t_(null),
                          children: (0, a.jsx)(l.A, {
                            id: "gptBuilder.actions.stay",
                            defaultMessage: "Cancel",
                            description: "Cancel deleting or discarding a GPT action",
                          }),
                        }),
                        (0, a.jsx)(x.$, {
                          type: "submit",
                          disabled: "delete" === tf && eX,
                          children:
                            "delete" === tf
                              ? (0, a.jsx)(l.A, { ...ew.delete })
                              : (0, a.jsx)(l.A, {
                                  id: "gptBuilder.actions.discard",
                                  defaultMessage: "Discard changes",
                                  description: "Discard pending action edits and return to Configure",
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              })),
            (eD[193] = tz),
            (eD[194] = tf),
            (eD[195] = eX),
            (eD[196] = e1),
            (eD[197] = eL))
          : (eL = eD[197]),
        eD[198] !== F || eD[199] !== e$ || eD[200] !== eq || eD[201] !== eL
          ? ((eU = (0, a.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [F, e$, eq, eL] })),
            (eD[198] = F),
            (eD[199] = e$),
            (eD[200] = eq),
            (eD[201] = eL),
            (eD[202] = eU))
          : (eU = eD[202]),
        eU
      )
    }
    function ey(e) {
      return (0, a.jsx)("li", { children: e }, e)
    }
    function eb(e, t) {
      return (0, a.jsx)("p", { className: "text-sm text-secondary", children: e }, t)
    }
    function ex(e, t) {
      return (0, a.jsx)("p", { children: e }, t)
    }
    function ev(e) {
      e.preventDefault()
    }
    function ej(e) {
      try {
        return JSON.stringify(JSON.parse(e), null, 2)
      } catch {
        try {
          return Q.Ay.As(Q.Ay.qg(e), { lineWidth: 120, indent: 2 })
        } catch {
          return e
        }
      }
    }
    let ew = (0, Y.YK)({
      back: {
        id: "gptBuilder.actions.back",
        defaultMessage: "Back to Configure",
        description: "Return from action editing to GPT configuration",
      },
      delete: {
        id: "gptBuilder.actions.delete",
        defaultMessage: "Delete action",
        description: "Remove this action from the GPT draft",
      },
      authentication: {
        id: "gptBuilder.actions.authentication",
        defaultMessage: "Authentication",
        description: "Open authentication settings for the GPT action",
      },
      none: {
        id: "gptBuilder.actions.noAuth",
        defaultMessage: "None",
        description: "No authentication for a GPT custom action",
      },
      apiKey: {
        id: "gptBuilder.actions.apiKey",
        defaultMessage: "API key",
        description: "API key authentication for a GPT custom action",
      },
      oauth: {
        id: "gptBuilder.actions.oauth",
        defaultMessage: "OAuth",
        description: "OAuth authentication for a GPT custom action",
      },
      test: {
        id: "gptBuilder.actions.test",
        defaultMessage: "Test",
        description: "Test this API operation in the GPT preview",
      },
      schemaPlaceholder: {
        id: "gptBuilder.actions.schemaPlaceholder",
        defaultMessage: "Enter your OpenAPI schema here",
        description: "Placeholder for the action's OpenAPI JSON or YAML",
      },
      duplicateDomain: {
        id: "gptBuilder.actions.duplicateDomain",
        defaultMessage: "An action for {domain} already exists",
        description: "Error when another action already uses this API hostname",
      },
      oauthCredentialsRequired: {
        id: "gptBuilder.actions.oauthCredentialsRequired",
        defaultMessage:
          "Enter both the client ID and client secret when replacing OAuth credentials or changing the action’s domain or token URL",
        description: "Both credentials are required to create or replace the OAuth client",
      },
      apiKeyRequired: {
        id: "gptBuilder.actions.apiKeyRequired",
        defaultMessage: "Enter an API key when setting up authentication or changing the action’s domain",
        description: "An API key is required when creating or changing an action's authentication domain",
      },
      validationFailed: {
        id: "gptBuilder.actions.validationFailed",
        defaultMessage: "Couldn’t validate this action. Try again",
        description: "Recoverable server validation error for a GPT action schema",
      },
    })
    function eA(e) {
      let t = []
      return (
        e.display.name.length > 50 && t.push("name"),
        e.display.description.length > 300 && t.push("description"),
        e.instructions.length > 8e3 && t.push("instructions"),
        t
      )
    }
    function eT(e) {
      let t,
        i,
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
        y,
        v,
        j,
        w,
        A,
        T,
        P,
        S,
        k,
        C,
        M,
        B,
        G,
        F,
        z,
        N,
        R,
        I,
        q,
        Y,
        Q,
        Z,
        ee,
        et,
        ei,
        ea = (0, s.c)(121),
        {
          draft: es,
          onChange: er,
          conversation: en,
          preview: el,
          onPublish: eo,
          onShare: ec,
          isBusy: ed,
          saveState: eu,
          onRetrySave: ep,
          magicCreateDisabled: eh,
          title: em,
          avatarUrl: eg,
          isPublished: ey,
          readOnly: eb,
          hasSavedDraft: ex,
          browsingAllowed: ev,
          onBack: ej,
          onValidateAction: ew,
          onImportAction: eT,
          onTestAction: eS,
          subscribeToSaves: ek,
          allowedActionDomains: eC,
          savedActions: eM,
          onUploadFiles: eB,
          onCancelUploadFiles: eG,
          isUploadingFiles: eF,
          maxKnowledgeFiles: ez,
          defaultTab: eN,
        } = e,
        eR = void 0 !== ey && ey,
        eI = void 0 !== eb && eb,
        eE = void 0 === ex || ex
      ea[0] !== eM ? ((t = void 0 === eM ? [] : eM), (ea[0] = eM), (ea[1] = t)) : (t = ea[1])
      let eO = t,
        e$ = void 0 !== eF && eF,
        eq = void 0 === eN ? "create" : eN,
        eL = (0, o.A)(),
        eU = ed || eI,
        eD = (0, n.useId)(),
        eH = (0, n.useRef)(null),
        [eK, eW] = (0, n.useState)(null),
        [eX, eV] = (0, n.useState)(!1)
      ea[2] !== eU || ea[3] !== es || ea[4] !== eK || ea[5] !== er
        ? ((i = (e) => {
            if (eU || null == eK) return
            let t = [...(es.tools ?? [])]
            ;((t[eK.index] = { type: "plugins_prototype", metadata: e }), er({ ...es, tools: t }))
          }),
          (ea[2] = eU),
          (ea[3] = es),
          (ea[4] = eK),
          (ea[5] = er),
          (ea[6] = i))
        : (i = ea[6])
      let eJ = (0, J.K)(i),
        eY = eA(es),
        eQ = eY.length > 0,
        eZ = null != ez && es.files.length >= ez,
        [e0, e1] = (0, n.useState)(eh || "configure" === eq ? "configure" : "create"),
        [e2, e3] = (0, n.useState)("preview" === eq)
      ea[7] !== eh || ea[8] !== e2
        ? ((r = (e) => {
            e.contentRect.width > 0 && e2 && (e3(!1), e1(eh ? "configure" : "create"))
          }),
          (ea[7] = eh),
          (ea[8] = e2),
          (ea[9] = r))
        : (r = ea[9])
      let e4 = (0, H.wY)(r),
        e6 = eh ? "configure" : e0,
        e5 = em ?? es.display.name
      ;(ea[10] !== eh
        ? ((c = eh
            ? []
            : [
                {
                  key: "create",
                  name: (0, a.jsx)(l.A, {
                    id: "gptBuilder.createTab",
                    defaultMessage: "Create",
                    description: "Tab for creating a GPT through a conversation with the GPT Builder",
                  }),
                },
              ]),
          (ea[10] = eh),
          (ea[11] = c))
        : (c = ea[11]),
        ea[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = {
              key: "configure",
              name: (0, a.jsx)(l.A, {
                id: "gptBuilder.configureTab",
                defaultMessage: "Configure",
                description: "Tab for editing the GPT's name, instructions, and capabilities directly",
              }),
            }),
            (ea[12] = d))
          : (d = ea[12]),
        ea[13] !== c ? ((u = [...c, d]), (ea[13] = c), (ea[14] = u)) : (u = ea[14]))
      let e8 = u
      ea[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, a.jsx)(l.A, {
            id: "gptBuilder.preview",
            defaultMessage: "Preview",
            description: "Heading and tab for trying the draft GPT before publishing it",
          })),
          (ea[15] = p))
        : (p = ea[15])
      let e9 = p
      ea[16] !== eL
        ? ((h = eL.formatMessage({
            id: "gptBuilder.tabsLabel",
            defaultMessage: "GPT editor",
            description: "Accessible label for the GPT editor's Create, Configure, and Preview tabs",
          })),
          (ea[16] = eL),
          (ea[17] = h))
        : (h = ea[17])
      let e7 = h
      ea[18] !== eX || ea[19] !== eL || ea[20] !== ej
        ? ((m =
            null != ej &&
            (0, a.jsx)(x.$, {
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              disabled: eX,
              onClick: ej,
              "aria-label": eL.formatMessage({
                id: "gptBuilder.back",
                defaultMessage: "Back to GPTs",
                description: "Accessible label for leaving the GPT editor and returning to GPT discovery",
              }),
              children: (0, a.jsx)(L.tOb, {}),
            })),
          (ea[18] = eX),
          (ea[19] = eL),
          (ea[20] = ej),
          (ea[21] = m))
        : (m = ea[21])
      let te = eg ?? es.display.profile_picture_url ?? null
      ;(ea[22] !== e5 || ea[23] !== te
        ? ((g = (0, a.jsx)($.S, { presentation: "list-avatar", customGpt: { id: "draft", name: e5, iconUrl: te } })),
          (ea[22] = e5),
          (ea[23] = te),
          (ea[24] = g))
        : (g = ea[24]),
        ea[25] !== e5
          ? ((f =
              e5 ||
              (0, a.jsx)(l.A, {
                id: "gptBuilder.newGpt",
                defaultMessage: "New GPT",
                description: "Title of a GPT draft before it has a name",
              })),
            (ea[25] = e5),
            (ea[26] = f))
          : (f = ea[26]),
        ea[27] !== f
          ? ((_ = (0, a.jsx)("span", { className: "truncate text-sm font-medium", children: f })),
            (ea[27] = f),
            (ea[28] = _))
          : (_ = ea[28]),
        ea[29] !== eX || ea[30] !== eE || ea[31] !== eQ || ea[32] !== eu
          ? ((y =
              "saved" === eu &&
              eE &&
              !eQ &&
              !eX &&
              (0, a.jsx)(l.A, {
                id: "gptBuilder.draftSaved",
                defaultMessage: "Draft saved",
                description: "Status confirming that the GPT draft has been saved",
              })),
            (ea[29] = eX),
            (ea[30] = eE),
            (ea[31] = eQ),
            (ea[32] = eu),
            (ea[33] = y))
          : (y = ea[33]),
        ea[34] !== eX || ea[35] !== eE || ea[36] !== eQ || ea[37] !== eu
          ? ((v =
              "saved" === eu &&
              !eE &&
              !eQ &&
              !eX &&
              (0, a.jsx)(l.A, {
                id: "gptBuilder.draft",
                defaultMessage: "Draft",
                description: "Status of a new GPT draft that has not been saved yet",
              })),
            (ea[34] = eX),
            (ea[35] = eE),
            (ea[36] = eQ),
            (ea[37] = eu),
            (ea[38] = v))
          : (v = ea[38]),
        ea[39] !== eX || ea[40] !== eQ || ea[41] !== eu
          ? ((j =
              "saving" === eu &&
              !eQ &&
              !eX &&
              (0, a.jsx)(l.A, {
                id: "gptBuilder.saving",
                defaultMessage: "Saving…",
                description: "Status while changes to a GPT draft are being saved",
              })),
            (ea[39] = eX),
            (ea[40] = eQ),
            (ea[41] = eu),
            (ea[42] = j))
          : (j = ea[42]),
        ea[43] !== eX || ea[44] !== eQ || ea[45] !== eu
          ? ((w =
              ("error" === eu || eQ || eX) &&
              (0, a.jsx)(l.A, {
                id: "gptBuilder.unsaved",
                defaultMessage: "Unsaved changes",
                description: "Status when saving the GPT draft failed",
              })),
            (ea[43] = eX),
            (ea[44] = eQ),
            (ea[45] = eu),
            (ea[46] = w))
          : (w = ea[46]),
        ea[47] !== y || ea[48] !== v || ea[49] !== j || ea[50] !== w
          ? ((A = (0, a.jsxs)("span", {
              className: "text-xs text-secondary select-none",
              role: "status",
              children: [y, v, j, w],
            })),
            (ea[47] = y),
            (ea[48] = v),
            (ea[49] = j),
            (ea[50] = w),
            (ea[51] = A))
          : (A = ea[51]),
        ea[52] !== _ || ea[53] !== A
          ? ((T = (0, a.jsxs)("div", { className: "flex min-w-0 flex-col", children: [_, A] })),
            (ea[52] = _),
            (ea[53] = A),
            (ea[54] = T))
          : (T = ea[54]),
        ea[55] !== m || ea[56] !== g || ea[57] !== T
          ? ((P = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [m, g, T] })),
            (ea[55] = m),
            (ea[56] = g),
            (ea[57] = T),
            (ea[58] = P))
          : (P = ea[58]),
        ea[59] !== eX ||
        ea[60] !== es.display ||
        ea[61] !== eQ ||
        ea[62] !== ed ||
        ea[63] !== eR ||
        ea[64] !== eo ||
        ea[65] !== ec ||
        ea[66] !== eI ||
        ea[67] !== eu
          ? ((S = (0, a.jsx)(O.G.HeaderToolbar.Actions, {
              children: eI
                ? (0, a.jsx)(l.A, {
                    id: "gptBuilder.readOnly",
                    defaultMessage: "Read only",
                    description:
                      "Status in the GPT editor header when viewing configuration without permission to save changes, including migrated or retired GPTs",
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      eR &&
                        null != ec &&
                        (0, a.jsx)(x.$, {
                          color: "secondary",
                          disabled: ed || eX,
                          onClick: ec,
                          children: (0, a.jsx)(l.A, {
                            id: "gptBuilder.share",
                            defaultMessage: "Share",
                            description: "Open sharing settings for the published GPT",
                          }),
                        }),
                      null == ec &&
                        (0, a.jsx)("span", {
                          className: "text-sm text-secondary select-none",
                          children: eR
                            ? (0, a.jsx)(l.A, {
                                id: "gptBuilder.sharingPreserved",
                                defaultMessage: "Sharing unchanged",
                                description:
                                  "GPT editor header notice that updating a published GPT preserves its current audience and permissions",
                              })
                            : (0, a.jsx)(l.A, {
                                id: "gptBuilder.privateVisibility",
                                defaultMessage: "Only you",
                                description:
                                  "Visibility of the GPT being created; only its creator can use it until sharing is changed",
                              }),
                        }),
                      (0, a.jsx)(x.$, {
                        disabled: ed || "saved" !== eu || eQ || eX || !es.display.name.trim(),
                        loading: ed,
                        onClick: eo,
                        children: eR
                          ? (0, a.jsx)(l.A, {
                              id: "gptBuilder.update",
                              defaultMessage: "Update",
                              description: "Button that publishes edits to an existing GPT",
                            })
                          : (0, a.jsx)(l.A, {
                              id: "gptBuilder.publish",
                              defaultMessage: "Create",
                              description: "Button that saves a completed GPT draft as a private GPT",
                            }),
                      }),
                    ],
                  }),
            })),
            (ea[59] = eX),
            (ea[60] = es.display),
            (ea[61] = eQ),
            (ea[62] = ed),
            (ea[63] = eR),
            (ea[64] = eo),
            (ea[65] = ec),
            (ea[66] = eI),
            (ea[67] = eu),
            (ea[68] = S))
          : (S = ea[68]),
        ea[69] !== P || ea[70] !== S
          ? ((k = (0, a.jsx)(O.G.Header, { children: (0, a.jsxs)(O.G.HeaderToolbar, { children: [P, S] }) })),
            (ea[69] = P),
            (ea[70] = S),
            (ea[71] = k))
          : (k = ea[71]),
        ea[72] !== eQ || ea[73] !== ep || ea[74] !== eu
          ? ((C =
              ("error" === eu || eQ) &&
              (0, a.jsx)("div", {
                className: "p-panel",
                children: (0, a.jsx)(b.l, {
                  type: "error",
                  role: "alert",
                  content: eQ
                    ? (0, a.jsx)(l.A, {
                        id: "gptBuilder.invalidFields",
                        defaultMessage: "Shorten the highlighted fields in Configure before saving",
                        description:
                          "Guidance when a GPT draft exceeds a name, description, or instructions character limit; the original text is retained for editing",
                      })
                    : (0, a.jsx)(l.A, {
                        id: "gptBuilder.saveError",
                        defaultMessage: "Your changes could not be saved",
                        description: "Error displayed when saving edits to a GPT draft fails",
                      }),
                  primaryCtaText: (0, a.jsx)(l.A, {
                    id: "gptBuilder.retrySave",
                    defaultMessage: "Retry",
                    description: "Button to retry saving a GPT draft after an error",
                  }),
                  isPrimaryCtaDisabled: eQ,
                  onPrimaryCtaClick: ep,
                }),
              })),
            (ea[72] = eQ),
            (ea[73] = ep),
            (ea[74] = eu),
            (ea[75] = C))
          : (C = ea[75]),
        ea[76] !== eK || ea[77] !== e8
          ? ((M = e8.filter((e) => null == eK || "configure" === e.key)), (ea[76] = eK), (ea[77] = e8), (ea[78] = M))
          : (M = ea[78]),
        ea[79] !== eD || ea[80] !== M
          ? ((B = M.map((e) => ({ ...e, panelId: `${eD}-${e.key}` }))), (ea[79] = eD), (ea[80] = M), (ea[81] = B))
          : (B = ea[81]))
      let tt = `${eD}-preview`
      ;(ea[82] !== e9 || ea[83] !== tt
        ? ((G = { key: "preview", name: e9, panelId: tt }), (ea[82] = e9), (ea[83] = tt), (ea[84] = G))
        : (G = ea[84]),
        ea[85] !== B || ea[86] !== G ? ((F = [...B, G]), (ea[85] = B), (ea[86] = G), (ea[87] = F)) : (F = ea[87]))
      let ti = e2 ? "preview" : e6
      ;(ea[88] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = (e) => {
            ;(e3("preview" === e), "preview" !== e && e1(e))
          }),
          (ea[88] = z))
        : (z = ea[88]),
        ea[89] !== F || ea[90] !== ti || ea[91] !== e7
          ? ((N = (0, a.jsx)("div", {
              className: "shrink-0 p-2 @3xl/gpt-builder:hidden",
              children: (0, a.jsx)(U.t, {
                fill: !0,
                tabs: F,
                selectedKey: ti,
                onSelect: z,
                variant: "inset",
                ariaLabel: e7,
              }),
            })),
            (ea[89] = F),
            (ea[90] = ti),
            (ea[91] = e7),
            (ea[92] = N))
          : (N = ea[92]))
      let ta = e2 ? "hidden" : "flex"
      ea[93] !== ta
        ? ((R = (0, E.A)("min-h-0 min-w-0 flex-1 flex-col @3xl/gpt-builder:flex", ta)), (ea[93] = ta), (ea[94] = R))
        : (R = ea[94])
      let ts =
        null != eK && null != ew
          ? (0, a.jsx)(
              e_,
              {
                metadata: eK.metadata,
                subscribeToSaves: ek,
                savedActions: "saved" === eu ? eO : [],
                isNew: eK.isNew,
                domains:
                  es.tools?.flatMap((e, t) =>
                    "plugins_prototype" === e.type && t !== eK.index ? [e.metadata.domain] : [],
                  ) ?? [],
                disabled: eU,
                allowedDomains: eC,
                onValidate: ew,
                onImport: eT,
                onTest:
                  null == eS
                    ? void 0
                    : async (e, t) => {
                        ;(e3(!0), await eS(e, t))
                      },
                onSave: eJ,
                onDirtyChange: eV,
                onClose: () => eW(null),
                onDelete: () => {
                  eU || er({ ...es, tools: es.tools?.filter((e, t) => t !== eK.index) })
                },
              },
              eK.index,
            )
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "hidden h-14 shrink-0 items-center justify-center px-4 @3xl/gpt-builder:flex",
                  children: (0, a.jsx)(U.t, {
                    className: "w-full max-w-md",
                    fill: !0,
                    tabs: e8,
                    selectedKey: e6,
                    onSelect: e1,
                    variant: "inset",
                    ariaLabel: e7,
                  }),
                }),
                (0, a.jsx)("div", {
                  className: (0, E.A)("min-h-0 flex-1 flex-col", "create" === e6 ? "flex" : "hidden"),
                  id: `${eD}-create`,
                  role: "tabpanel",
                  "aria-label": eL.formatMessage({
                    id: "gptBuilder.createPanel",
                    defaultMessage: "Create your GPT",
                    description: "Accessible name of the conversational GPT creation panel",
                  }),
                  children: en,
                }),
                (0, a.jsx)("div", {
                  className: (0, E.A)(
                    "min-h-0 flex-1 overflow-y-auto p-panel",
                    "configure" === e6 ? "block" : "hidden",
                  ),
                  id: `${eD}-configure`,
                  role: "tabpanel",
                  "aria-label": eL.formatMessage({
                    id: "gptBuilder.configurePanel",
                    defaultMessage: "Configure your GPT",
                    description: "Accessible name of the panel containing the GPT draft's editable fields",
                  }),
                  children: (0, a.jsxs)(K.P, {
                    embedded: !0,
                    fullWidth: !0,
                    children: [
                      (0, a.jsx)(W.X, {
                        children: (0, a.jsxs)(V.t, {
                          children: [
                            (0, a.jsx)(X.ic, {
                              variant: "stacked",
                              label: (0, a.jsx)(l.A, {
                                id: "gptBuilder.name",
                                defaultMessage: "Name",
                                description: "Label for the name of a custom GPT",
                              }),
                              description:
                                eY.includes("name") &&
                                (0, a.jsx)("span", {
                                  className: "text-danger",
                                  role: "alert",
                                  children: (0, a.jsx)(l.A, {
                                    id: "gptBuilder.nameTooLong",
                                    defaultMessage: "Name must be {limit} characters or fewer",
                                    description: "Validation error for a GPT name that exceeds its character limit",
                                    values: { limit: 50 },
                                  }),
                                }),
                              control: (e) =>
                                (0, a.jsx)(D.pd, {
                                  ...e,
                                  value: es.display.name,
                                  disabled: eU,
                                  "aria-invalid": eY.includes("name"),
                                  onChange: (e) => er({ ...es, display: { ...es.display, name: e.target.value } }),
                                }),
                            }),
                            (0, a.jsx)(X.ic, {
                              variant: "stacked",
                              label: (0, a.jsx)(l.A, {
                                id: "gptBuilder.description",
                                defaultMessage: "Description",
                                description: "Label for the short public description of a custom GPT",
                              }),
                              description:
                                eY.includes("description") &&
                                (0, a.jsx)("span", {
                                  className: "text-danger",
                                  role: "alert",
                                  children: (0, a.jsx)(l.A, {
                                    id: "gptBuilder.descriptionTooLong",
                                    defaultMessage: "Description must be {limit} characters or fewer",
                                    description:
                                      "Validation error for a GPT description that exceeds its character limit",
                                    values: { limit: 300 },
                                  }),
                                }),
                              control: (e) =>
                                (0, a.jsx)(D.TM, {
                                  ...e,
                                  rows: 2,
                                  value: es.display.description,
                                  disabled: eU,
                                  "aria-invalid": eY.includes("description"),
                                  onChange: (e) =>
                                    er({ ...es, display: { ...es.display, description: e.target.value } }),
                                }),
                            }),
                            (0, a.jsx)(X.ic, {
                              variant: "stacked",
                              label: (0, a.jsx)(l.A, {
                                id: "gptBuilder.instructions",
                                defaultMessage: "Instructions",
                                description: "Label for the instructions defining how a custom GPT should behave",
                              }),
                              description:
                                eY.includes("instructions") &&
                                (0, a.jsx)("span", {
                                  className: "text-danger",
                                  role: "alert",
                                  children: (0, a.jsx)(l.A, {
                                    id: "gptBuilder.instructionsTooLong",
                                    defaultMessage: "Instructions must be {limit} characters or fewer",
                                    description:
                                      "Validation error for GPT instructions that exceed their character limit",
                                    values: { limit: 8e3 },
                                  }),
                                }),
                              control: (e) =>
                                (0, a.jsx)(D.TM, {
                                  ...e,
                                  rows: 8,
                                  value: es.instructions,
                                  disabled: eU,
                                  "aria-invalid": eY.includes("instructions"),
                                  onChange: (e) => er({ ...es, instructions: e.target.value }),
                                }),
                            }),
                            (0, a.jsx)(X.ic, {
                              variant: "stacked",
                              label: (0, a.jsx)(l.A, {
                                id: "gptBuilder.starters",
                                defaultMessage: "Conversation starters",
                                description:
                                  "Label for example prompts people can use to start a conversation with the GPT",
                              }),
                              description: (0, a.jsx)(l.A, {
                                id: "gptBuilder.startersDescription",
                                defaultMessage: "Enter one suggestion per line",
                                description:
                                  "Help text for editing example GPT conversation prompts in a multiline field",
                              }),
                              control: (e) =>
                                (0, a.jsx)(D.TM, {
                                  ...e,
                                  rows: 4,
                                  value: es.display.prompt_starters?.join("\n") ?? "",
                                  disabled: eU,
                                  onChange: (e) =>
                                    er({
                                      ...es,
                                      display: { ...es.display, prompt_starters: e.target.value.split("\n") },
                                    }),
                                }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)(W.X, {
                        children: [
                          (0, a.jsx)(W.X.Header, {
                            title: (0, a.jsx)(l.A, {
                              id: "gptBuilder.knowledge",
                              defaultMessage: "Knowledge",
                              description: "Heading for reference files used as knowledge by a GPT",
                            }),
                            subtitle: (0, a.jsx)(l.A, {
                              id: "gptBuilder.knowledgeDescription",
                              defaultMessage:
                                "Conversations with your GPT can reveal part or all of the files uploaded",
                              description:
                                "Notice that people chatting with a GPT may receive content from its knowledge files",
                            }),
                          }),
                          (0, a.jsxs)(W.X.Content, {
                            children: [
                              es.files.length > 0 &&
                                (0, a.jsx)(V.t, {
                                  children: es.files.map((e) =>
                                    (0, a.jsx)(
                                      X.ic,
                                      {
                                        label: e.name,
                                        control: (0, a.jsx)(x.$, {
                                          color: "ghost",
                                          size: "compact",
                                          uniform: !0,
                                          disabled: eU,
                                          "aria-label": eL.formatMessage(
                                            {
                                              id: "gptBuilder.removeFile",
                                              defaultMessage: "Remove {name}",
                                              description:
                                                "Accessible label for removing a named file from the GPT's knowledge",
                                            },
                                            { name: e.name },
                                          ),
                                          onClick: () =>
                                            er({ ...es, files: es.files.filter((t) => t.file_id !== e.file_id) }),
                                          children: (0, a.jsx)(L.cSG, {}),
                                        }),
                                      },
                                      e.file_id,
                                    ),
                                  ),
                                }),
                              null != eB &&
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col items-start gap-2",
                                  children: [
                                    (0, a.jsx)("input", {
                                      ref: eH,
                                      className: "hidden",
                                      type: "file",
                                      multiple: !0,
                                      onChange: (e) => {
                                        let t = Array.from(e.currentTarget.files ?? [])
                                        ;((e.currentTarget.value = ""), t.length > 0 && eB(t))
                                      },
                                    }),
                                    (0, a.jsx)(x.$, {
                                      color: "secondary",
                                      disabled: eU || e$ || eZ || eQ,
                                      loading: e$,
                                      onClick: () => eH.current?.click(),
                                      children: (0, a.jsx)(l.A, {
                                        id: "gptBuilder.uploadFiles",
                                        defaultMessage: "Upload files",
                                        description:
                                          "Button that opens a file chooser for adding knowledge files to the GPT",
                                      }),
                                    }),
                                    e$ &&
                                      null != eG &&
                                      (0, a.jsx)(x.$, {
                                        color: "secondary",
                                        onClick: eG,
                                        children: (0, a.jsx)(l.A, {
                                          id: "gptBuilder.cancelUploadFiles",
                                          defaultMessage: "Cancel uploads",
                                          description:
                                            "Button that cancels the active knowledge file upload and skips the remaining selected files; files already saved stay attached",
                                        }),
                                      }),
                                    eZ &&
                                      (0, a.jsx)("p", {
                                        className: "text-sm text-secondary",
                                        children: (0, a.jsx)(l.A, {
                                          id: "gptBuilder.knowledgeLimitReached",
                                          defaultMessage:
                                            "You’ve reached the {limit} file limit. Remove a file to upload another",
                                          description:
                                            "Explanation beside a disabled Upload files button when a GPT has reached the account's knowledge file limit",
                                          values: { limit: ez },
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)(W.X, {
                        children: [
                          (0, a.jsx)(W.X.Header, {
                            title: (0, a.jsx)(l.A, {
                              id: "gptBuilder.capabilities",
                              defaultMessage: "Capabilities",
                              description: "Heading for the built-in tools that the GPT is allowed to use",
                            }),
                          }),
                          (0, a.jsxs)(V.t, {
                            children: [
                              (0, a.jsx)(eP, {
                                draft: es,
                                onChange: er,
                                type: "browser",
                                disabled: eU || !(void 0 === ev || ev),
                                label: (0, a.jsx)(l.A, {
                                  id: "gptBuilder.webSearch",
                                  defaultMessage: "Web search",
                                  description: "Capability allowing the custom GPT to search the web",
                                }),
                              }),
                              (0, a.jsx)(eP, {
                                draft: es,
                                onChange: er,
                                type: "image_gen",
                                disabled: eU,
                                label: (0, a.jsx)(l.A, {
                                  id: "gptBuilder.imageGeneration",
                                  defaultMessage: "Image generation",
                                  description: "Capability allowing the custom GPT to generate images",
                                }),
                              }),
                              (0, a.jsx)(eP, {
                                draft: es,
                                onChange: er,
                                type: "python",
                                disabled: eU,
                                label: (0, a.jsx)(l.A, {
                                  id: "gptBuilder.codeInterpreter",
                                  defaultMessage: "Code interpreter and data analysis",
                                  description:
                                    "Capability allowing the custom GPT to run code and analyze uploaded data",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(ef, {
                        savedActions: "saved" === eu ? eO : [],
                        draft: es,
                        disabled: eU || null == ew,
                        onEdit: (e, t) => eW({ index: e, metadata: t, isNew: e >= (es.tools?.length ?? 0) }),
                      }),
                    ],
                  }),
                }),
              ],
            })
      ea[95] !== R || ea[96] !== ts
        ? ((I = (0, a.jsx)("div", { className: R, children: ts })), (ea[95] = R), (ea[96] = ts), (ea[97] = I))
        : (I = ea[97])
      let tr = e2 ? "flex" : "hidden"
      ea[98] !== tr
        ? ((q = (0, E.A)(
            "min-h-0 min-w-0 flex-1 flex-col @3xl/gpt-builder:flex @3xl/gpt-builder:border-s @3xl/gpt-builder:border-primary-outline",
            tr,
          )),
          (ea[98] = tr),
          (ea[99] = q))
        : (q = ea[99])
      let tn = `${eD}-preview`
      return (
        ea[100] !== eL
          ? ((Y = eL.formatMessage({
              id: "gptBuilder.previewPanel",
              defaultMessage: "Preview your GPT",
              description: "Accessible name of the panel for testing the draft GPT",
            })),
            (ea[100] = eL),
            (ea[101] = Y))
          : (Y = ea[101]),
        ea[102] !== e4 || ea[103] !== e9
          ? ((Q = (0, a.jsx)("div", {
              ref: e4,
              className:
                "hidden h-14 shrink-0 items-center justify-center px-4 text-sm font-medium select-none @3xl/gpt-builder:flex",
              children: e9,
            })),
            (ea[102] = e4),
            (ea[103] = e9),
            (ea[104] = Q))
          : (Q = ea[104]),
        ea[105] !== el
          ? ((Z = (0, a.jsx)("div", { className: "flex min-h-0 flex-1 flex-col", children: el })),
            (ea[105] = el),
            (ea[106] = Z))
          : (Z = ea[106]),
        ea[107] !== q || ea[108] !== tn || ea[109] !== Y || ea[110] !== Q || ea[111] !== Z
          ? ((ee = (0, a.jsxs)("div", { className: q, id: tn, role: "tabpanel", "aria-label": Y, children: [Q, Z] })),
            (ea[107] = q),
            (ea[108] = tn),
            (ea[109] = Y),
            (ea[110] = Q),
            (ea[111] = Z),
            (ea[112] = ee))
          : (ee = ea[112]),
        ea[113] !== I || ea[114] !== ee
          ? ((et = (0, a.jsxs)("div", { className: "flex min-h-0 flex-1", children: [I, ee] })),
            (ea[113] = I),
            (ea[114] = ee),
            (ea[115] = et))
          : (et = ea[115]),
        ea[116] !== k || ea[117] !== C || ea[118] !== N || ea[119] !== et
          ? ((ei = (0, a.jsxs)("div", {
              className: "@container/gpt-builder flex h-full min-h-0 flex-col bg-surface text-default",
              children: [k, C, N, et],
            })),
            (ea[116] = k),
            (ea[117] = C),
            (ea[118] = N),
            (ea[119] = et),
            (ea[120] = ei))
          : (ei = ea[120]),
        ei
      )
    }
    function eP(e) {
      let t,
        i,
        r,
        l,
        o,
        c,
        d = (0, s.c)(21),
        { draft: u, onChange: p, type: h, disabled: m, label: g } = e,
        f = (0, n.useId)()
      d[0] !== h
        ? ((t = (e) => e.type === h || ("image_gen" === h && "dalle" === e.type)), (d[0] = h), (d[1] = t))
        : (t = d[1])
      let _ = t
      return (
        d[2] !== f || d[3] !== g
          ? ((i = (0, a.jsx)("label", { className: "cursor-interaction select-none", htmlFor: f, children: g })),
            (d[2] = f),
            (d[3] = g),
            (d[4] = i))
          : (i = d[4]),
        d[5] !== u.tools || d[6] !== _
          ? ((r = u.tools?.some(_) ?? !1), (d[5] = u.tools), (d[6] = _), (d[7] = r))
          : (r = d[7]),
        d[8] !== u || d[9] !== _ || d[10] !== p || d[11] !== h
          ? ((l = (e) => p({ ...u, tools: e ? [...(u.tools ?? []), { type: h }] : u.tools?.filter((e) => !_(e)) })),
            (d[8] = u),
            (d[9] = _),
            (d[10] = p),
            (d[11] = h),
            (d[12] = l))
          : (l = d[12]),
        d[13] !== m || d[14] !== f || d[15] !== r || d[16] !== l
          ? ((o = (0, a.jsx)("div", {
              className: "relative",
              children: (0, a.jsx)(q.S, { id: f, checked: r, disabled: m, onCheckedChange: l }),
            })),
            (d[13] = m),
            (d[14] = f),
            (d[15] = r),
            (d[16] = l),
            (d[17] = o))
          : (o = d[17]),
        d[18] !== i || d[19] !== o
          ? ((c = (0, a.jsx)(X.ic, { label: i, control: o })), (d[18] = i), (d[19] = o), (d[20] = c))
          : (c = d[20]),
        c
      )
    }
    var eS = i("PigS"),
      ek = i("U4QI"),
      eC = i("DBCl"),
      eM = i("o7rp"),
      eB = i("Ghh3"),
      eG = i("GDNt")
    let eF = d.object({ action_ids: d.array(d.string()).nullish() }),
      ez = [250, 500, 1e3, 2e3, 4e3],
      eN = new Set([
        "python",
        "retrieval",
        "browser",
        "canvas",
        "memory",
        "dalle",
        "image_gen",
        "connector",
        "plugins_prototype",
      ]),
      eR = (0, r.vU)(A.u, ({ accountId: e, gizmoId: t, version: i }, { scope: a }) => ({
        queryKey: ["chatgpt-gizmos", "builder-draft", e, t, ...(null == i ? [] : [i])],
        staleTime: 0,
        refetchOnWindowFocus: !1,
        queryFn: async ({ signal: s }) => {
          eO(a, e)
          let r =
            null == i
              ? await eB.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                  parameters: { path: { gizmo_id_or_short_url: t }, query: { draft: !0 } },
                  additionalHeaders: { [eC.zBc]: e },
                  expectedErrorStatuses: [401, 403, 404],
                  signal: s,
                }).catch((i) => {
                  if (!(i instanceof eG.fk) || (403 !== i.status && 404 !== i.status)) throw i
                  return (
                    eO(a, e),
                    eB.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                      parameters: { path: { gizmo_id_or_short_url: t }, query: { draft: !1 } },
                      additionalHeaders: { [eC.zBc]: e },
                      expectedErrorStatuses: [401, 403, 404],
                      signal: s,
                    })
                  )
                })
              : await eB.Request.safeGet("/gizmos/{gizmo_id}/version/{version}", {
                  parameters: {
                    path: { gizmo_id: t, version: "latest" === i ? "latest" : eM.number().int().positive().parse(i) },
                  },
                  additionalHeaders: { [eC.zBc]: e },
                  expectedErrorStatuses: [401, 403, 404],
                  signal: s,
                })
          return (
            eO(a, e),
            e$(r),
            null == i && t !== r.gizmo.id && a.query.setData(eR, { accountId: e, gizmoId: r.gizmo.id }, r),
            r
          )
        },
      }))
    function eI(e) {
      e$(e)
      let t = []
      for (let i of e.tools)
        switch (i.type) {
          case "python":
          case "retrieval":
          case "canvas":
          case "memory":
            t.push({ type: i.type })
            break
          case "browser":
            t.push({
              type: "browser",
              settings:
                null == i.settings
                  ? null
                  : d.object({ allowed_domains: d.array(d.string()).nullish() }).parse(i.settings),
            })
            break
          case "dalle":
          case "image_gen":
            t.some((e) => "image_gen" === e.type) || t.push({ type: "image_gen" })
            break
          case "connector":
            t.push({ type: "connector", settings: null == i.settings ? null : eF.parse(i.settings) })
            break
          case "plugins_prototype":
            t.push({ type: "plugins_prototype", metadata: B.parse(i.metadata) })
            break
          case "context_connector":
          case "function":
          case "gizmo_contacts":
          case "intent":
          case "parallel_browse":
          case "plugin":
            throw Error("gpt_builder_tools_unsupported")
        }
      return {
        instructions: e.gizmo.instructions ?? "",
        display: {
          name: e.gizmo.display.name,
          description: e.gizmo.display.description ?? "",
          profile_pic_id: e.gizmo.display.profile_pic_id,
          profile_picture_url: e.gizmo.display.profile_picture_url,
          prompt_starters: e.gizmo.display.prompt_starters,
          categories: e.gizmo.display.categories,
          emoji: e.gizmo.display.emoji,
          theme: e.gizmo.display.theme,
        },
        tools: t,
        files: e.files.flatMap((e) =>
          "full_file_response" === e.file_response_type && e.file_id
            ? [
                {
                  file_id: e.file_id,
                  name: e.name ?? e.file_id,
                  location: e.location,
                  size: e.size,
                  type: e.type,
                  last_modified: e.last_modified,
                  library_file_id: e.library_file_id,
                  file_size_tokens: e.file_size_tokens,
                },
              ]
            : [],
        ),
        training_disabled: e.gizmo.training_disabled,
        default_model: e.gizmo.default_model,
        model: e.gizmo.model,
      }
    }
    function eE(e) {
      let t = [],
        { recipient: i, subjects: a } = e.sharing ?? { recipient: e.share_recipient, subjects: [] }
      for (let e of a)
        switch (e.type) {
          case 1:
            t.push({ type: "user", user_id: e.user_id, capabilities: e.capabilities })
            break
          case 2:
            t.push({ type: "group", group_id: e.group_id, capabilities: e.capabilities })
            break
          case 10:
            t.push({ type: "email", user_email: e.user_email, capabilities: e.capabilities })
        }
      switch (i) {
        case "private":
        case "user":
        case "group":
        case "email":
          t.push({ type: "private" })
          break
        case "workspace":
        case "workspace_link":
        case "link":
        case "marketplace": {
          let s = a.find((e) => e.type === (i.startsWith("workspace") ? 3 : 4))
          if (null == s && null != e.sharing) throw Error("gpt_sharing_unavailable")
          t.push({
            type: i,
            capabilities: s?.capabilities ?? {
              can_read: !0,
              can_view_config: !1,
              can_write: !1,
              can_delete: !1,
              can_export: !1,
              can_share: !1,
            },
          })
        }
      }
      return { sharing: t, categories: e.display.categories }
    }
    function eO(e, t) {
      if (e.get(u.chatGptAuthenticatedAccountId$) !== t) throw Error("gpt_builder_account_changed")
    }
    function e$(e) {
      if (e.tools.some((e) => !eN.has(e.type))) throw Error("gpt_builder_tools_unsupported")
    }
    function eq(e, t, i) {
      eO(e, t)
      let a = e.get(T.X, "2513446768"),
        s = null == i ? "disable_gpt_creation" : "disable_gpt_updates"
      if (null == a || !0 === a.value[s]) throw Error(s)
      if (null != i) {
        let a = e.query.getData(eR, { accountId: t, gizmoId: i })
        if (null != a && (e$(a), a.gizmo.current_user_permission?.can_write !== !0))
          throw Error("gpt_write_permission_required")
        if (a?.gizmo.migrated_plugin_id && e.get(P.JW, "2160578039")) throw Error("gpt_migrated_to_plugin")
      }
    }
    var eL = i("Bros")
    function eU(e, t, i) {
      return {
        ...e,
        tools: e.tools?.map((e) => ("plugins_prototype" !== e.type ? e : { ...e, metadata: G(e.metadata, t, i) })),
      }
    }
    var eD = i("OAko"),
      eH = i("AOG7"),
      eK = i("ENs9"),
      eW = i("aAsK"),
      eX = i("vw1R"),
      eV = i("UR81")
    let eJ = {
      chat: { can_read: !0, can_view_config: !1, can_write: !1, can_delete: !1, can_export: !1, can_share: !1 },
      view: { can_read: !0, can_view_config: !0, can_write: !1, can_delete: !1, can_export: !1, can_share: !1 },
      edit: { can_read: !0, can_view_config: !0, can_write: !0, can_delete: !1, can_export: !1, can_share: !1 },
    }
    function eY(e) {
      switch (e.type) {
        case 1:
          return `user:${e.user_id.split("__")[0]}`
        case 2:
          return `group:${e.group_id}`
        case 10:
          return `email:${e.user_email.toLowerCase()}`
      }
    }
    function eQ(e, t) {
      if (e.get(u.chatGptAuthenticatedAccountId$) !== t) throw Error("gpt_account_changed")
    }
    let eZ = (0, r.vU)(A.u, ({ accountId: e, gizmoId: t }, { scope: i }) => ({
      queryKey: ["chatgpt-gizmos", "sharing", e, t],
      staleTime: 0,
      queryFn: async () => {
        eQ(i, e)
        let a = await eB.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
          parameters: { path: { gizmo_id_or_short_url: t }, query: { draft: !1 } },
          additionalHeaders: { [eC.zBc]: e },
          expectedErrorStatuses: [401, 403, 404],
        })
        return (eQ(i, e), a)
      },
    }))
    function e0(e) {
      let t,
        i,
        c,
        d,
        h,
        m,
        g,
        f,
        _,
        y,
        v,
        j,
        w,
        S,
        k,
        C,
        M,
        B,
        G,
        F,
        z,
        N,
        R,
        I,
        E,
        O,
        $,
        q,
        L,
        U,
        D,
        H,
        K,
        W,
        X,
        V,
        J = (0, s.c)(134),
        { accountId: Y, gizmoId: Q, onClose: et } = e,
        ei = (0, r.gh)(A.u),
        ea = (0, o.A)(),
        es = (0, r.Ul)(u.chatGptAuthenticatedAccountId$),
        { data: er } = (0, eD.YL)(),
        en = Y === es && er?.id === Y
      ;(J[0] !== Y || J[1] !== Q
        ? ((t = { accountId: Y, gizmoId: Q }), (J[0] = Y), (J[1] = Q), (J[2] = t))
        : (t = J[2]),
        J[3] !== en ? ((i = { enabled: en }), (J[3] = en), (J[4] = i)) : (i = J[4]))
      let { data: el, isFetching: eo, isError: ec, refetch: ed } = (0, r._U)(eZ, t, i)
      J[5] !== en ? ((c = { enabled: en }), (J[5] = en), (J[6] = c)) : (c = J[6])
      let { data: eu, isError: ep } = (0, r._U)(p.Jk, Y, c),
        eh = (0, r._U)(T.X, "2513446768"),
        em = (0, r._U)(P.JW, "2160578039"),
        [eg, ef] = (0, n.useState)("")
      J[7] === Symbol.for("react.memo_cache_sentinel") ? ((d = []), (J[7] = d)) : (d = J[7])
      let [e_, ey] = (0, n.useState)(d),
        [eb, ex] = (0, n.useState)(!1),
        ev = (0, n.useRef)(!1),
        [ej, ew] = (0, n.useState)(!1),
        [eA, eT] = (0, n.useState)(null),
        eP =
          !en ||
          eb ||
          eo ||
          ec ||
          null == el ||
          null == eh ||
          !0 === eh.value.disable_gpt_updates ||
          el.gizmo.current_user_permission?.can_write !== !0 ||
          (!!el.gizmo.migrated_plugin_id && em)
      J[8] !== er || J[9] !== en || J[10] !== eu || J[11] !== ep
        ? ((h =
            en &&
            !ep &&
            null != eu &&
            er?.structure === "workspace" &&
            (!(0, eX.o)(er.plan_type) ||
              "account-owner" === er.account_user_role ||
              "account-admin" === er.account_user_role ||
              eu.permissions?.includes("chatgpt.workspace.member.role.view") === !0)),
          (J[8] = er),
          (J[9] = en),
          (J[10] = eu),
          (J[11] = ep),
          (J[12] = h))
        : (h = J[12])
      let eS = h
      J[13] !== er?.plan_type || J[14] !== eS
        ? ((m = eS && (0, eV.uz)(er?.plan_type)), (J[13] = er?.plan_type), (J[14] = eS), (J[15] = m))
        : (m = J[15])
      let ek = m,
        { data: eM, isFetching: eG, isError: eF } = (0, eH.Nv)(eS && !eP ? eg : ""),
        { data: ez, isFetching: eN, isError: eR } = (0, eH.Nc)(ek && !eP ? eg : "")
      if (
        (J[16] !== el?.gizmo.sharing?.subjects
          ? ((g = el?.gizmo.sharing?.subjects ?? []), (J[16] = el?.gizmo.sharing?.subjects), (J[17] = g))
          : (g = J[17]),
        J[18] !== eS ||
          J[19] !== ek ||
          J[20] !== e_ ||
          J[21] !== eP ||
          J[22] !== ez ||
          J[23] !== eR ||
          J[24] !== ea ||
          J[25] !== en ||
          J[26] !== ec ||
          J[27] !== eb ||
          J[28] !== eN ||
          J[29] !== eG ||
          J[30] !== et ||
          J[31] !== eA ||
          J[32] !== eg ||
          J[33] !== ed ||
          J[34] !== el ||
          J[35] !== eu ||
          J[36] !== ep ||
          J[37] !== g ||
          J[38] !== eM ||
          J[39] !== eF)
      ) {
        I = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Map(g.flatMap(e1))
          for (let t of e_) {
            let i = eY(t.subject)
            if ("remove" === t.type) e.delete(i)
            else if ("add" === t.type) e.set(i, t.subject)
            else {
              let a = e.get(i)
              null != a && e.set(i, { ...a, capabilities: eJ[t.role] })
            }
          }
          let t = []
          if (eS) {
            let i,
              a,
              s = el?.gizmo.author.user_id.split("__")[0]
            for (let a of (J[59] !== eM ? ((i = eM ?? []), (J[59] = eM), (J[60] = i)) : (i = J[60]), i)) {
              let i = `user:${a.account_user_id.split("__")[0]}`
              e.has(i) ||
                a.account_user_id.split("__")[0] === s ||
                t.push({
                  id: i,
                  label: a.name || a.email || a.account_user_id,
                  secondaryLabel: a.email ?? void 0,
                  subject: {
                    type: 1,
                    user_id: a.account_user_id,
                    user_name: a.name ?? null,
                    user_email: a.email ?? null,
                    avatar_url: null,
                    capabilities: eJ.chat,
                  },
                })
            }
            for (let i of (J[61] !== ek || J[62] !== ez
              ? ((a = ek ? (ez ?? []) : []), (J[61] = ek), (J[62] = ez), (J[63] = a))
              : (a = J[63]),
            a)) {
              let a = `group:${i.id}`
              e.has(a) ||
                (i.is_scim_managed && eu?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts === !1) ||
                t.push({
                  id: a,
                  label: i.name,
                  subject: {
                    type: 2,
                    group_id: i.id,
                    group_name: i.name,
                    is_scim_managed: !0 === i.is_scim_managed,
                    capabilities: eJ.chat,
                  },
                })
            }
          }
          if (!en) {
            I = null
            break e
          }
          ;((_ = Z.lG),
            (C = !0),
            (M = "large"),
            (B = "chatgpt"),
            (G = "visible"),
            (F = !eb),
            (z = eb),
            J[64] === Symbol.for("react.memo_cache_sentinel")
              ? ((N = {
                  "aria-describedby": void 0,
                  onOpenAutoFocus: (e) => {
                    e.currentTarget instanceof HTMLElement && eT(e.currentTarget)
                  },
                }),
                (J[64] = N))
              : (N = J[64]),
            J[65] !== eb || J[66] !== et
              ? ((R = (e) => {
                  e || eb || et()
                }),
                (J[65] = eb),
                (J[66] = et),
                (J[67] = R))
              : (R = J[67]),
            (f = ee.R4),
            (y = "flex flex-col gap-4 p-6"),
            (v = "chatgpt"),
            J[68] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, a.jsx)(Z.L3, {
                  children: (0, a.jsx)(l.A, {
                    id: "gptBuilder.share.title",
                    defaultMessage: "Share GPT",
                    description: "Title of the dialog for managing people and groups who can access a GPT",
                  }),
                })),
                (J[68] = j))
              : (j = J[68]),
            J[69] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, a.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(l.A, {
                    id: "gptBuilder.share.publishedNotice",
                    defaultMessage:
                      "Manage access to the published GPT. Draft edits and existing link access are unchanged.",
                    description:
                      "Explains that sharing changes do not publish draft edits or change general link access",
                  }),
                })),
                (J[69] = w))
              : (w = J[69]),
            J[70] !== ec || J[71] !== ed
              ? ((S = ec
                  ? (0, a.jsx)(x.$, {
                      onClick: () => void ed(),
                      children: (0, a.jsx)(l.A, {
                        id: "gptBuilder.share.retry",
                        defaultMessage: "Retry loading sharing settings",
                        description: "Retry fetching access to the published GPT",
                      }),
                    })
                  : null),
                (J[70] = ec),
                (J[71] = ed),
                (J[72] = S))
              : (S = J[72]),
            J[73] !== eS ||
            J[74] !== ek ||
            J[75] !== e_ ||
            J[76] !== eP ||
            J[77] !== eR ||
            J[78] !== ea ||
            J[79] !== eN ||
            J[80] !== eG ||
            J[81] !== t ||
            J[82] !== eA ||
            J[83] !== eg ||
            J[84] !== eu ||
            J[85] !== ep ||
            J[86] !== eF
              ? ((k = eS
                  ? (0, a.jsx)(eK.X, {
                      ariaLabel: ea.formatMessage({
                        id: "gptBuilder.share.search",
                        defaultMessage: "Add people or groups",
                        description: "Accessible label for searching workspace recipients to share a GPT with",
                      }),
                      placeholder: ea.formatMessage({
                        id: "gptBuilder.share.placeholder",
                        defaultMessage: "Search people or groups",
                        description: "Placeholder for GPT sharing recipient search",
                      }),
                      query: eg,
                      onQueryChange: ef,
                      portalContainer: eA,
                      disabled: eP,
                      loadingLabel: ea.formatMessage({
                        id: "gptBuilder.share.loading",
                        defaultMessage: "Searching workspace",
                        description: "Status while finding GPT sharing recipients",
                      }),
                      options: eG || (ek && eN) ? void 0 : t,
                      searchFailed: eF || (ek && eR),
                      emptyMessage: (0, a.jsx)(l.A, {
                        id: "gptBuilder.share.noResults",
                        defaultMessage: "No matching workspace members or groups",
                        description: "Empty result for GPT sharing recipient search",
                      }),
                      onSelectOption: (e) => {
                        ;(ey([...e_, { type: "add", subject: e.subject }]), ef(""))
                      },
                    })
                  : (0, a.jsx)("p", {
                      className: "text-sm text-secondary",
                      children:
                        null != eu || ep
                          ? (0, a.jsx)(l.A, {
                              id: "gptBuilder.share.searchUnavailable",
                              defaultMessage:
                                "Workspace member search is unavailable. Check your workspace permissions or try again later.",
                              description: "Notice when workspace membership search is unavailable or forbidden",
                            })
                          : (0, a.jsx)(l.A, {
                              id: "gptBuilder.share.loadingSettings",
                              defaultMessage: "Loading sharing settings…",
                              description: "Status while loading workspace sharing permissions",
                            }),
                    })),
                (J[73] = eS),
                (J[74] = ek),
                (J[75] = e_),
                (J[76] = eP),
                (J[77] = eR),
                (J[78] = ea),
                (J[79] = eN),
                (J[80] = eG),
                (J[81] = t),
                (J[82] = eA),
                (J[83] = eg),
                (J[84] = eu),
                (J[85] = ep),
                (J[86] = eF),
                (J[87] = k))
              : (k = J[87]),
            (E = "max-h-80 overflow-y-auto"),
            (O = [...e.values()].map((e) => {
              var t
              return (0, a.jsxs)(
                "div",
                {
                  className: "flex items-center justify-between gap-3 py-2",
                  children: [
                    (0, a.jsx)("span", {
                      className: "min-w-0 truncate",
                      children: (function (e) {
                        switch (e.type) {
                          case 1:
                            return e.user_name || e.user_email || e.user_id
                          case 2:
                            return e.group_name
                          case 10:
                            return e.user_email
                        }
                      })(e),
                    }),
                    (0, a.jsx)(e2, {
                      disabled: eP,
                      role: (t = e).capabilities.can_write ? "edit" : t.capabilities.can_view_config ? "view" : "chat",
                      onChange: (t) => ey([...e_, { type: "role", subject: e, role: t }]),
                      onRemoveAccess: () => ey([...e_, { type: "remove", subject: e }]),
                    }),
                  ],
                },
                eY(e),
              )
            })))
        }
        ;((J[18] = eS),
          (J[19] = ek),
          (J[20] = e_),
          (J[21] = eP),
          (J[22] = ez),
          (J[23] = eR),
          (J[24] = ea),
          (J[25] = en),
          (J[26] = ec),
          (J[27] = eb),
          (J[28] = eN),
          (J[29] = eG),
          (J[30] = et),
          (J[31] = eA),
          (J[32] = eg),
          (J[33] = ed),
          (J[34] = el),
          (J[35] = eu),
          (J[36] = ep),
          (J[37] = g),
          (J[38] = eM),
          (J[39] = eF),
          (J[40] = f),
          (J[41] = _),
          (J[42] = y),
          (J[43] = v),
          (J[44] = j),
          (J[45] = w),
          (J[46] = S),
          (J[47] = k),
          (J[48] = C),
          (J[49] = M),
          (J[50] = B),
          (J[51] = G),
          (J[52] = F),
          (J[53] = z),
          (J[54] = N),
          (J[55] = R),
          (J[56] = I),
          (J[57] = E),
          (J[58] = O))
      } else
        ((f = J[40]),
          (_ = J[41]),
          (y = J[42]),
          (v = J[43]),
          (j = J[44]),
          (w = J[45]),
          (S = J[46]),
          (k = J[47]),
          (C = J[48]),
          (M = J[49]),
          (B = J[50]),
          (G = J[51]),
          (F = J[52]),
          (z = J[53]),
          (N = J[54]),
          (R = J[55]),
          (I = J[56]),
          (E = J[57]),
          (O = J[58]))
      if (I !== Symbol.for("react.early_return_sentinel")) return I
      ;(J[88] !== E || J[89] !== O
        ? (($ = (0, a.jsx)("div", { className: E, children: O })), (J[88] = E), (J[89] = O), (J[90] = $))
        : ($ = J[90]),
        J[91] !== ej
          ? ((q = ej
              ? (0, a.jsx)(b.l, {
                  type: "error",
                  role: "alert",
                  content: (0, a.jsx)(l.A, {
                    id: "gptBuilder.share.error",
                    defaultMessage:
                      "Could not update sharing. Check your GPT and workspace permissions, then try again.",
                    description: "Failure saving GPT sharing; the dialog retains changes for retry",
                  }),
                })
              : null),
            (J[91] = ej),
            (J[92] = q))
          : (q = J[92]),
        J[93] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, a.jsx)(l.A, {
              id: "gptBuilder.share.cancel",
              defaultMessage: "Cancel",
              description: "Discard pending GPT sharing changes",
            })),
            (J[93] = L))
          : (L = J[93]),
        J[94] !== eb || J[95] !== et
          ? ((U = (0, a.jsx)(x.$, { color: "secondary", disabled: eb, onClick: et, children: L })),
            (J[94] = eb),
            (J[95] = et),
            (J[96] = U))
          : (U = J[96]))
      let eI = eP || 0 === e_.length
      return (
        J[97] !== Y || J[98] !== e_ || J[99] !== eP || J[100] !== Q || J[101] !== et || J[102] !== ei
          ? ((D = () => {
              eP ||
                ev.current ||
                ((ev.current = !0),
                ex(!0),
                ew(!1),
                (async function (e, t, i, a) {
                  eQ(e, t)
                  let s = await e.query.fetch(eZ, { accountId: t, gizmoId: i })
                  eQ(e, t)
                  let r = e.get(T.X, "2513446768")
                  if (
                    null == r ||
                    !0 === r.value.disable_gpt_updates ||
                    s.gizmo.current_user_permission?.can_write !== !0 ||
                    (s.gizmo.live_version ?? 0) === 0 ||
                    (s.gizmo.migrated_plugin_id && e.get(P.JW, "2160578039"))
                  )
                    throw Error("gpt_sharing_unavailable")
                  let n = await eB.Request.safePost("/gizmos/{gizmo_id}/share", {
                    parameters: { path: { gizmo_id: i } },
                    requestBody: (function (e, t, i) {
                      let a = new Map(
                        (e.sharing?.subjects ?? []).flatMap((e) => (3 === e.type || 4 === e.type ? [] : [[eY(e), e]])),
                      )
                      for (let e of t) {
                        let t = eY(e.subject)
                        if ("remove" === e.type) a.delete(t)
                        else if ("add" === e.type) a.has(t) || a.set(t, e.subject)
                        else {
                          let i = a.get(t)
                          null != i && a.set(t, { ...i, capabilities: eJ[e.role] })
                        }
                      }
                      let s = eE(e)
                      for (let e of ((s.sharing = s.sharing.filter(
                        (e) => "user" !== e.type && "group" !== e.type && "email" !== e.type,
                      )),
                      a.values()))
                        switch (e.type) {
                          case 1:
                            s.sharing.push({
                              type: "user",
                              user_id: e.user_id.includes("__") ? e.user_id : `${e.user_id}__${i}`,
                              capabilities: e.capabilities,
                            })
                            break
                          case 2:
                            s.sharing.push({ type: "group", group_id: e.group_id, capabilities: e.capabilities })
                            break
                          case 10:
                            s.sharing.push({ type: "email", user_email: e.user_email, capabilities: e.capabilities })
                        }
                      return s
                    })(s.gizmo, a, t),
                    additionalHeaders: { [eC.zBc]: t },
                    expectedErrorStatuses: [400, 401, 403, 404, 409],
                  })
                  if ((eQ(e, t), null != n.error || null == n.resource)) throw Error("gpt_sharing_failed")
                  await e.queryClient.invalidateQueries({
                    queryKey: ["chatgpt-gizmos"],
                    predicate: ({ queryKey: e }) => "builder-draft" !== e[1],
                  })
                })(ei, Y, Q, e_)
                  .then(et)
                  .catch(() => ew(!0))
                  .finally(() => {
                    ;((ev.current = !1), ex(!1))
                  }))
            }),
            (J[97] = Y),
            (J[98] = e_),
            (J[99] = eP),
            (J[100] = Q),
            (J[101] = et),
            (J[102] = ei),
            (J[103] = D))
          : (D = J[103]),
        J[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, a.jsx)(l.A, {
              id: "gptBuilder.share.save",
              defaultMessage: "Save",
              description: "Save changes to the GPT sharing recipients",
            })),
            (J[104] = H))
          : (H = J[104]),
        J[105] !== eb || J[106] !== eI || J[107] !== D
          ? ((K = (0, a.jsx)(x.$, { disabled: eI, loading: eb, onClick: D, children: H })),
            (J[105] = eb),
            (J[106] = eI),
            (J[107] = D),
            (J[108] = K))
          : (K = J[108]),
        J[109] !== U || J[110] !== K
          ? ((W = (0, a.jsxs)("div", { className: "flex justify-end gap-2", children: [U, K] })),
            (J[109] = U),
            (J[110] = K),
            (J[111] = W))
          : (W = J[111]),
        J[112] !== f ||
        J[113] !== y ||
        J[114] !== v ||
        J[115] !== j ||
        J[116] !== w ||
        J[117] !== S ||
        J[118] !== k ||
        J[119] !== $ ||
        J[120] !== q ||
        J[121] !== W
          ? ((X = (0, a.jsxs)(f, { className: y, variant: v, children: [j, w, S, k, $, q, W] })),
            (J[112] = f),
            (J[113] = y),
            (J[114] = v),
            (J[115] = j),
            (J[116] = w),
            (J[117] = S),
            (J[118] = k),
            (J[119] = $),
            (J[120] = q),
            (J[121] = W),
            (J[122] = X))
          : (X = J[122]),
        J[123] !== _ ||
        J[124] !== C ||
        J[125] !== M ||
        J[126] !== B ||
        J[127] !== G ||
        J[128] !== F ||
        J[129] !== z ||
        J[130] !== N ||
        J[131] !== R ||
        J[132] !== X
          ? ((V = (0, a.jsx)(_, {
              open: C,
              size: M,
              variant: B,
              contentOverflow: G,
              showDialogClose: F,
              shouldIgnoreClickOutside: z,
              contentProps: N,
              onOpenChange: R,
              children: X,
            })),
            (J[123] = _),
            (J[124] = C),
            (J[125] = M),
            (J[126] = B),
            (J[127] = G),
            (J[128] = F),
            (J[129] = z),
            (J[130] = N),
            (J[131] = R),
            (J[132] = X),
            (J[133] = V))
          : (V = J[133]),
        V
      )
    }
    function e1(e) {
      return 3 === e.type || 4 === e.type ? [] : [[eY(e), e]]
    }
    function e2(e) {
      let t,
        i,
        r,
        n = (0, s.c)(7),
        { role: o, disabled: c, onChange: d, onRemoveAccess: u } = e
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = [{ value: "chat" }, { value: "view" }, { value: "edit" }]), (n[0] = t))
          : (t = n[0]),
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(l.A, {
              id: "gptBuilder.share.remove",
              defaultMessage: "Remove access",
              description: "Remove a person or group from GPT access when sharing changes are saved",
            })),
            (n[1] = i))
          : (i = n[1]),
        n[2] !== c || n[3] !== d || n[4] !== u || n[5] !== o
          ? ((r = (0, a.jsx)(eW.e, {
              disabled: c,
              value: o,
              options: t,
              onChange: d,
              onRemoveAccess: u,
              removeLabel: i,
              renderLabel: e3,
            })),
            (n[2] = c),
            (n[3] = d),
            (n[4] = u),
            (n[5] = o),
            (n[6] = r))
          : (r = n[6]),
        r
      )
    }
    function e3(e) {
      switch (e) {
        case "edit":
          return (0, a.jsx)(l.A, {
            id: "gptBuilder.share.edit",
            defaultMessage: "Can edit",
            description: "GPT permission to chat, view settings, and edit",
          })
        case "view":
          return (0, a.jsx)(l.A, {
            id: "gptBuilder.share.view",
            defaultMessage: "Can view settings",
            description: "GPT permission to chat and inspect settings",
          })
        case "chat":
          return (0, a.jsx)(l.A, {
            id: "gptBuilder.share.chat",
            defaultMessage: "Can chat",
            description: "GPT permission to chat without viewing or editing its configuration",
          })
      }
    }
    var e4 = i("M8gg")
    function e6() {
      let e,
        t,
        i = (0, s.c)(7),
        n = (0, r.Ul)(u.chatGptAuthenticatedAccountId$),
        { gizmoId: o } = (0, c.g)(),
        [d] = (0, c.ok)()
      i[0] !== d || i[1] !== o
        ? ((e = null == o ? void 0 : (d.get("version") ?? void 0)), (i[0] = d), (i[1] = o), (i[2] = e))
        : (e = i[2])
      let p = e
      return (
        i[3] !== n || i[4] !== o || i[5] !== p
          ? ((t =
              null == n
                ? (0, a.jsx)(w.LoadingPage, { debugName: "GptBuilderAccount" })
                : (0, a.jsx)(f.H, {
                    loadingFallback: (0, a.jsx)(w.LoadingPage, { debugName: "GptBuilderAccess" }),
                    readOnlyFallback:
                      null == o
                        ? void 0
                        : (0, a.jsx)(e5, { accountId: n, slug: o, version: p, readOnly: !0 }, `${n}:${o}:${p ?? ""}`),
                    unavailableFallback: (0, a.jsx)(v.A, {
                      layout: "page",
                      title: (0, a.jsx)(l.A, {
                        id: "gptBuilder.managementUnavailable",
                        defaultMessage: "GPT management is unavailable for this account",
                        description:
                          "Message in the GPT editor when the current account lacks permission or eligibility to manage GPTs",
                      }),
                    }),
                    children: (0, a.jsx)(e5, { accountId: n, slug: o, version: p }, `${n}:${o ?? ""}:${p ?? ""}`),
                  })),
            (i[3] = n),
            (i[4] = o),
            (i[5] = p),
            (i[6] = t))
          : (t = i[6]),
        t
      )
    }
    function e5(e) {
      let t,
        i,
        o,
        u,
        h,
        m,
        f,
        y = (0, s.c)(32),
        { accountId: b, slug: j, version: A, readOnly: T } = e,
        P = void 0 !== T && T,
        [S] = (0, c.ok)()
      y[0] !== S || y[1] !== j
        ? ((t = () => (null == j ? S.get("gizmo") : (0, g.f)(j))), (y[0] = S), (y[1] = j), (y[2] = t))
        : (t = y[2])
      let [k] = (0, n.useState)(t),
        { data: C } = (0, r._U)(_.i, b),
        M = C?.account.structure === "workspace"
      y[3] !== M ? ((i = { enabled: M }), (y[3] = M), (y[4] = i)) : (i = y[4])
      let { data: B } = (0, r._U)(p.Jk, b, i),
        G = k ?? ""
      y[5] !== b || y[6] !== G || y[7] !== A
        ? ((o = { accountId: b, gizmoId: G, version: A }), (y[5] = b), (y[6] = G), (y[7] = A), (y[8] = o))
        : (o = y[8])
      let F = null != k
      y[9] !== F ? ((u = { enabled: F }), (y[9] = F), (y[10] = u)) : (u = y[10])
      let { data: z, isPending: N, error: R, refetch: I } = (0, r._U)(eR, o, u)
      if (null == C || (null != k && N)) {
        let e
        return (
          y[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(w.LoadingPage, { debugName: "GptBuilderDraft" })), (y[11] = e))
            : (e = y[11]),
          e
        )
      }
      if (null != k && (null != R || null == z)) {
        let e, t, i, s
        return (
          y[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, {
                id: "gptBuilder.editorLoadError",
                defaultMessage: "Couldn't load this GPT configuration",
                description:
                  "Error in the GPT editor when loading a saved GPT fails, access is denied, or its capabilities are not supported by this editor",
              })),
              (y[12] = e))
            : (e = y[12]),
          y[13] !== I ? ((t = () => void I()), (y[13] = I), (y[14] = t)) : (t = y[14]),
          y[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)(l.A, {
                id: "gptBuilder.reload",
                defaultMessage: "Try again",
                description: "Button that retries loading a GPT creation draft",
              })),
              (y[15] = i))
            : (i = y[15]),
          y[16] !== t
            ? ((s = (0, a.jsx)(v.A, {
                layout: "page",
                title: e,
                actions: (0, a.jsx)(x.$, { onClick: t, children: i }),
              })),
              (y[16] = t),
              (y[17] = s))
            : (s = y[17]),
          s
        )
      }
      if (
        null != z &&
        z.gizmo.current_user_permission?.can_write !== !0 &&
        z.gizmo.current_user_permission?.can_view_config !== !0
      ) {
        let e
        return (
          y[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(v.A, {
                layout: "page",
                title: (0, a.jsx)(l.A, {
                  id: "gptBuilder.configurationUnavailable",
                  defaultMessage: "You don't have permission to view this GPT's configuration",
                  description:
                    "Message in the GPT editor when the current user can neither edit nor view the GPT configuration",
                }),
              })),
              (y[18] = e))
            : (e = y[18]),
          e
        )
      }
      let E = "workspace" === C.account.structure
      y[19] !== B?.allowed_custom_actions_domains
        ? ((h = d.array(d.string()).nullish().parse(B?.allowed_custom_actions_domains)),
          (y[19] = B?.allowed_custom_actions_domains),
          (y[20] = h))
        : (h = y[20])
      let O = z ?? null,
        $ = null != A
      return (
        y[21] !== C.account.structure || y[22] !== C.features
          ? ((m = "workspace" !== C.account.structure || C.features?.includes("browsing_available") === !0),
            (y[21] = C.account.structure),
            (y[22] = C.features),
            (y[23] = m))
          : (m = y[23]),
        y[24] !== b || y[25] !== P || y[26] !== h || y[27] !== O || y[28] !== $ || y[29] !== m || y[30] !== E
          ? ((f = (0, a.jsx)(e8, {
              accountId: b,
              isWorkspace: E,
              allowedActionDomains: h,
              initialResource: O,
              viewingVersion: $,
              readOnly: P,
              browsingAllowed: m,
            })),
            (y[24] = b),
            (y[25] = P),
            (y[26] = h),
            (y[27] = O),
            (y[28] = $),
            (y[29] = m),
            (y[30] = E),
            (y[31] = f))
          : (f = y[31]),
        f
      )
    }
    function e8(e) {
      let t,
        i,
        d,
        p,
        g,
        f,
        _,
        x,
        v,
        w,
        C,
        M,
        B,
        G,
        E,
        O,
        $,
        q,
        L,
        U,
        D,
        H,
        K,
        W,
        X,
        V,
        J,
        Y,
        Q,
        Z = (0, s.c)(136),
        {
          accountId: ee,
          isWorkspace: et,
          initialResource: ei,
          browsingAllowed: ea,
          allowedActionDomains: es,
          viewingVersion: er,
          readOnly: en,
        } = e,
        el = (0, r.gh)(A.u),
        eo = (0, o.A)(),
        ec = (0, c.Zp)(),
        { hash: ed, pathname: eu } = (0, c.zy)(),
        ep = (0, S.a)(),
        eh = (0, r._U)(T.X, "2513446768"),
        em = (0, r._U)(P.JW, "2160578039")
      Z[0] !== ee || Z[1] !== ea || Z[2] !== ei || Z[3] !== ep || Z[4] !== ec || Z[5] !== eu || Z[6] !== el
        ? ((t = () => {
            var e, t
            let i, a, s, r, n, l, o, c
            return (
              (e =
                null == ei
                  ? {
                      instructions: "",
                      display: { name: "", description: "", prompt_starters: [] },
                      tools: ea ? [{ type: "browser" }, { type: "image_gen" }] : [{ type: "image_gen" }],
                      files: [],
                      training_disabled: !1,
                    }
                  : eI(ei)),
              (t = async (e, t) => {
                let i = await (async function (e, t, i, a) {
                  if ((eq(e, t, i), eA(a).length > 0)) throw Error("gpt_builder_invalid_draft")
                  let s = await eB.Request.safePost("/gizmos", {
                    parameters: { query: { gizmo_id: i } },
                    requestBody: {
                      ...a,
                      display: {
                        ...a.display,
                        prompt_starters:
                          a.display.prompt_starters?.filter((e) => e.trim().length > 0) ?? a.display.prompt_starters,
                      },
                    },
                    additionalHeaders: { [eC.zBc]: t },
                    expectedErrorStatuses: [400, 401, 403, 404, 409],
                  })
                  return (eO(e, t), e.query.setData(eR, { accountId: t, gizmoId: s.gizmo.id }, s), s)
                })(el, ee, t, e)
                return (
                  null == t &&
                    ep() &&
                    ec(
                      {
                        pathname: eu.startsWith("/gpts/editor") ? "/gpts/editor" : k.m2,
                        search: new URLSearchParams({ gizmo: i.gizmo.id }).toString(),
                      },
                      { replace: !0 },
                    ),
                  i
                )
              }),
              (a = { draft: e, resource: ei, saveState: "saved" }),
              (s = null == ei ? null : e),
              (r = null),
              (n = new Set()),
              (l = new Set()),
              (o = () => n.forEach((e) => e())),
              {
                getSnapshot: () => a,
                subscribe: (e) => (n.add(e), () => n.delete(e)),
                subscribeToSaves: (e) => (l.add(e), () => l.delete(e)),
                change: (e) => {
                  ;((a = { ...a, draft: e, saveState: "saving" }),
                    o(),
                    clearTimeout(i),
                    (i = setTimeout(() => {
                      c().catch(() => {})
                    }, 750)))
                },
                flush: (c = () =>
                  (clearTimeout(i), (i = void 0), null != r)
                    ? r
                    : a.draft === s && null != a.resource
                      ? Promise.resolve(a.resource)
                      : ((a = { ...a, saveState: "saving" }),
                        o(),
                        (r = (async () => {
                          try {
                            for (;;) {
                              let e =
                                  null == a.resource && null != a.draft.display.profile_pic_id
                                    ? {
                                        ...a.draft,
                                        display: {
                                          ...a.draft.display,
                                          profile_pic_id: void 0,
                                          profile_picture_url: void 0,
                                        },
                                      }
                                    : a.draft,
                                i = await t(e, a.resource?.gizmo.id)
                              if (
                                ((s = eU(e, e, i)),
                                (a = { ...a, draft: a.draft === e ? s : eU(a.draft, e, i), resource: i }),
                                l.forEach((t) => t(e, i)),
                                s === a.draft)
                              )
                                return ((a = { ...a, saveState: "saved" }), i)
                              o()
                            }
                          } catch (e) {
                            throw ((a = { ...a, saveState: "error" }), e)
                          } finally {
                            ;((r = null), o())
                          }
                        })()))),
                cancelScheduledSave: () => clearTimeout(i),
              }
            )
          }),
          (Z[0] = ee),
          (Z[1] = ea),
          (Z[2] = ei),
          (Z[3] = ep),
          (Z[4] = ec),
          (Z[5] = eu),
          (Z[6] = el),
          (Z[7] = t))
        : (t = Z[7])
      let [eg] = (0, n.useState)(t),
        {
          draft: ef,
          resource: e_,
          saveState: ey,
        } = (0, n.useSyncExternalStore)(eg.subscribe, eg.getSnapshot, eg.getSnapshot)
      Z[8] !== el ? ((i = () => (0, m.dL)(el)), (Z[8] = el), (Z[9] = i)) : (i = Z[9])
      let [eb] = (0, n.useState)(i)
      Z[10] !== ei || Z[11] !== eg
        ? ((d = () => ({
            context_message: I(eg.getSnapshot().draft),
            model_slug: "gpt-4o",
            enabled_tools: [{ tool_id: null == ei ? "gizmo_creator" : "gizmo_editor" }],
          })),
          (Z[10] = ei),
          (Z[11] = eg),
          (Z[12] = d))
        : (d = Z[12])
      let [ex] = (0, n.useState)(d),
        ev = (0, n.useRef)(null),
        ej = (0, n.useRef)(ef),
        ew = (0, n.useRef)(null),
        eP = (0, n.useRef)(null),
        eM = (0, n.useRef)(null),
        [eG, eF] = (0, n.useState)(!1),
        [eN, e$] = (0, n.useState)(!1),
        [eD, eH] = (0, n.useState)(!1),
        [eK, eW] = (0, n.useState)(null),
        [eX, eV] = (0, n.useState)(ei?.gizmo.display.profile_picture_url ?? void 0),
        eJ =
          eX ??
          (e_?.gizmo.display.profile_pic_id === ef.display.profile_pic_id
            ? (e_?.gizmo.display.profile_picture_url ?? void 0)
            : void 0),
        eY = eh?.value.disable_gizmo_magic_create === !0,
        eQ = ei?.gizmo ?? e_?.gizmo,
        eZ =
          en ||
          er ||
          null == eh ||
          (null != eQ && (eQ.current_user_permission?.can_write !== !0 || (!!eQ.migrated_plugin_id && em))) ||
          (null == e_ ? !0 === eh.value.disable_gpt_creation : !0 === eh.value.disable_gpt_updates),
        e1 = eG || eN || eD
      Z[13] !== ef ? ((p = eA(ef)), (Z[13] = ef), (Z[14] = p)) : (p = Z[14])
      let e2 = p.length > 0,
        e3 = e_?.project_file_limits?.max_file_limit
      Z[15] !== ei || Z[16] !== eo
        ? ((g = () => {
            if (null == ei)
              return eo.formatMessage(
                {
                  id: "gptBuilder.welcomeParagraphs",
                  defaultMessage:
                    'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."{paragraphBreak}What would you like to make?',
                  description:
                    "GPT Builder's introductory message asking the user to describe the new GPT they want to create; quoted phrases are example requests. The paragraphBreak separates the introduction from the final question.",
                },
                { paragraphBreak: "\n\n" },
              )
            let { gizmo: e } = ei
            return "" !== e.display.name &&
              null != e.display.description &&
              (e.instructions ?? "") !== "" &&
              null != e.display.profile_picture_url
              ? eo.formatMessage(
                  {
                    id: "gptBuilder.welcomeBackCompleted",
                    defaultMessage:
                      "Welcome back! Is there anything {name} should be doing better? Anything you'd like to change?",
                    description:
                      "GPT Builder's greeting when the creator reopens a saved draft with a name, description, instructions, and profile picture. It invites further improvements. The name placeholder is the GPT's saved name.",
                  },
                  { name: e.display.name },
                )
              : eo.formatMessage({
                  id: "gptBuilder.welcomeBackUnfinished",
                  defaultMessage: "You're back! Let's continue where we left off…",
                  description:
                    "GPT Builder's greeting when the creator reopens a saved draft that still lacks a name, description, instructions, or profile picture. It invites the creator to continue configuring the GPT.",
                })
          }),
          (Z[15] = ei),
          (Z[16] = eo),
          (Z[17] = g))
        : (g = Z[17])
      let [e6] = (0, n.useState)(g)
      ;(Z[18] !== eg
        ? ((f = (e) => {
            "saved" !== eg.getSnapshot().saveState && e.preventDefault()
          }),
          (Z[18] = eg),
          (Z[19] = f))
        : (f = Z[19]),
        (0, c.K)(f),
        Z[20] !== eb || Z[21] !== ep || Z[22] !== eg || Z[23] !== el
          ? ((_ = () => () => {
              ;(ew.current?.abort(),
                eM.current?.abort(),
                eg.cancelScheduledSave(),
                "saving" === eg.getSnapshot().saveState && eg.flush().catch(ts),
                queueMicrotask(() => {
                  if (ep()) return
                  let e = () => (0, eS.V)(el, eb)
                  null == eP.current ? e() : eP.current.then(e, e)
                }))
            }),
            (x = [eg, el, eb, ep]),
            (Z[20] = eb),
            (Z[21] = ep),
            (Z[22] = eg),
            (Z[23] = el),
            (Z[24] = _),
            (Z[25] = x))
          : ((_ = Z[24]), (x = Z[25])),
        (0, n.useEffect)(_, x),
        Z[26] !== eZ
          ? ((v =
              eZ &&
              (0, a.jsx)(b.l, {
                type: "warning",
                content: (0, a.jsx)(l.A, {
                  id: "gptBuilder.unavailable",
                  defaultMessage: "GPT creation and editing are currently unavailable",
                  description: "Notice that retirement settings prevent changes to the GPT draft",
                }),
              })),
            (Z[26] = eZ),
            (Z[27] = v))
          : (v = Z[27]),
        Z[28] !== eK || Z[29] !== e3
          ? ((w =
              null != eK &&
              (0, a.jsx)(b.l, {
                type: "error",
                role: "alert",
                content: (0, a.jsxs)(a.Fragment, {
                  children: [
                    "picture" === eK &&
                      (0, a.jsx)(l.A, {
                        id: "gptBuilder.pictureError",
                        defaultMessage: "Your changes were saved, but the profile picture preview could not load",
                        description:
                          "Nonfatal error when a generated GPT profile picture was saved but its preview could not be downloaded",
                      }),
                    "publish" === eK &&
                      (0, a.jsx)(l.A, {
                        id: "gptBuilder.publishError",
                        defaultMessage: "Your GPT could not be published. Your draft is still saved.",
                        description:
                          "Error when publishing a GPT fails; the saved draft is retained so publishing can be retried",
                      }),
                    "upload" === eK &&
                      (0, a.jsx)(l.A, {
                        id: "gptBuilder.uploadError",
                        defaultMessage: "A file could not be added. Try uploading it again.",
                        description: "Error when uploading or attaching a knowledge file to the GPT draft fails",
                      }),
                    "uploadLimit" === eK &&
                      null != e3 &&
                      (0, a.jsx)(l.A, {
                        id: "gptBuilder.uploadLimitError",
                        defaultMessage:
                          "This GPT can have up to {limit, plural, one {# knowledge file} other {# knowledge files}}. Remove a file or choose fewer files",
                        description:
                          "Error when a selected batch of knowledge files exceeds the GPT's total file limit; limit is the maximum total number of attached files",
                        values: { limit: e3 },
                      }),
                    "conversation" === eK &&
                      (0, a.jsx)(l.A, {
                        id: "gptBuilder.conversationError",
                        defaultMessage: "The builder could not respond. Try sending your message again.",
                        description:
                          "Error when GPT Builder fails to respond, asking the user to send their message again",
                      }),
                  ],
                }),
              })),
            (Z[28] = eK),
            (Z[29] = e3),
            (Z[30] = w))
          : (w = Z[30]))
      let e5 = eg.change,
        e8 = eg.subscribeToSaves
      ;(Z[31] !== ee || Z[32] !== eg || Z[33] !== el
        ? ((C = (e, t) =>
            (async function (e, t, i, a, s) {
              eq(e, t, i)
              let r = await eB.Request.safePost("/gizmos/validate_openapi", {
                requestBody: { raw_spec: a },
                additionalHeaders: { [eC.zBc]: t },
                expectedErrorStatuses: [400, 401, 403],
                signal: s,
              })
              return (eq(e, t, i), r)
            })(el, ee, eg.getSnapshot().resource?.gizmo.id, e, t)),
          (M = (e, t) =>
            (async function (e, t, i, a, s) {
              eq(e, t, i)
              let r = await eB.Request.safePost("/gizmos/fetch_openapi", {
                requestBody: { url: a },
                additionalHeaders: { [eC.zBc]: t },
                expectedErrorStatuses: [400, 401, 403],
                signal: s,
              })
              return (eq(e, t, i), r.content)
            })(el, ee, eg.getSnapshot().resource?.gizmo.id, e, t)),
          (Z[31] = ee),
          (Z[32] = eg),
          (Z[33] = el),
          (Z[34] = C),
          (Z[35] = M))
        : ((C = Z[34]), (M = Z[35])),
        Z[36] !== eg || Z[37] !== ey
          ? ((B =
              "saved" !== ey
                ? void 0
                : async (e, t) => {
                    if ((await eg.flush(), null == ev.current)) throw Error("gpt_action_preview_unavailable")
                    await ev.current.test(e, t)
                  }),
            (Z[36] = eg),
            (Z[37] = ey),
            (Z[38] = B))
          : (B = Z[38]),
        Z[39] !== e_ ? ((G = null == e_ ? [] : eI(e_).tools?.flatMap(ta)), (Z[39] = e_), (Z[40] = G)) : (G = Z[40]))
      let tr = null != e_,
        tn = (eQ?.live_version ?? 0) > 0,
        tl = (ei?.gizmo.live_version ?? 0) > 0 || "#configure" === ed ? "configure" : "create"
      ;(Z[41] !== eg ? ((E = () => void eg.flush().catch(ti)), (Z[41] = eg), (Z[42] = E)) : (E = Z[42]),
        Z[43] !== ec || Z[44] !== eg
          ? ((O = () => {
              "saved" === eg.getSnapshot().saveState
                ? ec("/gpts")
                : eg
                    .flush()
                    .then(() => ec("/gpts"))
                    .catch(tt)
            }),
            (Z[43] = ec),
            (Z[44] = eg),
            (Z[45] = O))
          : (O = Z[45]),
        Z[46] !== ee || Z[47] !== eQ || Z[48] !== eZ || Z[49] !== et || Z[50] !== el
          ? (($ =
              et && null != eQ && (eQ.live_version ?? 0) > 0 && !eZ
                ? () => {
                    ;(0, j.qf)(el, e0, { accountId: ee, gizmoId: eQ.id })
                  }
                : void 0),
            (Z[46] = ee),
            (Z[47] = eQ),
            (Z[48] = eZ),
            (Z[49] = et),
            (Z[50] = el),
            (Z[51] = $))
          : ($ = Z[51]),
        Z[52] !== ee || Z[53] !== eZ || Z[54] !== e1 || Z[55] !== ep || Z[56] !== ec || Z[57] !== eg || Z[58] !== el
          ? ((q = () => {
              e1 ||
                eZ ||
                (e$(!0),
                eW(null),
                eg
                  .flush()
                  .then((e) =>
                    (async function (e, t, i) {
                      eq(e, t, i)
                      let a = e.query.getData(eR, { accountId: t, gizmoId: i }),
                        s = { sharing: [{ type: "private" }] }
                      ;((null == a || (a.gizmo.live_version ?? 0) > 0) &&
                        ((a = await e.query.fetch(eR, { accountId: t, gizmoId: i })), eq(e, t, i)),
                        (a.gizmo.live_version ?? 0) > 0 && (s = eE(a.gizmo)))
                      let r = await eB.Request.safePost("/gizmos/{gizmo_id}/promote", {
                        parameters: { path: { gizmo_id: i } },
                        requestBody: s,
                        additionalHeaders: { [eC.zBc]: t },
                        expectedErrorStatuses: [400, 401, 403, 404, 409],
                      })
                      if ((eO(e, t), null != r.error || null == r.resource))
                        throw Error(r.error ?? "gpt_promotion_failed")
                      return (
                        await e.queryClient.invalidateQueries({
                          queryKey: ["chatgpt-gizmos"],
                          predicate: ({ queryKey: e }) => "builder-draft" !== e[1],
                        }),
                        r.resource
                      )
                    })(el, ee, e.gizmo.id),
                  )
                  .then((e) => {
                    ep() && ec((0, y.V9)(e.gizmo.short_url ?? e.gizmo.id))
                  })
                  .catch(() => {
                    ep() && eW("publish")
                  })
                  .finally(() => {
                    ep() && e$(!1)
                  }))
            }),
            (Z[52] = ee),
            (Z[53] = eZ),
            (Z[54] = e1),
            (Z[55] = ep),
            (Z[56] = ec),
            (Z[57] = eg),
            (Z[58] = el),
            (Z[59] = q))
          : (q = Z[59]),
        Z[60] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = () => eM.current?.abort()), (Z[60] = L))
          : (L = Z[60]),
        Z[61] !== ee || Z[62] !== eZ || Z[63] !== e2 || Z[64] !== e1 || Z[65] !== ep || Z[66] !== eg || Z[67] !== el
          ? ((U = (e) => {
              if (e1 || eZ || e2 || null != eM.current) return
              let t = new AbortController()
              ;((eM.current = t),
                eH(!0),
                eW(null),
                (async () => {
                  let i = await eg.flush()
                  t.signal.throwIfAborted()
                  let a = i.project_file_limits?.max_file_limit
                  if (null != a && eg.getSnapshot().draft.files.length + e.length > a) return void eW("uploadLimit")
                  for (let a of e) {
                    t.signal.throwIfAborted()
                    let e = await (0, e4.T7)(el, ee, i.gizmo.id, a, t.signal),
                      s = eg.getSnapshot().draft
                    ;(eg.change(await (0, e4.gu)(el, ee, s, [e], t.signal)), await eg.flush())
                  }
                })()
                  .catch(() => {
                    ep() && !t.signal.aborted && eW("upload")
                  })
                  .finally(() => {
                    ;((eM.current = null), ep() && eH(!1))
                  }))
            }),
            (Z[61] = ee),
            (Z[62] = eZ),
            (Z[63] = e2),
            (Z[64] = e1),
            (Z[65] = ep),
            (Z[66] = eg),
            (Z[67] = el),
            (Z[68] = U))
          : (U = Z[68]),
        Z[69] !== e6
          ? ((D = (0, a.jsx)("p", { className: "whitespace-pre-line text-default", children: e6 })),
            (Z[69] = e6),
            (Z[70] = D))
          : (D = Z[70]))
      let to = eZ || eY || eN || eD || e2
      ;(Z[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = () => ew.current?.abort()), (Z[71] = H))
        : (H = Z[71]),
        Z[72] !== ee || Z[73] !== eg || Z[74] !== el
          ? ((K = async (e, t, i) => {
              eW(null)
              let a = await eg.flush()
              t.throwIfAborted()
              let s = eg.getSnapshot().draft.files,
                r = i.filter((e) => !s.some((t) => t.file_id === e.id)),
                n = a.project_file_limits?.max_file_limit
              if (e.length + i.length > (0, h.mc)(el) || (null != n && s.length + r.length + e.length > n))
                throw (eW("uploadLimit"), Error("gpt_builder_file_limit"))
              return (0, e4.Cl)(el, ee, a.gizmo.id, e, t)
            }),
            (Z[72] = ee),
            (Z[73] = eg),
            (Z[74] = el),
            (Z[75] = K))
          : (K = Z[75]),
        Z[76] !== ee ||
        Z[77] !== ex ||
        Z[78] !== eb ||
        Z[79] !== eZ ||
        Z[80] !== e2 ||
        Z[81] !== ep ||
        Z[82] !== eY ||
        Z[83] !== eg ||
        Z[84] !== el ||
        Z[85] !== e6
          ? ((W = async (e, t, i, a) => {
              if (null != ew.current || eZ || e2 || eY) return
              let s = new AbortController()
              return (
                (ew.current = s),
                eF(!0),
                eW(null),
                (async () => {
                  try {
                    var r
                    let n = eg.getSnapshot().draft,
                      l = t.filter((e) => !n.files.some((t) => t.file_id === e.id)).map(te)
                    if (l.length > 0) {
                      let e = eg.getSnapshot().resource?.project_file_limits?.max_file_limit
                      if (null != e && n.files.length + l.length > e) return void eW("uploadLimit")
                      eg.change(await (0, e4.gu)(el, ee, n, l, s.signal))
                    }
                    await eg.flush()
                    let o = eg.getSnapshot()
                    eP.current = (0, eS.S)(el, {
                      conversationId: eb,
                      prompt: e,
                      attachments: t,
                      model: a,
                      onAccepted: () => {
                        ;((ej.current = o.draft), i())
                      },
                      mode: { kind: "gizmo_magic_create", gizmo_id: o.resource?.gizmo.id, behavior_overrides: ex },
                      contextMessages: (function (e, t, i) {
                        let a = I(e),
                          s = I(t)
                        if (a === s) return []
                        let r = new Set(e.files.map((e) => e.file_id))
                        return [
                          {
                            id: (0, N.A)(),
                            author: { role: "system" },
                            content: {
                              content_type: "text",
                              parts: [
                                `${s}

The user changed these settings directly. Treat these fields, abilities, and files as the current GPT configuration. Do not call update_behavior yet; incorporate these changes in your next update_behavior call. Files absent from file_ids are no longer available to the GPT.`,
                              ],
                            },
                            status: "finished_successfully",
                            metadata: {
                              is_visually_hidden_from_conversation: !0,
                              attachments: t.files
                                .filter((e) => !r.has(e.file_id))
                                .slice(0, i)
                                .map((e) => ({ id: e.file_id, name: e.name, size: e.size })),
                            },
                          },
                        ]
                      })({ ...ej.current, files: [...ej.current.files, ...l] }, o.draft, (0, h.mc)(el)),
                      initialAssistantMessage: e6,
                      startupSignal: s.signal,
                      isSubmissionCurrent: () => ep() && el.get(u.chatGptAuthenticatedAccountId$) === ee,
                    })
                    let c = await eP.current
                    if (!ep() || s.signal.aborted) return
                    if (c?.status !== "completed") return void eW("conversation")
                    let d = (function (e) {
                        let t,
                          i = {}
                        for (let a of e) {
                          if ("assistant" === a.author.role && "gizmo_editor.update_behavior" === a.recipient) {
                            let e = a.content,
                              t = []
                            for (let a of ("text" === e.content_type
                              ? (t = e.parts.filter((e) => "string" == typeof e))
                              : "code" === e.content_type && (t = [e.text]),
                            t))
                              try {
                                let e = R.safeParse(JSON.parse(a))
                                e.success &&
                                  (i = {
                                    name: e.data.name ?? i.name,
                                    description: e.data.description ?? i.description,
                                    context: e.data.context ?? i.context,
                                    prompt_starters: e.data.prompt_starters ?? i.prompt_starters,
                                    profile_pic_file_id: e.data.profile_pic_file_id ?? i.profile_pic_file_id,
                                  })
                              } catch {}
                          }
                          if ("tool" === a.author.role && "gizmo_editor.generate_profile_pic" === a.author.name) {
                            let e = (0, z.$8)(a).at(-1)
                            null != e && (t = (0, F.V2)(e.src) ?? void 0)
                          }
                        }
                        return (
                          (i.profile_pic_file_id = i.profile_pic_file_id ?? t),
                          Object.values(i).some((e) => void 0 !== e) ? i : void 0
                        )
                      })(c.messages),
                      p =
                        null == d
                          ? o.draft
                          : ((r = eg.getSnapshot().draft),
                            {
                              ...r,
                              instructions: d.context ?? r.instructions,
                              display: {
                                ...r.display,
                                name: d.name ?? r.display.name,
                                description: d.description ?? r.display.description,
                                prompt_starters: d.prompt_starters ?? r.display.prompt_starters,
                                profile_pic_id: d.profile_pic_file_id ?? r.display.profile_pic_id,
                                profile_picture_url:
                                  null == d.profile_pic_file_id ? r.display.profile_picture_url : void 0,
                              },
                            })
                    if (((ej.current = p), null != d)) {
                      let e
                      ;(null != d.profile_pic_file_id && eV(void 0), eg.change(p))
                      try {
                        e = await eg.flush()
                      } catch {
                        return
                      }
                      if (null != d.profile_pic_file_id)
                        try {
                          let t = await (async function (e, t, i, a) {
                            for (let s = 0; ; s++) {
                              eO(e, t)
                              let r = await eB.Request.safeGet("/files/download/{file_id}", {
                                parameters: { path: { file_id: a }, query: { gizmo_id: i, download_intent: !1 } },
                                additionalHeaders: { [eC.zBc]: t },
                                expectedErrorStatuses: [401, 403, 404],
                              })
                              if ((eO(e, t), "download_url" in r && "" !== r.download_url)) return r.download_url
                              let n = ez[s]
                              if ("retry" !== r.status || null == n) throw Error("gpt_profile_picture_unavailable")
                              await new Promise((e) => setTimeout(e, n))
                            }
                          })(el, ee, e.gizmo.id, d.profile_pic_file_id)
                          ep() && eg.getSnapshot().draft.display.profile_pic_id === d.profile_pic_file_id && eV(t)
                        } catch {
                          ep() && eW("picture")
                        }
                    }
                  } catch {
                    ep() && !s.signal.aborted && eW("conversation")
                  }
                })().finally(() => {
                  ;((ew.current = null), (eP.current = null), ep() && eF(!1))
                })
              )
            }),
            (Z[76] = ee),
            (Z[77] = ex),
            (Z[78] = eb),
            (Z[79] = eZ),
            (Z[80] = e2),
            (Z[81] = ep),
            (Z[82] = eY),
            (Z[83] = eg),
            (Z[84] = el),
            (Z[85] = e6),
            (Z[86] = W))
          : (W = Z[86]),
        Z[87] !== eb || Z[88] !== eG || Z[89] !== D || Z[90] !== to || Z[91] !== K || Z[92] !== W
          ? ((X = (0, a.jsx)(ek.L, {
              conversationId: eb,
              emptyState: D,
              disabled: to,
              isSending: eG,
              onCancel: H,
              onUploadFiles: K,
              onSend: W,
            })),
            (Z[87] = eb),
            (Z[88] = eG),
            (Z[89] = D),
            (Z[90] = to),
            (Z[91] = K),
            (Z[92] = W),
            (Z[93] = X))
          : (X = Z[93]),
        Z[94] !== e_
          ? ((V = JSON.stringify({
              id: e_?.gizmo.id,
              instructions: e_?.gizmo.instructions,
              tools: e_?.tools.map(e7),
              files: e_?.files.map(e9),
              model: e_?.gizmo.default_model,
            })),
            (Z[94] = e_),
            (Z[95] = V))
          : (V = Z[95]))
      let tc = e_?.gizmo.id,
        td = e_?.gizmo.default_model ?? void 0,
        tu = eZ || e1 || "saved" !== ey
      return (
        Z[96] !== ee ||
        Z[97] !== ef.display.description ||
        Z[98] !== ef.display.name ||
        Z[99] !== eJ ||
        Z[100] !== V ||
        Z[101] !== tc ||
        Z[102] !== td ||
        Z[103] !== tu
          ? ((J = (0, a.jsx)(
              eL.M,
              {
                actionPreviewRef: ev,
                gizmoId: tc,
                accountId: ee,
                defaultModelSlug: td,
                disabled: tu,
                name: ef.display.name,
                description: ef.display.description,
                avatarUrl: eJ,
              },
              V,
            )),
            (Z[96] = ee),
            (Z[97] = ef.display.description),
            (Z[98] = ef.display.name),
            (Z[99] = eJ),
            (Z[100] = V),
            (Z[101] = tc),
            (Z[102] = td),
            (Z[103] = tu),
            (Z[104] = J))
          : (J = Z[104]),
        Z[105] !== es ||
        Z[106] !== ea ||
        Z[107] !== eZ ||
        Z[108] !== ef ||
        Z[109] !== e1 ||
        Z[110] !== eD ||
        Z[111] !== eY ||
        Z[112] !== e3 ||
        Z[113] !== eJ ||
        Z[114] !== eg.change ||
        Z[115] !== eg.subscribeToSaves ||
        Z[116] !== ey ||
        Z[117] !== C ||
        Z[118] !== M ||
        Z[119] !== B ||
        Z[120] !== G ||
        Z[121] !== tr ||
        Z[122] !== tn ||
        Z[123] !== tl ||
        Z[124] !== E ||
        Z[125] !== O ||
        Z[126] !== $ ||
        Z[127] !== q ||
        Z[128] !== U ||
        Z[129] !== X ||
        Z[130] !== J
          ? ((Y = (0, a.jsx)("div", {
              className: "min-h-0 flex-1",
              children: (0, a.jsx)(eT, {
                draft: ef,
                onChange: e5,
                subscribeToSaves: e8,
                onValidateAction: C,
                onImportAction: M,
                onTestAction: B,
                savedActions: G,
                hasSavedDraft: tr,
                isPublished: tn,
                readOnly: eZ,
                defaultTab: tl,
                browsingAllowed: ea,
                allowedActionDomains: es,
                isBusy: e1,
                saveState: ey,
                onRetrySave: E,
                magicCreateDisabled: eY,
                avatarUrl: eJ,
                onBack: O,
                onShare: $,
                onPublish: q,
                isUploadingFiles: eD,
                onCancelUploadFiles: L,
                maxKnowledgeFiles: e3,
                onUploadFiles: U,
                conversation: X,
                preview: J,
              }),
            })),
            (Z[105] = es),
            (Z[106] = ea),
            (Z[107] = eZ),
            (Z[108] = ef),
            (Z[109] = e1),
            (Z[110] = eD),
            (Z[111] = eY),
            (Z[112] = e3),
            (Z[113] = eJ),
            (Z[114] = eg.change),
            (Z[115] = eg.subscribeToSaves),
            (Z[116] = ey),
            (Z[117] = C),
            (Z[118] = M),
            (Z[119] = B),
            (Z[120] = G),
            (Z[121] = tr),
            (Z[122] = tn),
            (Z[123] = tl),
            (Z[124] = E),
            (Z[125] = O),
            (Z[126] = $),
            (Z[127] = q),
            (Z[128] = U),
            (Z[129] = X),
            (Z[130] = J),
            (Z[131] = Y))
          : (Y = Z[131]),
        Z[132] !== w || Z[133] !== Y || Z[134] !== v
          ? ((Q = (0, a.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [v, w, Y] })),
            (Z[132] = w),
            (Z[133] = Y),
            (Z[134] = v),
            (Z[135] = Q))
          : (Q = Z[135]),
        Q
      )
    }
    function e9(e) {
      let { file_id: t } = e
      return t
    }
    function e7(e) {
      let { type: t, settings: i, metadata: a } = e,
        s = "plugins_prototype" === t ? B.parse(a) : null
      return { type: t, settings: i, metadata: s?.auth?.type === "none" ? { ...s, action_id: void 0 } : a }
    }
    function te(e) {
      return { file_id: e.id, name: e.name, size: e.size, type: e.mimeType, location: "fs" }
    }
    function tt() {}
    function ti() {}
    function ta(e) {
      return "plugins_prototype" === e.type ? [e.metadata] : []
    }
    function ts() {}
  },
  AOG7(e, t, i) {
    var a = i("QosV"),
      s = i("T0Rc"),
      r = i("EOo5"),
      n = i("rvFo"),
      l = i("HFSu"),
      o = i("GEsy"),
      c = i("eShZ")
    async function d(e, t, i, { includeProfilePhotos: a = !1, includeTotal: s, limit: r = 10 } = {}) {
      return (
        await l.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: r, offset: 0, query: t, include_profile_photos: a, include_total: s },
          },
          signal: i,
        })
      ).items
    }
    i.d(
      t,
      {},
      {
        AB: d,
        C4: async function (e, t, i) {
          let a = t.trim().toLowerCase(),
            s = await d(e, a, i)
          return s.find((e) => e.email?.trim().toLowerCase() === a)?.account_user_id
        },
        Nc: function (e, t) {
          let i,
            c,
            d,
            u,
            p,
            h,
            m = (0, a.c)(18)
          m[0] !== t ? ((i = void 0 === t ? {} : t), (m[0] = t), (m[1] = i)) : (i = m[1])
          let { includeMemberCounts: g } = i,
            f = void 0 !== g && g,
            { accountId: _, authMethod: y } = (0, r.As)()
          m[2] !== e ? ((c = e.trim()), (m[2] = e), (m[3] = c)) : (c = m[3])
          let b = c,
            x = (0, o.o)(b, 150)
          ;(m[4] !== f ? ((d = f ? ["member-counts"] : []), (m[4] = f), (m[5] = d)) : (d = m[5]),
            m[6] !== _ || m[7] !== b || m[8] !== d
              ? ((u = ["workspace-groups", _, b, ...d]), (m[6] = _), (m[7] = b), (m[8] = d), (m[9] = u))
              : (u = m[9]))
          let v = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != _ && b.length > 0 && b === x
          return (
            m[10] !== _ || m[11] !== f || m[12] !== b
              ? ((p = async (e) => {
                  let { signal: t } = e
                  if (null == _) throw Error("account id is required")
                  return (
                    await l.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: _ },
                        query: { limit: 10, offset: 0, query: b, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (m[10] = _),
                (m[11] = f),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== v || m[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: v,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: n.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = v),
                (m[16] = p),
                (m[17] = h))
              : (h = m[17]),
            (0, s.I)(h)
          )
        },
        Nv: function (e, t) {
          let i,
            l,
            c,
            u,
            p,
            h,
            m = (0, a.c)(18)
          m[0] !== t ? ((i = void 0 === t ? {} : t), (m[0] = t), (m[1] = i)) : (i = m[1])
          let { includeProfilePhotos: g } = i,
            f = void 0 !== g && g,
            { accountId: _, authMethod: y } = (0, r.As)()
          m[2] !== e ? ((l = e.trim()), (m[2] = e), (m[3] = l)) : (l = m[3])
          let b = l,
            x = (0, o.o)(b, 150)
          ;(m[4] !== f ? ((c = f ? ["profile-photos"] : []), (m[4] = f), (m[5] = c)) : (c = m[5]),
            m[6] !== _ || m[7] !== b || m[8] !== c
              ? ((u = ["workspace-users", _, b, ...c]), (m[6] = _), (m[7] = b), (m[8] = c), (m[9] = u))
              : (u = m[9]))
          let v = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != _ && b.length > 0 && b === x
          return (
            m[10] !== _ || m[11] !== f || m[12] !== b
              ? ((p = (e) => {
                  let { signal: t } = e
                  if (null == _) throw Error("account id is required")
                  return d(_, b, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (m[10] = _),
                (m[11] = f),
                (m[12] = b),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== u || m[15] !== v || m[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: v,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: n.D.ONE_MINUTE,
                }),
                (m[14] = u),
                (m[15] = v),
                (m[16] = p),
                (m[17] = h))
              : (h = m[17]),
            (0, s.I)(h)
          )
        },
        We: async function (e, t, i) {
          try {
            return (
              await l.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: i,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.fk && 404 === e.status)) throw e
          }
          return d(e, t, i)
        },
      },
    )
  },
  aAsK(e, t, i) {
    var a = i("ABep"),
      s = i("QosV"),
      r = i("hwkA"),
      n = i("IUMq"),
      l = i("slpy"),
      o = i("on57"),
      c = i("oyxz"),
      d = i("bVeK"),
      u = i("vtqG")
    function p(e) {
      return e.stopPropagation()
    }
    i.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            i,
            h,
            m,
            g,
            f,
            _,
            y,
            b,
            x,
            v,
            j = (0, s.c)(48),
            {
              alignOffset: w,
              options: A,
              disabled: T,
              footer: P,
              indicatorVariant: S,
              renderLabel: k,
              mixed: C,
              opticallyAlign: M,
              removeLabel: B,
              sideOffset: G,
              size: F,
              variant: z,
              value: N,
              onChange: R,
              onRemoveAccess: I,
            } = e,
            E = void 0 !== T && T,
            O = void 0 === S ? "checkmark" : S,
            $ = void 0 !== C && C,
            q = void 0 === z ? "default" : z,
            L = void 0 === F ? "sm" : F
          "field" === q ? (L = "xl") : "audienceReview" === q && (L = "lg")
          let U = "audienceReview" === q && u.A.permission
          j[0] !== U ? ((t = (0, o.A)(U, "enabled:text-default")), (j[0] = U), (j[1] = t)) : (t = j[1])
          let D = "field" === q ? "outline" : "ghost",
            H = "field" !== q,
            K = "inline" === q ? "2xs" : void 0
          ;(j[2] !== $ || j[3] !== k || j[4] !== N
            ? ((i = $
                ? (0, a.jsx)(c.A, {
                    id: "shareDialog.mixedRoles",
                    defaultMessage: "Mixed",
                    description: "Role selector label when selected sharing recipients have different permissions",
                  })
                : k(N)),
              (j[2] = $),
              (j[3] = k),
              (j[4] = N),
              (j[5] = i))
            : (i = j[5]),
            j[6] === Symbol.for("react.memo_cache_sentinel") ? ((h = (0, a.jsx)(d.Aq_, {})), (j[6] = h)) : (h = j[6]),
            j[7] !== E ||
            j[8] !== M ||
            j[9] !== K ||
            j[10] !== i ||
            j[11] !== t ||
            j[12] !== D ||
            j[13] !== H ||
            j[14] !== L
              ? ((m = (0, a.jsxs)(r.$, {
                  className: t,
                  color: "secondary",
                  variant: D,
                  size: L,
                  iconSize: "sm",
                  pill: H,
                  gutterSize: K,
                  opticallyAlign: M,
                  disabled: E,
                  children: [i, h],
                })),
                (j[7] = E),
                (j[8] = M),
                (j[9] = K),
                (j[10] = i),
                (j[11] = t),
                (j[12] = D),
                (j[13] = H),
                (j[14] = L),
                (j[15] = m))
              : (m = j[15]),
            j[16] !== E || j[17] !== m
              ? ((g = (0, a.jsx)(n.W.Trigger, { disabled: E, children: m })), (j[16] = E), (j[17] = m), (j[18] = g))
              : (g = j[18]))
          let W = $ ? "" : N
          if (
            (j[19] !== R || j[20] !== A
              ? ((f = (e) => {
                  let t = A.find((t) => t.value === e)
                  null != t && R?.(t.value)
                }),
                (j[19] = R),
                (j[20] = A),
                (j[21] = f))
              : (f = j[21]),
            j[22] !== E || j[23] !== O || j[24] !== A || j[25] !== k)
          ) {
            let e
            ;(j[27] !== E || j[28] !== O || j[29] !== k
              ? ((e = (e) =>
                  (0, a.jsx)(
                    l.m,
                    {
                      content: e.tooltipText,
                      children: (0, a.jsx)(n.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: O,
                        value: e.value,
                        disabled: E || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, a.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, a.jsx)("span", { children: k(e.value) }),
                            null == e.description
                              ? null
                              : (0, a.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (j[27] = E),
                (j[28] = O),
                (j[29] = k),
                (j[30] = e))
              : (e = j[30]),
              (_ = A.map(e)),
              (j[22] = E),
              (j[23] = O),
              (j[24] = A),
              (j[25] = k),
              (j[26] = _))
          } else _ = j[26]
          return (
            j[31] !== W || j[32] !== f || j[33] !== _
              ? ((y = (0, a.jsx)(n.W.RadioGroup, { value: W, onChange: f, children: _ })),
                (j[31] = W),
                (j[32] = f),
                (j[33] = _),
                (j[34] = y))
              : (y = j[34]),
            j[35] !== E || j[36] !== I || j[37] !== B
              ? ((b =
                  null == I
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(n.W.Separator, {}),
                          (0, a.jsx)(n.W.Item, { color: "danger", disabled: E, onSelect: I, children: B }),
                        ],
                      })),
                (j[35] = E),
                (j[36] = I),
                (j[37] = B),
                (j[38] = b))
              : (b = j[38]),
            j[39] !== w || j[40] !== P || j[41] !== G || j[42] !== y || j[43] !== b
              ? ((x = (0, a.jsxs)(n.W.Content, {
                  align: "end",
                  alignOffset: w,
                  minWidth: "auto",
                  sideOffset: G,
                  children: [y, b, P],
                })),
                (j[39] = w),
                (j[40] = P),
                (j[41] = G),
                (j[42] = y),
                (j[43] = b),
                (j[44] = x))
              : (x = j[44]),
            j[45] !== g || j[46] !== x
              ? ((v = (0, a.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: p,
                  children: (0, a.jsxs)(n.W, { children: [g, x] }),
                })),
                (j[45] = g),
                (j[46] = x),
                (j[47] = v))
              : (v = j[47]),
            v
          )
        },
      },
    )
  },
}
//# sourceMappingURL=301564.5becb451f7.js.map
