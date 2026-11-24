export const __rspack_esm_ids = [750100]
export const __webpack_modules__ = {
  vVGb(e, t, a) {
    var i = a("uAAd")
    function r(e) {
      let t = n(e)
      if (!t) return null
      let a = t.split(":"),
        r = a[0]
      if (!r) return null
      let l = a[1] ?? r,
        o = (0, i.DX)(r),
        c = (0, i.PD)(r),
        d = (0, i.DX)(l),
        u = (0, i.PD)(l),
        p = { startRow: Math.min(o, d), startCol: Math.min(c, u), endRow: Math.max(o, d), endCol: Math.max(c, u) }
      return { ref: s(p), bounds: p }
    }
    function s(e) {
      let t = l(e.startRow, e.startCol),
        a = l(e.endRow, e.endCol)
      return t === a ? t : `${t}:${a}`
    }
    function l(e, t) {
      return `${(0, i.Zp)(t)}${e + 1}`
    }
    function n(e) {
      let t = e.trim()
      return t ? (t.includes("!") ? t.slice(t.indexOf("!") + 1) : t).replace(/\$/g, "").toUpperCase() : null
    }
    a.d(
      t,
      {},
      {
        $1: l,
        DO: r,
        Ol: function (e) {
          var t
          let a = e.startsWith("=") ? e.slice(1) : e,
            i = a.indexOf("!")
          if (-1 === i) {
            let e = r(a)
            return { ref: e?.ref ?? a }
          }
          let s = a.slice(0, i),
            l = a.slice(i + 1),
            n = r(l)
          return {
            sheetName:
              (t = s).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
            ref: n?.ref ?? l,
          }
        },
        Qh: n,
        ds: function (e) {
          return { rows: e.endRow - e.startRow + 1, cols: e.endCol - e.startCol + 1 }
        },
        ox: function (e, t) {
          return e.startRow <= t.endRow && e.endRow >= t.startRow && e.startCol <= t.endCol && e.endCol >= t.startCol
        },
        wP: s,
      },
    )
  },
  P0hF(e, t, a) {
    let i = Object.freeze(
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
    a.d(
      t,
      {},
      {
        T: i,
        b: function (e) {
          if (!e?.length) return i
          let t = { ...i }
          for (let [a, i] of e.entries()) {
            if (64 === a || 65 === a) continue
            let e = i.value.replace(/^#/, "")
            t[`indexed:${a}`] = `#${8 === e.length ? e.slice(2) : e}`
          }
          return Object.freeze(t)
        },
      },
    )
  },
  RqRN(e, t, a) {
    a.r(t)
    var i = a("vVGb")
    let r = "CSV import",
      s = /\\|\/|\?|\*|\[|\]|:/g
    function l(e) {
      return ((e ?? r).trim().replace(s, "").trim() || r).slice(0, 31)
    }
    a.d(
      t,
      {},
      {
        planCsvImport: function (e, t) {
          let a = (function (e) {
              let t = e ?? ","
              if (1 !== t.length) throw Error(`CSV import separator must be a single character; received "${t}".`)
              return t
            })(t?.separator),
            r = (0, i.Ol)(t?.anchor ?? "A1"),
            s = r.sheetName?.trim(),
            n = t?.sheetName?.trim()
          if (s && n && s !== n)
            throw Error(`CSV import specifies conflicting sheet names: "${n}" (options.sheetName) vs "${s}" (anchor).`)
          let o = l(s ?? n),
            c = (0, i.DO)(r.ref)
          if (!c) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor ?? "A1"}".`)
          let { bounds: d } = c
          if (d.startRow !== d.endRow || d.startCol !== d.endCol)
            throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor ?? "A1"}".`)
          let u = (function (e, t) {
              if (!e.trim()) return []
              let a = (function (e, t) {
                let a = [],
                  i = [],
                  r = "",
                  s = !1,
                  l = () => {
                    ;(i.push(r), (r = ""))
                  },
                  n = () => {
                    ;(a.push(i), (i = []))
                  }
                for (let a = 0; a < e.length; a += 1) {
                  let i = e[a] ?? ""
                  if (s) {
                    if ('"' === i) {
                      if ('"' === e[a + 1]) {
                        ;((r += '"'), (a += 1))
                        continue
                      }
                      s = !1
                      continue
                    }
                    r += i
                    continue
                  }
                  if ('"' === i) {
                    s = !0
                    continue
                  }
                  if (i === t) {
                    l()
                    continue
                  }
                  if ("\n" === i) {
                    ;(l(), n())
                    continue
                  }
                  if ("\r" === i) {
                    ;("\n" === e[a + 1] && (a += 1), l(), n())
                    continue
                  }
                  r += i
                }
                for (l(), n(); a.length > 0;) {
                  let e = a[a.length - 1] ?? []
                  if (!(e.length > 0 && e.every((e) => "" === e))) break
                  a.pop()
                }
                return a
              })(e, t)
              if (0 === a.length) return []
              let i = a.reduce((e, t) => Math.max(e, t.length), 0)
              return 0 === i
                ? []
                : a.map((e) => {
                    if (e.length === i) return e
                    let t = e.slice()
                    for (; t.length < i;) t.push("")
                    return t
                  })
            })(e, a),
            p = u.length,
            m = p > 0 ? (u[0]?.length ?? 0) : 0
          if (0 === p || 0 === m) return { sheetName: o, values: [] }
          let g = { startRow: d.startRow, startCol: d.startCol, endRow: d.startRow + p - 1, endCol: d.startCol + m - 1 }
          return {
            sheetName: o,
            values: u,
            rangeRef: (0, i.wP)(g),
            rect: { r1: g.startRow, c1: g.startCol, r2: g.endRow, c2: g.endCol },
          }
        },
        sanitizeSheetName: l,
      },
    )
  },
  uAAd(e, t, a) {
    var i = a("P0hF")
    let r = 4 / 3
    function s(e) {
      return Math.ceil(e && e > 0 ? e : 7)
    }
    a.d(
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
          if (null != e) return i.T[`indexed:${e}`]
        },
        PD: function (e) {
          let t = e.match(/[A-Z]+/)
          if (!t) return 0
          let a = 0
          for (let e of t[0]) a = 26 * a + (e.charCodeAt(0) - 64)
          return a - 1
        },
        R5: function (e) {
          return Number.isFinite(e ?? 0) ? ((e ?? 0) * 72) / 96 : 15
        },
        UL: function (e) {
          let t = e.replace(/^0x/i, "")
          if (8 === t.length) {
            let e = parseInt(t.slice(2, 4), 16),
              a = parseInt(t.slice(4, 6), 16),
              i = parseInt(t.slice(6, 8), 16)
            return `rgba(${e}, ${a}, ${i}, 1.000)`
          }
          return 6 === t.length ? `#${t}` : "#ffffff"
        },
        Wh: function (e, t) {
          return null == e || e <= 0 ? 64 : e * s(t)
        },
        Zp: function (e) {
          let t = ""
          for (e += 1; e;) {
            let a = (e - 1) % 26
            ;((t = String.fromCharCode(65 + a) + t), (e = Math.floor((e - a) / 26)))
          }
          return t
        },
        eJ: function (e, t) {
          return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / s(t))) / 100
        },
      },
    )
  },
  jjPm(e, t, a) {
    var i = a("QosV"),
      r = a("qmMi"),
      s = a("eFn4"),
      l = a("UOa8"),
      n = a("OAko"),
      o = a("OWtl"),
      c = a("JYRT"),
      d = a("OMIV"),
      u = a("dXCv")
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
      m = (0, r.SZ)(
        o.u,
        ({ get: e }) => e(d.M9)?.getContext().user.customIDs?.account_id,
        ({ get: e, set: t }) => {
          let a = e(d.M9)
          if (null == a) return
          let i = () => {
            t(a.getContext().user.customIDs?.account_id)
          }
          return (a.on("values_updated", i), () => a.off("values_updated", i))
        },
      )
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a,
            o,
            g = (0, i.c)(5),
            { children: h, loadingFallback: f, unavailableFallback: _, readOnlyFallback: y } = e,
            x = void 0 === _ ? null : _,
            { accountId: v } = (0, l.As)()
          g[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { preview: !1 }), (g[0] = t)) : (t = g[0])
          let { data: b, isError: j } = (0, n.YL)(void 0, t),
            w = null != v && b?.id === v && !j
          g[1] !== w ? ((a = { enabled: w }), (g[1] = w), (g[2] = a)) : (a = g[2])
          let { data: A, isError: S } = (0, r._U)(u.i, v ?? "", a),
            k = (0, r.Ul)(d.RS),
            M = (0, r.Ul)(m),
            C = (0, r._U)(c.X, "2826703856"),
            B = !k && M === v,
            F = C?.value.enable_gpt_fe_controls === !0,
            z = b?.id === v && A?.account.structure === "workspace" && B && F
          g[3] !== z ? ((o = { enabled: z }), (g[3] = z), (g[4] = o)) : (o = g[4])
          let { data: P, isPending: N, isError: T } = (0, r._U)(s.Jk, v ?? "", o)
          return j || S || (z && T)
            ? x
            : null == b || b.id !== v || null == A || A.account.account_id !== v || !B || null == C || (z && N)
              ? void 0 === f
                ? null
                : f
              : (!0 === A.entitlement.has_active_subscription ||
                    p.has(A.account.plan_type ?? "free") ||
                    "free_workspace" === A.account.plan_type) &&
                  (!z || P?.permissions?.includes("chatgpt.workspace.gpt.crud"))
                ? h
                : (y ?? x)
        },
      },
    )
  },
  dXCv(e, t, a) {
    var i = a("qmMi"),
      r = a("DBCl"),
      s = a("Ietk"),
      l = a("Kwur"),
      n = a("OWtl")
    let o = (0, i.vU)(n.u, (e, { scope: t }) => ({
      queryKey: ["accounts", "check", "v4-2023-04-27", e],
      staleTime: 0,
      refetchOnWindowFocus: !0,
      queryFn: async ({ signal: a }) => (
        await (0, s.uc)(t, a),
        l.Request.safeGet("/accounts/check/{version}", {
          parameters: { path: { version: "v4-2023-04-27" } },
          additionalHeaders: { [r.n1Q]: "1", [r.zBc]: e },
          signal: a,
        })
      ),
      select: (t) => t.accounts[e],
    }))
    a.d(t, {}, { i: o })
  },
  YYu1(e, t, a) {
    a.d(t, { GptBuilderPage: () => ty })
    var i = a("ABep"),
      r = a("QosV"),
      s = a("qmMi"),
      l = a("zd8w"),
      n = a("oyxz"),
      o = a("Wf1j"),
      c = a("Ywss"),
      d = a("ASxG"),
      u = a("SPnB"),
      p = a("eFn4"),
      m = a("X5Tu"),
      g = a("MrGp"),
      h = a("nQgc"),
      f = a("jjPm"),
      _ = a("dXCv"),
      y = a("vzxm"),
      x = a("MM0V"),
      v = a("Sm6l"),
      b = a("FrrB"),
      j = a("X6Vn"),
      w = a("zOE4"),
      A = a("OWtl"),
      S = a("JYRT"),
      k = a("OMIV"),
      M = a("soaw"),
      C = a("Clvq")
    let B = d.k5n(["basic", "bearer", "custom"]),
      F = d._H3({
        action_id: d.YjP().nullish(),
        domain: d.YjP().nullish(),
        privacy_policy_url: d.YjP().nullish(),
        raw_spec: d.YjP().nullish(),
        api_key: d.YjP().nullish(),
        oauth_client_id: d.YjP().nullish(),
        oauth_client_secret: d.YjP().nullish(),
        auth: d
          .gMt("type", [
            d._H3({ type: d.euz("none") }),
            d._H3({ type: d.euz("service_http"), authorization_type: B, custom_auth_header: d.YjP().nullish() }),
            d._H3({ type: d.euz("user_http"), authorization_type: B }),
            d._H3({
              type: d.euz("oauth"),
              client_url: d.YjP(),
              scope: d.YjP(),
              authorization_url: d.YjP(),
              authorization_content_type: d.YjP(),
              pkce_required: d.zMY().nullish(),
              token_exchange_method: d.k5n(["default_post", "basic_auth_header"]).nullish(),
            }),
          ])
          .nullish(),
      }),
      z = d.Ikc({ action_id: d.YjP().nullish(), domain: d.YjP().nullish() }),
      P = z.extend({ auth: d.Ikc({ type: d.YjP() }).nullish() })
    function N(e, t, a) {
      let i = t.tools?.find((t) => "plugins_prototype" === t.type && t.metadata.domain === e.domain),
        r = a.tools
          .filter((e) => "plugins_prototype" === e.type)
          .map((e) => z.parse(e.metadata))
          .find((t) => t.domain === e.domain)
      if (i?.type !== "plugins_prototype" || null == r) return e
      let s = i.metadata
      return e.auth?.type !== s.auth?.type
        ? e
        : {
            ...e,
            action_id: e.action_id === s.action_id ? r.action_id : e.action_id,
            api_key: e.api_key === s.api_key ? void 0 : e.api_key,
            oauth_client_id: e.oauth_client_id === s.oauth_client_id ? void 0 : e.oauth_client_id,
            oauth_client_secret: e.oauth_client_secret === s.oauth_client_secret ? void 0 : e.oauth_client_secret,
          }
    }
    var T = a("iqEK"),
      E = a("ccwJ"),
      R = a("DD2M")
    let G = d.Ikc({
      name: d
        .YjP()
        .optional()
        .catch(void 0),
      description: d
        .YjP()
        .optional()
        .catch(void 0),
      context: d
        .YjP()
        .optional()
        .catch(void 0),
      prompt_starters: d
        .YOg(d.YjP())
        .optional()
        .catch(void 0),
      profile_pic_file_id: d
        .YjP()
        .trim()
        .min(1)
        .optional()
        .catch(void 0),
    })
    function O(e) {
      return `This is the GPT's current set of fields:

${JSON.stringify({ name: e.display.name, description: e.display.description, context: e.instructions, prompt_starters: e.display.prompt_starters, abilities: e.tools?.map((e) => e.type), file_ids: e.files.map((e) => e.file_id) }, null, 2)}

${e.display.profile_pic_id || e.display.profile_picture_url ? "The GPT has a profile picture." : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior."}`
    }
    var q = a("on57"),
      I = a("jNL7"),
      U = a("lcic"),
      $ = a("Sezd"),
      D = a("bVeK"),
      L = a("BrP7"),
      Y = a("zLIa"),
      H = a("nsuH"),
      K = a("jxU8"),
      X = a("BSnr"),
      W = a("AWNZ"),
      J = a("ZEx5"),
      V = a("bIvi"),
      Q = a("Qgfj"),
      Z = a("HwQY"),
      ee = a("JNtf"),
      et = a("mUDD")
    function ea(e) {
      let t,
        a,
        s,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _,
        y,
        x,
        v,
        b,
        j,
        w,
        A = (0, r.c)(65),
        { metadata: S, onChange: k, disabled: M } = e,
        C = (0, o.A)(),
        B = S.auth,
        F = (0, l.useId)()
      ;(A[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)("p", {
            className: "text-sm text-secondary",
            children: (0, i.jsx)(n.A, {
              id: "gptBuilder.actions.keepCredentials",
              defaultMessage: "Leave credential fields blank to keep existing credentials",
            }),
          })),
          (A[0] = t))
        : (t = A[0]),
        A[1] !== C
          ? ((a = C.formatMessage({ id: "gptBuilder.actions.authentication", defaultMessage: "Authentication" })),
            (A[1] = C),
            (A[2] = a))
          : (a = A[2]))
      let z = `${F}-none`,
        P = `${F}-auth`
      A[3] !== C ? ((s = C.formatMessage(er.noAuth)), (A[3] = C), (A[4] = s)) : (s = A[4])
      let N = null == B || "none" === B.type
      ;(A[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(n.A, { id: "gptBuilder.actions.noAuth", defaultMessage: "None" })), (A[5] = c))
        : (c = A[5]),
        A[6] !== S || A[7] !== k
          ? ((d = () =>
              k({
                ...S,
                auth: { type: "none" },
                api_key: void 0,
                oauth_client_id: void 0,
                oauth_client_secret: void 0,
              })),
            (A[6] = S),
            (A[7] = k),
            (A[8] = d))
          : (d = A[8]),
        A[9] !== z || A[10] !== P || A[11] !== s || A[12] !== N || A[13] !== d
          ? ((u = (0, i.jsx)(W.lu, {
              id: z,
              name: P,
              value: "none",
              variant: "inline",
              ariaLabel: s,
              checked: N,
              label: c,
              onChange: d,
            })),
            (A[9] = z),
            (A[10] = P),
            (A[11] = s),
            (A[12] = N),
            (A[13] = d),
            (A[14] = u))
          : (u = A[14]))
      let T = `${F}-service_http`,
        E = `${F}-auth`
      A[15] !== C ? ((p = C.formatMessage(er.apiKey)), (A[15] = C), (A[16] = p)) : (p = A[16])
      let R = B?.type === "service_http"
      ;(A[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, i.jsx)(n.A, { ...er.apiKey })), (A[17] = m))
        : (m = A[17]),
        A[18] !== B || A[19] !== S || A[20] !== k
          ? ((g = () =>
              k({
                ...S,
                auth: B?.type === "service_http" ? B : { type: "service_http", authorization_type: "bearer" },
                oauth_client_id: void 0,
                oauth_client_secret: void 0,
              })),
            (A[18] = B),
            (A[19] = S),
            (A[20] = k),
            (A[21] = g))
          : (g = A[21]),
        A[22] !== T || A[23] !== E || A[24] !== p || A[25] !== R || A[26] !== g
          ? ((h = (0, i.jsx)(W.lu, {
              id: T,
              name: E,
              value: "service_http",
              variant: "inline",
              ariaLabel: p,
              checked: R,
              label: m,
              onChange: g,
            })),
            (A[22] = T),
            (A[23] = E),
            (A[24] = p),
            (A[25] = R),
            (A[26] = g),
            (A[27] = h))
          : (h = A[27]))
      let G = `${F}-oauth`,
        O = `${F}-auth`
      A[28] !== C ? ((f = C.formatMessage(er.oauth)), (A[28] = C), (A[29] = f)) : (f = A[29])
      let q = B?.type === "oauth"
      return (
        A[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(n.A, { id: "gptBuilder.actions.oauth", defaultMessage: "OAuth" })), (A[30] = _))
          : (_ = A[30]),
        A[31] !== B || A[32] !== S || A[33] !== k
          ? ((y = () =>
              k({
                ...S,
                auth:
                  B?.type === "oauth"
                    ? B
                    : {
                        type: "oauth",
                        client_url: "",
                        authorization_url: "",
                        scope: "",
                        authorization_content_type: "application/x-www-form-urlencoded",
                      },
                api_key: void 0,
              })),
            (A[31] = B),
            (A[32] = S),
            (A[33] = k),
            (A[34] = y))
          : (y = A[34]),
        A[35] !== G || A[36] !== O || A[37] !== f || A[38] !== q || A[39] !== y
          ? ((x = (0, i.jsx)(W.lu, {
              id: G,
              name: O,
              value: "oauth",
              variant: "inline",
              ariaLabel: f,
              checked: q,
              label: _,
              onChange: y,
            })),
            (A[35] = G),
            (A[36] = O),
            (A[37] = f),
            (A[38] = q),
            (A[39] = y),
            (A[40] = x))
          : (x = A[40]),
        A[41] !== M || A[42] !== h || A[43] !== a || A[44] !== x || A[45] !== u
          ? ((v = (0, i.jsxs)("fieldset", {
              disabled: M,
              className: "flex gap-4",
              "aria-label": a,
              children: [u, h, x],
            })),
            (A[41] = M),
            (A[42] = h),
            (A[43] = a),
            (A[44] = x),
            (A[45] = u),
            (A[46] = v))
          : (v = A[46]),
        A[47] !== B || A[48] !== M || A[49] !== F || A[50] !== C || A[51] !== S || A[52] !== k
          ? ((b =
              B?.type === "service_http" &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(ei, {
                    label: er.apiKey,
                    value: S.api_key ?? "",
                    disabled: M,
                    secret: !0,
                    onChange: (e) => k({ ...S, api_key: e || void 0 }),
                  }),
                  (0, i.jsx)("fieldset", {
                    disabled: M,
                    className: "flex gap-4",
                    children: ["basic", "bearer", "custom"].map((e) =>
                      (0, i.jsx)(
                        W.lu,
                        {
                          id: `${F}-${e}`,
                          name: `${F}-api-auth`,
                          value: e,
                          variant: "inline",
                          ariaLabel: C.formatMessage(er[e]),
                          checked: B.authorization_type === e,
                          label: (0, i.jsx)(n.A, { ...er[e] }),
                          onChange: () => k({ ...S, auth: { ...B, authorization_type: e } }),
                        },
                        e,
                      ),
                    ),
                  }),
                  "custom" === B.authorization_type &&
                    (0, i.jsx)(ei, {
                      label: er.header,
                      value: B.custom_auth_header ?? "",
                      disabled: M,
                      onChange: (e) => k({ ...S, auth: { ...B, custom_auth_header: e } }),
                    }),
                ],
              })),
            (A[47] = B),
            (A[48] = M),
            (A[49] = F),
            (A[50] = C),
            (A[51] = S),
            (A[52] = k),
            (A[53] = b))
          : (b = A[53]),
        A[54] !== B || A[55] !== M || A[56] !== F || A[57] !== C || A[58] !== S || A[59] !== k
          ? ((j =
              B?.type === "oauth" &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(ei, {
                    secret: !0,
                    label: er.clientId,
                    value: S.oauth_client_id ?? "",
                    disabled: M,
                    onChange: (e) => k({ ...S, oauth_client_id: e || void 0 }),
                  }),
                  (0, i.jsx)(ei, {
                    label: er.clientSecret,
                    value: S.oauth_client_secret ?? "",
                    disabled: M,
                    secret: !0,
                    onChange: (e) => k({ ...S, oauth_client_secret: e || void 0 }),
                  }),
                  (0, i.jsx)(ei, {
                    label: er.authUrl,
                    value: B.client_url,
                    disabled: M,
                    onChange: (e) => k({ ...S, auth: { ...B, client_url: e } }),
                  }),
                  (0, i.jsx)(ei, {
                    label: er.tokenUrl,
                    value: B.authorization_url,
                    disabled: M,
                    onChange: (e) => k({ ...S, auth: { ...B, authorization_url: e } }),
                  }),
                  (0, i.jsx)(ei, {
                    label: er.scope,
                    value: B.scope,
                    disabled: M,
                    onChange: (e) => k({ ...S, auth: { ...B, scope: e } }),
                  }),
                  (0, i.jsxs)("fieldset", {
                    disabled: M,
                    className: "flex flex-col gap-2",
                    children: [
                      (0, i.jsx)("legend", {
                        className: "text-sm font-medium select-none",
                        children: (0, i.jsx)(n.A, {
                          id: "gptBuilder.actions.tokenExchange",
                          defaultMessage: "Token exchange method",
                        }),
                      }),
                      ["default_post", "basic_auth_header"].map((e) =>
                        (0, i.jsx)(
                          W.lu,
                          {
                            id: `${F}-${e}`,
                            name: `${F}-token-exchange`,
                            value: e,
                            variant: "inline",
                            ariaLabel: C.formatMessage(er[e]),
                            checked: (B.token_exchange_method ?? "default_post") === e,
                            label: (0, i.jsx)(n.A, { ...er[e] }),
                            onChange: () => k({ ...S, auth: { ...B, token_exchange_method: e } }),
                          },
                          e,
                        ),
                      ),
                    ],
                  }),
                  (0, i.jsx)(W.ic, {
                    label: (0, i.jsx)(n.A, { ...er.pkce }),
                    control: (0, i.jsx)("div", {
                      className: "relative",
                      children: (0, i.jsx)($.S, {
                        "aria-label": C.formatMessage(er.pkce),
                        checked: !0 === B.pkce_required,
                        disabled: M,
                        onCheckedChange: (e) => k({ ...S, auth: { ...B, pkce_required: !0 === e } }),
                      }),
                    }),
                  }),
                ],
              })),
            (A[54] = B),
            (A[55] = M),
            (A[56] = F),
            (A[57] = C),
            (A[58] = S),
            (A[59] = k),
            (A[60] = j))
          : (j = A[60]),
        A[61] !== v || A[62] !== b || A[63] !== j
          ? ((w = (0, i.jsxs)("div", { className: "flex flex-col gap-4", children: [t, v, b, j] })),
            (A[61] = v),
            (A[62] = b),
            (A[63] = j),
            (A[64] = w))
          : (w = A[64]),
        w
      )
    }
    function ei(e) {
      let t,
        a,
        s,
        o,
        c,
        d = (0, r.c)(16),
        { label: u, value: p, disabled: m, secret: g, onChange: h } = e,
        f = (0, l.useId)()
      ;(d[0] !== u ? ((t = (0, i.jsx)(n.A, { ...u })), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] !== f || d[3] !== t
          ? ((a = (0, i.jsx)("label", { className: "text-sm font-medium select-none", htmlFor: f, children: t })),
            (d[2] = f),
            (d[3] = t),
            (d[4] = a))
          : (a = d[4]))
      let _ = void 0 !== g && g ? "password" : "text"
      return (
        d[5] !== h ? ((s = (e) => h(e.currentTarget.value)), (d[5] = h), (d[6] = s)) : (s = d[6]),
        d[7] !== m || d[8] !== f || d[9] !== _ || d[10] !== s || d[11] !== p
          ? ((o = (0, i.jsx)(Y.pd, {
              id: f,
              name: f,
              value: p,
              disabled: m,
              type: _,
              autoComplete: "off",
              onChange: s,
            })),
            (d[7] = m),
            (d[8] = f),
            (d[9] = _),
            (d[10] = s),
            (d[11] = p),
            (d[12] = o))
          : (o = d[12]),
        d[13] !== a || d[14] !== o
          ? ((c = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [a, o] })),
            (d[13] = a),
            (d[14] = o),
            (d[15] = c))
          : (c = d[15]),
        c
      )
    }
    let er = (0, Q.YK)({
      default_post: { id: "gptBuilder.actions.defaultPost", defaultMessage: "Default (POST request)" },
      basic_auth_header: { id: "gptBuilder.actions.basicAuthHeader", defaultMessage: "Basic authorization header" },
      noAuth: { id: "gptBuilder.actions.noAuth", defaultMessage: "None" },
      oauth: { id: "gptBuilder.actions.oauth", defaultMessage: "OAuth" },
      apiKey: { id: "gptBuilder.actions.apiKey", defaultMessage: "API key" },
      clientId: { id: "gptBuilder.actions.clientId", defaultMessage: "Client ID" },
      clientSecret: { id: "gptBuilder.actions.clientSecret", defaultMessage: "Client secret" },
      authUrl: { id: "gptBuilder.actions.authUrl", defaultMessage: "Authorization URL" },
      tokenUrl: { id: "gptBuilder.actions.tokenUrl", defaultMessage: "Token URL" },
      scope: { id: "gptBuilder.actions.scope", defaultMessage: "Scope" },
      header: { id: "gptBuilder.actions.header", defaultMessage: "Custom header name" },
      basic: { id: "gptBuilder.actions.basic", defaultMessage: "Basic" },
      bearer: { id: "gptBuilder.actions.bearer", defaultMessage: "Bearer" },
      custom: { id: "gptBuilder.actions.customHeader", defaultMessage: "Custom" },
      pkce: { id: "gptBuilder.actions.pkce", defaultMessage: "PKCE" },
    })
    function es(e) {
      let t,
        a,
        s,
        o,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _,
        y,
        x,
        b = (0, r.c)(35),
        { metadata: j, disabled: w, onSave: A, onClose: S, subscribeToSaves: k } = e,
        [M, C] = (0, l.useState)(j)
      ;(b[0] !== k
        ? ((t = () =>
            k?.((e, t) => {
              C((a) => N(a, e, t))
            })),
          (a = [k]),
          (b[0] = k),
          (b[1] = t),
          (b[2] = a))
        : ((t = b[1]), (a = b[2])),
        (0, l.useEffect)(t, a))
      let [B, F] = (0, l.useState)(null)
      return (
        b[3] !== S
          ? ((s = (e) => {
              e || S()
            }),
            (b[3] = S),
            (b[4] = s))
          : (s = b[4]),
        b[5] !== w || b[6] !== M || b[7] !== S || b[8] !== A
          ? ((o = (e) => {
              if ((e.preventDefault(), w)) return
              let t = A(M)
              ;(F(t), null == t && S())
            }),
            (b[5] = w),
            (b[6] = M),
            (b[7] = S),
            (b[8] = A),
            (b[9] = o))
          : (o = b[9]),
        b[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(et.c7, {
              title: (0, i.jsx)(ee.L3, {
                children: (0, i.jsx)(n.A, { id: "gptBuilder.actions.authTitle", defaultMessage: "Authentication" }),
              }),
            })),
            (b[10] = c))
          : (c = b[10]),
        b[11] !== w || b[12] !== M
          ? ((d = (0, i.jsx)(ea, { metadata: M, onChange: C, disabled: w })), (b[11] = w), (b[12] = M), (b[13] = d))
          : (d = b[13]),
        b[14] !== B
          ? ((u = null != B && (0, i.jsx)("p", { role: "alert", className: "text-error", children: B })),
            (b[14] = B),
            (b[15] = u))
          : (u = b[15]),
        b[16] !== d || b[17] !== u
          ? ((p = (0, i.jsxs)(et.OO, { children: [d, u] })), (b[16] = d), (b[17] = u), (b[18] = p))
          : (p = b[18]),
        b[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(n.A, { id: "gptBuilder.actions.authCancel", defaultMessage: "Cancel" })), (b[19] = m))
          : (m = b[19]),
        b[20] !== S
          ? ((g = (0, i.jsx)(v.$, { type: "button", color: "secondary", onClick: S, children: m })),
            (b[20] = S),
            (b[21] = g))
          : (g = b[21]),
        b[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(n.A, { id: "gptBuilder.actions.authSave", defaultMessage: "Save" })), (b[22] = h))
          : (h = b[22]),
        b[23] !== w
          ? ((f = (0, i.jsx)(v.$, { type: "submit", disabled: w, children: h })), (b[23] = w), (b[24] = f))
          : (f = b[24]),
        b[25] !== g || b[26] !== f
          ? ((_ = (0, i.jsxs)(et.Es, { children: [g, f] })), (b[25] = g), (b[26] = f), (b[27] = _))
          : (_ = b[27]),
        b[28] !== _ || b[29] !== o || b[30] !== p
          ? ((y = (0, i.jsxs)(et.R4, { as: "form", onSubmit: o, children: [c, p, _] })),
            (b[28] = _),
            (b[29] = o),
            (b[30] = p),
            (b[31] = y))
          : (y = b[31]),
        b[32] !== y || b[33] !== s
          ? ((x = (0, i.jsx)(ee.lG, {
              open: !0,
              onOpenChange: s,
              size: "wide",
              contentPosition: "scrollable",
              children: y,
            })),
            (b[32] = y),
            (b[33] = s),
            (b[34] = x))
          : (x = b[34]),
        x
      )
    }
    var el = a("uuN8"),
      en = a("ReGc"),
      eo = a("aepO")
    function ec(e) {
      let t,
        a,
        l,
        c,
        d,
        u,
        p = (0, r.c)(15),
        { metadata: m } = e,
        g = (0, o.A)(),
        { data: h } = (0, s.Ul)(en.a),
        f = h?.chatGptApiBaseUrl ?? h?.chatGptDesktopAuthOrigin,
        _ = null == f ? "" : new URL(f).hostname,
        y =
          "chatgpt-staging.com" === _ || _.endsWith(".chatgpt-staging.com")
            ? "https://chatgpt-staging.com"
            : "https://chat.openai.com",
        x =
          null != h && m?.auth?.type === "oauth" && m.action_id
            ? `${y}/aip/${encodeURIComponent(m.action_id)}/oauth/callback`
            : null
      p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(n.A, { id: "gptBuilder.actions.callbackUrl", defaultMessage: "Callback URL" })), (p[0] = t))
        : (t = p[0])
      let v = x ?? ""
      ;(p[1] !== g
        ? ((a = g.formatMessage({
            id: "gptBuilder.actions.callbackAfterSave",
            defaultMessage: "Available after the action is saved",
          })),
          (p[1] = g),
          (p[2] = a))
        : (a = p[2]),
        p[3] !== g
          ? ((l = g.formatMessage({ id: "gptBuilder.actions.copyCallbackUrl", defaultMessage: "Copy callback URL" })),
            (p[3] = g),
            (p[4] = l))
          : (l = p[4]))
      let b = null == x
      return (
        p[5] !== x ? ((c = (e) => null != x && (0, eo.lW)(x, e)), (p[5] = x), (p[6] = c)) : (c = p[6]),
        p[7] !== l || p[8] !== b || p[9] !== c
          ? ((d = (0, i.jsx)(el.i, { ariaLabel: l, isDisabled: b, onCopy: c })),
            (p[7] = l),
            (p[8] = b),
            (p[9] = c),
            (p[10] = d))
          : (d = p[10]),
        p[11] !== v || p[12] !== a || p[13] !== d
          ? ((u = (0, i.jsxs)("label", {
              className: "flex flex-col gap-1",
              children: [t, (0, i.jsx)(Y.pd, { readOnly: !0, value: v, placeholder: a, trailingControl: d })],
            })),
            (p[11] = v),
            (p[12] = a),
            (p[13] = d),
            (p[14] = u))
          : (u = p[14]),
        u
      )
    }
    var ed = a("bqtn")
    function eu(e) {
      let t,
        a,
        s,
        l,
        o = (0, r.c)(8),
        { onSelect: c, disabled: d } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(n.A, { ...eg.examples })), (o[0] = t))
          : (t = o[0]),
        o[1] !== d
          ? ((a = (0, i.jsx)(v.$, { type: "button", color: "secondary", disabled: d, children: t })),
            (o[1] = d),
            (o[2] = a))
          : (a = o[2]),
        o[3] !== c
          ? ((s = eh.map((e) =>
              (0, i.jsx)(
                ed.ms.Item,
                { onSelect: () => c(e.spec), children: (0, i.jsx)(n.A, { ...e.displayName }) },
                e.displayName.id,
              ),
            )),
            (o[3] = c),
            (o[4] = s))
          : (s = o[4]),
        o[5] !== a || o[6] !== s
          ? ((l = (0, i.jsx)(ed.Ab, { triggerButton: a, children: s })), (o[5] = a), (o[6] = s), (o[7] = l))
          : (l = o[7]),
        l
      )
    }
    let ep = {
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
      em = `openapi: 3.1.0
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
      eg = (0, Q.YK)({
        examples: { id: "gizmo.actions.examples", defaultMessage: "Examples" },
        weatherExampleTitle: { id: "gizmo.actions.weatherExampleTitle", defaultMessage: "Weather (JSON)" },
        petStoreExampleTitle: { id: "gizmo.actions.petStoreExampleTitle", defaultMessage: "Pet Store (YAML)" },
        blankExampleTitle: { id: "gizmo.actions.blankExampleTitle", defaultMessage: "Blank Template" },
      }),
      eh = [
        { displayName: eg.weatherExampleTitle, spec: JSON.stringify(ep, null, 2) },
        { displayName: eg.petStoreExampleTitle, spec: em },
        {
          displayName: eg.blankExampleTitle,
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
    function ef(e) {
      let t,
        a,
        s,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _,
        y,
        x,
        b,
        j,
        w = (0, r.c)(41),
        { disabled: A, onImport: S, onLoaded: k, onClose: M } = e,
        C = (0, o.A)(),
        B = (0, l.useId)(),
        [F, z] = (0, l.useState)(""),
        [P, N] = (0, l.useState)(!1),
        [T, E] = (0, l.useState)(!1),
        R = (0, l.useRef)(null)
      ;(w[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => R.current?.abort()), (a = []), (w[0] = t), (w[1] = a))
        : ((t = w[0]), (a = w[1])),
        (0, l.useEffect)(t, a),
        w[2] !== A || w[3] !== S || w[4] !== k || w[5] !== P || w[6] !== F
          ? ((s = (e) => {
              if ((e.preventDefault(), A || P)) return
              let t = new AbortController()
              ;((R.current = t),
                N(!0),
                E(!1),
                S(F, t.signal)
                  .then((e) => {
                    t.signal.aborted || k(e)
                  })
                  .catch(() => {
                    t.signal.aborted || E(!0)
                  })
                  .finally(() => {
                    t.signal.aborted || N(!1)
                  }))
            }),
            (w[2] = A),
            (w[3] = S),
            (w[4] = k),
            (w[5] = P),
            (w[6] = F),
            (w[7] = s))
          : (s = w[7]),
        w[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(n.A, { id: "gptBuilder.actions.schemaUrl", defaultMessage: "Schema URL" })), (w[8] = c))
          : (c = w[8]),
        w[9] !== B
          ? ((d = (0, i.jsx)("label", { htmlFor: B, className: "sr-only", children: c })), (w[9] = B), (w[10] = d))
          : (d = w[10]))
      let G = A || P
      return (
        w[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (e) => z(e.currentTarget.value)), (w[11] = u))
          : (u = w[11]),
        w[12] !== B || w[13] !== G || w[14] !== F
          ? ((p = (0, i.jsx)(Y.pd, {
              id: B,
              name: "schema-url",
              type: "url",
              required: !0,
              value: F,
              disabled: G,
              placeholder: "https://example.com/openapi.json",
              onChange: u,
            })),
            (w[12] = B),
            (w[13] = G),
            (w[14] = F),
            (w[15] = p))
          : (p = w[15]),
        w[16] !== A || w[17] !== P || w[18] !== F
          ? ((m = A || P || !F.trim()), (w[16] = A), (w[17] = P), (w[18] = F), (w[19] = m))
          : (m = w[19]),
        w[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(n.A, { id: "gptBuilder.actions.import", defaultMessage: "Import" })), (w[20] = g))
          : (g = w[20]),
        w[21] !== P || w[22] !== m
          ? ((h = (0, i.jsx)(v.$, { type: "submit", color: "secondary", disabled: m, loading: P, children: g })),
            (w[21] = P),
            (w[22] = m),
            (w[23] = h))
          : (h = w[23]),
        w[24] !== M
          ? ((f = () => {
              ;(R.current?.abort(), M())
            }),
            (w[24] = M),
            (w[25] = f))
          : (f = w[25]),
        w[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(n.A, { id: "gptBuilder.actions.importCancel", defaultMessage: "Cancel" })), (w[26] = _))
          : (_ = w[26]),
        w[27] !== f
          ? ((y = (0, i.jsx)(v.$, { type: "button", color: "secondary", onClick: f, children: _ })),
            (w[27] = f),
            (w[28] = y))
          : (y = w[28]),
        w[29] !== h || w[30] !== y
          ? ((x = (0, i.jsxs)("div", { className: "flex gap-2", children: [h, y] })),
            (w[29] = h),
            (w[30] = y),
            (w[31] = x))
          : (x = w[31]),
        w[32] !== T || w[33] !== C
          ? ((b =
              T &&
              (0, i.jsx)("p", {
                role: "alert",
                className: "text-error text-sm",
                children: C.formatMessage({
                  id: "gptBuilder.actions.importFailed",
                  defaultMessage: "Couldn\u2019t import this schema. Check the URL and try again",
                }),
              })),
            (w[32] = T),
            (w[33] = C),
            (w[34] = b))
          : (b = w[34]),
        w[35] !== x || w[36] !== b || w[37] !== s || w[38] !== d || w[39] !== p
          ? ((j = (0, i.jsxs)("form", { className: "flex flex-col gap-2", onSubmit: s, children: [d, p, x, b] })),
            (w[35] = x),
            (w[36] = b),
            (w[37] = s),
            (w[38] = d),
            (w[39] = p),
            (w[40] = j))
          : (j = w[40]),
        j
      )
    }
    function e_(e) {
      let t,
        a,
        s,
        o,
        c,
        d,
        u,
        p = (0, r.c)(18),
        { draft: m, savedActions: g, disabled: h, onEdit: f } = e
      return (
        p[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(X.X.Header, {
              title: (0, i.jsx)(n.A, { id: "gptBuilder.actions.title", defaultMessage: "Actions" }),
            })),
            (p[0] = t))
          : (t = p[0]),
        p[1] !== h || p[2] !== m.tools || p[3] !== f || p[4] !== g
          ? ((a = m.tools?.map((e, t) =>
              "plugins_prototype" === e.type
                ? (0, i.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        (0, i.jsx)(W.ic, {
                          label: e.metadata.domain ?? "",
                          control: (0, i.jsx)(v.$, {
                            type: "button",
                            color: "secondary",
                            disabled: h,
                            onClick: () => f(t, e.metadata),
                            children: (0, i.jsx)(n.A, { id: "gptBuilder.actions.edit", defaultMessage: "Edit" }),
                          }),
                        }),
                        e.metadata.auth?.type === "oauth" &&
                          (0, i.jsx)(W.ic, {
                            variant: "stacked",
                            label: null,
                            control: (0, i.jsx)(ec, { metadata: g.find((t) => t.domain === e.metadata.domain) }),
                          }),
                      ],
                    },
                    t,
                  )
                : null,
            )),
            (p[1] = h),
            (p[2] = m.tools),
            (p[3] = f),
            (p[4] = g),
            (p[5] = a))
          : (a = p[5]),
        p[6] !== a ? ((s = (0, i.jsx)(J.t, { children: a })), (p[6] = a), (p[7] = s)) : (s = p[7]),
        p[8] !== m.tools?.length || p[9] !== f
          ? ((o = () => f(m.tools?.length ?? 0, { raw_spec: "", auth: { type: "none" } })),
            (p[8] = m.tools?.length),
            (p[9] = f),
            (p[10] = o))
          : (o = p[10]),
        p[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, i.jsx)(n.A, { id: "gptBuilder.actions.add", defaultMessage: "Add action" })), (p[11] = c))
          : (c = p[11]),
        p[12] !== h || p[13] !== o
          ? ((d = (0, i.jsx)(X.X.Content, {
              children: (0, i.jsx)(v.$, { type: "button", color: "secondary", disabled: h, onClick: o, children: c }),
            })),
            (p[12] = h),
            (p[13] = o),
            (p[14] = d))
          : (d = p[14]),
        p[15] !== s || p[16] !== d
          ? ((u = (0, i.jsxs)(X.X, { children: [t, s, d] })), (p[15] = s), (p[16] = d), (p[17] = u))
          : (u = p[17]),
        u
      )
    }
    function ey(e) {
      let t,
        a,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _,
        y,
        x,
        b,
        j,
        w,
        S,
        k,
        M,
        C,
        B,
        F,
        z,
        P,
        T,
        E,
        R,
        G,
        O,
        q,
        I,
        U,
        $,
        L,
        H,
        Q,
        Z,
        ea,
        ei,
        er,
        el,
        en,
        eo,
        ed,
        ep,
        em,
        eg,
        eh,
        e_,
        ey,
        eS,
        ek,
        eM,
        eC,
        eB,
        eF,
        ez,
        eP,
        eN,
        eT,
        eE,
        eR,
        eG,
        eO,
        eq,
        eI,
        eU,
        e$,
        eD,
        eL = (0, r.c)(203),
        {
          metadata: eY,
          savedActions: eH,
          domains: eK,
          disabled: eX,
          isNew: eW,
          allowedDomains: eJ,
          onValidate: eV,
          onImport: eQ,
          onTest: eZ,
          onSave: e0,
          onDelete: e1,
          onClose: e2,
          onDirtyChange: e3,
          subscribeToSaves: e4,
        } = e
      eL[0] !== eH ? ((t = void 0 === eH ? [] : eH), (eL[0] = eH), (eL[1] = t)) : (t = eL[1])
      let e6 = t,
        e5 = (0, o.A)(),
        e8 = (0, l.useId)(),
        [e7, e9] = (0, l.useState)(eY),
        [te, tt] = (0, l.useState)(eY)
      ;(eL[2] !== e4
        ? ((a = () =>
            e4?.((e, t) => {
              ;(e9((a) => N(a, e, t)), tt((a) => N(a, e, t)))
            })),
          (c = [e4]),
          (eL[2] = e4),
          (eL[3] = a),
          (eL[4] = c))
        : ((a = eL[3]), (c = eL[4])),
        (0, l.useEffect)(a, c))
      let [ta, ti] = (0, l.useState)(!1),
        [tr, ts] = (0, l.useState)(!1),
        [tl, tn] = (0, l.useState)(!1)
      eL[5] === Symbol.for("react.memo_cache_sentinel") ? ((d = []), (eL[5] = d)) : (d = eL[5])
      let [to, tc] = (0, l.useState)(d),
        [td, tu] = (0, l.useState)(),
        [tp, tm] = (0, l.useState)(!1),
        [tg, th] = (0, l.useState)(!1),
        [tf, t_] = (0, l.useState)(null),
        [ty, tx] = (0, l.useState)(!1),
        [tv, tb] = (0, l.useState)(!1),
        tj = (0, l.useRef)(null),
        tw = (0, l.useRef)(null)
      eL[6] !== e8 || eL[7] !== eY || eL[8] !== eV
        ? ((u = () =>
            (0, s.RD)(A.u, () => ({
              queryKey: ["gpt-action-initial-validation", e8],
              queryFn: (e) => {
                let { signal: t } = e
                return eV(eY.raw_spec ?? "", t)
              },
              enabled: !!eY.raw_spec?.trim(),
              staleTime: 1 / 0,
              gcTime: 0,
              retry: !1,
            }))),
          (eL[6] = e8),
          (eL[7] = eY),
          (eL[8] = eV),
          (eL[9] = u))
        : (u = eL[9])
      let [tA] = (0, l.useState)(u),
        { data: tS, isFetching: tk, error: tM } = (0, s.Ul)(tA),
        tC = ta ? td : tS,
        tB = ta ? tl : tk
      ;(eL[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => () => {
            ;(null != tj.current && clearTimeout(tj.current), tw.current?.abort())
          }),
          (m = []),
          (eL[10] = p),
          (eL[11] = m))
        : ((p = eL[10]), (m = eL[11])),
        (0, l.useEffect)(p, m),
        eL[12] !== tr
          ? ((h = () => {
              if (tr)
                return (
                  window.addEventListener("beforeunload", ej),
                  () => window.removeEventListener("beforeunload", ej)
                )
            }),
            (g = [tr]),
            (eL[12] = tr),
            (eL[13] = g),
            (eL[14] = h))
          : ((g = eL[13]), (h = eL[14])),
        (0, l.useEffect)(h, g),
        eL[15] !== te || eL[16] !== e5
          ? ((f = (e, t) =>
              e.auth?.type === "oauth" &&
              (te.auth?.type !== "oauth" ||
                te.domain !== t ||
                te.auth.authorization_url !== e.auth.authorization_url ||
                e.oauth_client_id ||
                e.oauth_client_secret) &&
              (!e.oauth_client_id || !e.oauth_client_secret)
                ? e5.formatMessage(eA.oauthCredentialsRequired)
                : e.auth?.type !== "service_http" || (te.auth?.type === "service_http" && te.domain === t) || e.api_key
                  ? null
                  : e5.formatMessage(eA.apiKeyRequired)),
            (eL[15] = te),
            (eL[16] = e5),
            (eL[17] = f))
          : (f = eL[17]))
      let tF = f
      eL[18] !== te ||
      eL[19] !== tF ||
      eL[20] !== eX ||
      eL[21] !== eK ||
      eL[22] !== e5 ||
      eL[23] !== e7 ||
      eL[24] !== e3 ||
      eL[25] !== e0
        ? ((_ = (e) => {
            if (eX) return
            if ((tu(e), !e.success)) return void tc(e.errors)
            if (eK.includes(e.spec.root_domain))
              return void tc([e5.formatMessage(eA.duplicateDomain, { domain: e.spec.root_domain })])
            let t = tF(e7, e.spec.root_domain)
            if (null != t) return void tc([t])
            let a = {
              ...e7,
              domain: e.spec.root_domain,
              json_schema: e7.raw_spec === te.raw_spec ? e7.json_schema : void 0,
            }
            ;(null != e.known_auth &&
              null != e.known_privacy_policy &&
              e7.auth?.type !== "oauth" &&
              ((a.auth = e.known_auth), (a.privacy_policy_url = e.known_privacy_policy)),
              e9(a),
              tt(a),
              tc([]),
              ts(!1),
              e3(!1),
              e0(a))
          }),
          (eL[18] = te),
          (eL[19] = tF),
          (eL[20] = eX),
          (eL[21] = eK),
          (eL[22] = e5),
          (eL[23] = e7),
          (eL[24] = e3),
          (eL[25] = e0),
          (eL[26] = _))
        : (_ = eL[26])
      let tz = (0, V.K)(_)
      eL[27] !== tz || eL[28] !== e5 || eL[29] !== eV
        ? ((y = (e, t) =>
            eV(e.raw_spec ?? "", t.signal)
              .then((e) => {
                t.signal.aborted || tz(e)
              })
              .catch(() => {
                t.signal.aborted || tc([e5.formatMessage(eA.validationFailed)])
              })
              .finally(() => {
                t.signal.aborted || tn(!1)
              })),
          (eL[27] = tz),
          (eL[28] = e5),
          (eL[29] = eV),
          (eL[30] = y))
        : (y = eL[30])
      let tP = (0, V.K)(y)
      eL[31] !== eX || eL[32] !== e3 || eL[33] !== tP
        ? ((x = (e) => {
            if (eX) return
            ;(null != tj.current && clearTimeout(tj.current), tw.current?.abort())
            let t = new AbortController()
            ;((tw.current = t),
              e9(e),
              ti(!0),
              tu(void 0),
              tc([]),
              ts(!0),
              e3(!0),
              tn(!0),
              (tj.current = setTimeout(() => {
                tP(e, t)
              }, 1e3)))
          }),
          (eL[31] = eX),
          (eL[32] = e3),
          (eL[33] = tP),
          (eL[34] = x))
        : (x = eL[34])
      let tN = x
      eL[35] !== e2 || eL[36] !== e3
        ? ((b = () => {
            ;(tw.current?.abort(), e3(!1), e2())
          }),
          (eL[35] = e2),
          (eL[36] = e3),
          (eL[37] = b))
        : (b = eL[37])
      let tT = b,
        tE = to
      if (0 === tE.length && tC?.success === !1) tE = tC.errors
      else if (0 === tE.length && null != tM && !ta) {
        let e, t
        ;(eL[38] !== e5 ? ((e = e5.formatMessage(eA.validationFailed)), (eL[38] = e5), (eL[39] = e)) : (e = eL[39]),
          eL[40] !== e ? ((t = [e]), (eL[40] = e), (eL[41] = t)) : (t = eL[41]),
          (tE = t))
      }
      let tR = eA.none
      ;(e7.auth?.type === "oauth" ? (tR = eA.oauth) : e7.auth?.type === "service_http" && (tR = eA.apiKey),
        eL[42] !== e5 ? ((j = e5.formatMessage(eA.back)), (eL[42] = e5), (eL[43] = j)) : (j = eL[43]),
        eL[44] !== tT || eL[45] !== tr
          ? ((w = () => (tr ? t_("discard") : tT())), (eL[44] = tT), (eL[45] = tr), (eL[46] = w))
          : (w = eL[46]),
        eL[47] === Symbol.for("react.memo_cache_sentinel") ? ((S = (0, i.jsx)(D.tOb, {})), (eL[47] = S)) : (S = eL[47]),
        eL[48] !== j || eL[49] !== w
          ? ((k = (0, i.jsx)(v.$, {
              type: "button",
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              "aria-label": j,
              onClick: w,
              children: S,
            })),
            (eL[48] = j),
            (eL[49] = w),
            (eL[50] = k))
          : (k = eL[50]),
        eL[51] !== eW
          ? ((M = (0, i.jsx)("h2", {
              className: "text-sm font-medium select-none",
              children: eW
                ? (0, i.jsx)(n.A, { id: "gptBuilder.actions.addTitle", defaultMessage: "Add actions" })
                : (0, i.jsx)(n.A, { id: "gptBuilder.actions.editActionsTitle", defaultMessage: "Edit actions" }),
            })),
            (eL[51] = eW),
            (eL[52] = M))
          : (M = eL[52]))
      let tG = eX || (eW && null == te.domain)
      ;(eL[53] !== e5 ? ((C = e5.formatMessage(eA.delete)), (eL[53] = e5), (eL[54] = C)) : (C = eL[54]),
        eL[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = () => t_("delete")), (F = (0, i.jsx)(D.cSG, {})), (eL[55] = B), (eL[56] = F))
          : ((B = eL[55]), (F = eL[56])),
        eL[57] !== tG || eL[58] !== C
          ? ((z = (0, i.jsx)(v.$, {
              type: "button",
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              disabled: tG,
              "aria-label": C,
              onClick: B,
              children: F,
            })),
            (eL[57] = tG),
            (eL[58] = C),
            (eL[59] = z))
          : (z = eL[59]),
        eL[60] !== k || eL[61] !== M || eL[62] !== z
          ? ((P = (0, i.jsxs)("div", {
              className: "flex h-14 shrink-0 items-center justify-between px-4",
              children: [k, M, z],
            })),
            (eL[60] = k),
            (eL[61] = M),
            (eL[62] = z),
            (eL[63] = P))
          : (P = eL[63]),
        eL[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, i.jsx)("p", {
              className: "text-sm text-secondary",
              children: (0, i.jsx)(n.A, {
                id: "gptBuilder.actions.description",
                defaultMessage: "Let your GPT retrieve information or take actions outside of ChatGPT",
              }),
            })),
            (eL[64] = T))
          : (T = eL[64]),
        eL[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)(X.X.Header, { title: (0, i.jsx)(n.A, { ...eA.authentication }) })), (eL[65] = E))
          : (E = eL[65]),
        eL[66] !== tR ? ((R = (0, i.jsx)(n.A, { ...tR })), (eL[66] = tR), (eL[67] = R)) : (R = eL[67]),
        eL[68] !== e5 ? ((G = e5.formatMessage(eA.authentication)), (eL[68] = e5), (eL[69] = G)) : (G = eL[69]),
        eL[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = () => tm(!0)), (q = (0, i.jsx)(D.dqq, {})), (eL[70] = O), (eL[71] = q))
          : ((O = eL[70]), (q = eL[71])),
        eL[72] !== eX || eL[73] !== G
          ? ((I = (0, i.jsx)(v.$, {
              type: "button",
              color: "ghost",
              disabled: eX,
              "aria-label": G,
              onClick: O,
              children: q,
            })),
            (eL[72] = eX),
            (eL[73] = G),
            (eL[74] = I))
          : (I = eL[74]),
        eL[75] !== R || eL[76] !== I
          ? ((U = (0, i.jsx)(J.t, { children: (0, i.jsx)(W.ic, { label: R, control: I }) })),
            (eL[75] = R),
            (eL[76] = I),
            (eL[77] = U))
          : (U = eL[77]),
        eL[78] !== tr || eL[79] !== e7.auth?.type || eL[80] !== e7.domain || eL[81] !== e6
          ? (($ =
              e7.auth?.type === "oauth" &&
              (0, i.jsx)(ec, { metadata: tr ? void 0 : e6.find((e) => e.domain === e7.domain) })),
            (eL[78] = tr),
            (eL[79] = e7.auth?.type),
            (eL[80] = e7.domain),
            (eL[81] = e6),
            (eL[82] = $))
          : ($ = eL[82]),
        eL[83] !== U || eL[84] !== $
          ? ((L = (0, i.jsxs)(X.X, { children: [E, U, $] })), (eL[83] = U), (eL[84] = $), (eL[85] = L))
          : (L = eL[85]))
      let tO = `${e8}-schema`
      ;(eL[86] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = (0, i.jsx)(n.A, { id: "gptBuilder.actions.schemaTitle", defaultMessage: "Schema" })), (eL[86] = H))
        : (H = eL[86]),
        eL[87] !== tO
          ? ((Q = (0, i.jsx)(X.X.Header, { title: (0, i.jsx)("label", { htmlFor: tO, children: H }) })),
            (eL[87] = tO),
            (eL[88] = Q))
          : (Q = eL[88]))
      let tq = eX || null == eQ
      ;(eL[89] !== tg ? ((Z = () => th(!tg)), (eL[89] = tg), (eL[90] = Z)) : (Z = eL[90]),
        eL[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((ea = (0, i.jsx)(n.A, { id: "gptBuilder.actions.importUrl", defaultMessage: "Import from URL" })),
            (eL[91] = ea))
          : (ea = eL[91]),
        eL[92] !== tq || eL[93] !== Z
          ? ((ei = (0, i.jsx)(v.$, { type: "button", color: "secondary", disabled: tq, onClick: Z, children: ea })),
            (eL[92] = tq),
            (eL[93] = Z),
            (eL[94] = ei))
          : (ei = eL[94]),
        eL[95] !== tN || eL[96] !== e7
          ? ((er = (e) => tN({ ...e7, raw_spec: e })), (eL[95] = tN), (eL[96] = e7), (eL[97] = er))
          : (er = eL[97]),
        eL[98] !== eX || eL[99] !== er
          ? ((el = (0, i.jsx)(eu, { disabled: eX, onSelect: er })), (eL[98] = eX), (eL[99] = er), (eL[100] = el))
          : (el = eL[100]),
        eL[101] !== ei || eL[102] !== el
          ? ((en = (0, i.jsxs)("div", { className: "flex flex-wrap items-center gap-2", children: [ei, el] })),
            (eL[101] = ei),
            (eL[102] = el),
            (eL[103] = en))
          : (en = eL[103]),
        eL[104] !== tN || eL[105] !== eX || eL[106] !== e7 || eL[107] !== eQ || eL[108] !== tg
          ? ((eo =
              tg &&
              null != eQ &&
              (0, i.jsx)(ef, {
                disabled: eX,
                onImport: eQ,
                onClose: () => th(!1),
                onLoaded: (e) => {
                  ;(tN({ ...e7, raw_spec: ew(e) }), th(!1))
                },
              })),
            (eL[104] = tN),
            (eL[105] = eX),
            (eL[106] = e7),
            (eL[107] = eQ),
            (eL[108] = tg),
            (eL[109] = eo))
          : (eo = eL[109]),
        eL[110] !== e7.raw_spec
          ? ((ed =
              !e7.raw_spec &&
              (0, i.jsx)(v.z, {
                to: "/g/g-TYEliDU6A-actionsgpt",
                target: "_blank",
                color: "secondary",
                children: (0, i.jsx)(n.A, {
                  id: "gptBuilder.actions.actionsGpt",
                  defaultMessage: "Get help from ActionsGPT",
                }),
              })),
            (eL[110] = e7.raw_spec),
            (eL[111] = ed))
          : (ed = eL[111]))
      let tI = `${e8}-schema`,
        tU = e7.raw_spec ?? ""
      ;(eL[112] !== e5
        ? ((ep = e5.formatMessage(eA.schemaPlaceholder)), (eL[112] = e5), (eL[113] = ep))
        : (ep = eL[113]),
        eL[114] !== tN || eL[115] !== e7
          ? ((em = (e) => tN({ ...e7, raw_spec: e.currentTarget.value })),
            (eL[114] = tN),
            (eL[115] = e7),
            (eL[116] = em))
          : (em = eL[116]),
        eL[117] !== eX || eL[118] !== tI || eL[119] !== tU || eL[120] !== ep || eL[121] !== em
          ? ((eg = (0, i.jsx)(Y.TM, {
              id: tI,
              name: "schema",
              rows: 20,
              value: tU,
              dir: "ltr",
              spellCheck: !1,
              disabled: eX,
              placeholder: ep,
              onChange: em,
            })),
            (eL[117] = eX),
            (eL[118] = tI),
            (eL[119] = tU),
            (eL[120] = ep),
            (eL[121] = em),
            (eL[122] = eg))
          : (eg = eL[122]),
        eL[123] !== tB
          ? ((eh =
              tB &&
              (0, i.jsx)(n.A, { id: "gptBuilder.actions.validating", defaultMessage: "Validating schema\u2026" })),
            (eL[123] = tB),
            (eL[124] = eh))
          : (eh = eL[124]),
        eL[125] !== eh
          ? ((e_ = (0, i.jsx)("span", { role: "status", className: "text-sm text-secondary", children: eh })),
            (eL[125] = eh),
            (eL[126] = e_))
          : (e_ = eL[126]))
      let t$ = eX || !e7.raw_spec
      ;(eL[127] !== tN || eL[128] !== e7
        ? ((ey = () => tN({ ...e7, raw_spec: ew(e7.raw_spec ?? "") })), (eL[127] = tN), (eL[128] = e7), (eL[129] = ey))
        : (ey = eL[129]),
        eL[130] === Symbol.for("react.memo_cache_sentinel")
          ? ((eS = (0, i.jsx)(n.A, { id: "gptBuilder.actions.format", defaultMessage: "Format" })), (eL[130] = eS))
          : (eS = eL[130]),
        eL[131] !== t$ || eL[132] !== ey
          ? ((ek = (0, i.jsx)(v.$, { type: "button", color: "secondary", disabled: t$, onClick: ey, children: eS })),
            (eL[131] = t$),
            (eL[132] = ey),
            (eL[133] = ek))
          : (ek = eL[133]),
        eL[134] !== e_ || eL[135] !== ek
          ? ((eM = (0, i.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [e_, ek] })),
            (eL[134] = e_),
            (eL[135] = ek),
            (eL[136] = eM))
          : (eM = eL[136]),
        eL[137] !== tN || eL[138] !== eX || eL[139] !== e7 || eL[140] !== tE || eL[141] !== tB
          ? ((eC =
              tE.length > 0 &&
              (0, i.jsxs)("div", {
                role: "alert",
                className: "text-error text-sm",
                children: [
                  tE.map(eb),
                  (0, i.jsx)(v.$, {
                    type: "button",
                    color: "secondary",
                    disabled: eX || tB,
                    onClick: () => tN(e7),
                    children: (0, i.jsx)(n.A, { id: "gptBuilder.actions.retry", defaultMessage: "Try again" }),
                  }),
                ],
              })),
            (eL[137] = tN),
            (eL[138] = eX),
            (eL[139] = e7),
            (eL[140] = tE),
            (eL[141] = tB),
            (eL[142] = eC))
          : (eC = eL[142]),
        eL[143] !== tC ? ((eB = tC?.success && tC.warnings?.map(ev)), (eL[143] = tC), (eL[144] = eB)) : (eB = eL[144]),
        eL[145] !== Q ||
        eL[146] !== en ||
        eL[147] !== eo ||
        eL[148] !== ed ||
        eL[149] !== eg ||
        eL[150] !== eM ||
        eL[151] !== eC ||
        eL[152] !== eB
          ? ((eF = (0, i.jsxs)(X.X, { children: [Q, en, eo, ed, eg, eM, eC, eB] })),
            (eL[145] = Q),
            (eL[146] = en),
            (eL[147] = eo),
            (eL[148] = ed),
            (eL[149] = eg),
            (eL[150] = eM),
            (eL[151] = eC),
            (eL[152] = eB),
            (eL[153] = eF))
          : (eF = eL[153]),
        eL[154] !== tr || eL[155] !== eX || eL[156] !== eZ || eL[157] !== tC || eL[158] !== tv || eL[159] !== ty
          ? ((ez =
              tC?.success &&
              (0, i.jsxs)(X.X, {
                children: [
                  (0, i.jsx)(X.X.Header, {
                    title: (0, i.jsx)(n.A, { id: "gptBuilder.actions.available", defaultMessage: "Available actions" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, i.jsxs)("table", {
                      className: "w-full text-start text-sm",
                      children: [
                        (0, i.jsx)("thead", {
                          children: (0, i.jsxs)("tr", {
                            children: [
                              (0, i.jsx)("th", {
                                className: "py-2 text-start",
                                children: (0, i.jsx)(n.A, {
                                  id: "gptBuilder.actions.operationName",
                                  defaultMessage: "Name",
                                }),
                              }),
                              (0, i.jsx)("th", {
                                className: "py-2 text-start",
                                children: (0, i.jsx)(n.A, {
                                  id: "gptBuilder.actions.operationMethod",
                                  defaultMessage: "Method",
                                }),
                              }),
                              (0, i.jsx)("th", {
                                className: "py-2 text-start",
                                children: (0, i.jsx)(n.A, {
                                  id: "gptBuilder.actions.operationPath",
                                  defaultMessage: "Path",
                                }),
                              }),
                              (0, i.jsx)("th", {
                                children: (0, i.jsx)("span", {
                                  className: "sr-only",
                                  children: (0, i.jsx)(n.A, { ...eA.test }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("tbody", {
                          children: tC.spec.operations.map((e) =>
                            (0, i.jsxs)(
                              "tr",
                              {
                                children: [
                                  (0, i.jsx)("td", { className: "py-2 break-all", children: e.operationName }),
                                  (0, i.jsx)("td", { className: "px-2 py-2", children: e.method }),
                                  (0, i.jsx)("td", { className: "py-2 break-all", children: e.path }),
                                  (0, i.jsx)("td", {
                                    className: "py-2",
                                    children: (0, i.jsx)(v.$, {
                                      type: "button",
                                      color: "secondary",
                                      disabled: eX || tr || ty || null == eZ,
                                      onClick: () => {
                                        null != eZ &&
                                          (tx(!0),
                                          tb(!1),
                                          eZ(tC.spec.root_domain, e.operationName)
                                            .catch(() => tb(!0))
                                            .finally(() => tx(!1)))
                                      },
                                      children: (0, i.jsx)(n.A, { ...eA.test }),
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
                  tv &&
                    (0, i.jsx)("p", {
                      role: "alert",
                      className: "text-error",
                      children: (0, i.jsx)(n.A, {
                        id: "gptBuilder.actions.testFailed",
                        defaultMessage: "Couldn\u2019t start the action test. Try again",
                      }),
                    }),
                ],
              })),
            (eL[154] = tr),
            (eL[155] = eX),
            (eL[156] = eZ),
            (eL[157] = tC),
            (eL[158] = tv),
            (eL[159] = ty),
            (eL[160] = ez))
          : (ez = eL[160]),
        eL[161] !== eJ
          ? ((eP =
              null != eJ &&
              (eJ.length
                ? (0, i.jsxs)("details", {
                    children: [
                      (0, i.jsx)("summary", {
                        className: "cursor-interaction text-sm font-medium",
                        children: (0, i.jsx)(n.A, {
                          id: "gptBuilder.actions.allowedDomains",
                          defaultMessage: "Domains allowed by your workspace",
                        }),
                      }),
                      (0, i.jsx)("ul", { className: "list-disc ps-4", children: eJ.map(ex) }),
                    ],
                  })
                : (0, i.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(n.A, {
                      id: "gptBuilder.actions.noDomains",
                      defaultMessage: "No domains are allowed by your workspace\u2019s settings",
                    }),
                  }))),
            (eL[161] = eJ),
            (eL[162] = eP))
          : (eP = eL[162]))
      let tD = `${e8}-privacy`
      ;(eL[163] === Symbol.for("react.memo_cache_sentinel")
        ? ((eN = (0, i.jsx)(n.A, { id: "gptBuilder.actions.privacyTitle", defaultMessage: "Privacy policy" })),
          (eL[163] = eN))
        : (eN = eL[163]),
        eL[164] !== tD
          ? ((eT = (0, i.jsx)("label", { htmlFor: tD, children: eN })), (eL[164] = tD), (eL[165] = eT))
          : (eT = eL[165]),
        eL[166] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (0, i.jsx)(n.A, {
              id: "gptBuilder.actions.privacyHelp",
              defaultMessage: "Privacy policy is required for all public GPTs",
            })),
            (eL[166] = eE))
          : (eE = eL[166]),
        eL[167] !== eT
          ? ((eR = (0, i.jsx)(X.X.Header, { title: eT, subtitle: eE })), (eL[167] = eT), (eL[168] = eR))
          : (eR = eL[168]))
      let tL = `${e8}-privacy`,
        tY = e7.privacy_policy_url ?? ""
      return (
        eL[169] !== tN || eL[170] !== e7
          ? ((eG = (e) => tN({ ...e7, privacy_policy_url: e.currentTarget.value })),
            (eL[169] = tN),
            (eL[170] = e7),
            (eL[171] = eG))
          : (eG = eL[171]),
        eL[172] !== eX || eL[173] !== tL || eL[174] !== tY || eL[175] !== eG
          ? ((eO = (0, i.jsx)(Y.pd, {
              id: tL,
              name: "privacy",
              type: "url",
              value: tY,
              disabled: eX,
              placeholder: "https://app.example.com/privacy",
              onChange: eG,
            })),
            (eL[172] = eX),
            (eL[173] = tL),
            (eL[174] = tY),
            (eL[175] = eG),
            (eL[176] = eO))
          : (eO = eL[176]),
        eL[177] !== eR || eL[178] !== eO
          ? ((eq = (0, i.jsxs)(X.X, { children: [eR, eO] })), (eL[177] = eR), (eL[178] = eO), (eL[179] = eq))
          : (eq = eL[179]),
        eL[180] !== L || eL[181] !== eF || eL[182] !== ez || eL[183] !== eP || eL[184] !== eq
          ? ((eI = (0, i.jsx)("div", {
              className: "min-h-0 flex-1 overflow-y-auto p-panel",
              children: (0, i.jsxs)(K.P, { embedded: !0, fullWidth: !0, children: [T, L, eF, ez, eP, eq] }),
            })),
            (eL[180] = L),
            (eL[181] = eF),
            (eL[182] = ez),
            (eL[183] = eP),
            (eL[184] = eq),
            (eL[185] = eI))
          : (eI = eL[185]),
        eL[186] !== tN || eL[187] !== tF || eL[188] !== eX || eL[189] !== e7 || eL[190] !== tp || eL[191] !== e4
          ? ((eU =
              tp &&
              (0, i.jsx)(es, {
                metadata: e7,
                subscribeToSaves: e4,
                disabled: eX,
                onClose: () => tm(!1),
                onSave: (e) => {
                  let t = tF(e, e.domain)
                  return (null == t && tN(e), t)
                },
              })),
            (eL[186] = tN),
            (eL[187] = tF),
            (eL[188] = eX),
            (eL[189] = e7),
            (eL[190] = tp),
            (eL[191] = e4),
            (eL[192] = eU))
          : (eU = eL[192]),
        eL[193] !== tT || eL[194] !== tf || eL[195] !== eX || eL[196] !== e1
          ? ((e$ =
              null != tf &&
              (0, i.jsx)(ee.lG, {
                open: !0,
                onOpenChange: (e) => {
                  e || t_(null)
                },
                children: (0, i.jsxs)(et.R4, {
                  as: "form",
                  onSubmit: (e) => {
                    if ((e.preventDefault(), "delete" === tf)) {
                      if (eX) return
                      e1()
                    }
                    tT()
                  },
                  children: [
                    (0, i.jsx)(et.c7, {
                      title: (0, i.jsx)(ee.L3, {
                        children:
                          "delete" === tf
                            ? (0, i.jsx)(n.A, { ...eA.delete })
                            : (0, i.jsx)(n.A, {
                                id: "gptBuilder.actions.discardTitle",
                                defaultMessage: "Discard unsaved action changes?",
                              }),
                      }),
                    }),
                    (0, i.jsx)(et.OO, {
                      children: (0, i.jsx)("p", {
                        children:
                          "delete" === tf
                            ? (0, i.jsx)(n.A, {
                                id: "gptBuilder.actions.deleteDescription",
                                defaultMessage: "This removes the action from this GPT\u2019s draft",
                              })
                            : (0, i.jsx)(n.A, {
                                id: "gptBuilder.actions.discardDescription",
                                defaultMessage:
                                  "These changes haven\u2019t been saved. Stay here to fix or finish validating the schema",
                              }),
                      }),
                    }),
                    (0, i.jsxs)(et.Es, {
                      children: [
                        (0, i.jsx)(v.$, {
                          type: "button",
                          color: "secondary",
                          onClick: () => t_(null),
                          children: (0, i.jsx)(n.A, { id: "gptBuilder.actions.stay", defaultMessage: "Cancel" }),
                        }),
                        (0, i.jsx)(v.$, {
                          type: "submit",
                          disabled: "delete" === tf && eX,
                          children:
                            "delete" === tf
                              ? (0, i.jsx)(n.A, { ...eA.delete })
                              : (0, i.jsx)(n.A, {
                                  id: "gptBuilder.actions.discard",
                                  defaultMessage: "Discard changes",
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              })),
            (eL[193] = tT),
            (eL[194] = tf),
            (eL[195] = eX),
            (eL[196] = e1),
            (eL[197] = e$))
          : (e$ = eL[197]),
        eL[198] !== P || eL[199] !== eI || eL[200] !== eU || eL[201] !== e$
          ? ((eD = (0, i.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col", children: [P, eI, eU, e$] })),
            (eL[198] = P),
            (eL[199] = eI),
            (eL[200] = eU),
            (eL[201] = e$),
            (eL[202] = eD))
          : (eD = eL[202]),
        eD
      )
    }
    function ex(e) {
      return (0, i.jsx)("li", { children: e }, e)
    }
    function ev(e, t) {
      return (0, i.jsx)("p", { className: "text-sm text-secondary", children: e }, t)
    }
    function eb(e, t) {
      return (0, i.jsx)("p", { children: e }, t)
    }
    function ej(e) {
      e.preventDefault()
    }
    function ew(e) {
      try {
        return JSON.stringify(JSON.parse(e), null, 2)
      } catch {
        try {
          return Z.Ay.As(Z.Ay.qg(e), { lineWidth: 120, indent: 2 })
        } catch {
          return e
        }
      }
    }
    let eA = (0, Q.YK)({
      back: { id: "gptBuilder.actions.back", defaultMessage: "Back to Configure" },
      delete: { id: "gptBuilder.actions.delete", defaultMessage: "Delete action" },
      authentication: { id: "gptBuilder.actions.authentication", defaultMessage: "Authentication" },
      none: { id: "gptBuilder.actions.noAuth", defaultMessage: "None" },
      apiKey: { id: "gptBuilder.actions.apiKey", defaultMessage: "API key" },
      oauth: { id: "gptBuilder.actions.oauth", defaultMessage: "OAuth" },
      test: { id: "gptBuilder.actions.test", defaultMessage: "Test" },
      schemaPlaceholder: {
        id: "gptBuilder.actions.schemaPlaceholder",
        defaultMessage: "Enter your OpenAPI schema here",
      },
      duplicateDomain: {
        id: "gptBuilder.actions.duplicateDomain",
        defaultMessage: "An action for {domain} already exists",
      },
      oauthCredentialsRequired: {
        id: "gptBuilder.actions.oauthCredentialsRequired",
        defaultMessage:
          "Enter both the client ID and client secret when replacing OAuth credentials or changing the action\u2019s domain or token URL",
      },
      apiKeyRequired: {
        id: "gptBuilder.actions.apiKeyRequired",
        defaultMessage: "Enter an API key when setting up authentication or changing the action\u2019s domain",
      },
      validationFailed: {
        id: "gptBuilder.actions.validationFailed",
        defaultMessage: "Couldn\u2019t validate this action. Try again",
      },
    })
    var eS = a("DBCl"),
      ek = a("BQbE"),
      eM = a("FvYa"),
      eC = a("ygu7"),
      eB = a("EEop")
    let eF = (0, s.i1)(A.u, (e, { get: t }) => {
      let a = e.map((e) => ({ appId: e, pluginId: t(eC.b4, { appId: e }).data })),
        { data: i } = t(
          eB.hq,
          a.flatMap(({ pluginId: e }) => (null == e ? [] : [e])),
        )
      return new Map(
        a.map(({ appId: e, pluginId: t }) => [
          e,
          null == t ? null : i?.get(t)?.plugin.interface?.shortDescription?.trim() || null,
        ]),
      )
    })
    function ez(e) {
      let t,
        a,
        s,
        l,
        o,
        c = (0, r.c)(14),
        { tools: d, readOnly: u, disabled: p, onChange: m } = e,
        g = void 0 !== u && u,
        h = void 0 !== p && p
      if (c[0] !== d) {
        a = Symbol.for("react.early_return_sentinel")
        e: {
          let e = d?.filter(eT) ?? []
          if (0 === e.length) {
            a = null
            break e
          }
          t = Array.from(new Set(e.flatMap(eN)))
        }
        ;((c[0] = d), (c[1] = t), (c[2] = a))
      } else ((t = c[1]), (a = c[2]))
      if (a !== Symbol.for("react.early_return_sentinel")) return a
      let f = t
      c[3] !== h || c[4] !== m || c[5] !== g || c[6] !== d
        ? ((s = function (e) {
            if (!g && !h) {
              if (0 === e.length) return void m(d?.filter(eP))
              m(d?.map((t) => ("connector" === t.type ? { ...t, settings: { ...t.settings, action_ids: e } } : t)))
            }
          }),
          (c[3] = h),
          (c[4] = m),
          (c[5] = g),
          (c[6] = d),
          (c[7] = s))
        : (s = c[7])
      let _ = s
      return (
        c[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)(X.X.Header, {
              title: (0, i.jsx)(n.A, { id: "gptBuilder.apps", defaultMessage: "Apps" }),
            })),
            (c[8] = l))
          : (l = c[8]),
        c[9] !== f || c[10] !== h || c[11] !== g || c[12] !== _
          ? ((o = (0, i.jsxs)(X.X, {
              children: [
                l,
                (0, i.jsx)(J.t, {
                  children:
                    f.length > 0
                      ? (0, i.jsx)(eE, {
                          appIds: f,
                          disabled: h,
                          onRemove: g ? void 0 : (e) => _(f.filter((t) => t !== e)),
                        })
                      : (0, i.jsx)(W.ic, {
                          control: null,
                          label: (0, i.jsx)(n.A, {
                            id: "gptBuilder.allAppsAllowed",
                            defaultMessage: "All accessible apps allowed",
                          }),
                        }),
                }),
              ],
            })),
            (c[9] = f),
            (c[10] = h),
            (c[11] = g),
            (c[12] = _),
            (c[13] = o))
          : (o = c[13]),
        o
      )
    }
    function eP(e) {
      return "connector" !== e.type
    }
    function eN(e) {
      return e.settings?.action_ids ?? []
    }
    function eT(e) {
      return "connector" === e.type
    }
    function eE(e) {
      let t,
        a,
        l,
        c = (0, r.c)(17),
        { appIds: d, disabled: u, onRemove: p } = e,
        m = (0, o.A)()
      c[0] !== d ? ((t = { appIds: d, hostId: eS.iwv }), (c[0] = d), (c[1] = t)) : (t = c[1])
      let { data: g } = (0, ek.KA)(t),
        h = (0, s._U)(eF, d)
      if (c[2] !== d || c[3] !== g || c[4] !== u || c[5] !== m || c[6] !== p || c[7] !== h) {
        let e
        ;(c[9] !== g || c[10] !== u || c[11] !== m || c[12] !== p || c[13] !== h
          ? ((e = (e) => {
              let t = g?.find((t) => t.id === e)
              return (0, i.jsx)(
                W.ic,
                {
                  label: (0, i.jsx)("span", { className: "wrap-anywhere", children: t?.name ?? e }),
                  description: h.get(e),
                  control:
                    null == p
                      ? null
                      : (0, i.jsx)(v.$, {
                          color: "ghost",
                          size: "compact",
                          disabled: u,
                          "aria-label": m.formatMessage(
                            { id: "gptBuilder.removeApp", defaultMessage: "Remove {app}" },
                            { app: t?.name ?? e },
                          ),
                          onClick: () => p(e),
                          children: (0, i.jsx)(n.A, { id: "gptBuilder.removeAppAction", defaultMessage: "Remove" }),
                        }),
                  icon: (0, i.jsx)(eM.R, {
                    alt: "",
                    connectorId: e,
                    logoUrl: t?.iconUrl,
                    logoDarkUrl: t?.iconUrlDark,
                    fallback: (0, i.jsx)(D.wdY, {}),
                    size: 20,
                  }),
                },
                e,
              )
            }),
            (c[9] = g),
            (c[10] = u),
            (c[11] = m),
            (c[12] = p),
            (c[13] = h),
            (c[14] = e))
          : (e = c[14]),
          (a = d.map(e)),
          (c[2] = d),
          (c[3] = g),
          (c[4] = u),
          (c[5] = m),
          (c[6] = p),
          (c[7] = h),
          (c[8] = a))
      } else a = c[8]
      return (c[15] !== a ? ((l = (0, i.jsx)(i.Fragment, { children: a })), (c[15] = a), (c[16] = l)) : (l = c[16]), l)
    }
    function eR(e) {
      let t,
        a,
        s = (0, r.c)(3),
        { tools: l } = e
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(n.A, { id: "gptBuilder.appsCapability", defaultMessage: "Apps" })), (s[0] = t))
          : (t = s[0]),
        s[1] !== l
          ? ((a = (0, i.jsx)(W.ic, {
              label: t,
              control: (e) =>
                (0, i.jsx)("div", {
                  className: "relative",
                  children: (0, i.jsx)($.S, { ...e, checked: l?.some(eG) ?? !1, disabled: !0 }),
                }),
            })),
            (s[1] = l),
            (s[2] = a))
          : (a = s[2]),
        a
      )
    }
    function eG(e) {
      return "connector" === e.type
    }
    function eO(e) {
      let t = []
      return (
        e.display.name.length > 50 && t.push("name"),
        e.display.description.length > 300 && t.push("description"),
        e.instructions.length > 8e3 && t.push("instructions"),
        t
      )
    }
    var eq = a("w5lF"),
      eI = a("LH8k"),
      eU = a("eShZ")
    function e$(e) {
      let t,
        a = (0, r.c)(10),
        { error: s } = e
      if (s?.stage === "response") {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(n.A, {
                id: "gptBuilder.saveResponseError",
                defaultMessage:
                  "The last save succeeded, but the editor couldn't finish updating. Retry to continue saving your latest changes.",
              })),
              (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      let l = s?.cause
      if (l instanceof Error)
        switch (l.message) {
          case "gpt_builder_account_changed": {
            let e
            return (
              a[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(n.A, {
                    id: "gptBuilder.saveAccountChanged",
                    defaultMessage: "Switch back to this GPT's workspace to save your changes",
                  })),
                  (a[1] = e))
                : (e = a[1]),
              e
            )
          }
          case "disable_gpt_creation":
          case "disable_gpt_updates": {
            let e
            return (
              a[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(n.A, {
                    id: "gptBuilder.saveDisabled",
                    defaultMessage: "Saving GPTs is currently unavailable in this workspace",
                  })),
                  (a[2] = e))
                : (e = a[2]),
              e
            )
          }
          case "gpt_migrated_to_plugin": {
            let e
            return (
              a[3] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(n.A, {
                    id: "gptBuilder.saveMigrated",
                    defaultMessage: "This GPT has been migrated to a plugin. Open the plugin to make changes.",
                  })),
                  (a[3] = e))
                : (e = a[3]),
              e
            )
          }
          case "gpt_write_permission_required": {
            let e
            return (
              a[4] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(eD, {})), (a[4] = e)) : (e = a[4]),
              e
            )
          }
        }
      if (l instanceof eU.FetchError) {
        if ("network" === l.errorKind) {
          let e
          return (
            a[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(n.A, {
                  id: "gptBuilder.saveNetworkError",
                  defaultMessage: "Check your connection and retry saving your changes",
                })),
                (a[5] = e))
              : (e = a[5]),
            e
          )
        }
        if (401 === l.status) {
          let e
          return (
            a[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(n.A, {
                  id: "gptBuilder.saveSignInError",
                  defaultMessage: "Sign in again to save your changes",
                })),
                (a[6] = e))
              : (e = a[6]),
            e
          )
        }
        if (429 === l.status) {
          let e
          return (
            a[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(n.A, {
                  id: "gptBuilder.saveRateLimitError",
                  defaultMessage: "Too many save requests. Wait a moment and retry.",
                })),
                (a[7] = e))
              : (e = a[7]),
            e
          )
        }
        if (l.status >= 400 && l.status < 500) {
          let e = l.diagnosticError instanceof eq.rX ? l.diagnosticError.message : (0, eI.d)(l)?.message
          if (e?.trim()) return e
          if (403 === l.status) {
            let e
            return (
              a[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(eD, {})), (a[8] = e)) : (e = a[8]),
              e
            )
          }
        }
      }
      return (
        a[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(n.A, { id: "gptBuilder.saveError", defaultMessage: "Your changes could not be saved" })),
            (a[9] = t))
          : (t = a[9]),
        t
      )
    }
    function eD() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(n.A, {
              id: "gptBuilder.savePermissionError",
              defaultMessage: "You don't have permission to edit this GPT. Ask its owner for edit access.",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function eL(e) {
      let t,
        a,
        s,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        f,
        _,
        y,
        b,
        j,
        w,
        A,
        S,
        k,
        M,
        C,
        B,
        F,
        z,
        P,
        N,
        T,
        E,
        R,
        G,
        O,
        $,
        Q,
        Z,
        ee,
        et,
        ea,
        ei = (0, r.c)(123),
        {
          draft: er,
          onChange: es,
          conversation: el,
          preview: en,
          onPublish: eo,
          onShare: ec,
          isBusy: ed,
          saveState: eu,
          saveError: ep,
          onRetrySave: em,
          magicCreateDisabled: eg,
          title: eh,
          avatarUrl: ef,
          isPublished: ex,
          readOnly: ev,
          hasSavedDraft: eb,
          browsingAllowed: ej,
          onBack: ew,
          onValidateAction: eA,
          onImportAction: eS,
          onTestAction: ek,
          subscribeToSaves: eM,
          allowedActionDomains: eC,
          savedActions: eB,
          onUploadFiles: eF,
          onCancelUploadFiles: eP,
          isUploadingFiles: eN,
          maxKnowledgeFiles: eT,
          onUploadProfilePicture: eE,
          isUploadingProfilePicture: eG,
          defaultTab: eq,
        } = e,
        eI = void 0 !== ex && ex,
        eU = void 0 !== ev && ev,
        eD = void 0 === eb || eb
      ei[0] !== eB ? ((t = void 0 === eB ? [] : eB), (ei[0] = eB), (ei[1] = t)) : (t = ei[1])
      let eL = t,
        eK = void 0 !== eN && eN,
        eX = void 0 === eq ? "create" : eq,
        eW = (0, o.A)(),
        eJ = ed || eU,
        eV = (0, l.useId)(),
        eQ = (0, l.useRef)(null),
        eZ = (0, l.useRef)(null),
        [e0, e1] = (0, l.useState)(null),
        [e2, e3] = (0, l.useState)(!1)
      ei[2] !== eJ || ei[3] !== er || ei[4] !== e0 || ei[5] !== es
        ? ((a = (e) => {
            if (eJ || null == e0) return
            let t = [...(er.tools ?? [])]
            ;((t[e0.index] = { type: "plugins_prototype", metadata: e }), es({ ...er, tools: t }))
          }),
          (ei[2] = eJ),
          (ei[3] = er),
          (ei[4] = e0),
          (ei[5] = es),
          (ei[6] = a))
        : (a = ei[6])
      let e4 = (0, V.K)(a),
        e6 = eO(er),
        e5 = e6.length > 0,
        e8 = null != eT && er.files.length >= eT,
        [e7, e9] = (0, l.useState)(eg || "configure" === eX ? "configure" : "create"),
        [te, tt] = (0, l.useState)("preview" === eX)
      ei[7] !== eg || ei[8] !== te
        ? ((s = (e) => {
            e.contentRect.width > 0 && te && (tt(!1), e9(eg ? "configure" : "create"))
          }),
          (ei[7] = eg),
          (ei[8] = te),
          (ei[9] = s))
        : (s = ei[9])
      let ta = (0, H.wY)(s),
        ti = eg ? "configure" : e7,
        tr = eh ?? er.display.name
      ;(ei[10] !== eg
        ? ((c = eg
            ? []
            : [{ key: "create", name: (0, i.jsx)(n.A, { id: "gptBuilder.createTab", defaultMessage: "Create" }) }]),
          (ei[10] = eg),
          (ei[11] = c))
        : (c = ei[11]),
        ei[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = {
              key: "configure",
              name: (0, i.jsx)(n.A, { id: "gptBuilder.configureTab", defaultMessage: "Configure" }),
            }),
            (ei[12] = d))
          : (d = ei[12]),
        ei[13] !== c ? ((u = [...c, d]), (ei[13] = c), (ei[14] = u)) : (u = ei[14]))
      let ts = u
      ei[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, i.jsx)(n.A, { id: "gptBuilder.preview", defaultMessage: "Preview" })), (ei[15] = p))
        : (p = ei[15])
      let tl = p
      ei[16] !== eW
        ? ((m = eW.formatMessage({ id: "gptBuilder.tabsLabel", defaultMessage: "GPT editor" })),
          (ei[16] = eW),
          (ei[17] = m))
        : (m = ei[17])
      let tn = m
      ei[18] !== e2 || ei[19] !== eW || ei[20] !== ew
        ? ((g =
            null != ew &&
            (0, i.jsx)(v.$, {
              color: "ghost",
              size: "toolbar",
              uniform: !0,
              disabled: e2,
              onClick: ew,
              "aria-label": eW.formatMessage({ id: "gptBuilder.back", defaultMessage: "Back to GPTs" }),
              children: (0, i.jsx)(D.tOb, {}),
            })),
          (ei[18] = e2),
          (ei[19] = eW),
          (ei[20] = ew),
          (ei[21] = g))
        : (g = ei[21])
      let to = ef ?? er.display.profile_picture_url ?? null
      ;(ei[22] !== tr || ei[23] !== to
        ? ((h = (0, i.jsx)(U.S, { presentation: "list-avatar", customGpt: { id: "draft", name: tr, iconUrl: to } })),
          (ei[22] = tr),
          (ei[23] = to),
          (ei[24] = h))
        : (h = ei[24]),
        ei[25] !== tr
          ? ((f = tr || (0, i.jsx)(n.A, { id: "gptBuilder.newGpt", defaultMessage: "New GPT" })),
            (ei[25] = tr),
            (ei[26] = f))
          : (f = ei[26]),
        ei[27] !== f
          ? ((_ = (0, i.jsx)("span", { className: "truncate text-sm font-medium", children: f })),
            (ei[27] = f),
            (ei[28] = _))
          : (_ = ei[28]),
        ei[29] !== e2 || ei[30] !== eD || ei[31] !== e5 || ei[32] !== eu
          ? ((y =
              "saved" === eu &&
              eD &&
              !e5 &&
              !e2 &&
              (0, i.jsx)(n.A, { id: "gptBuilder.draftSaved", defaultMessage: "Draft saved" })),
            (ei[29] = e2),
            (ei[30] = eD),
            (ei[31] = e5),
            (ei[32] = eu),
            (ei[33] = y))
          : (y = ei[33]),
        ei[34] !== e2 || ei[35] !== eD || ei[36] !== e5 || ei[37] !== eu
          ? ((b =
              "saved" === eu &&
              !eD &&
              !e5 &&
              !e2 &&
              (0, i.jsx)(n.A, { id: "gptBuilder.draft", defaultMessage: "Draft" })),
            (ei[34] = e2),
            (ei[35] = eD),
            (ei[36] = e5),
            (ei[37] = eu),
            (ei[38] = b))
          : (b = ei[38]),
        ei[39] !== e2 || ei[40] !== e5 || ei[41] !== eu
          ? ((j =
              "saving" === eu &&
              !e5 &&
              !e2 &&
              (0, i.jsx)(n.A, { id: "gptBuilder.saving", defaultMessage: "Saving\u2026" })),
            (ei[39] = e2),
            (ei[40] = e5),
            (ei[41] = eu),
            (ei[42] = j))
          : (j = ei[42]),
        ei[43] !== e2 || ei[44] !== e5 || ei[45] !== eu
          ? ((w =
              ("error" === eu || e5 || e2) &&
              (0, i.jsx)(n.A, { id: "gptBuilder.unsaved", defaultMessage: "Unsaved changes" })),
            (ei[43] = e2),
            (ei[44] = e5),
            (ei[45] = eu),
            (ei[46] = w))
          : (w = ei[46]),
        ei[47] !== y || ei[48] !== b || ei[49] !== j || ei[50] !== w
          ? ((A = (0, i.jsxs)("span", {
              className: "text-xs text-secondary select-none",
              role: "status",
              children: [y, b, j, w],
            })),
            (ei[47] = y),
            (ei[48] = b),
            (ei[49] = j),
            (ei[50] = w),
            (ei[51] = A))
          : (A = ei[51]),
        ei[52] !== _ || ei[53] !== A
          ? ((S = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col", children: [_, A] })),
            (ei[52] = _),
            (ei[53] = A),
            (ei[54] = S))
          : (S = ei[54]),
        ei[55] !== g || ei[56] !== h || ei[57] !== S
          ? ((k = (0, i.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [g, h, S] })),
            (ei[55] = g),
            (ei[56] = h),
            (ei[57] = S),
            (ei[58] = k))
          : (k = ei[58]),
        ei[59] !== e2 ||
        ei[60] !== er.display ||
        ei[61] !== e5 ||
        ei[62] !== ed ||
        ei[63] !== eI ||
        ei[64] !== eo ||
        ei[65] !== ec ||
        ei[66] !== eU ||
        ei[67] !== eu
          ? ((M = (0, i.jsx)(I.G.HeaderToolbar.Actions, {
              children: eU
                ? (0, i.jsx)(n.A, { id: "gptBuilder.readOnly", defaultMessage: "Read only" })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      eI &&
                        null != ec &&
                        (0, i.jsx)(v.$, {
                          color: "secondary",
                          disabled: ed || e2,
                          onClick: ec,
                          children: (0, i.jsx)(n.A, { id: "gptBuilder.share", defaultMessage: "Share" }),
                        }),
                      null == ec &&
                        (0, i.jsx)("span", {
                          className: "text-sm text-secondary select-none",
                          children: eI
                            ? (0, i.jsx)(n.A, {
                                id: "gptBuilder.sharingPreserved",
                                defaultMessage: "Sharing unchanged",
                              })
                            : (0, i.jsx)(n.A, { id: "gptBuilder.privateVisibility", defaultMessage: "Only you" }),
                        }),
                      (0, i.jsx)(v.$, {
                        disabled: ed || "saved" !== eu || e5 || e2 || !er.display.name.trim(),
                        loading: ed,
                        onClick: eo,
                        children: eI
                          ? (0, i.jsx)(n.A, { id: "gptBuilder.update", defaultMessage: "Update" })
                          : (0, i.jsx)(n.A, { id: "gptBuilder.publish", defaultMessage: "Create" }),
                      }),
                    ],
                  }),
            })),
            (ei[59] = e2),
            (ei[60] = er.display),
            (ei[61] = e5),
            (ei[62] = ed),
            (ei[63] = eI),
            (ei[64] = eo),
            (ei[65] = ec),
            (ei[66] = eU),
            (ei[67] = eu),
            (ei[68] = M))
          : (M = ei[68]),
        ei[69] !== k || ei[70] !== M
          ? ((C = (0, i.jsx)(I.G.Header, { children: (0, i.jsxs)(I.G.HeaderToolbar, { children: [k, M] }) })),
            (ei[69] = k),
            (ei[70] = M),
            (ei[71] = C))
          : (C = ei[71]),
        ei[72] !== e5 || ei[73] !== ed || ei[74] !== em || ei[75] !== ep || ei[76] !== eu
          ? ((B =
              ("error" === eu || e5) &&
              (0, i.jsx)("div", {
                className: "p-panel",
                children: (0, i.jsx)(x.l, {
                  type: "error",
                  role: "alert",
                  content: e5
                    ? (0, i.jsx)(n.A, {
                        id: "gptBuilder.invalidFields",
                        defaultMessage: "Shorten the highlighted fields in Configure before saving",
                      })
                    : (0, i.jsx)(e$, { error: ep }),
                  primaryCtaText: (0, i.jsx)(n.A, { id: "gptBuilder.retrySave", defaultMessage: "Retry" }),
                  isPrimaryCtaDisabled: e5 || ed,
                  onPrimaryCtaClick: em,
                }),
              })),
            (ei[72] = e5),
            (ei[73] = ed),
            (ei[74] = em),
            (ei[75] = ep),
            (ei[76] = eu),
            (ei[77] = B))
          : (B = ei[77]),
        ei[78] !== e0 || ei[79] !== ts
          ? ((F = ts.filter((e) => null == e0 || "configure" === e.key)), (ei[78] = e0), (ei[79] = ts), (ei[80] = F))
          : (F = ei[80]),
        ei[81] !== eV || ei[82] !== F
          ? ((z = F.map((e) => ({ ...e, panelId: `${eV}-${e.key}` }))), (ei[81] = eV), (ei[82] = F), (ei[83] = z))
          : (z = ei[83]))
      let tc = `${eV}-preview`
      ;(ei[84] !== tl || ei[85] !== tc
        ? ((P = { key: "preview", name: tl, panelId: tc }), (ei[84] = tl), (ei[85] = tc), (ei[86] = P))
        : (P = ei[86]),
        ei[87] !== z || ei[88] !== P ? ((N = [...z, P]), (ei[87] = z), (ei[88] = P), (ei[89] = N)) : (N = ei[89]))
      let td = te ? "preview" : ti
      ;(ei[90] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = (e) => {
            ;(tt("preview" === e), "preview" !== e && e9(e))
          }),
          (ei[90] = T))
        : (T = ei[90]),
        ei[91] !== N || ei[92] !== td || ei[93] !== tn
          ? ((E = (0, i.jsx)("div", {
              className: "shrink-0 p-2 @3xl/gpt-builder:hidden",
              children: (0, i.jsx)(L.t, {
                fill: !0,
                tabs: N,
                selectedKey: td,
                onSelect: T,
                variant: "inset",
                ariaLabel: tn,
              }),
            })),
            (ei[91] = N),
            (ei[92] = td),
            (ei[93] = tn),
            (ei[94] = E))
          : (E = ei[94]))
      let tu = te ? "hidden" : "flex"
      ei[95] !== tu
        ? ((R = (0, q.A)("min-h-0 min-w-0 flex-1 flex-col @3xl/gpt-builder:flex", tu)), (ei[95] = tu), (ei[96] = R))
        : (R = ei[96])
      let tp =
        null != e0 && null != eA
          ? (0, i.jsx)(
              ey,
              {
                metadata: e0.metadata,
                subscribeToSaves: eM,
                savedActions: "saved" === eu ? eL : [],
                isNew: e0.isNew,
                domains:
                  er.tools?.flatMap((e, t) =>
                    "plugins_prototype" === e.type && t !== e0.index ? [e.metadata.domain] : [],
                  ) ?? [],
                disabled: eJ,
                allowedDomains: eC,
                onValidate: eA,
                onImport: eS,
                onTest:
                  null == ek
                    ? void 0
                    : async (e, t) => {
                        ;(tt(!0), await ek(e, t))
                      },
                onSave: e4,
                onDirtyChange: e3,
                onClose: () => e1(null),
                onDelete: () => {
                  eJ || es({ ...er, tools: er.tools?.filter((e, t) => t !== e0.index) })
                },
              },
              e0.index,
            )
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: "hidden h-14 shrink-0 items-center justify-center px-4 @3xl/gpt-builder:flex",
                  children: (0, i.jsx)(L.t, {
                    className: "w-full max-w-md",
                    fill: !0,
                    tabs: ts,
                    selectedKey: ti,
                    onSelect: e9,
                    variant: "inset",
                    ariaLabel: tn,
                  }),
                }),
                (0, i.jsx)("div", {
                  className: (0, q.A)("min-h-0 flex-1 flex-col", "create" === ti ? "flex" : "hidden"),
                  id: `${eV}-create`,
                  role: "tabpanel",
                  "aria-label": eW.formatMessage({ id: "gptBuilder.createPanel", defaultMessage: "Create your GPT" }),
                  children: el,
                }),
                (0, i.jsx)("div", {
                  className: (0, q.A)(
                    "min-h-0 flex-1 overflow-y-auto p-panel",
                    "configure" === ti ? "block" : "hidden",
                  ),
                  id: `${eV}-configure`,
                  role: "tabpanel",
                  "aria-label": eW.formatMessage({
                    id: "gptBuilder.configurePanel",
                    defaultMessage: "Configure your GPT",
                  }),
                  children: (0, i.jsxs)(K.P, {
                    embedded: !0,
                    fullWidth: !0,
                    children: [
                      (0, i.jsx)(X.X, {
                        children: (0, i.jsxs)(J.t, {
                          children: [
                            (0, i.jsx)(W.ic, {
                              label: (0, i.jsx)(n.A, {
                                id: "gptBuilder.profilePicture",
                                defaultMessage: "Profile picture",
                              }),
                              control: (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)("input", {
                                    ref: eZ,
                                    type: "file",
                                    accept: "image/png,image/jpeg,image/webp,image/gif",
                                    className: "hidden",
                                    disabled: eJ || null == eE,
                                    onChange: (e) => {
                                      let t = e.target.files?.[0]
                                      ;((e.target.value = ""), null == t || eJ || eE?.(t))
                                    },
                                  }),
                                  (0, i.jsx)(v.$, {
                                    color: "secondary",
                                    disabled: eJ || null == eE,
                                    loading: void 0 !== eG && eG,
                                    onClick: () => eZ.current?.click(),
                                    children: (0, i.jsx)(n.A, {
                                      id: "gptBuilder.uploadProfilePicture",
                                      defaultMessage: "Upload picture",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(W.ic, {
                              variant: "stacked",
                              label: (0, i.jsx)(n.A, { id: "gptBuilder.name", defaultMessage: "Name" }),
                              description:
                                e6.includes("name") &&
                                (0, i.jsx)("span", {
                                  className: "text-danger",
                                  role: "alert",
                                  children: (0, i.jsx)(n.A, {
                                    id: "gptBuilder.nameTooLong",
                                    defaultMessage: "Name must be {limit} characters or fewer",
                                    values: { limit: 50 },
                                  }),
                                }),
                              control: (e) =>
                                (0, i.jsx)(Y.pd, {
                                  ...e,
                                  value: er.display.name,
                                  disabled: eJ,
                                  "aria-invalid": e6.includes("name"),
                                  onChange: (e) => es({ ...er, display: { ...er.display, name: e.target.value } }),
                                }),
                            }),
                            (0, i.jsx)(W.ic, {
                              variant: "stacked",
                              label: (0, i.jsx)(n.A, { id: "gptBuilder.description", defaultMessage: "Description" }),
                              description:
                                e6.includes("description") &&
                                (0, i.jsx)("span", {
                                  className: "text-danger",
                                  role: "alert",
                                  children: (0, i.jsx)(n.A, {
                                    id: "gptBuilder.descriptionTooLong",
                                    defaultMessage: "Description must be {limit} characters or fewer",
                                    values: { limit: 300 },
                                  }),
                                }),
                              control: (e) =>
                                (0, i.jsx)(Y.TM, {
                                  ...e,
                                  rows: 2,
                                  value: er.display.description,
                                  disabled: eJ,
                                  "aria-invalid": e6.includes("description"),
                                  onChange: (e) =>
                                    es({ ...er, display: { ...er.display, description: e.target.value } }),
                                }),
                            }),
                            (0, i.jsx)(W.ic, {
                              variant: "stacked",
                              label: (0, i.jsx)(n.A, { id: "gptBuilder.instructions", defaultMessage: "Instructions" }),
                              description:
                                e6.includes("instructions") &&
                                (0, i.jsx)("span", {
                                  className: "text-danger",
                                  role: "alert",
                                  children: (0, i.jsx)(n.A, {
                                    id: "gptBuilder.instructionsTooLong",
                                    defaultMessage: "Instructions must be {limit} characters or fewer",
                                    values: { limit: 8e3 },
                                  }),
                                }),
                              control: (e) =>
                                (0, i.jsx)(Y.TM, {
                                  ...e,
                                  rows: 8,
                                  value: er.instructions,
                                  disabled: eJ,
                                  "aria-invalid": e6.includes("instructions"),
                                  onChange: (e) => es({ ...er, instructions: e.target.value }),
                                }),
                            }),
                            (0, i.jsx)(W.ic, {
                              variant: "stacked",
                              label: (0, i.jsx)(n.A, {
                                id: "gptBuilder.starters",
                                defaultMessage: "Conversation starters",
                              }),
                              description: (0, i.jsx)(n.A, {
                                id: "gptBuilder.startersDescription",
                                defaultMessage: "Enter one suggestion per line",
                              }),
                              control: (e) =>
                                (0, i.jsx)(Y.TM, {
                                  ...e,
                                  rows: 4,
                                  value: er.display.prompt_starters?.join("\n") ?? "",
                                  disabled: eJ,
                                  onChange: (e) =>
                                    es({
                                      ...er,
                                      display: { ...er.display, prompt_starters: e.target.value.split("\n") },
                                    }),
                                }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsxs)(X.X, {
                        children: [
                          (0, i.jsx)(X.X.Header, {
                            title: (0, i.jsx)(n.A, { id: "gptBuilder.knowledge", defaultMessage: "Knowledge" }),
                            subtitle: (0, i.jsx)(n.A, {
                              id: "gptBuilder.knowledgeDescription",
                              defaultMessage:
                                "Conversations with your GPT can reveal part or all of the files uploaded",
                            }),
                          }),
                          (0, i.jsxs)(X.X.Content, {
                            children: [
                              er.files.length > 0 &&
                                (0, i.jsx)(J.t, {
                                  children: er.files.map((e) =>
                                    (0, i.jsx)(
                                      W.ic,
                                      {
                                        label: e.name,
                                        control: (0, i.jsx)(v.$, {
                                          color: "ghost",
                                          size: "compact",
                                          uniform: !0,
                                          disabled: eJ,
                                          "aria-label": eW.formatMessage(
                                            { id: "gptBuilder.removeFile", defaultMessage: "Remove {name}" },
                                            { name: e.name },
                                          ),
                                          onClick: () =>
                                            es({ ...er, files: er.files.filter((t) => t.file_id !== e.file_id) }),
                                          children: (0, i.jsx)(D.cSG, {}),
                                        }),
                                      },
                                      e.file_id,
                                    ),
                                  ),
                                }),
                              null != eF &&
                                (0, i.jsxs)("div", {
                                  className: "flex flex-col items-start gap-2",
                                  children: [
                                    (0, i.jsx)("input", {
                                      ref: eQ,
                                      className: "hidden",
                                      type: "file",
                                      multiple: !0,
                                      onChange: (e) => {
                                        let t = Array.from(e.currentTarget.files ?? [])
                                        ;((e.currentTarget.value = ""), t.length > 0 && eF(t))
                                      },
                                    }),
                                    (0, i.jsx)(v.$, {
                                      color: "secondary",
                                      disabled: eJ || eK || e8 || e5,
                                      loading: eK,
                                      onClick: () => eQ.current?.click(),
                                      children: (0, i.jsx)(n.A, {
                                        id: "gptBuilder.uploadFiles",
                                        defaultMessage: "Upload files",
                                      }),
                                    }),
                                    eK &&
                                      null != eP &&
                                      (0, i.jsx)(v.$, {
                                        color: "secondary",
                                        onClick: eP,
                                        children: (0, i.jsx)(n.A, {
                                          id: "gptBuilder.cancelUploadFiles",
                                          defaultMessage: "Cancel uploads",
                                        }),
                                      }),
                                    e8 &&
                                      (0, i.jsx)("p", {
                                        className: "text-sm text-secondary",
                                        children: (0, i.jsx)(n.A, {
                                          id: "gptBuilder.knowledgeLimitReached",
                                          defaultMessage:
                                            "You\u2019ve reached the {limit} file limit. Remove a file to upload another",
                                          values: { limit: eT },
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)(X.X, {
                        children: [
                          (0, i.jsx)(X.X.Header, {
                            title: (0, i.jsx)(n.A, { id: "gptBuilder.capabilities", defaultMessage: "Capabilities" }),
                          }),
                          (0, i.jsxs)(J.t, {
                            children: [
                              (0, i.jsx)(eH, {
                                draft: er,
                                onChange: es,
                                type: "browser",
                                disabled: eJ || !(void 0 === ej || ej),
                                label: (0, i.jsx)(n.A, { id: "gptBuilder.webSearch", defaultMessage: "Web search" }),
                              }),
                              (0, i.jsx)(eR, { tools: er.tools }),
                              (0, i.jsx)(eH, {
                                draft: er,
                                onChange: es,
                                type: "image_gen",
                                disabled: eJ,
                                label: (0, i.jsx)(n.A, {
                                  id: "gptBuilder.imageGeneration",
                                  defaultMessage: "Image generation",
                                }),
                              }),
                              (0, i.jsx)(eH, {
                                draft: er,
                                onChange: es,
                                type: "python",
                                disabled: eJ,
                                label: (0, i.jsx)(n.A, {
                                  id: "gptBuilder.codeInterpreter",
                                  defaultMessage: "Code interpreter and data analysis",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)(ez, {
                        tools: er.tools,
                        readOnly: eU,
                        disabled: eJ,
                        onChange: (e) => es({ ...er, tools: e }),
                      }),
                      !er.tools?.some(eY) &&
                        (0, i.jsx)(e_, {
                          savedActions: "saved" === eu ? eL : [],
                          draft: er,
                          disabled: eJ || null == eA,
                          onEdit: (e, t) => e1({ index: e, metadata: t, isNew: e >= (er.tools?.length ?? 0) }),
                        }),
                    ],
                  }),
                }),
              ],
            })
      ei[97] !== R || ei[98] !== tp
        ? ((G = (0, i.jsx)("div", { className: R, children: tp })), (ei[97] = R), (ei[98] = tp), (ei[99] = G))
        : (G = ei[99])
      let tm = te ? "flex" : "hidden"
      ei[100] !== tm
        ? ((O = (0, q.A)(
            "min-h-0 min-w-0 flex-1 flex-col @3xl/gpt-builder:flex @3xl/gpt-builder:border-s @3xl/gpt-builder:border-primary-outline",
            tm,
          )),
          (ei[100] = tm),
          (ei[101] = O))
        : (O = ei[101])
      let tg = `${eV}-preview`
      return (
        ei[102] !== eW
          ? (($ = eW.formatMessage({ id: "gptBuilder.previewPanel", defaultMessage: "Preview your GPT" })),
            (ei[102] = eW),
            (ei[103] = $))
          : ($ = ei[103]),
        ei[104] !== ta || ei[105] !== tl
          ? ((Q = (0, i.jsx)("div", {
              ref: ta,
              className:
                "hidden h-14 shrink-0 items-center justify-center px-4 text-sm font-medium select-none @3xl/gpt-builder:flex",
              children: tl,
            })),
            (ei[104] = ta),
            (ei[105] = tl),
            (ei[106] = Q))
          : (Q = ei[106]),
        ei[107] !== en
          ? ((Z = (0, i.jsx)("div", { className: "flex min-h-0 flex-1 flex-col", children: en })),
            (ei[107] = en),
            (ei[108] = Z))
          : (Z = ei[108]),
        ei[109] !== O || ei[110] !== tg || ei[111] !== $ || ei[112] !== Q || ei[113] !== Z
          ? ((ee = (0, i.jsxs)("div", { className: O, id: tg, role: "tabpanel", "aria-label": $, children: [Q, Z] })),
            (ei[109] = O),
            (ei[110] = tg),
            (ei[111] = $),
            (ei[112] = Q),
            (ei[113] = Z),
            (ei[114] = ee))
          : (ee = ei[114]),
        ei[115] !== G || ei[116] !== ee
          ? ((et = (0, i.jsxs)("div", { className: "flex min-h-0 flex-1", children: [G, ee] })),
            (ei[115] = G),
            (ei[116] = ee),
            (ei[117] = et))
          : (et = ei[117]),
        ei[118] !== C || ei[119] !== B || ei[120] !== E || ei[121] !== et
          ? ((ea = (0, i.jsxs)("div", {
              className: "@container/gpt-builder flex h-full min-h-0 flex-col bg-surface text-default",
              children: [C, B, E, et],
            })),
            (ei[118] = C),
            (ei[119] = B),
            (ei[120] = E),
            (ei[121] = et),
            (ei[122] = ea))
          : (ea = ei[122]),
        ea
      )
    }
    function eY(e) {
      return "connector" === e.type
    }
    function eH(e) {
      let t,
        a,
        s,
        n,
        o,
        c,
        d = (0, r.c)(21),
        { draft: u, onChange: p, type: m, disabled: g, label: h } = e,
        f = (0, l.useId)()
      d[0] !== m
        ? ((t = (e) => e.type === m || ("image_gen" === m && "dalle" === e.type)), (d[0] = m), (d[1] = t))
        : (t = d[1])
      let _ = t
      return (
        d[2] !== f || d[3] !== h
          ? ((a = (0, i.jsx)("label", { className: "cursor-interaction select-none", htmlFor: f, children: h })),
            (d[2] = f),
            (d[3] = h),
            (d[4] = a))
          : (a = d[4]),
        d[5] !== u.tools || d[6] !== _
          ? ((s = u.tools?.some(_) ?? !1), (d[5] = u.tools), (d[6] = _), (d[7] = s))
          : (s = d[7]),
        d[8] !== u || d[9] !== _ || d[10] !== p || d[11] !== m
          ? ((n = (e) => p({ ...u, tools: e ? [...(u.tools ?? []), { type: m }] : u.tools?.filter((e) => !_(e)) })),
            (d[8] = u),
            (d[9] = _),
            (d[10] = p),
            (d[11] = m),
            (d[12] = n))
          : (n = d[12]),
        d[13] !== g || d[14] !== f || d[15] !== s || d[16] !== n
          ? ((o = (0, i.jsx)("div", {
              className: "relative",
              children: (0, i.jsx)($.S, { id: f, checked: s, disabled: g, onCheckedChange: n }),
            })),
            (d[13] = g),
            (d[14] = f),
            (d[15] = s),
            (d[16] = n),
            (d[17] = o))
          : (o = d[17]),
        d[18] !== a || d[19] !== o
          ? ((c = (0, i.jsx)(W.ic, { label: a, control: o })), (d[18] = a), (d[19] = o), (d[20] = c))
          : (c = d[20]),
        c
      )
    }
    var eK = a("PigS"),
      eX = a("U4QI"),
      eW = a("o7rp"),
      eJ = a("Kwur"),
      eV = a("GDNt")
    let eQ = d._H3({ action_ids: d.YOg(d.YjP()).nullish() }),
      eZ = [250, 500, 1e3, 2e3, 4e3],
      e0 = new Set([
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
      e1 = (0, s.vU)(A.u, ({ accountId: e, gizmoId: t, version: a }, { scope: i }) => ({
        queryKey: ["chatgpt-gizmos", "builder-draft", e, t, ...(null == a ? [] : [a])],
        staleTime: 0,
        refetchOnWindowFocus: !1,
        queryFn: async ({ signal: r }) => {
          e4(i, e)
          let s =
            null == a
              ? await eJ.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                  parameters: { path: { gizmo_id_or_short_url: t }, query: { draft: !0 } },
                  additionalHeaders: { [eS.zBc]: e },
                  expectedErrorStatuses: [401, 403, 404],
                  signal: r,
                }).catch((a) => {
                  if (!(a instanceof eV.fk) || (403 !== a.status && 404 !== a.status)) throw a
                  return (
                    e4(i, e),
                    eJ.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
                      parameters: { path: { gizmo_id_or_short_url: t }, query: { draft: !1 } },
                      additionalHeaders: { [eS.zBc]: e },
                      expectedErrorStatuses: [401, 403, 404],
                      signal: r,
                    })
                  )
                })
              : await eJ.Request.safeGet("/gizmos/{gizmo_id}/version/{version}", {
                  parameters: {
                    path: { gizmo_id: t, version: "latest" === a ? "latest" : eW.ai().int().positive().parse(a) },
                  },
                  additionalHeaders: { [eS.zBc]: e },
                  expectedErrorStatuses: [401, 403, 404],
                  signal: r,
                })
          return (
            e4(i, e),
            e6(s),
            null == a && t !== s.gizmo.id && i.query.setData(e1, { accountId: e, gizmoId: s.gizmo.id }, s),
            s
          )
        },
      }))
    function e2(e) {
      let t = [],
        { recipient: a, subjects: i } = e.sharing ?? { recipient: e.share_recipient, subjects: [] }
      for (let e of i)
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
      switch (a) {
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
          let r = i.find((e) => e.type === (a.startsWith("workspace") ? 3 : 4))
          if (null == r && null != e.sharing) throw Error("gpt_sharing_unavailable")
          t.push({
            type: a,
            capabilities: r?.capabilities ?? {
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
    async function e3(e, t, a, i) {
      for (let r = 0; ; r++) {
        e4(e, t)
        let s = await eJ.Request.safeGet("/files/download/{file_id}", {
          parameters: { path: { file_id: i }, query: { gizmo_id: a, download_intent: !1 } },
          additionalHeaders: { [eS.zBc]: t },
          expectedErrorStatuses: [401, 403, 404],
        })
        if ((e4(e, t), "download_url" in s && "" !== s.download_url)) return s.download_url
        let l = eZ[r]
        if ("retry" !== s.status || null == l) throw Error("gpt_profile_picture_unavailable")
        await new Promise((e) => setTimeout(e, l))
      }
    }
    function e4(e, t) {
      if (e.get(u.chatGptAuthenticatedAccountId$) !== t) throw Error("gpt_builder_account_changed")
    }
    function e6(e) {
      if (e.tools.some((e) => !e0.has(e.type))) throw Error("gpt_builder_tools_unsupported")
    }
    function e5(e, t, a) {
      e4(e, t)
      let i = e.get(S.X, "2513446768"),
        r = null == a ? "disable_gpt_creation" : "disable_gpt_updates"
      if (null == i || !0 === i.value[r]) throw Error(r)
      if (null != a) {
        let i = e.query.getData(e1, { accountId: t, gizmoId: a })
        if (null != i && (e6(i), i.gizmo.current_user_permission?.can_write !== !0))
          throw Error("gpt_write_permission_required")
        if (i?.gizmo.migrated_plugin_id && e.get(k.JW, "2160578039")) throw Error("gpt_migrated_to_plugin")
      }
    }
    var e8 = a("Bros")
    function e7(e, t, a) {
      return {
        ...e,
        tools: e.tools?.map((e) => ("plugins_prototype" !== e.type ? e : { ...e, metadata: N(e.metadata, t, a) })),
      }
    }
    var e9 = a("OAko"),
      te = a("AOG7"),
      tt = a("ENs9"),
      ta = a("aAsK"),
      ti = a("vw1R"),
      tr = a("UR81")
    let ts = {
      chat: { can_read: !0, can_view_config: !1, can_write: !1, can_delete: !1, can_export: !1, can_share: !1 },
      view: { can_read: !0, can_view_config: !0, can_write: !1, can_delete: !1, can_export: !1, can_share: !1 },
      edit: { can_read: !0, can_view_config: !0, can_write: !0, can_delete: !1, can_export: !1, can_share: !1 },
    }
    function tl(e) {
      switch (e.type) {
        case 1:
          return `user:${e.user_id.split("__")[0]}`
        case 2:
          return `group:${e.group_id}`
        case 10:
          return `email:${e.user_email.toLowerCase()}`
      }
    }
    function tn(e) {
      let t = e.sharing?.recipient ?? e.share_recipient
      return "user" === t || "group" === t || "email" === t ? "private" : t
    }
    function to(e) {
      return e.sharing_targets?.some((e) => "workspace" === e.recipient && e.allowed) === !0
    }
    function tc(e, t) {
      if (e.get(u.chatGptAuthenticatedAccountId$) !== t) throw Error("gpt_account_changed")
    }
    let td = (0, s.vU)(A.u, ({ accountId: e, gizmoId: t }, { scope: a }) => ({
        queryKey: ["chatgpt-gizmos", "sharing", e, t],
        staleTime: 0,
        queryFn: async () => {
          tc(a, e)
          let i = await eJ.Request.safeGet("/gizmos/{gizmo_id_or_short_url}", {
            parameters: { path: { gizmo_id_or_short_url: t }, query: { draft: !1 } },
            additionalHeaders: { [eS.zBc]: e },
            expectedErrorStatuses: [401, 403, 404],
          })
          return (tc(a, e), i)
        },
      })),
      tu = {
        private: (0, i.jsx)(n.A, { id: "gptBuilder.share.generalAccess.inviteOnly", defaultMessage: "Invite-only" }),
        workspace_link: (0, i.jsx)(n.A, {
          id: "gptBuilder.share.generalAccess.workspaceLink",
          defaultMessage: "Anyone in your workspace with the link",
        }),
        workspace: (0, i.jsx)(n.A, {
          id: "gptBuilder.share.generalAccess.workspace",
          defaultMessage: "Your workspace",
        }),
        link: (0, i.jsx)(n.A, {
          id: "gptBuilder.share.generalAccess.publicLink",
          defaultMessage: "Anyone with the link",
        }),
        marketplace: (0, i.jsx)(n.A, { id: "gptBuilder.share.generalAccess.store", defaultMessage: "GPT Store" }),
      }
    function tp(e) {
      let t,
        a,
        c,
        d,
        m,
        g,
        h,
        f,
        _,
        y,
        b,
        j,
        w,
        M,
        C,
        B,
        F,
        z,
        P,
        N,
        T,
        E,
        R,
        G,
        O,
        q,
        I,
        U,
        $,
        D,
        L,
        Y,
        H,
        K,
        X,
        W,
        J,
        V,
        Q,
        Z,
        ea,
        ei = (0, r.c)(151),
        { accountId: er, gizmoId: es, onClose: el } = e,
        en = (0, s.gh)(A.u),
        eo = (0, o.A)(),
        ec = (0, s.Ul)(u.chatGptAuthenticatedAccountId$),
        { data: ed } = (0, e9.YL)(),
        eu = er === ec && ed?.id === er
      ;(ei[0] !== er || ei[1] !== es
        ? ((t = { accountId: er, gizmoId: es }), (ei[0] = er), (ei[1] = es), (ei[2] = t))
        : (t = ei[2]),
        ei[3] !== eu ? ((a = { enabled: eu }), (ei[3] = eu), (ei[4] = a)) : (a = ei[4]))
      let { data: ep, isFetching: em, isError: eg, refetch: eh } = (0, s._U)(td, t, a)
      ei[5] !== eu ? ((c = { enabled: eu }), (ei[5] = eu), (ei[6] = c)) : (c = ei[6])
      let { data: ef, isError: e_ } = (0, s._U)(p.Jk, er, c),
        ey = (0, s._U)(S.X, "2513446768"),
        ex = (0, s._U)(k.JW, "2160578039"),
        [ev, eb] = (0, l.useState)("")
      ei[7] === Symbol.for("react.memo_cache_sentinel") ? ((d = []), (ei[7] = d)) : (d = ei[7])
      let [ej, ew] = (0, l.useState)(d),
        [eA, ek] = (0, l.useState)()
      ei[8] !== ep ? ((m = ep && tn(ep.gizmo)), (ei[8] = ep), (ei[9] = m)) : (m = ei[9])
      let eM = m,
        eC = eA === eM ? void 0 : eA
      ei[10] !== ep ? ((g = null != ep && to(ep.gizmo)), (ei[10] = ep), (ei[11] = g)) : (g = ei[11])
      let eB = g,
        eF = !eB
      ;(ei[12] !== eB
        ? ((h =
            !eB &&
            (0, i.jsx)(n.A, {
              id: "gptBuilder.share.generalAccess.workspaceUnavailable",
              defaultMessage: "Workspace sharing is unavailable for this GPT",
            })),
          (ei[12] = eB),
          (ei[13] = h))
        : (h = ei[13]),
        ei[14] !== eF || ei[15] !== h
          ? ((f = { disabled: eF, tooltipText: h }), (ei[14] = eF), (ei[15] = h), (ei[16] = f))
          : (f = ei[16]))
      let ez = f,
        [eP, eN] = (0, l.useState)(!1),
        eT = (0, l.useRef)(!1),
        [eE, eR] = (0, l.useState)(!1),
        [eG, eO] = (0, l.useState)(null),
        eq =
          !eu ||
          eP ||
          em ||
          eg ||
          null == ep ||
          null == ey ||
          !0 === ey.value.disable_gpt_updates ||
          ep.gizmo.current_user_permission?.can_write !== !0 ||
          (!!ep.gizmo.migrated_plugin_id && ex)
      ei[17] !== ed || ei[18] !== eu || ei[19] !== ef || ei[20] !== e_
        ? ((_ =
            eu &&
            !e_ &&
            null != ef &&
            ed?.structure === "workspace" &&
            (!(0, ti.o)(ed.plan_type) ||
              "account-owner" === ed.account_user_role ||
              "account-admin" === ed.account_user_role ||
              ef.permissions?.includes("chatgpt.workspace.member.role.view") === !0)),
          (ei[17] = ed),
          (ei[18] = eu),
          (ei[19] = ef),
          (ei[20] = e_),
          (ei[21] = _))
        : (_ = ei[21])
      let eI = _
      ei[22] !== ed?.plan_type || ei[23] !== eI
        ? ((y = eI && (0, tr.uz)(ed?.plan_type)), (ei[22] = ed?.plan_type), (ei[23] = eI), (ei[24] = y))
        : (y = ei[24])
      let eU = y,
        { data: e$, isFetching: eD, isError: eL } = (0, te.Nv)(eI && !eq ? ev : ""),
        { data: eY, isFetching: eH, isError: eK } = (0, te.Nc)(eU && !eq ? ev : "")
      if (
        (ei[25] !== ep?.gizmo.sharing?.subjects
          ? ((b = ep?.gizmo.sharing?.subjects ?? []), (ei[25] = ep?.gizmo.sharing?.subjects), (ei[26] = b))
          : (b = ei[26]),
        ei[27] !== eI ||
          ei[28] !== eU ||
          ei[29] !== ej ||
          ei[30] !== eq ||
          ei[31] !== eY ||
          ei[32] !== eK ||
          ei[33] !== eo ||
          ei[34] !== eu ||
          ei[35] !== eg ||
          ei[36] !== eP ||
          ei[37] !== eH ||
          ei[38] !== eD ||
          ei[39] !== el ||
          ei[40] !== eG ||
          ei[41] !== ev ||
          ei[42] !== eh ||
          ei[43] !== ep ||
          ei[44] !== ef ||
          ei[45] !== e_ ||
          ei[46] !== b ||
          ei[47] !== e$ ||
          ei[48] !== eL)
      ) {
        D = Symbol.for("react.early_return_sentinel")
        e: {
          let e = new Map(b.flatMap(tg))
          for (let t of ej) {
            let a = tl(t.subject)
            if ("remove" === t.type) e.delete(a)
            else if ("add" === t.type) e.set(a, t.subject)
            else {
              let i = e.get(a)
              null != i && e.set(a, { ...i, capabilities: ts[t.role] })
            }
          }
          let t = []
          if (eI) {
            let a,
              i,
              r = ep?.gizmo.author.user_id.split("__")[0]
            for (let i of (ei[68] !== e$ ? ((a = e$ ?? []), (ei[68] = e$), (ei[69] = a)) : (a = ei[69]), a)) {
              let a = `user:${i.account_user_id.split("__")[0]}`
              e.has(a) ||
                i.account_user_id.split("__")[0] === r ||
                t.push({
                  id: a,
                  label: i.name || i.email || i.account_user_id,
                  secondaryLabel: i.email ?? void 0,
                  subject: {
                    type: 1,
                    user_id: i.account_user_id,
                    user_name: i.name ?? null,
                    user_email: i.email ?? null,
                    avatar_url: null,
                    capabilities: ts.chat,
                  },
                })
            }
            for (let a of (ei[70] !== eU || ei[71] !== eY
              ? ((i = eU ? (eY ?? []) : []), (ei[70] = eU), (ei[71] = eY), (ei[72] = i))
              : (i = ei[72]),
            i)) {
              let i = `group:${a.id}`
              e.has(i) ||
                (a.is_scim_managed && ef?.beta_settings?.allow_scim_group_sharing_for_projects_and_gpts === !1) ||
                t.push({
                  id: i,
                  label: a.name,
                  subject: {
                    type: 2,
                    group_id: a.id,
                    group_name: a.name,
                    is_scim_managed: !0 === a.is_scim_managed,
                    capabilities: ts.chat,
                  },
                })
            }
          }
          if (!eu) {
            D = null
            break e
          }
          ;((w = ee.lG),
            (E = !0),
            (R = "large"),
            (G = "chatgpt"),
            (O = "visible"),
            (q = !eP),
            (I = eP),
            ei[73] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = {
                  "aria-describedby": void 0,
                  onOpenAutoFocus: (e) => {
                    e.currentTarget instanceof HTMLElement && eO(e.currentTarget)
                  },
                }),
                (ei[73] = U))
              : (U = ei[73]),
            ei[74] !== eP || ei[75] !== el
              ? (($ = (e) => {
                  e || eP || el()
                }),
                (ei[74] = eP),
                (ei[75] = el),
                (ei[76] = $))
              : ($ = ei[76]),
            (j = et.R4),
            (B = "flex flex-col gap-4 p-6"),
            (F = "chatgpt"),
            ei[77] === Symbol.for("react.memo_cache_sentinel")
              ? ((z = (0, i.jsx)(ee.L3, {
                  children: (0, i.jsx)(n.A, { id: "gptBuilder.share.title", defaultMessage: "Share GPT" }),
                })),
                (ei[77] = z))
              : (z = ei[77]),
            ei[78] === Symbol.for("react.memo_cache_sentinel")
              ? ((P = (0, i.jsx)("p", {
                  className: "text-sm text-secondary",
                  children: (0, i.jsx)(n.A, {
                    id: "gptBuilder.share.publishedAccessNotice",
                    defaultMessage: "Sharing changes apply to the published GPT. Your draft edits stay in the editor.",
                  }),
                })),
                (ei[78] = P))
              : (P = ei[78]),
            ei[79] !== eg || ei[80] !== eh
              ? ((N = eg
                  ? (0, i.jsx)(v.$, {
                      onClick: () => void eh(),
                      children: (0, i.jsx)(n.A, {
                        id: "gptBuilder.share.retry",
                        defaultMessage: "Retry loading sharing settings",
                      }),
                    })
                  : null),
                (ei[79] = eg),
                (ei[80] = eh),
                (ei[81] = N))
              : (N = ei[81]),
            ei[82] !== eI ||
            ei[83] !== eU ||
            ei[84] !== ej ||
            ei[85] !== eq ||
            ei[86] !== eK ||
            ei[87] !== eo ||
            ei[88] !== eH ||
            ei[89] !== eD ||
            ei[90] !== t ||
            ei[91] !== eG ||
            ei[92] !== ev ||
            ei[93] !== ef ||
            ei[94] !== e_ ||
            ei[95] !== eL
              ? ((T = eI
                  ? (0, i.jsx)(tt.X, {
                      ariaLabel: eo.formatMessage({
                        id: "gptBuilder.share.search",
                        defaultMessage: "Add people or groups",
                      }),
                      placeholder: eo.formatMessage({
                        id: "gptBuilder.share.placeholder",
                        defaultMessage: "Search people or groups",
                      }),
                      query: ev,
                      onQueryChange: eb,
                      portalContainer: eG,
                      disabled: eq,
                      loadingLabel: eo.formatMessage({
                        id: "gptBuilder.share.loading",
                        defaultMessage: "Searching workspace",
                      }),
                      options: eD || (eU && eH) ? void 0 : t,
                      searchFailed: eL || (eU && eK),
                      emptyMessage: (0, i.jsx)(n.A, {
                        id: "gptBuilder.share.noResults",
                        defaultMessage: "No matching workspace members or groups",
                      }),
                      onSelectOption: (e) => {
                        ;(ew([...ej, { type: "add", subject: e.subject }]), eb(""))
                      },
                    })
                  : (0, i.jsx)("p", {
                      className: "text-sm text-secondary",
                      children:
                        null != ef || e_
                          ? (0, i.jsx)(n.A, {
                              id: "gptBuilder.share.searchUnavailable",
                              defaultMessage:
                                "Workspace member search is unavailable. Check your workspace permissions or try again later.",
                            })
                          : (0, i.jsx)(n.A, {
                              id: "gptBuilder.share.loadingSettings",
                              defaultMessage: "Loading sharing settings\u2026",
                            }),
                    })),
                (ei[82] = eI),
                (ei[83] = eU),
                (ei[84] = ej),
                (ei[85] = eq),
                (ei[86] = eK),
                (ei[87] = eo),
                (ei[88] = eH),
                (ei[89] = eD),
                (ei[90] = t),
                (ei[91] = eG),
                (ei[92] = ev),
                (ei[93] = ef),
                (ei[94] = e_),
                (ei[95] = eL),
                (ei[96] = T))
              : (T = ei[96]),
            (M = "max-h-80 overflow-y-auto"),
            (C = [...e.values()].map((e) => {
              var t
              return (0, i.jsxs)(
                "div",
                {
                  className: "flex items-center justify-between gap-3 py-2",
                  children: [
                    (0, i.jsx)("span", {
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
                    (0, i.jsx)(th, {
                      disabled: eq,
                      role: (t = e).capabilities.can_write ? "edit" : t.capabilities.can_view_config ? "view" : "chat",
                      onChange: (t) => ew([...ej, { type: "role", subject: e, role: t }]),
                      onRemoveAccess: () => ew([...ej, { type: "remove", subject: e }]),
                    }),
                  ],
                },
                tl(e),
              )
            })))
        }
        ;((ei[27] = eI),
          (ei[28] = eU),
          (ei[29] = ej),
          (ei[30] = eq),
          (ei[31] = eY),
          (ei[32] = eK),
          (ei[33] = eo),
          (ei[34] = eu),
          (ei[35] = eg),
          (ei[36] = eP),
          (ei[37] = eH),
          (ei[38] = eD),
          (ei[39] = el),
          (ei[40] = eG),
          (ei[41] = ev),
          (ei[42] = eh),
          (ei[43] = ep),
          (ei[44] = ef),
          (ei[45] = e_),
          (ei[46] = b),
          (ei[47] = e$),
          (ei[48] = eL),
          (ei[49] = j),
          (ei[50] = w),
          (ei[51] = M),
          (ei[52] = C),
          (ei[53] = B),
          (ei[54] = F),
          (ei[55] = z),
          (ei[56] = P),
          (ei[57] = N),
          (ei[58] = T),
          (ei[59] = E),
          (ei[60] = R),
          (ei[61] = G),
          (ei[62] = O),
          (ei[63] = q),
          (ei[64] = I),
          (ei[65] = U),
          (ei[66] = $),
          (ei[67] = D))
      } else
        ((j = ei[49]),
          (w = ei[50]),
          (M = ei[51]),
          (C = ei[52]),
          (B = ei[53]),
          (F = ei[54]),
          (z = ei[55]),
          (P = ei[56]),
          (N = ei[57]),
          (T = ei[58]),
          (E = ei[59]),
          (R = ei[60]),
          (G = ei[61]),
          (O = ei[62]),
          (q = ei[63]),
          (I = ei[64]),
          (U = ei[65]),
          ($ = ei[66]),
          (D = ei[67]))
      if (D !== Symbol.for("react.early_return_sentinel")) return D
      ;(ei[97] !== M || ei[98] !== C
        ? ((L = (0, i.jsx)("div", { className: M, children: C })), (ei[97] = M), (ei[98] = C), (ei[99] = L))
        : (L = ei[99]),
        ei[100] !== ed?.structure || ei[101] !== eM || ei[102] !== eq || ei[103] !== eA || ei[104] !== ez
          ? ((Y =
              ed?.structure === "workspace" && null != eM
                ? (0, i.jsxs)("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      (0, i.jsx)("span", {
                        className: "text-sm font-medium",
                        children: (0, i.jsx)(n.A, {
                          id: "gptBuilder.share.generalAccess.label",
                          defaultMessage: "General access",
                        }),
                      }),
                      (0, i.jsx)(ta.e, {
                        disabled: eq,
                        value: eA ?? eM,
                        options: [
                          { value: "private" },
                          { value: "workspace_link", ...ez },
                          { value: "workspace", ...ez },
                          ...("link" === eM || "marketplace" === eM ? [{ value: eM }] : []),
                        ],
                        renderLabel: tm,
                        onChange: (e) => ek(e === eM || "link" === e || "marketplace" === e ? void 0 : e),
                      }),
                    ],
                  })
                : null),
            (ei[100] = ed?.structure),
            (ei[101] = eM),
            (ei[102] = eq),
            (ei[103] = eA),
            (ei[104] = ez),
            (ei[105] = Y))
          : (Y = ei[105]),
        ei[106] !== eE
          ? ((H = eE
              ? (0, i.jsx)(x.l, {
                  type: "error",
                  role: "alert",
                  content: (0, i.jsx)(n.A, {
                    id: "gptBuilder.share.error",
                    defaultMessage:
                      "Could not update sharing. Check your GPT and workspace permissions, then try again.",
                  }),
                })
              : null),
            (ei[106] = eE),
            (ei[107] = H))
          : (H = ei[107]),
        ei[108] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, i.jsx)(n.A, { id: "gptBuilder.share.cancel", defaultMessage: "Cancel" })), (ei[108] = K))
          : (K = ei[108]),
        ei[109] !== eP || ei[110] !== el
          ? ((X = (0, i.jsx)(v.$, { color: "secondary", disabled: eP, onClick: el, children: K })),
            (ei[109] = eP),
            (ei[110] = el),
            (ei[111] = X))
          : (X = ei[111]))
      let eX = eq || (0 === ej.length && null == eC) || (null != eC && "private" !== eC && !eB)
      return (
        ei[112] !== eC ||
        ei[113] !== er ||
        ei[114] !== ej ||
        ei[115] !== eq ||
        ei[116] !== es ||
        ei[117] !== el ||
        ei[118] !== en
          ? ((W = () => {
              eq ||
                eT.current ||
                ((eT.current = !0),
                eN(!0),
                eR(!1),
                (async function (e, t, a, i, r) {
                  tc(e, t)
                  let s = await e.query.fetch(td, { accountId: t, gizmoId: a })
                  tc(e, t)
                  let l = e.get(S.X, "2513446768")
                  if (
                    null == l ||
                    !0 === l.value.disable_gpt_updates ||
                    s.gizmo.current_user_permission?.can_write !== !0 ||
                    (s.gizmo.live_version ?? 0) === 0 ||
                    (s.gizmo.migrated_plugin_id && e.get(k.JW, "2160578039"))
                  )
                    throw Error("gpt_sharing_unavailable")
                  let n = await eJ.Request.safePost("/gizmos/{gizmo_id}/share", {
                    parameters: { path: { gizmo_id: a } },
                    requestBody: (function (e, t, a, i) {
                      let r = new Map(
                        (e.sharing?.subjects ?? []).flatMap((e) => (3 === e.type || 4 === e.type ? [] : [[tl(e), e]])),
                      )
                      for (let e of t) {
                        let t = tl(e.subject)
                        if ("remove" === e.type) r.delete(t)
                        else if ("add" === e.type) r.has(t) || r.set(t, e.subject)
                        else {
                          let a = r.get(t)
                          null != a && r.set(t, { ...a, capabilities: ts[e.role] })
                        }
                      }
                      let s = e2(e)
                      if (null != i && i !== tn(e)) {
                        if ("private" !== i && !to(e)) throw Error("gpt_sharing_unavailable")
                        s.sharing = ["private" === i ? { type: "private" } : { type: i, capabilities: ts.chat }]
                      } else
                        s.sharing = s.sharing.filter(
                          (e) => "user" !== e.type && "group" !== e.type && "email" !== e.type,
                        )
                      for (let e of r.values())
                        switch (e.type) {
                          case 1:
                            s.sharing.push({
                              type: "user",
                              user_id: e.user_id.includes("__") ? e.user_id : `${e.user_id}__${a}`,
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
                    })(s.gizmo, i, t, r),
                    additionalHeaders: { [eS.zBc]: t },
                    expectedErrorStatuses: [400, 401, 403, 404, 409],
                  })
                  if ((tc(e, t), null != n.error || null == n.resource)) throw Error("gpt_sharing_failed")
                  await e.queryClient.invalidateQueries({
                    queryKey: ["chatgpt-gizmos"],
                    predicate: ({ queryKey: e }) => "builder-draft" !== e[1],
                  })
                })(en, er, es, ej, eC)
                  .then(el)
                  .catch(() => eR(!0))
                  .finally(() => {
                    ;((eT.current = !1), eN(!1))
                  }))
            }),
            (ei[112] = eC),
            (ei[113] = er),
            (ei[114] = ej),
            (ei[115] = eq),
            (ei[116] = es),
            (ei[117] = el),
            (ei[118] = en),
            (ei[119] = W))
          : (W = ei[119]),
        ei[120] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = (0, i.jsx)(n.A, { id: "gptBuilder.share.save", defaultMessage: "Save" })), (ei[120] = J))
          : (J = ei[120]),
        ei[121] !== eP || ei[122] !== eX || ei[123] !== W
          ? ((V = (0, i.jsx)(v.$, { disabled: eX, loading: eP, onClick: W, children: J })),
            (ei[121] = eP),
            (ei[122] = eX),
            (ei[123] = W),
            (ei[124] = V))
          : (V = ei[124]),
        ei[125] !== X || ei[126] !== V
          ? ((Q = (0, i.jsxs)("div", { className: "flex justify-end gap-2", children: [X, V] })),
            (ei[125] = X),
            (ei[126] = V),
            (ei[127] = Q))
          : (Q = ei[127]),
        ei[128] !== j ||
        ei[129] !== B ||
        ei[130] !== F ||
        ei[131] !== z ||
        ei[132] !== P ||
        ei[133] !== N ||
        ei[134] !== T ||
        ei[135] !== L ||
        ei[136] !== Y ||
        ei[137] !== H ||
        ei[138] !== Q
          ? ((Z = (0, i.jsxs)(j, { className: B, variant: F, children: [z, P, N, T, L, Y, H, Q] })),
            (ei[128] = j),
            (ei[129] = B),
            (ei[130] = F),
            (ei[131] = z),
            (ei[132] = P),
            (ei[133] = N),
            (ei[134] = T),
            (ei[135] = L),
            (ei[136] = Y),
            (ei[137] = H),
            (ei[138] = Q),
            (ei[139] = Z))
          : (Z = ei[139]),
        ei[140] !== w ||
        ei[141] !== E ||
        ei[142] !== R ||
        ei[143] !== G ||
        ei[144] !== O ||
        ei[145] !== q ||
        ei[146] !== I ||
        ei[147] !== U ||
        ei[148] !== $ ||
        ei[149] !== Z
          ? ((ea = (0, i.jsx)(w, {
              open: E,
              size: R,
              variant: G,
              contentOverflow: O,
              showDialogClose: q,
              shouldIgnoreClickOutside: I,
              contentProps: U,
              onOpenChange: $,
              children: Z,
            })),
            (ei[140] = w),
            (ei[141] = E),
            (ei[142] = R),
            (ei[143] = G),
            (ei[144] = O),
            (ei[145] = q),
            (ei[146] = I),
            (ei[147] = U),
            (ei[148] = $),
            (ei[149] = Z),
            (ei[150] = ea))
          : (ea = ei[150]),
        ea
      )
    }
    function tm(e) {
      return tu[e]
    }
    function tg(e) {
      return 3 === e.type || 4 === e.type ? [] : [[tl(e), e]]
    }
    function th(e) {
      let t,
        a,
        s,
        l = (0, r.c)(7),
        { role: o, disabled: c, onChange: d, onRemoveAccess: u } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = [{ value: "chat" }, { value: "view" }, { value: "edit" }]), (l[0] = t))
          : (t = l[0]),
        l[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(n.A, { id: "gptBuilder.share.remove", defaultMessage: "Remove access" })), (l[1] = a))
          : (a = l[1]),
        l[2] !== c || l[3] !== d || l[4] !== u || l[5] !== o
          ? ((s = (0, i.jsx)(ta.e, {
              disabled: c,
              value: o,
              options: t,
              onChange: d,
              onRemoveAccess: u,
              removeLabel: a,
              renderLabel: tf,
            })),
            (l[2] = c),
            (l[3] = d),
            (l[4] = u),
            (l[5] = o),
            (l[6] = s))
          : (s = l[6]),
        s
      )
    }
    function tf(e) {
      switch (e) {
        case "edit":
          return (0, i.jsx)(n.A, { id: "gptBuilder.share.edit", defaultMessage: "Can edit" })
        case "view":
          return (0, i.jsx)(n.A, { id: "gptBuilder.share.view", defaultMessage: "Can view settings" })
        case "chat":
          return (0, i.jsx)(n.A, { id: "gptBuilder.share.chat", defaultMessage: "Can chat" })
      }
    }
    var t_ = a("M8gg")
    function ty() {
      let e,
        t,
        a = (0, r.c)(7),
        l = (0, s.Ul)(u.chatGptAuthenticatedAccountId$),
        { gizmoId: o } = (0, c.g)(),
        [d] = (0, c.ok)()
      a[0] !== d || a[1] !== o
        ? ((e = null == o ? void 0 : (d.get("version") ?? void 0)), (a[0] = d), (a[1] = o), (a[2] = e))
        : (e = a[2])
      let p = e
      return (
        a[3] !== l || a[4] !== o || a[5] !== p
          ? ((t =
              null == l
                ? (0, i.jsx)(w.LoadingPage, { debugName: "GptBuilderAccount" })
                : (0, i.jsx)(f.H, {
                    loadingFallback: (0, i.jsx)(w.LoadingPage, { debugName: "GptBuilderAccess" }),
                    readOnlyFallback:
                      null == o
                        ? void 0
                        : (0, i.jsx)(tx, { accountId: l, slug: o, version: p, readOnly: !0 }, `${l}:${o}:${p ?? ""}`),
                    unavailableFallback: (0, i.jsx)(b.A, {
                      layout: "page",
                      title: (0, i.jsx)(n.A, {
                        id: "gptBuilder.managementUnavailable",
                        defaultMessage: "GPT management is unavailable for this account",
                      }),
                    }),
                    children: (0, i.jsx)(tx, { accountId: l, slug: o, version: p }, `${l}:${o ?? ""}:${p ?? ""}`),
                  })),
            (a[3] = l),
            (a[4] = o),
            (a[5] = p),
            (a[6] = t))
          : (t = a[6]),
        t
      )
    }
    function tx(e) {
      let t,
        a,
        o,
        u,
        m,
        g,
        f,
        y = (0, r.c)(32),
        { accountId: x, slug: j, version: A, readOnly: S } = e,
        k = void 0 !== S && S,
        [M] = (0, c.ok)()
      y[0] !== M || y[1] !== j
        ? ((t = () => (null == j ? M.get("gizmo") : (0, h.f)(j))), (y[0] = M), (y[1] = j), (y[2] = t))
        : (t = y[2])
      let [C] = (0, l.useState)(t),
        { data: B } = (0, s._U)(_.i, x),
        F = B?.account.structure === "workspace"
      y[3] !== F ? ((a = { enabled: F }), (y[3] = F), (y[4] = a)) : (a = y[4])
      let { data: z } = (0, s._U)(p.Jk, x, a),
        P = C ?? ""
      y[5] !== x || y[6] !== P || y[7] !== A
        ? ((o = { accountId: x, gizmoId: P, version: A }), (y[5] = x), (y[6] = P), (y[7] = A), (y[8] = o))
        : (o = y[8])
      let N = null != C
      y[9] !== N ? ((u = { enabled: N }), (y[9] = N), (y[10] = u)) : (u = y[10])
      let { data: T, isPending: E, error: R, refetch: G } = (0, s._U)(e1, o, u)
      if (null == B || (null != C && E)) {
        let e
        return (
          y[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(w.LoadingPage, { debugName: "GptBuilderDraft" })), (y[11] = e))
            : (e = y[11]),
          e
        )
      }
      if (null != C && (null != R || null == T)) {
        let e, t, a, r
        return (
          y[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(n.A, {
                id: "gptBuilder.editorLoadError",
                defaultMessage: "Couldn't load this GPT configuration",
              })),
              (y[12] = e))
            : (e = y[12]),
          y[13] !== G ? ((t = () => void G()), (y[13] = G), (y[14] = t)) : (t = y[14]),
          y[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, i.jsx)(n.A, { id: "gptBuilder.reload", defaultMessage: "Try again" })), (y[15] = a))
            : (a = y[15]),
          y[16] !== t
            ? ((r = (0, i.jsx)(b.A, {
                layout: "page",
                title: e,
                actions: (0, i.jsx)(v.$, { onClick: t, children: a }),
              })),
              (y[16] = t),
              (y[17] = r))
            : (r = y[17]),
          r
        )
      }
      if (
        null != T &&
        T.gizmo.current_user_permission?.can_write !== !0 &&
        T.gizmo.current_user_permission?.can_view_config !== !0
      ) {
        let e
        return (
          y[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(b.A, {
                layout: "page",
                title: (0, i.jsx)(n.A, {
                  id: "gptBuilder.configurationUnavailable",
                  defaultMessage: "You don't have permission to view this GPT's configuration",
                }),
              })),
              (y[18] = e))
            : (e = y[18]),
          e
        )
      }
      let O = "workspace" === B.account.structure
      y[19] !== z?.allowed_custom_actions_domains
        ? ((m = d.YOg(d.YjP()).nullish().parse(z?.allowed_custom_actions_domains)),
          (y[19] = z?.allowed_custom_actions_domains),
          (y[20] = m))
        : (m = y[20])
      let q = T ?? null,
        I = null != A
      return (
        y[21] !== B.account.structure || y[22] !== B.features
          ? ((g = "workspace" !== B.account.structure || B.features?.includes("browsing_available") === !0),
            (y[21] = B.account.structure),
            (y[22] = B.features),
            (y[23] = g))
          : (g = y[23]),
        y[24] !== x || y[25] !== k || y[26] !== m || y[27] !== q || y[28] !== I || y[29] !== g || y[30] !== O
          ? ((f = (0, i.jsx)(tv, {
              accountId: x,
              isWorkspace: O,
              allowedActionDomains: m,
              initialResource: q,
              viewingVersion: I,
              readOnly: k,
              browsingAllowed: g,
            })),
            (y[24] = x),
            (y[25] = k),
            (y[26] = m),
            (y[27] = q),
            (y[28] = I),
            (y[29] = g),
            (y[30] = O),
            (y[31] = f))
          : (f = y[31]),
        f
      )
    }
    function tv(e) {
      let t,
        a,
        p,
        h,
        f,
        _,
        v,
        b,
        w,
        B,
        z,
        N,
        q,
        I,
        U,
        $,
        D,
        L,
        Y,
        H,
        K,
        X,
        W,
        J,
        V,
        Q,
        Z,
        ee,
        et,
        ea,
        ei = (0, r.c)(149),
        {
          accountId: er,
          isWorkspace: es,
          initialResource: el,
          browsingAllowed: en,
          allowedActionDomains: eo,
          viewingVersion: ec,
          readOnly: ed,
        } = e,
        eu = (0, s.gh)(A.u),
        ep = (0, o.A)(),
        em = (0, c.Zp)(),
        { hash: eg, pathname: eh } = (0, c.zy)(),
        ef = (0, M.a)(),
        e_ = (0, s._U)(S.X, "2513446768"),
        ey = (0, s._U)(k.JW, "2160578039")
      ei[0] !== er || ei[1] !== en || ei[2] !== el || ei[3] !== ef || ei[4] !== em || ei[5] !== eh || ei[6] !== eu
        ? ((t = () => {
            var e, t
            let a, i, r, s, l, n, o, c, u
            return (
              (e =
                null == el
                  ? {
                      instructions: "",
                      display: { name: "", description: "", prompt_starters: [] },
                      tools: en ? [{ type: "browser" }, { type: "image_gen" }] : [{ type: "image_gen" }],
                      files: [],
                      training_disabled: !1,
                    }
                  : (function (e) {
                      e6(e)
                      let t = []
                      for (let a of e.tools)
                        switch (a.type) {
                          case "python":
                          case "retrieval":
                          case "canvas":
                          case "memory":
                            t.push({ type: a.type })
                            break
                          case "browser":
                            t.push({
                              type: "browser",
                              settings:
                                null == a.settings
                                  ? null
                                  : d.Ikc({ allowed_domains: d.YOg(d.YjP()).nullish() }).parse(a.settings),
                            })
                            break
                          case "dalle":
                          case "image_gen":
                            t.some((e) => "image_gen" === e.type) || t.push({ type: "image_gen" })
                            break
                          case "connector":
                            t.push({ type: "connector", settings: null == a.settings ? null : eQ.parse(a.settings) })
                            break
                          case "plugins_prototype":
                            t.push({ type: "plugins_prototype", metadata: F.parse(a.metadata) })
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
                      }
                    })(el)),
              (t = async (e, t) => {
                let a = await (async function (e, t, a, i) {
                  if ((e5(e, t, a), eO(i).length > 0)) throw Error("gpt_builder_invalid_draft")
                  let r = await eJ.Request.safePost("/gizmos", {
                    parameters: { query: { gizmo_id: a } },
                    requestBody: {
                      ...i,
                      display: {
                        ...i.display,
                        prompt_starters:
                          i.display.prompt_starters?.filter((e) => e.trim().length > 0) ?? i.display.prompt_starters,
                      },
                    },
                    additionalHeaders: { [eS.zBc]: t },
                    expectedErrorStatuses: [400, 401, 403, 404, 409],
                  })
                  return (e4(e, t), e.query.setData(e1, { accountId: t, gizmoId: r.gizmo.id }, r), r)
                })(eu, er, t, e)
                return (
                  null == t &&
                    ef() &&
                    em(
                      {
                        pathname: eh.startsWith("/gpts/editor") ? "/gpts/editor" : C.m2,
                        search: new URLSearchParams({ gizmo: a.gizmo.id }).toString(),
                      },
                      { replace: !0 },
                    ),
                  a
                )
              }),
              (i = { draft: e, resource: el, saveState: "saved", saveError: null }),
              (r = null == el ? null : e),
              (s = null),
              (l = null),
              (n = new Set()),
              (o = new Set()),
              (c = () => n.forEach((e) => e())),
              {
                getSnapshot: () => i,
                subscribe: (e) => (n.add(e), () => n.delete(e)),
                subscribeToSaves: (e) => (o.add(e), () => o.delete(e)),
                change: (e) => {
                  ;((i = { ...i, draft: e, saveState: "saving", saveError: null }),
                    c(),
                    clearTimeout(a),
                    (a = setTimeout(() => {
                      u().catch(() => {})
                    }, 750)))
                },
                flush: (u = () =>
                  (clearTimeout(a), (a = void 0), null != l)
                    ? l
                    : null == s && i.draft === r && null != i.resource
                      ? Promise.resolve(i.resource)
                      : ((i = { ...i, saveState: "saving", saveError: null }),
                        c(),
                        (l = Promise.resolve().then(async () => {
                          let e = "request"
                          try {
                            for (;;) {
                              if (null == s) {
                                let a =
                                  null == i.resource && null != i.draft.display.profile_pic_id
                                    ? {
                                        ...i.draft,
                                        display: {
                                          ...i.draft.display,
                                          profile_pic_id: void 0,
                                          profile_picture_url: void 0,
                                        },
                                      }
                                    : i.draft
                                e = "request"
                                let r = await t(a, i.resource?.gizmo.id)
                                s = { submitted: a, resource: r }
                              }
                              e = "response"
                              let { submitted: a, resource: l } = s,
                                n = i.draft !== a && i.draft !== r
                              if (
                                ((i = { ...i, resource: l }),
                                (r = e7(a, a, l)),
                                (i = { ...i, draft: n ? e7(i.draft, a, l) : r }),
                                o.forEach((e) => e(a, l)),
                                (s = null),
                                r === i.draft)
                              )
                                return ((i = { ...i, saveState: "saved" }), l)
                              c()
                            }
                          } catch (t) {
                            throw ((i = { ...i, saveState: "error", saveError: { cause: t, stage: e } }), t)
                          } finally {
                            ;((l = null), c())
                          }
                        })))),
                cancelScheduledSave: () => clearTimeout(a),
              }
            )
          }),
          (ei[0] = er),
          (ei[1] = en),
          (ei[2] = el),
          (ei[3] = ef),
          (ei[4] = em),
          (ei[5] = eh),
          (ei[6] = eu),
          (ei[7] = t))
        : (t = ei[7])
      let [ex] = (0, l.useState)(t),
        {
          draft: ev,
          resource: eb,
          saveState: ej,
          saveError: ew,
        } = (0, l.useSyncExternalStore)(ex.subscribe, ex.getSnapshot, ex.getSnapshot)
      ei[8] !== eu ? ((a = () => (0, g.dL)(eu)), (ei[8] = eu), (ei[9] = a)) : (a = ei[9])
      let [eA] = (0, l.useState)(a)
      ei[10] !== el || ei[11] !== ex
        ? ((p = () => ({
            context_message: O(ex.getSnapshot().draft),
            model_slug: "gpt-4o",
            enabled_tools: [{ tool_id: null == el ? "gizmo_creator" : "gizmo_editor" }],
          })),
          (ei[10] = el),
          (ei[11] = ex),
          (ei[12] = p))
        : (p = ei[12])
      let [ek] = (0, l.useState)(p),
        eM = (0, l.useRef)(null),
        eC = (0, l.useRef)(ev),
        eB = (0, l.useRef)(null),
        eF = (0, l.useRef)(null),
        ez = (0, l.useRef)(null),
        [eP, eN] = (0, l.useState)(!1),
        [eT, eE] = (0, l.useState)(!1),
        [eR, eG] = (0, l.useState)(!1),
        [eq, eI] = (0, l.useState)(!1),
        [eU, e$] = (0, l.useState)(null),
        [eD, eY] = (0, l.useState)(el?.gizmo.display.profile_picture_url ?? void 0),
        eH =
          eD ??
          (eb?.gizmo.display.profile_pic_id === ev.display.profile_pic_id
            ? (eb?.gizmo.display.profile_picture_url ?? void 0)
            : void 0),
        eW = e_?.value.disable_gizmo_magic_create === !0,
        eV = el?.gizmo ?? eb?.gizmo,
        eZ =
          ed ||
          ec ||
          null == e_ ||
          (null != eV && (eV.current_user_permission?.can_write !== !0 || (!!eV.migrated_plugin_id && ey))) ||
          (null == eb ? !0 === e_.value.disable_gpt_creation : !0 === e_.value.disable_gpt_updates),
        e0 = eP || eT || eR || eq
      ei[13] !== ev ? ((h = eO(ev)), (ei[13] = ev), (ei[14] = h)) : (h = ei[14])
      let e9 = h.length > 0,
        te = eb?.project_file_limits?.max_file_limit
      ei[15] !== el || ei[16] !== ep
        ? ((f = () => {
            if (null == el)
              return ep.formatMessage(
                {
                  id: "gptBuilder.welcomeParagraphs",
                  defaultMessage:
                    'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."{paragraphBreak}What would you like to make?',
                },
                { paragraphBreak: "\n\n" },
              )
            let { gizmo: e } = el
            return "" !== e.display.name &&
              null != e.display.description &&
              (e.instructions ?? "") !== "" &&
              null != e.display.profile_picture_url
              ? ep.formatMessage(
                  {
                    id: "gptBuilder.welcomeBackCompleted",
                    defaultMessage:
                      "Welcome back! Is there anything {name} should be doing better? Anything you'd like to change?",
                  },
                  { name: e.display.name },
                )
              : ep.formatMessage({
                  id: "gptBuilder.welcomeBackUnfinished",
                  defaultMessage: "You're back! Let's continue where we left off\u2026",
                })
          }),
          (ei[15] = el),
          (ei[16] = ep),
          (ei[17] = f))
        : (f = ei[17])
      let [tt] = (0, l.useState)(f)
      ;(ei[18] !== eq || ei[19] !== ex
        ? ((_ = (e) => {
            ;(eq || "saved" !== ex.getSnapshot().saveState) && e.preventDefault()
          }),
          (ei[18] = eq),
          (ei[19] = ex),
          (ei[20] = _))
        : (_ = ei[20]),
        (0, c.K)(_),
        ei[21] !== eA || ei[22] !== ef || ei[23] !== ex || ei[24] !== eu
          ? ((v = () => () => {
              ;(eB.current?.abort(),
                ez.current?.abort(),
                ex.cancelScheduledSave(),
                "saving" === ex.getSnapshot().saveState && ex.flush().catch(tM),
                queueMicrotask(() => {
                  if (ef()) return
                  let e = () => (0, eK.V)(eu, eA)
                  null == eF.current ? e() : eF.current.then(e, e)
                }))
            }),
            (b = [ex, eu, eA, ef]),
            (ei[21] = eA),
            (ei[22] = ef),
            (ei[23] = ex),
            (ei[24] = eu),
            (ei[25] = v),
            (ei[26] = b))
          : ((v = ei[25]), (b = ei[26])),
        (0, l.useEffect)(v, b),
        ei[27] !== eZ
          ? ((w =
              eZ &&
              (0, i.jsx)(x.l, {
                type: "warning",
                content: (0, i.jsx)(n.A, {
                  id: "gptBuilder.unavailable",
                  defaultMessage: "GPT creation and editing are currently unavailable",
                }),
              })),
            (ei[27] = eZ),
            (ei[28] = w))
          : (w = ei[28]),
        ei[29] !== eU || ei[30] !== te
          ? ((B =
              null != eU &&
              (0, i.jsx)(x.l, {
                type: "error",
                role: "alert",
                content: (0, i.jsxs)(i.Fragment, {
                  children: [
                    "picture" === eU &&
                      (0, i.jsx)(n.A, {
                        id: "gptBuilder.pictureError",
                        defaultMessage: "Your changes were saved, but the profile picture preview could not load",
                      }),
                    "pictureUpload" === eU &&
                      (0, i.jsx)(n.A, {
                        id: "gptBuilder.pictureUploadError",
                        defaultMessage: "Couldn't update the profile picture. Try uploading it again",
                      }),
                    "publish" === eU &&
                      (0, i.jsx)(n.A, {
                        id: "gptBuilder.publishError",
                        defaultMessage: "Your GPT could not be published. Your draft is still saved.",
                      }),
                    "upload" === eU &&
                      (0, i.jsx)(n.A, {
                        id: "gptBuilder.uploadError",
                        defaultMessage: "A file could not be added. Try uploading it again.",
                      }),
                    "uploadLimit" === eU &&
                      null != te &&
                      (0, i.jsx)(n.A, {
                        id: "gptBuilder.uploadLimitError",
                        defaultMessage:
                          "This GPT can have up to {limit, plural, one {# knowledge file} other {# knowledge files}}. Remove a file or choose fewer files",
                        values: { limit: te },
                      }),
                    "conversation" === eU &&
                      (0, i.jsx)(n.A, {
                        id: "gptBuilder.conversationError",
                        defaultMessage: "The builder could not respond. Try sending your message again.",
                      }),
                  ],
                }),
              })),
            (ei[29] = eU),
            (ei[30] = te),
            (ei[31] = B))
          : (B = ei[31]))
      let ta = ex.change,
        ti = ex.subscribeToSaves
      ;(ei[32] !== er || ei[33] !== ex || ei[34] !== eu
        ? ((z = (e, t) =>
            (async function (e, t, a, i, r) {
              e5(e, t, a)
              let s = await eJ.Request.safePost("/gizmos/validate_openapi", {
                requestBody: { raw_spec: i },
                additionalHeaders: { [eS.zBc]: t },
                expectedErrorStatuses: [400, 401, 403],
                signal: r,
              })
              return (e5(e, t, a), s)
            })(eu, er, ex.getSnapshot().resource?.gizmo.id, e, t)),
          (N = (e, t) =>
            (async function (e, t, a, i, r) {
              e5(e, t, a)
              let s = await eJ.Request.safePost("/gizmos/fetch_openapi", {
                requestBody: { url: i },
                additionalHeaders: { [eS.zBc]: t },
                expectedErrorStatuses: [400, 401, 403],
                signal: r,
              })
              return (e5(e, t, a), s.content)
            })(eu, er, ex.getSnapshot().resource?.gizmo.id, e, t)),
          (ei[32] = er),
          (ei[33] = ex),
          (ei[34] = eu),
          (ei[35] = z),
          (ei[36] = N))
        : ((z = ei[35]), (N = ei[36])),
      ei[37] !== ex || ei[38] !== ej
        ? ((q =
            "saved" !== ej
              ? void 0
              : async (e, t) => {
                  if ((await ex.flush(), null == eM.current)) throw Error("gpt_action_preview_unavailable")
                  await eM.current.test(e, t)
                }),
          (ei[37] = ex),
          (ei[38] = ej),
          (ei[39] = q))
        : (q = ei[39]),
      ei[40] !== eb)
        ? ((I =
            null == eb
              ? []
              : eb.tools.flatMap((e) => {
                  if ("plugins_prototype" !== e.type) return []
                  let t = P.safeParse(e.metadata)
                  return t.success ? [t.data] : []
                })),
          (ei[40] = eb),
          (ei[41] = I))
        : (I = ei[41])
      let tr = null != eb,
        ts = (eV?.live_version ?? 0) > 0,
        tl = (el?.gizmo.live_version ?? 0) > 0 || "#configure" === eg ? "configure" : "create"
      ;(ei[42] !== ex ? ((U = () => void ex.flush().catch(tk)), (ei[42] = ex), (ei[43] = U)) : (U = ei[43]),
        ei[44] !== er || ei[45] !== eZ || ei[46] !== e0 || ei[47] !== ef || ei[48] !== ex || ei[49] !== eu
          ? (($ = (e) => {
              if (e0 || eZ || null != ez.current) return
              let t = new AbortController()
              ;((ez.current = t), eI(!0), e$(null))
              let a = !1
              ;(async () => {
                let i = ex.getSnapshot().resource
                null == i ? (i = await ex.flush()) : await ex.flush().catch(tS)
                let r = await (0, t_.OE)(eu, er, i.gizmo.id, e, t.signal),
                  s = ex.getSnapshot().draft
                ;(ex.change({ ...s, display: { ...s.display, profile_pic_id: r, profile_picture_url: void 0 } }),
                  eY(void 0),
                  await ex.flush(),
                  (a = !0))
                let l = await e3(eu, er, i.gizmo.id, r)
                ef() && !t.signal.aborted && eY(l)
              })()
                .catch(() => {
                  ef() && !t.signal.aborted && e$(a ? "picture" : "pictureUpload")
                })
                .finally(() => {
                  ;((ez.current = null), ef() && eI(!1))
                })
            }),
            (ei[44] = er),
            (ei[45] = eZ),
            (ei[46] = e0),
            (ei[47] = ef),
            (ei[48] = ex),
            (ei[49] = eu),
            (ei[50] = $))
          : ($ = ei[50]),
        ei[51] !== eq || ei[52] !== em || ei[53] !== ex
          ? ((D = () => {
              eq ||
                ("saved" === ex.getSnapshot().saveState
                  ? em("/gpts")
                  : ex
                      .flush()
                      .then(() => em("/gpts"))
                      .catch(tA))
            }),
            (ei[51] = eq),
            (ei[52] = em),
            (ei[53] = ex),
            (ei[54] = D))
          : (D = ei[54]),
        ei[55] !== er || ei[56] !== eV || ei[57] !== eZ || ei[58] !== es || ei[59] !== eu
          ? ((L =
              es && null != eV && (eV.live_version ?? 0) > 0 && !eZ
                ? () => {
                    ;(0, j.qf)(eu, tp, { accountId: er, gizmoId: eV.id })
                  }
                : void 0),
            (ei[55] = er),
            (ei[56] = eV),
            (ei[57] = eZ),
            (ei[58] = es),
            (ei[59] = eu),
            (ei[60] = L))
          : (L = ei[60]),
        ei[61] !== er ||
        ei[62] !== eZ ||
        ei[63] !== e0 ||
        ei[64] !== ef ||
        ei[65] !== em ||
        ei[66] !== ex ||
        ei[67] !== eu
          ? ((Y = () => {
              e0 ||
                eZ ||
                (eE(!0),
                e$(null),
                ex
                  .flush()
                  .then((e) =>
                    (async function (e, t, a) {
                      e5(e, t, a)
                      let i = e.query.getData(e1, { accountId: t, gizmoId: a }),
                        r = { sharing: [{ type: "private" }] }
                      ;((null == i || (i.gizmo.live_version ?? 0) > 0) &&
                        ((i = await e.query.fetch(e1, { accountId: t, gizmoId: a })), e5(e, t, a)),
                        (i.gizmo.live_version ?? 0) > 0 && (r = e2(i.gizmo)))
                      let s = await eJ.Request.safePost("/gizmos/{gizmo_id}/promote", {
                        parameters: { path: { gizmo_id: a } },
                        requestBody: r,
                        additionalHeaders: { [eS.zBc]: t },
                        expectedErrorStatuses: [400, 401, 403, 404, 409],
                      })
                      if ((e4(e, t), null != s.error || null == s.resource))
                        throw Error(s.error ?? "gpt_promotion_failed")
                      return (
                        await e.queryClient.invalidateQueries({
                          queryKey: ["chatgpt-gizmos"],
                          predicate: ({ queryKey: e }) => "builder-draft" !== e[1],
                        }),
                        s.resource
                      )
                    })(eu, er, e.gizmo.id),
                  )
                  .then((e) => {
                    ef() && em((0, y.V9)(e.gizmo.short_url ?? e.gizmo.id))
                  })
                  .catch(() => {
                    ef() && e$("publish")
                  })
                  .finally(() => {
                    ef() && eE(!1)
                  }))
            }),
            (ei[61] = er),
            (ei[62] = eZ),
            (ei[63] = e0),
            (ei[64] = ef),
            (ei[65] = em),
            (ei[66] = ex),
            (ei[67] = eu),
            (ei[68] = Y))
          : (Y = ei[68]),
        ei[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = () => ez.current?.abort()), (ei[69] = H))
          : (H = ei[69]),
        ei[70] !== er ||
        ei[71] !== eZ ||
        ei[72] !== e9 ||
        ei[73] !== e0 ||
        ei[74] !== ef ||
        ei[75] !== ex ||
        ei[76] !== eu
          ? ((K = (e) => {
              if (e0 || eZ || e9 || null != ez.current) return
              let t = new AbortController()
              ;((ez.current = t),
                eG(!0),
                e$(null),
                (async () => {
                  let a = await ex.flush()
                  t.signal.throwIfAborted()
                  let i = a.project_file_limits?.max_file_limit
                  if (null != i && ex.getSnapshot().draft.files.length + e.length > i) return void e$("uploadLimit")
                  for (let i of e) {
                    t.signal.throwIfAborted()
                    let e = await (0, t_.T7)(eu, er, a.gizmo.id, i, t.signal),
                      r = ex.getSnapshot().draft
                    ;(ex.change(await (0, t_.gu)(eu, er, r, [e], t.signal)), await ex.flush())
                  }
                })()
                  .catch(() => {
                    ef() && !t.signal.aborted && e$("upload")
                  })
                  .finally(() => {
                    ;((ez.current = null), ef() && eG(!1))
                  }))
            }),
            (ei[70] = er),
            (ei[71] = eZ),
            (ei[72] = e9),
            (ei[73] = e0),
            (ei[74] = ef),
            (ei[75] = ex),
            (ei[76] = eu),
            (ei[77] = K))
          : (K = ei[77]),
        ei[78] !== tt
          ? ((X = (0, i.jsx)("p", { className: "whitespace-pre-line text-default", children: tt })),
            (ei[78] = tt),
            (ei[79] = X))
          : (X = ei[79]))
      let tn = eZ || eW || eT || eR || eq || e9
      ;(ei[80] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = () => eB.current?.abort()), (ei[80] = W))
        : (W = ei[80]),
        ei[81] !== er || ei[82] !== ex || ei[83] !== eu
          ? ((J = async (e, t, a) => {
              e$(null)
              let i = await ex.flush()
              t.throwIfAborted()
              let r = ex.getSnapshot().draft.files,
                s = a.filter((e) => !r.some((t) => t.file_id === e.id)),
                l = i.project_file_limits?.max_file_limit
              if (e.length + a.length > (0, m.mc)(eu) || (null != l && r.length + s.length + e.length > l))
                throw (e$("uploadLimit"), Error("gpt_builder_file_limit"))
              return (0, t_.Cl)(eu, er, i.gizmo.id, e, t)
            }),
            (ei[81] = er),
            (ei[82] = ex),
            (ei[83] = eu),
            (ei[84] = J))
          : (J = ei[84]),
        ei[85] !== er ||
        ei[86] !== ek ||
        ei[87] !== eA ||
        ei[88] !== eZ ||
        ei[89] !== e9 ||
        ei[90] !== ef ||
        ei[91] !== eq ||
        ei[92] !== eW ||
        ei[93] !== ex ||
        ei[94] !== eu ||
        ei[95] !== tt
          ? ((V = async (e, t, a, i) => {
              if (null != eB.current || eq || eZ || e9 || eW) return
              let r = new AbortController()
              return (
                (eB.current = r),
                eN(!0),
                e$(null),
                (async () => {
                  try {
                    var s
                    let l = ex.getSnapshot().draft,
                      n = t.filter((e) => !l.files.some((t) => t.file_id === e.id)).map(tw)
                    if (n.length > 0) {
                      let e = ex.getSnapshot().resource?.project_file_limits?.max_file_limit
                      if (null != e && l.files.length + n.length > e) return void e$("uploadLimit")
                      ex.change(await (0, t_.gu)(eu, er, l, n, r.signal))
                    }
                    await ex.flush()
                    let o = ex.getSnapshot()
                    eF.current = (0, eK.S)(eu, {
                      conversationId: eA,
                      prompt: e,
                      attachments: t,
                      model: i,
                      onAccepted: () => {
                        ;((eC.current = o.draft), a())
                      },
                      mode: { kind: "gizmo_magic_create", gizmo_id: o.resource?.gizmo.id, behavior_overrides: ek },
                      contextMessages: (function (e, t, a) {
                        let i = O(e),
                          r = O(t)
                        if (i === r) return []
                        let s = new Set(e.files.map((e) => e.file_id))
                        return [
                          {
                            id: (0, R.A)(),
                            author: { role: "system" },
                            content: {
                              content_type: "text",
                              parts: [
                                `${r}

The user changed these settings directly. Treat these fields, abilities, and files as the current GPT configuration. Do not call update_behavior yet; incorporate these changes in your next update_behavior call. Files absent from file_ids are no longer available to the GPT.`,
                              ],
                            },
                            status: "finished_successfully",
                            metadata: {
                              is_visually_hidden_from_conversation: !0,
                              attachments: t.files
                                .filter((e) => !s.has(e.file_id))
                                .slice(0, a)
                                .map((e) => ({ id: e.file_id, name: e.name, size: e.size })),
                            },
                          },
                        ]
                      })({ ...eC.current, files: [...eC.current.files, ...n] }, o.draft, (0, m.mc)(eu)),
                      initialAssistantMessage: tt,
                      startupSignal: r.signal,
                      isSubmissionCurrent: () => ef() && eu.get(u.chatGptAuthenticatedAccountId$) === er,
                    })
                    let c = await eF.current
                    if (!ef() || r.signal.aborted) return
                    if (c?.status !== "completed") return void e$("conversation")
                    let d = (function (e) {
                        let t,
                          a = {}
                        for (let i of e) {
                          if ("assistant" === i.author.role && "gizmo_editor.update_behavior" === i.recipient) {
                            let e = i.content,
                              t = []
                            for (let i of ("text" === e.content_type
                              ? (t = e.parts.filter((e) => "string" == typeof e))
                              : "code" === e.content_type && (t = [e.text]),
                            t))
                              try {
                                let e = G.safeParse(JSON.parse(i))
                                e.success &&
                                  (a = {
                                    name: e.data.name ?? a.name,
                                    description: e.data.description ?? a.description,
                                    context: e.data.context ?? a.context,
                                    prompt_starters: e.data.prompt_starters ?? a.prompt_starters,
                                    profile_pic_file_id: e.data.profile_pic_file_id ?? a.profile_pic_file_id,
                                  })
                              } catch {}
                          }
                          if ("tool" === i.author.role && "gizmo_editor.generate_profile_pic" === i.author.name) {
                            let e = (0, E.$8)(i).at(-1)
                            null != e && (t = (0, T.V2)(e.src) ?? void 0)
                          }
                        }
                        return (
                          (a.profile_pic_file_id = a.profile_pic_file_id ?? t),
                          Object.values(a).some((e) => void 0 !== e) ? a : void 0
                        )
                      })(c.messages),
                      p =
                        null == d
                          ? o.draft
                          : ((s = ex.getSnapshot().draft),
                            {
                              ...s,
                              instructions: d.context ?? s.instructions,
                              display: {
                                ...s.display,
                                name: d.name ?? s.display.name,
                                description: d.description ?? s.display.description,
                                prompt_starters: d.prompt_starters ?? s.display.prompt_starters,
                                profile_pic_id: d.profile_pic_file_id ?? s.display.profile_pic_id,
                                profile_picture_url:
                                  null == d.profile_pic_file_id ? s.display.profile_picture_url : void 0,
                              },
                            })
                    if (((eC.current = p), null != d)) {
                      let e
                      ;(null != d.profile_pic_file_id && eY(void 0), ex.change(p))
                      try {
                        e = await ex.flush()
                      } catch {
                        return
                      }
                      if (null != d.profile_pic_file_id)
                        try {
                          let t = await e3(eu, er, e.gizmo.id, d.profile_pic_file_id)
                          ef() && ex.getSnapshot().draft.display.profile_pic_id === d.profile_pic_file_id && eY(t)
                        } catch {
                          ef() && e$("picture")
                        }
                    }
                  } catch {
                    ef() && !r.signal.aborted && e$("conversation")
                  }
                })().finally(() => {
                  ;((eB.current = null), (eF.current = null), ef() && eN(!1))
                })
              )
            }),
            (ei[85] = er),
            (ei[86] = ek),
            (ei[87] = eA),
            (ei[88] = eZ),
            (ei[89] = e9),
            (ei[90] = ef),
            (ei[91] = eq),
            (ei[92] = eW),
            (ei[93] = ex),
            (ei[94] = eu),
            (ei[95] = tt),
            (ei[96] = V))
          : (V = ei[96]),
        ei[97] !== eA || ei[98] !== eP || ei[99] !== X || ei[100] !== tn || ei[101] !== J || ei[102] !== V
          ? ((Q = (0, i.jsx)(eX.L, {
              conversationId: eA,
              emptyState: X,
              disabled: tn,
              isSending: eP,
              onCancel: W,
              onUploadFiles: J,
              onSend: V,
            })),
            (ei[97] = eA),
            (ei[98] = eP),
            (ei[99] = X),
            (ei[100] = tn),
            (ei[101] = J),
            (ei[102] = V),
            (ei[103] = Q))
          : (Q = ei[103]),
        ei[104] !== eb
          ? ((Z = JSON.stringify({
              id: eb?.gizmo.id,
              instructions: eb?.gizmo.instructions,
              tools: eb?.tools.map(tj),
              files: eb?.files.map(tb),
              model: eb?.gizmo.default_model,
            })),
            (ei[104] = eb),
            (ei[105] = Z))
          : (Z = ei[105]))
      let to = eb?.gizmo.id,
        tc = eb?.gizmo.default_model ?? void 0,
        td = eZ || e0 || "saved" !== ej
      return (
        ei[106] !== er ||
        ei[107] !== ev.display.description ||
        ei[108] !== ev.display.name ||
        ei[109] !== eH ||
        ei[110] !== Z ||
        ei[111] !== to ||
        ei[112] !== tc ||
        ei[113] !== td
          ? ((ee = (0, i.jsx)(
              e8.M,
              {
                actionPreviewRef: eM,
                gizmoId: to,
                accountId: er,
                defaultModelSlug: tc,
                disabled: td,
                name: ev.display.name,
                description: ev.display.description,
                avatarUrl: eH,
              },
              Z,
            )),
            (ei[106] = er),
            (ei[107] = ev.display.description),
            (ei[108] = ev.display.name),
            (ei[109] = eH),
            (ei[110] = Z),
            (ei[111] = to),
            (ei[112] = tc),
            (ei[113] = td),
            (ei[114] = ee))
          : (ee = ei[114]),
        ei[115] !== eo ||
        ei[116] !== en ||
        ei[117] !== eZ ||
        ei[118] !== ev ||
        ei[119] !== e0 ||
        ei[120] !== eR ||
        ei[121] !== eq ||
        ei[122] !== eW ||
        ei[123] !== te ||
        ei[124] !== eH ||
        ei[125] !== ex.change ||
        ei[126] !== ex.subscribeToSaves ||
        ei[127] !== ew ||
        ei[128] !== ej ||
        ei[129] !== z ||
        ei[130] !== N ||
        ei[131] !== q ||
        ei[132] !== I ||
        ei[133] !== tr ||
        ei[134] !== ts ||
        ei[135] !== tl ||
        ei[136] !== U ||
        ei[137] !== $ ||
        ei[138] !== D ||
        ei[139] !== L ||
        ei[140] !== Y ||
        ei[141] !== K ||
        ei[142] !== Q ||
        ei[143] !== ee
          ? ((et = (0, i.jsx)("div", {
              className: "min-h-0 flex-1",
              children: (0, i.jsx)(eL, {
                draft: ev,
                onChange: ta,
                subscribeToSaves: ti,
                onValidateAction: z,
                onImportAction: N,
                onTestAction: q,
                savedActions: I,
                hasSavedDraft: tr,
                isPublished: ts,
                readOnly: eZ,
                defaultTab: tl,
                browsingAllowed: en,
                allowedActionDomains: eo,
                isBusy: e0,
                saveState: ej,
                saveError: ew,
                onRetrySave: U,
                magicCreateDisabled: eW,
                avatarUrl: eH,
                isUploadingProfilePicture: eq,
                onUploadProfilePicture: $,
                onBack: D,
                onShare: L,
                onPublish: Y,
                isUploadingFiles: eR,
                onCancelUploadFiles: H,
                maxKnowledgeFiles: te,
                onUploadFiles: K,
                conversation: Q,
                preview: ee,
              }),
            })),
            (ei[115] = eo),
            (ei[116] = en),
            (ei[117] = eZ),
            (ei[118] = ev),
            (ei[119] = e0),
            (ei[120] = eR),
            (ei[121] = eq),
            (ei[122] = eW),
            (ei[123] = te),
            (ei[124] = eH),
            (ei[125] = ex.change),
            (ei[126] = ex.subscribeToSaves),
            (ei[127] = ew),
            (ei[128] = ej),
            (ei[129] = z),
            (ei[130] = N),
            (ei[131] = q),
            (ei[132] = I),
            (ei[133] = tr),
            (ei[134] = ts),
            (ei[135] = tl),
            (ei[136] = U),
            (ei[137] = $),
            (ei[138] = D),
            (ei[139] = L),
            (ei[140] = Y),
            (ei[141] = K),
            (ei[142] = Q),
            (ei[143] = ee),
            (ei[144] = et))
          : (et = ei[144]),
        ei[145] !== B || ei[146] !== et || ei[147] !== w
          ? ((ea = (0, i.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [w, B, et] })),
            (ei[145] = B),
            (ei[146] = et),
            (ei[147] = w),
            (ei[148] = ea))
          : (ea = ei[148]),
        ea
      )
    }
    function tb(e) {
      let { file_id: t } = e
      return t
    }
    function tj(e) {
      let { type: t, settings: a, metadata: i } = e,
        r = "plugins_prototype" === t ? P.safeParse(i).data : null
      return { type: t, settings: a, metadata: r?.auth?.type === "none" ? { ...i, action_id: void 0 } : i }
    }
    function tw(e) {
      return { file_id: e.id, name: e.name, size: e.size, type: e.mimeType, location: "fs" }
    }
    function tA() {}
    function tS() {}
    function tk() {}
    function tM() {}
  },
  AOG7(e, t, a) {
    var i = a("QosV"),
      r = a("T0Rc"),
      s = a("UOa8"),
      l = a("rvFo"),
      n = a("kK7d"),
      o = a("GEsy"),
      c = a("eShZ")
    async function d(e, t, a, { includeProfilePhotos: i = !1, includeTotal: r, limit: s = 10 } = {}) {
      return (
        await n.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: s, offset: 0, query: t, include_profile_photos: i, include_total: r },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: d,
        C4: async function (e, t, a) {
          let i = t.trim().toLowerCase(),
            r = await d(e, i, a)
          return r.find((e) => e.email?.trim().toLowerCase() === i)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            c,
            d,
            u,
            p,
            m,
            g = (0, i.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeMemberCounts: h } = a,
            f = void 0 !== h && h,
            { accountId: _, authMethod: y } = (0, s.As)()
          g[2] !== e ? ((c = e.trim()), (g[2] = e), (g[3] = c)) : (c = g[3])
          let x = c,
            v = (0, o.o)(x, 150)
          ;(g[4] !== f ? ((d = f ? ["member-counts"] : []), (g[4] = f), (g[5] = d)) : (d = g[5]),
            g[6] !== _ || g[7] !== x || g[8] !== d
              ? ((u = ["workspace-groups", _, x, ...d]), (g[6] = _), (g[7] = x), (g[8] = d), (g[9] = u))
              : (u = g[9]))
          let b = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != _ && x.length > 0 && x === v
          return (
            g[10] !== _ || g[11] !== f || g[12] !== x
              ? ((p = async (e) => {
                  let { signal: t } = e
                  if (null == _) throw Error("account id is required")
                  return (
                    await n.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: _ },
                        query: { limit: 10, offset: 0, query: x, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (g[10] = _),
                (g[11] = f),
                (g[12] = x),
                (g[13] = p))
              : (p = g[13]),
            g[14] !== u || g[15] !== b || g[16] !== p
              ? ((m = {
                  queryKey: u,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: l.D.ONE_MINUTE,
                }),
                (g[14] = u),
                (g[15] = b),
                (g[16] = p),
                (g[17] = m))
              : (m = g[17]),
            (0, r.I)(m)
          )
        },
        Nv: function (e, t) {
          let a,
            n,
            c,
            u,
            p,
            m,
            g = (0, i.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeProfilePhotos: h } = a,
            f = void 0 !== h && h,
            { accountId: _, authMethod: y } = (0, s.As)()
          g[2] !== e ? ((n = e.trim()), (g[2] = e), (g[3] = n)) : (n = g[3])
          let x = n,
            v = (0, o.o)(x, 150)
          ;(g[4] !== f ? ((c = f ? ["profile-photos"] : []), (g[4] = f), (g[5] = c)) : (c = g[5]),
            g[6] !== _ || g[7] !== x || g[8] !== c
              ? ((u = ["workspace-users", _, x, ...c]), (g[6] = _), (g[7] = x), (g[8] = c), (g[9] = u))
              : (u = g[9]))
          let b = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != _ && x.length > 0 && x === v
          return (
            g[10] !== _ || g[11] !== f || g[12] !== x
              ? ((p = (e) => {
                  let { signal: t } = e
                  if (null == _) throw Error("account id is required")
                  return d(_, x, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (g[10] = _),
                (g[11] = f),
                (g[12] = x),
                (g[13] = p))
              : (p = g[13]),
            g[14] !== u || g[15] !== b || g[16] !== p
              ? ((m = {
                  queryKey: u,
                  enabled: b,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: l.D.ONE_MINUTE,
                }),
                (g[14] = u),
                (g[15] = b),
                (g[16] = p),
                (g[17] = m))
              : (m = g[17]),
            (0, r.I)(m)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await n.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof c.FetchError && 404 === e.status)) throw e
          }
          return d(e, t, a)
        },
      },
    )
  },
  aAsK(e, t, a) {
    var i = a("ABep"),
      r = a("QosV"),
      s = a("hwkA"),
      l = a("IUMq"),
      n = a("slpy"),
      o = a("on57"),
      c = a("oyxz"),
      d = a("bVeK"),
      u = a("GpIR")
    function p(e) {
      return e.stopPropagation()
    }
    a.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            a,
            m,
            g,
            h,
            f,
            _,
            y,
            x,
            v,
            b,
            j = (0, r.c)(48),
            {
              alignOffset: w,
              options: A,
              disabled: S,
              footer: k,
              indicatorVariant: M,
              renderLabel: C,
              mixed: B,
              opticallyAlign: F,
              removeLabel: z,
              sideOffset: P,
              size: N,
              variant: T,
              value: E,
              onChange: R,
              onRemoveAccess: G,
            } = e,
            O = void 0 !== S && S,
            q = void 0 === M ? "checkmark" : M,
            I = void 0 !== B && B,
            U = void 0 === T ? "default" : T,
            $ = void 0 === N ? "sm" : N
          "field" === U ? ($ = "xl") : "audienceReview" === U && ($ = "lg")
          let D = "audienceReview" === U && u.A.permission
          j[0] !== D ? ((t = (0, o.A)(D, "enabled:text-default")), (j[0] = D), (j[1] = t)) : (t = j[1])
          let L = "field" === U ? "outline" : "ghost",
            Y = "field" !== U,
            H = "inline" === U ? "2xs" : void 0
          ;(j[2] !== I || j[3] !== C || j[4] !== E
            ? ((a = I ? (0, i.jsx)(c.A, { id: "shareDialog.mixedRoles", defaultMessage: "Mixed" }) : C(E)),
              (j[2] = I),
              (j[3] = C),
              (j[4] = E),
              (j[5] = a))
            : (a = j[5]),
            j[6] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, i.jsx)(d.Aq_, {})), (j[6] = m)) : (m = j[6]),
            j[7] !== O ||
            j[8] !== F ||
            j[9] !== H ||
            j[10] !== a ||
            j[11] !== t ||
            j[12] !== L ||
            j[13] !== Y ||
            j[14] !== $
              ? ((g = (0, i.jsxs)(s.$, {
                  className: t,
                  color: "secondary",
                  variant: L,
                  size: $,
                  iconSize: "sm",
                  pill: Y,
                  gutterSize: H,
                  opticallyAlign: F,
                  disabled: O,
                  children: [a, m],
                })),
                (j[7] = O),
                (j[8] = F),
                (j[9] = H),
                (j[10] = a),
                (j[11] = t),
                (j[12] = L),
                (j[13] = Y),
                (j[14] = $),
                (j[15] = g))
              : (g = j[15]),
            j[16] !== O || j[17] !== g
              ? ((h = (0, i.jsx)(l.W.Trigger, { disabled: O, children: g })), (j[16] = O), (j[17] = g), (j[18] = h))
              : (h = j[18]))
          let K = I ? "" : E
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
            j[22] !== O || j[23] !== q || j[24] !== A || j[25] !== C)
          ) {
            let e
            ;(j[27] !== O || j[28] !== q || j[29] !== C
              ? ((e = (e) =>
                  (0, i.jsx)(
                    n.m,
                    {
                      content: e.tooltipText,
                      children: (0, i.jsx)(l.W.RadioItem, {
                        className: "hover:before:opacity-100",
                        indicatorVariant: q,
                        value: e.value,
                        disabled: O || e.disabled,
                        "aria-label": e.ariaLabel,
                        "aria-description": e.description,
                        children: (0, i.jsxs)("span", {
                          className: "flex max-w-64 min-w-0 flex-1 flex-col",
                          children: [
                            (0, i.jsx)("span", { children: C(e.value) }),
                            null == e.description
                              ? null
                              : (0, i.jsx)("span", {
                                  className: "text-sm text-pretty whitespace-normal text-secondary",
                                  children: e.description,
                                }),
                          ],
                        }),
                      }),
                    },
                    e.value,
                  )),
                (j[27] = O),
                (j[28] = q),
                (j[29] = C),
                (j[30] = e))
              : (e = j[30]),
              (_ = A.map(e)),
              (j[22] = O),
              (j[23] = q),
              (j[24] = A),
              (j[25] = C),
              (j[26] = _))
          } else _ = j[26]
          return (
            j[31] !== K || j[32] !== f || j[33] !== _
              ? ((y = (0, i.jsx)(l.W.RadioGroup, { value: K, onChange: f, children: _ })),
                (j[31] = K),
                (j[32] = f),
                (j[33] = _),
                (j[34] = y))
              : (y = j[34]),
            j[35] !== O || j[36] !== G || j[37] !== z
              ? ((x =
                  null == G
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(l.W.Separator, {}),
                          (0, i.jsx)(l.W.Item, { color: "danger", disabled: O, onSelect: G, children: z }),
                        ],
                      })),
                (j[35] = O),
                (j[36] = G),
                (j[37] = z),
                (j[38] = x))
              : (x = j[38]),
            j[39] !== w || j[40] !== k || j[41] !== P || j[42] !== y || j[43] !== x
              ? ((v = (0, i.jsxs)(l.W.Content, {
                  align: "end",
                  alignOffset: w,
                  minWidth: "auto",
                  sideOffset: P,
                  children: [y, x, k],
                })),
                (j[39] = w),
                (j[40] = k),
                (j[41] = P),
                (j[42] = y),
                (j[43] = x),
                (j[44] = v))
              : (v = j[44]),
            j[45] !== h || j[46] !== v
              ? ((b = (0, i.jsx)("span", {
                  className: "inline-flex",
                  role: "presentation",
                  onMouseDown: p,
                  children: (0, i.jsxs)(l.W, { children: [h, v] }),
                })),
                (j[45] = h),
                (j[46] = v),
                (j[47] = b))
              : (b = j[47]),
            b
          )
        },
      },
    )
  },
  dS6X(e, t, a) {
    var i = a("UP8A"),
      r = a("v5Cs"),
      s = TypeError
    e.exports = function (e) {
      if (i(e)) return e
      throw new s(r(e) + " is not a function")
    }
  },
  aRew(e, t, a) {
    var i = a("dBSE"),
      r = String,
      s = TypeError
    e.exports = function (e) {
      if (i(e)) return e
      throw new s(r(e) + " is not an object")
    }
  },
  M4Rs(e, t, a) {
    var i = a("lbJk"),
      r = i({}.toString),
      s = i("".slice)
    e.exports = function (e) {
      return s(r(e), 8, -1)
    }
  },
  Szsi(e) {
    e.exports = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
    }
  },
  FgJi(e, t, a) {
    var i = a("vlAc"),
      r = Object.defineProperty
    e.exports = function (e, t) {
      try {
        r(i, e, { value: t, configurable: !0, writable: !0 })
      } catch (a) {
        i[e] = t
      }
      return t
    }
  },
  ritu(e, t, a) {
    e.exports = !a("MGoG")(function () {
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
  be5s(e, t, a) {
    var i = a("vlAc"),
      r = a("dBSE"),
      s = i.document,
      l = r(s) && r(s.createElement)
    e.exports = function (e) {
      return l ? s.createElement(e) : {}
    }
  },
  RpEq(e, t, a) {
    var i = a("vlAc").navigator,
      r = i && i.userAgent
    e.exports = r ? String(r) : ""
  },
  cOJA(e, t, a) {
    var i,
      r,
      s = a("vlAc"),
      l = a("RpEq"),
      n = s.process,
      o = s.Deno,
      c = (n && n.versions) || (o && o.version),
      d = c && c.v8
    ;(d && (r = (i = d.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
      !r && l && (!(i = l.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = l.match(/Chrome\/(\d+)/)) && (r = +i[1]),
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
  kRXN(e, t, a) {
    e.exports = !a("MGoG")(function () {
      var e = function () {}.bind()
      return "function" != typeof e || e.hasOwnProperty("prototype")
    })
  },
  z7cn(e, t, a) {
    var i = a("kRXN"),
      r = Function.prototype.call
    e.exports = i
      ? r.bind(r)
      : function () {
          return r.apply(r, arguments)
        }
  },
  lbJk(e, t, a) {
    var i = a("kRXN"),
      r = Function.prototype,
      s = r.call,
      l = i && r.bind.bind(s, s)
    e.exports = i
      ? l
      : function (e) {
          return function () {
            return s.apply(e, arguments)
          }
        }
  },
  lcaZ(e, t, a) {
    var i = a("vlAc"),
      r = a("UP8A")
    e.exports = function (e, t) {
      var a
      return arguments.length < 2 ? (r((a = i[e])) ? a : void 0) : i[e] && i[e][t]
    }
  },
  Dg3G(e, t, a) {
    var i = a("dS6X"),
      r = a("sFRP")
    e.exports = function (e, t) {
      var a = e[t]
      return r(a) ? void 0 : i(a)
    }
  },
  vlAc(e, t, a) {
    var i = function (e) {
      return e && e.Math === Math && e
    }
    e.exports =
      i("object" == typeof globalThis && globalThis) ||
      i("object" == typeof window && window) ||
      i("object" == typeof self && self) ||
      i("object" == typeof a.g && a.g) ||
      i("object" == typeof this && this) ||
      (function () {
        return this
      })() ||
      Function("return this")()
  },
  QKnk(e, t, a) {
    var i = a("lbJk"),
      r = a("fuV1"),
      s = i({}.hasOwnProperty)
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return s(r(e), t)
      }
  },
  QqHG(e, t, a) {
    var i = a("ritu"),
      r = a("MGoG"),
      s = a("be5s")
    e.exports =
      !i &&
      !r(function () {
        return (
          7 !==
          Object.defineProperty(s("div"), "a", {
            get: function () {
              return 7
            },
          }).a
        )
      })
  },
  EzAB(e, t, a) {
    var i = a("lbJk"),
      r = a("MGoG"),
      s = a("M4Rs"),
      l = Object,
      n = i("".split)
    e.exports = r(function () {
      return !l("z").propertyIsEnumerable(0)
    })
      ? function (e) {
          return "String" === s(e) ? n(e, "") : l(e)
        }
      : l
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
  dBSE(e, t, a) {
    var i = a("UP8A")
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : i(e)
    }
  },
  kPrk(e) {
    e.exports = !1
  },
  vJHk(e, t, a) {
    var i = a("lcaZ"),
      r = a("UP8A"),
      s = a("RmRk"),
      l = a("pyD8"),
      n = Object
    e.exports = l
      ? function (e) {
          return "symbol" == typeof e
        }
      : function (e) {
          var t = i("Symbol")
          return r(t) && s(t.prototype, n(e))
        }
  },
  oP4q(e, t, a) {
    var i = a("ritu"),
      r = a("QqHG"),
      s = a("Q5Uw"),
      l = a("aRew"),
      n = a("Quqj"),
      o = TypeError,
      c = Object.defineProperty,
      d = Object.getOwnPropertyDescriptor,
      u = "enumerable",
      p = "configurable",
      m = "writable"
    t.f = i
      ? s
        ? function (e, t, a) {
            if (
              (l(e), (t = n(t)), l(a), "function" == typeof e && "prototype" === t && "value" in a && m in a && !a[m])
            ) {
              var i = d(e, t)
              i &&
                i[m] &&
                ((e[t] = a.value),
                (a = { configurable: p in a ? a[p] : i[p], enumerable: u in a ? a[u] : i[u], writable: !1 }))
            }
            return c(e, t, a)
          }
        : c
      : function (e, t, a) {
          if ((l(e), (t = n(t)), l(a), r))
            try {
              return c(e, t, a)
            } catch (e) {}
          if ("get" in a || "set" in a) throw new o("Accessors not supported")
          return ("value" in a && (e[t] = a.value), e)
        }
  },
  aNGg(e, t, a) {
    var i = a("ritu"),
      r = a("z7cn"),
      s = a("cyXn"),
      l = a("Szsi"),
      n = a("MV5a"),
      o = a("Quqj"),
      c = a("QKnk"),
      d = a("QqHG"),
      u = Object.getOwnPropertyDescriptor
    t.f = i
      ? u
      : function (e, t) {
          if (((e = n(e)), (t = o(t)), d))
            try {
              return u(e, t)
            } catch (e) {}
          if (c(e, t)) return l(!r(s.f, e, t), e[t])
        }
  },
  RmRk(e, t, a) {
    e.exports = a("lbJk")({}.isPrototypeOf)
  },
  cyXn(e, t) {
    var a = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor
    t.f =
      i && !a.call({ 1: 2 }, 1)
        ? function (e) {
            var t = i(this, e)
            return !!t && t.enumerable
          }
        : a
  },
  mGId(e, t, a) {
    var i = a("z7cn"),
      r = a("UP8A"),
      s = a("dBSE"),
      l = TypeError
    e.exports = function (e, t) {
      var a, n
      if (
        ("string" === t && r((a = e.toString)) && !s((n = i(a, e)))) ||
        (r((a = e.valueOf)) && !s((n = i(a, e)))) ||
        ("string" !== t && r((a = e.toString)) && !s((n = i(a, e))))
      )
        return n
      throw new l("Can't convert object to primitive value")
    }
  },
  Rim5(e, t, a) {
    var i = a("sFRP"),
      r = TypeError
    e.exports = function (e) {
      if (i(e)) throw new r("Can't call method on " + e)
      return e
    }
  },
  r60i(e, t, a) {
    var i = a("kPrk"),
      r = a("vlAc"),
      s = a("FgJi"),
      l = "__core-js_shared__",
      n = (e.exports = r[l] || s(l, {}))
    ;(n.versions || (n.versions = [])).push({
      version: "3.46.0",
      mode: i ? "pure" : "global",
      copyright: "\xa9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
      license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
      source: "https://github.com/zloirock/core-js",
    })
  },
  AGIv(e, t, a) {
    var i = a("r60i")
    e.exports = function (e, t) {
      return i[e] || (i[e] = t || {})
    }
  },
  mPJy(e, t, a) {
    var i = a("cOJA"),
      r = a("MGoG"),
      s = a("vlAc").String
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        var e = Symbol("symbol detection")
        return !s(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && i && i < 41)
      })
  },
  MV5a(e, t, a) {
    var i = a("EzAB"),
      r = a("Rim5")
    e.exports = function (e) {
      return i(r(e))
    }
  },
  fuV1(e, t, a) {
    var i = a("Rim5"),
      r = Object
    e.exports = function (e) {
      return r(i(e))
    }
  },
  NuUD(e, t, a) {
    var i = a("z7cn"),
      r = a("dBSE"),
      s = a("vJHk"),
      l = a("Dg3G"),
      n = a("mGId"),
      o = a("eUVA"),
      c = TypeError,
      d = o("toPrimitive")
    e.exports = function (e, t) {
      if (!r(e) || s(e)) return e
      var a,
        o = l(e, d)
      if (o) {
        if ((void 0 === t && (t = "default"), !r((a = i(o, e, t))) || s(a))) return a
        throw new c("Can't convert object to primitive value")
      }
      return (void 0 === t && (t = "number"), n(e, t))
    }
  },
  Quqj(e, t, a) {
    var i = a("NuUD"),
      r = a("vJHk")
    e.exports = function (e) {
      var t = i(e, "string")
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
  JZZs(e, t, a) {
    var i = a("lbJk"),
      r = 0,
      s = Math.random(),
      l = i((1.1).toString)
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + l(++r + s, 36)
    }
  },
  pyD8(e, t, a) {
    e.exports = a("mPJy") && !Symbol.sham && "symbol" == typeof Symbol.iterator
  },
  Q5Uw(e, t, a) {
    var i = a("ritu"),
      r = a("MGoG")
    e.exports =
      i &&
      r(function () {
        return 42 !== Object.defineProperty(function () {}, "prototype", { value: 42, writable: !1 }).prototype
      })
  },
  eUVA(e, t, a) {
    var i = a("vlAc"),
      r = a("AGIv"),
      s = a("QKnk"),
      l = a("JZZs"),
      n = a("mPJy"),
      o = a("pyD8"),
      c = i.Symbol,
      d = r("wks"),
      u = o ? c.for || c : (c && c.withoutSetter) || l
    e.exports = function (e) {
      return (s(d, e) || (d[e] = n && s(c, e) ? c[e] : u("Symbol." + e)), d[e])
    }
  },
}
//# sourceMappingURL=750100.a0e08077cb.js.map
