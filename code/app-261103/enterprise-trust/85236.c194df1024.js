/*! LICENSE: 85236.c194df1024.js.LICENSE.txt */
export const __rspack_esm_ids = [85236]
export const __webpack_modules__ = {
  DzLn(e, t, n) {
    var i = n("SMzt"),
      o = n("F5h5"),
      r = n("m8yg")
    let a = i.Rg.CODEX,
      s = [
        "editor.background",
        "sideBar.background",
        "editorGroupHeader.tabsBackground",
        "panel.background",
        "activityBar.background",
      ],
      l = ["editor.foreground", "sideBarTitle.foreground", "sideBar.foreground", "foreground"],
      d = [
        "activityBarBadge.background",
        "textLink.foreground",
        "editorCursor.foreground",
        "focusBorder",
        "button.background",
        "activityBar.activeBorder",
      ],
      c = [
        "gitDecoration.addedResourceForeground",
        "gitDecoration.untrackedResourceForeground",
        "terminal.ansiGreen",
        "terminal.ansiBrightGreen",
      ],
      u = ["gitDecoration.deletedResourceForeground", "terminal.ansiRed", "terminal.ansiBrightRed"],
      f = ["charts.purple", "terminal.ansiMagenta", "terminal.ansiBrightMagenta"],
      p = { max: 170, min: 80 },
      m = { max: 15, min: 345 },
      h = { max: 320, min: 210 },
      g = new Intl.Collator(void 0, { sensitivity: "base" }),
      v = {
        "ayu-dark": () => n.e(33247).then(n.bind(n, "eNz5")),
        "catppuccin-latte": () => n.e(571858).then(n.bind(n, "R3uT")),
        "catppuccin-mocha": () => n.e(402734).then(n.bind(n, "ed7L")),
        "dark-plus": () => n.e(574308).then(n.bind(n, "Ql0N")),
        dracula: () => n.e(21885).then(n.bind(n, "FUKF")),
        "everforest-dark": () => n.e(773959).then(n.bind(n, "dzPG")),
        "everforest-light": () => n.e(818495).then(n.bind(n, "UQgL")),
        "github-dark-default": () => n.e(370905).then(n.bind(n, "dOHO")),
        "github-light-default": () => n.e(722017).then(n.bind(n, "vosZ")),
        "gruvbox-dark-medium": () => n.e(631953).then(n.bind(n, "J8sX")),
        "gruvbox-light-medium": () => n.e(416361).then(n.bind(n, "Vizg")),
        "light-plus": () => n.e(442836).then(n.bind(n, "Vs6L")),
        "material-theme-darker": () => n.e(939684).then(n.bind(n, "rhk3")),
        monokai: () => n.e(53709).then(n.bind(n, "GBId")),
        "night-owl": () => n.e(100450).then(n.bind(n, "DOYB")),
        nord: () => n.e(301746).then(n.bind(n, "zkIA")),
        "one-dark-pro": () => n.e(391298).then(n.bind(n, "jIEz")),
        "one-light": () => n.e(225750).then(n.bind(n, "EiaD")),
        "rose-pine-dawn": () => n.e(327938).then(n.bind(n, "iUJo")),
        "rose-pine-moon": () => n.e(757265).then(n.bind(n, "MRBZ")),
        "solarized-dark": () => n.e(854189).then(n.bind(n, "YQJc")),
        "solarized-light": () => n.e(899573).then(n.bind(n, "JJ80")),
        "tokyo-night": () => n.e(110734).then(n.bind(n, "QD5o")),
      },
      x = [
        _(i.Rg.AYU, { dark: "ayu-dark" }),
        _(i.Rg.CATPPUCCIN, { dark: "catppuccin-mocha", light: "catppuccin-latte" }),
        j(i.Rg.ABSOLUTELY, {
          dark: { load: () => n.e(220243).then(n.t.bind(n, "L0sD", 19)), name: "Absolutely Dark" },
          light: { load: () => n.e(607291).then(n.t.bind(n, "i0wK", 19)), name: "Absolutely Light" },
        }),
        j(i.Rg.CODEX, {
          dark: { load: () => n.e(366084).then(n.t.bind(n, "i4nh", 19)), name: "Codex Dark" },
          light: { load: () => n.e(61942).then(n.t.bind(n, "sEmq", 19)), name: "Codex Light" },
        }),
        _(i.Rg.DRACULA, { dark: "dracula" }),
        _(i.Rg.EVERFOREST, { dark: "everforest-dark", light: "everforest-light" }),
        _(i.Rg.GITHUB, { dark: "github-dark-default", light: "github-light-default" }),
        _(i.Rg.GRUVBOX, { dark: "gruvbox-dark-medium", light: "gruvbox-light-medium" }),
        j(i.Rg.LINEAR, {
          dark: { load: () => n.e(101912).then(n.t.bind(n, "Aup8", 19)), name: "Linear Dark" },
          light: { load: () => n.e(583762).then(n.t.bind(n, "Zmpt", 19)), name: "Linear Light" },
        }),
        j(i.Rg.LOBSTER, { dark: { load: () => n.e(233122).then(n.t.bind(n, "Ouzr", 19)), name: "Lobster Dark" } }),
        _(i.Rg.MATERIAL, { dark: "material-theme-darker" }),
        j(i.Rg.MATRIX, { dark: { load: () => n.e(894220).then(n.t.bind(n, "t8qm", 19)), name: "Matrix Dark" } }),
        _(i.Rg.MONOKAI, { dark: "monokai" }),
        _(i.Rg.NIGHT_OWL, { dark: "night-owl" }),
        _(i.Rg.NORD, { dark: "nord" }),
        j(i.Rg.NOTION, {
          dark: { load: () => n.e(1444).then(n.t.bind(n, "PNJE", 19)), name: "Notion Dark" },
          light: { load: () => n.e(802582).then(n.t.bind(n, "GQSi", 19)), name: "Notion Light" },
        }),
        j(i.Rg.OG, { dark: { load: () => n.e(797075).then(n.t.bind(n, "CABk", 19)), name: "OG Dark" } }),
        j(i.Rg.OSCURANGE, { dark: { load: () => n.e(660933).then(n.t.bind(n, "xrtt", 19)), name: "Oscurange" } }),
        _(i.Rg.ONE, { dark: "one-dark-pro", light: "one-light" }),
        j(i.Rg.PROOF, { light: { load: () => n.e(848341).then(n.t.bind(n, "l9FY", 19)), name: "Proof Light" } }),
        j(i.Rg.RAYCAST, {
          dark: { load: () => n.e(720712).then(n.t.bind(n, "NRWZ", 19)), name: "Raycast Dark" },
          light: { load: () => n.e(323106).then(n.t.bind(n, "Aa5z", 19)), name: "Raycast Light" },
        }),
        _(i.Rg.ROSE_PINE, { dark: "rose-pine-moon", light: "rose-pine-dawn" }),
        j(i.Rg.SENTRY, { dark: { load: () => n.e(929734).then(n.t.bind(n, "ddRp", 19)), name: "Sentry Dark" } }),
        _(i.Rg.SOLARIZED, { dark: "solarized-dark", light: "solarized-light" }),
        _(i.Rg.TOKYO_NIGHT, { dark: "tokyo-night" }),
        j(i.Rg.TEMPLE, { dark: { load: () => n.e(872908).then(n.t.bind(n, "bzAW", 19)), name: "Temple Dark" } }),
        j(i.Rg.VERCEL, {
          dark: { load: () => n.e(820950).then(n.t.bind(n, "aE4H", 19)), name: "Vercel Dark" },
          light: { load: () => n.e(3528).then(n.t.bind(n, "wyj1", 19)), name: "Vercel Light" },
        }),
        _(i.Rg.VSCODE_PLUS, { dark: "dark-plus", light: "light-plus" }),
        j(i.Rg.XCODE, {
          dark: { load: () => n.e(617562).then(n.t.bind(n, "nao7", 19)), name: "Xcode Dark" },
          light: { load: () => n.e(600788).then(n.t.bind(n, "W6Nn", 19)), name: "Xcode Light" },
        }),
      ],
      y = x.map((e) => e.id)
    function b(e, t) {
      let n = S(t),
        i = n.find((t) => t.id === e)
      return i || (n.find((e) => e.id === a) ?? n[0] ?? x[0])
    }
    function w(e, t) {
      let n = b(e, t).registrationByVariant[t]
      if (null == n) throw Error(`Missing ${t} code theme registration`)
      return n
    }
    function S(e) {
      return x.filter((t) => null == e || i.Mj[t.id].variants.some((t) => t === e))
    }
    function _(e, t) {
      let n = t.dark,
        i = t.light
      return j(e, {
        dark: null == n ? void 0 : { load: () => v[n](), name: n },
        light: null == i ? void 0 : { load: () => v[i](), name: i },
      })
    }
    function j(e, t) {
      let n = {},
        o = t.dark,
        r = t.light
      return (
        null != o && (n.dark = k(o.name, "dark", o.load)),
        null != r && (n.light = k(r.name, "light", r.load)),
        { id: e, label: i.Mj[e].label, registrationByVariant: n }
      )
    }
    function k(e, t, n) {
      let i = null,
        r = async () => (
          null == i &&
            (i = n()
              .then((e) => ("object" == typeof e && null != e && "default" in e ? e.default : e))
              .catch((e) => {
                throw ((i = null), e)
              })),
          i
        )
      return {
        load: r,
        loadAppThemeSeed: () =>
          r().then((e) => {
            var n, i, r, a, g, v, x, y, b
            let w, S, _, j, k
            return (
              (y =
                ((n = e),
                (i = t),
                (w = o.W[i]),
                (S = C(n.colors, s) ?? w.surface),
                (_ = C(n.colors, l) ?? w.ink),
                {
                  accent: (j =
                    (function (e, t, n) {
                      let i
                      for (let i of d) {
                        let o = M(e.colors?.[i], { minimumAlpha: 0.45, minimumChromaticRange: 24 })
                        if (null != o && !F(o, t) && !F(o, n)) return o
                      }
                      let o = -1
                      for (let r of A(e)) {
                        let e = M(r.settings?.foreground, { minimumAlpha: 0.45, minimumChromaticRange: 24 })
                        if (null == e || F(e, t) || F(e, n)) continue
                        let a = P(e, t, n)
                        a > o && ((i = e), (o = a))
                      }
                      return i
                    })(n, S, _) ?? w.accent),
                  ink: _,
                  semanticColors:
                    ((r = n),
                    (a = S),
                    (g = _),
                    (v = j),
                    (x = i),
                    (k = o.W[x]),
                    {
                      diffAdded: C(r.colors, c) ?? T(r, a, g, p, 125) ?? k.semanticColors.diffAdded,
                      diffRemoved: C(r.colors, u) ?? T(r, a, g, m, 0) ?? k.semanticColors.diffRemoved,
                      skill: C(r.colors, f) ?? T(r, a, g, h, 265) ?? (F(v, a) || F(v, g) ? k.semanticColors.skill : v),
                    }),
                  surface: S,
                })),
              null == (b = e.chromeTheme)
                ? y
                : {
                    ...y,
                    ...b,
                    fonts: null == b.fonts ? y.fonts : { ...y.fonts, ...b.fonts },
                    semanticColors:
                      null == b.semanticColors ? y.semanticColors : { ...y.semanticColors, ...b.semanticColors },
                  }
            )
          }),
        name: e,
      }
    }
    function C(e, t) {
      if (null != e)
        for (let n of t) {
          let t = M(e[n])
          if (null != t) return t
        }
    }
    function A(e) {
      return [...(e.tokenColors ?? []), ...(e.settings ?? [])]
    }
    function T(e, t, n, i, o) {
      let r,
        a = -1
      for (let d of (function (e) {
        let t = Object.values(e.colors ?? {}),
          n = A(e).map((e) => e.settings?.foreground),
          i = new Set()
        for (let e of [...t, ...n]) {
          let t = M(e, { minimumAlpha: 0.45, minimumChromaticRange: 24 })
          null != t && i.add(t)
        }
        return [...i]
      })(e)) {
        var s, l
        if (F(d, t) || F(d, n)) continue
        let e = I(d)
        if (null == e) continue
        let c = (function (e) {
          let t = e.red / 255,
            n = e.green / 255,
            i = e.blue / 255,
            o = Math.max(t, n, i),
            r = o - Math.min(t, n, i)
          return 0 === r
            ? null
            : ((o === t ? (((n - i) / r) % 6) * 60 : o === n ? ((i - t) / r + 2) * 60 : ((t - n) / r + 4) * 60) + 360) %
                360
        })(e)
        if (
          null == c ||
          ((s = c), (l = i).min <= l.max ? !(s >= l.min) || !(s <= l.max) : !(s >= l.min) && !(s <= l.max))
        )
          continue
        let u =
          P(d, t, n) -
          2 *
            (function (e, t) {
              let n = Math.abs(e - t)
              return Math.min(n, 360 - n)
            })(c, o)
        u > a && ((r = d), (a = u))
      }
      return r
    }
    function M(e, t) {
      let n = I(e)
      if (null == n) return
      let { minimumAlpha: i = 0.98, minimumChromaticRange: o = 0 } = t ?? {}
      if (!(n.alpha < i) && !(D(n) < o)) {
        var r
        return (
          (r = n),
          `#${r.red.toString(16).padStart(2, "0")}${r.green.toString(16).padStart(2, "0")}${r.blue.toString(16).padStart(2, "0")}`
        )
      }
    }
    function I(e) {
      if (null == e) return
      let t = e.trim()
      if (/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(t))
        return {
          alpha: Number.parseInt(9 === t.length ? t.slice(7, 9) : "ff", 16) / 255,
          blue: Number.parseInt(t.slice(5, 7), 16),
          green: Number.parseInt(t.slice(3, 5), 16),
          red: Number.parseInt(t.slice(1, 3), 16),
        }
    }
    function F(e, t) {
      let n = I(e),
        i = I(t)
      return null != n && null != i && 42 > N(n, i)
    }
    function P(e, t, n) {
      let i = I(e),
        o = I(t),
        r = I(n)
      return null == i || null == o || null == r ? 0 : D(i) + N(i, o) / 4 + N(i, r) / 4
    }
    function N(e, t) {
      return Math.sqrt((e.red - t.red) ** 2 + (e.green - t.green) ** 2 + (e.blue - t.blue) ** 2)
    }
    function D(e) {
      return Math.max(e.red, e.green, e.blue) - Math.min(e.red, e.green, e.blue)
    }
    n.d(
      t,
      {},
      {
        DM: function (e) {
          return S(e).sort((e, t) => g.compare(e.label, t.label))
        },
        EM: async function (e, t, n) {
          return "browser" === n && (null == e || e === i.Rg.CODEX)
            ? r.A[t]
            : {
                ...(await w(e, t).loadAppThemeSeed()),
                accentSource: "electron" === n && (null == e || e === i.Rg.CODEX) ? "chatgpt" : "custom",
              }
        },
        I9: function () {
          return x.flatMap((e) => Object.values(e.registrationByVariant)).filter((e) => null != e)
        },
        _C: function (e) {
          return y.some((t) => t === e)
        },
        aD: b,
        oW: w,
      },
    )
  },
  j1Su(e, t, n) {
    var i = n("OeLR"),
      o = n("swDA"),
      r = n("ASxG")
    let a = r.custom(h),
      s = r.boolean(),
      l = r.array(r.string()),
      d = r.enum(["allow", "deny"]),
      c = r.enum(["turn", "thread"]),
      u = a.transform(function (e) {
        return {
          access: g(e.access, d),
          downloads: g(e.downloads, d),
          uploads: g(e.uploads, d),
          fullCdpAccess: g(e.full_cdp_access, d),
          autoReview: g(e.auto_review, d),
          persistentApproval: g(e.persistent_approval, s),
          accessApprovalLifetime: g(e.access_approval_lifetime, c),
        }
      }),
      f = a.transform(function (e) {
        return {
          extension: null,
          allowWebmcp: g(e.allow_webmcp, s),
          allowHistoryAccess: g(e.allow_history_access, s),
          disableAutoReview: g(e.disable_auto_review, s),
          allowGlobalPersistentApproval: g(e.allow_global_persistent_approval, s),
          defaultOriginPolicy: g(e.default_origin_policy, u),
          origins: g(e.origins, v(u)),
        }
      }),
      p = a.transform(function (e) {
        let t = g(e.allowed_domains, l),
          n = g(e.denied_domains, l),
          i = g(e.domains, v(d))
        return (
          null != i && (null != t || null != n) && x(),
          {
            enabled: g(e.enabled, s),
            httpPort: null,
            socksPort: null,
            allowUpstreamProxy: g(e.allow_upstream_proxy, s),
            dangerouslyAllowNonLoopbackProxy: null,
            dangerouslyAllowAllUnixSockets: null,
            unixSockets: null,
            allowUnixSockets: null,
            allowLocalBinding: g(e.allow_local_binding, s),
            domains: i,
            reviewDomains: g(e.review_domains, l),
            managedAllowedDomainsOnly: g(e.managed_allowed_domains_only, s),
            allowedDomains: t,
            deniedDomains: n,
          }
        )
      })
    function m(e) {
      return (
        void 0 !== e.features && void 0 !== e.feature_requirements && x(),
        {
          modelProvider: null,
          modelProviders: null,
          allowedLoginMethods: null,
          cliAuthCredentialsStore: null,
          chatgptBaseUrl: null,
          additionalDeveloperInstructions: null,
          allowedApprovalPolicies: null,
          allowedApprovalsReviewers: null,
          allowedSandboxModes: null,
          allowedWindowsSandboxImplementations: null,
          allowedPermissionProfiles: null,
          defaultPermissions: null,
          allowedWebSearchModes: null,
          allowManagedHooksOnly: null,
          allowAppshots: null,
          allowRemoteControl: null,
          computerUse: null,
          inAppBrowser: null,
          hooks: null,
          enforceResidency: null,
          application: null,
          autoReview: null,
          models: null,
          sqliteHome: null,
          logDir: null,
          modelCatalogJson: null,
          checkForUpdateOnStartup: null,
          allowLoginShell: null,
          feedback: null,
          ...i.JF,
          allowBrowserAndComputerUse: g(e.allow_browser_and_computer_use, s),
          browserUse: g(e.browser_use, f),
          network: g(e.experimental_network, p),
          featureRequirements: g(void 0 === e.features ? e.feature_requirements : e.features, v(s)),
        }
      )
    }
    function h(e) {
      if (null == e || "object" != typeof e) return !1
      let t = Object.getPrototypeOf(e)
      return t === Object.prototype || null == t
    }
    function g(e, t) {
      return void 0 === e ? null : t.parse(e)
    }
    function v(e) {
      return a.transform((t) => Object.fromEntries(Object.entries(t).map(([t, n]) => [t, e.parse(n)])))
    }
    function x() {
      throw Error("Cloud requirements bundle is invalid.")
    }
    n.d(
      t,
      {},
      {
        f: function (e) {
          try {
            let t = e.requirements_toml?.enterprise_managed
            if (null == t || 0 === t.length) return { supportsIndependentSpeedModes: null, requirements: null }
            let n = {}
            for (let e of t.toReversed()) {
              let t = (0, o.qg)(e.contents, { integersAsBigInt: !0 })
              ;(m(t),
                (n = (function e(t, n) {
                  let i = new Map(Object.entries(t))
                  for (let [t, o] of Object.entries(n)) {
                    let n = i.get(t)
                    i.set(t, h(n) && h(o) ? e(n, o) : o)
                  }
                  return Object.fromEntries(i)
                })(n, t)))
            }
            return { supportsIndependentSpeedModes: null, requirements: m(n) }
          } catch {
            return x()
          }
        },
      },
    )
  },
  kPrN(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      r = n("hnHY"),
      a = n("DBCl"),
      s = n("zd8w"),
      l = n("c02V"),
      d = n("eLzw"),
      c = n("WEzr"),
      u = n("tgV8"),
      f = n("RxZZ"),
      p = n("leP5"),
      m = n("dDkj"),
      h = n("a6Zv")
    function g(e) {
      let t,
        n,
        i = (0, o.c)(4),
        { lineDiffType: a } = e,
        l = (0, r.iy)()
      return (
        i[0] !== a || i[1] !== l
          ? ((t = () => {
              if (null == l) return
              let e = l.getDiffRenderOptions()
              e.lineDiffType !== a && l.setRenderOptions({ ...e, lineDiffType: a })
            }),
            (n = [a, l]),
            (i[0] = a),
            (i[1] = l),
            (i[2] = t),
            (i[3] = n))
          : ((t = i[2]), (n = i[3])),
        (0, s.useEffect)(t, n),
        null
      )
    }
    ;(n("wIFP"),
      n.d(
        t,
        {},
        {
          FileDiff: function (e) {
            let t,
              n,
              r,
              s,
              v,
              x,
              y,
              b,
              w,
              S,
              _,
              j,
              k,
              C,
              A,
              T,
              M,
              I = (0, o.c)(45)
            I[0] !== e
              ? (({ alignCommentGutter: s, lineDiffType: t, onPostRenderInstance: n, ...r } = e),
                (I[0] = e),
                (I[1] = t),
                (I[2] = n),
                (I[3] = r),
                (I[4] = s))
              : ((t = I[1]), (n = I[2]), (r = I[3]), (s = I[4]))
            let F = void 0 !== s && s,
              P = (0, m.P)(),
              N = (0, m._)(P),
              D = (0, f.iK)(a.oKj.lightCodeThemeId),
              O = (0, f.iK)(a.oKj.darkCodeThemeId),
              E = (0, f.iK)(a.oKj.diffMarkerStyle)
            ;(0, h.Y)()
            let R = "symbols" === E
            I[5] !== N || I[6] !== O || I[7] !== D
              ? ((v = "light" === N ? (0, p.oW)(D, "light") : (0, p.oW)(O, "dark")),
                (I[5] = N),
                (I[6] = O),
                (I[7] = D),
                (I[8] = v))
              : (v = I[8])
            let B = v
            if (I[9] !== F || I[10] !== B || I[11] !== t || I[12] !== n || I[13] !== r || I[14] !== R) {
              let e
              ;((0, p.aD)(void 0),
                I[25] !== r.fileDiff ? ((e = (0, c._)(r.fileDiff)), (I[25] = r.fileDiff), (I[26] = e)) : (e = I[26]))
              let o = e
              ;((y = d.U),
                I[27] !== t
                  ? ((b = null == t ? null : (0, i.jsx)(g, { lineDiffType: t })), (I[27] = t), (I[28] = b))
                  : (b = I[28]),
                (x = l.FileDiffPresentation),
                (w = r),
                (S = o),
                (_ = F),
                (j = R ? "classic" : "bars"),
                (k = t),
                I[29] !== n
                  ? ((C = (e, t, i) => {
                      ;((0, u.O8)(e, t), n?.(e, t, i))
                    }),
                    (I[29] = n),
                    (I[30] = C))
                  : (C = I[30]),
                (A = B.name),
                (I[9] = F),
                (I[10] = B),
                (I[11] = t),
                (I[12] = n),
                (I[13] = r),
                (I[14] = R),
                (I[15] = x),
                (I[16] = y),
                (I[17] = b),
                (I[18] = w),
                (I[19] = S),
                (I[20] = _),
                (I[21] = j),
                (I[22] = k),
                (I[23] = C),
                (I[24] = A))
            } else
              ((x = I[15]),
                (y = I[16]),
                (b = I[17]),
                (w = I[18]),
                (S = I[19]),
                (_ = I[20]),
                (j = I[21]),
                (k = I[22]),
                (C = I[23]),
                (A = I[24]))
            return (
              I[31] !== x ||
              I[32] !== N ||
              I[33] !== w ||
              I[34] !== S ||
              I[35] !== _ ||
              I[36] !== j ||
              I[37] !== k ||
              I[38] !== C ||
              I[39] !== A
                ? ((T = (0, i.jsx)(x, {
                    ...w,
                    fileDiff: S,
                    alignCommentGutter: _,
                    diffIndicators: j,
                    lineDiffType: k,
                    onPostRenderInstance: C,
                    theme: A,
                    themeType: N,
                  })),
                  (I[31] = x),
                  (I[32] = N),
                  (I[33] = w),
                  (I[34] = S),
                  (I[35] = _),
                  (I[36] = j),
                  (I[37] = k),
                  (I[38] = C),
                  (I[39] = A),
                  (I[40] = T))
                : (T = I[40]),
              I[41] !== y || I[42] !== b || I[43] !== T
                ? ((M = (0, i.jsxs)(y, { children: [b, T] })), (I[41] = y), (I[42] = b), (I[43] = T), (I[44] = M))
                : (M = I[44]),
              M
            )
          },
        },
      ))
  },
  eLzw(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      r = n("hnHY"),
      a = n("zd8w")
    let s = (0, n("CSxw").$t)(),
      l = (0, a.lazy)(async () => ({ default: (await n.e(760303).then(n.bind(n, "D0kd"))).PierreHighlightProvider }))
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n = (0, o.c)(3),
            { children: d } = e,
            c = (0, r.iy)()
          return s
            ? d
            : (n[0] !== d || n[1] !== c
                ? ((t =
                    null == c
                      ? (0, i.jsx)(a.Suspense, { fallback: null, children: (0, i.jsx)(l, { children: d }) })
                      : d),
                  (n[0] = d),
                  (n[1] = c),
                  (n[2] = t))
                : (t = n[2]),
              t)
        },
      },
    )
  },
  tgV8(e, t, n) {
    var i = n("ihHn"),
      o = n("RemT")
    let r = new WeakMap()
    function a(e) {
      let t = e.querySelector(o.mZ)
      return null == t ? void 0 : r.get(t)
    }
    n.d(
      t,
      {},
      {
        KO: function (e, t, n) {
          let i = a(e),
            o = i?.getLinePosition(t, n)
          if (i?.top != null && null != o) return { height: o.height, top: i.top + o.top }
        },
        O8: function (e, t) {
          t instanceof i.V && r.set(e, t)
        },
        kQ: function (e, t) {
          a(e)?.setSelectedLines(t, { notify: !0 })
        },
      },
    )
  },
  mn0o(e, t, n) {
    n.d(t, { l: () => eO })
    var i = n("ABep"),
      o = n("QosV"),
      r = n("on57"),
      a = n("zTeN"),
      s = n("zd8w"),
      l = n("Wf1j"),
      d = n("oyxz"),
      c = n("eFn4"),
      u = n("ygO2"),
      f = n("bqtn"),
      p = n("GO7r"),
      m = n("zLIa"),
      h = n("BSnr"),
      g = n("AWNZ"),
      v = n("ZEx5"),
      x = n("NxjN"),
      y = n("BPZJ"),
      b = n("SbKN"),
      w = n("SXhj"),
      S = n("rQvE"),
      _ = n("vw1I"),
      j = n("VrVA"),
      k = n("JNtf"),
      C = n("mUDD"),
      A = n("F0xz"),
      T = n("yvV6"),
      M = n("ZEpF")
    function I(e) {
      let t,
        n = (0, o.c)(3),
        r = (0, a.Ul)(M.H)
      return (
        n[0] !== r || n[1] !== e
          ? ((t = r ? (0, i.jsx)(F, { ...e }, e.disabled ? "readonly" : "editable") : null),
            (n[0] = r),
            (n[1] = e),
            (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    function F(e) {
      let t,
        n,
        r,
        a,
        c,
        f,
        m,
        h,
        x,
        y,
        b,
        w,
        S,
        _,
        M,
        I,
        F,
        P,
        N = (0, o.c)(51),
        { disabled: D, portals: O, onChange: E } = e,
        R = (0, l.A)(),
        [B, H] = (0, s.useState)(null),
        [V, z] = (0, s.useState)("")
      N[0] !== B || N[1] !== O
        ? ((t = j.ss.safeParse({ ...O, http_ports: B ?? [] })), (N[0] = B), (N[1] = O), (N[2] = t))
        : (t = N[2])
      let G = t
      N[3] !== G.success || N[4] !== V
        ? ((n = G.success && !V.trim()), (N[3] = G.success), (N[4] = V), (N[5] = n))
        : (n = N[5])
      let L = n
      N[6] !== O?.ssh
        ? ((r = function (e) {
            let t = Number(e)
            return /^\d+$/.test(e) && j.ss.safeParse({ ssh: O?.ssh, http_ports: [t] }).success ? t : null
          }),
          (N[6] = O?.ssh),
          (N[7] = r))
        : (r = N[7])
      let U = r
      ;(N[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(d.A, {
            id: "environmentSetup.ssh.title",
            defaultMessage: "SSH access",
            description: "Setting that enables SSH connections to a cloud environment",
          })),
          (c = (0, i.jsx)(d.A, {
            id: "environmentSetup.ssh.description",
            defaultMessage: "Allow SSH connections on port 22. Changes apply to new runtimes.",
            description: "Help for the cloud environment SSH toggle; changes take effect when a new runtime starts",
          })),
          (N[8] = a),
          (N[9] = c))
        : ((a = N[8]), (c = N[9])),
        N[10] !== R
          ? ((f = R.formatMessage({
              id: "environmentSetup.ssh.title",
              defaultMessage: "SSH access",
              description: "Setting that enables SSH connections to a cloud environment",
            })),
            (N[10] = R),
            (N[11] = f))
          : (f = N[11]))
      let q = O?.ssh === !0
      return (
        N[12] !== E || N[13] !== O
          ? ((m = (e) => E({ ...O, ssh: e })), (N[12] = E), (N[13] = O), (N[14] = m))
          : (m = N[14]),
        N[15] !== D || N[16] !== f || N[17] !== q || N[18] !== m
          ? ((h = (0, i.jsx)(g.ic, {
              className: "select-none",
              controlSizing: "content",
              variant: "featured",
              size: "compact",
              label: a,
              description: c,
              control: (0, i.jsx)(A.l, { ariaLabel: f, checked: q, disabled: D, onChange: m }),
            })),
            (N[15] = D),
            (N[16] = f),
            (N[17] = q),
            (N[18] = m),
            (N[19] = h))
          : (h = N[19]),
        N[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(d.A, {
              id: "environmentSetup.httpPortals.title",
              defaultMessage: "HTTP Previews",
              description: "Setting for HTTP services exposed through private cloud environment portal URLs",
            })),
            (N[20] = x))
          : (x = N[20]),
        N[21] !== R
          ? ((y = R.formatMessage({
              id: "environmentSetup.httpPortals.edit",
              defaultMessage: "Edit HTTP Preview ports",
              description: "Accessible label for opening the cloud environment HTTP ports editor",
            })),
            (N[21] = R),
            (N[22] = y))
          : (y = N[22]),
        N[23] !== O?.http_ports
          ? ((b = () => {
              ;(H(O?.http_ports ?? []), z(""))
            }),
            (N[23] = O?.http_ports),
            (N[24] = b))
          : (b = N[24]),
        N[25] === Symbol.for("react.memo_cache_sentinel") ? ((w = (0, i.jsx)(p.Npl, {})), (N[25] = w)) : (w = N[25]),
        N[26] !== D || N[27] !== y || N[28] !== b
          ? ((S = (0, i.jsx)(u.$, {
              "aria-label": y,
              color: "ghost",
              size: "icon",
              disabled: D,
              onClick: b,
              children: w,
            })),
            (N[26] = D),
            (N[27] = y),
            (N[28] = b),
            (N[29] = S))
          : (S = N[29]),
        N[30] !== O
          ? ((_ = O?.http_ports?.length
              ? O.http_ports.join(", ")
              : (0, i.jsx)(d.A, {
                  id: "environmentSetup.httpPortals.empty",
                  defaultMessage: "No HTTP ports",
                  description: "Summary when a cloud environment has no HTTP portal ports configured",
                })),
            (N[30] = O),
            (N[31] = _))
          : (_ = N[31]),
        N[32] !== S || N[33] !== _
          ? ((M = (0, i.jsx)(g.ic, {
              controlSizing: "content",
              variant: "featured",
              size: "compact",
              label: x,
              control: S,
              description: _,
            })),
            (N[32] = S),
            (N[33] = _),
            (N[34] = M))
          : (M = N[34]),
        N[35] !== M || N[36] !== h
          ? ((I = (0, i.jsxs)(v.t, { children: [h, M] })), (N[35] = M), (N[36] = h), (N[37] = I))
          : (I = N[37]),
        N[38] !== L ||
        N[39] !== D ||
        N[40] !== B ||
        N[41] !== R ||
        N[42] !== E ||
        N[43] !== U ||
        N[44] !== G.data ||
        N[45] !== G.success ||
        N[46] !== V
          ? ((F =
              null == B || D
                ? null
                : (0, i.jsx)(k.lG, {
                    open: !0,
                    onOpenChange: (e) => !e && H(null),
                    children: (0, i.jsxs)(C.R4, {
                      as: "form",
                      onSubmit: (e) => {
                        ;(e.preventDefault(), e.stopPropagation(), L && (E(G.data), H(null)))
                      },
                      children: [
                        (0, i.jsx)(C.OO, {
                          children: (0, i.jsx)(C.c7, {
                            title: (0, i.jsx)(k.L3, {
                              children: (0, i.jsx)(d.A, {
                                id: "environmentSetup.httpPortals.edit",
                                defaultMessage: "Edit HTTP Preview ports",
                                description: "Accessible label for opening the cloud environment HTTP ports editor",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsxs)(C.OO, {
                          children: [
                            (0, i.jsx)("p", {
                              children: (0, i.jsx)(d.A, {
                                id: "environmentSetup.httpPortals.accessHelp",
                                defaultMessage:
                                  "Only you can access these HTTP Previews. Changes apply to new runtimes.",
                                description:
                                  "Instructions for private HTTP portal ports in a cloud environment; port changes take effect when a new runtime starts",
                              }),
                            }),
                            (0, i.jsx)(T.G, {
                              entries: B,
                              value: V,
                              onChange: H,
                              onInputChange: z,
                              parseEntry: U,
                              errorFor: (e) => {
                                if (22 === Number(e) && /^\d+$/.test(e))
                                  return (0, i.jsx)(d.A, {
                                    id: "environmentSetup.httpPortals.sshPort",
                                    defaultMessage: "Port 22 is reserved for SSH",
                                    description:
                                      "Validation error when adding HTTP port 22, which is always reserved for SSH",
                                  })
                                let t = U(e)
                                return null == t
                                  ? (0, i.jsx)(d.A, {
                                      id: "environmentSetup.httpPortals.invalidPort",
                                      defaultMessage: "Enter a whole-number port from 1 to 65535",
                                      description: "Validation error for an invalid HTTP port number",
                                    })
                                  : B.includes(t)
                                    ? (0, i.jsx)(d.A, {
                                        id: "environmentSetup.httpPortals.duplicate",
                                        defaultMessage: "This port has already been added",
                                        description: "Validation error when adding a duplicate HTTP port number",
                                      })
                                    : null
                              },
                              label: R.formatMessage({
                                id: "environmentSetup.httpPortals.ports",
                                defaultMessage: "HTTP ports",
                                description: "Accessible label for entering HTTP port numbers",
                              }),
                              placeholder: R.formatMessage({
                                id: "environmentSetup.httpPortals.placeholder",
                                defaultMessage: "Add a port",
                                description: "Placeholder in the input for adding a new HTTP port to the environment",
                              }),
                              pendingHelp: (0, i.jsx)(d.A, {
                                id: "environmentSetup.httpPortals.addBeforeApply",
                                defaultMessage: "Press Enter to add this port before applying",
                                description: "Help text when an HTTP port has been typed but not added yet",
                              }),
                              children: B.map((e) =>
                                (0, i.jsx)(
                                  T.b,
                                  {
                                    value: e,
                                    removeLabel: R.formatMessage(
                                      {
                                        id: "environmentSetup.httpPortals.remove",
                                        defaultMessage: "Remove {port}",
                                        description: "Button removing an HTTP port from the list being edited",
                                      },
                                      { port: String(e) },
                                    ),
                                    onRemove: () => H(B.filter((t) => t !== e)),
                                  },
                                  e,
                                ),
                              ),
                            }),
                            G.success
                              ? null
                              : (0, i.jsx)("p", {
                                  className: "text-sm text-danger",
                                  role: "alert",
                                  children: (0, i.jsx)(d.A, {
                                    id: "environmentSetup.httpPortals.invalid",
                                    defaultMessage:
                                      "Use unique whole-number ports from 1 to 65535 and leave port 22 for SSH",
                                    description:
                                      "Validation error for invalid, duplicate or conflicting HTTP portal ports",
                                  }),
                                }),
                          ],
                        }),
                        (0, i.jsx)(C.OO, {
                          children: (0, i.jsxs)(C.Es, {
                            children: [
                              (0, i.jsx)(u.$, {
                                color: "secondary",
                                onClick: () => H(null),
                                children: (0, i.jsx)(d.A, {
                                  id: "environmentSetup.httpPortals.cancel",
                                  defaultMessage: "Cancel",
                                  description: "Discard pending edits to HTTP portal ports",
                                }),
                              }),
                              (0, i.jsx)(u.$, {
                                color: "primary",
                                type: "submit",
                                disabled: !L,
                                children: (0, i.jsx)(d.A, {
                                  id: "environmentSetup.httpPortals.apply",
                                  defaultMessage: "Apply",
                                  description: "Apply HTTP portal ports to the environment settings form before saving",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })),
            (N[38] = L),
            (N[39] = D),
            (N[40] = B),
            (N[41] = R),
            (N[42] = E),
            (N[43] = U),
            (N[44] = G.data),
            (N[45] = G.success),
            (N[46] = V),
            (N[47] = F))
          : (F = N[47]),
        N[48] !== I || N[49] !== F
          ? ((P = (0, i.jsxs)(i.Fragment, { children: [I, F] })), (N[48] = I), (N[49] = F), (N[50] = P))
          : (P = N[50]),
        P
      )
    }
    var P = n("ZtSy"),
      N = n("D7Ms"),
      D = n("SZCv"),
      O = n.n(D),
      E = n("SPnB")
    n("X1mr")
    var R = n("ReGc"),
      B = n("OWtl"),
      H = n("rvFo"),
      V = n("HFSu"),
      z = n("j1Su")
    let G = (0, a.un)(
        B.u,
        ({ get: e }) => {
          let t = e(E.PO)
          return t.authLoading ||
            "chatgpt" !== t.authMethod ||
            null == t.authenticatedAccountId ||
            null == t.authenticatedUserId
            ? null
            : { accountId: t.authenticatedAccountId, requestUserId: t.authenticatedUserId, userId: t.userId }
        },
        { isEqual: O() },
      ),
      L = (0, a.RD)(B.u, ({ get: e, scope: t }) => {
        let n = e(G)
        return {
          queryKey: ["cloud-environment-network-policy", n?.accountId, n?.requestUserId],
          queryFn:
            null == n
              ? N.hT
              : async ({ signal: e }) => {
                  var i, o
                  let r = { accountId: n.accountId, userId: n.requestUserId },
                    a = await Promise.all(
                      ["linux", "mac_os", "windows"].map(async (t) =>
                        (function (e) {
                          try {
                            let t = e.environment
                            if (null == t) return !1
                            if ("cloud" !== t.target.environment_type) return
                            let n = (0, z.f)(t).requirements?.network
                            if (null == n) return !1
                            let i =
                                null == n.domains
                                  ? n.allowedDomains
                                  : Object.entries(n.domains)
                                      .filter(([, e]) => "allow" === e)
                                      .map(([e]) => e),
                              o =
                                null == n.domains
                                  ? (n.deniedDomains?.length ?? 0) > 0
                                  : Object.values(n.domains).includes("deny")
                            return (
                              !1 === n.enabled ||
                              !1 === n.allowUpstreamProxy ||
                              !1 === n.allowLocalBinding ||
                              o ||
                              (!0 === n.managedAllowedDomainsOnly && !i?.some((e) => "*" === e.trim()))
                            )
                          } catch {
                            return
                          }
                        })(
                          await V.CodexRequest.safeGet("/wham/config/agent-bundle", {
                            parameters: { query: { environment_type: "cloud", environment_os: t } },
                            expectedIdentity: r,
                            signal: e,
                            retry: !1,
                          }),
                        ),
                      ),
                    )
                  if (!a.every((e) => !0 === e))
                    return { restricted: !a.every((e) => !1 === e) && void 0, settingsUrl: null }
                  let s = await V.CodexRequest.safeGet("/wham/config/agent-enterprise-managed", {
                      expectedIdentity: r,
                      signal: e,
                      retry: !1,
                    }).then(
                      (e) => !0 === e.delivery_enabled && e.capabilities?.can_view !== !1,
                      () => !1,
                    ),
                    l = null
                  return (
                    s &&
                      (l = await t.query.fetch(R.a).then(
                        (e) => null != e.chatGptDesktopAuthOrigin,
                        () => null,
                      )),
                    {
                      restricted: !0,
                      settingsUrl:
                        null == l
                          ? null
                          : ((i = n.accountId),
                            (o = l),
                            new URL(
                              `/workspace/${encodeURIComponent(i)}/agent-security?redirectfrom=chatgpt`,
                              o ? "https://admin.api.openai.org" : "https://admin.openai.com",
                            ).href),
                    }
                  )
                },
          staleTime: H.D.ONE_MINUTE,
          gcTime: 0,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          refetchInterval: H.D.ONE_MINUTE,
          retry: !1,
        }
      })
    function U(e) {
      let t,
        n = (0, o.c)(2),
        { configuration: r } = e,
        s = (0, a.Ul)(G),
        { data: l, isPending: c, isError: u, isPaused: f } = (0, a.Ul)(L)
      if (null == s || r.accountId !== s.accountId || r.userId !== s.userId || c || u || f || l?.restricted !== !0)
        return null
      let { settingsUrl: p } = l
      return (
        n[0] !== p
          ? ((t = (0, i.jsx)("p", {
              className: "text-sm text-secondary select-none",
              children:
                null != p
                  ? (0, i.jsx)(d.A, {
                      id: "environmentSetup.networkPolicy.withSettings",
                      defaultMessage:
                        "Your organization's <settings>Agent Security settings</settings> define network access restrictions which apply to this environment.",
                      description:
                        "Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking. Editing and publishing remain available. The settings tag links to Agent Security settings for authorized users.",
                      values: {
                        settings: (e) =>
                          (0, i.jsx)(P.G, {
                            className: "text-info",
                            href: p,
                            initiator: "external_link",
                            underline: "hover",
                            children: e,
                          }),
                      },
                    })
                  : (0, i.jsx)(d.A, {
                      id: "environmentSetup.networkPolicy.contactAdmin",
                      defaultMessage:
                        "Your organization's Agent Security settings define network access restrictions which apply to this environment. Contact an admin for details.",
                      description:
                        "Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking and the user cannot view Agent Security settings. Editing and publishing remain available.",
                    }),
            })),
            (n[0] = p),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var q = n("ogLr"),
      $ = n("T0Rc"),
      Z = n("mtDM"),
      K = n("CqQF"),
      W = n("GaA7"),
      Y = n("bIvi")
    function Q(e) {
      let t,
        n,
        r,
        a,
        s = (0, o.c)(11),
        { title: l, actions: d, children: c, "data-environment-section": u } = e
      return (
        s[0] !== l
          ? ((t = (0, i.jsx)("span", { className: "font-medium", children: l })), (s[0] = l), (s[1] = t))
          : (t = s[1]),
        s[2] !== d
          ? ((n = null == d ? null : (0, i.jsx)("div", { className: "flex shrink-0 items-center gap-2", children: d })),
            (s[2] = d),
            (s[3] = n))
          : (n = s[3]),
        s[4] !== t || s[5] !== n
          ? ((r = (0, i.jsxs)("div", {
              className: "flex min-h-7.5 items-center justify-between gap-2 text-base select-none",
              children: [t, n],
            })),
            (s[4] = t),
            (s[5] = n),
            (s[6] = r))
          : (r = s[6]),
        s[7] !== c || s[8] !== u || s[9] !== r
          ? ((a = (0, i.jsxs)("section", {
              className: "flex flex-col gap-2 border-t border-subtle pt-2.5 first:border-0 first:pt-0",
              "data-environment-section": u,
              children: [r, c],
            })),
            (s[7] = c),
            (s[8] = u),
            (s[9] = r),
            (s[10] = a))
          : (a = s[10]),
        a
      )
    }
    function X(e) {
      let t,
        n,
        a,
        s,
        l,
        d,
        c,
        u = (0, o.c)(20),
        { icon: f, compactIcon: p, name: m, provider: h, actions: g, children: v } = e,
        x = void 0 !== p && p,
        y = x ? "gap-2.5" : "gap-2"
      u[0] !== y ? ((t = (0, r.A)("flex min-h-7.5 items-center text-base", y)), (u[0] = y), (u[1] = t)) : (t = u[1])
      let b = x ? "size-4" : "size-6"
      return (
        u[2] !== b
          ? ((n = (0, r.A)("flex shrink-0 items-center justify-center", b)), (u[2] = b), (u[3] = n))
          : (n = u[3]),
        u[4] !== f || u[5] !== n
          ? ((a = (0, i.jsx)("span", { className: n, children: f })), (u[4] = f), (u[5] = n), (u[6] = a))
          : (a = u[6]),
        u[7] !== m
          ? ((s = (0, i.jsx)("div", { className: "min-w-0 flex-1 truncate", children: m })), (u[7] = m), (u[8] = s))
          : (s = u[8]),
        u[9] !== h
          ? ((l =
              null == h
                ? null
                : (0, i.jsx)("span", {
                    className: "max-w-1/2 min-w-0 truncate text-secondary select-none",
                    children: h,
                  })),
            (u[9] = h),
            (u[10] = l))
          : (l = u[10]),
        u[11] !== g || u[12] !== t || u[13] !== a || u[14] !== s || u[15] !== l
          ? ((d = (0, i.jsxs)("div", { className: t, children: [a, s, l, g] })),
            (u[11] = g),
            (u[12] = t),
            (u[13] = a),
            (u[14] = s),
            (u[15] = l),
            (u[16] = d))
          : (d = u[16]),
        u[17] !== v || u[18] !== d
          ? ((c = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-2", children: [d, v] })),
            (u[17] = v),
            (u[18] = d),
            (u[19] = c))
          : (c = u[19]),
        c
      )
    }
    var J = n("slpy"),
      ee = n("AH8M"),
      et = n("JQE9")
    let en = (0, n("nkTT").a)({
      name: "microsoft-logo-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        visualBounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#F35325",
            bounds: { x: 3.25, y: 3.25, width: 8, height: 8 },
            wideGamut: "color(display-p3 0.9529 0.3255 0.1451)",
          },
          {
            role: "fixed",
            color: "#81BC06",
            bounds: { x: 12.75, y: 3.25, width: 8, height: 8 },
            wideGamut: "color(display-p3 0.5059 0.7373 0.0235)",
          },
          {
            role: "fixed",
            color: "#05A6F0",
            bounds: { x: 3.25, y: 12.75, width: 8, height: 8 },
            wideGamut: "color(display-p3 0.0196 0.6510 0.9412)",
          },
          {
            role: "fixed",
            color: "#FFBA08",
            bounds: { x: 12.75, y: 12.75, width: 8, height: 8 },
            wideGamut: "color(display-p3 1.0000 0.7294 0.0314)",
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.25, y: 3.25, width: 17.5, height: 17.5 },
        center: { x: 12, y: 12 },
        insets: { top: 3.25, right: 3.25, bottom: 3.25, left: 3.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M3.25 3.25H11.25V11.25H3.25V3.25Z" fill="#F35325"/> <path d="M12.75 3.25H20.75V11.25H12.75V3.25Z" fill="#81BC06"/> <path d="M3.25 12.75H11.25V20.75H3.25V12.75Z" fill="#05A6F0"/> <path d="M12.75 12.75H20.75V20.75H12.75V12.75Z" fill="#FFBA08"/>',
    })
    var ei = n("TjgH"),
      eo = n("HOLv"),
      er = n("K489")
    function ea(e) {
      let t,
        n,
        r,
        a,
        c,
        u,
        h,
        g,
        v,
        x,
        y,
        b,
        w,
        S,
        _,
        j,
        k,
        C,
        A,
        T,
        M,
        I,
        F,
        P,
        N = (0, o.c)(68),
        {
          connection: D,
          requirement: O,
          issue: E,
          isReadOnly: R,
          isLoading: B,
          isSupported: H,
          onEdit: V,
          onAliasChange: z,
          onDetach: G,
        } = e,
        L = (0, l.A)(),
        U = (0, s.useId)(),
        [q, $] = (0, s.useState)(!1),
        Z = (0, s.useRef)(null),
        K = D?.display_name ?? O.connection_id
      N[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            azure: {
              icon: (0, i.jsx)(eo.I, { asset: en }),
              label: (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.oic.providerAzure",
                defaultMessage: "Azure",
                description: "Microsoft Azure cloud provider preset",
              }),
            },
            aws: {
              icon: (0, i.jsx)(eo.I, { asset: ee.k }),
              label: (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.oic.providerAws",
                defaultMessage: "AWS",
                description: "Amazon Web Services cloud provider preset",
              }),
            },
            gcp: {
              icon: (0, i.jsx)(eo.I, { asset: et.U }),
              label: (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.oic.providerGcp",
                defaultMessage: "Google Cloud",
                description: "Google Cloud provider preset",
              }),
            },
          }),
          (N[0] = t))
        : (t = N[0])
      let W = t,
        Y = null == D ? null : W[D.provider_kind]
      N[1] !== Y ? ((n = null == Y ? (0, i.jsx)(p.iNn, {}) : Y.icon), (N[1] = Y), (N[2] = n)) : (n = N[2])
      let Q = Y?.label
      ;(N[3] !== K
        ? ((r = (0, i.jsx)("span", { className: "min-w-0 truncate", children: K })), (N[3] = K), (N[4] = r))
        : (r = N[4]),
        N[5] !== D || N[6] !== H
          ? ((a =
              null == D || H
                ? null
                : (0, i.jsx)(ei.E, {
                    variant: "outline",
                    children: (0, i.jsx)(d.A, {
                      id: "restricted.environmentSetup.oic.unsupportedAttachment",
                      defaultMessage: "Not available",
                      description:
                        "Indicates that the environment's current attachment capabilities do not include this connection's provider",
                    }),
                  })),
            (N[5] = D),
            (N[6] = H),
            (N[7] = a))
          : (a = N[7]),
        N[8] !== r || N[9] !== a
          ? ((c = (0, i.jsxs)("div", { className: "flex min-w-0 flex-wrap items-center gap-2", children: [r, a] })),
            (N[8] = r),
            (N[9] = a),
            (N[10] = c))
          : (c = N[10]),
        N[11] !== q
          ? ((u = (e) => {
              q && e.preventDefault()
            }),
            (N[11] = q),
            (N[12] = u))
          : (u = N[12]),
        N[13] !== L || N[14] !== K
          ? ((h = L.formatMessage(
              {
                id: "restricted.environmentSetup.oic.connectionActions",
                defaultMessage: "Actions for {name}",
                description: "Menu with edit, environment alias, and remove actions for this cloud connection",
              },
              { name: K },
            )),
            (N[13] = L),
            (N[14] = K),
            (N[15] = h))
          : (h = N[15]),
        N[16] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, i.jsx)(p.l0Y, {})), (N[16] = g)) : (g = N[16]),
        N[17] !== R || N[18] !== h
          ? ((v = (0, i.jsx)(es, {
              ref: Z,
              className:
                "not-disabled:not-aria-disabled:hover:text-default not-disabled:not-aria-disabled:focus-visible:text-default data-[state=open]:text-default",
              color: "ghostSecondary",
              size: "icon",
              disabled: R,
              "aria-label": h,
              children: g,
            })),
            (N[17] = R),
            (N[18] = h),
            (N[19] = v))
          : (v = N[19]))
      let J = B || D?.can_edit !== !0
      return (
        N[20] !== L || N[21] !== K
          ? ((x = L.formatMessage(
              {
                id: "restricted.environmentSetup.oic.editConnection",
                defaultMessage: "Edit {name}",
                description: "Loads saved outbound identity configuration for an authorized workspace member to edit",
              },
              { name: K },
            )),
            (N[20] = L),
            (N[21] = K),
            (N[22] = x))
          : (x = N[22]),
        N[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.oic.editConnectionAction",
              defaultMessage: "Edit connection",
              description: "Edit the shared cloud identity connection configuration",
            })),
            (N[23] = y))
          : (y = N[23]),
        N[24] !== V || N[25] !== J || N[26] !== x
          ? ((b = (0, i.jsx)(f.ms.Item, { disabled: J, "aria-label": x, onSelect: V, children: y })),
            (N[24] = V),
            (N[25] = J),
            (N[26] = x),
            (N[27] = b))
          : (b = N[27]),
        N[28] !== L || N[29] !== K
          ? ((w = L.formatMessage(
              {
                id: "restricted.environmentSetup.oic.aliasLabel",
                defaultMessage: "Environment alias for {name}",
                description: "Label for the stable per-environment connection alias",
              },
              { name: K },
            )),
            (N[28] = L),
            (N[29] = K),
            (N[30] = w))
          : (w = N[30]),
        N[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = () => $(!0)),
            (_ = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.oic.editAliasAction",
              defaultMessage: "Edit environment alias",
              description: "Change only this environment's alias for the identity connection",
            })),
            (N[31] = S),
            (N[32] = _))
          : ((S = N[31]), (_ = N[32])),
        N[33] !== w
          ? ((j = (0, i.jsx)(f.ms.Item, { "aria-label": w, onSelect: S, children: _ })), (N[33] = w), (N[34] = j))
          : (j = N[34]),
        N[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, i.jsx)(f.ms.Separator, {})), (N[35] = k))
          : (k = N[35]),
        N[36] !== L || N[37] !== K
          ? ((C = L.formatMessage(
              {
                id: "restricted.environmentSetup.oic.detachConnection",
                defaultMessage: "Detach {name}",
                description: "Removes the named outbound identity connection from this environment only",
              },
              { name: K },
            )),
            (N[36] = L),
            (N[37] = K),
            (N[38] = C))
          : (C = N[38]),
        N[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.oic.removeAttachmentAction",
              defaultMessage: "Remove from environment",
              description: "Remove this environment attachment without deleting the shared connection",
            })),
            (N[39] = A))
          : (A = N[39]),
        N[40] !== G || N[41] !== C
          ? ((T = (0, i.jsx)(f.ms.Item, { color: "danger", "aria-label": C, onSelect: G, children: A })),
            (N[40] = G),
            (N[41] = C),
            (N[42] = T))
          : (T = N[42]),
        N[43] !== v || N[44] !== b || N[45] !== j || N[46] !== T || N[47] !== u
          ? ((M = (0, i.jsxs)(f.Ab, { align: "end", onCloseAutoFocus: u, triggerButton: v, children: [b, j, k, T] })),
            (N[43] = v),
            (N[44] = b),
            (N[45] = j),
            (N[46] = T),
            (N[47] = u),
            (N[48] = M))
          : (M = N[48]),
        N[49] !== q ||
        N[50] !== U ||
        N[51] !== L ||
        N[52] !== R ||
        N[53] !== E ||
        N[54] !== K ||
        N[55] !== z ||
        N[56] !== O
          ? ((I =
              q || null != E
                ? (0, i.jsx)(m.pd, {
                    "aria-describedby": null == E ? void 0 : U,
                    "aria-invalid": null != E,
                    "data-environment-invalid": null != E,
                    "aria-label": L.formatMessage(
                      {
                        id: "restricted.environmentSetup.oic.aliasLabel",
                        defaultMessage: "Environment alias for {name}",
                        description: "Label for the stable per-environment connection alias",
                      },
                      { name: K },
                    ),
                    autoFocus: null == E,
                    onBlur: () => $(!1),
                    onKeyDown: (e) => {
                      ;("Enter" === e.key || "Escape" === e.key) &&
                        (e.preventDefault(), e.stopPropagation(), $(!1), Z.current?.focus())
                    },
                    required: !0,
                    pattern: "[A-Z][A-Z0-9_]{0,63}",
                    maxLength: 64,
                    disabled: R,
                    value: O.alias,
                    onChange: (e) => z(e.target.value),
                  })
                : null),
            (N[49] = q),
            (N[50] = U),
            (N[51] = L),
            (N[52] = R),
            (N[53] = E),
            (N[54] = K),
            (N[55] = z),
            (N[56] = O),
            (N[57] = I))
          : (I = N[57]),
        N[58] !== U || N[59] !== E
          ? ((F = null == E ? null : (0, i.jsx)("span", { id: U, children: (0, i.jsx)(er.o, { issue: E }) })),
            (N[58] = U),
            (N[59] = E),
            (N[60] = F))
          : (F = N[60]),
        N[61] !== n || N[62] !== M || N[63] !== I || N[64] !== F || N[65] !== Q || N[66] !== c
          ? ((P = (0, i.jsxs)(X, { icon: n, provider: Q, name: c, actions: M, children: [I, F] })),
            (N[61] = n),
            (N[62] = M),
            (N[63] = I),
            (N[64] = F),
            (N[65] = Q),
            (N[66] = c),
            (N[67] = P))
          : (P = N[67]),
        P
      )
    }
    function es(e) {
      let t,
        n,
        r = (0, o.c)(7),
        a = e["aria-label"],
        s = e.disabled || !0 === e["aria-expanded"],
        l = !0 === e["aria-expanded"] ? "open" : "closed"
      return (
        r[0] !== e || r[1] !== l
          ? ((t = (0, i.jsx)(u.$, { "data-state": l, ...e })), (r[0] = e), (r[1] = l), (r[2] = t))
          : (t = r[2]),
        r[3] !== a || r[4] !== s || r[5] !== t
          ? ((n = (0, i.jsx)(J.m, { content: a, disabled: s, children: t })),
            (r[3] = a),
            (r[4] = s),
            (r[5] = t),
            (r[6] = n))
          : (n = r[6]),
        n
      )
    }
    var el = n("JN4M"),
      ed = n("R3Dy")
    let ec = (0, s.lazy)(async () => ({
      default: (await n.e(717279).then(n.bind(n, "tBxa"))).OutboundIdentityConnectionDialog,
    }))
    function eu(e) {
      let t,
        n,
        r = (0, o.c)(15),
        { configuration: a, requirements: s, isReadOnly: l, onChange: c, issues: u, showHeading: f } = e
      r[0] !== u ? ((t = void 0 === u ? [] : u), (r[0] = u), (r[1] = t)) : (t = r[1])
      let p = t,
        m = void 0 === f || f
      if (null == a || null == s) {
        let e, t, n
        return (
          r[2] !== m
            ? ((e = m
                ? (0, i.jsx)(d.A, {
                    id: "restricted.environmentSetup.oic.title",
                    defaultMessage: "OIDC",
                    description:
                      "Heading for OIDC connections that authenticate a cloud environment to external systems",
                  })
                : null),
              (r[2] = m),
              (r[3] = e))
            : (e = r[3]),
          r[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("p", {
                className: "text-sm text-secondary select-none",
                children: (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.oic.cloudRequired",
                  defaultMessage: "Open a saved cloud environment to configure its connections",
                  description:
                    "Explains why no connection controls are available before the server-backed configuration loads",
                }),
              })),
              (r[4] = t))
            : (t = r[4]),
          r[5] !== e ? ((n = (0, i.jsx)(Q, { title: e, children: t })), (r[5] = e), (r[6] = n)) : (n = r[6]),
          n
        )
      }
      let h = `${a.accountId}:${a.userId}:${a.configId}`
      return (
        r[7] !== a || r[8] !== l || r[9] !== p || r[10] !== c || r[11] !== s || r[12] !== m || r[13] !== h
          ? ((n = (0, i.jsx)(
              ef,
              { configuration: a, requirements: s, issues: p, isReadOnly: l, onChange: c, showHeading: m },
              h,
            )),
            (r[7] = a),
            (r[8] = l),
            (r[9] = p),
            (r[10] = c),
            (r[11] = s),
            (r[12] = m),
            (r[13] = h),
            (r[14] = n))
          : (n = r[14]),
        n
      )
    }
    function ef(e) {
      let t,
        n,
        r,
        c,
        m,
        h,
        g,
        v,
        x,
        y,
        b,
        w,
        S,
        _,
        j,
        k,
        C,
        A,
        T,
        M,
        I,
        F,
        P,
        N,
        D,
        O,
        E,
        R,
        B,
        V,
        z,
        G,
        L,
        U = (0, o.c)(108),
        { configuration: q, requirements: X, isReadOnly: J, onChange: ee, issues: et, showHeading: en } = e,
        ei = (0, l.A)(),
        eo = W.appServices?.environmentConfigs,
        [er, es] = (0, s.useState)(null),
        [eu, ef] = (0, s.useState)(null),
        [ep, em] = (0, s.useState)(null),
        eh = (0, s.useRef)(null),
        eg = (0, s.useRef)(null),
        { data: ev, isPending: ex, isFetching: ey, isError: eb, refetch: ew } = (0, a._U)(el.h, q),
        eS = ev?.ok ? ev.data.items : void 0,
        e_ = ev?.ok ? (ev.data.capabilities?.attachment_provider_kinds ?? ["azure"]) : []
      ;(U[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            ;(eh.current?.abort(), eg.current?.abort())
          }),
          (U[0] = t))
        : (t = U[0]),
        U[1] !== J || U[2] !== X ? ((n = [J, X]), (U[1] = J), (U[2] = X), (U[3] = n)) : (n = U[3]),
        (0, s.useLayoutEffect)(t, n),
        U[4] !== X ? ((r = Z.Z.safeParse(X)), (U[4] = X), (U[5] = r)) : (r = U[5]))
      let ej = !r.success
      if (U[6] !== eS || U[7] !== X) {
        let e
        ;(U[9] !== eS
          ? ((e = (e) => {
              let { connection_id: t } = e
              return eS?.some((e) => e.connection_id === t) === !1 ? [t] : []
            }),
            (U[9] = eS),
            (U[10] = e))
          : (e = U[10]),
          (c = X.flatMap(e)),
          (U[6] = eS),
          (U[7] = X),
          (U[8] = c))
      } else c = U[8]
      let ek = c
      U[11] !== q.accountId || U[12] !== q.userId || U[13] !== ek
        ? ((m = ["outbound-identity-attachment-edit", q.accountId, q.userId, ek]),
          (U[11] = q.accountId),
          (U[12] = q.userId),
          (U[13] = ek),
          (U[14] = m))
        : (m = U[14])
      let eC = null != eo && !J && !ej && ek.length > 0
      ;(U[15] !== q.accountId || U[16] !== q.userId || U[17] !== ek
        ? ((h = () =>
            Promise.all(
              ek.map(async (e) => {
                let t = await eo?.requestOutboundIdentityConnection({
                  accountId: q.accountId,
                  userId: q.userId,
                  method: "GET",
                  connectionId: e,
                })
                return t?.ok && t.data.connection_id === e ? t.data : null
              }),
            )),
          (U[15] = q.accountId),
          (U[16] = q.userId),
          (U[17] = ek),
          (U[18] = h))
        : (h = U[18]),
        U[19] !== m || U[20] !== eC || U[21] !== h
          ? ((g = {
              queryKey: m,
              enabled: eC,
              staleTime: H.D.FIVE_SECONDS,
              refetchOnMount: "always",
              retry: !1,
              queryFn: h,
            }),
            (U[19] = m),
            (U[20] = eC),
            (U[21] = h),
            (U[22] = g))
          : (g = U[22]))
      let { data: eA, isFetching: eT, isError: eM, refetch: eI } = (0, $.I)(g),
        eF = !J && eu?.requirements === X && !eu.signal.aborted,
        eP = null
      if (J) {
        let e
        ;(U[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "environmentSetup.oic.add.readOnly",
              defaultMessage: "Connections cannot be changed while this environment is read-only",
              description: "Tooltip explaining why Add OIDC connection is disabled in a read-only cloud environment",
            })),
            (U[23] = e))
          : (e = U[23]),
          (eP = e))
      } else if (null == eo) {
        let e
        ;(U[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "environmentSetup.oic.add.unavailable",
              defaultMessage: "Connections are unavailable on this host",
              description:
                "Tooltip explaining why Add OIDC connection is disabled when the host does not support environment connections",
            })),
            (U[24] = e))
          : (e = U[24]),
          (eP = e))
      } else if (eF || ey) {
        let e
        ;(U[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "environmentSetup.oic.add.loading",
              defaultMessage: "Wait for connections to finish loading",
              description: "Tooltip explaining why Add OIDC connection is temporarily disabled while connections load",
            })),
            (U[25] = e))
          : (e = U[25]),
          (eP = e))
      }
      U[26] !== eA || U[27] !== eS || U[28] !== eM || U[29] !== eT || U[30] !== X
        ? ((v = (e) =>
            X.length < 16 &&
            X.every((t) => {
              let n =
                eS?.find((e) => e.connection_id === t.connection_id) ??
                (eT || eM ? void 0 : eA?.find((e) => e?.connection_id === t.connection_id))
              return null != n && ("azure" !== n.provider_kind || n.azure_client_id.toLowerCase() !== e.toLowerCase())
            })),
          (U[26] = eA),
          (U[27] = eS),
          (U[28] = eM),
          (U[29] = eT),
          (U[30] = X),
          (U[31] = v))
        : (v = U[31])
      let eN = v,
        eD = (e) =>
          !J &&
          !ej &&
          null != eS &&
          e_.includes(e.provider_kind) &&
          X.length < 16 &&
          !X.some((t) => {
            let { connection_id: n } = t
            return n === e.connection_id
          }) &&
          ("azure" !== e.provider_kind || eN(e.azure_client_id))
      U[32] !== ee || U[33] !== X
        ? ((x = (e) => {
            let t = e.provider_kind.toUpperCase(),
              n = t,
              i = 2
            for (; X.some((e) => e.alias === n);) n = `${t}_${i++}`
            ee([...X, { connection_id: e.connection_id, alias: n }])
          }),
          (U[32] = ee),
          (U[33] = X),
          (U[34] = x))
        : (x = U[34])
      let eO = x
      U[35] !== eO || U[36] !== eD
        ? ((y = (e) => {
            eD(e) && eO(e)
          }),
          (U[35] = eO),
          (U[36] = eD),
          (U[37] = y))
        : (y = U[37])
      let eE = (0, Y.K)(y)
      U[38] !== eE || U[39] !== q.accountId || U[40] !== q.userId || U[41] !== er || U[42] !== J
        ? ((b = async (e) => {
            if (null == eo || null == er || J) return { ok: !1, error: "unavailable" }
            let t = new AbortController()
            eh.current = t
            let { display_name: n, subject_template: i, additional_claims: o, include_actor_email: r } = e,
              a = await eo.requestOutboundIdentityConnection(
                null == er.connection
                  ? { accountId: q.accountId, userId: q.userId, method: "POST", body: e }
                  : {
                      accountId: q.accountId,
                      userId: q.userId,
                      method: "PATCH",
                      connectionId: er.connection.connection_id,
                      body: {
                        display_name: n,
                        subject_template: i,
                        additional_claims: o,
                        include_actor_email: r,
                        configuration_version: er.connection.configuration_version,
                      },
                    },
              )
            return a.ok
              ? a.data.provider_kind !== ("target" in e ? e.target.provider_kind : "azure")
                ? { ok: !1, error: "invalid-response" }
                : (null != er.connection || t.signal.aborted || eE(a.data), { ok: !0, data: a.data })
              : { ok: !1, error: a.error, status: a.status }
          }),
          (U[38] = eE),
          (U[39] = q.accountId),
          (U[40] = q.userId),
          (U[41] = er),
          (U[42] = J),
          (U[43] = b))
        : (b = U[43])
      let eR = b
      U[44] !== en
        ? ((w = en
            ? (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.oic.title",
                defaultMessage: "OIDC",
                description: "Heading for OIDC connections that authenticate a cloud environment to external systems",
              })
            : null),
          (U[44] = en),
          (U[45] = w))
        : (w = U[45])
      let eB = null != eP && void 0
      U[46] !== eP ? ((S = (0, i.jsx)(i.Fragment, { children: eP })), (U[46] = eP), (U[47] = S)) : (S = U[47])
      let eH = null == eP ? void 0 : 0,
        eV = null != eP
      ;(U[48] !== ei
        ? ((_ = ei.formatMessage({
            id: "restricted.environmentSetup.oic.addConnection",
            defaultMessage: "Add connection",
            description: "Choose an existing connection or create a real connection to attach",
          })),
          (U[48] = ei),
          (U[49] = _))
        : (_ = U[49]),
        U[50] === Symbol.for("react.memo_cache_sentinel") ? ((j = (0, i.jsx)(p.xFs, {})), (U[50] = j)) : (j = U[50]),
        U[51] !== _
          ? ((k = (0, i.jsx)(u.$, { color: "ghost", size: "icon", "aria-label": _, children: j })),
            (U[51] = _),
            (U[52] = k))
          : (k = U[52]))
      let ez = eS
        ?.filter(
          (e) =>
            !X.some((t) => {
              let { connection_id: n } = t
              return n === e.connection_id
            }),
        )
        .map((e) =>
          (0, i.jsx)(
            f.ms.Item,
            {
              disabled: ey || eb || !eD(e),
              focusableWhenDisabled: !e_.includes(e.provider_kind),
              tooltipText: e_.includes(e.provider_kind)
                ? void 0
                : ei.formatMessage({
                    id: "restricted.environmentSetup.oic.unsupportedProvider",
                    defaultMessage: "This provider is not available for this environment",
                    description:
                      "Explains that the environment's current attachment capabilities do not include this connection's provider",
                  }),
              onSelect: () => eO(e),
              children: e.display_name,
            },
            e.connection_id,
          ),
        )
      U[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = (0, i.jsx)(f.ms.Separator, {})), (U[53] = C))
        : (C = U[53])
      let eG = ey || eb || null == eS
      ;(U[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = () => es({ connection: null })),
          (T = (0, i.jsx)(d.A, {
            id: "restricted.environmentSetup.oic.createNew",
            defaultMessage: "Create connection…",
            description: "Opens the cloud provider presets for a new workspace-governed identity connection",
          })),
          (U[54] = A),
          (U[55] = T))
        : ((A = U[54]), (T = U[55])),
        U[56] !== eG
          ? ((M = (0, i.jsx)(f.ms.Item, { disabled: eG, onSelect: A, children: T })), (U[56] = eG), (U[57] = M))
          : (M = U[57]),
        U[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(f.ms.Separator, {})), (U[58] = I))
          : (I = U[58]),
        U[59] !== ek || U[60] !== ew || U[61] !== eI || U[62] !== ej
          ? ((F = () => {
              ;(em(null), ew(), !ej && ek.length > 0 && eI())
            }),
            (U[59] = ek),
            (U[60] = ew),
            (U[61] = eI),
            (U[62] = ej),
            (U[63] = F))
          : (F = U[63]),
        U[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.oic.reload",
              defaultMessage: "Reload connections",
              description: "Reload connections after a failure or an external change",
            })),
            (U[64] = P))
          : (P = U[64]),
        U[65] !== F
          ? ((N = (0, i.jsx)(f.ms.Item, { onSelect: F, children: P })), (U[65] = F), (U[66] = N))
          : (N = U[66]),
        U[67] !== eV || U[68] !== k || U[69] !== ez || U[70] !== M || U[71] !== N
          ? ((D = (0, i.jsxs)(f.Ab, {
              contentWidth: "menu",
              disabled: eV,
              triggerButton: k,
              children: [ez, C, M, I, N],
            })),
            (U[67] = eV),
            (U[68] = k),
            (U[69] = ez),
            (U[70] = M),
            (U[71] = N),
            (U[72] = D))
          : (D = U[72]),
        U[73] !== eH || U[74] !== D
          ? ((O = (0, i.jsx)("span", { tabIndex: eH, children: D })), (U[73] = eH), (U[74] = D), (U[75] = O))
          : (O = U[75]),
        U[76] !== eB || U[77] !== S || U[78] !== O
          ? ((E = (0, i.jsx)(K.m, { open: eB, tooltipContent: S, children: O })),
            (U[76] = eB),
            (U[77] = S),
            (U[78] = O),
            (U[79] = E))
          : (E = U[79]),
        U[80] !== ex
          ? ((R =
              ex && null != eo
                ? (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(d.A, {
                      id: "restricted.environmentSetup.oic.loading",
                      defaultMessage: "Loading connections…",
                      description: "Loading the workspace connection catalog",
                    }),
                  })
                : null),
            (U[80] = ex),
            (U[81] = R))
          : (R = U[81]),
        U[82] !== eM || U[83] !== eb
          ? ((B = eb || eM || null == eo ? (0, i.jsx)(ed.R, { error: { ok: !1, error: "unavailable" } }) : null),
            (U[82] = eM),
            (U[83] = eb),
            (U[84] = B))
          : (B = U[84]),
        U[85] !== ev || U[86] !== eb
          ? ((V = null == eo || eb || ev?.ok !== !1 ? null : (0, i.jsx)(ed.R, { error: ev })),
            (U[85] = ev),
            (U[86] = eb),
            (U[87] = V))
          : (V = U[87]),
        U[88] !== ep
          ? ((z = null == ep ? null : (0, i.jsx)(ed.R, { error: ep })), (U[88] = ep), (U[89] = z))
          : (z = U[89]))
      let eL = X.map((e, t) => {
        let n = et.find((e) => {
            let { field: n } = e
            return n === `connection-${t}`
          }),
          o =
            eS?.find((t) => {
              let { connection_id: n } = t
              return n === e.connection_id
            }) ?? eA?.find((t) => t?.connection_id === e.connection_id)
        return (0, i.jsx)(
          ea,
          {
            connection: o ?? void 0,
            requirement: e,
            issue: n,
            isReadOnly: J,
            isLoading: eF,
            isSupported: null == o || e_.includes(o.provider_kind),
            onEdit: () => {
              null != o &&
                (async (e, t) => {
                  if (null == eo) return
                  let n = new AbortController()
                  ;(eg.current?.abort(), (eg.current = n), ef({ requirements: X, signal: n.signal }), em(null))
                  try {
                    let i = await eo.requestOutboundIdentityConnection({
                      accountId: q.accountId,
                      userId: q.userId,
                      method: "GET",
                      connectionId: e,
                    })
                    n.signal.aborted ||
                      (i.ok
                        ? i.data.provider_kind === t && i.data.connection_id === e
                          ? es({ connection: i.data })
                          : em({ ok: !1, error: "invalid-response" })
                        : em({ ok: !1, error: i.error, status: i.status }))
                  } catch {
                    n.signal.aborted || em({ ok: !1, error: "unavailable" })
                  }
                  eg.current === n && ef(null)
                })(e.connection_id, o.provider_kind)
            },
            onAliasChange: (t) => ee(X.map((n) => (n.connection_id === e.connection_id ? { ...n, alias: t } : n))),
            onDetach: () =>
              ee(
                X.filter((t) => {
                  let { connection_id: n } = t
                  return n !== e.connection_id
                }),
              ),
          },
          e.connection_id,
        )
      })
      return (
        U[90] !== er || U[91] !== J || U[92] !== ek || U[93] !== ew || U[94] !== eI || U[95] !== eR || U[96] !== ej
          ? ((G =
              null == er
                ? null
                : (0, i.jsx)(s.Suspense, {
                    fallback: null,
                    children: (0, i.jsx)(
                      ec,
                      {
                        isOpen: !J,
                        connection: er.connection,
                        onClose: () => {
                          ;(es(null), ew(), !ej && ek.length > 0 && eI())
                        },
                        onSubmit: eR,
                      },
                      er.connection?.connection_id ?? "create",
                    ),
                  })),
            (U[90] = er),
            (U[91] = J),
            (U[92] = ek),
            (U[93] = ew),
            (U[94] = eI),
            (U[95] = eR),
            (U[96] = ej),
            (U[97] = G))
          : (G = U[97]),
        U[98] !== Q ||
        U[99] !== w ||
        U[100] !== E ||
        U[101] !== R ||
        U[102] !== B ||
        U[103] !== V ||
        U[104] !== z ||
        U[105] !== eL ||
        U[106] !== G
          ? ((L = (0, i.jsxs)(Q, { title: w, actions: E, children: [R, B, V, z, eL, G] })),
            (U[98] = Q),
            (U[99] = w),
            (U[100] = E),
            (U[101] = R),
            (U[102] = B),
            (U[103] = V),
            (U[104] = z),
            (U[105] = eL),
            (U[106] = G),
            (U[107] = L))
          : (L = U[107]),
        L
      )
    }
    var ep = n("CFI7"),
      em = n("KEmQ"),
      eh = n("Y8ve"),
      eg = n("n0dE"),
      ev = n("Qgfj"),
      ex = n("aKdu"),
      ey = n("NNav")
    function eb(e) {
      let t,
        n,
        r,
        a,
        c,
        f,
        m,
        h,
        g,
        v,
        y,
        b,
        w,
        _,
        j,
        k,
        C,
        A = (0, o.c)(58),
        {
          configuration: T,
          config: M,
          access: I,
          disabled: F,
          disabledTooltip: P,
          issues: N,
          showDetails: D,
          onChange: O,
        } = e,
        E = void 0 !== D && D,
        R = (0, l.A)()
      A[0] !== T ? ((t = (0, ex.g)(T)), (A[0] = T), (A[1] = t)) : (t = A[1])
      let { data: B, isSuccess: H, isFetching: V, isFetchedAfterMount: z, refetch: G } = (0, $.I)(t),
        L = H && z && !V && B?.tcp_network_access_supported === !0 && B.connection?.configured === !0,
        [U, q] = (0, s.useState)(null)
      ;(F && null != U && q(null),
        A[2] !== I?.ip_ranges ? ((n = I?.ip_ranges ?? []), (A[2] = I?.ip_ranges), (A[3] = n)) : (n = A[3]),
        A[4] !== I?.domains ? ((r = I?.domains ?? []), (A[4] = I?.domains), (A[5] = r)) : (r = A[5]),
        A[6] !== n || A[7] !== r ? ((a = [...n, ...r]), (A[6] = n), (A[7] = r), (A[8] = a)) : (a = A[8]))
      let Z = a,
        K = null
      if (E) {
        let e, t, n, o
        ;(A[9] !== Z
          ? ((e =
              Z.length > 0
                ? Z.join(", ")
                : (0, i.jsx)(d.A, {
                    id: "environmentSetup.configuration.tcpAccess.empty",
                    defaultMessage: "No saved TCP destinations",
                    description:
                      "Summary when no legacy TCP destination entries are saved. An empty list does not mean automatic Tailscale access is disabled",
                  })),
            (A[9] = Z),
            (A[10] = e))
          : (e = A[10]),
          A[11] !== e
            ? ((t = (0, i.jsx)("p", { className: "break-words", children: e })), (A[11] = e), (A[12] = t))
            : (t = A[12]),
          A[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)("p", { children: (0, i.jsx)(d.A, { ...eS.help }) })), (A[13] = n))
            : (n = A[13]),
          A[14] !== t ? ((o = (0, i.jsxs)(i.Fragment, { children: [t, n] })), (A[14] = t), (A[15] = o)) : (o = A[15]),
          (K = o))
      } else if (!L) {
        let e
        ;(A[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(d.A, {
              id: "environmentSetup.tcpAccess.requiresVpn",
              defaultMessage: "Adding legacy destinations requires a VPN with TCP support",
              description:
                "Explains why adding legacy TCP destinations is unavailable. Existing saved entries can still be cleared",
            })),
            (A[16] = e))
          : (e = A[16]),
          (K = e))
      }
      ;(A[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, i.jsx)(d.A, { ...eS.title })), (A[17] = c))
        : (c = A[17]),
        A[18] !== Z || A[19] !== E
          ? ((f =
              !E &&
              (0, i.jsx)("span", {
                className: "text-secondary",
                children: (0, i.jsx)(d.A, {
                  id: "environmentSetup.tcpAccess.destinationCount",
                  defaultMessage: "{count, plural, =0 {None} one {# destination} other {# destinations}}",
                  description:
                    "Count of saved legacy TCP destination entries. None means the saved list is empty, not that automatic Tailscale access is disabled",
                  values: { count: Z.length },
                }),
              })),
            (A[18] = Z),
            (A[19] = E),
            (A[20] = f))
          : (f = A[20]),
        A[21] !== R ? ((m = R.formatMessage(eS.edit)), (A[21] = R), (A[22] = m)) : (m = A[22]))
      let W = F || (!L && 0 === Z.length),
        Y = F ? P : void 0
      return (
        A[23] !== I || A[24] !== M
          ? ((h = () => q({ access: I ?? { ip_ranges: [], domains: [] }, config: M })),
            (A[23] = I),
            (A[24] = M),
            (A[25] = h))
          : (h = A[25]),
        A[26] === Symbol.for("react.memo_cache_sentinel") ? ((g = (0, i.jsx)(p.Npl, {})), (A[26] = g)) : (g = A[26]),
        A[27] !== Y || A[28] !== h || A[29] !== m || A[30] !== W
          ? ((v = (0, i.jsx)(x.F, {
              "aria-label": m,
              color: "ghost",
              size: "icon",
              disabled: W,
              tooltipContent: Y,
              onClick: h,
              children: g,
            })),
            (A[27] = Y),
            (A[28] = h),
            (A[29] = m),
            (A[30] = W),
            (A[31] = v))
          : (v = A[31]),
        A[32] !== R || A[33] !== V || A[34] !== G || A[35] !== L
          ? ((y =
              !L &&
              (0, i.jsx)(u.$, {
                color: "ghost",
                size: "settingsAction",
                "aria-label": R.formatMessage({
                  id: "environmentSetup.tcpAccess.refreshLabel",
                  defaultMessage: "Refresh TCP support",
                  description: "Accessible label for checking the latest VPN TCP capability",
                }),
                disabled: V,
                onClick: () => void G(),
                children: (0, i.jsx)(d.A, {
                  id: "environmentSetup.tcpAccess.refresh",
                  defaultMessage: "Refresh",
                  description: "Check whether the environment now supports TCP destination configuration",
                }),
              })),
            (A[32] = R),
            (A[33] = V),
            (A[34] = G),
            (A[35] = L),
            (A[36] = y))
          : (y = A[36]),
        A[37] !== N[0]
          ? ((b = null != N[0] && (0, i.jsx)(er.o, { issue: N[0] })), (A[37] = N[0]), (A[38] = b))
          : (b = A[38]),
        A[39] !== v || A[40] !== y || A[41] !== b || A[42] !== f
          ? ((w = (0, i.jsxs)(i.Fragment, { children: [f, v, y, b] })),
            (A[39] = v),
            (A[40] = y),
            (A[41] = b),
            (A[42] = f),
            (A[43] = w))
          : (w = A[43]),
        A[44] !== K
          ? ((_ = null == K ? null : (0, i.jsx)("div", { className: "text-sm text-secondary", children: K })),
            (A[44] = K),
            (A[45] = _))
          : (_ = A[45]),
        A[46] !== w || A[47] !== _
          ? ((j = (0, i.jsx)(Q, { "data-environment-section": "tcpAccess", title: c, actions: w, children: _ })),
            (A[46] = w),
            (A[47] = _),
            (A[48] = j))
          : (j = A[48]),
        A[49] !== M || A[50] !== F || A[51] !== U || A[52] !== O || A[53] !== L
          ? ((k =
              null != U &&
              !F &&
              (0, i.jsx)(ew, {
                initialAccess: U.access,
                supported: L,
                hasConflict: (0, S.p)(M, U.config),
                onClose: () => q(null),
                onSave: (e) => {
                  ;(O(e), q(null))
                },
              })),
            (A[49] = M),
            (A[50] = F),
            (A[51] = U),
            (A[52] = O),
            (A[53] = L),
            (A[54] = k))
          : (k = A[54]),
        A[55] !== j || A[56] !== k
          ? ((C = (0, i.jsxs)(i.Fragment, { children: [j, k] })), (A[55] = j), (A[56] = k), (A[57] = C))
          : (C = A[57]),
        C
      )
    }
    function ew(e) {
      let t,
        n,
        r,
        a,
        c,
        f,
        h,
        g,
        v,
        x,
        y,
        b,
        w,
        S,
        _,
        j,
        A,
        T,
        M,
        I,
        F,
        P,
        N,
        D,
        O,
        E,
        R,
        B,
        H,
        V,
        z = (0, o.c)(82),
        { initialAccess: G, supported: L, hasConflict: U, onClose: q, onSave: $ } = e,
        Z = (0, l.A)(),
        K = (0, s.useId)(),
        [W, Y] = (0, s.useState)(G),
        [Q, X] = (0, s.useState)(""),
        [J, ee] = (0, s.useState)(null),
        et = W.ip_ranges.length + W.domains.length
      z[0] !== et || z[1] !== U || z[2] !== L || z[3] !== Q
        ? ((t = !U && !Q.trim() && (L || 0 === et)), (z[0] = et), (z[1] = U), (z[2] = L), (z[3] = Q), (z[4] = t))
        : (t = z[4])
      let en = t,
        eo = (0, s.useRef)(null),
        er = (0, s.useRef)(et)
      ;(z[5] !== et
        ? ((n = () => {
            ;(et > er.current && eo.current?.scrollIntoView({ block: "nearest" }), (er.current = et))
          }),
          (r = [et]),
          (z[5] = et),
          (z[6] = n),
          (z[7] = r))
        : ((n = z[6]), (r = z[7])),
        (0, s.useLayoutEffect)(n, r),
        z[8] !== W || z[9] !== et || z[10] !== U || z[11] !== L || z[12] !== Q
          ? ((a = function () {
              if (!L || !Q.trim() || U) return
              let e = Q.includes("/") ? "ip_ranges" : "domains",
                t = (0, ey.Z)({ ...W, [e]: [...W[e], Q] })
              t.ok
                ? t.access.ip_ranges.length + t.access.domains.length === et
                  ? ee("duplicate")
                  : (Y(t.access), X(""), ee(null))
                : ee(t.reason)
            }),
            (z[8] = W),
            (z[9] = et),
            (z[10] = U),
            (z[11] = L),
            (z[12] = Q),
            (z[13] = a))
          : (a = z[13]))
      let ea = a
      ;(z[14] !== q ? ((c = (e) => !e && q()), (z[14] = q), (z[15] = c)) : (c = z[15]),
        z[16] !== W || z[17] !== ea || z[18] !== en || z[19] !== $ || z[20] !== Q
          ? ((f = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), Q.trim()) ? ea() : en && $(W)
            }),
            (z[16] = W),
            (z[17] = ea),
            (z[18] = en),
            (z[19] = $),
            (z[20] = Q),
            (z[21] = f))
          : (f = z[21]),
        z[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)(C.OO, {
              children: (0, i.jsx)(C.c7, { title: (0, i.jsx)(k.L3, { children: (0, i.jsx)(d.A, { ...eS.title }) }) }),
            })),
            (z[22] = h))
          : (h = z[22]),
        z[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("p", {
              className: "text-sm text-secondary select-none",
              children: (0, i.jsx)(d.A, { ...eS.help }),
            })),
            (z[23] = g))
          : (g = z[23]),
        z[24] === Symbol.for("react.memo_cache_sentinel") ? ((v = ["ip_ranges", "domains"]), (z[24] = v)) : (v = z[24]),
        z[25] !== W || z[26] !== U || z[27] !== Z
          ? ((x = (0, i.jsx)(i.Fragment, {
              children: v.flatMap((e) =>
                W[e].map((t, n) =>
                  (0, i.jsxs)(
                    ei.E,
                    {
                      className: "max-w-full gap-1",
                      variant: "outline",
                      children: [
                        (0, i.jsx)("span", { className: "min-w-0 truncate", title: t, children: t }),
                        (0, i.jsx)("button", {
                          "aria-label": Z.formatMessage(
                            {
                              id: "environmentSetup.tcpAccess.remove",
                              defaultMessage: "Remove {destination}",
                              description: "Remove one TCP destination from the list being edited",
                            },
                            { destination: t },
                          ),
                          className:
                            "cursor-interaction rounded-sm text-secondary hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                          type: "button",
                          disabled: U,
                          onClick: () => {
                            ;(Y({ ...W, [e]: W[e].filter((e, t) => t !== n) }), ee(null))
                          },
                          children: (0, i.jsx)(p.Gmf, {}),
                        }),
                      ],
                    },
                    `${e}-${n}`,
                  ),
                ),
              ),
            })),
            (z[25] = W),
            (z[26] = U),
            (z[27] = Z),
            (z[28] = x))
          : (x = z[28]),
        z[29] !== Z ? ((y = Z.formatMessage(eS.destination)), (z[29] = Z), (z[30] = y)) : (y = z[30]))
      let es = null != J,
        el = !L || U
      ;(z[31] !== Z
        ? ((b = Z.formatMessage({
            id: "environmentSetup.tcpAccess.placeholder",
            defaultMessage: "10.44.0.8/32 or db.corp.example",
            description: "Example private TCP destination CIDR or hostname",
          })),
          (z[31] = Z),
          (z[32] = b))
        : (b = z[32]),
        z[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => {
              ;(X(e.currentTarget.value), ee(null))
            }),
            (z[33] = w))
          : (w = z[33]),
        z[34] !== ea
          ? ((S = (e) => {
              "Enter" !== e.key || e.nativeEvent.isComposing || (e.preventDefault(), ea())
            }),
            (z[34] = ea),
            (z[35] = S))
          : (S = z[35]),
        z[36] !== K ||
        z[37] !== x ||
        z[38] !== y ||
        z[39] !== es ||
        z[40] !== el ||
        z[41] !== b ||
        z[42] !== S ||
        z[43] !== Q
          ? ((_ = (0, i.jsx)(m.pd, {
              ref: eo,
              leadingControl: x,
              autoFocus: !0,
              "aria-label": y,
              "aria-describedby": K,
              "aria-invalid": es,
              disabled: el,
              value: Q,
              variant: "tags",
              placeholder: b,
              onChange: w,
              onKeyDown: S,
            })),
            (z[36] = K),
            (z[37] = x),
            (z[38] = y),
            (z[39] = es),
            (z[40] = el),
            (z[41] = b),
            (z[42] = S),
            (z[43] = Q),
            (z[44] = _))
          : (_ = z[44]))
      let ed = null == J ? "text-xs text-secondary select-none" : "text-xs text-danger select-none",
        ec = null == J ? void 0 : "alert"
      ;(z[45] !== J
        ? ((j = null == J ? (0, i.jsx)(d.A, { ...eS.syntax }) : (0, i.jsx)(d.A, { ...eS[J] })),
          (z[45] = J),
          (z[46] = j))
        : (j = z[46]),
        z[47] !== K || z[48] !== ed || z[49] !== ec || z[50] !== j
          ? ((A = (0, i.jsx)("p", { id: K, className: ed, role: ec, children: j })),
            (z[47] = K),
            (z[48] = ed),
            (z[49] = ec),
            (z[50] = j),
            (z[51] = A))
          : (A = z[51]),
        z[52] !== L
          ? ((T =
              !L &&
              (0, i.jsx)("p", {
                className: "text-sm text-secondary select-none",
                role: "status",
                children: (0, i.jsx)(d.A, { ...eS.unavailable }),
              })),
            (z[52] = L),
            (z[53] = T))
          : (T = z[53]),
        z[54] !== U
          ? ((M =
              U &&
              (0, i.jsx)("p", {
                className: "text-sm text-danger select-none",
                role: "alert",
                children: (0, i.jsx)(d.A, {
                  id: "environmentSetup.tcpAccess.conflict",
                  defaultMessage:
                    "The environment changed. Close and reopen this editor to review the latest destinations.",
                  description: "TCP destination dialog is stale after the server draft changed",
                }),
              })),
            (z[54] = U),
            (z[55] = M))
          : (M = z[55]))
      let eu = U || 0 === et
      ;(z[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = () => {
            ;(Y({ ip_ranges: [], domains: [] }), X(""), ee(null))
          }),
          (F = (0, i.jsx)(d.A, {
            id: "environmentSetup.tcpAccess.clear",
            defaultMessage: "Clear all",
            description: "Remove every TCP destination grant from the list being edited",
          })),
          (z[56] = I),
          (z[57] = F))
        : ((I = z[56]), (F = z[57])),
        z[58] !== eu
          ? ((P = (0, i.jsx)(u.$, {
              className: "self-start",
              color: "secondary",
              disabled: eu,
              onClick: I,
              children: F,
            })),
            (z[58] = eu),
            (z[59] = P))
          : (P = z[59]),
        z[60] !== _ || z[61] !== A || z[62] !== T || z[63] !== M || z[64] !== P
          ? ((N = (0, i.jsx)(C.OO, {
              children: (0, i.jsxs)("div", { className: "flex flex-col gap-3", children: [g, _, A, T, M, P] }),
            })),
            (z[60] = _),
            (z[61] = A),
            (z[62] = T),
            (z[63] = M),
            (z[64] = P),
            (z[65] = N))
          : (N = z[65]),
        z[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
              description: "Discard edits in a cloud environment configuration dialog",
            })),
            (z[66] = D))
          : (D = z[66]),
        z[67] !== q
          ? ((O = (0, i.jsx)(u.$, { color: "secondary", onClick: q, children: D })), (z[67] = q), (z[68] = O))
          : (O = z[68]))
      let ef = !en
      return (
        z[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.configuration.dialog.save",
              defaultMessage: "Save",
              description: "Apply dialog edits to the cloud environment configuration being edited",
            })),
            (z[69] = E))
          : (E = z[69]),
        z[70] !== ef
          ? ((R = (0, i.jsx)(u.$, { color: "primary", type: "submit", disabled: ef, children: E })),
            (z[70] = ef),
            (z[71] = R))
          : (R = z[71]),
        z[72] !== O || z[73] !== R
          ? ((B = (0, i.jsx)(C.OO, { children: (0, i.jsxs)(C.Es, { children: [O, R] }) })),
            (z[72] = O),
            (z[73] = R),
            (z[74] = B))
          : (B = z[74]),
        z[75] !== N || z[76] !== B || z[77] !== f
          ? ((H = (0, i.jsxs)(C.R4, { as: "form", size: "viewport", onSubmit: f, children: [h, N, B] })),
            (z[75] = N),
            (z[76] = B),
            (z[77] = f),
            (z[78] = H))
          : (H = z[78]),
        z[79] !== H || z[80] !== c
          ? ((V = (0, i.jsx)(k.lG, { open: !0, size: "wide", onOpenChange: c, children: H })),
            (z[79] = H),
            (z[80] = c),
            (z[81] = V))
          : (V = z[81]),
        V
      )
    }
    let eS = (0, ev.YK)({
      title: {
        id: "environmentSetup.tcpAccess.title",
        defaultMessage: "TCP destinations",
        description: "Settings label and dialog title for private network TCP destination grants",
      },
      edit: {
        id: "environmentSetup.tcpAccess.edit",
        defaultMessage: "Edit TCP destinations",
        description: "Accessible label for opening the TCP destination editor",
      },
      destination: {
        id: "environmentSetup.tcpAccess.destination",
        defaultMessage: "TCP destination",
        description: "Accessible label for a private IPv4 CIDR or hostname to allow through the environment VPN",
      },
      help: {
        id: "environmentSetup.tcpAccess.help",
        defaultMessage:
          "These saved destinations are for legacy environments. Automatic Tailscale access does not use this list. Tailscale routes and access rules still apply. TCP clients use HTTP CONNECT at proxy:8088 and supply their own credentials. Public internet access and HTTP secrets are configured separately.",
        description:
          "Explains that saved TCP destinations apply to legacy environments, while automatic Tailscale access is independent of this list. Tailnet routing and access policy still apply. TCP uses the HTTP CONNECT proxy and client-supplied credentials",
      },
      syntax: {
        id: "environmentSetup.tcpAccess.syntax",
        defaultMessage:
          "For legacy environments, press Enter to add an allowed IPv4 range in CIDR notation or a hostname. Wildcards such as *.corp.example allow subdomains but not corp.example itself. Hostnames must resolve to IPv4 addresses routed through Tailscale.",
        description:
          "Explains legacy TCP destination syntax and wildcard exclusions. Resolved IPv4 addresses must use a Tailscale route",
      },
      unavailable: {
        id: "environmentSetup.tcpAccess.unavailable",
        defaultMessage:
          "Adding legacy destinations requires a configured VPN with TCP support. You can still clear the saved list. Clearing this list does not disable automatic Tailscale access.",
        description:
          "Explains why additions to the saved legacy list are disabled. Clearing saved entries is allowed but does not revoke automatic Tailscale access",
      },
      range: {
        id: "environmentSetup.tcpAccess.range",
        defaultMessage:
          "Use a canonical IPv4 CIDR within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or 100.64.0.0/10, such as 10.44.0.8/32",
        description: "TCP range validation error; CIDR must use the network address without host bits",
      },
      domain: {
        id: "environmentSetup.tcpAccess.domain",
        defaultMessage:
          "Enter a hostname such as db.corp.example or *.corp.example, without a URL, path, IP address, or port",
        description: "TCP hostname validation error",
      },
      duplicate: {
        id: "environmentSetup.tcpAccess.duplicate",
        defaultMessage: "This destination is already in the list",
        description: "TCP destination already exists in the edited legacy list",
      },
    })
    var e_ = n("h818"),
      ej = n("w1tT"),
      ek = n("irkb"),
      eC = n("xSOA"),
      eA = n("NsMq"),
      eT = n("v7qY")
    function eM(e) {
      let t,
        n,
        r,
        a,
        c,
        f,
        h,
        g,
        v,
        x,
        y,
        b,
        w,
        S,
        _,
        j,
        A,
        T,
        M,
        I,
        F,
        P,
        N,
        D,
        O,
        E,
        R,
        B = (0, o.c)(67),
        { initialValue: H, onClose: V, onCloseAutoFocus: z, onSave: G } = e,
        L = (0, l.A)(),
        U = (0, s.useId)(),
        q = (0, s.useId)(),
        $ = (0, s.useId)(),
        Z = (0, s.useRef)(null),
        [K, W] = (0, s.useState)(H),
        [Y, Q] = (0, s.useState)(!1),
        [X, J] = (0, s.useState)(!1)
      B[0] !== K
        ? ((t = (n = K.trim()).length <= 4096 && /^tskey-auth-[A-Za-z0-9-]+$/.test(n)),
          (B[0] = K),
          (B[1] = t),
          (B[2] = n))
        : ((t = B[1]), (n = B[2]))
      let ee = t,
        et = X && !ee
      ;(B[3] !== z ? ((r = { onCloseAutoFocus: z }), (B[3] = z), (B[4] = r)) : (r = B[4]),
        B[5] !== V ? ((a = (e) => !e && V()), (B[5] = V), (B[6] = a)) : (a = B[6]),
        B[7] !== G || B[8] !== n || B[9] !== ee
          ? ((c = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), J(!0), ee && G(n))
            }),
            (B[7] = G),
            (B[8] = n),
            (B[9] = ee),
            (B[10] = c))
          : (c = B[10]),
        B[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, i.jsx)(d.A, {
              id: "environmentSetup.vpn.keySetupHelp",
              defaultMessage: "Enter a reusable Tailscale auth key. <link>Key setup guide</link>",
              description:
                "Guidance beside the Tailscale key input. Each new cloud machine may enroll again, so the key must be reusable. The link opens Tailscale's official key setup, expiry, and access guidance.",
              values: { link: eF },
            })),
            (B[11] = f))
          : (f = B[11]),
        B[12] !== q
          ? ((h = (0, i.jsx)("p", { id: q, className: "select-none", children: f })), (B[12] = q), (B[13] = h))
          : (h = B[13]),
        B[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(k.L3, {
              children: (0, i.jsx)(d.A, {
                id: "environmentSetup.vpn.dialogTitle",
                defaultMessage: "Tailscale VPN",
                description: "Title of the dialog for entering a Tailscale VPN authentication key",
              }),
            })),
            (B[14] = g))
          : (g = B[14]),
        B[15] !== h
          ? ((v = (0, i.jsx)(C.OO, {
              children: (0, i.jsx)(C.c7, { subtitleSize: "sm", subtitleTone: "secondary", subtitle: h, title: g }),
            })),
            (B[15] = h),
            (B[16] = v))
          : (v = B[16]),
        B[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.vpn.key",
              defaultMessage: "Tailscale auth key",
              description: "Label for the Tailscale authentication key used by this environment",
            })),
            (B[17] = x))
          : (x = B[17]),
        B[18] !== U
          ? ((y = (0, i.jsx)("label", { className: "select-none", htmlFor: U, children: x })), (B[18] = U), (B[19] = y))
          : (y = B[19]))
      let en = Y ? "text" : "password",
        ei = et ? $ : null
      B[20] !== q || B[21] !== ei
        ? ((b = [q, ei].filter(Boolean)), (B[20] = q), (B[21] = ei), (B[22] = b))
        : (b = B[22])
      let eo = b.join(" ")
      return (
        B[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => {
              W(e.currentTarget.value)
            }),
            (B[23] = w))
          : (w = B[23]),
        B[24] !== K || B[25] !== U || B[26] !== et || B[27] !== en || B[28] !== eo
          ? ((S = (0, i.jsx)(m.pd, {
              id: U,
              ref: Z,
              autoFocus: !0,
              type: en,
              autoComplete: "off",
              spellCheck: !1,
              maxLength: 4096,
              "aria-describedby": eo,
              "aria-invalid": et,
              value: K,
              onChange: w,
            })),
            (B[24] = K),
            (B[25] = U),
            (B[26] = et),
            (B[27] = en),
            (B[28] = eo),
            (B[29] = S))
          : (S = B[29]),
        B[30] !== L || B[31] !== Y
          ? ((_ = Y
              ? L.formatMessage({
                  id: "restricted.environmentSetup.vpn.hideTypedKey",
                  defaultMessage: "Hide entered key",
                  description: "Hides a newly entered VPN key after revealing it",
                })
              : L.formatMessage({
                  id: "restricted.environmentSetup.vpn.showTypedKey",
                  defaultMessage: "Show entered key",
                  description: "Reveals a newly entered VPN key, not the saved key",
                })),
            (B[30] = L),
            (B[31] = Y),
            (B[32] = _))
          : (_ = B[32]),
        B[33] !== Y
          ? ((j = () => {
              let e = Z.current,
                t = e?.selectionStart ?? null,
                n = e?.selectionEnd ?? null
              ;((0, eT.flushSync)(() => Q(!Y)), e?.getBoundingClientRect(), e?.setSelectionRange(t, n))
            }),
            (A = Y ? (0, i.jsx)(p.GsY, {}) : (0, i.jsx)(p.X9D, {})),
            (B[33] = Y),
            (B[34] = j),
            (B[35] = A))
          : ((j = B[34]), (A = B[35])),
        B[36] !== U || B[37] !== _ || B[38] !== j || B[39] !== A
          ? ((T = (0, i.jsx)(u.$, {
              "aria-controls": U,
              "aria-label": _,
              color: "ghost",
              size: "icon",
              type: "button",
              onMouseDown: eI,
              onClick: j,
              children: A,
            })),
            (B[36] = U),
            (B[37] = _),
            (B[38] = j),
            (B[39] = A),
            (B[40] = T))
          : (T = B[40]),
        B[41] !== S || B[42] !== T
          ? ((M = (0, i.jsxs)(C.fh, { children: [S, T] })), (B[41] = S), (B[42] = T), (B[43] = M))
          : (M = B[43]),
        B[44] !== $ || B[45] !== et || B[46] !== n
          ? ((I = et
              ? (0, i.jsx)("p", {
                  id: $,
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children:
                    0 === n.length
                      ? (0, i.jsx)(d.A, {
                          id: "environmentSetup.vpn.keyRequired",
                          defaultMessage: "A Tailscale auth key is required",
                          description:
                            "Validation error when saving the Tailscale key dialog with an empty or whitespace-only input. Cancel closes the dialog without changing the pending or saved key.",
                        })
                      : (0, i.jsx)(d.A, {
                          id: "restricted.environmentSetup.vpn.invalidKeyFormat",
                          defaultMessage:
                            "Supported keys start with tskey-auth- and contain only letters, numbers or hyphens",
                          description:
                            "Validation error for a Tailscale auth key with an invalid prefix, character, or length",
                        }),
                })
              : null),
            (B[44] = $),
            (B[45] = et),
            (B[46] = n),
            (B[47] = I))
          : (I = B[47]),
        B[48] !== y || B[49] !== M || B[50] !== I
          ? ((F = (0, i.jsx)(C.OO, { children: (0, i.jsxs)(C.RW, { children: [y, M, I] }) })),
            (B[48] = y),
            (B[49] = M),
            (B[50] = I),
            (B[51] = F))
          : (F = B[51]),
        B[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
              description: "Discard edits in a cloud environment configuration dialog",
            })),
            (B[52] = P))
          : (P = B[52]),
        B[53] !== V
          ? ((N = (0, i.jsx)(u.$, { color: "secondary", type: "button", onClick: V, children: P })),
            (B[53] = V),
            (B[54] = N))
          : (N = B[54]),
        B[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(u.$, {
              color: "primary",
              type: "submit",
              children: (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.configuration.dialog.save",
                defaultMessage: "Save",
                description: "Apply dialog edits to the cloud environment configuration being edited",
              }),
            })),
            (B[55] = D))
          : (D = B[55]),
        B[56] !== N
          ? ((O = (0, i.jsx)(C.OO, { children: (0, i.jsxs)(C.Es, { children: [N, D] }) })), (B[56] = N), (B[57] = O))
          : (O = B[57]),
        B[58] !== F || B[59] !== O || B[60] !== c || B[61] !== v
          ? ((E = (0, i.jsxs)(C.R4, { as: "form", size: "viewport", onSubmit: c, children: [v, F, O] })),
            (B[58] = F),
            (B[59] = O),
            (B[60] = c),
            (B[61] = v),
            (B[62] = E))
          : (E = B[62]),
        B[63] !== r || B[64] !== E || B[65] !== a
          ? ((R = (0, i.jsx)(k.lG, { open: !0, contentProps: r, onOpenChange: a, children: E })),
            (B[63] = r),
            (B[64] = E),
            (B[65] = a),
            (B[66] = R))
          : (R = B[66]),
        R
      )
    }
    function eI(e) {
      return e.preventDefault()
    }
    function eF(e) {
      return (0, i.jsx)(
        P.G,
        {
          appearance: "secondary",
          href: "https://tailscale.com/docs/features/access-control/auth-keys",
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser",
          children: e,
        },
        "key-setup-guide",
      )
    }
    function eP(e) {
      let t,
        n,
        r,
        a,
        c,
        f,
        m,
        h,
        g,
        v,
        x,
        y,
        b,
        w,
        S,
        _,
        j,
        k,
        C,
        A,
        T,
        M,
        I,
        F,
        P,
        N,
        D,
        O,
        E,
        R,
        B,
        H,
        V,
        z,
        G,
        L,
        U,
        q,
        Z,
        K,
        Y,
        ee = (0, o.c)(166),
        { configuration: et, isReadOnly: en, isVisible: ei, onDraftSaved: er, onPendingChange: ea, ref: es } = e,
        el = void 0 === ei || ei,
        ed = (0, l.A)(),
        ec = (0, s.useId)(),
        eu = (0, s.useRef)(null),
        ef = W.appServices?.environmentConfigs,
        ep = (0, ek.jE)(),
        [em, eh] = (0, s.useState)(null),
        eg = em?.type === "set" ? em.authKey : "",
        ev = em?.type === "remove",
        [ey, eb] = (0, s.useState)(!1)
      ee[0] !== eg
        ? ((t = eg.trim().length <= 4096 && /^tskey-auth-[A-Za-z0-9-]+$/.test(eg.trim())), (ee[0] = eg), (ee[1] = t))
        : (t = ee[1])
      let ew = t,
        [eS, eT] = (0, s.useState)(!1),
        [eI, eF] = (0, s.useState)(!1),
        [eP, eO] = (0, s.useState)(!1),
        [eE, eR] = (0, s.useState)(null)
      ee[2] !== ea
        ? ((n = function (e) {
            ;(eh(e), ea?.(null != e, !0, e?.type === "remove"))
          }),
          (ee[2] = ea),
          (ee[3] = n))
        : (n = ee[3])
      let eB = n
      ee[4] !== et.accountId || ee[5] !== et.configId || ee[6] !== et.draftId || ee[7] !== et.userId
        ? ((r = (0, eA.l4)(et.accountId, et.userId, et.configId, et.draftId)),
          (ee[4] = et.accountId),
          (ee[5] = et.configId),
          (ee[6] = et.draftId),
          (ee[7] = et.userId),
          (ee[8] = r))
        : (r = ee[8])
      let eH = r
      ee[9] !== et ? ((a = (0, ex.g)(et)), (ee[9] = et), (ee[10] = a)) : (a = ee[10])
      let eV = a,
        ez = eV.queryKey
      ee[11] !== et.accountId || ee[12] !== et.configId || ee[13] !== et.draftId || ee[14] !== et.userId
        ? ((c = { accountId: et.accountId, userId: et.userId, configId: et.configId, draftId: et.draftId }),
          (ee[11] = et.accountId),
          (ee[12] = et.configId),
          (ee[13] = et.draftId),
          (ee[14] = et.userId),
          (ee[15] = c))
        : (c = ee[15])
      let eG = c,
        { data: eL, isPending: eU, isError: eq, isFetching: e$, refetch: eZ } = (0, $.I)(eV)
      ee[16] !== eH ||
      ee[17] !== et.accountId ||
      ee[18] !== et.configId ||
      ee[19] !== et.draftId ||
      ee[20] !== et.userId ||
      ee[21] !== er ||
      ee[22] !== ep
        ? ((f = async () => {
            if (null == ef) return null
            try {
              let e = await (0, eA.UG)(ef, et.accountId, et.userId, et.configId, et.draftId)
              return (ep.setQueryData(eH, e), er?.(e), e)
            } catch {
              return null
            }
          }),
          (ee[16] = eH),
          (ee[17] = et.accountId),
          (ee[18] = et.configId),
          (ee[19] = et.draftId),
          (ee[20] = et.userId),
          (ee[21] = er),
          (ee[22] = ep),
          (ee[23] = f))
        : (f = ee[23])
      let eK = f
      ;(ee[24] !== eg ||
      ee[25] !== eB ||
      ee[26] !== et.draftId ||
      ee[27] !== eL ||
      ee[28] !== ep ||
      ee[29] !== ez ||
      ee[30] !== eG
        ? ((m = async (e) => {
            let t = ef?.requestVpn
            if (null == ef || null == t || null == eL) throw Error("unavailable")
            let n = eg.trim()
            eB(null)
            let i = await t({ ...eG, method: "GET" })
            if (!i.ok) throw Error("not-saved")
            if ((ep.setQueryData(ez, i.data), e)) {
              if (eL.connection?.id !== i.data.connection?.id || eL.connection?.etag !== i.data.connection?.etag)
                throw Error("changed")
              let e = await ef.request({
                ...eG,
                method: "PATCH",
                body: {
                  base_version_id: i.data.base_version_id,
                  expected_revision: i.data.draft_revision ?? void 0,
                  vpn_connection_id: "",
                  tcp_network_access: { ip_ranges: [], domains: [] },
                },
              })
              if (!e.ok) throw Error(e.error)
              return null
            }
            {
              if (eL.connection?.id !== i.data.connection?.id || eL.connection?.etag !== i.data.connection?.etag)
                throw Error("changed")
              let e = (e) =>
                  t({
                    ...eG,
                    method: "POST",
                    body: {
                      provider: "tailscale",
                      auth_method: "auth_key",
                      connection_id: null == et.draftId ? e.connection?.id : void 0,
                      expected_etag: null == et.draftId ? e.connection?.etag : void 0,
                      auth_key: n,
                      base_version_id: e.base_version_id,
                      expected_draft_revision: e.draft_revision ?? void 0,
                    },
                  }),
                o = await e(i.data)
              if (o.ok) return o.data
              if (409 === o.status && null == i.data.connection) {
                let n = await t({ ...eG, method: "GET" })
                if (!n.ok) throw Error("not-saved")
                if ((ep.setQueryData(ez, n.data), null == n.data.connection)) {
                  let t = await e(n.data)
                  if (t.ok) return t.data
                  throw Error(400 === t.status ? "invalid" : t.error)
                }
              }
              throw Error(400 === o.status ? "invalid" : o.error)
            }
          }),
          (ee[24] = eg),
          (ee[25] = eB),
          (ee[26] = et.draftId),
          (ee[27] = eL),
          (ee[28] = ep),
          (ee[29] = ez),
          (ee[30] = eG),
          (ee[31] = m))
        : (m = ee[31]),
        ee[32] !== eZ
          ? ((h = async (e, t) => {
              if ("refresh-failed" === e.message || "mismatch" === e.message) return
              let n = await eZ()
              if ((eT(n.isError), n.isError)) return
              let i = "uncertain"
              ;("changed" === e.message
                ? (i = "changed")
                : t
                  ? (i = n.data?.connection == null ? null : "remove-failed")
                  : "invalid" === e.message
                    ? (i = "invalid")
                    : ("not-saved" === e.message || n.data?.connection == null) && (i = "not-saved"),
                eR((e) => ("uncertain" === e && null != i && n.data?.connection != null ? e : i)))
            }),
            (ee[32] = eZ),
            (ee[33] = h))
          : (h = ee[33]),
        ee[34] !== eZ || ee[35] !== eK
          ? ((g = async (e, t) => {
              eR(null)
              let [n, i] = await Promise.all([eZ(), eK()])
              if ((eT(n.isError), eF(null == i), null == i || n.isError)) throw Error("refresh-failed")
              if (t ? n.data?.connection != null : n.data?.connection?.etag !== e?.connection?.etag)
                throw (eR("mismatch"), Error("mismatch"))
              return i
            }),
            (ee[34] = eZ),
            (ee[35] = eK),
            (ee[36] = g))
          : (g = ee[36]),
        ee[37] !== g || ee[38] !== m || ee[39] !== h
          ? ((v = { retry: !1, mutationFn: m, onError: h, onSuccess: g }),
            (ee[37] = g),
            (ee[38] = m),
            (ee[39] = h),
            (ee[40] = v))
          : (v = ee[40]))
      let { mutateAsync: eW, isPending: eY } = (0, eC.n)(v)
      ;(ee[41] !== eH ||
      ee[42] !== eI ||
      ee[43] !== eL ||
      ee[44] !== eq ||
      ee[45] !== eU ||
      ee[46] !== eY ||
      ee[47] !== eW ||
      ee[48] !== eS ||
      ee[49] !== ev ||
      ee[50] !== ep ||
      ee[51] !== ew
        ? ((x = () => ({
            save: async () => {
              if (eY || eU || eq || eS || eI || null == eL || (!ev && !ew)) throw Error("unavailable")
              await eW(ev)
              let e = ep.getQueryData(eH)
              if (null == e) throw Error("refresh-failed")
              return e
            },
          })),
          (ee[41] = eH),
          (ee[42] = eI),
          (ee[43] = eL),
          (ee[44] = eq),
          (ee[45] = eU),
          (ee[46] = eY),
          (ee[47] = eW),
          (ee[48] = eS),
          (ee[49] = ev),
          (ee[50] = ep),
          (ee[51] = ew),
          (ee[52] = x))
        : (x = ee[52]),
        (0, s.useImperativeHandle)(es, x),
        ee[53] !== eL?.capabilities
          ? ((y = eL?.capabilities.some(eN)), (ee[53] = eL?.capabilities), (ee[54] = y))
          : (y = ee[54]))
      let eQ = y
      if ((ey && (!el || !eQ || en || eY || eq) && eb(!1), ef?.requestVpn == null)) return null
      ee[55] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (0, i.jsx)(d.A, {
            id: "restricted.environmentSetup.vpn.title",
            defaultMessage: "VPN",
            description: "Section for a cloud environment VPN connection",
          })),
          (ee[55] = b))
        : (b = ee[55])
      let eX = b
      if (!eQ) {
        let e, t, n, o, r, a
        ee[56] !== e$ || ee[57] !== eU || ee[58] !== eZ
          ? ((e = eU
              ? null
              : (0, i.jsx)(u.$, {
                  color: "ghost",
                  size: "settingsAction",
                  disabled: e$,
                  onClick: () => void eZ(),
                  children: (0, i.jsx)(d.A, {
                    id: "restricted.environmentSetup.vpn.refresh",
                    defaultMessage: "Refresh",
                    description:
                      "Reloads saved VPN key metadata and environment settings after an automatic refresh fails",
                  }),
                })),
            (ee[56] = e$),
            (ee[57] = eU),
            (ee[58] = eZ),
            (ee[59] = e))
          : (e = ee[59])
        let s = eq ? "alert" : "status"
        return (
          ee[60] !== eU
            ? ((t =
                eU &&
                (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.vpn.loading",
                  defaultMessage: "Loading saved key status…",
                  description: "Status while loading whether a VPN key is attached to the environment",
                })),
              (ee[60] = eU),
              (ee[61] = t))
            : (t = ee[61]),
          ee[62] !== eq || ee[63] !== eU
            ? ((n =
                !eU &&
                eq &&
                (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.vpn.loadFailed",
                  defaultMessage: "Couldn't refresh saved key status",
                  description: "The latest VPN key attachment metadata could not be loaded",
                })),
              (ee[62] = eq),
              (ee[63] = eU),
              (ee[64] = n))
            : (n = ee[64]),
          ee[65] !== eq || ee[66] !== eU
            ? ((o =
                !eU &&
                !eq &&
                (0, i.jsx)(d.A, {
                  id: "environmentSetup.vpn.unsupported",
                  defaultMessage: "VPN isn’t available for this environment",
                  description: "The environment service does not offer a supported VPN authentication method",
                })),
              (ee[65] = eq),
              (ee[66] = eU),
              (ee[67] = o))
            : (o = ee[67]),
          ee[68] !== s || ee[69] !== t || ee[70] !== n || ee[71] !== o
            ? ((r = (0, i.jsxs)("p", {
                className: "text-sm text-secondary select-none",
                role: s,
                children: [t, n, o],
              })),
              (ee[68] = s),
              (ee[69] = t),
              (ee[70] = n),
              (ee[71] = o),
              (ee[72] = r))
            : (r = ee[72]),
          ee[73] !== e || ee[74] !== r
            ? ((a = (0, i.jsx)(Q, { title: eX, actions: e, children: r })), (ee[73] = e), (ee[74] = r), (ee[75] = a))
            : (a = ee[75]),
          a
        )
      }
      let eJ = en || eY || eU || eq || eS || eI || !eQ,
        e1 = eL?.connection?.configured === !0 && !ev,
        e0 = eL?.connection != null,
        e2 = eq || eS || eI || null != eE || (eg.length > 0 && !ew)
      ;(ee[76] !== e0
        ? ((w = e0
            ? (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.vpn.removeHelp",
                defaultMessage: "Removes VPN and TCP destinations when you save",
                description:
                  "Removing VPN clears any entered replacement and stages removal of the saved VPN and TCP grants. It does not delete credentials needed by older published versions.",
              })
            : (0, i.jsx)(d.A, {
                id: "environmentSetup.vpn.clearEnteredKeyHelp",
                defaultMessage: "Clears the entered key from your pending changes",
                description:
                  "The removal button discards an entered VPN key from pending environment changes without making a server request.",
              })),
          (ee[76] = e0),
          (ee[77] = w))
        : (w = ee[77]),
        ee[78] !== ed
          ? ((S = ed.formatMessage({
              id: "restricted.environmentSetup.vpn.remove",
              defaultMessage: "Remove VPN from draft",
              description:
                "Clears the entered key and stages removal of any saved VPN from the draft without deleting its stored credentials",
            })),
            (ee[78] = ed),
            (ee[79] = S))
          : (S = ee[79]),
        ee[80] !== eB || ee[81] !== e0
          ? ((_ = () => {
              ;(eB(e0 ? { type: "remove" } : null), eu.current?.focus())
            }),
            (ee[80] = eB),
            (ee[81] = e0),
            (ee[82] = _))
          : (_ = ee[82]),
        ee[83] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, i.jsx)(eo.I, { asset: ej.c })), (ee[83] = j))
          : (j = ee[83]),
        ee[84] !== eJ || ee[85] !== S || ee[86] !== _
          ? ((k = (0, i.jsx)(u.$, {
              "aria-label": S,
              color: "ghost",
              size: "icon",
              type: "button",
              disabled: eJ,
              onClick: _,
              children: j,
            })),
            (ee[84] = eJ),
            (ee[85] = S),
            (ee[86] = _),
            (ee[87] = k))
          : (k = ee[87]),
        ee[88] !== w || ee[89] !== k
          ? ((C = (0, i.jsx)(J.m, { content: w, children: k })), (ee[88] = w), (ee[89] = k), (ee[90] = C))
          : (C = ee[90]))
      let e3 = C
      ;(ee[91] !== eB || ee[92] !== eJ || ee[93] !== ed || ee[94] !== em
        ? ((A =
            null != em
              ? (0, i.jsx)(u.$, {
                  "aria-label": ed.formatMessage({
                    id: "environmentSetup.vpn.discardChangesLabel",
                    defaultMessage: "Discard VPN changes",
                    description:
                      "Discards a pending key replacement or VPN removal, returning to saved VPN settings without discarding other environment edits",
                  }),
                  color: "ghost",
                  size: "settingsAction",
                  type: "button",
                  disabled: eJ,
                  onClick: () => {
                    ;(eB(null), eu.current?.focus())
                  },
                  children: (0, i.jsx)(d.A, {
                    id: "environmentSetup.vpn.discardChanges",
                    defaultMessage: "Discard changes",
                    description:
                      "Action beside the VPN section heading that discards pending VPN changes and returns to saved VPN settings. Other environment edits are preserved.",
                  }),
                })
              : null),
          (ee[91] = eB),
          (ee[92] = eJ),
          (ee[93] = ed),
          (ee[94] = em),
          (ee[95] = A))
        : (A = ee[95]),
        ee[96] === Symbol.for("react.memo_cache_sentinel") ? ((T = (0, i.jsx)(eD, {})), (ee[96] = T)) : (T = ee[96]),
        ee[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.vpn.provider",
              defaultMessage: "Tailscale",
              description: "Name of the Tailscale VPN provider",
            })),
            (ee[97] = M))
          : (M = ee[97]),
        ee[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(d.A, {
              id: "environmentSetup.vpn.networkAccessHelp",
              defaultMessage:
                "Connect to private services using your Tailscale network and DNS settings. Public internet access is controlled separately.",
              description:
                "Explains that Tailscale provides private network access and DNS independently of the public internet controls",
            })),
            (ee[98] = I))
          : (I = ee[98]),
        ee[99] !== ed
          ? ((F = ed.formatMessage({
              id: "environmentSetup.vpn.networkAccessAbout",
              defaultMessage: "About Tailscale network access",
              description: "Accessible label for information about Tailscale network access and DNS",
            })),
            (ee[99] = ed),
            (ee[100] = F))
          : (F = ee[100]),
        ee[101] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, i.jsx)(eo.I, { asset: e_.c })), (ee[101] = P))
          : (P = ee[101]),
        ee[102] !== F
          ? ((N = (0, i.jsxs)("span", {
              className: "flex items-center gap-1",
              children: [
                M,
                (0, i.jsx)(J.m, {
                  content: I,
                  children: (0, i.jsx)(u.$, {
                    "aria-label": F,
                    color: "ghostSecondary",
                    size: "inline",
                    type: "button",
                    children: P,
                  }),
                }),
              ],
            })),
            (ee[102] = F),
            (ee[103] = N))
          : (N = ee[103]),
        ee[104] !== ev
          ? ((D =
              ev &&
              (0, i.jsx)(d.A, {
                id: "environmentSetup.vpn.removalPending",
                defaultMessage: "Removal pending",
                description: "The VPN will be detached when the environment is saved",
              })),
            (ee[104] = ev),
            (ee[105] = D))
          : (D = ee[105]),
        ee[106] !== eg.length || ee[107] !== ev
          ? ((O =
              !ev &&
              eg.length > 0 &&
              (0, i.jsx)(d.A, {
                id: "environmentSetup.vpn.keyChangePending",
                defaultMessage: "Key change pending",
                description: "A Tailscale key has been entered but the environment has not been saved yet",
              })),
            (ee[106] = eg.length),
            (ee[107] = ev),
            (ee[108] = O))
          : (O = ee[108]),
        ee[109] !== eg.length || ee[110] !== e1 || ee[111] !== ev
          ? ((E =
              !ev &&
              0 === eg.length &&
              (e1
                ? (0, i.jsx)(d.A, {
                    id: "environmentSetup.vpn.configured",
                    defaultMessage: "Configured",
                    description:
                      "A Tailscale key is attached to the environment; this does not indicate a tested connection",
                  })
                : (0, i.jsx)(d.A, {
                    id: "environmentSetup.vpn.notSet",
                    defaultMessage: "Key not set",
                    description: "No Tailscale key is attached to the environment",
                  }))),
            (ee[109] = eg.length),
            (ee[110] = e1),
            (ee[111] = ev),
            (ee[112] = E))
          : (E = ee[112]),
        ee[113] !== D || ee[114] !== O || ee[115] !== E
          ? ((R = (0, i.jsxs)(i.Fragment, { children: [D, O, E] })),
            (ee[113] = D),
            (ee[114] = O),
            (ee[115] = E),
            (ee[116] = R))
          : (R = ee[116]),
        ee[117] !== ed
          ? ((B = ed.formatMessage({
              id: "environmentSetup.vpn.editKey",
              defaultMessage: "Edit Tailscale auth key",
              description: "Opens the dialog for entering or replacing the Tailscale VPN key",
            })),
            (ee[117] = ed),
            (ee[118] = B))
          : (B = ee[118]),
        ee[119] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = () => eb(!0)), (V = (0, i.jsx)(p.Npl, {})), (ee[119] = H), (ee[120] = V))
          : ((H = ee[119]), (V = ee[120])),
        ee[121] !== eJ || ee[122] !== B
          ? ((z = (0, i.jsx)(u.$, {
              ref: eu,
              "aria-label": B,
              color: "ghost",
              size: "icon",
              type: "button",
              disabled: eJ,
              onClick: H,
              children: V,
            })),
            (ee[121] = eJ),
            (ee[122] = B),
            (ee[123] = z))
          : (z = ee[123]))
      let e5 = !ev && (e0 || eg.length > 0) ? e3 : null
      return (
        ee[124] !== z || ee[125] !== e5
          ? ((G = (0, i.jsxs)(i.Fragment, { children: [z, e5] })), (ee[124] = z), (ee[125] = e5), (ee[126] = G))
          : (G = ee[126]),
        ee[127] !== ev
          ? ((L = ev
              ? (0, i.jsx)("p", {
                  className: "text-sm text-secondary select-none",
                  children: (0, i.jsx)(d.A, {
                    id: "environmentSetup.vpn.removalPendingHelp",
                    defaultMessage: "Saving removes VPN and TCP destinations",
                    description:
                      "Explains that the pending VPN removal will also clear its TCP destination allowlist on the next environment save",
                  }),
                })
              : null),
            (ee[127] = ev),
            (ee[128] = L))
          : (L = ee[128]),
        ee[129] !== N || ee[130] !== R || ee[131] !== G || ee[132] !== L
          ? ((U = (0, i.jsx)(X, { icon: T, name: N, provider: R, actions: G, children: L })),
            (ee[129] = N),
            (ee[130] = R),
            (ee[131] = G),
            (ee[132] = L),
            (ee[133] = U))
          : (U = ee[133]),
        ee[134] !== eg || ee[135] !== eB || ee[136] !== eJ || ee[137] !== ey || ee[138] !== el
          ? ((q =
              ey && !eJ && el
                ? (0, i.jsx)(eM, {
                    initialValue: eg,
                    onClose: () => {
                      eb(!1)
                    },
                    onCloseAutoFocus: (e) => {
                      ;(e.preventDefault(), eu.current?.focus())
                    },
                    onSave: (e) => {
                      ;(eB({ type: "set", authKey: e }), eb(!1))
                    },
                  })
                : null),
            (ee[134] = eg),
            (ee[135] = eB),
            (ee[136] = eJ),
            (ee[137] = ey),
            (ee[138] = el),
            (ee[139] = q))
          : (q = ee[139]),
        ee[140] !== eg.length ||
        ee[141] !== eI ||
        ee[142] !== ec ||
        ee[143] !== e2 ||
        ee[144] !== eq ||
        ee[145] !== eS ||
        ee[146] !== eE ||
        ee[147] !== ew
          ? ((Z = e2
              ? (0, i.jsxs)("p", {
                  id: ec,
                  className: "py-2 text-sm text-secondary select-none",
                  role: "alert",
                  children: [
                    !eq &&
                      !eS &&
                      !eI &&
                      eg.length > 0 &&
                      !ew &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.invalidKeyFormat",
                        defaultMessage:
                          "Supported keys start with tskey-auth- and contain only letters, numbers or hyphens",
                        description:
                          "Validation error for a Tailscale auth key with an invalid prefix, character, or length",
                      }),
                    eq &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.loadFailed",
                        defaultMessage: "Couldn't refresh saved key status",
                        description: "The latest VPN key attachment metadata could not be loaded",
                      }),
                    !eq &&
                      eS &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.refreshFailed",
                        defaultMessage: "Couldn't confirm the saved key status after the change",
                        description: "The VPN change finished but the automatic read of saved key metadata failed",
                      }),
                    !eq &&
                      !eS &&
                      eI &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.configRefreshFailed",
                        defaultMessage: "VPN change saved, but the environment settings couldn't refresh",
                        description:
                          "The VPN change succeeded but the separate environment configuration refresh failed",
                      }),
                    !eq &&
                      !eS &&
                      !eI &&
                      "not-saved" === eE &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.notSaved",
                        defaultMessage: "Key wasn't saved. Paste it again and retry",
                        description: "No VPN key is attached after an attempted key save",
                      }),
                    !eq &&
                      !eS &&
                      !eI &&
                      "invalid" === eE &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.invalidKey",
                        defaultMessage: "Couldn't save key. Check that it's a Tailscale auth key and try again",
                        description: "The VPN key save request was rejected as invalid",
                      }),
                    !eq &&
                      !eS &&
                      !eI &&
                      "changed" === eE &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.changed",
                        defaultMessage: "Saved key settings changed. Review them before saving again",
                        description: "The saved VPN connection changed between opening and submitting the key field",
                      }),
                    !eq &&
                      !eS &&
                      !eI &&
                      "uncertain" === eE &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.keyUncertain",
                        defaultMessage:
                          "A key is configured, but we couldn't confirm whether the new key was saved. Re-enter a known key if needed",
                        description:
                          "A failed replacement may have updated the key, but saved metadata cannot identify which key is stored",
                      }),
                    !eq &&
                      !eS &&
                      !eI &&
                      "remove-failed" === eE &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.removeFailed",
                        defaultMessage: "VPN is still attached to this draft. Try removing it again",
                        description: "The VPN removal failed and a fresh read still shows an attached connection",
                      }),
                    !eq &&
                      !eS &&
                      !eI &&
                      "mismatch" === eE &&
                      (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.statusMismatch",
                        defaultMessage: "The refreshed key status didn't match the saved change",
                        description:
                          "The VPN save or removal succeeded but a fresh metadata read showed a different attachment",
                      }),
                  ],
                })
              : null),
            (ee[140] = eg.length),
            (ee[141] = eI),
            (ee[142] = ec),
            (ee[143] = e2),
            (ee[144] = eq),
            (ee[145] = eS),
            (ee[146] = eE),
            (ee[147] = ew),
            (ee[148] = Z))
          : (Z = ee[148]),
        ee[149] !== eB ||
        ee[150] !== eI ||
        ee[151] !== eq ||
        ee[152] !== e$ ||
        ee[153] !== eP ||
        ee[154] !== eY ||
        ee[155] !== eS ||
        ee[156] !== em?.type ||
        ee[157] !== eZ ||
        ee[158] !== eK
          ? ((K =
              eq || eS || eI
                ? (0, i.jsx)("div", {
                    className: "flex justify-end gap-2",
                    children: (0, i.jsx)(u.$, {
                      color: "secondary",
                      size: "compact",
                      type: "button",
                      disabled: eY || e$,
                      loading: eP,
                      onClick: () => {
                        ;(em?.type === "set" && eB(null),
                          eO(!0),
                          Promise.all([eZ(), eI ? eK() : Promise.resolve(null)])
                            .then((e) => {
                              let [t, n] = e
                              ;(eT(t.isError), eF(eI && null == n))
                            })
                            .finally(() => eO(!1)))
                      },
                      children: (0, i.jsx)(d.A, {
                        id: "restricted.environmentSetup.vpn.refresh",
                        defaultMessage: "Refresh",
                        description:
                          "Reloads saved VPN key metadata and environment settings after an automatic refresh fails",
                      }),
                    }),
                  })
                : null),
            (ee[149] = eB),
            (ee[150] = eI),
            (ee[151] = eq),
            (ee[152] = e$),
            (ee[153] = eP),
            (ee[154] = eY),
            (ee[155] = eS),
            (ee[156] = em?.type),
            (ee[157] = eZ),
            (ee[158] = eK),
            (ee[159] = K))
          : (K = ee[159]),
        ee[160] !== A || ee[161] !== U || ee[162] !== q || ee[163] !== Z || ee[164] !== K
          ? ((Y = (0, i.jsxs)(Q, { title: eX, actions: A, children: [U, q, Z, K] })),
            (ee[160] = A),
            (ee[161] = U),
            (ee[162] = q),
            (ee[163] = Z),
            (ee[164] = K),
            (ee[165] = Y))
          : (Y = ee[165]),
        Y
      )
    }
    function eN(e) {
      let { provider: t, auth_methods: n } = e
      return "tailscale" === t && n.includes("auth_key")
    }
    function eD() {
      let e,
        t = (0, o.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("circle", { cx: "2.5", cy: "2.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "8", cy: "2.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "13.5", cy: "2.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "2.5", cy: "8", r: "1.5" }),
                (0, i.jsx)("circle", { cx: "8", cy: "8", r: "1.5" }),
                (0, i.jsx)("circle", { cx: "13.5", cy: "8", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "2.5", cy: "13.5", r: "1.5", opacity: "0.2" }),
                (0, i.jsx)("circle", { cx: "8", cy: "13.5", r: "1.5" }),
                (0, i.jsx)("circle", { cx: "13.5", cy: "13.5", r: "1.5", opacity: "0.2" }),
              ],
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function eO(e) {
      let t,
        n,
        j,
        k,
        C,
        A,
        T,
        M,
        F,
        P,
        N,
        D,
        O,
        E = (0, o.c)(102),
        {
          configuration: R,
          draft: B,
          scriptBaseline: H,
          isReadOnly: V,
          readOnlyTooltip: z,
          onDraftChange: G,
          onDraftSaved: L,
          vpnRef: $,
          onVpnPendingChange: Z,
          panelState: K,
          secrets: W,
          config: Y,
          serverNetworkPolicy: Q,
          setSecrets: X,
          setRepositories: J,
          issues: ee,
          environmentVariables: et,
          setEnvironmentVariables: en,
          revealConnections: ei,
          section: eo,
          showTcpDetails: er,
        } = e
      E[0] !== ee ? ((t = void 0 === ee ? [] : ee), (E[0] = ee), (E[1] = t)) : (t = E[1])
      let ea = t,
        es = void 0 !== ei && ei,
        el = void 0 !== er && er,
        ed = (0, a.Ul)(c.$v),
        ec = (0, l.A)(),
        [ef, ev] = (0, s.useState)(!1),
        ex = (0, a.Ul)(q.Y),
        ey = (0, s.useId)(),
        ew = (0, s.useId)()
      E[2] !== es ? ((n = { revealConnections: es, open: es }), (E[2] = es), (E[3] = n)) : (n = E[3])
      let [eS, e_] = (0, s.useState)(n)
      ;(eS.revealConnections !== es && e_({ revealConnections: es, open: eS.open || es }),
        E[4] !== ea ? ((j = ea.filter(eH)), (E[4] = ea), (E[5] = j)) : (j = E[5]))
      let ej = j
      E[6] !== eS.open || E[7] !== ej || E[8] !== ea || E[9] !== es || E[10] !== eo
        ? ((k = eS.open || es || "tcpAccess" === eo || ej.length > 0 || ea.some(eB)),
          (E[6] = eS.open),
          (E[7] = ej),
          (E[8] = ea),
          (E[9] = es),
          (E[10] = eo),
          (E[11] = k))
        : (k = E[11])
      let ek = k,
        [eC, eA] = (0, s.useState)(null)
      return (
        V && null != eC && eA(null),
        E[12] !== Y || E[13] !== ey || E[14] !== B || E[15] !== ec || E[16] !== V || E[17] !== G || E[18] !== eo
          ? ((C =
              null == eo && null != Y
                ? (0, i.jsxs)(h.X, {
                    children: [
                      (0, i.jsx)(h.X.Header, {
                        className: "select-none",
                        size: "base",
                        spacing: "compact",
                        title: (0, i.jsx)("label", { htmlFor: ey, children: (0, i.jsx)(d.A, { ...w.S }) }),
                      }),
                      (0, i.jsx)(h.X.Content, {
                        children: (0, i.jsx)(m.TM, {
                          id: ey,
                          placeholder: ec.formatMessage({
                            id: "environmentSetup.description.placeholder",
                            defaultMessage: "Describe when to use this environment",
                            description: "Placeholder for a cloud environment description explaining when to use it",
                          }),
                          readOnly: V,
                          rows: 2,
                          value: B.description ?? "",
                          variant: "compact",
                          onChange: (e) => {
                            let t = e.currentTarget.value
                            Array.from(t).length <= 512 && G({ description: t })
                          },
                        }),
                      }),
                    ],
                  })
                : null),
            (E[12] = Y),
            (E[13] = ey),
            (E[14] = B),
            (E[15] = ec),
            (E[16] = V),
            (E[17] = G),
            (E[18] = eo),
            (E[19] = C))
          : (C = E[19]),
        E[20] !== Y ||
        E[21] !== R ||
        E[22] !== B ||
        E[23] !== V ||
        E[24] !== ea ||
        E[25] !== K ||
        E[26] !== z ||
        E[27] !== eo ||
        E[28] !== J
          ? ((A =
              null == eo || "repositories" === eo
                ? (0, i.jsx)("div", {
                    "data-environment-section": "repositories",
                    children: (0, i.jsx)(em.G, {
                      config: Y,
                      isReadOnly: V,
                      readOnlyTooltip: z,
                      onChange: J,
                      configuration: R,
                      draft: B,
                      panelState: K,
                      issues: ea,
                      showHeading: null == eo,
                    }),
                  })
                : null),
            (E[20] = Y),
            (E[21] = R),
            (E[22] = B),
            (E[23] = V),
            (E[24] = ea),
            (E[25] = K),
            (E[26] = z),
            (E[27] = eo),
            (E[28] = J),
            (E[29] = A))
          : (A = E[29]),
        E[30] !== B || E[31] !== V || E[32] !== G || E[33] !== z || E[34] !== H || E[35] !== eo
          ? ((T =
              null == eo || "scripts" === eo
                ? (0, i.jsx)("div", {
                    "data-environment-section": "scripts",
                    children: (0, i.jsx)(eg.m, {
                      baseline: H,
                      draft: B,
                      isReadOnly: V,
                      readOnlyTooltip: z,
                      onDraftChange: G,
                    }),
                  })
                : null),
            (E[30] = B),
            (E[31] = V),
            (E[32] = G),
            (E[33] = z),
            (E[34] = H),
            (E[35] = eo),
            (E[36] = T))
          : (T = E[36]),
        E[37] !== Y ||
        E[38] !== R ||
        E[39] !== B ||
        E[40] !== ec ||
        E[41] !== V ||
        E[42] !== ea ||
        E[43] !== G ||
        E[44] !== z ||
        E[45] !== W ||
        E[46] !== eo ||
        E[47] !== Q
          ? ((M =
              null == eo || "network" === eo || "secrets" === eo
                ? (0, i.jsx)(h.X, {
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        null == eo || "network" === eo
                          ? (0, i.jsx)(ep._, {
                              draft: B,
                              onDraftChange: G,
                              isReadOnly: V,
                              readOnlyTooltip: z,
                              issues: ea,
                              notice: null != R && (0, i.jsx)(U, { configuration: R }),
                              children:
                                null == Q
                                  ? (0, i.jsx)(g.ic, {
                                      className: "select-none",
                                      controlSizing: "content",
                                      variant: "featured",
                                      size: "compact",
                                      control: (0, i.jsxs)(f.Ab, {
                                        contentWidth: "menu",
                                        triggerButton: (0, i.jsxs)(x.F, {
                                          tooltipContent: V ? z : null,
                                          "aria-label": ec.formatMessage({
                                            id: "restricted.environmentSetup.configuration.network.methods.trigger",
                                            defaultMessage: "Allowed HTTPS methods",
                                            description:
                                              "Accessible label for choosing simulated cloud environment HTTPS methods",
                                          }),
                                          color: "outline",
                                          disabled: V || !0 !== B.networkEnabled,
                                          size: "settingsAction",
                                          children: [
                                            null == B.networkHttpsMethods || "all" === B.networkHttpsMethods
                                              ? (0, i.jsx)(d.A, {
                                                  id: "restricted.environmentSetup.configuration.network.methods.all",
                                                  defaultMessage: "All",
                                                  description:
                                                    "Option allowing all HTTPS methods in a simulated cloud environment",
                                                })
                                              : B.networkHttpsMethods,
                                            (0, i.jsx)(p.Awc, {}),
                                          ],
                                        }),
                                        children: [
                                          (0, i.jsx)(f.ms.Item, {
                                            disabled: V,
                                            onSelect: () => G({ networkHttpsMethods: "all" }),
                                            children: (0, i.jsx)(d.A, {
                                              id: "restricted.environmentSetup.configuration.network.methods.all",
                                              defaultMessage: "All",
                                              description:
                                                "Option allowing all HTTPS methods in a simulated cloud environment",
                                            }),
                                          }),
                                          (0, i.jsx)(f.ms.Item, {
                                            disabled: V,
                                            onSelect: () => G({ networkHttpsMethods: "GET" }),
                                            children: (0, i.jsx)(d.A, {
                                              id: "environmentSetup.network.methods.get",
                                              defaultMessage: "GET",
                                              description: "The HTTP GET method name; preserve the protocol name",
                                            }),
                                          }),
                                          (0, i.jsx)(f.ms.Item, {
                                            disabled: V,
                                            onSelect: () => G({ networkHttpsMethods: "GET, POST" }),
                                            children: (0, i.jsx)(d.A, {
                                              id: "environmentSetup.network.methods.getPost",
                                              defaultMessage: "GET, POST",
                                              description:
                                                "The HTTP GET and POST method names; preserve the protocol names",
                                            }),
                                          }),
                                        ],
                                      }),
                                      label: (0, i.jsx)(d.A, {
                                        id: "restricted.environmentSetup.configuration.network.methods",
                                        defaultMessage: "Allowed HTTPS methods",
                                        description:
                                          "Label for allowed HTTPS methods in a mocked cloud environment settings panel",
                                      }),
                                    })
                                  : null,
                            })
                          : null,
                        null == eo || "network" === eo
                          ? (0, i.jsx)(I, { disabled: V, portals: B.portals, onChange: (e) => G({ portals: e }) })
                          : null,
                        null == eo || "secrets" === eo
                          ? (0, i.jsx)(b.m, {
                              secrets: W,
                              issues: ea,
                              isReadOnly: V,
                              readOnlyTooltip: z,
                              showHeading: null == eo,
                              onEdit: () => eA({ config: Y, secrets: W }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null),
            (E[37] = Y),
            (E[38] = R),
            (E[39] = B),
            (E[40] = ec),
            (E[41] = V),
            (E[42] = ea),
            (E[43] = G),
            (E[44] = z),
            (E[45] = W),
            (E[46] = eo),
            (E[47] = Q),
            (E[48] = M))
          : (M = E[48]),
        E[49] !== Y ||
        E[50] !== R ||
        E[51] !== et ||
        E[52] !== V ||
        E[53] !== ea ||
        E[54] !== z ||
        E[55] !== W ||
        E[56] !== eo ||
        E[57] !== en
          ? ((F =
              null == en || (null != eo && "variables" !== eo)
                ? null
                : (0, i.jsx)(_.W, {
                    configuration: R,
                    config: Y,
                    variables: et ?? [],
                    issues: ea,
                    unavailableNames: W.flatMap(eR),
                    isReadOnly: V,
                    readOnlyTooltip: z,
                    onChange: en,
                    showHeading: null == eo,
                  })),
            (E[49] = Y),
            (E[50] = R),
            (E[51] = et),
            (E[52] = V),
            (E[53] = ea),
            (E[54] = z),
            (E[55] = W),
            (E[56] = eo),
            (E[57] = en),
            (E[58] = F))
          : (F = E[58]),
        E[59] !== ed ||
        E[60] !== Y?.is_owner ||
        E[61] !== B ||
        E[62] !== ec ||
        E[63] !== V ||
        E[64] !== G ||
        E[65] !== z ||
        E[66] !== eo
          ? ((P =
              null == eo || "privacy" === eo
                ? (0, i.jsxs)("section", {
                    className: "flex flex-col",
                    "data-environment-section": "privacy",
                    children: [
                      (0, i.jsx)(h.X.Header, {
                        className: "select-none",
                        size: "base",
                        spacing: "compact",
                        title: (0, i.jsx)(d.A, {
                          id: "restricted.environmentSetup.configuration.privacy.title",
                          defaultMessage: "Privacy",
                          description: "Heading for privacy controls in a mocked cloud environment settings panel",
                        }),
                      }),
                      (0, i.jsx)(h.X.Content, {
                        children: (0, i.jsx)(v.t, {
                          children: (0, i.jsx)(g.ic, {
                            className: "select-none",
                            controlSizing: "content",
                            variant: "featured",
                            size: "compact",
                            control: (0, i.jsxs)(f.Ab, {
                              contentWidth: "menu",
                              triggerButton: (0, i.jsxs)(x.F, {
                                tooltipContent: V ? z : null,
                                color: "outline",
                                disabled: V,
                                size: "settingsAction",
                                children: [
                                  (0, i.jsx)(p.nr3, {}),
                                  "organization" === B.access
                                    ? (0, i.jsx)(eh.s3, {})
                                    : (0, i.jsx)(d.A, {
                                        id: "restricted.environmentSetup.configuration.privacy.private",
                                        defaultMessage: "Only me",
                                        description:
                                          "Privacy option limiting a simulated cloud environment to its creator",
                                      }),
                                  (0, i.jsx)(p.Awc, {}),
                                ],
                              }),
                              children: [
                                (0, i.jsx)(f.ms.Item, {
                                  disabled: V || Y?.is_owner === !1,
                                  focusableWhenDisabled: !0,
                                  tooltipText:
                                    Y?.is_owner === !1
                                      ? ec.formatMessage({
                                          id: "environmentSetup.sharing.ownerOnlyTooltip",
                                          defaultMessage: "Ask the environment owner to make it private",
                                          description:
                                            "Tooltip on the disabled Only me sharing option when someone other than the environment owner is editing a shared environment",
                                        })
                                      : void 0,
                                  onSelect: () => G({ access: "private" }),
                                  children: (0, i.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.privacy.private",
                                    defaultMessage: "Only me",
                                    description: "Privacy option limiting a simulated cloud environment to its creator",
                                  }),
                                }),
                                ed &&
                                  (0, i.jsx)(f.ms.Item, {
                                    disabled: V,
                                    onSelect: () => G({ access: "organization" }),
                                    children: (0, i.jsx)(eh.s3, {}),
                                  }),
                              ],
                            }),
                            label: (0, i.jsx)(d.A, {
                              id: "restricted.environmentSetup.configuration.privacy.label",
                              defaultMessage: "Who can use",
                              description: "Label for choosing who can use a simulated cloud environment",
                            }),
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (E[59] = ed),
            (E[60] = Y?.is_owner),
            (E[61] = B),
            (E[62] = ec),
            (E[63] = V),
            (E[64] = G),
            (E[65] = z),
            (E[66] = eo),
            (E[67] = P))
          : (P = E[67]),
        E[68] !== ew ||
        E[69] !== Y ||
        E[70] !== R ||
        E[71] !== ej ||
        E[72] !== B ||
        E[73] !== V ||
        E[74] !== ea ||
        E[75] !== G ||
        E[76] !== L ||
        E[77] !== Z ||
        E[78] !== ex ||
        E[79] !== z ||
        E[80] !== ef ||
        E[81] !== es ||
        E[82] !== eo ||
        E[83] !== ek ||
        E[84] !== el ||
        E[85] !== $
          ? ((N =
              (null == eo || "connections" === eo || "tcpAccess" === eo) && (ex || ("connections" !== eo && null != R))
                ? (0, i.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    "data-environment-section": "connections",
                    children: [
                      null == eo
                        ? (0, i.jsxs)(u.$, {
                            className: "gap-2 self-start text-base",
                            "aria-controls": ew,
                            "aria-expanded": ek,
                            color: "ghostMuted",
                            size: "inline",
                            onClick: () => e_({ revealConnections: es, open: !ek }),
                            children: [
                              (0, i.jsx)(d.A, {
                                id: "restricted.environmentSetup.oic.advanced",
                                defaultMessage: "Advanced",
                                description: "Disclosure for advanced environment configuration",
                              }),
                              (0, i.jsx)(p.Aq_, { className: (0, r.A)(!ek && "-rotate-90") }),
                            ],
                          })
                        : null,
                      (0, i.jsx)("div", {
                        id: ew,
                        hidden: !ek,
                        children: (0, i.jsx)(v.t, {
                          dividers: !1,
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col gap-2.5 px-4 py-3",
                            children: [
                              "tcpAccess" !== eo
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      ex && ek
                                        ? (0, i.jsx)(
                                            eu,
                                            {
                                              configuration: R,
                                              requirements: B.outboundIdentityRequirements,
                                              issues: ej,
                                              isReadOnly: V,
                                              showHeading: null == eo,
                                              onChange: (e) => G({ outboundIdentityRequirements: e }),
                                            },
                                            null == R
                                              ? "local-environment"
                                              : `oic:${R.accountId}:${R.userId}:${R.configId}`,
                                          )
                                        : null,
                                      null == eo && null != R
                                        ? (0, i.jsx)(
                                            eP,
                                            {
                                              ref: $,
                                              configuration: R,
                                              isReadOnly: V,
                                              isVisible: ek,
                                              onDraftSaved: L,
                                              onPendingChange: (e, t, n) => {
                                                ;(ev(!0 === n), Z?.(e, t))
                                              },
                                            },
                                            `vpn:${R.accountId}:${R.userId}:${R.configId}:${R.draftId ?? ""}`,
                                          )
                                        : null,
                                    ],
                                  })
                                : null,
                              "tcpAccess" === eo && null != R
                                ? (0, i.jsx)(
                                    eb,
                                    {
                                      configuration: R,
                                      config: Y,
                                      access: ef ? { ip_ranges: [], domains: [] } : B.tcpNetworkAccess,
                                      disabled: V || ef,
                                      disabledTooltip: z,
                                      issues: ea.filter(eE),
                                      showDetails: el || "tcpAccess" === eo,
                                      onChange: (e) => G({ tcpNetworkAccess: e }),
                                    },
                                    `tcp:${R.accountId}:${R.userId}:${R.configId}:${R.draftId ?? ""}`,
                                  )
                                : null,
                            ],
                          }),
                        }),
                      }),
                    ],
                  })
                : null),
            (E[68] = ew),
            (E[69] = Y),
            (E[70] = R),
            (E[71] = ej),
            (E[72] = B),
            (E[73] = V),
            (E[74] = ea),
            (E[75] = G),
            (E[76] = L),
            (E[77] = Z),
            (E[78] = ex),
            (E[79] = z),
            (E[80] = ef),
            (E[81] = es),
            (E[82] = eo),
            (E[83] = ek),
            (E[84] = el),
            (E[85] = $),
            (E[86] = N))
          : (N = E[86]),
        E[87] !== Y || E[88] !== R || E[89] !== eC || E[90] !== V || E[91] !== X
          ? ((D =
              null == eC || V
                ? null
                : (0, i.jsx)(y.b, {
                    configuration: R,
                    initialSecrets: eC.secrets,
                    hasConflict: (0, S.p)(Y, eC.config),
                    requireValues: !1,
                    onClose: () => eA(null),
                    onLocalSave: X,
                  })),
            (E[87] = Y),
            (E[88] = R),
            (E[89] = eC),
            (E[90] = V),
            (E[91] = X),
            (E[92] = D))
          : (D = E[92]),
        E[93] !== T ||
        E[94] !== M ||
        E[95] !== F ||
        E[96] !== P ||
        E[97] !== N ||
        E[98] !== D ||
        E[99] !== C ||
        E[100] !== A
          ? ((O = (0, i.jsxs)(i.Fragment, { children: [C, A, T, M, F, P, N, D] })),
            (E[93] = T),
            (E[94] = M),
            (E[95] = F),
            (E[96] = P),
            (E[97] = N),
            (E[98] = D),
            (E[99] = C),
            (E[100] = A),
            (E[101] = O))
          : (O = E[101]),
        O
      )
    }
    function eE(e) {
      let { field: t } = e
      return "tcpAccess" === t
    }
    function eR(e) {
      let t = e.injectionTarget
      return t?.type === "environment_variable" ? [t.name] : []
    }
    function eB(e) {
      let { field: t, code: n } = e
      return "tcpAccess" === t || "tcp-unavailable" === n
    }
    function eH(e) {
      let { field: t } = e
      return t?.startsWith("connection-")
    }
  },
  JN4M(e, t, n) {
    var i = n("SRbQ"),
      o = n("zTeN"),
      r = n("GaA7"),
      a = n("OWtl"),
      s = n("Wuyk"),
      l = n("rvFo")
    let d = (0, o.vU)(a.u, (e) => {
      let t = r.appServices?.environmentConfigs
      return {
        queryKey: ["environment-outbound-identity", e?.accountId, e?.userId, e?.configId],
        enabled: null != t && null != e,
        staleTime: l.D.FIVE_SECONDS,
        refetchOnMount: "always",
        retry: s.kh,
        queryFn: async () => {
          let n = { stack: [], error: void 0, hasError: !1 }
          try {
            if (null == t || null == e) throw Error("Outbound identity is unavailable")
            let o = (0, i.mS)(
              n,
              await t.listOutboundIdentityConnections({
                accountId: e.accountId,
                userId: e.userId,
                configId: e.configId,
              }),
              !1,
            )
            if (
              !o.ok &&
              ("unavailable" === o.error ||
                ("http" === o.error &&
                  null != o.status &&
                  (408 === o.status || 425 === o.status || 429 === o.status || (o.status >= 500 && o.status < 600))))
            )
              throw Error("Outbound identity is unavailable")
            return o.ok ? { ok: !0, data: o.data } : { ok: !1, error: o.error, status: o.status }
          } catch (e) {
            ;((n.error = e), (n.hasError = !0))
          } finally {
            ;(0, i.hk)(n)
          }
        },
      }
    })
    n.d(t, {}, { h: d })
  },
  R3Dy(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      r = n("oyxz")
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            n,
            a = (0, o.c)(7),
            { error: s } = e
          if (403 === s.status) {
            let e
            ;(a[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "restricted.environmentSetup.oic.accessError",
                  defaultMessage:
                    "You do not have access to this operation, or outbound identity is unavailable for this workspace",
                  description:
                    "Explains denied outbound identity operations, including unavailable connections and disabled workspace rollout",
                })),
                (a[0] = e))
              : (e = a[0]),
              (t = e))
          } else if (409 === s.status) {
            let e
            ;(a[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "restricted.environmentSetup.oic.conflictError",
                  defaultMessage:
                    "This connection changed while you were editing. Close and reopen it to load the current settings before saving",
                  description: "Recovery instructions when an outbound identity edit uses an old configuration version",
                })),
                (a[1] = e))
              : (e = a[1]),
              (t = e))
          } else if (400 === s.status || "invalid-request" === s.error) {
            let e
            ;(a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "restricted.environmentSetup.oic.configurationError",
                  defaultMessage:
                    "Check the provider fields, subject template, and custom claims. Claims must be a JSON object with string values and cannot replace reserved claims",
                  description: "Validation error for an outbound identity configuration",
                })),
                (a[2] = e))
              : (e = a[2]),
              (t = e))
          } else if ("authentication" === s.error || 401 === s.status) {
            let e
            ;(a[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "restricted.environmentSetup.oic.authenticationError",
                  defaultMessage:
                    "Your signed-in account changed or is unavailable. Sign in to this workspace and try again",
                  description: "Authentication error when the account changes during outbound identity management",
                })),
                (a[3] = e))
              : (e = a[3]),
              (t = e))
          } else {
            let e
            ;(a[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "restricted.environmentSetup.oic.requestError",
                  defaultMessage:
                    "Outbound identity is unavailable. Reload the connections and check whether your change was saved before trying again",
                  description:
                    "Recovery for an unavailable outbound identity request whose write outcome may be unknown",
                })),
                (a[4] = e))
              : (e = a[4]),
              (t = e))
          }
          return (
            a[5] !== t
              ? ((n = (0, i.jsx)("p", { role: "alert", className: "text-sm text-danger select-none", children: t })),
                (a[5] = t),
                (a[6] = n))
              : (n = a[6]),
            n
          )
        },
      },
    )
  },
  Y8ve(e, t, n) {
    var i = n("ABep"),
      o = n("QosV"),
      r = n("zTeN"),
      a = n("oyxz"),
      s = n("SPnB"),
      l = n("OAko"),
      d = n("JN4M")
    function c(e) {
      let { host: t } = e
      return t
    }
    n.d(
      t,
      {},
      {
        VV: function (e) {
          let t,
            n,
            r = (0, o.c)(8),
            { policy: s } = e
          if ("disabled" === s.type) {
            let e
            return (
              r[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(a.A, {
                    id: "restricted.environmentSetup.result.network.disabled",
                    defaultMessage: "Disabled",
                    description: "Value shown when networking is disabled for an environment setup result",
                  })),
                  (r[0] = e))
                : (e = r[0]),
              e
            )
          }
          if ("unrestricted" === s.type) {
            let e
            return (
              r[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(a.A, {
                    id: "restricted.environmentSetup.result.network.unrestricted",
                    defaultMessage: "Unrestricted",
                    description: "Summary for an environment that allows unrestricted network access",
                  })),
                  (r[1] = e))
                : (e = r[1]),
              e
            )
          }
          r[2] !== s.egress_rules
            ? ((t = new Set(s.egress_rules.map(c))), (r[2] = s.egress_rules), (r[3] = t))
            : (t = r[3])
          let l = t.size
          if (s.presets?.includes("package_managers")) {
            let e
            return (
              r[4] !== l
                ? ((e =
                    l > 0
                      ? (0, i.jsx)(a.A, {
                          id: "restricted.environmentSetup.result.network.packageManagersWithDomains",
                          defaultMessage:
                            "Package managers + {count, plural, one {# allowed domain} other {# allowed domains}}",
                          description:
                            "Network summary for the package-manager preset plus separately allowed domains; the count excludes domains supplied by the preset",
                          values: { count: l },
                        })
                      : (0, i.jsx)(a.A, {
                          id: "restricted.environmentSetup.result.network.packageManagers",
                          defaultMessage: "Package managers",
                          description: "Network summary when only the package-manager preset is allowed",
                        })),
                  (r[4] = l),
                  (r[5] = e))
                : (e = r[5]),
              e
            )
          }
          return (
            r[6] !== l
              ? ((n = (0, i.jsx)(a.A, {
                  id: "restricted.environmentSetup.result.network.domains",
                  defaultMessage: "{count, plural, one {# allowed domain} other {# allowed domains}}",
                  description:
                    "Number of explicitly allowed domains in a restricted environment network policy without presets",
                  values: { count: l },
                })),
                (r[6] = l),
                (r[7] = n))
              : (n = r[7]),
            n
          )
        },
        a7: function (e) {
          let t,
            n = (0, o.c)(2),
            { script: r } = e
          return (
            n[0] !== r
              ? ((t = r?.trim()
                  ? (0, i.jsx)(a.A, {
                      id: "environmentSetup.result.script.configured",
                      defaultMessage: "Configured",
                      description:
                        "Summary indicating that an environment install script or start skill contains non-whitespace content; this does not indicate review or validation",
                    })
                  : (0, i.jsx)(a.A, {
                      id: "restricted.environmentSetup.result.script.empty",
                      defaultMessage: "Not set",
                      description: "Summary for an empty environment install script or start skill",
                    })),
                (n[0] = r),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        iq: function (e) {
          let t,
            n,
            a = (0, o.c)(5),
            { configuration: s, requirement: l } = e,
            { data: c } = (0, r._U)(d.h, s)
          a[0] !== l || a[1] !== c
            ? ((t = c?.ok
                ? c.data.items.find((e) => {
                    let { connection_id: t } = e
                    return t === l.connection_id
                  })
                : void 0),
              (a[0] = l),
              (a[1] = c),
              (a[2] = t))
            : (t = a[2])
          let u = t,
            f = u?.display_name ?? l.connection_id
          return (a[3] !== f ? ((n = (0, i.jsx)(i.Fragment, { children: f })), (a[3] = f), (a[4] = n)) : (n = a[4]), n)
        },
        s3: function (e) {
          let t,
            n,
            d = (0, o.c)(8),
            { detail: c } = e,
            { data: u } = (0, l.YL)(),
            f = (0, r.Ul)(s.chatGptAuthenticatedAccountId$)
          d[0] !== u?.id || d[1] !== u?.name || d[2] !== f
            ? ((t = u?.id === f ? u?.name?.trim() : void 0), (d[0] = u?.id), (d[1] = u?.name), (d[2] = f), (d[3] = t))
            : (t = d[3])
          let p = t
          if (void 0 !== c && c) {
            let e
            return (
              d[4] !== p
                ? ((e = p
                    ? (0, i.jsx)(a.A, {
                        id: "restricted.environmentSetup.access.organizationDescriptionNamed",
                        defaultMessage: "Everyone in {workspaceName} can access",
                        description:
                          "Help text below the organization access option in environment onboarding. workspaceName is the authenticated workspace's display name; selecting the option lets its members use the environment",
                        values: { workspaceName: p },
                      })
                    : (0, i.jsx)(a.A, {
                        id: "restricted.environmentSetup.access.organizationDescriptionFallback",
                        defaultMessage: "Everyone in this workspace can access",
                        description:
                          "Help text below the organization access option in environment onboarding while the authenticated workspace name is unavailable; selecting the option lets workspace members use the environment",
                      })),
                  (d[4] = p),
                  (d[5] = e))
                : (e = d[5]),
              e
            )
          }
          return (
            d[6] !== p
              ? ((n = p
                  ? (0, i.jsx)(a.A, {
                      id: "restricted.environmentSetup.access.organizationName",
                      defaultMessage: "Everyone at {workspaceName}",
                      description:
                        "Short visibility option in environment onboarding, settings, task summary, and result. workspaceName is the authenticated workspace's display name; the other option is private access",
                      values: { workspaceName: p },
                    })
                  : (0, i.jsx)(a.A, {
                      id: "restricted.environmentSetup.access.organizationFallback",
                      defaultMessage: "Everyone in this workspace",
                      description:
                        "Short visibility option in environment onboarding, settings, task summary, and result while the authenticated workspace name is unavailable; the other option is private access",
                    })),
                (d[6] = p),
                (d[7] = n))
              : (n = d[7]),
            n
          )
        },
      },
    )
  },
  n0dE(e, t, n) {
    n.d(t, { m: () => N })
    var i = n("ABep"),
      o = n("QosV"),
      r = n("al5A"),
      a = n("on57"),
      s = n("zd8w"),
      l = n("Wf1j"),
      d = n("oyxz"),
      c = n("Qgfj"),
      u = n("ygO2"),
      f = n("JNtf"),
      p = n("mUDD"),
      m = n("GO7r"),
      h = n("X3K1"),
      g = n("kPrN"),
      v = n("BSnr"),
      x = n("AWNZ"),
      y = n("ZEx5"),
      b = n("NxjN"),
      w = n("mmw9"),
      S = n("PfPV"),
      _ = n("Mrrv"),
      j = n("DBCl"),
      k = n("Ovip"),
      C = n("uNhY"),
      A = n("RxZZ"),
      T = n("leP5"),
      M = n("dDkj")
    function I(e) {
      let t,
        n,
        r,
        a,
        l,
        d,
        c,
        u,
        f = (0, o.c)(20),
        { label: p, language: m, value: h, onChange: g } = e
      f[0] !== p || f[1] !== m || f[2] !== h
        ? ((t = () => ({ name: p, lang: m, contents: h })), (f[0] = p), (f[1] = m), (f[2] = h), (f[3] = t))
        : (t = f[3])
      let [v] = (0, s.useState)(t),
        x = (0, M.P)(),
        y = (0, M._)(x),
        b = (0, A.iK)(j.oKj.lightCodeThemeId),
        w = (0, A.iK)(j.oKj.darkCodeThemeId)
      f[4] !== y || f[5] !== w || f[6] !== b
        ? ((n = "light" === y ? (0, T.oW)(b, "light") : (0, T.oW)(w, "dark")),
          (f[4] = y),
          (f[5] = w),
          (f[6] = b),
          (f[7] = n))
        : (n = f[7])
      let I = n
      ;(f[8] === Symbol.for("react.memo_cache_sentinel") ? ((r = { onAttach: F }), (f[8] = r)) : (r = f[8]),
        f[9] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, C.S)()), (f[9] = a)) : (a = f[9]))
      let N = I.name
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, k.M)({
              includeDiffHeader: !1,
              includeSimpleLineSeparators: !1,
              rootSelector: "[data-file]",
              surface: "var(--color-surface)",
            })),
            (f[10] = l))
          : (l = f[10]),
        f[11] !== y || f[12] !== I.name
          ? ((d = {
              preferredHighlighter: a,
              disableFileHeader: !0,
              overflow: "wrap",
              theme: N,
              themeType: y,
              useTokenTransformer: !0,
              unsafeCSS: `${l}
              [data-file], [data-code] {
                min-height: inherit;
              }
              [data-code] {
                align-content: start;
              }
              [data-file] {
                /* Align the editor's caret and selection overlays to code rows. */
                --diffs-line-height: round(nearest, calc(var(--diffs-font-size, 12px) * 1.8), 1px);
                line-height: var(--diffs-line-height);
              }
            `,
            }),
            (f[11] = y),
            (f[12] = I.name),
            (f[13] = d))
          : (d = f[13]),
        f[14] !== g ? ((c = (e) => g(e.file.contents)), (f[14] = g), (f[15] = c)) : (c = f[15]),
        f[16] !== v || f[17] !== d || f[18] !== c
          ? ((u = (0, i.jsx)("div", {
              className: "max-h-96 overflow-y-auto",
              children: (0, i.jsx)(S.eo, {
                createEditor: P,
                children: (0, i.jsx)(_.Z, {
                  className:
                    "min-h-40 [--diffs-dark:currentColor] [--diffs-editor-selection-bg:var(--color-background-info-soft)] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch]",
                  disableWorkerPool: !0,
                  edit: !0,
                  editorOptions: r,
                  file: v,
                  options: d,
                  onEditChange: c,
                }),
              }),
            })),
            (f[16] = v),
            (f[17] = d),
            (f[18] = c),
            (f[19] = u))
          : (u = f[19]),
        u
      )
    }
    function F(e) {
      return e.focus({ lineNumber: 1 })
    }
    function P(e, t, n) {
      return new w.K(e, t, n)
    }
    function N(e) {
      let t,
        n,
        r,
        c,
        u,
        f,
        p = (0, o.c)(20),
        { baseline: h, draft: g, isReadOnly: w, readOnlyTooltip: S, showHeading: _, onDraftChange: j } = e,
        k = void 0 === _ || _,
        C = (0, l.A)(),
        [A, T] = (0, s.useState)(null)
      return (
        w && null != A && T(null),
        p[0] !== k
          ? ((t =
              k &&
              (0, i.jsx)(v.X.Header, {
                className: "select-none",
                size: "base",
                spacing: "compact",
                title: (0, i.jsx)(d.A, { ...R.scripts }),
              })),
            (p[0] = k),
            (p[1] = t))
          : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = ["setupScript", "startSkill"]), (p[2] = n))
          : (n = p[2]),
        p[3] !== g || p[4] !== C || p[5] !== w || p[6] !== S
          ? ((r = (0, i.jsx)(v.X.Content, {
              children: (0, i.jsx)(y.t, {
                children: n.map((e) =>
                  (0, i.jsx)(
                    x.ic,
                    {
                      className: "select-none",
                      controlSizing: "content",
                      variant: "featured",
                      size: "compact",
                      label: (0, i.jsxs)("div", {
                        className: "flex min-w-0 items-center justify-between gap-3",
                        children: [
                          (0, i.jsx)("span", {
                            className: "shrink-0 select-none",
                            children: (0, i.jsx)(d.A, { ...R[e] }),
                          }),
                          (0, i.jsx)("span", {
                            className: (0, a.A)("truncate text-secondary", g[e] && "font-mono"),
                            children: g[e] || (0, i.jsx)(d.A, { ...R.empty }),
                          }),
                        ],
                      }),
                      control: (0, i.jsx)(b.F, {
                        "aria-label": C.formatMessage(R[e]),
                        color: "ghost",
                        disabled: w,
                        tooltipContent: w ? S : null,
                        size: "icon",
                        onClick: () => T(e),
                        children: (0, i.jsx)(m.Npl, {}),
                      }),
                    },
                    e,
                  ),
                ),
              }),
            })),
            (p[3] = g),
            (p[4] = C),
            (p[5] = w),
            (p[6] = S),
            (p[7] = r))
          : (r = p[7]),
        p[8] !== t || p[9] !== r
          ? ((c = (0, i.jsxs)(v.X, { children: [t, r] })), (p[8] = t), (p[9] = r), (p[10] = c))
          : (c = p[10]),
        p[11] !== h || p[12] !== g || p[13] !== A || p[14] !== w || p[15] !== j
          ? ((u =
              null == A || w
                ? null
                : (0, i.jsx)(D, {
                    field: A,
                    baseline: null == h ? void 0 : (h["setupScript" === A ? "install_script" : "start_skill"] ?? ""),
                    value: g[A] ?? "",
                    onClose: () => T(null),
                    onSave: (e) => {
                      ;(j({ [A]: e }), T(null))
                    },
                  })),
            (p[11] = h),
            (p[12] = g),
            (p[13] = A),
            (p[14] = w),
            (p[15] = j),
            (p[16] = u))
          : (u = p[16]),
        p[17] !== c || p[18] !== u
          ? ((f = (0, i.jsxs)(i.Fragment, { children: [c, u] })), (p[17] = c), (p[18] = u), (p[19] = f))
          : (f = p[19]),
        f
      )
    }
    function D(e) {
      let t,
        n,
        r,
        a,
        c,
        m,
        h,
        g,
        v,
        x,
        y,
        b = (0, o.c)(33),
        { field: w, baseline: S, value: _, onClose: j, onSave: k } = e,
        C = (0, l.A)(),
        [A, T] = (0, s.useState)(),
        [M, F] = (0, s.useState)(null == S || S === _),
        P = A ?? _,
        N = null != S && S !== P,
        D = M || !N,
        B = "setupScript" === w ? "install.sh" : "SKILL.md"
      ;(b[0] !== j ? ((t = (e) => !e && j()), (b[0] = j), (b[1] = t)) : (t = b[1]),
        b[2] !== k || b[3] !== P
          ? ((n = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), k(P))
            }),
            (b[2] = k),
            (b[3] = P),
            (b[4] = n))
          : (n = b[4]))
      let H = R[w]
      return (
        b[5] !== H
          ? ((r = (0, i.jsx)(p.OO, {
              children: (0, i.jsx)(p.c7, { title: (0, i.jsx)(f.L3, { children: (0, i.jsx)(d.A, { ...H }) }) }),
            })),
            (b[5] = H),
            (b[6] = r))
          : (r = b[6]),
        b[7] !== S || b[8] !== w || b[9] !== B || b[10] !== C || b[11] !== P || b[12] !== D || b[13] !== _
          ? ((a = (0, i.jsx)(p.OO, {
              children: (0, i.jsx)("div", {
                className: "overflow-hidden border border-subtle",
                children: D
                  ? (0, i.jsx)(
                      I,
                      {
                        label: C.formatMessage(R[w]),
                        language: "setupScript" === w ? "bash" : "markdown",
                        value: P,
                        onChange: T,
                      },
                      _,
                    )
                  : (0, i.jsx)(E, { baseline: S ?? "", filename: B, proposed: P }),
              }),
            })),
            (b[7] = S),
            (b[8] = w),
            (b[9] = B),
            (b[10] = C),
            (b[11] = P),
            (b[12] = D),
            (b[13] = _),
            (b[14] = a))
          : (a = b[14]),
        b[15] !== N || b[16] !== D
          ? ((c =
              N &&
              (0, i.jsx)(u.$, {
                color: "secondary",
                onClick: () => F(!D),
                children: D
                  ? (0, i.jsx)(d.A, {
                      id: "environmentSetup.script.reviewChanges",
                      defaultMessage: "Review changes",
                      description:
                        "Return from editing the proposed environment script to its diff against the last reviewed script",
                    })
                  : (0, i.jsx)(d.A, {
                      id: "environmentSetup.script.edit",
                      defaultMessage: "Edit",
                      description:
                        "Edit the proposed install script or start skill shown in the environment configuration diff",
                    }),
              })),
            (b[15] = N),
            (b[16] = D),
            (b[17] = c))
          : (c = b[17]),
        b[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
              description: "Discard edits in a cloud environment configuration dialog",
            })),
            (b[18] = m))
          : (m = b[18]),
        b[19] !== j
          ? ((h = (0, i.jsx)(u.$, { color: "secondary", onClick: j, children: m })), (b[19] = j), (b[20] = h))
          : (h = b[20]),
        b[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)(u.$, {
              color: "primary",
              type: "submit",
              children: (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.configuration.dialog.save",
                defaultMessage: "Save",
                description: "Apply dialog edits to the cloud environment configuration being edited",
              }),
            })),
            (b[21] = g))
          : (g = b[21]),
        b[22] !== c || b[23] !== h
          ? ((v = (0, i.jsx)(p.OO, { children: (0, i.jsxs)(p.Es, { children: [c, h, g] }) })),
            (b[22] = c),
            (b[23] = h),
            (b[24] = v))
          : (v = b[24]),
        b[25] !== v || b[26] !== n || b[27] !== r || b[28] !== a
          ? ((x = (0, i.jsxs)(p.R4, {
              as: "form",
              size: "viewport",
              onKeyDownCapture: O,
              onSubmit: n,
              children: [r, a, v],
            })),
            (b[25] = v),
            (b[26] = n),
            (b[27] = r),
            (b[28] = a),
            (b[29] = x))
          : (x = b[29]),
        b[30] !== t || b[31] !== x
          ? ((y = (0, i.jsx)(f.lG, { open: !0, size: "xxwide", onOpenChange: t, children: x })),
            (b[30] = t),
            (b[31] = x),
            (b[32] = y))
          : (y = b[32]),
        y
      )
    }
    function O(e) {
      "Enter" === e.key &&
        (e.metaKey || e.ctrlKey) &&
        (e.preventDefault(), e.stopPropagation(), e.currentTarget.requestSubmit())
    }
    function E(e) {
      let t,
        n,
        l,
        c,
        u,
        f,
        p = (0, o.c)(17),
        { baseline: m, filename: v, proposed: x } = e,
        [y, b] = (0, s.useState)(!1)
      p[0] !== m || p[1] !== v || p[2] !== x
        ? ((t = (0, r.$)({ name: v, contents: m }, { name: v, contents: x })),
          (p[0] = m),
          (p[1] = v),
          (p[2] = x),
          (p[3] = t))
        : (t = p[3])
      let w = t,
        S = !y,
        _ = y ? "relative" : "absolute inset-x-0 top-0"
      return (
        p[4] !== _
          ? ((n = (0, a.A)(
              "overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]",
              _,
            )),
            (p[4] = _),
            (p[5] = n))
          : (n = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (e) => {
              e.shadowRoot?.querySelector("[data-line], [data-error-wrapper]") && b(!0)
            }),
            (p[6] = l))
          : (l = p[6]),
        p[7] !== w || p[8] !== n
          ? ((c = (0, i.jsx)(g.FileDiff, {
              className: n,
              diffStyle: "unified",
              expandUnchanged: !0,
              fileDiff: w,
              hunkSeparators: "simple",
              overflow: "wrap",
              onPostRender: l,
            })),
            (p[7] = w),
            (p[8] = n),
            (p[9] = c))
          : (c = p[9]),
        p[10] !== w || p[11] !== y
          ? ((u =
              !y &&
              (0, i.jsxs)("div", {
                className: "relative bg-surface px-3 pt-2 pb-3 text-sm",
                role: "status",
                children: [
                  (0, i.jsx)("span", {
                    className: "sr-only",
                    children: (0, i.jsx)(d.A, {
                      id: "codex.review.diff.loading",
                      defaultMessage: "Loading diff",
                      description: "Placeholder text shown while a review file diff is loading",
                    }),
                  }),
                  (0, i.jsx)(h.P, { lines: Math.min(w.unifiedLineCount, 12), minWidth: 42, maxWidth: 96 }),
                ],
              })),
            (p[10] = w),
            (p[11] = y),
            (p[12] = u))
          : (u = p[12]),
        p[13] !== S || p[14] !== c || p[15] !== u
          ? ((f = (0, i.jsxs)("div", {
              className: "relative max-h-96 overflow-y-auto",
              "aria-busy": S,
              children: [c, u],
            })),
            (p[13] = S),
            (p[14] = c),
            (p[15] = u),
            (p[16] = f))
          : (f = p[16]),
        f
      )
    }
    n("HEJl")
    let R = (0, c.YK)({
      scripts: {
        id: "restricted.environmentSetup.configuration.scripts.title",
        defaultMessage: "Scripts",
        description: "Heading for cloud environment install commands and startup instructions",
      },
      setupScript: {
        id: "restricted.environmentSetup.configuration.installScript.title",
        defaultMessage: "Install script",
        description: "Heading for setup commands that install dependencies in a cloud environment",
      },
      startSkill: {
        id: "restricted.environmentSetup.configuration.startSkill.title",
        defaultMessage: "Start skill",
        description: "Heading for the skill used to start a configured cloud environment",
      },
      empty: {
        id: "restricted.environmentSetup.configuration.script.empty",
        defaultMessage: "Not set",
        description: "Preview for cloud environment installation or startup instructions that have not been configured",
      },
    })
  },
  leP5(e, t, n) {
    var i = n("DzLn")
    n.d(
      t,
      { DM: () => i.DM, I9: () => i.I9, _C: () => i._C, aD: () => i.aD, oW: () => i.oW },
      {
        EM: function (e, t) {
          return (0, i.EM)(e, t, "electron")
        },
      },
    )
  },
  AH8M(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "cloud-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
        visualBounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.001465, y: 2.667969, width: 17.99707, height: 12.99707 },
        center: { x: 10, y: 9.166504 },
        insets: { top: 2.667969, right: 1.001465, bottom: 4.334961, left: 1.001465 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 9.166504 }, foreground: { x: 10, y: 9.166504 } },
      },
      capabilities: ["icon"],
      body: '<path d="M1.00146 10.833C1.00146 8.52389 2.6207 6.59406 4.78564 6.11523C5.64822 4.08974 7.65705 2.6681 9.99951 2.66797C12.9202 2.66797 15.3224 4.87836 15.6294 7.71777C17.5386 8.01995 18.9984 9.67212 18.9985 11.666C18.9985 13.8742 17.2077 15.665 14.9995 15.665H5.8335C3.16504 15.665 1.00146 13.5015 1.00146 10.833ZM2.33154 10.833C2.33154 12.7669 3.89958 14.335 5.8335 14.335H14.9995C16.4732 14.335 17.6685 13.1397 17.6685 11.666C17.6683 10.2488 16.5626 9.08908 15.1675 9.00293C14.7207 8.97537 14.3506 8.61516 14.3315 8.15137C14.2366 5.84171 12.3328 3.99805 9.99951 3.99805C8.14049 3.99818 6.55348 5.16887 5.93799 6.81543C5.82644 7.11391 5.5635 7.32722 5.25342 7.37891C3.59561 7.65482 2.33154 9.09703 2.33154 10.833Z" fill="currentColor"/>',
    })
    n.d(t, {}, { k: i })
  },
  JQE9(e, t, n) {
    let i = (0, n("nkTT").a)({
      name: "google-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.844727, y: 1.666626, width: 16.31082, height: 16.666626 },
        visualBounds: { x: 1.844727, y: 1.666626, width: 16.31082, height: 16.666626 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          { role: "fixed", color: "#3086FF" },
          { role: "fixed", color: "#1ABD4D" },
          { role: "fixed", color: "#6EC30D" },
          { role: "fixed", color: "#8AC502" },
          { role: "fixed", color: "#A2C600" },
          { role: "fixed", color: "#C8C903" },
          { role: "fixed", color: "#EBCB03" },
          { role: "fixed", color: "#F7CD07" },
          { role: "fixed", color: "#FDCD04" },
          { role: "fixed", color: "#FDCE05" },
          { role: "fixed", color: "#FFCE0A" },
          { role: "fixed", color: "#FB4E5A" },
          { role: "fixed", color: "#FF4540" },
          { role: "fixed", color: "#FF4541" },
          { role: "fixed", color: "#FF4640" },
          { role: "fixed", color: "#FF473F" },
          { role: "fixed", color: "#FF5138" },
          { role: "fixed", color: "#FF5B33" },
          { role: "fixed", color: "#FF6C29" },
          { role: "fixed", color: "#FF8C18" },
          { role: "fixed", color: "#0CBA65" },
          { role: "fixed", color: "#0BB86D" },
          { role: "fixed", color: "#09B479" },
          { role: "fixed", color: "#08AD93" },
          { role: "fixed", color: "#0AA6A9" },
          { role: "fixed", color: "#0D9CC6" },
          { role: "fixed", color: "#1893DD" },
          { role: "fixed", color: "#258BF1" },
          { role: "fixed", color: "#FF4E3A" },
          { role: "fixed", color: "#FF8A1B" },
          { role: "fixed", color: "#FFA312" },
          { role: "fixed", color: "#FFB60C" },
          { role: "fixed", color: "#FFCD0A" },
          { role: "fixed", color: "#FECF0A" },
          { role: "fixed", color: "#FECF08" },
          { role: "fixed", color: "#FDCD01" },
          { role: "fixed", color: "#FF4C3C" },
          { role: "fixed", color: "#FF692C" },
          { role: "fixed", color: "#FF7825" },
          { role: "fixed", color: "#FF8D1B" },
          { role: "fixed", color: "#FF9F13" },
          { role: "fixed", color: "#0FBC5F" },
          { role: "fixed", color: "#0FBC5E" },
          { role: "fixed", color: "#0FBC5D" },
          { role: "fixed", color: "#12BC58" },
          { role: "fixed", color: "#28BF3C" },
          { role: "fixed", color: "#38C02B" },
          { role: "fixed", color: "#52C218" },
          { role: "fixed", color: "#67C30F" },
          { role: "fixed", color: "#86C504" },
          { role: "fixed", color: "#0FBC5C" },
        ],
      },
      optical: {
        shape: "circular",
        bounds: { x: 1.844727, y: 1.666626, width: 16.31082, height: 16.666626 },
        center: { x: 10.000137, y: 9.999939 },
        insets: { top: 1.666626, right: 1.844453, bottom: 1.666748, left: 1.844727 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10.000137, y: 9.999939 } },
      },
      capabilities: ["icon", "mask"],
      body: '<g transform="scale(1)"><mask mask-type="alpha" id="mask0_12431_95" maskUnits="userSpaceOnUse" x="2" y="1" width="16" height="18"> <path d="M17.8464 8.48416H10.1704V11.6256H14.581C14.5101 12.0702 14.3509 12.5076 14.1178 12.9064C13.8507 13.3633 13.5204 13.7112 13.182 13.9761C12.1681 14.7696 10.986 14.9319 10.1651 14.9319C8.09127 14.9319 6.31936 13.5629 5.63341 11.7027C5.60573 11.6352 5.58735 11.5655 5.56496 11.4966C5.41338 11.0231 5.33056 10.5217 5.33056 10.0006C5.33056 9.45821 5.42025 8.93902 5.58377 8.44867C6.2288 6.51475 8.04066 5.07029 10.1666 5.07029C10.5941 5.07029 11.0059 5.12228 11.3964 5.22597C12.2888 5.46294 12.9201 5.92965 13.3069 6.29881L15.6408 3.96428C14.2211 2.63474 12.3704 1.8291 10.1627 1.8291C8.39777 1.82906 6.76833 2.39071 5.43307 3.3399C4.35021 4.10967 3.46211 5.1403 2.86275 6.33726C2.30526 7.44709 2 8.67698 2 9.99936C2 11.3218 2.30573 12.5645 2.86322 13.664V13.6714C3.45207 14.8388 4.31316 15.8439 5.35974 16.6101C6.27403 17.2795 7.91344 18.171 10.1627 18.171C11.4561 18.171 12.6025 17.9328 13.6135 17.4865C14.3428 17.1645 14.989 16.7445 15.5741 16.2047C16.3471 15.4914 16.9525 14.6092 17.3657 13.5943C17.779 12.5793 18 11.4315 18 10.1871C18 9.60756 17.943 9.01901 17.8464 8.4841V8.48416Z" fill="black"/> </mask> <g mask="url(#mask0_12431_95)"> <g filter="url(#filter0_f_12431_95)"> <path d="M1.88184 10.0547C1.89032 11.3562 2.25344 12.6991 2.80307 13.7832V13.7907C3.20021 14.578 3.74298 15.1998 4.36119 15.816L8.09503 14.4245C7.38861 14.058 7.28081 13.8334 6.77443 13.4236C6.25694 12.8907 5.87126 12.2788 5.63107 11.5614H5.62139L5.63107 11.5539C5.47305 11.0802 5.45747 10.5773 5.45164 10.0547H1.88184Z" fill="url(#paint0_radial_12431_95)"/> </g> <g filter="url(#filter1_f_12431_95)"> <path d="M10.1703 1.76953C9.80123 3.09377 9.94233 4.38097 10.1703 5.12992C10.5964 5.13024 11.007 5.18213 11.3963 5.28549C12.2887 5.52246 12.9199 5.98918 13.3067 6.35835L15.7004 3.96418C14.2823 2.63622 12.5758 1.77162 10.1703 1.76953Z" fill="url(#paint1_radial_12431_95)"/> </g> <g filter="url(#filter2_f_12431_95)"> <path d="M10.1624 1.75879C8.35223 1.75875 6.68097 2.33481 5.31143 3.30838C4.80291 3.66986 4.33626 4.08744 3.92073 4.55179C3.81188 5.59486 4.73562 6.87689 6.5649 6.86628C7.45246 5.81179 8.76513 5.12953 10.2262 5.12953C10.2275 5.12953 10.2288 5.12964 10.2301 5.12965L10.1704 1.75903C10.1677 1.75903 10.1651 1.75879 10.1624 1.75879Z" fill="url(#paint2_radial_12431_95)"/> </g> <g filter="url(#filter3_f_12431_95)"> <path d="M16.1366 10.4327L14.5208 11.5664C14.4499 12.011 14.2906 12.4483 14.0575 12.8471C13.7904 13.3041 13.4602 13.6519 13.1217 13.9168C12.1099 14.7087 10.9309 14.8718 10.1102 14.8725C9.26192 16.3481 9.1132 17.0873 10.1699 18.2783C11.4774 18.2773 12.6366 18.0362 13.6591 17.5848C14.3982 17.2585 15.053 16.8328 15.6459 16.2858C16.4293 15.563 17.0429 14.6689 17.4617 13.6403C17.8805 12.6117 18.1044 11.4486 18.1044 10.1875L16.1366 10.4327Z" fill="url(#paint3_radial_12431_95)"/> </g> <g filter="url(#filter4_f_12431_95)"> <path d="M10.0508 8.36523V11.7454H17.8245C17.8928 11.2825 18.119 10.6835 18.119 10.1875C18.119 9.60801 18.062 8.90014 17.9654 8.36523H10.0508Z" fill="#3086FF"/> </g> <g filter="url(#filter5_f_12431_95)"> <path d="M3.95759 4.43262C3.47787 4.96871 3.06804 5.56875 2.7431 6.21769C2.18562 7.32751 1.88037 8.67675 1.88037 9.99912C1.88037 10.0178 1.88188 10.036 1.882 10.0546C2.12889 10.5381 5.29235 10.4455 5.45181 10.0546C5.45161 10.0364 5.44959 10.0186 5.44959 10.0003C5.44959 9.45791 5.53931 9.05814 5.70283 8.56779C5.90456 7.96295 6.22043 7.40598 6.62433 6.9261C6.71589 6.80671 6.96012 6.55004 7.03137 6.39609C7.05852 6.33745 6.9821 6.30453 6.97782 6.28389C6.97304 6.26081 6.87058 6.27937 6.84763 6.26218C6.77475 6.20757 6.63043 6.17906 6.54279 6.15372C6.35547 6.09955 6.04504 5.98008 5.87261 5.85625C5.32758 5.4648 4.47701 4.99723 3.95759 4.43262Z" fill="url(#paint4_radial_12431_95)"/> </g> <g filter="url(#filter6_f_12431_95)"> <path d="M5.88446 6.28664C7.14833 7.06859 7.5118 5.89194 8.3521 5.52374L6.89037 2.42773C6.35267 2.65856 5.84465 2.94534 5.37328 3.28042C4.66933 3.78083 4.04769 4.39148 3.53418 5.0864L5.88446 6.28664Z" fill="url(#paint5_radial_12431_95)"/> </g> <g filter="url(#filter7_f_12431_95)"> <path d="M6.39961 14.1858C4.70303 14.8114 4.43742 14.8338 4.28125 15.9077C4.57968 16.2052 4.90033 16.4803 5.24106 16.7298C6.15536 17.3992 7.91406 18.2907 10.1633 18.2907C10.1659 18.2907 10.1685 18.2905 10.1711 18.2905V14.8127C10.1694 14.8127 10.1674 14.8128 10.1657 14.8128C9.32348 14.8128 8.65043 14.5869 7.96035 14.194C7.79021 14.0971 7.48152 14.3572 7.3246 14.2409C7.10817 14.0805 6.58733 14.3791 6.39961 14.1858Z" fill="url(#paint6_radial_12431_95)"/> </g> <g opacity="0.5" filter="url(#filter8_f_12431_95)"> <path d="M9.17725 14.7031V18.2302C9.49195 18.2678 9.81947 18.2906 10.163 18.2906C10.5075 18.2906 10.8407 18.2726 11.1645 18.2394V14.7269C10.8016 14.7903 10.4599 14.8128 10.1655 14.8128C9.82645 14.8128 9.49672 14.7725 9.17725 14.7031Z" fill="url(#paint7_linear_12431_95)"/> </g> </g> <defs> <filter id="filter0_f_12431_95" x="1.85379" y="10.0266" width="6.26923" height="5.81782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter1_f_12431_95" x="9.91531" y="1.74148" width="5.81318" height="4.64496" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter2_f_12431_95" x="3.88406" y="1.73074" width="6.37421" height="5.16352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter3_f_12431_95" x="9.39724" y="10.1595" width="8.7353" height="8.14692" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter4_f_12431_95" x="10.0227" y="8.33719" width="8.12421" height="3.43598" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter5_f_12431_95" x="1.85232" y="4.40457" width="5.21284" height="6.00727" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter6_f_12431_95" x="3.33699" y="2.23054" width="5.21226" height="4.51646" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0985963" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter7_f_12431_95" x="4.2532" y="14.1438" width="5.94599" height="4.17524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <filter id="filter8_f_12431_95" x="9.1492" y="14.6751" width="2.0434" height="3.64399" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/> <feGaussianBlur stdDeviation="0.0140243" result="effect1_foregroundBlur_12431_95"/> </filter> <radialGradient id="paint0_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.02028 15.6934) rotate(-92.3395) scale(8.14501 11.964)"> <stop offset="0.141612" stop-color="#1ABD4D"/> <stop offset="0.247515" stop-color="#6EC30D"/> <stop offset="0.311547" stop-color="#8AC502"/> <stop offset="0.366013" stop-color="#A2C600"/> <stop offset="0.445673" stop-color="#C8C903"/> <stop offset="0.540305" stop-color="#EBCB03"/> <stop offset="0.615636" stop-color="#F7CD07"/> <stop offset="0.699345" stop-color="#FDCD04"/> <stop offset="0.771242" stop-color="#FDCE05"/> <stop offset="0.860566" stop-color="#FFCE0A"/> </radialGradient> <radialGradient id="paint1_radial_12431_95" cx="0" cy="0" r="1" gradientTransform="matrix(5.64645 -1.38605e-05 -7.93631e-06 7.29208 15.4764 6.18512)" gradientUnits="userSpaceOnUse"> <stop offset="0.408458" stop-color="#FB4E5A"/> <stop offset="1" stop-color="#FF4540"/> </radialGradient> <radialGradient id="paint2_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.393 0.703235) rotate(151.02) scale(9.04344 12.2719)"> <stop offset="0.231273" stop-color="#FF4541"/> <stop offset="0.311547" stop-color="#FF4540"/> <stop offset="0.457516" stop-color="#FF4640"/> <stop offset="0.540305" stop-color="#FF473F"/> <stop offset="0.699346" stop-color="#FF5138"/> <stop offset="0.771242" stop-color="#FF5B33"/> <stop offset="0.860566" stop-color="#FF6C29"/> <stop offset="1" stop-color="#FF8C18"/> </radialGradient> <radialGradient id="paint3_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2875 17.2206) rotate(-127.454) scale(23.5921 8.70842)"> <stop offset="0.131546" stop-color="#0CBA65"/> <stop offset="0.209784" stop-color="#0BB86D"/> <stop offset="0.297297" stop-color="#09B479"/> <stop offset="0.396257" stop-color="#08AD93"/> <stop offset="0.477124" stop-color="#0AA6A9"/> <stop offset="0.568425" stop-color="#0D9CC6"/> <stop offset="0.667385" stop-color="#1893DD"/> <stop offset="0.768727" stop-color="#258BF1"/> <stop offset="0.858506" stop-color="#3086FF"/> </radialGradient> <radialGradient id="paint4_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.4691 3.30239) rotate(96.6178) scale(8.80992 12.1812)"> <stop offset="0.366013" stop-color="#FF4E3A"/> <stop offset="0.457516" stop-color="#FF8A1B"/> <stop offset="0.540305" stop-color="#FFA312"/> <stop offset="0.615636" stop-color="#FFB60C"/> <stop offset="0.771242" stop-color="#FFCD0A"/> <stop offset="0.860566" stop-color="#FECF0A"/> <stop offset="0.915033" stop-color="#FECF08"/> <stop offset="1" stop-color="#FDCD01"/> </radialGradient> <radialGradient id="paint5_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.04147 3.21205) rotate(132.119) scale(4.37581 12.3422)"> <stop offset="0.315904" stop-color="#FF4C3C"/> <stop offset="0.603818" stop-color="#FF692C"/> <stop offset="0.726837" stop-color="#FF7825"/> <stop offset="0.884534" stop-color="#FF8D1B"/> <stop offset="1" stop-color="#FF9F13"/> </radialGradient> <radialGradient id="paint6_radial_12431_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.3937 19.2966) rotate(-151.02) scale(9.04344 12.2719)"> <stop offset="0.231273" stop-color="#0FBC5F"/> <stop offset="0.311547" stop-color="#0FBC5F"/> <stop offset="0.366013" stop-color="#0FBC5E"/> <stop offset="0.457516" stop-color="#0FBC5D"/> <stop offset="0.540305" stop-color="#12BC58"/> <stop offset="0.699346" stop-color="#28BF3C"/> <stop offset="0.771242" stop-color="#38C02B"/> <stop offset="0.860566" stop-color="#52C218"/> <stop offset="0.915033" stop-color="#67C30F"/> <stop offset="1" stop-color="#86C504"/> </radialGradient> <linearGradient id="paint7_linear_12431_95" x1="9.17725" y1="16.4969" x2="11.1645" y2="16.4969" gradientUnits="userSpaceOnUse"> <stop stop-color="#0FBC5C"/> <stop offset="1" stop-color="#0CBA65"/> </linearGradient> </defs></g>',
    })
    n.d(t, {}, { U: i })
  },
  Mrrv(e, t, n) {
    n.d(t, { Z: () => w })
    var i = n("RemT"),
      o = n("rmBY"),
      r = n("wXf1"),
      a = n("MY1k"),
      s = n("t2Dd"),
      l = n("XT8t"),
      d = n("OTgz"),
      c = n("n2zW"),
      u = n("mw9U"),
      f = n("PfPV"),
      p = n("FPqT"),
      m = n("hnHY"),
      h = n("z8rX"),
      g = n("zd8w")
    let v = "u" < typeof window ? g.useEffect : g.useLayoutEffect
    function x({
      options: e,
      controlledSelection: t,
      hasCustomHeader: n,
      hasGutterRenderUtility: i,
      onEditChange: o,
      onEditComplete: r,
    }) {
      return t || i || n || null != o || null != r
        ? {
            ...e,
            controlledSelection: t,
            renderCustomHeader: n ? p.Zk : e?.renderCustomHeader,
            renderGutterUtility: i ? p.Zk : e?.renderGutterUtility,
            onEditChange: o,
            onEditComplete: r,
          }
        : e
    }
    function y(e, t) {
      let n = t()
      try {
        return n.edit(e)
      } catch (e) {
        throw (n.cleanUp(), e)
      }
    }
    var b = n("ABep")
    function w({
      file: e,
      lineAnnotations: t,
      selectedLines: n,
      options: p,
      editorOptions: S,
      editStateKey: _,
      metrics: j,
      className: k,
      style: C,
      renderAnnotation: A,
      renderCustomHeader: T,
      renderHeaderPrefix: M,
      renderHeaderFilenameSuffix: I,
      renderHeaderMetadata: F,
      prerenderedHTML: P,
      renderGutterUtility: N,
      disableWorkerPool: D = !1,
      edit: O = !1,
      onEditChange: E,
      onEditComplete: R,
    }) {
      let {
          ref: B,
          getHoveredLine: H,
          getAnnotationSlotName: V,
        } = (function ({
          file: e,
          options: t,
          editorOptions: n,
          editStateKey: i,
          lineAnnotations: o,
          selectedLines: r,
          prerenderedHTML: p,
          metrics: b,
          hasGutterRenderUtility: w,
          hasCustomHeader: S,
          disableWorkerPool: _,
          edit: j,
          onEditChange: k,
          onEditComplete: C,
        }) {
          let A = (0, h.Te)(),
            T = void 0 !== r,
            M = (0, g.useContext)(m.Al),
            I = (0, f.Bi)(),
            F = (0, u.K)((e) => k?.(e)),
            P = null != k ? F : void 0,
            N = (0, g.useRef)(null),
            D = (0, u.K)((e) => {
              let t = C?.(e) ?? "reject"
              return (
                "accept" === t &&
                  (N.current = {
                    file: { installed: e.file, stale: e.originalFile },
                    annotations: { installed: e.lineAnnotations, stale: e.originalLineAnnotations },
                  }),
                t
              )
            }),
            O = null != C ? D : void 0,
            E = (0, g.useRef)(null),
            R = (0, g.useRef)(null),
            B = (0, u.K)(() => {
              if (null == I) throw Error("File: EditContext is not attached")
              return I("file", n ?? {}, i)
            }),
            H = (0, u.K)((n) => {
              if (null != n) {
                if (null != E.current) throw Error("File: An instance should not already exist when a node is created")
                ;(null != A
                  ? (E.current = new c.A(
                      x({
                        controlledSelection: T,
                        hasCustomHeader: S,
                        hasGutterRenderUtility: w,
                        onEditChange: P,
                        onEditComplete: O,
                        options: t,
                      }),
                      A,
                      b,
                      !_ ? M : void 0,
                      !0,
                    ))
                  : (E.current = new d.Z(
                      x({
                        controlledSelection: T,
                        hasCustomHeader: S,
                        hasGutterRenderUtility: w,
                        onEditChange: P,
                        onEditComplete: O,
                        options: t,
                      }),
                      !_ ? M : void 0,
                      !0,
                    )),
                  j && null == R.current && (R.current = y(E.current, B)),
                  E.current.hydrate({ file: e, fileContainer: n, lineAnnotations: o, prerenderedHTML: p }))
              } else {
                if (null == E.current) throw Error("File: A File instance should exist when unmounting")
                ;(E.current.cleanUp(), (E.current = null), (R.current = null))
              }
            })
          return (
            v(() => {
              let { current: n } = E
              if (null == n) return
              let i = x({
                  controlledSelection: T,
                  hasCustomHeader: S,
                  hasGutterRenderUtility: w,
                  onEditChange: P,
                  onEditComplete: O,
                  options: t,
                }),
                l = void 0 !== i && !(0, a.l)(n.options, i)
              if ((n.setOptions(i), !j && null != R.current)) {
                let { current: e } = R
                ;((R.current = null), e())
              }
              let d = (function (e, t, n) {
                let { current: i } = n
                if (null == i) return { file: e, lineAnnotations: t }
                let { file: o, annotations: r } = i,
                  a = e
                null != o && ((0, s.t)(e, o.stale) ? (a = o.installed) : (i.file = null))
                let l = t
                return (
                  null != r && (t === r.stale ? (l = r.installed) : (i.annotations = null)),
                  null == i.file && null == i.annotations && (n.current = null),
                  { file: a, lineAnnotations: l }
                )
              })(e, o, N)
              ;(n.render({ file: d.file, lineAnnotations: d.lineAnnotations, forceRender: l }),
                void 0 !== r && n.setSelectedLines(r),
                j && null == R.current && (R.current = y(n, B)))
            }),
            {
              ref: H,
              getHoveredLine: (0, g.useCallback)(() => E.current?.getHoveredLine(), []),
              getAnnotationSlotName: (0, g.useCallback)((e) => E.current?.getAnnotationSlotName(e) ?? (0, l.V)(e), []),
            }
          )
        })({
          file: e,
          options: p,
          editorOptions: S,
          editStateKey: _,
          metrics: j,
          lineAnnotations: t,
          selectedLines: n,
          prerenderedHTML: P,
          hasGutterRenderUtility: null != N,
          hasCustomHeader: null != T,
          disableWorkerPool: D,
          edit: O,
          onEditChange: E,
          onEditComplete: R,
        }),
        z = (0, o.Q)({
          file: e,
          renderAnnotation: A,
          renderCustomHeader: T,
          renderHeaderPrefix: M,
          renderHeaderFilenameSuffix: I,
          renderHeaderMetadata: F,
          renderGutterUtility: N,
          lineAnnotations: t,
          getHoveredLine: H,
          getAnnotationSlotName: V,
        })
      return (0, b.jsx)(i.mZ, { ref: B, className: k, style: C, children: (0, r.$)(z, P) })
    }
  },
  swDA(e, t, n) {
    n.d(t, { qg: () => g })
    let i = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i
    class o extends Date {
      #e = !1
      #t = !1
      #n = null
      constructor(e) {
        let t = !0,
          n = !0,
          o = "Z"
        if ("string" == typeof e) {
          let r = e.match(i)
          r
            ? (r[1] || ((t = !1), (e = `0000-01-01T${e}`)),
              (n = !!r[2]) && " " === e[10] && (e = e.replace(" ", "T")),
              r[2] && +r[2] > 23 ? (e = "") : ((o = r[3] || null), (e = e.toUpperCase()), !o && n && (e += "Z")))
            : (e = "")
        }
        ;(super(e), isNaN(this.getTime()) || ((this.#e = t), (this.#t = n), (this.#n = o)))
      }
      isDateTime() {
        return this.#e && this.#t
      }
      isLocal() {
        return !this.#e || !this.#t || !this.#n
      }
      isDate() {
        return this.#e && !this.#t
      }
      isTime() {
        return this.#t && !this.#e
      }
      isValid() {
        return this.#e || this.#t
      }
      toISOString() {
        let e = super.toISOString()
        if (this.isDate()) return e.slice(0, 10)
        if (this.isTime()) return e.slice(11, 23)
        if (null === this.#n) return e.slice(0, -1)
        if ("Z" === this.#n) return e
        let t = 60 * this.#n.slice(1, 3) + +this.#n.slice(4, 6)
        return (
          (t = "-" === this.#n[0] ? t : -t),
          new Date(this.getTime() - 6e4 * t).toISOString().slice(0, -1) + this.#n
        )
      }
      static wrapAsOffsetDateTime(e, t = "Z") {
        let n = new o(e)
        return ((n.#n = t), n)
      }
      static wrapAsLocalDateTime(e) {
        let t = new o(e)
        return ((t.#n = null), t)
      }
      static wrapAsLocalDate(e) {
        let t = new o(e)
        return ((t.#t = !1), (t.#n = null), t)
      }
      static wrapAsLocalTime(e) {
        let t = new o(e)
        return ((t.#e = !1), (t.#n = null), t)
      }
    }
    class r extends Error {
      line
      column
      codeblock
      constructor(e, t) {
        var n, i
        let o,
          [r, a] = ((n = t.toml), (i = t.ptr), [(o = n.slice(0, i).split(/\r\n|\n|\r/g)).length, o.pop().length + 1]),
          s = (function (e, t, n) {
            let i = e.split(/\r\n|\n|\r/g),
              o = "",
              r = (0 | Math.log10(t + 1)) + 1
            for (let e = t - 1; e <= t + 1; e++) {
              let a = i[e - 1]
              a &&
                ((o += e.toString().padEnd(r, " ")),
                (o += ":  "),
                (o += a),
                (o += "\n"),
                e === t && ((o += " ".repeat(r + n + 2)), (o += "^\n")))
            }
            return o
          })(t.toml, r, a)
        ;(super(
          `Invalid TOML document: ${e}

${s}`,
          t,
        ),
          (this.line = r),
          (this.column = a),
          (this.codeblock = s))
      }
    }
    let a = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
      s = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
      l = /^[+-]?0[0-9_]/
    function d(e, t) {
      let n = e[t++],
        i = n,
        o = "'" === n,
        a = n === e[t] && n === e[t + 1]
      a && ("\n" === e[(t += 2)] ? t++ : "\r" === e[t] && "\n" === e[t + 1] && (t += 2))
      let s = "",
        l = t,
        d = 0
      for (let c = t; c < e.length; c++)
        if (((n = e[c]), a && ("\n" === n || ("\r" === n && "\n" === e[c + 1])))) d = d && 3
        else if ((n < " " && "	" !== n) || "" === n)
          throw new r("control characters are not allowed in strings", { toml: e, ptr: c })
        else if ((!d || 3 === d) && n === i && (!a || (e[c + 1] === i && e[c + 2] === i)))
          return (a && (e[c + 3] === i && c++, e[c + 3] === i && c++), [d ? s : s + e.slice(l, c), c + (a ? 3 : 1)])
        else if (d) {
          if (1 === d)
            if ("x" === n || "u" === n || "U" === n) {
              let t = 0,
                i = "x" === n ? 2 : "u" === n ? 4 : 8
              for (let n = 0; n < i; n++, c++) {
                let n = e.charCodeAt(c + 1),
                  i =
                    n >= 48 && n <= 57
                      ? n - 48
                      : n >= 65 && n <= 70
                        ? n - 65 + 10
                        : n >= 97 && n <= 102
                          ? n - 97 + 10
                          : -1
                if (i < 0) throw new r("invalid non-hex character in unicode escape", { toml: e, ptr: c + 1 })
                t = (t << 4) | i
              }
              if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
                throw new r("invalid unicode escape", { toml: e, ptr: c })
              ;((s += String.fromCodePoint(t)), (l = c + 1), (d = 0))
            } else if (" " === n || "	" === n) d = 2
            else {
              if ("b" === n) s += "\b"
              else if ("t" === n) s += "	"
              else if ("n" === n) s += "\n"
              else if ("f" === n) s += "\f"
              else if ("r" === n) s += "\r"
              else if ("e" === n) s += "\x1b"
              else if ('"' === n) s += '"'
              else if ("\\" === n) s += "\\"
              else throw new r("unrecognized escape sequence", { toml: e, ptr: c })
              ;((l = c + 1), (d = 0))
            }
          else if (" " !== n && "	" !== n) {
            if (2 === d) throw new r("invalid escape: only line-ending whitespace may be escaped", { toml: e, ptr: l })
            ;((d = +(!o && "\\" === n)), (l = c))
          }
        } else o || "\\" !== n || ((s += e.slice(l, (l = c))), (d = 1))
      throw new r("unfinished string", { toml: e, ptr: t })
    }
    function c(e, t = 0, n = e.length) {
      let i = e.indexOf("\n", t)
      return ("\r" === e[i - 1] && i--, i <= n ? i : -1)
    }
    function u(e, t) {
      for (let n = t; n < e.length; n++) {
        let i = e[n]
        if ("\n" === i) return n
        if ("\r" === i && "\n" === e[n + 1]) return n + 1
        if ((i < " " && "	" !== i) || "" === i)
          throw new r("control characters are not allowed in comments", { toml: e, ptr: t })
      }
      return e.length
    }
    function f(e, t, n, i) {
      let o
      for (;;) {
        for (; " " === (o = e[t]) || "	" === o || (!n && ("\n" === o || ("\r" === o && "\n" === e[t + 1])));) t++
        if (i || "#" !== o) break
        t = u(e, t)
      }
      return t
    }
    let p = /^[a-zA-Z0-9-_]+[ \t]*$/
    function m(e, t, n = "=") {
      let i = t - 1,
        o = [],
        a = e.indexOf(n, t)
      if (a < 0) throw new r("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
      do {
        let s = e[(t = ++i)]
        if (" " !== s && "	" !== s)
          if ('"' === s || "'" === s) {
            if (s === e[t + 1] && s === e[t + 2])
              throw new r("multiline strings are not allowed in keys", { toml: e, ptr: t })
            let [l, u] = d(e, t)
            i = e.indexOf(".", u)
            let f = e.slice(u, i < 0 || i > a ? a : i),
              p = c(f)
            if (p > -1) throw new r("newlines are not allowed in keys", { toml: e, ptr: t + i + p })
            if (f.trimStart()) throw new r("found extra tokens after the string part", { toml: e, ptr: u })
            if (a < u && (a = e.indexOf(n, u)) < 0)
              throw new r("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
            o.push(l)
          } else {
            i = e.indexOf(".", t)
            let n = e.slice(t, i < 0 || i > a ? a : i)
            if (!p.test(n))
              throw new r("only letter, numbers, dashes and underscores are allowed in keys", { toml: e, ptr: t })
            o.push(n.trimEnd())
          }
      } while (i + 1 && i < a)
      return [o, f(e, a + 1, !0, !0)]
    }
    function h(e, t, n, i) {
      let o,
        r,
        a = t,
        s = n,
        l = !1
      for (let t = 0; t < e.length; t++) {
        if (t) {
          if (((a = l ? a[o] : (a[o] = {})), (s = (r = s[o]).c), 0 === i && (1 === r.t || 2 === r.t))) return null
          if (2 === r.t) {
            let e = a.length - 1
            ;((a = a[e]), (s = s[e].c))
          }
        }
        if ((l = Object.hasOwn(a, (o = e[t]))) && s[o]?.t === 0 && s[o]?.d) return null
        l ||
          ("__proto__" === o &&
            (Object.defineProperty(a, o, { enumerable: !0, configurable: !0, writable: !0 }),
            Object.defineProperty(s, o, { enumerable: !0, configurable: !0, writable: !0 })),
          (s[o] = { t: t < e.length - 1 && 2 === i ? 3 : i, d: !1, i: 0, c: {} }))
      }
      if (
        ((r = s[o]).t !== i && (1 !== i || 3 !== r.t)) ||
        (2 === i &&
          (r.d || ((r.d = !0), (a[o] = [])), a[o].push((a = {})), (r.c[r.i++] = r = { t: 1, d: !1, i: 0, c: {} })),
        r.d)
      )
        return null
      if (((r.d = !0), 1 === i)) a = l ? a[o] : (a[o] = {})
      else if (0 === i && l) return null
      return [o, a, r.c]
    }
    function g(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
      let i = {},
        p = {},
        v = i,
        x = p
      for (let g = f(e, 0); g < e.length;) {
        if ("[" === e[g]) {
          let t = "[" === e[++g],
            n = m(e, (g += +t), "]")
          if (t) {
            if ("]" !== e[n[1] - 1]) throw new r("expected end of table declaration", { toml: e, ptr: n[1] - 1 })
            n[1]++
          }
          let o = h(n[0], i, p, t ? 2 : 1)
          if (!o) throw new r("trying to redefine an already defined table or value", { toml: e, ptr: g })
          ;((x = o[2]), (v = o[1]), (g = n[1]))
        } else {
          let i = m(e, g),
            p = h(i[0], v, x, 0)
          if (!p) throw new r("trying to redefine an already defined table or value", { toml: e, ptr: g })
          let y = (function e(t, n, i, p, h) {
            var g
            let v, x
            if (0 === p) throw new r("document contains excessively nested structures. aborting.", { toml: t, ptr: n })
            let y = t[n]
            if ("[" === y || "{" === y) {
              let [o, a] =
                "[" === y
                  ? (function (t, n, i, o) {
                      let a,
                        s = []
                      for (n++; "]" !== (a = t[n++]) && a;)
                        if ("," === a) throw new r("expected value, found comma", { toml: t, ptr: n - 1 })
                        else if ("#" === a) n = u(t, n)
                        else if (" " !== a && "	" !== a && "\n" !== a && "\r" !== a) {
                          let r = e(t, n - 1, "]", i - 1, o)
                          ;(s.push(r[0]), (n = r[1]))
                        }
                      if (!a) throw new r("unfinished array encountered", { toml: t, ptr: n })
                      return [s, n]
                    })(t, n, p, h)
                  : (function (t, n, i, o) {
                      let a,
                        s = {},
                        l = new Set()
                      for (n++; "}" !== (a = t[n++]) && a;)
                        if ("," === a) throw new r("expected value, found comma", { toml: t, ptr: n - 1 })
                        else if ("#" === a) n = u(t, n)
                        else if (" " !== a && "	" !== a && "\n" !== a && "\r" !== a) {
                          let a,
                            d = s,
                            c = !1,
                            [u, f] = m(t, n - 1)
                          for (let e = 0; e < u.length; e++) {
                            if (
                              (e && (d = c ? d[a] : (d[a] = {})),
                              (c = Object.hasOwn(d, (a = u[e]))) && ("object" != typeof d[a] || l.has(d[a])))
                            )
                              throw new r("trying to redefine an already defined value", { toml: t, ptr: n })
                            c ||
                              "__proto__" !== a ||
                              Object.defineProperty(d, a, { enumerable: !0, configurable: !0, writable: !0 })
                          }
                          if (c) throw new r("trying to redefine an already defined value", { toml: t, ptr: n })
                          let [p, h] = e(t, f, "}", i - 1, o)
                          ;(l.add(p), (d[a] = p), (n = h))
                        }
                      if (!a) throw new r("unfinished table encountered", { toml: t, ptr: n })
                      return [s, n]
                    })(t, n, p, h)
              if (i) {
                if (((a = f(t, a)), "," === t[a])) a++
                else if (t[a] !== i) throw new r("expected comma or end of structure", { toml: t, ptr: a })
              }
              return [o, a]
            }
            if ('"' === y || "'" === y) {
              let [e, o] = d(t, n)
              if (i) {
                if (((o = f(t, o)), t[o] && "," !== t[o] && t[o] !== i && "\n" !== t[o] && "\r" !== t[o]))
                  throw new r("unexpected character encountered", { toml: t, ptr: o })
                "," === t[o] && o++
              }
              return [e, o]
            }
            let b = (function (e, t, n, i = !1) {
                if (!n) return (t = c(e, t)) < 0 ? e.length : t
                for (let o = t; o < e.length; o++) {
                  let t = e[o]
                  if ("#" === t) o = c(e, o)
                  else if ("," === t) return o + 1
                  else if (t === n || (i && ("\n" === t || ("\r" === t && "\n" === e[o + 1])))) return o
                }
                throw new r("cannot find end of structure", { toml: e, ptr: t })
              })(t, n, i),
              w =
                ((g = b - ("," === t[b - 1])),
                (x = (v = t.slice(n, g)).indexOf("#")) > -1 && (u(t, x), (v = v.slice(0, x))),
                [v.trimEnd(), x])
            if (!w[0]) throw new r("incomplete key-value declaration: no value specified", { toml: t, ptr: n })
            return (
              i && w[1] > -1 && ((b = f(t, n + w[1])), "," === t[b] && b++),
              [
                (function (e, t, n, i) {
                  if ("true" === e) return !0
                  if ("false" === e) return !1
                  if ("-inf" === e) return -1 / 0
                  if ("inf" === e || "+inf" === e) return 1 / 0
                  if ("nan" === e || "+nan" === e || "-nan" === e) return 0 / 0
                  if ("-0" === e) return i ? 0n : 0
                  let d = a.test(e)
                  if (d || s.test(e)) {
                    if (l.test(e)) throw new r("leading zeroes are not allowed", { toml: t, ptr: n })
                    let o = +(e = e.replace(/_/g, ""))
                    if (isNaN(o)) throw new r("invalid number", { toml: t, ptr: n })
                    if (d) {
                      if ((d = !Number.isSafeInteger(o)) && !i)
                        throw new r("integer value cannot be represented losslessly", { toml: t, ptr: n })
                      ;(d || !0 === i) && (o = BigInt(e))
                    }
                    return o
                  }
                  let c = new o(e)
                  if (!c.isValid()) throw new r("invalid value", { toml: t, ptr: n })
                  return c
                })(w[0], t, n, h),
                b,
              ]
            )
          })(e, i[1], void 0, t, n)
          ;((p[1][p[0]] = y[0]), (g = y[1]))
        }
        if (((g = f(e, g, !0)), e[g] && "\n" !== e[g] && "\r" !== e[g]))
          throw new r("each key-value declaration must be followed by an end-of-line", { toml: e, ptr: g })
        g = f(e, g)
      }
      return i
    }
  },
}
//# sourceMappingURL=85236.c194df1024.js.map
